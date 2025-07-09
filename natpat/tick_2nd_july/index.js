(function() {
  "use strict";
  const E = (a, t, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: t,
      event_type: e,
      event_loc: n
    }), C(`Event: ${a} | ${t} | ${e} | ${n}`, "success");
  }, _ = ({ name: a, dev: t }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, S = (a) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", a, "variant_1"));
    }, 1e3);
  }, C = (a, t = "info") => {
    let e;
    switch (t) {
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
    console.log(`%c>>> ${a}`, `${e} font-size: 16px; font-weight: 600`);
  }, P = `.crs-bundle-wrap {
  grid-column: 1 / -1;
  width: 100%;
}

.crs-or-line {
  position: relative;
}
.crs-or-line::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  width: 100%;
  height: 1px;
  background: #d2d2d2;
}

.crs-or-line span {
  padding-inline: 10px;
  position: relative;
  background: #fff;
  color: #b3b3b3;
  text-align: center;
  font-family: 'Bebas';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 166.667% */
  letter-spacing: 0.6px;
  text-transform: uppercase;
  z-index: 2;
}

.crs-title {
  margin-top: 6px;
  color: #202020;
  text-align: center;
  font-family: 'Bebas';
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-transform: uppercase;
}

.crs-bundle-subheader {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-self: start;
}

.crs-bundle-highlight {
  color: #212529;
  font-family: 'DIN Condensed';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 100% */
  text-transform: uppercase;
}

.crs-bundle-sale {
  padding: 8px 14px;
  border-radius: 3px 3px 0px 0px;
  background: #000;
  color: #fff;
  text-align: center;
  font-family: 'DIN Condensed';
  font-size: 16px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0.6px;
}
.crs-bundle-pack {
  padding: 12px;
  border-radius: 4px 0px 4px 4px;
  border: 2px solid #dddcdc;
}

/* Enhanced checkout button styles */
#proceed {
  transition: all 0.3s ease;
}

#proceed:disabled {
  opacity: 0.7;
  pointer-events: none;
}

/* Accordion Styles */
.crs-bundle-short {
  display: flex;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.crs-bundle-item {
  display: flex;
  gap: 16px;
}

.crs-bundle-short .crs-bundle-item {
  margin-left: -12px;
}

.crs-accordion-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  color: #666;
}

.crs-bundle-short.expanded .crs-accordion-arrow {
  transform: rotate(180deg);
}

.bundle-pack-long {
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
}

.bundle-pack-long.expanding,
.bundle-pack-long.collapsing {
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.crs-bundle-content-inner {
  position: relative;
  padding-top: 26px;
}

.crs-bundle-content-inner::before {
  position: absolute;
  top: 12px;
  left: -12px;
  content: '';
  display: block;
  width: calc(100% + 24px);
  height: 1px;
  background: #d9d9d9;
}

/* Стилі для стрілки */
.crs-accordion-arrow svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.crs-bundle-content {
  width: 100%;
  padding-block: 12px;
  font-family: Roboto;
  text-align: left;
}

.crs-bundle-title {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #212529;
  font-size: 14px;
  font-weight: 700;
  line-height: 18.2px;
}

.crs-bundle-description {
  color: #6f6f6f;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;
}

.crs-bundle-price {
  margin-top: 5px;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.6px;
}

.crs-bundle-price ins {
  color: #f01c99;
  text-decoration: none;
}

.crs-subtitle,
.crs-description {
  color: #515151;

  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: 0.5px;
}

.crs-subtitle {
  font-weight: 700;
}

.crs-bundle-items {
  --items-gap: 44px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: var(--items-gap);
}

.crs-bundle-items .crs-bundle-item:not(:last-child) {
  position: relative;
}

.crs-bundle-items .crs-bundle-item:not(:last-child)::after {
  position: absolute;
  bottom: calc((var(--items-gap) / 2) * -1);
  left: 50%;
  transform: translate(-50%, 50%);
  content: '';
  width: 20px;
  height: 20px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><rect x="0.5" y="7.03" width="20" height="6" fill="%23D0A0BC"/><rect x="13.5" y="0.0299988" width="20" height="6" transform="rotate(90 13.5 0.0299988)" fill="%23D0A0BC"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
}

.crs-bundle-items .crs-bundle-item .crs-bundle-description {
  margin-top: 12px;
}

.crs-bundle-items .crs-bundle-item .crs-bundle-price {
  margin-top: 0;
}

.crs-bundle-pack input[type='radio'] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  pointer-events: none;
}

.crs-bundle-label {
  --label-main-color: #f01c99;
  --label-secondary-color: #fff;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
  width: max-content;
  margin-top: 12px;
  padding: 11px 35px;
  border-radius: 5px;
  border: 2px solid var(--label-main-color);
  background-color: var(--label-secondary-color);
  cursor: pointer;
  transition: all 0.3s ease;
}
.crs-bundle-label-title {
  color: #181717;
  text-align: center;
  font-family: 'Bebas';
  font-size: 20px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}

.crs-bundle-label-price {
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.6px;
}

/* Selected state */
.crs-bundle-pack input[type='radio']:checked + .crs-bundle-label {
  background-color: var(--label-main-color);
}

.crs-bundle-pack input[type='radio']:checked + .crs-bundle-label > * {
  color: var(--label-secondary-color);
}

.crs-tooltip {
  position: relative;
}

.crs-tooltip-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  content: '?';
  width: 18px;

  height: 18px;
  border-radius: 100px;
  background: #999;
  color: #fff;

  text-align: center;
  font-family: 'Segoe UI';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
}

.crs-tooltip-content {
  display: none;
  position: absolute;
  bottom: calc(100% - -13px);
  right: -50px;
  width: 345px;
  padding: 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px -3px 8px rgba(0, 0, 0, 0.1);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  z-index: 10;
  font-family: Roboto;
}

.crs-tooltip[data-tooltip='show'] .crs-tooltip-content {
  display: block;
}

.crs-tooltip-arrow {
  display: none;
  position: absolute;
  bottom: 19px;
  left: 50%;
  transform: translateX(-50%);
  width: 26px;
  height: 13px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="13" viewBox="0 0 26 13" fill="none"><defs><filter id="shadow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.15)"/></filter></defs><path d="M26 0H0L13 13L26 0Z" fill="white" filter="url(%23shadow)"/></svg>');
  z-index: 11;
}

.crs-tooltip[data-tooltip='show'] .crs-tooltip-arrow {
  display: block;
}

.crs-tooltip-product-header {
  display: flex;
  gap: 12px;
}

.crs-tooltip-product-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.crs-tooltip-product-title {
  color: #212529;
  font-size: 14px;
  font-weight: 700;
  line-height: 18.2px;
}

.crs-tooltip-product-description {
  color: #212529;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;
}

.crs-tooltip-product-patches {
  color: #f01c99;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 18.2px;
  text-transform: uppercase;
}
.crs-tooltip-product-text {
  margin-top: 12px;
  color: #212529;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

section.lp-tr--purchase h2.lp-tr--section-big-title.lp-tr--mobile {
  margin-bottom: 0 !important;
  font-size: 36px;
  font-weight: 400;
  line-height: 40px;
}

.crs-bundle-subtitle {
  margin: 9px auto 30px;
  color: #181717;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.6px;
}
`, A = "1-buzzpatch-kids-3-kids-trail-patch", I = {
    TICK_PATCHES: {
      slug: "trailpatch-kids-tick-repellent-stickers",
      variantId: 43332240932908
    },
    MOSQUITO_PATCHES: {
      slug: "buzzpatch-bundles",
      variantId: 39542857695276
    }
  }, f = {
    BUNDLE_SELECTED: "crs-bundle-selected",
    BUNDLE_TIMESTAMP: "crs-bundle-timestamp"
  }, p = {
    STATE_EXPIRY: 30 * 60 * 1e3,
    // 30 minutes
    RETRY_DELAY: 1e3,
    ANIMATION_DURATION: 300,
    CHECKOUT_REDIRECT_DELAY: 1e3,
    DOM_STABILITY_DELAY: 50,
    STATE_CHECK_INTERVAL: 100,
    BUTTON_RESET_DELAY: 3e3
  }, m = {
    MOBILE_BREAKPOINT: 768,
    MOBILE_OFFSET_RATIO: 0.15,
    DESKTOP_OFFSET_RATIO: 0.25,
    MOBILE_VISIBILITY_RATIO: 0.2,
    DESKTOP_VISIBILITY_RATIO: 0.3,
    MOBILE_SCROLL_THRESHOLD: 30,
    DESKTOP_SCROLL_THRESHOLD: 50
  }, w = {
    CART_CLEAR: "https://www.natpat.com/en-eu/cart/clear.js",
    CART_ADD: "https://www.natpat.com/en-eu/cart/add.js",
    CHECKOUT: "/checkout/"
  }, c = {
    EXPANDED: "expanded",
    EXPANDING: "expanding",
    COLLAPSING: "collapsing",
    HIJACKED: "data-hijacked",
    TOOLTIP_ICON: "crs-tooltip-icon",
    TOOLTIP_CONTENT: "crs-tooltip-content"
  }, l = {
    PACKS_CONTAINER: ".form .form-group",
    ACCORDION_TRIGGER: "[data-accordion-trigger]",
    ACCORDION_CONTENT: "[data-accordion-content]",
    BUNDLE_CONTENT_INNER: ".crs-bundle-content-inner",
    RADIO_INPUTS: 'input[name="price"]',
    CHECKED_RADIO: 'input[name="price"]:checked',
    PRICE_NUM: ".overall-price .price-num",
    PRICE_OFF: ".price-off",
    COMPARE_PRICE: ".compare-price",
    SAVED_PRICE: ".saved-price",
    BUNDLE_TITLE: "section.lp-tr--purchase h2.lp-tr--mobile"
  };
  class O {
    /**
     * Saves bundle selection state to sessionStorage
     */
    saveBundleState(t) {
      try {
        sessionStorage.setItem(f.BUNDLE_SELECTED, t.toString()), sessionStorage.setItem(f.BUNDLE_TIMESTAMP, Date.now().toString());
      } catch (e) {
        console.warn("Could not save bundle state to sessionStorage:", e);
      }
    }
    /**
     * Restores bundle selection state from sessionStorage
     */
    getBundleState() {
      try {
        const t = sessionStorage.getItem(f.BUNDLE_SELECTED), e = sessionStorage.getItem(f.BUNDLE_TIMESTAMP);
        return !t || !e ? null : Date.now() - parseInt(e) > p.STATE_EXPIRY ? (this.clearBundleState(), null) : {
          isSelected: t === "true",
          timestamp: parseInt(e)
        };
      } catch (t) {
        return console.warn("Could not restore bundle state from sessionStorage:", t), null;
      }
    }
    /**
     * Clears saved bundle state
     */
    clearBundleState() {
      try {
        sessionStorage.removeItem(f.BUNDLE_SELECTED), sessionStorage.removeItem(f.BUNDLE_TIMESTAMP);
      } catch (t) {
        console.warn("Could not clear bundle state from sessionStorage:", t);
      }
    }
    /**
     * Checks if bundle state exists and is valid
     */
    hasSavedState() {
      const t = this.getBundleState();
      return t !== null && t.isSelected;
    }
  }
  class B {
    // Default format, will be updated
    constructor() {
      this.moneyFormat = "${{amount}}", this.moneyFormat = this.getMoneyFormat();
    }
    /**
     * Detects and returns the proper money format for the site
     */
    getMoneyFormat() {
      if (window.icartCurrencyWihoutFormat)
        return window.icartCurrencyWihoutFormat;
      if (window.LPProductForm && window.LPProductForm.moneyFormat)
        return window.LPProductForm.moneyFormat;
      const t = document.querySelector("[data-money-format]");
      return t ? t.getAttribute("data-money-format") || this.moneyFormat : window.location.href.includes("/en-eu/") ? "€{{amount}}" : this.moneyFormat;
    }
    /**
     * Currency formatting function (similar to lp-product-form.js)
     */
    formatMoney(t) {
      typeof t == "string" && (t = t.replace(".", ""));
      const e = this.moneyFormat, n = /\{\{\s*(\w+)\s*\}\}/, o = (s, d = 2, h = ",", g = ".") => {
        if (isNaN(s) || s == null)
          return "0";
        const u = (s / 100).toFixed(d).split("."), v = u[0].replace(
          /(\d)(?=(\d\d\d)+(?!\d))/g,
          "$1" + h
        ), x = u[1] ? g + u[1] : "";
        return v + x;
      };
      let i = "";
      const r = e.match(n);
      if (!r) return e;
      switch (r[1]) {
        case "amount":
          i = o(Number(t), 2);
          break;
        case "amount_no_decimals":
          i = o(Number(t), 0);
          break;
        case "amount_with_comma_separator":
          i = o(Number(t), 2, ".", ",");
          break;
        case "amount_no_decimals_with_comma_separator":
          i = o(Number(t), 0, ".", ",");
          break;
        default:
          i = o(Number(t), 2);
      }
      return e.replace(n, i);
    }
    /**
     * Returns the current money format string
     */
    getFormat() {
      return this.moneyFormat;
    }
    /**
     * Formats bundle item data
     */
    formatBundleItem(t, e) {
      if (!t || !t.variant) return;
      const n = t.variant;
      return {
        name: e,
        price: n.price,
        formattedPrice: this.formatMoney(n.price),
        comparePrice: n.compare_at_price || void 0,
        formattedComparePrice: t.compare_at_price ? this.formatMoney(t.compare_at_price) : void 0,
        available: n.available,
        formattedPriceMin: this.formatMoney(t.price_min || n.price)
      };
    }
  }
  class k {
    constructor(t, e) {
      this.bundleSlug = t, this.bundleVariantId = e;
    }
    /**
     * Fetches bundle information from Shopify API
     */
    async fetchBundleInfo() {
      try {
        return await this.fetchProductInfo(this.bundleSlug);
      } catch (t) {
        return console.warn("Could not fetch bundle info from API:", t), null;
      }
    }
    /**
     * Fetches product information by product slug/ID
     */
    async fetchProductInfo(t) {
      var e;
      try {
        const n = this.getBaseUrl(), o = await fetch(`${n}products/${t}.js`);
        if (o.ok) {
          const i = await o.json(), r = (e = i.variants) == null ? void 0 : e.find(
            (s) => s.id === this.bundleVariantId
          );
          if (r)
            return {
              id: i.id,
              title: i.title,
              description: i.description,
              vendor: i.vendor,
              type: i.type,
              tags: i.tags,
              variant: {
                id: r.id,
                title: r.title,
                price: r.price,
                compare_at_price: r.compare_at_price,
                sku: r.sku,
                available: r.available,
                inventory_quantity: r.inventory_quantity
              },
              images: i.images,
              url: i.url
            };
        }
        return null;
      } catch (n) {
        return console.warn("Error fetching product info:", n), null;
      }
    }
    /**
     * Gets the base URL with locale (e.g., https://www.natpat.com/en-au/ or https://www.natpat.com/)
     */
    getBaseUrl() {
      const { origin: t, pathname: e } = window.location, n = e.match(/^\/[a-z]{2}-[a-z]{2}\//);
      return n ? `${t}${n[0]}` : `${t}/`;
    }
    /**
     * Fetches product information by product slug/ID with specific variant
     */
    async fetchProductInfoWithVariant(t, e) {
      var n;
      try {
        const o = this.getBaseUrl();
        console.log("Base URL:", o);
        const i = await fetch(`${o}products/${t}.js`);
        if (i.ok) {
          const r = await i.json(), s = (n = r.variants) == null ? void 0 : n.find(
            (d) => d.id === e
          );
          if (console.log("Fetched product data:", r), s)
            return {
              id: r.id,
              title: r.title,
              description: r.description,
              vendor: r.vendor,
              type: r.type,
              tags: r.tags,
              price_min: r.price_min,
              compare_at_price: r.compare_at_price,
              variant: {
                id: s.id,
                title: s.title,
                price: s.price,
                compare_at_price: s.compare_at_price,
                sku: s.sku,
                available: s.available,
                inventory_quantity: s.inventory_quantity
              },
              images: r.images,
              url: r.url
            };
        }
        return null;
      } catch (o) {
        return console.warn("Error fetching product info with variant:", o), null;
      }
    }
    /**
     * Clears the shopping cart
     */
    async clearCart() {
      if (!(await fetch(w.CART_CLEAR, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })).ok)
        throw new Error("Failed to clear cart");
    }
    /**
     * Adds a product to the shopping cart
     */
    async addProductToCart(t, e = 1) {
      const n = {
        items: [
          {
            id: t,
            quantity: e
          }
        ]
      }, o = await fetch(w.CART_ADD, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(n)
      });
      if (!o.ok)
        throw new Error("Failed to add product to cart");
      return await o.json();
    }
    /**
     * Checks if bundle is available for purchase
     */
    async isBundleAvailable() {
      var e;
      const t = await this.fetchBundleInfo();
      return ((e = t == null ? void 0 : t.variant) == null ? void 0 : e.available) || !1;
    }
    /**
     * Fetches multiple product information concurrently
     */
    async fetchMultipleProducts(t) {
      const e = t.map(
        (n) => this.fetchProductInfoWithVariant(n.slug, n.variantId)
      );
      return await Promise.all(e);
    }
    /**
     * Fetches bundle and individual items data
     */
    async fetchBundleWithItems() {
      const t = [
        { slug: this.bundleSlug, variantId: this.bundleVariantId },
        {
          slug: I.TICK_PATCHES.slug,
          variantId: I.TICK_PATCHES.variantId
        },
        {
          slug: I.MOSQUITO_PATCHES.slug,
          variantId: I.MOSQUITO_PATCHES.variantId
        }
      ];
      try {
        const e = await this.fetchMultipleProducts(t);
        return {
          bundle: e[0],
          tickPatches: e[1],
          mosquitoPatches: e[2]
        };
      } catch (e) {
        return console.warn("Could not fetch bundle with items info from API:", e), {
          bundle: null,
          tickPatches: null,
          mosquitoPatches: null
        };
      }
    }
  }
  const T = "https://conversionrate-store.github.io/a-b_images/natpat/";
  class L {
    constructor(t) {
      this.priceFormatter = t;
    }
    /**
     * Generates the complete bundle HTML
     */
    generateBundleHTML(t) {
      const {
        formattedPrice: e,
        formattedEachPrice: n,
        formattedComparePrice: o,
        savedAmount: i,
        percentOff: r,
        bundleName: s
      } = t;
      return (
        /* HTML */
        `
      <div class="crs-bundle-wrap">
        <div class="crs-or-line"><span>OR</span></div>
        <div class="crs-title">bundle and save</div>
        <div class="crs-bundle-subheader">
          <div class="crs-bundle-highlight">Outdoor DEFENSE</div>
          <div class="crs-bundle-sale">60% OFF</div>
        </div>
        <div class="crs-bundle-pack">
          <div class="crs-bundle-short" data-accordion-trigger>
            <div class="crs-bundle-item">
              <div class="crs-img">
                <img
                  src="${T}/tick-mosquito-bundle.webp"
                  alt=""
                  width="100"
                  height="100"
                  loading="lazy"
                />
              </div>
              <div class="crs-bundle-content">
                <div class="crs-bundle-title">Tick + Mosquito Bundle</div>
                <p class="crs-bundle-description">
                  Tick Patches (3 Packs) + Mosquito Patches (1 Pack)
                </p>
                <span class="crs-bundle-price">
                  <ins>${n} / each</ins>
                </span>
              </div>
            </div>
            <div class="crs-accordion-arrow">${this.getArrowSvg()}</div>
          </div>
          <div class="bundle-pack-long" data-accordion-content>
            <div class="crs-bundle-content-inner">
              <div class="crs-subtitle">
                Tired of bites ruining every trip outside?
              </div>
              <div class="crs-description">
                Get complete peace of mind with our all-in-one patch bundle —
                fights off both ticks and mosquitoes with natural, kid-safe
                power.
              </div>
              <div class="crs-bundle-items">
                ${this.generateBundleItems(t)}
              </div>
              ${this.generateBundleInput(t)}
              ${this.generateBundleLabel(n)}
            </div>
          </div>
        </div>
      </div>
    `
      );
    }
    /**
     * Generates the arrow SVG for accordion
     */
    getArrowSvg() {
      return `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `;
    }
    /**
     * Generates the bundle items (Tick Patches + Mosquito Patches)
     */
    generateBundleItems(t) {
      return [
        {
          title: "Tick Patches",
          description: "3 packs (144 pcs.) For Kids",
          image: `${T}/tick-patches.webp`,
          itemData: t.tickPatches,
          bundleCount: 3
        },
        {
          title: "Mosquito Patches",
          description: "1 Pack (60 pcs.)",
          image: `${T}/mosquito-patches.webp`,
          tooltip: "Test text for tooltip",
          itemData: t.mosquitoPatches,
          bundleCount: 1
        }
      ].map((n) => {
        var o;
        if ((o = n.itemData) != null && o.formattedPriceMin || t.formattedPriceMin, t.formattedEachPrice, n.itemData) {
          const i = n.itemData.price / n.bundleCount;
          this.priceFormatter.formatMoney(i);
        }
        return (
          /* HTML */
          `
          <div class="crs-bundle-item">
            <div class="crs-img">
              <img
                src="${n.image}"
                alt=""
                width="100"
                height="100"
                loading="lazy"
              />
            </div>
            <div class="crs-bundle-content">
              <div class="crs-bundle-title">
                ${n.title}
                ${n != null && n.tooltip ? (
            /* HTML */
            this.renderTooltip()
          ) : ""}
              </div>
              <p class="crs-bundle-description">${n.description}</p>
              <span class="crs-bundle-price"> </span>
            </div>
          </div>
        `
        );
      }).join("");
    }
    renderTooltip() {
      return (
        /* HTML */
        `
      <span class="crs-tooltip">
        <span class="crs-tooltip-icon">?</span>
        <span class="crs-tooltip-content">
          <div class="crs-tooltip-product">
            <div class="crs-tooltip-product-header">
              <div class="crs-tooltip-product-image">
                <img
                  src="${T}/mosquito-patches-2.webp"
                  alt="Mosquito Patches"
                  width="54"
                  height="81"
                  loading="lazy"
                />
              </div>
              <div class="crs-tooltip-product-content">
                <div class="crs-tooltip-product-title">
                  Mosquito Patches <span class="crs-stars"></span>
                </div>
                <div class="crs-tooltip-product-description">
                  Mosquito reppelent patches
                </div>
                <div class="crs-tooltip-product-patches">60 patches</div>
              </div>
            </div>
            <div class="crs-tooltip-product-text">
              The world's #1 natural mosquito repellent stickers keep annoying
              mosquitoes away for hours. A field-tested proprietary blend of
              essential oils embedded in our patent-pending patch technology
              confuse mosquitoes so they don't see you at all!
            </div>
          </div>
        </span>
        <span class="crs-tooltip-arrow"></span>
      </span>
    `
      );
    }
    /**
     * Generates the bundle radio input with all data attributes
     */
    generateBundleInput(t) {
      const {
        formattedPrice: e,
        percentOff: n,
        bundlePrice: o,
        comparePrice: i,
        formattedComparePrice: r,
        savedAmount: s,
        bundleName: d
      } = t;
      return `
      <input
        name="price"
        type="radio"
        value="bundle"
        id="packBundle"
        data-tick-price="${e}"
        data-tick-id="${44402670927916}"
        data-percent-off="${n}"
        data-price="${(o / 100).toFixed(2)}"
        data-compare-at-price="${(i / 100).toFixed(2)}"
        data-compare-price="${r}"
        data-saved-price="${s}"
        data-name="${d}"
      />
    `;
    }
    /**
     * Generates the bundle label (button)
     */
    generateBundleLabel(t) {
      return `
      <label for="packBundle" class="crs-bundle-label">
        <span class="crs-bundle-label-title">Select 4-Pack Bundle</span>
        <span class="crs-bundle-label-price">${t}/each</span>
      </label>
    `;
    }
  }
  class N {
    /**
     * Attaches event listeners to accordion elements
     */
    attachAccordionListeners() {
      const t = document.querySelector(
        l.ACCORDION_TRIGGER
      ), e = document.querySelector(
        l.ACCORDION_CONTENT
      );
      if (!t || !e) {
        console.warn("Accordion elements not found");
        return;
      }
      t.addEventListener("click", () => {
        this.toggleAccordion(
          t,
          e
        );
      });
    }
    /**
     * Toggles accordion open/close state
     */
    toggleAccordion(t, e) {
      t.classList.contains(c.EXPANDED) ? (this.closeAccordion(t, e), this.selectFirstStandardPack()) : this.openAccordion(t, e);
    }
    /**
     * Opens the accordion with smooth animation
     */
    openAccordion(t, e) {
      t.classList.add(c.EXPANDED);
      const n = e.querySelector(
        l.BUNDLE_CONTENT_INNER
      );
      if (!n) return;
      e.style.visibility = "hidden", e.style.height = "auto", e.style.overflow = "visible";
      const o = n.scrollHeight;
      e.style.visibility = "", e.style.height = "0", e.style.overflow = "hidden", E("exp_tick_02_click_01", "Open", "click", "Bundle and save"), requestAnimationFrame(() => {
        e.style.height = o + "px", e.classList.add(c.EXPANDING);
      }), setTimeout(() => {
        e.style.height = "auto", e.style.overflow = "visible", e.classList.remove(c.EXPANDING), this.scrollToInputIfNeeded();
      }, p.ANIMATION_DURATION);
    }
    /**
     * Closes the accordion with smooth animation
     */
    closeAccordion(t, e) {
      t.classList.remove(c.EXPANDED);
      const n = e.scrollHeight;
      e.style.height = n + "px", e.style.overflow = "hidden", E("exp_tick_02_click_02", "Close", "click", "Bundle and save"), requestAnimationFrame(() => {
        e.style.height = "0", e.classList.add(c.COLLAPSING);
      }), setTimeout(() => {
        e.classList.remove(c.COLLAPSING);
      }, p.ANIMATION_DURATION);
    }
    /**
     * Public method to open the accordion if it's currently closed (SessionStorage check)
     */
    openAccordionIfClosed() {
      const t = document.querySelector(
        l.ACCORDION_TRIGGER
      ), e = document.querySelector(
        l.ACCORDION_CONTENT
      );
      if (!t || !e)
        return;
      t.classList.contains(
        c.EXPANDED
      ) || this.openAccordion(t, e);
    }
    /**
     * Вибирає перший стандартний пак при закритті accordion
     */
    selectFirstStandardPack() {
      const t = document.querySelectorAll(
        'input[name="price"]:not([value="bundle"])'
      );
      if (t.length > 0) {
        const e = t[0];
        e.checked = !0;
        const n = new Event("change", { bubbles: !0 });
        e.dispatchEvent(n);
      }
    }
    /**
     * Scrolls to bundle input if it's not visible after accordion opens
     */
    scrollToInputIfNeeded() {
      const t = document.getElementById("packBundle");
      t && setTimeout(() => {
        const e = this.getViewportInfo(), n = this.calculateScrollPosition(
          t,
          e
        );
        n.shouldScroll && window.scrollTo({
          top: n.targetScrollPosition,
          behavior: "smooth"
        });
      }, p.DOM_STABILITY_DELAY);
    }
    /**
     * Gets current viewport information
     */
    getViewportInfo() {
      return {
        height: window.innerHeight,
        scrollY: window.pageYOffset,
        isMobile: window.innerWidth <= m.MOBILE_BREAKPOINT
      };
    }
    /**
     * Calculates if and where to scroll to make input visible
     */
    calculateScrollPosition(t, e) {
      const n = t.getBoundingClientRect(), { height: o, scrollY: i, isMobile: r } = e, s = n.top >= 0 && n.bottom <= o, d = r ? m.MOBILE_OFFSET_RATIO : m.DESKTOP_OFFSET_RATIO, h = r ? m.MOBILE_VISIBILITY_RATIO : m.DESKTOP_VISIBILITY_RATIO, g = n.top < o * h;
      let b = !1, u = i;
      if (!s || g) {
        const v = o * d;
        u = i + n.bottom - o + v;
        const y = Math.abs(u - i), U = r ? m.MOBILE_SCROLL_THRESHOLD : m.DESKTOP_SCROLL_THRESHOLD;
        if (y > U) {
          const $ = document.documentElement.scrollHeight - o;
          u = Math.max(
            0,
            Math.min(u, $)
          ), b = !0;
        }
      }
      return {
        inputRect: n,
        isInputVisible: s,
        isInputTooHigh: g,
        shouldScroll: b,
        targetScrollPosition: u
      };
    }
  }
  class D {
    constructor(t, e) {
      this.bundleSelected = !1, this.stateManager = t, this.apiService = e;
    }
    /**
     * Attaches event listeners to form elements
     */
    attachFormEventListeners() {
      document.querySelectorAll(l.RADIO_INPUTS).forEach((e) => {
        e.addEventListener("change", (n) => {
          const o = n.target;
          this.handleRadioChange(o);
        });
      });
    }
    /**
     * Handles radio button change
     */
    handleRadioChange(t) {
      const e = t.value === "bundle";
      this.bundleSelected = e, this.stateManager.saveBundleState(e), e || this.stateManager.clearBundleState(), e && E(
        "exp_tick_02_click_03",
        "Select 4 pack bundles",
        "click",
        "Bundle and save"
      ), this.updatePriceDisplay(t);
    }
    /**
     * Updates price display based on selected input
     */
    updatePriceDisplay(t) {
      const e = document.querySelector(l.PRICE_NUM), n = document.querySelector(l.PRICE_OFF), o = document.querySelector(l.COMPARE_PRICE), i = document.querySelector(l.SAVED_PRICE), r = t.dataset.tickPrice, s = t.dataset.percentOff, d = t.dataset.comparePrice, h = t.dataset.savedPrice;
      e && r && (e.textContent = r), n && s && (n.textContent = s), o && d && (o.textContent = d), i && h && (i.textContent = h);
    }
    /**
     * Hijacks the checkout button to handle bundle logic
     */
    hijackCheckoutButton() {
      const t = document.getElementById("proceed");
      if (!t) {
        console.warn("Checkout button not found, retrying in 1 second..."), setTimeout(() => this.hijackCheckoutButton(), p.RETRY_DELAY);
        return;
      }
      t.hasAttribute(c.HIJACKED) || (t.setAttribute(c.HIJACKED, "true"), t.setAttribute("href", "#"), t.addEventListener("click", async (e) => {
        e.preventDefault();
        const n = document.querySelector(
          l.CHECKED_RADIO
        );
        if (!n) {
          console.error("No pack selected");
          return;
        }
        n.value === "bundle" ? await this.addBundleToCart() : await this.addOriginalPackToCart(n);
      }));
    }
    /**
     * Adds bundle to cart and redirects to checkout
     */
    async addBundleToCart() {
      try {
        await this.apiService.clearCart(), await this.apiService.addProductToCart(
          this.apiService.bundleVariantId,
          1
        ), setTimeout(() => {
          window.location.href = w.CHECKOUT;
        }, p.CHECKOUT_REDIRECT_DELAY);
      } catch (t) {
        console.error("Error adding bundle to cart:", t);
      }
    }
    /**
     * Adds original pack to cart and redirects to checkout
     */
    async addOriginalPackToCart(t) {
      try {
        const e = t.dataset.tickId, n = 1;
        if (!e) {
          console.error("No variant ID found");
          return;
        }
        await this.apiService.clearCart(), await this.apiService.addProductToCart(parseInt(e), n), this.stateManager.clearBundleState(), setTimeout(() => {
          window.location.href = w.CHECKOUT;
        }, p.CHECKOUT_REDIRECT_DELAY);
      } catch (e) {
        console.error("Error adding original pack to cart:", e);
      }
    }
    /**
     * Returns current bundle selection state
     */
    getBundleSelected() {
      return this.bundleSelected;
    }
    /**
     * Sets bundle selection state
     */
    setBundleSelected(t) {
      this.bundleSelected = t;
    }
    /**
     * Show tooltip for bundle items
     */
    showTooltip() {
      const t = document.querySelectorAll(
        `.${c.TOOLTIP_ICON}`
      );
      t && t.length > 0 && (t.forEach((e) => {
        const n = e.parentElement;
        e.addEventListener("click", () => {
          n.getAttribute("data-tooltip") !== "show" ? (n.setAttribute("data-tooltip", "show"), E(
            "exp_tick_02_click_04",
            "Tooltip",
            "click",
            "Bundle and save"
          )) : n.setAttribute("data-tooltip", "hide");
        });
      }), window.addEventListener("click", (e) => {
        const n = e.target;
        !n.classList.contains(c.TOOLTIP_ICON) && !n.closest(`.${c.TOOLTIP_ICON}`) && !n.closest(`.${c.TOOLTIP_CONTENT}`) && t.forEach((o) => {
          o.parentElement.setAttribute("data-tooltip", "hide");
        });
      }));
    }
  }
  class R {
    constructor() {
      this.init();
    }
    init() {
      this.changeTitle("Select Package"), this.addSubtitle("48 patches in 1 pack");
    }
    getBundleTitle() {
      return document.querySelector(l.BUNDLE_TITLE);
    }
    changeTitle(t) {
      const e = this.getBundleTitle();
      console.log("ChangeBundleTitle initialized", e, t), e && (e.textContent = t);
    }
    addSubtitle(t) {
      const e = this.getBundleTitle();
      if (e) {
        const n = document.createElement("div");
        n.className = "crs-bundle-subtitle", n.textContent = t, e.insertAdjacentElement("afterend", n);
      }
    }
  }
  class M {
    constructor() {
      this.bundleOption = {
        id: 44402670927916,
        name: "Special Bundle",
        price: "$40.00",
        // Will be updated with proper formatting
        description: "New exclusive bundle with extra benefits",
        isBundle: !0
      }, this.stateManager = new O(), this.priceFormatter = new B(), this.apiService = new k(A, 44402670927916), this.renderer = new L(this.priceFormatter), this.accordionHandler = new N(), this.eventHandler = new D(
        this.stateManager,
        this.apiService
      ), this.changeBundleTitle = new R(), document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => this.init()) : this.init();
    }
    /**
     * Initialize the bundle functionality
     */
    async init() {
      this.addStyles();
      const { bundle: t, tickPatches: e, mosquitoPatches: n } = await this.apiService.fetchBundleWithItems();
      this.addBundleToExistingForm(t, e, n), this.eventHandler.hijackCheckoutButton(), this.restoreBundleState();
    }
    /**
     * Adds bundle to the existing product form
     */
    addBundleToExistingForm(t, e, n) {
      const o = document.querySelector(l.PACKS_CONTAINER);
      if (!o) {
        console.warn("Packs container not found, retrying in 1 second..."), setTimeout(
          () => this.addBundleToExistingForm(
            t,
            e,
            n
          ),
          p.RETRY_DELAY
        );
        return;
      }
      if (document.getElementById("packBundle"))
        return;
      if (!t || !t.variant) {
        console.warn("No API data available for bundle");
        return;
      }
      const i = this.prepareFormattedData(
        t,
        e,
        n
      );
      this.bundleOption.name = i.bundleName, this.bundleOption.price = i.formattedPrice, this.bundleOption.description = i.bundleDescription;
      const r = this.renderer.generateBundleHTML(i);
      o.insertAdjacentHTML("beforeend", r), this.eventHandler.attachFormEventListeners(), this.accordionHandler.attachAccordionListeners(), this.eventHandler.showTooltip();
    }
    /**
     * Prepares formatted data from API response
     */
    prepareFormattedData(t, e = null, n = null) {
      const o = t.variant.price, i = t.variant.compare_at_price || o * 2.5, r = t.title || "Special Bundle", s = t.description || "New exclusive bundle with extra benefits", d = this.priceFormatter.formatMoney(o), h = this.priceFormatter.formatMoney(o / 4);
      console.log("Formatted each price:", h);
      const g = this.priceFormatter.formatMoney(i), b = this.priceFormatter.formatMoney(
        i - o
      ), u = Math.round(
        (i - o) / i * 100
      ), v = this.priceFormatter.formatMoney(
        t.price_min || o
      ), x = this.priceFormatter.formatBundleItem(
        e,
        "Tick Patches"
      ), y = this.priceFormatter.formatBundleItem(
        n,
        "Mosquito Patches"
      );
      return {
        bundlePrice: o,
        comparePrice: i,
        bundleName: r,
        bundleDescription: s,
        formattedPrice: d,
        formattedEachPrice: h,
        formattedComparePrice: g,
        savedAmount: b,
        percentOff: u,
        tickPatches: x,
        mosquitoPatches: y,
        formattedPriceMin: v
      };
    }
    /**
     * Restores bundle state from sessionStorage
     */
    restoreBundleState() {
      const t = this.stateManager.getBundleState();
      if (t && t.isSelected) {
        const e = () => {
          const n = document.getElementById(
            "packBundle"
          );
          n ? (n.checked = !0, this.eventHandler.setBundleSelected(!0), this.eventHandler.updatePriceDisplay(n), this.accordionHandler.openAccordionIfClosed()) : setTimeout(e, p.STATE_CHECK_INTERVAL);
        };
        e();
      }
    }
    /**
     * Adds CSS styles to the page
     */
    addStyles() {
      const t = document.createElement("style");
      t.textContent = P, document.head.appendChild(t);
    }
    // Public API methods
    /**
     * Returns bundle variant ID
     */
    getBundleVariantId() {
      return 44402670927916;
    }
    /**
     * Returns bundle information
     */
    getBundleInfo() {
      return this.bundleOption;
    }
    /**
     * Gets current bundle information from API
     */
    async getBundleInfoFromAPI() {
      return await this.apiService.fetchBundleInfo();
    }
    /**
     * Checks if bundle is available for purchase
     */
    async isBundleAvailable() {
      return await this.apiService.isBundleAvailable();
    }
  }
  const F = "";
  _({ name: "Tick - Improve E-Commerce section", dev: "OS" }), S("exp_tick_02");
  class H {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.init();
    }
    init() {
      this.device === "mobile" && (this.addStyles(), new M());
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = F, document.head.appendChild(t);
    }
  }
  new H();
})();
