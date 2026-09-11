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
      {q:"Offsets 0, 4, 6, 5, 0 m at 10 m intervals. The area by the trapezoidal rule is:", o:["100 sq m", "120 sq m", "180 sq m", "150 sq m"], a:3, e:"Area = 10×[(0+0)/2 + 4+6+5] = 10×15 = 150 sq m."}
    ];
