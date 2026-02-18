!(function () {
  'use strict';
  const startLog = ({ name, dev }) => {
    console.log(
      `%c EXP: ${name} (DEV: ${dev})`,
      `background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`,
    );
  };
  startLog({ name: '2nd iteration Optimized checkout flow', dev: 'OS' });

  const clarityInterval = (name) => {
    let int = setInterval(function () {
      if (typeof window.clarity == 'function') {
        clearInterval(int);
        window.clarity('set', name, 'variant_1');
      }
    }, 1000);
  };
  clarityInterval('exp_checkout');

  const n = (n) =>
    new Promise((e) => {
      const t = document.querySelector(n);
      t && e(t);
      const i = new MutationObserver(() => {
        const t = document.querySelector(n);
        t && (e(t), i.disconnect());
      });
      i.observe(document.documentElement, { childList: !0, subtree: !0 });
    });
  class e {
    constructor() {
      ((this.container = null), this.init());
    }
    async init() {
      (this.addStyles(),
        await this.getCheckoutContainer(),
        this.changeHeaderPosition(),
        this.totalSummaryObserver(),
        this.changeCheckoutButtonPosition(),
        this.changeWarrantyTextPosition(),
        this.changeProductLayout(),
        this.handleTooltips());
    }
    async getCheckoutContainer() {
      this.container = await n('#app .grid:has([aria-labelledby])');
    }
    totalSummaryObserver() {
      if (!this.container) return;
      const e = this.container.querySelector(
          "[aria-labelledby='section-two-heading'] > div > dl > div:last-child",
        ),
        t = null == e ? void 0 : e.querySelector('dd'),
        i = async () => {
          if (t) {
            const e = await n('.crs-checkout-button:not([disabled])');
            if (!e) return;
            const i = t.textContent || '';
            e.dataset.price = i.trim();
          }
        };
      i();
      const o = new MutationObserver(() => {
        t && i();
      });
      t && o.observe(t, { childList: !0, subtree: !0 });
    }
    changeCheckoutButtonPosition() {
      if (!this.container) return;
      const n = this.container.querySelector(
          "[aria-labelledby='section-two-heading'] > div > button",
        ),
        e = null == n ? void 0 : n.nextElementSibling,
        t = this.container.querySelector(
          "[aria-labelledby='section-one-heading'] > div",
        );
      n &&
        t &&
        (n.classList.add('crs-checkout-button'),
        t.appendChild(n),
        t.appendChild(e));
    }
    changeHeaderPosition() {
      if (!this.container) return;
      const n = this.container.querySelector(
          "[aria-labelledby='section-one-heading'] > div >  div > div:first-child",
        ),
        e = this.container.querySelector(
          "[aria-labelledby='section-two-heading'] > div",
        );
      n && (n.classList.add('crs-left-header'), null == e || e.prepend(n));
    }
    changeWarrantyTextPosition() {
      var n;
      if (!this.container) return;
      const e = this.container.querySelector(
          '[aria-labelledby="section-one-heading"] div:has(> .fa-shield-halved)',
        ),
        t = this.container.querySelector(
          '[aria-labelledby="section-one-heading"] h3',
        );
      if (!e || !t) return;
      (null ==
        (n = document.querySelector(
          'section[aria-labelledby="section-one-heading"] > div > div',
        )) ||
        n.insertAdjacentHTML(
          'afterbegin',
          '<div class="crs-right-header"></div>',
        ),
        (t.textContent = 'Pay with'));
      const i = this.container.querySelector('.crs-right-header');
      (e.classList.remove('sm:hidden'), i.append(e), i.prepend(t));
    }
    handleTooltips() {
      this.container &&
        this.container
          .querySelectorAll(
            "[aria-labelledby='section-two-heading'] .fa-circle-question",
          )
          .forEach((n) => {
            if (!n.closest('dl')) return;
            const e = null == n ? void 0 : n._tippy;
            if (
              (n.addEventListener('click', (n) => {
                null == e ||
                  e.setProps({
                    placement: 'right',
                    appendTo: () => document.body,
                    popperOptions: {
                      modifiers: [
                        {
                          name: 'flip',
                          options: {
                            fallbackPlacements: [
                              'right',
                              'top',
                              'bottom',
                              'left',
                            ],
                            padding: 8,
                            altBoundary: !0,
                            rootBoundary: 'viewport',
                          },
                        },
                        {
                          name: 'preventOverflow',
                          options: {
                            boundary: 'viewport',
                            altBoundary: !0,
                            tether: !1,
                            padding: 8,
                          },
                        },
                      ],
                    },
                  });
              }),
              e && n.closest('dt'))
            ) {
              const t = n.closest('dt');
              (t.addEventListener('mouseenter', (n) => {
                e.show();
              }),
                t.addEventListener('mouseleave', () => {
                  e.hide();
                }));
            }
          });
    }
    changeProductLayout() {
      var n;
      if (!this.container) return;
      const e = this.container.querySelector(
        "[aria-labelledby='section-two-heading'] ul li",
      );
      if (!e) return;
      e.classList.add('crs-product-container');
      const t = e.querySelector('div');
      if (t) {
        const e = t.querySelectorAll('.gap-1\\.5');
        if (e) {
          const i =
            '<div\n          class="crs-product-benefits"\n        ></div>';
          t.insertAdjacentHTML('beforeend', i);
          const o = t.querySelector('.crs-product-benefits'),
            r = document.createElement('hr');
          ((r.className = 'crs-product-benefits-divider'),
            o &&
              ((null == (n = e[0].textContent)
                ? void 0
                : n.includes('Instant delivery')) &&
                (e[0].querySelector('span').textContent = 'Instant delivery'),
              o.append(e[0]),
              (null == e ? void 0 : e[1]) && o.append(r, e[1])),
            e.forEach((n) => {
              var e;
              const t = n.querySelector('.fa-circle-question'),
                i = n.querySelector('span');
              if (t && i) {
                const n = document.createElement('div');
                ((n.className = 'crs-product-benefit-with-tooltip'),
                  null == (e = i.parentElement) || e.insertBefore(n, i),
                  n.appendChild(i),
                  n.appendChild(t));
              }
              ((null == i
                ? void 0
                : i.textContent.includes('Instant delivery')) &&
                (i.innerHTML = i.innerHTML.replace(
                  'Instant delivery',
                  'Instant<br> delivery',
                )),
                (null == i ? void 0 : i.textContent.includes('14-days')) &&
                  (i.innerHTML = i.innerHTML.replace(
                    '14-days',
                    '14-days<br>',
                  )));
            }));
        }
      }
    }
    addStyles() {
      if (document.getElementById('crs-layout-changes-styles')) return;
      const n = document.createElement('style');
      ((n.id = 'crs-layout-changes-styles'),
        (n.textContent =
          "html.blue {\n  --primary-light-foreground: 217 100% 70%;\n}\n\nhtml.xmas {\n  --primary-light-foreground: 217 100% 70%;\n}\n\nsection[aria-labelledby='section-one-heading'] {\n  grid-column: 2 / 3;\n  grid-row: 1 / 1;\n}\n\nsection[aria-labelledby='section-two-heading'] {\n  grid-column: 1 / 2;\n  grid-row: 1 / 1;\n}\n\n@media screen and (max-width: 1024px) {\n  section[aria-labelledby='section-one-heading'] {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    padding-top: 1.5rem;\n  }\n\n  section[aria-labelledby='section-two-heading'] {\n    grid-column: 1 / 2;\n    grid-row: 1 / 1;\n    padding-top: 0.75rem;\n    padding-bottom: 1.5rem;\n  }\n}\n.crs-checkout-button:not([disabled])::after {\n  content: attr(data-price);\n}\n\n.crs-checkout-button i {\n  margin: 0;\n}\n.crs-checkout-button i::before {\n  content: '·';\n}\n\n.crs-left-header ~ h2:not(.sr-only) {\n  margin-top: 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n}\n\n@media (max-width: 1024px) {\n  .crs-left-header ~ h2:not(.sr-only) {\n    display: block;\n    font-size: 1.75rem;\n    font-weight: 500;\n    line-height: 2rem;\n  }\n  .crs-left-header ~ h2:not(.sr-only) + dl {\n    display: none;\n  }\n}\n.crs-right-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n@media (min-width: 1025px) {\n  div > div.mt-6:has(> .crs-right-header) {\n    margin-top: 0 !important;\n  }\n\n  div + div > div.mt-6:has(> .crs-right-header) {\n    margin-top: 1.5rem !important;\n  }\n\n  /* section[aria-labelledby='section-one-heading'] > div > div > div.mt-6 {\n    margin-top: 0 !important;\n  } */\n}\n\nh3:has(+ [role='radiogroup']) {\n  display: none;\n}\n\n.crs-right-header h3 {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.crs-right-header > * {\n  flex: 1;\n}\n\n@media (max-width: 1024px) {\n  .crs-right-header {\n    margin-top: 0.75rem;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1.12rem;\n  }\n\n  .crs-right-header h3 {\n    margin: 0 !important;\n    font-size: 1.75rem;\n    font-weight: 500;\n    line-height: 2rem;\n  }\n\n  .crs-right-header + div > .mt-6 {\n    margin-top: 1.12rem !important;\n  }\n}\n\n.crs-right-header > div {\n  margin: 0;\n  font-size: 0.75rem;\n  line-height: 1.125rem;\n}\n\n.crs-right-header + div {\n  margin-top: 1.5rem;\n}\n\n.crs-left-header > div > a + div,\ndiv:has(> a[href*='trustpilot']) {\n  display: none;\n}\n.crs-product-container {\n  gap: 1.5rem;\n}\n\n@media (max-width: 1024px) {\n  .crs-product-container {\n    display: grid !important;\n    grid-template-columns: 6.375rem auto;\n    gap: 0 1rem !important;\n    padding-bottom: 1.12rem !important;\n  }\n}\n.crs-product-container > img {\n  width: 8.5rem;\n  height: 8.5rem;\n}\n@media (max-width: 1024px) {\n  .crs-product-container > img {\n    grid-column: 1 / 2;\n    grid-row: 1 / 4;\n    width: 6.375rem;\n    height: 6.375rem;\n  }\n}\n.crs-product-container > div {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (max-width: 1024px) {\n  .crs-product-container > div {\n    display: contents;\n  }\n\n  .crs-product-container > div *:not(.crs-product-benefits) {\n    grid-column: 2 / 3;\n  }\n}\n\n.crs-product-container > div > div:has(h3) + div.gap-2 {\n  order: -1;\n  margin-top: 0 !important;\n  font-size: 0.75rem;\n  font-weight: 500;\n  line-height: 1.25rem;\n}\n\n.crs-product-container > div > div:has(h3) + div.gap-2 i {\n  display: none;\n}\n\n.crs-product-container > div > div:has(h3) {\n  gap: 1.5rem;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.75rem;\n}\n\n@media (max-width: 1024px) {\n  .crs-product-container > div > div:has(h3) {\n    gap: 0.62rem;\n  }\n}\n\n.crs-product-container > div > div:has(h3) p {\n  transform: translateY(-0.9lh);\n  font-size: 1.125rem;\n  letter-spacing: -0.04688rem;\n}\n\n@media (max-width: 1024px) {\n  .crs-product-container > div > div:has(h3) p {\n    transform: translateY(-0.9lh);\n    font-size: 1rem;\n    letter-spacing: 0;\n  }\n}\n\n.crs-product-benefits {\n  margin-top: 0.75rem !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media (max-width: 1024px) {\n  .crs-product-benefits {\n    margin-top: 1.5rem !important;\n    margin-inline: 1.5rem;\n    grid-column: 1 / 3;\n  }\n}\n\n.crs-product-benefits:has(> div:only-child) {\n  justify-content: flex-start;\n}\n\n@media (max-width: 1024px) {\n  .crs-product-benefits:has(> div:only-child) {\n    margin-inline: 0;\n  }\n}\n\n.crs-product-benefits > div {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.crs-product-benefits > div:has(.crs-product-benefit-with-tooltip) {\n  flex: 1.5;\n}\n.crs-product-benefits:has(> div:only-child) > div {\n  flex-direction: row;\n  justify-content: flex-start;\n}\n\n.crs-product-benefits:has(> div:only-child) > div > div {\n  text-align: left;\n}\n\n.crs-product-benefits:has(> div:only-child) > div > div span br {\n  display: none;\n}\n\n.crs-product-benefits > div + div::before {\n  content: '';\n  width: 1px;\n  height: 2rem;\n  background-color: #d4d4d8;\n  margin: 0 1.5rem;\n}\n.crs-product-benefit-with-tooltip {\n  text-align: center;\n}\n.crs-product-benefit-with-tooltip i {\n  margin-left: 0.5ch;\n}\n.crs-product-benefits > div span {\n  text-align: center;\n  text-wrap: balance;\n  font-size: 0.75rem;\n  line-height: 1.125rem;\n}\n\n.crs-product-benefits-divider {\n  margin-inline: 2.5rem;\n  width: 1px;\n  height: 70%;\n  background: hsl(var(--border));\n}\n\n/* @media (max-width: 410px) {\n  .crs-product-benefits-divider {\n    margin-inline: 2rem;\n  }\n} */\nul:has(.crs-product-container) + div.space-y-0 > .bg-secondary,\nul:has(.crs-product-container) + div.space-y-0 > .bg-secondary-hover {\n  border-radius: 1111px;\n}\n\nul:has(.crs-product-container) + div.space-y-0 > .bg-secondary-light {\n  background: transparent;\n  border: none;\n}\n\n@media (min-width: 1025px) {\n  section[aria-labelledby='section-two-heading'] dl {\n    border-top: none;\n  }\n}\n\n@media (max-width: 1025px) {\n  section[aria-labelledby='section-two-heading'] dl {\n    margin-top: 1.12rem;\n    padding-top: 1.12rem;\n  }\n}\n\nsection[aria-labelledby='section-two-heading'] dl:not(.sm\\:hidden) {\n  display: grid;\n  gap: 0.81rem;\n}\nsection[aria-labelledby='section-two-heading'] dl > div:first-child {\n  display: none;\n}\n\nsection[aria-labelledby='section-two-heading'] dl > div {\n  margin-top: 0 !important;\n}\n\nsection[aria-labelledby='section-two-heading']\n  dl:not(.sm\\:hidden)\n  div:last-child\n  > div:first-child\n  * {\n  font-size: 1.125rem;\n  letter-spacing: -0.04688rem;\n}\n\n@media (max-width: 1024px) {\n  section[aria-labelledby='section-two-heading']\n    dl:not(.sm\\:hidden)\n    div:last-child\n    > div:first-child\n    * {\n    font-size: 1.125rem;\n    letter-spacing: 0;\n  }\n\n  section[aria-labelledby='section-two-heading']\n    dl:not(.sm\\:hidden)\n    div:last-child\n    > div:first-child\n    dt {\n    font-size: 1rem;\n  }\n\n  section[aria-labelledby='section-two-heading']\n    dl:not(.sm\\:hidden)\n    div:last-child\n    > div:first-child\n    dd {\n    font-size: 1.25rem;\n  }\n}\nsection[aria-labelledby='section-two-heading']\n  dl\n  div:has(> [alt='Coins'])::before {\n  content: 'Cashback: ';\n  color: #eab308;\n  font-size: 0.875rem;\n  font-weight: 600;\n  line-height: 1.25rem;\n}\n\n@media (max-width: 1024px) {\n  section[aria-labelledby='section-two-heading']\n    dl\n    div:has(> [alt='Coins'])::before {\n    font-size: 0.9375rem;\n  }\n}\n\nsection[aria-labelledby='section-two-heading']\n  dl\n  div:has(> [alt='Coins'])\n  span {\n  position: relative;\n  color: #eab308;\n  font-size: 0.875rem;\n  font-weight: 600;\n  line-height: 1.25rem;\n}\n\n@media (max-width: 1024px) {\n  section[aria-labelledby='section-two-heading']\n    dl\n    div:has(> [alt='Coins'])\n    span {\n    font-size: 0.9375rem;\n  }\n}\nsection[aria-labelledby='section-two-heading']\n  dl\n  div:has(> [alt='Coins'])\n  span::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: '';\n  width: 1ch;\n  height: 100%;\n  background: hsl(var(--background));\n}\nsection[aria-labelledby='section-one-heading'] > div > button {\n  margin-top: 1.5rem;\n}\n@media (max-width: 1024px) {\n  section[aria-labelledby='section-two-heading']\n    dl\n    div:has(> [alt='Coins'])\n    span::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: '';\n    width: 1ch;\n    height: 100%;\n    background: hsl(var(--card));\n  }\n\n  section[aria-labelledby='section-one-heading'] > div div:has(.fa-lock) {\n    margin-bottom: 3.5rem;\n  }\n}\n"),
        document.head.appendChild(n));
    }
  }
  class t {
    constructor() {
      ((this.expanded = !1), this.init());
    }
    init() {}
    addStyles() {
      if (document.getElementById('crs-payment-methods-styles')) return;
      const n = document.createElement('style');
      ((n.id = 'crs-payment-methods-styles'),
        (n.textContent =
          "/* More payment methods button container */\n.pm-more-button-container {\n  display: none;\n  width: 100%;\n  margin-top: 1rem;\n}\n\n/* More payment methods button */\n.pm-more-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0 1.5rem;\n\n  background: transparent;\n  color: inherit;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.pm-more-button:focus {\n  outline: none;\n  border-color: rgba(59, 130, 246, 0.5);\n}\n\n/* Button icon */\n.pm-more-button-icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  transition: transform 0.2s ease;\n}\n\n/* Rotate icon when expanded */\n.pm-more-button-container.pm-expanded .pm-more-button-icon {\n  transform: rotate(180deg);\n}\n\n@media (min-width: 1025px) {\n  /* Hide payment methods beyond the first 3 by default */\n  #headlessui-radiogroup-v-2 > div:nth-child(n + 5),\n  [role='radiogroup'] > div:nth-child(n + 5) {\n    display: none;\n  }\n\n  /* Show all payment methods when expanded */\n  #headlessui-radiogroup-v-2.pm-expanded > div,\n  [role='radiogroup'].pm-expanded > div {\n    display: block !important;\n  }\n\n  .pm-more-button-container {\n    display: block;\n  }\n  .pm-more-button-container.pm-expanded {\n    display: none;\n  }\n}\n"),
        document.head.appendChild(n));
    }
    async addMoreButton() {
      var e;
      const t = await n('#headlessui-radiogroup-v-2, [role="radiogroup"]');
      if (!t) return;
      const i = document.createElement('div');
      ((i.className = 'pm-more-button-container'),
        (i.innerHTML =
          '\n      <button type="button" class="pm-more-button">\n        <span class="pm-more-button-text">More payment methods</span>\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="17"\n          height="14"\n          viewBox="0 0 17 14"\n          fill="none"\n        >\n          <path\n            d="M7.78125 13.7188C7.98958 13.9063 8.22917 14 8.5 14C8.77083 14 9.01042 13.9063 9.21875 13.7188L14.2188 8.71875C14.4063 8.51042 14.5 8.27083 14.5 8C14.5 7.72917 14.4063 7.48958 14.2188 7.28125C14.0104 7.09375 13.7708 7 13.5 7C13.2292 7 12.9896 7.09375 12.7813 7.28125L9.5 10.5938L9.5 1C9.5 0.708334 9.40625 0.46875 9.21875 0.28125C9.03125 0.0937503 8.79167 2.75017e-07 8.5 2.62268e-07C8.20833 2.49519e-07 7.96875 0.0937502 7.78125 0.28125C7.59375 0.46875 7.5 0.708334 7.5 1L7.5 10.5938L4.21875 7.28125C4.01042 7.09375 3.77083 7 3.5 7C3.22917 7 2.98958 7.09375 2.78125 7.28125C2.59375 7.48958 2.5 7.72917 2.5 8C2.5 8.27083 2.59375 8.51042 2.78125 8.71875L7.78125 13.7188Z"\n            fill="white"\n          />\n        </svg>\n      </button>\n    '),
        null == (e = t.parentElement) || e.insertBefore(i, t.nextSibling),
        this.expandIfSelectedIsHidden(t, i));
      const o = i.querySelector('.pm-more-button');
      null == o ||
        o.addEventListener('click', () => {
          (this.togglePaymentMethods(t, i),
            ((n, e, t, i = '') => {
              ((window.dataLayer = window.dataLayer || []),
                window.dataLayer.push({
                  event: 'event-to-ga4',
                  event_name: n,
                  event_desc: e,
                  event_type: t,
                  event_loc: i,
                }),
                ((n, e = 'info') => {
                  let t;
                  switch (e) {
                    case 'info':
                      t = 'color: #3498db;';
                      break;
                    case 'warn':
                      t = 'color: #f39c12;';
                      break;
                    case 'error':
                      t = 'color: #e74c3c;';
                      break;
                    case 'success':
                      t = 'color: #2ecc71;';
                  }
                  console.log(
                    `%c>>> ${n}`,
                    `${t} font-size: 16px; font-weight: 600`,
                  );
                })(`Event: ${n} | ${e} | ${t} | ${i}`, 'success'));
            })(
              'exp_payment_more',
              'More payment methods',
              'click',
              'Checkout',
            ));
        });
    }
    expandIfSelectedIsHidden(n, e) {
      Array.from(n.querySelectorAll(':scope > div')).findIndex((n) =>
        n.querySelector('label .bg-radio-hover'),
      ) >= 3 && this.setExpandedState(!0, n, e);
    }
    togglePaymentMethods(n, e) {
      this.setExpandedState(!this.expanded, n, e);
    }
    setExpandedState(n, e, t) {
      if (((this.expanded = n), this.expanded)) {
        (e.classList.add('pm-expanded'), t.classList.add('pm-expanded'));
        const n = t.querySelector('.pm-more-button-text');
        n && (n.textContent = 'Show less payment methods');
      } else {
        (e.classList.remove('pm-expanded'), t.classList.remove('pm-expanded'));
        const n = t.querySelector('.pm-more-button-text');
        n && (n.textContent = 'More payment methods');
      }
    }
  }
  window.__crsTestInitialized ||
    ((window.__crsTestInitialized = !0),
    new (class {
      constructor() {
        this.init();
      }
      init() {
        (new e(),
          new t(),
          this.handlePageChange(() => {
            (new e(), new t());
          }),
          this.addStyles());
      }
      handlePageChange(n) {
        let e = location.pathname;
        new MutationObserver(() => {
          location.pathname !== e &&
            ((e = location.pathname),
            location.pathname.includes('checkout') && n());
        }).observe(document.body, { childList: !0, subtree: !0 });
      }
      addStyles() {
        const n = document.createElement('style');
        ((n.textContent = ''), document.head.appendChild(n));
      }
    })());
})();
