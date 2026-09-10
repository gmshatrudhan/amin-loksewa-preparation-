/* ================= MCQ QUESTIONS - Mathematics and Instruments - Unit 2: Mathematics (Algebra & Geometry) =================
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

// ── ✏️ EDIT HERE - Unit: "Mathematics (Algebra & Geometry)" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Mathematics (Algebra & Geometry)"] = window.EXTRA["Mathematics (Algebra & Geometry)"] || {};
window.EXTRA["Mathematics (Algebra & Geometry)"].mcq = [
      {q:"If 2x + 5 = 17, then x is:", o:["4", "5", "6", "7"], a:2, e:"2x = 17 - 5 = 12, so x = 6."},
      {q:"The sum of the interior angles of a triangle is:", o:["90 degrees", "180 degrees", "270 degrees", "360 degrees"], a:1, e:"The three interior angles of any plane triangle always add up to 180 degrees."},
      {q:"The area of a circle of radius 7 cm (taking pi = 22/7) is:", o:["154 sq cm", "144 sq cm", "132 sq cm", "121 sq cm"], a:0, e:"Area = pi r squared = (22/7) x 7 x 7 = 154 sq cm."},
      {q:"The area of a triangle with sides 13 m, 14 m and 15 m is:", o:["80 sq m", "84 sq m", "88 sq m", "90 sq m"], a:1, e:"s = (13 + 14 + 15)/2 = 21. By Heron's formula, area = sqrt(21 x 8 x 7 x 6) = sqrt(7056) = 84 sq m."},
      {q:"In a right angled triangle the side opposite the right angle is called the:", o:["Base", "Perpendicular", "Hypotenuse", "Median"], a:2, e:"The hypotenuse is the longest side and lies opposite the right angle. By Pythagoras theorem, hypotenuse squared equals the sum of the squares of the other two sides."}
    ];
