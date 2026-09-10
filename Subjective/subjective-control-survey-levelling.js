/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Control Survey - Unit 4: Levelling =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Levelling" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Levelling"] = window.EXTRA["Levelling"] || {};
window.EXTRA["Levelling"].sub = [
      {q:"Define the following terms: bench mark, reduced level, back sight, fore sight and change point.", marks:10, hint:"Bench mark: a permanent point of known elevation above a datum, used as a reference for levelling. Reduced level: the height of a point above or below the assumed datum. Back sight: the first staff reading taken after setting up the instrument, on a point of known reduced level; it is added to the RL to give the height of instrument. Fore sight: the last staff reading taken before shifting the instrument, on a point whose RL is to be determined; it is subtracted from the height of instrument. Change point: a point on which both a fore sight and a back sight are taken, enabling the instrument to be moved forward."},
      {q:"Explain the height of instrument method and the rise and fall method of reducing levels.", marks:10, hint:"Height of instrument method: HI = RL of the point + back sight; RL of any other point = HI - the staff reading on that point. It is quick and suitable when many intermediate sights are taken, but it does not check the intermediate sights. Arithmetic check: sum of BS - sum of FS = last RL - first RL. Rise and fall method: the difference between consecutive staff readings is found; a smaller reading means a rise and a larger reading means a fall; the RL of each point is obtained by adding the rise or subtracting the fall from the previous RL. It is slower but checks every reading. Arithmetic check: sum of BS - sum of FS = sum of rises - sum of falls = last RL - first RL. Both should be presented in a proper level book format."},
      {q:"What is a contour? State its uses in engineering and land work.", marks:5, hint:"A contour is an imaginary line on the ground joining points of equal elevation, and its projection on a map is a contour line. Uses: to study the general shape and slope of the ground; to select suitable sites for roads, canals, reservoirs and buildings; to compute the capacity of a reservoir and quantities of earthwork in cutting and filling; to determine the intervisibility between two points; to draw sections and profiles along any line; and to plan drainage and irrigation layouts."}
    ];
