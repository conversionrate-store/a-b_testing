(function() {
  "use strict";
  const Y = `#delivery-section {
  display: none !important;
}

#unified-checkout > #payment-section.hidden,
#unified-checkout > #contact-section.hidden {
  display: block !important;
}

#payment-change-bar {
  display: none !important;
}

.kcd-block,
.kcd-modal {
  font-family: "Open Sans", sans-serif;
  color: #525252;
}
.kcd-block *,
.kcd-block *::before,
.kcd-block *::after,
.kcd-modal *,
.kcd-modal *::before,
.kcd-modal *::after {
  box-sizing: border-box;
}
.kcd-block button,
.kcd-modal button {
  font-family: inherit;
  margin: 0;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  text-align: left;
}
.kcd-block svg,
.kcd-block img,
.kcd-modal svg,
.kcd-modal img {
  display: block;
  flex-shrink: 0;
}

.kcd-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 24px 0;
}

.kcd-head {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.kcd-title {
  font-size: 24px;
  line-height: 34px;
  font-weight: 700;
  color: #222;
}

.kcd-hint {
  font-size: 13px;
  line-height: 19.5px;
  font-weight: 500;
  color: #6b7280;
}

.kcd-tabs {
  display: flex;
  gap: 16px;
}

.kcd-block .kcd-tab {
  flex: 1 1 0;
  min-width: 0;
  min-height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 11px 16px;
  background: #fff;
  border: 1px solid #d7dce7;
  border-radius: 12px;
  transition: border-color 0.15s ease, background 0.15s ease;
}
.kcd-block .kcd-tab:hover {
  border-color: #00bb2a;
}
.kcd-block .kcd-tab--active {
  background: rgba(5, 114, 34, 0.1);
  border-color: #00bb2a;
}

.kcd-tab-icon svg {
  width: 32px;
  height: 32px;
}

.kcd-tab-label {
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  color: #000;
}

.kcd-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: #fff;
  border: 1px solid #d7dce7;
  border-radius: 12px;
}

.kcd-card-title {
  font-size: 24px;
  line-height: 34px;
  font-weight: 700;
  color: #222;
}

.kcd-caption {
  font-size: 12px;
  line-height: 18px;
  color: #525252;
}

.kcd-dot {
  display: inline-block;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: #525252;
  flex-shrink: 0;
}

.kcd-badge {
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  border-radius: 4px;
  background: rgba(0, 187, 42, 0.2);
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  color: #057222;
  white-space: nowrap;
}
.kcd-badge--small {
  font-size: 12px;
  line-height: 22px;
}

.kcd-picked {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 4px;
  background: rgba(5, 114, 34, 0.1);
}

.kcd-picked-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.kcd-picked-name-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 12px;
}

.kcd-picked-name {
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  color: #000;
}

.kcd-block .kcd-link {
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  color: #26367e;
  text-decoration: underline;
  white-space: nowrap;
}

.kcd-block .kcd-btn {
  padding: 6px 14px;
  border-radius: 4px;
  background: #00bb2a;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
}

.kcd-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 8px;
  font-size: 14px;
  line-height: 24px;
  color: #525252;
}
.kcd-row b {
  font-weight: 600;
}
.kcd-row .kcd-badge {
  margin-left: 4px;
}

.kcd-row-icon svg {
  width: 20px;
  height: 20px;
}

.kcd-carriers {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.kcd-block .kcd-carrier {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 14px 18px;
  background: #fff;
  border: 1px solid #d7dce7;
  border-radius: 12px;
  transition: border-color 0.15s ease, background 0.15s ease;
}
.kcd-block .kcd-carrier:hover {
  border-color: #2744d3;
}
.kcd-block .kcd-carrier--active {
  background: #f8faff;
  border-color: #2744d3;
}
.kcd-block .kcd-carrier--active .kcd-radio::after {
  transform: scale(1);
}

.kcd-radio {
  position: relative;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border: 2px solid #2744d3;
  border-radius: 50%;
  background: #fff;
}
.kcd-radio::after {
  content: "";
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: #2744d3;
  transform: scale(0);
  transition: transform 0.15s ease;
}

.kcd-carrier-logo svg,
.kcd-carrier-logo img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.kcd-carrier-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1 1 auto;
  min-width: 0;
}

.kcd-carrier-name {
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  color: #1f2937;
}

.kcd-carrier-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 8px;
  font-size: 14px;
  line-height: 18px;
  color: #525252;
}

.kcd-carrier-date {
  font-weight: 600;
  color: #2e8f3f;
}

.kcd-carrier-price {
  flex-shrink: 0;
  font-size: 14px;
  line-height: 22.5px;
  font-weight: 600;
  color: #1f2937;
}
.kcd-carrier-price--free {
  color: #2e8f3f;
}

body.kcd-modal-open {
  overflow: hidden;
}

.kcd-modal {
  position: fixed;
  inset: 0;
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.5);
}

.kcd-modal-box {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 480px;
  max-width: 100%;
  max-height: calc(100vh - 32px);
  padding: 32px 0;
  background: #fff;
  border-radius: 4px;
}

.kcd-modal .kcd-modal-close {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 28px;
  line-height: 1;
  color: #2744d3;
}

.kcd-modal-head {
  padding: 0 42px;
}

.kcd-modal-title {
  font-family: "Ubuntu", "Open Sans", sans-serif;
  font-size: 24px;
  line-height: 34px;
  font-weight: 700;
  color: #000;
}

.kcd-modal-fee {
  font-size: 12px;
  line-height: 18px;
  color: #707070;
}

.kcd-modal-list {
  display: flex;
  flex-direction: column;
  padding: 0 42px;
  overflow-y: auto;
}

.kcd-store {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #ccc;
}
.kcd-store:first-child {
  padding-top: 0;
}
.kcd-store:last-child {
  border-bottom: 0;
}

.kcd-store-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  min-width: 0;
}

.kcd-store-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0 12px;
  font-size: 14px;
  line-height: 22px;
  color: #525252;
}

.kcd-store-dist {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}

.kcd-store-name {
  font-weight: 700;
}

.kcd-modal .kcd-store-btn {
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: 4px;
  background: #00bb2a;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
}

#unified-checkout > #payment-section,
#unified-checkout > #contact-section {
  margin: 24px 0 0;
  padding: 16px;
  background: #fff;
  border: 1px solid #d7dce7;
  border-radius: 12px;
}
#unified-checkout > #payment-section .section-header,
#unified-checkout > #contact-section .section-header {
  margin: 0 0 8px;
}
#unified-checkout > #payment-section .section-header__title,
#unified-checkout > #contact-section .section-header__title {
  font-size: 24px;
  line-height: 34px;
  font-weight: 700;
  color: #222;
}
#unified-checkout > #payment-section .hint,
#unified-checkout > #contact-section .hint {
  margin: 0 0 12px;
  font-size: 13px;
  line-height: 19.5px;
  font-weight: 500;
  color: #6b7280;
}

#unified-checkout #paymentTypes {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

#unified-checkout #default-payments,
#unified-checkout #other-payments:not(.hidden) {
  display: contents;
}

#unified-checkout #paymentTypes .payment-option[style*="display: none"] {
  display: none !important;
}

#unified-checkout #paymentTypes .payment-option {
  align-items: center;
  gap: 16px;
  margin: 0;
  padding: 14px 18px;
  background: #fff;
  border: 1px solid #d7dce7;
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;
}
#unified-checkout #paymentTypes .payment-option::before {
  content: "";
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border: 2px solid #2744d3;
  border-radius: 50%;
  background: #fff;
  box-sizing: border-box;
}
#unified-checkout #paymentTypes .payment-option:hover {
  border-color: #2744d3;
}
#unified-checkout #paymentTypes .payment-option.is-selected {
  background: #f8faff;
  border-color: #2744d3;
}
#unified-checkout #paymentTypes .payment-option.is-selected::before {
  background: #2744d3;
  box-shadow: inset 0 0 0 3px #fff;
}
#unified-checkout #paymentTypes .payment-option .payment-main {
  flex: 1 1 auto;
  min-width: 0;
}
#unified-checkout #paymentTypes .payment-option .payment-title {
  font-size: 15px;
  line-height: 22.5px;
  font-weight: 600;
  color: #1f2937;
}
#unified-checkout #paymentTypes .payment-option .payment-sub {
  font-size: 12px;
  line-height: 18px;
  color: #525252;
}
#unified-checkout #paymentTypes .payment-option .payment-price {
  flex-shrink: 0;
  align-self: center;
  font-size: 15px;
  line-height: 22.5px;
  font-weight: 600;
  color: #2e8f3f;
}
#unified-checkout #paymentTypes .payment-option .payment-price.kcd-price-extra {
  color: #2744d3;
}
#unified-checkout #paymentTypes .payment-option .payment-price.kcd-price-extra::before {
  content: "+ ";
}

#unified-checkout #contact-section .checkout__label {
  font-size: 13px;
  line-height: 19.5px;
  font-weight: 500;
  color: #525252;
}
#unified-checkout #contact-section .checkout__label::after {
  color: #e11d48;
}
#unified-checkout #contact-section input[type=text],
#unified-checkout #contact-section input[type=email],
#unified-checkout #contact-section input[type=tel],
#unified-checkout #contact-section select {
  height: 39px;
  padding: 9px 10px;
  border: 1px solid #d7dde5;
  border-radius: 7px;
  font-size: 14px;
  color: #222;
}
#unified-checkout #contact-section input[type=text]::placeholder,
#unified-checkout #contact-section input[type=email]::placeholder,
#unified-checkout #contact-section input[type=tel]::placeholder,
#unified-checkout #contact-section select::placeholder {
  color: #757575;
}
#unified-checkout #contact-section input[type=text]:focus,
#unified-checkout #contact-section input[type=email]:focus,
#unified-checkout #contact-section input[type=tel]:focus,
#unified-checkout #contact-section select:focus {
  border-color: #2744d3;
  outline: none;
}
#unified-checkout #contact-section small {
  font-size: 12px;
  line-height: 18px;
  color: #525252;
  opacity: 0.56;
}
#unified-checkout #contact-section .checkout__checkbox-group {
  font-size: 13px;
  line-height: 16.9px;
  color: #525252;
}

@media (max-width: 640px) {
  #order-steps {
    display: grid !important;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 8px;
  }
  #order-steps > .step-separator {
    display: none !important;
  }
  #order-steps > div {
    min-width: 0;
    width: auto !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  #order-steps .step-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: 8px 0;
    text-align: left !important;
  }
  #order-steps .step-number {
    margin: 0 !important;
    flex-shrink: 0;
  }
  #order-steps .step-wrap > span:not(.step-number),
  #order-steps .step-wrap a,
  #order-steps .step-wrap a span {
    display: block;
    margin: 0 !important;
    padding: 0 !important;
    font-size: 14px;
    line-height: 20px;
    text-align: left !important;
    white-space: normal;
    overflow-wrap: break-word;
  }
  #unified-checkout > #payment-section,
  #unified-checkout > #contact-section {
    margin-top: 16px;
    padding: 12px;
  }
  #unified-checkout > #payment-section .section-header__title,
  #unified-checkout > #contact-section .section-header__title {
    font-size: 20px;
    line-height: 28px;
  }
  #unified-checkout #paymentTypes .payment-option {
    gap: 12px;
    padding: 12px;
  }
  .kcd-block {
    gap: 16px;
  }
  .kcd-title,
  .kcd-card-title {
    font-size: 20px;
    line-height: 28px;
  }
  .kcd-tabs {
    flex-direction: column;
    gap: 8px;
  }
  .kcd-block .kcd-tab {
    justify-content: flex-start;
    min-height: 56px;
    padding: 10px 16px;
  }
  .kcd-card {
    padding: 12px;
  }
  .kcd-picked {
    padding: 12px;
  }
  .kcd-picked-top {
    align-items: flex-start;
  }
  .kcd-picked--empty .kcd-picked-top {
    flex-direction: column;
    align-items: stretch;
  }
  .kcd-picked--empty .kcd-picked-top .kcd-btn {
    text-align: center;
  }
  .kcd-block .kcd-carrier {
    gap: 12px;
    padding: 12px;
  }
  .kcd-modal {
    align-items: flex-end;
    padding: 0;
  }
  .kcd-modal-box {
    width: 100%;
    max-height: 85vh;
    padding: 24px 0;
    border-radius: 12px 12px 0 0;
  }
  .kcd-modal-head,
  .kcd-modal-list {
    padding: 0 16px;
  }
}
`, f = (t, e, n, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: e,
      event_type: n,
      event_loc: i
    }), m(`Event: ${t} | ${e} | ${n} | ${i}`, "success");
  }, M = (t) => new Promise((e) => {
    const n = document.querySelector(t);
    n && e(n);
    const i = new MutationObserver(() => {
      const l = document.querySelector(t);
      l && (e(l), i.disconnect());
    });
    i.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), N = ({ name: t, dev: e }) => {
    const n = t.toLowerCase().replace(/\s/g, "_");
    f(`${n}_started`, `Experiment ${t} started`, "other", n), console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, j = (t, e, n, i, l = 1e3, o = 0.5) => {
    let r, d;
    r = new IntersectionObserver(
      function(a) {
        a[0].isIntersecting === !0 ? d = setTimeout(() => {
          f(
            e,
            a[0].target.dataset.visible || i,
            "view",
            n
          ), r.disconnect();
        }, l) : (m("Element is not fully visible", "warn"), clearTimeout(d));
      },
      { threshold: [o] }
    );
    {
      const a = document.querySelector(t);
      a && r.observe(a);
    }
  }, m = (t, e = "info") => {
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
  }, h = {
    truck: (
      /* HTML */
      '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M8.163 22.25H6.96C6.409 22.25 5.96 21.801 5.96 21.25V17.25C5.96 16.698 5.512 16.25 4.96 16.25C4.408 16.25 3.96 16.698 3.96 17.25V21.25C3.96 22.904 5.306 24.25 6.96 24.25H8.163C8.597 25.69 9.92 26.75 11.5 26.75C13.08 26.75 14.403 25.69 14.837 24.25H19H21.163C21.597 25.69 22.92 26.75 24.5 26.75C26.08 26.75 27.403 25.69 27.837 24.25H30C30.552 24.25 31 23.802 31 23.25V18.25C31 17.507 30.689 16.481 30.277 15.863L27.386 11.527C26.892 10.787 25.888 10.25 24.999 10.25H22.195V8.25C22.195 6.596 20.849 5.25 19.195 5.25H16C15.448 5.25 15 5.698 15 6.25C15 6.802 15.448 7.25 16 7.25H19.196C19.747 7.25 20.196 7.699 20.196 8.25V22.25H19H14.837C14.403 20.81 13.08 19.75 11.5 19.75C9.92 19.75 8.597 20.81 8.163 22.25ZM24.5 24.75C23.673 24.75 23 24.077 23 23.25C23 22.423 23.673 21.75 24.5 21.75C25.327 21.75 26 22.423 26 23.25C26 24.077 25.327 24.75 24.5 24.75ZM22.196 12.25H25C25.217 12.25 25.602 12.456 25.723 12.637L27.465 15.25H22.196V12.25ZM22.196 17.25H28.757C28.893 17.567 29 17.987 29 18.25V22.25H27.837C27.403 20.81 26.08 19.75 24.5 19.75C23.614 19.75 22.813 20.091 22.196 20.636V17.25ZM13 23.25C13 24.077 12.327 24.75 11.5 24.75C10.673 24.75 10 24.077 10 23.25C10 22.423 10.673 21.75 11.5 21.75C12.327 21.75 13 22.423 13 23.25Z" fill="#34684C"/><path d="M14 6.25C14 5.698 13.552 5.25 13 5.25H2C1.448 5.25 1 5.698 1 6.25C1 6.802 1.448 7.25 2 7.25H13C13.552 7.25 14 6.802 14 6.25Z" fill="#34684C"/><path d="M11 11.25C11.552 11.25 12 10.802 12 10.25C12 9.698 11.552 9.25 11 9.25H4C3.448 9.25 3 9.698 3 10.25C3 10.802 3.448 11.25 4 11.25H11Z" fill="#34684C"/><path d="M9 15.25C9.552 15.25 10 14.802 10 14.25C10 13.698 9.552 13.25 9 13.25H6C5.448 13.25 5 13.698 5 14.25C5 14.802 5.448 15.25 6 15.25H9Z" fill="#34684C"/></g></svg>'
    ),
    store: (
      /* HTML */
      '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#kcd-clip0-0-4)"><path d="M16 0C13.378 -0.0281739 10.8094 0.742138 8.63566 2.20859C6.46188 3.67504 4.78577 5.76821 3.83 8.21C2.81363 10.6252 2.55628 13.2925 3.09214 15.8575C3.628 18.4225 4.9317 20.7637 6.83 22.57L16 31.39L25.13 22.57C27.0283 20.7637 28.332 18.4225 28.8679 15.8575C29.4037 13.2925 29.1464 10.6252 28.13 8.21C27.1767 5.77463 25.5067 3.68593 23.3408 2.22001C21.175 0.754082 18.6152 -0.0200323 16 0ZM23.74 21.13L16 28.61L8.26 21.13C6.66002 19.6021 5.55794 17.6272 5.09768 15.4632C4.63741 13.2993 4.84036 11.0468 5.68 9C6.48961 6.92585 7.90959 5.14622 9.75226 3.89635C11.5949 2.64649 13.7735 1.98523 16 2C18.2265 1.98523 20.4051 2.64649 22.2477 3.89635C24.0904 5.14622 25.5104 6.92585 26.32 9C27.1596 11.0468 27.3626 13.2993 26.9023 15.4632C26.4421 17.6272 25.34 19.6021 23.74 21.13Z" fill="#34684C"/><path d="M13 6.7H8.5V19.7H23.5V6.7H13ZM17 8.7V10.7H15V8.7H17ZM21.5 8.7V17.7H10.5V8.7H13V12.7H19V8.7H21.5Z" fill="#34684C"/></g><defs><clipPath id="kcd-clip0-0-4"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>'
    ),
    packeta: (
      /* HTML */
      '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M18.392 14.4384L17.55 14.8412L16.7077 14.4384L4.93539 8.61781L10.5144 6.48676L22.5909 12.3544L18.392 14.4384ZM30.176 8.61163L25.9654 10.661L13.7485 5.22549L17.55 3.75996L30.176 8.61163Z" fill="#BA1B02"/><path d="M18.0065 0L33.4515 5.97847L31.2817 7.71824L17.5504 2.39382L3.81886 7.71847L1.64931 5.97869L17.1058 0H18.0065ZM31.6447 8.23207L34.2004 7.24549L32.2761 23.0967L31.8902 23.8033L18.334 35.9996L17.8954 33.1913L29.9719 22.3377L31.6447 8.23207ZM3.21062 23.8035L2.82466 23.0969L0.900391 7.24571L3.45613 8.23229L5.14042 22.3497L17.2051 33.2092L16.7783 36L3.21062 23.8035Z" fill="#BA1B02"/><path d="M26.293 11.1633L30.1878 8.78115L28.6557 21.5498L17.6318 31.4751L18.2401 16.0966L23.0764 13.125L22.7548 20.6624L25.7666 18.5487L26.293 11.1633Z" fill="#BA1B02"/><path d="M16.86 16.0966L17.4682 31.4633L6.45609 21.5489L4.90627 8.78115L16.86 16.0966Z" fill="#BA1B02"/></g></svg>'
    ),
    dpd: (
      /* HTML */
      '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#kcd-clip0-0-10)"><path fill-rule="evenodd" clip-rule="evenodd" d="M32.1414 7.34766L32.7321 8.01227L33.0644 7.82766L32.1414 7.34766Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.2549 6.86719L32.3995 8.19642L32.8056 7.97488L32.3625 7.45796L31.2549 6.86719Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.3321 6.38762L32.0675 8.38147L32.4736 8.15993L31.4767 6.97839L30.3321 6.38762Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M29.4463 5.90723L31.7355 8.56569L32.1417 8.34415L30.554 6.498L29.4463 5.90723ZM33.8401 10.5964L33.5816 10.7441L33.8401 11.0395V10.5964Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.5596 5.42773L31.4026 8.75081L31.8088 8.52927L29.6673 6.0185L28.5596 5.42773ZM33.6918 10.6708L33.2857 10.9292L33.8395 11.5938V10.8923L33.6918 10.6708Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27.6367 4.94727L31.0706 8.93496L31.5136 8.71342L28.7813 5.53803L27.6367 4.94727ZM33.3597 10.8549L32.9536 11.1134L33.8397 12.1472V11.4457L33.3597 10.8549Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.751 4.46777L30.7756 9.12007L31.1817 8.89853L27.8587 5.05853L26.751 4.46777ZM33.0278 11.0769L32.6217 11.2985L33.8402 12.7385V12.0369L33.0278 11.0769Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25.8643 3.9873L30.4427 9.30421L30.8489 9.08267L26.972 4.57807L25.8643 3.9873ZM32.695 11.2611L32.2888 11.4826L33.8396 13.2919V12.5903L32.695 11.2611Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.9413 3.50774L30.1105 9.48925L30.5167 9.26771L26.0859 4.0985L24.9413 3.50774ZM32.3628 11.4461L31.9567 11.6677L33.8397 13.8461V13.1446L32.3628 11.4461Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0557 3.02734L29.7787 9.7104L30.1848 9.45194L25.1634 3.61811L24.0557 3.02734ZM32.031 11.6303L31.6248 11.8519L33.8402 14.4365V13.735L32.031 11.6303Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1318 2.54785L29.4456 9.89551L29.8518 9.63705L24.2765 3.13862L23.1318 2.54785ZM31.7349 11.8155L31.2918 12.037L33.8394 14.9908V14.2893L31.7349 11.8155Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2461 2.06738L29.1137 10.0796L29.5568 9.8212L23.3907 2.65815L22.2461 2.06738ZM31.403 11.9996L30.9968 12.2211L33.8398 15.5811V14.8427L31.403 11.9996Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.3604 1.58789L28.8188 10.2647L29.2249 10.0063L22.468 2.17866L21.3604 1.58789ZM31.0711 12.1847L30.6649 12.4063L33.8403 16.1355V15.434L31.0711 12.1847Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.4365 1.07031L28.4857 10.4487L28.8919 10.1902L21.5811 1.698L20.4365 1.07031ZM30.738 12.3687L30.3319 12.5902L33.8395 16.6886V15.9871L30.738 12.3687Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5506 0.59067L28.1536 10.6337L28.5598 10.4121L20.6952 1.21836L19.5506 0.59067ZM30.4059 12.5537L29.9998 12.7752L33.8397 17.2798V16.5413L30.4059 12.5537Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.6641 0.147461L27.8209 10.8181L28.227 10.5966L19.7717 0.738226L18.6641 0.147461ZM30.0732 12.7381L29.667 12.9597L33.8393 17.8335V17.1319L30.0732 12.7381Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0732 0L27.4885 11.003L27.8947 10.7814L18.8856 0.25846L18.664 0.147691C18.4794 0.0369228 18.2948 0 18.0732 0ZM29.7408 12.923L29.3347 13.1445L33.8392 18.3875V17.686L29.7408 12.923Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0737 0C17.926 0 17.7783 0.0369228 17.6306 0.0738457L27.1567 11.1876L27.5998 10.9661L18.1845 0C18.1476 0 18.1106 0 18.0737 0ZM29.4459 13.1076L29.0398 13.3291L33.8397 18.9783V18.2399L29.4459 13.1076Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7419 0.0371094C17.6681 0.0740322 17.5573 0.110955 17.5204 0.147878L17.2988 0.258646L26.8618 11.3724L27.268 11.1509L17.7419 0.0371094ZM29.1141 13.2924L28.708 13.5509L33.8402 19.5323V18.8308L29.1141 13.2924Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3722 0.18457L16.966 0.406107L26.529 11.5568L26.9352 11.3352L17.3722 0.18457ZM28.7813 13.4768L28.3752 13.7352L33.8397 20.086V19.3844L28.7813 13.4768Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0399 0.369141L16.6338 0.590677L26.1967 11.7414L26.6029 11.5198L17.0399 0.369141ZM28.449 13.6614L28.0429 13.9198L33.8398 20.6767V19.9752L28.449 13.6614Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.7079 0.553711L16.3018 0.775249L25.8647 11.9259L26.2709 11.7044L16.7079 0.553711ZM28.117 13.8459L27.7109 14.1044L33.8401 21.2305V20.529L28.117 13.8459Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3749 0.738281L15.9688 0.95982L25.5318 12.1105L25.9379 11.889L16.3749 0.738281ZM27.784 14.0305L27.3779 14.289L33.8394 21.7843V21.0828L27.784 14.0305Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.043 0.923077L15.6369 1.14461L25.1999 12.2953L25.606 12.0738L16.043 0.923077ZM27.4891 14.2153L27.0829 14.4738L33.8398 22.3752V21.6737L27.4891 14.2153Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7108 1.07031L15.3047 1.32877L24.9046 12.4795L25.3108 12.2579L15.7108 1.07031ZM27.1569 14.4364L26.7507 14.6579L33.8399 22.9286V22.2271L27.1569 14.4364Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3788 1.25586L14.9727 1.4774L24.5726 12.665L24.9788 12.4435L15.3788 1.25586ZM26.8249 14.6219L26.4187 14.8435L33.8402 23.5203V22.7819L26.8249 14.6219Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0458 1.44043L14.6396 1.66197L24.2396 12.8865L24.6458 12.628L15.0458 1.44043ZM26.4919 14.8065L26.0857 15.028L33.8395 24.0741V23.3726L26.4919 14.8065Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7138 1.625L14.3076 1.84653L23.9076 13.0711L24.3137 12.8126L14.7138 1.625ZM26.1598 14.9911L25.7537 15.2126L33.8398 24.6279V23.9264L26.1598 14.9911Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.3817 1.80957L13.9756 2.03111L23.5755 13.2556L23.9817 12.9972L14.3817 1.80957ZM25.8278 15.1756L25.4217 15.3972L33.8401 25.2186V24.4802L25.8278 15.1756Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0487 1.99414L13.6426 2.21568L23.2425 13.4402L23.6487 13.1817L14.0487 1.99414ZM25.5318 15.3602L25.1256 15.5817L33.8394 25.7724V25.0709L25.5318 15.3602Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7165 2.1416L13.2734 2.36314L22.9472 13.6246L23.3534 13.3661L13.7165 2.1416ZM25.1995 15.5446L24.7934 15.7661L33.8394 26.326V25.6245L25.1995 15.5446Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.3845 2.32617L12.9414 2.54771L22.6522 13.8461C22.6891 13.7722 22.726 13.7353 22.7999 13.6984L23.0214 13.5507L13.3845 2.32617ZM24.8675 15.7292L24.4614 15.9507L33.7659 26.806C33.8028 26.6952 33.8398 26.5845 33.8398 26.4737V26.1783L24.8675 15.7292Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0522 2.51074L12.6091 2.73228L22.5414 14.2891V14.1414C22.5414 14.0307 22.6152 13.883 22.6891 13.7722L13.0522 2.51074ZM24.5353 15.9137L24.2399 16.0984C24.2029 16.0984 24.166 16.1353 24.1291 16.1353L33.5813 27.1752C33.6921 27.0275 33.7659 26.8798 33.8028 26.7321L24.5353 15.9137Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.7204 2.69531L12.2773 2.91685L22.5419 14.8798V14.1414L12.7204 2.69531ZM23.5019 15.9506L33.3233 27.4336C33.4341 27.3598 33.5448 27.2121 33.6556 27.1013L24.2034 16.0983C24.0557 16.1722 23.8342 16.1722 23.6865 16.0983L23.5019 15.9506Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3876 2.87988L11.9446 3.10142L32.9905 27.6182L33.2859 27.4705C33.3228 27.4335 33.3597 27.3966 33.3967 27.3597L23.7229 16.0983H23.686L22.8368 15.5813C22.7629 15.5444 22.726 15.4706 22.6522 15.3967C22.5783 15.286 22.5783 15.2121 22.5414 15.1383V14.7321L12.3876 2.87988Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0553 3.06468L11.6123 3.28622L32.6582 27.803L33.0644 27.5814L12.0553 3.06468Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7233 3.21191L11.2803 3.43345L32.3632 27.9871L32.7693 27.7656L11.7233 3.21191Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3903 3.39648L10.9473 3.61802L32.0302 28.1717L32.4363 27.9502L11.3903 3.39648Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0583 3.58105L10.6152 3.80259L31.6982 28.3563L32.1043 28.1347L11.0583 3.58105Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6894 3.7666L10.2832 3.98814L31.3661 28.5787L31.7723 28.3203L10.6894 3.7666Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.3573 3.95117L9.95117 4.17271L31.0341 28.7633L31.4403 28.5048L10.3573 3.95117Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0243 4.13574L9.61816 4.35728L30.738 28.9479L31.1442 28.6894L10.0243 4.13574Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.69225 4.28298L9.28609 4.50451L30.4059 29.132L30.8121 28.8736L9.69225 4.28298Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.36026 4.46777L8.9541 4.68931L30.074 29.3168L30.4801 29.0953L9.36026 4.46777Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02725 4.65234L8.62109 4.87388L18.8857 16.8368L19.2179 17.0584C19.3656 17.1322 19.5133 17.3168 19.5133 17.5015V17.5384L29.7409 29.5014L30.1471 29.2799L9.02725 4.65234Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.69537 4.83691L8.28921 5.05844L17.9261 16.3199L19.1445 16.9845L8.69537 4.83691ZM19.4768 17.3906C19.4768 17.4276 19.5137 17.4645 19.5137 17.5014V18.1291L29.4091 29.686L29.8152 29.4644L19.4768 17.3906Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.36307 5.02148L7.95692 5.24302L16.9661 15.766L18.1846 16.4307L8.36307 5.02148ZM19.5137 17.9814V18.6829L29.1137 29.8706L29.5198 29.649L19.5137 17.9814Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.03115 5.20605L7.625 5.42759L16.0434 15.2122L17.225 15.8768L8.03115 5.20605ZM19.5141 18.5352V19.2736L28.7818 30.0551L29.1879 29.8336L19.5141 18.5352Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.69815 5.35352L7.29199 5.57505L15.0827 14.6581L16.2643 15.3596L7.69815 5.35352ZM19.5134 19.1257V19.8273L28.4488 30.2395L28.8549 30.0179L19.5134 19.1257Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.3661 5.53809L6.95996 5.75962L14.123 14.1042L15.3045 14.8057L7.3661 5.53809ZM19.5137 19.6795V20.3811L28.1167 30.424L28.5229 30.2025L19.5137 19.6795Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.03408 5.72266L6.62793 5.94419L13.1632 13.5872L14.3448 14.2518L7.03408 5.72266ZM19.514 20.2333V20.9718L27.7847 30.6455L28.1908 30.3871L19.514 20.2333Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.70107 5.90723L6.29492 6.12877L12.2026 13.0333L13.3841 13.6979L6.70107 5.90723ZM19.5133 20.8241V21.5256L27.4886 30.8301L27.8948 30.5716L19.5133 20.8241Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.36904 6.0918L5.96289 6.31334L11.2429 12.4794L12.4613 13.1441L6.36904 6.0918ZM19.5135 21.3779V22.0794L27.1566 31.0147L27.5627 30.7562L19.5135 21.3779Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.03701 6.27734L5.63086 6.49888L10.2831 11.9265L11.5016 12.6281L6.03701 6.27734ZM15.7108 18.2403L16.6708 19.348V18.9419C16.6708 18.868 16.5969 18.7572 16.5231 18.7203L15.7108 18.2403ZM19.5138 21.9326V22.6711L26.8245 31.2002L27.2307 30.9418L19.5138 21.9326Z" fill="#DB0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.70498 6.4248L5.29883 6.64634L9.32341 11.3724L10.5419 12.074L5.70498 6.4248ZM14.7511 17.6862L16.6711 19.9016V19.2001L15.9695 18.3878L14.7511 17.6862ZM19.5141 22.5232V23.2247L26.4925 31.3846L26.8987 31.1631L19.5141 22.5232Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.37197 6.60938L4.96582 6.83091L8.39964 10.8555L9.58118 11.5201L5.37197 6.60938ZM13.7904 17.1693L16.6704 20.4924V19.7908L15.0088 17.8339L13.7904 17.1693ZM19.5134 23.077V23.7785L26.1595 31.5692L26.5656 31.3476L19.5134 23.077Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.04001 6.79372L4.63386 7.01526L7.43998 10.3014L8.62152 10.966L5.04001 6.79372ZM12.8676 16.6152L16.6707 21.0459V20.3444L14.0492 17.2798L12.8676 16.6152ZM19.5137 23.6674V24.369L25.8645 31.7535L26.2706 31.532L19.5137 23.6674Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.70772 6.97852L4.30157 7.20005L6.48002 9.74775L7.66154 10.4123L4.70772 6.97852ZM11.9077 16.0615L16.6707 21.6V20.8984L13.0892 16.763L11.9077 16.0615ZM19.5137 24.2214V24.923L25.5322 31.9383L25.9383 31.7168L19.5137 24.2214Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.3749 7.16309L3.96875 7.38462L5.5195 9.19385L6.70103 9.89539L4.3749 7.16309ZM10.9472 15.5077L16.6702 22.1907V21.4891L12.1287 16.2092L10.9472 15.5077ZM19.5132 24.7752V25.4768L25.1994 32.1229L25.6055 31.9013L19.5132 24.7752Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.04302 7.34766L3.63687 7.5692L4.55994 8.63996L5.77839 9.3415L4.04302 7.34766ZM9.9876 14.9907L16.6706 22.7445V22.0429L11.1691 15.6553L9.9876 14.9907ZM19.5137 25.366V26.0675L24.8675 32.3075L25.2737 32.0859L19.5137 25.366Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.7108 7.49527L3.26773 7.71681L3.60003 8.12296L4.81848 8.78757L3.7108 7.49527ZM9.02768 14.4368L16.6707 23.3351V22.5967L10.2461 15.1014L9.02768 14.4368ZM19.5137 25.9197V26.6213L24.5353 32.5289L24.9414 32.2705L19.5137 25.9197Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.37846 7.67984L3.12 7.82753L3.85846 8.23368L3.37846 7.67984ZM8.06765 13.8829L16.6707 23.8889V23.1874L9.28611 14.5844L8.06765 13.8829ZM19.5137 26.4735V27.212L24.2399 32.7135L24.646 32.455L19.5137 26.4735Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.14461 13.3292L16.6707 24.4429V23.7414L8.32613 14.0307L7.14461 13.3292ZM19.5137 27.0645V27.766L23.9076 32.8983L24.3137 32.6398L19.5137 27.0645Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.18457 12.8125L16.6707 25.0339V24.2955L7.36609 13.4771L6.18457 12.8125ZM19.5137 27.6186V28.3201L23.5752 33.0831L23.9814 32.8247L19.5137 27.6186Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.22461 12.2578L16.6707 25.5869V24.8854L6.40614 12.9224L5.22461 12.2578ZM19.5137 28.1716V28.91L23.2429 33.2669L23.6491 33.0454L19.5137 28.1716Z" fill="#DC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.26465 11.7041L16.6707 26.1409V25.4394L5.44618 12.4056L4.26465 11.7041ZM19.5137 28.7625V29.464L22.9107 33.4516L23.3168 33.2301L19.5137 28.7625Z" fill="#DB0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.30457 11.1506L16.6706 26.7321V26.0305L4.4861 11.8522L3.30457 11.1506ZM19.5137 29.3167V30.0182L22.6152 33.6366L23.0214 33.4151L19.5137 29.3167Z" fill="#DA0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.34465 10.6336L16.6707 27.2858V26.5843L3.5631 11.2983L2.34465 10.6336ZM19.5137 29.8705V30.6089L22.283 33.8212L22.6891 33.5996L19.5137 29.8705Z" fill="#D90032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 10.5969V11.1138L16.6707 27.8399V27.1383L2.60307 10.7446L2.30769 10.5969ZM19.5137 30.4614V30.9044C19.5137 30.9783 19.4768 31.0521 19.4399 31.0891L21.9506 34.006L22.3568 33.7845L19.5137 30.4614Z" fill="#D80032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 10.966V11.7045L16.6707 28.4306V27.729L2.30769 10.966ZM19.4768 31.0151C19.4399 31.1628 19.3291 31.3105 19.2183 31.3474L19.1814 31.3844L21.6183 34.1905L22.0245 33.969L19.4768 31.0151Z" fill="#D70032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 11.5567V12.2583L16.6707 28.9843V28.2828L2.30769 11.5567ZM19.2552 31.3104C19.2552 31.3473 19.2552 31.3473 19.2183 31.3473L18.8491 31.5689L21.286 34.375L21.6922 34.1535L19.2552 31.3104Z" fill="#D60032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30762 12.1104V12.8119L16.6706 29.5379V28.8364L2.30762 12.1104ZM18.9598 31.4948L18.5167 31.7533L20.9905 34.5964L21.3967 34.3379L18.9598 31.4948Z" fill="#D50032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30762 12.7012V13.4027L16.6706 30.1287V29.4272L2.30762 12.7012ZM18.6275 31.6795L18.3691 31.8272C18.2952 31.8641 18.2214 31.8641 18.1475 31.8641L20.6582 34.781L21.0644 34.5226L18.6275 31.6795Z" fill="#D40032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30762 13.2549V13.9564L16.6706 30.6824V29.9809L2.30762 13.2549ZM17.4829 31.6794L20.3259 34.9655L20.7321 34.707L18.2583 31.864C18.2214 31.864 18.1475 31.9009 18.1106 31.9009H18.0737C17.9629 31.9009 17.8891 31.864 17.8152 31.8271L17.4829 31.6794Z" fill="#D30032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30762 13.8096V14.548L19.9936 35.151L20.3998 34.8925L17.7414 31.791L16.9291 31.3479C16.7814 31.274 16.6706 31.0894 16.6706 30.9048V30.5356L2.30762 13.8096Z" fill="#D20032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30762 14.3994V15.101L19.6613 35.3347L20.0675 35.1131L2.30762 14.3994Z" fill="#D10032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30762 14.9541V15.6556L19.329 35.5201L19.7352 35.2986L2.30762 14.9541Z" fill="#D00032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30762 15.5078V16.2463L19.0336 35.7046L19.4398 35.4831L2.30762 15.5078Z" fill="#CF0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 16.0984V16.7999L18.7014 35.889L19.1075 35.6675L2.30769 16.0984Z" fill="#CE0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 16.6521V17.3537L18.3322 36.0366C18.443 35.9997 18.5537 35.9628 18.6645 35.9259L18.7753 35.852L2.30769 16.6521Z" fill="#CD0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 17.2061V17.9445L17.8522 36.0367C17.9261 36.0367 17.9999 36.0367 18.0737 36.0367C18.1845 36.0367 18.2953 36.0367 18.4061 35.9998L2.30769 17.2061Z" fill="#CC0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 17.7967V18.4983L17.003 35.6305L17.5199 35.9259C17.6307 35.9997 17.8153 36.0366 17.963 36.0366L2.30769 17.7967Z" fill="#CB0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 18.3507V19.0522L16.043 35.0767L17.2614 35.7783L2.30769 18.3507Z" fill="#CA0032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 18.9413V19.6429L15.083 34.5228L16.3014 35.2243L2.30769 18.9413Z" fill="#C90032"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 19.4953V20.1968L14.123 33.969L15.3045 34.6706L2.30769 19.4953Z" fill="#C80033"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 20.049V20.7505L13.163 33.415L14.3445 34.1166L2.30769 20.049Z" fill="#C70033"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 20.6399V21.3414L12.1661 32.8244L13.3845 33.5259L2.30769 20.6399Z" fill="#C60033"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30762 21.1934V21.8949L11.206 32.2702L12.4244 32.9717L2.30762 21.1934Z" fill="#C50033"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30762 21.7471V22.4486L10.246 31.7162L11.4645 32.4177L2.30762 21.7471Z" fill="#C40033"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30762 22.3389V23.0404L9.28603 31.1634L10.5045 31.8649L2.30762 22.3389Z" fill="#C30033"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30762 22.8926V23.5941L8.32603 30.6094L9.54449 31.3109L2.30762 22.8926Z" fill="#C20033"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 23.4461V24.1845L7.3661 30.0552L8.54764 30.7568L2.30769 23.4461Z" fill="#C10033"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30762 24.0371V24.7386L6.36913 29.5017L7.58757 30.2032L2.30762 24.0371Z" fill="#C00033"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 24.5907V25.2922L5.40921 28.9476L6.62766 29.6122L2.30769 24.5907Z" fill="#BF0033"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 25.1444V25.8828L4.44922 28.3567L5.66767 29.0582L2.30769 25.1444Z" fill="#BE0033"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 25.7353V26.4368L3.48922 27.803L4.70767 28.5045L2.30769 25.7353Z" fill="#BD0033"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 26.289V26.4736C2.30769 26.8428 2.56615 27.2859 2.86153 27.4705L3.74768 27.9505L2.30769 26.289Z" fill="#BC0033"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5293 27.1387C2.60314 27.2125 2.64007 27.2864 2.71391 27.3233L2.5293 27.1387Z" fill="#BB0033"/></g><defs><clipPath id="kcd-clip0-0-10"><rect width="36" height="36" fill="white"/></clipPath></defs></svg>'
    ),
    pin: (
      /* HTML */
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(2.757 0.056)"><g><path d="M7.24324 0C3.2493 0 0 3.2493 0 7.2432C0 12.1998 6.48199 19.4763 6.75797 19.7836C7.01719 20.0723 7.46977 20.0718 7.72852 19.7836C8.00449 19.4763 14.4865 12.1998 14.4865 7.2432C14.4864 3.2493 11.2371 0 7.24324 0ZM7.24324 10.8875C5.23379 10.8875 3.59902 9.25266 3.59902 7.2432C3.59902 5.23375 5.23383 3.59898 7.24324 3.59898C9.25266 3.59898 10.8874 5.23379 10.8874 7.24324C10.8874 9.2527 9.25266 10.8875 7.24324 10.8875Z" fill="#057222"/></g></g></svg>'
    ),
    delivery: (
      /* HTML */
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1.21)"><g><path d="M11.1719 0H13.5156V4.10156H11.1719V0Z" fill="#057222"/><path d="M19.4141 0H14.6875V4.6875C14.6875 5.01109 14.4252 5.27344 14.1016 5.27344H10.5859C10.2623 5.27344 10 5.01109 10 4.6875V0H5.3125C4.98891 0 4.72656 0.262344 4.72656 0.585938V7.64824C4.91949 7.62 5.11523 7.60535 5.3125 7.60535C6.39242 7.60535 7.42844 8.03926 8.18711 8.78902H10.5859C11.8783 8.78902 12.9297 9.84043 12.9297 11.1328C12.9297 12.4251 11.8783 13.4765 10.5859 13.4765H14.6875C15.7776 13.4765 16.6963 14.2246 16.9571 15.2343H19.4141C19.7377 15.2343 20 14.972 20 14.6484V0.585938C20 0.262344 19.7377 0 19.4141 0Z" fill="#057222"/><path d="M14.6875 14.6484H9.41406C8.11965 14.6484 7.07031 13.5991 7.07031 12.3047H10.5859C11.2332 12.3047 11.7578 11.78 11.7578 11.1328C11.7578 10.4856 11.2332 9.96094 10.5859 9.96094H7.65625C7.1073 9.2166 6.23738 8.77727 5.3125 8.77727C4.38762 8.77727 3.5177 9.2166 2.96875 9.96094H2.38281V9.57031C2.38281 9.24672 2.12047 8.98438 1.79688 8.98438H0.585938C0.262344 8.98438 0 9.24672 0 9.57031V16.9922C0 17.3158 0.262344 17.5781 0.585938 17.5781H1.79688C2.12047 17.5781 2.38281 17.3158 2.38281 16.9922V15.8203H2.96875L6.64062 16.9922H14.6875C15.3347 16.9922 15.8594 16.4675 15.8594 15.8203C15.8594 15.1731 15.3347 14.6484 14.6875 14.6484Z" fill="#057222"/></g></g></svg>'
    ),
    shop: (
      /* HTML */
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1.25)"><g><path d="M19.9812 5.47375L18.85 0.94625C18.7112 0.39 18.2112 0 17.6375 0H2.36375C1.79 0 1.29 0.39 1.15 0.94625L0.01875 5.47375C0.00625 5.5225 0 5.57375 0 5.625C0 7.3475 1.33125 8.75 2.96875 8.75C3.92 8.75 4.76875 8.27625 5.3125 7.54125C5.85625 8.27625 6.705 8.75 7.65625 8.75C8.6075 8.75 9.45625 8.27625 10 7.54125C10.5438 8.27625 11.3912 8.75 12.3438 8.75C13.2963 8.75 14.1437 8.27625 14.6875 7.54125C15.2313 8.27625 16.0787 8.75 17.0312 8.75C18.6687 8.75 20 7.3475 20 5.625C20 5.57375 19.9937 5.5225 19.9812 5.47375Z" fill="#057222"/></g></g><g transform="translate(1.25 10.514)"><g><path d="M15.7812 0.735C14.93 0.735 14.1212 0.475 13.4375 0C12.07 0.95125 10.1175 0.95125 8.75 0C7.3825 0.95125 5.43 0.95125 4.0625 0C3.37875 0.475 2.57 0.735 1.71875 0.735C1.105 0.735 0.52625 0.591251 0 0.346251V6.985C0 7.675 0.56 8.235 1.25 8.235H6.25V3.235H11.25V8.235H16.25C16.94 8.235 17.5 7.675 17.5 6.985V0.346251C16.9737 0.591251 16.395 0.735 15.7812 0.735Z" fill="#057222"/></g></g></svg>'
    ),
    pinSmall: (
      /* HTML */
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#kcd-clip0-0-6)"><path d="M8 -2.38419e-07C4.692 -2.38419e-07 2 2.71067 2 6.04333C2 10.7787 7.436 15.668 7.66733 15.8733C7.76267 15.958 7.88133 16 8 16C8.11867 16 8.23733 15.958 8.33267 15.874C8.564 15.668 14 10.7787 14 6.04333C14 2.71067 11.308 -2.38419e-07 8 -2.38419e-07ZM8 9.33333C6.162 9.33333 4.66667 7.838 4.66667 6C4.66667 4.162 6.162 2.66667 8 2.66667C9.838 2.66667 11.3333 4.162 11.3333 6C11.3333 7.838 9.838 9.33333 8 9.33333Z" fill="#057222"/></g><defs><clipPath id="kcd-clip0-0-6"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>'
    )
  }, F = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAYAAACPZlfNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAqjSURBVHhe7Zt5UFXXHcf9o502M02tVWQHFUE0mKiNiQuKWzp1GJdEbZDdFdxFjbikaULVOLgrioIiqE3cqhjBaBE3FASM0CajLJqJYCyCqCggi/Lt/M7jPe89DyzvvlfhzJzPzG/k3nvePefczz3rHds1NDRMbWhoiJMhRrQDcBgSYWhH1viTkraLFCYYUphgSGGCIYUJhhQmGFKYYEhhgiGFCYYUJhhSmGBIYYIhhQmGFCYYUphgSGGCIYUJhhQmGFKYYEhhgiGFCYYUJhhSmGBIYYIhhQmGFCYYUphgSGGCIYUJhhQmGFKYYEhhgiGFCYYUJhhSmGBIYYIhhQmGFCYY/1dht279jJSzuTiZlIWTSdmtEFlISs7GqW+/w7VrBSgvf8IX0SRKSx/hypUbSE6m+mirE5Xn2LHLKCy8x9++RVhcWGVlNWL3nMGY8RFwdQ+BtUMgrO0DYG3XimEfCMeuU9Cv/0JMmbYZR49dQX19PV/0ZklNzcWMkK14p9982DkFm1UfKxt//Lbjx0i/msdn0yIsKiwt7QcMHb4Mv+/sC4cuwXDtORM93gptE+HWKwTd3KbDxiEQnWz88MHov+Bsai5fBRVlZY8xI2SbTpB9ALr1mGF0X1PC3SMUne38sSBsF59Vi7GYsMQT6UySvXMwKxhf2LYW9s5BTN6WrSf4qjDu3i3DEHr5rH2ZbP73WoJe4K6u03HzZjGfXYuxiLCc3Nvo0n0anLtPU8miilIB6drrDsqXglpFUw/c/a1QdHefiQ5WkxG9M1lVn7raeoyfsAqdbP3g7jFL9TuXHjOM8mo2Gsugj9918kHYklhVXqZitrCGhgZM8lnLugx95UgaPQwH52D0HxgGz2Hh8PRaisGvIVg+Qz/BQM8lLPq8O4+NX1Q+esP51k8CaFy69l2BoU4J+84ykSrJHtQqg+HRZw4GDzXOlw8qx6AhVIbFrBzvD1qE/gMW4Wae9tZFmC0sKzsf9l2CVW8xPRjXniFI2JeKhw+foKrq2WuNyspnePKkikXJf8px+fIPWLxkD5xdqOVRL/Cy1ZBAa4cATPZfx+pTX/8cI//4KRy6TlEJI+lz5kXjp59KjPJrLp4+rTaUo6KiEtXVNfzjMxmzhW3YlIiO1r6qytk6BrLZWFvjbGoOXHuGGk0e6OXq0n06ioruo6i4lHVfygkT9RZuvULx+HElf8vXjtnCwpfvRWe7ANUDoP7ba8Qy5OUXo7amjr21yqitrUdVVQ2qq2sN51rC/fuPELv7NPbGpyA+IQXx8SmIjT2NxMR06pz55E2y/8A51qKU5aWwsvPH8RPpyM8vgnO3Kaoeg/6m8fnQ4Uus5Tzn6kNBdaE61dXVt7g+WjBb2PqNx9k0Xll56nLoLXXvPRtDhy/H8JErMWzkChbDR61k5wYOCcdgr3AMbzw32T8Sm7eeQHFxGZ+FgX37U/HLNz5kU2N9/OKN8ayrain0QD2HLWMvFS9sy7YTKCl5xFobtTrldTru6jYdg4YsZfWhcrP6NP47eGg4u+Y1Qndu3EersOLTBGRk3OSLYBZmC8v914+sv+crSEFdCb2Zzi5TjUI/k9If2zkFsSl0z96zcODv5/lsGPPDdrHJgzIP6n7PnLnGJ30ls+fuYFN65X1I/qo1X7Prf/L+KysPXx9qacoyv6o+tMSxsvWDjWMQFoTFsHHVEpgtjFi6LA7tO31sVEFTgyYAVGkSFxefosqjpqaOrYto4qBPTzO8d/rNY1tGpjBrznYjYdTCtkV9w66nnsuFla0/G+v4WaWpQZLbd/KBX+B6NhSYi0WEUb/uG7COrTPo7Wpq3WNK0PqFWuydOyWGPHJzb8Opm/re1Ap8fHWzu5ZSS12il3GXaOMYiJSU64Z0O2O+Za3O1inQIjs27Tv6IG7vP1Vl0YJFhBE00NKuwYDBS+DUTbfuobfWivbP7AJU447+HIVufRSiepNpUUszz63bdG88sSfuDOtilA+BjqN2nFSV43+RsP8s28sj+fqwcQhA777z2BJECbU073ERrCVT10utjq+Pso7687oNBPWCm5Y+Yz+MQMOLF6o8TMViwvRQa8vOzsOx41dw8HAaiwNfnWezs30HzrG/6dyhI7pYG3kEPT1mGY2BJHL23JeTiZBZUawV6K/rx5OcnEJV/q+i/EEFxk9cgyEjlmPU6M8MMcjzE0TvOsUnN5CfX4zkU1k4eOgSDh1Ow1cHL7K66Ov0NZ0/kobDRy+zrpz2KfkWTNLf7jef7U+ag8WFaYEmE/SWq4Q5BCB09g52varyGWu51FXqr9MD8fQKR01NLX+7ZqEZIqWn3ZkXL16owpJkX8tnuyLK7psJ6zsfpWWmjbc8rS6sprYOH01cDYcuL3cWqHukLnHjpkSW5mpmHuyd1Wsj6nqWr9zH365NsH1HktEsk2aNY8Z9YfbLYbawi5e+R+S6o9genWRS7NiZjM1bE+E9PoJt+ygrR8sB+hRSUHCX5UHjFG3EKtPQ2DNtxmZE70o2undrxtwF0az1K7t4Gs9ob3LbdtPG26YwSxjtj737/kK82eHPbPBVDsSGv9lA/fKc/m/9sWO3KeoJR2Pllq9IMOQTPG0TG/SVwiidk8tUo3ybyofPs7m0TZW/uXP8b/VB5XRV9ARUTuoeqUt/+PCp6vlpwSxh26OTWddl7lpFGbQG8x77Bds4Jeil6D8gjO0y8GnbepAs2lSgFpeecYN/fJrQLKy66hn7jEDrLr6gWoLuQ1tcPn6RKHtQYcjnYtr3sHUMglsTv2nLQd06fdmmmeGFi/9WPTtz0Cxsw8bj+NVvJhi+MmsJW6cg1mV2tvdn34p27znDZnBK/rb6IH795gS2juF/39bCzjmILUdovHXpMRNhi3fj3r0HqvqYiyZhtbV1CAmNwphxEZgwaS0mTPpSUwRO2YTPPj+Ak0lXUVFRxWfDWL3mILzHfm702zYXE7+Ej28kFi6KQUzsaRTe+pmvikXQJKylnzIklkejMElrIYUJhmZhpU9vIrM4FpnFMcgs3t0Ysci6uwdZd42Plf/SNd0x/U330Kfn78Ff04X+Hsah/22c4lifXncvdTka09N5w32bzvPlvZovF7t/8W5kFO1Ezj3dt7WcnNtYt+EfOPFNBv8INaFJWNGjq4i6+h42XOmFTem9uXi7MfhjZTSV7lX34ONV1/lrzR3z5eDTNRUtSdMba9O64lbFcVy6UMi21Dp0nsy+EESs0kk0B03CTuYtwsZ0D0RnDUV01hAZiojKHIC910cDeA5fv83sExAtoGmrza3XLJM/tvJoEna6YCXWX3E3KqwMnbDYa6MAPEPIzBh0sPJhC2naguvdZx4ecd/cTEWTsLKqAuy97s2a/5aMvjK4iExzQU7pLuTdKMEf3gtj23e0sI5POMs/SpPRJIx4Vl+BH8sv4Fb5OdwuPy9DEYUPUlH44Bx7TvRfnJKTM3Hjxh3+EWpCszBJ6yCFCYYUJhhSmGBIYYIhhQmGFCYYUphgSGGCIYUJhhQmGFKYYEhhgiGFCYYUJhhSmGBIYYIhhQmGFCYYUphgSGGCIYUJhhQmGFKYYEhhgiGFCYYUJhhSmGBIYYIhhQmGFCYYUphgSGGCIYUJhhQmGO0AHOZPStou/wWvkewZn5XZUgAAAABJRU5ErkJggg==", c = {
    heading: "Ako chcete tovar prevziať?",
    hint: "Vyberte spôsob, potom upresníte miesto alebo kuriéra.",
    tabPacketa: "Packeta – výdajné miesta a Z‑BOXY",
    tabHome: "Doručenie na adresu",
    tabStore: "Osobný odber",
    packetaHeading: "Kam vám máme zásielku doručiť?",
    packetaEmptyTitle: "Vyberte výdajné miesto",
    packetaEmptyText: "Z-BOX alebo výdajné miesto Packeta vo vašom okolí",
    packetaEmptyBtn: "Vybrať na mape",
    homeHeading: "Kam vám máme zásielku doručiť?",
    storeHeading: "Na ktorej predajni si tovar vyzdvihnete?",
    change: "Zmeniť",
    nearest: "najbližšie k vám",
    free: "zadarmo",
    deliveryPrefix: "Doručenie",
    locationCaption: (t) => `Vybrali sme podľa vašej polohy (${t}). Ak ste inde, kliknite na Zmeniť.`,
    modalTitle: "Vyberte predajňu",
    modalFee: (t) => `Poplatok za vyzdvihnutie — ${t}`,
    modalSelect: "Vybrať",
    close: "Zavrieť"
  }, Z = ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"], _ = {
    DPDKURIER: "zavolá pred doručením",
    PACKETA_KURIER: "zavolá pred doručením",
    SDSKURIER: "vyloženie pred dom"
  }, w = {
    OOZ: { name: "KiNEKUS Eshop Žilina", address: "Rosinská cesta 13, Žilina" },
    OOVajnory: { name: "KiNEKUS Bratislava Vajnory", address: "Pri starom letisku 3, 831 07 Bratislava" },
    OOBratislava: { name: "KiNEKUS Bratislava Fedinova – Petržalka", address: "Fedinova 14, Bratislava" },
    OOBratislava3: { name: "KiNEKUS Bratislava Mlynarovičova – Petržalka", address: "Mlynarovičova 22, Bratislava" },
    OOPovazskaBystri: { name: "KiNEKUS Považská Bystrica", address: "SNP 5164/167, Považská Bystrica" },
    OOZilina: { name: "KiNEKUS Žilina, Kamenná 4", address: "Kamenná 4, 010 01 Žilina" },
    OOMartin: { name: "KiNEKUS Martin", address: "Jilemnického 8851/65, 036 01 Martin" },
    OORuzomberok: { name: "KiNEKUS Ružomberok", address: "Bystrická cesta 2159, 034 01 Ružomberok" },
    OOTrencin: { name: "KiNEKUS Trenčín", address: "Belá 7575, 911 01 Trenčín" },
    OONitra: { name: "KiNEKUS Nitra", address: "Bratislavská 35, 949 01 Nitra" },
    OOTrnava: { name: "KiNEKUS Trnava", address: "Veterná 7462/18, 917 71 Trnava" },
    OOPrievidza: { name: "KiNEKUS Prievidza", address: "Nedožerská cesta 1268, 971 01 Prievidza" },
    OOKosice: { name: "KiNEKUS Košice", address: "Pri Prachárni 4, 040 11 Košice" },
    OONoveZamky: { name: "KiNEKUS Nové Zámky", address: "Dvorská cesta 5, 940 01 Nové Zámky" },
    OOPoprad: { name: "KiNEKUS Poprad, OC Kriváň", address: "Dlhé Hony 5268/9, 058 01 Poprad" }
  }, V = {
    packeta: { label: c.tabPacketa, icon: h.packeta },
    home: { label: c.tabHome, icon: h.truck },
    store: { label: c.tabStore, icon: h.store }
  }, x = (
    /* HTML */
    '<span class="kcd-dot"></span>'
  ), R = (t, e) => (
    /* HTML */
    `
  <div class="kcd-head">
    <div class="kcd-title">${c.heading}</div>
    <div class="kcd-hint">${c.hint}</div>
  </div>
  <div class="kcd-tabs kcd-tabs--${t.length}">${t.map(G).join("")}</div>
  ${e}
`
  ), G = (t) => (
    /* HTML */
    `
  <button type="button" class="kcd-tab ${t.active ? "kcd-tab--active" : ""}" data-kcd-tab="${t.id}">
    <span class="kcd-tab-icon">${V[t.id].icon}</span>
    <span class="kcd-tab-label">${V[t.id].label}</span>
  </button>
`
  ), W = (t) => (
    /* HTML */
    `
  <div class="kcd-card">
    <div class="kcd-card-title">${c.packetaHeading}</div>
    ${t.point ? (
      /* HTML */
      `
          <div class="kcd-picked">
            <div class="kcd-picked-top">
              <div class="kcd-picked-name">${t.point.title}</div>
              <button type="button" class="kcd-link" data-kcd-action="packeta">${c.change}</button>
            </div>
            ${t.point.address ? (
        /* HTML */
        `
                  <div class="kcd-row">
                    <span class="kcd-row-icon">${h.pin}</span>
                    ${t.point.address}
                    ${t.point.distanceText ? `${x}<b>${t.point.distanceText}</b>` : ""}
                    ${t.point.nearest ? `<span class="kcd-badge">${c.nearest}</span>` : ""}
                  </div>
                `
      ) : ""}
            <div class="kcd-row">
              <span class="kcd-row-icon">${h.delivery}</span>
              ${c.deliveryPrefix}: ${t.dateText}
              <span class="kcd-badge">${t.priceText}</span>
            </div>
          </div>
        `
    ) : (
      /* HTML */
      `
          <div class="kcd-picked kcd-picked--empty">
            <div class="kcd-picked-top">
              <div>
                <div class="kcd-picked-name">${c.packetaEmptyTitle}</div>
                <div class="kcd-row">${c.packetaEmptyText}</div>
              </div>
              <button type="button" class="kcd-btn" data-kcd-action="packeta">${c.packetaEmptyBtn}</button>
            </div>
            <div class="kcd-row">
              <span class="kcd-row-icon">${h.delivery}</span>
              ${c.deliveryPrefix}: ${t.dateText}
              <span class="kcd-badge">${t.priceText}</span>
            </div>
          </div>
        `
    )}
    ${t.caption ? `<div class="kcd-caption">${t.caption}</div>` : ""}
  </div>
`
  ), q = (t) => (
    /* HTML */
    `
  <div class="kcd-card">
    <div class="kcd-card-title">${c.homeHeading}</div>
    <div class="kcd-carriers">${t.map(J).join("")}</div>
  </div>
`
  ), J = (t) => (
    /* HTML */
    `
  <button type="button" class="kcd-carrier ${t.active ? "kcd-carrier--active" : ""}" data-kcd-carrier="${t.id}">
    <span class="kcd-radio"></span>
    <span class="kcd-carrier-logo">${t.logo}</span>
    <span class="kcd-carrier-body">
      <span class="kcd-carrier-name">${t.name}</span>
      <span class="kcd-carrier-meta">
        <span class="kcd-carrier-date">${t.dateText}</span>
        ${t.note ? `${x}<span>${t.note}</span>` : ""}
      </span>
    </span>
    <span class="kcd-carrier-price ${t.priceText === c.free ? "kcd-carrier-price--free" : ""}">${t.priceText}</span>
  </button>
`
  ), X = (t, e) => (
    /* HTML */
    `
  <div class="kcd-card">
    <div class="kcd-card-title">${c.storeHeading}</div>
    ${t ? (
      /* HTML */
      `
          <div class="kcd-picked">
            <div class="kcd-picked-top">
              <div class="kcd-picked-name-wrap">
                <div class="kcd-picked-name">${t.name}</div>
                ${t.nearest ? `<span class="kcd-badge">${c.nearest}</span>` : ""}
              </div>
              <button type="button" class="kcd-link" data-kcd-action="stores">${c.change}</button>
            </div>
            <div class="kcd-row">
              <span class="kcd-row-icon">${h.pin}</span>
              ${t.address}
              ${t.distanceText ? `${x}<b>${t.distanceText}</b>` : ""}
            </div>
            <div class="kcd-row">
              <span class="kcd-row-icon">${h.shop}</span>
              ${t.status}
              <span class="kcd-badge">${t.priceText}</span>
            </div>
          </div>
        `
    ) : ""}
    ${e ? `<div class="kcd-caption">${e}</div>` : ""}
  </div>
`
  ), Q = (t, e) => (
    /* HTML */
    `
  <div class="kcd-modal" id="kcdModal" role="dialog" aria-modal="true">
    <div class="kcd-modal-box">
      <button type="button" class="kcd-modal-close" data-kcd-action="close" aria-label="${c.close}">×</button>
      <div class="kcd-modal-head">
        <div class="kcd-modal-title">${c.modalTitle}</div>
        ${e ? `<div class="kcd-modal-fee">${c.modalFee(e)}</div>` : ""}
      </div>
      <div class="kcd-modal-list">${t.map(ee).join("")}</div>
    </div>
  </div>
`
  ), ee = (t) => (
    /* HTML */
    `
  <div class="kcd-store">
    <div class="kcd-store-info">
      <div class="kcd-store-top">
        ${t.distanceText ? (
      /* HTML */
      `<span class="kcd-store-dist">${h.pinSmall}${t.distanceText}</span>`
    ) : ""}
        <span class="kcd-store-name">${t.name}</span>
      </div>
      <span class="kcd-badge kcd-badge--small">${t.status}</span>
    </div>
    <button type="button" class="kcd-store-btn" data-kcd-store="${t.id}">${c.modalSelect}</button>
  </div>
`
  ), ne = {
    OOVajnory: [48.199377, 17.195798],
    // Bratislava Vajnory, Pri starom letisku 3
    OOBratislava: [48.11776, 17.10317],
    // Bratislava Fedinova - Petržalka
    OOBratislava3: [48.12703497475394, 17.122811724983055],
    // Bratislava Mlynarovičova - Petržalka
    OOPovazskaBystri: [49.103822491707334, 18.461244137333438],
    // Považská Bystrica, SNP 5164/167
    OOZilina: [49.2047921, 18.7284308],
    // Žilina, Kamenná 4
    OOMartin: [49.09039, 18.93262],
    // Martin, Jilemnického 8851/65
    OORuzomberok: [49.068, 19.310451],
    // Ružomberok, Bystrická cesta 2159
    OOTrencin: [48.86619, 18.0223],
    // Trenčín, Belá 7575
    OONitra: [48.31612, 18.060274],
    // Nitra, Bratislavská 35
    OOTrnava: [48.38708085153855, 17.598613030151448],
    // Trnava, Veterná 7462/18
    OOPrievidza: [48.78437695088781, 18.626835690982308],
    // Prievidza, Nedožerská cesta 1268
    OOKosice: [48.69672, 21.25176],
    // Košice, Pri Prachárni 4
    OONoveZamky: [47.98471304174778, 18.17936272234666],
    // Nové Zámky, Dvorská cesta 5
    OOPoprad: [49.04961, 20.29178]
    // Poprad, Dlhé Hony 5268/9
  }, te = 6371, g = (t) => t * Math.PI / 180, S = (t, e, n, i) => {
    const l = g(n - t), o = g(i - e), r = Math.sin(l / 2) ** 2 + Math.cos(g(t)) * Math.cos(g(n)) * Math.sin(o / 2) ** 2, d = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r));
    return te * d;
  }, ie = {
    ...ne,
    OOZ: [49.2046, 18.7598]
  }, P = "kcd_user_geo", le = "https://get.geojs.io/v1/ip/geo.json", oe = async (t = 4e3) => {
    try {
      const e = sessionStorage.getItem(P);
      if (e) {
        const n = JSON.parse(e);
        if (typeof (n == null ? void 0 : n.lat) == "number" && typeof (n == null ? void 0 : n.lon) == "number") return n;
      }
    } catch {
    }
    try {
      const e = new AbortController(), n = setTimeout(() => e.abort(), t), i = await fetch(le, { signal: e.signal });
      if (clearTimeout(n), !i.ok) return null;
      const l = await i.json(), o = parseFloat(l.latitude), r = parseFloat(l.longitude);
      if (Number.isNaN(o) || Number.isNaN(r)) return null;
      const d = { lat: o, lon: r, city: l.city || "" };
      try {
        sessionStorage.setItem(P, JSON.stringify(d));
      } catch {
      }
      return d;
    } catch {
      return null;
    }
  }, de = (t, e) => {
    const n = ie[e];
    return !t || !n ? null : S(t.lat, t.lon, n[0], n[1]);
  }, D = (t) => t < 10 ? `${t.toFixed(1).replace(".", ",")} km` : `${Math.round(t)} km`, C = "https://widget.packeta.com/v6/pps/api/widget/v2", T = "kcd_packeta_nearest", ae = "0123456789bcdefghjkmnpqrstuvwxyz", re = (t, e, n = 6) => {
    const i = [-90, 90], l = [-180, 180];
    let o = "", r = 0, d = 0, a = !0;
    for (; o.length < n; ) {
      const s = a ? l : i, p = a ? e : t, u = (s[0] + s[1]) / 2;
      p >= u ? (r = r << 1 | 1, s[0] = u) : (r = r << 1, s[1] = u), a = !a, ++d === 5 && (o += ae[r], r = 0, d = 0);
    }
    return o;
  }, y = async (t, e) => {
    const n = new AbortController(), i = setTimeout(() => n.abort(), e);
    try {
      const l = await fetch(t, { signal: n.signal });
      if (!l.ok) throw new Error(`HTTP ${l.status}`);
      return await l.json();
    } finally {
      clearTimeout(i);
    }
  }, ce = async (t, e, n = "sk", i = 4e3) => {
    var o, r, d, a;
    const l = re(e.lat, e.lon);
    try {
      const s = JSON.parse(sessionStorage.getItem(T) || "null");
      if ((s == null ? void 0 : s.hash) === l && s.point) return s.point;
    } catch {
    }
    try {
      const s = `App_ApiKey=${encodeURIComponent(t)}&App_Countries=${n}`, { vendors: p = [] } = await y(`${C}/vendors?${s}`, i), u = `${s}&App_VendorCodes=${encodeURIComponent(p.map((v) => v.code).join(","))}`, z = (await y(`${C}/geohash/${l}?Limit=20&${u}`, i)).find(
        (v) => {
          var $, K, U;
          return v.canBeSelected !== !1 && !(($ = v.flags) != null && $.isFull) && !((K = v.flags) != null && K.isOnHoliday) && !((U = v.flags) != null && U.isOnHoliday_PickUp);
        }
      );
      if (!z) return null;
      const L = await y(`${C}/${z.externalId}?${u}`, i), B = {
        id: String(L.externalId).replace(/^\D+_/, ""),
        // Native/widget `name` is the address line, `place` the point's own name
        name: ((o = L.address) == null ? void 0 : o.name) || L.name,
        place: L.name || "",
        street: ((r = L.address) == null ? void 0 : r.street) || "",
        city: ((d = L.address) == null ? void 0 : d.city) || "",
        zip: ((a = L.address) == null ? void 0 : a.zip) || "",
        // distanceFromOrigin is from the geohash cell centre — measure from the visitor
        distanceKm: L.coordinates ? S(e.lat, e.lon, L.coordinates.latitude, L.coordinates.longitude) : null
      };
      try {
        sessionStorage.setItem(T, JSON.stringify({ hash: l, point: B }));
      } catch {
      }
      return B;
    } catch {
      return null;
    }
  };
  N({ name: "Kinekus Checkout Delivery", dev: "AI" });
  const k = "Checkout delivery options", O = "kcd_packeta_point", se = "Vyberte výdajné miesto", pe = 1e4, b = (t) => {
    const e = typeof t == "number" ? t : parseFloat(t || "0");
    return !e || e <= 0 ? c.free : `${e.toFixed(2).replace(".", ",")} €`;
  }, A = (t) => (parseFloat(String(t ?? 0)) || 0).toFixed(2).replace(".", ","), E = (t) => String(t).padStart(2, "0"), I = (t) => {
    const e = (t || "").match(/(\d{1,2})\.(\d{1,2})\.(\d{4})?/);
    if (!e) return null;
    const n = /* @__PURE__ */ new Date(), i = new Date(e[3] ? +e[3] : n.getFullYear(), +e[2] - 1, +e[1]);
    return !e[3] && i.getTime() < n.getTime() - 30 * 864e5 && i.setFullYear(i.getFullYear() + 1), i;
  }, H = (t) => `${E(t.getDate())}.${E(t.getMonth() + 1)}`;
  class ue {
    constructor() {
      this.userLocation = null, this.carrierId = null, this.userPickedStore = !1, this.autoStoreId = null, this.autoPicked = !1, this.renderTimer = null, this.locationPromise = Promise.resolve(null), this.packetaHooked = Promise.resolve(!1), this.packetaAutoPickAt = 0, this.init();
    }
    async init() {
      await M("head"), document.head.insertAdjacentHTML("beforeend", `<style>${Y}</style>`);
      const e = await M("#delivery-section");
      document.getElementById("kcdDelivery") || (e.insertAdjacentHTML("beforebegin", '<section class="kcd-block" id="kcdDelivery"></section>'), this.root = document.getElementById("kcdDelivery"), this.locationPromise = oe(), this.packetaHooked = this.hookPacketaWidget(), this.render(), this.bindEvents(), this.watchNative(), this.keepSectionsOpen(), this.loadUserLocation(), this.autoSelectDelivery(), j("#kcdDelivery", "exp_kinekus_checkout_delivery_01", k, "Checkout delivery options visibility"));
    }
    // Payment and contact sections are shown from the start (CSS overrides the
    // native `.hidden` step reveal). Native still toggles `.hidden` — and scrolls
    // to a section each time it "reveals" it — so drop exactly those scrolls, and
    // keep unselected payment options from collapsing after a pick.
    keepSectionsOpen() {
      var l;
      const e = window.jQuery;
      if ((l = e == null ? void 0 : e.fn) != null && l.animate && !e.fn.animate.__kcd) {
        const o = e.fn.animate, r = function(d, ...a) {
          return d && typeof d.scrollTop == "number" && this.is("html, body") && ["#payment-section", "#contact-section"].some((p) => {
            const u = e(p);
            return u.length && Math.abs(u.offset().top - 50 - d.scrollTop) < 2;
          }) ? this : o.call(this, d, ...a);
        };
        r.__kcd = !0, e.fn.animate = r;
      }
      const n = document.getElementById("paymentTypes");
      if (!n) return;
      const i = () => n.querySelectorAll(".payment-option.anim-collapse").forEach((o) => o.classList.remove("anim-collapse"));
      i(), n.querySelectorAll(".payment-price").forEach((o) => {
        var d;
        const r = parseFloat((((d = o.querySelector(".amount")) == null ? void 0 : d.textContent) || "0").replace(",", "."));
        o.classList.toggle("kcd-price-extra", r > 0);
      }), new MutationObserver(i).observe(n, { subtree: !0, attributes: !0, attributeFilter: ["class"] });
    }
    // ─── Native state readers ──────────────────────────────────────────────────
    // Native hides unavailable options (e.g. Packeta for heavy/oversized goods)
    // with display:none + disabled — treat both as "not offered".
    isOffered(e) {
      const n = e == null ? void 0 : e.closest("label");
      return !!e && !!n && !e.disabled && n.style.display !== "none";
    }
    get packetaInput() {
      return document.querySelector("#delivery_PACKETA");
    }
    get homeInput() {
      return document.querySelector("#delivery_HOME_DELIVERY_GROUP");
    }
    get ooInput() {
      return document.querySelector("#oo-selected");
    }
    getActiveTab() {
      var e, n, i;
      return (e = this.packetaInput) != null && e.checked ? "packeta" : (n = this.homeInput) != null && n.checked ? "home" : (i = this.ooInput) != null && i.checked && this.ooInput.value && this.ooInput.value !== "on" ? "store" : null;
    }
    getTabs() {
      const e = this.getActiveTab(), n = [];
      return this.isOffered(this.packetaInput) && n.push({ id: "packeta", active: e === "packeta" }), this.isOffered(this.homeInput) && n.push({ id: "home", active: e === "home" }), this.getStoreInputs().length && n.push({ id: "store", active: e === "store" }), n;
    }
    // ─── Packeta ───────────────────────────────────────────────────────────────
    // Native writes the picked point's name into the card's sub-line and resets it
    // to "Vyberte výdajné miesto" when delivery is cleared.
    getPacketaSub() {
      var n, i, l;
      const e = (i = (n = this.packetaInput) == null ? void 0 : n.closest("label")) == null ? void 0 : i.querySelector(".option-sub");
      return ((l = e == null ? void 0 : e.textContent) == null ? void 0 : l.trim()) || "";
    }
    getPacketaPoint() {
      const e = this.getPacketaSub();
      if (!e || e === se) return null;
      let n = null;
      try {
        n = JSON.parse(sessionStorage.getItem(O) || "null");
      } catch {
      }
      return n && n.name === e ? {
        title: n.title,
        address: n.address,
        distanceText: n.auto && n.km != null ? D(n.km) : "",
        nearest: !!n.auto
      } : { title: e, address: "", distanceText: "", nearest: !1 };
    }
    // Native only keeps point.id/name — wrap the widget callback to also keep the
    // street/city for our card. Library loads async, so poll for it briefly.
    hookPacketaWidget() {
      return new Promise((e) => {
        const n = (i) => {
          var o;
          const l = (o = window.Packeta) == null ? void 0 : o.Widget;
          if (!(l != null && l.pick)) {
            i < 50 ? setTimeout(() => n(i + 1), 200) : e(!1);
            return;
          }
          l.pick.__kcd || this.patchPacketaPick(l), e(!0);
        };
        n(0);
      });
    }
    patchPacketaPick(e) {
      const n = e.pick.bind(e), i = (l, o, r) => {
        const d = (a, s = !1) => {
          if (a) {
            const p = [a.zip, a.city].filter(Boolean).join(" "), u = {
              name: a.name,
              title: a.place || a.name,
              address: [a.street, p].filter(Boolean).join(", "),
              km: a.distanceKm ?? null,
              auto: s
            };
            try {
              sessionStorage.setItem(O, JSON.stringify(u));
            } catch {
            }
            s || f("kinekus_checkout_delivery_packeta", `Point selected: ${a.id}`, "click", k);
          }
          o(a), this.scheduleRender();
        };
        if (this.packetaAutoPickAt && Date.now() - this.packetaAutoPickAt < pe) {
          this.packetaAutoPickAt = 0, this.preselectNearestPacketa(l, (a) => d(a, !0));
          return;
        }
        return this.packetaAutoPickAt = 0, f("kinekus_checkout_delivery_packeta", "Packeta widget opened", "view", k), n(l, (a) => d(a), r);
      };
      i.__kcd = !0, e.pick = i;
    }
    // Feeds the nearest point into native's own widget callback — native then
    // stores the branch on the server exactly as after a manual pick.
    async preselectNearestPacketa(e, n) {
      var o;
      const i = await this.locationPromise, l = i ? await ce(e, i) : null;
      if (!l || !((o = this.packetaInput) != null && o.checked) || this.getPacketaPoint()) return this.scheduleRender();
      f("kinekus_checkout_delivery_packeta", `Point preselected: ${l.id}`, "other", k), n(l);
    }
    getPacketaView() {
      var o;
      const e = this.packetaInput, n = I(e == null ? void 0 : e.dataset.delivery), i = this.getPacketaPoint(), l = (o = this.userLocation) == null ? void 0 : o.city;
      return {
        point: i,
        caption: i != null && i.nearest && l ? c.locationCaption(l) : "",
        dateText: n ? `${Z[n.getDay()]} <span class="kcd-dot"></span> <b>${H(n)}</b>` : "",
        priceText: b(e == null ? void 0 : e.dataset.price)
      };
    }
    // ─── Home delivery carriers ────────────────────────────────────────────────
    getCarriers() {
      var e;
      try {
        return JSON.parse(((e = this.homeInput) == null ? void 0 : e.dataset.carriers) || "[]");
      } catch {
        return [];
      }
    }
    // Native/server always charges the cheapest carrier of the group
    getDefaultCarrierId() {
      const e = this.getCarriers();
      return e.length ? e.reduce((n, i) => i.price < n.price ? i : n, e[0]).id : null;
    }
    getActiveCarrierId() {
      const e = this.getCarriers().map((n) => n.id);
      return this.carrierId && e.includes(this.carrierId) ? this.carrierId : this.getDefaultCarrierId();
    }
    getCarrierViews() {
      var o, r, d;
      const e = ((d = (r = (o = this.homeInput) == null ? void 0 : o.closest("label")) == null ? void 0 : r.querySelector(".option-sub")) == null ? void 0 : d.textContent) || "", n = I(e), i = n ? `${Z[n.getDay()].replace(/^./, (a) => a.toUpperCase())} ${H(n)}` : "", l = this.getActiveCarrierId();
      return this.getCarriers().map((a) => ({
        id: a.id,
        name: a.name,
        logo: this.getCarrierLogo(a.id),
        dateText: i,
        note: _[a.id] || "",
        priceText: b(a.price),
        active: a.id === l
      }));
    }
    getCarrierLogo(e) {
      return e === "DPDKURIER" ? h.dpd : e === "PACKETA_KURIER" ? h.packeta : e === "SDSKURIER" ? `<img src="${F}" alt="SDS" width="36" height="36" />` : h.truck;
    }
    // #actual-carrier-id lives in the delivery card, outside form#clubUser — tie
    // it to the form so the chosen carrier is actually posted with the order.
    applyCarrier(e) {
      this.carrierId = e;
      const n = document.querySelector("#actual-carrier-id");
      n && (n.value = e, n.setAttribute("form", "clubUser")), this.syncCarrierPrice(!0);
    }
    // Native recalculates the summary for HOME_DELIVERY_GROUP (= cheapest carrier).
    // When another carrier is picked, recalculate for that carrier id instead.
    // `force` — explicit carrier switch: also covers switching *back* to the
    // default one, which native doesn't recalc on its own (summary would keep
    // the previous carrier's price/name).
    async syncCarrierPrice(e = !1) {
      var l, o;
      const n = this.getActiveCarrierId();
      if (this.getActiveTab() !== "home" || !n || !e && n === this.getDefaultCarrierId()) return;
      const i = ((l = document.querySelector('input[name="payment"]:checked')) == null ? void 0 : l.value) || "";
      try {
        const d = await (await fetch(
          `/eshop/order/calculate-delivery-payment/?delivery=${encodeURIComponent(n)}&payment=${encodeURIComponent(i)}`,
          { credentials: "include" }
        )).json();
        if (d.status !== "OK") return;
        const a = ((o = this.getCarriers().find((p) => p.id === n)) == null ? void 0 : o.name) || "";
        document.querySelectorAll(".idDeliveryPrice").forEach((p) => p.textContent = A(d.delivery));
        const s = d.totalPriceRowValue || (typeof d.total == "number" ? A(d.total) : "");
        s && document.querySelectorAll(".idTotalPrice").forEach((p) => p.textContent = s), a && document.querySelectorAll(".idDeliveryName, .idDeliveryInfo").forEach((p) => p.textContent = a);
      } catch {
        m("Kinekus Checkout Delivery: carrier price sync failed", "warn");
      }
    }
    // ─── Stores ────────────────────────────────────────────────────────────────
    // Native pre-filters stores by stock (display:none + disabled for the rest)
    getStoreInputs() {
      return Array.from(document.querySelectorAll("#delivery-types-list-oo input.delivery")).filter(
        (e) => this.isOffered(e)
      );
    }
    getStoreViews() {
      var n;
      const e = this.getStoreInputs().map((i) => {
        var d, a, s, p;
        const l = i.value, o = de(this.userLocation, l), r = (((a = (d = i.closest("label")) == null ? void 0 : d.querySelector(".option-sub")) == null ? void 0 : a.textContent) || "").trim().replace(/\s*-\s*/g, "–").replace(/^./, (u) => u.toUpperCase());
        return {
          id: l,
          name: ((s = w[l]) == null ? void 0 : s.name) || (i.dataset.name || "").trim(),
          address: ((p = w[l]) == null ? void 0 : p.address) || "",
          distanceText: o != null ? D(o) : "",
          nearest: !1,
          status: r,
          priceText: b(i.dataset.price),
          km: o
        };
      });
      return this.userLocation && (e.sort((i, l) => (i.km ?? 1 / 0) - (l.km ?? 1 / 0)), ((n = e[0]) == null ? void 0 : n.km) != null && (e[0].nearest = !0)), e.map(({ km: i, ...l }) => l);
    }
    getSelectedStoreId() {
      return this.getActiveTab() === "store" ? this.ooInput.value : null;
    }
    // Goes through native's own store-card click handler (sets #oo-selected,
    // stores delivery on the server, recalculates the summary).
    selectStore(e) {
      var i;
      const n = (i = document.querySelector(`#delivery_${CSS.escape(e)}`)) == null ? void 0 : i.closest("label");
      n == null || n.click();
    }
    preferredStoreId() {
      var n;
      return ((n = this.getStoreViews()[0]) == null ? void 0 : n.id) || null;
    }
    // ─── Actions ───────────────────────────────────────────────────────────────
    selectTab(e, n = !1) {
      var i, l, o, r;
      if (this.getActiveTab() !== e) {
        if (n ? f("kinekus_checkout_delivery_tab", `Auto-selected: ${e}`, "other", k) : f("kinekus_checkout_delivery_tab", `Tab: ${e}`, "click", k), e === "packeta" && ((l = (i = this.packetaInput) == null ? void 0 : i.closest("label")) == null || l.click()), e === "home" && ((r = (o = this.homeInput) == null ? void 0 : o.closest("label")) == null || r.click()), e === "store") {
          const d = this.preferredStoreId();
          if (!d) return;
          this.autoPicked = !0, this.autoStoreId = this.userLocation ? d : null, this.selectStore(d);
        }
        this.scheduleRender();
      }
    }
    // Re-clicking the native Packeta card re-runs store-delivery and reopens the widget
    openPacketaWidget() {
      var e, n;
      this.packetaAutoPickAt = 0, (n = (e = this.packetaInput) == null ? void 0 : e.closest("label")) == null || n.click();
    }
    // Nothing selected on arrival (sidebar shows "Doručenie: ?") — pick the first
    // offered option, in tab order. Packeta is selected without opening its widget.
    async autoSelectDelivery() {
      if (this.getActiveTab()) return;
      const e = this.getTabs().map((i) => i.id);
      let n = e[0];
      n && (n === "packeta" && (await this.packetaHooked || (n = e[1]), !n) || this.getActiveTab() || (n === "packeta" && (this.packetaAutoPickAt = Date.now()), this.selectTab(n, !0)));
    }
    openStoreModal() {
      var n;
      this.closeStoreModal();
      const e = (n = this.getStoreInputs()[0]) == null ? void 0 : n.dataset.price;
      document.body.insertAdjacentHTML("beforeend", Q(this.getStoreViews(), e ? b(e) : "")), document.body.classList.add("kcd-modal-open"), f("kinekus_checkout_delivery_stores", "Store picker opened", "view", k);
    }
    closeStoreModal() {
      var e;
      (e = document.getElementById("kcdModal")) == null || e.remove(), document.body.classList.remove("kcd-modal-open");
    }
    // ─── Rendering ─────────────────────────────────────────────────────────────
    render() {
      var l;
      const e = this.getTabs();
      let n = "";
      const i = this.getActiveTab();
      if (i === "packeta" && (n = W(this.getPacketaView())), i === "home" && (n = q(this.getCarrierViews())), i === "store") {
        const o = this.getSelectedStoreId(), r = this.getStoreViews().find((a) => a.id === o) || null, d = !!r && !this.userPickedStore && this.autoStoreId === o && !!((l = this.userLocation) != null && l.city);
        n = X(r, d ? c.locationCaption(this.userLocation.city) : "");
      }
      this.root.innerHTML = R(e, n);
    }
    scheduleRender() {
      this.renderTimer && clearTimeout(this.renderTimer), this.renderTimer = setTimeout(() => this.render(), 50);
    }
    bindEvents() {
      this.root.addEventListener("click", (e) => {
        var r;
        const n = e.target, i = n.closest("[data-kcd-tab]");
        if (i) return this.selectTab(i.dataset.kcdTab);
        const l = n.closest("[data-kcd-carrier]");
        if (l) {
          const d = l.dataset.kcdCarrier;
          return d === this.getActiveCarrierId() ? void 0 : (f("kinekus_checkout_delivery_carrier", `Carrier: ${d}`, "click", k), this.applyCarrier(d), this.render());
        }
        const o = (r = n.closest("[data-kcd-action]")) == null ? void 0 : r.dataset.kcdAction;
        if (o === "packeta") return this.openPacketaWidget();
        if (o === "stores") return this.openStoreModal();
      }), document.addEventListener("click", (e) => {
        const n = e.target;
        if (!n.closest("#kcdModal")) return;
        const i = n.closest("[data-kcd-store]");
        if (i) {
          const l = i.dataset.kcdStore;
          return this.userPickedStore = !0, this.autoPicked = !1, this.autoStoreId = null, f("kinekus_checkout_delivery_stores", `Store selected: ${l}`, "click", k), this.closeStoreModal(), l !== this.getSelectedStoreId() && this.selectStore(l), this.scheduleRender();
        }
        (n.closest('[data-kcd-action="close"]') || !n.closest(".kcd-modal-box")) && this.closeStoreModal();
      }), document.addEventListener("keydown", (e) => {
        e.key === "Escape" && this.closeStoreModal();
      });
    }
    // Native mutates its own cards (checked state, Packeta point name, store
    // copied onto #oo-selected) — mirror every change into our block.
    watchNative() {
      document.addEventListener("change", (i) => {
        i.target.name === "delivery" && this.scheduleRender();
      });
      const e = document.getElementById("deliveryTypes");
      e && new MutationObserver(() => this.scheduleRender()).observe(e, {
        subtree: !0,
        childList: !0,
        characterData: !0,
        attributes: !0,
        attributeFilter: ["class", "style", "disabled"]
      });
      const n = window.jQuery;
      n == null || n(document).ajaxComplete((i, l, o) => {
        var r, d;
        (r = o.url) != null && r.includes("calculate-delivery-payment") && this.syncCarrierPrice(), (d = o.url) != null && d.includes("store-delivery") && this.scheduleRender();
      });
    }
    async loadUserLocation() {
      const e = await this.locationPromise;
      if (!e) {
        m("Kinekus Checkout Delivery: user geolocation unavailable, hiding distance", "warn");
        return;
      }
      this.userLocation = e, this.preferNearestStore(), this.render();
    }
    // Location resolved after we already auto-picked a store without it —
    // switch to the nearest one (never overrides the visitor's own choice).
    preferNearestStore() {
      if (!this.autoPicked || this.userPickedStore || this.getActiveTab() !== "store") return;
      const e = this.preferredStoreId();
      e && (this.autoStoreId = e, e !== this.getSelectedStoreId() && this.selectStore(e));
    }
  }
  new ue();
})();
//# sourceMappingURL=index.js.map
