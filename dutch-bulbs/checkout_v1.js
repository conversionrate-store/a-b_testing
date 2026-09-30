(function(){var e=(e,t,n,r=``)=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r}),`${e}${t}${n}${r}`},t=e=>new Promise(t=>{let n=document.querySelector(e);if(n){t(n);return}let r=new MutationObserver(()=>{let n=document.querySelector(e);n&&(t(n),r.disconnect())});r.observe(document.documentElement,{childList:!0,subtree:!0})}),n=({name:e,dev:t})=>{},r=class e{constructor(t){this.elements=t instanceof e?t.elements:typeof t==`string`?Array.from(document.querySelectorAll(t)):t instanceof Element?[t]:Array.isArray(t)?t:Array.from(t)}on(e,t,n){return typeof t==`function`&&(n=t,t=``),this.elements.forEach(r=>{r.addEventListener(e,function(e){if(t!==``){let r=e.target?.closest(t);r&&n?.call(r,e)}else n?.call(r,e)})}),this}addClass(e){return this.elements.forEach(function(t){t.classList.add(e)}),this}removeClass(e){return this.elements.forEach(function(t){t.classList.remove(e)}),this}toggleClass(e){return this.elements.forEach(function(t){t.classList.toggle(e)}),this}each(t){for(let n of this.elements)t(new e(n),this.elements.indexOf(n));return this}style(e,t){return this.elements.forEach(function(n){n.style.setProperty(e,t)}),this}find(t){let n=this.elements.map(e=>Array.from(e.querySelectorAll(t)));return new e(n.flat())}attr(e,t){return t===void 0?this.elements[0]?.getAttribute(e)??null:(this.elements.forEach(function(n){n.setAttribute(e,t)}),this)}text(e){return e===void 0?this.elements[0]?.textContent||``:(this.elements.forEach(function(t){t.textContent=e}),this)}html(e){return e===void 0?this.elements[0]?.innerHTML||``:(this.elements.forEach(function(t){t.innerHTML=e}),this)}},i=e=>new r(e),a=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},o=(e,t)=>{let n=document.querySelector(e);if(!n)return;let r=n.getBoundingClientRect().top-(t||100);window.scrollBy({top:r,behavior:`smooth`})},ee=`html.crs-osc {
  --crs-ink: #171c18;
  --crs-ink-2: #4a534b;
  --crs-muted: #737b74;
  --crs-border: #c7cfc5;
  --crs-line: #e4e8e2;
  --crs-side: #f7f8f5;
  --crs-chip: #eff2ed;
  --crs-green: #1f7a40;
  --crs-green-dark: #17602f;
  --crs-brand: #c81e55;
  --crs-font: 'Atkinson Hyperlegible', Montserrat, 'Helvetica Neue', Arial, sans-serif;
  --crs-font-alt: 'Plus Jakarta Sans', Montserrat, 'Helvetica Neue', Arial, sans-serif;
}

/* ---------- hide what the design does not have ---------- */
html.crs-osc #step_cart,
html.crs-osc #checkoutSteps .action.action-edit,
html.crs-osc #co-shipping-method-form .actions-toolbar,
html.crs-osc .esputnik-widget.es-recom-container,
html.crs-osc .checkout-etrusted-widget,
html.crs-osc .payment-group > .step-title,
html.crs-osc #co-payment-form > .legend,
html.crs-osc #co-payment-form > br,
html.crs-osc .opc-sidebar .modal-header,
html.crs-osc .opc-estimated-wrapper,
html.crs-osc .payment-trustpilot,
html.crs-osc [id^="trustbadge-container-"],
html.crs-osc #trustbadge-iframe,
html.crs-osc .osc-free-shipping,
html.crs-osc .shipping-policy-block,
html.crs-osc .field-tooltip,
html.crs-osc #co-shipping-form .field[name="shippingAddress.company"],
html.crs-osc #checkout-step-shipping .billing-address-details,
html.crs-osc .table-checkout-shipping-method thead,
html.crs-osc .table-totals .totals-tax,
html.crs-osc .table-totals .grand.totals.excl,
html.crs-osc .table-totals .totals.shipping .value,
html.crs-osc .mollie-payment-icon,
html.crs-osc .payment-method-note,
html.crs-osc #co-payment-form .payment-method-helper,
html.crs-osc #co-payment-form .checkout-billing-address,
html.crs-osc .table-checkout-shipping-method .sc-delivery-method-description {
  display: none !important;
}
html.crs-osc {
}

/* ---------- page frame ---------- */
html.crs-osc .page-wrapper {
  background: #fff !important;
}
html.crs-osc .page-header {
  border-bottom: 1px solid var(--crs-line);
}
html.crs-osc .page-main {
  max-width: 1180px !important;
  margin: 0 auto !important;
  padding: 0 !important;
}
html.crs-osc #checkout,
html.crs-osc #checkout button,
html.crs-osc #checkout input,
html.crs-osc #checkout select,
html.crs-osc #checkout label {
  font-family: var(--crs-font);
  color: var(--crs-ink);
}
html.crs-osc #checkout.checkout-container {
  display: grid !important;
  grid-template-columns: minmax(0, 1fr) 420px;
  column-gap: 0;
  align-items: stretch;
  width: 100%;
  max-width: none !important;
  margin: 0 !important;
}
html.crs-osc #checkout .opc-wrapper {
  width: auto !important;
  max-width: 640px;
  justify-self: start;
  padding: 30px 56px 40px 24px;
  margin: 0;
  box-sizing: border-box;
}
html.crs-osc #checkoutSteps.opc {
  display: block !important;
  margin: 0;
  padding: 0;
}
html.crs-osc #checkoutSteps > li {
  width: auto !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}
html.crs-osc #checkoutSteps > li > .step-content {
  display: block !important;
  padding-top: 0 !important;
}
html.crs-osc #checkout-step-shipping_method,
html.crs-osc #co-payment-form {
  padding-top: 0 !important;
}
html.crs-osc {
}

/* empty Sendcloud mount points under the delivery card add 20px before "Payment" */
html.crs-osc #onepage-checkout-shipping-method-additional-load,
html.crs-osc #sendcloud-chekout {
  margin: 0 !important;
}
html.crs-osc {
}

/* ---------- section titles ---------- */
html.crs-osc #checkoutSteps .step-title,
html.crs-osc .crs-title {
  display: block;
  font-family: var(--crs-font) !important;
  font-size: 20px !important;
  font-weight: 700 !important;
  line-height: 31px !important;
  color: var(--crs-ink) !important;
  padding: 32px 0 0 !important;
  margin: 0 !important;
  border: 0 !important;
  background: none !important;
}
html.crs-osc #shipping > .step-title {
  padding-top: 0 !important;
}
html.crs-osc #checkoutSteps .step-title::before,
html.crs-osc #checkoutSteps .step-title::after {
  display: none !important;
}
html.crs-osc {
}

/* ---------- fields: label above, 54px input, 10px radius ---------- */
html.crs-osc #checkoutSteps .field {
  margin: 0 !important;
}
html.crs-osc #checkoutSteps .field > .label {
  position: static !important;
  display: block !important;
  transform: none !important;
  padding: 14px 0 5px !important;
  margin: 0 !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 22px !important;
  color: var(--crs-ink-2) !important;
  pointer-events: auto;
}
html.crs-osc #checkoutSteps .field > .label::after {
  display: none !important;
}
html.crs-osc #checkoutSteps .field .control {
  position: relative;
}
html.crs-osc #checkoutSteps input.input-text,
html.crs-osc #checkoutSteps select.select {
  height: 54px !important;
  padding: 0 16px !important;
  border: 1.5px solid var(--crs-border) !important;
  border-radius: 10px !important;
  box-shadow: none !important;
  background: #fff;
  font-size: 16px;
  color: var(--crs-ink) !important;
}
/* host chevron: 11px rotated square, its visible V sits ~4px below the box center */
html.crs-osc #checkoutSteps .field .control:has(> select)::after {
  top: calc(50% - 8.5px) !important;
  bottom: auto !important;
}
html.crs-osc #checkoutSteps input.input-text:focus,
html.crs-osc #checkoutSteps select.select:focus {
  border-color: var(--crs-ink) !important;
  outline: 0;
}
html.crs-osc #checkoutSteps .field.field-error input.input-text,
html.crs-osc #checkoutSteps input.mage-error {
  border-color: var(--crs-brand) !important;
}
html.crs-osc #customer-email-fieldset .field .control {
  gap: 0 !important;
}
html.crs-osc #checkoutSteps .form-login .note,
html.crs-osc #checkoutSteps .field .note {
  display: block;
  margin: 0 !important;
  padding-top: 5px;
  color: var(--crs-muted) !important;
  font-size: 14px !important;
  line-height: 22px !important;
}
html.crs-osc {
}

/* address form as a 6-column grid: country, names, street + number, postcode + city, phone */
html.crs-osc #shipping-new-address-form {
  display: grid !important;
  grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
  column-gap: 12px;
  /* + 14px label padding-top = 24px between rows (host sets 12px) */
  row-gap: 10px !important;
}
html.crs-osc #shipping-new-address-form > .field {
  grid-column: span 6 !important;
  width: auto !important;
}
html.crs-osc #shipping-new-address-form > .field[name="shippingAddress.country_id"] {
  order: 1 !important;
}
html.crs-osc #shipping-new-address-form > .field[name="shippingAddress.firstname"] {
  order: 2 !important;
  grid-column: span 3 !important;
}
html.crs-osc #shipping-new-address-form > .field[name="shippingAddress.lastname"] {
  order: 3 !important;
  grid-column: span 3 !important;
}
html.crs-osc #shipping-new-address-form > .field[name="shippingAddress.street.0"] {
  order: 4 !important;
  grid-column: span 4 !important;
}
html.crs-osc #shipping-new-address-form > .field[name="shippingAddress.street.1"] {
  order: 5 !important;
  grid-column: span 2 !important;
}
html.crs-osc #shipping-new-address-form > .field[name="shippingAddress.postcode"] {
  order: 6 !important;
  grid-column: span 3 !important;
}
html.crs-osc #shipping-new-address-form > .field[name="shippingAddress.city"] {
  order: 7 !important;
  grid-column: span 3 !important;
}
html.crs-osc #shipping-new-address-form > .field[name="shippingAddress.telephone"] {
  order: 8 !important;
}
html.crs-osc #shipping-new-address-form > .field[name="shippingAddress.region_id"],
html.crs-osc #shipping-new-address-form > .field[name="shippingAddress.region"] {
  order: 9 !important;
}
html.crs-osc #checkoutSteps .checkout-billing-address,
html.crs-osc #checkoutSteps .billing-address-same-as-shipping-block {
  background: none !important;
  border: 0 !important;
  border-radius: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
}
html.crs-osc #checkoutSteps .billing-address-same-as-shipping-block {
  padding-top: 14px !important;
}
html.crs-osc #checkoutSteps .billing-address-same-as-shipping-block label {
  font-size: 16px;
  color: var(--crs-ink);
}
html.crs-osc #checkoutSteps .billing-address-same-as-shipping-block input[type=checkbox] {
  accent-color: var(--crs-green) !important;
}
html.crs-osc {
}

/* ---------- delivery method card ---------- */
html.crs-osc .table-checkout-shipping-method {
  margin: 14px 0 0 !important;
  width: 100%;
  border-collapse: separate;
}
html.crs-osc .table-checkout-shipping-method,
html.crs-osc .table-checkout-shipping-method tbody {
  display: block !important;
  width: 100% !important;
}
html.crs-osc .table-checkout-shipping-method tbody tr.row {
  box-sizing: border-box;
  width: 100%;
  display: grid !important;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: "radio title price" "radio carrier price";
  align-items: center;
  column-gap: 14px;
  padding: 14px 16px;
  border: 1.5px solid var(--crs-ink);
  border-radius: 12px;
  cursor: pointer;
}
html.crs-osc .table-checkout-shipping-method td {
  display: block !important;
  padding: 0 !important;
  border: 0 !important;
  width: auto !important;
}
html.crs-osc .table-checkout-shipping-method td.col-method:first-child {
  grid-area: radio;
}
html.crs-osc .table-checkout-shipping-method td[id^=label_method] {
  grid-area: title;
  display: block !important;
}
html.crs-osc .table-checkout-shipping-method td.col-carrier {
  grid-area: carrier;
  font-size: 15px !important;
  font-weight: 400 !important;
  color: var(--crs-ink-2) !important;
  line-height: 23px !important;
}
html.crs-osc .table-checkout-shipping-method td.col-price {
  grid-area: price;
  margin: 0 !important;
  min-width: 0 !important;
  font-size: 17px;
  font-weight: 700;
  color: var(--crs-ink);
}
html.crs-osc .table-checkout-shipping-method .sc-delivery-method-title::before {
  content: var(--crs-t-standard);
  font-size: 17px;
  font-weight: 700;
  line-height: 26px;
  color: var(--crs-ink);
}
html.crs-osc .table-checkout-shipping-method td[id^=label_method] br {
  display: none;
}
html.crs-osc .crs-free-banner {
  display: none;
}
html.crs-osc.crs-free-ship .crs-free-banner {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-top: 18px;
  padding: 12px 14px;
  border: 1px solid #bbe0c7;
  border-left-width: 5px;
  border-radius: 8px;
  background: #e8f4ec;
  font-family: var(--crs-font-alt);
  color: #1b7a3e;
}
html.crs-osc .crs-free-banner__icon,
html.crs-osc .crs-free-banner__icon svg {
  display: block;
  flex: none;
  width: 20px;
  height: 20px;
}
html.crs-osc .crs-free-banner__text {
  display: flex;
  flex-direction: column;
}
html.crs-osc .crs-free-banner__text b {
  font-size: 16px;
  line-height: 22.5px;
}
html.crs-osc .crs-free-banner__note {
  font-size: 14px;
  font-weight: 500;
  line-height: 22.5px;
}
html.crs-osc.crs-free-ship .table-checkout-shipping-method td.col-price .price {
  display: none;
}
html.crs-osc.crs-free-ship .table-checkout-shipping-method td.col-price::after {
  content: var(--crs-t-free);
  color: #1b7a3e;
}
html.crs-osc .table-checkout-shipping-method input[type=radio],
html.crs-osc #co-payment-form .payment-method-title input[type=radio] {
  width: 20px;
  height: 20px;
  margin: 0;
  accent-color: var(--crs-green);
}
html.crs-osc {
}

/* ---------- payment ---------- */
html.crs-osc #co-payment-form .items.payment-methods {
  display: block !important;
  margin: 14px 0 0;
}
html.crs-osc #co-payment-form .payment-group {
  display: flex !important;
  flex-direction: column;
  gap: 10px;
}
html.crs-osc #co-payment-form .payment-method {
  float: none !important;
  box-sizing: border-box !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 1.5px solid var(--crs-border) !important;
  border-radius: 12px !important;
  background: #fff !important;
  box-shadow: none !important;
}
html.crs-osc #co-payment-form .payment-method._active {
  border-color: var(--crs-ink) !important;
}
html.crs-osc #co-payment-form .payment-method._active .payment-method-title,
html.crs-osc #co-payment-form .payment-method .payment-method-title {
  background: #fff !important;
  border-radius: 12px !important;
  outline: 0 !important;
  box-shadow: none !important;
}
html.crs-osc #co-payment-form .payment-method-title input[type=radio],
html.crs-osc .table-checkout-shipping-method input[type=radio] {
  appearance: none !important;
  -webkit-appearance: none !important;
  box-sizing: border-box;
  width: 20px !important;
  height: 20px !important;
  margin: 0 !important;
  border: 1.5px solid var(--crs-border) !important;
  border-radius: 50% !important;
  background: #fff !important;
  flex: none;
  cursor: pointer;
}
html.crs-osc #co-payment-form .payment-method-title input[type=radio]:checked,
html.crs-osc .table-checkout-shipping-method input[type=radio]:checked {
  border-color: var(--crs-green) !important;
  background: radial-gradient(circle, var(--crs-green) 0 5px, #fff 5.5px) !important;
}
html.crs-osc #co-payment-form .payment-method-title input[type=radio]::before,
html.crs-osc #co-payment-form .payment-method-title input[type=radio]::after,
html.crs-osc .table-checkout-shipping-method input[type=radio]::before,
html.crs-osc .table-checkout-shipping-method input[type=radio]::after {
  display: none !important;
}
html.crs-osc #co-payment-form .payment-method.crs-pm-more {
  display: none;
}
html.crs-osc #co-payment-form .payment-group.crs-pm-expanded .payment-method.crs-pm-more {
  display: block;
}
html.crs-osc #co-payment-form .payment-method-title {
  margin: 0 !important;
  padding: 14px 16px !important;
  border: 0 !important;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
}
html.crs-osc #co-payment-form .payment-method-title .label {
  display: flex !important;
  flex-direction: column !important;
  flex: 1 !important;
  gap: 2px;
  padding: 0 !important;
  margin: 0 !important;
  font-size: 17px !important;
  font-weight: 700 !important;
  line-height: 26px !important;
  color: var(--crs-ink) !important;
  cursor: pointer;
}
html.crs-osc #co-payment-form .payment-method-title .label > span {
  font-size: 17px;
  font-weight: 700;
  line-height: 26px;
}
html.crs-osc #co-payment-form .payment-method-title .label > .crs-pm-desc {
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  color: var(--crs-ink-2);
}
html.crs-osc #co-payment-form .crs-pm-badges {
  display: flex;
  gap: 4px;
}
html.crs-osc #co-payment-form .crs-pm-badges b {
  padding: 2px 7px;
  border-radius: 5px;
  background: var(--crs-chip);
  font-size: 12px;
  font-weight: 700;
  line-height: 19px;
  color: var(--crs-ink-2);
}
html.crs-osc #co-payment-form .payment-method-content {
  padding: 0 16px 0 50px !important;
  margin: 0 !important;
}
html.crs-osc #co-payment-form .payment-method-content > .messages,
html.crs-osc #co-payment-form .payment-method-content > .payment-method-billing-address,
html.crs-osc #co-payment-form .payment-method-content > .checkout-agreements-block,
html.crs-osc #co-payment-form .payment-method-content > .actions-toolbar {
  margin: 0 !important;
  padding: 0 !important;
}
html.crs-osc #co-payment-form .payment-method-content fieldset,
html.crs-osc #co-payment-form .payment-method-content .fieldset {
  margin: 0 0 14px !important;
}
html.crs-osc #co-payment-form .crs-pm-toggle {
  align-self: flex-start;
  margin: 2px 0 0;
  padding: 0 0 0 30px;
  border: 0;
  background: none;
  font-family: var(--crs-font);
  font-size: 15px;
  font-weight: 700;
  line-height: 23px;
  color: var(--crs-green-dark);
  cursor: pointer;
  position: relative;
}
html.crs-osc #co-payment-form .crs-pm-toggle::before {
  content: "";
  position: absolute;
  left: 8px;
  top: 6px;
  width: 8px;
  height: 8px;
  border-right: 2px solid var(--crs-green-dark);
  border-bottom: 2px solid var(--crs-green-dark);
  transform: rotate(45deg);
}
html.crs-osc #co-payment-form .payment-group.crs-pm-expanded .crs-pm-toggle::before {
  top: 10px;
  transform: rotate(-135deg);
}
html.crs-osc #checkoutSteps #payment .billing-address-same-as-shipping-block {
  padding-top: 20px !important;
}
html.crs-osc #co-payment-form .place-order-container,
html.crs-osc #co-payment-form .actions-toolbar .primary {
  width: 100%;
}
html.crs-osc #co-payment-form .place-order-button {
  display: block;
  width: 100% !important;
  height: 62px;
  margin: 32px 0 0;
  background: var(--crs-brand) !important;
  border: 0 !important;
  border-radius: 14px !important;
  color: #fff !important;
  font-size: 0 !important;
  box-shadow: none !important;
}
html.crs-osc #co-payment-form .place-order-button::after {
  content: attr(data-crs-label);
  font-size: 20px;
  font-weight: 700;
  line-height: 31px;
}
html.crs-osc #co-payment-form .place-order-button:hover {
  background: #a5164a !important;
}
html.crs-osc {
}

/* ---------- order summary ---------- */
html.crs-osc #checkout .opc-sidebar.opc-sidebar {
  position: static !important;
  width: auto !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
  background: var(--crs-side);
  border-left: 1px solid var(--crs-line);
  transform: none !important;
  visibility: visible !important;
  opacity: 1 !important;
  height: auto !important;
}
html.crs-osc #checkout .opc-sidebar .modal-inner-wrap {
  position: sticky;
  top: 16px;
  transform: none !important;
  box-shadow: none !important;
  background: none !important;
  margin: 0;
  width: auto;
  height: auto;
  padding: 30px 24px 40px 32px;
}
html.crs-osc #checkout .opc-block-summary {
  display: flex;
  flex-direction: column;
  background: none !important;
  box-shadow: none !important;
  border: 0 !important;
  border-radius: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
}
html.crs-osc #checkout .opc-block-summary > .title {
  display: block !important;
  order: 0;
  padding: 0 0 16px !important;
  margin: 0 !important;
  border: 0 !important;
  font-family: var(--crs-font);
  font-size: 19px;
  font-weight: 700;
  line-height: 29px;
  color: var(--crs-ink);
}
html.crs-osc #checkout .opc-block-summary > .crs-summary-items {
  order: 1;
}
html.crs-osc #checkout .opc-block-summary > .discount-code,
html.crs-osc #checkout .opc-block-summary > .crs-coupon-wrap {
  order: 2;
}
html.crs-osc #checkout .opc-block-summary > .table-totals {
  order: 3;
}
html.crs-osc #checkout .opc-block-summary > .crs-guarantee {
  order: 4;
}
html.crs-osc .crs-summary-items {
  list-style: none;
  margin: 0;
  padding: 0;
}
html.crs-osc .crs-summary-item {
  display: grid;
  grid-template-columns: 62px 1fr auto;
  gap: 14px;
  align-items: center;
  margin: 0 0 14px;
  font-family: var(--crs-font);
  color: var(--crs-ink);
}
html.crs-osc .crs-summary-item__img {
  position: relative;
  box-sizing: border-box;
  width: 62px;
  height: 62px;
  border: 1px solid var(--crs-line);
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
}
html.crs-osc .crs-summary-item__img img {
  display: block;
  width: 60px;
  height: 60px;
  object-fit: cover;
}
html.crs-osc .crs-summary-item__qty {
  position: absolute;
  top: -1px;
  right: -1px;
  min-width: 21px;
  height: 21px;
  padding: 0 5px;
  border-radius: 0 10px 0 10px;
  background: #2e2e2e;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  box-sizing: border-box;
}
html.crs-osc .crs-summary-item__text {
  display: flex;
  flex-direction: column;
}
html.crs-osc .crs-summary-item__name {
  font-size: 15px;
  font-weight: 400;
  line-height: 19.5px;
}
html.crs-osc .crs-summary-item__pack {
  font-size: 13px;
  line-height: 17px;
  color: var(--crs-muted);
}
html.crs-osc .crs-summary-item__ships {
  font-size: 13px;
  line-height: 17px;
  color: var(--crs-green-dark);
}
html.crs-osc .crs-summary-item__ships:empty {
  display: none;
}
html.crs-osc .crs-summary-item__price {
  font-size: 15px;
  font-weight: 700;
  line-height: 23px;
  white-space: nowrap;
}
html.crs-osc #checkout .opc-block-summary .discount-code {
  margin: 4px 0 0 !important;
  padding: 0 0 18px !important;
  border: 0 !important;
  border-bottom: 1px solid var(--crs-line) !important;
  border-radius: 0 !important;
  background: none !important;
  box-shadow: none !important;
}
html.crs-osc #checkout .opc-block-summary .discount-code .payment-option-title {
  padding: 0 !important;
  display: flex;
  align-items: center;
}
html.crs-osc #checkout .opc-block-summary .discount-code .action-toggle,
html.crs-osc #checkout .opc-block-summary .discount-code .action-toggle span {
  color: var(--crs-ink-2) !important;
  font-family: Inter, var(--crs-font) !important;
  font-size: 16px;
  font-weight: 500;
  line-height: 25.5px;
  text-decoration: underline;
}
html.crs-osc #checkout .opc-block-summary .discount-code .action-toggle::before,
html.crs-osc #checkout .opc-block-summary .discount-code .action-toggle::after,
html.crs-osc #checkout .opc-block-summary .discount-code .payment-option-title::before,
html.crs-osc #checkout .opc-block-summary .discount-code .payment-option-title::after {
  display: none !important;
}
html.crs-osc #checkout .opc-block-summary .discount-code .payment-option-title {
  height: auto !important;
  width: auto !important;
}
html.crs-osc #checkout .opc-block-summary .discount-code .action-toggle {
  font-size: 16px !important;
  width: auto !important;
}
html.crs-osc {
}

/* open form: "Discount code [Apply]" + hint, the "Got a discount code?" link goes away */
html.crs-osc #checkout .opc-block-summary .discount-code._active .payment-option-title {
  display: none !important;
}
html.crs-osc #checkout .opc-block-summary .discount-code .payment-option-content {
  padding: 8px 0 0 !important;
}
html.crs-osc #checkout .opc-block-summary .discount-code .messages {
  margin: 0 0 8px;
}
html.crs-osc #checkout .opc-block-summary .discount-code .message {
  margin: 0 !important;
  padding: 0 !important;
  background: none !important;
  font-family: var(--crs-font-alt);
  font-size: 13px;
  line-height: 19.5px;
  color: var(--crs-brand) !important;
}
html.crs-osc #checkout .opc-block-summary .discount-code .message::before,
html.crs-osc #checkout .opc-block-summary .discount-code .message > *::before {
  display: none !important;
}
html.crs-osc #checkout .opc-block-summary #discount-form {
  display: flex;
  gap: 12px;
  margin: 0;
}
html.crs-osc #checkout .opc-block-summary #discount-form .payment-option-inner {
  flex: 1;
  margin: 0 !important;
}
html.crs-osc #checkout .opc-block-summary #discount-form .field {
  margin: 0 !important;
}
html.crs-osc #checkout .opc-block-summary #discount-form .field > .label {
  display: none !important;
}
html.crs-osc #checkout .opc-block-summary #discount-form input.input-text {
  box-sizing: border-box;
  width: 100%;
  height: 50px !important;
  margin: 0 !important;
  padding: 0 14px !important;
  border: 1px solid #dcdcdc !important;
  border-radius: 8px !important;
  background: #fff;
  box-shadow: none !important;
  font-family: var(--crs-font-alt) !important;
  font-size: 14px !important;
  color: #141414;
}
html.crs-osc #checkout .opc-block-summary #discount-form input.input-text::placeholder {
  color: #757575;
}
html.crs-osc #checkout .opc-block-summary #discount-form .actions-toolbar,
html.crs-osc #checkout .opc-block-summary #discount-form .actions-toolbar .primary {
  display: block;
  margin: 0 !important;
  padding: 0 !important;
}
html.crs-osc #checkout .opc-block-summary #discount-form .action-apply {
  height: 50px;
  margin: 0 !important;
  padding: 0 18px !important;
  border: 1px solid #141414 !important;
  border-radius: 8px !important;
  background: #fff !important;
  box-shadow: none !important;
  font-family: var(--crs-font-alt) !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  line-height: 23px;
  color: #141414 !important;
}
html.crs-osc #checkout .opc-block-summary #discount-form .action-apply:hover {
  background: #f4f4f4 !important;
}
html.crs-osc .crs-discount-hint {
  margin: 0;
  padding-top: 8px;
  font-family: var(--crs-font-alt);
  font-size: 12px;
  line-height: 20.25px;
  color: #4a4a4a;
}
html.crs-osc {
}

/* applied code: the form is replaced by a chip */
html.crs-osc .crs-coupon-wrap {
  display: none;
}
html.crs-osc.crs-coupon-applied #checkout .opc-block-summary .discount-code {
  display: none !important;
}
html.crs-osc.crs-coupon-applied .crs-coupon-wrap {
  display: block;
  margin-top: 4px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--crs-line);
}
html.crs-osc .crs-coupon {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 13px 12px;
  border: 1px solid var(--crs-line);
  border-radius: 8px;
  background: #fff;
  font-family: var(--crs-font-alt);
}
html.crs-osc .crs-coupon__code {
  display: flex;
  align-items: center;
  gap: 7px;
}
html.crs-osc .crs-coupon__icon,
html.crs-osc .crs-coupon__icon svg {
  display: block;
  width: 18px;
  height: 18px;
}
html.crs-osc .crs-coupon__name {
  font-size: 14.5px;
  font-weight: 700;
  line-height: 21.75px;
  color: #1b7a3e;
}
html.crs-osc .crs-coupon__applied {
  font-size: 14px;
  line-height: 21px;
  color: #7a7a7a;
}
html.crs-osc #checkout .crs-coupon__remove {
  margin: 0 0 0 auto;
  padding: 1px 6px;
  border: 0;
  background: none;
  box-shadow: none;
  font-family: var(--crs-font-alt);
  font-size: 13.5px;
  font-weight: 400;
  line-height: 20.25px;
  color: #7a7a7a;
  text-decoration: underline;
  cursor: pointer;
}
html.crs-osc #checkout .opc-block-summary .table-totals {
  border-collapse: collapse !important;
  margin: 0 !important;
  padding: 10px 0 0 !important;
  background: none !important;
  box-shadow: none !important;
  border: 0 !important;
  border-radius: 0 !important;
}
html.crs-osc #checkout .opc-block-summary .table-totals tr {
  padding: 0 !important;
  border: 0 !important;
}
html.crs-osc #checkout .opc-block-summary .table-totals th,
html.crs-osc #checkout .opc-block-summary .table-totals td {
  padding: 3.5px 0 !important;
  border: 0 !important;
  font-family: var(--crs-font);
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  color: var(--crs-ink-2);
  background: none !important;
  vertical-align: baseline;
}
html.crs-osc #checkout .opc-block-summary .table-totals td.amount {
  text-align: right;
  color: var(--crs-ink);
}
html.crs-osc #checkout .opc-block-summary .table-totals .price {
  font: inherit !important;
  color: inherit !important;
}
html.crs-osc #checkout .opc-block-summary .table-totals .crs-was {
  padding-right: 4px;
  font-family: var(--crs-font-alt);
  font-size: 15.5px;
  font-weight: 400;
  color: #9b9b9b;
}
html.crs-osc #checkout .opc-block-summary .table-totals .crs-free {
  font-family: var(--crs-font-alt);
  font-size: 15.5px;
  font-weight: 700;
  color: #1b7a3e;
}
html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl {
  align-items: baseline !important;
  margin-top: 14px;
  border-top: 1px solid var(--crs-line) !important;
}
html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl th,
html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl td {
  padding-top: 12px !important;
}
html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl th {
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: var(--crs-ink);
}
html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl th strong {
  padding: 0 !important;
  font-size: 0;
}
html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl th strong::before {
  content: var(--crs-t-total);
  font-size: 18px;
  font-weight: 700;
}
html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl td {
  font-size: 26px;
  font-weight: 700;
  line-height: 40px;
  color: var(--crs-ink);
  white-space: nowrap;
}
html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl td::before {
  content: "EUR ";
  /* Magento's mobile totals hide td::before visually (1px, absolute, clipped) */
  display: inline !important;
  position: static !important;
  width: auto !important;
  height: auto !important;
  margin: 0 4px 0 0 !important;
  padding: 0 !important;
  clip: auto !important;
  overflow: visible !important;
  font-size: 13px;
  font-weight: 400;
  color: var(--crs-muted);
}
html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl td::after {
  content: var(--crs-t-vat);
  display: block;
  margin-top: 7px;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: var(--crs-muted);
}
html.crs-osc .crs-guarantee {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  padding: 16px 18px;
  border: 1px solid #e0197a;
  border-left-width: 5px;
  border-radius: 12px;
  background: #fff;
}
html.crs-osc .crs-guarantee__icon {
  flex: none;
  width: 38px;
  height: 38px;
  margin: 3px;
}
html.crs-osc .crs-guarantee__text {
  padding: 2px 0 2px 16px;
  border-left: 1px solid #e3e3e3;
  font-family: var(--crs-font-alt);
  font-size: 14.5px;
  line-height: 21px;
  color: #4a4a4a;
}
html.crs-osc {
}

html.crs-osc {
}

/* ---------- mobile summary bar (shown under 900px) ---------- */
html.crs-osc .crs-summary-toggle {
  display: none;
}
html.crs-osc {
}

/* ---------- below the minimum order ---------- */
html.crs-osc.crs-below-min #co-payment-form .place-order-button {
  background: var(--crs-border) !important;
  color: var(--crs-ink-2) !important;
  cursor: not-allowed;
}
html.crs-osc.crs-below-min #co-payment-form .place-order-button:hover {
  background: var(--crs-border) !important;
}
html.crs-osc {
}

/* ---------- narrow screens: one column, summary first ---------- */
@media (max-width: 900px) {
  html.crs-osc #checkout.checkout-container {
    grid-template-columns: minmax(0, 1fr);
  }
  html.crs-osc #checkout .opc-wrapper {
    justify-self: stretch;
    max-width: none;
    padding: 0 16px 32px;
    order: 2;
  }
  html.crs-osc #checkout .opc-sidebar {
    order: 1;
    border-left: 0;
    border-bottom: 1px solid var(--crs-line);
  }
  html.crs-osc #checkout .opc-sidebar .modal-inner-wrap {
    position: static;
    padding: 18px 16px 20px;
  }
  html.crs-osc.crs-summary-closed #checkout .opc-sidebar {
    display: none !important;
  }
  html.crs-osc .crs-summary-toggle {
    order: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 14px 16px;
    border: 0;
    border-bottom: 1px solid #ebebeb;
    border-radius: 0;
    background: #f4f4f4;
    box-shadow: none;
    font-family: var(--crs-font-alt);
    font-size: 15.5px;
    font-weight: 700;
    line-height: 23px;
    color: #141414;
    cursor: pointer;
  }
  html.crs-osc .crs-summary-toggle__label::after {
    content: "";
    flex: none;
    display: inline-block;
    width: 7px;
    height: 7px;
    margin: 0 0 -1px 8px;
    border-right: 2px solid #141414;
    border-bottom: 2px solid #141414;
    box-sizing: border-box;
    transform: rotate(-135deg);
  }
  html.crs-osc.crs-summary-closed .crs-summary-toggle__label::after {
    margin-bottom: 3px;
    transform: rotate(45deg);
  }
  /* Longer titles ("Récapitulatif de la commande") wrap on the left, the chevron beside them;
     below 375px the badge wraps too ("Kostenloser Versand"), the total never does */
  html.crs-osc .crs-summary-toggle__label {
    display: flex;
    flex-shrink: 100;
    align-items: center;
    text-align: left;
  }
  html.crs-osc .crs-summary-toggle__end {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 8px;
  }
  html.crs-osc .crs-summary-toggle__total {
    font-weight: 700;
    white-space: nowrap;
  }
  html.crs-osc .crs-summary-toggle__free {
    display: none;
    padding: 3px 9px;
    border: 1px solid #bbe0c7;
    border-radius: 999px;
    text-align: center;
    background: #e8f4ec;
    font-size: 12px;
    white-space: nowrap;
    line-height: 18.75px;
    color: #1b7a3e;
  }
  @media (max-width: 374px) {
    html.crs-osc .crs-summary-toggle__free {
      white-space: normal;
    }
  }
  html.crs-osc.crs-free-ship .crs-summary-toggle__free {
    display: block;
  }
  html.crs-osc.crs-coupon-applied .crs-coupon {
    border-color: #bbe0c7;
  }
  html.crs-osc #checkout .crs-guarantee {
    margin-top: 12px;
  }
  html.crs-osc #shipping-new-address-form {
    row-gap: 0 !important;
  }
  html.crs-osc #shipping-new-address-form > .field[name] {
    grid-column: span 6 !important;
  }
  html.crs-osc .page-header .header.content {
    justify-content: center !important;
  }
  html.crs-osc {
    /* the mobile design uses Plus Jakarta Sans and a neutral grey palette */
    --crs-font: var(--crs-font-alt);
    --crs-ink: #141414;
    --crs-ink-2: #7a7a7a;
    --crs-muted: #7a7a7a;
    --crs-border: #dcdcdc;
    --crs-line: #ebebeb;
    --crs-side: #f4f4f4;
    --crs-chip: #f4f4f4;
    --crs-green: #1b7a3e;
    --crs-green-dark: #1b7a3e;
  }
  html.crs-osc #checkoutSteps .step-title,
  html.crs-osc .crs-title {
    font-size: 19px !important;
    line-height: 28.5px !important;
    letter-spacing: -0.19px;
    padding-top: 34px !important;
  }
  html.crs-osc #checkoutSteps .field:not(.choice) > .label {
    padding: 16px 0 6px !important;
    line-height: 21px !important;
  }
  html.crs-osc #customer-email-fieldset .field > .label,
  html.crs-osc #co-shipping-form .field[name="shippingAddress.country_id"] > .label {
    padding-top: 18px !important;
  }
  html.crs-osc #checkoutSteps input.input-text,
  html.crs-osc #checkoutSteps select.select {
    height: 56px !important;
    border-width: 1px !important;
    border-radius: 8px !important;
  }
  html.crs-osc #checkoutSteps .form-login .note,
  html.crs-osc #checkoutSteps .field .note {
    padding-top: 7px;
    font-size: 13.5px !important;
    line-height: 20.25px !important;
  }
  html.crs-osc #checkoutSteps .billing-address-same-as-shipping-block {
    padding-top: 16px !important;
  }
  html.crs-osc #checkoutSteps .billing-address-same-as-shipping-block label {
    font-size: 15.5px;
    line-height: 23.25px;
  }
  html.crs-osc {
  }

/* delivery + payment cards */
  html.crs-osc .table-checkout-shipping-method tbody tr.row {
    padding: 16px 18px;
    border-width: 1px;
    border-radius: 8px;
  }
  html.crs-osc .table-checkout-shipping-method .sc-delivery-method-title::before {
    font-size: 16px;
    line-height: 24px;
  }
  html.crs-osc .table-checkout-shipping-method td.col-carrier {
    font-size: 14.5px !important;
    line-height: 21.75px !important;
  }
  html.crs-osc .table-checkout-shipping-method td.col-price {
    font-family: "Atkinson Hyperlegible", sans-serif;
    color: #171c18;
  }
  html.crs-osc #co-payment-form .items.payment-methods {
    margin-top: 18px;
  }
  html.crs-osc #co-payment-form .payment-method {
    border-width: 1px !important;
    border-radius: 8px !important;
  }
  html.crs-osc #co-payment-form .payment-method .payment-method-title {
    padding: 16px 18px !important;
    border-radius: 8px !important;
  }
  html.crs-osc #co-payment-form .payment-method-title input[type=radio],
  html.crs-osc .table-checkout-shipping-method input[type=radio] {
    width: 18px !important;
    height: 18px !important;
  }
  html.crs-osc #co-payment-form .payment-method-title input[type=radio]:checked,
  html.crs-osc .table-checkout-shipping-method input[type=radio]:checked {
    background: radial-gradient(circle, var(--crs-green) 0 4.5px, #fff 5px) !important;
  }
  html.crs-osc #co-payment-form .payment-method-title .label > span {
    font-size: 16px;
    line-height: 24px;
  }
  html.crs-osc #co-payment-form .payment-method-title .label > .crs-pm-desc {
    font-size: 14.5px;
    line-height: 21.75px;
  }
  html.crs-osc #co-payment-form .crs-pm-badges {
    gap: 6px;
  }
  html.crs-osc #co-payment-form .crs-pm-badges b {
    padding: 3px 7px;
    border-radius: 4px;
    font-size: 11.5px;
    line-height: 17.25px;
    color: #4a4a4a;
  }
  html.crs-osc #co-payment-form .crs-pm-toggle {
    margin-top: 6px;
    padding-left: 18px;
    line-height: 22.5px;
  }
  html.crs-osc #co-payment-form .crs-pm-toggle::before {
    left: 1px;
  }
  html.crs-osc #co-payment-form .place-order-button::after {
    font-family: "Atkinson Hyperlegible", sans-serif;
  }
  html.crs-osc {
  }

/* order summary */
  html.crs-osc #checkout .opc-sidebar .modal-inner-wrap {
    padding-bottom: 22px;
  }
  html.crs-osc #checkout .opc-block-summary > .title {
    padding-bottom: 22px !important;
    font-size: 19px;
    line-height: 28.5px;
    letter-spacing: -0.19px;
  }
  html.crs-osc .crs-summary-item {
    grid-template-columns: 54px 1fr auto;
    gap: 12px;
    margin-bottom: 18px;
  }
  html.crs-osc .crs-summary-item__img {
    width: 54px;
    height: 54px;
    border-radius: 8px;
  }
  html.crs-osc .crs-summary-item__img img {
    width: 52px;
    height: 52px;
  }
  html.crs-osc .crs-summary-item__qty {
    top: -1px;
    right: -1px;
    min-width: 20px;
    height: 20px;
    border-radius: 0 8px 0 8px;
    font-size: 11.5px;
    line-height: 20px;
  }
  html.crs-osc .crs-summary-item__name {
    font-size: 15.5px;
    font-weight: 600;
    line-height: 20.9px;
  }
  html.crs-osc .crs-summary-item__pack,
  html.crs-osc .crs-summary-item__ships {
    font-size: 13.5px;
    line-height: 18.2px;
  }
  html.crs-osc .crs-summary-item__ships {
    font-weight: 600;
  }
  html.crs-osc .crs-summary-item__price {
    font-size: 15.5px;
  }
  html.crs-osc #checkout .opc-block-summary .discount-code {
    margin-top: 0 !important;
    border-bottom-color: #dcdcdc !important;
  }
  html.crs-osc #checkout .opc-block-summary .table-totals {
    padding-top: 12px !important;
  }
  html.crs-osc #checkout .opc-block-summary .table-totals th,
  html.crs-osc #checkout .opc-block-summary .table-totals td {
    padding: 4.5px 0 !important;
    font-size: 15.5px;
    line-height: 23.25px;
    color: #4a4a4a;
  }
  html.crs-osc #checkout .opc-block-summary .table-totals td.amount {
    color: var(--crs-ink);
  }
  html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl {
    border-top-color: #dcdcdc !important;
  }
  html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl th,
  html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl td {
    padding-top: 16px !important;
    color: var(--crs-ink);
  }
  html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl th {
    font-size: 18px;
    line-height: 27px;
  }
  html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl td {
    font-size: 26px;
    line-height: 39px;
    letter-spacing: -0.26px;
  }
  html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl td::before {
    font-size: 12.5px;
    font-weight: 500;
  }
  html.crs-osc #checkout .opc-block-summary .table-totals .grand.totals.incl td::after {
    margin-top: 0;
    line-height: 19.5px;
    letter-spacing: 0;
  }
  html.crs-osc #checkout .crs-guarantee {
    padding: 12px 18px;
  }
}
`,s={en:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],de:[`Januar`,`Februar`,`März`,`April`,`Mai`,`Juni`,`Juli`,`August`,`September`,`Oktober`,`November`,`Dezember`],it:[`gennaio`,`febbraio`,`marzo`,`aprile`,`maggio`,`giugno`,`luglio`,`agosto`,`settembre`,`ottobre`,`novembre`,`dicembre`],fr:[`janvier`,`février`,`mars`,`avril`,`mai`,`juin`,`juillet`,`août`,`septembre`,`octobre`,`novembre`,`décembre`]},c=[`Jan.`,`Feb.`,`März`,`Apr.`,`Mai`,`Juni`,`Juli`,`Aug.`,`Sep.`,`Okt.`,`Nov.`,`Dez.`],te=[`janv.`,`févr.`,`mars`,`avr.`,`mai`,`juin`,`juil.`,`août`,`sept.`,`oct.`,`nov.`,`déc.`],l=[`gen.`,`feb.`,`mar.`,`apr.`,`mag.`,`giu.`,`lug.`,`ago.`,`set.`,`ott.`,`nov.`,`dic.`],u=e=>e===1?`1er`:String(e),d=e=>e===1?`1º`:String(e),f=e=>e===8||e===11,p={NL:`to the`},m={CH:`in die`,NL:`in die`,SK:`in die`},h={DK:`au`,LI:`au`,LU:`au`,PT:`au`,NL:`aux`,CY:`à`,MC:`à`,MT:`à`,SM:`à`},g={NL:`nei`,CY:`a`,MC:`a`,MT:`a`,SM:`a`},_={en:{decimal:`.`,summaryTitle:`Order summary`,deliveryMethod:`Delivery method`,payment:`Payment`,labels:{firstname:`First name`,lastname:`Last name`,"street.0":`Street`,"street.1":`No.`,postcode:`Postcode`,city:`City`,telephone:`Phone`,country_id:`Country`},billingSame:`Billing address is the same as delivery address`,percent:e=>`${e}%`,contact:`Contact information`,deliveryAddress:`Delivery address`,emailNote:`We’ll send your order confirmation and tracking number here.`,discountHeading:`Got a discount code?`,discountHint:`One code per order. It combines with the quantity discount.`,discount:`Discount`,remove:`Remove`,applied:e=>`−${e} applied`,perPack:e=>`${e} per pack`,ships:(e,t)=>`Ships from ${e}\u00a0${s.en[t].slice(0,3)}`,carrier:(e,t)=>`Pre-order now · Shipping begins ${s.en[t]} ${e}`,standardDelivery:`Standard delivery, tracked`,free:`Free`,freeDelivery:`Free delivery`,freeApplied:`Free delivery applied`,freeNote:e=>`Free standard delivery applies to orders over ${e}.`,subtotal:e=>`Subtotal, ${e} ${e===1?`item`:`items`}`,deliveryTo:(e,t)=>e?`Delivery ${p[t]||`to`} ${e}`:`Delivery`,total:`Total`,inclVat:`Including VAT`,pay:e=>`Pay ${e}`,guarantee:`If it doesn’t grow or arrives damaged, we will replace or refund, immediately.`,morePayments:e=>`More payment methods (${e})`,hidePayments:`Hide payment methods`,titles:{mollie_methods_creditcard:`Credit card`,banktransfer:`Bank transfer`},methods:{mollie_methods_paypal:`You confirm in PayPal and come back here.`,mollie_methods_creditcard:`Visa, Mastercard, American Express`,mollie_methods_googlepay:`You confirm with Google Pay and come back here.`,mollie_methods_klarna:`Pay within 30 days of delivery.`,mollie_methods_applepay:``,mollie_methods_ideal:`Pay from your Dutch bank app.`,mollie_methods_belfius:`Confirm the payment in the Belfius app.`,mollie_methods_eps:`Pay from your Austrian bank account.`,mollie_methods_kbc:`Confirm the payment in the KBC or CBC app.`,mollie_methods_przelewy24:`Pay from your Polish bank account.`,mollie_methods_bancontact:`Pay with your Belgian debit card.`,mollie_methods_bancomatpay:`Confirm the payment in the Bancomat Pay app.`,mollie_methods_multibanco:`Pay with a Multibanco reference in Portugal.`,mollie_methods_mbway:`Confirm the payment in the MB Way app.`,mollie_methods_paybybank:`Confirm the payment in your banking app.`,mollie_methods_satispay:`Confirm the payment in the Satispay app.`,mollie_methods_billie:`Pay later for eligible business orders.`,banktransfer:`We ship once the payment arrives, usually 1 to 3 days.`}},de:{decimal:`,`,summaryTitle:`Bestellübersicht`,deliveryMethod:`Versandart`,payment:`Zahlung`,labels:{firstname:`Vorname`,lastname:`Nachname`,"street.0":`Straße`,"street.1":`Nr.`,postcode:`PLZ`,city:`Stadt`,telephone:`Telefon`,country_id:`Land`},billingSame:`Rechnungsadresse entspricht der Lieferadresse`,percent:e=>`${e}%`,contact:`Kontaktinformationen`,deliveryAddress:`Lieferadresse`,emailNote:`Wir senden Ihre Bestellbestätigung und Sendungsverfolgungsnummer hierhin.`,discountHeading:`Rabattcode hinzufügen?`,discountHint:`Ein Code pro Bestellung. Er wird mit dem Mengenrabatt kombiniert.`,discount:`Rabatt`,remove:`Entfernen`,applied:e=>`−${e} angewendet`,perPack:e=>`${e} pro Packung`,ships:(e,t)=>`Versand ab ${e}.\u00a0${c[t]}`,carrier:(e,t)=>`Jetzt vorbestellen · Versand beginnt am ${e}. ${s.de[t]}`,standardDelivery:`Standardversand mit Sendungsverfolgung`,free:`Kostenlos`,freeDelivery:`Kostenloser Versand`,freeApplied:`Kostenloser Versand angewendet`,freeNote:e=>`Kostenloser Standardversand gilt für Bestellungen über ${e}.`,subtotal:e=>`Zwischensumme, ${e} Artikel`,deliveryTo:(e,t)=>e?`Lieferung ${m[t]||`nach`} ${e}`:`Lieferung`,total:`Gesamt`,inclVat:`Inkl. MwSt.`,pay:e=>`${e} bezahlen`,guarantee:`Falls es nicht aufgeht oder beschädigt ankommt, leisten wir sofort Ersatz oder erstatten Ihnen den Kaufpreis.`,morePayments:e=>`Weitere Zahlungsmethoden (${e})`,hidePayments:`Zahlungsmethoden ausblenden`,titles:{mollie_methods_creditcard:`Kreditkarte`,banktransfer:`Banküberweisung`},methods:{mollie_methods_paypal:`Sie bestätigen bei PayPal und kehren hierher zurück.`,mollie_methods_creditcard:`Visa, Mastercard, American Express`,mollie_methods_googlepay:`Sie bestätigen mit Google Pay und kehren hierher zurück.`,mollie_methods_klarna:`Innerhalb von 30 Tagen nach Lieferung bezahlen.`,mollie_methods_applepay:``,mollie_methods_ideal:`Bezahlen Sie über Ihre niederländische Bank-App.`,mollie_methods_belfius:`Bestätigen Sie die Zahlung in der Belfius-App.`,mollie_methods_eps:`Bezahlen Sie über Ihr österreichisches Bankkonto.`,mollie_methods_kbc:`Bestätigen Sie die Zahlung in der KBC- oder CBC-App.`,mollie_methods_przelewy24:`Bezahlen Sie über Ihr polnisches Bankkonto.`,mollie_methods_bancontact:`Bezahlen Sie mit Ihrer belgischen Debitkarte.`,mollie_methods_bancomatpay:`Bestätigen Sie die Zahlung in der Bancomat-Pay-App.`,mollie_methods_multibanco:`Bezahlen Sie mit einer Multibanco-Referenz in Portugal.`,mollie_methods_mbway:`Bestätigen Sie die Zahlung in der MB-Way-App.`,mollie_methods_paybybank:`Bestätigen Sie die Zahlung in Ihrer Banking-App.`,mollie_methods_satispay:`Bestätigen Sie die Zahlung in der Satispay-App.`,mollie_methods_billie:`Später bezahlen für berechtigte Geschäftsbestellungen.`,banktransfer:`Wir versenden, sobald die Zahlung eingegangen ist, in der Regel 1 bis 3 Tage.`}},fr:{decimal:`,`,summaryTitle:`Récapitulatif de la commande`,deliveryMethod:`Mode de livraison`,payment:`Paiement`,labels:{firstname:`Prénom`,lastname:`Nom`,"street.0":`Rue`,"street.1":`N°`,postcode:`Code postal`,city:`Ville`,telephone:`Téléphone`,country_id:`Pays`},billingSame:`L’adresse de facturation est identique à l’adresse de livraison`,percent:e=>`${e}\u00a0%`,contact:`Coordonnées`,deliveryAddress:`Adresse de livraison`,emailNote:`Nous enverrons votre confirmation de commande et votre numéro de suivi à cette adresse e-mail.`,discountHeading:`Vous avez un code promo\xA0?`,discountHint:`Un code par commande. Il est cumulable avec la remise sur quantité.`,discount:`Remise`,remove:`Supprimer`,applied:e=>`−${e} appliqués`,perPack:e=>`${e} par sachet`,ships:(e,t)=>`Expédition dès le ${u(e)}\u00a0${te[t]}`,carrier:(e,t)=>`Précommandez maintenant · Expédition à partir du ${u(e)} ${s.fr[t]}`,standardDelivery:`Livraison standard avec suivi`,free:`Gratuite`,freeDelivery:`Livraison gratuite`,freeApplied:`Livraison gratuite appliquée`,freeNote:e=>`La livraison standard est gratuite pour les commandes de plus de ${e}.`,subtotal:e=>`Sous-total, ${e} ${e>1?`articles`:`article`}`,deliveryTo:(e,t)=>e?`Livraison ${h[t]||`en`} ${e}`:`Livraison`,total:`Total`,inclVat:`TVA incluse`,pay:e=>`Payer ${e}`,guarantee:`Si le produit ne pousse pas ou arrive endommagé, nous le remplaçons ou vous remboursons immédiatement.`,morePayments:e=>`Plus de moyens de paiement (${e})`,hidePayments:`Masquer les moyens de paiement`,titles:{mollie_methods_creditcard:`Carte bancaire`,banktransfer:`Virement bancaire`},methods:{mollie_methods_paypal:`Vous confirmez sur PayPal puis revenez ici.`,mollie_methods_creditcard:`Visa, Mastercard, American Express`,mollie_methods_googlepay:`Vous confirmez avec Google Pay puis revenez ici.`,mollie_methods_klarna:`Payez dans les 30 jours suivant la livraison.`,mollie_methods_applepay:``,mollie_methods_ideal:`Payez depuis l’application de votre banque néerlandaise.`,mollie_methods_belfius:`Confirmez le paiement dans l’application Belfius.`,mollie_methods_eps:`Payez depuis votre compte bancaire autrichien.`,mollie_methods_kbc:`Confirmez le paiement dans l’application KBC ou CBC.`,mollie_methods_przelewy24:`Payez depuis votre compte bancaire polonais.`,mollie_methods_bancontact:`Payez avec votre carte de débit belge.`,mollie_methods_bancomatpay:`Confirmez le paiement dans l’application Bancomat Pay.`,mollie_methods_multibanco:`Payez avec une référence Multibanco au Portugal.`,mollie_methods_mbway:`Confirmez le paiement dans l’application MB Way.`,mollie_methods_paybybank:`Confirmez le paiement dans votre application bancaire.`,mollie_methods_satispay:`Confirmez le paiement dans l’application Satispay.`,mollie_methods_billie:`Payez plus tard pour les commandes professionnelles éligibles.`,banktransfer:`Nous expédions la commande dès réception du paiement, généralement sous 1 à 3 jours.`}},it:{decimal:`,`,summaryTitle:`Riepilogo ordine`,deliveryMethod:`Metodo di consegna`,payment:`Pagamento`,labels:{firstname:`Nome`,lastname:`Cognome`,"street.0":`Via`,"street.1":`N.`,postcode:`CAP`,city:`Città`,telephone:`Telefono`,country_id:`Paese`},billingSame:`L’indirizzo di fatturazione è lo stesso dell’indirizzo di consegna`,percent:e=>`${e}%`,contact:`Informazioni di contatto`,deliveryAddress:`Indirizzo di consegna`,emailNote:`Invieremo la conferma dell’ordine e il numero di tracciamento a questo indirizzo e-mail.`,discountHeading:`Hai un codice sconto?`,discountHint:`Un codice per ordine. È cumulabile con lo sconto quantità.`,discount:`Sconto`,remove:`Rimuovi`,applied:e=>`−${e} applicato`,perPack:e=>`${e} per confezione`,ships:(e,t)=>`Spedizione ${f(e)?`dall’`:`dal `}${d(e)}\u00a0${l[t]}`,carrier:(e,t)=>`Preordina ora · Le spedizioni iniziano ${f(e)?`l’`:`il `}${d(e)} ${s.it[t]}`,standardDelivery:`Spedizione standard con tracciamento`,free:`Gratuita`,freeDelivery:`Spedizione gratuita`,freeApplied:`Spedizione gratuita applicata`,freeNote:e=>`La spedizione standard è gratuita per gli ordini superiori a ${e}.`,subtotal:e=>`Subtotale, ${e} ${e===1?`articolo`:`articoli`}`,deliveryTo:(e,t)=>e?`Consegna ${g[t]||`in`} ${e}`:`Consegna`,total:`Totale`,inclVat:`IVA inclusa`,pay:e=>`Paga ${e}`,guarantee:`Se non cresce o arriva danneggiato, lo sostituiremo o ti rimborseremo immediatamente.`,morePayments:e=>`Altri metodi di pagamento (${e})`,hidePayments:`Nascondi metodi di pagamento`,titles:{mollie_methods_creditcard:`Carta di credito`,banktransfer:`Bonifico bancario`},methods:{mollie_methods_paypal:`Conferma su PayPal e poi torna qui.`,mollie_methods_creditcard:`Visa, Mastercard, American Express`,mollie_methods_googlepay:`Conferma con Google Pay e poi torna qui.`,mollie_methods_klarna:`Paga entro 30 giorni dalla consegna.`,mollie_methods_applepay:``,mollie_methods_ideal:`Paga dall’app della tua banca olandese.`,mollie_methods_belfius:`Conferma il pagamento nell’app Belfius.`,mollie_methods_eps:`Paga dal tuo conto bancario austriaco.`,mollie_methods_kbc:`Conferma il pagamento nell’app KBC o CBC.`,mollie_methods_przelewy24:`Paga dal tuo conto bancario polacco.`,mollie_methods_bancontact:`Paga con la tua carta di debito belga.`,mollie_methods_bancomatpay:`Conferma il pagamento nell’app Bancomat Pay.`,mollie_methods_multibanco:`Paga con un riferimento Multibanco in Portogallo.`,mollie_methods_mbway:`Conferma il pagamento nell’app MB Way.`,mollie_methods_paybybank:`Conferma il pagamento nell’app della tua banca.`,mollie_methods_satispay:`Conferma il pagamento nell’app Satispay.`,mollie_methods_billie:`Paga in seguito per gli ordini aziendali idonei.`,banktransfer:`Spediamo non appena riceviamo il pagamento, solitamente entro 1–3 giorni.`}}},ne=/^\/((de|fr|it)\/)?onestepcheckout/,v=_[/^\/(de|fr|it)\//.exec(location.pathname)?.[1]||`en`],y=e=>`€`+Number(e).toFixed(2).replace(`.`,v.decimal),b={mollie_methods_paypal:`PayPal`,mollie_methods_klarna:`Klarna`,mollie_methods_kbc:`KBC / CBC`,...v.titles},x=[...s.en,...s.de,...s.fr,...s.it],S=x.join(`|`),C=e=>{let t=e||``,n=RegExp(`\\b(${S})\\s+(\\d{1,2})\\b`,`i`).exec(t)||RegExp(`\\b(\\d{1,2})(?:\\.|er|º|°)?\\s+(${S})`,`i`).exec(t);if(!n)return null;let[r,i]=/\d/.test(n[1])?[n[2],n[1]]:[n[1],n[2]];return{day:Number(i),month:x.findIndex(e=>e.toLowerCase()===r.toLowerCase())%12}},w=`data:image/png;base64,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`,T=`<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="17.9999" height="18" viewBox="0 0 17.9999 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group">
<path id="Vector" d="M17.8454 0.154459C17.6395 -0.0514862 17.3056 -0.0514862 17.0996 0.154459L15.5637 1.69043C15.4681 1.64481 15.3683 1.60888 15.2656 1.58321L10.4924 0.403962C9.9564 0.269982 9.38068 0.429415 8.98999 0.820106L0.462611 9.33346C-0.154204 9.95031 -0.154204 10.954 0.462611 11.5709L6.42907 17.5373C7.04592 18.1542 8.04963 18.1542 8.66652 17.5373L17.1799 9.00991C17.5706 8.61922 17.73 8.04351 17.596 7.50748L16.4168 2.73432C16.391 2.63164 16.3551 2.53178 16.3095 2.43624L17.8455 0.900262C18.0514 0.694317 18.0514 0.360404 17.8454 0.154459ZM16.5727 7.76335C16.6174 7.94201 16.5642 8.13389 16.434 8.26415L7.92064 16.7915C7.71502 16.9972 7.38043 16.9972 7.17481 16.7915L1.20838 10.8251C1.00275 10.6194 1.00275 10.2849 1.20838 10.0792L9.73579 1.56591C9.83553 1.46617 9.97144 1.41164 10.1099 1.41164C10.1522 1.41164 10.1948 1.41674 10.2366 1.42718L14.7201 2.534L13.45 3.80402C12.8621 3.52397 12.1358 3.62669 11.6497 4.11276C11.0328 4.72965 11.0328 5.73332 11.6497 6.35021C11.9581 6.65863 12.3633 6.81286 12.7684 6.81286C13.1735 6.81286 13.5787 6.65867 13.8871 6.35021C14.3732 5.86407 14.4759 5.13781 14.1958 4.54982L15.4658 3.27981L16.5727 7.76335ZM13.1413 5.60444C12.9357 5.81003 12.6011 5.81007 12.3955 5.60444C12.1899 5.39885 12.1899 5.06423 12.3955 4.85864C12.4444 4.80964 12.5026 4.77079 12.5666 4.74433C12.6306 4.71786 12.6991 4.70431 12.7684 4.70444C12.9034 4.70444 13.0385 4.75584 13.1412 4.8586L13.1413 4.85864L13.1413 4.85867C13.3469 5.06427 13.3469 5.39885 13.1413 5.60444Z" fill="#1B7A3E"/>
<path id="Vector_2" d="M8.66646 6.35024C8.0496 5.73339 7.04589 5.73339 6.42901 6.35024C5.81219 6.9671 5.81219 7.97081 6.42901 8.58769C7.04586 9.20455 8.0496 9.20455 8.66646 8.58769C9.28334 7.97081 9.28334 6.96713 8.66646 6.35024ZM7.92069 7.84185C7.71506 8.04748 7.38048 8.04748 7.17488 7.84185C6.96929 7.63623 6.96922 7.30164 7.17485 7.09605C7.38048 6.89046 7.71502 6.89042 7.92069 7.09605C8.12628 7.30164 8.12628 7.63623 7.92069 7.84185ZM9.41226 11.5709C8.79397 10.9526 7.79325 10.9525 7.17485 11.5709C6.55796 12.1878 6.55796 13.1914 7.17485 13.8083C7.79317 14.4266 8.7939 14.4267 9.41226 13.8083C10.0291 13.1914 10.0291 12.1878 9.41226 11.5709ZM8.66646 13.0625C8.46041 13.2686 8.12674 13.2686 7.92065 13.0625C7.71506 12.8569 7.71506 12.5223 7.92065 12.3167C8.12674 12.1106 8.46037 12.1106 8.66646 12.3167C8.87205 12.5223 8.87205 12.8569 8.66646 13.0625ZM11.801 9.64815C11.7688 9.35867 11.508 9.15005 11.2186 9.18222L4.50631 9.92803C4.21683 9.96019 4.00822 10.2209 4.04039 10.5104C4.07037 10.7801 4.29868 10.9796 4.5639 10.9796C4.58335 10.9796 4.60298 10.9785 4.62278 10.9764L11.3351 10.2305C11.6245 10.1983 11.8332 9.93762 11.801 9.64815Z" fill="#1B7A3E"/>
</g>
</svg>
`,E=`<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Icon">
<path id="Vector" d="M4.25 10.328L8.625 14.703L16.75 4.70301" stroke="#1B7A3E" stroke-width="2.125" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`;function D(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)D(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function O(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...i}=t??{},a=document.createElement(e);for(let[e,t]of Object.entries(i))e.startsWith(`on`)&&typeof t==`function`?a.addEventListener(e.slice(2).toLowerCase(),t):t===!0?a.setAttribute(e,``):t!==!1&&t!=null&&a.setAttribute(e,String(t));return D(a,r),a}var k=O,re=(e,t,n,r)=>O(`ul`,{class:`crs-summary-items`,children:e.map(e=>{let i=n.find(t=>String(t.item_id)===String(e.item_id))?.extension_attributes?.count_in_package;return k(`li`,{class:`crs-summary-item`,children:[k(`span`,{class:`crs-summary-item__img`,children:[O(`img`,{src:t[e.item_id]?.src,alt:``}),O(`b`,{class:`crs-summary-item__qty`,children:String(e.qty)})]}),k(`span`,{class:`crs-summary-item__text`,children:[O(`span`,{class:`crs-summary-item__name`,children:e.name}),i?O(`small`,{class:`crs-summary-item__pack`,children:v.perPack(i)}):null,O(`small`,{class:`crs-summary-item__ships`,children:r})]}),O(`span`,{class:`crs-summary-item__price`,children:y(e.row_total_incl_tax)})]})})}),ie=()=>k(`div`,{class:`crs-guarantee`,children:[O(`img`,{class:`crs-guarantee__icon`,src:w,alt:``}),O(`span`,{class:`crs-guarantee__text`,children:v.guarantee})]}),ae=(e,t)=>k(`button`,{type:`button`,class:`crs-summary-toggle`,onClick:t,children:[O(`span`,{class:`crs-summary-toggle__label`,children:e}),k(`span`,{class:`crs-summary-toggle__end`,children:[O(`span`,{class:`crs-summary-toggle__free`,children:v.freeDelivery}),O(`b`,{class:`crs-summary-toggle__total`})]})]}),A=(e,t)=>{let n=O(`span`,{class:e});return n.innerHTML=t,n},oe=()=>k(`div`,{class:`crs-free-banner`,children:[A(`crs-free-banner__icon`,E),k(`span`,{class:`crs-free-banner__text`,children:[O(`b`,{children:v.freeApplied}),O(`span`,{class:`crs-free-banner__note`})]})]}),se=e=>O(`div`,{class:`crs-coupon-wrap`,children:k(`div`,{class:`crs-coupon`,children:[k(`span`,{class:`crs-coupon__code`,children:[A(`crs-coupon__icon`,T),O(`b`,{class:`crs-coupon__name`})]}),O(`span`,{class:`crs-coupon__applied`}),O(`button`,{type:`button`,class:`crs-coupon__remove`,onClick:e,children:v.remove})]})}),ce=()=>O(`p`,{class:`crs-discount-hint`,children:v.discountHint}),le=()=>k(`span`,{class:`crs-pm-badges`,children:[O(`b`,{children:`VISA`}),O(`b`,{children:`MC`}),O(`b`,{children:`AMEX`})]});n({name:`test`,dev:`OS`}),a(`exp_checkout`);var j=window,ue=[`mollie_methods_paypal`,`mollie_methods_creditcard`,`mollie_methods_googlepay`,`mollie_methods_klarna`],de={AD:29.95,AT:8.95,BE:6.95,BG:19.95,HR:12.95,CY:22.95,CZ:11.95,DK:11.95,EE:16.95,FI:15.95,FR:8.95,DE:5.95,GR:16.95,HU:11.95,IE:11.95,IT:9.95,LV:15.95,LI:32.95,LT:13.95,LU:8.95,MT:23.95,MC:22.95,NL:5.95,PL:8.95,PT:11.95,RO:11.95,SM:29.95,SK:13.95,SI:11.95,ES:10.95,SE:13.95,CH:32.95},M=e=>{let t=C(e);return t?v.ships(t.day,t.month):``},fe=[`mollie_methods_applepay`,`mollie_methods_googlepay`],N=(e,t=15e3)=>new Promise((n,r)=>{let i=Date.now(),a=setInterval(()=>{e()?(clearInterval(a),n()):Date.now()-i>t&&(clearInterval(a),r(Error(`checkout did not initialise`)))},50)}),P=!1;(async()=>{if(!ne.test(location.pathname)||document.documentElement.classList.contains(`crs-osc`))return;document.documentElement.classList.add(`crs-osc`);let n=document.createElement(`link`);n.rel=`stylesheet`,n.href=`https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Inter:wght@500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`,document.head.appendChild(n);let r=document.createElement(`style`);r.textContent=ee,document.head.appendChild(r);let a=document.documentElement.style;a.setProperty(`--crs-t-standard`,JSON.stringify(v.standardDelivery)),a.setProperty(`--crs-t-free`,JSON.stringify(v.free)),a.setProperty(`--crs-t-total`,JSON.stringify(v.total)),a.setProperty(`--crs-t-vat`,JSON.stringify(v.inclVat)),await N(()=>document.querySelector(`#co-payment-form`)&&document.querySelector(`#co-shipping-form`)&&document.querySelector(`#co-shipping-method-form`));let[s,c,te,l,u,d,f,p,m]=await new Promise((e,t)=>j.require([`Magento_Checkout/js/model/step-navigator`,`uiRegistry`,`Magento_Checkout/js/action/get-payment-information`,`Magento_Checkout/js/action/set-shipping-information`,`Magento_Checkout/js/model/payment/additional-validators`,`Magento_Checkout/js/model/quote`,`jquery`,`Magento_Ui/js/model/messageList`,`Magento_Checkout/js/action/select-billing-address`],(...t)=>e(t),t));await N(()=>s.steps().length>=3&&c.get(`checkout.steps.cart-step`));let h=c.get(`checkout.steps.cart-step`),g=!h.allow_checkout,_=()=>{h.isVisibleStep(!1),h.isVisibleEditLink(!1),s.steps().forEach(e=>e.code!==`step_cart`&&e.isVisible(!0)),document.body.classList.add(`step-shipping`,`step-payment`)};_(),s.navigateToStep=_,s.navigateTo=_,s.next=_;let x=p.errorMessages.subscribe(()=>p.errorMessages.remove(e=>/shipping address is missing/i.test(e)));te(f.Deferred());let S=c.get(`checkout.steps.shipping-step.shippingAddress`),w=c.get(`checkout.steps.shipping-step.shippingAddress.billing-address-form`),T=0,E=-1,D=-1,O=Promise.resolve(),k=0,A=()=>{let e=document.querySelector(`#customer-email`),t=[...document.querySelectorAll(`#co-shipping-form .field._required input, #co-shipping-form .field._required select`)];return!!d.shippingMethod()&&(!e||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e.value))&&t.filter(e=>e.offsetHeight).every(e=>e.value.trim())},F=!1;document.querySelector(`#checkout-step-shipping`).addEventListener(`click`,e=>{let t=e.target.closest(`.billing-address-same-as-shipping-block input`);t&&(F=!t.checked)},!0),d.shippingAddress.subscribe(e=>F||!e||m(e));let I=()=>{if(w.isAddressSameAsShipping())return;let e=[...document.querySelectorAll(`#checkout-step-shipping .checkout-billing-address .field._required input, #checkout-step-shipping .checkout-billing-address .field._required select`)].filter(e=>e.offsetHeight);e.length&&e.every(e=>e.value.trim())&&w.updateAddress()};w.isAddressSameAsShipping.subscribe(e=>{e===F&&(F?(w.isAddressSameAsShipping(!1),w.useShippingAddress(),I()):m(d.shippingAddress()))});let L=()=>{let e=T;return D=e,O=O.then(()=>new Promise(t=>{F?I():m(d.shippingAddress()),l().done(()=>{E=e,x.dispose()}).always(()=>t())})),O},R=()=>{T++,clearTimeout(k),k=window.setTimeout(()=>A()&&S.validateShippingInformation()&&L(),400)};i(`#checkout-step-shipping`).on(`change`,e=>e.target.closest(`.checkout-billing-address`)||R()),i(`#co-shipping-method-form`).on(`change`,R);let z=0;i(`#checkout-step-shipping`).on(`change`,`.checkout-billing-address`,()=>{clearTimeout(z),z=window.setTimeout(I,400)});let B=e=>e?`${e.carrier_code}_${e.method_code}`:``,V=B(d.shippingMethod());d.shippingMethod.subscribe(e=>{B(e)!==V&&(V=B(e),R())}),R();let pe=()=>document.querySelector(`.place-order-button`).click();u.registerValidator({validate:()=>g?(o(`#checkout .message-error`,100),!1):F&&(w.updateAddress(),w.source.get(`params.invalid`))?(o(`#checkout-step-shipping .checkout-billing-address`,100),!1):E===T?!0:S.validateShippingInformation()?(clearTimeout(k),(D===T?O:L()).then(()=>{E===T&&(fe.includes(d.paymentMethod()?.method)?o(`.place-order-button`,100):pe())}),!1):(o(`#shipping`,100),!1)}),P=!0,i(`#shipping > .step-title > span`).text(v.contact);let H=document.createElement(`div`);H.className=`step-title crs-title`,H.textContent=v.deliveryAddress,(await t(`#co-shipping-form`)).before(H),i(`#opc-shipping_method .step-title > span`).text(v.deliveryMethod),i(`#checkout-step-payment > .step-title`).text(v.payment),Object.entries(v.labels).forEach(([e,t])=>i(`#co-shipping-form .field[name="shippingAddress.${e}"] > .label span`).text(t)),i(`#checkout-step-shipping .billing-address-same-as-shipping-block label span`).text(v.billingSame),i(`#customer-email-fieldset .note span`).text(v.emailNote),i(`#block-discount-heading span`).text(v.discountHeading);let U=j.checkoutConfig,W=await t(`.opc-block-summary > .title`);W.textContent=v.summaryTitle,W.after(re(U.quoteItemData,U.imageData,d.totals().items,M(d.shippingMethod()?.carrier_title))),(await t(`.opc-block-summary > .table-totals`)).after(ie());let me=c.get(`checkout.sidebar.summary.discount`);(await t(`#discount-form`)).after(ce());let G=se(()=>me.cancel());(await t(`.opc-block-summary > .discount-code`)).after(G);let he=ae(v.summaryTitle,()=>{e(`exp_checkout_summary`,document.documentElement.classList.toggle(`crs-summary-closed`)?`Closed order summary`:`Opened order summary`,`click`,`checkout`)});(await t(`#checkout .opc-sidebar`)).before(he);let K=()=>document.querySelectorAll(`.table-checkout-shipping-method td.col-carrier`).forEach(e=>{let t=C(e.textContent||``),n=t?v.carrier(t.day,t.month):e.textContent;e.textContent!==n&&(e.textContent=n)});t(`.table-checkout-shipping-method td.col-carrier`).then(K),new MutationObserver(K).observe(await t(`#co-shipping-method-form`),{childList:!0,characterData:!0,subtree:!0});let q=()=>i(`.crs-summary-item__ships`).text(M(d.shippingMethod()?.carrier_title));d.shippingMethod.subscribe(q),q();let J=c.get(`checkout.steps.shipping-step.shippingAddress.free-shipping-bar`),Y=oe();(await t(`#checkout-step-shipping_method`)).before(Y);let ge=()=>`crs-paid-shipping-`+(d.shippingAddress()?.countryId||``),X=()=>{let e=Number(d.shippingMethod()?.price_incl_tax);e>0&&sessionStorage.setItem(ge(),String(e))},Z=()=>{let e=!!J.isShippingFree();document.documentElement.classList.toggle(`crs-free-ship`,e),Y.querySelector(`.crs-free-banner__note`).textContent=v.freeNote(y(J.thresholdAmount()).replace(/[.,]00(?=\D*$)/,``)),Q()};d.shippingMethod.subscribe(X),X();let Q=()=>{let e=d.totals();if(!e)return;i(`.table-totals .totals.sub th`).text(v.subtotal(Number(e.items_qty)));let t=E<0&&Number(d.shippingMethod()?.price_incl_tax)||0,n=y(Number(e.grand_total)+t);t&&i(`.table-totals .grand.totals.incl .price`).text(n);let r=document.querySelector(`.table-totals .totals.shipping td.amount .price`);if(r){let n=sessionStorage.getItem(ge())||de[d.shippingAddress()?.countryId||``];r.innerHTML=document.documentElement.classList.contains(`crs-free-ship`)?(n?`<s class="crs-was">${y(n)}</s> `:``)+`<b class="crs-free">${v.free}</b>`:y(Number(e.shipping_incl_tax)+t)}i(`.table-totals .totals.discount th`).text(v.discount);let a=e.coupon_code||``;if(document.documentElement.classList.toggle(`crs-coupon-applied`,!!a),a){let t=Math.abs(Number(e.discount_amount)),n=t/Number(e.subtotal_incl_tax)*100;G.querySelector(`.crs-coupon__name`).textContent=a,G.querySelector(`.crs-coupon__applied`).textContent=v.applied(Math.abs(n-Math.round(n))<.1?v.percent(Math.round(n)):y(t))}i(`.crs-summary-toggle__total`).text(n);let o=document.querySelector(`.place-order-button`);o&&o.dataset.crsLabel!==v.pay(n)&&(o.dataset.crsLabel=v.pay(n))},_e=0;new MutationObserver(()=>{clearTimeout(_e),_e=window.setTimeout(Q,50)}).observe(await t(`#checkout-step-payment`),{childList:!0,subtree:!0});let ve=()=>{let e=d.shippingAddress()?.countryId,t=document.querySelector(`#co-shipping-form select[name="country_id"] option[value="${e}"]`)?.textContent;i(`.table-totals .totals.shipping .label`).text(v.deliveryTo(t||``,e||``))};d.totals.subscribe(()=>setTimeout(Q)),d.shippingMethod.subscribe(()=>setTimeout(Q)),d.shippingAddress.subscribe(ve),J.isShippingFree.subscribe(Z),J.thresholdAmount.subscribe(Z),Z(),ve();let ye=!1,$=()=>{let t=document.querySelector(`#checkout-payment-method-load .payment-group`);if(!t)return;let n=[...t.querySelectorAll(`:scope > .payment-method`)];if(!n.length)return;n.forEach(e=>{let t=e.querySelector(`input[type="radio"]`)?.value;if(!t)return;let n=ue.indexOf(t);e.classList.toggle(`crs-pm-top`,n>-1),e.classList.toggle(`crs-pm-more`,n===-1),e.style.order=String(n>-1?n+1:10);let r=e.querySelector(`.payment-method-title .label`),i=r.querySelector(`span`);b[t]&&i.textContent!==b[t]&&(i.textContent=b[t]);let a=v.methods[t];if(a&&!r.querySelector(`.crs-pm-desc`)){let e=document.createElement(`span`);e.className=`crs-pm-desc`,e.textContent=a,r.appendChild(e)}t===`mollie_methods_creditcard`&&!e.querySelector(`.crs-pm-badges`)&&e.querySelector(`.payment-method-title`).append(le())}),!ye&&t.querySelector(`.crs-pm-more input:checked`)&&t.classList.add(`crs-pm-expanded`);let r=t.querySelector(`.crs-pm-toggle`);r||(r=document.createElement(`button`),r.type=`button`,r.className=`crs-pm-toggle`,r.style.order=`9`,r.addEventListener(`click`,()=>{let n=t.classList.toggle(`crs-pm-expanded`);ye=!n,$(),e(`exp_checkout_more_payments`,n?`Expanded more payment methods`:`Collapsed more payment methods`,`click`,`checkout`)}),t.appendChild(r));let i=n.filter(e=>e.classList.contains(`crs-pm-more`)).length,a=t.querySelector(`.crs-pm-more input:checked`)?.closest(`.payment-method`)?.querySelector(`.payment-method-title .label > span`)?.textContent?.trim(),o=(t.classList.contains(`crs-pm-expanded`)?v.hidePayments:v.morePayments(i))+(a?` / ${a}`:``);r.textContent!==o&&(r.textContent=o)},be=await t(`#checkout-payment-method-load`),xe=0;new MutationObserver(()=>{clearTimeout(xe),xe=window.setTimeout($,100)}).observe(be,{childList:!0,subtree:!0}),be.addEventListener(`change`,e=>{e.target.matches(`.payment-method input[type="radio"]`)&&$()}),$(),g&&document.documentElement.classList.add(`crs-below-min`)})().catch(e=>{P||document.documentElement.classList.remove(`crs-osc`),`${e}`})})();
