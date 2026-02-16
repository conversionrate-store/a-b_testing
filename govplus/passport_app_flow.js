(function() {
  "use strict";
  const d = (a) => new Promise((n) => {
    const e = document.querySelector(a);
    e && n(e);
    const t = new MutationObserver(() => {
      const i = document.querySelector(a);
      i && (n(i), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), b = ({ name: a, dev: n }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, C = (a) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", a, "variant_1"));
    }, 1e3);
  }, p = (a) => {
    var t;
    const e = `; ${document.cookie}`.split(`; ${a}=`);
    return e.length === 2 ? (t = e.pop()) == null ? void 0 : t.split(";").shift() : null;
  }, c = () => new URLSearchParams(window.location.search).get("formId"), h = (a) => new URLSearchParams(window.location.search).get(a), g = async (a, n, e) => {
    try {
      const t = await fetch(a, {
        ...n,
        signal: e
      }), i = await t.json();
      if (!t.ok)
        throw new Error(`Error: ${i.message}`);
      return {
        data: i,
        error: null
      };
    } catch (t) {
      return { data: null, error: t };
    }
  }, f = location.hostname.includes(".com") ? "govplus.com/" : "govplus.app/", v = async (a) => {
    try {
      const { data: n, error: e } = await g(
        `https://api.${f}api_gov/form/getFormFillPercent`,
        {
          method: "POST",
          body: JSON.stringify({
            form_id: c(),
            client_token: p("client_token"),
            check: !0
          })
        },
        a
      );
      return e ? { data: null, error: e } : { data: n == null ? void 0 : n.success, error: null };
    } catch (n) {
      return { data: null, error: n };
    }
  }, _ = async (a) => {
    try {
      const { data: n, error: e } = await g(`https://auth.${f}usersData/data`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${p("client_token")}`
        },
        credentials: "include"
      }, a);
      return e ? { data: null, error: e } : { data: n, error: null };
    } catch (n) {
      return { data: null, error: n };
    }
  }, I = `aside.ant-layout-sider {
  display: none;
}

.wrapper-react {
  display: flex;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}


@media (max-width: 991px) {
  .wrapper-react {
    flex-direction: column;
    gap: 18px;  
  }
}

.wrapper-react > main {
  width: 100%;
}

main .common-loader__container {
  width: 100% !important;
  max-width: 100% !important;
}

.wrapper-react > main > div:not(.common-loader__container) {
  width: 100%;
  max-width: 810px !important;
  margin: 0 !important;
}

@media (max-width: 991px) {
  .wrapper-react > main > div:not(.common-loader__container) {
    max-width: 100% !important;
    padding: 24px 16px !important;
  }
}

div:has(> .GHeaderFormWrapper),
.GHeader + .GPaymentSecurityTag,
.GImageTitle,
div:has(> .autosave-banner) {
  display: none;
}


footer > .GFooter__Content {
  margin: 0 auto;
  max-width: 1200px;
}

@media (max-width: 1200px) {
  footer > .GFooter__Content {
    padding-top: 20px;
    padding-inline: 20px;
  }
}

@media (max-width: 767px) {
  footer > .GFooter__Content {
    padding-inline: 10px;
  }
}`;
  class P {
    constructor() {
      this.asideContainerSelector = ".crs-aside-container", this.asideStyleId = "crs-aside-container-style", this.isAddingContainer = !1;
    }
    init() {
      this.addStyles(), this.addNewAsideContainer();
    }
    async addNewAsideContainer() {
      if (!this.isAddingContainer) {
        this.isAddingContainer = !0;
        try {
          this.removeAllAsideContainers();
          const n = await d(".wrapper-react");
          n && n.insertAdjacentHTML(
            "afterbegin",
            /* HTML */
            '<div class="crs-aside-container"></div>'
          );
        } finally {
          this.isAddingContainer = !1;
        }
      }
    }
    removeAllAsideContainers() {
      document.querySelectorAll(this.asideContainerSelector).forEach((n) => n.remove());
    }
    cleanUp() {
      const n = document.querySelector(this.asideContainerSelector), e = document.getElementById(this.asideStyleId);
      n && n.remove(), e && e.remove();
    }
    addStyles() {
      const n = document.getElementById(this.asideStyleId);
      n && n.remove();
      const e = document.createElement("style");
      e.textContent = I, e.id = this.asideStyleId, document.head.appendChild(e);
    }
  }
  const S = `.crs-aside {
  position: sticky;
  top: 10px;
}

@media (max-width: 991px) {
  .crs-aside {
    position: static;
  }
}

.crs-aside-block {
  display: flex;
  width: 322px;
  padding: 32px 22px 0;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  background: #e2eeff;
}

@media (max-width: 767px) {
  .crs-aside-container[data-page='payment'] .crs-aside-block {
    display: none;
  }
}

@media (max-width: 991px) {
  .crs-aside-block {
    width: 100%;
  }
}

@media (max-width: 575px) {
  .crs-aside-block {
    padding: 16px 16px 0;
  }
}

.crs-aside-block-title {
  color: #191919;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  line-height: 34px; /* 121.429% */
  letter-spacing: -1px;
  font-family: InterSemiBold, sans-serif;
}

@media (max-width: 575px) {
  .crs-aside-block-title {
    font-size: 24px;
    line-height: 28.8px;
  }
}

.crs-aside-block-description {
  margin-top: 16px;
  color: #216de3;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */
  font-family: InterSemiBold, sans-serif;
}

@media (max-width: 575px) {
  .crs-aside-block-description {
    margin-top: 12px;
    font-size: 14px;
  }
}

.crs-aside-block-image {
  margin-top: 24px;
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  overflow: hidden;
  height: 177px;
}

@media (max-width: 575px) {
  .crs-aside-block-image {
    margin-top: 21px;
    height: 100px;
  }
}

.crs-aside-block-image img {
  height: 260px;
  object-fit: contain;
}

@media (max-width: 575px) {
  .crs-aside-block-image img {
    height: 164px;
  }
}

.crs-aside-security {
  margin-top: 24px;
  color: #3e3e3e;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.2px;
}

@media (max-width: 575px) {
  .crs-aside-security {
    margin-top: 18px;
    font-size: 14px;
    line-height: 20px;
  }
}

@media (max-width: 767px) {
  .crs-aside-container[data-page='payment'] .crs-aside-security{
    margin-top: 0;
  }
}
`;
  class k {
    constructor() {
      this.asideContainerSelector = ".crs-aside-container", this.asideStyleId = "crs-aside-style", this.titles = {
        "passport-new": "Complete your new passport application",
        "passport-renewal": "Complete your passport renewal application",
        "passport-lost": "Complete your lost passport application",
        "passport-damaged": "Complete your damaged passport application",
        "passport-stolen": "Complete your stolen passport application"
      }, this.isRendering = !1;
    }
    init() {
      this.addStyles(), this.render();
    }
    async render() {
      if (!this.isRendering) {
        this.isRendering = !0;
        try {
          const n = await Promise.race([
            d(".GHeaderFormWrapper"),
            d(".GImageTitle")
          ]), e = document.querySelector(".GPaymentSecurityTag"), t = document.querySelector(this.asideContainerSelector), i = c();
          let o = this.titles[i] || "Complete your passport application";
          location.href.includes("page=payment") && sessionStorage.getItem("crs-formId") === "passport-renewal" && (o = this.titles["passport-renewal"]), t && (t.innerHTML = "");
          const r = (
            /* HTML */
            `<div class="crs-aside">
      <div class="crs-aside-block">
        <div class="crs-aside-block-title">${o}</div>
        <div class="crs-aside-block-description">
          Takes less than 3 minutes to apply
        </div>
        <div class="crs-aside-block-image">
          <img
            src="https://cdn.prod.website-files.com/62554f8964d8fe28a4ea9f70/66eb0596ef4e5216fbc0b4da_pas-l.avif"
            alt="Processing Steps"
          />
        </div>
      </div>

      <div class="crs-aside-security">Trusted by 1M+ customers <br /> 12K reviews • 4.7★ average rating</div>
    </div>`
          );
          t == null || t.insertAdjacentHTML("afterbegin", r);
        } finally {
          this.isRendering = !1;
        }
      }
    }
    cleanUp() {
      const n = document.querySelector(this.asideContainerSelector), e = document.getElementById(this.asideStyleId);
      n && n.remove(), e && e.remove();
    }
    addStyles() {
      const n = document.getElementById(this.asideStyleId);
      n && n.remove();
      const e = document.createElement("style");
      e.textContent = S, e.id = this.asideStyleId, document.head.appendChild(e);
    }
  }
  const H = `.crs-header + div {
  margin-top: 40px !important;
}

@media (max-width: 767px) {
  .crs-header + div {
    margin-top: 24px !important;
  }
}

.crs-header-title,
.crs-second-screen-title {
  color: #191919;
  font-size: 36px;
  font-weight: 600;
  line-height: 46.8px;
  letter-spacing: -1px;
  font-family: InterSemiBold, sans-serif;
}

@media (max-width: 1131px) {
  .crs-header-title,
  .crs-second-screen-title {
    font-size: 30px;
  }
}

@media (max-width: 991px) {
  .crs-header-title,
  .crs-second-screen-title {
    font-size: 28px;

    line-height: 36px;
  }
  .crs-second-screen-title {
    text-align: center;
  }
}

.crs-header-subtitle {
  margin-top: 12px;
  color: #6e6e6e;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.1px;
}

@media (max-width: 767px) {
  .crs-header-subtitle {
    font-size: 16px;
    line-height: 22px;
  }
}
`, L = `.crs-progress {
  display: flex;
  gap: 8px;
  align-items: center;
}

.crs-progress-bar {
  width: 100%;
  height: 6px;
  border-radius: 100px;
  background: #ebebeb;
}

.crs-progress-fill {
  height: 100%;
  border-radius: 100px;
  background: #13ba68;
  transition: width 0.3s ease-in-out;
}

.crs-progress-stats {
  flex-shrink: 0;
}
`;
  class E {
    constructor() {
      this.progressStyleId = "crs-progress-style";
    }
    addStyles() {
      const n = document.getElementById(this.progressStyleId);
      n == null || n.remove();
      const e = document.createElement("style");
      e.textContent = L, e.id = this.progressStyleId, document.head.appendChild(e);
    }
    cleanUp() {
      const n = document.getElementById(this.progressStyleId);
      n == null || n.remove();
    }
    getHtml(n) {
      const e = Number.isFinite(n) ? n : 0;
      return (
        /* HTML */
        `<div class="crs-progress">
      <div class="crs-progress-bar">
        <div
          class="crs-progress-fill"
          style="width: ${e}%"
        ></div>
      </div>
      <div class="crs-progress-stats">
        <div class="crs-progress-stats-item-value">
          ${e}% completed
        </div>
      </div>
    </div>`
      );
    }
  }
  class T {
    constructor() {
      this.headerStyleId = "crs-header-style", this.headerContainerSelector = ".GHeader:not(:has(.GProgressBar))", this.headerContainerId = "crs-header-container", this.isRendering = !1, this.titles = {
        0: "Fill out a personalized passport form",
        70: "Fill out a personalized passport form"
      }, this.secondTitles = {
        "passport-new": "Submit your new passport application",
        "passport-renewal": "Submit your passport renewal application",
        "passport-lost": "Submit your lost passport application",
        "passport-damaged": "Submit your damaged passport application",
        "passport-stolen": "Submit your stolen passport application"
      }, this.debounceTimer = null, this.abortController = null, this.formInputHandler = null, this.formClickHandler = null, this.mainFormElement = null, this.progressBar = new E();
    }
    init() {
      const n = h("page");
      n && n === "payment" && this.cleanUp(), this.addStyles(), this.progressBar.addStyles(), this.isRendering || (this.render(), this.addProgressTitleToSecondScreen());
    }
    async render() {
      var n;
      if (!this.isRendering) {
        this.isRendering = !0;
        try {
          const { data: e, error: t } = await this.getFillFormProgress();
          t && console.error(t);
          const i = await d(
            this.headerContainerSelector
          ), o = document.getElementById(this.headerContainerId);
          o && o.remove();
          const r = this.titles[e == null ? void 0 : e.oneProduct], m = this.progressBar.getHtml((e == null ? void 0 : e.oneProduct) ?? 0), s = (
            /* HTML */
            `<div
        class="crs-header"
        id="${this.headerContainerId}"
      >
      <!--${m}-->
        <div class="crs-header-title">${r || this.titles[0]}</div>
        <div class="crs-header-subtitle">
          GOV+ will fill out your application for you to help you avoid any
          errors or delays.
        </div>
      </div>`
          );
          (n = i == null ? void 0 : i.parentElement) == null || n.insertAdjacentHTML("afterend", s);
        } finally {
          this.isRendering = !1;
        }
      }
    }
    updateProgressByFormChange() {
      const n = document.querySelector(
        ".form-block__main_Form"
      );
      if (!n) return;
      this.mainFormElement && this.formInputHandler && this.mainFormElement.removeEventListener("input", this.formInputHandler), this.formClickHandler && document.removeEventListener("click", this.formClickHandler), this.mainFormElement = n;
      const e = () => {
        this.debounceTimer && clearTimeout(this.debounceTimer), this.abortController && this.abortController.abort(), this.abortController = new AbortController(), this.debounceTimer = setTimeout(() => {
          this.updateProgress(this.abortController.signal);
        }, 1e3);
      };
      this.formInputHandler = (t) => {
        e();
      }, this.formClickHandler = (t) => {
        const i = t.target;
        (i.closest(".ant-select-item-option") || i.matches(".ant-radio-input") || i.matches('input[type="radio"]') || i.matches('input[type="checkbox"]') || i.closest(".ant-radio-wrapper")) && e();
      }, n.addEventListener("input", this.formInputHandler), document.addEventListener("click", this.formClickHandler);
    }
    async updateProgress(n) {
      const { data: e } = await this.getFillFormProgress(n);
      if (e) {
        const t = e.oneProduct, i = document.querySelector(".crs-progress-fill"), o = document.querySelector(
          ".crs-progress-stats-item-value"
        );
        if (!i || !o) return;
        i.style.width = `${t}%`, o.innerText = `${t}% completed`;
      }
    }
    async addProgressTitleToSecondScreen() {
      const n = await d(
        ".GHeader:has(.GProgressBar)"
      ), e = document.getElementById("crs-second-screen-title"), t = c();
      let i = this.secondTitles[t] || "Submit your passport renewal application";
      if (location.href.includes("page=payment") && sessionStorage.getItem("crs-formId") === "passport-renewal" && (i = this.secondTitles["passport-renewal"]), e && e.remove(), n) {
        const o = (
          /* HTML */
          `<div
        id="crs-second-screen-title"
        class="crs-second-screen-title"
      >
        ${i}
      </div>`
        );
        n.insertAdjacentHTML("beforeend", o);
      }
    }
    async getFillFormProgress(n) {
      const { data: e, error: t } = await v(n);
      return t ? (t.name !== "AbortError" && console.error(t), { data: null, error: t }) : { data: e, error: null };
    }
    cleanUp() {
      this.mainFormElement && (this.formInputHandler && (this.mainFormElement.removeEventListener("input", this.formInputHandler), this.formInputHandler = null), this.mainFormElement = null), this.formClickHandler && (document.removeEventListener("click", this.formClickHandler), this.formClickHandler = null), this.debounceTimer && (clearTimeout(this.debounceTimer), this.debounceTimer = null), this.abortController && (this.abortController.abort(), this.abortController = null);
      const n = document.getElementById(this.headerContainerId);
      n == null || n.remove();
      const e = document.getElementById(
        "crs-second-screen-title"
      );
      e == null || e.remove();
      const t = document.getElementById(this.headerStyleId);
      t == null || t.remove(), this.progressBar.cleanUp();
    }
    addStyles() {
      const n = document.getElementById(this.headerStyleId);
      n == null || n.remove();
      const e = document.createElement("style");
      e.textContent = H, e.id = this.headerStyleId, document.head.appendChild(e);
    }
  }
  const F = `div:has(> .PaymentPageWrapper) {
  margin-top: 40px !important;
}

.GHeaderCombinedPayment .GProgressBar {
  display: none;
}

.PaymentPageWrapper form .PaymentCombinedInformation {
  margin-bottom: 7px !important;
}

@media (max-width: 767px) {
  .PaymentPageWrapper form .PaymentCombinedInformation {
    margin-bottom: 15px !important;
  }
}

@media (max-width: 767px) {
  div:has(> .PaymentPageWrapper) {
    margin-top: 24px !important;
  }
}

.PaymentCombinedInformation {
  --crs-container-padding: 16px;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation {
    --crs-container-padding: 12px;
  }
}

.PaymentCombinedInformation
  .charge-payment-form
  .payment-method-information
  .payment-method-information__item {
  position: relative;
  z-index: 2;
}

.PaymentCombinedInformation
  .charge-payment-form
  .payment-method-information
  .payment-method-information__item
  label:not(.ant-radio-wrapper-checked):not(:hover):not(:focus) {
  border: 1px solid #eaeaea !important;
}

.PaymentCombinedInformation
  .charge-payment-form
  .payment-method-information
  .payment-method-information__item
  .ant-radio-wrapper {
  box-shadow: 0 8px 24px 4px rgba(0, 0, 0, 0.12) !important;
  padding-left: 20px !important;
}

@media (min-width: 768px) {
  .PaymentCombinedInformation
    .charge-payment-form
    .payment-method-information
    .payment-method-information__item
    .ant-radio-wrapper
    .content {
    padding: 24px 0 24px 16px;
    margin-right: 20px !important;
  }

  .PaymentCombinedInformation
    .charge-payment-form
    .payment-method-information
    .payment-method-information__item
    .ant-radio-wrapper
    .content__wrapper {
    margin-bottom: 3px;
  }
}
@media (max-width: 767px) {
  .PaymentCombinedInformation
    .charge-payment-form
    .payment-method-information
    .payment-method-information__item
    .ant-radio-wrapper {
    padding-left: 16px !important;
  }

  .PaymentCombinedInformation
    .charge-payment-form
    .payment-method-information
    .payment-method-information__item
    .ant-radio-wrapper
    .content {
    padding-left: 40px !important;
    /* padding: 16px 40px 16px 16px; */
  }
}

@media (max-width: 767px) and (min-width: 599px) {
  .PaymentCombinedInformation
    .charge-payment-form
    .payment-method-information
    .payment-method-information__item
    .ant-radio-wrapper
    .content {
    margin-left: 0 !important;
    padding: 16px 40px 16px 16px;
  }
}

.PaymentCombinedInformation
  .charge-payment-form
  .payment-method-information
  .payment-method-information__item
  .ant-radio-wrapper
  .ant-radio {
  left: 20px !important;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation
    .charge-payment-form
    .payment-method-information
    .payment-method-information__item
    .ant-radio-wrapper
    .ant-radio {
    left: 16px !important;
    top: 40% !important;
  }
}

.PaymentCombinedInformation
  .charge-payment-form
  .payment-method-information
  .payment-method-information__item:has(+ .payment-method-information__item) {
  margin-top: calc(var(--crs-container-padding));
  z-index: 3;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation
    .charge-payment-form
    .payment-method-information
    .payment-method-information__item:has(+ .payment-method-information__item) {
    margin-top: calc(var(--crs-container-padding) + 24px);
  }
}

.PaymentCombinedInformation
  .payment-method-information
  .payment-method-information__item
  .ant-radio-wrapper {
  background-color: #fff !important;
  transition: background-color 0.2s ease !important;
}

.PaymentCombinedInformation
  .payment-method-information
  .payment-method-information__item
  label.ant-radio-wrapper.ant-radio-wrapper-in-form-item.ant-radio-wrapper-checked {
  background-color: #e2eeff !important;
}

.PaymentCombinedInformation
  .payment-method-information__item:has(
    + .payment-method-information__item
  )::before {
  content: 'Premium delivery options';
  position: absolute;
  bottom: calc(100% + var(--crs-container-padding));
  right: calc(var(--crs-container-padding) * -1);
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  background: #f0fdf4;

  padding: 6px 24px 6px 50px;
  border-radius: 24px 24px 0 0;
  padding-bottom: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #000 !important;
  z-index: 10;
  font-family: InterSemiBold, sans-serif !important;
}

.PaymentCombinedInformation
  .payment-method-information__item:has(
    + .payment-method-information__item
  )::after {
  content: '';
  position: absolute;
  bottom: calc(100% + var(--crs-container-padding));
  right: 211px;
  width: 17px;
  height: 20px;
  background-image: url(https://conversionrate-store.github.io/a-b_images/govplus/crown.webp);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 54;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation
    .payment-method-information__item:has(
      + .payment-method-information__item
    )::before {
    left: calc(var(--crs-container-padding) * -1);
    bottom: 100%;
    right: 0;
    justify-content: center;
    width: calc(100% + (var(--crs-container-padding) * 2));
    padding: 10px 4px 12px;

    color: #009b4f !important;
    z-index: -1;
  }

  .PaymentCombinedInformation
    .payment-method-information__item:has(
      + .payment-method-information__item
    )::after {
    right: calc(50% + 102px);
  }
}

.PaymentCombinedInformation
  .payment-method-information__item
  + .payment-method-information__item::after {
  content: '';
  position: absolute;
  bottom: calc(var(--crs-container-padding) * -1);
  left: calc(var(--crs-container-padding) * -1);
  display: block;
  height: calc(200% + 16px + var(--crs-container-padding) * 2);
  width: calc(100% + var(--crs-container-padding) * 2);
  background-color: #f0fdf4;
  border-radius: 24px 0 24px 24px;
  z-index: -1;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation
    .payment-method-information__item
    + .payment-method-information__item::after {
    border-radius: 0 0 24px 24px;
  }
}

.PaymentCombinedInformation .charge-payment-form .traveling-soon {
  align-self: flex-start !important;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation .charge-payment-form .traveling-soon {
    margin-top: 0 !important;
    align-self: center !important;
  }
}

.PaymentCombinedInformation .charge-payment-form .traveling-soon div {
  font-size: 20px !important;
  font-weight: 600 !important;
  line-height: 28px !important;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation .charge-payment-form .traveling-soon div {
    font-size: 18px !important;
  }
}

.PaymentCombinedInformation
  .payment-method-information__item
  .content__wrapper {
  display: grid;
  grid-template-columns: 2fr 0.9fr;
  grid-template-areas:
    'title price'
    'description offer';
  gap: 4px 24px;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation
    .payment-method-information__item
    .content__wrapper {
    grid-template-columns: auto 1fr;
    gap: 0 12px;
    grid-template-areas:
      'title title'
      'description description'
      'price offer';
  }
}
.PaymentCombinedInformation
  .payment-method-information__item
  .content__wrapper
  :is(.sale-block, .sale-block__processing, .price-block) {
  display: contents;
}

.PaymentCombinedInformation
  .payment-method-information__item
  .content__wrapper
  .price-block {
  grid-area: price;
  align-items: center;
}

.PaymentCombinedInformation
  .payment-method-information__item
  .content__wrapper
  .sale-block
  .sale-block__processing
  > div:first-child {
  grid-area: title;
}

.PaymentCombinedInformation
  .payment-method-information__item
  .content__wrapper
  .sale-block
  .sale-block__processing
  > div:first-child
  p {
  font-size: 14px !important;
  line-height: 25px !important;
  text-transform: uppercase !important;
}

.PaymentCombinedInformation
  .payment-method-information__item
  .content__wrapper
  .sale-block
  .sale-block__processing
  > div:last-child {
  grid-area: description;
  color: #191919 !important;
  font-size: 20px !important;
  font-weight: 600 !important;
  line-height: 31px !important;
  letter-spacing: -0.1px !important;
  text-decoration: none !important;
  font-family: InterSemiBold, sans-serif !important;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation
    .payment-method-information__item
    .content__wrapper
    .sale-block
    .sale-block__processing
    > div:last-child {
    font-size: 16px !important;
    line-height: 24px !important;
  }
}

.PaymentCombinedInformation
  .payment-method-information__item
  .content__wrapper
  .sale-block
  .sale-block__processing
  > div:last-child
  span {
  color: #216de3 !important;
  font-weight: inherit !important;
  font-size: inherit !important;
  font-family: InterSemiBold, sans-serif !important;
}

.PaymentCombinedInformation
  .payment-method-information__item
  .content__wrapper
  .sale-block
  .sale-block__processing
  + div {
  grid-area: offer;
}

.PaymentCombinedInformation
  .payment-method-information__item
  .content__wrapper
  .price-block
  .prices {
  align-items: center;
  flex-direction: row !important;
  gap: 0.5ch;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation
    .payment-method-information__item
    .content__wrapper
    .price-block
    .prices {
    margin-top: 16px;
  }
}

.PaymentCombinedInformation
  .payment-method-information__item
  .content__wrapper
  .price-block
  .prices
  > div:first-child {
  align-items: center;
  line-height: 24px !important;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation
    .payment-method-information__item
    .content__wrapper
    .price-block
    .prices
    > div:first-child {
    font-size: 16px !important;
    line-height: 22px !important;
  }
}

.PaymentCombinedInformation
  .payment-method-information__item
  .content__wrapper
  .price-block
  .prices
  > div:last-child {
  font-size: 20px !important;
  line-height: 26px !important;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation
    .payment-method-information__item
    .content__wrapper
    .price-block
    .prices
    > div:last-child {
    font-size: 16px !important;
    line-height: 24px !important;
  }
}

.PaymentCombinedInformation .payment-footer {
  margin-top: calc(var(--crs-container-padding) + 24px);
}

.PaymentCombinedInformation .payment-footer p {
  text-align: left !important;
  /* font-size: 14px !important;
  line-height: 22.4px !important; */
}

@media (max-width: 767px) {
  .PaymentCombinedInformation .payment-footer p {
    text-align: center !important;
    text-wrap: pretty !important;
  }
}

.PaymentCombinedInformation .payment-footer p br {
  display: none !important;
}

.CreditCardHeading__security .GPaymentSecurityTag {
  justify-content: center;
}

.PaymentPageWrapper #govplus-transparency-box {
  margin-top: 0 !important;
}
`;
  class z {
    constructor() {
      this.paymentsSelector = ".PaymentCombinedInformation", this.paymentsStyleId = "crs-payments-style", this.isProcessing = !1, this.disclaimerObserver = null;
    }
    init() {
      this.addStyles(), this.changes();
    }
    async changes() {
      if (!this.isProcessing) {
        this.isProcessing = !0;
        try {
          const n = await d(this.paymentsSelector), e = await d(".crs-aside-container"), t = document.querySelector(".CreditCardHeader .GPaymentSecurityTag, .CreditCardHeading__security .GPaymentSecurityTag > div"), i = n.querySelectorAll(
            ".payment-method-information__item"
          ), o = n.querySelector(".payment-footer p"), r = n.querySelector(".traveling-soon > div");
          r && (r.textContent = "Need your passport sooner?"), e && (e.dataset.page = "payment"), t && t.textContent.trim().toLocaleLowerCase().includes("secure, encrypted payment • trusted by 1m+ customers") && (t.textContent = t.textContent.trim().replace(" • Trusted by 1M+ customers", "")), i.forEach((m) => {
            var u, y, x, w;
            const s = m.querySelector(
              ".sale-block__processing> div:first-child p"
            ), l = m.querySelector(
              ".sale-block__processing> div:last-child"
            );
            s && (s.textContent = ((y = (u = s.textContent) == null ? void 0 : u.trim()) == null ? void 0 : y.replace(/-$/, "").trim()) || ""), l && ((x = l.textContent) != null && x.includes("Guaranteed delivery in 4 weeks") && (l.innerHTML = "<span>4 weeks</span> delivery - guaranteed"), (w = l.textContent) != null && w.includes("Guaranteed delivery in 2 week") && (l.innerHTML = "<span>2 weeks</span> delivery - guaranteed"));
          }), o && (this.replaceBreakWithPeriod(o), this.disclaimerObserver = new MutationObserver(() => {
            this.replaceBreakWithPeriod(o);
          }), this.disclaimerObserver.observe(o, {
            childList: !0,
            subtree: !0,
            characterData: !0
          }));
        } finally {
          this.isProcessing = !1;
        }
      }
    }
    replaceBreakWithPeriod(n) {
      const e = n.innerHTML, t = e.replace(/\s*<br\s*\/?>\s*/gi, ". ");
      e !== t && (n.innerHTML = t);
    }
    cleanUp() {
      this.disclaimerObserver && (this.disclaimerObserver.disconnect(), this.disclaimerObserver = null);
      const n = document.getElementById(this.paymentsStyleId);
      n && n.remove();
    }
    addStyles() {
      if (!document.getElementById(this.paymentsStyleId)) {
        const n = document.createElement("style");
        n.id = this.paymentsStyleId, n.textContent = F, document.head.appendChild(n);
      }
    }
  }
  b({ name: "Passport Application Flow", dev: "OS" }), C("exp_passport_flow");
  class B {
    constructor() {
      this.pageStructure = null, this.aside = null, this.header = null, this.payments = null, this.isInitialized = !1, this.targetFormIds = [
        "passport-new",
        "passport-renewal",
        "passport-lost",
        "passport-damaged"
      ], this.abortController = null, this.executeInitialLoadTimeout = null, this.onPageChangeHandler = null, this.domContentLoadedHandler = null, this.windowLoadHandler = null, this.originalPushState = null, this.originalReplaceState = null, this.handlePageChangeTimeout = null, this.lastProcessedUrl = null, this.pageStructure = new P(), this.aside = new k(), this.header = new T(), this.payments = new z(), this.init();
    }
    init() {
      location.href.includes("page=form") && (sessionStorage.removeItem("crs-first-time-user-checked"), this.cleanUpComponents()), this.checkIsUserLoggedIn().then((n) => {
        const e = sessionStorage.getItem("crs-first-time-user-checked") === "true";
        (!n || e) && (this.spaPageChangeHandler(), this.handleInitialPageLoad());
      });
    }
    async checkIsUserLoggedIn() {
      var o, r, m, s;
      if (sessionStorage.getItem("crs-first-time-user-checked") === "true")
        return !1;
      this.abortController && this.abortController.abort(), this.abortController = new AbortController();
      const { data: e, error: t } = await _(this.abortController.signal);
      if (this.abortController.signal.aborted)
        return !1;
      const i = !!((s = (m = (r = (o = e == null ? void 0 : e.data) == null ? void 0 : o.data) == null ? void 0 : r.personal) == null ? void 0 : m.communication) != null && s.email) && !t;
      return i || sessionStorage.setItem("crs-first-time-user-checked", "true"), i;
    }
    handleInitialPageLoad() {
      if (this.isInitialized) return;
      const n = document.readyState;
      n === "loading" ? (this.domContentLoadedHandler = () => this.executeInitialLoad(), document.addEventListener(
        "DOMContentLoaded",
        this.domContentLoadedHandler,
        { once: !0 }
      )) : n === "interactive" ? (this.windowLoadHandler = () => this.executeInitialLoad(), window.addEventListener("load", this.windowLoadHandler, {
        once: !0
      })) : this.executeInitialLoad();
    }
    executeInitialLoad() {
      this.isInitialized || (this.isInitialized = !0, this.executeInitialLoadTimeout && clearTimeout(this.executeInitialLoadTimeout), this.executeInitialLoadTimeout = setTimeout(() => {
        this.lastProcessedUrl || this.handlePageChange(), this.executeInitialLoadTimeout = null;
      }, 100));
    }
    initComponents() {
      var n, e, t, i;
      (n = this.pageStructure) == null || n.init(), (e = this.aside) == null || e.init(), (t = this.payments) == null || t.init(), (i = this.header) == null || i.init();
    }
    cleanUpComponents() {
      var n, e, t, i;
      (n = this.pageStructure) == null || n.cleanUp(), (e = this.aside) == null || e.cleanUp(), (t = this.payments) == null || t.cleanUp(), (i = this.header) == null || i.cleanUp();
    }
    async handlePageChange() {
      if (await this.checkIsUserLoggedIn() || sessionStorage.getItem("crs-first-time-user-checked") !== "true" && !location.href.includes("page=payment")) {
        this.cleanUpComponents(), sessionStorage.removeItem("crs-first-time-user-checked");
        return;
      }
      const e = c(), t = h("page");
      if (!e || !this.targetFormIds.includes(e) || t && t !== "payment" && t !== "form") {
        sessionStorage.removeItem("crs-first-time-user-checked"), sessionStorage.removeItem("crs-formId"), this.cleanUpComponents();
        return;
      }
      location.href.includes("page=form") && sessionStorage.getItem("crs-formId") === null && sessionStorage.setItem("crs-formId", e), this.handlePageChangeInternal();
    }
    handlePageChangeInternal() {
      const n = window.location.href;
      this.lastProcessedUrl = n, this.isFormPage() ? (this.cleanUpComponents(), this.initComponents()) : this.cleanUpComponents();
    }
    spaPageChangeHandler() {
      this.onPageChangeHandler && (window.removeEventListener("popstate", this.onPageChangeHandler), window.removeEventListener("pushstate", this.onPageChangeHandler), window.removeEventListener("replacestate", this.onPageChangeHandler), window.removeEventListener("hashchange", this.onPageChangeHandler)), this.patchHistoryAPI(), this.onPageChangeHandler = () => this.handlePageChange(), window.addEventListener("popstate", this.onPageChangeHandler), window.addEventListener("pushstate", this.onPageChangeHandler), window.addEventListener("replacestate", this.onPageChangeHandler), window.addEventListener("hashchange", this.onPageChangeHandler);
    }
    patchHistoryAPI() {
      this.originalPushState || (this.originalPushState = history.pushState.bind(history)), this.originalReplaceState || (this.originalReplaceState = history.replaceState.bind(history));
      const n = this.originalPushState, e = this.originalReplaceState;
      let t = !1, i = !1;
      history.pushState = (...o) => {
        if (n(...o), !t) {
          t = !0;
          try {
            window.dispatchEvent(new Event("pushstate"));
          } finally {
            t = !1;
          }
        }
      }, history.replaceState = (...o) => {
        if (e(...o), !i) {
          i = !0;
          try {
            window.dispatchEvent(new Event("replacestate"));
          } finally {
            i = !1;
          }
        }
      };
    }
    isFormPage() {
      return window.location.href.includes("dashboard") && window.location.href.includes("/forms/") && window.location.href.includes("formId");
    }
    cleanUp() {
      this.abortController && (this.abortController.abort(), this.abortController = null), this.executeInitialLoadTimeout && (clearTimeout(this.executeInitialLoadTimeout), this.executeInitialLoadTimeout = null), this.handlePageChangeTimeout && (clearTimeout(this.handlePageChangeTimeout), this.handlePageChangeTimeout = null), this.onPageChangeHandler && (window.removeEventListener("popstate", this.onPageChangeHandler), window.removeEventListener("pushstate", this.onPageChangeHandler), window.removeEventListener("replacestate", this.onPageChangeHandler), window.removeEventListener("hashchange", this.onPageChangeHandler), this.onPageChangeHandler = null), this.domContentLoadedHandler && (document.removeEventListener(
        "DOMContentLoaded",
        this.domContentLoadedHandler
      ), this.domContentLoadedHandler = null), this.windowLoadHandler && (window.removeEventListener("load", this.windowLoadHandler), this.windowLoadHandler = null), this.originalPushState && (history.pushState = this.originalPushState, this.originalPushState = null), this.originalReplaceState && (history.replaceState = this.originalReplaceState, this.originalReplaceState = null), this.cleanUpComponents();
    }
  }
  window.crsPassportAppFlowTestInstance || (window.crsPassportAppFlowTestInstance = !0, new B());
})();
