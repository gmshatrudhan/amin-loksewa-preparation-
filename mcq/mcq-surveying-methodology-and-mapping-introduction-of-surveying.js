/* ================= MCQ QUESTIONS - Surveying Methodology and Mapping - Unit 1: Introduction of Surveying =================
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

// ── ✏️ EDIT HERE - Unit: "Introduction of Surveying" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Introduction of Surveying"] = window.EXTRA["Introduction of Surveying"] || {};
window.EXTRA["Introduction of Surveying"].mcq = [
      {q:"What is the fundamental principle of surveying?", o:["Work from part to whole", "Work from whole to part", "Work randomly", "Work from south to north"], a:1, e:"Working from whole to part: a control framework of high precision is established first, then details are filled in. This localises errors and prevents their accumulation over the survey area."},
      {q:"In plane surveying, the curvature of the earth is:", o:["Considered", "Neglected", "Doubled", "Measured directly"], a:1, e:"Plane surveying treats the earth's surface as a flat plane. It is valid for areas under about 250 sq km, where the error due to curvature is negligible. Geodetic surveying accounts for curvature."},
      {q:"Which of the following is a primary classification of surveying?", o:["Chain and compass", "Plane and geodetic", "Open and closed", "Land and marine"], a:1, e:"The primary division of surveying is into plane surveying and geodetic surveying, based on whether the earth's curvature is neglected or considered."},
      {q:"The main objective of a survey is to:", o:["Prepare a map or determine relative positions", "Collect land revenue", "Design a building", "Test soil strength"], a:0, e:"Surveying determines the relative positions of points on, above or below the earth's surface so that maps, plans and sections can be prepared and areas and volumes computed."},
      {q:"Errors that follow the laws of probability and are equally likely to be positive or negative are called:", o:["Mistakes", "Systematic errors", "Accidental or random errors", "Gross errors"], a:2, e:"Accidental (random) errors remain after mistakes and systematic errors are removed. They obey the laws of probability and are adjusted by the method of least squares."},
      {q:"A survey in which the curvature of the earth is taken into account is called:", o:["Geodetic survey", "Plane survey", "Cadastral survey", "Topographical survey"], a:0, e:"In geodetic survey the curvature of the earth is considered; it is used for large areas and establishing control points. Plane survey neglects curvature and is used for small areas."},
      {q:"The first principle of surveying is:", o:["To work from part to whole", "To work from whole to part", "To take offsets first", "To close the traverse first"], a:1, e:"Working from whole to part localises errors and prevents their accumulation. The second principle is to fix a point by at least two independent measurements."},
      {q:"Which survey is carried out to fix property boundaries and prepare land ownership records?", o:["Engineering survey", "Military survey", "Cadastral survey", "Geological survey"], a:2, e:"Cadastral survey fixes parcel boundaries and supports land ownership records (used by Malpot and Survey offices in Nepal)."},
      {q:"A representative fraction of 1:50,000 means:", o:["1 cm on map = 50 m on ground", "Map is 50,000 times larger than ground", "1 cm on map = 5,000 cm on ground", "1 cm on map = 50,000 cm on ground"], a:3, e:"RF 1:50,000 means 1 unit on the map equals 50,000 units on the ground; 1 cm on map = 500 m on ground. RF has no units."},
      {q:"Which of the following is a large-scale map?", o:["1:500", "1:250,000", "1:1,000,000", "1:50,000"], a:0, e:"1:500 is a large-scale map (cadastral plans); 1:50,000 and smaller ratios are small-scale (topographical) maps. Larger scale means more detail per unit area."},
      {q:"The main object of surveying is to prepare a:", o:["Design", "Estimate", "Plan or map", "Report only"], a:2, e:"The primary object of surveying is to prepare a plan or map showing relative positions of features on the earth surface, drawn to scale."},
      {q:"Reconnaissance survey is done to:", o:["Measure angles precisely", "Examine the area and select the best survey scheme", "Compute earthwork", "Fix bench marks permanently"], a:1, e:"Reconnaissance is the preliminary field inspection to study terrain, select station sites and choose the most suitable survey method."},
      {q:"Errors due to imperfection in instruments are classified as:", o:["Personal errors", "Natural errors", "Mistakes", "Instrumental errors"], a:3, e:"Instrumental errors arise from faulty adjustment or design of instruments; they are systematic and can be corrected by calibration."}
    ];
