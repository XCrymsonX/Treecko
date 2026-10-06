from __future__ import annotations

import json
import re
import sys
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path
from typing import Any

PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_EXCEL = Path(r"C:\STUFF\Treecko\ShinyTreecko252_Grand_Master_42.xlsx")
OUTPUT_FILE = PROJECT_ROOT / "data" / "treecko-master.ts"
MASTER_SHEET = "Master Checklist"
GRAIL_SHEET = "Grail Picks"
EXPECTED_TOTAL = 42

NS_MAIN = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
NS_REL = {"r": "http://schemas.openxmlformats.org/package/2006/relationships"}
NS_DOC_REL = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"


def column_number(cell_ref: str) -> int:
    letters = re.match(r"([A-Z]+)", cell_ref)
    if not letters:
        raise ValueError(f"Invalid cell reference: {cell_ref}")
    result = 0
    for ch in letters.group(1):
        result = result * 26 + (ord(ch) - ord("A") + 1)
    return result


def shared_strings(zf: zipfile.ZipFile) -> list[str]:
    if "xl/sharedStrings.xml" not in zf.namelist():
        return []
    root = ET.fromstring(zf.read("xl/sharedStrings.xml"))
    values: list[str] = []
    for si in root.findall("m:si", NS_MAIN):
        values.append("".join(t.text or "" for t in si.findall(".//m:t", NS_MAIN)))
    return values


def worksheet_path(zf: zipfile.ZipFile, sheet_name: str) -> str:
    workbook = ET.fromstring(zf.read("xl/workbook.xml"))
    rel_id = None
    for sheet in workbook.findall("m:sheets/m:sheet", NS_MAIN):
        if sheet.attrib.get("name") == sheet_name:
            rel_id = sheet.attrib.get(f"{{{NS_DOC_REL}}}id")
            break
    if not rel_id:
        raise RuntimeError(f'Worksheet "{sheet_name}" was not found.')

    rels = ET.fromstring(zf.read("xl/_rels/workbook.xml.rels"))
    for rel in rels.findall("r:Relationship", NS_REL):
        if rel.attrib.get("Id") == rel_id:
            target = rel.attrib["Target"].lstrip("/")
            return target if target.startswith("xl/") else f"xl/{target}"
    raise RuntimeError(f'Could not resolve worksheet "{sheet_name}".')


def cell_value(cell: ET.Element, strings: list[str]) -> Any:
    cell_type = cell.attrib.get("t")
    if cell_type == "inlineStr":
        return "".join(t.text or "" for t in cell.findall(".//m:t", NS_MAIN))

    value_node = cell.find("m:v", NS_MAIN)
    if value_node is None or value_node.text is None:
        return ""
    raw = value_node.text

    if cell_type == "s":
        return strings[int(raw)]
    if cell_type == "b":
        return raw == "1"
    if cell_type in {"str", "e"}:
        return raw

    try:
        number_value = float(raw)
        return int(number_value) if number_value.is_integer() else number_value
    except ValueError:
        return raw


def read_sheet_rows(path: Path, sheet_name: str) -> list[dict[str, Any]]:
    with zipfile.ZipFile(path) as zf:
        strings = shared_strings(zf)
        sheet_xml = ET.fromstring(zf.read(worksheet_path(zf, sheet_name)))
        raw_rows: list[dict[int, Any]] = []
        for row in sheet_xml.findall("m:sheetData/m:row", NS_MAIN):
            row_values: dict[int, Any] = {}
            for cell in row.findall("m:c", NS_MAIN):
                ref = cell.attrib.get("r", "")
                row_values[column_number(ref)] = cell_value(cell, strings)
            if row_values:
                raw_rows.append(row_values)

    if not raw_rows:
        raise RuntimeError(f'The worksheet "{sheet_name}" is empty.')

    headers = {col: str(value).strip() for col, value in raw_rows[0].items()}
    records: list[dict[str, Any]] = []
    for raw in raw_rows[1:]:
        record = {headers[col]: raw.get(col, "") for col in headers}
        if any(str(v).strip() for v in record.values()):
            records.append(record)
    return records


def text(value: Any) -> str:
    return "" if value is None else str(value).strip()


def number(value: Any, default: int = 0) -> int:
    if value in (None, ""):
        return default
    return int(float(value))


def optional_number(value: Any) -> int | None:
    if value in (None, ""):
        return None
    return int(float(value))


def is_owned(value: Any) -> bool:
    return text(value).lower() in {"☑", "yes", "y", "true", "1", "owned", "x", "✓", "✔"}


def ts_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def build_typescript(master_records: list[dict[str, Any]], grail_records: list[dict[str, Any]]) -> str:
    master_records = [r for r in master_records if text(r.get("ID"))]
    if len(master_records) != EXPECTED_TOTAL:
        raise RuntimeError(f"Expected {EXPECTED_TOTAL} checklist rows, found {len(master_records)}.")

    ids = [number(r.get("ID")) for r in master_records]
    if ids != list(range(1, EXPECTED_TOTAL + 1)):
        raise RuntimeError("Checklist IDs must be exactly 1 through 42 in order.")

    owned_by_id = {number(r.get("ID")): is_owned(r.get("Owned")) for r in master_records}
    grail_records = [r for r in grail_records if text(r.get("Rank"))]

    lines = [
        "// AUTO-GENERATED by scripts/sync_treecko_checklist.py.",
        "// Edit the private Excel master, not this file.",
        "",
        "export type TreeckoMasterCard = {",
        "  id: number;",
        "  owned: boolean;",
        "  year: number;",
        "  set: string;",
        "  setCode: string;",
        "  cardNumber: string;",
        "  cardName: string;",
        "  variant: string;",
        "  illustrator: string;",
        "  type: string;",
        "  acquiredDate: string;",
        "  quantityOwned: number;",
        "  unboxingVideoUrl: string;",
        "  publicNote: string;",
        "};",
        "",
        "export const treeckoMasterCards: TreeckoMasterCard[] = [",
    ]

    for r in master_records:
        item = {
            "id": number(r.get("ID")),
            "owned": is_owned(r.get("Owned")),
            "year": number(r.get("Year")),
            "set": text(r.get("Set")),
            "setCode": text(r.get("Set Code")),
            "cardNumber": text(r.get("Card #")),
            "cardName": text(r.get("Card Name")),
            "variant": text(r.get("Variant")),
            "illustrator": text(r.get("Illustrator")),
            "type": text(r.get("Type")),
            "acquiredDate": text(r.get("Acquired Date")),
            "quantityOwned": number(r.get("Quantity Owned")),
            "unboxingVideoUrl": text(r.get("Unboxing Video URL")),
            "publicNote": text(r.get("Public Note")),
        }
        lines.extend([
            "  {",
            f"    id: {item['id']},",
            f"    owned: {str(item['owned']).lower()},",
            f"    year: {item['year']},",
            f"    set: {ts_string(item['set'])},",
            f"    setCode: {ts_string(item['setCode'])},",
            f"    cardNumber: {ts_string(item['cardNumber'])},",
            f"    cardName: {ts_string(item['cardName'])},",
            f"    variant: {ts_string(item['variant'])},",
            f"    illustrator: {ts_string(item['illustrator'])},",
            f"    type: {ts_string(item['type'])},",
            f"    acquiredDate: {ts_string(item['acquiredDate'])},",
            f"    quantityOwned: {item['quantityOwned']},",
            f"    unboxingVideoUrl: {ts_string(item['unboxingVideoUrl'])},",
            f"    publicNote: {ts_string(item['publicNote'])},",
            "  },",
        ])

    lines.extend([
        "];",
        "",
        "export const grandMasterStats = {",
        "  total: treeckoMasterCards.length,",
        "  owned: treeckoMasterCards.filter((card) => card.owned).length,",
        "  remaining: treeckoMasterCards.filter((card) => !card.owned).length,",
        "  totalCopies: treeckoMasterCards.reduce((sum, card) => sum + card.quantityOwned, 0),",
        "  completionPercentage: Math.round(",
        "    (treeckoMasterCards.filter((card) => card.owned).length / treeckoMasterCards.length) * 100,",
        "  ),",
        "};",
        "",
        "export type TreeckoGrailPick = {",
        "  rank: number;",
        '  tier: "GRAIL" | "GEM PICK";',
        "  displayName: string;",
        "  year: number;",
        "  set: string;",
        "  cardNumber: string;",
        "  variant: string;",
        "  masterId: number | null;",
        "  found: boolean;",
        "  publicNote: string;",
        "  sourceUrl: string;",
        "};",
        "",
        "export const treeckoGrailPicks: TreeckoGrailPick[] = [",
    ])

    for r in grail_records:
        master_id = optional_number(r.get("Master ID"))
        found = owned_by_id.get(master_id, False) if master_id is not None else is_owned(r.get("External Found"))
        tier = text(r.get("Tier")) or "GEM PICK"
        if tier not in {"GRAIL", "GEM PICK"}:
            raise RuntimeError(f'Invalid Grail Picks tier: {tier}')
        lines.extend([
            "  {",
            f"    rank: {number(r.get('Rank'))},",
            f"    tier: {ts_string(tier)},",
            f"    displayName: {ts_string(text(r.get('Display Name')))},",
            f"    year: {number(r.get('Year'))},",
            f"    set: {ts_string(text(r.get('Set / Release')))},",
            f"    cardNumber: {ts_string(text(r.get('Card #')))},",
            f"    variant: {ts_string(text(r.get('Variant')))},",
            f"    masterId: {'null' if master_id is None else master_id},",
            f"    found: {str(found).lower()},",
            f"    publicNote: {ts_string(text(r.get('Public Note')))},",
            f"    sourceUrl: {ts_string(text(r.get('Source URL')))},",
            "  },",
        ])

    lines.extend([
        "];",
        "",
        "export const grailPickStats = {",
        "  total: treeckoGrailPicks.length,",
        "  found: treeckoGrailPicks.filter((card) => card.found).length,",
        "};",
        "",
    ])
    return "\n".join(lines)


def main() -> int:
    excel_path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_EXCEL
    if not excel_path.exists():
        print(f"[ERROR] Excel master not found: {excel_path}")
        print("Pass the Excel path as the first argument if you keep it elsewhere.")
        return 1

    master_records = read_sheet_rows(excel_path, MASTER_SHEET)
    grail_records = read_sheet_rows(excel_path, GRAIL_SHEET)
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(build_typescript(master_records, grail_records), encoding="utf-8")

    master_only = [r for r in master_records if text(r.get("ID"))]
    owned = sum(is_owned(r.get("Owned")) for r in master_only)
    copies = sum(number(r.get("Quantity Owned")) for r in master_only)
    print("[OK] ShinyTreecko252 Grand Master checklist synced.")
    print(f"[OK] Variants: {owned}/{EXPECTED_TOTAL} owned")
    print(f"[OK] Physical copies logged in this sheet: {copies}")
    print(f"[OK] Grails & Gem Picks exported: {len([r for r in grail_records if text(r.get('Rank'))])}")
    print(f"[OK] Website data written to: {OUTPUT_FILE}")
    print("[PRIVACY] Private Note was NOT exported to the website.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
