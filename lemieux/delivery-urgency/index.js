(function() {
  "use strict";
  const w = (s, e, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: e,
      event_type: t,
      event_loc: i
    }), y(`Event: ${s} | ${e} | ${t} | ${i}`, "success");
  }, v = (s) => new Promise((e) => {
    const t = document.querySelector(s);
    t && e(t);
    const i = new MutationObserver(() => {
      const n = document.querySelector(s);
      n && (e(n), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), E = ({ name: s, dev: e }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, b = (s, e, t, i, n = 1e3, o = 0.5) => {
    let r, a;
    if (r = new IntersectionObserver(
      function(d) {
        d[0].isIntersecting === !0 ? a = setTimeout(() => {
          w(
            e,
            d[0].target.dataset.visible || i,
            "view",
            t
          ), r.disconnect();
        }, n) : (y("Element is not fully visible", "warn"), clearTimeout(a));
      },
      { threshold: [o] }
    ), typeof s == "string") {
      const d = document.querySelector(s);
      d && r.observe(d);
    } else
      r.observe(s);
  }, y = (s, e = "info") => {
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
  }, S = "", D = (
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
  ), C = `.crs-delivery-countdown {
  container-type: inline-size;
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 16px;
  background-color: #fff7ec;
  font-size: 16px;
  line-height: 20px;
}

@container (min-width: 540px) {
  .crs-delivery-countdown br {
    display: none;
  }
}

.timer-content {
  flex: 1;
}
.crs-delivery-countdown .text-content .highlight {
  font-weight: 700;
  text-transform: uppercase;
}

.crs-delivery-countdown .timer {
  font-weight: 700;
  white-space: nowrap;
}
`, f = {
    // Set to false to use local time instead of UTC
    DEADLINE_HOUR: 15,
    // 15:00 - deadline for orders
    DEADLINE_MINUTES: 60
    // 60 minutes
  };
  class I {
    constructor({ container: e, position: t }) {
      this.staticHour = f.DEADLINE_HOUR, this.staticMinutes = f.DEADLINE_MINUTES, this.container = typeof e == "string" ? document.querySelector(e) : e, this.position = t || "beforeend", this.init();
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
        e.minutesWord,
        e.secondsText,
        e.secondsWord,
        e.deliveryDay
      );
    }
    calculateCountdown() {
      const t = /* @__PURE__ */ new Date(), i = t.getHours(), n = t.getMinutes(), o = t.getSeconds(), r = t.getDay(), a = -1 * (i - this.staticHour), d = n === 0 ? 0 : this.staticMinutes - n, m = o === 0 ? 0 : 60 - o, u = d.toString().padStart(2, "0"), h = m.toString().padStart(2, "0");
      let c, l;
      if (i < this.staticHour && r >= 1 && r <= 5)
        c = (a - (n === 0 && o === 0 ? 0 : 1)).toString().padStart(2, "0"), l = "TODAY";
      else if (i >= this.staticHour && r === 5)
        c = (a + (n === 0 && o === 0 ? 72 : 71)).toString().padStart(2, "0"), l = "on MONDAY";
      else if (i >= this.staticHour && r >= 1 && r <= 4)
        c = (a + (n === 0 && o === 0 ? 24 : 23)).toString().padStart(2, "0"), l = "TOMORROW";
      else if (r === 6)
        c = (a + (n === 0 && o === 0 ? 48 : 47)).toString().padStart(2, "0"), l = "on MONDAY";
      else if (r === 0)
        c = (a + (n === 0 && o === 0 ? 24 : 23)).toString().padStart(2, "0"), l = "on MONDAY";
      else {
        if (i === this.staticHour && r >= 1 && r <= 4)
          return `Order in the next 24 ${this.getHourWord(24)} 00 minutes 00 seconds for dispatch TOMORROW`;
        c = (a + 24).toString().padStart(2, "0"), l = "TOMORROW";
      }
      const p = this.getHourWord(parseInt(c)), H = this.getMinuteWord(parseInt(u)), M = this.getSecondWord(parseInt(h));
      return {
        hoursText: c,
        hoursWord: p,
        minutesText: u,
        minutesWord: H,
        secondsText: h,
        secondsWord: M,
        deliveryDay: l
      };
    }
    getHourWord(e) {
      return e === 1 ? "hour" : "hours";
    }
    getMinuteWord(e) {
      return e === 1 ? "minute" : "minutes";
    }
    getSecondWord(e) {
      return e === 1 ? "second" : "seconds";
    }
    createCountdownElement() {
      this.container && !this.badgeElement && (this.badgeElement = document.createElement("div"), this.badgeElement.className = "crs-delivery-countdown", this.badgeElement.innerHTML = /* HTML */
      `
        <div class="icon">${D}</div>
        <div class="timer-content">
          <span class="text-content">Order within</span>
          <span class="timer">
            <span class="hours">00</span>
            <span class="hours-word">hours</span>
            <span class="colon">:</span>
            <span class="minutes">00</span>
            <span class="minutes-word">minutes</span>
            <span class="colon">:</span>
            <span class="seconds">00</span>
            <span class="seconds-word">seconds</span>
          </span>
          <span class="text-content">
            <br />for <span class="highlight">DELIVERY TOMORROW</span>
          </span>
        </div>
      `, this.container.insertAdjacentElement(this.position, this.badgeElement), b(
        this.badgeElement,
        "exp_delivery_view_01",
        "PDP",
        "Visibility",
        0
      ));
    }
    updateCountdownElements(e, t, i, n, o, r, a) {
      if (this.badgeElement) {
        const d = this.badgeElement.querySelector(".hours"), m = this.badgeElement.querySelector(".hours-word"), u = this.badgeElement.querySelector(".minutes"), h = this.badgeElement.querySelector(".minutes-word"), c = this.badgeElement.querySelector(".seconds"), l = this.badgeElement.querySelector(".seconds-word"), p = this.badgeElement.querySelector(".delivery-day");
        d && (d.textContent = e), m && (m.textContent = t), u && (u.textContent = i), h && (h.textContent = n), c && (c.textContent = o), l && (l.textContent = r), p && (p.textContent = a);
      }
    }
    // Method for cleaning up interval
    destroy() {
      this.intervalId && (clearInterval(this.intervalId), this.intervalId = void 0);
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = C, document.head.appendChild(e);
    }
  }
  const O = `icms-outlet:has(product-view-delivery-coutdown) {
  display: none !important;
}
`;
  (function(s, e, t, i, n, o) {
    s.hj = s.hj || function() {
      (s.hj.q = s.hj.q || []).push(arguments);
    }, s._hjSettings = { hjid: 2667925, hjsv: 6 }, n = e.getElementsByTagName("head")[0], o = e.createElement("script"), o.async = !0, o.src = t + s._hjSettings.hjid + i + s._hjSettings.hjsv, n && n.appendChild(o);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_delivery");
  const g = {
    // Set to false to use local time instead of UTC
    DAILY_CUTOFF_HOUR: 15,
    // 3:00 PM cutoff for daily orders
    WEEKLY_START_HOUR: 5
    // 5:00 AM Monday start time
  };
  class x {
    constructor() {
      this.init();
    }
    init() {
      this.checkIsPdpPage().then((e) => {
        e && (this.addStyles(), v("footer").then(() => {
          this.addDeliveryBadge();
        }));
      });
    }
    async checkIsPdpPage() {
      return !!await v("product-view");
    }
    async addDeliveryBadge() {
      if (!this.shouldShowDeliveryBadge()) {
        console.log("Delivery badge hidden due to time restrictions");
        return;
      }
      const e = await v("product-view-add-to-basket"), t = document.querySelector(".crs-delivery-countdown");
      t && t.remove(), this.deliveryBadgeInstance = new I({
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
      const t = /* @__PURE__ */ new Date(), i = t.getHours(), n = t.getDay();
      return n === 0 || n === 6 ? !1 : n === 1 ? i >= g.WEEKLY_START_HOUR && i < g.DAILY_CUTOFF_HOUR : n >= 2 && n <= 4 || n === 5 ? i < g.DAILY_CUTOFF_HOUR : !1;
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = O, document.head.appendChild(e);
    }
  }
  E({ name: "Delivery urgency and date", dev: "OS" });
  class T {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.pageChangeHandler(() => {
        this.initChanges();
      }), this.initChanges();
    }
    initChanges() {
      new x();
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
      e.textContent = S, document.head.appendChild(e);
    }
  }
  new T();
})();
