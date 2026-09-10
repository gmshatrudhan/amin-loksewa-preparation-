/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Mathematics and Instruments - Unit 1: Mathematics (General) =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
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
