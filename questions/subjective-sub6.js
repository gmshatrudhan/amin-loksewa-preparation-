/* ================= SUBJECTIVE (WRITTEN) QUESTIONS — SUB6: Control Survey =================
 * Units in this file:
 *     - Compass Survey Introduction
 *     - Traverse and Triangulation
 *     - GNSS
 *     - Levelling
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit titles in square brackets.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Compass Survey Introduction" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Compass Survey Introduction"] = window.EXTRA["Compass Survey Introduction"] || {};
window.EXTRA["Compass Survey Introduction"].sub = [
      {q:"Define bearing and differentiate between the whole circle bearing and reduced bearing systems.", marks:10, hint:"A bearing is the horizontal angle which a survey line makes with a reference meridian. WCB system: measured clockwise from north from 0 to 360 degrees, used with the prismatic compass, only one letter free notation. Reduced or quadrantal bearing: measured from north or south, eastward or westward, from 0 to 90 degrees, used with the surveyor's compass, written as N30E or S45W. Conversion: for WCB 0 to 90, RB = WCB (NE); 90 to 180, RB = 180 - WCB (SE); 180 to 270, RB = WCB - 180 (SW); 270 to 360, RB = 360 - WCB (NW)."},
      {q:"What is local attraction? How is it detected and corrected?", marks:5, hint:"Local attraction is the deflection of the magnetic needle from the magnetic meridian caused by nearby magnetic material such as iron pipes, electric poles, rails, steel structures or magnetic rocks. Detection: compute the difference between the fore bearing and back bearing of each line; if it is not exactly 180 degrees, local attraction exists at one or both stations. Correction: identify a line whose FB and BB differ by exactly 180 degrees, so both its stations are free from attraction; starting from those stations, apply the necessary correction progressively to the bearings observed at the affected stations."},
      {q:"Convert the whole circle bearing 210 degrees into the reduced bearing system, showing your working.", marks:5, hint:"The WCB of 210 degrees lies between 180 and 270 degrees, which is the south west quadrant. The reduced bearing = WCB - 180 = 210 - 180 = 30 degrees. Therefore the reduced bearing is S30W."}
    ];

// ── ✏️ EDIT HERE - Unit: "Traverse and Triangulation" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Traverse and Triangulation"] = window.EXTRA["Traverse and Triangulation"] || {};
window.EXTRA["Traverse and Triangulation"].sub = [
      {q:"Explain the field procedure of a closed traverse survey.", marks:10, hint:"1. Reconnaissance of the area and selection of traverse stations that are intervisible and on firm ground. 2. Marking and referencing the stations with pegs. 3. Measurement of the included or deflection angles at each station with a theodolite or total station, using both faces to eliminate instrumental error. 4. Measurement of the length of each traverse leg by tape, EDM or total station. 5. Observation of the bearing of at least one line to orient the traverse. 6. Angular check: the sum of interior angles must equal (2n - 4) x 90 degrees; the angular error is distributed equally. 7. Computation of latitudes and departures, determination of the closing error and its adjustment by the Bowditch or transit rule, and finally computation of coordinates and area."},
      {q:"What is the closing error in a traverse? How is it adjusted?", marks:5, hint:"In a closed traverse the algebraic sum of the latitudes and the algebraic sum of the departures should each be zero. If they are not, the resultant of the two sums is the linear error of closure, e = sqrt of the sum of their squares. The relative precision is expressed as e divided by the total perimeter. Adjustment: by the Bowditch rule, the correction to the latitude of a line equals the total error in latitude multiplied by the length of that line divided by the perimeter, and similarly for departures. The transit rule distributes the error in proportion to the latitude and departure of each line and is used when angles are measured more precisely than distances."},
      {q:"Differentiate between traversing and triangulation.", marks:5, hint:"Traversing: a series of connected lines whose lengths and directions are both measured; suitable for built up areas, narrow strips and where visibility is limited; requires less precise instruments; accuracy is moderate. Triangulation: a network of triangles in which all angles are measured precisely and only a few base lines are measured, the remaining sides being computed; suitable for large areas and for establishing national control; requires very precise instruments and intervisible, elevated stations; accuracy is high."}
    ];

// ── ✏️ EDIT HERE - Unit: "GNSS" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["GNSS"] = window.EXTRA["GNSS"] || {};
window.EXTRA["GNSS"].sub = [
      {q:"Explain the working principle of GNSS positioning.", marks:10, hint:"Each satellite continuously transmits a signal containing its precise position and the exact time of transmission. The receiver notes the time of reception and computes the travel time, which multiplied by the velocity of light gives the range, called a pseudorange because it contains the receiver clock error. With observations to at least four satellites, four equations in four unknowns (X, Y, Z and the clock error) can be solved by trilateration, giving the three dimensional position of the receiver. Accuracy is improved by differential techniques such as DGPS and RTK, which apply corrections from a base station of known coordinates, and by carrier phase observation and post processing."},
      {q:"State the advantages of GNSS over conventional surveying methods.", marks:5, hint:"Intervisibility between stations is not required. It works in all weather, by day or night. Very long distances can be covered rapidly with high accuracy. It gives three dimensional coordinates directly in a single global reference system. It requires fewer personnel and less field time. Data is recorded digitally and can be processed and integrated with GIS immediately."},
      {q:"What are the main sources of error in GNSS observation and how are they reduced?", marks:5, hint:"Ionospheric and tropospheric delays, reduced by using dual frequency receivers and atmospheric models; multipath, caused by signal reflection, reduced by careful site selection and choke ring antennas; satellite and receiver clock errors, removed by differencing techniques; orbital or ephemeris errors, reduced by using precise ephemerides; and poor satellite geometry, indicated by a high dilution of precision value, avoided by observing when more satellites are well distributed in the sky."}
    ];

// ── ✏️ EDIT HERE - Unit: "Levelling" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Levelling"] = window.EXTRA["Levelling"] || {};
window.EXTRA["Levelling"].sub = [
      {q:"Define the following terms: bench mark, reduced level, back sight, fore sight and change point.", marks:10, hint:"Bench mark: a permanent point of known elevation above a datum, used as a reference for levelling. Reduced level: the height of a point above or below the assumed datum. Back sight: the first staff reading taken after setting up the instrument, on a point of known reduced level; it is added to the RL to give the height of instrument. Fore sight: the last staff reading taken before shifting the instrument, on a point whose RL is to be determined; it is subtracted from the height of instrument. Change point: a point on which both a fore sight and a back sight are taken, enabling the instrument to be moved forward."},
      {q:"Explain the height of instrument method and the rise and fall method of reducing levels.", marks:10, hint:"Height of instrument method: HI = RL of the point + back sight; RL of any other point = HI - the staff reading on that point. It is quick and suitable when many intermediate sights are taken, but it does not check the intermediate sights. Arithmetic check: sum of BS - sum of FS = last RL - first RL. Rise and fall method: the difference between consecutive staff readings is found; a smaller reading means a rise and a larger reading means a fall; the RL of each point is obtained by adding the rise or subtracting the fall from the previous RL. It is slower but checks every reading. Arithmetic check: sum of BS - sum of FS = sum of rises - sum of falls = last RL - first RL. Both should be presented in a proper level book format."},
      {q:"What is a contour? State its uses in engineering and land work.", marks:5, hint:"A contour is an imaginary line on the ground joining points of equal elevation, and its projection on a map is a contour line. Uses: to study the general shape and slope of the ground; to select suitable sites for roads, canals, reservoirs and buildings; to compute the capacity of a reservoir and quantities of earthwork in cutting and filling; to determine the intervisibility between two points; to draw sections and profiles along any line; and to plan drainage and irrigation layouts."}
    ];
