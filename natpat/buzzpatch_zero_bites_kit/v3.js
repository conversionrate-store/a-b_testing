(function() {
  "use strict";
  const v = (t) => new Promise((e) => {
    const n = document.querySelector(t);
    n && e(n);
    const i = new MutationObserver(() => {
      const o = document.querySelector(t);
      o && (e(o), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), y = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, w = (t) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, S = `#zbk-upsell-dialog {
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
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zbk-dialog-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(16px);
  }
}

@keyframes zbk-backdrop-in {
  from {
    background: rgba(0, 0, 0, 0);
  }

  to {
    background: rgba(0, 0, 0, 0.5);
  }
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
  top: 12px;
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

/* Intro */
#zbk-upsell-dialog .zbk-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px 16px 0;
  text-align: center;
}

#zbk-upsell-dialog .zbk-intro__eyebrow {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ff209e;
}

#zbk-upsell-dialog .zbk-intro__title {
  margin: 0;
  max-width: 325px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 21px;
  line-height: 1.2;
  text-transform: none;
  color: #000;
}

#zbk-upsell-dialog .zbk-intro__subtitle {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #555;
}

/* Upsell section */
#zbk-upsell-dialog .zbk-upsell {
  padding: 12px 12px 0;
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
  max-width: calc(100% - 23px);
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
  padding-top: 12px;
  margin-top: 8px;
  box-shadow: 0 -8px 12px -8px rgba(0, 0, 0, 0.12);
  z-index: 1;
}

/* Action buttons */
#zbk-upsell-dialog .zbk-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 15px;
}

#zbk-upsell-dialog .zbk-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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

#zbk-upsell-dialog .zbk-btn--secondary svg {
  flex-shrink: 0;
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
  padding: 12px 12px;
}

/* Limited time offer — appended inside .ssb--section, right above the price box */
#subscribeSaveBlock .zbk-offer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
}

#subscribeSaveBlock .zbk-offer__title {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  text-align: center;
  color: #000;
}

#subscribeSaveBlock .zbk-offer__subtitle {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #555;
}

#subscribeSaveBlock .zbk-offer__card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  padding: 10px 12px 10px 8px;
  border: 2px solid #fea1c2;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(12, 11, 11, 0.1), 0 12px 32px rgba(0, 0, 0, 0.05);
  /* the theme centers everything inside #subscribeSaveBlock */
  text-align: left;
  cursor: pointer;
}

#subscribeSaveBlock .zbk-offer__badge {
  position: absolute;
  top: -2px;
  right: -2px;
  padding: 3px 12px;
  border-radius: 0 4px 0 4px;
  background: #ef3d6f;
  color: #fff;
  font-family: 'DINEngschrift LT', 'Barlow', sans-serif;
  font-size: 13px;
  line-height: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

#subscribeSaveBlock .zbk-offer__img {
  width: 56px;
  height: 66px;
  flex-shrink: 0;
}

#subscribeSaveBlock .zbk-offer__img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1px;
}

#subscribeSaveBlock .zbk-offer__info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

#subscribeSaveBlock .zbk-offer__head {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

#subscribeSaveBlock .zbk-offer__name {
  font-family: 'DINEngschrift LT', 'Barlow', sans-serif;
  font-size: 20px;
  line-height: 28px;
  color: #000;
}

#subscribeSaveBlock .zbk-offer__stickers {
  font-family: 'DINEngschrift LT', 'Barlow', sans-serif;
  font-size: 13px;
  line-height: 22px;
  color: #000;
}

#subscribeSaveBlock .zbk-offer__bottom {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

#subscribeSaveBlock .zbk-offer__left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

/* the description column is exactly as wide as the text needs (design: 202px);
   no gap to the price column, or the first line loses the few px it needs */
#subscribeSaveBlock .zbk-offer__desc {
  margin-left: -5px;
  font-family: 'DINEngschrift LT', 'Barlow', sans-serif;
  font-size: 13px;
  line-height: 22px;
  color: #000;
}

#subscribeSaveBlock .zbk-see-inside {
  width: 140px;
  padding: 6px;
  border: none;
  border-radius: 6px;
  background: #1f50c9;
  color: #fff;
  font-family: 'DINEngschrift LT', 'Barlow', sans-serif;
  font-size: 13px;
  line-height: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
}

#subscribeSaveBlock .zbk-offer__price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  text-align: right;
  white-space: nowrap;
}

#subscribeSaveBlock .zbk-offer__price-value {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000;
}

#subscribeSaveBlock .zbk-offer__price-caption {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #5d5d5d;
}

/* selected — matches how the theme fills an active pack card */
#subscribeSaveBlock .zbk-offer__card--active {
  border-color: #ef3d6f;
  background: #ef3d6f;
}

#subscribeSaveBlock .zbk-offer__card--active .zbk-offer__name,
#subscribeSaveBlock .zbk-offer__card--active .zbk-offer__stickers,
#subscribeSaveBlock .zbk-offer__card--active .zbk-offer__desc,
#subscribeSaveBlock .zbk-offer__card--active .zbk-offer__price-value {
  color: #fff;
}

#subscribeSaveBlock .zbk-offer__card--active .zbk-offer__price-caption {
  color: #dadada;
}

/* the badge shares the fill colour once selected — flip it so it stays readable */
#subscribeSaveBlock .zbk-offer__card--active .zbk-offer__badge {
  background: #fff;
  color: #ef3d6f;
}
`, s = "https://conversionrate-store.github.io/a-b_images/natpat/zero_bites_kit/", k = {
    name: "Zero Bites Summer Kit",
    price: "$87",
    comparePrice: "$297",
    saveAmount: "$210",
    description: "Most comprehensive collection of mosquito repellents — 10 premium products, 100% natural protection for every family moment",
    bundleImage: s + "bundle_image.webp",
    heroImage: s + "hero.webp",
    freeShippingBadge: s + "free-shipping-badge.webp",
    giftImage: s + "gift-lunchbox.webp",
    items: [
      {
        qty: 3,
        name: "BuzzPatch Stickers for Kids",
        price: "$78",
        meta: "72 stickers",
        description: "",
        image: s + "buzzpatch-kids.webp"
      },
      {
        qty: 2,
        name: "BuzzPatch Stickers for Adults",
        price: "$36",
        meta: "48 stickers",
        description: "",
        image: s + "buzzpatch-adults.webp"
      },
      {
        qty: 1,
        name: "Tick Repellent Stickers",
        price: "$18",
        meta: "48 stickers",
        description: "Preventive protection that creates a scent barrier to keep ticks away without the need for harsh chemicals.",
        image: s + "tick-repellent-stickers.webp"
      },
      {
        qty: 1,
        name: "Itch relief stickers",
        price: "$18",
        meta: "28 stickers",
        description: "When one bite still gets through, this stops the scratching, crying, and broken sleep.",
        image: s + "itch-relief-stickers.webp"
      },
      {
        qty: 1,
        name: "Branded citronella coil set",
        price: "$29",
        meta: "",
        description: "When the BBQ, picnic, or patio needs protection. This protects the whole space",
        image: s + "citronella-coil.webp"
      },
      {
        qty: 2,
        name: "Slap Band with Mosquito Repellent",
        price: "$32",
        meta: "",
        description: "Stronger protection that doesn't sit directly on skin. Easily attaches to strollers, pool bags, or tents.",
        image: s + "slap-band.webp"
      },
      {
        qty: 4,
        name: "Mosquito Repellent Bracelets",
        price: "$64",
        meta: "",
        description: "Hiking, camping, running, playground time — for moments when you want a stronger second layer.",
        image: s + "repellent-bracelets.webp"
      },
      {
        qty: 1,
        name: "Crocs jibbits charms",
        price: "$19",
        meta: "",
        description: "When mosquitoes go for the ankles. This clips onto Crocs and finally covers the zone.",
        image: s + "crocs-jibbits.webp"
      },
      {
        qty: 1,
        name: "The Adventurer's Magnifying Glass",
        price: "$10",
        meta: "",
        description: "When fear of bugs holds kids back. Bugs become something to study, not something to run from.",
        image: s + "magnifying-glass.webp"
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
  }, p = class p {
  };
  p.close = /* HTML */
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
  </svg>`, p.arrowLeft = /* HTML */
  `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
  >
    <path
      d="M6 1L1 6l5 5M1 6h14"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`;
  let l = p;
  const a = (t, e, n, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: e,
      event_type: n,
      event_loc: i
    }), console.table([{ Event: t, Description: e, Type: n, Location: i }]);
  }, B = (t, e, n, i, o = 1e3, r = 0.5, u = "0px") => {
    const z = typeof t == "string" ? document.querySelector(t) : t;
    if (!z) return;
    let _;
    const x = new IntersectionObserver(
      (K) => {
        K[0].isIntersecting ? _ = setTimeout(() => {
          a(e, n, "view", i), x.disconnect();
        }, o) : clearTimeout(_);
      },
      { threshold: [r], rootMargin: u }
    );
    x.observe(z);
  }, b = "Zero Bites Kit Popup";
  class L {
    constructor(e) {
      this.variantId = e;
    }
    open() {
      var i;
      (i = document.getElementById("zbk-upsell-dialog")) == null || i.remove(), this.dialog = document.createElement("dialog"), this.dialog.id = "zbk-upsell-dialog", this.dialog.innerHTML = this.render(), document.body.appendChild(this.dialog), this.dialog.showModal(), this.lockScroll(), this.dialog.addEventListener("close", () => {
        this.unlockScroll(), this.dialog.remove();
      }), this.dialog.addEventListener("cancel", (o) => {
        o.preventDefault(), this.closeWithAnimation("exp_biteskit_close", "Close Popup - Esc Key");
      }), this.dialog.querySelector('[data-action="buy"]').addEventListener("click", () => {
        m(this.variantId), a("exp_biteskit_buy", "Get Zero Bites Summer Kit", "click", b);
      }), this.dialog.querySelector('[data-action="close"]').addEventListener("click", () => {
        this.closeWithAnimation("exp_biteskit_close", "Close Popup");
      }), this.dialog.querySelector('[data-action="back"]').addEventListener("click", () => {
        this.closeWithAnimation("exp_biteskit_back", "Back To Buzzpatch Options");
      });
      const n = this.dialog.querySelector(".zbk-sticky").offsetHeight;
      B(
        this.dialog.querySelector(".zbk-total__label--final"),
        "exp_biteskit_kit_price",
        "Zero Bites Kit Price",
        b,
        1e3,
        0.5,
        `0px 0px -${n}px 0px`
      );
    }
    closeWithAnimation(e, n) {
      this.dialog.classList.add("zbk-closing"), this.dialog.addEventListener("animationend", () => this.dialog.close(), { once: !0 }), a(e, n, "click", b);
    }
    render() {
      const e = k;
      return (
        /* HTML */
        `
      <button type="button" class="zbk-close" data-action="close" aria-label="Close">${l.close}</button>

      <div class="zbk-intro">
        <div class="zbk-intro__eyebrow">Best offer of this summer</div>
        <h2 class="zbk-intro__title">Guarantee yourself mosquito-free season</h2>
        <div class="zbk-intro__subtitle">Upgrade to BuzzPatch Zero Bites Kit</div>
      </div>

      <div class="zbk-upsell">
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
          <button type="button" class="zbk-btn zbk-btn--primary" data-action="buy">Get Zero Bites Summer Kit</button>
          <button type="button" class="zbk-btn zbk-btn--secondary" data-action="back">${l.arrowLeft}<span>Back to buzzpatch options</span></button>
        </div>
        <div class="zbk-footnote">Offer available here only  •  365-day money back guarantee</div>
      </div>
    `
      );
    }
    renderItem(e, n, i, o, r, u) {
      return (
        /* HTML */
        `
      <div class="zbk-kit__row">
        <div class="zbk-kit__row-qty">x${e}</div>
        <div class="zbk-kit__row-img"><img src="${u}" alt=""></div>
        <div class="zbk-kit__row-info">
          <div class="zbk-kit__row-head">
            <div class="zbk-kit__row-name">${n}</div>
            <div class="zbk-kit__row-price">${i}</div>
          </div>
          ${o || r ? `<div class="zbk-kit__row-sub">${o ? `<span class="zbk-kit__row-meta">${o}</span>` : ""}${o && r ? " · " : ""}${r ? `<span>${r}</span>` : ""}</div>` : ""}
        </div>
      </div>
    `
      );
    }
    lockScroll() {
      const e = window.scrollY;
      document.body.dataset.zbkScrollY = String(e), document.body.style.position = "fixed", document.body.style.top = `-${e}px`, document.body.style.left = "0", document.body.style.right = "0", document.body.style.width = "100%", document.body.style.overflow = "hidden";
    }
    unlockScroll() {
      const e = Number(document.body.dataset.zbkScrollY || "0");
      document.body.style.position = "", document.body.style.top = "", document.body.style.left = "", document.body.style.right = "", document.body.style.width = "", document.body.style.overflow = "", delete document.body.dataset.zbkScrollY, window.scrollTo(0, e);
    }
  }
  const f = "Limited Time Offer", $ = 16;
  async function q() {
    const t = await T();
    P(t.id);
    const e = () => {
      const n = document.querySelector("#subscribeSaveBlock .ssb--section");
      if (!n || n.querySelector(".zbk-offer")) return;
      n.insertAdjacentHTML("beforeend", E(t));
      const i = n.querySelector(".zbk-offer__card");
      i.addEventListener("click", (o) => {
        o.target.closest(".zbk-see-inside") || (I(t), a("exp_biteskit_card", "BuzzPatch Zero Bites Kit", "click", f));
      }), i.querySelector(".zbk-see-inside").addEventListener("click", () => {
        a("exp_biteskit_see_inside", "See What's Inside", "click", f), new L(t.id).open();
      });
    };
    e(), new MutationObserver(e).observe(document.body, { childList: !0, subtree: !0 }), document.addEventListener(
      "click",
      (n) => {
        const i = n.target;
        if (!i.closest(".ssb--package, .ssb--bundle, .ssb--plan, .ssb--toggler__btn")) return;
        const o = document.querySelector(".zbk-offer__card--active");
        o == null || o.classList.remove("zbk-offer__card--active"), o && (i.closest(".ssb--plan") ? document.querySelector("#subscribeSaveBlock .ssb--package").click() : g());
      },
      !0
    );
  }
  async function T() {
    const n = (await (await fetch("/products/ultimate-mosquito-repellent-bundle.js")).json()).variants[0], i = n.compare_at_price || n.price;
    return {
      id: n.id,
      price: c(n.price),
      comparePrice: c(i),
      savePrice: c(i - n.price),
      eachPrice: c(Math.floor(n.price / $)),
      discount: Math.round((1 - n.price / i) * 100)
    };
  }
  function c(t) {
    const e = window.Shopify.currency.active;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: e,
      currencyDisplay: "narrowSymbol"
    }).format(t / 100);
  }
  function E(t) {
    return (
      /* HTML */
      `
    <div class="zbk-offer">
      <div class="zbk-offer__title">Limited time offer</div>
      <div class="zbk-offer__subtitle">at a price you won't see again</div>

      <div class="zbk-offer__card">
        <div class="zbk-offer__badge">${t.discount}% OFF</div>
        <div class="zbk-offer__img"><img src="${k.bundleImage}" alt=""></div>
        <div class="zbk-offer__info">
          <div class="zbk-offer__head">
            <span class="zbk-offer__name">BuzzPatch Zero Bites Kit</span>
            <span class="zbk-offer__stickers">188 stickers</span>
          </div>
          <div class="zbk-offer__bottom">
            <div class="zbk-offer__left">
              <div class="zbk-offer__desc">+ 9 Premium Products · For Every Family Moment<br>+ 1 Collectible Gift worth $76</div>
              <button type="button" class="zbk-see-inside">See what's inside</button>
            </div>
            <div class="zbk-offer__price">
              <div class="zbk-offer__price-value">${t.eachPrice}</div>
              <div class="zbk-offer__price-caption">/ Each Item</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
    );
  }
  let g = () => {
  };
  function I(t) {
    document.querySelector(".zbk-offer__card").classList.add("zbk-offer__card--active"), document.querySelectorAll("#subscribeSaveBlock .ssb--package.active, #subscribeSaveBlock .ssb--bundle.active").forEach((i) => i.classList.remove("active"));
    const e = document.querySelector("#subscribeSaveBlock .ssb--plan.active"), n = document.querySelector("#subscribeSaveBlock .ssb--subscr.active");
    e == null || e.classList.remove("active"), n == null || n.classList.remove("active"), n && (n.style.display = "none"), g = () => {
      e == null || e.classList.add("active"), n == null || n.classList.add("active"), n && (n.style.display = "");
    }, d(".ssb--price-num", t.price), d(".ssb--price-off", String(t.discount)), d(".ssb--compare-price", t.comparePrice), d(".ssb--saved-price", t.savePrice);
  }
  function d(t, e) {
    document.querySelector(`#subscribeSaveBlock ${t}`).textContent = e;
  }
  function P(t) {
    document.addEventListener(
      "click",
      (e) => {
        e.target.closest(".ssb--proceed") && document.querySelector(".zbk-offer__card--active") && (e.preventDefault(), e.stopImmediatePropagation(), a("exp_biteskit_proceed", "Get BuzzPatch Now With Kit", "click", f), m(t));
      },
      !0
    );
  }
  async function m(t) {
    await fetch("/cart/clear.js", { method: "POST" }), await fetch("/cart/add.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: t, quantity: 1 })
    }), location.href = "/checkout";
  }
  y({ name: "BuzzPatch Subscribe & Save + Zero Bites Kit", dev: "OS" }), w("exp_biteskit");
  class h {
    constructor() {
      this.init();
    }
    async init() {
      this.isTestTarget() && (await v("#subscribeSaveBlock"), this.addStyles(), await q());
    }
    isTestTarget() {
      if (location.pathname.includes("buzzpatch") && !(window.innerWidth > 768))
        return !0;
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = S, document.head.appendChild(e);
    }
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => new h()) : new h();
})();
