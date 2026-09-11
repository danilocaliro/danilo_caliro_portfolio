from pathlib import Path

path = Path('/home/ubuntu/danilo_caliro_portfolio/client/src/index.css')
text = path.read_text()
start_marker = '/* Desktop portrait hover test: soft cinematic relight entering from the lit right side */'
end_marker = '/* Final portrait state: static supplied photo, no hover grade or animation */'
start = text.index(start_marker)
end = text.index(end_marker)
replacement = '''/* Final portrait state: static supplied photo, no hover grade or animation */
.artist-about-section .about-portrait.has-photo::before,
.artist-about-section .about-portrait.has-photo::after {
  display: none !important;
  content: none !important;
  background: none !important;
  border: 0 !important;
  box-shadow: none !important;
  opacity: 0 !important;
  transition: none !important;
}
.artist-about-section .about-portrait.has-photo img {
  filter: none !important;
  transition: none !important;
}
'''
path.write_text(text[:start] + replacement + text[end + len(end_marker):])
print('Removed all portrait hover experiment blocks; retained one static portrait rule.')
