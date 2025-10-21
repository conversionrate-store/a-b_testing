(function() {
  "use strict";
  const l = (i, e, n, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: e,
      event_type: n,
      event_loc: t
    }), b(`Event: ${i} | ${e} | ${n} | ${t}`, "success");
  }, d = (i) => new Promise((e) => {
    const n = document.querySelector(i);
    n && e(n);
    const t = new MutationObserver(() => {
      const s = document.querySelector(i);
      s && (e(s), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), h = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, u = (i, e, n, t, s = 1e3, o = 0.5) => {
    let c, r;
    if (c = new IntersectionObserver(
      function(a) {
        a[0].isIntersecting === !0 ? r = setTimeout(() => {
          l(
            e,
            a[0].target.dataset.visible || t || "",
            "view",
            n
          ), c.disconnect();
        }, s) : (b("Element is not fully visible", "warn"), clearTimeout(r));
      },
      { threshold: [o] }
    ), typeof i == "string") {
      const a = document.querySelector(i);
      a && c.observe(a);
    } else
      c.observe(i);
  }, b = (i, e = "info") => {
    let n;
    switch (e) {
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
    console.log(`%c>>> ${i}`, `${n} font-size: 16px; font-weight: 600`);
  }, p = `sizebay {
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
  font-style: normal;
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
      this.abortController = null, this.checkTypeTimeout = null, this.init();
    }
    init() {
      this.checkIsProductPage(() => {
        this.addStyles(), this.observe(), this.checkTypeOfSizeButtons();
      });
    }
    async checkIsProductPage(e) {
      const n = new Promise((s) => setTimeout(s, 3e3));
      await Promise.race([n, d("product-view-layout")]) && e();
    }
    async observe() {
      const e = await d(
        "product-configurable-options"
      );
      await d("footer");
      const n = new MutationObserver((t) => {
        t.forEach((s) => {
          const o = s.target;
          s.type === "childList" && o && o.id === "sizebay-wrapper" && !o.querySelector(".crs-size-guide-button") && (this.checkTypeTimeout && clearTimeout(this.checkTypeTimeout), setTimeout(() => {
            this.checkTypeOfSizeButtons();
          }, 100));
        });
      });
      setTimeout(() => {
        n.disconnect();
      }, 5e3), n.observe(e, {
        childList: !0,
        subtree: !0
      });
    }
    async checkTypeOfSizeButtons() {
      var o;
      await d("#sizebay-wrapper"), this.abortController, this.abortController = new AbortController();
      const e = document.querySelector("#szb-chart-button"), n = document.querySelector("#szb-vfr-button"), t = document.querySelector(".crs-size-guide-button") || document.querySelector(
        "product-configurable-options button"
      ), s = (
        /* HTML */
        `
      <span class="crs-desktop">View Size Guide</span>
      <span class="crs-mobile">View Size Guide</span>
    `
      );
      if (t == null || t.classList.add("crs-hide"), e) {
        const c = e.closest("sizebay"), r = t == null ? void 0 : t.closest("div");
        c && r && r.insertAdjacentElement("afterend", c), e.innerHTML = s, n && (n.innerHTML = "<span>Find Your Size</span>", window._crsVisibilityOfTime_2 || (window._crsVisibilityOfTime_2 = !0, setTimeout(() => {
          u(
            n,
            "exp_size_guide_view_2",
            "PDP",
            "Find Your Size Button",
            0
          );
        }, 100)), n._crsEvent || (n._crsEvent = !0, n == null || n.addEventListener(
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
        ))), window._crsVisibilityOfTime_1 || (window._crsVisibilityOfTime_1 = !0, console.log("SZB Size Guide Button viewed"), setTimeout(() => {
          u(
            e,
            "exp_size_guide_view_1",
            "PDP",
            "Size Guide Button",
            0
          );
        }, 100)), e._crsEvent || (e._crsEvent = !0, e == null || e.addEventListener(
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
        console.log("No SZB Size Guide Button found", t, (o = t == null ? void 0 : t.textContent) == null ? void 0 : o.includes("View size guide")), t && (t == null || t.classList.remove("crs-hide"), t.classList.add("crs-size-guide-button"), window._crsVisibilityOfTime_1 || (window._crsVisibilityOfTime_1 = !0, setTimeout(() => {
          u(
            t,
            "exp_size_guide_view_1",
            "PDP",
            "Size Guide Button",
            0
          );
        }, 150)), t._crsEvent || (t._crsEvent = !0, t == null || t.addEventListener(
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
        )));
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = p, document.head.appendChild(e);
    }
  }
  h({ name: "PDP Size Guide Test", dev: "OS" }), (function(i, e, n, t, s, o) {
    i.hj = i.hj || function() {
      (i.hj.q = i.hj.q || []).push(arguments);
    }, i._hjSettings = { hjid: 2667925, hjsv: 6 }, s = e.getElementsByTagName("head")[0], o = e.createElement("script"), o.async = !0, o.src = n + i._hjSettings.hjid + t + i._hjSettings.hjsv, s && s.appendChild(o);
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
      const n = history.pushState, t = history.replaceState;
      history.pushState = (...s) => {
        n.apply(history, s), setTimeout(() => e(), 50);
      }, history.replaceState = (...s) => {
        t.apply(history, s), setTimeout(() => e(), 50);
      };
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = "", document.head.appendChild(e);
    }
  }
  window._crsSizeGuide || (window._crsSizeGuide = !0, new f());
})();
