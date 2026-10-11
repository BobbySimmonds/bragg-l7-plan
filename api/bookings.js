// Bragg desk booking API. No build step. Vercel runs this as /api/bookings.
//
// Bookings live in this process, and in Redis when KV_REST_API_URL and
// KV_REST_API_TOKEN are set (UPSTASH_REDIS_REST_URL / _TOKEN also work).
// The key is bragg:bookings. Without Redis, a cold start only has BOOTSTRAP
// plus the permanent rules. Do not delete BOOTSTRAP unless Redis is in use.
//
// ROSTER is repeated in book.js so the page can reject a bad HADID immediately.
// Change both lists. The server is the check that counts.
//
// PINNED_RULES and HELD_DESKS below are only the starting set. The admin
// screen saves the live list, standing desks and out-of-use desks with the
// bookings. A cold start uses those saved values when Redis is configured.
const ADMIN_PIN = "2109";
const START = "2026-09-21";
const END = "2026-12-18";
const ADVANCE_DAYS = 7;
const FLOORS = [
  { level: 5, desks: 32, note: "Temporary overflow" },
  { level: 6, desks: 20, note: "Not in use", enabled: false },
  { level: 7, desks: 150, note: "FF&E workstations" },
  { level: 8, desks: 152, note: "Not in use", enabled: false },
];
const HELD_DESKS = [{ level: 7, desk: 129 }, { level: 7, desk: 130 }];
const ROSTER = {
  acousi03: 1,
  aandre03: 1,
  srisias: 1,
  averma05: 1,
  bsimmo01: 1,
  bcorma02: 1,
  cwilke06: 1,
  csandi02: 1,
  dsaund03: 1,
  iexdtri: 1,
  ssoutdm: 1,
  portolef: 1,
  gtait01: 1,
  gk: 1,
  fbonil01: 1,
  hmosty01: 1,
  jkidd02: 1,
  jpenov01: 1,
  jpawas01: 1,
  kjenki06: 1,
  kung02: 1,
  wilksk: 1,
  laouka01: 1,
  lmendo01: 1,
  lshaw03: 1,
  savagem: 1,
  mboric01: 1,
  mtucke01: 1,
  mbowle01: 1,
  neiadd: 1,
  nrusso02: 1,
  nrashe03: 1,
  sdey01: 1,
  sthoma10: 1,
  cthila01: 1,
  raphaelw: 1,
  ytuong01: 1,
  acreig01: 1,
  dhc000820: 1,
  jander16: 1,
  obecke01: 1,
  pkadap01: 1,
  sth003: 1,
  tstapl01: 1,
  aajay01: 1,
  abukow01: 1,
  adarli02: 1,
  adonno01: 1,
  aether01: 1,
  agupta10: 1,
  araj06: 1,
  asheek01: 1,
  asyed02: 1,
  awylli01: 1,
  bbroad01: 1,
  blowe01: 1,
  bme003: 1,
  bpokhr01: 1,
  bschmi09: 1,
  bunder02: 1,
  cdinunzi: 1,
  cford04: 1,
  cgeorg10: 1,
  chanp: 1,
  csacco01: 1,
  dcarr05: 1,
  dgunaw02: 1,
  dh323199: 1,
  dhc000859: 1,
  dmorri01: 1,
  dpeter09: 1,
  dtrego01: 1,
  dworth03: 1,
  dxie02: 1,
  estamo01: 1,
  eward03: 1,
  fwilso04: 1,
  gbhask01: 1,
  gkumar01: 1,
  gpopat02: 1,
  gsnell02: 1,
  gwhite10: 1,
  hlunn01: 1,
  hmulle01: 1,
  hsingh20: 1,
  iisicha: 1,
  iispcar: 1,
  iisrraj: 1,
  issmisl: 1,
  jbaban01: 1,
  jbrenn08: 1,
  jhill05: 1,
  jkelly15: 1,
  jkelly19: 1,
  jketaw01: 1,
  jkuruv01: 1,
  jmann: 1,
  jmorri17: 1,
  jpilch02: 1,
  jsingh01: 1,
  kcarte02: 1,
  kkirkl01: 1,
  mbatti03: 1,
  mbrady02: 1,
  mcriso01: 1,
  mdawki02: 1,
  mdo06: 1,
  menorm01: 1,
  mkhiar02: 1,
  mstewa14: 1,
  mtorra01: 1,
  navedian: 1,
  ndoshi01: 1,
  nflynn01: 1,
  nhibbe02: 1,
  ntayeb01: 1,
  phodgk01: 1,
  rhasan01: 1,
  rredil01: 1,
  rtaylo24: 1,
  rwheel02: 1,
  sammul01: 1,
  schwarta: 1,
  sgavin: 1,
  sharri03: 1,
  sjaesc01: 1,
  sklind01: 1,
  smcmil05: 1,
  snesci01: 1,
  stonem: 1,
  tgaras03: 1,
  tvanth01: 1,
  ukhan03: 1,
  vrana04: 1,
  vsuram01: 1,
  wgalpi01: 1
};
const BOOKINGS_KEY = "bragg:bookings";
const BOOTSTRAP = [
  {id:"b_mu4tft3q_7lr8my",date:"2026-09-21",level:7,desk:33,hadid:"dpeter09",createdAt:"2026-09-17T00:53:11.318Z"},
  {id:"b_mu4tgamx_lm5pjw",date:"2026-09-21",level:7,desk:69,hadid:"schwarta",createdAt:"2026-09-17T00:53:34.041Z"},
  {id:"b_mu4t90s5_3zshm5",date:"2026-09-21",level:7,desk:148,hadid:"bcorma02",createdAt:"2026-09-17T00:47:54.677Z"},
  {id:"b_mu4t2xy7_7gxuee",date:"2026-09-22",level:7,desk:29,hadid:"dgunaw02",createdAt:"2026-09-17T00:43:11.071Z"},
  {id:"b_mu4t9ogt_mvubfp",date:"2026-09-22",level:7,desk:38,hadid:"jsingh01",createdAt:"2026-09-17T00:48:25.373Z"},
  {id:"b_mu4t5ult_a2pjk9",date:"2026-09-22",level:7,desk:75,hadid:"estamo01",createdAt:"2026-09-17T00:45:26.705Z"},
  {id:"b_mu4tc9z0_0y9qxw",date:"2026-09-22",level:7,desk:76,hadid:"cgeorg10",createdAt:"2026-09-17T00:50:00.000Z"},
  {id:"b_mu4t4wao_cuqusm",date:"2026-09-23",level:7,desk:33,hadid:"tstapl01",createdAt:"2026-09-17T00:44:42.240Z"},
  {id:"b_mu4t8ocn_di1oib",date:"2026-09-23",level:7,desk:38,hadid:"jsingh01",createdAt:"2026-09-17T00:47:38.567Z"},
  {id:"b_mu4t3t4k_i085rt",date:"2026-09-23",level:7,desk:76,hadid:"estamo01",createdAt:"2026-09-17T00:43:51.476Z"},
  {id:"b_mu4t8uet_r6pv5r",date:"2026-09-24",level:7,desk:38,hadid:"jsingh01",createdAt:"2026-09-17T00:47:46.421Z"},
  {id:"b_mu4ztlf7_lew1qj",date:"2026-09-24",level:7,desk:76,hadid:"kkirkl01",createdAt:"2026-09-17T03:51:52.243Z"},
  {id:"b_mu4t60z2_2qxl2g",date:"2026-09-25",level:7,desk:33,hadid:"tstapl01",createdAt:"2026-09-17T00:45:34.958Z"},
  {id:"b_mu4zu1ai_qxyl91",date:"2026-09-25",level:7,desk:76,hadid:"kkirkl01",createdAt:"2026-09-16T12:00:00.000Z"},
  {id:"b_mu4sz5cl_32wx7v",date:"2026-09-25",level:7,desk:147,hadid:"mboric01",createdAt:"2026-09-17T00:38:13.800Z"}
];
const BOOTSTRAP_TOMBS = ["b_mu4t5q31_2p5vdi", "b_mu4t5alq_4e24sj"];
const g = globalThis;
if (!g.__braggStore__) {
  g.__braggStore__ = { bookings: BOOTSTRAP.slice(), tombs: Object.create(null), ready: true };
}
function applyBootstrapTombs() {
  BOOTSTRAP_TOMBS.forEach(function (id) { g.__braggStore__.tombs[id] = 1; });
}
function isBookingId(k) {
  return typeof k === "string" && k.indexOf("b_") === 0;
}
function slotOf(row) {
  return String(row.date) + "|" + Number(row.level) + "|" + Number(row.desk);
}
function personDay(row) {
  return String(row.hadid || "").toLowerCase() + "|" + String(row.date);
}
function asBooking(row) {
  if (!row) return null;
  const hadid = hadidOf(row.hadid);
  const date = String(row.date || "");
  const level = Number(row.level);
  const desk = Number(row.desk);
  if (!hadid || !date || !level || !desk) return null;
  return {
    id: String(row.id || nid()),
    date: date,
    level: level,
    desk: desk,
    hadid: hadid,
    createdAt: row.createdAt || new Date().toISOString()
  };
}
function mergeBookings(base, incoming, tombs) {
  const dead = tombs || g.__braggStore__.tombs;
  const bySlot = Object.create(null);
  const byPerson = Object.create(null);
  function consider(raw) {
    const row = asBooking(raw);
    if (!row) return;
    if (dead[row.id]) return;
    const pdAt = dead["pd:" + personDay(row)];
    if (pdAt) {
      const tombIso = new Date(Number(pdAt)).toISOString();
      const created = raw && raw.createdAt ? String(raw.createdAt) : "";
      if (!created || created <= tombIso) return;
    }
    if (deskHeld(row.level, row.desk)) return;
    const slot = slotOf(row);
    const pd = personDay(row);
    const existingSlot = bySlot[slot];
    if (existingSlot && existingSlot.hadid !== row.hadid) {
      const keep = String(existingSlot.createdAt || "") <= String(row.createdAt || "") ? existingSlot : row;
      bySlot[slot] = keep;
      byPerson[personDay(keep)] = keep;
      return;
    }
    const existingPd = byPerson[pd];
    if (existingPd && slotOf(existingPd) !== slot) {
      const keep = String(existingPd.createdAt || "") <= String(row.createdAt || "") ? existingPd : row;
      delete bySlot[slotOf(existingPd)];
      bySlot[slotOf(keep)] = keep;
      byPerson[pd] = keep;
      return;
    }
    if (!existingSlot || String(row.createdAt || "") < String(existingSlot.createdAt || "")) {
      bySlot[slot] = row;
      byPerson[pd] = row;
    }
  }
  (base || []).forEach(consider);
  (incoming || []).forEach(consider);
  return Object.keys(bySlot).map(function (k) { return bySlot[k]; }).sort(function (a, b) {
    return a.date.localeCompare(b.date) || a.level - b.level || a.desk - b.desk;
  });
}
function kvEnv() {
  return {
    url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "",
    token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || ""
  };
}
function snapshot(store) {
  return {
    initialised: true,
    updatedAt: new Date().toISOString(),
    bookings: store.bookings,
    tombs: store.tombs,
    roster: store.roster || null,
    pins: store.pins || null,
    held: store.held || null
  };
}
async function persistRemote(store) {
  const kv = kvEnv();
  if (!kv.url || !kv.token) return false;
  try {
    await fetch(kv.url.replace(/\/$/, "") + "/set/" + encodeURIComponent(BOOKINGS_KEY), {
      method: "POST",
      headers: { Authorization: "Bearer " + kv.token, "Content-Type": "application/json" },
      body: JSON.stringify(snapshot(store))
    });
    return true;
  } catch (e) {
    console.error("kv_save", e);
    return false;
  }
}
async function loadRemote() {
  const kv = kvEnv();
  if (!kv.url || !kv.token) return null;
  try {
    const res = await fetch(kv.url.replace(/\/$/, "") + "/get/" + encodeURIComponent(BOOKINGS_KEY), {
      headers: { Authorization: "Bearer " + kv.token }
    });
    if (!res.ok) return null;
    const json = await res.json();
    const raw = json && (json.result || json.value || json);
    const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (!parsed) return null;
    if (Array.isArray(parsed)) return { bookings: parsed, tombs: Object.create(null) };
    return {
      bookings: Array.isArray(parsed.bookings) ? parsed.bookings : [],
      tombs: parsed.tombs && typeof parsed.tombs === "object" ? parsed.tombs : Object.create(null),
      roster: parsed.roster && typeof parsed.roster === "object" && !Array.isArray(parsed.roster) ? parsed.roster : null,
      pins: Array.isArray(parsed.pins) ? parsed.pins : null,
      held: Array.isArray(parsed.held) ? parsed.held : null
    };
  } catch (e) {
    console.error("kv_load", e);
    return null;
  }
}
async function load() {
  const store = g.__braggStore__;
  applyBootstrapTombs();
  const remote = await loadRemote();
  if (remote) {
    store.tombs = Object.assign(Object.create(null), store.tombs, remote.tombs);
    if (remote.roster) store.roster = remote.roster;
    if (remote.pins) store.pins = remote.pins.map(cleanRule).filter(Boolean);
    if (remote.held) store.held = dedupeHeld(remote.held);
    store.bookings = mergeBookings(store.bookings, remote.bookings, store.tombs);
  }
  ensureConfig(store);
  store.bookings = applyPinned(mergeBookings(store.bookings, [], store.tombs));
  return store.bookings;
}
async function save(bookings) {
  const store = g.__braggStore__;
  ensureConfig(store);
  store.bookings = applyPinned(mergeBookings(bookings || [], [], store.tombs));
  await persistRemote(store);
  return store.bookings;
}
const PINNED_RULES = [
  { hadid: "nrashe03", level: 7, desk: 136, dows: [2, 3, 4] },
  { hadid: "bsimmo01", level: 7, desk: 147, dows: [1, 2, 3, 4, 5], from: "2026-10-09" }
];
function cleanRule(raw) {
  if (!raw) return null;
  const hadid = hadidOf(raw.hadid);
  const level = Number(raw.level);
  const desk = Number(raw.desk);
  const seen = Object.create(null);
  const dows = (Array.isArray(raw.dows) ? raw.dows : []).map(Number).filter(function (n) {
    if (n < 1 || n > 5 || seen[n]) return false;
    seen[n] = 1;
    return true;
  }).sort();
  if (!hadid || !level || !desk || !dows.length) return null;
  const except = (Array.isArray(raw.except) ? raw.except : []).map(String).filter(function (d) { return /^\d{4}-\d{2}-\d{2}$/.test(d); });
  return {
    id: String(raw.id || ("rule_" + hadid + "_" + level + "_" + desk)),
    hadid: hadid,
    level: level,
    desk: desk,
    dows: dows,
    from: /^\d{4}-\d{2}-\d{2}$/.test(String(raw.from || "")) ? String(raw.from) : START,
    until: /^\d{4}-\d{2}-\d{2}$/.test(String(raw.until || "")) ? String(raw.until) : END,
    except: except
  };
}
function dedupeHeld(list) {
  const seen = Object.create(null);
  const out = [];
  (list || []).forEach(function (h) {
    const level = Number(h && h.level);
    const desk = Number(h && h.desk);
    if (!level || !desk) return;
    const key = level + "|" + desk;
    if (seen[key]) return;
    seen[key] = 1;
    out.push({ level: level, desk: desk });
  });
  out.sort(function (a, b) { return a.level - b.level || a.desk - b.desk; });
  return out;
}
function ensureConfig(store) {
  if (!store.roster || typeof store.roster !== "object" || Array.isArray(store.roster)) {
    store.roster = Object.create(null);
    Object.keys(ROSTER).forEach(function (k) { store.roster[k] = 1; });
  }
  if (!Array.isArray(store.pins)) store.pins = PINNED_RULES.map(cleanRule).filter(Boolean);
  if (!Array.isArray(store.held)) {
    const held = [];
    let d = 1;
    for (; d <= 22; d += 1) held.push({ level: 7, desk: d });
    HELD_DESKS.forEach(function (h) { held.push(h); });
    store.held = dedupeHeld(held);
  }
}
function isPinned(row) {
  return !!(row && (row.pinned || String(row.id || "").indexOf("pin_") === 0));
}
function pinnedForRange() {
  const out = [];
  const store = g.__braggStore__;
  const rules = store && Array.isArray(store.pins) ? store.pins : PINNED_RULES;
  let d = today();
  if (d < START) d = START;
  while (d <= END) {
    const dow = new Date(d + "T00:00:00Z").getUTCDay();
    rules.forEach(function (rule) {
      if (!rule || !Array.isArray(rule.dows) || rule.dows.indexOf(dow) === -1) return;
      if (rule.from && d < rule.from) return;
      if (rule.until && d > rule.until) return;
      if (Array.isArray(rule.except) && rule.except.indexOf(d) !== -1) return;
      out.push({
        id: "pin_" + rule.hadid + "_" + rule.desk + "_" + d,
        date: d,
        level: rule.level,
        desk: rule.desk,
        hadid: rule.hadid,
        createdAt: "2020-01-01T00:00:00.000Z",
        pinned: true
      });
    });
    d = addDays(d, 1);
  }
  return out;
}
function applyPinned(rows) {
  const pins = pinnedForRange();
  const slots = Object.create(null);
  const days = Object.create(null);
  pins.forEach(function (p) {
    slots[slotOf(p)] = 1;
    days[personDay(p)] = 1;
  });
  const kept = (rows || []).filter(function (r) {
    if (!r || isPinned(r)) return false;
    if (slots[slotOf(r)]) return false;
    if (days[personDay(r)]) return false;
    return true;
  });
  return kept.concat(pins);
}
function tombstone(id, row) {
  if (String(id || "").indexOf("pin_") === 0) return;
  const store = g.__braggStore__;
  const now = Date.now();
  if (isBookingId(id)) store.tombs[id] = now;
  if (row && row.hadid && row.date) store.tombs["pd:" + String(row.hadid).toLowerCase() + "|" + String(row.date)] = now;
}

function today() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Australia/Adelaide" });
}
function addDays(iso, n) {
  const parts = String(iso).split("-").map(Number);
  return new Date(Date.UTC(parts[0], parts[1] - 1, parts[2] + n)).toISOString().slice(0, 10);
}
function isWeekend(iso) {
  const d = new Date(String(iso) + "T00:00:00Z").getUTCDay();
  return d === 0 || d === 6;
}
function weekdayHorizon(day) {
  let d = day || today();
  let count = isWeekend(d) ? 0 : 1;
  while (count < ADVANCE_DAYS) {
    d = addDays(d, 1);
    if (!isWeekend(d)) count += 1;
  }
  return d;
}
function bookHorizon(day) {
  const limit = weekdayHorizon(day || today());
  return limit < END ? limit : END;
}
function header(req, name) {
  const h = req.headers || {};
  if (typeof h.get === "function") return String(h.get(name) || "");
  return String(h[name] || h[name.toLowerCase()] || "");
}
function parseUrl(req) {
  try { return new URL(req.url || "/api/bookings", "https://bragg-desk-booking.vercel.app"); }
  catch (e) { return new URL("https://bragg-desk-booking.vercel.app/api/bookings"); }
}
function auth(req) { return { admin: header(req, "x-admin-pin").trim() === ADMIN_PIN }; }
function hadidOf(v) { return String(v || "").trim().toLowerCase(); }
function rosterOf(hid) {
  const roster = g.__braggStore__ && g.__braggStore__.roster;
  if (roster) return roster[hid] ? 1 : null;
  return ROSTER[hid] || null;
}
function floorOf(level) { return FLOORS.find(function (f) { return f.level === Number(level); }); }
function deskHeld(level, desk) {
  level = Number(level);
  desk = Number(desk);
  const held = g.__braggStore__ && g.__braggStore__.held;
  if (Array.isArray(held)) return held.some(function (h) { return Number(h.level) === level && Number(h.desk) === desk; });
  if (level === 7 && desk >= 1 && desk <= 22) return true;
  return HELD_DESKS.some(function (h) { return h.level === level && h.desk === desk; });
}
function deskName(level, desk) {
  const n = String(desk).padStart(2, "0");
  if (Number(level) === 7) return "WS7." + n;
  if (Number(level) === 8) return "WS8." + n;
  return "Desk " + n;
}
function send(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Admin-Pin");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
  res.end(JSON.stringify(payload));
}
function nid() { return "b_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8); }
function pub(row, hadid, admin) {
  const mine = !!(hadid && row.hadid === hadid);
  return {
    id: row.id,
    date: row.date, level: row.level, desk: row.desk,
    hadid: row.hadid || "",
    mine: mine,
    createdAt: row.createdAt,
    locked: row.date < today() || !!row.pinned,
    pinned: !!row.pinned,
  };
}
function readBody(req) {
  return new Promise(function (resolve, reject) {
    if (req.body && typeof req.body === "object") return resolve(req.body);
    let raw = "";
    if (typeof req.on !== "function") return resolve({});
    req.on("data", function (c) { raw += c; if (raw.length > 400000) reject(new Error("too_large")); });
    req.on("end", function () {
      if (!raw) return resolve({});
      try { resolve(JSON.parse(raw)); } catch (e) { reject(new Error("bad_json")); }
    });
    req.on("error", reject);
  });
}
function adminState(message) {
  const store = g.__braggStore__;
  const kv = kvEnv();
  return {
    ok: true,
    message: message || "",
    today: today(),
    start: START,
    end: END,
    floors: FLOORS,
    roster: Object.keys(store.roster).sort(),
    pins: store.pins,
    held: store.held,
    durable: !!(kv.url && kv.token)
  };
}
function validHadid(hid) { return /^[a-z0-9]{2,16}$/.test(hid); }
function exceptPin(hadid, level, desk, date) {
  const rule = (g.__braggStore__.pins || []).find(function (p) {
    return p.hadid === hadid && Number(p.level) === Number(level) && Number(p.desk) === Number(desk);
  });
  if (!rule) return false;
  if (!Array.isArray(rule.except)) rule.except = [];
  if (rule.except.indexOf(date) === -1) rule.except.push(date);
  return true;
}
async function adminHandle(res, body) {
  const op = String(body.adminOp || "");
  const store = g.__braggStore__;
  await load();
  if (op === "add-hadid") {
    const hid = hadidOf(body.hadid);
    if (!validHadid(hid)) return send(res, 400, { ok: false, error: "HADID should be 2 to 16 letters or numbers." });
    if (store.roster[hid]) return send(res, 409, { ok: false, error: hid + " is already on the list." });
    store.roster[hid] = 1;
    await save(store.bookings);
    return send(res, 200, adminState("Added " + hid + "."));
  }
  if (op === "remove-hadid") {
    const hid = hadidOf(body.hadid);
    if (!store.roster[hid]) return send(res, 404, { ok: false, error: "That HADID is not on the list." });
    delete store.roster[hid];
    store.pins = store.pins.filter(function (p) { return p.hadid !== hid; });
    const day = today();
    const drop = store.bookings.filter(function (r) { return r.hadid === hid && r.date >= day && !isPinned(r); });
    drop.forEach(function (r) { tombstone(r.id, r); });
    const gone = Object.create(null);
    drop.forEach(function (r) { gone[r.id] = 1; });
    await save(store.bookings.filter(function (r) { return !gone[r.id]; }));
    return send(res, 200, adminState("Removed " + hid + " and cleared " + drop.length + " future booking" + (drop.length === 1 ? "" : "s") + "."));
  }
  if (op === "book") {
    const hid = hadidOf(body.hadid);
    const date = String(body.date || "");
    const level = Number(body.level);
    const desk = Number(body.desk);
    const floor = floorOf(level);
    const dow = new Date(date + "T00:00:00Z").getUTCDay();
    const day = today();
    if (!rosterOf(hid)) return send(res, 403, { ok: false, error: "That HADID is not on the list." });
    if (!(date >= day) || date > END || dow === 0 || dow === 6) return send(res, 400, { ok: false, error: "Pick a weekday from today through " + END + "." });
    if (!floor || floor.enabled === false || !(desk >= 1) || desk > floor.desks) return send(res, 400, { ok: false, error: floor && floor.enabled === false ? "That level is not in use." : "That desk does not exist." });
    if (deskHeld(level, desk)) return send(res, 400, { ok: false, error: "That desk is out of use." });
    let rows = await load();
    const taken = rows.find(function (r) { return r.date === date && r.level === level && r.desk === desk && r.hadid !== hid; });
    if (taken) return send(res, 409, { ok: false, error: deskName(level, desk) + " is already taken by " + taken.hadid + "." });
    const mine = rows.find(function (r) { return r.hadid === hid && r.date === date; });
    if (mine && mine.level === level && mine.desk === desk) return send(res, 200, adminState(hid + " already has " + deskName(level, desk) + " that day."));
    if (mine && isPinned(mine)) exceptPin(mine.hadid, mine.level, mine.desk, mine.date);
    if (mine && !isPinned(mine)) tombstone(mine.id);
    rows = rows.filter(function (r) { return !(mine && r.id === mine.id); });
    const booking = { id: nid(), date: date, level: level, desk: desk, hadid: hid, createdAt: new Date().toISOString() };
    rows.push(booking);
    const kept = (await save(rows)).find(function (r) { return r.id === booking.id; });
    if (!kept) return send(res, 409, { ok: false, error: "That desk is already taken." });
    const moved = mine ? " Moved off " + deskName(mine.level, mine.desk) + "." : "";
    return send(res, 200, adminState("Booked " + deskName(level, desk) + " for " + hid + " on " + date + "." + moved));
  }
  if (op === "cancel") {
    const id = String(body.id || "");
    const rows = await load();
    const row = rows.find(function (r) { return r.id === id; });
    if (!row) return send(res, 404, { ok: false, error: "That booking is already gone." });
    if (row.date < today()) return send(res, 409, { ok: false, error: "That day has already happened." });
    if (isPinned(row)) {
      if (!exceptPin(row.hadid, row.level, row.desk, row.date)) return send(res, 409, { ok: false, error: "Could not skip that standing day." });
      await save(store.bookings);
      return send(res, 200, adminState("Skipped " + row.date + " for " + row.hadid + ". The standing booking stays on the other days."));
    }
    tombstone(row.id, row);
    await save(rows.filter(function (r) { return r.id !== row.id; }));
    return send(res, 200, adminState("Cancelled " + deskName(row.level, row.desk) + " for " + row.hadid + " on " + row.date + "."));
  }
  if (op === "add-pin") {
    const rule = cleanRule({
      hadid: body.hadid,
      level: body.level,
      desk: body.desk,
      dows: body.dows,
      from: body.from || today(),
      until: END,
      except: []
    });
    if (!rule) return send(res, 400, { ok: false, error: "Need a HADID, a desk and at least one weekday." });
    if (rule.from < today()) rule.from = today();
    if (!rosterOf(rule.hadid)) return send(res, 403, { ok: false, error: "That HADID is not on the list." });
    const floor = floorOf(rule.level);
    if (!floor || floor.enabled === false || rule.desk < 1 || rule.desk > floor.desks) return send(res, 400, { ok: false, error: "That desk does not exist." });
    if (deskHeld(rule.level, rule.desk)) return send(res, 400, { ok: false, error: "That desk is out of use." });
    if (store.pins.some(function (p) { return p.level === rule.level && p.desk === rule.desk; })) return send(res, 409, { ok: false, error: deskName(rule.level, rule.desk) + " already has a standing booking." });
    store.pins.push(rule);
    await save(store.bookings);
    return send(res, 200, adminState("Standing booking set for " + rule.hadid + " on " + deskName(rule.level, rule.desk) + "."));
  }
  if (op === "remove-pin") {
    const id = String(body.id || "");
    const before = store.pins.length;
    store.pins = store.pins.filter(function (p) { return p.id !== id; });
    if (store.pins.length === before) return send(res, 404, { ok: false, error: "That standing booking is already gone." });
    await save(store.bookings);
    return send(res, 200, adminState("Removed that standing booking."));
  }
  if (op === "hold" || op === "release") {
    const level = Number(body.level);
    const desk = Number(body.desk);
    const floor = floorOf(level);
    if (!floor || !(desk >= 1) || desk > floor.desks) return send(res, 400, { ok: false, error: "That desk does not exist." });
    if (op === "release") {
      store.held = store.held.filter(function (h) { return !(h.level === level && h.desk === desk); });
      await save(store.bookings);
      return send(res, 200, adminState(deskName(level, desk) + " can be booked again."));
    }
    if (!deskHeld(level, desk)) store.held = dedupeHeld(store.held.concat([{ level: level, desk: desk }]));
    store.pins = store.pins.filter(function (p) { return !(p.level === level && p.desk === desk); });
    const day = today();
    const drop = store.bookings.filter(function (r) { return r.level === level && r.desk === desk && r.date >= day && !isPinned(r); });
    drop.forEach(function (r) { tombstone(r.id, r); });
    const gone = Object.create(null);
    drop.forEach(function (r) { gone[r.id] = 1; });
    await save(store.bookings.filter(function (r) { return !gone[r.id]; }));
    return send(res, 200, adminState(deskName(level, desk) + " is out of use. Cleared " + drop.length + " future booking" + (drop.length === 1 ? "" : "s") + "."));
  }
  return send(res, 400, { ok: false, error: "Unknown admin action." });
}
module.exports = async function handler(req, res) {
  try {
    if (!res || typeof res.setHeader !== "function") return;
    if (req.method === "OPTIONS") return send(res, 204, {});
    const url = parseUrl(req);
    const who = auth(req);
    if (req.method === "GET" && url.searchParams.get("meta") === "1") {
      await load();
      const store = g.__braggStore__;
      return send(res, 200, { ok: true, start: START, end: END, floors: FLOORS, today: today(), horizon: bookHorizon(), advanceDays: ADVANCE_DAYS, rosterCount: Object.keys(store.roster).length, held: store.held });
    }
    if (req.method === "GET" && url.searchParams.get("admin") === "1") {
      if (!who.admin) return send(res, 403, { ok: false, error: "Wrong PIN." });
      await load();
      return send(res, 200, adminState());
    }
    if (req.method === "GET" && url.searchParams.get("who") === "1") {
      await load();
      const hid = hadidOf(url.searchParams.get("hadid"));
      const person = rosterOf(hid);
      if (!person) return send(res, 403, { ok: false, error: "That HADID is not on the Bragg pilot list." });
      return send(res, 200, { ok: true, hadid: hid });
    }
    if (req.method === "GET") {
      const rows = await load();
      const date = url.searchParams.get("date");
      const hadid = hadidOf(url.searchParams.get("hadid"));
      const all = url.searchParams.get("all") === "1";
      if (all && !who.admin) return send(res, 403, { ok: false, error: "Admin only." });
      let out = rows;
      if (date) out = out.filter(function (r) { return r.date === date; });
      const person = who.admin ? hadidOf(url.searchParams.get("person")) : "";
      if (person) out = out.filter(function (r) { return r.hadid === person; });
      if (hadid && url.searchParams.get("mine") === "1") out = out.filter(function (r) { return r.hadid === hadid; });
      out.sort(function (a, b) { return a.date.localeCompare(b.date) || a.level - b.level || a.desk - b.desk; });
      return send(res, 200, { ok: true, today: today(), shared: true, bookings: out.map(function (r) { return pub(r, hadid, all && who.admin); }) });
    }
    if (req.method === "POST") {
      const body = await readBody(req);
      if (body && body.adminOp) {
        if (!who.admin) return send(res, 403, { ok: false, error: "Wrong PIN." });
        return adminHandle(res, body);
      }
      await load();
      if (body && body.wipe && who.admin) {
        g.__braggStore__.bookings = [];
        g.__braggStore__.tombs = Object.create(null);
        await persistRemote(g.__braggStore__);
        return send(res, 200, { ok: true, wiped: true, remaining: 0 });
      }
      if (body && body.sync === true) {
        const hid = hadidOf(body.hadid);
        if (!rosterOf(hid)) return send(res, 403, { ok: false, error: "That HADID is not on the Bragg pilot list." });
        const incoming = Array.isArray(body.bookings) ? body.bookings : [];
        const tombs = Array.isArray(body.tombstones) ? body.tombstones : [];
        tombs.forEach(function (t) {
          if (!t) return;
          if (typeof t === "string") {
            if (isBookingId(t)) tombstone(t);
            return;
          }
          if (isBookingId(t.id)) tombstone(t.id);
        });
        const rows = await load();
        const merged = mergeBookings(rows, incoming, g.__braggStore__.tombs);
        await save(merged);
        return send(res, 200, { ok: true, shared: true, bookings: merged.map(function (r) { return pub(r, hid, false); }) });
      }
      if (body && body.restore && who.admin) {
        const incoming = Array.isArray(body.bookings) ? body.bookings : [];
        const rows = await load();
        const bySlot = {};
        rows.forEach(function (r) { bySlot[r.date + "|" + r.level + "|" + r.desk] = r; });
        incoming.forEach(function (r) {
          const date = String(r.date || "");
          const level = Number(r.level);
          const desk = Number(r.desk);
          const hid = hadidOf(r.hadid);
          if (!date || !hid || !level || !desk) return;
          const key = date + "|" + level + "|" + desk;
          const prev = bySlot[key];
          bySlot[key] = {
            id: prev && prev.id ? prev.id : (r.id || nid()),
            date: date, level: level, desk: desk, hadid: hid,
            createdAt: (prev && prev.createdAt) || r.createdAt || new Date().toISOString()
          };
        });
        const next = Object.keys(bySlot).map(function (k) { return bySlot[k]; });
        await save(next);
        return send(res, 200, { ok: true, restored: next.length });
      }
      const hid = hadidOf(body.hadid);
      const person = rosterOf(hid);
      if (!person) return send(res, 403, { ok: false, error: "That HADID is not on the Bragg pilot list." });
      const date = String(body.date || "");
      const level = Number(body.level);
      const desk = Number(body.desk);
      const floor = floorOf(level);
      const dow = new Date(date + "T00:00:00Z").getUTCDay();
      const day = today();
      if (date > bookHorizon(day)) return send(res, 400, { ok: false, error: "You can only book the next 7 weekdays." });
      if (!(date >= START) || date > END || date < day || dow === 0 || dow === 6) return send(res, 400, { ok: false, error: "That day is not bookable." });
      if (!floor || floor.enabled === false || !(desk >= 1) || desk > floor.desks) return send(res, 400, { ok: false, error: floor && floor.enabled === false ? "That level is not in use." : "That desk does not exist." });
      if (deskHeld(level, desk)) return send(res, 400, { ok: false, error: "That desk is out of use." });
      const rows = await load();
      const mine = rows.find(function (r) { return r.hadid === hid && r.date === date; });
      if (mine) return send(res, 409, { ok: false, error: "You already have " + deskName(mine.level, mine.desk) + " on that day.", booking: pub(mine, hid, false) });
      const taken = rows.find(function (r) { return r.date === date && r.level === level && r.desk === desk; });
      if (taken) return send(res, 409, { ok: false, error: "That desk is already taken." });
      const booking = { id: nid(), date: date, level: level, desk: desk, hadid: hid, createdAt: new Date().toISOString() };
      rows.push(booking);
      const kept = (await save(rows)).find(function (r) { return r.id === booking.id; });
      if (!kept) return send(res, 409, { ok: false, error: "That desk is already taken." });
      return send(res, 201, { ok: true, booking: pub(kept, hid, false) });
    }
    if (req.method === "DELETE") {
      const body = await readBody(req);
      await load();
      const hid = hadidOf(body.hadid);
      const id = String(body.id || "");
      const date = String(body.date || "");
      if (!id && !date) return send(res, 400, { ok: false, error: "Missing booking." });
      if (!who.admin && !rosterOf(hid)) return send(res, 403, { ok: false, error: "That HADID is not on the Bragg pilot list." });
      const rows = await load();
      let targets = [];
      if (id) {
        const row = rows.find(function (r) { return r.id === id; });
        if (row && (who.admin || row.hadid === hid)) {
          targets = rows.filter(function (r) { return r.hadid === row.hadid && r.date === row.date; });
        }
      }
      if (!targets.length && hid && date) {
        targets = rows.filter(function (r) { return r.hadid === hid && r.date === date; });
      }
      if (!targets.length) {
        if (hid && date) {
          const pins = pinnedForRange().filter(function (p) { return p.hadid === hid && p.date === date; });
          if (pins.length) return send(res, 409, { ok: false, error: "That desk is booked permanently." });
          tombstone("", { hadid: hid, date: date });
          await persistRemote(g.__braggStore__);
        }
        return send(res, 200, { ok: true, alreadyGone: true });
      }
      if (targets.some(isPinned)) return send(res, 409, { ok: false, error: "That desk is booked permanently." });
      const row = targets[0];
      if (!who.admin && row.hadid !== hid) return send(res, 403, { ok: false, error: "You can only cancel your own desk." });
      if (!who.admin && row.date < today()) return send(res, 409, { ok: false, error: "Too late to cancel that day." });
      const drop = Object.create(null);
      targets.forEach(function (r) { drop[r.id] = 1; tombstone(r.id, r); });
      const next = rows.filter(function (r) { return !drop[r.id]; });
      await save(next);
      return send(res, 200, { ok: true, tombstone: { id: row.id, slot: slotOf(row) } });
    }
    return send(res, 405, { ok: false, error: "Method not allowed." });
  } catch (err) {
    console.error(err);
    const msg = String((err && err.message) || err);
    return send(res, 500, { ok: false, error: "Booking service hiccup. Try again.", detail: msg });
  }
};
