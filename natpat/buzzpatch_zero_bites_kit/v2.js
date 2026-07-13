(function() {
  "use strict";
  const _ = (e) => new Promise((n) => {
    const t = document.querySelector(e);
    t && n(t);
    const i = new MutationObserver(() => {
      const o = document.querySelector(e);
      o && (n(o), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), x = ({ name: e, dev: n }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, v = (e) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, w = `#zbk-upsell-dialog {
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

/* Subscribe & Save is unavailable while the kit is selected */
/* clicks stay alive — they open the tooltip instead of switching the plan */
.ssb--plans.zbk-subscription-locked .ssb--plan[data-plan='subscription'] {
  border: 2px solid #FEA1C2;
}

.ssb--plans.zbk-subscription-locked .ssb--plan[data-plan='subscription']>* {

  opacity: 0.5;
}

/* the discount is off the table — drop the pink highlight on the new price */
.ssb--plans.zbk-subscription-locked .ssb--plan[data-plan='subscription'] .ssb--plan__price-new {
  color: #000;
}

/* Tooltip explaining why Subscribe & Save is locked. Sits above the plans row,
   arrow pointing down at the locked Subscribe & Save column. */
.ssb--plans__list .zbk-tooltip {
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  /* clear the "Get Extra 15% Off" badge, which sticks 34px above the row */
  bottom: calc(100% + 38px);
  z-index: 3;
  filter: drop-shadow(0 2px 1px rgba(28, 5, 77, 0.12));
}

.ssb--plans__list .zbk-tooltip.zbk-tooltip--open {
  display: flex;
  flex-direction: column;
}

/* Not enough room above (the fixed site header would cover it) — flip below the
   row and point the arrow back up. The list's opacity:0.99 traps us in its own
   stacking context, so we cannot simply outrank the header with a z-index. */
.ssb--plans__list .zbk-tooltip.zbk-tooltip--below {
  flex-direction: column-reverse;
  bottom: auto;
  top: 100%;
}

.ssb--plans__list .zbk-tooltip--below .zbk-tooltip__arrow {
  transform: rotate(180deg);
}

/* Mirrors the tooltip's slot above the row for the IntersectionObserver.
   (display is explicit — the theme hides empty divs; height comes from JS.) */
.ssb--plans__list .zbk-tooltip__probe {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: calc(100% + 38px);
  visibility: hidden;
  pointer-events: none;
}

.ssb--plans__list .zbk-tooltip__card {
  display: flex;
  align-items: flex-start;
  gap: 13px;
  padding: 20px;
  border-radius: 6px;
  background: #fff;
  text-align: left;
}

.ssb--plans__list .zbk-tooltip__img {
  width: 56px;
  height: 66px;
  flex-shrink: 0;
  object-fit: contain;
  border-radius: 1px;
}

.ssb--plans__list .zbk-tooltip__text {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #000;
}

.ssb--plans__list .zbk-tooltip__text p {
  margin: 0 0 14px;
}

.ssb--plans__list .zbk-tooltip__text p:last-child {
  margin-bottom: 0;
}

.ssb--plans__list .zbk-tooltip__arrow {
  margin-top: -1px;
  /* centered on the left column: (100% - 16px grid gap) / 4, minus half the arrow */
  margin-left: calc(25% - 17px);
  /* the theme hides empty divs, so state the display explicitly */
  display: block;
  width: 26px;
  height: 13px;
  background: #fff;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
}

/* Zero Bites Kit card (replaces the Ultimate Bundle content inside .ssb--bundle) */
.ssb--bundle .zbk-card {
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 6px 12px 6px 8px;
}

.ssb--bundle .zbk-card__img {
  width: 56px;
  height: 66px;
  flex-shrink: 0;
}

.ssb--bundle .zbk-card__img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1px;
}

.ssb--bundle .zbk-card__info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.ssb--bundle .zbk-card__head {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.ssb--bundle .zbk-card__name {
  font-family: 'DINEngschrift LT', 'Barlow', sans-serif;
  font-size: 20px;
  line-height: 28px;
  color: #000;
}

.ssb--bundle .zbk-card__stickers {
  font-family: 'DINEngschrift LT', 'Barlow', sans-serif;
  font-size: 13px;
  line-height: 22px;
  color: #000;
}

.ssb--bundle .zbk-card__bottom {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.ssb--bundle .zbk-card__left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

/* the description column is exactly as wide as the text needs (design: 202px);
   no gap to the price column, or the first line loses the few px it needs */
.ssb--bundle .zbk-card__desc {
  font-family: 'DINEngschrift LT', 'Barlow', sans-serif;
  font-size: 13px;
  line-height: 22px;
  color: #000;
  white-space: nowrap;
}

.ssb--bundle .zbk-see-inside {
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

.ssb--bundle .zbk-card__price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  text-align: right;
  white-space: nowrap;
}

.ssb--bundle .zbk-card__price-value {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000;
}

.ssb--bundle .zbk-card__price-caption {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #5d5d5d;
}`, s = "https://conversionrate-store.github.io/a-b_images/natpat/zero_bites_kit/", a = {
    id: 45467608383532,
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
  }, d = class d {
  };
  d.close = /* HTML */
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
  </svg>`, d.arrowLeft = /* HTML */
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
  let c = d;
  const l = (e, n, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: n,
      event_type: t,
      event_loc: i
    }), console.table([{ Event: e, Description: n, Type: t, Location: i }]);
  }, y = (e, n, t, i, o = 1e3, r = 0.5, k = "0px") => {
    const h = typeof e == "string" ? document.querySelector(e) : e;
    if (!h) return;
    let m;
    const z = new IntersectionObserver(
      (M) => {
        M[0].isIntersecting ? m = setTimeout(() => {
          l(n, t, "view", i), z.disconnect();
        }, o) : clearTimeout(m);
      },
      { threshold: [r], rootMargin: k }
    );
    z.observe(h);
  }, p = "Zero Bites Kit Popup";
  class S {
    constructor(n) {
      this.variantId = n;
    }
    open() {
      var i;
      (i = document.getElementById("zbk-upsell-dialog")) == null || i.remove(), this.dialog = document.createElement("dialog"), this.dialog.id = "zbk-upsell-dialog", this.dialog.innerHTML = this.render(), document.body.appendChild(this.dialog), this.dialog.showModal(), this.lockScroll(), this.dialog.addEventListener("close", () => {
        this.unlockScroll(), this.dialog.remove();
      }), this.dialog.addEventListener("cancel", (o) => {
        o.preventDefault(), this.closeWithAnimation("exp_biteskit_close", "Close Popup - Esc Key");
      }), this.dialog.querySelector('[data-action="buy"]').addEventListener("click", () => {
        g(this.variantId), l("exp_biteskit_buy", "Get Zero Bites Summer Kit", "click", p);
      }), this.dialog.querySelector('[data-action="close"]').addEventListener("click", () => {
        this.closeWithAnimation("exp_biteskit_close", "Close Popup");
      }), this.dialog.querySelector('[data-action="back"]').addEventListener("click", () => {
        this.closeWithAnimation("exp_biteskit_back", "Back To Buzzpatch Options");
      });
      const t = this.dialog.querySelector(".zbk-sticky").offsetHeight;
      y(
        this.dialog.querySelector(".zbk-total__label--final"),
        "exp_biteskit_kit_price",
        "Zero Bites Kit Price",
        p,
        1e3,
        0.5,
        `0px 0px -${t}px 0px`
      );
    }
    closeWithAnimation(n, t) {
      this.dialog.classList.add("zbk-closing"), this.dialog.addEventListener("animationend", () => this.dialog.close(), { once: !0 }), l(n, t, "click", p);
    }
    render() {
      const n = a;
      return (
        /* HTML */
        `
      <button type="button" class="zbk-close" data-action="close" aria-label="Close">${c.close}</button>

      <div class="zbk-intro">
        <div class="zbk-intro__eyebrow">Best offer of this summer</div>
        <h2 class="zbk-intro__title">Guarantee yourself mosquito-free season</h2>
        <div class="zbk-intro__subtitle">Upgrade to BuzzPatch Zero Bites Kit</div>
      </div>

      <div class="zbk-upsell">
        <div class="zbk-upsell__card">
          <div class="zbk-upsell__save-badge">Save ${n.saveAmount} with this amazing limited-time offer</div>

          <div class="zbk-upsell__head">
            <div class="zbk-upsell__head-name">${n.name}</div>
            <div class="zbk-upsell__head-prices">
              <span class="zbk-upsell__price-new">${n.price}</span>
              <span class="zbk-upsell__price-old">${n.comparePrice}</span>
            </div>
          </div>

          <div class="zbk-upsell__desc">${n.description}</div>

          <div class="zbk-upsell__hero">
            <img src="${n.heroImage}" alt="">
            <img class="zbk-upsell__shipping-badge" src="${n.freeShippingBadge}" alt="Free shipping">
          </div>

          <div class="zbk-kit">
            ${n.items.map((t) => this.renderItem(t.qty, t.name, t.price, t.meta, t.description, t.image)).join("")}
            <div class="zbk-kit__row zbk-kit__row--gift">
              <div class="zbk-kit__row-img zbk-kit__row-img--gift"><img src="${n.giftImage}" alt=""></div>
              <div class="zbk-kit__row-info">
                <div class="zbk-kit__row-head">
                  <div class="zbk-kit__row-name">${n.gift.name}</div>
                  <div class="zbk-kit__row-price">${n.gift.price}</div>
                </div>
                <div class="zbk-kit__row-sub"><span class="zbk-kit__row-meta">${n.gift.meta}</span></div>
              </div>
            </div>
          </div>

          <div class="zbk-total">
            <div class="zbk-total__row">
              <span class="zbk-total__label">Total value of the kit</span>
              <span class="zbk-total__dots"></span>
              <span class="zbk-total__value zbk-total__value--strike">${n.total.original}</span>
            </div>
            <div class="zbk-total__row">
              <span class="zbk-total__label zbk-total__label--final">Your kit price today</span>
              <span class="zbk-total__dots"></span>
              <span class="zbk-total__value zbk-total__value--final">${n.total.final}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="zbk-sticky">
        <div class="zbk-actions">
          <button type="button" class="zbk-btn zbk-btn--primary" data-action="buy">Get Zero Bites Summer Kit</button>
          <button type="button" class="zbk-btn zbk-btn--secondary" data-action="back">${c.arrowLeft}<span>Back to buzzpatch options</span></button>
        </div>
        <div class="zbk-footnote">Offer available here only  •  365-day money back guarantee</div>
      </div>
    `
      );
    }
    renderItem(n, t, i, o, r, k) {
      return (
        /* HTML */
        `
      <div class="zbk-kit__row">
        <div class="zbk-kit__row-qty">x${n}</div>
        <div class="zbk-kit__row-img"><img src="${k}" alt=""></div>
        <div class="zbk-kit__row-info">
          <div class="zbk-kit__row-head">
            <div class="zbk-kit__row-name">${t}</div>
            <div class="zbk-kit__row-price">${i}</div>
          </div>
          ${o || r ? `<div class="zbk-kit__row-sub">${o ? `<span class="zbk-kit__row-meta">${o}</span>` : ""}${o && r ? " · " : ""}${r ? `<span>${r}</span>` : ""}</div>` : ""}
        </div>
      </div>
    `
      );
    }
    lockScroll() {
      const n = window.scrollY;
      document.body.dataset.zbkScrollY = String(n), document.body.style.position = "fixed", document.body.style.top = `-${n}px`, document.body.style.left = "0", document.body.style.right = "0", document.body.style.width = "100%", document.body.style.overflow = "hidden";
    }
    unlockScroll() {
      const n = Number(document.body.dataset.zbkScrollY || "0");
      document.body.style.position = "", document.body.style.top = "", document.body.style.left = "", document.body.style.right = "", document.body.style.width = "", document.body.style.overflow = "", delete document.body.dataset.zbkScrollY, window.scrollTo(0, n);
    }
  }
  const b = "Bundle & Save", B = 16;
  async function $() {
    const e = await L();
    I(e.id), E();
    const n = () => {
      q();
      const t = document.querySelector("#subscribeSaveBlock .ssb--bundle");
      !t || t.querySelector(".zbk-card") || (T(t, e), t.addEventListener("click", (i) => {
        i.target.closest(".zbk-see-inside") || l("exp_biteskit_card", "BuzzPatch Zero Bites Kit", "click", b);
      }), t.querySelector(".zbk-see-inside").addEventListener("click", () => {
        l("exp_biteskit_see_inside", "See What's Inside", "click", b), new S(e.id).open();
      }));
    };
    n(), new MutationObserver(n).observe(document.body, { childList: !0, subtree: !0 });
  }
  async function L() {
    try {
      const t = (await (await fetch("/products/ultimate-mosquito-repellent-bundle.js")).json()).variants[0];
      return {
        id: t.id,
        price: u(t.price),
        comparePrice: t.compare_at_price ? u(t.compare_at_price) : null,
        eachPrice: u(Math.floor(t.price / B))
      };
    } catch {
      return {
        id: a.id,
        price: a.price,
        comparePrice: a.comparePrice,
        eachPrice: "$5.43"
      };
    }
  }
  function u(e) {
    var i, o;
    const n = e / 100, t = ((o = (i = window.Shopify) == null ? void 0 : i.currency) == null ? void 0 : o.active) || "USD";
    return new Intl.NumberFormat(void 0, { style: "currency", currency: t }).format(n);
  }
  function T(e, n) {
    e.dataset.id = String(n.id), e.dataset.price = n.price, e.dataset.subscriptionPrice = n.price, e.dataset.oldPrice = n.comparePrice || n.price, e.innerHTML = /* HTML */
    `
    <div class="zbk-card">
      <div class="zbk-card__img"><img src="${a.bundleImage}" alt=""></div>
      <div class="zbk-card__info">
        <div class="zbk-card__head">
          <span class="zbk-card__name">BuzzPatch Zero Bites Kit</span>
          <span class="zbk-card__stickers">188 stickers</span>
        </div>
        <div class="zbk-card__bottom">
          <div class="zbk-card__left">
            <div class="zbk-card__desc">+ 9 Premium Products · For Every Family Moment<br>+ 1 Collectible Gift worth $76</div>
            <button type="button" class="zbk-see-inside">See what's inside</button>
          </div>
          <div class="zbk-card__price">
            <div class="zbk-card__price-value">${n.eachPrice}</div>
            <div class="zbk-card__price-caption">/ Each Item</div>
          </div>
        </div>
      </div>
    </div>
  `;
    const t = e.querySelector(".zbk-card__bottom");
    t.scrollWidth > t.clientWidth && (e.querySelector(".zbk-card__desc").style.whiteSpace = "normal");
  }
  function q() {
    const e = document.querySelector("#subscribeSaveBlock .ssb--plans__list");
    !e || e.querySelector(".zbk-tooltip") || e.insertAdjacentHTML(
      "beforeend",
      /* HTML */
      `
      <div class="zbk-tooltip">
        <div class="zbk-tooltip__card">
          <img class="zbk-tooltip__img" src="${a.bundleImage}" alt="">
          <div class="zbk-tooltip__text">
            <p>The BuzzPatch Zero Bites Kit is a limited-time bundle, so it's not available on subscription.</p>
            <p>To subscribe &amp; save, just choose one of the BuzzPatch Packs above.</p>
          </div>
        </div>
        <div class="zbk-tooltip__arrow"></div>
      </div>
      <div class="zbk-tooltip__probe"></div>
    `
    );
  }
  function P(e) {
    const n = e.nextElementSibling;
    n.style.height = `${e.offsetHeight}px`;
    const t = document.querySelector(".navbar.fixed-top").getBoundingClientRect().height;
    new IntersectionObserver(
      ([i]) => e.classList.toggle("zbk-tooltip--below", !i.isIntersecting),
      { rootMargin: `-${t}px 0px 0px 0px`, threshold: 1 }
    ).observe(n);
  }
  function E() {
    document.addEventListener(
      "click",
      (e) => {
        const n = document.querySelector("#subscribeSaveBlock .zbk-tooltip");
        if (!n) return;
        const i = n.closest(".ssb--plans").classList.contains("zbk-subscription-locked") && e.target.closest('.ssb--plan[data-plan="subscription"]');
        n.classList.toggle("zbk-tooltip--open", !!i), i && (e.preventDefault(), e.stopImmediatePropagation(), l("exp_biteskit_locked_plan", "Subscribe & Save Locked Tooltip", "click", b), n.dataset.watched || (n.dataset.watched = "1", P(n)));
      },
      !0
    ), document.addEventListener("click", (e) => {
      const n = e.target.closest("#subscribeSaveBlock");
      n && setTimeout(() => {
        var o;
        const t = n.querySelector(".ssb--plans");
        if (!t) return;
        const i = !!n.querySelector(".ssb--bundle.active");
        t.classList.toggle("zbk-subscription-locked", i), i && ((o = t.querySelector('.ssb--plan[data-plan="one-time"]:not(.active)')) == null || o.click());
      });
    });
  }
  function I(e) {
    document.addEventListener(
      "click",
      (n) => {
        n.target.closest(".ssb--proceed") && document.querySelector("#subscribeSaveBlock .ssb--bundle.active") && (n.preventDefault(), n.stopImmediatePropagation(), g(e));
      },
      !0
    );
  }
  async function g(e) {
    await fetch("/cart/clear.js", { method: "POST" }), await fetch("/cart/add.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: e, quantity: 1 })
    }), location.href = "/checkout";
  }
  x({ name: "BuzzPatch Subscribe & Save + Zero Bites Kit", dev: "OS" }), v("exp_biteskit");
  class f {
    constructor() {
      this.init();
    }
    async init() {
      this.isTestTarget() && (await _("#subscribeSaveBlock"), this.addStyles(), await $());
    }
    isTestTarget() {
      if (location.pathname.includes("buzzpatch") && !(window.innerWidth > 768))
        return !0;
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = w, document.head.appendChild(n);
    }
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => new f()) : new f();
})();
