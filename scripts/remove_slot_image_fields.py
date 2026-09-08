from pathlib import Path
path = Path('/home/ubuntu/danilo_caliro_portfolio/client/src/pages/Home.tsx')
text = path.read_text()
lines = [line for line in text.splitlines() if 'image: "/assets/placeholders/slots/' not in line]
path.write_text('\n'.join(lines) + '\n')
print('Removed unused slot image fields')
