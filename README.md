# Amin Loksewa Preparation — Website Files

Single-page website split into easy-to-edit files. Works by just opening `index.html`
— no build step, no server needed. Ready to upload to **GitHub Pages**.

## 📁 What's inside

| File / folder | What it is | Edit when you want to… |
|---|---|---|
| `index.html` | The page itself (loads everything below) | Rarely — only page title / language |
| `css/style.css` | All design & colours (`:root` variables at top) | Change colours, fonts, sizes |
| `js/app.js` | App logic (menus, quiz, login, pages) | Change how things work |
| `js/content.js` | **Site texts**: name, phone, email, address, notices, FAQs, team, home slides, legal pages | Update any text / notice / member |
| `questions/mcq-sub1.js` … `mcq-sub6.js` | **MCQ questions**, one file per subject | Add / fix objective questions |
| `questions/subjective-sub1.js` … `subjective-sub6.js` | **Written questions**, one file per subject | Add / fix subjective questions |
| `study/sub1-unit1.js` … `study/sub6-unit4.js` | **Study material**, one file per unit (all 27) | Write real notes per unit |
| `images/` | `profile.jpg` (contact/owner photo), `team-*.jpg` (team members) | Replace photos (keep the same file names!) |
| `manifest.json` | Phone "add to home screen" info | Rarely |

Subjects: sub1 General Awareness · sub2 Public Management · sub3 Surveying Methodology and Mapping ·
sub4 Land Administration, Cadastral Survey and Land Records · sub5 Mathematics and Instruments · sub6 Control Survey.

## ✏️ How to edit questions (MCQ)

Open e.g. `questions/mcq-sub1.js`. Each question looks like this:

```js
{q:"Nepal's longest river?", o:["Koshi", "Gandaki", "Karnali", "Bagmati"], a:2, e:"Karnali (~507 km) is the longest."},
```

- `q` = question, `o` = the 4 options, `a` = correct option **number: 0, 1, 2 or 3** (first option = 0!),
  `e` = explanation shown after answering.
- To add: copy one full `{...},` line, paste it after the last one, edit the text.
- ⚠️ Do **NOT** rename the unit titles in square brackets (`window.EXTRA["..."]`) — the app finds
  questions by matching the title exactly.

Subjective files use `{q:"...", marks:10, hint:"...model answer / hints..."}`.

## 📖 How to edit study material

Open e.g. `study/sub1-unit1.js`. It has three parts: `"outcomes"` (what the student will
learn), `"content"` (study sections, each with `"h"` = heading and `"p"` = paragraph) and
`"keypoints"` (quick-revision bullets). Just edit the text between quotes; copy a
`{"h": "...", "p": "..."}` block to add a section (keep commas between blocks).
⚠️ Do **NOT** rename the unit title in square brackets (`window.STUDY["..."]`).

## 🖼️ How to change photos

Replace the file in `images/` with your new `.jpg` photo **keeping the exact same file name**
(`profile.jpg`, `team-sunil-sah.jpg`, …). Square photos (~600×600) look best.

## 🎨 How to change colours

Open `css/style.css`, find `:root` at the top, change e.g. `--primary:#0E3A5F` (main blue),
`--accent:#F5A524` (yellow). Save + refresh.

## 🚀 Upload to GitHub Pages (free hosting)

**Option A — in the browser (easiest):**
1. Go to github.com → **Sign up / Sign in** → **New repository** → name it e.g. `amin-website` → **Create**.
2. Click **Add file → Upload files** → drag **the files INSIDE this folder**
   (`index.html`, `css`, `js`, `questions`, `images`, …) → **Commit changes**.
3. Go to **Settings → Pages** → under *Build and deployment*, Source = **Deploy from a branch**,
   Branch = **main**, folder = **/ (root)** → **Save**.
4. Wait ~2 minutes → your site is live at `https://YOUR-USERNAME.github.io/amin-website/`.

**Option B — with git:**
```bash
git init && git add . && git commit -m "Amin website"
# create an empty repo on github.com first, then:
git remote add origin https://github.com/YOUR-USERNAME/amin-website.git
git branch -M main && git push -u origin main
# then enable Pages as in step 3 above.
```

To update the site later, just upload/commit the changed files again.

## 💡 Notes

- Keep file names and folder structure exactly as they are — `index.html` refers to them by path.
- You can preview offline: just double-click `index.html` (works without internet, except the map/social links).
- Login accounts & progress are stored in each visitor's own browser (localStorage demo auth).
