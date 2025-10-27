(function() {
  "use strict";
  const m = (i, e, t, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: e,
      event_type: t,
      event_loc: n
    }), d(`Event: ${i} | ${e} | ${t} | ${n}`, "success");
  }, f = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, d = (i, e = "info") => {
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
    console.log(`%c>>> ${i}`, `${t} font-size: 16px; font-weight: 600`);
  }, g = (i, e, t, n, s = 1e3, c = 0.5) => {
    let l, b;
    if (l = new IntersectionObserver(
      function(o) {
        o[0].isIntersecting === !0 ? b = setTimeout(() => {
          m(
            e,
            o[0].target.dataset.visible || n || "",
            "view",
            t
          ), l.disconnect();
        }, s) : (d("Element is not fully visible", "warn"), clearTimeout(b));
      },
      { threshold: [c] }
    ), typeof i == "string") {
      const o = document.querySelector(i);
      o && l.observe(o);
    } else
      l.observe(i);
    return l;
  }, h = (i) => new Promise((e) => {
    const t = document.querySelector(i);
    t && e({ element: t, observer: null });
    const n = new MutationObserver(() => {
      const s = document.querySelector(i);
      s && (e({ element: s, observer: n }), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), y = `.crs-wrap {
  display: flex;
  justify-content: space-between;
}
#sizebay-wrapper {
  margin-top: 0;
  display: none;
}
.sizeguide-only.crs-wrap {
  justify-content: flex-end;
}

.sizeguide-only .crs-chart-button {
  display: none;
}

.crs-hide {
  display: none !important;
}

.crs-size-guide-button,
.crs-chart-button {
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  width: max-content;
  min-height: 34px;
  padding: 0;
  border: none;
  background: #fff;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  outline: none;
  font-style: normal;
  text-transform: capitalize;
  text-decoration: underline;
  
}


.crs-size-guide-button::before {
  content: '';
  width: 22px;
  height: 11px;
  display: inline-block;
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="11" viewBox="0 0 22 11" fill="none"><path d="M17.3666 0.659912H20.7V9.65991H0.699951V0.659912H10.7M17.3666 0.659912V3.30697M17.3666 0.659912H14.0333M14.0333 0.659912V4.36579M14.0333 0.659912H10.7M10.7 0.659912V2.77756M10.7 0.659912H7.36662M10.7 0.659912V3.30697M7.36662 0.659912V4.36579M7.36662 0.659912H4.03328M4.03328 0.659912V2.77756V3.30697V0.659912Z" stroke="black"/></svg>');
}

.crs-chart-button::before {
  content: '';
  width: 18px;
  height: 18px;
  display: inline-block;
  background-repeat: no-repeat;

  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><g clip-path="url(%23a)"><path fill="%23000" d="M17.055 12.158 9.527 7.795v-.324c0-.37.212-.715.552-.899a2.258 2.258 0 0 0 1.188-2.084 2.277 2.277 0 0 0-2.18-2.18 2.25 2.25 0 0 0-1.66.633 2.25 2.25 0 0 0-.696 1.635.527.527 0 0 0 1.055 0c0-.333.132-.644.372-.875.24-.231.556-.352.89-.339.63.024 1.141.536 1.165 1.166a1.21 1.21 0 0 1-.636 1.117A2.083 2.083 0 0 0 8.473 7.47v.324L.945 12.158A1.901 1.901 0 0 0 0 13.798c0 1.045.85 1.895 1.895 1.895h14.21c1.045 0 1.895-.85 1.895-1.895 0-.674-.362-1.303-.945-1.64Zm-.95 2.48H1.895a.842.842 0 0 1-.421-1.568L9 8.71l7.526 4.361a.842.842 0 0 1-.421 1.568Z"/></g><defs><clipPath id="a"><path fill="%23fff" d="M0 0h18v18H0z"/></clipPath></defs></svg>');
}


@media (max-width: 1000px) {
  .crs-size-guide-button {
    /* margin-top: 28px; */
  }
}

.crs-mobile {
  display: none;
}
@media (max-width: 1000px) {
  .crs-desktop {
    display: none;
  }
  .crs-mobile {
    display: inline;
  }

  .crs-size-guide-button,
  #szb-chart-button,
  #szb-vfr-button {
    font-size: 14px;
  }
}
`;
  class w {
    constructor() {
      this.eventsAborter = null, this.visibilityObservers = [], this.waitObservers = [], this.styleElement = null;
    }
    init() {
      this.checkIsProductPage(async () => {
        await h("#sizebay-container"), this.addStyles(), this.renderSizeGuideButtons();
      });
    }
    async checkIsProductPage(e) {
      var o, a;
      d("Checking is product page for Size Guide");
      let t, n = null, s = null;
      const c = new Promise((r) => {
        t = setTimeout(() => r("timeout"), 2e3);
      }), l = h("product-view-layout").then((r) => (n = r.observer, r)), b = h("category-view-layout").then((r) => (s = r.observer, r));
      try {
        const r = await Promise.race([c, l, b]);
        r !== "timeout" && ((o = r.element) == null ? void 0 : o.tagName) === "PRODUCT-VIEW-LAYOUT" && e(), (r === "timeout" || ((a = r.element) == null ? void 0 : a.tagName) === "CATEGORY-VIEW-LAYOUT") && (n && n.disconnect(), s && s.disconnect());
      } catch {
        d("Error checking is product page for Size Guide:", "error");
      } finally {
        clearTimeout(t), n && n.disconnect();
      }
    }
    async renderSizeGuideButtons() {
      var e, t;
      try {
        const { element: n, observer: s } = await h(
          "product-configurable-option-dropdown"
        ), {
          element: c,
          observer: l
        } = await h("product-configurable-options button");
        if (s && this.waitObservers.push(s), l && this.waitObservers.push(l), document.querySelector(".crs-wrap")) {
          d("Size guide buttons already rendered", "warn");
          return;
        }
        if (!c || !n) return;
        c.classList.add("crs-hide");
        const b = (
          /* HTML */
          `
        <div class="crs-wrap sizeguide-only">
          <button class="crs-chart-button ">Find Your Size</button>
          <button class="crs-size-guide-button">View Size Guide</button>
        </div>
      `
        );
        this.eventsAborter = new AbortController(), n.insertAdjacentHTML("beforebegin", b), h("#szb-vfr-button").then(
          ({ element: u, observer: p }) => {
            if (!u) return;
            const v = document.querySelector(".crs-wrap");
            v && v.classList.remove("sizeguide-only"), p && this.waitObservers.push(p);
          }
        );
        const o = (e = n.previousElementSibling) == null ? void 0 : e.querySelector(".crs-chart-button"), a = (t = n.previousElementSibling) == null ? void 0 : t.querySelector(
          ".crs-size-guide-button"
        );
        if (!o || !a) return;
        o == null || o.addEventListener(
          "click",
          () => {
            const u = document.querySelector("#szb-vfr-button");
            u == null || u.click(), m(
              "exp_size_guide_click_2",
              "Find Your Size Button",
              "click",
              "PDP"
            );
          },
          {
            signal: this.eventsAborter.signal
          }
        ), a == null || a.addEventListener(
          "click",
          () => {
            const u = document.querySelector("#szb-chart-button"), p = document.querySelector(
              "product-configurable-options button"
            );
            if (m(
              "exp_size_guide_click_1",
              "Size Guide Button",
              "click",
              "PDP"
            ), u) {
              u.click();
              return;
            }
            p == null || p.click();
          },
          {
            signal: this.eventsAborter.signal
          }
        );
        const r = g(
          o,
          "exp_size_guide_view_2",
          "PDP",
          "Find Your Size Button",
          0
        );
        this.visibilityObservers.push(r);
        const S = g(
          a,
          "exp_size_guide_view_1",
          "PDP",
          "Size Guide Button",
          0
        );
        this.visibilityObservers.push(S);
      } catch {
        d("Error rendering size guide buttons:", "error");
      }
    }
    destroy() {
      this.eventsAborter && (this.eventsAborter.abort(), this.eventsAborter = null), this.visibilityObservers.forEach((t) => t.disconnect()), this.visibilityObservers = [], this.waitObservers.forEach((t) => t.disconnect()), this.waitObservers = [], this.styleElement && (this.styleElement.remove(), this.styleElement = null);
      const e = document.querySelector(".crs-wrap");
      e && e.remove();
    }
    addStyles() {
      this.styleElement || (this.styleElement = document.createElement("style"), this.styleElement.textContent = y, document.head.appendChild(this.styleElement));
    }
  }
  f({ name: "PDP Size Guide Test", dev: "OS" }), (function(i, e, t, n, s, c) {
    i.hj = i.hj || function() {
      (i.hj.q = i.hj.q || []).push(arguments);
    }, i._hjSettings = { hjid: 2667925, hjsv: 6 }, s = e.getElementsByTagName("head")[0], c = e.createElement("script"), c.async = !0, c.src = t + i._hjSettings.hjid + n + i._hjSettings.hjsv, s && s.appendChild(c);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_size_guide");
  class z {
    constructor() {
      this.previousUrl = location.href, this.sizeGuide = new w(), this.init();
    }
    init() {
      this.addStyles(), this.interceptHistoryAPI(() => {
        this.sizeGuide.destroy(), this.sizeGuide.init();
      }), this.sizeGuide.init();
    }
    interceptHistoryAPI(e) {
      new MutationObserver(() => {
        const n = location.href;
        this.previousUrl !== n && (this.previousUrl = n, e());
      }).observe(document.body, { childList: !0, subtree: !0 });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = "", document.head.appendChild(e);
    }
  }
  window._crsSizeGuide || (window._crsSizeGuide = !0, new z());
})();
