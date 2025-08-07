(function() {
  "use strict";
  const h = (r) => new Promise((n) => {
    const t = document.querySelector(r);
    t && n(t);
    const e = new MutationObserver(() => {
      const i = document.querySelector(r);
      i && (n(i), e.disconnect());
    });
    e.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), f = ({ name: r, dev: n }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, u = (r) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, y = (r, n = "info") => {
    let t;
    switch (n) {
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
    console.log(`%c>>> ${r}`, `${t} font-size: 16px; font-weight: 600`);
  }, _ = `.outer-layout__main.container-fluid:not(
    :has(.signup-ccr-flow__hidden-item:first-child)
  ),
.signup-ccr-flow:not(:has(.signup-ccr-flow__hidden-item:first-child)) {
  max-width: 1440px;
}

.outer-layout__main.container-fluid:not(:has(.signup-ccr-flow__hidden-item:first-child)) {
  padding-inline: 40px;
}

.signup-ccr-flow > div:not(.signup-ccr-flow__hidden-item):first-child {
  display: flex;
  gap: 23px;
}
.signup-payment-details-description {
  width: 100%;
  max-width: 480px;
  margin-inline: auto;
}

.signup-payment-details-description > h3 + p,
.signup-payment-details-description .signup-payment-details-description__title,
.signup-payment-details-description
  .signup-payment-details-description__feature-list,
.signup-payment-details-description
  .signup-payment-details-description__delimiter,
.signup-payment-details-description
  .signup-payment-details-description__delimiter
  + p,
.signup-payment-details-description
  .btn.btn_primary:not(#crs-try-free-for-7-days-button) {
  display: none;
}

.crs-signup-payment-details-description__welcome-text {
  padding-block: 16px;
  color: #929294;
  font-size: 16px;
  font-weight: 450;
  line-height: 24px;
}

.crs-signup-payment-details-description__welcome-text .highlight {
  color: #26262b;
  font-weight: 700;
}

.signup-payment-details-description h3 {
  margin: 0;
  margin-top: 16px;
  color: #26262b;
  font-size: 36px;
  font-weight: 700;
  line-height: 50px;
}

.crs-signup-payment-details-description__list {
  margin: 0;
  margin-top: 24px;
  display: grid;
  gap: 18px;
  padding: 0;
  list-style: none;
  color: #26262b;
  font-size: 18px;
  font-weight: 450;
  line-height: 1;
}
.crs-signup-payment-details-description__item {
  display: flex;
  align-items: flex-start;
  gap: 13px;
}

.crs-signup-payment-details-description__item::before {
  content: '';
  width: 16px;
  height: 17px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M1.26478 9.94333C0.882019 9.56051 0.666992 9.04134 0.666992 8.5C0.666992 7.95865 0.882019 7.43948 1.26478 7.05666L6.55678 1.76466C6.93959 1.3819 7.45877 1.16688 8.00011 1.16688C8.54145 1.16688 9.06063 1.3819 9.44344 1.76466L14.7354 7.05666C15.1182 7.43948 15.3332 7.95865 15.3332 8.5C15.3332 9.04134 15.1182 9.56051 14.7354 9.94333L9.44344 15.2353C9.06063 15.6181 8.54145 15.8331 8.00011 15.8331C7.45877 15.8331 6.93959 15.6181 6.55678 15.2353L1.26478 9.94333Z" fill="%2326262B"/></svg>');
}

/* Pricing Breakdown Component Styles */
.crs-pricing-breakdown {
  margin-top: 36px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.crs-pricing-breakdown__row {
  display: flex;
  flex-direction: row;
  gap: 24px;
  height: 21px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 6px 0 0;
  color: #26262b;
  font-family: 'Avenir Next Cyr', sans-serif;
  font-size: 16px;
  line-height: normal;
  text-align: left;
}

.crs-pricing-breakdown__row--secondary {
  opacity: 0.5;
  font-weight: 400;
}

.crs-pricing-breakdown__label {
  flex: 1;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  color: #26262b;
  text-align: left;
}

.crs-pricing-breakdown__price {
  display: flex;
  justify-content: center;
  font-size: 20px;
  line-height: 30.6px;
  text-align: center;
  white-space: nowrap;
  font-weight: 700;
  color: #26262b;
}

.crs-pricing-breakdown__row--secondary .crs-pricing-breakdown__price {
  font-size: 16px;
  font-weight: 400;
}

.signup-payment-details-description .price-plan-switcher__wrapper {
  margin-top: 36px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 16px;
}

.signup-payment-details-description .price-plan-switcher {
  position: relative;
}

.signup-payment-details-description .price-plan-switcher__label {
  display: flex;
  flex-wrap: nowrap;
  gap: 6px;
  padding: 8px 16px;
}

.signup-payment-details-description .price-plan-switcher__wrapper p {
  grid-column: 1 / 3;
  grid-row: 1;
}

.signup-payment-details-description .price-plan-switcher__text-wrapper > p.text_md:first-child {
  display: none;
}

.signup-payment-details-description .price-plan-switcher__text-wrapper:first-child {
  flex-direction: column;
  align-items: flex-start;
  width: max-content;
  margin: 0;
}

.signup-payment-details-description .price-plan-switcher__text-wrapper:first-child h4:first-child {
  color: #26262b;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
}
.signup-payment-details-description .price-plan-switcher__text-wrapper:first-child h4:last-child {
  margin-top: 14px;
  color: #929294;
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: 14px;
}

.signup-payment-details-description .price-plan-switcher__text-wrapper:last-child p:last-child {
  position: absolute;
  top: 8px;
  right: 10px;
  padding: 4px 8px;
  border-radius: 6px;
  background: #479a94;
  color: #fff;
  font-size: 14px;
  font-weight: 450;
  line-height: 20px; /* 142.857% */
}

/* Trial Description Component Styles */
.crs-trial-description {
  position: relative;

  background: #1a1a1d;
  border-radius: 20px;
  padding: 0 20px 64px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  overflow: hidden;
  width: 100%;
  max-width: 674px;
  box-sizing: border-box;
}

.crs-trial-description > *:not(.crs-trial-description__background) {
  max-width: 439px;
}

.crs-trial-description__background {
  filter: drop-shadow(3px 1px 20px rgba(255, 255, 255, 0.15));
  pointer-events: none;
}

.crs-trial-description__union-bg {
}

.crs-trial-description__group-bg {
  display: flex;
  justify-content: center;
  margin-top: -77px;
}

.crs-trial-description__title {
  font-weight: 600;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  color: #ffffff;
  margin: 0;
  z-index: 1;
  position: relative;
}

.crs-trial-description__steps {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 0;
  position: relative;
  z-index: 1;
}

.crs-trial-step {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
  position: relative;
}

.crs-trial-step__icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  flex-shrink: 0;
  height: 100%;
}

.crs-trial-step__icon {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 48px;
  padding: 12px;
  padding-top: 4px;
}

.crs-trial-step__vertical-connector {
  width: 48px;
  height: calc(100% - 34px - 8px);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  position: relative;
  flex-shrink: 0;
}

.crs-trial-step__vertical-connector::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 2px;
  height: 100%;
  background: #c8dee8;
  transform: translateX(-50%);
}

.crs-trial-step:first-child .crs-trial-step__vertical-connector::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 2px;
  height: 80%;
  background: #e6c3a5;
  transform: translateX(-50%);
  z-index: 2;
}

.crs-trial-step__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 0;
  min-height: 0;
  text-align: left;
  color: #ffffff;
}

.crs-trial-step__title {
  font-family: 'Avenir Next Cyr', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;
  text-transform: capitalize;
}

.crs-trial-step__description {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;
  padding-bottom: 40px;
  text-transform: capitalize;
}

.crs-trial-step:last-child .crs-trial-step__description {
  padding-bottom: 0;
}

.crs-trial-description__floating-element {
  position: absolute;
  bottom: 74.78%;
  left: 43.03%;
  right: 43.03%;
  top: 11.45%;
  pointer-events: none;
}

.crs-trial-description__floating-element::before {
  content: '';
  position: absolute;
  bottom: -73.82%;
  left: -70.35%;
  right: -70.35%;
  top: -65.26%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0 0h100v100H0z" fill="none"/></svg>');
}
`, w = "https://conversionrate-store.github.io/a-b_images/setapp/", g = ({
    eventCategory: r,
    eventAction: n,
    eventLabel: t
  }) => {
    const e = {
      eventCategory: r,
      eventAction: n,
      eventLabel: t
    }, i = {
      event: "crs-setapp",
      ...e,
      eventLabel2: "",
      //cd8
      eventValue: "",
      eventNonInteraction: !0,
      intercomLoaded: !0
    };
    window.dataLayer.push(i), y("Data pushed to dataLayer", "info"), console.table(e);
  };
  class x {
    constructor() {
      this.init(), this.paymentDetailsElement = null;
    }
    async init() {
      try {
        await this.checkPaymentDetailsPage(), this.addStyles(), this.changeTitle(), this.updatePriceTexts(), this.addPricingBreakdown(), this.addTrialDescription(), this.addDescriptionList(), this.changeCTAButtonText(), this.addWelcomeText(), this.changePricePlanTitleText();
      } catch (n) {
        const t = n instanceof Error ? n.message : "Unknown error";
        console.error(t);
      }
    }
    async checkPaymentDetailsPage() {
      var t;
      if (this.paymentDetailsElement = await h(
        "div.signup-payment-details-description"
      ), ((t = this.paymentDetailsElement) == null ? void 0 : t.querySelector(
        "h3"
      )).textContent !== "Customize your plan")
        throw new Error("Not target language");
    }
    addWelcomeText() {
      const n = sessionStorage.getItem("crs-user-name"), t = (
        /* HTML */
        `
      <div
        class="crs-signup-payment-details-description__welcome-text"
        style="${n ? "" : "visibility: hidden;"}"
      >
        👋 <span class="highlight">Welcome, ${n}!</span> You've just
        unlocked 260+ premium Mac apps. Just activate your trial to start
        enjoying it all.
      </div>
    `
      );
      this.paymentDetailsElement && this.paymentDetailsElement.insertAdjacentHTML("afterbegin", t);
    }
    changeTitle() {
      var t;
      const n = (t = this.paymentDetailsElement) == null ? void 0 : t.querySelector(
        "h3"
      );
      n && (n.textContent = "Try free for 7 days");
    }
    changePricePlanTitleText() {
      var t;
      const n = (t = this.paymentDetailsElement) == null ? void 0 : t.querySelector(
        ".price-plan-switcher__wrapper > p"
      );
      n && n.textContent === "Billing period" && (n.textContent = "Choose your plan after 7 days free trial:");
    }
    updatePriceTexts() {
      document.querySelectorAll(".price-plan-switcher h4").forEach((t) => {
        const e = t.textContent;
        if (e && e.includes("/mo")) {
          const i = e.match(/\$[\d.]+/);
          if (i) {
            const c = i[0];
            t.textContent = `${c}/month after trial`;
          }
        }
      });
    }
    addPricingBreakdown() {
      var o;
      const n = document.querySelectorAll(".price-plan-switcher h4");
      let t = "$", e = "0";
      n.forEach((d) => {
        const a = d.textContent;
        if (a && a.includes("/month after trial")) {
          const s = a.match(/^([€$£¥])/), l = a.match(/[€$£¥]\s*([\d.]+)/);
          s && (t = s[1]), l && (e = l[1]);
        }
      });
      const i = document.querySelector(
        ".price-plan-switcher__input:checked"
      );
      if (i) {
        const d = document.querySelector(
          `label[for="${i.id}"]`
        );
        if (d) {
          const a = d.querySelector("h4:last-child");
          if (a) {
            const s = a.textContent;
            if (s && s.includes("/month after trial")) {
              const l = s.match(/[€$£¥]\s*([\d.]+)/);
              l && (e = l[1]);
            }
          }
        }
      }
      const c = (
        /* HTML */
        `
      <div class="crs-pricing-breakdown">
        <div class="crs-pricing-breakdown__row">
          <div class="crs-pricing-breakdown__label">Today you pay:</div>
          <div class="crs-pricing-breakdown__price">
            <span class="crs-pricing-breakdown__currency"
              >${t}</span
            >
            <span class="crs-pricing-breakdown__amount"> 0</span>
          </div>
        </div>
        <div
          class="crs-pricing-breakdown__row crs-pricing-breakdown__row--secondary"
        >
          <div class="crs-pricing-breakdown__label">After 7 days:</div>
          <div class="crs-pricing-breakdown__price">
            ${t} ${e}
          </div>
        </div>
      </div>
    `
      ), p = (o = this.paymentDetailsElement) == null ? void 0 : o.querySelector(
        ".price-plan-switcher__wrapper"
      );
      p && p.insertAdjacentHTML("afterend", c), this.addPlanChangeListeners();
    }
    addPlanChangeListeners() {
      document.querySelectorAll(
        ".price-plan-switcher__input"
      ).forEach((t) => {
        t.addEventListener("change", () => {
          this.updatePricingBreakdown();
        });
      });
    }
    updatePricingBreakdown() {
      const n = document.querySelector(".crs-pricing-breakdown");
      if (!n) return;
      const t = document.querySelector(
        ".price-plan-switcher__input:checked"
      );
      let e = "$", i = "0";
      if (t) {
        const o = document.querySelector(
          `label[for="${t.id}"]`
        );
        if (o) {
          const a = o.querySelector("h4:last-child");
          if (a) {
            const s = a.textContent;
            if (s && s.includes("/month after trial")) {
              const l = s.match(/^([€$£¥])/), m = s.match(/[€$£¥]\s*([\d.]+)/);
              l && (e = l[1]), m && (i = m[1]);
            }
          }
        }
        let d = "Unknown";
        if (t) {
          const a = document.querySelector(
            `label[for="${t.id}"]`
          );
          if (a) {
            const s = a.querySelector("h4:first-child");
            s && (d = s.textContent || "Unknown");
          }
        }
        g({
          eventCategory: "Payment Info",
          eventAction: "Select Plan",
          eventLabel: d
        });
      }
      const c = n.querySelector(
        ".crs-pricing-breakdown__currency"
      ), p = n.querySelector(
        ".crs-pricing-breakdown__row--secondary .crs-pricing-breakdown__price"
      );
      c && (c.textContent = e), p && (p.textContent = `${e} ${i}`);
    }
    changeCTAButtonText() {
      var t, e;
      const n = (t = this.paymentDetailsElement) == null ? void 0 : t.querySelector(
        ".btn.btn_primary"
      );
      if (n && n.textContent === "Start your 7-day trial") {
        n.insertAdjacentHTML(
          "afterend",
          /* HTML */
          `
        <button
          id="crs-try-free-for-7-days-button"
          class="btn btn_primary btn_lg mb-6 btn_block"
        >
          Try free for 7 days
        </button>
      `
        );
        const c = (e = this.paymentDetailsElement) == null ? void 0 : e.querySelector(
          "#crs-try-free-for-7-days-button"
        );
        c && c.addEventListener("click", () => {
          n.click(), g({
            eventCategory: "Payment Info",
            eventAction: "Try Free for 7 Days",
            eventLabel: ""
          });
        });
      }
    }
    addDescriptionList() {
      var e;
      const n = (
        /* HTML */
        `
      <ul class="crs-signup-payment-details-description__list">
        <li class="crs-signup-payment-details-description__item">
          Cancel anytime
        </li>
        <li class="crs-signup-payment-details-description__item">
          No charges during trial
        </li>
        <li class="crs-signup-payment-details-description__item">
          Two email reminders before trial ends
        </li>
      </ul>
    `
      ), t = (e = this.paymentDetailsElement) == null ? void 0 : e.querySelector(
        ".price-plan-switcher__wrapper"
      );
      t && t.insertAdjacentHTML("beforebegin", n);
    }
    addTrialDescription() {
      var o;
      const n = /* @__PURE__ */ new Date();
      n.setDate(n.getDate() + 7);
      const e = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ][n.getMonth()], i = n.getDate(), c = `${e} ${i}`, p = (
        /* HTML */
        `
      <div class="crs-trial-description">
        <div class="crs-trial-description__background">
          <div class="crs-trial-description__union-bg">
            <img
              src="${w}/apps_2.webp"
              width="582"
              height="155"
              alt=""
            />
          </div>
          <div class="crs-trial-description__group-bg">
            <img
              class="header__logo"
              src="https://cdn.setapp.com/master-018eb79b0070cf30cee194554fa9d6162d278581-770/static/main/images/components/logo/setapp-icon.svg"
              alt="Setapp logo"
              width="95"
              height="95"
            />
          </div>
        </div>

        <div class="crs-trial-description__title">How 7 days trial works?</div>

        <div class="crs-trial-description__steps">
          <div class="crs-trial-step">
            <div class="crs-trial-step__icon-wrapper">
              <div class="crs-trial-step__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                >
                  <path
                    d="M1.41406 17.0465C1.41406 17.6189 1.79565 18.0005 2.36805 18.0005H9.40609V9.05449H1.41406V17.0465Z"
                    fill="#E6C3A5"
                  />
                  <path
                    d="M10.5938 18.0005H17.6317C18.2041 18.0005 18.5857 17.6189 18.5857 17.0465V9.05449H10.5938V18.0005Z"
                    fill="#E6C3A5"
                  />
                  <path
                    d="M0.459961 4.64364V6.91165C0.459961 7.48406 0.841547 7.86564 1.41395 7.86564H9.76598V3.68965H1.41395C0.841547 3.68965 0.459961 4.07123 0.459961 4.64364Z"
                    fill="#E6C3A5"
                  />
                  <path
                    d="M18.5866 3.68965H9.51465V7.86564H18.5867C19.1591 7.86564 19.5407 7.48406 19.5407 6.91165V4.64364C19.5407 4.07123 19.159 3.68965 18.5866 3.68965Z"
                    fill="#E6C3A5"
                  />
                  <path
                    d="M5.80264 3.81595L5.51644 3.52975C5.13485 3.14816 5.13485 2.57576 5.51644 2.19413C5.70725 2.00331 5.99345 1.90793 6.18423 1.90793C6.47043 1.90793 6.66124 2.00331 6.85201 2.19413L8.47383 3.81595H8.76003H11.145H11.4312L13.053 2.19417C13.4346 1.81259 14.007 1.81259 14.3887 2.19417C14.7703 2.57576 14.7702 3.14816 14.3887 3.52979L14.1978 3.81599H16.4874C16.869 2.76658 16.5828 1.62177 15.8197 0.858602C14.6749 -0.2862 12.8623 -0.2862 11.8129 0.858602L10.0003 2.5758L8.28306 0.858602C7.13826 -0.2862 5.32567 -0.2862 4.18087 0.858602C3.4176 1.62177 3.1314 2.76658 3.51303 3.81595H5.80264Z"
                    fill="#E6C3A5"
                  />
                </svg>
              </div>
              <div class="crs-trial-step__vertical-connector"></div>
            </div>
            <div class="crs-trial-step__content">
              <div class="crs-trial-step__title">
                Today. Start your free trial
              </div>
              <div class="crs-trial-step__description">
                Just link your card — only for uninterrupted access after trial.
                Don't worry, there are no charges during your trial
              </div>
            </div>
          </div>

          <div class="crs-trial-step">
            <div class="crs-trial-step__icon-wrapper">
              <div class="crs-trial-step__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.838 13.755C17.7673 13.6661 17.6979 13.5771 17.6298 13.4913C16.6931 12.308 16.1264 11.5938 16.1264 8.24385C16.1264 6.50952 15.7291 5.08648 14.9461 4.0192C14.3688 3.23075 13.5883 2.63263 12.5596 2.19059C12.5464 2.1829 12.5346 2.17281 12.5247 2.1608C12.1547 0.866721 11.1422 0 10.0003 0C8.85835 0 7.84628 0.866721 7.47628 2.15946C7.4664 2.17104 7.45474 2.18081 7.44179 2.18837C5.04126 3.22052 3.87463 5.20077 3.87463 8.24252C3.87463 11.5938 3.30877 12.308 2.37121 13.49C2.30308 13.5758 2.23368 13.663 2.163 13.7537C1.98043 13.9837 1.86475 14.2634 1.82967 14.5599C1.79458 14.8564 1.84155 15.1572 1.96502 15.4267C2.22772 16.0048 2.78762 16.3636 3.42671 16.3636H16.5785C17.2147 16.3636 17.7707 16.0052 18.0343 15.4298C18.1583 15.1602 18.2057 14.8592 18.1709 14.5624C18.1361 14.2656 18.0206 13.9854 17.838 13.755Z"
                    fill="white"
                  />
                  <path
                    d="M10.0005 19.9998C10.5564 19.9994 11.1018 19.8508 11.5788 19.5698C12.0559 19.2889 12.4468 18.886 12.7101 18.404C12.7225 18.3809 12.7287 18.355 12.7279 18.3289C12.7272 18.3028 12.7196 18.2773 12.7059 18.2549C12.6922 18.2325 12.6728 18.214 12.6497 18.2012C12.6266 18.1883 12.6005 18.1816 12.574 18.1816H7.42785C7.40127 18.1815 7.37513 18.1882 7.35196 18.201C7.3288 18.2139 7.30939 18.2324 7.29564 18.2547C7.28189 18.2771 7.27426 18.3027 7.2735 18.3288C7.27274 18.355 7.27887 18.3809 7.29129 18.404C7.55461 18.886 7.94548 19.2888 8.42245 19.5697C8.89943 19.8507 9.44472 19.9993 10.0005 19.9998Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="crs-trial-step__vertical-connector"></div>
            </div>
            <div class="crs-trial-step__content">
              <div class="crs-trial-step__title">
                Use Setapp every day during next 7 days
              </div>
              <div class="crs-trial-step__description">
                Work better with best-in-class tools. No limits.<br />
                We'll send 2 reminders before your trial ends.
              </div>
            </div>
          </div>

          <div class="crs-trial-step">
            <div class="crs-trial-step__icon-wrapper">
              <div class="crs-trial-step__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                >
                  <path
                    d="M1.88978 11.4449C1.46876 8.70829 1.04775 5.97171 0.626728 3.23506C0.533361 2.62842 1.22361 2.21467 1.7146 2.58295C3.02631 3.56673 4.33795 4.55044 5.64966 5.53422C6.08155 5.85813 6.69684 5.75272 6.99625 5.30354L10.2723 0.389474C10.6185 -0.129825 11.3815 -0.129825 11.7277 0.389474L15.0037 5.30354C15.3031 5.75272 15.9184 5.85806 16.3503 5.53422C17.662 4.55044 18.9736 3.56673 20.2853 2.58295C20.7763 2.21467 21.4666 2.62842 21.3733 3.23506C20.9523 5.97171 20.5312 8.70829 20.1102 11.4449H1.88978Z"
                    fill="white"
                  />
                  <path
                    d="M19.1591 16.0002H2.83861C2.31398 16.0002 1.88867 15.5749 1.88867 15.0503V12.9635H20.1091V15.0503C20.109 15.5749 19.6837 16.0002 19.1591 16.0002Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div class="crs-trial-step__content">
              <div class="crs-trial-step__title">
                Trial Ends: ${c}
              </div>
              <div class="crs-trial-step__description">
                You decide continue or cancel. <br />
                No charges if you cancel before the trial ends.
              </div>
            </div>
          </div>
        </div>

        <div class="crs-trial-description__floating-element"></div>
      </div>
    `
      );
      (o = this.paymentDetailsElement) == null || o.insertAdjacentHTML("afterend", p);
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = _, document.head.appendChild(n);
    }
  }
  const v = `.social-auth-welcome-page {
  visibility: hidden;
}`;
  class b {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.getUserName();
    }
    async getUserName() {
      var t;
      const n = await h(".social-auth-welcome-page h3");
      if (n) {
        const [e, ...i] = ((t = n.textContent) == null ? void 0 : t.split(",")) || [];
        sessionStorage.setItem("crs-user-name", e), location.href = "/signup/payment-details";
      }
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = v, document.head.appendChild(n);
    }
  }
  f({ name: "5th EXP on trial flow.", dev: "OS" }), u("exp_trial");
  class C {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.init();
    }
    init() {
      this.device === "desktop" && (this.addStyles(), this.changePaymentDetailsPage(), this.changeWelcomePage());
    }
    changePaymentDetailsPage() {
      window.location.pathname.includes("signup/payment-details") && new x();
    }
    changeWelcomePage() {
      window.location.pathname.includes("auth/welcome") && new b();
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = "", document.head.appendChild(n);
    }
  }
  new C();
})();
