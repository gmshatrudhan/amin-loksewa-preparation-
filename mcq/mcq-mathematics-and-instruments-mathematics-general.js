/* ================= MCQ QUESTIONS - Mathematics and Instruments - Unit 1: Mathematics (General) =================
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

// ── ✏️ EDIT HERE - Unit: "Mathematics (General)" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE MCQ: q=question, o=[4 options], a=correct option NUMBER (0=1st,1=2nd,2=3rd,3=4th!), e=explanation.
window.EXTRA["Mathematics (General)"] = window.EXTRA["Mathematics (General)"] || {};
window.EXTRA["Mathematics (General)"].mcq = [
      {q:"The area of a rectangular plot is 240 sq m and its length is 20 m. What is its perimeter?", o:["72 m", "60 m", "64 m", "68 m"], a:2, e:"Breadth = 240 / 20 = 12 m. Perimeter = 2 x (20 + 12) = 2 x 32 = 64 m."},
      {q:"25 percent of 480 is:", o:["130", "100", "110", "120"], a:3, e:"25 percent of 480 = 480 x 25/100 = 120."},
      {q:"If the ratio of two numbers is 3:5 and their sum is 64, the smaller number is:", o:["24", "27", "30", "21"], a:0, e:"Let the numbers be 3x and 5x. Then 8x = 64, so x = 8. The smaller number is 3 x 8 = 24."},
      {q:"The simple interest on Rs 5,000 at 8 percent per annum for 2 years is:", o:["Rs 700", "Rs 800", "Rs 900", "Rs 600"], a:1, e:"SI = P x R x T / 100 = 5000 x 8 x 2 / 100 = Rs 800."},
      {q:"A sum becomes Rs 24,200 in 2 years at 10 percent compound interest. The principal is:", o:["Rs 22,000", "Rs 23,000", "Rs 20,000", "Rs 21,000"], a:2, e:"A = P(1 + r/100)^n, so 24200 = P x (1.1)^2 = 1.21P. Therefore P = 24200 / 1.21 = Rs 20,000."},
      {q:"The average of 12, 18, 24 and 30 is:", o:["21", "20", "22", "19"], a:0, e:"Average = (12+18+24+30)/4 = 84/4 = 21."},
      {q:"The HCF of 24 and 36 is:", o:["12", "18", "72", "6"], a:0, e:"24 = 2³×3, 36 = 2²×3²; HCF = 2²×3 = 12."},
      {q:"3/5 expressed as a percentage is:", o:["53%", "60%", "65%", "35%"], a:1, e:"(3/5)×100 = 60%."},
      {q:"An article bought for Rs 800 is sold for Rs 920. The profit percent is:", o:["14%", "15%", "10%", "12%"], a:1, e:"Profit = 920−800 = 120; (120/800)×100 = 15%."},
      {q:"The square root of 729 is:", o:["29", "37", "27", "23"], a:2, e:"27² = 729, so √729 = 27."},
      {q:"If 5 pens cost Rs 125, the cost of 8 pens is:", o:["Rs 250", "Rs 180", "Rs 200", "Rs 225"], a:2, e:"One pen = 125/5 = Rs 25; 8 pens = 8×25 = Rs 200 (unitary method)."},
      {q:"A book marked Rs 500 is sold at a 12% discount. The selling price is:", o:["Rs 460", "Rs 420", "Rs 450", "Rs 440"], a:3, e:"Discount = 12% of 500 = Rs 60; price = 500−60 = Rs 440."},
      {q:"A tap fills a tank in 6 hours; another empties it in 8 hours. With both open, the tank fills in:", o:["7 hours", "14 hours", "2 hours", "24 hours"], a:3, e:"Net rate = 1/6 − 1/8 = 1/24 per hour, so 24 hours to fill."}
    ];
