import Image from "next/image";

export default function StoryPage() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="shinytreecko252 home">
          <span className="brand-mark">252</span>

          <span>
            <strong>shinytreecko</strong>
            <em>.com</em>
          </span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="/#checklist">Checklist</a>
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

      <section className="hero" id="top">
        <div className="hero-grid" />

        <div className="hero-content">
          <p className="kicker">
            <span />
            The story behind the hunt
          </p>

          <h1>
            WHY
            <br />
            <span>TREECKO?</span>
          </h1>

          <p className="hero-copy">
            Before there was a checklist, a website, or a goal of 10,000
            Treecko cards, there were four brothers, Game Boys, Pokémon cards,
            and a childhood obsession that never completely disappeared.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="/#collection">
              Follow the collection
              <span>→</span>
            </a>

            <a className="text-button" href="/">
              ← Back home
            </a>
          </div>
        </div>

        <aside className="dex-card">
          <div className="dex-top">
            <span>ORIGIN STORY</span>
            <span>№ 0252</span>
          </div>

          <div className="dex-visual">
            <div className="dex-orbit orbit-one" />
            <div className="dex-orbit orbit-two" />
            <div className="dex-number">252</div>
          </div>

          <div className="dex-name">
            <span>SUBJECT</span>
            <strong>TREECKO</strong>
          </div>

          <div className="dex-meta">
            <div>
              <span>ERA</span>
              <strong>GEN III</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>BACK AGAIN</strong>
            </div>
          </div>
        </aside>
      </section>

      <section
        style={{
          padding: "48px clamp(24px, 6vw, 96px)",
          background: "var(--paper-dark)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(260px, 0.6fr)",
            gap: "clamp(28px, 5vw, 72px)",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              border: "2px solid var(--ink)",
              boxShadow: "10px 10px 0 var(--ink)",
              background: "var(--ink)",
            }}
          >
            <Image
              src="/treecko-good-morning.png"
              alt="A cheerful Treecko-inspired creature in a bright outdoor scene"
              width={1024}
              height={1024}
              priority
              style={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <div>
            <p className="eyebrow">THE FEELING BEHIND THE PROJECT</p>

            <h2
              style={{
                marginTop: "12px",
                marginBottom: "22px",
              }}
            >
              IT&apos;S FUN
              <br />
              TO BE BACK.
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "18px",
              }}
            >
              That&apos;s really what this project comes down to. Collecting
              Treecko has brought back the excitement of discovering something
              new, finding a card I didn&apos;t know existed, and appreciating
              Pokémon from an entirely different perspective as an adult.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              There&apos;s nostalgia in it, but I&apos;m not trying to recreate
              childhood. I&apos;m building a new collection, learning the hobby
              again, and documenting the journey as it happens.
            </p>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="section-label">
          <span>01</span>
          <p>Four Brothers</p>
        </div>

        <div className="mission-copy">
          <p className="large-copy">
            Pokémon was part of my childhood almost from the beginning.
          </p>

          <h2>
            RED. BLUE.
            <br />
            AND THE YOUNGER BROTHER.
          </h2>

          <div className="mission-columns">
            <p>
              I grew up with three older brothers. When Pokémon Red and Blue
              became the games everyone had to play, my brothers Zach and Josh
              were already staking out their territory. Zach had Red and always
              gravitated toward Charizard. Josh — who we also call Chili — had
              Blue and always chose Blastoise.
            </p>

            <p>
              Being the younger brother meant I often ended up with Venusaur.
              At the time it felt like I was getting whatever was left. Looking
              back, those little rivalries are some of the memories that made
              Pokémon special in the first place.
            </p>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="section-label">
          <span>02</span>
          <p>The Cards</p>
        </div>

        <div className="mission-copy">
          <p className="eyebrow">BEFORE THEY WERE VINTAGE</p>

          <h2>
            THEY WERE JUST
            <br />
            OUR POKÉMON CARDS.
          </h2>

          <div className="mission-columns">
            <p>
              We collected the cards together too. Our mom bought packs for us,
              and some of the cards floating around between four brothers would
              eventually become the kind of cards collectors now call vintage.
              We had holographics, Mewtwo, Team Rocket cards, Charizards,
              Scythers, promos, legendary Pokémon, and plenty of others.
            </p>

            <p>
              We didn&apos;t think of them as investments. There were no price
              charts open on our phones. They were pieces of a world we loved,
              things to trade, compare, show off, and occasionally argue about.
              Some of my favorite memories are simply seeing what my brothers
              had in their collections.
            </p>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="section-label">
          <span>03</span>
          <p>The Dial-Up Era</p>
        </div>

        <div className="mission-copy">
          <p className="eyebrow">POKÉMON YELLOW</p>

          <h2>
            WHEN THE INTERNET
            <br />
            STILL FELT LIKE A SECRET.
          </h2>

          <div className="mission-columns">
            <p>
              Eventually I got Pokémon Yellow. This was the era of dial-up
              internet, walkthroughs, printed guides, rumors, cheat codes, and
              stories about hidden Pokémon. We knew about Mew tricks and other
              secrets mostly because somebody had found something online and
              passed it along.
            </p>

            <p>
              Information didn&apos;t arrive instantly. Discovering something
              new actually felt like discovering something. That sense of
              mystery is still one of the things I associate most strongly with
              the Pokémon of my childhood.
            </p>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="section-label">
          <span>04</span>
          <p>Treecko</p>
        </div>

        <div className="mission-copy">
          <p className="eyebrow">THE HOENN ERA</p>

          <h2>
            THE FIRST STARTER
            <br />
            THAT FELT LIKE MINE.
          </h2>

          <div className="mission-columns">
            <p>
              By Pokémon Ruby and Sapphire, something felt different. Sapphire
              was one of the first Pokémon games where I remember feeling like
              the starter decision was completely mine rather than part of the
              choices and rivalries between my brothers.
            </p>

            <p>
              I normally wasn&apos;t the person who automatically chose the
              Grass-type starter, but Treecko clicked. The design, confidence,
              strength, and personality made it memorable. Even seeing Treecko
              portrayed in the anime gave the Pokémon a coolness and attitude
              that stuck with me.
            </p>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="section-label">
          <span>05</span>
          <p>Walking Away</p>
        </div>

        <div className="mission-copy">
          <p className="eyebrow">LIFE MOVES ON</p>

          <h2>
            THEN I STOPPED
            <br />
            PAYING ATTENTION.
          </h2>

          <div className="mission-columns">
            <p>
              Like a lot of people from my generation, I eventually drifted
              away. I remember Ruby and Sapphire clearly and vaguely remember
              LeafGreen, but generations such as Diamond and Pearl and Black
              and White mostly passed me by.
            </p>

            <p>
              The cards did too. I had cards I loved — including a Mew promo,
              Entei and the legendary dogs, and plenty of others — but over the
              years cards were sold, moved, forgotten, or simply stopped feeling
              important. Life has a way of doing that.
            </p>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="section-label">
          <span>06</span>
          <p>Coming Back</p>
        </div>

        <div className="mission-copy">
          <p className="eyebrow">POKÉMON AS AN ADULT</p>

          <h2>
            THE SAME HOBBY.
            <br />
            A COMPLETELY DIFFERENT VIEW.
          </h2>

          <div className="mission-columns">
            <p>
              Coming back as an adult has been fascinating because there are
              entire generations of Pokémon, card sets, mechanics, and
              collecting terminology that I never experienced. I&apos;m learning
              about reverse holos, stamped cards, promos, print variants,
              grading, condition, rarity, and releases I never knew existed.
            </p>

            <p>
              I also appreciate the artwork differently now. In a world where
              so much of what we own and experience exists on a screen, there
              is something satisfying about physically holding a Pokémon card,
              looking closely at the artwork, and being able to hand it to
              somebody else and say, “Look at this.”
            </p>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="section-label">
          <span>07</span>
          <p>The Hunt</p>
        </div>

        <div className="mission-copy">
          <p className="eyebrow">WHY 10,000?</p>

          <h2>
            COLLECTING BROUGHT
            <br />
            SOMETHING BACK.
          </h2>

          <div className="mission-columns">
            <p>
              The deeper I went into Treecko collecting, the more I realized
              that the fun wasn&apos;t only about owning an expensive card. It
              was learning that another version existed, searching for it,
              finding somebody who had one, understanding why it mattered, and
              adding another piece to the collection.
            </p>

            <p>
              That eventually became two goals: try to document and own every
              Treecko card and variation I can find, while also building a
              physical collection of 10,000 Treecko cards. The duplicates are
              part of the story too.
            </p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">THE QUEST CONTINUES</p>

        <h2>
          THE GOAL IS
          <br />
          <span>EVERY TREECKO.</span>
        </h2>

        <p>
          But the reason I&apos;m documenting it is so the journey doesn&apos;t
          disappear once the cards are finally sitting in a binder.
        </p>

        <a className="primary-button" href="/#collection">
          Follow the collection
          <span>→</span>
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