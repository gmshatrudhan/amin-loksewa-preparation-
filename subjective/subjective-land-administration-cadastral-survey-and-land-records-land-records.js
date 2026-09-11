/* ================= SUBJECTIVE (WRITTEN) QUESTIONS - Land Administration, Cadastral Survey and Land Records - Unit 3: Land Records =================
 * One unit per file: the app loads ONLY this unit's 3 files (mcq + subjective
 * + study) when you open the unit - see js/data-manifest.js.
 *
 * HOW TO ADD A QUESTION: copy one {q, marks, hint} block and edit the text.
 *   q = question,  marks = full marks,  hint = model answer / hints.
 * IMPORTANT: do NOT rename the unit title in square brackets - the app finds
 * questions by matching it exactly.
 */
window.EXTRA = window.EXTRA || {};

window.EXTRA["Land Records"] = window.EXTRA["Land Records"] || {};
window.EXTRA["Land Records"].sub = [
      {q:"Explain the importance of accurate land records in land administration.", marks:10, hint:"Accurate land records give legal security of tenure and protect the owner against encroachment and fraud. They provide a reliable basis for the assessment and collection of land revenue. They reduce boundary disputes and consequent litigation. They enable land to be used as collateral for credit, thereby supporting investment. They support planning, acquisition, compensation, and infrastructure development, and they are essential for a modern land information system and for good governance in the land sector."},
      {q:"Describe the process of mutation of land records.", marks:5, hint:"An application is submitted to the Land Revenue Office with the ownership certificate, the deed of transfer, tax clearance and citizenship documents. The office verifies the documents against the land register and the cadastral map. A field enquiry is made where required, and notice may be issued for objection. If everything is in order, the entry is made in the land register, the old certificate is cancelled and a new ownership certificate is issued to the new owner, and the record and the map are updated."},
      {q:"What are the advantages of digitising land records?", marks:5, hint:"Records can be retrieved in seconds instead of hours; the risk of loss, theft, fire or tampering is greatly reduced; services such as searching, copying and applying can be delivered online; transparency improves and the scope for irregularity is reduced; data can be linked with the cadastral map through GIS; and reliable statistics become available for planning."},
      {q:"Explain the contents of a lalpurja and its legal importance.", marks:5, hint:"Contents: owner name/address/citizenship, district/VDC-ward, sheet and kitta numbers, area, land class, mohi/remarks, office seal. Importance: conclusive proof of ownership for sale, mortgage, partition, compensation and court cases; loss requires public notice and reissue procedure."},
      {q:"Describe the system of land record maintenance from field registers to digital systems.", marks:10, hint:"Flow: field book and plot register → cadastral map → shresta/ledger → lalpurja → tiro receipts. Updates via mutation, kitta-kat, survey updates. Digitisation: scanning, DLIS entry, parcel database, map-record linking, e-payment of tax. Discuss benefits (speed, security) and challenges (data cleaning, capacity, cyber security)."}
    ];
