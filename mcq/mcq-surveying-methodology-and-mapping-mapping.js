/* ================= MCQ QUESTIONS - Surveying Methodology and Mapping - Unit 5: Mapping =================
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

// ── ✏️ EDIT HERE - Unit: "Mapping" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Mapping"] = window.EXTRA["Mapping"] || {};
window.EXTRA["Mapping"].mcq = [
      {q:"If the scale of a map is 1 cm = 100 m, its representative fraction is:", o:["1:100", "1:1,000", "1:10,000", "1:100,000"], a:2, e:"100 m = 10,000 cm, so RF = 1 cm / 10,000 cm = 1/10,000, written 1:10,000."},
      {q:"Contour lines on a map can never:", o:["Close on themselves", "Run close together", "Curve", "Cross one another"], a:3, e:"Contour lines cannot cross one another because a single point on the ground cannot have two different elevations. The only exception is an overhanging cliff, where they are shown dashed."},
      {q:"A map showing the boundaries of individual land parcels is called a:", o:["Cadastral map", "Political map", "Geological map", "Topographic map"], a:0, e:"A cadastral map shows the boundaries, parcel numbers and areas of individual land holdings and is used for ownership, registration and taxation."},
      {q:"Closely spaced contour lines indicate:", o:["Flat ground", "Steep slope", "Gentle slope", "A valley only"], a:1, e:"The closer the contour lines, the steeper the slope; widely spaced contours indicate gentle slopes and evenly spaced contours indicate a uniform slope."},
      {q:"The vertical distance between two consecutive contour lines is called the:", o:["Reduced level", "Horizontal equivalent", "Contour interval", "Gradient"], a:2, e:"The contour interval is the constant vertical distance between successive contours. Its horizontal distance on the map is called the horizontal equivalent, which varies with the slope."},
      {q:"In GIS, information about roads, rivers and buildings is stored as:", o:["Thematic layers", "Single photographs", "Field books", "Paper tracings"], a:0, e:"GIS organises spatial data into thematic layers (roads, rivers, boundaries) that can be overlaid and analysed together."},
      {q:"Remote sensing means collecting information about objects:", o:["Without physical contact, using sensors", "Only at night", "Only with total stations", "By physical contact"], a:0, e:"Remote sensing uses satellite or aerial sensors to record reflected/emitted energy without touching the object; used for land use and forest mapping."},
      {q:"The Global Positioning System (GPS) consists of how many segments?", o:["Five", "Three", "Two", "Four"], a:1, e:"Three segments: space (satellites), control (ground stations) and user (receivers). GNSS includes GPS, GLONASS, Galileo and BeiDou."},
      {q:"A topographical map mainly shows:", o:["Only satellite images", "Natural and artificial features with relief", "Underground minerals only", "Only property boundaries"], a:1, e:"Topo maps show terrain relief (contours), drainage, vegetation, settlements and infrastructure — the base for planning and engineering."},
      {q:"Survey vessels use echo sounders in hydrographic surveys to measure:", o:["Water temperature", "Current speed", "Water depth", "Tide timings"], a:2, e:"Echo sounders send sound pulses and time their return to measure depth; fathometers record continuous depth profiles along survey lines."},
      {q:"The UTM system divides the earth into how many zones?", o:["12 zones", "24 zones", "60 zones", "36 zones"], a:2, e:"UTM has 60 zones of 6° longitude each; Nepal falls in zones 44 and 45. Coordinates are given as eastings and northings."},
      {q:"Minimum number of GPS satellites needed for a 3D position fix is:", o:["Two", "Three", "Six", "Four"], a:3, e:"Three satellites give 2D position; four give 3D (latitude, longitude, height) plus receiver clock correction."},
      {q:"Nepal’s national mapping agency, the Survey Department, was established in:", o:["B.S. 2025 (1968 AD)", "B.S. 1990 (1933 AD)", "B.S. 2047 (1990 AD)", "B.S. 2014 (1957 AD)"], a:3, e:"The Survey Department (Napi Bibhag), under the Ministry of Land Management, is responsible for geodetic control, cadastral and topographic mapping of Nepal."}
    ];
