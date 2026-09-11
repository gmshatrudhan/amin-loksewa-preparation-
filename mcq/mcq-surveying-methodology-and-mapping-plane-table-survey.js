/* ================= MCQ QUESTIONS - Surveying Methodology and Mapping - Unit 3: Plane Table Survey =================
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

// ── ✏️ EDIT HERE - Unit: "Plane Table Survey" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Plane Table Survey"] = window.EXTRA["Plane Table Survey"] || {};
window.EXTRA["Plane Table Survey"].mcq = [
      {q:"In plane table surveying, orienting the table means:", o:["Levelling the table", "Setting the table so that plotted lines are parallel to the corresponding ground lines", "Centring the table", "Focusing the alidade"], a:1, e:"Orientation places the table in the same directional position it occupied at previous stations, so that all plotted rays are parallel to the corresponding ground directions. It is done by trough compass or by back sighting."},
      {q:"Which accessory is used for sighting objects in plane tabling?", o:["Trough compass", "Alidade", "Spirit level", "Plumbing fork"], a:1, e:"The alidade is a straight edge fitted with sighting vanes or a telescope. It is used to sight the object and draw the ray along its bevelled edge."},
      {q:"The method of plane tabling in which the instrument station is located on the plan by sighting already plotted points is:", o:["Radiation", "Intersection", "Traversing", "Resection"], a:3, e:"In resection the table is set up at a station whose position is not yet plotted, and the point is located by drawing rays back from at least two known plotted points."},
      {q:"The three point problem in plane tabling is solved by:", o:["Bessel's method", "Bowditch rule", "Simpson's rule", "Trapezoidal rule"], a:0, e:"The three point problem locates the table position from three known plotted points. It can be solved by the mechanical (tracing paper) method, the graphical (Bessel's) method or the trial and error (Lehmann's) method."},
      {q:"A major disadvantage of plane table surveying is that:", o:["It is fast", "Field notes are not recorded separately", "It needs no computation", "Errors are seen in the field"], a:1, e:"Since plotting is done directly in the field, no separate record of measurements is kept. If the plan is later found to be in error or a different scale is needed, the whole survey must be repeated."},
      {q:"The greatest advantage of plane table surveying is that:", o:["The map is plotted directly in the field", "No levelling is needed", "It needs no accessories", "It works in all weather"], a:0, e:"Field plotting lets the surveyor compare the map with the ground, omit/replot doubtful detail immediately, and needs no field book."},
      {q:"In plane table surveying, the radiation method is most suitable for:", o:["Large areas needing many stations", "Surveying small areas from a single station", "Locating inaccessible points", "Fixing the instrument station"], a:1, e:"In radiation, rays are drawn from one station and distances measured along them — fast for small open areas with few details."},
      {q:"The intersection method of plane tabling is used to:", o:["Orient the table", "Measure distances directly", "Locate inaccessible points from two stations", "Level the table"], a:2, e:"Intersection locates points (buildings, towers, far banks) by crossing rays from two known stations without measuring to them."},
      {q:"Plane table traversing is used for:", o:["Locating a single point", "Interpolating contours", "Checking orientation", "Running connected survey lines between stations"], a:3, e:"Traversing connects a series of stations with measured lines — used for roads, boundaries and closed-loop checks."},
      {q:"The trough compass in plane table surveying is used for:", o:["Centering the table", "Drawing rays", "Approximate orientation using magnetic north", "Measuring slopes"], a:2, e:"The trough compass gives rough magnetic orientation; precise orientation is done by back sighting."},
      {q:"The plumbing fork (U-frame) with a plumb bob is used for:", o:["Centering the table over the ground station", "Levelling the table", "Drawing parallel lines", "Measuring distances"], a:0, e:"The U-frame places the plumb bob exactly over the ground station mark while its tip touches the plotted point — the centering operation."},
      {q:"The spirit level on the plane table is used to:", o:["Draw parallel lines", "Measure distances", "Sight distant objects", "Check that the table top is horizontal"], a:3, e:"The board must be levelled with the spirit level before observations so that plotted rays are truly horizontal projections."},
      {q:"The most suitable tape for plane table surveying is:", o:["Steel tape", "Metallic (fibre glass) tape", "Invar tape", "Linen tape"], a:1, e:"Metallic/fibre glass tapes resist stretching and weather, suiting plane table work; invar is for precision baselines."}
    ];
