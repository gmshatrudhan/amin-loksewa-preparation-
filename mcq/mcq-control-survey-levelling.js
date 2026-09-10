/* ================= MCQ QUESTIONS - Control Survey - Unit 4: Levelling =================
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

// ── ✏️ EDIT HERE - Unit: "Levelling" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Levelling"] = window.EXTRA["Levelling"] || {};
window.EXTRA["Levelling"].mcq = [
      {q:"Levelling is the process of determining:", o:["Horizontal distances", "Relative heights or elevations of points", "Horizontal angles", "Areas of parcels"], a:1, e:"Levelling determines the difference in elevation between points, or their heights above a datum such as mean sea level."},
      {q:"The reading taken on a point of known elevation is called the:", o:["Fore sight", "Back sight", "Intermediate sight", "Change point"], a:1, e:"A back sight is the first reading taken after setting up the instrument, on a point of known elevation such as a bench mark or change point. It is added to the RL to obtain the height of instrument."},
      {q:"A fixed point of known elevation above a datum is called a:", o:["Change point", "Bench mark", "Turning point", "Station"], a:1, e:"A bench mark is a permanent point of known reduced level referred to a datum, used as a starting or checking point for levelling."},
      {q:"In the rise and fall method, the arithmetic check is:", o:["Sum of BS - sum of FS = sum of rise - sum of fall = last RL - first RL", "Sum of BS = sum of FS", "Sum of all RL = 0", "Number of stations = number of readings"], a:0, e:"The rise and fall method has three checks that must all agree: the difference between the sum of back sights and fore sights, the difference between the sum of rises and falls, and the difference between the last and first reduced levels."},
      {q:"A point on which both a fore sight and a back sight are taken is called a:", o:["Bench mark", "Change point", "Datum", "Station"], a:1, e:"A change point or turning point is a point on which a fore sight is taken before shifting the instrument and a back sight after shifting, so that the levelling can be carried forward."}
    ];
