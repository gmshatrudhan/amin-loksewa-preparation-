# Amin Loksewa Preparation — Website Files

Single-page website split into easy-to-edit files. Ready to upload to **GitHub Pages** — no build step needed.
Note: pages use clean URLs (`/syllabus`, `/subject/…`), so local preview needs a tiny server (see Notes below), not double-click.

## 📁 What's inside

| File / folder | What it is | Edit when you want to… |
|---|---|---|
| `index.html` | The page itself (loads everything below) | Rarely — only page title / language |
| `css/style.css` | All design & colours (`:root` variables at top) | Change colours, fonts, sizes |
| `js/app.js` | App logic (menus, quiz, login, pages) | Change how things work |
| `js/content.js` | **Site texts**: name, phone, email, address, notices, FAQs, team, home slides, legal pages | Update any text / notice / member |
| `mcq/mcq-<subject>-<unit>.js` (27 files) | **MCQ questions**, one file per unit | Add / fix objective questions |
| `js/data-manifest.js` | **Map**: every unit → its 3 files (auto-generated, do not hand-edit) | Never — keep file/folder names unchanged so the map stays valid |
| `subjective/subjective-<subject>-<unit>.js` (27 files) | **Written questions**, one file per unit | Add / fix subjective questions |
| `study/study-<subject>-<unit>.js` (27 files) | **Study material**, one file per unit | Write real notes per unit |
| `images/` | `profile.jpg` (contact/owner photo), `team-*.jpg` (team members) | Replace photos (keep the same file names!) |
| `manifest.json` | Phone "add to home screen" info | Rarely |
| `404.html` | Copy of index.html — makes clean URLs + refresh work on GitHub Pages | Never (must stay identical to index.html) |
| `sitemap.xml` | Page list for Google | After adding/removing pages |

Subjects: sub1 General Awareness · sub2 Public Management · sub3 Surveying Methodology and Mapping ·
sub4 Land Administration, Cadastral Survey and Land Records · sub5 Mathematics and Instruments · sub6 Control Survey.

## ✏️ How to edit questions (MCQ)

Open the unit's file, e.g. `mcq/mcq-surveying-methodology-and-mapping-chain-survey.js`. Each question looks like this:

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

Open the unit's file, e.g. `study/study-surveying-methodology-and-mapping-chain-survey.js`. It has three parts: `"outcomes"` (what the student will
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
   (`index.html`, `404.html`, `css`, `js`, `mcq`, `study`, `subjective`, `images`, `sitemap.xml`, …) → **Commit changes**.
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

- Keep file names and folder structure exactly as they are — `js/data-manifest.js` refers to them by path.
- Each unit page loads ONLY its own 3 files (fast); the search page loads all 81 once.
- Preview locally with a server: `cd amin-website && python3 -m http.server`, then open http://localhost:8000 (double-click won't work: clean URLs need a server).
- Login accounts & progress are stored in each visitor's own browser (localStorage demo auth).
