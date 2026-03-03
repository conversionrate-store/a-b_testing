!(function () {
  'use strict';
  const startLog = ({ name, dev }) => {
    console.log(
      `%c EXP: ${name} (DEV: ${dev})`,
      `background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`,
    );
  };
  startLog({ name: 'Filters from the 2nd set of hypoteses', dev: 'OS' });

  const clarityInterval = (name) => {
    let int = setInterval(function () {
      if (typeof window.clarity == 'function') {
        clearInterval(int);
        window.clarity('set', name, 'variant_1');
      }
    }, 1000);
  };
  clarityInterval('exp_filters');

  const t = (t) =>
      new Promise((e) => {
        const n = document.querySelector(t);
        n && e(n);
        const i = new MutationObserver(() => {
          const n = document.querySelector(t);
          n && (e(n), i.disconnect());
        });
        i.observe(document.documentElement, { childList: !0, subtree: !0 });
      }),
    e = (t, e = 'info') => {
      let n;
      switch (e) {
        case 'info':
          n = 'color: #3498db;';
          break;
        case 'warn':
          n = 'color: #f39c12;';
          break;
        case 'error':
          n = 'color: #e74c3c;';
          break;
        case 'success':
          n = 'color: #2ecc71;';
      }
      console.log(`%c>>> ${t}`, `${n} font-size: 16px; font-weight: 600`);
    };
  function n(t, e) {
    return e <= 100
      ? t * e
      : t <= 0.5
        ? 200 * t
        : 100 + 2 * (t - 0.5) * (e - 100);
  }
  function i(t, e) {
    return e <= 100
      ? e > 0
        ? t / e
        : 0
      : t <= 100
        ? t / 200
        : 0.5 + (t - 100) / (2 * (e - 100));
  }
  class r {
    constructor(t) {
      ((this.STYLE_ID = 'hybrid-price-slider-style'),
        (this.root = null),
        (this.track = null),
        (this.fill = null),
        (this.thumbMin = null),
        (this.thumbMax = null),
        (this.draggedThumb = null),
        (this.onInputChange = () => this.updateFromInputs()),
        (this.onPointerDown = (t) => this.handlePointerDown(t)),
        (this.container = t.container),
        (this.minPriceInput = t.minPriceInput),
        (this.maxPriceInput = t.maxPriceInput),
        (this.maxPrice = t.maxPrice),
        (this.position = t.position || 'afterend'),
        this.addStyles());
    }
    init() {
      (this.createDOM(), this.setupListeners(), this.updateFromInputs());
    }
    createDOM() {
      ((this.root = document.createElement('div')),
        (this.root.className = 'crs-hybrid-slider'));
      const t = document.createElement('div');
      t.className = 'crs-hybrid-slider-track';
      const e = document.createElement('div');
      e.className = 'crs-hybrid-slider-fill';
      const n = document.createElement('div');
      ((n.className = 'crs-hybrid-slider-thumb'),
        n.setAttribute('data-thumb', 'min'));
      const i = document.createElement('div');
      ((i.className = 'crs-hybrid-slider-thumb'),
        i.setAttribute('data-thumb', 'max'),
        t.appendChild(e),
        this.root.appendChild(t),
        this.root.appendChild(n),
        this.root.appendChild(i),
        this.container.insertAdjacentElement(this.position, this.root),
        (this.track = t),
        (this.fill = e),
        (this.thumbMin = n),
        (this.thumbMax = i));
    }
    setupListeners() {
      this.root &&
        (this.minPriceInput.addEventListener('input', this.onInputChange),
        this.maxPriceInput.addEventListener('input', this.onInputChange),
        this.root.addEventListener('pointerdown', this.onPointerDown));
    }
    getPositionFromEvent(t) {
      if (!this.root) return 0;
      const e = this.root.getBoundingClientRect(),
        n = t.clientX - e.left;
      return Math.max(0, Math.min(1, n / e.width));
    }
    handlePointerDown(t) {
      var e, r, s;
      const o = this.getPositionFromEvent(t),
        l = parseFloat(this.minPriceInput.value ?? '0') || 0,
        a =
          parseFloat(this.maxPriceInput.value ?? String(this.maxPrice)) ||
          this.maxPrice,
        c = i(l, this.maxPrice),
        d = i(a, this.maxPrice),
        u =
          null == (r = null == (e = t.target) ? void 0 : e.closest)
            ? void 0
            : r.call(e, '[data-thumb]');
      ((this.draggedThumb = u
        ? u.getAttribute('data-thumb')
        : Math.abs(o - c) <= Math.abs(o - d)
          ? 'min'
          : 'max'),
        null == (s = this.root) || s.setPointerCapture(t.pointerId));
      const p = (t) => {
          if (!this.draggedThumb) return;
          const e = n(this.getPositionFromEvent(t), this.maxPrice),
            i = parseFloat(this.minPriceInput.value ?? '0') || 0,
            r =
              parseFloat(this.maxPriceInput.value ?? String(this.maxPrice)) ||
              this.maxPrice;
          'min' === this.draggedThumb
            ? this.syncInputs(Math.min(e, r - 1), r)
            : this.syncInputs(i, Math.max(e, i + 1));
        },
        h = () => {
          ((this.draggedThumb = null),
            document.removeEventListener('pointermove', p),
            document.removeEventListener('pointerup', h));
        },
        m = n(o, this.maxPrice),
        f = parseFloat(this.minPriceInput.value ?? '0') || 0,
        v =
          parseFloat(this.maxPriceInput.value ?? String(this.maxPrice)) ||
          this.maxPrice;
      ('min' === this.draggedThumb
        ? this.syncInputs(Math.min(m, v - 1), v)
        : this.syncInputs(f, Math.max(m, f + 1)),
        document.addEventListener('pointermove', p),
        document.addEventListener('pointerup', h));
    }
    syncInputs(t, e) {
      ((this.minPriceInput.value = String(Math.round(t))),
        this.minPriceInput.dispatchEvent(new Event('input', { bubbles: !0 })),
        this.minPriceInput.dispatchEvent(new Event('change', { bubbles: !0 })),
        (this.maxPriceInput.value = String(Math.round(e))),
        this.maxPriceInput.dispatchEvent(new Event('input', { bubbles: !0 })),
        this.maxPriceInput.dispatchEvent(new Event('change', { bubbles: !0 })));
    }
    updateFromInputs() {
      if (!this.thumbMin || !this.thumbMax || !this.fill) return;
      const t = parseFloat(this.minPriceInput.value ?? '0') || 0,
        e =
          parseFloat(this.maxPriceInput.value ?? String(this.maxPrice)) ||
          this.maxPrice,
        n = i(t, this.maxPrice),
        r = i(e, this.maxPrice);
      ((this.thumbMin.style.left = 100 * n + '%'),
        this.thumbMin.style.setProperty('--thumb-pos', String(n)),
        (this.thumbMax.style.left = 100 * r + '%'),
        this.thumbMax.style.setProperty('--thumb-pos', String(r)),
        (this.fill.style.left = 100 * n + '%'),
        (this.fill.style.right = 100 * (1 - r) + '%'));
    }
    cleanup() {
      (this.minPriceInput.removeEventListener('input', this.onInputChange),
        this.maxPriceInput.removeEventListener('input', this.onInputChange),
        this.root &&
          (this.root.removeEventListener('pointerdown', this.onPointerDown),
          this.root.parentNode && this.root.parentNode.removeChild(this.root)));
      const t = document.getElementById(this.STYLE_ID);
      t && t.parentNode && t.parentNode.removeChild(t);
    }
    addStyles() {
      if (document.getElementById(this.STYLE_ID)) return;
      const t = document.createElement('style');
      ((t.id = this.STYLE_ID),
        (t.textContent =
          '.crs-hybrid-slider-wrapper {\n  width: 100%;\n}\n\n.crs-hybrid-slider {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 0 6px;\n  margin-top: 32px;\n  touch-action: none;\n  user-select: none;\n}\n\n.crs-hybrid-slider-track {\n  position: relative;\n  flex: 1;\n  height: 6px;\n  overflow: hidden;\n  border-radius: 9999px;\n  background-color: hsl(var(--accent));\n}\n\n.crs-hybrid-slider-fill {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  border-radius: 9999px;\n  background-color: hsl(var(--primary));\n}\n\n.crs-hybrid-slider-thumb {\n  position: absolute;\n  top: 50%;\n  transform: translate(clamp(-100%, calc(-50% + 10px - 20px * var(--thumb-pos, 0.5)), 0%), -50%);\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid hsl(var(--primary-ring));\n  background-color: hsl(var(--primary));\n  cursor: grab;\n  touch-action: none;\n}\n\n.crs-hybrid-slider-thumb:active {\n  cursor: grabbing;\n}\n'),
        document.head.appendChild(t));
    }
  }
  function s() {
    let t = null;
    try {
      t = document.querySelector('header button:has(img[alt="en"])');
    } catch {}
    if (
      (t ||
        (t =
          Array.from(document.querySelectorAll('header button')).find((t) => {
            const e = t.textContent || '';
            return (
              e.includes('EUR') || e.includes('USD') || e.includes('English')
            );
          }) || null),
      t)
    ) {
      const e = t.textContent || '';
      if (e.includes('USD') || e.includes('$')) return 'usd';
      if (e.includes('EUR') || e.includes('€')) return 'eur';
    }
    return 'eur';
  }
  class o {
    constructor() {
      ((this.STYLE_ID = 'price-popup-style'),
        (this.POPUP_CLASS = 'crs-price-filter-popup'),
        (this.FAST_FILTERS = ['10', '20', '30', '50', '100']),
        (this.hybridSlider = null),
        (this.popup = null),
        (this.popupBody = null),
        (this.minPriceInput = null),
        (this.maxPriceInput = null),
        (this.currency = s()),
        this.addStyles(),
        (function (t) {
          let e = s(),
            n = null,
            i = null,
            r = null;
          const o = () => {
            const n = s();
            n !== e && ((e = n), t(n));
          };
          let l = null;
          try {
            l = document.querySelector('header button:has(img[alt="en"])');
          } catch {}
          (l ||
            (l =
              Array.from(document.querySelectorAll('header button')).find(
                (t) => {
                  const e = t.textContent || '';
                  return (
                    e.includes('EUR') ||
                    e.includes('USD') ||
                    e.includes('English')
                  );
                },
              ) || null),
            l &&
              ((n = new MutationObserver(() => {
                setTimeout(o, 300);
              })),
              n.observe(l, {
                childList: !0,
                subtree: !0,
                characterData: !0,
                attributes: !0,
                attributeFilter: ['class', 'data-state'],
              })));
          const a = document.querySelector('#app');
          a &&
            ((i = new MutationObserver(() => {
              setTimeout(o, 200);
            })),
            i.observe(a, { attributes: !0, attributeFilter: ['data-page'] }));
          const c = () => setTimeout(o, 800);
          (document.addEventListener('inertia:navigate', c),
            document.addEventListener('inertia:success', c),
            (r = setInterval(o, 2e3)));
        })((t) => {
          this.currency = t;
        }));
    }
    init(t) {
      if (t) {
        if (t.classList.contains(this.POPUP_CLASS))
          return (
            (this.popup = t),
            this.getElements(),
            void this.initActiveStateFastFilters()
          );
        ((this.popup = t),
          this.popup.classList.add(this.POPUP_CLASS),
          this.getElements(),
          this.addCloseButton(),
          this.addFastFiltersSlider(),
          this.addHybridSlider(),
          this.clearActiveStateInputFiltersByInputChange(),
          this.initActiveStateFastFilters());
      }
    }
    getElements() {
      var t, e, n;
      ((this.popupBody =
        (null == (t = this.popup)
          ? void 0
          : t.querySelector('[role="menu"] > div.flex')) || null),
        (this.minPriceInput =
          (null == (e = this.popup)
            ? void 0
            : e.querySelector('input[placeholder="0"]')) || null),
        (this.maxPriceInput =
          (null == (n = this.popup)
            ? void 0
            : n.querySelector('input[placeholder="1,000"]')) || null));
    }
    addFastFiltersSlider() {
      var t;
      if (this.popupBody) {
        this.popupBody.insertAdjacentHTML(
          'beforebegin',
          `<div class="crs-fast-filters">\n          ${this.FAST_FILTERS.map((t) => `<button\n                class="crs-fast-filter "\n                type="button"\n                data-filter="${t}"\n              >\n                Under ${'eur' === this.currency ? '€' : '$'}${t}\n              </button>`).join('')}\n        </div>`,
        );
        const e =
          null == (t = this.popup)
            ? void 0
            : t.querySelector('.crs-fast-filters');
        null == e ||
          e.addEventListener('click', (t) => {
            const e = t.target;
            if (e.closest('.crs-fast-filter')) {
              const t = e.dataset.filter;
              this.minPriceInput &&
                this.maxPriceInput &&
                ((this.minPriceInput.value = '0'),
                this.minPriceInput.dispatchEvent(
                  new Event('input', { bubbles: !0 }),
                ),
                (this.maxPriceInput.value = t || ''),
                this.maxPriceInput.dispatchEvent(
                  new Event('input', { bubbles: !0 }),
                ),
                this.clearActiveStateFastFilters(),
                e.classList.add('active'));
            }
          });
      }
    }
    clearActiveStateInputFiltersByInputChange() {
      const t = () => {
        var t, e, n;
        const i =
          null == (t = this.popup)
            ? void 0
            : t.querySelectorAll('.crs-fast-filter.active');
        if (!i || 0 === i.length) return;
        const r =
            null == (e = this.popup)
              ? void 0
              : e.querySelector('input[placeholder="0"]'),
          s =
            null == (n = this.popup)
              ? void 0
              : n.querySelector('input[placeholder="1,000"]'),
          o = (null == r ? void 0 : r.value) || '0',
          l = null == s ? void 0 : s.value;
        i.forEach((t) => {
          const e = t.dataset.filter;
          ('0' === o && l === e) || t.classList.remove('active');
        });
      };
      this.popup &&
        (this.popup.addEventListener('input', t),
        this.popup.addEventListener('change', t));
    }
    initActiveStateFastFilters() {
      var t, e, n;
      this.clearActiveStateFastFilters();
      const i = (null == (t = this.minPriceInput) ? void 0 : t.value) || '0',
        r = null == (e = this.maxPriceInput) ? void 0 : e.value;
      if ('0' === i && r) {
        const t =
          null == (n = this.popup)
            ? void 0
            : n.querySelectorAll('.crs-fast-filter');
        null == t ||
          t.forEach((t) => {
            t.dataset.filter === r && t.classList.add('active');
          });
      }
    }
    clearActiveStateFastFilters() {
      var t;
      const e =
        null == (t = this.popup)
          ? void 0
          : t.querySelector('.crs-fast-filters');
      null == e ||
        e.querySelectorAll('.crs-fast-filter').forEach((t) => {
          t.classList.remove('active');
        });
    }
    addCloseButton() {
      var t;
      const e = null == (t = this.popup) ? void 0 : t.querySelector('h4');
      if (e) {
        e.insertAdjacentHTML(
          'afterend',
          '<button class="crs-price-popup-close">\n          <i class="fa-solid fa-xmark"></i>\n        </button>',
        );
        const t = e.nextElementSibling;
        null == t ||
          t.addEventListener('click', () => {
            const t = new KeyboardEvent('keydown', {
              key: 'Escape',
              bubbles: !0,
              cancelable: !0,
            });
            document.dispatchEvent(t);
          });
      }
    }
    addHybridSlider() {
      var t, e;
      if (!this.minPriceInput || !this.maxPriceInput) return;
      const n =
        null == (t = this.popup)
          ? void 0
          : t.querySelector('[data-slider-impl]');
      if (!n) return;
      const i = n.querySelector('[aria-label="Maximum"]'),
        s = i ? parseInt(i.getAttribute('aria-valuemax') ?? '1000', 10) : 1e3,
        o = document.createElement('div');
      ((o.className = 'crs-hybrid-slider-wrapper'),
        null == (e = n.parentNode) || e.insertBefore(o, n),
        (n.style.display = 'none'));
      const l = n.nextElementSibling;
      (l && (l.style.opacity = '0'),
        (this.hybridSlider = new r({
          container: o,
          minPriceInput: this.minPriceInput,
          maxPriceInput: this.maxPriceInput,
          maxPrice: s,
        })),
        this.hybridSlider.init());
    }
    cleanup() {
      if (this.popup) {
        this.popup.classList.remove(this.POPUP_CLASS);
        const t = this.popup.querySelector('.crs-fast-filters');
        t && t.remove();
        const e = this.popup.querySelector('.crs-price-popup-close');
        (e && e.remove(),
          this.hybridSlider &&
            (this.hybridSlider.cleanup(), (this.hybridSlider = null)));
        const n = this.popup.querySelector('.crs-hybrid-slider-wrapper');
        n && n.remove();
        const i = this.popup.querySelector('[data-slider-impl]');
        (i && (i.style.display = ''), (this.popup = null));
      }
    }
    addStyles() {
      if (document.getElementById(this.STYLE_ID)) return;
      const t = document.createElement('style');
      ((t.id = this.STYLE_ID),
        (t.textContent =
          ".crs-price-filter-popup {\n  top: auto !important;\n  bottom: 0 !important;\n\n  animation-name: slideFromBottomCustom;\n  transition: transform 0.5s cubic-bezier(0.32, 0.72, 0, 1);\n  animation-duration: 0.5s;\n  animation-timing-function: cubic-bezier(0.32, 0.72, 0, 1);\n}\n\n.crs-price-filter-popup::after {\n  position: fixed;\n  bottom: 100%;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #00000080;\n  content: '';\n}\n\n.crs-price-filter-popup>div {\n  width: 100vw !important;\n}\n\ndiv:has(> .crs-price-popup-close) {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.crs-price-popup-close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: hsl(var(--secondary-light));\n}\n\n.crs-fast-filters {\n  display: flex;\n  gap: 12px;\n  width: 100%;\n  padding-block: 14px;\n  scroll-snap-type: x mandatory;\n  overflow-x: auto;\n  scrollbar-width: none;\n  border-bottom: 1px solid hsl(var(--field-ring));\n}\n\n.crs-fast-filter::webkit-scrollbar {\n  display: none;\n}\n\n.crs-fast-filter {\n  flex: none;\n  max-height: 40px;\n  padding: 12px 8px;\n  border-radius: 9999px;\n  background: hsl(var(--secondary-light));\n  box-shadow:\n    0 0 0 0 #fff inset,\n    0 0 0 0 rgba(156, 163, 175, 0.2) inset;\n  color: hsl(var(--foreground) / 0.9);\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 16px;\n}\n\n.crs-fast-filter:first-child {\n  margin-left: 16px;\n}\n\n.crs-fast-filter:last-child {\n  margin-right: 16px;\n}\n\n.crs-fast-filter.active {\n  background: hsl(var(--primary));\n  border: 1px solid rgba(96, 165, 250, 0.30);\n}\n\n@keyframes slideFromBottomCustom {\n  0% {\n    transform: translate3d(0, var(--initial-transform, 100%), 0);\n  }\n\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}"),
        document.head.appendChild(t));
    }
  }
  class l {
    constructor() {
      ((this.STYLE_ID = 'price-filter-style'),
        (this.CONTROL_PRICE_SELECTOR = 'button#price-open'),
        (this.CONTROL_FILTER_SELECTOR =
          'button.bg-secondary-light:has(.fa-bars-filter)'),
        (this.NEW_PRICE_BUTTON_CLASS = 'crs-price-btn'),
        (this.hybridSlider = null),
        (this.cleanupListeners = []),
        (this.filterPopupUnsubscribe = null),
        (this.pricePopup = new o()),
        (this.controlFilterButton = null),
        (this.controlPriceButton = null),
        (this.filterBlock = null),
        (this.fixedFilterBlock = null));
    }
    async init() {
      (this.addStyles(),
        this.getElements(),
        this.addNewPriceFilterButtons(),
        this.watchForFiltersPopup());
    }
    getElements() {
      var t, e, n, i, r;
      ((this.controlFilterButton = document.querySelector(
        this.CONTROL_FILTER_SELECTOR,
      )),
        (this.controlPriceButton = document.querySelector(
          this.CONTROL_PRICE_SELECTOR,
        )),
        null ==
          (e =
            null == (t = this.controlFilterButton)
              ? void 0
              : t.closest('.mt-6')) || e.classList.add('crs-filter-block'),
        (this.filterBlock =
          null == (n = this.controlFilterButton)
            ? void 0
            : n.closest('.crs-filter-block')),
        (this.fixedFilterBlock =
          null == (i = this.filterBlock)
            ? void 0
            : i.querySelector('.fixed.top-0')),
        null == (r = this.fixedFilterBlock) ||
          r.classList.add('crs-fixed-filter-block'));
    }
    watchForFiltersPopup() {
      this.filterPopupUnsubscribe = (function (t, e) {
        const n = 'div[data-vaul-drawer][role="dialog"]',
          i = (t) => {
            var e;
            const n = t.querySelector('h2');
            return (
              null !== n &&
              'Filters' === (null == (e = n.textContent) ? void 0 : e.trim())
            );
          };
        document.querySelectorAll(n).forEach((e) => {
          i(e) && t(e);
        });
        const r = new MutationObserver((r) => {
          for (const s of r)
            'childList' === s.type &&
              (s.addedNodes.length > 0 &&
                s.addedNodes.forEach((e) => {
                  if (e instanceof HTMLElement)
                    if (e.matches(n) && i(e)) t(e);
                    else if (e.firstElementChild) {
                      const r = e.querySelectorAll(n);
                      r.length > 0 &&
                        r.forEach((e) => {
                          i(e) && t(e);
                        });
                    }
                }),
              e &&
                s.removedNodes.length > 0 &&
                s.removedNodes.forEach((t) => {
                  if (t instanceof HTMLElement)
                    if (t.matches(n) && i(t)) e();
                    else if (t.firstElementChild) {
                      const r = t.querySelectorAll(n);
                      r.length > 0 &&
                        r.forEach((t) => {
                          i(t) && e();
                        });
                    }
                }));
        });
        return (
          r.observe(document.body, { childList: !0, subtree: !0 }),
          () => r.disconnect()
        );
      })(
        async (n) => {
          var i, s, o, l;
          (n.classList.add('crs-control-filter-popup'),
            'true' !==
              (null == (i = this.controlPriceButton)
                ? void 0
                : i.getAttribute('aria-expanded')) &&
              (null == (s = this.controlPriceButton) || s.click()));
          const a = await (async () => {
            var n, i;
            try {
              return await Promise.race([
                t('[data-reka-popper-content-wrapper]'),
                new Promise((t, e) =>
                  window.setTimeout(() => e(new Error('timeout')), 200),
                ),
              ]);
            } catch (r) {
              return (
                e('Popup not found within 200ms, retrying click...', 'warn'),
                'true' !==
                  (null == (n = this.controlPriceButton)
                    ? void 0
                    : n.getAttribute('aria-expanded')) &&
                  (null == (i = this.controlPriceButton) || i.click()),
                await t('[data-reka-popper-content-wrapper]')
              );
            }
          })();
          if (!a) return;
          a.classList.contains('crs-price-filter-popup') ||
            ((a.style.display = 'none'), (a.style.opacity = '0'));
          const c =
              (null == a
                ? void 0
                : a.querySelector('input[placeholder="0"]')) || null,
            d =
              (null == a
                ? void 0
                : a.querySelector('input[placeholder="1,000"]')) || null,
            u = null == a ? void 0 : a.querySelector('[data-slider-impl]');
          if (!u) return;
          const p = u.querySelector('[aria-label="Maximum"]'),
            h = p
              ? parseInt(p.getAttribute('aria-valuemax') ?? '1000', 10)
              : 1e3,
            m =
              (null == n
                ? void 0
                : n.querySelector('.mb-4:has(.fa-dollar-sign)')) || null;
          if (!m || !c || !d) return;
          if (
            (m.classList.add('crs-control-filter-popup-container'),
            m.querySelector('.crs-filter-price-inputs') ||
              m.querySelector('.crs-hybrid-slider'))
          )
            return;
          const f = (
              null ==
              (l =
                null == (o = document.querySelector('.crs-filter-block'))
                  ? void 0
                  : o.textContent)
                ? void 0
                : l.includes('€')
            )
              ? '€'
              : '$',
            v = (function (t, e, n, i) {
              return `<div class="flex gap-x-3 justify-between items-end crs-filter-price-inputs">\n    <div data-v-6dafae3e="" class="w-full">\n      <div data-v-6dafae3e="" class="flex justify-between mb-1">\n        <label data-v-6dafae3e="" class="flex items-center gap-2 text-sm font-medium leading-6 text-foreground/90">From</label>\n      </div>\n      <div data-v-6dafae3e="" class="relative rounded-md shadow-sm">\n        <div data-v-6dafae3e="" class="absolute top-0 bottom-0.5 left-0 flex items-center pl-3 pointer-events-none">\n          <span data-v-6dafae3e="" class="mt-0.5 font-semibold text-muted-foreground sm:text-sm">${n}</span>\n        </div>\n        <input data-v-6dafae3e="" inputmode="numeric" pattern="[0-9]+(\\.[0-9][0-9]?)?" type="number" min="0" max="${e}" step="0.01" class="block w-full border-0 rounded-md shadow-sm sm:text-sm disabled:opacity-50 disabled:pointer-events-none bg-field ring-1 ring-field-ring hover:ring-field-ring-hover focus:ring-field-ring-hover text-field-foreground placeholder:text-muted-foreground py-1.5 pl-7 hide-arrows py-1.5 pr-3" placeholder="0" aria-describedby="price-currency" oninput="if(this.value < 0) this.value = 0; if(this.value > ${e}) this.value = ${e};" value="${t}">\n      </div>\n    </div>\n    <span class="pb-2"> - </span>\n    <div data-v-6dafae3e="" class="w-full">\n      <div data-v-6dafae3e="" class="flex justify-between mb-1">\n        <label data-v-6dafae3e="" class="flex items-center gap-2 text-sm font-medium leading-6 text-foreground/90">To</label>\n      </div>\n      <div data-v-6dafae3e="" class="relative rounded-md shadow-sm">\n        <div data-v-6dafae3e="" class="absolute top-0 bottom-0.5 left-0 flex items-center pl-3 pointer-events-none">\n          <span data-v-6dafae3e="" class="mt-0.5 font-semibold text-muted-foreground sm:text-sm">${n}</span>\n        </div>\n        <input data-v-6dafae3e="" inputmode="numeric" pattern="[0-9]+(\\.[0-9][0-9]?)?" type="number" min="0" max="${e}" step="0.01" class="block w-full border-0 rounded-md shadow-sm sm:text-sm disabled:opacity-50 disabled:pointer-events-none bg-field ring-1 ring-field-ring hover:ring-field-ring-hover focus:ring-field-ring-hover text-field-foreground placeholder:text-muted-foreground py-1.5 pl-7 hide-arrows py-1.5 pr-3" placeholder="1,000" aria-describedby="price-currency" oninput="if(this.value < 0) this.value = 0; if(this.value > ${e}) this.value = ${e};" value="${i}">\n      </div>\n    </div>\n  </div>`;
            })(c.value || '0', h, f, d.value),
            b = m.querySelector('[data-slider-impl]');
          b && b.insertAdjacentHTML('afterend', v);
          const y = m.querySelector(
              '.crs-filter-price-inputs input[placeholder="0"]',
            ),
            g = m.querySelector(
              '.crs-filter-price-inputs input[placeholder="1,000"]',
            );
          if (y && g) {
            const t = (t) => {
                ((c.value = t.target.value),
                  c.dispatchEvent(new Event('input', { bubbles: !0 })));
              },
              e = (t) => {
                ((d.value = t.target.value),
                  d.dispatchEvent(new Event('input', { bubbles: !0 })));
              },
              n = (t) => {
                y.value = t.target.value;
              },
              i = (t) => {
                g.value = t.target.value;
              };
            (y.addEventListener('input', t),
              g.addEventListener('input', e),
              c.addEventListener('input', n),
              d.addEventListener('input', i),
              this.cleanupListeners.push(() => {
                (y.removeEventListener('input', t),
                  g.removeEventListener('input', e),
                  c.removeEventListener('input', n),
                  d.removeEventListener('input', i));
              }));
          }
          ((this.hybridSlider = new r({
            container:
              null == y ? void 0 : y.closest('.crs-filter-price-inputs'),
            minPriceInput: c,
            maxPriceInput: d,
            maxPrice: h,
            position: 'afterend',
          })),
            this.hybridSlider.init());
        },
        () => {
          const t = document.querySelector(
            '[data-reka-popper-content-wrapper]',
          );
          t &&
            ((t.style.display = ''),
            setTimeout(() => {
              t.style.opacity = '1';
            }, 100));
        },
      );
    }
    async addNewPriceFilterButtons() {
      var e, n, i;
      if (
        document.querySelector(`.${this.NEW_PRICE_BUTTON_CLASS}`) ||
        !this.controlPriceButton
      )
        return;
      const r = `<button type="button"\n      class="items-center justify-center transition-colors focus:outline focus:outline-offset-2 focus-visible:outline outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden font-medium active:translate-y-px whitespace-nowrap bg-secondary-light hover:bg-secondary-light-hover text-secondary-light-foreground focus:outline-secondary py-2 px-4 text-sm rounded-md block h-10 sm:hidden ${this.NEW_PRICE_BUTTON_CLASS}"\n    >\n      <i\n        class="text-base fa-regular text-muted-foreground group-hover:text-foreground fa-dollar-sign"\n      ></i>\n      Price\n    </button>`;
      (null == (e = this.controlFilterButton) ||
        e.insertAdjacentHTML('beforebegin', r),
        null ==
          (i =
            null == (n = this.fixedFilterBlock)
              ? void 0
              : n.querySelector('button')) ||
          i.insertAdjacentHTML('beforebegin', r),
        document
          .querySelectorAll(`.${this.NEW_PRICE_BUTTON_CLASS}`)
          .forEach((e) => {
            null == e ||
              e.addEventListener('click', async () => {
                var e;
                null == (e = this.controlPriceButton) || e.click();
                const n = await t('[data-reka-popper-content-wrapper]');
                n && this.pricePopup.init(n);
              });
          }));
    }
    cleanup() {
      var t;
      (this.filterPopupUnsubscribe &&
        (this.filterPopupUnsubscribe(), (this.filterPopupUnsubscribe = null)),
        this.cleanupListeners.forEach((t) => t()),
        (this.cleanupListeners = []),
        this.hybridSlider &&
          (this.hybridSlider.cleanup(), (this.hybridSlider = null)),
        this.filterBlock &&
          this.filterBlock
            .querySelectorAll('.crs-filter-price-inputs')
            .forEach((t) => t.remove()),
        this.controlFilterButton &&
          (null == (t = this.controlFilterButton.closest('.mt-6')) ||
            t.classList.remove('crs-filter-block')),
        this.fixedFilterBlock &&
          this.fixedFilterBlock.classList.remove('crs-fixed-filter-block'));
      const e = document.querySelectorAll(`.${this.NEW_PRICE_BUTTON_CLASS}`);
      (console.log('newPriceButtons', e),
        e.forEach((t) => t.remove()),
        this.pricePopup.cleanup());
    }
    addStyles() {
      if (document.getElementById(this.STYLE_ID)) return;
      const t = document.createElement('style');
      ((t.id = this.STYLE_ID),
        (t.textContent =
          'div:has(button.bg-secondary-light .fa-bars-filter) {\n  flex-wrap: nowrap;\n}\n\ndiv:has(> button.crs-price-btn)> :is(button, div:has(input)) {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\ndiv:has(> button.crs-price-btn) button {\n  min-height: 40px;\n  padding: 0;\n}\n\ndiv:has(> button.crs-price-btn) input[type="search"]::placeholder {\n  font-size: 14px;\n}\n\n.crs-filter-block>.fixed:has(.fa-bars-filter) {\n  top: auto !important;\n  bottom: 0 !important;\n  animation-name: slideFromBottom;\n}\n\n/* Override leave animation: slide down instead of up */\n.crs-filter-block>.fixed.fade-leave-from:has(.fa-bars-filter) {\n  transform: translateY(0);\n}\n\n.crs-filter-block>.fixed.fade-leave-active:has(.fa-bars-filter) {\n  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);\n}\n\n.crs-filter-block>.fixed.fade-leave-to:has(.fa-bars-filter) {\n  transform: translateY(100%);\n}\n\n.crs-filter-block:has(input:focus) button.bg-secondary-light:has(i) {\n  display: none;\n}\n\n.crs-filter-block div:has(> input:focus) {\n  width: 100%;\n}\n\n.crs-fixed-filter-block :is(input, button) {\n  margin: 0;\n  display: block;\n  align-items: center;\n  padding-block: 0;\n  height: 40px;\n}\n\n.crs-fixed-filter-block button {\n  background: hsl(var(--secondary-ring));\n}\n\n.crs-fixed-filter-block input+div.absolute {\n  margin-top: 0;\n}\n\n.crs-fixed-filter-block div:has(> button) {\n  gap: 8px;\n}\n\n/* popular searches */\n.crs-filter-block>div.overflow-hidden {\n  overflow-x: auto;\n  flex-wrap: nowrap;\n  scrollbar-width: none;\n}\n\n.crs-filter-block>div.overflow-hidden::-webkit-scrollbar {\n  display: none;\n}\n\n.crs-filter-block>div.overflow-hidden>p {\n  display: block;\n\n}\n\n.crs-filter-block>div.overflow-hidden .overflow-x-auto {\n  overflow-x: visible !important;\n}\n\n.crs-filter-block>div.overflow-hidden>div.overflow-hidden {\n  flex: none;\n}\n\n.crs-filter-block>div.overflow-hidden>div.overflow-hidden .scroll-smooth button {\n  background: none;\n  color: #7ea5f5;\n}\n\nhtml.light .crs-filter-block>div.overflow-hidden>div.overflow-hidden .scroll-smooth button {\n  color: #245feb;\n}\n\n.crs-filter-block>div.overflow-hidden>div.overflow-hidden>button {\n  display: none !important;\n}\n\n.crs-control-filter-popup-container [data-slider-impl] {\n  display: none;\n}\n\n.crs-control-filter-popup-container .crs-hybrid-slider+div span {\n  border: none;\n  background: none;\n  box-shadow: none;\n}\n\n.crs-control-filter-popup-container .crs-hybrid-slider+div {\n  display: none;\n}'),
        document.head.appendChild(t));
    }
  }
  let a = '',
    c = null;
  function d() {
    return window.location.href;
  }
  function u() {
    const t = d();
    t !== a &&
      c &&
      ((a = t),
      (function (t) {
        let e = !1;
        const n = () => {
            e ||
              ((e = !0),
              r && r.disconnect(),
              document.removeEventListener('inertia:success', n),
              document.removeEventListener('inertia:navigate', n),
              requestAnimationFrame(() => setTimeout(t, 50)));
          },
          i = document.querySelector('#app');
        let r = null;
        (i &&
          ((r = new MutationObserver(n)),
          r.observe(i, { attributes: !0, attributeFilter: ['data-page'] })),
          document.addEventListener('inertia:success', n),
          document.addEventListener('inertia:navigate', n),
          setTimeout(n, 800));
      })(() => {
        if (d() === t)
          try {
            c();
          } catch (e) {
            console.error('[SPA Router] Route change handler error:', e);
          }
      }));
  }
  class p {
    constructor(t = 80) {
      ((this.STYLE_ID = 'category-menu-style'),
        (this.categoryMenu = null),
        (this.scrollHandler = () => this.updateVisibility()),
        (this.scrollThreshold = t),
        this.addStyles());
    }
    init() {
      (this.getElements(), this.setupScrollListener());
    }
    getElements() {
      var t;
      const e = window.location.pathname;
      ((this.categoryMenu = document.querySelector(
        `.fixed:has(a[href*="${e}"])`,
      )),
        null == (t = this.categoryMenu) || t.classList.add('crs-category-menu'),
        this.updateVisibility());
    }
    updateVisibility() {
      if (!this.categoryMenu) return;
      const t = window.scrollY > this.scrollThreshold;
      this.categoryMenu.classList.toggle('crs-category-menu-visible', t);
    }
    setupScrollListener() {
      (window.removeEventListener('scroll', this.scrollHandler),
        window.addEventListener('scroll', this.scrollHandler, { passive: !0 }));
    }
    cleanup() {
      (window.removeEventListener('scroll', this.scrollHandler),
        this.categoryMenu &&
          this.categoryMenu.classList.remove(
            'crs-category-menu',
            'crs-category-menu-visible',
          ));
    }
    addStyles() {
      if (document.getElementById(this.STYLE_ID)) return;
      const t = document.createElement('style');
      ((t.id = this.STYLE_ID),
        (t.textContent =
          '.crs-category-menu {\r\n  top: 0 !important;\r\n  bottom: auto !important;\r\n  transform: translateY(-100%);\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  pointer-events: none;\r\n  max-height: 70px;\r\n  transition:\r\n    transform 0.3s cubic-bezier(0.32, 0.72, 0, 1),\r\n    opacity 0.3s ease,\r\n    visibility 0.3s ease;\r\n    z-index: 9999;\r\n}\r\n\r\n.crs-category-menu.crs-category-menu-visible {\r\n  transform: translateY(0);\r\n  opacity: 1;\r\n  visibility: visible;\r\n  pointer-events: auto;\r\n}\r\n'),
        document.head.appendChild(t));
    }
  }
  let h = null;
  const m = {
    'target-pages': [
      '/fortnite',
      '/steal-a-brainrot',
      '/valorant',
      '/grand-theft-auto-v',
      '/call-of-duty',
      '/league-of-legends',
      '/clash-of-clans',
      '/brawl-stars',
      '/pubg-mobile',
      '/raid-shadow-legends',
      '/roblox',
    ],
  };
  new (class {
    constructor() {
      ((this.priceFilter = new l()),
        (this.categoryMenu = new p()),
        (this.deviceType = window.innerWidth < 640 ? 'mobile' : 'desktop'),
        this.init());
    }
    init() {
      var t;
      'mobile' === this.deviceType &&
        ((t = () => {
          m['target-pages'].some((t) => window.location.pathname.startsWith(t))
            ? (e('initChanges'), this.initChanges())
            : (e('cleanup'),
              h && (h.disconnect(), (h = null)),
              this.priceFilter.cleanup(),
              this.categoryMenu.cleanup());
        }),
        c &&
          console.warn(
            '[SPA Router] initRouteWatcher called multiple times, overwriting previous callback',
          ),
        (c = t),
        (a = d()),
        (function () {
          window.addEventListener('popstate', u);
          const t = history.pushState.bind(history),
            e = history.replaceState.bind(history);
          ((history.pushState = function (...e) {
            (t(...e), requestAnimationFrame(u));
          }),
            (history.replaceState = function (...t) {
              (e(...t), requestAnimationFrame(u));
            }),
            document.body.addEventListener(
              'click',
              () => requestAnimationFrame(u),
              !0,
            ));
        })(),
        requestAnimationFrame(() => {
          null == c || c();
        }));
    }
    initChanges() {
      !(function (t, e = '#app') {
        h && (h.disconnect(), (h = null));
        let n = !1;
        function i() {
          n ||
            ((n = !0),
            t(),
            setTimeout(() => {
              n = !1;
            }, 50));
        }
        i();
        const r = document.querySelector(e) || document.body;
        ((h = new MutationObserver((t) => {
          n ||
            (t.some((t) => t.removedNodes.length > 0) &&
              (document.querySelector('.crs-price-btn, .crs-category-menu') ||
                i()));
        })),
          h.observe(r, { childList: !0, subtree: !0 }));
      })(() => {
        (this.priceFilter.init(), this.categoryMenu.init());
      });
    }
    addStyles() {
      const t = document.createElement('style');
      ((t.textContent = ''), document.head.appendChild(t));
    }
  })();
})();
