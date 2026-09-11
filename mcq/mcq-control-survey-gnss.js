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
      {q:"GNSS stands for:", o:["Ground Navigation Support System", "Global Navigation Satellite System", "General Network Survey System", "Geodetic National Survey Standard"], a:1, e:"GNSS is the general term for satellite navigation systems that give global coverage, including GPS (USA), GLONASS (Russia), Galileo (Europe) and BeiDou (China)."},
      {q:"The minimum number of satellites required for a three dimensional position fix is:", o:["Two", "Three", "Four", "Six"], a:2, e:"Three satellites give the three coordinates, and a fourth is required to solve for the receiver clock error. Therefore a minimum of four satellites is needed for a 3D fix."},
      {q:"The GNSS technique that gives centimetre level accuracy in real time is:", o:["Handheld navigation", "Standalone positioning", "DGPS", "RTK"], a:3, e:"Real Time Kinematic (RTK) uses carrier phase observations together with corrections transmitted from a base station to a rover, giving centimetre level accuracy in real time."},
      {q:"The principle used by GNSS to determine position is:", o:["Trilateration using measured ranges", "Levelling", "Photogrammetry", "Triangulation of angles"], a:0, e:"GNSS uses trilateration: the distance from the receiver to each satellite is computed from the signal travel time, and the intersection of the resulting spheres fixes the position."},
      {q:"Which of the following is NOT a source of error in GNSS observation?", o:["Multipath", "Chain sag", "Satellite clock error", "Ionospheric delay"], a:1, e:"Chain sag is an error in tape or chain measurement, not in GNSS. GNSS errors include ionospheric and tropospheric delay, multipath, satellite and receiver clock errors, orbital errors and poor satellite geometry."},
      {q:"GPS is operated and maintained by:", o:["The USA", "Russia", "The European Union", "China"], a:0, e:"GPS (NAVSTAR) is run by the US Space Force; other systems: GLONASS (Russia), Galileo (EU), BeiDou (China)."},
      {q:"GLONASS is the satellite navigation system of:", o:["Russia", "India", "Japan", "The USA"], a:0, e:"GLONASS, Galileo, BeiDou, NavIC (India) and QZSS (Japan) together with GPS form the GNSS family."},
      {q:"The GPS space segment nominally consists of:", o:["18 satellites", "24 satellites", "36 satellites", "12 satellites"], a:1, e:"24+ satellites in 6 orbital planes ensure at least 4 are visible anywhere, anytime."},
      {q:"DGPS improves positioning accuracy by:", o:["Adding more constellations", "Correcting rover positions with data from a base station", "Using bigger antennas", "Flying the receiver higher"], a:1, e:"The base on a known point computes errors and sends corrections to the rover — metre to decimetre accuracy."},
      {q:"Multipath error in GNSS is caused by:", o:["Receiver motion", "Solar flares only", "Signals reflected from nearby surfaces", "Satellite clock faults"], a:2, e:"Reflections from buildings, water and ground lengthen the path; choke-ring antennas and site selection reduce it."},
      {q:"The control segment of GPS consists of:", o:["Rover antennas", "User receivers", "Ground monitor and upload stations", "Satellites"], a:2, e:"Ground stations track satellites, compute orbits/clocks and upload navigation messages."},
      {q:"The orbit height of GPS satellites is about:", o:["36,000 km", "600 km", "2,000 km", "20,200 km"], a:3, e:"Medium earth orbit (~20,200 km, ~12-hour period); 36,000 km is geostationary height."},
      {q:"BeiDou is the satellite navigation system of:", o:["The European Union", "India", "Japan", "China"], a:3, e:"BeiDou-3 gives global coverage; NavIC covers India and the region."}
    ];
