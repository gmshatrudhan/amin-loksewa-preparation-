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
      {q:"The area of a rectangular plot 40 m by 25 m is:", o:["1,000 sq m", "1,200 sq m", "800 sq m", "900 sq m"], a:0, e:"Area = length × breadth = 40 × 25 = 1,000 sq m."},
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
      {q:"The area of a closed traverse is given by algebraic sum of the products of latitude of each line with its longitude. The method is known as area by:", o:["(ii) only", "(iv) only", "(i) and (iv)", "(ii) and (iii) only"], a:0, e:"This method is known as area by latitude and meridian distance."},
      {q:"1 nautical mile बराबर कति कि.मि. हुन्छ ?", o:["1852km", "18.52km", "1.852km", "185.2km"], a:2, e:"1 nautical mile = 1.852 km"},
      {q:"Micrometer means :-", o:["10⁻³m", "10⁻⁶m", "10⁻⁹m", "10⁵m"], a:1, e:"Micrometer (µm) = 10⁻⁶ m = 0.000001 m हुन्छ। (milli = 10⁻³, micro = 10⁻⁶, nano = 10⁻⁹)"},
      {q:"एक हेक्टरमा कति वर्गमिटर हुन्छ ?", o:["10000", "1000", "100000", "100"], a:0, e:"1 हेक्टर = 10000 वर्गमिटर"},
      {q:"तलका मध्ये सबै भन्दा सानो एकाई कुन हो ?", o:["रोपनी", "दाम", "कट्ठा", "धुर"], a:1, e:"दाम सबैभन्दा सानो एकाई हो।"},
      {q:"१ हलर बराबर १०० रुपैयाँ तथा १६० रुपैयाँ बराबर भार. १०० भएमा १ हलर बराबर भार. कति हुन्छ ?", o:["१००", "१६०", "६०", "६२.५"], a:3, e:"१ हलर = ६२.५ भार"},
      {q:"तलका मध्ये कुनले सबै भन्दा घटी क्षेत्रफल देखाउँछ ?", o:["दाम", "कट्ठा", "पैसा", "धुर"], a:0, e:"दाम"},
      {q:"nanometer means-", o:["0.000001m", "0.0000001m", "0.00000001m", "0.000000001m"], a:3, e:"0.000000001m"},
      {q:"एउटा ७४ फिट भुजा भएको वर्गाकार जग्गाको ३७ फिट मोहडा राखी ८ आना क्षेत्रफल कित्ताकाट गर्दा लम्बाई कति राख्नु पर्छ ?", o:["७४ फिट", "३७ फिट", "१८.५ फिट", "५४ फिट"], a:0, e:"१ आना = ३४२.२५ वर्गफिट, त्यसैले ८ आना = ८ × ३४२.२५ = २७३८ वर्गफिट। लम्बाई = २७३८ ÷ ३७ = ७४ फिट।"},
      {q:"1 फीटमा कति मिटर हुन्छ ?", o:["3.2808", "3.000", "0.3048", "3.048"], a:2, e:"0.3048"},
      {q:"एउटा जग्गाधनीले आफुसँग भएको १ रोपनी १२ आना जग्गा मध्ये पूर्व तर्फबाट ७ आना जग्गा बेच्दा उसँग कति प्रतिशत जग्गा बाँकी रहन्छ ?", o:["२५ प्रतिशत", "७५ प्रतिशत", "४५ प्रतिशत", "५५ प्रतिशत"], a:1, e:"१ रोपनी १२ आना = २८ आना। ७ आना बेच्दा २१ आना बाँकी। प्रतिशत = 21/28 × 100 = 75%"},
      {q:"कुनै जग्गाको १० प्रतिशत जग्गा विक्री गर्दा ४ आना हुन्छ भने विक्री भईसकेपछि वाँकी रहेको जमिनको क्षेत्रफल कति होला ?", o:["४० आना", "३६ आना", "४४ आना", "१४ आना"], a:1, e:"१०% = ४ आना, १००% = ४० आना। वाँकी = ४० - ४ = ३६ आना"},
      {q:"कुन परिमाण सबै भन्दा बढी हुन्छ ?", o:["१३ रोपनी", "१ विगाहा", "२१० आना", "०.६८ हेक्टर"], a:1, e:"१ विगाहा = १३ रोपनी = २०८ आना = ०.६७७ हेक्टर। त्यसैले १ विगाहा सबैभन्दा बढी हो।"},
      {q:"One Ares equal to...", o:["1 hectar", "100 m²", "1.35 Bigha", "19.65 Ropani"], a:1, e:"1 Are = 100 m²"},
      {q:"कुनै सर्मै लाईनको शुरु र अन्तका बिन्दुहरुको coordinates A (350500,3050400) र B(350800,3050800) भए लाईन AB को दुरी कति होला ?", o:["500m", "900m", "800m", "1200m"], a:0, e:"दुरी = √[(350800-350500)² + (3050800-3050400)²] = √(300² + 400²) = √(90000+160000) = √250000 = 500m"},
      {q:"कुनै सर्मै लाईनको शुरु र अन्तका बिन्दुहरुको coordinates A (350500,3050400) र B(350500,3050800) भए लाईन AB को Bearing कति होला ?", o:["30⁰", "0⁰", "45⁰", "None of above"], a:1, e:"Easting समान भएकोले Bearing 0° (North) हुन्छ।"},      {q:"1 Nautical Mile बराबर कति हुन्छ ?", o:["1850 m", "1851 m", "1852 m", "1853 m"], a:2, e:"1 Nautical Mile = 1852 m"},
      {q:"एक रोपनि क्षेत्रफल भन्नाले कति क्षेत्रफल जनाउँछ ?", o:["508.74m²", "74 ft x 74ft", "338.63 m²", "क र ख दुबै"], a:3, e:"1 रोपनी = 508.74 m² = 74 ft × 74 ft"},      {q:"1 Yard बराबर कति feet हुन्छ ?", o:["1 feet", "2 feet", "3 feet", "4 feet"], a:2, e:"1 Yard = 3 feet"},      {q:"A र B बिचको भिरालो दुरी १०० मी. र उचाईको फरक २ मी. भए समतल दुरी कति मी. हुन्छ ?", o:["९९.९८", "९५.९८", "८९.९८", "९९.८९"], a:0, e:"समतल दुरी = √(१००² - २²) = √(१०००० - ४) = √९९९६ ≈ ९९.९८"},
      {q:"बिन्दु P को rectangular coordinates (4,4) भए polar coordinates कति हुन्छ ?", o:["(4,50⁰)", "(4√2,45⁰)", "(16,45⁰)", "None"], a:1, e:"r = √(4²+4²) = 4√2, θ = tan⁻¹(4/4) = 45°"},
      {q:"1 hectar मा कति वर्ग किलोमिटर हुन्छ ?", o:["0.001", "0.01", "0.1", "0.11"], a:1, e:"1 hectar = 0.01 km²"},      {q:"1 inch मा कति हुन्छ ?", o:["25.4 mm", "2.54 cm", "0.0254 m", "All of the above"], a:3, e:"1 inch = 25.4 mm = 2.54 cm = 0.0254 m"},      {q:"1 sq.km. मा कति हेक्टर हुन्छ ?", o:["10 Ha.", "100 Ha.", "1000 Ha.", "10000 Ha."], a:1, e:"100 Ha."},      {q:"If (x,y) be Cartesian coordinates of a point, what will be the polar coordinates of the point. where r = radius & θ = polar angle.", o:["(r sinθ,r cosθ)", "(r cosθ,r sinθ)", "(cosθ,r sinθ)", "(sinθ,cosθ)"], a:1, e:"(r cosθ, r sinθ)"},      {q:"कुन चाँहि ठिक हो ?", o:["1 Nautical mile = 1850m", "1 Nautical mile = 1851m", "1 Nautical mile = 1852m", "1 Nautical mile = 1853m"], a:2, e:"1 Nautical mile = 1852m"},      {q:"१ फिटमा कति मिटर हुन्छ ?", o:["3.2808", "3.000", "0.3048", "3.048"], a:2, e:"0.3048"},
      {q:"रेखा AB को A (1,1) र B (3,3) भए रेखा AB को Bearing कति होला ?", o:["45⁰", "135⁰", "225⁰", "315⁰"], a:0, e:"Bearing = 45°"},      {q:"1 mile बराबर कति हुन्छ ?", o:["1.6093 m", "1609 m", "1760 m", "5280 m"], a:1, e:"1609 m"},
      {q:"कुनै बिन्दु क र ख को निर्देशाङ्क क्रमश: (५०००५० मी., ६०००००० मी.) र (५०००४५ मी., ६००००००मी.) भए क र ख विचको दुरी कति होला ?", o:["२ मी.", "३ मी.", "४ मी.", "५ मी."], a:3, e:"५ मी."},      {q:"कुन बिन्दुको rectangular coordinates (-4, 4) भए polar coordinate कति हुन्छ ?", o:["(4√2 , 45⁰)", "(4√2 , 135⁰)", "(4√2 , 225⁰)", "(4√2 , 315⁰)"], a:1, e:"(4√2 , 135⁰)"},      {q:"दुई नियन्त्रण बिन्दुहरुको भिरालो दुरी ५०० मी. र उचाई ३०० मी. भए ती दुई बिन्दुहरु बीचको दुरी कति हुन्छ ?", o:["३०० मी.", "४०० मी.", "५०० मी.", "६०० मी."], a:1, e:"दुरी = √(५००² - ३००²) = √(२५०००० - ९००००) = √१६०००० = ४०० मी."},
      {q:"18m. अग्लो रुख हावाले जमिनदेखि 5m. माथिबाट भाँचियो भने उक्त रुखको टुप्पोले जमिनमा फेद देखि कति टाढा छुन्छ ?", o:["10m.", "12m.", "13m.", "15m."], a:1, e:"टुप्पोको दुरी = √(13² - 5²) = √(169 - 25) = √144 = 12m"},
      {q:"10√3 m. अग्लो Pole को छायां 30m. लामो हुँदा सूर्यको उचाई कति हुन्छ ?", o:["30°", "45°", "60°", "90°"], a:2, e:"tanθ = 10√3/30 = 1/√3, θ = 30°, तर विकल्पमा 60° छ जुन गलत हो।"},
      {q:"यदि भिरालो दुरी I र भिरालो कोण θ छ भने समतल दुरी बराबर के हुन्छ ?", o:["I sin θ", "I(1-cosθ)", "I cos θ", "I(1-sinθ)"], a:2, e:"I cos θ"},













    ];
