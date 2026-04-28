(function() {
  "use strict";
  const $ = `.crs-atc-btn-wrapper {
  position: relative;
  display: block;
  width: 100%;
}
.crs-atc-btn-wrapper button {
  width: 100%;
}

.crs-atc-overlay {
  position: absolute;
  inset: 0;
  z-index: 10;
  cursor: pointer;
  border-radius: inherit;
}
.crs-atc-overlay.crs-atc-loading {
  pointer-events: none;
  backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.25);
}

.crs-atc-btn-loading {
  filter: blur(2px);
  transition: filter 0.2s ease;
}

.crs-buy-now-btn {
  display: block;
  width: 100%;
  grid-column: 1/-1;
  margin-top: 8px;
  padding: 10px 20px;
  border: 2px solid;
  background: transparent;
  color: #d1209d;
  border-radius: 4px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  transition: background 0.2s ease;
}

.crs-cart-btn {
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: inherit;
}
.crs-cart-btn svg,
.crs-cart-btn i,
.crs-cart-btn img {
  display: block;
}
.crs-cart-btn i {
  font-size: 20px;
}

.crs-cart-btn-badge {
  position: absolute;
  top: -6px;
  right: -8px;
  background: #e85d04;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.crs-cart-btn-badge.crs-hidden {
  display: none;
}

.crs-cart-overlay {
  position: fixed;
  inset: 0;
  z-index: 99998;
  visibility: hidden;
}
.crs-cart-overlay.crs-is-open {
  visibility: visible;
}
.crs-cart-overlay.crs-is-open .crs-cart-backdrop {
  opacity: 1;
}
.crs-cart-overlay.crs-is-open .crs-cart-panel {
  transform: translateX(0);
}

.crs-cart-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.35s ease;
  cursor: pointer;
}

.crs-cart-panel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: calc(100% - 20px);
  max-width: 355px;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: translateX(105%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
}

.crs-cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  flex-shrink: 0;
}
.crs-cart-header .crs-cart-title {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #0a0909;
  margin: 0;
}
.crs-cart-header .crs-cart-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.crs-cart-header .crs-cart-close svg {
  display: block;
}

.crs-discount-bar {
  background: #f4f7fa;
  border: 1px solid #15803d;
  border-radius: 8px;
  margin: 0 16px 12px;
  padding: 12px 16px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.crs-discount-bar .crs-discount-text {
  font-family: "Lato", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #374151;
  margin: 0;
  text-align: center;
}
.crs-discount-bar .crs-discount-text strong {
  font-weight: 700;
}
.crs-discount-bar .crs-orange-text {
  color: #fd5602;
  font-weight: 700;
}
.crs-discount-bar .crs-green-text {
  color: #15803d;
  font-weight: 700;
}
.crs-discount-bar .crs-progress-track {
  background: #d8d8d8;
  border-radius: 3px;
  height: 6px;
  width: 100%;
}
.crs-discount-bar .crs-progress-track .crs-progress-fill {
  background: #15803d;
  border-radius: 3px;
  height: 100%;
  transition: width 0.4s ease;
}
.crs-discount-bar .crs-free-shipping-row {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}
.crs-discount-bar .crs-free-shipping-row svg {
  flex-shrink: 0;
}
.crs-discount-bar .crs-free-shipping-row span {
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #374151;
}

.crs-cart-body {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.crs-cart-body::-webkit-scrollbar {
  width: 4px;
}
.crs-cart-body::-webkit-scrollbar-thumb {
  background: #d8d8d8;
  border-radius: 2px;
}

.crs-cart-items-wrapper {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.crs-cart-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.crs-cart-item .crs-item-img {
  width: 80px;
  height: 80px;
  -o-object-fit: cover;
     object-fit: cover;
  flex-shrink: 0;
  border-radius: 4px;
}
.crs-cart-item .crs-item-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.crs-cart-item .crs-item-top {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  justify-content: space-between;
}
.crs-cart-item .crs-item-title {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 22.4px;
  color: #1a325b;
  margin: 0;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.crs-cart-item .crs-item-remove {
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.crs-cart-item .crs-item-remove svg {
  display: block;
}
.crs-cart-item .crs-item-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.crs-cart-item .crs-item-price {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 23.8px;
  color: #000;
}
.crs-cart-item .crs-item-prices {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.crs-cart-item .crs-item-prices .crs-item-price-original {
  font-family: "Lato", sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: #525252;
  text-decoration: line-through;
}
.crs-cart-item .crs-item-prices .crs-item-price-sale {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 23.8px;
  color: #fd5602;
}

.crs-qty-stepper {
  display: flex;
  align-items: center;
  width: 96px;
  height: 36px;
  border: 1px solid #d8d8d8;
  border-radius: 2px;
  overflow: hidden;
}
.crs-qty-stepper .crs-qty-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  height: 100%;
  background: #f9f9f9;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
}
.crs-qty-stepper .crs-qty-btn:hover {
  background: #efefef;
}
.crs-qty-stepper .crs-qty-btn svg {
  display: block;
}
.crs-qty-stepper .crs-qty-value {
  flex: 1;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #3b3b3b;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.crs-empty-cart {
  padding: 40px 16px;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  color: #666;
  margin: 0;
}

.crs-bundle-section {
  background: #efefef;
  padding: 20px 16px;
}
.crs-bundle-section.crs-hidden {
  display: none;
}
.crs-bundle-section .crs-bundle-heading {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #0a0909;
  text-align: center;
  margin: 0 0 16px;
}
.crs-bundle-section .crs-bundle-heading .crs-orange-text {
  color: #fd5602;
}
.crs-bundle-section .crs-bundle-products-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.crs-bundle-product {
  background: #f9fbfe;
  border-radius: 8px;
  padding: 12px;
}
.crs-bundle-product .crs-bundle-top {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 8px;
}
.crs-bundle-product .crs-bundle-img {
  width: 62px;
  height: 62px;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
}
.crs-bundle-product .crs-bundle-product-title {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 22.4px;
  color: #1a325b;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
.crs-bundle-product .crs-bundle-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-left: 72px;
}
.crs-bundle-product .crs-bundle-prices {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.crs-bundle-product .crs-bundle-prices .crs-bundle-original-price {
  font-family: "Lato", sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #525252;
  text-decoration: line-through;
}
.crs-bundle-product .crs-bundle-prices .crs-bundle-sale-price {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 23.8px;
  color: #fd5602;
}
.crs-bundle-product .crs-add-to-bundle-btn {
  border: 1px solid #d1209d;
  background: transparent;
  border-radius: 4px;
  padding: 8px 24px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #d1209d;
  cursor: pointer;
  min-width: 108px;
  text-align: center;
  transition: background 0.2s ease, color 0.2s ease;
}
.crs-bundle-product .crs-add-to-bundle-btn:hover {
  background: #d1209d;
  color: #fff;
}
.crs-bundle-product .crs-add-to-bundle-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.crs-cart-footer {
  background: #fff;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.25);
  padding: 12px 16px 24px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.crs-cart-footer .crs-discount-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 12px;
  background: #f0fdf4;
  border: 1px solid #15803d;
  border-radius: 6px;
}
.crs-cart-footer .crs-discount-info.crs-hidden {
  display: none;
}
.crs-cart-footer .crs-discount-info .crs-discount-savings-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.crs-cart-footer .crs-discount-info .crs-discount-savings-label {
  font-family: "Lato", sans-serif;
  font-size: 12px !important;
  font-weight: 700 !important;
  color: #374151;
}
.crs-cart-footer .crs-discount-info .crs-discount-savings {
  font-family: "Lato", sans-serif;
  font-weight: 800 !important;
  font-size: 12px !important;
  color: #15803d;
}
.crs-cart-footer .crs-subtotal-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.crs-cart-footer .crs-subtotal-row .crs-subtotal-label {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 22.4px;
  color: #1a325b;
}
.crs-cart-footer .crs-subtotal-row .crs-subtotal-prices {
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.crs-cart-footer .crs-subtotal-row .crs-subtotal-original {
  font-family: "Lato", sans-serif;
  font-size: 14px;
  color: #525252;
  text-decoration: line-through;
}
.crs-cart-footer .crs-subtotal-row .crs-subtotal-original.crs-hidden {
  display: none;
  visibility: hidden;
}
.crs-cart-footer .crs-subtotal-row .crs-subtotal-amount {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 23.8px;
  color: #000;
}
.crs-cart-footer .crs-checkout-btn {
  display: block;
  width: 100%;
  background: #d1209d;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19.2px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;
  transition: opacity 0.2s ease;
}
.crs-cart-footer .crs-checkout-btn:hover {
  opacity: 0.9;
  color: #fff;
}

.grid-view-item .button-set {
  bottom: 0 !important;
}

.grid-view-item:hover .button-set {
  bottom: 0 !important;
}

#kaching-cart {
  display: none !important;
}/*# sourceMappingURL=style.css.map */`, x = (r, e, t, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: e,
      event_type: t,
      event_loc: n
    }), z(`Event: ${r} | ${e} | ${t} | ${n}`, "success");
  }, _ = (r) => new Promise((e) => {
    const t = document.querySelector(r);
    t && e(t);
    const n = new MutationObserver(() => {
      const s = document.querySelector(r);
      s && (e(s), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), q = ({ name: r, dev: e }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, z = (r, e = "info") => {
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
    console.log(`%c>>> ${r}`, `${t} font-size: 16px; font-weight: 600`);
  }, w = {
    close: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M6.3809 6.38163C6.54496 6.21777 6.76735 6.12573 6.99923 6.12573C7.23111 6.12573 7.4535 6.21777 7.61756 6.38163L21.6176 20.3816C21.7035 20.4617 21.7725 20.5583 21.8203 20.6657C21.8681 20.773 21.8938 20.8889 21.8959 21.0064C21.898 21.1238 21.8764 21.2405 21.8324 21.3495C21.7884 21.4584 21.7229 21.5574 21.6398 21.6405C21.5567 21.7236 21.4577 21.7891 21.3488 21.8331C21.2398 21.8771 21.1231 21.8987 21.0056 21.8967C20.8881 21.8946 20.7723 21.8689 20.6649 21.821C20.5576 21.7732 20.461 21.7043 20.3809 21.6183L6.3809 7.6183C6.21704 7.45423 6.125 7.23184 6.125 6.99996C6.125 6.76809 6.21704 6.54569 6.3809 6.38163Z" fill="black"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M21.618 6.38163C21.7819 6.54569 21.8739 6.76809 21.8739 6.99996C21.8739 7.23184 21.7819 7.45423 21.618 7.6183L7.61799 21.6183C7.45212 21.7729 7.23273 21.857 7.00605 21.853C6.77936 21.849 6.56308 21.7572 6.40277 21.5969C6.24245 21.4365 6.15062 21.2203 6.14662 20.9936C6.14262 20.7669 6.22676 20.5475 6.38132 20.3816L20.3813 6.38163C20.5454 6.21777 20.7678 6.12573 20.9997 6.12573C21.2315 6.12573 21.4539 6.21777 21.618 6.38163Z" fill="black"/>
		</svg>`,
    decrease: `<svg
			xmlns="http://www.w3.org/2000/svg"
			width="10"
			height="2"
			viewBox="0 0 10 2"
			fill="none"
		>
			<rect width="10" height="2" rx="1" fill="#3B3B3B" />
		</svg>`,
    increase: `<svg
			xmlns="http://www.w3.org/2000/svg"
			width="10"
			height="10"
			viewBox="0 0 10 10"
			fill="none"
		>
			<path d="M5 0v10M0 5h10" stroke="#3B3B3B" stroke-width="2" stroke-linecap="round" />
		</svg>`,
    trash: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M6.78571 4.3125V2.15625H13.2143V4.3125H6.78571ZM4.64286 4.3125V1.4375C4.64286 1.05625 4.79337 0.690618 5.06128 0.421034C5.32919 0.15145 5.69255 0 6.07143 0L13.9286 0C14.3075 0 14.6708 0.15145 14.9387 0.421034C15.2066 0.690618 15.3571 1.05625 15.3571 1.4375V4.3125H18.9286C19.2127 4.3125 19.4853 4.42609 19.6862 4.62828C19.8871 4.83046 20 5.10469 20 5.39062C20 5.67656 19.8871 5.95079 19.6862 6.15297C19.4853 6.35516 19.2127 6.46875 18.9286 6.46875H18.4071L17.3457 20.3449C17.2906 21.0672 16.9666 21.7419 16.4385 22.2342C15.9104 22.7264 15.217 23 14.4971 23H5.50286C4.78297 23 4.08963 22.7264 3.56149 22.2342C3.03336 21.7419 2.70936 21.0672 2.65429 20.3449L1.59286 6.46875H1.07143C0.787268 6.46875 0.514746 6.35516 0.313814 6.15297C0.112882 5.95079 0 5.67656 0 5.39062C0 5.10469 0.112882 4.83046 0.313814 4.62828C0.514746 4.42609 0.787268 4.3125 1.07143 4.3125H4.64286ZM3.74286 6.46875H16.2571L15.2086 20.1796C15.1949 20.3601 15.114 20.5288 14.9821 20.6519C14.8503 20.775 14.677 20.8435 14.4971 20.8438H5.50286C5.32295 20.8435 5.14975 20.775 5.01785 20.6519C4.88596 20.5288 4.8051 20.3601 4.79143 20.1796L3.74286 6.46875Z" fill="#8795A1"/>
		</svg>`,
    shipping: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
		<path d="M0 0V1.25H11.875V10.625H8.0275C7.74875 9.55062 6.7825 8.75 5.625 8.75C4.4675 8.75 3.50125 9.55062 3.2225 10.625H2.5V7.5H1.25V11.875H3.2225C3.50125 12.9494 4.4675 13.75 5.625 13.75C6.7825 13.75 7.74875 12.9494 8.0275 11.875H13.2225C13.5013 12.9494 14.4675 13.75 15.625 13.75C16.7825 13.75 17.7488 12.9494 18.0275 11.875H20V6.7775L19.9606 6.67938L18.7106 2.92938L18.575 2.5H13.125V0H0ZM0.625 2.5V3.75H6.25V2.5H0.625ZM13.125 3.75H17.6756L18.75 6.95312V10.625H18.0275C17.7488 9.55062 16.7825 8.75 15.625 8.75C14.4675 8.75 13.5013 9.55062 13.2225 10.625H13.125V3.75ZM1.25 5V6.25H5V5H1.25ZM5.625 10C6.32312 10 6.875 10.5519 6.875 11.25C6.875 11.9481 6.32312 12.5 5.625 12.5C4.92688 12.5 4.375 11.9481 4.375 11.25C4.375 10.5519 4.92688 10 5.625 10ZM15.625 10C16.3231 10 16.875 10.5519 16.875 11.25C16.875 11.9481 16.3231 12.5 15.625 12.5C14.9269 12.5 14.375 11.9481 14.375 11.25C14.375 10.5519 14.9269 10 15.625 10Z" fill="#374151"/>
		</svg>`,
    congrats: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<g clip-path="url(#clip0_27_5688)">
		<path d="M4.28436 8.43579L2.36572 13.5534V13.5538C2.83523 15.4295 3.86719 17.0876 5.32804 18.3383L7.73532 17.4356C5.1784 15.1455 3.91637 11.777 4.28436 8.43579Z" fill="#15803D"/>
		<path d="M1.71604 15.2858L0.24543 19.207C0.0696598 19.6753 0.527835 20.1386 0.999682 19.9613L4.10223 18.7981C3.06159 17.788 2.25433 16.5844 1.71604 15.2858Z" fill="#15803D"/>
		<path d="M8.39721 7.95849L6.21023 5.77151C4.43706 9.77135 5.64929 14.3431 8.99483 16.9634L11.3291 16.0881C9.27903 13.971 8.17023 11.016 8.39721 7.95849Z" fill="#15803D"/>
		<path d="M9.5415 9.10257C9.63134 11.5887 10.7141 13.9382 12.546 15.6315H12.5464L14.2572 14.9901C14.6568 14.8401 14.7662 14.3273 14.4658 14.0269L9.5415 9.10257Z" fill="#15803D"/>
		<path d="M13.821 10.9433C14.0498 11.1721 14.4208 11.1721 14.6496 10.9433C16.8539 8.73903 19.0002 9.42051 19.0216 9.42762C19.3286 9.52992 19.6604 9.36403 19.7627 9.05706C19.8651 8.75016 19.6992 8.41827 19.3922 8.31593C19.2766 8.27746 16.5317 7.404 13.8211 10.1147C13.5922 10.3435 13.5922 10.7145 13.821 10.9433Z" fill="#15803D"/>
		<path d="M10.092 6.38594C12.8028 3.67556 11.929 0.930414 11.8908 0.814797C11.7884 0.507784 11.4564 0.342169 11.1494 0.444506C10.8428 0.546844 10.6768 0.878465 10.7791 1.18548C10.7861 1.20696 11.4677 3.35331 9.26319 5.55748C9.03582 5.78485 9.03352 6.15557 9.26319 6.38594C9.49321 6.61593 9.86386 6.61413 10.092 6.38594Z" fill="#15803D"/>
		<path d="M11.3347 7.62894C11.1059 7.85775 11.1059 8.22871 11.3347 8.45752C11.5614 8.68427 11.9298 8.68724 12.1598 8.461C12.4625 8.31019 13.402 8.87586 13.9241 8.35394C14.4406 7.8374 13.8918 6.91703 14.0289 6.59447C14.3519 6.45706 15.2719 7.00609 15.7884 6.48963C16.305 5.9731 15.7562 5.05273 15.8932 4.73013C16.2167 4.59268 17.1362 5.14179 17.6527 4.62529C18.1693 4.10876 17.6205 3.18839 17.7576 2.86579C18.0791 2.72904 19.0009 3.2769 19.5171 2.76092C20.039 2.23895 19.4744 1.2978 19.6241 0.996686C19.8495 0.767638 19.8483 0.399262 19.6206 0.17158C19.3919 -0.0572341 19.0209 -0.0572341 18.7921 0.17158C18.3302 0.633388 18.4206 1.28534 18.5076 1.75145C18.0415 1.66446 17.3896 1.57411 16.9278 2.03588C16.4659 2.49769 16.5563 3.14964 16.6433 3.61575C16.1772 3.5288 15.5252 3.43837 15.0634 3.90022C14.6016 4.36203 14.692 5.01398 14.779 5.48009C14.3128 5.3931 13.6609 5.30271 13.1991 5.76452C12.7373 6.22633 12.8277 6.87828 12.9146 7.34439C12.4485 7.25748 11.7965 7.16713 11.3347 7.62894Z" fill="#15803D"/>
		<path d="M14.6496 2.65736C14.8784 2.42854 14.8784 2.05759 14.6496 1.82878C14.4208 1.59996 14.0498 1.59996 13.821 1.82878C13.5922 2.05759 13.5922 2.42854 13.821 2.65736C14.0498 2.88617 14.4208 2.88617 14.6496 2.65736Z" fill="#15803D"/>
		<path d="M18.3779 6.97194C18.7015 6.97194 18.9638 6.70963 18.9638 6.38604C18.9638 6.06246 18.7015 5.80014 18.3779 5.80014C18.0543 5.80014 17.792 6.06246 17.792 6.38604C17.792 6.70963 18.0543 6.97194 18.3779 6.97194Z" fill="#15803D"/>
		<path d="M17.1355 11.7719C16.9067 12.0007 16.9067 12.3717 17.1355 12.6005C17.3643 12.8293 17.7352 12.8293 17.9641 12.6005C18.1929 12.3717 18.1929 12.0007 17.9641 11.7719C17.7353 11.5431 17.3643 11.5431 17.1355 11.7719Z" fill="#15803D"/>
		<path d="M8.84931 3.48594C9.07813 3.25713 9.07813 2.88617 8.84931 2.65736C8.6205 2.42854 8.24955 2.42854 8.02073 2.65736C7.79192 2.88613 7.79192 3.25713 8.02073 3.48594C8.24955 3.71476 8.62054 3.71476 8.84931 3.48594Z" fill="#15803D"/>
		</g>
		<defs>
		<clipPath id="clip0_27_5688">
		<rect width="20" height="20" fill="white"/>
		</clipPath>
		</defs>
		</svg>`
  }, M = () => (
    /* HTML */
    `
  <button class="crs-cart-btn" aria-label="Open cart">
    <i class="ad ad-cart-l"></i>
    <span class="crs-cart-btn-badge crs-hidden">0</span>
  </button>
`
  ), j = () => (
    /* HTML */
    `
  <button class="crs-cart-btn" aria-label="Open cart">
    <svg class="zpa-icons__item-icon" width="28" height="28">
      <use href="#zp-icon-library:bag-shopping-solid"></use>
    </svg>
    <span class="crs-cart-btn-badge crs-hidden">0</span>
  </button>
`
  ), B = (r, e = !1) => {
    const t = `$${(r.price / 100).toFixed(2)}`, n = e ? Math.ceil(r.price * 0.8) : r.discounted_price !== r.price ? r.discounted_price : null, s = n !== null ? `<div class="crs-item-prices">
        <span class="crs-item-price-original">${t}</span>
        <span class="crs-item-price-sale">$${(n / 100).toFixed(2)}</span>
      </div>` : `<span class="crs-item-price">${t}</span>`;
    return (
      /* HTML */
      `
    <div class="crs-cart-item" data-key="${r.key}">
      <img class="crs-item-img" src="${r.image || ""}" alt="${r.title}" loading="lazy" />
      <div class="crs-item-info">
        <div class="crs-item-top">
          <a href="${r.url}" class="crs-item-title" target="_blank" rel="noopener">
            ${r.title}${r.variant_title && r.variant_title !== "Default Title" ? ` — ${r.variant_title}` : ""}
          </a>
          <button class="crs-item-remove" data-action="remove" aria-label="Remove item">${w.trash}</button>
        </div>
        <div class="crs-item-bottom">
          ${s}
          <div class="crs-qty-stepper">
            <button class="crs-qty-btn" data-action="decrease" aria-label="Decrease quantity">
              ${w.decrease}
            </button>
            <span class="crs-qty-value">${r.quantity}</span>
            <button class="crs-qty-btn" data-action="increase" aria-label="Increase quantity">
              ${w.increase}
            </button>
          </div>
        </div>
      </div>
    </div>
  `
    );
  }, T = (r) => (
    /* HTML */
    `
  <div class="crs-bundle-product" data-variant-id="${r.variantId}">
    <div class="crs-bundle-top">
      <img class="crs-bundle-img" src="${r.image}" alt="${r.title}" loading="lazy" />
      <a href="/products/${r.handle}" class="crs-bundle-product-title" target="_blank" rel="noopener"
        >${r.title}</a
      >
    </div>
    <div class="crs-bundle-bottom">
      <div class="crs-bundle-prices">
        <span class="crs-bundle-original-price">$${(r.originalPrice / 100).toFixed(2)}</span>
        <span class="crs-bundle-sale-price">$${(r.discountedPrice / 100).toFixed(2)}</span>
      </div>
      <button class="crs-add-to-bundle-btn" data-action="add-bundle" data-variant-id="${r.variantId}">ADD</button>
    </div>
  </div>
`
  ), E = (
    /* HTML */
    `
  <div class="crs-cart-overlay" id="crs-slide-cart" role="dialog" aria-modal="true" aria-label="Shopping cart">
    <div class="crs-cart-backdrop" aria-hidden="true"></div>

    <div class="crs-cart-panel">
      <!-- Header -->
      <div class="crs-cart-header">
        <h2 class="crs-cart-title">Your cart (0 items)</h2>
        <button class="crs-cart-close" aria-label="Close cart">${w.close}</button>
      </div>

      <!-- Discount Progress Bar -->
      <div class="crs-discount-bar">
        <p class="crs-discount-text">
          Add <strong>2 more products</strong> to get <span class="crs-orange-text">20% off</span>
        </p>
        <div class="crs-progress-track">
          <div class="crs-progress-fill" style="width: 0%"></div>
        </div>
        <div class="crs-free-shipping-row">
          ${w.shipping}
          <span>Free shipping</span>
        </div>
      </div>

      <!-- Scrollable Body -->
      <div class="crs-cart-body">
        <!-- Cart Items -->
        <div class="crs-cart-items-wrapper"></div>

        <!-- Bundle Upsell Section -->
        <div class="crs-bundle-section crs-hidden">
          <p class="crs-bundle-heading">Complete your bundle &amp; <span class="crs-orange-text">save 20%</span></p>
          <div class="crs-bundle-products-list"></div>
        </div>
      </div>

      <!-- Footer -->
      <div class="crs-cart-footer">
        <!-- Discount Info -->
        <div class="crs-discount-info crs-hidden">
          <div class="crs-discount-savings-row">
            <span class="crs-discount-savings-label">Savings:</span>
            <span class="crs-discount-savings"></span>
          </div>
        </div>
        <div class="crs-subtotal-row">
          <span class="crs-subtotal-label">Subtotal:</span>
          <div class="crs-subtotal-prices">
            <span class="crs-subtotal-original crs-hidden">$0.00</span>
            <span class="crs-subtotal-amount">$0.00</span>
          </div>
        </div>
        <a class="crs-checkout-btn" href="/checkout">PROCEED TO CHECKOUT</a>
      </div>
    </div>
  </div>
`
  ), C = 2, O = "BUNDLE20", R = {
    // ── Human ──────────────────────────────────────────────────────────────────
    // Cluster 1: Nail Fungus Care
    "nail-fungus-treatment-antifungal-serum": {
      cartHeader: 'Restore your nails & <span style="color:#FD5602">Save 20%</span>',
      shows: ["toenail-fungus-damaged-restorative-solution", "athletes-foot-cream"]
    },
    "toenail-fungus-damaged-restorative-solution": {
      cartHeader: 'Restore your nails & <span style="color:#FD5602">Save 20%</span>',
      shows: ["nail-fungus-treatment-antifungal-serum", "athletes-foot-cream"]
    },
    "athletes-foot-cream": {
      cartHeader: 'Restore your nails & <span style="color:#FD5602">Save 20%</span>',
      shows: ["nail-fungus-treatment-antifungal-serum", "toenail-fungus-damaged-restorative-solution"]
    },
    // Cluster 2: Body Fungus Relief
    "ringworm-treatment": {
      cartHeader: 'Stop skin fungus fast & <span style="color:#FD5602">Save 20%</span>',
      shows: ["fungal-acne-treatment", "turmeric-soap", "yeast-infection-cream", "shoe-deodorizer"]
    },
    "fungal-acne-treatment": {
      cartHeader: 'Stop skin fungus fast & <span style="color:#FD5602">Save 20%</span>',
      shows: ["ringworm-treatment", "turmeric-soap", "yeast-infection-cream", "shoe-deodorizer"]
    },
    "yeast-infection-cream": {
      cartHeader: 'Stop skin fungus fast & <span style="color:#FD5602">Save 20%</span>',
      shows: ["ringworm-treatment", "fungal-acne-treatment", "turmeric-soap", "shoe-deodorizer"]
    },
    "shoe-deodorizer": {
      cartHeader: 'Stay fresh & <span style="color:#FD5602">Save 20%</span>',
      shows: ["ringworm-treatment", "fungal-acne-treatment", "turmeric-soap", "yeast-infection-cream"]
    },
    // Cluster 3: Scalp Therapy
    "scalp-treatment": {
      cartHeader: 'Heal your scalp & <span style="color:#FD5602">Save 20%</span>',
      shows: ["itchy-scalp-psoriasis-treatment", "anti-dandruff-shampoo"]
    },
    "itchy-scalp-psoriasis-treatment": {
      cartHeader: 'Heal your scalp & <span style="color:#FD5602">Save 20%</span>',
      shows: ["scalp-treatment", "anti-dandruff-shampoo"]
    },
    "anti-dandruff-shampoo": {
      cartHeader: 'Heal your scalp & <span style="color:#FD5602">Save 20%</span>',
      shows: ["scalp-treatment", "itchy-scalp-psoriasis-treatment"]
    },
    // Cluster 4: Hair Repair & Growth
    "alopecia-treatment-symptoms": {
      cartHeader: 'Grow thicker hair & <span style="color:#FD5602">Save 20%</span>',
      shows: ["organic-soapnut-amla-shampoo", "neem-oil-for-hair"]
    },
    "organic-soapnut-amla-shampoo": {
      cartHeader: 'Grow thicker hair & <span style="color:#FD5602">Save 20%</span>',
      shows: ["alopecia-treatment-symptoms", "neem-oil-for-hair"]
    },
    "neem-oil-for-hair": {
      cartHeader: 'Grow thicker hair & <span style="color:#FD5602">Save 20%</span>',
      shows: ["alopecia-treatment-symptoms", "organic-soapnut-amla-shampoo"]
    },
    // Cluster 5: Female Balance
    "vglow-yeast-infection-treatment": {
      cartHeader: 'Restore your balance & <span style="color:#FD5602">Save 20%</span>',
      shows: ["herbs-for-vaginal-dryness", "vaginal-dryness-natural-remedies"]
    },
    "herbs-for-vaginal-dryness": {
      cartHeader: 'Restore your balance & <span style="color:#FD5602">Save 20%</span>',
      shows: ["vglow-yeast-infection-treatment", "vaginal-dryness-natural-remedies"]
    },
    "vaginal-dryness-natural-remedies": {
      cartHeader: 'Restore your balance & <span style="color:#FD5602">Save 20%</span>',
      shows: ["vglow-yeast-infection-treatment", "herbs-for-vaginal-dryness"]
    },
    // Cluster 6: Men's Freshness
    "ball-deodorant": {
      cartHeader: 'Stay fresh & <span style="color:#FD5602">Save 20%</span>',
      shows: ["jock-itch", "balanitis-treatment-cream"]
    },
    "jock-itch": {
      cartHeader: 'Stay fresh & <span style="color:#FD5602">Save 20%</span>',
      shows: ["ball-deodorant", "balanitis-treatment-cream"]
    },
    "balanitis-treatment-cream": {
      cartHeader: 'Stay fresh & <span style="color:#FD5602">Save 20%</span>',
      shows: ["ball-deodorant", "jock-itch"]
    },
    // Cluster 7: Anti-Aging Kit
    // Note: 'turmeric-soap' is also in cluster 2, but triggers Anti-Aging bundle here
    "organic-bakuchiol-booster-serum": {
      cartHeader: 'Renew your skin & <span style="color:#FD5602">Save 20%</span>',
      shows: ["anti-aging-cream", "turmeric-soap"]
    },
    "anti-aging-cream": {
      cartHeader: 'Renew your skin & <span style="color:#FD5602">Save 20%</span>',
      shows: ["organic-bakuchiol-booster-serum", "turmeric-soap"]
    },
    "turmeric-soap": {
      cartHeader: 'Renew your skin & <span style="color:#FD5602">Save 20%</span>',
      shows: ["organic-bakuchiol-booster-serum", "anti-aging-cream"]
    },
    // Cluster 8: SOS Relief
    "cold-sore-medicine": {
      cartHeader: 'Relieve pain fast & <span style="color:#FD5602">Save 20%</span>',
      shows: ["flea-bites-treatment", "hemorrhoid-cream", "angular-cheilitis-medication", "tea-tree-oil-for-lice"]
    },
    "flea-bites-treatment": {
      cartHeader: 'Relieve pain fast & <span style="color:#FD5602">Save 20%</span>',
      shows: ["cold-sore-medicine", "hemorrhoid-cream", "angular-cheilitis-medication", "tea-tree-oil-for-lice"]
    },
    "hemorrhoid-cream": {
      cartHeader: 'Relieve pain fast & <span style="color:#FD5602">Save 20%</span>',
      shows: ["cold-sore-medicine", "flea-bites-treatment", "angular-cheilitis-medication", "tea-tree-oil-for-lice"]
    },
    "angular-cheilitis-medication": {
      cartHeader: 'Renew your skin & <span style="color:#FD5602">Save 20%</span>',
      shows: ["cold-sore-medicine", "flea-bites-treatment", "hemorrhoid-cream", "tea-tree-oil-for-lice"]
    },
    "tea-tree-oil-for-lice": {
      cartHeader: 'Heal your scalp & <span style="color:#FD5602">Save 20%</span>',
      shows: ["cold-sore-medicine", "flea-bites-treatment", "hemorrhoid-cream", "angular-cheilitis-medication"]
    },
    // Cluster 9: Intensive Itch Relief
    "scabies-itch-relief-demodex-mites-serum": {
      cartHeader: 'Relieve itching fast & <span style="color:#FD5602">Save 20%</span>',
      shows: [
        "dry-itchy-scalp-shampoo",
        "folliculitis-cream",
        "psoriasis-seborrheic-dermatitis-cream",
        "genital-herpes",
        "eczema-treatment-cream",
        "jock-itch-cream"
      ]
    },
    "dry-itchy-scalp-shampoo": {
      cartHeader: 'Relieve itching fast & <span style="color:#FD5602">Save 20%</span>',
      shows: [
        "scabies-itch-relief-demodex-mites-serum",
        "folliculitis-cream",
        "psoriasis-seborrheic-dermatitis-cream",
        "genital-herpes",
        "eczema-treatment-cream",
        "jock-itch-cream"
      ]
    },
    "folliculitis-cream": {
      cartHeader: 'Relieve itching fast & <span style="color:#FD5602">Save 20%</span>',
      shows: [
        "scabies-itch-relief-demodex-mites-serum",
        "dry-itchy-scalp-shampoo",
        "psoriasis-seborrheic-dermatitis-cream",
        "genital-herpes",
        "eczema-treatment-cream",
        "jock-itch-cream"
      ]
    },
    "psoriasis-seborrheic-dermatitis-cream": {
      cartHeader: 'Relieve itching fast & <span style="color:#FD5602">Save 20%</span>',
      shows: [
        "scabies-itch-relief-demodex-mites-serum",
        "dry-itchy-scalp-shampoo",
        "folliculitis-cream",
        "genital-herpes",
        "eczema-treatment-cream",
        "jock-itch-cream"
      ]
    },
    "genital-herpes": {
      cartHeader: 'Relieve itching fast & <span style="color:#FD5602">Save 20%</span>',
      shows: [
        "scabies-itch-relief-demodex-mites-serum",
        "dry-itchy-scalp-shampoo",
        "folliculitis-cream",
        "psoriasis-seborrheic-dermatitis-cream",
        "eczema-treatment-cream",
        "jock-itch-cream"
      ]
    },
    "eczema-treatment-cream": {
      cartHeader: 'Heal your scalp & <span style="color:#FD5602">Save 20%</span>',
      shows: [
        "scabies-itch-relief-demodex-mites-serum",
        "dry-itchy-scalp-shampoo",
        "folliculitis-cream",
        "psoriasis-seborrheic-dermatitis-cream",
        "genital-herpes",
        "jock-itch-cream"
      ]
    },
    "jock-itch-cream": {
      cartHeader: 'Stop skin fungus fast & <span style="color:#FD5602">Save 20%</span>',
      shows: [
        "scabies-itch-relief-demodex-mites-serum",
        "dry-itchy-scalp-shampoo",
        "folliculitis-cream",
        "psoriasis-seborrheic-dermatitis-cream",
        "genital-herpes",
        "eczema-treatment-cream"
      ]
    },
    // ── Pet ────────────────────────────────────────────────────────────────────
    // Cluster 1: Ear Health & Care
    // Dog products → show same-cluster items where Target Pet contains "Dog"
    "dog-cat-bacterial-fungal-ear-infection": {
      cartHeader: `Get your pet's ears healthy & <span style="color:#FD5602">Save 20%</span>`,
      shows: ["ear-mite-treatment-dogs-cats", "natural-dog-ear-cleanser-infection"]
    },
    // Dog/Cat product → fixed cross-sell pair (shampoo + cat itch spray)
    "ear-mite-treatment-dogs-cats": {
      cartHeader: `Get your pet's ears healthy & <span style="color:#FD5602">Save 20%</span>`,
      shows: ["petglow-shampoo-for-dogs-and-cats", "cat-dandruff-miliary-dermatitis"]
    },
    "natural-dog-ear-cleanser-infection": {
      cartHeader: `Get your pet's ears healthy & <span style="color:#FD5602">Save 20%</span>`,
      shows: ["dog-cat-bacterial-fungal-ear-infection", "ear-mite-treatment-dogs-cats"]
    },
    // Cluster 2: Flea & Tick Protection
    // All Dog/Cat products → show same-cluster Dog/Cat items
    "natural-flea-treatment-for-cats": {
      cartHeader: 'Get your pet full protection & <span style="color:#FD5602">Save 20%</span>',
      shows: ["flea-shampoo-for-dogs-and-cats", "hot-spot-spray-for-dogs"]
    },
    "flea-shampoo-for-dogs-and-cats": {
      cartHeader: 'Get your pet full protection & <span style="color:#FD5602">Save 20%</span>',
      shows: ["natural-flea-treatment-for-cats", "hot-spot-spray-for-dogs"]
    },
    "hot-spot-spray-for-dogs": {
      cartHeader: 'Get your pet full protection & <span style="color:#FD5602">Save 20%</span>',
      shows: ["natural-flea-treatment-for-cats", "flea-shampoo-for-dogs-and-cats"]
    },
    // Cluster 3: Skin, Coat & Itch Relief
    // Dog/Cat products → show same-cluster Dog/Cat items (Cat-only product excluded)
    "petglow-shampoo-for-dogs-and-cats": {
      cartHeader: 'Get your pet a soothe & shiny coat & <span style="color:#FD5602">Save 20%</span>',
      shows: ["dog-itch-relief"]
    },
    "dog-itch-relief": {
      cartHeader: 'Get your pet a soothe & shiny coat & <span style="color:#FD5602">Save 20%</span>',
      shows: ["petglow-shampoo-for-dogs-and-cats"]
    },
    // Dog product → show same-cluster items where Target Pet contains "Dog"
    "natural-dog-shampoo": {
      cartHeader: 'Get your pet a soothe & shiny coat & <span style="color:#FD5602">Save 20%</span>',
      shows: ["petglow-shampoo-for-dogs-and-cats", "dog-itch-relief"]
    },
    // Cat product → show same-cluster items where Target Pet contains "Dog" (cross-sell Dog/Cat products)
    "cat-dandruff-miliary-dermatitis": {
      cartHeader: 'Get your pet a soothe & shiny coat & <span style="color:#FD5602">Save 20%</span>',
      shows: ["petglow-shampoo-for-dogs-and-cats", "dog-itch-relief", "natural-dog-shampoo"]
    },
    // Cluster 4: Fresh Home & Hygiene
    // Dog products → show same-cluster Dog items only
    "pet-odor-eliminator": {
      cartHeader: 'Get your home smells fresh & <span style="color:#FD5602">Save 20%</span>',
      shows: ["anal-gland-medicine"]
    },
    // Cat product → fixed cross-sell pair
    "cat-pee-odor-and-stain-remover": {
      cartHeader: 'Get your home smells fresh & <span style="color:#FD5602">Save 20%</span>',
      shows: ["petglow-shampoo-for-dogs-and-cats", "cat-dandruff-miliary-dermatitis"]
    },
    "anal-gland-medicine": {
      cartHeader: 'Get your home smells fresh & <span style="color:#FD5602">Save 20%</span>',
      shows: ["pet-odor-eliminator"]
    },
    // Cluster 5: Senior Pet Care — fixed cross-sell pair
    "joint-supplement-for-dogs": {
      cartHeader: 'Get your senior pet full support & <span style="color:#FD5602">Save 20%</span>',
      shows: ["petglow-shampoo-for-dogs-and-cats", "cat-dandruff-miliary-dermatitis"]
    },
    // Bonus: Upsell — fixed cross-sell pair
    "himalayan-dog-chew": {
      cartHeader: 'Reward your brave pet & <span style="color:#FD5602">Save 20%</span>',
      shows: ["petglow-shampoo-for-dogs-and-cats", "cat-dandruff-miliary-dermatitis"]
    }
  };
  q({ name: "SlideIn Cart", dev: "YK" });
  class A {
    constructor() {
      this.overlay = null, this.cart = null, this.init();
    }
    async init() {
      await _("body"), document.head.insertAdjacentHTML("beforeend", `<style class="crs-slide-cart-style">${$}</style>`), document.body.insertAdjacentHTML("beforeend", E), this.overlay = document.getElementById("crs-slide-cart"), await this.injectCartButton(), this.bindClose(), this.bindCartItemActions(), this.blockKachingBodyLock(), this.injectAddToCartOverlays(), this.cart = await this.fetchCart(), this.updateBadge(this.cart.item_count);
    }
    blockKachingBodyLock() {
      const e = "kaching-body__cart-open", t = (s) => s.classList.contains(e) && s.classList.remove(e), n = new MutationObserver(() => {
        t(document.body), t(document.documentElement);
      });
      n.observe(document.body, { attributes: !0, attributeFilter: ["class"] }), n.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] });
    }
    async fetchCart() {
      return (await fetch("/cart.js")).json();
    }
    updateBadge(e) {
      const t = document.querySelector(".crs-cart-btn-badge");
      t && (t.textContent = String(e), t.classList.toggle("crs-hidden", e === 0));
    }
    async updateCart(e, t) {
      const n = await fetch("/cart/change.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: e, quantity: t })
      });
      this.cart = await n.json(), this.updateBadge(this.cart.item_count), this.renderCart();
    }
    renderCart() {
      var f, m, g, b, y, k, S;
      if (!this.cart) return;
      const e = (f = this.overlay) == null ? void 0 : f.querySelector(".crs-cart-items-wrapper"), t = (m = this.overlay) == null ? void 0 : m.querySelector(".crs-cart-title"), n = (g = this.overlay) == null ? void 0 : g.querySelector(".crs-subtotal-amount");
      t && (t.textContent = `Your cart (${this.cart.item_count} ${this.cart.item_count === 1 ? "item" : "items"})`);
      const s = this.cart.item_count >= C, a = this.cart.original_total_price, o = a > 0 ? Math.round((a - this.cart.total_price) / a * 100) : 0, i = s && o < 20, l = i ? this.cart.items.reduce((v, H) => v + Math.ceil(H.price * 0.8) * H.quantity, 0) : this.cart.total_price !== a ? this.cart.total_price : a, p = l !== a, c = (b = this.overlay) == null ? void 0 : b.querySelector(".crs-subtotal-original");
      n && (n.textContent = `$${(l / 100).toFixed(2)}`), c && (c.textContent = `$${(a / 100).toFixed(2)}`, c.classList.toggle("crs-hidden", !p));
      const d = (y = this.overlay) == null ? void 0 : y.querySelector(".crs-discount-info"), u = (k = this.overlay) == null ? void 0 : k.querySelector(".crs-discount-savings");
      if (d && d.classList.toggle("crs-hidden", !p), p && u) {
        const v = Math.round((1 - l / a) * 100);
        u.textContent = `-${v}%`;
      }
      e && (e.innerHTML = this.cart.items.map((v) => B(v, i)).join(""));
      const h = (S = this.overlay) == null ? void 0 : S.querySelector(".crs-checkout-btn");
      h && (h.href = s ? `/checkout?discount=${O}` : "/checkout"), this.updateDiscountBar(this.cart.item_count), this.updateBundleSection(this.cart.item_count);
    }
    updateDiscountBar(e) {
      var a, o;
      const t = (a = this.overlay) == null ? void 0 : a.querySelector(".crs-progress-fill"), n = (o = this.overlay) == null ? void 0 : o.querySelector(".crs-discount-text"), s = Math.min(100, Math.round(e / C * 100));
      if (t && (t.style.width = `${s}%`), n)
        if (e >= C)
          n.innerHTML = `${w.congrats} Great! Your <span class="crs-orange-text">20%</span> discount is now applied`;
        else {
          const i = C - e;
          n.innerHTML = `Add <strong>${i} more ${i === 1 ? "product" : "products"}</strong> to get <span class="crs-orange-text">20% off</span>`;
        }
    }
    async updateBundleSection(e) {
      var d, u, h, f, m, g, b;
      const t = (d = this.overlay) == null ? void 0 : d.querySelector(".crs-bundle-section"), n = (u = this.overlay) == null ? void 0 : u.querySelector(".crs-bundle-products-list"), s = (h = this.overlay) == null ? void 0 : h.querySelector(".crs-bundle-heading");
      if (!t || !n) return;
      if (e === 0 || e >= C) {
        t.classList.add("crs-hidden");
        return;
      }
      const a = this.cart.items[0], o = (a == null ? void 0 : a.handle) ?? ((b = (g = (m = (f = a == null ? void 0 : a.url) == null ? void 0 : f.split("/products/")) == null ? void 0 : m[1]) == null ? void 0 : g.split("?")) == null ? void 0 : b[0]) ?? "", i = R[o];
      if (!i) {
        t.classList.add("crs-hidden");
        return;
      }
      s && (s.innerHTML = i.cartHeader);
      const l = this.cart.items.map((y) => y.variant_id), c = (await Promise.all(
        i.shows.map(async (y) => {
          var k, S, v;
          try {
            const H = await fetch(`/products/${y}.js`);
            if (!H.ok) return null;
            const D = await H.json(), L = (k = D.variants) == null ? void 0 : k[0];
            if (!L || l.includes(L.id)) return null;
            const F = L.price;
            return {
              variantId: L.id,
              title: D.title,
              image: D.featured_image ?? ((v = (S = D.images) == null ? void 0 : S[0]) == null ? void 0 : v.src) ?? "",
              handle: y,
              originalPrice: F,
              discountedPrice: Math.ceil(F * 0.8)
            };
          } catch {
            return null;
          }
        })
      )).filter((y) => y !== null);
      if (c.length === 0) {
        t.classList.add("crs-hidden");
        return;
      }
      n.innerHTML = c.map(T).join(""), t.classList.remove("crs-hidden");
    }
    bindCartItemActions() {
      var e;
      (e = this.overlay) == null || e.addEventListener("click", (t) => {
        var c, d, u, h, f;
        const n = t.target.closest("[data-action]");
        if (!n) return;
        const s = n.dataset.action;
        if (s === "add-bundle") {
          const m = n.dataset.variantId;
          if (m) {
            const g = ((u = (d = (c = n.closest(".crs-bundle-product")) == null ? void 0 : c.querySelector(".crs-bundle-product-title")) == null ? void 0 : d.textContent) == null ? void 0 : u.trim()) || m;
            x("slide_cart_bundle_add", `Bundle add: ${g}`, "click", "Cart Bundle"), this.addToCart(Number(m));
          }
          return;
        }
        const a = n.closest("[data-key]");
        if (!a) return;
        const o = a.dataset.key, i = a.querySelector(".crs-qty-value"), l = parseInt((i == null ? void 0 : i.textContent) || "1", 10), p = ((f = (h = a.querySelector(".crs-item-title")) == null ? void 0 : h.textContent) == null ? void 0 : f.trim()) || o;
        s === "remove" ? (x("slide_cart_item_remove", `Remove: ${p}`, "click", "Cart"), this.updateCart(o, 0)) : s === "decrease" ? (x("slide_cart_item_decrease", `Qty decrease: ${p}`, "click", "Cart"), this.updateCart(o, Math.max(0, l - 1))) : s === "increase" && (x("slide_cart_item_increase", `Qty increase: ${p}`, "click", "Cart"), this.updateCart(o, l + 1));
      });
    }
    async addToCart(e, t = 1) {
      (await fetch("/cart/add.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: e, quantity: t })
      })).ok && (this.cart = await this.fetchCart(), this.updateBadge(this.cart.item_count), this.renderCart());
    }
    open() {
      var e;
      x("slide_cart_open", "Cart opened", "view", "Slide Cart"), this.renderCart(), (e = this.overlay) == null || e.classList.add("crs-is-open");
    }
    close() {
      var e;
      (e = this.overlay) == null || e.classList.remove("crs-is-open");
    }
    async injectAddToCartOverlays() {
      const e = (t) => new Promise((n) => {
        if (document.querySelector(t)) {
          n(!0);
          return;
        }
        const s = setTimeout(() => {
          a.disconnect(), n(!1);
        }, 5e3), a = new MutationObserver(() => {
          document.querySelector(t) && (clearTimeout(s), a.disconnect(), n(!0));
        });
        a.observe(document.documentElement, { childList: !0, subtree: !0 });
      });
      e("a.btn.add-to-cart").then((t) => {
        t && document.querySelectorAll("a.btn.add-to-cart").forEach((n) => {
          const s = () => Number(n.id);
          this.attachOverlay(n, s, !1);
        });
      }), e("button.zpa-add-to-cart-btn").then((t) => {
        t && document.querySelectorAll("button.zpa-add-to-cart-btn").forEach((n) => {
          var l, p;
          const s = n.querySelector(".zpa-btn-custom__caption"), a = ((l = s == null ? void 0 : s.textContent) == null ? void 0 : l.trim()) || ((p = n.textContent) == null ? void 0 : p.trim()) || "";
          s && (s.textContent = "ADD TO CART");
          const o = () => {
            var f, m, g;
            const c = n.closest("form"), d = c == null ? void 0 : c.querySelector('select[name="id"], input[name="id"]');
            if (d && Number(d.value)) return Number(d.value);
            const u = n.closest("section") ?? ((f = n.closest("[data-id]")) == null ? void 0 : f.closest("div")), h = u == null ? void 0 : u.querySelector("script[data-zp-product-init]");
            if (h)
              try {
                const b = JSON.parse(h.textContent || "{}");
                return b.selected_variant_id ?? ((g = (m = b.variants) == null ? void 0 : m[0]) == null ? void 0 : g.id) ?? 0;
              } catch {
                return 0;
              }
            return 0;
          }, i = () => {
            const c = n.closest("section") ?? n.closest("[data-product-wrapper-id]"), d = (c == null ? void 0 : c.querySelector(".zpa-quantity-field")) ?? document.querySelector(".zpa-quantity-field");
            return Math.max(1, parseInt((d == null ? void 0 : d.value) || "1", 10) || 1);
          };
          this.attachOverlay(n, o, !0, i, a);
        });
      }), e('button[data-pf-type="ProductATC"]').then((t) => {
        if (!t) return;
        const n = async (o) => {
          var d, u, h, f, m, g;
          if (o.closest(".crs-atc-btn-wrapper")) return;
          const i = ((d = o.closest("[data-product-id]")) == null ? void 0 : d.querySelector('a[href*="/products/"]')) ?? ((h = (u = o.closest("form")) == null ? void 0 : u.parentElement) == null ? void 0 : h.querySelector('a[href*="/products/"]'));
          if (!i) return;
          const l = (f = i.pathname.split("/products/")[1]) == null ? void 0 : f.split("?")[0];
          if (!l) return;
          const p = await fetch(`/products/${l}.js`).then((b) => b.json()), c = (g = (m = p == null ? void 0 : p.variants) == null ? void 0 : m[0]) == null ? void 0 : g.id;
          c && this.attachOverlay(o, () => c, !0);
        }, s = () => document.querySelectorAll('button[data-pf-type="ProductATC"]').forEach((o) => void n(o));
        s(), new MutationObserver(s).observe(document.documentElement, { childList: !0, subtree: !0 });
      });
    }
    attachOverlay(e, t, n = !1, s, a) {
      let o;
      if (n) {
        const l = document.createElement("div");
        l.className = "crs-atc-btn-wrapper", e.parentElement.insertBefore(l, e), l.appendChild(e), o = l;
      } else
        o = e.parentElement, getComputedStyle(o).position === "static" && (o.style.position = "relative");
      const i = document.createElement("div");
      i.className = "crs-atc-overlay", o.appendChild(i), i.addEventListener("click", async (l) => {
        var c, d;
        l.stopPropagation(), l.preventDefault();
        const p = t();
        if (!(!p || i.classList.contains("crs-atc-loading"))) {
          i.classList.add("crs-atc-loading"), e.classList.add("crs-atc-btn-loading");
          try {
            const u = s ? s() : 1;
            await this.addToCart(p, u);
            const h = ((d = (c = this.cart) == null ? void 0 : c.items.find((f) => f.variant_id === p)) == null ? void 0 : d.title) || String(p);
            x("slide_cart_add", `Add to cart: ${h}`, "click", "ATC Button"), this.open();
          } finally {
            i.classList.remove("crs-atc-loading"), e.classList.remove("crs-atc-btn-loading");
          }
        }
      });
    }
    async injectCartButton() {
      const e = await _(
        'a.hdicon[href="/cart"], a[data-icon-destination-type="cart_dest"]'
      );
      e.style.display = "none";
      const t = e.hasAttribute("data-icon-destination-type");
      e.insertAdjacentHTML("afterend", t ? j() : M()), e.nextElementSibling.addEventListener("click", () => this.open());
    }
    bindClose() {
      var e, t, n, s, a, o;
      (t = (e = this.overlay) == null ? void 0 : e.querySelector(".crs-cart-close")) == null || t.addEventListener("click", () => this.close()), (s = (n = this.overlay) == null ? void 0 : n.querySelector(".crs-cart-backdrop")) == null || s.addEventListener("click", () => this.close()), (o = (a = this.overlay) == null ? void 0 : a.querySelector(".crs-checkout-btn")) == null || o.addEventListener("click", () => {
        x("slide_cart_checkout", "Checkout clicked", "click", "Slide Cart");
      });
    }
  }
  new A();
})();
//# sourceMappingURL=index.js.map
