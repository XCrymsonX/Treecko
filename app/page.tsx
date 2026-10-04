import {
  collectionStats as treeckoCollectionStats,
} from "../data/treecko-cards";

const TREECKO_QUANTITY_GOAL = 10000;

const quantityOwned =
  treeckoCollectionStats.totalCopiesOwned ?? treeckoCollectionStats.owned;

const quantityProgress = Math.min(
  (quantityOwned / TREECKO_QUANTITY_GOAL) * 100,
  100
);

const collectionStats = [
  {
    value: treeckoCollectionStats.total.toString(),
    label: "Known Targets",
  },
  {
    value: quantityOwned.toLocaleString(),
    label: "Treeckos Owned",
  },
  {
    value: "10,000",
    label: "Collection Goal",
  },
];

const huntCards = [
  {
    status: "GRAIL",
    eyebrow: "ULTIMATE GRAIL",
    title: "Treecko ☆ — EX Team Rocket Returns",
    description:
      "Treecko ☆ 109/109 sits near the top of my personal wanted list. Finding the right copy — at the right condition and price — is one of the biggest long-term goals of the collection.",
  },
  {
    status: "HUNTING",
    eyebrow: "WANTED",
    title: "The next missing Treecko",
    description:
      "Every printing, promo, language, reverse holo, stamped card, and obscure variant moves the collection one step closer to completion.",
  },
  {
    status: "HUNTING",
    eyebrow: "CONDITION",
    title: "Upgrade candidates",
    description:
      "Completing the checklist comes first. After that, damaged and heavily played copies can eventually be upgraded to better-condition examples.",
  },
];

const resources = [
  {
    number: "01",
    title: "Find the cards",
    description:
      "The marketplaces, card shops, databases, and tools I use while searching for Treecko cards.",
    cta: "Marketplace guide coming soon",
  },
  {
    number: "02",
    title: "Protect the collection",
    description:
      "Sleeves, binders, top loaders, storage, and supplies used throughout the collection.",
    cta: "Collector gear coming soon",
  },
  {
    number: "03",
    title: "Grade & preserve",
    description:
      "Tracking grading decisions, condition upgrades, and long-term preservation.",
    cta: "Grading guide coming soon",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="shinytreecko252 home">
          <span className="brand-mark">252</span>

          <span>
            <strong>shinytreecko</strong>
            <em>.com</em>
          </span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#checklist">Checklist</a>
          <a href="#collection">Collection</a>
          <a href="#hunt">Wanted</a>
          <a href="/story">My Story</a>
          <a href="#resources">Resources</a>
          <a href="#phygital">Phygital</a>
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

      <section className="hero" id="top">
        <div className="hero-grid" />

        <div className="hero-content">
          <p className="kicker">
            <span />
            A Pokémon collecting project
          </p>

          <h1>
            THE QUEST FOR
            <br />
            <span>EVERY TREECKO.</span>
          </h1>

          <p className="hero-copy">
            One collector. One Pokémon. Every card, printing, promo, language,
            and variant I can find — documented from the beginning.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#checklist">
              Explore the checklist
              <span>→</span>
            </a>

            <a className="text-button" href="/story">
              Read my story →
            </a>
          </div>
        </div>

        <aside className="dex-card">
          <div className="dex-top">
            <span>COLLECTOR FILE</span>
            <span>№ 0252</span>
          </div>

          <div className="dex-visual">
            <div className="dex-orbit orbit-one" />
            <div className="dex-orbit orbit-two" />
            <div className="dex-number">252</div>
          </div>

          <div className="dex-name">
            <span>SPECIES</span>
            <strong>TREECKO</strong>
          </div>

          <div className="dex-meta">
            <div>
              <span>TYPE</span>
              <strong>GRASS</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>HUNTING</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="stats-section" aria-label="Collection statistics">
        {collectionStats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}

        <div className="stat stat-progress">
          <div className="progress-heading">
            <span>10,000 Treecko Goal</span>

            <strong>
              {quantityOwned.toLocaleString()} /{" "}
              {TREECKO_QUANTITY_GOAL.toLocaleString()} ·{" "}
              {quantityProgress.toFixed(2)}%
            </strong>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${quantityProgress}%`,
              }}
            />
          </div>
        </div>
      </section>

      <section className="section mission-section" id="mission">
        <div className="section-label">
          <span>01</span>
          <p>The Mission</p>
        </div>

        <div className="mission-copy">
          <p className="large-copy">
            I&apos;m attempting something completely unreasonable:
          </p>

          <h2>
            OWN ONE OF <em>EVERY</em>
            <br />
            TREECKO CARD.
          </h2>

          <div className="mission-columns">
            <p>
              This isn&apos;t a collection built around whatever card is
              currently expensive. It&apos;s about choosing one Pokémon and
              following its history through the Pokémon Trading Card Game.
            </p>

            <p>
              The obvious cards count. So do the strange ones: foreign
              printings, promos, reverse holos, stamped releases, and variants
              hiding in old binders around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="section mission-section" id="story">
        <div className="section-label">
          <span>02</span>
          <p>My Story</p>
        </div>

        <div className="mission-copy">
          <p className="eyebrow">WHY TREECKO?</p>

          <h2>
            THIS STARTED
            <br />
            LONG BEFORE THE CHECKLIST.
          </h2>

          <div className="mission-columns">
            <p>
              Pokémon has been part of my life since the Red and Blue era.
              I grew up playing the games and collecting cards with my three
              older brothers, back when the cards we now call vintage were
              simply the cards our mom brought home for us.
            </p>

            <p>
              Years later, coming back to Pokémon as an adult has brought back
              something I didn&apos;t realize I missed: the hunt, the artwork,
              the discovery, and the feeling of physically holding something
              meaningful in an increasingly digital world.
            </p>
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="/story">
              Read my story
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section checklist-section" id="checklist">
        <div className="section-label">
          <span>03</span>
          <p>The Treecko Checklist</p>
        </div>

        <div className="section-heading-row">
          <div>
            <p className="eyebrow">THE DATABASE</p>

            <h2>
              EVERY CARD.
              <br />
              ONE CHECKLIST.
            </h2>
          </div>

          <p className="section-intro">
            The public record of the hunt. Follow what&apos;s already in the
            collection, what&apos;s still missing, which variants I&apos;m
            discovering, and which cards have become major grails.
          </p>
        </div>

        <div className="checklist-preview">
          <div className="checklist-header">
            <span>STATUS</span>
            <span>CARD</span>
            <span>COLLECTION</span>
          </div>

          <div className="checklist-row">
            <span className="status-dot owned" />

            <div>
              <strong>Distinct Treeckos Owned</strong>
              <small>Unique checklist targets currently in the collection</small>
            </div>

            <span className="status owned-text">
              {treeckoCollectionStats.owned} OWNED
            </span>
          </div>

          <div className="checklist-row">
            <span className="status-dot hunting" />

            <div>
              <strong>Known Treecko Targets</strong>
              <small>Current cards represented in the database</small>
            </div>

            <span className="status">
              {treeckoCollectionStats.total} TARGETS
            </span>
          </div>

          <div className="checklist-row">
            <span className="status-dot grail" />

            <div>
              <strong>Grail Tracker</strong>
              <small>The hardest Treeckos currently on the wanted list</small>
            </div>

            <span className="status">
              {treeckoCollectionStats.grails} GRAILS
            </span>
          </div>
        </div>

        <div className="legend">
          <span>
            <i className="legend-owned" /> Owned
          </span>

          <span>
            <i className="legend-hunting" /> Hunting
          </span>

          <span>
            <i className="legend-grail" /> Grail
          </span>
        </div>
      </section>

      <section className="section collection-section" id="collection">
        <div className="section-label">
          <span>04</span>
          <p>The Collection</p>
        </div>

        <div className="collection-feature">
          <div className="collection-placeholder">
            <span>10,000 TREECKO PROJECT</span>

            <strong>
              {quantityOwned.toLocaleString()}
              <br />
              OF
              <br />
              {TREECKO_QUANTITY_GOAL.toLocaleString()}
            </strong>

            <small>{quantityProgress.toFixed(2)}% of the quantity goal</small>
          </div>

          <div className="collection-story">
            <p className="eyebrow">FOLLOW THE COLLECTION GROW</p>

            <h2>ONE TREECKO AT A TIME.</h2>

            <p>
              Completing the master checklist is only one part of the project.
              I&apos;m also working toward owning 10,000 physical Treecko cards.
              Duplicates count. Commons count. Strange printings count. Every
              Treecko added to the collection moves the number forward.
            </p>

            <p>
              This site will document both sides of the journey: which unique
              cards I&apos;ve found and the total number of Treecko cards in the
              collection so the community can follow the count as it grows.
            </p>
          </div>
        </div>

        <div className="collection-feature">
          <div className="collection-placeholder">
            <span>CHECKLIST PROGRESS</span>

            <strong>
              {treeckoCollectionStats.owned}
              <br />
              OF
              <br />
              {treeckoCollectionStats.total}
            </strong>

            <small>
              {treeckoCollectionStats.completionPercentage}% complete
            </small>
          </div>

          <div className="collection-story">
            <p className="eyebrow">DOCUMENTING THE JOURNEY</p>

            <h2>THE CARD IS ONLY HALF THE STORY.</h2>

            <p>
              Every major pickup can have its own record: where I found it,
              why I wanted it, what I paid, its condition, and where it fits
              into the larger collection.
            </p>

            <p>
              Years from now, this site should show more than a completed
              binder. It should show exactly how that collection was built.
            </p>
          </div>
        </div>
      </section>

      <section className="section hunt-section" id="hunt">
        <div className="section-label">
          <span>05</span>
          <p>Wanted List</p>
        </div>

        <div className="section-heading-row">
          <div>
            <p className="eyebrow">THE WANT LIST</p>

            <h2>
              THE HUNT
              <br />
              NEVER STOPS.
            </h2>
          </div>

          <p className="section-intro">
            These are the cards currently occupying the top of my radar.
            See something I&apos;m missing? Find a forgotten Treecko in an old
            binder? Tag <strong>@ShinyTreecko252</strong> on X.
          </p>
        </div>

        <div className="hunt-grid">
          {huntCards.map((card, index) => (
            <article className="hunt-card" key={card.title}>
              <div className="hunt-card-number">0{index + 1}</div>

              <p className="eyebrow">{card.eyebrow}</p>

              <h3>{card.title}</h3>

              <p>{card.description}</p>

              <span className={`pill ${card.status.toLowerCase()}`}>
                {card.status}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="section resources-section" id="resources">
        <div className="section-label">
          <span>06</span>
          <p>Collector Resources</p>
        </div>

        <div className="section-heading-row">
          <div>
            <p className="eyebrow">THE TOOLKIT</p>

            <h2>
              WHAT I ACTUALLY
              <br />
              USE TO COLLECT.
            </h2>
          </div>

          <p className="section-intro">
            Marketplaces, storage, protection, grading, research tools, and
            other resources discovered while building the collection.
          </p>
        </div>

        <div className="resource-list">
          {resources.map((resource) => (
            <article className="resource-row" key={resource.number}>
              <span>{resource.number}</span>

              <div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </div>

              <strong>{resource.cta} →</strong>
            </article>
          ))}
        </div>

        <p className="affiliate-disclosure">
          Disclosure: Some future links on this site may be affiliate links. If
          you purchase through one of those links, I may earn a commission at
          no additional cost to you.
        </p>
      </section>

      <section className="section phygital-section" id="phygital">
        <div className="phygital-copy">
          <p className="eyebrow">PHYSICAL × DIGITAL</p>

          <h2>
            CARDBOARD ISN&apos;T
            <br />
            DISAPPEARING.
            <br />
            <em>IT&apos;S GETTING NEW RAILS.</em>
          </h2>

          <p>
            Exploring where traditional collecting intersects with digital
            marketplaces, verifiable provenance, tokenization, and on-chain
            ownership — without losing sight of what makes the physical card
            matter.
          </p>
        </div>

        <div className="phygital-mark">
          <span>PHYSICAL</span>
          <strong>×</strong>
          <span>DIGITAL</span>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">FOLLOW THE HUNT</p>

        <h2>
          FIND A TREECKO?
          <br />
          <span>TAG ME.</span>
        </h2>

        <p>
          Old binder. Card shop. Auction. Foreign release. Weird promo.
          <br />
          If it&apos;s Treecko, I want to know about it.
        </p>

        <a
          className="primary-button"
          href="https://x.com/ShinyTreecko252"
          target="_blank"
          rel="noreferrer"
        >
          @ShinyTreecko252 on X
          <span>↗</span>
        </a>
      </section>

      <footer>
        <div className="brand footer-brand">
          <span className="brand-mark">252</span>

          <span>
            <strong>shinytreecko</strong>
            <em>.com</em>
          </span>
        </div>

        <p>
          An independent Pokémon card collecting project.
          <br />
          Not affiliated with Nintendo, Creatures Inc., GAME FREAK, or The
          Pokémon Company.
        </p>

        <span>
          © {new Date().getFullYear()} shinytreecko252.com
        </span>
      </footer>
    </main>
  );
}