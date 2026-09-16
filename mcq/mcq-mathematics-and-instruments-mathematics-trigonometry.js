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
  *
 * RE-REVIEWED (full deep pass) 2026-09-16: every item re-checked; answer keys
 * corrected where the keyed option was wrong, unanswerable stems rewritten,
 * duplicate options rebuilt so exactly one answer is defensible, and every
 * explanation rewritten to state the reason. Item count and order unchanged.
 * ============================================================================== */

window.EXTRA = window.EXTRA || {};

window.EXTRA["Mathematics (Trigonometry)"] = window.EXTRA["Mathematics (Trigonometry)"] || {};
window.EXTRA["Mathematics (Trigonometry)"].mcq = [
      {q:"The value of sin 30° is:", o:["1/2", "1", "0", "√3/2"], a:0, e:"sin ३०° = १/२ = ०.५। (cos ३०° = √३/२, tan ३०° = १/√३ — तीनै एकै त्रिभुजबाट: १ : √३ : २, Q52)।"},
      {q:"In a right angled triangle, tan θ is equal to:", o:["adjacent / hypotenuse", "opposite / adjacent", "hypotenuse / opposite", "opposite / hypotenuse"], a:1, e:"tan θ = perpendicular / base, that is the side opposite the angle divided by the side adjacent to it."},
      {q:"The value of sin²θ plus cos²θ is:", o:["θ", "0", "1", "2"], a:2, e:"This is the fundamental trigonometric identity: sin²θ + cos²θ = 1 for all values of θ."},
      {q:"A sloping distance of 100 m is measured along a line inclined at 5° to the horizontal. The horizontal distance is approximately:", o:["100.38 m", "104.00 m", "95.00 m", "99.62 m"], a:3, e:"Horizontal distance = slope distance × cos θ = 100 × cos 5° = 100 × 0.9962 = 99.62 m."},
      {q:"The angle of elevation of the top of a tower from a point 30 m from its base is 45°. The height of the tower is:", o:["30 m", "45 m", "60 m", "15 m"], a:0, e:"tan ४५° = उचाइ / दूरी = h/30 = १ → h = ३० m। (४५° मा उचाइ र दूरी बराबर हुन्छ, Q34)।"},
      {q:"The value of cos 60° is:", o:["1/2", "√3/2", "1", "0"], a:0, e:"cos ६०° = १/२ = sin ३०° (co-function: cos θ = sin(90°−θ))।"},
      {q:"In a right angled triangle, sin θ is equal to:", o:["perpendicular/hypotenuse", "perpendicular/base", "hypotenuse/perpendicular", "base/hypotenuse"], a:0, e:"sin θ = लम्ब (perpendicular, सामुन्ने भुजा) / कर्ण (hypotenuse)। tan θ = लम्ब/आधार, cos θ = आधार/कर्ण।"},
      {q:"The value of tan 45° is:", o:["1/2", "1", "√3", "0"], a:1, e:"tan ४५° = sin45°/cos45° = (1/√2)/(1/√2) = १।"},
      {q:"sec θ is the reciprocal of:", o:["cot θ", "cos θ", "sin θ", "tan θ"], a:1, e:"sec θ = १/cos θ (reciprocal)। cosec θ = १/sin θ र cot θ = १/tan θ।"},
      {q:"The value of sin 90° is:", o:["1/2", "√3/2", "1", "0"], a:2, e:"sin ९०° = १ (र cos ९०° = ०) — unit circle मा ९०° को बिन्दु (0,1)।"},
      {q:"If sin θ = 3/5, then cos θ (θ acute) is:", o:["3/4", "5/3", "4/5", "5/4"], a:2, e:"sin θ = ३/५ → cos θ = √(1 − 9/25) = √(16/25) = ४/५ (३-४-५ त्रिभुज; θ acute भए धनात्मक)।"},
      {q:"The angle of depression is measured from:", o:["The object upward", "The ground upward", "The vertical downward", "The horizontal line of sight downward"], a:3, e:"Angle of depression सधैं क्षितिजीय दृष्टि रेखाबाट तलतिर (horizontal line of sight downward) नापिन्छ; elevation तलबाट माथितिर।"},
      {q:"A 50 m slope at 30° to the horizontal has a vertical rise of:", o:["25√3 m", "50 m", "100 m", "25 m"], a:3, e:"Rise = l sin θ = 50 × sin ३०° = 50 × 0.5 = २५ m (समतल दूरी = 50 cos30° = 43.3 m)।"},
      {q:"5 sinθ-4=0 भए tanθ को मानकति हुन्छ ?", o:["3/4", "3/5", "4/3", "5/3"], a:2, e:"5 sinθ − 4 = 0 → sin θ = ४/५ → cos θ = ३/५ (३-४-५) → tan θ = sin/cos = ४/३।"},
      {q:"2 π Radiation is equal to", o:["360⁰", "400⁰", "270⁰", "180⁰"], a:0, e:"२π radian = ३६०° (एक पूरा घुमाइ); π radian = १८०°।"},
      {q:"१० m को एउटा भ्याडले भित्तासित 60⁰ को कोण बनाउँछ भने भ्याडको अकानें छेउदेखि भित्तासम्मको दुरी कति होला ?", o:["8.6 m", "17.3 m", "5 m", "4 m"], a:0, e:"भ्याडले भित्तासित (wall सँग) ६०° को कोण बनाउँछ — त्यसैले भित्ता र भ्याडको फेदको दूरी = 10 × sin 60° = 10 × 0.866 = ८.६ m। (भित्तामा पुगिने उचाइ = 10 cos 60° = ५ m — प्रश्नले दूरी सोधेको छ, उचाइ होइन।) 🔴 मूल key ५ m गलत थियो: ५ m भनेको भित्तामा चढिने उचाइ हो।"},
      {q:"sin 135⁰ बराबर कति ?", o:["√2/3", "√3", "1/2", "1/√2"], a:3, e:"sin १३५° = sin(180° − 45°) = sin ४५° = १/√२ (दोस्रो चतुर्थांशमा sin धनात्मक)।"},
      {q:"tanθ = 2 sinθ भए θ को मान कति degree हुन्छ ?", o:["30⁰", "45⁰", "60⁰", "90⁰"], a:2, e:"tanθ = 2 sinθ → sinθ/cosθ = 2 sinθ → cos θ = १/२ → θ = ६०° (Q47 उही प्रश्न)।"},
      {q:"2cos²θ -1 = 0 भए θ को मान कति हुन्छ ?", o:["30⁰", "45⁰", "60⁰", "90⁰"], a:1, e:"2cos²θ − 1 = 0 → cos 2θ = 0 → 2θ = 90° → θ = ४५° (वा cos²θ = 1/2 → cos θ = 1/√2)।"},
      {q:"समतल सतहमा बनेको घरको भित्तामा जमिन संग 60° को कोण बनाएर राखिएको 2√3 को लामो भ्याडबाट कति माथि सम्म चढ्न सकिन्छ ?", o:["1 m", "2 m", "3 m", "√2 m"], a:2, e:"भ्याडले जमिनसँग ६०° को कोण बनाउँछ: चढिने उचाइ = 2√3 × sin ६०° = 2√3 × (√3/2) = ३ m (Q40)।"},
      {q:"Which is true ?", o:["2π radian is equal to 24 hour", "24 hour is equal to 360⁰", "360⁰ is equal to 400ᵍ", "All of the above"], a:3, e:"तीनै सही: २π radian = ३६०° = एक पूरा परिक्रमा = २४ घण्टा (पृथ्वीको एक घुमाइ), र ३६०° = ४००ᵍ (grad)।"},
      {q:"From a point p on a level ground the angle of elevation of the top of the tower is 60⁰. The tower is 50m high. The distance from p to bottom of the tower is –", o:["28.87m", "57.74m", "100m", "86.60m"], a:0, e:"tan ६०° = उचाइ / दूरी = 50/d → d = 50/√3 = 50/1.732 = २८.८७ m।"},
      {q:"What is the value of tan4π/3", o:["tan2π/3", "tanπ/2", "tanπ/3", "tan2π"], a:2, e:"tan(4π/3) = tan(4π/3 − π) = tan(π/3) — tan को आवर्त π (१८०°) भएकाले। (tan π/3 = √3)।"},
      {q:"६ मिटर लामो रुख भाँचिएर टुप्पोले जमिन सतहमा छुँदा भाँचिएको भाग ४ मिटर छ भने भाँचिएको भागले जमीनको सतहसँग कति डिग्रीको कोण बनाउँछ ?", o:["30⁰", "45⁰", "60⁰", "None of above"], a:0, e:"खडा भाग = ६ − ४ = २ m, भाँचिएको भाग (कर्ण) = ४ m। sin θ = २/४ = ०.५ → θ = ३०°। 🟠 मूल stem '६ मिटर लामो रुख 4m बाट भाँचिएर' असङ्गत थियो — ४ m उचाइबाट भाँचिँदा बाँकी भाग २ m मात्र हुन्छ र जमिन छुन सक्दैन; 'भाँचिएको भाग ४ मिटर' बनाइएको, key ३०° उही।"},
      {q:"Sin²15⁰ + cos²15⁰ मान कति हुन्छ ?", o:["1", "0", "2", "3"], a:0, e:"sin²θ + cos²θ = १ — आधारभूत सर्वसमिका, कुनै पनि θ (१५° सहित) का लागि (Q3, Q61)।"},
      {q:"Mills भन्नाले के को इकाईलाई बुझाउँछ ?", o:["दुरी", "कोण", "क्षेत्रफल", "कुनै पनि होइन"], a:1, e:"Mils कोण (angle) को एकाइ हो — सैन्य/तोपखाना प्रयोग; ६४०० mils = ३६०° (१ mil ≈ ०.०५६°)।"},
      {q:"कुन दुई बिन्दु बीचको छड्के दुरी (slope distance) / र sloping angle θ भए ति दुई बिन्दुहरु बीचको Horizontal Distance कति होला ?", o:["l Sinθ", "l Cosθ", "l Tanθ", "l / Sinθ"], a:1, e:"Horizontal (समतल) दूरी = l cos θ, जहाँ l = slope (छड्के) दूरी र θ = sloping कोण; उचाइ फरक = l sin θ (Q49)। 🟠 मूल विकल्पहरू '/Sinθ, /Cosθ…' — 'l' (ell) हराएको थियो; sच्याइएको, key उही।"},
      {q:"SI system of triangular measurement is.......", o:["Degree", "Grade", "Radian", "All of above"], a:2, e:"SI system मा कोणको एकाइ Radian (circular measure) हो; degree/grade SI इकाइ होइनन् (Q46: circular system)।"},
      {q:"5 sin-3=0 भए tan को मान कति हुन्छ ?", o:["3/4", "3/5", "4/3", "5/3"], a:0, e:"5 sinθ − 3 = 0 → sin θ = ३/५ → cos θ = ४/५ (३-४-५) → tan θ = ३/४।"},
      {q:"यदि Sinθ = 0.5 छ भने Tanθ बराबर कति हुन्छ ?", o:["1/√3", "1/√2", "√3", "0.450"], a:0, e:"sin θ = ०.५ → θ = ३०° → tan ३०° = १/√३ (≈ ०.५७७)।"},
      {q:"Which one of following is correct ?", o:["Cos A = (b²+c²-a²)/2bc", "Cos A = (c²+a²-b²)/2ac", "Cos A = (a²+b²-c²)/2ab", "All"], a:3, e:"Cosine rule का तीनै रूप मान्य — कोण A: (b²+c²−a²)/2bc; कोण B: (c²+a²−b²)/2ac; कोण C: (a²+b²−c²)/2ab।"},
      {q:"If the vertical angle is 50⁰ Then, zenithal angle is.", o:["50⁰", "130⁰", "40⁰", "ख र ग दुबै"], a:2, e:"Zenith angle (Z) माथिल्लो ठाडो (zenith) बाट नापिन्छ र vertical angle (α) क्षितिजबाट: Z = ९०° − α। α = +५०° (elevation) → Z = ४०°। 🔴 मूल key १३०° गलत थियो (१३०° तब आउँथ्यो जब α = −४०° अर्थात् depression हुन्थ्यो); मूल व्याख्याको '90° + 40° = 130°' पनि गलत।"},
      {q:"Sin A = Cos A भए A को मान कति होला ?", o:["0⁰", "30⁰", "45⁰", "60⁰"], a:2, e:"sin A = cos A → tan A = १ → A = ४५° (Q50, Q53)।"},
      {q:"कुनै रुख र रुखको छायाँको लम्बाई बराबर छ भने Angle of elevation कति हुन्छ ?", o:["३०⁰", "४५⁰", "६०⁰", "९०⁰"], a:1, e:"रुखको उचाइ = छायाँको लम्बाइ → tan θ = h/h = १ → θ = ४५° (Q5, Q51)।"},
      {q:"समकोण त्रिभुजमा tan A = 3/4 भए COS A को मान कति हुन्छ ?", o:["3/4", "3/5", "4/5", "2/5"], a:2, e:"tan A = ३/४ → ३-४-५ त्रिभुज: sin A = ३/५, cos A = ४/५ (Q60)।"},
      {q:"एउटा सिधा रुख हावाको कारणले भाँचिएर भूमिमा टुप्पोले छुदा ३०° को कोण बन्न गयो भने उक्त रुख कहाँनेर बाट भाँचिएको होला ?", o:["1/2 भागबाट", "1/3 भागबाट", "1/4 भागबाट", "2/3 भागबाट"], a:1, e:"टुप्पोले जमिनमा ३०° को कोण बनाउँछ: sin ३०° = खडा भाग / भाँचिएको भाग = h/(L−h) = १/२ → L−h = 2h → h = L/३। अर्थात् रुख १/३ भाग (जमिनबाट) बाट भाँचिएको (Q24)।"},
      {q:"If the circumference of a circle is divided into 360 congruent parts, the angle subtended by one part at the center of the circle is called", o:["angle", "radian", "degree", "minute"], a:2, e:"वृत्तको परिधिलाई ३६० बराबर भागमा बाँड्दा केन्द्रमा बन्ने कोण = १ degree (sexagesimal system, Q55)।"},
      {q:"(secθ - tanθ)² = ?", o:["1 + sinθ/1 - sinθ", "(1 - sinθ)/(1 + sinθ)", "(1 - cosθ)/(1+cosθ)", "cosecθ"], a:1, e:"(secθ − tanθ)² = ((1 − sinθ)/cosθ)² = (1−sinθ)²/(1−sin²θ) = (1−sinθ)²/((1−sinθ)(1+sinθ)) = (१ − sinθ)/(१ + sinθ)।"},
      {q:"If l and r are in cms, then the unit of θ is in", o:["radians", "degrees", "cm²", "None of Above"], a:0, e:"θ = l/r (चाप ÷ अर्धव्यास) — दुवै cm मा भए एकाइ काटिन्छ र θ radian मा निस्कन्छ (dimensionless)।"},
      {q:"समतल सतहमा बनेको घरको भित्तामा जमिनसंग 60⁰ को कोण बनाएर राखिएको 2√3 m. लामो भँयाङ वाट कति माथि सम्म चढ्न सकिन्छ ?", o:["1m", "2m", "3m", "√2m"], a:2, e:"जमिनसँग ६०°: उचाइ = 2√3 × sin ६०° = 2√3 × √3/2 = ३ m (Q20)।"},
      {q:"The central angle of an arc of a circle whose length is equal to the radius of the circle is called the", o:["degree", "radian", "minute", "second."], a:1, e:"Radian: चापको लम्बाइ = अर्धव्यास भए केन्द्रमा बन्ने कोण (≈ ५७°१७′४५″, Q44, Q48)।"},
      {q:"Trigonometric function मा Tangent को मान कुन quadrant मा पर्ने कोणको लागि सधैं positive हुन्छ ?", o:["I Quadrant", "II Quadrant and IV Quadrant", "III Quadrant", "I and III Quadrant"], a:3, e:"Tangent = sin/cos — पहिलो (I) चतुर्थांशमा दुवै + (त्यसैले tan +), तेस्रो (III) मा दुवै − (त्यसैले tan +); II र IV मा tan ऋणात्मक।"},
      {q:"तलका मध्ये कुन सही छ ?", o:["1 grade < 1 radian < 1 degree", "1 grade < 1 degree < 1 radian", "1grade = 1 radian = 1 degree", "1radian < 1 degree < 1 grade"], a:1, e:"१ grad = ०.९° (३६०° = ४००ᵍ), १ radian ≈ ५७.३°। त्यसैले १ grade < १ degree < १ radian।"},
      {q:"1 radian =", o:["57⁰17'45\"", "1⁰", "180⁰", "180'"], a:0, e:"१ radian = १८०°/π = ५७.२९५८° = ५७°१७′४५″।"},
      {q:"tan θ = sinθ/cosθ कुन triangle सँग सम्बन्धित छ ?", o:["समकोण त्रिभुज", "समद्विबाहु त्रिभुज", "समबाहु त्रिभुज", "विसमबाहु त्रिभुज"], a:0, e:"tan θ = लम्ब/आधार = sin θ / cos θ — समकोण त्रिभुज (right angled triangle) को परिभाषा।"},
      {q:"The system of measurement in which the angle is measured in radians called the", o:["Circular system", "Sexagesimal system", "MKS system", "CGS system"], a:0, e:"कोण radian मा नाप्ने प्रणालीलाई Circular system भनिन्छ (degree को Sexagesimal, Q55)।"},
      {q:"tan θ = 2 sinθ भए θ मान कति Degree हुन्छ ?", o:["60⁰", "45⁰", "30⁰", "90⁰"], a:0, e:"tanθ = 2 sinθ → cos θ = १/२ → θ = ६०° (Q18 उही)।"},
      {q:"A radian is the measure of the central angle of an arc of a circle whose length is equal to the", o:["half of radius of the circle", "diameter of circle", "radius of the circle", "one-third of radius of the circle"], a:2, e:"Radian = त्यो केन्द्रीय कोण जसको चापको लम्बाइ वृत्तको अर्धव्यास (radius) बराबर हुन्छ (Q41)।"},
      {q:"यदि slope angle θ भए l slope distance भए Horizontal distance कति हुन्छ ?", o:["l sinθ", "l tan θ", "l cos θ", "l cot θ"], a:2, e:"Horizontal distance = l cos θ (l = slope distance, θ = slope कोण); उचाइ फरक = l sin θ (Q27, Mathematics-Surveying Q58)।"},
      {q:"Cos θ = Sin θ भए θ को मान कति होला ?", o:["30⁰", "45⁰", "60⁰", "90⁰"], a:1, e:"cos θ = sin θ → θ = ४५° (Q33, Q53)।"},
      {q:"धरहराको उचाई र छाया बराबर भइको बेला छायाको अन्तिम बिन्दुले धरहराको टुप्पोमा कति प्रेडको कोण बनाउँदछ ?", o:["30ᵍ", "45ᵍ", "60ᵍ", "50ᵍ"], a:3, e:"उचाइ = छायाँ भए elevation angle = tan⁻¹(1) = ४५°। ग्रेड (grad) मा: ४५° × (400/360) = ५०ᵍ (१ grad = ०.९°)। 🔴 मूल key ४५ᵍ गलत — ४५ᵍ = ४०.५° हुन्छ; प्रश्नले ग्रेड मा सोधेको हुनाले ५०ᵍ सही (Q43, Q57 मा grad प्रयोग हेर्नुहोला)।"},
      {q:"30°, 60° र 90° angle भएको triangle को sides कुन हुन्छ ?", o:["1:1:√2", "1:√2:√3", "1:√3:2", "none"], a:2, e:"३०°-६०°-९०° त्रिभुजका भुजा = १ : √३ : २ (सानो भुजा ३०° को सामुन्ने; ४५°-४५°-९०° मा १:१:√२)।"},
      {q:"If sinθ - cosθ = 0, then cosecθ equal to....", o:["√3/2", "1/2", "√2", "1"], a:2, e:"sinθ − cosθ = 0 → sin θ = cos θ → θ = ४५° → cosec ४५° = १/sin45° = √२।"},
      {q:"If 4sin²θ cot²θ = 3, then θ equal to ....", o:["0⁰", "30⁰", "45⁰", "60⁰"], a:1, e:"4 sin²θ cot²θ = 4 sin²θ × (cos²θ/sin²θ) = 4 cos²θ = ३ → cos²θ = ३/४ → cos θ = √३/२ → θ = ३०°।"},
      {q:"The system of measurement in which the angle is measured in degrees, and its sub-units, minutes and seconds is called the", o:["Circular system", "Sexagesimal system", "MKS system", "CGS system"], a:1, e:"Degree र उप-एकाइ (minute, second) मा नाप्ने प्रणालीलाई Sexagesimal system भनिन्छ (६० को आधार; radian को Circular, Q46)।"},
      {q:"Secθ = 5√2/7 भए sinθ बराबर कति हुन्छ ?", o:["1/7", "1/5√2", "7", "7/5√2"], a:1, e:"sec θ = 5√2/7 → cos θ = 7/(5√2) → cos²θ = 49/50 = 0.98। sin θ = √(1 − 0.98) = √0.02 = √(1/50) = १/(५√२) ≈ ०.१४१४। 🔴 मूल key '१/७' (≈ ०.१४२९) गलत — यो सही मानसँग मिल्दोजुल्दो भएर छानिएको भ्रामक विकल्प हो; मूल व्याख्याले नै √(1/50) = 1/(5√2) भन्छ।"},
      {q:"Hexagon को भित्रीकोणको योग कति हुन्छ ?", o:["1000g", "800g", "600g", "400g"], a:1, e:"Hexagon (n=6) को भित्री कोणको योग = (n−2) × १८०° = ४ × १८०° = ७२०° = ७२० × (400/360) = ८००ᵍ (grad मा)।"},
      {q:"Find Sin A if AB = 3cm and CB = 4cm, angle B = 90°", o:["3/4", "4/5", "3/5", "5/4"], a:1, e:"B मा समकोण (९०°) भए AC कर्ण = √(3² + 4²) = ५ cm। sin A = (A को सामुन्ने भुजा BC) / कर्ण = ४/५। 🔴 मूल key ३/५ गलत — ३/५ भनेको cos A हो; मूल व्याख्याले नै 'sin A = CB/AC = 4/5, तर विकल्पमा 3/5 छ' भनेर स्वीकार गरेको थियो।"},
      {q:"यदि 3tanθ = √3 भए θ को मान निकाल्नुहोस् ?", o:["30°", "60°", "45°", "0°"], a:0, e:"3 tanθ = √3 → tan θ = √3/3 = १/√३ → θ = ३०°।"},
      {q:"यदि tan A = 3/4 भए sin A को मान कति होला ?", o:["4/5", "1/4", "3/5", "9/16"], a:2, e:"tan A = ३/४ → ३-४-५ त्रिभुज: sin A = ३/५, cos A = ४/५ (Q35)।"},
      {q:"Sin² 45° + Cos² 45° - Tan² 45° को मान निकाल्नुहोस् ?", o:["0", "1", "2", "1/2√2"], a:0, e:"sin²45° + cos²45° − tan²45° = १ − १ = ० (sin²+cos² = १ र tan ४५° = १, यसको वर्ग पनि १)।"},
      {q:"Computer मा कोणको एकाई के हुन्छ ?", o:["Radian", "Mils", "Degree", "Gread"], a:0, e:"कम्प्युटर/प्रोग्रामिङ (र अधिकांश वैज्ञानिक गणना) मा कोणको एकाइ Radian हो — Python, Excel, C आदि सबै trigonometric function मा radian प्रयोग गर्छन्।"},
    ];
