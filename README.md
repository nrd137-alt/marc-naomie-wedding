# Marc & Naomie — Wedding Website

A single-page wedding site, styled after Rivendell: deep teal-green, silver/mithril
text, aged-gold filigree, twinkling stars, and a hand-drawn vine motif throughout.
Built as plain HTML/CSS/JS — no build step, deploys directly to GitHub Pages.

## What's included
```
index.html                 → the whole site (hero, story, schedule, travel, fund, RSVP)
assets/css/style.css        → all styling (colors/fonts as CSS variables at the top)
assets/js/main.js           → starfield, countdown timer, scroll reveals, audio toggle
assets/img/favicon.svg      → small site icon
assets/audio/README.txt     → notes on adding an ambient music track
google-form-fields.md       → exact fields to build in Google Forms for the RSVP
```

## 1. Publish to GitHub Pages

1. Create a new GitHub repository (suggested name: `marc-naomie-wedding`).
2. Upload everything in this folder to the repo (keep the folder structure as-is).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Branch: `main`, folder: `/ (root)` → **Save**.
6. After a minute or two, your site will be live at:
   `https://YOUR-USERNAME.github.io/marc-naomie-wedding/`
7. Optional: add a `CNAME` file with your custom domain if you buy one, and point
   your domain's DNS at GitHub Pages (GitHub's docs walk through this under
   "Managing a custom domain for your GitHub Pages site").

## 2. Build and connect the RSVP form
Follow `google-form-fields.md` exactly — it lists every field you selected
(name, attending y/n, guest count, +1, kids, dietary needs, hotel interest,
shuttle interest, phone, email, well wishes) plus recommended Google Forms
branching logic so guests who aren't attending skip the guest-count questions.

Once built, grab the embed `<iframe>` URL and drop it into `index.html` in the
`RSVP` section, replacing the placeholder `<div class="form-placeholder">`.

## 3. Add the honeymoon fund QR code
In the **Honeymoon Fund** section of `index.html`, swap the placeholder QR box
(`<div class="qr-box">`) for an actual QR image once you have your fund link
(Venmo, Zelle, a honeymoon-fund site, etc.):
```html
<img src="assets/img/honeymoon-qr.png" alt="Scan to contribute to our honeymoon fund" width="190" height="190">
```
Any free QR generator (e.g. qr-code-generator.com) will turn your payment link
into a downloadable PNG/SVG — drop it in `assets/img/`.

## 4. Add ambient background music
See `assets/audio/README.txt`. Drop a royalty-free instrumental track in as
`assets/audio/ambient.mp3` and the mute/unmute button in the top-right corner
will work automatically — no code changes needed. (Do not use actual LOTR
soundtrack tracks — they're copyrighted. Search "celtic harp ambient" or
"fantasy forest ambient" on a royalty-free library instead.)

## 5. Fill in your own story
Find the `<!-- ================= OUR STORY ================= -->` section in
`index.html` and replace the placeholder paragraphs (marked with an
`— Replace this... —` note) with your actual story.

## 6. Double-check before sending invites
- [ ] Google Form built and embedded
- [ ] Honeymoon fund QR/link added
- [ ] "Our Story" section personalized
- [ ] Ambient audio file added (optional)
- [ ] Countdown target date/time confirmed (currently July 4, 2027, 3:00 PM Mountain Time — set in `assets/js/main.js`, look for `WEDDING_DATE`)
- [ ] Tested on a phone (site is responsive, but always worth a real check)
- [ ] GitHub Pages link works when opened in a private/incognito browser window

## Customizing colors/fonts
Every color and font is a CSS variable at the top of `assets/css/style.css`
(look for the `:root { ... }` block) — change values there and they cascade
through the whole site.
