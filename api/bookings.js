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
const ROSTER = {
  acousi03: { name: "Alison Cousins" },
  aandre03: { name: "Andrea Andrews" },
  srisias: { name: "Anthony Risitano" },
  averma05: { name: "Apoorva Verma" },
  bsimmo01: { name: "Bobby Simmonds" },
  bcorma02: { name: "Brenda Cormack" },
  cwilke06: { name: "Carmel Wilkes" },
  csandi02: { name: "Colin Sandiford" },
  dsaund03: { name: "Dale Saunders" },
  iexdtri: { name: "Deborah Clothier" },
  ssoutdm: { name: "Debra Southwell" },
  portolef: { name: "Francesca Portolesi" },
  gtait01: { name: "Gabrielle Tait" },
  gk: { name: "George Killis" },
  fbonil01: { name: "Herson Bonilla" },
  hmosty01: { name: "Howard Mostyn" },
  jkidd02: { name: "James Kidd" },
  jpenov01: { name: "Jasminka Penov" },
  jpawas01: { name: "Jasraj Pawaskar" },
  kjenki06: { name: "Katrina Jenkins" },
  kung02: { name: "Kim Guet Ung" },
  wilksk: { name: "Krystyna Wilks" },
  laouka01: { name: "Lawrance Aoukar" },
  lmendo01: { name: "Lawrence Mendonca" },
  lshaw03: { name: "Lisa Shaw" },
  savagem: { name: "Mariarosaria Savage" },
  mboric01: { name: "Melika Boric" },
  mtucke01: { name: "Melissa Tucker" },
  mbowle01: { name: "Michael Bowley" },
  neiadd: { name: "Neil Addleton" },
  nrusso02: { name: "Nicolla Russo" },
  nrashe03: { name: "Nizar Rasheed" },
  sdey01: { name: "Shelli Dey" },
  sthoma10: { name: "Sonya Thomas" },
  cthila01: { name: "Udalamatta Thilakarathna" },
  raphaelw: { name: "Wendy Raphael" },
  ytuong01: { name: "Yvonne Tuong" },
  acreig01: { name: "acreig01" },
  dhc000820: { name: "dhc000820" },
  jander16: { name: "jander16" },
  obecke01: { name: "obecke01" },
  pkadap01: { name: "pkadap01" },
  sth003: { name: "sth003" },
  tstapl01: { name: "tstapl01" },
  aajay01: { name: "aajay01" },
  abukow01: { name: "abukow01" },
  adarli02: { name: "adarli02" },
  adonno01: { name: "adonno01" },
  aether01: { name: "aether01" },
  agupta10: { name: "agupta10" },
  araj06: { name: "araj06" },
  asheek01: { name: "asheek01" },
  awylli01: { name: "awylli01" },
  bbroad01: { name: "bbroad01" },
  blowe01: { name: "blowe01" },
  bme003: { name: "bme003" },
  bpokhr01: { name: "bpokhr01" },
  bschmi09: { name: "bschmi09" },
  bunder02: { name: "bunder02" },
  cdinunzi: { name: "cdinunzi" },
  cford04: { name: "cford04" },
  cgeorg10: { name: "cgeorg10" },
  chanp: { name: "chanp" },
  csacco01: { name: "csacco01" },
  dcarr05: { name: "dcarr05" },
  dgunaw02: { name: "dgunaw02" },
  dh323199: { name: "dh323199" },
  dhc000859: { name: "dhc000859" },
  dmorri01: { name: "dmorri01" },
  dpeter09: { name: "dpeter09" },
  dtrego01: { name: "dtrego01" },
  dworth03: { name: "dworth03" },
  dxie02: { name: "dxie02" },
  estamo01: { name: "estamo01" },
  eward03: { name: "eward03" },
  gbhask01: { name: "gbhask01" },
  gkumar01: { name: "gkumar01" },
  gpopat02: { name: "gpopat02" },
  gsnell02: { name: "gsnell02" },
  gwhite10: { name: "gwhite10" },
  hlunn01: { name: "hlunn01" },
  hmulle01: { name: "hmulle01" },
  hsingh20: { name: "hsingh20" },
  iisicha: { name: "iisicha" },
  iispcar: { name: "iispcar" },
  iisrraj: { name: "iisrraj" },
  issmisl: { name: "issmisl" },
  jbaban01: { name: "jbaban01" },
  jbrenn08: { name: "jbrenn08" },
  jhill05: { name: "jhill05" },
  jkelly15: { name: "jkelly15" },
  jkelly19: { name: "jkelly19" },
  jketaw01: { name: "jketaw01" },
  jkuruv01: { name: "jkuruv01" },
  jmann: { name: "jmann" },
  jmorri17: { name: "jmorri17" },
  jpilch02: { name: "jpilch02" },
  jsingh01: { name: "jsingh01" },
  kcarte02: { name: "kcarte02" },
  kkirkl01: { name: "kkirkl01" },
  mbatti03: { name: "mbatti03" },
  mdawki02: { name: "mdawki02" },
  mdo06: { name: "mdo06" },
  menorm01: { name: "menorm01" },
  mkhiar02: { name: "mkhiar02" },
  mstewa14: { name: "mstewa14" },
  mtorra01: { name: "mtorra01" },
  navedian: { name: "navedian" },
  ndoshi01: { name: "ndoshi01" },
  nflynn01: { name: "nflynn01" },
  nhibbe02: { name: "nhibbe02" },
  ntayeb01: { name: "ntayeb01" },
  phodgk01: { name: "phodgk01" },
  rhasan01: { name: "rhasan01" },
  rtaylo24: { name: "rtaylo24" },
  rwheel02: { name: "rwheel02" },
  sammul01: { name: "sammul01" },
  schwarta: { name: "schwarta" },
  sgavin: { name: "sgavin" },
  sharri03: { name: "sharri03" },
  sjaesc01: { name: "sjaesc01" },
  sklind01: { name: "sklind01" },
  smcmil05: { name: "smcmil05" },
  snesci01: { name: "snesci01" },
  stonem: { name: "stonem" },
  tgaras03: { name: "tgaras03" },
  tvanth01: { name: "tvanth01" },
  vrana04: { name: "vrana04" },
  vsuram01: { name: "vsuram01" },
  wgalpi01: { name: "wgalpi01" }
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
  {id:"b_mu4t60z2_2qxl2g",date:"2026-09-25",level:7,desk:33,hadid:"tstapl01",createdAt:"2026-09-17T00:45:34.958Z"},
  {id:"b_mu4t5q31_2p5vdi",date:"2026-09-25",level:7,desk:76,hadid:"cgeorg10",createdAt:"2026-09-17T00:45:20.845Z"},
  {id:"b_mu4sz5cl_32wx7v",date:"2026-09-25",level:7,desk:147,hadid:"mboric01",createdAt:"2026-09-17T00:38:13.800Z"}
];
const g = globalThis;
if (!g.__braggStore__) {
  g.__braggStore__ = { bookings: BOOTSTRAP.slice(), tombs: Object.create(null), ready: true };
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
function tombstone(id, slot) {
  const store = g.__braggStore__;
  if (isBookingId(id)) store.tombs[id] = Date.now();
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
      if (!id) return send(res, 400, { ok: false, error: "Missing booking." });
      if (!who.admin && !rosterOf(hid)) return send(res, 403, { ok: false, error: "That HADID is not on the Bragg pilot list." });
      const rows = await load();
      const idx = rows.findIndex(function (r) { return r.id === id; });
      if (idx === -1) return send(res, 404, { ok: false, error: "Booking not found." });
      const row = rows[idx];
      if (!who.admin && row.hadid !== hid) return send(res, 403, { ok: false, error: "You can only cancel your own desk." });
      if (!who.admin && !(row.date > today())) return send(res, 409, { ok: false, error: "Too late to cancel that day." });
      tombstone(row.id, slotOf(row));
      rows.splice(idx, 1);
      await save(rows);
      return send(res, 200, { ok: true, tombstone: { id: row.id, slot: slotOf(row) } });
    }
    return send(res, 405, { ok: false, error: "Method not allowed." });
  } catch (err) {
    console.error(err);
    const msg = String((err && err.message) || err);
    return send(res, 500, { ok: false, error: "Booking service hiccup. Try again.", detail: msg });
  }
};
