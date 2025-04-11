var G = function() {
  "use strict";
  const $ = (s, t, o, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: t,
      event_type: o,
      event_loc: n
    }), console.log(`Event: ${s} | ${t} | ${o} | ${n}`);
  }, _ = ({ name: s, dev: t }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, z = (s) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", s, "variant_1"));
    }, 1e3);
  };
  function q(s) {
    return new Promise((t) => {
      if (document.querySelector(s))
        return t(document.querySelector(s));
      const o = new MutationObserver(() => {
        document.querySelector(s) && (t(document.querySelector(s)), o.disconnect());
      });
      o.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const T = "", F = async () => {
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
      const o = await (await fetch(
        `https://sonno.co.uk/products/${s}?sections=product-cart-json`
      )).json(), n = o["product-cart-json"].indexOf("{"), c = o["product-cart-json"].lastIndexOf("}") + 1;
      if (n === -1 || c === 0)
        throw new Error("JSON дані не знайдено");
      const r = o["product-cart-json"].substring(n, c), M = JSON.parse(r);
      return console.log("product", M.mattresses), { data: M.mattresses, error: null };
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
  ), H = `body.modal-open-hidden
  :is(.crs-mattress-dialog, .crs-mattress-dialog-backdrop) {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
}

.cart-product-item {
  margin-top: 48px;
  border-radius: 16px;
  background: #f5f5f5;
  border: none;
}

.cart-product-item .cart-product-quantity input {
  background: transparent;
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
      const { data: t, error: o } = await F();
      if (o || !t) {
        console.error("Error fetching cart data:", o);
        return;
      }
      const { items: n } = t;
      this.cartItems = n;
    }
    async renderUpsell(t) {
      var A, I;
      if (!t) {
        console.error("Mattress button not found");
        return;
      }
      function o(v) {
        const b = v.match(/variant=(\d+)/);
        return b ? +b[1] : null;
      }
      let n;
      this.device === "desktop" ? n = t.closest(".cart-product-item") : n = (A = t.closest("section")) == null ? void 0 : A.previousElementSibling;
      const c = n == null ? void 0 : n.querySelector(
        ".cart-product-info a"
      );
      if (!c) return;
      const r = c.href, M = o(r), S = t.querySelector("button");
      if (!S) {
        console.error("Add Mattress button not found");
        return;
      }
      const E = (I = this.cartItems.find((v) => v.id === M)) == null ? void 0 : I.handle, { data: Z, error: V } = await O(E);
      if (console.log("data", Z), Z) {
        const v = [
          "Medium/Firm",
          "Firm",
          "Medium",
          "Extra Firm",
          "Soft"
        ], b = v.reduce(
          (e, a) => ({ ...e, [a]: [] }),
          {}
        );
        Z.forEach(({ tags: e, ...a }) => {
          var d;
          const i = (d = e.find((f) => f.startsWith("firmness:"))) == null ? void 0 : d.split(":")[1];
          i && b[i] && b[i].push(a);
        });
        const y = `mattress-upsell-${Math.random().toString(36).substr(2, 9)}`, P = (e, a, i) => {
          const d = a.map(
            ({ id: p, title: m, price: w, images: l, compare_at_price: u }, h) => (
              /* HTML */
              `
              <div
                class="crs-mattress-item ${this.device === "desktop" && h >= 3 ? "hidden" : ""}"
                data-mattress-id="${p}"
              >
                <img
                  src="${l == null ? void 0 : l[0]}"
                  alt="${m}"
                  width="140"
                  height="132"
                  loading="lazy"
                />
                <h3>${m}</h3>
                <div class="crs-mattress-prices">
                  <div class="crs-mattress-price">
                    ${u ? `<del>${(u / 100).toFixed(2)}</del>` : ""}
                    <ins> ${(w / 100).toFixed(2)}</ins>
                  </div>
                  <span class="crs-mattress-discount">
                    ${u ? `Save ${((u - w) / 100).toFixed(2)}` : ""}
                  </span>
                </div>
                <div class="crs-mattress-footer">
                  <button data-variant-id="${p}" class="crs-add-to-cart">
                    Add
                  </button>
                </div>
              </div>
            `
            )
          ).join(""), f = a.length > 3 ? (
            /* HTML */
            `<button
                class=" crs-mattress-item crs-mattress-see-all"
                data-category="${e}"
                data-upsell-id="${y}"
              >
                ${D} See all mattresses
                <span></span>
              </button>`
          ) : "";
          return (
            /* HTML */
            `
          <div
            class="crs-mattress-tab ${i ? "active" : ""}"
            data-category="${e}"
            data-upsell-id="${y}"
          >
            <div class="crs-mattress-list">${d}${f}</div>
          </div>
        `
          );
        }, J = v.map(
          (e, a) => P(
            e,
            b[e] || [],
            a === 0
          )
        ).join(""), R = v.map(
          (e, a) => (
            /* HTML */
            `
            <button
              class="crs-mattress-tab-nav ${a === 0 ? "active" : ""}"
              data-category="${e}"
              data-upsell-id="${y}"
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
          <div class="crs-mattress-upsell" id="${y}">
            <div class="crs-mattress-upsell-title">Add Matress & Save:</div>
            <div class="crs-mattress-upsell-description">
              Enjoy a <span>60-Night Free Trial</span>! Choose your mattress
              with confidence—if it’s not perfect, we’ll arrange a
              <span>hassle-free return or exchange</span>
            </div>
            <div class="crs-mattress-upsell-tabs">
              <div class="crs-mattress-tabs-nav">${R}</div>
              ${J}
            </div>
          </div>
        `
        );
        const L = (e, a, i) => {
          document.querySelectorAll(e).forEach((d) => d.addEventListener(a, i));
        };
        L(
          `.crs-mattress-tab-nav[data-upsell-id="${y}"]`,
          "click",
          (e) => {
            var d;
            const { category: a, upsellId: i } = e.target.dataset;
            $(
              "exp_m_upsell_click_01",
              a,
              "click",
              "Add Matress & Save"
            ), document.querySelectorAll(
              `.crs-mattress-tab[data-upsell-id="${i}"], .crs-mattress-tab-nav[data-upsell-id="${i}"]`
            ).forEach((f) => f.classList.remove("active")), (d = document.querySelector(
              `.crs-mattress-tab[data-category="${a}"][data-upsell-id="${i}"]`
            )) == null || d.classList.add("active"), e.target.classList.add("active");
          }
        ), L(
          `.crs-mattress-see-all[data-upsell-id="${y}"]`,
          "click",
          (e) => {
            const { category: a, upsellId: i } = e.target.dataset;
            S.click(), $("exp_m_upsell_click_04", "See all", "click", "Add Matress & Save");
          }
        ), L(`#${y} .crs-add-to-cart`, "click", (e) => {
          var f, p;
          const a = e.target.dataset.variantId, i = (p = (f = e.target.closest(".crs-mattress-item")) == null ? void 0 : f.querySelector("h3")) == null ? void 0 : p.textContent;
          document.body.classList.add("modal-open-hidden"), $(
            "exp_m_upsell_click_03",
            i,
            "click",
            "Add Matress & Save"
          ), S.click();
          const d = new MutationObserver((m) => {
            m.forEach((w) => {
              if (w.type === "childList" && document.querySelector('[role="dialog"]')) {
                d.disconnect();
                const l = document.querySelector(
                  '[role="dialog"][data-state="open"]'
                ), u = Array.from(
                  (l == null ? void 0 : l.querySelectorAll(".ss-tabs a")) || []
                ).find(
                  (h) => {
                    var x;
                    return ((x = h.textContent) == null ? void 0 : x.trim()) === v.find(
                      (g) => b[g].some(
                        (k) => k.id == a
                      )
                    );
                  }
                );
                u == null || u.click(), setTimeout(() => {
                  l == null || l.querySelectorAll(".card-addons").forEach((h) => {
                    var x, g, k;
                    ((x = h.querySelector(".title-card")) == null ? void 0 : x.textContent) === i && (h.click(), (g = l.querySelector(".card-button button")) == null || g.click(), (k = document.querySelector(`#${y}`)) == null || k.remove(), setTimeout(() => {
                      document.body.classList.remove("modal-open-hidden");
                    }, 1e3));
                  });
                }, 1e3);
              }
            });
          });
          d.observe(document.body, {
            childList: !0,
            subtree: !0
          });
        }), L(
          ".crs-mattress-item:not(.crs-mattress-see-all) > *:not(.crs-mattress-footer)",
          "click",
          (e) => {
            var d, f;
            const a = e.target.closest(".crs-mattress-item").dataset.mattressId, i = (f = (d = e.target.closest(".crs-mattress-item")) == null ? void 0 : d.querySelector("h3")) == null ? void 0 : f.textContent;
            document.body.classList.add("modal-open-hidden"), $(
              "exp_m_upsell_click_02",
              i,
              "click",
              "Add Matress & Save"
            ), S.click(), q('[role="dialog"][data-state="open"]').then(() => {
              const p = document.querySelector(
                '[role="dialog"][data-state="open"]'
              ), m = p == null ? void 0 : p.querySelector("h2 + button"), w = Array.from(
                (p == null ? void 0 : p.querySelectorAll(".ss-tabs a")) || []
              ).find(
                (l) => {
                  var u;
                  return ((u = l.textContent) == null ? void 0 : u.trim()) === v.find(
                    (h) => b[h].some(
                      (x) => x.id == a
                    )
                  );
                }
              );
              w == null || w.click(), setTimeout(() => {
                p == null || p.querySelectorAll(".card-addons").forEach((l) => {
                  var u;
                  if (((u = l.querySelector(".title-card")) == null ? void 0 : u.textContent) === i) {
                    const h = l.querySelector("button");
                    h == null || h.click(), q(
                      '[role="dialog"][data-state="open"] .mattress-details'
                    ).then((x) => {
                      var j;
                      const g = x.closest(
                        '[role="dialog"]'
                      ), k = g == null ? void 0 : g.querySelector("h2 + button");
                      k == null || k.addEventListener("click", () => {
                        m == null || m.click(), setTimeout(() => {
                          document.body.classList.remove("modal-open-hidden");
                        }, 500);
                      }), (j = g == null ? void 0 : g.previousElementSibling) == null || j.addEventListener(
                        "click",
                        (W) => {
                          W.target.closest("[data-vaul-overlay]") && (m == null || m.click(), setTimeout(() => {
                            document.body.classList.remove("modal-open-hidden");
                          }, 500));
                        }
                      );
                    }), console.log("modalCloseButton", m);
                  }
                });
              }, 500);
            });
          }
        );
      }
    }
    async observeMattressButtons() {
      await q(".cart-product-image");
      let t;
      this.device === "desktop" ? t = document.querySelectorAll(".cart-product-image") : t = document.querySelectorAll(
        ".cart-product-item + .block.md\\:hidden"
      );
      const o = new MutationObserver((n) => {
        n.forEach((c) => {
          c.addedNodes.forEach((r) => {
            var M, S, E;
            r instanceof HTMLElement && (r.classList.contains("card-addons") && ((M = r.textContent) != null && M.includes("Add Mattress & Save")) && (r.classList.add("crs-mattress-control-btn"), this.renderUpsell(r)), r.classList.contains("card-addons") && ((S = r.textContent) != null && S.includes("Remove")) && ((E = r.textContent) != null && E.includes("See Details")) && (r.classList.add("crs-mattress-chosen"), this.changeChosenMattressElement(r)));
          });
        });
      });
      t.forEach((n) => {
        o.observe(n, {
          childList: !0,
          subtree: !0
        });
      });
    }
    observeChooseMattressDialog() {
      new MutationObserver((o) => {
        o.forEach((n) => {
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
      console.log("changeChosenMattressElement", t), t.querySelectorAll("button").forEach((n) => {
        var c, r;
        (c = n.textContent) != null && c.includes("See Details") && console.log(n), (r = n.textContent) != null && r.includes("Remove") && console.log(n);
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.innerHTML = H, document.head.appendChild(t);
    }
  }
  class N {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), new U();
    }
    addStyles() {
      const t = document.createElement("style");
      t.innerHTML = T, document.head.appendChild(t);
    }
  }
  _({
    name: "Mattress Upsell",
    dev: "OS"
  }), z("mattress_upsell");
  class C {
    constructor() {
      this.init();
    }
    init() {
      this.isInCart() && (console.log("In cart"), new N());
    }
    isInCart() {
      return window.location.href.includes("/cart");
    }
  }
  return new C(), {
    LaunchExperiment: C
  };
}();
//# sourceMappingURL=index.js.map
