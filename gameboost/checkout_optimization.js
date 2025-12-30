(function() {
  "use strict";
  const b = (o, n, e, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: n,
      event_type: e,
      event_loc: t
    }), v(`Event: ${o} | ${n} | ${e} | ${t}`, "success");
  }, c = (o) => new Promise((n) => {
    const e = document.querySelector(o);
    e && n(e);
    const t = new MutationObserver(() => {
      const i = document.querySelector(o);
      i && (n(i), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), y = ({ name: o, dev: n }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, f = (o) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", o, "variant_1"));
    }, 1e3);
  }, v = (o, n = "info") => {
    let e;
    switch (n) {
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
    console.log(`%c>>> ${o}`, `${e} font-size: 16px; font-weight: 600`);
  }, w = `section[aria-labelledby='section-one-heading'] {
  grid-column: 2 / 3;
  grid-row: 1 / 1;
}

section[aria-labelledby='section-two-heading'] {
  grid-column: 1 / 2;
  grid-row: 1 / 1;
}

@media screen and (max-width: 1024px) {
  section[aria-labelledby='section-one-heading'] {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  section[aria-labelledby='section-two-heading'] {
    grid-column: 1 / 2;
    grid-row: 1 / 1;
    padding-top: 0.75rem;
    padding-bottom: 1.5rem;
  }
}
.crs-checkout-button:not([disabled])::after {
  content: attr(data-price);
}

.crs-checkout-button i {
  margin: 0;
}
.crs-checkout-button i::before {
  content: '·';
}

.crs-left-header ~ h2:not(.sr-only) {
  margin-top: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .crs-left-header ~ h2:not(.sr-only) {
    display: block;
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 2rem;
  }
  .crs-left-header ~ h2:not(.sr-only) + dl {
    display: none;
  }
}
.crs-right-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3:has(+ [role='radiogroup']) {
  display: none;
}

.crs-right-header h3 {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.crs-right-header > * {
  flex: 1;
}

@media (max-width: 1024px) {
  .crs-right-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.12rem;
  }

  .crs-right-header h3 {
    margin: 0 !important;
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 2rem;
  }
}

.crs-right-header > div {
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.125rem;
}

.crs-right-header + div {
  margin-top: 1.5rem;
}

.crs-left-header > div > a + div,
div:has(> a[href*='trustpilot']) {
  display: none;
}
.crs-product-container {
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .crs-product-container {
    display: grid;
    grid-template-columns: 6.375rem auto;
    gap: 0 1rem;
    padding-bottom: 1.12rem;
  }
}
.crs-product-container > img {
  width: 8.5rem;
  height: 8.5rem;
}
@media (max-width: 1024px) {
  .crs-product-container > img {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    width: 6.375rem;
    height: 6.375rem;
  }
}
.crs-product-container > div {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1024px) {
  .crs-product-container > div {
    display: contents;
  }

  .crs-product-container > div *:not(.crs-product-benefits) {
    grid-column: 2 / 3;
  }
}

.crs-product-container > div > div:has(h3) + div.gap-2 {
  order: -1;
  margin-top: 0 !important;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem;
}

.crs-product-container > div > div:has(h3) + div.gap-2 i {
  display: none;
}

.crs-product-container > div > div:has(h3) {
  gap: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.75rem;
}

@media (max-width: 1024px) {
  .crs-product-container > div > div:has(h3) {
    gap: 0.62rem;
  }
}

.crs-product-container > div > div:has(h3) p {
  transform: translateY(-0.8lh);
}

@media (max-width: 1024px) {
  .crs-product-container > div > div:has(h3) p {
    transform: translateY(-1.2lh);
  }
}

.crs-product-benefits {
  margin-top: 0.75rem !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1024px) {
  .crs-product-benefits {
    margin-top: 1.5rem !important;
    grid-column: 1 / 3;
  }
}

.crs-product-benefits:has(> div:only-child) {
  justify-content: flex-start;
}

.crs-product-benefits > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.crs-product-benefits:has(> div:only-child) > div {
  flex-direction: row;
}

.crs-product-benefits:has(> div:only-child) > div > div {
  text-align: left;
}

.crs-product-benefits:has(> div:only-child) > div > div span br {
  display: none;
}

.crs-product-benefits > div + div::before {
  content: '';
  width: 1px;
  height: 2rem;
  background-color: #d4d4d8;
  margin: 0 1.5rem;
}
.crs-product-benefit-with-tooltip {
  text-align: center;
}
.crs-product-benefit-with-tooltip i {
  margin-left: 0.5ch;
}
.crs-product-benefits > div span {
  text-align: center;
  text-wrap: balance;
}

.crs-product-benefits-divider {
  margin-inline: 2.5rem;
  width: 1px;
  height: 70%;
  background: hsl(var(--border));
}

ul:has(.crs-product-container) + div.space-y-0 > .bg-secondary {
  border-radius: 1111px;
}

ul:has(.crs-product-container) + div.space-y-0 > .bg-secondary-light {
  background: transparent;
  border: none;
}

@media (min-width: 1025px) {
  section[aria-labelledby='section-two-heading'] dl {
    border-top: none;
  }
}

@media (max-width: 1025px) {
  section[aria-labelledby='section-two-heading'] dl {
    margin-top: 1.12rem;
    padding-top: 1.12rem;
  }
}
section[aria-labelledby='section-two-heading'] dl > div:not(:first-child) {
  margin-top: 0.81rem !important;
}

section[aria-labelledby='section-two-heading']
  dl
  div:has(> [alt='Coins'])::before {
  content: 'Cashback: ';
  color: #eab308;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
}

section[aria-labelledby='section-two-heading']
  dl
  div:has(> [alt='Coins'])
  span {
  position: relative;
  color: #eab308;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
}
section[aria-labelledby='section-two-heading']
  dl
  div:has(> [alt='Coins'])
  span::before {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  width: 1ch;
  height: 100%;
  background: hsl(var(--background));
}

@media (max-width: 1024px) {
  section[aria-labelledby='section-two-heading']
    dl
    div:has(> [alt='Coins'])
    span::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 1ch;
    height: 100%;
    background: hsl(var(--card));
  }
}

@media (max-width: 1024px) {
  section[aria-labelledby='section-one-heading'] > div div:has(.fa-lock) {
    margin-bottom: 3.5rem;
  }
}
`;
  class l {
    constructor() {
      this.container = null, this.init();
    }
    async init() {
      this.addStyles(), await this.getCheckoutContainer(), this.changeHeaderPosition(), this.totalSummaryObserver(), this.changeCheckoutButtonPosition(), this.changeWarrantyTextPosition(), this.changeProductLayout(), this.handleTooltips();
    }
    async getCheckoutContainer() {
      this.container = await c(
        "#app .grid:has([aria-labelledby])"
      );
    }
    totalSummaryObserver() {
      if (!this.container) return;
      const n = this.container.querySelector(
        "[aria-labelledby='section-two-heading'] > div > dl > div:last-child"
      ), e = n == null ? void 0 : n.querySelector(
        "dd"
      ), t = async () => {
        if (e) {
          const a = await c(
            ".crs-checkout-button:not([disabled])"
          );
          if (!a) return;
          const s = e.textContent || "";
          a.dataset.price = s.trim();
        }
      };
      t();
      const i = new MutationObserver(() => {
        e && t();
      });
      e && i.observe(e, {
        childList: !0,
        subtree: !0
      });
    }
    changeCheckoutButtonPosition() {
      if (!this.container) return;
      const n = this.container.querySelector(
        "[aria-labelledby='section-two-heading'] > div > button"
      ), e = n == null ? void 0 : n.nextElementSibling, t = this.container.querySelector(
        "[aria-labelledby='section-one-heading'] > div"
      );
      !n || !t || (n.classList.add("crs-checkout-button"), t.appendChild(n), t.appendChild(e));
    }
    changeHeaderPosition() {
      if (!this.container) return;
      const n = this.container.querySelector(
        "[aria-labelledby='section-one-heading'] > div >  div > div:first-child"
      ), e = this.container.querySelector(
        "[aria-labelledby='section-two-heading'] > div"
      );
      console.log("Header:", n, e), n && (n.classList.add("crs-left-header"), e == null || e.prepend(n));
    }
    changeWarrantyTextPosition() {
      if (!this.container) return;
      const n = this.container.querySelector(
        '[aria-labelledby="section-one-heading"] div:has(> .fa-shield-halved)'
      ), e = this.container.querySelector(
        '[aria-labelledby="section-one-heading"] h3'
      );
      if (!n || !e) return;
      e.insertAdjacentHTML(
        "afterend",
        /* HTML */
        '<div class="crs-right-header"></div>'
      ), e.textContent = "Pay with";
      const i = this.container.querySelector(
        ".crs-right-header"
      );
      n.classList.remove("sm:hidden"), i.append(n), i.prepend(e);
    }
    handleTooltips() {
      if (!this.container) return;
      this.container.querySelectorAll(
        "[aria-labelledby='section-two-heading'] .fa-circle-question"
      ).forEach((e) => {
        if (!e.closest("dl")) return;
        const t = e == null ? void 0 : e._tippy;
        if (e.addEventListener("click", (i) => {
          t == null || t.setProps({
            placement: "right",
            appendTo: () => document.body,
            popperOptions: {
              modifiers: [
                {
                  name: "flip",
                  options: {
                    fallbackPlacements: ["right", "top", "bottom", "left"],
                    padding: 8,
                    altBoundary: !0,
                    rootBoundary: "viewport"
                  }
                },
                {
                  name: "preventOverflow",
                  options: {
                    boundary: "viewport",
                    altBoundary: !0,
                    tether: !1,
                    padding: 8
                  }
                }
              ]
            }
          });
        }), t && e.closest("dt")) {
          const i = e.closest("dt");
          i.addEventListener("mouseenter", (a) => {
            t.show();
          }), i.addEventListener("mouseleave", () => {
            t.hide();
          });
        }
      });
    }
    changeProductLayout() {
      var t;
      if (!this.container) return;
      const n = this.container.querySelector(
        "[aria-labelledby='section-two-heading'] ul li"
      );
      if (!n) return;
      n.classList.add("crs-product-container");
      const e = n.querySelector("div");
      if (e) {
        const i = e.querySelectorAll(".gap-1\\.5");
        if (i) {
          e.insertAdjacentHTML(
            "beforeend",
            /* HTML */
            `<div
          class="crs-product-benefits"
        ></div>`
          );
          const s = e.querySelector(
            ".crs-product-benefits"
          ), p = document.createElement("hr");
          p.className = "crs-product-benefits-divider", s && ((t = i[0].textContent) != null && t.includes("Instant delivery") && (i[0].querySelector("span").textContent = "Instant delivery"), s.append(i[0]), i != null && i[1] && s.append(p, i[1])), i.forEach((m) => {
            var g;
            const u = m.querySelector(".fa-circle-question"), r = m.querySelector("span");
            if (u && r) {
              const d = document.createElement("div");
              d.className = "crs-product-benefit-with-tooltip", (g = r.parentElement) == null || g.insertBefore(d, r), d.appendChild(r), d.appendChild(u);
            }
            r != null && r.textContent.includes("14-days") && (r.innerHTML = r.innerHTML.replace(
              "14-days",
              "14-days<br>"
            ));
          });
        }
      }
    }
    addStyles() {
      if (document.getElementById("crs-layout-changes-styles")) return;
      const n = document.createElement("style");
      n.id = "crs-layout-changes-styles", n.textContent = w, document.head.appendChild(n);
    }
  }
  const x = `/* More payment methods button container */
.pm-more-button-container {
  display: none;
  width: 100%;
  margin-top: 0.5rem;
}

/* More payment methods button */
.pm-more-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0 1.5rem;

  background: transparent;
  color: inherit;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pm-more-button:focus {
  outline: none;
  border-color: rgba(59, 130, 246, 0.5);
}

/* Button icon */
.pm-more-button-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.2s ease;
}

/* Rotate icon when expanded */
.pm-more-button-container.pm-expanded .pm-more-button-icon {
  transform: rotate(180deg);
}

@media (min-width: 1025px) {
  /* Hide payment methods beyond the first 3 by default */
  #headlessui-radiogroup-v-2 > div:nth-child(n + 5),
  [role='radiogroup'] > div:nth-child(n + 5) {
    display: none;
  }

  /* Show all payment methods when expanded */
  #headlessui-radiogroup-v-2.pm-expanded > div,
  [role='radiogroup'].pm-expanded > div {
    display: block !important;
  }

  .pm-more-button-container {
    display: block;
  }
  .pm-more-button-container.pm-expanded {
    display: none;
  }
}
`;
  class h {
    constructor() {
      this.expanded = !1, this.init();
    }
    init() {
      this.addStyles(), this.addMoreButton();
    }
    addStyles() {
      if (document.getElementById("crs-payment-methods-styles")) return;
      const n = document.createElement("style");
      n.id = "crs-payment-methods-styles", n.textContent = x, document.head.appendChild(n);
    }
    addMoreButton() {
      var i;
      const n = document.querySelector(
        '#headlessui-radiogroup-v-2, [role="radiogroup"]'
      );
      if (!n) return;
      const e = document.createElement("div");
      e.className = "pm-more-button-container", e.innerHTML = /* HTML */
      `
      <button type="button" class="pm-more-button">
        <span class="pm-more-button-text">More payment methods</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
        >
          <path
            d="M7.78125 13.7188C7.98958 13.9063 8.22917 14 8.5 14C8.77083 14 9.01042 13.9063 9.21875 13.7188L14.2188 8.71875C14.4063 8.51042 14.5 8.27083 14.5 8C14.5 7.72917 14.4063 7.48958 14.2188 7.28125C14.0104 7.09375 13.7708 7 13.5 7C13.2292 7 12.9896 7.09375 12.7813 7.28125L9.5 10.5938L9.5 1C9.5 0.708334 9.40625 0.46875 9.21875 0.28125C9.03125 0.0937503 8.79167 2.75017e-07 8.5 2.62268e-07C8.20833 2.49519e-07 7.96875 0.0937502 7.78125 0.28125C7.59375 0.46875 7.5 0.708334 7.5 1L7.5 10.5938L4.21875 7.28125C4.01042 7.09375 3.77083 7 3.5 7C3.22917 7 2.98958 7.09375 2.78125 7.28125C2.59375 7.48958 2.5 7.72917 2.5 8C2.5 8.27083 2.59375 8.51042 2.78125 8.71875L7.78125 13.7188Z"
            fill="white"
          />
        </svg>
      </button>
    `, (i = n.parentElement) == null || i.insertBefore(
        e,
        n.nextSibling
      ), this.expandIfSelectedIsHidden(n, e);
      const t = e.querySelector(".pm-more-button");
      t == null || t.addEventListener("click", () => {
        this.togglePaymentMethods(n, e), b("exp_payment_more", "More payment methods", "click", "Checkout");
      });
    }
    expandIfSelectedIsHidden(n, e) {
      Array.from(n.querySelectorAll(":scope > div")).findIndex(
        (a) => a.querySelector("label .bg-radio-hover")
      ) >= 3 && this.setExpandedState(!0, n, e);
    }
    togglePaymentMethods(n, e) {
      this.setExpandedState(!this.expanded, n, e);
    }
    setExpandedState(n, e, t) {
      if (this.expanded = n, this.expanded) {
        e.classList.add("pm-expanded"), t.classList.add("pm-expanded");
        const i = t.querySelector(".pm-more-button-text");
        i && (i.textContent = "Show less payment methods");
      } else {
        e.classList.remove("pm-expanded"), t.classList.remove("pm-expanded");
        const i = t.querySelector(".pm-more-button-text");
        i && (i.textContent = "More payment methods");
      }
    }
  }
  const C = "";
  y({ name: "2nd iteration Optimized checkout flow", dev: "OS" }), f("exp_checkout");
  class S {
    constructor() {
      this.init();
    }
    init() {
      new l(), new h(), this.handlePageChange(() => {
        new l(), new h();
      }), this.addStyles();
    }
    handlePageChange(n) {
      let e = location.pathname;
      new MutationObserver(() => {
        location.pathname !== e && (e = location.pathname, location.pathname.includes("checkout") && n());
      }).observe(document.body, { childList: !0, subtree: !0 });
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = C, document.head.appendChild(n);
    }
  }
  window.__crsTestInitialized || (window.__crsTestInitialized = !0, new S());
})();
