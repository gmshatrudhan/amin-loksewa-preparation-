/* ================= MCQ QUESTIONS - Control Survey - Unit 2: Traverse and Triangulation =================
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

// ── ✏️ EDIT HERE - Unit: "Traverse and Triangulation" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Traverse and Triangulation"] = window.EXTRA["Traverse and Triangulation"] || {};
window.EXTRA["Traverse and Triangulation"].mcq = [
      {q:"A traverse which starts and ends at the same point is called a:", o:["Open traverse", "Closed traverse", "Link traverse", "Free traverse"], a:1, e:"A closed traverse returns to its starting point or ends at a point of known coordinates, so a check on the accuracy of the work is possible. An open traverse provides no such check."},
      {q:"For a closed traverse of n sides, the sum of the interior angles should equal:", o:["(2n - 4) x 90 degrees", "(n - 2) x 90 degrees", "360 degrees always", "180 degrees"], a:0, e:"The sum of the interior angles of a closed polygon of n sides is (2n - 4) x 90 degrees, which is the same as (n - 2) x 180 degrees. This provides the angular check."},
      {q:"In a closed traverse the algebraic sum of latitudes is +0.50 m and of departures is -0.50 m. The linear error of closure is approximately:", o:["0.50 m", "0.71 m", "1.00 m", "0.25 m"], a:1, e:"Error of closure e = sqrt of the sum of the squares = sqrt(0.50 squared + 0.50 squared) = sqrt(0.50) = 0.71 m."},
      {q:"The Bowditch rule for adjusting a traverse distributes the closing error in proportion to:", o:["The square of the length", "The length of each line", "The angles only", "The number of stations only"], a:1, e:"The Bowditch or compass rule assumes that errors in linear and angular measurements are equally liable, and distributes the closing error in proportion to the length of each line."},
      {q:"Triangulation is based on the measurement of:", o:["Only distances", "Angles, with a small number of measured base lines", "Only levels", "Only bearings"], a:1, e:"In triangulation a network of connected triangles is formed; the angles are measured precisely and only a few base lines are measured, the remaining sides being computed by the sine rule."}
    ];
