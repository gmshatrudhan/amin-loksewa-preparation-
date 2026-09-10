/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Surveying Methodology and Mapping - Unit 5: Mapping =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Mapping" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Mapping"] = window.EXTRA["Mapping"] || {};
window.EXTRA["Mapping"].sub = [
      {q:"Define the scale of a map and explain the types of scale used in mapping.", marks:10, hint:"The scale of a map is the fixed ratio between a distance on the map and the corresponding distance on the ground. Types: (i) Numerical or engineer's scale, stated as 1 cm = 100 m. (ii) Representative fraction (RF), a dimensionless ratio such as 1:10,000, independent of the units used. (iii) Graphical or plain scale, a line drawn on the map divided into units; it remains correct even if the map is enlarged or reduced. Choice of scale depends on the purpose, the size of the area and the detail required."},
      {q:"What are conventional signs and symbols? Why are they necessary?", marks:5, hint:"Conventional signs are standard symbols used on maps to represent features such as roads, railways, rivers, buildings, boundaries, wells, temples and vegetation. They are necessary because features cannot be drawn to true scale on a small map; they save space, make the map easy to read, and ensure that every user interprets the map in the same way."},
      {q:"Explain the characteristics of contour lines.", marks:5, hint:"Contours of different elevations cannot cross one another (except at an overhanging cliff). Every contour closes on itself, either within or outside the map. Closely spaced contours mean a steep slope, widely spaced a gentle slope, evenly spaced a uniform slope. Contours are perpendicular to the line of steepest slope. A series of closed contours with higher values inside represents a hill; with lower values inside, a depression. Contours cross a ridge or valley line at right angles."}
    ];
