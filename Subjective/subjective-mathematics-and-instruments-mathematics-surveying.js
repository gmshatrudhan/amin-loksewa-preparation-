/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Mathematics and Instruments - Unit 4: Mathematics (Surveying) =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Mathematics (Surveying)" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Mathematics (Surveying)"] = window.EXTRA["Mathematics (Surveying)"] || {};
window.EXTRA["Mathematics (Surveying)"].sub = [
      {q:"Convert 3 ropani 2 aana into square metres.", marks:5, hint:"1 ropani = 508.72 sq m and 1 aana = 508.72 / 16 = 31.795 sq m. So 3 ropani = 3 x 508.72 = 1,526.16 sq m and 2 aana = 2 x 31.795 = 63.59 sq m. Total = 1,526.16 + 63.59 = 1,589.75 sq m approximately."},
      {q:"Explain the methods of computing the area of an irregular land parcel.", marks:10, hint:"1. Division into geometrical figures: the parcel is split into triangles, rectangles and trapezia and their areas are added. 2. Trapezoidal rule: area = d[(first ordinate + last ordinate)/2 + sum of remaining ordinates], where d is the common interval; the boundary is assumed straight between ordinates. 3. Simpson's rule: area = (d/3)[first + last + 4 x sum of odd ordinates + 2 x sum of even ordinates]; requires an even number of intervals and assumes a parabolic boundary, so it is more accurate. 4. Coordinate method: using the cross multiplication of the coordinates of the corners. 5. Planimeter: a mechanical or digital instrument used to measure area directly from a plan."},
      {q:"Compute the area of a plot by the coordinate method given the coordinates of the four corners.", marks:5, hint:"List the coordinates of the corners in order around the figure and repeat the first point at the end. Area = one half of the absolute value of the sum of (x of i multiplied by y of i plus one) minus the sum of (y of i multiplied by x of i plus one). For a plot with corners (0,0), (40,0), (40,25) and (0,25) the calculation gives area = 1,000 sq m."}
    ];
