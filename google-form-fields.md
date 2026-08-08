# RSVP Google Form — Field Spec

Build this at forms.google.com, then Send → Embed (`<>`) → copy the iframe `src` URL
into `index.html` where the `form-placeholder` comment says to (inside the RSVP section).

Suggested form title: **"Marc & Naomie — RSVP"**
Suggested description: *"Kindly reply by April 4th, 2027. We can't wait to celebrate with you."*

Turn on **Settings → Responses → Collect email addresses** if you also want Google's
built-in verified email capture in addition to the manual email field below.

---

## 1. Full Name(s)
- Type: **Short answer**
- Required: Yes
- Help text: "Please include the full name(s) of everyone in your party."

## 2. Are you able to attend?
- Type: **Multiple choice**
- Options:
  - "I shall be there" (Attending)
  - "Alas, I cannot" (Not attending)
- Required: Yes
- **Recommended:** Use Google Forms' "Go to section based on answer" feature here.
  - If "I shall be there" → jump to **Section 2: Attending Guests**
  - If "Alas, I cannot" → jump straight to **Section 3: Well Wishes** (skip meal/guest count/etc.)

---

### Section 2 — Attending Guests (only shown if attending)

## 3. Number of guests attending (including yourself)
- Type: **Multiple choice** or **Dropdown**
- Options: 1, 2, 3, 4, 5+
- Required: Yes

## 4. +1 Name (if applicable)
- Type: **Short answer**
- Required: No
- Help text: "If you're bringing a guest, let us know their name."

## 5. Children attending + ages
- Type: **Short answer** (paragraph works too)
- Required: No
- Help text: "List names and ages of any children joining us — helps us plan seating and any kid-friendly touches."

## 6. Dietary restrictions / allergies
- Type: **Paragraph**
- Required: No
- Help text: "Let us know about any allergies or dietary restrictions for you or your guests."

## 7. Are you interested in the recommended hotel accommodations?
- Type: **Multiple choice**
- Options: Yes / No / Already booked elsewhere
- Required: No

## 8. Will you need shuttle / transportation info?
- Type: **Multiple choice**
- Options: Yes, send me details / No, I have my own transportation
- Required: No

## 9. Phone number
- Type: **Short answer**
- Validation: allow numbers/formatting (Response validation → Text → Regex if you want to enforce format)
- Required: No
- Help text: "In case we need to reach you before the big day."

## 10. Email address
- Type: **Short answer**
- Validation: Response validation → Text → Email address
- Required: Yes
- Help text: "So we can send you photos and videos afterward!"

---

### Section 3 — Well Wishes (shown to everyone)

## 11. Well wishes / note to the couple
- Type: **Paragraph**
- Required: No
- Help text: "Any words of wisdom, well wishes, or song requests are welcome here."

---

## After building the form
1. Click **Send** → the **`<>`** embed icon.
2. Copy the URL inside `src="..."` from the generated `<iframe>` tag.
3. Open `index.html`, find the `form-placeholder` block inside `<section id="rsvp">`,
   and replace it with:
   ```html
   <iframe src="PASTE_YOUR_URL_HERE" width="100%" height="900">Loading…</iframe>
   ```
4. Delete the placeholder `<div class="form-placeholder">…</div>` entirely once the
   iframe is in place.
