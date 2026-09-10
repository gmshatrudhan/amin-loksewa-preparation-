/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Control Survey - Unit 2: Traverse and Triangulation =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Traverse and Triangulation" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Traverse and Triangulation"] = window.EXTRA["Traverse and Triangulation"] || {};
window.EXTRA["Traverse and Triangulation"].sub = [
      {q:"Explain the field procedure of a closed traverse survey.", marks:10, hint:"1. Reconnaissance of the area and selection of traverse stations that are intervisible and on firm ground. 2. Marking and referencing the stations with pegs. 3. Measurement of the included or deflection angles at each station with a theodolite or total station, using both faces to eliminate instrumental error. 4. Measurement of the length of each traverse leg by tape, EDM or total station. 5. Observation of the bearing of at least one line to orient the traverse. 6. Angular check: the sum of interior angles must equal (2n - 4) x 90 degrees; the angular error is distributed equally. 7. Computation of latitudes and departures, determination of the closing error and its adjustment by the Bowditch or transit rule, and finally computation of coordinates and area."},
      {q:"What is the closing error in a traverse? How is it adjusted?", marks:5, hint:"In a closed traverse the algebraic sum of the latitudes and the algebraic sum of the departures should each be zero. If they are not, the resultant of the two sums is the linear error of closure, e = sqrt of the sum of their squares. The relative precision is expressed as e divided by the total perimeter. Adjustment: by the Bowditch rule, the correction to the latitude of a line equals the total error in latitude multiplied by the length of that line divided by the perimeter, and similarly for departures. The transit rule distributes the error in proportion to the latitude and departure of each line and is used when angles are measured more precisely than distances."},
      {q:"Differentiate between traversing and triangulation.", marks:5, hint:"Traversing: a series of connected lines whose lengths and directions are both measured; suitable for built up areas, narrow strips and where visibility is limited; requires less precise instruments; accuracy is moderate. Triangulation: a network of triangles in which all angles are measured precisely and only a few base lines are measured, the remaining sides being computed; suitable for large areas and for establishing national control; requires very precise instruments and intervisible, elevated stations; accuracy is high."}
    ];
