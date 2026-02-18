(function() {
  "use strict";
  const f = `[data-testid=billing-page-header],
[data-testid=checkout-plan-summary-card] > div > div:last-of-type,
[data-testid=checkout-confirm-button-card],
[data-testid=billing-section],
[data-testid=checkout-express-checkout-card] p {
  display: none;
}

.rounded-2xl.shadow-sm.border {
  border: none !important;
  box-shadow: none !important;
  background: none !important;
}

.trial,
.benefits,
.confirm_button {
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 16px;
}
.trial h3,
.benefits h3,
.confirm_button h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
}
.trial h3 + div,
.benefits h3 + div,
.confirm_button h3 + div {
  margin: 0;
}

.trial ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.trial ul li {
  display: flex;
  gap: 12px;
  font-size: 14px;
  align-items: center;
}
.trial ul li span {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #37766e;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  background: #fff;
}
.trial ul li:first-of-type {
  position: relative;
}
.trial ul li:first-of-type span {
  background: #e6eeed;
}
.trial ul li:first-of-type::after {
  position: absolute;
  height: 100%;
  width: 2px;
  background: #37766e;
  content: "";
  left: 18px;
  top: 38px;
  z-index: 0;
}

.other_blocks {
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
}

.confirm_button {
  margin-top: 16px;
}
.confirm_button button {
  border-radius: 8px;
  border: none;
  background: #37766f;
  color: #fff;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 12px;
  width: 100%;
}
.confirm_button p {
  font-size: 12px;
  line-height: 16px;
  color: #626262;
  text-align: center;
}

.other_blocks .mb-6 {
  margin-bottom: 0px !important;
}
.other_blocks .gap-8,
.other_blocks .gap-6 {
  gap: 0px !important;
}

.postal {
  padding: 0 24px 24px;
  margin-top: -24px;
}
.postal p {
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  margin-bottom: 8px;
}
.postal input {
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  font-size: 16px;
  padding: 14px 16px;
  width: 100%;
  outline: none;
}
.postal input::-moz-placeholder {
  color: #808080;
}
.postal input::placeholder {
  color: #808080;
}

[data-testid=card-section] {
  margin-top: -50px;
}

[data-testid=checkout-plan-summary-card] > div {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 10px;
  margin-bottom: -24px;
}

.trial_time {
  width: calc(100% - 48px);
  margin: 0 auto;
  padding: 16px 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
}
.trial_time p {
  font-size: 12px;
  color: #626262;
}
.trial_time p:first-child {
  margin-bottom: 8px;
}

[data-testid=billing-promo-code-section] h3,
[data-testid=billing-promo-code-section] span.font-semibold {
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  color: #37766f !important;
  text-decoration: underline;
}

.postal .postal_error {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #ff0000;
}

[data-testid=checkout-plan-summary-card] > div {
  position: relative;
}

.change_plan {
  position: absolute;
  right: 30px;
  top: 4px;
  font-weight: 700;
  font-size: 14px;
  color: #37766f !important;
  text-decoration: underline;
  cursor: pointer;
  text-transform: uppercase;
}/*# sourceMappingURL=style.css.map */`, u = (r) => new Promise((t) => {
    const n = document.querySelector(r);
    n && t(n);
    const i = new MutationObserver(() => {
      const o = document.querySelector(r);
      o && (t(o), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), b = ({ name: r, dev: t }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class p {
    constructor(t) {
      this.elements = t instanceof p ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, n, i) {
      return typeof n == "function" && (i = n, n = ""), this.elements.forEach((o) => {
        o.addEventListener(t, function(s) {
          var l;
          if (n !== "") {
            let a = (l = s.target) == null ? void 0 : l.closest(n);
            a && (i == null || i.call(a, s));
          } else
            i == null || i.call(o, s);
        });
      }), this;
    }
    addClass(t) {
      return this.elements.forEach(function(n) {
        n.classList.add(t);
      }), this;
    }
    removeClass(t) {
      return this.elements.forEach(function(n) {
        n.classList.remove(t);
      }), this;
    }
    toggleClass(t) {
      return this.elements.forEach(function(n) {
        n.classList.toggle(t);
      }), this;
    }
    each(t) {
      for (let n of this.elements)
        t(new p(n), this.elements.indexOf(n));
      return this;
    }
    style(t, n) {
      const i = t.split("-").map((o, s) => s === 0 ? o : o.charAt(0).toUpperCase() + o.slice(1)).join("");
      return this.elements.forEach(function(o) {
        o.style[i] = n;
      }), this;
    }
    find(t) {
      const n = this.elements.map((i) => Array.from(i.querySelectorAll(t)));
      return new p(n.flat());
    }
    attr(t, n) {
      return n ? (this.elements.forEach(function(i) {
        i.setAttribute(t, n);
      }), this) : this.elements[0].getAttribute(t);
    }
    text(t) {
      return t ? (this.elements.forEach(function(n) {
        n.textContent = t;
      }), this) : this.elements[0].textContent || "";
    }
    html(t) {
      return t ? (this.elements.forEach(function(n) {
        n.innerHTML = t;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const e = (r) => new p(r), h = (r) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, m = {
    lock: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 2.2084C8.23761 2.2084 6.77298 3.42238 6.48964 5.01582C6.42305 5.39026 6.04865 5.64268 5.65338 5.57961C5.25811 5.51653 4.99165 5.16187 5.05822 4.78742C5.45732 2.54302 7.51725 0.833328 10.0001 0.833328C12.7681 0.833328 15.0118 2.9589 15.0118 5.58093V7.97064C16.4572 8.42366 17.5 9.71393 17.5 11.235V15.729C17.5 17.6276 15.8752 19.1667 13.8711 19.1667H6.12893C4.12473 19.1667 2.5 17.6276 2.5 15.729V11.235C2.5 9.33643 4.12473 7.79734 6.12893 7.79734H13.5602V5.58093C13.5602 3.71834 11.9663 2.2084 10.0001 2.2084ZM6.12893 9.17243C4.92641 9.17243 3.95157 10.0958 3.95157 11.235V15.729C3.95157 16.8682 4.92641 17.7916 6.12893 17.7916H13.8711C15.0735 17.7916 16.0484 16.8682 16.0484 15.729V11.235C16.0484 10.0958 15.0735 9.17243 13.8711 9.17243H6.12893ZM8.06226 12.3805C8.06226 12.0008 8.38721 11.6929 8.78804 11.6929H11.213C11.6139 11.6929 11.9388 12.0008 11.9388 12.3805C11.9388 12.7602 11.6139 13.068 11.213 13.068H10.7263V14.5836C10.7263 14.9633 10.4013 15.2712 10.0005 15.2712C9.59967 15.2712 9.27471 14.9633 9.27471 14.5836V13.068H8.78804C8.38721 13.068 8.06226 12.7602 8.06226 12.3805Z" fill="#37766E"/>
		</svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path d="M16.6667 2.70833H14.7917V2.5C14.7917 2.33424 14.7258 2.17527 14.6086 2.05806C14.4914 1.94085 14.3324 1.875 14.1667 1.875C14.0009 1.875 13.8419 1.94085 13.7247 2.05806C13.6075 2.17527 13.5417 2.33424 13.5417 2.5V2.70833H6.45833V2.5C6.45833 2.33424 6.39249 2.17527 6.27528 2.05806C6.15806 1.94085 5.99909 1.875 5.83333 1.875C5.66757 1.875 5.5086 1.94085 5.39139 2.05806C5.27418 2.17527 5.20833 2.33424 5.20833 2.5V2.70833H3.33333C2.94723 2.71052 2.57757 2.86487 2.30455 3.13789C2.03154 3.4109 1.87719 3.78057 1.875 4.16667V16.6667C1.87719 17.0528 2.03154 17.4224 2.30455 17.6954C2.57757 17.9685 2.94723 18.1228 3.33333 18.125H16.6667C17.0528 18.1228 17.4224 17.9685 17.6954 17.6954C17.9685 17.4224 18.1228 17.0528 18.125 16.6667V4.16667C18.1228 3.78057 17.9685 3.4109 17.6954 3.13789C17.4224 2.86487 17.0528 2.71052 16.6667 2.70833ZM3.33333 3.95833H5.20833V4.16667C5.20833 4.33243 5.27418 4.4914 5.39139 4.60861C5.5086 4.72582 5.66757 4.79167 5.83333 4.79167C5.99909 4.79167 6.15806 4.72582 6.27528 4.60861C6.39249 4.4914 6.45833 4.33243 6.45833 4.16667V3.95833H13.5417V4.16667C13.5417 4.33243 13.6075 4.4914 13.7247 4.60861C13.8419 4.72582 14.0009 4.79167 14.1667 4.79167C14.3324 4.79167 14.4914 4.72582 14.6086 4.60861C14.7258 4.4914 14.7917 4.33243 14.7917 4.16667V3.95833H16.6667C16.7219 3.95833 16.7749 3.98028 16.814 4.01935C16.8531 4.05842 16.875 4.11141 16.875 4.16667V6.875H3.125V4.16667C3.125 4.11141 3.14695 4.05842 3.18602 4.01935C3.22509 3.98028 3.27808 3.95833 3.33333 3.95833ZM16.6667 16.875H3.33333C3.27808 16.875 3.22509 16.8531 3.18602 16.814C3.14695 16.7749 3.125 16.7219 3.125 16.6667V8.125H16.875V16.6667C16.875 16.7219 16.8531 16.7749 16.814 16.814C16.7749 16.8531 16.7219 16.875 16.6667 16.875ZM12.5 10.8333L10.8333 12.5L12.5 14.1667C12.6025 14.2813 12.6592 14.4296 12.6592 14.5833C12.6592 14.7371 12.6025 14.8854 12.5 15C12.3854 15.1025 12.2371 15.1592 12.0833 15.1592C11.9296 15.1592 11.7813 15.1025 11.6667 15L10 13.3333L8.33333 15C8.21875 15.1025 8.0704 15.1592 7.91667 15.1592C7.76293 15.1592 7.61459 15.1025 7.5 15C7.39751 14.8854 7.34085 14.7371 7.34085 14.5833C7.34085 14.4296 7.39751 14.2813 7.5 14.1667L9.16667 12.5L7.5 10.8333C7.4443 10.7167 7.42613 10.5857 7.44798 10.4583C7.46984 10.3309 7.53065 10.2134 7.62204 10.122C7.71343 10.0306 7.83091 9.96984 7.95829 9.94798C8.08568 9.92613 8.21671 9.9443 8.33333 10L10 11.6667L11.6667 10C11.7833 9.9443 11.9143 9.92613 12.0417 9.94798C12.1691 9.96984 12.2866 10.0306 12.378 10.122C12.4694 10.2134 12.5302 10.3309 12.552 10.4583C12.5739 10.5857 12.5557 10.7167 12.5 10.8333Z" fill="#37766E"/>
		</svg>`
  }, g = (
    /* HTML */
    `
  <div class="trial">
    <h3>Start your 30-day free trial</h3>
    <ul>
      <li>
        <span>${m.lock}</span>
        Get instant access to all features
      </li>
      <li>
        <span>${m.calendar}</span>
        Cancel anytime before the end of trial
      </li>
    </ul>
  </div>
  <div class="benefits">
    <h3>What's included in <span></span> plan</h3>
  </div>
  <div class="other_blocks"></div>
`
  ), x = (
    /* HTML */
    `
  <div class="confirm_button">
    <button>Start your 30-day free trial</button>
    <p>Your payment information is secure and encrypted</p>
  </div>
`
  ), C = (
    /* HTML */
    `
  <div class="postal">
    <p>Postal Code *</p>
    <input type="text" placeholder="Postal Code" />
  </div>
`
  ), y = (r) => (
    /* HTML */
    `
  <div class="trial_time">
    <p>
      Your trial will end on ${new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 30)).toLocaleDateString("en-US")}.
      After that, your card will be charged ${r} each year unless you cancel prior to the renewal date.
    </p>
    <p>Trial starts on ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-US")}</p>
  </div>
`
  );
  b({ name: "Update Checkout", dev: "YK" }), h("update_checkout");
  const w = {
    "billing-first-name": "CRS",
    "billing-last-name": "User",
    "billing-address1": "123 Main St",
    "billing-city": "Chicago"
  };
  class v {
    constructor() {
      this.observer();
    }
    async init() {
      var i, o;
      await u("body"), e("body").elements[0].insertAdjacentHTML("beforeend", `<style class="crs_checkout_style">${f}</style>`), await u('[data-testid="billing-main-content"]'), e('[data-testid="billing-main-content"]').elements[0].insertAdjacentHTML("afterbegin", g), e(".benefits h3").elements[0].insertAdjacentElement(
        "afterend",
        e('[data-testid="checkout-plan-summary-card"] h3+div').elements[0]
      ), e(".other_blocks").elements[0].insertAdjacentElement(
        "afterbegin",
        e('[data-testid="billing-checkout-container"]').elements[0]
      ), e(".other_blocks").elements[0].insertAdjacentElement(
        "afterbegin",
        e('[data-testid="billing-plan-summary-section"]+div').elements[0]
      ), e(".other_blocks").elements[0].insertAdjacentElement(
        "afterbegin",
        e('[data-testid="billing-plan-summary-section"]').elements[0]
      ), e(".other_blocks").elements[0].insertAdjacentHTML("afterend", x), e('[data-testid="checkout-plan-summary-card"] .change_plan').elements[0] || e('[data-testid="checkout-plan-summary-card"]>div').elements[0].insertAdjacentHTML(
        "beforeend",
        '<p class="change_plan">Change plan</p>'
      ), e(".change_plan").on("click", () => {
        window.history.back();
      });
      const t = e(
        '[data-testid="checkout-plan-summary-card"] .flex.justify-between.items-center:first-of-type span.font-semibold'
      ).text(), n = e(
        '[data-testid="checkout-plan-summary-card"] .flex.justify-between.items-center:nth-of-type(2) span.font-semibold'
      ).text();
      e(".benefits h3 span").elements[0].textContent = t, (i = e('[data-testid="card-section"]').elements[0]) == null || i.insertAdjacentHTML("afterend", C), e('[data-testid="checkout-express-checkout-card"] span').text("Or start Free Trial with a credit card"), e('[data-testid="checkout-express-checkout-card"] h3').text("Start your 30-day free trial"), (o = e('[data-testid="billing-checkout-container"]').elements[0]) == null || o.insertAdjacentHTML("beforebegin", y(n)), e(".confirm_button").on("click", "button", () => {
        Object.entries(w).forEach(([s, l]) => {
          var c;
          const a = e(`#${s}`).elements[0];
          if (a && a.value !== l) {
            const d = (c = Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              "value"
            )) == null ? void 0 : c.set;
            d == null || d.call(a, l), a.dispatchEvent(new Event("input", { bubbles: !0 }));
          }
        }), e("#billing-state").elements[0].value = "IL", e("#billing-state").elements[0].dispatchEvent(new Event("change", { bubbles: !0 })), e('[data-testid="checkout-confirm-button-submit"]').elements[0].click(), setTimeout(() => {
          var s;
          e('[data-testid="billing-address-postal-code-required"]').elements[0] ? e(".postal .postal_error").elements[0] || e(".postal input").elements[0].insertAdjacentHTML(
            "afterend",
            '<p class="postal_error">Postal code is required</p>'
          ) : (s = e(".postal .postal_error").elements[0]) == null || s.remove();
        }, 300);
      }), e(".postal input").on("input", (s) => {
        var d;
        const l = e('[data-testid="billing-address-postal-code-input"]').elements[0], a = s.target.value, c = (d = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")) == null ? void 0 : d.set;
        c == null || c.call(l, a), l.dispatchEvent(new Event("input", { bubbles: !0 }));
      });
    }
    async observer() {
      const t = new MutationObserver(async (n) => {
        var i;
        console.log(n), t.disconnect(), window.location.href.includes("/billing?mode=subscription") && !document.querySelector(".trial") && await this.init(), !window.location.href.includes("/billing?mode=subscription") && document.querySelector(".crs_checkout_style") && (console.log("remove style"), (i = e(".crs_checkout_style").elements[0]) == null || i.remove()), t.observe(document.body, { childList: !0, subtree: !0 });
      });
      t.observe(document.body, { childList: !0, subtree: !0 });
    }
  }
  new v();
})();
//# sourceMappingURL=index.js.map
