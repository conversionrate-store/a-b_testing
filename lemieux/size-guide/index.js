(function() {
  "use strict";
  const p = (n, e, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: e,
      event_type: t,
      event_loc: i
    }), u(`Event: ${n} | ${e} | ${t} | ${i}`, "success");
  }, m = ({ name: n, dev: e }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, u = (n, e = "info") => {
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
    console.log(`%c>>> ${n}`, `${t} font-size: 16px; font-weight: 600`);
  }, v = (n, e, t, i, s = 1e3, o = 0.5) => {
    let c, b;
    if (c = new IntersectionObserver(
      function(r) {
        r[0].isIntersecting === !0 ? b = setTimeout(() => {
          p(
            e,
            r[0].target.dataset.visible || i || "",
            "view",
            t
          ), c.disconnect();
        }, s) : (u("Element is not fully visible", "warn"), clearTimeout(b));
      },
      { threshold: [o] }
    ), typeof n == "string") {
      const r = document.querySelector(n);
      r && c.observe(r);
    } else
      c.observe(n);
    return c;
  }, d = (n) => new Promise((e) => {
    const t = document.querySelector(n);
    t && e({ element: t, observer: null });
    const i = new MutationObserver(() => {
      const s = document.querySelector(n);
      s && (e({ element: s, observer: i }), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), f = `.crs-wrap {
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
  class y {
    constructor() {
      this.eventsAborter = null, this.visibilityObservers = [], this.waitObservers = [], this.styleElement = null;
    }
    init() {
      this.checkIsProductPage(async () => {
        await d("#sizebay-container"), this.addStyles(), this.renderSizeGuideButtons();
      });
    }
    async checkIsProductPage(e) {
      u("Checking is product page for Size Guide");
      let t;
      const i = new Promise((s) => {
        t = setTimeout(s, 5e3);
      });
      try {
        const s = await Promise.race([
          i,
          d("product-view-layout")
        ]);
        s && s !== void 0 && e();
      } finally {
        clearTimeout(t);
      }
    }
    async renderSizeGuideButtons() {
      var e, t;
      try {
        const { element: i, observer: s } = await d(
          "product-configurable-option-dropdown"
        ), {
          element: o,
          observer: c
        } = await d("product-configurable-options button");
        if (s && this.waitObservers.push(s), c && this.waitObservers.push(c), document.querySelector(".crs-wrap")) {
          u("Size guide buttons already rendered", "warn");
          return;
        }
        if (!o || !i) return;
        o.classList.add("crs-hide");
        const b = (
          /* HTML */
          `
        <div class="crs-wrap sizeguide-only">
          <button class="crs-chart-button ">Find Your Size</button>
          <button class="crs-size-guide-button">View Size Guide</button>
        </div>
      `
        );
        this.eventsAborter = new AbortController(), i.insertAdjacentHTML("beforebegin", b), d("#szb-vfr-button").then(
          ({ element: l, observer: a }) => {
            if (!l) return;
            const g = document.querySelector(".crs-wrap");
            g && g.classList.remove("sizeguide-only"), a && this.waitObservers.push(a);
          }
        );
        const r = (e = i.previousElementSibling) == null ? void 0 : e.querySelector(".crs-chart-button"), h = (t = i.previousElementSibling) == null ? void 0 : t.querySelector(
          ".crs-size-guide-button"
        );
        if (!r || !h) return;
        r == null || r.addEventListener(
          "click",
          () => {
            const l = document.querySelector("#szb-vfr-button");
            l == null || l.click(), p(
              "exp_size_guide_click_2",
              "Find Your Size Button",
              "click",
              "PDP"
            );
          },
          {
            signal: this.eventsAborter.signal
          }
        ), h == null || h.addEventListener(
          "click",
          () => {
            const l = document.querySelector("#szb-chart-button"), a = document.querySelector(
              "product-configurable-options button"
            );
            if (p(
              "exp_size_guide_click_1",
              "Size Guide Button",
              "click",
              "PDP"
            ), l) {
              l.click();
              return;
            }
            a == null || a.click();
          },
          {
            signal: this.eventsAborter.signal
          }
        );
        const z = v(
          r,
          "exp_size_guide_view_2",
          "PDP",
          "Find Your Size Button",
          0
        );
        this.visibilityObservers.push(z);
        const S = v(
          h,
          "exp_size_guide_view_1",
          "PDP",
          "Size Guide Button",
          0
        );
        this.visibilityObservers.push(S);
      } catch {
        u("Error rendering size guide buttons:", "error");
      }
    }
    destroy() {
      this.eventsAborter && (this.eventsAborter.abort(), this.eventsAborter = null), this.visibilityObservers.forEach((t) => t.disconnect()), this.visibilityObservers = [], this.waitObservers.forEach((t) => t.disconnect()), this.waitObservers = [], this.styleElement && (this.styleElement.remove(), this.styleElement = null);
      const e = document.querySelector(".crs-wrap");
      e && e.remove();
    }
    addStyles() {
      this.styleElement || (this.styleElement = document.createElement("style"), this.styleElement.textContent = f, document.head.appendChild(this.styleElement));
    }
  }
  m({ name: "PDP Size Guide Test", dev: "OS" }), (function(n, e, t, i, s, o) {
    n.hj = n.hj || function() {
      (n.hj.q = n.hj.q || []).push(arguments);
    }, n._hjSettings = { hjid: 2667925, hjsv: 6 }, s = e.getElementsByTagName("head")[0], o = e.createElement("script"), o.async = !0, o.src = t + n._hjSettings.hjid + i + n._hjSettings.hjsv, s && s.appendChild(o);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_size_guide");
  class w {
    constructor() {
      this.previousUrl = location.href, this.sizeGuide = new y(), this.init();
    }
    init() {
      this.addStyles(), this.interceptHistoryAPI(() => {
        this.sizeGuide.destroy(), this.sizeGuide.init();
      }), this.sizeGuide.init();
    }
    interceptHistoryAPI(e) {
      new MutationObserver(() => {
        const i = location.href;
        this.previousUrl !== i && (this.previousUrl = i, e());
      }).observe(document.body, { childList: !0, subtree: !0 });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = "", document.head.appendChild(e);
    }
  }
  window._crsSizeGuide || (window._crsSizeGuide = !0, new w());
})();
