(function() {
  "use strict";
  const c = (r, t, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: t,
      event_type: e,
      event_loc: n
    }), m(`Event: ${r} | ${t} | ${e} | ${n}`, "success");
  }, _ = (r) => new Promise((t) => {
    const e = document.querySelector(r);
    e && t(e);
    const n = new MutationObserver(() => {
      const s = document.querySelector(r);
      s && (t(s), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), P = ({ name: r, dev: t }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, S = (r) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, E = (r, t, e, n, s = 1e3, i = 0.5) => {
    let o, a;
    if (o = new IntersectionObserver(
      function(l) {
        l[0].isIntersecting === !0 ? a = setTimeout(() => {
          c(
            t,
            l[0].target.dataset.visible || n,
            "view",
            e
          ), o.disconnect();
        }, s) : (m("Element is not fully visible", "warn"), clearTimeout(a));
      },
      { threshold: [i] }
    ), typeof r == "string") {
      const l = document.querySelector(r);
      l && o.observe(l);
    } else
      o.observe(r);
  }, m = (r, t = "info") => {
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
    console.log(`%c>>> ${r}`, `${e} font-size: 16px; font-weight: 600`);
  }, A = `/* Customer Photos — mirrors the reels-section look (green #093b32, gold heading, square peek slider). */

/* Match Figma: the dark-green section paints a fully opaque #093b32 with the pattern
   at 10% opacity. CSS can't opacity a single background image, so we layer a 90%-opaque
   #093b32 over the pattern over a solid #093b32 — mathematically identical to rendering
   the pattern at 10% over an opaque base, with no extra DOM / z-index churn. */
.reels-section {
  background:
    linear-gradient(rgba(9, 59, 50, 0.5), rgba(9, 59, 50, 0.5)),
    url("https://houseofworktops.co.uk/catalog/view/theme/houseofworktops/dev/image/theme/pattern-dark.svg") 0% 0% / 300% repeat,
    #093b32 !important;
}

.crs-cp {
  /* margin-bottom: 2.25rem; */
  border-bottom: 1px solid rgba(255, 255, 255, 0.20);
}

.crs-cp__inner {
  border-radius: 4px;
  overflow: hidden;
  padding: 2rem 0 2.25rem;
}

.crs-cp__head {
  text-align: center;
  padding: 0 16px;
  margin-bottom: 1.5rem; /* 24px gap to the carousel (Figma frame gap-24) */
}

.crs-cp__title {
  color: #ecbb8a;
  font-size: 20px;
  line-height: 30px;
  font-weight: 400; /* Archivo Regular, same as the reels heading */
}

.crs-cp__subtitle {
  color: #fff;
  font-size: 14px;
  line-height: 24px;
  margin: 12px 0 0; /* Figma heading block gap-12 */
}

/* Slider — single centered square card with side peeks */
.crs-cp__slider {
  opacity: 0;
}

.crs-cp__slider.slick-initialized {
  opacity: 1;
}

.crs-cp__slide {
  padding: 0 3px;
  /* 6px gap between cards */
}

.crs-cp__card {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 0;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  background: transparent;
}

.crs-cp__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 4px;
}

/* Nav row: prev ‹ • • • • › next, centered below the slider */
.crs-cp__nav-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 1.5rem; /* 24px gap from the carousel (Figma frame gap-24) */
}

/* Mirror the reels-prev/next buttons: a fixed 10×10 flex box (no padding) with the
   chevron centered, so the arrows sit flush against the dots instead of being pushed
   out by horizontal padding. */
.crs-cp__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  padding: 0;
  background: transparent;
  border: 0;
  color: #fff;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.crs-cp__nav:hover {
  opacity: 1;
}

.crs-cp__dots {
  display: inline-flex;
}

.crs-cp__dots .slick-dots {
  position: static;
  display: flex !important;
  align-items: center;
  gap: 0.62rem;
  margin: 0;
  padding: 0;
  width: auto;
}

.crs-cp__dots .slick-dots li {
  width: 10px;
  height: 10px;
  margin: 0;
}

.crs-cp__dots .slick-dots li button {
  width: 10px;
  height: 10px;
  padding: 0;
}

/* Dots mirror the reels/Figma style: hollow white-outline circles, solid white when
   active (the gold #ecbb8a is reserved for the heading). */
.crs-cp__dots .slick-dots li button:before {
  content: '';
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  border-radius: 50%;
  background: transparent;
  border: 1px solid #fff;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
}

.crs-cp__dots .slick-dots li.slick-active button:before {
  background: #fff;
}

/* Lightbox — ported 1:1 from the reels lightbox (#reelsLightbox) chrome: fade-in
   overlay, borderless tall-chevron arrows with a 64px gap to the modal, rounded modal
   with drop shadow, translucent round close button, bottom-sheet on mobile. */
.crs-cp-lb {
  position: fixed;
  inset: 0;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.86);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.2s, visibility 0.2s;
}

.crs-cp-lb.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

body.crs-cp-modal-open {
  overflow: hidden;
}

/* Loading gate — until the opened photo is decoded, hide the chrome that is
   positioned relative to the image (so it can't bunch up on the collapsed,
   image-less modal) and show a centred spinner in its place instead. */
.crs-cp-lb.is-loading .crs-cp-lb__close,
.crs-cp-lb.is-loading .crs-cp-lb__nav,
.crs-cp-lb.is-loading .crs-cp-lb__zoom {
  visibility: hidden;
}

.crs-cp-lb__spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 42px;
  height: 42px;
  margin: -21px 0 0 -21px;
  border: 3px solid rgba(255, 255, 255, 0.25);
  border-top-color: #fff;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  animation: crs-cp-spin 0.8s linear infinite;
}

.crs-cp-lb.is-loading .crs-cp-lb__spinner {
  opacity: 1;
}

@keyframes crs-cp-spin {
  to {
    transform: rotate(360deg);
  }
}

.crs-cp-lb__nav {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: none;
  border: 0;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
  user-select: none;
}

.crs-cp-lb__nav:hover {
  opacity: 1;
}

.crs-cp-lb__nav--prev {
  margin-right: 64px;
}

.crs-cp-lb__nav--next {
  margin-left: 64px;
}

.crs-cp-lb .crs-cp__nav-icon {
  display: block;
  width: 23px;
  height: 46px;
  pointer-events: none;
}

.crs-cp-lb__modal {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  margin: 0 8px;
  max-width: min(95vw, 850px);
  max-height: 90vh;
  background: #000;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.55);
}

.crs-cp-lb__img {
  display: block;
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
}

/* Ghost = the incoming neighbour photo, painted alongside the real image while
   a swipe drag/animation is in flight so both are visible with a small gap.
   It fills the real image's box; JS positions it off-axis via translateX. */
.crs-cp-lb__img--ghost {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  pointer-events: none;
}

/* "Click photo to zoom" — mobile only, hidden while zoomed. Bottom-centred on
   the image; matches the product gallery pill (Figma 2710:4557). */
.crs-cp-lb__zoom {
  position: absolute;
  left: 50%;
  bottom: 19px;
  transform: translateX(-50%);
  z-index: 10;
  display: none;
  padding: 12px 34px;
  border: 1px solid rgba(255, 238, 224, 0.4);
  border-radius: 34px;
  background: #093b32;
  color: rgba(255, 238, 224, 0.82);
  font-size: 15px;
  letter-spacing: 0.3px;
  white-space: nowrap;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}

/* On desktop the close sits *outside* the image — just past the top-right corner,
   in the gap toward the next arrow (Figma 2709:1037). On mobile it moves inside
   the photo corner. */
.crs-cp-lb__close {
  position: absolute;
  top: 0;
  right: -44px;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: background 0.2s;
}

.crs-cp-lb__close:hover {
  background: #fff;
}

.crs-cp-lb__close svg {
  width: 14px;
  height: 14px;
  stroke: #111;
  stroke-width: 2.5;
  fill: none;
  stroke-linecap: round;
}

/* ---- Mobile: match the product-gallery viewer — a full-width square photo,
   a pinned close, chevron nav buttons, a "Click photo to zoom" pill and the
   same grow-upward zoom. There is no switcher here (single photo group), so the
   square is vertically centred rather than offset. ---- */
@media (max-width: 480px) {
  /* Close — pinned to the top-right corner (like the gallery viewer). */
  .crs-cp-lb__close {
    position: fixed;
    top: 12px;
    right: 13px;
    width: 44px;
    height: 44px;
  }

  .crs-cp-lb__close svg {
    width: 16px;
    height: 16px;
  }

  /* Image — full-width square, vertically centred, bottom edge fixed so it
     grows *upward* to fill the screen on zoom (mirrors the gallery). */
  .crs-cp-lb__modal {
    position: fixed;
    left: 0;
    right: 0;
    top: calc((100vh - 100vw) / 2);
    height: 100vw;
    margin: 0;
    max-width: none;
    max-height: none;
    overflow: hidden;
    border-radius: 0;
    box-shadow: none;
    /* Transparent so the swipe gap (and zoom letterboxing) shows the dimmed
       overlay, like the product gallery, instead of a solid black box. */
    background: transparent;
  }

  .crs-cp-lb.is-zoomed .crs-cp-lb__modal {
    top: 0;
    height: calc((100vh + 100vw) / 2);
  }

  .crs-cp-lb__img {
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    object-fit: cover;
  }

  /* Zoomed: show the whole photo (not a cover-crop) so panning can reach every
     edge; the JS pan clamp is derived from this contained size. */
  .crs-cp-lb.is-zoomed .crs-cp-lb__img {
    object-fit: contain;
  }

  /* Show the zoom pill on the contained image; hide it once zoomed. */
  .crs-cp-lb:not(.is-zoomed) .crs-cp-lb__zoom {
    display: block;
  }

  /* The modal owns horizontal gestures at all times — swipe navigates when not
     zoomed, drag pans when zoomed — so stop the browser from treating the touch
     as a scroll: that would cancel our pointer sequence and kill the swipe. */
  .crs-cp-lb__modal,
  .crs-cp-lb__img {
    touch-action: none;
  }

  .crs-cp-lb.is-zoomed .crs-cp-lb__modal,
  .crs-cp-lb.is-zoomed .crs-cp-lb__img {
    cursor: grab;
  }

  /* Chevron arrows — shown here (they were hidden before), pinned in a centred
     row just below the image's fixed bottom edge, 56px apart. */
  .crs-cp-lb__nav {
    position: fixed;
    top: calc((100vh + 100vw) / 2 + 20px);
    margin: 0;
    padding: 8px;
    z-index: 10;
  }

  .crs-cp-lb__nav--prev {
    left: auto;
    right: 50%;
    margin: 0 28px 0 0;
  }

  .crs-cp-lb__nav--next {
    left: 50%;
    margin: 0 0 0 28px;
  }

  .crs-cp-lb .crs-cp__nav-icon {
    width: 15px;
    height: 30px;
  }
}


.crs-cp+.container {
  margin-top: 0.75rem;
  padding-top: 1.5rem !important;
}`;
  function g(r) {
    const t = document.createElement("style");
    t.textContent = r, document.head.appendChild(t);
  }
  const k = /* @__PURE__ */ new Set();
  function h(r) {
    if (!r || k.has(r)) return;
    k.add(r);
    const t = new Image();
    t.decoding = "async", t.src = r;
  }
  function C(r) {
    const t = window.requestIdleCallback;
    t ? t(r, { timeout: 2e3 }) : setTimeout(r, 1200);
  }
  const $ = "https://conversionrate-store.github.io/a-b_images/houseofworktops/customer_photos", M = {
    "oak-worktop": { folder: "oak", count: 10 },
    "beech-worktop": { folder: "beech", count: 10 },
    "walnut-worktop": { folder: "walnut", count: 10 },
    "iroko-worktop": { folder: "iroko", count: 6 },
    "black-ash-worktop": { folder: "black_ash", count: 4 },
    "black-walnut-laminate-worktop": { folder: "black_walnut_laminate", count: 9 },
    "athena-marble-compact": { folder: "athena_marble_compact", count: 10 },
    "beige-gold-compact": { folder: "beige_gold", count: 10 },
    "black-gold-compact": { folder: "black_gold", count: 10 },
    "bella-bianche-compact": { folder: "bella_bianche_compact_laminate", count: 10 },
    "calacatta-marble-compact": { folder: "calacatta_marble_compact_laminate", count: 9 },
    "carrara-solid-surface": { folder: "carrara_marble_solid_surface", count: 10 },
    "carrera-marble-compact-(white-core)": { folder: "carrera_marble_compact_laminate_white_core", count: 9 },
    "carrera-marble-compact-(dark-core)": { folder: "carrera_marble_dark_core", count: 10 },
    "cloudy-cement-compact-laminate": { folder: "cloudy_cement_compact_laminate", count: 4 },
    "copper-stone-compact": { folder: "copper_stone", count: 5 },
    "cranbury-marble-compact": { folder: "cranburry_marble", count: 10 },
    "distressed-oak-compact-laminate": { folder: "distressed_oak_compact_laminate", count: 10 },
    "lucida-white-compact": { folder: "lucida_white_compact", count: 10 },
    "magma-rodolit-compact": { folder: "magma_compact", count: 10 },
    "pure-black-compact": { folder: "pure_matt_black_compact_laminate", count: 5 },
    "terrazzo-worktop-compact-laminate": { folder: "terrazzo_compact", count: 5 },
    "terra-concrete-compact-laminate": { folder: "terra_concrete_oak", count: 10 }
  }, T = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function I(r) {
    return r.replace(/[&<>"]/g, (t) => T[t]);
  }
  function x() {
    const r = document.querySelector("h1"), t = (r && r.textContent ? r.textContent : "").trim();
    return I(t || "Worktop");
  }
  function z() {
    const r = decodeURIComponent(
      location.pathname.split("/").filter(Boolean).pop() || ""
    ).toLowerCase(), t = M[r];
    if (!t) return null;
    const e = x();
    return Array.from({ length: t.count }, (n, s) => ({
      src: `${$}/${t.folder}/${s + 1}.webp`,
      alt: `${e} in a real kitchen`
    }));
  }
  const q = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: !0,
    arrows: !1,
    dots: !0,
    speed: 400,
    cssEase: "ease",
    centerMode: !0,
    centerPadding: "70px",
    responsive: [
      { breakpoint: 992, settings: { centerPadding: "48px" } },
      // 35px yields a 299px card / 38px side peek on a 375px frame (Figma mobile).
      { breakpoint: 576, settings: { centerPadding: "35px" } }
    ]
  }, p = "Customer photos section", u = 2, v = 20;
  class H {
    constructor() {
      this.photos = [], this.modalIndex = 0, this.lastFocused = null, this.ghostDir = 0, this.loadToken = 0, this.zoomed = !1, this.dragging = !1, this.moved = !1, this.swiping = !1, this.sx = 0, this.sy = 0, this.startPanX = 0, this.startPanY = 0, this.panX = 0, this.panY = 0, this.init();
    }
    async init() {
      if (document.querySelector(".crs-cp")) return;
      const t = z();
      if (!t) return;
      this.photos = t;
      const e = await _(".reels-section"), n = await this.waitForSlick();
      if (!n) {
        m("Customer Photos: jQuery/slick not available", "warn");
        return;
      }
      this.$ = n, g(A);
      const s = this.buildSection();
      e.insertAdjacentElement("afterbegin", s), this.buildLightbox(), this.initSlider(s), this.wireCards(s), C(() => this.photos.forEach((i) => h(i.src))), this.$(s).on("pointerover", ".crs-cp__card", (i) => {
        const o = parseInt(
          i.currentTarget.getAttribute("data-index") || "-1",
          10
        );
        this.photos[o] && h(this.photos[o].src);
      }), E(
        s,
        "exp_photo_section_view",
        p,
        "Customer photos section viewed"
      );
    }
    // jQuery + slick are loaded by the host theme; retry briefly like the site does.
    waitForSlick() {
      return new Promise((t) => {
        let e = 30;
        const n = () => {
          const s = window.jQuery;
          if (s && s.fn && s.fn.slick) return t(s);
          if (--e <= 0) return t(null);
          setTimeout(n, 100);
        };
        n();
      });
    }
    buildSection() {
      const t = x(), e = this.photos.map(
        (s, i) => `
        <div class="crs-cp__slide">
          <button class="crs-cp__card" type="button" data-index="${i}" aria-label="View ${s.alt}">
            <img class="crs-cp__img" src="${s.src}" alt="${s.alt}" loading="lazy">
          </button>
        </div>`
      ).join(""), n = document.createElement("div");
      return n.className = "crs-cp", n.innerHTML = /* HTML */
      ` <div class="crs-cp__inner">
      <div class="crs-cp__head">
        <div class="crs-cp__title">Our ${t} — in Real Kitchens</div>
        <p class="crs-cp__subtitle">See how this ${t} looks once fitted</p>
      </div>
      <div class="crs-cp__slider-wrap">
        <div class="crs-cp__slider">${e}</div>
        <div class="crs-cp__nav-row">
          <button
            class="crs-cp__nav crs-cp__nav--prev"
            type="button"
            aria-label="Previous photo"
          >
            <img src="https://houseofworktops.co.uk/catalog/view/theme/houseofworktops/image/svg-icons/chevron-left-white.svg" alt="" width="10" height="10" aria-hidden="true" />
          </button>
          <div class="crs-cp__dots"></div>
          <button
            class="crs-cp__nav crs-cp__nav--next"
            type="button"
            aria-label="Next photo"
          >
            <img src="https://houseofworktops.co.uk/catalog/view/theme/houseofworktops/image/svg-icons/chevron-right-white.svg" alt="" width="10" height="10" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>`, n;
    }
    initSlider(t) {
      const e = this.$, n = e(t).find(".crs-cp__slider");
      n.slick({
        ...q,
        appendDots: e(t).find(".crs-cp__dots")
      });
      let s = null;
      n.on("afterChange", (i, o, a) => {
        s && (c(s.name, `${s.desc} - ${a + 1}`, s.type, p), s = null);
      }), e(t).find(".crs-cp__nav--prev").on("click", () => {
        s = { name: "exp_photo_nav_arrow", desc: "Arrow Left", type: "click" }, n.slick("slickPrev");
      }), e(t).find(".crs-cp__nav--next").on("click", () => {
        s = { name: "exp_photo_nav_arrow", desc: "Arrow Right", type: "click" }, n.slick("slickNext");
      }), e(t).on("click", ".crs-cp__dots li", () => {
        s = { name: "exp_photo_pagination", desc: "Pagination", type: "click" };
      }), n.on("swipe", (i, o, a) => {
        s = { name: "exp_photo_swipe", desc: `Swipe ${a}`, type: "other" };
      });
    }
    wireCards(t) {
      this.$(t).on("click", ".crs-cp__card", (e) => {
        const n = e.currentTarget;
        this.openLightbox(parseInt(n.getAttribute("data-index") || "0", 10));
      });
    }
    // ---- Lightbox (image port of the reels lightbox) ----
    buildLightbox() {
      const t = this.$, e = document.createElement("div");
      e.className = "crs-cp-lb", e.id = "crsCpLightbox", e.setAttribute("role", "dialog"), e.setAttribute("aria-modal", "true"), e.setAttribute("aria-hidden", "true"), e.setAttribute("aria-label", "Customer photo viewer"), e.innerHTML = /* HTML */
      ` <button
        class="crs-cp-lb__nav crs-cp-lb__nav--prev"
        type="button"
        aria-label="Previous photo"
      >
        <img
          class="crs-cp__nav-icon"
          src="https://houseofworktops.co.uk/catalog/view/theme/houseofworktops/image/svg-icons/video-previous.svg"
          alt=""
          width="24"
          height="24"
          aria-hidden="true"
        />
      </button>
      <div class="crs-cp-lb__modal" role="document">
        <button class="crs-cp-lb__close" type="button" aria-label="Close">
          <svg viewBox="0 0 14 14" aria-hidden="true" focusable="false">
            <line x1="2" y1="2" x2="12" y2="12"></line>
            <line x1="12" y1="2" x2="2" y2="12"></line>
          </svg>
        </button>
        <img class="crs-cp-lb__img" id="crsCpLightboxImg" alt="" draggable="false" />
        <img class="crs-cp-lb__img crs-cp-lb__img--ghost" alt="" aria-hidden="true" draggable="false" />
        <button class="crs-cp-lb__zoom" type="button">Click photo to zoom</button>
      </div>
      <button
        class="crs-cp-lb__nav crs-cp-lb__nav--next"
        type="button"
        aria-label="Next photo"
      >
        <img
          class="crs-cp__nav-icon"
          src="https://houseofworktops.co.uk/catalog/view/theme/houseofworktops/image/svg-icons/video-next.svg"
          alt=""
          width="24"
          height="24"
          aria-hidden="true"
        />
      </button>
      <div class="crs-cp-lb__spinner" aria-hidden="true"></div>`, document.body.appendChild(e), this.lb = e, this.img = e.querySelector("#crsCpLightboxImg"), this.ghost = e.querySelector(".crs-cp-lb__img--ghost"), this.stage = e.querySelector(".crs-cp-lb__modal");
      const n = t(e);
      n.find(".crs-cp-lb__close").on("click", () => {
        c("exp_photo_close", "Close", "click", p), this.closeLightbox();
      }), e.querySelector(".crs-cp-lb__close").addEventListener(
        "pointerdown",
        (i) => i.stopPropagation()
      ), n.find(".crs-cp-lb__nav--prev").on("click", () => this.navigate(-1, "Arrow Left")), n.find(".crs-cp-lb__nav--next").on("click", () => this.navigate(1, "Arrow Right")), n.on("click", (i) => {
        i.target === e && (c("exp_photo_overlay", "Overlay close", "click", p), this.closeLightbox());
      });
      const s = e.querySelector(".crs-cp-lb__zoom");
      s.addEventListener("pointerdown", (i) => i.stopPropagation()), s.addEventListener("click", (i) => {
        i.stopPropagation(), this.setZoom(!0);
      }), this.stage.addEventListener("pointerdown", (i) => this.onPointerDown(i)), this.stage.addEventListener("pointermove", (i) => this.onPointerMove(i)), this.stage.addEventListener("pointerup", (i) => this.onPointerUp(i)), this.stage.addEventListener("pointercancel", () => {
        this.dragging = !1, this.zoomed || this.springBack();
      }), t(document).on("keydown.crsCp", (i) => {
        e.getAttribute("aria-hidden") !== "true" && (i.key === "Escape" ? this.closeLightbox() : i.key === "ArrowLeft" ? this.showAt(this.modalIndex - 1) : i.key === "ArrowRight" ? this.showAt(this.modalIndex + 1) : i.key === "Tab" && this.trapFocus(e, i));
      });
    }
    // Keep keyboard focus inside the open lightbox: cycle Tab between its visible
    // buttons (arrows hide on mobile, so query live rather than caching).
    trapFocus(t, e) {
      const n = Array.from(
        t.querySelectorAll("button")
      ).filter((a) => a.offsetParent !== null);
      if (!n.length) return;
      const s = n[0], i = n[n.length - 1], o = document.activeElement;
      e.shiftKey && o === s ? (e.preventDefault(), i.focus()) : !e.shiftKey && o === i && (e.preventDefault(), s.focus());
    }
    // ---- Zoom / pan (mobile) ----
    isMobile() {
      return window.matchMedia("(max-width: 480px)").matches;
    }
    setZoom(t) {
      t && !this.isMobile() || (this.zoomed = t, this.panX = 0, this.panY = 0, this.lb.classList.toggle("is-zoomed", t), t ? (requestAnimationFrame(() => this.applyPan()), c("exp_photo_zoom", `Zoom ${this.modalIndex + 1}`, "click", p)) : this.img.style.transform = "");
    }
    applyPan() {
      const t = this.stage.clientWidth, e = this.stage.clientHeight, n = this.img.naturalWidth, s = this.img.naturalHeight;
      let i, o;
      if (n && s) {
        const a = Math.min(t / n, e / s);
        i = Math.max(0, (n * a * u - t) / 2), o = Math.max(0, (s * a * u - e) / 2);
      } else
        i = (u - 1) * t / 2, o = (u - 1) * e / 2;
      this.panX = Math.min(i, Math.max(-i, this.panX)), this.panY = Math.min(o, Math.max(-o, this.panY)), this.img.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${u})`;
    }
    onPointerDown(t) {
      if (!this.swiping) {
        this.dragging = !0, this.moved = !1, this.sx = t.clientX, this.sy = t.clientY, this.startPanX = this.panX, this.startPanY = this.panY;
        try {
          this.stage.setPointerCapture(t.pointerId);
        } catch {
        }
      }
    }
    onPointerMove(t) {
      if (!this.dragging) return;
      const e = t.clientX - this.sx, n = t.clientY - this.sy;
      if ((Math.abs(e) > 6 || Math.abs(n) > 6) && (this.moved = !0), this.zoomed)
        this.panX = this.startPanX + e, this.panY = this.startPanY + n, this.applyPan(), t.preventDefault();
      else if (this.moved && this.isMobile()) {
        const s = this.swipeW() + v, i = Math.max(-s, Math.min(s, e)), o = e < 0 ? 1 : -1;
        this.setGhost(o), this.img.style.transform = `translateX(${i}px)`, this.ghost.style.transform = `translateX(${i + o * s}px)`, t.preventDefault();
      }
    }
    onPointerUp(t) {
      if (!this.dragging) return;
      this.dragging = !1;
      const e = t.clientX - this.sx;
      if (this.zoomed) {
        this.moved || this.setZoom(!1);
        return;
      }
      if (Math.abs(e) > this.swipeW() / 5) {
        const n = e < 0 ? 1 : -1, s = () => c(
          "exp_photo_full_swipe",
          `Swipe ${n > 0 ? "left" : "right"} - ${this.modalIndex + 1}`,
          "other",
          p
        );
        this.isMobile() ? this.animateSwipe(n, s) : (this.showAt(this.modalIndex + n), s());
      } else this.moved ? this.springBack() : this.isMobile() && this.setZoom(!0);
    }
    swipeW() {
      return this.stage.clientWidth || window.innerWidth;
    }
    // Point the ghost <img> at the neighbour in `dir` and show it — it is the
    // incoming photo painted alongside the real one during drags and swipes.
    setGhost(t) {
      const e = this.photos.length, n = ((this.modalIndex + t) % e + e) % e, s = this.photos[n].src;
      this.ghost.getAttribute("src") !== s && (this.ghost.src = s), this.ghost.style.visibility = "visible", this.ghostDir = t;
    }
    hideGhost() {
      this.ghost.style.visibility = "hidden", this.ghost.style.transition = "", this.ghostDir = 0;
    }
    // Arrow navigation — same strip animation as a swipe on mobile; instant on
    // desktop (there the strip isn't a native affordance and isn't clipped for).
    navigate(t, e) {
      if (this.swiping) return;
      const n = () => c("exp_photo_arrow", `${e} - ${this.modalIndex + 1}`, "click", p);
      this.isMobile() && !this.zoomed ? this.animateSwipe(t, n) : (this.showAt(this.modalIndex + t), n());
    }
    // Slide one photo as one continuous strip: the current photo slides out
    // while the incoming neighbour (peeking via the ghost) slides to centre.
    // `report` fires at the swap so its event carries the destination number.
    animateSwipe(t, e) {
      this.swiping = !0;
      const n = this.img, s = this.ghost, i = this.swipeW() + v;
      this.ghostDir !== t && (this.setGhost(t), s.style.transition = "none", s.style.transform = `translateX(${t * i}px)`, s.offsetWidth), n.style.transition = s.style.transition = "transform 0.26s ease-out", n.style.transform = `translateX(${-t * i}px)`, s.style.transform = "translateX(0px)", setTimeout(() => {
        this.showAt(this.modalIndex + t), e(), n.style.transition = "none";
        const o = () => {
          n.style.transform = "", this.hideGhost(), requestAnimationFrame(() => {
            n.style.transition = "", this.swiping = !1;
          });
        };
        n.decode ? n.decode().then(o, o) : o();
      }, 270);
    }
    // Swipe released under the threshold — ease the strip back to centre.
    springBack() {
      const t = this.img, e = this.ghost;
      t.style.transition = "transform 0.18s ease", t.style.transform = "", this.ghostDir && (e.style.transition = "transform 0.18s ease", e.style.transform = `translateX(${this.ghostDir * (this.swipeW() + v)}px)`), setTimeout(() => {
        t.style.transition = "", this.hideGhost();
      }, 200);
    }
    // ---- Open / navigate / close ----
    showAt(t) {
      const e = this.photos.length, n = (t + e) % e;
      this.modalIndex = n, this.zoomed && this.setZoom(!1), this.setImage(this.photos[n].src, this.photos[n].alt), h(this.photos[(n + 1) % e].src), h(this.photos[(n - 1 + e) % e].src);
    }
    // Swap the displayed photo. Until it is decoded we add `is-loading`, which
    // hides the image-anchored chrome (close/arrows/zoom) and shows a spinner —
    // otherwise those elements bunch up on the still-collapsed, image-less modal.
    // We only gate when there is no image yet to give the modal a size; during
    // navigation the previous photo keeps the box open, so the chrome never
    // flickers and cached photos swap seamlessly.
    setImage(t, e) {
      const n = ++this.loadToken, s = !!this.img.naturalWidth;
      this.img.alt = e, this.img.src = t, s || this.lb.classList.add("is-loading");
      const i = () => {
        n === this.loadToken && this.lb.classList.remove("is-loading");
      };
      this.img.decode ? this.img.decode().then(i, i) : i();
    }
    openLightbox(t) {
      var n;
      const e = this.lb;
      e && (this.lastFocused = document.activeElement, this.showAt(t), e.classList.add("is-open"), e.setAttribute("aria-hidden", "false"), document.body.classList.add("crs-cp-modal-open"), (n = e.querySelector(".crs-cp-lb__close")) == null || n.focus(), c(
        "exp_photo_open",
        `Opened customer photo ${t + 1}`,
        "click",
        p
      ));
    }
    closeLightbox() {
      var e;
      const t = this.lb;
      t && (this.zoomed && this.setZoom(!1), this.swiping = !1, this.img.style.transition = "", this.img.style.transform = "", this.ghost.style.transform = "", this.hideGhost(), this.loadToken++, t.classList.remove("is-open", "is-loading"), t.setAttribute("aria-hidden", "true"), document.body.classList.remove("crs-cp-modal-open"), (e = this.lastFocused) == null || e.focus(), this.lastFocused = null);
    }
  }
  const V = `/* Product gallery viewer — our reels-style lightbox that replaces the host's
   Magnific popup: dark overlay, centered image, a Product/Real-kitchens switcher
   pill on top, a white round close, and tall white chevron arrows. On mobile the
   image is contained with a "Click photo to zoom" pill that expands + pans it. */

.crs-pg-lb {
  position: fixed;
  inset: 0;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.2s, visibility 0.2s;
}

.crs-pg-lb.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

body.crs-pg-modal-open {
  overflow: hidden;
}

/* Switcher pill (Figma 2709:1037 / 2712:4585) — anchored to the image frame */
.crs-pg-lb__switch {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: inline-flex;
  padding: 6px 7px;
  border-radius: 999px;
  background: rgba(9, 59, 50, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.crs-pg-lb__seg {
  position: relative;
  z-index: 1;
  min-height: 46px;
  padding: 12px 26px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.25s;
}

.crs-pg-lb__seg.is-active {
  color: #fff;
}

/* Sliding highlight behind the labels — JS sets its width/position to the
   active segment; the transition animates the travel between the two. */
.crs-pg-lb__thumb {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  border-radius: 999px;
  background: #1f8a6d;
  pointer-events: none;
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1),
    width 0.32s cubic-bezier(0.4, 0, 0.2, 1);
}

/* White round close with a dark X (mirrors the reels lightbox close). On desktop
   it sits *outside* the image — just past the top-right corner, in the gap toward
   the next arrow (Figma 2709:1037). On mobile it moves inside the photo corner. */
.crs-pg-lb__close {
  position: absolute;
  top: 0;
  right: -52px;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: background 0.2s;
}

.crs-pg-lb__close:hover {
  background: #fff;
}

.crs-pg-lb__close svg {
  width: 16px;
  height: 16px;
  stroke: #111;
  stroke-width: 2.4;
  fill: none;
  stroke-linecap: round;
}

/* Loading gate — until the opened photo is decoded, hide the chrome that is
   positioned relative to the image (so it can't bunch up on the collapsed,
   image-less frame) and show a centred spinner in its place instead. */
.crs-pg-lb.is-loading .crs-pg-lb__switch,
.crs-pg-lb.is-loading .crs-pg-lb__close,
.crs-pg-lb.is-loading .crs-pg-lb__nav,
.crs-pg-lb.is-loading .crs-pg-lb__zoom {
  visibility: hidden;
}

.crs-pg-lb__spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 42px;
  height: 42px;
  margin: -21px 0 0 -21px;
  border: 3px solid rgba(255, 255, 255, 0.25);
  border-top-color: #fff;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  animation: crs-pg-spin 0.8s linear infinite;
}

.crs-pg-lb.is-loading .crs-pg-lb__spinner {
  opacity: 1;
}

@keyframes crs-pg-spin {
  to {
    transform: rotate(360deg);
  }
}

/* Tall white chevron arrows */
.crs-pg-lb__nav {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: none;
  border: 0;
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 0.2s;
  user-select: none;
}

.crs-pg-lb__nav:hover {
  opacity: 1;
}

.crs-pg-lb__nav--prev {
  margin-right: 24px;
}

.crs-pg-lb__nav--next {
  margin-left: 24px;
}

.crs-pg-lb__nav img {
  display: block;
  width: 23px;
  height: 46px;
  pointer-events: none;
}

/* Frame = image-sized positioning context for the switcher + close (not
   clipped), wrapping the overflow-hidden stage. */
.crs-pg-lb__frame {
  position: relative;
  flex-shrink: 0;
  display: flex;
  margin: 0 8px;
  max-width: min(92vw, 900px);
  max-height: 88vh;
}

/* Image stage */
.crs-pg-lb__stage {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  max-width: 100%;
  max-height: 88vh;
}

.crs-pg-lb__img {
  display: block;
  max-width: 100%;
  max-height: 88vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  user-select: none;
  -webkit-user-drag: none;
}

/* Ghost = the incoming neighbour photo, painted alongside the real image while
   a swipe drag/animation is in flight so both are visible with a small gap.
   It fills the real image's box; JS positions it off-axis via translateX. */
.crs-pg-lb__img--ghost {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  pointer-events: none;
}

/* "Click photo to zoom" — mobile only, hidden while zoomed. Bottom-centered on
   the image (Figma 2710:4557): dark-green pill, cream border + text. */
.crs-pg-lb__zoom {
  position: absolute;
  left: 50%;
  bottom: 19px;
  transform: translateX(-50%);
  z-index: 5;
  display: none;
  padding: 12px 34px;
  border: 1px solid rgba(255, 238, 224, 0.4);
  border-radius: 34px;
  background: #093b32;
  color: rgba(255, 238, 224, 0.82);
  font-size: 15px;
  letter-spacing: 0.3px;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  line-height: 1;
}

/* ---- Mobile (Figma 2710:4538 normal / 2710:4561 fullscreen) ----
   The switcher, close and arrows are pinned to the viewport so they DO NOT move
   when the image toggles to fullscreen. The full-width image is bottom-anchored:
   normally a square sitting just under the switcher, and on zoom it grows
   *upward* to cover the header while its bottom edge (and the arrow row) stay
   put. Scrim dims the page below the arrows, matching the design. */
@media (max-width: 480px) {
  /* Switcher — pinned top-centre, fixed so it never shifts between states. */
  .crs-pg-lb__switch {
    position: fixed;
    top: 123px;
  }

  .crs-pg-lb__seg {
    min-height: 38px;
    padding: 12px 14px;
    font-size: 13px;
  }

  /* Close — pinned to the top-right corner. */
  .crs-pg-lb__close {
    position: fixed;
    top: 12px;
    right: 13px;
    width: 44px;
    height: 44px;
  }

  /* Image — full-width, bottom edge fixed; grows upward when zoomed. */
  .crs-pg-lb__frame {
    position: fixed;
    left: 0;
    right: 0;
    top: 198px;
    height: 100vw;
    margin: 0;
    max-width: none;
    max-height: none;
  }

  .crs-pg-lb.is-zoomed .crs-pg-lb__frame {
    top: 0;
    height: calc(198px + 100vw);
  }

  .crs-pg-lb__stage {
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
  }

  .crs-pg-lb__img {
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    object-fit: cover;
    border-radius: 0;
  }

  /* Zoomed: show the whole photo (not a cover-crop) so panning can reach every
     edge; the JS pan clamp is derived from this contained size. */
  .crs-pg-lb.is-zoomed .crs-pg-lb__img {
    object-fit: contain;
  }

  /* The stage owns horizontal gestures at all times — swipe navigates when not
     zoomed, drag pans when zoomed — so stop the browser from treating the touch
     as a scroll: that would cancel our pointer sequence and kill the swipe. */
  .crs-pg-lb__stage,
  .crs-pg-lb__img {
    touch-action: none;
  }

  .crs-pg-lb.is-zoomed .crs-pg-lb__stage,
  .crs-pg-lb.is-zoomed .crs-pg-lb__img {
    cursor: grab;
  }

  .crs-pg-lb:not(.is-zoomed) .crs-pg-lb__zoom {
    display: block;
  }

  /* Arrows — pinned in a centred row just below the image's fixed bottom edge
     (56px apart, matching the design), so they hold position across states. */
  .crs-pg-lb__nav {
    position: fixed;
    top: calc(198px + 100vw + 20px);
    padding: 8px;
  }

  .crs-pg-lb__nav--prev {
    left: auto;
    right: 50%;
    margin: 0 28px 0 0;
  }

  .crs-pg-lb__nav--next {
    left: 50%;
    right: auto;
    margin: 0 0 0 28px;
  }

  .crs-pg-lb__nav img {
    width: 15px;
    height: 30px;
  }
}
`, d = "Product gallery", w = ".image-popup a[href]", L = ".worktop-thumbnail-slider img", X = "https://houseofworktops.co.uk/catalog/view/theme/houseofworktops/image/svg-icons/video-previous.svg", D = "https://houseofworktops.co.uk/catalog/view/theme/houseofworktops/image/svg-icons/video-next.svg", b = 2, y = 20;
  class F {
    constructor() {
      this.customerPhotos = [], this.slides = [], this.boundary = 0, this.index = 0, this.loadToken = 0, this.kitchenViewed = !1, this.ghostDir = 0, this.lastFocused = null, this.zoomed = !1, this.dragging = !1, this.moved = !1, this.swiping = !1, this.sx = 0, this.sy = 0, this.startPanX = 0, this.startPanY = 0, this.panX = 0, this.panY = 0, this.init();
    }
    async init() {
      if (document.getElementById("crsPgLightbox")) return;
      const t = z();
      !t || !t.length || (this.customerPhotos = t, await _(w), g(V), this.buildViewer(), document.addEventListener("click", (e) => this.onGalleryClick(e), !0), C(() => {
        this.customerPhotos.forEach((e) => h(e.src)), this.getProductPhotos().forEach((e) => h(e.src));
      }), document.addEventListener("pointerover", (e) => this.onIntent(e), !0));
    }
    // Preload the product photo under the pointer (hover on desktop, first touch
    // contact on mobile) so it is usually decoded before the click lands.
    onIntent(t) {
      const e = t.target;
      if (!e || !e.closest) return;
      const n = e.closest(w), s = n || e.closest(L);
      s && h((n ? n.getAttribute("href") : s.getAttribute("src")) || "");
    }
    // --- Product photos: read the ordered, de-duplicated full-res URLs live ---
    getProductPhotos() {
      const t = Array.from(
        document.querySelectorAll(w)
      ), e = /* @__PURE__ */ new Set(), n = [], s = x();
      return t.forEach((i) => {
        const o = i.getAttribute("href");
        if (!o) return;
        const a = this.stem(o);
        if (e.has(a)) return;
        e.add(a);
        const l = i.querySelector("img"), U = l && l.getAttribute("alt") || `${s} product photo`;
        n.push({ src: o, alt: U });
      }), n;
    }
    // Filename stem without the `-WxH` size suffix / extension, for matching a
    // mobile thumbnail (500x500) to its desktop full-res href (1000x1000).
    stem(t) {
      try {
        t = decodeURIComponent(t);
      } catch {
      }
      return (t.split("?")[0].split("#")[0].split("/").pop() || "").replace(/-\d+x\d+(?=\.\w+$)/, "").replace(/\.\w+$/, "").toLowerCase();
    }
    onGalleryClick(t) {
      const e = t.target;
      if (!e || !e.closest) return;
      const n = e.closest(w), s = n || e.closest(L);
      if (!s) return;
      t.preventDefault(), t.stopImmediatePropagation();
      const i = this.getProductPhotos();
      if (!i.length) return;
      const o = this.stem(
        (n ? n.getAttribute("href") : s.getAttribute("src")) || ""
      ), a = i.findIndex((l) => this.stem(l.src) === o);
      this.openCombined(i, a < 0 ? 0 : a);
    }
    openCombined(t, e) {
      this.boundary = t.length, this.slides = [
        ...t.map((i) => ({ ...i, group: "product" })),
        ...this.customerPhotos.map((i) => ({ ...i, group: "kitchen" }))
      ];
      const n = this.lb.querySelector('.crs-pg-lb__seg[data-group="product"]'), s = this.lb.querySelector('.crs-pg-lb__seg[data-group="kitchen"]');
      n && (n.textContent = `Product photos (${t.length})`), s && (s.textContent = `Real kitchens (${this.customerPhotos.length})`), this.open(e);
    }
    // ---- Viewer (reels-style chrome) ----
    buildViewer() {
      const t = document.createElement("div");
      t.className = "crs-pg-lb", t.id = "crsPgLightbox", t.setAttribute("role", "dialog"), t.setAttribute("aria-modal", "true"), t.setAttribute("aria-hidden", "true"), t.setAttribute("aria-label", "Product photo viewer"), t.innerHTML = /* HTML */
      `
      <button class="crs-pg-lb__nav crs-pg-lb__nav--prev" type="button" aria-label="Previous photo">
        <img src="${X}" alt="" width="23" height="46" aria-hidden="true" />
      </button>
      <div class="crs-pg-lb__frame">
        <div class="crs-pg-lb__switch" role="tablist" aria-label="Photo type">
          <span class="crs-pg-lb__thumb" aria-hidden="true"></span>
          <button class="crs-pg-lb__seg is-active" type="button" data-group="product">
            Product photos
          </button>
          <button class="crs-pg-lb__seg" type="button" data-group="kitchen">
            Real kitchens
          </button>
        </div>
        <button class="crs-pg-lb__close" type="button" aria-label="Close">
          <svg viewBox="0 0 14 14" aria-hidden="true" focusable="false">
            <line x1="2" y1="2" x2="12" y2="12"></line>
            <line x1="12" y1="2" x2="2" y2="12"></line>
          </svg>
        </button>
        <div class="crs-pg-lb__stage">
          <img class="crs-pg-lb__img" id="crsPgImg" alt="" draggable="false" />
          <img class="crs-pg-lb__img crs-pg-lb__img--ghost" alt="" aria-hidden="true" draggable="false" />
          <button class="crs-pg-lb__zoom" type="button">Click photo to zoom</button>
        </div>
      </div>
      <button class="crs-pg-lb__nav crs-pg-lb__nav--next" type="button" aria-label="Next photo">
        <img src="${D}" alt="" width="23" height="46" aria-hidden="true" />
      </button>
      <div class="crs-pg-lb__spinner" aria-hidden="true"></div>`, document.body.appendChild(t), this.lb = t, this.img = t.querySelector("#crsPgImg"), this.ghost = t.querySelector(".crs-pg-lb__img--ghost"), this.stage = t.querySelector(".crs-pg-lb__stage"), this.thumb = t.querySelector(".crs-pg-lb__thumb"), t.querySelector(".crs-pg-lb__close").addEventListener("click", () => {
        c("exp_gallery_close", "Close", "click", d), this.close();
      }), t.querySelector(".crs-pg-lb__nav--prev").addEventListener(
        "click",
        () => this.navigate(-1, "Arrow Left")
      ), t.querySelector(".crs-pg-lb__nav--next").addEventListener(
        "click",
        () => this.navigate(1, "Arrow Right")
      ), t.querySelectorAll(".crs-pg-lb__seg").forEach((n) => {
        n.addEventListener("click", () => {
          const s = n.getAttribute("data-group"), i = s === "product" ? "Product photos" : "Real kitchens";
          this.showAt(s === "kitchen" ? this.boundary : 0), c("exp_gallery_switch", `${i}`, "click", d);
        });
      });
      const e = t.querySelector(".crs-pg-lb__zoom");
      e.addEventListener("pointerdown", (n) => n.stopPropagation()), e.addEventListener("click", (n) => {
        n.stopPropagation(), this.setZoom(!0);
      }), t.addEventListener("click", (n) => {
        n.target === t && (c("exp_gallery_overlay", "Overlay close", "click", d), this.close());
      }), this.stage.addEventListener("pointerdown", (n) => this.onPointerDown(n)), this.stage.addEventListener("pointermove", (n) => this.onPointerMove(n)), this.stage.addEventListener("pointerup", (n) => this.onPointerUp(n)), this.stage.addEventListener("pointercancel", () => {
        this.dragging = !1, this.zoomed || this.springBack();
      }), document.addEventListener("keydown", (n) => {
        t.getAttribute("aria-hidden") !== "true" && (n.key === "Escape" ? this.close() : n.key === "ArrowLeft" ? this.showAt(this.index - 1) : n.key === "ArrowRight" ? this.showAt(this.index + 1) : n.key === "Tab" && this.trapFocus(n));
      });
    }
    isMobile() {
      return window.matchMedia("(max-width: 480px)").matches;
    }
    // ---- Zoom / pan (mobile) ----
    setZoom(t) {
      t && !this.isMobile() || (this.zoomed = t, this.panX = 0, this.panY = 0, this.lb.classList.toggle("is-zoomed", t), t ? (requestAnimationFrame(() => this.applyPan()), c("exp_gallery_zoom", `Zoom ${this.index + 1}`, "click", d)) : this.img.style.transform = "");
    }
    applyPan() {
      const t = this.stage.clientWidth, e = this.stage.clientHeight, n = this.img.naturalWidth, s = this.img.naturalHeight;
      let i, o;
      if (n && s) {
        const a = Math.min(t / n, e / s);
        i = Math.max(0, (n * a * b - t) / 2), o = Math.max(0, (s * a * b - e) / 2);
      } else
        i = (b - 1) * t / 2, o = (b - 1) * e / 2;
      this.panX = Math.min(i, Math.max(-i, this.panX)), this.panY = Math.min(o, Math.max(-o, this.panY)), this.img.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${b})`;
    }
    onPointerDown(t) {
      if (!this.swiping) {
        this.dragging = !0, this.moved = !1, this.sx = t.clientX, this.sy = t.clientY, this.startPanX = this.panX, this.startPanY = this.panY;
        try {
          this.stage.setPointerCapture(t.pointerId);
        } catch {
        }
      }
    }
    onPointerMove(t) {
      if (!this.dragging) return;
      const e = t.clientX - this.sx, n = t.clientY - this.sy;
      if ((Math.abs(e) > 6 || Math.abs(n) > 6) && (this.moved = !0), this.zoomed)
        this.panX = this.startPanX + e, this.panY = this.startPanY + n, this.applyPan(), t.preventDefault();
      else if (this.moved && this.isMobile()) {
        const s = this.swipeW() + y, i = Math.max(-s, Math.min(s, e)), o = e < 0 ? 1 : -1;
        this.setGhost(o), this.img.style.transform = `translateX(${i}px)`, this.ghost.style.transform = `translateX(${i + o * s}px)`, t.preventDefault();
      }
    }
    onPointerUp(t) {
      if (!this.dragging) return;
      this.dragging = !1;
      const e = t.clientX - this.sx;
      if (this.zoomed) {
        this.moved || this.setZoom(!1);
        return;
      }
      if (Math.abs(e) > this.swipeW() / 5) {
        const n = e < 0 ? 1 : -1, s = () => c(
          "exp_gallery_full_swipe",
          `Swipe ${n > 0 ? "left" : "right"} - ${this.index + 1}`,
          "other",
          d
        );
        this.isMobile() ? this.animateSwipe(n, s) : (this.showAt(this.index + n), s());
      } else this.moved ? this.springBack() : this.isMobile() && this.setZoom(!0);
    }
    swipeW() {
      return this.stage.clientWidth || window.innerWidth;
    }
    // Point the ghost <img> at the neighbour in `dir` and show it — it is the
    // incoming photo painted alongside the real one during drags and swipes.
    setGhost(t) {
      const e = this.slides.length, n = ((this.index + t) % e + e) % e, s = this.slides[n].src;
      this.ghost.getAttribute("src") !== s && (this.ghost.src = s), this.ghost.style.visibility = "visible", this.ghostDir = t;
    }
    hideGhost() {
      this.ghost.style.visibility = "hidden", this.ghost.style.transition = "", this.ghostDir = 0;
    }
    // Arrow navigation — same strip animation as a swipe on mobile; instant on
    // desktop (there the strip isn't a native affordance and isn't clipped for).
    navigate(t, e) {
      if (this.swiping) return;
      const n = () => c("exp_gallery_nav", `${e} - ${this.index + 1}`, "click", d);
      this.isMobile() && !this.zoomed ? this.animateSwipe(t, n) : (this.showAt(this.index + t), n());
    }
    // Slide one photo as one continuous strip: the current photo slides out
    // while the incoming neighbour (peeking via the ghost) slides to centre.
    // `report` fires at the swap so its event carries the destination number.
    animateSwipe(t, e) {
      this.swiping = !0;
      const n = this.img, s = this.ghost, i = this.swipeW() + y;
      this.ghostDir !== t && (this.setGhost(t), s.style.transition = "none", s.style.transform = `translateX(${t * i}px)`, s.offsetWidth), n.style.transition = s.style.transition = "transform 0.26s ease-out", n.style.transform = `translateX(${-t * i}px)`, s.style.transform = "translateX(0px)", setTimeout(() => {
        this.showAt(this.index + t), e(), n.style.transition = "none";
        const o = () => {
          n.style.transform = "", this.hideGhost(), requestAnimationFrame(() => {
            n.style.transition = "", this.swiping = !1;
          });
        };
        n.decode ? n.decode().then(o, o) : o();
      }, 270);
    }
    // Swipe released under the threshold — ease the strip back to centre.
    springBack() {
      const t = this.img, e = this.ghost;
      t.style.transition = "transform 0.18s ease", t.style.transform = "", this.ghostDir && (e.style.transition = "transform 0.18s ease", e.style.transform = `translateX(${this.ghostDir * (this.swipeW() + y)}px)`), setTimeout(() => {
        t.style.transition = "", this.hideGhost();
      }, 200);
    }
    // ---- Open / navigate / close ----
    showAt(t, e = !1) {
      const n = this.slides.length, s = (t % n + n) % n;
      this.index = s, this.zoomed && this.setZoom(!1);
      const i = this.slides[s];
      i.group === "kitchen" && !this.kitchenViewed && (this.kitchenViewed = !0, c("exp_gallery_kitchen_view", "First real kitchen photo", "view", d)), this.setImage(i.src, i.alt), h(this.slides[(s + 1) % n].src), h(this.slides[(s - 1 + n) % n].src), this.lb.querySelectorAll(".crs-pg-lb__seg").forEach((o) => {
        o.classList.toggle(
          "is-active",
          o.getAttribute("data-group") === i.group
        );
      }), this.moveThumb(e);
    }
    // Swap the displayed photo. Until it is decoded we add `is-loading`, which
    // hides the image-anchored chrome (switcher/close/arrows) and shows a spinner
    // — otherwise those elements bunch up on the still-collapsed, image-less frame.
    // We only gate when there is no image yet to give the frame a size; during
    // navigation the previous photo keeps the box open, so the chrome never
    // flickers and cached photos swap seamlessly.
    setImage(t, e) {
      const n = ++this.loadToken, s = !!this.img.naturalWidth;
      this.img.alt = e, this.img.src = t, s || this.lb.classList.add("is-loading");
      const i = () => {
        n === this.loadToken && this.lb.classList.remove("is-loading");
      };
      this.img.decode ? this.img.decode().then(i, i) : i();
    }
    // Slide the highlight pill onto the active segment (widths differ, so it is
    // measured live). `instant` snaps it into place on open, without animating.
    moveThumb(t = !1) {
      const e = this.lb.querySelector(".crs-pg-lb__seg.is-active");
      e && (t && (this.thumb.style.transition = "none"), this.thumb.style.width = `${e.offsetWidth}px`, this.thumb.style.height = `${e.offsetHeight}px`, this.thumb.style.transform = `translate(${e.offsetLeft}px, ${e.offsetTop}px)`, t && (this.thumb.offsetWidth, requestAnimationFrame(() => this.thumb.style.transition = "")));
    }
    open(t) {
      var e;
      this.lastFocused = document.activeElement, this.showAt(t, !0), this.lb.classList.add("is-open"), this.lb.setAttribute("aria-hidden", "false"), document.body.classList.add("crs-pg-modal-open"), (e = this.lb.querySelector(".crs-pg-lb__close")) == null || e.focus(), c("exp_gallery_open", `Opened photo ${t + 1}`, "click", d);
    }
    close() {
      var t;
      this.zoomed && this.setZoom(!1), this.kitchenViewed = !1, this.swiping = !1, this.img.style.transition = "", this.img.style.transform = "", this.ghost.style.transform = "", this.hideGhost(), this.loadToken++, this.lb.classList.remove("is-open", "is-loading"), this.lb.setAttribute("aria-hidden", "true"), document.body.classList.remove("crs-pg-modal-open"), (t = this.lastFocused) == null || t.focus(), this.lastFocused = null;
    }
    // Keep keyboard focus inside the open viewer (arrows hide on mobile).
    trapFocus(t) {
      const e = Array.from(
        this.lb.querySelectorAll("button")
      ).filter((o) => o.offsetParent !== null);
      if (!e.length) return;
      const n = e[0], s = e[e.length - 1], i = document.activeElement;
      t.shiftKey && i === n ? (t.preventDefault(), s.focus()) : !t.shiftKey && i === s && (t.preventDefault(), n.focus());
    }
  }
  const j = `/* Outer spacing for the relocated blocks, matching Figma.

   Desktop (node 2390:5912): 28px gap + inset 1px separator between the green reels
   section and the Free-services block, 25px from the separator to the heading, and a
   24px gap between the carpenter card and the value-badges row.

   Mobile <768px (node 2390:7539 / 2534:2): no separator, heading sits directly below
   the 28px gap, and a 28px gap before the value-badges row. */
/* Postcode / delivery-estimate block (the div.mb-4 holding #delivery_check):
   extra top spacing per Figma. */
/* Scope with the child combinator (\`#delivery_check\` is the form itself) so only the
   inner div directly wrapping it matches — the outer \`.col-md-5.mb-4\` column is also a
   \`.mb-4\` ancestor, and a bare \`:has(#delivery_check)\` would push the whole column down. */
.mb-4:has(> #delivery_check) {
  margin-top: 1.5rem;
}

/* The dropdown trigger inside it carries Bootstrap \`.mb-2\`; drop that bottom gap. */
.mb-4:has(> #delivery_check) .delivery-check-dropdown {
  margin-bottom: 0 !important;
}

/* Separator + top spacing below the green reels section, applied to whichever block
   leads the relocated group: the Free-services card when present, otherwise the
   value-badges row on PDPs that ship no card (e.g. upstands/splashbacks). */
.crs-rb-lead {
  position: relative;
  margin-top: 28px;
  padding-top: 25px !important;
}

.crs-rb-lead::before {
  content: "";
  position: absolute;
  top: 0;
  left: 14px;
  right: 14px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.crs-rb-free h5 {
  margin-top: 0 !important;
}

/* card -> badges gap (only when the badges row follows the card rather than leading) */
.crs-rb-badges:not(.crs-rb-lead) {
  margin-top: 24px;
}

@media (max-width: 767.98px) {
  /* mobile design has no separator; the lead block sits at the top of the group */
  .crs-rb-lead {
    padding-top: 0;
  }

  .crs-rb-lead::before {
    display: none;
  }

  .crs-rb-badges:not(.crs-rb-lead) {
    margin-top: 28px;
  }

  /* Decorative separator above the postcode block — present only in the mobile design
     (Figma node 2390:7466), absent on desktop. The host's own <hr> that drew this line
     is removed together with the Trustpilot widgets, so re-draw it here as a full-width
     border-top (matching the host hr). The block's existing 24px margin-top sits above the
     line; padding-top spaces it from the content. */
  .mb-4:has(> #delivery_check) {
    padding-top: 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  /* Carpenter-support card: the host's \`mx-1\` sets margin-left/right with !important —
     zero them so the card runs full width, and add a small right padding (Figma mobile). */
  .crs-rb-free .row.bg-gray-100 {
    margin: 0 !important;
    padding-right: 0.5rem;
  }
}
`;
  class O {
    constructor() {
      this.freeEl = null, this.badgesEl = null, this.init();
    }
    async init() {
      if (document.querySelector(".crs-rb-lead")) return;
      const t = await _(".reels-mobile-fullwidth");
      for (g(j); t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE; )
        t.removeChild(t.firstChild);
      this.relocate(t);
    }
    // Either block can render slightly after the reels anchor (the theme renders this
    // column in stages) and the free-services card may be absent entirely, so move each
    // block as soon as it appears and retry briefly for a late one.
    relocate(t, e = 0) {
      if (!this.freeEl) {
        for (const s of document.querySelectorAll("h5"))
          if (/Free services included/i.test(s.textContent || "")) {
            const i = s.closest("div.mb-0");
            i && (t.insertAdjacentElement("afterend", i), i.classList.add("crs-rb-free"), this.freeEl = i);
            break;
          }
      }
      if (!this.badgesEl)
        for (const s of document.querySelectorAll("div.row.align-items-start.py-2")) {
          const i = s.textContent || "";
          if (/Best Value for Money/i.test(i) && /2 Man Delivery/i.test(i)) {
            (this.freeEl ?? t).insertAdjacentElement("afterend", s), s.classList.add("crs-rb-badges"), this.badgesEl = s;
            break;
          }
        }
      const n = this.freeEl ?? this.badgesEl;
      if (n && (n.classList.add("crs-rb-lead"), this.badgesEl && this.badgesEl !== n && this.badgesEl.classList.remove("crs-rb-lead")), !(this.freeEl && this.badgesEl)) {
        if (e < 20) {
          setTimeout(() => this.relocate(t, e + 1), 250);
          return;
        }
        !this.freeEl && !this.badgesEl && m("RelocateBlocks: free-services and badges blocks not found", "warn");
      }
    }
  }
  const Z = `/* Trustpilot rating row (Figma node 2433:1324): centered "Excellent 4.8 ★★★★★ Trustpilot"
   on the dark-green reels section, sitting above the "Trusted by 150,000+" heading. */
.crs-tp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
  text-decoration: none;
}

.crs-tp:hover {
  text-decoration: none;
}

.crs-tp__rating {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  color: #fff;
  white-space: nowrap;
}

.crs-tp__stars {
  display: block;
  width: 100px;
  height: auto;
}

.crs-tp__logo {
  display: inline-flex;
  width: 77px;
  height: 19px;
}

.crs-tp__logo svg {
  display: block;
  width: 100%;
  height: 100%;
}
`, R = `<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 77 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Logo &#226;&#134;&#146; Img">
<path id="Vector" d="M20.2159 6.78487H28.0019V8.23389H24.9404V16.3796H23.257V8.23389H20.2091V6.78487H20.2159ZM27.6693 9.43238H29.1084V10.7731H29.1356C29.1831 10.5835 29.2713 10.4007 29.4003 10.2246C29.5293 10.0486 29.6854 9.87928 29.8687 9.73709C30.052 9.58812 30.2556 9.47301 30.4796 9.37822C30.7036 9.29019 30.9344 9.24279 31.1652 9.24279C31.3417 9.24279 31.4707 9.24956 31.5386 9.25633C31.6065 9.26311 31.6744 9.27665 31.749 9.28342V10.7595C31.6404 10.7392 31.5318 10.7257 31.4164 10.7121C31.301 10.6986 31.1924 10.6918 31.0838 10.6918C30.8258 10.6918 30.5815 10.746 30.3507 10.8476C30.1199 10.9491 29.923 11.1049 29.7533 11.3012C29.5836 11.5044 29.4478 11.7481 29.346 12.046C29.2442 12.344 29.1967 12.6825 29.1967 13.0685V16.3728H27.6625V9.43238L27.6693 9.43238ZM38.802 16.3796H37.295V15.4113H37.2678C37.0778 15.7634 36.7995 16.041 36.4261 16.2509C36.0527 16.4608 35.6726 16.5692 35.2857 16.5692C34.3693 16.5692 33.704 16.3457 33.2967 15.892C32.8894 15.4384 32.6858 14.7545 32.6858 13.8404V9.43238H34.2199V13.6914C34.2199 14.3008 34.3353 14.7342 34.5729 14.9847C34.8037 15.2352 35.1363 15.3639 35.5572 15.3639C35.883 15.3639 36.1478 15.3165 36.365 15.2149C36.5822 15.1134 36.7587 14.9847 36.8877 14.8154C37.0235 14.6529 37.1185 14.4498 37.1796 14.2196C37.2407 13.9894 37.2678 13.7388 37.2678 13.468V9.43916H38.802V16.3796ZM41.4154 14.1519C41.463 14.5988 41.6327 14.9102 41.9246 15.0931C42.2232 15.2691 42.5762 15.3639 42.9903 15.3639C43.1329 15.3639 43.2958 15.3504 43.4791 15.33C43.6623 15.3097 43.8388 15.2623 43.995 15.2014C44.1579 15.1405 44.2868 15.0457 44.3955 14.9238C44.4973 14.8019 44.5448 14.6462 44.538 14.4498C44.5312 14.2534 44.4566 14.0909 44.3208 13.969C44.185 13.8404 44.0153 13.7456 43.8049 13.6643C43.5945 13.5899 43.3569 13.5222 43.0853 13.468C42.8138 13.4138 42.5423 13.3529 42.264 13.2919C41.9789 13.231 41.7005 13.1497 41.4358 13.0617C41.1711 12.9737 40.9335 12.8518 40.723 12.6961C40.5126 12.5471 40.3429 12.3507 40.2207 12.1138C40.0917 11.8768 40.0306 11.5856 40.0306 11.2335C40.0306 10.8543 40.1257 10.5428 40.309 10.2855C40.4922 10.0282 40.7298 9.82511 41.0081 9.66937C41.2932 9.51364 41.6055 9.4053 41.9517 9.33759C42.2979 9.27665 42.6305 9.24279 42.9428 9.24279C43.3026 9.24279 43.6488 9.28342 43.9746 9.3579C44.3004 9.43238 44.5991 9.55426 44.8638 9.73031C45.1286 9.89959 45.3458 10.123 45.5223 10.3939C45.6988 10.6647 45.8074 10.9965 45.8549 11.3825H44.2529C44.1782 11.0168 44.0153 10.7663 43.7506 10.6444C43.4858 10.5158 43.1804 10.4548 42.841 10.4548C42.7323 10.4548 42.6034 10.4616 42.454 10.4819C42.3047 10.5022 42.1689 10.5361 42.0332 10.5835C41.9042 10.6309 41.7956 10.7054 41.7005 10.8002C41.6123 10.895 41.5648 11.0168 41.5648 11.1726C41.5648 11.3622 41.6327 11.5111 41.7616 11.6262C41.8906 11.7413 42.0603 11.8361 42.2707 11.9174C42.4812 11.9919 42.7188 12.0596 42.9903 12.1138C43.2618 12.1679 43.5401 12.2289 43.8252 12.2898C44.1036 12.3507 44.3751 12.432 44.6466 12.52C44.9181 12.608 45.1557 12.7299 45.3662 12.8857C45.5766 13.0414 45.7463 13.231 45.8753 13.4612C46.0043 13.6914 46.0721 13.9826 46.0721 14.3211C46.0721 14.7342 45.9771 15.0795 45.787 15.3707C45.597 15.6551 45.3526 15.892 45.0539 16.0681C44.7552 16.2441 44.4158 16.3796 44.0493 16.4608C43.6827 16.5421 43.3161 16.5827 42.9564 16.5827C42.5151 16.5827 42.1078 16.5353 41.7345 16.4337C41.3611 16.3322 41.0353 16.1832 40.7638 15.9868C40.4922 15.7837 40.275 15.5332 40.1189 15.2352C39.9628 14.9373 39.8813 14.5784 39.8677 14.1654H41.4154V14.1519ZM46.4794 9.43238H47.6402V7.34687H49.1744V9.43238H50.5592V10.5767H49.1744V14.2873C49.1744 14.4498 49.1811 14.5852 49.1947 14.7071C49.2083 14.8222 49.2422 14.9238 49.2898 15.005C49.3373 15.0863 49.4119 15.1472 49.5138 15.1879C49.6156 15.2285 49.7446 15.2488 49.9211 15.2488C50.0297 15.2488 50.1383 15.2488 50.2469 15.242C50.3555 15.2352 50.4641 15.2217 50.5727 15.1946V16.3796C50.403 16.3999 50.2333 16.4134 50.0772 16.4337C49.9143 16.4541 49.7514 16.4608 49.5817 16.4608C49.1744 16.4608 48.8485 16.4202 48.6041 16.3457C48.3598 16.2712 48.1629 16.1561 48.0272 16.0072C47.8846 15.8582 47.7964 15.6754 47.742 15.4519C47.6945 15.2285 47.6606 14.9712 47.6538 14.6868V10.5902H46.493V9.43238H46.4794ZM51.6453 9.43238H53.0979V10.3736H53.1251C53.3423 9.9673 53.641 9.68292 54.0279 9.50687C54.4149 9.33082 54.8289 9.24279 55.2837 9.24279C55.8336 9.24279 56.3088 9.33759 56.7161 9.53395C57.1233 9.72354 57.4628 9.98762 57.7343 10.3262C58.0058 10.6647 58.2027 11.0575 58.3384 11.5044C58.4742 11.9512 58.5421 12.432 58.5421 12.9398C58.5421 13.407 58.481 13.8607 58.3588 14.2941C58.2366 14.7342 58.0533 15.1201 57.809 15.4587C57.5646 15.7973 57.2523 16.0613 56.8722 16.2645C56.492 16.4676 56.0508 16.5692 55.5349 16.5692C55.3109 16.5692 55.0869 16.5488 54.8629 16.5082C54.6389 16.4676 54.4216 16.3999 54.218 16.3119C54.0144 16.2238 53.8175 16.1087 53.6478 15.9665C53.4713 15.8243 53.3287 15.6618 53.2066 15.479H53.1794V18.9458H51.6453V9.43238ZM57.008 12.9127C57.008 12.6013 56.9672 12.2966 56.8858 11.9986C56.8043 11.7007 56.6821 11.4434 56.5192 11.2132C56.3563 10.983 56.1526 10.8002 55.915 10.6647C55.6707 10.5293 55.3924 10.4548 55.0801 10.4548C54.4352 10.4548 53.9465 10.6783 53.6206 11.1252C53.2948 11.5721 53.1319 12.1679 53.1319 12.9127C53.1319 13.2648 53.1726 13.5899 53.2609 13.8878C53.3491 14.1857 53.4713 14.443 53.6478 14.6597C53.8175 14.8764 54.0211 15.0457 54.2587 15.1675C54.4963 15.2962 54.7746 15.3571 55.0869 15.3571C55.4399 15.3571 55.7318 15.2826 55.9761 15.1405C56.2205 14.9983 56.4174 14.8087 56.5735 14.5852C56.7296 14.355 56.845 14.0977 56.9129 13.8065C56.974 13.5154 57.008 13.2175 57.008 12.9127ZM59.7164 6.78487H61.2506V8.23389H59.7164V6.78487ZM59.7164 9.43238H61.2506V16.3796H59.7164V9.43238ZM62.6218 6.78487H64.1559V16.3796H62.6218V6.78487ZM68.8602 16.5692C68.3035 16.5692 67.808 16.4744 67.3736 16.2915C66.9391 16.1087 66.5725 15.8514 66.2671 15.5332C65.9684 15.2082 65.7376 14.8222 65.5815 14.3753C65.4253 13.9284 65.3439 13.4341 65.3439 12.8992C65.3439 12.3711 65.4253 11.8835 65.5815 11.4366C65.7376 10.9897 65.9684 10.6038 66.2671 10.2788C66.5657 9.95376 66.9391 9.70323 67.3736 9.52041C67.808 9.33759 68.3035 9.24279 68.8602 9.24279C69.4168 9.24279 69.9123 9.33759 70.3468 9.52041C70.7812 9.70323 71.1478 9.96053 71.4533 10.2788C71.7519 10.6038 71.9827 10.9897 72.1389 11.4366C72.295 11.8835 72.3765 12.3711 72.3765 12.8992C72.3765 13.4341 72.295 13.9284 72.1389 14.3753C71.9827 14.8222 71.7519 15.2082 71.4533 15.5332C71.1546 15.8582 70.7812 16.1087 70.3468 16.2915C69.9123 16.4744 69.4168 16.5692 68.8602 16.5692ZM68.8602 15.3571C69.1996 15.3571 69.4983 15.2826 69.7494 15.1405C70.0006 14.9983 70.2042 14.8087 70.3671 14.5784C70.5301 14.3482 70.6455 14.0842 70.7269 13.793C70.8016 13.5018 70.8423 13.2039 70.8423 12.8992C70.8423 12.6013 70.8016 12.3101 70.7269 12.0122C70.6523 11.7143 70.5301 11.457 70.3671 11.2267C70.2042 10.9965 70.0006 10.8137 69.7494 10.6715C69.4983 10.5293 69.1996 10.4548 68.8602 10.4548C68.5208 10.4548 68.2221 10.5293 67.9709 10.6715C67.7198 10.8137 67.5161 11.0033 67.3532 11.2267C67.1903 11.457 67.0749 11.7143 66.9934 12.0122C66.9187 12.3101 66.878 12.6013 66.878 12.8992C66.878 13.2039 66.9187 13.5018 66.9934 13.793C67.0681 14.0842 67.1903 14.3482 67.3532 14.5784C67.5161 14.8087 67.7198 14.9983 67.9709 15.1405C68.2221 15.2894 68.5208 15.3571 68.8602 15.3571ZM72.8245 9.43238H73.9853V7.34687H75.5194V9.43238H76.9042V10.5767H75.5194V14.2873C75.5194 14.4498 75.5262 14.5852 75.5398 14.7071C75.5533 14.8222 75.5873 14.9238 75.6348 15.005C75.6823 15.0863 75.757 15.1472 75.8588 15.1879C75.9606 15.2285 76.0896 15.2488 76.2661 15.2488C76.3747 15.2488 76.4833 15.2488 76.5919 15.242C76.7005 15.2352 76.8092 15.2217 76.9178 15.1946V16.3796C76.7481 16.3999 76.5784 16.4134 76.4222 16.4337C76.2593 16.4541 76.0964 16.4608 75.9267 16.4608C75.5194 16.4608 75.1936 16.4202 74.9492 16.3457C74.7048 16.2712 74.508 16.1561 74.3722 16.0072C74.2296 15.8582 74.1414 15.6754 74.0871 15.4519C74.0396 15.2285 74.0056 14.9712 73.9988 14.6868V10.5902H72.8381V9.43238L72.8245 9.43238Z" fill="var(--fill-0, white)"/>
<path id="Vector_2" d="M18.4238 6.78487H11.3912L9.21896 0.108528L7.03994 6.78487L0.00735936 6.7781L5.70267 10.9085L3.52365 17.5781L9.21896 13.4544L14.9075 17.5781L12.7353 10.9085L18.4238 6.78487Z" fill="var(--fill-0, #00B67A)"/>
<path id="Vector_3" d="M13.224 12.4185L12.7353 10.9085L9.21896 13.4544L13.224 12.4185Z" fill="var(--fill-0, #005128)"/>
</g>
</svg>
`, W = "https://widget.trustpilot.com/trustbox-data/5419b6ffb0d04a076446a9af?businessUnitId=5de985d57cad6c0001a1286e&locale=en-GB", B = "https://cdn.trustpilot.net/brand-assets/4.1.0/stars", f = {
    trustScore: 4.8,
    stars: 5,
    profileUrl: "https://uk.trustpilot.com/review/houseofworktops.co.uk"
  };
  class Y {
    constructor() {
      this.init();
    }
    async init() {
      if (document.querySelector(".crs-tp")) return;
      const e = (await _("#reels-slider-section .reels-heading")).parentElement;
      if (!e) return;
      g(Z), this.hideOriginal();
      const n = this.buildRow(f);
      e.insertAdjacentElement("afterbegin", n), this.fetchData().then((s) => this.fillRow(n, s));
    }
    // The stock Trustpilot widgets sit in the configurator (#product); the design drops
    // them in favour of this row, so hide them — along with the <hr> separator that sits
    // immediately before them (it would otherwise dangle once the widgets are gone).
    hideOriginal() {
      g(
        "#product .trustpilot-widget{display:none !important;}#product hr.mt-4:has(+ .trustpilot-widget){display:none !important;}"
      );
    }
    async fetchData() {
      try {
        const t = await fetch(W);
        if (!t.ok) throw new Error(`HTTP ${t.status}`);
        const e = await t.json(), n = e.businessUnit || e.businessEntity || {};
        return {
          trustScore: typeof n.trustScore == "number" ? n.trustScore : f.trustScore,
          stars: typeof n.stars == "number" ? n.stars : f.stars,
          profileUrl: e.links && e.links.profileUrl || f.profileUrl
        };
      } catch {
        return m("TrustpilotRating: live data fetch failed, using fallback", "warn"), { ...f };
      }
    }
    // TrustScore -> Trustpilot rating word.
    label(t) {
      return t >= 4.3 ? "Excellent" : t >= 3.8 ? "Great" : t >= 3 ? "Average" : t >= 2 ? "Poor" : "Bad";
    }
    // Trustpilot stars asset name: integer -> "5", half-step -> "4.5".
    starsFile(t) {
      const e = Math.round(t * 2) / 2;
      return e % 1 === 0 ? String(e) : e.toFixed(1);
    }
    buildRow(t) {
      const e = document.createElement("a");
      return e.className = "crs-tp", e.target = "_blank", e.rel = "noopener noreferrer", this.fillRow(e, t), e;
    }
    // (Re)render the row's data-driven content; used for both the initial fallback
    // render and the live-data update.
    fillRow(t, e) {
      const n = this.label(e.trustScore), s = e.trustScore.toFixed(1);
      t.href = e.profileUrl, t.setAttribute("aria-label", `${n} ${s} out of 5 on Trustpilot`), t.innerHTML = /* HTML */
      ` <span class="crs-tp__rating">
        <span class="crs-tp__word">${n}</span>
        <span class="crs-tp__score">${s}</span>
      </span>
      <img
        class="crs-tp__stars"
        src="${B}/stars-${this.starsFile(e.stars)}.svg"
        alt=""
        width="100"
      />
      <span class="crs-tp__logo" aria-hidden="true">${R}</span>`;
    }
  }
  const G = "";
  P({ name: "PDP Introducing Customer Photos", dev: "OS" }), S("exp_pdp_photo");
  class N {
    constructor() {
      this.init();
    }
    init() {
      g(G), new H(), new F(), new O(), new Y();
    }
  }
  new N();
})();
