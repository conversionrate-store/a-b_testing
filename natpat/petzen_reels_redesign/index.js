!(function () {
  'use strict';
  const startLog = ({ name, dev }) => {
    console.log(
      `%c EXP: ${name} (DEV: ${dev})`,
      `background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`,
    );
  };
  startLog({ name: 'Video block Redesign', dev: 'OS' });

  const clarityInterval = (name) => {
    let int = setInterval(function () {
      if (typeof window.clarity == 'function') {
        clearInterval(int);
        window.clarity('set', name, 'variant_1');
      }
    }, 1000);
  };
  clarityInterval('exp_video_redesign');

  const n = (n) =>
      new Promise((e) => {
        const t = document.querySelector(n);
        t && e(t);
        const i = new MutationObserver(() => {
          const t = document.querySelector(n);
          t && (e(t), i.disconnect());
        });
        i.observe(document.documentElement, { childList: !0, subtree: !0 });
      }),
    e =
      'https://conversionrate-store.github.io/a-b_images/natpat/video/reels_2',
    t = [
      {
        previewImageSrc: `${e}/preview_1.gif`,
        videoSrc: `${e}/reels_1.mp4`,
        description:
          'She just curled up and <br> relaxed the moment we <br> left. Amazing!',
      },
      {
        previewImageSrc: `${e}/preview_2.gif`,
        videoSrc: `${e}/reels_2.mp4`,
        description:
          'The calmest grooming <br> session my cat has ever <br> had!',
      },
      {
        previewImageSrc: `${e}/preview_3.gif`,
        videoSrc: `${e}/reels_3.mp4`,
        description:
          'No panic during the <br> storm - for the first <br> time ever!',
      },
    ];
  class i {
    constructor() {
      ((this.elements = null),
        (this.slider = null),
        (this.resumeTimeouts = new WeakMap()),
        (this.videoDurations = new WeakMap()),
        (this.videoVisibilityObserver = null),
        this.init());
    }
    async init() {
      (await this.getTargetSection(),
        this.addStyles(),
        await this.stopAutoSlide(),
        this.changeCardItems(),
        this.addActionButton(),
        this.mobileSliderConfigure());
    }
    changeCardItems() {
      this.elements && this.elements.forEach((n) => this.updateCardItems(n));
    }
    async stopAutoSlide() {
      ((this.slider = await n('#in-action-slider .slick-initialized')),
        this.slider && this.slider.slick.slickPause());
    }
    pauseSlider() {
      this.slider && this.slider.slick.slickPause();
    }
    resumeSlider() {
      this.slider && this.slider.slick.slickPlay();
    }
    observeVideoVisibility(n) {
      'IntersectionObserver' in window &&
        (this.videoVisibilityObserver ||
          (this.videoVisibilityObserver = new IntersectionObserver(
            (n) => {
              n.forEach((n) => {
                const e = n.target;
                (n.isIntersecting && n.intersectionRatio >= 0.35) ||
                  e.paused ||
                  e.ended ||
                  (e.pause(), this.stopAutoSlide());
              });
            },
            { threshold: [0, 0.35, 1] },
          )),
        this.videoVisibilityObserver.observe(n));
    }
    setupVideoAutoPause(n) {
      if (n._crsVideoHandled) return;
      ((n._crsVideoHandled = !0), this.observeVideoVisibility(n));
      const e = n.closest('.card-box'),
        t = n.closest('.media-box'),
        i = null == e ? void 0 : e.querySelectorAll(':scope > img, :scope > p'),
        o = () => {
          if (!t) return;
          const e = n.paused || n.ended;
          t.classList.toggle('crs-paused', e);
        };
      (o(),
        n.addEventListener('loadedmetadata', () => {
          const e = Number.isFinite(n.duration) ? n.duration : 0;
          (this.videoDurations.set(n, e), o());
        }),
        n.addEventListener('play', () => {
          (this.pauseSlider(), o());
          const e = this.resumeTimeouts.get(n);
          e && window.clearTimeout(e);
          const t = this.videoDurations.get(n) ?? 0;
          if (t > 0) {
            const e = window.setTimeout(() => {
              n.ended && this.resumeSlider();
            }, 1e3 * t);
            this.resumeTimeouts.set(n, e);
          }
          i &&
            i.forEach((n) => {
              n.style.display = 'none';
            });
        }),
        n.addEventListener('pause', () => {
          o();
          const t = null == e ? void 0 : e.querySelector('button .play');
          (n.ended || this.pauseSlider(),
            i &&
              i.forEach((n) => {
                n.style.display = '';
              }),
            (null == t ? void 0 : t.classList.contains('card-hidden')) &&
              t.classList.remove('card-hidden'));
        }),
        n.addEventListener('ended', () => {
          (o(),
            this.resumeSlider(),
            i &&
              i.forEach((n) => {
                n.style.display = '';
              }),
            this.stopAutoSlide());
        }));
    }
    setVideoSource(n, e) {
      n.src = e;
      const t = n.querySelector('source');
      (t && (t.src = e), n.load());
    }
    updateCardItems(e) {
      e.querySelectorAll('.card-item').forEach((e, i) => {
        var o, s, r;
        const a = e.querySelector('.card-gif'),
          c = e.querySelector('video'),
          d = e.querySelector('.card-box > p'),
          l = e.querySelector('.fullscreen-btn');
        a &&
          c &&
          d &&
          ((a.src = (null == (o = t[i]) ? void 0 : o.previewImageSrc) || ''),
          this.setVideoSource(
            c,
            (null == (s = t[i]) ? void 0 : s.videoSrc) || '',
          ),
          (d.innerHTML = `${(null == (r = t[i]) ? void 0 : r.description) || d.textContent}`),
          this.setupVideoAutoPause(c),
          l &&
            l.addEventListener('click', async () => {
              var e;
              const o = await n('#fullscreen-video');
              o &&
                (c.pause(),
                document.querySelectorAll('video').forEach((n) => {
                  n !== o && n.pause();
                }),
                this.setVideoSource(
                  o,
                  (null == (e = t[i]) ? void 0 : e.videoSrc) || '',
                ),
                setTimeout(() => {
                  o.play();
                }, 100));
            }));
      });
    }
    async getTargetSection() {
      this.elements = [
        await n('#in-action-cards'),
        await n('#in-action-slider'),
      ];
    }
    addActionButton() {
      var n, e;
      const t = document.querySelector('#in-action-cards');
      if (
        t &&
        !(null == (n = t.closest('.row'))
          ? void 0
          : n.querySelector('.crs-action-link'))
      ) {
        null == (e = t.closest('.row')) ||
          e.insertAdjacentHTML(
            'beforeend',
            '\n        <div class="col-lg-12">\n          <div class="crs-button-wrapper">\n            <a href="#lptrPurchase" class="lp-pet-zen--btn scroll-to-checkout crs-action-link">Get Zen Stickers Now</a>\n          </div>\n        </div>\n      ',
          );
        const n = document.querySelector(
          '.crs-button-wrapper .crs-action-link',
        );
        n &&
          n.addEventListener('click', (n) => {
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
              'exp_video_click',
              'Get Zen Stickers Now',
              'click',
              'Watch PetZen Patches in Action',
            );
          });
      }
    }
    mobileSliderConfigure() {
      if (window.innerWidth > 768) return;
      const n =
        this.slider ??
        document.querySelector('#in-action-slider .slick-initialized');
      if (!n) return;
      const e = n.slick;
      if ('function' == typeof (null == e ? void 0 : e.slickSetOption)) {
        (e.slickSetOption('variableWidth', !0, !1),
          e.slickSetOption('slidesToShow', 1, !1),
          e.slickSetOption('centerMode', !0, !1),
          e.setPosition());
        const t = () => {
            const e = n.querySelector('.slick-list'),
              t = n.querySelector(
                ".slick-slide[data-slick-index='0']:not(.slick-cloned)",
              );
            if (!e || !t) return;
            const i = window.getComputedStyle(e),
              o = Number.parseFloat(i.paddingLeft || '0') || 0,
              s = (e.clientWidth - t.clientWidth) / 2,
              r = Math.max(0, s - o);
            n.style.setProperty('--crs-first-slide-offset', `${r}px`);
          },
          i = (e) => {
            n.classList.toggle('crs-first-slide-active', 0 === e);
          },
          o = window.jQuery || window.$;
        ('function' == typeof o &&
          (o(n).on('beforeChange', (n, e, t, o) => {
            i(Number(o ?? 0));
          }),
          o(n).on('afterChange', (n, e, o) => {
            (i(Number(o ?? 0)), t());
          })),
          window.addEventListener('resize', t),
          t(),
          i(Number(e.currentSlide ?? 0)));
      }
    }
    addStyles() {
      const n = document.createElement('style');
      ((n.textContent =
        ".in-action {\n  margin-bottom: 50px;\n  padding-top: 56px;\n  background: #1f50c9 !important;\n  padding-bottom: 48px;\n  overflow: hidden;\n}\n\n@media (max-width: 768px) {\n  .in-action {\n    margin-bottom: 32px;\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  #OurStory .custom-pink-wave {\n    display: none;\n  }\n}\n.in-action h3 {\n  margin-top: 0;\n  margin-bottom: 48px;\n  font-size: 44px;\n  color: #fff;\n  text-wrap: pretty;\n}\n\n@media (max-width: 768px) {\n  .in-action h3 {\n    margin-bottom: 32px;\n    font-size: 32px;\n    line-height: 43px;\n  }\n\n  .in-action div:has(> h3) {\n    padding: 0;\n  }\n}\n.in-action.action-card-container {\n  margin-bottom: 48px;\n}\n\n.in-action .action-card-container .card-inner {\n  display: flex;\n  justify-content: space-between;\n}\n\n.in-action .card-item {\n  padding: 12px;\n}\n\n@media (max-width: 768px) {\n  .in-action .card-item {\n    padding: 0;\n  }\n}\n\n.in-action .card-box {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 32px;\n  padding: 0 !important;\n  width: max-content;\n}\n\n.in-action .card-box .media-box {\n  grid-column: 1 / -1;\n  grid-row: 1 / -1;\n  display: flex;\n  align-items: flex-start;\n  width: 303px;\n  max-width: none;\n  height: 374px;\n  border-radius: 16px;\n  overflow: hidden;\n}\n\n.in-action .card-box .media-box.crs-paused::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0.4) 24.13%,\n    rgba(0, 0, 0, 0) 34.15%\n  );\n}\n\n.in-action .card-box .media-box :is(img, video) {\n  width: 100%;\n  max-width: none !important;\n  object-fit: cover;\n}\n\n.in-action .card-box > p {\n  position: absolute;\n  grid-column: 1 / 2;\n  grid-row: 1 / -1;\n  top: 13px;\n  left: 13px;\n  text-align: left !important;\n  line-height: 24px !important;\n  font-size: 22px !important;\n  font-weight: 700 !important;\n  line-height: 26px !important; /* 118.182% */\n  letter-spacing: 0.6px !important;\n}\n\n.in-action .card-box > img {\n  margin: 0 !important;\n  position: absolute;\n  grid-column: 2 / 3;\n  grid-row: 1 / -1;\n  top: 6px;\n  right: 14px;\n  width: 32px;\n  height: 32px;\n}\n\n.in-action .action-card-container .card-box button .play {\n  background-color: #fff;\n}\n\n.in-action .action-card-container .card-box button .play svg {\n  margin-left: 4px;\n}\n\n.in-action .action-card-container .card-box button .play svg path {\n  fill: #000;\n}\n\n.in-action .crs-button-wrapper {\n  display: flex;\n  justify-content: center;\n}\n\n.in-action .crs-button-wrapper a {\n  margin-top: 0;\n}\n\n#in-action-slider {\n  margin-bottom: 32px;\n}\n#in-action-slider .slider-track {\n  margin-bottom: 0 !important;\n}\n#in-action-slider .slick-list {\n  padding-inline: 12px !important;\n  /* padding-inline: 12px; */\n}\n.in-action.lp-tr--mobile .container {\n  padding-inline: 12px !important;\n}\n\n.in-action.lp-tr--mobile .lp-pet-zen--secondary-btn {\n  opacity: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-height: 54px;\n}\ndiv:has(> #in-action-slider) {\n  padding: 0 !important;\n}\n\n#in-action-slider .slick-slide {\n  width: 303px !important;\n  margin: 0 !important;\n}\n\n@media (max-width: 768px) {\n  #in-action-slider .slick-slider .slick-slide {\n    transition: transform 220ms ease-out;\n    will-change: transform;\n  }\n}\n#in-action-slider .slick-slider.crs-first-slide-active .slick-slide {\n  transform: translateX(calc(var(--crs-first-slide-offset, 0px) * -1));\n}\n\n#in-action-slider .slick-slide + .slick-slide {\n  margin-left: 16px !important;\n}\n#in-action-slider .slick-dots {\n  position: static;\n  margin-top: 32px;\n  margin-bottom: 0 !important;\n}\n#in-action-slider .slick-dots li button::before {\n  color: #fff;\n  opacity: 1;\n}\n\n#in-action-slider .slick-dots li.slick-active button::before {\n  color: #ff3c81;\n}\n\n.in-action.lp-tr--mobile .lp-tr--btn {\n  margin: 0 !important;\n}\n\n#custom-fullscreen .close-btn {\n  padding: 0;\n}\n"),
        n.setAttribute('data-crs-style', 'action-card-changes'),
        document.head.appendChild(n));
    }
  }
  class o {
    constructor() {
      this.init();
    }
    init() {
      this.isTargetPage() && (this.addStyles(), new i());
    }
    isTargetPage() {
      return location.pathname.includes('zenpatch-pet');
    }
    addStyles() {
      const n = document.createElement('style');
      ((n.textContent = ''), document.head.appendChild(n));
    }
  }
  let s = !1;
  const r = () => {
    s || ((s = !0), new o());
  };
  ('loading' === document.readyState
    ? document.addEventListener('DOMContentLoaded', r, { once: !0 })
    : r(),
    window.addEventListener('pageshow', r));
})();
