(function() {
  "use strict";
  const w = (n, e, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: e,
      event_type: t,
      event_loc: i
    }), d(`Event: ${n} | ${e} | ${t} | ${i}`, "success");
  }, p = (n) => new Promise((e) => {
    const t = document.querySelector(n);
    t && e(t);
    const i = new MutationObserver(() => {
      const s = document.querySelector(n);
      s && (e(s), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), E = ({ name: n, dev: e }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, v = (n, e, t, i, s = 1e3, o = 0.5) => {
    let g, c;
    if (g = new IntersectionObserver(
      function(m) {
        m[0].isIntersecting === !0 ? c = setTimeout(() => {
          w(
            e,
            m[0].target.dataset.visible || i || "",
            "view",
            t
          ), g.disconnect();
        }, s) : (d("Element is not fully visible", "warn"), clearTimeout(c));
      },
      { threshold: [o] }
    ), typeof n == "string") {
      const m = document.querySelector(n);
      m && g.observe(m);
    } else
      g.observe(n);
  }, d = (n, e = "info") => {
    let t;
    switch (e) {
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
    console.log(`%c>>> ${n}`, `${t} font-size: 16px; font-weight: 600`);
  }, k = `.crs-hide {
  display: none !important;
}

.crs-mobile {
  display: none;
}

@media (max-width: 768px) {
  .crs-mobile {
    display: block;
  }

  .crs-desktop {
    display: none;
  }
}
`, h = "https://ab.conversionrate.store/lemieux/home-page-hero/img", y = [
    {
      id: "new-arrivals",
      href: "/new-in/aw25",
      title: { sub: "New Arrivals", main: "AW25", collection: "Collection" },
      images: {
        desktop: `${h}/hero_new_arrivals_desktop.webp`,
        mob: `${h}/hero_new_arrivals_desktop.webp`
      }
    },
    {
      id: "clothing",
      href: "/clothing",
      title: "Clothing",
      images: {
        desktop: "https://www.lemieux.com/static/media/catalog/product/i/t/it07156_lifestyle_ladies_base_layer_damson_2.jpg",
        mob: `${h}/hero_clothing_2.webp`
      }
    },
    {
      id: "horse-wear",
      href: "/horsewear",
      title: "Horse Wear",
      images: {
        desktop: "https://www.lemieux.com/static/media/catalog/product/a/u/au25day4_12842.jpg",
        mob: `${h}/hero_horse_wear.webp`
      }
    },
    {
      id: "toys",
      href: "/toys",
      title: "Toys",
      images: {
        desktop: `${h}/toys_desk_2.webp`,
        mob: `${h}/toys_mob.webp`
      }
    }
  ];
  function l(n, e) {
    const t = n instanceof Error ? n.message : String(n);
    d(`${e}: ${t}`, "error");
  }
  const T = `icms-component:has(.crs-hero) > div:not(.crs-hero) {
  display: none;
}

.crs-hero {
  --gap: 8px;
  display: flex;
  gap: var(--gap);
}

.crs-hero-left {
  width: 80%;
}
.crs-hero-right {
  width: 44%;
  display: grid;
  gap: var(--gap);
  grid-template-columns: 1fr 1fr;
}

[data-hero='clothing'] {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

[data-hero='horse-wear'] {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

[data-hero='toys'] {
  grid-column: 1 / -1;
  grid-row: 2 / 3;
}

.crs-hero-block {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
}

.crs-hero-block picture {
  position: relative;
  display: flex;
  height: 100%;
}
.crs-hero-block img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

[data-hero='new-arrivals'] picture::after {
  content: '';
  position: absolute;
  display: block;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgb(0 0 0 / 73%) 0%,
    rgb(200 200 200 / 0%) 100%
  );
}
[data-hero='new-arrivals'] img {
  aspect-ratio: 1075 / 850; /* ~1.26:1 */
}

[data-hero='clothing'] picture::after {
  content: '';
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 50%;
  background: linear-gradient(
    1deg,
    rgb(0 0 0 / 73%) 0%,
    rgb(200 200 200 / 0%) 100%
  );
}

[data-hero='clothing'] img {
  aspect-ratio: 304 / 550; /* ~0.55:1 */
}

[data-hero='horse-wear'] picture::after {
  content: '';
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 50%;
  background: linear-gradient(
    1deg,
    rgb(0 0 0 / 73%) 0%,
    rgb(200 200 200 / 0%) 100%
  );
}

[data-hero='horse-wear'] img {
  aspect-ratio: 304 / 550; /* ~0.55:1 */
}

[data-hero='toys'] picture::after {
  content: '';
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 50%;
  background: linear-gradient(
    1deg,
    rgb(0 0 0 / 73%) 0%,
    rgb(200 200 200 / 0%) 100%
  );
}

[data-hero='toys'] img {
  aspect-ratio: 619 / 293; /* ~2.11:1 */
}

.crs-hero-block-text {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}

.crs-block-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  font-family: baskerville-urw, sans-serif;
  font-size: 2em;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: 2px;
}

[data-hero='new-arrivals'] .crs-hero-block-text {
  left: 10%;
  bottom: 40%;
  transform: translateY(50%);
  width: max-content;
}
[data-hero='new-arrivals'] .crs-block-title {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
[data-hero='new-arrivals'] .crs-block-title .sub-title {
  text-transform: uppercase;
  font-family: source-sans-3, sans-serif;
  line-height: 1;
}

[data-hero='new-arrivals'] .crs-block-title .main-title {
  font-size: 3em;
  line-height: 1;
  margin: 0;
}

[data-hero='new-arrivals'] .crs-block-title .collection-title {
  text-transform: uppercase;
  font-family: source-sans-3, sans-serif;
  line-height: 1;
}

[data-crs-title='Popular Categories'] {
  padding-top: 32px;
  padding-bottom: 32px;
}

@media (max-width: 1100px) {
  .crs-block-title {
    font-size: 1.5em;
  }
}
@media (max-width: 700px) {
  .crs-hero {
    --gap: 5px;
    flex-direction: column;
  }
  .crs-hero-left,
  .crs-hero-right {
    width: 100%;
  }
  .crs-hero-right {
    grid-template-columns: 1fr 1fr;
  }

  [data-hero='new-arrivals'] .crs-hero-block-text {
    left: 5%;
    bottom: 40%;
    transform: translateY(50%);
    width: max-content;
  }
  .crs-block-title {
    font-size: 1.5em;
  }

  [data-hero='new-arrivals'] .crs-block-title {
    font-size: 1.2em;
    gap: 2px;
  }

  [data-hero='clothing'] {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  [data-hero='clothing'] img {
    height: auto;
    aspect-ratio: 304 / 409;
  }
  [data-hero='toys'] {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  [data-hero='toys'] img {
    height: auto;
    aspect-ratio: auto; /* ~2.11:1 */
  }
  [data-hero='horse-wear'] {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

  [data-hero='horse-wear'] img {
    aspect-ratio: 288 / 582;
    height: auto;
  }
}
`, r = class r {
    constructor() {
      this.eventsAborter = null, this.mutationObserver = null;
    }
    init() {
      try {
        this.addStyles(), this.changeHeroImageSection();
      } catch (e) {
        l(e, "Error initializing Hero section");
      }
    }
    async changeHeroImageSection() {
      try {
        const e = await p(r.TARGET_SELECTOR);
        if (!e) {
          console.warn(`Target ${r.TARGET_SELECTOR} not found`);
          return;
        }
        if (e.querySelector(r.HERO_CLASS))
          return;
        const i = () => {
          this.replaceHeroContent(e), this.setupEventListeners(e);
        };
        this.mutationObserver = new MutationObserver((s) => {
          s.forEach(() => {
            e.querySelector(r.HERO_CLASS) || i();
          });
        }), this.mutationObserver.observe(e, { childList: !0, subtree: !0 }), i();
      } catch (e) {
        l(e, "Error changing hero image section");
      }
    }
    replaceHeroContent(e) {
      this.eventsAborter && this.eventsAborter.abort(), e.insertAdjacentHTML("beforeend", this.renderNewHeroSection());
    }
    renderNewHeroSection() {
      const e = y.find((i) => i.id === "new-arrivals"), t = y.filter((i) => i.id !== "new-arrivals");
      return (
        /* HTML */
        `
      <div class="crs-hero">
        <div class="crs-hero-left">${e ? this.renderItem(e) : ""}</div>
        <div class="crs-hero-right">
          ${t.map((i) => this.renderItem(i)).join("")}
        </div>
      </div>
    `
      );
    }
    renderItem(e) {
      const t = this.renderTitle(e.title), i = this.generateAltText(e.title);
      return (
        /* HTML */
        `
      <a
        href="${e.href}"
        class="crs-hero-block"
        data-hero="${e.id}"
        data-title="${this.getDataTitle(e.title)}"
      >
        <picture>
          <source media="(min-width: 701px)" srcset="${e.images.desktop}" fetchpriority="high" />
          <source media="(max-width: 700px)" srcset="${e.images.mob}" fetchpriority="high" />
          <img src="${e.images.desktop}" alt="${i}" fetchpriority="high" />
        </picture>
        <div class="crs-hero-block-text">
          ${t}
          
        </div>
      </a>
    `
      );
    }
    renderTitle(e) {
      return typeof e == "string" ? `<div class="crs-block-title">${e}</div>` : (
        /* HTML */
        `<div class="crs-block-title">${[
          e.sub ? (
            /* HTML */
            `<span class="sub-title">${e.sub}</span>`
          ) : "",
          e.main ? (
            /* HTML */
            `<span class="main-title">${e.main}</span>`
          ) : "",
          e.collection ? (
            /* HTML */
            `<span class="collection-title">${e.collection}</span>`
          ) : ""
        ].filter(Boolean).join("")}</div>`
      );
    }
    generateAltText(e) {
      return typeof e == "string" ? e : [e.sub, e.main, e.collection].filter(Boolean).join(" ");
    }
    getDataTitle(e) {
      return typeof e == "string" ? e : e.sub || "";
    }
    setupEventListeners(e) {
      this.eventsAborter && this.eventsAborter.abort(), this.eventsAborter = new AbortController(), e.querySelectorAll("a.crs-hero-block").forEach((i) => {
        this.attachClickListener(i), this.attachVisibilityTracking(i);
      });
    }
    attachClickListener(e) {
      e.addEventListener(
        "click",
        (t) => {
          const i = e.dataset.title;
          if (!i) {
            console.warn("No title found for hero link", e);
            return;
          }
          w(
            "exp_hp_hero_click_1",
            i,
            "click",
            "Home page Hero Section"
          );
        },
        { signal: this.eventsAborter.signal }
      );
    }
    attachVisibilityTracking(e) {
      v(
        e,
        "exp_hp_hero_view_1",
        "Home page Hero Section",
        e.dataset.title || "",
        r.VISIBILITY_THRESHOLD
      );
    }
    addStyles() {
      if (document.getElementById(r.STYLES_ID)) return;
      const e = document.createElement("style");
      e.id = r.STYLES_ID, e.textContent = T, document.head.appendChild(e);
    }
    destroy() {
      var e;
      this.eventsAborter && (this.eventsAborter.abort(), this.eventsAborter = null), this.mutationObserver && (this.mutationObserver.disconnect(), this.mutationObserver = null), (e = document == null ? void 0 : document.querySelector(r.HERO_CLASS)) == null || e.remove();
    }
  };
  r.STYLES_ID = "crs-hero-styles", r.VISIBILITY_THRESHOLD = 0, r.TARGET_SELECTOR = "icms-component:has(page-component-hero-image)", r.HERO_CLASS = ".crs-hero";
  let x = r;
  const O = `[data-crs-hide='true']:not([data-crs-no-hide]) {
  display: none !important;
}

[data-crs-title='Popular Categories']:not([data-crs-no-hide]) {
  display: none !important;
}

.crs-top-section:has([href="/journey-to-the-top-yasmin-ingham"]) {
  display: none !important;
}

/* .page-view-boundary > icms-component:not(.crs-top-section) {
  display: none !important;
} */`, C = [
    "Disney Inspired Hobby Horses",
    "Explore LeMieux Toys",
    "NEW SEASON",
    "Journey to the Top"
  ], u = class u {
    constructor() {
      this.resizeObserver = null, this.resizeTimeout = null, this.mutationObservers = /* @__PURE__ */ new Set();
    }
    init() {
      try {
        this.addStyles(), this.hideSection(), this.changeSectionCopy(), this.observeResize();
      } catch (e) {
        l(e, "Error initializing Hide Sections");
      }
    }
    async hideSection() {
      try {
        const e = await p(".page-view-boundary"), t = e == null ? void 0 : e.querySelectorAll(
          ":scope > icms-component"
        );
        if (!t) {
          d("No components found in page view boundary", "warn");
          return;
        }
        const i = Array.from(t);
        this.processInitialComponents(i), this.processChainHiding(i);
      } catch (e) {
        l(e, "Error hiding sections");
      }
    }
    processInitialComponents(e) {
      e.forEach((t) => {
        try {
          t.classList.add("crs-top-section"), this.resetHideAttribute(t), this.checkTitleMarkers(t), this.handleOutfitBuilder(t);
        } catch (i) {
          l(i, "Processing initial component");
        }
      });
    }
    processChainHiding(e) {
      e.forEach((t) => {
        var i;
        try {
          const s = t.previousElementSibling, o = t.querySelector("h1, h3");
          if ((i = t.textContent) == null ? void 0 : i.includes(
            "@lemieuxproductsofficial"
          )) {
            t.dataset.crsHide = "false";
            return;
          }
          (s == null ? void 0 : s.dataset.crsHide) === "true" && !o && (t.dataset.crsHide = "true");
        } catch (s) {
          l(s, "Processing chain hiding");
        }
      });
    }
    resetHideAttribute(e) {
      e.hasAttribute("data-crs-hide") && e.removeAttribute("data-crs-hide");
    }
    checkTitleMarkers(e) {
      const t = e.querySelector("h1, h2, h3");
      C.some(
        (i) => {
          var s;
          return (s = t == null ? void 0 : t.textContent) == null ? void 0 : s.includes(i);
        }
      ) && (e.dataset.crsHide = "true");
    }
    handleOutfitBuilder(e) {
      var i;
      const t = (i = e.querySelector(".hero")) == null ? void 0 : i.textContent;
      t != null && t.includes("Outfit Builder") && (e.classList.add("crs-target-outfit-builder"), e.innerHTML = "");
    }
    async changeSectionCopy() {
      try {
        const e = await p(".page-view-boundary"), t = e == null ? void 0 : e.querySelectorAll(
          ":scope > icms-component"
        );
        t == null || t.forEach((i) => {
          this.processPopularCategoriesTitle(i);
        });
      } catch (e) {
        l(e, "Change section copy");
      }
    }
    processPopularCategoriesTitle(e) {
      var i;
      const t = e.querySelector("h1, h3");
      (i = t == null ? void 0 : t.textContent) != null && i.includes("Shop Popular Categories") && (e.querySelector("vimeo-player") || t.__crsObserver || (e.dataset.crsTitle = "Popular Categories", t.textContent = "Popular Categories", this.setupTitleObserver(t)));
    }
    setupTitleObserver(e) {
      const t = new MutationObserver(() => {
        var s;
        (((s = e.textContent) == null ? void 0 : s.trim()) || "").includes("Shop Popular Categories") && (e.textContent = "Popular Categories", setTimeout(() => {
          this.cleanupObserver(t);
        }, u.OBSERVER_CLEANUP_MS));
      });
      t.observe(e, {
        childList: !0,
        subtree: !0,
        characterData: !0,
        characterDataOldValue: !0
      }), this.mutationObservers.add(t), e.__crsObserver = t;
    }
    cleanupObserver(e) {
      e.disconnect(), this.mutationObservers.delete(e);
    }
    observeResize() {
      this.resizeObserver && this.resizeObserver.disconnect();
      const e = () => {
        this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(() => {
          this.hideSection();
        }, u.RESIZE_DEBOUNCE_MS);
      };
      this.resizeObserver = new ResizeObserver(e), p(".page-view-boundary").then((t) => {
        t && this.resizeObserver && this.resizeObserver.observe(t);
      }).catch((t) => {
        l(t, "Setup resize observer");
      });
    }
    destroy() {
      this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), this.mutationObservers.forEach((e) => e.disconnect()), this.mutationObservers.clear(), this.resizeTimeout && (clearTimeout(this.resizeTimeout), this.resizeTimeout = null), document.querySelectorAll("h1, h3").forEach((e) => {
        e.__crsObserver && (e.__crsObserver.disconnect(), delete e.__crsObserver);
      }), document.querySelectorAll("[data-crs-hide]").forEach((e) => {
        e.removeAttribute("data-crs-hide");
      }), document.querySelectorAll(".crs-target-outfit-builder").forEach((e) => {
        e.classList.remove("crs-target-outfit-builder");
      }), document.querySelectorAll('[data-crs-title="Popular Categories"]').forEach((e) => {
        e.removeAttribute("data-crs-title");
      }), document.querySelectorAll(".crs-top-section").forEach((e) => {
        e.classList.remove("crs-top-section");
      });
    }
    addStyles() {
      if (document.getElementById("crs-hide-section-styles")) return;
      const e = document.createElement("style");
      e.id = "crs-hide-section-styles", e.textContent = O, document.head.appendChild(e);
    }
  };
  u.RESIZE_DEBOUNCE_MS = 500, u.OBSERVER_CLEANUP_MS = 1e3;
  let b = u;
  const q = (
    /* HTML */
    `<icms-component
  _ngcontent-ng-c2047601728=""
  class="ng-star-inserted crs-slider-section"
  data-crs-title="Popular Categories"
  data-crs-no-hide
  ><div class="crs-category-carousel-wrapper">
    <page-component-category-carousel
      class="ng-star-inserted"
      style="display: block; padding-top: 32px; padding-bottom: 32px;"
      ><div class="wrap-x wrap-l ng-star-inserted">
        <div class="w-12">
          <div class="p-t-1 p-b-1 center pos-relative overflow-hidden">
            <h1
              class="p-l-12 p-r-12 p-l-4-s p-r-4-s pos-relative w-12-s title-decoration h2 p-t-5-s b-t-s b-col-42-s ng-star-inserted"
            >
              Popular Categories
            </h1>
            <!---->
          </div>
          <div
            class="m-t m-t-6-s overflow-visible swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
          >
            <!----><!----><!---->
            <div class="swiper-wrapper" aria-live="polite">
              <!----><!---->
              <div
                data-swiper-slide-index="0"
                class="swiper-slide ng-star-inserted swiper-slide-prev"
                role="group"
                aria-label="1 / 7"
                style=" margin-right: 10px;"
              >
                <!---->
                <div class="center ng-star-inserted">
                  <div class="w-12 ratio-1-1 overflow-hidden">
                    <href
                      ><!----><!----><a
                        href="/clothing/women/casual-wear"
                        tabindex="0"
                        class="ng-star-inserted"
                        ><shell
                          _nghost-ng-c3904987725=""
                          class="ng-star-inserted"
                          ><img
                            _ngcontent-ng-c3904987725=""
                            alt=""
                            loading="eager"
                            fetchpriority="auto" /></shell
                        ><img
                          class="rf z-1 df-image ng-star-inserted"
                          loading="lazy"
                          src="/tco-images/unsafe/228x228/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/GROUP_lifestyle_philippameshbase_amybrushedlegging_rosemary_1-(3).jpg"
                          alt=""
                        /><!----><!----><!----></a
                      ><!----><!----><!----><!----><!----></href
                    >
                  </div>
                  <href
                    ><!----><!----><a
                      href="/clothing/women/casual-wear"
                      tabindex="0"
                      class="ng-star-inserted"
                      ><button class="button-inline m-t-3 ng-star-inserted">
                        <span class="button__body ng-star-inserted">Women</span
                        ><!----></button
                      ><!----></a
                    ><!----><!----><!----><!----><!----></href
                  >
                </div>
                <!----><!----><!---->
              </div>
              <div
                data-swiper-slide-index="1"
                class="swiper-slide ng-star-inserted swiper-slide-active"
                role="group"
                aria-label="2 / 7"
                style=" margin-right: 10px;"
              >
                <!---->
                <div class="center ng-star-inserted">
                  <div class="w-12 ratio-1-1 overflow-hidden">
                    <href
                      ><!----><!----><a
                        href="/clothing/children/casual-wear"
                        tabindex="0"
                        class="ng-star-inserted"
                        ><shell
                          _nghost-ng-c3904987725=""
                          class="ng-star-inserted"
                          ><img
                            _ngcontent-ng-c3904987725=""
                            alt=""
                            loading="eager"
                            fetchpriority="auto" /></shell
                        ><img
                          class="rf z-1 df-image ng-star-inserted"
                          loading="lazy"
                          src="/tco-images/unsafe/228x228/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/GROUP_lifestyle_youngrideravalonhoodie_cranberry_rosemary_2-(1).jpg"
                          alt=""
                        /><!----><!----><!----></a
                      ><!----><!----><!----><!----><!----></href
                    >
                  </div>
                  <href
                    ><!----><!----><a
                      href="/clothing/children/casual-wear"
                      tabindex="0"
                      class="ng-star-inserted"
                      ><button class="button-inline m-t-3 ng-star-inserted">
                        <span class="button__body ng-star-inserted"
                          >Children</span
                        ><!----></button
                      ><!----></a
                    ><!----><!----><!----><!----><!----></href
                  >
                </div>
                <!----><!----><!---->
              </div>
              <div
                data-swiper-slide-index="2"
                class="swiper-slide ng-star-inserted swiper-slide-next"
                role="group"
                aria-label="3 / 7"
                style=" margin-right: 10px;"
              >
                <!---->
                <div class="center ng-star-inserted">
                  <div class="w-12 ratio-1-1 overflow-hidden">
                    <href
                      ><!----><!----><a
                        href="/horse-saddle-pads"
                        tabindex="0"
                        class="ng-star-inserted"
                        ><shell
                          _nghost-ng-c3904987725=""
                          class="ng-star-inserted"
                          ><img
                            _ngcontent-ng-c3904987725=""
                            alt=""
                            loading="eager"
                            fetchpriority="auto" /></shell
                        ><img
                          class="rf z-1 df-image ng-star-inserted"
                          loading="lazy"
                          src="/tco-images/unsafe/228x228/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT07760_lifestyle_finesseeurojumpsquare_black_11.jpg"
                          alt=""
                        /><!----><!----><!----></a
                      ><!----><!----><!----><!----><!----></href
                    >
                  </div>
                  <href
                    ><!----><!----><a
                      href="/horse-saddle-pads"
                      tabindex="0"
                      class="ng-star-inserted"
                      ><button class="button-inline m-t-3 ng-star-inserted">
                        <span class="button__body ng-star-inserted"
                          >Saddle Pads</span
                        ><!----></button
                      ><!----></a
                    ><!----><!----><!----><!----><!----></href
                  >
                </div>
                <!----><!----><!---->
              </div>
              <div
                data-swiper-slide-index="3"
                class="swiper-slide ng-star-inserted"
                role="group"
                aria-label="4 / 7"
                style=" margin-right: 10px;"
              >
                <!---->
                <div class="center ng-star-inserted">
                  <div class="w-12 ratio-1-1 overflow-hidden">
                    <href
                      ><!----><!----><a
                        href="/horse-rugs"
                        tabindex="0"
                        class="ng-star-inserted"
                        ><shell
                          _nghost-ng-c3904987725=""
                          class="ng-star-inserted"
                          ><img
                            _ngcontent-ng-c3904987725=""
                            alt=""
                            loading="eager"
                            fetchpriority="auto" /></shell
                        ><img
                          class="rf z-1 df-image ng-star-inserted"
                          loading="lazy"
                          src="/tco-images/unsafe/228x228/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT07070_lifestyle_arikastormtekrug_navy_4-(1).jpg"
                          alt=""
                        /><!----><!----><!----></a
                      ><!----><!----><!----><!----><!----></href
                    >
                  </div>
                  <href
                    ><!----><!----><a
                      href="/horse-rugs"
                      tabindex="0"
                      class="ng-star-inserted"
                      ><button class="button-inline m-t-3 ng-star-inserted">
                        <span class="button__body ng-star-inserted">Rugs</span
                        ><!----></button
                      ><!----></a
                    ><!----><!----><!----><!----><!----></href
                  >
                </div>
                <!----><!----><!---->
              </div>
              <div
                data-swiper-slide-index="4"
                class="swiper-slide ng-star-inserted"
                role="group"
                aria-label="5 / 7"
                style=" margin-right: 10px;"
              >
                <!---->
                <div class="center ng-star-inserted">
                  <div class="w-12 ratio-1-1 overflow-hidden">
                    <href
                      ><!----><!----><a
                        href="/horsewear/saddlery-tack/bridles"
                        tabindex="0"
                        class="ng-star-inserted"
                        ><shell
                          _nghost-ng-c3904987725=""
                          class="ng-star-inserted"
                          ><img
                            _ngcontent-ng-c3904987725=""
                            alt=""
                            loading="eager"
                            fetchpriority="auto" /></shell
                        ><img
                          class="rf z-1 df-image ng-star-inserted"
                          loading="lazy"
                          src="/tco-images/unsafe/228x228/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT04763_lifestyle_kudospatentdressagenoseband_brownwhite_3-(5)-1.jpg"
                          alt=""
                        /><!----><!----><!----></a
                      ><!----><!----><!----><!----><!----></href
                    >
                  </div>
                  <href
                    ><!----><!----><a
                      href="/horsewear/saddlery-tack/bridles"
                      tabindex="0"
                      class="ng-star-inserted"
                      ><button class="button-inline m-t-3 ng-star-inserted">
                        <span class="button__body ng-star-inserted"
                          >Bridles</span
                        ><!----></button
                      ><!----></a
                    ><!----><!----><!----><!----><!----></href
                  >
                </div>
                <!----><!----><!---->
              </div>
              <div
                data-swiper-slide-index="5"
                class="swiper-slide ng-star-inserted"
                role="group"
                aria-label="6 / 7"
                style=" margin-right: 10px;"
              >
                <!---->
                <div class="center ng-star-inserted">
                  <div class="w-12 ratio-1-1 overflow-hidden">
                    <href
                      ><!----><!----><a
                        href="/clothing/men/casual-wear"
                        tabindex="0"
                        class="ng-star-inserted"
                        ><shell
                          _nghost-ng-c3904987725=""
                          class="ng-star-inserted"
                          ><img
                            _ngcontent-ng-c3904987725=""
                            alt=""
                            loading="eager"
                            fetchpriority="auto" /></shell
                        ><img
                          class="rf z-1 df-image ng-star-inserted"
                          loading="lazy"
                          src="/tco-images/unsafe/228x228/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT07404_lifestyle_mens_showerproof_shacket_alpine_18-(2).jpg"
                          alt=""
                        /><!----><!----><!----></a
                      ><!----><!----><!----><!----><!----></href
                    >
                  </div>
                  <href
                    ><!----><!----><a
                      href="/clothing/men/casual-wear"
                      tabindex="0"
                      class="ng-star-inserted"
                      ><button class="button-inline m-t-3 ng-star-inserted">
                        <span class="button__body ng-star-inserted">Men</span
                        ><!----></button
                      ><!----></a
                    ><!----><!----><!----><!----><!----></href
                  >
                </div>
                <!----><!----><!---->
              </div>
              <div
                data-swiper-slide-index="6"
                class="swiper-slide ng-star-inserted"
                role="group"
                aria-label="7 / 7"
                style=" margin-right: 10px;"
              >
                <!---->
                <div class="center ng-star-inserted">
                  <div class="w-12 ratio-1-1 overflow-hidden">
                    <href
                      ><!----><!----><a
                        href="/clothing/footwear"
                        tabindex="0"
                        class="ng-star-inserted"
                        ><shell
                          _nghost-ng-c3904987725=""
                          class="ng-star-inserted"
                          ><img
                            _ngcontent-ng-c3904987725=""
                            alt=""
                            loading="eager"
                            fetchpriority="auto" /></shell
                        ><img
                          class="rf z-1 df-image ng-star-inserted"
                          loading="lazy"
                          src="/tco-images/unsafe/228x228/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT04711_lifestyle_fieldridingboot_black_108-4.jpg"
                          alt=""
                        /><!----><!----><!----></a
                      ><!----><!----><!----><!----><!----></href
                    >
                  </div>
                  <href
                    ><!----><!----><a
                      href="/clothing/footwear"
                      tabindex="0"
                      class="ng-star-inserted"
                      ><button class="button-inline m-t-3 ng-star-inserted">
                        <span class="button__body ng-star-inserted"
                          >Footwear</span
                        ><!----></button
                      ><!----></a
                    ><!----><!----><!----><!----><!----></href
                  >
                </div>
                <!----><!----><!---->
              </div>
              <!----><!----><!----><!---->
            </div>
            <!----><span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </div>
      <!----></page-component-category-carousel
    ><!---->
  </div></icms-component
>`
  ), z = `[data-crs-title='Popular Categories'] .swiper-initialized {
  overflow-x: auto;
  touch-action: pan-x;
  padding-inline: 12px;
  min-height: max-content;

  /* Hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer and Edge */
}

[data-crs-title='Popular Categories']  h1 {
  border: none !important;

}

[data-crs-title='Popular Categories'] swiper::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

/* Prevent images from blocking mouse drag */
[data-crs-title='Popular Categories'] .swiper-initialized[style*="grabbing"] img {
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
}

/* Keep links clickable but prevent text selection */
[data-crs-title='Popular Categories'] .swiper-initialized[style*="grabbing"] a {
  user-select: none;
}

[data-crs-title='Popular Categories'] .swiper-wrapper {
  display: flex;
}


[data-crs-title='Popular Categories'] .swiper-wrapper .swiper-slide {
  aspect-ratio: 1;
  width: 200px;
  height: max-content;
}

[data-crs-title='Popular Categories'] > div:not(.crs-category-carousel-wrapper) {
  display: none;
}



@media (min-width: 1390px) {
  [data-crs-title='Popular Categories'] .swiper-initialized {
    min-height: max-content;
  }
  [data-crs-title='Popular Categories'] .swiper-wrapper .swiper-slide {
    flex: 0 0 auto;
    width: calc(100% / 6.2 - 10px);
    height: max-content;
    aspect-ratio: 1;
  }
}





 page-component-hero-image:has(vimeo-player) {
  padding-top: 0 !important;
}`, f = class f {
    constructor() {
      this.eventsAborter = null;
    }
    init() {
      try {
        this.addStyles(), this.modifySection();
      } catch (e) {
        l(e, "Error initializing Popular Categories");
      }
    }
    async modifySection() {
      try {
        const e = await p('[data-crs-title="Popular Categories"]');
        e && (e.outerHTML = q, this.initSlider());
      } catch (e) {
        l(e, "Error modifying Popular Categories section");
      }
    }
    initSlider() {
      this.eventsAborter && this.eventsAborter.abort(), this.eventsAborter = new AbortController();
      const e = document.querySelector(
        ".crs-slider-section .swiper-initialized"
      );
      if (!e) {
        d("Slider box not found for scroll interaction", "warn");
        return;
      }
      e.style.cursor = "grab";
      let t = !1, i = 0, s = 0, o = 0, g = 0;
      e.addEventListener(
        "mousedown",
        (c) => {
          c.preventDefault(), t = !0, i = c.pageX, s = c.pageY, o = e.scrollLeft, g = e.scrollTop;
        },
        { signal: this.eventsAborter.signal }
      ), e.addEventListener(
        "mouseleave",
        () => {
          t = !1, e.style.cursor = "grab";
        },
        { signal: this.eventsAborter.signal }
      ), e.addEventListener(
        "mouseup",
        () => {
          t = !1, e.style.cursor = "grab";
        },
        { signal: this.eventsAborter.signal }
      ), e.addEventListener(
        "mousemove",
        (c) => {
          if (!t) return;
          c.preventDefault(), e.style.cursor = "grabbing";
          const m = c.pageX, H = c.pageY, R = (m - i) * f.SCROLL_SENSITIVITY, $ = (H - s) * f.SCROLL_SENSITIVITY;
          e.scrollLeft = o - R, e.scrollTop = g - $;
        },
        { signal: this.eventsAborter.signal }
      ), e.addEventListener(
        "dragstart",
        (c) => {
          c.preventDefault();
        },
        { signal: this.eventsAborter.signal }
      ), e.style.userSelect = "none";
    }
    destroy() {
      this.eventsAborter && (this.eventsAborter.abort(), this.eventsAborter = null), document.querySelectorAll(".crs-slider-section").forEach((e) => {
        e.remove();
      });
    }
    addStyles() {
      if (document.getElementById("crs-popular-categories-styles")) return;
      const e = document.createElement("style");
      e.id = "crs-popular-categories-styles", e.textContent = z, document.head.appendChild(e);
    }
  };
  f.SCROLL_SENSITIVITY = 1;
  let _ = f;
  const B = (
    /* HTML */
    `
  <div class="crs-outfit-section">
    <div class="crs-desktop">
      <icms-component _ngcontent-ng-c2047601728="" class="ng-star-inserted"
        ><div>
          <cms-row
            class="ng-star-inserted"
            style="display: block; margin-top: 64px; margin-left: 28px; margin-right: 28px;"
            ><div
              class="ng-star-inserted"
              style="display: grid; --grid-columns: 12; --grid-column-span: 1; --grid-column-offset: 1; --grid-row-gap: calc(var(--grid-gutter-size, 5px) * 4); --grid-column-gap: calc(var(--grid-gutter-size, 5px) * 12); --grid-auto-flow: row dense; width: 100%; grid-template-columns: [column-start] repeat(var(--grid-columns, 12), 1fr) [column-end]; row-gap: var(--grid-row-gap, 0); column-gap: var(--grid-column-gap, 0); grid-auto-flow: var(--grid-auto-flow, row dense);"
            >
              <icms-outlet
                data-builder="outfit-builder"
                _nghost-ng-c2047601728=""
                class="_fullHight ng-star-inserted"
                style="--grid-column-span: 6; grid-column-start: span var(--grid-column-span, 1); grid-row-start: span var(--grid-row-span, 1); min-width: 0px;"
                ><!----><icms-component
                  _ngcontent-ng-c2047601728=""
                  class="ng-star-inserted"
                  ><div>
                    <page-component-hero-image
                      _nghost-ng-c534717118=""
                      class="ng-star-inserted"
                      style="display: block;"
                      ><div
                        _ngcontent-ng-c534717118=""
                        class="overflow-hidden ratio-1-1"
                      >
                        <href
                          _ngcontent-ng-c534717118=""
                          ngskiphydration=""
                          class="fill"
                          ><!----><!---->
                          <a
                            href="/outfit-builder"
                            tabindex="0"
                            class="ng-star-inserted"
                            ><div
                              _ngcontent-ng-c534717118=""
                              class="fill z-1 ng-star-inserted"
                            >
                              <df-image-wrapper
                                _ngcontent-ng-c534717118=""
                                _nghost-ng-c3853189133=""
                                style="overflow: hidden;"
                                ><shell
                                  _ngcontent-ng-c3853189133=""
                                  _nghost-ng-c3904987725=""
                                  ><img
                                    _ngcontent-ng-c3904987725=""
                                    alt=""
                                    loading="eager"
                                    fetchpriority="auto" /></shell
                                ><img
                                  _ngcontent-ng-c534717118=""
                                  class="df-image"
                                  ng-img="true"
                                  loading="lazy"
                                  fetchpriority="auto"
                                  sizes="auto, 568px"
                                  src="https://www.lemieux.com/static/cms/media/OB-Still 1x1.png"
                                  srcset="
                                    /tco-images/unsafe/128x128/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%201x1.png    128w,
                                    /tco-images/unsafe/256x256/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%201x1.png    256w,
                                    /tco-images/unsafe/384x384/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%201x1.png    384w,
                                    /tco-images/unsafe/414x414/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%201x1.png    414w,
                                    /tco-images/unsafe/640x640/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%201x1.png    640w,
                                    /tco-images/unsafe/750x750/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%201x1.png    750w,
                                    /tco-images/unsafe/828x828/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%201x1.png    828w,
                                    /tco-images/unsafe/1080x1080/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%201x1.png 1080w,
                                    /tco-images/unsafe/1280x1280/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%201x1.png 1280w,
                                    /tco-images/unsafe/1366x1366/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%201x1.png 1366w,
                                    /tco-images/unsafe/1440x1440/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%201x1.png 1440w,
                                    /tco-images/unsafe/1600x1600/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%201x1.png 1600w,
                                    /tco-images/unsafe/1920x1920/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%201x1.png 1920w,
                                    /tco-images/unsafe/2560x2560/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%201x1.png 2560w
                                  "
                                  style="aspect-ratio: 1 / 1;"
                              /></df-image-wrapper>
                            </div>
                            <!----><!----><vimeo-player
                              _ngcontent-ng-c534717118=""
                              ngskiphydration="true"
                              class="z-1 fill is-background video-player-container ng-star-inserted"
                              style="pointer-events: none;"
                              ><div data-vimeo-initialized="true">
                                <iframe
                                  src="https://player.vimeo.com/video/1128864215?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff&amp;muted=1&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963"
                                  width="240"
                                  height="240"
                                  frameborder="0"
                                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                  referrerpolicy="strict-origin-when-cross-origin"
                                  title="Clothing_Updated_Frame_1x1"
                                  data-ready="true"
                                  playsinline="true"
                                ></iframe>
                              </div>
                              <!----><!----><!----></vimeo-player
                            ><!----><!----><!---->
                            <div
                              _ngcontent-ng-c534717118=""
                              class="fill z-3 flex ng-star-inserted"
                            >
                              <div
                                _ngcontent-ng-c534717118=""
                                class="flex w-12"
                              >
                                <div
                                  _ngcontent-ng-c534717118=""
                                  class="w-12 pos-relative"
                                >
                                  <text-overlay
                                    _ngcontent-ng-c534717118=""
                                    _nghost-ng-c3259544976=""
                                    class="ng-star-inserted"
                                    ><div
                                      _ngcontent-ng-c3259544976=""
                                      class="pos-absolute z-2 _container pe-none"
                                      style="top: 77%; left: 0%; right: 0%;"
                                    >
                                      <div
                                        _ngcontent-ng-c3259544976=""
                                        class="w-12 center h1 ng-star-inserted"
                                        style="color: rgb(0, 0, 0); font-size: 60px; line-height: 60px; letter-spacing: 2px; margin-left: 1px;"
                                      >
                                        Outfit Builder
                                      </div>
                                      <!----><!----><!---->
                                      <div
                                        _ngcontent-ng-c3259544976=""
                                        class="w-12 center p-t-3 p1 ng-star-inserted"
                                        style="color: rgb(0, 0, 0); font-size: 20px; line-height: 20px; letter-spacing: 3px; margin-left: 1.5px;"
                                      >
                                        Wear Colour Your Way
                                      </div>
                                      <!----><!----><!----><!---->
                                    </div></text-overlay
                                  ><!----><!----><text-overlay
                                    _ngcontent-ng-c534717118=""
                                    _nghost-ng-c3259544976=""
                                    class="ng-star-inserted"
                                    ><div
                                      _ngcontent-ng-c3259544976=""
                                      class="pos-absolute z-2 _container pe-none"
                                      style="top: 92%; left: 0%; right: 0%;"
                                    >
                                      <!---->
                                      <div
                                        _ngcontent-ng-c3259544976=""
                                        class="_custom-button pe-none center ng-star-inserted"
                                        style="--scale: 1.1;"
                                      >
                                        <href
                                          _ngcontent-ng-c3259544976=""
                                          class="pe-auto"
                                          ><!----><!----><span
                                            tabindex="0"
                                            class="ng-star-inserted"
                                            ><div
                                              _ngcontent-ng-c3259544976=""
                                              class="button-1 ng-star-inserted"
                                              style="min-width: 0px;"
                                            >
                                              <span
                                                _ngcontent-ng-c3259544976=""
                                                class="button__body ng-star-inserted"
                                                >Create Your Outfit</span
                                              ><!---->
                                            </div>
                                            <!----></span
                                          >
                                          <!----><!----><!----><!----><!---->
                                        </href>
                                      </div>
                                      <!----><!---->
                                    </div></text-overlay
                                  ><!----><!----><!---->
                                </div>
                              </div>
                            </div>
                            <!----><!----></a
                          ><!----><!----><!----><!----><!----></href
                        ><shop-this-look _ngcontent-ng-c534717118=""
                          ><!----></shop-this-look
                        >
                      </div></page-component-hero-image
                    ><!---->
                  </div></icms-component
                ><!----></icms-outlet
              ><icms-outlet
                data-builder="pony-builder"
                _nghost-ng-c2047601728=""
                class="_fullHight ng-star-inserted"
                style="--grid-column-span: 6; grid-column-start: span var(--grid-column-span, 1); grid-row-start: span var(--grid-row-span, 1); min-width: 0px;"
                ><!----><icms-component
                  _ngcontent-ng-c2047601728=""
                  class="ng-star-inserted"
                  ><div>
                    <page-component-hero-image
                      _nghost-ng-c534717118=""
                      class="ng-star-inserted"
                      style="display: block;"
                      ><div
                        _ngcontent-ng-c534717118=""
                        class="overflow-hidden ratio-1-1"
                      >
                        <href
                          _ngcontent-ng-c534717118=""
                          ngskiphydration=""
                          class="fill"
                          ><!----><!----><a
                            href="/pony-kit-builder"
                            tabindex="0"
                            class="ng-star-inserted"
                            ><div
                              _ngcontent-ng-c534717118=""
                              class="fill z-1 ng-star-inserted"
                            >
                              <df-image-wrapper
                                _ngcontent-ng-c534717118=""
                                _nghost-ng-c3853189133=""
                                style="overflow: hidden;"
                                ><shell
                                  _ngcontent-ng-c3853189133=""
                                  _nghost-ng-c3904987725=""
                                  ><img
                                    _ngcontent-ng-c3904987725=""
                                    alt=""
                                    loading="eager"
                                    fetchpriority="auto" /></shell
                                ><img
                                  _ngcontent-ng-c534717118=""
                                  class="df-image"
                                  ng-img="true"
                                  loading="lazy"
                                  fetchpriority="auto"
                                  sizes="auto, 568px"
                                  src="https://www.lemieux.com/static/cms/media/TPB-Still 1x1.png"
                                  srcset="
                                    /tco-images/unsafe/128x128/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%201x1.png    128w,
                                    /tco-images/unsafe/256x256/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%201x1.png    256w,
                                    /tco-images/unsafe/384x384/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%201x1.png    384w,
                                    /tco-images/unsafe/414x414/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%201x1.png    414w,
                                    /tco-images/unsafe/640x640/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%201x1.png    640w,
                                    /tco-images/unsafe/750x750/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%201x1.png    750w,
                                    /tco-images/unsafe/828x828/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%201x1.png    828w,
                                    /tco-images/unsafe/1080x1080/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%201x1.png 1080w,
                                    /tco-images/unsafe/1280x1280/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%201x1.png 1280w,
                                    /tco-images/unsafe/1366x1366/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%201x1.png 1366w,
                                    /tco-images/unsafe/1440x1440/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%201x1.png 1440w,
                                    /tco-images/unsafe/1600x1600/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%201x1.png 1600w,
                                    /tco-images/unsafe/1920x1920/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%201x1.png 1920w,
                                    /tco-images/unsafe/2560x2560/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%201x1.png 2560w
                                  "
                                  style="aspect-ratio: 1 / 1;"
                              /></df-image-wrapper>
                            </div>
                            <!----><!----><vimeo-player
                              _ngcontent-ng-c534717118=""
                              ngskiphydration="true"
                              class="z-1 fill is-background video-player-container ng-star-inserted"
                              style="pointer-events: none;"
                              ><div data-vimeo-initialized="true">
                                <iframe
                                  src="https://player.vimeo.com/video/1128863668?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff&amp;muted=1&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963"
                                  width="240"
                                  height="240"
                                  frameborder="0"
                                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                  referrerpolicy="strict-origin-when-cross-origin"
                                  title="Toy_Pony_Updated_Frame_1x1"
                                  data-ready="true"
                                  playsinline="true"
                                ></iframe>
                              </div>
                              <!----><!----><!----></vimeo-player
                            ><!----><!----><!---->
                            <div
                              _ngcontent-ng-c534717118=""
                              class="fill z-3 flex ng-star-inserted"
                            >
                              <div
                                _ngcontent-ng-c534717118=""
                                class="flex w-12"
                              >
                                <div
                                  _ngcontent-ng-c534717118=""
                                  class="w-12 pos-relative"
                                >
                                  <text-overlay
                                    _ngcontent-ng-c534717118=""
                                    _nghost-ng-c3259544976=""
                                    class="ng-star-inserted"
                                    ><div
                                      _ngcontent-ng-c3259544976=""
                                      class="pos-absolute z-2 _container pe-none"
                                      style="top: 77%; left: 0%; right: 0%;"
                                    >
                                      <div
                                        _ngcontent-ng-c3259544976=""
                                        class="w-12 center h1 ng-star-inserted"
                                        style="color: rgb(0, 0, 0); font-size: 60px; line-height: 60px;"
                                      >
                                        Toy Pony Builder
                                      </div>
                                      <!----><!----><!---->
                                      <div
                                        _ngcontent-ng-c3259544976=""
                                        class="w-12 center p-t-3 p1 ng-star-inserted"
                                        style="color: rgb(0, 0, 0); font-size: 20px; line-height: 20px; letter-spacing: 3px; margin-left: 1.5px;"
                                      >
                                        Create, play and shop
                                      </div>
                                      <!----><!----><!----><!---->
                                    </div></text-overlay
                                  ><!----><!----><text-overlay
                                    _ngcontent-ng-c534717118=""
                                    _nghost-ng-c3259544976=""
                                    class="ng-star-inserted"
                                    ><div
                                      _ngcontent-ng-c3259544976=""
                                      class="pos-absolute z-2 _container pe-none"
                                      style="top: 92%; left: 0%; right: 0%;"
                                    >
                                      <!---->
                                      <div
                                        _ngcontent-ng-c3259544976=""
                                        class="_custom-button pe-none center ng-star-inserted"
                                        style="--scale: 1.1;"
                                      >
                                        <href
                                          _ngcontent-ng-c3259544976=""
                                          class="pe-auto"
                                          ><!----><!----><span
                                            tabindex="0"
                                            class="ng-star-inserted"
                                            ><div
                                              _ngcontent-ng-c3259544976=""
                                              class="button-1 ng-star-inserted"
                                              style="min-width: 0px;"
                                            >
                                              <span
                                                _ngcontent-ng-c3259544976=""
                                                class="button__body ng-star-inserted"
                                                >Start Building</span
                                              ><!---->
                                            </div>
                                            <!----></span
                                          ><!----><!----><!----><!----><!----></href
                                        >
                                      </div>
                                      <!----><!---->
                                    </div></text-overlay
                                  ><!----><!----><!---->
                                </div>
                              </div>
                            </div>
                            <!----><!----></a
                          ><!----><!----><!----><!----><!----></href
                        ><shop-this-look _ngcontent-ng-c534717118=""
                          ><!----></shop-this-look
                        >
                      </div></page-component-hero-image
                    ><!---->
                  </div></icms-component
                ><!----></icms-outlet
              ><!---->
            </div>
            <!----></cms-row
          ><!---->
        </div></icms-component
      >
    </div>
    <div class="crs-mobile">
      <icms-component _ngcontent-ng-c2047601728="" class="ng-star-inserted"
        ><div>
          <page-component-text
            class="ng-star-inserted"
            style="display: block; margin-top: 64px;"
            ><div class="ng-star-inserted">
              <div>
                <!----><span class="w-12 ng-star-inserted"
                  ><span class="w-12 text cms-html center ng-star-inserted"
                    ><h1>Outfit Builders</h1></span
                  ><!----></span
                ><!---->
              </div>
            </div>
            <!----></page-component-text
          ><!---->
        </div></icms-component
      >
      <icms-component _ngcontent-ng-c2047601728="" class="ng-star-inserted"
        ><div>
          <page-component-text
            class="ng-star-inserted"
            style="display: block; margin-bottom: 16px;"
            ><div class="ng-star-inserted">
              <div>
                <!----><span class="w-12 ng-star-inserted"
                  ><span class="w-12 text cms-html center ng-star-inserted"
                    >Create, combine and shop your way</span
                  ><!----></span
                ><!---->
              </div>
            </div>
            <!----></page-component-text
          ><!---->
        </div></icms-component
      >
      <icms-component _ngcontent-ng-c2047601728="" class="ng-star-inserted" data-builder="outfit-builder"
        ><div>
          <page-component-hero-image
            _nghost-ng-c534717118=""
            class="ng-star-inserted"
            style="display: block;"
            ><div _ngcontent-ng-c534717118="" class="overflow-hidden ratio-3-1">
              <href _ngcontent-ng-c534717118="" ngskiphydration="" class="fill"
                ><!----><!----><a
                  href="/outfit-builder"
                  tabindex="0"
                  class="ng-star-inserted"
                  ><div
                    _ngcontent-ng-c534717118=""
                    class="fill z-1 ng-star-inserted"
                  >
                    <df-image-wrapper
                      _ngcontent-ng-c534717118=""
                      _nghost-ng-c3853189133=""
                      style="overflow: hidden;"
                      ><shell
                        _ngcontent-ng-c3853189133=""
                        _nghost-ng-c3904987725=""
                        ><img
                          _ngcontent-ng-c3904987725=""
                          alt=""
                          loading="eager"
                          fetchpriority="auto" /></shell
                      ><img
                        _ngcontent-ng-c534717118=""
                        class="df-image"
                        ng-img="true"
                        loading="lazy"
                        fetchpriority="auto"
                        sizes="auto, 100vw"
                        src="https://www.lemieux.com/static/cms/media/OB-Still 3x1.png"
                        srcset="
                          /tco-images/unsafe/414x138/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%203x1.png   414w,
                          /tco-images/unsafe/640x213/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%203x1.png   640w,
                          /tco-images/unsafe/750x250/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%203x1.png   750w,
                          /tco-images/unsafe/828x276/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%203x1.png   828w,
                          /tco-images/unsafe/1080x360/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%203x1.png 1080w,
                          /tco-images/unsafe/1280x427/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%203x1.png 1280w,
                          /tco-images/unsafe/1366x455/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%203x1.png 1366w,
                          /tco-images/unsafe/1440x480/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%203x1.png 1440w,
                          /tco-images/unsafe/1600x533/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%203x1.png 1600w,
                          /tco-images/unsafe/1920x640/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%203x1.png 1920w,
                          /tco-images/unsafe/2560x853/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/OB-Still%203x1.png 2560w
                        "
                        style="aspect-ratio: 3 / 1;"
                    /></df-image-wrapper>
                  </div>
                  <!----><!----><vimeo-player
                    _ngcontent-ng-c534717118=""
                    ngskiphydration="true"
                    class="z-1 fill is-background video-player-container ng-star-inserted"
                    style="pointer-events: none;"
                    ><div data-vimeo-initialized="true">
                      <iframe
                        src="https://player.vimeo.com/video/1128868257?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff&amp;muted=1&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963"
                        width="426"
                        height="142"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        title="Clothing_Updated_Frame_3x1"
                        data-ready="true"
                        playsinline="true"
                      ></iframe>
                    </div>
                    <!----><!----><!----></vimeo-player
                  ><!----><!----><!---->
                  <div
                    _ngcontent-ng-c534717118=""
                    class="fill z-3 flex ng-star-inserted"
                  >
                    <div _ngcontent-ng-c534717118="" class="flex w-12">
                      <div
                        _ngcontent-ng-c534717118=""
                        class="w-12 pos-relative"
                      >
                        <text-overlay
                          _ngcontent-ng-c534717118=""
                          _nghost-ng-c3259544976=""
                          class="ng-star-inserted"
                          ><div
                            _ngcontent-ng-c3259544976=""
                            class="pos-absolute z-2 _container pe-none"
                            style="top: 60%; left: 59%; right: 0%;"
                          >
                            <div
                              _ngcontent-ng-c3259544976=""
                              class="w-12 center p-t-0 h4 ng-star-inserted"
                              style="font-size: 23px; line-height: 23px; letter-spacing: 0px;"
                            >
                              OUTFIT BUILDER
                            </div>
                            <!----><!----><!----><!---->
                            <div
                              _ngcontent-ng-c3259544976=""
                              class="_custom-button pe-none center p-t-3 ng-star-inserted"
                              style="--scale: 0.7;"
                            >
                              <href _ngcontent-ng-c3259544976="" class="pe-auto"
                                ><!----><!----><span
                                  href="/outfit-builder"
                                  tabindex="0"
                                  class="ng-star-inserted"
                                  ><div
                                    _ngcontent-ng-c3259544976=""
                                    class="button-1 ng-star-inserted"
                                    style="min-width: 0px;"
                                  >
                                    <span
                                      _ngcontent-ng-c3259544976=""
                                      class="button__body ng-star-inserted"
                                      >Create Here</span
                                    ><!---->
                                  </div>
                                  <!----></span
                                ><!----><!----><!----><!----><!----></href
                              >
                            </div>
                            <!----><!---->
                          </div></text-overlay
                        ><!----><!----><!---->
                      </div>
                    </div>
                  </div>
                  <!----><!----></a
                ><!----><!----><!----><!----><!----></href
              ><shop-this-look _ngcontent-ng-c534717118=""
                ><!----></shop-this-look
              >
            </div></page-component-hero-image
          ><!---->
        </div></icms-component
      >
      <icms-component _ngcontent-ng-c2047601728="" class="ng-star-inserted" data-builder="pony-builder"
        ><div>
          <page-component-hero-image
            _nghost-ng-c534717118=""
            class="ng-star-inserted"
            style="display: block; margin-top: 16px;"
            ><div _ngcontent-ng-c534717118="" class="overflow-hidden ratio-3-1">
              <href _ngcontent-ng-c534717118="" ngskiphydration="" class="fill"
                ><!----><!----><a
                  href="/pony-kit-builder"
                  tabindex="0"
                  class="ng-star-inserted"
                  ><div
                    _ngcontent-ng-c534717118=""
                    class="fill z-1 ng-star-inserted"
                  >
                    <df-image-wrapper
                      _ngcontent-ng-c534717118=""
                      _nghost-ng-c3853189133=""
                      style="overflow: hidden;"
                      ><shell
                        _ngcontent-ng-c3853189133=""
                        _nghost-ng-c3904987725=""
                        ><img
                          _ngcontent-ng-c3904987725=""
                          alt=""
                          loading="eager"
                          fetchpriority="auto" /></shell
                      ><img
                        _ngcontent-ng-c534717118=""
                        class="df-image"
                        ng-img="true"
                        loading="lazy"
                        fetchpriority="auto"
                        sizes="auto, 377px"
                        src="https://www.lemieux.com/static/cms/media/TPB-Still 3x1.png"
                        srcset="
                          /tco-images/unsafe/128x43/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%203x1.png    128w,
                          /tco-images/unsafe/256x85/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%203x1.png    256w,
                          /tco-images/unsafe/384x128/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%203x1.png   384w,
                          /tco-images/unsafe/414x138/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%203x1.png   414w,
                          /tco-images/unsafe/640x213/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%203x1.png   640w,
                          /tco-images/unsafe/750x250/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%203x1.png   750w,
                          /tco-images/unsafe/828x276/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%203x1.png   828w,
                          /tco-images/unsafe/1080x360/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%203x1.png 1080w,
                          /tco-images/unsafe/1280x427/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%203x1.png 1280w,
                          /tco-images/unsafe/1366x455/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%203x1.png 1366w,
                          /tco-images/unsafe/1440x480/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%203x1.png 1440w,
                          /tco-images/unsafe/1600x533/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%203x1.png 1600w,
                          /tco-images/unsafe/1920x640/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%203x1.png 1920w,
                          /tco-images/unsafe/2560x853/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/TPB-Still%203x1.png 2560w
                        "
                        style="aspect-ratio: 3 / 1;"
                    /></df-image-wrapper>
                  </div>
                  <!----><!----><vimeo-player
                    _ngcontent-ng-c534717118=""
                    ngskiphydration="true"
                    class="z-1 fill is-background video-player-container ng-star-inserted"
                    style="pointer-events: none;"
                    ><div data-vimeo-initialized="true">
                      <iframe
                        src="https://player.vimeo.com/video/1128867946?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff&amp;muted=1&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963"
                        width="426"
                        height="142"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        title="Toy_Pony_Updated_Frame_3x1"
                        data-ready="true"
                        playsinline="true"
                      ></iframe>
                    </div>
                    <!----><!----><!----></vimeo-player
                  ><!----><!----><!---->
                  <div
                    _ngcontent-ng-c534717118=""
                    class="fill z-3 flex ng-star-inserted"
                  >
                    <div _ngcontent-ng-c534717118="" class="flex w-12">
                      <div
                        _ngcontent-ng-c534717118=""
                        class="w-12 pos-relative"
                      >
                        <text-overlay
                          _ngcontent-ng-c534717118=""
                          _nghost-ng-c3259544976=""
                          class="ng-star-inserted"
                          ><div
                            _ngcontent-ng-c3259544976=""
                            class="pos-absolute z-2 _container pe-none"
                            style="top: 60%; right: 59%;"
                          >
                            <div
                              _ngcontent-ng-c3259544976=""
                              class="w-12 center p-t-0 h4 ng-star-inserted"
                              style="font-size: 23px; line-height: 23px; letter-spacing: 0px;"
                            >
                              TOY PONY BUILDER
                            </div>
                            <!----><!----><!----><!---->
                            <div
                              _ngcontent-ng-c3259544976=""
                              class="_custom-button pe-none center p-t-3 ng-star-inserted"
                              style="--scale: 0.7;"
                            >
                              <href _ngcontent-ng-c3259544976="" class="pe-auto"
                                ><!----><!----><span
                                  tabindex="0"
                                  class="ng-star-inserted"
                                  ><div
                                    _ngcontent-ng-c3259544976=""
                                    class="button-1 ng-star-inserted"
                                    style="min-width: 0px;"
                                  >
                                    <span
                                      _ngcontent-ng-c3259544976=""
                                      class="button__body ng-star-inserted"
                                      >Start Building</span
                                    ><!---->
                                  </div>
                                  <!----></span
                                ><!----><!----><!----><!----><!----></href
                              >
                            </div>
                            <!----><!---->
                          </div></text-overlay
                        ><!----><!----><!---->
                      </div>
                    </div>
                  </div>
                  <!----><!----></a
                ><!----><!----><!----><!----><!----></href
              ><shop-this-look _ngcontent-ng-c534717118=""
                ><!----></shop-this-look
              >
            </div></page-component-hero-image
          ><!---->
        </div></icms-component
      >
    </div>
  </div>
`
  ), A = `.crs-outfit-section .crs-mobile page-component-text {
  margin-top: 0 !important;
}

.crs-outfit-section .crs-mobile h1 {
  margin-top: 20px;
}
`;
  class L {
    constructor() {
      this.eventsAborter = null;
    }
    init() {
      try {
        this.addStyles(), this.render();
      } catch (e) {
        l(e, "Error initializing Outfit Builder section");
      }
    }
    async render() {
      try {
        const e = await p(".crs-target-outfit-builder"), t = document.querySelector(".crs-outfit-section");
        t && (this.eventsAborter && this.eventsAborter.abort(), t.remove());
        const i = B;
        if (e)
          e.insertAdjacentHTML("afterbegin", i), this.setupEvents();
        else {
          d("Container .crs-target-outfit-builder not found", "warn");
          return;
        }
      } catch (e) {
        l(e, "Error rendering Outfit Builder section");
      }
    }
    setupEvents() {
      this.setupBuilderEvents();
    }
    setupBuilder(e, t) {
      document.querySelectorAll(e.selector).forEach((i) => {
        const s = i.querySelector("a");
        v(
          i,
          e.viewEvent,
          "Home Page Outfit Builder",
          e.visibility,
          0
        ), s && s.addEventListener(
          "click",
          (o) => {
            w(
              e.clickEvent,
              e.name,
              "click",
              "Home Page Outfit Builder"
            );
          },
          {
            signal: t.signal
          }
        );
      });
    }
    setupBuilderEvents() {
      this.eventsAborter && this.eventsAborter.abort(), this.eventsAborter = new AbortController();
      const e = this.eventsAborter;
      [
        {
          selector: '[data-builder="outfit-builder"]',
          viewEvent: "exp_hp_hero_view_2",
          clickEvent: "exp_hp_hero_click_2",
          name: "Outfit Builder",
          visibility: "Outfit Builder Visibility"
        },
        {
          selector: '[data-builder="pony-builder"]',
          viewEvent: "exp_hp_hero_view_3",
          clickEvent: "exp_hp_hero_click_3",
          name: "Toy Pony Builder",
          visibility: "Toy Pony Builder Visibility"
        }
      ].forEach((i) => this.setupBuilder(i, e));
    }
    destroy() {
      var e;
      this.eventsAborter && (this.eventsAborter.abort(), this.eventsAborter = null), (e = document.querySelector(".crs-outfit-section")) == null || e.remove();
    }
    addStyles() {
      if (!document.getElementById("crs-outfit-builder-styles")) {
        const e = document.createElement("style");
        e.id = "crs-outfit-builder-styles", e.textContent = A, document.head.appendChild(e);
      }
    }
  }
  const P = "", I = (
    /* HTML */
    `
  <icms-component class="crs-christmas-gifts-section">
    <div class="crs-desktop">
      <icms-component _ngcontent-ng-c2047601728="" class="ng-star-inserted"
        ><div>
          <page-component-text
            class="ng-star-inserted"
            style="display: block; margin-top: 64px;"
            ><div class="ng-star-inserted">
              <div>
                <!----><span class="w-12 ng-star-inserted"
                  ><span class="w-12 text cms-html center ng-star-inserted"
                    ><h1>Christmas Gifting</h1></span
                  ><!----></span
                ><!---->
              </div>
            </div>
            <!----></page-component-text
          ><!---->
        </div></icms-component
      >
      <icms-component _ngcontent-ng-c2047601728="" class="ng-star-inserted"
        ><div>
          <page-component-text class="ng-star-inserted" style="display: block;"
            ><div class="ng-star-inserted">
              <div class="center">
                <href class="ng-star-inserted"
                  ><!----><!----><a
                    href="/gifts/gift-sets"
                    tabindex="0"
                    class="ng-star-inserted"
                    ><button class="button-inline ng-star-inserted">
                      <span class="button__body ng-star-inserted"
                        >Shop Gift Sets</span
                      ><!----></button
                    ><!----></a
                  ><!----><!----><!----><!----><!----></href
                ><!----><!---->
              </div>
            </div>
            <!----></page-component-text
          ><!---->
        </div></icms-component
      >
      <icms-component _ngcontent-ng-c2047601728="" class="ng-star-inserted"
        ><div>
          <page-component-hero-image
            _nghost-ng-c534717118=""
            class="ng-star-inserted"
            style="display: block; margin-top: 24px; padding-top: 0px;"
            ><div _ngcontent-ng-c534717118="" class="overflow-hidden ratio-3-1">
              <href _ngcontent-ng-c534717118="" ngskiphydration="" class="fill"
                ><!----><!----><a
                  href="/gifting"
                  tabindex="0"
                  class="ng-star-inserted"
                  ><div
                    _ngcontent-ng-c534717118=""
                    class="fill z-1 ng-star-inserted"
                  >
                    <df-image-wrapper
                      _ngcontent-ng-c534717118=""
                      _nghost-ng-c3853189133=""
                      style="overflow: hidden;"
                      ><shell
                        _ngcontent-ng-c3853189133=""
                        _nghost-ng-c3904987725=""
                        ><img
                          _ngcontent-ng-c3904987725=""
                          alt=""
                          loading="eager"
                          fetchpriority="auto" /></shell
                      ><img
                        _ngcontent-ng-c534717118=""
                        class="df-image"
                        ng-img="true"
                        loading="lazy"
                        fetchpriority="auto"
                        sizes="auto, 377px"
                        src="https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg"
                        srcset="
                          /tco-images/unsafe/128x43/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg    128w,
                          /tco-images/unsafe/256x85/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg    256w,
                          /tco-images/unsafe/384x128/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg   384w,
                          /tco-images/unsafe/414x138/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg   414w,
                          /tco-images/unsafe/640x213/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg   640w,
                          /tco-images/unsafe/750x250/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg   750w,
                          /tco-images/unsafe/828x276/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg   828w,
                          /tco-images/unsafe/1080x360/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg 1080w,
                          /tco-images/unsafe/1280x427/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg 1280w,
                          /tco-images/unsafe/1366x455/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg 1366w,
                          /tco-images/unsafe/1440x480/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg 1440w,
                          /tco-images/unsafe/1600x533/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg 1600w,
                          /tco-images/unsafe/1920x640/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg 1920w,
                          /tco-images/unsafe/2560x853/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/christmasbundleslifestyle_name_variant_010-1.jpg 2560w
                        "
                        style="aspect-ratio: 3 / 1;"
                    /></df-image-wrapper>
                  </div>
                  <!----><!----><!----><!----></a
                ><!----><!----><!----><!----><!----></href
              ><shop-this-look _ngcontent-ng-c534717118=""
                ><!----></shop-this-look
              >
            </div></page-component-hero-image
          ><!---->
        </div></icms-component
      >
    </div>
    <div class="crs-mobile">
      <icms-component _ngcontent-ng-c2047601728="" class="ng-star-inserted"
        ><div>
          <page-component-hero-image
            _nghost-ng-c534717118=""
            class="ng-star-inserted"
            style="display: block; margin-top: 48px; padding-top: 0px;"
            ><div _ngcontent-ng-c534717118="" class="overflow-hidden ratio-3-4">
              <href _ngcontent-ng-c534717118="" ngskiphydration="" class="fill"
                ><!----><!----><a
                  href="/gifting"
                  tabindex="0"
                  class="ng-star-inserted"
                  ><div
                    _ngcontent-ng-c534717118=""
                    class="fill z-1 ng-star-inserted"
                  >
                    <df-image-wrapper
                      _ngcontent-ng-c534717118=""
                      _nghost-ng-c3853189133=""
                      style="overflow: hidden;"
                      ><shell
                        _ngcontent-ng-c3853189133=""
                        _nghost-ng-c3904987725=""
                        ><img
                          _ngcontent-ng-c3904987725=""
                          alt=""
                          loading="eager"
                          fetchpriority="auto" /></shell
                      ><img
                        _ngcontent-ng-c534717118=""
                        class="df-image"
                        ng-img="true"
                        loading="lazy"
                        fetchpriority="auto"
                        sizes="auto, 100vw"
                        src="https://www.lemieux.com/static/cms/media/Gifting-3X4-1.jpg"
                        srcset="
                          /tco-images/unsafe/414x552/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Gifting-3X4-1.jpg    414w,
                          /tco-images/unsafe/640x853/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Gifting-3X4-1.jpg    640w,
                          /tco-images/unsafe/750x1000/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Gifting-3X4-1.jpg   750w,
                          /tco-images/unsafe/828x1104/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Gifting-3X4-1.jpg   828w,
                          /tco-images/unsafe/1080x1440/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Gifting-3X4-1.jpg 1080w,
                          /tco-images/unsafe/1280x1707/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Gifting-3X4-1.jpg 1280w,
                          /tco-images/unsafe/1366x1821/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Gifting-3X4-1.jpg 1366w,
                          /tco-images/unsafe/1440x1920/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Gifting-3X4-1.jpg 1440w,
                          /tco-images/unsafe/1600x2133/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Gifting-3X4-1.jpg 1600w,
                          /tco-images/unsafe/1920x2560/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Gifting-3X4-1.jpg 1920w,
                          /tco-images/unsafe/2560x3413/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Gifting-3X4-1.jpg 2560w
                        "
                        style="aspect-ratio: 0.75 / 1;"
                    /></df-image-wrapper>
                  </div>
                  <!----><!---->
                  <div
                    _ngcontent-ng-c534717118=""
                    class="fill z-3 flex ng-star-inserted"
                  >
                    <div _ngcontent-ng-c534717118="" class="flex w-12">
                      <div
                        _ngcontent-ng-c534717118=""
                        class="w-12 pos-relative"
                      >
                        <text-overlay
                          _ngcontent-ng-c534717118=""
                          _nghost-ng-c3259544976=""
                          class="ng-star-inserted"
                          ><div
                            _ngcontent-ng-c3259544976=""
                            class="pos-absolute z-2 _container pe-none"
                            style="top: 73%; left: 0%; right: 0%;"
                          >
                            <div
                              _ngcontent-ng-c3259544976=""
                              class="w-12 center p-t-0 h4 ng-star-inserted"
                              style="color: rgb(255, 255, 255); font-size: 55px; line-height: 55px; letter-spacing: 7px; margin-left: 3.5px;"
                            >
                              Christmas Gifting
                            </div>
                            <!----><!----><!----><!---->
                          </div></text-overlay
                        ><!----><!----><text-overlay
                          _ngcontent-ng-c534717118=""
                          _nghost-ng-c3259544976=""
                          class="ng-star-inserted"
                          ><div
                            _ngcontent-ng-c3259544976=""
                            class="pos-absolute z-2 _container pe-none"
                            style="top: 94%; left: 0%; right: 0%;"
                          >
                            <!---->
                            <div
                              _ngcontent-ng-c3259544976=""
                              class="_custom-button pe-none center p-t-0 ng-star-inserted"
                              style="--scale: 0.7;"
                            >
                              <href _ngcontent-ng-c3259544976="" class="pe-auto"
                                ><!----><!----><span
                                  href="/gifts/gift-sets"
                                  tabindex="0"
                                  class="ng-star-inserted"
                                  ><div
                                    _ngcontent-ng-c3259544976=""
                                    class="button-1 ng-star-inserted"
                                    style="min-width: 0px;"
                                  >
                                    <span
                                      _ngcontent-ng-c3259544976=""
                                      class="button__body ng-star-inserted"
                                      >Shop Gift Sets</span
                                    ><!---->
                                  </div>
                                  <!----></
                                ><!----><!----><!----><!----><!----></href
                              >
                            </div>
                            <!----><!---->
                          </div></text-overlay
                        ><!----><!----><!---->
                      </div>
                    </div>
                  </div>
                  <!----><!----></a
                ><!----><!----><!----><!----><!----></href
              ><shop-this-look _ngcontent-ng-c534717118=""
                ><!----></shop-this-look
              >
            </div></page-component-hero-image
          ><!---->
        </div></icms-component
      >
    </div>
  </icms-component>
`
  ), a = class a {
    constructor() {
      this.eventsAborter = null, this.linkConfigs = [
        {
          selector: 'a[href="/gifting"]',
          eventId: "exp_hp_hero_click_4",
          eventDesc: "Christmas Gifting"
        },
        {
          selector: 'a[href="/gifts/gift-sets"], span[href="/gifts/gift-sets"]',
          eventId: "exp_hp_hero_click_5",
          eventDesc: "Shop Gift Sets",
          isSpanNavigation: !0
        }
      ];
    }
    init() {
      try {
        this.addStyles(), this.render();
      } catch (e) {
        this.handleError(e, "Initialization");
      }
    }
    handleError(e, t) {
      const i = e instanceof Error ? e.message : String(e);
      d(`ChristmasGifts ${t}: ${i}`, "error");
    }
    async render() {
      try {
        const e = await p(a.CONTAINER_SELECTOR);
        if (!e) {
          d(`Container ${a.CONTAINER_SELECTOR} not found`, "warn");
          return;
        }
        this.cleanupExistingSection(), this.insertSection(e), this.setupEventListeners(), this.setupVisibilityTracking();
      } catch (e) {
        this.handleError(e, "Rendering");
      }
    }
    cleanupExistingSection() {
      const e = document.querySelector(
        a.SECTION_SELECTOR
      );
      e && (this.eventsAborter && this.eventsAborter.abort(), e.remove());
    }
    insertSection(e) {
      e.insertAdjacentHTML("beforeend", I);
    }
    setupEventListeners() {
      this.eventsAborter && this.eventsAborter.abort(), this.eventsAborter = new AbortController(), this.linkConfigs.forEach((e) => {
        this.setupLinksForConfig(e);
      });
    }
    setupLinksForConfig(e) {
      const t = `${a.SECTION_SELECTOR} ${e.selector}`;
      document.querySelectorAll(t).forEach((s) => {
        this.attachClickListener(s, e);
      });
    }
    attachClickListener(e, t) {
      e.addEventListener(
        "click",
        (i) => {
          w(
            t.eventId,
            t.eventDesc,
            "click",
            "Home Page Christmas Gifting"
          ), t.isSpanNavigation && e.tagName.toLowerCase() === "span" && this.handleSpanNavigation(i, e);
        },
        { signal: this.eventsAborter.signal }
      );
    }
    handleSpanNavigation(e, t) {
      e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation();
      const i = t.getAttribute("href");
      i ? window.location.href = i : d("No href found for span navigation", "warn");
    }
    setupVisibilityTracking() {
      const e = document.querySelector(a.SECTION_SELECTOR);
      e && v(
        e,
        "exp_hp_hero_view_4",
        "Home Page Christmas Gifting",
        "Visibility",
        a.VISIBILITY_THRESHOLD
      );
    }
    addStyles() {
      if (document.getElementById(a.STYLES_ID)) return;
      const e = document.createElement("style");
      e.id = a.STYLES_ID, e.textContent = P, document.head.appendChild(e);
    }
    destroy() {
      this.eventsAborter && (this.eventsAborter.abort(), this.eventsAborter = null);
      const e = document.querySelector(a.SECTION_SELECTOR);
      e && e.remove();
    }
  };
  a.STYLES_ID = "crs-christmas-gifts-styles", a.CONTAINER_SELECTOR = ".crs-target-outfit-builder", a.SECTION_SELECTOR = ".crs-christmas-gifts-section", a.VISIBILITY_THRESHOLD = 0;
  let S = a;
  E({ name: "Homepage Hero Image Alternative", dev: "OS" }), (function(n, e, t, i, s, o) {
    n.hj = n.hj || function() {
      (n.hj.q = n.hj.q || []).push(arguments);
    }, n._hjSettings = { hjid: 2667925, hjsv: 6 }, s = e.getElementsByTagName("head")[0], o = e.createElement("script"), o.async = !0, o.src = t + n._hjSettings.hjid + i + n._hjSettings.hjsv, s && s.appendChild(o);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_hp_hero");
  class j {
    constructor() {
      this.previousUrl = location.href, this.hero = new x(), this.hideSections = new b(), this.popularCategories = new _(), this.outfitBuilder = new L(), this.christmasGifts = new S(), this.init();
    }
    async init() {
      this.imagePreloading(), this.interceptHistoryAPI(async () => {
        this.destroyComponents(), this.initComponents();
      }), this.initComponents();
    }
    initComponents() {
      (location.pathname === "/" || location.pathname === "/us/") && this.waitAutoInitData().then(() => {
        this.addStyles(), this.hero.init(), this.hideSections.init(), this.popularCategories.init(), this.outfitBuilder.init(), this.christmasGifts.init();
      });
    }
    waitAutoInitData() {
      return new Promise((e) => {
        const t = () => {
          window.autoInitData && window.autoInitData.website ? e() : window.setTimeout(t, 100);
        };
        t();
      });
    }
    destroyComponents() {
      this.hero.destroy(), this.hideSections.destroy(), this.popularCategories.destroy(), this.outfitBuilder.destroy(), this.christmasGifts.destroy();
    }
    interceptHistoryAPI(e) {
      new MutationObserver(() => {
        const i = location.href;
        this.previousUrl !== i && (this.previousUrl = i, e());
      }).observe(document.body, { childList: !0 });
    }
    imagePreloading() {
      y.forEach((e) => {
        const t = `<link rel="preload" as="image" href="${e.images.mob}" media="(max-width: 700px)" />
      <link rel="preload" as="image" href="${e.images.desktop}" media="(min-width: 701px)" />`;
        document.head.insertAdjacentHTML("beforeend", t);
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = k, document.head.appendChild(e);
    }
  }
  new j();
})();
