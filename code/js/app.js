/* SafeGuard - interactive car accident report (prototype) */
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------------- Icons (Clean SVGs) ---------------- */
const IC = {
  arrowLeft: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
  arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  chevR: '<path d="m9 18 6-6-6-6"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2M9 17h6"/><path d="M7 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM17 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>',
  crash: '<path d="M17 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L16 10l-2-2H8c-.6 0-1.1.4-1.4.9L5.500 11M4 17h1M9 17h4"/><path d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM16 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3 4l2 2M8 2v3M2 9h3"/>',
  tree: '<path d="m17 14 3 3.300a1 1 0 0 1-.7 1.700H4.700a1 1 0 0 1-.7-1.700L7 14h-.3a1 1 0 0 1-.7-1.700L9 9h-.2A1 1 0 0 1 8 7.300L12 3l4 4.300a1 1 0 0 1-.8 1.700H15l3 3.300a1 1 0 0 1-.7 1.700H17zM12 22v-3"/>',
  warn: '<path d="m21.700 18-8-14a2 2 0 0 0-3.500 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.700-3zM12 9v4M12 17h.01"/>',
  shirt: '<path d="M20.400 5.600 16 4a4 4 0 0 1-8 0L3.600 5.600a1 1 0 0 0-.6 1.100l.6 3.500a1 1 0 0 0 1 .8H6v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9h1.400a1 1 0 0 0 1-.8l.6-3.500a1 1 0 0 0-.6-1.100z"/>',
  smile: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8 14s1.500 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
  phone: '<path d="M22 16.900v3a2 2 0 0 1-2.200 2 19.800 19.800 0 0 1-8.600-3.100 19.500 19.500 0 0 1-6-6A19.800 19.800 0 0 1 2.100 4.200 2 2 0 0 1 4.100 2h3a2 2 0 0 1 2 1.700c.1 1 .4 1.900.7 2.800a2 2 0 0 1-.5 2.100L8.100 9.900a16 16 0 0 0 6 6l1.300-1.300a2 2 0 0 1 2.100-.4c.9.3 1.800.6 2.800.7a2 2 0 0 1 1.700 2z"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.500.5l3-3a5 5 0 0 0-7-7l-1.700 1.700M14 11a5 5 0 0 0-7.500-.5l-3 3a5 5 0 0 0 7 7l1.700-1.700"/>',
  idcard: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM6 10h4M6 14h3M14 10h4M14 14h4"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><path d="M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>',
  pinFill: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2"/>',
  edit: '<path d="M12 20h9M16.500 3.500a2.100 2.100 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><path d="M12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>',
  info: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 16v-4M12 8h.01"/>',
  wrench: '<path d="M14.700 6.300a1 1 0 0 0 0 1.400l1.600 1.600a1 1 0 0 0 1.400 0l3.800-3.800a6 6 0 0 1-7.900 7.900l-6.900 6.900a2.100 2.100 0 0 1-3-3l6.900-6.900a6 6 0 0 1 7.900-7.900z"/>',
  card: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM2 10h20"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>',
  send: '<path d="m22 2-7 20-4-9-9-4zM22 2 11 13"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h8"/>',
  receipt: '<path d="M4 2v20l3-2 2.500 2L12 20l2.500 2L17 20l3 2V2l-3 2-2.500-2L12 4 9.500 2 7 4zM8 8h8M8 12h8M8 16h5"/>',
  headset: '<path d="M3 14v-2a9 9 0 0 1 18 0v2M3 14h3v5H4a1 1 0 0 1-1-1zM21 14h-3v5h2a1 1 0 0 0 1-1z"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/>',
  up: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  down: '<path d="M12 5v14M19 12l-7 7-7-7"/>',
  stop: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',
  rotate: '<path d="M21 12a9 9 0 1 1-3-6.700L21 8M21 3v5h-5"/>',
  move: '<path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>',
  signal: '<path d="M2 20h2M7 16h2M12 12h2M17 8h2M22 4h2"/>',
  wifi: '<path d="M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M12 20h.01"/>',
  battery: '<rect x="2" y="7" width="16" height="10" rx="2"/><path d="M18 11h2v2h-2zM6 10h8v4H6z" fill="currentColor"/>'
};

function icon(name, cls = '', style = '') {
  return `<svg class="ic ${cls}" viewBox="0 0 24 24" style="${style}">${IC[name] || ''}</svg>`;
}
function hydrateIcons(root = document) {
  $$('i[data-ic]', root).forEach(el => {
    el.outerHTML = icon(el.dataset.ic, el.className, el.getAttribute('style') || '');
  });
}

/* ---------------- State ---------------- */
const S = {
  screen: 1, history: [],
  incident: null, connected: false, agreed: false,
  damage: new Set(), parts: new Set(),
  photos: [null, null, null, null], camStep: 0,
  placed: { A: null, B: null },
  move: { A: null, B: null }, // unselected by default!
  ctx: new Set(), rem: new Set(), sel: null, zoom: 1, vpW: 350, vpH: 250,
  shopSelected: false, submitted: false
};

const ZONES = {
  fbumper: ['Front Bumper & Grill', 'Front Bumper & Grill', 'Front Bumper'],
  fhood: ['Front Lights & Hood', 'Front Hood', 'Hood'],
  lfender: ['Left Front Fender', 'Left Front Fender', 'Left Front Fender'],
  rfender: ['Right Front Fender', 'Right Front Fender', 'Right Front Fender'],
  lfdoor: ['Left Front Door', 'Left Front Door', 'Left Front Door'],
  rfdoor: ['Right Front Door', 'Right Front Door', 'Right Front Door'],
  lrdoor: ['Left Rear Door', 'Left Rear Door', 'Left Rear Door'],
  rrdoor: ['Right Rear Door', 'Right Rear Door', 'Right Rear Door'],
  lquarter: ['Left Rear Quarter', 'Left Rear Quarter', 'Left Rear Quarter'],
  rquarter: ['Right Rear Quarter', 'Right Rear Quarter', 'Right Rear Quarter'],
  trunk: ['Trunk & Rear Lights', 'Trunk & Rear Lights', 'Trunk'],
  rbumper: ['Rear Bumper', 'Rear Bumper', 'Rear Bumper']
};

/* ---------------- Toast & sheets ---------------- */
let toastT;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('show'), 2600);
}
function openSheet(id) {
  $('#sheetBg').classList.add('show');
  $('#' + id).classList.add('show');
}
function closeSheets() {
  $('#sheetBg').classList.remove('show');
  $$('.sheet').forEach(s => s.classList.remove('show'));
}

/* ---------------- Companion (GUY) ---------------- */
function buildCompanions() {
  $$('.companion[data-img]').forEach(c => {
    c.innerHTML = `<div class="guy ${c.dataset.wide ? 'wide' : ''}"><img src="assets/${c.dataset.img}.png" alt="">${c.dataset.flash ? '<span class="flash"></span>' : ''}</div><div class="bubble"></div>`;
    c.style.setProperty('--idle', c.dataset.idle || 'wave');
  });
}

function typeInto(bubble, html) {
  clearInterval(bubble._t);
  bubble.style.minHeight = '';
  bubble.innerHTML = html;
  bubble.style.minHeight = bubble.offsetHeight + 'px';
  const walker = document.createTreeWalker(bubble, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let n;
  while ((n = walker.nextNode())) nodes.push({ n, full: n.nodeValue });
  nodes.forEach(o => (o.n.nodeValue = ''));
  const total = nodes.reduce((a, o) => a + o.full.length, 0);
  const caret = document.createElement('span');
  caret.className = 'caret';
  bubble.appendChild(caret);
  let shown = 0;
  setTimeout(() => {
    bubble._t = setInterval(() => {
      shown += 2;
      let left = shown;
      nodes.forEach(o => {
        const k = Math.max(0, Math.min(o.full.length, left));
        o.n.nodeValue = o.full.slice(0, k);
        left -= o.full.length;
      });
      if (shown >= total) {
        clearInterval(bubble._t);
        setTimeout(() => caret.remove(), 600);
      }
    }, 24);
  }, 850);
}

function playCompanion(screenEl, newImg, newText) {
  const c = $('.companion', screenEl);
  if (!c) return;
  if (newImg) { $('.guy img', c).src = 'assets/' + newImg + '.png'; }
  c.classList.remove('play');
  void c.offsetWidth;
  c.classList.add('play');
  typeInto($('.bubble', c), newText || c.dataset.text);
}

/* ---------------- Router ---------------- */
const HEAD = {
  1: { type: 'home' },
  2: { step: 'STEP 1 OF 6', title: 'Safety & Triage', p: 16.6, close: true },
  3: { step: 'STEP 2 OF 6', title: 'Connect Drivers', p: 33.3 },
  4: { step: 'STEP 3 OF 6', title: 'Location & Time', p: 50 },
  5: { step: 'STEP 4 OF 6', title: 'Vehicle Damage', p: 66.6 },
  6: { step: 'STEP 5 OF 6', title: 'Evidence Photos', p: 83.3 },
  7: { step: 'STEP 6 OF 6', title: 'Scene & Remarks', p: 100 },
  8: { step: 'FINAL STEP', title: 'Mutual Review & Confirmation', p: 100 },
  9: { type: 'portal' }
};

const timers = {};

function go(n, back = false) {
  if (n === S.screen && $('#s' + n).classList.contains('active')) return;
  if (S.screen === 6) stopCamera();
  if (!back) S.history.push(S.screen);
  S.screen = n;
  $$('.screen').forEach(s => s.classList.remove('active'));
  const el = $('#s' + n);
  el.classList.add('active');
  $('.scroll', el).scrollTop = 0;

  const h = HEAD[n], head = $('#head');
  head.className = 'head ' + (h.type || 'step');
  if (!h.type) {
    $('#hStep').textContent = h.step;
    $('#hTitle').textContent = h.title;
    $('[data-act=close]', head).classList.toggle('hidden-btn', !h.close);
    $('#hBar').style.width = h.p + '%';
  }
  playCompanion(el);

  ({ 3: enter3, 4: enter4, 5: enter5, 6: enter6, 7: enter7, 8: enter8, 9: enter9 }[n] || (() => {}))();
}

function back() {
  const prev = S.history.pop();
  if (prev) go(prev, true);
}

/* ---------------- Gates (validation per CTA) ---------------- */
const GATES = {
  2: () => {
    if (!S.incident) return 'Please tap what happened first.';
    if (S.incident !== 'collision') return "This demo covers 'Collision with another vehicle' only.";
  },
  3: () => (S.connected ? null : 'Waiting for the other driver to connect...'),
  5: () => (S.damage.size || S.parts.size || $('#otherPart').value.trim() ? null : 'Tap at least one damaged part of your car.'),
  7: () => (S.placed.A && S.placed.B ? null : 'Drag both cars onto the map first.'),
  8: () => (S.agreed ? null : 'Waiting for Jozef to review...')
};

function gated(btn, ok) {
  const gateFn = GATES[btn.dataset.gate];
  if (!gateFn) return ok();
  const msg = gateFn();
  if (msg) {
    btn.classList.remove('shake');
    void btn.offsetWidth;
    btn.classList.add('shake');
    toast(msg);
    return;
  }
  ok();
}

/* ---------------- Screen 2: Triage ---------------- */
function initTriage() {
  $$('.inc').forEach(b => b.addEventListener('click', () => {
    $$('.inc').forEach(x => x.classList.remove('sel'));
    b.classList.add('sel');
    S.incident = b.dataset.inc;
    if (S.incident === 'object') toast('Heads up: for guardrails or signs we would prompt a 158 Police call.');
    if (S.incident === 'chain') toast('Police assistance is recommended for 3+ vehicles.');
  }));
}

/* ---------------- Screen 3: Driver Pairing ---------------- */
function buildQR() {
  const N = 25;
  let seed = 884920;
  const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
  const finder = (x, y) => [[0, 0], [N - 7, 0], [0, N - 7]].some(([fx, fy]) => x >= fx - 1 && x <= fx + 7 && y >= fy - 1 && y <= fy + 7);
  let r = '';
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (!finder(x, y) && rnd() > 0.52) r += `<rect x="${x}" y="${y}" width="1.02" height="1.02"/>`;
    }
  }
  [[0, 0], [N - 7, 0], [0, N - 7]].forEach(([x, y]) => {
    r += `<rect x="${x + 0.5}" y="${y + 0.5}" width="6" height="6" fill="none" stroke="#2C365A" stroke-width="1"/><rect x="${x + 2}" y="${y + 2}" width="3" height="3"/>`;
  });
  $('#qrBox').innerHTML = `<svg viewBox="0 0 ${N} ${N}" fill="#2C365A" shape-rendering="crispEdges">${r}</svg>`;
}

function connect() {
  if (S.connected) return;
  S.connected = true;
  clearTimeout(timers.conn);
  const p = $('#qrPill');
  p.className = 'pill ok';
  p.innerHTML = icon('check', '', 'font-size:16px') + '<span>Driver B (Jozef Chabron &bull; Toyota RAV4) connected!</span>';
  $('#qrBox').classList.add('done');
  $('#s3cta').classList.remove('disabled');
  toast('Jozef joined claim #ALZ-894');
}

function enter3() {
  if (!S.connected) {
    clearTimeout(timers.conn);
    timers.conn = setTimeout(connect, 3200);
  }
}

/* ---------------- Screen 4: Location ---------------- */
function enter4() {}
function initLocation() {
  $('#editLoc').addEventListener('click', e => {
    const a = $('#addr');
    if (a.tagName === 'B') {
      const i = document.createElement('input');
      i.value = a.textContent;
      i.id = 'addr';
      a.replaceWith(i);
      i.focus();
      e.target.textContent = 'Save location';
    } else {
      const b = document.createElement('b');
      b.id = 'addr';
      b.textContent = a.value.trim() || 'Bajkalska 29, 821 09 Bratislava';
      a.replaceWith(b);
      e.target.textContent = 'Edit location';
      toast('Location updated');
    }
  });
}

/* ---------------- Screen 5: Damage Blueprint ---------------- */
function initBlueprint() {
  const g = $('#bpGrid');
  const z = (k, col, row) => `<button class="zone" data-z="${k}" style="grid-column:${col};grid-row:${row}">${ZONES[k][0]}</button>`;
  g.innerHTML = 
    z('fbumper', 2, 1) + z('fhood', 2, 2) + z('lfender', 1, 2) + z('rfender', 3, 2) +
    z('lfdoor', 1, 3) + z('rfdoor', 3, 3) + z('lrdoor', 1, 4) + z('rrdoor', 3, 4) +
    z('lquarter', 1, 5) + z('rquarter', 3, 5) + z('trunk', 2, 5) + z('rbumper', 2, 6) +
    `<div class="roof"><svg viewBox="0 0 100 130" preserveAspectRatio="none"><path d="M18 14c0-8 10-10 32-10s32 2 32 10l4 30v50l-4 24c0 8-10 10-32 10s-32-2-32-10l-4-24V44z" fill="rgba(246,243,238,.9)" stroke="#2C365A" stroke-width="2.5"/><path d="M26 40h48l-4 14H30zM30 90h40l4 14H26z" fill="rgba(44,54,90,.15)" stroke="#2C365A" stroke-width="1.5"/></svg><span>ROOF</span></div>`;

  g.addEventListener('click', e => {
    const b = e.target.closest('.zone');
    if (!b) return;
    const k = b.dataset.z;
    b.classList.toggle('sel');
    S.damage.has(k) ? S.damage.delete(k) : S.damage.add(k);
    updDmg();
  });

  $('#partChips').addEventListener('click', e => {
    const c = e.target.closest('.chip');
    if (!c) return;
    c.classList.toggle('on');
    c.classList.contains('on') ? S.parts.add(c.textContent.trim()) : S.parts.delete(c.textContent.trim());
    updDmg();
  });
}

function updDmg() {
  const n = S.damage.size;
  $('#dmgCount').textContent = `${n} damaged area${n === 1 ? '' : 's'} selected`;
}
function enter5() { updDmg(); }

/* ---------------- Screen 6: Guided Camera (Using real photos) ---------------- */
let stream = null;

const PHOTO_ASSETS = [
  'assets/TWOcars.jpg',          // 1. Wide Scene View
  'assets/TWOcars.jpg',          // 2. Point of Contact
  'assets/crashedCARdetail.jpg', // 3. Your Damage
  'assets/SPZ.jpg'               // 4. Other Vehicle's License Plate
];

const photoLabel = () => {
  const ks = [...S.damage];
  if (!ks.length) return 'Your Damage';
  return 'Your Damage: ' + ks.slice(0, 2).map(k => ZONES[k][2]).join(' & ');
};

const SLOTS = () => [
  ['Wide Scene View', '(Both cars & road)'],
  ['Point of Contact', '(Where cars touched)'],
  [photoLabel(), '(Captured from your damage area)'],
  ["Other Vehicle's License Plate", '(Clear view of registration plate)']
];

const PROMPTS = () => [
  'Step back 5 meters and take a wide photo showing both cars and the road.',
  'Get close and capture the point of contact where the cars touched.',
  'Photograph your vehicle damage: ' + photoLabel().replace('Your Damage: ', '') + '.',
  "Frame the other vehicle's license plate so every character is readable."
];

function renderCam() {
  const s = S.camStep;
  const anyDone = S.photos.some(Boolean);
  const allDone = S.photos.every(Boolean);

  $('#camPrompt').innerHTML = allDone
    ? '<b>All 4 photos captured!</b> Tap Save Photos &amp; Continue.'
    : `<b>Step ${s + 1} of 4:</b> ${PROMPTS()[s]}`;

  // Update viewfinder image with the assigned asset
  const pv = $('#camPhotoView');
  const targetPhoto = S.photos[s] || PHOTO_ASSETS[s];
  pv.style.backgroundImage = `url(${targetPhoto})`;

  // Render slots checklist
  $('#slots').innerHTML = SLOTS().map((t, i) => {
    const isDone = Boolean(S.photos[i]);
    const thumbImg = S.photos[i] || PHOTO_ASSETS[i];
    return `<button class="card slot ${isDone ? 'done' : ''} ${i === s ? 'active' : ''}" data-i="${i}">
      <span class="n">${isDone ? icon('check', '', 'font-size:14px') : (i + 1)}</span>
      <span style="flex:1"><b>${t[0]}</b><small>${t[1]}</small></span>
      <img class="th" src="${thumbImg}" alt="" style="${isDone ? 'display:block' : ''}">
    </button>`;
  }).join('');

  // NOTE: User can click Save Photos & Continue at any time!
  $('#s6cta').classList.remove('disabled');
}

async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
    const v = $('#camVideo');
    v.srcObject = stream;
    v.classList.remove('hide-c');
    $('#camPhotoView').classList.add('hide-c');
  } catch (e) {
    $('#camVideo').classList.add('hide-c');
    $('#camPhotoView').classList.remove('hide-c');
  }
}

function stopCamera() {
  if (stream) {
    stream.getTracks().forEach(t => t.stop());
    stream = null;
  }
}

function takePhoto() {
  const s = S.camStep;
  const f = $('#camFlash');
  f.classList.remove('go');
  void f.offsetWidth;
  f.classList.add('go');

  const v = $('#camVideo');
  if (stream && v.videoWidth) {
    const c = document.createElement('canvas');
    c.width = 320;
    c.height = 240;
    c.getContext('2d').drawImage(v, 0, 0, 320, 240);
    S.photos[s] = c.toDataURL('image/jpeg', 0.8);
  } else {
    S.photos[s] = PHOTO_ASSETS[s];
  }

  // Advance to the next un-captured slot
  const next = [1, 2, 3, 0].map(o => (s + o) % 4).find(i => !S.photos[i]);
  if (next !== undefined) S.camStep = next;
  setTimeout(renderCam, 200);
}

function enter6() {
  renderCam();
  startCamera();
}

function initCamera() {
  $('#shutter').addEventListener('click', takePhoto);
  $('#slots').addEventListener('click', e => {
    const b = e.target.closest('.slot');
    if (b) {
      S.camStep = +b.dataset.i;
      renderCam();
    }
  });
}

/* ---------------- Screen 7: Map Scene (with map.jpg & unselected movement buttons) ---------------- */
const vp = () => $('#mapVp');
const ASSET = { A: 'assets/car-a.png', B: 'assets/car-b.png' };
const MOVES = [
  ['forward', 'Moving Forward', 'up'],
  ['stopped', 'Stopped', 'stop'],
  ['reversing', 'Reversing', 'down']
];

function toF(cx, cy) {
  const r = vp().getBoundingClientRect(), W = r.width, H = r.height, z = S.zoom;
  return {
    fx: ((cx - r.left - W / 2) / z + W / 2) / W,
    fy: ((cy - r.top - H / 2) / z + H / 2) / H,
    inside: cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom
  };
}

function renderSlot(k) {
  const slot = $('#slot' + k);
  const p = S.placed[k];
  if (!p) {
    slot.className = 'mslot empty';
    slot.innerHTML = `<div class="tray-car" data-k="${k}"><img src="${ASSET[k]}" alt="Car ${k}"></div><div class="hint">Drag onto the map</div>`;
  } else {
    slot.className = 'mslot';
    // All 3 movement buttons UNSELECTED by default until user taps one!
    slot.innerHTML = MOVES.map((m, i) => {
      const isSelected = S.move[k] === m[0];
      return `<button class="mv ${isSelected ? 'sel' : ''}" data-k="${k}" data-m="${m[0]}" style="--k:${i}">${icon(m[2])}${m[1]}</button>`;
    }).join('');
  }

  const ready = S.placed.A && S.placed.B;
  $('#s7cta').classList.toggle('disabled', !ready);
  $('#mapEmpty').style.opacity = (S.placed.A || S.placed.B) ? 0 : 1;
}

function applyCar(k) {
  const p = S.placed[k];
  if (!p) return;
  p.el.style.left = p.fx * 100 + '%';
  p.el.style.top = p.fy * 100 + '%';
  $('.rot', p.el).style.transform = `rotate(${p.ang}deg)`;
  p.el.classList.toggle('sel', S.sel === k);
  updateImpact();
}

function selectCar(k) {
  S.sel = k;
  ['A', 'B'].forEach(applyCar);
  if (k && S.placed[k]) {
    $('#rotVal').textContent = Math.round(((S.placed[k].ang % 360) + 360) % 360);
  }
}

function placeCar(k, fx, fy) {
  const el = document.createElement('div');
  el.className = 'mcar';
  el.dataset.k = k;
  el.innerHTML = `<div class="rot"><span class="beam"></span><img class="body" src="${ASSET[k]}" alt=""><span class="rh" title="Rotate">${icon('rotate')}</span></div>`;
  $('#world').appendChild(el);
  S.placed[k] = {
    fx: Math.min(0.96, Math.max(0.04, fx)),
    fy: Math.min(0.95, Math.max(0.05, fy)),
    ang: 0,
    el
  };
  bindCar(el, k);
  renderSlot(k);
  selectCar(k);
}

function removeCar(k) {
  if (S.placed[k]) {
    S.placed[k].el.remove();
    S.placed[k] = null;
  }
  S.move[k] = null; // reset movement state
  if (S.sel === k) S.sel = null;
  renderSlot(k);
  updateImpact();
}

function bindCar(el, k) {
  el.addEventListener('pointerdown', e => {
    if (e.target.closest('.rh')) return;
    e.preventDefault();
    el.setPointerCapture(e.pointerId);
    selectCar(k);
    let outside = false;
    el.style.cursor = 'grabbing';

    const move = ev => {
      const f = toF(ev.clientX, ev.clientY);
      const p = S.placed[k];
      p.fx = f.fx;
      p.fy = f.fy;
      outside = !f.inside;
      el.style.opacity = outside ? 0.4 : 1;
      applyCar(k);
    };

    const up = () => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up);
      el.removeEventListener('pointercancel', up);
      el.style.cursor = '';
      el.style.opacity = 1;
      if (outside) {
        removeCar(k);
        toast(`Car ${k} returned to tray`);
      } else {
        const p = S.placed[k];
        p.fx = Math.min(0.97, Math.max(0.03, p.fx));
        p.fy = Math.min(0.97, Math.max(0.03, p.fy));
        applyCar(k);
      }
    };

    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
  });

  const rh = $('.rh', el);
  rh.addEventListener('pointerdown', e => {
    e.preventDefault();
    e.stopPropagation();
    rh.setPointerCapture(e.pointerId);
    selectCar(k);

    const move = ev => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      let a = Math.atan2(ev.clientY - cy, ev.clientX - cx) * 180 / Math.PI;
      if (ev.shiftKey) a = Math.round(a / 15) * 15;
      S.placed[k].ang = a;
      applyCar(k);
      $('#rotVal').textContent = Math.round(((a % 360) + 360) % 360);
    };

    const up = () => {
      rh.removeEventListener('pointermove', move);
      rh.removeEventListener('pointerup', up);
      rh.removeEventListener('pointercancel', up);
    };

    rh.addEventListener('pointermove', move);
    rh.addEventListener('pointerup', up);
    rh.addEventListener('pointercancel', up);
  });
}

function updateImpact() {
  const old = $('#impact');
  const { A, B } = S.placed;
  if (!A || !B) {
    if (old) old.remove();
    return;
  }
  const r = vp().getBoundingClientRect();
  const d = Math.hypot((A.fx - B.fx) * r.width, (A.fy - B.fy) * r.height);
  if (d < 56) {
    if (!old) {
      const i = document.createElement('div');
      i.className = 'impact';
      i.id = 'impact';
      i.innerHTML = '<svg viewBox="0 0 48 48"><path d="M24 2l5 12 12-6-6 12 12 4-12 6 6 12-12-6-5 12-5-12-12 6 6-12L1 22l12-4L7 8l12 6z" fill="#F4E6A6" stroke="#2C365A" stroke-width="2" stroke-linejoin="round"/></svg>';
      $('#world').appendChild(i);
    }
    const i = $('#impact');
    i.style.left = (A.fx + B.fx) / 2 * 100 + '%';
    i.style.top = (A.fy + B.fy) / 2 * 100 + '%';
  } else if (old) {
    old.remove();
  }
}

function startTrayDrag(e, k) {
  e.preventDefault();
  const tray = e.currentTarget;
  const g = document.createElement('img');
  g.className = 'drag-car-ghost';
  g.src = ASSET[k];
  g.style.left = e.clientX + 'px';
  g.style.top = e.clientY + 'px';
  document.body.appendChild(g);
  tray.classList.add('lifted');

  const move = ev => {
    g.style.left = ev.clientX + 'px';
    g.style.top = ev.clientY + 'px';
    vp().style.outline = toF(ev.clientX, ev.clientY).inside ? '3px solid #F4E6A6' : '';
    vp().style.outlineOffset = '-3px';
  };

  const up = ev => {
    window.removeEventListener('pointermove', move);
    window.removeEventListener('pointerup', up);
    window.removeEventListener('pointercancel', up);
    g.remove();
    vp().style.outline = '';
    const f = toF(ev.clientX, ev.clientY);
    if (f.inside) {
      placeCar(k, f.fx, f.fy);
    } else {
      tray.classList.remove('lifted');
      toast('Drop the car onto the map');
    }
  };

  window.addEventListener('pointermove', move);
  window.addEventListener('pointerup', up);
  window.addEventListener('pointercancel', up);
}

function initMap() {
  ['A', 'B'].forEach(renderSlot);

  $('.movers').addEventListener('pointerdown', e => {
    const t = e.target.closest('.tray-car');
    if (t) {
      startTrayDrag({
        preventDefault: () => e.preventDefault(),
        clientX: e.clientX,
        clientY: e.clientY,
        currentTarget: t
      }, t.dataset.k);
    }
  });

  // Clicking on movement button sets the selection state
  $('.movers').addEventListener('click', e => {
    const b = e.target.closest('.mv');
    if (!b) return;
    const k = b.dataset.k;
    S.move[k] = b.dataset.m;
    $$(`.mv[data-k="${k}"]`).forEach(x => x.classList.toggle('sel', x === b));
  });

  vp().addEventListener('pointerdown', e => {
    if (!e.target.closest('.mcar') && !e.target.closest('.zoom')) selectCar(null);
  });

  const zoom = d => {
    S.zoom = Math.min(1.8, Math.max(1, +(S.zoom + d).toFixed(2)));
    $('#world').style.transform = `scale(${S.zoom})`;
    setTimeout(updateImpact, 360);
  };
  $('#zIn').addEventListener('click', () => zoom(0.25));
  $('#zOut').addEventListener('click', () => zoom(-0.25));

  $('#ctxChips').addEventListener('click', e => {
    const c = e.target.closest('.chip');
    if (!c) return;
    c.classList.toggle('on');
    c.classList.contains('on') ? S.ctx.add(c.textContent.trim()) : S.ctx.delete(c.textContent.trim());
  });

  $('#remChips').addEventListener('click', e => {
    const c = e.target.closest('.chip');
    if (!c) return;
    c.classList.toggle('on');
    c.classList.contains('on') ? S.rem.add(c.textContent.trim()) : S.rem.delete(c.textContent.trim());
  });

  // Voice note
  let rec = null;
  const mic = $('#mic');
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  mic.addEventListener('click', () => {
    if (mic.classList.contains('rec')) {
      mic.classList.remove('rec');
      if (rec) rec.stop();
      toast('Voice note saved');
      return;
    }
    mic.classList.add('rec');
    toast('Recording... tap the mic again to stop');
    if (SR) {
      rec = new SR();
      rec.lang = 'en-US';
      rec.onresult = ev => {
        $('#remText').value += (($('#remText').value ? ' ' : '') + ev.results[0][0].transcript);
      };
      rec.onend = () => mic.classList.remove('rec');
      try { rec.start(); } catch (_) {}
    }
  });

  $('#s7cta').addEventListener('click', e => gated(e.currentTarget, sendScene));
}

function enter7() {
  const r = vp().getBoundingClientRect();
  if (r.width) {
    S.vpW = r.width;
    S.vpH = r.height;
  }
}

function sendScene() {
  $('#sending').classList.add('show');
  setTimeout(() => {
    $('#sending').classList.remove('show');
    go(8);
  }, 1700);
}

/* ---------------- Screen 8: Mutual Review ---------------- */
const MOVE_TXT = { forward: 'Moving Forward', stopped: 'Stopped', reversing: 'Reversing' };

function enter8() {
  S.agreed = false;
  const b = $('#banner');
  b.classList.remove('ok');
  $('.bi', b).innerHTML = '<span class="spin" style="border-color:rgba(255,255,255,0.35);border-top-color:#fff"></span>';
  $('#bannerTxt').textContent = 'Waiting for Jozef to review the map reconstruction...';
  $('#s8cta').classList.add('disabled');

  const dmg = [...S.damage].map(k => ZONES[k][1]).concat([...S.parts]);
  const other = $('#otherPart').value.trim();
  if (other) dmg.push(other);
  $('#rvDamage').textContent = dmg.join(', ') || 'None';

  $('#rvMoveA').textContent = S.move.A ? MOVE_TXT[S.move.A] : 'Not specified';
  $('#rvMoveB').textContent = S.move.B ? MOVE_TXT[S.move.B] : 'Not specified';

  const rem = [...S.rem].map(t => t.charAt(0) + t.slice(1).toLowerCase());
  const txt = $('#remText').value.trim();
  $('#rvRemA').textContent = [txt ? `"${txt}"` : '', ...rem].filter(Boolean).join('  -  ') || 'None';

  // Mini reconstruction preview
  const sm = $('#sumMap');
  $$('.mc', sm).forEach(n => n.remove());
  const sc = (sm.clientWidth || 330) / (S.vpW || 350);
  ['A', 'B'].forEach(k => {
    const p = S.placed[k];
    if (!p) return;
    const d = document.createElement('div');
    d.className = 'mc';
    d.style.cssText = `left:${p.fx * 100}%;top:${p.fy * 100}%;width:${36 * sc}px;height:${63 * sc}px;transform:translate(-50%,-50%) rotate(${p.ang}deg)`;
    d.innerHTML = `<img src="${ASSET[k]}" alt="">`;
    sm.appendChild(d);
  });

  clearTimeout(timers.agree);
  timers.agree = setTimeout(() => {
    S.agreed = true;
    b.classList.add('ok');
    $('.bi', b).innerHTML = icon('check', '', 'font-size:16px');
    $('#bannerTxt').textContent = 'Jozef reviewed and agreed with the map reconstruction.';
    $('#s8cta').classList.remove('disabled');
    toast('Jozef agreed');
  }, 2500);
}

/* ---------------- Screen 9: Tracker & Direct Repair Selection ---------------- */
function enter9() {}

function confetti() {
  const cols = ['#2C365A', '#606c38', '#e29578', '#F4E6A6', '#ffddd2', '#DCECEF'];
  for (let i = 0; i < 44; i++) {
    const c = document.createElement('i');
    c.className = 'confetti';
    c.style.cssText = `left:${Math.random() * 100}%;background:${cols[i % 6]};animation-delay:${Math.random() * 0.5}s;animation-duration:${2 + Math.random() * 1.5}s;border-radius:${Math.random() > 0.5 ? '50%' : '2px'}`;
    $('#phone').appendChild(c);
    setTimeout(() => c.remove(), 4200);
  }
}

function initPortal() {
  // Direct 1-tap select: no modal/sheet!
  $('#shopBtn').addEventListener('click', () => {
    S.shopSelected = true;
    const t = $('#shopBtn');
    t.classList.add('done-t');
    $('#shopReq').textContent = 'CONFIRMED';
    $('#shopTitle').textContent = 'Authorized Repair Shop Selected';
    $('#shopSub').innerHTML = 'Partner garage confirmed ' + icon('check', '', 'font-size:13px;display:inline-block');
    // Enable the final submission button!
    $('#submitFinal').classList.remove('disabled');
    toast('Authorized repair shop selected');
  });

  $('#notesBtn').addEventListener('click', () => $('#notesBox').classList.toggle('open'));

  $('#submitFinal').addEventListener('click', e => {
    const b = e.currentTarget;
    if (S.submitted) return;
    if (!S.shopSelected) {
      b.classList.remove('shake');
      void b.offsetWidth;
      b.classList.add('shake');
      toast('Please select an authorized repair shop first.');
      return;
    }

    S.submitted = true;
    // Clean text + SVG icon, no Unicode mojibake
    b.innerHTML = icon('check', '', 'font-size:16px;margin-right:6px') + '<span>Claim Submitted</span>';
    b.classList.add('disabled');

    $('#st2').className = 'step done';
    $('#st2 .dot').innerHTML = icon('check', '', 'font-size:12px');
    $('#st2s').textContent = 'Completed today  -  Partner garage selected';
    $('#st3').className = 'step cur';
    confetti();

    // Friendly reassurance without employee name
    playCompanion(
      $('#s9'),
      'guy-two',
      'All sent, <b>Ema</b>! We will review your claim within 24 hours. You can close this page now.'
    );
    $('#comp9').classList.add('rev');
    $('#comp9 .guy').classList.add('wide');
    $('#comp9').style.setProperty('--idle', 'hop');
    $('#s9 .scroll').scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------------- Boot ---------------- */
function boot() {
  buildCompanions();
  hydrateIcons();
  buildQR();
  initTriage();
  initLocation();
  initBlueprint();
  initCamera();
  initMap();
  initPortal();
  hydrateIcons();

  // Global click delegate
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-go],[data-toast],[data-sheet],[data-close],[data-act]');
    if (!t) return;
    if (t.dataset.toast) return toast(t.dataset.toast);
    if (t.dataset.sheet) return openSheet(t.dataset.sheet);
    if (t.hasAttribute('data-close')) return closeSheets();
    if (t.dataset.act === 'back') return back();
    if (t.dataset.act === 'close') {
      S.history = [];
      return go(1, true);
    }
    if (t.dataset.gate) return gated(t, () => go(+t.dataset.go));
    if (t.dataset.go) go(+t.dataset.go);
  });

  $('#sheetBg').addEventListener('click', closeSheets);
  $('#protoLink').addEventListener('click', () => openSheet('sheetProto'));
  $('#onePhone').addEventListener('click', () => {
    connect();
    toast("Great! You'll scan Jozef's license & plate on this phone.");
  });

  $('#shareBtn').addEventListener('click', () => {
    const url = 'https://safeguard.example/claim/ALZ-894';
    if (navigator.share) {
      navigator.share({ title: 'SafeGuard claim #ALZ-894', url }).catch(() => {});
    } else {
      if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
      toast('Link copied - paste it into an SMS to Jozef');
    }
  });

  document.addEventListener('keydown', e => e.key === 'Escape' && closeSheets());

  // Auto-fit mockup to viewport height
  function fitDevice() {
    const dev = document.querySelector('.iphone-device');
    if (!dev) return;
    const targetH = 886;
    const targetW = 424;
    const pad = 32;
    const availH = Math.max(300, window.innerHeight - pad);
    const availW = Math.max(300, window.innerWidth - pad);
    const scale = Math.min(1, availH / targetH, availW / targetW);
    dev.style.transform = `scale(${scale.toFixed(4)})`;
  }
  window.addEventListener('resize', fitDevice);
  window.addEventListener('orientationchange', fitDevice);
  fitDevice();

  // Deep-link via hash (#1 to #9) or default to #1
  const h = +location.hash.slice(1);
  go(h >= 1 && h <= 9 ? h : 1, true);
}

boot();
})();
