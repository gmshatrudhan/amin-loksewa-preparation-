/* ================= MCQ QUESTIONS - Land Administration, Cadastral Survey and Land Records - Unit 3: Land Records =================
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

// ── ✏️ EDIT HERE - Unit: "Land Records" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Land Records"] = window.EXTRA["Land Records"] || {};
window.EXTRA["Land Records"].mcq = [
      {q:"In Nepal, the legal certificate showing ownership of a land parcel is commonly called:", o:["Kitta Napi", "Lal Purja", "Namsari", "Faraad"], a:1, e:"Lal Purja is the land ownership certificate issued by the Land Revenue Office. Kitta Napi means parcel measurement, Namsari means transfer of ownership and Faraad means updating of records."},
      {q:"Land ownership records in Nepal are maintained by the:", o:["Survey Office", "Land Revenue Office (Malpot)", "Ward Office", "District Court"], a:1, e:"The Land Revenue Office (Malpot Karyalaya) maintains the land register and issues ownership certificates, while the Survey Office maintains the cadastral maps."},
      {q:"The updating of land records after a transfer of ownership is called:", o:["Mutation", "Consolidation", "Acquisition", "Registration of birth"], a:0, e:"Mutation (Dakhil Kharej or Namsari) is the process of recording the change of ownership in the land register after sale, gift, inheritance or partition."},
      {q:"The main advantage of digitising land records is:", o:["Higher tax", "Faster, transparent and safer service", "More paperwork", "Fewer offices"], a:1, e:"Digital land records allow rapid retrieval, reduce the risk of loss or tampering, enable online services and enhance transparency in land administration."},
      {q:"Which document is the graphical record of a land parcel?", o:["Lal Purja", "Cadastral map", "Tax receipt", "Citizenship certificate"], a:1, e:"The cadastral map is the graphical record showing the shape, boundaries and kitta number of each parcel; the Lal Purja and land register are the textual records."}
    ];
