(function() {
  "use strict";
  const C = `#mini-cart,
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
`, u = (s, n, e, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: n,
      event_type: e,
      event_loc: t
    }), x(`Event: ${s} | ${n} | ${e} | ${t}`, "success");
  }, $ = (s) => new Promise((n) => {
    const e = document.querySelector(s);
    e && n(e);
    const t = new MutationObserver(() => {
      const i = document.querySelector(s);
      i && (n(i), t.disconnect());
    });
    t.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), L = ({ name: s, dev: n }) => {
    const e = s.toLowerCase().replace(/\s/g, "_");
    u(`${e}_started`, `Experiment ${s} started`, "other", e), console.log(
      `%c EXP: ${s} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, x = (s, n = "info") => {
    let e;
    switch (n) {
      case "info":
        e = "color: #3498db;";
        break;
      case "warn":
        e = "color: #f39c12;";
        break;
      case "error":
        e = "color: #e74c3c;";
        break;
      case "success":
        e = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${s}`, `${e} font-size: 16px; font-weight: 600`);
  }, b = [
    "no-185-fall-is-in-the-air-fragrance-oil",
    "no-185-fall-is-in-the-air-diffuser-fragrance-oil"
  ], w = 'Taxes and <a href="https://www.vinevida.com/policies/shipping-policy" target="_blank" rel="noopener">shipping</a> calculated at checkout', h = {
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
    const n = `$${(s.line_price / 100).toFixed(2)}`, e = [
      s.variant_title && s.variant_title !== "Default Title" ? s.variant_title : "",
      s.product_type
    ].filter(Boolean).join(" &middot; ");
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
          ${e ? `<div class="vvsc-item-meta">${e}</div>` : ""}
        </div>
        <div class="vvsc-item-bottom">
          <div class="vvsc-qty-stepper">
            <button class="vvsc-qty-btn" data-action="decrease" aria-label="Decrease quantity">
              ${h.decrease}
            </button>
            <span class="vvsc-qty-value">${s.quantity}</span>
            <button class="vvsc-qty-btn" data-action="increase" aria-label="Increase quantity">
              ${h.increase}
            </button>
          </div>
          <span class="vvsc-item-price">${n}</span>
        </div>
      </div>
      <button class="vvsc-item-remove" data-action="remove" aria-label="Remove item">${h.close}</button>
    </div>
  `
    );
  }, z = (s) => {
    const n = s.compareAtPriceCents !== null && s.compareAtPriceCents > s.priceCents, e = n ? Math.round((1 - s.priceCents / s.compareAtPriceCents) * 100) : 0;
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
        ${n ? `<span class="vvsc-upsell-badge">${e}% off</span>` : ""}
      </div>
      <button class="vvsc-upsell-add" data-action="add-upsell" data-variant-id="${s.variantId}">Add</button>
    </div>
  `
    );
  }, E = (
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
          <button class="vvsc-close" aria-label="Close cart">${h.close}</button>
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
            ${h.plus}
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
          <span class="vvsc-shipping-label">${w}</span>
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
          <span class="vvsc-secure">${h.lock} 100% Secure Payments</span>
        </div>
      </div>
    </div>
  </div>
`
  ), k = "vvsc_zip_guess", q = "https://ipwho.is/", j = async (s = 4e3) => {
    try {
      const n = sessionStorage.getItem(k);
      if (n) return JSON.parse(n);
    } catch {
    }
    try {
      const n = new AbortController(), e = setTimeout(() => n.abort(), s), t = await fetch(q, { signal: n.signal });
      if (clearTimeout(e), !t.ok) return null;
      const i = await t.json();
      if (!(i != null && i.success)) return null;
      const a = String(i.country_code || ""), o = String(i.postal || "").trim();
      if (a !== "US" || !/^\d{5}$/.test(o)) return null;
      const c = { zip: o, countryCode: a };
      try {
        sessionStorage.setItem(k, JSON.stringify(c));
      } catch {
      }
      return c;
    } catch {
      return x("Vinevida slide cart: IP geolocation unavailable, skipping shipping estimate", "warn"), null;
    }
  }, m = /* @__PURE__ */ new Map(), I = async (s, n = 4e3) => {
    var e;
    if (m.has(s)) return m.get(s) ?? null;
    try {
      const t = new AbortController(), i = setTimeout(() => t.abort(), n), a = await fetch(`https://api.zippopotam.us/us/${s}`, { signal: t.signal });
      if (clearTimeout(i), !a.ok)
        return m.set(s, null), null;
      const o = await a.json(), c = (e = o == null ? void 0 : o.places) == null ? void 0 : e[0], r = c == null ? void 0 : c["place name"], l = c == null ? void 0 : c["state abbreviation"], v = r && l ? { city: r, state: l } : null;
      return m.set(s, v), v;
    } catch {
      return null;
    }
  }, P = async (s, n, e, t = 4e3) => {
    try {
      const i = new AbortController(), a = setTimeout(() => i.abort(), t), o = new URLSearchParams({
        "shipping_address[zip]": s,
        "shipping_address[country]": n,
        "shipping_address[province]": e
      }), c = await fetch(`/cart/shipping_rates.json?${o}`, { signal: i.signal });
      if (clearTimeout(a), !c.ok) return null;
      const r = await c.json(), l = r == null ? void 0 : r.shipping_rates;
      if (!Array.isArray(l) || l.length === 0) return null;
      const v = l.reduce((p, g) => Number(g.price) < Number(p.price) ? g : p), d = Math.round(Number(v.price) * 100);
      return Number.isFinite(d) ? { name: String(v.name || ""), priceCents: d } : null;
    } catch {
      return null;
    }
  };
  L({ name: "Slide-in Cart", dev: "AI" });
  class A {
    constructor() {
      this.overlay = null, this.cart = null, this.shippingRateCents = null, this.init();
    }
    async init() {
      var e;
      await $("body"), document.head.insertAdjacentHTML("beforeend", `<style class="vvsc-style">${C}</style>`), document.body.insertAdjacentHTML("beforeend", E), this.overlay = document.getElementById("vvsc-slide-cart"), this.bindClose(), this.bindItemActions(), this.bindGlobalTriggers(), this.bindNote(), this.cart = await this.fetchCart(), this.updateBadge(this.cart.item_count);
      const n = (e = this.overlay) == null ? void 0 : e.querySelector(".vvsc-note-input");
      n && (n.value = this.cart.note ?? ""), this.renderShippingEstimate(), this.renderUpsell();
    }
    // ─── Cart API ─────────────────────────────────────────────────────────────
    async fetchCart() {
      return (await fetch("/cart.js")).json();
    }
    async updateCart(n, e) {
      const t = await fetch("/cart/change.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: n, quantity: e })
      });
      this.cart = await t.json(), this.updateBadge(this.cart.item_count), this.renderCart();
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
      const e = await fetch("/cart/update.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note: n })
      });
      e.ok && (this.cart = await e.json());
    }
    updateBadge(n) {
      document.querySelectorAll(".header__cart-count-alt").forEach((e) => {
        e.textContent = String(n);
      });
    }
    // ─── Rendering ────────────────────────────────────────────────────────────
    renderCart() {
      var i, a, o;
      if (!this.cart) return;
      const n = `${this.cart.item_count} ${this.cart.item_count === 1 ? "item" : "items"}`;
      (i = this.overlay) == null || i.querySelectorAll(".vvsc-item-count, .vvsc-subtotal-count").forEach((c) => {
        c.textContent = n;
      });
      const e = (a = this.overlay) == null ? void 0 : a.querySelector(".vvsc-subtotal-amount");
      e && (e.textContent = `$${(this.cart.total_price / 100).toFixed(2)}`);
      const t = (o = this.overlay) == null ? void 0 : o.querySelector(".vvsc-items-wrapper");
      t && (t.innerHTML = this.cart.items.map((c) => T(c)).join("")), this.renderProgressBar(this.cart.total_price), this.renderTotals();
    }
    // "Estimated total" + tax note (Figma node 184:180/174:172) only appear once
    // a real US shipping rate is known — otherwise the footer just shows the
    // "calculated at checkout" fallback already handled by renderShippingEstimate.
    renderTotals() {
      var a, o, c, r;
      const n = (a = this.overlay) == null ? void 0 : a.querySelector(".vvsc-total-row"), e = (o = this.overlay) == null ? void 0 : o.querySelector(".vvsc-total-amount"), t = (c = this.overlay) == null ? void 0 : c.querySelector(".vvsc-tax-note"), i = (r = this.overlay) == null ? void 0 : r.querySelector(".vvsc-subtotal-row");
      if (this.shippingRateCents === null || !this.cart) {
        n == null || n.classList.add("vvsc-hidden"), t == null || t.classList.add("vvsc-hidden"), i == null || i.classList.remove("vvsc-subtotal-row--compact");
        return;
      }
      e && (e.textContent = `$${((this.cart.total_price + this.shippingRateCents) / 100).toFixed(2)}`), n == null || n.classList.remove("vvsc-hidden"), t == null || t.classList.remove("vvsc-hidden"), i == null || i.classList.add("vvsc-subtotal-row--compact");
    }
    renderProgressBar(n) {
      var i, a;
      const e = (i = this.overlay) == null ? void 0 : i.querySelector(".vvsc-progress-text"), t = (a = this.overlay) == null ? void 0 : a.querySelector(".vvsc-progress-fill");
      if (!(!e || !t))
        if (n >= 1e4)
          t.style.width = "100%", e.innerHTML = 'Great! You&rsquo;ve unlocked <span class="vvsc-unlocked">free shipping</span>';
        else {
          const o = 1e4 - n, c = Math.min(100, Math.round(n / 1e4 * 100));
          t.style.width = `${c}%`, e.innerHTML = `<strong>$${(o / 100).toFixed(2)}</strong> away from free shipping`;
        }
    }
    async renderShippingEstimate() {
      var l, v, d;
      const n = (l = this.overlay) == null ? void 0 : l.querySelector(".vvsc-shipping-row"), e = (v = this.overlay) == null ? void 0 : v.querySelector(".vvsc-shipping-amount"), t = (d = this.overlay) == null ? void 0 : d.querySelector(".vvsc-shipping-label"), i = (p) => {
        x(`Vinevida slide cart: ${p}, falling back to "Taxes and shipping calculated at checkout"`, "warn"), n == null || n.classList.add("vvsc-shipping-row--center"), t && (t.innerHTML = w), e && (e.textContent = "");
      };
      n == null || n.classList.add("vvsc-shipping-row--center"), t && (t.textContent = "Calculating shipping…");
      const a = await j();
      if (!a) return i("no US zip guess");
      const o = await I(a.zip);
      if (!o) return i(`could not resolve city/state for zip ${a.zip}`);
      const c = await P(a.zip, a.countryCode, o.state);
      if (!c) return i(`no shipping rate for ${o.city}, ${o.state} ${a.zip}`);
      const r = `${o.city}, <strong>${o.state} ${a.zip}</strong>`;
      n == null || n.classList.remove("vvsc-shipping-row--center"), t && (t.innerHTML = `Shipping to ${r}`), e && (e.textContent = `$${(c.priceCents / 100).toFixed(2)}`), this.shippingRateCents = c.priceCents, this.renderTotals();
    }
    async renderUpsell() {
      var r, l, v, d;
      const n = (r = this.overlay) == null ? void 0 : r.querySelector(".vvsc-upsell-section"), e = (l = this.overlay) == null ? void 0 : l.querySelector(".vvsc-upsell-heading"), t = (v = this.overlay) == null ? void 0 : v.querySelector(".vvsc-upsell-list");
      if (!n || !t || b.length === 0) return;
      const i = new Intl.DateTimeFormat("en-US", { month: "long" }).format(/* @__PURE__ */ new Date());
      e && (e.textContent = `${i}'s Oil of the Month`);
      const a = ((d = this.cart) == null ? void 0 : d.items.map((p) => p.variant_id)) ?? [], c = (await Promise.all(
        b.map(async (p) => {
          var g, _;
          try {
            const S = await fetch(`/products/${p}.js`);
            if (!S.ok) return null;
            const y = await S.json(), f = (g = y.variants) == null ? void 0 : g[0];
            return !f || a.includes(f.id) ? null : {
              handle: p,
              variantId: f.id,
              title: y.title,
              image: y.featured_image ?? ((_ = y.images) == null ? void 0 : _[0]) ?? "",
              priceCents: f.price,
              compareAtPriceCents: f.compare_at_price ?? null
            };
          } catch {
            return null;
          }
        })
      )).filter((p) => p !== null).slice(0, 2);
      c.length !== 0 && (t.innerHTML = c.map(z).join(""), n.classList.remove("vvsc-hidden"));
    }
    // ─── Interactions ─────────────────────────────────────────────────────────
    bindItemActions() {
      var n;
      (n = this.overlay) == null || n.addEventListener("click", (e) => {
        var l, v;
        const t = e.target.closest("[data-action]");
        if (!t) return;
        if (t.dataset.action === "add-upsell") {
          const d = t.dataset.variantId;
          d && (u("slide_cart_upsell_add", `Upsell add: ${d}`, "click", "Cart Upsell"), this.addToCart({ id: Number(d), quantity: 1 }));
          return;
        }
        const i = t.closest("[data-key]");
        if (!i) return;
        const a = i.dataset.key, o = i.querySelector(".vvsc-qty-value"), c = parseInt((o == null ? void 0 : o.textContent) || "1", 10), r = ((v = (l = i.querySelector(".vvsc-item-title")) == null ? void 0 : l.textContent) == null ? void 0 : v.trim()) || a;
        t.dataset.action === "remove" ? (u("slide_cart_item_remove", `Remove: ${r}`, "click", "Cart"), this.updateCart(a, 0)) : t.dataset.action === "decrease" ? (u("slide_cart_item_decrease", `Qty decrease: ${r}`, "click", "Cart"), this.updateCart(a, Math.max(0, c - 1))) : t.dataset.action === "increase" && (u("slide_cart_item_increase", `Qty increase: ${r}`, "click", "Cart"), this.updateCart(a, c + 1));
      });
    }
    bindNote() {
      var a, o, c;
      const n = (a = this.overlay) == null ? void 0 : a.querySelector(".vvsc-note-toggle"), e = (o = this.overlay) == null ? void 0 : o.querySelector(".vvsc-note-body"), t = (c = this.overlay) == null ? void 0 : c.querySelector(".vvsc-note-input");
      if (!n || !e || !t) return;
      n.addEventListener("click", () => {
        const r = e.classList.toggle("vvsc-is-open");
        n.setAttribute("aria-expanded", String(r)), r && (u("slide_cart_note_open", "Note field opened", "click", "Cart"), t.focus());
      });
      let i = "";
      t.addEventListener("blur", () => {
        const r = t.value.trim();
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
        (e) => {
          e.target.closest("a.header__cart-toggle") && (e.preventDefault(), e.stopImmediatePropagation(), this.open());
        },
        !0
      );
      const n = window.fetch.bind(window);
      window.fetch = async (e, t) => {
        const i = await n(e, t), a = typeof e == "string" ? e : e instanceof Request ? e.url : String(e);
        return i.ok && /\/cart\/add(\.js)?(\?|$)/.test(a) && (this.cart = await this.fetchCart(), this.updateBadge(this.cart.item_count), this.renderCart(), this.open()), i;
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
      var t, i, a, o;
      const n = (i = (t = document.querySelector("csm-web-accessibility")) == null ? void 0 : t.shadowRoot) == null ? void 0 : i.getElementById("csm-ada-compliance-wrapper"), e = (o = (a = document.querySelector("csm-cookie-consent")) == null ? void 0 : a.shadowRoot) == null ? void 0 : o.getElementById("csm-wrapper");
      return [n, e].filter((c) => !!c);
    }
    open() {
      var n;
      u("slide_cart_open", "Cart opened", "view", "Slide Cart"), this.renderCart(), this.getFloatingWidgets().forEach((e) => e.style.display = "none"), (n = this.overlay) == null || n.classList.add("vvsc-is-open"), document.body.classList.add("vvsc-body-locked");
    }
    close() {
      var n;
      (n = this.overlay) == null || n.classList.remove("vvsc-is-open"), document.body.classList.remove("vvsc-body-locked"), this.getFloatingWidgets().forEach((e) => e.style.display = "");
    }
    bindClose() {
      var n, e, t, i, a, o;
      (e = (n = this.overlay) == null ? void 0 : n.querySelector(".vvsc-close")) == null || e.addEventListener("click", () => this.close()), (i = (t = this.overlay) == null ? void 0 : t.querySelector(".vvsc-backdrop")) == null || i.addEventListener("click", () => this.close()), (o = (a = this.overlay) == null ? void 0 : a.querySelector(".vvsc-checkout-btn")) == null || o.addEventListener("click", () => {
        u("slide_cart_checkout", "Checkout clicked", "click", "Slide Cart");
      });
    }
  }
  new A();
})();
//# sourceMappingURL=index.js.map
