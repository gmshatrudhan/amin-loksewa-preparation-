/* ================= MCQ QUESTIONS — SUB5: Mathematics and Instruments =================
 * Units in this file:
 *     - Mathematics (General)
 *     - Mathematics (Algebra & Geometry)
 *     - Mathematics (Trigonometry)
 *     - Mathematics (Surveying)
 *     - Instruments & Its Maintenance
 *
 * HOW TO ADD A QUESTION: copy one {q, o, a, e} block, paste it after the last
 * one (with a comma between blocks), and edit the text.
 *   q = question,  o = 4 options,  a = correct option NUMBER (0, 1, 2 or 3),
 *   e = explanation shown after answering.
 * IMPORTANT: do NOT rename the unit titles in square brackets — the app finds
 * questions by matching them exactly.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Mathematics (General)" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Mathematics (General)"] = window.EXTRA["Mathematics (General)"] || {};
window.EXTRA["Mathematics (General)"].mcq = [
      {q:"The area of a rectangular plot is 240 sq m and its length is 20 m. What is its perimeter?", o:["60 m", "64 m", "68 m", "72 m"], a:1, e:"Breadth = 240 / 20 = 12 m. Perimeter = 2 x (20 + 12) = 2 x 32 = 64 m."},
      {q:"25 percent of 480 is:", o:["100", "110", "120", "130"], a:2, e:"25 percent of 480 = 480 x 25/100 = 120."},
      {q:"If the ratio of two numbers is 3:5 and their sum is 64, the smaller number is:", o:["21", "24", "27", "30"], a:1, e:"Let the numbers be 3x and 5x. Then 8x = 64, so x = 8. The smaller number is 3 x 8 = 24."},
      {q:"The simple interest on Rs 5,000 at 8 percent per annum for 2 years is:", o:["Rs 600", "Rs 700", "Rs 800", "Rs 900"], a:2, e:"SI = P x R x T / 100 = 5000 x 8 x 2 / 100 = Rs 800."},
      {q:"A sum becomes Rs 24,200 in 2 years at 10 percent compound interest. The principal is:", o:["Rs 20,000", "Rs 21,000", "Rs 22,000", "Rs 23,000"], a:0, e:"A = P(1 + r/100)^n, so 24200 = P x (1.1)^2 = 1.21P. Therefore P = 24200 / 1.21 = Rs 20,000."}
    ];

// ── ✏️ EDIT HERE - Unit: "Mathematics (Algebra & Geometry)" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Mathematics (Algebra & Geometry)"] = window.EXTRA["Mathematics (Algebra & Geometry)"] || {};
window.EXTRA["Mathematics (Algebra & Geometry)"].mcq = [
      {q:"If 2x + 5 = 17, then x is:", o:["4", "5", "6", "7"], a:2, e:"2x = 17 - 5 = 12, so x = 6."},
      {q:"The sum of the interior angles of a triangle is:", o:["90 degrees", "180 degrees", "270 degrees", "360 degrees"], a:1, e:"The three interior angles of any plane triangle always add up to 180 degrees."},
      {q:"The area of a circle of radius 7 cm (taking pi = 22/7) is:", o:["154 sq cm", "144 sq cm", "132 sq cm", "121 sq cm"], a:0, e:"Area = pi r squared = (22/7) x 7 x 7 = 154 sq cm."},
      {q:"The area of a triangle with sides 13 m, 14 m and 15 m is:", o:["80 sq m", "84 sq m", "88 sq m", "90 sq m"], a:1, e:"s = (13 + 14 + 15)/2 = 21. By Heron's formula, area = sqrt(21 x 8 x 7 x 6) = sqrt(7056) = 84 sq m."},
      {q:"In a right angled triangle the side opposite the right angle is called the:", o:["Base", "Perpendicular", "Hypotenuse", "Median"], a:2, e:"The hypotenuse is the longest side and lies opposite the right angle. By Pythagoras theorem, hypotenuse squared equals the sum of the squares of the other two sides."}
    ];

// ── ✏️ EDIT HERE - Unit: "Mathematics (Trigonometry)" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Mathematics (Trigonometry)"] = window.EXTRA["Mathematics (Trigonometry)"] || {};
window.EXTRA["Mathematics (Trigonometry)"].mcq = [
      {q:"The value of sin 30 degrees is:", o:["1/2", "1", "0", "root 3 / 2"], a:0, e:"sin 30 degrees = 1/2. Similarly cos 30 = root 3 / 2 and tan 30 = 1 / root 3."},
      {q:"In a right angled triangle, tan theta is equal to:", o:["opposite / hypotenuse", "adjacent / hypotenuse", "opposite / adjacent", "hypotenuse / opposite"], a:2, e:"tan theta = perpendicular / base, that is the side opposite the angle divided by the side adjacent to it."},
      {q:"The value of sin squared theta plus cos squared theta is:", o:["0", "1", "2", "theta"], a:1, e:"This is the fundamental trigonometric identity: sin squared theta + cos squared theta = 1 for all values of theta."},
      {q:"A sloping distance of 100 m is measured along a line inclined at 5 degrees to the horizontal. The horizontal distance is approximately:", o:["95.00 m", "99.62 m", "100.38 m", "104.00 m"], a:1, e:"Horizontal distance = slope distance x cos theta = 100 x cos 5 degrees = 100 x 0.9962 = 99.62 m."},
      {q:"The angle of elevation of the top of a tower from a point 30 m from its base is 45 degrees. The height of the tower is:", o:["15 m", "30 m", "45 m", "60 m"], a:1, e:"tan 45 = height / 30. Since tan 45 = 1, the height = 30 m."}
    ];

// ── ✏️ EDIT HERE - Unit: "Mathematics (Surveying)" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Mathematics (Surveying)"] = window.EXTRA["Mathematics (Surveying)"] || {};
window.EXTRA["Mathematics (Surveying)"].mcq = [
      {q:"1 ropani is equal to:", o:["508.72 sq m", "338.62 sq m", "6,772.63 sq m", "1,000 sq m"], a:0, e:"1 ropani = 16 aana = 508.72 sq m. It is used mainly in the hill region and the Kathmandu Valley."},
      {q:"1 bigha is equal to how many kattha?", o:["16", "20", "25", "32"], a:1, e:"1 bigha = 20 kattha, and 1 kattha = 20 dhur. 1 bigha is approximately 6,772.63 sq m and is used in the Terai region."},
      {q:"1 ropani is divided into how many aana?", o:["10", "12", "16", "20"], a:2, e:"1 ropani = 16 aana, 1 aana = 4 paisa, and 1 paisa = 4 daam."},
      {q:"The area of a rectangular plot 40 m by 25 m is:", o:["800 sq m", "900 sq m", "1,000 sq m", "1,200 sq m"], a:2, e:"Area = length x breadth = 40 x 25 = 1,000 sq m."},
      {q:"The method of computing the area of an irregular figure by dividing it into an even number of equal strips is:", o:["Trapezoidal rule", "Simpson's rule", "Heron's formula", "Bowditch rule"], a:1, e:"Simpson's rule requires an even number of equal intervals (an odd number of ordinates) and assumes the boundary between successive ordinates is a parabolic arc, giving greater accuracy than the trapezoidal rule."}
    ];

// ── ✏️ EDIT HERE - Unit: "Instruments & Its Maintenance" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Instruments & Its Maintenance"] = window.EXTRA["Instruments & Its Maintenance"] || {};
window.EXTRA["Instruments & Its Maintenance"].mcq = [
      {q:"The temporary adjustment of a theodolite at a station consists of:", o:["Setting up, centring, levelling and focusing", "Only removing the collimation error", "The two peg test", "Cleaning the lenses"], a:0, e:"Temporary adjustments are made at every station: setting up the tripod, centring over the station mark, levelling the instrument and focusing the eyepiece and object glass to remove parallax. Permanent adjustments correct instrumental errors."},
      {q:"A total station is a combination of an electronic theodolite and:", o:["A plane table", "An electronic distance measuring device", "A compass", "A chain"], a:1, e:"A total station combines an electronic theodolite for measuring angles with an EDM for measuring distances, together with an on board computer for computing and storing coordinates."},
      {q:"The instrument used for measuring horizontal and vertical angles is the:", o:["Chain", "Theodolite", "Ranging rod", "Arrow"], a:1, e:"The theodolite is the standard instrument for the precise measurement of horizontal and vertical angles in surveying."},
      {q:"The two peg test is performed to check:", o:["The centring of a theodolite", "The collimation error of a level", "The length of a chain", "The magnetic declination"], a:1, e:"The two peg test checks whether the line of collimation of a level is truly horizontal when the bubble is centred, that is, whether a collimation error exists."},
      {q:"Parallax in a telescope is removed by:", o:["Levelling the instrument", "Proper focusing of the eyepiece and object glass", "Centring the instrument", "Changing the tripod"], a:1, e:"Parallax occurs when the image does not fall exactly in the plane of the cross hairs. It is removed by first focusing the eyepiece on the cross hairs and then focusing the object glass on the object."}
    ];
