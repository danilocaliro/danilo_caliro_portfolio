from pathlib import Path
path = Path('/home/ubuntu/danilo_caliro_portfolio/client/src/pages/Home.tsx')
text = path.read_text()
needle = '</form>}</div></section>'
if text.count(needle) != 1:
    raise SystemExit(f'Expected one contact closing block, found {text.count(needle)}')
text = text.replace(needle, '</form>}<SectionEndArrow href="#main" label="Back to Main" /></div></section>', 1)
path.write_text(text)
print('Added contact return arrow')
