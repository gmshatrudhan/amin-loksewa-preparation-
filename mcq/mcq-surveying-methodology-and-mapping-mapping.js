/* ================= MCQ QUESTIONS - Surveying Methodology and Mapping - Unit 5: Mapping =================
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

// ── ✏️ EDIT HERE - Unit: "Mapping" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Mapping"] = window.EXTRA["Mapping"] || {};
window.EXTRA["Mapping"].mcq = [
      {q:"If the scale of a map is 1 cm = 100 m, its representative fraction is:", o:["1:100", "1:1,000", "1:10,000", "1:100,000"], a:2, e:"100 m = 10,000 cm, so RF = 1 cm / 10,000 cm = 1/10,000, written 1:10,000."},
      {q:"Contour lines on a map can never:", o:["Curve", "Cross one another", "Close on themselves", "Run close together"], a:1, e:"Contour lines cannot cross one another because a single point on the ground cannot have two different elevations. The only exception is an overhanging cliff, where they are shown dashed."},
      {q:"A map showing the boundaries of individual land parcels is called a:", o:["Topographic map", "Cadastral map", "Political map", "Geological map"], a:1, e:"A cadastral map shows the boundaries, parcel numbers and areas of individual land holdings and is used for ownership, registration and taxation."},
      {q:"Closely spaced contour lines indicate:", o:["Flat ground", "Steep slope", "Gentle slope", "A valley only"], a:1, e:"The closer the contour lines, the steeper the slope; widely spaced contours indicate gentle slopes and evenly spaced contours indicate a uniform slope."},
      {q:"The vertical distance between two consecutive contour lines is called the:", o:["Horizontal equivalent", "Contour interval", "Gradient", "Reduced level"], a:1, e:"The contour interval is the constant vertical distance between successive contours. Its horizontal distance on the map is called the horizontal equivalent, which varies with the slope."}
    ];
