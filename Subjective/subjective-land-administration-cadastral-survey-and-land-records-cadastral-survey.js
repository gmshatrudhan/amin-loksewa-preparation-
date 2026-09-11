/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Land Administration, Cadastral Survey and Land Records - Unit 2: Cadastral Survey =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Cadastral Survey" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Cadastral Survey"] = window.EXTRA["Cadastral Survey"] || {};
window.EXTRA["Cadastral Survey"].sub = [
      {q:"Explain the objectives and importance of cadastral survey.", marks:10, hint:"Objectives: to determine and demarcate the boundary of every land parcel; to measure the area of each parcel; to give each parcel a unique kitta number; to prepare cadastral maps and field books; and to provide the basis for the land ownership certificate. Importance: it gives legal security of ownership, provides the basis for land revenue and taxation, reduces boundary disputes and litigation, supports land use planning, acquisition and compensation, and enables a reliable land information system."},
      {q:"Describe the procedure of cadastral survey in the field.", marks:5, hint:"Public notice is issued informing landowners of the date of survey. Boundaries are demarcated by the owners in the presence of neighbours and local representatives. Control points are established and the survey framework is laid. Each parcel is measured by plane table, total station or other approved method. Each parcel is given a kitta number and its area is computed. The field book and cadastral map are prepared, then publicly displayed for objections, corrected as necessary, and finally approved and recorded."},
      {q:"What is a kitta number? Explain its use in land records.", marks:5, hint:"A kitta number is the unique serial number assigned to each individual land parcel within a cadastral map sheet. It links the graphical record (the map) with the textual record (the field book and land register) and with the ownership certificate. It is used in registration, transfer, mutation, taxation, mortgage and in any legal reference to that parcel."},
      {q:"Explain the procedure of kitta-kat (parcel subdivision) in cadastral survey.", marks:5, hint:"Steps: application with lalpurja; scrutiny of records; field visit with notice to neighbours; measurement and boundary fixation; plotting on map trace; new kitta numbers; area computation; approval; update of map and Malpot records. Mention minimum plot size rules where applicable."},
      {q:"Describe the stages of cadastral survey operations from proclamation to record handover.", marks:10, hint:"Stages: government proclamation; publicity; control survey; boundary demarcation with owners; detail survey and field books; plotting and map preparation; area computation; inquiry and objection hearing; record preparation (registers); handover to Malpot Office; maintenance survey afterwards. Explain the purpose of each stage."}
    ];
