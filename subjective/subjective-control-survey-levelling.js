/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Control Survey - Unit 4: Levelling =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};

window.EXTRA["Levelling"] = window.EXTRA["Levelling"] || {};
window.EXTRA["Levelling"].sub = [
      {q:"Define the following terms: bench mark, reduced level, back sight, fore sight and change point.", marks:10, hint:"Bench mark: a permanent point of known elevation above a datum, used as a reference for levelling. Reduced level: the height of a point above or below the assumed datum. Back sight: the first staff reading taken after setting up the instrument, on a point of known reduced level; it is added to the RL to give the height of instrument. Fore sight: the last staff reading taken before shifting the instrument, on a point whose RL is to be determined; it is subtracted from the height of instrument. Change point: a point on which both a fore sight and a back sight are taken, enabling the instrument to be moved forward."},
      {q:"Explain the height of instrument method and the rise and fall method of reducing levels.", marks:10, hint:"Height of instrument method: HI = RL of the point + back sight; RL of any other point = HI - the staff reading on that point. It is quick and suitable when many intermediate sights are taken, but it does not check the intermediate sights. Arithmetic check: sum of BS - sum of FS = last RL - first RL. Rise and fall method: the difference between consecutive staff readings is found; a smaller reading means a rise and a larger reading means a fall; the RL of each point is obtained by adding the rise or subtracting the fall from the previous RL. It is slower but checks every reading. Arithmetic check: sum of BS - sum of FS = sum of rises - sum of falls = last RL - first RL. Both should be presented in a proper level book format."},
      {q:"What is a contour? State its uses in engineering and land work.", marks:5, hint:"A contour is an imaginary line on the ground joining points of equal elevation, and its projection on a map is a contour line. Uses: to study the general shape and slope of the ground; to select suitable sites for roads, canals, reservoirs and buildings; to compute the capacity of a reservoir and quantities of earthwork in cutting and filling; to determine the intervisibility between two points; to draw sections and profiles along any line; and to plan drainage and irrigation layouts."},
      {q:"Reduce these levels by the height of instrument method: BS 1.250 on BM of RL 100.000; IS 2.100 and 1.750; FS 0.950. Find all RLs and apply the check.", marks:5, hint:"HI = 100.000+1.250 = 101.250. RLs: 101.250−2.100 = 99.150; 101.250−1.750 = 99.500; 101.250−0.950 = 100.300. Check: ΣBS−ΣFS = 1.250−0.950 = 0.300 = 100.300−100.000 ✓."},
      {q:"Explain the sources of error in levelling and the precautions to minimise them.", marks:10, hint:"Instrumental: collimation error (two-peg test), staff graduation faults. Personal: bubble not centred, parallax, wrong readings, staff not vertical (use level). Natural: curvature/refraction (limit sight to ~100 m, balance BS/FS), wind, heat shimmer, settlement of tripod/change point. Precautions: testing, balanced sights, shaded instrument, firm change points."}
    ];
