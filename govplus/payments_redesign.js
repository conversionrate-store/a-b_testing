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
  }, _ = (a) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", a, "variant_1"));
    }, 1e3);
  }, h = (a) => {
    var t;
    const e = `; ${document.cookie}`.split(`; ${a}=`);
    return e.length === 2 ? (t = e.pop()) == null ? void 0 : t.split(";").shift() : null;
  }, l = () => new URLSearchParams(window.location.search).get("formId"), c = (a) => new URLSearchParams(window.location.search).get(a), f = async (a, n, e) => {
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
  }, g = location.hostname.includes(".com") ? "govplus.com/" : "govplus.app/", v = async (a) => {
    try {
      const { data: n, error: e } = await f(
        `https://api.${g}api_gov/form/getFormFillPercent`,
        {
          method: "POST",
          body: JSON.stringify({
            form_id: l(),
            client_token: h("client_token"),
            check: !0
          })
        },
        a
      );
      return e ? { data: null, error: e } : { data: n == null ? void 0 : n.success, error: null };
    } catch (n) {
      return { data: null, error: n };
    }
  }, C = async (a) => {
    try {
      const { data: n, error: e } = await f(`https://auth.${g}usersData/data`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${h("client_token")}`
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
  }
}

div:has(> .GHeaderFormWrapper),
.GPaymentSecurityTag,
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
  const S = `.crs-aside-block {
  display: flex;
  width: 322px;
  padding: 32px 30px 0;
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
      var n, e;
      if (!this.isRendering) {
        this.isRendering = !0;
        try {
          const t = await Promise.race([
            d(".GHeaderFormWrapper"),
            d(".GImageTitle")
          ]), i = document.querySelector(".GPaymentSecurityTag"), o = document.querySelector(this.asideContainerSelector), r = l(), s = this.titles[r] || "Complete your passport application";
          let m = sessionStorage.getItem(
            "crs-aside-security-" + r
          );
          m || (m = ((e = (n = i == null ? void 0 : i.textContent) == null ? void 0 : n.trim()) == null ? void 0 : e.replace("customers", "customers<br/> 12K reviews ")) || null, sessionStorage.setItem("crs-aside-security-" + r, m || "")), o && (o.innerHTML = "");
          const p = (
            /* HTML */
            `<div class="crs-aside">
      <div class="crs-aside-block">
        <div class="crs-aside-block-title">${s}</div>
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

      <div class="crs-aside-security">${m}</div>
    </div>`
          );
          o == null || o.insertAdjacentHTML("afterbegin", p);
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
  const L = `.crs-header + div {
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
`, H = `.crs-progress {
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
      e.textContent = H, e.id = this.progressStyleId, document.head.appendChild(e);
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
      }, this.progressStats = {
        0: "0% Completed",
        70: "70%"
      }, this.debounceTimer = null, this.abortController = null, this.formInputHandler = null, this.formClickHandler = null, this.mainFormElement = null, this.progressBar = new E();
    }
    init() {
      const n = c("page");
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
          const r = this.titles[e == null ? void 0 : e.oneProduct], s = this.progressBar.getHtml((e == null ? void 0 : e.oneProduct) ?? 0), m = (
            /* HTML */
            `<div
        class="crs-header"
        id="${this.headerContainerId}"
      >
      <!--${s}-->
        <div class="crs-header-title">${r || this.titles[0]}</div>
        <div class="crs-header-subtitle">
          GOV+ will fill out your application for you to help you avoid any
          errors or delays.
        </div>
      </div>`
          );
          (n = i == null ? void 0 : i.parentElement) == null || n.insertAdjacentHTML("afterend", m);
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
      ), e = document.getElementById("crs-second-screen-title"), t = l(), i = this.secondTitles[t] || "Submit your passport renewal application";
      if (e && e.remove(), n) {
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
      e.textContent = L, e.id = this.headerStyleId, document.head.appendChild(e);
    }
  }
  const F = `div:has(> .PaymentPageWrapper) {
  margin-top: 40px !important;
}

.GHeaderCombinedPayment .GProgressBar {
  display: none;
}

@media (max-width: 767px) {
  div:has(> .PaymentPageWrapper) {
    margin-top: 24px !important;
  }
}

@media (min-width: 768px) {
  .PaymentCombinedInformation .charge-payment-form .payment-method-information {
    flex-direction: row !important;
    gap: 20px !important;
  }
}

@media (max-width: 768px) {
  .PaymentCombinedInformation .charge-payment-form .payment-method-information {
    gap: 52px !important;
  }
}

.PaymentCombinedInformation
  .charge-payment-form
  .payment-method-information
  .payment-method-information__item {
  --border-size: 2px;
  flex: 1;
  position: relative;
  z-index: 2;
}

/* .PaymentCombinedInformation
  .charge-payment-form
  .payment-method-information
  .payment-method-information__item
  label:not(.ant-radio-wrapper-checked):not(:hover):not(:focus) {
  border: 1px solid #eaeaea !important;
} */

.PaymentCombinedInformation
  .charge-payment-form
  .payment-method-information
  .payment-method-information__item
  .ant-radio-wrapper {
  box-shadow: 0 8px 24px 4px rgba(0, 0, 0, 0.12) !important;
  padding: 0 !important;
  /* overflow: hidden !important; */
}

@media (min-width: 768px) {
  .PaymentCombinedInformation
    .charge-payment-form
    .payment-method-information
    .payment-method-information__item
    .ant-radio-wrapper
    .content {
    margin: 0 !important;
    padding: 22px 18px !important;
  }
}
@media (max-width: 767px) {
  .PaymentCombinedInformation
    .charge-payment-form
    .payment-method-information
    .payment-method-information__item
    .ant-radio-wrapper {
    padding-left: 14px !important;
    overflow: visible !important;
  }

  .PaymentCombinedInformation
    .charge-payment-form
    .payment-method-information
    .payment-method-information__item
    .ant-radio-wrapper
    .content {
    padding-left: 36px !important;
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
  display: none;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation
    .charge-payment-form
    .payment-method-information
    .payment-method-information__item
    .ant-radio-wrapper
    .ant-radio {
    display: block;
    left: 14px !important;
    top: 48px !important;
    transform: translate(0) !important;
  }
}

.PaymentCombinedInformation
  .charge-payment-form
  .payment-method-information
  .payment-method-information__item
  .ant-radio-wrapper {
  background-color: #fff !important;
  box-shadow: 0 8px 24px 4px rgba(0, 0, 0, 0.12) !important;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease !important;
}
.PaymentCombinedInformation
  .charge-payment-form
  .payment-method-information
  .payment-method-information__item
  .ant-radio-wrapper:not(:hover):not(:focus) {
  border: var(--border-size) solid transparent !important;
}

.PaymentCombinedInformation
  .charge-payment-form
  .payment-method-information
  .payment-method-information__item
  :is(.ant-radio-wrapper:hover, .ant-radio-wrapper:focus) {
  border: var(--border-size) solid #216de3 !important;
  }

.PaymentCombinedInformation
  .charge-payment-form
  .payment-method-information
  .payment-method-information__item
  .ant-radio-wrapper-checked {
  border: var(--border-size) solid #216de3 !important;

  background: #e2eeff !important;
}

.PaymentCombinedInformation
  :is(
    .payment-method-information__item:has(+ .payment-method-information__item),
    .payment-method-information__item + .payment-method-information__item
  )
  .ant-radio-wrapper::before {
  padding: 2px 10px;
  padding-left: 17px;
  background: #216de3;
  border-radius: 16px 16px 0 0;
  margin-left: calc(var(--border-size) * -1);
  width: calc(100% + var(--border-size) * 2);
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.1px;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation
    :is(
      .payment-method-information__item:has(
        + .payment-method-information__item
      ),
      .payment-method-information__item + .payment-method-information__item
    )
    .ant-radio-wrapper::before {
    position: absolute;
    bottom: 100%;
    left: 50%;
    padding-inline: 50px 37px;
    transform: translateX(-50%);
    border-radius: 12px 12px 0 0;
    background: #216de3;
    box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.04) inset;
    white-space: nowrap;
  }
}
.PaymentCombinedInformation
  .payment-method-information__item:has(+ .payment-method-information__item)
  .ant-radio-wrapper::before {
  /* add space before text */
  content: 'Most Reliable Choice';
}
.PaymentCombinedInformation
  .payment-method-information__item
  + .payment-method-information__item
  .ant-radio-wrapper::before {
  content: 'Guaranteed Urgent';
}

.PaymentCombinedInformation
  :is(
    .payment-method-information__item:has(+ .payment-method-information__item),
    .payment-method-information__item + .payment-method-information__item
  )::after {
  content: '' !important;
  position: absolute;
  top: 6px;
  width: 15px;
  height: 18px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation
    :is(
      .payment-method-information__item:has(
        + .payment-method-information__item
      ),
      .payment-method-information__item + .payment-method-information__item
    )::after {
    top: auto;
    bottom: calc(100% + 6px);
  }
}

.PaymentCombinedInformation
  .payment-method-information__item:has(
    + .payment-method-information__item
  )::after {
  background-image: url(https://conversionrate-store.github.io/a-b_images/govplus/crown.webp);
  left: calc(50% - 85px);
  width: 14px;
  height: 15px;
}

.PaymentCombinedInformation
  .payment-method-information__item
  + .payment-method-information__item::after {
  background-image: url(https://conversionrate-store.github.io/a-b_images/govplus/lightning.svg);
  left: calc(50% - 80px);
  transform: rotate(16deg);
}

@media (max-width: 767px) {
  .PaymentCombinedInformation
    .payment-method-information__item:has(
      + .payment-method-information__item
    )::after {
    left: calc(50% - 82px);
  }

  .PaymentCombinedInformation
    .payment-method-information__item
    + .payment-method-information__item::after {
    left: calc(50% - 75px);
    bottom: calc(100% + 4px);
  }
}
.PaymentCombinedInformation .charge-payment-form .traveling-soon {
  display: none;
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
  grid-template-columns: 1fr;
  grid-template-areas:
    'title'
    'description'
    'price'
    'offer'
    'list';
  gap: 4px 24px;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation
    .payment-method-information__item
    .content__wrapper {
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

@media (max-width: 767px) {
  .PaymentCombinedInformation
    .payment-method-information__item
    .content__wrapper
    .sale-block
    .sale-block__processing
    > div:first-child
    p {
    line-height: 24px !important;
  }
}

.PaymentCombinedInformation
  .payment-method-information__item
  .content__wrapper
  .sale-block
  .sale-block__processing
  > div:last-child {
  grid-area: description;
  color: #3e3e3e !important;
  font-size: 18px !important;
  font-weight: 600 !important;
  line-height: 28px !important;
  letter-spacing: -0.1px;
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
    font-size: 22px !important;
    line-height: 32px !important;
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
}

.PaymentCombinedInformation
  .payment-method-information__item
  .content__wrapper
  .sale-block
  .sale-block__processing
  + div {
  grid-area: offer;
}

.crs-payment-offer {
  grid-area: offer;
  margin-top: 12px;
  padding: 4px 8px;
  border-radius: 8px;
  background: #d4f7df;
  color: #166534;
  font-size: 12px;
  font-weight: 600;
  line-height: 19.6px;
  font-family: InterSemiBold, sans-serif !important;
}

@media (max-width: 767px) {
  .crs-payment-offer {
    margin-top: 8px;
  }
}

.crs-payment-benefits {
  grid-area: list;
  margin-top: 20px;
  display: grid;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.1px;
  font-family: InterSemiBold, sans-serif !important;
}

@media (max-width: 767px) {
  .crs-payment-benefits {
    margin-top: 12px;
  }
}

.PaymentCombinedInformation
  .payment-method-information__item
  .content__wrapper
  .price-block
  .prices {
  margin-top: 20px;
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
    margin-top: 12px;
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
  color: #191919 !important;
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
  margin-top: 24px !important;
}

.PaymentCombinedInformation .payment-footer p {
  text-align: center !important;
}

@media (max-width: 767px) {
  .PaymentCombinedInformation .payment-footer p {
    text-align: center !important;
  }
}

.PaymentCombinedInformation .payment-footer p br {
  display: none;
}

.PaymentPageWrapper #govplus-transparency-box {
  display: none;
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
          const n = await d(this.paymentsSelector), e = n.querySelectorAll(
            ".payment-method-information__item"
          ), t = n.querySelector(".PaymentCombinedInformation .payment-footer p");
          e.forEach((i) => {
            var m, p, u, y, x, w;
            const o = i.querySelector(
              ".sale-block__processing > div:first-child p"
            ), r = i.querySelector(".sale-block__processing"), s = i.querySelector(
              ".sale-block__processing > div:last-child"
            );
            o && (o.textContent = ((p = (m = o.textContent) == null ? void 0 : m.trim()) == null ? void 0 : p.replace(/-$/, "").trim()) || "", (u = o.textContent) != null && u.toLowerCase().includes("standard") && (o.textContent = "Regular government timeline")), s && (console.log("Original description:", s.textContent), (y = s.textContent) != null && y.includes(" Regular government timeline") && (s.innerHTML = "8-12 weeks delivery"), (x = s.textContent) != null && x.includes("Guaranteed delivery in 4 weeks") && (s.innerHTML = "<span>4 weeks</span> delivery", r == null || r.insertAdjacentHTML(
              "afterend",
              /* HTML */
              `<ul class="crs-payment-benefits">
              <li>✔ Guaranteed timeline</li>
              <li>✔ Expert error-check</li>
              <li>✔ Priority processing</li>
              <li>✔ Best for upcoming travel</li>
              </ul>`
            )), (w = s.textContent) != null && w.includes("Guaranteed delivery in 2 week") && (s.innerHTML = "<span>2 weeks</span> delivery", r == null || r.insertAdjacentHTML(
              "afterend",
              /* HTML */
              `<ul class="crs-payment-benefits">
              <li>✔ Guaranteed timeline</li>
              <li>✔ Expert error-check</li>
              <li>✔ Priority processing</li>
              <li>✔ Best for upcoming travel</li>
              </ul>`
            ))), t && setTimeout(() => {
              t.innerHTML = t.innerHTML.replace(" <br>", ". ");
            }, 100), r == null || r.insertAdjacentHTML(
              "afterend",
              /* HTML */
              '<div class="crs-payment-offer">New customer offer - $30 OFF</div>'
            );
          }), t && (this.replaceBreakWithPeriod(t), this.disclaimerObserver = new MutationObserver(() => {
            this.replaceBreakWithPeriod(t);
          }), this.disclaimerObserver.observe(t, {
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
  b({ name: "Passport Application Flow", dev: "OS" }), _("exp_passport_flow");
  class A {
    constructor() {
      this.pageStructure = null, this.aside = null, this.header = null, this.payments = null, this.isInitialized = !1, this.targetFormIds = [
        "passport-new",
        "passport-renewal",
        "passport-lost",
        "passport-damaged"
      ], this.abortController = null, this.executeInitialLoadTimeout = null, this.onPageChangeHandler = null, this.domContentLoadedHandler = null, this.windowLoadHandler = null, this.originalPushState = null, this.originalReplaceState = null, this.handlePageChangeTimeout = null, this.lastProcessedUrl = null, this.pageStructure = new P(), this.aside = new k(), this.header = new T(), this.payments = new z(), this.init();
    }
    init() {
      this.checkIsUserLoggedIn().then((n) => {
        const e = sessionStorage.getItem("crs-first-time-user-checked") === "true";
        (!n || e) && (this.spaPageChangeHandler(), this.handleInitialPageLoad());
      });
    }
    async checkIsUserLoggedIn() {
      var o, r, s, m;
      if (sessionStorage.getItem("crs-first-time-user-checked") === "true")
        return !1;
      this.abortController && this.abortController.abort(), this.abortController = new AbortController();
      const { data: e, error: t } = await C(this.abortController.signal);
      if (this.abortController.signal.aborted)
        return !1;
      const i = !!((m = (s = (r = (o = e == null ? void 0 : e.data) == null ? void 0 : o.data) == null ? void 0 : r.personal) == null ? void 0 : s.communication) != null && m.email) && !t;
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
      var n;
      (n = this.payments) == null || n.init();
    }
    cleanUpComponents() {
      var n;
      (n = this.payments) == null || n.cleanUp();
    }
    async handlePageChange() {
      if (await this.checkIsUserLoggedIn() && sessionStorage.getItem("crs-first-time-user-checked") !== "true") {
        this.cleanUpComponents(), sessionStorage.removeItem("crs-first-time-user-checked");
        return;
      }
      const e = l();
      if (!e || !this.targetFormIds.includes(e) || c("page") !== "payment" && c("page") !== "form") {
        sessionStorage.removeItem("crs-first-time-user-checked"), this.cleanUpComponents();
        return;
      }
      this.handlePageChangeInternal();
    }
    handlePageChangeInternal() {
      const n = window.location.href;
      this.lastProcessedUrl !== n && (this.lastProcessedUrl = n, this.isFormPage() ? (this.cleanUpComponents(), this.initComponents()) : this.cleanUpComponents());
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
  window.crsPassportAppFlowTestInstance || (window.crsPassportAppFlowTestInstance = !0, new A());
})();
