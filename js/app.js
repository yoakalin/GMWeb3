(function () {
  "use strict";
  var S = window.SITE;
  var main = document.getElementById("main");
  var $ = function (sel, el) { return (el || document).querySelector(sel); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var ext = 'target="_blank" rel="noopener noreferrer"';

  /* ---------- Theme ---------- */
  var root = document.documentElement;
  try { var t = localStorage.getItem("gm-theme"); if (t) root.setAttribute("data-theme", t); } catch (e) {}
  $("#theme-btn").addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") === "dark" ||
      (!root.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    var next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("gm-theme", next); } catch (e) {}
  });

  /* ---------- Mobile nav ---------- */
  var navBtn = $("#nav-menu"), nav = $("#site-nav");
  navBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    navBtn.setAttribute("aria-expanded", open);
  });

  /* ---------- Toast & copy ---------- */
  var toastTimer;
  function toast(msg) {
    var el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 1800);
  }
  function copy(text) {
    var done = function () { toast("已複製邀請碼：" + text); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else fallback();
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast("複製失敗，請手動複製"); }
      document.body.removeChild(ta);
    }
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copy]");
    if (b) { e.preventDefault(); copy(b.getAttribute("data-copy")); }
  });

  /* ---------- Components ---------- */
  function exchangeCards() {
    return '<div class="ex-grid">' + S.exchanges.map(function (x) {
      return '<article class="ex-card" style="--brand:' + esc(x.color) + '">' +
        '<div class="ex-head"><span class="ex-logo" aria-hidden="true">' + esc(x.name.charAt(0)) + '</span>' +
        '<div><h3>' + esc(x.name) + (x.zh ? ' <small>' + esc(x.zh) + '</small>' : '') + '</h3>' +
        '<span class="pill">' + esc(x.type) + '</span></div></div>' +
        '<p class="ex-desc">' + esc(x.desc) + '</p>' +
        '<div class="ex-code"><span class="lbl">邀請碼</span><code>' + esc(x.code) + '</code>' +
        '<button type="button" class="btn-ghost" data-copy="' + esc(x.code) + '" aria-label="複製 ' + esc(x.name) + ' 邀請碼">複製</button></div>' +
        '<a class="btn" href="' + esc(x.url) + '" ' + ext + '>立即註冊 →</a>' +
        '</article>';
    }).join("") + '</div>';
  }

  function socialLinks(compact) {
    return '<div class="social-grid' + (compact ? ' compact' : '') + '">' + S.socials.map(function (s) {
      return '<a class="social" href="' + esc(s.url) + '" ' + ext + '>' +
        '<span class="s-ico" aria-hidden="true">' + esc(s.icon) + '</span>' +
        '<span class="s-txt"><b>' + esc(s.name) + '</b><small>' + esc(s.note) + '</small></span></a>';
    }).join("") + '</div>';
  }

  function profileCard() {
    var p = S.profile;
    return '<section class="hero">' +
      '<div class="hero-bg" aria-hidden="true"></div>' +
      '<div class="hero-in">' +
      '<img class="avatar" src="' + esc(p.avatar) + '" alt="' + esc(p.name) + ' 頭像" width="112" height="112" onerror="this.replaceWith(Object.assign(document.createElement(\'span\'),{className:\'avatar avatar-fb\',textContent:\'Y\'}))">' +
      '<p class="eyebrow">☀️ GM, fren!</p>' +
      '<h1>Web3 新手村<span class="grad">從 0 到 1</span></h1>' +
      '<p class="lead">我是 <b>' + esc(p.name) + '</b>（' + esc(p.title) + '）。' + esc(p.tagline) + '。這裡整理了我入圈以來最想告訴新手的事：觀念、操作、防詐，以及我在用的交易所。</p>' +
      '<div class="hero-cta"><a class="btn" href="#/c/01">開始學習</a><a class="btn btn-alt" href="#/exchanges">🎁 交易所邀請碼</a></div>' +
      '</div></section>';
  }

  /* ---------- Pages ---------- */
  function pageHome() {
    var chapters = S.chapters.map(function (c) {
      return '<a class="ch-card" href="#/c/' + c.id + '">' +
        '<span class="ch-emoji" aria-hidden="true">' + c.emoji + '</span>' +
        '<span class="ch-num">CH ' + c.id + '</span>' +
        '<h3>' + esc(c.title) + '</h3><p>' + esc(c.intro) + '</p></a>';
    }).join("");
    return profileCard() +
      '<section class="block"><div class="block-head"><h2>🎁 交易所邀請碼</h2><a href="#/exchanges">查看全部 →</a></div>' +
      '<p class="muted">透過以下連結註冊，享各平台手續費折扣（最高可達 20%，依各交易所當期活動為準）。</p>' +
      exchangeCards() + '</section>' +
      '<section class="block"><div class="block-head"><h2>📚 教學目錄</h2><span class="muted">' + S.chapters.length + ' 個章節</span></div>' +
      '<div class="ch-grid">' + chapters + '</div></section>' +
      '<section class="block"><div class="block-head"><h2>🔗 追蹤我</h2><a href="#/about">關於我 →</a></div>' + socialLinks(true) + '</section>';
  }

  function pageChapter(id) {
    var idx = -1;
    S.chapters.forEach(function (c, i) { if (c.id === id) idx = i; });
    if (idx < 0) return pageNotFound();
    var c = S.chapters[idx], prev = S.chapters[idx - 1], next = S.chapters[idx + 1];
    var toc = c.sections.map(function (s, i) {
      return '<li><a href="#/c/' + c.id + '/' + (i + 1) + '">' + esc(s.title) + '</a></li>';
    }).join("");
    var body = c.sections.map(function (s, i) {
      return '<section class="sec" id="s-' + (i + 1) + '"><h2>' + esc(s.title) + '</h2>' + s.html + '</section>';
    }).join("");
    body = body.replace('<div data-embed="exchanges"></div>', exchangeCards());
    return '<div class="doc">' +
      '<aside class="toc"><a class="back" href="#/">← 回目錄</a><p class="toc-title">本章內容</p><ol>' + toc + '</ol></aside>' +
      '<article class="article">' +
      '<header class="art-head"><span class="ch-num">CH ' + c.id + '</span><h1>' + c.emoji + ' ' + esc(c.title) + '</h1><p class="lead">' + esc(c.intro) + '</p></header>' +
      body +
      '<aside class="callout">🎁 還沒有交易所帳號？用 <a href="#/exchanges">Yoaka 的邀請碼</a> 註冊享手續費折扣。</aside>' +
      '<nav class="pager">' +
      (prev ? '<a href="#/c/' + prev.id + '"><small>上一章</small>' + esc(prev.title) + '</a>' : '<span></span>') +
      (next ? '<a class="next" href="#/c/' + next.id + '"><small>下一章</small>' + esc(next.title) + '</a>' : '<span></span>') +
      '</nav></article></div>';
  }

  function pageExchanges() {
    return '<div class="page">' +
      '<header class="page-head"><h1>🎁 交易所邀請碼導航</h1>' +
      '<p class="lead">以下是我自己正在使用的平台。點「立即註冊」會開啟官方邀請頁，或複製邀請碼於註冊時填入，即可享有手續費折扣（依各平台當期活動為準）。</p></header>' +
      exchangeCards() +
      '<section class="card note"><h2>註冊前小提醒</h2><ul>' +
      '<li>請確認你所在的國家／地區可合法使用該平台。</li>' +
      '<li>註冊後立刻開啟 2FA、防釣魚碼與提幣白名單（詳見 <a href="#/c/07">安全與防詐指南</a>）。</li>' +
      '<li>邀請碼必須在<strong>註冊當下</strong>填寫，事後通常無法補填。</li>' +
      '<li>不要把所有資產放在同一家交易所。</li></ul></section>' +
      '<p class="disclosure">揭露：以上為推薦連結，你透過連結註冊時我可能獲得返佣，這不會增加你的任何成本。本站內容僅供教育分享，不構成任何投資建議。</p>' +
      '</div>';
  }

  function pageTools() {
    return '<div class="page"><header class="page-head"><h1>🧰 Web3 工具箱</h1><p class="lead">查行情、查鏈上、做研究、保安全，新手最常用的工具都在這。</p></header>' +
      S.tools.map(function (g) {
        return '<section class="block"><h2>' + esc(g.group) + '</h2><div class="tool-grid">' +
          g.items.map(function (it) {
            return '<a class="tool" href="' + esc(it[1]) + '" ' + ext + '><b>' + esc(it[0]) + '</b><small>' + esc(it[2]) + '</small><span class="host">' + esc(it[1].replace(/^https?:\/\//, "")) + '</span></a>';
          }).join("") + '</div></section>';
      }).join("") +
      '<p class="disclosure">使用前請再次確認網址正確，建議加入瀏覽器書籤，避免點到搜尋廣告中的釣魚網站。</p></div>';
  }

  function pageSlang() {
    return '<div class="page"><header class="page-head"><h1>💬 幣圈黑話翻譯機</h1><p class="lead">在推特、Discord、LINE 群裡看到看不懂的詞？這裡幫你翻成白話。</p>' +
      '<input class="filter" id="slang-filter" type="search" placeholder="篩選詞彙…" aria-label="篩選詞彙"></header>' +
      '<dl class="slang" id="slang-list">' + S.slang.map(function (s) {
        return '<div class="slang-item"><dt>' + esc(s[0]) + '</dt><dd>' + esc(s[1]) + '</dd></div>';
      }).join("") + '</dl></div>';
  }

  function pageAbout() {
    var p = S.profile;
    return '<div class="page">' + profileCard() +
      '<section class="card"><h2>👋 關於我</h2>' +
      '<p>嗨，我是 Yoaka！平常在推特分享撸毛項目與空投機會，在 Medium 寫教程與投研筆記，也做 3D、服裝與 NFT 設計創作。</p>' +
      '<p>經營 LINE 投資社群「30s 實現 FIRE」，希望用最白話的方式，陪更多人安全地踏進 Web3。</p>' +
      '<p>📮 ' + esc(p.collabNote) + '：<a href="mailto:' + esc(p.email) + '">' + esc(p.email) + '</a></p></section>' +
      '<section class="block"><h2>🔗 所有連結</h2>' + socialLinks(false) + '</section></div>';
  }

  function pageNotFound() {
    return '<div class="page"><h1>找不到這個頁面 🥲</h1><p><a class="btn" href="#/">回到首頁</a></p></div>';
  }

  /* ---------- Router ---------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, "");
    var parts = h.split("/");
    var html, navKey = parts[0] || "home", anchor = null;
    if (!parts[0]) html = pageHome();
    else if (parts[0] === "c") { html = pageChapter(parts[1]); anchor = parts[2]; navKey = parts[1] === "04" ? "exchanges" : "home"; }
    else if (parts[0] === "exchanges") html = pageExchanges();
    else if (parts[0] === "tools") html = pageTools();
    else if (parts[0] === "slang") html = pageSlang();
    else if (parts[0] === "about") html = pageAbout();
    else html = pageNotFound();
    main.innerHTML = html;
    document.querySelectorAll("#site-nav a").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav") === navKey);
    });
    nav.classList.remove("open"); navBtn.setAttribute("aria-expanded", "false");
    var t = anchor && document.getElementById("s-" + anchor);
    if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); else window.scrollTo(0, 0);
    var title = $("h1", main);
    document.title = (parts[0] ? (title ? title.textContent.trim() + "｜" : "") : "") + "GM Web3｜Yoaka 的幣圈新手教學";
    var f = $("#slang-filter");
    if (f) f.addEventListener("input", function () {
      var q = f.value.trim().toLowerCase();
      document.querySelectorAll(".slang-item").forEach(function (it) {
        it.hidden = q && it.textContent.toLowerCase().indexOf(q) < 0;
      });
    });
  }
  window.addEventListener("hashchange", route);

  /* ---------- Search ---------- */
  var index = [];
  S.chapters.forEach(function (c) {
    c.sections.forEach(function (s, i) {
      var d = document.createElement("div"); d.innerHTML = s.html;
      index.push({ href: "#/c/" + c.id + "/" + (i + 1), title: s.title, ch: c.emoji + " " + c.title, text: d.textContent });
    });
  });
  S.slang.forEach(function (s) { index.push({ href: "#/slang", title: s[0], ch: "💬 幣圈黑話", text: s[1] }); });
  S.exchanges.forEach(function (x) { index.push({ href: "#/exchanges", title: x.name + " 邀請碼 " + x.code, ch: "🎁 交易所", text: x.desc }); });

  var q = $("#q"), box = $("#search-results");
  function search() {
    var v = q.value.trim().toLowerCase();
    if (!v) { box.hidden = true; return; }
    var hits = index.filter(function (it) {
      return (it.title + " " + it.text).toLowerCase().indexOf(v) >= 0;
    }).slice(0, 8);
    box.innerHTML = hits.length ? hits.map(function (it) {
      return '<a href="' + it.href + '"><small>' + esc(it.ch) + '</small>' + esc(it.title) + '</a>';
    }).join("") : '<p class="empty">找不到「' + esc(q.value) + '」相關內容</p>';
    box.hidden = false;
  }
  q.addEventListener("input", search);
  q.addEventListener("focus", search);
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search")) box.hidden = true;
    else if (e.target.closest(".search-results a")) { box.hidden = true; q.value = ""; }
  });
  q.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { box.hidden = true; q.blur(); }
    if (e.key === "Enter") { var a = $("a", box); if (a) { location.hash = a.getAttribute("href"); box.hidden = true; q.value = ""; } }
  });

  /* ---------- Footer ---------- */
  $("#footer").innerHTML = '<div class="footer-in">' +
    '<div><b>GM Web3</b> by <a href="#/about">Yoaka</a><br><small>合作邀約：<a href="mailto:' + esc(S.profile.email) + '">' + esc(S.profile.email) + '</a></small></div>' +
    '<div class="f-links">' + S.socials.slice(0, 5).map(function (s) {
      return '<a href="' + esc(s.url) + '" ' + ext + '>' + esc(s.name) + '</a>';
    }).join("") + '</div>' +
    '<p class="disclaimer">本站內容僅供教育與資訊分享，不構成任何投資建議。加密貨幣價格波動劇烈，請自行研究（DYOR）並僅投入可承受損失的資金。站內交易所連結為推薦連結。</p>' +
    '<p class="copy">© ' + new Date().getFullYear() + ' Yoakaの人生實驗室</p></div>';

  route();
})();
