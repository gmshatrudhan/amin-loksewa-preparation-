/* ================= MCQ QUESTIONS - Mathematics and Instruments - Unit 5: Instruments & Its Maintenance =================
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

// ── ✏️ EDIT HERE - Unit: "Instruments & Its Maintenance" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Instruments & Its Maintenance"] = window.EXTRA["Instruments & Its Maintenance"] || {};
window.EXTRA["Instruments & Its Maintenance"].mcq = [
      {q:"The temporary adjustment of a theodolite at a station consists of:", o:["Setting up, centring, levelling and focusing", "Only removing the collimation error", "The two peg test", "Cleaning the lenses"], a:0, e:"Temporary adjustments are made at every station: setting up the tripod, centring over the station mark, levelling the instrument and focusing the eyepiece and object glass to remove parallax. Permanent adjustments correct instrumental errors."},
      {q:"A total station is a combination of an electronic theodolite and:", o:["A plane table", "An electronic distance measuring device", "A compass", "A chain"], a:1, e:"A total station combines an electronic theodolite for measuring angles with an EDM for measuring distances, together with an on board computer for computing and storing coordinates."},
      {q:"The instrument used for measuring horizontal and vertical angles is the:", o:["Chain", "Theodolite", "Ranging rod", "Arrow"], a:1, e:"The theodolite is the standard instrument for the precise measurement of horizontal and vertical angles in surveying."},
      {q:"The two peg test is performed to check:", o:["The centring of a theodolite", "The collimation error of a level", "The length of a chain", "The magnetic declination"], a:1, e:"The two peg test checks whether the line of collimation of a level is truly horizontal when the bubble is centred, that is, whether a collimation error exists."},
      {q:"Parallax in a telescope is removed by:", o:["Levelling the instrument", "Proper focusing of the eyepiece and object glass", "Centring the instrument", "Changing the tripod"], a:1, e:"Parallax occurs when the image does not fall exactly in the plane of the cross hairs. It is removed by first focusing the eyepiece on the cross hairs and then focusing the object glass on the object."}
    ];
