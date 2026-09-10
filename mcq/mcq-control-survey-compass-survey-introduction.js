/* ================= MCQ QUESTIONS - Control Survey - Unit 1: Compass Survey Introduction =================
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

// ── ✏️ EDIT HERE - Unit: "Compass Survey Introduction" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Compass Survey Introduction"] = window.EXTRA["Compass Survey Introduction"] || {};
window.EXTRA["Compass Survey Introduction"].mcq = [
      {q:"In the Whole Circle Bearing system, bearings are measured:", o:["From 0 to 90 degrees in each quadrant", "Clockwise from north from 0 to 360 degrees", "Anticlockwise from south", "From east only"], a:1, e:"In the WCB system every bearing is measured clockwise from magnetic north, from 0 to 360 degrees. The quadrantal system measures from 0 to 90 degrees from north or south."},
      {q:"The horizontal angle between the true meridian and the magnetic meridian is called:", o:["Dip", "Declination", "Local attraction", "Bearing"], a:1, e:"Magnetic declination is the horizontal angle between the true (geographic) meridian and the magnetic meridian at a place. It varies with place and time."},
      {q:"If the fore bearing of a line is 60 degrees, its back bearing is:", o:["120 degrees", "240 degrees", "300 degrees", "60 degrees"], a:1, e:"Back bearing = fore bearing + 180 degrees when the FB is less than 180 degrees. So BB = 60 + 180 = 240 degrees."},
      {q:"Local attraction is detected when:", o:["The difference between FB and BB of a line is exactly 180 degrees", "The difference between FB and BB is not 180 degrees", "The compass is level", "The needle is free"], a:1, e:"If the difference between the fore bearing and back bearing of a line is not exactly 180 degrees, one or both stations are affected by local attraction caused by nearby magnetic material."},
      {q:"The whole circle bearing 210 degrees expressed as a reduced bearing is:", o:["N30E", "S30W", "S30E", "N30W"], a:1, e:"For a WCB between 180 and 270 degrees, RB = WCB - 180, in the south west quadrant. So RB = 210 - 180 = 30, that is S30W."}
    ];
