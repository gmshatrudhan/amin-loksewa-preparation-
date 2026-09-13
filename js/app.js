/* ================= APP (design + logic). content.js + data-manifest.js load before this. ================= */
/* Question bank: 81 per-unit files (mcq + subjective + study), lazy-loaded per page - see LAZY DATA LOADER. */
/* ==== QUESTION BANK: 451 MCQ + 135 written total, all with explanations ==== */


/* ---- 6 SUBJECTS: sub1-sub3 x 5 units, sub4 x 3, sub5 x 5, sub6 x 4 (27 units) ---- */


/* ============================================================
   SUBJECTS + UNITS - unit titles below must match data-file keys exactly.
   (Site texts live in js/content.js: name, phone, notices, FAQs, team, slides, legal.)
   ============================================================ */


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

const SUBJECTS = [
  { id:"sub1", name:"General Awareness", icon:"🌏", color:"#0E3A5F",
    desc:"नेपालको भूगोल, इतिहास, अर्थतन्त्र, विज्ञान, संविधान र समसामयिक विषयहरू।",
    units: mkUnits("General Awareness",[
      "नेपालको भूगोल तथा प्राकृतिक स्रोत",
      "नेपालको इतिहास, संस्कृति तथा समाज",
      "नेपालको अर्थतन्त्र तथा विकास",
      "विज्ञान, प्रविधि तथा वातावरण",
      "संविधान, अन्तर्राष्ट्रिय सम्बन्ध तथा समसामयिक विषय"]) },

  { id:"sub2", name:"Public Management", icon:"🏛", color:"#0E7C6B",
    desc:"कार्यालय व्यवस्थापन, निजामती सेवा, बजेट र लेखा, सुशासन तथा नेतृत्व।",
    units: mkUnits("Public Management",[
      "कार्यालय व्यवस्थापन तथा कार्यविधि",
      "निजामती सेवा तथा सरकारी प्रशासन",
      "सरकारी बजेट, लेखा तथा लेखापरीक्षण",
      "सार्वजनिक सेवा तथा सुशासन",
      "व्यवस्थापन, नेतृत्व तथा नागरिक मूल्य"]) },

  { id:"sub3", name:"Surveying Methodology and Mapping", icon:"📐", color:"#A8861A",
    desc:"Introduction of surveying, chain survey, plane table, tachometric survey and mapping.",
    units: mkUnits("Surveying Methodology and Mapping",[
      "Introduction of Surveying",
      "Chain Survey",
      "Plane Table Survey",
      "Tachometric Survey",
      "Mapping"]) },

  { id:"sub4", name:"Land Administration, Cadastral Survey and Land Records", icon:"⚖", color:"#3F3D8A",
    desc:"Acts, rules, directives and circulars with cadastral survey and land record management.",
    units: mkUnits("Land Administration, Cadastral Survey and Land Records",[
      "Legislation (Acts, Rules, Directives, Circulars, SoP)",
      "Cadastral Survey",
      "Land Records"]) },

  { id:"sub5", name:"Mathematics and Instruments", icon:"🧮", color:"#8A2A4A",
    desc:"General mathematics, algebra, geometry, trigonometry, surveying maths and instruments.",
    units: mkUnits("Mathematics and Instruments",[
      "Mathematics (General)",
      "Mathematics (Algebra & Geometry)",
      "Mathematics (Trigonometry)",
      "Mathematics (Surveying)",
      "Instruments & Its Maintenance"]) },

  { id:"sub6", name:"Control Survey", icon:"🧭", color:"#17527F",
    desc:"Compass survey, traverse and triangulation, GNSS and levelling.",
    units: mkUnits("Control Survey",[
      "Compass Survey Introduction",
      "Traverse and Triangulation",
      "GNSS",
      "Levelling"]) }
];


/* ============================================================
   APP — clean-URL + hash hybrid SPA (works on GitHub Pages, no server)
   ============================================================ */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fdate = d => new Date(d).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});

/* ---------------- STORE (localStorage) ---------------- */
const DB = {
  k:'amin',
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
const isSha = s => /^[0-9a-f]{64}$/.test(s||'');
/* readable recovery code for the forgot-password flow */
function rid(){ const c='ABCDEFGHJKMNPQRSTUVWXYZ23456789'; let s=''; const a=new Uint32Array(8);
  try{ crypto.getRandomValues(a); }catch(e){ for(let i=0;i<8;i++) a[i]=(Math.random()*4294967296)|0; }
  for(let i=0;i<8;i++) s+=c[a[i]%c.length]; return s.slice(0,4)+'-'+s.slice(4); }

/* ---------------- BOOKMARKS (saved questions) ---------------- */
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
    /* root-absolute so lazy data loads from clean URLs too (/subject/x, /unit/...) */
    el.src=/^https?:|^\/\//.test(src)?src:(src[0]==='/'?src:'/'+src); el.async=true;
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
let SEARCH_IX=null;
function searchIndex(){
  if(SEARCH_IX) return SEARCH_IX;
  const ix=[];
  SUBJECTS.forEach(s=>{
    ix.push({t:'Subject', title:s.name, sub:s.desc||'', url:'/subject/'+s.id, sname:s.name});
    s.units.forEach(u=>{ try{
      ix.push({t:'Unit', title:u.title, sub:s.name+' · Unit '+u.no, url:'/unit/'+s.id+'/'+u.no+'/study', sname:s.name,
               body:(u.outcomes||[]).join(' ')+' '+(u.keypoints||[]).join(' ')+' '+
                    (Array.isArray(u.content)?u.content.map(c=>(c.h||'')+' '+(c.p||'')).join(' '):'')});
      u.objective.forEach((q,i)=>ix.push({t:'MCQ', title:q.q, sub:u.title, url:'/#/unit/'+s.id+'/'+u.no+'/test', sname:s.name, body:q.o.join(' ')+' '+(q.e||'')}));
      u.subjective.forEach(q=>ix.push({t:'Written', title:q.q, sub:u.title+' · '+q.marks+' marks', url:'/#/unit/'+s.id+'/'+u.no+'/test', sname:s.name, body:q.hint||''}));
    }catch(e){/* skip a malformed unit: one bad file must not kill search */} });
  });
  SYLLABUS.forEach(x=>ix.push({t:'Syllabus', title:(x.label||x.title)+' Syllabus ('+(x.year||'2082')+')', sub:x.desc||'', url:'/syllabus/'+x.id, sname:''}));
  NOTICES.forEach(n=>ix.push({t:'Notice', title:n.title, sub:n.date+' · '+n.cat, url:'/notice/'+n.id, sname:''}));
  FAQS.forEach((f,i)=>ix.push({t:'FAQ', title:f.q, sub:'Frequently asked', url:'/faq', sname:'', body:f.a}));
  SEARCH_IX=ix; return ix;
}
function searchRun(term){
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
  }).filter(Boolean).sort((a,b)=>b.sc-a.sc).slice(0,40).map(x=>x.it);
}
function hl(text,term){
  const raw=String(text||''); const q=(term||'').trim(); if(q.length<2) return esc(raw);
  try{
    const rx=new RegExp(q.split(/\s+/).map(w=>w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'ig');
    let out='',last=0,m; rx.lastIndex=0;
    while((m=rx.exec(raw))){ out+=esc(raw.slice(last,m.index))+'<mark>'+esc(m[0])+'</mark>'; last=m.index+m[0].length; if(!m[0].length) rx.lastIndex++; }
    return out+esc(raw.slice(last));
  }catch(e){ return esc(raw) }
}
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
function searchHTML(res,q,groups){
  if(q.trim().length<2) return '<p class="shint">Start typing to search across '+searchIndex().length+' items — subjects, units, study notes, MCQs, written questions, syllabus and notices.</p>';
  if(!res.length) return '<div class="card"><p>No results for <b>'+esc(q)+'</b>. Try a different word.</p></div>';
  return '<p class="shint">'+res.length+' result'+(res.length>1?'s':'')+' for <b>'+esc(q)+'</b></p>'+
    Object.keys(groups).map(t=>`<div class="sgrp"><h3>${t} <span>${groups[t].length}</span></h3>
      ${groups[t].map(r=>`<a class="sres" href="${r.url}">
        <span class="stag">${r.t}</span>
        <span class="sbody"><b>${hl(r.title,q)}</b><i>${hl(r.sub,q)}</i></span></a>`).join('')}</div>`).join('');
}
function searchLive(v){
  const box=document.getElementById('sres'); if(!box) return;
  const res=searchRun(v), groups={};
  res.forEach(r=>{ (groups[r.t]=groups[r.t]||[]).push(r) });
  box.innerHTML=searchHTML(res,v,groups);
  if(location.hash.indexOf('#/search')===0) history.replaceState(null,'','/#/search?q='+encodeURIComponent(v));
}

/* ---------------- SAVED QUESTIONS PAGE ---------------- */
function pSaved(){
  const list=BM.all();
  return head('Saved Questions','Bookmarked questions to revise before the exam')+
  `<section><div class="wrap">
    ${!list.length?`<div class="card"><p>You have not saved any question yet.</p>
      <p style="color:var(--muted);font-size:.9rem;margin-top:6px">While taking any MCQ test, tap the <b>Save</b> icon on a question to keep it here for revision.</p>
      <a class="btn" style="margin-top:14px" href="/subjects">Browse Subjects</a></div>`
    : `<div class="sbar"><span>${list.length} saved question${list.length>1?'s':''}</span>
        <button class="btn ghost sm" onclick="if(confirm('Remove all saved questions?')){BM.clear();rerender()}">Clear all</button></div>
      ${list.map(b=>`<div class="card svq">
        <div class="svh"><span class="badge">${esc(b.subject)}</span><span class="svu">${esc(b.unit)}</span>
          <button class="svx" title="Remove" onclick="BM.remove('${b.id}');rerender()">&times;</button></div>
        <h4>${esc(b.q)}</h4>
        <ol class="svo">${(b.o||[]).map((o,i)=>`<li class="${i===b.a?'right':''}">${esc(o)}</li>`).join('')}</ol>
        ${b.e?`<p class="sve ex">${esc(b.e)}</p>`:''}
        <a class="btn ghost sm" href="/#/unit/${b.sid}/${b.un}/test">Go to this unit</a>
      </div>`).join('')}`}
  </div></section>`;
}

/* ---------------- CONTACT FORM ---------------- */
async function sendMsg(e){
  e.preventDefault();
  const f=e.target, btn=document.getElementById('cbtn'), box=document.getElementById('cmsg');
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

function doSubscribe(e){
  e.preventDefault();
  const inp=document.getElementById('nl-email'); const em=((inp&&inp.value)||'').trim().toLowerCase();
  if(!em) return false;
  try{ const k='amin-nl'; const l=JSON.parse(localStorage.getItem(k)||'[]'); if(!l.includes(em)){ l.push(em); localStorage.setItem(k,JSON.stringify(l)); } }catch(err){}
  const ok=document.getElementById('nl-ok'); if(ok) ok.hidden=false;
  try{ e.target.reset(); }catch(err){}
  return false;
}

/* ---------------- SHELL ---------------- */
const LOGO_SVG='<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" stroke-width="3"/><path d="M24 7v34M7 24h34" stroke="currentColor" stroke-width="2" opacity=".55"/><path d="M24 12l6.5 17L24 25.5 17.5 29z" fill="currentColor"/><circle cx="24" cy="24" r="3.2" fill="#F5A524"/></svg>';
const CARET='<b class="car"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></b>';
function socialSVG(s,cls){ return `<a${cls?' class="'+cls+'"':''} href="${s.url}" title="${s.name}" aria-label="${s.name}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="${s.icon}"/></svg></a>` }

function shell(){
  const u = DB.user();
  const syl = SYLLABUS.map(s=>`<a href="/syllabus/${s.id}">${s.emoji||''} ${esc(s.label||s.title)} <small>(${esc(s.year||'2082')})</small></a>`).join('');
  const sub = SUBJECTS.map(s=>`<a href="/subject/${s.id}">${esc(s.name)} <small>(${s.units.length} units)</small></a>`).join('');
  const tick = NOTICES.slice(0,3).map(n=>`<b>&#9679;</b>${esc(n.title)}`).join(' &nbsp;&nbsp; ');

  $('#topbar').innerHTML = `<div class="wrap">
    <div class="ticker"><span><b>NOTICE</b>${tick} &nbsp;&nbsp; <b>NOTICE</b>${tick} &nbsp;&nbsp; </span></div>
    <div class="tsoc">${SOCIAL.map(s=>socialSVG(s)).join('')}</div>
  </div>`;

  $('#header').innerHTML = `<div class="wrap">
    <a class="logo" href="/"><span class="mk">${LOGO_SVG}</span><span class="tx"><b>${esc(SITE.name)}</b><i>${esc(SITE.tagline)}</i></span></a>
    <button class="burger" onclick="toggleNav()" aria-label="Menu" aria-expanded="false" aria-controls="nav">&#9776;</button>
    <nav class="main" id="nav">
      <div class="item"><a class="lnk" href="/">Home</a></div>
      <div class="item" data-m="syl"><button class="lnk mbtn" aria-haspopup="true" aria-expanded="false" onclick="menu('syl',event)">Syllabus ${CARET}</button><div class="drop">${syl}</div></div>
      <div class="item" data-m="sub"><button class="lnk mbtn" aria-haspopup="true" aria-expanded="false" onclick="menu('sub',event)">Subjects ${CARET}</button><div class="drop">${sub}</div></div>
      <div class="item" data-m="tst"><button class="lnk mbtn" aria-haspopup="true" aria-expanded="false" onclick="menu('tst',event)">Tests ${CARET}</button><div class="drop">
        <a href="/#/tests">All Tests</a><a href="/#/dashboard/history">My Results</a></div></div>
      <div class="item"><a class="lnk" href="/notice">Notice</a></div>
      <div class="item" data-m="abt"><button class="lnk mbtn" aria-haspopup="true" aria-expanded="false" onclick="menu('abt',event)">About ${CARET}</button><div class="drop">
        <a href="/about">About Us</a><a href="/contact">Contact</a><a href="/faq">FAQ</a></div></div>
    </nav>
    <div class="hact">
      <div class="icons">
      <a class="tgl srchb" href="/#/search" aria-label="Search" title="Search">
        <svg viewBox="0 0 24 24"><path d="M10 2a8 8 0 105.3 14l5.4 5.4 1.4-1.4-5.4-5.4A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/></svg>
      </a>
      <a class="tgl srchb" href="/#/saved" aria-label="Saved questions" title="Saved questions">
        <svg viewBox="0 0 24 24"><path d="M6 2h12a1 1 0 011 1v18l-7-4-7 4V3a1 1 0 011-1z"/></svg>
      </a>${themeBtn()}</div>${ u ? `<div class="uwrap" id="uwrap">
        <button type="button" class="avatar" aria-haspopup="true" aria-expanded="false" onclick="var w=document.getElementById('uwrap');w.classList.toggle('open');this.setAttribute('aria-expanded',w.classList.contains('open'))">${esc((u.name||'U')[0].toUpperCase())}</button>
        <div class="udrop"><a href="/#/dashboard">Dashboard</a><a href="/#/dashboard/progress">My Progress</a>
        <a href="/#/dashboard/history">Test History</a><a href="/#/saved">Saved Questions</a><a href="/#/dashboard/profile">Profile</a>
        <a href="#" onclick="logout();return false">Logout</a></div></div>`
      : `<a class="btn sm prof" href="/#/auth" title="Log in or create an account">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.5-8 5.5V21h16v-1.5c0-3-3.6-5.5-8-5.5z"/></svg>
          <span>Profile</span></a>` }</div>
  </div>`;

  $('#footer').innerHTML = `<div class="wrap">
    <div class="grid g4">
      <div><div class="logo"><span class="mk">${LOGO_SVG}</span><span class="tx"><b style="color:#fff">${esc(SITE.name)}</b><i style="color:#8ea0c4">${esc(SITE.tagline)}</i></span></div>
        <p style="font-size:.87rem;margin-top:12px">Amin Loksewa Preparation provides notes, MCQs, syllabus, important questions, and exam-focused study materials to help you prepare effectively for the Amin Loksewa exam !!!</p>
        <div class="fsoc">${SOCIAL.map(s=>socialSVG(s)).join('')}</div></div>
      <div><h4>Quick Links</h4><a href="/">Home</a><a href="/syllabus">Syllabus</a><a href="/subjects">Subjects</a>
        <a href="/#/tests">Tests</a><a href="/#/search">Search</a><a href="/#/saved">Saved Questions</a><a href="/notice">Notice</a><a href="/about">About</a></div>
      <div><h4>Subjects</h4>${SUBJECTS.map(s=>`<a href="/subject/${s.id}">${esc(s.name)}</a>`).join('')}</div>
      <div><h4>Contact</h4><a href="/contact">${esc(SITE.address)}</a><a href="tel:${SITE.phone.replace(/\s/g,'')}">${esc(SITE.phone)}</a>
        <a href="mailto:${SITE.email}">${esc(SITE.email)}</a>
        <form class="nl" onsubmit="return doSubscribe(event)"><input type="email" id="nl-email" name="nl-email" placeholder="Your email" aria-label="Your email" required><button class="btn accent sm">Go</button></form><p class="nl-ok" id="nl-ok" hidden>Thank you for subscribing!</p></div>
    </div>
    <div class="fbot"><span><a href="/#/copyright" class="cpy">${esc(SITE.copyright)}</a></span>
      <span><a href="/about">About</a><a href="/contact">Contacts</a><a href="/#/privacy">Privacy Policy</a><a href="/#/terms">Terms &amp; Conditions</a><a href="/#/disclaimer">Disclaimer</a></span></div>
    <div class="fmade"><b>CREATED BY SHATRUDHAN SAH</b></div>
  </div>`;
}
function menu(k,e){
  e.preventDefault(); e.stopPropagation();
  const it=document.querySelector('.item[data-m="'+k+'"]');
  const wasOpen=it.classList.contains('open');
  document.querySelectorAll('nav.main .item').forEach(x=>x.classList.remove('open'));
  if(!wasOpen) it.classList.add('open');
  document.querySelectorAll('nav.main .mbtn').forEach(b=>b.setAttribute('aria-expanded',b.closest('.item').classList.contains('open')));
}
function closeMenus(){ document.querySelectorAll('nav.main .item').forEach(x=>x.classList.remove('open'));
  document.querySelectorAll('nav.main .mbtn').forEach(b=>b.setAttribute('aria-expanded','false')); }
function toggleNav(){
  const n=document.getElementById('nav'); n.classList.toggle('open');
  document.body.classList.toggle('navopen',n.classList.contains('open'));
  const bg=document.querySelector('.burger'); if(bg) bg.setAttribute('aria-expanded',n.classList.contains('open'));
  if(!n.classList.contains('open')) closeMenus();
}
function logout(){ try{ SB.signOutUser(); }catch(e){} DB.clearSession(); nav('/'); }
/* SPA navigation: pushState for clean paths AND root-hash app URLs (no reload).
   goPage('/syllabus') -> clean public page; goPage('/#/tests') -> hash-only app page */
function goPage(url){
  if(url[0]==='#'){ if(location.hash===url){router();} else {location.hash=url;} return; }
  if(location.pathname+location.search+location.hash===url){ router(); return; }
  history.pushState(null,'',url); router();
}
function nav(h){ goPage(h); }
function rerender(){ const y=window.scrollY||0; router(); window.scrollTo(0,y); }

/* ---------------- HELPERS ---------------- */
const head = (t,s,c,ico) => `<div class="pghead"><div class="wrap">
  <div class="crumb"><a href="/">Home</a> / ${c||esc(t)}</div>
  <h1>${ico?ico+' ':''}${esc(t)}</h1>${s?`<p>${esc(s)}</p>`:''}</div></div>`;
/* Deferred: need() runs mid-render, so the redirect must land AFTER the current
   render finishes (the old location.hash redirect was async for the same reason) */
function need(){ if(!DB.user()){ setTimeout(()=>goPage('/#/auth?t=login'),0); return true } return false }
/* ================= SUPABASE AUTH (real cloud accounts) =================
   ✏️ EDIT HERE ONLY: if you ever create a new Supabase project, paste its
   URL + publishable key below. The publishable key is PUBLIC BY DESIGN
   (safe in this file). NEVER paste a service_role / secret key here.
   How it works:
   - New signups + Google login use Supabase (real backend, works everywhere).
   - Progress/bookmarks stay in this browser under the same email (unchanged).
   - Old local accounts keep working exactly as before (automatic fallback).
   - If Supabase or the CDN can't be reached, the site uses local mode. */
const SB_URL='https://yygpmlziffpuznogysnc.supabase.co';
const SB_KEY='sb_publishable_t6i1BYDN8MCl-ASAtGkNrg_DV2xNSQo';
const SB_CDN='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
const SB={
  mode:'local', client:null, user:null, _recover:false,
  ready:(async()=>{
    try{
      const lib=await import(SB_CDN);
      SB.client=lib.createClient(SB_URL,SB_KEY);
      SB.mode='supabase';
      const h=location.hash||'', qs=location.search||'';
      const returning=/access_token=/.test(h)||/[?&]code=/.test(qs);
      let su=null;
      if(returning){
        /* OAuth / recovery landing: tokens are in the URL; the client above
           consumes them — poll briefly until the session appears. */
        SB._recover=/type=recovery/.test(h);
        for(let i=0;i<25&&!su;i++){
          try{ const r=await SB.client.auth.getSession(); su=r.data&&r.data.session; }catch(e){}
          if(!su) await new Promise(r=>setTimeout(r,200));
        }
      }else{
        try{ const r=await SB.client.auth.getSession(); su=r.data&&r.data.session; }catch(e){}
      }
      if(su&&su.user){
        SB.user=su.user; SB.ensureStub(su.user);
        const had=!!DB.get().session;
        DB.setSession(su.user.email,true);
        if(returning) history.replaceState(null,'',SB._recover?'/#/auth?t=recover':'/#/dashboard');
        if(!had||returning) router(); /* re-render once with logged-in state */
      }else if(returning){
        history.replaceState(null,'','/#/auth?t=login'); router();
      }
    }catch(e){ SB.mode='local'; }
    return SB.mode;
  })(),
  /* test hook: inject a fake client (automated tests only, never used live) */
  _testInject(mock){ SB.client=mock; SB.mode='supabase'; SB.ready=Promise.resolve('supabase'); },
  provider(){ const u=SB.user; return (u&&u.app_metadata&&u.app_metadata.provider)||null; },
  /* local mirror row so dashboard/profile/bookmarks work unchanged for cloud users */
  ensureStub(u){
    const d=DB.raw(), em=String((u&&u.email)||'').toLowerCase(); if(!em) return null;
    let row=d.users.find(x=>x.email===em);
    if(!row){
      row={name:((u.user_metadata||{}).full_name)||em.split('@')[0],
        email:em,mobile:'',course:'',pass:'sb$cloud',code:rid(),sb:1};
      d.users.push(row); DB.set(d);
    }else if(!row.sb){ row.sb=2; DB.set(d); } /* local account now also verified in cloud */
    return row;
  },
  signIn(email,pw){ return SB.client.auth.signInWithPassword({email:email,password:pw}); },
  signUp(email,pw,name){ return SB.client.auth.signUp({email:email,password:pw,options:{data:{full_name:name}}}); },
  google(){ return SB.client.auth.signInWithOAuth({provider:'google',options:{redirectTo:location.origin+'/'}}); },
  reset(email){ return SB.client.auth.resetPasswordForEmail(email,{redirectTo:location.origin+'/'}); },
  setNewPassword(pw){ return SB.client.auth.updateUser({password:pw}); },
  async signOutUser(){ try{ await SB.client.auth.signOut(); }catch(e){} SB.user=null; }
};
function prog(){ const d=DB.get(); return (d.p2&&d.p2[d.session||'guest'])||{} }
function markDone(sid,un){ const d=DB.raw(); const k=DB.skey(); d.p2[k]=d.p2[k]||{}; d.p2[k][sid+'-'+un]=true; DB.set(d); }
function subjPct(sid){ const p=prog(), sb=SUBJECTS.find(x=>x.id===sid), t=sb?sb.units.length:0; if(!t) return 0; let n=0; for(let i=1;i<=t;i++) if(p[sid+'-'+i]) n++; return Math.round(n/t*100) }
const TOT_UNITS = SUBJECTS.reduce((a,s)=>a+s.units.length,0);
const TOT_TESTS = TOT_UNITS*2;

/* smooth-scroll to a section on the current page (used by the stats bar) */
function jumpTo(e,id){
  if(e&&e.preventDefault) e.preventDefault();
  const el=document.getElementById(id);
  if(el) window.scrollTo({top:Math.max(0,el.getBoundingClientRect().top+window.scrollY-84),behavior:'smooth'});
  return false;
}

/* ---------------- PAGES ---------------- */
/* Subject card shared by home + subjects page (showTests adds the "N Tests" bit). One
   subjPct() call per card - the value is reused for the bar and the label. */
const subjectCard=(s,showTests)=>{ const pc=subjPct(s.id);
  return `<a class="card" href="/subject/${s.id}">
      <div class="ico" style="background:${s.color}">${s.icon}</div><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p>
      <div class="bar"><i style="width:${pc}%"></i></div>
      <div style="margin-top:8px;font-size:.8rem;color:var(--muted)">${s.units.length} Units &middot; ${showTests?s.units.length*2+' Tests &middot; ':''}${pc}% complete</div></a>`; };
/* Syllabus card shared by home + syllabus list. */
const sylCard=x=>`<a class="card syl" href="/syllabus/${x.id}">
      <h3><span class="sylemo">${x.emoji||''}</span> ${esc(x.label||x.title)} Syllabus (${esc(x.year||'2082')})</h3>
      <span class="mini">View or download &rarr;</span></a>`;
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
    <a class="stat" href="/syllabus" onclick="return jumpTo(event,'sec-syllabus')" title="Federal and all seven provincial Amin syllabus tracks"><b>${SYLLABUS.length}</b><span>Syllabus Tracks</span></a>
    <a class="stat" href="/subjects" onclick="return jumpTo(event,'sec-subjects')" title="Six subjects, ${TOT_UNITS} units — every unit has Study material and two tests"><b>${SUBJECTS.length}</b><span>Subjects</span></a>
    <a class="stat" href="/subject/sub1" title="Open the first subject to browse all units"><b>${TOT_UNITS}</b><span>Units</span></a>
    <a class="stat" href="/#/tests" title="Practice and exam mode tests"><b>${TOT_TESTS}</b><span>Tests</span></a>
  </div></div></div>

  <section id="sec-syllabus"><div class="wrap"><div class="shead"><h2>Syllabus</h2><p>Federal and all seven provincial Amin syllabus tracks</p></div>
    <div class="grid g4 tight">${SYLLABUS.map(sylCard).join('')}</div></div></section>

  <section class="alt" id="sec-subjects"><div class="wrap"><div class="shead"><h2>Our Subjects</h2><p>Six subjects, ${TOT_UNITS} units — every unit has Study material and two tests.</p></div>
    <div class="grid g3">${SUBJECTS.map(s=>subjectCard(s,true)).join('')}</div></div></section>

  <section><div class="wrap"><div class="shead"><h2>Latest Notices</h2><p>Exam, result, admission and event updates</p></div>
    <div class="grid g2">${NOTICES.slice(0,4).map(n=>noticeCard(n)).join('')}</div>
    <div style="text-align:center;margin-top:22px"><a class="btn ghost" href="/notice">View All Notices</a></div></div></section>

  <section class="cta">
    <div class="wrap"><h2 style="font-size:1.8rem">Create your free account today</h2>
    <p style=p></div>
    <div class="grid g2">${NOTICES.slice(0,4).map(n=>noticeCard(n)).join('')}</div>
    <div style="text-align:center;margin-top:22px"><a class="btn ghost" href="/notice">View All Notices</a></div></div></section>

  <section class="cta">
    <div class="wrap"><h2 style="font-size:1.8rem">Create your free account today</h2>
    <p style="color:#cbd7f2;margin:8px 0 18px">Save your progress, take tests and get your results instantly.</p>
    <a class="btn accent" href="/#/auth?t=signup">Create free account</a></div></section>`;
}

function noticeCard(n){
  const isNew = (Date.now()-new Date(n.date))/86400000 < 30;
  return `<a class="card" href="/notice/${n.id}">
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">
      <span class="badge">${esc(n.cat)}</span>${isNew?'<span class="badge new">New</span>':''}
      <span style="margin-left:auto;font-size:.8rem;color:var(--muted)">${fdate(n.date)}</span></div>
    <h3>${esc(n.title)}</h3><p>${esc(n.body.slice(0,120))}…</p></a>`;
}

function pSyllabusList(){
  return head('Syllabus','Federal and all seven provincial Amin Loksewa syllabus')+
  `<section><div class="wrap"><div class="grid g4 tight">${SYLLABUS.map(sylCard).join('')}</div></div></section>`;
}

function pSyllabus(id){
  const s = SYLLABUS.find(x=>x.id===id); if(!s) return p404();
  const rows = SUBJECTS.map((sb,i)=>{ const n=sb.units.length; return `<tr><td>${i+1}</td><td>${esc(sb.name)}</td><td>${n}</td><td>${n*5}</td><td>${n*3}</td></tr>`; }).join('');
  return head((s.label||s.title)+' Syllabus ('+(s.year||'2082')+')', s.desc, `<a href="/syllabus">Syllabus</a> / ${esc(s.label||s.title)}`, s.emoji||'')+
  `<section><div class="wrap"><div class="split">
    <div class="side"><a class="on" href="/syllabus/${s.id}">This Syllabus</a>
      ${SYLLABUS.filter(x=>x.id!==s.id).map(x=>`<a href="/syllabus/${x.id}"><span>${x.emoji||''} ${esc(x.label||x.title)}</span></a>`).join('')}</div>
    <div><div class="card prose">
      <h3>Overview</h3><p>${esc(s.desc)}</p>
      <h3>Objectives</h3><ul>${s.objectives.map(o=>`<li>${esc(o)}</li>`).join('')}</ul>
      <h3>Subject-wise Breakdown &amp; Question Counts</h3>
      <table><thead><tr><th>#</th><th>Subject</th><th>Units</th><th>Objective Qs</th><th>Written Qs</th></tr></thead><tbody>${rows}</tbody></table>
      <div class="note"><b>Exam Pattern:</b> Objective 20 marks &middot; Short answer 40 marks &middot; Long answer 40 marks. Pass mark 40%.</div>
      <h3>Reference Books</h3><ul><li>Prescribed textbook of each subject</li><li>Practice question bank</li><li>Past year question collection</li></ul>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
        <a class="btn" href="/subjects">Start Studying</a>
        <button class="btn ghost" onclick="window.print()">Print</button></div>
    </div></div></div></div></section>`;
}

function pSubjects(){
  return head('Subjects',`Six subjects, ${TOT_UNITS} units — study material and two tests per unit`)+
  `<section><div class="wrap"><div class="grid g3">${SUBJECTS.map(s=>subjectCard(s,false)).join('')}</div></div></section>`;
}

function pSubject(id){
  const s = SUBJECTS.find(x=>x.id===id); if(!s) return p404();
  const p = prog(), pc = subjPct(s.id);
  return head(s.name, s.desc, `<a href="/subjects">Subjects</a> / ${esc(s.name)}`)+
  `<section><div class="wrap"><div class="split">
    <div class="side">${SUBJECTS.map(x=>`<a href="/subject/${x.id}" class="${x.id===s.id?'on':''}">${esc(x.name)}</a>`).join('')}</div>
    <div>
      <div class="card" style="margin-bottom:16px"><b>Progress:</b> ${pc}% completed
        <div class="bar"><i style="width:${pc}%"></i></div></div>
      ${s.units.map(u=>`<div class="card" style="margin-bottom:12px;display:flex;gap:14px;align-items:center;flex-wrap:wrap">
        <div style="flex:1;min-width:200px"><div class="badge">Unit ${u.no}</div>
          <h3 style="margin-top:6px">${esc(u.title)}</h3>
          <p>${esc(u.outcomes[0]||u.title)}</p></div>
        ${p[s.id+'-'+u.no]?'<span class="badge ok">Completed</span>':''}
        <a class="btn sm" href="/unit/${s.id}/${u.no}/study">Study</a>
        <a class="btn accent sm" href="/#/unit/${s.id}/${u.no}/test">Test</a></div>`).join('')}
    </div></div></div></section>`;
}

function pUnit(sid,un,tab){
  const s = SUBJECTS.find(x=>x.id===sid); if(!s) return p404();
  const u = s.units[un-1]; if(!u) return p404();
  const done = prog()[sid+'-'+un];
  const body = tab==='test' ? '<div id="quizRoot"></div>' : unitStudy(s,u,done);
  return head(`Unit ${u.no}: ${u.title}`, s.name, `<a href="/subjects">Subjects</a> / <a href="/subject/${s.id}">${esc(s.name)}</a> / Unit ${u.no}`)+
  `<section><div class="wrap"><div class="split">
    <div class="side">${s.units.map(x=>`<a href="/unit/${s.id}/${x.no}/study" class="${x.no==un?'on':''}">Unit ${x.no}. ${esc(x.title)}${prog()[s.id+'-'+x.no]?' ✓':''}</a>`).join('')}</div>
    <div><div class="tabs">
      <button class="${tab!=='test'?'on':''}" onclick="goPage('/unit/${sid}/${un}/study')">Study</button>
      <button class="${tab==='test'?'on':''}" onclick="goPage('/#/unit/${sid}/${un}/test')">Test</button></div>
      ${body}
      <div style="display:flex;justify-content:space-between;margin-top:20px">
        ${un>1?`<a class="btn ghost sm" href="/unit/${sid}/${un-1}/study">&larr; Previous Unit</a>`:'<span></span>'}
        ${un<s.units.length?`<a class="btn ghost sm" href="/unit/${sid}/${+un+1}/study">Next Unit &rarr;</a>`:'<span></span>'}</div>
    </div></div></div></section>`;
}

function unitStudy(s,u,done){
  return `<div class="card prose">
    <h3>Learning Outcomes</h3><ul>${u.outcomes.map(o=>`<li>${esc(o)}</li>`).join('')}</ul>
    ${(Array.isArray(u.content)?u.content:[{h:'Notes',p:String(u.content||'')}]).map(c=>`<h3>${esc(c.h)}</h3><p>${esc(c.p)}</p>`).join('')}
    <div class="note"><b>Key Points</b><ul style="margin-top:6px">${u.keypoints.map(k=>`<li>${esc(k)}</li>`).join('')}</ul></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
      <button class="btn ${done?'ghost':''}" onclick="markDone('${s.id}',${u.no});rerender()" ${done?'disabled':''}>${done?'✓ Completed':'Mark as Complete'}</button>
      <a class="btn accent" href="/#/unit/${s.id}/${u.no}/test">Go to Test</a>
      <button class="btn ghost" onclick="window.print()">Print Notes</button></div></div>`;
}

/* ================= QUIZ ENGINE (one question at a time) ================= */
const QZ = { sid:null, un:null, deck:[], i:0, ans:[], flag:[], mode:'practice',
             sec:0, used:0, tid:null, run:false, done:false, revealAll:false,
             retry:false, srcIdx:[] };

function quizStart(sid,un){
  const s=SUBJECTS.find(x=>x.id===sid), u=s.units[un-1];
  QZ.sid=sid; QZ.un=un;
  const PF=prefsGet(); /* Dashboard > Settings defaults */
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
       <label class="chk"><input type="checkbox" id="qsh" ${PF.shQ?'checked':''}> Shuffle questions</label>
       <label class="chk"><input type="checkbox" id="osh" ${PF.shO?'checked':''}> Shuffle options</label>
       <label class="chk">Time <input type="number" id="qmin" class="tmin" min="1" max="180" value="${Math.max(5,u.objective.length)}"> min</label>
     </div>
     <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
       <button class="btn accent" onclick="qzBegin()">Start Test</button>
       <a class="btn ghost" href="/unit/${sid}/${un}/study">Read Notes First</a></div>
   </div>
   <div class="card" style="margin-top:16px">
     <h3 style="color:var(--primary)">Subject Test (Written) &mdash; ${u.subjective.reduce((x,y)=>x+y.marks,0)} marks</h3>
     <p style="color:var(--muted);font-size:.9rem;margin-bottom:12px">Write each answer in your copy, then open the model answer to compare.</p>
     ${u.subjective.map((q,i)=>`<div class="wq">
        <div class="wqh"><span class="wqn">Q${i+1}</span>
          <span class="wqt">${esc(q.q)}</span><span class="badge">${q.marks} marks</span></div>
        <button class="btn ghost sm" onclick="wqaToggle(this,'${sid}',${un},${i})">Show model answer</button>
        <div class="wqa"><b>Model answer:</b> ${esc(q.hint)}</div></div>`).join('')}
   </div>`;
  qzMode(PF.mode||'practice'); /* default mode from Dashboard > Settings */
}

/* Written-answer toggle + "Read more" clamp for long model answers. */
function wqaToggle(btn,sid,un,qi){
  const a=btn.nextElementSibling, open=a.classList.toggle('show');
  btn.textContent=open?'Hide model answer':'Show model answer';
  if(open&&sid!==undefined){ try{ const d=DB.raw(),me=DB.skey(); d.v2=d.v2||{};
    const a=d.v2[me]=d.v2[me]||[], k=sid+'-'+un+'-'+qi;
    if(!a.includes(k)){ a.push(k); d.v2[me]=a.slice(-500); DB.set(d); } }catch(e){} }
  if(open&&!a.dataset.rm&&a.scrollHeight>320){
    a.dataset.rm='1'; a.classList.add('clamp');
    const m=document.createElement('button');
    m.className='btn ghost sm wqamore'; m.textContent='Read more';
    m.onclick=()=>{ const ex=a.classList.toggle('open'); m.textContent=ex?'Show less':'Read more'; };
    a.after(m);
  }
}

function qzMode(m){
  QZ.mode=m;
  document.getElementById('m_practice').classList.toggle('on',m==='practice');
  document.getElementById('m_exam').classList.toggle('on',m==='exam');
  document.getElementById('m_practice').setAttribute('aria-pressed',m==='practice');
  document.getElementById('m_exam').setAttribute('aria-pressed',m==='exam');
}
function qzShuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];} return a; }

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
  QZ.sec=Math.min(180,Math.max(1,parseInt(qminEl&&qminEl.value)||10))*60;
  qzRender(); qzTimerStart();
}

/* retry only the questions answered wrongly (and optionally skipped) */
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
  QZ.sec=Math.max(3,QZ.deck.length)*60;
  qzRender(); qzTimerStart();
  window.scrollTo({top:0,behavior:'smooth'});
}

function qzTime(t){ t=Math.max(0,t|0); const m=Math.floor(t/60), sec=t%60;
  return String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0'); }
function qzTimerStart(){
  if(QZ.done) return;
  clearInterval(QZ.tid); QZ.run=true;
  QZ.tid=setInterval(()=>{
    if(QZ.sec>0){ QZ.sec--; QZ.used++; qzClock(); }
    if(QZ.sec<=0){ clearInterval(QZ.tid); QZ.run=false; qzFinish(true); }
  },1000);
  qzClock();
}
function qzTimerPause(){ clearInterval(QZ.tid); QZ.run=false; qzClock(); }
function qzToggle(){ if(QZ.done) return; QZ.run?qzTimerPause():qzTimerStart(); const b=document.getElementById('qzpause'); if(b) b.textContent=QZ.run?'Pause':'Start'; }
function qzClock(){
  const c=document.getElementById('qzclock'); if(!c) return;
  c.textContent=qzTime(QZ.sec);
  c.classList.toggle('warn',QZ.sec<=300&&QZ.sec>60);
  c.classList.toggle('danger',QZ.sec<=60);
  const m=document.getElementById('qzmeta');
  if(m) m.textContent=(QZ.done?'Review':QZ.mode==='exam'?'Exam paper':'Practice')+' · '+(QZ.run?'running':'paused')+' · used '+qzTime(QZ.used);
}

function qzRevealed(i){ return QZ.done || QZ.revealAll || (QZ.mode==='practice' && QZ.ans[i]!==null); }

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
function qzProg(){
  const n=QZ.ans.filter(a=>a!==null).length, t=QZ.deck.length;
  const f=document.getElementById('qzfill'); if(f) f.style.width=(n/t*100)+'%';
  const x=document.getElementById('qztext'); if(x) x.textContent=n+' of '+t+' answered';
  const l=document.getElementById('qzlive');
  if(l && QZ.mode==='practice'){ const sc=QZ.deck.reduce((a,q,i)=>a+(QZ.ans[i]===q.a?1:0),0); l.textContent='Score '+sc+'/'+n; }
  else if(l) l.textContent='';
}

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

function qzPick(j){
  if(QZ.done) return;
  if(QZ.mode==='practice' && QZ.ans[QZ.i]!==null) return;
  QZ.ans[QZ.i]=j; qzCard(); qzGrid(); qzProg();
}
function qzGo(i){ if(i<0||i>=QZ.deck.length) return; QZ.i=i; qzCard(); qzGrid(); const qc=document.getElementById('qzcard'); if(qc) window.scrollTo({top:qc.offsetTop-90,behavior:'smooth'}); }
function qzFlag(){ QZ.flag[QZ.i]=!QZ.flag[QZ.i]; qzCard(); qzGrid(); }
function qzSrc(i){ return QZ.retry ? QZ.srcIdx[i] : i; }
function qzSaved(){ return BM.has(QZ.sid,QZ.un,qzSrc(QZ.i)); }
function qzSave(){ BM.toggle(QZ.sid,QZ.un,qzSrc(QZ.i),QZ.deck[QZ.i]); qzCard(); }
function qzConfirm(){
  if(QZ.done){ qzResult(); return; }
  const left=QZ.ans.filter(a=>a===null).length;
  if(left&&!confirm(left+' question(s) unanswered. Submit anyway?')) return;
  qzFinish(false);
}
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
  d.r2[rk]=d.r2[rk].slice(0,50); DB.set(d);
  QZ.byTime=byTime; qzResult();
}

function qzResult(stay){
  const sy=stay?window.scrollY:0;
  const root=document.getElementById('quizRoot');
  const tot=QZ.deck.length, att=QZ.ans.filter(a=>a!==null).length;
  const sc=QZ.deck.reduce((a,q,i)=>a+(QZ.ans[i]===q.a?1:0),0);
  const wrong=att-sc, skip=tot-att;
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
       <a class="btn ghost" href="/#/dashboard/history">Test History</a>
       <a class="btn ghost" href="/unit/${QZ.sid}/${QZ.un}/study">Back to Notes</a>
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

document.addEventListener('keydown',e=>{
  if(!document.getElementById('qzcard')||QZ.done) return;
  const k=e.key.toUpperCase();
  if(['A','B','C','D','E'].includes(k)){ const j=k.charCodeAt(0)-65; if(j<QZ.deck[QZ.i].o.length) qzPick(j); }
  else if(e.key==='ArrowLeft') qzGo(QZ.i-1);
  else if(e.key==='ArrowRight') qzGo(QZ.i+1);
  else if(k==='F') qzFlag();
});

function pTests(){
  return head('Tests',TOT_TESTS+' tests — one Subject Test and one Objective Test for each of the '+TOT_UNITS+' units')+
  `<section><div class="wrap"><div class="grid g2">${SUBJECTS.map(s=>`<div class="card">
    <div style="display:flex;gap:10px;align-items:center"><div class="ico" style="background:${s.color};margin:0;width:38px;height:38px;font-size:1.1rem">${s.icon}</div><h3>${esc(s.name)}</h3></div>
    ${s.units.map(u=>`<div style="display:flex;gap:8px;align-items:center;padding:8px 0;border-bottom:1px solid var(--line);font-size:.9rem">
      <span style="flex:1">Unit ${u.no}. ${esc(u.title)}</span>
      <a class="btn accent sm" href="/#/unit/${s.id}/${u.no}/test">Open Tests</a></div>`).join('')}</div>`).join('')}</div></div></section>`;
}

function pNotices(cat){
  const list = (cat&&cat!=='All') ? NOTICES.filter(n=>n.cat===cat) : NOTICES;
  const cats=['All','Exam','Result','Admission','Event'];
  return head('Notice Board','Exam routines, results, admissions and events')+
  `<section><div class="wrap">
    <div class="filters">${cats.map(c=>`<button class="${(cat||'All')===c?'on':''}" onclick="goPage('/notice?cat='+'${c}')">${c}</button>`).join('')}</div>
    <div class="grid g2">${list.map(noticeCard).join('')||'<p>No notices.</p>'}</div></div></section>`;
}

function pNotice(id){
  const n=NOTICES.find(x=>x.id==id); if(!n) return p404();
  return head(n.title, fdate(n.date)+' · '+n.cat, `<a href="/notice">Notice</a> / ${esc(n.title)}`)+
  `<section><div class="wrap"><div class="card prose" style="max-width:820px;margin:0 auto">
    <span class="badge">${esc(n.cat)}</span><span style="margin-left:8px;color:var(--muted);font-size:.85rem">${fdate(n.date)}</span>
    <h3>${esc(n.title)}</h3><p>${esc(n.body)}</p>
    <p>For further information please contact the office at ${esc(SITE.phone)} or email ${esc(SITE.email)}.</p>
    <div style="margin-top:16px"><a class="btn ghost" href="/notice">&larr; All Notices</a>
    <button class="btn" onclick="window.print()">Print</button></div>
    <div style="margin-top:14px;font-size:.85rem;color:var(--muted)">Share: <a href="#" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),'_blank','noopener');return false">Facebook</a> · <a href="#" onclick="window.open('https://twitter.com/intent/tweet?url='+encodeURIComponent(location.href),'_blank','noopener');return false">X</a> · <a href="#" onclick="window.open('https://wa.me/?text='+encodeURIComponent(location.href),'_blank','noopener');return false">WhatsApp</a></div>
  </div></div></section>`;
}

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

function pContact(){
  const ib = '<span style="display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;background:var(--amber);color:var(--accent-d);font-size:.95rem;margin-right:9px;vertical-align:middle">';
  return head('Get in Touch','We would be glad to hear from you')+
  `<section><div class="wrap">
    <div class="grid g2" style="align-items:start">

      <div class="card prose" style="border-top:3px solid var(--accent)">
        <h3 style="display:flex;align-items:center;gap:8px;font-size:1.2rem">📩 Reach Us</h3>
        <div class="pcard" style="border-bottom:0;padding:6px 0 14px">
          <div class="ppic"><img src="${SITE.profileImage||'/images/profile.jpg'}" alt="${esc(SITE.owner)}"
            loading="lazy" onerror="this.parentNode.classList.add('ini');this.remove()"><span>${esc(SITE.ownerInit)}</span></div>
          <div class="pname">${esc(SITE.owner)}</div>
          <div class="prole">${esc(SITE.ownerRole)}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:11px">
          <p>${ib}📍</span><b>Address:</b> ${esc(SITE.address)}</p>
          <p>${ib}📞</span><b>Phone:</b> <a href="tel:${SITE.phone.replace(/\s/g,'')}" style="color:var(--primary)">${esc(SITE.phone)}</a></p>
          <p>${ib}✉️</span><b>Email:</b> <a href="mailto:${SITE.email}" style="color:var(--primary)">${esc(SITE.email)}</a></p>
        </div>
        <h3 style="margin-top:18px">Follow Us</h3>
        <div class="fsoc">${SOCIAL.map(s=>socialSVG(s,'fsoc--brand')).join('')}</div>
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

function pFaq(){
  return head('FAQ','Frequently asked questions')+
  `<section><div class="wrap" style="max-width:800px">${FAQS.map(f=>`<details class="acc"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('')}</div></section>`;
}

/* ---------------- AUTH ---------------- */
function pAuth(tab){
  const on = tab==='signup' ? 'signup' : tab==='recover' ? 'recover' : 'login';
  const GLOGO=`<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.06 12.25c0-.85-.08-1.67-.22-2.45H12v4.63h6.2a5.3 5.3 0 0 1-2.3 3.48v2.9h3.72c2.18-2 3.44-4.96 3.44-8.56Z"/><path fill="#34A853" d="M12 24c3.11 0 5.72-1.03 7.62-2.79l-3.72-2.9c-1.03.69-2.35 1.1-3.9 1.1-3 0-5.54-2.03-6.45-4.75H1.71v2.98A11.5 11.5 0 0 0 12 24Z"/><path fill="#FBBC05" d="M5.55 14.66a6.9 6.9 0 0 1 0-4.42V7.27H1.71a11.51 11.51 0 0 0 0 10.36l3.84-2.97Z"/><path fill="#EA4335" d="M12 4.75c1.69 0 3.21.58 4.4 1.72l3.3-3.3C17.72 1.21 15.11 0 12 0 7.5 0 3.62 2.58 1.71 6.34l3.84 2.98C6.46 6.59 9 4.75 12 4.75Z"/></svg>`;
  const GBTN=`<button type="button" class="btn block" style="background:#fff;color:#1f2937;border:1px solid var(--line-strong);display:flex;align-items:center;justify-content:center;gap:10px" onclick="doGoogle(event)">${GLOGO} Continue with Google</button>
    <p class="swap">or continue with email</p>`;
  return head('Log in / Sign up','One place to access your account')+
  `<section><div class="wrap"><div class="form authbox">
    <div class="atabs">
      <button class="${on==='login'?'on':''}" onclick="goPage('/#/auth?t=login')">Log in</button>
      <button class="${on==='signup'?'on':''}" onclick="goPage('/#/auth?t=signup')">Sign up</button>
    </div>
    <div id="m"></div>
    ${on==='login' ? `
      ${GBTN}
      <form onsubmit="doLogin(event)">
        <h2>Welcome back</h2><div class="sub">Log in to continue learning</div>
        <label for="li">Email</label><input id="li" type="email" autocomplete="email" required>
        <label for="lp">Password</label><input id="lp" type="password" autocomplete="current-password" required>
        <div class="row"><label class="chk"><input type="checkbox" id="rm" checked> Remember me</label>
          <a href="/#/forgot" style="color:var(--primary)">Forgot password?</a></div>
        <button class="btn block">Log in</button>
        <p class="swap">New here? <a href="/#/auth?t=signup">Create a free account</a></p>
      </form>` : on==='signup' ? `
      ${GBTN}
      <form onsubmit="doReg(event)">
        <h2>Create your account</h2><div class="sub">Free &mdash; save progress and get instant test results</div>
        <label for="rn">Full Name</label><input id="rn" autocomplete="name" required>
        <label for="re">Email</label><input id="re" type="email" autocomplete="email" required>
        <label for="rp">Password</label><input id="rp" type="password" minlength="6" autocomplete="new-password" required>
        <label for="rp2">Confirm Password</label><input id="rp2" type="password" minlength="6" autocomplete="new-password" required>
        <label class="chk" style="margin-top:14px"><input type="checkbox" required>
          I agree to the <a href="/#/terms" style="color:var(--primary)">Terms</a></label>
        <button class="btn block" style="margin-top:14px">Sign up</button>
        <p class="swap">Already have an account? <a href="/#/auth?t=login">Log in</a></p>
      </form>` : `
      <form onsubmit="doRecover(event)">
        <h2>Set new password</h2><div class="sub">Opened from your reset email link</div>
        <label for="np">New Password</label><input id="np" type="password" minlength="6" autocomplete="new-password" required>
        <label for="np2">Confirm New Password</label><input id="np2" type="password" minlength="6" autocomplete="new-password" required>
        <button class="btn block" style="margin-top:14px">Update Password</button>
      </form>`}
  </div></div></section>`;
}
async function doLogin(e){
  e.preventDefault();
  const id=$('#li').value.trim().toLowerCase(), pw=$('#lp').value;
  const rm=document.getElementById('rm'), remember=!rm||rm.checked;
  const say=html=>{ $('#m').innerHTML=html; };
  /* 1) cloud login (when online) */
  try{
    await SB.ready;
    if(SB.mode==='supabase'){
      const {data,error}=await SB.signIn(id,pw);
      if(!error&&data&&data.session){
        SB.user=data.session.user; SB.ensureStub(SB.user);
        DB.setSession(id,remember); nav('/#/dashboard'); return;
      }
      const msg=(error&&error.message)||'';
      if(/not confirmed/i.test(msg)){ say('<div class="msg err">Please verify your email first — open the verification link we sent, then log in.</div>'); return }
      if(!/invalid login|invalid grant/i.test(msg)){ say('<div class="msg err">'+esc(msg||'Login failed. Please try again.')+'</div>'); return }
      /* invalid cloud credentials: fall through to local check (old account?) */
    }
  }catch(err){/* offline: fall through to local */}
  /* 2) local login (old accounts + offline) */
  const d=DB.get(); const u=d.users.find(x=>x.email===id);
  const hp=await sha(pw);
  if(!u||u.pass==='sb$cloud'||!(u.pass===hp||(!isSha(u.pass)&&u.pass===pw))){ say('<div class="msg err">Invalid email or password. Please try again.</div>'); return }
  if(!isSha(u.pass)&&u.pass!==hp){ u.pass=hp; DB.set(d); }
  DB.setSession(u.email,remember); nav('/#/dashboard');
}
async function doReg(e){
  e.preventDefault();
  const em=$('#re').value.trim().toLowerCase(), nm=$('#rn').value.trim();
  const say=html=>{ $('#m').innerHTML=html; };
  if($('#rp').value!==$('#rp2').value){ say('<div class="msg err">Passwords do not match.</div>'); return }
  /* 1) cloud signup (when online) */
  try{
    await SB.ready;
    if(SB.mode==='supabase'){
      const {data,error}=await SB.signUp(em,$('#rp').value,nm);
      if(error){ say('<div class="msg err">'+esc(error.message)+'</div>'); return }
      SB.ensureStub({email:em,user_metadata:{full_name:nm}});
      if(data&&data.session){
        SB.user=data.session.user; DB.setSession(em,true); nav('/#/dashboard');
      }else{
        say('<div class="msg ok">Account created! Please check <b>'+esc(em)+'</b> (inbox + spam) and click the verification link, then log in.</div>');
      }
      return;
    }
  }catch(err){/* offline: local account below */}
  /* 2) local fallback (offline) */
  const d=DB.get();
  if(d.users.some(u=>u.email===em)){ say('<div class="msg err">This email is already registered. Please log in instead.</div>'); return }
  d.users.push({name:nm,email:em,mobile:'',course:'',pass:await sha($('#rp').value),code:rid()});
  DB.set(d); DB.setSession(em,true); nav('/#/dashboard');
}
async function doGoogle(e){
  if(e) e.preventDefault();
  $('#m').innerHTML='<div class="msg">Connecting to Google…</div>';
  try{ await SB.ready; }catch(_){}
  if(SB.mode!=='supabase'||!SB.client){ $('#m').innerHTML='<div class="msg err">Online login is unreachable right now. Please use email + password.</div>'; return }
  const {error}=await SB.google();
  if(error) $('#m').innerHTML='<div class="msg err">'+esc(error.message)+'</div>';
  /* else the browser leaves for Google and returns to / (SB.ready handles it) */
}
function pForgot(){
  return head('Forgot Password','Reset using your registered email')+
  `<section><div class="wrap"><form class="form" onsubmit="doForgot(event)">
    <h2>Reset password</h2><div class="sub">Local accounts: use your recovery code. Cloud accounts: leave code empty for an email link</div><div id="m"></div>
    <label for="fe">Registered Email</label><input id="fe" type="email" autocomplete="email" required>
    <label for="fc">Recovery Code (local accounts only)</label><input id="fc" placeholder="XXXX-XXXX" autocomplete="off" style="text-transform:uppercase">
    <label for="fp">New Password</label><input id="fp" type="password" minlength="6" autocomplete="new-password" required>
    <button class="btn block" style="margin-top:14px">Reset Password</button></form></div></section>`;
}
async function doForgot(e){
  e.preventDefault();
  const em=$('#fe').value.trim().toLowerCase();
  const say=html=>{ $('#m').innerHTML=html; };
  const d=DB.get(); const u=d.users.find(x=>x.email===em);
  /* local account + code path (unchanged) */
  if(u&&u.pass!=='sb$cloud'){
    const fc=($('#fc').value||'').trim().toUpperCase();
    let first=false;
    if(!u.code){ u.code=rid(); first=true; }
    else if(fc!==u.code){ say('<div class="msg err">Incorrect recovery code. Find it on your Profile page while logged in.</div>'); return }
    u.pass=await sha($('#fp').value); DB.set(d);
    say('<div class="msg ok">Password updated. '+(first?('Your new recovery code is <b>'+u.code+'</b> — also saved on your Profile page. '):'')+'You can now <a href="/#/auth?t=login">log in</a>.</div>'); return;
  }
  /* cloud / unknown account: email a reset link (generic reply, no account probing) */
  try{
    await SB.ready;
    if(SB.mode==='supabase'){ await SB.reset(em); }
  }catch(_){}
  say('<div class="msg ok">If a cloud account exists for <b>'+esc(em)+'</b>, a reset link is on its way. Check inbox + spam.</div>');
}
async function doRecover(e){
  e.preventDefault();
  const say=html=>{ $('#m').innerHTML=html; };
  if($('#np').value!==$('#np2').value){ say('<div class="msg err">Passwords do not match.</div>'); return }
  try{
    await SB.ready;
    if(SB.mode!=='supabase') throw 0;
    const {data}=await SB.client.auth.getSession();
    if(!data||!data.session){ say('<div class="msg err">This link is invalid or expired. Please request a new one from <a href="/#/forgot">Forgot password</a>.</div>'); return }
    const {error}=await SB.setNewPassword($('#np').value);
    if(error){ say('<div class="msg err">'+esc(error.message)+'</div>'); return }
    say('<div class="msg ok">Password updated. You are logged in — <a href="/#/dashboard">open your Dashboard</a>.</div>');
  }catch(_){ say('<div class="msg err">Something went wrong. Please open the reset link from your email again.</div>'); }
}

/* ---------------- DASHBOARD HELPERS (Overview / Progress / Profile / Settings) ----------------
   EDITING GUIDE: dashboard texts live in pDash() below. progress charts = pDashProgress() + dashLine/dashRadar/dashHeat,
   activity feed = dashActivity(), charts = dashDonut() + dashTrend(). Everything is
   computed from real local data (progress, test results, saved questions). */
const PREF_KEY='amin-prefs';
function prefsGet(){
  let all={}; try{ all=JSON.parse(localStorage.getItem(PREF_KEY))||{}; }catch(e){}
  const p=all[DB.skey()]||{};
  return { shQ:p.shQ!==false, shO:p.shO===true, mode:p.mode==='exam'?'exam':'practice' };
}
function prefsSet(patch){
  let all={}; try{ all=JSON.parse(localStorage.getItem(PREF_KEY))||{}; }catch(e){}
  all[DB.skey()]=Object.assign({}, prefsGet(), patch);
  try{ localStorage.setItem(PREF_KEY,JSON.stringify(all)); }catch(e){}
  const m=document.getElementById('psaved');
  if(m){ m.textContent='Saved ✓'; setTimeout(()=>{ if(m.isConnected) m.textContent=''; },1500); }
}
function dashStats(){
  const d=DB.get(), me=d.session||'guest';
  const done=Object.keys(prog()).length;
  const res=(d.r2&&d.r2[me])||[];
  const avg=res.length?Math.round(res.reduce((a,b)=>a+b.pct,0)/res.length):0;
  const best=res.length?Math.max.apply(null,res.map(r=>r.pct)):0;
  return { done, total:TOT_UNITS, pct:TOT_UNITS?Math.round(done/TOT_UNITS*100):0,
           tests:res.length, avg, best, saved:BM.all().length, res };
}
function dashUnitUrl(subject,unit){
  const s=SUBJECTS.find(x=>x.name===subject), u=s&&s.units.find(x=>x.title===unit);
  return s&&u?`/#/unit/${s.id}/${u.no}/test`:'/#/tests';
}
function dashActivity(){
  const d=DB.get(), me=d.session||'guest', acts=[];
  ((d.r2&&d.r2[me])||[]).forEach(r=>{ if(!r.date) return;
    acts.push({ date:r.date, icon:r.pct>=40?'✅':'📝',
      text:`Test: ${r.subject} — ${r.unit} · ${r.score}/${r.total} (${r.pct}%)`,
      url:dashUnitUrl(r.subject,r.unit) }); });
  BM.all().forEach(b=>{ if(!b.date) return;
    const q=(b.q||'').slice(0,80);
    acts.push({ date:b.date, icon:'🔖', text:`Saved: ${q}${(b.q||'').length>80?'…':''}`,
      url:`/unit/${b.sid}/${b.un}/study` }); });
  acts.sort((a,b)=>(b.date>a.date?1:-1));
  return acts.slice(0,8);
}
function dashDonut(pct,color){
  const p=Math.min(100,Math.max(0,pct)), c=2*Math.PI*34, off=c*(1-p/100);
  return `<svg class="donut" viewBox="0 0 90 90" role="img" aria-label="${p}% complete">
    <circle cx="45" cy="45" r="34" fill="none" style="stroke:var(--track)" stroke-width="11"/>
    <circle cx="45" cy="45" r="34" fill="none" style="stroke:${color||'var(--primary)'}" stroke-width="11"
      stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}"
      transform="rotate(-90 45 45)"/>
    <text x="45" y="51" text-anchor="middle" class="donut-t">${p}%</text></svg>`;
}
function dashTrend(res){
  const last=res.slice(0,8).reverse();
  if(!last.length) return '<p class="muted">No tests yet — your recent scores will appear here.</p>';
  const bars=last.map(r=>{ const h=Math.max(6,Math.min(100,r.pct));
    const col=r.pct>=60?'var(--ok)':r.pct>=40?'var(--accent-d)':'var(--bad)';
    return `<div class="tbar" title="${esc(r.subject)} — ${r.pct}%"><span>${r.pct}</span><i style="height:${h}%;background:${col}"></i></div>`; }).join('');
  return `<div class="trend">${bars}</div><p class="muted sm">Last ${last.length} test${last.length>1?'s':''} · latest on the right</p>`;
}
/* ============ PROGRESS ANALYTICS (charts + question-type analysis) ============
   All charts are hand-drawn SVG (zero dependencies, work offline) and read
   real user data: unit completion (p2), test history (r2), reviewed
   subjective answers (v2). Subjects with no data show "—" (never fake 0s). */
let PZR_N=20; /* score-trend range: 10 / 20 / 50(All) */
function pzRange(n){ PZR_N=n; rerender(); }
/* unique subjective questions reviewed, per subject: {total, by:{sid:n}} */
function subjReviewed(){
  const d=DB.get(), me=d.session||'guest', a=(d.v2&&d.v2[me])||[], by={};
  a.forEach(k=>{ const sid=String(k).split('-')[0]; by[sid]=(by[sid]||0)+1; });
  return { total:a.length, by };
}
/* MCQ stats per subject name from test history */
function mcqBySubj(res){
  const m={};
  (res||[]).forEach(r=>{
    const e=m[r.subject]=m[r.subject]||{n:0,sum:0,best:0,att:0,sc:0,tot:0};
    e.n++; e.sum+=r.pct; if(r.pct>e.best)e.best=r.pct;
    e.att+=r.attempted||0; e.sc+=r.score||0; e.tot+=r.total||0;
  });
  Object.keys(m).forEach(k=>{ m[k].avg=Math.round(m[k].sum/m[k].n); });
  return m;
}
/* completion + units done per subject id */
function compBySid(){
  const P=prog(), o={};
  SUBJECTS.forEach(s=>{ let n=0; s.units.forEach(x=>{ if(P[s.id+'-'+x.no])n++; });
    o[s.id]={done:n,total:s.units.length,pct:s.units.length?Math.round(n/s.units.length*100):0}; });
  return o;
}
/* score-over-time line chart (SVG). pts = chronological [{pct,date,subject,unit}] */
function dashLine(res,n){
  const pts=(res||[]).slice(0,n).reverse();
  if(pts.length<2) return '<p class="muted">Take at least 2 tests to unlock your score trend.</p>';
  const W=560,H=200,P=36;
  const X=i=>P+i*(W-2*P)/(pts.length-1), Y=v=>H-P-(Math.min(100,Math.max(0,v))/100)*(H-2*P);
  let g='';
  [0,25,50,75,100].forEach(v=>{ g+=`<line x1="${P}" y1="${Y(v)}" x2="${W-8}" y2="${Y(v)}" class="pz-grid"/>`+
    `<text x="${P-7}" y="${Y(v)+4}" text-anchor="end" class="pz-ax">${v}</text>`; });
  const line=pts.map((r,i)=>X(i).toFixed(1)+','+Y(r.pct).toFixed(1)).join(' ');
  const avg=Math.round(pts.reduce((a,r)=>a+r.pct,0)/pts.length);
  const dstr=dt=>{ try{ const d=new Date(dt); return (d.getMonth()+1)+'/'+d.getDate(); }catch(e){ return ''; } };
  const xi=[0,Math.floor((pts.length-1)/2),pts.length-1].filter((v,i,a)=>a.indexOf(v)===i);
  let xl=''; xi.forEach(i=>{ xl+=`<text x="${X(i)}" y="${H-10}" text-anchor="middle" class="pz-ax">${dstr(pts[i].date)}</text>`; });
  let dots=''; pts.forEach((r,i)=>{
    const c=r.pct>=60?'var(--ok)':r.pct>=40?'var(--accent-d)':'var(--bad)';
    dots+=`<circle cx="${X(i)}" cy="${Y(r.pct)}" r="4.5" style="fill:${c}"><title>${esc(r.subject)} — ${esc(r.unit)} · ${r.score}/${r.total} (${r.pct}%) · ${dstr(r.date)}</title></circle>`; });
  return `<svg class="pz-line" viewBox="0 0 ${W} ${H}" role="img" aria-label="Test scores over time, average ${avg} percent">${g}
    <polygon points="${P},${H-P} ${line} ${W-8},${H-P}" class="pz-area"/>
    <line x1="${P}" y1="${Y(avg)}" x2="${W-8}" y2="${Y(avg)}" class="pz-avg"/>
    <text x="${P+5}" y="${Y(avg)-6}" text-anchor="start" class="pz-ax">avg ${avg}%</text>
    <polyline points="${line}" class="pz-pline"/>${dots}${xl}</svg>`;
}
/* completion radar, one axis per subject (emoji labels + full-name tooltips) */
function dashRadar(comp){
  const cx=140, cy=132, R=92, N=SUBJECTS.length;
  const pt=(i,v)=>{ const a=(-90+i*360/N)*Math.PI/180, r=R*v/100;
    return [cx+r*Math.cos(a), cy+r*Math.sin(a)]; };
  let rings='';
  [25,50,75,100].forEach(v=>{ rings+=`<polygon points="${SUBJECTS.map((s,i)=>pt(i,v).map(n=>n.toFixed(1)).join(',')).join(' ')}" class="pz-ring"/>`; });
  let spokes='';
  SUBJECTS.forEach((s,i)=>{ const [x,y]=pt(i,100);
    spokes+=`<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" class="pz-ring"/>`; });
  const poly=SUBJECTS.map((s,i)=>pt(i,comp[s.id].pct).map(n=>n.toFixed(1)).join(',')).join(' ');
  let dots='', labs='';
  SUBJECTS.forEach((s,i)=>{ const [x,y]=pt(i,comp[s.id].pct), [lx,ly]=pt(i,100);
    const ox=cx+(lx-cx)*1.24, oy=cy+(ly-cy)*1.24;
    dots+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.6" class="pz-rdot"><title>${esc(s.name)}: ${comp[s.id].pct}% complete</title></circle>`;
    labs+=`<text x="${ox.toFixed(1)}" y="${oy.toFixed(1)}" text-anchor="middle" class="pz-remoji"><title>${esc(s.name)}: ${comp[s.id].pct}%</title>${s.icon}</text>`; });
  return `<svg class="pz-radar" viewBox="0 0 280 264" role="img" aria-label="Completion radar by subject">${rings}${spokes}
    <polygon points="${poly}" class="pz-rpoly"/>${dots}${labs}</svg>`;
}
/* heat color: null -> none; else green/amber/red at intensity by value */
function heatStyle(v){
  if(v==null||isNaN(v)) return '';
  const c=v>=60?'var(--ok)':v>=40?'var(--accent-d)':'var(--bad)';
  return `background:color-mix(in srgb, ${c} ${Math.round(14+v*0.5)}%, transparent)`;
}
/* Subject x skill heatmap (each column scaled independently) */
function dashHeat(comp,mcq,rev){
  const mxSubj=Math.max(1,...Object.values(rev.by));
  const rows=SUBJECTS.map(s=>{
    const c=comp[s.id].pct, m=mcq[s.name], ma=m?m.avg:null;
    const rn=rev.by[s.id]||0, rs=rev.total?Math.round(rn/mxSubj*100):null;
    return `<tr><td><span class="pz-dot" style="background:${s.color}"></span>${esc(s.name)}</td>
      <td style="${heatStyle(c)}">${c}%</td>
      <td style="${heatStyle(ma)}">${ma==null?'—':ma+'%'}</td>
      <td style="${heatStyle(rs)}">${rev.total?rn:'—'}</td></tr>`; }).join('');
  return `<div class="pz-tscroll"><table class="pz-heat"><tr><th>Subject</th><th>Completion</th><th>MCQ avg</th><th>Subj. read</th></tr>${rows}</table></div>
    <p class="muted sm">Cell color = performance band (green ≥60, amber 40–59, red &lt;40). “Subj. read” counts model answers you opened.</p>`;
}
/* Strong vs Weak subjects from all available signals */
function dashStrongWeak(comp,mcq,rev){
  const scored=SUBJECTS.map(s=>{
    const parts=[], notes=[];
    const c=comp[s.id]; parts.push(c.pct); notes.push(`${c.pct}% complete`);
    const m=mcq[s.name];
    if(m){ parts.push(m.avg); notes.push(`MCQ avg ${m.avg}%`); }
    const rn=rev.by[s.id]||0;
    if(rev.total){ parts.push(Math.round(rn/Math.max(1,...Object.values(rev.by))*100)); notes.push(`${rn} subj. read`); }
    const has=c.pct>0||m||rn>0;
    return { s, has, score:has?Math.round(parts.reduce((a,b)=>a+b,0)/parts.length):-1,
      main:notes.sort((a,b)=>a<b?1:-1)[0]||'', detail:notes.join(' · ') }; });
  const ranked=scored.filter(x=>x.has).sort((a,b)=>b.score-a.score);
  if(!ranked.length) return '<p class="muted">Complete units or take tests to discover your strong and weak subjects.</p>';
  const strong=ranked.slice(0,2), weak=ranked.slice(-2).reverse();
  const li=x=>`<li><span class="pz-dot" style="background:${x.s.color}"></span><b>${esc(x.s.name)}</b><span>${esc(x.detail)}</span></li>`;
  return `<div class="pz-sw"><div class="pz-swbox strong"><h4>💪 Strong subjects</h4><ul>${strong.map(li).join('')}</ul></div>
    <div class="pz-swbox weak"><h4>🎯 Needs focus</h4><ul>${weak.map(li).join('')}</ul>
    <p class="muted sm">Tip: revise a weak subject’s notes, then take its unit test to lift the score.</p></div></div>`;
}
/* per-subject cards (donut + key numbers, tap to open the subject) */
function dashSubjCards(comp,mcq,rev){
  return `<div class="pz-grid">${SUBJECTS.map(s=>{
    const c=comp[s.id], m=mcq[s.name];
    return `<a class="pz-subj" href="/subject/${s.id}"><div class="pz-shead"><span class="pz-sicon">${s.icon}</span>
      <b>${esc(s.name)}</b></div>
      <div class="pz-sbody">${dashDonut(c.pct,s.color)}
      <div class="pz-sstats"><span>Units <b>${c.done}/${c.total}</b></span>
      <span>Tests <b>${m?m.n:0}</b></span>
      <span>MCQ avg <b>${m?m.avg+'%':'—'}</b></span>
      <span>Subj. read <b>${rev.by[s.id]||0}</b></span></div></div></a>`; }).join('')}</div>`;
}
/* MCQ vs Subjective question-type summary */
function dashQType(st,mcq,rev){
  const tot=Object.values(mcq).reduce((a,m)=>({att:a.att+m.att,sc:a.sc+m.sc,tot:a.tot+m.tot}),{att:0,sc:0,tot:0});
  const acc=tot.tot?Math.round(tot.sc/tot.tot*100):null;
  const top=SUBJECTS.map(s=>({s,n:rev.by[s.id]||0})).filter(x=>x.n>0).sort((a,b)=>b.n-a.n).slice(0,3);
  return `<div class="pz-qt"><div class="pz-qtbox"><h4>MCQ (test questions)</h4>
    ${acc==null?'<p class="muted">No tests taken yet.</p>':`${dashDonut(acc,'var(--primary)')}
    <p><b>${acc}%</b> overall accuracy · ${tot.sc}/${tot.tot} correct · ${st.tests} tests</p>`}</div>
    <div class="pz-qtbox"><h4>Subjective (written)</h4>
    ${rev.total?`<p class="pz-bignum">${rev.total}</p><p>model answers reviewed${top.length?': '+top.map(t=>`${t.s.icon} ${t.n}`).join(' · '):''}</p>
    <p class="muted sm">Open any test page and tap “Show model answer” to review more.</p>`
    :'<p class="muted">None reviewed yet — open any test page and tap “Show model answer”.</p>'}</div></div>`;
}
/* full My Progress body: charts + analysis (no bars) */
function pDashProgress(st){
  const comp=compBySid(), mcq=mcqBySubj(st.res), rev=subjReviewed();
  const rng=[[10,'Last 10'],[20,'Last 20'],[50,'All']].map(([n,l])=>
    `<button class="${PZR_N===n?'on':''}" onclick="pzRange(${n})">${l}</button>`).join('');
  return `<div class="card"><h3>Overall completion</h3><div class="pz-hero">${dashDonut(st.pct)}
    <div class="pz-chips"><span><b>${st.done}/${st.total}</b>units done</span><span><b>${st.tests}</b>tests taken</span><span><b>${st.tests?st.avg+'%':'—'}</b>avg score</span><span><b>${st.tests?st.best+'%':'—'}</b>best score</span></div></div></div>
  <div class="card"><h3>Score over time</h3><div class="pz-range">${rng}</div>${dashLine(st.res,PZR_N)}</div>
  <div class="card"><h3>Subject analysis</h3><div class="pz-flex">${dashRadar(comp)}
    <div class="pz-legend">${SUBJECTS.map(s=>`<span><i class="pz-dot" style="background:${s.color}"></i>${esc(s.name)} <b>${comp[s.id].pct}%</b></span>`).join('')}</div></div>
    ${dashSubjCards(comp,mcq,rev)}</div>
  <div class="card"><h3>Question type analysis</h3>${dashQType(st,mcq,rev)}</div>
  <div class="card"><h3>Performance heatmap</h3>${dashHeat(comp,mcq,rev)}</div>
  <div class="card"><h3>Strong &amp; weak subjects</h3>${dashStrongWeak(comp,mcq,rev)}</div>`;
}
function clearMyData(){
  if(!confirm('Clear your unit progress and test history? Saved questions and your account stay.')) return;
  const d=DB.raw(), me=DB.skey();
  delete d.p2[me]; delete d.r2[me]; delete d.v2[me]; DB.set(d); nav('/#/dashboard');
}

/* ---------------- DASHBOARD ---------------- */
function pDash(view){
  if(need()) return '';
  const u=DB.user(), st=dashStats();
  const side=`<div class="dash-side">
    <a href="/#/dashboard" class="${!view?'on':''}">Overview</a>
    <a href="/#/dashboard/progress" class="${view==='progress'?'on':''}">My Progress</a>
    <a href="/#/dashboard/profile" class="${view==='profile'?'on':''}">Profile</a>
    <a href="/#/dashboard/settings" class="${view==='settings'?'on':''}">Settings</a>
    <a href="#" onclick="logout();return false">Logout</a></div>`;
  let body;
  if(view==='progress'){
    body=pDashProgress(st);
  } else if(view==='profile'){
    const initials=(u.name.trim().split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase()||'👤');
    body=`<div class="card prof">
      <div class="avatar">${esc(initials)}</div>
      <h3>${esc(u.name)}</h3>
      <p class="muted">${esc(u.email)}</p>
      <div class="prow"><span>Mobile</span><b>${esc(u.mobile||'—')}</b></div>
      <div class="prow"><span>Syllabus track</span><b>${esc(u.course||'Not selected')}</b></div>
      <div class="prow"><span>Account</span><b>${u.sb?('Cloud ('+(SB.provider()==='google'?'Google':'Email')+')'):'Local (this device)'}</b></div>
      ${u.sb===1?'':`<div class="prow"><span>Recovery code</span><b>${esc(u.code||'—')}</b></div>`}
      <button class="btn" style="margin-top:14px" onclick="var f=document.getElementById('pedit');f.classList.toggle('hide');this.textContent=f.classList.contains('hide')?'Edit Profile':'Close Editor'">Edit Profile</button>
      <div id="pedit" class="hide" style="margin-top:16px"><form onsubmit="saveProfile(event)"><div id="m"></div>
        <label for="pn">Full Name</label><input id="pn" value="${esc(u.name)}" autocomplete="name" required>
        <label for="pe">Email</label><input id="pe" value="${esc(u.email)}" disabled>
        <label for="pm">Mobile</label><input id="pm" value="${esc(u.mobile||'')}">
        <label for="pc">Syllabus Track</label><select id="pc"><option value="">Not selected</option>${SYLLABUS.map(s=>`<option ${s.title===u.course?'selected':''}>${esc(s.title)}</option>`).join('')}</select>
        ${SB.user&&SB.provider()==='google'?'':`<label for="pp">New Password (optional)</label><input id="pp" type="password" autocomplete="new-password">`}
        <button class="btn block" style="margin-top:14px">Save Changes</button></form></div>
      <button class="btn ghost block" style="margin-top:10px;border-color:var(--bad);color:var(--bad)" onclick="delAcc()">Delete Account</button></div>`;
  } else if(view==='settings'){
    const PF=prefsGet(), dark=document.documentElement.getAttribute('data-theme')==='dark';
    body=`<div class="card"><h3>Appearance</h3>
      <label class="setrow"><span><b>Dark mode</b><br><span class="muted sm">Easier on the eyes at night</span></span>
        <span class="switch"><input type="checkbox" ${dark?'checked':''} onchange="themeToggle()" aria-label="Dark mode"><i></i></span></label></div>
    <div class="card"><h3>Test preferences</h3>
      <label class="setrow"><span><b>Shuffle questions</b><br><span class="muted sm">Default for every new test</span></span>
        <span class="switch"><input type="checkbox" ${PF.shQ?'checked':''} onchange="prefsSet({shQ:this.checked})" aria-label="Shuffle questions by default"><i></i></span></label>
      <label class="setrow"><span><b>Shuffle options</b><br><span class="muted sm">Default for every new test</span></span>
        <span class="switch"><input type="checkbox" ${PF.shO?'checked':''} onchange="prefsSet({shO:this.checked})" aria-label="Shuffle options by default"><i></i></span></label>
      <label class="setrow"><span><b>Default test mode</b><br><span class="muted sm">Practice reveals answers instantly</span></span>
        <select id="pfmode" onchange="prefsSet({mode:this.value})" style="max-width:170px">
          <option value="practice" ${PF.mode==='practice'?'selected':''}>Practice</option>
          <option value="exam" ${PF.mode==='exam'?'selected':''}>Exam</option></select></label>
      <p class="muted sm" id="psaved" aria-live="polite"></p></div>
    <div class="card"><h3>Account</h3>
      <div class="btnrow"><button class="btn ghost" onclick="logout()">Logout</button>
        <button class="btn ghost" onclick="clearMyData()">Clear progress &amp; history</button>
        <button class="btn ghost" style="border-color:var(--bad);color:var(--bad)" onclick="delAcc()">Delete account</button></div></div>`;
  } else if(view==='history'){
    /* legacy view: kept working for old bookmarks (no sidebar link). */
    const myres=st.res;
    body=`<div class="card"><h3 style="margin-bottom:12px">Test History</h3>${ myres.length?
      `<table><thead><tr><th>Date</th><th>Subject</th><th>Unit</th><th>Score</th><th>Attempted</th><th>%</th><th>Mode</th><th>Result</th></tr></thead><tbody>
       ${myres.map(r=>`<tr><td>${fdate(r.date)}</td><td>${esc(r.subject)}</td><td>${esc(r.unit)}</td>
       <td>${r.score}/${r.attempted||r.total}</td><td>${r.attempted||r.total}/${r.total}</td><td>${r.pct}%</td><td style="text-transform:capitalize">${esc(r.mode||"—")}</td>
       <td><span class="badge ${r.pct>=40?'ok':'bad'}">${r.pct>=40?'Pass':'Fail'}</span></td></tr>`).join('')}
       </tbody></table>`:'<p class="muted">No tests taken yet. <a href="/#/tests" style="color:var(--primary)">Take your first test →</a></p>'}</div>`;
  } else {
    const acts=dashActivity();
    body=`<div class="card dash-hero"><div>
        <h3>Welcome back, ${esc(u.name)} 👋</h3>
        <p class="muted">Syllabus track: ${esc(u.course||'Not selected')} · ${st.done} of ${st.total} units complete</p></div>
      ${dashDonut(st.pct)}</div>
    <div class="stat-grid">
      <div class="card stat"><b>${st.done}/${st.total}</b><span>Units completed</span></div>
      <div class="card stat"><b>${st.tests}</b><span>Tests taken</span></div>
      <div class="card stat"><b>${st.avg}%</b><span>Average score</span></div>
      <div class="card stat"><b>${st.saved}</b><span>Saved questions</span></div></div>
    <div class="dash-grid2">
      <div class="card"><h3>Subject completion</h3>
        ${SUBJECTS.map(s=>{const pc=subjPct(s.id);return `<div class="srow"><span>${esc(s.name)}</span><b>${pc}%</b></div><div class="bar thin"><i style="width:${pc}%"></i></div>`}).join('')}</div>
      <div class="card"><h3>Recent scores</h3>${dashTrend(st.res)}</div></div>
    <div class="card"><h3>Recent activity</h3>
      ${acts.length?acts.map(a=>`<a class="act" href="${a.url}"><span class="act-i">${a.icon}</span><span class="act-t">${esc(a.text)}</span><span class="act-d">${fdate(a.date)}</span></a>`).join(''):'<p class="muted">Nothing yet — study a unit or take a test to begin.</p>'}</div>
    <div class="card"><h3>Continue learning</h3>
      ${SUBJECTS.map(s=>`<div class="crow"><span>${esc(s.name)} — ${subjPct(s.id)}%</span><a class="btn sm ghost" href="/subject/${s.id}">Open</a></div>`).join('')}</div>`;
  }
  return head('Dashboard','Your learning at a glance')+
    `<section><div class="wrap"><div class="dash">${side}<div>${body}</div></div></div></section>`;
}

async function saveProfile(e){
  e.preventDefault(); const d=DB.get(); const u=d.users.find(x=>x.email===d.session);
  if(!u) return;
  u.name=$('#pn').value; u.mobile=$('#pm').value; u.course=$('#pc').value;
  if(!u.code) u.code=rid();
  const np=$('#pp')&&$('#pp').value;
  if(np){
    if(SB.user&&SB.provider()==='google'){ $('#m').innerHTML='<div class="msg err">Google accounts cannot set a password here. Use Google to log in.</div>'; return }
    try{ await SB.ready; }catch(_){}
    if(SB.mode==='supabase'&&SB.user){
      const {error}=await SB.setNewPassword(np);
      if(error){ $('#m').innerHTML='<div class="msg err">'+esc(error.message)+'</div>'; return }
    }
    u.pass=await sha(np);
  }
  DB.set(d); $('#m').innerHTML='<div class="msg ok">Profile saved.</div>'; shell();
}
function delAcc(){
  if(!confirm('Delete your account and all progress?')) return;
  try{ SB.signOutUser(); }catch(e){}
  const d=DB.raw(); const em=DB.get().session;
  d.users=d.users.filter(x=>x.email!==em);
  if(em){ delete d.p2[em]; delete d.r2[em]; delete d.b2[em]; delete d.v2[em]; }
  d.session=null;
  try{ localStorage.setItem(DB.k,JSON.stringify(d)); }catch(e){}
  try{ sessionStorage.removeItem(DB.k+'-s'); }catch(e){}
  nav('/');
}

function pLegal(key){
  const L = (typeof LEGAL!=='undefined' && LEGAL[key]) ? LEGAL[key] : null;
  if(!L) return p404();
  return head(L.title)+`<section><div class="wrap">
    <div class="card prose legal" style="max-width:860px;margin:0 auto">${L.body}</div>
    <p style="text-align:center;margin-top:18px;font-size:.88rem">
      <a href="/#/privacy" style="color:var(--primary)">Privacy Policy</a> &nbsp;·&nbsp;
      <a href="/#/terms" style="color:var(--primary)">Terms &amp; Conditions</a> &nbsp;·&nbsp;
      <a href="/#/disclaimer" style="color:var(--primary)">Disclaimer</a> &nbsp;·&nbsp;
      <a href="/#/copyright" style="color:var(--primary)">Copyright</a> &nbsp;·&nbsp;
      <a href="/contact" style="color:var(--primary)">Contact</a></p>
  </div></section>`;
}
function p404(){ return head('Page Not Found')+`<section><div class="wrap" style="text-align:center">
  <p style="margin-bottom:16px">The page you are looking for does not exist.</p><a class="btn" href="/">Back to Home</a></div></section>` }


/* ---------------- THEME (light / dark) ---------------- */
const THEME_KEY='amin-theme';
function themeGet(){ try{ return localStorage.getItem(THEME_KEY) }catch(e){ return null } }
function themeApply(t){
  document.documentElement.setAttribute('data-theme', t);
  const m=document.querySelector('meta[name="theme-color"]');
  if(m) m.setAttribute('content', t==='dark' ? '#080E19' : '#0B1F38');
  document.querySelectorAll('.tgl.theme').forEach(b=>{
    b.setAttribute('aria-label', t==='dark'?'Switch to light mode':'Switch to dark mode');
    b.setAttribute('title', t==='dark'?'Light mode':'Dark mode');
  });
}
function themeToggle(){
  const cur=document.documentElement.getAttribute('data-theme')==='dark'?'dark':'light';
  const next=cur==='dark'?'light':'dark';
  document.documentElement.classList.add('tswap');
  setTimeout(()=>document.documentElement.classList.remove('tswap'),320);
  try{ localStorage.setItem(THEME_KEY,next) }catch(e){}
  themeApply(next);
}
function themeBtn(){
  return `<button class="tgl theme" onclick="themeToggle()" aria-label="Toggle theme">
    <svg class="i-sun" viewBox="0 0 24 24"><path d="M12 17a5 5 0 100-10 5 5 0 000 10zm0 2.5a1 1 0 011 1V22a1 1 0 11-2 0v-1.5a1 1 0 011-1zm0-19a1 1 0 011 1V3a1 1 0 11-2 0V1.5a1 1 0 011-1zM20.5 11H22a1 1 0 110 2h-1.5a1 1 0 110-2zM2 11h1.5a1 1 0 110 2H2a1 1 0 110-2zm15.8-6.3a1 1 0 011.4 1.4l-1 1a1 1 0 11-1.5-1.4zM4.8 17.8a1 1 0 011.4 1.4l-1 1a1 1 0 11-1.4-1.4zm14.4 1.4a1 1 0 01-1.4 1.4l-1-1a1 1 0 011.4-1.4zM6.2 4.7a1 1 0 01-1.4 1.5l-1-1a1 1 0 011.4-1.4z"/></svg>
    <svg class="i-moon" viewBox="0 0 24 24"><path d="M21 13.2A9 9 0 1110.8 3a7 7 0 1010.2 10.2z"/></svg>
  </button>`;
}

/* ---------------- BACK TO TOP ---------------- */
function toTop(){ window.scrollTo({top:0,behavior:'smooth'}); }
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
/* App-only pages stay on the hash (/#/...) so they are never indexed as
   separate pages and never need server rewrites. Everything else is clean. */
const HASH_ONLY={tests:1,search:1,saved:1,auth:1,login:1,register:1,forgot:1,dashboard:1,privacy:1,terms:1,copyright:1,disclaimer:1};
function routeFromLocation(){
  const h=location.hash;
  if(h&&h.length>1&&h[1]==='/'){
    const raw=h.slice(1), qi=raw.indexOf('?');
    return {path:qi<0?raw:raw.slice(0,qi), qs:qi<0?'':raw.slice(qi+1), src:'hash'};
  }
  return {path:location.pathname, qs:location.search?location.search.slice(1):'', src:'path'};
}
async function router(){
  const my=++NAV_SEQ;
  clearInterval(QZ.tid); QZ.run=false; /* stop any running quiz clock when navigating */
  clearInterval(timer);                 /* stop the hero slider when leaving home */
  document.onkeydown=null;              /* release the slider arrow-key handler */
  let loc=routeFromLocation();
  let p=loc.path.split('/').filter(Boolean);
  /* legacy public hash link (e.g. #/syllabus, old bookmarks) -> clean URL */
  if(loc.src==='hash'&&!HASH_ONLY[p[0]]&&!(p[0]==='unit'&&p[3]==='test')){
    const clean='/'+p.join('/')+(loc.qs?'?'+loc.qs:'');
    history.replaceState(null,'',clean);
    loc={path:clean,qs:loc.qs,src:'path'}; p=loc.path.split('/').filter(Boolean);
  }
  /* clean URL typed for a hash-only app page -> canonical /#/ form (same
     document: 404.html and index.html are identical, so no reload is needed) */
  if(loc.src==='path'&&(HASH_ONLY[p[0]]||(p[0]==='unit'&&p[3]==='test'))){
    history.replaceState(null,'','/#/'+p.join('/')+(loc.qs?'?'+loc.qs:''));
    loc=routeFromLocation(); p=loc.path.split('/').filter(Boolean);
  }
  const q=new URLSearchParams(loc.qs||'');
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
  /* keep the canonical URL in sync with the visible clean URL (SEO) */
  const can=document.querySelector('link[rel="canonical"]');
  if(can) can.href=location.origin+location.pathname+(location.search||'');
}

/* ---------------- SLIDER ---------------- */
let idx=0, timer=null;
function goTo(i){
  idx=(i+SLIDES.length)%SLIDES.length;
  const el=document.getElementById('slides'); if(!el) return;
  el.style.transform=`translateX(-${idx*100}%)`;
  el.querySelectorAll('.slide').forEach((d,j)=>d.classList.toggle('act',j===idx));
  document.querySelectorAll('#dots button').forEach((d,j)=>d.classList.toggle('on',j===idx));
}
function go(n){ goTo(idx+n); restart(); }
function restart(){ clearInterval(timer); timer=setInterval(()=>goTo(idx+1),5000) }
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

document.addEventListener('click',e=>{
  if(!e.target.closest('#uwrap')) document.getElementById('uwrap')?.classList.remove('open');
  if(!e.target.closest('nav.main .item')) closeMenus();
  const nv=document.getElementById('nav');
  if(nv&&nv.classList.contains('open')&&!e.target.closest('header')) toggleNav();
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){ const nv=document.getElementById('nav'); if(nv&&nv.classList.contains('open')) toggleNav(); else closeMenus(); }
});
window.addEventListener('hashchange',router);
window.addEventListener('popstate',router); /* browser Back/Forward over clean URLs */
/* SPA link interceptor: same-origin /... links navigate without a reload.
   Skips # anchors, mailto/tel, new-tab and download links. */
document.addEventListener('click',e=>{
  if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return;
  const a=e.target.closest&&e.target.closest('a[href]');
  if(!a) return;
  const href=a.getAttribute('href');
  if(!href||href==='#'||href[0]!=='/'||a.target==='_blank'||a.hasAttribute('download')) return;
  let url; try{ url=new URL(href,location.origin); }catch(_){ return; }
  if(url.origin!==location.origin) return;
  e.preventDefault();
  goPage(url.pathname+url.search+url.hash);
});

/* boot */
themeApply(document.documentElement.getAttribute('data-theme')||'light');
if(window.matchMedia){
  const mq=window.matchMedia('(prefers-color-scheme:dark)');
  const onOS=e=>{ if(!themeGet()) themeApply(e.matches?'dark':'light'); };
  mq.addEventListener ? mq.addEventListener('change',onOS) : mq.addListener(onOS);
}
initTop();
router();
window.addEventListener('hashchange',()=>{
  if(location.hash.indexOf('#/search')===0){ const i=document.getElementById('sq'); if(i&&!i.value) i.focus(); }
});