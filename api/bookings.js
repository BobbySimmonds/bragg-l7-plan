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
const SEED=[["b_mtviynwo_nqhlcd","2026-09-21",5,1,"demo0001","Sam","2026-09-10T12:49:59.688Z"],["b_mtwkaisr_e9a3h3","2026-09-21",5,2,"lmendo01","Lawrence Mendonca","2026-09-11T06:14:58.731Z"],["b_mtw5mfla_1nf7o9","2026-09-21",5,3,"acousi03","Alison","2026-09-10T23:24:20.206Z"],["b_mtzjqx4n_wkmsy7","2026-09-21",5,4,"jpenov01","Jasminka Penov","2026-09-13T08:23:02.711Z"],["b_mu0fsv4n_qy40c9","2026-09-21",5,5,"kjenki06","Katrina Jenkins","2026-09-13T23:20:21.143Z"],["b_mu0fynq8_qrnaye","2026-09-21",5,6,"ytuong01","Yvonne Tuong","2026-09-13T23:24:51.488Z"],["b_mtviynwo_7qfllh","2026-09-21",5,8,"demo0002","Priya","2026-09-10T12:49:59.688Z"],["b_mu0emenf_f3fb3m","2026-09-21",5,9,"cwilke06","Carmel Wilkes","2026-09-13T22:47:20.235Z"],["b_mu0gj2gh_2dk4jj","2026-09-21",5,10,"nrusso02","Nicolla Russo","2026-09-13T23:40:43.697Z"],["b_mu0hm93p_8sx53v","2026-09-21",5,11,"sthoma10","Sonya Thomas","2026-09-14T00:11:11.893Z"],["b_mu0fs0f9_myohii","2026-09-21",5,13,"lshaw03","Lisa Shaw","2026-09-13T23:19:41.349Z"],["b_mu0gsfo8_wxh3n2","2026-09-21",5,15,"wilksk","Krystyna Wilks","2026-09-13T23:48:00.728Z"],["b_mu0fl6l1_6obsv6","2026-09-21",5,16,"averma05","Apoorva Verma","2026-09-13T23:14:22.741Z"],["b_mtviyv24_1hs7ke","2026-09-21",5,18,"testbobby","Bobby","2026-09-10T12:50:08.956Z"],["b_mtwjn2a5_pjpf03","2026-09-21",6,2,"bsimmo01","Bobby Simmonds","2026-09-11T05:56:44.237Z"],["b_mtwjxob3_vyihiz","2026-09-21",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:04:59.343Z"],["b_mu0idubm_4xmzns","2026-09-21",7,2,"mtucke01","Melissa Tucker","2026-09-14T00:32:39.106Z"],["b_mu21nxzf_esmop5","2026-09-21",7,76,"dhc000820","dhc000820","2026-09-15T02:20:09.291Z"],["b_mtwkac6o_xb8qiv","2026-09-22",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:14:50.160Z"],["b_mtzjth82_q72h17","2026-09-22",5,4,"jpenov01","Jasminka Penov","2026-09-13T08:25:02.066Z"],["b_mu0hnemp_1nmqp1","2026-09-22",5,11,"sthoma10","Sonya Thomas","2026-09-14T00:12:05.713Z"],["b_mtviynwo_ev500r","2026-09-22",5,12,"demo0003","Tom","2026-09-10T12:49:59.688Z"],["b_mu0fse1g_xg43d3","2026-09-22",5,13,"lshaw03","Lisa Shaw","2026-09-13T23:19:58.996Z"],["b_mu0j0y5z_q0k2rb","2026-09-22",5,19,"sdey01","Shelli Dey","2026-09-14T00:50:37.175Z"],["b_mtwjmydf_rsteep","2026-09-22",6,1,"bsimmo01","Bobby Simmonds","2026-09-11T05:56:39.171Z"],["b_mtviynwo_uzvast","2026-09-23",5,5,"demo0004","Jess","2026-09-10T12:49:59.688Z"],["b_mtwjn9ni_n4shvq","2026-09-23",6,3,"bsimmo01","Bobby Simmonds","2026-09-11T05:56:53.790Z"],["b_mtwjxyqz_43xdwf","2026-09-23",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:05:12.875Z"],["b_mtwkaop8_0fwfju","2026-09-24",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:15:06.380Z"],["b_mtzjtns7_fwl275","2026-09-24",5,4,"jpenov01","Jasminka Penov","2026-09-13T08:25:10.567Z"],["b_mu0hnk3e_6qh0g7","2026-09-24",5,10,"sthoma10","Sonya Thomas","2026-09-14T00:12:12.794Z"],["b_mu0iqfdr_9idwtz","2026-09-24",5,19,"sdey01","Shelli Dey","2026-09-14T00:42:26.271Z"],["b_mu0f47z3_aiwwq9","2026-09-24",5,20,"gk","George Killis","2026-09-13T23:01:11.391Z"],["b_mu0fskx6_tprp1a","2026-09-25",5,13,"lshaw03","Lisa Shaw","2026-09-13T23:20:07.914Z"],["b_mu0ej0y9_o0bpw2","2026-09-25",5,20,"gk","George Killis","2026-09-13T22:44:42.513Z"],["b_mtwjy2nq_dn9s8a","2026-09-25",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:05:17.942Z"],["b_mtwkb1rb_dcfqig","2026-09-28",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:15:23.303Z"],["b_mtwk4n8g_l6vb3a","2026-09-28",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:10:24.544Z"],["b_mtwkb4vk_vrcg0a","2026-09-29",5,2,"lmendo01","Lawrence Mendonca","2026-09-11T06:15:27.344Z"],["b_mtwk4sph_wzzaxe","2026-09-30",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:10:31.637Z"],["b_mtwkba8s_y74y8x","2026-10-01",5,3,"lmendo01","Lawrence Mendonca","2026-09-11T06:15:34.300Z"],["b_mtwk4wxy_1ielma","2026-10-02",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:10:37.126Z"],["b_mtwkbgyy_kwe2w9","2026-10-05",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:15:43.018Z"],["b_mtwkbjuj_815c4o","2026-10-06",5,2,"lmendo01","Lawrence Mendonca","2026-09-11T06:15:46.747Z"],["b_mtwkbr16_k3c7r4","2026-10-08",5,20,"lmendo01","Lawrence Mendonca","2026-09-11T06:15:56.058Z"],["b_mtwkc0es_2jcrgq","2026-10-12",5,5,"lmendo01","Lawrence Mendonca","2026-09-11T06:16:08.212Z"],["b_mtwkc2qd_nr1wam","2026-10-13",5,8,"lmendo01","Lawrence Mendonca","2026-09-11T06:16:11.221Z"],["b_mtwk5tzr_lkdr5k","2026-10-14",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:11:19.959Z"],["b_mu0ies90_1dyuhi","2026-10-14",7,12,"mtucke01","Melissa Tucker","2026-09-14T00:33:23.076Z"],["b_mtwkc68h_ckmizr","2026-10-15",5,18,"lmendo01","Lawrence Mendonca","2026-09-11T06:16:15.761Z"],["b_mtwk5x7p_tpndsc","2026-10-16",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:11:24.133Z"],["b_mtwkcb38_jteob0","2026-10-19",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:16:22.052Z"],["b_mtwk64xq_17mhf3","2026-10-19",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:11:34.142Z"],["b_mtwkcdu5_oms7by","2026-10-20",5,2,"lmendo01","Lawrence Mendonca","2026-09-11T06:16:25.613Z"],["b_mtwk69sk_tecq8f","2026-10-21",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:11:40.436Z"],["b_mtwkcglj_egxtxc","2026-10-22",5,3,"lmendo01","Lawrence Mendonca","2026-09-11T06:16:29.191Z"],["b_mtwk6lwu_wjujkm","2026-10-23",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:11:56.142Z"],["b_mtwkcmwz_vlb1gr","2026-10-26",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:16:37.379Z"],["b_mtwk6shr_kq06sa","2026-10-26",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:12:04.671Z"],["b_mtwkcs6z_r65d8s","2026-10-27",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:16:44.219Z"],["b_mtwk6wnn_2eptfo","2026-10-28",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:12:10.067Z"],["b_mtwkcxcu_9xkvkc","2026-10-29",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:16:50.910Z"],["b_mtwk6zsf_op0zco","2026-10-30",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:12:14.127Z"],["b_mtwkd4lf_za08pa","2026-11-02",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:17:00.291Z"],["b_mtwk76wd_ohhopp","2026-11-02",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:12:23.341Z"],["b_mtwkd72n_z16djw","2026-11-03",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:17:03.503Z"],["b_mtwkda7v_ll2msg","2026-11-05",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:17:07.579Z"],["b_mtwkdf86_txfu2d","2026-11-09",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:17:14.070Z"],["b_mtwkdjc7_8fuhfh","2026-11-10",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:17:19.399Z"],["b_mtwkdmf6_sxmv7s","2026-11-12",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:17:23.394Z"],["b_mtwkdrx3_ccvvig","2026-11-16",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:17:30.519Z"],["b_mtwkduif_5i7g87","2026-11-17",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:17:33.879Z"],["b_mtwk86mw_erfh36","2026-11-18",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:13:09.656Z"],["b_mtwkdwwu_irzcoz","2026-11-19",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:17:36.990Z"],["b_mtwk89rg_7enmyv","2026-11-20",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:13:13.708Z"],["b_mtwke4go_ijph16","2026-11-23",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:17:46.776Z"],["b_mtwk8f58_t82v64","2026-11-23",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:13:20.684Z"],["b_mtwke7dn_wjwxsp","2026-11-24",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:17:50.555Z"],["b_mtwk8j4x_y9rvul","2026-11-25",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:13:25.857Z"],["b_mtwke9sc_0m2jc4","2026-11-26",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:17:53.676Z"],["b_mtwk8mwp_cwl1ks","2026-11-27",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:13:30.745Z"],["b_mtwkem3c_5clyap","2026-11-30",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:18:09.624Z"],["b_mtwk8vaq_k2orei","2026-11-30",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:13:41.618Z"],["b_mtwkepw0_t6onsv","2026-12-01",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:18:14.544Z"],["b_mtwk8z46_x98raf","2026-12-02",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:13:46.566Z"],["b_mtwkesce_9sw35y","2026-12-03",5,1,"lmendo01","Lawrence Mendonca","2026-09-11T06:18:17.726Z"],["b_mtwk93dj_i7wdbn","2026-12-04",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:13:52.087Z"],["b_mtwk9ig5_5yqr5h","2026-12-07",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:14:11.621Z"],["b_mtwk9lhe_qt465j","2026-12-09",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:14:15.554Z"],["b_mtwk9o6x_pdckhs","2026-12-11",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:14:19.065Z"],["b_mtwk9txj_n27ev8","2026-12-14",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:14:26.503Z"],["b_mtwk9wpb_bi46do","2026-12-16",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:14:30.095Z"],["b_mtwka02r_gcydzw","2026-12-18",7,1,"bcorma02","Brenda Cormack","2026-09-11T06:14:34.467Z"]];
function fromSeed(s){return {id:s[0],date:s[1],level:s[2],desk:s[3],hadid:s[4],name:s[5],createdAt:s[6]};}
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
        if (Array.isArray(parsed) && parsed.length) return parsed;
        if (parsed && Array.isArray(parsed.bookings) && parsed.bookings.length) return parsed.bookings;
      }
    } catch (e) {
      console.error("redis_load", e);
    }
  }
  if (g.__braggBookings__ && g.__braggBookings__.length) return g.__braggBookings__;
  const seeded = SEED.map(fromSeed);
  g.__braggBookings__ = seeded;
  try { await save(seeded); } catch (e) { console.error("seed_save", e); }
  return seeded;
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
            name: r.name || (rosterOf(hid) && rosterOf(hid).name) || hid,
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
