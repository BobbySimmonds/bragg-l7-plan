const PLAN_W = 1600;
const PLAN_H = 1350;
const VILLAGES = [
  {id:"corp",label:"Corporate Services, Security & Service Management",short:"Corporate / Security / SM",color:"#3a8cff",fill:"rgba(58,140,255,0.28)",path:"M 13.8 241.4 L 140.2 103.8 L 282.4 42.9 L 423.3 19.3 L 525.6 32.4 L 551.0 104.4 L 574.0 183.2 L 358.5 425.9 L 282.9 469.1 L 210.0 508.6 L 42.2 325.0 Z",legend:"Corporate · WS7.123–150 · 28 desks",body:"Blue, north-west. WS7.123 to WS7.150. Corporate Services, Security and Service Management share this village."},
  {id:"servicedesk",label:"Service Desk",short:"Service Desk",color:"#2ecf6a",fill:"rgba(46,207,106,0.26)",path:"M 231.3 510.2 L 355.3 421.3 L 420.9 376.6 L 487.7 421.3 L 662.6 664.7 L 754.7 868.4 L 855.1 1184.6 L 855.5 1330.9 L 772.8 1319.4 L 591.6 1137.5 L 547.2 1083.8 Z",legend:"Service Desk · WS7.77–122 · 46 desks",body:"Green, south-west. WS7.77 to WS7.122."},
  {id:"ti",label:"T&I (ASD + DAP + Infrastructure)",short:"T&I",color:"#ff9a4a",fill:"rgba(255,154,74,0.28)",path:"M 1178.9 1314.4 L 1188.8 1156.2 L 1205.1 995.2 L 1539.5 17.3 L 1602.6 40.9 L 1606.3 71.8 L 1631.7 805.2 L 1607.0 868.4 L 1353.2 1251.2 Z",legend:"T&I · WS7.01–76 · 76 desks",body:"Orange, east wing. WS7.01 to WS7.76. ASD, DAP and Infrastructure sit together as one T&I village."},
  {id:"core",label:"Shared core",short:"Shared core",color:"#6d7f93",fill:"rgba(16,24,36,0.2)",path:"M 620 160 L 980 150 L 1020 720 L 980 980 L 700 1080 L 600 820 Z",legend:"Shared core / meeting / pantry",body:"Not a village and not bookable. Meeting rooms, lifts, stairs and the south pantry sit in the core."}
];
const DESKS = [
  {key:"ws-1",village:"ti",x:1528.4,y:49.5,w:11,h:8,r:0,ws:"WS7.01"},
  {key:"ws-2",village:"ti",x:1515.9,y:117.5,w:11,h:8,r:0,ws:"WS7.02"},
  {key:"ws-3",village:"ti",x:1494.3,y:191.3,w:11,h:8,r:0,ws:"WS7.03"},
  {key:"ws-4",village:"ti",x:1588.1,y:72.5,w:11,h:8,r:0,ws:"WS7.04"},
  {key:"ws-5",village:"ti",x:1576.9,y:147.2,w:11,h:8,r:0,ws:"WS7.05"},
  {key:"ws-6",village:"ti",x:1563.5,y:226.3,w:11,h:8,r:0,ws:"WS7.06"},
  {key:"ws-7",village:"ti",x:1591.2,y:104.0,w:11,h:8,r:0,ws:"WS7.07"},
  {key:"ws-8",village:"ti",x:1591.2,y:182.2,w:11,h:8,r:0,ws:"WS7.08"},
  {key:"ws-9",village:"ti",x:1591.2,y:246.0,w:11,h:8,r:0,ws:"WS7.09"},
  {key:"ws-10",village:"ti",x:1591.2,y:103.1,w:11,h:8,r:0,ws:"WS7.10"},
  {key:"ws-11",village:"ti",x:1591.2,y:171.4,w:11,h:8,r:0,ws:"WS7.11"},
  {key:"ws-12",village:"ti",x:1591.2,y:242.5,w:11,h:8,r:0,ws:"WS7.12"},
  {key:"ws-13",village:"ti",x:1591.2,y:138.1,w:11,h:8,r:0,ws:"WS7.13"},
  {key:"ws-14",village:"ti",x:1591.2,y:203.8,w:11,h:8,r:0,ws:"WS7.14"},
  {key:"ws-15",village:"ti",x:1591.2,y:274.9,w:11,h:8,r:0,ws:"WS7.15"},
  {key:"ws-16",village:"ti",x:1591.2,y:144.5,w:11,h:8,r:0,ws:"WS7.16"},
  {key:"ws-17",village:"ti",x:1591.2,y:202.9,w:11,h:8,r:0,ws:"WS7.17"},
  {key:"ws-18",village:"ti",x:1591.2,y:275.7,w:11,h:8,r:0,ws:"WS7.18"},
  {key:"ws-19",village:"ti",x:1591.2,y:237.9,w:11,h:8,r:0,ws:"WS7.19"},
  {key:"ws-20",village:"ti",x:1591.2,y:311.7,w:11,h:8,r:0,ws:"WS7.20"},
  {key:"ws-21",village:"ti",x:1591.2,y:244.3,w:11,h:8,r:0,ws:"WS7.21"},
  {key:"ws-22",village:"ti",x:1591.2,y:318.1,w:11,h:8,r:0,ws:"WS7.22"},
  {key:"ws-23",village:"ti",x:1591.2,y:436.8,w:11,h:8,r:0,ws:"WS7.23"},
  {key:"ws-24",village:"ti",x:1591.2,y:395.4,w:11,h:8,r:0,ws:"WS7.24"},
  {key:"ws-25",village:"ti",x:1591.2,y:356.7,w:11,h:8,r:0,ws:"WS7.25"},
  {key:"ws-26",village:"ti",x:1591.2,y:405.2,w:11,h:8,r:0,ws:"WS7.26"},
  {key:"ws-27",village:"ti",x:1591.2,y:435.8,w:11,h:8,r:0,ws:"WS7.27"},
  {key:"ws-28",village:"ti",x:1591.2,y:476.3,w:11,h:8,r:0,ws:"WS7.28"},
  {key:"ws-29",village:"ti",x:1591.2,y:550.1,w:11,h:8,r:0,ws:"WS7.29"},
  {key:"ws-30",village:"ti",x:1591.2,y:519.5,w:11,h:8,r:0,ws:"WS7.30"},
  {key:"ws-31",village:"ti",x:1591.2,y:479.0,w:11,h:8,r:0,ws:"WS7.31"},
  {key:"ws-32",village:"ti",x:1571.9,y:442.2,w:11,h:8,r:0,ws:"WS7.32"},
  {key:"ws-33",village:"ti",x:1529.4,y:480.8,w:11,h:8,r:0,ws:"WS7.33"},
  {key:"ws-34",village:"ti",x:1583.7,y:526.6,w:11,h:8,r:0,ws:"WS7.34"},
  {key:"ws-35",village:"ti",x:1591.2,y:564.4,w:11,h:8,r:0,ws:"WS7.35"},
  {key:"ws-36",village:"ti",x:1591.2,y:595.9,w:11,h:8,r:0,ws:"WS7.36"},
  {key:"ws-37",village:"ti",x:1591.2,y:678.6,w:11,h:8,r:0,ws:"WS7.37"},
  {key:"ws-38",village:"ti",x:1591.2,y:638.2,w:11,h:8,r:0,ws:"WS7.38"},
  {key:"ws-39",village:"ti",x:1568.9,y:594.1,w:11,h:8,r:0,ws:"WS7.39"},
  {key:"ws-40",village:"ti",x:1496.1,y:561.7,w:11,h:8,r:0,ws:"WS7.40"},
  {key:"ws-41",village:"ti",x:1467.3,y:607.6,w:11,h:8,r:0,ws:"WS7.41"},
  {key:"ws-42",village:"ti",x:1528.4,y:647.2,w:11,h:8,r:0,ws:"WS7.42"},
  {key:"ws-43",village:"ti",x:1580.5,y:687.7,w:11,h:8,r:0,ws:"WS7.43"},
  {key:"ws-44",village:"ti",x:1591.2,y:732.6,w:11,h:8,r:0,ws:"WS7.44"},
  {key:"ws-45",village:"ti",x:1592.7,y:786.5,w:11,h:8,r:0,ws:"WS7.45"},
  {key:"ws-46",village:"ti",x:1550.0,y:744.3,w:11,h:8,r:0,ws:"WS7.46"},
  {key:"ws-47",village:"ti",x:1493.4,y:708.3,w:11,h:8,r:0,ws:"WS7.47"},
  {key:"ws-48",village:"ti",x:1429.6,y:679.6,w:11,h:8,r:0,ws:"WS7.48"},
  {key:"ws-49",village:"ti",x:1364.9,y:720.0,w:11,h:8,r:0,ws:"WS7.49"},
  {key:"ws-50",village:"ti",x:1438.6,y:756.0,w:11,h:8,r:0,ws:"WS7.50"},
  {key:"ws-51",village:"ti",x:1506.9,y:804.6,w:11,h:8,r:0,ws:"WS7.51"},
  {key:"ws-52",village:"ti",x:1573.8,y:840.5,w:11,h:8,r:0,ws:"WS7.52"},
  {key:"ws-53",village:"ti",x:1533.0,y:898.1,w:11,h:8,r:0,ws:"WS7.53"},
  {key:"ws-54",village:"ti",x:1472.7,y:863.0,w:11,h:8,r:0,ws:"WS7.54"},
  {key:"ws-55",village:"ti",x:1410.7,y:832.4,w:11,h:8,r:0,ws:"WS7.55"},
  {key:"ws-56",village:"ti",x:1343.3,y:786.5,w:11,h:8,r:0,ws:"WS7.56"},
  {key:"ws-57",village:"ti",x:1309.1,y:842.4,w:11,h:8,r:0,ws:"WS7.57"},
  {key:"ws-58",village:"ti",x:1369.3,y:875.6,w:11,h:8,r:0,ws:"WS7.58"},
  {key:"ws-59",village:"ti",x:1430.4,y:914.3,w:11,h:8,r:0,ws:"WS7.59"},
  {key:"ws-60",village:"ti",x:1480.8,y:959.2,w:11,h:8,r:0,ws:"WS7.60"},
  {key:"ws-61",village:"ti",x:1451.2,y:1029.3,w:11,h:8,r:0,ws:"WS7.61"},
  {key:"ws-62",village:"ti",x:1398.0,y:980.8,w:11,h:8,r:0,ws:"WS7.62"},
  {key:"ws-63",village:"ti",x:1333.3,y:946.6,w:11,h:8,r:0,ws:"WS7.63"},
  {key:"ws-64",village:"ti",x:1262.3,y:908.9,w:11,h:8,r:0,ws:"WS7.64"},
  {key:"ws-65",village:"ti",x:1222.8,y:962.8,w:11,h:8,r:0,ws:"WS7.65"},
  {key:"ws-66",village:"ti",x:1295.6,y:1002.4,w:11,h:8,r:0,ws:"WS7.66"},
  {key:"ws-67",village:"ti",x:1347.7,y:1045.5,w:11,h:8,r:0,ws:"WS7.67"},
  {key:"ws-68",village:"ti",x:1408.9,y:1085.2,w:11,h:8,r:0,ws:"WS7.68"},
  {key:"ws-69",village:"ti",x:1381.9,y:1157.1,w:11,h:8,r:0,ws:"WS7.69"},
  {key:"ws-70",village:"ti",x:1318.1,y:1119.3,w:11,h:8,r:0,ws:"WS7.70"},
  {key:"ws-71",village:"ti",x:1254.2,y:1082.5,w:11,h:8,r:0,ws:"WS7.71"},
  {key:"ws-72",village:"ti",x:1201.1,y:1120.2,w:11,h:8,r:0,ws:"WS7.72"},
  {key:"ws-73",village:"ti",x:1282.1,y:1174.2,w:11,h:8,r:0,ws:"WS7.73"},
  {key:"ws-74",village:"ti",x:1353.1,y:1211.0,w:11,h:8,r:0,ws:"WS7.74"},
  {key:"ws-75",village:"ti",x:1246.1,y:1232.6,w:11,h:8,r:0,ws:"WS7.75"},
  {key:"ws-76",village:"ti",x:1187.7,y:1276.7,w:11,h:8,r:0,ws:"WS7.76"},
  {key:"ws-77",village:"servicedesk",x:832.5,y:1294.7,w:11,h:8,r:0,ws:"WS7.77"},
  {key:"ws-78",village:"servicedesk",x:828.0,y:1223.6,w:11,h:8,r:0,ws:"WS7.78"},
  {key:"ws-79",village:"servicedesk",x:827.1,y:1151.7,w:11,h:8,r:0,ws:"WS7.79"},
  {key:"ws-80",village:"servicedesk",x:740.8,y:1147.2,w:11,h:8,r:0,ws:"WS7.80"},
  {key:"ws-81",village:"servicedesk",x:741.6,y:1220.1,w:11,h:8,r:0,ws:"WS7.81"},
  {key:"ws-82",village:"servicedesk",x:754.2,y:1281.2,w:11,h:8,r:0,ws:"WS7.82"},
  {key:"ws-83",village:"servicedesk",x:586.1,y:1096.8,w:11,h:8,r:0,ws:"WS7.83"},
  {key:"ws-84",village:"servicedesk",x:646.4,y:1063.6,w:11,h:8,r:0,ws:"WS7.84"},
  {key:"ws-85",village:"servicedesk",x:693.1,y:1030.3,w:11,h:8,r:0,ws:"WS7.85"},
  {key:"ws-86",village:"servicedesk",x:758.7,y:988.9,w:11,h:8,r:0,ws:"WS7.86"},
  {key:"ws-87",village:"servicedesk",x:707.5,y:953.0,w:11,h:8,r:0,ws:"WS7.87"},
  {key:"ws-88",village:"servicedesk",x:646.4,y:984.4,w:11,h:8,r:0,ws:"WS7.88"},
  {key:"ws-89",village:"servicedesk",x:604.1,y:1009.6,w:11,h:8,r:0,ws:"WS7.89"},
  {key:"ws-90",village:"servicedesk",x:548.4,y:1043.8,w:11,h:8,r:0,ws:"WS7.90"},
  {key:"ws-91",village:"servicedesk",x:529.6,y:971.9,w:11,h:8,r:0,ws:"WS7.91"},
  {key:"ws-92",village:"servicedesk",x:587.0,y:935.9,w:11,h:8,r:0,ws:"WS7.92"},
  {key:"ws-93",village:"servicedesk",x:646.4,y:900.8,w:11,h:8,r:0,ws:"WS7.93"},
  {key:"ws-94",village:"servicedesk",x:712.9,y:859.4,w:11,h:8,r:0,ws:"WS7.94"},
  {key:"ws-95",village:"servicedesk",x:652.7,y:828.9,w:11,h:8,r:0,ws:"WS7.95"},
  {key:"ws-96",village:"servicedesk",x:599.6,y:858.5,w:11,h:8,r:0,ws:"WS7.96"},
  {key:"ws-97",village:"servicedesk",x:549.2,y:892.7,w:11,h:8,r:0,ws:"WS7.97"},
  {key:"ws-98",village:"servicedesk",x:482.7,y:925.1,w:11,h:8,r:0,ws:"WS7.98"},
  {key:"ws-99",village:"servicedesk",x:429.7,y:823.5,w:11,h:8,r:0,ws:"WS7.99"},
  {key:"ws-100",village:"servicedesk",x:510.7,y:776.7,w:11,h:8,r:0,ws:"WS7.100"},
  {key:"ws-101",village:"servicedesk",x:574.5,y:736.2,w:11,h:8,r:0,ws:"WS7.101"},
  {key:"ws-102",village:"servicedesk",x:643.7,y:694.8,w:11,h:8,r:0,ws:"WS7.102"},
  {key:"ws-103",village:"servicedesk",x:573.5,y:650.8,w:11,h:8,r:0,ws:"WS7.103"},
  {key:"ws-104",village:"servicedesk",x:514.2,y:695.7,w:11,h:8,r:0,ws:"WS7.104"},
  {key:"ws-105",village:"servicedesk",x:459.5,y:729.1,w:11,h:8,r:0,ws:"WS7.105"},
  {key:"ws-106",village:"servicedesk",x:400.9,y:767.7,w:11,h:8,r:0,ws:"WS7.106"},
  {key:"ws-107",village:"servicedesk",x:362.2,y:704.8,w:11,h:8,r:0,ws:"WS7.107"},
  {key:"ws-108",village:"servicedesk",x:435.2,y:664.2,w:11,h:8,r:0,ws:"WS7.108"},
  {key:"ws-109",village:"servicedesk",x:494.5,y:631.0,w:11,h:8,r:0,ws:"WS7.109"},
  {key:"ws-110",village:"servicedesk",x:561.9,y:589.6,w:11,h:8,r:0,ws:"WS7.110"},
  {key:"ws-111",village:"servicedesk",x:511.5,y:540.1,w:11,h:8,r:0,ws:"WS7.111"},
  {key:"ws-112",village:"servicedesk",x:453.1,y:580.6,w:11,h:8,r:0,ws:"WS7.112"},
  {key:"ws-113",village:"servicedesk",x:392.8,y:609.4,w:11,h:8,r:0,ws:"WS7.113"},
  {key:"ws-114",village:"servicedesk",x:322.7,y:650.8,w:11,h:8,r:0,ws:"WS7.114"},
  {key:"ws-115",village:"servicedesk",x:283.2,y:581.5,w:11,h:8,r:0,ws:"WS7.115"},
  {key:"ws-116",village:"servicedesk",x:353.4,y:537.0,w:11,h:8,r:0,ws:"WS7.116"},
  {key:"ws-117",village:"servicedesk",x:418.9,y:497.9,w:11,h:8,r:0,ws:"WS7.117"},
  {key:"ws-118",village:"servicedesk",x:490.9,y:452.9,w:11,h:8,r:0,ws:"WS7.118"},
  {key:"ws-119",village:"servicedesk",x:427.9,y:407.1,w:11,h:8,r:0,ws:"WS7.119"},
  {key:"ws-120",village:"servicedesk",x:367.6,y:449.3,w:11,h:8,r:0,ws:"WS7.120"},
  {key:"ws-121",village:"servicedesk",x:320.0,y:488.0,w:11,h:8,r:0,ws:"WS7.121"},
  {key:"ws-122",village:"servicedesk",x:252.6,y:531.2,w:11,h:8,r:0,ws:"WS7.122"},
  {key:"ws-123",village:"corp",x:216.6,y:470.0,w:11,h:8,r:0,ws:"WS7.123"},
  {key:"ws-124",village:"corp",x:281.3,y:428.7,w:11,h:8,r:0,ws:"WS7.124"},
  {key:"ws-125",village:"corp",x:344.3,y:386.3,w:11,h:8,r:0,ws:"WS7.125"},
  {key:"ws-126",village:"corp",x:288.6,y:334.2,w:11,h:8,r:0,ws:"WS7.126"},
  {key:"ws-127",village:"corp",x:232.8,y:375.5,w:11,h:8,r:0,ws:"WS7.127"},
  {key:"ws-128",village:"corp",x:184.3,y:410.6,w:11,h:8,r:0,ws:"WS7.128"},
  {key:"ws-129",village:"corp",x:71.0,y:308.1,w:11,h:8,r:0,ws:"WS7.129"},
  {key:"ws-130",village:"corp",x:44.8,y:235.3,w:11,h:8,r:0,ws:"WS7.130"},
  {key:"ws-131",village:"corp",x:128.5,y:221.8,w:11,h:8,r:0,ws:"WS7.131"},
  {key:"ws-132",village:"corp",x:149.1,y:301.9,w:11,h:8,r:0,ws:"WS7.132"},
  {key:"ws-133",village:"corp",x:204.1,y:261.4,w:11,h:8,r:0,ws:"WS7.133"},
  {key:"ws-134",village:"corp",x:179.8,y:195.7,w:11,h:8,r:0,ws:"WS7.134"},
  {key:"ws-135",village:"corp",x:164.5,y:121.1,w:11,h:8,r:0,ws:"WS7.135"},
  {key:"ws-136",village:"corp",x:239.1,y:113.0,w:11,h:8,r:0,ws:"WS7.136"},
  {key:"ws-137",village:"corp",x:262.5,y:186.7,w:11,h:8,r:0,ws:"WS7.137"},
  {key:"ws-138",village:"corp",x:276.0,y:264.9,w:11,h:8,r:0,ws:"WS7.138"},
  {key:"ws-139",village:"corp",x:326.4,y:229.0,w:11,h:8,r:0,ws:"WS7.139"},
  {key:"ws-140",village:"corp",x:305.6,y:157.9,w:11,h:8,r:0,ws:"WS7.140"},
  {key:"ws-141",village:"corp",x:282.3,y:75.2,w:11,h:8,r:0,ws:"WS7.141"},
  {key:"ws-142",village:"corp",x:365.8,y:81.5,w:11,h:8,r:0,ws:"WS7.142"},
  {key:"ws-143",village:"corp",x:384.7,y:151.6,w:11,h:8,r:0,ws:"WS7.143"},
  {key:"ws-144",village:"corp",x:401.9,y:217.3,w:11,h:8,r:0,ws:"WS7.144"},
  {key:"ws-145",village:"corp",x:456.8,y:184.0,w:11,h:8,r:0,ws:"WS7.145"},
  {key:"ws-146",village:"corp",x:424.3,y:117.5,w:11,h:8,r:0,ws:"WS7.146"},
  {key:"ws-147",village:"corp",x:400.0,y:47.3,w:11,h:8,r:0,ws:"WS7.147"},
  {key:"ws-148",village:"corp",x:492.7,y:52.7,w:11,h:8,r:0,ws:"WS7.148"},
  {key:"ws-149",village:"corp",x:512.7,y:116.7,w:11,h:8,r:0,ws:"WS7.149"},
  {key:"ws-150",village:"corp",x:532.3,y:184.9,w:11,h:8,r:0,ws:"WS7.150"},
];

const overlay = document.getElementById("overlay");
const legend = document.getElementById("legend");
const info = document.getElementById("info");
const plate = document.getElementById("plate");
const viewport = document.getElementById("viewport");
const desksBtn = document.getElementById("desksBtn");
const tiltBtn = document.getElementById("tiltBtn");
const resetBtn = document.getElementById("resetBtn");
const tip = document.getElementById("tip");
const countPill = document.getElementById("countPill");
const DEFAULT_INFO = "<h3>Tap a village</h3><p>Blue is Corporate (WS7.123–150). Green is Service Desk (WS7.77–122). Orange is T&I — ASD, DAP and Infrastructure (WS7.01–76). Core is shared.</p>";

let active = null;
let desksOn = true;
let tilt = false;
let cam = { x: 0, y: 0, k: 1 };
let drag = null;

function dim(id) {
  if (!active) return 1;
  return active === id ? 1 : 0.12;
}

function paintOverlay() {
  overlay.setAttribute("viewBox", "0 0 " + PLAN_W + " " + PLAN_H);
  overlay.innerHTML =
    VILLAGES.map(
      (z) =>
        `<path class="zone" data-zone="${z.id}" d="${z.path}" fill="${z.fill}" stroke="${z.color}" stroke-width="${active === z.id ? 2.4 : 1.6}" opacity="${dim(z.id)}"/>`,
    ).join("") +
    (desksOn
      ? DESKS.map(
          (d) =>
            `<rect class="desk-tile v-${d.village}" data-key="${d.key}" data-village="${d.village}" data-ws="${d.ws}" x="0" y="0" width="${d.w}" height="${d.h}" rx="1.2" opacity="${dim(d.village)}" transform="translate(${d.x} ${d.y}) rotate(${d.r})"/>`,
        ).join("")
      : "");
  overlay.querySelectorAll(".zone").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      select(el.dataset.zone);
    });
  });
  overlay.querySelectorAll(".desk-tile").forEach((el) => {
    el.addEventListener("mouseenter", (e) => showDesk(el, e));
    el.addEventListener("mousemove", (e) => showDesk(el, e));
    el.addEventListener("mouseleave", hideTip);
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      select(el.dataset.village);
      showDesk(el, e);
    });
  });
  const n = DESKS.filter((d) => !active || d.village === active).length;
  countPill.textContent = n + " workpoints in view";
}

function select(id) {
  active = active === id ? null : id;
  const z = VILLAGES.find((v) => v.id === id);
  if (z && active) info.innerHTML = `<h3>${z.label}</h3><p>${z.body}</p>`;
  else info.innerHTML = DEFAULT_INFO;
  paintOverlay();
}

function showDesk(el, e) {
  const z = VILLAGES.find((v) => v.id === el.dataset.village);
  const rect = viewport.getBoundingClientRect();
  tip.hidden = false;
  tip.style.left = e.clientX - rect.left + 12 + "px";
  tip.style.top = e.clientY - rect.top + 12 + "px";
  tip.innerHTML = `<b>${el.dataset.ws || z.short}</b><div>Level 7 · ${z.label}</div>`;
}
function hideTip() {
  tip.hidden = true;
}

legend.innerHTML = VILLAGES.map(
  (z) =>
    `<button type="button" data-zone="${z.id}"><i class="swatch" style="background:${z.color}"></i>${z.legend}</button>`,
).join("");
legend.querySelectorAll("[data-zone]").forEach((el) => {
  el.onclick = () => select(el.dataset.zone);
});

desksBtn.onclick = () => {
  desksOn = !desksOn;
  desksBtn.textContent = desksOn ? "Desks on" : "Plan only";
  desksBtn.classList.toggle("on", desksOn);
  paintOverlay();
};
tiltBtn.onclick = () => {
  tilt = !tilt;
  viewport.classList.toggle("is-tilt", tilt);
  plate.classList.toggle("is-tilt", tilt);
  tiltBtn.textContent = tilt ? "Flatten" : "Tilt";
  tiltBtn.classList.toggle("on", tilt);
};
resetBtn.onclick = () => {
  cam = { x: 0, y: 0, k: 1 };
  applyCam();
  active = null;
  select(null);
};

function applyCam() {
  document.getElementById("world").style.transform =
    `translate(${cam.x}px, ${cam.y}px) scale(${cam.k})`;
}

viewport.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    const rect = viewport.getBoundingClientRect();
    const mx = e.clientX - rect.left,
      my = e.clientY - rect.top;
    const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
    const k = Math.min(4, Math.max(0.7, cam.k * factor));
    cam.x = mx - ((mx - cam.x) * k) / cam.k;
    cam.y = my - ((my - cam.y) * k) / cam.k;
    cam.k = k;
    applyCam();
  },
  { passive: false },
);
viewport.addEventListener("pointerdown", (e) => {
  viewport.setPointerCapture(e.pointerId);
  drag = { x: e.clientX, y: e.clientY, cx: cam.x, cy: cam.y };
});
viewport.addEventListener("pointermove", (e) => {
  if (!drag) return;
  cam.x = drag.cx + (e.clientX - drag.x);
  cam.y = drag.cy + (e.clientY - drag.y);
  applyCam();
});
viewport.addEventListener("pointerup", () => {
  drag = null;
});

paintOverlay();
select(null);
