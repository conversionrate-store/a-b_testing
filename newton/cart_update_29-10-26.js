(function() {
  "use strict";
  const cn = `html.crs-cart-lock,
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

.crs-included__row {
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

.crs-offer__main {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
}

.crs-offer__icon {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 6px;
  background: #fff;
}
.crs-offer__icon svg {
  width: 20px;
  height: 20px;
}

.crs-offer--assembly.is-added .crs-offer__price {
  color: #263444;
}

.crs-recs__arrow:disabled {
  opacity: 0.4;
  cursor: default;
}

.crs-recs.is-static .crs-recs__arrows {
  display: none;
}

html[data-crs-cart-page] main .shopify-section[id$=__cart-section] {
  display: none !important;
}

.crs-page {
  max-width: 1092px;
  margin: 0 auto;
  padding: 37px 16px 56px;
  color: #263444;
  direction: rtl;
  text-align: right;
}
.crs-page *,
.crs-page *::before,
.crs-page *::after {
  box-sizing: border-box;
}
.crs-page p,
.crs-page h1 {
  margin: 0;
}
.crs-page button {
  font-family: inherit;
  direction: rtl;
  cursor: pointer;
}
.crs-page img {
  display: block;
}
.crs-page a.crs-btn {
  text-decoration: none;
}
.crs-page .crs-cart__empty {
  padding: 64px 16px;
}
.crs-page .crs-cart__banner {
  border-radius: 12px;
}
.crs-page .crs-card {
  padding: 16px;
}
.crs-page .crs-recs__track {
  margin-inline-end: 0;
  padding-inline-end: 0;
}
.crs-page .crs-rec {
  flex: 1 0 166px;
}

.crs-page__content {
  transition: opacity 0.2s ease;
}
.crs-page.is-busy .crs-page__content {
  opacity: 0.6;
  pointer-events: none;
}

.crs-page__head {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
}

.crs-page__title {
  font-size: 24px;
  line-height: 34px;
  font-weight: 700;
  color: #263444;
}

.crs-page__count {
  font-size: 14px;
  line-height: 19px;
}

.crs-page__layout {
  display: flex;
  align-items: flex-start;
  gap: 28px;
}

.crs-page__main {
  flex: 1 1 600px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.crs-page__panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #dddddd;
  border-radius: 12px;
  background: #fff;
}
.crs-page__panel .crs-cart__items {
  gap: 16px;
}

.crs-summary {
  flex: 0 1 432px;
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px;
  border: 1px solid #dddddd;
  border-radius: 12px;
  background: #fff;
}

.crs-summary__title {
  align-self: stretch;
  margin-bottom: 8px !important;
  font-size: 24px;
  line-height: 34px;
  font-weight: 700;
}

.crs-summary__rows {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 12px;
  border-bottom: 1px solid #dddddd;
}

.crs-summary__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 20px;
}
.crs-summary__row span {
  color: #000;
}
.crs-summary__row--saved {
  color: #ff6a1a;
}

.crs-summary__total {
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}
.crs-summary__total div {
  display: flex;
  flex-direction: column;
}
.crs-summary__total b {
  font-size: 18px;
  line-height: 20px;
}
.crs-summary__total span {
  font-size: 14px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.56);
}

@media screen and (max-width: 989px) {
  .crs-page {
    padding-top: 24px;
  }
  .crs-page__layout {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
  .crs-page__main,
  .crs-summary {
    flex: 0 0 auto;
  }
  .crs-summary {
    position: static;
  }
}
@media screen and (max-width: 749px) {
  .crs-page__title {
    font-size: 20px;
    line-height: 28px;
  }
  .crs-page__panel {
    padding: 12px;
  }
  .crs-page .crs-card {
    padding: 12px;
  }
  .crs-summary {
    padding: 16px;
  }
  .crs-summary__title {
    font-size: 20px;
    line-height: 28px;
  }
  .crs-page .crs-rec {
    flex: 0 0 166px;
  }
}
.crs-gifts {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 12px 20px;
  border: 1px solid #f2d6cc;
  border-radius: 12px;
  background: #fdf6f2;
}

.crs-gifts__toggle {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  min-height: 55px;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  text-align: right;
}

.crs-gifts__text {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.crs-gifts__title {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}

.crs-gifts__value {
  font-size: 12px;
  line-height: 14.85px;
  font-weight: 700;
  color: #e4512a;
}

.crs-gifts__chevron {
  display: flex;
  transform: rotate(180deg);
  transition: transform 0.2s ease;
}
.crs-gifts:not(.is-open) .crs-gifts__chevron {
  transform: none;
}

.crs-gifts__list {
  display: none;
  flex-direction: column;
  gap: 6px;
  margin: 0;
  padding: 7px 0 0;
  border-top: 1px dashed #f2d6cc;
  list-style: none;
}
.crs-gifts.is-open .crs-gifts__list {
  display: flex;
}

.crs-gifts__row {
  display: flex;
  align-items: center;
  gap: 15px;
}

.crs-gifts__img {
  flex: 0 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: #fff;
  overflow: hidden;
}
.crs-gifts__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #f7f7f5;
}

.crs-gifts__name {
  flex: 1 1 auto;
  min-width: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
}

.crs-gifts__price {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  white-space: nowrap;
}
.crs-gifts__price s {
  color: #6d7782;
}
.crs-gifts__price b {
  color: #e4512a;
}

@media screen and (max-width: 749px) {
  .crs-gifts {
    padding: 12px 16px;
  }
  .crs-gifts__toggle {
    gap: 12px;
  }
  .crs-gifts__title {
    font-size: 14px;
    line-height: 20px;
  }
}
`, g = (e, n, t, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: n,
      event_type: t,
      event_loc: s
    }), M(`Event: ${e} | ${n} | ${t} | ${s}`, "success");
  }, w = (e) => new Promise((n) => {
    const t = document.querySelector(e);
    t && n(t);
    const s = new MutationObserver(() => {
      const r = document.querySelector(e);
      r && (n(r), s.disconnect());
    });
    s.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), an = ({ name: e, dev: n }) => {
    const t = e.toLowerCase().replace(/\s/g, "_");
    g(`${t}_started`, `Experiment ${e} started`, "other", t), console.log(
      `%c EXP: ${e} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class v {
    constructor(n) {
      this.elements = n instanceof v ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, t, s) {
      return typeof t == "function" && (s = t, t = ""), this.elements.forEach((r) => {
        r.addEventListener(n, function(i) {
          var a;
          if (t !== "") {
            let c = (a = i.target) == null ? void 0 : a.closest(t);
            c && (s == null || s.call(c, i));
          } else
            s == null || s.call(r, i);
        });
      }), this;
    }
    addClass(n) {
      return this.elements.forEach(function(t) {
        t.classList.add(n);
      }), this;
    }
    removeClass(n) {
      return this.elements.forEach(function(t) {
        t.classList.remove(n);
      }), this;
    }
    toggleClass(n) {
      return this.elements.forEach(function(t) {
        t.classList.toggle(n);
      }), this;
    }
    each(n) {
      for (let t of this.elements)
        n(new v(t), this.elements.indexOf(t));
      return this;
    }
    style(n, t) {
      const s = n.split("-").map((r, i) => i === 0 ? r : r.charAt(0).toUpperCase() + r.slice(1)).join("");
      return this.elements.forEach(function(r) {
        r.style[s] = t;
      }), this;
    }
    find(n) {
      const t = this.elements.map((s) => Array.from(s.querySelectorAll(n)));
      return new v(t.flat());
    }
    attr(n, t) {
      return t ? (this.elements.forEach(function(s) {
        s.setAttribute(n, t);
      }), this) : this.elements[0].getAttribute(n);
    }
    text(n) {
      return n ? (this.elements.forEach(function(t) {
        t.textContent = n;
      }), this) : this.elements[0].textContent || "";
    }
    html(n) {
      return n ? (this.elements.forEach(function(t) {
        t.innerHTML = n;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const on = (e) => new v(e), M = (e, n = "info") => {
    let t;
    switch (n) {
      case "info":
        t = "color: #3498db;";
        break;
      case "warn":
        t = "color: #f39c12;";
        break;
      case "error":
        t = "color: #e74c3c;";
        break;
      case "success":
        t = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${e}`, `${t} font-size: 16px; font-weight: 600`);
  }, o = {
    title: "העגלה שלך",
    oneProduct: "מוצר אחד",
    products: (e) => `${e} מוצרים`,
    close: "סגור",
    saving: (e) => `חיסכון ${e}`,
    included: (e) => `מה כלול בבאנדל (${e} פריטים)`,
    includedLabel: "כלול",
    chairPrefix: "כיסא",
    remove: "הסרה",
    gift: "מתנה",
    // Gifts block (Figma 32:18027)
    giftsTitle: (e) => e === 1 ? "מתנה במבצע נוספה להזמנה" : `${e} מתנות במבצע נוספו להזמנה`,
    giftsValue: (e) => `שווי ${e} · חינם`,
    giftsCount: (e) => e === 1 ? "מתנה" : `${e} מתנות`,
    free: "חינם",
    upgradeTitle: "שדרוג ל-Pro Bundle",
    upgradeButton: "שדרוג",
    upgradePrice: (e) => `ב-${e}`,
    add: "הוספה",
    // Carousel title falls back to this when the cart has no chair to name it
    // after (Figma titles it with the chair's own model name).
    recsFallbackTitle: "משלימים את הסטאפ",
    totalLabel: "סה״כ לתשלום (כולל מע״מ)",
    saved: (e) => `חסכת ${e} בהזמנה זו`,
    installments: (e) => `עד 12 תשלומים · ${e}/חודש`,
    checkout: "מעבר לתשלום",
    warranty: "אחריות 5 שנים",
    trial: "30 ימי ניסיון או החזר מלא",
    empty: "העגלה שלך ריקה",
    error: "לא הצלחנו לעדכן את העגלה, נסו שוב",
    continueShopping: "המשך קניות",
    cm: "ס״מ",
    assemblyTitle: "הרכבה וכיוון בבית או במשרד",
    assemblyDesc: "טכנאי מרכיב את הכיסא ומכוונן אותו לגובה שלך",
    // /cart page (Figma 32:17563)
    pageTitle: "עגלת הקניות שלך",
    summaryTitle: "סיכום הזמנה",
    summaryProducts: "סה״כ מוצרים",
    summaryShipping: "משלוח",
    summarySaved: "סך החיסכון בהזמנה",
    summaryTotal: "סה״כ לתשלום",
    vat: "כולל מע״מ",
    perMonth: (e) => `או ${q} × ${e}`
  }, Z = "assembly-service", $ = "Pro Bundle - פרו", q = 12, k = [
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
  ], O = ["Omni", "Omni Pro", "Omni SE", "Omni Gen", "Maxis Airflow", "Maxis Manual", "Maxis Electric"], ln = [
    "Mylo",
    "Mylo Pro",
    "Mylo Cloud",
    "Velto",
    "Velto Cloud",
    "Velar",
    "Velar Cloud",
    "Revo QuickFold",
    "Revo Pro Cloud",
    "Alpha",
    "Jazz",
    "Nexa Pro"
  ], dn = ["Midnight Black", "Space Grey", "Moss Green", "Glacier", "Graphite", "Obsidian"], pn = {
    Glacier: "גלסייר",
    Graphite: "גרפיט"
  }, p = {
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
    ),
    // Stand-in for Figma's fi_726532 (gift box, same size and color).
    gift: (
      /* HTML */
      `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9.5h14v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8Z" stroke="#E4512A" stroke-width="1.6" stroke-linejoin="round"/>
<rect x="1.8" y="5.8" width="16.4" height="3.7" rx="1" stroke="#E4512A" stroke-width="1.6"/>
<path d="M10 5.8v12.7" stroke="#E4512A" stroke-width="1.6"/>
<path d="M10 5.8C9 3.2 6.3 1.8 5.3 3.3c-.9 1.4 1.4 2.5 4.7 2.5Zm0 0c1-2.6 3.7-4 4.7-2.5.9 1.4-1.4 2.5-4.7 2.5Z" stroke="#E4512A" stroke-width="1.6" stroke-linejoin="round"/>
</svg>`
    ),
    gear: (
      /* HTML */
      `<svg preserveAspectRatio="none" overflow="visible" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="crs-gear-fi_75668" clip-path="url(#crs-gear-clip0_0_4)">
<path id="crs-gear-Vector" d="M19.9371 8.8897C19.9055 8.60859 19.5776 8.39712 19.2941 8.39712C18.3778 8.39712 17.5646 7.85931 17.2236 7.0269C16.8754 6.17451 17.1001 5.18062 17.7827 4.55433C17.9978 4.35773 18.024 4.02854 17.8437 3.80002C17.3746 3.20443 16.8416 2.66636 16.2595 2.20008C16.0318 2.01741 15.6971 2.04284 15.4995 2.26158C14.9035 2.92169 13.8328 3.16698 13.0054 2.82179C12.1447 2.45964 11.6014 1.58719 11.6548 0.650733C11.6724 0.356398 11.4572 0.100638 11.1639 0.0664738C10.4168 -0.0200191 9.66323 -0.0225274 8.91403 0.0605922C8.62445 0.0925946 8.40943 0.342299 8.41903 0.632915C8.45146 1.56021 7.90206 2.41726 7.04967 2.76643C6.23223 3.10038 5.16897 2.85691 4.57416 2.20259C4.37756 1.98705 4.04881 1.96058 3.81951 2.13936C3.22029 2.60962 2.6753 3.14804 2.20184 3.73879C2.01735 3.96843 2.04459 4.30125 2.26143 4.49854C2.95761 5.12899 3.18206 6.13144 2.82061 6.99377C2.4755 7.81589 1.6219 8.34548 0.644793 8.34548C0.32771 8.33528 0.10205 8.54831 0.0670207 8.83667C-0.0208561 9.58769 -0.0218075 10.3533 0.0627825 11.1105C0.0943524 11.3928 0.431934 11.6025 0.718571 11.6025C1.58955 11.5803 2.42525 12.1192 2.77632 12.9726C3.12567 13.825 2.90079 14.8184 2.21697 15.4456C2.00308 15.6422 1.97574 15.9706 2.15634 16.1989C2.62072 16.7907 3.15421 17.3291 3.73804 17.7994C3.96724 17.984 4.30059 17.9581 4.49926 17.7391C5.09762 17.0775 6.16814 16.8326 6.99216 17.1785C7.85535 17.5397 8.39836 18.412 8.34534 19.3488C8.32795 19.6431 8.54367 19.8996 8.83592 19.933C9.21822 19.9777 9.60251 19.9999 9.98801 19.9999C10.3539 19.9999 10.7198 19.9799 11.0858 19.9392C11.3757 19.9072 11.5904 19.6572 11.5806 19.3665C11.5471 18.4396 12.0977 17.5825 12.9491 17.234C13.772 16.8979 14.8305 17.1439 15.4256 17.7972C15.6233 18.0124 15.95 18.0385 16.1803 17.8604C16.7785 17.3913 17.3224 16.8532 17.798 16.2609C17.9826 16.0317 17.9564 15.6984 17.7384 15.5008C17.0424 14.8708 16.8167 13.8679 17.1782 13.0064C17.5179 12.1954 18.3398 11.6508 19.2237 11.6508L19.3474 11.6541C19.6344 11.6774 19.8981 11.4564 19.9328 11.1636C20.0211 10.4119 20.022 9.64711 19.9371 8.8897ZM10 15.765C6.81597 15.765 4.23494 13.184 4.23494 10C4.23494 6.81603 6.81606 4.235 10 4.235C13.184 4.235 15.7651 6.81603 15.7651 10C15.7651 11.0807 15.4672 12.0916 14.9497 12.956L12.4253 10.4315C12.6081 10.0006 12.7046 9.53346 12.7045 9.05135C12.7045 8.10728 12.3368 7.21978 11.6692 6.55231C11.0017 5.88485 10.1142 5.51725 9.17031 5.51725C8.8553 5.51725 8.54176 5.55911 8.23843 5.64172C8.10558 5.67796 7.99694 5.78746 7.96157 5.92057C7.92541 6.05671 7.96615 6.19622 8.07254 6.30269C8.07254 6.30269 9.31881 7.55857 9.7358 7.97547C9.77948 8.01915 9.77939 8.12337 9.77325 8.16091L9.76936 8.18832C9.72732 8.64674 9.64628 9.197 9.57942 9.40848C9.57042 9.41739 9.56195 9.42491 9.55278 9.43408C9.54318 9.44368 9.53435 9.45294 9.5251 9.46245C9.31086 9.53121 8.75211 9.61321 8.28644 9.6549L8.28652 9.65239L8.26559 9.65767C8.26187 9.6581 8.25495 9.65862 8.24578 9.65862C8.19545 9.65862 8.12141 9.64452 8.05412 9.57731C7.62009 9.14329 6.42269 7.95445 6.42269 7.95445C6.31526 7.84737 6.20507 7.82488 6.13164 7.82488C5.96047 7.82488 5.8072 7.94857 5.75894 8.12596C5.42932 9.34577 5.77875 10.6579 6.6711 11.5503C7.33873 12.2179 8.22632 12.5854 9.17039 12.5854C9.6525 12.5854 10.1197 12.489 10.5505 12.3062L13.1023 14.858C12.2064 15.4313 11.1425 15.765 10 15.765Z" fill="#E4512A"/>
</g>
<defs>
<clipPath id="crs-gear-clip0_0_4">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>`
    )
  }, m = (e, n) => {
    var t;
    return ((t = e.properties) == null ? void 0 : t[n]) ?? "";
  }, z = (e) => m(e, "_promo_gift") === "true", hn = (e) => m(e, "_hidden_from_customer") === "true", T = (e) => e.handle === Z, V = (e) => {
    const n = ` ${e.product_title.toLowerCase()} `;
    return [...O].sort((s, r) => r.length - s.length).find((s) => n.includes(` ${s.toLowerCase()} `)) ?? O.find((s) => s.toLowerCase() === (e.product_type || "").trim().toLowerCase()) ?? "";
  }, R = (e) => m(e, "_main_chair_product") === "true" || m(e, "_chair_accessory") !== "true" && (!!V(e) || ln.includes((e.product_type || "").trim())), un = (e) => {
    var a;
    const n = [], t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), r = [], i = [];
    for (const c of e.items) {
      if (T(c)) continue;
      if (hn(c)) {
        i.push(c);
        continue;
      }
      if (z(c)) {
        r.push(c);
        continue;
      }
      const d = m(c, "_bundle_uuid"), l = d ? t.get(d) : void 0;
      if (l) {
        l.lines.push(c), s.set(c.key, l);
        continue;
      }
      const f = {
        id: d || c.key,
        main: c,
        accessories: [],
        lines: [c],
        gifts: [],
        hidden: [],
        isBundle: !1,
        isChair: !1,
        isGift: !1
      };
      d && t.set(d, f), s.set(c.key, f), n.push(f);
    }
    for (const c of n)
      c.main = c.lines.find(R) ?? c.lines[0], c.accessories = c.lines.filter((d) => d !== c.main), c.lines = [c.main, ...c.accessories], c.isBundle = c.accessories.length > 0, c.isChair = R(c.main);
    n.sort((c, d) => Number(d.isChair) - Number(c.isChair));
    for (const c of r) {
      const d = s.get(m(c, "_promo_parent_key"));
      if (d) {
        d.gifts.push(c);
        continue;
      }
      n.push({
        id: c.key,
        main: c,
        accessories: [],
        lines: [c],
        gifts: [],
        hidden: [],
        isBundle: !1,
        isChair: !1,
        isGift: !0
      });
    }
    for (const c of i)
      (a = n.find((d) => String(d.main.variant_id) === m(c, "_linked_to"))) == null || a.hidden.push(c);
    return n;
  }, D = (e) => e.flatMap((n) => n.isGift ? [n.main] : n.gifts), fn = (e) => {
    var n;
    return ((n = k.find((t) => t.handle === e.handle)) == null ? void 0 : n.title) ?? (m(e, "_promo_gift_product_title") || e.product_title);
  }, H = (e) => e.filter((n) => n.isChair).reduce((n, t) => n + t.main.quantity, 0), gn = (e) => e.lines.reduce((n, t) => n + t.final_line_price, 0), mn = (e) => e.lines.reduce((n, t) => n + t.original_line_price, 0), _ = (e) => {
    const n = e / 100, t = Number.isInteger(n) ? 0 : 2;
    return `₪${n.toLocaleString("en-US", { minimumFractionDigits: t, maximumFractionDigits: t })}`;
  }, S = (e, n) => {
    if (!e) return "";
    const t = e.startsWith("//") ? `https:${e}` : e;
    return t.includes("width=") ? t.replace(/width=\d+/, `width=${n}`) : `${t}${t.includes("?") ? "&" : "?"}width=${n}`;
  }, A = (e) => {
    const t = (e.accessories.map((s) => m(s, "_color")).find(Boolean) || e.main.product_title).toLowerCase();
    return dn.find((s) => t.includes(s.toLowerCase())) ?? "";
  }, G = (e) => pn[e] ?? e, N = (e) => {
    var t;
    const n = m(e, "Seat Depth") || ((t = e.product_title.match(/\b(\d{2})\s*cm\b/i)) == null ? void 0 : t[1]) || "";
    return n ? `${n.replace(/\s*cm$/i, "")} ${o.cm}` : "";
  }, B = (e) => m(e, "_bundle_label").split(" - ")[0].trim(), E = (e) => e.isChair ? V(e.main) || e.main.product_title : e.isBundle && B(e.main) ? B(e.main) : e.main.product_title, _n = (e) => {
    if (e.isChair)
      return [e.isBundle ? B(e.main) : "", G(A(e)), N(e.main)].filter(Boolean).join(" · ");
    const n = e.main.variant_title;
    return n && n !== "Default Title" ? n : "";
  }, Cn = (e, n) => {
    if (n === e.main && e.isChair) {
      const s = [G(A(e)), N(n)].filter(Boolean).join(" · ");
      return `${o.chairPrefix} ${E(e)} ${s}`.trim();
    }
    const t = k.find((s) => s.name === m(n, "_accessory_name"));
    return (t == null ? void 0 : t.title) ?? n.product_title;
  }, xn = (e) => {
    const n = e.filter((r) => r.isChair).map((r) => m(r.main, "זמן אספקה")).filter(Boolean), t = n.find((r) => /מוקדמת|pre-?order/i.test(r) || !/ימי עסקים/.test(r));
    return { text: t ?? n[0] ?? "", preorder: !!t };
  }, yn = (e, n, t) => {
    const s = e.options.findIndex((i) => /model/i.test(i.name)), r = e.options.findIndex((i) => /color/i.test(i.name));
    return s < 0 || r < 0 ? null : e.variants.find(
      (i) => i.available && i.options[r] === t && i.options[s].split("/").map((a) => a.trim().toLowerCase()).includes(n)
    ) ?? null;
  }, bn = (e, n) => {
    if (!e.isChair) return null;
    const t = V(e.main).toLowerCase(), s = A(e);
    if (!t || !s) return null;
    const r = /* @__PURE__ */ new Set([
      ...e.accessories.map((a) => m(a, "_accessory_name")),
      ...k.filter((a) => e.gifts.some((c) => c.handle === a.handle)).map((a) => a.name)
    ]), i = [];
    return k.forEach((a, c) => {
      const d = n[c];
      if (!d || r.has(a.name)) return;
      const l = yn(d, t, s);
      l && i.push({ accessory: a, product: d, variant: l, color: s });
    }), i.length ? { items: i, price: i.reduce((a, c) => a + c.variant.price, 0) * e.main.quantity } : null;
  }, h = (e) => e.replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]), I = (e) => e.split(" · ").map((n) => `<bdi>${h(n)}</bdi>`).join(" · "), wn = () => (
    /* HTML */
    `
  <dialog id="crsCart" class="crs-cart" dir="rtl" aria-label="${o.title}">
    <div class="crs-cart__overlay" data-crs-close></div>
    <div class="crs-cart__panel">
      <div class="crs-cart__content" data-crs-content></div>
    </div>
  </dialog>
`
  ), vn = () => (
    /* HTML */
    `
  <div id="crsCartPage" class="crs-page" dir="rtl">
    <div class="crs-page__content" data-crs-content></div>
  </div>
`
  ), kn = (e) => e.filter((n) => !n.isGift).length, F = (e) => {
    const n = kn(e), t = D(e).reduce((r, i) => r + i.quantity, 0), s = n === 1 ? o.oneProduct : o.products(n);
    return t ? `${s} + ${o.giftsCount(t)}` : s;
  }, U = (e) => e ? `<p class="crs-cart__error" role="alert">${e}</p>` : "", W = (e) => {
    const { groups: n } = e, t = En(e) + (e.assembly ? Bn(e.assembly) : ""), s = n.map((r) => r.isChair).lastIndexOf(!0);
    return (
      /* HTML */
      `
    <div class="crs-cart__items">
      ${n.map((r, i) => Vn(r, e) + (i === s ? t : "")).join("")}
      ${s < 0 ? t : ""}
    </div>
  `
    );
  }, Ln = (e) => {
    const { cart: n, groups: t } = e;
    return t.length ? (
      /* HTML */
      `
    ${X(F(t))} ${U(e.error)} ${J(t)}
    <div class="crs-cart__body" data-crs-body>${W(e)} ${Q(e)}</div>
    ${jn(n)}
  `
    ) : X("") + K();
  }, $n = (e) => {
    const { cart: n, groups: t } = e, s = (
      /* HTML */
      `
    <div class="crs-page__head">
      <p class="crs-page__title" role="heading" aria-level="1">${o.pageTitle}</p>
      ${t.length ? `<p class="crs-page__count">${F(t)}</p>` : ""}
    </div>
  `
    );
    return t.length ? (
      /* HTML */
      `
    ${s}
    <div class="crs-page__layout">
      <div class="crs-page__main">
        ${U(e.error)} ${J(t)}
        <div class="crs-page__panel">${W(e)} ${Q(e)}</div>
      </div>
      ${Zn(n)}
    </div>
  `
    ) : s + K(!0);
  }, X = (e) => (
    /* HTML */
    `
  <div class="crs-cart__header">
    <div class="crs-cart__heading">
      <p class="crs-cart__title">${o.title}</p>
      ${e ? `<p class="crs-cart__count">${h(e)}</p>` : ""}
    </div>
    <button type="button" class="crs-cart__close" data-crs-close aria-label="${o.close}">${p.close}</button>
  </div>
`
  ), J = (e) => {
    const { text: n, preorder: t } = xn(e);
    return n ? (
      /* HTML */
      `
    <div class="crs-cart__banner ${t ? "crs-cart__banner--preorder" : ""}">
      ${t ? p.truckPreorder : p.truck}
      <span>${h(n)}</span>
    </div>
  `
    ) : "";
  }, K = (e = !1) => (
    /* HTML */
    `
  <div class="crs-cart__empty">
    <p>${o.empty}</p>
    ${e ? `<a class="crs-btn crs-btn--outline" href="/">${o.continueShopping}</a>` : `<button type="button" class="crs-btn crs-btn--outline" data-crs-close>${o.continueShopping}</button>`}
  </div>
`
  ), Vn = (e, n) => {
    if (e.isGift) return "";
    const t = n.upgrades.get(e.id);
    return Mn(e, n.openGroups.has(e.id)) + (t ? An(e, t) : "");
  }, Mn = (e, n) => {
    const t = gn(e), s = mn(e), r = _n(e);
    return (
      /* HTML */
      `
    <div class="crs-card" data-crs-group="${h(e.id)}">
      <div class="crs-card__top">
        <a class="crs-card__media" href="${h(e.main.url)}">
          <img src="${S(e.main.image, 200)}" alt="${h(e.main.product_title)}" loading="lazy" />
        </a>
        <div class="crs-card__info">
          <p class="crs-card__name">${h(E(e))}</p>
          ${r ? `<p class="crs-card__subtitle">${I(r)}</p>` : ""}
          ${s > t ? `<span class="crs-badge">${o.saving(_(s - t))}</span>` : ""}
        </div>
        <div class="crs-card__price">
          <span class="crs-card__price-final">${_(t)}</span>
          ${s > t ? `<s class="crs-card__price-original">${_(s)}</s>` : ""}
        </div>
      </div>
      ${e.isBundle ? Hn(e, n) : ""}
      <div class="crs-card__actions">
        ${Sn(e)}
        <button type="button" class="crs-card__remove" data-crs-remove="${h(e.id)}">${o.remove}</button>
      </div>
    </div>
  `
    );
  }, Hn = (e, n) => (
    /* HTML */
    `
  <div class="crs-included ${n ? "is-open" : ""}">
    <button type="button" class="crs-included__toggle" data-crs-toggle="${h(e.id)}" aria-expanded="${n}">
      <span class="crs-included__chevron">${p.chevron}</span>
      <span>${o.included(e.lines.length)}</span>
    </button>
    <ul class="crs-included__list">
      ${e.lines.map(
      (t) => (
        /* HTML */
        `
            <li class="crs-included__row">
              <span class="crs-included__img"><img src="${S(t.image, 100)}" alt="" loading="lazy" /></span>
              <span class="crs-included__name">${I(Cn(e, t))}</span>
              <span class="crs-included__price">
                ${t === e.main ? _(t.final_line_price) : o.includedLabel}
              </span>
            </li>
          `
      )
    ).join("")}
    </ul>
  </div>
`
  ), Sn = (e) => (
    /* HTML */
    `
  <div class="crs-qty">
    <button type="button" class="crs-qty__btn" data-crs-qty="${h(e.id)}" data-delta="1" aria-label="+">
      ${p.plus}
    </button>
    <span class="crs-qty__value">${e.main.quantity}</span>
    <button type="button" class="crs-qty__btn" data-crs-qty="${h(e.id)}" data-delta="-1" aria-label="-">
      ${p.minus}
    </button>
  </div>
`
  ), An = (e, n) => (
    /* HTML */
    `
  <div class="crs-offer">
    <div class="crs-offer__text">
      <p class="crs-offer__title">${o.upgradeTitle}</p>
      <p class="crs-offer__desc">${n.items.map((t) => t.accessory.title).join(" + ")}</p>
      <p class="crs-offer__price">${o.upgradePrice(_(n.price))}</p>
    </div>
    <button type="button" class="crs-btn crs-btn--outline crs-btn--small" data-crs-upgrade="${h(e.id)}">
      ${p.plusOrange}
      <span>${o.upgradeButton}</span>
    </button>
  </div>
`
  ), Bn = ({ price: e, line: n }) => (
    /* HTML */
    `
  <div class="crs-offer crs-offer--assembly ${n ? "is-added" : ""}">
    <div class="crs-offer__main">
      <span class="crs-offer__icon">${p.gear}</span>
      <div class="crs-offer__text">
        <p class="crs-offer__title">${o.assemblyTitle}</p>
        <p class="crs-offer__desc">${o.assemblyDesc}</p>
        <p class="crs-offer__price">${_(e)}</p>
      </div>
    </div>
    ${n ? `<button type="button" class="crs-card__remove" data-crs-assembly="remove">${o.remove}</button>` : (
      /* HTML */
      `<button type="button" class="crs-btn crs-btn--outline crs-btn--small" data-crs-assembly="add">
          ${p.plusOrange}
          <span>${o.add}</span>
        </button>`
    )}
  </div>
`
  ), En = (e) => {
    const n = D(e.groups);
    if (!n.length) return "";
    const t = n.reduce((r, i) => r + i.quantity, 0), s = n.reduce((r, i) => r + i.original_line_price, 0);
    return (
      /* HTML */
      `
    <div class="crs-gifts ${e.giftsOpen ? "is-open" : ""}">
      <button type="button" class="crs-gifts__toggle" data-crs-gifts aria-expanded="${e.giftsOpen}">
        <span class="crs-offer__icon">${p.gift}</span>
        <span class="crs-gifts__text">
          <span class="crs-gifts__title">${o.giftsTitle(t)}</span>
          ${s ? `<span class="crs-gifts__value">${o.giftsValue(_(s))}</span>` : ""}
        </span>
        <span class="crs-gifts__chevron">${p.chevron}</span>
      </button>
      <ul class="crs-gifts__list">
        ${n.map(
        (r) => (
          /* HTML */
          `
              <li class="crs-gifts__row">
                <span class="crs-gifts__img">
                  ${r.image ? `<img src="${S(r.image, 100)}" alt="" loading="lazy" />` : p.shield}
                </span>
                <span class="crs-gifts__name">
                  ${h(fn(r))}${r.quantity > 1 ? ` <bdi>× ${r.quantity}</bdi>` : ""}
                </span>
                <span class="crs-gifts__price">
                  ${r.original_line_price ? `<s>${_(r.original_line_price)}</s>` : ""}
                  <b>${o.free}</b>
                </span>
              </li>
            `
        )
      ).join("")}
      </ul>
    </div>
  `
    );
  }, Q = (e) => {
    if (!e.recommendations.length) return "";
    const n = e.groups.find((s) => s.isChair), t = n ? E(n) : o.recsFallbackTitle;
    return (
      /* HTML */
      `
    <div class="crs-recs">
      <div class="crs-recs__head">
        <p class="crs-recs__title">${h(t)}</p>
        <div class="crs-recs__arrows" dir="ltr">
          <button type="button" class="crs-recs__arrow" data-crs-slide="next" aria-label="next">${p.arrow}</button>
          <button type="button" class="crs-recs__arrow crs-recs__arrow--prev" data-crs-slide="prev" aria-label="prev">
            ${p.arrow}
          </button>
        </div>
      </div>
      <div class="crs-recs__track" data-crs-track>${e.recommendations.map(Pn).join("")}</div>
    </div>
  `
    );
  }, Pn = (e) => (
    /* HTML */
    `
  <div class="crs-rec">
    <a class="crs-rec__media" href="${h(e.url)}"
      ><img src="${h(e.image)}" alt="${h(e.title)}" loading="lazy"
    /></a>
    <p class="crs-rec__title">${h(e.title)}</p>
    <p class="crs-rec__price">
      <span>${h(e.price)}</span>
      ${e.compare ? `<s>${h(e.compare)}</s>` : ""}
    </p>
    <button type="button" class="crs-btn crs-btn--outline crs-btn--small crs-rec__add" data-crs-rec-add="${e.index}">
      ${p.plusOrange}
      <span>${o.add}</span>
    </button>
  </div>
`
  ), Y = (e) => _(Math.round(e.total_price / q / 100) * 100), nn = (e) => (
    /* HTML */
    `
  <button type="button" class="crs-cart__checkout" data-crs-checkout>
    <span>${o.checkout}</span>
    <span class="crs-cart__checkout-sep"></span>
    <span>${_(e.total_price)}</span>
  </button>
  <div class="crs-cart__trust">
    <span>${o.trial}${p.trial}</span>
    <span>${o.warranty}${p.shield}</span>
  </div>
  <div class="crs-cart__payments" dir="ltr">${p.applePay}${p.visa}${p.master}${p.amex}${p.diners}</div>
`
  ), jn = (e) => {
    const n = e.original_total_price - e.total_price;
    return (
      /* HTML */
      `
    <div class="crs-cart__footer">
      <div class="crs-cart__summary">
        <span class="crs-cart__summary-label">${o.totalLabel}</span>
        <span class="crs-cart__summary-note"
          >${n > 0 ? o.saved(_(n)) : o.installments(Y(e))}</span
        >
      </div>
      ${nn(e)}
    </div>
  `
    );
  }, Zn = (e) => {
    const n = e.original_total_price - e.total_price;
    return (
      /* HTML */
      `
    <aside class="crs-summary">
      <p class="crs-summary__title">${o.summaryTitle}</p>
      <div class="crs-summary__rows">
        <div class="crs-summary__row">
          <span>${o.summaryProducts}</span><b>${_(e.original_total_price)}</b>
        </div>
        <div class="crs-summary__row"><span>${o.summaryShipping}</span><b>${o.free}</b></div>
        ${n > 0 ? `<div class="crs-summary__row crs-summary__row--saved"><b>${o.summarySaved}</b><b>${_(n)}</b></div>` : ""}
      </div>
      <div class="crs-summary__total">
        <div>
          <b>${o.summaryTotal}</b>
          <span>${o.vat}</span>
        </div>
        <div>
          <b>${_(e.total_price)}</b>
          <span dir="rtl">${o.perMonth(Y(e))}</span>
        </div>
      </div>
      ${nn(e)}
    </aside>
  `
    );
  };
  an({ name: "Newton Cart Update", dev: "YK" });
  const P = "crs-cart", L = "cart-drawer-component", b = /^\/cart\/?$/.test(location.pathname), j = 'main .shopify-section[id$="__cart-section"]', tn = b ? j : L, x = b ? "Cart page" : "Slide-in cart", en = { "X-Newton-Accessory-Add": "true" };
  class qn {
    constructor() {
      this.cart = null, this.groups = [], this.upgrades = /* @__PURE__ */ new Map(), this.recommendations = [], this.accessoryProducts = [], this.assemblyProduct = null, this.openGroups = /* @__PURE__ */ new Set(), this.giftsOpen = !0, this.isOpen = !1, this.busy = !1, this.error = "", this.notifying = !1, this.injectStyle(), this.mount(), this.hijackNativeDrawer(), this.listen(), this.loadAccessoryProducts(), this.loadAssemblyProduct();
    }
    // Same reason as ../fit_block: the dev server injects the bundle before the
    // parser has reached <head>/<body>.
    async injectStyle() {
      if (document.getElementById("crsCartStyle")) return;
      (await w("head")).insertAdjacentHTML("beforeend", `<style id="crsCartStyle">${cn}</style>`);
    }
    get dialog() {
      return this.root;
    }
    async mount() {
      var t;
      if (b) return this.mountPage();
      const n = await w("body");
      (t = document.getElementById("crsCart")) == null || t.remove(), n.insertAdjacentHTML("beforeend", wn()), this.root = document.getElementById("crsCart"), this.content = this.root.querySelector("[data-crs-content]"), this.root.addEventListener("cancel", (s) => {
        s.preventDefault(), this.close();
      }), this.bind();
    }
    // The native section is hidden by CSS from the first paint, so it never
    // flashes before ours is in place. An attribute, not a class: the theme
    // rewrites <html>'s className ("no-js" → "js").
    async mountPage() {
      var s;
      (await w("html")).setAttribute("data-crs-cart-page", "");
      const t = await w(j);
      (s = document.getElementById("crsCartPage")) == null || s.remove(), t.insertAdjacentHTML("beforebegin", vn()), this.root = document.getElementById("crsCartPage"), this.content = this.root.querySelector("[data-crs-content]"), this.bind(), this.refresh();
    }
    // Every way the theme opens its drawer — header cart icon (on:click="/open"),
    // product-form's CartAddEvent (auto-open), the cart recommendations' own
    // add flow, promo-engine's delayed open — ends in DialogComponent's
    // showDialog() on this one element. Shadowing it on the CartDrawerComponent
    // prototype swaps all of them over to our drawer at once, while the native
    // drawer keeps rendering (hidden) and keeps its own cart-items/summary logic,
    // which we still reuse for the checkout form and recommendations.
    async hijackNativeDrawer() {
      this.hijackNativeDialog(), await customElements.whenDefined(L);
      const n = customElements.get(L), t = this;
      n.prototype.showDialog = function() {
        t.notifying || t.open();
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
      const n = this, t = HTMLDialogElement.prototype, s = t.showModal, r = t.show, i = Object.getOwnPropertyDescriptor(t, "open"), a = (l) => l instanceof HTMLDialogElement && !!l.closest(L);
      t.showModal = function() {
        if (!a(this)) return s.call(this);
        n.notifying || n.open();
      }, t.show = function() {
        if (!a(this)) return r.call(this);
      }, Object.defineProperty(t, "open", {
        ...i,
        get() {
          return a(this) ? n.isOpen : i.get.call(this);
        },
        set(l) {
          a(this) && l || i.set.call(this, l);
        }
      });
      const c = Element.prototype.setAttribute, d = Element.prototype.toggleAttribute;
      Element.prototype.setAttribute = function(l, f) {
        if (!(l === "open" && a(this)))
          return c.call(this, l, f);
      }, Element.prototype.toggleAttribute = function(l, f) {
        return l === "open" && a(this) ? !1 : d.call(this, l, f);
      };
    }
    listen() {
      document.addEventListener("cart:update", (n) => {
        var s;
        const t = n.detail;
        ((s = t == null ? void 0 : t.data) == null ? void 0 : s.source) !== P && this.scheduleRefresh();
      }), document.addEventListener("promo:cart-reconciled", () => this.scheduleRefresh()), window.addEventListener("resize", () => this.isOpen && this.updateArrows(), { passive: !0 }), w(L).then((n) => {
        let t;
        new MutationObserver(() => {
          clearTimeout(t), t = window.setTimeout(() => {
            if (!this.cart) return;
            const s = this.readRecommendations();
            JSON.stringify(s) !== JSON.stringify(this.recommendations) && (this.recommendations = s, this.render());
          }, 150);
        }).observe(n, { childList: !0, subtree: !0 });
      }), b && w(j).then((n) => {
        new MutationObserver(() => this.scheduleRefresh()).observe(n, { childList: !0, subtree: !0 });
      });
    }
    bind() {
      on(this.root).on("click", (n) => {
        const t = n.target;
        if (t.closest("[data-crs-close]")) return this.close();
        const s = t.closest("[data-crs-toggle]");
        if (s) return this.toggleIncluded(s.dataset.crsToggle);
        if (t.closest("[data-crs-gifts]")) return this.toggleGifts();
        if (this.busy) return;
        const r = t.closest("[data-crs-qty]");
        if (r) return this.changeQuantity(r.dataset.crsQty, Number(r.dataset.delta));
        const i = t.closest("[data-crs-remove]");
        if (i) return this.removeGroup(i.dataset.crsRemove);
        const a = t.closest("[data-crs-upgrade]");
        if (a) return this.upgradeGroup(a.dataset.crsUpgrade);
        const c = t.closest("[data-crs-assembly]");
        if (c) return c.dataset.crsAssembly === "add" ? this.addAssembly() : this.removeAssembly();
        const d = t.closest("[data-crs-rec-add]");
        if (d) return this.addRecommendation(Number(d.dataset.crsRecAdd));
        const l = t.closest("[data-crs-slide]");
        if (l) return this.slide(l.dataset.crsSlide);
        if (t.closest("[data-crs-checkout]")) return this.checkout();
      });
    }
    // ─── Open / close ────────────────────────────────────────────────────────
    open() {
      var n;
      !this.root || b || (this.isOpen || (this.isOpen = !0, clearTimeout(this.closeTimer), this.dialog.open || this.dialog.showModal(), requestAnimationFrame(() => this.root.classList.add("is-open")), document.documentElement.classList.add("crs-cart-lock"), g("newton_cart_open", "Slide-in cart opened", "view", x), (n = this.root.querySelector(".crs-cart__close")) == null || n.focus({ preventScroll: !0 })), this.cart && this.render(), this.scheduleRefresh());
    }
    close() {
      !this.isOpen || b || (this.isOpen = !1, this.root.classList.remove("is-open"), this.closeTimer = window.setTimeout(() => this.dialog.close(), 300), document.documentElement.classList.remove("crs-cart-lock"), g("newton_cart_close", "Slide-in cart closed", "click", x));
    }
    // ─── Data ────────────────────────────────────────────────────────────────
    scheduleRefresh() {
      clearTimeout(this.refreshTimer), this.refreshTimer = window.setTimeout(() => this.refresh(), 100);
    }
    async refresh() {
      try {
        const n = await fetch("/cart.js", { cache: "no-store" }).then((t) => t.json());
        this.setCart(n);
      } catch (n) {
        M(`Newton Cart: failed to load cart — ${n}`, "error");
      }
    }
    setCart(n) {
      this.cart = n, this.groups = un(n), this.computeUpgrades(), this.recommendations = this.readRecommendations(), this.render(), this.syncAssembly();
    }
    async loadAccessoryProducts() {
      this.accessoryProducts = await Promise.all(
        k.map(
          (n) => fetch(`/products/${n.handle}.js`).then((t) => t.ok ? t.json() : null).catch(() => null)
        )
      ), this.cart && (this.computeUpgrades(), this.render());
    }
    async loadAssemblyProduct() {
      this.assemblyProduct = await fetch(`/products/${Z}.js`).then((n) => n.ok ? n.json() : null).catch(() => null), this.cart && this.render();
    }
    assemblyLine() {
      var n;
      return (n = this.cart) == null ? void 0 : n.items.find(T);
    }
    assemblyState() {
      var i;
      const n = H(this.groups), t = this.assemblyLine(), s = (i = this.assemblyProduct) == null ? void 0 : i.variants[0];
      return !n || !t && !(s != null && s.available) ? null : { price: t ? t.final_line_price / t.quantity : s.price, line: t };
    }
    computeUpgrades() {
      this.upgrades.clear();
      for (const n of this.groups) {
        const t = bn(n, this.accessoryProducts);
        t && this.upgrades.set(n.id, t);
      }
    }
    // Cards come from the native drawer's own (hidden) recommendations section
    // — the same products, variant and prices the theme already picks for this
    // cart, so adding goes through its own form/handler too (see
    // addRecommendation()).
    nativeRecommendationCards() {
      return Array.from(
        document.querySelectorAll(`${tn} [data-cart-recommendation-card]`)
      );
    }
    readRecommendations() {
      return this.nativeRecommendationCards().map((n, t) => {
        var c, d, l, f, u, C;
        const s = n.querySelector("[data-recommendation-select]"), r = s == null ? void 0 : s.options[s.selectedIndex], i = (r == null ? void 0 : r.dataset) ?? {}, a = (c = n.querySelector(".cart-recommendations__image")) == null ? void 0 : c.getAttribute("src");
        return {
          index: t,
          title: i.hebrewModel || i.productTitle || ((l = (d = n.querySelector("[data-recommendation-title]")) == null ? void 0 : d.textContent) == null ? void 0 : l.trim()) || "",
          price: i.price || ((u = (f = n.querySelector("[data-recommendation-price]")) == null ? void 0 : f.textContent) == null ? void 0 : u.trim()) || "",
          compare: i.compare || "",
          image: i.image || a || "",
          url: i.productUrl || ((C = n.querySelector("[data-recommendation-link]")) == null ? void 0 : C.href) || "#"
        };
      });
    }
    // ─── Render ──────────────────────────────────────────────────────────────
    render() {
      if (!this.content || !this.cart) return;
      const n = this.content.querySelector("[data-crs-body]"), t = this.content.querySelector("[data-crs-track]"), s = (n == null ? void 0 : n.scrollTop) ?? 0, r = (t == null ? void 0 : t.scrollLeft) ?? 0, i = {
        cart: this.cart,
        groups: this.groups,
        upgrades: this.upgrades,
        recommendations: this.recommendations,
        openGroups: this.openGroups,
        error: this.error,
        assembly: this.assemblyState(),
        giftsOpen: this.giftsOpen
      };
      this.content.innerHTML = b ? $n(i) : Ln(i);
      const a = this.content.querySelector("[data-crs-body]"), c = this.content.querySelector("[data-crs-track]");
      a && (a.scrollTop = s), c && (c.scrollLeft = r, c.addEventListener("scroll", () => this.updateArrows(), { passive: !0 }), this.updateArrows());
    }
    // The theme only ever returns a couple of recommendations — arrows are
    // hidden when they all fit, and each one is disabled at its end.
    updateArrows() {
      const n = this.root.querySelector("[data-crs-track]"), t = n == null ? void 0 : n.closest(".crs-recs");
      if (!n || !t) return;
      const s = n.scrollWidth - n.clientWidth, r = Math.abs(n.scrollLeft);
      t.classList.toggle("is-static", s <= 1), t.querySelector('[data-crs-slide="prev"]').disabled = r <= 1, t.querySelector('[data-crs-slide="next"]').disabled = r >= s - 1;
    }
    setBusy(n) {
      this.busy = n, this.root.classList.toggle("is-busy", n);
    }
    // ─── Cart mutations ──────────────────────────────────────────────────────
    // window.fetch is looked up per call on purpose: promo-engine wraps it to
    // reconcile its gift lines after cart changes, and our requests have to go
    // through that wrapper just like the theme's own.
    async post(n, t, s = {}) {
      const r = await window.fetch(n, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json", ...s },
        body: JSON.stringify(t)
      }), i = await r.json().catch(() => null);
      if (!r.ok) throw new Error((i == null ? void 0 : i.description) || (i == null ? void 0 : i.message) || `${n} ${r.status}`);
      return i;
    }
    async mutate(n) {
      this.setBusy(!0), this.error = "";
      try {
        await n();
      } catch (t) {
        this.error = o.error, M(`Newton Cart: ${t}`, "error"), g("newton_cart_error", String(t), "error", x);
      }
      await this.refresh(), this.notifyTheme(), this.setBusy(!1), this.syncAssembly();
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
            sourceId: P,
            data: { source: P, itemCount: this.cart.item_count }
          }
        })
      ), this.notifying = !1);
    }
    findGroup(n) {
      return this.groups.find((t) => t.id === n);
    }
    // A bundle's lines always move together — same rule as the theme's own
    // syncBundleAccessories() (accessory quantity follows the chair's).
    changeQuantity(n, t) {
      const s = this.findGroup(n);
      if (!s) return;
      const r = Math.max(0, s.main.quantity + t);
      if (r === 0) return this.removeGroup(n);
      g(
        "newton_cart_quantity",
        `Quantity ${t > 0 ? "increased" : "decreased"}: ${s.main.product_title}`,
        "click",
        x
      );
      const i = Object.fromEntries([...s.lines, ...s.hidden].map((a) => [a.key, r]));
      this.mutate(() => this.post("/cart/update.js", { updates: i }));
    }
    // Removes the whole card: chair + its accessories + promo gifts attached to
    // it — what the theme's removeDependentCartItems() does when the chair goes.
    removeGroup(n) {
      const t = this.findGroup(n);
      if (!t) return;
      g("newton_cart_remove", `Removed: ${t.main.product_title}`, "click", x);
      const s = Object.fromEntries([...t.lines, ...t.gifts, ...t.hidden].map((r) => [r.key, 0]));
      this.mutate(() => this.post("/cart/update.js", { updates: s }));
    }
    toggleIncluded(n) {
      var s, r;
      const t = !this.openGroups.has(n);
      t ? this.openGroups.add(n) : this.openGroups.delete(n), (s = this.root.querySelector(`[data-crs-group="${CSS.escape(n)}"] .crs-included`)) == null || s.classList.toggle("is-open", t), (r = this.root.querySelector(`[data-crs-toggle="${CSS.escape(n)}"]`)) == null || r.setAttribute("aria-expanded", String(t)), g(
        "newton_cart_bundle_contents",
        t ? "Bundle contents expanded" : "Bundle contents collapsed",
        "click",
        x
      );
    }
    toggleGifts() {
      var n, t;
      this.giftsOpen = !this.giftsOpen, (n = this.root.querySelector(".crs-gifts")) == null || n.classList.toggle("is-open", this.giftsOpen), (t = this.root.querySelector("[data-crs-gifts]")) == null || t.setAttribute("aria-expanded", String(this.giftsOpen)), g("newton_cart_gifts", this.giftsOpen ? "Gifts expanded" : "Gifts collapsed", "click", x);
    }
    // Adds the missing accessories exactly as the PDP's bundle picker would
    // (same line properties, same `_bundle_uuid`), then relabels the chair and
    // the accessories already in the cart to Pro — so the theme's own bundle
    // logic, the order and checkout all see one Pro bundle.
    upgradeGroup(n) {
      const t = this.findGroup(n), s = this.upgrades.get(n);
      !t || !s || (g("newton_cart_upgrade", `Upgrade to Pro Bundle: ${t.main.product_title}`, "click", x), this.mutate(async () => {
        const r = t.main, i = r.properties ?? {}, a = i._bundle_uuid || `b-${Date.now()}-${Math.floor(Math.random() * 1e5)}`, c = i["Seat Depth"] ? { "עומק מושב": i["עומק מושב"] ?? "", "Seat Depth": i["Seat Depth"] } : {};
        await this.post("/cart/add.js", {
          items: s.items.map(({ accessory: u, product: C, variant: y, color: sn }) => {
            var rn;
            return {
              id: y.id,
              quantity: r.quantity,
              properties: {
                _chair_accessory: "true",
                _accessory_name: u.name,
                _linked_to: String(r.variant_id),
                _color: sn,
                _matched_variant_title: y.title,
                _matched_variant_display_title: [V(r), sn].filter(Boolean).join(" / "),
                _accessory_image: ((rn = y.featured_image) == null ? void 0 : rn.src) || C.featured_image || "",
                _bundle_uuid: a,
                _bundle_label: $,
                ...c,
                Bundle: $,
                _newton_handle: u.newtonHandle
              }
            };
          })
        }, en);
        const d = { _bundle_uuid: a, _bundle_label: $, Bundle: $ };
        let l = null;
        for (const u of [r, ...t.accessories]) {
          const C = u === r ? { _main_chair_product: "true" } : {};
          l = await this.post("/cart/change.js", {
            id: u.key,
            quantity: u.quantity,
            properties: { ...u.properties ?? {}, ...d, ...C }
          });
        }
        const f = l == null ? void 0 : l.items.find(
          (u) => {
            var C, y;
            return u.variant_id === r.variant_id && ((C = u.properties) == null ? void 0 : C._bundle_uuid) === a && ((y = u.properties) == null ? void 0 : y._main_chair_product) === "true";
          }
        );
        if (!(!l || !f || f.key === r.key))
          for (const u of l.items.filter((C) => {
            var y;
            return z(C) && ((y = C.properties) == null ? void 0 : y._promo_parent_key) === r.key;
          }))
            await this.post("/cart/change.js", {
              id: u.key,
              quantity: u.quantity,
              properties: { ...u.properties ?? {}, _promo_parent_key: f.key }
            });
      }));
    }
    addAssembly() {
      var t;
      const n = (t = this.assemblyProduct) == null ? void 0 : t.variants[0];
      !n || !H(this.groups) || (g("newton_cart_assembly_add", "Assembly added", "click", x), this.mutate(() => this.post("/cart/add.js", { items: [{ id: n.id, quantity: 1 }] }, en)));
    }
    removeAssembly() {
      const n = this.assemblyLine();
      n && (g("newton_cart_assembly_remove", "Assembly removed", "click", x), this.mutate(() => this.post("/cart/update.js", { updates: { [n.key]: 0 } })));
    }
    // One assembly per order: kept at quantity 1 however it got changed (here,
    // /cart page, anywhere else), and removed with the last chair. Runs after every cart read; the mutate()
    // it starts re-reads the cart, which then matches and stops here.
    syncAssembly() {
      const n = this.assemblyLine();
      if (!n || this.busy || this.error) return;
      const t = H(this.groups) ? 1 : 0;
      n.quantity !== t && this.mutate(() => this.post("/cart/update.js", { updates: { [n.key]: t } }));
    }
    // Adds what the native recommendation card would, the same way its own
    // handler (newton-cart-recommendations.js) builds the request — including
    // the two-line "Rest & Relax Set" bundles. Not by submitting that form:
    // promo-shopping-il-cart.js re-submits every /cart/add form after its own
    // sync, and the recommendations handler then adds the product a second time.
    addRecommendation(n) {
      var d;
      const t = this.nativeRecommendationCards()[n], s = t == null ? void 0 : t.querySelector("form[data-newton-cart-recommendation-form]"), r = this.recommendations[n];
      if (!t || !s || !r) return;
      const i = t.querySelector("[data-recommendation-select]"), a = ((d = i == null ? void 0 : i.options[i.selectedIndex]) == null ? void 0 : d.dataset) ?? {};
      g("newton_cart_recommendation_add", `Recommendation added: ${r.title}`, "click", x);
      let c;
      if (a.bundle === "true") {
        const l = `cart-rec-${Date.now()}-${Math.floor(Math.random() * 1e5)}`, f = a.bundleLabel || "Rest & Relax Set", u = { _bundle_uuid: l, _bundle_label: f, Bundle: f };
        c = [a.bundleV1Id, a.bundleV2Id].map((C) => ({ id: Number(C), quantity: 1, properties: u }));
      } else {
        const l = a.variantId || String(new FormData(s).get("id") || "");
        c = [{ id: Number(l), quantity: 1 }];
      }
      this.mutate(() => this.post("/cart/add.js", { items: c }, { "X-Newton-Cart-Recommendation": "true" }));
    }
    slide(n) {
      const t = this.root.querySelector("[data-crs-track]"), s = t == null ? void 0 : t.querySelector(".crs-rec");
      if (!t || !s) return;
      const r = s.offsetWidth + 12;
      t.scrollBy({ left: n === "next" ? -r : r, behavior: "smooth" }), g("newton_cart_recommendations_slide", `Recommendations ${n}`, "click", x);
    }
    // Clicks the native checkout button (name="checkout" inside the theme's
    // cart form) rather than navigating to /checkout ourselves — keeps any
    // app/promo hooks bound to that form working.
    checkout() {
      g("newton_cart_checkout", "Checkout clicked", "click", x);
      const n = document.querySelector(`${tn} button[name="checkout"]`);
      n ? n.click() : window.location.href = "/checkout";
    }
  }
  new qn();
})();
//# sourceMappingURL=index.js.map
