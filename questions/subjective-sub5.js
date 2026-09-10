/* ================= SUBJECTIVE (WRITTEN) QUESTIONS — SUB5: Mathematics and Instruments =================
 * Units in this file:
 *     - Mathematics (General)
 *     - Mathematics (Algebra & Geometry)
 *     - Mathematics (Trigonometry)
 *     - Mathematics (Surveying)
 *     - Instruments & Its Maintenance
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit titles in square brackets.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Mathematics (General)" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Mathematics (General)"] = window.EXTRA["Mathematics (General)"] || {};
window.EXTRA["Mathematics (General)"].sub = [
      {q:"A land of area 1 bigha is sold at Rs 40 lakh per bigha. Find the price of 12 kattha.", marks:5, hint:"1 bigha = 20 kattha. Price of 1 kattha = 40,00,000 / 20 = Rs 2,00,000. Price of 12 kattha = 12 x 2,00,000 = Rs 24,00,000, that is Rs 24 lakh."},
      {q:"Explain percentage, ratio and proportion with one example each.", marks:10, hint:"Percentage expresses a quantity as a fraction of 100; for example, 20 percent of 250 = 250 x 20/100 = 50. Ratio compares two quantities of the same kind by division; for example, if two plots are 40 sq m and 60 sq m, the ratio is 40:60 = 2:3. Proportion states that two ratios are equal; for example, 2:3 = 8:12, since the product of the extremes equals the product of the means, 2 x 12 = 3 x 8 = 24. Proportion is used in scale conversion and in the unitary method."},
      {q:"Find the compound interest on Rs 20,000 at 10 percent per annum for 2 years.", marks:5, hint:"A = P(1 + r/100)^n = 20000 x (1 + 10/100)^2 = 20000 x 1.21 = Rs 24,200. CI = A - P = 24,200 - 20,000 = Rs 4,200."}
    ];

// ── ✏️ EDIT HERE - Unit: "Mathematics (Algebra & Geometry)" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Mathematics (Algebra & Geometry)"] = window.EXTRA["Mathematics (Algebra & Geometry)"] || {};
window.EXTRA["Mathematics (Algebra & Geometry)"].sub = [
      {q:"Solve the simultaneous equations 3x + 2y = 16 and x - y = 2.", marks:5, hint:"From the second equation, x = y + 2. Substituting in the first: 3(y + 2) + 2y = 16, so 3y + 6 + 2y = 16, giving 5y = 10 and y = 2. Then x = 2 + 2 = 4. Therefore x = 4 and y = 2."},
      {q:"State and prove the Pythagoras theorem with a diagram.", marks:10, hint:"Statement: in a right angled triangle, the square on the hypotenuse is equal to the sum of the squares on the other two sides, that is AC squared = AB squared + BC squared. Proof: in triangle ABC right angled at B, draw BD perpendicular to AC. Triangles ADB and ABC are similar, so AB squared = AD x AC. Triangles BDC and ABC are similar, so BC squared = DC x AC. Adding, AB squared + BC squared = AC x (AD + DC) = AC x AC = AC squared. Hence proved. A neat labelled figure must be drawn."},
      {q:"Find the area of a triangle whose sides are 13 m, 14 m and 15 m.", marks:5, hint:"Using Heron's formula: s = (a + b + c)/2 = (13 + 14 + 15)/2 = 21 m. Area = sqrt(s(s-a)(s-b)(s-c)) = sqrt(21 x 8 x 7 x 6) = sqrt(7056) = 84 sq m."}
    ];

// ── ✏️ EDIT HERE - Unit: "Mathematics (Trigonometry)" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Mathematics (Trigonometry)"] = window.EXTRA["Mathematics (Trigonometry)"] || {};
window.EXTRA["Mathematics (Trigonometry)"].sub = [
      {q:"Define the six trigonometric ratios with reference to a right angled triangle.", marks:5, hint:"For an acute angle theta in a right angled triangle: sin theta = perpendicular / hypotenuse; cos theta = base / hypotenuse; tan theta = perpendicular / base; cosec theta = hypotenuse / perpendicular; sec theta = hypotenuse / base; cot theta = base / perpendicular. A neat labelled figure showing the perpendicular, base and hypotenuse is required."},
      {q:"The angle of elevation of the top of a tower from a point 30 m away on level ground is 45 degrees. Find the height of the tower.", marks:5, hint:"Let the height be h. Then tan 45 = h / 30. Since tan 45 = 1, h = 30 x 1 = 30 m. Therefore the height of the tower is 30 m. If the height of the instrument is given, it must be added to this value."},
      {q:"Prove that (1 - cos squared theta) / sin squared theta = 1 and state its use in surveying.", marks:10, hint:"We know that sin squared theta + cos squared theta = 1, therefore 1 - cos squared theta = sin squared theta. Substituting, (1 - cos squared theta)/ sin squared theta = sin squared theta / sin squared theta = 1. Hence proved. Use in surveying: trigonometric identities are used to reduce slope distances to horizontal, to compute heights and distances in trigonometric levelling, to calculate latitudes and departures in traverse computation, and to determine the difference in elevation from vertical angles."}
    ];

// ── ✏️ EDIT HERE - Unit: "Mathematics (Surveying)" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Mathematics (Surveying)"] = window.EXTRA["Mathematics (Surveying)"] || {};
window.EXTRA["Mathematics (Surveying)"].sub = [
      {q:"Convert 3 ropani 2 aana into square metres.", marks:5, hint:"1 ropani = 508.72 sq m and 1 aana = 508.72 / 16 = 31.795 sq m. So 3 ropani = 3 x 508.72 = 1,526.16 sq m and 2 aana = 2 x 31.795 = 63.59 sq m. Total = 1,526.16 + 63.59 = 1,589.75 sq m approximately."},
      {q:"Explain the methods of computing the area of an irregular land parcel.", marks:10, hint:"1. Division into geometrical figures: the parcel is split into triangles, rectangles and trapezia and their areas are added. 2. Trapezoidal rule: area = d[(first ordinate + last ordinate)/2 + sum of remaining ordinates], where d is the common interval; the boundary is assumed straight between ordinates. 3. Simpson's rule: area = (d/3)[first + last + 4 x sum of odd ordinates + 2 x sum of even ordinates]; requires an even number of intervals and assumes a parabolic boundary, so it is more accurate. 4. Coordinate method: using the cross multiplication of the coordinates of the corners. 5. Planimeter: a mechanical or digital instrument used to measure area directly from a plan."},
      {q:"Compute the area of a plot by the coordinate method given the coordinates of the four corners.", marks:5, hint:"List the coordinates of the corners in order around the figure and repeat the first point at the end. Area = one half of the absolute value of the sum of (x of i multiplied by y of i plus one) minus the sum of (y of i multiplied by x of i plus one). For a plot with corners (0,0), (40,0), (40,25) and (0,25) the calculation gives area = 1,000 sq m."}
    ];

// ── ✏️ EDIT HERE - Unit: "Instruments & Its Maintenance" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Instruments & Its Maintenance"] = window.EXTRA["Instruments & Its Maintenance"] || {};
window.EXTRA["Instruments & Its Maintenance"].sub = [
      {q:"List the common surveying instruments and state the use of each.", marks:10, hint:"Chain and tape: measurement of linear distances. Ranging rod and arrow: marking stations and counting chain lengths. Cross staff and optical square: setting out right angles for offsets. Prismatic compass: measurement of magnetic bearings. Plane table with alidade: field plotting of details. Dumpy or auto level with levelling staff: determination of relative elevations. Theodolite: precise measurement of horizontal and vertical angles. Tacheometer: indirect measurement of distance and elevation. Total station: combined angle, distance and coordinate measurement. GNSS receiver: determination of absolute position by satellite."},
      {q:"Explain the temporary and permanent adjustments of a dumpy level.", marks:5, hint:"Temporary adjustments are carried out at every setting: setting up the instrument on the tripod at a convenient height; levelling up using the foot screws and the bubble tube in two perpendicular directions; and focusing, first the eyepiece on the cross hairs and then the object glass on the staff to eliminate parallax. Permanent adjustments are made occasionally to correct instrumental errors: making the axis of the bubble tube perpendicular to the vertical axis, making the horizontal cross hair truly horizontal, and making the line of collimation parallel to the axis of the bubble tube, which is tested by the two peg test."},
      {q:"Write the precautions to be taken while handling and storing surveying instruments.", marks:5, hint:"Always carry the instrument in its box and hold it by the frame, never by the telescope. Set it up on firm ground and tighten the clamps only lightly. Protect it from rain, dust and direct sun with an umbrella or cover. Never force any screw. Clean the lenses only with a soft brush or lens cloth. After use, dry the instrument before boxing it, and store the box in a dry, dust free place. Check the batteries of electronic instruments and get the instrument calibrated periodically."}
    ];
