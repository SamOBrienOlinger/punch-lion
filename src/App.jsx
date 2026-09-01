import { useEffect, useState } from "react";
import {
  ArrowRight,
  FacebookLogo,
  Handshake,
  InstagramLogo,
  List,
  MicrophoneStage,
  Quotes,
  Smiley,
  UsersThree,
  X,
} from "@phosphor-icons/react";

const assetUrl = (fileName) => `${import.meta.env.BASE_URL}assets/${fileName}`;

const navItems = [
  { label: "Events", href: "#live-comedy" },
  { label: "Kids Comedy", href: "#kids-comedy" },
  { label: "Workshops", href: "#workshops" },
  { label: "Corporate", href: "#corporate" },
  { label: "Comedians", href: "#about" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const pathways = [
  {
    title: "Kids Comedy",
    text: "Big laughs for young audiences.",
    href: "#kids-comedy",
    accent: "yellow",
    Icon: Smiley,
  },
  {
    title: "Workshops",
    text: "Build confidence. Sharpen skills.",
    href: "#workshops",
    accent: "blue",
    Icon: MicrophoneStage,
  },
  {
    title: "Corporate",
    text: "Stronger teams. Better culture.",
    href: "#corporate",
    accent: "red",
    Icon: Handshake,
  },
];

const programmes = [
  {
    id: "kids-comedy",
    eyebrow: "For young audiences",
    title: "Kids Comedy",
    text: "Creative comedy experiences that invite children to laugh, join in and discover their own comic voice.",
    image: assetUrl("kids-comedy.webp"),
    alt: "A child laughing at a Punch Lion outdoor comedy event.",
    imagePosition: "50% 44%",
    linkLabel: "Explore kids comedy",
  },
  {
    id: "live-comedy",
    eyebrow: "For communities",
    title: "Live Events",
    text: "Welcoming comedy events for festivals, venues and communities across Ireland, shaped around each audience.",
    image: assetUrl("hero-live-event.webp"),
    alt: "Families gathered on the grass for a Punch Lion outdoor stage event.",
    imagePosition: "50% 42%",
    linkLabel: "Discover live events",
  },
  {
    id: "workshops",
    eyebrow: "For groups and teams",
    title: "Workshops",
    text: "Practical, energetic sessions where humour supports confidence, connection, storytelling and creative thinking.",
    image: assetUrl("workshop-group.webp"),
    alt: "A Punch Lion workshop with facilitators presenting to a relaxed group.",
    imagePosition: "50% 48%",
    linkLabel: "Plan a workshop",
  },
];

function BrandLogo({ className = "" }) {
  return (
    <img
      className={`brand-logo ${className}`}
      src={assetUrl("punch-lion-logo.jpeg")}
      alt="Punch Lion"
      width="682"
      height="577"
    />
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    document.documentElement.classList.toggle("menu-open", menuOpen);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.documentElement.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <a className="brand-link" href="#top" aria-label="Punch Lion home">
          <BrandLogo />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-socials" aria-label="Social media">
          <a
            href="https://www.instagram.com/punch_lion/"
            aria-label="Punch Lion on Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo weight="bold" aria-hidden="true" />
          </a>
          <a
            href="https://m.facebook.com/Punch-Lion-131375413597802"
            aria-label="Punch Lion on Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookLogo weight="fill" aria-hidden="true" />
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X weight="bold" /> : <List weight="bold" />}
        </button>

        <nav
          id="mobile-navigation"
          className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
              <ArrowRight aria-hidden="true" />
            </a>
          ))}
          <a
            className="mobile-instagram"
            href="https://www.instagram.com/punch_lion/"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Instagram
            <InstagramLogo weight="bold" aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker">Bespoke live experiences brought to life.</p>
            <h1 className="hero-title" id="hero-title">
              <span className="experiences">Experiences</span>
              <span className="orange">that bring</span>
              <span>people together</span>
            </h1>
            <div className="hero-actions">
              <a className="button button-primary" href="#live-comedy">
                See upcoming events
                <ArrowRight weight="bold" aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#contact">
                Book a workshop
                <ArrowRight weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure className="hero-media">
            <img
              src={assetUrl("hero-auditorium.webp")}
              alt="A performer on stage before a full audience at a Punch Lion comedy event."
              width="480"
              height="640"
              fetchPriority="high"
            />
            <figcaption>Real Punch Lion events, photographed across Ireland.</figcaption>
          </figure>
        </section>

        <section className="pathway-strip" aria-label="Explore Punch Lion services">
          {pathways.map(({ title, text, href, accent, Icon }) => (
            <a className="pathway" href={href} key={title}>
              <span className={`pathway-icon ${accent}`} aria-hidden="true">
                <Icon weight="bold" />
              </span>
              <span className="pathway-copy">
                <strong>{title}</strong>
                <span>{text}</span>
              </span>
              <ArrowRight className="pathway-arrow" weight="bold" aria-hidden="true" />
            </a>
          ))}
        </section>

        <section className="programme-section" aria-labelledby="programme-title">
          <div className="section-heading">
            <p className="section-kicker">Pick your kind of funny</p>
            <h2 id="programme-title">Made for real people, in real rooms</h2>
            <p>
              From a child’s first comedy show to a room full of colleagues, every
              experience is built around its audience.
            </p>
          </div>

          <div className="programme-grid">
            {programmes.map((programme) => (
              <article className="programme-card" id={programme.id} key={programme.title}>
                <div className="programme-image">
                  <img
                    src={programme.image}
                    alt={programme.alt}
                    style={{ objectPosition: programme.imagePosition }}
                    width="640"
                    height="520"
                    loading="lazy"
                  />
                </div>
                <div className="programme-copy">
                  <p>{programme.eyebrow}</p>
                  <h3>{programme.title}</h3>
                  <span>{programme.text}</span>
                  <a href="#contact">
                    {programme.linkLabel}
                    <ArrowRight weight="bold" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="corporate-section" id="corporate" aria-labelledby="corporate-title">
          <div className="corporate-photo">
            <img
              src={assetUrl("workshop.webp")}
              alt="A smiling Punch Lion facilitator beside a workshop board."
              width="480"
              height="600"
              loading="lazy"
            />
          </div>
          <div className="corporate-copy">
            <span className="corporate-icon" aria-hidden="true">
              <UsersThree weight="bold" />
            </span>
            <p className="section-kicker">Corporate comedy and facilitation</p>
            <h2 id="corporate-title">Bring more life into the room</h2>
            <p>
              Punch Lion creates lively, well-judged comedy experiences for teams,
              conferences and organisations. The work is playful, inclusive and shaped
              around what your group needs.
            </p>
            <a className="button button-light" href="#contact">
              Start a conversation
              <ArrowRight weight="bold" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="quote-section" id="about" aria-labelledby="about-title">
          <div className="quote-mark" aria-hidden="true">
            <Quotes weight="fill" />
          </div>
          <div>
            <p className="section-kicker">What people say</p>
            <h2 id="about-title">A generous kind of funny</h2>
            <blockquote>
              “A few years ago, I read a book by Freud on jokes. I didn’t smile, even
              when I finished it. I’m told that your jokes summer camp was a good deal
              more successful.”
            </blockquote>
            <p className="quote-credit">
              <strong>Roddy Doyle</strong>
              <span>Co-Founder and Chair, Fighting Words</span>
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="section-kicker">Have an idea?</p>
            <h2 id="contact-title">Let’s make something funny happen</h2>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:hello@punchlion.ie">
              Email Punch Lion
              <ArrowRight weight="bold" aria-hidden="true" />
            </a>
            <a
              className="text-link"
              href="https://www.instagram.com/punch_lion/"
              target="_blank"
              rel="noreferrer"
            >
              See recent work on Instagram
              <InstagramLogo weight="bold" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#top" aria-label="Back to top">
          <BrandLogo />
        </a>
        <div className="footer-copy">
          <p>Creative comedy ideas for kids, communities and organisations.</p>
          <span>© {new Date().getFullYear()} Punch Lion</span>
        </div>
        <div className="footer-links">
          <a href="mailto:hello@punchlion.ie">hello@punchlion.ie</a>
          <a
            href="https://www.instagram.com/punch_lion/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </footer>
    </>
  );
}
