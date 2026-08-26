(function() {
  "use strict";
  const f = `.base-popup.exitLayer {
  display: none;
}

.ab360-la-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(16, 24, 40, 0.6);
  align-items: center;
  justify-content: center;
  z-index: 999999;
  display: none;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}
.ab360-la-overlay.active {
  display: flex;
}

.ab360-la {
  --ink: #101828;
  --ink-2: #47536b;
  --blue: #1a65e8;
  --blue-2: #2563eb;
  --badge-bg: #eff4fe;
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  color: var(--ink);
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
}
@media (max-width: 900px) {
  .ab360-la {
    flex-direction: column;
    max-height: 90vh;
    overflow-y: auto;
  }
}

.ab360-la__close {
  position: absolute;
  right: 22px;
  top: 22px;
  z-index: 5;
  opacity: 0.85;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px;
  line-height: 0;
}
.ab360-la__close:hover {
  opacity: 1;
}

.ab360-la__media {
  width: 43%;
  flex: none;
  position: relative;
}
@media (max-width: 900px) {
  .ab360-la__media {
    width: 100%;
    height: 220px;
  }
}
@media (max-width: 560px) {
  .ab360-la__media {
    height: 160px;
  }
}

.ab360-la__img {
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.ab360-la__content {
  flex: 1;
  box-sizing: border-box;
  padding: 48px 56px 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (max-width: 900px) {
  .ab360-la__content {
    padding: 32px 32px 28px;
  }
}
@media (max-width: 560px) {
  .ab360-la__content {
    padding: 24px 20px 20px;
  }
}

.ab360-la__badges {
  display: flex;
  gap: 10px;
  margin-bottom: 22px;
  flex-wrap: wrap;
}

.ab360-la__badge {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 13px;
  border-radius: 9px;
  background: var(--badge-bg);
  color: var(--blue-2);
  font-size: 16px;
  font-weight: 600;
}
.ab360-la__badge svg {
  flex: none;
}

.ab360-la__headline {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -0.6px;
  line-height: 1.15;
  margin: 0;
}
@media (max-width: 560px) {
  .ab360-la__headline {
    font-size: 26px;
  }
}

.ab360-la__headline-accent {
  color: var(--blue-2);
}

.ab360-la__subtitle {
  font-size: 17px;
  line-height: 1.5;
  color: var(--ink-2);
  margin: 20px 0 0;
}

.ab360-la__trust {
  margin-top: 20px;
  min-height: 26px;
  max-width: 420px;
}

.ab360-la__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
  width: 100%;
  height: 58px;
  border-radius: 10px;
  background: var(--blue);
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.2px;
  box-shadow: 0 10px 24px rgba(26, 101, 232, 0.28);
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
}
.ab360-la__cta:hover {
  background: var(--blue-2);
}
@media (max-width: 560px) {
  .ab360-la__cta {
    height: 52px;
    font-size: 15px;
    margin-top: 20px;
  }
}

.ab360-la__meta {
  margin-top: 14px;
  font-size: 13px;
  color: var(--ink-2);
  text-align: center;
}/*# sourceMappingURL=style.css.map */`, h = (o, t, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: t,
      event_type: e,
      event_loc: n
    }), r(`Event: ${o} | ${t} | ${e} | ${n}`, "success");
  }, m = (o) => new Promise((t) => {
    const e = document.querySelector(o);
    e && t(e);
    const n = new MutationObserver(() => {
      const a = document.querySelector(o);
      a && (t(a), n.disconnect());
    });
    n.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), g = ({ name: o, dev: t }) => {
    const e = o.toLowerCase().replace(/\s/g, "_");
    h(`${e}_started`, `Experiment ${o} started`, "other", e), console.log(
      `%c EXP: ${o} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class d {
    constructor(t) {
      this.elements = t instanceof d ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, e, n) {
      return typeof e == "function" && (n = e, e = ""), this.elements.forEach((a) => {
        a.addEventListener(t, function(s) {
          var l;
          if (e !== "") {
            let i = (l = s.target) == null ? void 0 : l.closest(e);
            i && (n == null || n.call(i, s));
          } else
            n == null || n.call(a, s);
        });
      }), this;
    }
    addClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.add(t);
      }), this;
    }
    removeClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.remove(t);
      }), this;
    }
    toggleClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.toggle(t);
      }), this;
    }
    each(t) {
      for (let e of this.elements)
        t(new d(e), this.elements.indexOf(e));
      return this;
    }
    style(t, e) {
      const n = t.split("-").map((a, s) => s === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1)).join("");
      return this.elements.forEach(function(a) {
        a.style[n] = e;
      }), this;
    }
    find(t) {
      const e = this.elements.map((n) => Array.from(n.querySelectorAll(t)));
      return new d(e.flat());
    }
    attr(t, e) {
      return e ? (this.elements.forEach(function(n) {
        n.setAttribute(t, e);
      }), this) : this.elements[0].getAttribute(t);
    }
    text(t) {
      return t ? (this.elements.forEach(function(e) {
        e.textContent = t;
      }), this) : this.elements[0].textContent || "";
    }
    html(t) {
      return t ? (this.elements.forEach(function(e) {
        e.innerHTML = t;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const p = (o) => new d(o), w = async (o) => {
    const t = (e) => new Promise((n, a) => {
      const s = e.split(".").pop();
      if (s === "js") {
        if (Array.from(document.scripts).map((c) => c.src.toLowerCase()).includes(e.toLowerCase()))
          return r(`Script ${e} allready downloaded!`, "success"), n("");
        const i = document.createElement("script");
        i.src = e, i.onload = n, i.onerror = a, document.head.appendChild(i);
      } else if (s === "css") {
        if (Array.from(document.styleSheets).map((c) => {
          var b;
          return (b = c.href) == null ? void 0 : b.toLowerCase();
        }).includes(e.toLowerCase()))
          return r(`Style ${e} allready downloaded!`, "success"), n("");
        const i = document.createElement("link");
        i.rel = "stylesheet", i.href = e, i.onload = n, i.onerror = a, document.head.appendChild(i);
      }
    });
    for (const e of o)
      r(e), await t(e), r(`Loaded librari ${e}`);
    r("All libraries loaded!", "success");
  }, x = (o, t) => {
    const e = o === window ? window : document.querySelector(o);
    let n, a, s, l, i;
    function c() {
      n = null, l = 0;
    }
    c(), e.addEventListener("scroll", function() {
      a = o === window ? this.scrollY : this.scrollTop, i = a > n ? "down" : "up", n != null && (l = a - n), n = a, clearTimeout(s), s = setTimeout(c, 50), t(Math.abs(l), i);
    });
  }, r = (o, t = "info") => {
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
    console.log(`%c>>> ${o}`, `${e} font-size: 16px; font-weight: 600`);
  }, v = "https://conversionrate-store.github.io/a-b_images/adblock/popup_img.webp", u = {
    close: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#101828" stroke-width="2.4" stroke-linecap="round">
<path d="M5 5l14 14M19 5 5 19"/>
</svg>`,
    ev: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
		<path d="M11 21.175L10.6333 21.0833C1.00834 17.1417 1.83334 4.675 1.83334 4.49167L1.92501 3.66667H2.75001C6.96667 3.66667 10.45 1.1 10.45 1.1L11 0.733337L11.55 1.1C11.55 1.1 15.0333 3.66667 19.25 3.66667H20.075L20.1667 4.49167C20.1667 4.58334 20.9917 17.1417 11.3667 20.9917L11 21.175ZM3.66668 5.5C3.66668 8.06667 4.21667 16.225 11 19.25C17.7833 16.3167 18.3333 8.15834 18.3333 5.5C14.9417 5.225 12.1 3.66667 11 2.93334C9.90001 3.66667 7.05834 5.225 3.66668 5.5Z" fill="#005DD8"/>
		<path d="M10.9998 17.4163C4.94983 14.8497 5.49983 6.50801 5.49983 6.50801C8.52483 6.50801 10.9998 4.58301 10.9998 4.58301C10.9998 4.58301 13.4748 6.50801 16.4998 6.50801C16.4998 6.50801 17.0498 14.8497 10.9998 17.4163Z" fill="#005DD8"/>
		</svg>`,
    app: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
		<g clip-path="url(#clip0_1649_129)">
		<path d="M14.5192 15.4181L15.5252 13.7857L17.3407 13.1665L17.5419 11.2597L18.9078 9.91495L18.2584 8.11001L18.9078 6.30502L17.5419 4.96031L17.3408 3.05353L15.5253 2.43435L14.5192 0.80184L12.6164 1.03159L10.9999 0L9.38348 1.03168L7.48065 0.801926L6.47463 2.43439L4.65911 3.05357L4.45797 4.96036L3.09204 6.30506L3.74147 8.11005L3.09204 9.91504L4.45793 11.2597L4.65907 13.1665L6.47458 13.7857L7.48061 15.4182L9.38348 15.1885L10.9999 16.2201L12.6164 15.1885L14.5192 15.4181ZM5.43852 8.11005C5.43852 5.0435 7.93337 2.54865 10.9999 2.54865C14.0665 2.54865 16.5613 5.0435 16.5613 8.11005C16.5613 11.1766 14.0665 13.6715 10.9999 13.6715C7.93337 13.6715 5.43852 11.1766 5.43852 8.11005Z" fill="#005DD8"/>
		<path d="M11 3.83887C8.64471 3.83887 6.72852 5.75506 6.72852 8.11039C6.72852 10.4657 8.64471 12.3819 11 12.3819C13.3554 12.3819 15.2716 10.4657 15.2716 8.11039C15.2716 5.75506 13.3554 3.83887 11 3.83887Z" fill="#005DD8"/>
		<path d="M9.07927 16.5249L6.81568 16.7981L5.61973 14.8574L5.21316 14.7188L3.45947 20.2001L6.6166 20.0265L9.08666 22.0004L10.5402 17.4573L9.07927 16.5249Z" fill="#005DD8"/>
		<path d="M16.3804 14.8574L15.1844 16.7981L12.9209 16.5249L11.46 17.4573L12.9135 22.0004L15.3836 20.0265L18.5407 20.2001L16.787 14.7188L16.3804 14.8574Z" fill="#005DD8"/>
		</g>
		<defs>
		<clipPath id="clip0_1649_129">
		<rect width="22" height="22" fill="white"/>
		</clipPath>
		</defs>
		</svg>`,
    cta: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1211 24V18.5547C6.88163 15.9103 4.79803 12.7336 4.48569 8.64889L0 6.14004V7.65711C0.0390418 14.0075 3.223 18.8846 8.31179 22.6623L10.1159 24H10.1211ZM5.42989 7.19661L11.0036 4.72464L16.5835 7.19661L21.2983 4.55719L11.0036 0L0.715081 4.55719L5.42989 7.19661ZM17.5267 8.64889C17.2133 12.7396 15.1297 15.9153 11.8903 18.5547V24L13.6944 22.6623C18.7832 18.8846 21.9723 14.0025 22 7.65711V6.14004L17.5267 8.64889Z" fill="white"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M11.003 17.0273C13.6558 14.7945 15.4209 12.1551 15.7394 8.71431L11.003 6.61713L6.2666 8.71431C6.59024 12.1501 8.35534 14.7945 11.003 17.0273Z" fill="white"/>
		</svg>`
  }, _ = (
    /* HTML */
    `
  <div class="ab360-la-overlay">
    <div class="ab360-la">
      <button type="button" class="ab360-la__close" aria-label="Close">${u.close}</button>

      <div class="ab360-la__media">
        <img class="ab360-la__img" src="${v}" alt="Ads everywhere, ads gone with AdBlock360" />
      </div>

      <div class="ab360-la__content">
        <div class="ab360-la__badges">
          <div class="ab360-la__badge">${u.ev} EV code signed</div>
          <div class="ab360-la__badge">${u.app} AppEsteem</div>
        </div>

        <h2 class="ab360-la__headline">
          <span class="ab360-la__headline-accent">The last ad</span> you'll ever see
        </h2>

        <p class="ab360-la__subtitle">Install once. Every ad on your device disappears — and stays gone.</p>

        <div class="ab360-la__trust">
  <!-- TrustBox widget - Micro Combo -->
  <div
    class="trustpilot-widget"
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

        <button type="button" id="ab360-la-cta" class="ab360-la__cta">
          ${u.cta} Activate Ad Blocking – Free
        </button>

        <div class="ab360-la__meta">756 KB &nbsp;•&nbsp; 1-min setup</div>
      </div>
    </div>
  </div>
`
  );
  w(["//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"]), g({ name: "Adblock New Popup V2", dev: "YK" });
  class L {
    constructor() {
      this.shown = !1, this.device = window.innerWidth <= 768 ? "mobile" : "desktop", this.init();
    }
    async init() {
      await m("body"), p("head").elements[0].insertAdjacentHTML("beforeend", `<style>${f}</style>`), p("body").elements[0].insertAdjacentHTML("beforeend", _), this.renderTrustpilot(), this.bindTriggers(), this.bindClose(), this.bindCta();
    }
    overlay() {
      return p(".ab360-la-overlay").elements[0];
    }
    showPopup(t) {
      if (this.shown) return;
      const e = this.overlay();
      !e || e.classList.contains("active") || (e.classList.add("active"), document.body.style.overflow = "hidden", this.shown = !0, h("ab360_last_ad_popup_view", "AdBlock360 last ad popup shown", "view", t));
    }
    closePopup(t) {
      const e = this.overlay();
      !e || !e.classList.contains("active") || (e.classList.remove("active"), document.body.style.overflow = "", h("ab360_last_ad_popup_close", "AdBlock360 last ad popup closed", "click", t));
    }
    bindTriggers() {
      this.device === "desktop" ? document.addEventListener("mouseout", (t) => {
        !t.relatedTarget && t.clientY <= 0 && this.showPopup("mouseleave");
      }) : x(window, (t, e) => {
        e === "up" && t > 120 && this.showPopup("scroll_up");
      });
    }
    bindClose() {
      var t;
      p(".ab360-la__close").on("click", () => this.closePopup("close_btn")), (t = this.overlay()) == null || t.addEventListener("click", (e) => {
        e.target.matches(".ab360-la-overlay") && this.closePopup("backdrop");
      }), document.addEventListener("keydown", (e) => {
        e.key === "Escape" && this.closePopup("escape_key");
      });
    }
    bindCta() {
      p("#ab360-la-cta").on("click", () => {
        h("ab360_last_ad_popup_cta_click", "Activate Ad Blocking – Free", "click", "last_ad_popup");
        const t = document.querySelector("#main-cta");
        t && t.click(), this.closePopup("cta_click");
      });
    }
    renderTrustpilot() {
      const t = () => {
        const e = window.Trustpilot, n = document.querySelector(".ab360-la__trust .trustpilot-widget");
        e && n ? e.loadFromElement(n, !0) : setTimeout(t, 200);
      };
      t();
    }
  }
  new L();
})();
//# sourceMappingURL=index.js.map
