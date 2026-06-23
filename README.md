# Muhammad Ahmad — Portfolio

A simple, framework-free portfolio site. No build step, no `node_modules`,
no config files to fight with — just three kinds of files:

```
portfolio/
├── index.html        ← all your text/content lives here
├── css/style.css      ← all colors, fonts, spacing live here
├── js/script.js        ← small effects (typing text, menu, etc.)
├── images/             ← icons & avatar (currently placeholders, see below)
└── assets/resume.pdf   ← placeholder, replace with your real CV
```

You can open `index.html` in any web browser right now and see the full site —
no installation needed.

---

## 1. Editing content

Everything you read on the page (your bio, project descriptions, certifications,
email, links) is plain text inside `index.html`. Open it in any text editor
(VS Code, Notepad, etc.), find the text you want to change, edit it, save.
No code knowledge required for this part.

A few specific things to update before you publish:

- **`assets/resume.pdf`** — replace this file with your real résumé,
  keeping the exact same filename.
- **GitHub link** — in `index.html`, search for `your-username` and replace
  it with your real GitHub URL (or delete that block if you don't want it).
- **Phone number** — the old site had a placeholder phone number
  (`+1 (123) 456-7890`) that looked fake. I left it out of the new contact
  section entirely — add it back into the `.contact-list` in `index.html`
  if you do want it shown.

## 2. Editing colors / fonts

Open `css/style.css` and look at the very top — there's a `:root { ... }`
block with named colors like `--blue` and `--coral`. Change the hex codes
there and the whole site updates everywhere that color is used.

Two more things worth knowing:
- The dark left sidebar uses `var(--ink)` as its background (set in the
  `.rail` rule) — change that one value to retheme the whole sidebar.
- Sections alternate between plain background and a light tint using the
  `.tint-blue` / `.tint-coral` classes (defined near the top of the CSS,
  search for "Alternating section washes"). To change which sections are
  tinted, add or remove `class="tint-blue"` / `class="tint-coral"` on the
  relevant `<section>` tag in `index.html`.

## 3. Replacing the certificate images

Each of the 7 certification cards points to its own separate placeholder
file (`cert-1-prompt-engineering.svg`, `cert-2-hccda-ai.svg`, etc.) — so
replacing one never affects the others.
1. Save a screenshot or scan of each certificate into `images/`, using
   whatever filename you like (e.g. `images/prompt-engineering-cert.jpg`).
2. In `index.html`, find that certificate's `<img>` tag inside the
   `cert-grid` section, update the `src`, and delete
   `class="placeholder-icon"` — that class is only what makes the icon
   small and centered; removing it lets your real image fill the frame.

## 4. Putting it online with GitHub Pages (free & public)

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Upload everything inside this `portfolio` folder to that repository
   (drag-and-drop on github.com works, or use `git push` if you're
   comfortable with git).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch `main`, folder `/ (root)`. Save.
5. GitHub gives you a live URL in a minute or two, usually:
   `https://your-username.github.io/portfolio/`

From then on, any time you want to make a change: edit the file, commit,
push — the live site updates automatically. No deploy settings, no build
step, nothing to break.

## 5. About the contact section, and receiving files by email

This site has no backend (GitHub Pages only serves static files), so the
Contact section links straight to your email and LinkedIn rather than using
a form.

If someone wants to **send you a file**, the "email me" link already
handles that: clicking it opens their own email app addressed to your
Gmail, and they can attach a file themselves before hitting send — no
sign-up, no cost, no backend needed. This is genuinely the simplest and
most reliable option for a personal portfolio.

If you'd rather have an on-page form people fill out without leaving the
site: that's possible too (e.g. with a service like Formspree), but be
aware that **file-upload support on these services now requires a paid
plan** (free tiers only forward text fields by email). If you want a form
purely for name/email/message with no attachments, that's still free and
I can wire it in on request.
