const ADMIN_PIN = "2109";
const START = "2026-09-21";
const END = "2026-12-18";
const ADVANCE_DAYS = 7;
const FLOORS = [
  { level: 5, desks: 32, note: "Temporary overflow" },
  { level: 6, desks: 20, note: "No FF&E sheet yet" },
  { level: 7, desks: 150, note: "FF&E workstations" },
  { level: 8, desks: 152, note: "FF&E workstations" },
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
const g = globalThis;
if (!g.__braggBookings__) g.__braggBookings__ = [];
let redisClient = undefined;
function redisUrl() { return process.env.REDIS_URL || process.env.KV_URL || ""; }
function db() {
  if (redisClient !== undefined) return redisClient;
  const url = redisUrl();
  if (!url) { redisClient = null; return null; }
  try {
    const Redis = require("ioredis");
    redisClient = new Redis(url, { maxRetriesPerRequest: 1, connectTimeout: 4000, lazyConnect: true });
    return redisClient;
  } catch (e) {
    redisClient = null;
    return null;
  }
}
function today() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Australia/Adelaide" });
}
function addDays(iso, n) {
  const parts = String(iso).split("-").map(Number);
  return new Date(Date.UTC(parts[0], parts[1] - 1, parts[2] + n)).toISOString().slice(0, 10);
}
function bookHorizon(day) {
  const limit = addDays(day || today(), ADVANCE_DAYS);
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
async function load() {
  const r = db();
  if (r) {
    try {
      if (typeof r.connect === "function" && r.status !== "ready") await r.connect();
      const raw = await r.get(BOOKINGS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
        if (parsed && Array.isArray(parsed.bookings)) return parsed.bookings;
      }
    } catch (e) {
      console.error("redis_load", e);
    }
  }
  return g.__braggBookings__;
}
async function save(bookings) {
  g.__braggBookings__ = bookings;
  const r = db();
  if (!r) return;
  try {
    if (typeof r.connect === "function" && r.status !== "ready") await r.connect();
    await r.set(BOOKINGS_KEY, JSON.stringify({ initialised: true, updatedAt: new Date().toISOString(), bookings: bookings }));
  } catch (e) {
    console.error("redis_save", e);
  }
}
function pub(row, hadid, admin) {
  const mine = !!(hadid && row.hadid === hadid);
  return {
    id: mine || admin ? row.id : undefined,
    date: row.date, level: row.level, desk: row.desk,
    name: row.name || "Booked", mine: mine,
    hadid: admin || mine ? row.hadid : "",
    createdAt: admin || mine ? row.createdAt : undefined,
    locked: !(row.date > today()),
  };
}
function readBody(req) {
  return new Promise(function (resolve, reject) {
    if (req.body && typeof req.body === "object") return resolve(req.body);
    let raw = "";
    if (typeof req.on !== "function") return resolve({});
    req.on("data", function (c) { raw += c; if (raw.length > 20000) reject(new Error("too_large")); });
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
      return send(res, 200, { ok: true, hadid: hid, name: person.name });
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
      return send(res, 200, { ok: true, today: today(), bookings: out.map(function (r) { return pub(r, hadid, all && who.admin); }) });
    }
    if (req.method === "POST") {
      const body = await readBody(req);
      const hid = hadidOf(body.hadid);
      const person = rosterOf(hid);
      if (!person) return send(res, 403, { ok: false, error: "That HADID is not on the Bragg pilot list." });
      const name = person.name;
      const date = String(body.date || "");
      const level = Number(body.level);
      const desk = Number(body.desk);
      const floor = floorOf(level);
      const dow = new Date(date + "T00:00:00Z").getUTCDay();
      const day = today();
      if (date > bookHorizon(day)) return send(res, 400, { ok: false, error: "You can only book up to 7 days ahead." });
      if (!(date >= START) || date > END || date < day || dow === 0 || dow === 6) return send(res, 400, { ok: false, error: "That day is not bookable." });
      if (!floor || !(desk >= 1) || desk > floor.desks) return send(res, 400, { ok: false, error: "That desk does not exist." });
      const rows = await load();
      const mine = rows.find(function (r) { return r.hadid === hid && r.date === date; });
      if (mine) return send(res, 409, { ok: false, error: "You already have " + deskName(mine.level, mine.desk) + " on that day.", booking: pub(mine, hid, false) });
      const taken = rows.find(function (r) { return r.date === date && r.level === level && r.desk === desk; });
      if (taken) return send(res, 409, { ok: false, error: "That desk is already taken." });
      const booking = { id: nid(), date: date, level: level, desk: desk, hadid: hid, name: name, createdAt: new Date().toISOString() };
      rows.push(booking);
      await save(rows);
      return send(res, 201, { ok: true, booking: pub(booking, hid, false) });
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
      rows.splice(idx, 1);
      await save(rows);
      return send(res, 200, { ok: true });
    }
    return send(res, 405, { ok: false, error: "Method not allowed." });
  } catch (err) {
    console.error(err);
    const msg = String((err && err.message) || err);
    return send(res, 500, { ok: false, error: "Booking service hiccup. Try again.", detail: msg });
  }
};
