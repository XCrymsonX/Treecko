$ErrorActionPreference = "Stop"

$ProjectRoot = "C:\STUFF\shinytreecko252"
$ExcelMaster = "C:\STUFF\Treecko\ShinyTreecko252_Grand_Master_42.xlsx"

Set-Location $ProjectRoot

Write-Host ""
Write-Host "=== ShinyTreecko252 Checklist Update ==="
Write-Host ""

python .\scripts\sync_treecko_checklist.py $ExcelMaster
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git add .\data\treecko-master.ts .\app\checklist\page.tsx .\scripts\sync_treecko_checklist.py .\update_checklist.ps1

$changes = git status --porcelain
if (-not $changes) {
    Write-Host "[OK] No website changes to publish."
    exit 0
}

git commit -m "Update Treecko Grand Master checklist"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git push
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host ""
Write-Host "[SUCCESS] Checklist published. Cloudflare will redeploy from GitHub automatically."
Write-Host "[PUBLIC] https://shinytreecko252.com/checklist"
