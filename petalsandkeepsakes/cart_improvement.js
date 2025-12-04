(function() {
  "use strict";
  const d = (s, t, n, e = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: t,
      event_type: n,
      event_loc: e
    }), g(`Event: ${s} | ${t} | ${n} | ${e}`, "success");
  }, f = (s) => new Promise((t) => {
    const n = document.querySelector(s);
    n && t(n);
    const e = new MutationObserver(() => {
      const a = document.querySelector(s);
      a && (t(a), e.disconnect());
    });
    e.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), m = ({ name: s, dev: t }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, y = (s) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", s, "variant_1"));
    }, 1e3);
  }, _ = (s, t, n, e, a = 1e3, o = 0.5) => {
    let i, r;
    if (i = new IntersectionObserver(
      function(c) {
        c[0].isIntersecting === !0 ? r = setTimeout(() => {
          d(
            t,
            c[0].target.dataset.visible || e,
            "view",
            n
          ), i.disconnect();
        }, a) : (g("Element is not fully visible", "warn"), clearTimeout(r));
      },
      { threshold: [o] }
    ), typeof s == "string") {
      const c = document.querySelector(s);
      c && i.observe(c);
    } else
      i.observe(s);
  }, g = (s, t = "info") => {
    let n;
    switch (t) {
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
    console.log(`%c>>> ${s}`, `${n} font-size: 16px; font-weight: 600`);
  }, w = async () => {
    try {
      const s = await fetch("/cart.js", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!s.ok)
        throw new Error(`HTTP error! status: ${s.status}`);
      return { data: await s.json(), error: null };
    } catch (s) {
      return {
        data: null,
        error: s instanceof Error ? s : new Error("Unknown error")
      };
    }
  }, x = async (s) => {
    try {
      const t = await fetch(`/products/${s}.js`, {
        credentials: "same-origin"
      });
      if (!t.ok)
        throw new Error(`HTTP error! status: ${t.status}`);
      return {
        data: await t.json(),
        error: null
      };
    } catch (t) {
      return {
        data: null,
        error: t
      };
    }
  }, C = async (s, t) => {
    try {
      const n = await fetch(window.Shopify.routes.root + "cart/change.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: s,
          quantity: t
        })
      });
      if (!n.ok) {
        const a = await n.json().catch(() => ({}));
        throw new Error(`HTTP error! status: ${n.status}, details: ${JSON.stringify(a)}`);
      }
      return { data: await n.json(), error: null };
    } catch (n) {
      return {
        data: null,
        error: n instanceof Error ? n : new Error("Unknown error")
      };
    }
  };
  class v {
    async getCartData() {
      const { data: t, error: n } = await w();
      return n || !t ? (console.error("Error fetching cart data:", n), null) : await this.enrichCartWithCompareAt(t);
    }
    async updateQuantity(t, n) {
      if (n < 0)
        return console.error("Quantity cannot be negative"), null;
      const { data: e, error: a } = await C(t, n);
      return a || !e ? (console.error("Error updating cart quantity:", a), null) : await this.enrichCartWithCompareAt(e);
    }
    async enrichCartWithCompareAt(t) {
      const n = [...new Set(t.items.map((o) => o.handle))], e = /* @__PURE__ */ new Map();
      await Promise.all(
        n.map(async (o) => {
          const { data: i, error: r } = await x(o);
          if (r || !i) {
            console.error(`Error fetching product for handle ${o}:`, r);
            return;
          }
          e.set(o, i);
        })
      );
      const a = t.items.map((o) => {
        var l;
        const i = e.get(o.handle), r = (l = i == null ? void 0 : i.variants) == null ? void 0 : l.find(
          (p) => Number(p.id) === o.variant_id
        ), c = r != null && r.compare_at_price ? Math.round(parseFloat(r.compare_at_price) * 100) : null;
        return {
          ...o,
          compare_at_price: c,
          price_varies: i == null ? void 0 : i.price_varies
        };
      });
      return { ...t, items: a };
    }
  }
  const b = `#cart-notification
  :is(
    #atc_header .calculation,
    #cn_atc_steps,
    .cart-notification__links .accepted_cards,
    .cart-notification__links .cn_continue_shopping
  ) {
  display: none;
}

#cart-notification {
  height: 100dvh !important;
  overflow-y: auto !important;
  justify-content: flex-start !important;
}

#cart-notification
  :is(
    #atc_header,
    .cart-notification-product,
    .customer_note,
    .crs-how-it-works,
    .cart-notification__links
  ) {
  padding-inline: 22px !important;
}

#cart-notification #atc_header {
  top: 0 !important;
  padding-block: 24px !important;
}

#cart-notification #atc_header .close_btn {
  top: 50%;
  right: 15px;
  width: 44px;
  height: 44px;
  transform: translateY(-50%);
}

#cart-notification #atc_header .close_btn button {
  margin: 0 !important;
}
.crs-cart-title {
  margin-inline: 12px;
  color: #000;
  font-size: 17px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.6px;
}

#cart-notification .cnp_del {
  position: absolute;
  right: 30px;
  width: 13px;
  height: 13px;
}
/* Product Image */
#cart-notification .cart-notification-product__image {
  flex-direction: column;
  max-height: none !important;
  min-width: 130px;
  border: none;
}

#cart-notification .cart-notification-product__image a {
  display: block;
  width: 130px;
  height: 130px;
}
#cart-notification .cart-notification-product__image img {
  width: 130px;
  height: 130px;
  max-height: none !important;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: top;
}

#cart-notification .product-option.cnp_product_repeat {
  display: none;
}

#cart-notification .cart-notification-product {
  margin-bottom: 0;

  padding-bottom: 0;
  height: auto;
}
/* Product Description */
#cart-notification .cnp_desc {
  display: flex;
  flex-direction: column;
}
#cart-notification .cnp_desc .cart-notification-product__name {
  width: calc(100% - 26px);
}
#cart-notification .cnp_desc .cart-notification-product__name a {
  color: #000;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.6px;
  text-decoration: none;
}
#cart-notification .cnp_desc dl {
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(3, 0.5lh);
  gap: 4px 8px;
}

#cart-notification .cnp_desc dl .product-option {
  height: auto !important;
  font-size: 14px !important;
  line-height: 14px !important;
  letter-spacing: 0.6px !important;
}

#cart-notification .cnp_desc dl .product-option dt {
  color: rgba(18, 18, 18, 0.75);
  font-size: 14px !important;
  font-weight: 400;
  line-height: 14px !important;
  letter-spacing: 0.6px !important;
}

#cart-notification .cnp_desc dl .cnp_variant {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

#cart-notification .cnp_desc dl .cnp_options {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

#cart-notification .cnp_desc dl .product-option.cnp_price {
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  align-self: end;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-self: end;
}

#cart-notification .cnp_desc dl .product-option.cnp_price :is(dt, dd) {
  font-weight: 600 !important;
  font-size: 14px;
}

#cart-notification
  .cnp_desc
  dl
  .product-option.cnp_price
  :is(dt, dd)
  .presentment_price {
  font-weight: 700 !important;
}
#cart-notification .cnp_desc dl .cnp_price dt:not(.crs-old-price) {
  display: none;
}

.crs-old-price {
  color: #121212;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.6px;
  text-decoration-line: line-through;
}

.crs-sale-badge {
  margin-top: 8px;
  margin-left: auto;
  width: max-content;
  padding: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #334fb4;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0.6px;
}
/* Quantity Controls Styling */
#cart-notification .cart-item__quantity {
  width: 100%;
}

#cart-notification .cart-item__quantity {
  margin-top: 6px;
}
#cart-notification .cart-quantity {
  margin: 0;
  width: 100%;
  max-width: 100%;
  height: 36px;
  min-height: auto;
  border: 1px solid #dfdfdf;
}

#cart-notification .cart-quantity::after {
  box-shadow: none !important;
}

#cart-notification .quantity__button {
  width: 50px !important;
}

#cart-notification .quantity__button svg {
  width: 1rem;
}

/* Express checkout */
#cart-notification div:has(> #dynamic-checkout-cart) {
  display: block !important;
}

#cart-notification #cart-notification-form button {
  min-height: 46px;
}

/* Customer Note Accordion */
#cart-notification .customer_note {
  margin-top: 0;
  overflow: hidden;
  width: 100%;
  min-height: max-content;
}

#cart-notification[data-item-count='0'] .customer_note {
  display: none;
}

#cart-notification .customer_note .note-accordion-content p {
  color: rgba(18, 18, 18, 0.75);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.6px;
}

#cart-notification .note-accordion-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
  padding-block: 24px;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: rgba(18, 18, 18, 0.75);
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.6px;
  transition: background-color 0.2s ease;
  text-decoration: underline;
  cursor: pointer;
}

#cart-notification .note-accordion-trigger.active {
  display: none;
}
#cart-notification .note-accordion-content {
  padding-block: 24px;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#cart-notification .note-accordion-content p {
  margin: 0 0 12px 0;
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}

#cart-notification .note-accordion-content textarea {
  width: 100%;
  min-height: 80px;
  padding: 11px;
  border: 1px solid #767676;
  border-radius: 4px;
  font-size: 12px;
  font-family: inherit;
  transition: border-color 0.2s ease;
}

#cart-notification .note-accordion-content textarea:focus {
  outline: none;
  border-color: #5433eb;
  box-shadow: 0 0 0 2px rgba(84, 51, 235, 0.1);
}

/* How It Works Section */
.cart-notification__links + .crs-how-it-works {
  display: none;
}

.crs-how-it-works {
  padding-top: 22px;
  padding-inline: 30px;
  border-top: 1px solid #dfdfdf;
  font-family: Assistant, sans-serif;
}

.crs-how-it-works .crs-title {
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 19.5px; /* 139.286% */
  letter-spacing: 0.6px;
}

.crs-how-it-works .crs-content {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
}
.crs-how-it-works .crs-highlight {
  color: #a72561;
}
/* Checkout button section */
#cart-notification .cnp_bottom {
  display: contents !important;
}
#cart-notification .cart-notification__links {
  margin-top: auto;
  position: sticky !important;
  bottom: 0;
  padding-block: 17px;
  border-top: 1px solid #d1d1d1;
  background: #eeeded !important;
  z-index: 2;
}
#cart-notification .cart-notification__links .totals {
  padding: 0;
}
#cart-notification .cart-notification__links .totals .tas {
  display: none;
}
.crs-free-shipping {
  margin-top: 8px;
  text-align: left !important;
  color: #000;

  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; /* 136.364% */
  letter-spacing: 0;
}
.crs-free-shipping .crs-icon {
  display: inline-block;
  vertical-align: middle;
  margin-right: 4px;
}
.crs-free-shipping .crs-highlight {
  text-transform: uppercase;
}

/*  Warranty message */
.crs-warranty-message {
  margin-top: auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  color: #121212;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
}

.crs-warranty-message .crs-icon {
  display: inline-flex;
  align-items: center;
}

.crs-tooltip {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: help;
}

.crs-tooltip .crs-icon {
  display: inline-flex;
  align-items: center;
}

.crs-tooltip .crs-tooltip-text {
  position: absolute;
  bottom: calc(100% + 8px);
  right: -6px;
  transform: translateX(0);
  width: 220px;
  padding: 12px;
  border-radius: 8px;
  background: #eecede;
  box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.12);
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 1000;
}

.crs-tooltip .crs-tooltip-text::after {
  content: '';
  position: absolute;
  top: 100%;
  right: 8px;
  transform: translateX(0);
  border: 6px solid transparent;
  border-top-color: #eecede;
}

.crs-tooltip:hover .crs-tooltip-text {
  opacity: 1;
  visibility: visible;
}

.cart-item__error-text:empty + svg {
  display: none;
}

@media (max-width: 768px) {
  #cart-notification
    :is(
      #atc_header,
      .cart-notification-product,
      .customer_note,
      .crs-how-it-works,
      .cart-notification__links
    ) {
    padding-inline: 15px !important;
  }

  #cart-notification #atc_header .close_btn {
    right: 0;
  }
  #cart-notification .cnp_del {
    right: 15px;
  }
  #cart-notification[data-item-count='1'] .crs-how-it-works {
    display: none;
  }

  #cart-notification[data-item-count='1'] .cnp_bottom {
    display: block;
  }
  #cart-notification[data-item-count='1'] .cart-notification__links {
    position: static !important;
  }

  #cart-notification[data-item-count='1']
    .cart-notification__links
    + .crs-how-it-works {
    display: block;
    background: #fff;
  }

  .crs-warranty-message {
    font-size: 13px;
  }
  .crs-tooltip .crs-tooltip-text {
    right: -6px;
  }
  .crs-tooltip .crs-tooltip-text::after {
    right: 8px;
  }

  /* Checkout button section */
  #cart-notification .cnp_bottom {
    display: block !important;
  }
}
`;
  class k {
    quantityControls(t, n) {
      const e = `Quantity-${n + 1}`;
      return (
        /* HTML */
        ` <div
        class="cart-item__quantity"
        data-line-key="${t.key}"
      >
        <label class="visually-hidden" for="${e}"> Quantity </label>
        <div class="quantity cart-quantity">
          <button
            class="quantity__button no-js-hidden"
            name="minus"
            type="button"
          >
            <span class="visually-hidden"
              >Decrease quantity for ${t.title}</span
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              class="icon icon-minus"
              fill="none"
              viewBox="0 0 10 2"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <input
            class="quantity__input"
            data-quantity-variant-id="${t.variant_id}"
            type="number"
            name="updates[]"
            value="${t.quantity}"
            data-cart-quantity="${t.quantity}"
            min="1"
            step="1"
            aria-label="Quantity for ${t.title}"
            id="${e}"
            data-index="${n + 1}"
          />
          <button
            class="quantity__button no-js-hidden"
            name="plus"
            type="button"
          >
            <span class="visually-hidden"
              >Increase quantity for ${t.title}</span
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              class="icon icon-plus"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="cart-item__error" id="Line-item-error-${n + 1}" role="alert">
        <small class="cart-item__error-text"></small>
        <svg
          aria-hidden="true"
          focusable="false"
          class="icon icon-error"
          viewBox="0 0 13 13"
        >
          <circle
            cx="6.5"
            cy="6.50049"
            r="5.5"
            stroke="white"
            stroke-width="2"
          ></circle>
          <circle
            cx="6.5"
            cy="6.5"
            r="5.5"
            fill="#EB001B"
            stroke="#EB001B"
            stroke-width="0.7"
          ></circle>
          <path
            d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z"
            fill="white"
          ></path>
          <path
            d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z"
            fill="white"
            stroke="#EB001B"
            stroke-width="0.7"
          ></path>
        </svg>
      </div>`
      );
    }
    howItWorks() {
      return (
        /* HTML */
        ` <div class="crs-how-it-works">
      <div class="crs-title">How it works</div>
      <div class="crs-content">
        <p>
          <span class="crs-highlight">Place your order</span> and immediately
          receive mailing instructions for sending your inclusion(s).
        </p>
        <p>
          <span class="crs-highlight">Send</span> us a small single inclusion or
          a combination of materials (e.g., ashes, flowers). Anything unused
          will be returned to you.
        </p>
        <p>
          <span class="crs-highlight">Receive</span> your handcrafted memorial
          jewellery within 6–8 weeks.
        </p>
        <p>
          <span class="crs-highlight">Enjoy</span> wearing your memorial
          jewellery, covered by a Lifetime Warranty, knowing you’re among
          10,000+ happy customers.
        </p>
      </div>
    </div>`
      );
    }
    freeShippingMessage() {
      return (
        /* HTML */
        `<div class="crs-free-shipping">
      <span class="crs-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
        >
          <path
            d="M1.125 5.625H7.875V6.75H1.125V5.625ZM0 2.8125H5.625V3.9375H0V2.8125Z"
            fill="black"
          />
          <path
            d="M15.7051 5.96587L14.0176 2.02837C13.9742 1.92721 13.9021 1.841 13.8102 1.7804C13.7183 1.71981 13.6107 1.68751 13.5006 1.6875H11.8131V0.5625C11.8131 0.41332 11.7539 0.27024 11.6484 0.16475C11.5429 0.0592601 11.3998 0 11.2506 0H2.25062V1.125H10.6881V8.1877C10.432 8.3368 10.2078 8.5349 10.0284 8.7709C9.8491 9.0068 9.7181 9.2758 9.643 9.5625H6.10824C5.97133 9.0323 5.64574 8.5701 5.19249 8.2628C4.73924 7.9554 4.18945 7.8239 3.64618 7.8929C3.10291 7.9619 2.60345 8.2267 2.24143 8.6376C1.87942 9.0485 1.67969 9.5774 1.67969 10.125C1.67969 10.6726 1.87942 11.2015 2.24143 11.6124C2.60345 12.0233 3.10291 12.2881 3.64618 12.3571C4.18945 12.4261 4.73924 12.2946 5.19249 11.9872C5.64574 11.6799 5.97133 11.2177 6.10824 10.6875H9.643C9.7654 11.1703 10.0452 11.5984 10.4382 11.9043C10.8313 12.2101 11.3151 12.3762 11.8131 12.3762C12.3111 12.3762 12.7949 12.2101 13.188 11.9043C13.581 11.5984 13.8609 11.1703 13.9832 10.6875H15.1881C15.3373 10.6875 15.4804 10.6282 15.5859 10.5227C15.6914 10.4173 15.7506 10.2742 15.7506 10.125V6.1875C15.7506 6.1113 15.7351 6.0359 15.7051 5.96587ZM3.93812 11.25C3.71561 11.25 3.4981 11.184 3.3131 11.0604C3.12809 10.9368 2.9839 10.7611 2.89875 10.5555C2.8136 10.3499 2.79132 10.1237 2.83473 9.9055C2.87814 9.6873 2.98529 9.4868 3.14262 9.3295C3.29995 9.1722 3.50041 9.065 3.71864 9.0216C3.93687 8.9782 4.16307 9.0005 4.36863 9.0856C4.5742 9.1708 4.7499 9.315 4.87352 9.5C4.99714 9.685 5.06312 9.9025 5.06312 10.125C5.06312 10.4234 4.94459 10.7095 4.73361 10.9205C4.52263 11.1315 4.23648 11.25 3.93812 11.25ZM11.8131 2.8125H13.1294L14.3354 5.625H11.8131V2.8125ZM11.8131 11.25C11.5906 11.25 11.3731 11.184 11.1881 11.0604C11.0031 10.9368 10.8589 10.7611 10.7738 10.5555C10.6886 10.3499 10.6663 10.1237 10.7097 9.9055C10.7531 9.6873 10.8603 9.4868 11.0176 9.3295C11.175 9.1722 11.3754 9.065 11.5936 9.0216C11.8119 8.9782 12.0381 9.0005 12.2436 9.0856C12.4492 9.1708 12.6249 9.315 12.7485 9.5C12.8721 9.685 12.9381 9.9025 12.9381 10.125C12.9381 10.4234 12.8196 10.7095 12.6086 10.9205C12.3976 11.1315 12.1115 11.25 11.8131 11.25ZM14.6256 9.5625H13.9832C13.8593 9.0807 13.579 8.6536 13.1863 8.3482C12.7936 8.0428 12.3106 7.8764 11.8131 7.875V6.75H14.6256V9.5625Z"
            fill="black"
          />
        </svg>
      </span>

      Congratulation! You have earned
      <span class="crs-highlight">free shipping</span> with this order
    </div>`
      );
    }
    saleBadge() {
      return (
        /* HTML */
        `<div class="crs-sale-badge">
      Don't miss limited-time offer
    </div>`
      );
    }
    warrantyMessage() {
      return (
        /* HTML */
        `<div class="crs-warranty-message">
      <span class="crs-icon"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
        >
          <path
            d="M7.50164 0.529182C7.64748 0.529182 7.78289 0.562271 7.90789 0.628448L13.8141 3.27551C14.1683 3.42992 14.4496 3.67257 14.6579 4.00345C14.8871 4.33433 15.0016 4.72036 15.0016 5.16154C15.0225 6.28654 14.8454 7.61006 14.4704 9.13212C14.0954 10.6542 13.4183 12.1321 12.4391 13.5659C11.4808 15.0218 10.1058 16.224 8.31415 17.1726C7.77248 17.4373 7.23081 17.4373 6.68914 17.1726C4.89748 16.224 3.52248 15.0218 2.56414 13.5659C1.58498 12.1321 0.907895 10.6542 0.532895 9.13212C0.157895 7.61006 -0.0191886 6.28654 0.00164474 5.16154C0.00164474 4.72036 0.116228 4.33433 0.345395 4.00345C0.553728 3.67257 0.834978 3.42992 1.18914 3.27551L7.09539 0.628448C7.22039 0.562271 7.35581 0.529182 7.50164 0.529182ZM7.50164 2.74609V15.2534C8.91831 14.4814 10.0329 13.4998 10.8454 12.3086C11.6371 11.1174 12.1996 9.89315 12.5329 8.6358C12.8454 7.35639 13.0016 6.20933 13.0016 5.19462L7.50164 2.74609Z"
            fill="#A72561"
          />
        </svg>
      </span>
      Lifetime Warranty Included
      <span class="crs-tooltip"
        ><span class="crs-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
          >
            <path
              fill="#121212"
              fill-opacity=".75"
              d="M6.781 0c3.719 0 6.782 3.063 6.782 6.781 0 3.746-3.063 6.782-6.782 6.782A6.78 6.78 0 0 1 0 6.78C0 3.063 3.035 0 6.781 0Zm0 3.008c-.656 0-1.148.52-1.148 1.148 0 .657.492 1.149 1.148 1.149.63 0 1.149-.492 1.149-1.149 0-.629-.52-1.148-1.149-1.148Zm1.532 6.945v-.656a.353.353 0 0 0-.329-.328h-.328V6.234a.353.353 0 0 0-.328-.328h-1.75a.332.332 0 0 0-.328.328v.657c0 .191.137.328.328.328h.328v1.75h-.328a.332.332 0 0 0-.328.328v.656c0 .192.137.328.328.328h2.406a.332.332 0 0 0 .329-.328Z"
            />
          </svg>
        </span>
        <div class="crs-tooltip-text">
          Enjoy lifetime protection on all craftsmanship and material defects —
          your piece is always cared for.
        </div></span
      >
    </div>`
      );
    }
  }
  class S {
    constructor() {
      this.cartData = null, this.cartElement = null, this.pollInterval = null, this.cartObserver = null, this.currencyIcon = "$", this.handleCartUpdate = async (t) => {
        var n;
        try {
          const e = (n = t == null ? void 0 : t.detail) == null ? void 0 : n.cart;
          if (this.cartData = await this.cartService.enrichCartWithCompareAt(e), this.cartElement = await f("#cart-notification"), !this.cartData || !this.cartElement) return;
          this.dynamicCartChanges(), _(
            this.cartElement,
            "exp_slide_cart_view",
            "Slide Cart",
            "Slide Cart",
            0
          );
        } catch (e) {
          console.error("Error handling cart update:", e);
        }
      }, this.cartService = new v(), this.cartRenderer = new k(), this.init();
    }
    async init() {
      this.addStyles(), this.initChanges();
    }
    initChanges() {
      this.dynamicCartChanges(), this.cartChange(), document.addEventListener("cart:updated", this.handleCartUpdate.bind(this));
      let t = !1;
      $(document).on(
        "click",
        ".custom_cnp .cnp_del",
        this.handleItemDelete.bind(this)
      ), $(document).on("click", ".cart-notification__close", () => {
        t || d("exp_slide_cart_close", "Close", "click", "Slide Cart"), t = !1;
      }), $(document).on(
        "click",
        '#cart-notification .cart-notification__links button[name="checkout"]',
        () => {
          d("exp_slide_cart_checkout", "Checkout", "click", "Slide Cart");
        }
      ), document.addEventListener("click", (n) => {
        const e = n.target, a = document.querySelector("#cart-notification");
        if (!(a && a.contains(e)) && !(e != null && e.closest("sticky-header") || e != null && e.closest(".product-form__submit")) && a != null && a.classList.contains("active")) {
          const o = a.querySelector(
            ".cart-notification__close"
          );
          t = !0, o == null || o.click(), d(
            "exp_slide_cart_backgr_close",
            "Background Close",
            "click",
            "Slide Cart"
          );
        }
      });
    }
    async cartChange() {
      var e;
      const t = await f("#cart-notification");
      if (!t) return;
      const n = t.querySelector(".forFreeShip .cartItems");
      n && ((e = n.querySelector(".noOfCartItems")) == null || e.insertAdjacentHTML("beforebegin", '<div class="crs-cart-title">Your Cart</div>')), this.setupCustomerNoteAccordion(), this.addHowItWorksSection();
    }
    handleItemDelete() {
      setTimeout(async () => {
        this.handleFreeShippingStatus(), this.cartData = await this.cartService.getCartData(), this.cartData && this.addItemsCount(this.cartData);
      }, 1e3);
    }
    addItemsCount(t) {
      const n = t.items.length || 0;
      this.cartElement && this.cartElement.setAttribute("data-item-count", n.toString());
    }
    setupCustomerNoteAccordion() {
      const t = document.querySelector(
        ".customer_note"
      );
      if (!t || t.querySelector(".note-accordion-trigger")) return;
      const n = t.querySelector("p"), e = t.querySelector("#note");
      if (!n || !e) return;
      n.textContent = "Please, specify your request";
      const a = document.createElement("div");
      a.className = "note-accordion-content", a.style.display = "none", a.appendChild(n.cloneNode(!0)), a.appendChild(e);
      const o = document.createElement("div");
      o.className = "note-accordion-trigger", o.innerHTML = /* HTML */
      `
      <span>Have a special request for your order?</span>
    `, t.innerHTML = "", t.appendChild(o), t.appendChild(a), o.addEventListener("click", (i) => {
        i.preventDefault(), a.style.display !== "none" ? (a.style.display = "none", o.classList.remove("active")) : (a.style.display = "block", o.classList.add("active")), d(
          "exp_slide_cart_special_request",
          "Have a special request for your order?",
          "click",
          "Slide Cart"
        );
      }), e.addEventListener("change", () => {
        d(
          "exp_slide_cart_sp_request_input",
          "Special request",
          "input",
          "Slide Cart"
        );
      });
    }
    addHowItWorksSection() {
      const t = document.querySelectorAll(
        ".customer_note, .cart-notification__links"
      );
      t.length && t.forEach((n) => {
        n.insertAdjacentHTML(
          "afterend",
          this.cartRenderer.howItWorks()
        );
      });
    }
    async dynamicCartChanges() {
      let t;
      if (this.cartData)
        t = this.cartData;
      else {
        if (t = await this.cartService.getCartData(), !t) return;
        this.cartData = t;
      }
      await this.changeCartItems(), this.handleFreeShippingStatus(), this.addItemsCount(this.cartData);
    }
    handleFreeShippingStatus() {
      var e, a, o, i;
      const t = (e = this.cartElement) == null ? void 0 : e.querySelector(".congraz"), n = (a = this.cartElement) == null ? void 0 : a.querySelector(
        ".cart-notification__links .totals .tas"
      );
      if (t && t.style.display !== "none")
        n && !((o = this.cartElement) != null && o.querySelector(".crs-free-shipping")) && n.insertAdjacentHTML(
          "afterend",
          this.cartRenderer.freeShippingMessage()
        );
      else {
        g("Free shipping not achieved");
        const r = (i = this.cartElement) == null ? void 0 : i.querySelector(".crs-free-shipping");
        r && r.remove();
      }
    }
    updateCartPrices() {
      if (!this.cartData) return;
      const t = document.querySelectorAll(
        ".noOfCartItems, .cart-count-bubble span"
      );
      t.length > 0 && t.forEach((e) => {
        var a, o, i;
        e.classList.contains(".visually-hidden") ? e.textContent = `${((a = this.cartData) == null ? void 0 : a.item_count) || 0} ${((o = this.cartData) == null ? void 0 : o.item_count) === 1 ? "item" : "items"}` : e.textContent = String(((i = this.cartData) == null ? void 0 : i.item_count) || 0);
      }), this.cartData.items.forEach((e) => {
        const a = document.querySelector(`[id="${e.variant_id}"]`);
        if (!a) return;
        const o = a.querySelector(
          ".cnp_product_repeat dt"
        );
        o && (o.textContent = String(e.quantity));
      });
      const n = document.querySelector(".totals .subtotal .total");
      if (n && this.cartData.total_price !== void 0) {
        const e = (this.cartData.total_price / 100).toFixed(2);
        n.textContent = e;
      }
      this.updateFreeShippingProgress();
    }
    updateFreeShippingProgress() {
      if (!this.cartData) return;
      const t = 2e4, n = this.cartData.total_price || 0, e = t - n, a = Math.min(
        n / t * 100,
        100
      ), o = document.querySelector(".bcb"), i = document.querySelector(".bcg");
      if (o && i) {
        o.style.width = `${a}%`, i.style.width = `${100 - a}%`;
        const l = o.querySelector("img");
        l && (n <= t ? l.style.right = `${95 - a}%` : l.style.right = "0%");
      }
      const r = document.querySelector(".buyToEnjoy"), c = document.querySelector(".congraz");
      if (n >= t)
        r && (r.style.display = "none"), c && (c.style.display = "block");
      else {
        if (r) {
          const l = (e / 100).toFixed(2);
          r.innerHTML = `You're <b>${this.currencyIcon}${l}</b> away from free shipping!`, r.style.display = "block";
        }
        c && (c.style.display = "none");
      }
    }
    async changeCartItems() {
      this.cartData && await Promise.all(
        this.cartData.items.map(async (t, n) => {
          try {
            const e = await Promise.race([
              f(`[id="${t.variant_id}"]`),
              new Promise(
                (a) => setTimeout(() => a(null), 2e3)
              )
            ]);
            if (!e) return;
            this.changeCartItem(e, t), await this.addQuantityControls(
              e,
              t,
              n
            );
          } catch (e) {
            console.error(
              `Failed to add quantity controls for item ${t.variant_id}:`,
              e
            );
          }
        })
      );
    }
    async changeCartItem(t, n) {
      const e = t.querySelector(".cart-notification-product__name"), a = t.querySelector(
        ".cart-notification-product__image img"
      ), o = t.querySelector(".cnp_del"), i = t.querySelector(".cnp_desc");
      if (e) {
        const r = document.createElement("a");
        r.href = `/products/${n.handle}`, r.textContent = e.textContent || "", e.innerHTML = "", e.appendChild(r), r.addEventListener("click", (c) => {
          d(
            "exp_slide_cart_item_title",
            e.textContent,
            "click",
            "Slide Cart"
          );
        });
      }
      if (a) {
        const r = document.createElement("a");
        r.href = `/products/${n.handle}`;
        const c = a.parentElement;
        c && (c.replaceChild(r, a), r.appendChild(a)), r.addEventListener("click", (l) => {
          l.preventDefault(), d(
            "exp_slide_cart_item_image",
            (e == null ? void 0 : e.textContent) || "",
            "click",
            "Slide Cart"
          );
        });
      }
      if (o && o.addEventListener("click", (r) => {
        d(
          "exp_slide_cart_item_remove",
          (e == null ? void 0 : e.textContent) || "",
          "click",
          "Slide Cart"
        );
      }), n.price_varies && n.compare_at_price > n.price) {
        const r = t.querySelector(".cnp_desc dl"), c = t.querySelector(
          ".cnp_desc dl .cnp_price dt"
        ), l = t.querySelector(
          ".cnp_desc dl .cnp_price dd .currency"
        );
        c && (c.innerHTML = /* HTML */
        `<span
            >${l == null ? void 0 : l.textContent}</span
          >
          <span class="crs-old-price-value"
            >${(n.compare_at_price / 1e4).toFixed(2)}</span
          >`, c.classList.add("crs-old-price")), r && !r.querySelector(".crs-sale-badge") && r.insertAdjacentHTML(
          "afterend",
          this.cartRenderer.saleBadge()
        );
      }
      if (i && !i.querySelector(".crs-warranty-message")) {
        i.insertAdjacentHTML(
          "beforeend",
          this.cartRenderer.warrantyMessage()
        );
        const r = i.querySelector(".crs-tooltip"), c = r == null ? void 0 : r.querySelector(".crs-icon");
        c && c.addEventListener("mouseenter", (l) => {
          d(
            "exp_slide_cart_lt_warr_tooltip",
            "Lifetime Warranty Info",
            "click",
            "Slide Cart"
          );
        });
      }
    }
    async addQuantityControls(t, n, e) {
      const a = t.querySelector(".cart-item__quantity");
      a && a && a.remove();
      const o = t.querySelector(
        ".cart-notification-product__image"
      );
      if (!o) return;
      o.insertAdjacentHTML(
        "beforeend",
        this.cartRenderer.quantityControls(n, e)
      );
      const i = t.querySelector(
        `input[data-quantity-variant-id="${n.variant_id}"]`
      ), r = t.querySelector(
        '.quantity__button[name="minus"]'
      ), c = t.querySelector('.quantity__button[name="plus"]');
      n.quantity === 1 && (r == null || r.classList.add("disabled"));
      let l = null;
      r == null || r.addEventListener("click", (p) => {
        p.preventDefault(), p.stopImmediatePropagation(), p.stopPropagation(), l = "button";
        const u = t.querySelector(
          `input[data-quantity-variant-id="${n.variant_id}"]`
        ), h = Math.max(0, parseInt(u.value) - 1);
        i.value = String(h), d("exp_slide_cart_quantity", "minus", "click", "Slide Cart"), h === 1 && (r == null || r.classList.add("disabled")), clearTimeout(i._debounceTimeout), i._debounceTimeout = setTimeout(() => {
          this.handleQuantityChange(n.key, n.variant_id, h);
        }, 300);
      }), c == null || c.addEventListener("click", (p) => {
        p.preventDefault(), p.stopImmediatePropagation(), p.stopPropagation(), l = "button";
        const u = t.querySelector(
          `input[data-quantity-variant-id="${n.variant_id}"]`
        ), h = parseInt(u.value) + 1;
        i.value = String(h), h > 1 && (r == null || r.classList.remove("disabled")), d("exp_slide_cart_quantity", "plus", "click", "Slide Cart"), clearTimeout(i._debounceTimeout), i._debounceTimeout = setTimeout(() => {
          this.handleQuantityChange(n.key, n.variant_id, h);
        }, 300);
      }), i == null || i.addEventListener("change", (p) => {
        const u = parseInt(p.target.value);
        isNaN(u) || u < 0 || (l === "input" && d("exp_slide_cart_quantity", "custom", "click", "Slide Cart"), l = "input", clearTimeout(i._debounceTimeout), i._debounceTimeout = setTimeout(() => {
          this.handleQuantityChange(n.key, n.variant_id, u);
        }, 300));
      }), i == null || i.addEventListener("focus", (p) => {
        l = "input";
      }), i == null || i.addEventListener("blur", (p) => {
        l = null;
      });
    }
    async handleQuantityChange(t, n, e) {
      if (e < 0) return;
      const a = document.querySelector(`[data-line-key="${t}"]`);
      if (!a) {
        console.error("Quantity controls not found for line key:", t);
        return;
      }
      const o = a.querySelectorAll(".qty-btn");
      o.forEach((i) => i.setAttribute("disabled", "true"));
      try {
        const i = await this.cartService.updateQuantity(
          t,
          e
        );
        if (i) {
          this.cartData = i, this.addItemsCount(i);
          const r = i.items.find(
            (c) => c.key === t
          );
          setTimeout(() => {
            const c = a.querySelector(".qty-value");
            if (c && r && (c.textContent = String(r.quantity)), e === 0) {
              const l = document.querySelector(`[id="${n}"]`);
              l && l instanceof HTMLElement && (l.style.transition = "opacity 0.3s ease", l.style.opacity = "0", setTimeout(() => l.remove(), 300));
            }
            this.updateCartPrices(), this.handleFreeShippingStatus();
          }, 100);
        }
      } catch (i) {
        console.error("Failed to update quantity:", i);
      } finally {
        setTimeout(() => {
          o.forEach((i) => i.removeAttribute("disabled"));
        }, 200);
      }
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = b, document.head.appendChild(t);
    }
    destroy() {
      this.cartObserver && this.cartObserver.disconnect(), this.pollInterval && clearInterval(this.pollInterval);
    }
  }
  const q = `
:root {
  --shopify-accelerated-checkout-button-block-size: 0 !important;
}
shopify-accelerated-checkout-cart > *:not(shop-pay-wallet-button) {
  display: none !important;
}`;
  m({ name: "Cart and Navigation improvement", dev: "OS" }), y("exp_cart");
  const E = ["/checkout"];
  class L {
    constructor() {
      this.init();
    }
    init() {
      E.some((t) => location.href.includes(t)) || new S();
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = q, document.head.appendChild(t);
    }
  }
  new L();
})();
