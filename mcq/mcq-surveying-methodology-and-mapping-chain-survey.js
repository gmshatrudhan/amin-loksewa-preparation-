/* ================= MCQ QUESTIONS - Surveying Methodology and Mapping - Unit 2: Chain Survey =================
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

// ── ✏️ EDIT HERE - Unit: "Chain Survey" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Chain Survey"] = window.EXTRA["Chain Survey"] || {};
window.EXTRA["Chain Survey"].mcq = [
      {q:"The length of a metric chain commonly used in surveying is:", o:["10 m", "20 m", "50 m", "100 m"], a:1, e:"The 20 m metric chain (100 links, each 0.2 m) is the one most commonly used. A 30 m chain with 150 links is also available."},
      {q:"In chain surveying, a triangle whose angles all lie between 30 and 120 degrees is called:", o:["Ill-conditioned", "Well-conditioned", "Equilateral", "Obtuse"], a:1, e:"A well-conditioned triangle has all angles between 30 and 120 degrees, the ideal being 60 degrees. Such triangles can be plotted accurately because a small error in measurement causes only a small error in the plotted position."},
      {q:"If a chain is longer than its standard length, the measured distance will be:", o:["Greater than actual", "Less than actual", "Equal to actual", "Zero"], a:1, e:"A chain that is too long covers more ground per chain length, so fewer chain lengths are counted. The measured distance therefore comes out less than the actual and the correction is positive."},
      {q:"The perpendicular distance from the survey line to an object is called:", o:["Base line", "Tie line", "Offset", "Check line"], a:2, e:"An offset is the lateral measurement taken from a survey line to locate a nearby detail. Perpendicular offsets are taken at right angles, oblique offsets at any other angle."},
      {q:"A check line in chain surveying is used to:", o:["Increase the area", "Verify the accuracy of the plotted triangle", "Mark the boundary", "Measure elevation"], a:1, e:"A check line (proof line) is measured in the field and also scaled off the plotted plan. If the two agree, the framework has been correctly measured and plotted."},
      {q:"A 20 m chain consists of how many links?", o:["100 links", "66 links", "50 links", "200 links"], a:0, e:"A 20 m chain has 100 links of 0.2 m each; a 30 m chain has 150 links. Tallies mark every 5 m."},
      {q:"The instrument used to set out a right angle in chain surveying is:", o:["Prismatic compass", "Clinometer", "Abney level", "Optical square"], a:3, e:"The optical square sets out right angles using double reflection; the cross staff is its simpler non-optical alternative. Line ranger aligns intermediate points."},
      {q:"In chain surveying, a tie line is used to:", o:["Extend the baseline", "Locate interior details and check accuracy", "Measure slopes", "Set out curves"], a:1, e:"Tie (subsidiary) lines join fixed points on main survey lines to locate interior features and to check the framework."},
      {q:"The longest survey line through the middle of the area is called:", o:["Tie line", "Check line", "Base line", "Offset line"], a:2, e:"The base line is the longest central line on which the whole framework depends; check lines verify the accuracy of the framework."},
      {q:"Obstacles to ranging but not to chaining can be overcome by:", o:["Abney level", "Random line method", "Clinometer", "Reciprocal ranging"], a:1, e:"A hill blocks vision but not chaining — overcome by reciprocal ranging. A river blocks chaining but not vision — overcome by similar triangles or the random line method."},
      {q:"If a chain is too long, the measured distance will be:", o:["Less than the actual", "More than the actual", "Equal to actual", "Correct"], a:0, e:"Too long a chain covers more ground per chain length, so fewer chains are counted and the recorded distance is less than actual. Correction = (L′/L) × measured."},
      {q:"The maximum length of an offset using a cross staff is generally limited to:", o:["5 m", "10 m", "15 m", "20 m"], a:0, e:"Short offsets up to about 15 m may be taken with a cross staff; longer/oblique offsets need a tape or optical square for accuracy."},
      {q:"Which error in chaining is cumulative?", o:["Error in marking chain ends", "Bad ranging", "Error due to careless holding", "Error due to incorrect chain length"], a:3, e:"Incorrect chain length and slope errors are cumulative (grow with distance); marking, ranging and reading errors are compensating (cancel out)."}
    ];
