(function() {
  "use strict";
  const p = (i, e, t, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: e,
      event_type: t,
      event_loc: s
    }), v(`Event: ${i} | ${e} | ${t} | ${s}`, "success");
  }, m = (i) => new Promise((e) => {
    const t = document.querySelector(i);
    t && e(t);
    const s = new MutationObserver(() => {
      const n = document.querySelector(i);
      n && (e(n), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), f = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, w = (i, e, t, s, n = 1e3, o = 0.5) => {
    let r, a;
    if (r = new IntersectionObserver(
      function(c) {
        c[0].isIntersecting === !0 ? a = setTimeout(() => {
          p(
            e,
            c[0].target.dataset.visible || s,
            "view",
            t
          ), r.disconnect();
        }, n) : (v("Element is not fully visible", "warn"), clearTimeout(a));
      },
      { threshold: [o] }
    ), typeof i == "string") {
      const c = document.querySelector(i);
      c && r.observe(c);
    } else
      r.observe(i);
  }, v = (i, e = "info") => {
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
  }, E = "", b = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="22"
  height="22"
  fill="none"
>
  <g fill="#000" clip-path="url(#a)">
    <path
      d="M11.533 5.568a.559.559 0 0 0-.558.559V7.2a.559.559 0 0 0 1.117 0V6.127a.559.559 0 0 0-.559-.559ZM11.533 17.407a.559.559 0 0 0-.558.559v1.074a.559.559 0 0 0 1.117 0v-1.074a.559.559 0 0 0-.559-.559ZM17.99 12.025h-1.075a.559.559 0 1 0 0 1.117h1.074a.559.559 0 0 0 0-1.117ZM16.512 16.772a.764.764 0 0 0-.018-.018l-.76-.76a.559.559 0 1 0-.79.79l.76.76a.559.559 0 0 0 .808-.772ZM16.177 7.906a.559.559 0 0 0-.758.002l-2.966 2.966a1.944 1.944 0 0 0-2.866 1.712l.001-.003a1.945 1.945 0 1 0 3.657-.922l2.966-2.965a.559.559 0 0 0-.034-.79Zm-4.644 5.505a.827.827 0 1 1 0-1.655.827.827 0 0 1 0 1.655Z"
    />
    <path
      d="M20.361 5.736a.559.559 0 1 0 .79-.79l-1.98-1.98a.559.559 0 0 0-.79.79l.598.597-1.187 1.187a9.342 9.342 0 0 0-5.7-2.364V1.117h1.973a.559.559 0 1 0 0-1.117H9.002a.559.559 0 1 0 0 1.117h1.973v2.06A9.353 9.353 0 0 0 4.87 5.92a.559.559 0 0 0 .79.79 8.305 8.305 0 0 1 11.746 0c3.238 3.238 3.238 8.507 0 11.745-3.239 3.238-8.508 3.238-11.746 0a.559.559 0 0 0-.79.79A9.423 9.423 0 0 0 18.582 6.33l1.187-1.187.593.594Z"
    />
    <path
      d="M6.359 8.441H1.235a.559.559 0 1 0 0 1.118h5.124a.559.559 0 1 0 0-1.118ZM7.661 12.025H2.537a.559.559 0 1 0 0 1.117H7.66a.559.559 0 0 0 0-1.117ZM6.359 15.607H1.235a.559.559 0 0 0 0 1.118h5.124a.559.559 0 1 0 0-1.118Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z" /></clipPath>
  </defs>
</svg> `
  ), S = `.crs-delivery-countdown {
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 16px;
  background-color: #fff7ec;
  font-size: 16px;
  line-height: 20px;
}

.crs-delivery-countdown .text-content .highlight {
  font-weight: 700;
  text-transform: uppercase;
}

.crs-delivery-countdown .timer {
  margin-left: auto;
  font-weight: 700;
  white-space: nowrap;
}
`, y = {
    // Set to false to use local time instead of UTC
    DEADLINE_HOUR: 15,
    // 15:00 - deadline for orders
    DEADLINE_MINUTES: 60
    // 60 minutes
  };
  class D {
    constructor({ container: e, position: t }) {
      this.staticHour = y.DEADLINE_HOUR, this.staticMinutes = y.DEADLINE_MINUTES, this.container = typeof e == "string" ? document.querySelector(e) : e, this.position = t || "beforeend", this.init();
    }
    init() {
      this.container && (this.createCountdownElement(), this.updateCountdown(), this.startCountdownTimer(), this.addStyles());
    }
    getDeliveryBadge() {
      return document.querySelector(
        "icms-outlet:has(product-view-delivery-coutdown)"
      ) || null;
    }
    startCountdownTimer() {
      this.intervalId = window.setInterval(() => {
        this.updateCountdown();
      }, 1e3);
    }
    updateCountdown() {
      const e = this.calculateCountdown();
      typeof e == "string" ? this.badgeElement && (this.badgeElement.textContent = e) : this.updateCountdownElements(
        e.hoursText,
        e.hoursWord,
        e.minutesText,
        e.secondsText,
        e.deliveryDay
      );
    }
    calculateCountdown() {
      const t = /* @__PURE__ */ new Date(), s = t.getHours(), n = t.getMinutes(), o = t.getSeconds(), r = t.getDay(), a = -1 * (s - this.staticHour), c = n === 0 ? 0 : this.staticMinutes - n, u = o === 0 ? 0 : 60 - o, g = c.toString().padStart(2, "0"), x = u.toString().padStart(2, "0");
      let d, l;
      if (s < this.staticHour && r >= 1 && r <= 5)
        d = (a - (n === 0 && o === 0 ? 0 : 1)).toString().padStart(2, "0"), l = "TODAY";
      else if (s >= this.staticHour && r === 5)
        d = (a + (n === 0 && o === 0 ? 72 : 71)).toString().padStart(2, "0"), l = "on MONDAY";
      else if (s >= this.staticHour && r >= 1 && r <= 4)
        d = (a + (n === 0 && o === 0 ? 24 : 23)).toString().padStart(2, "0"), l = "TOMORROW";
      else if (r === 6)
        d = (a + (n === 0 && o === 0 ? 48 : 47)).toString().padStart(2, "0"), l = "on MONDAY";
      else if (r === 0)
        d = (a + (n === 0 && o === 0 ? 24 : 23)).toString().padStart(2, "0"), l = "on MONDAY";
      else {
        if (s === this.staticHour && r >= 1 && r <= 4)
          return `Order in the next 24 ${this.getHourWord(24)} 00 minutes 00 seconds for dispatch TOMORROW`;
        d = (a + 24).toString().padStart(2, "0"), l = "TOMORROW";
      }
      const H = this.getHourWord(parseInt(d));
      return {
        hoursText: d,
        hoursWord: H,
        minutesText: g,
        secondsText: x,
        deliveryDay: l
      };
    }
    getHourWord(e) {
      return e === 1 ? "hour" : "hours";
    }
    createCountdownElement() {
      this.container && !this.badgeElement && (this.badgeElement = document.createElement("div"), this.badgeElement.className = "crs-delivery-countdown", this.badgeElement.innerHTML = /* HTML */
      `
        <div class="icon">${b}</div>
        <div class="text-content">
          Delivery <span class="highlight">tomorrow*</span> if you order in the
          next:
        </div>
        <div class="timer">
          <span class="hours">00</span>
          <span class="colon">:</span>
          <span class="minutes">00</span>
          <span class="colon">:</span>
          <span class="seconds">00</span>
        </div>
      `, this.container.insertAdjacentElement(this.position, this.badgeElement), w(
        this.badgeElement,
        "exp_delivery_view_01",
        "PDP",
        "Visibility",
        0
      ));
    }
    updateCountdownElements(e, t, s, n, o) {
      if (this.badgeElement) {
        const r = this.badgeElement.querySelector(".hours"), a = this.badgeElement.querySelector(".hours-word"), c = this.badgeElement.querySelector(".minutes"), u = this.badgeElement.querySelector(".seconds"), g = this.badgeElement.querySelector(".delivery-day");
        r && (r.textContent = e), a && (a.textContent = t), c && (c.textContent = s), u && (u.textContent = n), g && (g.textContent = o);
      }
    }
    // Method for cleaning up interval
    destroy() {
      this.intervalId && (clearInterval(this.intervalId), this.intervalId = void 0);
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = S, document.head.appendChild(e);
    }
  }
  const C = `icms-outlet:has(product-view-delivery-coutdown) {
  display: none !important;
}
`;
  (function(i, e, t, s, n, o) {
    i.hj = i.hj || function() {
      (i.hj.q = i.hj.q || []).push(arguments);
    }, i._hjSettings = { hjid: 2667925, hjsv: 6 }, n = e.getElementsByTagName("head")[0], o = e.createElement("script"), o.async = !0, o.src = t + i._hjSettings.hjid + s + i._hjSettings.hjsv, n && n.appendChild(o);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_delivery");
  const h = {
    // Set to false to use local time instead of UTC
    DAILY_CUTOFF_HOUR: 15,
    // 3:00 PM cutoff for daily orders
    WEEKLY_START_HOUR: 5
    // 5:00 AM Monday start time
  };
  class I {
    constructor() {
      this.init();
    }
    init() {
      this.checkIsPdpPage().then((e) => {
        e && (this.addStyles(), m("footer").then(() => {
          this.addDeliveryBadge();
        }));
      });
    }
    async checkIsPdpPage() {
      return !!await m("product-view");
    }
    async addDeliveryBadge() {
      if (!this.shouldShowDeliveryBadge()) {
        console.log("Delivery badge hidden due to time restrictions");
        return;
      }
      const e = await m("product-view-add-to-basket"), t = document.querySelector(".crs-delivery-countdown");
      t && t.remove(), this.deliveryBadgeInstance = new D({
        container: e,
        position: "beforebegin"
      }), this.startVisibilityMonitoring();
    }
    startVisibilityMonitoring() {
      this.visibilityCheckInterval = window.setInterval(() => {
        this.shouldShowDeliveryBadge() || (console.log("Hiding delivery badge due to time cutoff"), this.hideDeliveryBadge());
      }, 3e4);
    }
    hideDeliveryBadge() {
      this.deliveryBadgeInstance && (this.deliveryBadgeInstance.destroy(), this.deliveryBadgeInstance = void 0), this.visibilityCheckInterval && (clearInterval(this.visibilityCheckInterval), this.visibilityCheckInterval = void 0);
      const e = document.querySelector(".crs-delivery-countdown");
      e && e.remove();
    }
    destroy() {
      this.hideDeliveryBadge();
    }
    shouldShowDeliveryBadge() {
      const t = /* @__PURE__ */ new Date(), s = t.getHours(), n = t.getDay();
      return n === 0 || n === 6 ? !1 : n === 1 ? s >= h.WEEKLY_START_HOUR && s < h.DAILY_CUTOFF_HOUR : n >= 2 && n <= 4 || n === 5 ? s < h.DAILY_CUTOFF_HOUR : !1;
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = C, document.head.appendChild(e);
    }
  }
  f({ name: "Delivery urgency and date", dev: "OS" });
  class O {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.pageChangeHandler(() => {
        this.initChanges();
      }), this.initChanges();
    }
    initChanges() {
      new I();
    }
    pageChangeHandler(e) {
      let t = window.location.pathname;
      new MutationObserver((n) => {
        n.forEach((o) => {
          t !== window.location.pathname && (e(), t = window.location.pathname);
        });
      }).observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = E, document.head.appendChild(e);
    }
  }
  new O();
})();
