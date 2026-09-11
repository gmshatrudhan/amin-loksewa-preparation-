/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Surveying Methodology and Mapping - Unit 2: Chain Survey =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};

window.EXTRA["Chain Survey"] = window.EXTRA["Chain Survey"] || {};
window.EXTRA["Chain Survey"].sub = [
      {q:"Describe the procedure of chain surveying in the field.", marks:10, hint:"1. Reconnaissance — walk over the area and study the ground. 2. Prepare an index sketch showing stations. 3. Mark and reference the main stations with pegs. 4. Select well-conditioned triangles for the framework. 5. Measure the base line accurately. 6. Chain the survey lines, recording chainages and taking offsets to details in the field book. 7. Measure check lines and tie lines for verification. 8. Plot the framework to scale, add details, and finally ink and finish the plan."},
      {q:"What is an offset? Explain perpendicular and oblique offsets with sketches.", marks:5, hint:"An offset is a lateral measurement from a chain line to locate a detail. A perpendicular offset is taken at 90 degrees to the chain line, set out by eye, optical square or cross staff; it needs only one measurement and is used for short offsets. An oblique offset is taken at any convenient angle and requires two measurements from two known points on the chain line; it is used when the object is far from the line or the corner is important."},
      {q:"List the errors in chain surveying and explain how they are corrected.", marks:5, hint:"Personal errors: wrong reading, wrong booking, careless holding — avoided by care and checking. Instrumental errors: chain too long or too short, bent links — corrected by the formula, true length = measured length x (wrong length / true length). Natural errors: temperature variation, sag, slope, pull — corrected by applying corrections for temperature, sag, slope and standardisation."},
      {q:"Describe the instruments used in chain surveying and their functions.", marks:5, hint:"Chain (20 m/30 m, distance), tape (offsets/detail), arrows (mark chain lengths), ranging rods (mark stations, ranging), line ranger (align intermediate points), cross staff/optical square (right angles), plumb bob (transfer points vertically), pegs (mark stations). Mention tallies on the chain."},
      {q:"Explain the obstacles in chain surveying and methods to overcome them.", marks:10, hint:"Three cases: (1) ranging obstructed but chaining free (hill) — reciprocal ranging; (2) chaining obstructed but vision free (river) — similar triangles, random line; (3) both obstructed (building) — rectangular/parallel offsets method. Draw a neat sketch for each and give the principle used."}
    ];
