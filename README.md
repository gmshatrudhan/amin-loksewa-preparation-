# Amin Loksewa Preparation — Complete Website Manual (README)

> **What this file is:** the full maintenance and editing manual for your website —
> every file, every editable text, every setting, with exact file names, line numbers,
> and search phrases (so you can find things with Find/Search on your Android phone).
>
> **Last verified against the code:** 2026-09-10. All file names, routes, and line
> numbers below were read from the actual current files — nothing is guessed.

---

## Table of Contents

1. [Complete File & Folder Structure](#1-complete-file--folder-structure)
2. [Exact Editing Locations](#2-exact-editing-locations)
3. [Slider / Slides Feature](#3-slider--slides-feature)
4. [Website Text & Content](#4-website-text--content)
5. [Subjects & Units](#5-subjects--units)
6. [MCQ / Quiz System](#6-mcq--quiz-system)
7. [Subjective Question System](#7-subjective-question-system)
8. [Login / User System](#8-login--user-system)
9. [Admin / Content Management](#9-admin--content-management)
10. [Navigation & Pages (All Routes)](#10-navigation--pages-all-routes)
11. [Design / UI](#11-design--ui)
12. [Images & Assets](#12-images--assets)
13. [Responsive / Mobile Design](#13-responsive--mobile-design)
14. [Header, Menu & Footer](#14-header-menu--footer)
15. [Search System](#15-search-system)
16. [Notice System](#16-notice-system)
17. [External Services & Configuration](#17-external-services--configuration)
18. [Dependencies & Libraries](#18-dependencies--libraries)
19. [SEO](#19-seo)
20. [Performance](#20-performance)
21. [Common Changes — Quick Reference](#21-common-changes--quick-reference)
22. [Exact Line References (Master Table)](#22-exact-line-references-master-table)
23. [Safe Editing Rules](#23-safe-editing-rules)
24. [Troubleshooting](#24-troubleshooting)
25. [Deployment](#25-deployment)
26. [Website Architecture](#26-website-architecture)
27. [Final "Where Do I Edit?" Guide](#27-final-where-do-i-edit-guide)
- [Appendix A: Complete File-by-File Reference](#appendix-a-complete-file-by-file-reference)
- [Appendix B: Counts & Limits Cheat Sheet](#appendix-b-counts--limits-cheat-sheet)

**How to use this manual on your phone:** every section gives you
`File → Line → Search for: "..."`. In your code editor app use **Find/Search**,
type the search phrase, and you will land exactly on the setting.

---

## 1. Complete File & Folder Structure

### 1.1 The two copies of your website (read this first!)

Your workspace contains the website in **two forms**. They contain the same
website — edit only ONE of them (the split project), otherwise your changes
will not match each other:

| Copy | Path | What it is | Should you edit it? |
|---|---|---|---|
| **Split project (EDIT THIS)** | `amin-website/` | The website split into 48 small, easy files | ✅ **Yes — this is your working copy. Upload these files to go live.** |
| Single-file backup | `index.html` (workspace root, ~355 KB) | The entire website in one file | ❌ No — keep as emergency backup only |
| Test suites | `tests/suite.js`, `tests/parity.js` | Automatic checkers (need a computer with Node.js) | ❌ No (used only for verification) |

> If you edit a file inside `amin-website/`, the single `index.html` does **not**
> update automatically, and vice versa. Always edit `amin-website/` and deploy
> from there. The single file is only a spare copy.

### 1.2 Folder map of `amin-website/` (48 files)

```
amin-website/
├── index.html                  ← the shell: SEO tags + 41 <script> tags (loads everything)
├── manifest.json               ← app name/icons for "Add to Home Screen" (PWA)
├── README.md                   ← the short original readme (this big manual replaces it)
├── css/
│   └── style.css               ← ALL design: colors, fonts, slider, quiz, mobile rules (775 lines)
├── js/
│   ├── content.js              ← ALL editable website text: name, slides, syllabus,
│   │                              notices, FAQs, team, legal pages (116 lines) ⭐ EDIT TEXT HERE
│   └── app.js                  ← ALL logic: pages, router, quiz engine, login, search (1,258 lines)
├── questions/                  ← 12 files: MCQ + written questions, one pair per subject
│   ├── mcq-sub1.js … mcq-sub6.js
│   └── subjective-sub1.js … subjective-sub6.js
├── study/                      ← 27 files: study notes, one file per unit ⭐ EDIT NOTES HERE
│   ├── sub1-unit1.js … sub1-unit5.js   (General Awareness — 5 units)
│   ├── sub2-unit1.js … sub2-unit5.js   (Public Management — 5 units)
│   ├── sub3-unit1.js … sub3-unit5.js   (Surveying Methodology — 5 units)
│   ├── sub4-unit1.js … sub4-unit3.js   (Land Administration — 3 units)
│   ├── sub5-unit1.js … sub5-unit5.js   (Mathematics and Instruments — 5 units)
│   └── sub6-unit1.js … sub6-unit4.js   (Control Survey — 4 units)
└── images/                     ← 3 photos
    ├── profile.jpg             ← owner photo (contact page + team)
    ├── team-sunil-sah.jpg      ← team member photo
    └── team-rishikesh-sah.jpg  ← team member photo
```

### 1.3 What controls what (the 30-second version)

| Part of the website | File that controls it |
|---|---|
| Website name, tagline, phone, email, address | `js/content.js` → `SITE` (lines 8–21) |
| Home slider slides (text, buttons, colors) | `js/content.js` → `SLIDES` (lines 31–52) |
| Syllabus tracks (Federal + 7 provinces) | `js/content.js` → `SYLLABUS` (lines 54–79) |
| Notices | `js/content.js` → `NOTICES` (lines 81–88) |
| FAQs | `js/content.js` → `FAQS` (lines 90–96) |
| Team members | `js/content.js` → `TEAM` (lines 98–108) |
| Privacy / Terms / Copyright / Disclaimer | `js/content.js` → `LEGAL` (lines 110–115) |
| Social media links | `js/content.js` → `SOCIAL` (lines 23–29) |
| Contact-form email delivery (Formspree) | `js/content.js` → `formEndpoint` (line 20) |
| Subject names, icons, colors, unit titles | `js/app.js` → `SUBJECTS` (lines 55–107) |
| Study notes of each unit | `study/subN-unitM.js` (27 files) |
| MCQ questions of each subject | `questions/mcq-subN.js` (6 files) |
| Written questions of each subject | `questions/subjective-subN.js` (6 files) |
| All colors, fonts, sizes, mobile layout | `css/style.css` (`:root` variables start line 9) |
| Page title, Google/Facebook preview info | `index.html` (lines 6–28) |
| All photos | `images/` folder |
| Page layouts, quiz rules, login, search | `js/app.js` functions (see §10) — ⚠️ code, see §23 |

### 1.4 Files you normally edit vs. files you must not touch

**✅ SAFE to edit (designed for you):**

| File(s) | Edit for |
|---|---|
| `js/content.js` | Site name, slides, syllabus, notices, FAQs, team, legal, social links |
| `study/*.js` (27 files) | Study notes text of any unit |
| `questions/mcq-sub*.js` (6 files) | MCQ questions, options, answers, explanations |
| `questions/subjective-sub*.js` (6 files) | Written questions, marks, model answers |
| `images/*` | Replace photos (keep the same file names!) |
| `manifest.json` | App name shown when installed on a phone |
| `index.html` lines 6–31 | Page title + Google/social preview (careful, see §19) |

**⚠️ Edit ONLY if you follow this manual exactly:**

| File(s) | Why careful |
|---|---|
| `js/app.js` lines 55–107 (`SUBJECTS`) | Subject/unit names — renaming a unit title breaks its questions + notes links (§5.7) |
| `css/style.css` lines 9–44 (`:root`) | Color/font variables — safe if you only change values (§11) |
| `index.html` lines 92–132 | Script list — order matters; never reorder |

**🚫 DO NOT touch:**

| File(s) / Lines | Reason |
|---|---|
| `js/app.js` everything except lines 55–107 | Program logic — one wrong character can blank the whole site |
| `css/style.css` rules outside `:root` (unless following §11/§13) | Layout rules — easy to break mobile view |
| `index.html` lines 62–66 (theme script), 73–89 (`#seo` block), `id="app"`, `id="header"`, `id="footer"`, `id="topbar"`, `id="toTop"` | Structural hooks the JavaScript needs |
| `js/content.js` → `icon:` codes inside `SOCIAL` (the long `M13 22v...` strings) | SVG icon drawings — unreadable by design; never edit, only change `url:` |
| Federal syllabus `emoji:` (line 55, contains SVG code) | Same — change only `label:`, `year:`, `desc:` |

---

## 2. Exact Editing Locations

> Format used in this manual:
> **File** → **Section** → **Line** → **Search for** → what to change / NOT change → old → new example.

### 2.1 Website name & tagline

- **File:** `js/content.js` → **Section:** `SITE` → **Lines:** 9–10
- **Search for:** `name: "Amin loksewa preparation"`
- **Change:** only the text between the quotes.
- **Do NOT change:** the words `name:` / `tagline:` or the commas.
- Old: `name: "Amin loksewa preparation",` → New: `name: "My New Site Name",`

### 2.2 Phone, email, address, copyright

- **File:** `js/content.js` → **Lines:** 11–14 — **Search for:** `phone: "+977`
- Old: `phone: "+977 9814041813",` → New: `phone: "+977 9800000000",`
- ⚠️ The **tap-to-call link** is hardcoded in **2 more places** — if you change the
  phone number you must change all 3 (see §14.6).

### 2.3 Hero Slide 1 (full example)

- **File:** `js/content.js` → **Section:** `SLIDES` → **Lines:** 32–35
- **Search for:** `tag:"Author"`

```js
{ tag:"Author", title:"Shatrudhan Sah", sub:"Amin Loksewa Instructor",
  desc:"Prepared and maintained by Shatrudhan Sah \u2014 structured notes...",
  btn:"About the Author", href:"#/about", btn2:"Contact", href2:"#/contact",
  g1:"#092741", g2:"#17527F", icon:"\u270D" },
```

| What | Field | Old → New example |
|---|---|---|
| Small gold label | `tag` | `"Author"` → `"Welcome"` |
| Big title | `title` | `"Shatrudhan Sah"` → `"Pass Your Amin Exam"` |
| Gold subtitle | `sub` | `"Amin Loksewa Instructor"` → `"Free notes & tests"` |
| Description | `desc` | edit text (keep `\u2014` if you want the — dash) |
| Main button text | `btn` | `"About the Author"` → `"Start Learning"` |
| Main button link | `href` | `"#/about"` → `"#/subjects"` (must be an existing route, see §10) |
| Second button text/link | `btn2` / `href2` | same rules |
| Background gradient | `g1`, `g2` | `"#092741"` → `"#123456"` (any `#RRGGBB` color) |
| `icon` | — | 🚫 **Does nothing** (unused field — changing it has no visible effect) |

### 2.4 Auto-slide timing & animation

- **Timing File:** `js/app.js` → **Line:** 1214 — **Search for:** `setInterval(()=>goTo(idx+1),5000)`
- Old: `5000` (= 5 seconds) → New: `8000` (= 8 seconds). Only change the number.
- **Slide animation File:** `css/style.css` → **Line:** 196 — **Search for:** `.slides{display:flex`
- Old: `transition:transform .65s cubic-bezier(.65,0,.35,1)` → New: e.g. `.4s` for
  faster sliding. Only change `.65s`.

### 2.5 Subject name / icon / color

- **File:** `js/app.js` → **Lines:** 56, 65, 74, 83, 90, 99 (one line per subject)
- **Search for:** `id:"sub1"`
- Old: `{ id:"sub1", name:"General Awareness", icon:"🌏", color:"#0E3A5F",`
- New: `{ id:"sub1", name:"GK & Awareness", icon:"📚", color:"#123456",`
- 🚫 NEVER change `id:"sub1"` — links and saved progress use it.

### 2.6 Unit title

- **File:** `js/app.js` → inside `mkUnits("...",[ ... ])` under each subject
  (e.g. sub1 units: lines 59–63)
- Old: `"नेपालको भूगोल तथा प्राकृतिक स्रोत",` → New: `"New unit name",`
- 🚫 **DANGER:** the questions files and study files find their content by matching
  this title **exactly**. If you rename it, you must rename it in 3 files too
  (full procedure in §5.7).

### 2.7 Study notes of a unit

- **File:** `study/sub1-unit1.js` (etc.) → **Lines:** 14–37
- **Search for:** `window.STUDY["`
- Change only the text inside `"..."`. Example:
- Old: `"Apply the concepts to Loksewa exam questions.",`
- New: `"Solve 50 Loksewa questions from this unit.",`
- 🚫 Do NOT rename the title inside `window.STUDY["..."]`.

### 2.8 MCQ question

- **File:** `questions/mcq-sub1.js` (etc.) — one `{q, o, a, e}` block per question
- **Search for:** the question text, e.g. `q:"नेपालमा अवस्थित`
- Old: `{q:"...?", o:["कञ्चनजङ्घा", "सगरमाथा", "ल्होत्से", "मकालु"], a:1, e:"..."}`
- The correct answer `a:1` means **option number 1** (counting starts at 0:
  0 = first option, 1 = second, 2 = third, 3 = fourth).
- To change the correct answer to the 3rd option: `a:1` → `a:2`. Full guide in §6.

### 2.9 Notice

- **File:** `js/content.js` → **Lines:** 82–87 — **Search for:** `cat:"Exam"`
- Old: `{ id:1, cat:"Exam", date:"2026-09-05", title:"First Terminal...", body:"..." }`
- New notice = copy one line, give it a new unused `id`, change `date`/`title`/`body`.
- `cat` must be one of `Exam`, `Result`, `Admission`, `Event` (see §16).

### 2.10 Main website color

- **File:** `css/style.css` → **Line:** 11 — **Search for:** `--primary:#144A78`
- Old: `--primary:#144A78;` → New: `--primary:#0A5C36;` (whole site recolors instantly)
- Also update the dark-theme twin at **line 47** (`--primary:#66ABDF`). See §11.

### 2.11 Footer copyright + "Created by" line

- Copyright: `js/content.js` line 14 — Search: `copyright: "© 2026`
- "CREATED BY" line: `js/app.js` line 401 — Search: `CREATED BY SHATRUDHAN SAH`
- Old: `<b>CREATED BY SHATRUDHAN SAH</b>` → New: `<b>CREATED BY YOUR NAME</b>`

### 2.12 Contact-form email delivery (Formspree)

- **File:** `js/content.js` → **Line:** 20 — **Search for:** `formEndpoint:`
- Old: `formEndpoint: ""` → New: `formEndpoint: "https://formspree.io/f/YOUR_FORM_ID"`
- Empty = form opens the visitor's email app. With ID = messages arrive by email. (§17.1)

---

## 3. Slider / Slides Feature

### 3.1 How the slider works (simple version)

- The 5 slides are **data** in `js/content.js` → `SLIDES` (lines 31–52).
- The slider **machine** (auto-advance, arrows, dots, swipe) is in `js/app.js`
  lines 1206–1238 (`goTo`, `go`, `restart`, `initSlider`).
- The slider **look** (height, animation, arrows, dots) is in `css/style.css`
  lines 194–231.
- Slides have **gradient backgrounds** (two colors `g1` → `g2`) + a white dot
  pattern + a dark overlay for readability. **Slides do NOT use photo backgrounds**
  in the current design (adding one is possible — see §3.13).

### 3.2 The 5 slides and their exact lines

| Slide | Line | Search for | Tag | Title |
|---|---|---|---|---|
| 1 | `js/content.js` 32–35 | `tag:"Author"` | Author | Shatrudhan Sah |
| 2 | `js/content.js` 36–39 | `tag:"Syllabus"` | Syllabus | Federal and 7 Provinces |
| 3 | `js/content.js` 40–43 | `tag:"Subjects"` | Subjects | 6 Subjects, 27 Units |
| 4 | `js/content.js` 44–47 | `tag:"Tests"` | Tests | 54 Practice Tests |
| 5 | `js/content.js` 48–51 | `tag:"Notice"` | Notice | Latest Notices |

Each slide has these fields: `tag`, `title`, `sub`, `desc`, `btn`, `href`,
`btn2`, `href2`, `g1`, `g2`, `icon` (see the table in §2.3 for what each does).

### 3.3 Change slide text / title / description

Edit `title:`, `sub:`, `desc:` in `js/content.js` (lines 31–52).
Only change text between quotes. Example — Slide 3 title:
- Old: `title:"6 Subjects, 27 Units",` → New: `title:"6 Subjects, 30 Units",`

### 3.4 Change button text and button link

Edit `btn:`, `href:`, `btn2:`, `href2:` in the same slide block.
`href` must be a valid route from §10 (e.g. `#/subjects`, `#/tests`,
`#/notice`, `#/about`, `#/contact`, `#/syllabus/federal`, `#/register`).
- Old: `btn:"Start a Test", href:"#/tests",` → New: `btn:"Take a Quiz", href:"#/tests",`

### 3.5 Change background colors

Edit `g1:` (left color) and `g2:` (right color) in the slide block.
Use any 6-digit hex color (`#RRGGBB`).
- Old: `g1:"#092741", g2:"#17527F",` → New: `g1:"#3B0A1E", g2:"#8A2A4A",`

### 3.6 Change slide order

Cut an entire `{ ... },` slide block (4 lines) and paste it in a new position
inside `SLIDES` (`js/content.js` lines 31–52). Keep the commas: every slide
except the last must end with `},`.

### 3.7 Add a completely new slide (copy-paste)

1. Open `js/content.js`, go to line 48–51 (the last slide, `tag:"Notice"`).
2. Copy the whole 4-line block. Paste it **after** line 51 (before the `];` on line 52).
3. Add a comma after the previous block's closing `}` (so line 51 ends with `},`).
4. Edit your new block's text. Example new slide:

```js
  { tag:"New", title:"Scholarship Test 2083", sub:"Limited seats",
    desc:"Apply before the deadline and win a full scholarship for Amin preparation classes.",
    btn:"Apply Now", href:"#/notice", btn2:"Learn More", href2:"#/about",
    g1:"#0F3D2A", g2:"#177A52", icon:"\u2B50" },
```

5. The dots, arrows, swipe and auto-play update **automatically** — nothing else to change.

### 3.8 Remove a slide

Delete its whole 4-line `{ ... },` block from `SLIDES`. If you delete the last
slide, remove the trailing comma of the new last slide (line must end with `}`
not `},`). Keep at least 1 slide. Dots/arrows update automatically.

### 3.9 Auto-slide timing

- **File:** `js/app.js` → **Line:** 1214 — **Search for:** `goTo(idx+1),5000`
- The number is **milliseconds**: `5000` = 5 s, `3000` = 3 s, `10000` = 10 s.
- Old: `timer=setInterval(()=>goTo(idx+1),5000)` → New: `timer=setInterval(()=>goTo(idx+1),8000)`
- Related behavior (same area, lines 1206–1238): hovering the slider with a mouse
  pauses auto-play; touching it on mobile pauses until you lift your finger;
  ←/→ keyboard arrows switch slides; leaving the home page stops the timer.

### 3.10 Transition / animation

- **File:** `css/style.css` → **Line:** 196 — **Search for:** `.slides{display:flex`
- Old: `transition:transform .65s cubic-bezier(.65,0,.35,1)` — change `.65s` to make
  sliding faster/slower (e.g. `.4s` fast, `1s` slow). Do not remove `transform`.
- The slow background zoom is lines 198–204 (`.sbg ... transition:transform 7s linear`
  + `.slide.act .sbg`): change `7s` to adjust, or delete those two rules to disable zoom.

### 3.11 Navigation arrows

- Look: `css/style.css` lines 220–226 (`.sarr`) — size `44px`, round shape, position
  `left:16px` / `right:16px`.
- To hide arrows on desktop too: add `display:none` to the `.sarr` rule (line 220).
- Arrows are **already hidden on mobile** (line 417: `.sarr{display:none}` inside the
  ≤760px block) — mobile users swipe instead.
- Behavior: `js/app.js` line 1213 (`function go(n)`) — previous/next + timer restart.

### 3.12 Dots / indicators

- Dots are **auto-generated** from the slides (`js/app.js` lines 458, function `goTo`
  line 1206 highlights the active one). You never edit dots manually.
- Look: `css/style.css` lines 227–231: inactive 8px dots, active = 26px gold pill.
  Change `bottom:16px` (line 227) to move them up/down.

### 3.13 Slide background PHOTO (advanced — currently not used)

Slides currently support only gradient colors. To use a photo background:

1. Put the photo in `images/` (e.g. `images/slide1.jpg`, recommended 1600×500).
2. Add a field to the slide in `js/content.js`, e.g. `img:"images/slide1.jpg",`
3. In `js/app.js` line 445–446 (Search: `const slides = SLIDES.map`), change
   `<div class="sbg"></div>` to
   `<div class="sbg"${x.img?` style="background-image:url('${x.img}')"`:''}></div>`
4. In `css/style.css` after line 203 add:
   `.sbg[style]{background-size:cover;background-position:center}`
5. ⚠️ This requires careful code editing — back up first (§23.6). The dark overlay
   (`.sov`, line 205) keeps text readable over photos.

### 3.14 Mobile vs desktop appearance

| Setting | Desktop | Mobile (≤760px) | File / Line |
|---|---|---|---|
| Slider height | 340px | 370px | `css/style.css` lines 195 / 416 |
| Arrows | visible | hidden (swipe instead) | lines 220 / 417 |
| Title size | up to 2.35rem | 1.55rem | lines 214 / 417 |
| Description lines | max 2 | max 3 | lines 218 / 417 |
| Text padding | `0 48px` | `26px 22px 48px` | lines 208 / 416 |

---

## 4. Website Text & Content

Every visible text lives in one of two places. **Rule of thumb:** if the text is
listed in the table below with `js/content.js`, edit it there. Page-structure
texts (buttons inside the quiz, form labels, etc.) live in `js/app.js` next to
the page function named in §10.

### 4.1 Master text-location table

| Text you see | File | Line(s) | Search for |
|---|---|---|---|
| Website name (header, footer, about) | `js/content.js` | 9 | `name: "Amin loksewa` |
| Tagline (under logo) | `js/content.js` | 10 | `tagline:` |
| Top ticker notices | `js/content.js` | 82–87 | `const NOTICES` (first 3 shown; code `js/app.js` line 350) |
| Hero slides (all text) | `js/content.js` | 31–52 | `const SLIDES` |
| Stats bar numbers | auto | — | computed from data (`SYLLABUS.length`, `SUBJECTS.length`, `TOT_UNITS`, `TOT_TESTS`); labels in `js/app.js` 462–467 |
| "Syllabus" section title/subtitle (home) | `js/app.js` | 469 | `>Syllabus</h2>` |
| "Our Subjects" section title/subtitle | `js/app.js` | 473 | `>Our Subjects</h2>` |
| "Latest Notices" section title | `js/app.js` | 479 | `>Latest Notices</h2>` |
| "View All Notices" button | `js/app.js` | 481 | `View All Notices` |
| "Create your free account today" CTA | `js/app.js` | 484–487 | `Create your free account today` |
| Subject names/descriptions | `js/app.js` | 56–107 | `id:"sub1"` (etc.) |
| Unit titles | `js/app.js` | 59–104 | inside each `mkUnits(` list |
| Study notes text | `study/*.js` | 14–37 | `window.STUDY["` |
| "Learning Outcomes / Key Points" headings | `js/app.js` | 572–575 | `Learning Outcomes` |
| "Mark as Complete / ✓ Completed" | `js/app.js` | 577 | `Mark as Complete` |
| "Go to Test / Print Notes" buttons | `js/app.js` | 578–579 | `Go to Test` |
| Quiz start texts + mode descriptions | `js/app.js` | 589–616 | `Practice mode` |
| "Start Test / Read Notes First" | `js/app.js` | 611–612 | `Start Test` |
| Written-test heading + instructions | `js/app.js` | 615–616 | `Subject Test (Written)` |
| "Show/Hide model answer" | `js/app.js` | 621 | `Show model answer` |
| Quiz Pause/Submit buttons | `js/app.js` | 699 | `qzpause` |
| "Jump to question" + legend | `js/app.js` | 704–706 | `Jump to question` |
| Previous/Next/Flag/Save buttons | `js/app.js` | 753–759 | `Unflag` |
| Keyboard hint line | `js/app.js` | 761 | `answer &middot;` |
| Unanswered-confirm popup | `js/app.js` | 779 | `unanswered. Submit anyway` |
| Result page (PASS/FAIL, counts, buttons) | `js/app.js` | 803–834 | `Time is up` |
| "Nothing to retry" alert | `js/app.js` | 657 | `Nothing to retry` |
| Login / signup headings + labels | `js/app.js` | 963–985 | `Welcome back` |
| "Invalid email or password" | `js/app.js` | 991 | `Invalid email or password` |
| "Passwords do not match" | `js/app.js` | 998 | `Passwords do not match` |
| "already registered" | `js/app.js` | 1001 | `already registered` |
| Forgot-password texts + errors | `js/app.js` | 1005–1024 | `Reset password` |
| Dashboard welcome + cards | `js/app.js` | 1062–1077 | `Welcome back,` |
| "No tests taken yet" | `js/app.js` | 1049 | `No tests taken yet` |
| Profile page labels + "Profile saved" | `js/app.js` | 1052–1086 | `Profile &amp; Settings` |
| "Delete your account…" confirm | `js/app.js` | 1089 | `Delete your account` |
| Saved page: empty text + "Clear all" | `js/app.js` | 292–296 | `You have not saved any question yet` |
| Search placeholder + hints | `js/app.js` | 260–272 | `Type at least 2 letters` |
| "No results for…" | `js/app.js` | 272 | `No results for` |
| Notice list heading + filters | `js/app.js` | 857–864 | `Notice Board` |
| Notice detail texts | `js/app.js` | 866–877 | `For further information` |
| About page paragraphs | `js/app.js` | 881–895 | `Welcome to <b>` |
| "Our Team" heading | `js/app.js` | 897 | `>Our Team</h2>` |
| Team member data | `js/content.js` | 98–108 | `const TEAM` |
| Contact page texts + form labels | `js/app.js` | 912–946 | `Reach Us` |
| Contact send success/error messages | `js/app.js` | 318–328 | `Your message has been sent` |
| FAQ page heading | `js/app.js` | 950 | `Frequently asked questions` |
| FAQ questions/answers | `js/content.js` | 90–96 | `const FAQS` |
| Syllabus detail: exam pattern + books | `js/app.js` | 517–519 | `Exam Pattern:` |
| Syllabus track data | `js/content.js` | 54–79 | `const SYLLABUS` |
| Tests page heading | `js/app.js` | 849 | `tests — one Subject Test` |
| 404 page | `js/app.js` | 1112 | `Page Not Found` |
| Footer description paragraph | `js/app.js` | 389 | `provides notes, MCQs` |
| Footer headings + link lists | `js/app.js` | 391–400 | `Quick Links` |
| Footer copyright | `js/content.js` | 14 | `copyright:` |
| "CREATED BY…" line | `js/app.js` | 401 | `CREATED BY` |
| "Thank you for subscribing!" | `js/app.js` | 397 | `Thank you for subscribing` |
| Header nav labels (Home/Syllabus/…) | `js/app.js` | 357–366 | `>Home</a>` |
| Page header (breadcrumb + title) builder | `js/app.js` | 425 | `const head =` |
| Legal page bodies | `js/content.js` | 111–114 | `privacy: { title:` etc. |
| Browser tab title | `index.html` | 6 | `<title>` |

### 4.2 Rules for editing any text

1. Change only the text **between quotes** — never the field names (`title:`),
   commas, brackets, or `${...}` placeholders.
2. If your text contains a double quote (`"`), either use single quotes inside or
   write `\"`. Example: `title:"He said \"hello\""`.
3. Texts in `js/app.js` may contain HTML (`<b>`, `<a href=...>`). You may change
   the words but keep the tags balanced (every `<b>` needs `</b>`).
4. After saving, hard-refresh the page (see §24.1) to see changes.

---

## 5. Subjects & Units

All subjects and unit titles live in **one place**:

- **File:** `js/app.js` → **Lines:** 55–107 — **Search for:** `const SUBJECTS`

```js
const SUBJECTS = [
  { id:"sub1", name:"General Awareness", icon:"🌏", color:"#0E3A5F",   // ← line 56
    desc:"नेपालको भूगोल, इतिहास, ...।",                                   // ← line 57
    units: mkUnits("General Awareness",[                                 // ← line 58
      "नेपालको भूगोल तथा प्राकृतिक स्रोत",                                 // ← line 59 (Unit 1)
      "नेपालको इतिहास, संस्कृति तथा समाज",                                 // Unit 2
      ...]) },                                                          // ← line 64
  { id:"sub2", ... },   // lines 65–73     { id:"sub3", ... }, // lines 74–82
  { id:"sub4", ... },   // lines 83–89     { id:"sub5", ... }, // lines 90–98
  { id:"sub6", ... },   // lines 99–107
];
```

### 5.1 Rename a subject (safe)

Change only `name:"..."` on its line (56 / 65 / 74 / 83 / 90 / 99).
Also change the same name inside its `mkUnits("...")` call (used in default
study texts) and its `desc:"..."` if you wish.
- Old: `name:"General Awareness",` → New: `name:"GK and Awareness",`
- 🚫 Never change `id:"subN"`.

### 5.2 Change subject icon / emoji and color

Same line as the name: `icon:"🌏"` (any emoji) and `color:"#0E3A5F"` (any hex).
The color paints the subject's icon tile on Subjects/Home/Tests pages.

### 5.3 Reorder subjects

Cut a whole `{ id:"subN", ... },` block (9 lines) and paste it elsewhere in the
`SUBJECTS` list. Order here = order everywhere (nav menu, home, subjects page,
tests page, dashboard). URLs (`#/subject/sub1`) do NOT change.

### 5.4 Add a new subject (7 steps — follow exactly)

Example: adding `sub7` "English" with 2 units.

1. **Questions:** copy `questions/mcq-sub1.js` → `questions/mcq-sub7.js`; copy
   `questions/subjective-sub1.js` → `questions/subjective-sub7.js`. Replace the
   unit titles + questions inside (keep the `window.EXTRA["..."]` structure).
2. **Study files:** create `study/sub7-unit1.js`, `study/sub7-unit2.js` (copy any
   existing study file, change the `window.STUDY["..."]` title + texts).
3. **Register scripts** in `index.html`: add after line 116
   (`subjective-sub6.js` line) two lines:
   `<script src="questions/mcq-sub7.js"></script>` and
   `<script src="questions/subjective-sub7.js"></script>`; and after line 131
   (`sub6-unit4`) add `<script src="study/sub7-unit1.js"></script>` etc.
   ⚠️ All of these MUST come **before** `<script src="js/app.js"></script>` (line 132).
4. **Add the subject** in `js/app.js`: paste a new block before line 107 (`];`):
   `{ id:"sub7", name:"English", icon:"🔤", color:"#123456", desc:"...", units: mkUnits("English",["Unit One Title","Unit Two Title"]) },`
   (add a comma after the sub6 block's closing `}`).
5. The subject appears automatically in nav, home, subjects, tests, search, dashboard.
6. Counts (`27 units`, `54 tests`, `135 MCQs`) shown on the site are **computed
   automatically** — but the SEO description in `index.html` line 7 and slide 3
   text (`"6 Subjects, 27 Units"`, `js/content.js` line 40) are **manual** — update them.
7. Test: open `#/subject/sub7`, study page, and test page for each unit.

### 5.5 Remove a subject

Reverse of §5.4: delete its block from `SUBJECTS`, delete its 4 data files, and
delete its `<script>` lines from `index.html`. Update SEO/slide texts (§5.4.6).
Note: users who saved progress for it keep harmless leftover data in their browser.

### 5.6 Add / remove / rename / reorder units

- **Rename:** change the `"title",` line inside the subject's `mkUnits([...])`
  list — then do the **mandatory 3-file rename** in §5.7.
- **Reorder:** move title lines up/down inside the list. Unit numbers (`Unit 1…`)
  and URLs (`#/unit/sub1/2/study`) follow the new order automatically.
- **Add a unit:** append `"New Unit Title",` to the list; create its study file
  `study/subN-unitM.js`; append its `{...}.mcq=[...]` block to
  `questions/mcq-subN.js` and its `.sub=[...]` block to
  `questions/subjective-subN.js`; register the study `<script>` in `index.html`
  before `js/app.js`; update SEO/slide counts.
- **Remove a unit:** delete its title line; delete its study file + `<script>` line;
  delete its question blocks. ⚠️ Saved bookmarks pointing to it will show "Go to
  this unit" links to a now-missing page (acceptable; or leave the unit).

### 5.7 ⚠️ The golden rule: unit titles link 4 files together

A unit's title string (e.g. `"Chain Survey"`) must be **identical** in:

1. `js/app.js` → `SUBJECTS` → the `mkUnits([...])` list
2. `questions/mcq-subN.js` → `window.EXTRA["Chain Survey"].mcq = [...]`
3. `questions/subjective-subN.js` → `window.EXTRA["Chain Survey"].sub = [...]`
4. `study/subN-unitM.js` → `window.STUDY["Chain Survey"] = {...}`

If any one differs (even one extra space), that unit shows **empty** study notes
or **zero** questions. When renaming, use Find/Search on the exact title across
all files.

### 5.8 "Default selected subject" / dashboard subject list

There is no "default subject" setting. The dashboard "Continue Learning" box
shows the **first 3 subjects** — change which ones:
- **File:** `js/app.js` → **Line:** 1071 — **Search for:** `SUBJECTS.slice(0,3)`
- Old: `SUBJECTS.slice(0,3)` → New: `SUBJECTS.slice(0,6)` (show all 6) or
  `SUBJECTS.slice(3,6)` (show the last 3).

### 5.9 Unit links (Study / Test buttons)

Generated automatically as `#/unit/<subject-id>/<unit-no>/study|test`
(`js/app.js` lines 561–562, 549–550). You never edit these by hand — they follow
from subject `id` + unit position. "Previous/Next Unit" buttons: lines 564–566.

---

## 6. MCQ / Quiz System

### 6.1 Where questions are stored

`questions/mcq-sub1.js` … `questions/mcq-sub6.js` — one file per subject, one
`window.EXTRA["<unit title>"].mcq = [ ... ];` block per unit (27 blocks total,
135 questions). A file header comment (lines 1–15) lists its units and reminds
you of the format.

### 6.2 Question format (exact)

```js
window.EXTRA["Chain Survey"].mcq = [
  {q:"Question text here?", o:["Option A", "Option B", "Option C", "Option D"], a:1, e:"Explanation shown after answering."},
  {q:"Second question?",    o:["A", "B", "C", "D"],                                                              a:2, e:"Why this answer is right."}
];
```

| Field | Meaning | Rules |
|---|---|---|
| `q` | Question text | Plain text between quotes |
| `o` | Options array | 2–5 options allowed (keyboard supports A–E); 4 is standard |
| `a` | Correct option NUMBER | **0** = 1st option, **1** = 2nd, **2** = 3rd, **3** = 4th. ⚠️ Counting starts at 0! |
| `e` | Explanation | Shown after answering + in result review. May be `""` (empty) |

- Blocks are separated by commas. The LAST block in a unit has NO trailing comma.
- Question numbering (Q1, Q2…) is **automatic** — never type numbers yourself.
- To use a `"` inside text, write `\"`.

### 6.3 Add a new question (copy-paste recipe)

1. Open the subject's file, e.g. `questions/mcq-sub3.js`.
2. **Search for** the unit title, e.g. `window.EXTRA["Chain Survey"].mcq`.
3. Go to the last question line of that block (ends with `},` or `}` + `];`).
4. Copy this template, paste it **after** the last question, and edit:

```js
      {q:"What is the standard length of a metric chain?", o:["10 m", "20 m", "30 m", "50 m"], a:1, e:"A metric chain is 20 m long with 100 links of 0.2 m each."},
```

5. Comma check: the previously-last question must now end with `},` (add the
   comma), and your new last question must end with `}` (no comma) before `];`.
6. Save, open that unit's Test page, and confirm the new question appears.

### 6.4 Edit / remove questions

- **Edit:** change `q`/`o`/`a`/`e` text in place. To fix a wrong answer, only
  change the `a:` number (remember 0 = first option!).
- **Remove:** delete the whole `{...}` line. Fix commas (last remaining line must
  not end with a comma). A unit may have any number of questions, even 1.

### 6.5 Number of questions per test

All questions of the unit are used (no "10 of 50" sampling feature exists).
To offer fewer questions, physically keep fewer `{...}` blocks in the unit.

### 6.6 Timer settings

| Setting | File / Line | Search for | Default |
|---|---|---|---|
| Default minutes shown in the box | `js/app.js` line 605 | `id="qmin"` | `Math.max(5, question-count)` (5 min or 1 min/question) |
| Allowed range | `js/app.js` line 605 | `min="1" max="180"` | 1–180 minutes (user can type) |
| Hard cap applied at start | `js/app.js` line 645 | `QZ.sec=Math.min(180` | 180 min max; fallback 10 min if empty |
| Retry-wrong timer | `js/app.js` line 665 | `QZ.sec=Math.max(3,QZ.deck.length)*60` | 1 min/question, min 3 min |
| Clock turns orange ("warn") | `js/app.js` line 682–689 (`qzClock`) | `sec<=300` | ≤ 5 min left |
| Clock turns red ("danger") | same | `sec<=60` | ≤ 1 min left |
| On timeout | `js/app.js` lines 671–679 | `qzFinish(true)` | Auto-submit + "Time is up" message |

### 6.7 Shuffle settings

Start screen (`js/app.js` lines 604–606): **"Shuffle questions"** is ON by
default (`checked`), **"Shuffle options"** is OFF by default. To flip a default,
add/remove the word `checked` in its `<input ...>` tag. Shuffle code:
`js/app.js` line 630 (`qzShuffle`) + deck building lines 631–648 — do not edit.

### 6.8 Practice vs Exam mode

- Chosen on the start screen (`js/app.js` lines 596–603, function `qzMode` line 622).
- **Practice:** answer locks after one tap; correct option turns green + explanation
  shows immediately (logic: `qzRevealed`, line 691; card: `qzCard`, line 731).
- **Exam:** no feedback until Submit (all reveal at results via `revealAll`).
- Mode names/descriptions: edit lines 597–602 text only.

### 6.9 Answer / result behavior & scoring

- **Answers:** tap option (or keys A–E, `js/app.js` lines 839–846) → `qzPick`
  (line 766). Previous/Next/Flag/Save: lines 771–775. Flagged = yellow outline;
  saved = stored in bookmarks (max 500, line 195).
- **Submit:** `qzConfirm` (line 776) asks confirmation if questions are unanswered
  (line 779); `qzFinish` (line 782) computes score, saves to history (max 50
  results, line 792), shows `qzResult` (line 796).
- **PASS mark:** `js/app.js` line 802 — **Search for:** `pass=pct>=40`
  Old: `pass=pct>=40` → New: e.g. `pass=pct>=50` for a 50% pass mark.
  ⚠️ Change the twin in Test History too: line 1048 (`r.pct>=40?'ok':'bad'` and
  `r.pct>=40?'Pass':'
...[truncated 15789 chars]
## 7. Subjective Question System

### 7.1 Where written questions are stored

`questions/subjective-sub1.js` … `questions/subjective-sub6.js` — one file per
subject, one `window.EXTRA["<unit title>"].sub = [ ... ];` block per unit
(27 blocks, 81 questions). Displayed on every unit's Test page under
"Subject Test (Written)" (`js/app.js` lines 614–624).

### 7.2 Format (exact)

```js
window.EXTRA["Chain Survey"].sub = [
  {q:"Explain the principle of chain surveying.", marks:10, hint:"Model answer text: chaining is done on flat ground..."},
  {q:"What is a ranging rod?",                    marks:5,  hint:"A ranging rod is a 2–3 m pole with red/white bands..."}
];
```

| Field | Meaning | Rules |
|---|---|---|
| `q` | Question text | Plain text |
| `marks` | Full marks (number, no quotes) | Shown as "10 marks" badge; page header totals them automatically |
| `hint` | Model answer shown on "Show model answer" | Full solution text; can be long |

### 7.3 Add / edit / remove

- **Add:** copy one `{q, marks, hint}` line, paste after the last one in the
  unit's block, fix commas (same comma rule as §6.3), edit the three fields.
- **Edit:** change text in place. Change `marks:10` → `marks:5` to re-grade.
- **Remove:** delete the line, fix the commas.
- There are no categories inside a file beyond the per-unit blocks; display order
  = file order (Q1, Q2, Q3… automatic).

### 7.4 Display settings

- Card layout: `js/app.js` lines 617–623. Heading color `var(--primary)`,
  instructions line 616 ("Write each answer in your copy…").
- Written-question styles: `css/style.css` — search `.wq`, `.wqh`, `.wqn`, `.wqa`
  (around lines 522–560). Model answer is hidden until the button toggles the
  `show` class (pure CSS show/hide).
- ⚠️ Written answers are **not auto-checked and not saved** — students compare
  with the model answer themselves. There is no upload/grading feature.

---

## 8. Login / User System

### 8.1 The honest big picture (please read!)

| Question | Answer (actual code) |
|---|---|
| Is there a backend / database / server? | **No.** The site is 100% frontend files. |
| Where are user accounts stored? | In each visitor's **own browser** (`localStorage`, key `'amin'`). Accounts do NOT sync between devices and the owner cannot see them. |
| Is there Supabase / Firebase? | **No.** Nothing is prepared or connected. |
| Are there user roles (Admin / Contributor / Member)? | **No.** There is exactly ONE kind of account. "Owner & Admin" on the Contact page (§8.8) is just a text label, not a permission. |
| Is login secure? | Passwords are SHA-256 hashed (never stored as plain text), but this is **convenience login, not bank-grade security** — anyone with the device can read its own data. Fine for saving progress; do NOT use it for anything sensitive. |

What login **does** give each user: per-person saved progress (completed units),
test history (last 50), saved/bookmarked questions (max 500), profile
(name/mobile/syllabus-track), and a recovery code for password reset.

### 8.2 Pages & flows (file: `js/app.js`)

| Piece | Function / Line | Search for |
|---|---|---|
| Login + Signup page (tabs) | `pAuth` line 955 | `function pAuth` |
| Login submit | `doLogin` line 987 | `async function doLogin` |
| Signup submit | `doReg` line 996 | `async function doReg` |
| Forgot-password page | `pForgot` line 1005 | `function pForgot` |
| Forgot-password submit | `doForgot` line 1014 | `async function doForgot` |
| Profile save | `saveProfile` line 1080 | `async function saveProfile` |
| Delete account | `delAcc` line 1088 | `function delAcc` |
| Logout | `logout` line 420 | `function logout` |
| "Login required" guard | `need` line 428 | `function need` (sends guests to `#/auth?t=login`) |
| Password hashing | `sha` line 173 | `async function sha` (SHA-256 via WebCrypto, fallback hash otherwise) |
| Recovery-code generator | `rid` line 188 | `function rid` (format `XXXX-XXXX`, no confusing 0/O/1/I) |

### 8.3 Signup rules you can change

- **Minimum password length 6** — three `minlength="6"` attributes: signup
  password (line 978), signup confirm (line 979), forgot-password new password
  (line 1011). Change all three together. Search: `minlength="6"`.
- **Terms checkbox required** (line 980–981): removing `required` lets users
  register without accepting Terms — not recommended.
- **Duplicate emails rejected** (line 1001): one account per email; message
  "This email is already registered. Please log in instead."
- New accounts are created already logged-in ("remember me" ON) and sent to
  `#/dashboard` (line 1003).

### 8.4 Login rules

- Email is lowercased + trimmed; password is hashed and compared (line 987–994).
- "Remember me" checkbox (line 971, checked by default): ON = stays logged in
  after closing the browser (stored in `localStorage`); OFF = logged out when
  the tab/browser closes (stored in `sessionStorage`, key `'amin-s'`).
- Old plain-text passwords auto-upgrade to hash on next successful login (line 993).
- Wrong credentials → "Invalid email or password. Please try again." (line 991).

### 8.5 Forgot password (recovery code)

1. User opens `#/forgot`, enters email + recovery code + new password.
2. The recovery code is shown on their **Profile page** while logged in
   (line 1077, `id="pcode"`) — tell users to copy it somewhere safe.
3. Wrong code → "Incorrect recovery code. Find it on your Profile page while
   logged in." (line 1019). Success → "Password updated…" (line 1022).
4. If an account has no code yet, one is generated on first reset (line 1018).

### 8.6 Profile fields

Name (editable), Email (locked — it's the account ID), Mobile (free text),
Syllabus Track (dropdown built from `SYLLABUS` titles, line 1075), New Password
(optional — leave blank to keep), Recovery Code (display only), Save Changes,
Delete Account (asks confirmation, wipes that user's progress/results/bookmarks,
lines 1088–1098).

### 8.7 Storage keys (all in the visitor's browser)

| Key | Location | Content |
|---|---|---|
| `'amin'` | `localStorage` | `{users:[...], session, p2:{...}, r2:{...}, b2:{...}}` — code: `DB`, `js/app.js` lines 127–171 |
| `'amin-s'` | `sessionStorage` | Temporary session when "Remember me" is OFF |
| `'amin-theme'` | `localStorage` | `'light'` / `'dark'` |
| `'amin-nl'` | `localStorage` | Newsletter emails subscribed on that device (array) |
| `'edupath'` | legacy | Old key from a previous version — auto-migrated once into `'amin'`, then deleted (lines 134–146). You will never see it on new devices. |

Per-user slices: `p2` = progress (`{"sub1-1":true,…}`), `r2` = results (max 50),
`b2` = bookmarks (max 500). Guests (not logged in) share the `'guest'` slice —
logging in gives them their own empty slice.

### 8.8 "Owner & Admin" label (not a real role!)

`js/app.js` line 922 — Search: `Owner &amp; Admin` — a hard-coded subtitle under
"Shatrudhan Sah" on the Contact page. It grants no powers; it is only words on
the page. Edit the words if you like; nothing else changes.

### 8.9 What would real roles / backend need? (for the future)

If you ever want Admin/Contributor/Member with real permissions, a developer must:
1. Add a backend (e.g. Supabase/Firebase/your own server) — user records must
   live server-side, because browser storage can be edited by the visitor.
2. Add a `role` field to each user + login that returns it + hide/show admin
   pages based on it + **server-side** permission checks (frontend-only checks
   can be bypassed).
3. Build the admin pages (manage questions/subjects/users) — none exist today.
There are **no placeholders** for this in the code today — §17 lists the only
external-service hook that exists (the contact-form endpoint).

---

## 9. Admin / Content Management

**Short answer: there is no admin panel, no contributor area, and no on-site
content management.** Everything on the site is edited by editing the files in
this manual. This section maps your questions to reality:

| Your question | Reality |
|---|---|
| What can Admin do? | There is no Admin login. **You** (the file editor) are the admin: you can change anything by editing files. |
| What can Contributor / Member do? | These roles don't exist. Logged-in members can: mark units complete, take tests, see their own results/progress, save questions, edit their own profile, delete their own account. They cannot change any website content. |
| Create / Edit / Delete questions? | By editing `questions/*.js` files (§6–§7). No web form exists. |
| Manage subjects / units? | By editing `js/app.js` lines 55–107 (§5). |
| Manage users? | Not possible — accounts live in each visitor's own browser; you cannot list, ban, or reset them. A user who forgets both password AND recovery code must simply create a new account. |
| Restrictions? | Guests can study + take tests + search + read everything; only Dashboard/History/Profile require login (guard: `need()`, line 428). |

If you need a real admin panel one day, see §8.9 (it requires adding a backend).

---

## 10. Navigation & Pages (All Routes)

The site is a **hash-router single-page app**: page changes only the `#...` part
of the URL, so it works on any static host (no server needed). Router code:
`js/app.js` lines 1159–1211 — **Search for:** `function router()`.

### 10.1 Complete route table (23 routes)

| # | Page | URL (after `index.html`) | Function / Line | Purpose | Key editable parts |
|---|---|---|---|---|---|
| 1 | Home | `#/` | `pHome` 444 | Slider, stats, syllabus grid, subjects, notices, signup CTA | Slides: `content.js` 31–52; headings: `app.js` 462–487 |
| 2 | Syllabus list | `#/syllabus` | `pSyllabusList` 498 | 8 track cards | Track data: `content.js` 54–79 |
| 3 | Syllabus detail | `#/syllabus/<id>` (`federal`, `koshi`, …) | `pSyllabus` 505 | Overview, objectives, subject/question-count table, exam pattern, books, print | Exam pattern + books: `app.js` 517–519 |
| 4 | Subjects | `#/subjects` | `pSubjects` 525 | 6 subject cards + progress bars | Subjects: `app.js` 55–107 |
| 5 | Subject detail | `#/subject/<sub1–sub6>` | `pSubject` 533 | Progress + unit list with Study/Test buttons | Unit rows: `app.js` 541–549 |
| 6 | Unit study | `#/unit/<sid>/<1–5>/study` | `pUnit` 552 + `unitStudy` 570 | Notes: outcomes, sections, key points, mark-done, print | Notes: `study/*.js`; buttons: `app.js` 576–580 |
| 7 | Unit test | `#/unit/<sid>/<no>/test` | `pUnit` 552 + `quizStart` 586 | MCQ start screen + written test | Start screen: `app.js` 589–624 |
| 8 | Tests hub | `#/tests` | `pTests` 848 | Every unit's "Open Tests" link | Heading: `app.js` 849 |
| 9 | Notice board | `#/notice` (+ `?cat=Exam`) | `pNotices` 857 | Filter buttons + notice cards | Filters: `app.js` 859; data: `content.js` 81–88 |
| 10 | Notice detail | `#/notice/<1–6>` | `pNotice` 866 | Full notice + share links + print | Texts: `app.js` 868–876 |
| 11 | About | `#/about` | `pAbout` 879 | Paragraphs, "What We Offer", team cards | Paragraphs: `app.js` 881–895; team: `content.js` 98–108 |
| 12 | Contact | `#/contact` | `pContact` 910 | Owner card, address/phone/email, social, message form | Owner texts: `app.js` 917–935; endpoint: `content.js` 20 |
| 13 | FAQ | `#/faq` | `pFaq` 949 | Expandable Q&A | Data: `content.js` 90–96 |
| 14 | Search | `#/search?q=word` | `pSearch` 256 | Live grouped results | Placeholder/hints: `app.js` 260–272 |
| 15 | Saved | `#/saved` | `pSaved` 288 | Bookmarked questions | Empty text: `app.js` 292; card: 298–307 |
| 16 | Login/Signup | `#/auth?t=login` or `?t=signup` (+ aliases `#/login`, `#/register`) | `pAuth` 955 | Auth tabs + forms | Texts: `app.js` 963–985 |
| 17 | Forgot password | `#/forgot` | `pForgot` 1005 | Reset form | Texts: `app.js` 1007–1012 |
| 18 | Dashboard | `#/dashboard` | `pDash` 1027 | Welcome, 3 stat cards, continue learning, notices | Cards: `app.js` 1062–1077 |
| 19 | My Progress | `#/dashboard/progress` | `pDash` 1027 (`view='progress'`) | Per-subject bars + unit ticks | Block: `app.js` 1037–1043 |
| 20 | Test History | `#/dashboard/history` | `pDash` 1027 (`view='history'`) | Results table (max 50) | Table: `app.js` 1044–1050 |
| 21 | Profile | `#/dashboard/profile` | `pDash` 1027 (`view='profile'`) | Settings form + delete account | Form: `app.js` 1052–1079 |
| 22 | Legal pages | `#/privacy`, `#/terms`, `#/copyright`, `#/disclaimer` | `pLegal` 1099 | Legal body + cross-links | Bodies: `content.js` 111–114 |
| 23 | 404 | any unknown `#/...` | `p404` 1112 | "Page Not Found" + home button | Text: `app.js` 1112–1113 |

Notes:
- `#/login` and `#/register` are shortcuts (router lines 1187–1188). The Notice
  slide's "Create Account" button points to `#/register` (`content.js` line 51).
- Every page re-renders the header/footer via `shell()` (line 346) on navigation.
- Navigating away from a quiz stops its clock; leaving home stops the slider
  (router lines 1160–1162).

### 10.2 Shared page furniture (used by many pages)

| Element | Code | Line | What it does |
|---|---|---|---|
| Page header (breadcrumb + H1) | `head()` | 425 | Every inner page's navy banner. Edit `.pghead` in CSS (line 276) to restyle |
| Sidebar layout | `.split` + `.side` | CSS 287–294 | Two-column layout on syllabus/subject/unit/dashboard pages; collapses to 1 column ≤960px |
| Study/Test tabs | in `pUnit` | 560–562 | Tab buttons; style `.tabs` CSS 296–301 |
| Prev/Next unit buttons | in `pUnit` | 563–567 | Auto-links; first/last unit hides one side |
| Back-to-top button | `initTop` + `#toTop` | `app.js` 1145, `index.html` ~92 | Appears after 320px scroll (line 1150), shows scroll % ring |
| Print buttons | `window.print()` | 520, 579, 872 | Print CSS hides nav/buttons: `css/style.css` lines 640–645 |

## 11. Design / UI

All design lives in **`css/style.css`** (775 lines). The file is organized with
numbered section banners (`1. THEME TOKENS`, `7. SECTIONS / CARDS`,
`11. QUIZ ENGINE`, …) — use Find to jump to them.

### 11.1 Color system — the `:root` variables (EDIT HERE)

Light theme: **lines 9–44**. Dark theme twins: **lines 46–76** (`html[data-theme="dark"]`).
**Rule:** to recolor the site, change variable *values* only (e.g. `--primary:#144A78`
→ `--primary:#0A5C36`). Change BOTH the light value and its dark twin.

| Variable | Light (line) | Dark (line) | Used for |
|---|---|---|---|
| `--primary` | 11: `#144A78` | 47: `#66ABDF` | Main navy: headings, buttons, links, header text |
| `--primary-d` / `--primary-l` | 11 | 47 | Darker/lighter navy shades (gradients) |
| `--accent` | 12: `#C9A227` | 48: `#E7C463` | Gold: slide tags, active dots, progress bars, highlights |
| `--accent-d` | 12 | 48 | Dark gold text on light backgrounds |
| `--teal` | 13 | 49 | Secondary green-teal accents |
| `--bg` | 16: `#F4F6FA` | 51: `#0C1422` | Page background |
| `--card` | 16: `#FFFFFF` | 51: `#141D2C` | Card background |
| `--card-2`, `--soft`, `--field`, `--track` | 16–18 | 51–53 | Alt surfaces, inputs, progress tracks |
| `--amber` | 17: `#FBF3DC` | 52: `#2A2413` | Pale-gold note boxes (`.note`, `.explain`) |
| `--text` | 21: `#17233A` | 55: `#EAF0F9` | Main text color |
| `--muted` | 21: `#54657F` | 55: `#A9BAD0` | Secondary/grey text |
| `--line` / `--line-strong` | 21 | 55 | Borders |
| `--ok` / `--okbg` | 25 | 58–59 | Green = correct/PASS/success |
| `--bad` / `--badbg` | 25 | 58–59 | Red = wrong/FAIL/errors |
| `--warn` | 25 | 58 | Orange = timer warning |
| `--head` | 29 | ~60 | Header bar background |
| `--topbar` / `--topbar-t` | 29 | ~60 | Notice ticker bar + its text |
| `--brand`, `--brand-d`, `--brand-l` | 30 | ~61 | Hero/page-header navy gradient |
| `--footer-deep` | 31 | ~62 | Footer bottom color |
| `--radius` | 35: `16px` | (shared) | Corner roundness of ALL cards — one change rounds everything |
| `--shadow` / `--shadow-lg` | 36–37 | ~65 | Card shadows |
| `--font` | 43 | (shared) | Font stack (system fonts — see §11.2) |

### 11.2 Fonts

- No font files are downloaded — the site uses **system fonts** (`--font`, line 43:
  Segoe UI → Roboto → Helvetica → Arial → Noto Sans…). This is why pages load fast.
- To use a Google Font instead (advanced): add a `<link>` in `index.html` `<head>`
  and prepend the family to `--font`. Costs extra download time (§20).
- Heading sizes use `clamp()` (fluid scaling), e.g. slide title line 214:
  `clamp(1.6rem,3.1vw,2.35rem)` = min 1.6rem, scales with screen, max 2.35rem.

### 11.3 Main CSS classes (what styles what)

| Class | Line | Controls |
|---|---|---|
| `.wrap` | 94 | Page container: `max-width:1180px`, side padding `0 22px` |
| `.btn` (+`.accent`, `.ghost`, `.sm`, `.block`) | 98+ | All buttons. `.accent` = gold filled, `.ghost` = outline |
| `.badge` (+`.ok`, `.bad`, `.new`) | 269–273 | Small pills (unit numbers, PASS/FAIL, "New") |
| `.card` | 242 | White content cards (bg, border, radius, padding, hover lift) |
| `.grid` + `.g2`/`.g3`/`.g4` (+`.tight`) | 240–241 | Card grids: 2/3/4 columns on desktop → 1 column on mobile |
| `.ico` | 247 | Round subject-emoji tile (bg color comes from each subject's `color:`) |
| `.bar` | 266 | Progress bars (gold fill) |
| `.pghead` | 276 | Navy inner-page header banner |
| `.split` / `.side` | 287–294 | Sidebar two-column layout |
| `.tabs` | 296 | Study/Test tab buttons |
| `.prose` | 302–305 | Article typography (study notes, legal) |
| `.note` | 306 | Gold info box (Key Points, Exam Pattern) |
| `.form`, `input/select/textarea`, `.chk`, `.msg` | 309–327 | Forms, fields, checkboxes, green/red message boxes |
| `.filters` | 341 | Notice filter pills |
| `.acc` | ~340 | FAQ accordion (`<details>` elements) |
| `.tcard`, `.tpic`, `.trole`, `.tmeta`, `.tq` | ~330–358 | Team cards (photo circle w/ initial fallback, role, quote) |
| `.pcard`, `.ppic`, `.pname`, `.prole` | ~560–590 | Contact-page owner card |
| `.stat` (home) | 259–265 | Stats-bar numbers |
| `.rgrid .stat` | 511–513 | Result-page stat boxes |
| `.mode` | ~422 | Quiz Practice/Exam mode selector cards |
| `.opt` (+`.sel`, `.right`, `.wrong`) | 477–489 | Quiz options: selected/correct = green, wrong = red |
| `.explain`, `.verdict` | 490–493 | Gold explanation box under revealed answers |
| `.qbtn` (+`.ansd`, `.flg`, `.cur`, `.ok`, `.bad`, `.skip`) | 452–464 | Question-jump number buttons + legend colors |
| `.clock` (+`.warn`, `.danger`) | 439–440 | Quiz timer (turns orange ≤5 min, red ≤1 min) |
| `.ring` | 503 | Score % circle on result page |
| `.ritem` (+`.ok`, `.bad`, `.na`) | 515–520 | Answer-review rows (green/red/grey left border) |
| `.wqa` | ~540 | Written model-answer box (hidden until `.show`) |
| `.svq`, `.svo`, `.sve` | ~596–610 | Saved-question cards |
| `.sres`, `.sgrp`, `.stag`, `.shint`, `mark` | ~590–610 | Search results + yellow `<mark>` highlights |
| `.topbar`, `.ticker` | ~118–127 | Notice ticker strip (animation `tick 28s linear infinite`, line 125) |
| `.drop` | 160 | Nav dropdown menus |
| `.burger` | 175 | Hamburger button (hidden on desktop, shown ≤760px) |
| `.avatar`, `.udrop` | 177–188 | Logged-in profile circle + dropdown |
| `.fsoc` | 366 | Social icon buttons (footer + contact) |
| `.fbot`, `.fmade` | 378–383 | Footer bottom bar + "CREATED BY" line |
| `.totop` | ~615 | Back-to-top floating button |
| `.cta` | ~660 | Home signup banner (navy gradient) |
| `.stats` | 253 | Home stats band (dark gradient, gold numbers) |
| `.npflag` | ~655 | Nepal-flag SVG sizing on syllabus cards |
| `.vh` | 95 | Visually-hidden (SEO h1 on home — do not remove) |

### 11.4 Header / footer styling

- Header bar: lines 136–142 (sticky, 70px tall, shadow). Logo block: 143–150.
- Footer: lines 359–383 (navy gradient, 4 columns → 1 on mobile).

### 11.5 Dark / light mode

- Toggle button in header (`themeBtn`, `js/app.js` line 1136; sun/moon SVG swap is
  CSS-driven). Choice saved as `'amin-theme'`; first visit follows the phone's
  system theme (`index.html` boot script lines 62–66 + `app.js` 1249–1254).
- To recolor dark mode, edit the `html[data-theme="dark"]` variables (lines 46–76),
  NOT individual rules. Extra dark-only tweaks: lines 570–573 (slider dimming).

---

## 12. Images & Assets

### 12.1 Where everything lives

| Asset | Location | Used on |
|---|---|---|
| Owner photo | `images/profile.jpg` (~20 KB) | Contact "Reach Us" box (`SITE.profileImage`, `content.js` line 16) + first team card |
| Team photo 2 | `images/team-sunil-sah.jpg` (~24 KB) | About → Our Team (`TEAM[1].img`, `content.js` line ~103) |
| Team photo 3 | `images/team-rishikesh-sah.jpg` (~20 KB) | About → Our Team (`TEAM[2].img`, `content.js` line ~107) |
| Logo | — | **No image file** — the logo is inline SVG drawn in code (`js/app.js` lines 353, 386: circle + crosshair + gold dot). To replace it with a picture, swap that `<svg…>…</svg>` for `<img src="images/logo.png" …>` in BOTH places (header + footer). |
| Favicon (tab icon) | — | Inline SVG data-URI in `index.html` line 60 (navy rounded square, "AL"). Edit the `fill='%230E3A5F'` color or the `AL` letters directly in that line. |
| Icons | — | All icons are inline SVG paths in code (social icons in `SOCIAL`, UI icons in `app.js`). No icon files, no icon library. |
| App install icon | `images/profile.jpg` (reused) | `manifest.json` lines 8–17 (both 192px and 512px entries point here — ideally replace with a real square logo PNG; see §12.4) |

### 12.2 How to replace a photo (safe method)

1. Prepare your new photo as `.jpg`.
2. Name it EXACTLY like the old file (e.g. `profile.jpg`) and overwrite the file
   in `images/`. You don't need to edit any code.
3. If you want a different file name instead, update its reference: owner photo →
   `content.js` line 16; team photos → `content.js` lines ~103/107; manifest →
   `manifest.json` lines 9/14.

### 12.3 Recommended sizes

| Photo | Shape shown | Recommended upload |
|---|---|---|
| `profile.jpg` (contact + team) | Circle | Square JPG, 400×400 px or bigger, < 100 KB |
| Team photos | Circle | Square JPG, 400×400 px or bigger, < 100 KB |
| Favicon | redrawn by browser | leave as-is (SVG scales perfectly) |
| Social-share image (§12.4) | 1200×630 banner | JPG/PNG 1200×630, < 300 KB |

Photos use `loading="lazy"` (About/Contact) so they don't slow the first paint,
and every photo has an `onerror` fallback showing the person's initials if the
file is missing (`app.js` lines 900, 919).

### 12.4 ⚠️ Missing image you should create: `images/share.jpg`

`index.html` lines 18 + 28 + 31 tell Facebook/WhatsApp/X to show
`https://sahshatrudhan.com.np/images/share.jpg` as the link preview — but **that
file does not exist yet**, so shared links show no preview image. Fix: create a
1200×630 image, save it as `images/share.jpg`, upload it. No code change needed.

### 12.5 Dead fallback path (harmless, for your info)

`js/app.js` line 919 has a fallback `'images/team1.jpg'` if `SITE.profileImage`
is empty — that file doesn't exist either, but since `profileImage` is set
(line 16), the fallback never triggers. Leave it alone.

---

## 13. Responsive / Mobile Design

### 13.1 Breakpoints (all in `css/style.css`)

| Breakpoint | Line | What changes |
|---|---|---|
| `≤1080px` | 631 | Minor tightening (header gaps etc.) |
| `≤960px` | 386–391 | Slider 330px; 4-col→2-col and 3-col→2-col grids; sidebars stack below content (`.split` → 1 column) |
| `≤920px` | 636 | Profile button becomes icon-only |
| `≤760px` | 392–430 | **Main mobile layout** (see §13.2) |
| `≤760px` (part 2) | 522–~560 | Quiz + written-question mobile tweaks (search `.wq`, `.wqh` inside) |
| Print | 640–645 | Hides topbar/header/footer/buttons/slider for clean printouts |
| `prefers-reduced-motion` | 646–652 | Slow ticker (80s), no smooth scroll — accessibility, don't remove |

Android phones (≈360–412px wide) and tablets in portrait (< 760px) use the mobile
rules; tablets in landscape / desktops use desktop rules.

### 13.2 What the ≤760px block changes (lines 392–430)

Hamburger menu ON + desktop nav hidden; dropdowns become indented accordions;
all grids → 1 column (`.g2,.g3,.g4`, line 415; syllabus `.grid.tight` keeps 2
columns, line 393); slider 370px + arrows hidden + swipe enabled; topbar wraps;
page headers shrink; tables scroll sideways (`table{display:block;overflow-x:auto}`,
line 429 — this is what keeps the History table usable on phones).

### 13.3 Exact knobs for common mobile tweaks

| Want to change | File / Line | Search for | Current → Example |
|---|---|---|---|
| Page side margins (mobile) | `css/style.css` line 94 | `.wrap{max-width:1180px` | `padding:0 22px` → `0 16px` (tighter) |
| Page max width (desktop) | same | same | `max-width:1180px` → `max-width:960px` |
| Header height | line 142 | `header .wrap` | `height:70px` → `height:60px` |
| Logo text size (mobile) | line 414 | `.logo .tx b` | `font-size:.98rem` → `1.05rem` |
| Slider height (mobile) | line 416 | `.slider{height:370px}` | `370px` → `420px` (taller) |
| Slider title size (mobile) | line 417 | `.sin h2{font-size:1.55rem}` | `1.55rem` → `1.3rem` |
| Section vertical spacing (mobile) | line 395 | `section{padding:40px 0}` | `40px` → `28px` |
| Card padding (all screens) | line 242 | `.card{background:var(--card)` | `padding:24px` → `padding:18px` |
| Grid gaps | line 240 | `.grid{display:grid` | `gap:20px` → `gap:14px` |
| Back-to-top size/position (mobile) | line 637 | `.totop{right:14px` | edit `right/bottom/width/height` |
| Breakpoint itself | lines 392, 522 | `@media(max-width:760px)` | `760px` → `820px` to include bigger tablets |

### 13.4 Rules that prevent unwanted left/right blank space or sideways scrolling

The design is protected by: `*{box-sizing:border-box}` (line 82),
`.wrap{max-width:1180px;margin:0 auto}` (line 94), `.split>*{min-width:0}`
(line 288 — lets grids shrink), `table{...overflow-x:auto}` on mobile (line 429),
and `.slider{overflow:hidden}` (line 195). If a phone shows sideways scrolling or
a white strip on one side, the cause is almost always: (a) an unbroken long word
in text you added (add spaces), (b) an image wider than the screen (add
`max-width:100%`), or (c) a negative-margin rule you added. See §24.9.

---

## 14. Header, Menu & Footer

All built by `shell()` — **File:** `js/app.js` → **Lines:** 346–402.
**Search for:** `function shell()`.

### 14.1 Top ticker bar (lines 350–354)

Shows `NOTICE` + the first 3 notice titles scrolling (`NOTICES.slice(0,3)`,
line 350) + social icons. Change count: `slice(0,3)` → `slice(0,5)`.
Scroll speed: `css/style.css` line 125 (`animation:tick 28s linear infinite` —
bigger number = slower).

### 14.2 Logo + site name (line 353)

`<a class="logo" href="#/">` + inline SVG mark + `${SITE.name}` / `${SITE.tagline}`.
Change the name in `content.js` (line 9–10), not here. Logo styling:
`css/style.css` lines 143–150.

### 14.3 Navigation links (lines 355–367)

| Menu | Code | How to edit |
|---|---|---|
| Home | line 357 | Label text `>Home</a>` |
| Syllabus ▾ | line 358 | **Auto-built** from `SYLLABUS` (`content.js` lines 54–79) — add/remove tracks there and the menu updates |
| Subjects ▾ | line 359 | **Auto-built** from `SUBJECTS` (`app.js` lines 55–107) |
| Tests ▾ | lines 360–362 | Two fixed links: `#/tests`, `#/dashboard/history` |
| Notice | line 363 | Label `>Notice</a>` |
| About ▾ | lines 364–366 | Three fixed links: `#/about`, `#/contact`, `#/faq` |

To add a top-level link (e.g. "Blog"): copy line 357's
`<div class="item"><a class="lnk" href="#/">Home</a></div>` pattern, change label
+ `href`, paste before line 367 (`</nav>`). To add a dropdown item, add an `<a>`
line inside the matching `<div class="drop">`.

### 14.4 Header icons + login/profile area (lines 368–380)

Search icon → `#/search`, bookmark icon → `#/saved`, theme toggle button,
then: logged OUT = gold "Profile" button → `#/auth` (line 378); logged IN =
avatar circle with first letter + dropdown (Dashboard, My Progress, Test
History, Saved Questions, Profile, Logout — lines 373–376). Edit dropdown labels
there; avatar initial is automatic.

### 14.5 Mobile menu behavior

Hamburger (`.burger`) toggles `nav.main.open` (`toggleNav`, line 414);
tapping outside closes it; `Escape` closes it (lines 1241–1243). Mobile nav
styling: `css/style.css` lines 397–411.

### 14.6 Footer columns (lines 385–401)

| Column | Lines | Edit |
|---|---|---|
| Brand: logo, name, tagline, description, social icons | 386–390 | Description text line 389 (Search: `provides notes, MCQs`); social URLs in `content.js` lines 23–29 |
| Quick Links | 391–393 | 8 fixed links — edit/add `<a href="#/...">` lines |
| Subjects | 394 | **Auto-built** from `SUBJECTS` — no editing needed |
| Contact: address, phone, email, newsletter | 395–397 | Address/phone/email use `SITE.*`; ⚠️ `tel:+9779814041813` is HARDCODED here (line 395) AND in `pContact` (line 926) — update both if the number changes |
| Bottom bar: copyright + legal links | 399–400 | Copyright text: `content.js` line 14 |
| "CREATED BY…" | 401 | Search `CREATED BY` — change the name between `<b>` tags |

### 14.7 Social media links

- **File:** `js/content.js` → **Lines:** 23–29 — **Search for:** `const SOCIAL`
- Each row: `{ name:"Facebook", url:"#", icon:"M13 22v..." }`.
- ✅ Change `url:"#"` → your real link, e.g. `url:"https://facebook.com/yourpage"`.
- 🚫 NEVER edit the `icon:"M..."` strings (they draw the logos).
- These exact same icons appear in 3 places automatically: topbar, footer, contact.
- To ADD a network: copy a row, change `name`/`url`, and paste a matching 24×24
  SVG path as `icon` (ask a designer/AI for the path data).

---

## 15. Search System

### 15.1 How it works

- Index builder: `searchIndex()` — `js/app.js` lines 214–230. On first search it
  scans everything once and caches the list (`SEARCH_IX`).
- Ranking: `searchRun()` — lines 232–246. Every typed word must appear somewhere
  (AND search); title matches score +3, title-start matches +2 more, Subject/Unit
  hits get +2; sorted by score, top **40** shown (line 245: `.slice(0,40)`).
- Highlighting: `hl()` — line 247 (wraps matches in yellow `<mark>`).
- Page + live results: `pSearch` (256), `searchHTML` (270), `searchLive` (279).
  Typing updates results instantly AND the URL (`#/search?q=...`, line 284).

### 15.2 What gets searched (7 groups)

| Group | Source | Links to |
|---|---|---|
| Subject | `SUBJECTS` names + descriptions (line 218) | `#/subject/<id>` |
| Unit | titles + outcomes + keypoints + note sections (219–222) | unit study page |
| MCQ | question + options + explanation (223) | unit test page |
| Written | question + marks + model answer (224) | unit test page |
| Syllabus | track labels + descriptions (227) | `#/syllabus/<id>` |
| Notice | titles (228) | `#/notice/<id>` |
| FAQ | questions + answers (229) | `#/faq` |

Anything you add to those data files becomes searchable automatically — no extra step.

### 15.3 Behavior settings you can change

| Setting | File / Line | Search for | Change |
|---|---|---|---|
| Minimum letters to search | `app.js` lines 233, 248, 271 | `length<2` (3 places — change all) | `<2` → `<3` (needs 3 letters) |
| Max results shown | line 245 | `slice(0,40)` | `40` → `20` |
| Placeholder text | line 261 | `Type at least 2 letters` | edit words (update the number if you changed minimum!) |
| Hint texts | lines 271–273 | `Start typing to search` / `No results for` | edit words |

### 15.4 Add/remove searchable content

- Add a type: push more `{t, title, sub, url, body}` objects in `searchIndex()`
  (lines 214–230) — needs basic JS (see §23.3).
- Remove a type: delete its `ix.push(...)` line (e.g. line 229 removes FAQs from
  search). Safe: deleting a whole push line can't break other groups.

---

## 16. Notice System

Data: `js/content.js` → `NOTICES`, **lines 81–88** (6 notices, one per line:
82, 83, 84, 85, 86, 87). Display code: `pNotices` (line 857), `pNotice` (866),
`noticeCard` (489). Home shows the first 4 (line 480), ticker the first 3
(line 350), dashboard the first 3 (line 1074).

### 16.1 Format

```js
{ id:1, cat:"Exam", date:"2026-09-05", title:"First Terminal Examination Routine Published", body:"The routine for..." },
```

| Field | Rules |
|---|---|
| `id` | Unique number; used in URL `#/notice/1`. Never reuse an id. |
| `cat` | MUST be exactly one of: `Exam`, `Result`, `Admission`, `Event` (these match the filter buttons, line 859; any other word = invisible under filters) |
| `date` | `YYYY-MM-DD`. Shown formatted ("05 Sept 2026") via `fdate()`. Notices < 30 days old get a gold "New" badge (line 490: `/86400000 < 30` — change `30` to change the window) |
| `title` | Card heading + ticker text + page title |
| `body` | Plain text; card shows first 120 chars (line 494: `slice(0,120)` — change the number for longer previews); detail page shows all + contact line + share links |

### 16.2 Add / edit / remove / reorder

- **Add:** copy any notice line, paste at the TOP of the list (right after line 81)
  so it's newest-first, give it a new unused `id`, edit fields. End the line with
  `},` (or `}` if it's the last line before `];`).
- **Edit:** change `title`/`body`/`date` in place. To change category, swap `cat`.
- **Remove:** delete the line. Old `#/notice/<id>` links to it will show the 404 page.
- **Reorder:** move lines up/down — display order = file order everywhere.
- **Links inside a notice:** `body` is plain text (HTML is escaped, so `<a>` would
  show as text). To add a real link you must edit `pNotice` (`app.js` line 866+) —
  needs code knowledge (§23.3). Workaround: write the full URL as text; users can
  copy it.

---

## 17. External Services & Configuration

### 17.1 Contact-form delivery — Formspree (the ONLY external-service hook)

| Item | Detail |
|---|---|
| Why | Static sites can't send email by themselves. Formspree receives the form and forwards it to your inbox. No backend to maintain. |
| Where configured | `js/content.js` line 20: `formEndpoint: ""` |
| Code that uses it | `sendMsg()`, `js/app.js` lines 309–331 |
| Safe values | `""` (empty = email-app fallback) or `"https://formspree.io/f/YOUR_FORM_ID"` (get the ID free at formspree.io → New Form → copy endpoint) |
| If removed/empty | Form opens the visitor's email app addressed to `SITE.email` (lines 315–320) — nothing breaks |
| Secrets? | The endpoint contains a form ID (not a password). Still, treat it as yours; no other keys exist. |
| ⚠️ Must NOT change | The `fetch(ep,{method:'POST',...})` logic (lines 323–330) unless you switch providers |

### 17.2 Share links (not a service — plain share URLs)

Notice pages have Facebook / X / WhatsApp share links (`app.js` lines 873–875)
that open the network's share dialog with the page URL. No accounts, keys, or
setup. Removing them only removes the share row.

### 17.3 What is NOT used (so you don't go looking)

No Supabase, Firebase, Google Analytics, ads, payment, maps, CDN, fonts API, or
server API of any kind. The only domains the code ever contacts are:
your own domain (page + files), `formspree.io` (only if you set it), and the
three share-dialog URLs (only when a visitor taps Share).

---

## 18. Dependencies & Libraries

**There are none.** This website is built with pure HTML + CSS + JavaScript:

| Category | What's used | Safe to remove? |
|---|---|---|
| Frameworks (React/Vue/…) | None — vanilla JS | n/a |
| JS libraries / packages / `node_modules` | None | n/a |
| CSS frameworks (Bootstrap/…) | None — hand-written `style.css` | n/a |
| Fonts | System font stack only (`css/style.css` line 43) — zero downloads | n/a (nothing to remove) |
| Icons | Inline SVG paths in code (no library) | n/a |
| Build tools / package.json | None — **no build step.** Edit → save → upload. | n/a |
| APIs | None (except optional Formspree, §17.1) | Yes — leave `formEndpoint` empty |

Consequence: nothing can break from an expired CDN, a version update, or an
`npm install` failure. The price: every feature is hand-coded in `app.js`, so
follow §23 when touching it.

---

## 19. SEO

All SEO lives in **`index.html` lines 6–89**. The site is a hash-router SPA, so
Google mainly sees the static tags below + the `#seo` fallback block.

| Item | File / Line | Search for | Current value / notes |
|---|---|---|---|
| Page title (tab + Google title) | line 6 | `<title>` | `Amin loksewa preparation — Learn. Practice. Pass.` |
| Meta description | line 7 | `meta name="description"` | Free Amin… 135 MCQs and 81 written questions… — ⚠️ update counts if you add/remove content |
| Author | line 8 | `meta name="author"` | `Shatrudhan Sah` |
| Robots | line 9 | `meta name="robots"` | `index,follow` (allow indexing). Use `noindex,nofollow` only to HIDE the site from Google |
| Canonical URL | line 10 | `rel="canonical"` | `https://sahshatrudhan.com.np/` — change if your domain changes |
| Open Graph (FB/WA/Viber/LinkedIn) | lines 12–22 | `og:title` | Title/description/image for link previews |
| OG image | line 18 | `og:image` | Points to `images/share.jpg` — ⚠️ file doesn't exist yet, create it (§12.4). Size tags 1200×630 on lines 19–20 |
| Twitter/X card | lines 24–28 | `twitter:card` | `summary_large_image` + title/desc/image |
| PWA manifest link | line 30 | `rel="manifest"` | Absolute URL — change domain if needed |
| Apple touch icon | line 31 | `apple-touch-icon` | Currently reuses `share.jpg` (missing — same fix as OG image) |
| Structured data (Organization) | ~lines 33–51 | `EducationalOrganization` | Name, logo, email, phone `+977-9814041813`, founder, Janakpur address — update phone/email here too if they change |
| Structured data (WebSite) | ~lines 52–59 | `"@type":"WebSite"` | Name + languages `en, ne` |
| Favicon | line 60 | `rel="icon"` | Inline SVG "AL" monogram — edit letters/color in place |
| Theme color (mobile browser bar) | line 61 | `theme-color` | `#0B1F38` (auto-switches to `#080E19` in dark mode, `app.js` line 1119–1123) |
| SEO fallback content | lines 73–89 | `id="seo"` | Static h1 + links for crawlers/no-JS — replaced by the app on load. Keep the h1 accurate; do NOT delete the block |
| Keywords meta tag | — | — | **Not present** (correct — Google ignores it; don't add one) |
| robots.txt / sitemap.xml | — | — | **Not present.** Optional upgrade: add a `sitemap.xml` listing your main `#/` URLs and a `robots.txt` pointing to it (§19.1) |

### 19.1 Optional: add a sitemap (recommended, easy)

1. Create `sitemap.xml` in the site root listing full URLs
   (`https://sahshatrudhan.com.np/#/syllabus` etc.).
2. Create `robots.txt` containing:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://sahshatrudhan.com.np/sitemap.xml
   ```
3. Upload both + submit the sitemap in Google Search Console.
4. No code changes needed — crawlers fetch these files automatically.

---

## 20. Performance

### 20.1 What keeps the site fast today

- **Zero dependencies** (§18) — no CDN round-trips, no framework parse cost.
- **System fonts** — no font downloads (line 43 of CSS).
- **Lazy photos** — `loading="lazy"` on About/Contact images.
- **Small photos** — 20–24 KB each.
- **Tiny boot** — `index.html` is ~7 KB; scripts total ~190 KB uncompressed.
- **Instant search** — in-memory index, no network.
- **No render-blocking extras** — one stylesheet, scripts at end of `<body>`.

### 20.2 What could slow it down (and safe fixes)

| Risk | Safe change |
|---|---|
| Big replacement photos | Compress to < 100 KB JPG before uploading; keep `loading="lazy"` |
| Adding Google Fonts | Only if needed; use `display=swap` + max 2 weights |
| Adding analytics/ads scripts | Each adds load time; use `async`/`defer` attributes on their `<script>` tags |
| Huge explanations/notes | Fine — text is cheap. Thousands of questions still OK |
| 41 separate JS files | OK on modern hosting (HTTP/2). If your host is very slow, serve the single-file `index.html` backup instead (1 request) |
| localStorage full (rare) | All saves are wrapped in `try/catch` — the site keeps working, just without saving |
| Animations on old phones | `prefers-reduced-motion` rules (CSS 646–652) already calm things down; don't remove |

### 20.3 Caching (important after every update!)

Browsers cache CSS/JS aggressively. After uploading changes, **visitors may see
the old version until they hard-refresh**. Fixes, easiest first:
1. Tell users: hard refresh (Android Chrome: ⋮ → ⟳ while on the page twice, or
   clear site data). 
...[truncated 15039 chars]
## 21. Common Changes — Quick Reference

| I want to change… | File | Section / Line | What to edit |
|---|---|---|---|
| Website name | `js/content.js` | `SITE`, line 9 | `name: "..."` |
| Tagline | `js/content.js` | `SITE`, line 10 | `tagline: "..."` |
| Phone number | `js/content.js` + `js/app.js` | lines 12 / 395 / 926 | `phone:` + TWO `tel:+977...` links (§14.6) |
| Email | `js/content.js` | line 11 (+ `index.html` line 44) | `email: "..."` |
| Address | `js/content.js` | line 13 | `address: "..."` |
| Copyright line | `js/content.js` | line 14 | `copyright: "..."` |
| "CREATED BY…" | `js/app.js` | line 401 | text between `<b>` tags |
| Slide 1–5 title/text/buttons | `js/content.js` | `SLIDES`, lines 32–51 | `tag/title/sub/desc/btn/href/btn2/href2` |
| Slide background colors | `js/content.js` | same block | `g1:`, `g2:` hex colors |
| Slide order / add / remove slide | `js/content.js` | lines 31–52 | move/copy/delete 4-line blocks (§3.6–3.8) |
| Auto-slide seconds | `js/app.js` | line 1214 | `5000` → milliseconds |
| Slide animation speed | `css/style.css` | line 196 | `.65s` |
| Slider height (desktop/mobile) | `css/style.css` | lines 195 / 416 | `340px` / `370px` |
| Subject name | `js/app.js` | lines 56–99 | `name:"..."` |
| Subject emoji / color | `js/app.js` | same lines | `icon:` / `color:` |
| Subject order | `js/app.js` | lines 55–107 | move 9-line blocks |
| Subject description | `js/app.js` | under each subject | `desc:"..."` |
| Unit name | `js/app.js` | inside `mkUnits([...])` | title text + **mandatory 3-file rename** (§5.7) |
| Unit study notes | `study/subN-unitM.js` | lines 14–37 | text between quotes |
| MCQ question/options/answer | `questions/mcq-subN.js` | unit's `.mcq` block | `q:`, `o:`, `a:` (0-based!), `e:` |
| Add an MCQ | `questions/mcq-subN.js` | end of unit's block | paste `{q,o,a,e}` template (§6.3) |
| Written question/marks/answer | `questions/subjective-subN.js` | unit's `.sub` block | `q:`, `marks:`, `hint:` |
| PASS % | `js/app.js` | lines 802 + 1048 | `pct>=40` (both places!) |
| Quiz default minutes | `js/app.js` | line 605 | `Math.max(5,…)` |
| Quiz minute limits | `js/app.js` | lines 605 + 645 | `min/max` + `Math.min(180…)` |
| Shuffle defaults | `js/app.js` | lines 604–605 | add/remove `checked` |
| Notice add/edit/remove | `js/content.js` | lines 82–87 | copy/edit/delete one line |
| Notice category | `js/content.js` | same | `cat:` = Exam/Result/Admission/Event |
| Ticker notice count | `js/app.js` | line 350 | `slice(0,3)` |
| Ticker speed | `css/style.css` | line 125 | `28s` |
| "New" badge days | `js/app.js` | line 490 | `< 30` |
| FAQ add/edit | `js/content.js` | lines 90–96 | `{q:…, a:…}` rows |
| Team member | `js/content.js` | lines 98–108 | `n/r/q/loc/img/quote/by` |
| Owner photo | `images/profile.jpg` | (file replace) | overwrite, keep name |
| Team photo | `images/team-*.jpg` | (file replace) | overwrite, keep name |
| Social links | `js/content.js` | lines 23–29 | `url:` only (never `icon:`) |
| Footer description | `js/app.js` | line 389 | paragraph text |
| Footer Quick Links | `js/app.js` | lines 391–393 | `<a href="#/…">` lines |
| Header nav labels | `js/app.js` | lines 357–366 | label text |
| Contact form email delivery | `js/content.js` | line 20 | `formEndpoint:` |
| Contact owner name/role text | `js/app.js` | lines 921–922 | `Shatrudhan Sah`, `Owner &amp; Admin` |
| About paragraphs | `js/app.js` | lines 881–895 | paragraph text |
| Legal page text | `js/content.js` | lines 111–114 | HTML body (keep tags balanced) |
| Main color (navy) | `css/style.css` | lines 11 + 47 | `--primary:` (light + dark!) |
| Gold accent | `css/style.css` | lines 12 + 48 | `--accent:` (light + dark!) |
| Page background | `css/style.css` | lines 16 + 51 | `--bg:` (light + dark!) |
| Card corner roundness | `css/style.css` | line 35 | `--radius:16px` |
| Font family | `css/style.css` | line 43 | `--font:` stack |
| Page width / side margins | `css/style.css` | line 94 | `max-width` / `padding` |
| Mobile breakpoint | `css/style.css` | lines 392, 522 | `760px` |
| Search min. letters | `js/app.js` | lines 233, 248, 271 | `length<2` (all 3!) |
| Search max results | `js/app.js` | line 245 | `slice(0,40)` |
| Password min. length | `js/app.js` | lines 978, 979, 1011 | `minlength="6"` (all 3!) |
| Browser tab title | `index.html` | line 6 | `<title>` |
| Google description | `index.html` | line 7 | meta description |
| Share preview image | `images/share.jpg` | **create it** (§12.4) | 1200×630 image |
| App install name | `manifest.json` | lines 2–3 | `name` / `short_name` |
| Syllabus year (2082) | `js/content.js` | lines 54–79 | each track's `year:` |
| Syllabus track name/desc | `js/content.js` | lines 54–79 | `label:` / `desc:` |
| Exam pattern text | `js/app.js` | line 517 | `Exam Pattern:` row |
| Login/signup/forgot texts | `js/app.js` | lines 955–1024 | headings, labels, messages |
| Dashboard texts | `js/app.js` | lines 1062–1077 | welcome + cards |
| Empty-state texts | `js/app.js` | 272, 292, 1049, 864 | search/saved/history/notice |
| 404 text | `js/app.js` | line 1112 | `Page Not Found` block |

---

## 22. Exact Line References (Master Table)

Every number below was read from the current files. If your editor shows
different numbers (because you added lines above), use the **Search for** phrase
instead — those never change.

### `index.html` (135 lines)

| Line | Search for | What |
|---|---|---|
| 6 | `<title>` | Browser tab title |
| 7 | `meta name="description"` | Google description |
| 8–10 | `meta name="author"` / `robots` / `canonical` | Author, index rules, canonical URL |
| 12–22 | `og:title` | Open Graph preview tags |
| 24–28 | `twitter:card` | X/Twitter preview tags |
| 30–31 | `rel="manifest"` | PWA manifest + Apple icon links |
| ~33–59 | `application/ld+json` | Structured data (2 blocks) |
| 60 | `rel="icon"` | Favicon (inline SVG "AL") |
| 61 | `theme-color` | Mobile browser bar color |
| 62–66 | `amin-theme` | Theme boot script — 🚫 do not touch |
| 67 | `stylesheet` | CSS link — 🚫 do not touch |
| 71–72, 73, 90 | `id="topbar"` / `id="header"` / `id="app"` / `id="footer"` | App mount points — 🚫 do not rename |
| 74–89 | `id="seo"` | SEO fallback block |
| ~92 | `id="toTop"` | Back-to-top button — 🚫 do not remove |
| 92 | `js/content.js` | Must load FIRST |
| 93–104 | `questions/mcq-sub1.js` | 12 question files — order among themselves doesn't matter |
| 105–131 | `study/sub1-unit1.js` | 27 study files |
| 132 | `js/app.js` | Must load LAST — 🚫 never move above the others |

### `js/content.js` (116 lines)

| Line | Search for | What |
|---|---|---|
| 8–21 | `const SITE` | Site identity + contact config |
| 9 / 10 / 11 / 12 / 13 / 14 | `name:` / `tagline:` / `email:` / `phone:` / `address:` / `copyright:` | Identity fields |
| 16 | `profileImage` | Owner photo path |
| 20 | `formEndpoint` | Formspree endpoint (empty = email-app fallback) |
| 23–29 | `const SOCIAL` | 5 social links (`url:` editable, `icon:` untouchable) |
| 31–52 | `const SLIDES` | 5 slides: 32–35, 36–39, 40–43, 44–47, 48–51 |
| 54–79 | `const SYLLABUS` | 8 tracks: federal 55–57, koshi 58–60, madhesh 61–63, bagmati 64–66, gandaki 67–69, lumbini 70–72, karnali 73–75, sudurpashchim 76–78 |
| 81–88 | `const NOTICES` | 6 notices: lines 82–87 |
| 90–96 | `const FAQS` | 5 FAQs |
| 98–108 | `const TEAM` | 3 members |
| 110–115 | `const LEGAL` | privacy 111, terms 112, copyright 113, disclaimer 114 |

### `js/app.js` — data (lines 23–107) + page functions

| Line | Search for | What |
|---|---|---|
| 23–53 | `function mkUnits` | Unit builder + default study texts + STUDY/EXTRA getters |
| 55–107 | `const SUBJECTS` | sub1: 56–64, sub2: 65–73, sub3: 74–82, sub4: 83–89, sub5: 90–98, sub6: 99–107 |
| 127–171 | `const DB` | Browser storage layer (`k:'amin'` line 128) |
| 346–402 | `function shell` | Header + footer builder (ticker 350, nav 357–366, footer 385–401) |
| 444–487 | `function pHome` | Home page |
| 552–568 | `function pUnit` | Unit shell (tabs + prev/next) |
| 570–580 | `function unitStudy` | Study-notes layout |
| 586–629 | `function quizStart` | Quiz start screen + written test |
| 631–846 | `qzBegin…qzResult` | Quiz engine (begin 631, timer 671, card 731, pick 766, submit 776, finish 782, result 796, keys 839) |
| 802 | `pass=pct>=40` | PASS threshold (+ twin line 1048) |
| 857–877 | `pNotices` / `pNotice` | Notice list + detail |
| 879–908 | `function pAbout` | About page (team loop ~900) |
| 910–947 | `function pContact` | Contact page (owner card 917–922, form 937–945) |
| 955–1003 | `pAuth` / `doLogin` 987 / `doReg` 996 | Auth |
| 1005–1024 | `pForgot` / `doForgot` 1014 | Password reset |
| 1027–1079 | `function pDash` | Dashboard + progress/history/profile views |
| 1099–1111 | `function pLegal` | Legal page renderer |
| 1159–1211 | `function router` | All 23 routes (cases 1172–1203) |
| 1206–1238 | `goTo` 1206 / `restart` 1214 / `initSlider` 1215 | Slider machine (5000 ms line 1214) |

### `css/style.css` (775 lines) — most-used lines

| Line | Search for | What |
|---|---|---|
| 9–44 | `:root{` | Light-theme variables (colors, radius, font) |
| 43 | `--font:` | Font stack |
| 46–76 | `data-theme="dark"` | Dark-theme variables |
| 94 | `.wrap{max-width:1180px` | Page width + side padding |
| 98 | `.btn{display:inline-flex` | Buttons |
| 125 | `animation:tick 28s` | Ticker speed |
| 136–142 | `header{background` | Header bar (70px) |
| 194–231 | `.hero{width:100%` | Slider styles (height 195, animation 196, arrows 220, dots 227) |
| 240–242 | `.grid{display:grid` | Grids + `.card` |
| 269–273 | `.badge{display` | Badges (ok/bad 272–273) |
| 276 | `.pghead{position` | Inner-page navy banner |
| 382 | `.fmade{text-align` | "CREATED BY" styling |
| 386–391 | `@media(max-width:960px)` | Tablet rules |
| 392–430 | `@media(max-width:760px)` | Mobile rules (slider 416–417, nav 397–411) |
| 435–520 | `.qtop{position` | Quiz styles (clock 439, options 477–489, ring 503, review 515) |
| 631–637 | `@media(max-width:1080px)` | Small-desktop tweaks |
| 640–645 | `@media print` | Print rules |
| 646–652 | `prefers-reduced-motion` | Accessibility calms |

---

## 23. Safe Editing Rules

### 23.1 ✅ What you can safely edit (no coding needed)

- Any **text between quotes** in `js/content.js`, `study/*.js`, `questions/*.js`.
- **Add/remove rows** (notices, FAQs, team, slides, questions, syllabus tracks) by
  copying/deleting whole blocks + fixing commas.
- **Colors/fonts/sizes** via `:root` variables (CSS lines 9–76) and the dimension
  knobs in §11/§13.
- **Photos** by overwriting files with the same name.
- **Numbers** listed in this manual (timers, counts, breakpoints, PASS %).

### 23.2 🚫 What you should avoid editing

- `js/app.js` logic (anything except the `SUBJECTS` data, lines 55–107, and the
  specific lines this manual points to).
- `${...}` placeholders, `onclick="..."` handlers, `id="..."` names, `href="#/..."`
  route strings (unless pointing to another real route from §10).
- `icon:` SVG path data, the federal-flag SVG, `rel="icon"` SVG (except its
  color/letters).
- Script order in `index.html` (content → questions → study → app).

### 23.3 🧠 What requires coding knowledge

Adding new page types, new search groups, links inside notice bodies, photo slide
backgrounds, new quiz modes, real user roles, any backend. For these, ask a
developer (or an AI) — and show them this manual + the file.

### 23.4 🗄️ What requires backend/database changes

Real admin panel, managing users, cross-device accounts, email newsletters that
actually send, payments, comments. None exist today (§8–§9, §17).

### 23.5 🚀 What requires rebuilding / deployment

**Nothing requires a build — there is no build step.** "Deploying" = uploading
the changed files (§25). No `npm`, no terminal, no compilation, ever.

### 23.6 💾 How to back up before editing (do this EVERY time)

1. **Best:** in your hosting file manager or editor, duplicate the file first:
   e.g. copy `js/content.js` → `js/content.js.BAK` (or download the whole
   `amin-website/` folder to your phone as a ZIP).
2. Make ONE small change, save, refresh the site, check it.
3. If anything looks wrong, restore the `.BAK` (rename back / re-upload).
4. Keep the last known-good ZIP of the full site somewhere safe (email it to
   yourself). The workspace single-file `index.html` is an extra emergency copy.

### 23.7 🆘 How to recover if something breaks

1. **Don't panic and don't make more edits.** Open the file you just changed.
2. **Undo** (Ctrl+Z / your editor's undo) or restore from your `.BAK`/ZIP (§23.6).
3. **No backup?** The #1 cause is a missing/extra comma or quote — compare your
   block with a neighboring unchanged block character by character (§24.2).
4. Re-upload the fixed file, then **hard-refresh** (§24.1) — your browser may be
   showing the cached broken version.
5. Still broken? Find the exact error: Android Chrome → ⋮ → Desktop site isn't
   enough; instead use an online "JS validator" or ask an AI, pasting the file +
   this manual.

---

## 24. Troubleshooting

### 24.1 I edited a file but the site looks unchanged

**Cause:** browser cache. **Fix:** hard refresh — Android Chrome: tap ⋮ → ⟳ twice,
or Settings → Privacy → Clear browsing data → Cached images and files (keep
cookies if you want to stay logged in). Also confirm you uploaded the file to the
right folder and overwrote the old one (§20.3 for permanent fixes).

### 24.2 Blank / white page after editing

**Cause (99%):** a JavaScript syntax error — almost always a missing/extra comma
(`,`) after a block, an unclosed quote (`"`), or an unclosed bracket (`]`/`}`).
**Fix:** re-open the edited file; check the exact lines you touched; every block
except the last in a list needs a trailing comma; every `"` needs a partner.
Restore backup if stuck (§23.7).

### 24.3 Broken layout / page looks unstyled

**Cause:** `css/style.css` failed to load (wrong upload path — must be
`css/style.css` relative to `index.html`) or a CSS typo (unclosed `{`).
**Fix:** verify the file exists at that path; check the last CSS lines you edited
for balanced braces.

### 24.4 Slider not working (stuck / invisible / no dots)

- Stuck on one slide: you may have deleted the comma structure of `SLIDES`
  (`content.js` lines 31–52) — validate commas.
- Invisible slides: a slide's `g1`/`g2` color is malformed (must be `#RRGGBB`).
- No dots: dots are auto-made from `SLIDES` — if `SLIDES` fails to parse, dots
  vanish too. Same fix as §24.2.
- Auto-play never advances but arrows work: check `app.js` line 1214 still reads
  `timer=setInterval(()=>goTo(idx+1),5000)`.

### 24.5 Image not showing (shows initials instead)

The initials fallback means the file path is wrong. Check: file name spelling +
case (`Profile.jpg` ≠ `profile.jpg`), folder (`images/`), extension (`.jpg` not
`.jpeg`), and that you actually uploaded it. References: `content.js` lines 16,
~103, ~107.

### 24.6 Button / link not working

- A button you edited: you probably broke its `onclick="..."` or `href="#/..."`.
  Route must match §10 exactly (`#/subjects`, not `#/subject` or `#/Subjects` —
  case-sensitive!).
- "Create Account" button: points to `#/register` (alias, works).
- Print buttons need a printer/print-to-PDF on the device; on phones they open
  the system print sheet.

### 24.7 Login / signup not working

- "Invalid email or password": email is case-insensitive, password is
  case-sensitive. Use Forgot Password with the recovery code from the Profile page.
- Can't stay logged in: "Remember me" unchecked = session ends with the tab (§8.4).
- Account "lost" on a new phone: accounts live per-browser (§8.1) — create the
  account again on the new device.
- `localStorage` disabled/private mode on some browsers: login can't persist.

### 24.8 Questions not appearing / unit shows 0 questions

**Cause:** the unit title doesn't match EXACTLY between the 4 linked files (§5.7).
**Fix:** copy the title from `js/app.js` `SUBJECTS` and paste it into the
`window.EXTRA["..."]` (both question files) and `window.STUDY["..."]` keys.
Watch for extra spaces and `&` vs `&amp;` (files use raw `&`, e.g.
`"Mathematics (Algebra & Geometry)"`).

### 24.9 Wrong answer marked correct

**Cause:** the `a:` number (0 = first option!). **Fix:** recount options starting
at 0 and correct `a:` (§6.2). Also check "Shuffle options" isn't confusing you —
the stored letter always follows the text.

### 24.10 Mobile has sideways scrolling / white strip on the side

**Cause:** something wider than the screen — usually long unbroken text you added,
or a custom image/HTML block. **Fix:** add spaces to long strings; add
`max-width:100%` to any `<img>` you added; remove negative margins. The built-in
protections are listed in §13.4 — don't delete them.

### 24.11 Broken links (404 "Page Not Found" inside the site)

You linked to a route that doesn't exist. Compare with the 23 real routes (§10.1).
Common mix-ups: `#/subject/sub1` (singular, needs id) vs `#/subjects` (plural);
`#/unit/sub1/1/study` needs all three parts; `#/syllabus/koshi` needs a valid
track id from `content.js` lines 54–79.

### 24.12 JavaScript errors (for when someone technical asks)

Open the page on a computer, press F12 → Console. The error names the file + line.
Common: `Uncaught SyntaxError: Unexpected token` (§24.2),
`... is not defined` (a `<script>` missing/misordered in `index.html` lines
92–132, or a typo in a variable name).

### 24.13 CSS problems (wrong colors / overlapping)

You edited a variable's NAME instead of its value, or removed a semicolon.
Restore `:root` from backup. Overlapping header/sidebar on mobile: you changed a
breakpoint or `.split`/`.side` rule — restore lines 287–294 / 386–391.

### 24.14 Deployment / upload errors

- Uploaded but 404: files must keep their folders (`css/`, `js/`, `questions/`,
  `study/`, `images/`) relative to `index.html` — don't flatten them.
- Partial upload: always upload ALL changed files together (e.g. new subject =
  data files + `index.html` + `app.js`).
- Host shows directory listing instead of site: make sure the file is named
  exactly `index.html` (lowercase).

---

## 25. Deployment

There is **no build step**. Deploying = copying files to your web host.

### 25.1 Which files to upload

- **First time:** upload the entire CONTENTS of `amin-website/` (all 48 files with
  folders) to your hosting's public folder (`public_html/`, `www/`, `htdocs/`, or
  the repo root for GitHub Pages/Netlify/Vercel).
- **After a text/question/notes edit:** upload ONLY the changed file(s) —
  e.g. edited Slide 2 → upload `js/content.js`; edited Unit 3 notes → upload
  `study/sub1-unit3.js`. Keep folder structure identical.
- **After adding a subject/unit:** upload the new data files + the edited
  `index.html` + the edited `js/app.js` together.
- **Never upload:** `tests/`, `*.BAK` backups, `.zip` files, the workspace-root
  single `index.html` (it would overwrite the split one if misnamed — they're
  both called `index.html`; keep them separate!).

### 25.2 How to deploy (3 common ways)

1. **cPanel / file manager:** open public_html → drag-drop / upload files →
   overwrite when asked → done.
2. **FTP app (e.g. AndFTP on Android):** connect → navigate to public folder →
   upload changed files.
3. **GitHub Pages / Netlify / Vercel:** commit/push the `amin-website` contents →
   host rebuilds automatically (static = instant, no build command needed).

### 25.3 How to check the update worked

1. Visit the page you changed → **hard-refresh** (§24.1).
2. Check on mobile data (not just Wi-Fi) to bypass router cache.
3. Spot-check: home slider → one study page → one test page → login → notice page.
4. If you have a computer: run `node tests/suite.js split` against the live URL
   pattern (it expects localhost — serve a local copy, or adapt the URL).

### 25.4 If deployment fails / site breaks live

1. Re-upload your last known-good ZIP immediately (rollback first, diagnose later).
2. Then compare: which file did you change last? Restore just that one from backup.
3. Clear your own cache before concluding it's still broken (§24.1).
4. Common gotcha: uploading `js/content.js` to the wrong folder (must be
   `yoursite.com/js/content.js`, not `yoursite.com/content.js`).

---

## 26. Website Architecture

Simple-language map of how the parts connect:

```
Visitor's Browser
      │
      ▼
 index.html ── loads ONE stylesheet + 41 scripts IN ORDER:
      │         1) js/content.js      (site texts: SITE/SOCIAL/SLIDES/…)
      │         2) questions/*.js     (window.EXTRA = all 135 MCQ + 81 written)
      │         3) study/*.js         (window.STUDY = 27 units of notes)
      │         4) js/app.js          (everything else — MUST be last)
      ▼
 ┌─────────────┐   builds pages from data   ┌──────────────────┐
 │  js/app.js  │ ───────────────────────────▶│  PAGES (23 routes)│
 │  SUBJECTS   │   reads unit titles         │  Home/Syllabus/   │
 │  mkUnits()  │ ◀── matches title keys ──── │  Study/Test/Quiz/ │
 │  router()   │   #/unit/…/study|test        │  Notice/Dashboard │
 └─────────────┘                              └────────┬─────────┘
      │                                                │ renders into
      │ uses                                           ▼
      ▼                                        #app / #header / #footer
 ┌─────────────┐   styled by            ┌──────────────────┐
 │ localStorage│   css/style.css        │  css/style.css   │
 │ 'amin' etc. │   (775 lines,          │  :root variables │
 │ users, prog │    :root tokens +      │  + page rules +  │
 │ results,    │    responsive rules)   │  mobile/print    │
 │ bookmarks   │                        │  media queries   │
 └─────────────┘                        └──────────────────┘

 There is NO backend / database / server code. The ONLY network calls the
 site itself makes: loading its own files + (optional) Formspree for the
 contact form + share-dialog popups when tapped.
```

**Data flow examples:**
- *Study page:* route `#/unit/sub3/2/study` → `pUnit()` finds subject `sub3`,
  unit 2 → `unitStudy()` renders `outcomes/content/keypoints`, where `mkUnits()`
  already merged `window.STUDY["Chain Survey"]` over the built-in defaults.
- *Quiz:* route `.../test` → `quizStart()` reads `u.objective` (getter pulls
  `window.EXTRA[title].mcq`) → `qzBegin()` builds deck → `qzFinish()` scores and
  saves into `localStorage['amin'].r2[user]`.
- *Login:* form → `sha()` hashes password → compared with `users[]` in
  `localStorage['amin']` → session set → `shell()` re-renders header with avatar.

---

## 27. Final "Where Do I Edit?" Guide

**Want to change the homepage slide?** → Open `js/content.js` → Find `const SLIDES`
(lines 31–52) → Change the `title:`/`desc:`/`btn:` text of that slide.

**Want to add a slide?** → Open `js/content.js` → Find `tag:"Notice"` (line 48) →
Copy its 4-line block → Paste after it → Edit the text (§3.7).

**Want to change auto-slide speed?** → Open `js/app.js` → Find `goTo(idx+1),5000`
(line 1214) → Change `5000` (milliseconds).

**Want to add an MCQ?** → Open `questions/mcq-subN.js` → Find the unit's
`window.EXTRA["..."].mcq` → Copy one `{q, o, a, e}` line → Paste at the end →
Change `q` (question), `o` (4 options), `a` (correct number 0–3), `e` (explanation).

**Want to fix a wrong answer?** → Same file → Find the question → Change only the
`a:` number (0 = first option!).

**Want to add a written question?** → Open `questions/subjective-subN.js` → Find
the unit's `.sub` block → Copy a `{q, marks, hint}` line → Edit it.

**Want to edit study notes?** → Open `study/subN-unitM.js` → Change text between
quotes in `outcomes` / `content` / `keypoints`.

**Want to rename a subject?** → Open `js/app.js` → Find `id:"subN"` (lines 56–99)
→ Change `name:"..."` (and its `mkUnits("...")` twin).

**Want to rename a unit?** → Open `js/app.js` → Find the title in `mkUnits([...])`
→ Rename it in ALL 4 files (§5.7) or questions/notes will vanish!

**Want to add a notice?** → Open `js/content.js` → Find `const NOTICES` (line 81)
→ Copy line 82 → Paste at top → New `id`, `date`, `title`, `body`.

**Want to change the website color?** → Open `css/style.css` → Find
`--primary:#144A78` (line 11) → Change the hex → Repeat for its dark twin
(line 47).

**Want rounder/sharper cards?** → Open `css/style.css` → Find `--radius:16px`
(line 35) → Bigger = rounder.

**Want to change phone/email/address?** → Open `js/content.js` → Find `phone:` /
`email:` / `address:` (lines 11–13) → Change text → If phone: also update the two
`tel:+977...` links (`js/app.js` lines 395, 926).

**Want contact messages by email?** → Get free endpoint at formspree.io → Open
`js/content.js` → Find `formEndpoint:` (line 20) → Paste it between the quotes.

**Want to change social links?** → Open `js/content.js` → Find `const SOCIAL`
(lines 23–29) → Change each `url:"..."` (never touch `icon:`).

**Want to replace a photo?** → Overwrite the same-named file in `images/` — no
code edit needed.

**Want to change footer text?** → Description: `js/app.js` line 389 (Find
`provides notes, MCQs`) → Copyright: `js/content.js` line 14 → "CREATED BY":
`js/app.js` line 401.

**Want to change the PASS %?** → Open `js/app.js` → Find `pct>=40` → Change BOTH
line 802 AND line 1048.

**Want to change quiz time?** → Open `js/app.js` → Find `id="qmin"` (line 605)
→ Change default + `min/max` → Cap twin at line 645 (`Math.min(180…)`).

**Want to change Google/tab title?** → Open `index.html` → Line 6 `<title>` and
line 7 description.

**Want the site wider/narrower on phones?** → Open `css/style.css` → Find
`.wrap{max-width:1180px` (line 94) → Change `padding:0 22px`.

**Want bigger mobile slider?** → Open `css/style.css` → Find
`.slider{height:370px}` (line 416) → Change the px.

**Want to publish changes?** → Upload the changed files (same folders!) → Hard
refresh → Check home + one study + one test page (§25).

---

## Appendix A: Complete File-by-File Reference

### Root files

| File | Lines / Size | What it does — in one paragraph |
|---|---|---|
| `index.html` | 135 lines, ~7 KB | The shell. `<head>` holds ALL SEO (title, description, OG/Twitter, JSON-LD, favicon, theme boot); `<body>` holds 4 empty mount points (`#topbar #header #app #footer`) + back-to-top button + the 41 `<script>` tags in load order (content → 12 questions → 27 study → app). Edit SEO (§19) and script list (§5.4) only. |
| `manifest.json` | 20 lines | PWA manifest: install name (`Amin Loksewa Preparation`), start page, colors, icons (reuses `profile.jpg`). Lets Android "Add to Home Screen". Safe to edit names/colors. |
| `README.md` | 82 lines (short) | The original brief readme generated with the split. This big manual supersedes it. |

### `css/style.css` (775 lines)

Single stylesheet for everything: §1 theme tokens `:root` (9–44) + dark twins
(46–76) → base (78–95) → buttons/forms (98–120) → topbar/ticker (121–135) →
header/nav (136–193) → slider (194–231) → sections/cards/grids (232–300) →
article/notes/forms (302–330) → team/faq (331–358) → footer (359–383) →
tablet/mobile media queries (386–430) → quiz engine (431–521) → quiz-mobile
media query (522–~560) → dark tweaks + misc + to-top + print + reduced-motion
(561–775). Edit variables (§11.1) and listed knobs; leave the rest.

### `js/content.js` (116 lines) — your main text file

| Lines | Const | Content |
|---|---|---|
| 8–21 | `SITE` | name, tagline, email, phone, address, copyright, profileImage, formEndpoint |
| 23–29 | `SOCIAL` | Facebook, YouTube, Instagram, X, WhatsApp (`url` editable) |
| 31–52 | `SLIDES` | 5 home slides (Author, Syllabus, Subjects, Tests, Notice) |
| 54–79 | `SYLLABUS` | 8 tracks: federal + koshi, madhesh, bagmati, gandaki, lumbini, karnali, sudurpashchim |
| 81–88 | `NOTICES` | 6 notices (Exam×2, Result×2, Admission, Event) |
| 90–96 | `FAQS` | 5 Q&As |
| 98–108 | `TEAM` | Shatrudhan Sah (Owner and Admin), Sunil Sah (Co-Founder), Rishikesh Sah (Adviser) |
| 110–115 | `LEGAL` | privacy (111), terms (112), copyright (113), disclaimer (114) — full HTML bodies |

### `js/app.js` (1,258 lines) — logic (don't edit except where this manual says)

| Lines | Block | What it does |
|---|---|---|
| 23–53 | `mkUnits()` | Builds unit objects; merges `window.STUDY` overrides; `subjective`/`objective` getters read `window.EXTRA` |
| 55–107 | `SUBJECTS` | 6 subjects + 27 unit titles (**editable data**) |
| 116–125 | `$`, `esc`, `fdate` | Helpers: query selector, HTML-escape, date format |
| 127–171 | `DB` | localStorage layer: raw/get/set/session/user/skey + legacy `edupath` migration |
| 173–190 | `sha`, `isSha`, `rid` | SHA-256 hashing + recovery-code generator |
| 192–212 | `BM` | Bookmarks: all/save/toggle/remove/clear (cap 500) |
| 214–286 | search | Index (214), ranking (232), highlight (247), page (256–286) |
| 288–308 | `pSaved` | Saved-questions page |
| 309–342 | `sendMsg`, `doSubscribe` | Contact form (Formspree/mailto) + newsletter saver |
| 344–423 | `socialSVG`, `shell`, menus, nav | Header/footer/dropdowns/mobile-nav/logout/router-helpers |
| 425–442 | `head`, `need`, `prog`, `markDone`, `subjPct`, totals, `jumpTo` | Shared page helpers |
| 444–487 | `pHome` | Home page |
| 489–524 | notices/syllabus/subjects pages | `noticeCard`, `pSyllabusList`, `pSyllabus`, `pSubjects`, `pSubject` |
| 552–580 | `pUnit`, `unitStudy` | Unit shell + study layout |
| 582–846 | Quiz engine | State `QZ` (582), start (586), modes/shuffle (622–648), retry (650), timer (669–690), render/grid/card (693–764), answer/nav (766–775), submit/finish/result (776–837), keyboard (839–846) |
| 848–877 | `pTests`, `pNotices`, `pNotice` | Tests hub + notice pages |
| 879–947 | `pAbout`, `pContact`, `pFaq` | About + contact + FAQ |
| 955–1024 | Auth | `pAuth` (955), `doLogin` (987), `doReg` (996), `pForgot` (1005), `doForgot` (1014) |
| 1027–1098 | Dashboard | `pDash` (1027: overview/progress/history/profile), `saveProfile` (1080), `delAcc` (1088) |
| 1099–1113 | `pLegal`, `p404` | Legal renderer + 404 page |
| 1117–1143 | Theme | `THEME_KEY`, get/apply/toggle + theme button HTML |
| 1144–1157 | `toTop`, `initTop` | Back-to-top with scroll ring |
| 1159–1211 | `router` | Hash router: 23 routes |
| 1206–1238 | Slider machine | `goTo` (1206), `go` (1213), `restart` 5000 ms (1214), `initSlider` incl. swipe + arrow keys (1215) |
| 1240–1257 | Global listeners + boot | Outside-click/Escape (1240), hashchange (1246), theme init + first `router()` (1248–1256) |

### `questions/` (12 files — 135 MCQ + 81 written)

| File | Units inside | Questions |
|---|---|---|
| `mcq-sub1.js` (61 lines) | 5 (sub1) | 25 MCQ (5/unit) |
| `mcq-sub2.js` (61) | 5 (sub2) | 25 MCQ |
| `mcq-sub3.js` (61) | 5 (sub3) | 25 MCQ |
| `mcq-sub4.js` (41) | 3 (sub4) | 15 MCQ |
| `mcq-sub5.js` (61) | 5 (sub5) | 25 MCQ |
| `mcq-sub6.js` (51) | 4 (sub6) | 20 MCQ |
| `subjective-sub1.js` (48) | 5 | 15 written (3/unit) |
| `subjective-sub2.js` (48) | 5 | 15 written |
| `subjective-sub3.js` (48) | 5 | 15 written |
| `subjective-sub4.js` (32) | 3 | 9 written |
| `subjective-sub5.js` (48) | 5 | 15 written |
| `subjective-sub6.js` (40) | 4 | 12 written |

Each file: header comment (format reminder) + `window.EXTRA=window.EXTRA||{};` +
one `window.EXTRA["<unit>"].mcq|sub=[...]` block per unit. Keys must match
`SUBJECTS` titles exactly (§5.7).

### `study/` (27 files, ~38 lines each)

One file per unit: header comment (editing guide) + `window.STUDY=window.STUDY||{};`
+ `window.STUDY["<exact unit title>"]={outcomes[3], content[3×{h,p}], keypoints[3]}`.
File name pattern: `study/sub<subjectNo>-unit<unitNo>.js` (subject/unit numbers,
NOT ids — e.g. sub1's 3rd unit = `sub1-unit3.js`). The key inside MUST equal the
`SUBJECTS` title (§5.7). Loaded before `app.js` so `mkUnits()` picks them up at boot.

### `images/` (3 files)

`profile.jpg` (20 KB, owner), `team-sunil-sah.jpg` (24 KB),
`team-rishikesh-sah.jpg` (20 KB). Replace by overwrite (§12.2). Missing but
referenced: `images/share.jpg` (create it, §12.4).

### Workspace-only files (NOT part of the live site — do not upload)

| File | What it is |
|---|---|
| `/home/user/index.html` (~355 KB) | Single-file version of the whole site — emergency backup / offline copy |
| `/home/user/tests/suite.js` | 33-check automated test (needs Node.js + computer) |
| `/home/user/tests/parity.js` | Single-vs-split render comparer (needs Node.js) |
| `/home/user/fix_script.py`, `/home/user/split_project.py` | Generator scripts that built/patched the site — only a developer needs these |
| `/home/user/amin-website.zip` | Last packaged ZIP of the split project |

---

## Appendix B: Counts & Limits Cheat Sheet

| Item | Count / Limit | Where set |
|---|---|---|
| Subjects / units | 6 / 27 (5+5+5+3+5+4) | `app.js` 55–107 |
| MCQs / written questions | 135 / 81 | `questions/*.js` |
| Study files | 27 | `study/*.js` |
| Slides | 5 | `content.js` 31–52 |
| Syllabus tracks | 8 | `content.js` 54–79 |
| Notices / FAQs / team / legal | 6 / 5 / 3 / 4 | `content.js` 81–115 |
| Routes | 23 | `app.js` 1159–1211 |
| PASS mark | ≥ 40% | `app.js` 802 + 1048 |
| Results kept per user | 50 | `app.js` 792 |
| Bookmarks cap per user | 500 | `app.js` 195 |
| Quiz minutes (user range / hard cap) | 1–180 | `app.js` 605 / 645 |
| Slider auto-advance | 5 s | `app.js` 1214 |
| Search min letters / max results | 2 / 40 | `app.js` 233,248,271 / 245 |
| "New" notice badge | < 30 days | `app.js` 490 |
| Password min length | 6 | `app.js` 978, 979, 1011 |
| Recovery code format | `XXXX-XXXX` (A–Z minus confusables + 2–9) | `app.js` 188 |
| Ticker speed | 28 s loop (80 s reduced-motion) | CSS 125 / 649 |
| Back-to-top appears after | 320 px scroll | `app.js` 1150 |
| Page max width / side padding | 1180 px / 22 px | CSS 94 |
| Breakpoints | 1080 / 960 / 920 / 760 px | CSS 631 / 386 / 636 / 392 |
| localStorage keys | `amin`, `amin-s`, `amin-theme`, `amin-nl` (+ legacy `edupath`) | `app.js` 128, 158, 1117, 337 |

---

*End of manual. If you followed a section and something still doesn't work, see
§24 Troubleshooting, restore your backup (§23.6), and — for anything marked
"requires coding knowledge" — show a developer this file plus the file you're
editing. Happy maintaining! 🎓*
