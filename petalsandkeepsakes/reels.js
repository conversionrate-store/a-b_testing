(function() {
  "use strict";
  const k = (t) => new Promise((e) => {
    const r = document.querySelector(t);
    r && e(r);
    const n = new MutationObserver(() => {
      const i = document.querySelector(t);
      i && (e(i), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), E = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, C = (t) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, u = {
    dir: "https://conversionrate-store.github.io/a-b_images/petalsandkeepsakes/reels",
    debug: !1,
    videoLength: 3,
    videoData: [
      {
        id: 1,
        viewedCount: "9.3M"
      },
      {
        id: 2,
        viewedCount: "1.4M"
      },
      {
        id: 3,
        viewedCount: "5.3M"
      }
    ]
  };
  function s(t, e = document) {
    return e.querySelector(t);
  }
  function w(t, e = document, r = !1) {
    const n = e.querySelectorAll(t);
    return r ? Array.from(n) : n;
  }
  async function S(t, e = !1, r = {}) {
    const n = { ms: 500, limit: 10, ...r };
    if (typeof t == "function") {
      if (t()) {
        typeof e == "function" && e();
        return;
      }
      return new Promise((i) => {
        let o = n.limit * 1e3;
        const a = setInterval(() => {
          (t() || o <= 0) && (clearInterval(a), o > 0 && typeof e == "function" && e(), i()), o -= n.ms;
        }, n.ms);
      });
    }
    if (typeof t == "string" && (t.startsWith(".") || t.startsWith("#"))) {
      if (s(t)) {
        typeof e == "function" && e();
        return;
      }
      return new Promise((i) => {
        const o = new MutationObserver(() => {
          s(t) && (typeof e == "function" && e(), o.disconnect(), i());
        });
        o.observe(document, { childList: !0, subtree: !0 });
      });
    }
  }
  function V(t, e, r) {
    const n = typeof t == "string" ? s(t) : t;
    if (!n || typeof e != "function") return;
    const { timer: i, ...o } = r ?? {}, a = { root: null, threshold: 0.3, ...o }, c = new IntersectionObserver((v, d) => {
      v.forEach((l) => e(l, d));
    }, a);
    return c.observe(n), c;
  }
  function M(t, e, r = {}) {
    const n = { threshold: 0.3, ...r, timer: null };
    V(
      t,
      ({ isIntersecting: i, target: o }, a) => {
        i ? n.timer = setTimeout(() => {
          P(o) && (e(), a.disconnect());
        }, 3e3) : clearTimeout(n.timer);
      },
      n
    );
  }
  function P(t) {
    const e = typeof t == "string" ? s(t) : t;
    if (!e) return !1;
    const r = e.getBoundingClientRect(), n = window.innerHeight || document.documentElement.clientHeight;
    return r.top + r.height * 0.3 < n && r.bottom > r.height * 0.3;
  }
  function m(t = "", e = "", r = "", n = "") {
    window.dataLayer = window.dataLayer || [];
    try {
      const i = {
        event: "event-to-ga4",
        event_name: t,
        event_desc: e,
        event_type: r,
        event_loc: n
      };
      console.table(i), u.debug || window.dataLayer.push(i);
    } catch (i) {
      console.log("** GA4 Error **", i);
    }
  }
  function b(t) {
    return {
      "modal-prev": (
        /* HTML */
        `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="49"
        viewBox="0 0 28 49"
        fill="none"
      >
        <path
          d="M25.8284 1.41418L2.82837 24.4142L25.8284 47.4142"
          stroke="white"
          stroke-width="4"
        />
      </svg>
    `
      ),
      "modal-next": (
        /* HTML */
        `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="49"
        viewBox="0 0 28 49"
        fill="none"
      >
        <path
          d="M1.41431 1.41418L24.4143 24.4142L1.41431 47.4142"
          stroke="white"
          stroke-width="4"
        />
      </svg>
    `
      ),
      fullscreen: (
        /* HTML */
        `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path
          d="M9.00002 3.99997H4.00004L4 8.99999M20 8.99999V4L15 3.99997M15 20H20L20 15M4 15L4 20L9.00002 20"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
      ),
      "modal-close": (
        /* HTML */
        `<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      class="icon icon-close"
      viewBox="0 0 18 17"
    >
      <path
        fill="currentColor"
        d="M.865 15.978a.5.5 0 0 0 .707.707l7.433-7.431 7.579 7.282a.501.501 0 0 0 .846-.37.5.5 0 0 0-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 1 0-.707-.708L8.991 7.853 1.413.573a.5.5 0 1 0-.693.72l7.563 7.268z"
      />
    </svg>`
      ),
      preview: (
        /* HTML */
        `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
    >
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M6 3.958v10.084L14.305 9zM4.5 3.29c0-.877.96-1.417 1.709-.961l9.402 5.708a1.125 1.125 0 0 1 0 1.924L6.21 15.67A1.125 1.125 0 0 1 4.5 14.71z"
        clip-rule="evenodd"
      />
    </svg>`
      )
    }[t];
  }
  const $ = `.crs-modal {\r
  position: fixed;\r
  z-index: 999999999999;\r
  left: 0;\r
  right: 0;\r
  top: 0;\r
  bottom: 0;\r
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%);\r
  backdrop-filter: blur(1px);\r
  -webkit-backdrop-filter: blur(1px);\r
  transition: 0.35s;\r
  opacity: 0;\r
  pointer-events: none;\r
  padding: 15px;\r
  overflow-y: auto;\r
  max-height: 100%;\r
  display: flex;\r
}\r
\r
.crs-modal.active {\r
  opacity: 1;\r
  pointer-events: auto;\r
}\r
\r
.crs-modal__inner {\r
  position: relative;\r
  max-width: 550px;\r
  width: 100%;\r
  display: none;\r
  margin: auto;\r
}\r
\r
.crs-modal__inner.active {\r
  display: flex;\r
}\r
\r
.crs-modal__close {\r
  cursor: pointer;\r
  transition: 0.35s;\r
  line-height: 0;\r
}\r
\r
[data-modal] {\r
  cursor: pointer;\r
}\r
\r
@media (hover: hover) {\r
  .crs-modal__close:hover {\r
    opacity: 0.5;\r
  }\r
}\r
\r
.crs-modal .lavm-reels {\r
  justify-content: space-between;\r
  align-items: center;\r
  gap: 64px;\r
}\r
\r
.crs-modal .crs-reels__btn {\r
  cursor: pointer;\r
  transition: 0.3s ease;\r
}\r
\r
@media (hover: hover) {\r
  .crs-modal .crs-reels__btn:hover {\r
    opacity: 0.7;\r
  }\r
}\r
\r
.crs-modal .crs-reels__fullscreen {\r
  display: none;\r
}\r
\r
.crs-modal .crs-reels__fullscreen-close {\r
  position: absolute;\r
  padding: 3px;\r
  top: 8px;\r
  right: 8px;\r
  width: 32px;\r
  height: 32px;\r
  border-radius: 4px;\r
  /* background: rgba(255, 255, 255, 0.3); */\r
  color: #fff;\r
  padding: 4px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  cursor: pointer;\r
  transition: 0.3s ease;\r
  z-index: 2;\r
  line-height: 0;\r
  font-size: 28px;\r
}\r
\r
@media (min-width: 768px) {\r
  .crs-modal .crs-reels__fullscreen-close {\r
    top: -50px;\r
    right: -50px;\r
\r
  }\r
}\r
\r
@media (hover: hover) {\r
  .crs-modal .crs-reels__fullscreen-close:hover {\r
    opacity: 0.7;\r
  }\r
}\r
\r
.crs-modal .crs-reels__video {\r
  position: relative;\r
  display: flex;\r
  line-height: 0;\r
}\r
\r
.crs-modal .crs-reels__video video {\r
  width: 100%;\r
  height: auto;\r
  border-radius: 4px;\r
  max-height: 90vh;\r
}\r
\r
.crs-modal .crs-reels__preloader {\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  transform: translate(-50%, -50%);\r
  z-index: 10;\r
  display: none;\r
}\r
\r
.crs-modal .crs-reels__preloader.active {\r
  display: block;\r
}\r
\r
.crs-modal .crs-reels__spinner {\r
  width: 60px;\r
  height: 60px;\r
  border: 4px solid rgba(255, 255, 255, 0.3);\r
  border-top-color: #fff;\r
  border-radius: 50%;\r
  animation: lavmSpinnerRotate 0.8s linear infinite;\r
}\r
\r
@keyframes lavmSpinnerRotate {\r
  to {\r
    transform: rotate(360deg);\r
  }\r
}\r
\r
@media (max-width: 767px) {\r
  .crs-modal .lavm-reels {\r
    justify-content: center;\r
    align-items: center;\r
  }\r
\r
  .crs-modal .crs-reels__fullscreen-close {\r
    width: 40px;\r
    height: 40px;\r
    padding: 8px;\r
  }\r
\r
\r
\r
  .crs-modal .crs-reels__btn {\r
    display: none;\r
  }\r
\r
  .crs-modal .crs-reels__video video {\r
    max-height: 100vh;\r
  }\r
\r
  .crs-modal {\r
    padding: 0;\r
    backdrop-filter: none;\r
    background: #000;\r
  }\r
\r
  .crs-modal-open {\r
    overflow: hidden;\r
  }\r
}`, f = class f {
    constructor(e, r) {
      if (s(".crs-modal") || f.init(), f.list.find((n) => n.name === e)) {
        console.warn("Modal with this name already exists");
        return;
      }
      this.el = document.createElement("div"), this.el.classList.add("crs-modal__inner", e), this.name = e, this.el.innerHTML = r, s(".crs-modal").insertAdjacentElement("beforeend", this.el), f.list.push(this);
    }
    static init() {
      document.body.insertAdjacentHTML("beforeend", "<div class='crs-modal'></div>"), document.addEventListener("click", (e) => {
        var n;
        const r = e.target;
        (r.classList.contains("crs-modal") || r.closest(".crs-modal__close")) && (m("exp_reels_overlay", "Overlay close", "click", "reels modal"), f.close()), (n = r.dataset) != null && n.modal ? f.open(r.dataset.modal) : r.closest("[data-modal]") && f.open(r.closest("[data-modal]").dataset.modal);
      }), f.addStyles();
    }
    static open(e, r) {
      var n, i;
      document.body.classList.add("crs-modal-open"), (n = s(".crs-modal__inner.active")) == null || n.classList.remove("active"), (i = s(e)) == null || i.classList.add("active"), typeof r == "function" && r(), setTimeout(() => {
        var o;
        (o = s(".crs-modal")) == null || o.classList.add("active");
      }, 100);
    }
    static close(e) {
      var n;
      document.body.classList.remove("crs-modal-open"), (n = s(".crs-modal")) == null || n.classList.remove("active");
      const r = s(".crs-reels__video video");
      r && !r.paused && setTimeout(() => {
        r.pause(), r.currentTime = 0;
      }, 250), typeof e == "function" && e(), setTimeout(() => {
        var i;
        (i = s(".crs-modal__inner.active")) == null || i.classList.remove("active");
      }, 400);
    }
    static addStyles() {
      const e = document.createElement("style");
      e.classList.add("exp-modal"), e.textContent = $, document.head.appendChild(e);
    }
  };
  f.list = [];
  let x = f;
  function I() {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide-core.min.css", document.head.appendChild(t);
    const e = document.createElement("script");
    e.src = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js", document.head.appendChild(e);
  }
  const T = `.crs-reels {\r
  padding: 24px 0;\r
  background: #f1f1f1;\r
  color: #fff;\r
  border-bottom: 1px solid #b7b5b5;\r
}\r
\r
.crs-reels+.dwa_formCustomJs {\r
  margin-top: 0 !important;\r
}\r
\r
.crs-reels__title {\r
  color: #000;\r
  text-align: center;\r
  font-family: Overlock;\r
  font-size: 18px;\r
  font-style: normal;\r
  font-weight: 700;\r
  line-height: 24px;\r
  /* 133.333% */\r
  text-transform: uppercase;\r
}\r
\r
.crs-reels__slider {\r
  overflow: hidden;\r
  margin-top: 20px;\r
}\r
\r
.crs-reels__slider .splide__track {\r
  overflow: visible;\r
}\r
\r
.crs-reels__slider .splide__list {\r
  overflow: visible !important;\r
}\r
\r
.crs-reels__slide {\r
  position: relative;\r
}\r
\r
.crs-reels__slide-picture {\r
  display: block;\r
  cursor: pointer;\r
  border-radius: 4px;\r
  overflow: hidden;\r
}\r
\r
.crs-reels__slide-picture img {\r
  width: 100%;\r
  height: auto;\r
  display: block;\r
}\r
\r
.crs-reels__slide video {\r
  width: 100%;\r
  height: auto;\r
  display: none;\r
  border-radius: 4px;\r
}\r
\r
.crs-reels__slide video::-webkit-media-controls-overflow-button {\r
  display: none;\r
}\r
\r
.crs-reels__slide video::-webkit-media-controls-panel {\r
  overflow: hidden;\r
}\r
\r
.crs-reels__slide.is-playing .crs-reels__slide-picture,\r
.crs-reels__slide.is-playing .crs-reels__play {\r
  display: none;\r
}\r
\r
.crs-reels__slide.is-playing video {\r
  display: block;\r
}\r
\r
.crs-reels__play {\r
  display: none !important;\r
  border-radius: 1111px;\r
  background: #FFF;\r
  backdrop-filter: blur(2px);\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 44px;\r
  height: 44px;\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  transform: translate(-50%, -50%);\r
  transition: 0.3s ease;\r
  padding-left: 3px;\r
  cursor: pointer;\r
}\r
\r
\r
.crs-reels__from {\r
  letter-spacing: 0.75px;\r
  font-style: italic;\r
}\r
\r
@media (hover: hover) {\r
  .crs-reels__slide:hover .crs-reels__play {\r
    opacity: 0.8;\r
    transform: translate(-50%, -50%) scale(1.1);\r
  }\r
}\r
\r
.crs-reels__slide:not(.is-playing) .crs-reels__fullscreen {\r
  opacity: 0;\r
  pointer-events: none;\r
}\r
\r
\r
\r
.crs-reels__slide .crs-reels__fullscreen {\r
  position: absolute;\r
  padding: 3px;\r
  top: 8px;\r
  right: 8px;\r
  width: 32px;\r
  height: 32px;\r
  border-radius: 4px;\r
  background: rgba(255, 255, 255, 0.3);\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  cursor: pointer;\r
  transition: 0.3s ease;\r
  z-index: 99;\r
}\r
\r
@media (hover: hover) {\r
  .crs-reels__slide .crs-reels__fullscreen:hover {\r
    background: rgba(255, 255, 255, 1);\r
  }\r
}\r
\r
.crs-reels__slide .crs-reels__fullscreen-close {\r
  display: none;\r
}\r
\r
/* Custom Pagination */\r
.crs-reels__nav {\r
  --reels-nav-color: #000;\r
  margin-top: 20px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 10px;\r
}\r
\r
.crs-reels__nav-arrow {\r
  width: 10px;\r
  height: 10px;\r
  background: transparent;\r
  border: none;\r
  padding: 0;\r
  cursor: pointer;\r
  transition: opacity 0.3s ease;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
\r
.crs-reels__nav-arrow svg path {\r
  fill: var(--reels-nav-color);\r
}\r
\r
@media (hover: hover) {\r
  .crs-reels__nav-arrow:hover:not(:disabled) {\r
    opacity: 0.7;\r
  }\r
}\r
\r
.crs-reels__nav-arrow:disabled {\r
  opacity: 0.3;\r
  cursor: not-allowed;\r
}\r
\r
.crs-reels__dots {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
}\r
\r
.crs-reels__dot {\r
  width: 10px;\r
  height: 10px;\r
  border-radius: 50%;\r
  background: transparent;\r
  border: 1px solid var(--reels-nav-color);\r
  cursor: pointer;\r
  transition: all 0.3s ease;\r
  padding: 0;\r
}\r
\r
.crs-reels__dot.is-active {\r
  background: var(--reels-nav-color);\r
  border-color: var(--reels-nav-color);\r
}\r
\r
@media (hover: hover) {\r
  .crs-reels__dot:hover:not(.is-active) {\r
    opacity: 0.7;\r
  }\r
}\r
\r
\r
.crs-reels__viewed-count {\r
  position: absolute;\r
  bottom: 0;\r
  left: 0;\r
  display: flex;\r
  align-items: center;\r
  gap: 4px;\r
  padding: 12px 13px;\r
}\r
\r
.crs-reels__slide.is-playing .crs-reels__viewed-count {\r
  display: none;\r
}\r
\r
.crs-reels__viewed-count-icon {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
\r
.crs-reels__viewed-count-text {\r
  color: #FFF;\r
  font-family: Inter, sans-serif;\r
  font-size: 15.625px;\r
  font-style: normal;\r
  font-weight: 500;\r
  line-height: 24px;\r
  /* 153.6% */\r
}\r
\r
@media (max-width: 767px) {\r
  .crs-reels__fullscreen {\r
    width: 40px;\r
    height: 40px;\r
  }\r
\r
  .crs-reels__fullscreen svg {\r
    width: 32px;\r
    height: 32px;\r
    flex-shrink: 0;\r
  }\r
\r
  .crs-reels__from {\r
    letter-spacing: 0.65px;\r
  }\r
\r
  .crs-reels {\r
    margin-top: 13px;\r
    border-radius: 0;\r
  }\r
\r
\r
}`;
  class j {
    constructor() {
      this._programmaticVideos = /* @__PURE__ */ new WeakSet(), this.injectStyles(), this.init();
    }
    videoPlay(e) {
      this._programmaticVideos.add(e), e.play().catch(() => {
      }).finally(() => {
        this._programmaticVideos.delete(e);
      });
    }
    videoPause(e) {
      this._programmaticVideos.add(e), e.pause(), Promise.resolve().then(() => this._programmaticVideos.delete(e));
    }
    injectStyles() {
      const e = document.createElement("style");
      e.classList.add("exp-reels-styles"), e.textContent = T, document.head.appendChild(e);
    }
    async init() {
      I(), this.createVideoModal(), await this.addSection();
    }
    openVideoModal(e, r = 0) {
      var o;
      console.log("openIndex", e), w(".crs-reels__slide.is-playing").forEach((a) => {
        const c = s("video", a);
        c && !c.paused && (this.videoPause(c), c.currentTime = 0, c.removeAttribute("controls"), a.classList.remove("is-playing"));
      });
      const n = s(".crs-reels__video video"), i = s(".crs-reels__preloader");
      n && n.dataset.index !== String(e) && (i == null || i.classList.add("active"), n.src = `${u.dir}/video_${e}.mp4`), n && (n.dataset.index = String(e), n.currentTime = r), (o = s(".crs-modal")) != null && o.classList.contains("active") || x.open(".lavm-reels"), n && this.videoPlay(n);
    }
    createVideoModal() {
      var i, o, a;
      const e = (
        /* HTML */
        `
      <div class="crs-reels__btn crs-reels__btn-prev">
        ${b("modal-prev")}
      </div>
      <div class="crs-reels__video">
        <div class="crs-reels__fullscreen">${b("fullscreen")}</div>
        <div class="crs-reels__fullscreen-close">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="crs-reels__preloader">
          <div class="crs-reels__spinner"></div>
        </div>
        <video
          controls
          playsinline
          preload="metadata"
          controlsList="nodownload noremoteplayback noplaybackrate nofullscreen"
          disablePictureInPicture
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="crs-reels__btn crs-reels__btn-next">
        ${b("modal-next")}
      </div>
    `
      );
      new x("lavm-reels", e), (i = s(".lavm-reels")) == null || i.addEventListener("click", (c) => {
        const v = c.target;
        (v === s(".lavm-reels") || v.closest(".crs-reels__fullscreen") || v.closest(".crs-reels__fullscreen-close")) && (v.closest(".crs-reels__fullscreen-close") && m(
          "exp_reels_modal_fullscreen",
          "Fullscreen Close",
          "click",
          "reels modal"
        ), x.close());
      });
      const r = s(".crs-reels__video video"), n = s(".crs-reels__preloader");
      r == null || r.addEventListener(
        "loadstart",
        () => n == null ? void 0 : n.classList.add("active")
      ), r == null || r.addEventListener(
        "waiting",
        () => n == null ? void 0 : n.classList.add("active")
      ), r == null || r.addEventListener(
        "canplay",
        () => n == null ? void 0 : n.classList.remove("active")
      ), r == null || r.addEventListener(
        "loadeddata",
        () => n == null ? void 0 : n.classList.remove("active")
      ), (o = s(".crs-reels__btn-prev")) == null || o.addEventListener("click", () => {
        const c = s(".crs-reels__video video"), v = parseInt(c.dataset.index ?? "1") - 1;
        m("exp_reels_arrow", "Arrow Left", "click", "reels modal"), this.openVideoModal(v < 1 ? u.videoLength : v);
      }), (a = s(".crs-reels__btn-next")) == null || a.addEventListener("click", () => {
        const c = s(".crs-reels__video video"), v = parseInt(c.dataset.index ?? "1") + 1;
        m("exp_reels_arrow", "Arrow Right", "click", "reels modal"), this.openVideoModal(v > u.videoLength ? 1 : v);
      });
    }
    async addSection() {
      var i;
      const e = (
        /* HTML */
        `
      <div class="crs-reels">
        <div class="crs-reels__container">
          <div class="crs-reels__title">Loved by 20,000+ customers</div>

          <div
            class="splide crs-reels__slider"
            role="group"
            aria-label="Reels Slider"
          >
            <div class="splide__track">
              <ul class="splide__list crs-reels__list"></ul>
            </div>

            <div class="crs-reels__nav">
              <button
                type="button"
                class="crs-reels__nav-arrow crs-reels__nav-prev"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                >
                  <path
                    d="M8.91602 2.08837C9.13802 1.8576 9.24902 1.57875 9.24902 1.25183C9.24902 0.924906 9.13802 0.64606 8.91602 0.415291C8.70117 0.184522 8.43799 0.0691366 8.12646 0.0691366C7.81494 0.0691366 7.54818 0.184522 7.32617 0.415291L2.04102 5.97683L7.32617 11.5384C7.54818 11.7691 7.81494 11.8845 8.12646 11.8845C8.43799 11.8845 8.70117 11.7691 8.91602 11.5384C9.13802 11.3076 9.24902 11.0288 9.24902 10.7018C9.24902 10.3749 9.13802 10.0961 8.91602 9.86529L5.2207 5.97683L8.91602 2.08837Z"
                    fill="black"
                  />
                </svg>
              </button>
              <div class="crs-reels__dots"></div>
              <button
                type="button"
                class="crs-reels__nav-arrow crs-reels__nav-next"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                >
                  <path
                    d="M2.08398 2.08837C1.86198 1.8576 1.75098 1.57875 1.75098 1.25183C1.75098 0.924906 1.86198 0.64606 2.08398 0.415291C2.29883 0.184522 2.56201 0.0691366 2.87354 0.0691366C3.18506 0.0691366 3.45182 0.184522 3.67383 0.415291L8.95898 5.97683L3.67383 11.5384C3.45182 11.7691 3.18506 11.8845 2.87354 11.8845C2.56201 11.8845 2.29883 11.7691 2.08398 11.5384C1.86198 11.3076 1.75098 11.0288 1.75098 10.7018C1.75098 10.3749 1.86198 10.0961 2.08398 9.86529L5.7793 5.97683L2.08398 2.08837Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `
      ), r = () => {
        const o = s(".crs-reels"), a = s(".custom.dwa");
        a && (o ? a.insertAdjacentElement("beforeend", o) : a.insertAdjacentHTML("afterbegin", e));
      };
      r(), window.addEventListener("resize", r);
      const n = s(".crs-reels");
      n && M(n, () => {
        m("exp_reels_visibility", "Reels", "view", "reels section");
      });
      for (let o = 0; o < u.videoLength; o++)
        (i = s(".crs-reels__list")) == null || i.appendChild(this.getSlideEl(o + 1));
      await this.initSplide();
    }
    getSlideEl(e) {
      var n;
      const r = document.createElement("li");
      return r.classList.add("splide__slide", "crs-reels__slide"), r.dataset.index = String(e), console.log(u.videoData[e]), (n = u.videoData.find((i) => i.id === e)) == null || n.viewedCount, r.innerHTML = /* HTML */
      `
      <picture class="crs-reels__slide-picture">
        <source
          srcset="${u.dir}/preview_${e}.avif"
          type="image/avif"
        />
        <img src="${u.dir}/preview_${e}.gif" />
      </picture>

      <video
        preload="metadata"
        controlsList="nodownload noremoteplayback noplaybackrate ${window.innerWidth > 767 ? "nofullscreen" : ""}"
        disablePictureInPicture
        playsinline
      >
        <source src="${u.dir}/video_${e}.mp4" type="video/mp4" />
      </video>

      <div class="crs-reels__fullscreen">${b("fullscreen")}</div>

      <div class="crs-reels__play">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
        >
          <path
            d="M12.6682 9.44303L3.00976 15.0922C1.67645 15.872 0 14.9104 0 13.3658V2.003C0 0.453956 1.68509 -0.507054 3.01831 0.281644L12.6767 5.9953C13.9894 6.77185 13.9847 8.67299 12.6682 9.44303Z"
            fill="black"
          />
        </svg>
      </div>

    `, r;
    }
    async initSplide() {
      var o, a, c, v;
      await S(() => typeof window.Splide == "function");
      const e = new window.Splide(".splide", {
        type: "loop",
        pagination: !1,
        arrows: !1,
        perPage: 2,
        perMove: 1,
        gap: "8px",
        fixedWidth: "155px",
        height: "275px",
        padding: { left: "31px", right: "31px" },
        focus: "center",
        trimSpace: !1,
        autoplay: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0
        // breakpoints: {
        //   1024: { perPage: 2, padding: { left: '31px', right: '31px' } },
        //   768: { perPage: 2, gap: '6px', padding: { left: '31px', right: '31px' } },
        //   480: { perPage: 2, gap: '6px' },
        // },
      }).mount();
      w(".crs-reels__slide").forEach((d) => {
        const l = s("video", d);
        l && (l.addEventListener("play", () => {
          this._programmaticVideos.has(l) || m(
            "exp_reels_play",
            `Play Video - ${d.dataset.index}`,
            "click",
            "reels section"
          );
        }), l.addEventListener("pause", () => {
          this._programmaticVideos.has(l) || l.ended || m(
            "exp_reels_pause",
            `Pause Video - ${d.dataset.index}`,
            "click",
            "reels section"
          );
        }));
      }), (o = s(".crs-reels__list")) == null || o.addEventListener("click", (d) => {
        const l = d.target, h = l.closest(".crs-reels__fullscreen");
        if (h) {
          m(
            "exp_reels_fullscreen",
            "Fullscreen",
            "click",
            "reels section"
          );
          const p = h.closest(
            ".crs-reels__slide"
          ), g = p == null ? void 0 : p.querySelector(
            "video"
          );
          this.openVideoModal(
            parseInt(p.dataset.index ?? "1"),
            (g == null ? void 0 : g.currentTime) ?? 0
          );
          return;
        }
        const _ = l.closest("video");
        if (_) {
          const p = _.closest(".crs-reels__slide");
          _.paused || (this.videoPause(_), _.currentTime = 0, _.removeAttribute("controls"), p == null || p.classList.remove("is-playing"), m(
            "exp_reels_pause",
            `Pause Video - ${p == null ? void 0 : p.dataset.index}`,
            "click",
            "reels section"
          ));
          return;
        }
        const O = l.closest(".crs-reels__slide-picture"), z = l.closest(".crs-reels__play");
        if (O || z) {
          const p = l.closest(".crs-reels__slide"), g = s("video", p);
          if (!g) return;
          g.paused && (g.currentTime = 0), m(
            "exp_reels_play",
            `Play Video - ${p.dataset.index}`,
            "click",
            "reels section"
          ), w(".crs-reels__slide.is-playing").forEach((L) => {
            if (L === p) return;
            const y = s("video", L);
            y && (!y.paused || y.currentTime > 0) && (this.videoPause(y), y.currentTime = 0, y.removeAttribute("controls"), L.classList.remove("is-playing"));
          }), p.classList.add("is-playing"), window.innerWidth > 767 && g.setAttribute("controls", "controls"), this.videoPlay(g);
        }
      }), (a = s(".crs-reels__list")) == null || a.addEventListener(
        "ended",
        (d) => {
          const l = d.target;
          if (l.tagName === "VIDEO") {
            const h = l.closest(".crs-reels__slide");
            h && (h.classList.remove("is-playing"), l.removeAttribute("controls"), l.currentTime = 0);
          }
        },
        !0
      );
      const r = s(".crs-reels__dots");
      for (let d = 0; d < u.videoLength; d++) {
        const l = document.createElement("button");
        l.type = "button", l.className = "crs-reels__dot", l.setAttribute("aria-label", `Go to slide ${d + 1}`), d === 0 && l.classList.add("is-active"), l.addEventListener("click", () => e.go(d)), r == null || r.appendChild(l);
      }
      e.on("dragging", () => this.checkVideoInViewport()), e.on("move", (d) => {
        console.log("move to", d);
        const l = d % u.videoLength;
        w(".crs-reels__dot").forEach((h, _) => {
          h.classList.toggle("is-active", _ === l);
        });
      }), e.on("moved", () => this.checkVideoInViewport()), (c = s(".crs-reels__nav-prev")) == null || c.addEventListener("click", () => e.go("<")), (v = s(".crs-reels__nav-next")) == null || v.addEventListener("click", () => e.go(">"));
      const n = new IntersectionObserver(
        (d) => {
          d.forEach((l) => {
            l.isIntersecting || w(".crs-reels__slide.is-playing").forEach((h) => {
              const _ = s("video", h);
              _ && !_.paused && (this.videoPause(_), _.currentTime = 0, _.removeAttribute("controls"), h.classList.remove("is-playing"));
            });
          });
        },
        { threshold: 0, rootMargin: "0px" }
      ), i = s(".crs-reels__slider");
      i && n.observe(i);
    }
    checkVideoInViewport() {
      w(".crs-reels__slide.is-playing:not(.is-visible)").forEach((e) => {
        const r = s("video", e);
        if (!r) return;
        const n = e.dataset.index, i = r.currentTime, o = r.paused, a = w(
          `.crs-reels__slide[data-index="${n}"].is-visible`
        )[0];
        if (a) {
          const c = s("video", a);
          c && (a.classList.add("is-playing"), window.innerWidth > 767 && c.setAttribute("controls", "controls"), c.currentTime = i, o || this.videoPlay(c));
        }
        e.classList.remove("is-playing"), this.videoPause(r), r.removeAttribute("controls"), r.currentTime = 0;
      });
    }
  }
  E({ name: "Reels", dev: "OS" }), C("exp_reels");
  class A {
    constructor() {
      this.init();
    }
    async init() {
      location.pathname.includes("/products/") && (await k(".dwa_formCustomJs"), this.addStyles(), this.initChanges());
    }
    initChanges() {
      new j();
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = "", document.head.appendChild(e);
    }
  }
  new A();
})();
//# sourceMappingURL=index.js.map
