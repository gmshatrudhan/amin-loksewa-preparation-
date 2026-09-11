/* ====================================================================
   AMIN WEBSITE - MAIN PROGRAM (js/app.js)
   What it does: builds every page, runs the quiz, login, search, slider.
   HOW TO USE THE COMMENTS: lines starting with ✏️ EDIT HERE = safe for you to change.
   Lines starting with ⚠️ DO NOT CHANGE = program logic, leave alone.
   Beginner rule: you normally edit ONLY the SUBJECTS list (search: const SUBJECTS)
   plus the few settings this file points you to. All other text lives in js/content.js.
   ==================================================================== */
/* ================= APP (design + logic). Question files + content.js load before this. ================= */
// NOTE: the two banners below are outdated leftovers - questions now live in mcq/*.js + subjective/*.js
/* Inline question bank (ships with the page; no extra download). */
/* ==== FULL QUESTION BANK: 13 MCQ + 5 written per unit, all with explanations ==== */


// NOTE: the banner below is outdated - real counts are 5+5+5+3+5+4 = 27 units.
/* ---- 6 SUBJECTS × 5 UNITS ---- */


/* ============================================================
   SITE DATA — edit this file to change all content
   ============================================================ */





/* ---- HERO SLIDER SLIDES (5 feature slides) ---- */


/* ---- SYLLABUS TRACKS: Federal + 7 Provinces ---- */


// Build the unit objects for ONE subject from its list of unit titles.
// Study notes + questions resolve LIVE from the per-unit files (the get ...() lines below).
// ⚠️ DO NOT CHANGE this function - edit unit TITLES in SUBJECTS below instead.
function mkUnits(subject, names){
  return names.map((n,i)=>({
    no:i+1, title:n,
    /* study notes resolve LIVE from window.STUDY (lazy-loaded per unit file);
       the built-in defaults below show only if that unit's study file is missing */
    get outcomes(){
      const ov=(window.STUDY&&window.STUDY[n])||{};
      return ov.outcomes||[
        "Understand the key ideas of "+n+".",
        "Apply the concepts to Loksewa exam questions.",
        "Revise quickly using the key points below."
      ];
    },
    get content(){
      const ov=(window.STUDY&&window.STUDY[n])||{};
      return ov.content||[
        {h:"Introduction", p:"This unit covers "+n+" as prescribed in the "+subject+" section of the Amin syllabus."},
        {h:"Main Discussion", p:"Study the definitions, classifications, formulas and procedures. Practise past questions and note the exact terminology used in the syllabus."},
        {h:"Summary", p:"Revise the key points, then attempt both the written Subject Test and the objective MCQ Test for this unit."}
      ];
    },
    get keypoints(){
      const ov=(window.STUDY&&window.STUDY[n])||{};
      return ov.keypoints||[
        n+" is part of the "+subject+" paper.",
        "Focus on definitions, procedures and formulas.",
        "Attempt both tests after studying."
      ];
    },
    /* questions resolve LIVE from window.EXTRA (lazy-loaded per unit file) by unit title */
    get subjective(){
      const b = window.EXTRA && window.EXTRA[n];
      return (b && b.sub) ? b.sub : [];
    },
    get objective(){
      const b = window.EXTRA && window.EXTRA[n];
      return (b && b.mcq) ? b.mcq : [];
    }
  }));
}

// ✏️ EDIT HERE - ALL SUBJECTS + UNIT TITLES (your most-edited code in this file!) //
// Each subject = one { id, name, icon, color, desc, units } block. Rules:
//   ✅ SAFE: rename name:"...", icon:"..." (any emoji), color:"#..." (any color), desc:"..." text.
//   ✅ SAFE: reorder subjects (move whole blocks) or unit titles (move lines inside mkUnits([...])).
//   ⚠️ NEVER change id:"subN" - links + saved progress use it. Adding/removing needs 7 steps (see manual §5.4).
//   ⚠️ DANGER: every unit title MUST match its 3 per-unit files exactly: the mcq- + subjective- + study- files
//   named after subject+unit (full map: js/data-manifest.js). Rename a title = rename in all 4 places.
const SUBJECTS = [
  { id:"sub1", name:"General Awareness", icon:"🌏", color:"#0E3A5F",  // ✏️ rename name/icon/color/desc - ⚠️ NEVER change id
    desc:"नेपालको भूगोल, इतिहास, अर्थतन्त्र, विज्ञान, संविधान र समसामयिक विषयहरू।",
    units: mkUnits("General Awareness",[  // ✏️ unit titles below - EACH must match its question+study files exactly!
      "नेपालको भूगोल तथा प्राकृतिक स्रोत",
      "नेपालको इतिहास, संस्कृति तथा समाज",
      "नेपालको अर्थतन्त्र तथा विकास",
      "विज्ञान, प्रविधि तथा वातावरण",
      "संविधान, अन्तर्राष्ट्रिय सम्बन्ध तथा समसामयिक विषय"]) },

  { id:"sub2", name:"Public Management", icon:"🏛", color:"#0E7C6B",  // ✏️ rename name/icon/color/desc - ⚠️ NEVER change id
    desc:"कार्यालय व्यवस्थापन, निजामती सेवा, बजेट र लेखा, सुशासन तथा नेतृत्व।",
    units: mkUnits("Public Management",[  // ✏️ unit titles below - EACH must match its question+study files exactly!
      "कार्यालय व्यवस्थापन तथा कार्यविधि",
      "निजामती सेवा तथा सरकारी प्रशासन",
      "सरकारी बजेट, लेखा तथा लेखापरीक्षण",
      "सार्वजनिक सेवा तथा सुशासन",
      "व्यवस्थापन, नेतृत्व तथा नागरिक मूल्य"]) },

  { id:"sub3", name:"Surveying Methodology and Mapping", icon:"📐", color:"#A8861A",  // ✏️ rename name/icon/color/desc - ⚠️ NEVER change id
    desc:"Introduction of surveying, chain survey, plane table, tachometric survey and mapping.",
    units: mkUnits("Surveying Methodology and Mapping",[  // ✏️ unit titles below - EACH must match its question+study files exactly!
      "Introduction of Surveying",
      "Chain Survey",
      "Plane Table Survey",
      "Tachometric Survey",
      "Mapping"]) },

  { id:"sub4", name:"Land Administration, Cadastral Survey and Land Records", icon:"⚖", color:"#3F3D8A",  // ✏️ rename name/icon/color/desc - ⚠️ NEVER change id
    desc:"Acts, rules, directives and circulars with cadastral survey and land record management.",
    units: mkUnits("Land Administration, Cadastral Survey and Land Records",[  // ✏️ unit titles below - EACH must match its question+study files exactly!
      "Legislation (Acts, Rules, Directives, Circulars, SoP)",
      "Cadastral Survey",
      "Land Records"]) },

  { id:"sub5", name:"Mathematics and Instruments", icon:"🧮", color:"#8A2A4A",  // ✏️ rename name/icon/color/desc - ⚠️ NEVER change id
    desc:"General mathematics, algebra, geometry, trigonometry, surveying maths and instruments.",
    units: mkUnits("Mathematics and Instruments",[  // ✏️ unit titles below - EACH must match its question+study files exactly!
      "Mathematics (General)",
      "Mathematics (Algebra & Geometry)",
      "Mathematics (Trigonometry)",
      "Mathematics (Surveying)",
      "Instruments & Its Maintenance"]) },

  { id:"sub6", name:"Control Survey", icon:"🧭", color:"#17527F",  // ✏️ rename name/icon/color/desc - ⚠️ NEVER change id
    desc:"Compass survey, traverse and triangulation, GNSS and levelling.",
    units: mkUnits("Control Survey",[  // ✏️ unit titles below - EACH must match its question+study files exactly!
      "Compass Survey Introduction",
      "Traverse and Triangulation",
      "GNSS",
      "Levelling"]) }
];

/* ---- NOTICES ---- */






/* ---- LEGAL PAGES (Privacy, Terms, Disclaimer) ---- */



/* ============================================================
   APP — hash-router SPA (works on GitHub Pages, no server)
   ============================================================ */
// Shortcut: $(...) finds one element on the page. ⚠️ DO NOT CHANGE.
const $ = s => document.querySelector(s);
// Makes text safe to show (< > & quotes become harmless). ⚠️ DO NOT CHANGE (security).
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Formats a date like 2026-09-05 as "05 Sept 2026". ⚠️ DO NOT CHANGE.
const fdate = d => new Date(d).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});

/* ---------------- STORE (localStorage) ---------------- */
// BROWSER STORAGE ("database" living in each visitor's own phone/computer).
// Holds: users, login session, progress (p2), test results (r2), saved questions (b2).
// Also upgrades very old saved data (key "edupath") once, automatically.
// ⚠️ DO NOT CHANGE anything in this block.
const DB = {
  k:'amin',  // ⚠️ storage key - NEVER rename (users would lose accounts/progress).
  /* Local record (remembered data). Migrates the legacy 'edupath' key and any
     legacy global progress/results/bookmarks slices into per-user slices once. */
  raw(){
    let d=null;
    try{ d=JSON.parse(localStorage.getItem(DB.k)); }catch(e){ d=null; }
    if(!d){
      try{ d=JSON.parse(localStorage.getItem('edupath')); }catch(e){ d=null; }
      if(d){ try{ localStorage.setItem(DB.k,JSON.stringify(d)); localStorage.removeItem('edupath'); }catch(e){} }
    }
    if(!d||typeof d!=='object') d={users:[],session:null};
    d.users=d.users||[]; d.p2=d.p2||{}; d.r2=d.r2||{}; d.b2=d.b2||{};
    let mig=false; const lk=d.session||'guest';
    if(d.progress&&Object.keys(d.progress).length){ d.p2[lk]=Object.assign({},d.progress,d.p2[lk]); delete d.progress; mig=true; }
    if(d.results&&d.results.length){ d.r2[lk]=(d.results||[]).concat(d.r2[lk]||[]).slice(0,50); delete d.results; mig=true; }
    if(d.bookmarks&&d.bookmarks.length){ d.b2[lk]=(d.bookmarks||[]).concat(d.b2[lk]||[]).slice(0,500); delete d.bookmarks; mig=true; }
    if(mig){ try{ localStorage.setItem(DB.k,JSON.stringify(d)); }catch(e){} }
    return d;
  },
  /* Record + effective session (a "remember me"-off login lives in sessionStorage). */
  get(){ const d=DB.raw();
    try{ const s=sessionStorage.getItem(DB.k+'-s'); if(s) d.session=s; }catch(e){}
    return d; },
  set(d){ let temp=null;
    try{ temp=sessionStorage.getItem(DB.k+'-s'); }catch(e){}
    if(temp) d.session=null; /* never persist a temporary session */
    try{ localStorage.setItem(DB.k, JSON.stringify(d)); }catch(e){}
    if(temp) d.session=temp; },
  setSession(email,remember){
    try{ sessionStorage.removeItem(DB.k+'-s'); }catch(e){}
    const d=DB.raw(); d.session=null;
    if(remember){ d.session=email; }
    else { try{ sessionStorage.setItem(DB.k+'-s',email); }catch(e){ d.session=email; } }
    try{ localStorage.setItem(DB.k,JSON.stringify(d)); }catch(e){} },
  clearSession(){ const d=DB.raw(); d.session=null;
    try{ localStorage.setItem(DB.k,JSON.stringify(d)); }catch(e){}
    try{ sessionStorage.removeItem(DB.k+'-s'); }catch(e){} },
  user(){ const d=DB.get(); return d.session ? d.users.find(u=>u.email===d.session) : null },
  skey(){ const d=DB.raw(); let s=d.session;
    try{ s=sessionStorage.getItem(DB.k+'-s')||s; }catch(e){}
    return s||'guest'; }
};


/* ---------------- PASSWORD HASHING (SHA-256 via WebCrypto, with fallback) ---------------- */
// Locks passwords with SHA-256 scrambling (never stored readable). ⚠️ DO NOT CHANGE.
async function sha(s){
  try{
    if(window.crypto&&crypto.subtle){
      const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(String(s)));
      return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
    }
  }catch(e){}
  let h1=0xdeadbeef,h2=0x41c6ce57; s=String(s);
  for(let i=0;i<s.length;i++){ const ch=s.charCodeAt(i); h1=Math.imul(h1^ch,2654435761); h2=Math.imul(h2^ch,1597334677); }
  h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);
  h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);
  return 'f'+(h2>>>0).toString(16).padStart(8,'0')+(h1>>>0).toString(16).padStart(8,'0');
}
// Checks if a password is already scrambled. ⚠️ DO NOT CHANGE.
const isSha = s => /^[0-9a-f]{64}$/.test(s||'');
/* readable recovery code for the forgot-password flow */
// Creates recovery codes like AB12-CD34 for password reset. ⚠️ DO NOT CHANGE.
function rid(){ const c='ABCDEFGHJKMNPQRSTUVWXYZ23456789'; let s=''; const a=new Uint32Array(8);
  try{ crypto.getRandomValues(a); }catch(e){ for(let i=0;i<8;i++) a[i]=(Math.random()*4294967296)|0; }
  for(let i=0;i<8;i++) s+=c[a[i]%c.length]; return s.slice(0,4)+'-'+s.slice(4); }

/* ---------------- BOOKMARKS (saved questions) ---------------- */
// SAVED (bookmarked) questions manager. Keeps max 500 per user (see .slice(0,500) inside).
// ⚠️ DO NOT CHANGE.
const BM = {
  all(){ const d=DB.get(); return (d.b2&&d.b2[d.session||'guest'])||[] },
  save(list){ const d=DB.raw(); d.b2[DB.skey()]=(list||[]).slice(0,500); DB.set(d) },
  id(sid,un,qi){ return sid+'|'+un+'|'+qi },
  has(sid,un,qi){ return BM.all().some(b=>b.id===BM.id(sid,un,qi)) },
  toggle(sid,un,qi,q){
    const list=BM.all(), id=BM.id(sid,un,qi), i=list.findIndex(b=>b.id===id);
    if(i>-1) list.splice(i,1);
    else{
      const s=SUBJECTS.find(x=>x.id===sid), u=s&&s.units[un-1];
      list.unshift({id, sid, un, qi, subject:s?s.name:'', unit:u?u.title:'',
                    q:q?q.q:'', o:q?q.o:[], a:q?q.a:0, e:q?q.e:'', date:new Date().toISOString()});
    }
    BM.save(list); return BM.has(sid,un,qi);
  },
  remove(id){ BM.save(BM.all().filter(b=>b.id!==id)) },
  clear(){ BM.save([]) }
};

// Loads ONLY the data files each page needs: unit page = its 3 files, subject = its files, search = all (once).
// ⚠️ DO NOT CHANGE the loading logic. The unit-to-file MAP is js/data-manifest.js (auto-generated).
/* ---------------- LAZY DATA LOADER ----------------
   Unit data lives in 81 per-unit files (see js/data-manifest.js: unit -> its
   mcq + subjective + study files). Each page loads ONLY what it needs:
     unit page    -> that unit's 3 files          (needUnit)
     subject page -> that subject's files         (needSubject, for unit descriptions)
     search page  -> ALL files once               (needAll, to index every question)
     other pages  -> ZERO data files (fast!)
   Files load in parallel; every file registers exactly one unit key, so order
   never matters. A file that fails (offline?) resolves null and pages degrade
   gracefully (empty test shows a friendly retry box - see qzBegin). */
const DATA_LOADED = new Set();   /* finished files (never load twice) */
const DATA_LOADING = {};         /* src -> in-flight Promise (dedupes parallel asks) */
function loadScript(src){
  if(DATA_LOADED.has(src)) return Promise.resolve(src);
  if(DATA_LOADING[src]) return DATA_LOADING[src];
  const pr = new Promise(resolve=>{
    const el=document.createElement('script');
    el.src=src; el.async=true;
    el.onload=()=>{ DATA_LOADED.add(src); delete DATA_LOADING[src]; resolve(src); };
    el.onerror=()=>{ delete DATA_LOADING[src]; resolve(null); };
    document.head.appendChild(el);
  });
  DATA_LOADING[src]=pr; return pr;
}
function unitFiles(sid,un){
  const d=window.DATA_FILES, s=d&&d[sid], e=s&&s[String(un)];
  return e?[e.mcq,e.sub,e.study]:[];
}
async function needUnit(sid,un){
  const files=unitFiles(sid,un).filter(f=>!DATA_LOADED.has(f));
  if(!files.length) return true;
  const r=await Promise.all(files.map(loadScript));
  SEARCH_IX=null; /* new data arrived: cached search index must rebuild */
  return r.every(Boolean);
}
async function needSubject(sid){
  const d=window.DATA_FILES, s=d&&d[sid]; if(!s) return true;
  const files=[];
  Object.keys(s).sort((a,b)=>a-b).forEach(k=>{ files.push(s[k].mcq,s[k].sub,s[k].study); });
  const missing=files.filter(f=>!DATA_LOADED.has(f));
  if(!missing.length) return true;
  const r=await Promise.all(missing.map(loadScript));
  SEARCH_IX=null;
  return r.every(Boolean);
}
async function needAll(){
  const d=window.DATA_FILES||{}, files=[];
  Object.keys(d).sort().forEach(sid=>{
    Object.keys(d[sid]).sort((a,b)=>a-b).forEach(k=>{ const e=d[sid][k]; files.push(e.mcq,e.sub,e.study); });
  });
  const missing=files.filter(f=>!DATA_LOADED.has(f));
  if(!missing.length) return true;
  const r=await Promise.all(missing.map(loadScript));
  SEARCH_IX=null;
  return r.every(Boolean);
}

/* ---------------- SEARCH ---------------- */
// Search memory cache (built once, reused). ⚠️ DO NOT CHANGE.
let SEARCH_IX=null;
// Collects EVERYTHING searchable: subjects, units, notes, MCQs, written Qs, syllabus, notices, FAQs.
// ✏️ EDIT HERE to REMOVE a type from search: delete one whole ix.push(...) line below.
function searchIndex(){
  if(SEARCH_IX) return SEARCH_IX;
  const ix=[];
  SUBJECTS.forEach(s=>{
    ix.push({t:'Subject', title:s.name, sub:s.desc||'', url:'#/subject/'+s.id, sname:s.name});
    s.units.forEach(u=>{
      ix.push({t:'Unit', title:u.title, sub:s.name+' · Unit '+u.no, url:'#/unit/'+s.id+'/'+u.no+'/study', sname:s.name,
               body:(u.outcomes||[]).join(' ')+' '+(u.keypoints||[]).join(' ')+' '+
                    (Array.isArray(u.content)?u.content.map(c=>(c.h||'')+' '+(c.p||'')).join(' '):'')});
      u.objective.forEach((q,i)=>ix.push({t:'MCQ', title:q.q, sub:u.title, url:'#/unit/'+s.id+'/'+u.no+'/test', sname:s.name, body:q.o.join(' ')+' '+(q.e||'')}));
      u.subjective.forEach(q=>ix.push({t:'Written', title:q.q, sub:u.title+' · '+q.marks+' marks', url:'#/unit/'+s.id+'/'+u.no+'/test', sname:s.name, body:q.hint||''}));
    });
  });
  SYLLABUS.forEach(x=>ix.push({t:'Syllabus', title:(x.label||x.title)+' Syllabus ('+(x.year||'2082')+')', sub:x.desc||'', url:'#/syllabus/'+x.id, sname:''}));
  NOTICES.forEach(n=>ix.push({t:'Notice', title:n.title, sub:n.date+' · '+n.cat, url:'#/notice/'+n.id, sname:''}));
  FAQS.forEach((f,i)=>ix.push({t:'FAQ', title:f.q, sub:'Frequently asked', url:'#/faq', sname:'', body:f.a}));
  SEARCH_IX=ix; return ix;
}
// Scores and ranks search results (title match = +3 points, best first, top 40 shown).
// ✏️ EDIT HERE: minimum letters `q.length<2` (change in 3 places: here, hl() and pSearch!)
// ✏️ EDIT HERE: max results `.slice(0,40)` at the end of this function.
function searchRun(term){
// ✏️ EDIT HERE: search needs 2+ letters (place 1 of 3 - also hl() and pSearch!).
  const q=(term||'').trim().toLowerCase(); if(q.length<2) return [];
  const words=q.split(/\s+/);
  return searchIndex().map(it=>{
    const hay=(it.title+' '+it.sub+' '+(it.body||'')).toLowerCase();
    let sc=0;
    for(const w of words){ if(!hay.includes(w)) return null;
      if(it.title.toLowerCase().includes(w)) sc+=3;
      if(it.title.toLowerCase().startsWith(w)) sc+=2;
      sc+=1;
    }
    if(it.t==='Unit'||it.t==='Subject') sc+=2;
    return {it,sc};
// ✏️ EDIT HERE: show max 40 search results - change 40.
  }).filter(Boolean).sort((a,b)=>b.sc-a.sc).slice(0,40).map(x=>x.it);
}
// Paints matched words yellow (<mark>). ✏️ Minimum-letters twin `q.length<2` lives here too.
function hl(text,term){
// ✏️ Minimum-letters twin (place 2 of 3) - keep same as searchRun.
  const raw=String(text||''); const q=(term||'').trim(); if(q.length<2) return esc(raw);
  try{
    const rx=new RegExp(q.split(/\s+/).map(w=>w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'ig');
    let out='',last=0,m; rx.lastIndex=0;
    while((m=rx.exec(raw))){ out+=esc(raw.slice(last,m.index))+'<mark>'+esc(m[0])+'</mark>'; last=m.index+m[0].length; if(!m[0].length) rx.lastIndex++; }
    return out+esc(raw.slice(last));
  }catch(e){ return esc(raw) }
}
// SEARCH page layout. ✏️ EDIT HERE: search-box placeholder + hint texts. ⚠️ Not the logic.
function pSearch(term){
  const q=term||'';
  const res=searchRun(q);
  const groups={};
  res.forEach(r=>{ (groups[r.t]=groups[r.t]||[]).push(r) });
  return head('Search','Find any subject, unit, question or notice')+
  `<section><div class="wrap">
    <div class="card srchbox">
      <input id="sq" class="srchin" type="search" aria-label="Search" placeholder="Type at least 2 letters — e.g. levelling, kitta, GNSS" value="${esc(q)}"
        oninput="searchLive(this.value)" onkeydown="if(event.key==='Enter')searchLive(this.value)" autocomplete="off">
    </div>
    <div id="sres">${searchHTML(res,q,groups)}</div>
  </div></section>`;
}
// Draws grouped results. ✏️ EDIT HERE: "No results" + hint wording only.
function searchHTML(res,q,groups){
// ✏️ Minimum-letters twin (place 3 of 3) - keep same as searchRun.
  if(q.trim().length<2) return '<p class="shint">Start typing to search across '+searchIndex().length+' items — subjects, units, study notes, MCQs, written questions, syllabus and notices.</p>';
  if(!res.length) return '<div class="card"><p>No results for <b>'+esc(q)+'</b>. Try a different word.</p></div>';
  return '<p class="shint">'+res.length+' result'+(res.length>1?'s':'')+' for <b>'+esc(q)+'</b></p>'+
    Object.keys(groups).map(t=>`<div class="sgrp"><h3>${t} <span>${groups[t].length}</span></h3>
      ${groups[t].map(r=>`<a class="sres" href="${r.url}">
        <span class="stag">${r.t}</span>
        <span class="sbody"><b>${hl(r.title,q)}</b><i>${hl(r.sub,q)}</i></span></a>`).join('')}</div>`).join('');
}
// Updates results live while typing + updates the URL. ⚠️ DO NOT CHANGE.
function searchLive(v){
  const box=document.getElementById('sres'); if(!box) return;
  const res=searchRun(v), groups={};
  res.forEach(r=>{ (groups[r.t]=groups[r.t]||[]).push(r) });
  box.innerHTML=searchHTML(res,v,groups);
  if(location.hash.indexOf('#/search')===0) history.replaceState(null,'','#/search?q='+encodeURIComponent(v));
}

/* ---------------- SAVED QUESTIONS PAGE ---------------- */
// SAVED QUESTIONS page. ✏️ EDIT HERE: empty-state text + "Clear all" button text.
function pSaved(){
  const list=BM.all();
  return head('Saved Questions','Bookmarked questions to revise before the exam')+
  `<section><div class="wrap">
    ${!list.length?`<div class="card"><p>You have not saved any question yet.</p>
      <p style="color:var(--muted);font-size:.9rem;margin-top:6px">While taking any MCQ test, tap the <b>Save</b> icon on a question to keep it here for revision.</p>
      <a class="btn" style="margin-top:14px" href="#/subjects">Browse Subjects</a></div>`
    : `<div class="sbar"><span>${list.length} saved question${list.length>1?'s':''}</span>
        <button class="btn ghost sm" onclick="if(confirm('Remove all saved questions?')){BM.clear();rerender()}">Clear all</button></div>
      ${list.map(b=>`<div class="card svq">
        <div class="svh"><span class="badge">${esc(b.subject)}</span><span class="svu">${esc(b.unit)}</span>
          <button class="svx" title="Remove" onclick="BM.remove('${b.id}');rerender()">&times;</button></div>
        <h4>${esc(b.q)}</h4>
        <ol class="svo">${(b.o||[]).map((o,i)=>`<li class="${i===b.a?'right':''}">${esc(o)}</li>`).join('')}</ol>
        ${b.e?`<p class="sve ex">${esc(b.e)}</p>`:''}
        <a class="btn ghost sm" href="#/unit/${b.sid}/${b.un}/test">Go to this unit</a>
      </div>`).join('')}`}
  </div></section>`;
}

/* ---------------- CONTACT FORM ---------------- */
// CONTACT FORM sender. Uses SITE.formEndpoint (content.js) if set, else opens visitor's email app.
// ✏️ EDIT HERE: success / error MESSAGES only. ⚠️ Never touch the fetch() sending logic.
async function sendMsg(e){
  e.preventDefault();
  const f=e.target, btn=document.getElementById('cbtn'), box=document.getElementById('cmsg');
// ✏️ Reads your Formspree endpoint from content.js (empty = email-app fallback).
  const ep=(SITE.formEndpoint||'').trim();
  const data=Object.fromEntries(new FormData(f).entries());

  if(!ep){ // no endpoint configured -> fall back to the user's email app
    location.href='mailto:'+SITE.email+'?subject='+encodeURIComponent(data.subject||'Website enquiry')+
      '&body='+encodeURIComponent(data.message+'\n\n-- \n'+data.name+'\n'+data.email);
    box.innerHTML='<div class="msg ok">Opening your email app to send the message to '+esc(SITE.email)+'.</div>';
    return false;
  }
  btn.disabled=true; btn.textContent='Sending...'; box.innerHTML='';
  try{
    const r=await fetch(ep,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)});
    if(r.ok){ f.reset(); box.innerHTML='<div class="msg ok">Thank you! Your message has been sent. We will reply to you soon.</div>'; }
    else{ throw new Error('bad response'); }
  }catch(err){
    box.innerHTML='<div class="msg err">Could not send right now. Please email us directly at <b>'+esc(SITE.email)+'</b> or call '+esc(SITE.phone)+'.</div>';
  }
  btn.disabled=false; btn.textContent='Send Message';
  return false;
}

// FOOTER newsletter form: saves the email on that device (key "amin-nl"). ⚠️ DO NOT CHANGE.
function doSubscribe(e){
  e.preventDefault();
  const inp=document.getElementById('nl-email'); const em=((inp&&inp.value)||'').trim().toLowerCase();
  if(!em) return false;
// Newsletter emails on this device. ⚠️ DO NOT CHANGE.
  try{ const k='amin-nl'; const l=JSON.parse(localStorage.getItem(k)||'[]'); if(!l.includes(em)){ l.push(em); localStorage.setItem(k,JSON.stringify(l)); } }catch(err){}
  const ok=document.getElementById('nl-ok'); if(ok) ok.hidden=false;
  try{ e.target.reset(); }catch(err){}
  return false;
}

/* ---------------- SHELL ---------------- */
// Draws one social-media icon link from SOCIAL data. ⚠️ DO NOT CHANGE.
function socialSVG(s){ return `<a href="${s.url}" title="${s.name}" aria-label="${s.name}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="${s.icon}"/></svg></a>` }

// HEADER + FOOTER builder - runs on EVERY page. Big but mostly text - read before editing!
// ✏️ EDIT HERE: nav labels (Home/Notice/...), Tests + About dropdown links,
//   footer headings, Quick Links, footer description paragraph, "CREATED BY ..." line.
// ⚠️ "tel:+977..." call-links are HARDCODED here (footer Contact column) - update if phone changes.
// ⚠️ DO NOT rename the ids: topbar / header / nav / footer. Syllabus+Subjects menus build themselves.
function shell(){
  const u = DB.user();
  const syl = SYLLABUS.map(s=>`<a href="#/syllabus/${s.id}">${s.emoji||''} ${esc(s.label||s.title)} <small>(${esc(s.year||'2082')})</small></a>`).join('');
  const sub = SUBJECTS.map(s=>`<a href="#/subject/${s.id}">${esc(s.name)} <small>(${s.units.length} units)</small></a>`).join('');
// ✏️ EDIT HERE: ticker shows first 3 notices - change 3 to show more/fewer.
  const tick = NOTICES.slice(0,3).map(n=>`<b>&#9679;</b>${esc(n.title)}`).join(' &nbsp;&nbsp; ');

  $('#topbar').innerHTML = `<div class="wrap">
    <div class="ticker"><span><b>NOTICE</b>${tick} &nbsp;&nbsp; <b>NOTICE</b>${tick} &nbsp;&nbsp; </span></div>
    <div class="tsoc">${SOCIAL.map(s=>socialSVG(s)).join('')}</div>
  </div>`;

  $('#header').innerHTML = `<div class="wrap">
    <a class="logo" href="#/"><span class="mk"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" stroke-width="3"/><path d="M24 7v34M7 24h34" stroke="currentColor" stroke-width="2" opacity=".55"/><path d="M24 12l6.5 17L24 25.5 17.5 29z" fill="currentColor"/><circle cx="24" cy="24" r="3.2" fill="#F5A524"/></svg></span><span class="tx"><b>${esc(SITE.name)}</b><i>${esc(SITE.tagline)}</i></span></a>
    <button class="burger" onclick="toggleNav()" aria-label="Menu" aria-expanded="false" aria-controls="nav">&#9776;</button>
    <nav class="main" id="nav">
      <div class="item"><a class="lnk" href="#/">Home</a></div>
      <div class="item" data-m="syl"><button class="lnk mbtn" aria-haspopup="true" aria-expanded="false" onclick="menu('syl',event)">Syllabus <b class="car"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></b></button><div class="drop">${syl}</div></div>
      <div class="item" data-m="sub"><button class="lnk mbtn" aria-haspopup="true" aria-expanded="false" onclick="menu('sub',event)">Subjects <b class="car"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></b></button><div class="drop">${sub}</div></div>
      <div class="item" data-m="tst"><button class="lnk mbtn" aria-haspopup="true" aria-expanded="false" onclick="menu('tst',event)">Tests <b class="car"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></b></button><div class="drop">
        <a href="#/tests">All Tests</a><a href="#/dashboard/history">My Results</a></div></div>
      <div class="item"><a class="lnk" href="#/notice">Notice</a></div>
      <div class="item" data-m="abt"><button class="lnk mbtn" aria-haspopup="true" aria-expanded="false" onclick="menu('abt',event)">About <b class="car"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></b></button><div class="drop">
        <a href="#/about">About Us</a><a href="#/contact">Contact</a><a href="#/faq">FAQ</a></div></div>
    </nav>
    <div class="hact">
      <div class="icons">
      <a class="tgl srchb" href="#/search" aria-label="Search" title="Search">
        <svg viewBox="0 0 24 24"><path d="M10 2a8 8 0 105.3 14l5.4 5.4 1.4-1.4-5.4-5.4A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/></svg>
      </a>
      <a class="tgl srchb" href="#/saved" aria-label="Saved questions" title="Saved questions">
        <svg viewBox="0 0 24 24"><path d="M6 2h12a1 1 0 011 1v18l-7-4-7 4V3a1 1 0 011-1z"/></svg>
      </a>${themeBtn()}</div>${ u ? `<div class="uwrap" id="uwrap">
        <button type="button" class="avatar" aria-haspopup="true" aria-expanded="false" onclick="var w=document.getElementById('uwrap');w.classList.toggle('open');this.setAttribute('aria-expanded',w.classList.contains('open'))">${esc((u.name||'U')[0].toUpperCase())}</button>
        <div class="udrop"><a href="#/dashboard">Dashboard</a><a href="#/dashboard/progress">My Progress</a>
        <a href="#/dashboard/history">Test History</a><a href="#/saved">Saved Questions</a><a href="#/dashboard/profile">Profile</a>
        <a href="#" onclick="logout();return false">Logout</a></div></div>`
      : `<a class="btn sm prof" href="#/auth" title="Log in or create an account">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.5-8 5.5V21h16v-1.5c0-3-3.6-5.5-8-5.5z"/></svg>
          <span>Profile</span></a>` }</div>
  </div>`;

  $('#footer').innerHTML = `<div class="wrap">
    <div class="grid g4">
      <div><div class="logo"><span class="mk"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" stroke-width="3"/><path d="M24 7v34M7 24h34" stroke="currentColor" stroke-width="2" opacity=".55"/><path d="M24 12l6.5 17L24 25.5 17.5 29z" fill="currentColor"/><circle cx="24" cy="24" r="3.2" fill="#F5A524"/></svg></span><span class="tx"><b style="color:#fff">${esc(SITE.name)}</b><i style="color:#8ea0c4">${esc(SITE.tagline)}</i></span></div>
        <p style="font-size:.87rem;margin-top:12px">Amin Loksewa Preparation provides notes, MCQs, syllabus, important questions, and exam-focused study materials to help you prepare effectively for the Amin Loksewa exam !!!</p>
        <div class="fsoc">${SOCIAL.map(s=>socialSVG(s)).join('')}</div></div>
      <div><h4>Quick Links</h4><a href="#/">Home</a><a href="#/syllabus">Syllabus</a><a href="#/subjects">Subjects</a>
        <a href="#/tests">Tests</a><a href="#/search">Search</a><a href="#/saved">Saved Questions</a><a href="#/notice">Notice</a><a href="#/about">About</a></div>
      <div><h4>Subjects</h4>${SUBJECTS.map(s=>`<a href="#/subject/${s.id}">${esc(s.name)}</a>`).join('')}</div>
      <div><h4>Contact</h4><a href="#/contact">${esc(SITE.address)}</a><a href="tel:+9779814041813">${esc(SITE.phone)}</a>
        <a href="mailto:${SITE.email}">${esc(SITE.email)}</a>
        <form class="nl" onsubmit="return doSubscribe(event)"><input type="email" id="nl-email" name="nl-email" placeholder="Your email" aria-label="Your email" required><button class="btn accent sm">Go</button></form><p class="nl-ok" id="nl-ok" hidden>Thank you for subscribing!</p></div>
    </div>
    <div class="fbot"><span><a href="#/copyright" class="cpy">${esc(SITE.copyright)}</a></span>
      <span><a href="#/about">About</a><a href="#/contact">Contacts</a><a href="#/privacy">Privacy Policy</a><a href="#/terms">Terms &amp; Conditions</a><a href="#/disclaimer">Disclaimer</a></span></div>
    <div class="fmade"><b>CREATED BY SHATRUDHAN SAH</b></div>
  </div>`;
}
// Opens/closes one nav dropdown. ⚠️ DO NOT CHANGE.
function menu(k,e){
  e.preventDefault(); e.stopPropagation();
  const it=document.querySelector('.item[data-m="'+k+'"]');
  const wasOpen=it.classList.contains('open');
  document.querySelectorAll('nav.main .item').forEach(x=>x.classList.remove('open'));
  if(!wasOpen) it.classList.add('open');
  document.querySelectorAll('nav.main .mbtn').forEach(b=>b.setAttribute('aria-expanded',b.closest('.item').classList.contains('open')));
}
// Closes all nav dropdowns. ⚠️ DO NOT CHANGE.
function closeMenus(){ document.querySelectorAll('nav.main .item').forEach(x=>x.classList.remove('open'));
  document.querySelectorAll('nav.main .mbtn').forEach(b=>b.setAttribute('aria-expanded','false')); }
// Hamburger button: opens/closes the mobile menu. ⚠️ DO NOT CHANGE.
function toggleNav(){
  const n=document.getElementById('nav'); n.classList.toggle('open');
  document.body.classList.toggle('navopen',n.classList.contains('open'));
  const bg=document.querySelector('.burger'); if(bg) bg.setAttribute('aria-expanded',n.classList.contains('open'));
  if(!n.classList.contains('open')) closeMenus();
}
// Logs out and goes home. ⚠️ DO NOT CHANGE.
function logout(){ DB.clearSession(); nav('#/'); }
// Go to a page (hash). ⚠️ DO NOT CHANGE.
function nav(h){ if(location.hash===h){ router(); }else{ location.hash=h; } }
// Redraws the current page keeping scroll position. ⚠️ DO NOT CHANGE.
function rerender(){ const y=window.scrollY||0; router(); window.scrollTo(0,y); }

/* ---------------- HELPERS ---------------- */
// Navy page-header banner (breadcrumb + big title) shared by all inner pages. ⚠️ Style it via .pghead in CSS, not here.
const head = (t,s,c,ico) => `<div class="pghead"><div class="wrap">
  <div class="crumb"><a href="#/">Home</a> / ${c||esc(t)}</div>
  <h1>${ico?ico+' ':''}${esc(t)}</h1>${s?`<p>${esc(s)}</p>`:''}</div></div>`;
// "Login required" guard: guests get sent to the login page. ⚠️ DO NOT CHANGE.
function need(){ if(!DB.user()){ location.hash='#/auth?t=login'; return true } return false }
// Reads this user's completed-units list. ⚠️ DO NOT CHANGE.
function prog(){ const d=DB.get(); return (d.p2&&d.p2[d.session||'guest'])||{} }
// Marks one unit complete ("Mark as Complete" button). ⚠️ DO NOT CHANGE.
function markDone(sid,un){ const d=DB.raw(); const k=DB.skey(); d.p2[k]=d.p2[k]||{}; d.p2[k][sid+'-'+un]=true; DB.set(d); }
// Subject progress % for the progress bars. ⚠️ DO NOT CHANGE.
function subjPct(sid){ const p=prog(), sb=SUBJECTS.find(x=>x.id===sid), t=sb?sb.units.length:0; if(!t) return 0; let n=0; for(let i=1;i<=t;i++) if(p[sid+'-'+i]) n++; return Math.round(n/t*100) }
// AUTO COUNTS: TOT_UNITS (27) and TOT_TESTS (54) computed from SUBJECTS.
// ⚠️ DO NOT CHANGE - they update themselves when you add/remove subjects/units.
const TOT_UNITS = SUBJECTS.reduce((a,s)=>a+s.units.length,0);
const TOT_TESTS = TOT_UNITS*2;

/* smooth-scroll to a section on the current page (used by the stats bar) */
// Smooth-scroll used by the home stats cards. ⚠️ DO NOT CHANGE.
function jumpTo(e,id){
  if(e&&e.preventDefault) e.preventDefault();
  const el=document.getElementById(id);
  if(el) window.scrollTo({top:Math.max(0,el.getBoundingClientRect().top+window.scrollY-84),behavior:'smooth'});
  return false;
}

/* ---------------- PAGES ---------------- */
// HOME page: slider + stats + syllabus grid + subjects + notices + signup banner.
// ✏️ EDIT HERE: section headings, CTA texts, "View All Notices". Slide TEXT lives in content.js SLIDES.
// ✏️ EDIT HERE: home notice count = NOTICES.slice(0,4) inside this function. All other numbers are automatic.
function pHome(){
  const slides = SLIDES.map(x=>`<div class="slide" style="--g1:${x.g1};--g2:${x.g2}">
      <div class="sbg"></div><div class="sov"></div>
      <div class="sin"><span class="tag">${esc(x.tag)}</span>
        <h2>${esc(x.title)}</h2>
        <div class="ssub">${esc(x.sub)}</div>
        <p>${esc(x.desc)}</p>
        <div class="sbtn"><a class="btn accent sm" href="${x.href}">${esc(x.btn)} &rarr;</a>
        <a class="btn ghost sm wht" href="${x.href2}">${esc(x.btn2)}</a></div></div></div>`).join('');
  return `<h1 class="vh">Amin Loksewa Preparation \u2014 Learn. Practice. Pass.</h1><div class="hero">
      <div class="slider" id="slider">
        <button class="sarr l" onclick="go(-1)" aria-label="Previous">&#8249;</button>
        <div class="slides" id="slides">${slides}</div>
        <button class="sarr r" onclick="go(1)" aria-label="Next">&#8250;</button>
        <div class="dots" id="dots">${SLIDES.map((x,i)=>`<button type="button" onclick="goTo(${i})" class="${i?'':'on'}" title="${esc(x.tag)}" aria-label="Go to slide ${i+1}: ${esc(x.tag)}"></button>`).join('')}</div>
      </div></div>

  <div class="stats"><div class="wrap"><div class="grid g4">
    <a class="stat" href="#/syllabus" onclick="return jumpTo(event,'sec-syllabus')" title="Federal and all seven provincial Amin syllabus tracks"><b>${SYLLABUS.length}</b><span>Syllabus Tracks</span></a>
    <a class="stat" href="#/subjects" onclick="return jumpTo(event,'sec-subjects')" title="Six subjects, ${TOT_UNITS} units — every unit has Study material and two tests"><b>${SUBJECTS.length}</b><span>Subjects</span></a>
    <a class="stat" href="#/subject/sub1" title="Open the first subject to browse all units"><b>${TOT_UNITS}</b><span>Units</span></a>
    <a class="stat" href="#/tests" title="Practice and exam mode tests"><b>${TOT_TESTS}</b><span>Tests</span></a>
  </div></div></div>

  <section id="sec-syllabus"><div class="wrap"><div class="shead"><h2>Syllabus</h2><p>Federal and all seven provincial Amin syllabus tracks</p></div>
    <div class="grid g4 tight">${SYLLABUS.map(x=>`<a class="card syl" href="#/syllabus/${x.id}">
      <h3><span class="sylemo">${x.emoji||''}</span> ${esc(x.label||x.title)} Syllabus (${esc(x.year||'2082')})</h3>
      <span class="mini">View or download &rarr;</span></a>`).join('')}</div></div></section>

  <section class="alt" id="sec-subjects"><div class="wrap"><div class="shead"><h2>Our Subjects</h2><p>Six subjects, ${TOT_UNITS} units — every unit has Study material and two tests.</p></div>
    <div class="grid g3">${SUBJECTS.map(s=>`<a class="card" href="#/subject/${s.id}">
      <div class="ico" style="background:${s.color}">${s.icon}</div><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p>
      <div class="bar"><i style="width:${subjPct(s.id)}%"></i></div>
      <div style="margin-top:8px;font-size:.8rem;color:var(--muted)">${s.units.length} Units &middot; ${s.units.length*2} Tests &middot; ${subjPct(s.id)}% complete</div></a>`).join('')}</div></div></section>

  <section><div class="wrap"><div class="shead"><h2>Latest Notices</h2><p>Exam, result, admission and event updates</p></div>
    <div class="grid g2">${NOTICES.slice(0,4).map(n=>noticeCard(n)).join('')}</div>
    <div style="text-align:center;margin-top:22px"><a class="btn ghost" href="#/notice">View All Notices</a></div></div></section>

  <section class="cta">
    <div class="wrap"><h2 style="font-size:1.8rem">Create your free account today</h2>
    <p style="color:#cbd7f2;margin:8px 0 18px">Save your progress, take tests and get your results instantly.</p>
    <a class="btn accent" href="#/auth?t=signup">Create free account</a></div></section>`;
}

// Draws ONE notice card (used on home + notice board).
// ✏️ EDIT HERE inside: gold "New" badge days (< 30) and preview length (body.slice(0,120)).
function noticeCard(n){
// ✏️ EDIT HERE: gold "New" badge for notices younger than 30 days - change 30.
  const isNew = (Date.now()-new Date(n.date))/86400000 < 30;
  return `<a class="card" href="#/notice/${n.id}">
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">
      <span class="badge">${esc(n.cat)}</span>${isNew?'<span class="badge new">New</span>':''}
      <span style="margin-left:auto;font-size:.8rem;color:var(--muted)">${fdate(n.date)}</span></div>
    <h3>${esc(n.title)}</h3><p>${esc(n.body.slice(0,120))}…</p></a>`;
}

// SYLLABUS track-cards page (built automatically from SYLLABUS). ✏️ Heading texts only.
function pSyllabusList(){
  return head('Syllabus','Federal and all seven provincial Amin Loksewa syllabus')+
  `<section><div class="wrap"><div class="grid g4 tight">${SYLLABUS.map(s=>`<a class="card syl" href="#/syllabus/${s.id}">
    <h3><span class="sylemo">${s.emoji||''}</span> ${esc(s.label||s.title)} Syllabus (${esc(s.year||'2082')})</h3>
    <span class="mini">View or download &rarr;</span></a>`).join('')}</div></div></section>`;
}

// ONE syllabus detail page. ✏️ EDIT HERE: "Exam Pattern" line + "Reference Books" list inside. Track data lives in content.js.
function pSyllabus(id){
  const s = SYLLABUS.find(x=>x.id===id); if(!s) return p404();
  const rows = SUBJECTS.map((sb,i)=>{ const n=sb.units.length; return `<tr><td>${i+1}</td><td>${esc(sb.name)}</td><td>${n}</td><td>${n*5}</td><td>${n*3}</td></tr>`; }).join('');
  return head((s.label||s.title)+' Syllabus ('+(s.year||'2082')+')', s.desc, `<a href="#/syllabus">Syllabus</a> / ${esc(s.label||s.title)}`, s.emoji||'')+
  `<section><div class="wrap"><div class="split">
    <div class="side"><a class="on" href="#/syllabus/${s.id}">This Syllabus</a>
      ${SYLLABUS.filter(x=>x.id!==s.id).map(x=>`<a href="#/syllabus/${x.id}"><span>${x.emoji||''} ${esc(x.label||x.title)}</span></a>`).join('')}</div>
    <div><div class="card prose">
      <h3>Overview</h3><p>${esc(s.desc)}</p>
      <h3>Objectives</h3><ul>${s.objectives.map(o=>`<li>${esc(o)}</li>`).join('')}</ul>
      <h3>Subject-wise Breakdown &amp; Question Counts</h3>
      <table><thead><tr><th>#</th><th>Subject</th><th>Units</th><th>Objective Qs</th><th>Written Qs</th></tr></thead><tbody>${rows}</tbody></table>
      <div class="note"><b>Exam Pattern:</b> Objective 20 marks &middot; Short answer 40 marks &middot; Long answer 40 marks. Pass mark 40%.</div>
      <h3>Reference Books</h3><ul><li>Prescribed textbook of each subject</li><li>Practice question bank</li><li>Past year question collection</li></ul>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
        <a class="btn" href="#/subjects">Start Studying</a>
        <button class="btn ghost" onclick="window.print()">Print</button></div>
    </div></div></div></div></section>`;
}

// SUBJECTS grid page (automatic). ✏️ Heading texts only.
function pSubjects(){
  return head('Subjects',`Six subjects, ${TOT_UNITS} units — study material and two tests per unit`)+
  `<section><div class="wrap"><div class="grid g3">${SUBJECTS.map(s=>`<a class="card" href="#/subject/${s.id}">
    <div class="ico" style="background:${s.color}">${s.icon}</div><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p>
    <div class="bar"><i style="width:${subjPct(s.id)}%"></i></div>
    <div style="margin-top:8px;font-size:.8rem;color:var(--muted)">${s.units.length} Units &middot; ${subjPct(s.id)}% complete</div></a>`).join('')}</div></div></section>`;
}

// ONE subject: progress + unit rows with Study/Test buttons. ✏️ Button/label texts only.
function pSubject(id){
  const s = SUBJECTS.find(x=>x.id===id); if(!s) return p404();
  const p = prog();
  return head(s.name, s.desc, `<a href="#/subjects">Subjects</a> / ${esc(s.name)}`)+
  `<section><div class="wrap"><div class="split">
    <div class="side">${SUBJECTS.map(x=>`<a href="#/subject/${x.id}" class="${x.id===s.id?'on':''}">${esc(x.name)}</a>`).join('')}</div>
    <div>
      <div class="card" style="margin-bottom:16px"><b>Progress:</b> ${subjPct(s.id)}% completed
        <div class="bar"><i style="width:${subjPct(s.id)}%"></i></div></div>
      ${s.units.map(u=>`<div class="card" style="margin-bottom:12px;display:flex;gap:14px;align-items:center;flex-wrap:wrap">
        <div style="flex:1;min-width:200px"><div class="badge">Unit ${u.no}</div>
          <h3 style="margin-top:6px">${esc(u.title)}</h3>
          <p>${esc(u.outcomes[0]||u.title)}</p></div>
        ${p[s.id+'-'+u.no]?'<span class="badge ok">Completed</span>':''}
        <a class="btn sm" href="#/unit/${s.id}/${u.no}/study">Study</a>
        <a class="btn accent sm" href="#/unit/${s.id}/${u.no}/test">Test</a></div>`).join('')}
    </div></div></div></section>`;
}

// UNIT shell: sidebar + Study/Test tabs + Previous/Next buttons. ✏️ Tab/button labels only. ⚠️ Links build themselves.
function pUnit(sid,un,tab){
  const s = SUBJECTS.find(x=>x.id===sid); if(!s) return p404();
  const u = s.units[un-1]; if(!u) return p404();
  const done = prog()[sid+'-'+un];
  const body = tab==='test' ? '<div id="quizRoot"></div>' : unitStudy(s,u,done);
  return head(`Unit ${u.no}: ${u.title}`, s.name, `<a href="#/subjects">Subjects</a> / <a href="#/subject/${s.id}">${esc(s.name)}</a> / Unit ${u.no}`)+
  `<section><div class="wrap"><div class="split">
    <div class="side">${s.units.map(x=>`<a href="#/unit/${s.id}/${x.no}/study" class="${x.no==un?'on':''}">Unit ${x.no}. ${esc(x.title)}${prog()[s.id+'-'+x.no]?' ✓':''}</a>`).join('')}</div>
    <div><div class="tabs">
      <button class="${tab!=='test'?'on':''}" onclick="location.hash='#/unit/${sid}/${un}/study'">Study</button>
      <button class="${tab==='test'?'on':''}" onclick="location.hash='#/unit/${sid}/${un}/test'">Test</button></div>
      ${body}
      <div style="display:flex;justify-content:space-between;margin-top:20px">
        ${un>1?`<a class="btn ghost sm" href="#/unit/${sid}/${un-1}/study">&larr; Previous Unit</a>`:'<span></span>'}
        ${un<s.units.length?`<a class="btn ghost sm" href="#/unit/${sid}/${+un+1}/study">Next Unit &rarr;</a>`:'<span></span>'}</div>
    </div></div></div></section>`;
}

// STUDY-NOTES layout: outcomes, sections, key points, Mark-done / Go-to-Test / Print buttons.
// ✏️ EDIT HERE: headings + button TEXTS. The NOTE TEXT ITSELF lives in study/*.js files.
function unitStudy(s,u,done){
  return `<div class="card prose">
    <h3>Learning Outcomes</h3><ul>${u.outcomes.map(o=>`<li>${esc(o)}</li>`).join('')}</ul>
    ${(Array.isArray(u.content)?u.content:[{h:'Notes',p:String(u.content||'')}]).map(c=>`<h3>${esc(c.h)}</h3><p>${esc(c.p)}</p>`).join('')}
    <div class="note"><b>Key Points</b><ul style="margin-top:6px">${u.keypoints.map(k=>`<li>${esc(k)}</li>`).join('')}</ul></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
      <button class="btn ${done?'ghost':''}" onclick="markDone('${s.id}',${u.no});rerender()" ${done?'disabled':''}>${done?'✓ Completed':'Mark as Complete'}</button>
      <a class="btn accent" href="#/unit/${s.id}/${u.no}/test">Go to Test</a>
      <button class="btn ghost" onclick="window.print()">Print Notes</button></div></div>`;
}

/* ================= QUIZ ENGINE (one question at a time) ================= */
// QUIZ memory: deck, answers, flags, timer, mode... reset on every test. ⚠️ DO NOT CHANGE.
const QZ = { sid:null, un:null, deck:[], i:0, ans:[], flag:[], mode:'practice',
             sec:0, used:0, tid:null, run:false, done:false, revealAll:false,
             retry:false, srcIdx:[] };

// TEST page: MCQ start screen (mode cards + options + Start button) + written test below.
// ✏️ EDIT HERE: mode names/descriptions, shuffle checkbox defaults ("checked"),
//   default minutes Math.max(5,...), allowed min="1" max="180", button + instruction texts.
function quizStart(sid,un){
  const s=SUBJECTS.find(x=>x.id===sid), u=s.units[un-1];
  QZ.sid=sid; QZ.un=un;
  const root=document.getElementById('quizRoot'); if(!root) return;
  root.innerHTML=`
   <div class="card qstart">
     <span class="badge">${esc(s.name)}</span>
     <h2 style="color:var(--primary);margin:8px 0 4px">Unit ${u.no}: ${esc(u.title)}</h2>
     <p style="color:var(--muted);font-size:.92rem">Objective test &mdash; ${u.objective.length} multiple choice questions.
        Choose a mode and begin. You may submit after answering only a few questions.</p>
     <div class="modes">
       <button type="button" class="mode on" id="m_practice" aria-pressed="true" onclick="qzMode('practice')">
         <b>Practice mode</b><span>Answer is revealed with an explanation immediately after each question.</span></button>
       <button type="button" class="mode" id="m_exam" aria-pressed="false" onclick="qzMode('exam')">
         <b>Exam mode</b><span>No feedback until you submit the whole paper, like the real examination.</span></button>
     </div>
     <div class="qopts">
       <label class="chk"><input type="checkbox" id="qsh" checked> Shuffle questions</label>
       <label class="chk"><input type="checkbox" id="osh"> Shuffle options</label>
       <label class="chk">Time <input type="number" id="qmin" class="tmin" min="1" max="180" value="${Math.max(5,u.objective.length)}"> min</label>
     </div>
     <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
       <button class="btn accent" onclick="qzBegin()">Start Test</button>
       <a class="btn ghost" href="#/unit/${sid}/${un}/study">Read Notes First</a></div>
   </div>
   <div class="card" style="margin-top:16px">
     <h3 style="color:var(--primary)">Subject Test (Written) &mdash; ${u.subjective.reduce((x,y)=>x+y.marks,0)} marks</h3>
     <p style="color:var(--muted);font-size:.9rem;margin-bottom:12px">Write each answer in your copy, then open the model answer to compare.</p>
     ${u.subjective.map((q,i)=>`<div class="wq">
        <div class="wqh"><span class="wqn">Q${i+1}</span>
          <span class="wqt">${esc(q.q)}</span><span class="badge">${q.marks} marks</span></div>
        <button class="btn ghost sm" onclick="this.nextElementSibling.classList.toggle('show');this.textContent=this.nextElementSibling.classList.contains('show')?'Hide model answer':'Show model answer'">Show model answer</button>
        <div class="wqa"><b>Model answer:</b> ${esc(q.hint)}</div></div>`).join('')}
   </div>`;
}

// Practice/Exam mode toggle. ⚠️ DO NOT CHANGE.
function qzMode(m){
  QZ.mode=m;
  document.getElementById('m_practice').classList.toggle('on',m==='practice');
  document.getElementById('m_exam').classList.toggle('on',m==='exam');
  document.getElementById('m_practice').setAttribute('aria-pressed',m==='practice');
  document.getElementById('m_exam').setAttribute('aria-pressed',m==='exam');
}
// Shuffles questions/options fairly. ⚠️ DO NOT CHANGE.
function qzShuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];} return a; }

// START button: builds the question deck, applies shuffles, starts the clock. ⚠️ DO NOT CHANGE (180-min cap inside).
function qzBegin(){
  const s=SUBJECTS.find(x=>x.id===QZ.sid), u=s.units[QZ.un-1];
  const shQ=document.getElementById('qsh').checked, shO=document.getElementById('osh').checked;
  let list=u.objective.map((q,i)=>({...q, topic:u.title, _i:i}));
  if(!list.length){ /* questions missing (unit file failed to load?) - explain, never crash */
    document.getElementById('quizRoot').innerHTML=`<div class="card"><h3>Questions could not be loaded</h3>
      <p style="color:var(--muted)">Check your connection and try again.</p>
      <button class="btn" style="margin-top:12px" onclick="rerender()">Try again</button></div>`;
    return;
  }
  if(shQ) list=qzShuffle(list);
  QZ.deck=list.map(q=>{
    if(!shO) return {...q, o:q.o.slice()};
    const ord=qzShuffle(q.o.map((_,i)=>i));
    return {...q, o:ord.map(i=>q.o[i]), a:ord.indexOf(q.a)};
  });
  QZ.srcIdx=QZ.deck.map(q=>q._i); QZ.retry=false;
  QZ.i=0; QZ.ans=new Array(QZ.deck.length).fill(null); QZ.flag=new Array(QZ.deck.length).fill(false);
  QZ.done=false; QZ.revealAll=false; QZ.used=0; QZ.byTime=false;
  const qminEl=document.getElementById('qmin');
// Hard cap: 1-180 min (fallback 10). ⚠️ Quiz default minutes are set on the start screen (see quizStart).
  QZ.sec=Math.min(180,Math.max(1,parseInt(qminEl&&qminEl.value)||10))*60;
  qzRender(); qzTimerStart();
}

/* retry only the questions answered wrongly (and optionally skipped) */
// "Retry wrong" buttons: re-quiz only missed (+ optionally skipped) questions. ⚠️ DO NOT CHANGE.
function qzRetryWrong(incSkipped){
  const pick=[];
  QZ.deck.forEach((q,i)=>{
    const wrong = QZ.ans[i]!==null && QZ.ans[i]!==q.a;
    const skipped = QZ.ans[i]===null;
    if(wrong || (incSkipped && skipped)) pick.push({q, src:QZ.srcIdx[i]});
  });
  if(!pick.length){ alert('Nothing to retry — you answered every question correctly.'); return; }
  clearInterval(QZ.tid);
  QZ.deck=pick.map(p=>({...p.q, o:p.q.o.slice()}));
  QZ.srcIdx=pick.map(p=>p.src);
  QZ.retry=true;
  QZ.i=0; QZ.ans=new Array(QZ.deck.length).fill(null); QZ.flag=new Array(QZ.deck.length).fill(false);
  QZ.done=false; QZ.revealAll=false; QZ.used=0; QZ.byTime=false;
// Retry-wrong timer: 1 min/question, min 3 min. ⚠️ DO NOT CHANGE.
  QZ.sec=Math.max(3,QZ.deck.length)*60;
  qzRender(); qzTimerStart();
  window.scrollTo({top:0,behavior:'smooth'});
}

// Formats seconds as MM:SS. ⚠️ DO NOT CHANGE.
function qzTime(t){ t=Math.max(0,t|0); const m=Math.floor(t/60), sec=t%60;
  return String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0'); }
// Runs the countdown; auto-submits at zero. ⚠️ DO NOT CHANGE.
function qzTimerStart(){
  if(QZ.done) return;
  clearInterval(QZ.tid); QZ.run=true;
  QZ.tid=setInterval(()=>{
    if(QZ.sec>0){ QZ.sec--; QZ.used++; qzClock(); }
    if(QZ.sec<=0){ clearInterval(QZ.tid); QZ.run=false; qzFinish(true); }
  },1000);
  qzClock();
}
// Pauses the countdown. ⚠️ DO NOT CHANGE.
function qzTimerPause(){ clearInterval(QZ.tid); QZ.run=false; qzClock(); }
// Pause/Start button. ⚠️ DO NOT CHANGE.
function qzToggle(){ if(QZ.done) return; QZ.run?qzTimerPause():qzTimerStart(); const b=document.getElementById('qzpause'); if(b) b.textContent=QZ.run?'Pause':'Start'; }
// Paints the clock. ✏️ EDIT HERE: orange at <=300s (5 min), red at <=60s (1 min) - see the toggles below.
function qzClock(){
  const c=document.getElementById('qzclock'); if(!c) return;
  c.textContent=qzTime(QZ.sec);
// ✏️ Clock orange at <=300s (5 min), red at <=60s (1 min) - change numbers to taste.
  c.classList.toggle('warn',QZ.sec<=300&&QZ.sec>60);
  c.classList.toggle('danger',QZ.sec<=60);
  const m=document.getElementById('qzmeta');
  if(m) m.textContent=(QZ.done?'Review':QZ.mode==='exam'?'Exam paper':'Practice')+' · '+(QZ.run?'running':'paused')+' · used '+qzTime(QZ.used);
}

// Decides when answers show (practice = instantly; exam = after submit). ⚠️ DO NOT CHANGE.
function qzRevealed(i){ return QZ.done || QZ.revealAll || (QZ.mode==='practice' && QZ.ans[i]!==null); }

// Draws the quiz screen frame (clock bar + jump grid + card). ⚠️ DO NOT CHANGE.
function qzRender(){
  const root=document.getElementById('quizRoot'); if(!root) return;
  root.innerHTML=`
   <div class="card qtop">
     <div class="qtl"><div class="clock" id="qzclock">${qzTime(QZ.sec)}</div><div class="qtime" id="qzmeta"></div></div>
     <div class="qtb">${QZ.done
       ? '<button class="btn ghost sm" onclick="qzResult()">Back to result</button>'
       : '<button class="btn ghost sm" id="qzpause" onclick="qzToggle()">'+(QZ.run?'Pause':'Start')+'</button><button class="btn sm" onclick="qzConfirm()">Submit</button>'}</div>
     <div class="pwrap"><div class="pbar"><span id="qzfill"></span></div>
       <div class="plab"><span id="qztext"></span><span id="qzlive"></span></div></div>
   </div>
   <div class="card navcard"><div class="nav-title">Jump to question</div>
     <div class="qgrid" id="qzgrid"></div>
     <div class="legend"><i class="lg ansd"></i>Answered <i class="lg flg"></i>Flagged <i class="lg cur"></i>Current</div>
   </div>
   <div class="card qcard" id="qzcard"></div>`;
  qzGrid(); qzCard(); qzClock(); qzProg();
}

// "Jump to question" number buttons + colors. ⚠️ DO NOT CHANGE.
function qzGrid(){
  const g=document.getElementById('qzgrid'); if(!g) return;
  g.innerHTML=QZ.deck.map((q,i)=>{
    let c='qbtn';
    if(i===QZ.i) c+=' cur';
    if(QZ.done) c+=(QZ.ans[i]===q.a?' ok':(QZ.ans[i]===null?' skip':' bad'));
    else{ if(QZ.ans[i]!==null) c+=' ansd'; if(QZ.flag[i]) c+=' flg'; }
    return `<button class="${c}" onclick="qzGo(${i})">${i+1}</button>`;
  }).join('');
}
// Progress bar + "n of t answered" + live practice score. ⚠️ DO NOT CHANGE.
function qzProg(){
  const n=QZ.ans.filter(a=>a!==null).length, t=QZ.deck.length;
  const f=document.getElementById('qzfill'); if(f) f.style.width=(n/t*100)+'%';
  const x=document.getElementById('qztext'); if(x) x.textContent=n+' of '+t+' answered';
  const l=document.getElementById('qzlive');
  if(l && QZ.mode==='practice'){ const sc=QZ.deck.reduce((a,q,i)=>a+(QZ.ans[i]===q.a?1:0),0); l.textContent='Score '+sc+'/'+n; }
  else if(l) l.textContent='';
}

// ONE question card: options (green/red), explanation, Prev/Next/Flag/Save. ✏️ Button + keyboard-hint TEXTS only.
function qzCard(){
  const c=document.getElementById('qzcard'); if(!c) return;
  const q=QZ.deck[QZ.i], rev=qzRevealed(QZ.i), chosen=QZ.ans[QZ.i];
  const lock = QZ.done || (QZ.mode==='practice' && chosen!==null);
  const opts=q.o.map((o,j)=>{
    let cl='opt';
    if(rev && j===q.a) cl+=' right';
    else if(rev && j===chosen && chosen!==q.a) cl+=' wrong';
    else if(!rev && j===chosen) cl+=' sel';
    return `<button type="button" class="${cl}" ${lock?'disabled':''} onclick="qzPick(${j})">
      <span class="key">${String.fromCharCode(65+j)}</span><span>${esc(o)}</span></button>`;
  }).join('');
  let exp='';
  if(rev){
    const ok=chosen===q.a;
    const v=chosen===null?'Not answered.':ok?'Correct.':'Incorrect.';
    exp=`<div class="explain"><p class="verdict"><b style="color:${ok?'var(--ok)':'var(--bad)'}">${v}</b>${ok?'':
      ` The right answer is <b>${String.fromCharCode(65+q.a)}. ${esc(q.o[q.a])}</b>.`}</p>
      <div>${esc(q.e||('Correct answer: '+q.o[q.a]+'.'))}</div></div>`;
  }
  c.innerHTML=`<div class="qmeta"><span class="topic-tag">${esc(q.topic)}</span>
      <span class="hint">Question ${QZ.i+1} of ${QZ.deck.length}</span></div>
    <h2 class="qtext">${esc(q.q)}</h2>
    <div class="opts">${opts}</div>${exp}
    <div class="navb">
      <button class="btn ghost sm" onclick="qzGo(${QZ.i-1})" ${QZ.i===0?'disabled':''}>&larr; Previous</button>
      <button class="btn ghost sm flagb ${QZ.flag[QZ.i]?'on':''}" onclick="qzFlag()">${QZ.flag[QZ.i]?'\u2605 Unflag':'\u2606 Flag'}</button>
      <button class="btn ghost sm savb ${qzSaved()?'on':''}" onclick="qzSave()" title="Save this question for revision">${qzSaved()?'\u2713 Saved':'\u2295 Save'}</button>
      ${QZ.i===QZ.deck.length-1
        ? `<button class="btn sm" onclick="qzConfirm()">${QZ.done?'See result':'Submit'}</button>`
        : `<button class="btn sm" onclick="qzGo(${QZ.i+1})">Next &rarr;</button>`}
    </div>
    <p class="kbd"><kbd>A</kbd>&ndash;<kbd>${String.fromCharCode(64+q.o.length)}</kbd> answer &middot; <kbd>&larr;</kbd> <kbd>&rarr;</kbd> move &middot; <kbd>F</kbd> flag</p>`;
}

// Tapping an answer (practice locks after one tap). ⚠️ DO NOT CHANGE.
function qzPick(j){
  if(QZ.done) return;
  if(QZ.mode==='practice' && QZ.ans[QZ.i]!==null) return;
  QZ.ans[QZ.i]=j; qzCard(); qzGrid(); qzProg();
}
// Jumps to question i. ⚠️ DO NOT CHANGE.
function qzGo(i){ if(i<0||i>=QZ.deck.length) return; QZ.i=i; qzCard(); qzGrid(); const qc=document.getElementById('qzcard'); if(qc) window.scrollTo({top:qc.offsetTop-90,behavior:'smooth'}); }
// Star/flag toggle. ⚠️ DO NOT CHANGE.
function qzFlag(){ QZ.flag[QZ.i]=!QZ.flag[QZ.i]; qzCard(); qzGrid(); }
// Maps retry questions back to originals (for saving). ⚠️ DO NOT CHANGE.
function qzSrc(i){ return QZ.retry ? QZ.srcIdx[i] : i; }
// "Is this question saved?" check. ⚠️ DO NOT CHANGE.
function qzSaved(){ return BM.has(QZ.sid,QZ.un,qzSrc(QZ.i)); }
// Save-for-revision toggle. ⚠️ DO NOT CHANGE.
function qzSave(){ BM.toggle(QZ.sid,QZ.un,qzSrc(QZ.i),QZ.deck[QZ.i]); qzCard(); }
// SUBMIT button + "unanswered?" confirmation. ✏️ Confirm WORDING only.
function qzConfirm(){
  if(QZ.done){ qzResult(); return; }
  const left=QZ.ans.filter(a=>a===null).length;
  if(left&&!confirm(left+' question(s) unanswered. Submit anyway?')) return;
  qzFinish(false);
}
// Scores the paper + saves to history (keeps last 50 - see slice(0,50)). ⚠️ DO NOT CHANGE.
function qzFinish(byTime){
  clearInterval(QZ.tid); QZ.run=false; QZ.done=true; QZ.revealAll=true;
  const s=SUBJECTS.find(x=>x.id===QZ.sid), u=s.units[QZ.un-1];
  const tot=QZ.deck.length;
  const att=QZ.ans.filter(a=>a!==null).length;
  const sc=QZ.deck.reduce((a,q,i)=>a+(QZ.ans[i]===q.a?1:0),0);
  const pct=tot?Math.round(sc/tot*100):0;
  const d=DB.raw(); const rk=DB.skey(); d.r2[rk]=d.r2[rk]||[];
  d.r2[rk].unshift({subject:s.name,unit:u.title,score:sc,total:QZ.deck.length,attempted:att,pct,
    mode:QZ.mode,time:QZ.used,date:new Date().toISOString()});
// ✏️ EDIT HERE: keeps each user's last 50 results - change 50 to keep more/fewer.
  d.r2[rk]=d.r2[rk].slice(0,50); DB.set(d);
  QZ.byTime=byTime; qzResult();
}

// RESULT page: PASS/FAIL ring, correct/wrong/skipped/time, retry buttons, answer review.
// ✏️ EDIT HERE: PASS mark `pass=pct>=40` on the next lines (+ twin `r.pct>=40` in Test History - change BOTH!).
function qzResult(stay){
  const sy=stay?window.scrollY:0;
  const root=document.getElementById('quizRoot');
  const tot=QZ.deck.length, att=QZ.ans.filter(a=>a!==null).length;
  const sc=QZ.deck.reduce((a,q,i)=>a+(QZ.ans[i]===q.a?1:0),0);
  const wrong=att-sc, skip=tot-att;
// ✏️ EDIT HERE: PASS mark is 40% - change 40. ALSO change the twin `r.pct>=40` in Test History!
  const pct=tot?Math.round(sc/tot*100):0, pass=pct>=40;
  root.innerHTML=`
   <div class="card results">
     ${QZ.byTime?'<div class="msg err">Time is up. The paper was submitted automatically.</div>':''}
     <span class="badge">Result</span>
     <div class="ring" style="--p:${pct}"><div class="rin"><div>
       <div class="snum">${sc}/${tot}</div><div class="rsub">${pct}% overall \u00b7 ${att}/${tot} attempted</div></div></div></div>
     <h2 style="color:${pass?'var(--ok)':'var(--bad)'};margin:12px 0 0">${pass?'PASS':'FAIL'}</h2>
     <div class="rgrid">
       <div class="stat"><b style="color:var(--ok)">${sc}</b><span>Correct</span></div>
       <div class="stat"><b style="color:var(--bad)">${wrong}</b><span>Wrong</span></div>
       <div class="stat"><b>${skip}</b><span>Skipped</span></div>
       <div class="stat"><b>${qzTime(QZ.used)}</b><span>Time used</span></div>
     </div>
     <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:18px">
       ${wrong?`<button class="btn accent" onclick="qzRetryWrong(false)">&#8635; Retry ${wrong} wrong</button>`:''}
       ${(wrong+skip)&&skip?`<button class="btn" onclick="qzRetryWrong(true)">Retry wrong + skipped (${wrong+skip})</button>`:''}
       <button class="btn ghost" onclick="QZ.i=0;qzRender()">Review Answers</button>
       <button class="btn ghost" onclick="quizStart(QZ.sid,QZ.un)">Retake all</button>
       <a class="btn ghost" href="#/dashboard/history">Test History</a>
       <a class="btn ghost" href="#/unit/${QZ.sid}/${QZ.un}/study">Back to Notes</a>
     </div>
   </div>
   <div class="card" style="margin-top:16px"><h3 style="color:var(--primary);margin-bottom:10px">Answer Review</h3>
     <div class="review">${QZ.deck.map((q,i)=>{
       const ok=QZ.ans[i]===q.a, na=QZ.ans[i]===null;
       return `<div class="ritem ${na?'na':ok?'ok':'bad'}">
         <h4>Q${i+1}. ${esc(q.q)}</h4>
         <p><b>Your answer:</b> ${na?'<i>Not answered</i>':esc(q.o[QZ.ans[i]])}</p>
         ${ok?'':`<p><b>Correct:</b> ${esc(q.o[q.a])}</p>`}
         <p class="ex">${esc(q.e||'')}</p>
         <button class="btn ghost sm rsav ${BM.has(QZ.sid,QZ.un,QZ.srcIdx[i])?'on':''}"
           onclick="BM.toggle(QZ.sid,QZ.un,QZ.srcIdx[i],QZ.deck[${i}]);qzResult(true)">${BM.has(QZ.sid,QZ.un,QZ.srcIdx[i])?'\u2713 Saved':'\u2295 Save for revision'}</button></div>`;
     }).join('')}</div></div>`;
  if(stay) window.scrollTo(0,sy); else window.scrollTo({top:0,behavior:'smooth'});
}

// QUIZ keyboard: A-E answer, Left/Right move, F flag. ⚠️ DO NOT CHANGE.
document.addEventListener('keydown',e=>{
  if(!document.getElementById('qzcard')||QZ.done) return;
  const k=e.key.toUpperCase();
  if(['A','B','C','D','E'].includes(k)){ const j=k.charCodeAt(0)-65; if(j<QZ.deck[QZ.i].o.length) qzPick(j); }
  else if(e.key==='ArrowLeft') qzGo(QZ.i-1);
  else if(e.key==='ArrowRight') qzGo(QZ.i+1);
  else if(k==='F') qzFlag();
});

// TESTS hub: every unit's "Open Tests" link (automatic). ✏️ Heading texts only.
function pTests(){
  return head('Tests',TOT_TESTS+' tests — one Subject Test and one Objective Test for each of the '+TOT_UNITS+' units')+
  `<section><div class="wrap"><div class="grid g2">${SUBJECTS.map(s=>`<div class="card">
    <div style="display:flex;gap:10px;align-items:center"><div class="ico" style="background:${s.color};margin:0;width:38px;height:38px;font-size:1.1rem">${s.icon}</div><h3>${esc(s.name)}</h3></div>
    ${s.units.map(u=>`<div style="display:flex;gap:8px;align-items:center;padding:8px 0;border-bottom:1px solid var(--line);font-size:.9rem">
      <span style="flex:1">Unit ${u.no}. ${esc(u.title)}</span>
      <a class="btn accent sm" href="#/unit/${s.id}/${u.no}/test">Open Tests</a></div>`).join('')}</div>`).join('')}</div></div></section>`;
}

// NOTICE BOARD + filter buttons. ✏️ Filters MUST stay All/Exam/Result/Admission/Event (must match content.js cats!).
function pNotices(cat){
  const list = (cat&&cat!=='All') ? NOTICES.filter(n=>n.cat===cat) : NOTICES;
  const cats=['All','Exam','Result','Admission','Event'];
  return head('Notice Board','Exam routines, results, admissions and events')+
  `<section><div class="wrap">
    <div class="filters">${cats.map(c=>`<button class="${(cat||'All')===c?'on':''}" onclick="location.hash='#/notice?cat='+'${c}'">${c}</button>`).join('')}</div>
    <div class="grid g2">${list.map(noticeCard).join('')||'<p>No notices.</p>'}</div></div></section>`;
}

// ONE notice + share links + print. ✏️ Contact line + button texts only. Notice TEXT lives in content.js NOTICES.
function pNotice(id){
  const n=NOTICES.find(x=>x.id==id); if(!n) return p404();
  return head(n.title, fdate(n.date)+' · '+n.cat, `<a href="#/notice">Notice</a> / ${esc(n.title)}`)+
  `<section><div class="wrap"><div class="card prose" style="max-width:820px;margin:0 auto">
    <span class="badge">${esc(n.cat)}</span><span style="margin-left:8px;color:var(--muted);font-size:.85rem">${fdate(n.date)}</span>
    <h3>${esc(n.title)}</h3><p>${esc(n.body)}</p>
    <p>For further information please contact the office at ${esc(SITE.phone)} or email ${esc(SITE.email)}.</p>
    <div style="margin-top:16px"><a class="btn ghost" href="#/notice">&larr; All Notices</a>
    <button class="btn" onclick="window.print()">Print</button></div>
    <div style="margin-top:14px;font-size:.85rem;color:var(--muted)">Share: <a href="#" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),'_blank','noopener');return false">Facebook</a> · <a href="#" onclick="window.open('https://twitter.com/intent/tweet?url='+encodeURIComponent(location.href),'_blank','noopener');return false">X</a> · <a href="#" onclick="window.open('https://wa.me/?text='+encodeURIComponent(location.href),'_blank','noopener');return false">WhatsApp</a></div>
  </div></div></section>`;
}

// ABOUT page. ✏️ EDIT HERE: paragraphs + "What We Offer" list. Team PEOPLE live in content.js TEAM.
function pAbout(){
  return head('About Us','Who we are and what we offer')+
  `<section><div class="wrap">
    <div class="card prose" style="margin-bottom:20px">
      <p>Welcome to <b>${esc(SITE.name)}</b>, an educational platform created to provide useful, simple, and accessible learning resources for students and Loksewa preparation aspirants.</p>
      <p>This platform mainly focuses on Loksewa notes, study materials, syllabus, exam results, important updates, Amin Loksewa preparation materials, educational information, study resources, and other useful content related to competitive examinations.</p>
      <p>Our aim is to bring important learning materials together in one place so that students can easily find the information they need for their preparation. We believe that learning becomes easier when quality resources are simple, organized, and accessible.</p>
      <p>Through this platform, we hope to support students in their studies, improve their preparation, and help them move closer to their academic and career goals. Keep learning, keep preparing, and keep improving with <b>${esc(SITE.name)}</b>.</p>
      <h3>What We Offer</h3><ul>
        <li>Federal level and 7 provincial syllabus tracks</li>
        <li>${SUBJECTS.length} subjects covering ${TOT_UNITS} units in total</li>
        <li>Study notes with learning outcomes, examples and key points</li>
        <li>${TOT_TESTS} tests — written subject tests and auto-scored objective tests</li>
        <li>Personal dashboard with progress tracking and test history</li>
        <li>Notice board for exams, results, admissions and events</li></ul>
    </div>
    <div class="shead"><h2>Our Team</h2></div>
    <div class="grid g3">${TEAM.map(t=>`<div class="card tcard">
      <div class="tpic"><img src="${t.img||''}" alt="${esc(t.n)}" loading="lazy"
        onerror="this.parentNode.classList.add('ini');this.remove()"><span>${esc(t.n.split(' ').map(w=>w[0]).join('').slice(0,2))}</span></div>
      <h3>${esc(t.n)}</h3>
      <div class="trole">${esc(t.r)}</div>
      <div class="tmeta">
        <span><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.2L4.2 5.6 12 2.1l7.8 3.5L12 9.2zM2 17l10 5 10-5-2.2-1.1L12 19.6 4.2 15.9 2 17zm0-5l10 5 10-5-2.2-1.1L12 14.6 4.2 10.9 2 12z"/></svg>${esc(t.q||'')}</span>
        ${t.loc?`<span><svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/></svg>${esc(t.loc)}</span>`:''}
      </div>
      ${t.quote?`<blockquote class="tq">${esc(t.quote)}${t.by?`<cite>&mdash; ${esc(t.by)}</cite>`:''}</blockquote>`:''}
    </div>`).join('')}</div>
  </div></section>`;
}

// CONTACT page: owner card + address/phone/email + social + message form.
// ✏️ EDIT HERE: owner name/role, headings, form labels. Photo = SITE.profileImage (content.js).
// ⚠️ "tel:+977..." call-link is HARDCODED here - update it if the phone number changes.
function pContact(){
  const ib = '<span style="display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;background:var(--amber);color:var(--accent-d);font-size:.95rem;margin-right:9px;vertical-align:middle">';
  return head('Get in Touch','We would be glad to hear from you')+
  `<section><div class="wrap">
    <div class="grid g2" style="align-items:start">

      <div class="card prose" style="border-top:3px solid var(--accent)">
        <h3 style="display:flex;align-items:center;gap:8px;font-size:1.2rem">📩 Reach Us</h3>
        <div class="pcard" style="border-bottom:0;padding:6px 0 14px">
          <div class="ppic"><img src="${SITE.profileImage||'images/team1.jpg'}" alt="Shatrudhan Sah"
            loading="lazy" onerror="this.parentNode.classList.add('ini');this.remove()"><span>SS</span></div>
          <div class="pname">Shatrudhan Sah</div>
          <div class="prole">Owner &amp; Admin · Geomatics Engineering</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:11px">
          <p>${ib}📍</span><b>Address:</b> ${esc(SITE.address)}</p>
          <p>${ib}📞</span><b>Phone:</b> <a href="tel:+9779814041813" style="color:var(--primary)">${esc(SITE.phone)}</a></p>
          <p>${ib}✉️</span><b>Email:</b> <a href="mailto:${SITE.email}" style="color:var(--primary)">${esc(SITE.email)}</a></p>
        </div>
        <h3 style="margin-top:18px">Follow Us</h3>
        <div class="fsoc">${SOCIAL.map(s=>`<a class="fsoc--brand" href="${s.url}"><svg viewBox="0 0 24"><path d="${s.icon}"/></svg></a>`).join('')}</div>
      </div>

      <div class="card" style="border-top:3px solid var(--primary)">
        <h3>Send a Message</h3>
        <form id="cform" onsubmit="return sendMsg(event)">
          <div id="cmsg"></div>
          <label for="cf-name">Full Name</label><input id="cf-name" name="name" placeholder="Your name" autocomplete="name" required>
          <label for="cf-email">Email</label><input id="cf-email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required>
          <label for="cf-subject">Subject</label><input id="cf-subject" name="subject" placeholder="How can we help?" required>
          <label for="cf-msg">Message</label><textarea id="cf-msg" name="message" rows="4" placeholder="Write your message…" required></textarea>
          <button class="btn block" id="cbtn" style="margin-top:14px">Send Message</button>
        </form>
      </div>

    </div>
  </div></section>`;
}

// FAQ accordion (built automatically from FAQS). ✏️ Heading only.
function pFaq(){
  return head('FAQ','Frequently asked questions')+
  `<section><div class="wrap" style="max-width:800px">${FAQS.map(f=>`<details class="acc"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('')}</div></section>`;
}

/* ---------------- AUTH ---------------- */
// LOGIN/SIGNUP tabs + forms. ✏️ EDIT HERE: headings, labels, buttons, swap-links. Password rule minlength="6" (3 places incl. forgot form).
function pAuth(tab){
  const on = tab==='signup' ? 'signup' : 'login';
  return head('Log in / Sign up','One place to access your account')+
  `<section><div class="wrap"><div class="form authbox">
    <div class="atabs">
      <button class="${on==='login'?'on':''}" onclick="location.hash='#/auth?t=login'">Log in</button>
      <button class="${on==='signup'?'on':''}" onclick="location.hash='#/auth?t=signup'">Sign up</button>
    </div>
    <div id="m"></div>
    ${on==='login' ? `
      <form onsubmit="doLogin(event)">
        <h2>Welcome back</h2><div class="sub">Log in to continue learning</div>
        <label for="li">Email</label><input id="li" type="email" autocomplete="email" required>
        <label for="lp">Password</label><input id="lp" type="password" autocomplete="current-password" required>
        <div class="row"><label class="chk"><input type="checkbox" id="rm" checked> Remember me</label>
          <a href="#/forgot" style="color:var(--primary)">Forgot password?</a></div>
        <button class="btn block">Log in</button>
        <p class="swap">New here? <a href="#/auth?t=signup">Create a free account</a></p>
      </form>` : `
      <form onsubmit="doReg(event)">
        <h2>Create your account</h2><div class="sub">Free &mdash; save progress and get instant test results</div>
        <label for="rn">Full Name</label><input id="rn" autocomplete="name" required>
        <label for="re">Email</label><input id="re" type="email" autocomplete="email" required>
        <label for="rp">Password</label><input id="rp" type="password" minlength="6" autocomplete="new-password" required>
        <label for="rp2">Confirm Password</label><input id="rp2" type="password" minlength="6" autocomplete="new-password" required>
        <label class="chk" style="margin-top:14px"><input type="checkbox" required>
          I agree to the <a href="#/terms" style="color:var(--primary)">Terms</a></label>
        <button class="btn block" style="margin-top:14px">Sign up</button>
        <p class="swap">Already have an account? <a href="#/auth?t=login">Log in</a></p>
      </form>`}
  </div></div></section>`;
}
// Checks email+password, sets session (remember-me or temporary). ✏️ Error MESSAGE only.
async function doLogin(e){
  e.preventDefault();
  const id=$('#li').value.trim().toLowerCase(), pw=$('#lp').value;
  const d=DB.get(); const u=d.users.find(x=>x.email===id);
  const hp=await sha(pw);
  if(!u||!(u.pass===hp||(!isSha(u.pass)&&u.pass===pw))){ $('#m').innerHTML='<div class="msg err">Invalid email or password. Please try again.</div>'; return }
  if(!isSha(u.pass)&&u.pass!==hp){ u.pass=hp; DB.set(d); }
  const rm=document.getElementById('rm'); DB.setSession(u.email, !rm||rm.checked); nav('#/dashboard');
}
// Creates the account (+ recovery code), rejects duplicates + mismatched passwords. ✏️ Error MESSAGES only.
async function doReg(e){
  e.preventDefault();
  const em=$('#re').value.trim().toLowerCase();
  if($('#rp').value!==$('#rp2').value){ $('#m').innerHTML='<div class="msg err">Passwords do not match.</div>'; return }
  const d=DB.get();
  if(d.users.some(u=>u.email===em)){ $('#m').innerHTML='<div class="msg err">This email is already registered. Please log in instead.</div>'; return }
  d.users.push({name:$('#rn').value.trim(),email:em,mobile:'',course:'',pass:await sha($('#rp').value),code:rid()});
  DB.set(d); DB.setSession(em,true); nav('#/dashboard');
}
// FORGOT-PASSWORD form. ✏️ Labels/buttons only.
function pForgot(){
  return head('Forgot Password','Reset using your registered email')+
  `<section><div class="wrap"><form class="form" onsubmit="doForgot(event)">
    <h2>Reset password</h2><div class="sub">Enter your email, recovery code and a new password</div><div id="m"></div>
    <label for="fe">Registered Email</label><input id="fe" type="email" autocomplete="email" required>
    <label for="fc">Recovery Code</label><input id="fc" placeholder="XXXX-XXXX" autocomplete="off" style="text-transform:uppercase">
    <label for="fp">New Password</label><input id="fp" type="password" minlength="6" autocomplete="new-password" required>
    <button class="btn block" style="margin-top:14px">Reset Password</button></form></div></section>`;
}
// Verifies recovery code, sets the new password. ✏️ MESSAGES only.
async function doForgot(e){
  e.preventDefault(); const d=DB.get();
  const u=d.users.find(x=>x.email===$('#fe').value.trim().toLowerCase());
  if(!u){ $('#m').innerHTML='<div class="msg err">No account found with that email.</div>'; return }
  const fc=($('#fc').value||'').trim().toUpperCase();
  let first=false;
  if(!u.code){ u.code=rid(); first=true; }
  else if(fc!==u.code){ $('#m').innerHTML='<div class="msg err">Incorrect recovery code. Find it on your Profile page while logged in.</div>'; return }
  u.pass=await sha($('#fp').value); DB.set(d);
  $('#m').innerHTML='<div class="msg ok">Password updated. '+(first?('Your new recovery code is <b>'+u.code+'</b> — also saved on your Profile page. '):'')+'You can now <a href="#/auth?t=login">log in</a>.</div>';
}

/* ---------------- DASHBOARD ---------------- */
// DASHBOARD: overview + progress + history + profile (login required).
// ✏️ EDIT HERE: headings, labels, empty texts, "Continue Learning" subjects (SUBJECTS.slice(0,3) inside).
// ⚠️ PASS/FAIL twin `r.pct>=40` in history MUST match the quiz PASS mark (change both together!).
function pDash(view){
  if(need()) return '';
  const u=DB.user(), d=DB.get();
  const myres=(d.r2&&d.r2[d.session||'guest'])||[];
  const nav=`<div class="side">
    <a href="#/dashboard" class="${!view?'on':''}">Overview</a>
    <a href="#/dashboard/progress" class="${view==='progress'?'on':''}">My Progress</a>
    <a href="#/dashboard/history" class="${view==='history'?'on':''}">Test History</a>
    <a href="#/dashboard/profile" class="${view==='profile'?'on':''}">Profile &amp; Settings</a>
    <a href="#" onclick="logout();return false">Logout</a></div>`;
  let body;
  if(view==='progress'){
    body=`<div class="card"><h3>Subject Progress</h3>
      ${SUBJECTS.map(s=>`<div style="margin:14px 0"><div style="display:flex;justify-content:space-between;font-size:.9rem">
        <b>${esc(s.name)}</b><span>${subjPct(s.id)}%</span></div><div class="bar"><i style="width:${subjPct(s.id)}%"></i></div>
        <div style="font-size:.8rem;color:var(--muted);margin-top:4px">${s.units.map(x=>(prog()[s.id+'-'+x.no]?'✓':'○')+' U'+x.no).join(' &nbsp; ')}</div></div>`).join('')}</div>`;
  } else if(view==='history'){
    body=`<div class="card"><h3 style="margin-bottom:12px">Test History</h3>${ myres.length?
      `<table><thead><tr><th>Date</th><th>Subject</th><th>Unit</th><th>Score</th><th>Attempted</th><th>%</th><th>Mode</th><th>Result</th></tr></thead><tbody>
       ${myres.map(r=>`<tr><td>${fdate(r.date)}</td><td>${esc(r.subject)}</td><td>${esc(r.unit)}</td>
       <td>${r.score}/${r.attempted||r.total}</td><td>${r.attempted||r.total}/${r.total}</td><td>${r.pct}%</td><td style="text-transform:capitalize">${esc(r.mode||"—")}</td>
       <td><span class="badge ${r.pct>=40?'ok':'bad'}">${r.pct>=40?'Pass':'Fail'}</span></td></tr>`).join('')}
       </tbody></table>`:'<p style="color:var(--muted)">No tests taken yet. <a href="#/tests" style="color:var(--primary)">Take your first test →</a></p>'}</div>`;
  } else if(view==='profile'){
    body=`<div class="card" style="max-width:460px"><h3>Profile &amp; Settings</h3>
      <form onsubmit="saveProfile(event)"><div id="m"></div>
      <label for="pn">Full Name</label><input id="pn" value="${esc(u.name)}" autocomplete="name" required>
      <label for="pe">Email</label><input id="pe" value="${esc(u.email)}" disabled>
      <label for="pm">Mobile</label><input id="pm" value="${esc(u.mobile||'')}">
      <label for="pc">Syllabus Track</label><select id="pc"><option value="">Not selected</option>${SYLLABUS.map(s=>`<option ${s.title===u.course?'selected':''}>${esc(s.title)}</option>`).join('')}</select>
      <label for="pp">New Password (optional)</label><input id="pp" type="password" autocomplete="new-password">
      <label for="pcode">Recovery Code</label><input id="pcode" value="${esc(u.code||"—")}" disabled title="Needed to reset a forgotten password">
      <button class="btn block" style="margin-top:14px">Save Changes</button></form>
      <button class="btn ghost block" style="margin-top:10px;border-color:var(--bad);color:var(--bad)" onclick="delAcc()">Delete Account</button></div>`;
  } else {
    const done=Object.keys(prog()).length, avg=myres.length?Math.round(myres.reduce((a,b)=>a+b.pct,0)/myres.length):0;
    body=`<div class="card card--brand" style="margin-bottom:16px">
        <h3>Welcome back, ${esc(u.name)} 👋</h3>
        <p>Syllabus track: ${esc(u.course||'Not selected')}</p></div>
      <div class="grid g3" style="margin-bottom:16px">
        <div class="card" style="text-align:center"><b style="font-size:1.9rem;color:var(--primary)">${done}/${TOT_UNITS}</b><p>Units completed</p></div>
        <div class="card" style="text-align:center"><b style="font-size:1.9rem;color:var(--accent)">${myres.length}</b><p>Tests taken</p></div>
        <div class="card" style="text-align:center"><b style="font-size:1.9rem;color:var(--ok)">${avg}%</b><p>Average score</p></div></div>
      <div class="card"><h3>Continue Learning</h3>
        ${SUBJECTS.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--line)">
          <span style="flex:1">${esc(s.name)} — ${subjPct(s.id)}%</span><a class="btn sm ghost" href="#/subject/${s.id}">Open</a></div>`).join('')}</div>
      <div class="card" style="margin-top:16px"><h3>Notices For You</h3>
        ${NOTICES.slice(0,3).map(n=>`<div style="padding:8px 0;border-bottom:1px solid var(--line);font-size:.9rem">
          <a href="#/notice/${n.id}"><b>${esc(n.title)}</b></a> <span style="color:var(--muted)">— ${fdate(n.date)}</span></div>`).join('')}</div>`;
  }
  return head('Dashboard','Your learning at a glance')+
    `<section><div class="wrap"><div class="split">${nav}<div>${body}</div></div></div></section>`;
}
// Saves profile fields (+ new password if typed). ✏️ "Profile saved." message only.
async function saveProfile(e){
  e.preventDefault(); const d=DB.get(); const u=d.users.find(x=>x.email===d.session);
  if(!u) return;
  u.name=$('#pn').value; u.mobile=$('#pm').value; u.course=$('#pc').value;
  if(!u.code) u.code=rid();
  if($('#pp').value) u.pass=await sha($('#pp').value);
  DB.set(d); $('#m').innerHTML='<div class="msg ok">Profile saved.</div>'; shell();
}
// Deletes account + all its data after confirmation. ✏️ Confirm WORDING only.
function delAcc(){
  if(!confirm('Delete your account and all progress?')) return;
  const d=DB.raw(); const em=DB.get().session;
  d.users=d.users.filter(x=>x.email!==em);
  if(em){ delete d.p2[em]; delete d.r2[em]; delete d.b2[em]; }
  d.session=null;
  try{ localStorage.setItem(DB.k,JSON.stringify(d)); }catch(e){}
  try{ sessionStorage.removeItem(DB.k+'-s'); }catch(e){}
  nav('#/');
}

// PRIVACY/TERMS/COPYRIGHT/DISCLAIMER renderer. TEXT lives in content.js LEGAL. ✏️ Cross-link labels only.
function pLegal(key){
  const L = (typeof LEGAL!=='undefined' && LEGAL[key]) ? LEGAL[key] : null;
  if(!L) return p404();
  return head(L.title)+`<section><div class="wrap">
    <div class="card prose legal" style="max-width:860px;margin:0 auto">${L.body}</div>
    <p style="text-align:center;margin-top:18px;font-size:.88rem">
      <a href="#/privacy" style="color:var(--primary)">Privacy Policy</a> &nbsp;·&nbsp;
      <a href="#/terms" style="color:var(--primary)">Terms &amp; Conditions</a> &nbsp;·&nbsp;
      <a href="#/disclaimer" style="color:var(--primary)">Disclaimer</a> &nbsp;·&nbsp;
      <a href="#/copyright" style="color:var(--primary)">Copyright</a> &nbsp;·&nbsp;
      <a href="#/contact" style="color:var(--primary)">Contact</a></p>
  </div></section>`;
}
// "Page Not Found" page. ✏️ Texts only.
function p404(){ return head('Page Not Found')+`<section><div class="wrap" style="text-align:center">
  <p style="margin-bottom:16px">The page you are looking for does not exist.</p><a class="btn" href="#/">Back to Home</a></div></section>` }


/* ---------------- THEME (light / dark) ---------------- */
// Browser key remembering light/dark choice. ⚠️ DO NOT CHANGE.
const THEME_KEY='amin-theme';
// Reads saved theme. ⚠️ DO NOT CHANGE.
function themeGet(){ try{ return localStorage.getItem(THEME_KEY) }catch(e){ return null } }
// Applies light/dark (+ phone browser bar color). ⚠️ DO NOT CHANGE (colors live in CSS).
function themeApply(t){
  document.documentElement.setAttribute('data-theme', t);
  const m=document.querySelector('meta[name="theme-color"]');
  if(m) m.setAttribute('content', t==='dark' ? '#080E19' : '#0B1F38');
  document.querySelectorAll('.tgl.theme').forEach(b=>{
    b.setAttribute('aria-label', t==='dark'?'Switch to light mode':'Switch to dark mode');
    b.setAttribute('title', t==='dark'?'Light mode':'Dark mode');
  });
}
// Sun/moon button: flips theme + saves choice. ⚠️ DO NOT CHANGE.
function themeToggle(){
  const cur=document.documentElement.getAttribute('data-theme')==='dark'?'dark':'light';
  const next=cur==='dark'?'light':'dark';
  document.documentElement.classList.add('tswap');
  setTimeout(()=>document.documentElement.classList.remove('tswap'),320);
  try{ localStorage.setItem(THEME_KEY,next) }catch(e){}
  themeApply(next);
}
// Header sun/moon button picture (two SVGs, CSS shows one). ⚠️ DO NOT CHANGE.
function themeBtn(){
  return `<button class="tgl theme" onclick="themeToggle()" aria-label="Toggle theme">
    <svg class="i-sun" viewBox="0 0 24 24"><path d="M12 17a5 5 0 100-10 5 5 0 000 10zm0 2.5a1 1 0 011 1V22a1 1 0 11-2 0v-1.5a1 1 0 011-1zm0-19a1 1 0 011 1V3a1 1 0 11-2 0V1.5a1 1 0 011-1zM20.5 11H22a1 1 0 110 2h-1.5a1 1 0 110-2zM2 11h1.5a1 1 0 110 2H2a1 1 0 110-2zm15.8-6.3a1 1 0 011.4 1.4l-1 1a1 1 0 11-1.5-1.4zM4.8 17.8a1 1 0 011.4 1.4l-1 1a1 1 0 11-1.4-1.4zm14.4 1.4a1 1 0 01-1.4 1.4l-1-1a1 1 0 011.4-1.4zM6.2 4.7a1 1 0 01-1.4 1.5l-1-1a1 1 0 011.4-1.4z"/></svg>
    <svg class="i-moon" viewBox="0 0 24 24"><path d="M21 13.2A9 9 0 1110.8 3a7 7 0 1010.2 10.2z"/></svg>
  </button>`;
}

/* ---------------- BACK TO TOP ---------------- */
// Back-to-top smooth scroll. ⚠️ DO NOT CHANGE.
function toTop(){ window.scrollTo({top:0,behavior:'smooth'}); }
// Shows the back-to-top button after scrolling. ✏️ EDIT HERE: appear-after `y>320` (pixels) below.
function initTop(){
  const b=document.getElementById('toTop'); if(!b) return;
  const upd=()=>{
    const y=window.scrollY||document.documentElement.scrollTop;
    const h=document.documentElement.scrollHeight-window.innerHeight;
    b.classList.toggle('on', y>320);
    b.style.setProperty('--sp', h>0 ? Math.min(100,(y/h)*100)+'%' : '0%');
  };
  window.addEventListener('scroll',upd,{passive:true});
  window.addEventListener('resize',upd,{passive:true});
  upd();
}

/* ---------------- ROUTER ---------------- */
let NAV_SEQ=0; /* navigation token: a stale async load never paints over a newer page */
// PAGE ROUTER: reads the #... address, lazy-loads that page's unit files, then draws the page. Stops quiz clock + slider on move.
// ✏️ New pages/routes need coding help - see the route map above switch(p[0]) below. ⚠️ Do not reorder cases carelessly.
async function router(){
  const my=++NAV_SEQ;
  clearInterval(QZ.tid); QZ.run=false; /* stop any running quiz clock when navigating */
  clearInterval(timer);                 /* stop the hero slider when leaving home */
  document.onkeydown=null;              /* release the slider arrow-key handler */
  const raw=(location.hash||'#/').slice(1);
  const qi=raw.indexOf('?'); const path=qi<0?raw:raw.slice(0,qi); const qs=qi<0?'':raw.slice(qi+1);
  const q=new URLSearchParams(qs||'');
  const p=path.split('/').filter(Boolean);
  /* lazy data: fetch ONLY this page's unit files before rendering (the old page
     stays visible meanwhile, so there is no flash). Unknown ids = no-op. */
  try{
    if(p[0]==='unit'&&p[1]) await needUnit(p[1],+p[2]);
    else if(p[0]==='subject'&&p[1]) await needSubject(p[1]);
    else if(p[0]==='search') await needAll();
  }catch(e){/* fail soft: pages render with whatever data is already present */}
  if(my!==NAV_SEQ) return; /* user already navigated onward - drop this render */
  shell();

  let html;
// ---- ROUTE MAP (address -> page function). 23 routes: ----
// #/ =home #/syllabus #/subjects #/subject/<id> #/unit/<sid>/<no>/study|test #/tests
// #/notice #/notice/<id> #/about #/contact #/faq #/search #/saved #/auth #/login #/register
// #/forgot #/dashboard(+/progress|/history|/profile) #/privacy #/terms #/copyright #/disclaimer, else 404.
  switch(p[0]){
    case undefined: html=pHome(); break;
    case 'syllabus': html = p[1]?pSyllabus(p[1]):pSyllabusList(); break;
    case 'subjects': html=pSubjects(); break;
    case 'subject':  html=pSubject(p[1]); break;
    case 'unit':     html=pUnit(p[1],+p[2],p[3]); break;
    case 'tests':    html=pTests(); break;
    case 'notice':   html = p[1]?pNotice(p[1]):pNotices(q.get('cat')); break;
    case 'about':    html=pAbout(); break;
    case 'contact':  html=pContact(); break;
    case 'faq':      html=pFaq(); break;
    case 'search':   html=pSearch(q.get('q')||''); break;
    case 'saved':    html=pSaved(); break;
    case 'auth':     html=pAuth(q.get('t')); break;
    case 'login':    html=pAuth('login'); break;
    case 'register': html=pAuth('signup'); break;
    case 'forgot':   html=pForgot(); break;
    case 'dashboard':html=pDash(p[1]); break;
    case 'privacy':  html=pLegal('privacy'); break;
    case 'terms':    html=pLegal('terms'); break;
    case 'copyright':html=pLegal('copyright'); break;
    case 'disclaimer':html=pLegal('disclaimer'); break;
    default: html=p404();
  }
  $('#app').innerHTML=html;
  const nv=document.querySelector('nav.main');
  if(nv) nv.classList.remove('open');
  document.body.classList.remove('navopen');
  closeMenus();
  window.scrollTo(0,0);
  if(p[0]===undefined) initSlider();
  if(p[0]==='unit'&&p[3]==='test'){ clearInterval(QZ.tid); quizStart(p[1],+p[2]); }
}

/* ---------------- SLIDER ---------------- */
// Slider memory: current slide (idx) + auto-play clock (timer). ⚠️ DO NOT CHANGE.
let idx=0, timer=null;
// Shows slide number i + lights its dot. ⚠️ DO NOT CHANGE.
function goTo(i){
  idx=(i+SLIDES.length)%SLIDES.length;
  const el=document.getElementById('slides'); if(!el) return;
  el.style.transform=`translateX(-${idx*100}%)`;
  el.querySelectorAll('.slide').forEach((d,j)=>d.classList.toggle('act',j===idx));
  document.querySelectorAll('#dots button').forEach((d,j)=>d.classList.toggle('on',j===idx));
}
// Arrow buttons: move n slides + restart auto-play. ⚠️ DO NOT CHANGE.
function go(n){ goTo(idx+n); restart(); }
// (Re)starts auto-play. ✏️ EDIT HERE: `5000` = slide changes every 5 seconds (milliseconds).
function restart(){ clearInterval(timer); timer=setInterval(()=>goTo(idx+1),5000) }
// Starts the slider: first slide + auto-play + hover-pause + mobile swipe + arrow keys. ⚠️ DO NOT CHANGE.
function initSlider(){
  idx=0; goTo(0); restart();
  const s=document.getElementById('slider'); if(!s) return;
  s.onmouseenter=()=>clearInterval(timer); s.onmouseleave=restart;
  let x0=null,y0=null,lock=null;
  s.addEventListener('touchstart',e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY;lock=null;clearInterval(timer)},{passive:true});
  s.addEventListener('touchmove',e=>{
    if(x0===null) return;
    const dx=e.touches[0].clientX-x0, dy=e.touches[0].clientY-y0;
    if(lock===null) lock=Math.abs(dx)>Math.abs(dy)?'x':'y';
  },{passive:true});
  s.addEventListener('touchend',e=>{
    if(x0===null) return;
    const dx=e.changedTouches[0].clientX-x0;
    if(lock==='x'&&Math.abs(dx)>45) goTo(idx+(dx<0?1:-1));
    x0=null; restart();
  },{passive:true});
  document.onkeydown=e=>{ if(!document.getElementById('slides')) return; if(e.key==='ArrowLeft')go(-1); if(e.key==='ArrowRight')go(1); };
}

// Closes menus/dropdowns on outside-tap. ⚠️ DO NOT CHANGE.
document.addEventListener('click',e=>{
  if(!e.target.closest('#uwrap')) document.getElementById('uwrap')?.classList.remove('open');
  if(!e.target.closest('nav.main .item')) closeMenus();
  const nv=document.getElementById('nav');
  if(nv&&nv.classList.contains('open')&&!e.target.closest('header')) toggleNav();
});
// Escape key closes mobile menu / dropdowns. ⚠️ DO NOT CHANGE.
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){ const nv=document.getElementById('nav'); if(nv&&nv.classList.contains('open')) toggleNav(); else closeMenus(); }
});
// Any #... address change redraws the page. ⚠️ DO NOT CHANGE.
window.addEventListener('hashchange',router);

// STARTUP: apply saved theme, watch phone dark-mode, back-to-top button, draw first page. ⚠️ DO NOT CHANGE.
/* boot */
themeApply(document.documentElement.getAttribute('data-theme')||'light');
if(window.matchMedia){
  const mq=window.matchMedia('(prefers-color-scheme:dark)');
  const onOS=e=>{ if(!themeGet()) themeApply(e.matches?'dark':'light'); };
  mq.addEventListener ? mq.addEventListener('change',onOS) : mq.addListener(onOS);
}
initTop();
router();
// Auto-focuses the search box on the search page. ⚠️ DO NOT CHANGE.
window.addEventListener('hashchange',()=>{
  if(location.hash.indexOf('#/search')===0){ const i=document.getElementById('sq'); if(i&&!i.value) i.focus(); }
});
