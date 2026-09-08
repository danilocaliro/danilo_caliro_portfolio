from pathlib import Path
path = Path('/home/ubuntu/danilo_caliro_portfolio/client/src/pages/Home.tsx')
text = path.read_text()
old = 'function SectionEndArrow({ href, label }: { href: string; label: string }) {\n  return <a className="section-end-arrow" href={href} aria-label={label}><ChevronDown size={22} strokeWidth={1.5} /></a>;\n}'
new = 'function SectionEndArrow({ href, label, direction = "down" }: { href: string; label: string; direction?: "up" | "down" }) {\n  const Arrow = direction === "up" ? ChevronUp : ChevronDown;\n  return <a className="section-end-arrow" href={href} aria-label={label}><Arrow size={22} strokeWidth={1.5} /></a>;\n}'
if old not in text: raise SystemExit('arrow helper not found')
text = text.replace(old, new, 1)
old = '            <SectionEndArrow href="#work" label="Continue to Selected Works" />\n          </div>\n        </section>\n\n        <section className="work-section'
new = '          </div>\n          <SectionEndArrow href="#work" label="Continue to Selected Works" />\n        </section>\n\n        <section className="work-section'
if old not in text: raise SystemExit('about arrow block not found')
text = text.replace(old, new, 1)
old = '<SectionEndArrow href="#main" label="Back to Main" />'
if old not in text: raise SystemExit('contact arrow not found')
text = text.replace(old, '<SectionEndArrow href="#main" label="Back to Main" direction="up" />', 1)
path.write_text(text)
print('Fixed About Me centering and contact arrow direction')
