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
      {q:"The area of a rectangular plot is 240 sq m and its length is 20 m. What is its perimeter?", o:["60 m", "64 m", "68 m", "72 m"], a:1, e:"Breadth = 240 / 20 = 12 m. Perimeter = 2 x (20 + 12) = 2 x 32 = 64 m."},
      {q:"25 percent of 480 is:", o:["100", "110", "120", "130"], a:2, e:"25 percent of 480 = 480 x 25/100 = 120."},
      {q:"If the ratio of two numbers is 3:5 and their sum is 64, the smaller number is:", o:["21", "24", "27", "30"], a:1, e:"Let the numbers be 3x and 5x. Then 8x = 64, so x = 8. The smaller number is 3 x 8 = 24."},
      {q:"The simple interest on Rs 5,000 at 8 percent per annum for 2 years is:", o:["Rs 600", "Rs 700", "Rs 800", "Rs 900"], a:2, e:"SI = P x R x T / 100 = 5000 x 8 x 2 / 100 = Rs 800."},
      {q:"A sum becomes Rs 24,200 in 2 years at 10 percent compound interest. The principal is:", o:["Rs 20,000", "Rs 21,000", "Rs 22,000", "Rs 23,000"], a:0, e:"A = P(1 + r/100)^n, so 24200 = P x (1.1)^2 = 1.21P. Therefore P = 24200 / 1.21 = Rs 20,000."}
    ];
