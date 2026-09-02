import { useEffect, useState } from "react";
import {
  ArrowLeft,
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

const carouselSlides = [
  {
    image: assetUrl("hero-live-event.webp"),
    alt: "Families gathered outdoors for a Punch Lion live comedy event.",
    eyebrow: "Live events",
    title: "Big moments shared together",
    position: "50% 42%",
  },
  {
    image: assetUrl("kids-comedy.webp"),
    alt: "A child laughing during a Punch Lion comedy event.",
    eyebrow: "Kids comedy",
    title: "Laughter for every generation",
    position: "50% 44%",
  },
  {
    image: assetUrl("workshop-group.webp"),
    alt: "A group taking part in a lively Punch Lion workshop.",
    eyebrow: "Creative workshops",
    title: "Confidence built through play",
    position: "50% 48%",
  },
  {
    image: assetUrl("hero-auditorium.webp"),
    alt: "A performer on stage before a full Punch Lion audience.",
    eyebrow: "On stage",
    title: "Experiences that fill the room",
    position: "50% 39%",
  },
];

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
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);

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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || carouselPaused) return undefined;

    const timer = window.setInterval(() => {
      setCarouselIndex((current) => (current + 1) % carouselSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [carouselPaused]);

  const closeMenu = () => setMenuOpen(false);
  const previousSlide = () => {
    setCarouselIndex((current) =>
      current === 0 ? carouselSlides.length - 1 : current - 1,
    );
  };
  const nextSlide = () => {
    setCarouselIndex((current) => (current + 1) % carouselSlides.length);
  };
  const currentSlide = carouselSlides[carouselIndex];

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
              <a className="button button-primary" href="#live-comedy">
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

        <section
          className="carousel-section"
          id="in-action"
          aria-labelledby="carousel-title"
        >
          <div className="carousel-heading">
            <p className="section-kicker">Punch Lion in action</p>
            <h2 id="carousel-title">See what we bring to life</h2>
          </div>

          <div
            className="carousel-shell"
            role="region"
            aria-roledescription="carousel"
            aria-label="Punch Lion experiences"
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
            onFocusCapture={() => setCarouselPaused(true)}
            onBlurCapture={() => setCarouselPaused(false)}
          >
            <figure className="carousel-slide" key={currentSlide.image}>
              <img
                src={currentSlide.image}
                alt={currentSlide.alt}
                style={{ objectPosition: currentSlide.position }}
                width="1440"
                height="760"
              />
              <figcaption>
                <span>{currentSlide.eyebrow}</span>
                <strong>{currentSlide.title}</strong>
              </figcaption>
            </figure>

            <div className="carousel-controls">
              <button type="button" onClick={previousSlide} aria-label="Show previous image">
                <ArrowLeft weight="bold" aria-hidden="true" />
              </button>
              <span aria-live="polite">
                {carouselIndex + 1} / {carouselSlides.length}
              </span>
              <button type="button" onClick={nextSlide} aria-label="Show next image">
                <ArrowRight weight="bold" aria-hidden="true" />
              </button>
            </div>

            <div className="carousel-dots" aria-label="Choose an image">
              {carouselSlides.map((slide, index) => (
                <button
                  type="button"
                  className={index === carouselIndex ? "is-active" : ""}
                  onClick={() => setCarouselIndex(index)}
                  aria-label={`Show image ${index + 1}: ${slide.eyebrow}`}
                  aria-current={index === carouselIndex ? "true" : undefined}
                  key={slide.image}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="programme-section" aria-labelledby="programme-title">
          <div className="section-heading">
            <h2 id="programme-title">Made for real people, in real rooms</h2>
            <p>
              From a child’s first comedy show to a room full of colleagues, every
              experience is built around its audience.
            </p>
          </div>

          <div className="programme-grid">
            {programmes.map((programme) => (
              <article className="programme-card" id={programme.id} key={programme.title}>
                <div className="programme-image image-reveal">
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

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="section-kicker">Have an idea?</p>
            <h2 id="contact-title">Let’s make something happen</h2>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:hello@punchlion.ie">
              Send us a message
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
