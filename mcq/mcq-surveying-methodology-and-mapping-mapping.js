/* ================= MCQ QUESTIONS - Surveying Methodology and Mapping - Unit 5: Mapping =================
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
window.EXTRA["Mapping"] = window.EXTRA["Mapping"] || {};
window.EXTRA["Mapping"].mcq = [
 {
  "q": "If the scale of a map is 1 cm = 100 m, its representative fraction is:",
  "o": [
   "1:100",
   "1:1,000",
   "1:10,000",
   "1:100,000"
  ],
  "a": 2,
  "e": "100 m = 10,000 cm, so RF = 1 cm / 10,000 cm = 1/10,000, written 1:10,000."
 },
 {
  "q": "Contour lines on a map can never:",
  "o": [
   "Close on themselves",
   "Run close together",
   "Curve",
   "Cross one another"
  ],
  "a": 3,
  "e": "Contour lines cannot cross one another because a single point on the ground cannot have two different elevations. The only exception is an overhanging cliff, where they are shown dashed."
 },
 {
  "q": "A map showing the boundaries of individual land parcels is called a:",
  "o": [
   "Cadastral map",
   "Political map",
   "Geological map",
   "Topographic map"
  ],
  "a": 0,
  "e": "A cadastral map shows the boundaries, parcel numbers and areas of individual land holdings and is used for ownership, registration and taxation."
 },
 {
  "q": "Closely spaced contour lines indicate:",
  "o": [
   "Flat ground",
   "Steep slope",
   "Gentle slope",
   "A valley only"
  ],
  "a": 1,
  "e": "The closer the contour lines, the steeper the slope; widely spaced contours indicate gentle slopes and evenly spaced contours indicate a uniform slope."
 },
 {
  "q": "The vertical distance between two consecutive contour lines is called the:",
  "o": [
   "Reduced level",
   "Horizontal equivalent",
   "Contour interval",
   "Gradient"
  ],
  "a": 2,
  "e": "The contour interval is the constant vertical distance between successive contours. Its horizontal distance on the map is called the horizontal equivalent, which varies with the slope."
 },
 {
  "q": "In GIS, information about roads, rivers and buildings is stored as:",
  "o": [
   "Thematic layers",
   "Single photographs",
   "Field books",
   "Paper tracings"
  ],
  "a": 0,
  "e": "GIS organises spatial data into thematic layers (roads, rivers, boundaries) that can be overlaid and analysed together."
 },
 {
  "q": "Remote sensing means collecting information about objects:",
  "o": [
   "Without physical contact, using sensors",
   "Only at night",
   "Only with total stations",
   "By physical contact"
  ],
  "a": 0,
  "e": "Remote sensing uses satellite or aerial sensors to record reflected/emitted energy without touching the object; used for land use and forest mapping."
 },
 {
  "q": "The Global Positioning System (GPS) consists of how many segments?",
  "o": [
   "Five",
   "Three",
   "Two",
   "Four"
  ],
  "a": 1,
  "e": "Three segments: space (satellites), control (ground stations) and user (receivers). GNSS includes GPS, GLONASS, Galileo and BeiDou."
 },
 {
  "q": "A topographical map mainly shows:",
  "o": [
   "Only satellite images",
   "Natural and artificial features with relief",
   "Underground minerals only",
   "Only property boundaries"
  ],
  "a": 1,
  "e": "Topo maps show terrain relief (contours), drainage, vegetation, settlements and infrastructure — the base for planning and engineering."
 },
 {
  "q": "Survey vessels use echo sounders in hydrographic surveys to measure:",
  "o": [
   "Water temperature",
   "Current speed",
   "Water depth",
   "Tide timings"
  ],
  "a": 2,
  "e": "Echo sounders send sound pulses and time their return to measure depth; fathometers record continuous depth profiles along survey lines."
 },
 {
  "q": "The UTM system divides the earth into how many zones?",
  "o": [
   "12 zones",
   "24 zones",
   "60 zones",
   "36 zones"
  ],
  "a": 2,
  "e": "UTM has 60 zones of 6° longitude each; Nepal falls in zones 44 and 45. Coordinates are given as eastings and northings."
 },
 {
  "q": "Minimum number of GPS satellites needed for a 3D position fix is:",
  "o": [
   "Two",
   "Three",
   "Six",
   "Four"
  ],
  "a": 3,
  "e": "Three satellites give 2D position; four give 3D (latitude, longitude, height) plus receiver clock correction."
 },
 {
  "q": "Nepal’s national mapping agency, the Survey Department, was established in:",
  "o": [
   "B.S. 2025 (1968 AD)",
   "B.S. 1990 (1933 AD)",
   "B.S. 2047 (1990 AD)",
   "B.S. 2014 (1957 AD)"
  ],
  "a": 3,
  "e": "The Survey Department (Napi Bibhag), under the Ministry of Land Management, is responsible for geodetic control, cadastral and topographic mapping of Nepal."
 },
 {
  "q": "A major requirement of GIS application is",
  "o": [
   "The need to manage spatially referenced data",
   "Images from satellites",
   "Vector date structure",
   "Rastor data structure"
  ],
  "a": 0,
  "e": "GIS is fundamentally designed to manage and analyze data that is linked to a spatial location."
 },
 {
  "q": "At what angle does a ridge line intersect contours?",
  "o": [
   "90°",
   "45°",
   "30°",
   "0°"
  ],
  "a": 0,
  "e": "Ridge line (watershed) ले contour लाई 90° (right angle) मा काट्छ — किनकि सबैभन्दा ठाडो ढलान (steepest slope) सधैं contour को normal (लम्ब) दिशामा हुन्छ। यही नियमले valley line लाई पनि लागू हुन्छ।"
 },
 {
  "q": "For a large-scale map of a mountainous (hilly) region, a suitable contour interval may be:",
  "o": [
   "0.2 m",
   "2 m",
   "20 m",
   "200 m"
  ],
  "a": 1,
  "e": "Contour interval scale र terrain दुवैमा भर पर्छ: 1:500 flat मा 0.2–0.5 m, 1:5,000 rolling/hilly मा 2–5 m, 1:25,000 hilly मा 10–20 m, 1:50,000 mountainous मा 25–50 m। ⚠️ मूल प्रश्नमा scale नै दिइएको थिएन (त्यसैले अस्पष्ट थियो) — large-scale map मानेर 2 m राखिएको छ; 20 m medium-scale (1:25,000) को लागि उपयुक्त।"
 },
 {
  "q": "The direction of steepest slope on a contour is:",
  "o": [
   "along the contour",
   "at right angles to the contour",
   "at 45° to the contour",
   "at 30° to the contour"
  ],
  "a": 1,
  "e": "Steepest slope सधैं contour line सँग right angle (90°) मा हुन्छ — किनकि दुई contour बीचको सबैभन्दा छोटो दूरी नै सबैभन्दा ठाडो ढलान हो। Contour सँगै हिँड्दा (along the contour) ढलान शून्य हुन्छ।"
 },
 {
  "q": "The method usually adopted to contour a rough country where ordinary levelling is tedious and chaining is slow and inaccurate is:",
  "o": [
   "spirit levelling",
   "differential levelling",
   "plane tabling",
   "tacheometry"
  ],
  "a": 3,
  "e": "Rough/पहाडी country मा ordinary levelling ढिलो र chaining अप्ठ्यारो हुन्छ, त्यसैले tacheometry प्रयोग गरिन्छ — एकै station बाट धेरै बिन्दुको distance र elevation नापिन्छ। यो indirect contouring को तेस्रो तरिका हो।"
 },
 {
  "q": "The lines joining the points of equal elevation on the surface of the earth are known as:",
  "o": [
   "isohytes",
   "isogonics",
   "agonic",
   "contours"
  ],
  "a": 3,
  "e": "Contour = समान उचाई (equal elevation) भएका बिन्दुहरू जोड्ने रेखा। तुलना: isotherm = समान तापक्रम, isobar = समान वायुचाप, isohyte = समान वर्षा, isobath = समान गहिराई।"
 },
 {
  "q": "A series of closed contours on a map indicates:",
  "o": [
   "a close traverse",
   "a depression",
   "a summit",
   "Either (b) or (c)"
  ],
  "a": 3,
  "e": "Closed contours ले summit (हिल) वा depression दुवै जनाउन सक्छ — भिन्नता मान (value) ले छुट्याउँछ: higher value भित्र भए summit, higher value बाहिर भए depression। त्यसैले shape बाट मात्र थाहा हुँदैन।"
 },
 {
  "q": "Pick out the incorrect statement.",
  "o": [
   "The contour interval depends upon the time available.",
   "Contours can be drawn underwater.",
   "Usually the contour interval is kept constant, but a variable interval may be used if required.",
   "A ground of contours with higher figures inside indicates a depression."
  ],
  "a": 3,
  "e": "Closed contour मा higher figures भित्र भए त्यो summit (हिल) हो; depression मा higher figures बाहिर हुन्छन्। बाँकी (a),(b),(c) सही कथन हुन् — contour interval समय/लागतमा भर पर्छ, underwater contour (bathymetric) पनि कोर्न सकिन्छ, र interval सामान्यतया constant राखिन्छ।"
 },
 {
  "q": "The relief of the earth's surface can be represented by:",
  "o": [
   "hachures",
   "shading",
   "contours",
   "all of these."
  ],
  "a": 3,
  "e": "Relief representation का तीनै तरिका मान्य छन्: hachures (छोटा रेखा), hill shading (छायांकन) र contours (समान उचाई रेखा)। आधुनिक topo map मा contour मुख्य हुन्छ, shading सहायक।"
 },
 {
  "q": "On geographical maps, the relief of the earth's surface is usually portrayed by:",
  "o": [
   "contours",
   "isohytes",
   "shading and hachures",
   "kitiro method"
  ],
  "a": 2,
  "e": "Geographical (small-scale) map मा relief सामान्यतया shading र hachures ले देखाइन्छ — यसले त्रि-आयामिक 'भास' दिन्छ। Contour मुख्यतया large-scale topo/engineering map मा प्रयोग हुन्छ, किनकि त्यहाँ वास्तविक उचाई चाहिन्छ।"
 },
 {
  "q": "Choose the correct statement.",
  "o": [
   "Contour maps cannot be used to ascertain the intervisibility of points.",
   "Contours drawn underwater are known as aqueous contours.",
   "Contour interval may be located in the field by a gradienter.",
   "Contour interval is inversely proportional to the square of the scale of a map."
  ],
  "a": 2,
  "e": "Gradienter (theodolite/level मा भएको screw) ले निश्चित gradient को दिशा(field मा) locate गर्न सकिन्छ, त्यसैले contour gradient को लागि प्रयोग हुन्छ। (b) गलत: underwater contour लाई submarine/bathymetric contour भनिन्छ, 'aqueous' होइन। (d) गलत: CI scale सँग inversely proportional हुन्छ, square सँग होइन।"
 },
 {
  "q": "Choose the incorrect statement.",
  "o": [
   "Two contour lines coincide (merge into one line) in the case of a vertical cliff.",
   "A watershed crosses the contours at right angles.",
   "The direction of steepest slope is along the longest distance between the contours.",
   "In the direct method of contouring, the contours are not interpolated."
  ],
  "a": 2,
  "e": "Steepest slope = contours बीचको shortest (सबैभन्दा छोटो) दूरी, longest होइन। (a) अब सही राखिएको छ — vertical cliff मा contours intersect नभई coincide/merge हुन्छन् (horizontal equivalent शून्य); overhanging cliff मा मात्र contours cross गर्छन्।"
 },
 {
  "q": "Choose the incorrect statement.",
  "o": [
   "A hand level is used for direct contouring.",
   "Direct contouring methods are very useful for small-scale maps.",
   "For a canal survey, the method of cross sections is most suited.",
   "In the indirect method of contouring, the contours are interpolated."
  ],
  "a": 1,
  "e": "Direct contouring accurate भए पनि ढिलो र महँगो हुन्छ, त्यसैले यो large-scale map (सानो क्षेत्र, बढी विवरण) को लागि मात्र उपयुक्त हुन्छ — small-scale map को लागि होइन। (a) सही: hand level direct contouring मा प्रयोग हुन्छ।"
 },
 {
  "q": "Choose the correct statement.",
  "o": [
   "Indirect contouring methods are unsuitable for hilly and undulating country.",
   "Method of squares for plotting the contours is best suited for route surveys.",
   "Method of coordinates is used for plotting the contours.",
   "Arithmetic method of interpolating contours is the most rapid and accurate."
  ],
  "a": 2,
  "e": "Indirect method (spot level लिएर interpolation) lाई 'co-ordinate method' पनि भनिन्छ — यसैले (c) सही। (a) गलत: indirect method नै hilly/undulating country को लागि उपयुक्त हुन्छ। (b) गलत: route survey (सडक, नहर, रेल) को लागि cross-section method उपयुक्त। (d) गलत: computation सबैभन्दा accurate, graphical सबैभन्दा rapid — एउटै दुवै होइन।"
 },
 {
  "q": "Choose the correct statement.",
  "o": [
   "From a contour map the capacity of a reservoir cannot be estimated.",
   "While contouring steep hills, a variable contour interval may be adopted.",
   "Limitation of funds does not affect the contour interval.",
   "From a contour map, the possible location of a dam cannot be ascertained."
  ],
  "a": 1,
  "e": "Steep hill मा contour interval constant राख्दा contours आपसमा गाँसिन्छन्, त्यसैले variable interval अपनाउन सकिन्छ। (a) गलत — contour map बाट intervisibility (एक बिन्दुबाट अर्को देखिन्छ कि देखिँदैन) पत्ता लगाउन सकिन्छ। (c) गलत — समय/रकम कम भए interval ठूलो राखिन्छ। (d) गलत — contour map बाट dam को सम्भावित स्थान पत्ता लगाउन सकिन्छ।"
 },
 {
  "q": "Choose the incorrect statement.",
  "o": [
   "Closely spaced contour lines indicate a gentle slope.",
   "Surface slope on a map may be indicated by short lines of various widths known as hachures.",
   "The direction of the steepest slope on a contour map is along the normal to the contour line.",
   "A contour line is the intersection of a level surface with the surface of the earth."
  ],
  "a": 0,
  "e": "Closely spaced contours = steep slope; widely spaced = gentle slope। बाँकी सही: hachures ले ढलान देखाउँछ, steepest slope contour को normal मा हुन्छ, र contour = level surface र earth surface को intersection हो।"
 },
 {
  "q": "Match List-I (Term) with List-II (Description):\nList-I: (i) Contour  (ii) Line of collimation  (iii) Tie line  (iv) Magnetic meridian\nList-II: A. Direction shown by a freely suspended magnetic needle at a place\nB. A line joining two survey stations, used to check and control the survey\nC. A line joining points of equal elevation\nD. The line joining the intersection of the cross-hairs to the optical centre of the objective",
  "o": [
   "(i) C  (ii) D  (iii) B  (iv) A",
   "(i) D  (ii) C  (iii) B  (iv) A",
   "(i) C  (ii) D  (iii) A  (iv) B",
   "(i) D  (ii) C  (iii) A  (iv) B"
  ],
  "a": 0,
  "e": "Contour (C), Line of collimation (D), Tie line (B), Magnetic meridian (A) — मिलान (i) C, (ii) D, (iii) B, (iv) A। मूल अंकमा List-I/II को description थिएन, त्यसैले मानक परिभाषाबाट पुनर्निर्माण गरिएको हो; key उही राखिएको छ।"
 },
 {
  "q": "Match List-I (Land feature) with List-II (Description of its contours):\nList-I: (i) Vertical cliff  (ii) Steep slope  (iii) Hill  (iv) Overhanging cliff\nList-II: A. Contours of different elevations coincide (merge) into a single line\nB. Contours of different elevations cross one another\nC. Contours very closely spaced\nD. Closed contours with higher values inside",
  "o": [
   "(i) D  (ii) C  (iii) A  (iv) B",
   "(i) A  (ii) C  (iii) D  (iv) B",
   "(i) A  (ii) B  (iii) D  (iv) C",
   "(i) D  (ii) B  (iii) A  (iv) C"
  ],
  "a": 1,
  "e": "Vertical cliff (A), Steep slope (C), Hill (D), Overhanging cliff (B) — मिलान (i) A, (ii) C, (iii) D, (iv) B। मूल अंकमा List-II थिएन; मानक contour properties बाट पुनर्निर्माण गरिएको हो, key उही।"
 },
 {
  "q": "Contours can be interpolated by:\n(i) Arithmetic calculation   (ii) Estimation (by eye)   (iii) Graphical method",
  "o": [
   "Only (i) and (ii) are correct",
   "Only (ii) and (iii) are correct",
   "Only (i) and (iii) are correct",
   "All (i), (ii), and (iii) are correct"
  ],
  "a": 2,
  "e": "मानक दुई विधि: (i) arithmetic calculation — सबैभन्दा accurate, र (iii) graphical method — सबैभन्दा rapid। (ii) estimation by eye लाई rough/अस्थायी काममा प्रयोग गरिए पनि मानक interpolation विधि गनिँदैन (मूल explanation ले पनि 'arithmetic and graphical' मात्र भन्छ)। ⚠️ (i)-(iii) को सूची मूल अंकमा थिएन — पुनर्निर्माण गरिएको; कुनै पाठ्यपुस्तकले estimation लाई तेस्रो विधि मान्छ भने key 'All' हुनुपर्छ।"
 },
 {
  "q": "Contours can be used to determine:\n(i) The elevation of any point on the map   (ii) The gradient (slope) between two points\n(iii) The steepness of the ground   (iv) The intervisibility of two points",
  "o": [
   "Only (i) and (ii) are correct",
   "Only (ii) and (iii) are correct",
   "All (i), (ii), (iii) and (iv) are correct",
   "Only (i), (iii), and (iv) are correct"
  ],
  "a": 2,
  "e": "Contour map बाट उचाई, gradient, steepness र intervisibility — चारै थाहा पाइन्छ। मूल key ले (i),(iii),(iv) मात्र लिई (gradient) लाई छोडेको थियो, जुन गलत हो (gradient = Δh ÷ horizontal equivalent, दुवै contour बाटै पाइन्छ)। मूल अंकमा (i)-(iv) को सूची थिएन — पुनर्निर्माण गरिएको।"
 },
 {
  "q": "Which of the following method(s) of contouring are indirect methods?\n(i) Direct method (tracing each contour on the ground)   (ii) Method of squares   (iii) Method of cross-sections",
  "o": [
   "Only (i) is correct",
   "Only (ii) and (iii) are correct",
   "Only (i) and (iii) are correct",
   "Only (i) and (ii) are correct"
  ],
  "a": 1,
  "e": "(i) Direct method: contour लाई field मै trace गरिन्छ — indirect होइन। (ii) Method of squares र (iii) Method of cross-sections दुवै indirect हुन् (spot level लिएर पछि interpolation)। ⚠️ (i)-(iii) को सूची मूल अंकमा थिएन — मूल explanation ('squares and plane table method') को आधारमा पुनर्निर्माण; key उही राखिएको।"
 },
 {
  "q": "१:५०० स्केलको नक्सामा ५ से.मी. लम्बाई भएको बाटोलाई १:२५०० स्केलमा प्लट गर्दा कति से.मी. हुन्छ ?",
  "o": [
   "5cm",
   "2.5cm",
   "10cm",
   "1cm"
  ],
  "a": 3,
  "e": "1:500 scale मा 5cm ले 25m जनाउँछ। 1:2500 scale मा 25m लाई 1cm ले जनाउँछ।"
 },
 {
  "q": "कुन स्केल सबै भन्दा ठूलो छ ?",
  "o": [
   "1:500",
   "1”=100’",
   "1cm=10m",
   "1cm=4km"
  ],
  "a": 0,
  "e": "सबैलाई एउटै एकाइमा ल्याएर तुलना गर्दा: 1:500 मा 1 cm = 5 m; 1 inch = 100 ft ≈ 1:1200; 1 cm = 10 m = 1:1000; 1 cm = 4 km = 1:400,000। Denominator जति सानो, scale त्यति नै ठूलो — त्यसैले 1:500 सबैभन्दा ठूलो।"
 },
 {
  "q": "नेपालमा प्रयोग हुने प्रोजेक्सन तरिका अनुसार कुनै नियन्त्रण बिन्दु को Easting कति देखी कति मिटर सम्म हुन्छ ?",
  "o": [
   "500000-650000m",
   "2900000-3400000m",
   "350000-650000m",
   "कुनै पनि होईन"
  ],
  "a": 2,
  "e": "नेपालको MUTM grid अनुसार easting लगभग 350,000–650,000 m बीच पर्छ (false easting 500,000 m, central meridian बाट ±150 km)। Northing भने equator बाट नापिन्छ र करिब 2,900,000–3,400,000 m हुन्छ।"
 },
 {
  "q": "1:2500 scale को नक्सा तयार गर्दा 1 dot (line) or plotting error कति हुन्छ ?",
  "o": [
   "62.5 cm",
   "625mm",
   "0.625m",
   "All of above"
  ],
  "a": 3,
  "e": "1:2500 scale मा 0.25mm plotting error = 0.625m = 62.5cm = 625mm"
 },
 {
  "q": "GIS को पूर्ण रुप के हो ?",
  "o": [
   "General Information System",
   "Geodetic Information System",
   "Geographic Information System",
   "All"
  ],
  "a": 2,
  "e": "GIS = Geographic Information System — spatial (स्थान-आधारित) data भण्डारण, विश्लेषण र नक्साङ्कन गर्ने प्रणाली। Global/Geodetic Information System गलत विस्तार हो।"
 },
 {
  "q": "तलका मध्ये नेपालमा कुन Projection अपनाईएको छ ?",
  "o": [
   "Normal",
   "Tangent",
   "Secant",
   "Conical"
  ],
  "a": 2,
  "e": "नेपालले अपनाएको MUTM (Modified UTM) secant projection हो — cylinder ले ellipsoid लाई central meridian को दुवैतिर दुई standard line मा काट्छ। Tangent projection मा एउटै मात्र line मा छुन्छ।"
 },
 {
  "q": "MUTM Projection मा scale factor कति हुन्छ ?",
  "o": [
   "0.9996",
   "0.9999",
   "1",
   "0.1"
  ],
  "a": 1,
  "e": "MUTM (Modified UTM) projection मा central meridian को scale factor 0.9999 हुन्छ। साधारण UTM मा यो 0.9996 हुन्छ। नेपालले ३ वटा ३ डिग्री zone (81°, 84°, 87° पूर्व) प्रयोग गर्छ।"
 },
 {
  "q": "1:2500 को scale को optimum plotting precision कति हुन्छ ?",
  "o": [
   "2500x0.25mm",
   "2500x0.25cm",
   "2500x0.25m",
   "2500x0.25km"
  ],
  "a": 0,
  "e": "1:2500 को scale को optimum plotting precision 2500×0.25mm हुन्छ।"
 },
 {
  "q": "Three Dimensional measurement को लागि प्रयोग हुने scale कुन हो ?",
  "o": [
   "Plain scale",
   "Chord scale",
   "Vernier scale",
   "Diagonal scale"
  ],
  "a": 3,
  "e": "Diagonal scale ले तीन dimension (जस्तै m, dm, cm) सम्म पढ्न सकिन्छ — plain scale ले दुई मात्र। 'overtire scale' भनिएको विकल्पOCR त्रुटि हो, Vernier scale मा सुधार गरिएको।"
 },
 {
  "q": "कुनै एउटा field को Area 56 m² छ र नक्सामा त्यसको लम्बाई 7 cm र चौडाई 8 cm छ भने त्यसको scale कति होला ?",
  "o": [
   "1:10000",
   "1:1000",
   "1:100000",
   "1:100"
  ],
  "a": 3,
  "e": "नक्सामा क्षेत्रफल = 7 cm × 8 cm = 56 cm²। जमिनको क्षेत्रफल 56 m² = 5,60,000 cm²। (scale)² = 56 ÷ 5,60,000 = 1/10,000, त्यसैले scale = 1:100। जाँच: 1:100 मा 7 cm = 7 m र 8 cm = 8 m → 7 × 8 = 56 m² ✓। मूल key 1:10000 ले 560,000 m² (= 56 hectare) दिन्छ, जुन प्रश्नको डाटासँग मेल खाँदैन।"
 },
 {
  "q": "Geographical coordinate system मा के लाई reference line लिइन्छ ?",
  "o": [
   "Grid",
   "Graticule",
   "कुनै पनि हैन",
   "दुबै"
  ],
  "a": 1,
  "e": "Geographical coordinate system (latitude/longitude) को reference line लाई Graticule भनिन्छ — meridian र parallel को जालो। 'Gratitude' भनिएको शब्द 'Graticule' को टाइपो हो। Grid भनेको projected (UTM/MUTM) coordinate system हो।"
 },
 {
  "q": "Map face लाई enclose गर्ने line लाई के भनिन्छ ?",
  "o": [
   "Frame line",
   "Marginal line",
   "Neat line",
   "कुनै पनि हैन"
  ],
  "a": 2,
  "e": "Neat line ले map face (map body) लाई घेर्छ — यो नै नक्साको काम गर्ने सिमाना हो। यसभन्दा बाहिर frame line (grid/graticule value सहित) र margin मा title, legend, scale जस्ता marginal information राखिन्छ।"
 },
 {
  "q": "नक्साको enlargement र reduction गर्न तलका मध्ये कुन instrument use गरिन्छ ?",
  "o": [
   "Brunton compass",
   "Clinometers",
   "Abeney level",
   "Pantograph"
  ],
  "a": 3,
  "e": "Pantograph नक्सालाई enlarge वा reduce गर्न प्रयोग हुन्छ — यो four-bar linkage हो जसले tracing point को आकृति आवश्यक अनुपातमा उतार्छ। Area नाप्न planimeter प्रयोग हुन्छ, यो होइन।"
 },
 {
  "q": "091-1051-4 को नक्साको माननाप कति हो ?",
  "o": [
   "1:2500",
   "1:25000",
   "1:1250",
   "1:500"
  ],
  "a": 2,
  "e": "नेपालको कित्तानापी sheet संख्यांकन (जस्तै 091-1051-4) बाट scale पढ्ने तरिका Survey Department को निर्देशिकामा परिभाषित छ; यो मानक स्रोत बिना प्रमाणित गर्न सकिँदैन। ⚠️ आफ्नो पाठ्यपुस्तक/निर्देशिकाबाट जाँच गर्नुहोला।"
 },
 {
  "q": "Which is odd ?",
  "o": [
   "Pictorial symbol",
   "Descriptive symbol",
   "Iconic symbol",
   "Abstract symbol"
  ],
  "a": 3,
  "e": "Pictorial, Descriptive र Iconic — तीनै 'जस्ताको तस्तै देखिने' symbol का पर्याय हुन्; Abstract symbol मात्र फरक परिवारको हो (geometric shape जस्तै वृत्त, वर्ग — वस्तुसँग मिल्दैन)।"
 },
 {
  "q": "Point feature को case मा Name placement गर्दा सबैभन्दा उत्तम कुन हुन्छ ?",
  "o": [
   "उत्तर पूर्व",
   "उत्तर पश्चिम",
   "दक्षिण पूर्व",
   "दक्षिण पश्चिम"
  ],
  "a": 0,
  "e": "Point symbol (जस्तै घर, मन्दिर, स्तम्भ) को नाम सबैभन्दा पहिले North-East (उत्तर-पूर्व, upper right) मा राख्ने प्रचलन छ — Imhof को नियम अनुसार दोस्रो विकल्प North-West (upper left)। नामले symbol लाई नछोप्नु पर्छ।"
 },
 {
  "q": "तलका मध्ये कुन graphic element of map design अन्तर्गत पर्दैन ?",
  "o": [
   "Hue",
   "Title",
   "Shape",
   "Location"
  ],
  "a": 1,
  "e": "Graphic (visual) elements of map design = hue/value, shape, size, location, orientation, pattern — Bertin का 'visual variables'। Title भनेको map element हो, graphic element होइन।"
 },
 {
  "q": "180-1250- 05 कुन scale को sheet हो ?",
  "o": [
   "1:2500",
   "1:1250",
   "1:500",
   "None"
  ],
  "a": 2,
  "e": "कित्तानापी sheet नम्बरबाट scale निकाल्ने नियम Survey Department को sheet-numbering निर्देशिकामा छ; बाह्य स्रोतबाट प्रमाणित गर्न सकिएन। ⚠️ आफ्नो स्रोतबाट जाँच गर्नुहोला।"
 },
 {
  "q": "Relief representation गर्ने तरिका कुन हो ?",
  "o": [
   "Contour",
   "Spot height",
   "Layer tints",
   "All of above"
  ],
  "a": 3,
  "e": "Relief representation तीनै तरिकाले हुन्छ: contour (समान उचाई रेखा), spot height (बिन्दुगत उचाई) र layer tints (उचाई अनुसार रंग-स्तर)। Terrain अनुसार एउटा वा धेरै मिलाएर प्रयोग गरिन्छ।"
 },
 {
  "q": "Area is computed in a",
  "o": [
   "Horizontal plane",
   "Slope plane",
   "Vertical plane",
   "All of the above"
  ],
  "a": 0,
  "e": "क्षेत्रफल सधैं horizontal plane मा गणना गरिन्छ (न कि slope surface मा) — किनकि नक्सा horizontal projection हो। Slope area चाहिएमा horizontal area लाई sec θ ले गुणन गरिन्छ।"
 },
 {
  "q": "Topo map मा कृषि क्षेत्रलाई कस्तो रंगले देखाइन्छ ?",
  "o": [
   "कालो",
   "पहेलो",
   "नीलो",
   "हरियो"
  ],
  "a": 3,
  "e": "नेपालको topo map मा कृषि (खेतीयोग्य) क्षेत्र हरियो रंगले देखाइन्छ; पानी नीलो, बस्ती कालो/रातो, जंगल गाढा हरियो। ⚠️ रंग-संकेत Survey Department को legend अनुसार जाँच गर्नुहोला।"
 },
 {
  "q": "1:25000 scale को नक्सामा कुनै compound को क्षेत्रफल 24 cm² छ भने 1:50000 को scale को नक्सामा कति क्षेत्रफल हुन्छ होला?",
  "o": [
   "3 cm²",
   "6 cm²",
   "12 cm²",
   "18 cm²"
  ],
  "a": 1,
  "e": "क्षेत्रफल scale को square सँग परिवर्तन हुन्छ: (25,000/50,000)² = (1/2)² = 1/4। त्यसैले 24 cm² × 1/4 = 6 cm²। Scale आधा हुँदा लम्बाई आधा, क्षेत्रफल चौथाई।"
 },
 {
  "q": "1:2000 को नक्सालाई 1:500 को नक्सामा enlarge गर्दा कति वटा सिट बन्छन् ?",
  "o": [
   "4",
   "8",
   "12",
   "16"
  ],
  "a": 3,
  "e": "Linear ratio = 2000 ÷ 500 = 4 → लम्बाई र चौडाई दुवै 4 गुणा। Sheet संख्या = 4 × 4 = 16 (क्षेत्रफल 16 गुणा)।"
 },
 {
  "q": "कुनै नक्सा जुन माननापमा तयार भएको छ सो भन्दा ठूलो वा सानो माननापको प्रतिलिपी कुन तरिकाबाट निकाल्न सकिँदैन ?",
  "o": [
   "तस्वीर खिचेर",
   "Bronton compass प्रयोग गरेर",
   "Proportional compass प्रयोग गरेर",
   "Pantograph प्रयोग गरेर"
  ],
  "a": 1,
  "e": "Pantograph, proportional compass र फोटो खिचेर (photographic) नक्साको enlargement/reduction गर्न सकिन्छ; Brunton compass ले bearing/angle मात्र नाप्छ, नक्सा प्रतिलिपि बनाउँदैन। (Bronton = Brunton को टाइपो।)"
 },
 {
  "q": "कुनै नक्सामा जनघनत्व देखाउन तलका मध्ये कुन संकेत प्रयोग गरिन्छ ?",
  "o": [
   "line symbol",
   "picture symbol",
   "polygon symbol",
   "point symbol"
  ],
  "a": 3,
  "e": "जनघनत्व (population density) dot-density method ले देखाइन्छ — एउटा point (dot) ले निश्चित जनसंख्या जनाउँछ, त्यसैले point symbol। (क्षेत्र अनुसार औसत घनत्व choropleth मा area symbol बाट देखाइन्छ — प्रश्नले 'जनघनत्व देखाउने संकेत' सोधेको छ।)"
 },
 {
  "q": "नक्सा बनाउँदा कुन अवस्थामा generalization गर्नु पर्ने हुन्छ ?",
  "o": [
   "आधार नक्सा बनाउँदा",
   "ठूलो वाट सानो scale को नक्सा बनाउँदा",
   "सानो वाट ठूलो scale को नक्सा बनाउँदा",
   "plan बनाउँदा"
  ],
  "a": 1,
  "e": "Generalization तब गरिन्छ जब ठूलो scale (बढी विवरण) बाट सानो scale (कम विवरण) को नक्सा बनाइन्छ — विवरण छान्ने, सरल बनाउने, displace गर्ने। यसको उल्टो (सानो→ठूलो) मा विवरण थप्नुपर्ने हुन्छ, त्यसैले generalization होइन।"
 },
 {
  "q": "कुन अवस्थामा फरक फरक ढचाईका कण्डुर लाइनहरु आपसमा intersect गर्छ ?",
  "o": [
   "vertical cliff",
   "overhanging cliff",
   "steep slope",
   "ridge"
  ],
  "a": 1,
  "e": "Overhanging cliff मा मात्र फरक उचाईका contour lines आपसमा intersect (cross) गर्छन् — त्यहाँ एउटै बिन्दुको माथि अर्को सतह हुन्छ। Vertical cliff मा भने contours coincide (merge) हुन्छन्, cross हुँदैनन्।"
 },
 {
  "q": "Map area is bounded by",
  "o": [
   "trim line",
   "boarder line",
   "neat line",
   "sheet edge"
  ],
  "a": 2,
  "e": "Map area (map face/body) neat line ले सीमाबद्ध (bounded) हुन्छ। Frame line त्यसबाहिर grid/graticule value सहितको रेखा हो, margin त्योभन्दा बाहिरको भाग।"
 },
 {
  "q": "Contour interval is",
  "o": [
   "inversely proportional to the scale of the map",
   "directly proportional to the flatness of ground",
   "larger for accurate works",
   "larger if the time available is more"
  ],
  "a": 0,
  "e": "Contour interval scale सँग inversely proportional हुन्छ — scale ठूलो (जस्तै 1:500) भने interval सानो, scale सानो (1:50,000) भने interval ठूलो। साथै यो terrain, purpose, समय र लागतमा पनि भर पर्छ।"
 },
 {
  "q": "An imaginary line lying throughout the surface of ground and preserving a constant inclination to the horizontal is",
  "o": [
   "contour line",
   "horizontal equivalent",
   "contour interval",
   "contour gradient"
  ],
  "a": 3,
  "e": "Contour gradient = जमिनको सतहमा कोरिएको काल्पनिक रेखा जसले horizontal सँग constant inclination (निश्चित ढलान) कायम राख्छ — यसलाई grade पनि भनिन्छ। Contour interval = ठाडो दूरी, horizontal equivalent = तेर्सो दूरी।"
 },
 {
  "q": "Topo map मा detail हरु कुन projection मा हुन्छन् ?",
  "o": [
   "orthogonal projection",
   "perspective projection",
   "central projection",
   "parallel projection"
  ],
  "a": 0,
  "e": "Topo map मा detail हरू orthogonal (orthographic) projection मा हुन्छन् — माथिबाट सिधा तल हेर्दा देखिने vertical projection। Perspective/central projection मा भने वस्तुको 'नजरको' आकृति बन्छ, नक्साको लागि उपयुक्त छैन।"
 },
 {
  "q": "तलका मध्ये कुन isoline map हो ?",
  "o": [
   "contour map",
   "isotherm map",
   "isochrones map",
   "all of above"
  ],
  "a": 3,
  "e": "Isoline map = समान मान भएका बिन्दु जोड्ने नक्सा: contour (उचाई), isotherm (तापक्रम), isochrones (समय/यात्रा) — तीनै isoline map हुन्।"
 },
 {
  "q": "How many types the map scale in a map can be represent ?",
  "o": [
   "2",
   "3",
   "4",
   "5"
  ],
  "a": 1,
  "e": "Scale लाई नक्सामा तीन तरिकाले देखाइन्छ: (i) statement/verbal (1 cm = 1 km), (ii) Representative Fraction (1:100,000), (iii) graphical/linear scale (bar scale)। मूल key '2' ले मानक परिभाषा छोडेको थियो — NCERT/egyankosh सहित सबै स्रोत 'तीन' भन्छन्।"
 },
 {
  "q": "Meta data ले तलको कुन map element लाई जनाउँदछ ?",
  "o": [
   "map face",
   "neat line",
   "boarder information",
   "marginal information"
  ],
  "a": 3,
  "e": "Metadata = नक्साको बारेमा जानकारी (data about data) — projection, datum, source, date, accuracy — जुन नक्साको margin (marginal information) मा राखिन्छ, map face मा होइन।"
 },
 {
  "q": "Ridge line मा contours को shape कस्तो हुन्छ ?",
  "o": [
   "O",
   "Λ",
   "V",
   "C"
  ],
  "a": 2,
  "e": "Ridge मा contours V आकारका हुन्छन् र V को टुप्पो downhill (तल, नदी तर्फ) फर्केको हुन्छ। Valley मा पनि V नै बन्छ तर टुप्पो uphill (माथि, पानी बगेर आउने दिशा) तिर फर्केको हुन्छ।"
 },
 {
  "q": "Symbol सम्बन्धि अध्ययन गरिने विधालाई के भनिन्छ ?",
  "o": [
   "cartography",
   "Semiology",
   "Topology",
   "Toponomy"
  ],
  "a": 1,
  "e": "Semiology (semiotics) = symbol (चिन्ह) र तिनको अर्थको अध्ययन। तुलना: Cartography = नक्सा बनाउने विज्ञान/कला, Topology = स्थानिय सम्बन्धको गणित, Toponomy = स्थान-नामको अध्ययन।"
 },
 {
  "q": "तलका मध्ये कुन तरिकाबाट relief representation गरिदैन ?",
  "o": [
   "Contouring",
   "Hill shading",
   "colour tinting",
   "Generalization"
  ],
  "a": 3,
  "e": "Relief representation contouring, hill shading, hachures, layer tinting र spot height बाट हुन्छ। Generalization भनेको विवरण छान्ने/सरल बनाउने प्रक्रिया हो — यसले relief देखाउँदैन।"
 },
 {
  "q": "नक्सामा जहिले पनि linear symbol हुने संकेत चिन्ह कुन हो ?",
  "o": [
   "River",
   "contour line",
   "road",
   "माथिका सबै"
  ],
  "a": 1,
  "e": "Contour line सधैं linear (line) symbol नै हुन्छ — यो लामो रेखा हो, point वा area होइन। River र road भने scale अनुसार line (सानो scale) वा area (ठूलो scale) दुवै हुन सक्छन्।"
 },
 {
  "q": "Pantograph बाट original map को कस्तो copy बनाउन सकिदैन ?",
  "o": [
   "Enlarged copy",
   "Reduced copy",
   "Same-scale copy",
   "Mirror-reversed copy"
  ],
  "a": 3,
  "e": "Pantograph ले original लाई same scale, enlarged र reduced — तीनै तरिकाले उतार्न सक्छ (मानक परिभाषा: 'copying plans on the same, or on a reduced or an enlarged, scale')। तर यसले mirror-reversed (ऐना-उल्टो) प्रतिलिपि बनाउँदैन — त्यसैले (d)। मूल अंकमा 'same scale' लाई गलत ठानिएको थियो, जुन तथ्यसँग मेल खाँदैन।"
 },
 {
  "q": "The contour interval for a particular map is always kept :",
  "o": [
   "Constant",
   "Variable",
   "Irregular",
   "Proportional"
  ],
  "a": 0,
  "e": "एउटै नक्सामा contour interval सामान्यतया constant राखिन्छ — नत्र नक्सा पढ्न अप्ठ्यारो हुन्छ। तर विशेष अवस्थामा (जस्तै भीरालो पहाड) variable interval पनि प्रयोग गरिन्छ।"
 },
 {
  "q": "Area preserve हुने गरि गरिएको projection लाई के भनिन्छ ?",
  "o": [
   "Equivalent",
   "Equidistant",
   "Both",
   "None"
  ],
  "a": 0,
  "e": "Equivalent (equal-area / authalic) projection ले क्षेत्रफल जोगाउँछ — आकार/कोण बिग्रन सक्छ। Equidistant ले दूरी, conformal (orthomorphic) ले आकार/कोण जोगाउँछ। भू-उपयोग/जनघनत्व जस्ता तथ्याङ्कका लागि equal-area उपयुक्त।"
 },
 {
  "q": "UTM Projection मा Scale factor कति हुन्छ",
  "o": [
   "0.9666",
   "0.6999",
   "0.9996",
   "0.9999"
  ],
  "a": 2,
  "e": "UTM projection को central meridian मा scale factor 0.9996 हुन्छ (6° zone)। नेपालले प्रयोग गर्ने MUTM (3° zone) मा भने 0.9999। Scale factor = actual scale ÷ principal scale।"
 },
 {
  "q": "The optimum plotting precision for scale 1:500 is-",
  "o": [
   "500×0.25mm",
   "500×0.25cm",
   "500×25mm",
   "500×0.01mm"
  ],
  "a": 0,
  "e": "Optimum plotting precision = scale denominator × 0.25 mm (कागजमा मानिसले छुट्याउन सक्ने न्यूनतम दूरी)। 1:500 को लागि 500 × 0.25 mm = 125 mm = 12.5 cm।"
 },
 {
  "q": "Which of the following is not the characteristics of map ?",
  "o": [
   "Reduction of reality",
   "Symbology",
   "Generalization",
   "none of the above"
  ],
  "a": 3,
  "e": "नक्साका तीनै विशेषता हुन्: reduction of reality (वास्तविकताको सानो रूप), symbology (चिन्ह) र generalization (विवरण छान्ने)। त्यसैले 'none of the above'।"
 },
 {
  "q": "Maps that are produced typically for earthquakes, volcanoes, landslides etc are called-",
  "o": [
   "Geological maps",
   "Hazard maps",
   "Hydrological maps",
   "Soil maps"
  ],
  "a": 1,
  "e": "Hazard map = भूकम्प, ज्वालामुखी, पहिरो, बाढी जस्ता प्राकृतिक जोखिम देखाउने नक्सा। Geological map ले चट्टान/भू-विज्ञान, soil map ले माटो, hydrological map ले पानी।"
 },
 {
  "q": "नेपालको लुम्बिनी अंचलको म्याप कस्ले तयार गरेको हो ?",
  "o": [
   "JICA",
   "Finland",
   "Canada",
   "Government of India"
  ],
  "a": 0,
  "e": "लुम्बिनी अञ्चलको topographic map JICA (Japan International Cooperation Agency) को सहयोगमा तयार भएको हो। FINNIDA (Finland) ले अन्य क्षेत्रका नक्सा बनाएको थियो। ⚠️ क्षेत्र-विशिष्ट तथ्य, आफ्नो स्रोतबाट पुष्टि गर्नुहोला।"
 },
 {
  "q": "Grids and Graticules को value नक्साको कुन भागमा उल्लेख गरिन्छ ?",
  "o": [
   "Map face",
   "Frame line",
   "Boarder",
   "Margin"
  ],
  "a": 2,
  "e": "Grid र graticule को value नक्साको border (frame line बाहिरको किनारा) मा लेखिन्छ, जसबाट कुनै बिन्दुको coordinate पढ्न सकिन्छ।"
 },
 {
  "q": "Pantograph के को लागि प्रयोग गरिन्छ ?",
  "o": [
   "Angle measurement गर्न",
   "Distance calculate गर्न",
   "Height determine गर्न",
   "नक्सालाई enlarge and reduction गर्न"
  ],
  "a": 3,
  "e": "Pantograph नक्सालाई enlarge वा reduce गर्न प्रयोग हुन्छ। कोण नाप्न theodolite/compass, दूरी नाप्न tape/EDM, उचाई नाप्न level प्रयोग हुन्छ।"
 },
 {
  "q": "1:2500 को scale को नक्साले कति क्षेत्रफल ओगट्दछ ?",
  "o": [
   "156.25 Hector",
   "39.06 Hector",
   "6.25 Hector",
   "625 Hector"
  ],
  "a": 0,
  "e": "नेपालको मानक 1:2,500 sheet 50 cm × 50 cm मान्दा: 50 cm × 2,500 = 1,250 m; क्षेत्रफल = 1,250 × 1,250 = 1,562,500 m² = 156.25 hectare। (39.06 ha = 1:1250, 6.25 ha = 1:500, 625 ha = 1:5000 — सबै 50 cm sheet मा आधारित।)"
 },
 {
  "q": "जमिनमा कुनै दुई बिन्दुहरु बीचको दुरी ५० कि.मी. छ र सो दुरी नक्सामा २५ से.मी. प्लट गरियो भने नक्साको स्केल कति हुन्छ ?",
  "o": [
   "1:200000",
   "1:100000",
   "1:50000",
   "1:25000"
  ],
  "a": 0,
  "e": "Scale = नक्साको दूरी ÷ जमिनको दूरी (एउटै एकाइ) = 25 cm ÷ 5,000,000 cm = 1:200,000।"
 },
 {
  "q": "Large scale cadastral mapping का लागि adopt गरिएको MUTM projection system मा scale factor कति हुन्छ ?",
  "o": [
   "1",
   "0.9999",
   "0.9996",
   "0"
  ],
  "a": 1,
  "e": "Large-scale cadastral mapping (1:500, 1:1000) को लागि अपनाइएको MUTM मा central meridian को scale factor 0.9999 हुन्छ; साधारण UTM (6° zone) मा 0.9996।"
 },
 {
  "q": "टोपोग्राफिकल नक्सामा कुन information समेटिएको हुँदैन ?",
  "o": [
   "Terrain information",
   "Property boundary",
   "Hydrography information",
   "Transportation information"
  ],
  "a": 1,
  "e": "Topographical नक्सामा terrain, hydrography, transportation, settlement जस्ता विवरण हुन्छन्; property boundary (कित्ता सिमाना) cadastral नक्सामा मात्र हुन्छ।"
 },
 {
  "q": "1:5000 माननापमा भएको नक्सालाई 1:2500 मान नापमा लैजाँदा के हुन्छ ?",
  "o": [
   "200% Enlargement",
   "200% Reduction",
   "50% Reduction",
   "50% enlargement"
  ],
  "a": 0,
  "e": "1:5,000 बाट 1:2,500 मा जाँदा linear dimension दोब्बर हुन्छ — अर्थात् नक्सा original को 200% (दोब्बर) बनाइन्छ। (क्षेत्रफल 4 गुणा।)"
 },
 {
  "q": "नेपालको अन्तर्राष्ट्रिय सीमानाको नापी र नक्साङ्कन गर्ने जिम्मेवारी कुन निकायलाई दिइएको छ ?",
  "o": [
   "सम्बन्धित नापी कार्यालय",
   "कित्तानापी महाशाखा",
   "परराष्ट्र मन्त्रालय",
   "स्थलरुप नापी महाशाखा"
  ],
  "a": 3,
  "e": "नेपालको अन्तर्राष्ट्रिय सीमानाको नापी/नक्साङ्कन स्थलरुप नापी महाशाखा (Topographical Survey Branch, नापी विभाग) को जिम्मेवारीमा पर्छ। ⚠️ संगठन-सम्बन्धी तथ्य, हालको कार्यविभाजन जाँच गर्नुहोला।"
 },
 {
  "q": "UTM projection system is used for mapping of....",
  "o": [
   "whole World",
   "Near Equatorial Region",
   "Suitable for polar region",
   "region between 80⁰ south to 84⁰ North"
  ],
  "a": 3,
  "e": "UTM projection 80° South देखि 84° North सम्मको क्षेत्रको लागि प्रयोग हुन्छ (ध्रुवीय क्षेत्रको लागि UPS — Universal Polar Stereographic)। यसमा 6° का 60 वटा zone छन्।"
 },
 {
  "q": "Plan मा कुन कुरा समावेश गरिएको हुँदैन ?",
  "o": [
   "Distance",
   "Direction",
   "Height",
   "All of above"
  ],
  "a": 2,
  "e": "Plan = horizontal projection मात्र — यसमा distance र direction हुन्छ, height (उचाई) हुँदैन। उचाई चाहिएँ contour/spot height सहितको map (topo map) चाहिन्छ।"
 },
 {
  "q": "१:२५०० स्केलको कित्तानापी नक्सामा रहेको ६ मिटर ५० सेन्टिमिटर चौडा बाटो १:५०० स्केलमा प्लट गर्दा कति से.मी. चौडा हुन्छ ?",
  "o": [
   "३२.५ से.मी.",
   "१.३ से.मी.",
   "१६२.५ से.मी.",
   "०.२६ से.मी."
  ],
  "a": 1,
  "e": "६.५ मिटर = ६५० से.मी.। १:५०० स्केलमा ६५० ÷ ५०० = १.३ से.मी. (१:२५०० मा भने ०.२६ से.मी. हुन्छ)।"
 },
 {
  "q": "The value of scale factor at central meridian for UTM projection is .....?",
  "o": [
   "1",
   "0.9999",
   "0.9996",
   "0.6999"
  ],
  "a": 2,
  "e": "UTM projection को central meridian मा scale factor 0.9996 हुन्छ।"
 },
 {
  "q": "हिमाली क्षेत्रको टोपोग्राफिकल वेस नक्सामा ५००० मिटर भन्दा माथिका कन्दुरहरुलाई कस्तो रंगले देखाईन्छ ?",
  "o": [
   "Brown",
   "Red",
   "Blue",
   "white"
  ],
  "a": 1,
  "e": "हिमाली क्षेत्रको topographical base map मा ५,००० m माथिका contour हरू रातो (red) रंगले देखाइन्छ — माथिल्लो उचाई छुट्याउन। ⚠️ रंग-संकेत Survey Department को legend अनुसार जाँच गर्नुहोला।"
 },
 {
  "q": "Indian clinometer कस्तो scale मा mapping गर्दा उचाई निकाल्न प्रयोग गरिन्छ ?",
  "o": [
   "Large scale",
   "small scale",
   "Very large scale",
   "All of above"
  ],
  "a": 0,
  "e": "Indian pattern clinometer ढलानको कोण (angle of slope) नाप्ने सरल यन्त्र हो, जसबाट trigonometrically उचाई निकालिन्छ — यो large-scale mapping/विस्तृत सर्वेक्षणमा प्रयोग हुन्छ। ⚠️ प्रयोग-क्षेत्र सम्बन्धी कथन, आफ्नो स्रोतबाट जाँच गर्नुहोला।"
 },
 {
  "q": "While plotting L- section of any road, if the horizontal scale is 1: 5000, than vertical scale is",
  "o": [
   "1: 50000",
   "1: 50",
   "1: 500",
   "1: 5000"
  ],
  "a": 2,
  "e": "L-section मा vertical scale सामान्यतया horizontal scale भन्दा 10 गुणा ठूलो हुन्छ। 1:5000 को 10 गुणा ठूलो = 1:500"
 },
 {
  "q": "UTM projection मा कतिवटा longitudinal zones छन् ?",
  "o": [
   "20",
   "60",
   "360",
   "36"
  ],
  "a": 1,
  "e": "UTM projection मा 6° का 60 वटा longitudinal zone छन् (360° ÷ 6°) — zone 1 ले 180°W बाट सुरु हुन्छ। नेपाल zone 44 र 45 मा पर्छ।"
 },
 {
  "q": "Contour Interval Depends on;",
  "o": [
   "Nature of the ground",
   "Scale of the map",
   "Purpose and extent of survey",
   "All of the above"
  ],
  "a": 3,
  "e": "Contour interval चारै कुरामा भर पर्छ: जमिनको बनावट (भीरालो/सम्म), नक्साको scale, survey को उद्देश्य/विस्तार, र समय तथा लागत। त्यसैले 'All of the above'।"
 },
 {
  "q": "तल दिएका मध्ये कुन ठिक छ ?",
  "o": [
   "Shrinkage factor = shrinkage length/true length",
   "Shrinkage factor = True shrinkage lenth",
   "Shrinkage factor = true shrinkage*true lenth",
   "Shrinkage factor = shrinkage length- true length"
  ],
  "a": 0,
  "e": "Shrinkage factor = shrinkage (shrunk) length ÷ true (original) length — सधैं 1 भन्दा कम। सम्बन्धित सूत्र: shrunk (corrected) scale = shrinkage factor × original scale, जस्तै 24/25 × 1/2400 = 1/2500।"
 },
 {
  "q": "०५६-००९८-४ ले कुन scale लाई जनाउँछ ?",
  "o": [
   "1: 2500",
   "1: 1250",
   "1: 500",
   "1: 1000"
  ],
  "a": 0,
  "e": "कित्तानापी sheet नम्बर (जस्तै ०५६-००९८-४) बाट scale पढ्ने नियम Survey Department को sheet-numbering निर्देशिकामा परिभाषित छ; बाह्य स्रोतबाट प्रमाणित गर्न सकिएन। ⚠️ आफ्नो स्रोतबाट जाँच गर्नुहोला।"
 },
 {
  "q": "L-section मा vertical scale 1:x भए horizontal scale कति हुन्छ ?",
  "o": [
   "1:10x",
   "1:100x",
   "1:x/10",
   "कुनै पनि होइन"
  ],
  "a": 0,
  "e": "L-section मा vertical scale horizontal भन्दा 10 गुणा ठूलो (vertical exaggeration 10) राखिन्छ। vertical 1:x भए horizontal = 1:10x। जस्तै vertical 1:500 भए horizontal 1:5000। मूल विकल्प '10x' मा 1: को अभाव थियो — अस्पष्ट थियो, स्पष्ट पारिएको।"
 },
 {
  "q": "Which of the following is not the element of map ?",
  "o": [
   "Neat line",
   "Sheet number",
   "Frame line",
   "Boarder line"
  ],
  "a": 1,
  "e": "Neat line, frame line र border line — तीनै नक्साका element हुन्। Sheet number भनेको नक्साको पहिचान/सूचकांक हो, नक्साको 'element' (डिजाइन घटक) होइन — यो margin मा लेखिन्छ।"
 },
 {
  "q": "Graticule line in map is",
  "o": [
   "Line showing geographical coordinates",
   "Line showing plane coordinates",
   "Boarder line",
   "Line showing geodetic coordinates"
  ],
  "a": 0,
  "e": "Graticule = latitude/longitude (geographical coordinate) देखाउने रेखाहरूको जालो। Grid भने projected (UTM/MUTM) coordinate को जालो हो।"
 },
 {
  "q": "GIS भन्नाले के बुझिन्छ ?",
  "o": [
   "Global Information system",
   "Geographical Information system",
   "Geoditic Information system",
   "(क) र ख) दुबै"
  ],
  "a": 1,
  "e": "GIS = Geographical Information System — 'Global' वा 'Geodetic' होइन। यसले स्थान-आधारित तथ्याङ्क (जस्तै भू-उपयोग, सडक, जनसंख्या) लाई layer मा राखेर विश्लेषण गर्छ।"
 },
 {
  "q": "Modified Universal Transverse Mercator System मा Scale factor को मान कति हुन्छ ?",
  "o": [
   "0.999",
   "0.9996",
   "0.9999",
   "कुनै पनि होइन"
  ],
  "a": 2,
  "e": "MUTM (Modified Universal Transverse Mercator) मा central meridian को scale factor 0.9999 हुन्छ। साधारण UTM (6° zone) मा 0.9996। नेपालले 3° का तीन zone (81°, 84°, 87°E) प्रयोग गर्छ।"
 },
 {
  "q": "तलका मध्ये कुन नक्सामा Contour line खिचिएको हुन्छ ?",
  "o": [
   "Topographic",
   "Thematic map",
   "Cadastral",
   "File map"
  ],
  "a": 0,
  "e": "Topographic map मा contour line अनिवार्य हुन्छ — यसैले यसले relief/उचाई देखाउँछ। Thematic map ले एउटा विषय (जनसंख्या, भू-उपयोग), cadastral map ले कित्ता सिमाना देखाउँछ।"
 },
 {
  "q": "जंगल वर्षा तापक्रम आदिबारे विशेष गुण जाहेर गर्ने नक्सालाई के भनिन्छ ?",
  "o": [
   "Glove",
   "Topographic map",
   "Tourist map",
   "Thematic map"
  ],
  "a": 3,
  "e": "Thematic map = एउटा विशेष विषय/गुण (जंगल, वर्षा, तापक्रम, जनघनत्व) देखाउने नक्सा। Topographic map ले सबै प्रकारका भौतिक विवरण देखाउँछ। 'Globe' भनिएको विकल्प गलत शब्द हो।"
 },
 {
  "q": "जमिनको १ कि.मी. नक्सामा २ से.मी. भए उक्त नक्साको Scale कति हुन्छ ?",
  "o": [
   "1:25,000",
   "1:40,000",
   "1:50,000",
   "1:100,000"
  ],
  "a": 2,
  "e": "Scale = नक्साको दूरी ÷ जमिनको दूरी (एउटै एकाइ) = 2 cm ÷ 100,000 cm = 1:50,000।"
 },
 {
  "q": "दिशा (azimuth/direction) मा शुद्धता कायम गर्ने उपयुक्त projection कुन हो ?",
  "o": [
   "Azimuthal (Zenithal) Projection",
   "Equal area Projection",
   "Equidistant Projection",
   "UTM Projection"
  ],
  "a": 0,
  "e": "Azimuthal (zenithal) projection ले केन्द्रबाट दिशा (azimuth) सही राख्छ — यसैले नाम 'azimuthal'। Equal-area ले क्षेत्रफल, equidistant ले दूरी, UTM/conformal ले आकार-कोण जोगाउँछ। मूल अंकमा azimuthal नै विकल्पमा थिएन।"
 },
 {
  "q": "Geographical coordinate System कुन एकाइमा हुन्छ ?",
  "o": [
   "Degree,Minute,second",
   "Meter मा",
   "feet मा",
   "कुनै पनि होइन"
  ],
  "a": 0,
  "e": "Geographical coordinate system (latitude, longitude) डिग्री-मिनेट-सेकेन्ड (DMS) मा हुन्छ। Projected system (UTM/MUTM grid) मा easting/northing मिटरमा हुन्छ।"
 },
 {
  "q": "Measurement taken with a wrong scale can be corrected by using the relation?",
  "o": [
   "True length = (R.F. of the wrong scale ÷ R.F. of the correct scale) × Measured length",
   "True length = (correct scale ÷ wrong scale)² × Measured length",
   "True length = (wrong length ÷ correct length) × Measured length",
   "none of the above"
  ],
  "a": 0,
  "e": "सही सम्बन्ध: True length = (R.F. wrong ÷ R.F. correct) × measured length = (correct denominator ÷ wrong denominator) × measured length। उदाहरण: खुम्चिएको नक्सामा 5 cm नाप्दा, सही scale 1:1000 (मानक) भनेर 50 m पढियो, वास्तविक scale 1:1200 भए सही लम्बाई = (1200/1000) × 50 = 60 m। (b) को square को सम्बन्ध क्षेत्रफल (area) को लागि हो, लम्बाईको होइन।"
 },
 {
  "q": "नक्साको तल्लो भागमा चित्रण गरिएको स्केल कस्तो प्रकारको हुन्छ ?",
  "o": [
   "न्यूमेरिकल",
   "ग्राफिकल",
   "माथिको दुबै",
   "कुनै पनि होइन"
  ],
  "a": 1,
  "e": "नक्साको तल्लो भाग (bottom margin) मा graphical (bar/linear) scale राखिन्छ — किनकि नक्सा खुम्चिँदा/फोटोकपी हुँदा पनि यसले सही दूरी दिन्छ, RF ले दिँदैन।"
 },
 {
  "q": "ठूलो माननापको sheet numbering को लागि कति डिग्रीका longitudinal zone मा बाँडिएको छ ?",
  "o": [
   "६⁰",
   "३⁰",
   "४⁰",
   "१⁰"
  ],
  "a": 1,
  "e": "⚠️ यो item मा key (३°) र explanation (३०′ × ३०′) बीच विरोधाभास छ — दुवै फरक कुरा हुन् (३° zone ≠ ३०′ grid)। ठूलो माननापको sheet numbering को zone विभाजन Survey Department को निर्देशिका अनुसार जाँच गर्नुहोला; बाह्य स्रोतबाट प्रमाणित गर्न सकिएन, त्यसैले key नछोडिएको। (नेपालमा ३° का ३ वटा MUTM zone: ८१°, ८४°, ८७°E।)"
 },
 {
  "q": "नेपालका base map हरु कति स्केलमा बनाइएका छन् ?",
  "o": [
   "1:25000",
   "1:50000",
   "both",
   "none"
  ],
  "a": 2,
  "e": "नेपालका base map (topographic base) 1:25,000 र 1:50,000 — दुवै scale मा तयार गरिएका छन् (JICA/FINNIDA सहयोगमा)। ⚠️ हालको अद्यावधिक अवस्था जाँच गर्नुहोला।"
 },
 {
  "q": "नेपालको लुम्बिनी अञ्चलको topographic map कसको सहयोगमा तयार गरिएको हो ?",
  "o": [
   "JICA",
   "FINNIDA",
   "Canada",
   "Government of India"
  ],
  "a": 0,
  "e": "लुम्बिनी अञ्चलको topographic map JICA को सहयोगमा तयार भएको हो; FINNIDA (Finland) ले अन्य क्षेत्र (जस्तै केही पश्चिमाञ्चल क्षेत्र) मा काम गरेको थियो। ⚠️ क्षेत्र-विशिष्ट तथ्य, आफ्नो स्रोतबाट पुष्टि गर्नुहोला।"
 },
 {
  "q": "तलका projection मध्ये कुन अमिल्दो छ ?",
  "o": [
   "Equal area",
   "Equivalent",
   "Authalic",
   "Orthomorphic"
  ],
  "a": 3,
  "e": "Equal area, Equivalent र Authalic — तीनै एउटै कुरा (क्षेत्रफल जोगाउने projection) का नाम हुन्। Orthomorphic (conformal) ले आकार/कोण जोगाउँछ, क्षेत्रफल होइन — त्यसैले यो अमिल्दो।"
 },
 {
  "q": "UTM projection मा central meridian कति वटा हुन्छन् ?",
  "o": [
   "1",
   "60",
   "90",
   "180"
  ],
  "a": 1,
  "e": "UTM projection मा 6° का 60 वटा zone हुन्छ, प्रत्येक zone को आफ्नै central meridian — त्यसैले 60 वटा central meridian।"
 },
 {
  "q": "नक्सामा कुनै location को नाम लेख्दा location देखि कति टाढाँ छोटो name लेख्नुपर्दछ ?",
  "o": [
   "optical distance जति",
   "optical distance को आधा",
   "optical distance को २ गुणा",
   "optical distance को एक तिहाई"
  ],
  "a": 0,
  "e": "नाम (lettering) लाई symbol बाट 'optical distance' जति टाढा राख्ने प्रचलन छ — अर्थात् नाम symbol सँग टाँसिएको नदेखिने गरी, तर सम्बन्ध कायम रहने दूरी।"
 },
 {
  "q": "एउटा grid sheet पूर्व पश्चिम 50km फैलिएको हुन्छ भने उत्तर दक्षिण कति फैलिएको हुन्छ ?",
  "o": [
   "30' (≈ 55 km)",
   "50 km",
   "50000 m",
   "Both (b) and (c)"
  ],
  "a": 3,
  "e": "Grid sheet square (ground distance) मा हुन्छ — पूर्व-पश्चिम 50 km भए उत्तर-दक्षिण पनि 50 km = 50,000 m। 30′ of latitude ≈ 55.6 km हुन्छ, 50 km होइन — त्यसैले मूल 'All of above' मध्ये (a) मात्र गलत थियो, विकल्प (d) लाई स्पष्ट पारिएको।"
 },
 {
  "q": "नक्सालाई के को आधारमा वर्गीकरण गर्न सकिन्छ ?",
  "o": [
   "जमिनको स्वरुप",
   "मान नाप",
   "कार्य उद्देश्य",
   "माथिका सबै"
  ],
  "a": 3,
  "e": "नक्सालाई तीनै आधारमा वर्गीकरण गर्न सकिन्छ: जमिनको स्वरुप (topo/cadastral), मान-नाप (large/small scale) र कार्य-उद्देश्य (thematic/reference)।"
 },
 {
  "q": "If dimension of a temple is 10 m.x 10m., what type of symbol do you used in 1:500 map.",
  "o": [
   "Point",
   "Line",
   "Area",
   "Surface"
  ],
  "a": 2,
  "e": "1:500 मा 10 m × 10 m को मन्दिर = 2 cm × 2 cm — यो area (polygon) symbol हो, point वा line होइन। सानो scale (जस्तै 1:25,000) मा भने यसलाई point symbol ले देखाइन्छ।"
 },
 {
  "q": "Which Scale is the smallest one",
  "o": [
   "1:500",
   "1:1250",
   "1:2500",
   "1:5000"
  ],
  "a": 3,
  "e": "Scale को denominator जति ठूलो, scale त्यति सानो। 1:5000 मा 1 cm = 50 m (सबैभन्दा कम विवरण) — त्यसैले सबैभन्दा सानो scale।"
 },
 {
  "q": "......... is used for presenting geographically the facts about Earth and life, and space.",
  "o": [
   "Globe",
   "Atlas",
   "Map",
   "Plan"
  ],
  "a": 1,
  "e": "Atlas = नक्साहरूको सङ्ग्रह जसले पृथ्वी, जीवन र अन्तरिक्षका तथ्यहरू भौगोलिक रूपमा प्रस्तुत गर्छ। Globe ले पृथ्वीको आकार मात्र देखाउँछ; map/plan ले एउटा क्षेत्र।"
 },
 {
  "q": "नेपालको geodetic datum को origin Nagarkot को latitude कति हो ?",
  "o": [
   "27⁰ 41' 31\"",
   "27ᵍ 41ᶜᵍ31ᶜᶜᵍ",
   "81⁰ 84' 87\"",
   "81ᵍ 84ᶜᵍ87ᶜᶜᵍ"
  ],
  "a": 0,
  "e": "नेपालको geodetic datum को origin Nagarkot मा छ: latitude ≈ 27° 41' 31\" N, longitude ≈ 85° 31' 38\" E (Everest 1830 ellipsoid)। विकल्प (b)/(d) मा भएको ᵍ/ᶜᵍ (gon) एकाइ यहाँ लागू हुँदैन।"
 },
 {
  "q": "Planimeter is used for measuring",
  "o": [
   "Volume",
   "Area",
   "Contour gradient",
   "Slope angle"
  ],
  "a": 1,
  "e": "Planimeter = नक्सामा कोरिएको irregular (अनियमित) आकृतिको क्षेत्रफल नाप्ने यन्त्र। यसले outline लाई घुमाएर सिधै area पढाउँछ; volume, slope वा angle नाप्दैन।"
 },
 {
  "q": "45⁰ north latitude भएको ठाउँमा कुन projection राम्रो हुन्छ ?",
  "o": [
   "Cylindrical",
   "Conical",
   "Zenithal",
   "Azimuthal"
  ],
  "a": 1,
  "e": "Conical projection मध्यम अक्षांश (mid-latitude, जस्तै 45°) को क्षेत्रका लागि उपयुक्त हुन्छ — cone ले त्यहाँ ellipsoid लाई राम्ररी छुन्छ। समुद्री/विषुवतीय क्षेत्रका लागि cylindrical, ध्रुवीयका लागि azimuthal।"
 },
 {
  "q": "FINNIDA project द्वारा निर्मित 1:25000 scale को नक्साले कति क्षेत्र ओगट्दछ ?",
  "o": [
   "15'×15'",
   "7'30\"×7'30\"",
   "30'×30'",
   "1⁰×1⁰"
  ],
  "a": 0,
  "e": "FINNIDA project को 1:25,000 नक्साले 15′ × 15′ क्षेत्र ओगट्छ भनिएको छ। ⚠️ अन्तर्राष्ट्रिय 1:25,000 sheet सामान्यतया 7′30\" × 7′30\" (≈ 13.9 km) हुन्छ; यसै नक्सा-समूहको Q133 ले 12.5 km × 12.5 km (50 cm sheet) भन्छ। दुईबीच मेल खाँदैन — Survey Department को sheet specification बाट जाँच गर्नुहोला।"
 },
 {
  "q": "कुन भनाई गलत छ ?",
  "o": [
   "Flat ground भए small contour interval राख्नुपर्दछ",
   "Small scale भए large contour interval राख्नुपर्दछ",
   "More time & fund भए small contour interval राख्नुपर्दछ",
   "Steep slope मा small contour interval राख्नुपर्दछ"
  ],
  "a": 3,
  "e": "भीरालो (steep slope) मा contour intervals आपसमा गाँसिन नदिन ठूलो interval राखिन्छ — त्यसैले 'steep slope मा small interval' गलत कथन हो। सम्म जमिन, सानो scale, र कम समय/रकम — सबैमा ठूलो interval; बढी समय/रकम भए सानो interval।"
 },
 {
  "q": "The representation of general topography of a very flat terrain is possible only",
  "o": [
   "By drawing contours at large interval",
   "By drawing contours at small interval",
   "By giving spot levels at large interval",
   "By giving spot levels to salient features at close interval"
  ],
  "a": 1,
  "e": "धेरै सम्म (very flat) भू-भागमा contour interval ठूलो राख्दा कन्टुर नै बन्दैन — त्यसैले सानो interval (fine contour) वा spot level प्रयोग गरिन्छ।"
 },
 {
  "q": "Greenwich को longitude कति हुन्छ ?",
  "o": [
   "90⁰",
   "180⁰",
   "270⁰",
   "none of above"
  ],
  "a": 3,
  "e": "Greenwich (Prime Meridian) को longitude 0° हो — 90°, 180°, 270° मध्ये कुनै होइन, त्यसैले 'none of above'। नेपालको समय GMT + 5:45 यसै meridian सापेक्ष छ।"
 },
 {
  "q": "The area of any irregular figure of the plotted map is measured with",
  "o": [
   "Pentagraph",
   "Sextant",
   "Clinometer",
   "Planimeter"
  ],
  "a": 3,
  "e": "Planimeter = irregular आकृतिको क्षेत्रफल नाप्ने यन्त्र। ('Pentagraph'/'Pantograph' ले नक्सा enlarge/reduce गर्छ, Sextant ले कोण, Clinometer ले ढलान।)"
 },
 {
  "q": "Projection मा distortion हरुलाई कम गर्ने हेतुले actual scale र principal scale विच कायम गरिएको ratio लाई के भनिन्छ ?",
  "o": [
   "Nominal scale",
   "Map scale",
   "Scale factor",
   "Standard line"
  ],
  "a": 2,
  "e": "Scale factor = actual scale ÷ principal (nominal) scale — projection मा हुने distortion लाई यसै अनुपातले व्यक्त गरिन्छ। UTM मा central meridian मा 0.9996, MUTM मा 0.9999।"
 },
 {
  "q": "Thematic mapping को लागि कुन projection उपयुक्त हुन्छ ?",
  "o": [
   "Conformal",
   "Equal area",
   "Equidistance",
   "Autogonal"
  ],
  "a": 1,
  "e": "Thematic mapping (जनघनत्व, भू-उपयोग जस्ता तथ्याङ्क) को लागि equal-area projection उपयुक्त हुन्छ — किनकि क्षेत्रफल बिग्रँदा तथ्याङ्कको तुलना गलत हुन्छ। Conformal ले आकार, equidistant ले दूरी जोगाउँछ।"
 },
 {
  "q": "JICA series को 1:25000 scale को नक्साले कति क्षेत्र cover गर्छ ?",
  "o": [
   "50km×50km",
   "25km×25km",
   "12.5km×12.5km",
   "None of above"
  ],
  "a": 2,
  "e": "JICA series को 1:25,000 नक्सा 50 cm × 50 cm sheet मा छापिन्छ: 50 cm × 25,000 = 12.5 km, त्यसैले 12.5 km × 12.5 km क्षेत्र ओगट्छ। ⚠️ Q126 (FINNIDA, 15′ × 15′) सँग मेल खाँदैन — आफ्नो स्रोतबाट जाँच गर्नुहोला।"
 },
 {
  "q": "3⁰ का zone मा 0.5 नं.zone कहाँ देखि कहाँ सम्म पर्दछ ?",
  "o": [
   "180⁰W to 177⁰W",
   "180⁰W to 177⁰E",
   "178⁰30'E to 178⁰30'W",
   "178⁰30'W to 178⁰30'E"
  ],
  "a": 3,
  "e": "3° zone system मा zone 0.5 central meridian 180° मा पर्छ र 178°30'W देखि 178°30'E सम्म फैलिएको हुन्छ (180° को वरिपरि 3° zone)। ⚠️ zone numbering (0.5, 44.5, 45.5 …) Nepal को MUTM निर्देशिकामा जाँच गर्नुहोला।"
 },
 {
  "q": "भू-उपयोग नक्सा कुन वर्गीकरणमा पर्छ ?",
  "o": [
   "साधारण नक्सा",
   "थिमेटिक नक्सा",
   "टोपोग्राफिक नक्सा",
   "इन्जिनियरीङ नक्सा"
  ],
  "a": 1,
  "e": "भू-उपयोग नक्सा (land use map) thematic map हो — यसले एउटा विषय (जमिनको उपयोग) देखाउँछ। Topographic ले सबै भौतिक विवरण, cadastral ले कित्ता सिमाना।"
 },
 {
  "q": "समय संग सम्वन्धित GMT को पूरापूर के हो ?",
  "o": [
   "Greenwich Mean Time",
   "Geodetic Mean Time",
   "Global Mean Time",
   "Geographic Mean Time"
  ],
  "a": 0,
  "e": "GMT = Greenwich Mean Time — 0° longitude (Greenwich) को सापेक्ष समय, जसबाट नेपालको समय +5:45 मा आधारित छ।"
 },
 {
  "q": "Direct method of contouring is",
  "o": [
   "A quick method",
   "Adopted for large surveys only",
   "Most accurate method",
   "Suitable for hilly terrains"
  ],
  "a": 2,
  "e": "Direct method of contouring सबैभन्दा accurate हुन्छ (contour लाई field मै trace गरिन्छ) तर ढिलो र महँगो — त्यसैले सानो क्षेत्र/large-scale map मा मात्र। यो hilly terrain को लागि उपयुक्त छैन (त्यहाँ tacheometric/indirect)।"
 },
 {
  "q": "नक्साको Shrinkage Factor सधैं..........हुन्छ ।",
  "o": [
   "०",
   "१ भन्दा बढी",
   "१ भन्दा कम",
   "२ भन्दा बढी"
  ],
  "a": 2,
  "e": "Shrinkage factor सधैं 1 भन्दा कम हुन्छ — नक्सा खुम्चिँदा (shrink) लम्बाई घट्छ: factor = shrunk length ÷ true length < 1। यो 0 वा 1 भन्दा बढी हुन सक्दैन।"
 },
 {
  "q": "Planimeter के नाप्ने यन्त्र हो ?",
  "o": [
   "दुरी",
   "कोण",
   "जमीनको भीरालोपना",
   "क्षेत्रफल"
  ],
  "a": 3,
  "e": "Planimeter क्षेत्रफल (area) नाप्ने यन्त्र हो — दूरी, कोण वा ढलान होइन।"
 },
 {
  "q": "Pantagraph is used for",
  "o": [
   "measuring distances",
   "measuring areas",
   "enlarging or reducing plans",
   "setting out right angles"
  ],
  "a": 2,
  "e": "Pantograph नक्सा/plan लाई enlarge वा reduce गर्न प्रयोग हुन्छ; दूरी/क्षेत्रफल नाप्दैन र right angle (कोण) बनाउन प्रयोग हुँदैन।"
 },
 {
  "q": "Scale distortion नभएको स्थानमा scale factor कति हुन्छ ?",
  "o": [
   "0",
   "1",
   "0.9996",
   "0.9999"
  ],
  "a": 1,
  "e": "Scale factor = 1 भनेको distortion छैन (actual scale = principal scale) — यो standard line/standard parallel मा हुन्छ। UTM को central meridian मा 0.9996 (0.04% सानो)।"
 },
 {
  "q": "UTM projection तलका मध्ये कुन अन्तर्गत पर्दछ ?",
  "o": [
   "Secant",
   "Conformal",
   "Cylindrical",
   "All of above"
  ],
  "a": 3,
  "e": "UTM projection तीनै वर्गमा पर्छ: यो cylindrical (transverse cylinder), secant (दुई standard line मा काट्छ) र conformal (आकार/कोण जोगाउँछ) — त्यसैले 'All of above'।"
 },
 {
  "q": "FINNIDA project ले Lumbini zone को कुन scale को नक्सा तयार गरेको छ ?",
  "o": [
   "1:50000",
   "1:25000",
   "Both",
   "None"
  ],
  "a": 2,
  "e": "FINNIDA project ले Lumbini zone को 1:50,000 र 1:25,000 — दुवै scale का नक्सा तयार गरेको थियो। ⚠️ क्षेत्र-विशिष्ट तथ्य, आफ्नो स्रोतबाट पुष्टि गर्नुहोला।"
 },
 {
  "q": "3⁰ zone अनुसार 87⁰ central meridian भएको zone no. कति हो ?",
  "o": [
   "44",
   "44.5",
   "45",
   "45.5"
  ],
  "a": 3,
  "e": "3° zone system अनुसार central meridian 87°E भएको zone no. 45.5 मानिएको छ (यसै क्रममा 81°E = 44.5, 84°E = 45)। ⚠️ zone numbering को यो conventions लाई Nepal Survey Department को MUTM specification बाट जाँच गर्नुहोला — अन्तर्राष्ट्रिय 3° numbering मा 87° = zone 29 हुन्छ।"
 },
 {
  "q": "Brown density भनेको land use map मा के हो ?",
  "o": [
   "कृषि उत्पादन घटी",
   "कृषि उत्पादन वढी",
   "कृषि उत्पादन नहुद्द",
   "कुनैपनि होईन"
  ],
  "a": 0,
  "e": "Land use map मा 'Brown density' ले कम कृषि उत्पादन (low agricultural productivity) जनाउँछ। ⚠️ यो रंग/घनत्व-संकेत प्रयोग गरिने legend अनुसार फरक पर्न सक्छ — आफ्नो स्रोतबाट जाँच गर्नुहोला।"
 },
 {
  "q": "नेपालमा अपनाइएको ठूलो स्केलको नक्सा सिट संख्यांकन प्रणाली अनुसार एउटा जोनमा कतिवटा मूल ग्रिड वर्गहरु छन् ?",
  "o": [
   "६० वटा",
   "१२० वटा",
   "१८० वटा",
   "२०० वटा"
  ],
  "a": 1,
  "e": "नेपालको ठूलो स्केलको sheet संख्यांकन अनुसार एउटा zone मा 120 वटा मूल grid वर्ग छन् भनिएको छ। ⚠️ यो संख्या Survey Department को sheet-numbering निर्देशिकामा जाँच गर्नुहोला; बाह्य स्रोतबाट प्रमाणित गर्न सकिएन।"
 },
 {
  "q": "Accuracy of elevation of various points obtained from contour map is limited to",
  "o": [
   "1/2 of the contour interval",
   "1/3 rd of the contour interval",
   "1/4 th of the contour interval",
   "1/5 th of the contour interval"
  ],
  "a": 0,
  "e": "Contour map बाट पढिएको उचाईको accuracy सामान्यतया contour interval को आधा (1/2) सम्म सीमित हुन्छ — किनकि दुई contour बीचको उचाई interpolation (अनुमान) गरिन्छ। USGS मापदण्ड: 90% बिन्दु आधा interval भित्र।"
 },
 {
  "q": "UTM projection कुन ellipsoide मा आधारित छ ?",
  "o": [
   "Clark ellipsoid 1866",
   "International ellipsoid 1924",
   "Both",
   "None"
  ],
  "a": 2,
  "e": "UTM projection history: धेरै देशका पुराना UTM नक्सा Clarke 1866 (उत्तर अमेरिका) वा International 1924 ellipsoid मा आधारित छन्; आज WGS84/GRS80 मानक हो। 'Both' भनिएको यसै ऐतिहासिक आधारलाई जनाउँछ। ⚠️ पाठ्यपुस्तक अनुसार जाँच गर्नुहोला।"
 },
 {
  "q": "Point symbol कति dimension को हुन्छ ?",
  "o": [
   "0",
   "1",
   "2",
   "3"
  ],
  "a": 0,
  "e": "Point symbol 0-dimension को हुन्छ — यसले एउटा स्थान मात्र जनाउँछ (लम्बाई/चौडाई छैन): जस्तै survey station, चर्च। Line symbol = 1D (सडक, नदी), area symbol = 2D (ताल, जंगल)।"
 },
 {
  "q": "3⁰ zone बमोजिम 44.5 नं. zone पूर्व पश्चिममा कति क्षेत्रमा फैलिएको छ ?",
  "o": [
   "79⁰30' - 82⁰30'",
   "81⁰ - 84⁰",
   "82⁰30' - 85⁰30'",
   "84⁰ - 87⁰"
  ],
  "a": 0,
  "e": "3° zone system अनुसार zone 44.5 ले 79°30′ देखि 82°30′ सम्म (central meridian 81°E) ओगट्छ — नेपालको पश्चिमी zone। ⚠️ zone numbering को convention आफ्नो स्रोतबाट जाँच गर्नुहोला।"
 },
 {
  "q": "3⁰ को zone अनुसार सबै भन्दा पूर्वको zone no. कति हुन्छ ?",
  "o": [
   "60",
   "60.5",
   "120",
   "180"
  ],
  "a": 0,
  "e": "3° zone अनुसार सबैभन्दा पूर्वको zone no. 60 मानिएको छ। ⚠️ 3° zone ले 360° लाई 120 भागमा बाँड्छ, त्यसैले अन्तर्राष्ट्रिय numbering मा अन्तिम zone 120 हुन्छ — यो key Nepal/MUTM को half-integer convention (0.5 … 60.5) मा आधारित देखिन्छ। आफ्नो स्रोतबाट जाँच गर्नुहोला।"
 },
 {
  "q": "सडकको L-section भन्नाले के बुझिन्छ ?",
  "o": [
   "सडकको लम्बाई तर्फको सेक्शन",
   "सडकको चौडाई तर्फको सेक्शन",
   "सडकको मोटाई तर्फको सेक्शन",
   "सडकको गोलाई तर्फको सेक्शन"
  ],
  "a": 0,
  "e": "L-section (longitudinal section) = सडक/नहरको लम्बाई तर्फ (along the alignment) को section — जसमा ground profile र formation level देखाइन्छ। चौडाई तर्फको section लाई cross-section भनिन्छ।"
 },
 {
  "q": "A series of closely spaced contour lines represents a",
  "o": [
   "Steep slope",
   "Gentle slope",
   "Uniform slope",
   "Plane surface"
  ],
  "a": 0,
  "e": "Closely spaced contours = steep slope; widely spaced = gentle; equally spaced = uniform slope। दूरी नै ढलानको सूचक हो (horizontal equivalent)।"
 },
 {
  "q": "Scale 1 inch = 1 mile मा R.F. कति हुन्छ ?",
  "o": [
   "1:33660",
   "1:66330",
   "1:36360",
   "1:63360"
  ],
  "a": 3,
  "e": "1 mile = 63,360 inches, त्यसैले 1 inch = 1 mile को RF = 1:63,360। (1 mile = 5280 ft = 63,360 inch।)"
 },
 {
  "q": "Ellipsoid भन्दा Geoid माथि भएमा N value के हुन्छ ?",
  "o": [
   "Positive",
   "Negative",
   "Constant",
   "Any one"
  ],
  "a": 0,
  "e": "N (geoid–ellipsoid separation / geoidal undulation) = geoid को उचाई − ellipsoid को उचाई। Geoid ellipsoid भन्दा माथि भए N positive (धनात्मक), तल भए negative।"
 },
 {
  "q": "UTM projection मा belt 'n' कुन गोलार्धमा पर्दछ ?",
  "o": [
   "उत्तरी गोलार्धमा",
   "दक्षिणी गोलार्धमा",
   "n belt हुँदैन",
   "जुनसुकैमा पर्न सक्छ"
  ],
  "a": 0,
  "e": "UTM latitude belt 'n' (N) उत्तरी गोलार्ध (northern hemisphere) मा पर्छ — belt C–X, जसमा I र O छोडिन्छ; A, B, Y, Z प्रयोग हुँदैन।"
 },
 {
  "q": "Geometric symbol लाई के पनि भनिन्छ ?",
  "o": [
   "Descriptive",
   "Iconic",
   "Abstract",
   "Text"
  ],
  "a": 2,
  "e": "Geometric symbol लाई Abstract symbol पनि भनिन्छ — वृत्त, वर्ग, त्रिकोण जस्ता ज्यामितीय आकार जुन वस्तुसँग मिल्दैन। Iconic (pictorial) symbol भने वस्तु जस्तै देखिने symbol हो (जस्तै रूखको चित्र) — यी फरक परिवार हुन्।"
 },
 {
  "q": "3⁰ का zone हर central meridian बाट कति पश्चिम पूर्व फैलिएका हुन्छन् ?",
  "o": [
   "50km west - 50km east",
   "100km west - 100km east",
   "150km west - 150km east",
   "200km west - 200km east"
  ],
  "a": 2,
  "e": "नेपालको अक्षांश (≈ 28°N) मा 3° zone को चौडाई करिब 294 km हुन्छ, त्यसैले central meridian बाट करिब 150 km पश्चिम र 150 km पूर्वसम्म फैलिन्छ (MUTM को false easting 500,000 m सँग मिल्दोजुल्दो)।"
 },
 {
  "q": "तलका मध्ये कुन projection मा longitude र latitude एक आपसमा 90⁰ मा intersect भएका हुन्छन् ?",
  "o": [
   "Cylindrical",
   "Conical",
   "Azimuthal",
   "All of above"
  ],
  "a": 0,
  "e": "Cylindrical projection मा meridians र parallels सिधा रेखा भएर एकआपसमा 90° मा काट्छन् (जस्तै Mercator)। Conical मा parallels वृत्त-चाप, azimuthal मा केन्द्रबाट फैलिने रेखा।"
 },
 {
  "q": "On a diagonal scale, it is possible to read up to",
  "o": [
   "One dimension",
   "Two dimensions",
   "Three dimensions",
   "Four dimensions"
  ],
  "a": 2,
  "e": "Diagonal scale ले तीन dimension/एकाइ (जस्तै m, dm, cm) सम्म पढ्न सकिन्छ — plain scale ले दुई। यसैले 'three dimensions'।"
 },
 {
  "q": "Closed contours, with higher value inwards, represent a",
  "o": [
   "Depression",
   "Hillock",
   "Plain surface",
   "None of the above"
  ],
  "a": 1,
  "e": "Closed contours मा higher value भित्र भए hillock (हिल/टाकुरा); higher value बाहिर भए depression। यो 'Reading the values inward' नियम हो।"
 },
 {
  "q": "टोपो नक्सामा हिम नदीलाई कुन रंगमा देखाइन्छ ?",
  "o": [
   "सेतो",
   "निलो",
   "कालो",
   "हरियो"
  ],
  "a": 1,
  "e": "टोपो नक्सामा हिम नदी (glacier/snow-fed river) लाई नीलो (blue) रंगले देखाइन्छ — सबै जल-सम्बन्धी विवरण नीलो नै हुन्छ। ⚠️ legend अनुसार जाँच गर्नुहोला।"
 },
 {
  "q": "यदि नक्सामा 2 cm र जमिनमा ४५० मी. छ भने ?",
  "o": [
   "1:450000",
   "1:450",
   "1:225000",
   "1:22500"
  ],
  "a": 3,
  "e": "Scale = 2 cm ÷ 450 m = 2 cm ÷ 45,000 cm = 1:22,500।"
 },
 {
  "q": "The best method of interpolation of contours, is by",
  "o": [
   "Estimation",
   "Graphical means",
   "Computation",
   "All of these"
  ],
  "a": 2,
  "e": "Interpolation को सबैभन्दा accurate तरिका computation (arithmetic calculation) हो; graphical method सबैभन्दा rapid; estimation (आँखाले) सबैभन्दा rough।"
 },
 {
  "q": "पिलकोट के का लागि प्रयोग गरिन्छ ?",
  "o": [
   "Area symbol का लागि",
   "Point symbol का लागि",
   "line symbol का लागि",
   "प्रयोग नै गरिदैन"
  ],
  "a": 1,
  "e": "पिलकोट (Pilcot) point symbol को लागि प्रयोग हुने सानो चिन्ह हो — नक्सामा बिन्दुगत विवरण (जस्तै स्तम्भ, रूख) देखाउन।"
 },
 {
  "q": "Cartography तथा Reproducduction मा भएको error पत्तालगाउन के बनाईन्छ ?",
  "o": [
   "color proof",
   "print",
   "test paper",
   "error हुँदैन"
  ],
  "a": 0,
  "e": "Cartography र reproduction मा रंग/चित्रणको error पत्ता लगाउन color proof बनाइन्छ — छाप्नुअघि यसले रंग, registration र स्पष्टता जाँच गर्छ।"
 },
 {
  "q": "Contours of different elevations may cross each other only in the case of",
  "o": [
   "An overhanging cliff",
   "A vertical cliff",
   "A saddle",
   "An inclined plane"
  ],
  "a": 0,
  "e": "Overhanging cliff मा मात्र फरक उचाईका contours cross गर्छन् (एउटै बिन्दु माथि दुई सतह)। Vertical cliff मा contours coincide (merge) हुन्छन्, cross हुँदैनन्; saddle मा दुई contour समूह नजिक आउँछन् मात्र।"
 },
 {
  "q": "जमिनको १ कि.मी. नक्सामा २ से.मी. भए उक्त नक्साको मान नाप कति हुन्छ ?",
  "o": [
   "1:25,000",
   "1:40,000",
   "1:50,000",
   "1:100,000"
  ],
  "a": 2,
  "e": "Scale = 2 cm ÷ 1 km = 2 cm ÷ 100,000 cm = 1:50,000। (Q107 को दोहोरो।)"
 },
 {
  "q": "कुन स्केल सबै भन्दा सानो छ ?",
  "o": [
   "1:5000",
   "1:10000",
   "1:25000",
   "1:50000"
  ],
  "a": 3,
  "e": "Denominator जति ठूलो, scale त्यति सानो: 1:50,000 सबैभन्दा सानो (1 cm = 500 m)।"
 },
 {
  "q": "1:500 scale को नक्सामा Nepal Media institute Banepa Municipality office बाट 25 cm छ भने जमिनमा कति होला ?",
  "o": [
   "25m",
   "125m",
   "250m",
   "400m"
  ],
  "a": 1,
  "e": "1:500 मा 25 cm = 25 × 500 = 12,500 cm = 125 m।"
 },
 {
  "q": "1:1000 माननापमा Plotting error कति हुन्छ ?",
  "o": [
   "25mm",
   "12.5cm",
   "25cm",
   "62.5cm"
  ],
  "a": 2,
  "e": "Plotting error (optimum plotting precision) = scale denominator × 0.25 mm (कागजमा छुट्याउन सकिने न्यूनतम दूरी)। 1:1000 को लागि 1000 × 0.25 mm = 250 mm = 25 cm। मूल key 12.5 cm ले 0.125 mm मान्दछ, जुन यसै नक्सा-समूहका Q38, Q42, Q77 (सबैले 0.25 mm) सँग मेल खाँदैन।"
 },
 {
  "q": "नेपालमा कुन Projection System अपनाएको छ ?",
  "o": [
   "Modern Universal Transverse Mercator",
   "Modified Universal Transverse Mercator",
   "Universal Transverse Mercator",
   "Transverse Mercator"
  ],
  "a": 1,
  "e": "नेपालले Modified Universal Transverse Mercator (MUTM) projection अपनाएको छ — 3° का तीन zone (81°E, 84°E, 87°E), central meridian मा scale factor 0.9999, secant transverse Mercator।"
 },
 {
  "q": "१:२५००० को नक्सालाई १:२५००० को स्केलमा परिणत गर्दा कति % enlargement हुन्छ ?",
  "o": [
   "100%",
   "101%",
   "200%",
   "50%"
  ],
  "a": 0,
  "e": "यहाँ scale उही (1:25,000 → 1:25,000) भएकाले परिवर्तन हुँदैन — 100% (no enlargement)। ⚠️ स्टेममा टाइपो हुन सक्छ (जस्तै 1:50,000 → 1:25,000 भए 200% हुन्थ्यो, Q87/Q213 हेर्नुहोस्)।"
 },
 {
  "q": "यदि old map को scale 1:2400 छ र shrinkage factor बराबर 24/25 भए true scale कति होला ?",
  "o": [
   "1:2400",
   "1:2500",
   "1:2425",
   "All"
  ],
  "a": 1,
  "e": "Shrunk (true) scale = shrinkage factor × original scale = (24/25) × (1/2400) = 1/2500। खुम्चिएपछि नक्साको 1 cm ले बढी जमिन (25 m को सट्टा करिब 25 m+) जनाउँछ, त्यसैले denominator बढ्छ।"
 },
 {
  "q": "कुनै एउटा नक्सामा contour interval.....",
  "o": [
   "Fixed हुन्छ",
   "Terrain अनुसार घटीबढी हुन्छ",
   "Height अनुसार बढाउँदै लगिन्छ",
   "Plane मा कम र slope मा बढी हुन्छ"
  ],
  "a": 0,
  "e": "एउटा नक्सामा contour interval सामान्यतया fixed (constant) राखिन्छ — नत्र नक्सा पढ्न अप्ठ्यारो हुन्छ। तर विशेष परिस्थितिमा (भीरालो पहाड) variable interval पनि अपनाइन्छ।"
 },
 {
  "q": "Ellipsoid लाई के ले define गरिन्छ ?",
  "o": [
   "Semi major axis",
   "Semi minor axis",
   "flatting",
   "all the above"
  ],
  "a": 3,
  "e": "Ellipsoid लाई semi-major axis (a), semi-minor axis (b) र flattening f = (a−b)/a — तीनैले परिभाषित गर्छन् (दुई मात्र स्वतन्त्र)।"
 },
 {
  "q": "कुन कथन ठीक छ ?",
  "o": [
   "Symbol सकेसम्म सरल, स्पष्ट र सानो हुनु पर्दछ।",
   "Symbol जहिले पनि रंगीन (coloured) हुनै पर्दछ।",
   "Symbol सकेसम्म self explanatory हुनु पर्दछ।",
   "माथिका सबै कथन ठिक छन्।"
  ],
  "a": 2,
  "e": "राम्रो symbol को गुण: सरल, स्पष्ट, सानो र self-explanatory (legend बिना नै बुझिने)। 'जहिले पनि रंगीन हुनै पर्दछ' गलत हो — धेरै नक्सा single-colour मा बनाइन्छ। मूल अंकमा (a) मा 'हुनु हुँदैन' (दोहोरो नकार) र (b) मा 'real feature सँग मिल्दो' थियो — दुवै सही ठहरिने भएकाले प्रश्नका दुई उत्तर बन्थे; (b) लाई स्पष्ट रूपमा गलत बनाइएको।"
 },
 {
  "q": "Profile plotted गर्दा vertical scale 1:100 भए horizontal scale कती हुन्छ ?",
  "o": [
   "1:10",
   "1:100",
   "1:1000",
   "1:10000"
  ],
  "a": 2,
  "e": "Profile/L-section मा vertical scale horizontal भन्दा 10 गुणा ठूलो: vertical 1:100 भए horizontal = 1:1000।"
 },
 {
  "q": "The area of any irregular figure can be determined accurate with a",
  "o": [
   "Planimeter",
   "Computing scale",
   "Opisometer",
   "both (a) & (c)"
  ],
  "a": 0,
  "e": "Irregular figure को क्षेत्रफल Planimeter बाट नापिन्छ। ('Platometer' भनिएको विकल्प 'Planimeter' कै पुरानो पर्याय भएकाले (d) 'both' पनि सही ठहरिन्थ्यो — प्रश्नका दुई उत्तर हुन नदिन Opisometer (नक्सामा रेखाको लम्बाई नाप्ने यन्त्र) राखिएको।)"
 },
 {
  "q": "If the contour lines are equally spaced, they indicate",
  "o": [
   "uniform slope",
   "plane surface",
   "gentle slope",
   "All"
  ],
  "a": 0,
  "e": "Equally spaced contours = uniform slope (ढलान एकनास)। नजिक-नजिक = steep, टाढा-टाढा = gentle।"
 },
 {
  "q": "नक्सामा जहिले पनी linear symbol हुने संकेत चिन्ह कुन हो ?",
  "o": [
   "River",
   "Contour line",
   "Road",
   "All the above"
  ],
  "a": 1,
  "e": "Contour line सधैं linear (line) symbol नै हुन्छ — यो लामो रेखा हो, point वा area होइन। River/road scale अनुसार line वा area दुवै हुन सक्छन्। (Q72 को दोहोरो।)"
 },
 {
  "q": "6⁰ Zone को लागि scale factor कति हुन्छ ?",
  "o": [
   "0.999",
   "0.9996",
   "0.9999",
   "0.996"
  ],
  "a": 1,
  "e": "6° UTM zone को central meridian मा scale factor 0.9996 हुन्छ — अर्थात् central meridian मा नक्सा वास्तविक भन्दा 0.04% सानो। नेपालको MUTM (3°) मा 0.9999।"
 },
 {
  "q": "Horizontal distance between two contour lines is called",
  "o": [
   "Contour interval",
   "Horizontal equivalent",
   "Horizontal distance",
   "Distance equivalent"
  ],
  "a": 1,
  "e": "Horizontal equivalent = दुई contour बीचको तेर्सो (horizontal) दूरी — यो ढलान अनुसार बदलिन्छ (भीरालोमा कम, सम्ममा बढी)। Contour interval = ठाडो दूरी, जुन constant हुन्छ।"
 },
 {
  "q": "Standard method of height representation is",
  "o": [
   "contouring",
   "spot height",
   "layer tinting",
   "all of the above"
  ],
  "a": 3,
  "e": "उचाई देखाउने मानक तरिका तीनै हुन्: contouring (रेखा), spot height (बिन्दुगत मान) र layer tinting (रंग-स्तर)। प्रायः तीनै मिलाएर प्रयोग गरिन्छ।"
 },
 {
  "q": "Elevation or depression in contour map can be identified by",
  "o": [
   "Shape of the contour",
   "Contour value",
   "Distance between contour line",
   "Thickness of the contour line"
  ],
  "a": 1,
  "e": "Elevation (टाकुरा) वा depression (खाल्टो) contour को value (मान) बाट छुट्याइन्छ — भित्रको मान बढी भए hill, बाहिरको मान बढी भए depression। Shape ले मात्र छुट्याउन सकिँदैन।"
 },
 {
  "q": "Contour interval in topographical survey depends upon",
  "o": [
   "Scale of the map",
   "Nature of the ground",
   "Time duration",
   "All"
  ],
  "a": 3,
  "e": "Topographical survey मा contour interval scale, जमिनको बनावट र समय-अवधि (तथा लागत) — सबैमा भर पर्छ, त्यसैले 'All'।"
 },
 {
  "q": "If the side slope is 1:1 than gradient is?",
  "o": [
   "30⁰",
   "45⁰",
   "60⁰",
   "90⁰"
  ],
  "a": 1,
  "e": "Side slope 1:1 = 1 माथि, 1 तेर्सो → tan θ = 1/1 = 1 → θ = 45°।"
 },
 {
  "q": "Scale 1: 100 means",
  "o": [
   "1 cm on paper 100cm on ground",
   "1 mm on paper 100cm on ground",
   "1 cm on paper 100m on ground",
   "1 mm on paper 100km on ground"
  ],
  "a": 0,
  "e": "Scale 1:100 = नक्साको 1 unit जमिनको 100 unit (एउटै एकाइ) — जस्तै 1 cm = 100 cm = 1 m। (1 mm = 100 cm वा 1 cm = 100 m होइन।)"
 },
 {
  "q": "Which of the following methods of con-touring is most suitable for a hilly terrain?",
  "o": [
   "direct method",
   "square method",
   "cross-sections method",
   "tacheometric method"
  ],
  "a": 3,
  "e": "Hilly terrain को लागि tacheometric method (indirect) सबैभन्दा उपयुक्त — एकै station बाट धेरै बिन्दुको distance + elevation पाइन्छ, जहाँ chaining कठिन हुन्छ। Direct method accurate भए पनि ढिलो/महँगो र hilly terrain का लागि अनुपयुक्त (Q137); square method सम्म भू-भागको, cross-section route survey को लागि।"
 },
 {
  "q": "कित्तानापी नक्सामा घरलाई कुन symbol मा देखाइन्छ ?",
  "o": [
   "Point",
   "Line",
   "Area",
   "Pictorial"
  ],
  "a": 2,
  "e": "कित्तानापी नक्सा (1:500/1:1000) मा घरको वास्तविक आकार नै देखिने भएकाले यसलाई area symbol (polygon) ले देखाइन्छ। सानो scale मा भने point symbol।"
 },
 {
  "q": "१:२५,००० को नक्सालाई १:२५,००० को नक्सामा परिणत गर्दा कति प्रतिशत enlargement हुन्छ ?",
  "o": [
   "२५%",
   "५००%",
   "२०%",
   "१०० %"
  ],
  "a": 3,
  "e": "Scale नबदलिँदा (1:25,000 → 1:25,000) कुनै enlargement हुँदैन — 100%। ⚠️ स्टेममा टाइपो हुन सक्छ; Q173 र Q87/Q213 हेर्नुहोस्।"
 },
 {
  "q": "Angular distance from the Earth's center measured northerly and southerly from the equatorial plane is called",
  "o": [
   "Northing",
   "Nadir angle",
   "Geographical latitude",
   "Geographical longitude"
  ],
  "a": 2,
  "e": "Geographical latitude = पृथ्वीको केन्द्रबाट equatorial plane (विषुवत रेखाको समतल) बाट उत्तर/दक्षिणतिर नापिएको कोणीय दूरी (0°–90°)। Longitude = prime meridian बाट पूर्व/पश्चिम।"
 },
 {
  "q": "ग्रिनवीच र नेपालको समयमा कति घण्टाको फरक छ ?",
  "o": [
   "५ घण्टा ४५ मिनेट",
   "३४५ मिनेट",
   "२०,७०० सेकेन्ड",
   "माथिका सबै"
  ],
  "a": 3,
  "e": "नेपालको समय GMT + 5:45: 5 h 45 min = 345 min = 5×3600 + 45×60 = 20,700 seconds। मूल विकल्प (c) मा 20,900 सेकेन्ड लेखिएको थियो (5:48:20 बराबर) — गलत भएकाले 'माथिका सबै' पनि गलत बन्थ्यो; टाइपो सुधार गरिएको।"
 },
 {
  "q": "स्थलरुप नक्सामा सुति खेती गरिएको जग्गा कस्तो रंगमा देखाइन्छ ?",
  "o": [
   "Red",
   "Yellow",
   "Blue",
   "Green"
  ],
  "a": 3,
  "e": "स्थलरुप (topo) नक्सामा खेती गरिएको जमिन हरियो (green) रंगले देखाइन्छ। ⚠️ 'सुक्खा खेती/सुकि खेती' र रातो-पहेंलो-हरियो विभाजन Survey Department को legend अनुसार जाँच गर्नुहोला।"
 },
 {
  "q": "कुनै transparent material मा बनेको positive image लाई के भनिन्छ ?",
  "o": [
   "Negative",
   "Positive",
   "Diapositive",
   "Tint"
  ],
  "a": 2,
  "e": "Transparent material मा बनेको positive image लाई Diapositive भनिन्छ (जस्तै slide)। मूल विकल्प (c) 'Dispositive' टाइपो थियो र key 'Positive' राखिएको थियो — त्यसले यसै नक्सा-समूहको Q222 (key = Diapositive) सँग विरोधाभास गर्थ्यो। सुधार पछि दुवै item मिल्दोजुल्दो छन् (Q222 को दोहोरो)।"
 },
 {
  "q": "नेपालमा प्रयोग गरिएको MUTM कस्तो प्रकारको Projection हो ?",
  "o": [
   "Normal",
   "Tangent",
   "Secant",
   "Oblique"
  ],
  "a": 2,
  "e": "नेपालको MUTM secant projection हो — projection cylinder ले ellipsoid लाई central meridian को दुवैतिर काट्छ (दुई standard line), जसले distortion घटाउँछ।"
 },
 {
  "q": "Dense forest को लागि नक्सामा कुन colour प्रयोग गरिन्छ ?",
  "o": [
   "High contrast of green colour",
   "Low contrast of green colour",
   "Blue",
   "Yello"
  ],
  "a": 1,
  "e": "Dense forest को लागि गाढा/low-contrast green प्रयोग गरिन्छ भनिएको छ। ⚠️ सामान्य प्रचलनमा dense forest = गाढा (dark/high-contrast) green, scattered forest = हल्का green — आफ्नो legend अनुसार जाँच गर्नुहोला।"
 },
 {
  "q": "नक्साको Contour interval",
  "o": [
   "नक्साको scale सँग व्युत्क्रमानुपाती हुन्छ",
   "ground को flatness सँग अनुक्रमानुपाती हुन्छ",
   "accurate works को लागि ठूलो राखिन्छ",
   "समय बढि प्राप्त भएमा ठूलो राखिन्छ"
  ],
  "a": 0,
  "e": "Contour interval नक्साको scale सँग inversely proportional (व्युत्क्रमानुपाती) हुन्छ — ठूलो scale (1:500) मा सानो interval, सानो scale (1:50,000) मा ठूलो interval।"
 },
 {
  "q": "UTM belts को label दिन कुन कुन अक्षर प्रयोग भएका छैनन् ?",
  "o": [
   "a र b",
   "a,b,o र i",
   "a,b,o,i,y र z",
   "कुनै पनि होइन"
  ],
  "a": 2,
  "e": "UTM latitude belt (C–X, 8° चौडा) को label मा I र O छोडिन्छ (अङ्क 1 र 0 सँग भ्रम नहोस्); A, B, Y, Z प्रयोग नै हुँदैन (ध्रुवीय क्षेत्र UPS मा)।"
 },
 {
  "q": "Draw गर्न सब भन्दा सजिलो symbol कुन हो?",
  "o": [
   "Letter",
   "Geometrical",
   "Pictorial",
   "कुनै पनि होइन"
  ],
  "a": 0,
  "e": "Letter symbol (जस्तै 'T' temple, 'R' ruin) कोर्न सबैभन्दा सजिलो हुन्छ — Pictorial symbol कोर्न सबैभन्दा गाह्रो (विवरण धेरै), Geometric मध्यम।"
 },
 {
  "q": "Detail को shape र size मा certain modification गरी त्यसको positional shift लाई समेत accept गरी detail लाई map मा दर्शाउने कार्यलाई के भनिन्छ ?",
  "o": [
   "detail identification",
   "Generalization",
   "detail interpretation",
   "माथिका सबै"
  ],
  "a": 1,
  "e": "Generalization = detail को shape/size परिमार्जन गरी, आवश्यक भए positional shift समेत स्वीकारेर नक्सामा देखाउने प्रक्रिया — सानो scale मा legibility कायम राख्न। यसमा simplify, exaggerate, displace, merge पर्छन्।"
 },
 {
  "q": "Grid system मा Northing कहाँ बाट नापिन्छ?",
  "o": [
   "Central meridian बाट",
   "Central latitude बाट",
   "Greenwitch line बाट",
   "Equator बाट"
  ],
  "a": 3,
  "e": "Grid system (UTM/MUTM) मा Northing equator (0 m) बाट उत्तरतिर नापिन्छ; southern hemisphere मा false northing 10,000,000 m राखिन्छ। Easting central meridian बाट (false easting 500,000 m)।"
 },
 {
  "q": "१:१ माननाप कुन प्रकारको माननाप हो ?",
  "o": [
   "Full size scale",
   "Reducing scale",
   "Enlarging scale",
   "सबै"
  ],
  "a": 0,
  "e": "1:1 = full size scale (नक्सा र जमिन बराबर)। Reducing scale मा denominator > 1 (जस्तै 1:500), enlarging scale मा numerator > denominator (जस्तै 2:1)।"
 },
 {
  "q": "Pocket stereoscoope मा कस्तो lens प्रयोग गरिन्छ ?",
  "o": [
   "concave",
   "convex",
   "mirror",
   "सबै"
  ],
  "a": 1,
  "e": "Pocket stereoscope मा convex lens प्रयोग हुन्छ — दुई overlapping aerial photo लाई convex lens बाट हेर्दा त्रि-आयामिक (3D) stereoscopic model देखिन्छ।"
 },
 {
  "q": "कुनै निश्चित वर्ग एवं निश्चित उद्देश्यका लागि बनाइएका नक्साहरुलाई के भनिन्छ ?",
  "o": [
   "Reference map",
   "Thematic map",
   "Special purpose map",
   "General purpose map"
  ],
  "a": 2,
  "e": "निश्चित वर्ग (class of user) र निश्चित उद्देश्यका लागि बनाइएका नक्सा = Special purpose map। ⚠️ ध्यान दिनुहोस्: thematic map पनि 'एउटा विषयका लागि' बनाइन्छ (Q135, Q106) — यदि पाठ्यपुस्तकले 'thematic' लाई नै special-purpose मान्छ भने यो item अस्पष्ट बन्छ; आफ्नो स्रोत अनुसार मिलाउनुहोला।"
 },
 {
  "q": "नेपालमा Trig system मा नापी भएका कित्ता नापी नक्साहरुमा neat line के राखिएको छ ?",
  "o": [
   "Grid line",
   "Graticule line",
   "Both",
   "None"
  ],
  "a": 1,
  "e": "नेपालमा Trig system मा नापी भएका कित्तानापी नक्सामा neat line को रूपमा graticule line राखिएको थियो (grid system आउनुअघि)। ⚠️ ऐतिहासिक अभ्यास — आफ्नो स्रोतबाट जाँच गर्नुहोला।"
 },
 {
  "q": "एमोनिया पेपरमा कुन लेप लगाइएको हुन्छ ?",
  "o": [
   "Diazzo",
   "Bromine",
   "iodine",
   "chlorine"
  ],
  "a": 0,
  "e": "Ammonia paper (diazo/whiteprint) मा diazo coating लगाइएको हुन्छ — UV exposure पछि ammonia vapour ले develop गर्छ, त्यसैले नाम 'ammonia print'।"
 },
 {
  "q": "Point symbol कति dimension कति हुन्छ ?",
  "o": [
   "0",
   "1",
   "2",
   "3"
  ],
  "a": 0,
  "e": "Point symbol 0-dimension को हुन्छ — एउटा स्थान मात्र (लम्बाई/चौडाई छैन): station, चर्च। Line = 1D, Area = 2D। (Q149 को दोहोरो।)"
 },
 {
  "q": "नक्सामा प्रयोग हुने अक्षरहरुको height लाई के भनिन्छ ?",
  "o": [
   "P - height",
   "q - height",
   "x - height",
   "y - height"
  ],
  "a": 2,
  "e": "नक्सामा प्रयोग हुने साना अक्षर (lowercase) को height लाई x-height भनिन्छ — 'x' अक्षरको उचाईलाई आधार मानेर lettering को साइज मापन गरिन्छ।"
 },
 {
  "q": "Exaggeration गरेर देखाउने symbol कुन हो ?",
  "o": [
   "बाटो",
   "घर",
   "मन्दिर",
   "कन्दुर"
  ],
  "a": 0,
  "e": "Exaggeration = साँघुरो/सानो feature लाई नक्सामा वास्तविकभन्दा ठूलो देखाउने generalization operator — बाटो (road) यसको उदाहरण हो: 1:25,000 मा 5 m चौडा बाटो 0.2 mm मात्र हुन्छ, त्यसैले देखिने गरी बाक्लो कोरिन्छ। ⚠️ घर/मन्दिर पनि सानो scale मा enlarged हुन सक्छन् — आफ्नो पाठ्यपुस्तक जाँच गर्नुहोला; contour भने exaggerate हुँदैन (यो interpolate हुन्छ)।"
 },
 {
  "q": "कुनै वस्तु धेरै टाढा छ तर नक्सामा नलिई नहुने भएमा सो वस्तुलाई नक्सामा देखाउन कुन विधि अपनाइन्छ ?",
  "o": [
   "Resection",
   "Intersection",
   "Trueness",
   "Radiation"
  ],
  "a": 1,
  "e": "धेरै टाढा/पुग्न नसकिने वस्तु (जस्तै टावर, चुचुरो) लाई नक्सामा देखाउन Intersection method प्रयोग गरिन्छ — दुई known station बाट direction लिएर काटिन्छ। Radiation नजिकको वस्तुको, Resection instrument station को स्थान निकाल्न।"
 },
 {
  "q": "एउटा नक्सासंग बढिमा कतिवटा सम्म नक्सा जोड्न सकिन्छ ?",
  "o": [
   "चार वटा",
   "छ वटा",
   "आठ वटा",
   "नौ वटा"
  ],
  "a": 3,
  "e": "एउटा नक्सासँग बढीमा 9 वटा नक्सा जोड्न सकिन्छ भनिएको छ (मूल नक्सा सहित 3×3 ग्रिड; छिमेकी 8)। ⚠️ यदि प्रश्नले 'छिमेकी' मात्र सोध्छ भने उत्तर 8 हुन्छ — आफ्नो स्रोत अनुसार मिलाउनुहोला।"
 },
 {
  "q": "1:2500 को map लाई 1:10,000 को map मा परिवर्तन गर्न कति % enlarge वा redacted गरिन्छ ?",
  "o": [
   "25% enlarge",
   "25% reduction",
   "200% enlarge",
   "400% enlarge"
  ],
  "a": 1,
  "e": "1:2,500 बाट 1:10,000 मा जाँदा linear dimension 1/4 (25%) हुन्छ — त्यसैले 25% reduction (नक्सा original को चौथाई)।"
 },
 {
  "q": "Grid sheet numbering अनुसार एउटा ग्रिड सिटबाट कति part मा वर्गीकरण गरिएको हुन्छ ?",
  "o": [
   "1000",
   "2000",
   "1600",
   "1200"
  ],
  "a": 3,
  "e": "Grid sheet numbering अनुसार एउटा grid sheet लाई 1200 part मा वर्गीकृत गरिएको हुन्छ भनिएको छ। ⚠️ यो संख्या Survey Department को sheet-numbering निर्देशिकामा जाँच गर्नुहोला; बाह्य स्रोतबाट प्रमाणित गर्न सकिएन।"
 },
 {
  "q": "MUTM को accuracy कति हुन्छ ?",
  "o": [
   "1:2500",
   "1:5000",
   "1:10,000",
   "1:25000"
  ],
  "a": 2,
  "e": "MUTM को accuracy 1:10,000 (1 part in 10,000) मानिएको छ। ⚠️ यो मान Survey Department को specification बाट जाँच गर्नुहोला (Q225 मा UTM को लागि पनि 1:10,000 दिइएको छ)।"
 },
 {
  "q": "नेपालमा 1 इन्च = 8 माइलका कतिवटा नक्सा छन् ?",
  "o": [
   "2",
   "60",
   "180",
   "266"
  ],
  "a": 0,
  "e": "नेपालमा 1 inch = 8 mile scale का 2 वटा नक्सा छन् भनिएको छ। ⚠️ ऐतिहासिक/क्षेत्र-विशिष्ट तथ्य — आफ्नो स्रोतबाट जाँच गर्नुहोला।"
 },
 {
  "q": "तलका मध्ये कुन अमिल्दो छ ?",
  "o": [
   "Planimeter",
   "Pantograph",
   "Computing scale",
   "Grid tile"
  ],
  "a": 3,
  "e": "Planimeter, Pantograph र Computing scale — तीनै नापी/नक्साङ्कनका यन्त्र हुन्; Grid tile (grid square को टुक्रा) यन्त्र होइन, त्यसैले अमिल्दो।"
 },
 {
  "q": "जमिनमा भएका सबै किसिमका विषयवस्तुहरुलाई देखाएर बनाएको नक्सालाई के भनिन्छ ?",
  "o": [
   "Thematic map",
   "Reference map",
   "Hazard map",
   "Soil map"
  ],
  "a": 1,
  "e": "जमिनमा भएका सबै प्रकारका विषयवस्तु देखाउने नक्सा = Reference (general purpose) map — यो 'सामान्य सन्दर्भ' नक्सा हो। Thematic map ले एउटा मात्र विषय देखाउँछ। ⚠️ मूल अंकमा (a) 'General purpose map' र (d) 'Both A & B' दुवै सही ठहरिन्थे (reference map = general purpose map) — प्रश्नका दुई उत्तर हुन नदिन विकल्प पुनर्लेखन गरिएको।"
 },
 {
  "q": "नक्सामा तलका मध्ये कुन विवरण Metadata अन्तर्गत पर्दछ ?",
  "o": [
   "Grid value",
   "Graticule value",
   "Symbol",
   "Legend"
  ],
  "a": 1,
  "e": "Metadata अन्तर्गत नक्साको बारेमा जानकारी पर्छ — graticule value, projection, datum, source, accuracy। Symbol र legend भने नक्सा पढ्ने साधन हुन्, metadata होइन।"
 },
 {
  "q": "चारै तिर घुम्न सक्ने निव प्रयोग गरिएको graver लाई के भनिन्छ ?",
  "o": [
   "Pen type graver",
   "Rigid graver",
   "Swivel graver",
   "Special graver"
  ],
  "a": 2,
  "e": "चारै तिर घुम्न सक्ने nib भएको graver लाई Swivel graver भनिन्छ — यसले घुमाउरो/वक्र रेखा (contour, नदी) सजिलै कोर्न सकिन्छ। Rigid graver सिधा रेखाको लागि।"
 },
 {
  "q": "तलका मध्ये कुन quantitative symbol अन्तर्गत पर्दछ ?",
  "o": [
   "Tree",
   "House",
   "School",
   "Population"
  ],
  "a": 3,
  "e": "Quantitative symbol ले मात्रा/संख्या जनाउँछ — जनसंख्या (population) यसको उदाहरण (proportional circle/graduated symbol)। Tree, House, School = qualitative (के हो भन्ने मात्र)।"
 },
 {
  "q": "Transparent material मा बनेको positive image लाई के भनिन्छ ?",
  "o": [
   "Tone",
   "Tint",
   "Mirror reversed image",
   "Diapositive"
  ],
  "a": 3,
  "e": "Transparent material मा बनेको positive image लाई Diapositive भनिन्छ (slide) — यो projection/photointerpretation मा प्रयोग हुन्छ।"
 },
 {
  "q": "1:2500 को स्केल भएको नक्सालाई 1:500 को स्केलमा लैजाँदा कति सिट हुन्छन् ?",
  "o": [
   "5 वटा",
   "25 वटा",
   "50 वटा",
   "100 वटा"
  ],
  "a": 1,
  "e": "1:2,500 बाट 1:500 मा जाँदा linear ratio = 2500 ÷ 500 = 5 → sheet संख्या = 5 × 5 = 25।"
 },
 {
  "q": "1:25000 को Topo-map मा power line लाई .......... संकेतले देखाइन्छ ?",
  "o": [
   "Point",
   "Line",
   "Area",
   "Point line symbol"
  ],
  "a": 1,
  "e": "1:25,000 को topo map मा power line लाई line symbol (रेखा) ले देखाइन्छ — यो लामो linear feature हो (टावर मात्र point symbol)।"
 },
 {
  "q": "UTM को accuracy कति हुन्छ ?",
  "o": [
   "1:2500",
   "1:5000",
   "1:10,000",
   "1:25,000"
  ],
  "a": 2,
  "e": "UTM projection को accuracy 1:10,000 (1 part in 10,000) मानिएको छ। ⚠️ MUTM को लागि पनि यही मान দিইएको छ (Q215) — दुई मान Survey Department को specification बाट जाँच गर्नुहोला।"
 },
 {
  "q": "Pantograph बाट original map को कस्तो copy तयार गर्न सकिन्छ ?",
  "o": [
   "Same-scale copy",
   "Enlarge copy",
   "Reduced copy",
   "All"
  ],
  "a": 3,
  "e": "Pantograph ले original लाई same scale, enlarged र reduced — तीनै तरिकाले उतार्न सक्छ, त्यसैले 'All'। मूल विकल्प (a) 'Reverse copy' थियो, जुन pantograph को कार्य होइन (Q73 मा यसैलाई 'बनाउन सकिँदैन' भनिएको छ) — दुई item बीचको विरोध हटाइएको।"
 },
 {
  "q": "तलको मध्ये कुन अमिल्दो छ ?",
  "o": [
   "Cadastral map",
   "Topo map",
   "Engineering map",
   "Thematic map"
  ],
  "a": 3,
  "e": "Cadastral, Topo र Engineering map — तीनै ठूलो scale का, विस्तृत field survey मा आधारित नक्सा हुन्। Thematic map एउटा विषय-विशेषको हुन्छ र सानो scale मा पनि बनाइन्छ — त्यसैले अमिल्दो।"
 },
 {
  "q": "Map body वरिपरी रहेको grid वा graticule line लाई के भनिन्छ ?",
  "o": [
   "Clipping line",
   "Boarder line",
   "Frame line",
   "Marginal line"
  ],
  "a": 2,
  "e": "Map body (neat line) वरिपरी grid/graticule value सहितको रेखा = Frame line। Neat line ले map body घेर्छ, frame line त्यसबाहिर coordinate value देखाउँछ, त्यसभन्दा बाहिर margin।"
 },
 {
  "q": "Map बनाउँदा के बाट बनेको base material मा high dimensional stability हुन्छ ?",
  "o": [
   "Paper",
   "Plastic",
   "Cloth",
   "All"
  ],
  "a": 1,
  "e": "Plastic (polyester film / Mylar) मा dimensional stability सबैभन्दा बढी हुन्छ — तापक्रम/आर्द्रता ले खुम्चिँदैन, त्यसैले base map र सटीक नक्सा plastic मा बनाइन्छ। Paper खुम्चिन्छ, cloth कम स्थिर।"
 },
 {
  "q": "तलका मध्ये कुन symbol मा positional accuracy बढी हुन्छ ?",
  "o": [
   "Pictorial symbol",
   "Geometrical symbol",
   "Letter symbol",
   "Number symbol"
  ],
  "a": 1,
  "e": "Geometrical symbol मा positional accuracy बढी हुन्छ — यसको केन्द्र (centroid) निश्चित हुन्छ; Pictorial/letter symbol को आकार अनियमित हुन्छ र बिन्दुको exact position कमजोर हुन्छ।"
 },
 {
  "q": "UTM Projection मा southern hemisphere को लागि false northing कति मानिएको छ ?",
  "o": [
   "0m",
   "5,00,000m",
   "10,00,000m",
   "None"
  ],
  "a": 2,
  "e": "Southern hemisphere मा northing ऋणात्मक हुन नदिन false northing = 10,000,000 m राखिन्छ (equator मा 10,000 km)। Northern hemisphere मा false northing 0 m।"
 },
 {
  "q": "Planimeter के कार्यमा प्रयोग हुन्छ ?",
  "o": [
   "Plan तयार गर्न",
   "Area निकाल्न",
   "नक्सा enlarge गर्न",
   "Distance नाप्न"
  ],
  "a": 1,
  "e": "Planimeter को काम नक्सामा कोरिएको आकृतिको क्षेत्रफल (area) निकाल्नु हो — plan बनाउने, enlarge गर्ने वा दूरी नाप्ने होइन।"
 },
 {
  "q": "The shrinkage factor of an old map is 24/25 and the R.F. is 1/2400, then the corrected scale for the map is",
  "o": [
   "1/2500",
   "1/2400",
   "1/600",
   "1/60,000"
  ],
  "a": 0,
  "e": "Corrected (shrunk) scale = shrinkage factor × original scale = (24/25) × (1/2400) = 1/2500। खुम्चिएको नक्साको 1 cm ले बढी जमिन जनाउँछ। (यो Q174 सँग मिल्दो छ; Unit 'Introduction of Surveying' को Q21 मा यही गणना गलत key सँग थियो — त्यहाँ key 1/2500 मा सुधार गरिएको छ।)"
 },
 {
  "q": "If the shrinkage factor is equal to 15/16 and if original scale is 1/1500 then the shrinkage scale is",
  "o": [
   "1/1500",
   "1/1600",
   "both a & b",
   "none"
  ],
  "a": 1,
  "e": "Shrinkage scale = shrinkage factor × original scale = (15/16) × (1/1500) = 1/1600।"
 },
 {
  "q": "The distance between two points A & B on a plan was found to be 100 m when measured with a scale with R.F. of 1/1000. The distance between the same points when measured with a scale with R.F. of 1/500 will be",
  "o": [
   "200m",
   "50m",
   "2500m",
   "none of the above"
  ],
  "a": 1,
  "e": "Plan distance स्थिर: 100 m × (1/1000) = 0.1 m = 10 cm; RF 1/500 मा ground distance = 10 cm × 500 = 5000 cm = 50 m। ⚠️ मूल स्टेममा '1/100' थियो — त्यस अनुसार 100 m × 1/100 = 1 m plan, र 1 m × 500 = 500 m हुन्थ्यो (options मा नभएकाले 'none of the above')। 10 cm को realistic plan distance र keyed 50 m दुवैले '1/1000' नै अभिप्रेत देखाउँछन्, त्यसैले टाइपो सुधार गरिएको।"
 },
 {
  "q": "नक्सामा neat line भित्रको area लाई के भनिन्छ ?",
  "o": [
   "Map margin",
   "Map body",
   "Map interface",
   "All"
  ],
  "a": 1,
  "e": "Neat line भित्रको area लाई Map body (वा map face) भनिन्छ — नक्साको काम गर्ने भाग। बाहिरको भाग margin हो। ⚠️ मूल अंकमा 'Map face' विकल्प (a) मा थियो, जुन map body कै पर्याय भएकाले दुई उत्तर बन्थे — (a) लाई 'Map margin' मा बदलिएको।"
 },
 {
  "q": "Polygons symbol भित्र colour fill भर्दा पूरै fill नभएर कतै कतै सेता देखिएमा त्यसलाई के भनिन्छ ?",
  "o": [
   "Undershoot",
   "Overshoot",
   "White polygons",
   "Silver polygons"
  ],
  "a": 0,
  "e": "Polygon symbol भित्र colour fill पूरा नभई सेता टाटा देखिनुलाई Undershoot भनिन्छ (fill ले boundary सम्म नपुग्नु)। Overshoot = रंग boundary बाहिर जानु।"
 },
 {
  "q": "कुन symbol को specific र unique meaning हुँदैन ?",
  "o": [
   "Descriptive symbol",
   "Geometrical symbol",
   "Iconic symbol",
   "Text symbol"
  ],
  "a": 3,
  "e": "Text (letter/number) symbol को specific र unique meaning हुँदैन — 'P' ले post office वा parking, 'R' ले rest house वा ruin जनाउन सक्छ; त्यसैले legend अनिवार्य हुन्छ। Descriptive/Geometric/Iconic symbol को अर्थ legend मा एक पटक परिभाषित भएपछि स्पष्ट हुन्छ।"
 },
 {
  "q": "Globe को Centre मा point of origin मानि गरिएको projection लाई के भनिन्छ ?",
  "o": [
   "Gnomonic",
   "Stereographic",
   "Orthographic",
   "Orthogonal"
  ],
  "a": 0,
  "e": "Gnomonic projection मा point of origin (point of projection) globe को centre मा हुन्छ — यसमा great circle सिधा रेखा बन्छ (हवाई/समुद्री मार्ग योजनामा उपयोगी)। Stereographic मा opposite surface मा, Orthographic मा infinity मा।"
 },
 {
  "q": "तलका मध्ये कुन ठीक छैन ?",
  "o": [
   "टोपो नक्साबाट उचाईको ज्ञान हुन्छ ।",
   "टोपो म्याप रंगिन हुन्छ",
   "टोपो म्यापमा विस्तृतिको सामान्यिकरण गरिएको हुँदैन",
   "टोपो नक्सामा सबै प्रकारका details देखाइएको हुन्छ ।"
  ],
  "a": 2,
  "e": "टोपो नक्सामा विस्तृतिको सामान्यिकरण (generalization) गरिएको हुन्छ — सबै विवरण देखाउन सम्भव हुँदैन। त्यसैले 'सामान्यिकरण गरिएको हुँदैन' भन्ने कथन गलत हो। बाँकी सही: topo बाट उचाई थाहा हुन्छ, यो रंगिन हुन्छ, र सबै प्रकारका detail देखाइन्छ।"
 },
 {
  "q": "1:2000 को नक्सालाई 1:500 को नक्सामा enlarge गर्वा कति वटा sheet बन्छन् ?",
  "o": [
   "4",
   "8",
   "12",
   "16"
  ],
  "a": 3,
  "e": "1:2000 बाट 1:500 मा जाँदा linear ratio = 2000 ÷ 500 = 4 → sheet संख्या = 4 × 4 = 16। (Q57 को दोहोरो।)"
 },
 {
  "q": "Shrinkage map मा पनि correct distance measure कुन scale को सहायताले गर्न सकिन्छ ?",
  "o": [
   "Engineering scale",
   "Representative fraction",
   "Graphical scale",
   "Plotting scale"
  ],
  "a": 2,
  "e": "Graphical (bar) scale ले खुम्चिएको नक्साबाट पनि सही दूरी दिन्छ — किनकि नक्सासँगै यो पनि खुम्चिन्छ। RF/engineering scale ले शुद्ध (unshrunk) मान दिन्छ, त्यसैले shrunk map मा graphical scale प्रयोग गरिन्छ।"
 },
 {
  "q": "तलका कुन कार्य elements of map मा पर्दैन ?",
  "o": [
   "Projection",
   "Scale",
   "Generalization",
   "Legend"
  ],
  "a": 0,
  "e": "Scale, Generalization र Legend — तीनै नक्साका element हुन्। Projection भनेको नक्सा बनाउने गणितीय आधार (property) हो — element गणनामा यसलाई समावेश गरिँदैन।"
 },
 {
  "q": "भौगोलिक सूचना प्रणाली GIS प्रविधिबाट बनाइने नक्सामा बाटोलाई कुन प्रकारको संकेत चिन्हले देखाइन्छ ?",
  "o": [
   "Point symbol",
   "Line symbol",
   "Area symbol",
   "माथिका कुनै पनि होइन"
  ],
  "a": 1,
  "e": "GIS बाट बनेको नक्सामा बाटो (road) लाई line symbol (रेखा) ले देखाइन्छ — यसको लम्बाई हुन्छ, चौडाई scale मा नगण्य। ठूलो scale (1:500) मा भने बाटो area symbol बन्न सक्छ।"
 },
 {
  "q": "Central meridian को Northing Value कति हुन्छ ?",
  "o": [
   "500km",
   "1000.00km",
   "100km",
   "0.00km"
  ],
  "a": 3,
  "e": "Central meridian मा easting = 500,000 m (false easting); northing equator बाट नापिने भएकाले equator मा 0 km हुन्छ। ⚠️ प्रश्नले 'northing' सोधेको छ — यदि यसले 'central meridian मा northing' को अपेक्षा गर्छ भने यो equator मा मात्र 0 हुन्छ; false easting (500 km) सोधिएको भए उत्तर (a) हुन्थ्यो। आफ्नो स्रोत अनुसार मिलाउनुहोला।"
 },
 {
  "q": "1:500 मानको नक्सामा घरको संकेत कुन तरीकाबाट देखाइन्छ ?",
  "o": [
   "Point symbol",
   "Line symbol",
   "Area symbol",
   "All of the above"
  ],
  "a": 2,
  "e": "1:500 मा घरको वास्तविक आकार (boundary) देखिन्छ, त्यसैले area symbol (polygon) — point वा line होइन। (Q120, Q190 सँग मिल्दो।)"
 },
 {
  "q": "नक्सा तयार गर्नका लागि डाटा संकलनका विभिन्न विधि मध्ये तलको कुन विधिलाई दोस्रो श्रोत (Secondary Source) बाट डाटा संकलनको विधि भनि बुझिन्छ ?",
  "o": [
   "टोटल स्टेसनबाट डाटा संकलन गर्ने विधि",
   "प्लेन टेबलबाट डाटा संकलन गर्ने विधि",
   "पुराना नक्साहरु स्क्यान गरी डाटा संकलन गर्ने विधि",
   "माथिको कुनै होइन"
  ],
  "a": 2,
  "e": "Secondary source = अरूले बनाइसकेको सामग्री — पुराना नक्सा scan गरी data लिनु secondary method हो। Total station वा plane table बाट प्रत्यक्ष नाप्नु primary source हो।"
 },
 {
  "q": "समान उचाई भएका बिन्दुहरु जोड्ने काल्पनिक रेखालाई के भनिन्छ ?",
  "o": [
   "Isotherm",
   "Isobar",
   "Contour",
   "Isobath"
  ],
  "a": 2,
  "e": "Contour = समान उचाई भएका बिन्दु जोड्ने काल्पनिक रेखा। Isobar = समान वायुचाप, Isotherm = समान तापक्रम, Isobath = समान गहिराई (पानीमुनि)।"
 }
];
