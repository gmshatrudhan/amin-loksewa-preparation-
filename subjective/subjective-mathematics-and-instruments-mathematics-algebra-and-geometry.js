/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Mathematics and Instruments - Unit 2: Mathematics (Algebra & Geometry) =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};

window.EXTRA["Mathematics (Algebra & Geometry)"] = window.EXTRA["Mathematics (Algebra & Geometry)"] || {};
window.EXTRA["Mathematics (Algebra & Geometry)"].sub = [
      {q:"Solve the simultaneous equations 3x + 2y = 16 and x - y = 2.", marks:5, hint:"From the second equation, x = y + 2. Substituting in the first: 3(y + 2) + 2y = 16, so 3y + 6 + 2y = 16, giving 5y = 10 and y = 2. Then x = 2 + 2 = 4. Therefore x = 4 and y = 2."},
      {q:"State and prove the Pythagoras theorem with a diagram.", marks:10, hint:"Statement: in a right angled triangle, the square on the hypotenuse is equal to the sum of the squares on the other two sides, that is AC squared = AB squared + BC squared. Proof: in triangle ABC right angled at B, draw BD perpendicular to AC. Triangles ADB and ABC are similar, so AB squared = AD x AC. Triangles BDC and ABC are similar, so BC squared = DC x AC. Adding, AB squared + BC squared = AC x (AD + DC) = AC x AC = AC squared. Hence proved. A neat labelled figure must be drawn."},
      {q:"Find the area of a triangle whose sides are 13 m, 14 m and 15 m.", marks:5, hint:"Using Heron's formula: s = (a + b + c)/2 = (13 + 14 + 15)/2 = 21 m. Area = sqrt(s(s-a)(s-b)(s-c)) = sqrt(21 x 8 x 7 x 6) = sqrt(7056) = 84 sq m."},
      {q:"Solve the quadratic equation x² − 7x + 12 = 0.", marks:5, hint:"Factorise: x²−7x+12 = (x−3)(x−4) = 0, so x = 3 or x = 4. Check: 9−21+12 = 0 ✓."},
      {q:"State the area formulas for a rectangle, triangle, circle and trapezium, and find the area of a trapezium with parallel sides 12 m and 8 m and height 5 m.", marks:10, hint:"Rectangle l×b; triangle ½×base×height; circle πr²; trapezium ½×(sum of parallel sides)×height. Area = ½×(12+8)×5 = 50 sq m."}
    ];
