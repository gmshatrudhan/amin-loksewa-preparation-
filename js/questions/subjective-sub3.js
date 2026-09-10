/* ================= SUBJECTIVE (WRITTEN) QUESTIONS — SUB3: Surveying Methodology and Mapping =================
 * Units in this file:
 *     - Introduction of Surveying
 *     - Chain Survey
 *     - Plane Table Survey
 *     - Tachometric Survey
 *     - Mapping
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit titles in square brackets.
 */
window.EXTRA = window.EXTRA || {};

window.EXTRA["Introduction of Surveying"] = window.EXTRA["Introduction of Surveying"] || {};
window.EXTRA["Introduction of Surveying"].sub = [
      {q:"Define surveying and state its primary objectives.", marks:5, hint:"Surveying is the art and science of determining the relative positions of points on, above or below the surface of the earth by means of direct or indirect measurement of distance, direction and elevation. Objectives: to prepare plans and maps, to determine areas and volumes, to set out works on the ground, and to establish boundaries and control points."},
      {q:"Differentiate between plane surveying and geodetic surveying.", marks:10, hint:"Plane surveying: earth treated as a plane, curvature neglected, used for areas under about 250 sq km, lower order of accuracy, simple instruments, triangle treated as plane triangle. Geodetic surveying: curvature of the earth taken into account, used for large areas and national control networks, very high accuracy, precise instruments, triangles treated as spherical triangles with spherical excess."},
      {q:"State the fundamental principles of surveying and explain their importance.", marks:5, hint:"First principle — always work from the whole to the part: establish a system of control points with high precision, then fix details with respect to them, so errors do not accumulate. Second principle — a point must be fixed by at least two independent measurements, so that a check is available and errors can be detected."}
    ];

window.EXTRA["Chain Survey"] = window.EXTRA["Chain Survey"] || {};
window.EXTRA["Chain Survey"].sub = [
      {q:"Describe the procedure of chain surveying in the field.", marks:10, hint:"1. Reconnaissance — walk over the area and study the ground. 2. Prepare an index sketch showing stations. 3. Mark and reference the main stations with pegs. 4. Select well-conditioned triangles for the framework. 5. Measure the base line accurately. 6. Chain the survey lines, recording chainages and taking offsets to details in the field book. 7. Measure check lines and tie lines for verification. 8. Plot the framework to scale, add details, and finally ink and finish the plan."},
      {q:"What is an offset? Explain perpendicular and oblique offsets with sketches.", marks:5, hint:"An offset is a lateral measurement from a chain line to locate a detail. A perpendicular offset is taken at 90 degrees to the chain line, set out by eye, optical square or cross staff; it needs only one measurement and is used for short offsets. An oblique offset is taken at any convenient angle and requires two measurements from two known points on the chain line; it is used when the object is far from the line or the corner is important."},
      {q:"List the errors in chain surveying and explain how they are corrected.", marks:5, hint:"Personal errors: wrong reading, wrong booking, careless holding — avoided by care and checking. Instrumental errors: chain too long or too short, bent links — corrected by the formula, true length = measured length x (wrong length / true length). Natural errors: temperature variation, sag, slope, pull — corrected by applying corrections for temperature, sag, slope and standardisation."}
    ];

window.EXTRA["Plane Table Survey"] = window.EXTRA["Plane Table Survey"] || {};
window.EXTRA["Plane Table Survey"].sub = [
      {q:"Explain the methods of plane table surveying.", marks:10, hint:"Radiation — the table is set at one station and rays are drawn to all visible objects, distances measured and plotted to scale; suitable for small areas visible from one point. Intersection — two stations are plotted and rays drawn from both, the intersection fixing the object; used when distances cannot be measured. Traversing — the table is moved from station to station, forming a traverse; used for long narrow strips. Resection — the position of the table itself is located from already plotted points; includes the two point and three point problems."},
      {q:"State the advantages and disadvantages of plane table survey.", marks:5, hint:"Advantages: plotting is done in the field so nothing is omitted; errors can be detected immediately by check lines; no separate booking so no transposition errors; irregular objects can be plotted easily; no great computation is required. Disadvantages: not suitable in wet or windy weather; the equipment is heavy and awkward; no field record for future use; accuracy is lower; skilled surveyor required."},
      {q:"Explain the two point problem in plane tabling.", marks:5, hint:"The two point problem consists of locating the position of the plane table station on the plan by observing two well defined points whose positions have already been plotted. An auxiliary station is chosen, rays are drawn from both known points, the table is oriented by back ray from the auxiliary station, and the intersection of the resulting rays fixes the required station."}
    ];

window.EXTRA["Tachometric Survey"] = window.EXTRA["Tachometric Survey"] || {};
window.EXTRA["Tachometric Survey"].sub = [
      {q:"Explain the principle of stadia tacheometry and derive the distance formula.", marks:10, hint:"The stadia principle states that the ratio of the staff intercept to the horizontal distance is constant for a given instrument. With f the focal length, i the stadia interval and d the distance from the object glass to the trunnion axis, the distance from the instrument to the staff is D = (f/i).s + (f + d), usually written D = K.s + C where K = f/i is the multiplying constant (normally 100) and C = f + d is the additive constant. A neat ray diagram of the object glass, stadia hairs and staff should be drawn."},
      {q:"What are the advantages of tacheometric surveying over chain surveying?", marks:5, hint:"It eliminates the need for chaining, so it is fast and economical; it is well suited to rough, steep or broken ground and across obstacles such as rivers; it gives horizontal distance and elevation simultaneously; it reduces the errors that arise from chaining on slopes; and it is very useful for contouring and preliminary route surveys."},
      {q:"Differentiate between the fixed hair method and the movable hair method.", marks:5, hint:"Fixed hair (stadia) method: the stadia hairs are at a fixed interval, the staff intercept varies with distance, an ordinary levelling staff is used, and it is the method commonly employed. Movable hair (subtense) method: the staff intercept is kept constant by using targets at a fixed distance apart, the stadia interval is varied and read on a micrometer; it is more accurate but slower and needs a special instrument."}
    ];

window.EXTRA["Mapping"] = window.EXTRA["Mapping"] || {};
window.EXTRA["Mapping"].sub = [
      {q:"Define the scale of a map and explain the types of scale used in mapping.", marks:10, hint:"The scale of a map is the fixed ratio between a distance on the map and the corresponding distance on the ground. Types: (i) Numerical or engineer's scale, stated as 1 cm = 100 m. (ii) Representative fraction (RF), a dimensionless ratio such as 1:10,000, independent of the units used. (iii) Graphical or plain scale, a line drawn on the map divided into units; it remains correct even if the map is enlarged or reduced. Choice of scale depends on the purpose, the size of the area and the detail required."},
      {q:"What are conventional signs and symbols? Why are they necessary?", marks:5, hint:"Conventional signs are standard symbols used on maps to represent features such as roads, railways, rivers, buildings, boundaries, wells, temples and vegetation. They are necessary because features cannot be drawn to true scale on a small map; they save space, make the map easy to read, and ensure that every user interprets the map in the same way."},
      {q:"Explain the characteristics of contour lines.", marks:5, hint:"Contours of different elevations cannot cross one another (except at an overhanging cliff). Every contour closes on itself, either within or outside the map. Closely spaced contours mean a steep slope, widely spaced a gentle slope, evenly spaced a uniform slope. Contours are perpendicular to the line of steepest slope. A series of closed contours with higher values inside represents a hill; with lower values inside, a depression. Contours cross a ridge or valley line at right angles."}
    ];
