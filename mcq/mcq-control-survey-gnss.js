/* ================= MCQ QUESTIONS - Control Survey - Unit 3: GNSS =================
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

// ── ✏️ EDIT HERE - Unit: "GNSS" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["GNSS"] = window.EXTRA["GNSS"] || {};
window.EXTRA["GNSS"].mcq = [
      {q:"GNSS stands for:", o:["Global Navigation Satellite System", "General Network Survey System", "Geodetic National Survey Standard", "Ground Navigation Support System"], a:0, e:"GNSS is the general term for satellite navigation systems that give global coverage, including GPS (USA), GLONASS (Russia), Galileo (Europe) and BeiDou (China)."},
      {q:"The minimum number of satellites required for a three dimensional position fix is:", o:["Two", "Three", "Four", "Six"], a:2, e:"Three satellites give the three coordinates, and a fourth is required to solve for the receiver clock error. Therefore a minimum of four satellites is needed for a 3D fix."},
      {q:"The GNSS technique that gives centimetre level accuracy in real time is:", o:["Standalone positioning", "DGPS", "RTK", "Handheld navigation"], a:2, e:"Real Time Kinematic (RTK) uses carrier phase observations together with corrections transmitted from a base station to a rover, giving centimetre level accuracy in real time."},
      {q:"The principle used by GNSS to determine position is:", o:["Triangulation of angles", "Trilateration using measured ranges", "Levelling", "Photogrammetry"], a:1, e:"GNSS uses trilateration: the distance from the receiver to each satellite is computed from the signal travel time, and the intersection of the resulting spheres fixes the position."},
      {q:"Which of the following is NOT a source of error in GNSS observation?", o:["Ionospheric delay", "Multipath", "Chain sag", "Satellite clock error"], a:2, e:"Chain sag is an error in tape or chain measurement, not in GNSS. GNSS errors include ionospheric and tropospheric delay, multipath, satellite and receiver clock errors, orbital errors and poor satellite geometry."}
    ];
