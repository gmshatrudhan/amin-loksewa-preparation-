/* ================= MCQ QUESTIONS - Control Survey - Unit 2: Traverse and Triangulation =================
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

// ── ✏️ EDIT HERE - Unit: "Traverse and Triangulation" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Traverse and Triangulation"] = window.EXTRA["Traverse and Triangulation"] || {};
window.EXTRA["Traverse and Triangulation"].mcq = [
      {q:"A traverse which starts and ends at the same point is called a:", o:["Closed traverse", "Link traverse", "Free traverse", "Open traverse"], a:0, e:"A closed traverse returns to its starting point or ends at a point of known coordinates, so a check on the accuracy of the work is possible. An open traverse provides no such check."},
      {q:"For a closed traverse of n sides, the sum of the interior angles should equal:", o:["180 degrees", "(2n - 4) x 90 degrees", "(n - 2) x 90 degrees", "360 degrees always"], a:1, e:"The sum of the interior angles of a closed polygon of n sides is (2n - 4) x 90 degrees, which is the same as (n - 2) x 180 degrees. This provides the angular check."},
      {q:"In a closed traverse the algebraic sum of latitudes is +0.50 m and of departures is -0.50 m. The linear error of closure is approximately:", o:["0.25 m", "0.50 m", "0.71 m", "1.00 m"], a:2, e:"Error of closure e = sqrt of the sum of the squares = sqrt(0.50 squared + 0.50 squared) = sqrt(0.50) = 0.71 m."},
      {q:"The Bowditch rule for adjusting a traverse distributes the closing error in proportion to:", o:["The angles only", "The number of stations only", "The square of the length", "The length of each line"], a:3, e:"The Bowditch or compass rule assumes that errors in linear and angular measurements are equally liable, and distributes the closing error in proportion to the length of each line."},
      {q:"Triangulation is based on the measurement of:", o:["Angles, with a small number of measured base lines", "Only levels", "Only bearings", "Only distances"], a:0, e:"In triangulation a network of connected triangles is formed; the angles are measured precisely and only a few base lines are measured, the remaining sides being computed by the sine rule."},
      {q:"For a closed traverse of 6 sides, the sum of the interior angles should be:", o:["720°", "540°", "900°", "1080°"], a:0, e:"Sum = (2n−4)×90° = 8×90° = 720° for n = 6."},
      {q:"The latitude of a survey line is its projection on the:", o:["North-south meridian", "Line itself", "Vertical plane", "East-west line"], a:0, e:"Latitude = L·cosθ (N positive); departure = L·sinθ (E positive)."},
      {q:"In the third quadrant (south-west), the signs of latitude and departure are:", o:["+, −", "−, −", "−, +", "+, +"], a:1, e:"SW lines go south (latitude −) and west (departure −)."},
      {q:"The transit rule is preferred over the Bowditch rule when:", o:["Distances are very long", "Angular measurements are more precise than linear ones", "Precision required is low", "Angles and distances are equally precise"], a:1, e:"Transit rule distributes latitude error by latitude and departure error by departure — suited to theodolite traverses with precise angles."},
      {q:"A triangulation triangle should preferably be:", o:["Obtuse angled", "Very flat and narrow", "Well-conditioned, with no angle below 30° or above 120°", "Always right angled"], a:2, e:"Well-conditioned triangles (near-equilateral) give strong fixes; ill-conditioned ones magnify errors."},
      {q:"The base line in triangulation is measured with:", o:["A plane table", "A prismatic compass", "Great precision, using invar tape or EDM", "Rough pacing"], a:2, e:"All triangulation distances scale from the base line, so it is measured to the highest precision."},
      {q:"A satellite station in triangulation is used when:", o:["Sights are short", "The weather is bad", "The main station cannot be occupied", "Observing at night"], a:3, e:"An eccentric/satellite station near an inaccessible point (spire, temple) is occupied and observations reduced to centre."},
      {q:"The closing error of a traverse is given by:", o:["ΣL + ΣD", "ΣL − ΣD", "ΣL × ΣD", "√(ΣL² + ΣD²)"], a:3, e:"e = √(latitude misclosure² + departure misclosure²); direction tanφ = ΣD/ΣL."}
    ];
