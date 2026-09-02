import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowSquareOut,
  FacebookLogo,
  Handshake,
  InstagramLogo,
  List,
  MicrophoneStage,
  PaperPlaneTilt,
  Quotes,
  Smiley,
  UsersThree,
  X,
} from "@phosphor-icons/react";

const assetUrl = (fileName) => `${import.meta.env.BASE_URL}assets/${fileName}`;

const navItems = [
  { label: "Events", href: "#events" },
  { label: "Kids Comedy", href: "#kids-comedy" },
  { label: "Workshops", href: "#workshops" },
  { label: "Corporate", href: "#corporate" },
  { label: "Testimonials", href: "#testimonials" },
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
    id: "live-events",
    eyebrow: "For communities",
    title: "Live Events",
    text: "Welcoming comedy events for festivals, venues and communities across Ireland, shaped around each audience.",
    image: assetUrl("event-participation.webp"),
    alt: "Children joining in with a Punch Lion performer at a live outdoor event.",
    imagePosition: "50% 48%",
    linkLabel: "Plan a live event",
  },
  {
    id: "kids-comedy",
    eyebrow: "For young audiences",
    title: "Kids Comedy",
    text: "Creative comedy experiences that invite children to laugh, join in and discover their own comic voice.",
    image: assetUrl("event-kids-audience.webp"),
    alt: "Children and families watching a Punch Lion comedy performance under a festival tent.",
    imagePosition: "50% 50%",
    linkLabel: "Explore kids comedy",
  },
  {
    id: "workshops",
    eyebrow: "For groups and teams",
    title: "Workshops",
    text: "Practical, energetic sessions where humour supports confidence, connection, storytelling and creative thinking.",
    image: assetUrl("creative-workshop.webp"),
    alt: "A Punch Lion facilitator leading an energetic creative workshop.",
    imagePosition: "38% 50%",
    linkLabel: "Plan a workshop",
  },
];

const actionFeature = {
  image: assetUrl("workshop-group.webp"),
  alt: "A group taking part in a lively Punch Lion workshop.",
  eyebrow: "Creative workshops",
  title: "Confidence built through play",
  position: "50% 48%",
  width: 570,
  height: 640,
};

const testimonials = [
  {
    quote:
      "A few years ago, I read a book by Freud on jokes. I didn’t smile, even when I finished it. I’m told that your jokes summer camp was a good deal more successful.",
    name: "Roddy Doyle",
    role: "Co-Founder and Chair, Fighting Words",
  },
  {
    quote:
      "Mark and Peter were excellent hosts and facilitators. I took a group of friends and colleagues to this workshop and everyone loved it. They removed the doubts and fears by making the improv fun and exciting.",
    name: "Workshop participant",
    role: "Punch Lion improv workshop",
  },
  {
    quote: "It was awesome, cool and it was the funniest show I saw in my life.",
    name: "Young audience member",
    role: "Punch Lion kids comedy",
  },
];

const partners = [
  {
    name: "Office of Public Works",
    logo: "partners/opw.png",
    href: "https://www.gov.ie/en/office-of-public-works/",
  },
  {
    name: "Irish Rugby Football Union",
    logo: "partners/irfu.svg",
    href: "https://www.irishrugby.ie/",
  },
  { name: "The Ark", logo: "partners/the-ark.png", href: "https://ark.ie/" },
  {
    name: "Electric Picnic",
    logo: "partners/electric-picnic.svg",
    href: "https://www.electricpicnic.ie/",
  },
  {
    name: "Body & Soul",
    logo: "partners/body-and-soul.png",
    href: "https://bodyandsoul.ie/",
  },
  {
    name: "Hullabaloo! Children’s Arts Festival",
    logo: "partners/hullabaloo.jpg",
    href: "https://www.hullabaloofestival.ie/",
  },
  {
    name: "Fighting Words",
    logo: "partners/fighting-words.svg",
    href: "https://www.fightingwords.ie/",
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

  useEffect(() => {
    const revealElements = document.querySelectorAll(".image-reveal");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleContactSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const experience = formData.get("experience");
    const subject = `Punch Lion enquiry — ${experience}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Experience: ${experience}`,
      "",
      formData.get("message"),
    ].join("\n");

    window.location.href = `mailto:hello@punchlion.ie?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
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
            <h1 className="hero-title" id="hero-title">
              <span className="hero-title-intro">BESPOKE EXPERIENCES</span>
              <span className="orange">THAT BRING</span>
              <span>PEOPLE TOGETHER</span>
            </h1>
            <div className="hero-actions">
              <a className="button button-primary" href="#events">
                See events
                <ArrowRight weight="bold" aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#contact">
                Start your experience with Punch Lion
                <ArrowRight weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure className="hero-media image-reveal">
            <img
              src={assetUrl("creative-workshop.webp")}
              alt="A Punch Lion facilitator bringing energy and humour to a creative workshop."
              width="1274"
              height="1274"
              fetchPriority="high"
            />
            <figcaption>Real Punch Lion experiences, photographed in Ireland.</figcaption>
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

        <section
          className="action-section"
          id="in-action"
          aria-labelledby="in-action-title"
        >
          <div className="action-heading">
            <p className="section-kicker">Punch Lion in action</p>
            <h2 id="in-action-title">See what we bring to life</h2>
          </div>

          <div className="action-feature-shell">
            <figure className="action-feature image-reveal">
              <img
                src={actionFeature.image}
                alt={actionFeature.alt}
                style={{ objectPosition: actionFeature.position }}
                width={actionFeature.width}
                height={actionFeature.height}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>{actionFeature.eyebrow}</span>
                <strong>{actionFeature.title}</strong>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          className="programme-section"
          id="events"
          aria-labelledby="programme-title"
        >
          <div className="section-heading">
            <h2 id="programme-title">Made for real people, in real rooms</h2>
            <p>
              From a child’s first comedy show to a room full of colleagues, every
              experience is built around its audience.
            </p>
          </div>

          <aside className="events-note" aria-label="Public event information">
            <div>
              <p className="events-note-label">Public event dates</p>
              <strong>See new dates as soon as they’re announced.</strong>
              <p>
                Punch Lion shares confirmed public events on Instagram. Planning your
                own festival, community or private event? Send the date, location and
                audience details for a tailored conversation.
              </p>
            </div>
            <div className="events-note-actions">
              <a
                className="button button-primary"
                href="https://www.instagram.com/punch_lion/"
                target="_blank"
                rel="noreferrer"
              >
                View event updates
                <InstagramLogo weight="bold" aria-hidden="true" />
              </a>
              <a className="text-link" href="#contact">
                Plan an event
                <ArrowRight weight="bold" aria-hidden="true" />
              </a>
            </div>
          </aside>

          <div className="programme-grid">
            {programmes.map((programme) => (
              <article className="programme-card" id={programme.id} key={programme.title}>
                <div className="programme-image image-reveal">
                  <img
                    src={programme.image}
                    alt={programme.alt}
                    style={{ objectPosition: programme.imagePosition }}
                    width="1274"
                    height="1274"
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
          <div className="corporate-photo image-reveal">
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

        <section className="partners-section" aria-labelledby="partners-title">
          <div className="partners-heading">
            <p className="section-kicker">Great company</p>
            <h2 id="partners-title">Our Friends and Partners</h2>
            <p>
              Proud to have brought memorable experiences to life with organisations,
              festivals and creative communities across Ireland.
            </p>
          </div>
          <ul className="partners-grid" aria-label="Punch Lion friends and partners">
            {partners.map((partner) => (
              <li key={partner.name}>
                <a
                  className="partner-card"
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${partner.name} website (opens in a new tab)`}
                >
                  <span className="partner-logo" aria-hidden="true">
                    <img src={assetUrl(partner.logo)} alt="" loading="lazy" />
                  </span>
                  <strong>
                    {partner.name}
                    <ArrowSquareOut weight="bold" aria-hidden="true" />
                  </strong>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="quote-section"
          id="testimonials"
          aria-labelledby="testimonials-title"
        >
          <div className="testimonial-heading">
            <p className="section-kicker">Testimonials</p>
            <h2 id="testimonials-title">What people remember</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <span className="quote-mark" aria-hidden="true">
                  <Quotes weight="fill" />
                </span>
                <blockquote>“{testimonial.quote}”</blockquote>
                <p className="quote-credit">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div>
            <p className="section-kicker">About Punch Lion</p>
            <h2 id="about-title">Experiences made around people</h2>
          </div>
          <div className="about-copy">
            <p>
              Punch Lion produces and promotes live events, comedy experiences and
              creative workshops for children, communities and organisations.
            </p>
            <p>
              From booking performers to shaping the atmosphere in the room, every
              experience is built to help people laugh, participate and connect.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-intro">
            <p className="section-kicker">Have an idea?</p>
            <h2 id="contact-title">Let’s make something happen</h2>
            <p>
              Tell us who it’s for, where it’s happening and what you want people to
              feel. We’ll take it from there.
            </p>
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
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-row">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="form-row">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="contact-experience">Experience type</label>
              <select id="contact-experience" name="experience" defaultValue="" required>
                <option value="" disabled>
                  Choose one
                </option>
                <option>Live event</option>
                <option>Kids comedy</option>
                <option>Creative workshop</option>
                <option>Corporate experience</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="contact-message">Tell us what you’re planning</label>
              <textarea id="contact-message" name="message" rows="5" required />
            </div>
            <button className="button button-primary" type="submit">
              Send us a message
              <PaperPlaneTilt weight="bold" aria-hidden="true" />
            </button>
            <p className="form-note">
              This opens your email app with the details filled in. Nothing is stored
              on this website.
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#top" aria-label="Back to top">
          <BrandLogo />
        </a>
        <div className="footer-copy">
          <p>Bespoke live experiences for children, communities and organisations.</p>
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
