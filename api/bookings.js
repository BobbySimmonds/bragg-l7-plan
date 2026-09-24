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
async function persistRemote(store) {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";
  if (!url || !token) return;
  try {
    await fetch(url.replace(/\/$/, "") + "/set/" + encodeURIComponent(BOOKINGS_KEY), {
      method: "POST",
      headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
      body: JSON.stringify({ initialised: true, updatedAt: new Date().toISOString(), bookings: store.bookings, tombs: store.tombs })
    });
  } catch (e) {
    console.error("kv_save", e);
  }
}
async function loadRemote() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";
  if (!url || !token) return null;
  try {
    const res = await fetch(url.replace(/\/$/, "") + "/get/" + encodeURIComponent(BOOKINGS_KEY), {
      headers: { Authorization: "Bearer " + token }
    });
    if (!res.ok) return null;
    const json = await res.json();
    const raw = json && (json.result || json.value || json);
    const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (!parsed) return null;
    if (Array.isArray(parsed)) return { bookings: parsed, tombs: Object.create(null) };
    return {
      bookings: Array.isArray(parsed.bookings) ? parsed.bookings : [],
      tombs: parsed.tombs && typeof parsed.tombs === "object" ? parsed.tombs : Object.create(null)
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
    store.bookings = mergeBookings(store.bookings, remote.bookings, store.tombs);
  }
  store.bookings = mergeBookings(store.bookings, [], store.tombs);
  return store.bookings;
}
async function save(bookings) {
  const store = g.__braggStore__;
  store.bookings = mergeBookings(bookings || [], [], store.tombs);
  await persistRemote(store);
  return store.bookings;
}
function tombstone(id, row) {
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
function rosterOf(hid) { return ROSTER[hid] || null; }
function floorOf(level) { return FLOORS.find(function (f) { return f.level === Number(level); }); }
function deskHeld(level, desk) {
  return HELD_DESKS.some(function (h) { return h.level === Number(level) && h.desk === Number(desk); });
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
    locked: !(row.date > today()),
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
module.exports = async function handler(req, res) {
  try {
    if (!res || typeof res.setHeader !== "function") return;
    if (req.method === "OPTIONS") return send(res, 204, {});
    const url = parseUrl(req);
    const who = auth(req);
    if (req.method === "GET" && url.searchParams.get("meta") === "1") {
      return send(res, 200, { ok: true, start: START, end: END, floors: FLOORS, today: today(), horizon: bookHorizon(), advanceDays: ADVANCE_DAYS, rosterCount: Object.keys(ROSTER).length });
    }
    if (req.method === "GET" && url.searchParams.get("who") === "1") {
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
      if (hadid && url.searchParams.get("mine") === "1") out = out.filter(function (r) { return r.hadid === hadid; });
      out.sort(function (a, b) { return a.date.localeCompare(b.date) || a.level - b.level || a.desk - b.desk; });
      return send(res, 200, { ok: true, today: today(), shared: true, bookings: out.map(function (r) { return pub(r, hadid, all && who.admin); }) });
    }
    if (req.method === "POST") {
      const body = await readBody(req);
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
          tombstone("", { hadid: hid, date: date });
          await persistRemote(g.__braggStore__);
        }
        return send(res, 200, { ok: true, alreadyGone: true });
      }
      const row = targets[0];
      if (!who.admin && row.hadid !== hid) return send(res, 403, { ok: false, error: "You can only cancel your own desk." });
      if (!who.admin && !(row.date > today())) return send(res, 409, { ok: false, error: "Too late to cancel that day." });
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
