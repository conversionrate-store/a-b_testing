(function() {
  "use strict";
  const w = (o) => new Promise((e) => {
    const n = document.querySelector(o);
    n && e(n);
    const i = new MutationObserver(() => {
      const t = document.querySelector(o);
      t && (e(t), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), v = ({ name: o, dev: e }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, S = (o) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", o, "variant_1"));
    }, 1e3);
  }, $ = `#zbk-upsell-dialog {
  position: fixed;
  inset: 0;
  margin: auto;
  width: 100%;
  max-width: 100%;
  max-height: 100dvh;
  border: none;
  border-radius: 8px;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  color: #000;
  background: #fff;
  overflow-y: auto;
}

#zbk-upsell-dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
}

@keyframes zbk-dialog-in {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes zbk-dialog-out {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(16px); }
}
@keyframes zbk-backdrop-in {
  from { background: rgba(0, 0, 0, 0); }
  to { background: rgba(0, 0, 0, 0.5); }
}

#zbk-upsell-dialog[open] {
  animation: zbk-dialog-in 250ms ease-out;
}
#zbk-upsell-dialog[open]::backdrop {
  animation: zbk-backdrop-in 250ms ease-out;
}
#zbk-upsell-dialog.zbk-closing {
  animation: zbk-dialog-out 200ms ease-in forwards;
}
#zbk-upsell-dialog.zbk-closing::backdrop {
  animation: zbk-backdrop-in 200ms ease-in reverse forwards;
}

#zbk-upsell-dialog * {
  box-sizing: border-box;
}

#zbk-upsell-dialog .zbk-close {
  position: absolute;
  top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 12px;
  width: 40px;
  padding: 0;
  aspect-ratio: 1;
  border: none;
  background: transparent;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  color: #000;
  z-index: 2;
}

/* Header */
#zbk-upsell-dialog .zbk-header {
  background: #f1f2f4;
  padding: 16px 8px 18px;
  text-align: center;
}

#zbk-upsell-dialog .zbk-header__title {
  margin: 0 0 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #000;
}

#zbk-upsell-dialog .zbk-header__subtitle {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #5d5d5d;
}

/* User's current order line */
#zbk-upsell-dialog .zbk-order {
  background: #f1f2f4;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

#zbk-upsell-dialog .zbk-order__qty {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.6px;
  min-width: 16px;
}

#zbk-upsell-dialog .zbk-order__img {
  width: 49px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

#zbk-upsell-dialog .zbk-order__img img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

#zbk-upsell-dialog .zbk-order__name {
  flex: 1;
  font-family: 'DINEngschrift LT', 'Barlow', sans-serif;
  font-size: 18px;
  letter-spacing: 0.36px;
  line-height: 1.1;
}

#zbk-upsell-dialog .zbk-order__price {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
}

/* Transition text */
#zbk-upsell-dialog .zbk-transition {
  padding: 14px 20px;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000;
}

/* Upsell section */
#zbk-upsell-dialog .zbk-upsell {
  padding: 0 12px;
}

#zbk-upsell-dialog .zbk-upsell__tab {
  background: #feefbd;
  border-radius: 8px 8px 0 0;
  padding: 10px 12px;
  text-align: center;
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  margin: 0 auto;
  width: fit-content;
}

#zbk-upsell-dialog .zbk-upsell__tab-accent {
  color: #ff3c81;
}

#zbk-upsell-dialog .zbk-upsell__card {
  background: #feefbd;
  border: 2px solid #ef3d6f;
  border-radius: 8px;
  padding: 24px 12px 12px;
  position: relative;
}

#zbk-upsell-dialog .zbk-upsell__save-badge {
  position: absolute;
  top: -7px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  max-width: (100% + 23px);
  background: #ff3c81;
  color: #fff;
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 0 0 4px 4px;
  text-align: center;

}

/* triangle with css 7px * 7px */
#zbk-upsell-dialog .zbk-upsell__save-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #ff3c81;

}

#zbk-upsell-dialog .zbk-upsell__save-badge::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(50%);
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #ff3c81;

}

#zbk-upsell-dialog .zbk-upsell__head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

#zbk-upsell-dialog .zbk-upsell__head-name {
  flex: 1;
  font-family: 'DINEngschrift LT', 'Barlow', sans-serif;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.48px;
  color: #000;
}

#zbk-upsell-dialog .zbk-upsell__head-prices {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  letter-spacing: 0.6px;
}

#zbk-upsell-dialog .zbk-upsell__price-new {
  color: #ff3c81;
  font-size: 17px;
}

#zbk-upsell-dialog .zbk-upsell__price-old {
  color: #000;
  font-size: 14px;
  text-decoration: line-through;
}

#zbk-upsell-dialog .zbk-upsell__desc {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #626161;
  margin-bottom: 12px;
}

#zbk-upsell-dialog .zbk-upsell__hero {
  position: relative;
  background: #fbf9ea;
  border-radius: 12px;
  margin-bottom: 6px;
}

#zbk-upsell-dialog .zbk-upsell__hero img:first-child {
  width: 100%;
  display: block;
  border-radius: 12px;
}

#zbk-upsell-dialog .zbk-upsell__shipping-badge {
  position: absolute;
  top: -12px;
  right: -2px;
  width: 65px;
  height: 65px;
}

/* Kit items list */
#zbk-upsell-dialog .zbk-kit {
  padding: 6px 0;
}

#zbk-upsell-dialog .zbk-kit__row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

#zbk-upsell-dialog .zbk-kit__row-qty {
  width: 16px;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.6px;
  text-align: left;
}

#zbk-upsell-dialog .zbk-kit__row-img {
  width: 49px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

#zbk-upsell-dialog .zbk-kit__row-img img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.1));
}

#zbk-upsell-dialog .zbk-kit__row-img--gift {
  width: 75px;
  height: 75px;
}

#zbk-upsell-dialog .zbk-kit__row-info {
  flex: 1;
  min-width: 0;
}

#zbk-upsell-dialog .zbk-kit__row-head {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}

#zbk-upsell-dialog .zbk-kit__row-name {
  flex: 1;
  font-family: 'DINEngschrift LT', 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.36px;
  color: #000;
  text-transform: capitalize;
}

#zbk-upsell-dialog .zbk-kit__row--gift .zbk-kit__row-name {
  text-transform: none;
}

#zbk-upsell-dialog .zbk-kit__row-price {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.6px;
  text-decoration: line-through;
  white-space: nowrap;
}

#zbk-upsell-dialog .zbk-kit__row-sub {
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  line-height: 17px;
  color: #5d5d5d;
  margin-top: 2px;
}

#zbk-upsell-dialog .zbk-kit__row-meta {
  color: #ff3c81;
  font-weight: 500;
}

/* Totals */
#zbk-upsell-dialog .zbk-total {
  padding-top: 12px;
}

#zbk-upsell-dialog .zbk-total__row {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 4px;
}

#zbk-upsell-dialog .zbk-total__label {
  font-size: 14px;
  line-height: 18.2px;
  color: #1a1a2e;
  white-space: nowrap;
}

#zbk-upsell-dialog .zbk-total__label--final {
  font-weight: 600;
}

#zbk-upsell-dialog .zbk-total__dots {
  flex: 1;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.3);
  transform: translateY(-3px);
}

#zbk-upsell-dialog .zbk-total__value {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.6px;
  white-space: nowrap;
}

#zbk-upsell-dialog .zbk-total__value--strike {
  text-decoration: line-through;
}

#zbk-upsell-dialog .zbk-total__value--final {
  color: #ff3c81;
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
}

/* Sticky footer wrapper (actions + footnote) */
#zbk-upsell-dialog .zbk-sticky {
  position: sticky;
  bottom: 0;
  background: #fff;
  padding-top: 8px;
  margin-top: 8px;
  box-shadow: 0 -8px 12px -8px rgba(0, 0, 0, 0.12);
  z-index: 1;
}

/* Action buttons */
#zbk-upsell-dialog .zbk-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 12px 8px;
}

#zbk-upsell-dialog .zbk-btn {
  height: 50px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-family: 'DINEngschrift LT', 'Barlow', sans-serif;
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  padding: 0 12px;
}

#zbk-upsell-dialog .zbk-btn--primary {
  background: #ef3d6f;
  color: #fff;
}

#zbk-upsell-dialog .zbk-btn--secondary {
  background: #eaeaea;
  color: #000;
  font-size: 18px;
}

#zbk-upsell-dialog .zbk-btn:focus {
  outline: none;
}

#zbk-upsell-dialog .zbk-footnote {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #000;
  padding: 0 12px 12px;
}`, a = "https://conversionrate-store.github.io/a-b_images/natpat/zero_bites_kit/", f = {
    id: 45467608383532,
    name: "Zero Bites Summer Kit",
    price: "$87",
    comparePrice: "$297",
    saveAmount: "$210",
    description: "Most comprehensive collection of mosquito repellents — 10 premium products, 100% natural protection for every family moment",
    heroImage: a + "hero.webp",
    freeShippingBadge: a + "free-shipping-badge.webp",
    giftImage: a + "gift-lunchbox.webp",
    items: [
      {
        qty: 3,
        name: "BuzzPatch Stickers for Kids",
        price: "$78",
        meta: "72 stickers",
        description: "",
        image: a + "buzzpatch-kids.webp"
      },
      {
        qty: 2,
        name: "BuzzPatch Stickers for Adults",
        price: "$36",
        meta: "48 stickers",
        description: "",
        image: a + "buzzpatch-adults.webp"
      },
      {
        qty: 1,
        name: "Tick Repellent Stickers",
        price: "$18",
        meta: "48 stickers",
        description: "Preventive protection that creates a scent barrier to keep ticks away without the need for harsh chemicals.",
        image: a + "tick-repellent-stickers.webp"
      },
      {
        qty: 1,
        name: "Itch relief stickers",
        price: "$18",
        meta: "28 stickers",
        description: "When one bite still gets through, this stops the scratching, crying, and broken sleep.",
        image: a + "itch-relief-stickers.webp"
      },
      {
        qty: 1,
        name: "Branded citronella coil set",
        price: "$29",
        meta: "",
        description: "When the BBQ, picnic, or patio needs protection. This protects the whole space",
        image: a + "citronella-coil.webp"
      },
      {
        qty: 2,
        name: "Slap Band with Mosquito Repellent",
        price: "$32",
        meta: "",
        description: "Stronger protection that doesn't sit directly on skin. Easily attaches to strollers, pool bags, or tents.",
        image: a + "slap-band.webp"
      },
      {
        qty: 4,
        name: "Mosquito Repellent Bracelets",
        price: "$64",
        meta: "",
        description: "Hiking, camping, running, playground time — for moments when you want a stronger second layer.",
        image: a + "repellent-bracelets.webp"
      },
      {
        qty: 1,
        name: "Crocs jibbits charms",
        price: "$19",
        meta: "",
        description: "When mosquitoes go for the ankles. This clips onto Crocs and finally covers the zone.",
        image: a + "crocs-jibbits.webp"
      },
      {
        qty: 1,
        name: "The Adventurer's Magnifying Glass",
        price: "$10",
        meta: "",
        description: "When fear of bugs holds kids back. Bugs become something to study, not something to run from.",
        image: a + "magnifying-glass.webp"
      }
    ],
    gift: {
      name: "+ Gift worth $76 Included",
      meta: "Collectible NatPat Travel Lunchbox",
      price: "$76"
    },
    total: {
      original: "$297",
      final: "$87"
    }
  }, u = class u {
  };
  u.close = /* HTML */
  `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M14 13L13.2929 13.7071L0.292893 0.707107L1 0L14 13Z"
      fill="black"
    />
    <path
      d="M7.77852e-06 13L0.707115 13.7071L13.7071 0.707107L13 0L7.77852e-06 13Z"
      fill="black"
    />
  </svg>`;
  let g = u;
  const r = (o, e, n, i = "", t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: e,
      event_type: n,
      event_loc: i,
      event_loc2: t
    }), console.table([{ Event: o, Description: e, Type: n, Location: i, Location2: t }]);
  }, B = (o, e, n, i, t, s = 1e3, d = 0.5, c = "0px") => {
    const k = typeof o == "string" ? document.querySelector(o) : o;
    if (!k) return;
    let l;
    const p = new IntersectionObserver(
      (b) => {
        b[0].isIntersecting ? l = setTimeout(() => {
          r(e, n, "view", i, t), p.disconnect();
        }, s) : clearTimeout(l);
      },
      { threshold: [d], rootMargin: c }
    );
    p.observe(k);
  };
  class q {
    constructor(e, n) {
      this.originalVariantId = e, this.selection = n;
    }
    open() {
      var i;
      (i = document.getElementById("zbk-upsell-dialog")) == null || i.remove(), this.dialog = document.createElement("dialog"), this.dialog.id = "zbk-upsell-dialog", this.dialog.innerHTML = this.render(), document.body.appendChild(this.dialog), this.dialog.showModal(), this.lockScroll(), this.dialog.addEventListener("close", () => {
        this.unlockScroll(), this.dialog.remove();
      }), this.dialog.addEventListener("cancel", (t) => {
        t.preventDefault(), this.closeWithAnimation();
      });
      const e = this.dialog.querySelector(
        '[data-action="replace"]'
      );
      e.focus(), e.addEventListener("click", () => {
        this.goToCheckout(f.id), r(
          "exp_biteskit_upgrade",
          "Upgrade to Zero Bites Summer Kit",
          "click",
          this.selection.initialChoice,
          "Zero Bites Summer Kit Popup"
        );
      }), this.dialog.querySelector('[data-action="keep"]').addEventListener("click", () => {
        this.goToCheckout(this.originalVariantId), r(
          "exp_biteskit_keep",
          "Keep Original Variant",
          "click",
          this.selection.initialChoice,
          "Zero Bites Summer Kit Popup"
        );
      }), this.dialog.querySelector('[data-action="close"]').addEventListener("click", () => this.closeWithAnimation()), r(
        "exp_biteskit_view",
        "Visibility",
        "view",
        this.selection.initialChoice,
        "Zero Bites Summer Kit Popup"
      );
      const n = this.dialog.querySelector(".zbk-sticky").offsetHeight;
      B(
        this.dialog.querySelector(".zbk-total__label--final"),
        "exp_biteskit_kit_price",
        "Zero Bites Kit Price",
        this.selection.initialChoice,
        "Zero Bites Summer Kit Popup",
        1e3,
        0.5,
        `0px 0px -${n}px 0px`
      );
    }
    closeWithAnimation() {
      this.dialog.classList.add("zbk-closing"), this.dialog.addEventListener("animationend", () => this.dialog.close(), {
        once: !0
      }), r(
        "exp_biteskit_close",
        "Close Popup",
        "click",
        this.selection.initialChoice,
        "Zero Bites Summer Kit Popup"
      );
    }
    render() {
      const e = f;
      return `
      <button type="button" class="zbk-close" data-action="close" aria-label="Close">${g.close}</button>

      <div class="zbk-header">
        <h2 class="zbk-header__title">Your Order</h2>
        <div class="zbk-header__subtitle">Great choice to protect your family!</div>
      </div>

      <div class="zbk-order">
        <div class="zbk-order__qty">${this.selection.quantity}</div>
        <div class="zbk-order__img"><img src="${this.selection.image}" alt=""></div>
        <div class="zbk-order__name">${this.selection.title}</div>
        <div class="zbk-order__price">${this.selection.price}</div>
      </div>

      <div class="zbk-transition">...but you can do more to guarantee mosquito-free season</div>

      <div class="zbk-upsell">
        <div class="zbk-upsell__tab">Upgrade to <span class="zbk-upsell__tab-accent">${e.name}</span><br/>↓ at price you won't see again ↓</div>

        <div class="zbk-upsell__card">
          <div class="zbk-upsell__save-badge">Save ${e.saveAmount} with this amazing limited-time offer</div>

          <div class="zbk-upsell__head">
            <div class="zbk-upsell__head-name">${e.name}</div>
            <div class="zbk-upsell__head-prices">
              <span class="zbk-upsell__price-new">${e.price}</span>
              <span class="zbk-upsell__price-old">${e.comparePrice}</span>
            </div>
          </div>

          <div class="zbk-upsell__desc">${e.description}</div>

          <div class="zbk-upsell__hero">
            <img src="${e.heroImage}" alt="">
            <img class="zbk-upsell__shipping-badge" src="${e.freeShippingBadge}" alt="Free shipping">
          </div>

          <div class="zbk-kit">
            ${e.items.map((n) => this.renderItem(n.qty, n.name, n.price, n.meta, n.description, n.image)).join("")}
            <div class="zbk-kit__row zbk-kit__row--gift">
              <div class="zbk-kit__row-img zbk-kit__row-img--gift"><img src="${e.giftImage}" alt=""></div>
              <div class="zbk-kit__row-info">
                <div class="zbk-kit__row-head">
                  <div class="zbk-kit__row-name">${e.gift.name}</div>
                  <div class="zbk-kit__row-price">${e.gift.price}</div>
                </div>
                <div class="zbk-kit__row-sub"><span class="zbk-kit__row-meta">${e.gift.meta}</span></div>
              </div>
            </div>
          </div>

          <div class="zbk-total">
            <div class="zbk-total__row">
              <span class="zbk-total__label">Total value of the kit</span>
              <span class="zbk-total__dots"></span>
              <span class="zbk-total__value zbk-total__value--strike">${e.total.original}</span>
            </div>
            <div class="zbk-total__row">
              <span class="zbk-total__label zbk-total__label--final">Your kit price today</span>
              <span class="zbk-total__dots"></span>
              <span class="zbk-total__value zbk-total__value--final">${e.total.final}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="zbk-sticky">
        <div class="zbk-actions">
          <button type="button" class="zbk-btn zbk-btn--primary" data-action="replace">Upgrade to ${e.name}</button>
          <button type="button" class="zbk-btn zbk-btn--secondary" data-action="keep">No thanks, complete my BuzzPatch order</button>
        </div>
        <div class="zbk-footnote">Offer available here only  •  365-day money back guarantee</div>
      </div>
    `;
    }
    renderItem(e, n, i, t, s, d) {
      return `
      <div class="zbk-kit__row">
        <div class="zbk-kit__row-qty">x${e}</div>
        <div class="zbk-kit__row-img"><img src="${d}" alt=""></div>
        <div class="zbk-kit__row-info">
          <div class="zbk-kit__row-head">
            <div class="zbk-kit__row-name">${n}</div>
            <div class="zbk-kit__row-price">${i}</div>
          </div>
          ${t || s ? `<div class="zbk-kit__row-sub">${t ? `<span class="zbk-kit__row-meta">${t}</span>` : ""}${t && s ? " · " : ""}${s ? `<span>${s}</span>` : ""}</div>` : ""}
        </div>
      </div>
    `;
    }
    lockScroll() {
      const e = window.scrollY;
      document.body.dataset.zbkScrollY = String(e), document.body.style.position = "fixed", document.body.style.top = `-${e}px`, document.body.style.left = "0", document.body.style.right = "0", document.body.style.width = "100%", document.body.style.overflow = "hidden";
    }
    unlockScroll() {
      const e = Number(document.body.dataset.zbkScrollY || "0");
      document.body.style.position = "", document.body.style.top = "", document.body.style.left = "", document.body.style.right = "", document.body.style.width = "", document.body.style.overflow = "", delete document.body.dataset.zbkScrollY, window.scrollTo(0, e);
    }
    async goToCheckout(e) {
      await fetch("/cart/clear.js", { method: "POST" }), await fetch("/cart/add.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: e, quantity: 1 })
      }), location.href = "/checkout";
    }
  }
  class T {
    attach() {
      document.querySelector(".ssb--proceed").addEventListener("click", (n) => this.onClick(n), !0);
    }
    onClick(e) {
      var h, m, z, _, x, y;
      if (((h = document.querySelector("#subscribeSaveBlock .ssb--plan.active")) == null ? void 0 : h.getAttribute("data-plan")) !== "one-time") return;
      const i = document.querySelector("#subscribeSaveBlock .ssb--package.active"), t = document.querySelector("#subscribeSaveBlock .ssb--bundle.active"), s = i == null ? void 0 : i.getAttribute("data-pack"), d = s === "3" || s === "4", c = !!t;
      if (!d && !c) return;
      e.preventDefault(), e.stopImmediatePropagation();
      const l = ((m = document.querySelector("#subscribeSaveBlock .ssb--toggler__btn.active")) == null ? void 0 : m.getAttribute("data-category")) === "adults", p = c ? l ? t.getAttribute("data-second-bundle-id") : t.getAttribute("data-bundle-id") : l ? i.getAttribute("data-second-id") : i.getAttribute("data-first-id"), b = l ? "Adults" : "Kids", I = c ? {
        title: ((_ = (z = t.querySelector(l ? ".ssb--bundle__title.second" : ".ssb--bundle__title.first")) == null ? void 0 : z.textContent) == null ? void 0 : _.trim().replace(/\s+/g, " ")) || "Ultimate Bundle",
        price: t.getAttribute("data-price") || "",
        image: ((x = t.querySelector(l ? ".ssb--bundle__image-second" : ".ssb--bundle__image-first")) == null ? void 0 : x.src) || "",
        quantity: "x1",
        initialChoice: `Ultimate bundle (${b})`
      } : {
        title: l ? "BuzzPatch Stickers for Adults" : "BuzzPatch Stickers for Kids",
        price: i.getAttribute("data-price") || "",
        image: ((y = i.querySelector(l ? ".ssb--package__image-second" : ".ssb--package__image-first")) == null ? void 0 : y.src) || "",
        quantity: `x${s}`,
        initialChoice: `${s} packs (${b})`
      };
      new q(Number(p), I).open();
    }
  }
  v({ name: "BuzzPatch Subscribe & Save + Zero Bites Kit", dev: "OS" }), S("exp_biteskit");
  class L {
    constructor() {
      this.init();
    }
    async init() {
      this.isTestTarget() && (await w("#subscribeSaveBlock"), this.addStyles(), new T().attach());
    }
    isTestTarget() {
      if (location.pathname.includes("buzzpatch") && !(window.innerWidth > 768))
        return !0;
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = $, document.head.appendChild(e);
    }
  }
  new L();
})();
