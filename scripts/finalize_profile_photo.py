from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/upload/IMG_8205.JPG')
out = Path('/home/ubuntu/danilo_caliro_portfolio/client/public/assets/placeholders/about/profile_pic_01.webp')
img = Image.open(source).convert('RGB')
target_ratio = 1 / 1.13
width, height = img.size
if width / height > target_ratio:
    new_width = round(height * target_ratio)
    left = (width - new_width) // 2
    img = img.crop((left, 0, left + new_width, height))
else:
    new_height = round(width / target_ratio)
    top = (height - new_height) // 2
    img = img.crop((0, top, width, top + new_height))
img.thumbnail((760, 859), Image.Resampling.LANCZOS)
out.parent.mkdir(parents=True, exist_ok=True)
img.save(out, 'WEBP', quality=76, method=6)
print(f'{out}: {img.size[0]}x{img.size[1]}, {out.stat().st_size} bytes')
