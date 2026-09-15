/* ================= MCQ QUESTIONS - Mathematics and Instruments - Unit 2: Mathematics (Algebra & Geometry) =================
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

window.EXTRA["Mathematics (Algebra & Geometry)"] = window.EXTRA["Mathematics (Algebra & Geometry)"] || {};
window.EXTRA["Mathematics (Algebra & Geometry)"].mcq = [
      {q:"If 2x + 5 = 17, then x is:", o:["7", "4", "5", "6"], a:3, e:"2x = 17 - 5 = 12, so x = 6."},
      {q:"The sum of the interior angles of a triangle is:", o:["180°", "270°", "360°", "90°"], a:0, e:"The three interior angles of any plane triangle always add up to 180°."},
      {q:"The area of a circle of radius 7 cm (taking π = 22/7) is:", o:["121 sq cm", "154 sq cm", "144 sq cm", "132 sq cm"], a:1, e:"Area = πr² = (22/7) × 7 × 7 = 154 sq cm."},
      {q:"The area of a triangle with sides 13 m, 14 m and 15 m is:", o:["90 sq m", "80 sq m", "84 sq m", "88 sq m"], a:2, e:"s = (13 + 14 + 15)/2 = 21. By Heron's formula, area = √(21×8×7×6) = √7056 = 84 sq m."},
      {q:"In a right angled triangle the side opposite the right angle is called the:", o:["Median", "Base", "Perpendicular", "Hypotenuse"], a:3, e:"The hypotenuse is the longest side and lies opposite the right angle. By Pythagoras theorem, hypotenuse² equals the sum of the squares of the other two sides."},
      {q:"If 3x − 7 = 20, then x is:", o:["9", "7", "11", "27"], a:0, e:"3x = 27, so x = 9."},
      {q:"The value of (a+b)² − (a−b)² is:", o:["4ab", "a²+b²", "0", "2ab"], a:0, e:"Expanding: (a²+2ab+b²) − (a²−2ab+b²) = 4ab."},
      {q:"The perimeter of a square of side 15 m is:", o:["45 m", "60 m", "225 m", "30 m"], a:1, e:"Perimeter = 4×15 = 60 m; 225 sq m would be its area."},
      {q:"How many sides does a hexagon have?", o:["8", "6", "5", "7"], a:1, e:"Hexagon = 6 sides; pentagon 5, heptagon 7, octagon 8."},
      {q:"If x² = 144, the positive value of x is:", o:["16", "72", "12", "14"], a:2, e:"x = ±12; the positive root is 12."},
      {q:"The sum of the interior angles of a quadrilateral is:", o:["540°", "180°", "360°", "270°"], a:2, e:"(n−2)×180° = 2×180° = 360° for n = 4."},
      {q:"The circumference of a circle of diameter 14 cm (taking π = 22/7) is:", o:["66 cm", "22 cm", "88 cm", "44 cm"], a:3, e:"C = πd = (22/7)×14 = 44 cm."},
      {q:"The volume of a cube of side 5 cm is:", o:["25 cm³", "75 cm³", "100 cm³", "125 cm³"], a:3, e:"V = side³ = 5³ = 125 cm³."},
      {q:"x र y भन्ने दुई बिन्दुहरुको को-अर्डिनेट्स x (-2,1) र y (2,-2) अव स्थितिहरु बीचको दुरी कति होला ?", o:["3", "4", "5", "6"], a:2, e:"दुरी = √[(2-(-2))² + (-2-1)²] = √(16+9) = √25 = 5"},
      {q:"एउटा वर्गाकार जग्गाको लम्बाई तर्फ एक तिहाई घटाउँदा जग्गाको क्षेत्रफल कति प्रतिशत घट्छ ?", o:["3", "33", "33.33", "66.67"], a:2, e:"लम्बाई (एक आयाम) मात्र 1/3 ले घटाउँदा क्षेत्रफल पनि 1/3 अर्थात् 33.33% ले घट्छ। (दुवै आयाम 1/3 ले घटाएको भए 1 − (2/3)² = 55.56% घट्थ्यो।)"},
      {q:"Hexagon को Interior angle को sum कति हुन्छ ?", o:["1440⁰", "540⁰", "720⁰", "600⁰"], a:2, e:"Hexagon को Interior angle को sum = (n-2)×180 = (6-2)×180 = 720⁰"},
      {q:"The distance between the points (3,7) and (5,7) is equal to", o:["2", "4", "8", "5"], a:0, e:"दुरी = √[(5-3)² + (7-7)²] = √4 = 2"},
      {q:"Right angle isosceles triangle को base 10 m छ भने त्यसको Area कति हुन्छ ?", o:["12 m²", "25 m²", "50 m²", "100 m²"], a:1, e:"Area = 1/2 × 10 × 5 = 25 m²"},
      {q:"Pythagoras Theorem को लागि कुन necessary condition हो ?", o:["Acute angle triangle", "Obtuse angle triangle", "Right angle triangle", "None of the above"], a:2, e:"Pythagoras Theorem का लागि Right angle triangle आवश्यक छ।"},
      {q:"कुनै एउटा circle को radius 'r' भएको त्यसको perimeter कति हुन्छ ?", o:["π r²", "π r", "2 π r", "1/2 π r²"], a:2, e:"Circle को perimeter = 2πr"},
      {q:"If the area of a square field is 144 m². Find its perimeter.", o:["12", "24", "36", "48"], a:3, e:"Side = 12m, Perimeter = 4×12 = 48m"},
      {q:"Simplify x²/(x-y) + y²/(y-x)", o:["x+y", "x-y", "y-x", "x²"], a:0, e:"(x²-y²)/(x-y) = x+y"},
      {q:"If 5ˣ⁻² = 1, find the value of x", o:["0", "1", "2", "3"], a:2, e:"5ˣ⁻² = 5⁰, x-2=0, x=2"},
      {q:"Find the distance between the points (-4,-5) and (1,-2)", o:["√18", "√34", "√58", "√9"], a:1, e:"Distance = √[(1+4)²+(-2+5)²] = √(25+9) = √34"},
      {q:"यदि c²=a²+b² भए कुन कोण Right angle हुन्छ ?", o:["A", "B", "C", "None"], a:2, e:"c²=a²+b² भए कोण C Right angle हुन्छ।"},
      {q:"X- axis मा पर्ने कुनै बिन्दुको Y- coordinate को value कति होला ?", o:["0", "1", "-1", "∞"], a:0, e:"X-axis मा Y-coordinate = 0 हुन्छ।"},
      {q:"त्रिभुज ABC मा angle A = 90⁰ र AB=AC=3cm. भए BC बराबर कति हुन्छ ?", o:["3 cm.", "3√2 cm.", "4 cm.", "5 cm."], a:1, e:"BC = √(3²+3²) = 3√2 cm"},
      {q:"[(2)²]⁰ को मान कति हुन्छ ?", o:["0", "1", "2", "4"], a:1, e:"[(2)²]⁰ = 4⁰ = 1"},
      {q:"Area = √3/4 a² is used in", o:["isosceles triangle", "Equilateral triangle", "Right angled triangle", "Scalene triangle"], a:1, e:"Equilateral triangle को area = √3/4 a²"},
      {q:"एउटा 100 m. लामो डोरी लाई कुन geometrical figure बने गरि राख्दा सबै भन्दा बढि क्षेत्रफल ओगट्दछ ?", o:["triangle", "square", "rectangle", "circle"], a:3, e:"circle ले सबैभन्दा बढि क्षेत्रफल ओगट्दछ।"},
      {q:"In geometry, cube is a regular solid figure having 6 square faces, 12 edges and", o:["8 vertices", "9 vertices", "6 vertices", "12 vertices"], a:0, e:"8 vertices"},
      {q:"(√2+1)/(√2-1) + (√2-1)/(√2+1) is equal to", o:["2", "√2", "6", "√3"], a:2, e:"6"},
      {q:"The length of a rectangular room is two times its breadth and its perimeter is 36 m. find the area", o:["36", "45", "72", "84"], a:2, e:"72"},
      {q:"A rectangular ground is 24m long and 18m broad. Find the area of path of uniform width 2m running inside the ground", o:["132 m²", "152 m²", "52 m²", "32 m²"], a:1, e:"152 m²"},
      {q:"Find the value of x if 3ˣ⁺¹+3ˣ = 108", o:["0", "1", "2", "3"], a:3, e:"3"},
      {q:"√288 is equal to", o:["2√3", "3√2", "4√3", "12√2"], a:3, e:"12√2"},
      {q:"octagon को exterior angle को sum कति हुन्छ ?", o:["540⁰", "720⁰", "1080⁰", "1800⁰"], a:3, e:"1800⁰"},
      {q:"In coordinate geometry abscissa means-", o:["Y-axis", "Origin", "X-axis", "Ordinate"], a:2, e:"X-axis"},
      {q:"In quadratic equation if the discriminant is zero then ,the roots are-", o:["Real and equal", "Real and unequal", "Imaginary", "Unreal unequal"], a:0, e:"Real and equal"},
      {q:"What is the value of 2⁰ ?", o:["0", "1", "2", "∞"], a:1, e:"1"},
      {q:"यदि x=3 and y=5 भए, 3x²-2y कतिले 2x²-3y भन्दा बढी होला ?", o:["14", "28", "30", "25"], a:0, e:"14"},
      {q:"In right angle triangle if the area of that triangle is 25m², base= a and perpendicular= 2a then what is the value of a?", o:["2", "5", "10", "25"], a:1, e:"5"},
      {q:"एउटा 20 मिटर अर्ध्यास भएको गोलाकार जमिनको भित्रपट्टि १ मिटर चौडा बाटो बनाउँदा बाटोले कति क्षेत्रफल ओगट्छ ?", o:["122.5m²", "20m²", "125.7 m²", "None of above"], a:0, e:"122.5m²"},
      {q:"समद्विबाहु त्रिभुजको शिर्षकोण 50⁰ भए आधारका कोणहरुको मान कति होला ?", o:["60⁰", "45⁰", "65⁰", "75⁰"], a:2, e:"65⁰"},
      {q:"एउटा निश्चित लम्बाईको डोरीलाई कुन आकारमा राख्दा सबै भन्दा वढि क्षेत्रफल ओगट्छ ?", o:["त्रिकोण (Triangle)", "आयात (Rectangle)", "वर्ग (Square)", "वृत्त (Circle)"], a:3, e:"वृत्त (Circle) ले सबैभन्दा बढि क्षेत्रफल ओगट्छ।"},
      {q:"यदि x²-8x+16=0 भए x को मान कति होला ?", o:["2", "-2", "+/-2", "4"], a:3, e:"x²-8x+16 = (x-4)² = 0, त्यसैले x = 4"},
      {q:"यदि x+(1/x) = 5 भए x²+(1/x²) बराबर कति हुन्छ ?", o:["25", "23", "27", "29"], a:1, e:"x² + 1/x² = (x + 1/x)² - 2 = 25 - 2 = 23"},      {q:"If A + B = 5 र A*B = 4 छ भने A - B को मान कति हुन्छ ?", o:["1", "2", "3", "4"], a:2, e:"(A-B)² = (A+B)² - 4AB = 25 - 16 = 9, A-B = 3"},
      {q:"समवाहु त्रिभुजको क्षेत्रफलको मान कति हुन्छ ?", o:["l²", "3/4 l²", "4/√3 l²", "√3/4 l²"], a:3, e:"समवाहु त्रिभुजको क्षेत्रफल = √3/4 l²"},
      {q:"The value of x for equation x²-2x+1=0", o:["1", "2", "1.5", "None of the above"], a:0, e:"x²-2x+1 = (x-1)² = 0, x = 1"},      {q:"कुनै त्रिभुजका तिनवटा भुजा A,B,C को क्षेत्रफल बराबर √s(s-a)(s-b)(s-c) भए S को मान कति हुन्छ ?", o:["a+b+c", "(a+b+c)/2", "(a+b+c)/3", "(a+b)/2 +c"], a:1, e:"S = (a+b+c)/2 (semi-perimeter)"},
      {q:"Equation y= mx+c को Graph तल दिइएका मध्ये कुन प्रकृतिको हुन्छ ?", o:["Linear", "Non- linear", "Quadratic", "Algebraic"], a:0, e:"y = mx + c एक Linear equation हो।"},
      {q:"कुनै पनि वृत्तको अर्ध परिमिति 49 m छ भने क्षेत्रफल कति होला ?", o:["145 m²", "145 cm²", "154 m²", "154cm²"], a:2, e:"दिइएका विकल्पअनुसार क्षेत्रफल १५४ m² (r = ७ मि. र π = २२/७ राख्दा πr² = १५४ m²)। नोट: सोही प्रश्नको 'अर्ध परिमिति ४९ m' अनुसार r = ४९/π ≈ १५.६ मि. भई क्षेत्रफल ≈ ७६४ m² आउँछ — प्रश्नको पाठमा त्रुटी छ।"},
      {q:"a² + b² लाई (a+b)² ले भाग गर्दा कति आउँछ ?", o:["1 - 2ab/(a+b)²", "(a-b)²/(a+b)² + 2ab", "1/(a+b)", "क र ख दुबै"], a:0, e:"(a²+b²)/(a+b)² = [(a+b)² - 2ab]/(a+b)² = 1 - 2ab/(a+b)²"},
      {q:"गोलाको क्षेत्रफल निकाल्न कुन सुत्रको प्रयोग गरिन्छ ?", o:["4/3 πr²", "4 πr²", "π d²", "B र C दुबै"], a:1, e:"गोलाको क्षेत्रफल = 4πr²"},
      {q:"यदि 15ˣ=225 हुन्छ भने x को मान कति हुन्छ ?", o:["1", "4", "2", "कुनै पनि होइन"], a:2, e:"15² = 225, त्यसैले x = 2"},
      {q:"यदि 4x-y=5 र x+y=10 भए x र y को मान कति हुन्छ ?", o:["x=7 y = 3", "x=3 y=7", "both", "none"], a:1, e:"4x-y=5 र x+y=10 जोड्दा 5x=15, x=3, y=7"},
      {q:"Which of the following is correct?", o:["(2n-4) x 90⁰", "(n-2) x 180⁰", "Both a and b", "None of the above"], a:2, e:"Both a and b"},      {q:"२०७३ को वर्गमूल कति हुन्छ ?", o:["५५.५३", "४५.५३", "४५.५५", "६५.५३"], a:1, e:"√2073 ≈ 45.53"},
      {q:"एउटा चतुर्भुजको एक साइडको लम्बाई ४० मी. अर्को साइडको लम्बाई ३८ मी. र चौडाई १० मी. भए क्षेत्रफल कति हुन्छ ?", o:["३९० व.मी.", "४९० व.मी.", "३९५ व.मी.", "३८० व.मी."], a:0, e:"क्षेत्रफल = ३९ × १० = ३९० व.मी."},
      {q:"A(3,-2) र B(6,4) भए AB को दुरी कति हुन्छ ?", o:["√85", "√79", "√33", "3√5"], a:3, e:"दुरी = √[(6-3)² + (4-(-2))²] = √(9+36) = √45 = 3√5"},
      {q:"√6×√15×√10 को मान कति हुन्छ ?", o:["30", "2√30", "40", "20√3"], a:0, e:"√(6×15×10) = √900 = 30"},
      {q:"कुनै वर्गको परिमिति 4x भए क्षेत्रफल कति हाेला ?", o:["x m²", "x²m²", "x³ m²", "x⁴m²"], a:1, e:"परिमिति = 4a = 4x, a = x, क्षेत्रफल = x² m²"},





    ];
