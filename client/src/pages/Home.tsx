import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ExternalLink,
  Menu,
  Play,
  X,
} from "lucide-react";

const heroImage = "/manus-storage/blender-tools-hero_507f0f66.jpg";
const emissionImage = "/manus-storage/emission-pro-render_eca0efa1.jpg";
const upcomingImage = "/manus-storage/upcoming-tool-teaser_be0de7a6.jpg";

// Replace these placeholders with your real URLs when ready.
const gumroadUrl = "https://gumroad.com/";
const superhiveUrl = "https://superhivemarket.com/";
const linkedinUrl = "https://www.linkedin.com/";
const vimeoId = "";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Tools", href: "#tools" },
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
    <a href={href} target="_blank" rel="noreferrer" className="marketplace-link">
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

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <a href="#top" className="brand-mark" aria-label="Home">
            <span className="brand-mark-symbol">/</span>
            <span className="brand-mark-name">YOUR NAME / CGI</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
            ))}
            <a href="#contact" className="nav-contact">Get in touch <ArrowUpRight size={15} /></a>
          </nav>

          <button type="button" className="mobile-menu-button" onClick={() => setMenuOpen((current) => !current)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={17} /></a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>Get in touch <ArrowUpRight size={17} /></a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="artist-hero-section">
          <div className="artist-hero-art" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="artist-hero-art-wash" />
          </div>
          <div className="artist-hero-grid" />
          <div className="container artist-hero-content">
            <div className="artist-hero-copy">
              <div className="eyebrow reveal-up"><span className="eyebrow-line" /> LOOK DEVELOPMENT / CGI / TECHNICAL DIRECTION</div>
              <h1 className="artist-hero-title reveal-up delay-1">Images with<br /><em>intent.</em></h1>
              <p className="artist-hero-intro reveal-up delay-2">I build visual worlds, lighting systems and technical tools for artists who care about how an image comes together.</p>
              <div className="hero-actions reveal-up delay-3">
                <a className="button button-primary" href="#reel">Watch the reel <Play size={15} fill="currentColor" /></a>
                <a className="text-link" href="#about">Read about the practice <ArrowDownRight size={16} /></a>
              </div>
            </div>
            <div className="artist-hero-side reveal-up delay-3">
              <span className="artist-hero-side-kicker">A multidisciplinary practice</span>
              <span>Look Development</span>
              <span>Lighting &amp; Rendering</span>
              <span>Pipeline &amp; Tools</span>
              <span>Technical Direction</span>
            </div>
            <div className="hero-foot reveal-up delay-3"><span>SELECTED WORK / TOOLS / 2026</span><span className="hero-foot-rule" /><span>SCROLL TO EXPLORE</span></div>
          </div>
        </section>

        <section className="artist-ticker" aria-label="Disciplines">
          <div className="ticker-track"><span>LOOK DEVELOPMENT</span><i>✳</i><span>LIGHTING</span><i>✳</i><span>RENDERING</span><i>✳</i><span>PIPELINE TD</span><i>✳</i><span>TECHNICAL ART</span><i>✳</i><span>LOOK DEVELOPMENT</span><i>✳</i></div>
        </section>

        <section className="reel-section artist-reel-section section-pad" id="reel">
          <div className="container">
            <div className="section-heading split-heading reel-heading">
              <div><SectionLabel>01 / DEMOREEL</SectionLabel><h2>The work comes<br /><em>first.</em></h2></div>
              <p>A selection of CGI, lighting, look development and visual problem-solving across productions, experiences and experiments.</p>
            </div>
            <div className="reel-frame">
              {vimeoId ? (
                <iframe src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&dnt=1`} title="CGI and Blender tools demoreel" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
              ) : (
                <div className="reel-placeholder">
                  <div className="reel-placeholder-orbit orbit-a" /><div className="reel-placeholder-orbit orbit-b" />
                  <div className="reel-placeholder-copy"><div className="reel-play-button"><Play size={22} fill="currentColor" /></div><span className="reel-kicker">VIMEO DEMOREEL</span><h3>Selected work, in motion.</h3><p>Drop your Vimeo video ID into <code>Home.tsx</code> to activate this player.</p></div>
                  <span className="reel-corner top-left">CGI / LOOKDEV / LIGHTING</span><span className="reel-corner bottom-right">REEL COMING ONLINE</span>
                </div>
              )}
            </div>
            <div className="reel-caption"><span>Demoreel / Selected work / 2026</span><a href="https://vimeo.com/" target="_blank" rel="noreferrer">Open Vimeo <ExternalLink size={14} /></a></div>
          </div>
        </section>

        <section className="about-section artist-about-section section-pad" id="about">
          <div className="container about-layout">
            <div className="about-portrait"><div className="about-portrait-grid" /><div className="about-initials">TD<span> / </span>CGI</div><div className="about-portrait-label">LOOKDEV / PIPELINE / LIGHTING</div></div>
            <div className="about-copy"><SectionLabel>02 / ABOUT THE PRACTICE</SectionLabel><h2>Creative judgement.<br /><em>Technical precision.</em></h2><p className="about-lead">I&apos;m a Look Development TD, Pipeline TD and Technical Artist with a background in 3D, lighting, rendering, photography and CGI production.</p><p>Over the years, my role has evolved from hands-on production into a broader technical and supervisory position, combining artistic vision, technical problem-solving, pipeline development and workflow optimisation.</p><p>I work across animation, television, advertising, institutional content, immersive experiences and interactive projects — from visual development and asset creation to lighting, rendering, post-production and final delivery.</p><div className="about-details"><div><span>SELECTED PROJECTS</span><strong>Lola On Board · RAI · Leonardo · Thales Alenia Space · Telespazio</strong></div><div><span>CORE PRACTICE</span><strong>Look Development · Lighting · Pipeline TD · Tool Development</strong></div></div><a className="inline-arrow-link" href={linkedinUrl} target="_blank" rel="noreferrer">More on LinkedIn <ArrowUpRight size={17} /></a></div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="container">
            <div className="section-heading split-heading"><div><SectionLabel>03 / SELECTED WORK</SectionLabel><h2>Building the image<br />from <em>the inside out.</em></h2></div><p>Visual development, lighting and technical direction for images that need both a point of view and a reliable way to get there.</p></div>
            <div className="work-grid">
              <article className="work-feature"><div className="work-image work-image-large" style={{ backgroundImage: `url(${heroImage})` }} /><div className="work-info"><span>LOOK DEVELOPMENT / LIGHTING</span><h3>Light is a design decision.</h3><p>Materials, colour, atmosphere and finalisation as one connected visual language.</p></div></article>
              <article className="work-feature"><div className="work-image" style={{ backgroundImage: `url(${upcomingImage})` }} /><div className="work-info"><span>PIPELINE / TECHNICAL DIRECTION</span><h3>Systems that support the idea.</h3><p>Production thinking that makes ambitious visual work easier to build, revise and deliver.</p></div></article>
            </div>
          </div>
        </section>

        <section className="tools-section artist-tools-section section-pad" id="tools">
          <div className="container">
            <div className="section-heading split-heading"><div><SectionLabel>04 / TOOLS FOR ARTISTS</SectionLabel><h2>Tools are part of<br /><em>the practice.</em></h2></div><p>Alongside production and supervision, I design focused Blender tools that solve the friction I know from working inside the image.</p></div>
            <div className="tools-grid">
              <article className="tool-card tool-card-featured"><div className="tool-visual"><img src={emissionImage} alt="Abstract emissive CGI render for Emission Pro" loading="lazy" /><div className="tool-visual-badge"><Check size={14} /> Available now</div><span className="tool-number">01</span></div><div className="tool-card-body"><div className="tool-card-meta"><span>BLENDER / SHADING</span><span>EMISSION PRO</span></div><h3>Emission Pro</h3><p className="tool-lead">An advanced shading system for Blender, built to make emissive looks faster to build, easier to control and more consistent to art-direct.</p><div className="benefit-list"><span><Check size={15} /> Centralised emission control</span><span><Check size={15} /> Designed for look development</span><span><Check size={15} /> Production-minded workflow</span></div><div className="tool-actions"><MarketplaceLink href={gumroadUrl}>Gumroad</MarketplaceLink><MarketplaceLink href={superhiveUrl}>Superhive</MarketplaceLink></div></div></article>
              <article className="tool-card tool-card-secondary"><div className="tool-visual tool-visual-secondary"><div className="visual-lines" /><span className="tool-number">02</span><span className="visual-caption">BLENDER / WORKFLOW</span></div><div className="tool-card-body"><div className="tool-card-meta"><span>AVAILABLE NOW</span><span>ADD-ON 02</span></div><h3>Another exceptional tool.</h3><p className="tool-lead">A second production-grade add-on for artists who want cleaner, repeatable workflows without giving up creative control.</p><div className="benefit-list"><span><Check size={15} /> Built from real production needs</span><span><Check size={15} /> Faster repetitive operations</span><span><Check size={15} /> Clearer technical decisions</span></div><div className="tool-actions"><MarketplaceLink href={gumroadUrl}>Gumroad</MarketplaceLink><MarketplaceLink href={superhiveUrl}>Superhive</MarketplaceLink></div></div></article>
            </div>
            <div className="tools-note"><span>PRODUCT PAGES &amp; THUMBNAILS</span><p>Each tool will have its own dedicated page, with the marketplace thumbnail, documentation and release details.</p><ArrowUpRight size={17} /></div>
          </div>
        </section>

        <section className="upcoming-section section-pad" id="upcoming"><div className="container"><div className="upcoming-card"><div className="upcoming-copy"><SectionLabel>05 / IN DEVELOPMENT</SectionLabel><span className="upcoming-kicker">NEXT RELEASE / 03</span><h2>A more powerful<br /><em>way to work.</em></h2><p>Another tool is taking shape behind the scenes — designed to push Blender workflows further, with the same focus on clarity, control and real production value.</p><a className="button button-outline" href={linkedinUrl} target="_blank" rel="noreferrer">Follow the release <ArrowUpRight size={17} /></a></div><div className="upcoming-visual"><img src={upcomingImage} alt="Abstract geometric teaser for the upcoming Blender add-on" loading="lazy" /><div className="upcoming-scanline" /><span className="upcoming-visual-label">WORK IN PROGRESS / 2026</span></div></div></div></section>

        <section className="contact-section section-pad" id="contact"><div className="container contact-inner"><SectionLabel>06 / CONTACT</SectionLabel><h2>Let&apos;s make the image<br /><em>work harder.</em></h2><p>For production, technical direction, workflow development or tools.</p><a className="contact-link" href="mailto:hello@example.com">hello@example.com <ArrowUpRight size={19} /></a></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><span className="footer-brand">YOUR NAME / CGI</span><span>© 2026 — SELECTED WORK &amp; TOOLS</span><div className="footer-links"><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a><a href={gumroadUrl} target="_blank" rel="noreferrer">Gumroad</a><a href={superhiveUrl} target="_blank" rel="noreferrer">Superhive</a></div></div></footer>
    </div>
  );
}
