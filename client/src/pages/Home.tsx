import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ExternalLink,
  Menu,
  Play,
  Sparkles,
  X,
} from "lucide-react";

const heroImage = "/manus-storage/blender-tools-hero_507f0f66.jpg";
const emissionImage = "/manus-storage/emission-pro-render_eca0efa1.jpg";
const upcomingImage = "/manus-storage/upcoming-tool-teaser_be0de7a6.jpg";

const gumroadUrl = "https://gumroad.com/";
const superhiveUrl = "https://superhivemarket.com/";
const linkedinUrl = "https://www.linkedin.com/";
const vimeoId = ""; // Replace with the Vimeo video ID when the demoreel is ready.

const navItems = [
  { label: "Tools", href: "#tools" },
  { label: "Reel", href: "#reel" },
  { label: "About", href: "#about" },
  { label: "Upcoming", href: "#upcoming" },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="section-label">
      <span className="section-label-dot" />
      <span>{children}</span>
    </div>
  );
}

function MarketplaceLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="marketplace-link"
    >
      <span>{children}</span>
      <ArrowUpRight size={16} strokeWidth={1.8} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <a href="#top" className="brand-mark" aria-label="Home">
            <span className="brand-mark-symbol">/</span>
            <span className="brand-mark-name">LOOKDEV / TOOLS</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="nav-contact">
              Get in touch <ArrowUpRight size={15} />
            </a>
          </nav>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
                <ArrowUpRight size={17} />
              </a>
            ))}
            <a href="#contact" onClick={closeMenu}>
              Get in touch <ArrowUpRight size={17} />
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-image-wash" />
          </div>
          <div className="hero-grid-overlay" />
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="hero-content container">
            <div className="hero-copy">
              <div className="eyebrow reveal-up">
                <span className="eyebrow-line" />
                BLENDER TOOLS FOR LOOKDEV, LIGHTING &amp; PRODUCTION
              </div>
              <h1 className="hero-title reveal-up delay-1">
                Build better
                <br />
                <em>images.</em>
                <br />
                Remove friction.
              </h1>
              <p className="hero-intro reveal-up delay-2">
                Professional Blender add-ons shaped by real CGI production workflows —
                giving artists more control, consistency and time to create.
              </p>
              <div className="hero-actions reveal-up delay-3">
                <a className="button button-primary" href="#tools">
                  Explore the tools <ArrowDownRight size={18} />
                </a>
                <a className="text-link" href="#reel">
                  <span className="play-icon"><Play size={13} fill="currentColor" /></span>
                  Watch the demoreel
                </a>
              </div>
            </div>

            <div className="hero-foot reveal-up delay-3">
              <span>CGI / PIPELINE / WORKFLOW</span>
              <span className="hero-foot-rule" />
              <span>© 2026</span>
            </div>
          </div>

          <div className="hero-side-note">
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown size={16} />
          </div>
        </section>

        <section className="ticker-strip" aria-label="Capabilities">
          <div className="ticker-track">
            <span>LOOK DEVELOPMENT</span><i>✳</i><span>LIGHTING</span><i>✳</i><span>PIPELINE TD</span><i>✳</i><span>TECHNICAL ART</span><i>✳</i><span>LOOK DEVELOPMENT</span><i>✳</i><span>LIGHTING</span><i>✳</i>
          </div>
        </section>

        <section className="tools-section section-pad" id="tools">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <SectionLabel>01 / FEATURED TOOLS</SectionLabel>
                <h2>Tools built for the way artists <em>actually work.</em></h2>
              </div>
              <p>
                Focused systems for the moments where technical complexity should
                disappear — not get in the artist&apos;s way.
              </p>
            </div>

            <div className="tools-grid">
              <article className="tool-card tool-card-featured">
                <div className="tool-visual">
                  <img src={emissionImage} alt="Abstract emissive CGI render for Emission Pro" loading="lazy" />
                  <div className="tool-visual-badge"><Sparkles size={14} /> Featured tool</div>
                  <span className="tool-number">01</span>
                </div>
                <div className="tool-card-body">
                  <div className="tool-card-meta"><span>AVAILABLE NOW</span><span>BLENDER / SHADING</span></div>
                  <h3>Emission Pro</h3>
                  <p className="tool-lead">An advanced shading system for Blender — built to make emissive looks faster to build, easier to control and more consistent to art-direct.</p>
                  <div className="benefit-list">
                    <span><Check size={15} /> Centralised emission control</span>
                    <span><Check size={15} /> Designed for look development</span>
                    <span><Check size={15} /> Production-minded workflow</span>
                  </div>
                  <div className="tool-actions">
                    <MarketplaceLink href={gumroadUrl}>View on Gumroad</MarketplaceLink>
                    <MarketplaceLink href={superhiveUrl}>View on Superhive</MarketplaceLink>
                  </div>
                </div>
              </article>

              <article className="tool-card tool-card-secondary">
                <div className="tool-visual tool-visual-secondary">
                  <div className="visual-lines" />
                  <span className="tool-number">02</span>
                  <span className="visual-caption">PRODUCTION TOOL / 02</span>
                </div>
                <div className="tool-card-body">
                  <div className="tool-card-meta"><span>AVAILABLE NOW</span><span>BLENDER / WORKFLOW</span></div>
                  <h3>Another exceptional tool.</h3>
                  <p className="tool-lead">A second production-grade add-on for artists who want cleaner, repeatable workflows without giving up creative control.</p>
                  <div className="benefit-list">
                    <span><Check size={15} /> Built from real production needs</span>
                    <span><Check size={15} /> Faster repetitive operations</span>
                    <span><Check size={15} /> Clearer technical decisions</span>
                  </div>
                  <div className="tool-actions">
                    <MarketplaceLink href={gumroadUrl}>View on Gumroad</MarketplaceLink>
                    <MarketplaceLink href={superhiveUrl}>View on Superhive</MarketplaceLink>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="reel-section section-pad" id="reel">
          <div className="container">
            <div className="section-heading split-heading reel-heading">
              <div>
                <SectionLabel>02 / SHOWREEL</SectionLabel>
                <h2>Make the workflow<br /><em>serve the image.</em></h2>
              </div>
              <p>
                Look development, lighting, rendering and pipeline thinking — shown
                through the work, not just described in a CV.
              </p>
            </div>

            <div className="reel-frame">
              {vimeoId ? (
                <iframe
                  src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&dnt=1`}
                  title="CGI and Blender tools demoreel"
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="reel-placeholder">
                  <div className="reel-placeholder-orbit orbit-a" />
                  <div className="reel-placeholder-orbit orbit-b" />
                  <div className="reel-placeholder-copy">
                    <div className="reel-play-button"><Play size={22} fill="currentColor" /></div>
                    <span className="reel-kicker">VIMEO DEMOREEL</span>
                    <h3>Your work, in motion.</h3>
                    <p>Drop your Vimeo video ID into <code>Home.tsx</code> to activate this player.</p>
                  </div>
                  <span className="reel-corner top-left">16:09 / 4K</span>
                  <span className="reel-corner bottom-right">COMING ONLINE</span>
                </div>
              )}
            </div>
            <div className="reel-caption">
              <span>Demoreel / Selected work / 2026</span>
              <a href="https://vimeo.com/" target="_blank" rel="noreferrer">Open Vimeo <ExternalLink size={14} /></a>
            </div>
          </div>
        </section>

        <section className="principles-section section-pad">
          <div className="container">
            <div className="principles-topline"><SectionLabel>03 / THE APPROACH</SectionLabel><span>ARTIST-FIRST / PRODUCTION-AWARE</span></div>
            <div className="principles-grid">
              <div className="principle-intro">
                <h2>Technical systems<br />with <em>creative intent.</em></h2>
              </div>
              <div className="principle-item">
                <span className="principle-index">01</span>
                <h3>Make it clearer.</h3>
                <p>Complex technical processes should become easier to understand, not more opaque.</p>
              </div>
              <div className="principle-item">
                <span className="principle-index">02</span>
                <h3>Make it repeatable.</h3>
                <p>Reliable systems create room for better decisions and more consistent images.</p>
              </div>
              <div className="principle-item">
                <span className="principle-index">03</span>
                <h3>Stay out of the way.</h3>
                <p>The best pipeline solves technical problems without getting in the artist&apos;s way.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="container about-layout">
            <div className="about-portrait">
              <div className="about-portrait-grid" />
              <div className="about-initials">TD<span> / </span>CGI</div>
              <div className="about-portrait-label">LOOKDEV / PIPELINE / LIGHTING</div>
            </div>
            <div className="about-copy">
              <SectionLabel>04 / ABOUT</SectionLabel>
              <h2>Creative judgement.<br /><em>Technical precision.</em></h2>
              <p className="about-lead">I&apos;m a Look Development TD, Pipeline TD and Technical Artist working across CGI, lighting, rendering and production workflows.</p>
              <p>I create practical tools that bridge artistic intent and technical execution — making complex processes clearer, faster and more reliable for artists.</p>
              <p>My work spans animation, television, advertising, institutional communication and immersive content, with experience across look development, shading, texturing, lighting, rendering, compositing, procedural workflows and finalisation.</p>
              <div className="about-details">
                <div><span>SELECTED EXPERIENCE</span><strong>RAI · Leonardo · Telespazio · Caffè Borbone</strong></div>
                <div><span>FOCUS</span><strong>Look Development · Pipeline TD · Tool Development</strong></div>
              </div>
              <a className="inline-arrow-link" href={linkedinUrl} target="_blank" rel="noreferrer">More on LinkedIn <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="upcoming-section section-pad" id="upcoming">
          <div className="container">
            <div className="upcoming-card">
              <div className="upcoming-copy">
                <SectionLabel>05 / IN DEVELOPMENT</SectionLabel>
                <span className="upcoming-kicker">NEXT RELEASE / 03</span>
                <h2>A more powerful<br /><em>way to work.</em></h2>
                <p>Another tool is taking shape behind the scenes — designed to push Blender workflows further, with the same focus on clarity, control and real production value.</p>
                <a className="button button-outline" href={linkedinUrl} target="_blank" rel="noreferrer">Follow the release <ArrowUpRight size={17} /></a>
              </div>
              <div className="upcoming-visual">
                <img src={upcomingImage} alt="Abstract geometric teaser for the upcoming Blender add-on" loading="lazy" />
                <div className="upcoming-scanline" />
                <span className="upcoming-visual-label">WORK IN PROGRESS / 2026</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="container contact-inner">
            <SectionLabel>06 / CONTACT</SectionLabel>
            <h2>Let&apos;s make the workflow<br /><em>work for the image.</em></h2>
            <p>For production, technical direction, workflow development or tools.</p>
            <a className="contact-link" href="mailto:hello@example.com">hello@example.com <ArrowUpRight size={19} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="footer-brand">LOOKDEV / TOOLS</span>
          <span>© 2026 — BUILT FOR BETTER IMAGES</span>
          <div className="footer-links">
            <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={gumroadUrl} target="_blank" rel="noreferrer">Gumroad</a>
            <a href={superhiveUrl} target="_blank" rel="noreferrer">Superhive</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
