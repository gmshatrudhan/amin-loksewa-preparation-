/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Control Survey - Unit 3: GNSS =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};

window.EXTRA["GNSS"] = window.EXTRA["GNSS"] || {};
window.EXTRA["GNSS"].sub = [
      {q:"Explain the working principle of GNSS positioning.", marks:10, hint:"Each satellite continuously transmits a signal containing its precise position and the exact time of transmission. The receiver notes the time of reception and computes the travel time, which multiplied by the velocity of light gives the range, called a pseudorange because it contains the receiver clock error. With observations to at least four satellites, four equations in four unknowns (X, Y, Z and the clock error) can be solved by trilateration, giving the three dimensional position of the receiver. Accuracy is improved by differential techniques such as DGPS and RTK, which apply corrections from a base station of known coordinates, and by carrier phase observation and post processing."},
      {q:"State the advantages of GNSS over conventional surveying methods.", marks:5, hint:"Intervisibility between stations is not required. It works in all weather, by day or night. Very long distances can be covered rapidly with high accuracy. It gives three dimensional coordinates directly in a single global reference system. It requires fewer personnel and less field time. Data is recorded digitally and can be processed and integrated with GIS immediately."},
      {q:"What are the main sources of error in GNSS observation and how are they reduced?", marks:5, hint:"Ionospheric and tropospheric delays, reduced by using dual frequency receivers and atmospheric models; multipath, caused by signal reflection, reduced by careful site selection and choke ring antennas; satellite and receiver clock errors, removed by differencing techniques; orbital or ephemeris errors, reduced by using precise ephemerides; and poor satellite geometry, indicated by a high dilution of precision value, avoided by observing when more satellites are well distributed in the sky."},
      {q:"Describe the three segments of GNSS with the function of each.", marks:5, hint:"Space: satellites broadcast ranging signals and time. Control: ground stations track, compute orbits/clocks, upload data. User: receivers and software compute position, velocity and time from the signals."},
      {q:"Explain DGPS and RTK methods and their applications in cadastral and control surveys.", marks:10, hint:"DGPS: code-based corrections from a base — sub-metre, for GIS/detail. RTK: carrier-phase corrections via radio/NTRIP — 1–2 cm real time, for control points, boundary capture and setting out. Mention base-rover setup, initialization, and limits (baseline length, sky visibility)."}
    ];
