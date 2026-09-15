/* ================= MCQ QUESTIONS - Mathematics and Instruments - Unit 3: Mathematics (Trigonometry) =================
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

window.EXTRA["Mathematics (Trigonometry)"] = window.EXTRA["Mathematics (Trigonometry)"] || {};
window.EXTRA["Mathematics (Trigonometry)"].mcq = [
      {q:"The value of sin 30° is:", o:["1/2", "1", "0", "√3/2"], a:0, e:"sin 30° = 1/2. Similarly cos 30 = √3/2 and tan 30 = 1/√3."},
      {q:"In a right angled triangle, tan θ is equal to:", o:["adjacent / hypotenuse", "opposite / adjacent", "hypotenuse / opposite", "opposite / hypotenuse"], a:1, e:"tan θ = perpendicular / base, that is the side opposite the angle divided by the side adjacent to it."},
      {q:"The value of sin²θ plus cos²θ is:", o:["θ", "0", "1", "2"], a:2, e:"This is the fundamental trigonometric identity: sin²θ + cos²θ = 1 for all values of θ."},
      {q:"A sloping distance of 100 m is measured along a line inclined at 5° to the horizontal. The horizontal distance is approximately:", o:["100.38 m", "104.00 m", "95.00 m", "99.62 m"], a:3, e:"Horizontal distance = slope distance × cos θ = 100 × cos 5° = 100 × 0.9962 = 99.62 m."},
      {q:"The angle of elevation of the top of a tower from a point 30 m from its base is 45°. The height of the tower is:", o:["30 m", "45 m", "60 m", "15 m"], a:0, e:"tan 45 = height / 30. Since tan 45 = 1, the height = 30 m."},
      {q:"The value of cos 60° is:", o:["1/2", "√3/2", "1", "0"], a:0, e:"cos 60° = 1/2 = sin 30°."},
      {q:"In a right angled triangle, sin θ is equal to:", o:["perpendicular/hypotenuse", "perpendicular/base", "hypotenuse/perpendicular", "base/hypotenuse"], a:0, e:"sin θ = opposite/hypotenuse; tan θ = opposite/adjacent."},
      {q:"The value of tan 45° is:", o:["1/2", "1", "√3", "0"], a:1, e:"tan 45° = sin45/cos45 = 1."},
      {q:"sec θ is the reciprocal of:", o:["cot θ", "cos θ", "sin θ", "tan θ"], a:1, e:"sec θ = 1/cos θ; cosec θ = 1/sin θ; cot θ = 1/tan θ."},
      {q:"The value of sin 90° is:", o:["1/2", "√3/2", "1", "0"], a:2, e:"sin 90° = 1 and cos 90° = 0."},
      {q:"If sin θ = 3/5, then cos θ (θ acute) is:", o:["3/4", "5/3", "4/5", "5/4"], a:2, e:"cos θ = √(1 − 9/25) = 4/5 (3-4-5 triangle)."},
      {q:"The angle of depression is measured from:", o:["The object upward", "The ground upward", "The vertical downward", "The horizontal line of sight downward"], a:3, e:"Depression is measured downward from horizontal at the observer; elevation upward from horizontal."},
      {q:"A 50 m slope at 30° to the horizontal has a vertical rise of:", o:["25√3 m", "50 m", "100 m", "25 m"], a:3, e:"Rise = 50×sin30° = 50×0.5 = 25 m."},

      {q:"5 sinθ-4=0 भए tanθ को मानकति हुन्छ ?", o:["3/4","3/5","4/3","5/3"], a:2, e:"sinθ = 4/5, cosθ = 3/5, tanθ = 4/3"},
      {q:"10 m को एउटा भ्याडले भित्तासित 60⁰ को कोण बनाउँछ भने भ्याडको अकानें छेउदेखि भित्तासम्मको दुरी कति होला ?", o:["8.6 m","17.3 m","5 m","4 m"], a:2, e:"दुरी = 10 × cos60⁰ = 10 × 0.5 = 5 m"},
      {q:"sin 135⁰ बराबर कति ?", o:["√2/3","√3","1/2","1/√2"], a:3, e:"sin 135⁰ = sin(180-45) = sin45⁰ = 1/√2"},
      {q:"समतल सतहमा बनेको घरको भित्तामा जमिन संग 60° को कोण बनाएर राखिएको 2√3 को लामो भ्याडबाट कति माथि सम्म चढ्न सकिन्छ ?", o:["1 m","2 m","3 m","√2 m"], a:2, e:"3 m"},
      {q:"2cos²θ -1 = 0 भए θ को मान कति हुन्छ ?", o:["30⁰","45⁰","60⁰","90⁰"], a:1, e:"45⁰"},
      {q:"समतल सतहमा बनेको घरको भित्तामा जमिन संग 60° को कोण बनाएर राखिएको 2√3 को लामो भ्याडबाट कति माथि सम्म चढ्न सकिन्छ ?", o:["1 m","2 m","3 m","√2 m"], a:2, e:"3 m"},
      {q:"50 m टाढा 60⁰ को कोण बनाएर उचाइ मापेमा कति आउँछ ?", o:["28.87m","57.74m","100m","86.60m"], a:0, e:"28.87m"},
      {q:"tan(5π/3) को मान कुनसँग बराबर हुन्छ ?", o:["tan4π/3","tanπ/2","tan2π/3","tanπ/3"], a:2, e:"tan2π/3"}
    ];
