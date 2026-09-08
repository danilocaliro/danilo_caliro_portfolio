import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ExternalLink,
  Menu,
  Play,
  X,
} from "lucide-react";

const heroImage = "/assets/hero-chiaroscuro.webp";
const emissionImage = "/assets/emission-pro.jpg";
const upcomingImage = "/assets/upcoming-tool.jpg";
const emissionOfficialImage = "https://assets.superhivemarket.com/store/product/262099/image/xlarge_og-f81c24108fbdac02a484262bcca72c12.png";
const colorSpaceOfficialImage = "https://assets.superhivemarket.com/store/product/263206/image/xlarge_og-80afdd45ad80acd114c971a73e9253fd.png";
const gumroadUrl = "https://danilocaliro.gumroad.com";
const gumroadEmissionUrl = "https://danilocaliro.gumroad.com/l/emission_pro";
const gumroadColorSpaceUrl = "https://danilocaliro.gumroad.com/l/color_space_converter";
const uvEditProUrl = "#";

// Replace these placeholders with your real URLs when ready.
const superhiveCreatorUrl = "https://superhivemarket.com/creators/danilocaliro";
const emissionProUrl = "https://superhivemarket.com/products/emission-pro";
const colorSpaceConverterUrl = "https://superhivemarket.com/products/color-space-converter";
const linkedinUrl = "https://www.linkedin.com/in/danilo-caliro/";
const vimeoId = "1216793443";
const vimeoUrl = "https://vimeo.com/1216793443";
const youtubeUrl = "https://youtu.be/aqn1gl72Wd8";
const missingWorkflowYoutubeUrl = "http://www.youtube.com/@themissingworkflow";

const navItems = [
  // Primary navigation follows the artist-first information hierarchy.
  { label: "Demoreel", href: "#demoreel" },
  { label: "About me", href: "#about-me" },
  { label: "Works", href: "#work" },
  { label: "The Missing Workflow", href: "#tools" },
];

const workCases = [
  {
    id: "entertainment",
    number: "01",
    category: "Entertainment",
    title: "Stories in light.",
    previewImage: "/assets/placeholders/previews/preview_entertainment_01.webp",
    galleryImages: ["/assets/placeholders/previews/preview_entertainment_01.webp", "/assets/placeholders/previews/preview_entertainment_02.webp", "/assets/placeholders/previews/preview_entertainment_03.webp", "/assets/placeholders/previews/preview_entertainment_04.webp"],
    role: "Look Development / Lighting / Pipeline",
    summary: "Series TV, CGI and VFX work shaped through look development, lighting and pipeline thinking — supporting narrative images from first frame to final delivery.",
    outcome: "A coherent visual language for narrative work, balancing character, atmosphere and technical control.",
    tags: ["Lookdev", "Lighting", "CGI"],
  },
  {
    id: "institutional",
    number: "02",
    category: "Institutional",
    title: "Making the complex clear.",
    previewImage: "/assets/placeholders/previews/preview_institutional_01.webp",
    galleryImages: ["/assets/placeholders/previews/preview_institutional_01.webp", "/assets/placeholders/previews/preview_institutional_02.webp", "/assets/placeholders/previews/preview_institutional_03.webp", "/assets/placeholders/previews/preview_institutional_04.webp"],
    role: "Look Development / Technical Direction / Visual Communication",
    summary: "Films and visual products for organisations such as Leonardo and Thales Alenia Space, translating complex subjects into clear, credible visual communication.",
    outcome: "Complex information translated into precise, engaging images that communicate with authority.",
    tags: ["Direction", "Visualisation", "Pipeline"],
  },
  {
    id: "commercial",
    number: "03",
    category: "Commercial",
    title: "Let the image do more.",
    previewImage: "/assets/placeholders/previews/preview_commercial_01.webp",
    galleryImages: ["/assets/placeholders/previews/preview_commercial_01.webp", "/assets/placeholders/previews/preview_commercial_02.webp", "/assets/placeholders/previews/preview_commercial_03.webp", "/assets/placeholders/previews/preview_commercial_04.webp"],
    role: "Look Development / Lighting / Rendering",
    summary: "Commercial CGI for campaigns including the Caffè Borbone spot, created entirely in a cartoon-driven visual language with controlled design and animation.",
    outcome: "A distinctive world where stylisation, timing and production craft work together to make the brand memorable.",
    tags: ["Commercial", "Shading", "Rendering"],
  },
  {
    id: "cultural",
    number: "04",
    category: "Cultural",
    title: "Spaces to step into.",
    previewImage: "/assets/placeholders/previews/preview_cultural_01.webp",
    galleryImages: ["/assets/placeholders/previews/preview_cultural_01.webp", "/assets/placeholders/previews/preview_cultural_02.webp", "/assets/placeholders/previews/preview_cultural_03.webp", "/assets/placeholders/previews/preview_cultural_04.webp"],
    role: "Visual Development / R&D / Virtual Experience",
    summary: "Projects dedicated to culture, from visual research and development to experiences that bring ideas, places and stories closer to the audience.",
    outcome: "Visual worlds that make cultural subjects feel immediate, open and inviting.",
    tags: ["Culture", "R&D", "Visual Development"],
  },
  {
    id: "virtual-reality",
    number: "05",
    category: "Virtual Reality",
    title: "Beyond the frame.",
    previewImage: "/assets/placeholders/previews/preview_virtual_reality_01.webp",
    galleryImages: ["/assets/placeholders/previews/preview_virtual_reality_01.webp", "/assets/placeholders/previews/preview_virtual_reality_02.webp", "/assets/placeholders/previews/preview_virtual_reality_03.webp", "/assets/placeholders/previews/preview_virtual_reality_04.webp"],
    role: "Look Development / Virtual & Mixed Reality",
    summary: "VR, XR and MR projects for companies, combining look development, technical research and focused tools to make virtual experiences feel clear and present.",
    outcome: "Visual and technical solutions that help people move naturally between image, space and interaction.",
    tags: ["VR", "XR", "MR", "Tools"],
  },
  {
    id: "personal",
    number: "06",
    category: "Personal",
    title: "Room to explore.",
    previewImage: "/assets/placeholders/previews/preview_personal_01.webp",
    galleryImages: ["/assets/placeholders/previews/preview_personal_01.webp", "/assets/placeholders/previews/preview_personal_02.webp", "/assets/placeholders/previews/preview_personal_03.webp", "/assets/placeholders/previews/preview_personal_04.webp"],
    role: "Look Development / Lighting / Tools Development",
    summary: "Personal work where images, lighting and tools become a space for experiments, studies and ideas that can grow at their own pace. A small room for artists to test, learn and follow a visual intuition.",
    outcome: "A laboratory for visual language, workflow and the next image to make.",
    tags: ["Personal", "Lighting", "Tools"],
  },
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
  const [formSent, setFormSent] = useState(false);
  const [activeWorkId, setActiveWorkId] = useState("entertainment");
  const [expandedWorkImage, setExpandedWorkImage] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDidSwipe = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = expandedWorkImage ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [expandedWorkImage]);

  useEffect(() => {
    if (!expandedWorkImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedWorkImage(false);
      if (event.key === "ArrowRight") setGalleryIndex((index) => (index + 1) % (workCases.find((work) => work.id === activeWorkId)?.galleryImages.length ?? 1));
      if (event.key === "ArrowLeft") setGalleryIndex((index) => (index - 1 + (workCases.find((work) => work.id === activeWorkId)?.galleryImages.length ?? 1)) % (workCases.find((work) => work.id === activeWorkId)?.galleryImages.length ?? 1));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [expandedWorkImage, activeWorkId]);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
            <a href="#main" className="brand-mark" aria-label="Home">
            <span className="brand-mark-symbol">/</span>
            <span className="brand-mark-name">DANILO CALIRO <small>PORTFOLIO</small></span>
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

      <main id="main">
        <section className="artist-hero-section">
          <div className="artist-hero-art" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="artist-hero-art-wash" />
          </div>
          <div className="artist-hero-grid" />
          <div className="container artist-hero-content">
            <div className="artist-hero-copy">
              <div className="eyebrow reveal-up"><span className="eyebrow-line" /> LOOK DEVELOPMENT / LIGHTING / COMPOSITING / TECHNICAL DIRECTION / PIPELINE</div>
              <h1 className="artist-hero-title reveal-up delay-1">Images with<br /><em>intent.</em></h1>
              <p className="artist-hero-intro reveal-up delay-2">I shape how images look and how they're made — lighting, lookdev, and the tools that hold a pipeline together.</p>
              <div className="hero-actions reveal-up delay-3">
                <a className="button button-primary" href="#demoreel">Watch the reel <Play size={15} fill="currentColor" /></a>
                <a className="text-link" href="#about-me">Read about me <ArrowDownRight size={16} /></a>
              </div>
            </div>
            <div className="artist-hero-side reveal-up delay-3">
              <span className="artist-hero-side-kicker">A multidisciplinary practice</span>
              <p>Moving between image-making, compositing, pipeline thinking and technical direction to shape both the frame and the way it comes together.</p>
            </div>
            <div className="hero-foot reveal-up delay-3"><span className="hero-foot-rule" /><span className="hero-foot-label">SCROLL FOR MORE</span><span className="hero-foot-rule" /></div>
          </div>
        </section>

        <section className="reel-section artist-reel-section section-pad" id="demoreel">
          <div className="container">
            <div className="section-heading split-heading reel-heading">
              <div><SectionLabel>01 / DEMOREEL</SectionLabel><h2>Frame by<br /><em>frame.</em></h2></div>
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
            <div className="reel-caption"><span>Demoreel / Selected work / 2026</span><div className="reel-links"><a href={vimeoUrl} target="_blank" rel="noreferrer">Open Vimeo <ExternalLink size={14} /></a><a href={youtubeUrl} target="_blank" rel="noreferrer">Open YouTube <ExternalLink size={14} /></a></div></div>
          </div>
        </section>

        <section className="about-section artist-about-section section-pad" id="about-me">
          <div className="container about-layout">
            <div className="about-portrait" aria-label="Placeholder for Danilo Caliro portrait"><div className="about-portrait-grid" /></div>
            <div className="about-copy"><SectionLabel>02 / ABOUT ME</SectionLabel><h2>Creative judgement.<br /><em>Technical precision.</em></h2><p className="about-lead">I&apos;m a Look Development TD, Pipeline TD and Technical Artist with a background in 3D, lighting, rendering, photography and CGI production.</p><p>Over the years, my role has evolved from hands-on production into a broader technical and supervisory position, combining artistic vision, technical problem-solving, pipeline development and workflow optimisation.</p><p>I work across animation, television, advertising, institutional content, immersive experiences and interactive projects — from visual development and asset creation to lighting, rendering, VFX, post-production and final delivery.</p><div className="about-details"><div><span>SELECTED PRODUCTIONS</span><strong>Uanema · Digitalcomoedia · RAI · Leonardo · Thales Alenia Space · Telespazio · Arkaevision · IAC · Voice of Heritages · Brancaccio · 5Senses · Event Planet · Cantico</strong></div><div><span>CORE PRACTICE</span><strong>Look Development · Lighting · Compositing · Set Dress · Pipeline TD · Tool Development</strong></div><div><span>SOFTWARE</span><strong>Maya · 3dsMax · Arnold · Vray · Blender · Marmoset · Substance 3D Painter · Substance 3D Designer · Unreal Engine · Unity · Nuke · Photoshop · DaVinci Resolve</strong></div></div><a className="inline-arrow-link" href={linkedinUrl} target="_blank" rel="noreferrer">More on LinkedIn <ArrowUpRight size={17} /></a></div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="container">
            <div className="section-heading split-heading"><div><SectionLabel>03 / SELECTED WORKS</SectionLabel><h2>Six areas.<br /><em>One practice.</em></h2></div><p>Selected work across entertainment, institutional, commercial, cultural, virtual reality and personal projects.</p></div>
            <div className="work-gallery-simple">
              <div className="work-gallery-list">
                {workCases.map((work) => <button key={work.id} type="button" className={`work-gallery-card ${activeWorkId === work.id ? "is-selected" : ""}`} onClick={() => { setActiveWorkId(work.id); setGalleryIndex(0); setExpandedWorkImage(false); }}><span className={`work-gallery-image slot-tone-${work.id}`} /><span className="work-gallery-card-overlay" /><span className="work-gallery-card-top"><span className="work-gallery-card-number">{work.number}</span><strong>{work.category}</strong><ArrowUpRight size={17} /></span><span className="work-gallery-card-bottom"><span>{work.title}</span></span></button>)}
              </div>
              {(() => { const activeWork = workCases.find((work) => work.id === activeWorkId) ?? workCases[0]; const activeIndex = workCases.findIndex((work) => work.id === activeWork.id); const selectWork = (index: number) => { setActiveWorkId(workCases[index].id); setGalleryIndex(0); setExpandedWorkImage(false); }; const stopTouchScroll = (event: React.PointerEvent<HTMLButtonElement>) => { event.preventDefault(); }; return <article className="case-study-panel"><button type="button" className="case-study-image" onClick={() => setExpandedWorkImage(true)} aria-label="Open preview image" style={{ backgroundImage: `url(${activeWork.previewImage})` }} /><div className="case-study-content"><div className="case-study-heading"><span>{activeWork.role}</span><span>{activeWork.category}</span></div><h3>{activeWork.title}</h3><p>{activeWork.summary}</p><div className="case-study-outcome"><span>OUTCOME</span><strong>{activeWork.outcome}</strong></div></div><div className="case-study-panel-controls" aria-label="Change selected work"><button type="button" onPointerDown={stopTouchScroll} onClick={() => selectWork((activeIndex - 1 + workCases.length) % workCases.length)} aria-label="Previous selected work"><ChevronUp size={16} /></button><button type="button" onPointerDown={stopTouchScroll} onClick={() => selectWork((activeIndex + 1) % workCases.length)} aria-label="Next selected work"><ChevronDown size={16} /></button></div></article>; })()}
            </div>
          </div>
        </section>

        <section className="tools-section artist-tools-section section-pad" id="tools">
          <div className="container">
            <div className="section-heading split-heading"><div><SectionLabel>04 / THE MISSING WORKFLOW</SectionLabel><h2>Tools are part of<br /><em>the practice.</em></h2></div><p>Alongside production and supervision, I design focused Blender<sup>®</sup> tools that solve the friction I know from working inside the image.</p></div>
            <div className="tools-grid tools-grid-four">
              <article className="tool-card tool-card-featured"><div className="tool-visual"><img src={emissionOfficialImage} alt="Official Emission Pro thumbnail from Superhive" loading="lazy" /><span className="tool-number">01</span></div><div className="tool-card-body"><div className="tool-card-meta"><span>BLENDER<sup>®</sup> / LIGHTING &amp; SHADING</span></div><h3>Emission Pro</h3><p className="tool-lead">An advanced shader system for Blender<sup>®</sup>, built to make emissive looks faster to build, easier to control and more consistent to art-direct.</p><div className="tool-actions"><MarketplaceLink href={emissionProUrl}>View on Superhive</MarketplaceLink><MarketplaceLink href={gumroadEmissionUrl}>View on Gumroad</MarketplaceLink></div></div></article>
              <article className="tool-card"><div className="tool-visual"><img src={colorSpaceOfficialImage} alt="Official Color Space Converter thumbnail from Superhive" loading="lazy" /><span className="tool-number">02</span></div><div className="tool-card-body"><div className="tool-card-meta"><span>BLENDER<sup>®</sup> / COLOR MANAGEMENT</span></div><h3>Color Space Converter</h3><p className="tool-lead">A focused Blender<sup>®</sup> utility for moving between colour spaces with clarity and control inside the production workflow.</p><div className="tool-actions"><MarketplaceLink href={colorSpaceConverterUrl}>View on Superhive</MarketplaceLink><MarketplaceLink href={gumroadColorSpaceUrl}>View on Gumroad</MarketplaceLink></div></div></article>
              <article className="tool-card"><div className="tool-visual"><img src={upcomingImage} alt="UV Edit Pro preview" loading="lazy" /><span className="tool-number">03</span></div><div className="tool-card-body"><div className="tool-card-meta"><span>BLENDER<sup>®</sup> / UV MAPPING</span></div><h3>UV Edit Pro</h3><p className="tool-lead">An industry-minded UV mapping workflow for Blender<sup>®</sup>, bringing focused editing functions into a faster, more direct interface.</p><div className="tool-actions"><MarketplaceLink href={uvEditProUrl}>Coming to Superhive</MarketplaceLink><MarketplaceLink href={gumroadUrl}>Visit Gumroad</MarketplaceLink></div></div></article>
              <article className="tool-card tool-card-wip"><div className="tool-visual tool-visual-secondary"><div className="visual-lines" /><span className="tool-number">04</span></div><div className="tool-card-body"><div className="tool-card-meta"><span>IN DEVELOPMENT</span></div><h3>Work in progress</h3><p className="tool-lead">A new tool is taking shape behind the scenes. More soon.</p></div></article>
            </div>
            <div className="tools-note"><span>THE MISSING WORKFLOW PROJECT</span><p>Explore the complete tool collection, add-ons and find free resources for artists.</p><div className="tools-note-links"><a className="tools-note-link" href={superhiveCreatorUrl} target="_blank" rel="noreferrer">Visit Superhive <ArrowUpRight size={17} /></a><a className="tools-note-link" href={gumroadUrl} target="_blank" rel="noreferrer">Visit Gumroad <ArrowUpRight size={17} /></a><a className="tools-note-link" href={missingWorkflowYoutubeUrl} target="_blank" rel="noreferrer">Visit YouTube <ArrowUpRight size={17} /></a></div></div>
          </div>
        </section>

        {expandedWorkImage && (() => { const activeWork = workCases.find((work) => work.id === activeWorkId) ?? workCases[0]; const gallery = activeWork.galleryImages; return <div className="work-image-lightbox" role="dialog" aria-modal="true" aria-label={`${activeWork.category} image gallery`} onClick={() => setExpandedWorkImage(false)}><div className="work-image-lightbox-stage" onClick={(event) => event.stopPropagation()} onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; touchDidSwipe.current = false; }} onTouchEnd={(event) => { const startX = touchStartX.current; const endX = event.changedTouches[0]?.clientX ?? startX; touchStartX.current = null; if (startX === null || endX === null) return; const distance = endX - startX; if (Math.abs(distance) < 48) return; touchDidSwipe.current = true; if (distance < 0) setGalleryIndex((index) => (index + 1) % gallery.length); else setGalleryIndex((index) => (index - 1 + gallery.length) % gallery.length); }}><button type="button" className="work-image-lightbox-arrow work-image-lightbox-prev" onClick={(event) => { event.stopPropagation(); setGalleryIndex((index) => (index - 1 + gallery.length) % gallery.length); }} aria-label="Previous image"><ChevronLeft size={28} /></button><div className="work-image-lightbox-image" role="img" aria-label={`${activeWork.category} image ${galleryIndex + 1} of ${gallery.length}`} onClick={() => { if (touchDidSwipe.current) { touchDidSwipe.current = false; return; } setExpandedWorkImage(false); }} style={{ backgroundImage: `url(${gallery[galleryIndex]})` }} /><button type="button" className="work-image-lightbox-arrow work-image-lightbox-next" onClick={(event) => { event.stopPropagation(); setGalleryIndex((index) => (index + 1) % gallery.length); }} aria-label="Next image"><ChevronRight size={28} /></button><span className="work-image-lightbox-counter">{galleryIndex + 1} / {gallery.length}</span></div></div>; })()}


        <section className="contact-section section-pad" id="contact"><div className="container contact-inner"><SectionLabel>05 / GET IN TOUCH</SectionLabel><h2>Let&apos;s turn ideas<br /><em>into images.</em></h2><p>For production, technical direction, workflow development or tools.</p>{formSent ? <div className="form-success"><Check size={18} /> Thanks — your message is ready to be connected.</div> : <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setFormSent(true); }}><div className="form-row"><label><span>Your name</span><input type="text" name="name" placeholder="Name" required /></label><label><span>Email</span><input type="email" name="email" placeholder="you@example.com" required /></label></div><label><span>Message</span><textarea name="message" placeholder="Tell me about the project..." rows={4} required /></label><button className="button button-dark" type="submit">Send message <ArrowUpRight size={17} /></button><small>This form is ready for a form endpoint such as Formspree or Netlify Forms.</small></form>}</div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><span className="footer-brand">DANILO CALIRO</span><span>© 2026</span><div className="footer-links"><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a><a href={superhiveCreatorUrl} target="_blank" rel="noreferrer">Superhive</a><a href={gumroadUrl} target="_blank" rel="noreferrer">Gumroad</a></div></div></footer>
    </div>
  );
}
