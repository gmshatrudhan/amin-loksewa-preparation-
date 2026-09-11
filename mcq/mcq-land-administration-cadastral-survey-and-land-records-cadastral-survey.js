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
      {q:"The main purpose of a cadastral survey is to:", o:["Fix parcel boundaries and prepare ownership records", "Study rainfall", "Locate minerals", "Design roads"], a:0, e:"A cadastral survey fixes the boundaries of individual land parcels and prepares the maps and records that support ownership certificates, registration, taxation and legal purposes."},
      {q:"The unique identification number given to each land parcel is called the:", o:["Ward number", "Kitta number", "Sheet number", "File number"], a:1, e:"The Kitta number is the unique parcel number given to each plot of land in a cadastral map. It links the map with the land record and the ownership certificate."},
      {q:"In Nepal, cadastral survey work is carried out by:", o:["District Court", "Department of Roads", "Survey Department and its offices", "Nepal Rastra Bank"], a:2, e:"The Survey Department under the Ministry of Land Management, Cooperatives and Poverty Alleviation, through its Survey Offices, carries out cadastral survey and map preparation."},
      {q:"The process of measuring land parcel by parcel in the field is known as:", o:["Namsari", "Faraad", "Dakhil Kharej", "Kitta Napi"], a:3, e:"Kitta Napi is the parcel by parcel cadastral measurement of land. Namsari is transfer of ownership, and Faraad refers to updating and correction of records."},
      {q:"A cadastral map differs from a topographic map mainly because it shows:", o:["Land parcel boundaries and ownership units", "Rainfall", "Soil type", "Contours"], a:0, e:"A cadastral map emphasises legal parcel boundaries, kitta numbers and areas, whereas a topographic map emphasises natural and man made physical features and relief."},
      {q:"Cadastral maps in the Nepal Terai are commonly prepared at the scale:", o:["1:500", "1:2,500", "1:10,000", "1:50,000"], a:0, e:"Terai cadastral sheets are typically 1:500 and hill sheets 1:1,250; large scales show parcel boundaries clearly for ownership records."},
      {q:"A parcel (kitta) number on a cadastral map uniquely identifies:", o:["A single land parcel within a sheet", "A municipality", "A survey team", "A district"], a:0, e:"Each parcel within a map sheet gets a unique kitta number; combined with sheet number, VDC/municipality and ward it identifies the land."},
      {q:"During cadastral survey, parcel boundaries are fixed on the basis of:", o:["Old tax receipts only", "Occupation and evidence shown by owners/neighbours", "Random division", "Satellite images only"], a:1, e:"The survey team fixes boundaries from on-ground occupation, owner statements, neighbour agreement and available evidence (pilot area approach)."},
      {q:"The control framework for cadastral surveying in Nepal is based on:", o:["Chain lines only", "Geodetic control points and traverses", "Compass bearings only", "Eye estimation"], a:1, e:"Cadastral sheets are tied to national geodetic control through traverses/GPS so parcels fit consistently across sheets."},
      {q:"Sheet numbers on cadastral maps help to:", o:["Fix land prices", "Measure crop yield", "Locate the map sheet covering an area", "Count the population"], a:2, e:"Each map sheet has an index number; the sheet index map shows which sheet covers a given locality for record retrieval."},
      {q:"Kitta-kat (parcel splitting) is required when:", o:["Crops are changed", "Land is left fallow", "Part of a parcel is sold or partitioned", "Tax is paid"], a:2, e:"Subdivision by sale, partition or inheritance requires kitta-kat: field measurement, new parcel numbers and updated map and records."},
      {q:"The field book (filid buk) in cadastral survey records:", o:["Court orders", "Daily wages", "Weather reports", "Measurements, sketches and boundary details"], a:3, e:"The field book contains measured distances, offsets, sketches, owner names and remarks — the legal basis for the cadastral map."},
      {q:"Boundary disputes during cadastral survey are settled by:", o:["The survey team alone", "Neighbours voting", "The VDC secretary", "The survey officer with appeal to higher authority/court"], a:3, e:"The survey officer decides boundary disputes during survey; aggrieved parties may appeal through prescribed channels to the courts."}
    ];
