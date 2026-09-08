from pathlib import Path
import re

path = Path('/home/ubuntu/danilo_caliro_portfolio/client/src/pages/Home.tsx')
text = path.read_text()
pattern = re.compile(r'<form className="contact-form" action=\{contactFormEndpoint\}.*?>', re.S)
replacement = '<form className="contact-form" action={contactFormEndpoint} method="POST" noValidate onSubmit={async (event) => { event.preventDefault(); const form = event.currentTarget; setFormError(""); if (!form.checkValidity()) { setFormError("Please complete all required fields with a valid email address."); return; } setFormSending(true); try { const response = await fetch(contactFormEndpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } }); const result = await response.json().catch(() => ({})); if (!response.ok) throw new Error(result?.errors?.[0]?.message || "Form submission failed"); setFormSent(true); } catch (error) { setFormError(error instanceof Error ? error.message : "Something went wrong. Please try again in a moment."); } finally { setFormSending(false); } }}>'
text, count = pattern.subn(replacement, text, count=1)
if count != 1:
    raise SystemExit('Expected one contact form opening tag')
path.write_text(text)
print('Updated contact form opening tag')
