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
      {q:"Levelling is the process of determining:", o:["Areas of parcels", "Horizontal distances", "Relative heights or elevations of points", "Horizontal angles"], a:2, e:"Levelling determines the difference in elevation between points, or their heights above a datum such as mean sea level."},
      {q:"The reading taken on a point of known elevation is called the:", o:["Intermediate sight", "Change point", "Fore sight", "Back sight"], a:3, e:"A back sight is the first reading taken after setting up the instrument, on a point of known elevation such as a bench mark or change point. It is added to the RL to obtain the height of instrument."},
      {q:"A fixed point of known elevation above a datum is called a:", o:["Bench mark", "Turning point", "Station", "Change point"], a:0, e:"A bench mark is a permanent point of known reduced level referred to a datum, used as a starting or checking point for levelling."},
      {q:"In the rise and fall method, the arithmetic check is:", o:["Number of stations = number of readings", "Sum of BS - sum of FS = sum of rise - sum of fall = last RL - first RL", "Sum of BS = sum of FS", "Sum of all RL = 0"], a:1, e:"The rise and fall method has three checks that must all agree: the difference between the sum of back sights and fore sights, the difference between the sum of rises and falls, and the difference between the last and first reduced levels."},
      {q:"A point on which both a fore sight and a back sight are taken is called a:", o:["Station", "Bench mark", "Change point", "Datum"], a:2, e:"A change point or turning point is a point on which a fore sight is taken before shifting the instrument and a back sight after shifting, so that the levelling can be carried forward."},
      {q:"The elevation of a point above mean sea level is called its:", o:["Reduced level", "Back sight", "Fore sight", "Height of instrument"], a:0, e:"Reduced level (RL) is height above the datum (mean sea level)."},
      {q:"The height of the line of collimation above the datum is called the:", o:["Height of instrument", "Bench mark", "Change point", "Reduced level"], a:0, e:"HI = RL of BM + back sight; unknown RLs = HI − (IS/FS)."},
      {q:"In levelling, the first reading taken on a change point is the:", o:["Intermediate sight", "Fore sight", "Zero reading", "Back sight"], a:1, e:"At a change point the fore sight is read first, then the level moves and a back sight is taken to continue."},
      {q:"The arithmetic check for the height of instrument method is:", o:["Number of BS equals number of FS", "ΣBS − ΣFS = last RL − first RL", "ΣBS + ΣFS = ΣIS", "Σrise = Σfall always"], a:1, e:"The same overall check as rise-and-fall: difference of sight sums equals difference of end RLs."},
      {q:"The surface of still water is an example of a:", o:["Vertical plane", "Steep slope", "Level surface", "Horizontal line"], a:2, e:"A level surface is everywhere perpendicular to gravity; still water takes this shape (curved with the earth)."},
      {q:"Profile levelling is carried out to:", o:["Test instruments", "Fix property corners", "Find elevations along a centre line such as a road", "Measure bearings"], a:2, e:"Longitudinal sections from profile levelling guide road, canal and pipeline gradients; cross-sections show side slopes."},
      {q:"Reciprocal levelling is used to:", o:["Train beginners", "Speed up the work", "Double the staff length", "Eliminate collimation and curvature errors across wide gaps"], a:3, e:"Observing from both banks of a river and averaging cancels collimation, curvature and refraction errors."},
      {q:"Contours of different elevations:", o:["Always cross in valleys", "Meet at every summit", "Are always circular", "Never cross except at an overhanging cliff"], a:3, e:"Contours are level lines: they close on themselves, never split, and crowd together on steep ground."}
    ];
