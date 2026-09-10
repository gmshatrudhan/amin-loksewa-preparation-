/* ================= MCQ QUESTIONS — SUB3: Surveying Methodology and Mapping =================
 * Units in this file:
 *     - Introduction of Surveying
 *     - Chain Survey
 *     - Plane Table Survey
 *     - Tachometric Survey
 *     - Mapping
 *
 * HOW TO ADD A QUESTION: copy one {q, o, a, e} block, paste it after the last
 * one (with a comma between blocks), and edit the text.
 *   q = question,  o = 4 options,  a = correct option NUMBER (0, 1, 2 or 3),
 *   e = explanation shown after answering.
 * IMPORTANT: do NOT rename the unit titles in square brackets — the app finds
 * questions by matching them exactly.
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
      {q:"Errors that follow the laws of probability and are equally likely to be positive or negative are called:", o:["Mistakes", "Systematic errors", "Accidental or random errors", "Gross errors"], a:2, e:"Accidental (random) errors remain after mistakes and systematic errors are removed. They obey the laws of probability and are adjusted by the method of least squares."}
    ];

// ── ✏️ EDIT HERE - Unit: "Chain Survey" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Chain Survey"] = window.EXTRA["Chain Survey"] || {};
window.EXTRA["Chain Survey"].mcq = [
      {q:"The length of a metric chain commonly used in surveying is:", o:["10 m", "20 m", "50 m", "100 m"], a:1, e:"The 20 m metric chain (100 links, each 0.2 m) is the one most commonly used. A 30 m chain with 150 links is also available."},
      {q:"In chain surveying, a triangle whose angles all lie between 30 and 120 degrees is called:", o:["Ill-conditioned", "Well-conditioned", "Equilateral", "Obtuse"], a:1, e:"A well-conditioned triangle has all angles between 30 and 120 degrees, the ideal being 60 degrees. Such triangles can be plotted accurately because a small error in measurement causes only a small error in the plotted position."},
      {q:"If a chain is longer than its standard length, the measured distance will be:", o:["Greater than actual", "Less than actual", "Equal to actual", "Zero"], a:1, e:"A chain that is too long covers more ground per chain length, so fewer chain lengths are counted. The measured distance therefore comes out less than the actual and the correction is positive."},
      {q:"The perpendicular distance from the survey line to an object is called:", o:["Base line", "Tie line", "Offset", "Check line"], a:2, e:"An offset is the lateral measurement taken from a survey line to locate a nearby detail. Perpendicular offsets are taken at right angles, oblique offsets at any other angle."},
      {q:"A check line in chain surveying is used to:", o:["Increase the area", "Verify the accuracy of the plotted triangle", "Mark the boundary", "Measure elevation"], a:1, e:"A check line (proof line) is measured in the field and also scaled off the plotted plan. If the two agree, the framework has been correctly measured and plotted."}
    ];

// ── ✏️ EDIT HERE - Unit: "Plane Table Survey" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Plane Table Survey"] = window.EXTRA["Plane Table Survey"] || {};
window.EXTRA["Plane Table Survey"].mcq = [
      {q:"In plane table surveying, orienting the table means:", o:["Levelling the table", "Setting the table so that plotted lines are parallel to the corresponding ground lines", "Centring the table", "Focusing the alidade"], a:1, e:"Orientation places the table in the same directional position it occupied at previous stations, so that all plotted rays are parallel to the corresponding ground directions. It is done by trough compass or by back sighting."},
      {q:"Which accessory is used for sighting objects in plane tabling?", o:["Trough compass", "Alidade", "Spirit level", "Plumbing fork"], a:1, e:"The alidade is a straight edge fitted with sighting vanes or a telescope. It is used to sight the object and draw the ray along its bevelled edge."},
      {q:"The method of plane tabling in which the instrument station is located on the plan by sighting already plotted points is:", o:["Radiation", "Intersection", "Traversing", "Resection"], a:3, e:"In resection the table is set up at a station whose position is not yet plotted, and the point is located by drawing rays back from at least two known plotted points."},
      {q:"The three point problem in plane tabling is solved by:", o:["Bessel's method", "Bowditch rule", "Simpson's rule", "Trapezoidal rule"], a:0, e:"The three point problem locates the table position from three known plotted points. It can be solved by the mechanical (tracing paper) method, the graphical (Bessel's) method or the trial and error (Lehmann's) method."},
      {q:"A major disadvantage of plane table surveying is that:", o:["It is fast", "Field notes are not recorded separately", "It needs no computation", "Errors are seen in the field"], a:1, e:"Since plotting is done directly in the field, no separate record of measurements is kept. If the plan is later found to be in error or a different scale is needed, the whole survey must be repeated."}
    ];

// ── ✏️ EDIT HERE - Unit: "Tachometric Survey" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Tachometric Survey"] = window.EXTRA["Tachometric Survey"] || {};
window.EXTRA["Tachometric Survey"].mcq = [
      {q:"In tacheometry, the multiplying constant of an ordinary tacheometer is usually:", o:["10", "50", "100", "200"], a:2, e:"For a theodolite fitted with a stadia diaphragm, the multiplying constant f/i is normally 100. The additive constant is about 0.1 to 0.3 m for external focusing and nearly zero for internal focusing telescopes."},
      {q:"Tacheometry is used to determine:", o:["Only horizontal distance", "Horizontal distance and elevation", "Only vertical angle", "Only bearing"], a:1, e:"Tacheometry determines horizontal distances and relative elevations indirectly from staff intercepts and angles, without chaining. It is especially useful in rough or steep terrain."},
      {q:"In the stadia method, the staff intercept is the difference between:", o:["Two horizontal angles", "Upper and lower stadia hair readings", "Two vertical angles", "Two bearings"], a:1, e:"The staff intercept s is the difference between the upper and lower stadia hair readings on the levelling staff. The distance is then D = K.s + C."},
      {q:"The formula for horizontal distance in the stadia system with a horizontal line of sight is:", o:["D = K.s + C", "D = s / K", "D = K + s", "D = K.s.tan θ"], a:0, e:"With a horizontal sight, D = K.s + C, where K is the multiplying constant (usually 100), s is the staff intercept and C is the additive constant."},
      {q:"Tacheometric surveying is most suitable for:", o:["Flat land with easy chaining", "Rough, steep or broken country", "Underground work", "Very high precision geodetic work"], a:1, e:"Tacheometry is preferred where direct chaining is difficult or inaccurate, such as steep slopes, broken ground, water bodies and rough country."}
    ];

// ── ✏️ EDIT HERE - Unit: "Mapping" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Mapping"] = window.EXTRA["Mapping"] || {};
window.EXTRA["Mapping"].mcq = [
      {q:"If the scale of a map is 1 cm = 100 m, its representative fraction is:", o:["1:100", "1:1,000", "1:10,000", "1:100,000"], a:2, e:"100 m = 10,000 cm, so RF = 1 cm / 10,000 cm = 1/10,000, written 1:10,000."},
      {q:"Contour lines on a map can never:", o:["Curve", "Cross one another", "Close on themselves", "Run close together"], a:1, e:"Contour lines cannot cross one another because a single point on the ground cannot have two different elevations. The only exception is an overhanging cliff, where they are shown dashed."},
      {q:"A map showing the boundaries of individual land parcels is called a:", o:["Topographic map", "Cadastral map", "Political map", "Geological map"], a:1, e:"A cadastral map shows the boundaries, parcel numbers and areas of individual land holdings and is used for ownership, registration and taxation."},
      {q:"Closely spaced contour lines indicate:", o:["Flat ground", "Steep slope", "Gentle slope", "A valley only"], a:1, e:"The closer the contour lines, the steeper the slope; widely spaced contours indicate gentle slopes and evenly spaced contours indicate a uniform slope."},
      {q:"The vertical distance between two consecutive contour lines is called the:", o:["Horizontal equivalent", "Contour interval", "Gradient", "Reduced level"], a:1, e:"The contour interval is the constant vertical distance between successive contours. Its horizontal distance on the map is called the horizontal equivalent, which varies with the slope."}
    ];
