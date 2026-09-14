const START="2026-09-21",END="2026-12-18";
const FLOORS=[{level:5,desks:32,note:"Temporary overflow"},{level:6,desks:20,note:"No FF&E sheet yet"},{level:7,desks:150,note:"FF&E workstations"},{level:8,desks:152,note:"FF&E workstations"}];
const L7_VILLAGES=[
  {id:"corp",tag:"Corporate",label:"Corporate Services, Security & Service Management",count:28},
  {id:"servicedesk",tag:"Service Desk",label:"Service Desk",count:46},
  {id:"openwp",tag:"Open WP",label:"7.21 Open workpoints · inside Service Desk",count:8,parent:"servicedesk"},
  {id:"asd",tag:"ASD",label:"ASD",count:28},
  {id:"dap",tag:"DAP",label:"DAP",count:16},
  {id:"infra",tag:"Infra",label:"Infrastructure",count:32}
];
const state={hadid:localStorage.getItem("bragg_hadid")||"",name:localStorage.getItem("bragg_name")||"",date:START,week:START,level:Number(localStorage.getItem("bragg_level")||5),cache:[],today:"2026-09-14",q:"",village:null};
const $=id=>document.getElementById(id);
const weekday=iso=>new Date(iso+"T00:00:00Z").getUTCDay();
const addDays=(iso,n)=>{const [y,m,d]=iso.split("-").map(Number);return new Date(Date.UTC(y,m-1,d+n)).toISOString().slice(0,10)};
const fmt=iso=>new Date(iso+"T00:00:00Z").toLocaleDateString("en-AU",{weekday:"short",day:"numeric",month:"short",timeZone:"UTC"});
const mondayOf=iso=>{const d=weekday(iso);return addDays(iso,d===0?-6:1-d)};
const firstWeek=mondayOf(START),lastWeek=mondayOf(END);
function weekDays(mon){return [0,1,2,3,4].map(i=>addDays(mon,i)).filter(d=>d>=START&&d<=END)}
function weekLabel(mon){const days=weekDays(mon);if(!days.length)return "";const a=days[0],b=days[days.length-1];const left=new Date(a+"T00:00:00Z").toLocaleDateString("en-AU",{day:"numeric",month:a.slice(0,7)===b.slice(0,7)?undefined:"short",timeZone:"UTC"});const right=new Date(b+"T00:00:00Z").toLocaleDateString("en-AU",{day:"numeric",month:"short",timeZone:"UTC"});return left+" – "+right}
function firstOpen(mon){return weekDays(mon).find(d=>d>=state.today)||weekDays(mon)[0]||mon}
function weekHasOpen(mon){return weekDays(mon).some(d=>d>=state.today)}
function clampWeek(mon){if(mon<firstWeek)return firstWeek;if(mon>lastWeek)return lastWeek;return mon}
function mineRows(){return state.cache.filter(b=>b.mine).sort((a,b)=>a.date.localeCompare(b.date)||a.level-b.level||a.desk-b.desk)}
function floorOf(level){return FLOORS.find(f=>f.level===Number(level))||FLOORS[0]}
function deskName(level,desk){const n=String(desk).padStart(2,"0");if(Number(level)===7)return "WS7."+n;if(Number(level)===8)return "WS8."+n;return "Desk "+n}
function deskShort(level,desk){if(level===7||level===8)return deskName(level,desk);return "L"+level+" · "+String(desk).padStart(2,"0")}
function villageOf(level,desk){
  if(Number(level)!==7) return null;
  if(desk>=1&&desk<=28) return L7_VILLAGES.find(v=>v.id==="asd");
  if(desk>=29&&desk<=44) return L7_VILLAGES.find(v=>v.id==="dap");
  if(desk>=45&&desk<=76) return L7_VILLAGES.find(v=>v.id==="infra");
  if(desk>=111&&desk<=118) return L7_VILLAGES.find(v=>v.id==="openwp");
  if(desk>=77&&desk<=122) return L7_VILLAGES.find(v=>v.id==="servicedesk");
  if(desk>=123&&desk<=150) return L7_VILLAGES.find(v=>v.id==="corp");
  return null;
}
function villageOk(v,filter){if(!filter)return true;if(!v)return false;if(v.id===filter)return true;return filter==="servicedesk"&&v.parent==="servicedesk"}
async function api(method,path,body){const res=await fetch(path,{method,headers:{"Content-Type":"application/json"},body:body?JSON.stringify(body):undefined,cache:"no-store"});const json=await res.json().catch(()=>({ok:false,error:"Could not read response."}));json.status=res.status;if(!res.ok&&!json.error)json.error="Something went wrong.";return json;}
function enterBook(){$("whoChipText").textContent=state.name+" · "+state.hadid;$("whoChip").classList.add("show");$("screenWho").classList.add("hidden");$("screenBook").classList.remove("hidden")}
function leaveBook(){$("screenBook").classList.add("hidden");$("screenWho").classList.remove("hidden")}
function paintMine(){
  const rows=mineRows();
  $("mineHint").textContent=rows.length?rows.length+" booked · tap a row to jump there":"Nothing booked yet. Your days will sit here.";
  if(!rows.length){$("mineTable").innerHTML='<div class="empty">Pick Mon–Fri in this week. Each day can hold one desk.</div>';return;}
  $("mineTable").innerHTML='<table><thead><tr><th>Day</th><th>Desk</th><th></th></tr></thead><tbody>'+rows.map(r=>{
    const locked=r.date<=state.today,on=r.date===state.date,v=villageOf(r.level,r.desk);
    const tag=v?'<span class="mine-tag v-'+v.id+'">'+v.tag+'</span>':"";
    return '<tr class="'+(on?"on":"")+'" data-id="'+r.id+'"><td><button class="link" data-jump="'+r.date+'" data-level="'+r.level+'">'+fmt(r.date)+'</button></td><td><button class="link" data-jump="'+r.date+'" data-level="'+r.level+'">L'+r.level+' · '+deskName(r.level,r.desk)+tag+'</button></td><td style="text-align:right">'+(locked?'<span class="hint">Locked</span>':'<button class="x" data-cancel="'+r.id+'">Cancel</button>')+'</td></tr>';
  }).join("")+"</tbody></table>";
  $("mineTable").querySelectorAll("[data-jump]").forEach(el=>el.onclick=()=>{state.date=el.dataset.jump;state.week=mondayOf(state.date);state.level=Number(el.dataset.level);state.village=null;state.q="";if($("deskQ"))$("deskQ").value="";localStorage.setItem("bragg_level",String(state.level));paint();});
  $("mineTable").querySelectorAll("[data-cancel]").forEach(el=>el.onclick=async()=>{const row=rows.find(r=>r.id===el.dataset.cancel);if(!row||!row.id)return;const out=await api("DELETE","/api/bookings",{id:row.id,hadid:state.hadid});$("deskMsg").textContent=out.ok?"Cancelled.":(out.error||"");$("deskMsg").className="msg "+(out.ok?"ok":"");await refresh();paint();});
}
function deskList(){
  const floor=floorOf(state.level);
  const all=Array.from({length:floor.desks},(_,i)=>i+1);
  const q=(state.q||"").trim().toLowerCase();
  const stripped=q.replace(/^ws[78]\.?/,"");
  return all.filter(n=>{
    const v=villageOf(state.level,n);
    if(!villageOk(v,state.village)) return false;
    if(!q) return true;
    const hay=[deskName(state.level,n),String(n),v&&v.tag,v&&v.label,v&&v.id].filter(Boolean).join(" ").toLowerCase();
    return hay.includes(q)||String(n).includes(stripped);
  });
}
function paintVillages(){
  const el=$("villages");
  if(!el) return;
  if(state.level!==7){el.innerHTML="";return;}
  el.innerHTML='<button class="vchip '+(state.village===null?"on":"")+'" data-v="">All<small>150 desks</small></button>'+L7_VILLAGES.map(v=>'<button class="vchip v-'+v.id+' '+(state.village===v.id?"on":"")+'" data-v="'+v.id+'" title="'+v.label+'"><i class="swatch"></i>'+v.tag+'<small>'+v.count+' desks</small></button>').join("");
  el.querySelectorAll("[data-v]").forEach(btn=>btn.onclick=()=>{const id=btn.dataset.v||null;state.village=id&&state.village===id?null:id;paint();});
}
function paint(){
  $("weekLabel").textContent=weekLabel(state.week);
  $("prevWeek").disabled=!(weekHasOpen(addDays(state.week,-7))&&addDays(state.week,-7)>=firstWeek);
  $("nextWeek").disabled=addDays(state.week,7)>lastWeek;
  const mine=mineRows();
  $("days").innerHTML=weekDays(state.week).map(d=>{
    const booked=mine.find(b=>b.date===d),past=d<state.today;
    const sub=booked?deskShort(booked.level,booked.desk):(past?"Past":"Open");
    return '<button class="day '+(d===state.date?"on":"")+(past?" past":"")+'" data-day="'+d+'" '+(past?"disabled":"")+'><b>'+Number(d.slice(8))+'</b><div>'+fmt(d).slice(0,3)+'</div><small>'+sub+'</small></button>';
  }).join("");
  $("days").querySelectorAll(".day:not([disabled])").forEach(el=>el.onclick=()=>{state.date=el.dataset.day;paint();});
  $("floors").innerHTML=FLOORS.map(f=>'<button class="day '+(f.level===state.level?"on":"")+'" data-level="'+f.level+'"><div>Level</div><b>'+f.level+'</b><small>'+f.desks+' desks</small></button>').join("");
  $("floors").querySelectorAll("[data-level]").forEach(el=>el.onclick=()=>{state.level=Number(el.dataset.level);state.q="";state.village=null;if($("deskQ"))$("deskQ").value="";localStorage.setItem("bragg_level",String(state.level));paint();});
  paintVillages();
  const floor=floorOf(state.level);
  const vf=L7_VILLAGES.find(v=>v.id===state.village);
  $("dayHint").textContent=fmt(state.date)+" · Level "+state.level+" · "+floor.note+" · "+floor.desks+" desks"+(vf?" · "+vf.tag:"");
  if($("deskQ")) $("deskQ").placeholder=state.level===7?"e.g. WS7.42 or ASD":state.level===8?"e.g. WS8.18":"e.g. 12";
  const past=state.date<state.today;
  const by=new Map(state.cache.filter(b=>b.date===state.date&&b.level===state.level).map(b=>[b.desk,b]));
  const list=deskList();
  $("grid").innerHTML=list.map(n=>{
    const row=by.get(n),v=villageOf(state.level,n);
    const cls=(past?"past":row?(row.mine?"mine":"taken"):"free")+(v?" v-"+v.id:"");
    const tag=v?'<span class="tag">'+v.tag+'</span>':"";
    const sub=row?(row.mine?"Yours":(row.name||"Booked")):(past?"Closed":"Open");
    return '<button class="desk '+cls+'" data-desk="'+n+'" '+(past||(row&&!row.mine)?"disabled":"")+'>'+tag+'<b>'+deskName(state.level,n)+'</b><div>'+sub+'</div></button>';
  }).join("")||'<p class="hint">No workstation matches that search.</p>';
  $("grid").querySelectorAll(".desk.free").forEach(el=>el.onclick=async()=>{const n=Number(el.dataset.desk);const v=villageOf(state.level,n);if(!confirm("Book "+deskName(state.level,n)+(v?" ("+v.tag+")":"")+" on "+fmt(state.date)+"?"))return;const out=await api("POST","/api/bookings",{hadid:state.hadid,date:state.date,level:state.level,desk:n});$("deskMsg").textContent=out.ok?"You're booked.":(out.error||"");$("deskMsg").className="msg "+(out.ok?"ok":"");await refresh();paint();});
  $("grid").querySelectorAll(".desk.mine").forEach(el=>el.onclick=async()=>{const row=by.get(Number(el.dataset.desk));if(!row||!row.id)return;const out=await api("DELETE","/api/bookings",{id:row.id,hadid:state.hadid});$("deskMsg").textContent=out.ok?"Cancelled.":(out.error||"");$("deskMsg").className="msg "+(out.ok?"ok":"");await refresh();paint();});
  paintMine();
}
async function refresh(){const data=await api("GET","/api/bookings?hadid="+encodeURIComponent(state.hadid));if(data.ok)state.cache=data.bookings||[];if(data.today)state.today=data.today;}
function bootWeek(){const open=mondayOf(state.today>START?state.today:START);const w=clampWeek(weekHasOpen(open)?open:addDays(open,7));state.week=w;state.date=firstOpen(w);}
$("whoBtn").onclick=async()=>{const hadid=$("hadid").value.trim();if(!hadid){$("whoMsg").textContent="Enter your HADID.";return;}const who=await api("GET","/api/bookings?who=1&hadid="+encodeURIComponent(hadid));if(!who.ok){$("whoMsg").textContent=who.error||"Not on the pilot list.";return;}state.hadid=who.hadid;state.name=who.name;localStorage.setItem("bragg_hadid",state.hadid);localStorage.setItem("bragg_name",state.name);enterBook();await refresh();bootWeek();paint();};
$("backWho").onclick=$("changeWho").onclick=()=>leaveBook();
$("prevWeek").onclick=()=>{state.week=clampWeek(addDays(state.week,-7));state.date=firstOpen(state.week);paint();};
$("nextWeek").onclick=()=>{state.week=clampWeek(addDays(state.week,7));state.date=firstOpen(state.week);paint();};
if($("deskQ")) $("deskQ").oninput=()=>{state.q=$("deskQ").value;paint();};
$("hadid").value=state.hadid;
api("GET","/api/bookings?meta=1").then(async m=>{if(m.today)state.today=m.today;bootWeek();if(state.hadid){const who=await api("GET","/api/bookings?who=1&hadid="+encodeURIComponent(state.hadid));if(who.ok){state.name=who.name;enterBook();await refresh();paint();}}});
