const START="2026-09-21",END="2026-12-18",ADVANCE=7;
const FLOORS=[
  {level:5,desks:32,note:"Temporary overflow"},
  {level:6,desks:20,note:"Not in use",enabled:false},
  {level:7,desks:150,note:"FF&E workstations"},
  {level:8,desks:152,note:"Not in use",enabled:false}
];
const HELD=[{level:7,desk:130}];
const L7_VILLAGES=[
  {id:"corp",tag:"Corporate",label:"Corporate Services, Security & Service Management",count:28},
  {id:"servicedesk",tag:"Service Desk",label:"Service Desk",count:46},
  {id:"asd",tag:"ASD",label:"T&I · ASD · WS7.01–22",count:22},
  {id:"dap",tag:"DAP",label:"T&I · DAP · WS7.23–28",count:6},
  {id:"infra",tag:"Infra",label:"T&I · Infrastructure · WS7.29–76",count:48}
];
const ROSTER={
  acousi03:1,
  aandre03:1,
  srisias:1,
  averma05:1,
  bsimmo01:1,
  bcorma02:1,
  cwilke06:1,
  csandi02:1,
  dsaund03:1,
  iexdtri:1,
  ssoutdm:1,
  portolef:1,
  gtait01:1,
  gk:1,
  fbonil01:1,
  hmosty01:1,
  jkidd02:1,
  jpenov01:1,
  jpawas01:1,
  kjenki06:1,
  kung02:1,
  wilksk:1,
  laouka01:1,
  lmendo01:1,
  lshaw03:1,
  savagem:1,
  mboric01:1,
  mtucke01:1,
  mbowle01:1,
  neiadd:1,
  nrusso02:1,
  nrashe03:1,
  sdey01:1,
  sthoma10:1,
  cthila01:1,
  raphaelw:1,
  ytuong01:1,
  acreig01:1,
  dhc000820:1,
  jander16:1,
  obecke01:1,
  pkadap01:1,
  sth003:1,
  tstapl01:1,
  aajay01:1,
  abukow01:1,
  adarli02:1,
  adonno01:1,
  aether01:1,
  agupta10:1,
  araj06:1,
  asheek01:1,
  awylli01:1,
  bbroad01:1,
  blowe01:1,
  bme003:1,
  bpokhr01:1,
  bschmi09:1,
  bunder02:1,
  cdinunzi:1,
  cford04:1,
  cgeorg10:1,
  chanp:1,
  csacco01:1,
  dcarr05:1,
  dgunaw02:1,
  dh323199:1,
  dhc000859:1,
  dmorri01:1,
  dpeter09:1,
  dtrego01:1,
  dworth03:1,
  dxie02:1,
  estamo01:1,
  eward03:1,
  gbhask01:1,
  gkumar01:1,
  gpopat02:1,
  gsnell02:1,
  gwhite10:1,
  hlunn01:1,
  hmulle01:1,
  hsingh20:1,
  iisicha:1,
  iispcar:1,
  iisrraj:1,
  issmisl:1,
  jbaban01:1,
  jbrenn08:1,
  jhill05:1,
  jkelly15:1,
  jkelly19:1,
  jketaw01:1,
  jkuruv01:1,
  jmann:1,
  jmorri17:1,
  jpilch02:1,
  jsingh01:1,
  kcarte02:1,
  kkirkl01:1,
  mbatti03:1,
  mbrady02:1,
  mcriso01:1,
  mdawki02:1,
  mdo06:1,
  menorm01:1,
  mkhiar02:1,
  mstewa14:1,
  mtorra01:1,
  navedian:1,
  ndoshi01:1,
  nflynn01:1,
  nhibbe02:1,
  ntayeb01:1,
  phodgk01:1,
  rhasan01:1,
  rtaylo24:1,
  rwheel02:1,
  sammul01:1,
  schwarta:1,
  sgavin:1,
  sharri03:1,
  sjaesc01:1,
  sklind01:1,
  smcmil05:1,
  snesci01:1,
  stonem:1,
  tgaras03:1,
  tvanth01:1,
  vrana04:1,
  vsuram01:1,
  wgalpi01:1
};
function rosterName(id){
  const hid=String(id||"").trim().toLowerCase();
  return hid && ROSTER[hid] ? ROSTER[hid] : null;
}
function loadTombs(){try{const t=JSON.parse(localStorage.getItem("bragg_tombs")||"{}");return t&&typeof t==="object"?t:{};}catch(e){return {};}}
function saveTombs(){localStorage.setItem("bragg_tombs",JSON.stringify(state.tombs||{}));}
function slotOf(b){return String(b.date)+"|"+Number(b.level)+"|"+Number(b.desk)}
function mapRow(b,hid){return {id:b.id||(b.date+"-"+b.level+"-"+b.desk+"-"+(b.hadid||hid||"")),date:b.date,level:Number(b.level),desk:Number(b.desk),hadid:b.hadid||(b.mine?hid:""),mine:!!(b.mine||(b.hadid&&b.hadid===hid))}}
function unionRows(local,remote,hid){
  const tombs=state.tombs||{};
  const bySlot={};
  function add(b){
    if(!b||!b.date) return;
    const row=mapRow(b,hid||state.hadid);
    const slot=slotOf(row);
    if(row.id&&tombs[row.id]) return;
    if(tombs[slot]&&row.hadid===(hid||state.hadid)) return;
    const prev=bySlot[slot];
    if(!prev|| (row.id&&String(row.id).indexOf("b_")==0 && String(prev.id).indexOf("b_")!==0)) bySlot[slot]=row;
  }
  (remote||[]).forEach(add); (local||[]).forEach(add);
  return Object.keys(bySlot).map(k=>bySlot[k]);
}
const state={
  hadid:(localStorage.getItem("bragg_hadid")||"").toLowerCase(),
  name:localStorage.getItem("bragg_name")||"",
  date:START,week:START,level:(function(){const n=Number(localStorage.getItem("bragg_level")||7);return n===6||n===8?7:n;})(),
  cache:[],today:new Date().toLocaleDateString("en-CA",{timeZone:"Australia/Adelaide"}),q:"",village:null,live:false,busy:false,tombs:loadTombs()
};
try{
  const saved=JSON.parse(localStorage.getItem("bragg_bookings")||"[]");
  if(Array.isArray(saved)) state.cache=saved.map(b=>({
    id:b.id||(b.date+"-"+b.level+"-"+b.desk+"-"+(b.hadid||"")),
    date:b.date,level:Number(b.level),desk:Number(b.desk),
    hadid:b.hadid||"",mine:!!(b.hadid&&b.hadid===state.hadid)
  }));
}catch(e){}
const $=id=>document.getElementById(id);
const weekday=iso=>new Date(iso+"T00:00:00Z").getUTCDay();
function isWeekend(iso){const d=weekday(iso);return d===0||d===6}
function weekdayHorizon(today){let d=today,c=isWeekend(d)?0:1;while(c<ADVANCE){d=addDays(d,1);if(!isWeekend(d))c++}return d}
function bookHorizon(today){const limit=weekdayHorizon(today);return limit<END?limit:END}
const addDays=(iso,n)=>{const [y,m,d]=iso.split("-").map(Number);return new Date(Date.UTC(y,m-1,d+n)).toISOString().slice(0,10)};
const fmt=iso=>new Date(iso+"T00:00:00Z").toLocaleDateString("en-AU",{weekday:"short",day:"numeric",month:"short",timeZone:"UTC"});
const mondayOf=iso=>{const d=weekday(iso);return addDays(iso,d===0?-6:1-d)};
const firstWeek=mondayOf(START),lastWeek=mondayOf(END);
function weekDays(mon){return [0,1,2,3,4].map(i=>addDays(mon,i)).filter(d=>d>=START&&d<=END)}
function weekLabel(mon){const days=weekDays(mon);if(!days.length)return "";const a=days[0],b=days[days.length-1];const left=new Date(a+"T00:00:00Z").toLocaleDateString("en-AU",{day:"numeric",month:a.slice(0,7)===b.slice(0,7)?undefined:"short",timeZone:"UTC"});const right=new Date(b+"T00:00:00Z").toLocaleDateString("en-AU",{day:"numeric",month:"short",timeZone:"UTC"});return left+" – "+right}
function firstOpen(mon){const h=bookHorizon(state.today);return weekDays(mon).find(d=>d>=state.today&&d<=h)||weekDays(mon).find(d=>d>=state.today)||weekDays(mon)[0]||mon}
function weekHasOpen(mon){const h=bookHorizon(state.today);return weekDays(mon).some(d=>d>=state.today&&d<=h)}
function clampWeek(mon){if(mon<firstWeek)return firstWeek;if(mon>lastWeek)return lastWeek;return mon}
function persistCache(){
  localStorage.setItem("bragg_bookings",JSON.stringify(state.cache.map(b=>({id:b.id,date:b.date,level:b.level,desk:b.desk,hadid:b.hadid||""}))));
}
function mineRows(){return state.cache.filter(b=>b.mine||b.hadid===state.hadid).sort((a,b)=>a.date.localeCompare(b.date)||a.level-b.level||a.desk-b.desk)}
function floorOf(level){return FLOORS.find(f=>f.level===Number(level))||FLOORS[0]}
function deskHeld(level,desk){return HELD.some(h=>h.level===Number(level)&&h.desk===Number(desk))}
function deskName(level,desk){const n=String(desk).padStart(2,"0");if(Number(level)===7)return "WS7."+n;if(Number(level)===8)return "WS8."+n;return "Desk "+n}
function deskShort(level,desk){if(level===7||level===8)return deskName(level,desk);return "L"+level+" · "+String(desk).padStart(2,"0")}
function villageOf(level,desk){
  if(Number(level)!==7) return null;
  if(desk>=1&&desk<=22) return L7_VILLAGES.find(v=>v.id==="asd");
  if(desk>=23&&desk<=28) return L7_VILLAGES.find(v=>v.id==="dap");
  if(desk>=29&&desk<=76) return L7_VILLAGES.find(v=>v.id==="infra");
  if(desk>=77&&desk<=122) return L7_VILLAGES.find(v=>v.id==="servicedesk");
  if(desk>=123&&desk<=150) return L7_VILLAGES.find(v=>v.id==="corp");
  return null;
}
function villageOk(v,filter){if(!filter)return true;if(!v)return false;return v.id===filter}
async function api(method,path,body){
  try{
    const res=await fetch(path,{method,headers:{"Content-Type":"application/json"},body:body?JSON.stringify(body):undefined,cache:"no-store"});
    const text=await res.text();
    let json={};
    try{json=JSON.parse(text);}catch(e){return {ok:false,error:"offline",status:res.status};}
    json.status=res.status;
    if(!res.ok&&!json.error) json.error="Something went wrong.";
    return json;
  }catch(e){
    return {ok:false,error:"offline"};
  }
}
function enterBook(){$("whoChipText").textContent=state.hadid;$("whoChip").classList.add("show");$("screenWho").classList.add("hidden");$("screenBook").classList.remove("hidden")}
function leaveBook(){$("screenBook").classList.add("hidden");$("screenWho").classList.remove("hidden")}
function paintMine(){
  const rows=mineRows();
  $("mineHint").textContent=rows.length?rows.length+" booked · tap a row to jump there":"Nothing booked yet. Your days will sit here.";
  if(!rows.length){$("mineTable").innerHTML='<div class="empty">Pick a day in the next 7 weekdays. Each day can hold one desk.</div>';return;}
  $("mineTable").innerHTML='<table><thead><tr><th>Day</th><th>Desk</th><th></th></tr></thead><tbody>'+rows.map(r=>{
    const locked=r.date<=state.today,on=r.date===state.date,v=villageOf(r.level,r.desk);
    const tag=v?'<span class="mine-tag v-'+v.id+'">'+v.tag+'</span>':"";
    return '<tr class="'+(on?"on":"")+'" data-id="'+r.id+'"><td><button class="link" data-jump="'+r.date+'" data-level="'+r.level+'">'+fmt(r.date)+'</button></td><td><button class="link" data-jump="'+r.date+'" data-level="'+r.level+'">L'+r.level+' · '+deskName(r.level,r.desk)+tag+'</button></td><td style="text-align:right">'+(locked?'<span class="hint">Locked</span>':'<button class="x" data-cancel="'+r.id+'">Cancel</button>')+'</td></tr>';
  }).join("")+"</tbody></table>";
  $("mineTable").querySelectorAll("[data-jump]").forEach(el=>el.onclick=()=>{state.date=el.dataset.jump;state.week=mondayOf(state.date);state.level=Number(el.dataset.level);state.village=null;state.q="";if($("deskQ"))$("deskQ").value="";localStorage.setItem("bragg_level",String(state.level));paint();});
  $("mineTable").querySelectorAll("[data-cancel]").forEach(el=>el.onclick=async()=>{const row=rows.find(r=>r.id===el.dataset.cancel);if(!row||!row.id)return;await cancelRow(row);});
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
function nid(){return "b_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,8)}
async function bookDesk(n){
  if(state.busy) return;
  if(state.date<state.today) return;
  const fl=floorOf(state.level);if(fl&&fl.enabled===false){$("deskMsg").textContent="That level is not in use.";$("deskMsg").className="msg";return;}
  if(deskHeld(state.level,n)){$("deskMsg").textContent="That desk is out of use.";$("deskMsg").className="msg";return;}
  if(state.date>bookHorizon(state.today)){$("deskMsg").textContent="You can only book the next 7 weekdays.";$("deskMsg").className="msg";return;}
  const v=villageOf(state.level,n);
  if(!confirm("Book "+deskName(state.level,n)+(v?" ("+v.tag+")":"")+" on "+fmt(state.date)+"?"))return;
  state.busy=true;
  $("deskMsg").textContent="Saving…";$("deskMsg").className="msg";
  const out=await api("POST","/api/bookings",{hadid:state.hadid,date:state.date,level:state.level,desk:n});
  if(out.ok){
    if(out.booking){state.cache=unionRows(state.cache,[out.booking],state.hadid);persistCache();}
    await refresh();paint();$("deskMsg").textContent="You're booked.";$("deskMsg").className="msg ok";state.busy=false;return;
  }
  state.busy=false;
  $("deskMsg").textContent=(out.error&&out.error!=="offline")?out.error:"Could not save that desk. Try again.";
  $("deskMsg").className="msg";
}
async function cancelRow(row){
  if(state.busy||!row) return;
  state.busy=true;
  const out=await api("DELETE","/api/bookings",{id:row.id,hadid:state.hadid});
  if(out.ok || out.status===404){
    const slot=slotOf(row);
    state.tombs=state.tombs||{};
    if(row.id) state.tombs[row.id]=Date.now();
    state.tombs[slot]=Date.now();
    saveTombs();
    state.cache=state.cache.filter(b=>b.id!==row.id&&slotOf(b)!==slot);
    persistCache();
    await refresh();paint();$("deskMsg").textContent="Cancelled.";$("deskMsg").className="msg ok";state.busy=false;return;
  }
  state.busy=false;
  $("deskMsg").textContent=(out.error&&out.error!=="offline")?out.error:"Could not cancel. Try again.";
  $("deskMsg").className="msg";
}
function paint(){
  $("weekLabel").textContent=weekLabel(state.week);
  $("prevWeek").disabled=!(weekHasOpen(addDays(state.week,-7))&&addDays(state.week,-7)>=firstWeek);
  $("nextWeek").disabled=!weekHasOpen(addDays(state.week,7));
  const mine=mineRows();
  const h=bookHorizon(state.today);
  $("days").innerHTML=weekDays(state.week).map(d=>{
    const booked=mine.find(b=>b.date===d),past=d<state.today,far=d>h,locked=past||far;
    const sub=booked?deskShort(booked.level,booked.desk):(past?"Past":far?"Later":"Open");
    return '<button class="day '+(d===state.date?"on":"")+(locked?" past":"")+'" data-day="'+d+'" '+(locked?"disabled":"")+'><b>'+Number(d.slice(8))+'</b><div>'+fmt(d).slice(0,3)+'</div><small>'+sub+'</small></button>';
  }).join("");
  $("days").querySelectorAll(".day:not([disabled])").forEach(el=>el.onclick=()=>{state.date=el.dataset.day;paint();});
  $("floors").innerHTML=FLOORS.map(f=>{const off=f.enabled===false;return '<button class="day '+(f.level===state.level?"on":"")+(off?" past":"")+'" data-level="'+f.level+'" '+(off?"disabled":"")+'><div>Level</div><b>'+f.level+'</b><small>'+(off?"Not in use":f.desks+" desks")+'</small></button>';}).join("");
  $("floors").querySelectorAll("[data-level]:not([disabled])").forEach(el=>el.onclick=()=>{state.level=Number(el.dataset.level);state.q="";state.village=null;if($("deskQ"))$("deskQ").value="";localStorage.setItem("bragg_level",String(state.level));paint();});
  paintVillages();
  const floor=floorOf(state.level);
  const vf=L7_VILLAGES.find(v=>v.id===state.village);
  $("dayHint").textContent=fmt(state.date)+" · Level "+state.level+" · "+floor.note+" · "+floor.desks+" desks"+(vf?" · "+vf.tag:"");
  if($("occHint")){
    const n=state.cache.filter(b=>b.date===state.date&&b.level===state.level).length;
    $("occHint").textContent=state.live?("Live shared board · "+n+" taken on Level "+state.level):"If the board is not live, you will only see desks booked on this device.";
    $("occHint").style.color=state.live?"var(--good)":"";
  }
  if($("deskQ")) $("deskQ").placeholder=state.level===7?"e.g. WS7.42 or ASD":"e.g. 12";
  const past=state.date<state.today;
  const far=state.date>bookHorizon(state.today);
  const closed=past||far;
  const by=new Map(state.cache.filter(b=>b.date===state.date&&b.level===state.level).map(b=>[b.desk,b]));
  const list=deskList();
  $("grid").innerHTML=list.map(n=>{
    const row=by.get(n),v=villageOf(state.level,n);
    const held=deskHeld(state.level,n);
    const mine=row&&(row.mine||row.hadid===state.hadid);
    const cls=(held||closed?"past":row?(mine?"mine":"taken"):"free")+(v?" v-"+v.id:"");
    const tag=v?'<span class="tag">'+v.tag+'</span>':"";
    const sub=held?"Out of use":row?(mine?"Yours":("Taken · "+(row.hadid||"Booked"))):(closed?"Closed":"Open");
    return '<button class="desk '+cls+'" data-desk="'+n+'" '+(held||closed||(row&&!mine)?"disabled":"")+'>'+tag+'<b>'+deskName(state.level,n)+'</b><div>'+sub+'</div></button>';
  }).join("")||'<p class="hint">No workstation matches that search.</p>';
  $("grid").querySelectorAll(".desk.free").forEach(el=>el.onclick=()=>bookDesk(Number(el.dataset.desk)));
  $("grid").querySelectorAll(".desk.mine").forEach(el=>el.onclick=async()=>{const row=by.get(Number(el.dataset.desk));if(!row||!row.id)return;await cancelRow(row);});
  paintMine();
}
async function refresh(){
  const data=await api("GET","/api/bookings?hadid="+encodeURIComponent(state.hadid));
  if(data.ok){
    state.live=true;
    const remote=(data.bookings||[]).map(b=>mapRow(b,state.hadid));
    const merged=unionRows(state.cache,remote,state.hadid);
    const extra=merged.filter(b=>!remote.some(r=> (r.id&&r.id===b.id) || (r.date===b.date&&Number(r.level)===Number(b.level)&&Number(r.desk)===Number(b.desk))));
    if(extra.length || Object.keys(state.tombs||{}).length){
      const sync=await api("POST","/api/bookings",{sync:true,hadid:state.hadid,bookings:extra,tombstones:Object.keys(state.tombs||{}).filter(k=>String(k).indexOf("b_")==0)});
      if(sync.ok&&sync.bookings){state.cache=unionRows([],sync.bookings.map(b=>mapRow(b,state.hadid)),state.hadid);}
      else state.cache=merged;
    }else state.cache=merged;
    persistCache();
  }else{
    state.live=false;
  }
  if(data.today) state.today=data.today;
}
function bootWeek(){const open=mondayOf(state.today>START?state.today:START);const w=clampWeek(weekHasOpen(open)?open:addDays(open,7));state.week=w;state.date=firstOpen(w);}
function signIn(hadid){
  const id=String(hadid||"").trim().toLowerCase();
  if(!id){$("whoMsg").textContent="Enter your HADID.";return false;}
  if(!rosterName(id)){$("whoMsg").textContent="That HADID is not on the Bragg pilot list.";return false;}
  state.hadid=id;state.name="";
  localStorage.setItem("bragg_hadid",id);
  localStorage.removeItem("bragg_name");
  $("whoMsg").textContent="";
  enterBook();bootWeek();paint();
  refresh().then(paint);
  return true;
}
$("whoBtn").onclick=()=>signIn($("hadid").value);
$("hadid").addEventListener("keydown",e=>{if(e.key==="Enter") signIn($("hadid").value);});
$("backWho").onclick=$("changeWho").onclick=()=>leaveBook();
$("prevWeek").onclick=()=>{state.week=clampWeek(addDays(state.week,-7));state.date=firstOpen(state.week);paint();};
$("nextWeek").onclick=()=>{const next=addDays(state.week,7);if(!weekHasOpen(next))return;state.week=clampWeek(next);state.date=firstOpen(state.week);paint();};
if($("deskQ")) $("deskQ").oninput=()=>{state.q=$("deskQ").value;paint();};
$("hadid").value=state.hadid;
bootWeek();
if(state.hadid && rosterName(state.hadid)){
  enterBook();
  refresh().then(paint);
}else{
  paint();
}
setInterval(function(){ if(state.hadid && rosterName(state.hadid)) refresh().then(paint); }, 15000);
document.addEventListener("visibilitychange", function(){
  if(document.visibilityState==="visible" && state.hadid && rosterName(state.hadid)) refresh().then(paint);
});
