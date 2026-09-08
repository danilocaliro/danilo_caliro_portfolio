from pathlib import Path
from PIL import Image

root = Path('/home/ubuntu/danilo_caliro_portfolio/client/public/assets/placeholders')
for source in root.rglob('*.png'):
    target = source.with_suffix('.webp')
    image = Image.open(source).convert('RGB')
    if 'slots' in source.parts:
        image = image.resize((1000, 500), Image.Resampling.LANCZOS)
    elif 'previews' in source.parts:
        image = image.resize((1600, 900), Image.Resampling.LANCZOS)
    elif 'about' in source.parts:
        image = image.resize((1600, 1600), Image.Resampling.LANCZOS)
    image.save(target, 'WEBP', quality=82, method=6)
print('Converted placeholders to WebP')
