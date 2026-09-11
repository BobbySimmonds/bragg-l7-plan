const PLAN_W = 514;
const PLAN_H = 464;
const VILLAGES = [
  {
    id: "corp",
    label: "Corporate Services, Security & Service Management",
    short: "Corporate / Security / SM",
    color: "#3ee0c8",
    fill: "rgba(62,224,200,0.22)",
    path: "M18 100 L22 62 L55 40 L110 26 L175 28 L215 42 L228 78 L232 125 L220 162 L188 198 L145 225 L85 248 L38 238 L20 185 L16 135 Z",
    legend: "Corporate Services, Security & Service Management",
    body: "One village, three functions. Cyan outline, north-west. DHSA Security sits here with Corporate Services and Service Management.",
  },
  {
    id: "yellow",
    label: "Marked open workpoints",
    short: "Open workpoints",
    color: "#e8d35a",
    fill: "rgba(232,211,90,0.28)",
    path: "M58 198 L158 178 L172 212 L68 242 Z",
    legend: "Yellow = marked open workpoints, not a team",
    body: "Highlight only. Printed as 1–6 open workpoints at the cyan / purple join. Not a department.",
  },
  {
    id: "servicedesk",
    label: "Service Desk",
    short: "Service Desk",
    color: "#b07cff",
    fill: "rgba(176,124,255,0.18)",
    path: "M42 232 L150 185 L185 172 L202 245 L225 335 L250 408 L246 452 L195 458 L85 428 L32 335 L26 265 Z",
    legend: "Service Desk",
    body: "Purple outline, south-west. Long benches along the facade. South tip includes a 6-seat meeting table.",
  },
  {
    id: "core",
    label: "Shared core",
    short: "Shared core",
    color: "#6d7f93",
    fill: "rgba(16,24,36,0.28)",
    path: "M165 38 L350 32 L358 178 L322 172 L330 338 L308 335 L302 452 L218 452 L215 335 L208 338 L198 172 L158 182 Z",
    legend: "Shared core / meeting / pantry",
    body: "Not a village. Meeting rooms, two north boardrooms, lifts, south pantry and 4-tops.",
  },
  {
    id: "asd",
    label: "ASD",
    short: "ASD",
    color: "#ff6b7a",
    fill: "rgba(255,107,122,0.20)",
    path: "M338 32 L410 18 L478 32 L508 68 L514 128 L482 165 L410 158 L340 142 Z",
    legend: "ASD",
    body: "Red outline, north-east. Three 6-desk islands plus east-glass offices.",
  },
  {
    id: "dap",
    label: "DAP",
    short: "DAP",
    color: "#ff9a4a",
    fill: "rgba(255,154,74,0.20)",
    path: "M338 150 L412 162 L485 175 L508 205 L492 242 L400 255 L328 222 L328 168 Z",
    legend: "DAP",
    body: "Orange outline under ASD. Two long benches and core-side rooms.",
  },
  {
    id: "infra",
    label: "Infrastructure",
    short: "Infrastructure",
    color: "#ff8a5b",
    fill: "rgba(255,138,91,0.16)",
    path: "M328 222 L400 255 L492 242 L514 305 L500 398 L442 448 L338 456 L298 395 L298 305 L328 245 Z",
    legend: "Infrastructure",
    body: "Separate outline from ASD. South-east bench field.",
  },
];

function bank(ox, oy, cols, rows, r, village, prefix, ws) {
  r = r || 0;
  ws = ws || [];
  const rad = (r * Math.PI) / 180,
    ca = Math.cos(rad),
    sa = Math.sin(rad);
  const dw = 11,
    dh = 7,
    gx = 2.4,
    gy = 3.2;
  const out = [];
  let i = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const lx = col * (dw + gx),
        ly = row * (dh + gy);
      const id = ws[i];
      out.push({
        key: prefix + "-" + i,
        village,
        x: ox + lx * ca - ly * sa,
        y: oy + lx * sa + ly * ca,
        w: dw,
        h: dh,
        r,
        ws: id ? "WS7." + id : "",
      });
      i++;
    }
  }
  return out;
}

const DESKS = [
  ...bank(26, 78, 1, 2, 0, "corp", "corp-off"),
  ...bank(48, 68, 2, 3, 0, "corp", "corp-a"),
  ...bank(90, 55, 2, 3, 0, "corp", "corp-b", ["123", "122", "121", "120"]),
  ...bank(132, 48, 2, 3, 0, "corp", "corp-c", ["137", , "136"]),
  ...bank(174, 42, 2, 3, 0, "corp", "corp-d", ["146", "142", "141", "144", "143", "138"]),
  ...bank(68, 198, 6, 1, 0, "yellow", "yel"),
  ...bank(58, 242, 6, 2, -32, "servicedesk", "sd-a", ["80", "81", "84", , , , "100", "101", "102"]),
  ...bank(88, 298, 6, 2, -32, "servicedesk", "sd-b"),
  ...bank(118, 352, 6, 2, -32, "servicedesk", "sd-c"),
  ...bank(175, 400, 2, 3, 0, "servicedesk", "sd-t"),
  ...bank(352, 48, 2, 3, 0, "asd", "asd-a", ["01", "04", "06"]),
  ...bank(396, 52, 2, 3, 0, "asd", "asd-b", ["10", "11", "12", "13", "14"]),
  ...bank(440, 62, 2, 3, 0, "asd", "asd-c", ["16", "17", "18", "21", "22", "23"]),
  ...bank(482, 70, 1, 3, 0, "asd", "asd-o"),
  ...bank(348, 182, 8, 1, 22, "dap", "dap-a", ["26", "28"]),
  ...bank(338, 216, 8, 1, 22, "dap", "dap-b", ["36", "38"]),
  ...bank(340, 262, 8, 1, 20, "infra", "inf-a"),
  ...bank(330, 304, 8, 1, 20, "infra", "inf-b"),
  ...bank(322, 346, 7, 1, 20, "infra", "inf-c"),
  ...bank(350, 398, 4, 1, 8, "infra", "inf-d"),
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
  overlay.innerHTML =
    VILLAGES.map(
      (z) =>
        `<path class="zone" data-zone="${z.id}" d="${z.path}" fill="${z.fill}" stroke="${z.color}" stroke-width="${active === z.id ? 2.4 : 1.6}" opacity="${dim(z.id)}"/>`,
    ).join("") +
    (desksOn
      ? DESKS.map(
          (d) =>
            `<rect class="desk-tile" data-key="${d.key}" data-village="${d.village}" data-ws="${d.ws}" x="0" y="0" width="${d.w}" height="${d.h}" rx="1.2" opacity="${dim(d.village)}" transform="translate(${d.x} ${d.y}) rotate(${d.r})"/>`,
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
  else
    info.innerHTML = `<h3>Tap a village</h3><p>Corporate Services / Security / Service Management is the cyan block on the left. Service Desk is purple. ASD, DAP and Infrastructure stack down the right.</p>`;
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
