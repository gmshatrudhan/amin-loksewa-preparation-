/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Surveying Methodology and Mapping - Unit 1: Introduction of Surveying =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};  // ⚠️ DO NOT CHANGE this line (creates the shared question box).

// ── ✏️ EDIT HERE - Unit: "Introduction of Surveying" - add/edit/delete question lines below ──
// ⚠️ DO NOT CHANGE the unit title inside ["..."] (must match app.js SUBJECTS exactly).
// ✏️ One line = ONE written Q: q=question, marks=number (no quotes), hint=model answer.
window.EXTRA["Introduction of Surveying"] = window.EXTRA["Introduction of Surveying"] || {};
window.EXTRA["Introduction of Surveying"].sub = [
      {q:"Define surveying and state its primary objectives.", marks:5, hint:"Surveying is the art and science of determining the relative positions of points on, above or below the surface of the earth by means of direct or indirect measurement of distance, direction and elevation. Objectives: to prepare plans and maps, to determine areas and volumes, to set out works on the ground, and to establish boundaries and control points."},
      {q:"Differentiate between plane surveying and geodetic surveying.", marks:10, hint:"Plane surveying: earth treated as a plane, curvature neglected, used for areas under about 250 sq km, lower order of accuracy, simple instruments, triangle treated as plane triangle. Geodetic surveying: curvature of the earth taken into account, used for large areas and national control networks, very high accuracy, precise instruments, triangles treated as spherical triangles with spherical excess."},
      {q:"State the fundamental principles of surveying and explain their importance.", marks:5, hint:"First principle — always work from the whole to the part: establish a system of control points with high precision, then fix details with respect to them, so errors do not accumulate. Second principle — a point must be fixed by at least two independent measurements, so that a check is available and errors can be detected."},
      {q:"Explain the first and second principles of surveying with examples.", marks:5, hint:"First — work from whole to part: establish a large framework of control points first, then fill in minor details so errors stay localised (e.g. main traverse first, then offsets). Second — fix every point by at least two independent measurements (e.g. chainage plus offset, or two angles), providing a check on the work."},
      {q:"Classify surveys based on purpose and based on instruments used.", marks:10, hint:"By purpose: cadastral (land records), topographical (natural/artificial features), engineering (roads, canals), military, geological, mine surveys. By instrument: chain, compass, plane table, theodolite/traverse, tacheometric, levelling, GPS/GNSS, drone/photogrammetric surveys. Also plane vs geodetic by whether earth curvature is considered; explain each with one use."}
    ];
