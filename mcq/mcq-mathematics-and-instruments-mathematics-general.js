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
window.EXTRA = window.EXTRA || {};

window.EXTRA["Mathematics (General)"] = window.EXTRA["Mathematics (General)"] || {};
window.EXTRA["Mathematics (General)"].mcq = [
      {q:"The area of a rectangular plot is 240 sq m and its length is 20 m. What is its perimeter?", o:["72 m", "60 m", "64 m", "68 m"], a:2, e:"Breadth = 240 / 20 = 12 m. Perimeter = 2 × (20 + 12) = 2 × 32 = 64 m."},
      {q:"25% of 480 is:", o:["130", "100", "110", "120"], a:3, e:"25% of 480 = 480 × 25/100 = 120."},
      {q:"If the ratio of two numbers is 3:5 and their sum is 64, the smaller number is:", o:["24", "27", "30", "21"], a:0, e:"Let the numbers be 3x and 5x. Then 8x = 64, so x = 8. The smaller number is 3 × 8 = 24."},
      {q:"The simple interest on Rs 5,000 at 8% per annum for 2 years is:", o:["Rs 700", "Rs 800", "Rs 900", "Rs 600"], a:1, e:"SI = P × R × T / 100 = 5000 × 8 × 2 / 100 = Rs 800."},
      {q:"A sum becomes Rs 24,200 in 2 years at 10% compound interest. The principal is:", o:["Rs 22,000", "Rs 23,000", "Rs 20,000", "Rs 21,000"], a:2, e:"A = P(1 + r/100)ⁿ, so 24200 = P × (1.1)² = 1.21P. Therefore P = 24200 / 1.21 = Rs 20,000."},
      {q:"The average of 12, 18, 24 and 30 is:", o:["21", "20", "22", "19"], a:0, e:"Average = (12+18+24+30)/4 = 84/4 = 21."},
      {q:"The HCF of 24 and 36 is:", o:["12", "18", "72", "6"], a:0, e:"24 = 2³×3, 36 = 2²×3²; HCF = 2²×3 = 12."},
      {q:"3/5 expressed as a % is:", o:["53%", "60%", "65%", "35%"], a:1, e:"(3/5)×100 = 60%."},
      {q:"An article bought for Rs 800 is sold for Rs 920. The profit percent is:", o:["14%", "15%", "10%", "12%"], a:1, e:"Profit = 920−800 = 120; (120/800)×100 = 15%."},
      {q:"The square root of 729 is:", o:["29", "37", "27", "23"], a:2, e:"27² = 729, so √729 = 27."},
      {q:"If 5 pens cost Rs 125, the cost of 8 pens is:", o:["Rs 250", "Rs 180", "Rs 200", "Rs 225"], a:2, e:"One pen = 125/5 = Rs 25; 8 pens = 8×25 = Rs 200 (unitary method)."},
      {q:"A book marked Rs 500 is sold at a 12% discount. The selling price is:", o:["Rs 460", "Rs 420", "Rs 450", "Rs 440"], a:3, e:"Discount = 12% of 500 = Rs 60; price = 500−60 = Rs 440."},
      {q:"A tap fills a tank in 6 hours; another empties it in 8 hours. With both open, the tank fills in:", o:["7 hours", "14 hours", "2 hours", "24 hours"], a:3, e:"Net rate = 1/6 − 1/8 = 1/24 per hour, so 24 hours to fill."},

      {q:"एउटा वर्गाकार जग्गाको लम्बाई तर्फ एक तिहाई घटाउँदा जग्गाको क्षेत्रफल कति प्रतिशत घट्छ ?", o:["3","33","33.33","66.67"], a:2, e:"लम्बाई १/३ घट्दा नयाँ लम्बाई = २/३ × पुरानो लम्बाई; चौडाई उही रहने भएकाले क्षेत्रफल २/३ मा घट्छ → ३३.३३% घट्छ।"},
      {q:"1 देखी 100 सम्मका प्राकृतिक अंकहरूको योगफल कति हुन्छ ?", o:["5050","5055","5000","माथिका कुनै पनि होइन"], a:0, e:"1 देखि 100 सम्मको योगफल = n(n+1)/2 = 100×101/2 = 5050"},
      {q:"रु. ३००० मा किनेको कुनै सिटर रु. ३३०० मा बेचिएको छ भने नाफा प्रतिशत कति होला ?", o:["10 %","15 %","20 %","5 %"], a:0, e:"नाफा = (3300-3000)/3000 × 100 = 10%"},
      {q:"एक हेक्टरमा कति वर्गमिटर हुन्छ ?", o:["10000","1000","100000","100"], a:0, e:"1 हेक्टर = 10000 वर्गमिटर"},
      {q:"१२५ वटा सुन्तला भएको टोकरीमा २५ प्रतिशत सुन्तला विग्रेको रहेछन् भने कति वटा सुन्तला राम्रा रहेछन् ?", o:["६४","७५","९६","३२"], a:2, e:"१२ को २५% = ३१.२५, १२५ - ३१ = ९४"},
      {q:"५ जना मानिसलाई ६ दिन लाग्ने काम १५ जना मानिसहरुले कति समयमा गर्न सक्दछन् ?", o:["१५ दिन","५ दिन","३ दिन","२ दिन"], a:3, e:"५×६/१५ = २ दिन"},
      {q:"In geometry, cube is a regular solid figure having 6 square faces, 12 edges and", o:["8 vertices","9 vertices","6 vertices","12 vertices"], a:0, e:"8 vertices"},
      {q:"A rectangular ground is 24m long and 18m broad. Find the area of path of uniform width 2m running inside the ground", o:["132 m²","152 m²","52 m²","32 m²"], a:1, e:"152 m²"},
      {q:"[(2)²]⁰ को मान कति हुन्छ ?", o:["0","1","2","4"], a:1, e:"[(2)²]⁰ = 4⁰ = 1"},
      {q:"एउटा 100 m. लामो डोरी लाई कुन geometrical figure बने गरि राख्दा सबै भन्दा बढि क्षेत्रफल ओगट्दछ ?", o:["triangle","square","rectangle","circle"], a:3, e:"circle ले सबैभन्दा बढि क्षेत्रफल ओगट्दछ।"},
      {q:"A car is running with a speed of 90km. per hour. Express this speed in meters per second.", o:["90m/s","9m/s","25m/s","1.5m/s"], a:2, e:"90 km/h = 90×1000/3600 = 25 m/s"},
      {q:"१ हलर बराबर १०० रुपैयाँ तथा १६० रुपैयाँ बराबर भार. १०० भएमा १ हलर बराबर भार. कति हुन्छ ?", o:["१००","१६०","६०","६२.५"], a:3, e:"१ हलर = ६२.५ भार"},
      {q:"५ जना मानिसलाई ६ दिन लाग्ने काम १५ जना मानिसहरुले कति समयमा गर्न सक्दछन् ?", o:["१५ दिन","५ दिन","३ दिन","२ दिन"], a:3, e:"५×६/१५ = २ दिन"},
      {q:"The length of a rectangular room is two times its breadth and its perimeter is 36 m. find the area", o:["36","45","72","84"], a:2, e:"72"},
      {q:"A rectangular ground is 24m long and 18m broad. Find the area of path of uniform width 2m running inside the ground", o:["132 m²","152 m²","52 m²","32 m²"], a:1, e:"152 m²"},
      {q:"1 nanometer बराबर कति متر हुन्छ ?", o:["0.000001m","0.0000001m","0.00000001m","0.000000001m"], a:3, e:"0.000000001m"},
      {q:"Statistics मा mode कुन हो ?", o:["mean","median","mode","range"], a:2, e:"mode"},
      {q:"x=3 and y=5 भए (3x²-2y) - (2x²-3y) को मान कति हुन्छ ?", o:["14","28","30","25"], a:0, e:"14"}
    ];
