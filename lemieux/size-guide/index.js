(function() {
  "use strict";
  const l = (i, e, t, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: e,
      event_type: t,
      event_loc: n
    }), b(`Event: ${i} | ${e} | ${t} | ${n}`, "success");
  }, d = (i) => new Promise((e) => {
    const t = document.querySelector(i);
    t && e(t);
    const n = new MutationObserver(() => {
      const s = document.querySelector(i);
      s && (e(s), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), p = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, u = (i, e, t, n, s = 1e3, o = 0.5) => {
    let r, c;
    if (r = new IntersectionObserver(
      function(a) {
        a[0].isIntersecting === !0 ? c = setTimeout(() => {
          l(
            e,
            a[0].target.dataset.visible || n || "",
            "view",
            t
          ), r.disconnect();
        }, s) : (b("Element is not fully visible", "warn"), clearTimeout(c));
      },
      { threshold: [o] }
    ), typeof i == "string") {
      const a = document.querySelector(i);
      a && r.observe(a);
    } else
      r.observe(i);
  }, b = (i, e = "info") => {
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
  }, h = `sizebay {
}

#sizebay-wrapper {
  margin-top: 0;
}

.crs-hide {
  display: none !important;
}

.crs-size-guide-button,
#szb-chart-button,
#szb-vfr-button {
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
}

:is(#szb-chart-button, #szb-vfr-button) span {
  text-decoration: underline;
}
.crs-size-guide-button::before {
  content: '';
  width: 22px;
  height: 11px;
  display: inline-block;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="11" viewBox="0 0 22 11" fill="none"><path d="M17.3666 0.659912H20.7V9.65991H0.699951V0.659912H10.7M17.3666 0.659912V3.30697M17.3666 0.659912H14.0333M14.0333 0.659912V4.36579M14.0333 0.659912H10.7M10.7 0.659912V2.77756M10.7 0.659912H7.36662M10.7 0.659912V3.30697M7.36662 0.659912V4.36579M7.36662 0.659912H4.03328M4.03328 0.659912V2.77756V3.30697V0.659912Z" stroke="black"/></svg>');
}

:is(#szb-chart-button, #szb-vfr-button):hover::before {
  color: inherit;
}
:is(#szb-chart-button, #szb-vfr-button)::before {
  margin: 0;
  text-decoration: none;
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
  class m {
    constructor() {
      this.abortController = new AbortController(), this.init();
    }
    init() {
      this.checkIsProductPage(() => {
        this.addStyles(), this.observe(), this.checkTypeOfSizeButtons();
      });
    }
    async checkIsProductPage(e) {
      const t = new Promise((s) => setTimeout(s, 3e3));
      await Promise.race([t, d("product-view-layout")]) && e();
    }
    async observe() {
      const e = await d(
        "product-configurable-options"
      ), t = new MutationObserver((n) => {
        n.forEach((s) => {
          const o = s.target;
          s.type === "childList" && o && o.id === "sizebay-wrapper" && !o.querySelector(".crs-size-guide-button") && setTimeout(() => {
            this.checkTypeOfSizeButtons();
          }, 100);
        });
      });
      setTimeout(() => {
        t.disconnect();
      }, 5e3), t.observe(e, {
        childList: !0,
        subtree: !0
      });
    }
    async checkTypeOfSizeButtons() {
      var o;
      await d("#sizebay-wrapper"), this.abortController.abort(), this.abortController = new AbortController();
      const e = document.querySelector("#szb-chart-button"), t = document.querySelector("#szb-vfr-button"), n = document.querySelector(
        "product-configurable-options button"
      ), s = `
      <span class="crs-desktop">View Size Guide</span>
      <span class="crs-mobile">Size Guide</span>
    `;
      if (e) {
        n == null || n.classList.add("crs-hide");
        const r = e.closest("sizebay"), c = n == null ? void 0 : n.closest("div");
        r && c && c.insertAdjacentElement("afterend", r), e.innerHTML = s, t && (t.innerHTML = "<span>Find Your Size</span>", setTimeout(() => {
          window._crsVisibilityOfTime_2 || (window._crsVisibilityOfTime_2 = !0, b("szbFindYourSizeButton view"), u(
            t,
            "exp_size_guide_view_2",
            "PDP",
            "Find Your Size Button",
            0
          ));
        }, 100), t._crsEvent || (t._crsEvent = !0, t == null || t.addEventListener(
          "click",
          () => {
            l(
              "exp_size_guide_click_2",
              "Find Your Size Button",
              "click",
              "PDP"
            );
          },
          { signal: this.abortController.signal }
        ))), setTimeout(() => {
          window._crsVisibilityOfTime_1 || (window._crsVisibilityOfTime_1 = !0, u(
            e,
            "exp_size_guide_view_1",
            "PDP",
            "Size Guide Button",
            0
          ));
        }, 100), e._crsEvent || (e._crsEvent = !0, e == null || e.addEventListener(
          "click",
          () => {
            l(
              "exp_size_guide_click_1",
              "Size Guide Button",
              "click",
              "PDP"
            );
          },
          { signal: this.abortController.signal }
        ));
        return;
      } else
        n && ((o = n.textContent) != null && o.includes("View size guide")) && (n.innerHTML = s, n.classList.add("crs-size-guide-button"), setTimeout(() => {
          window._crsVisibilityOfTime_1 || (window._crsVisibilityOfTime_1 = !0, u(
            n,
            "exp_size_guide_view_1",
            "PDP",
            "Size Guide Button",
            0
          ));
        }, 100), n._crsEvent || (n._crsEvent = !0, n == null || n.addEventListener(
          "click",
          () => {
            l(
              "exp_size_guide_click_1",
              "Size Guide Button",
              "click",
              "Size Guide"
            );
          },
          { signal: this.abortController.signal }
        )));
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = h, document.head.appendChild(e);
    }
  }
  p({ name: "PDP Size Guide Test", dev: "OS" }), (function(i, e, t, n, s, o) {
    i.hj = i.hj || function() {
      (i.hj.q = i.hj.q || []).push(arguments);
    }, i._hjSettings = { hjid: 2667925, hjsv: 6 }, s = e.getElementsByTagName("head")[0], o = e.createElement("script"), o.async = !0, o.src = t + i._hjSettings.hjid + n + i._hjSettings.hjsv, s && s.appendChild(o);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_size_guide");
  class f {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.interceptHistoryAPI(() => {
        window._crsVisibilityOfTime_2 = !1, window._crsVisibilityOfTime_1 = !1, new m();
      });
    }
    interceptHistoryAPI(e) {
      const t = history.pushState, n = history.replaceState;
      history.pushState = (...s) => {
        t.apply(history, s), setTimeout(() => e(), 50);
      }, history.replaceState = (...s) => {
        n.apply(history, s), setTimeout(() => e(), 50);
      };
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = "", document.head.appendChild(e);
    }
  }
  new f();
})();
