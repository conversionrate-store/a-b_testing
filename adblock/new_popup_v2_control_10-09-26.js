(function() {
  "use strict";
  const i = (s, e, t, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: e,
      event_type: t,
      event_loc: o
    }), a(`Event: ${s} | ${e} | ${t} | ${o}`, "success");
  }, c = (s) => new Promise((e) => {
    const t = document.querySelector(s);
    t && e(t);
    const o = new MutationObserver(() => {
      const n = document.querySelector(s);
      n && (e(n), o.disconnect());
    });
    o.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), r = ({ name: s, dev: e }) => {
    const t = s.toLowerCase().replace(/\s/g, "_");
    i(`${t}_started`, `Experiment ${s} started`, "other", t), console.log(
      `%c EXP: ${s} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, a = (s, e = "info") => {
    let t;
    switch (e) {
      case "info":
        t = "color: #3498db;";
        break;
      case "warn":
        t = "color: #f39c12;";
        break;
      case "error":
        t = "color: #e74c3c;";
        break;
      case "success":
        t = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${s}`, `${t} font-size: 16px; font-weight: 600`);
  };
  r({ name: "Adblock New Popup V2 - Control", dev: "YK" });
  class l {
    constructor() {
      this.shown = !1, this.lastCloseTrigger = "auto", this.init();
    }
    async init() {
      const e = await c("exit-layer.base-popup");
      this.bindVisibilityWatcher(e), this.bindClose(e), this.bindCta(e);
    }
    isVisible(e) {
      return !e.classList.contains("hidden");
    }
    bindVisibilityWatcher(e) {
      new MutationObserver(() => {
        this.isVisible(e) ? this.onShow() : this.shown && this.onClose();
      }).observe(e, { attributes: !0, attributeFilter: ["class"] }), this.isVisible(e) && this.onShow();
    }
    onShow() {
      this.shown || (this.shown = !0, i("ab360_last_ad_popup_view_control", "AdBlock360 last ad popup shown (control)", "view", "exit_intent"));
    }
    onClose() {
      this.shown = !1, i(
        "ab360_last_ad_popup_close_control",
        "AdBlock360 last ad popup closed (control)",
        "click",
        this.lastCloseTrigger
      ), this.lastCloseTrigger = "auto";
    }
    bindClose(e) {
      var t;
      (t = e.querySelector(".popup__close")) == null || t.addEventListener("click", () => {
        this.lastCloseTrigger = "close_btn";
      }), e.addEventListener("click", (o) => {
        o.target === e && (this.lastCloseTrigger = "backdrop");
      }), document.addEventListener("keydown", (o) => {
        o.key === "Escape" && this.isVisible(e) && (this.lastCloseTrigger = "escape_key");
      });
    }
    bindCta(e) {
      var t;
      (t = e.querySelector("#main-cta")) == null || t.addEventListener("click", () => {
        this.lastCloseTrigger = "cta_click", i(
          "ab360_last_ad_popup_cta_click_control",
          "Activate Ad Blocking – Free (control)",
          "click",
          "last_ad_popup"
        );
      });
    }
  }
  new l();
})();
//# sourceMappingURL=index.js.map
