var G = function() {
  "use strict";
  const E = (s, t, a, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: t,
      event_type: a,
      event_loc: n
    }), console.log(`Event: ${s} | ${t} | ${a} | ${n}`);
  }, I = ({ name: s, dev: t }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, T = (s) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", s, "variant_1"));
    }, 1e3);
  };
  function Z(s) {
    return new Promise((t) => {
      if (document.querySelector(s))
        return t(document.querySelector(s));
      const a = new MutationObserver(() => {
        document.querySelector(s) && (t(document.querySelector(s)), a.disconnect());
      });
      a.observe(document.documentElement, {
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
    } catch (s) {
      return console.error("Error fetching cart data:", s), {
        data: null,
        error: s
      };
    }
  }, O = async (s) => {
    try {
      if (!s)
        throw new Error("Handle is not defined");
      const a = await (await fetch(
        `https://sonno.co.uk/products/${s}?sections=product-cart-json&test`
      )).json(), n = a["product-cart-json"].indexOf("{"), c = a["product-cart-json"].lastIndexOf("}") + 1;
      if (n === -1 || c === 0)
        throw new Error("JSON дані не знайдено");
      const r = a["product-cart-json"].substring(n, c);
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

.crs-mattress-item img {
  width: 100% !important;
  height: 132px !important;
  object-fit: cover !important;
  border-radius: 0 !important;
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

@media (max-width: 768px) {
  .cart-product-item {
    margin-top: 12px;
    padding: 8px !important;
    border-radius: 12px 12px 0 0;
  }
  .cart-product-item + .block.md\\:hidden {
    padding: 8px;
    border-radius: 0 0 12px 12px;
    background: #f5f5f5;
  }
  .crs-mattress-upsell {
    margin-top: 0;
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
  class U {
    constructor() {
      this.init(), this.cartItems = [], this.device = window.innerWidth < 768 ? "mobile" : "desktop";
    }
    init() {
      this.addStyles(), this.observeChooseMattressDialog(), this.getCartData(), this.observeMattressButtons();
    }
    async getCartData() {
      const { data: t, error: a } = await H();
      if (a || !t) {
        console.error("Error fetching cart data:", a);
        return;
      }
      const { items: n } = t;
      this.cartItems = n;
    }
    async renderUpsell(t) {
      var A, j;
      if (!t) {
        console.error("Mattress button not found");
        return;
      }
      function a(w) {
        const S = w.match(/variant=(\d+)/);
        return S ? +S[1] : null;
      }
      let n;
      this.device === "desktop" ? n = t.closest(".cart-product-item") : n = (A = t.closest("section")) == null ? void 0 : A.previousElementSibling;
      const c = n == null ? void 0 : n.querySelector(
        ".cart-product-info a"
      );
      if (!c) return;
      const r = c.href, $ = a(r), b = t.querySelector("button");
      if (!b) {
        console.error("Add Mattress button not found");
        return;
      }
      const m = (j = this.cartItems.find((w) => w.id === $)) == null ? void 0 : j.handle, { data: y, error: C } = await O(m);
      if (y && y.mattresses) {
        const w = [
          "Medium/Firm",
          "Firm",
          "Medium",
          "Extra Firm",
          "Soft"
        ], S = w.reduce(
          (e, i) => ({ ...e, [i]: [] }),
          {}
        );
        y.mattresses.forEach(({ tags: e, ...i }) => {
          var l;
          const o = (l = e.find((g) => g.startsWith("firmness:"))) == null ? void 0 : l.split(":")[1];
          o && S[o] && S[o].push(i);
        });
        const M = `mattress-upsell-${Math.random().toString(36).substr(2, 9)}`, J = (e, i, o) => {
          const l = i.map(({ id: d, title: v, images: k, variants: p }, x) => {
            const { price: f, compare_at_price: u } = p.find(
              (h) => h.title.toLowerCase() === y.current_varrint_size_varients.toLowerCase()
            );
            return (
              /* HTML */
              `
              <div
                class="crs-mattress-item ${this.device === "desktop" && x >= 3 ? "hidden" : ""}"
                data-mattress-id="${d}"
              >
                <img
                  src="${k == null ? void 0 : k[0]}"
                  alt="${v}"
                  width="140"
                  height="132"
                  loading="lazy"
                />
                <h3>${v}</h3>
                <div class="crs-mattress-prices">
                  <div class="crs-mattress-price">
                    ${u ? `<del>£${(u / 100).toFixed(2)}</del>` : ""}
                    <ins>£${(f / 100).toFixed(2)}</ins>
                  </div>
                  <span class="crs-mattress-discount">
                    ${u ? `Save £${((u - f) / 100).toFixed(2)}` : ""}
                  </span>
                </div>
                <div class="crs-mattress-footer">
                  <button data-variant-id="${d}" class="crs-add-to-cart">
                    Add
                  </button>
                </div>
              </div>
            `
            );
          }).join(""), g = i.length > 3 ? (
            /* HTML */
            `<button
                class=" crs-mattress-item crs-mattress-see-all"
                data-category="${e}"
                data-upsell-id="${M}"
              >
                ${D} See all mattresses
                <span></span>
              </button>`
          ) : "";
          return (
            /* HTML */
            `
          <div
            class="crs-mattress-tab ${o ? "active" : ""}"
            data-category="${e}"
            data-upsell-id="${M}"
          >
            <div class="crs-mattress-list">${l}${g}</div>
          </div>
        `
          );
        }, W = w.map(
          (e, i) => J(
            e,
            S[e] || [],
            i === 0
          )
        ).join(""), R = w.map(
          (e, i) => (
            /* HTML */
            `
            <button
              class="crs-mattress-tab-nav ${i === 0 ? "active" : ""}"
              data-category="${e}"
              data-upsell-id="${M}"
            >
              <svg
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
              </svg>
              ${e === "Medium/Firm" ? "Medium Firm" : e}
            </button>
          `
          )
        ).join("");
        t.insertAdjacentHTML(
          "afterend",
          /* HTML */
          `
          <div class="crs-mattress-upsell" id="${M}">
            <div class="crs-mattress-upsell-title">Add Matress & Save:</div>
            <div class="crs-mattress-upsell-description">
              Enjoy a <span>60-Night Free Trial</span>! Choose your mattress
              with confidence—if it’s not perfect, we’ll arrange a
              <span>hassle-free return or exchange</span>
            </div>
            <div class="crs-mattress-upsell-tabs">
              <div class="crs-mattress-tabs-nav">${R}</div>
              ${W}
            </div>
          </div>
        `
        );
        const q = (e, i, o) => {
          document.querySelectorAll(e).forEach((l) => l.addEventListener(i, o));
        };
        q(
          `.crs-mattress-tab-nav[data-upsell-id="${M}"]`,
          "click",
          (e) => {
            var l;
            const { category: i, upsellId: o } = e.target.dataset;
            E(
              "exp_m_upsell_click_01",
              i,
              "click",
              "Add Matress & Save"
            ), document.querySelectorAll(
              `.crs-mattress-tab[data-upsell-id="${o}"], .crs-mattress-tab-nav[data-upsell-id="${o}"]`
            ).forEach((g) => g.classList.remove("active")), (l = document.querySelector(
              `.crs-mattress-tab[data-category="${i}"][data-upsell-id="${o}"]`
            )) == null || l.classList.add("active"), e.target.classList.add("active");
          }
        ), q(
          `.crs-mattress-see-all[data-upsell-id="${M}"]`,
          "click",
          (e) => {
            const { category: i, upsellId: o } = e.target.dataset;
            b.click(), E(
              "exp_m_upsell_click_04",
              "See all",
              "click",
              "Add Matress & Save"
            );
          }
        ), q(`#${M} .crs-add-to-cart`, "click", (e) => {
          var g, d;
          const i = e.target.dataset.variantId, o = (d = (g = e.target.closest(".crs-mattress-item")) == null ? void 0 : g.querySelector("h3")) == null ? void 0 : d.textContent;
          document.body.classList.add("modal-open-hidden"), E(
            "exp_m_upsell_click_03",
            o,
            "click",
            "Add Matress & Save"
          ), b.click();
          const l = new MutationObserver((v) => {
            v.forEach((k) => {
              if (k.type === "childList" && document.querySelector('[role="dialog"]')) {
                l.disconnect();
                const p = document.querySelector(
                  '[role="dialog"][data-state="open"]'
                ), x = Array.from(
                  (p == null ? void 0 : p.querySelectorAll(".ss-tabs a")) || []
                ).find(
                  (f) => {
                    var u;
                    return ((u = f.textContent) == null ? void 0 : u.trim()) === w.find(
                      (h) => S[h].some(
                        (L) => L.id == i
                      )
                    );
                  }
                );
                x == null || x.click(), setTimeout(() => {
                  p == null || p.querySelectorAll(".card-addons").forEach((f) => {
                    var u, h, L;
                    ((u = f.querySelector(".title-card")) == null ? void 0 : u.textContent) === o && (f.click(), (h = p.querySelector(".card-button button")) == null || h.click(), (L = document.querySelector(`#${M}`)) == null || L.remove(), setTimeout(() => {
                      document.body.classList.remove("modal-open-hidden");
                    }, 1e3));
                  });
                }, 1e3);
              }
            });
          });
          l.observe(document.body, {
            childList: !0,
            subtree: !0
          });
        }), q(
          ".crs-mattress-item:not(.crs-mattress-see-all) > *:not(.crs-mattress-footer)",
          "click",
          (e) => {
            var l, g;
            const i = e.target.closest(".crs-mattress-item").dataset.mattressId, o = (g = (l = e.target.closest(".crs-mattress-item")) == null ? void 0 : l.querySelector("h3")) == null ? void 0 : g.textContent;
            document.body.classList.add("modal-open-hidden"), E(
              "exp_m_upsell_click_02",
              o,
              "click",
              "Add Matress & Save"
            ), b.click(), Z('[role="dialog"][data-state="open"]').then(() => {
              const d = document.querySelector(
                '[role="dialog"][data-state="open"]'
              ), v = d == null ? void 0 : d.querySelector("h2 + button"), k = Array.from(
                (d == null ? void 0 : d.querySelectorAll(".ss-tabs a")) || []
              ).find(
                (p) => {
                  var x;
                  return ((x = p.textContent) == null ? void 0 : x.trim()) === w.find(
                    (f) => S[f].some(
                      (u) => u.id == i
                    )
                  );
                }
              );
              k == null || k.click(), setTimeout(() => {
                d == null || d.querySelectorAll(".card-addons").forEach((p) => {
                  var x;
                  if (((x = p.querySelector(".title-card")) == null ? void 0 : x.textContent) === o) {
                    const f = p.querySelector("button");
                    f == null || f.click(), Z(
                      '[role="dialog"][data-state="open"] .mattress-details'
                    ).then((u) => {
                      var z;
                      const h = u.closest(
                        '[role="dialog"]'
                      ), L = h == null ? void 0 : h.querySelector("h2 + button");
                      L == null || L.addEventListener("click", () => {
                        v == null || v.click(), setTimeout(() => {
                          document.body.classList.remove("modal-open-hidden");
                        }, 500);
                      }), (z = h == null ? void 0 : h.previousElementSibling) == null || z.addEventListener(
                        "click",
                        (V) => {
                          V.target.closest("[data-vaul-overlay]") && (v == null || v.click(), setTimeout(() => {
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
    }
    async observeMattressButtons() {
      await Z(".cart-product-image");
      let t;
      this.device === "desktop" ? t = document.querySelectorAll(".cart-product-image") : t = document.querySelectorAll(
        ".cart-product-item + .block.md\\:hidden"
      );
      const a = new MutationObserver((n) => {
        n.forEach((c) => {
          c.addedNodes.forEach((r) => {
            var $, b, m;
            if (r instanceof HTMLElement) {
              if (r.classList.contains("card-addons") && (($ = r.textContent) != null && $.includes("Add Mattress & Save"))) {
                r.classList.add("crs-mattress-control-btn"), this.renderUpsell(r);
                const y = document.querySelector(
                  ".crs-mattress-upsell--chosen"
                );
                y && y.remove();
              }
              r.classList.contains("card-addons") && ((b = r.textContent) != null && b.includes("Remove")) && ((m = r.textContent) != null && m.includes("See Details")) && (r.classList.add("crs-mattress-chosen"), this.changeChosenMattressElement(r));
            }
          });
        });
      });
      t.forEach((n) => {
        a.observe(n, {
          childList: !0,
          subtree: !0
        });
      });
    }
    observeChooseMattressDialog() {
      new MutationObserver((a) => {
        a.forEach((n) => {
          n.addedNodes.forEach((c) => {
            var r;
            c instanceof HTMLElement && c.role === "dialog" && c.querySelector(".ss-tabs") && (c.classList.add("crs-mattress-dialog"), (r = c.previousElementSibling) == null || r.classList.add(
              "crs-mattress-dialog-backdrop"
            ));
          });
        });
      }).observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    changeChosenMattressElement(t) {
      var b;
      const a = t.querySelectorAll("button");
      let n = null, c = null;
      a.forEach((m) => {
        var y, C;
        (y = m.textContent) != null && y.includes("See Details") && (m.classList.add("crs-mattress-details-btn"), n = m), (C = m.textContent) != null && C.includes("Remove") && (c = m, m.classList.add("crs-mattress-remove-btn"));
      });
      const r = t.querySelector(
        ".card-pricing-details .price > span"
      );
      if (r) {
        const m = (b = r.textContent) == null ? void 0 : b.replace(/Was:\s*/, "").trim();
        r.textContent = m || "";
      }
      c && n && c.insertAdjacentElement(
        "afterend",
        n
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
      this.addStyles(), new U();
    }
    addStyles() {
      const t = document.createElement("style");
      t.innerHTML = F, document.head.appendChild(t);
    }
  }
  I({
    name: "Mattress Upsell",
    dev: "OS"
  }), T("mattress_upsell");
  class _ {
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
  return new _(), {
    LaunchExperiment: _
  };
}();
