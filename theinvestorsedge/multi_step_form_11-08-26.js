(function() {
  "use strict";
  const O = `.pwr-sec-form {
  display: none !important;
}

.tie-msf-overlay {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 999999;
  background: #f4f6fa;
  overflow-y: auto;
}
.tie-msf-overlay--open {
  display: block;
}

.tie-msf-modal {
  position: relative;
  width: 100%;
  min-height: 100%;
  background: #f4f6fa;
}
.tie-msf-modal__close {
  display: none;
  position: fixed;
  top: 12px;
  right: 12px;
  z-index: 1;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: none;
  background: #fff;
  color: #0d2034;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(9, 35, 62, 0.2);
}
@media (min-width: 768px) {
  .tie-msf-modal__close {
    display: inline-block;
  }
}

.tie-msf {
  --tie-msf-orange: #ff9902;
  --tie-msf-navy: #0d2034;
  --tie-msf-body: #425b76;
  --tie-msf-bg: #f4f6fa;
  --tie-msf-border: #e1e6ee;
  --tie-msf-blue-bg: #dceaf7;
  --tie-msf-green: #22a55e;
  --tie-msf-disabled: #b9c2cc;
  --tie-msf-selected-bg: #fdecd3;
  --tie-msf-muted-text: #7e8c9c;
  max-width: 560px;
  margin: 0 auto;
  background: var(--tie-msf-bg);
  font-family: "Inter", Arial, sans-serif;
  color: var(--tie-msf-body);
  box-sizing: border-box;
  position: relative;
}
.tie-msf * {
  box-sizing: border-box;
}
.tie-msf__body {
  padding: 24px 20px;
  padding-bottom: 140px;
}
.tie-msf__header {
  background: #ffffff;
  border-bottom: 1px solid #cfe2f3;
  padding: 16px 20px;
}
.tie-msf__header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.tie-msf__back {
  background: none;
  border: none;
  font-size: 20px;
  color: var(--tie-msf-navy);
  cursor: pointer;
  padding: 4px 8px;
  line-height: 1;
}
@media (min-width: 768px) {
  .tie-msf__back--close {
    visibility: hidden;
  }
}
.tie-msf__logo {
  display: flex;
  align-items: center;
}
.tie-msf__logo img {
  width: 80px;
  height: auto;
}
.tie-msf__step-label {
  font-family: "Poppins", Arial, sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #3d85c6;
  letter-spacing: 0.02em;
}
.tie-msf__progress-track {
  height: 4px;
  background: var(--tie-msf-border);
  border-radius: 2px;
  margin: 12px 0px 0;
  overflow: hidden;
}
.tie-msf__progress-fill {
  height: 100%;
  background: var(--tie-msf-orange);
  border-radius: 2px;
  transition: width 0.3s ease;
}
.tie-msf__title {
  font-family: "Poppins", Arial, sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.2;
  color: var(--tie-msf-navy);
  margin: 0 0 12px;
}
.tie-msf__title-accent {
  color: var(--tie-msf-orange);
}
.tie-msf__subtitle {
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 24px;
}
.tie-msf__field-group {
  margin-bottom: 20px;
}
.tie-msf__label {
  display: block;
  font-family: "Poppins", Arial, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--tie-msf-navy);
  margin-bottom: 10px;
}
.tie-msf__required {
  color: var(--tie-msf-orange);
}
.tie-msf__chip-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.tie-msf__chip-grid--2col {
  grid-template-columns: 1fr 1fr;
}
.tie-msf__chip-grid--amount {
  grid-template-columns: 1fr 1fr;
}
.tie-msf__chip-grid--amount .tie-msf__chip:last-child {
  grid-column: 1/-1;
}
.tie-msf__chip {
  min-height: 50px;
  padding: 12px 16px;
  background: #fff;
  border: 1px solid var(--tie-msf-border);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--tie-msf-body);
  cursor: pointer;
  text-align: center;
}
.tie-msf__chip--selected {
  background: var(--tie-msf-selected-bg);
  border-color: var(--tie-msf-orange);
  color: var(--tie-msf-navy);
}
.tie-msf__geo-banner {
  background: var(--tie-msf-blue-bg);
  border-radius: 8px;
  padding: 16px;
}
.tie-msf__geo-question {
  margin: 0 0 8px;
  font-size: 13px;
}
.tie-msf__geo-state {
  margin: 0 0 12px;
  font-family: "Poppins", Arial, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: var(--tie-msf-navy);
}
.tie-msf__geo-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.tie-msf__btn {
  min-height: 48px;
  border-radius: 8px;
  font-family: "Poppins", Arial, sans-serif;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid transparent;
}
.tie-msf__btn--primary {
  background: var(--tie-msf-orange);
  color: var(--tie-msf-navy);
  border-color: var(--tie-msf-orange);
}
.tie-msf__btn--secondary {
  background: #fff;
  color: var(--tie-msf-body);
  border-color: var(--tie-msf-border);
}
.tie-msf__state-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 50px;
  padding: 12px 16px;
  background: var(--tie-msf-selected-bg);
  border: 1px solid var(--tie-msf-orange);
  border-radius: 8px;
  font-weight: 700;
  color: var(--tie-msf-navy);
}
.tie-msf__state-pill-name {
  flex: 1;
}
.tie-msf__state-pill-clear {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: var(--tie-msf-navy);
  display: flex;
  align-items: center;
}
.tie-msf__state-search {
  width: 100%;
  min-height: 50px;
  padding: 12px 16px;
  border: 1px solid var(--tie-msf-border);
  border-radius: 8px;
  font-size: 14px;
  background: #fff;
}
.tie-msf__state-results {
  margin-top: 8px;
  border: 1px solid var(--tie-msf-border);
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}
.tie-msf__state-result {
  display: block;
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  background: none;
  border: none;
  border-bottom: 1px solid var(--tie-msf-border);
  cursor: pointer;
  font-size: 14px;
}
.tie-msf__state-result:last-child {
  border-bottom: none;
}
.tie-msf__popular-label {
  margin: 16px 0 10px;
  font-size: 13px;
}
.tie-msf__popular-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tie-msf__popular-chip {
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid var(--tie-msf-border);
  background: #fff;
  font-size: 13px;
  cursor: pointer;
}
.tie-msf__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.tie-msf__summary-bar {
  background: var(--tie-msf-blue-bg);
  color: var(--tie-msf-navy);
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 13px;
  font-weight: 500;
  width: calc(100% + 40px);
  position: relative;
  left: -20px;
  top: -24px;
}
.tie-msf__name-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.tie-msf__input {
  width: 100% !important;
  min-height: 48px;
  padding: 12px 16px !important;
  border: 1px solid var(--tie-msf-border) !important;
  border-radius: 8px !important;
  font-size: 14px !important;
  background: #fff !important;
}
.tie-msf__phone-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.tie-msf__phone-row .tie-msf__input {
  flex: 1;
}
.tie-msf__phone-row--pending, .tie-msf__phone-row--verified {
  align-items: center;
  gap: 8px;
  border-radius: 8px !important;
  padding: 0 16px;
}
.tie-msf__phone-row--pending .tie-msf__input, .tie-msf__phone-row--verified .tie-msf__input {
  border: none !important;
  padding: 12px 0 !important;
}
.tie-msf__phone-row--pending {
  border: 1px solid var(--tie-msf-border) !important;
  background: transparent !important;
}
.tie-msf__phone-row--pending .tie-msf__input {
  background: transparent !important;
  color: var(--tie-msf-muted-text) !important;
}
.tie-msf__phone-row--verified {
  border: 1px solid var(--tie-msf-orange) !important;
  background: var(--tie-msf-selected-bg) !important;
}
.tie-msf__phone-row--verified .tie-msf__input {
  background: transparent !important;
}
.tie-msf__link {
  background: none;
  border: none;
  color: var(--tie-msf-orange);
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
}
.tie-msf__link svg {
  vertical-align: middle;
  margin-top: -2px;
}
.tie-msf__link--muted {
  color: var(--tie-msf-body);
}
.tie-msf__link:disabled {
  color: var(--tie-msf-disabled);
  cursor: not-allowed;
  text-decoration: none;
}
.tie-msf__otp-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
}
.tie-msf__otp-boxes {
  display: flex;
  gap: 10px;
}
.tie-msf__otp-box {
  width: 48px !important;
  height: 48px !important;
  text-align: center;
  font-size: 18px !important;
  border: 1px solid var(--tie-msf-border) !important;
  border-radius: 8px !important;
  background: #fff !important;
}
.tie-msf__otp-footer {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.tie-msf__otp-timer {
  background: var(--tie-msf-blue-bg);
  color: var(--tie-msf-navy);
  font-weight: 700;
  font-size: 13px;
  padding: 6px 10px;
  border-radius: 6px;
  white-space: nowrap;
}
.tie-msf__verified {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--tie-msf-green);
  font-size: 13px;
  font-weight: 600;
  margin: 10px 0 0;
}
.tie-msf__consent {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 20px 0 8px;
  cursor: pointer;
}
.tie-msf__consent-checkbox {
  margin-top: 3px;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
.tie-msf__consent-text {
  font-family: "Poppins", Arial, sans-serif;
  font-weight: 700;
  font-size: 14px !important;
  color: var(--tie-msf-navy);
}
.tie-msf__consent-fine-print {
  font-size: 11px;
  line-height: 1.5;
  color: #7c8aa0;
  margin: 0 0 20px;
}
.tie-msf__consent-fine-print a {
  color: #3d85c6;
}
.tie-msf__field-error {
  color: #e5484d;
  font-size: 12px;
  font-weight: 500;
  margin: 6px 0 0;
}
.tie-msf__footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: var(--tie-msf-bg);
  padding: 12px 20px;
  border-top: 1px solid var(--tie-msf-border);
}
.tie-msf__next-label {
  text-align: center;
  font-size: 12px;
  margin: 0 0 10px;
}
.tie-msf__cta {
  width: 100%;
  min-height: 54px;
  border-radius: 8px;
  background: var(--tie-msf-orange);
  color: var(--tie-msf-navy);
  border: none;
  font-family: "Poppins", Arial, sans-serif;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  text-transform: uppercase;
}
.tie-msf__cta:disabled {
  background: var(--tie-msf-disabled);
  color: #fff;
  cursor: not-allowed;
}
.tie-msf__trust-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
  font-size: 12px;
}
.tie-msf__trust-row span {
  display: flex;
  align-items: center;
  gap: 8px;
}
@media (min-width: 768px) {
  .tie-msf {
    padding: 40px 0;
  }
  .tie-msf__title {
    font-size: 32px;
  }
  .tie-msf__header {
    background: none;
    padding: 0 0 16px;
  }
  .tie-msf__subtitle {
    font-size: 18px;
  }
  .tie-msf__body {
    padding: 24px 0;
  }
  .tie-msf__summary-bar {
    width: 100%;
    left: 0;
    border-radius: 0 0 8px 8px;
  }
  .tie-msf__footer {
    position: sticky;
    left: auto;
    right: auto;
  }
}/*# sourceMappingURL=style.css.map */`, l = (t, e, n, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: e,
      event_type: n,
      event_loc: s
    }), D(`Event: ${t} | ${e} | ${n} | ${s}`, "success");
  }, S = (t) => new Promise((e) => {
    const n = document.querySelector(t);
    n && e(n);
    const s = new MutationObserver(() => {
      const i = document.querySelector(t);
      i && (e(i), s.disconnect());
    });
    s.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), q = ({ name: t, dev: e }) => {
    const n = t.toLowerCase().replace(/\s/g, "_");
    l(`${n}_started`, `Experiment ${t} started`, "other", n), console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class m {
    constructor(e) {
      this.elements = e instanceof m ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, n, s) {
      return typeof n == "function" && (s = n, n = ""), this.elements.forEach((i) => {
        i.addEventListener(e, function(a) {
          var o;
          if (n !== "") {
            let p = (o = a.target) == null ? void 0 : o.closest(n);
            p && (s == null || s.call(p, a));
          } else
            s == null || s.call(i, a);
        });
      }), this;
    }
    addClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.add(e);
      }), this;
    }
    removeClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.remove(e);
      }), this;
    }
    toggleClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.toggle(e);
      }), this;
    }
    each(e) {
      for (let n of this.elements)
        e(new m(n), this.elements.indexOf(n));
      return this;
    }
    style(e, n) {
      const s = e.split("-").map((i, a) => a === 0 ? i : i.charAt(0).toUpperCase() + i.slice(1)).join("");
      return this.elements.forEach(function(i) {
        i.style[s] = n;
      }), this;
    }
    find(e) {
      const n = this.elements.map((s) => Array.from(s.querySelectorAll(e)));
      return new m(n.flat());
    }
    attr(e, n) {
      return n ? (this.elements.forEach(function(s) {
        s.setAttribute(e, n);
      }), this) : this.elements[0].getAttribute(e);
    }
    text(e) {
      return e ? (this.elements.forEach(function(n) {
        n.textContent = e;
      }), this) : this.elements[0].textContent || "";
    }
    html(e) {
      return e ? (this.elements.forEach(function(n) {
        n.innerHTML = e;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const h = (t) => new m(t), D = (t, e = "info") => {
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
    console.log(`%c>>> ${t}`, `${n} font-size: 16px; font-weight: 600`);
  }, _ = [
    { key: "yes", label: "Yes", hubspotValue: "1" },
    { key: "no", label: "Not Yet", hubspotValue: "0" }
  ], b = [
    { key: "brand_new", label: "Brand new", hubspotValue: "Brand New - 0 Properties Flipped" },
    { key: "1_2", label: "1-2 flips", hubspotValue: "Starting Out - 1 to 2 Properties Flipped" },
    { key: "3_6", label: "3-6 flips", hubspotValue: "Intermediate - 3 to 6 Properties Flipped" },
    { key: "7_plus", label: "7+ flips", hubspotValue: "Expert - 7 or More Properties Flipped" }
  ], g = [
    { key: "1k_2499", label: "$1,000 - 2,499", hubspotValue: "$1,000 to $2,499" },
    { key: "2500_4999", label: "$2,500 - 4,999", hubspotValue: "$2,500 to $5,000" },
    { key: "5000_9999", label: "$5,000 - 9,999", hubspotValue: "$5,001 to $10,000" },
    { key: "10000_19999", label: "$10,000 - 19,999", hubspotValue: "$10,001 to $20,000" },
    { key: "20000_plus", label: "$20,000 or more", hubspotValue: "$20,001 or more" }
  ], d = (t, e) => t.find((n) => n.key === e), H = () => ({
    step: 1,
    propertyInMind: null,
    experience: null,
    amount: null,
    stateValue: null,
    stateName: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneDigits: "",
    phoneVerified: !1,
    otpRequestId: null,
    consent: !1,
    geoStatus: "idle",
    geoStateName: null
  }), z = (t) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.trim()), v = (t) => t.propertyInMind !== null && t.experience !== null, y = (t) => t.amount !== null && t.stateValue !== null, x = (t) => t.firstName.trim().length > 0 && t.lastName.trim().length > 0 && z(t.email) && t.phoneDigits.length === 10 && t.phoneVerified && t.consent, F = (t) => {
    const e = [];
    t.stateName && e.push(t.stateName);
    const n = t.propertyInMind ? d(_, t.propertyInMind) : void 0;
    n && e.push(n.key === "yes" ? "property in mind" : "no property yet");
    const s = t.experience ? d(b, t.experience) : void 0;
    s && e.push(s.label);
    const i = t.amount ? d(g, t.amount) : void 0;
    return i && e.push(i.label), e.join(" · ");
  }, $ = [
    { name: "Alabama", value: "Alabama", abbr: "AL", supported: !0 },
    { name: "Alaska", value: "Alaska - Sorry, but we don't serve Alaska right now", abbr: "AK", supported: !1 },
    { name: "Arizona", value: "Arizona", abbr: "AZ", supported: !0 },
    { name: "Arkansas", value: "Arkansas", abbr: "AR", supported: !0 },
    {
      name: "California",
      value: "California - Sorry, but we don't serve California right now",
      abbr: "CA",
      supported: !1
    },
    { name: "Colorado", value: "Colorado", abbr: "CO", supported: !0 },
    { name: "Connecticut", value: "Connecticut", abbr: "CT", supported: !0 },
    { name: "Delaware", value: "Delaware", abbr: "DE", supported: !0 },
    { name: "Florida", value: "Florida", abbr: "FL", supported: !0 },
    { name: "Georgia", value: "Georgia", abbr: "GA", supported: !0 },
    { name: "Hawaii", value: "Hawaii - Sorry, but we don't serve Hawaii right now", abbr: "HI", supported: !1 },
    { name: "Idaho", value: "Idaho", abbr: "ID", supported: !0 },
    { name: "Illinois", value: "Illinois", abbr: "IL", supported: !0 },
    { name: "Indiana", value: "Indiana", abbr: "IN", supported: !0 },
    { name: "Iowa", value: "Iowa", abbr: "IA", supported: !0 },
    { name: "Kansas", value: "Kansas", abbr: "KS", supported: !0 },
    { name: "Kentucky", value: "Kentucky", abbr: "KY", supported: !0 },
    { name: "Louisiana", value: "Louisiana", abbr: "LA", supported: !0 },
    { name: "Maine", value: "Maine", abbr: "ME", supported: !0 },
    { name: "Maryland", value: "Maryland", abbr: "MD", supported: !0 },
    { name: "Massachusetts", value: "Massachusetts", abbr: "MA", supported: !0 },
    { name: "Michigan", value: "Michigan", abbr: "MI", supported: !0 },
    { name: "Minnesota", value: "Minnesota", abbr: "MN", supported: !1 },
    { name: "Mississippi", value: "Mississippi", abbr: "MS", supported: !0 },
    { name: "Missouri", value: "Missouri", abbr: "MO", supported: !0 },
    { name: "Montana", value: "Montana", abbr: "MT", supported: !0 },
    { name: "Nebraska", value: "Nebraska", abbr: "NE", supported: !0 },
    { name: "Nevada", value: "Nevada - Sorry, but we don't serve Nevada right now", abbr: "NV", supported: !1 },
    { name: "New Hampshire", value: "New Hampshire", abbr: "NH", supported: !0 },
    { name: "New Jersey", value: "New Jersey", abbr: "NJ", supported: !0 },
    { name: "New Mexico", value: "New Mexico", abbr: "NM", supported: !0 },
    { name: "New York", value: "New York", abbr: "NY", supported: !0 },
    { name: "North Carolina", value: "North Carolina", abbr: "NC", supported: !0 },
    { name: "North Dakota", value: "North Dakota", abbr: "ND", supported: !1 },
    { name: "Ohio", value: "Ohio", abbr: "OH", supported: !0 },
    { name: "Oklahoma", value: "Oklahoma", abbr: "OK", supported: !0 },
    { name: "Oregon", value: "Oregon", abbr: "OR", supported: !1 },
    { name: "Pennsylvania", value: "Pennsylvania", abbr: "PA", supported: !0 },
    { name: "Rhode Island", value: "Rhode Island", abbr: "RI", supported: !0 },
    { name: "South Carolina", value: "South Carolina", abbr: "SC", supported: !0 },
    { name: "South Dakota", value: "South Dakota", abbr: "SD", supported: !0 },
    { name: "Tennessee", value: "Tennessee", abbr: "TN", supported: !0 },
    { name: "Texas", value: "Texas", abbr: "TX", supported: !0 },
    { name: "Utah", value: "Utah - Sorry, but we don't serve Utah right now", abbr: "UT", supported: !1 },
    { name: "Vermont", value: "Vermont", abbr: "VT", supported: !1 },
    { name: "Virginia", value: "Virginia", abbr: "VA", supported: !0 },
    { name: "Washington", value: "Washington", abbr: "WA", supported: !0 },
    { name: "Washington DC", value: "Washington DC", abbr: "DC", supported: !0 },
    { name: "West Virginia", value: "West Virginia", abbr: "WV", supported: !0 },
    { name: "Wisconsin", value: "Wisconsin", abbr: "WI", supported: !0 },
    { name: "Wyoming", value: "Wyoming", abbr: "WY", supported: !0 }
  ], R = ["Florida", "Texas", "Georgia", "New York", "North Carolina"], u = () => $.filter((t) => t.supported), j = () => R.map((t) => $.find((e) => e.name === t)).filter(
    (t) => !!t
  ), L = (t) => u().find((e) => e.name.toLowerCase() === t.trim().toLowerCase()), B = (t) => u().find((e) => e.value === t), N = (t, e) => {
    const n = [];
    for (let s = 0; s <= t.length; s++) n[s] = [s];
    for (let s = 0; s <= e.length; s++) n[0][s] = s;
    for (let s = 1; s <= t.length; s++)
      for (let i = 1; i <= e.length; i++) {
        const a = t[s - 1] === e[i - 1] ? 0 : 1;
        n[s][i] = Math.min(n[s - 1][i] + 1, n[s][i - 1] + 1, n[s - 1][i - 1] + a);
      }
    return n[t.length][e.length];
  }, U = (t, e = 6) => {
    const n = t.trim().toLowerCase();
    if (n.length < 1) return [];
    const s = u();
    if (n.length === 2) {
      const o = s.find((p) => p.abbr.toLowerCase() === n);
      if (o) return [o];
    }
    const i = s.filter((o) => o.name.toLowerCase().includes(n));
    return i.length > 0 ? i.slice(0, e) : s.map((o) => ({
      state: o,
      distance: n.length === 2 ? N(o.abbr.toLowerCase(), n) : N(o.name.toLowerCase().split(" ")[0], n)
    })).filter((o) => o.distance <= 1).sort((o, p) => o.distance - p.distance).map((o) => o.state).slice(0, e);
  }, f = (t) => {
    const e = t.replace(/\D/g, "");
    return (e.startsWith("1") ? e.slice(1) : e).slice(0, 10);
  }, I = (t) => {
    const e = f(t);
    return e.length === 0 ? "" : e.length < 4 ? `(${e}` : e.length < 7 ? `(${e.slice(0, 3)}) ${e.slice(3)}` : `(${e.slice(0, 3)}) ${e.slice(3, 6)}-${e.slice(6)}`;
  }, W = (t) => f(t).length === 10, w = (t) => {
    const e = f(t);
    return e.length === 10 ? `+1${e}` : null;
  }, r = (t) => t.replace(
    /[&<>"']/g,
    (e) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[e]
  ), G = "https://conversionrate-store.github.io/a-b_images/theinvestorsedge/logo-dark.webp", Z = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
	<path d="M0 7.00005C0 7.26895 0.102259 7.49836 0.314651 7.70399L6.45031 13.739C6.61554 13.913 6.83574 14 7.08746 14C7.59886 14 8 13.6045 8 13.0825C8 12.8294 7.8977 12.6 7.72472 12.4261L2.19469 7.00005L7.72472 1.57402C7.8977 1.39209 8 1.16272 8 0.909609C8 0.395486 7.59886 0 7.08746 0C6.83574 0 6.61554 0.0870085 6.45031 0.261015L0.314651 6.2961C0.102259 6.50173 0.00786376 6.73114 0 7.00005Z" fill="#425B76"/>
	</svg>`, K = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
	<g clip-path="url(#clip0_51_829)">
	<path d="M10.2836 12.808C10.6772 13.2018 10.3984 13.875 9.84154 13.875H2.5C1.11926 13.875 0 12.7557 0 11.375V4.625C0 4.43176 0.0220947 4.24353 0.0638427 4.06286C0.17395 3.58557 0.768188 3.4176 1.11462 3.76403C1.26697 3.91638 1.32959 4.13623 1.28149 4.34619C1.26086 4.43591 1.25 4.52917 1.25 4.625V5.44128H2.65796C2.82361 5.44128 2.98266 5.50707 3.09985 5.62438C3.49353 6.01806 3.21472 6.68749 2.65796 6.68749H1.25V11.375C1.25 12.0653 1.80969 12.625 2.5 12.625H9.84154C10.0073 12.625 10.1664 12.6908 10.2836 12.808ZM14.75 8.25378V6.69128H7.57519L13.5087 12.6247C14.194 12.62 14.75 12.0613 14.75 11.375C14.75 11.0298 15.0298 10.75 15.375 10.75C15.7202 10.75 16 11.0298 16 11.375C16 12.3848 15.3978 13.256 14.534 13.6501L15.8169 14.933C16.061 15.1771 16.061 15.5729 15.8169 15.8169C15.6949 15.9389 15.535 16 15.375 16C15.2151 16 15.055 15.9389 14.9331 15.8169L0.183105 1.06689C-0.0610351 0.822875 -0.0610351 0.427124 0.183105 0.183105C0.427124 -0.0610351 0.822875 -0.0610351 1.06689 0.183105L3.00891 2.125H13.5C14.8785 2.125 16 3.24646 16 4.625V8.25378C16 8.59899 15.7202 8.87878 15.375 8.87878C15.0298 8.87878 14.75 8.59899 14.75 8.25378ZM14.75 5.44128V4.625C14.75 3.93567 14.1892 3.375 13.5 3.375H4.25891L6.32519 5.44128H14.75Z" fill="#0D2034"/>
	</g>
	<defs>
	<clipPath id="clip0_51_829">
	<rect width="16" height="16" fill="white"/>
	</clipPath>
	</defs>
	</svg>`, Y = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1266 2.8658C10.5459 2.67575 9.75505 2.66735 8.00065 2.66735C7.05965 2.66735 6.38728 2.66771 5.85741 2.70386C5.33352 2.7396 4.99781 2.80809 4.72504 2.92108C3.90828 3.25939 3.25936 3.90831 2.92105 4.72507C2.80806 4.99784 2.73958 5.33355 2.70383 5.85743C2.66768 6.38731 2.66732 7.05968 2.66732 8.00068C2.66732 8.94168 2.66768 9.61408 2.70383 10.1439C2.73958 10.6678 2.80806 11.0035 2.92105 11.2763C3.25936 12.0931 3.90828 12.7419 4.72504 13.0803C4.99781 13.1933 5.33352 13.2617 5.85741 13.2975C6.38728 13.3337 7.05965 13.334 8.00065 13.334C8.94165 13.334 9.61405 13.3337 10.1439 13.2975C10.6678 13.2617 11.0035 13.1933 11.2763 13.0803C12.0931 12.7419 12.7419 12.0931 13.0803 11.2763C13.1933 11.0035 13.2617 10.6678 13.2975 10.1439C13.3337 9.61408 13.334 8.94168 13.334 8.00068C13.334 7.49015 13.334 7.05655 13.3279 6.67808C13.3219 6.30994 13.6156 6.00669 13.9837 6.00077C14.3519 5.99483 14.6551 6.28847 14.6611 6.65661C14.6673 7.04695 14.6673 7.49088 14.6673 7.99641V8.02521C14.6673 8.93635 14.6673 9.65408 14.6277 10.2347C14.5873 10.8265 14.5036 11.3242 14.3121 11.7865C13.8385 12.93 12.93 13.8385 11.7865 14.3121C11.3242 14.5036 10.8265 14.5873 10.2347 14.6277C9.65405 14.6673 8.93632 14.6673 8.02525 14.6673H7.97605C7.06498 14.6673 6.34722 14.6673 5.76665 14.6277C5.17488 14.5873 4.67711 14.5036 4.2148 14.3121C3.07133 13.8385 2.16285 12.93 1.68921 11.7865C1.49772 11.3242 1.41396 10.8265 1.37359 10.2347C1.33398 9.65408 1.33398 8.93635 1.33398 8.02521V7.97614C1.33398 7.06501 1.33398 6.34725 1.37359 5.76667C1.41396 5.17491 1.49772 4.67713 1.68921 4.21482C2.16285 3.07136 3.07133 2.16288 4.2148 1.68924C4.67711 1.49774 5.17488 1.41399 5.76664 1.37362C6.34722 1.33401 7.06498 1.33401 7.97612 1.33401H8.00065C8.04892 1.33401 8.09672 1.33401 8.14398 1.334C9.71038 1.33376 10.7317 1.33361 11.5414 1.59862C11.8913 1.71315 12.0821 2.08966 11.9676 2.43959C11.8531 2.78951 11.4765 2.98033 11.1266 2.8658ZM14.5765 3.33136C14.762 3.6494 14.6546 4.05761 14.3365 4.24313L14.1888 4.32933C11.7922 5.72733 9.86665 7.80795 8.65812 10.3054C8.56412 10.4996 8.38198 10.6363 8.16925 10.6723C7.95652 10.7083 7.73952 10.6392 7.58685 10.4867L4.91121 7.81388C4.65072 7.55368 4.6505 7.13161 4.91071 6.87108C5.17092 6.61061 5.59303 6.61038 5.85352 6.87061L7.88718 8.90214C9.21752 6.53142 11.1591 4.55299 13.5169 3.17762L13.6647 3.09143C13.9827 2.90591 14.3909 3.01333 14.5765 3.33136Z" fill="#0D2034"/>
</svg>`, E = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M8 0C4.692 0 2 2.71067 2 6.04333C2 10.7787 7.436 15.668 7.66733 15.8733C7.76267 15.958 7.88133 16 8 16C8.11867 16 8.23733 15.958 8.33267 15.874C8.564 15.668 14 10.7787 14 6.04333C14 2.71067 11.308 0 8 0ZM8 9.33333C6.162 9.33333 4.66667 7.838 4.66667 6C4.66667 4.162 6.162 2.66667 8 2.66667C9.838 2.66667 11.3333 4.162 11.3333 6C11.3333 7.838 9.838 9.33333 8 9.33333Z" fill="#09233E"/>
</svg>`, J = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<g clip-path="url(#clip0_51_764)">
<path d="M13.6603 2.34165C10.5407 -0.777945 5.46315 -0.777945 2.34355 2.34165C0.832414 3.85338 0 5.86287 0 8.00002C0 10.1372 0.832414 12.1466 2.34355 13.6578C3.90366 15.2179 5.95281 15.9976 8.00192 15.9976C10.051 15.9976 12.1002 15.2179 13.6603 13.6578C16.7799 10.5382 16.7799 5.46183 13.6603 2.34165ZM12.7839 12.7813C10.1471 15.4181 5.85671 15.4181 3.21997 12.7813C1.94314 11.5045 1.23964 9.80619 1.23964 8.00002C1.23964 6.19384 1.94314 4.49551 3.21997 3.21806C5.85671 0.581318 10.1471 0.581943 12.7839 3.21806C15.42 5.85481 15.42 10.1452 12.7839 12.7813Z" fill="#09233E"/>
<path d="M10.6731 9.71338L8.9184 7.96114L10.6731 6.20891C10.9149 5.96719 10.9149 5.57484 10.6738 5.33246C10.4314 5.08949 10.0391 5.09012 9.79672 5.33184L8.04077 7.08532L6.28482 5.33184C6.04247 5.09012 5.65012 5.08949 5.40778 5.33246C5.16605 5.57481 5.16605 5.96716 5.4084 6.20891L7.16314 7.96114L5.4084 9.71338C5.16605 9.9551 5.16605 10.3474 5.40778 10.5898C5.52865 10.7113 5.68793 10.7714 5.84662 10.7714C6.00531 10.7714 6.16397 10.7107 6.28485 10.5904L8.0408 8.83693L9.79676 10.5904C9.91763 10.7113 10.0763 10.7714 10.235 10.7714C10.3937 10.7714 10.553 10.7107 10.6738 10.5898C10.9155 10.3474 10.9155 9.9551 10.6731 9.71338Z" fill="#09233E"/>
</g>
<defs>
<clipPath id="clip0_51_764">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>`, Q = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M12.2841 4.65524C11.3914 3.94094 10.3076 3.375 9 3.375C5.8934 3.375 3.375 5.89339 3.375 9C3.375 12.1066 5.8934 14.625 9 14.625C11.4412 14.625 13.521 13.0691 14.2985 10.8942C14.4379 10.5041 14.8313 10.2426 15.2365 10.3285L15.9701 10.484C16.3754 10.5699 16.6377 10.9697 16.5134 11.3648C15.509 14.5584 12.5262 16.875 9 16.875C4.65076 16.875 1.125 13.3492 1.125 9C1.125 4.65076 4.65076 1.125 9 1.125C11.0876 1.125 12.7137 2.07635 13.8834 3.05595L15.2197 1.71967C15.4342 1.50517 15.7568 1.441 16.037 1.55709C16.3173 1.67317 16.5 1.94665 16.5 2.25V6.375C16.5 6.78921 16.1642 7.125 15.75 7.125H11.625C11.3217 7.125 11.0482 6.94227 10.9321 6.66201C10.8161 6.38176 10.8802 6.05917 11.0947 5.84467L12.2841 4.65524Z" fill="currentColor"/>
</svg>`, X = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<g clip-path="url(#clip0_51_1043)">
<path d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM12.87 6.84L8.73 12.24C8.55 12.42 8.28 12.6 8.01 12.6C7.74 12.6 7.47 12.51 7.29 12.24L5.13 9.45C4.86 9.09 4.86 8.46 5.31 8.19C5.76 7.92 6.3 7.92 6.57 8.37L8.01 10.26L11.43 5.76C11.7 5.4 12.33 5.31 12.69 5.58C13.14 5.85 13.14 6.39 12.87 6.84Z" fill="#02BC7D"/>
</g>
<defs>
<clipPath id="clip0_51_1043">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>`, C = (t, e, n) => `
  <button type="button" class="tie-msf__chip${n ? " tie-msf__chip--selected" : ""}" data-chip-field="${t}" data-chip-key="${e.key}">
    ${r(e.label)}
  </button>
`, ee = (t) => {
    const e = Math.round(t / 3 * 100);
    return `
    <div class="tie-msf__header">
      <div class="tie-msf__header-row">
        <button type="button" class="tie-msf__back${t === 1 ? " tie-msf__back--close" : ""}" data-step-nav="back" aria-label="${t > 1 ? "Back" : "Close"}">${Z}</button>
        <div class="tie-msf__logo"><img src="${G}" alt="Investor's EDGE" /></div>
        <span class="tie-msf__step-label">STEP ${t}/3</span>
      </div>
      <div class="tie-msf__progress-track">
        <div class="tie-msf__progress-fill" style="width:${e}%"></div>
      </div>
    </div>
  `;
  }, te = (t) => `
  <div class="tie-msf__body">
    <h1 class="tie-msf__title">Get Prequalified For <span class="tie-msf__title-accent">100% Financing</span> Now</h1>
    <p class="tie-msf__subtitle">Apply for a free pre-qualification consultation. We'll discuss your goals, see if our 100% financing fits, and answer your questions.</p>
    <div class="tie-msf__field-group">
      <label class="tie-msf__label">Do you already have a property in mind? <span class="tie-msf__required">*</span></label>
      <div class="tie-msf__chip-grid tie-msf__chip-grid--2col">
        ${_.map((e) => C("propertyInMind", e, t.propertyInMind === e.key)).join("")}
      </div>
    </div>
    <div class="tie-msf__field-group">
      <label class="tie-msf__label">How much experience do you have? <span class="tie-msf__required">*</span></label>
      <div class="tie-msf__chip-grid tie-msf__chip-grid--2col">
        ${b.map((e) => C("experience", e, t.experience === e.key)).join("")}
      </div>
    </div>
  </div>
`, ne = (t) => `
  <div class="tie-msf__geo-banner">
    <p class="tie-msf__geo-question">Looks like you're in. Investing there?</p>
    <p class="tie-msf__geo-state"><span class="tie-msf__pin" aria-hidden="true">${E}</span> ${r(t.geoStateName ?? "")}</p>
    <div class="tie-msf__geo-actions">
      <button type="button" class="tie-msf__btn tie-msf__btn--primary" data-state-action="confirm-geo">Yes</button>
      <button type="button" class="tie-msf__btn tie-msf__btn--secondary" data-state-action="dismiss-geo">Other</button>
    </div>
  </div>
`, se = (t) => `
  <select class="tie-msf__sr-only" id="tie-msf-state-native" data-state-action="select-native" aria-label="State you want to invest in" autocomplete="address-level1">
    <option value="">Select a state</option>
    ${u().map(
    (e) => `<option value="${r(e.value)}"${e.value === t ? " selected" : ""}>${r(e.name)}</option>`
  ).join("")}
  </select>
`, ie = (t) => {
    const e = t.trim() ? U(t) : [], n = e.length ? `<div class="tie-msf__state-results">${e.map(
      (s) => `<button type="button" class="tie-msf__state-result" data-state-action="select-search-result" data-state-value="${r(s.value)}" data-state-name="${r(s.name)}">${r(s.name)}</button>`
    ).join("")}</div>` : "";
    return `
    <input type="text" class="tie-msf__state-search" id="tie-msf-state-search" placeholder="Start typing - e.g. FI or FL" autocomplete="address-level1" value="${r(t)}" />
    ${n}
    <p class="tie-msf__popular-label">Most popular with our investors</p>
    <div class="tie-msf__popular-chips">
      ${j().map(
      (s) => `<button type="button" class="tie-msf__popular-chip" data-state-action="select-popular" data-state-value="${r(s.value)}" data-state-name="${r(s.name)}">${r(s.name)}</button>`
    ).join("")}
    </div>
  `;
  }, ae = (t, e) => {
    let n;
    return t.stateValue && t.stateName ? n = `
      <div class="tie-msf__state-pill">
        ${E}
        <span class="tie-msf__state-pill-name">${r(t.stateName)}</span>
        <button type="button" class="tie-msf__state-pill-clear" data-state-action="clear-state" aria-label="Clear state">${J}</button>
      </div>
    ` : t.geoStatus === "suggested" && t.geoStateName ? n = ne(t) : n = ie(e), `
    <div class="tie-msf__field-group">
      <label class="tie-msf__label" for="tie-msf-state-search">State you want to invest in <span class="tie-msf__required">*</span></label>
      ${n}
      ${se(t.stateValue)}
    </div>
  `;
  }, oe = (t, e) => `
  <div class="tie-msf__body">
    <div class="tie-msf__field-group">
      <label class="tie-msf__label">Amount of money to invest in real estate? <span class="tie-msf__required">*</span></label>
      <div class="tie-msf__chip-grid tie-msf__chip-grid--amount">
        ${g.map((n) => C("amount", n, t.amount === n.key)).join("")}
      </div>
    </div>
    ${ae(t, e)}
  </div>
`, re = (t) => `<div class="tie-msf__otp-row">
    <div class="tie-msf__otp-boxes">
      ${[0, 1, 2, 3].map(
    (e) => `<input type="text" inputmode="numeric" maxlength="1" class="tie-msf__otp-box" data-otp-index="${e}" autocomplete="one-time-code" />`
  ).join("")}
    </div>
    <span class="tie-msf__otp-timer">00:${String(t).padStart(2, "0")}</span>
  </div>`, le = (t, e) => {
    const n = I(t.phoneDigits);
    return t.phoneVerified ? `
      <div class="tie-msf__phone-row tie-msf__phone-row--verified">
        <input type="text" class="tie-msf__input" value="${r(n)}" readonly />
        <button type="button" class="tie-msf__link" data-action="change-phone">CHANGE</button>
      </div>
      <p class="tie-msf__verified">${X} Number confirmed</p>
    ` : t.otpRequestId ? `
      <div class="tie-msf__phone-row tie-msf__phone-row--pending">
        <input type="text" class="tie-msf__input" value="${r(n)}" readonly />
        <button type="button" class="tie-msf__link" data-action="change-phone">CHANGE</button>
      </div>
      ${re(e)}
      <div class="tie-msf__otp-footer">
        <button type="button" class="tie-msf__link tie-msf__link--muted" data-action="resend-code" ${e > 0 ? "disabled" : ""}>${Q} RESEND VERIFICATION CODE</button>
      </div>
    ` : `
    <div class="tie-msf__phone-row">
      <input type="tel" inputmode="tel" autocomplete="tel" class="tie-msf__input" id="tie-msf-phone" placeholder="(___) ___-____" value="${r(n)}" />
      <button type="button" class="tie-msf__btn tie-msf__btn--primary" data-action="send-code" ${t.phoneDigits.length === 10 ? "" : "disabled"}>Send code</button>
    </div>
  `;
  }, pe = (t, e) => `
  <div class="tie-msf__body">
    <div class="tie-msf__summary-bar">${r(F(t))}</div>
    <div class="tie-msf__name-row">
      <div class="tie-msf__field-group">
        <label class="tie-msf__label" for="tie-msf-first-name">First name <span class="tie-msf__required">*</span></label>
        <input type="text" class="tie-msf__input" id="tie-msf-first-name" autocomplete="given-name" value="${r(t.firstName)}" />
      </div>
      <div class="tie-msf__field-group">
        <label class="tie-msf__label" for="tie-msf-last-name">Last name <span class="tie-msf__required">*</span></label>
        <input type="text" class="tie-msf__input" id="tie-msf-last-name" autocomplete="family-name" value="${r(t.lastName)}" />
      </div>
    </div>
    <div class="tie-msf__field-group">
      <label class="tie-msf__label" for="tie-msf-email">Email <span class="tie-msf__required">*</span></label>
      <input type="email" inputmode="email" class="tie-msf__input" id="tie-msf-email" autocomplete="email" placeholder="name@company.com" value="${r(t.email)}" />
    </div>
    <div class="tie-msf__field-group">
      <label class="tie-msf__label">Mobile number <span class="tie-msf__required">*</span></label>
      ${le(t, e)}
    </div>
    <label class="tie-msf__consent">
      <input type="checkbox" class="tie-msf__consent-checkbox" data-field="consent" ${t.consent ? "checked" : ""} />
      <span class="tie-msf__consent-text">I agree to receive calls and texts from The Investor's Edge about my application.</span>
    </label>
    <p class="tie-msf__consent-fine-print">
      By checking the box above, I agree that The Investor's Edge and its agents may contact me at the phone number and email address provided above with marketing calls, texts, and emails, including through the use of an autodialer, prerecorded messages, or AI-generated voice messages. Calls may be recorded for quality assurance and training purposes. Consent is not a condition of purchase. Msg &amp; data rates may apply. Msg frequency varies. Reply STOP to opt out of texts/calls or unsubscribe from emails at any time. See our <a href="https://www.theinvestorsedge.com/terms-of-use/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a> and <a href="https://www.theinvestorsedge.com/terms-of-use" target="_blank" rel="noopener">Terms</a>.
    </p>
  </div>
`, ce = (t, e) => {
    const n = t.step === 1 ? "Next: Your investment details" : t.step === 2 ? "Next: your contact details" : null, s = t.step === 3 ? "Apply Now" : "Continue", i = t.step === 3 ? "submit" : "continue";
    return `
    <div class="tie-msf__footer">
      ${n ? `<p class="tie-msf__next-label">${r(n)}</p>` : ""}
      <button type="button" class="tie-msf__cta" data-step-nav="${i}" ${e ? "" : "disabled"}>${r(s)}</button>
      ${t.step === 3 ? `<div class="tie-msf__trust-row"><span>${K}No credit check</span><span>${Y}Free consultation</span></div>` : ""}
    </div>
  `;
  }, de = () => `
  <div class="tie-msf-overlay" data-overlay-root>
    <div class="tie-msf-modal" role="dialog" aria-modal="true" aria-label="Get Prequalified For 100% Financing">
      <button type="button" class="tie-msf-modal__close" data-overlay-close aria-label="Close">&times;</button>
      <div class="tie-msf-modal__content" data-wizard-mount></div>
    </div>
  </div>
`, me = (t, e) => {
    const n = t.step === 1 ? te(t) : t.step === 2 ? oe(t, e.searchQuery) : pe(t, e.secondsLeft), s = t.step === 1 ? v(t) : t.step === 2 ? y(t) : x(t);
    return `
    <div class="tie-msf">
      ${ee(t.step)}
      ${n}
      ${ce(t, s)}
    </div>
  `;
  }, ue = "https://app.theinvestorsedge.com/phone/verify/send", fe = "https://app.theinvestorsedge.com/phone/verify/check", k = {
    async sendCode(t) {
      const e = await fetch(ue, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: t })
      }), n = await e.json().catch(() => ({}));
      if (!e.ok || !n.success) throw new Error("Failed to send verification code");
      return { requestId: t };
    },
    async checkCode(t, e) {
      var i;
      const n = await fetch(fe, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: t, code: e })
      }), s = await n.json().catch(() => ({}));
      return { verified: n.ok && !!s.success && !!((i = s.verificationCheck) != null && i.valid) };
    }
  }, he = async (t = 1500, e = fetch) => {
    const n = new AbortController();
    let s;
    const i = new Promise((a, o) => {
      s = setTimeout(() => {
        n.abort(), o(new Error("geo lookup timed out"));
      }, t);
    });
    try {
      const a = await Promise.race([
        e("https://get.geojs.io/v1/ip/geo.json", { signal: n.signal }),
        i
      ]);
      clearTimeout(s);
      const o = await a.json();
      if (!o.region) return null;
      const p = L(o.region);
      return p ? { stateName: p.name } : null;
    } catch {
      return clearTimeout(s), null;
    }
  }, _e = "https://api.hsforms.com/submissions/v3/integration/submit/23711988/a57c4233-8531-4903-b847-b112ea2bdda4", M = "tie_msf_gclid", A = "tie_msf_msclkid", P = (t, e = typeof document < "u" ? document.cookie : "") => {
    const n = e.split("; ").find((s) => s.startsWith(`${t}=`));
    return n ? decodeURIComponent(n.split("=").slice(1).join("=")) : void 0;
  }, be = (t) => P("hubspotutk", t), ge = (t) => {
    const e = P("_ga", t);
    if (!e) return;
    const n = e.split(".");
    return n.length >= 4 ? n.slice(2).join(".") : void 0;
  }, ve = (t = typeof location < "u" ? location.search : "", e = typeof sessionStorage < "u" ? sessionStorage : { getItem: () => null }) => {
    var a, o;
    const n = new URLSearchParams(t), s = n.get("gclid"), i = n.get("msclkid");
    s && ((a = e.setItem) == null || a.call(e, M, s)), i && ((o = e.setItem) == null || o.call(e, A, i));
  }, ye = (t = typeof sessionStorage < "u" ? sessionStorage : { getItem: () => null }) => ({
    gclid: t.getItem(M) ?? void 0,
    msclkid: t.getItem(A) ?? void 0
  }), xe = (t, e = {}) => {
    const n = [
      { name: "firstname", value: t.firstName },
      { name: "lastname", value: t.lastName },
      { name: "email", value: t.email },
      { name: "mobilephone", value: t.phoneE164 },
      { name: "your_state__united_states__", value: t.stateValue },
      { name: "property_in_mind", value: t.propertyInMindValue },
      { name: "how_much_experience_do_you_have_", value: t.experienceValue },
      { name: "amount_of_money_to_invest_in_real_estate_", value: t.amountValue },
      { name: "tcpa_consent", value: t.consent ? "true" : "false" }
    ];
    return e.gaClientId && n.push({ name: "ga_client_id", value: e.gaClientId }), e.gclid && n.push({ name: "gclid", value: e.gclid }), e.msclkid && n.push({ name: "msclkid", value: e.msclkid }), n;
  }, we = (t, e = {}) => {
    const n = e.cookieString ?? (typeof document < "u" ? document.cookie : ""), s = e.storage ?? (typeof sessionStorage < "u" ? sessionStorage : { getItem: () => null }), i = {
      gaClientId: ge(n),
      ...ye(s)
    }, a = {
      pageUri: e.pageUri ?? (typeof location < "u" ? location.href : ""),
      pageName: e.pageName ?? (typeof document < "u" ? document.title : "")
    }, o = be(n);
    return o && (a.hutk = o), { fields: xe(t, i), context: a };
  }, Ce = async (t) => {
    const e = await fetch(_e, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(we(t))
    });
    return { ok: e.ok, status: e.status };
  }, ke = (t) => {
    const e = window._hsq;
    Array.isArray(e) && e.push(["identify", { email: t }]);
  };
  q({ name: "The Investors Edge Multi-step Form", dev: "YK" });
  const T = 'a[href="#application"], .crs_open_quiz', V = 59, c = "theinvestorsedge_multi_step_form";
  class Se {
    constructor() {
      this.state = H(), this.searchQuery = "", this.secondsLeft = 0, this.timerInterval = null, this.geoDetectStarted = !1, this.init();
    }
    async init() {
      ve(), await S("body"), h("body").elements[0].insertAdjacentHTML("beforeend", `<style>${O}</style>`), h("body").elements[0].insertAdjacentHTML("beforeend", de()), this.root = document.querySelector("[data-wizard-mount]"), this.bindEvents(), this.bindTriggers(), this.render(), await S(T);
    }
    bindTriggers() {
      var n;
      document.addEventListener("click", (s) => {
        s.target.closest(T) && (s.preventDefault(), this.openPopup());
      });
      const e = document.querySelector("[data-overlay-root]");
      e.addEventListener("click", (s) => {
        s.target === e && this.closePopup();
      }), (n = document.querySelector("[data-overlay-close]")) == null || n.addEventListener("click", () => this.closePopup()), document.addEventListener("keydown", (s) => {
        s.key === "Escape" && e.classList.contains("tie-msf-overlay--open") && this.closePopup();
      });
    }
    openPopup() {
      document.querySelector("[data-overlay-root]").classList.add("tie-msf-overlay--open"), document.body.style.overflow = "hidden", l("multi_step_form_view", `step_${this.state.step}`, "view", c), this.geoDetectStarted || (this.geoDetectStarted = !0, this.runGeoDetect());
    }
    closePopup() {
      document.querySelector("[data-overlay-root]").classList.remove("tie-msf-overlay--open"), document.body.style.overflow = "";
    }
    render() {
      this.root.innerHTML = me(this.state, { searchQuery: this.searchQuery, secondsLeft: this.secondsLeft });
    }
    setState(e) {
      this.state = { ...this.state, ...e }, this.render();
    }
    showFieldError(e, n, s) {
      this.clearFieldError(n);
      const i = this.root.querySelector(e);
      i && i.insertAdjacentHTML(
        "afterend",
        `<p class="tie-msf__field-error" data-field-error="${n}">${r(s)}</p>`
      );
    }
    clearFieldError(e) {
      var n;
      (n = this.root.querySelector(`[data-field-error="${e}"]`)) == null || n.remove();
    }
    updateCtaState() {
      const e = this.root.querySelector("[data-step-nav]");
      if (!e) return;
      const n = this.state.step === 1 ? v(this.state) : this.state.step === 2 ? y(this.state) : x(this.state);
      e.disabled = !n;
    }
    async runGeoDetect() {
      this.setState({ geoStatus: "loading" });
      const e = await he();
      this.state.stateValue || this.setState(e ? { geoStatus: "suggested", geoStateName: e.stateName } : { geoStatus: "unavailable" });
    }
    startOtpTimer() {
      this.stopOtpTimer(), this.timerInterval = setInterval(() => {
        this.secondsLeft = Math.max(0, this.secondsLeft - 1);
        const e = this.root.querySelector(".tie-msf__otp-timer");
        e && (e.textContent = `00:${String(this.secondsLeft).padStart(2, "0")}`);
        const n = this.root.querySelector('[data-action="resend-code"]');
        n && (n.disabled = this.secondsLeft > 0), this.secondsLeft <= 0 && this.stopOtpTimer();
      }, 1e3);
    }
    stopOtpTimer() {
      this.timerInterval && (clearInterval(this.timerInterval), this.timerInterval = null);
    }
    checkOtpCompletion() {
      const n = Array.from(this.root.querySelectorAll("[data-otp-index]")).map((s) => s.value).join("");
      n.length === 4 && this.verifyOtp(n);
    }
    async verifyOtp(e) {
      var s;
      if (!this.state.otpRequestId) return;
      let n = !1;
      try {
        ({ verified: n } = await k.checkCode(this.state.otpRequestId, e));
      } catch {
        n = !1;
      }
      if (n)
        this.stopOtpTimer(), this.clearFieldError("otp"), this.setState({ phoneVerified: !0 }), l("multi_step_form_otp_verified", "success", "other", c);
      else {
        l("multi_step_form_otp_verified", "failed", "error", c);
        const i = Array.from(this.root.querySelectorAll("[data-otp-index]"));
        i.forEach((a) => a.value = ""), (s = i[0]) == null || s.focus(), this.showFieldError(".tie-msf__otp-row", "otp", "Incorrect code. Please try again.");
      }
    }
    async submitForm() {
      const e = d(_, this.state.propertyInMind), n = d(b, this.state.experience), s = d(g, this.state.amount), i = {
        firstName: this.state.firstName.trim(),
        lastName: this.state.lastName.trim(),
        email: this.state.email.trim(),
        phoneE164: w(this.state.phoneDigits),
        stateValue: this.state.stateValue,
        propertyInMindValue: e.hubspotValue,
        experienceValue: n.hubspotValue,
        amountValue: s.hubspotValue,
        consent: this.state.consent
      }, a = this.root.querySelector('[data-step-nav="submit"]');
      a && (a.disabled = !0, a.textContent = "Submitting..."), this.clearFieldError("submit");
      try {
        const o = await Ce(i);
        if (!o.ok) throw new Error(`HubSpot submit failed with status ${o.status}`);
        l("multi_step_form_submit", "success", "submit", c), window.location.href = "https://www.theinvestorsedge.com/confirmed-hard-money-financing";
      } catch {
        l("multi_step_form_submit", "error", "submit", c), a && (a.disabled = !1, a.textContent = "Apply Now"), this.showFieldError(
          ".tie-msf__consent-fine-print",
          "submit",
          "Something went wrong submitting your application. Please try again."
        );
      }
    }
    bindEvents() {
      const e = h(this.root);
      e.on("click", "[data-chip-field]", (n) => {
        const s = n.target.closest("[data-chip-field]"), i = s.getAttribute("data-chip-field"), a = s.getAttribute("data-chip-key");
        this.setState({ [i]: a }), l("multi_step_form_chip_select", `${i}:${a}`, "click", `step_${this.state.step}`);
      }), e.on("click", "[data-state-action]", (n) => {
        const s = n.target.closest("[data-state-action]"), i = s.getAttribute("data-state-action");
        if (i === "confirm-geo" && this.state.geoStateName) {
          const a = L(this.state.geoStateName);
          a && (this.searchQuery = "", this.setState({ stateValue: a.value, stateName: a.name }), l("multi_step_form_state_confirm", "geo-yes", "click", "step_2"));
        } else if (i === "dismiss-geo")
          this.setState({ geoStatus: "dismissed" }), l("multi_step_form_state_confirm", "geo-other", "click", "step_2");
        else if (i === "select-popular" || i === "select-search-result") {
          const a = s.getAttribute("data-state-value"), o = s.getAttribute("data-state-name");
          this.searchQuery = "", this.setState({ stateValue: a, stateName: o }), l(
            "multi_step_form_state_confirm",
            i === "select-popular" ? "popular-chip" : "search",
            "click",
            "step_2"
          );
        } else i === "clear-state" && this.setState({ stateValue: null, stateName: null });
      }), e.on("input", "#tie-msf-state-search", (n) => {
        const s = n.target, i = s.selectionStart;
        this.searchQuery = s.value, this.render();
        const a = this.root.querySelector("#tie-msf-state-search");
        a == null || a.focus(), a == null || a.setSelectionRange(i, i);
      }), e.on("change", '[data-state-action="select-native"]', (n) => {
        const s = n.target, i = B(s.value);
        i && (this.setState({ stateValue: i.value, stateName: i.name }), l("multi_step_form_state_confirm", "native-select", "change", "step_2"));
      }), e.on("input", "#tie-msf-first-name", (n) => {
        this.state.firstName = n.target.value, this.updateCtaState();
      }), e.on("input", "#tie-msf-last-name", (n) => {
        this.state.lastName = n.target.value, this.updateCtaState();
      }), e.on("input", "#tie-msf-email", (n) => {
        this.state.email = n.target.value, this.updateCtaState();
        const s = this.state.email.trim();
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) && ke(s);
      }), e.on("input", "#tie-msf-phone", (n) => {
        const s = n.target, i = f(s.value);
        this.state.phoneDigits = i, s.value = I(i);
        const a = this.root.querySelector('[data-action="send-code"]');
        a && (a.disabled = i.length !== 10), this.clearFieldError("phone");
      }), e.on("click", '[data-action="send-code"]', async () => {
        if (!W(this.state.phoneDigits)) return;
        const n = w(this.state.phoneDigits), s = this.root.querySelector('[data-action="send-code"]');
        s && (s.disabled = !0), this.clearFieldError("phone");
        try {
          const { requestId: i } = await k.sendCode(n);
          this.secondsLeft = V, this.setState({ otpRequestId: i }), this.startOtpTimer(), l("multi_step_form_otp_sent", n, "click", "step_3");
        } catch {
          l("multi_step_form_otp_sent", "error", "error", "step_3"), s && (s.disabled = !1), this.showFieldError(".tie-msf__phone-row", "phone", "Could not send the verification code. Please try again.");
        }
      }), e.on("click", '[data-action="resend-code"]', async () => {
        if (this.secondsLeft > 0) return;
        const n = w(this.state.phoneDigits);
        if (n) {
          this.clearFieldError("phone");
          try {
            const { requestId: s } = await k.sendCode(n);
            this.secondsLeft = V, this.setState({ otpRequestId: s }), this.startOtpTimer(), l("multi_step_form_otp_resend", n, "click", "step_3");
          } catch {
            l("multi_step_form_otp_resend", "error", "error", "step_3"), this.showFieldError(
              ".tie-msf__phone-row",
              "phone",
              "Could not resend the verification code. Please try again."
            );
          }
        }
      }), e.on("click", '[data-action="change-phone"]', () => {
        this.stopOtpTimer(), this.setState({ otpRequestId: null, phoneVerified: !1 });
      }), e.on("input", "[data-otp-index]", (n) => {
        const s = n.target;
        s.value = s.value.replace(/\D/g, "").slice(0, 1), this.clearFieldError("otp");
        const i = Number(s.getAttribute("data-otp-index"));
        if (s.value && i < 3) {
          const a = this.root.querySelector(`[data-otp-index="${i + 1}"]`);
          a == null || a.focus();
        }
        this.checkOtpCompletion();
      }), e.on("click", '[data-field="consent"]', (n) => {
        this.state.consent = n.target.checked, this.updateCtaState();
      }), e.on("click", '[data-step-nav="back"]', () => {
        if (this.state.step === 1) {
          this.closePopup();
          return;
        }
        this.setState({ step: this.state.step - 1 }), l("multi_step_form_view", `step_${this.state.step}`, "view", c);
      }), e.on("click", '[data-step-nav="continue"]', () => {
        if (this.state.step === 1 && !v(this.state) || this.state.step === 2 && !y(this.state)) return;
        const n = this.state.step;
        this.setState({ step: this.state.step + 1 }), l("multi_step_form_step_complete", `step_${n}`, "click", c), l("multi_step_form_view", `step_${this.state.step}`, "view", c);
      }), e.on("click", '[data-step-nav="submit"]', async () => {
        x(this.state) && await this.submitForm();
      });
    }
  }
  new Se();
})();
//# sourceMappingURL=index.js.map
