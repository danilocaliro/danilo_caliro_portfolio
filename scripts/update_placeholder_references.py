from pathlib import Path
path = Path('/home/ubuntu/danilo_caliro_portfolio/client/src/pages/Home.tsx')
text = path.read_text()
replacements = {
    'image: "/assets/work-entertainment-thumb.jpg"': 'image: "/assets/placeholders/slots/thumb_slot_entertainment.webp"',
    'previewImage: "/assets/work-entertainment-preview.jpg"': 'previewImage: "/assets/placeholders/previews/preview_entertainment_01.webp"',
    'galleryImages: ["/assets/work-entertainment-preview.jpg", "/assets/work-entertainment-thumb.jpg"]': 'galleryImages: ["/assets/placeholders/previews/preview_entertainment_01.webp", "/assets/placeholders/previews/preview_entertainment_02.webp", "/assets/placeholders/previews/preview_entertainment_03.webp", "/assets/placeholders/previews/preview_entertainment_04.webp"]',
    'image: "/assets/work-institutional-thumb.jpg"': 'image: "/assets/placeholders/slots/thumb_slot_institutional.webp"',
    'previewImage: "/assets/work-institutional-preview.jpg"': 'previewImage: "/assets/placeholders/previews/preview_institutional_01.webp"',
    'galleryImages: ["/assets/work-institutional-preview.jpg", "/assets/work-institutional-thumb.jpg"]': 'galleryImages: ["/assets/placeholders/previews/preview_institutional_01.webp", "/assets/placeholders/previews/preview_institutional_02.webp", "/assets/placeholders/previews/preview_institutional_03.webp", "/assets/placeholders/previews/preview_institutional_04.webp"]',
    'image: "/assets/work-commercial-thumb.jpg"': 'image: "/assets/placeholders/slots/thumb_slot_commercial.webp"',
    'previewImage: "/assets/work-commercial-preview.jpg"': 'previewImage: "/assets/placeholders/previews/preview_commercial_01.webp"',
    'galleryImages: ["/assets/work-commercial-preview.jpg", "/assets/work-commercial-thumb.jpg"]': 'galleryImages: ["/assets/placeholders/previews/preview_commercial_01.webp", "/assets/placeholders/previews/preview_commercial_02.webp", "/assets/placeholders/previews/preview_commercial_03.webp", "/assets/placeholders/previews/preview_commercial_04.webp"]',
    'image: "/assets/work-cultural-thumb.jpg"': 'image: "/assets/placeholders/slots/thumb_slot_cultural.webp"',
    'previewImage: "/assets/work-cultural-preview.jpg"': 'previewImage: "/assets/placeholders/previews/preview_cultural_01.webp"',
    'galleryImages: ["/assets/work-cultural-preview.jpg", "/assets/work-cultural-thumb.jpg"]': 'galleryImages: ["/assets/placeholders/previews/preview_cultural_01.webp", "/assets/placeholders/previews/preview_cultural_02.webp", "/assets/placeholders/previews/preview_cultural_03.webp", "/assets/placeholders/previews/preview_cultural_04.webp"]',
    'summary: "Personal work where images, lighting and tools become a space for experiments, studies and ideas that can grow at their own pace."': 'summary: "Personal work where images, lighting and tools become a space for experiments, studies and ideas that can grow at their own pace. A small room for artists to test, learn and follow a visual intuition."',
    '<div className="about-portrait"><div className="about-portrait-grid" /><div className="about-initials">TD<span> / </span>CGI</div><div className="about-portrait-label">LOOKDEV / PIPELINE / LIGHTING</div></div>': '<div className="about-portrait"><img src="/assets/placeholders/about/danilo_caliro_photo_placeholder.webp" alt="Placeholder for Danilo Caliro portrait" /><div className="about-portrait-grid" /><div className="about-portrait-label">LOOKDEV / PIPELINE / LIGHTING</div></div>',
    '<span className="visual-caption">BLENDER<sup>®</sup> / WORK IN PROGRESS</span>': '',
}
for old, new in replacements.items():
    if old not in text:
        print('Missing:', old[:80])
    text = text.replace(old, new)
path.write_text(text)
print('Updated Home.tsx references')
