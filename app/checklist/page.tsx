import {
  grandMasterStats,
  treeckoMasterCards,
} from "../../data/treecko-master";

export default function ChecklistPage() {
  return (
    <main className="site-shell">
      <style>{`
        .master-wrap { padding: 76px 5vw 110px; }
        .master-top { display:grid; grid-template-columns:1.25fr .75fr; gap:44px; align-items:end; margin-bottom:34px; }
        .master-top h1 { margin:10px 0 16px; font-size:clamp(3rem,8vw,7rem); line-height:.84; letter-spacing:-.055em; }
        .master-top h1 span { color:var(--green-dark); }
        .master-top p { max-width:720px; color:var(--muted); line-height:1.7; }
        .master-score { border:1px solid var(--line); padding:28px; background:rgba(255,255,255,.16); }
        .master-score strong { display:block; font-size:clamp(3rem,7vw,6rem); line-height:1; }
        .master-score span { display:block; margin-top:8px; text-transform:uppercase; letter-spacing:.12em; font-size:.78rem; }
        .master-progress { height:10px; border:1px solid var(--ink); margin-top:18px; overflow:hidden; }
        .master-progress > span { display:block; height:100%; background:var(--green-dark); }
        .master-note { margin:26px 0 34px; padding:18px 20px; border-left:5px solid var(--orange); background:rgba(255,255,255,.18); line-height:1.6; }
        .master-table { border-top:1px solid var(--line); }
        .master-head, .master-row { display:grid; grid-template-columns:56px 74px 100px minmax(200px,1.35fr) 110px minmax(170px,1fr) 130px; gap:14px; align-items:center; }
        .master-head { padding:14px 10px; font-size:.72rem; font-weight:800; letter-spacing:.12em; text-transform:uppercase; border-bottom:1px solid var(--line); }
        .master-row { padding:16px 10px; border-bottom:1px solid var(--line); }
        .master-row.owned { background:rgba(88,169,54,.13); }
        .master-check { width:28px; height:28px; display:grid; place-items:center; border:2px solid var(--ink); font-size:1rem; font-weight:900; }
        .master-row.owned .master-check { background:var(--green-dark); color:white; border-color:var(--green-dark); }
        .master-card strong { display:block; }
        .master-card small { display:block; margin-top:4px; color:var(--muted); }
        .master-variant { font-weight:750; }
        .master-status { font-size:.75rem; font-weight:900; letter-spacing:.08em; text-transform:uppercase; }
        .master-status.found { color:var(--green-dark); }
        .master-video { font-weight:800; text-decoration:underline; text-underline-offset:3px; }
        .master-footer-note { margin-top:28px; color:var(--muted); font-size:.9rem; line-height:1.6; }
        @media (max-width: 1000px) {
          .master-top { grid-template-columns:1fr; }
          .master-head { display:none; }
          .master-row { grid-template-columns:44px 60px 1fr; gap:10px; align-items:start; }
          .master-row > :nth-child(4), .master-row > :nth-child(5), .master-row > :nth-child(6), .master-row > :nth-child(7) { grid-column:3; }
          .master-row > :nth-child(4)::before { content:"Set: "; font-weight:400; color:var(--muted); }
          .master-row > :nth-child(5)::before { content:"Card: "; font-weight:400; color:var(--muted); }
          .master-row > :nth-child(6)::before { content:"Variant: "; font-weight:400; color:var(--muted); }
        }
      `}</style>

      <header className="site-header">
        <a className="brand" href="/" aria-label="shinytreecko252 home">
          <span className="brand-mark">252</span>
          <span>
            <strong>shinytreecko</strong>
            <em>.com</em>
          </span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="/checklist">Checklist</a>
          <a href="/#collection">Collection</a>
          <a href="/#hunt">Wanted</a>
          <a href="/story">My Story</a>
          <a href="/#resources">Resources</a>
          <a href="/#phygital">Phygital</a>
        </nav>

        <a
          className="x-button"
          href="https://x.com/ShinyTreecko252"
          target="_blank"
          rel="noreferrer"
        >
          Follow on X ↗
        </a>
      </header>

      <section className="master-wrap">
        <div className="master-top">
          <div>
            <p className="eyebrow">SHINYTREECKO252 GRAND MASTER SET</p>
            <h1>
              THE 42
              <br />
              <span>TREECKOS.</span>
            </h1>
            <p>
              The official ShinyTreecko252 checklist of 42 known English physical
              Treecko variants in the project&apos;s frozen v1 taxonomy. Every checkmark
              represents at least one physical copy in the collection.
            </p>
          </div>

          <div className="master-score">
            <strong>
              {grandMasterStats.owned}/{grandMasterStats.total}
            </strong>
            <span>Grand Master Set Found</span>
            <div className="master-progress" aria-label="Checklist progress">
              <span
                style={{ width: `${grandMasterStats.completionPercentage}%` }}
              />
            </div>
            <span>{grandMasterStats.completionPercentage}% COMPLETE</span>
          </div>
        </div>

        <div className="master-note">
          This page is read-only for visitors. The collection is maintained privately
          in the ShinyTreecko252 Excel master and published after each update. Duplicate
          copies count toward the separate 10,000 Treecko quest, not toward 42/42 completion.
        </div>

        <div className="master-table">
          <div className="master-head">
            <span>#</span>
            <span>Found</span>
            <span>Year</span>
            <span>Set</span>
            <span>Card #</span>
            <span>Variant</span>
            <span>Status</span>
          </div>

          {treeckoMasterCards.map((card) => (
            <article
              className={`master-row ${card.owned ? "owned" : ""}`}
              key={card.id}
            >
              <strong>{String(card.id).padStart(2, "0")}</strong>
              <span className="master-check" aria-label={card.owned ? "Found" : "Hunting"}>
                {card.owned ? "✓" : ""}
              </span>
              <span>{card.year}</span>
              <div className="master-card">
                <strong>{card.set}</strong>
                <small>{card.cardName}</small>
              </div>
              <strong>{card.cardNumber}</strong>
              <div>
                <span className="master-variant">{card.variant}</span>
                {card.publicNote ? <small>{card.publicNote}</small> : null}
                {card.unboxingVideoUrl ? (
                  <div>
                    <a
                      className="master-video"
                      href={card.unboxingVideoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Watch unboxing ↗
                    </a>
                  </div>
                ) : null}
              </div>
              <span className={`master-status ${card.owned ? "found" : ""}`}>
                {card.owned ? "FOUND" : "HUNTING"}
              </span>
            </article>
          ))}
        </div>

        <p className="master-footer-note">
          Checklist denominator: 42 known English physical variants in the
          ShinyTreecko252 v1 taxonomy. The project can version the checklist if a
          future release or newly documented variant is intentionally added.
        </p>
      </section>
    </main>
  );
}
