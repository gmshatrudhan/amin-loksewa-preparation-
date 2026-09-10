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
      {q:"A major disadvantage of plane table surveying is that:", o:["It is fast", "Field notes are not recorded separately", "It needs no computation", "Errors are seen in the field"], a:1, e:"Since plotting is done directly in the field, no separate record of measurements is kept. If the plan is later found to be in error or a different scale is needed, the whole survey must be repeated."}
    ];
