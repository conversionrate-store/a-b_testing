!(function () {
  'use strict';
  const startLog = ({ name, dev }) => {
    console.log(
      `%c EXP: ${name} (DEV: ${dev})`,
      `background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`,
    );
  };
  startLog({ name: 'Passport Application Flow', dev: 'OS' });

  const clarityInterval = (name) => {
    let int = setInterval(function () {
      if (typeof window.clarity == 'function') {
        clearInterval(int);
        window.clarity('set', name, 'variant_1');
      }
    }, 1000);
  };
  clarityInterval('exp_passport_flow');

  const n = (n) => {
      var e;
      const t = `; ${document.cookie}`.split(`; ${n}=`);
      return 2 === t.length
        ? null == (e = t.pop())
          ? void 0
          : e.split(';').shift()
        : null;
    },
    e = location.hostname.includes('.com') ? 'govplus.com/' : 'govplus.app/';
  class t {
    constructor() {
      ((this.paymentsSelector = '.PaymentCombinedInformation'),
        (this.paymentsStyleId = 'crs-payments-style'),
        (this.isProcessing = !1),
        (this.disclaimerObserver = null));
    }
    init() {
      (this.addStyles(), this.changes());
    }
    async changes() {
      if (!this.isProcessing) {
        this.isProcessing = !0;
        try {
          const e = await ((n = this.paymentsSelector),
            new Promise((e) => {
              const t = document.querySelector(n);
              t && e(t);
              const i = new MutationObserver(() => {
                const t = document.querySelector(n);
                t && (e(t), i.disconnect());
              });
              i.observe(document.documentElement, {
                childList: !0,
                subtree: !0,
              });
            })),
            t = e.querySelectorAll('.payment-method-information__item'),
            i = e.querySelector(
              '.PaymentCombinedInformation .payment-footer p',
            );
          (t.forEach((n) => {
            var e, t, o, a, r, m;
            const s = n.querySelector(
                '.sale-block__processing > div:first-child p',
              ),
              d = n.querySelector('.sale-block__processing'),
              p = n.querySelector('.sale-block__processing > div:last-child');
            (s &&
              ((s.textContent =
                (null == (t = null == (e = s.textContent) ? void 0 : e.trim())
                  ? void 0
                  : t.replace(/-$/, '').trim()) || ''),
              (null == (o = s.textContent)
                ? void 0
                : o.toLowerCase().includes('standard')) &&
                (s.textContent = 'Regular government timeline')),
              p &&
                ((null == (a = p.textContent)
                  ? void 0
                  : a.includes(' Regular government timeline')) &&
                  (p.innerHTML = '8-12 weeks delivery'),
                (null == (r = p.textContent)
                  ? void 0
                  : r.includes('Guaranteed delivery in 4 weeks')) &&
                  ((p.innerHTML = '<span>4 weeks</span> delivery'),
                  null == d ||
                    d.insertAdjacentHTML(
                      'afterend',
                      '<ul class="crs-payment-benefits">\n              <li>✔ Guaranteed timeline</li>\n              <li>✔ Expert error-check</li>\n              <li>✔ Priority processing</li>\n              <li>✔ Best for upcoming travel</li>\n              </ul>',
                    )),
                (null == (m = p.textContent)
                  ? void 0
                  : m.includes('Guaranteed delivery in 2 week')) &&
                  ((p.innerHTML = '<span>2 weeks</span> delivery'),
                  null == d ||
                    d.insertAdjacentHTML(
                      'afterend',
                      '<ul class="crs-payment-benefits">\n              <li>✔ Guaranteed timeline</li>\n              <li>✔ Expert error-check</li>\n              <li>✔ Priority processing</li>\n              <li>✔ Best for upcoming travel</li>\n              </ul>',
                    ))),
              i &&
                setTimeout(() => {
                  i.innerHTML = i.innerHTML.replace(' <br>', '. ');
                }, 100),
              null == d ||
                d.insertAdjacentHTML(
                  'afterend',
                  '<div class="crs-payment-offer">New customer offer - $30 OFF</div>',
                ));
          }),
            i &&
              (this.replaceBreakWithPeriod(i),
              (this.disclaimerObserver = new MutationObserver(() => {
                this.replaceBreakWithPeriod(i);
              })),
              this.disclaimerObserver.observe(i, {
                childList: !0,
                subtree: !0,
                characterData: !0,
              })));
        } finally {
          this.isProcessing = !1;
        }
        var n;
      }
    }
    replaceBreakWithPeriod(n) {
      const e = n.innerHTML,
        t = e.replace(/\s*<br\s*\/?>\s*/gi, '. ');
      e !== t && (n.innerHTML = t);
    }
    cleanUp() {
      this.disclaimerObserver &&
        (this.disclaimerObserver.disconnect(),
        (this.disclaimerObserver = null));
      const n = document.getElementById(this.paymentsStyleId);
      n && n.remove();
    }
    addStyles() {
      if (!document.getElementById(this.paymentsStyleId)) {
        const n = document.createElement('style');
        ((n.id = this.paymentsStyleId),
          (n.textContent =
            "div:has(> .PaymentPageWrapper) {\n  margin-top: 40px !important;\n}\n\n.GHeaderCombinedPayment .GProgressBar {\n  display: none;\n}\n\n@media (max-width: 767px) {\n  div:has(> .PaymentPageWrapper) {\n    margin-top: 24px !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information {\n    flex-direction: row !important;\n    gap: 20px !important;\n  }\n}\n\n@media (max-width: 768px) {\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information {\n    gap: 52px !important;\n  }\n}\n\n.PaymentCombinedInformation\n  .charge-payment-form\n  .payment-method-information\n  .payment-method-information__item {\n  --border-size: 2px;\n  flex: 1;\n  position: relative;\n  z-index: 2;\n}\n\n/* .PaymentCombinedInformation\n  .charge-payment-form\n  .payment-method-information\n  .payment-method-information__item\n  label:not(.ant-radio-wrapper-checked):not(:hover):not(:focus) {\n  border: 1px solid #eaeaea !important;\n} */\n\n.PaymentCombinedInformation\n  .charge-payment-form\n  .payment-method-information\n  .payment-method-information__item\n  .ant-radio-wrapper {\n  box-shadow: 0 8px 24px 4px rgba(0, 0, 0, 0.12) !important;\n  padding: 0 !important;\n  /* overflow: hidden !important; */\n}\n\n@media (min-width: 768px) {\n  .PaymentCombinedInformation\n    .charge-payment-form\n    .payment-method-information\n    .payment-method-information__item\n    .ant-radio-wrapper\n    .content {\n    margin: 0 !important;\n    padding: 22px 18px !important;\n  }\n}\n@media (max-width: 767px) {\n  .PaymentCombinedInformation\n    .charge-payment-form\n    .payment-method-information\n    .payment-method-information__item\n    .ant-radio-wrapper {\n    padding-left: 14px !important;\n    overflow: visible !important;\n  }\n\n  .PaymentCombinedInformation\n    .charge-payment-form\n    .payment-method-information\n    .payment-method-information__item\n    .ant-radio-wrapper\n    .content {\n    padding-left: 36px !important;\n  }\n}\n\n@media (max-width: 767px) and (min-width: 599px) {\n  .PaymentCombinedInformation\n    .charge-payment-form\n    .payment-method-information\n    .payment-method-information__item\n    .ant-radio-wrapper\n    .content {\n    margin-left: 0 !important;\n    padding: 16px 40px 16px 16px;\n  }\n}\n\n.PaymentCombinedInformation\n  .charge-payment-form\n  .payment-method-information\n  .payment-method-information__item\n  .ant-radio-wrapper\n  .ant-radio {\n  display: none;\n}\n\n@media (max-width: 767px) {\n  .PaymentCombinedInformation\n    .charge-payment-form\n    .payment-method-information\n    .payment-method-information__item\n    .ant-radio-wrapper\n    .ant-radio {\n    display: block;\n    left: 14px !important;\n    top: 48px !important;\n    transform: translate(0) !important;\n  }\n}\n\n.PaymentCombinedInformation\n  .charge-payment-form\n  .payment-method-information\n  .payment-method-information__item\n  .ant-radio-wrapper {\n  background-color: #fff !important;\n  box-shadow: 0 8px 24px 4px rgba(0, 0, 0, 0.12) !important;\n  transition:\n    border-color 0.3s ease,\n    background-color 0.3s ease !important;\n}\n.PaymentCombinedInformation\n  .charge-payment-form\n  .payment-method-information\n  .payment-method-information__item\n  .ant-radio-wrapper:not(:hover):not(:focus) {\n  border: var(--border-size) solid transparent !important;\n}\n\n.PaymentCombinedInformation\n  .charge-payment-form\n  .payment-method-information\n  .payment-method-information__item\n  :is(.ant-radio-wrapper:hover, .ant-radio-wrapper:focus) {\n  border: var(--border-size) solid #216de3 !important;\n  }\n\n.PaymentCombinedInformation\n  .charge-payment-form\n  .payment-method-information\n  .payment-method-information__item\n  .ant-radio-wrapper-checked {\n  border: var(--border-size) solid #216de3 !important;\n\n  background: #e2eeff !important;\n}\n\n.PaymentCombinedInformation\n  :is(\n    .payment-method-information__item:has(+ .payment-method-information__item),\n    .payment-method-information__item + .payment-method-information__item\n  )\n  .ant-radio-wrapper::before {\n  padding: 2px 10px;\n  padding-left: 17px;\n  background: #216de3;\n  border-radius: 16px 16px 0 0;\n  margin-left: calc(var(--border-size) * -1);\n  width: calc(100% + var(--border-size) * 2);\n  color: #fff;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.1px;\n}\n\n@media (max-width: 767px) {\n  .PaymentCombinedInformation\n    :is(\n      .payment-method-information__item:has(\n        + .payment-method-information__item\n      ),\n      .payment-method-information__item + .payment-method-information__item\n    )\n    .ant-radio-wrapper::before {\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    padding-inline: 50px 37px;\n    transform: translateX(-50%);\n    border-radius: 12px 12px 0 0;\n    background: #216de3;\n    box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.04) inset;\n    white-space: nowrap;\n  }\n}\n.PaymentCombinedInformation\n  .payment-method-information__item:has(+ .payment-method-information__item)\n  .ant-radio-wrapper::before {\n  /* add space before text */\n  content: 'Most Reliable Choice';\n}\n.PaymentCombinedInformation\n  .payment-method-information__item\n  + .payment-method-information__item\n  .ant-radio-wrapper::before {\n  content: 'Guaranteed Urgent';\n}\n\n.PaymentCombinedInformation\n  :is(\n    .payment-method-information__item:has(+ .payment-method-information__item),\n    .payment-method-information__item + .payment-method-information__item\n  )::after {\n  content: '' !important;\n  position: absolute;\n  top: 6px;\n  width: 15px;\n  height: 18px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n\n@media (max-width: 767px) {\n  .PaymentCombinedInformation\n    :is(\n      .payment-method-information__item:has(\n        + .payment-method-information__item\n      ),\n      .payment-method-information__item + .payment-method-information__item\n    )::after {\n    top: auto;\n    bottom: calc(100% + 6px);\n  }\n}\n\n.PaymentCombinedInformation\n  .payment-method-information__item:has(\n    + .payment-method-information__item\n  )::after {\n  background-image: url(https://conversionrate-store.github.io/a-b_images/govplus/crown.webp);\n  left: calc(50% - 85px);\n  width: 14px;\n  height: 15px;\n}\n\n.PaymentCombinedInformation\n  .payment-method-information__item\n  + .payment-method-information__item::after {\n  background-image: url(https://conversionrate-store.github.io/a-b_images/govplus/lightning.svg);\n  left: calc(50% - 80px);\n  transform: rotate(16deg);\n}\n\n@media (max-width: 767px) {\n  .PaymentCombinedInformation\n    .payment-method-information__item:has(\n      + .payment-method-information__item\n    )::after {\n    left: calc(50% - 82px);\n  }\n\n  .PaymentCombinedInformation\n    .payment-method-information__item\n    + .payment-method-information__item::after {\n    left: calc(50% - 75px);\n    bottom: calc(100% + 4px);\n  }\n}\n.PaymentCombinedInformation .charge-payment-form .traveling-soon {\n  display: none;\n}\n\n@media (max-width: 767px) {\n  .PaymentCombinedInformation .charge-payment-form .traveling-soon {\n    margin-top: 0 !important;\n    align-self: center !important;\n  }\n}\n\n.PaymentCombinedInformation .charge-payment-form .traveling-soon div {\n  font-size: 20px !important;\n  font-weight: 600 !important;\n  line-height: 28px !important;\n}\n\n@media (max-width: 767px) {\n  .PaymentCombinedInformation .charge-payment-form .traveling-soon div {\n    font-size: 18px !important;\n  }\n}\n\n.PaymentCombinedInformation\n  .payment-method-information__item\n  .content__wrapper {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-areas:\n    'title'\n    'description'\n    'price'\n    'offer'\n    'list';\n  gap: 4px 24px;\n}\n\n@media (max-width: 767px) {\n  .PaymentCombinedInformation\n    .payment-method-information__item\n    .content__wrapper {\n  }\n}\n.PaymentCombinedInformation\n  .payment-method-information__item\n  .content__wrapper\n  :is(.sale-block, .sale-block__processing, .price-block) {\n  display: contents;\n}\n\n.PaymentCombinedInformation\n  .payment-method-information__item\n  .content__wrapper\n  .price-block {\n  grid-area: price;\n  align-items: center;\n}\n\n.PaymentCombinedInformation\n  .payment-method-information__item\n  .content__wrapper\n  .sale-block\n  .sale-block__processing\n  > div:first-child {\n  grid-area: title;\n}\n\n.PaymentCombinedInformation\n  .payment-method-information__item\n  .content__wrapper\n  .sale-block\n  .sale-block__processing\n  > div:first-child\n  p {\n  font-size: 14px !important;\n  line-height: 25px !important;\n  text-transform: uppercase !important;\n}\n\n@media (max-width: 767px) {\n  .PaymentCombinedInformation\n    .payment-method-information__item\n    .content__wrapper\n    .sale-block\n    .sale-block__processing\n    > div:first-child\n    p {\n    line-height: 24px !important;\n  }\n}\n\n.PaymentCombinedInformation\n  .payment-method-information__item\n  .content__wrapper\n  .sale-block\n  .sale-block__processing\n  > div:last-child {\n  grid-area: description;\n  color: #3e3e3e !important;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  line-height: 28px !important;\n  letter-spacing: -0.1px;\n  text-decoration: none !important;\n  font-family: InterSemiBold, sans-serif !important;\n}\n\n@media (max-width: 767px) {\n  .PaymentCombinedInformation\n    .payment-method-information__item\n    .content__wrapper\n    .sale-block\n    .sale-block__processing\n    > div:last-child {\n    font-size: 22px !important;\n    line-height: 32px !important;\n  }\n}\n\n.PaymentCombinedInformation\n  .payment-method-information__item\n  .content__wrapper\n  .sale-block\n  .sale-block__processing\n  > div:last-child\n  span {\n  color: #216de3 !important;\n  font-weight: inherit !important;\n  font-size: inherit !important;\n}\n\n.PaymentCombinedInformation\n  .payment-method-information__item\n  .content__wrapper\n  .sale-block\n  .sale-block__processing\n  + div {\n  grid-area: offer;\n}\n\n.crs-payment-offer {\n  grid-area: offer;\n  margin-top: 12px;\n  padding: 4px 8px;\n  border-radius: 8px;\n  background: #d4f7df;\n  color: #166534;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 19.6px;\n  font-family: InterSemiBold, sans-serif !important;\n  white-space: nowrap;\n}\n\n@media (max-width: 767px) {\n  .crs-payment-offer {\n    margin-top: 8px;\n  }\n}\n\n.crs-payment-benefits {\n  grid-area: list;\n  margin-top: 20px;\n  display: grid;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.1px;\n  font-family: InterSemiBold, sans-serif !important;\n}\n\n@media (max-width: 767px) {\n  .crs-payment-benefits {\n    margin-top: 12px;\n  }\n}\n\n.PaymentCombinedInformation\n  .payment-method-information__item\n  .content__wrapper\n  .price-block\n  .prices {\n  margin-top: 20px;\n  align-items: center;\n  flex-direction: row !important;\n  gap: 0.5ch;\n}\n\n@media (max-width: 767px) {\n  .PaymentCombinedInformation\n    .payment-method-information__item\n    .content__wrapper\n    .price-block\n    .prices {\n    margin-top: 12px;\n  }\n}\n\n.PaymentCombinedInformation\n  .payment-method-information__item\n  .content__wrapper\n  .price-block\n  .prices\n  > div:first-child {\n  align-items: center;\n  line-height: 24px !important;\n}\n\n@media (max-width: 767px) {\n  .PaymentCombinedInformation\n    .payment-method-information__item\n    .content__wrapper\n    .price-block\n    .prices\n    > div:first-child {\n    font-size: 16px !important;\n    line-height: 22px !important;\n  }\n}\n\n.PaymentCombinedInformation\n  .payment-method-information__item\n  .content__wrapper\n  .price-block\n  .prices\n  > div:last-child {\n  font-size: 20px !important;\n  line-height: 26px !important;\n  color: #191919 !important;\n}\n\n@media (max-width: 767px) {\n  .PaymentCombinedInformation\n    .payment-method-information__item\n    .content__wrapper\n    .price-block\n    .prices\n    > div:last-child {\n    font-size: 16px !important;\n    line-height: 24px !important;\n  }\n}\n.PaymentCombinedInformation .payment-footer {\n  margin-top: 24px !important;\n}\n\n.PaymentCombinedInformation .payment-footer p {\n  text-align: center !important;\n}\n\n@media (max-width: 767px) {\n  .PaymentCombinedInformation .payment-footer p {\n    text-align: center !important;\n  }\n}\n\n.PaymentCombinedInformation .payment-footer p br {\n  display: none;\n}\n\n.PaymentPageWrapper #govplus-transparency-box {\n  display: none;\n}\n"),
          document.head.appendChild(n));
      }
    }
  }
  window.crsPassportAppFlowTestInstance ||
    ((window.crsPassportAppFlowTestInstance = !0),
    new (class {
      constructor() {
        ((this.payments = null),
          (this.isInitialized = !1),
          (this.targetFormIds = [
            'passport-new',
            'passport-renewal',
            'passport-lost',
            'passport-damaged',
          ]),
          (this.abortController = null),
          (this.executeInitialLoadTimeout = null),
          (this.onPageChangeHandler = null),
          (this.domContentLoadedHandler = null),
          (this.windowLoadHandler = null),
          (this.originalPushState = null),
          (this.originalReplaceState = null),
          (this.handlePageChangeTimeout = null),
          (this.lastProcessedUrl = null),
          (this.payments = new t()),
          this.init());
      }
      init() {
        (location.href.includes('page=form') &&
          (sessionStorage.removeItem('crs-first-time-user-checked'),
          this.cleanUpComponents()),
          this.checkIsUserLoggedIn().then((n) => {
            const e =
              'true' === sessionStorage.getItem('crs-first-time-user-checked');
            (n && !e) ||
              (this.spaPageChangeHandler(), this.handleInitialPageLoad());
          }));
      }
      async checkIsUserLoggedIn() {
        var t, i, o, a;
        if ('true' === sessionStorage.getItem('crs-first-time-user-checked'))
          return !1;
        (this.abortController && this.abortController.abort(),
          (this.abortController = new AbortController()));
        const { data: r, error: m } = await (async (t) => {
          try {
            const { data: i, error: o } = await (async (n, e, t) => {
              try {
                const i = await fetch(n, { ...e, signal: t }),
                  o = await i.json();
                if (!i.ok) throw new Error(`Error: ${o.message}`);
                return { data: o, error: null };
              } catch (o) {
                return { data: null, error: o };
              }
            })(
              `https://auth.${e}usersData/data`,
              {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${n('client_token')}`,
                },
                credentials: 'include',
              },
              t,
            );
            return o ? { data: null, error: o } : { data: i, error: null };
          } catch (m) {
            return { data: null, error: m };
          }
        })(this.abortController.signal);
        if (this.abortController.signal.aborted) return !1;
        const s =
          !!(null ==
          (a =
            null ==
            (o =
              null ==
              (i = null == (t = null == r ? void 0 : r.data) ? void 0 : t.data)
                ? void 0
                : i.personal)
              ? void 0
              : o.communication)
            ? void 0
            : a.email) && !m;
        return (
          s || sessionStorage.setItem('crs-first-time-user-checked', 'true'),
          s
        );
      }
      handleInitialPageLoad() {
        if (this.isInitialized) return;
        const n = document.readyState;
        'loading' === n
          ? ((this.domContentLoadedHandler = () => this.executeInitialLoad()),
            document.addEventListener(
              'DOMContentLoaded',
              this.domContentLoadedHandler,
              { once: !0 },
            ))
          : 'interactive' === n
            ? ((this.windowLoadHandler = () => this.executeInitialLoad()),
              window.addEventListener('load', this.windowLoadHandler, {
                once: !0,
              }))
            : this.executeInitialLoad();
      }
      executeInitialLoad() {
        this.isInitialized ||
          ((this.isInitialized = !0),
          this.executeInitialLoadTimeout &&
            clearTimeout(this.executeInitialLoadTimeout),
          (this.executeInitialLoadTimeout = setTimeout(() => {
            (this.lastProcessedUrl || this.handlePageChange(),
              (this.executeInitialLoadTimeout = null));
          }, 100)));
      }
      initComponents() {
        var n;
        null == (n = this.payments) || n.init();
      }
      cleanUpComponents() {
        var n;
        null == (n = this.payments) || n.cleanUp();
      }
      async handlePageChange() {
        if (
          (await this.checkIsUserLoggedIn()) ||
          ('true' !== sessionStorage.getItem('crs-first-time-user-checked') &&
            !location.href.includes('page=payment'))
        )
          return (
            this.cleanUpComponents(),
            void sessionStorage.removeItem('crs-first-time-user-checked')
          );
        const n = new URLSearchParams(window.location.search).get('formId'),
          e = new URLSearchParams(window.location.search).get('page');
        if (
          !n ||
          !this.targetFormIds.includes(n) ||
          (e && 'payment' !== e && 'form' !== e)
        )
          return (
            sessionStorage.removeItem('crs-first-time-user-checked'),
            sessionStorage.removeItem('crs-formId'),
            void this.cleanUpComponents()
          );
        (location.href.includes('page=form') &&
          null === sessionStorage.getItem('crs-formId') &&
          sessionStorage.setItem('crs-formId', n),
          this.handlePageChangeInternal());
      }
      handlePageChangeInternal() {
        const n = window.location.href;
        ((this.lastProcessedUrl = n),
          this.isFormPage()
            ? (this.cleanUpComponents(), this.initComponents())
            : this.cleanUpComponents());
      }
      spaPageChangeHandler() {
        (this.onPageChangeHandler &&
          (window.removeEventListener('popstate', this.onPageChangeHandler),
          window.removeEventListener('pushstate', this.onPageChangeHandler),
          window.removeEventListener('replacestate', this.onPageChangeHandler),
          window.removeEventListener('hashchange', this.onPageChangeHandler)),
          this.patchHistoryAPI(),
          (this.onPageChangeHandler = () => this.handlePageChange()),
          window.addEventListener('popstate', this.onPageChangeHandler),
          window.addEventListener('pushstate', this.onPageChangeHandler),
          window.addEventListener('replacestate', this.onPageChangeHandler),
          window.addEventListener('hashchange', this.onPageChangeHandler));
      }
      patchHistoryAPI() {
        (this.originalPushState ||
          (this.originalPushState = history.pushState.bind(history)),
          this.originalReplaceState ||
            (this.originalReplaceState = history.replaceState.bind(history)));
        const n = this.originalPushState,
          e = this.originalReplaceState;
        let t = !1,
          i = !1;
        ((history.pushState = (...e) => {
          if ((n(...e), !t)) {
            t = !0;
            try {
              window.dispatchEvent(new Event('pushstate'));
            } finally {
              t = !1;
            }
          }
        }),
          (history.replaceState = (...n) => {
            if ((e(...n), !i)) {
              i = !0;
              try {
                window.dispatchEvent(new Event('replacestate'));
              } finally {
                i = !1;
              }
            }
          }));
      }
      isFormPage() {
        return (
          window.location.href.includes('dashboard') &&
          window.location.href.includes('/forms/') &&
          window.location.href.includes('formId')
        );
      }
      cleanUp() {
        (this.abortController &&
          (this.abortController.abort(), (this.abortController = null)),
          this.executeInitialLoadTimeout &&
            (clearTimeout(this.executeInitialLoadTimeout),
            (this.executeInitialLoadTimeout = null)),
          this.handlePageChangeTimeout &&
            (clearTimeout(this.handlePageChangeTimeout),
            (this.handlePageChangeTimeout = null)),
          this.onPageChangeHandler &&
            (window.removeEventListener('popstate', this.onPageChangeHandler),
            window.removeEventListener('pushstate', this.onPageChangeHandler),
            window.removeEventListener(
              'replacestate',
              this.onPageChangeHandler,
            ),
            window.removeEventListener('hashchange', this.onPageChangeHandler),
            (this.onPageChangeHandler = null)),
          this.domContentLoadedHandler &&
            (document.removeEventListener(
              'DOMContentLoaded',
              this.domContentLoadedHandler,
            ),
            (this.domContentLoadedHandler = null)),
          this.windowLoadHandler &&
            (window.removeEventListener('load', this.windowLoadHandler),
            (this.windowLoadHandler = null)),
          this.originalPushState &&
            ((history.pushState = this.originalPushState),
            (this.originalPushState = null)),
          this.originalReplaceState &&
            ((history.replaceState = this.originalReplaceState),
            (this.originalReplaceState = null)),
          this.cleanUpComponents());
      }
    })());
})();
