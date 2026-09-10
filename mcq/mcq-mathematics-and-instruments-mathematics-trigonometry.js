/* ================= MCQ QUESTIONS - Mathematics and Instruments - Unit 3: Mathematics (Trigonometry) =================
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

// ── ✏️ EDIT HERE - Unit: "Mathematics (Trigonometry)" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Mathematics (Trigonometry)"] = window.EXTRA["Mathematics (Trigonometry)"] || {};
window.EXTRA["Mathematics (Trigonometry)"].mcq = [
      {q:"The value of sin 30 degrees is:", o:["1/2", "1", "0", "root 3 / 2"], a:0, e:"sin 30 degrees = 1/2. Similarly cos 30 = root 3 / 2 and tan 30 = 1 / root 3."},
      {q:"In a right angled triangle, tan theta is equal to:", o:["opposite / hypotenuse", "adjacent / hypotenuse", "opposite / adjacent", "hypotenuse / opposite"], a:2, e:"tan theta = perpendicular / base, that is the side opposite the angle divided by the side adjacent to it."},
      {q:"The value of sin squared theta plus cos squared theta is:", o:["0", "1", "2", "theta"], a:1, e:"This is the fundamental trigonometric identity: sin squared theta + cos squared theta = 1 for all values of theta."},
      {q:"A sloping distance of 100 m is measured along a line inclined at 5 degrees to the horizontal. The horizontal distance is approximately:", o:["95.00 m", "99.62 m", "100.38 m", "104.00 m"], a:1, e:"Horizontal distance = slope distance x cos theta = 100 x cos 5 degrees = 100 x 0.9962 = 99.62 m."},
      {q:"The angle of elevation of the top of a tower from a point 30 m from its base is 45 degrees. The height of the tower is:", o:["15 m", "30 m", "45 m", "60 m"], a:1, e:"tan 45 = height / 30. Since tan 45 = 1, the height = 30 m."}
    ];
