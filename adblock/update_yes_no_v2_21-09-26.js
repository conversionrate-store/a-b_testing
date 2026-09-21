(function() {
  "use strict";
  const u = `main {
  display: none !important;
}

.yn {
  display: flex;
  align-items: center;
  gap: 61px;
  padding: 40px 0;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;
}
.yn * {
  box-sizing: border-box;
}
@media (max-width: 900px) {
  .yn {
    flex-direction: column;
    padding: 24px 16px;
    gap: 32px;
  }
}
.yn__left {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 600px;
}
.yn__header {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.yn__logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.yn__logo svg {
  display: block;
}
.yn__pill {
  display: inline-flex;
  align-items: center;
  height: 38px;
  padding: 8px 16px;
  background: rgba(27, 134, 250, 0.3);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #005dd8;
  white-space: nowrap;
}
.yn__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.yn__title {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.24;
  letter-spacing: -0.3px;
  color: #0b1936;
  margin: 0;
}
@media (max-width: 900px) {
  .yn__title {
    font-size: 30px;
  }
}
.yn__desc {
  font-size: 18px;
  line-height: 1.55;
  font-weight: 500;
  color: #2e353f;
  margin: 0;
}
.yn__actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.yn__btns {
  display: flex;
  align-items: stretch;
  gap: 24px;
  width: 100%;
}
@media (max-width: 900px) {
  .yn__btns {
    flex-direction: column;
  }
}
.yn__btn-yes {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0;
  background: #005dd8;
  border: 1px solid #005dd8;
  color: #fff;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  cursor: pointer;
}
.yn__btn-yes:hover {
  background: #0048a8;
}
.yn__btn-no {
  width: 260px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0;
  background: transparent;
  border: 1px solid #005dd8;
  color: #005dd8;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  cursor: pointer;
}
.yn__btn-no:hover {
  background: #eef4ff;
}
@media (max-width: 900px) {
  .yn__btn-no {
    width: 100%;
  }
}
.yn__download-note {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #2e353f;
  font-size: 12px;
  font-weight: 500;
  margin-left: 22px;
}
.yn__download-note svg {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}
.yn__trust {
  width: 420px;
}
.yn__trust .trustpilot-widget {
  min-height: 26px;
}
.yn__right {
  flex: 0 0 540px;
  max-width: 540px;
  width: 100%;
}
@media (max-width: 900px) {
  .yn__right {
    flex: none;
  }
}

.yn-panel {
  position: relative;
  height: 404px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: radial-gradient(120% 140% at 85% 100%, #5d52cc 0%, #3b3c8c 25%, #2a316b 37%, #19264b 50%, #0b1936 100%);
}
@media (max-width: 900px) {
  .yn-panel {
    height: 320px;
  }
}
.yn-panel img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/*# sourceMappingURL=style.css.map */
`, l = (o, t, n, e = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: t,
      event_type: n,
      event_loc: e
    }), a(`Event: ${o} | ${t} | ${n} | ${e}`, "success");
  }, y = (o) => new Promise((t) => {
    const n = document.querySelector(o);
    n && t(n);
    const e = new MutationObserver(() => {
      const s = document.querySelector(o);
      s && (t(s), e.disconnect());
    });
    e.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), m = ({ name: o, dev: t }) => {
    const n = o.toLowerCase().replace(/\s/g, "_");
    l(`${n}_started`, `Experiment ${o} started`, "other", n), console.log(
      `%c EXP: ${o} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class c {
    constructor(t) {
      this.elements = t instanceof c ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, n, e) {
      return typeof n == "function" && (e = n, n = ""), this.elements.forEach((s) => {
        s.addEventListener(t, function(r) {
          var p;
          if (n !== "") {
            let i = (p = r.target) == null ? void 0 : p.closest(n);
            i && (e == null || e.call(i, r));
          } else
            e == null || e.call(s, r);
        });
      }), this;
    }
    addClass(t) {
      return this.elements.forEach(function(n) {
        n.classList.add(t);
      }), this;
    }
    removeClass(t) {
      return this.elements.forEach(function(n) {
        n.classList.remove(t);
      }), this;
    }
    toggleClass(t) {
      return this.elements.forEach(function(n) {
        n.classList.toggle(t);
      }), this;
    }
    each(t) {
      for (let n of this.elements)
        t(new c(n), this.elements.indexOf(n));
      return this;
    }
    style(t, n) {
      const e = t.split("-").map((s, r) => r === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[e] = n;
      }), this;
    }
    find(t) {
      const n = this.elements.map((e) => Array.from(e.querySelectorAll(t)));
      return new c(n.flat());
    }
    attr(t, n) {
      return n ? (this.elements.forEach(function(e) {
        e.setAttribute(t, n);
      }), this) : this.elements[0].getAttribute(t);
    }
    text(t) {
      return t ? (this.elements.forEach(function(n) {
        n.textContent = t;
      }), this) : this.elements[0].textContent || "";
    }
    html(t) {
      return t ? (this.elements.forEach(function(n) {
        n.innerHTML = t;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const d = (o) => new c(o), b = async (o) => {
    const t = (n) => new Promise((e, s) => {
      const r = n.split(".").pop();
      if (r === "js") {
        if (Array.from(document.scripts).map((f) => f.src.toLowerCase()).includes(n.toLowerCase()))
          return a(`Script ${n} allready downloaded!`, "success"), e("");
        const i = document.createElement("script");
        i.src = n, i.onload = e, i.onerror = s, document.head.appendChild(i);
      } else if (r === "css") {
        if (Array.from(document.styleSheets).map((f) => {
          var h;
          return (h = f.href) == null ? void 0 : h.toLowerCase();
        }).includes(n.toLowerCase()))
          return a(`Style ${n} allready downloaded!`, "success"), e("");
        const i = document.createElement("link");
        i.rel = "stylesheet", i.href = n, i.onload = e, i.onerror = s, document.head.appendChild(i);
      }
    });
    for (const n of o)
      a(n), await t(n), a(`Loaded librari ${n}`);
    a("All libraries loaded!", "success");
  }, a = (o, t = "info") => {
    let n;
    switch (t) {
      case "info":
        n = "color: #3498db;";
        break;
      case "warn":
        n = "color: #f39c12;";
        break;
      case "error":
        n = "color: #e74c3c;";
        break;
      case "success":
        n = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${o}`, `${n} font-size: 16px; font-weight: 600`);
  }, x = (
    /* html */
    `
<div class="yn">
  <div class="yn__left">
	<div class="yn__trust">
  <!-- TrustBox widget - Micro Combo -->
  <div
    class="trustpilot-widget-1"
    data-locale="en"
    data-template-id="5419b6ffb0d04a076446a9af"
    data-businessunit-id="695876155fb698cf3a93bf94"
    data-style-height="26px"
    data-style-width="100%"
    data-token="0a8f5b61-a60c-429d-9f03-1e64fb80da6a"
    data-stars="1,2,3,4,5"
  >
    <a href="https://www.trustpilot.com/review/adblock360.com" target="_blank" rel="noopener">Trustpilot</a>
  </div>
  <!-- End TrustBox widget -->
</div>
    <div class="yn__header">
      <div class="yn__pill">From the team behind Adblock for Youtube™</div>
    </div>

    <div class="yn__content">
      <h1 class="yn__title">Want ads gone everywhere — not just YouTube?</h1>
      <p class="yn__desc">Every app, every browser, every website — plus AI YouTube sponsor skip.</p>
    </div>

    <div class="yn__actions">
      <div class="yn__btns">
        <button type="button" class="yn__btn-yes">YES - It's Free</button>
        <button type="button" class="yn__btn-no">No, thanks</button>
      </div>
    </div>
  </div>

  <div class="yn__right">
    <div class="yn-panel">
      <img src="https://conversionrate-store.github.io/a-b_images/adblock/hero.webp" alt="AdBlock Logo" class="yn-panel__card-logo"/>
    </div>
  </div>
</div>
`
  ), _ = "https://adblock360.com/install-aby-v2";
  b(["//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"]), m({ name: "Yes/No", dev: "YK" });
  class g {
    constructor() {
      window.location.pathname === "/update-cro-v2" && this.init();
    }
    async init() {
      await y("body"), document.head.insertAdjacentHTML("beforeend", `<style class="crs-yes-no-style">${u}</style>`), await y("main"), d("main").elements[0].insertAdjacentHTML("beforebegin", x), l("yes_no_view", "Yes/No page is viewed", "view", "yes_no_block"), this.renderTrustpilot(), d(".yn__btn-yes").on("click", () => {
        l("yes_no_click_yes", "Yes, take me to install page", "click", "yes_no_block"), window.location.href = _;
      }), d(".yn__btn-no").on("click", () => {
        d(".yn").elements[0].remove(), l("yes_no_click_no", "No, thanks", "click", "yes_no_block");
      });
    }
    renderTrustpilot() {
      const t = () => {
        const n = window.Trustpilot, e = document.querySelector(".trustpilot-widget-1");
        n && e ? n.loadFromElement(e, !0) : setTimeout(t, 100);
      };
      t();
    }
  }
  new g();
})();
//# sourceMappingURL=index.js.map
