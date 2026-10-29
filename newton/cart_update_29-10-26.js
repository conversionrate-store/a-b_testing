(function() {
  "use strict";
  const D = `html.crs-cart-lock,
html.crs-cart-lock body {
  overflow: hidden !important;
}

.crs-cart {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  overflow: hidden;
  font-family: inherit;
  color: #263444;
  direction: rtl;
  text-align: right;
}
.crs-cart *,
.crs-cart *::before,
.crs-cart *::after {
  box-sizing: border-box;
}
.crs-cart p {
  margin: 0;
}
.crs-cart button {
  font-family: inherit;
  direction: rtl;
  cursor: pointer;
}
.crs-cart img {
  display: block;
}
.crs-cart::backdrop {
  background: transparent;
}

.crs-cart__overlay {
  position: absolute;
  inset: 0;
  background: rgba(25, 35, 46, 0.45);
  opacity: 0;
  transition: opacity 0.25s ease;
}
.crs-cart.is-open .crs-cart__overlay {
  opacity: 1;
}

.crs-cart__panel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 480px;
  max-width: 100%;
  background: #fff;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}
.crs-cart.is-open .crs-cart__panel {
  transform: none;
}

.crs-cart__content {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: opacity 0.2s ease;
}
.crs-cart.is-busy .crs-cart__content {
  opacity: 0.6;
  pointer-events: none;
}

.crs-cart__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  padding: 14px 24px;
  border-bottom: 1px solid #e1e4e7;
  flex-shrink: 0;
}

.crs-cart__heading {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.crs-cart__title {
  font-size: 18px;
  line-height: 21.6px;
  font-weight: 700;
}

.crs-cart__count {
  font-size: 11px;
  line-height: 13.2px;
  font-weight: 700;
  color: #7b8792;
}

.crs-cart__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  border-radius: 22px;
  background: none;
}

.crs-cart__banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 7px 24px;
  border-bottom: 1px solid #dddddd;
  background: #e5f3ed;
  color: #007247;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  flex-shrink: 0;
}
.crs-cart__banner svg {
  flex: 0 0 16px;
}
.crs-cart__banner--preorder {
  background: #fdf6f2;
  color: #ff6a1a;
}

.crs-cart__body {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.crs-cart__items {
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.crs-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border: 1px solid #dddddd;
  border-radius: 12px;
}

.crs-card__top {
  display: flex;
  align-items: flex-start;
  gap: 22px;
}

.crs-card__media {
  flex: 0 0 90px;
  width: 90px;
  height: 90px;
  border-radius: 9px;
  background: #f7f7f5;
  overflow: hidden;
}
.crs-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.crs-card__info {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.crs-card__name {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}

.crs-card__subtitle {
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #7b8792;
}

.crs-badge {
  display: inline-flex;
  padding: 2px 6px;
  border-radius: 999px;
  background: #e4512a;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
}

.crs-card__price {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.crs-card__price-final {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}

.crs-card__price-original {
  font-size: 13px;
  line-height: 20.8px;
  font-weight: 700;
  color: #6d7782;
}

.crs-card__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.crs-card__remove {
  padding: 0;
  border: 0;
  background: none;
  font-size: 12px;
  font-weight: 400;
  color: #7b8792;
  text-decoration: underline;
}

.crs-qty {
  display: flex;
  align-items: stretch;
  width: 86px;
  height: 32px;
  border: 1px solid #d9dde1;
  border-radius: 7px;
  overflow: hidden;
  background: #fff;
}

.crs-qty__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  padding: 0;
  border: 0;
  background: none;
}

.crs-qty__value {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  border-inline: 1px solid #d9dde1;
  font-size: 11px;
  font-weight: 700;
}

.crs-included {
  padding-top: 8px;
  border-top: 1px dashed #dfdfdf;
}

.crs-included__toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  border: 0;
  background: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #263444;
}

.crs-included__chevron {
  display: flex;
  transition: transform 0.2s ease;
}
.crs-included.is-open .crs-included__chevron {
  transform: rotate(180deg);
}

.crs-included__list {
  display: none;
  flex-direction: column;
  gap: 8px;
  margin: 12px 0 4px;
  padding: 0;
  list-style: none;
}
.crs-included.is-open .crs-included__list {
  display: flex;
}

.crs-included__row,
.crs-gift {
  display: flex;
  align-items: center;
  gap: 15px;
}

.crs-included__img {
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: #f7f7f5;
  overflow: hidden;
}
.crs-included__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.crs-included__name {
  flex: 1 1 auto;
  min-width: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
}

.crs-included__price {
  flex-shrink: 0;
  font-size: 12px;
  line-height: 14.85px;
  font-weight: 700;
  color: #e4512a;
}

.crs-gift {
  padding: 12px;
  border: 1px solid #dddddd;
  border-radius: 12px;
}

.crs-offer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 20px;
  border: 1px solid #dfdfdf;
  border-radius: 12px;
  background: #f6f6f6;
}

.crs-offer__text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.crs-offer__title {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}

.crs-offer__desc {
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: #7b8792;
}

.crs-offer__price {
  font-size: 12px;
  line-height: 14.85px;
  font-weight: 700;
  color: #e4512a;
}

.crs-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-height: 34px;
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 12.5px;
  line-height: normal;
  font-weight: 700;
  white-space: nowrap;
}
.crs-btn--outline {
  border: 1px solid #f97316;
  background: transparent;
  color: #f97316;
}
.crs-btn svg {
  flex: 0 0 14px;
}

.crs-recs {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.crs-recs__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.crs-recs__title {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}

.crs-recs__arrows {
  display: flex;
  gap: 8px;
}

.crs-recs__arrow {
  display: flex;
  padding: 0;
  border: 0;
  background: none;
}
.crs-recs__arrow--prev svg {
  transform: rotate(180deg);
}

.crs-recs__track {
  display: flex;
  gap: 12px;
  margin-inline-end: -24px;
  padding-inline-end: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}
.crs-recs__track::-webkit-scrollbar {
  display: none;
}

.crs-rec {
  flex: 0 0 166px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border: 1px solid #dddddd;
  border-radius: 12px;
  scroll-snap-align: start;
}

.crs-rec__media {
  height: 140px;
  border-radius: 9px;
  background: #f7f7f5;
  overflow: hidden;
}
.crs-rec__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.crs-rec__title {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}

.crs-rec__price {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: auto !important;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}
.crs-rec__price s {
  font-size: 12px;
  color: #6b7280;
}

.crs-rec__add {
  width: 100%;
}

.crs-cart__footer {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  border-top: 1px solid #e1e4e7;
  background: #fff;
  box-shadow: 0 -8px 11px rgba(25, 35, 46, 0.07);
}

.crs-cart__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 2px;
}

.crs-cart__summary-label {
  font-size: 13px;
  line-height: 20.8px;
  font-weight: 700;
}

.crs-cart__summary-note {
  font-size: 11px;
  line-height: 14.85px;
  font-weight: 700;
  color: #e4512a;
}

.crs-cart__checkout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 52px;
  padding: 16px 32px;
  border: 0;
  border-radius: 9px;
  background: #e4512a;
  color: #fff;
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  text-transform: uppercase;
}

.crs-cart__checkout-sep {
  width: 1px;
  height: 28px;
  margin-inline-start: auto;
  margin-inline-end: 32px;
  background: rgba(255, 255, 255, 0.7);
}

.crs-cart__trust {
  display: flex;
  justify-content: center;
  gap: 24px;
  width: 100%;
}
.crs-cart__trust span {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  line-height: 20.8px;
  font-weight: 700;
  color: #65717d;
}

.crs-cart__payments {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 12px;
}

.crs-cart__empty {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  font-size: 16px;
  font-weight: 700;
}

@media screen and (max-width: 749px) {
  .crs-cart__panel {
    width: 100%;
  }
  .crs-cart__header,
  .crs-cart__banner,
  .crs-cart__footer {
    padding-inline: 16px;
  }
  .crs-cart__body {
    padding-inline: 16px;
  }
  .crs-recs__track {
    margin-inline-end: -16px;
    padding-inline-end: 16px;
  }
  .crs-card__top {
    gap: 12px;
  }
  .crs-offer {
    padding: 12px 16px;
  }
  .crs-cart__trust {
    gap: 16px;
  }
  .crs-cart__trust span {
    font-size: 12px;
  }
  .crs-cart__payments svg {
    max-height: 28px;
    width: auto;
  }
}
.crs-cart__error {
  margin: 0;
  padding: 8px 24px;
  background: #fdecea;
  color: #e4512a;
  font-size: 14px;
  text-align: center;
}
@media (max-width: 749px) {
  .crs-cart__error {
    padding: 8px 16px;
  }
}

.crs-card__subtitle bdi,
.crs-included__name bdi {
  white-space: nowrap;
}
`, _ = (n, t, e, r = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: t,
      event_type: e,
      event_loc: r
    }), $(`Event: ${n} | ${t} | ${e} | ${r}`, "success");
  }, k = (n) => new Promise((t) => {
    const e = document.querySelector(n);
    e && t(e);
    const r = new MutationObserver(() => {
      const s = document.querySelector(n);
      s && (t(s), r.disconnect());
    });
    r.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), G = ({ name: n, dev: t }) => {
    const e = n.toLowerCase().replace(/\s/g, "_");
    _(`${e}_started`, `Experiment ${n} started`, "other", e), console.log(
      `%c EXP: ${n} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class b {
    constructor(t) {
      this.elements = t instanceof b ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, e, r) {
      return typeof e == "function" && (r = e, e = ""), this.elements.forEach((s) => {
        s.addEventListener(t, function(i) {
          var c;
          if (e !== "") {
            let l = (c = i.target) == null ? void 0 : c.closest(e);
            l && (r == null || r.call(l, i));
          } else
            r == null || r.call(s, i);
        });
      }), this;
    }
    addClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.add(t);
      }), this;
    }
    removeClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.remove(t);
      }), this;
    }
    toggleClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.toggle(t);
      }), this;
    }
    each(t) {
      for (let e of this.elements)
        t(new b(e), this.elements.indexOf(e));
      return this;
    }
    style(t, e) {
      const r = t.split("-").map((s, i) => i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[r] = e;
      }), this;
    }
    find(t) {
      const e = this.elements.map((r) => Array.from(r.querySelectorAll(t)));
      return new b(e.flat());
    }
    attr(t, e) {
      return e ? (this.elements.forEach(function(r) {
        r.setAttribute(t, e);
      }), this) : this.elements[0].getAttribute(t);
    }
    text(t) {
      return t ? (this.elements.forEach(function(e) {
        e.textContent = t;
      }), this) : this.elements[0].textContent || "";
    }
    html(t) {
      return t ? (this.elements.forEach(function(e) {
        e.innerHTML = t;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const N = (n) => new b(n), $ = (n, t = "info") => {
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
    console.log(`%c>>> ${n}`, `${e} font-size: 16px; font-weight: 600`);
  }, o = {
    title: "העגלה שלך",
    oneProduct: "מוצר אחד",
    products: (n) => `${n} מוצרים`,
    close: "סגור",
    saving: (n) => `חיסכון ${n}`,
    included: (n) => `מה כלול בבאנדל (${n} פריטים)`,
    includedLabel: "כלול",
    chairPrefix: "כיסא",
    remove: "הסרה",
    gift: "מתנה",
    free: "חינם",
    upgradeTitle: "שדרוג ל-Pro Bundle",
    upgradeButton: "שדרוג",
    upgradePrice: (n) => `ב-${n}`,
    add: "הוספה",
    // Carousel title falls back to this when the cart has no chair to name it
    // after (Figma titles it with the chair's own model name).
    recsFallbackTitle: "משלימים את הסטאפ",
    totalLabel: "סה״כ לתשלום (כולל מע״מ)",
    saved: (n) => `חסכת ${n} בהזמנה זו`,
    installments: (n) => `עד 12 תשלומים · ${n}/חודש`,
    checkout: "מעבר לתשלום",
    warranty: "אחריות 5 שנים",
    trial: "30 ימי ניסיון או החזר מלא",
    empty: "העגלה שלך ריקה",
    error: "לא הצלחנו לעדכן את העגלה, נסו שוב",
    continueShopping: "המשך קניות",
    cm: "ס״מ"
  }, y = "Pro Bundle - פרו", I = 12, V = [
    {
      name: "Foot Support",
      handle: "libernovo-foot-support",
      newtonHandle: "libernovo-foot-support",
      title: "משענת רגליים StepSync"
    },
    {
      name: "Battery",
      handle: "omni-rechargeable-battery",
      newtonHandle: "libernovo-battery",
      title: "סוללה נטענת"
    }
  ], E = ["Omni", "Omni Pro", "Omni SE", "Omni Gen", "Maxis Airflow", "Maxis Manual", "Maxis Electric"], F = ["Midnight Black", "Space Grey", "Moss Green", "Glacier", "Graphite", "Obsidian"], U = {
    Glacier: "גלסייר",
    Graphite: "גרפיט"
  }, h = {
    close: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="13.59" height="13.59" viewBox="0 0 13.59 13.59" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-close-SVG">
<path id="crs-close-Vector" d="M11.6486 1.94143L1.94143 11.6486" stroke-width="0.970714" stroke-linecap="round" stroke-linejoin="round" stroke="#263444"/>
<path id="crs-close-Vector_2" d="M11.6486 11.6486L1.94143 1.94143" stroke-width="0.970714" stroke-linecap="round" stroke-linejoin="round" stroke="#263444"/>
</g>
</svg>`
    ),
    truck: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-truck-fi_6830961" clip-path="url(#crs-truck-clip0_0_37)">
<path id="crs-truck-Vector" d="M8.0625 12.6541C8.0626 11.7971 8.31248 10.9587 8.78157 10.2415C9.25067 9.5243 9.91863 8.95938 10.7037 8.61584C11.4889 8.27231 12.3571 8.16505 13.2022 8.30721C14.0473 8.44936 14.8327 8.83476 15.4622 9.41625C15.483 7.90979 15.4705 6.40333 15.4247 4.89688C15.3997 3.86188 14.8153 2.82281 13.8362 2.30938C13.3331 2.04344 12.8119 1.7875 12.2847 1.545C10.2016 2.21875 7.76187 3.1075 5.30125 4.20781C5.06467 4.31239 4.862 4.48095 4.71607 4.69452C4.57014 4.90808 4.48676 5.15816 4.47531 5.41656C4.43687 6.60406 4.425 7.82969 4.44062 9.04156C4.44188 9.0771 4.43171 9.11211 4.41161 9.14145C4.3915 9.17078 4.36251 9.19289 4.32891 9.20454C4.29531 9.21618 4.25886 9.21674 4.22491 9.20614C4.19096 9.19553 4.16131 9.17433 4.14031 9.14562C3.8799 8.81229 3.62552 8.48271 3.37719 8.15687C3.35885 8.1314 3.33161 8.11376 3.30087 8.10745C3.27013 8.10114 3.23813 8.10662 3.21125 8.12281C3.01812 8.23781 2.82844 8.35125 2.64219 8.46312C2.53781 8.52562 2.40938 8.44219 2.40875 8.31375C2.4025 7.10656 2.4325 5.89625 2.49719 4.72313C2.52438 4.22844 2.83469 3.7625 3.29375 3.53562C5.65375 2.37 8.17156 1.41781 10.32 0.713125C9.82 0.5175 9.32281 0.338125 8.8375 0.168125C8.18312 -0.0565659 7.4725 -0.0565659 6.81812 0.168125C5.19875 0.726875 3.43031 1.45625 1.81906 2.30938C0.840312 2.82281 0.256563 3.86188 0.230625 4.89688C0.166875 6.96563 0.166875 9.03437 0.230625 11.1031C0.255625 12.1381 0.840312 13.1772 1.81906 13.6906C3.43031 14.5437 5.19875 15.2731 6.81906 15.8316C7.47344 16.0563 8.18406 16.0563 8.83844 15.8316C8.97989 15.7828 9.12271 15.7325 9.26687 15.6806C8.49101 14.8643 8.05965 13.7803 8.0625 12.6541Z" fill="#007247"/>
<path id="crs-truck-Vector_2" d="M12.4709 9.30844C11.8092 9.3085 11.1623 9.5048 10.6121 9.8725C10.0619 10.2402 9.63308 10.7628 9.37989 11.3742C9.1267 11.9856 9.0605 12.6584 9.18966 13.3074C9.31883 13.9565 9.63755 14.5526 10.1055 15.0205C10.5735 15.4884 11.1697 15.807 11.8188 15.9361C12.4679 16.0651 13.1406 15.9988 13.752 15.7455C14.3633 15.4922 14.8859 15.0633 15.2535 14.513C15.6211 13.9627 15.8172 13.3158 15.8172 12.6541C15.8171 12.2147 15.7306 11.7796 15.5624 11.3737C15.3942 10.9677 15.1477 10.5989 14.837 10.2882C14.5262 9.97755 14.1574 9.73112 13.7514 9.56301C13.3454 9.3949 12.9103 9.3084 12.4709 9.30844ZM14.3794 12.1003L12.3681 14.2122C12.3134 14.2698 12.2476 14.3157 12.1747 14.3471C12.1017 14.3786 12.0232 14.395 11.9437 14.3953H11.9409C11.862 14.3953 11.7838 14.3794 11.7111 14.3486C11.6384 14.3179 11.5725 14.2729 11.5175 14.2162L10.4503 13.1169C10.3413 13.0046 10.2814 12.8536 10.2838 12.6971C10.2861 12.5406 10.3505 12.3915 10.4628 12.2825C10.5751 12.1735 10.7261 12.1136 10.8826 12.1159C11.0391 12.1183 11.1882 12.1827 11.2972 12.295L11.9375 12.9541L13.5253 11.2866C13.6345 11.1796 13.7809 11.1192 13.9338 11.118C14.0866 11.1168 14.234 11.1751 14.3447 11.2804C14.4555 11.3857 14.5211 11.5299 14.5277 11.6826C14.5343 11.8353 14.4813 11.9846 14.38 12.0991L14.3794 12.1003Z" fill="#007247"/>
</g>
<defs>
<clipPath id="crs-truck-clip0_0_37">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>`
    ),
    truckPreorder: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-truckPreorder-fi_6830961" clip-path="url(#crs-truckPreorder-clip0_0_4)">
<path id="crs-truckPreorder-Vector" d="M8.0625 12.6541C8.0626 11.7971 8.31248 10.9587 8.78157 10.2415C9.25067 9.5243 9.91863 8.95938 10.7037 8.61584C11.4889 8.27231 12.3571 8.16505 13.2022 8.30721C14.0473 8.44936 14.8327 8.83476 15.4622 9.41625C15.483 7.90979 15.4705 6.40333 15.4247 4.89688C15.3997 3.86188 14.8153 2.82281 13.8362 2.30938C13.3331 2.04344 12.8119 1.7875 12.2847 1.545C10.2016 2.21875 7.76187 3.1075 5.30125 4.20781C5.06467 4.31239 4.862 4.48095 4.71607 4.69452C4.57014 4.90808 4.48676 5.15816 4.47531 5.41656C4.43687 6.60406 4.425 7.82969 4.44062 9.04156C4.44188 9.0771 4.43171 9.11211 4.41161 9.14145C4.3915 9.17078 4.36251 9.19289 4.32891 9.20454C4.29531 9.21618 4.25886 9.21674 4.22491 9.20614C4.19096 9.19553 4.16131 9.17433 4.14031 9.14562C3.8799 8.81229 3.62552 8.48271 3.37719 8.15687C3.35885 8.1314 3.33161 8.11376 3.30087 8.10745C3.27013 8.10114 3.23813 8.10662 3.21125 8.12281C3.01812 8.23781 2.82844 8.35125 2.64219 8.46312C2.53781 8.52562 2.40938 8.44219 2.40875 8.31375C2.4025 7.10656 2.4325 5.89625 2.49719 4.72313C2.52438 4.22844 2.83469 3.7625 3.29375 3.53562C5.65375 2.37 8.17156 1.41781 10.32 0.713125C9.82 0.5175 9.32281 0.338125 8.8375 0.168125C8.18312 -0.0565659 7.4725 -0.0565659 6.81812 0.168125C5.19875 0.726875 3.43031 1.45625 1.81906 2.30938C0.840312 2.82281 0.256563 3.86188 0.230625 4.89688C0.166875 6.96563 0.166875 9.03437 0.230625 11.1031C0.255625 12.1381 0.840312 13.1772 1.81906 13.6906C3.43031 14.5437 5.19875 15.2731 6.81906 15.8316C7.47344 16.0563 8.18406 16.0563 8.83844 15.8316C8.97989 15.7828 9.12271 15.7325 9.26687 15.6806C8.49101 14.8643 8.05965 13.7803 8.0625 12.6541Z" fill="#FF6A1A"/>
<path id="crs-truckPreorder-Vector_2" d="M12.4709 9.30844C11.8092 9.3085 11.1623 9.5048 10.6121 9.8725C10.0619 10.2402 9.63308 10.7628 9.37989 11.3742C9.1267 11.9856 9.0605 12.6584 9.18966 13.3074C9.31883 13.9565 9.63755 14.5526 10.1055 15.0205C10.5735 15.4884 11.1697 15.807 11.8188 15.9361C12.4679 16.0651 13.1406 15.9988 13.752 15.7455C14.3633 15.4922 14.8859 15.0633 15.2535 14.513C15.6211 13.9627 15.8172 13.3158 15.8172 12.6541C15.8171 12.2147 15.7306 11.7796 15.5624 11.3737C15.3942 10.9677 15.1477 10.5989 14.837 10.2882C14.5262 9.97755 14.1574 9.73112 13.7514 9.56301C13.3454 9.3949 12.9103 9.3084 12.4709 9.30844ZM14.3794 12.1003L12.3681 14.2122C12.3134 14.2698 12.2476 14.3157 12.1747 14.3471C12.1017 14.3786 12.0232 14.395 11.9437 14.3953H11.9409C11.862 14.3953 11.7838 14.3794 11.7111 14.3486C11.6384 14.3179 11.5725 14.2729 11.5175 14.2162L10.4503 13.1169C10.3413 13.0046 10.2814 12.8536 10.2838 12.6971C10.2861 12.5406 10.3505 12.3915 10.4628 12.2825C10.5751 12.1735 10.7261 12.1136 10.8826 12.1159C11.0391 12.1183 11.1882 12.1827 11.2972 12.295L11.9375 12.9541L13.5253 11.2866C13.6345 11.1796 13.7809 11.1192 13.9338 11.118C14.0866 11.1168 14.234 11.1751 14.3447 11.2804C14.4555 11.3857 14.5211 11.5299 14.5277 11.6826C14.5343 11.8353 14.4813 11.9846 14.38 12.0991L14.3794 12.1003Z" fill="#FF6A1A"/>
</g>
<defs>
<clipPath id="crs-truckPreorder-clip0_0_4">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>`
    ),
    chevron: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-chevron-SVG" clip-path="url(#crs-chevron-clip0_0_56)">
<path id="crs-chevron-Vector" d="M1 1L5 5L9 1" stroke-width="1.4" stroke-linecap="round" stroke="#555555"/>
</g>
<defs>
<clipPath id="crs-chevron-clip0_0_56">
<rect width="10" height="6" fill="white"/>
</clipPath>
</defs>
</svg>`
    ),
    minus: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-minus-SVG">
<path id="crs-minus-Vector" d="M1.96429 5H8.03571" stroke-width="0.714286" stroke-linecap="round" stroke="#E4512A"/>
</g>
</svg>`
    ),
    plus: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-plus-SVG">
<path id="crs-plus-Vector" d="M1.96429 5H8.03571" stroke-width="0.714286" stroke-linecap="round" stroke="#E4512A"/>
<path id="crs-plus-Vector_2" d="M5 1.96429V8.03571" stroke-width="0.714286" stroke-linecap="round" stroke="#E4512A"/>
</g>
</svg>`
    ),
    plusOrange: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-plusOrange-SVG">
<path id="crs-plusOrange-Vector" d="M7 2.625V7M7 7V11.375M7 7H2.625M7 7H11.375" stroke-width="1.3125" stroke-linecap="round" stroke="#F97316"/>
</g>
</svg>`
    ),
    arrow: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-arrow-Frame-16">
<mask id="crs-arrow-path-1-inside-1_0_31" fill="white">
<path d="M0 7C0 3.13401 3.13401 0 7 0H25C28.866 0 32 3.13401 32 7V25C32 28.866 28.866 32 25 32H7C3.13401 32 0 28.866 0 25V7Z"/>
</mask>
<path d="M0 7C0 3.13401 3.13401 0 7 0H25C28.866 0 32 3.13401 32 7V25C32 28.866 28.866 32 25 32H7C3.13401 32 0 28.866 0 25V7Z" fill="white"/>
<path d="M7 0V1H25V0V-1H7V0ZM32 7H31V25H32H33V7H32ZM25 32V31H7V32V33H25V32ZM0 25H1V7H0H-1V25H0ZM7 32V31C3.68629 31 1 28.3137 1 25H0H-1C-1 29.4183 2.58172 33 7 33V32ZM32 25H31C31 28.3137 28.3137 31 25 31V32V33C29.4183 33 33 29.4183 33 25H32ZM25 0V1C28.3137 1 31 3.68629 31 7H32H33C33 2.58172 29.4183 -1 25 -1V0ZM7 0V-1C2.58172 -1 -1 2.58172 -1 7H0H1C1 3.68629 3.68629 1 7 1V0Z" fill="#D9DDE1" mask="url(#crs-arrow-path-1-inside-1_0_31)"/>
<path id="crs-arrow-Vector" d="M18 13L14 17L18 21" stroke-width="1.4" stroke-linecap="round" stroke="#555555"/>
</g>
</svg>`
    ),
    shield: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="16.875" height="20" viewBox="0 0 16.875 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-shield-Group">
<path id="crs-shield-Vector" d="M16.3933 3.23851L8.73707 0.0597217C8.54527 -0.0198877 8.32969 -0.0199268 8.13793 0.0597217L0.48168 3.23851C0.190078 3.3596 0 3.64429 0 3.96003V7.82429C0 13.1451 3.21598 17.9313 8.14227 19.9421C8.33148 20.0193 8.54348 20.0193 8.73273 19.9421C13.6589 17.9314 16.875 13.1452 16.875 7.82429V3.96003C16.875 3.64429 16.685 3.3596 16.3933 3.23851ZM15.3125 7.82429C15.3125 12.3475 12.6562 16.5115 8.4375 18.3701C4.33148 16.5611 1.5625 12.4701 1.5625 7.82429V4.4816L8.4375 1.62714L15.3125 4.4816V7.82429ZM7.57398 10.4577L10.932 7.09972C11.237 6.79464 11.7317 6.7946 12.0368 7.09972C12.3419 7.40484 12.3419 7.89949 12.0368 8.20457L8.12641 12.1149C7.82125 12.4201 7.3266 12.42 7.02156 12.1149L4.8382 9.93156C4.53309 9.62644 4.53309 9.13179 4.8382 8.82671C5.14332 8.52164 5.63797 8.5216 5.94305 8.82671L7.57398 10.4577Z" fill="#65717D"/>
</g>
</svg>`
    ),
    trial: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-trial-Group">
<path id="crs-trial-Vector" d="M1.17188 10C1.17188 8.34176 1.63406 6.72594 2.50848 5.32723C3.11988 4.34922 3.91441 3.50461 4.84227 2.83566L4.49613 4.3348L5.63797 4.5984L6.42883 1.17293L3.00332 0.38207L2.73973 1.52387L4.19148 1.85902C3.12582 2.62035 2.21465 3.58645 1.5148 4.70598C0.523789 6.29121 0 8.12184 0 10C0 12.6711 1.0402 15.1823 2.92891 17.0711C4.8177 18.9598 7.32891 20 10 20V18.8281C7.64191 18.8281 5.425 17.9098 3.75758 16.2424C2.09016 14.575 1.17188 12.3581 1.17188 10Z" fill="#65717D"/>
<path id="crs-trial-Vector_2" d="M18.4852 15.294C19.4762 13.7088 20 11.8782 20 10C20 7.32891 18.9598 4.8177 17.0711 2.92891C15.1823 1.0402 12.6711 0 10 0V1.17188C12.3581 1.17188 14.575 2.09016 16.2424 3.75758C17.9098 5.425 18.8281 7.64191 18.8281 10C18.8281 11.6582 18.3659 13.2741 17.4915 14.6728C16.8801 15.6508 16.0856 16.4954 15.1577 17.1643L15.5039 15.6652L14.362 15.4016L13.5712 18.8271L16.9967 19.6179L17.2603 18.4761L15.8085 18.1409C16.8742 17.3796 17.7854 16.4135 18.4852 15.294Z" fill="#65717D"/>
<path id="crs-trial-Vector_3" d="M8.34274 17.4578L17.4578 8.3427L11.6573 2.54223L2.54223 11.6573L8.34274 17.4578ZM10.4143 6.27109C10.7463 6.60309 11.1877 6.78598 11.6573 6.78598C12.1268 6.78598 12.5682 6.60312 12.9002 6.27109L13.3146 5.8568L14.1432 6.68547L13.7289 7.0998C13.0435 7.7852 13.0435 8.90035 13.7289 9.58574L14.1432 10L10 14.1432L9.58566 13.7289C9.25363 13.3969 8.81223 13.214 8.3427 13.214C7.87316 13.214 7.43176 13.3968 7.09973 13.7289L6.68539 14.1432L5.85672 13.3145L6.27105 12.9002C6.95645 12.2148 6.95645 11.0996 6.27105 10.4142L5.8568 10L10 5.8568L10.4143 6.27109ZM5.4425 11.2429C5.67098 11.4714 5.67098 11.8431 5.4425 12.0716L5.02816 12.4859L4.19953 11.6573L5.02816 10.8286L5.4425 11.2429ZM7.51406 14.9718L7.9284 14.5575C8.03906 14.4468 8.18621 14.3859 8.34274 14.3859C8.49922 14.3859 8.64637 14.4468 8.75703 14.5575L9.17137 14.9718L8.34274 15.8005L7.51406 14.9718ZM14.9718 9.17137L14.5575 8.75707C14.3291 8.52859 14.3291 8.15687 14.5575 7.9284L14.9719 7.51406L15.8005 8.3427L14.9718 9.17137ZM12.4859 5.02816L12.0716 5.4425C11.9609 5.55316 11.8138 5.61414 11.6573 5.61414C11.5008 5.61414 11.3536 5.55316 11.243 5.4425L10.8286 5.02816L11.6573 4.19949L12.4859 5.02816Z" fill="#65717D"/>
<path id="crs-trial-Vector_4" d="M10 11.757C10.4501 11.757 10.9003 11.5856 11.243 11.243C11.9283 10.5576 11.9283 9.44242 11.243 8.75707C10.5577 8.07164 9.44242 8.07172 8.75703 8.75707C8.07172 9.44242 8.07172 10.5576 8.75703 11.243C9.09973 11.5857 9.54984 11.757 10 11.757ZM9.58566 9.5857C9.69633 9.47504 9.84348 9.41406 10 9.41406C10.1565 9.41406 10.3036 9.47504 10.4143 9.5857C10.6427 9.81418 10.6427 10.1859 10.4143 10.4143C10.3036 10.525 10.1565 10.586 9.99996 10.586C9.84344 10.586 9.69633 10.525 9.58566 10.4143C9.35723 10.1859 9.35723 9.81414 9.58566 9.5857Z" fill="#65717D"/>
</g>
</svg>`
    ),
    applePay: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="68" height="28" viewBox="0 0 68 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-applePay-Apple_Pay_logo-1" clip-path="url(#crs-applePay-clip0_0_58)">
<path id="crs-applePay-XMLID_34_" d="M12.4313 3.6099C11.6344 4.55566 10.3594 5.30162 9.0844 5.19505C8.92503 3.91627 9.54925 2.55756 10.2797 1.71836C11.0766 0.745956 12.4711 0.0532826 13.6 0C13.7328 1.33206 13.2149 2.63749 12.4313 3.6099ZM13.5867 5.44814C11.7407 5.34158 10.1602 6.50048 9.28362 6.50048C8.39378 6.50048 7.05237 5.50143 5.59143 5.52807C3.69221 5.55471 1.92581 6.63368 0.956277 8.35205C-1.03591 11.7888 0.438308 16.8773 2.36409 19.6746C3.30706 21.0599 4.43596 22.5785 5.92346 22.5252C7.33128 22.4719 7.88909 21.6061 9.58909 21.6061C11.3024 21.6061 11.7938 22.5252 13.2813 22.4986C14.8219 22.4719 15.7914 21.1132 16.7344 19.7279C17.8102 18.156 18.2485 16.6242 18.275 16.5442C18.2485 16.5176 15.3 15.3853 15.2735 11.9753C15.2469 9.12464 17.5977 7.76594 17.7039 7.68601C16.3758 5.71456 14.3039 5.50143 13.5867 5.44814ZM24.2516 1.58516V22.352H27.4657V15.2521H31.9149C35.9789 15.2521 38.8344 12.4548 38.8344 8.40533C38.8344 4.35585 36.0321 1.58516 32.0211 1.58516H24.2516ZM27.4657 4.30257H31.1711C33.9602 4.30257 35.5539 5.79448 35.5539 8.41865C35.5539 11.0428 33.9602 12.548 31.1578 12.548H27.4657V4.30257ZM44.7047 22.5119C46.7235 22.5119 48.5961 21.4862 49.4461 19.8611H49.5125V22.352H52.4875V12.0152C52.4875 9.01808 50.0969 7.08658 46.418 7.08658C43.0047 7.08658 40.4813 9.04472 40.3883 11.7355H43.2836C43.5227 10.4567 44.7047 9.61751 46.325 9.61751C48.2907 9.61751 49.393 10.5366 49.393 12.2284V13.3739L45.3821 13.6137C41.65 13.8402 39.6313 15.372 39.6313 18.0362C39.6313 20.7269 41.7164 22.5119 44.7047 22.5119ZM45.568 20.0476C43.8547 20.0476 42.7657 19.2217 42.7657 17.9562C42.7657 16.6508 43.8149 15.8915 45.8203 15.7716L49.393 15.5452V16.7174C49.393 18.6622 47.7461 20.0476 45.568 20.0476ZM56.4586 28C59.593 28 61.0672 26.8011 62.3555 23.1646L68 7.28639H64.7328L60.9477 19.5547H60.8813L57.0961 7.28639H53.736L59.1813 22.4053L58.8891 23.3245C58.3977 24.883 57.6008 25.4824 56.1797 25.4824C55.9274 25.4824 55.436 25.4558 55.2367 25.4291V27.9201C55.4227 27.9734 56.2196 28 56.4586 28Z" fill="black"/>
</g>
<defs>
<clipPath id="crs-applePay-clip0_0_58">
<rect width="68" height="28" fill="white"/>
</clipPath>
</defs>
</svg>`
    ),
    visa: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="52" height="32" viewBox="0 0 52 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-visa-visa.CjeXrSa5.svg" clip-path="url(#crs-visa-clip0_0_20)">
<path id="crs-visa-Vector" d="M4.10526 0.666667H47.8947C49.7841 0.666667 51.3158 2.15905 51.3158 4V28C51.3158 29.8409 49.7841 31.3333 47.8947 31.3333H4.10526C2.21587 31.3333 0.684211 29.8409 0.684211 28V4C0.684211 2.15905 2.21587 0.666667 4.10526 0.666667Z" stroke="black" stroke-opacity="0.07"/>
<path id="crs-visa-Vector_2" d="M47.8947 0H4.10526C1.77895 0 0 1.73333 0 4V28C0 30.2667 1.91579 32 4.10526 32H47.8947C50.2211 32 52 30.2667 52 28V4C52 1.73333 50.0842 0 47.8947 0Z" fill="#142FBD"/>
<path id="crs-visa-Vector_3" d="M47.8947 1.33333C49.4 1.33333 50.6316 2.53333 50.6316 4V28C50.6316 29.4667 49.4 30.6667 47.8947 30.6667H4.10526C2.6 30.6667 1.36842 29.4667 1.36842 28V4C1.36842 2.53333 2.6 1.33333 4.10526 1.33333H47.8947Z" fill="#1532CB"/>
<path id="crs-visa-Vector_4" d="M40.4976 13.6223H40.0644C39.4866 15.0296 39.0532 15.7333 38.6199 17.8444H41.3644C40.931 15.7333 40.931 14.7481 40.4976 13.6223ZM44.6866 21.9259H42.231C42.0866 21.9259 42.0866 21.9259 41.9421 21.7852L41.6532 20.5185L41.5087 20.2371H38.0421C37.8976 20.2371 37.7532 20.2371 37.7532 20.5185L37.3199 21.7852C37.3199 21.9259 37.1755 21.9259 37.1755 21.9259H34.1421L34.431 21.2223L38.6199 11.6519C38.6199 10.9481 39.0532 10.6667 39.7755 10.6667H41.9421C42.0866 10.6667 42.231 10.6667 42.231 10.9481L44.2532 20.0963C44.3976 20.6592 44.5421 21.0815 44.5421 21.6444C44.6866 21.7852 44.6866 21.7852 44.6866 21.9259ZM25.331 21.5037L25.9087 18.9704C26.0532 18.9704 26.1976 19.1111 26.1976 19.1111C27.2087 19.5333 28.2199 19.8148 29.231 19.6741C29.5199 19.6741 29.9532 19.5333 30.2421 19.3925C30.9644 19.1111 30.9644 18.4075 30.3866 17.8444C30.0976 17.5629 29.6644 17.4223 29.231 17.1408C28.6532 16.8592 28.0755 16.5777 27.6421 16.1556C25.9087 14.7481 26.4866 12.7778 27.4976 11.7926C28.3644 11.2296 28.7976 10.6667 29.9532 10.6667C31.6866 10.6667 33.5644 10.6667 34.431 10.9481H34.5755C34.431 11.7926 34.2866 12.4963 33.9976 13.3408C33.2755 13.0593 32.5532 12.7778 31.831 12.7778C31.3976 12.7778 30.9644 12.7778 30.531 12.9185C30.2421 12.9185 30.0976 13.0593 29.9532 13.2C29.6644 13.4815 29.6644 13.9037 29.9532 14.1852L30.6755 14.7481C31.2532 15.0296 31.831 15.3111 32.2644 15.5925C32.9866 16.0148 33.7087 16.7185 33.8532 17.5629C34.1421 18.8296 33.7087 19.9556 32.5532 20.8C31.831 21.3629 31.5421 21.6444 30.531 21.6444C28.5087 21.6444 26.9199 21.7852 25.6199 21.3629C25.4755 21.6444 25.4755 21.6444 25.331 21.5037ZM20.2755 21.9259C20.4199 20.9408 20.4199 20.9408 20.5644 20.5185C21.2866 17.4223 22.0087 14.1852 22.5866 11.0889C22.731 10.8074 22.731 10.6667 23.0199 10.6667H25.6199C25.331 12.3556 25.0421 13.6223 24.6087 15.1704C24.1755 17.2815 23.7421 19.3925 23.1644 21.5037C23.1644 21.7852 23.0199 21.7852 22.731 21.7852L20.2755 21.9259ZM6.84211 10.9481C6.84211 10.8074 7.13099 10.6667 7.27544 10.6667H12.1866C12.9088 10.6667 13.4866 11.0889 13.631 11.7926L14.931 17.9852C14.931 18.1259 14.931 18.1259 15.0755 18.2667C15.0755 18.1259 15.2199 18.1259 15.2199 18.1259L18.2532 10.9481C18.1087 10.8074 18.2532 10.6667 18.3976 10.6667H21.431C21.431 10.8074 21.431 10.8074 21.2866 10.9481L16.8087 21.2223C16.6644 21.5037 16.6644 21.6444 16.5199 21.7852C16.3755 21.9259 16.0866 21.7852 15.7976 21.7852H13.631C13.4866 21.7852 13.3421 21.7852 13.3421 21.5037L11.031 12.7778C10.7421 12.4963 10.3088 12.0741 9.73099 11.9333C8.86433 11.5111 7.27544 11.2296 6.98656 11.2296L6.84211 10.9481Z" fill="white"/>
</g>
<defs>
<clipPath id="crs-visa-clip0_0_20">
<rect width="52" height="32" fill="white"/>
</clipPath>
</defs>
</svg>`
    ),
    master: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-master-master.BggvWv9L.svg" clip-path="url(#crs-master-clip0_0_13)">
<path id="crs-master-Vector" d="M3.94737 0.666667H46.0526C47.8694 0.666667 49.3421 2.15905 49.3421 4V28C49.3421 29.8409 47.8694 31.3333 46.0526 31.3333H3.94737C2.13064 31.3333 0.657895 29.8409 0.657895 28V4C0.657895 2.15905 2.13064 0.666667 3.94737 0.666667Z" stroke="black" stroke-opacity="0.07"/>
<path id="crs-master-Vector_2" d="M46.0526 0H3.94737C1.71053 0 0 1.73333 0 4V28C0 30.2667 1.84211 32 3.94737 32H46.0526C48.2895 32 50 30.2667 50 28V4C50 1.73333 48.1579 0 46.0526 0Z" fill="#1C1C1C"/>
<path id="crs-master-Vector_3" d="M46.0526 1.33333C47.5 1.33333 48.6842 2.53333 48.6842 4V28C48.6842 29.4667 47.5 30.6667 46.0526 30.6667H3.94737C2.5 30.6667 1.31579 29.4667 1.31579 28V4C1.31579 2.53333 2.5 1.33333 3.94737 1.33333H46.0526Z" fill="#232323"/>
<path id="crs-master-Vector_4" d="M19.2584 25.6969C24.8076 25.6969 29.3062 21.1384 29.3062 15.5152C29.3062 9.89189 24.8076 5.33333 19.2584 5.33333C13.7091 5.33333 9.21053 9.89189 9.21053 15.5152C9.21053 21.1384 13.7091 25.6969 19.2584 25.6969Z" fill="#EB001B"/>
<path id="crs-master-Vector_5" d="M30.7417 25.6969C36.2909 25.6969 40.7895 21.1384 40.7895 15.5152C40.7895 9.89189 36.2909 5.33333 30.7417 5.33333C25.1924 5.33333 20.6938 9.89189 20.6938 15.5152C20.6938 21.1384 25.1924 25.6969 30.7417 25.6969Z" fill="#F79E1B"/>
<path id="crs-master-Vector_6" d="M29.3062 15.5149C29.3062 12.024 27.5838 8.96941 25 7.22396C22.4163 9.11487 20.6938 12.1694 20.6938 15.5149C20.6938 18.8603 22.4163 22.0603 25 23.8057C27.5838 22.0603 29.3062 19.0057 29.3062 15.5149Z" fill="#FF5F00"/>
</g>
<defs>
<clipPath id="crs-master-clip0_0_13">
<rect width="50" height="32" fill="white"/>
</clipPath>
</defs>
</svg>`
    ),
    amex: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-amex-american_express.BegL5te2.svg" clip-path="url(#crs-amex-clip0_0_8)">
<path id="crs-amex-Vector" d="M3.94737 0.666667H46.0526C47.8694 0.666667 49.3421 2.15905 49.3421 4V28C49.3421 29.8409 47.8694 31.3333 46.0526 31.3333H3.94737C2.13064 31.3333 0.657895 29.8409 0.657895 28V4C0.657895 2.15905 2.13064 0.666667 3.94737 0.666667Z" stroke="black" stroke-opacity="0.07"/>
<path id="crs-amex-Vector_2" d="M46.0526 0H3.94737C1.71053 0 0 1.73333 0 4V28C0 30.2667 1.84211 32 3.94737 32H46.0526C48.2895 32 50 30.2667 50 28V4C50 1.73333 48.1579 0 46.0526 0Z" fill="#0071CE"/>
<path id="crs-amex-Vector_3" d="M3.94737 0.666667H46.0526C47.8089 0.666667 49.3421 2.11589 49.3421 4V28C49.3421 29.8985 47.9262 31.3333 46.0526 31.3333H3.94737C2.19111 31.3333 0.657895 29.8841 0.657895 28V4C0.657895 2.10152 2.07387 0.666667 3.94737 0.666667Z" stroke="black" stroke-opacity="0.07"/>
<path id="crs-amex-Vector_4" d="M34.0345 8.44271V4H40.7895L41.9292 7.3776L43.0703 4H48.6842V18.9336H48.4208L45.8779 21.6875L48.4208 24.4792H48.6842V28.3555H44.21L42.0179 25.8659L39.7371 28.3555H25.6142V16.888H21.0526L26.6666 4H32.1058L34.0345 8.44271ZM27.1047 27.0208H35.5263V24.7096H29.8237V23.1992H35.3503V20.888H29.8237V19.3763H35.5263V17.0651H27.1047V27.0208ZM40.1753 22.0429L35.5263 27.0208H38.9468L41.9292 23.8216L44.8242 27.0208H48.3321L43.6832 21.9544L48.3321 17.0651H44.9116L41.9292 20.2656L39.1216 17.0651H35.5263L40.1753 22.0429ZM23.2447 15.6432H26.2271L27.0174 13.5989H31.5776L32.4553 15.6432H35.525L31.1395 5.59896H27.6303L23.2447 15.6432ZM44.21 5.59896L42.0166 11.8216L39.7358 5.59896H35.5263V15.5547H38.2453V8.53255L40.7895 15.5547H43.1576L45.7005 8.53255V15.5547H48.3321V5.51041L44.21 5.59896ZM30.6126 11.2878H27.9811L29.2968 7.99869L30.6126 11.2878Z" fill="white"/>
</g>
<defs>
<clipPath id="crs-amex-clip0_0_8">
<rect width="50" height="32" fill="white"/>
</clipPath>
</defs>
</svg>`
    ),
    diners: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-diners-diners_club.B9hVEmwz.svg" clip-path="url(#crs-diners-clip0_0_4)">
<path id="crs-diners-Vector" opacity="0.07" d="M46.0526 0H3.94737C1.71053 0 0 1.73333 0 4V28C0 30.2667 1.84211 32 3.94737 32H46.0526C48.2895 32 50 30.2667 50 28V4C50 1.73333 48.1579 0 46.0526 0Z" fill="black"/>
<path id="crs-diners-Vector_2" d="M46.0526 1.33333C47.5 1.33333 48.6842 2.53333 48.6842 4V28C48.6842 29.4667 47.5 30.6667 46.0526 30.6667H3.94737C2.5 30.6667 1.31579 29.4667 1.31579 28V4C1.31579 2.53333 2.5 1.33333 3.94737 1.33333H46.0526Z" fill="white"/>
<path id="crs-diners-Vector_3" d="M15.7901 16V20.9333C15.7901 21.3333 15.5269 21.3333 15.1322 21.2C12.6322 20.1333 11.1848 16.8 12.1059 14C12.6322 12.5333 13.6848 11.3333 15.1322 10.8C15.6585 10.5333 15.7901 10.6667 15.7901 11.0667V16ZM18.4217 16V11.0667C18.4217 10.6667 18.4217 10.6667 18.8164 10.8C21.5796 11.8667 23.0269 15.2 21.9743 18C21.448 19.4667 20.3954 20.6667 18.948 21.2C18.4217 21.4667 18.4217 21.3333 18.4217 20.9333V16ZM27.8954 6.66667H17.1059C22.1059 6.66667 26.0532 10.8 26.0532 16C26.0532 21.2 22.1059 25.3333 17.1059 25.3333H27.8954C32.8954 25.3333 36.8427 21.2 36.8427 16C36.8427 10.8 32.8954 6.66667 27.8954 6.66667Z" fill="#3086C8"/>
</g>
<defs>
<clipPath id="crs-diners-clip0_0_4">
<rect width="50" height="32" fill="white"/>
</clipPath>
</defs>
</svg>`
    )
  }, g = (n, t) => {
    var e;
    return ((e = n.properties) == null ? void 0 : e[t]) ?? "";
  }, A = (n) => g(n, "_promo_gift") === "true", L = (n) => {
    const t = ` ${n.product_title.toLowerCase()} `;
    return [...E].sort((r, s) => s.length - r.length).find((r) => t.includes(` ${r.toLowerCase()} `)) ?? E.find((r) => r.toLowerCase() === (n.product_type || "").trim().toLowerCase()) ?? "";
  }, j = (n) => g(n, "_main_chair_product") === "true" || g(n, "_chair_accessory") !== "true" && !!L(n), W = (n) => {
    const t = [], e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), s = [];
    for (const i of n.items) {
      if (A(i)) {
        s.push(i);
        continue;
      }
      const c = g(i, "_bundle_uuid"), l = c ? e.get(c) : void 0;
      if (l) {
        l.lines.push(i), r.set(i.key, l);
        continue;
      }
      const u = {
        id: c || i.key,
        main: i,
        accessories: [],
        lines: [i],
        gifts: [],
        isBundle: !1,
        isChair: !1,
        isGift: !1
      };
      c && e.set(c, u), r.set(i.key, u), t.push(u);
    }
    for (const i of t)
      i.main = i.lines.find(j) ?? i.lines[0], i.accessories = i.lines.filter((c) => c !== i.main), i.lines = [i.main, ...i.accessories], i.isBundle = i.accessories.length > 0, i.isChair = j(i.main);
    t.sort((i, c) => Number(c.isChair) - Number(i.isChair));
    for (const i of s) {
      const c = r.get(g(i, "_promo_parent_key"));
      if (c) {
        c.gifts.push(i);
        continue;
      }
      t.push({
        id: i.key,
        main: i,
        accessories: [],
        lines: [i],
        gifts: [],
        isBundle: !1,
        isChair: !1,
        isGift: !0
      });
    }
    return t;
  }, X = (n) => n.lines.reduce((t, e) => t + e.final_line_price, 0), J = (n) => n.lines.reduce((t, e) => t + e.original_line_price, 0), x = (n) => {
    const t = n / 100, e = Number.isInteger(t) ? 0 : 2;
    return `₪${t.toLocaleString("en-US", { minimumFractionDigits: e, maximumFractionDigits: e })}`;
  }, H = (n, t) => {
    if (!n) return "";
    const e = n.startsWith("//") ? `https:${n}` : n;
    return e.includes("width=") ? e.replace(/width=\d+/, `width=${t}`) : `${e}${e.includes("?") ? "&" : "?"}width=${t}`;
  }, M = (n) => {
    const e = (n.accessories.map((r) => g(r, "_color")).find(Boolean) || n.main.product_title).toLowerCase();
    return F.find((r) => e.includes(r.toLowerCase())) ?? "";
  }, P = (n) => U[n] ?? n, q = (n) => {
    var e;
    const t = g(n, "Seat Depth") || ((e = n.product_title.match(/\b(\d{2})\s*cm\b/i)) == null ? void 0 : e[1]) || "";
    return t ? `${t.replace(/\s*cm$/i, "")} ${o.cm}` : "";
  }, B = (n) => g(n, "_bundle_label").split(" - ")[0].trim(), S = (n) => n.isChair ? L(n.main) || n.main.product_type || n.main.product_title : n.isBundle && B(n.main) ? B(n.main) : n.main.product_title, K = (n) => {
    if (n.isChair)
      return [n.isBundle ? B(n.main) : "", P(M(n)), q(n.main)].filter(Boolean).join(" · ");
    const t = n.main.variant_title;
    return t && t !== "Default Title" ? t : "";
  }, Q = (n, t) => {
    if (t === n.main && n.isChair) {
      const r = [P(M(n)), q(t)].filter(Boolean).join(" · ");
      return `${o.chairPrefix} ${S(n)} ${r}`.trim();
    }
    const e = V.find((r) => r.name === g(t, "_accessory_name"));
    return (e == null ? void 0 : e.title) ?? t.product_title;
  }, Y = (n) => {
    const t = n.filter((s) => s.isChair).map((s) => g(s.main, "זמן אספקה")).filter(Boolean), e = t.find((s) => /מוקדמת|pre-?order/i.test(s) || !/ימי עסקים/.test(s));
    return { text: e ?? t[0] ?? "", preorder: !!e };
  }, t1 = (n, t, e) => {
    const r = n.options.findIndex((i) => /model/i.test(i.name)), s = n.options.findIndex((i) => /color/i.test(i.name));
    return r < 0 || s < 0 ? null : n.variants.find(
      (i) => i.available && i.options[s] === e && i.options[r].split("/").map((c) => c.trim().toLowerCase()).includes(t)
    ) ?? null;
  }, e1 = (n, t) => {
    if (!n.isChair) return null;
    const e = L(n.main).toLowerCase(), r = M(n);
    if (!e || !r) return null;
    const s = new Set(n.accessories.map((c) => g(c, "_accessory_name"))), i = [];
    return V.forEach((c, l) => {
      const u = t[l];
      if (!u || s.has(c.name)) return;
      const a = t1(u, e, r);
      a && i.push({ accessory: c, product: u, variant: a, color: r });
    }), i.length ? { items: i, price: i.reduce((c, l) => c + l.variant.price, 0) * n.main.quantity } : null;
  }, d = (n) => n.replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]), R = (n) => n.split(" · ").map((t) => `<bdi>${d(t)}</bdi>`).join(" · "), n1 = () => (
    /* HTML */
    `
  <dialog id="crsCart" class="crs-cart" dir="rtl" aria-label="${o.title}">
    <div class="crs-cart__overlay" data-crs-close></div>
    <div class="crs-cart__panel">
      <div class="crs-cart__content" data-crs-content></div>
    </div>
  </dialog>
`
  ), r1 = (n) => {
    const { cart: t, groups: e } = n;
    if (!e.length) return O(0) + i1();
    const r = e.filter((s) => !s.isGift).length;
    return (
      /* HTML */
      `
    ${O(r)} ${n.error ? `<p class="crs-cart__error" role="alert">${n.error}</p>` : ""}
    ${s1(e)}
    <div class="crs-cart__body" data-crs-body>
      <div class="crs-cart__items">${e.map((s) => c1(s, n)).join("")}</div>
      ${h1(n)}
    </div>
    ${f1(t)}
  `
    );
  }, O = (n) => (
    /* HTML */
    `
  <div class="crs-cart__header">
    <div class="crs-cart__heading">
      <p class="crs-cart__title">${o.title}</p>
      ${n ? `<p class="crs-cart__count">${n === 1 ? o.oneProduct : o.products(n)}</p>` : ""}
    </div>
    <button type="button" class="crs-cart__close" data-crs-close aria-label="${o.close}">${h.close}</button>
  </div>
`
  ), s1 = (n) => {
    const { text: t, preorder: e } = Y(n);
    return t ? (
      /* HTML */
      `
    <div class="crs-cart__banner ${e ? "crs-cart__banner--preorder" : ""}">
      ${e ? h.truckPreorder : h.truck}
      <span>${d(t)}</span>
    </div>
  `
    ) : "";
  }, i1 = () => (
    /* HTML */
    `
  <div class="crs-cart__empty">
    <p>${o.empty}</p>
    <button type="button" class="crs-btn crs-btn--outline" data-crs-close>${o.continueShopping}</button>
  </div>
`
  ), c1 = (n, t) => {
    if (n.isGift) return p1(n);
    const e = t.upgrades.get(n.id);
    return o1(n, t.openGroups.has(n.id)) + (e ? d1(n, e) : "");
  }, o1 = (n, t) => {
    const e = X(n), r = J(n), s = K(n);
    return (
      /* HTML */
      `
    <div class="crs-card" data-crs-group="${d(n.id)}">
      <div class="crs-card__top">
        <a class="crs-card__media" href="${d(n.main.url)}">
          <img src="${H(n.main.image, 200)}" alt="${d(n.main.product_title)}" loading="lazy" />
        </a>
        <div class="crs-card__info">
          <p class="crs-card__name">${d(S(n))}</p>
          ${s ? `<p class="crs-card__subtitle">${R(s)}</p>` : ""}
          ${r > e ? `<span class="crs-badge">${o.saving(x(r - e))}</span>` : ""}
        </div>
        <div class="crs-card__price">
          <span class="crs-card__price-final">${x(e)}</span>
          ${r > e ? `<s class="crs-card__price-original">${x(r)}</s>` : ""}
        </div>
      </div>
      ${n.isBundle ? a1(n, t) : ""}
      <div class="crs-card__actions">
        ${l1(n)}
        <button type="button" class="crs-card__remove" data-crs-remove="${d(n.id)}">${o.remove}</button>
      </div>
    </div>
  `
    );
  }, a1 = (n, t) => (
    /* HTML */
    `
  <div class="crs-included ${t ? "is-open" : ""}">
    <button
      type="button"
      class="crs-included__toggle"
      data-crs-toggle="${d(n.id)}"
      aria-expanded="${t}"
    >
      <span class="crs-included__chevron">${h.chevron}</span>
      <span>${o.included(n.lines.length)}</span>
    </button>
    <ul class="crs-included__list">
      ${n.lines.map(
      (e) => (
        /* HTML */
        `
            <li class="crs-included__row">
              <span class="crs-included__img"><img src="${H(e.image, 100)}" alt="" loading="lazy" /></span>
              <span class="crs-included__name">${R(Q(n, e))}</span>
              <span class="crs-included__price">
                ${e === n.main ? x(e.final_line_price) : o.includedLabel}
              </span>
            </li>
          `
      )
    ).join("")}
    </ul>
  </div>
`
  ), l1 = (n) => (
    /* HTML */
    `
  <div class="crs-qty">
    <button type="button" class="crs-qty__btn" data-crs-qty="${d(n.id)}" data-delta="1" aria-label="+">
      ${h.plus}
    </button>
    <span class="crs-qty__value">${n.main.quantity}</span>
    <button type="button" class="crs-qty__btn" data-crs-qty="${d(n.id)}" data-delta="-1" aria-label="-">
      ${h.minus}
    </button>
  </div>
`
  ), d1 = (n, t) => (
    /* HTML */
    `
  <div class="crs-offer">
    <div class="crs-offer__text">
      <p class="crs-offer__title">${o.upgradeTitle}</p>
      <p class="crs-offer__desc">${t.items.map((e) => e.accessory.title).join(" + ")}</p>
      <p class="crs-offer__price">${o.upgradePrice(x(t.price))}</p>
    </div>
    <button type="button" class="crs-btn crs-btn--outline crs-btn--small" data-crs-upgrade="${d(n.id)}">
      ${h.plusOrange}
      <span>${o.upgradeButton}</span>
    </button>
  </div>
`
  ), p1 = (n) => (
    /* HTML */
    `
  <div class="crs-gift">
    <span class="crs-included__img"><img src="${H(n.main.image, 100)}" alt="" loading="lazy" /></span>
    <span class="crs-included__name">${d(n.main.product_title)}</span>
    <span class="crs-included__price">${o.gift}</span>
  </div>
`
  ), h1 = (n) => {
    if (!n.recommendations.length) return "";
    const t = n.groups.find((r) => r.isChair), e = t ? S(t) : o.recsFallbackTitle;
    return (
      /* HTML */
      `
    <div class="crs-recs">
      <div class="crs-recs__head">
        <p class="crs-recs__title">${d(e)}</p>
        <div class="crs-recs__arrows" dir="ltr">
          <button type="button" class="crs-recs__arrow" data-crs-slide="next" aria-label="next">${h.arrow}</button>
          <button type="button" class="crs-recs__arrow crs-recs__arrow--prev" data-crs-slide="prev" aria-label="prev">
            ${h.arrow}
          </button>
        </div>
      </div>
      <div class="crs-recs__track" data-crs-track>
        ${n.recommendations.map(u1).join("")}
      </div>
    </div>
  `
    );
  }, u1 = (n) => (
    /* HTML */
    `
  <div class="crs-rec">
    <a class="crs-rec__media" href="${d(n.url)}"><img src="${d(n.image)}" alt="${d(n.title)}" loading="lazy" /></a>
    <p class="crs-rec__title">${d(n.title)}</p>
    <p class="crs-rec__price">
      <span>${d(n.price)}</span>
      ${n.compare ? `<s>${d(n.compare)}</s>` : ""}
    </p>
    <button type="button" class="crs-btn crs-btn--outline crs-btn--small crs-rec__add" data-crs-rec-add="${n.index}">
      ${h.plusOrange}
      <span>${o.add}</span>
    </button>
  </div>
`
  ), f1 = (n) => {
    const t = n.original_total_price - n.total_price, e = x(Math.round(n.total_price / I / 100) * 100);
    return (
      /* HTML */
      `
    <div class="crs-cart__footer">
      <div class="crs-cart__summary">
        <span class="crs-cart__summary-label">${o.totalLabel}</span>
        <span class="crs-cart__summary-note">${t > 0 ? o.saved(x(t)) : o.installments(e)}</span>
      </div>
      <button type="button" class="crs-cart__checkout" data-crs-checkout>
        <span>${o.checkout}</span>
        <span class="crs-cart__checkout-sep"></span>
        <span>${x(n.total_price)}</span>
      </button>
      <div class="crs-cart__trust">
        <span>${o.trial}${h.trial}</span>
        <span>${o.warranty}${h.shield}</span>
      </div>
      <div class="crs-cart__payments" dir="ltr">${h.applePay}${h.visa}${h.master}${h.amex}${h.diners}</div>
    </div>
  `
    );
  };
  G({ name: "Newton Cart Update", dev: "YK" });
  const Z = "crs-cart", v = "cart-drawer-component", m = "Slide-in cart";
  class _1 {
    constructor() {
      this.cart = null, this.groups = [], this.upgrades = /* @__PURE__ */ new Map(), this.recommendations = [], this.accessoryProducts = [], this.openGroups = /* @__PURE__ */ new Set(), this.isOpen = !1, this.busy = !1, this.error = "", this.notifying = !1, this.injectStyle(), this.mount(), this.hijackNativeDrawer(), this.listen(), this.loadAccessoryProducts();
    }
    // Same reason as ../fit_block: the dev server injects the bundle before the
    // parser has reached <head>/<body>.
    async injectStyle() {
      if (document.getElementById("crsCartStyle")) return;
      (await k("head")).insertAdjacentHTML("beforeend", `<style id="crsCartStyle">${D}</style>`);
    }
    async mount() {
      var e;
      const t = await k("body");
      (e = document.getElementById("crsCart")) == null || e.remove(), t.insertAdjacentHTML("beforeend", n1()), this.root = document.getElementById("crsCart"), this.content = this.root.querySelector("[data-crs-content]"), this.root.addEventListener("cancel", (r) => {
        r.preventDefault(), this.close();
      }), this.bind();
    }
    // Every way the theme opens its drawer — header cart icon (on:click="/open"),
    // product-form's CartAddEvent (auto-open), the cart recommendations' own
    // add flow, promo-engine's delayed open — ends in DialogComponent's
    // showDialog() on this one element. Shadowing it on the CartDrawerComponent
    // prototype swaps all of them over to our drawer at once, while the native
    // drawer keeps rendering (hidden) and keeps its own cart-items/summary logic,
    // which we still reuse for the checkout form and recommendations.
    async hijackNativeDrawer() {
      this.hijackNativeDialog(), await customElements.whenDefined(v);
      const t = customElements.get(v), e = this;
      t.prototype.showDialog = function() {
        e.notifying || e.open();
      };
    }
    // product-form.js's bundle add (Standard/Pro) doesn't stop at drawer.open():
    // it then checks the native <dialog>'s own `open`, finds it false (ours
    // opened instead), and calls dialog.showModal() directly — or, failing
    // that, clicks a[href="/cart"]. So for the native drawer's dialog only:
    // showModal() opens ours and `open` reports ours.
    //
    // That fake `open` is then copied around by the theme's morph.js on every
    // section re-render (oldNode.open → newNode.open, plus the `open`
    // attribute), which would really open the native dialog behind our back —
    // so every other way of opening it (open = true, show(), the attribute) is
    // a no-op too. Every other dialog on the page (ours included) is untouched.
    hijackNativeDialog() {
      const t = this, e = HTMLDialogElement.prototype, r = e.showModal, s = e.show, i = Object.getOwnPropertyDescriptor(e, "open"), c = (a) => a instanceof HTMLDialogElement && !!a.closest(v);
      e.showModal = function() {
        if (!c(this)) return r.call(this);
        t.notifying || t.open();
      }, e.show = function() {
        if (!c(this)) return s.call(this);
      }, Object.defineProperty(e, "open", {
        ...i,
        get() {
          return c(this) ? t.isOpen : i.get.call(this);
        },
        set(a) {
          c(this) && a || i.set.call(this, a);
        }
      });
      const l = Element.prototype.setAttribute, u = Element.prototype.toggleAttribute;
      Element.prototype.setAttribute = function(a, C) {
        if (!(a === "open" && c(this)))
          return l.call(this, a, C);
      }, Element.prototype.toggleAttribute = function(a, C) {
        return a === "open" && c(this) ? !1 : u.call(this, a, C);
      };
    }
    listen() {
      document.addEventListener("cart:update", (t) => {
        var r;
        const e = t.detail;
        ((r = e == null ? void 0 : e.data) == null ? void 0 : r.source) !== Z && this.scheduleRefresh();
      }), document.addEventListener("promo:cart-reconciled", () => this.scheduleRefresh()), k(v).then((t) => {
        let e;
        new MutationObserver(() => {
          clearTimeout(e), e = window.setTimeout(() => {
            if (!this.cart) return;
            const r = this.readRecommendations();
            JSON.stringify(r) !== JSON.stringify(this.recommendations) && (this.recommendations = r, this.render());
          }, 150);
        }).observe(t, { childList: !0, subtree: !0 });
      });
    }
    bind() {
      N(this.root).on("click", (t) => {
        const e = t.target;
        if (e.closest("[data-crs-close]")) return this.close();
        const r = e.closest("[data-crs-toggle]");
        if (r) return this.toggleIncluded(r.dataset.crsToggle);
        if (this.busy) return;
        const s = e.closest("[data-crs-qty]");
        if (s) return this.changeQuantity(s.dataset.crsQty, Number(s.dataset.delta));
        const i = e.closest("[data-crs-remove]");
        if (i) return this.removeGroup(i.dataset.crsRemove);
        const c = e.closest("[data-crs-upgrade]");
        if (c) return this.upgradeGroup(c.dataset.crsUpgrade);
        const l = e.closest("[data-crs-rec-add]");
        if (l) return this.addRecommendation(Number(l.dataset.crsRecAdd));
        const u = e.closest("[data-crs-slide]");
        if (u) return this.slide(u.dataset.crsSlide);
        if (e.closest("[data-crs-checkout]")) return this.checkout();
      });
    }
    // ─── Open / close ────────────────────────────────────────────────────────
    open() {
      var t;
      this.root && (this.isOpen || (this.isOpen = !0, clearTimeout(this.closeTimer), this.root.open || this.root.showModal(), requestAnimationFrame(() => this.root.classList.add("is-open")), document.documentElement.classList.add("crs-cart-lock"), _("newton_cart_open", "Slide-in cart opened", "view", m), (t = this.root.querySelector(".crs-cart__close")) == null || t.focus({ preventScroll: !0 })), this.cart && this.render(), this.scheduleRefresh());
    }
    close() {
      this.isOpen && (this.isOpen = !1, this.root.classList.remove("is-open"), this.closeTimer = window.setTimeout(() => this.root.close(), 300), document.documentElement.classList.remove("crs-cart-lock"), _("newton_cart_close", "Slide-in cart closed", "click", m));
    }
    // ─── Data ────────────────────────────────────────────────────────────────
    scheduleRefresh() {
      clearTimeout(this.refreshTimer), this.refreshTimer = window.setTimeout(() => this.refresh(), 100);
    }
    async refresh() {
      try {
        const t = await fetch("/cart.js", { cache: "no-store" }).then((e) => e.json());
        this.setCart(t);
      } catch (t) {
        $(`Newton Cart: failed to load cart — ${t}`, "error");
      }
    }
    setCart(t) {
      this.cart = t, this.groups = W(t), this.computeUpgrades(), this.recommendations = this.readRecommendations(), this.render();
    }
    async loadAccessoryProducts() {
      this.accessoryProducts = await Promise.all(
        V.map(
          (t) => fetch(`/products/${t.handle}.js`).then((e) => e.ok ? e.json() : null).catch(() => null)
        )
      ), this.cart && (this.computeUpgrades(), this.render());
    }
    computeUpgrades() {
      this.upgrades.clear();
      for (const t of this.groups) {
        const e = e1(t, this.accessoryProducts);
        e && this.upgrades.set(t.id, e);
      }
    }
    // Cards come from the native drawer's own (hidden) recommendations section
    // — the same products, variant and prices the theme already picks for this
    // cart, so adding goes through its own form/handler too (see
    // addRecommendation()).
    nativeRecommendationCards() {
      return Array.from(
        document.querySelectorAll(`${v} [data-cart-recommendation-card]`)
      );
    }
    readRecommendations() {
      return this.nativeRecommendationCards().map((t, e) => {
        var l, u, a, C, p, f;
        const r = t.querySelector("[data-recommendation-select]"), s = r == null ? void 0 : r.options[r.selectedIndex], i = (s == null ? void 0 : s.dataset) ?? {}, c = (l = t.querySelector(".cart-recommendations__image")) == null ? void 0 : l.getAttribute("src");
        return {
          index: e,
          title: i.hebrewModel || i.productTitle || ((a = (u = t.querySelector("[data-recommendation-title]")) == null ? void 0 : u.textContent) == null ? void 0 : a.trim()) || "",
          price: i.price || ((p = (C = t.querySelector("[data-recommendation-price]")) == null ? void 0 : C.textContent) == null ? void 0 : p.trim()) || "",
          compare: i.compare || "",
          image: i.image || c || "",
          url: i.productUrl || ((f = t.querySelector("[data-recommendation-link]")) == null ? void 0 : f.href) || "#"
        };
      });
    }
    // ─── Render ──────────────────────────────────────────────────────────────
    render() {
      if (!this.content || !this.cart) return;
      const t = this.content.querySelector("[data-crs-body]"), e = this.content.querySelector("[data-crs-track]"), r = (t == null ? void 0 : t.scrollTop) ?? 0, s = (e == null ? void 0 : e.scrollLeft) ?? 0, i = {
        cart: this.cart,
        groups: this.groups,
        upgrades: this.upgrades,
        recommendations: this.recommendations,
        openGroups: this.openGroups,
        error: this.error
      };
      this.content.innerHTML = r1(i);
      const c = this.content.querySelector("[data-crs-body]"), l = this.content.querySelector("[data-crs-track]");
      c && (c.scrollTop = r), l && (l.scrollLeft = s);
    }
    setBusy(t) {
      this.busy = t, this.root.classList.toggle("is-busy", t);
    }
    // ─── Cart mutations ──────────────────────────────────────────────────────
    // window.fetch is looked up per call on purpose: promo-engine wraps it to
    // reconcile its gift lines after cart changes, and our requests have to go
    // through that wrapper just like the theme's own.
    async post(t, e) {
      const r = await window.fetch(t, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(e)
      }), s = await r.json().catch(() => null);
      if (!r.ok) throw new Error((s == null ? void 0 : s.description) || (s == null ? void 0 : s.message) || `${t} ${r.status}`);
      return s;
    }
    async mutate(t) {
      this.setBusy(!0), this.error = "";
      try {
        await t();
      } catch (e) {
        this.error = o.error, $(`Newton Cart: ${e}`, "error"), _("newton_cart_error", String(e), "error", m);
      }
      await this.refresh(), this.notifyTheme(), this.setBusy(!1);
    }
    // Keeps everything else on the page in sync with a change we made: the
    // header cart-icon bubble, the native (hidden) drawer's own section — it
    // re-renders on any cart:update without `sections` — and promo-engine.
    notifyTheme() {
      this.cart && (this.notifying = !0, document.dispatchEvent(
        new CustomEvent("cart:update", {
          bubbles: !0,
          detail: {
            resource: {},
            sourceId: Z,
            data: { source: Z, itemCount: this.cart.item_count }
          }
        })
      ), this.notifying = !1);
    }
    findGroup(t) {
      return this.groups.find((e) => e.id === t);
    }
    // A bundle's lines always move together — same rule as the theme's own
    // syncBundleAccessories() (accessory quantity follows the chair's).
    changeQuantity(t, e) {
      const r = this.findGroup(t);
      if (!r) return;
      const s = Math.max(0, r.main.quantity + e);
      if (s === 0) return this.removeGroup(t);
      _(
        "newton_cart_quantity",
        `Quantity ${e > 0 ? "increased" : "decreased"}: ${r.main.product_title}`,
        "click",
        m
      );
      const i = Object.fromEntries(r.lines.map((c) => [c.key, s]));
      this.mutate(() => this.post("/cart/update.js", { updates: i }));
    }
    // Removes the whole card: chair + its accessories + promo gifts attached to
    // it — what the theme's removeDependentCartItems() does when the chair goes.
    removeGroup(t) {
      const e = this.findGroup(t);
      if (!e) return;
      _("newton_cart_remove", `Removed: ${e.main.product_title}`, "click", m);
      const r = Object.fromEntries([...e.lines, ...e.gifts].map((s) => [s.key, 0]));
      this.mutate(() => this.post("/cart/update.js", { updates: r }));
    }
    toggleIncluded(t) {
      var r, s;
      const e = !this.openGroups.has(t);
      e ? this.openGroups.add(t) : this.openGroups.delete(t), (r = this.root.querySelector(`[data-crs-group="${CSS.escape(t)}"] .crs-included`)) == null || r.classList.toggle("is-open", e), (s = this.root.querySelector(`[data-crs-toggle="${CSS.escape(t)}"]`)) == null || s.setAttribute("aria-expanded", String(e)), _(
        "newton_cart_bundle_contents",
        e ? "Bundle contents expanded" : "Bundle contents collapsed",
        "click",
        m
      );
    }
    // Adds the missing accessories exactly as the PDP's bundle picker would
    // (same line properties, same `_bundle_uuid`), then relabels the chair and
    // the accessories already in the cart to Pro — so the theme's own bundle
    // logic, the order and checkout all see one Pro bundle.
    upgradeGroup(t) {
      const e = this.findGroup(t), r = this.upgrades.get(t);
      !e || !r || (_("newton_cart_upgrade", `Upgrade to Pro Bundle: ${e.main.product_title}`, "click", m), this.mutate(async () => {
        const s = e.main, i = s.properties ?? {}, c = i._bundle_uuid || `b-${Date.now()}-${Math.floor(Math.random() * 1e5)}`, l = i["Seat Depth"] ? { "עומק מושב": i["עומק מושב"] ?? "", "Seat Depth": i["Seat Depth"] } : {};
        await this.post("/cart/add.js", {
          items: r.items.map(({ accessory: p, product: f, variant: w, color: T }) => {
            var z;
            return {
              id: w.id,
              quantity: s.quantity,
              properties: {
                _chair_accessory: "true",
                _accessory_name: p.name,
                _linked_to: String(s.variant_id),
                _color: T,
                _matched_variant_title: w.title,
                _matched_variant_display_title: [L(s), T].filter(Boolean).join(" / "),
                _accessory_image: ((z = w.featured_image) == null ? void 0 : z.src) || f.featured_image || "",
                _bundle_uuid: c,
                _bundle_label: y,
                ...l,
                Bundle: y,
                _newton_handle: p.newtonHandle
              }
            };
          })
        });
        const u = { _bundle_uuid: c, _bundle_label: y, Bundle: y };
        let a = null;
        for (const p of [s, ...e.accessories]) {
          const f = p === s ? { _main_chair_product: "true" } : {};
          a = await this.post("/cart/change.js", {
            id: p.key,
            quantity: p.quantity,
            properties: { ...p.properties ?? {}, ...u, ...f }
          });
        }
        const C = a == null ? void 0 : a.items.find(
          (p) => {
            var f, w;
            return p.variant_id === s.variant_id && ((f = p.properties) == null ? void 0 : f._bundle_uuid) === c && ((w = p.properties) == null ? void 0 : w._main_chair_product) === "true";
          }
        );
        if (!(!a || !C || C.key === s.key))
          for (const p of a.items.filter((f) => {
            var w;
            return A(f) && ((w = f.properties) == null ? void 0 : w._promo_parent_key) === s.key;
          }))
            await this.post("/cart/change.js", {
              id: p.key,
              quantity: p.quantity,
              properties: { ...p.properties ?? {}, _promo_parent_key: C.key }
            });
      }));
    }
    // Submits the native recommendation form — its own capturing submit
    // handler (newton-cart-recommendations.js) does the add (bundle options
    // included), fires cart:update and re-opens the drawer, which lands on ours.
    addRecommendation(t) {
      const e = this.nativeRecommendationCards()[t], r = e == null ? void 0 : e.querySelector("form[data-newton-cart-recommendation-form]"), s = this.recommendations[t];
      if (!r || !s) return;
      _("newton_cart_recommendation_add", `Recommendation added: ${s.title}`, "click", m), this.setBusy(!0);
      const i = () => {
        clearTimeout(c), document.removeEventListener("cart:update", i), this.setBusy(!1);
      }, c = window.setTimeout(i, 8e3);
      document.addEventListener("cart:update", i), r.requestSubmit();
    }
    slide(t) {
      const e = this.root.querySelector("[data-crs-track]"), r = e == null ? void 0 : e.querySelector(".crs-rec");
      if (!e || !r) return;
      const s = r.offsetWidth + 12;
      e.scrollBy({ left: t === "next" ? -s : s, behavior: "smooth" }), _("newton_cart_recommendations_slide", `Recommendations ${t}`, "click", m);
    }
    // Clicks the native checkout button (name="checkout" inside the theme's
    // cart form) rather than navigating to /checkout ourselves — keeps any
    // app/promo hooks bound to that form working.
    checkout() {
      _("newton_cart_checkout", "Checkout clicked", "click", m);
      const t = document.querySelector(`${v} button[name="checkout"]`);
      t ? t.click() : window.location.href = "/checkout";
    }
  }
  new _1();
})();
//# sourceMappingURL=index.js.map
