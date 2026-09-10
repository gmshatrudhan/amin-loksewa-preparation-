/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Surveying Methodology and Mapping - Unit 3: Plane Table Survey =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Plane Table Survey" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Plane Table Survey"] = window.EXTRA["Plane Table Survey"] || {};
window.EXTRA["Plane Table Survey"].sub = [
      {q:"Explain the methods of plane table surveying.", marks:10, hint:"Radiation — the table is set at one station and rays are drawn to all visible objects, distances measured and plotted to scale; suitable for small areas visible from one point. Intersection — two stations are plotted and rays drawn from both, the intersection fixing the object; used when distances cannot be measured. Traversing — the table is moved from station to station, forming a traverse; used for long narrow strips. Resection — the position of the table itself is located from already plotted points; includes the two point and three point problems."},
      {q:"State the advantages and disadvantages of plane table survey.", marks:5, hint:"Advantages: plotting is done in the field so nothing is omitted; errors can be detected immediately by check lines; no separate booking so no transposition errors; irregular objects can be plotted easily; no great computation is required. Disadvantages: not suitable in wet or windy weather; the equipment is heavy and awkward; no field record for future use; accuracy is lower; skilled surveyor required."},
      {q:"Explain the two point problem in plane tabling.", marks:5, hint:"The two point problem consists of locating the position of the plane table station on the plan by observing two well defined points whose positions have already been plotted. An auxiliary station is chosen, rays are drawn from both known points, the table is oriented by back ray from the auxiliary station, and the intersection of the resulting rays fixes the required station."}
    ];
