(function() {
  "use strict";
  const w = (i, t, e, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: t,
      event_type: e,
      event_loc: o
    }), f(`Event: ${i} | ${t} | ${e} | ${o}`, "success");
  }, y = (i) => new Promise((t) => {
    const e = document.querySelector(i);
    e && t(e);
    const o = new MutationObserver(() => {
      const n = document.querySelector(i);
      n && (t(n), o.disconnect());
    });
    o.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), v = ({ name: i, dev: t }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, b = (i, t, e, o, n = 1e3, s = 0.5) => {
    let r, a;
    if (r = new IntersectionObserver(
      function(l) {
        l[0].isIntersecting === !0 ? a = setTimeout(() => {
          w(
            t,
            l[0].target.dataset.visible || o,
            "view",
            e
          ), r.disconnect();
        }, n) : (f("Element is not fully visible", "warn"), clearTimeout(a));
      },
      { threshold: [s] }
    ), typeof i == "string") {
      const l = document.querySelector(i);
      l && r.observe(l);
    } else
      r.observe(i);
  }, f = (i, t = "info") => {
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
    console.log(`%c>>> ${i}`, `${e} font-size: 16px; font-weight: 600`);
  }, x = "", E = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="30"
  viewBox="0 0 30 30"
  fill="none"
>
  <g clip-path="url(#clip0_144_770)">
    <path
      d="M15.7271 7.59283C15.3063 7.59283 14.9652 7.93394 14.9652 8.35476V9.81999C14.9652 10.2408 15.3063 10.5819 15.7271 10.5819C16.1479 10.5819 16.4891 10.2408 16.4891 9.81999V8.35476C16.4891 7.93394 16.1479 7.59283 15.7271 7.59283Z"
      fill="black"
    />
    <path
      d="M15.7271 23.7368C15.3063 23.7368 14.9652 24.0779 14.9652 24.4987V25.964C14.9652 26.3848 15.3063 26.7259 15.7271 26.7259C16.1479 26.7259 16.4891 26.3848 16.4891 25.964V24.4987C16.4891 24.0779 16.1479 23.7368 15.7271 23.7368Z"
      fill="black"
    />
    <path
      d="M24.5307 16.3972H23.0655C22.6447 16.3972 22.3036 16.7383 22.3036 17.1591C22.3036 17.5799 22.6447 17.921 23.0655 17.921H24.5307C24.9516 17.921 25.2927 17.5799 25.2927 17.1591C25.2927 16.7383 24.9516 16.3972 24.5307 16.3972Z"
      fill="black"
    />
    <path
      d="M22.5158 22.8705C22.5078 22.8621 22.4996 22.854 22.4913 22.846L21.455 21.8097C21.1643 21.5055 20.682 21.4945 20.3778 21.7852C20.0736 22.0759 20.0625 22.5582 20.3532 22.8624C20.3612 22.8708 20.3694 22.879 20.3778 22.887L21.414 23.9232C21.7047 24.2274 22.187 24.2385 22.4913 23.9478C22.7955 23.6571 22.8065 23.1748 22.5158 22.8705Z"
      fill="black"
    />
    <path
      d="M22.0595 10.7813C21.7669 10.5127 21.3171 10.514 21.026 10.7841L16.9819 14.8282C15.6931 14.1336 14.0853 14.6152 13.3906 15.904C13.1821 16.2907 13.0731 16.7233 13.0732 17.1626L13.075 17.1591C13.0742 18.6238 14.261 19.8118 15.7257 19.8126C17.1904 19.8133 18.3784 18.6266 18.3792 17.1619C18.3794 16.722 18.2702 16.2891 18.0615 15.9019L22.1055 11.8579C22.3901 11.5479 22.3695 11.0659 22.0595 10.7813ZM15.7271 18.2873C15.104 18.2873 14.5988 17.7822 14.5988 17.1591C14.5995 16.5363 15.1042 16.0315 15.7271 16.0309C16.3502 16.0309 16.8553 16.536 16.8553 17.1591C16.8553 17.7822 16.3502 18.2873 15.7271 18.2873Z"
      fill="black"
    />
    <path
      d="M27.7654 7.82143C28.0561 8.12567 28.5384 8.13669 28.8426 7.84599C29.1469 7.55528 29.1579 7.07299 28.8672 6.76874C28.8592 6.76036 28.851 6.75216 28.8426 6.74419L26.1419 4.04405C25.8377 3.75335 25.3554 3.76437 25.0647 4.06861C24.7833 4.36312 24.7833 4.82678 25.0647 5.12129L25.8799 5.93655L24.2617 7.55476C22.1109 5.63102 19.3706 4.49446 16.4895 4.33124V1.52385H19.1797C19.6005 1.52385 19.9416 1.18274 19.9416 0.761923C19.9416 0.341107 19.6005 0 19.1797 0H12.2749C11.8541 0 11.513 0.341107 11.513 0.761923C11.513 1.18274 11.8541 1.52385 12.2749 1.52385H14.9651V4.33241C11.8246 4.51029 8.86057 5.84242 6.64256 8.07286C6.35185 8.3771 6.36287 8.8594 6.66711 9.1501C6.96163 9.43149 7.42534 9.43149 7.7198 9.1501C12.1425 4.72738 19.3132 4.72732 23.7359 9.14999L23.736 9.1501C28.1516 13.5657 28.1516 20.7507 23.736 25.1663C19.3204 29.5819 12.1354 29.5819 7.7198 25.1663C7.41556 24.8756 6.93326 24.8866 6.64256 25.1909C6.36117 25.4854 6.36117 25.949 6.64256 26.2435C11.6642 31.2576 19.7997 31.2514 24.8137 26.2298C29.6121 21.4241 29.8422 13.7141 25.339 8.63082L26.9578 7.01203L27.7654 7.82143Z"
      fill="black"
    />
    <path
      d="M8.67109 11.5109H1.68368C1.26286 11.5109 0.921753 11.852 0.921753 12.2728C0.921753 12.6936 1.26286 13.0347 1.68368 13.0347H8.67109C9.09191 13.0347 9.43301 12.6936 9.43301 12.2728C9.43301 11.852 9.09191 11.5109 8.67109 11.5109Z"
      fill="black"
    />
    <path
      d="M10.4469 16.3972H3.45894C3.03813 16.3972 2.69702 16.7383 2.69702 17.1591C2.69702 17.5799 3.03813 17.921 3.45894 17.921H10.4469C10.8678 17.921 11.2089 17.5799 11.2089 17.1591C11.2089 16.7383 10.8678 16.3972 10.4469 16.3972Z"
      fill="black"
    />
    <path
      d="M8.67109 21.2828H1.68368C1.26286 21.2828 0.921753 21.6239 0.921753 22.0448C0.921753 22.4656 1.26286 22.8067 1.68368 22.8067H8.67109C9.09191 22.8067 9.43301 22.4656 9.43301 22.0448C9.43301 21.6239 9.09191 21.2828 8.67109 21.2828Z"
      fill="black"
    />
  </g>
  <defs>
    <clipPath id="clip0_144_770">
      <rect width="30" height="30" fill="white" />
    </clipPath>
  </defs>
</svg>`
  ), S = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
>
  <g clip-path="url(#clip0_209_509)">
    <path
      d="M7 0C3.13395 0 0 3.13406 0 7C0 10.8662 3.13395 14 7 14C10.8661 14 14 10.8662 14 7C14 3.13406 10.8661 0 7 0ZM7 3.5C7.48327 3.5 7.875 3.89178 7.875 4.375C7.875 4.85844 7.48327 5.25 7 5.25C6.51673 5.25 6.125 4.85844 6.125 4.375C6.125 3.89178 6.51673 3.5 7 3.5ZM8.3125 10.5H5.6875C5.44589 10.5 5.25 10.3043 5.25 10.0625C5.25 9.82089 5.44589 9.625 5.6875 9.625H6.125V7H5.6875C5.44589 7 5.25 6.80433 5.25 6.5625C5.25 6.32089 5.44589 6.125 5.6875 6.125H7.4375C7.67911 6.125 7.875 6.32089 7.875 6.5625V9.625H8.3125C8.55411 9.625 8.75 9.82089 8.75 10.0625C8.75 10.3043 8.55411 10.5 8.3125 10.5Z"
      fill="#212121"
    />
  </g>
  <defs>
    <clipPath id="clip0_209_509">
      <rect width="14" height="14" fill="white" />
    </clipPath>
  </defs>
</svg>`
  ), D = `.crs-delivery-countdown {
  container-type: inline-size;
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 16px;
  background-color: #fff7ec;
  font-size: 16px;
  line-height: 24px;
}

.crs-delivery-countdown .timer > [class$='-word'] {
  display: none;
}

.crs-delivery-countdown .icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .crs-delivery-countdown br.mob {
  display: none;
}

@container (max-width: 427px) {
  .crs-delivery-countdown br.desc {
    display: none;
  }
  .crs-delivery-countdown br.mob {
    display: block;
  }
} */

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

/* Tooltip styles */
.tooltip-container {
  position: relative;
  display: inline-block;
  margin-left: 6px;
}

.tooltip-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  color: #595959;
  cursor: help;
  transition: color 0.2s ease;
}

.tooltip-icon:hover {
  color: #212121;
}

.tooltip-content {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-80%);
  margin-top: 8px;
  width: 226px;
  padding: 18px 16px;
  background: #fff;
  filter: drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.15));

  color:  #212121;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  line-height: 20px;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 1000;
}

@media (max-width: 768px) {
  .tooltip-content {
   transform: translateX(-88%);
  }
}
.tooltip-content::after {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 80%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-bottom-color: #fff;
}

@media (max-width: 768px) {
  .tooltip-content::after {
    left: 88%;
  }
}
.tooltip-container:hover .tooltip-content {
  opacity: 1;
  visibility: visible;
}

.tooltip-content p {
  margin: 0;
}

.tooltip-nowrap {
  white-space: nowrap;
}
@media (max-width: 768px) {
  .crs-delivery-countdown {
    padding: 6px 12px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
  }

  .crs-delivery-countdown .icon svg {
    width: 24px;
    height: 24px;
  }
}
`, C = {
    // Set to false to use local time instead of UTC
    DEADLINE_HOUR: 15,
    // 15:00 - deadline for orders
    DEADLINE_MINUTES: 60
    // 60 minutes
  };
  class I {
    constructor({ container: t, position: e }) {
      this.staticHour = C.DEADLINE_HOUR, this.staticMinutes = C.DEADLINE_MINUTES, this.container = typeof t == "string" ? document.querySelector(t) : t, this.position = e || "beforeend", this.init();
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
      const t = this.calculateCountdown();
      typeof t == "string" ? this.badgeElement && (this.badgeElement.textContent = t) : this.updateCountdownElements(
        t.hoursText,
        t.hoursWord,
        t.minutesText,
        t.minutesWord,
        t.secondsText,
        t.secondsWord,
        t.deliveryDay
      );
    }
    calculateCountdown() {
      const e = /* @__PURE__ */ new Date(), o = e.getHours(), n = e.getMinutes(), s = e.getSeconds(), r = e.getDay(), a = -1 * (o - this.staticHour), l = n === 0 ? 0 : this.staticMinutes - n, g = s === 0 ? 0 : 60 - s, h = l.toString().padStart(2, "0"), p = g.toString().padStart(2, "0");
      let c, d;
      if (o < this.staticHour && r >= 1 && r <= 5)
        c = (a - (n === 0 && s === 0 ? 0 : 1)).toString().padStart(2, "0"), d = "TODAY";
      else if (o >= this.staticHour && r === 5)
        c = (a + (n === 0 && s === 0 ? 72 : 71)).toString().padStart(2, "0"), d = "on MONDAY";
      else if (o >= this.staticHour && r >= 1 && r <= 4)
        c = (a + (n === 0 && s === 0 ? 24 : 23)).toString().padStart(2, "0"), d = "TOMORROW";
      else if (r === 6)
        c = (a + (n === 0 && s === 0 ? 48 : 47)).toString().padStart(2, "0"), d = "on MONDAY";
      else if (r === 0)
        c = (a + (n === 0 && s === 0 ? 24 : 23)).toString().padStart(2, "0"), d = "on MONDAY";
      else {
        if (o === this.staticHour && r >= 1 && r <= 4)
          return `Order in the next 24 ${this.getHourWord(24)} 00 minutes 00 seconds for dispatch TOMORROW`;
        c = (a + 24).toString().padStart(2, "0"), d = "TOMORROW";
      }
      const m = this.getHourWord(parseInt(c)), T = this.getMinuteWord(parseInt(h)), M = this.getSecondWord(parseInt(p));
      return {
        hoursText: c,
        hoursWord: m,
        minutesText: h,
        minutesWord: T,
        secondsText: p,
        secondsWord: M,
        deliveryDay: d
      };
    }
    getHourWord(t) {
      return t === 1 ? "hour" : "hours";
    }
    getMinuteWord(t) {
      return t === 1 ? "minute" : "minutes";
    }
    getSecondWord(t) {
      return t === 1 ? "second" : "seconds";
    }
    createCountdownElement() {
      this.container && !this.badgeElement && (this.badgeElement = document.createElement("div"), this.badgeElement.className = "crs-delivery-countdown", this.badgeElement.innerHTML = /* HTML */
      `
        <div class="icon">${E}</div>
        <div class="timer-content">
          <span class="text-content">Order in the next</span>
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
            and choose <br class="mob" />
            Next Day Delivery for dispatch
            <span class="tooltip-nowrap">
              <span class="delivery-day highlight">TODAY</span>
              <span class="tooltip-container">
                <span class="tooltip-icon">${S}</span>
                <span class="tooltip-content">
                  <p>Delivery to UK mainland only</p>
                </span>
              </span></span
            >
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
    updateCountdownElements(t, e, o, n, s, r, a) {
      if (this.badgeElement) {
        const l = this.badgeElement.querySelector(".hours"), g = this.badgeElement.querySelector(".hours-word"), h = this.badgeElement.querySelector(".minutes"), p = this.badgeElement.querySelector(".minutes-word"), c = this.badgeElement.querySelector(".seconds"), d = this.badgeElement.querySelector(".seconds-word"), m = this.badgeElement.querySelector(".delivery-day");
        l && (l.textContent = t), g && (g.textContent = e), h && (h.textContent = o), p && (p.textContent = n), c && (c.textContent = s), d && (d.textContent = r), m && (m.textContent = a);
      }
    }
    // Method for cleaning up interval
    destroy() {
      this.intervalId && (clearInterval(this.intervalId), this.intervalId = void 0);
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = D, document.head.appendChild(t);
    }
  }
  const H = `icms-outlet:has(product-view-delivery-coutdown) {
  display: none !important;
}
`;
  (function(i, t, e, o, n, s) {
    i.hj = i.hj || function() {
      (i.hj.q = i.hj.q || []).push(arguments);
    }, i._hjSettings = { hjid: 2667925, hjsv: 6 }, n = t.getElementsByTagName("head")[0], s = t.createElement("script"), s.async = !0, s.src = e + i._hjSettings.hjid + o + i._hjSettings.hjsv, n && n.appendChild(s);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_delivery");
  const u = {
    // Set to false to use local time instead of UTC
    DAILY_CUTOFF_HOUR: 15,
    // 3:00 PM cutoff for daily orders
    WEEKLY_START_HOUR: 5
    // 5:00 AM Monday start time
  };
  class _ {
    constructor() {
      this.init();
    }
    init() {
      this.checkIsPdpPage().then((t) => {
        t && (this.addStyles(), y("footer").then(() => {
          this.addDeliveryBadge();
        }));
      });
    }
    async checkIsPdpPage() {
      return !!await y("product-view");
    }
    async addDeliveryBadge() {
      if (!this.shouldShowDeliveryBadge()) {
        console.log("Delivery badge hidden due to time restrictions");
        return;
      }
      const t = await y("product-view-add-to-basket"), e = document.querySelector(".crs-delivery-countdown");
      e && e.remove(), this.deliveryBadgeInstance = new I({
        container: t,
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
      const t = document.querySelector(".crs-delivery-countdown");
      t && t.remove();
    }
    destroy() {
      this.hideDeliveryBadge();
    }
    shouldShowDeliveryBadge() {
      const e = /* @__PURE__ */ new Date(), o = e.getHours(), n = e.getDay();
      return n === 0 || n === 6 ? !1 : n === 1 ? o >= u.WEEKLY_START_HOUR && o < u.DAILY_CUTOFF_HOUR : n >= 2 && n <= 4 || n === 5 ? o < u.DAILY_CUTOFF_HOUR : !1;
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = H, document.head.appendChild(t);
    }
  }
  v({ name: "Delivery urgency and date", dev: "OS" });
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
      new _();
    }
    pageChangeHandler(t) {
      let e = window.location.pathname;
      new MutationObserver((n) => {
        n.forEach((s) => {
          e !== window.location.pathname && (t(), e = window.location.pathname);
        });
      }).observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = x, document.head.appendChild(t);
    }
  }
  new O();
})();
