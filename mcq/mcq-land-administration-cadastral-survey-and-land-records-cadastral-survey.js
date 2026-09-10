/* ================= MCQ QUESTIONS - Land Administration, Cadastral Survey and Land Records - Unit 2: Cadastral Survey =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, o, a, e} block, paste it after the last
 * one (with a comma between blocks), and edit the text.
 *   q = question,  o = 4 options,  a = correct option NUMBER (0, 1, 2 or 3),
 *   e = explanation shown after answering.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Cadastral Survey" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Cadastral Survey"] = window.EXTRA["Cadastral Survey"] || {};
window.EXTRA["Cadastral Survey"].mcq = [
      {q:"The main purpose of a cadastral survey is to:", o:["Design roads", "Fix parcel boundaries and prepare ownership records", "Study rainfall", "Locate minerals"], a:1, e:"A cadastral survey fixes the boundaries of individual land parcels and prepares the maps and records that support ownership certificates, registration, taxation and legal purposes."},
      {q:"The unique identification number given to each land parcel is called the:", o:["Ward number", "Kitta number", "Sheet number", "File number"], a:1, e:"The Kitta number is the unique parcel number given to each plot of land in a cadastral map. It links the map with the land record and the ownership certificate."},
      {q:"In Nepal, cadastral survey work is carried out by:", o:["Department of Roads", "Survey Department and its offices", "Nepal Rastra Bank", "District Court"], a:1, e:"The Survey Department under the Ministry of Land Management, Cooperatives and Poverty Alleviation, through its Survey Offices, carries out cadastral survey and map preparation."},
      {q:"The process of measuring land parcel by parcel in the field is known as:", o:["Kitta Napi", "Namsari", "Faraad", "Dakhil Kharej"], a:0, e:"Kitta Napi is the parcel by parcel cadastral measurement of land. Namsari is transfer of ownership, and Faraad refers to updating and correction of records."},
      {q:"A cadastral map differs from a topographic map mainly because it shows:", o:["Contours", "Land parcel boundaries and ownership units", "Rainfall", "Soil type"], a:1, e:"A cadastral map emphasises legal parcel boundaries, kitta numbers and areas, whereas a topographic map emphasises natural and man made physical features and relief."}
    ];
