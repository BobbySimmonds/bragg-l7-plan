const PLAN_W = 1600;
const PLAN_H = 1200;
const VILLAGES = [{"id":"corp","label":"Corporate Services, Security & Service Management","short":"Corporate / Security / SM","color":"#3a8cff","fill":"rgba(58,140,255,0.28)","path":"M 71.0 281.7 L 163.7 171.0 L 279.2 119.1 L 391.3 105.1 L 468.9 119.0 L 490.0 174.4 L 508.2 236.2 L 340.3 431.5 L 279.6 462.2 L 223.5 488.8 L 92.3 346.9 Z","legend":"Corporate · WS7.123–150 · 28 desks","body":"Blue, west wing. WS7.123 to WS7.150. Corporate Services, Security and Service Management share this village."},{"id":"servicedesk","label":"Service Desk","short":"Service Desk","color":"#2ecf6a","fill":"rgba(46,207,106,0.26)","path":"M 229.5 453.7 L 322.0 387.1 L 371.1 354.3 L 420.3 384.9 L 556.5 556.5 L 635.2 723.2 L 697.3 959.5 L 694.5 1064.1 L 633.8 1057.3 L 498.8 931.2 L 463.5 893.2 Z","legend":"Service Desk · WS7.77–122 · 46 desks","body":"Green, south-west. WS7.77 to WS7.122."},{"id":"asd","label":"T&I · ASD","short":"ASD","color":"#ff9a4a","fill":"rgba(255,154,74,0.28)","path":"M 1092.7 207.1 L 1117.3 107.7 L 1189.3 107.7 L 1333.7 145.3 L 1422.0 174.3 L 1500.8 244.3 L 1500.8 316.3 L 1487.6 368.0 L 1415.6 368.0 L 1358.8 363.6 L 1141.3 303.7 L 1092.7 279.1 Z","legend":"ASD · WS7.01–22 · 22 desks","body":"Orange, north-east. WS7.01 to WS7.22. Application Services Delivery."},{"id":"dap","label":"T&I · DAP","short":"DAP","color":"#c084fc","fill":"rgba(192,132,252,0.28)","path":"M 1211.9 357.2 L 1239.6 323.2 L 1311.6 323.2 L 1357.0 350.3 L 1393.6 379.3 L 1393.6 451.3 L 1376.6 479.0 L 1304.6 479.0 L 1211.9 429.2 Z","legend":"DAP · WS7.23–28 · 6 desks","body":"Purple band. WS7.23 to WS7.28. Digital Application Platforms."},{"id":"infra","label":"T&I · Infrastructure","short":"Infra","color":"#f5c542","fill":"rgba(245,197,66,0.28)","path":"M 877.7 968.3 L 887.1 858.6 L 902.3 748.2 L 1001.9 577.9 L 1117.3 410.2 L 1148.2 383.1 L 1220.2 383.1 L 1343.2 458.7 L 1343.2 530.7 L 1294.0 620.9 L 1249.2 696.6 L 1065.7 994.3 L 949.7 1040.3 L 877.7 1040.3 Z","legend":"Infrastructure · WS7.29–76 · 48 desks","body":"Gold, east wing. WS7.29 to WS7.76. Infrastructure."},{"id":"core","label":"Shared core","short":"Shared core","color":"#6d7f93","fill":"rgba(16,24,36,0.2)","path":"M 790 230 L 1110 190 L 1170 430 L 1125 760 L 900 820 L 745 560 Z","legend":"Shared core / meeting / pantry","body":"Not a village and not bookable. Meeting rooms, lifts, stairs and the south pantry sit in the core."}];
const DESKS = [{"key":"ws-1","village":"asd","x":1153.3,"y":143.7,"w":14,"h":10,"r":0,"ws":"WS7.01"},{"key":"ws-2","village":"asd","x":1143.8,"y":191.4,"w":14,"h":10,"r":0,"ws":"WS7.02"},{"key":"ws-3","village":"asd","x":1128.7,"y":243.1,"w":14,"h":10,"r":0,"ws":"WS7.03"},{"key":"ws-4","village":"asd","x":1206.9,"y":159.9,"w":14,"h":10,"r":0,"ws":"WS7.04"},{"key":"ws-5","village":"asd","x":1191.2,"y":212.2,"w":14,"h":10,"r":0,"ws":"WS7.05"},{"key":"ws-6","village":"asd","x":1177.3,"y":267.7,"w":14,"h":10,"r":0,"ws":"WS7.06"},{"key":"ws-7","village":"asd","x":1234.7,"y":181.9,"w":14,"h":10,"r":0,"ws":"WS7.07"},{"key":"ws-8","village":"asd","x":1227.1,"y":236.8,"w":14,"h":10,"r":0,"ws":"WS7.08"},{"key":"ws-9","village":"asd","x":1228.4,"y":281.6,"w":14,"h":10,"r":0,"ws":"WS7.09"},{"key":"ws-10","village":"asd","x":1297.7,"y":181.3,"w":14,"h":10,"r":0,"ws":"WS7.10"},{"key":"ws-11","village":"asd","x":1281.9,"y":229.2,"w":14,"h":10,"r":0,"ws":"WS7.11"},{"key":"ws-12","village":"asd","x":1269.9,"y":279.0,"w":14,"h":10,"r":0,"ws":"WS7.12"},{"key":"ws-13","village":"asd","x":1322.3,"y":205.9,"w":14,"h":10,"r":0,"ws":"WS7.13"},{"key":"ws-14","village":"asd","x":1329.2,"y":251.9,"w":14,"h":10,"r":0,"ws":"WS7.14"},{"key":"ws-15","village":"asd","x":1304.6,"y":301.8,"w":14,"h":10,"r":0,"ws":"WS7.15"},{"key":"ws-16","village":"asd","x":1386.0,"y":210.3,"w":14,"h":10,"r":0,"ws":"WS7.16"},{"key":"ws-17","village":"asd","x":1377.1,"y":251.3,"w":14,"h":10,"r":0,"ws":"WS7.17"},{"key":"ws-18","village":"asd","x":1360.7,"y":302.4,"w":14,"h":10,"r":0,"ws":"WS7.18"},{"key":"ws-19","village":"asd","x":1412.5,"y":275.9,"w":14,"h":10,"r":0,"ws":"WS7.19"},{"key":"ws-20","village":"asd","x":1394.8,"y":327.6,"w":14,"h":10,"r":0,"ws":"WS7.20"},{"key":"ws-21","village":"asd","x":1464.8,"y":280.3,"w":14,"h":10,"r":0,"ws":"WS7.21"},{"key":"ws-22","village":"asd","x":1451.6,"y":332.0,"w":14,"h":10,"r":0,"ws":"WS7.22"},{"key":"ws-23","village":"dap","x":1357.6,"y":415.3,"w":14,"h":10,"r":0,"ws":"WS7.23"},{"key":"ws-24","village":"dap","x":1321.0,"y":386.3,"w":14,"h":10,"r":0,"ws":"WS7.24"},{"key":"ws-25","village":"dap","x":1275.6,"y":359.2,"w":14,"h":10,"r":0,"ws":"WS7.25"},{"key":"ws-26","village":"dap","x":1247.9,"y":393.2,"w":14,"h":10,"r":0,"ws":"WS7.26"},{"key":"ws-27","village":"dap","x":1292.0,"y":414.7,"w":14,"h":10,"r":0,"ws":"WS7.27"},{"key":"ws-28","village":"dap","x":1340.6,"y":443.0,"w":14,"h":10,"r":0,"ws":"WS7.28"},{"key":"ws-29","village":"infra","x":1307.2,"y":494.7,"w":14,"h":10,"r":0,"ws":"WS7.29"},{"key":"ws-30","village":"infra","x":1265.6,"y":473.3,"w":14,"h":10,"r":0,"ws":"WS7.30"},{"key":"ws-31","village":"infra","x":1223.3,"y":444.9,"w":14,"h":10,"r":0,"ws":"WS7.31"},{"key":"ws-32","village":"infra","x":1184.2,"y":419.1,"w":14,"h":10,"r":0,"ws":"WS7.32"},{"key":"ws-33","village":"infra","x":1153.3,"y":446.2,"w":14,"h":10,"r":0,"ws":"WS7.33"},{"key":"ws-34","village":"infra","x":1200.6,"y":478.4,"w":14,"h":10,"r":0,"ws":"WS7.34"},{"key":"ws-35","village":"infra","x":1235.9,"y":504.9,"w":14,"h":10,"r":0,"ws":"WS7.35"},{"key":"ws-36","village":"infra","x":1289.5,"y":526.9,"w":14,"h":10,"r":0,"ws":"WS7.36"},{"key":"ws-37","village":"infra","x":1258.0,"y":584.9,"w":14,"h":10,"r":0,"ws":"WS7.37"},{"key":"ws-38","village":"infra","x":1221.4,"y":556.6,"w":14,"h":10,"r":0,"ws":"WS7.38"},{"key":"ws-39","village":"infra","x":1181.1,"y":525.7,"w":14,"h":10,"r":0,"ws":"WS7.39"},{"key":"ws-40","village":"infra","x":1129.9,"y":502.9,"w":14,"h":10,"r":0,"ws":"WS7.40"},{"key":"ws-41","village":"infra","x":1110.3,"y":535.1,"w":14,"h":10,"r":0,"ws":"WS7.41"},{"key":"ws-42","village":"infra","x":1152.6,"y":562.9,"w":14,"h":10,"r":0,"ws":"WS7.42"},{"key":"ws-43","village":"infra","x":1196.2,"y":591.2,"w":14,"h":10,"r":0,"ws":"WS7.43"},{"key":"ws-44","village":"infra","x":1232.1,"y":622.8,"w":14,"h":10,"r":0,"ws":"WS7.44"},{"key":"ws-45","village":"infra","x":1213.2,"y":660.6,"w":14,"h":10,"r":0,"ws":"WS7.45"},{"key":"ws-46","village":"infra","x":1167.8,"y":631.0,"w":14,"h":10,"r":0,"ws":"WS7.46"},{"key":"ws-47","village":"infra","x":1128.1,"y":605.7,"w":14,"h":10,"r":0,"ws":"WS7.47"},{"key":"ws-48","village":"infra","x":1083.3,"y":585.6,"w":14,"h":10,"r":0,"ws":"WS7.48"},{"key":"ws-49","village":"infra","x":1037.9,"y":613.9,"w":14,"h":10,"r":0,"ws":"WS7.49"},{"key":"ws-50","village":"infra","x":1089.6,"y":639.2,"w":14,"h":10,"r":0,"ws":"WS7.50"},{"key":"ws-51","village":"infra","x":1138.1,"y":673.2,"w":14,"h":10,"r":0,"ws":"WS7.51"},{"key":"ws-52","village":"infra","x":1186.7,"y":698.5,"w":14,"h":10,"r":0,"ws":"WS7.52"},{"key":"ws-53","village":"infra","x":1155.8,"y":738.8,"w":14,"h":10,"r":0,"ws":"WS7.53"},{"key":"ws-54","village":"infra","x":1113.6,"y":714.2,"w":14,"h":10,"r":0,"ws":"WS7.54"},{"key":"ws-55","village":"infra","x":1070.1,"y":692.8,"w":14,"h":10,"r":0,"ws":"WS7.55"},{"key":"ws-56","village":"infra","x":1022.8,"y":660.6,"w":14,"h":10,"r":0,"ws":"WS7.56"},{"key":"ws-57","village":"infra","x":998.8,"y":699.7,"w":14,"h":10,"r":0,"ws":"WS7.57"},{"key":"ws-58","village":"infra","x":1041.1,"y":723.1,"w":14,"h":10,"r":0,"ws":"WS7.58"},{"key":"ws-59","village":"infra","x":1083.9,"y":750.2,"w":14,"h":10,"r":0,"ws":"WS7.59"},{"key":"ws-60","village":"infra","x":1119.2,"y":781.7,"w":14,"h":10,"r":0,"ws":"WS7.60"},{"key":"ws-61","village":"infra","x":1099.0,"y":830.9,"w":14,"h":10,"r":0,"ws":"WS7.61"},{"key":"ws-62","village":"infra","x":1061.2,"y":796.8,"w":14,"h":10,"r":0,"ws":"WS7.62"},{"key":"ws-63","village":"infra","x":1015.8,"y":772.9,"w":14,"h":10,"r":0,"ws":"WS7.63"},{"key":"ws-64","village":"infra","x":966.0,"y":746.4,"w":14,"h":10,"r":0,"ws":"WS7.64"},{"key":"ws-65","village":"infra","x":938.3,"y":784.2,"w":14,"h":10,"r":0,"ws":"WS7.65"},{"key":"ws-66","village":"infra","x":989.3,"y":812.0,"w":14,"h":10,"r":0,"ws":"WS7.66"},{"key":"ws-67","village":"infra","x":1025.9,"y":842.3,"w":14,"h":10,"r":0,"ws":"WS7.67"},{"key":"ws-68","village":"infra","x":1068.8,"y":870.0,"w":14,"h":10,"r":0,"ws":"WS7.68"},{"key":"ws-69","village":"infra","x":1049.9,"y":920.5,"w":14,"h":10,"r":0,"ws":"WS7.69"},{"key":"ws-70","village":"infra","x":1005.1,"y":894.0,"w":14,"h":10,"r":0,"ws":"WS7.70"},{"key":"ws-71","village":"infra","x":960.9,"y":868.1,"w":14,"h":10,"r":0,"ws":"WS7.71"},{"key":"ws-72","village":"infra","x":923.1,"y":894.6,"w":14,"h":10,"r":0,"ws":"WS7.72"},{"key":"ws-73","village":"infra","x":979.9,"y":932.4,"w":14,"h":10,"r":0,"ws":"WS7.73"},{"key":"ws-74","village":"infra","x":1029.7,"y":958.3,"w":14,"h":10,"r":0,"ws":"WS7.74"},{"key":"ws-75","village":"infra","x":954.7,"y":973.4,"w":14,"h":10,"r":0,"ws":"WS7.75"},{"key":"ws-76","village":"infra","x":913.7,"y":1004.3,"w":14,"h":10,"r":0,"ws":"WS7.76"},{"key":"ws-77","village":"servicedesk","x":664.5,"y":1017.0,"w":14,"h":10,"r":0,"ws":"WS7.77"},{"key":"ws-78","village":"servicedesk","x":661.4,"y":967.1,"w":14,"h":10,"r":0,"ws":"WS7.78"},{"key":"ws-79","village":"servicedesk","x":660.7,"y":916.7,"w":14,"h":10,"r":0,"ws":"WS7.79"},{"key":"ws-80","village":"servicedesk","x":600.2,"y":913.5,"w":14,"h":10,"r":0,"ws":"WS7.80"},{"key":"ws-81","village":"servicedesk","x":601.4,"y":964.6,"w":14,"h":10,"r":0,"ws":"WS7.81"},{"key":"ws-82","village":"servicedesk","x":609.6,"y":1007.5,"w":14,"h":10,"r":0,"ws":"WS7.82"},{"key":"ws-83","village":"servicedesk","x":491.7,"y":878.2,"w":14,"h":10,"r":0,"ws":"WS7.83"},{"key":"ws-84","village":"servicedesk","x":533.9,"y":854.9,"w":14,"h":10,"r":0,"ws":"WS7.84"},{"key":"ws-85","village":"servicedesk","x":566.8,"y":831.5,"w":14,"h":10,"r":0,"ws":"WS7.85"},{"key":"ws-86","village":"servicedesk","x":612.8,"y":802.5,"w":14,"h":10,"r":0,"ws":"WS7.86"},{"key":"ws-87","village":"servicedesk","x":576.9,"y":777.3,"w":14,"h":10,"r":0,"ws":"WS7.87"},{"key":"ws-88","village":"servicedesk","x":534.0,"y":799.4,"w":14,"h":10,"r":0,"ws":"WS7.88"},{"key":"ws-89","village":"servicedesk","x":504.3,"y":817.0,"w":14,"h":10,"r":0,"ws":"WS7.89"},{"key":"ws-90","village":"servicedesk","x":465.2,"y":841.0,"w":14,"h":10,"r":0,"ws":"WS7.90"},{"key":"ws-91","village":"servicedesk","x":452.6,"y":790.5,"w":14,"h":10,"r":0,"ws":"WS7.91"},{"key":"ws-92","village":"servicedesk","x":492.4,"y":765.3,"w":14,"h":10,"r":0,"ws":"WS7.92"},{"key":"ws-93","village":"servicedesk","x":534.0,"y":740.7,"w":14,"h":10,"r":0,"ws":"WS7.93"},{"key":"ws-94","village":"servicedesk","x":580.6,"y":711.7,"w":14,"h":10,"r":0,"ws":"WS7.94"},{"key":"ws-95","village":"servicedesk","x":538.4,"y":690.3,"w":14,"h":10,"r":0,"ws":"WS7.95"},{"key":"ws-96","village":"servicedesk","x":501.2,"y":711.1,"w":14,"h":10,"r":0,"ws":"WS7.96"},{"key":"ws-97","village":"servicedesk","x":465.9,"y":735.0,"w":14,"h":10,"r":0,"ws":"WS7.97"},{"key":"ws-98","village":"servicedesk","x":419.2,"y":757.7,"w":14,"h":10,"r":0,"ws":"WS7.98"},{"key":"ws-99","village":"servicedesk","x":382.0,"y":686.5,"w":14,"h":10,"r":0,"ws":"WS7.99"},{"key":"ws-100","village":"servicedesk","x":438.6,"y":653.6,"w":14,"h":10,"r":0,"ws":"WS7.100"},{"key":"ws-101","village":"servicedesk","x":484.0,"y":625.2,"w":14,"h":10,"r":0,"ws":"WS7.101"},{"key":"ws-102","village":"servicedesk","x":531.9,"y":596.2,"w":14,"h":10,"r":0,"ws":"WS7.102"},{"key":"ws-103","village":"servicedesk","x":482.7,"y":565.3,"w":14,"h":10,"r":0,"ws":"WS7.103"},{"key":"ws-104","village":"servicedesk","x":441.1,"y":596.8,"w":14,"h":10,"r":0,"ws":"WS7.104"},{"key":"ws-105","village":"servicedesk","x":402.7,"y":620.2,"w":14,"h":10,"r":0,"ws":"WS7.105"},{"key":"ws-106","village":"servicedesk","x":361.7,"y":647.3,"w":14,"h":10,"r":0,"ws":"WS7.106"},{"key":"ws-107","village":"servicedesk","x":334.5,"y":603.1,"w":14,"h":10,"r":0,"ws":"WS7.107"},{"key":"ws-108","village":"servicedesk","x":385.6,"y":574.8,"w":14,"h":10,"r":0,"ws":"WS7.108"},{"key":"ws-109","village":"servicedesk","x":427.2,"y":551.4,"w":14,"h":10,"r":0,"ws":"WS7.109"},{"key":"ws-110","village":"servicedesk","x":474.5,"y":522.4,"w":14,"h":10,"r":0,"ws":"WS7.110"},{"key":"ws-111","village":"servicedesk","x":439.8,"y":487.7,"w":14,"h":10,"r":0,"ws":"WS7.111"},{"key":"ws-112","village":"servicedesk","x":398.2,"y":516.1,"w":14,"h":10,"r":0,"ws":"WS7.112"},{"key":"ws-113","village":"servicedesk","x":355.9,"y":536.3,"w":14,"h":10,"r":0,"ws":"WS7.113"},{"key":"ws-114","village":"servicedesk","x":306.7,"y":565.3,"w":14,"h":10,"r":0,"ws":"WS7.114"},{"key":"ws-115","village":"servicedesk","x":279.0,"y":516.7,"w":14,"h":10,"r":0,"ws":"WS7.115"},{"key":"ws-116","village":"servicedesk","x":328.2,"y":485.5,"w":14,"h":10,"r":0,"ws":"WS7.116"},{"key":"ws-117","village":"servicedesk","x":374.2,"y":458.1,"w":14,"h":10,"r":0,"ws":"WS7.117"},{"key":"ws-118","village":"servicedesk","x":424.7,"y":426.5,"w":14,"h":10,"r":0,"ws":"WS7.118"},{"key":"ws-119","village":"servicedesk","x":380.5,"y":394.4,"w":14,"h":10,"r":0,"ws":"WS7.119"},{"key":"ws-120","village":"servicedesk","x":338.3,"y":424.0,"w":14,"h":10,"r":0,"ws":"WS7.120"},{"key":"ws-121","village":"servicedesk","x":305.5,"y":451.1,"w":14,"h":10,"r":0,"ws":"WS7.121"},{"key":"ws-122","village":"servicedesk","x":257.6,"y":481.4,"w":14,"h":10,"r":0,"ws":"WS7.122"},{"key":"ws-123","village":"corp","x":232.4,"y":438.5,"w":14,"h":10,"r":0,"ws":"WS7.123"},{"key":"ws-124","village":"corp","x":277.7,"y":409.5,"w":14,"h":10,"r":0,"ws":"WS7.124"},{"key":"ws-125","village":"corp","x":321.9,"y":379.9,"w":14,"h":10,"r":0,"ws":"WS7.125"},{"key":"ws-126","village":"corp","x":282.8,"y":343.3,"w":14,"h":10,"r":0,"ws":"WS7.126"},{"key":"ws-127","village":"corp","x":243.7,"y":372.3,"w":14,"h":10,"r":0,"ws":"WS7.127"},{"key":"ws-128","village":"corp","x":209.7,"y":396.9,"w":14,"h":10,"r":0,"ws":"WS7.128"},{"key":"ws-129","village":"corp","x":130.2,"y":325.0,"w":14,"h":10,"r":0,"ws":"WS7.129"},{"key":"ws-130","village":"corp","x":111.9,"y":273.9,"w":14,"h":10,"r":0,"ws":"WS7.130"},{"key":"ws-131","village":"corp","x":171.1,"y":264.5,"w":14,"h":10,"r":0,"ws":"WS7.131"},{"key":"ws-132","village":"corp","x":185.1,"y":320.6,"w":14,"h":10,"r":0,"ws":"WS7.132"},{"key":"ws-133","village":"corp","x":223.5,"y":292.2,"w":14,"h":10,"r":0,"ws":"WS7.133"},{"key":"ws-134","village":"corp","x":206.5,"y":246.2,"w":14,"h":10,"r":0,"ws":"WS7.134"},{"key":"ws-135","village":"corp","x":195.8,"y":193.8,"w":14,"h":10,"r":0,"ws":"WS7.135"},{"key":"ws-136","village":"corp","x":248.1,"y":188.2,"w":14,"h":10,"r":0,"ws":"WS7.136"},{"key":"ws-137","village":"corp","x":264.5,"y":239.9,"w":14,"h":10,"r":0,"ws":"WS7.137"},{"key":"ws-138","village":"corp","x":274.0,"y":294.7,"w":14,"h":10,"r":0,"ws":"WS7.138"},{"key":"ws-139","village":"corp","x":309.3,"y":269.5,"w":14,"h":10,"r":0,"ws":"WS7.139"},{"key":"ws-140","village":"corp","x":294.8,"y":219.7,"w":14,"h":10,"r":0,"ws":"WS7.140"},{"key":"ws-141","village":"corp","x":279.0,"y":161.7,"w":14,"h":10,"r":0,"ws":"WS7.141"},{"key":"ws-142","village":"corp","x":337.0,"y":166.1,"w":14,"h":10,"r":0,"ws":"WS7.142"},{"key":"ws-143","village":"corp","x":350.3,"y":215.3,"w":14,"h":10,"r":0,"ws":"WS7.143"},{"key":"ws-144","village":"corp","x":362.2,"y":261.3,"w":14,"h":10,"r":0,"ws":"WS7.144"},{"key":"ws-145","village":"corp","x":400.7,"y":238.0,"w":14,"h":10,"r":0,"ws":"WS7.145"},{"key":"ws-146","village":"corp","x":378.0,"y":191.3,"w":14,"h":10,"r":0,"ws":"WS7.146"},{"key":"ws-147","village":"corp","x":361.0,"y":142.1,"w":14,"h":10,"r":0,"ws":"WS7.147"},{"key":"ws-148","village":"corp","x":426.0,"y":145.9,"w":14,"h":10,"r":0,"ws":"WS7.148"},{"key":"ws-149","village":"corp","x":440.0,"y":190.8,"w":14,"h":10,"r":0,"ws":"WS7.149"},{"key":"ws-150","village":"corp","x":453.8,"y":238.6,"w":14,"h":10,"r":0,"ws":"WS7.150"}];

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
const DEFAULT_INFO = "<h3>Tap a village</h3><p>Blue Corporate, green Service Desk. T&I is split: orange ASD (01–22), purple DAP (23–28), gold Infrastructure (29–76).</p>";

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
