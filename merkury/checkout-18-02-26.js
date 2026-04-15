(function() {
  "use strict";
  const H = `[data-testid=billing-page-header],
[data-testid=checkout-plan-summary-card] > div > div:last-of-type,
[data-testid=checkout-confirm-button-card] > div:last-of-type,
[data-testid=checkout-confirm-button-card] > div:first-child > p,
[data-testid=checkout-confirm-button-card] > div:first-child > button,
[data-testid=billing-section],
[data-testid=checkout-express-checkout-card] p {
  display: none;
}

[data-testid=checkout-confirm-button-card] {
  padding: 0;
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
  margin: 16px auto 0;
  max-width: calc(100% - 32px);
  width: 100%;
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

#recurly-form > div {
  gap: unset !important;
}

[data-testid=billing-main-content] {
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 16px auto 0;
  max-width: calc(100% - 32px);
  width: 100%;
}

[data-testid=billing-checkout-container] > div > div {
  gap: unset !important;
}

[data-testid=billing-plan-summary-section] > div {
  margin-bottom: 0 !important;
}

[data-testid=billing-promo-code-section] {
  margin-bottom: -24px;
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
  margin-bottom: 16px;
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
  transition: background 0.2s, opacity 0.2s;
}
.confirm_button button.processing {
  background: #5a9e97;
  opacity: 0.75;
  cursor: not-allowed;
  pointer-events: none;
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
  padding: 0 24px 24px !important;
  margin-top: -48px !important;
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
}

.confirm_button__legal {
  margin-bottom: 10px;
}

.confirm_button__legal-link {
  white-space: nowrap;
  font-weight: 600;
  color: #37766f;
  text-decoration: none;
  cursor: pointer;
}/*# sourceMappingURL=style.css.map */`, b = (l) => new Promise((e) => {
    const o = document.querySelector(l);
    o && e(o);
    const s = new MutationObserver(() => {
      const r = document.querySelector(l);
      r && (e(r), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), E = ({ name: l, dev: e }) => {
    console.log(
      `%c EXP: ${l} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class u {
    constructor(e) {
      this.elements = e instanceof u ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, o, s) {
      return typeof o == "function" && (s = o, o = ""), this.elements.forEach((r) => {
        r.addEventListener(e, function(n) {
          var a;
          if (o !== "") {
            let i = (a = n.target) == null ? void 0 : a.closest(o);
            i && (s == null || s.call(i, n));
          } else
            s == null || s.call(r, n);
        });
      }), this;
    }
    addClass(e) {
      return this.elements.forEach(function(o) {
        o.classList.add(e);
      }), this;
    }
    removeClass(e) {
      return this.elements.forEach(function(o) {
        o.classList.remove(e);
      }), this;
    }
    toggleClass(e) {
      return this.elements.forEach(function(o) {
        o.classList.toggle(e);
      }), this;
    }
    each(e) {
      for (let o of this.elements)
        e(new u(o), this.elements.indexOf(o));
      return this;
    }
    style(e, o) {
      const s = e.split("-").map((r, n) => n === 0 ? r : r.charAt(0).toUpperCase() + r.slice(1)).join("");
      return this.elements.forEach(function(r) {
        r.style[s] = o;
      }), this;
    }
    find(e) {
      const o = this.elements.map((s) => Array.from(s.querySelectorAll(e)));
      return new u(o.flat());
    }
    attr(e, o) {
      return o ? (this.elements.forEach(function(s) {
        s.setAttribute(e, o);
      }), this) : this.elements[0].getAttribute(e);
    }
    text(e) {
      return e ? (this.elements.forEach(function(o) {
        o.textContent = e;
      }), this) : this.elements[0].textContent || "";
    }
    html(e) {
      return e ? (this.elements.forEach(function(o) {
        o.innerHTML = e;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const t = (l) => new u(l), M = (l) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", l, "variant_1"));
    }, 1e3);
  }, x = {
    lock: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 2.2084C8.23761 2.2084 6.77298 3.42238 6.48964 5.01582C6.42305 5.39026 6.04865 5.64268 5.65338 5.57961C5.25811 5.51653 4.99165 5.16187 5.05822 4.78742C5.45732 2.54302 7.51725 0.833328 10.0001 0.833328C12.7681 0.833328 15.0118 2.9589 15.0118 5.58093V7.97064C16.4572 8.42366 17.5 9.71393 17.5 11.235V15.729C17.5 17.6276 15.8752 19.1667 13.8711 19.1667H6.12893C4.12473 19.1667 2.5 17.6276 2.5 15.729V11.235C2.5 9.33643 4.12473 7.79734 6.12893 7.79734H13.5602V5.58093C13.5602 3.71834 11.9663 2.2084 10.0001 2.2084ZM6.12893 9.17243C4.92641 9.17243 3.95157 10.0958 3.95157 11.235V15.729C3.95157 16.8682 4.92641 17.7916 6.12893 17.7916H13.8711C15.0735 17.7916 16.0484 16.8682 16.0484 15.729V11.235C16.0484 10.0958 15.0735 9.17243 13.8711 9.17243H6.12893ZM8.06226 12.3805C8.06226 12.0008 8.38721 11.6929 8.78804 11.6929H11.213C11.6139 11.6929 11.9388 12.0008 11.9388 12.3805C11.9388 12.7602 11.6139 13.068 11.213 13.068H10.7263V14.5836C10.7263 14.9633 10.4013 15.2712 10.0005 15.2712C9.59967 15.2712 9.27471 14.9633 9.27471 14.5836V13.068H8.78804C8.38721 13.068 8.06226 12.7602 8.06226 12.3805Z" fill="#37766E"/>
		</svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path d="M16.6667 2.70833H14.7917V2.5C14.7917 2.33424 14.7258 2.17527 14.6086 2.05806C14.4914 1.94085 14.3324 1.875 14.1667 1.875C14.0009 1.875 13.8419 1.94085 13.7247 2.05806C13.6075 2.17527 13.5417 2.33424 13.5417 2.5V2.70833H6.45833V2.5C6.45833 2.33424 6.39249 2.17527 6.27528 2.05806C6.15806 1.94085 5.99909 1.875 5.83333 1.875C5.66757 1.875 5.5086 1.94085 5.39139 2.05806C5.27418 2.17527 5.20833 2.33424 5.20833 2.5V2.70833H3.33333C2.94723 2.71052 2.57757 2.86487 2.30455 3.13789C2.03154 3.4109 1.87719 3.78057 1.875 4.16667V16.6667C1.87719 17.0528 2.03154 17.4224 2.30455 17.6954C2.57757 17.9685 2.94723 18.1228 3.33333 18.125H16.6667C17.0528 18.1228 17.4224 17.9685 17.6954 17.6954C17.9685 17.4224 18.1228 17.0528 18.125 16.6667V4.16667C18.1228 3.78057 17.9685 3.4109 17.6954 3.13789C17.4224 2.86487 17.0528 2.71052 16.6667 2.70833ZM3.33333 3.95833H5.20833V4.16667C5.20833 4.33243 5.27418 4.4914 5.39139 4.60861C5.5086 4.72582 5.66757 4.79167 5.83333 4.79167C5.99909 4.79167 6.15806 4.72582 6.27528 4.60861C6.39249 4.4914 6.45833 4.33243 6.45833 4.16667V3.95833H13.5417V4.16667C13.5417 4.33243 13.6075 4.4914 13.7247 4.60861C13.8419 4.72582 14.0009 4.79167 14.1667 4.79167C14.3324 4.79167 14.4914 4.72582 14.6086 4.60861C14.7258 4.4914 14.7917 4.33243 14.7917 4.16667V3.95833H16.6667C16.7219 3.95833 16.7749 3.98028 16.814 4.01935C16.8531 4.05842 16.875 4.11141 16.875 4.16667V6.875H3.125V4.16667C3.125 4.11141 3.14695 4.05842 3.18602 4.01935C3.22509 3.98028 3.27808 3.95833 3.33333 3.95833ZM16.6667 16.875H3.33333C3.27808 16.875 3.22509 16.8531 3.18602 16.814C3.14695 16.7749 3.125 16.7219 3.125 16.6667V8.125H16.875V16.6667C16.875 16.7219 16.8531 16.7749 16.814 16.814C16.7749 16.8531 16.7219 16.875 16.6667 16.875ZM12.5 10.8333L10.8333 12.5L12.5 14.1667C12.6025 14.2813 12.6592 14.4296 12.6592 14.5833C12.6592 14.7371 12.6025 14.8854 12.5 15C12.3854 15.1025 12.2371 15.1592 12.0833 15.1592C11.9296 15.1592 11.7813 15.1025 11.6667 15L10 13.3333L8.33333 15C8.21875 15.1025 8.0704 15.1592 7.91667 15.1592C7.76293 15.1592 7.61459 15.1025 7.5 15C7.39751 14.8854 7.34085 14.7371 7.34085 14.5833C7.34085 14.4296 7.39751 14.2813 7.5 14.1667L9.16667 12.5L7.5 10.8333C7.4443 10.7167 7.42613 10.5857 7.44798 10.4583C7.46984 10.3309 7.53065 10.2134 7.62204 10.122C7.71343 10.0306 7.83091 9.96984 7.95829 9.94798C8.08568 9.92613 8.21671 9.9443 8.33333 10L10 11.6667L11.6667 10C11.7833 9.9443 11.9143 9.92613 12.0417 9.94798C12.1691 9.96984 12.2866 10.0306 12.378 10.122C12.4694 10.2134 12.5302 10.3309 12.552 10.4583C12.5739 10.5857 12.5557 10.7167 12.5 10.8333Z" fill="#37766E"/>
		</svg>`
  }, T = (
    /* HTML */
    `
  <div class="trial">
    <h3>Start your 30-day free trial</h3>
    <ul>
      <li>
        <span>${x.lock}</span>
        Get instant access to all features
      </li>
      <li>
        <span>${x.calendar}</span>
        Cancel anytime before the end of trial
      </li>
    </ul>
  </div>
  <div class="benefits">
    <h3>What's included in <span></span> plan</h3>
  </div>
`
  ), A = (
    /* HTML */
    `
  <div class="confirm_button">
    <p class="confirm_button__legal">
      By subscribing, you authorize Merkury Smart to charge your selected payment method according to the term until you
      cancel. By placing your order, you agree to our
      <span class="confirm_button__legal-link" data-target="confirm-button-terms-link">Terms of Use</span>
      and
      <span class="confirm_button__legal-link" data-target="confirm-button-privacy-link">Privacy Policy</span>.
    </p>
    <button>Start your 30-day free trial</button>
    <p>Your payment information is secure and encrypted</p>
  </div>
`
  ), S = (
    /* HTML */
    `
  <div class="postal" style="padding: 0 24px 24px; margin-top: -24px;">
    <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
      <div>
        <p style="font-size: 14px; line-height: 20px; font-weight: 700; margin-bottom: 8px;">First Name *</p>
        <input
          type="text"
          placeholder="First Name"
          class="postal-first-name"
          style="border-radius: 12px; border: 1px solid #e5e7eb; font-size: 16px; padding: 14px 16px; width: 100%; outline: none; box-sizing: border-box;"
        />
      </div>
      <div>
        <p style="font-size: 14px; line-height: 20px; font-weight: 700; margin-bottom: 8px;">Last Name *</p>
        <input
          type="text"
          placeholder="Last Name"
          class="postal-last-name"
          style="border-radius: 12px; border: 1px solid #e5e7eb; font-size: 16px; padding: 14px 16px; width: 100%; outline: none; box-sizing: border-box;"
        />
      </div>
    </div>
    <p style="font-size: 14px; line-height: 20px; font-weight: 700; margin-bottom: 8px;">Postal Code *</p>
    <input
      type="text"
      placeholder="Postal Code"
      class="postal-zip"
      style="border-radius: 12px; border: 1px solid #e5e7eb; font-size: 16px; padding: 14px 16px; width: 100%; outline: none; box-sizing: border-box;"
    />
  </div>
`
  ), V = (l) => (
    /* HTML */
    `
  <div class="trial_time">
    <p>
      Your trial will end on ${new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 30)).toLocaleDateString("en-US")}.
      After that, your card will be charged ${l} each year unless you cancel prior to the renewal date.
    </p>
    <p>Trial starts on ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-US")}</p>
  </div>
`
  );
  E({ name: "Update Checkout", dev: "YK" }), M("update_checkout");
  class j {
    constructor() {
      this.watchForCardSection = !1, this.observer();
    }
    addPostal() {
      var s;
      (s = t('[data-testid="card-section"]').elements[0]) == null || s.insertAdjacentHTML("afterend", S);
      const e = (r, n) => {
        const a = t(`#${n}`).elements[0];
        a != null && a.value && (t(r).elements[0].value = a.value), t(r).on("input", (i) => {
          var m;
          const c = t(`#${n}`).elements[0], h = i.target.value, p = (m = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")) == null ? void 0 : m.set;
          p == null || p.call(c, h), c.dispatchEvent(new Event("input", { bubbles: !0 }));
        });
      }, o = t('[data-testid="billing-address-postal-code-input"]').elements[0];
      o != null && o.value && (t(".postal-zip").elements[0].value = o.value), t(".postal-zip").on("input", (r) => {
        var c;
        const n = t('[data-testid="billing-address-postal-code-input"]').elements[0], a = r.target.value, i = (c = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")) == null ? void 0 : c.set;
        i == null || i.call(n, a), n.dispatchEvent(new Event("input", { bubbles: !0 }));
      }), e(".postal-first-name", "billing-first-name"), e(".postal-last-name", "billing-last-name");
    }
    async init() {
      var s;
      await b("body"), t("body").elements[0].insertAdjacentHTML("beforeend", `<style class="crs_checkout_style">${H}</style>`), await b('[data-testid="billing-main-content"]'), t('[data-testid="billing-main-content"]').elements[0].insertAdjacentHTML("beforebegin", T), t(".benefits h3").elements[0].insertAdjacentElement(
        "afterend",
        t('[data-testid="checkout-plan-summary-card"] h3+div').elements[0]
      ), t('[data-testid="billing-main-content"]').elements[0].insertAdjacentHTML("afterend", A), b('[data-testid="confirm-button-terms-link"], [data-testid="confirm-button-privacy-link"]').then(() => {
        console.log("finded"), t(".confirm_button__legal-link").on("click", (r) => {
          var i;
          console.log("click link");
          const a = r.target.dataset.target;
          console.log(a), a && ((i = t(`[data-testid="${a}"]`).elements[0]) == null || i.click());
        });
      }), t('[data-testid="checkout-plan-summary-card"] .change_plan').elements[0] || t('[data-testid="checkout-plan-summary-card"]>div').elements[0].insertAdjacentHTML(
        "beforeend",
        '<p class="change_plan">Change plan</p>'
      ), t(".change_plan").on("click", () => {
        window.history.back();
      });
      const e = t(
        '[data-testid="checkout-plan-summary-card"] .flex.justify-between.items-center:first-of-type span.font-semibold'
      ).text(), o = t(
        '[data-testid="checkout-plan-summary-card"] .flex.justify-between.items-center:nth-of-type(2) span.font-semibold'
      ).text();
      t(".benefits h3 span").elements[0].textContent = e, this.addPostal(), t('[data-testid="checkout-express-checkout-card"] span').text("Or start Free Trial with a credit card"), t('[data-testid="checkout-express-checkout-card"] h3').text("Start your 30-day free trial"), (s = t('[data-testid="billing-checkout-container"]').elements[0]) == null || s.insertAdjacentHTML("beforebegin", V(o)), t('[data-testid="checkout-payment-method-change-button"]').elements[0] && (this.watchForCardSection = !0), t(".confirm_button").on("click", "button", async () => {
        var i, c, h, p, m, y, w, v, C, k;
        if (!t('[data-testid="checkout-payment-method-change-button"]').elements[0]) {
          t("#billing-country").elements[0].value = "US", t("#billing-country").elements[0].dispatchEvent(new Event("change", { bubbles: !0 })), await b("#billing-state");
          const f = (i = t(".postal-zip").elements[0]) == null ? void 0 : i.value.trim();
          let _ = "IL", L = "Chicago";
          if (f)
            try {
              const d = await fetch(`https://api.zippopotam.us/us/${f}`);
              if (d.ok) {
                const z = await d.json();
                _ = ((h = (c = z.places) == null ? void 0 : c[0]) == null ? void 0 : h["state abbreviation"]) ?? "IL", L = ((m = (p = z.places) == null ? void 0 : p[0]) == null ? void 0 : m["place name"]) ?? "Chicago";
              }
            } catch {
            }
          const g = t("#billing-city").elements[0];
          if (g) {
            const d = (y = Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              "value"
            )) == null ? void 0 : y.set;
            d == null || d.call(g, L), g.dispatchEvent(new Event("input", { bubbles: !0 }));
          }
          t("#billing-state").elements[0].value = _, t("#billing-state").elements[0].dispatchEvent(new Event("change", { bubbles: !0 }));
          const P = (w = t(".postal-first-name").elements[0]) == null ? void 0 : w.value.trim(), q = (v = t(".postal-last-name").elements[0]) == null ? void 0 : v.value.trim();
          if ((C = t(".postal .first_name_error").elements[0]) == null || C.remove(), (k = t(".postal .last_name_error").elements[0]) == null || k.remove(), !P) {
            t(".postal-first-name").elements[0].insertAdjacentHTML(
              "afterend",
              '<p class="first_name_error" style="color:#dc2626;font-size:12px;margin-top:4px;">First name is required</p>'
            );
            return;
          }
          if (!q) {
            t(".postal-last-name").elements[0].insertAdjacentHTML(
              "afterend",
              '<p class="last_name_error" style="color:#dc2626;font-size:12px;margin-top:4px;">Last name is required</p>'
            );
            return;
          }
        }
        const r = t('[data-testid="checkout-confirm-button-submit"]').elements[0], n = t(".confirm_button button").elements[0], a = (n == null ? void 0 : n.textContent) ?? "";
        n && (n.textContent = "Processing...", n.classList.add("processing")), r.click(), setTimeout(() => {
          var f;
          t('[data-testid="billing-address-postal-code-required"]').elements[0] ? (t(".postal .postal_error").elements[0] || t(".postal-zip").elements[0].insertAdjacentHTML(
            "afterend",
            '<p class="postal_error">Postal code is required</p>'
          ), n && (n.textContent = a, n.classList.remove("processing"))) : (f = t(".postal .postal_error").elements[0]) == null || f.remove();
        }, 300);
      });
    }
    async observer() {
      const e = new MutationObserver(async (o) => {
        var s, r;
        if (e.disconnect(), window.location.href.includes("/billing?mode=subscription") && !document.querySelector(".trial") && await this.init(), !window.location.href.includes("/billing?mode=subscription") && document.querySelector(".crs_checkout_style") && (console.log("remove style"), (s = t(".crs_checkout_style").elements[0]) == null || s.remove()), window.location.href.includes("/billing?mode=subscription") && this.watchForCardSection && document.querySelector('[data-testid="card-section"]') && !document.querySelector(".postal") && this.addPostal(), window.location.href.includes("/billing?mode=update") && document.querySelector('[data-testid="card-section"]') && !document.querySelector(".postal")) {
          this.addPostal();
          const n = document.querySelector(".postal");
          n == null || n.style.setProperty("margin-top", "0px"), n == null || n.style.setProperty("padding-top", "20px"), n == null || n.style.setProperty("box-shadow", "rgba(0, 0, 0, 0.3) 0px 1px 5px"), n == null || n.style.setProperty("border-radius", "12px"), setTimeout(() => {
            const i = document.querySelector(
              '[data-testid="billing-address-postal-code-input"]'
            ), c = document.querySelector(".postal-zip");
            i != null && i.value && c && (c.value = i.value);
          }, 300);
          const a = document.querySelector('[data-testid="billing-section"]');
          a && (a.style.display = "none");
        }
        if ((r = t("[data-testid=checkout-plan-summary-card]").elements[0]) != null && r.innerText.includes("After Trial")) {
          console.log("trial");
          const n = t(".trial").elements[0], a = t(".trial_time").elements[0];
          n && (n.style.display = "block"), a && (a.style.display = "block");
          const i = t(".confirm_button button").elements[0];
          i && !i.classList.contains("processing") && (i.textContent = "Start your 30-day free trial");
        } else {
          console.log("no trial");
          const n = t(".trial").elements[0], a = t(".trial_time").elements[0];
          n && (n.style.display = "none"), a && (a.style.display = "none");
          const i = t(".confirm_button button").elements[0];
          i && !i.classList.contains("processing") && (i.textContent = "Subscribe");
        }
        e.observe(document.body, { childList: !0, subtree: !0 });
      });
      e.observe(document.body, { childList: !0, subtree: !0 });
    }
  }
  new j();
})();
//# sourceMappingURL=index.js.map
