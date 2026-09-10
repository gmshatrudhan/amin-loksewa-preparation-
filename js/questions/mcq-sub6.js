/* ================= MCQ QUESTIONS — SUB6: Control Survey =================
 * Units in this file:
 *     - Compass Survey Introduction
 *     - Traverse and Triangulation
 *     - GNSS
 *     - Levelling
 *
 * HOW TO ADD A QUESTION: copy one {q, o, a, e} block, paste it after the last
 * one (with a comma between blocks), and edit the text.
 *   q = question,  o = 4 options,  a = correct option NUMBER (0, 1, 2 or 3),
 *   e = explanation shown after answering.
 * IMPORTANT: do NOT rename the unit titles in square brackets — the app finds
 * questions by matching them exactly.
 */
window.EXTRA = window.EXTRA || {};

window.EXTRA["Compass Survey Introduction"] = window.EXTRA["Compass Survey Introduction"] || {};
window.EXTRA["Compass Survey Introduction"].mcq = [
      {q:"In the Whole Circle Bearing system, bearings are measured:", o:["From 0 to 90 degrees in each quadrant", "Clockwise from north from 0 to 360 degrees", "Anticlockwise from south", "From east only"], a:1, e:"In the WCB system every bearing is measured clockwise from magnetic north, from 0 to 360 degrees. The quadrantal system measures from 0 to 90 degrees from north or south."},
      {q:"The horizontal angle between the true meridian and the magnetic meridian is called:", o:["Dip", "Declination", "Local attraction", "Bearing"], a:1, e:"Magnetic declination is the horizontal angle between the true (geographic) meridian and the magnetic meridian at a place. It varies with place and time."},
      {q:"If the fore bearing of a line is 60 degrees, its back bearing is:", o:["120 degrees", "240 degrees", "300 degrees", "60 degrees"], a:1, e:"Back bearing = fore bearing + 180 degrees when the FB is less than 180 degrees. So BB = 60 + 180 = 240 degrees."},
      {q:"Local attraction is detected when:", o:["The difference between FB and BB of a line is exactly 180 degrees", "The difference between FB and BB is not 180 degrees", "The compass is level", "The needle is free"], a:1, e:"If the difference between the fore bearing and back bearing of a line is not exactly 180 degrees, one or both stations are affected by local attraction caused by nearby magnetic material."},
      {q:"The whole circle bearing 210 degrees expressed as a reduced bearing is:", o:["N30E", "S30W", "S30E", "N30W"], a:1, e:"For a WCB between 180 and 270 degrees, RB = WCB - 180, in the south west quadrant. So RB = 210 - 180 = 30, that is S30W."}
    ];

window.EXTRA["Traverse and Triangulation"] = window.EXTRA["Traverse and Triangulation"] || {};
window.EXTRA["Traverse and Triangulation"].mcq = [
      {q:"A traverse which starts and ends at the same point is called a:", o:["Open traverse", "Closed traverse", "Link traverse", "Free traverse"], a:1, e:"A closed traverse returns to its starting point or ends at a point of known coordinates, so a check on the accuracy of the work is possible. An open traverse provides no such check."},
      {q:"For a closed traverse of n sides, the sum of the interior angles should equal:", o:["(2n - 4) x 90 degrees", "(n - 2) x 90 degrees", "360 degrees always", "180 degrees"], a:0, e:"The sum of the interior angles of a closed polygon of n sides is (2n - 4) x 90 degrees, which is the same as (n - 2) x 180 degrees. This provides the angular check."},
      {q:"In a closed traverse the algebraic sum of latitudes is +0.50 m and of departures is -0.50 m. The linear error of closure is approximately:", o:["0.50 m", "0.71 m", "1.00 m", "0.25 m"], a:1, e:"Error of closure e = sqrt of the sum of the squares = sqrt(0.50 squared + 0.50 squared) = sqrt(0.50) = 0.71 m."},
      {q:"The Bowditch rule for adjusting a traverse distributes the closing error in proportion to:", o:["The square of the length", "The length of each line", "The angles only", "The number of stations only"], a:1, e:"The Bowditch or compass rule assumes that errors in linear and angular measurements are equally liable, and distributes the closing error in proportion to the length of each line."},
      {q:"Triangulation is based on the measurement of:", o:["Only distances", "Angles, with a small number of measured base lines", "Only levels", "Only bearings"], a:1, e:"In triangulation a network of connected triangles is formed; the angles are measured precisely and only a few base lines are measured, the remaining sides being computed by the sine rule."}
    ];

window.EXTRA["GNSS"] = window.EXTRA["GNSS"] || {};
window.EXTRA["GNSS"].mcq = [
      {q:"GNSS stands for:", o:["Global Navigation Satellite System", "General Network Survey System", "Geodetic National Survey Standard", "Ground Navigation Support System"], a:0, e:"GNSS is the general term for satellite navigation systems that give global coverage, including GPS (USA), GLONASS (Russia), Galileo (Europe) and BeiDou (China)."},
      {q:"The minimum number of satellites required for a three dimensional position fix is:", o:["Two", "Three", "Four", "Six"], a:2, e:"Three satellites give the three coordinates, and a fourth is required to solve for the receiver clock error. Therefore a minimum of four satellites is needed for a 3D fix."},
      {q:"The GNSS technique that gives centimetre level accuracy in real time is:", o:["Standalone positioning", "DGPS", "RTK", "Handheld navigation"], a:2, e:"Real Time Kinematic (RTK) uses carrier phase observations together with corrections transmitted from a base station to a rover, giving centimetre level accuracy in real time."},
      {q:"The principle used by GNSS to determine position is:", o:["Triangulation of angles", "Trilateration using measured ranges", "Levelling", "Photogrammetry"], a:1, e:"GNSS uses trilateration: the distance from the receiver to each satellite is computed from the signal travel time, and the intersection of the resulting spheres fixes the position."},
      {q:"Which of the following is NOT a source of error in GNSS observation?", o:["Ionospheric delay", "Multipath", "Chain sag", "Satellite clock error"], a:2, e:"Chain sag is an error in tape or chain measurement, not in GNSS. GNSS errors include ionospheric and tropospheric delay, multipath, satellite and receiver clock errors, orbital errors and poor satellite geometry."}
    ];

window.EXTRA["Levelling"] = window.EXTRA["Levelling"] || {};
window.EXTRA["Levelling"].mcq = [
      {q:"Levelling is the process of determining:", o:["Horizontal distances", "Relative heights or elevations of points", "Horizontal angles", "Areas of parcels"], a:1, e:"Levelling determines the difference in elevation between points, or their heights above a datum such as mean sea level."},
      {q:"The reading taken on a point of known elevation is called the:", o:["Fore sight", "Back sight", "Intermediate sight", "Change point"], a:1, e:"A back sight is the first reading taken after setting up the instrument, on a point of known elevation such as a bench mark or change point. It is added to the RL to obtain the height of instrument."},
      {q:"A fixed point of known elevation above a datum is called a:", o:["Change point", "Bench mark", "Turning point", "Station"], a:1, e:"A bench mark is a permanent point of known reduced level referred to a datum, used as a starting or checking point for levelling."},
      {q:"In the rise and fall method, the arithmetic check is:", o:["Sum of BS - sum of FS = sum of rise - sum of fall = last RL - first RL", "Sum of BS = sum of FS", "Sum of all RL = 0", "Number of stations = number of readings"], a:0, e:"The rise and fall method has three checks that must all agree: the difference between the sum of back sights and fore sights, the difference between the sum of rises and falls, and the difference between the last and first reduced levels."},
      {q:"A point on which both a fore sight and a back sight are taken is called a:", o:["Bench mark", "Change point", "Datum", "Station"], a:1, e:"A change point or turning point is a point on which a fore sight is taken before shifting the instrument and a back sight after shifting, so that the levelling can be carried forward."}
    ];
