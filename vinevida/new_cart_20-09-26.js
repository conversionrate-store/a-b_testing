(function() {
  "use strict";
  const $ = `#mini-cart,
.mini-cart {
  display: none !important;
}

.vvsc-overlay {
  position: fixed;
  inset: 0;
  z-index: 2147483647;
  visibility: hidden;
  pointer-events: none;
  font-family: "Manrope", sans-serif;
}
.vvsc-overlay.vvsc-is-open {
  visibility: visible;
  pointer-events: auto;
}
.vvsc-overlay.vvsc-is-open .vvsc-backdrop {
  opacity: 1;
}
.vvsc-overlay.vvsc-is-open .vvsc-panel {
  transform: translateX(0);
}

.vvsc-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.vvsc-panel {
  position: absolute;
  top: 0;
  right: 0;
  width: 460px;
  max-width: 100%;
  height: 100dvh;
  background: #fff;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}
@media (max-width: 767px) {
  .vvsc-panel {
    width: 100vw;
  }
}

.vvsc-header-block {
  padding: 32px 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
}

.vvsc-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vvsc-header-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.vvsc-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000;
}

.vvsc-item-count {
  font-size: 14px;
  color: #5f6368;
}

.vvsc-close {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  line-height: 0;
}

.vvsc-progress-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.vvsc-progress-text {
  margin: 0;
  font-size: 14px;
  color: #5f6368;
}
.vvsc-progress-text strong {
  font-weight: 700;
  color: #333;
}
.vvsc-progress-text .vvsc-unlocked {
  color: #34a853;
}

.vvsc-progress-track {
  background: #efefef;
  height: 4px;
  width: 100%;
}

.vvsc-progress-fill {
  background: #101010;
  height: 4px;
  width: 0%;
  transition: width 0.3s ease;
}

.vvsc-body {
  flex: 1;
  overflow-y: auto;
  padding: 24px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.vvsc-items-wrapper {
  display: flex;
  flex-direction: column;
}

.vvsc-item {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #e7e7eb;
  position: relative;
}
.vvsc-item:first-child {
  padding-top: 0;
}

.vvsc-item-image {
  width: 100px;
  height: 90px;
  flex-shrink: 0;
}
.vvsc-item-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.vvsc-item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  padding-right: 20px;
}

.vvsc-item-title {
  font-size: 15px;
  font-weight: 600;
  line-height: 22.5px;
  color: #000;
  text-decoration: none;
  display: block;
}

.vvsc-item-meta {
  font-size: 14px;
  color: #5f6368;
  margin-top: 4px;
}
.vvsc-item-meta strong {
  font-weight: 700;
}

.vvsc-item-subscription {
  font-size: 12px;
  color: #5f6368;
  margin-top: 2px;
}

.vvsc-item-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}

.vvsc-qty-stepper {
  display: flex;
  align-items: center;
  border: 1px solid #000;
  min-height: 36px;
}

.vvsc-qty-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 12px;
  height: 100%;
  display: flex;
  align-items: center;
  color: #000;
}

.vvsc-qty-value {
  font-size: 16px;
  min-width: 20px;
  text-align: center;
}

.vvsc-item-price {
  font-size: 16px;
  font-weight: 600;
  color: #000;
}

.vvsc-item-remove {
  position: absolute;
  top: 16px;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  line-height: 0;
}
.vvsc-item-remove svg {
  width: 14px;
  height: 14px;
}

.vvsc-upsell-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.vvsc-upsell-section.vvsc-hidden {
  display: none;
}

.vvsc-upsell-heading {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000;
}

.vvsc-upsell-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.vvsc-upsell-card {
  border: 1px solid #e2e3e4;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.vvsc-upsell-image {
  display: block;
  aspect-ratio: 1/1;
}
.vvsc-upsell-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.vvsc-upsell-title {
  font-size: 15px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.vvsc-upsell-price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vvsc-upsell-prices {
  display: flex;
  align-items: center;
  gap: 4px;
}

.vvsc-upsell-price {
  font-size: 16px;
  font-weight: 600;
  color: #000;
}

.vvsc-upsell-compare {
  font-size: 14px;
  color: #5f6368;
  text-decoration: line-through;
}

.vvsc-upsell-badge {
  background: #34a853;
  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  padding: 3px 8px;
}

.vvsc-upsell-add {
  background: #000;
  color: #fff;
  border: 1px solid #000;
  min-height: 36px;
  font-size: 12px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
}

.vvsc-note-block {
  border: 1px solid #e2e3e4;
  flex-shrink: 0;
}

.vvsc-note-toggle {
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: inherit;
  font-size: 12px;
  line-height: 22.44px;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  color: #000;
}
.vvsc-note-toggle svg {
  flex-shrink: 0;
  transition: transform 0.2s ease;
}
.vvsc-note-toggle[aria-expanded=true] svg {
  transform: rotate(45deg);
}

.vvsc-note-body {
  display: none;
  padding: 0 16px 12px;
}
.vvsc-note-body.vvsc-is-open {
  display: block;
}

.vvsc-note-input {
  width: 100%;
  border: 1px solid #e2e3e4;
  padding: 8px;
  font-family: inherit;
  font-size: 12px;
  color: #000;
  resize: vertical;
}

.vvsc-footer {
  flex-shrink: 0;
  padding: 16px 32px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.vvsc-subtotal-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.vvsc-subtotal-label {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.vvsc-subtotal-title {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #000;
}

.vvsc-subtotal-count {
  font-size: 14px;
  color: #5f6368;
}

.vvsc-subtotal-amount {
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: #000;
}

.vvsc-subtotal-row--compact .vvsc-subtotal-title {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.24px;
}
.vvsc-subtotal-row--compact .vvsc-subtotal-count {
  font-size: 12px;
}
.vvsc-subtotal-row--compact .vvsc-subtotal-amount {
  font-size: 12px;
  text-transform: none;
}

.vvsc-shipping-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #000;
}
.vvsc-shipping-row strong {
  font-weight: 700;
}
.vvsc-shipping-row a {
  color: #3086c8;
  text-decoration: underline;
}
.vvsc-shipping-row.vvsc-shipping-row--center {
  justify-content: center;
  text-align: center;
}

.vvsc-total-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid #e7e7eb;
}
.vvsc-total-row.vvsc-hidden {
  display: none;
}

.vvsc-total-label,
.vvsc-total-amount {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 24px;
  color: #000;
}

.vvsc-tax-note {
  margin: 0;
  font-size: 12px;
  color: #5f6368;
}
.vvsc-tax-note.vvsc-hidden {
  display: none;
}

.vvsc-checkout-btn {
  background: #000;
  color: #fff;
  text-align: center;
  padding: 12px 15px;
  font-size: 12px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
}

.vvsc-footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.vvsc-view-cart {
  font-size: 12px;
  color: #3086c8;
  text-decoration: underline;
}

.vvsc-secure {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #000;
}
.vvsc-secure svg {
  flex-shrink: 0;
}

body.vvsc-body-locked {
  overflow: hidden;
}

/*# sourceMappingURL=style.css.map */
`, u = (s, n, t, e = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: n,
      event_type: t,
      event_loc: e
    }), y(`Event: ${s} | ${n} | ${t} | ${e}`, "success");
  }, E = (s) => new Promise((n) => {
    const t = document.querySelector(s);
    t && n(t);
    const e = new MutationObserver(() => {
      const i = document.querySelector(s);
      i && (n(i), e.disconnect());
    });
    e.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), L = ({ name: s, dev: n }) => {
    const t = s.toLowerCase().replace(/\s/g, "_");
    u(`${t}_started`, `Experiment ${s} started`, "other", t), console.log(
      `%c EXP: ${s} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, y = (s, n = "info") => {
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
    console.log(`%c>>> ${s}`, `${t} font-size: 16px; font-weight: 600`);
  }, k = "FREESHIP100", _ = [
    "no-185-fall-is-in-the-air-fragrance-oil",
    "no-185-fall-is-in-the-air-diffuser-fragrance-oil"
  ], C = 'Taxes and <a href="https://www.vinevida.com/policies/shipping-policy" target="_blank" rel="noopener">shipping</a> calculated at checkout', f = {
    close: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M15 5L5 15M5 5l10 10" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
    decrease: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none">
    <path d="M10 0v2H0V0z" fill="currentColor"/>
  </svg>`,
    increase: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M5 0v10M0 5h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
    lock: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5V3.5a3 3 0 0 1 6 0V5h.5A1.5 1.5 0 0 1 11 6.5v6A1.5 1.5 0 0 1 9.5 14h-7A1.5 1.5 0 0 1 1 12.5v-6A1.5 1.5 0 0 1 2.5 5H3zm1.2-1.5V5h3.6V3.5a1.8 1.8 0 0 0-3.6 0z" fill="black"/>
  </svg>`,
    plus: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 0v12M0 6h12" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
  </svg>`
  }, T = (s) => {
    const n = `$${(s.line_price / 100).toFixed(2)}`, t = [
      s.variant_title && s.variant_title !== "Default Title" ? s.variant_title : "",
      s.product_type
    ].filter(Boolean).join(" &middot; "), e = s.selling_plan_allocation ? `Recurring Subscription Every ${s.selling_plan_allocation.selling_plan.name}` : "";
    return (
      /* HTML */
      `
    <div class="vvsc-item" data-key="${s.key}">
      <div class="vvsc-item-image">
        <img src="${s.image || ""}" alt="${s.title}" loading="lazy" width="100" height="100" />
      </div>
      <div class="vvsc-item-info">
        <div class="vvsc-item-top">
          <a href="${s.url}" class="vvsc-item-title" target="_blank" rel="noopener"
            >${s.product_title || s.title}</a
          >
          ${t ? `<div class="vvsc-item-meta">${t}</div>` : ""}
          ${e ? `<div class="vvsc-item-subscription">${e}</div>` : ""}
        </div>
        <div class="vvsc-item-bottom">
          <div class="vvsc-qty-stepper">
            <button class="vvsc-qty-btn" data-action="decrease" aria-label="Decrease quantity">
              ${f.decrease}
            </button>
            <span class="vvsc-qty-value">${s.quantity}</span>
            <button class="vvsc-qty-btn" data-action="increase" aria-label="Increase quantity">
              ${f.increase}
            </button>
          </div>
          <span class="vvsc-item-price">${n}</span>
        </div>
      </div>
      <button class="vvsc-item-remove" data-action="remove" aria-label="Remove item">${f.close}</button>
    </div>
  `
    );
  }, q = (s) => {
    const n = s.compareAtPriceCents !== null && s.compareAtPriceCents > s.priceCents, t = n ? Math.round((1 - s.priceCents / s.compareAtPriceCents) * 100) : 0;
    return (
      /* HTML */
      `
    <div class="vvsc-upsell-card">
      <a href="/products/${s.handle}" target="_blank" rel="noopener" class="vvsc-upsell-image">
        <img src="${s.image}" alt="${s.title}" loading="lazy" />
      </a>
      <a href="/products/${s.handle}" target="_blank" rel="noopener" class="vvsc-upsell-title"
        >${s.title}</a
      >
      <div class="vvsc-upsell-price-row">
        <div class="vvsc-upsell-prices">
          <span class="vvsc-upsell-price">$${(s.priceCents / 100).toFixed(2)}</span>
          ${n ? `<span class="vvsc-upsell-compare">$${(s.compareAtPriceCents / 100).toFixed(2)}</span>` : ""}
        </div>
        ${n ? `<span class="vvsc-upsell-badge">${t}% off</span>` : ""}
      </div>
      <button class="vvsc-upsell-add" data-action="add-upsell" data-variant-id="${s.variantId}">Add</button>
    </div>
  `
    );
  }, z = (
    /* HTML */
    `
  <div class="vvsc-overlay" id="vvsc-slide-cart" role="dialog" aria-modal="true" aria-label="Shopping cart">
    <div class="vvsc-backdrop" aria-hidden="true"></div>

    <div class="vvsc-panel">
      <div class="vvsc-header-block">
        <div class="vvsc-header">
          <div class="vvsc-header-title">
            <h2 class="vvsc-title">My cart</h2>
            <span class="vvsc-item-count">0 items</span>
          </div>
          <button class="vvsc-close" aria-label="Close cart">${f.close}</button>
        </div>

        <div class="vvsc-progress-block">
          <p class="vvsc-progress-text"></p>
          <div class="vvsc-progress-track">
            <div class="vvsc-progress-fill" style="width: 0%"></div>
          </div>
        </div>
      </div>

      <div class="vvsc-body">
        <div class="vvsc-items-wrapper"></div>

        <div class="vvsc-upsell-section vvsc-hidden">
          <p class="vvsc-upsell-heading"></p>
          <div class="vvsc-upsell-list"></div>
        </div>

        <div class="vvsc-note-block">
          <button type="button" class="vvsc-note-toggle" aria-expanded="false">
            <span>Add a note to this order</span>
            ${f.plus}
          </button>
          <div class="vvsc-note-body">
            <textarea class="vvsc-note-input" placeholder="How can we help you?" rows="3"></textarea>
          </div>
        </div>
      </div>

      <div class="vvsc-footer">
        <div class="vvsc-subtotal-row">
          <div class="vvsc-subtotal-label">
            <span class="vvsc-subtotal-title">Subtotal</span>
            <span class="vvsc-subtotal-count">0 items</span>
          </div>
          <span class="vvsc-subtotal-amount">$0.00</span>
        </div>
        <div class="vvsc-shipping-row vvsc-shipping-row--center">
          <span class="vvsc-shipping-label">${C}</span>
          <span class="vvsc-shipping-amount"></span>
        </div>
        <div class="vvsc-total-row vvsc-hidden">
          <span class="vvsc-total-label">Estimated total</span>
          <span class="vvsc-total-amount"></span>
        </div>
        <p class="vvsc-tax-note vvsc-hidden">Taxes calculated at checkout</p>
        <a class="vvsc-checkout-btn" href="/checkout">Checkout</a>
        <div class="vvsc-footer-links">
          <a class="vvsc-view-cart" href="/cart">View full cart</a>
          <span class="vvsc-secure">${f.lock} 100% Secure Payments</span>
        </div>
      </div>
    </div>
  </div>
`
  ), S = "vvsc_zip_guess", I = "https://ipwho.is/", j = async (s = 4e3) => {
    try {
      const n = sessionStorage.getItem(S);
      if (n) return JSON.parse(n);
    } catch {
    }
    try {
      const n = new AbortController(), t = setTimeout(() => n.abort(), s), e = await fetch(I, { signal: n.signal });
      if (clearTimeout(t), !e.ok) return null;
      const i = await e.json();
      if (!(i != null && i.success)) return null;
      const o = String(i.country_code || ""), c = String(i.postal || "").trim();
      if (o !== "US" || !/^\d{5}$/.test(c)) return null;
      const a = { zip: c, countryCode: o };
      try {
        sessionStorage.setItem(S, JSON.stringify(a));
      } catch {
      }
      return a;
    } catch {
      return y("Vinevida slide cart: IP geolocation unavailable, skipping shipping estimate", "warn"), null;
    }
  }, b = /* @__PURE__ */ new Map(), P = async (s, n = 4e3) => {
    var t;
    if (b.has(s)) return b.get(s) ?? null;
    try {
      const e = new AbortController(), i = setTimeout(() => e.abort(), n), o = await fetch(`https://api.zippopotam.us/us/${s}`, { signal: e.signal });
      if (clearTimeout(i), !o.ok)
        return b.set(s, null), null;
      const c = await o.json(), a = (t = c == null ? void 0 : c.places) == null ? void 0 : t[0], r = a == null ? void 0 : a["place name"], l = a == null ? void 0 : a["state abbreviation"], v = r && l ? { city: r, state: l } : null;
      return b.set(s, v), v;
    } catch {
      return null;
    }
  }, H = async (s, n, t, e = 4e3) => {
    try {
      const i = new AbortController(), o = setTimeout(() => i.abort(), e), c = new URLSearchParams({
        "shipping_address[zip]": s,
        "shipping_address[country]": n,
        "shipping_address[province]": t
      }), a = await fetch(`/cart/shipping_rates.json?${c}`, { signal: i.signal });
      if (clearTimeout(o), !a.ok) return null;
      const r = await a.json(), l = r == null ? void 0 : r.shipping_rates;
      if (!Array.isArray(l) || l.length === 0) return null;
      const v = l.filter((h) => Number(h.price) > 0), d = (v.length > 0 ? v : l).reduce((h, x) => Number(x.price) < Number(h.price) ? x : h), g = Math.round(Number(d.price) * 100);
      return Number.isFinite(g) ? { name: String(d.name || ""), priceCents: g } : null;
    } catch {
      return null;
    }
  };
  L({ name: "Slide-in Cart", dev: "AI" });
  class N {
    constructor() {
      this.overlay = null, this.cart = null, this.shippingRateCents = null, this.shippingRequestId = 0, this.init();
    }
    async init() {
      var t;
      await E("body"), document.head.insertAdjacentHTML("beforeend", `<style class="vvsc-style">${$}</style>`), document.body.insertAdjacentHTML("beforeend", z), this.overlay = document.getElementById("vvsc-slide-cart"), this.bindClose(), this.bindItemActions(), this.bindGlobalTriggers(), this.bindNote(), this.cart = await this.fetchCart(), this.updateBadge(this.cart.item_count);
      const n = (t = this.overlay) == null ? void 0 : t.querySelector(".vvsc-note-input");
      n && (n.value = this.cart.note ?? ""), this.renderShippingEstimate(), this.renderUpsell();
    }
    // FREE_SHIPPING_DISCOUNT_CODE has a real minimum-spend requirement in
    // Shopify (confirmed live: typing it in manually at checkout with a smaller
    // cart gets rejected). Queuing it reactively via /discount/<code> any time
    // the cart merely *currently* qualifies — the previous approach — turned
    // out to be unsafe: once queued, Shopify keeps it attached to that cart's
    // checkout even after the cart later drops back under the threshold and we
    // "remove" it again. Confirmed live: POST /cart/update.js with
    // {discount: ""} only edits what cart.js itself reports — a checkout
    // created afterwards from that same cart still had the code baked in, with
    // the same confusing "isn't valid for the items in your cart" banner.
    // There is no supported way to fully un-queue it once that's happened.
    // So instead of applying it during editing and hoping the cart doesn't
    // change before checkout, this only ever fires at the one moment that
    // actually matters — right as the visitor commits to checking out, past
    // which the cart can't change anymore — using whatever total is final at
    // that point. (Our own progress bar / "Estimated total" math never
    // depended on Shopify's own discount_codes state anyway, so nothing about
    // the cart's own UI needs this applied any earlier.)
    goToCheckout(n) {
      if (!(!!this.cart && this.cart.total_price >= 1e4)) {
        window.location.href = n;
        return;
      }
      fetch(`/discount/${k}`).catch(() => y(`Vinevida slide cart: failed to queue discount code ${k}`, "warn")).finally(() => {
        window.location.href = n;
      });
    }
    // ─── Cart API ─────────────────────────────────────────────────────────────
    async fetchCart() {
      return (await fetch("/cart.js")).json();
    }
    async updateCart(n, t) {
      const e = await fetch("/cart/change.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: n, quantity: t })
      });
      if (!e.ok) {
        const i = await e.json().catch(() => null);
        y(`Vinevida slide cart: /cart/change.js rejected (${(i == null ? void 0 : i.message) ?? e.status}), reloading cart`, "warn"), this.cart = await this.fetchCart(), this.updateBadge(this.cart.item_count), this.shippingRateCents = null, this.renderCart(), this.renderShippingEstimate(), this.renderUpsell();
        return;
      }
      this.cart = await e.json(), this.updateBadge(this.cart.item_count), this.shippingRateCents = null, this.renderCart(), this.renderShippingEstimate(), this.renderUpsell();
    }
    // Just fires the request — the `fetch` patch installed in bindGlobalTriggers()
    // is what refreshes the panel and opens it once this (like any other
    // /cart/add call site-wide) resolves successfully.
    async addToCart(n) {
      await fetch("/cart/add.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(n)
      });
    }
    // Shopify's own order-note field (node 20:786's "Add a note to this order")
    // — /cart/update.js is the only Ajax Cart API call that can set it, and it's
    // what makes the note actually reach the order at checkout, not just sit in
    // our own textarea.
    async updateNote(n) {
      const t = await fetch("/cart/update.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note: n })
      });
      t.ok && (this.cart = await t.json());
    }
    updateBadge(n) {
      document.querySelectorAll(".header__cart-count-alt").forEach((t) => {
        t.textContent = String(n);
      });
    }
    // ─── Rendering ────────────────────────────────────────────────────────────
    renderCart() {
      var i, o, c;
      if (!this.cart) return;
      const n = `${this.cart.item_count} ${this.cart.item_count === 1 ? "item" : "items"}`;
      (i = this.overlay) == null || i.querySelectorAll(".vvsc-item-count, .vvsc-subtotal-count").forEach((a) => {
        a.textContent = n;
      });
      const t = (o = this.overlay) == null ? void 0 : o.querySelector(".vvsc-subtotal-amount");
      t && (t.textContent = `$${(this.cart.total_price / 100).toFixed(2)}`);
      const e = (c = this.overlay) == null ? void 0 : c.querySelector(".vvsc-items-wrapper");
      e && (e.innerHTML = this.cart.items.map((a) => T(a)).join("")), this.renderProgressBar(this.cart.total_price), this.renderTotals();
    }
    // "Estimated total" + tax note (Figma node 184:180/174:172) only appear once
    // a real US shipping rate is known — otherwise the footer just shows the
    // "calculated at checkout" fallback already handled by renderShippingEstimate.
    renderTotals() {
      var o, c, a, r;
      const n = (o = this.overlay) == null ? void 0 : o.querySelector(".vvsc-total-row"), t = (c = this.overlay) == null ? void 0 : c.querySelector(".vvsc-total-amount"), e = (a = this.overlay) == null ? void 0 : a.querySelector(".vvsc-tax-note"), i = (r = this.overlay) == null ? void 0 : r.querySelector(".vvsc-subtotal-row");
      if (this.shippingRateCents === null || !this.cart) {
        n == null || n.classList.add("vvsc-hidden"), e == null || e.classList.add("vvsc-hidden"), i == null || i.classList.remove("vvsc-subtotal-row--compact");
        return;
      }
      t && (t.textContent = `$${((this.cart.total_price + this.shippingRateCents) / 100).toFixed(2)}`), n == null || n.classList.remove("vvsc-hidden"), e == null || e.classList.remove("vvsc-hidden"), i == null || i.classList.add("vvsc-subtotal-row--compact");
    }
    renderProgressBar(n) {
      var i, o;
      const t = (i = this.overlay) == null ? void 0 : i.querySelector(".vvsc-progress-text"), e = (o = this.overlay) == null ? void 0 : o.querySelector(".vvsc-progress-fill");
      if (!(!t || !e))
        if (n >= 1e4)
          e.style.width = "100%", t.innerHTML = 'Great! You&rsquo;ve unlocked <span class="vvsc-unlocked">free shipping</span>';
        else {
          const c = 1e4 - n, a = Math.min(100, Math.round(n / 1e4 * 100));
          e.style.width = `${a}%`, t.innerHTML = `<strong>$${(c / 100).toFixed(2)}</strong> away from free shipping`;
        }
    }
    async renderShippingEstimate() {
      var p, d, g;
      const n = (p = this.overlay) == null ? void 0 : p.querySelector(".vvsc-shipping-row"), t = (d = this.overlay) == null ? void 0 : d.querySelector(".vvsc-shipping-amount"), e = (g = this.overlay) == null ? void 0 : g.querySelector(".vvsc-shipping-label"), i = ++this.shippingRequestId, o = () => i !== this.shippingRequestId, c = (h) => {
        o() || (y(`Vinevida slide cart: ${h}, falling back to "Taxes and shipping calculated at checkout"`, "warn"), n == null || n.classList.add("vvsc-shipping-row--center"), e && (e.innerHTML = C), t && (t.textContent = ""), this.shippingRateCents = null, this.renderTotals());
      };
      n == null || n.classList.add("vvsc-shipping-row--center"), e && (e.textContent = "Calculating shipping…"), t && (t.textContent = ""), this.shippingRateCents = null, this.renderTotals();
      const a = await j();
      if (!a) return c("no US zip guess");
      const r = await P(a.zip);
      if (!r) return c(`could not resolve city/state for zip ${a.zip}`);
      const l = await H(a.zip, a.countryCode, r.state);
      if (!l) return c(`no shipping rate for ${r.city}, ${r.state} ${a.zip}`);
      if (o()) return;
      const v = `${r.city}, <strong>${r.state} ${a.zip}</strong>`;
      n == null || n.classList.remove("vvsc-shipping-row--center"), e && (e.innerHTML = `Shipping to ${v}`), t && (t.textContent = `$${(l.priceCents / 100).toFixed(2)}`), this.shippingRateCents = l.priceCents, this.renderTotals();
    }
    // Re-run on every cart mutation (see updateCart and the /cart/add fetch
    // patch) — not just once on load. Needed for two reasons: a variant can be
    // sold out (must never offer something that would just 422 on "Add", like
    // the qty stepper used to), and the "already in cart" filter below has to
    // stay in sync — otherwise a handle excluded once (already in the cart at
    // the time this first ran) stayed excluded forever, even after the visitor
    // removed it and it became eligible again.
    async renderUpsell() {
      var r, l, v, p;
      const n = (r = this.overlay) == null ? void 0 : r.querySelector(".vvsc-upsell-section"), t = (l = this.overlay) == null ? void 0 : l.querySelector(".vvsc-upsell-heading"), e = (v = this.overlay) == null ? void 0 : v.querySelector(".vvsc-upsell-list");
      if (!n || !e || _.length === 0) return;
      const i = new Intl.DateTimeFormat("en-US", { month: "long" }).format(/* @__PURE__ */ new Date());
      t && (t.textContent = `${i}'s Oil of the Month`);
      const o = ((p = this.cart) == null ? void 0 : p.items.map((d) => d.variant_id)) ?? [], a = (await Promise.all(
        _.map(async (d) => {
          var g, h;
          try {
            const x = await fetch(`/products/${d}.js`);
            if (!x.ok) return null;
            const w = await x.json(), m = (g = w.variants) == null ? void 0 : g[0];
            return !m || !m.available || o.includes(m.id) ? null : {
              handle: d,
              variantId: m.id,
              title: w.title,
              image: w.featured_image ?? ((h = w.images) == null ? void 0 : h[0]) ?? "",
              priceCents: m.price,
              compareAtPriceCents: m.compare_at_price ?? null
            };
          } catch {
            return null;
          }
        })
      )).filter((d) => d !== null).slice(0, 2);
      if (a.length === 0) {
        e.innerHTML = "", n.classList.add("vvsc-hidden");
        return;
      }
      e.innerHTML = a.map(q).join(""), n.classList.remove("vvsc-hidden");
    }
    // ─── Interactions ─────────────────────────────────────────────────────────
    bindItemActions() {
      var n;
      (n = this.overlay) == null || n.addEventListener("click", (t) => {
        var l, v;
        const e = t.target.closest("[data-action]");
        if (!e) return;
        if (e.dataset.action === "add-upsell") {
          const p = e.dataset.variantId;
          p && (u("slide_cart_upsell_add", `Upsell add: ${p}`, "click", "Cart Upsell"), this.addToCart({ id: Number(p), quantity: 1 }));
          return;
        }
        const i = e.closest("[data-key]");
        if (!i) return;
        const o = i.dataset.key, c = i.querySelector(".vvsc-qty-value"), a = parseInt((c == null ? void 0 : c.textContent) || "1", 10), r = ((v = (l = i.querySelector(".vvsc-item-title")) == null ? void 0 : l.textContent) == null ? void 0 : v.trim()) || o;
        e.dataset.action === "remove" ? (u("slide_cart_item_remove", `Remove: ${r}`, "click", "Cart"), this.updateCart(o, 0)) : e.dataset.action === "decrease" ? (u("slide_cart_item_decrease", `Qty decrease: ${r}`, "click", "Cart"), this.updateCart(o, Math.max(0, a - 1))) : e.dataset.action === "increase" && (u("slide_cart_item_increase", `Qty increase: ${r}`, "click", "Cart"), this.updateCart(o, a + 1));
      });
    }
    bindNote() {
      var o, c, a;
      const n = (o = this.overlay) == null ? void 0 : o.querySelector(".vvsc-note-toggle"), t = (c = this.overlay) == null ? void 0 : c.querySelector(".vvsc-note-body"), e = (a = this.overlay) == null ? void 0 : a.querySelector(".vvsc-note-input");
      if (!n || !t || !e) return;
      n.addEventListener("click", () => {
        const r = t.classList.toggle("vvsc-is-open");
        n.setAttribute("aria-expanded", String(r)), r && (u("slide_cart_note_open", "Note field opened", "click", "Cart"), e.focus());
      });
      let i = "";
      e.addEventListener("blur", () => {
        const r = e.value.trim();
        r !== i && (i = r, u("slide_cart_note_add", "Order note updated", "input", "Cart"), this.updateNote(r));
      });
    }
    // The cart icon is intercepted directly (capture phase, before the theme's
    // own handler) so it never opens the native dropdown mini-cart. Add-to-cart
    // is different: confirmed live via network trace that the PDP button does
    // NOT trigger a native form `submit` event — the theme's own click handler
    // calls `fetch('/cart/add.js')` itself and calls `preventDefault()` first.
    // So instead of racing that handler, we patch `window.fetch` and react
    // after any `/cart/add` call succeeds, from anywhere on the site (PDP,
    // sticky ATC bar, quick-add, etc.) — this doesn't re-issue the request, it
    // just observes the real one and refreshes our panel from the real result.
    bindGlobalTriggers() {
      document.addEventListener(
        "click",
        (t) => {
          t.target.closest("a.header__cart-toggle") && (t.preventDefault(), t.stopImmediatePropagation(), this.open());
        },
        !0
      ), document.addEventListener(
        "click",
        (t) => {
          const e = t.target.closest('a[href^="/checkout"]');
          e && (t.preventDefault(), t.stopImmediatePropagation(), u("slide_cart_checkout", "Checkout clicked", "click", "Slide Cart"), this.goToCheckout(e.href));
        },
        !0
      );
      const n = window.fetch.bind(window);
      window.fetch = async (t, e) => {
        const i = await n(t, e), o = typeof t == "string" ? t : t instanceof Request ? t.url : String(t);
        return i.ok && /\/cart\/add(\.js)?(\?|$)/.test(o) && (this.cart = await this.fetchCart(), this.updateBadge(this.cart.item_count), this.shippingRateCents = null, this.renderCart(), this.open(), this.renderShippingEstimate(), this.renderUpsell()), i;
      };
    }
    // Two site widgets float above everything and end up covering parts of our
    // modal (confirmed live): the ADA accessibility button (<csm-web-accessibility>,
    // top-right) and the cookie-preferences icon (<csm-cookie-consent>, bottom-left
    // on mobile — its own persistent button once the banner's been dismissed).
    // Both are open shadow roots, both actively re-assert their own position/
    // z-index, so out-ranking them via z-index/DOM order is an unwinnable
    // tug-of-war — instead we hide each wrapper outright while our modal is
    // open and restore it on close, the same way #mini-cart is permanently
    // hidden above. `#csm-wrapper` (not its randomly-hashed child class) is the
    // stable target for the cookie widget — it holds whatever the widget is
    // currently showing (icon or full banner).
    getFloatingWidgets() {
      var e, i, o, c;
      const n = (i = (e = document.querySelector("csm-web-accessibility")) == null ? void 0 : e.shadowRoot) == null ? void 0 : i.getElementById("csm-ada-compliance-wrapper"), t = (c = (o = document.querySelector("csm-cookie-consent")) == null ? void 0 : o.shadowRoot) == null ? void 0 : c.getElementById("csm-wrapper");
      return [n, t].filter((a) => !!a);
    }
    open() {
      var n;
      u("slide_cart_open", "Cart opened", "view", "Slide Cart"), this.renderCart(), this.getFloatingWidgets().forEach((t) => t.style.display = "none"), (n = this.overlay) == null || n.classList.add("vvsc-is-open"), document.body.classList.add("vvsc-body-locked");
    }
    close() {
      var n;
      (n = this.overlay) == null || n.classList.remove("vvsc-is-open"), document.body.classList.remove("vvsc-body-locked"), this.getFloatingWidgets().forEach((t) => t.style.display = "");
    }
    bindClose() {
      var n, t, e, i;
      (t = (n = this.overlay) == null ? void 0 : n.querySelector(".vvsc-close")) == null || t.addEventListener("click", () => this.close()), (i = (e = this.overlay) == null ? void 0 : e.querySelector(".vvsc-backdrop")) == null || i.addEventListener("click", () => this.close());
    }
  }
  new N();
})();
//# sourceMappingURL=index.js.map
