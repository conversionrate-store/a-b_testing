(function() {
  "use strict";
  const r = (n, t, e, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: t,
      event_type: e,
      event_loc: o
    }), l(`Event: ${n} | ${t} | ${e} | ${o}`, "success");
  }, s = (n) => new Promise((t) => {
    const e = document.querySelector(n);
    e && t(e);
    const o = new MutationObserver(() => {
      const c = document.querySelector(n);
      c && (t(c), o.disconnect());
    });
    o.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), i = ({ name: n, dev: t }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, a = (n) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", n, "variant_1"));
    }, 1e3);
  }, l = (n, t = "info") => {
    let e;
    switch (t) {
      case "info":
        e = "color: #3498db;";
        break;
      case "warn":
        e = "color: #f39c12;";
        break;
      case "error":
        e = "color: #e74c3c;";
        break;
      case "success":
        e = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${n}`, `${e} font-size: 16px; font-weight: 600`);
  }, d = `:is(a, button).crs-try-on-button {
  font-size: 14px;
  width: 90px;
  height: 40px;
  border-radius: 20px;
  background: rgb(183, 150, 37);
  padding: 9px 12px 9px 9px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  border: none;
  font-family: Arial, serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
}

:is(a, button).crs-try-on-button::before {
  display: none !important;
}`;
  class u {
    constructor() {
      this.init();
    }
    init() {
      this.checkIsBlogPage() && (this.addStyles(), this.getAllTryOnButtons(), this.changeTryOnButtonText(), this.events());
    }
    changeTryOnButtonText() {
      this.getAllTryOnButtons().then((t) => {
        t.forEach((e) => {
          const o = (
            /* HTML */
            `<a
          href="https://app.therighthairstyles.com/virtual-styler-test/step-1"
          class="crs-try-on-button"
        >
          <img
            src="https://assets.therighthairstyles.com/image/frontend/magic-wand-icon2.png"
            alt=""
            style="width: 20px; height: 20px;"
          />
          <span>Try On</span>
        </a>`
          );
          e.style.display = "none", e.insertAdjacentHTML("afterend", o);
        });
      });
    }
    async getAllTryOnButtons() {
      return await s("#try-on-button"), document.querySelectorAll("#try-on-button");
    }
    events() {
      s(".crs-try-on-button").then(() => {
        document.querySelectorAll(".crs-try-on-button").forEach((e) => {
          e.addEventListener("click", (o) => {
            r("exp_q_click_1", "Try on", "click", "Banner on Blog");
          });
        });
      });
    }
    checkIsBlogPage() {
      return document.querySelector(
        "body.post-template-default.single.single-post"
      ) !== null;
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = d, document.head.appendChild(t);
    }
  }
  const y = "";
  i({ name: "Quick Exp (ver. C)", dev: "OS" }), a("exp_quick_c");
  class h {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.device === "mobile" && this.init();
    }
    init() {
      this.addStyles(), new u();
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = y, document.head.appendChild(t);
    }
  }
  new h();
})();
//# sourceMappingURL=index.js.map
