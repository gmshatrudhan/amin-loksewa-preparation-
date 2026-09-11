/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Mathematics and Instruments - Unit 3: Mathematics (Trigonometry) =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Mathematics (Trigonometry)" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Mathematics (Trigonometry)"] = window.EXTRA["Mathematics (Trigonometry)"] || {};
window.EXTRA["Mathematics (Trigonometry)"].sub = [
      {q:"Define the six trigonometric ratios with reference to a right angled triangle.", marks:5, hint:"For an acute angle theta in a right angled triangle: sin theta = perpendicular / hypotenuse; cos theta = base / hypotenuse; tan theta = perpendicular / base; cosec theta = hypotenuse / perpendicular; sec theta = hypotenuse / base; cot theta = base / perpendicular. A neat labelled figure showing the perpendicular, base and hypotenuse is required."},
      {q:"The angle of elevation of the top of a tower from a point 30 m away on level ground is 45 degrees. Find the height of the tower.", marks:5, hint:"Let the height be h. Then tan 45 = h / 30. Since tan 45 = 1, h = 30 x 1 = 30 m. Therefore the height of the tower is 30 m. If the height of the instrument is given, it must be added to this value."},
      {q:"Prove that (1 - cos squared theta) / sin squared theta = 1 and state its use in surveying.", marks:10, hint:"We know that sin squared theta + cos squared theta = 1, therefore 1 - cos squared theta = sin squared theta. Substituting, (1 - cos squared theta)/ sin squared theta = sin squared theta / sin squared theta = 1. Hence proved. Use in surveying: trigonometric identities are used to reduce slope distances to horizontal, to compute heights and distances in trigonometric levelling, to calculate latitudes and departures in traverse computation, and to determine the difference in elevation from vertical angles."},
      {q:"A ladder 10 m long makes an angle of 60° with the ground. How high does it reach up the wall?", marks:5, hint:"Height = 10×sin60° = 10×(√3/2) = 5√3 ≈ 8.66 m. Base distance = 10×cos60° = 5 m."},
      {q:"Prove that 1 + tan²(theta) = sec²(theta), and find theta (acute) if tan(theta) = 1.", marks:10, hint:"Divide sin²+cos² = 1 by cos²: tan²+1 = sec². If tan θ = 1, θ = 45°. Used to convert between ratios in height/distance problems."}
    ];
