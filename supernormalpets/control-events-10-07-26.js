(function() {
  "use strict";
  const d = "https://next-client-api.vercel.app/api/events", l = (t, e) => {
    let o = t.getItem(e);
    return o || (o = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`, t.setItem(e, o)), o;
  }, f = () => {
    const t = document.cookie.match(/_ga=(?:GA\d\.\d\.)?(\d+\.\d+)/);
    return t ? t[1] : "";
  }, m = () => {
    const t = new URLSearchParams(window.location.search).get("utm_source");
    if (t)
      return localStorage.setItem("tt_traffic_source", t), t;
    const e = localStorage.getItem("tt_traffic_source");
    if (e) return e;
    if (!document.referrer) return "direct";
    try {
      const o = new URL(document.referrer).hostname;
      return o === window.location.hostname ? "direct" : (localStorage.setItem("tt_traffic_source", o), o);
    } catch {
      return "direct";
    }
  }, g = () => {
    const t = navigator.userAgent;
    let e = "Unknown";
    /windows/i.test(t) ? e = "Windows" : /iphone|ipad|ipod/i.test(t) ? e = "iOS" : /mac os/i.test(t) ? e = "macOS" : /android/i.test(t) ? e = "Android" : /linux/i.test(t) && (e = "Linux");
    let o = "Unknown";
    /edg\//i.test(t) ? o = "Edge" : /opr\/|opera/i.test(t) ? o = "Opera" : /crios\//i.test(t) || /chrome\//i.test(t) ? o = "Chrome" : /fxios\/|firefox\//i.test(t) ? o = "Firefox" : /safari\//i.test(t) && (o = "Safari");
    let n = "desktop";
    return /ipad|tablet/i.test(t) ? n = "tablet" : /mobi|iphone|android/i.test(t) && (n = "mobile"), { device_type: n, os: e, browser: o };
  }, c = (t, e, o = {}) => {
    const { device_type: n, os: r, browser: i } = g(), a = {
      event_name: t,
      event_time: (/* @__PURE__ */ new Date()).toISOString(),
      source: e,
      session_id: l(sessionStorage, "tt_session_id"),
      user_id: l(localStorage, "tt_user_id"),
      client_id: f(),
      traffic_source: m(),
      device_type: n,
      os: r,
      browser: i,
      properties: o
    };
    fetch(d, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(a),
      keepalive: !0
    }).catch(() => {
    }), u(`BQ Event: ${t} | ${e} | ${JSON.stringify(o)}`, "success");
  }, _ = (t) => new Promise((e) => {
    const o = document.querySelector(t);
    o && e(o);
    const n = new MutationObserver(() => {
      const r = document.querySelector(t);
      r && (e(r), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), u = (t, e = "info") => {
    let o;
    switch (e) {
      case "info":
        o = "color: #3498db;";
        break;
      case "warn":
        o = "color: #f39c12;";
        break;
      case "error":
        o = "color: #e74c3c;";
        break;
      case "success":
        o = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${t}`, `${o} font-size: 16px; font-weight: 600`);
  }, s = "supernormalpets_control";
  function p(t) {
    var n;
    const e = t.querySelector("select");
    if (e) return e.value;
    const o = t.querySelector("input");
    return o ? o.value : ((n = t.textContent) == null ? void 0 : n.trim()) ?? "";
  }
  class w {
    constructor() {
      this.init();
    }
    async init() {
      u("Control Events Init"), c("control_landing_view", s, {}), await _(".pawtag-variant-picker"), this.initColourTracking(), this.initQuantityTracking(), this.initCtaTracking();
    }
    initColourTracking() {
      document.querySelectorAll(".pawtag-variant-btn").forEach((e) => {
        e.addEventListener("click", () => {
          c("control_colour_select", s, {
            colour: (e.dataset.optionValue ?? "").toLowerCase()
          });
        });
      });
    }
    initQuantityTracking() {
      const e = document.querySelector(".quantity_select");
      e == null || e.addEventListener("change", () => {
        c("control_qty_change", s, { qty: p(e) });
      });
    }
    initCtaTracking() {
      var e, o;
      (e = document.getElementById("orderNowButton")) == null || e.addEventListener("click", () => {
        c("control_cta_click", s, { location: "main" });
      }), (o = document.querySelector(".sticky-order-button-wrapper")) == null || o.addEventListener("click", (n) => {
        var i;
        (i = n.target) != null && i.closest("button") && c("control_cta_click", s, { location: "sticky" });
      }), document.addEventListener("click", (n) => {
        var i, a;
        const r = (i = n.target) == null ? void 0 : i.closest(
          '[class*="ai-green-button-container"] a.button'
        );
        r && c("control_cta_link_click", s, {
          location: "ai_block",
          label: ((a = r.textContent) == null ? void 0 : a.trim()) ?? ""
        });
      });
    }
  }
  new w();
})();
//# sourceMappingURL=index.js.map
