/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Surveying Methodology and Mapping - Unit 4: Tachometric Survey =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Tachometric Survey" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Tachometric Survey"] = window.EXTRA["Tachometric Survey"] || {};
window.EXTRA["Tachometric Survey"].sub = [
      {q:"Explain the principle of stadia tacheometry and derive the distance formula.", marks:10, hint:"The stadia principle states that the ratio of the staff intercept to the horizontal distance is constant for a given instrument. With f the focal length, i the stadia interval and d the distance from the object glass to the trunnion axis, the distance from the instrument to the staff is D = (f/i).s + (f + d), usually written D = K.s + C where K = f/i is the multiplying constant (normally 100) and C = f + d is the additive constant. A neat ray diagram of the object glass, stadia hairs and staff should be drawn."},
      {q:"What are the advantages of tacheometric surveying over chain surveying?", marks:5, hint:"It eliminates the need for chaining, so it is fast and economical; it is well suited to rough, steep or broken ground and across obstacles such as rivers; it gives horizontal distance and elevation simultaneously; it reduces the errors that arise from chaining on slopes; and it is very useful for contouring and preliminary route surveys."},
      {q:"Differentiate between the fixed hair method and the movable hair method.", marks:5, hint:"Fixed hair (stadia) method: the stadia hairs are at a fixed interval, the staff intercept varies with distance, an ordinary levelling staff is used, and it is the method commonly employed. Movable hair (subtense) method: the staff intercept is kept constant by using targets at a fixed distance apart, the stadia interval is varied and read on a micrometer; it is more accurate but slower and needs a special instrument."}
    ];
