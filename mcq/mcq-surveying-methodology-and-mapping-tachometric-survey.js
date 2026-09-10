/* ================= MCQ QUESTIONS - Surveying Methodology and Mapping - Unit 4: Tachometric Survey =================
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

// ── ✏️ EDIT HERE - Unit: "Tachometric Survey" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Tachometric Survey"] = window.EXTRA["Tachometric Survey"] || {};
window.EXTRA["Tachometric Survey"].mcq = [
      {q:"In tacheometry, the multiplying constant of an ordinary tacheometer is usually:", o:["10", "50", "100", "200"], a:2, e:"For a theodolite fitted with a stadia diaphragm, the multiplying constant f/i is normally 100. The additive constant is about 0.1 to 0.3 m for external focusing and nearly zero for internal focusing telescopes."},
      {q:"Tacheometry is used to determine:", o:["Only horizontal distance", "Horizontal distance and elevation", "Only vertical angle", "Only bearing"], a:1, e:"Tacheometry determines horizontal distances and relative elevations indirectly from staff intercepts and angles, without chaining. It is especially useful in rough or steep terrain."},
      {q:"In the stadia method, the staff intercept is the difference between:", o:["Two horizontal angles", "Upper and lower stadia hair readings", "Two vertical angles", "Two bearings"], a:1, e:"The staff intercept s is the difference between the upper and lower stadia hair readings on the levelling staff. The distance is then D = K.s + C."},
      {q:"The formula for horizontal distance in the stadia system with a horizontal line of sight is:", o:["D = K.s + C", "D = s / K", "D = K + s", "D = K.s.tan θ"], a:0, e:"With a horizontal sight, D = K.s + C, where K is the multiplying constant (usually 100), s is the staff intercept and C is the additive constant."},
      {q:"Tacheometric surveying is most suitable for:", o:["Flat land with easy chaining", "Rough, steep or broken country", "Underground work", "Very high precision geodetic work"], a:1, e:"Tacheometry is preferred where direct chaining is difficult or inaccurate, such as steep slopes, broken ground, water bodies and rough country."}
    ];
