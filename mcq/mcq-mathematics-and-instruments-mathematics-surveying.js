/* ================= MCQ QUESTIONS - Mathematics and Instruments - Unit 4: Mathematics (Surveying) =================
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
window.EXTRA = window.EXTRA || {};

window.EXTRA["Mathematics (Surveying)"] = window.EXTRA["Mathematics (Surveying)"] || {};
window.EXTRA["Mathematics (Surveying)"].mcq = [
      {q:"1 ropani is equal to:", o:["1,000 sq m", "508.72 sq m", "338.62 sq m", "6,772.63 sq m"], a:1, e:"1 ropani = 16 aana = 508.72 sq m. It is used mainly in the hill region and the Kathmandu Valley."},
      {q:"1 bigha is equal to how many kattha?", o:["32", "16", "20", "25"], a:2, e:"1 bigha = 20 kattha, and 1 kattha = 20 dhur. 1 bigha is approximately 6,772.63 sq m and is used in the Terai region."},
      {q:"1 ropani is divided into how many aana?", o:["20", "10", "12", "16"], a:3, e:"1 ropani = 16 aana, 1 aana = 4 paisa, and 1 paisa = 4 daam."},
      {q:"The area of a rectangular plot 40 m by 25 m is:", o:["1,000 sq m", "1,200 sq m", "800 sq m", "900 sq m"], a:0, e:"Area = length x breadth = 40 x 25 = 1,000 sq m."},
      {q:"The method of computing the area of an irregular figure by dividing it into an even number of equal strips is:", o:["Trapezoidal rule", "Simpson's rule", "Heron's formula", "Bowditch rule"], a:1, e:"Simpson's rule requires an even number of equal intervals (an odd number of ordinates) and assumes the boundary between successive ordinates is a parabolic arc, giving greater accuracy than the trapezoidal rule."},
      {q:"1 kattha is equal to:", o:["338.63 sq m", "508 sq m", "16.9 sq m", "676 sq m"], a:0, e:"1 kattha = 20 dhur = 338.63 sq m; 1 bigha = 20 kattha."},
      {q:"1 aana is equal to:", o:["31.8 sq m", "50.9 sq m", "8.45 sq m", "16.9 sq m"], a:0, e:"1 aana = 31.8 sq m; 1 ropani = 16 aana = 508.74 sq m."},
      {q:"1 bigha is equal to:", o:["3,390 sq m", "6,773 sq m", "1,270 sq m", "5,080 sq m"], a:1, e:"1 bigha = 20 kattha ≈ 6,772.63 sq m."},
      {q:"1 paisa (hill land unit) is equal to:", o:["3.97 sq m", "7.95 sq m", "15.9 sq m", "31.8 sq m"], a:1, e:"1 ropani = 64 paisa, so 1 paisa = 508.74/64 ≈ 7.95 sq m."},
      {q:"The trapezoidal rule for area requires offsets at:", o:["Random points", "Doubled end spacing", "Equal intervals", "Only the two ends"], a:2, e:"Area = (interval)×[(first+last)/2 + sum of middles]; Simpson rule additionally needs an even number of strips."},
      {q:"The area of a triangle with base 24 m and height 15 m is:", o:["90 sq m", "360 sq m", "180 sq m", "120 sq m"], a:2, e:"Area = ½×24×15 = 180 sq m."},
      {q:"2 bigha 5 kattha is equal to how many kattha?", o:["50", "25", "30", "45"], a:3, e:"2×20 + 5 = 45 kattha."},
      {q:"Offsets 0, 4, 6, 5, 0 m at 10 m intervals. The area by the trapezoidal rule is:", o:["100 sq m", "120 sq m", "180 sq m", "150 sq m"], a:3, e:"Area = 10×[(0+0)/2 + 4+6+5] = 10×15 = 150 sq m."},
      {q:"The area of an oblique triangle ABC of base b and perpendicular height h is:", o:["1/(2bh)", "√(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2", "½ bc sin A", "All of the above"], a:3, e:"All the formulas are valid for the area of a triangle."},
      {q:"One hectare of an area is equivalent to:", o:["10² m²", "10⁴ m²", "10⁶ m²", "10⁹ m²."], a:1, e:"One hectare = 10,000 m² = 10⁴ m²."},
      {q:"If n is the number of sides and L the length of sides of a regular polygon, its area is:", o:["n/4 L² cot²(180°/n)", "n/4 L² sec²(180°/n)", "n/4 L² cosec²(180°/n)", "n/4 L² tan²(180°/n)"], a:0, e:"Area = n/4 L² cot(180°/n)."},
      {q:"The method suitable for computing the area when the boundary line departs considerably from a straight line is:", o:["mid-ordinate rule", "average ordinate rule", "trapezoidal rule", "Simpson's rule"], a:3, e:"Simpson's rule is suitable for curved boundaries."},
      {q:"Area enclosed between a curved boundary and a chain line can be found by:", o:["Simpson's rule", "Poncelet's rule", "Francke's rule", "All of these"], a:3, e:"All these rules can be used."},
      {q:"Simpson's rule for calculating area is applicable only when the ordinates are:", o:["odd", "even", "Either (a) or (b)", "None of these"], a:0, e:"Simpson's rule requires an odd number of ordinates."},
      {q:"Which of the following figures are equal to one acre?", o:["(i), (ii) and (iii)", "(ii), (iii) and (iv)", "(i), (ii) and (iv)", "(i), (iii) and (iv)"], a:2, e:"1 acre = 43560 sq. ft = 40 gunthas = 4840 sq. yards."},
      {q:"For calculating area of a right angled triangle ABC with angle C being 90° which of the following(s) is (are) correct?", o:["Only (i) is correct", "Only (i) and (ii) are correct", "Only (i) and (iii) are correct", "All (i), (iii) and (iv) are correct"], a:1, e:"Formulas (i) and (ii) are correct."},
      {q:"The assumption that the boundaries between the extremities of three consecutive offsets is a parabolic arc whose axis is parallel to the offsets is made for:", o:["(i) and (iii) are correct", "(ii) and (iii) are correct", "Only (iii) is correct", "only (i) is correct"], a:2, e:"This assumption is made for Simpson's one-third rule."},
      {q:"In measuring area of the land surveyed the numbers of offset were 16. Which of the following rule(s) can not be used directly for estimating the area?", o:["(i)", "(i) and (ii)", "(ii) and (iii)", "(iii)"], a:3, e:"Simpson's rule requires an odd number of offsets."},
      {q:"The area of a closed traverse is given by algebraic sum of the products of latitude of each line with its longitude. The method is known as area by:", o:["(ii) only", "(iv) only", "(i) and (iv)", "(ii) and (iii) only"], a:0, e:"This method is known as area by latitude and meridian distance."}
    ];
