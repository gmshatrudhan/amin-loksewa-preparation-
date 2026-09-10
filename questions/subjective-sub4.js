/* ================= SUBJECTIVE (WRITTEN) QUESTIONS — SUB4: Land Administration, Cadastral Survey and Land Records =================
 * Units in this file:
 *     - Legislation (Acts, Rules, Directives, Circulars, SoP)
 *     - Cadastral Survey
 *     - Land Records
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit titles in square brackets.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Legislation (Acts, Rules, Directives, Circulars, SoP)" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Legislation (Acts, Rules, Directives, Circulars, SoP)"] = window.EXTRA["Legislation (Acts, Rules, Directives, Circulars, SoP)"] || {};
window.EXTRA["Legislation (Acts, Rules, Directives, Circulars, SoP)"].sub = [
      {q:"Explain the hierarchy of legislation: Act, Rule, Directive, Circular and SoP.", marks:10, hint:"Act: primary legislation passed by the federal parliament or provincial assembly; it is the source of authority. Rule or Regulation: subordinate legislation framed by government under powers delegated by the Act; it provides operational detail and is legally binding. Directive (Nirdeshika): issued by a ministry or department to guide implementation of an Act or Rule. Circular (Paripatra): an administrative communication clarifying or instructing on a particular point. SoP: a detailed step by step working procedure. A lower instrument must always conform to the higher one; if there is conflict, the higher prevails."},
      {q:"State the main provisions of the Land Act, 2021 BS relating to land ceiling.", marks:5, hint:"The Land Act, 2021 BS fixed the maximum area of land a family may hold, with different ceilings for the Terai, hill and Kathmandu Valley regions, and separate ceilings for agricultural land and for a homestead. Land held in excess of the ceiling is liable to be acquired by the government and redistributed. The Act also secured tenancy rights, regulated rent, and introduced compulsory saving. The ceilings have been revised by subsequent amendments."},
      {q:"Why are circulars important in land administration? Explain briefly.", marks:5, hint:"Circulars give uniform interpretation of legal provisions to all offices, communicate day to day administrative instructions, clarify doubts arising in implementation, and inform staff of changes in procedure, fees or formats. They ensure that land administration is carried out consistently throughout the country without waiting for an amendment of the Act or Rules."}
    ];

// ── ✏️ EDIT HERE - Unit: "Cadastral Survey" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Cadastral Survey"] = window.EXTRA["Cadastral Survey"] || {};
window.EXTRA["Cadastral Survey"].sub = [
      {q:"Explain the objectives and importance of cadastral survey.", marks:10, hint:"Objectives: to determine and demarcate the boundary of every land parcel; to measure the area of each parcel; to give each parcel a unique kitta number; to prepare cadastral maps and field books; and to provide the basis for the land ownership certificate. Importance: it gives legal security of ownership, provides the basis for land revenue and taxation, reduces boundary disputes and litigation, supports land use planning, acquisition and compensation, and enables a reliable land information system."},
      {q:"Describe the procedure of cadastral survey in the field.", marks:5, hint:"Public notice is issued informing landowners of the date of survey. Boundaries are demarcated by the owners in the presence of neighbours and local representatives. Control points are established and the survey framework is laid. Each parcel is measured by plane table, total station or other approved method. Each parcel is given a kitta number and its area is computed. The field book and cadastral map are prepared, then publicly displayed for objections, corrected as necessary, and finally approved and recorded."},
      {q:"What is a kitta number? Explain its use in land records.", marks:5, hint:"A kitta number is the unique serial number assigned to each individual land parcel within a cadastral map sheet. It links the graphical record (the map) with the textual record (the field book and land register) and with the ownership certificate. It is used in registration, transfer, mutation, taxation, mortgage and in any legal reference to that parcel."}
    ];

// ── ✏️ EDIT HERE - Unit: "Land Records" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Land Records"] = window.EXTRA["Land Records"] || {};
window.EXTRA["Land Records"].sub = [
      {q:"Explain the importance of accurate land records in land administration.", marks:10, hint:"Accurate land records give legal security of tenure and protect the owner against encroachment and fraud. They provide a reliable basis for the assessment and collection of land revenue. They reduce boundary disputes and consequent litigation. They enable land to be used as collateral for credit, thereby supporting investment. They support planning, acquisition, compensation, and infrastructure development, and they are essential for a modern land information system and for good governance in the land sector."},
      {q:"Describe the process of mutation of land records.", marks:5, hint:"An application is submitted to the Land Revenue Office with the ownership certificate, the deed of transfer, tax clearance and citizenship documents. The office verifies the documents against the land register and the cadastral map. A field enquiry is made where required, and notice may be issued for objection. If everything is in order, the entry is made in the land register, the old certificate is cancelled and a new ownership certificate is issued to the new owner, and the record and the map are updated."},
      {q:"What are the advantages of digitising land records?", marks:5, hint:"Records can be retrieved in seconds instead of hours; the risk of loss, theft, fire or tampering is greatly reduced; services such as searching, copying and applying can be delivered online; transparency improves and the scope for irregularity is reduced; data can be linked with the cadastral map through GIS; and reliable statistics become available for planning."}
    ];
