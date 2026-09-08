from pathlib import Path
from PIL import Image

root = Path('/home/ubuntu/danilo_caliro_portfolio')
assets = root / 'client/public/assets'

# The UV placeholder is temporary: keep it small and web-friendly.
source = assets / 'upcoming-tool.jpg'
image = Image.open(source).convert('RGB')
image.thumbnail((480, 480), Image.Resampling.LANCZOS)
output = assets / 'upcoming-tool.webp'
image.save(output, 'WEBP', quality=76, method=6)
source.unlink()

# These were remnants from earlier gallery/product iterations and are no longer referenced.
for name in (
    'emission-pro.jpg', 'hero.jpg',
    'work-entertainment-thumb.jpg', 'work-entertainment-preview.jpg',
    'work-institutional-thumb.jpg', 'work-institutional-preview.jpg',
    'work-commercial-thumb.jpg', 'work-commercial-preview.jpg',
    'work-cultural-thumb.jpg', 'work-cultural-preview.jpg',
):
    path = assets / name
    if path.exists():
        path.unlink()

print(f'Created {output.name}: {image.size[0]}x{image.size[1]}')
