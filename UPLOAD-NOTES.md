# Official Notices Update — what changed and how to upload

## Upload these 4 files
| File | Destination | Why |
|---|---|---|
| `index.html` | repo root | carries the 2,082 count fix + cache-buster bumped to `?v=12` |
| `404.html` | repo root | must stay byte-identical to index.html (SPA fallback) |
| `js/app.js` | `js/` | renders the official-source link, B.S. date and verified stamp |
| `js/content.js` | `js/` | the 6 new bilingual official notices |

**Upload index.html and 404.html together in the same commit.** They are identical files; if only one is
uploaded, direct links like /about will start 404-ing.

## The 6 notices (all sourced from official sites, verified 2026-09-16)

| # | Notice | Source | Date (B.S.) |
|---|---|---|---|
| 1 | सरकारी, सार्वजनिक र सामुदायिक जग्गा नाप जाँच सम्बन्धी निर्देशिका, २०८३ | dos.gov.np | २०८३-०५-१८ |
| 2 | सरुवाको लागि निवेदन पेश गर्ने सम्बन्धी सूचना | dos.gov.np | २०८३-०५-२६ |
| 3 | रा.प.अनं. द्वितीय श्रेणी (प्राविधिक) खरिदार परीक्षा कार्यक्रम संशोधन | psc.gov.np | २०८३-०४-१५ |
| 4 | रा.प.अनं. द्वितीय श्रेणी, खरिदार (प्राविधिक) पदको विज्ञापन | psc.gov.np | २०८२-१२-२५ |
| 5 | आ.व. २०८३/०८४ को पदपूर्ति सम्बन्धी वार्षिक कार्यतालिका | psc.gov.np | २०८३-०४-०१ |
| 6 | अमिन पदको विज्ञापन कहाँ हेर्ने (guide) | psc.gov.np | २०८३-०५-३१ |

All 6 source URLs were checked and return HTTP 200.

## Honest note
**There is no open Amin-only vacancy at the time of writing.** Amin posts are advertised by the PSC
(राजपत्र अनंकित द्वितीय श्रेणी, प्राविधिक, सर्भे समूह) and on contract by the Department of Survey.
Notice 6 says exactly this and points users to psc.gov.np and dos.gov.np, so nobody chases an
expired vacancy. Notices 3 and 4 are the correct class and level for Amin, so they are genuinely
relevant preparation signals.

## Keeping it fresh
Edit the `NOTICES` array in `js/content.js`. Each entry:
`{ id, cat, date (YYYY-MM-DD, AD), bs, title, body, src, srcName, verified }`
Categories available in the filter: All, Vacancy, Exam, Result, Directive, Info.
When you update a notice, also update its `verified` field and bump `?v=` in index.html / 404.html.
