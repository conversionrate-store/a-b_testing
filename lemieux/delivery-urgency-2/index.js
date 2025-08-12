(function() {
  "use strict";
  const p = (s, e, n, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: e,
      event_type: n,
      event_loc: t
    }), g(`Event: ${s} | ${e} | ${n} | ${t}`, "success");
  }, u = (s) => new Promise((e) => {
    const n = document.querySelector(s);
    n && e(n);
    const t = new MutationObserver(() => {
      const i = document.querySelector(s);
      i && (e(i), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), v = ({ name: s, dev: e }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, m = (s, e, n, t, i = 1e3, o = 0.5) => {
    let a, l;
    if (a = new IntersectionObserver(
      function(r) {
        r[0].isIntersecting === !0 ? l = setTimeout(() => {
          p(
            e,
            r[0].target.dataset.visible || t,
            "view",
            n
          ), a.disconnect();
        }, i) : (g("Element is not fully visible", "warn"), clearTimeout(l));
      },
      { threshold: [o] }
    ), typeof s == "string") {
      const r = document.querySelector(s);
      r && a.observe(r);
    } else
      a.observe(s);
  }, g = (s, e = "info") => {
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
    console.log(`%c>>> ${s}`, `${n} font-size: 16px; font-weight: 600`);
  }, y = (
    /* HTML */
    `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
<g clip-path="url(#clip0_294_258)">
  <path d="M22.0179 10.63C21.4287 10.63 20.9512 11.1076 20.9512 11.6967V13.748C20.9512 14.3372 21.4287 14.8147 22.0179 14.8147C22.607 14.8147 23.0846 14.3372 23.0846 13.748V11.6967C23.0846 11.1076 22.607 10.63 22.0179 10.63Z" fill="black"/>
  <path d="M22.0179 33.2316C21.4287 33.2316 20.9512 33.7091 20.9512 34.2983V36.3496C20.9512 36.9387 21.4287 37.4163 22.0179 37.4163C22.607 37.4163 23.0846 36.9387 23.0846 36.3496V34.2983C23.0846 33.7091 22.607 33.2316 22.0179 33.2316Z" fill="black"/>
  <path d="M34.3436 22.9561H32.2923C31.7031 22.9561 31.2256 23.4336 31.2256 24.0227C31.2256 24.6119 31.7031 25.0894 32.2923 25.0894H34.3436C34.9327 25.0894 35.4103 24.6119 35.4103 24.0227C35.4103 23.4336 34.9327 22.9561 34.3436 22.9561Z" fill="black"/>
  <path d="M31.5223 32.0188C31.5111 32.007 31.4996 31.9956 31.4879 31.9844L30.0372 30.5337C29.6302 30.1077 28.955 30.0923 28.529 30.4993C28.1031 30.9063 28.0877 31.5815 28.4947 32.0074C28.5058 32.0192 28.5173 32.0306 28.529 32.0418L29.9797 33.4925C30.3867 33.9184 31.0619 33.9339 31.4879 33.5269C31.9138 33.1199 31.9292 32.4447 31.5223 32.0188Z" fill="black"/>
  <path d="M30.8835 15.0939C30.4739 14.7178 29.8441 14.7196 29.4365 15.0978L23.7749 20.7595C21.9706 19.787 19.7195 20.4613 18.7471 22.2656C18.4552 22.8071 18.3025 23.4126 18.3027 24.0277L18.3052 24.0228C18.3041 26.0733 19.9655 27.7366 22.0161 27.7376C24.0667 27.7387 25.7299 26.0773 25.731 24.0267C25.7313 23.4109 25.5785 22.8048 25.2863 22.2627L30.948 16.601C31.3463 16.1671 31.3174 15.4923 30.8835 15.0939ZM22.0181 25.6023C21.1458 25.6023 20.4386 24.8951 20.4386 24.0228C20.4395 23.1508 21.1461 22.4441 22.0181 22.4432C22.8904 22.4432 23.5976 23.1504 23.5976 24.0228C23.5976 24.8951 22.8904 25.6023 22.0181 25.6023Z" fill="black"/>
  <path d="M38.8713 10.95C39.2783 11.3759 39.9535 11.3914 40.3795 10.9844C40.8054 10.5774 40.8208 9.90218 40.4139 9.47624C40.4027 9.46451 40.3912 9.45302 40.3795 9.44186L36.5985 5.66167C36.1725 5.25469 35.4973 5.27011 35.0903 5.69605C34.6964 6.10837 34.6964 6.75749 35.0903 7.16981L36.2317 8.31117L33.9662 10.5767C30.955 7.88343 27.1186 6.29225 23.0851 6.06373V2.13338H26.8514C27.4405 2.13338 27.9181 1.65583 27.9181 1.06669C27.9181 0.47755 27.4405 0 26.8514 0H17.1847C16.5955 0 16.118 0.47755 16.118 1.06669C16.118 1.65583 16.5955 2.13338 17.1847 2.13338H20.9509V6.06537C16.5542 6.3144 12.4046 8.17939 9.29936 11.302C8.89238 11.7279 8.9078 12.4032 9.33374 12.8101C9.74606 13.2041 10.3953 13.2041 10.8075 12.8101C16.9993 6.61833 27.0382 6.61825 33.23 12.81L33.2302 12.8101C39.4121 18.992 39.4121 29.0509 33.2302 35.2328C27.0483 41.4147 16.9894 41.4147 10.8075 35.2328C10.3816 34.8258 9.70634 34.8413 9.29936 35.2672C8.90542 35.6795 8.90542 36.3286 9.29936 36.741C16.3297 43.7606 27.7193 43.7519 34.739 36.7217C41.4567 29.9937 41.7789 19.1998 35.4743 12.0832L37.7406 9.81685L38.8713 10.95Z" fill="black"/>
  <path d="M12.1391 16.1152H2.35673C1.76759 16.1152 1.29004 16.5928 1.29004 17.1819C1.29004 17.7711 1.76759 18.2486 2.35673 18.2486H12.1391C12.7283 18.2486 13.2058 17.7711 13.2058 17.1819C13.2058 16.5928 12.7283 16.1152 12.1391 16.1152Z" fill="black"/>
  <path d="M14.6253 22.9561H4.84208C4.25294 22.9561 3.77539 23.4336 3.77539 24.0227C3.77539 24.6119 4.25294 25.0894 4.84208 25.0894H14.6253C15.2144 25.0894 15.692 24.6119 15.692 24.0227C15.692 23.4336 15.2144 22.9561 14.6253 22.9561Z" fill="black"/>
  <path d="M12.1391 29.796H2.35673C1.76759 29.796 1.29004 30.2736 1.29004 30.8627C1.29004 31.4519 1.76759 31.9294 2.35673 31.9294H12.1391C12.7283 31.9294 13.2058 31.4519 13.2058 30.8627C13.2058 30.2736 12.7283 29.796 12.1391 29.796Z" fill="black"/>
</g>
<defs>
  <clipPath id="clip0_294_258">
    <rect width="42" height="42" fill="white"/>
  </clipPath>
</defs>
</svg>`
  ), w = (
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
  ), C = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
>
  <path
    d="M12 1.2L10.8 0L6 4.8L1.2 0L0 1.2L4.8 6L0 10.8L1.2 12L6 7.2L10.8 12L12 10.8L7.2 6L12 1.2Z"
    fill="black"
  />
</svg>`
  ), x = `.crs-delivery-countdown {
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

.crs-delivery-countdown .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
}

.timer-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.crs-delivery-countdown .text-content {
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  color: #212121;
  font-size: 16px;
  line-height: 24px;
}

.crs-delivery-countdown .text-content .highlight {
  font-weight: 700;
  text-transform: none;
}

.crs-delivery-countdown .timer {
  display: flex;
  gap: 4px;
  align-items: center;
}

.crs-delivery-countdown .time-box {
  background-color: #ffffff;
  border: 1px solid #cfd2d3;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px 9px;
  width: 40px;
  height: 40px;
  position: relative;
}

.crs-delivery-countdown .time-value {
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #212121;
  text-align: center;
}

.crs-delivery-countdown .time-label {
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #595959;
  text-align: center;
}

/* Tooltip styles */
.tooltip-container {
  position: relative;
  display: inline-block;
  margin-left: 4px;
  vertical-align: middle;
}

.tooltip-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  color: #595959;
  cursor: pointer;
  transition: color 0.2s ease;
  border-radius: 2px;
}

.tooltip-icon:hover {
  color: #212121;
  background-color: #f0f0f0;
}

.tooltip-body {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 266px;
  background: #fff;
  filter:drop-shadow(0 4px 8px rgba(0, 0, 0, 0.25));
  border: 1px solid #cfd2d3;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 1000;
}

.tooltip-content {
  position: relative;
  background: #fff;
  padding: 12px;
  padding-right: 24px;
}

.tooltip-close {
  position: absolute;
  top: 7px;
  right: 7px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  width: 12px;
  height: 12px;
}

.tooltip-close svg {
  width: 12px;
  height: 12px;
}

.tooltip-body.active {
  visibility: visible;
  opacity: 1;
}

.tooltip-content p {
  margin: 0;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  white-space: normal;
}

@media (max-width: 768px) {
  .tooltip-body {
    transform: translateX(-88%);
    width: 240px;
  }

  .tooltip-content p {
    font-size: 13px;
    line-height: 18px;
  }

  .tooltip-close {
    top: 6px;
    right: 6px;
    width: 18px;
    height: 18px;
    padding: 3px;
  }

  .tooltip-close svg {
    width: 10px;
    height: 10px;
  }
}

.tooltip-content::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 8px solid transparent;
  border-top-color: #fff;
  filter: drop-shadow(1px 1px 0px #cfd2d3) drop-shadow(-1px 0px 0px #cfd2d3);
  z-index: 1000;
}

@media (max-width: 768px) {
  .tooltip-content::after {
    left: 88%;
  }
}

.tooltip-nowrap {
  white-space: nowrap;
}


`, f = {
    // Set to false to use local time instead of UTC
    DEADLINE_HOUR: 14,
    // 14:00 - deadline for orders
    DEADLINE_MINUTES: 60
    // 60 minutes
  };
  class b {
    constructor({ container: e, position: n }) {
      this.staticHour = f.DEADLINE_HOUR, this.staticMinutes = f.DEADLINE_MINUTES, this.container = typeof e == "string" ? document.querySelector(e) : e, this.position = n || "beforeend", this.init();
    }
    init() {
      this.container && (this.createCountdownElement(), this.updateCountdown(), this.startCountdownTimer(), this.addStyles());
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
        e.minutesText,
        e.secondsText,
        e.deliveryDay
      );
    }
    calculateCountdown() {
      const n = /* @__PURE__ */ new Date(), t = n.getHours(), i = n.getMinutes(), o = n.getSeconds(), a = n.getDay(), l = -1 * (t - this.staticHour), r = i === 0 ? 0 : this.staticMinutes - i, _ = o === 0 ? 0 : 60 - o, D = r.toString().padStart(2, "0"), k = _.toString().padStart(2, "0");
      let c, d;
      if (t < this.staticHour && a >= 1 && a <= 5)
        c = (l - (i === 0 && o === 0 ? 0 : 1)).toString().padStart(2, "0"), d = "TODAY";
      else if (t >= this.staticHour && a === 5)
        c = (l + (i === 0 && o === 0 ? 72 : 71)).toString().padStart(2, "0"), d = "on MONDAY";
      else if (t >= this.staticHour && a >= 1 && a <= 4)
        c = (l + (i === 0 && o === 0 ? 24 : 23)).toString().padStart(2, "0"), d = "TOMORROW";
      else if (a === 6)
        c = (l + (i === 0 && o === 0 ? 48 : 47)).toString().padStart(2, "0"), d = "on MONDAY";
      else if (a === 0)
        c = (l + (i === 0 && o === 0 ? 24 : 23)).toString().padStart(2, "0"), d = "on MONDAY";
      else {
        if (t === this.staticHour && a >= 1 && a <= 4)
          return "Order in the next 24 hours 00 minutes 00 seconds for dispatch TOMORROW";
        c = (l + 24).toString().padStart(2, "0"), d = "TOMORROW";
      }
      return {
        hoursText: c,
        minutesText: D,
        secondsText: k,
        deliveryDay: d
      };
    }
    createCountdownElement() {
      this.container && !this.badgeElement && (this.badgeElement = document.createElement("div"), this.badgeElement.className = "crs-delivery-countdown", this.badgeElement.innerHTML = /* HTML */
      `
        <div class="icon">${y}</div>
        <div class="timer-content">
          <span class="text-content">Order in the next</span>
          <div class="timer">
            <div class="time-box">
              <span class="time-value hours">00</span>
              <span class="time-label hours-word">hours</span>
            </div>
            <div class="time-box">
              <span class="time-value minutes">00</span>
              <span class="time-label minutes-word">mins</span>
            </div>
            <div class="time-box">
              <span class="time-value seconds">00</span>
              <span class="time-label seconds-word">secs</span>
            </div>
          </div>
          <span class="text-content">
            To get it by
            <span class="tooltip-nowrap">
              <span class="delivery-day highlight">tomorrow</span>
              <span class="tooltip-container">
                <span class="tooltip-icon">${w}</span>
                <div class="tooltip-body">
                  <div class="tooltip-content">
                    <button class="tooltip-close" aria-label="Close tooltip">
                      ${C}
                    </button>
                    <p>
                      Place your order now and choose next day delivery to
                      ensure dispatch today and delivery by tomorrow.
                    </p>
                  </div>
                </div>
              </span>
            </span>
          </span>
        </div>
      `, this.container.insertAdjacentElement(this.position, this.badgeElement), this.setupTooltipClick(), m(
        this.badgeElement,
        "exp_delivery_view_01",
        "PDP",
        "Visibility",
        0
      ));
    }
    setupTooltipClick() {
      if (!this.badgeElement) return;
      const e = this.badgeElement.querySelector(".tooltip-container"), n = this.badgeElement.querySelector(".tooltip-icon"), t = this.badgeElement.querySelector(".tooltip-body"), i = this.badgeElement.querySelector(".tooltip-close");
      !e || !n || !t || !i || (n.addEventListener("click", (o) => {
        o.stopPropagation(), (t == null ? void 0 : t.classList.contains("active")) ? (t == null || t.classList.remove("active"), p("exp_delivery_click_2", "Hide tooltip", "click", "PDP")) : (t == null || t.classList.add("active"), p("exp_delivery_click_1", "Show tooltip", "click", "PDP"));
      }), i.addEventListener("click", (o) => {
        o.stopPropagation(), t == null || t.classList.remove("active"), p("exp_delivery_click_2", "Hide tooltip", "click", "PDP");
      }), document.addEventListener("click", (o) => {
        e.contains(o.target) || t != null && t.classList.contains("active") && (t == null || t.classList.remove("active"), p("exp_delivery_click_2", "Hide tooltip", "click", "PDP"));
      }), document.addEventListener("keydown", (o) => {
        o.key === "Escape" && (t != null && t.classList.contains("active")) && (t.classList.remove("active"), p("exp_delivery_click_2", "Hide tooltip", "click", "PDP"));
      }));
    }
    updateCountdownElements(e, n, t, i) {
      if (this.badgeElement) {
        const o = this.badgeElement.querySelector(".hours"), a = this.badgeElement.querySelector(".minutes"), l = this.badgeElement.querySelector(".seconds");
        this.badgeElement.querySelector(".delivery-day"), o && (o.textContent = e), a && (a.textContent = n), l && (l.textContent = t);
      }
    }
    // Method for cleaning up interval
    destroy() {
      this.intervalId && (clearInterval(this.intervalId), this.intervalId = void 0);
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = x, document.head.appendChild(e);
    }
  }
  const E = `icms-outlet:has(product-view-delivery-coutdown) {
  display: none !important;
}
`, h = {
    // Set to false to use local time instead of UTC
    DAILY_CUTOFF_HOUR: 14,
    // 2:00 PM cutoff for daily orders
    WEEKLY_START_HOUR: 5
    // 5:00 AM Monday start time
  };
  class S {
    constructor() {
      this.init();
    }
    init() {
      this.checkIsPdpPage().then((e) => {
        e && (this.addStyles(), u("footer").then(() => {
          this.addDeliveryBadge();
        }));
      });
    }
    async checkIsPdpPage() {
      return !!await u("product-view");
    }
    async addDeliveryBadge() {
      if (!this.shouldShowDeliveryBadge()) {
        console.log("Delivery badge hidden due to time restrictions");
        return;
      }
      const e = await u("product-view-add-to-basket"), n = document.querySelector(".crs-delivery-countdown");
      n && n.remove(), this.deliveryBadgeInstance = new b({
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
      const n = /* @__PURE__ */ new Date(), t = n.getHours(), i = n.getDay();
      return i === 0 || i === 6 ? !1 : i === 1 ? t >= h.WEEKLY_START_HOUR && t < h.DAILY_CUTOFF_HOUR : i >= 2 && i <= 4 || i === 5 ? t < h.DAILY_CUTOFF_HOUR : !1;
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = E, document.head.appendChild(e);
    }
  }
  v({ name: "2nd iteration Delivery urgency and date", dev: "OS" }), function(s, e, n, t, i, o) {
    s.hj = s.hj || function() {
      (s.hj.q = s.hj.q || []).push(arguments);
    }, s._hjSettings = { hjid: 2667925, hjsv: 6 }, i = e.getElementsByTagName("head")[0], o = e.createElement("script"), o.async = !0, o.src = n + s._hjSettings.hjid + t + s._hjSettings.hjsv, i && i.appendChild(o);
  }(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_delivery");
  class L {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.pageChangeHandler(() => {
        this.initChanges();
      }), this.initChanges();
    }
    initChanges() {
      window.autoInitData.website.defaultCountry === "GB" && new S();
    }
    pageChangeHandler(e) {
      let n = window.location.pathname;
      new MutationObserver((i) => {
        i.forEach((o) => {
          n !== window.location.pathname && (e(), n = window.location.pathname);
        });
      }).observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = "", document.head.appendChild(e);
    }
  }
  new L();
})();
