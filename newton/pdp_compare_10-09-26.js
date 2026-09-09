(function() {
  "use strict";
  const y = `.chair-model-product-switcher .cmps__button.pdpc-button {
  height: 100%;
  min-height: 108px;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start !important;
  gap: 0;
  padding: 14px 16px;
  text-align: right;
  direction: rtl;
}
.chair-model-product-switcher .cmps__button-label {
  font-weight: 700 !important;
  font-size: 14px;
  color: #111827;
}

.pdpc-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  font-family: var(--font-body-family, inherit);
}

.pdpc-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.pdpc-card__price {
  font-weight: 400;
  font-size: 14px;
  color: #111827;
}

.pdpc-badge {
  align-self: flex-start;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 100px;
  background: #eeeeee;
  color: #374151;
  white-space: nowrap;
}
.pdpc-badge--manual {
  background: rgba(255, 68, 68, 0.12);
  color: #f44;
}

.pdpc-card__desc {
  font-size: 11px;
  line-height: 1.45;
  color: #6b7280;
  font-weight: 400;
  text-align: right;
}

.pdpc-compare-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 14px;
  padding: 4px 0;
  background: none;
  border: 0;
  cursor: pointer;
  font-family: var(--font-body-family, inherit);
  font-size: 14px;
  font-weight: 600;
  color: #ec6a1f;
}
.pdpc-compare-link svg {
  flex: 0 0 18px;
  color: #ec6a1f;
}
.pdpc-compare-link:hover {
  text-decoration: underline;
}

.pdpc-popup {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body-family, inherit);
}
.pdpc-popup[hidden] {
  display: none;
}

.pdpc-popup__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(17, 24, 39, 0.5);
}

.pdpc-popup__panel {
  position: relative;
  background: #fff;
  width: min(1120px, 100vw - 32px);
  max-height: min(760px, 100vh - 48px);
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}

.pdpc-popup__x {
  position: absolute;
  top: 16px;
  left: 16px;
  border: 0;
  background: none;
  padding: 6px;
  cursor: pointer;
  color: #111827;
  line-height: 0;
  z-index: 1;
}

.pdpc-popup__head {
  padding: 32px 32px 12px;
  text-align: right;
}
.pdpc-popup__head h2 {
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 700;
  color: #111827;
}
.pdpc-popup__head p {
  margin: 0;
  font-size: 14px;
  color: #6b7280;
}

.pdpc-popup__body {
  overflow: auto;
  padding: 8px 32px 32px;
}

body.pdpc-lock {
  overflow: hidden;
}

.pdpc-page-section {
  font-family: var(--font-body-family, inherit);
  padding: 56px 0;
}

.pdpc-page-section__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.pdpc-page-section__head {
  text-align: right;
  margin-bottom: 28px;
}
.pdpc-page-section__head h2 {
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 700;
  color: #111827;
}
.pdpc-page-section__head p {
  margin: 0;
  font-size: 14px;
  color: #6b7280;
}

@media screen and (max-width: 749px) {
  .pdpc-page-section {
    padding: 32px 0;
  }
  .pdpc-page-section__inner {
    padding: 0 16px;
  }
  .pdpc-page-section__head h2 {
    font-size: 22px;
  }
}
.pdpc-table {
  width: 100%;
  text-align: right;
}

.pdpc-table__row {
  display: flex;
  align-items: stretch;
}

.pdpc-table__rowlabel {
  flex: 0 0 180px;
  padding: 16px 8px;
  font-size: 14px;
  color: #111827;
  border-bottom: 1px solid #e5e7eb;
}
.pdpc-table__rowlabel--head {
  align-self: flex-end;
  color: #6b7280;
  font-weight: 500;
  border-bottom: 2px solid #e5e7eb;
}

.pdpc-table__cells {
  display: contents;
}

.pdpc-table__col,
.pdpc-table__cell {
  flex: 1 1 0;
  min-width: 150px;
  padding: 16px 8px;
  text-align: center;
  border-bottom: 1px solid #e5e7eb;
}

.pdpc-table__row--head .pdpc-table__col {
  border-bottom: 2px solid #e5e7eb;
}

.pdpc-table__col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  position: relative;
}

.pdpc-table__col--current,
.pdpc-table__cell--current {
  background: #f1f3f6;
  border-bottom-color: transparent;
}

.pdpc-table__row--head .pdpc-table__col--current {
  border-radius: 12px 12px 0 0;
}

.pdpc-table__row--last .pdpc-table__cell--current {
  border-radius: 0 0 12px 12px;
}

.pdpc-table__row--last .pdpc-table__cell,
.pdpc-table__row--last .pdpc-table__rowlabel {
  border-bottom: 0;
}

.pdpc-viewing {
  position: absolute;
  top: 8px;
  background: #898e98;
  color: #fff;
  font-size: 12px;
  line-height: 12px;
  font-weight: 700;
  padding: 4px 6px;
  border-radius: 2px;
}

.pdpc-table__img {
  width: 96px;
  height: 96px;
  -o-object-fit: contain;
     object-fit: contain;
  margin-top: 20px;
}

.pdpc-table__name {
  font-size: 16px;
  font-weight: 700;
  color: #111827;
}

.pdpc-table__from {
  font-size: 13px;
  color: #6b7280;
}

.pdpc-table__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  padding: 10px 24px;
  min-width: 120px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
}
.pdpc-table__cta--filled {
  background: #ff6a1a;
  color: #fff;
}
.pdpc-table__cta--outline {
  background: none;
  border: 2px solid #ff6a1a;
  color: #111111;
}
.pdpc-table__cta--outline:hover {
  background: rgba(255, 106, 26, 0.08);
}

.pdpc-table__cell {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #111827;
}
.pdpc-table__cell--text {
  font-weight: 500;
}

.pdpc-check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.pdpc-check--yes {
  background: #ff6a1a;
  color: #fff;
}
.pdpc-check--no {
  background: #ccc;
  color: #8f96a3;
}

.pdpc-flag {
  color: #ff6a1a;
  margin-inline-start: 2px;
  cursor: help;
}

.pdpc-table__shared {
  margin-top: 16px;
  background: #eeeeee;
  border-radius: 8px;
  padding: 20px;
  text-align: right;
}
.pdpc-table__shared-title {
  font-size: 15px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 10px;
}
.pdpc-table__shared p {
  margin: 0;
  font-size: 13px;
  line-height: 1.7;
  color: #6b7280;
}

.pdpc-table__note {
  margin-top: 10px;
  text-align: right;
  font-size: 12px;
  line-height: 1.6;
  color: #8f96a3;
}

@media screen and (max-width: 749px) {
  .pdpc-popup__panel {
    width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
  }
  .pdpc-popup__head {
    padding: 56px 20px 12px;
  }
  .pdpc-popup__head h2 {
    font-size: 20px;
  }
  .pdpc-popup__body {
    padding: 8px 0 24px;
  }
  .pdpc-table__scroll {
    overflow-x: auto;
    scrollbar-width: thin;
    container-type: inline-size;
  }
  .pdpc-table__row {
    flex-direction: column;
    border-bottom: 0;
    width: -moz-max-content;
    width: max-content;
    min-width: 100%;
  }
  .pdpc-table__row--head .pdpc-table__rowlabel--head {
    display: none;
  }
  .pdpc-table__rowlabel {
    position: sticky;
    right: 0;
    width: 100cqw;
    text-align: center;
    flex: none;
    background: #eeeeee;
    padding: 10px 20px;
    margin: 0;
    z-index: 2;
  }
  .pdpc-table__cells {
    display: flex;
    padding: 0 20px;
  }
  .pdpc-table__col,
  .pdpc-table__cell {
    flex: 0 0 150px;
    border-bottom: 1px solid #e5e7eb;
    border-radius: 0;
  }
  .pdpc-table__row--last .pdpc-table__cell {
    border-bottom: 0;
  }
  .pdpc-table__col--current,
  .pdpc-table__cell--current {
    background: #f1f3f6;
  }
  .pdpc-table__row--head .pdpc-table__col--current,
  .pdpc-table__row--last .pdpc-table__cell--current {
    border-radius: 0;
  }
  .pdpc-table__shared {
    margin: 16px 20px 0;
  }
}/*# sourceMappingURL=style.css.map */`, d = (p, e, n, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: p,
      event_desc: e,
      event_type: n,
      event_loc: t
    }), m(`Event: ${p} | ${e} | ${n} | ${t}`, "success");
  }, h = (p) => new Promise((e) => {
    const n = document.querySelector(p);
    n && e(n);
    const t = new MutationObserver(() => {
      const o = document.querySelector(p);
      o && (e(o), t.disconnect());
    });
    t.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), k = ({ name: p, dev: e }) => {
    const n = p.toLowerCase().replace(/\s/g, "_");
    d(`${n}_started`, `Experiment ${p} started`, "other", n), console.log(
      `%c EXP: ${p} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class l {
    constructor(e) {
      this.elements = e instanceof l ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, n, t) {
      return typeof n == "function" && (t = n, n = ""), this.elements.forEach((o) => {
        o.addEventListener(e, function(c) {
          var a;
          if (n !== "") {
            let r = (a = c.target) == null ? void 0 : a.closest(n);
            r && (t == null || t.call(r, c));
          } else
            t == null || t.call(o, c);
        });
      }), this;
    }
    addClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.add(e);
      }), this;
    }
    removeClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.remove(e);
      }), this;
    }
    toggleClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.toggle(e);
      }), this;
    }
    each(e) {
      for (let n of this.elements)
        e(new l(n), this.elements.indexOf(n));
      return this;
    }
    style(e, n) {
      const t = e.split("-").map((o, c) => c === 0 ? o : o.charAt(0).toUpperCase() + o.slice(1)).join("");
      return this.elements.forEach(function(o) {
        o.style[t] = n;
      }), this;
    }
    find(e) {
      const n = this.elements.map((t) => Array.from(t.querySelectorAll(e)));
      return new l(n.flat());
    }
    attr(e, n) {
      return n ? (this.elements.forEach(function(t) {
        t.setAttribute(e, n);
      }), this) : this.elements[0].getAttribute(e);
    }
    text(e) {
      return e ? (this.elements.forEach(function(n) {
        n.textContent = e;
      }), this) : this.elements[0].textContent || "";
    }
    html(e) {
      return e ? (this.elements.forEach(function(n) {
        n.innerHTML = e;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const b = (p) => new l(p), _ = (p, e, n, t, o = 1e3, c = 0.5) => {
    let a, r;
    if (a = new IntersectionObserver(
      function(s) {
        s[0].isIntersecting === !0 ? r = setTimeout(() => {
          d(
            e,
            s[0].target.dataset.visible || t || "",
            "view",
            n
          ), a.disconnect();
        }, o) : (m("Element is not fully visible", "warn"), clearTimeout(r));
      },
      { threshold: [c] }
    ), typeof p == "string") {
      const s = document.querySelector(p);
      s && a.observe(s);
    } else
      a.observe(p);
  }, m = (p, e = "info") => {
    let n;
    switch (e) {
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
    console.log(`%c>>> ${p}`, `${n} font-size: 16px; font-weight: 600`);
  }, g = ["omni", "omni-gen", "se", "pro"], f = {
    omni: {
      name: "Omni",
      price: "₪4,690",
      badge: "התאמה חשמלית",
      badgeVariant: "electric",
      description: "עיסוי גב ממונע OmniStretch · סוללת 2200mAh · 4 עמדות הטיה",
      tableName: "OMNI",
      startingPrice: "₪4,690",
      // Each model's own first PDP gallery image (og:image on its default
      // color variant), not the generic mega-menu header art used before.
      image: "https://newtons.co.il/cdn/shop/files/basic-bundle-libernovo-omni-midnight-black-45cm-chair1.webp?width=600"
    },
    "omni-gen": {
      name: "Omni Gen",
      price: "₪4,780",
      badge: "התאמה חשמלית",
      badgeVariant: "electric",
      description: "עיסוי גב ממונע OmniStretch · סוללת 2200mAh · 5 עמדות הטיה",
      tableName: "Omni Gen",
      startingPrice: "₪4,780",
      image: "https://newtons.co.il/cdn/shop/files/basic-bundle-libernovo-omni-gen-glacier-45cm-chair1.webp?width=600"
    },
    se: {
      name: "Omni SE",
      price: "₪3,348",
      badge: "התאמה ידנית",
      badgeVariant: "manual",
      description: "כוונון גב ידני · 5 עמדות הטיה",
      tableName: "Omni SE",
      startingPrice: "₪3,348",
      image: "https://newtons.co.il/cdn/shop/files/basic-bundle-libernovo-omni-se-obsidian-45cm-chair1.webp?width=600"
    },
    pro: {
      name: "Omni Pro",
      // NOTE: the two Figma frames disagree on this price (₪5,449 in the label
      // card, node 51:1672, vs ₪5,860 in the compare table, nodes 51:1939 /
      // 157:2234). Reproduced literally per frame — flag to confirm with the
      // design/product team before this ships.
      price: "₪5,449",
      badge: "אוורור אקטיבי חשמלי",
      badgeVariant: "electric",
      description: "אוורור Active Airflow · סוללת 3000mAh · בסיס אלומיניום · 5 עמדות הטיה",
      tableName: "OMNI Pro",
      startingPrice: "₪5,860",
      image: "https://newtons.co.il/cdn/shop/files/basic-bundle-libernovo-omni-pro-glacier-45cm-chair1.webp?width=600"
    }
  }, x = [
    {
      type: "check",
      key: "backrest",
      label: "משענת גב Bionic FlexFit",
      values: { omni: !0, "omni-gen": !0, se: !0, pro: !0 }
    },
    {
      type: "check",
      key: "dynamic-support",
      label: "מערכת תמיכה דינמית",
      values: { omni: !0, "omni-gen": !0, se: !0, pro: !0 }
    },
    {
      type: "text",
      key: "tilt",
      label: "עמדות הטיה",
      values: { omni: "4 עמדות הטיה", "omni-gen": "5 עמדות הטיה", se: "4 עמדות הטיה", pro: "5 עמדות הטיה" }
    },
    {
      type: "check",
      key: "motorized-stretch",
      label: "מתיחה מותנית ממונעת (OmniStretch)",
      values: { omni: !0, "omni-gen": !0, se: !1, pro: !0 }
    },
    {
      type: "check",
      key: "active-airflow",
      label: "אוורור אקטיבי",
      values: { omni: !1, "omni-gen": !1, se: !1, pro: !0 }
    },
    {
      type: "text",
      key: "fabric",
      label: "בד",
      values: {
        omni: "בד נמתח רך למגע",
        "omni-gen": "בד נמתח רך למגע",
        se: "בד נמתח רך למגע",
        pro: "Gabriel Atlantic"
      },
      unconfirmed: { "omni-gen": !0 }
    },
    {
      type: "text",
      key: "base",
      label: "בסיס",
      values: { omni: "ניילון", "omni-gen": "ניילון", se: "ניילון", pro: "בסיס אלומיניום מחוזק" },
      unconfirmed: { "omni-gen": !0 }
    }
  ], C = "משענת גב Bionic FlexFit · מערכת תמיכה דינמית · מושב Multi-Density · משענת ראש 34×19 ס״מ · גובה מושב 43–53 ס״מ · מתאים לגובה 153–186 ס״מ ומשקל עד 136 ק״ג · תקנים UL962, FCC SDoC, BIFMA X5.1, CA Prop 65, RoHS, UN38.3 · אחריות 5 שנים על השלדה, 2 שנים על המערכת החשמלית", i = {
    compareAll: "השוואה בין כל הדגמים",
    popupTitle: "השוואת דגמי Omni",
    popupSubtitle: "רק השורות הבאות משתנות בין הדגמים.",
    // Reused verbatim from the native on-page section this replaces
    // (.comparison-table-section, present on the SE/Pro templates) rather than
    // inventing new copy — this heading was already live, approved copy.
    pageTitle: "מצאו את ה-Omni שמתאים לכם",
    pageSubtitle: "לכל סביבת עבודה יש צרכים שונים. בחרו את הדגם שמתאים לאופן שבו אתם עובדים, נעים ונחים.",
    viewing: "הדגם הנבחר",
    startingFrom: "החל מ־",
    chooseOptions: "בחר אפשרויות",
    viewProduct: "לצפייה במוצר",
    identicalTitle: "משותף לכל הדגמים",
    featuresLabel: "מפרט",
    // The Figma file's own review note ("Backrest fabric and base material for
    // Omni Gen are not stated in any current source on the site — to confirm
    // with the product team before this ships."), surfaced in the popup per
    // request instead of being kept as a dev-only comment.
    omniGenNote: "פרטי הבד והבסיס עבור Omni Gen אינם מופיעים כרגע במקור מידע רשמי באתר — יש לאשר מול צוות המוצר לפני עלייה לאוויר.",
    unconfirmed: "הערך טרם אושר מול צוות המוצר",
    close: "סגירה"
  }, u = {
    compare: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M16.5 11.4375H16.1132L14.0418 6.85078L15.1772 7.27656C15.3167 7.32803 15.4708 7.32223 15.606 7.26041C15.7411 7.19859 15.8464 7.08579 15.8986 6.94665C15.9509 6.8075 15.9459 6.65333 15.8849 6.51781C15.8238 6.3823 15.7116 6.27645 15.5728 6.22341L10.3125 4.25076V2.62498C10.3125 2.4758 10.2532 2.33272 10.1477 2.22724C10.0423 2.12175 9.89918 2.06248 9.75 2.06248C9.60082 2.06248 9.45774 2.12175 9.35225 2.22724C9.24676 2.33272 9.1875 2.4758 9.1875 2.62498V3.82888L3.57277 1.72341C3.43334 1.67193 3.2792 1.67774 3.14403 1.73956C3.00886 1.80137 2.90365 1.91418 2.85139 2.05332C2.79913 2.19246 2.80406 2.34664 2.86512 2.48215C2.92617 2.61767 3.03838 2.72351 3.17723 2.77656L4.2594 3.18238L1.8693 8.43748H1.5C1.35082 8.43748 1.20774 8.49675 1.10225 8.60224C0.996763 8.70772 0.9375 8.8508 0.9375 8.99998C0.9375 10.0443 1.35234 11.0458 2.09077 11.7842C2.82919 12.5226 3.83071 12.9375 4.875 12.9375C5.91929 12.9375 6.92081 12.5226 7.65923 11.7842C8.39766 11.0458 8.8125 10.0443 8.8125 8.99998C8.8125 8.8508 8.75324 8.70772 8.64775 8.60224C8.54226 8.49675 8.39918 8.43748 8.25 8.43748H7.86322L5.74073 3.73791L12.473 6.26248L10.1193 11.4375H9.75C9.60082 11.4375 9.45774 11.4967 9.35225 11.6022C9.24676 11.7077 9.1875 11.8508 9.1875 12C9.1875 13.0443 9.60234 14.0458 10.3408 14.7842C11.0792 15.5226 12.0807 15.9375 13.125 15.9375C14.1693 15.9375 15.1708 15.5226 15.9092 14.7842C16.6477 14.0458 17.0625 13.0443 17.0625 12C17.0625 11.8508 17.0032 11.7077 16.8977 11.6022C16.7923 11.4967 16.6492 11.4375 16.5 11.4375ZM4.875 11.8125C4.22691 11.8116 3.59893 11.5874 3.0969 11.1775C2.59486 10.7677 2.24946 10.1973 2.1189 9.56248H7.6314C7.50083 10.1973 7.15539 10.7678 6.65329 11.1776C6.15119 11.5875 5.52314 11.8117 4.875 11.8125ZM3.105 8.43748L4.8735 4.54978L6.6285 8.43748H3.105ZM13.1235 7.54978L14.8785 11.4375H11.355L13.1235 7.54978ZM13.125 14.8125C12.4769 14.8116 11.8489 14.5874 11.3469 14.1775C10.8449 13.7677 10.4995 13.1973 10.3689 12.5625H15.8814C15.7508 13.1973 15.4054 13.7678 14.9033 14.1776C14.4012 14.5875 13.7731 14.8117 13.125 14.8125Z"
      fill="#EC6A1F"
    />
  </svg>`
    ),
    check: (
      /* HTML */
      `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.5 4.5L6 12L2.5 8.5"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`
    ),
    cross: (
      /* HTML */
      `<svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3L13 13M13 3L3 13" stroke="#fff" stroke-width="1.8" stroke-linecap="round" />
  </svg>`
    ),
    close: (
      /* HTML */
      `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
  </svg>`
    )
  }, L = (p) => {
    const e = f[p];
    return (
      /* HTML */
      `
    <span class="pdpc-card">
      <span class="pdpc-card__top">
        <span class="pdpc-card__price">${e.price}</span>
      </span>
      <span class="pdpc-badge pdpc-badge--${e.badgeVariant}">${e.badge}</span>
      <span class="pdpc-card__desc">${e.description}</span>
    </span>
  `
    );
  }, $ = () => (
    /* HTML */
    `
  <button type="button" class="pdpc-compare-link" data-pdpc-open>
    ${u.compare}
    <span>${i.compareAll}</span>
  </button>
`
  ), w = (p, e = !0) => {
    const n = [p, ...g.filter((t) => t !== p)];
    return (
      /* HTML */
      `
    <div class="pdpc-table" data-pdpc-table dir="rtl">
      <div class="pdpc-table__scroll">
        <div class="pdpc-table__row pdpc-table__row--head">
          <div class="pdpc-table__rowlabel pdpc-table__rowlabel--head">${i.featuresLabel}</div>
          <div class="pdpc-table__cells">${n.map((t) => E(t, t === p)).join("")}</div>
        </div>
        ${x.map((t, o) => P(t, n, o === x.length - 1)).join("")}
      </div>
      ${e ? (
        /* HTML */
        `
            <div class="pdpc-table__shared">
              <div class="pdpc-table__shared-title">${i.identicalTitle}</div>
              <p>${C}</p>
            </div>
            <p class="pdpc-table__note">${i.omniGenNote}</p>
          `
      ) : ""}
    </div>
  `
    );
  }, E = (p, e) => {
    const n = f[p];
    return (
      /* HTML */
      `
    <div class="pdpc-table__col ${e ? "pdpc-table__col--current" : ""}">
      ${e ? `<span class="pdpc-viewing">${i.viewing}</span>` : ""}
      <img class="pdpc-table__img" src="${n.image}" alt="${n.name}" loading="lazy" width="150" height="150" />
      <div class="pdpc-table__name">${n.tableName}</div>
      <div class="pdpc-table__from">${i.startingFrom}${n.startingPrice}</div>
      ${e ? `<span class="pdpc-table__cta pdpc-table__cta--filled">${i.chooseOptions}</span>` : (
        /* HTML */
        `<a href="#" class="pdpc-table__cta pdpc-table__cta--outline" data-pdpc-nav="${p}">
            ${i.viewProduct}
          </a>`
      )}
    </div>
  `
    );
  }, P = (p, e, n) => (
    /* HTML */
    `
  <div class="pdpc-table__row ${n ? "pdpc-table__row--last" : ""}">
    <div class="pdpc-table__rowlabel">${p.label}</div>
    <div class="pdpc-table__cells">${e.map((t, o) => A(p, t, o === 0)).join("")}</div>
  </div>
`
  ), A = (p, e, n) => {
    var c;
    const t = n ? "pdpc-table__cell--current" : "";
    if (p.type === "check") {
      const a = p.values[e];
      return (
        /* HTML */
        `<div class="pdpc-table__cell ${t}">
      <span class="pdpc-check ${a ? "pdpc-check--yes" : "pdpc-check--no"}">${a ? u.check : u.cross}</span>
    </div>`
      );
    }
    const o = (c = p.unconfirmed) == null ? void 0 : c[e];
    return (
      /* HTML */
      `<div class="pdpc-table__cell pdpc-table__cell--text ${t}">
    ${p.values[e]}${o ? `<span class="pdpc-flag" title="${i.unconfirmed}">*</span>` : ""}
  </div>`
    );
  }, S = (p) => (
    /* HTML */
    `
  <section class="pdpc-page-section" dir="rtl">
    <div class="pdpc-page-section__inner">
      <div class="pdpc-page-section__head">
        <h2>${i.pageTitle}</h2>
        <p>${i.pageSubtitle}</p>
      </div>
      ${w(p, !1)}
    </div>
  </section>
`
  ), T = (p) => (
    /* HTML */
    `
  <div class="pdpc-popup" id="pdpcPopup" data-pdpc-popup dir="rtl" hidden>
    <div class="pdpc-popup__backdrop" data-pdpc-close></div>
    <div class="pdpc-popup__panel" role="dialog" aria-modal="true" aria-label="${i.popupTitle}">
      <button type="button" class="pdpc-popup__x" data-pdpc-close aria-label="${i.close}">${u.close}</button>
      <div class="pdpc-popup__head">
        <h2>${i.popupTitle}</h2>
        <p>${i.popupSubtitle}</p>
      </div>
      <div class="pdpc-popup__body" data-pdpc-body>${w(p)}</div>
    </div>
  </div>
`
  );
  k({ name: "Newton PDP Compare", dev: "AI" });
  const v = ".chair-model-product-switcher", z = ".product-details-metafield-section", M = ".section-comparison-table";
  class O {
    constructor() {
      this.hrefsByKey = {}, this.injectStyle(), this.init(), window.addEventListener("libernovo:product-page-swapped", () => this.init()), document.addEventListener("keydown", (e) => {
        if (e.key !== "Escape") return;
        const n = document.getElementById("pdpcPopup");
        n && !n.hidden && this.closePopup();
      });
    }
    injectStyle() {
      document.getElementById("pdpcStyle") || document.head.insertAdjacentHTML("beforeend", `<style id="pdpcStyle">${y}</style>`);
    }
    async init() {
      var o;
      const e = await h(v);
      this.switcher = e, this.readHrefs();
      const n = (o = e.querySelector(".cmps__item .cmps__button.is-active")) == null ? void 0 : o.closest(
        ".cmps__item"
      ), t = n == null ? void 0 : n.getAttribute("data-model-key");
      if (!t || !g.includes(t)) {
        m("Newton PDP Compare: could not resolve current model key, aborting", "warn");
        return;
      }
      this.currentKey = t, this.enhanceLabels(), this.mountCompareLink(), this.mountPopup(), this.mountPageTable(), _(
        v,
        "exp_newton_pdp_compare_labels",
        "PDP model selector labels",
        "PDP model selector labels visibility"
      );
    }
    // Reads the real, native switch URLs straight from the switcher's own
    // markup instead of hardcoding per-model product URLs (those already vary
    // per current color/bundle context, and the site computes them for us).
    readHrefs() {
      this.switcher.querySelectorAll(".cmps__item[data-model-key]").forEach((e) => {
        const n = e.getAttribute("data-model-key"), t = e.querySelector("[data-product-switch-url]"), o = t == null ? void 0 : t.getAttribute("data-product-switch-url");
        n && o && (this.hrefsByKey[n] = o);
      });
    }
    enhanceLabels() {
      this.switcher.querySelectorAll(".cmps__item[data-model-key]").forEach((e) => {
        const n = e.getAttribute("data-model-key"), t = e.querySelector(".cmps__button");
        if (!n || !t || t.querySelector(".pdpc-card")) return;
        const o = t.querySelector(".cmps__button-label");
        t.insertAdjacentHTML("beforeend", L(n)), t.classList.add("pdpc-button");
        const c = t.querySelector(".pdpc-card__top");
        o && c && c.prepend(o);
      });
    }
    mountCompareLink() {
      var n;
      const e = this.switcher.querySelector(".cmps__items");
      !e || (n = e.parentElement) != null && n.querySelector("[data-pdpc-open]") || (e.insertAdjacentHTML("afterend", $()), b(this.switcher).on("click", "[data-pdpc-open]", () => this.openPopup()));
    }
    mountPopup() {
      var e;
      (e = document.getElementById("pdpcPopup")) == null || e.remove(), document.body.insertAdjacentHTML("beforeend", T(this.currentKey)), this.bindPopup();
    }
    bindPopup() {
      const e = document.getElementById("pdpcPopup");
      e && b(e).on("click", (n) => {
        const t = n.target;
        if (t.closest("[data-pdpc-close]")) {
          this.closePopup();
          return;
        }
        const o = t.closest("[data-pdpc-nav]");
        o && (n.preventDefault(), this.goToModel(o.getAttribute("data-pdpc-nav"), "popup"));
      });
    }
    // Replaces the native 3-column .section-comparison-table (present only on
    // the SE/Pro templates) with our 4-column version in the exact same spot,
    // or — where that native section doesn't exist at all (Omni/Omni Gen
    // templates) — inserts ours right before the one section confirmed on all
    // four product templates, .product-details-metafield-section.
    //
    // Waits for the anchor (like the switcher in init()) instead of a direct
    // querySelector — it sits further down the page than the switcher, so at
    // the moment init() runs it isn't reliably in the DOM yet.
    async mountPageTable() {
      var o;
      const e = await h(z);
      (o = document.getElementById("pdpcPageTable")) == null || o.remove();
      const n = document.querySelector(M);
      n && (n.style.display = "none");
      const t = document.createElement("div");
      t.id = "pdpcPageTable", t.innerHTML = S(this.currentKey), e.insertAdjacentElement("beforebegin", t), b(t).on("click", "[data-pdpc-nav]", (c) => {
        var r;
        c.preventDefault();
        const a = (r = c.target.closest("[data-pdpc-nav]")) == null ? void 0 : r.getAttribute("data-pdpc-nav");
        this.goToModel(a, "page_table");
      }), _(
        "#pdpcPageTable",
        "exp_newton_pdp_compare_page_table",
        "PDP standalone compare table",
        "PDP standalone compare table visibility"
      );
    }
    openPopup() {
      const e = document.getElementById("pdpcPopup");
      e && (e.hidden = !1, document.body.classList.add("pdpc-lock"), d("newton_pdp_compare_popup_open", "Compare popup opened", "view", "PDP model selector"));
    }
    closePopup() {
      const e = document.getElementById("pdpcPopup");
      e && (e.hidden = !0, document.body.classList.remove("pdpc-lock"));
    }
    // Reuses the site's own delegated ajax-swap handler (bound once, globally,
    // by the switcher's script) by clicking a real [data-product-switch-url]
    // element instead of re-implementing the fetch/DOM-swap logic here.
    goToModel(e, n) {
      if (!e) return;
      const t = this.hrefsByKey[e];
      if (d("newton_pdp_compare_select", `Selected: ${e}`, "click", `PDP compare ${n}`), !t) return;
      const o = this.switcher.querySelector(
        `.cmps__item[data-model-key="${e}"] [data-product-switch-url]`
      );
      this.closePopup(), o ? o.click() : window.location.href = t;
    }
  }
  new O();
})();
//# sourceMappingURL=index.js.map
