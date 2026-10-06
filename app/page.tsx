const masterList = [
  { id: 1, year: 2003, set: "EX Ruby & Sapphire", number: "75/109", variant: "Normal" },
  { id: 2, year: 2003, set: "EX Ruby & Sapphire", number: "75/109", variant: "Reverse Holo" },
  { id: 3, year: 2003, set: "EX Ruby & Sapphire", number: "76/109", variant: "Normal" },
  { id: 4, year: 2003, set: "EX Ruby & Sapphire", number: "76/109", variant: "Reverse Holo" },
  { id: 5, year: 2003, set: "EX Ruby & Sapphire", number: "76/109", variant: "Jumbo 25th Celebration" },
  { id: 6, year: 2003, set: "EX Ruby & Sapphire", number: "76/109", variant: "Reed Weichler" },
  { id: 7, year: 2003, set: "Nintendo Black Star Promos", number: "003", variant: "Reverse Holo" },
  { id: 8, year: 2003, set: "Nintendo Black Star Promos", number: "007", variant: "Holo Pop Tournament" },
  { id: 9, year: 2003, set: "Nintendo Black Star Promos", number: "016", variant: "Normal" },
  { id: 10, year: 2003, set: "Nintendo Black Star Promos", number: "016", variant: "Holo Cosmos" },
  { id: 11, year: 2003, set: "EX Dragon", number: "80/97", variant: "Normal" },
  { id: 12, year: 2003, set: "EX Dragon", number: "80/97", variant: "Reverse Holo" },
  { id: 13, year: 2004, set: "Poké Card Creator Pack", number: "1/5", variant: "Normal" },
  { id: 14, year: 2004, set: "EX Team Rocket Returns", number: "109/109", variant: "Treecko ★ Gold Star Holo" },
  { id: 15, year: 2005, set: "EX Emerald", number: "70/106", variant: "Normal" },
  { id: 16, year: 2005, set: "EX Emerald", number: "70/106", variant: "Gen Con" },
  { id: 17, year: 2005, set: "EX Emerald", number: "70/106", variant: "Reverse Holo / Set Logo" },
  { id: 18, year: 2006, set: "POP Series 4", number: "15/17", variant: "Treecko δ — Normal" },
  { id: 19, year: 2006, set: "EX Crystal Guardians", number: "67/100", variant: "Normal" },
  { id: 20, year: 2006, set: "EX Crystal Guardians", number: "67/100", variant: "Reverse Holo / Set Logo" },
  { id: 21, year: 2006, set: "EX Crystal Guardians", number: "68/100", variant: "Treecko δ — Normal" },
  { id: 22, year: 2006, set: "EX Crystal Guardians", number: "68/100", variant: "Treecko δ — Reverse Holo / Set Logo" },
  { id: 23, year: 2008, set: "Great Encounters", number: "90/106", variant: "Normal" },
  { id: 24, year: 2008, set: "Great Encounters", number: "90/106", variant: "Reverse Holo" },
  { id: 25, year: 2008, set: "Stormfront", number: "79/100", variant: "Normal" },
  { id: 26, year: 2008, set: "Stormfront", number: "79/100", variant: "Reverse Holo" },
  { id: 27, year: 2009, set: "Arceus", number: "78/99", variant: "Normal" },
  { id: 28, year: 2009, set: "Arceus", number: "78/99", variant: "Reverse Holo" },
  { id: 29, year: 2009, set: "Arceus", number: "79/99", variant: "Normal" },
  { id: 30, year: 2009, set: "Arceus", number: "79/99", variant: "Reverse Holo" },
  { id: 31, year: 2013, set: "Plasma Freeze", number: "6/116", variant: "Normal" },
  { id: 32, year: 2013, set: "XY Black Star Promos", number: "XY36", variant: "Normal" },
  { id: 33, year: 2015, set: "Primal Clash", number: "6/160", variant: "Normal" },
  { id: 34, year: 2015, set: "XY Trainer Kit — Latias", number: "7/30", variant: "Normal" },
  { id: 35, year: 2015, set: "XY Trainer Kit — Latias", number: "24/30", variant: "Normal" },
  { id: 36, year: 2015, set: "McDonald's Collection 2015", number: "1/12", variant: "Holo" },
  { id: 37, year: 2018, set: "Celestial Storm", number: "7/168", variant: "Normal" },
  { id: 38, year: 2018, set: "Celestial Storm", number: "8/168", variant: "Normal" },
  { id: 39, year: 2018, set: "Lost Thunder", number: "20/214", variant: "Normal" },
  { id: 40, year: 2021, set: "McDonald's Collection 2021", number: "3/25", variant: "25th Celebration" },
  { id: 41, year: 2021, set: "McDonald's Collection 2021", number: "3/25", variant: "Holo 25th Celebration" },
  { id: 42, year: 2025, set: "MEP Black Star Promos", number: "055", variant: "Holo" },
];

const wantedCards = [
  {
    name: "Treecko ★",
    set: "EX Team Rocket Returns",
    number: "109/109",
    variant: "Gold Star Holo",
    tier: "GRAIL",
  },
  {
    name: "Treecko",
    set: "EX Dragon",
    number: "80/97",
    variant: "Reverse Holo",
    tier: "WANT",
  },
  {
    name: "Treecko",
    set: "Poké Card Creator Pack",
    number: "1/5",
    variant: "Poké Card Creator Contest",
    tier: "GRAIL",
  },
  {
    name: "Ash's Treecko",
    set: "ADV-P Promotional Card",
    number: "036/ADV-P",
    variant: "Japanese Promo",
    tier: "GRAIL",
  },
  {
    name: "Treecko δ",
    set: "EX Crystal Guardians",
    number: "68/100",
    variant: "Reverse Holo / Set Logo",
    tier: "WANT",
  },
  {
    name: "Treecko",
    set: "EX Emerald",
    number: "70/106",
    variant: "Reverse Holo / Set Logo",
    tier: "WANT",
  },
  {
    name: "Treecko",
    set: "EX Crystal Guardians",
    number: "67/100",
    variant: "Reverse Holo / Set Logo",
    tier: "WANT",
  },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top">
          SHINY<span>TREECKO</span>252
        </a>

        <nav>
          <a href="#master-list">42 LIST</a>
          <a href="#wanted">WANTED</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow">#0252 · TREECKO</div>

        <h1>
          THE QUEST FOR
          <br />
          <span>EVERY TREECKO.</span>
        </h1>

        <p className="intro">
          ShinyTreecko252 is my personal Pokémon TCG collecting project.
          I&apos;m documenting the hunt to own the 42 Treecko physical
          variants in my English Grand Master checklist while building a
          collection around one of my favorite Pokémon.
        </p>

        <div className="heroStats">
          <div>
            <strong>42</strong>
            <span>MASTER LIST</span>
          </div>

          <div>
            <strong>7</strong>
            <span>TOP WANTS</span>
          </div>

          <div>
            <strong>#0252</strong>
            <span>TREECKO</span>
          </div>
        </div>
      </section>

      <section className="section" id="master-list">
        <div className="sectionHeading">
          <div>
            <span className="sectionNumber">01</span>
            <h2>THE 42.</h2>
          </div>

          <p>
            My Grand Master checklist of 42 known English Treecko physical
            variants. The hunt starts here.
          </p>
        </div>

        <div className="masterGrid">
          {masterList.map((card) => (
            <article className="masterCard" key={card.id}>
              <div className="checkBox" aria-hidden="true" />

              <div className="cardNumber">
                {String(card.id).padStart(2, "0")}
              </div>

              <div className="cardInfo">
                <div className="cardTop">
                  <strong>{card.set}</strong>
                  <span>{card.year}</span>
                </div>

                <div className="cardBottom">
                  <span>{card.number}</span>
                  <span>{card.variant}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wantedSection" id="wanted">
        <div className="sectionHeading wantedHeading">
          <div>
            <span className="sectionNumber">02</span>
            <h2>GRAILS + WANTS.</h2>
          </div>

          <p>
            The Treecko cards currently at the top of my hunt. Some are part
            of the 42-card checklist; others are personal favorites outside it.
          </p>
        </div>

        <div className="wantedGrid">
          {wantedCards.map((card, index) => (
            <article className="wantedCard" key={`${card.name}-${card.number}`}>
              <div className="wantedTop">
                <span className={card.tier === "GRAIL" ? "grailTag" : "wantTag"}>
                  {card.tier}
                </span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <h3>{card.name}</h3>
              <p>{card.set}</p>

              <div className="wantedMeta">
                <span>{card.number}</span>
                <span>{card.variant}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <strong>
          SHINY<span>TREECKO</span>252
        </strong>

        <p>
          Independent Pokémon fan collection project. Pokémon and related
          trademarks belong to their respective owners.
        </p>
      </footer>
    </main>
  );
}