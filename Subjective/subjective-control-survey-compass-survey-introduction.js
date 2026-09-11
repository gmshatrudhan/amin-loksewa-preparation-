/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Control Survey - Unit 1: Compass Survey Introduction =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Compass Survey Introduction" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Compass Survey Introduction"] = window.EXTRA["Compass Survey Introduction"] || {};
window.EXTRA["Compass Survey Introduction"].sub = [
      {q:"Define bearing and differentiate between the whole circle bearing and reduced bearing systems.", marks:10, hint:"A bearing is the horizontal angle which a survey line makes with a reference meridian. WCB system: measured clockwise from north from 0 to 360 degrees, used with the prismatic compass, only one letter free notation. Reduced or quadrantal bearing: measured from north or south, eastward or westward, from 0 to 90 degrees, used with the surveyor's compass, written as N30E or S45W. Conversion: for WCB 0 to 90, RB = WCB (NE); 90 to 180, RB = 180 - WCB (SE); 180 to 270, RB = WCB - 180 (SW); 270 to 360, RB = 360 - WCB (NW)."},
      {q:"What is local attraction? How is it detected and corrected?", marks:5, hint:"Local attraction is the deflection of the magnetic needle from the magnetic meridian caused by nearby magnetic material such as iron pipes, electric poles, rails, steel structures or magnetic rocks. Detection: compute the difference between the fore bearing and back bearing of each line; if it is not exactly 180 degrees, local attraction exists at one or both stations. Correction: identify a line whose FB and BB differ by exactly 180 degrees, so both its stations are free from attraction; starting from those stations, apply the necessary correction progressively to the bearings observed at the affected stations."},
      {q:"Convert the whole circle bearing 210 degrees into the reduced bearing system, showing your working.", marks:5, hint:"The WCB of 210 degrees lies between 180 and 270 degrees, which is the south west quadrant. The reduced bearing = WCB - 180 = 210 - 180 = 30 degrees. Therefore the reduced bearing is S30W."},
      {q:"Convert: (a) whole circle bearing 300° into reduced bearing; (b) reduced bearing N 50° W into whole circle bearing.", marks:5, hint:"(a) 300° is in NW quadrant: RB = N(360−300)W = N 60° W. (b) N 50° W = 360−50 = 310° WCB."},
      {q:"Explain the parts of a prismatic compass and the procedure of observing a bearing.", marks:10, hint:"Parts: magnetic needle, graduated ring, prism, sighting vanes, brake pin, lifting lever, glass cover, tripod/ball pivot. Procedure: centre and level over station, release needle, sight object through vanes, wait needle steadies, read ring through prism, record FB; repeat from other end for BB."}
    ];
