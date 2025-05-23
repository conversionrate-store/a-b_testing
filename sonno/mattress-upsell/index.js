var R = function() {
  "use strict";
  const Z = (a, t, e, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: t,
      event_type: e,
      event_loc: s
    }), console.log(`Event: ${a} | ${t} | ${e} | ${s}`);
  }, T = ({ name: a, dev: t }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, O = (a) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", a, "variant_1"));
    }, 1e3);
  };
  function j(a) {
    return new Promise((t) => {
      if (document.querySelector(a))
        return t(document.querySelector(a));
      const e = new MutationObserver(() => {
        document.querySelector(a) && (t(document.querySelector(a)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const F = `
.cart-product-item {
  margin-top: 48px;
  border-radius: 16px;
  background: #f5f5f5;
  border: none;
}

.cart-product-item .cart-product-quantity input {
  background: transparent;
}`, H = async () => {
    try {
      return {
        data: await (await fetch("https://sonno.co.uk/cart.json?vsly=t")).json(),
        error: null
      };
    } catch (a) {
      return console.error("Error fetching cart data:", a), {
        data: null,
        error: a
      };
    }
  }, U = async (a) => {
    try {
      if (!a)
        throw new Error("Handle is not defined");
      const e = await (await fetch(
        `https://sonno.co.uk/products/${a}?sections=product-cart-json&test`
      )).json(), s = e["product-cart-json"].indexOf("{"), i = e["product-cart-json"].lastIndexOf("}") + 1;
      if (s === -1 || i === 0)
        throw new Error("JSON дані не знайдено");
      const r = e["product-cart-json"].substring(s, i);
      return { data: JSON.parse(r), error: null };
    } catch (t) {
      return console.error("Помилка розбору JSON:", t), { data: null, error: t };
    }
  }, D = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="49"
  height="33"
  fill="none"
>
  <path
    fill="#fff"
    d="M1.663 16.437h44.8a1.599 1.599 0 0 0 1.352-2.455L39.956 1.54a2.389 2.389 0 0 0-2.03-1.12H10.2a2.388 2.388 0 0 0-2.03 1.12L.313 13.982a1.6 1.6 0 0 0 1.35 2.455Zm0-1.6 7.86-12.444a.8.8 0 0 1 .677-.373h27.726c.273 0 .53.14.675.373l7.861 12.444-44.8.005v-.005Z"
  />
  <path
    fill="#fff"
    fill-rule="evenodd"
    d="M47.861 20.793c.28-.51.26-1.132-.05-1.624l-.745-1.177a.8.8 0 0 0-1.352.856l.748 1.172-44.796.004.744-1.176a.8.8 0 1 0-1.352-.856l-.743 1.174a1.6 1.6 0 0 0 1.347 2.454h44.8c.582 0 1.118-.317 1.4-.827ZM2.462 32.02h43.2a2.4 2.4 0 0 0 2.4-2.4v-5.6a.8.8 0 1 0-1.6 0v5.6a.8.8 0 0 1-.8.8h-43.2a.8.8 0 0 1-.8-.8v-5.6a.8.8 0 0 0-1.6 0v5.6a2.4 2.4 0 0 0 2.4 2.4Z"
    clip-rule="evenodd"
  />
  <path
    fill="#fff"
    d="M13.663 5.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM20.863 5.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM20.062 9.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM19.263 13.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM12.062 9.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM10.462 13.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM34.463 5.22a.8.8 0 1 0-.001-1.6.8.8 0 0 0 0 1.6ZM27.263 5.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM28.062 9.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM28.863 13.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM36.061 9.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM37.661 13.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z"
  />
  <path
    fill="#fff"
    fill-rule="evenodd"
    d="M4.063 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 0 0-1.6 0ZM7.263 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 0 0-1.6 0ZM10.462 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 1 0-1.6 0ZM13.663 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 0 0-1.6 0ZM16.862 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 1 0-1.6 0ZM20.063 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 0 0-1.6 0ZM23.262 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 1 0-1.6 0ZM26.462 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 0 0-1.6 0ZM29.662 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 0 0-1.6 0ZM32.862 24.02v4a.8.8 0 1 0 1.6 0v-4a.8.8 0 1 0-1.6 0ZM36.063 24.02v4a.8.8 0 1 0 1.598 0v-4a.8.8 0 1 0-1.599 0ZM39.263 24.02v4a.8.8 0 1 0 1.6 0v-4a.8.8 0 1 0-1.6 0ZM42.462 24.02v4a.8.8 0 1 0 1.6 0v-4a.8.8 0 1 0-1.6 0Z"
    clip-rule="evenodd"
  />
</svg>`
  ), A = (
    /* HTML */
    ` <svg
  xmlns="http://www.w3.org/2000/svg"
  width="21"
  height="4"
  fill="none"
>
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="2"
    d="M1.844 1.357c6.526 1.751 10.279 1.677 17.312 0"
  />
</svg>`
  ), N = `body.modal-open-hidden
  :is(.crs-mattress-dialog, .crs-mattress-dialog-backdrop) {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
}

.crs-mattress-control-btn {
  display: none;
}

.crs-mattress-upsell {
  margin-top: 40px;
}
.crs-mattress-upsell-title {
  color: #1e3851;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
}

.crs-mattress-upsell-description {
  margin-top: 6px;
  color: #1e3851;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px; /* 157.143% */
}

.crs-mattress-upsell-description span {
  font-weight: 500;
}
.crs-mattress-upsell-tabs {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
}

.crs-mattress-tabs-nav {
  display: flex;
  gap: 8px;
}

.crs-mattress-tab-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 64px;
  height: 64px;
  padding: 11px 4px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  background: #fff;
  color: #1e3851;
  text-align: center;
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 127.273% */
  letter-spacing: 0.25px;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.crs-mattress-tab-nav:hover {
  background: rgb(241 245 249 / var(--tw-bg-opacity, 1));
}

.crs-mattress-tab-nav.active {
  background: #3589da;
  color: #fff;
}

.crs-mattress-tab {
  display: none;
}

.crs-mattress-tab.active {
  display: block;
}

.crs-mattress-list {
  margin-top: 12px;
  display: flex;
  gap: 8px;
}

.crs-mattress-item {
  flex: 1 1 calc(33.333% - 16px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 140px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
}

.crs-mattress-item.hidden {
  display: none;
}
.crs-mattress-image {
  position: relative;
  width: 100% !important;
  height: 132px !important;
}
.crs-mattress-item img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  border-radius: 0 !important;
}

.crs-mattress-category {
  position: absolute;
  bottom: 5px;
  right: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;
  padding: 5px;
  border-radius: 8px;
  background: rgba(30, 56, 81, 0.53);
  color: #fff;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: 0.25px;
  text-transform: capitalize;
}
.crs-mattress-item h3 {
  padding-inline: 8px;
  color: #1e3851;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.crs-mattress-prices {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 8px;
}

.crs-mattress-price {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.crs-mattress-price del {
  color: #1e3851;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.325px;
  text-decoration: line-through;
}

.crs-mattress-price ins {
  color: #1e3851;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-decoration: none;
}

.crs-mattress-discount {
  padding: 5px;
  border-radius: 2px;
  background: #e00d46;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  line-height: 24px;
}

.crs-mattress-footer {
  padding-inline: 8px;
  padding-bottom: 8px;
}

.crs-mattress-footer button {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  background: #3589da;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  cursor: pointer;
}

.crs-mattress-see-all {
  display: flex;
  padding-inline: 4px;
  justify-content: center;
  align-items: center;
  background: #3589da;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.crs-mattress-see-all span {
  width: 28px;
  height: 28px;
  background-color: #fff;
  border-radius: 4px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none"><path stroke="%233589DA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.806" d="M1.24 12.665 6.885 7.02 1.24 1.375"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.crs-mattress-chosen {
  align-items: flex-start;
  border: none;
  border-radius: 8px;
  background: #fff;
}

.crs-mattress-chosen .card-button {
  flex-shrink: 0;
  display: flex;
  gap: 6px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100%;
}

.crs-mattress-chosen .card-button button {
  padding: 0;
  font-size: 12px;
  line-height: 20px;
}
.crs-mattress-chosen .card-pricing-details {
  display: flex;
  gap: 6px;
}

.crs-mattress-chosen .card-pricing-details .price {
  flex-direction: column;
  align-items: flex-start !important;
  gap: 0 !important;
}

.crs-mattress-chosen .card-pricing-details .price > span {
  order: 0;
  color: #1e3851;
  font-size: 12px;
  line-height: 16px;
}
.crs-mattress-chosen .card-pricing-details .price > label {
  order: 1;
  color: #1e3851;
  font-size: 16px;
  line-height: 20px;
}

.crs-mattress-chosen  .card-pricing-details .save-price {
  align-items: flex-end !important;
}

@media (max-width: 768px) {
  .cart-product-item {
    margin-top: 12px;
    padding: 8px !important;
    border-bottom: 1px solid #E2E2E2;;
    border-radius: 12px 12px 0 0;
  }
  :is(.crs-mattress-upsell, .crs-mattress-chosen) {
    padding: 8px;
    background: #f5f5f5;
  }
  
  .crs-mattress-chosen {
    position: relative;
    margin-top: 0 !important;
    padding-top: 12px;
    padding-inline: 16px !important;
    border-radius: 0 0 12px 12px;
  }

  .crs-mattress-chosen::before {
    content: '';
    position: absolute;
    top: 0;
    left: 8px;
    width: calc(100% - 16px);
    height: calc(100% - 8px);
    background-color: #fff;
    border-radius: 8px;
  }

  .crs-mattress-chosen :is(.card-body, .card-button) {
    position: relative;
    z-index: 1;
  }
  .crs-mattress-upsell {
    margin-top: 0;
    padding-top: 16px;
  }

  .crs-mattress-upsell-title {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
  }
  
  .crs-mattress-upsell-description {
    margin-top: 12px;
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
  }

  .crs-mattress-upsell--chosen .crs-mattress-upsell-description {
    display: none;
  }
  .crs-mattress-upsell-tabs {
    margin-top: 16px;
  }

  .crs-mattress-tab-nav {
    width: 59px;
    height: 64px;
  }

  .crs-mattress-list {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 8px;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .crs-mattress-item {
    max-width: 148px;
  }

  .crs-mattress-list::-webkit-scrollbar {
    display: none;
  }

  .crs-mattress-item {
    flex: 0 0 auto;
    max-width: 140px;
  }

  .crs-mattress-price del {
    color: #989898;
  }

  .crs-mattress-see-all {
    display: none;
  }
}
`;
  class J {
    constructor() {
      this.init(), this.cartItems = [], this.mattresses = [], this.device = window.innerWidth < 768 ? "mobile" : "desktop";
    }
    init() {
      this.addStyles(), this.observeChooseMattressDialog(), this.getCartData(), this.observeMattressButtons();
    }
    async getCartData() {
      const { data: t, error: e } = await H();
      if (e || !t) {
        console.error("Error fetching cart data:", e);
        return;
      }
      const { items: s } = t;
      this.cartItems = s;
    }
    // Add memoization to fetchMattresses using sessionStorage
    async fetchMattresses(t) {
      const e = sessionStorage.getItem(`mattresses_${t}`);
      if (e)
        return JSON.parse(e);
      const { data: s, error: i } = await U(t);
      if (s && s.mattresses) {
        const d = [
          "Medium/Firm",
          "Firm",
          "Medium",
          "Extra Firm",
          "Soft"
        ].reduce(
          (c, k) => ({ ...c, [k]: [] }),
          {}
        );
        s.mattresses.forEach(({ tags: c, ...k }) => {
          var u;
          const l = (u = c.find((_) => _.startsWith("firmness:"))) == null ? void 0 : u.split(":")[1];
          l && d[l] && d[l].push(k);
        }), this.mattresses = s.mattresses;
        const S = {
          categorizedMattresses: d,
          currentVariant: s.current_varrint_size_varients,
          allMattresses: s.mattresses
        };
        return sessionStorage.setItem(`mattresses_${t}`, JSON.stringify(S)), S;
      }
      return i && console.error("Error fetching product data:", i), { categorizedMattresses: {}, currentVariant: "", allMattresses: [] };
    }
    extractIdFromUrl(t) {
      const e = t.match(/variant=(\d+)/);
      return e ? +e[1] : null;
    }
    async renderUpsell(t) {
      var q, g;
      if (!t) {
        console.error("Mattress button not found");
        return;
      }
      let e;
      this.device === "desktop" ? e = t.closest(".cart-product-item") : e = (q = t.closest("section")) == null ? void 0 : q.previousElementSibling;
      const s = e == null ? void 0 : e.querySelector(
        ".cart-product-info a"
      );
      if (!s) return;
      const i = s.href, r = this.extractIdFromUrl(i), d = t.querySelector("button");
      if (!d) {
        console.error("Add Mattress button not found");
        return;
      }
      const S = (g = this.cartItems.find((n) => n.id === r)) == null ? void 0 : g.handle, { categorizedMattresses: c, currentVariant: k } = await this.fetchMattresses(S), l = `mattress-upsell-${Math.random().toString(36).substr(2, 9)}`, u = (n, o, m) => {
        const b = o.map(({ id: p, title: y, images: $, variants: h }, w) => {
          const { price: x, compare_at_price: f } = h.find(
            (v) => v.title.toLowerCase() === k.toLowerCase()
          );
          return (
            /* HTML */
            `
            <div
              class="crs-mattress-item ${this.device === "desktop" && w >= 3 ? "hidden" : ""}"
              data-mattress-id="${p}"
            >
              <div class="crs-mattress-image">
                <img
                  src="${$ == null ? void 0 : $[0]}"
                  alt="${y}"
                  width="140"
                  height="132"
                  loading="lazy"
                />
                <div class="crs-mattress-category">
                  ${A}
                  ${n === "Medium/Firm" ? "Medium Firm" : n}
                </div>
              </div>
              <h3>${y}</h3>
              <div class="crs-mattress-prices">
                <div class="crs-mattress-price">
                  ${f ? `<del>£${(f / 100).toFixed(2)}</del>` : ""}
                  <ins>£${(x / 100).toFixed(2)}</ins>
                </div>
                <span class="crs-mattress-discount">
                  ${f ? `Save £${((f - x) / 100).toFixed(2)}` : ""}
                </span>
              </div>
              <div class="crs-mattress-footer">
                <button data-variant-id="${p}" class="crs-add-to-cart">
                  Add
                </button>
              </div>
            </div>
          `
          );
        }).join(""), M = o.length > 3 ? (
          /* HTML */
          `<button
              class=" crs-mattress-item crs-mattress-see-all"
              data-category="${n}"
              data-upsell-id="${l}"
            >
              ${D} See all mattresses
              <span></span>
            </button>`
        ) : "";
        return (
          /* HTML */
          `
        <div
          class="crs-mattress-tab ${m ? "active" : ""}"
          data-category="${n}"
          data-upsell-id="${l}"
        >
          <div class="crs-mattress-list">${b}${M}</div>
        </div>
      `
        );
      }, _ = Object.keys(c).map(
        (n, o) => u(
          n,
          c[n] || [],
          o === 0
        )
      ).join(""), C = Object.keys(c).map(
        (n, o) => (
          /* HTML */
          `
          <button
            class="crs-mattress-tab-nav ${o === 0 ? "active" : ""}"
            data-category="${n}"
            data-upsell-id="${l}"
          >
            ${A}
            ${n === "Medium/Firm" ? "Medium Firm" : n}
          </button>
        `
        )
      ).join("");
      t.insertAdjacentHTML(
        "afterend",
        /* HTML */
        `
        <div class="crs-mattress-upsell" id="${l}">
          <div class="crs-mattress-upsell-title">Add Matress & Save:</div>
          <div class="crs-mattress-upsell-description">
            Enjoy a <span>60-Night Free Trial</span>! Choose your mattress with
            confidence—if it’s not perfect, we’ll arrange a
            <span>hassle-free return or exchange</span>
          </div>
          <div class="crs-mattress-upsell-tabs">
            <div class="crs-mattress-tabs-nav">${C}</div>
            ${_}
          </div>
        </div>
      `
      );
      const L = (n, o, m) => {
        document.querySelectorAll(n).forEach((b) => b.addEventListener(o, m));
      };
      L(
        `.crs-mattress-tab-nav[data-upsell-id="${l}"]`,
        "click",
        (n) => {
          var b;
          const { category: o, upsellId: m } = n.target.dataset;
          Z(
            "exp_m_upsell_click_01",
            o,
            "click",
            "Add Matress & Save"
          ), document.querySelectorAll(
            `.crs-mattress-tab[data-upsell-id="${m}"], .crs-mattress-tab-nav[data-upsell-id="${m}"]`
          ).forEach((M) => M.classList.remove("active")), (b = document.querySelector(
            `.crs-mattress-tab[data-category="${o}"][data-upsell-id="${m}"]`
          )) == null || b.classList.add("active"), n.target.classList.add("active");
        }
      ), L(
        `.crs-mattress-see-all[data-upsell-id="${l}"]`,
        "click",
        (n) => {
          const { category: o, upsellId: m } = n.target.dataset;
          d.click(), Z(
            "exp_m_upsell_click_04",
            "See all",
            "click",
            "Add Matress & Save"
          );
        }
      ), L(`#${l} .crs-add-to-cart`, "click", (n) => {
        var M, p;
        const o = n.target.dataset.variantId, m = (p = (M = n.target.closest(".crs-mattress-item")) == null ? void 0 : M.querySelector("h3")) == null ? void 0 : p.textContent;
        document.body.classList.add("modal-open-hidden"), Z(
          "exp_m_upsell_click_03",
          m,
          "click",
          "Add Matress & Save"
        ), d.click();
        const b = new MutationObserver((y) => {
          y.forEach(($) => {
            if ($.type === "childList" && document.querySelector('[role="dialog"]')) {
              b.disconnect();
              const h = document.querySelector(
                '[role="dialog"][data-state="open"]'
              ), w = Array.from(
                (h == null ? void 0 : h.querySelectorAll(".ss-tabs a")) || []
              ).find(
                (x) => {
                  var f;
                  return ((f = x.textContent) == null ? void 0 : f.trim()) === Object.keys(c).find(
                    (v) => c[v].some(
                      (E) => E.id == o
                    )
                  );
                }
              );
              w == null || w.click(), setTimeout(() => {
                h == null || h.querySelectorAll(".card-addons").forEach((x) => {
                  var f, v, E;
                  ((f = x.querySelector(".title-card")) == null ? void 0 : f.textContent) === m && (x.click(), (v = h.querySelector(".card-button button")) == null || v.click(), (E = document.querySelector(`#${l}`)) == null || E.remove(), setTimeout(() => {
                    document.body.classList.remove("modal-open-hidden");
                  }, 1e3));
                });
              }, 1e3);
            }
          });
        });
        b.observe(document.body, {
          childList: !0,
          subtree: !0
        });
      }), L(
        ".crs-mattress-item:not(.crs-mattress-see-all) > *:not(.crs-mattress-footer)",
        "click",
        (n) => {
          var b, M;
          const o = n.target.closest(".crs-mattress-item").dataset.mattressId, m = (M = (b = n.target.closest(".crs-mattress-item")) == null ? void 0 : b.querySelector("h3")) == null ? void 0 : M.textContent;
          document.body.classList.add("modal-open-hidden"), Z(
            "exp_m_upsell_click_02",
            m,
            "click",
            "Add Matress & Save"
          ), d.click(), j('[role="dialog"][data-state="open"]').then(() => {
            const p = document.querySelector(
              '[role="dialog"][data-state="open"]'
            ), y = p == null ? void 0 : p.querySelector("h2 + button"), $ = Array.from(
              (p == null ? void 0 : p.querySelectorAll(".ss-tabs a")) || []
            ).find(
              (h) => {
                var w;
                return ((w = h.textContent) == null ? void 0 : w.trim()) === Object.keys(c).find(
                  (x) => c[x].some(
                    (f) => f.id == o
                  )
                );
              }
            );
            $ == null || $.click(), setTimeout(() => {
              p == null || p.querySelectorAll(".card-addons").forEach((h) => {
                var w;
                if (((w = h.querySelector(".title-card")) == null ? void 0 : w.textContent) === m) {
                  const x = h.querySelector("button");
                  x == null || x.click(), j(
                    '[role="dialog"][data-state="open"] .mattress-details'
                  ).then((f) => {
                    var I;
                    const v = f.closest(
                      '[role="dialog"]'
                    ), E = v == null ? void 0 : v.querySelector("h2 + button");
                    E == null || E.addEventListener("click", () => {
                      y == null || y.click(), setTimeout(() => {
                        document.body.classList.remove("modal-open-hidden");
                      }, 500);
                    }), (I = v == null ? void 0 : v.previousElementSibling) == null || I.addEventListener(
                      "click",
                      (V) => {
                        V.target.closest("[data-vaul-overlay]") && (y == null || y.click(), setTimeout(() => {
                          document.body.classList.remove("modal-open-hidden");
                        }, 500));
                      }
                    );
                  });
                }
              });
            }, 500);
          });
        }
      );
    }
    async observeMattressButtons() {
      await j(".cart-product-image");
      let t;
      this.device === "desktop" ? t = document.querySelectorAll(".cart-product-image") : t = document.querySelectorAll(
        ".cart-product-item + .block.md\\:hidden"
      );
      const e = new MutationObserver((s) => {
        s.forEach((i) => {
          i.addedNodes.forEach((r) => {
            var d, S, c, k, l;
            if (r instanceof HTMLElement) {
              if (r.classList.contains("card-addons") && ((d = r.textContent) != null && d.includes("Add Mattress & Save"))) {
                r.classList.add("crs-mattress-control-btn"), this.renderUpsell(r);
                const u = (S = r.closest(".cart-product-items > div")) == null ? void 0 : S.querySelector(".crs-mattress-upsell--chosen");
                u && u.remove();
              }
              if (r.classList.contains("card-addons") && ((c = r.textContent) != null && c.includes("Remove")) && ((k = r.textContent) != null && k.includes("See Details"))) {
                const u = (l = r.closest(".cart-product-items > div")) == null ? void 0 : l.querySelector(".crs-mattress-upsell");
                u && u.remove(), r.classList.add("crs-mattress-chosen"), this.changeChosenMattressElement(r);
              }
            }
          });
        });
      });
      t.forEach((s) => {
        e.observe(s, {
          childList: !0,
          subtree: !0
        });
      });
    }
    observeChooseMattressDialog() {
      new MutationObserver((e) => {
        e.forEach((s) => {
          s.addedNodes.forEach((i) => {
            var r;
            i instanceof HTMLElement && i.role === "dialog" && i.querySelector(".ss-tabs") && (i.classList.add("crs-mattress-dialog"), (r = i.previousElementSibling) == null || r.classList.add(
              "crs-mattress-dialog-backdrop"
            ));
          });
        });
      }).observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    async changeChosenMattressElement(t) {
      var C, L, q;
      const e = t.querySelectorAll("button");
      t.querySelector(".image-card  img"), t.querySelector(".title-card").textContent;
      let s = null, i = null, r;
      this.device === "desktop" ? r = t.closest(".cart-product-item") : r = (C = t.closest("section")) == null ? void 0 : C.previousElementSibling;
      const d = r == null ? void 0 : r.querySelector(
        ".cart-product-info a"
      );
      if (!d) return;
      const S = d.href, c = this.extractIdFromUrl(S), k = (L = this.cartItems.find((g) => g.id === c)) == null ? void 0 : L.handle, { allMattresses: l } = await this.fetchMattresses(k);
      e.forEach((g) => {
        var n, o;
        (n = g.textContent) != null && n.includes("See Details") && (g.classList.add("crs-mattress-details-btn"), s = g), (o = g.textContent) != null && o.includes("Remove") && (i = g, g.classList.add("crs-mattress-remove-btn"));
      });
      const u = t.querySelector(
        ".card-pricing-details .price > span"
      );
      if (u) {
        const g = (q = u.textContent) == null ? void 0 : q.replace(/Was:\s*/, "").trim();
        u.textContent = g || "";
      }
      i && s && i.insertAdjacentElement(
        "afterend",
        s
      ), t.insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        `<div
      class="crs-mattress-upsell crs-mattress-upsell--chosen"
    >
      <div class="crs-mattress-upsell-title">Add Matress & Save:</div>
      <div class="crs-mattress-upsell-description">
        Enjoy a <span>60-Night Free Trial</span>! Choose your mattress with
        confidence—if it’s not perfect, we’ll arrange a
        <span>hassle-free return or exchange</span>
      </div>
    </div>`
      );
    }
    addStyles() {
      const t = document.createElement("style");
      t.innerHTML = N, document.head.appendChild(t);
    }
  }
  class P {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), new J();
    }
    addStyles() {
      const t = document.createElement("style");
      t.innerHTML = F, document.head.appendChild(t);
    }
  }
  T({
    name: "Mattress Upsell",
    dev: "OS"
  }), O("mattress_upsell");
  class z {
    constructor() {
      this.init();
    }
    init() {
      this.isInCart() && new P();
    }
    isInCart() {
      return window.location.href.includes("/cart");
    }
  }
  return new z(), {
    LaunchExperiment: z
  };
}();
