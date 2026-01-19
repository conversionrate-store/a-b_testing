(function() {
  "use strict";
  const J = (t, e, s, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: e,
      event_type: s,
      event_loc: i
    }), R(`Event: ${t} | ${e} | ${s} | ${i}`, "success");
  }, j = (t) => new Promise((e) => {
    const s = document.querySelector(t);
    s && e(s);
    const i = new MutationObserver(() => {
      const n = document.querySelector(t);
      n && (e(n), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), Re = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, le = (t, e, s, i, n = 1e3, r = 0.5) => {
    let l, o;
    if (l = new IntersectionObserver(
      function(a) {
        a[0].isIntersecting === !0 ? o = setTimeout(() => {
          J(
            e,
            a[0].target.dataset.visible || i || "",
            "view",
            s
          ), l.disconnect();
        }, n) : (R("Element is not fully visible", "warn"), clearTimeout(o));
      },
      { threshold: [r] }
    ), typeof t == "string") {
      const a = document.querySelector(t);
      a && l.observe(a);
    } else
      l.observe(t);
  }, R = (t, e = "info") => {
    let s;
    switch (e) {
      case "info":
        s = "color: #3498db;";
        break;
      case "warn":
        s = "color: #f39c12;";
        break;
      case "error":
        s = "color: #e74c3c;";
        break;
      case "success":
        s = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${t}`, `${s} font-size: 16px; font-weight: 600`);
  }, je = `.crs-hide {
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
`, F = "https://ab.conversionrate.store/lemieux/home-page-hero/img", oe = [
    {
      id: "winter-essentials",
      href: "/new-in/winter-essentials",
      title: { sub: "Performance in all Weather", main: "Winter Essentials" },
      button: {
        text: "Explore Now",
        href: "/new-in/winter-essentials"
      },
      images: {
        desktop: `${F}/hero_winter_essential.webp`,
        mob: `${F}/hero_winter_essential.webp`
      }
    },
    {
      id: "clothing",
      href: "/clothing",
      title: "Clothing",
      images: {
        desktop: `${F}/hero_clothing.webp`,
        mob: `${F}/hero_clothing.webp`
      }
    },
    {
      id: "horse",
      href: "/horsewear",
      title: "Horse",
      images: {
        desktop: `${F}/hero_horse.webp`,
        mob: `${F}/hero_horse.webp`
      }
    },
    {
      id: "footwear",
      href: "/footwear",
      title: "Footwear",
      images: {
        desktop: `${F}/hero_footwear.webp`,
        mob: `${F}/hero_footwear.webp`
      }
    }
  ];
  function V(t, e) {
    const s = t instanceof Error ? t.message : String(t);
    R(`${e}: ${s}`, "error");
  }
  const Fe = `header {
  color: inherit !important;
}
.page-header__inner {
  box-shadow: 0 2px 2px #5959591a;
}

.transparentLight:not(:hover)
  .page-header:not(.is-meganav-open):not(.is-search-outlet-open):not(.is-sticky)
  .meganav__item {
  color: inherit !important;
}

.page-header__wrapper.transparentLight:not(:hover).transparentLight
  .page-header:not(.is-sticky, .is-meganav-open, .is-search-outlet-open)
  .page-header__logo {
  filter: brightness(1) invert(0) !important;
}
icms-component:has(.crs-hero) > div:not(.crs-hero) {
  display: none;
}


.crs-hero {
  --gap: 8px;
  --header-height: 62px;
  margin-top: calc(var(--header-height) + var(--gap));
  display: grid;
  gap: var(--gap);
  padding: 0.5rem;
  padding-bottom: 0;
  grid-template-columns: 63fr 37fr;
  grid-template-areas: 'winter right';
}

.crs-hero-left {
  grid-area: winter;
}

.crs-hero-right {
  grid-area: right;
  display: grid;
  gap: var(--gap);
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'clothing horse'
    'footwear footwear';
}

[data-hero='winter-essentials'] {
  grid-area: winter;
}

[data-hero='clothing'] {
  grid-area: clothing;
}

[data-hero='horse'] {
  grid-area: horse;
}

[data-hero='footwear'] {
  grid-area: footwear;
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
  overflow: hidden;
}
.crs-hero-block img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

[data-hero='winter-essentials'] img {
  aspect-ratio: 1075 / 850; /* ~1.26:1 */
  object-position: 23% 0;
}

[data-hero='clothing'] img {
  aspect-ratio: 304 / 550; /* ~0.55:1 */
}

[data-hero='horse'] img {
  aspect-ratio: 304 / 550; /* ~0.55:1 */
  object-position: 0;
}

[data-hero='footwear'] img {
  aspect-ratio: 619 / 293; /* ~2.11:1 */
  object-position: 0 76%;
}

.crs-hero-block-text {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: left;
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

[data-hero='winter-essentials'] .crs-hero-block-text {
  left: 5%;
  bottom: 50%;
  transform: translateY(50%);
  width: max-content;
}
[data-hero='winter-essentials'] .crs-block-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-width: 70%;
}
[data-hero='winter-essentials'] .crs-block-title .sub-title {
  text-transform: capitalize;
  font-family: source-sans-3, sans-serif;
  line-height: 1;
  text-align: left;
}

[data-hero='winter-essentials'] .crs-block-title .main-title {
  margin: 0;
  text-transform: uppercase;
  text-align: left;
  font-size: 2em;
  line-height: 1;
}

[data-hero='winter-essentials'] .crs-block-title .collection-title {
  text-transform: uppercase;
  font-family: source-sans-3, sans-serif;
  line-height: 1;
}

[data-hero='winter-essentials'] .crs-block-btn {
  margin-top: 1.5em;
  padding-inline: 3rem;
  font-size: 1.125rem;
  letter-spacing: 0.0625rem;
  /* box-shadow: #00000080 0 2px 5px; */
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
    --header-height: 45px;
    grid-template-columns: 1fr;
    grid-template-areas:
      'winter'
      'right';
    padding: 0;
  }
  .crs-hero-left,
  .crs-hero-right {
    width: 100%;
  }
  .crs-hero-right {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'clothing horse'
      'footwear horse';
  }

  [data-hero='clothing'] {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  [data-hero='clothing'] img {
    height: auto;
    aspect-ratio: 412 / 409;
  }
  [data-hero='footwear'] {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  [data-hero='footwear'] img {
    height: auto;
    aspect-ratio: 8 / 7;
    object-position: center;
  }
  [data-hero='horse'] {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

  [data-hero='horse'] img {
    aspect-ratio: 288 / 582;
    height: auto;
  }
  [data-hero='winter-essentials'] .crs-hero-block-text {
    left: 3%;
    bottom: 40%;
    transform: translateY(50%);
    width: max-content;
  }

  [data-hero='winter-essentials'] .crs-block-title {
    gap: 5px;
    max-width: 80%;
  }

  [data-hero='winter-essentials'] .crs-block-title .main-title {
    font-size: 1.7rem;
  }

  [data-hero='winter-essentials'] .crs-block-title .sub-title {
    font-size: 0.5rem;
  }

  [data-hero='winter-essentials'] .crs-block-btn {
    margin-top: 0.5rem;
    padding-block: 0;
    padding-inline: 1.5rem;
    scale: 0.6;
    transform: translate(-2.5rem, 0);
  }
  .crs-hero-block-text {
    bottom: 5px;
  }
}
`, Ye = (t) => (
    /* HTML */
    `<icms-component
  _ngcontent-ng-c2047601728
  class="ng-star-inserted crs-hero-section"
  data-crs-no-hide
  >${t}</icms-component
>`
  ), G = class G {
    constructor() {
      this.eventsAborter = null;
    }
    // private mutationObserver: MutationObserver | null = null;
    init() {
      try {
        this.addStyles(), this.addNewHeroSection();
      } catch (e) {
        V(e, "Error initializing Hero section");
      }
    }
    async addNewHeroSection() {
      try {
        const e = await j(G.TARGET_SELECTOR);
        if (!e) {
          console.warn(`Target ${G.TARGET_SELECTOR} not found`);
          return;
        }
        (() => {
          this.replaceHeroContent(e), this.setupEventListeners(e);
        })();
      } catch (e) {
        V(e, "Error changing hero image section");
      }
    }
    replaceHeroContent(e) {
      const s = e.querySelector(G.HERO_CLASS);
      s && s.remove(), this.eventsAborter && this.eventsAborter.abort(), e.insertAdjacentHTML(
        "beforebegin",
        Ye(this.renderNewHeroSection())
      );
    }
    renderNewHeroSection() {
      const e = oe.find((i) => i.id === "winter-essentials"), s = oe.filter((i) => i.id !== "winter-essentials");
      return (
        /* HTML */
        `
      <div class="crs-hero">
        <div class="crs-hero-left">${e ? this.renderItem(e) : ""}</div>
        <div class="crs-hero-right">
          ${s.map((i) => this.renderItem(i)).join("")}
        </div>
      </div>
    `
      );
    }
    renderItem(e) {
      const s = this.renderTitle(e.title), i = this.generateAltText(e.title);
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
          <source
            media="(min-width: 701px)"
            srcset="${e.images.desktop}"
            fetchpriority="high"
          />
          <source
            media="(max-width: 700px)"
            srcset="${e.images.mob}"
            fetchpriority="high"
          />
          <img
            src="${e.images.desktop}"
            alt="${i}"
            fetchpriority="high"
          />
        </picture>
        <div class="crs-hero-block-text">
          ${s}
          ${e.button ? (
          /* HTML */
          `<div class="button-2 crs-block-btn">
                ${e.button.text}
              </div>`
        ) : ""}
        </div>
      </a>
    `
      );
    }
    renderTitle(e) {
      return typeof e == "string" ? `<div class="crs-block-title">${e}</div>` : (
        /* HTML */
        `<div class="crs-block-title">${[
          e.main ? (
            /* HTML */
            `<span class="main-title">${e.main}</span>`
          ) : "",
          e.sub ? (
            /* HTML */
            `<span class="sub-title">${e.sub}</span>`
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
      return typeof e == "string" ? e : e.main || "";
    }
    setupEventListeners(e) {
      this.eventsAborter && this.eventsAborter.abort(), this.eventsAborter = new AbortController();
      const s = e.previousElementSibling;
      if (!s) {
        console.warn("Hero section not found");
        return;
      }
      s.querySelectorAll("a.crs-hero-block").forEach((n) => {
        this.attachClickListener(n), this.attachVisibilityTracking(n);
      });
    }
    attachClickListener(e) {
      e.addEventListener(
        "click",
        (s) => {
          const i = e.dataset.title;
          if (!i) {
            console.warn("No title found for hero link", e);
            return;
          }
          J(
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
      le(
        e,
        "exp_hp_hero_view_1",
        "Home page Hero Section",
        e.dataset.title || "",
        G.VISIBILITY_THRESHOLD
      );
    }
    addStyles() {
      if (document.getElementById(G.STYLES_ID)) return;
      const e = document.createElement("style");
      e.id = G.STYLES_ID, e.textContent = Fe, document.head.appendChild(e);
    }
    destroy() {
      var e;
      this.eventsAborter && (this.eventsAborter.abort(), this.eventsAborter = null), (e = document == null ? void 0 : document.querySelector(G.HERO_CLASS)) == null || e.remove();
    }
  };
  G.STYLES_ID = "crs-hero-styles", G.VISIBILITY_THRESHOLD = 0, G.TARGET_SELECTOR = "icms-component:has(page-component-hero-image)", G.HERO_CLASS = ".crs-hero-section";
  let ce = G;
  const We = `[data-crs-hide='true']:not([data-crs-no-hide]) {
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
} */`, _e = [
    "What's Your Favourite Colour?",
    "What Suits Your Horse Best?",
    "@lemieuxproductsofficial",
    "WINTER SALE"
  ], K = class K {
    constructor() {
      this.resizeObserver = null, this.resizeTimeout = null, this.mutationObservers = /* @__PURE__ */ new Set();
    }
    init() {
      try {
        this.addStyles(), this.hideSection(), this.changeSectionCopy(), this.observeResize();
      } catch (e) {
        V(e, "Error initializing Hide Sections");
      }
    }
    async hideSection() {
      try {
        const e = await j(".page-view-boundary"), s = e == null ? void 0 : e.querySelectorAll(
          ":scope > icms-component"
        );
        if (!s) {
          R("No components found in page view boundary", "warn");
          return;
        }
        const i = Array.from(s);
        this.processInitialComponents(i);
      } catch (e) {
        V(e, "Error hiding sections");
      }
    }
    processInitialComponents(e) {
      e.forEach((s) => {
        try {
          s.classList.add("crs-top-section"), this.resetHideAttribute(s), this.hideComponent(s);
        } catch (i) {
          V(i, "Processing initial component");
        }
      });
    }
    hideComponent(e) {
      var i;
      const s = (i = e.querySelector(
        "h1, h2, h3, div.hero"
      )) == null ? void 0 : i.textContent;
      if (_e.some((n) => s == null ? void 0 : s.includes(n)) || e.dataset.crsNoHide === "true") {
        const n = _e.find((r) => s == null ? void 0 : s.includes(r));
        e.dataset.crsMarker = (n == null ? void 0 : n.toLowerCase().replace(/\s+/g, "-")) || "unknown";
        return;
      }
      e.dataset.crsHide = "true";
    }
    resetHideAttribute(e) {
      e.hasAttribute("data-crs-hide") && e.removeAttribute("data-crs-hide");
    }
    handleOutfitBuilder(e) {
      var i;
      const s = (i = e.querySelector(".hero")) == null ? void 0 : i.textContent;
      s != null && s.includes("Outfit Builder") && (e.classList.add("crs-target-outfit-builder"), e.innerHTML = "");
    }
    async changeSectionCopy() {
      try {
        const e = await j(".page-view-boundary"), s = e == null ? void 0 : e.querySelectorAll(
          ":scope > icms-component"
        );
        s == null || s.forEach((i) => {
          this.processPopularCategoriesTitle(i);
        });
      } catch (e) {
        V(e, "Change section copy");
      }
    }
    async processPopularCategoriesTitle(e) {
      var n;
      const s = e.querySelector("h1, h3");
      if (!((n = s == null ? void 0 : s.textContent) != null && n.includes("Shop Popular Categories")) || e.querySelector("vimeo-player") || s.__crsObserver)
        return;
      e.dataset.crsTitle = "Popular Categories", s.textContent = "Popular Categories";
      const i = await j(".crs-hero-section");
      i && i.after(e), this.setupTitleObserver(s);
    }
    setupTitleObserver(e) {
      const s = new MutationObserver(() => {
        var n;
        (((n = e.textContent) == null ? void 0 : n.trim()) || "").includes("Shop Popular Categories") && (e.textContent = "Popular Categories", setTimeout(() => {
          this.cleanupObserver(s);
        }, K.OBSERVER_CLEANUP_MS));
      });
      s.observe(e, {
        childList: !0,
        subtree: !0,
        characterData: !0,
        characterDataOldValue: !0
      }), this.mutationObservers.add(s), e.__crsObserver = s;
    }
    cleanupObserver(e) {
      e.disconnect(), this.mutationObservers.delete(e);
    }
    observeResize() {
      this.resizeObserver && this.resizeObserver.disconnect();
      const e = () => {
        this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(() => {
          this.hideSection();
        }, K.RESIZE_DEBOUNCE_MS);
      };
      this.resizeObserver = new ResizeObserver(e), j(".page-view-boundary").then((s) => {
        s && this.resizeObserver && this.resizeObserver.observe(s);
      }).catch((s) => {
        V(s, "Setup resize observer");
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
      e.id = "crs-hide-section-styles", e.textContent = We, document.head.appendChild(e);
    }
  };
  K.RESIZE_DEBOUNCE_MS = 500, K.OBSERVER_CLEANUP_MS = 1e3;
  let de = K;
  const Xe = (
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
            <div
              class="swiper-wrapper"
              id="swiper-wrapper-44d47afbc37a0c9a"
              aria-live="polite"
              style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
            >
              <!----><!---->
              <div
                data-swiper-slide-index="0"
                class="swiper-slide ng-star-inserted swiper-slide-active"
                role="group"
                aria-label="1 / 9"
                style="margin-right: 10px;"
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
                          src="/tco-images/unsafe/342x342/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT07906_lifestyle_aspenherringbonefleecegilet_black_001.jpg"
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
                class="swiper-slide ng-star-inserted swiper-slide-next"
                role="group"
                aria-label="2 / 9"
                style="margin-right: 10px;"
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
                          src="/tco-images/unsafe/342x342/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/GROUP_lifestyle_youngriderrubypufferjacket_black_cranberry_lilac_navy001-(1).jpg"
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
                class="swiper-slide ng-star-inserted"
                role="group"
                aria-label="3 / 9"
                style="margin-right: 10px;"
              >
                <!---->
                <div class="center ng-star-inserted">
                  <div class="w-12 ratio-1-1 overflow-hidden">
                    <href
                      ><!----><!----><a
                        href="/toys"
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
                          src="/tco-images/unsafe/342x342/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT07130_lifestyle_clippingtoypony_gracie_01.jpg"
                          alt=""
                        /><!----><!----><!----></a
                      ><!----><!----><!----><!----><!----></href
                    >
                  </div>
                  <href
                    ><!----><!----><a
                      href="/toys"
                      tabindex="0"
                      class="ng-star-inserted"
                      ><button class="button-inline m-t-3 ng-star-inserted">
                        <span class="button__body ng-star-inserted">Toys</span
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
                aria-label="4 / 9"
                style="margin-right: 10px;"
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
                          src="/tco-images/unsafe/342x342/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT07760_lifestyle_finesseeurojumpsquare_black_11-(1).jpg"
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
                data-swiper-slide-index="4"
                class="swiper-slide ng-star-inserted"
                role="group"
                aria-label="5 / 9"
                style="margin-right: 10px;"
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
                          src="/tco-images/unsafe/342x342/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT05305_lifestyle_arikaripstopturnoutrug_alpine-03.jpg"
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
                data-swiper-slide-index="5"
                class="swiper-slide ng-star-inserted"
                role="group"
                aria-label="6 / 9"
                style="margin-right: 10px;"
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
                          src="/tco-images/unsafe/342x342/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT03359_lifestyle_exoflextendonboot_blacksilver_10.jpg"
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
                        <span class="button__body ng-star-inserted"
                          >Horse Boots</span
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
                aria-label="7 / 9"
                style="margin-right: 10px;"
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
                          src="/tco-images/unsafe/342x342/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT04763_lifestyle_kudospatentdressagenoseband_brownwhite_3-(5)-1.jpg"
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
                data-swiper-slide-index="7"
                class="swiper-slide ng-star-inserted"
                role="group"
                aria-label="8 / 9"
                style="margin-right: 10px;"
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
                          src="/tco-images/unsafe/342x342/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT08018_lifestyle_menshoodedpufferjacket_navy_007-(2).jpg"
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
                data-swiper-slide-index="8"
                class="swiper-slide ng-star-inserted"
                role="group"
                aria-label="9 / 9"
                style="margin-right: 10px;"
              >
                <!---->
                <div class="center ng-star-inserted">
                  <div class="w-12 ratio-1-1 overflow-hidden">
                    <href
                      ><!----><!----><a
                        href="/clothing/accessories/accessories"
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
                          src="/tco-images/unsafe/342x342/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/GROUP_lifestyle_eliteluggage_navy_2.jpg"
                          alt=""
                        /><!----><!----><!----></a
                      ><!----><!----><!----><!----><!----></href
                    >
                  </div>
                  <href
                    ><!----><!----><a
                      href="/clothing/accessories/accessories"
                      tabindex="0"
                      class="ng-star-inserted"
                      ><button class="button-inline m-t-3 ng-star-inserted">
                        <span class="button__body ng-star-inserted"
                          >Accessories</span
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
  ), Ue = `[data-crs-title='Popular Categories'] .swiper-initialized {
  overflow: hidden;
  overflow-x: auto;
  touch-action: initial;
  padding-inline: 12px;
  min-height: max-content;

  /* Hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer and Edge */
}

[data-crs-title='Popular Categories'] h1 {
  border: none !important;
}

[data-crs-title='Popular Categories'] swiper::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

/* Prevent images from blocking mouse drag */
/* only on not touch devices */
@media (pointer: fine) {
  [data-crs-title='Popular Categories'] .swiper-initialized {
    touch-action: pan-x;
  }
  [data-crs-title='Popular Categories']
    .swiper-initialized[style*='grabbing']
    img {
    pointer-events: none;
    user-select: none;
    -webkit-user-drag: none;
  }
}

/* Keep links clickable but prevent text selection */
[data-crs-title='Popular Categories'] .swiper-initialized[style*='grabbing'] a {
  user-select: none;
}

[data-crs-title='Popular Categories'] .swiper-wrapper {
  display: flex;
  padding-block: 5px;
}

[data-crs-title='Popular Categories'] .swiper-wrapper .swiper-slide {
  aspect-ratio: 1;
  width: 200px;
  height: max-content;
}

[data-crs-title='Popular Categories']
  > div:not(.crs-category-carousel-wrapper) {
  display: none;
}

@media (min-width: 1390px) {
  [data-crs-title='Popular Categories'] .swiper-initialized {
    min-height: max-content;
  }
  [data-crs-title='Popular Categories'] .swiper-wrapper .swiper-slide {
    flex: 0 0 auto;
    width: calc(100% / 4.7 - 10px) !important;
    height: max-content;
    aspect-ratio: 1;
  }
}


page-component-hero-image:has(vimeo-player) {
  padding-top: 0 !important;
}

@media (max-width: 768px) {
  [data-crs-title='Popular Categories'] page-component-category-carousel {
    margin-top: 0 !important;
  }
}`, Q = class Q {
    constructor() {
      this.eventsAborter = null;
    }
    init() {
      try {
        this.addStyles(), this.modifySection();
      } catch (e) {
        V(e, "Error initializing Popular Categories");
      }
    }
    async modifySection() {
      try {
        const e = await j('[data-crs-title="Popular Categories"]');
        e && (e.outerHTML = Xe, this.initSlider());
      } catch (e) {
        V(e, "Error modifying Popular Categories section");
      }
    }
    initSlider() {
      this.eventsAborter && this.eventsAborter.abort(), this.eventsAborter = new AbortController();
      const e = document.querySelector(
        ".crs-slider-section .swiper-initialized"
      );
      if (!e) {
        R("Slider box not found for scroll interaction", "warn");
        return;
      }
      e.style.cursor = "grab";
      let s = !1, i = 0, n = 0, r = 0, l = 0;
      e.addEventListener(
        "mousedown",
        (o) => {
          o.preventDefault(), s = !0, i = o.pageX, n = o.pageY, r = e.scrollLeft, l = e.scrollTop;
        },
        { signal: this.eventsAborter.signal }
      ), e.addEventListener(
        "mouseleave",
        () => {
          s = !1, e.style.cursor = "grab";
        },
        { signal: this.eventsAborter.signal }
      ), e.addEventListener(
        "mouseup",
        () => {
          s = !1, e.style.cursor = "grab";
        },
        { signal: this.eventsAborter.signal }
      ), e.addEventListener(
        "mousemove",
        (o) => {
          if (!s) return;
          o.preventDefault(), e.style.cursor = "grabbing";
          const a = o.pageX, u = o.pageY, m = (a - i) * Q.SCROLL_SENSITIVITY, p = (u - n) * Q.SCROLL_SENSITIVITY;
          e.scrollLeft = r - m, e.scrollTop = l - p;
        },
        { signal: this.eventsAborter.signal }
      ), e.addEventListener(
        "dragstart",
        (o) => {
          o.preventDefault();
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
      e.id = "crs-popular-categories-styles", e.textContent = Ue, document.head.appendChild(e);
    }
  };
  Q.SCROLL_SENSITIVITY = 1;
  let ue = Q;
  const Ke = (
    /* HTML */
    `
  <icms-component
    _ngcontent-ng-c2047601728=""
    class="ng-star-inserted crs-top-section crs-outfit-section"
    data-crs-no-hide
  >
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
      <icms-component
        _ngcontent-ng-c2047601728=""
        class="ng-star-inserted"
        data-builder="outfit-builder"
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
      <icms-component
        _ngcontent-ng-c2047601728=""
        class="ng-star-inserted"
        data-builder="pony-builder"
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
  </icms-component>
`
  ), Je = `.crs-outfit-section .crs-mobile page-component-text {
  margin-top: 0 !important;
}

.crs-outfit-section .crs-mobile h1 {
  margin-top: 20px;
}
`;
  class Ze {
    constructor() {
      this.eventsAborter = null;
    }
    init() {
      try {
        this.addStyles(), this.render();
      } catch (e) {
        V(e, "Error initializing Outfit Builder section");
      }
    }
    async render() {
      try {
        const e = await j('[data-crs-marker="winter-sale"]'), s = document.querySelector(".crs-outfit-section");
        s && (this.eventsAborter && this.eventsAborter.abort(), s.remove());
        const i = Ke;
        if (e)
          e.insertAdjacentHTML("afterend", i), this.setupEvents();
        else {
          R("Container .crs-winter-sale-section not found", "warn");
          return;
        }
      } catch (e) {
        V(e, "Error rendering Outfit Builder section");
      }
    }
    setupEvents() {
      this.setupBuilderEvents();
    }
    setupBuilder(e, s) {
      document.querySelectorAll(e.selector).forEach((i) => {
        const n = i.querySelector("a");
        le(
          i,
          e.viewEvent,
          "Home Page Outfit Builder",
          e.visibility,
          0
        ), n && n.addEventListener(
          "click",
          (r) => {
            J(
              e.clickEvent,
              e.name,
              "click",
              "Home Page Outfit Builder"
            );
          },
          {
            signal: s.signal
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
        e.id = "crs-outfit-builder-styles", e.textContent = Je, document.head.appendChild(e);
      }
    }
  }
  const Qe = (
    /* HTML */
    `<icms-component
  _ngcontent-ng-c2047601728=""
  class="ng-star-inserted crs-discipline-section"
  data-crs-no-hide
  ><div>
    <page-component-categories-carousel
      _nghost-ng-c4242216762=""
      class="ng-star-inserted"
      style="display: block; padding-top: 48px;"
      ><div
        _ngcontent-ng-c4242216762=""
        class="categories-carousel p-b wrap-x wrap-l pos-relative show-arrows ng-star-inserted"
      >
        <div _ngcontent-ng-c4242216762="" class="center overflow-hidden">
          <h2
            _ngcontent-ng-c4242216762=""
            class="p-l-12 p-r-12 pos-relative w-12-s wrap-s p-t-5-s b-t-s b-col-42-s title-decoration h1 ng-star-inserted"
          >
            LeMieux by Discipline
          </h2>
          <!---->
          <p
            _ngcontent-ng-c4242216762=""
            class="p1 wrap-s p-t-2-s ng-star-inserted"
          >
            A wide range of products for horse and rider designed for optimum
            comfort and performance in your chosen discipline
          </p>
          <!---->
        </div>
        <div
          _ngcontent-ng-c4242216762=""
          class="p-t-20 p-t-10-m p-t-4-s p-b-6 p-b-7-m p-r-4-s flex flex-middle ng-star-inserted"
        >
          <div
            _ngcontent-ng-c4242216762=""
            class="carousel-arrows flex flex-justify-between"
          >
            <button
              _ngcontent-ng-c4242216762=""
              type="button"
              class="carousel-button m-r-5 bg-col-w box-shadow b-radius-max model-carousel-prev-3"
              aria-label="Previous slide"
              tabindex="0"
              aria-controls="swiper-wrapper-810fb8fec6d465c6d"
            >
              <i
                _ngcontent-ng-c4242216762=""
                aria-hidden="true"
                class="icon-chevron-left b-radius-max fill flex flex-justify-center flex-middle"
              ></i></button
            ><button
              _ngcontent-ng-c4242216762=""
              type="button"
              class="carousel-button bg-col-w box-shadow b-radius-max model-carousel-next-3"
              aria-label="Next slide"
              tabindex="0"
              aria-controls="swiper-wrapper-810fb8fec6d465c6d"
            >
              <i
                _ngcontent-ng-c4242216762=""
                aria-hidden="true"
                class="icon-chevron-right b-radius-max fill flex flex-justify-center flex-middle"
              ></i>
            </button>
          </div>
        </div>
        <!----><swiper
          _ngcontent-ng-c4242216762=""
          class="m-t-5 swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
          ><!----><!----><!---->
          <div
            class="swiper-wrapper"
            id="swiper-wrapper-810fb8fec6d465c6d"
            aria-live="polite"
            style="transition-duration: 0ms; transform: translate3d(-1342.5px, 0px, 0px);"
          >
            <div
              data-swiper-slide-index="0"
              class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active ng-star-inserted"
              role="group"
              aria-label="1 / 3"
            >
              <!---->
              <div
                _ngcontent-ng-c4242216762=""
                class="ratio-4-3 ratio-1-1-s overflow-hidden ng-star-inserted"
              >
                <div _ngcontent-ng-c4242216762="" class="fill _scale">
                  <a
                    _ngcontent-ng-c4242216762=""
                    class="fill"
                    href="/discipline/eventing"
                    ><shell
                      _ngcontent-ng-c4242216762=""
                      _nghost-ng-c3904987725=""
                      ><img
                        _ngcontent-ng-c3904987725=""
                        alt=""
                        loading="eager"
                        fetchpriority="auto" /></shell
                    ><img
                      _ngcontent-ng-c4242216762=""
                      class="fill z-1 df-image ng-star-inserted"
                      loading="lazy"
                      src="/tco-images/unsafe/769x577/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Eventing_Carousel.jpg"
                      alt=""
                    /><!----><!----></a
                  ><shop-this-look _ngcontent-ng-c4242216762=""
                    ><!----></shop-this-look
                  >
                </div>
              </div>
              <href _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                ><!----><!----><a
                  href="/discipline/eventing"
                  tabindex="0"
                  class="ng-star-inserted"
                  ><div
                    _ngcontent-ng-c4242216762=""
                    class="pos-absolute pos-relative-s inline-block-s left-50 cta-link underline z-2 p1 bottom-6 col-b ng-star-inserted"
                  >
                    <span _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                      >Eventing</span
                    ><!---->
                  </div>
                  <!----></a
                ><!----><!----><!----><!----><!----></href
              ><!----><!----><!----><!---->
            </div>
            <div
              data-swiper-slide-index="1"
              class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next ng-star-inserted"
              role="group"
              aria-label="2 / 3"
            >
              <!---->
              <div
                _ngcontent-ng-c4242216762=""
                class="ratio-4-3 ratio-1-1-s overflow-hidden ng-star-inserted"
              >
                <div _ngcontent-ng-c4242216762="" class="fill _scale">
                  <a
                    _ngcontent-ng-c4242216762=""
                    class="fill"
                    href="/discipline/show-jumping"
                    ><shell
                      _ngcontent-ng-c4242216762=""
                      _nghost-ng-c3904987725=""
                      ><img
                        _ngcontent-ng-c3904987725=""
                        alt=""
                        loading="eager"
                        fetchpriority="auto" /></shell
                    ><img
                      _ngcontent-ng-c4242216762=""
                      class="fill z-1 df-image ng-star-inserted"
                      loading="lazy"
                      src="/tco-images/unsafe/769x577/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/HarryCharles_ShowJumping.jpg"
                      alt=""
                    /><!----><!----></a
                  ><shop-this-look _ngcontent-ng-c4242216762=""
                    ><!----></shop-this-look
                  >
                </div>
              </div>
              <href _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                ><!----><!----><a
                  href="/discipline/show-jumping"
                  tabindex="0"
                  class="ng-star-inserted"
                  ><div
                    _ngcontent-ng-c4242216762=""
                    class="pos-absolute pos-relative-s inline-block-s left-50 cta-link underline z-2 p1 bottom-6 col-b ng-star-inserted"
                  >
                    <span _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                      >Show Jumping</span
                    ><!---->
                  </div>
                  <!----></a
                ><!----><!----><!----><!----><!----></href
              ><!----><!----><!----><!---->
            </div>
            <div
              data-swiper-slide-index="2"
              class="swiper-slide swiper-slide-duplicate swiper-slide-prev ng-star-inserted"
              role="group"
              aria-label="3 / 3"
            >
              <!---->
              <div
                _ngcontent-ng-c4242216762=""
                class="ratio-4-3 ratio-1-1-s overflow-hidden ng-star-inserted"
              >
                <div _ngcontent-ng-c4242216762="" class="fill _scale">
                  <a
                    _ngcontent-ng-c4242216762=""
                    class="fill"
                    href="/discipline/dressage"
                    ><shell
                      _ngcontent-ng-c4242216762=""
                      _nghost-ng-c3904987725=""
                      ><img
                        _ngcontent-ng-c3904987725=""
                        alt=""
                        loading="eager"
                        fetchpriority="auto" /></shell
                    ><img
                      _ngcontent-ng-c4242216762=""
                      class="fill z-1 df-image ng-star-inserted"
                      loading="lazy"
                      src="/tco-images/unsafe/769x577/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/london-- Lottie_7.jpg"
                      alt=""
                    /><!----><!----></a
                  ><shop-this-look _ngcontent-ng-c4242216762=""
                    ><!----></shop-this-look
                  >
                </div>
              </div>
              <href _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                ><!----><!----><a
                  href="/discipline/dressage"
                  tabindex="0"
                  class="ng-star-inserted"
                  ><div
                    _ngcontent-ng-c4242216762=""
                    class="pos-absolute pos-relative-s inline-block-s left-50 cta-link underline z-2 p1 bottom-6 col-b ng-star-inserted"
                  >
                    <span _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                      >Dressage</span
                    ><!---->
                  </div>
                  <!----></a
                ><!----><!----><!----><!----><!----></href
              ><!----><!----><!----><!---->
            </div>
            <!----><!---->
            <div
              data-swiper-slide-index="0"
              class="swiper-slide swiper-slide-active ng-star-inserted"
              role="group"
              aria-label="1 / 3"
            >
              <!---->
              <div
                _ngcontent-ng-c4242216762=""
                class="ratio-4-3 ratio-1-1-s overflow-hidden ng-star-inserted"
              >
                <div _ngcontent-ng-c4242216762="" class="fill _scale">
                  <a
                    _ngcontent-ng-c4242216762=""
                    class="fill"
                    href="/discipline/eventing"
                    ><shell
                      _ngcontent-ng-c4242216762=""
                      _nghost-ng-c3904987725=""
                      ><img
                        _ngcontent-ng-c3904987725=""
                        alt=""
                        loading="eager"
                        fetchpriority="auto" /></shell
                    ><img
                      _ngcontent-ng-c4242216762=""
                      class="fill z-1 df-image ng-star-inserted"
                      loading="lazy"
                      src="/tco-images/unsafe/769x577/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Eventing_Carousel.jpg"
                      alt=""
                    /><!----><!----></a
                  ><shop-this-look _ngcontent-ng-c4242216762=""
                    ><!----></shop-this-look
                  >
                </div>
              </div>
              <href _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                ><!----><!----><a
                  href="/discipline/eventing"
                  tabindex="0"
                  class="ng-star-inserted"
                  ><div
                    _ngcontent-ng-c4242216762=""
                    class="pos-absolute pos-relative-s inline-block-s left-50 cta-link underline z-2 p1 bottom-6 col-b ng-star-inserted"
                  >
                    <span _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                      >Eventing</span
                    ><!---->
                  </div>
                  <!----></a
                ><!----><!----><!----><!----><!----></href
              ><!----><!----><!----><!---->
            </div>
            <div
              data-swiper-slide-index="1"
              class="swiper-slide swiper-slide-next ng-star-inserted"
              role="group"
              aria-label="2 / 3"
            >
              <!---->
              <div
                _ngcontent-ng-c4242216762=""
                class="ratio-4-3 ratio-1-1-s overflow-hidden ng-star-inserted"
              >
                <div _ngcontent-ng-c4242216762="" class="fill _scale">
                  <a
                    _ngcontent-ng-c4242216762=""
                    class="fill"
                    href="/discipline/show-jumping"
                    ><shell
                      _ngcontent-ng-c4242216762=""
                      _nghost-ng-c3904987725=""
                      ><img
                        _ngcontent-ng-c3904987725=""
                        alt=""
                        loading="eager"
                        fetchpriority="auto" /></shell
                    ><img
                      _ngcontent-ng-c4242216762=""
                      class="fill z-1 df-image ng-star-inserted"
                      loading="lazy"
                      src="/tco-images/unsafe/769x577/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/HarryCharles_ShowJumping.jpg"
                      alt=""
                    /><!----><!----></a
                  ><shop-this-look _ngcontent-ng-c4242216762=""
                    ><!----></shop-this-look
                  >
                </div>
              </div>
              <href _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                ><!----><!----><a
                  href="/discipline/show-jumping"
                  tabindex="0"
                  class="ng-star-inserted"
                  ><div
                    _ngcontent-ng-c4242216762=""
                    class="pos-absolute pos-relative-s inline-block-s left-50 cta-link underline z-2 p1 bottom-6 col-b ng-star-inserted"
                  >
                    <span _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                      >Show Jumping</span
                    ><!---->
                  </div>
                  <!----></a
                ><!----><!----><!----><!----><!----></href
              ><!----><!----><!----><!---->
            </div>
            <div
              data-swiper-slide-index="2"
              class="swiper-slide swiper-slide-duplicate-prev ng-star-inserted"
              role="group"
              aria-label="3 / 3"
            >
              <!---->
              <div
                _ngcontent-ng-c4242216762=""
                class="ratio-4-3 ratio-1-1-s overflow-hidden ng-star-inserted"
              >
                <div _ngcontent-ng-c4242216762="" class="fill _scale">
                  <a
                    _ngcontent-ng-c4242216762=""
                    class="fill"
                    href="/discipline/dressage"
                    ><shell
                      _ngcontent-ng-c4242216762=""
                      _nghost-ng-c3904987725=""
                      ><img
                        _ngcontent-ng-c3904987725=""
                        alt=""
                        loading="eager"
                        fetchpriority="auto" /></shell
                    ><img
                      _ngcontent-ng-c4242216762=""
                      class="fill z-1 df-image ng-star-inserted"
                      loading="lazy"
                      src="/tco-images/unsafe/769x577/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/london-- Lottie_7.jpg"
                      alt=""
                    /><!----><!----></a
                  ><shop-this-look _ngcontent-ng-c4242216762=""
                    ><!----></shop-this-look
                  >
                </div>
              </div>
              <href _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                ><!----><!----><a
                  href="/discipline/dressage"
                  tabindex="0"
                  class="ng-star-inserted"
                  ><div
                    _ngcontent-ng-c4242216762=""
                    class="pos-absolute pos-relative-s inline-block-s left-50 cta-link underline z-2 p1 bottom-6 col-b ng-star-inserted"
                  >
                    <span _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                      >Dressage</span
                    ><!---->
                  </div>
                  <!----></a
                ><!----><!----><!----><!----><!----></href
              ><!----><!----><!----><!---->
            </div>
            <!----><!---->
            <div
              data-swiper-slide-index="0"
              class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active ng-star-inserted"
              role="group"
              aria-label="1 / 3"
            >
              <!---->
              <div
                _ngcontent-ng-c4242216762=""
                class="ratio-4-3 ratio-1-1-s overflow-hidden ng-star-inserted"
              >
                <div _ngcontent-ng-c4242216762="" class="fill _scale">
                  <a
                    _ngcontent-ng-c4242216762=""
                    class="fill"
                    href="/discipline/eventing"
                    ><shell
                      _ngcontent-ng-c4242216762=""
                      _nghost-ng-c3904987725=""
                      ><img
                        _ngcontent-ng-c3904987725=""
                        alt=""
                        loading="eager"
                        fetchpriority="auto" /></shell
                    ><img
                      _ngcontent-ng-c4242216762=""
                      class="fill z-1 df-image ng-star-inserted"
                      loading="lazy"
                      src="/tco-images/unsafe/769x577/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Eventing_Carousel.jpg"
                      alt=""
                    /><!----><!----></a
                  ><shop-this-look _ngcontent-ng-c4242216762=""
                    ><!----></shop-this-look
                  >
                </div>
              </div>
              <href _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                ><!----><!----><a
                  href="/discipline/eventing"
                  tabindex="0"
                  class="ng-star-inserted"
                  ><div
                    _ngcontent-ng-c4242216762=""
                    class="pos-absolute pos-relative-s inline-block-s left-50 cta-link underline z-2 p1 bottom-6 col-b ng-star-inserted"
                  >
                    <span _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                      >Eventing</span
                    ><!---->
                  </div>
                  <!----></a
                ><!----><!----><!----><!----><!----></href
              ><!----><!----><!----><!---->
            </div>
            <div
              data-swiper-slide-index="1"
              class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next ng-star-inserted"
              role="group"
              aria-label="2 / 3"
            >
              <!---->
              <div
                _ngcontent-ng-c4242216762=""
                class="ratio-4-3 ratio-1-1-s overflow-hidden ng-star-inserted"
              >
                <div _ngcontent-ng-c4242216762="" class="fill _scale">
                  <a
                    _ngcontent-ng-c4242216762=""
                    class="fill"
                    href="/discipline/show-jumping"
                    ><shell
                      _ngcontent-ng-c4242216762=""
                      _nghost-ng-c3904987725=""
                      ><img
                        _ngcontent-ng-c3904987725=""
                        alt=""
                        loading="eager"
                        fetchpriority="auto" /></shell
                    ><img
                      _ngcontent-ng-c4242216762=""
                      class="fill z-1 df-image ng-star-inserted"
                      loading="lazy"
                      src="/tco-images/unsafe/769x577/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/HarryCharles_ShowJumping.jpg"
                      alt=""
                    /><!----><!----></a
                  ><shop-this-look _ngcontent-ng-c4242216762=""
                    ><!----></shop-this-look
                  >
                </div>
              </div>
              <href _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                ><!----><!----><a
                  href="/discipline/show-jumping"
                  tabindex="0"
                  class="ng-star-inserted"
                  ><div
                    _ngcontent-ng-c4242216762=""
                    class="pos-absolute pos-relative-s inline-block-s left-50 cta-link underline z-2 p1 bottom-6 col-b ng-star-inserted"
                  >
                    <span _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                      >Show Jumping</span
                    ><!---->
                  </div>
                  <!----></a
                ><!----><!----><!----><!----><!----></href
              ><!----><!----><!----><!---->
            </div>
            <div
              data-swiper-slide-index="2"
              class="swiper-slide swiper-slide-duplicate ng-star-inserted"
              role="group"
              aria-label="3 / 3"
            >
              <!---->
              <div
                _ngcontent-ng-c4242216762=""
                class="ratio-4-3 ratio-1-1-s overflow-hidden ng-star-inserted"
              >
                <div _ngcontent-ng-c4242216762="" class="fill _scale">
                  <a
                    _ngcontent-ng-c4242216762=""
                    class="fill"
                    href="/discipline/dressage"
                    ><shell
                      _ngcontent-ng-c4242216762=""
                      _nghost-ng-c3904987725=""
                      ><img
                        _ngcontent-ng-c3904987725=""
                        alt=""
                        loading="eager"
                        fetchpriority="auto" /></shell
                    ><img
                      _ngcontent-ng-c4242216762=""
                      class="fill z-1 df-image ng-star-inserted"
                      loading="lazy"
                      src="/tco-images/unsafe/769x577/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/london-- Lottie_7.jpg"
                      alt=""
                    /><!----><!----></a
                  ><shop-this-look _ngcontent-ng-c4242216762=""
                    ><!----></shop-this-look
                  >
                </div>
              </div>
              <href _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                ><!----><!----><a
                  href="/discipline/dressage"
                  tabindex="0"
                  class="ng-star-inserted"
                  ><div
                    _ngcontent-ng-c4242216762=""
                    class="pos-absolute pos-relative-s inline-block-s left-50 cta-link underline z-2 p1 bottom-6 col-b ng-star-inserted"
                  >
                    <span _ngcontent-ng-c4242216762="" class="ng-star-inserted"
                      >Dressage</span
                    ><!---->
                  </div>
                  <!----></a
                ><!----><!----><!----><!----><!----></href
              ><!----><!----><!----><!---->
            </div>
            <!----><!---->
          </div>
          <!----><span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span></swiper
        ><carousel-dots _ngcontent-ng-c4242216762=""
          ><div
            class="carousel-dots ng-star-inserted"
            style="--carousel-dots-number: 3;"
          >
            <div aria-label="Carousel Pagination" class="carousel-dots-inner">
              <button
                type="button"
                class="carousel-dot is-active ng-star-inserted"
                aria-label="Carousel Page 1 (Current Slide)"
              ></button
              ><button
                type="button"
                class="carousel-dot ng-star-inserted"
                aria-label="Carousel Page 2"
              ></button
              ><button
                type="button"
                class="carousel-dot ng-star-inserted"
                aria-label="Carousel Page 3"
              ></button
              ><!---->
              <div class="carousel-dots-underbar"></div>
            </div>
          </div>
          <!---->
          <div
            class="ng-hide categories-carousel-pagination-3 swiper-pagination-bullets swiper-pagination-horizontal"
          >
           </div
        ></carousel-dots>
      </div>
      <!----></page-component-categories-carousel
    ><!---->
  </div></icms-component
>`
  ), et = `.crs-discipline-section .categories-carousel .swiper-slide {
  width: calc(var(--vw, 1vw) * 40);
  min-width: 35.75rem;
  padding-bottom: 3.25rem;
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

@media (max-width: 768px) {
  .crs-discipline-section .categories-carousel .swiper-slide {
    min-width: 11.5625rem;
    padding-bottom: 0.875rem;
  }
}

.crs-discipline-section .categories-carousel .swiper-slide ._scale {
  max-width: 100%;
  transform: scale(0.9);
  transform-origin: center;
  transition: all 0.5s ease-in-out;
}

.crs-discipline-section .categories-carousel .swiper-slide-active ._scale {
  transform: scale(1.05) !important;
}

.crs-discipline-section .carousel-arrows {
  display: none !important;
}

.crs-discipline-section .show-arrows:hover .carousel-arrows {
  display: flex !important;
  position: absolute !important;
  z-index: 100;
  top: 58%;
  left: 50%;
  width: 97% !important;
  padding: 8px;
  transform: translate(-50%, -50%);
}

.crs-discipline-section .carousel-button {
  position: relative;
  height: 40px;
  width: 40px;
}

.icon-chevron-right[_ngcontent-ng-c4242216762]:before {
  content: '\\f15e';
}

.carousel-dots {
  --carousel-width: 100%;
  --carousel-dots-number: 1;
  --carousel-dot-height: 0.125rem;
  --carousel-dot-width: max(
    3rem,
    (var(--carousel-width) / var(--carousel-dots-number, 1))
  );
  --carousel-dot-half-width: calc(var(--carousel-dot-width, 3rem) / 2);
  --carousel-dots-background: #f6f5f5;
  --carousel-dots-background-hover: #f6f5f5;
  --carousel-dots-background-active: black;
  display: flex;
  justify-content: center;
}

.crs-discipline-section .carousel-dots-inner {
  width: 13.8125rem;
}

.carousel-dots .carousel-dots-inner {
  position: relative;
  display: inline-flex;
  height: 3rem;
  justify-content: center;
}

.carousel-dots .carousel-dot {
  position: relative;
  display: inline-block;
  width: var(--carousel-dot-width);
  height: 3rem;
  -webkit-user-select: none;
  user-select: none;
  zoom: 1;
}

.carousel-dots .carousel-dot:after {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  display: block;
  width: 100%;
  height: var(--carousel-dot-height);
  background-color: var(--carousel-dots-background);
  content: '';
  pointer-events: none;
  transform: translateY(-50%);
}

.carousel-dots .carousel-dots-underbar {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--carousel-dot-width);
  height: 3rem;
  pointer-events: none;
  transition: 0.3s ease-in-out;
}

.carousel-dots
  .carousel-dot:nth-of-type(1).is-active
  ~ .carousel-dots-underbar {
  left: min(
    var(--carousel-width) - var(--carousel-dot-width),
    max(1px, var(--carousel-dot-width, 3rem) * 0)
  );
}

.carousel-dots
  .carousel-dot:nth-of-type(2).is-active
  ~ .carousel-dots-underbar {
  left: min(
    var(--carousel-width) - var(--carousel-dot-width),
    max(1px, var(--carousel-dot-width, 3rem) * 1)
  );
}

.carousel-dots
  .carousel-dot:nth-of-type(3).is-active
  ~ .carousel-dots-underbar {
  left: min(
    var(--carousel-width) - var(--carousel-dot-width),
    max(1px, var(--carousel-dot-width, 3rem) * 2)
  );
}

.carousel-dots .carousel-dots-underbar:after {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  display: block;
  width: 100%;
  height: var(--carousel-dot-height);
  background-color: var(--carousel-dots-background-active);
  content: '';
  transform: translateY(-50%);
}
`;
  function Ee(t) {
    return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object;
  }
  function pe(t = {}, e = {}) {
    const s = ["__proto__", "constructor", "prototype"];
    Object.keys(e).filter((i) => s.indexOf(i) < 0).forEach((i) => {
      typeof t[i] > "u" ? t[i] = e[i] : Ee(e[i]) && Ee(t[i]) && Object.keys(e[i]).length > 0 && pe(t[i], e[i]);
    });
  }
  const Ce = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function X() {
    const t = typeof document < "u" ? document : {};
    return pe(t, Ce), t;
  }
  const tt = {
    document: Ce,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(t) {
      return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0);
    },
    cancelAnimationFrame(t) {
      typeof setTimeout > "u" || clearTimeout(t);
    }
  };
  function D() {
    const t = typeof window < "u" ? window : {};
    return pe(t, tt), t;
  }
  function st(t = "") {
    return t.trim().split(" ").filter((e) => !!e.trim());
  }
  function it(t) {
    const e = t;
    Object.keys(e).forEach((s) => {
      try {
        e[s] = null;
      } catch {
      }
      try {
        delete e[s];
      } catch {
      }
    });
  }
  function ke(t, e = 0) {
    return setTimeout(t, e);
  }
  function ee() {
    return Date.now();
  }
  function nt(t) {
    const e = D();
    let s;
    return e.getComputedStyle && (s = e.getComputedStyle(t, null)), !s && t.currentStyle && (s = t.currentStyle), s || (s = t.style), s;
  }
  function rt(t, e = "x") {
    const s = D();
    let i, n, r;
    const l = nt(t);
    return s.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((o) => o.replace(",", ".")).join(", ")), r = new s.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), e === "x" && (s.WebKitCSSMatrix ? n = r.m41 : i.length === 16 ? n = parseFloat(i[12]) : n = parseFloat(i[4])), e === "y" && (s.WebKitCSSMatrix ? n = r.m42 : i.length === 16 ? n = parseFloat(i[13]) : n = parseFloat(i[5])), n || 0;
  }
  function te(t) {
    return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object";
  }
  function at(t) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11);
  }
  function q(...t) {
    const e = Object(t[0]), s = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < t.length; i += 1) {
      const n = t[i];
      if (n != null && !at(n)) {
        const r = Object.keys(Object(n)).filter((l) => s.indexOf(l) < 0);
        for (let l = 0, o = r.length; l < o; l += 1) {
          const a = r[l], u = Object.getOwnPropertyDescriptor(n, a);
          u !== void 0 && u.enumerable && (te(e[a]) && te(n[a]) ? n[a].__swiper__ ? e[a] = n[a] : q(e[a], n[a]) : !te(e[a]) && te(n[a]) ? (e[a] = {}, n[a].__swiper__ ? e[a] = n[a] : q(e[a], n[a])) : e[a] = n[a]);
        }
      }
    }
    return e;
  }
  function se(t, e, s) {
    t.style.setProperty(e, s);
  }
  function Pe({
    swiper: t,
    targetPosition: e,
    side: s
  }) {
    const i = D(), n = -t.translate;
    let r = null, l;
    const o = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
    const a = e > n ? "next" : "prev", u = (p, w) => a === "next" && p >= w || a === "prev" && p <= w, m = () => {
      l = (/* @__PURE__ */ new Date()).getTime(), r === null && (r = l);
      const p = Math.max(Math.min((l - r) / o, 1), 0), w = 0.5 - Math.cos(p * Math.PI) / 2;
      let d = n + w * (e - n);
      if (u(d, e) && (d = e), t.wrapperEl.scrollTo({
        [s]: d
      }), u(d, e)) {
        t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
            [s]: d
          });
        }), i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(m);
    };
    m();
  }
  function N(t, e = "") {
    const s = D(), i = [...t.children];
    return s.HTMLSlotElement && t instanceof HTMLSlotElement && i.push(...t.assignedElements()), e ? i.filter((n) => n.matches(e)) : i;
  }
  function lt(t, e) {
    const s = [e];
    for (; s.length > 0; ) {
      const i = s.shift();
      if (t === i)
        return !0;
      s.push(...i.children, ...i.shadowRoot ? i.shadowRoot.children : [], ...i.assignedElements ? i.assignedElements() : []);
    }
  }
  function ot(t, e) {
    const s = D();
    let i = e.contains(t);
    return !i && s.HTMLSlotElement && e instanceof HTMLSlotElement && (i = [...e.assignedElements()].includes(t), i || (i = lt(t, e))), i;
  }
  function ie(t) {
    try {
      console.warn(t);
      return;
    } catch {
    }
  }
  function ne(t, e = []) {
    const s = document.createElement(t);
    return s.classList.add(...Array.isArray(e) ? e : st(e)), s;
  }
  function ct(t, e) {
    const s = [];
    for (; t.previousElementSibling; ) {
      const i = t.previousElementSibling;
      e ? i.matches(e) && s.push(i) : s.push(i), t = i;
    }
    return s;
  }
  function dt(t, e) {
    const s = [];
    for (; t.nextElementSibling; ) {
      const i = t.nextElementSibling;
      e ? i.matches(e) && s.push(i) : s.push(i), t = i;
    }
    return s;
  }
  function Y(t, e) {
    return D().getComputedStyle(t, null).getPropertyValue(e);
  }
  function re(t) {
    let e = t, s;
    if (e) {
      for (s = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (s += 1);
      return s;
    }
  }
  function Le(t, e) {
    const s = [];
    let i = t.parentElement;
    for (; i; )
      e ? i.matches(e) && s.push(i) : s.push(i), i = i.parentElement;
    return s;
  }
  function fe(t, e, s) {
    const i = D();
    return t[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"));
  }
  function M(t) {
    return (Array.isArray(t) ? t : [t]).filter((e) => !!e);
  }
  function ge(t, e = "") {
    typeof trustedTypes < "u" ? t.innerHTML = trustedTypes.createPolicy("html", {
      createHTML: (s) => s
    }).createHTML(e) : t.innerHTML = e;
  }
  let he;
  function ut() {
    const t = D(), e = X();
    return {
      smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
      touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
    };
  }
  function Ie() {
    return he || (he = ut()), he;
  }
  let me;
  function pt({
    userAgent: t
  } = {}) {
    const e = Ie(), s = D(), i = s.navigator.platform, n = t || s.navigator.userAgent, r = {
      ios: !1,
      android: !1
    }, l = s.screen.width, o = s.screen.height, a = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = n.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
    const m = n.match(/(iPod)(.*OS\s([\d_]+))?/), p = !u && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), w = i === "Win32";
    let d = i === "MacIntel";
    const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !u && d && e.touch && g.indexOf(`${l}x${o}`) >= 0 && (u = n.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), d = !1), a && !w && (r.os = "android", r.android = !0), (u || p || m) && (r.os = "ios", r.ios = !0), r;
  }
  function ze(t = {}) {
    return me || (me = pt(t)), me;
  }
  let ve;
  function ft() {
    const t = D(), e = ze();
    let s = !1;
    function i() {
      const o = t.navigator.userAgent.toLowerCase();
      return o.indexOf("safari") >= 0 && o.indexOf("chrome") < 0 && o.indexOf("android") < 0;
    }
    if (i()) {
      const o = String(t.navigator.userAgent);
      if (o.includes("Version/")) {
        const [a, u] = o.split("Version/")[1].split(" ")[0].split(".").map((m) => Number(m));
        s = a < 16 || a === 16 && u < 2;
      }
    }
    const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent), r = i(), l = r || n && e.ios;
    return {
      isSafari: s || r,
      needPerspectiveFix: s,
      need3dFix: l,
      isWebView: n
    };
  }
  function Oe() {
    return ve || (ve = ft()), ve;
  }
  function gt({
    swiper: t,
    on: e,
    emit: s
  }) {
    const i = D();
    let n = null, r = null;
    const l = () => {
      !t || t.destroyed || !t.initialized || (s("beforeResize"), s("resize"));
    }, o = () => {
      !t || t.destroyed || !t.initialized || (n = new ResizeObserver((m) => {
        r = i.requestAnimationFrame(() => {
          const {
            width: p,
            height: w
          } = t;
          let d = p, g = w;
          m.forEach(({
            contentBoxSize: v,
            contentRect: T,
            target: c
          }) => {
            c && c !== t.el || (d = T ? T.width : (v[0] || v).inlineSize, g = T ? T.height : (v[0] || v).blockSize);
          }), (d !== p || g !== w) && l();
        });
      }), n.observe(t.el));
    }, a = () => {
      r && i.cancelAnimationFrame(r), n && n.unobserve && t.el && (n.unobserve(t.el), n = null);
    }, u = () => {
      !t || t.destroyed || !t.initialized || s("orientationchange");
    };
    e("init", () => {
      if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
        o();
        return;
      }
      i.addEventListener("resize", l), i.addEventListener("orientationchange", u);
    }), e("destroy", () => {
      a(), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", u);
    });
  }
  function ht({
    swiper: t,
    extendParams: e,
    on: s,
    emit: i
  }) {
    const n = [], r = D(), l = (u, m = {}) => {
      const p = r.MutationObserver || r.WebkitMutationObserver, w = new p((d) => {
        if (t.__preventObserver__) return;
        if (d.length === 1) {
          i("observerUpdate", d[0]);
          return;
        }
        const g = function() {
          i("observerUpdate", d[0]);
        };
        r.requestAnimationFrame ? r.requestAnimationFrame(g) : r.setTimeout(g, 0);
      });
      w.observe(u, {
        attributes: typeof m.attributes > "u" ? !0 : m.attributes,
        childList: t.isElement || (typeof m.childList > "u" ? !0 : m).childList,
        characterData: typeof m.characterData > "u" ? !0 : m.characterData
      }), n.push(w);
    }, o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const u = Le(t.hostEl);
          for (let m = 0; m < u.length; m += 1)
            l(u[m]);
        }
        l(t.hostEl, {
          childList: t.params.observeSlideChildren
        }), l(t.wrapperEl, {
          attributes: !1
        });
      }
    }, a = () => {
      n.forEach((u) => {
        u.disconnect();
      }), n.splice(0, n.length);
    };
    e({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), s("init", o), s("destroy", a);
  }
  var mt = {
    on(t, e, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      const n = s ? "unshift" : "push";
      return t.split(" ").forEach((r) => {
        i.eventsListeners[r] || (i.eventsListeners[r] = []), i.eventsListeners[r][n](e);
      }), i;
    },
    once(t, e, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      function n(...r) {
        i.off(t, n), n.__emitterProxy && delete n.__emitterProxy, e.apply(i, r);
      }
      return n.__emitterProxy = e, i.on(t, n, s);
    },
    onAny(t, e) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
      const i = e ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(t) < 0 && s.eventsAnyListeners[i](t), s;
    },
    offAny(t) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const s = e.eventsAnyListeners.indexOf(t);
      return s >= 0 && e.eventsAnyListeners.splice(s, 1), e;
    },
    off(t, e) {
      const s = this;
      return !s.eventsListeners || s.destroyed || !s.eventsListeners || t.split(" ").forEach((i) => {
        typeof e > "u" ? s.eventsListeners[i] = [] : s.eventsListeners[i] && s.eventsListeners[i].forEach((n, r) => {
          (n === e || n.__emitterProxy && n.__emitterProxy === e) && s.eventsListeners[i].splice(r, 1);
        });
      }), s;
    },
    emit(...t) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
      let s, i, n;
      return typeof t[0] == "string" || Array.isArray(t[0]) ? (s = t[0], i = t.slice(1, t.length), n = e) : (s = t[0].events, i = t[0].data, n = t[0].context || e), i.unshift(n), (Array.isArray(s) ? s : s.split(" ")).forEach((l) => {
        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((o) => {
          o.apply(n, [l, ...i]);
        }), e.eventsListeners && e.eventsListeners[l] && e.eventsListeners[l].forEach((o) => {
          o.apply(n, i);
        });
      }), e;
    }
  };
  function vt() {
    const t = this;
    let e, s;
    const i = t.el;
    typeof t.params.width < "u" && t.params.width !== null ? e = t.params.width : e = i.clientWidth, typeof t.params.height < "u" && t.params.height !== null ? s = t.params.height : s = i.clientHeight, !(e === 0 && t.isHorizontal() || s === 0 && t.isVertical()) && (e = e - parseInt(Y(i, "padding-left") || 0, 10) - parseInt(Y(i, "padding-right") || 0, 10), s = s - parseInt(Y(i, "padding-top") || 0, 10) - parseInt(Y(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(s) && (s = 0), Object.assign(t, {
      width: e,
      height: s,
      size: t.isHorizontal() ? e : s
    }));
  }
  function wt() {
    const t = this;
    function e(S, _) {
      return parseFloat(S.getPropertyValue(t.getDirectionLabel(_)) || 0);
    }
    const s = t.params, {
      wrapperEl: i,
      slidesEl: n,
      rtlTranslate: r,
      wrongRTL: l
    } = t, o = t.virtual && s.virtual.enabled, a = o ? t.virtual.slides.length : t.slides.length, u = N(n, `.${t.params.slideClass}, swiper-slide`), m = o ? t.virtual.slides.length : u.length;
    let p = [];
    const w = [], d = [];
    let g = s.slidesOffsetBefore;
    typeof g == "function" && (g = s.slidesOffsetBefore.call(t));
    let v = s.slidesOffsetAfter;
    typeof v == "function" && (v = s.slidesOffsetAfter.call(t));
    const T = t.snapGrid.length, c = t.slidesGrid.length, f = t.size - g - v;
    let h = s.spaceBetween, b = -g, x = 0, k = 0;
    if (typeof f > "u")
      return;
    typeof h == "string" && h.indexOf("%") >= 0 ? h = parseFloat(h.replace("%", "")) / 100 * f : typeof h == "string" && (h = parseFloat(h)), t.virtualSize = -h - g - v, u.forEach((S) => {
      r ? S.style.marginLeft = "" : S.style.marginRight = "", S.style.marginBottom = "", S.style.marginTop = "";
    }), s.centeredSlides && s.cssMode && (se(i, "--swiper-centered-offset-before", ""), se(i, "--swiper-centered-offset-after", ""));
    const C = s.grid && s.grid.rows > 1 && t.grid;
    C ? t.grid.initSlides(u) : t.grid && t.grid.unsetSlides();
    let y;
    const I = s.slidesPerView === "auto" && s.breakpoints && Object.keys(s.breakpoints).filter((S) => typeof s.breakpoints[S].slidesPerView < "u").length > 0;
    for (let S = 0; S < m; S += 1) {
      y = 0;
      const _ = u[S];
      if (!(_ && (C && t.grid.updateSlide(S, _, u), Y(_, "display") === "none"))) {
        if (o && s.slidesPerView === "auto")
          s.virtual.slidesPerViewAutoSlideSize && (y = s.virtual.slidesPerViewAutoSlideSize), y && _ && (s.roundLengths && (y = Math.floor(y)), _.style[t.getDirectionLabel("width")] = `${y}px`);
        else if (s.slidesPerView === "auto") {
          I && (_.style[t.getDirectionLabel("width")] = "");
          const E = getComputedStyle(_), L = _.style.transform, z = _.style.webkitTransform;
          if (L && (_.style.transform = "none"), z && (_.style.webkitTransform = "none"), s.roundLengths)
            y = t.isHorizontal() ? fe(_, "width") : fe(_, "height");
          else {
            const B = e(E, "width"), Ne = e(E, "padding-left"), U = e(E, "padding-right"), P = e(E, "margin-left"), A = e(E, "margin-right"), $ = E.getPropertyValue("box-sizing");
            if ($ && $ === "border-box")
              y = B + P + A;
            else {
              const {
                clientWidth: W,
                offsetWidth: Ts
              } = _;
              y = B + Ne + U + P + A + (Ts - W);
            }
          }
          L && (_.style.transform = L), z && (_.style.webkitTransform = z), s.roundLengths && (y = Math.floor(y));
        } else
          y = (f - (s.slidesPerView - 1) * h) / s.slidesPerView, s.roundLengths && (y = Math.floor(y)), _ && (_.style[t.getDirectionLabel("width")] = `${y}px`);
        _ && (_.swiperSlideSize = y), d.push(y), s.centeredSlides ? (b = b + y / 2 + x / 2 + h, x === 0 && S !== 0 && (b = b - f / 2 - h), S === 0 && (b = b - f / 2 - h), Math.abs(b) < 1 / 1e3 && (b = 0), s.roundLengths && (b = Math.floor(b)), k % s.slidesPerGroup === 0 && p.push(b), w.push(b)) : (s.roundLengths && (b = Math.floor(b)), (k - Math.min(t.params.slidesPerGroupSkip, k)) % t.params.slidesPerGroup === 0 && p.push(b), w.push(b), b = b + y + h), t.virtualSize += y + h, x = y, k += 1;
      }
    }
    if (t.virtualSize = Math.max(t.virtualSize, f) + v, r && l && (s.effect === "slide" || s.effect === "coverflow") && (i.style.width = `${t.virtualSize + h}px`), s.setWrapperSize && (i.style[t.getDirectionLabel("width")] = `${t.virtualSize + h}px`), C && t.grid.updateWrapperSize(y, p), !s.centeredSlides) {
      const S = [];
      for (let _ = 0; _ < p.length; _ += 1) {
        let E = p[_];
        s.roundLengths && (E = Math.floor(E)), p[_] <= t.virtualSize - f && S.push(E);
      }
      p = S, Math.floor(t.virtualSize - f) - Math.floor(p[p.length - 1]) > 1 && p.push(t.virtualSize - f);
    }
    if (o && s.loop) {
      const S = d[0] + h;
      if (s.slidesPerGroup > 1) {
        const _ = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup), E = S * s.slidesPerGroup;
        for (let L = 0; L < _; L += 1)
          p.push(p[p.length - 1] + E);
      }
      for (let _ = 0; _ < t.virtual.slidesBefore + t.virtual.slidesAfter; _ += 1)
        s.slidesPerGroup === 1 && p.push(p[p.length - 1] + S), w.push(w[w.length - 1] + S), t.virtualSize += S;
    }
    if (p.length === 0 && (p = [0]), h !== 0) {
      const S = t.isHorizontal() && r ? "marginLeft" : t.getDirectionLabel("marginRight");
      u.filter((_, E) => !s.cssMode || s.loop ? !0 : E !== u.length - 1).forEach((_) => {
        _.style[S] = `${h}px`;
      });
    }
    if (s.centeredSlides && s.centeredSlidesBounds) {
      let S = 0;
      d.forEach((E) => {
        S += E + (h || 0);
      }), S -= h;
      const _ = S > f ? S - f : 0;
      p = p.map((E) => E <= 0 ? -g : E > _ ? _ + v : E);
    }
    if (s.centerInsufficientSlides) {
      let S = 0;
      d.forEach((E) => {
        S += E + (h || 0);
      }), S -= h;
      const _ = (g || 0) + (v || 0);
      if (S + _ < f) {
        const E = (f - S - _) / 2;
        p.forEach((L, z) => {
          p[z] = L - E;
        }), w.forEach((L, z) => {
          w[z] = L + E;
        });
      }
    }
    if (Object.assign(t, {
      slides: u,
      snapGrid: p,
      slidesGrid: w,
      slidesSizesGrid: d
    }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
      se(i, "--swiper-centered-offset-before", `${-p[0]}px`), se(i, "--swiper-centered-offset-after", `${t.size / 2 - d[d.length - 1] / 2}px`);
      const S = -t.snapGrid[0], _ = -t.slidesGrid[0];
      t.snapGrid = t.snapGrid.map((E) => E + S), t.slidesGrid = t.slidesGrid.map((E) => E + _);
    }
    if (m !== a && t.emit("slidesLengthChange"), p.length !== T && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), w.length !== c && t.emit("slidesGridLengthChange"), s.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !o && !s.cssMode && (s.effect === "slide" || s.effect === "fade")) {
      const S = `${s.containerModifierClass}backface-hidden`, _ = t.el.classList.contains(S);
      m <= s.maxBackfaceHiddenSlides ? _ || t.el.classList.add(S) : _ && t.el.classList.remove(S);
    }
  }
  function bt(t) {
    const e = this, s = [], i = e.virtual && e.params.virtual.enabled;
    let n = 0, r;
    typeof t == "number" ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
    const l = (o) => i ? e.slides[e.getSlideIndexByData(o)] : e.slides[o];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((o) => {
          s.push(o);
        });
      else
        for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
          const o = e.activeIndex + r;
          if (o > e.slides.length && !i) break;
          s.push(l(o));
        }
    else
      s.push(l(e.activeIndex));
    for (r = 0; r < s.length; r += 1)
      if (typeof s[r] < "u") {
        const o = s[r].offsetHeight;
        n = o > n ? o : n;
      }
    (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
  }
  function yt() {
    const t = this, e = t.slides, s = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
    for (let i = 0; i < e.length; i += 1)
      e[i].swiperSlideOffset = (t.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - s - t.cssOverflowAdjustment();
  }
  const Me = (t, e, s) => {
    e && !t.classList.contains(s) ? t.classList.add(s) : !e && t.classList.contains(s) && t.classList.remove(s);
  };
  function xt(t = this && this.translate || 0) {
    const e = this, s = e.params, {
      slides: i,
      rtlTranslate: n,
      snapGrid: r
    } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let l = -t;
    n && (l = t), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let o = s.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : typeof o == "string" && (o = parseFloat(o));
    for (let a = 0; a < i.length; a += 1) {
      const u = i[a];
      let m = u.swiperSlideOffset;
      s.cssMode && s.centeredSlides && (m -= i[0].swiperSlideOffset);
      const p = (l + (s.centeredSlides ? e.minTranslate() : 0) - m) / (u.swiperSlideSize + o), w = (l - r[0] + (s.centeredSlides ? e.minTranslate() : 0) - m) / (u.swiperSlideSize + o), d = -(l - m), g = d + e.slidesSizesGrid[a], v = d >= 0 && d <= e.size - e.slidesSizesGrid[a], T = d >= 0 && d < e.size - 1 || g > 1 && g <= e.size || d <= 0 && g >= e.size;
      T && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(a)), Me(u, T, s.slideVisibleClass), Me(u, v, s.slideFullyVisibleClass), u.progress = n ? -p : p, u.originalProgress = n ? -w : w;
    }
  }
  function St(t) {
    const e = this;
    if (typeof t > "u") {
      const m = e.rtlTranslate ? -1 : 1;
      t = e && e.translate && e.translate * m || 0;
    }
    const s = e.params, i = e.maxTranslate() - e.minTranslate();
    let {
      progress: n,
      isBeginning: r,
      isEnd: l,
      progressLoop: o
    } = e;
    const a = r, u = l;
    if (i === 0)
      n = 0, r = !0, l = !0;
    else {
      n = (t - e.minTranslate()) / i;
      const m = Math.abs(t - e.minTranslate()) < 1, p = Math.abs(t - e.maxTranslate()) < 1;
      r = m || n <= 0, l = p || n >= 1, m && (n = 0), p && (n = 1);
    }
    if (s.loop) {
      const m = e.getSlideIndexByData(0), p = e.getSlideIndexByData(e.slides.length - 1), w = e.slidesGrid[m], d = e.slidesGrid[p], g = e.slidesGrid[e.slidesGrid.length - 1], v = Math.abs(t);
      v >= w ? o = (v - w) / g : o = (v + g - d) / g, o > 1 && (o -= 1);
    }
    Object.assign(e, {
      progress: n,
      progressLoop: o,
      isBeginning: r,
      isEnd: l
    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && e.updateSlidesProgress(t), r && !a && e.emit("reachBeginning toEdge"), l && !u && e.emit("reachEnd toEdge"), (a && !r || u && !l) && e.emit("fromEdge"), e.emit("progress", n);
  }
  const we = (t, e, s) => {
    e && !t.classList.contains(s) ? t.classList.add(s) : !e && t.classList.contains(s) && t.classList.remove(s);
  };
  function Tt() {
    const t = this, {
      slides: e,
      params: s,
      slidesEl: i,
      activeIndex: n
    } = t, r = t.virtual && s.virtual.enabled, l = t.grid && s.grid && s.grid.rows > 1, o = (p) => N(i, `.${s.slideClass}${p}, swiper-slide${p}`)[0];
    let a, u, m;
    if (r)
      if (s.loop) {
        let p = n - t.virtual.slidesBefore;
        p < 0 && (p = t.virtual.slides.length + p), p >= t.virtual.slides.length && (p -= t.virtual.slides.length), a = o(`[data-swiper-slide-index="${p}"]`);
      } else
        a = o(`[data-swiper-slide-index="${n}"]`);
    else
      l ? (a = e.find((p) => p.column === n), m = e.find((p) => p.column === n + 1), u = e.find((p) => p.column === n - 1)) : a = e[n];
    a && (l || (m = dt(a, `.${s.slideClass}, swiper-slide`)[0], s.loop && !m && (m = e[0]), u = ct(a, `.${s.slideClass}, swiper-slide`)[0], s.loop && !u === 0 && (u = e[e.length - 1]))), e.forEach((p) => {
      we(p, p === a, s.slideActiveClass), we(p, p === m, s.slideNextClass), we(p, p === u, s.slidePrevClass);
    }), t.emitSlidesClasses();
  }
  const ae = (t, e) => {
    if (!t || t.destroyed || !t.params) return;
    const s = () => t.isElement ? "swiper-slide" : `.${t.params.slideClass}`, i = e.closest(s());
    if (i) {
      let n = i.querySelector(`.${t.params.lazyPreloaderClass}`);
      !n && t.isElement && (i.shadowRoot ? n = i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        i.shadowRoot && (n = i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`), n && n.remove());
      })), n && n.remove();
    }
  }, be = (t, e) => {
    if (!t.slides[e]) return;
    const s = t.slides[e].querySelector('[loading="lazy"]');
    s && s.removeAttribute("loading");
  }, ye = (t) => {
    if (!t || t.destroyed || !t.params) return;
    let e = t.params.lazyPreloadPrevNext;
    const s = t.slides.length;
    if (!s || !e || e < 0) return;
    e = Math.min(e, s);
    const i = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView), n = t.activeIndex;
    if (t.params.grid && t.params.grid.rows > 1) {
      const l = n, o = [l - e];
      o.push(...Array.from({
        length: e
      }).map((a, u) => l + i + u)), t.slides.forEach((a, u) => {
        o.includes(a.column) && be(t, u);
      });
      return;
    }
    const r = n + i - 1;
    if (t.params.rewind || t.params.loop)
      for (let l = n - e; l <= r + e; l += 1) {
        const o = (l % s + s) % s;
        (o < n || o > r) && be(t, o);
      }
    else
      for (let l = Math.max(n - e, 0); l <= Math.min(r + e, s - 1); l += 1)
        l !== n && (l > r || l < n) && be(t, l);
  };
  function _t(t) {
    const {
      slidesGrid: e,
      params: s
    } = t, i = t.rtlTranslate ? t.translate : -t.translate;
    let n;
    for (let r = 0; r < e.length; r += 1)
      typeof e[r + 1] < "u" ? i >= e[r] && i < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : i >= e[r] && i < e[r + 1] && (n = r + 1) : i >= e[r] && (n = r);
    return s.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
  }
  function Et(t) {
    const e = this, s = e.rtlTranslate ? e.translate : -e.translate, {
      snapGrid: i,
      params: n,
      activeIndex: r,
      realIndex: l,
      snapIndex: o
    } = e;
    let a = t, u;
    const m = (d) => {
      let g = d - e.virtual.slidesBefore;
      return g < 0 && (g = e.virtual.slides.length + g), g >= e.virtual.slides.length && (g -= e.virtual.slides.length), g;
    };
    if (typeof a > "u" && (a = _t(e)), i.indexOf(s) >= 0)
      u = i.indexOf(s);
    else {
      const d = Math.min(n.slidesPerGroupSkip, a);
      u = d + Math.floor((a - d) / n.slidesPerGroup);
    }
    if (u >= i.length && (u = i.length - 1), a === r && !e.params.loop) {
      u !== o && (e.snapIndex = u, e.emit("snapIndexChange"));
      return;
    }
    if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = m(a);
      return;
    }
    const p = e.grid && n.grid && n.grid.rows > 1;
    let w;
    if (e.virtual && n.virtual.enabled && n.loop)
      w = m(a);
    else if (p) {
      const d = e.slides.find((v) => v.column === a);
      let g = parseInt(d.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(g) && (g = Math.max(e.slides.indexOf(d), 0)), w = Math.floor(g / n.grid.rows);
    } else if (e.slides[a]) {
      const d = e.slides[a].getAttribute("data-swiper-slide-index");
      d ? w = parseInt(d, 10) : w = a;
    } else
      w = a;
    Object.assign(e, {
      previousSnapIndex: o,
      snapIndex: u,
      previousRealIndex: l,
      realIndex: w,
      previousIndex: r,
      activeIndex: a
    }), e.initialized && ye(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (l !== w && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function Ct(t, e) {
    const s = this, i = s.params;
    let n = t.closest(`.${i.slideClass}, swiper-slide`);
    !n && s.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach((o) => {
      !n && o.matches && o.matches(`.${i.slideClass}, swiper-slide`) && (n = o);
    });
    let r = !1, l;
    if (n) {
      for (let o = 0; o < s.slides.length; o += 1)
        if (s.slides[o] === n) {
          r = !0, l = o;
          break;
        }
    }
    if (n && r)
      s.clickedSlide = n, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = l;
    else {
      s.clickedSlide = void 0, s.clickedIndex = void 0;
      return;
    }
    i.slideToClickedSlide && s.clickedIndex !== void 0 && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
  }
  var kt = {
    updateSize: vt,
    updateSlides: wt,
    updateAutoHeight: bt,
    updateSlidesOffset: yt,
    updateSlidesProgress: xt,
    updateProgress: St,
    updateSlidesClasses: Tt,
    updateActiveIndex: Et,
    updateClickedSlide: Ct
  };
  function Pt(t = this.isHorizontal() ? "x" : "y") {
    const e = this, {
      params: s,
      rtlTranslate: i,
      translate: n,
      wrapperEl: r
    } = e;
    if (s.virtualTranslate)
      return i ? -n : n;
    if (s.cssMode)
      return n;
    let l = rt(r, t);
    return l += e.cssOverflowAdjustment(), i && (l = -l), l || 0;
  }
  function Lt(t, e) {
    const s = this, {
      rtlTranslate: i,
      params: n,
      wrapperEl: r,
      progress: l
    } = s;
    let o = 0, a = 0;
    const u = 0;
    s.isHorizontal() ? o = i ? -t : t : a = t, n.roundLengths && (o = Math.floor(o), a = Math.floor(a)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : a, n.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -a : n.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : a -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${o}px, ${a}px, ${u}px)`);
    let m;
    const p = s.maxTranslate() - s.minTranslate();
    p === 0 ? m = 0 : m = (t - s.minTranslate()) / p, m !== l && s.updateProgress(t), s.emit("setTranslate", s.translate, e);
  }
  function It() {
    return -this.snapGrid[0];
  }
  function zt() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Ot(t = 0, e = this.params.speed, s = !0, i = !0, n) {
    const r = this, {
      params: l,
      wrapperEl: o
    } = r;
    if (r.animating && l.preventInteractionOnTransition)
      return !1;
    const a = r.minTranslate(), u = r.maxTranslate();
    let m;
    if (i && t > a ? m = a : i && t < u ? m = u : m = t, r.updateProgress(m), l.cssMode) {
      const p = r.isHorizontal();
      if (e === 0)
        o[p ? "scrollLeft" : "scrollTop"] = -m;
      else {
        if (!r.support.smoothScroll)
          return Pe({
            swiper: r,
            targetPosition: -m,
            side: p ? "left" : "top"
          }), !0;
        o.scrollTo({
          [p ? "left" : "top"]: -m,
          behavior: "smooth"
        });
      }
      return !0;
    }
    return e === 0 ? (r.setTransition(0), r.setTranslate(m), s && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(m), s && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(w) {
      !r || r.destroyed || w.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = !1, s && r.emit("transitionEnd"));
    }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0;
  }
  var Mt = {
    getTranslate: Pt,
    setTranslate: Lt,
    minTranslate: It,
    maxTranslate: zt,
    translateTo: Ot
  };
  function At(t, e) {
    const s = this;
    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${t}ms`, s.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : ""), s.emit("setTransition", t, e);
  }
  function Ae({
    swiper: t,
    runCallbacks: e,
    direction: s,
    step: i
  }) {
    const {
      activeIndex: n,
      previousIndex: r
    } = t;
    let l = s;
    l || (n > r ? l = "next" : n < r ? l = "prev" : l = "reset"), t.emit(`transition${i}`), e && l === "reset" ? t.emit(`slideResetTransition${i}`) : e && n !== r && (t.emit(`slideChangeTransition${i}`), l === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`));
  }
  function Bt(t = !0, e) {
    const s = this, {
      params: i
    } = s;
    i.cssMode || (i.autoHeight && s.updateAutoHeight(), Ae({
      swiper: s,
      runCallbacks: t,
      direction: e,
      step: "Start"
    }));
  }
  function Dt(t = !0, e) {
    const s = this, {
      params: i
    } = s;
    s.animating = !1, !i.cssMode && (s.setTransition(0), Ae({
      swiper: s,
      runCallbacks: t,
      direction: e,
      step: "End"
    }));
  }
  var $t = {
    setTransition: At,
    transitionStart: Bt,
    transitionEnd: Dt
  };
  function qt(t = 0, e, s = !0, i, n) {
    typeof t == "string" && (t = parseInt(t, 10));
    const r = this;
    let l = t;
    l < 0 && (l = 0);
    const {
      params: o,
      snapGrid: a,
      slidesGrid: u,
      previousIndex: m,
      activeIndex: p,
      rtlTranslate: w,
      wrapperEl: d,
      enabled: g
    } = r;
    if (!g && !i && !n || r.destroyed || r.animating && o.preventInteractionOnTransition)
      return !1;
    typeof e > "u" && (e = r.params.speed);
    const v = Math.min(r.params.slidesPerGroupSkip, l);
    let T = v + Math.floor((l - v) / r.params.slidesPerGroup);
    T >= a.length && (T = a.length - 1);
    const c = -a[T];
    if (o.normalizeSlideIndex)
      for (let C = 0; C < u.length; C += 1) {
        const y = -Math.floor(c * 100), I = Math.floor(u[C] * 100), S = Math.floor(u[C + 1] * 100);
        typeof u[C + 1] < "u" ? y >= I && y < S - (S - I) / 2 ? l = C : y >= I && y < S && (l = C + 1) : y >= I && (l = C);
      }
    if (r.initialized && l !== p && (!r.allowSlideNext && (w ? c > r.translate && c > r.minTranslate() : c < r.translate && c < r.minTranslate()) || !r.allowSlidePrev && c > r.translate && c > r.maxTranslate() && (p || 0) !== l))
      return !1;
    l !== (m || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(c);
    let f;
    l > p ? f = "next" : l < p ? f = "prev" : f = "reset";
    const h = r.virtual && r.params.virtual.enabled;
    if (!(h && n) && (w && -c === r.translate || !w && c === r.translate))
      return r.updateActiveIndex(l), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), o.effect !== "slide" && r.setTranslate(c), f !== "reset" && (r.transitionStart(s, f), r.transitionEnd(s, f)), !1;
    if (o.cssMode) {
      const C = r.isHorizontal(), y = w ? c : -c;
      if (e === 0)
        h && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
          d[C ? "scrollLeft" : "scrollTop"] = y;
        })) : d[C ? "scrollLeft" : "scrollTop"] = y, h && requestAnimationFrame(() => {
          r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1;
        });
      else {
        if (!r.support.smoothScroll)
          return Pe({
            swiper: r,
            targetPosition: y,
            side: C ? "left" : "top"
          }), !0;
        d.scrollTo({
          [C ? "left" : "top"]: y,
          behavior: "smooth"
        });
      }
      return !0;
    }
    const k = Oe().isSafari;
    return h && !n && k && r.isElement && r.virtual.update(!1, !1, l), r.setTransition(e), r.setTranslate(c), r.updateActiveIndex(l), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, i), r.transitionStart(s, f), e === 0 ? r.transitionEnd(s, f) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(y) {
      !r || r.destroyed || y.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, f));
    }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0;
  }
  function Gt(t = 0, e, s = !0, i) {
    typeof t == "string" && (t = parseInt(t, 10));
    const n = this;
    if (n.destroyed) return;
    typeof e > "u" && (e = n.params.speed);
    const r = n.grid && n.params.grid && n.params.grid.rows > 1;
    let l = t;
    if (n.params.loop)
      if (n.virtual && n.params.virtual.enabled)
        l = l + n.virtual.slidesBefore;
      else {
        let o;
        if (r) {
          const v = l * n.params.grid.rows;
          o = n.slides.find((T) => T.getAttribute("data-swiper-slide-index") * 1 === v).column;
        } else
          o = n.getSlideIndexByData(l);
        const a = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, {
          centeredSlides: u,
          slidesOffsetBefore: m,
          slidesOffsetAfter: p
        } = n.params, w = u || !!m || !!p;
        let d = n.params.slidesPerView;
        d === "auto" ? d = n.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(n.params.slidesPerView, 10)), w && d % 2 === 0 && (d = d + 1));
        let g = a - o < d;
        if (w && (g = g || o < Math.ceil(d / 2)), i && w && n.params.slidesPerView !== "auto" && !r && (g = !1), g) {
          const v = w ? o < n.activeIndex ? "prev" : "next" : o - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
          n.loopFix({
            direction: v,
            slideTo: !0,
            activeSlideIndex: v === "next" ? o + 1 : o - a + 1,
            slideRealIndex: v === "next" ? n.realIndex : void 0
          });
        }
        if (r) {
          const v = l * n.params.grid.rows;
          l = n.slides.find((T) => T.getAttribute("data-swiper-slide-index") * 1 === v).column;
        } else
          l = n.getSlideIndexByData(l);
      }
    return requestAnimationFrame(() => {
      n.slideTo(l, e, s, i);
    }), n;
  }
  function Ht(t, e = !0, s) {
    const i = this, {
      enabled: n,
      params: r,
      animating: l
    } = i;
    if (!n || i.destroyed) return i;
    typeof t > "u" && (t = i.params.speed);
    let o = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const a = i.activeIndex < r.slidesPerGroupSkip ? 1 : o, u = i.virtual && r.virtual.enabled;
    if (r.loop) {
      if (l && !u && r.loopPreventsSliding) return !1;
      if (i.loopFix({
        direction: "next"
      }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && r.cssMode)
        return requestAnimationFrame(() => {
          i.slideTo(i.activeIndex + a, t, e, s);
        }), !0;
    }
    return r.rewind && i.isEnd ? i.slideTo(0, t, e, s) : i.slideTo(i.activeIndex + a, t, e, s);
  }
  function Vt(t, e = !0, s) {
    const i = this, {
      params: n,
      snapGrid: r,
      slidesGrid: l,
      rtlTranslate: o,
      enabled: a,
      animating: u
    } = i;
    if (!a || i.destroyed) return i;
    typeof t > "u" && (t = i.params.speed);
    const m = i.virtual && n.virtual.enabled;
    if (n.loop) {
      if (u && !m && n.loopPreventsSliding) return !1;
      i.loopFix({
        direction: "prev"
      }), i._clientLeft = i.wrapperEl.clientLeft;
    }
    const p = o ? i.translate : -i.translate;
    function w(f) {
      return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f);
    }
    const d = w(p), g = r.map((f) => w(f)), v = n.freeMode && n.freeMode.enabled;
    let T = r[g.indexOf(d) - 1];
    if (typeof T > "u" && (n.cssMode || v)) {
      let f;
      r.forEach((h, b) => {
        d >= h && (f = b);
      }), typeof f < "u" && (T = v ? r[f] : r[f > 0 ? f - 1 : f]);
    }
    let c = 0;
    if (typeof T < "u" && (c = l.indexOf(T), c < 0 && (c = i.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (c = c - i.slidesPerViewDynamic("previous", !0) + 1, c = Math.max(c, 0))), n.rewind && i.isBeginning) {
      const f = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
      return i.slideTo(f, t, e, s);
    } else if (n.loop && i.activeIndex === 0 && n.cssMode)
      return requestAnimationFrame(() => {
        i.slideTo(c, t, e, s);
      }), !0;
    return i.slideTo(c, t, e, s);
  }
  function Nt(t, e = !0, s) {
    const i = this;
    if (!i.destroyed)
      return typeof t > "u" && (t = i.params.speed), i.slideTo(i.activeIndex, t, e, s);
  }
  function Rt(t, e = !0, s, i = 0.5) {
    const n = this;
    if (n.destroyed) return;
    typeof t > "u" && (t = n.params.speed);
    let r = n.activeIndex;
    const l = Math.min(n.params.slidesPerGroupSkip, r), o = l + Math.floor((r - l) / n.params.slidesPerGroup), a = n.rtlTranslate ? n.translate : -n.translate;
    if (a >= n.snapGrid[o]) {
      const u = n.snapGrid[o], m = n.snapGrid[o + 1];
      a - u > (m - u) * i && (r += n.params.slidesPerGroup);
    } else {
      const u = n.snapGrid[o - 1], m = n.snapGrid[o];
      a - u <= (m - u) * i && (r -= n.params.slidesPerGroup);
    }
    return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, t, e, s);
  }
  function jt() {
    const t = this;
    if (t.destroyed) return;
    const {
      params: e,
      slidesEl: s
    } = t, i = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
    let n = t.getSlideIndexWhenGrid(t.clickedIndex), r;
    const l = t.isElement ? "swiper-slide" : `.${e.slideClass}`, o = t.grid && t.params.grid && t.params.grid.rows > 1;
    if (e.loop) {
      if (t.animating) return;
      r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? t.slideToLoop(r) : n > (o ? (t.slides.length - i) / 2 - (t.params.grid.rows - 1) : t.slides.length - i) ? (t.loopFix(), n = t.getSlideIndex(N(s, `${l}[data-swiper-slide-index="${r}"]`)[0]), ke(() => {
        t.slideTo(n);
      })) : t.slideTo(n);
    } else
      t.slideTo(n);
  }
  var Ft = {
    slideTo: qt,
    slideToLoop: Gt,
    slideNext: Ht,
    slidePrev: Vt,
    slideReset: Nt,
    slideToClosest: Rt,
    slideToClickedSlide: jt
  };
  function Yt(t, e) {
    const s = this, {
      params: i,
      slidesEl: n
    } = s;
    if (!i.loop || s.virtual && s.params.virtual.enabled) return;
    const r = () => {
      N(n, `.${i.slideClass}, swiper-slide`).forEach((g, v) => {
        g.setAttribute("data-swiper-slide-index", v);
      });
    }, l = () => {
      const d = N(n, `.${i.slideBlankClass}`);
      d.forEach((g) => {
        g.remove();
      }), d.length > 0 && (s.recalcSlides(), s.updateSlides());
    }, o = s.grid && i.grid && i.grid.rows > 1;
    i.loopAddBlankSlides && (i.slidesPerGroup > 1 || o) && l();
    const a = i.slidesPerGroup * (o ? i.grid.rows : 1), u = s.slides.length % a !== 0, m = o && s.slides.length % i.grid.rows !== 0, p = (d) => {
      for (let g = 0; g < d; g += 1) {
        const v = s.isElement ? ne("swiper-slide", [i.slideBlankClass]) : ne("div", [i.slideClass, i.slideBlankClass]);
        s.slidesEl.append(v);
      }
    };
    if (u) {
      if (i.loopAddBlankSlides) {
        const d = a - s.slides.length % a;
        p(d), s.recalcSlides(), s.updateSlides();
      } else
        ie("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      r();
    } else if (m) {
      if (i.loopAddBlankSlides) {
        const d = i.grid.rows - s.slides.length % i.grid.rows;
        p(d), s.recalcSlides(), s.updateSlides();
      } else
        ie("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      r();
    } else
      r();
    const w = i.centeredSlides || !!i.slidesOffsetBefore || !!i.slidesOffsetAfter;
    s.loopFix({
      slideRealIndex: t,
      direction: w ? void 0 : "next",
      initial: e
    });
  }
  function Wt({
    slideRealIndex: t,
    slideTo: e = !0,
    direction: s,
    setTranslate: i,
    activeSlideIndex: n,
    initial: r,
    byController: l,
    byMousewheel: o
  } = {}) {
    const a = this;
    if (!a.params.loop) return;
    a.emit("beforeLoopFix");
    const {
      slides: u,
      allowSlidePrev: m,
      allowSlideNext: p,
      slidesEl: w,
      params: d
    } = a, {
      centeredSlides: g,
      slidesOffsetBefore: v,
      slidesOffsetAfter: T,
      initialSlide: c
    } = d, f = g || !!v || !!T;
    if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && d.virtual.enabled) {
      e && (!f && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : f && a.snapIndex < d.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = m, a.allowSlideNext = p, a.emit("loopFix");
      return;
    }
    let h = d.slidesPerView;
    h === "auto" ? h = a.slidesPerViewDynamic() : (h = Math.ceil(parseFloat(d.slidesPerView, 10)), f && h % 2 === 0 && (h = h + 1));
    const b = d.slidesPerGroupAuto ? h : d.slidesPerGroup;
    let x = f ? Math.max(b, Math.ceil(h / 2)) : b;
    x % b !== 0 && (x += b - x % b), x += d.loopAdditionalSlides, a.loopedSlides = x;
    const k = a.grid && d.grid && d.grid.rows > 1;
    u.length < h + x || a.params.effect === "cards" && u.length < h + x * 2 ? ie("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : k && d.grid.fill === "row" && ie("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const C = [], y = [], I = k ? Math.ceil(u.length / d.grid.rows) : u.length, S = r && I - c < h && !f;
    let _ = S ? c : a.activeIndex;
    typeof n > "u" ? n = a.getSlideIndex(u.find((P) => P.classList.contains(d.slideActiveClass))) : _ = n;
    const E = s === "next" || !s, L = s === "prev" || !s;
    let z = 0, B = 0;
    const U = (k ? u[n].column : n) + (f && typeof i > "u" ? -h / 2 + 0.5 : 0);
    if (U < x) {
      z = Math.max(x - U, b);
      for (let P = 0; P < x - U; P += 1) {
        const A = P - Math.floor(P / I) * I;
        if (k) {
          const $ = I - A - 1;
          for (let W = u.length - 1; W >= 0; W -= 1)
            u[W].column === $ && C.push(W);
        } else
          C.push(I - A - 1);
      }
    } else if (U + h > I - x) {
      B = Math.max(U - (I - x * 2), b), S && (B = Math.max(B, h - I + c + 1));
      for (let P = 0; P < B; P += 1) {
        const A = P - Math.floor(P / I) * I;
        k ? u.forEach(($, W) => {
          $.column === A && y.push(W);
        }) : y.push(A);
      }
    }
    if (a.__preventObserver__ = !0, requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }), a.params.effect === "cards" && u.length < h + x * 2 && (y.includes(n) && y.splice(y.indexOf(n), 1), C.includes(n) && C.splice(C.indexOf(n), 1)), L && C.forEach((P) => {
      u[P].swiperLoopMoveDOM = !0, w.prepend(u[P]), u[P].swiperLoopMoveDOM = !1;
    }), E && y.forEach((P) => {
      u[P].swiperLoopMoveDOM = !0, w.append(u[P]), u[P].swiperLoopMoveDOM = !1;
    }), a.recalcSlides(), d.slidesPerView === "auto" ? a.updateSlides() : k && (C.length > 0 && L || y.length > 0 && E) && a.slides.forEach((P, A) => {
      a.grid.updateSlide(A, P, a.slides);
    }), d.watchSlidesProgress && a.updateSlidesOffset(), e) {
      if (C.length > 0 && L) {
        if (typeof t > "u") {
          const P = a.slidesGrid[_], $ = a.slidesGrid[_ + z] - P;
          o ? a.setTranslate(a.translate - $) : (a.slideTo(_ + Math.ceil(z), 0, !1, !0), i && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - $, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - $));
        } else if (i) {
          const P = k ? C.length / d.grid.rows : C.length;
          a.slideTo(a.activeIndex + P, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate;
        }
      } else if (y.length > 0 && E)
        if (typeof t > "u") {
          const P = a.slidesGrid[_], $ = a.slidesGrid[_ - B] - P;
          o ? a.setTranslate(a.translate - $) : (a.slideTo(_ - B, 0, !1, !0), i && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - $, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - $));
        } else {
          const P = k ? y.length / d.grid.rows : y.length;
          a.slideTo(a.activeIndex - P, 0, !1, !0);
        }
    }
    if (a.allowSlidePrev = m, a.allowSlideNext = p, a.controller && a.controller.control && !l) {
      const P = {
        slideRealIndex: t,
        direction: s,
        setTranslate: i,
        activeSlideIndex: n,
        byController: !0
      };
      Array.isArray(a.controller.control) ? a.controller.control.forEach((A) => {
        !A.destroyed && A.params.loop && A.loopFix({
          ...P,
          slideTo: A.params.slidesPerView === d.slidesPerView ? e : !1
        });
      }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
        ...P,
        slideTo: a.controller.control.params.slidesPerView === d.slidesPerView ? e : !1
      });
    }
    a.emit("loopFix");
  }
  function Xt() {
    const t = this, {
      params: e,
      slidesEl: s
    } = t;
    if (!e.loop || !s || t.virtual && t.params.virtual.enabled) return;
    t.recalcSlides();
    const i = [];
    t.slides.forEach((n) => {
      const r = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
      i[r] = n;
    }), t.slides.forEach((n) => {
      n.removeAttribute("data-swiper-slide-index");
    }), i.forEach((n) => {
      s.append(n);
    }), t.recalcSlides(), t.slideTo(t.realIndex, 0);
  }
  var Ut = {
    loopCreate: Yt,
    loopFix: Wt,
    loopDestroy: Xt
  };
  function Kt(t) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
    const s = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
      e.__preventObserver__ = !1;
    });
  }
  function Jt() {
    const t = this;
    t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame(() => {
      t.__preventObserver__ = !1;
    }));
  }
  var Zt = {
    setGrabCursor: Kt,
    unsetGrabCursor: Jt
  };
  function Qt(t, e = this) {
    function s(i) {
      if (!i || i === X() || i === D()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const n = i.closest(t);
      return !n && !i.getRootNode ? null : n || s(i.getRootNode().host);
    }
    return s(e);
  }
  function Be(t, e, s) {
    const i = D(), {
      params: n
    } = t, r = n.edgeSwipeDetection, l = n.edgeSwipeThreshold;
    return r && (s <= l || s >= i.innerWidth - l) ? r === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
  }
  function es(t) {
    const e = this, s = X();
    let i = t;
    i.originalEvent && (i = i.originalEvent);
    const n = e.touchEventsData;
    if (i.type === "pointerdown") {
      if (n.pointerId !== null && n.pointerId !== i.pointerId)
        return;
      n.pointerId = i.pointerId;
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (n.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
      Be(e, i, i.targetTouches[0].pageX);
      return;
    }
    const {
      params: r,
      touches: l,
      enabled: o
    } = e;
    if (!o || !r.simulateTouch && i.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition)
      return;
    !e.animating && r.cssMode && r.loop && e.loopFix();
    let a = i.target;
    if (r.touchEventsTarget === "wrapper" && !ot(a, e.wrapperEl) || "which" in i && i.which === 3 || "button" in i && i.button > 0 || n.isTouched && n.isMoved) return;
    const u = !!r.noSwipingClass && r.noSwipingClass !== "", m = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && m && (a = m[0]);
    const p = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`, w = !!(i.target && i.target.shadowRoot);
    if (r.noSwiping && (w ? Qt(p, a) : a.closest(p))) {
      e.allowClick = !0;
      return;
    }
    if (r.swipeHandler && !a.closest(r.swipeHandler))
      return;
    l.currentX = i.pageX, l.currentY = i.pageY;
    const d = l.currentX, g = l.currentY;
    if (!Be(e, i, d))
      return;
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), l.startX = d, l.startY = g, n.touchStartTime = ee(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1);
    let v = !0;
    a.matches(n.focusableElements) && (v = !1, a.nodeName === "SELECT" && (n.isTouched = !1)), s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== a && (i.pointerType === "mouse" || i.pointerType !== "mouse" && !a.matches(n.focusableElements)) && s.activeElement.blur();
    const T = v && e.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || T) && !a.isContentEditable && i.preventDefault(), r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", i);
  }
  function ts(t) {
    const e = X(), s = this, i = s.touchEventsData, {
      params: n,
      touches: r,
      rtlTranslate: l,
      enabled: o
    } = s;
    if (!o || !n.simulateTouch && t.pointerType === "mouse") return;
    let a = t;
    if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (i.touchId !== null || a.pointerId !== i.pointerId))
      return;
    let u;
    if (a.type === "touchmove") {
      if (u = [...a.changedTouches].find((x) => x.identifier === i.touchId), !u || u.identifier !== i.touchId) return;
    } else
      u = a;
    if (!i.isTouched) {
      i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", a);
      return;
    }
    const m = u.pageX, p = u.pageY;
    if (a.preventedByNestedSwiper) {
      r.startX = m, r.startY = p;
      return;
    }
    if (!s.allowTouchMove) {
      a.target.matches(i.focusableElements) || (s.allowClick = !1), i.isTouched && (Object.assign(r, {
        startX: m,
        startY: p,
        currentX: m,
        currentY: p
      }), i.touchStartTime = ee());
      return;
    }
    if (n.touchReleaseOnEdges && !n.loop)
      if (s.isVertical()) {
        if (p < r.startY && s.translate <= s.maxTranslate() || p > r.startY && s.translate >= s.minTranslate()) {
          i.isTouched = !1, i.isMoved = !1;
          return;
        }
      } else {
        if (l && (m > r.startX && -s.translate <= s.maxTranslate() || m < r.startX && -s.translate >= s.minTranslate()))
          return;
        if (!l && (m < r.startX && s.translate <= s.maxTranslate() || m > r.startX && s.translate >= s.minTranslate()))
          return;
      }
    if (e.activeElement && e.activeElement.matches(i.focusableElements) && e.activeElement !== a.target && a.pointerType !== "mouse" && e.activeElement.blur(), e.activeElement && a.target === e.activeElement && a.target.matches(i.focusableElements)) {
      i.isMoved = !0, s.allowClick = !1;
      return;
    }
    i.allowTouchCallbacks && s.emit("touchMove", a), r.previousX = r.currentX, r.previousY = r.currentY, r.currentX = m, r.currentY = p;
    const w = r.currentX - r.startX, d = r.currentY - r.startY;
    if (s.params.threshold && Math.sqrt(w ** 2 + d ** 2) < s.params.threshold) return;
    if (typeof i.isScrolling > "u") {
      let x;
      s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : w * w + d * d >= 25 && (x = Math.atan2(Math.abs(d), Math.abs(w)) * 180 / Math.PI, i.isScrolling = s.isHorizontal() ? x > n.touchAngle : 90 - x > n.touchAngle);
    }
    if (i.isScrolling && s.emit("touchMoveOpposite", a), typeof i.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (i.startMoving = !0), i.isScrolling || a.type === "touchmove" && i.preventTouchMoveFromPointerMove) {
      i.isTouched = !1;
      return;
    }
    if (!i.startMoving)
      return;
    s.allowClick = !1, !n.cssMode && a.cancelable && a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
    let g = s.isHorizontal() ? w : d, v = s.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    n.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), r.diff = g, g *= n.touchRatio, l && (g = -g, v = -v);
    const T = s.touchesDirection;
    s.swipeDirection = g > 0 ? "prev" : "next", s.touchesDirection = v > 0 ? "prev" : "next";
    const c = s.params.loop && !n.cssMode, f = s.touchesDirection === "next" && s.allowSlideNext || s.touchesDirection === "prev" && s.allowSlidePrev;
    if (!i.isMoved) {
      if (c && f && s.loopFix({
        direction: s.swipeDirection
      }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
        const x = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: {
            bySwiperTouchMove: !0
          }
        });
        s.wrapperEl.dispatchEvent(x);
      }
      i.allowMomentumBounce = !1, n.grabCursor && (s.allowSlideNext === !0 || s.allowSlidePrev === !0) && s.setGrabCursor(!0), s.emit("sliderFirstMove", a);
    }
    if ((/* @__PURE__ */ new Date()).getTime(), n._loopSwapReset !== !1 && i.isMoved && i.allowThresholdMove && T !== s.touchesDirection && c && f && Math.abs(g) >= 1) {
      Object.assign(r, {
        startX: m,
        startY: p,
        currentX: m,
        currentY: p,
        startTranslate: i.currentTranslate
      }), i.loopSwapReset = !0, i.startTranslate = i.currentTranslate;
      return;
    }
    s.emit("sliderMove", a), i.isMoved = !0, i.currentTranslate = g + i.startTranslate;
    let h = !0, b = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (b = 0), g > 0 ? (c && f && i.allowThresholdMove && i.currentTranslate > (n.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - (n.slidesPerView !== "auto" && s.slides.length - n.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), i.currentTranslate > s.minTranslate() && (h = !1, n.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** b))) : g < 0 && (c && f && i.allowThresholdMove && i.currentTranslate < (n.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + (n.slidesPerView !== "auto" && s.slides.length - n.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: s.slides.length - (n.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
    }), i.currentTranslate < s.maxTranslate() && (h = !1, n.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** b))), h && (a.preventedByNestedSwiper = !0), !s.allowSlideNext && s.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && s.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && !s.allowSlideNext && (i.currentTranslate = i.startTranslate), n.threshold > 0)
      if (Math.abs(g) > n.threshold || i.allowThresholdMove) {
        if (!i.allowThresholdMove) {
          i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
          return;
        }
      } else {
        i.currentTranslate = i.startTranslate;
        return;
      }
    !n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && s.freeMode || n.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
  }
  function ss(t) {
    const e = this, s = e.touchEventsData;
    let i = t;
    i.originalEvent && (i = i.originalEvent);
    let n;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (n = [...i.changedTouches].find((x) => x.identifier === s.touchId), !n || n.identifier !== s.touchId) return;
    } else {
      if (s.touchId !== null || i.pointerId !== s.pointerId) return;
      n = i;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView)))
      return;
    s.pointerId = null, s.touchId = null;
    const {
      params: l,
      touches: o,
      rtlTranslate: a,
      slidesGrid: u,
      enabled: m
    } = e;
    if (!m || !l.simulateTouch && i.pointerType === "mouse") return;
    if (s.allowTouchCallbacks && e.emit("touchEnd", i), s.allowTouchCallbacks = !1, !s.isTouched) {
      s.isMoved && l.grabCursor && e.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
      return;
    }
    l.grabCursor && s.isMoved && s.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const p = ee(), w = p - s.touchStartTime;
    if (e.allowClick) {
      const x = i.path || i.composedPath && i.composedPath();
      e.updateClickedSlide(x && x[0] || i.target, x), e.emit("tap click", i), w < 300 && p - s.lastClickTime < 300 && e.emit("doubleTap doubleClick", i);
    }
    if (s.lastClickTime = ee(), ke(() => {
      e.destroyed || (e.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !e.swipeDirection || o.diff === 0 && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) {
      s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
      return;
    }
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    let d;
    if (l.followFinger ? d = a ? e.translate : -e.translate : d = -s.currentTranslate, l.cssMode)
      return;
    if (l.freeMode && l.freeMode.enabled) {
      e.freeMode.onTouchEnd({
        currentPos: d
      });
      return;
    }
    const g = d >= -e.maxTranslate() && !e.params.loop;
    let v = 0, T = e.slidesSizesGrid[0];
    for (let x = 0; x < u.length; x += x < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
      const k = x < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
      typeof u[x + k] < "u" ? (g || d >= u[x] && d < u[x + k]) && (v = x, T = u[x + k] - u[x]) : (g || d >= u[x]) && (v = x, T = u[u.length - 1] - u[u.length - 2]);
    }
    let c = null, f = null;
    l.rewind && (e.isBeginning ? f = l.virtual && l.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (c = 0));
    const h = (d - u[v]) / T, b = v < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    if (w > l.longSwipesMs) {
      if (!l.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" && (h >= l.longSwipesRatio ? e.slideTo(l.rewind && e.isEnd ? c : v + b) : e.slideTo(v)), e.swipeDirection === "prev" && (h > 1 - l.longSwipesRatio ? e.slideTo(v + b) : f !== null && h < 0 && Math.abs(h) > l.longSwipesRatio ? e.slideTo(f) : e.slideTo(v));
    } else {
      if (!l.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(v + b) : e.slideTo(v) : (e.swipeDirection === "next" && e.slideTo(c !== null ? c : v + b), e.swipeDirection === "prev" && e.slideTo(f !== null ? f : v));
    }
  }
  function De() {
    const t = this, {
      params: e,
      el: s
    } = t;
    if (s && s.offsetWidth === 0) return;
    e.breakpoints && t.setBreakpoint();
    const {
      allowSlideNext: i,
      allowSlidePrev: n,
      snapGrid: r
    } = t, l = t.virtual && t.params.virtual.enabled;
    t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
    const o = l && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !o ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.params.loop && !l ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout(() => {
      t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume();
    }, 500)), t.allowSlidePrev = n, t.allowSlideNext = i, t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow();
  }
  function is(t) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())));
  }
  function ns() {
    const t = this, {
      wrapperEl: e,
      rtlTranslate: s,
      enabled: i
    } = t;
    if (!i) return;
    t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, t.translate === 0 && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
    let n;
    const r = t.maxTranslate() - t.minTranslate();
    r === 0 ? n = 0 : n = (t.translate - t.minTranslate()) / r, n !== t.progress && t.updateProgress(s ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1);
  }
  function rs(t) {
    const e = this;
    ae(e, t.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
  }
  function as() {
    const t = this;
    t.documentTouchHandlerProceeded || (t.documentTouchHandlerProceeded = !0, t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"));
  }
  const $e = (t, e) => {
    const s = X(), {
      params: i,
      el: n,
      wrapperEl: r,
      device: l
    } = t, o = !!i.nested, a = e === "on" ? "addEventListener" : "removeEventListener", u = e;
    !n || typeof n == "string" || (s[a]("touchstart", t.onDocumentTouchStart, {
      passive: !1,
      capture: o
    }), n[a]("touchstart", t.onTouchStart, {
      passive: !1
    }), n[a]("pointerdown", t.onTouchStart, {
      passive: !1
    }), s[a]("touchmove", t.onTouchMove, {
      passive: !1,
      capture: o
    }), s[a]("pointermove", t.onTouchMove, {
      passive: !1,
      capture: o
    }), s[a]("touchend", t.onTouchEnd, {
      passive: !0
    }), s[a]("pointerup", t.onTouchEnd, {
      passive: !0
    }), s[a]("pointercancel", t.onTouchEnd, {
      passive: !0
    }), s[a]("touchcancel", t.onTouchEnd, {
      passive: !0
    }), s[a]("pointerout", t.onTouchEnd, {
      passive: !0
    }), s[a]("pointerleave", t.onTouchEnd, {
      passive: !0
    }), s[a]("contextmenu", t.onTouchEnd, {
      passive: !0
    }), (i.preventClicks || i.preventClicksPropagation) && n[a]("click", t.onClick, !0), i.cssMode && r[a]("scroll", t.onScroll), i.updateOnWindowResize ? t[u](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", De, !0) : t[u]("observerUpdate", De, !0), n[a]("load", t.onLoad, {
      capture: !0
    }));
  };
  function ls() {
    const t = this, {
      params: e
    } = t;
    t.onTouchStart = es.bind(t), t.onTouchMove = ts.bind(t), t.onTouchEnd = ss.bind(t), t.onDocumentTouchStart = as.bind(t), e.cssMode && (t.onScroll = ns.bind(t)), t.onClick = is.bind(t), t.onLoad = rs.bind(t), $e(t, "on");
  }
  function os() {
    $e(this, "off");
  }
  var cs = {
    attachEvents: ls,
    detachEvents: os
  };
  const qe = (t, e) => t.grid && e.grid && e.grid.rows > 1;
  function ds() {
    const t = this, {
      realIndex: e,
      initialized: s,
      params: i,
      el: n
    } = t, r = i.breakpoints;
    if (!r || r && Object.keys(r).length === 0) return;
    const l = X(), o = i.breakpointsBase === "window" || !i.breakpointsBase ? i.breakpointsBase : "container", a = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? t.el : l.querySelector(i.breakpointsBase), u = t.getBreakpoint(r, o, a);
    if (!u || t.currentBreakpoint === u) return;
    const p = (u in r ? r[u] : void 0) || t.originalParams, w = qe(t, i), d = qe(t, p), g = t.params.grabCursor, v = p.grabCursor, T = i.enabled;
    w && !d ? (n.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), t.emitContainerClasses()) : !w && d && (n.classList.add(`${i.containerModifierClass}grid`), (p.grid.fill && p.grid.fill === "column" || !p.grid.fill && i.grid.fill === "column") && n.classList.add(`${i.containerModifierClass}grid-column`), t.emitContainerClasses()), g && !v ? t.unsetGrabCursor() : !g && v && t.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((k) => {
      if (typeof p[k] > "u") return;
      const C = i[k] && i[k].enabled, y = p[k] && p[k].enabled;
      C && !y && t[k].disable(), !C && y && t[k].enable();
    });
    const c = p.direction && p.direction !== i.direction, f = i.loop && (p.slidesPerView !== i.slidesPerView || c), h = i.loop;
    c && s && t.changeDirection(), q(t.params, p);
    const b = t.params.enabled, x = t.params.loop;
    Object.assign(t, {
      allowTouchMove: t.params.allowTouchMove,
      allowSlideNext: t.params.allowSlideNext,
      allowSlidePrev: t.params.allowSlidePrev
    }), T && !b ? t.disable() : !T && b && t.enable(), t.currentBreakpoint = u, t.emit("_beforeBreakpoint", p), s && (f ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !h && x ? (t.loopCreate(e), t.updateSlides()) : h && !x && t.loopDestroy()), t.emit("breakpoint", p);
  }
  function us(t, e = "window", s) {
    if (!t || e === "container" && !s) return;
    let i = !1;
    const n = D(), r = e === "window" ? n.innerHeight : s.clientHeight, l = Object.keys(t).map((o) => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const a = parseFloat(o.substr(1));
        return {
          value: r * a,
          point: o
        };
      }
      return {
        value: o,
        point: o
      };
    });
    l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
    for (let o = 0; o < l.length; o += 1) {
      const {
        point: a,
        value: u
      } = l[o];
      e === "window" ? n.matchMedia(`(min-width: ${u}px)`).matches && (i = a) : u <= s.clientWidth && (i = a);
    }
    return i || "max";
  }
  var ps = {
    setBreakpoint: ds,
    getBreakpoint: us
  };
  function fs(t, e) {
    const s = [];
    return t.forEach((i) => {
      typeof i == "object" ? Object.keys(i).forEach((n) => {
        i[n] && s.push(e + n);
      }) : typeof i == "string" && s.push(e + i);
    }), s;
  }
  function gs() {
    const t = this, {
      classNames: e,
      params: s,
      rtl: i,
      el: n,
      device: r
    } = t, l = fs(["initialized", s.direction, {
      "free-mode": t.params.freeMode && s.freeMode.enabled
    }, {
      autoheight: s.autoHeight
    }, {
      rtl: i
    }, {
      grid: s.grid && s.grid.rows > 1
    }, {
      "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column"
    }, {
      android: r.android
    }, {
      ios: r.ios
    }, {
      "css-mode": s.cssMode
    }, {
      centered: s.cssMode && s.centeredSlides
    }, {
      "watch-progress": s.watchSlidesProgress
    }], s.containerModifierClass);
    e.push(...l), n.classList.add(...e), t.emitContainerClasses();
  }
  function hs() {
    const t = this, {
      el: e,
      classNames: s
    } = t;
    !e || typeof e == "string" || (e.classList.remove(...s), t.emitContainerClasses());
  }
  var ms = {
    addClasses: gs,
    removeClasses: hs
  };
  function vs() {
    const t = this, {
      isLocked: e,
      params: s
    } = t, {
      slidesOffsetBefore: i
    } = s;
    if (i) {
      const n = t.slides.length - 1, r = t.slidesGrid[n] + t.slidesSizesGrid[n] + i * 2;
      t.isLocked = t.size > r;
    } else
      t.isLocked = t.snapGrid.length === 1;
    s.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked), s.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
  }
  var ws = {
    checkOverflow: vs
  }, Ge = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: !1,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: !1,
    // Set wrapper width
    setWrapperSize: !1,
    // Virtual Translate
    virtualTranslate: !1,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: !0,
    // Round length
    roundLengths: !1,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    // Unique Navigation Elements
    uniqueNavElements: !0,
    // Resistance
    resistance: !0,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: !1,
    // Cursor
    grabCursor: !1,
    // Clicks
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    // loop
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    // rewind
    rewind: !1,
    // Swiping/no swiping
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: !0,
    // Internals
    _emitClasses: !1
  };
  function bs(t, e) {
    return function(i = {}) {
      const n = Object.keys(i)[0], r = i[n];
      if (typeof r != "object" || r === null) {
        q(e, i);
        return;
      }
      if (t[n] === !0 && (t[n] = {
        enabled: !0
      }), n === "navigation" && t[n] && t[n].enabled && !t[n].prevEl && !t[n].nextEl && (t[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && t[n] && t[n].enabled && !t[n].el && (t[n].auto = !0), !(n in t && "enabled" in r)) {
        q(e, i);
        return;
      }
      typeof t[n] == "object" && !("enabled" in t[n]) && (t[n].enabled = !0), t[n] || (t[n] = {
        enabled: !1
      }), q(e, i);
    };
  }
  const xe = {
    eventsEmitter: mt,
    update: kt,
    translate: Mt,
    transition: $t,
    slide: Ft,
    loop: Ut,
    grabCursor: Zt,
    events: cs,
    breakpoints: ps,
    checkOverflow: ws,
    classes: ms
  }, Se = {};
  class H {
    constructor(...e) {
      let s, i;
      e.length === 1 && e[0].constructor && Object.prototype.toString.call(e[0]).slice(8, -1) === "Object" ? i = e[0] : [s, i] = e, i || (i = {}), i = q({}, i), s && !i.el && (i.el = s);
      const n = X();
      if (i.el && typeof i.el == "string" && n.querySelectorAll(i.el).length > 1) {
        const a = [];
        return n.querySelectorAll(i.el).forEach((u) => {
          const m = q({}, i, {
            el: u
          });
          a.push(new H(m));
        }), a;
      }
      const r = this;
      r.__swiper__ = !0, r.support = Ie(), r.device = ze({
        userAgent: i.userAgent
      }), r.browser = Oe(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
      const l = {};
      r.modules.forEach((a) => {
        a({
          params: i,
          swiper: r,
          extendParams: bs(i, l),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r)
        });
      });
      const o = q({}, Ge, l);
      return r.params = q({}, o, Se, i), r.originalParams = q({}, r.params), r.passedParams = q({}, i), r.params && r.params.on && Object.keys(r.params.on).forEach((a) => {
        r.on(a, r.params.on[a]);
      }), r.params && r.params.onAny && r.onAny(r.params.onAny), Object.assign(r, {
        enabled: r.params.enabled,
        el: s,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return r.params.direction === "horizontal";
        },
        isVertical() {
          return r.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: !0,
        isEnd: !1,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        // Locks
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: r.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: !0,
        // Touches
        allowTouchMove: r.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      }), r.emit("_swiper"), r.params.init && r.init(), r;
    }
    getDirectionLabel(e) {
      return this.isHorizontal() ? e : {
        width: "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        marginRight: "marginBottom"
      }[e];
    }
    getSlideIndex(e) {
      const {
        slidesEl: s,
        params: i
      } = this, n = N(s, `.${i.slideClass}, swiper-slide`), r = re(n[0]);
      return re(e) - r;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.find((s) => s.getAttribute("data-swiper-slide-index") * 1 === e));
    }
    getSlideIndexWhenGrid(e) {
      return this.grid && this.params.grid && this.params.grid.rows > 1 && (this.params.grid.fill === "column" ? e = Math.floor(e / this.params.grid.rows) : this.params.grid.fill === "row" && (e = e % Math.ceil(this.slides.length / this.params.grid.rows))), e;
    }
    recalcSlides() {
      const e = this, {
        slidesEl: s,
        params: i
      } = e;
      e.slides = N(s, `.${i.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
    setProgress(e, s) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const n = i.minTranslate(), l = (i.maxTranslate() - n) * e + n;
      i.translateTo(l, typeof s > "u" ? 0 : s), i.updateActiveIndex(), i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const s = e.el.className.split(" ").filter((i) => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
      e.emit("_containerClasses", s.join(" "));
    }
    getSlideClasses(e) {
      const s = this;
      return s.destroyed ? "" : e.className.split(" ").filter((i) => i.indexOf("swiper-slide") === 0 || i.indexOf(s.params.slideClass) === 0).join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const s = [];
      e.slides.forEach((i) => {
        const n = e.getSlideClasses(i);
        s.push({
          slideEl: i,
          classNames: n
        }), e.emit("_slideClass", i, n);
      }), e.emit("_slideClasses", s);
    }
    slidesPerViewDynamic(e = "current", s = !1) {
      const i = this, {
        params: n,
        slides: r,
        slidesGrid: l,
        slidesSizesGrid: o,
        size: a,
        activeIndex: u
      } = i;
      let m = 1;
      if (typeof n.slidesPerView == "number") return n.slidesPerView;
      if (n.centeredSlides) {
        let p = r[u] ? Math.ceil(r[u].swiperSlideSize) : 0, w;
        for (let d = u + 1; d < r.length; d += 1)
          r[d] && !w && (p += Math.ceil(r[d].swiperSlideSize), m += 1, p > a && (w = !0));
        for (let d = u - 1; d >= 0; d -= 1)
          r[d] && !w && (p += r[d].swiperSlideSize, m += 1, p > a && (w = !0));
      } else if (e === "current")
        for (let p = u + 1; p < r.length; p += 1)
          (s ? l[p] + o[p] - l[u] < a : l[p] - l[u] < a) && (m += 1);
      else
        for (let p = u - 1; p >= 0; p -= 1)
          l[u] - l[p] < a && (m += 1);
      return m;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const {
        snapGrid: s,
        params: i
      } = e;
      i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
        l.complete && ae(e, l);
      }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
      function n() {
        const l = e.rtlTranslate ? e.translate * -1 : e.translate, o = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
        e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let r;
      if (i.freeMode && i.freeMode.enabled && !i.cssMode)
        n(), i.autoHeight && e.updateAutoHeight();
      else {
        if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
          const l = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
          r = e.slideTo(l.length - 1, 0, !1, !0);
        } else
          r = e.slideTo(e.activeIndex, 0, !1, !0);
        r || n();
      }
      i.watchOverflow && s !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, s = !0) {
      const i = this, n = i.params.direction;
      return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${n}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach((r) => {
        e === "vertical" ? r.style.width = "" : r.style.height = "";
      }), i.emit("changeDirection"), s && i.update()), i;
    }
    changeLanguageDirection(e) {
      const s = this;
      s.rtl && e === "rtl" || !s.rtl && e === "ltr" || (s.rtl = e === "rtl", s.rtlTranslate = s.params.direction === "horizontal" && s.rtl, s.rtl ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`), s.el.dir = "rtl") : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`), s.el.dir = "ltr"), s.update());
    }
    mount(e) {
      const s = this;
      if (s.mounted) return !0;
      let i = e || s.params.el;
      if (typeof i == "string" && (i = document.querySelector(i)), !i)
        return !1;
      i.swiper = s, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === s.params.swiperElementNodeName.toUpperCase() && (s.isElement = !0);
      const n = () => `.${(s.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let l = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(n()) : N(i, n())[0];
      return !l && s.params.createElements && (l = ne("div", s.params.wrapperClass), i.append(l), N(i, `.${s.params.slideClass}`).forEach((o) => {
        l.append(o);
      })), Object.assign(s, {
        el: i,
        wrapperEl: l,
        slidesEl: s.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : l,
        hostEl: s.isElement ? i.parentNode.host : i,
        mounted: !0,
        // RTL
        rtl: i.dir.toLowerCase() === "rtl" || Y(i, "direction") === "rtl",
        rtlTranslate: s.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || Y(i, "direction") === "rtl"),
        wrongRTL: Y(l, "display") === "-webkit-box"
      }), !0;
    }
    init(e) {
      const s = this;
      if (s.initialized || s.mount(e) === !1) return s;
      s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.loop && s.virtual && s.params.virtual.enabled ? s.slideTo(s.params.initialSlide + s.virtual.slidesBefore, 0, s.params.runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.params.loop && s.loopCreate(void 0, !0), s.attachEvents();
      const n = [...s.el.querySelectorAll('[loading="lazy"]')];
      return s.isElement && n.push(...s.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((r) => {
        r.complete ? ae(s, r) : r.addEventListener("load", (l) => {
          ae(s, l.target);
        });
      }), ye(s), s.initialized = !0, ye(s), s.emit("init"), s.emit("afterInit"), s;
    }
    destroy(e = !0, s = !0) {
      const i = this, {
        params: n,
        el: r,
        wrapperEl: l,
        slides: o
      } = i;
      return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), s && (i.removeClasses(), r && typeof r != "string" && r.removeAttribute("style"), l && l.removeAttribute("style"), o && o.length && o.forEach((a) => {
        a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index");
      })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((a) => {
        i.off(a);
      }), e !== !1 && (i.el && typeof i.el != "string" && (i.el.swiper = null), it(i)), i.destroyed = !0), null;
    }
    static extendDefaults(e) {
      q(Se, e);
    }
    static get extendedDefaults() {
      return Se;
    }
    static get defaults() {
      return Ge;
    }
    static installModule(e) {
      H.prototype.__modules__ || (H.prototype.__modules__ = []);
      const s = H.prototype.__modules__;
      typeof e == "function" && s.indexOf(e) < 0 && s.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach((s) => H.installModule(s)), H) : (H.installModule(e), H);
    }
  }
  Object.keys(xe).forEach((t) => {
    Object.keys(xe[t]).forEach((e) => {
      H.prototype[e] = xe[t][e];
    });
  }), H.use([gt, ht]);
  function He(t, e, s, i) {
    return t.params.createElements && Object.keys(i).forEach((n) => {
      if (!s[n] && s.auto === !0) {
        let r = N(t.el, `.${i[n]}`)[0];
        r || (r = ne("div", i[n]), r.className = i[n], t.el.append(r)), s[n] = r, e[n] = r;
      }
    }), s;
  }
  const Ve = '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';
  function ys({
    swiper: t,
    extendParams: e,
    on: s,
    emit: i
  }) {
    e({
      navigation: {
        nextEl: null,
        prevEl: null,
        addIcons: !0,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), t.navigation = {
      nextEl: null,
      prevEl: null,
      arrowSvg: Ve
    };
    function n(d) {
      let g;
      return d && typeof d == "string" && t.isElement && (g = t.el.querySelector(d) || t.hostEl.querySelector(d), g) ? g : (d && (typeof d == "string" && (g = [...document.querySelectorAll(d)]), t.params.uniqueNavElements && typeof d == "string" && g && g.length > 1 && t.el.querySelectorAll(d).length === 1 ? g = t.el.querySelector(d) : g && g.length === 1 && (g = g[0])), d && !g ? d : g);
    }
    function r(d, g) {
      const v = t.params.navigation;
      d = M(d), d.forEach((T) => {
        T && (T.classList[g ? "add" : "remove"](...v.disabledClass.split(" ")), T.tagName === "BUTTON" && (T.disabled = g), t.params.watchOverflow && t.enabled && T.classList[t.isLocked ? "add" : "remove"](v.lockClass));
      });
    }
    function l() {
      const {
        nextEl: d,
        prevEl: g
      } = t.navigation;
      if (t.params.loop) {
        r(g, !1), r(d, !1);
        return;
      }
      r(g, t.isBeginning && !t.params.rewind), r(d, t.isEnd && !t.params.rewind);
    }
    function o(d) {
      d.preventDefault(), !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
    }
    function a(d) {
      d.preventDefault(), !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), i("navigationNext"));
    }
    function u() {
      const d = t.params.navigation;
      if (t.params.navigation = He(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(d.nextEl || d.prevEl)) return;
      let g = n(d.nextEl), v = n(d.prevEl);
      Object.assign(t.navigation, {
        nextEl: g,
        prevEl: v
      }), g = M(g), v = M(v);
      const T = (c, f) => {
        if (c) {
          if (d.addIcons && c.matches(".swiper-button-next,.swiper-button-prev") && !c.querySelector("svg")) {
            const h = document.createElement("div");
            ge(h, Ve), c.appendChild(h.querySelector("svg")), h.remove();
          }
          c.addEventListener("click", f === "next" ? a : o);
        }
        !t.enabled && c && c.classList.add(...d.lockClass.split(" "));
      };
      g.forEach((c) => T(c, "next")), v.forEach((c) => T(c, "prev"));
    }
    function m() {
      let {
        nextEl: d,
        prevEl: g
      } = t.navigation;
      d = M(d), g = M(g);
      const v = (T, c) => {
        T.removeEventListener("click", c === "next" ? a : o), T.classList.remove(...t.params.navigation.disabledClass.split(" "));
      };
      d.forEach((T) => v(T, "next")), g.forEach((T) => v(T, "prev"));
    }
    s("init", () => {
      t.params.navigation.enabled === !1 ? w() : (u(), l());
    }), s("toEdge fromEdge lock unlock", () => {
      l();
    }), s("destroy", () => {
      m();
    }), s("enable disable", () => {
      let {
        nextEl: d,
        prevEl: g
      } = t.navigation;
      if (d = M(d), g = M(g), t.enabled) {
        l();
        return;
      }
      [...d, ...g].filter((v) => !!v).forEach((v) => v.classList.add(t.params.navigation.lockClass));
    }), s("click", (d, g) => {
      let {
        nextEl: v,
        prevEl: T
      } = t.navigation;
      v = M(v), T = M(T);
      const c = g.target;
      let f = T.includes(c) || v.includes(c);
      if (t.isElement && !f) {
        const h = g.path || g.composedPath && g.composedPath();
        h && (f = h.find((b) => v.includes(b) || T.includes(b)));
      }
      if (t.params.navigation.hideOnClick && !f) {
        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === c || t.pagination.el.contains(c))) return;
        let h;
        v.length ? h = v[0].classList.contains(t.params.navigation.hiddenClass) : T.length && (h = T[0].classList.contains(t.params.navigation.hiddenClass)), i(h === !0 ? "navigationShow" : "navigationHide"), [...v, ...T].filter((b) => !!b).forEach((b) => b.classList.toggle(t.params.navigation.hiddenClass));
      }
    });
    const p = () => {
      t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), u(), l();
    }, w = () => {
      t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), m();
    };
    Object.assign(t.navigation, {
      enable: p,
      disable: w,
      update: l,
      init: u,
      destroy: m
    });
  }
  function Z(t = "") {
    return `.${t.trim().replace(/([\.:!+\/()[\]])/g, "\\$1").replace(/ /g, ".")}`;
  }
  function xs({
    swiper: t,
    extendParams: e,
    on: s,
    emit: i
  }) {
    const n = "swiper-pagination";
    e({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (c) => c,
        formatFractionTotal: (c) => c,
        bulletClass: `${n}-bullet`,
        bulletActiveClass: `${n}-bullet-active`,
        modifierClass: `${n}-`,
        currentClass: `${n}-current`,
        totalClass: `${n}-total`,
        hiddenClass: `${n}-hidden`,
        progressbarFillClass: `${n}-progressbar-fill`,
        progressbarOppositeClass: `${n}-progressbar-opposite`,
        clickableClass: `${n}-clickable`,
        lockClass: `${n}-lock`,
        horizontalClass: `${n}-horizontal`,
        verticalClass: `${n}-vertical`,
        paginationDisabledClass: `${n}-disabled`
      }
    }), t.pagination = {
      el: null,
      bullets: []
    };
    let r, l = 0;
    function o() {
      return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && t.pagination.el.length === 0;
    }
    function a(c, f) {
      const {
        bulletActiveClass: h
      } = t.params.pagination;
      c && (c = c[`${f === "prev" ? "previous" : "next"}ElementSibling`], c && (c.classList.add(`${h}-${f}`), c = c[`${f === "prev" ? "previous" : "next"}ElementSibling`], c && c.classList.add(`${h}-${f}-${f}`)));
    }
    function u(c, f, h) {
      if (c = c % h, f = f % h, f === c + 1)
        return "next";
      if (f === c - 1)
        return "previous";
    }
    function m(c) {
      const f = c.target.closest(Z(t.params.pagination.bulletClass));
      if (!f)
        return;
      c.preventDefault();
      const h = re(f) * t.params.slidesPerGroup;
      if (t.params.loop) {
        if (t.realIndex === h) return;
        const b = u(t.realIndex, h, t.slides.length);
        b === "next" ? t.slideNext() : b === "previous" ? t.slidePrev() : t.slideToLoop(h);
      } else
        t.slideTo(h);
    }
    function p() {
      const c = t.rtl, f = t.params.pagination;
      if (o()) return;
      let h = t.pagination.el;
      h = M(h);
      let b, x;
      const k = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, C = t.params.loop ? Math.ceil(k / t.params.slidesPerGroup) : t.snapGrid.length;
      if (t.params.loop ? (x = t.previousRealIndex || 0, b = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : typeof t.snapIndex < "u" ? (b = t.snapIndex, x = t.previousSnapIndex) : (x = t.previousIndex || 0, b = t.activeIndex || 0), f.type === "bullets" && t.pagination.bullets && t.pagination.bullets.length > 0) {
        const y = t.pagination.bullets;
        let I, S, _;
        if (f.dynamicBullets && (r = fe(y[0], t.isHorizontal() ? "width" : "height"), h.forEach((E) => {
          E.style[t.isHorizontal() ? "width" : "height"] = `${r * (f.dynamicMainBullets + 4)}px`;
        }), f.dynamicMainBullets > 1 && x !== void 0 && (l += b - (x || 0), l > f.dynamicMainBullets - 1 ? l = f.dynamicMainBullets - 1 : l < 0 && (l = 0)), I = Math.max(b - l, 0), S = I + (Math.min(y.length, f.dynamicMainBullets) - 1), _ = (S + I) / 2), y.forEach((E) => {
          const L = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((z) => `${f.bulletActiveClass}${z}`)].map((z) => typeof z == "string" && z.includes(" ") ? z.split(" ") : z).flat();
          E.classList.remove(...L);
        }), h.length > 1)
          y.forEach((E) => {
            const L = re(E);
            L === b ? E.classList.add(...f.bulletActiveClass.split(" ")) : t.isElement && E.setAttribute("part", "bullet"), f.dynamicBullets && (L >= I && L <= S && E.classList.add(...`${f.bulletActiveClass}-main`.split(" ")), L === I && a(E, "prev"), L === S && a(E, "next"));
          });
        else {
          const E = y[b];
          if (E && E.classList.add(...f.bulletActiveClass.split(" ")), t.isElement && y.forEach((L, z) => {
            L.setAttribute("part", z === b ? "bullet-active" : "bullet");
          }), f.dynamicBullets) {
            const L = y[I], z = y[S];
            for (let B = I; B <= S; B += 1)
              y[B] && y[B].classList.add(...`${f.bulletActiveClass}-main`.split(" "));
            a(L, "prev"), a(z, "next");
          }
        }
        if (f.dynamicBullets) {
          const E = Math.min(y.length, f.dynamicMainBullets + 4), L = (r * E - r) / 2 - _ * r, z = c ? "right" : "left";
          y.forEach((B) => {
            B.style[t.isHorizontal() ? z : "top"] = `${L}px`;
          });
        }
      }
      h.forEach((y, I) => {
        if (f.type === "fraction" && (y.querySelectorAll(Z(f.currentClass)).forEach((S) => {
          S.textContent = f.formatFractionCurrent(b + 1);
        }), y.querySelectorAll(Z(f.totalClass)).forEach((S) => {
          S.textContent = f.formatFractionTotal(C);
        })), f.type === "progressbar") {
          let S;
          f.progressbarOpposite ? S = t.isHorizontal() ? "vertical" : "horizontal" : S = t.isHorizontal() ? "horizontal" : "vertical";
          const _ = (b + 1) / C;
          let E = 1, L = 1;
          S === "horizontal" ? E = _ : L = _, y.querySelectorAll(Z(f.progressbarFillClass)).forEach((z) => {
            z.style.transform = `translate3d(0,0,0) scaleX(${E}) scaleY(${L})`, z.style.transitionDuration = `${t.params.speed}ms`;
          });
        }
        f.type === "custom" && f.renderCustom ? (ge(y, f.renderCustom(t, b + 1, C)), I === 0 && i("paginationRender", y)) : (I === 0 && i("paginationRender", y), i("paginationUpdate", y)), t.params.watchOverflow && t.enabled && y.classList[t.isLocked ? "add" : "remove"](f.lockClass);
      });
    }
    function w() {
      const c = t.params.pagination;
      if (o()) return;
      const f = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
      let h = t.pagination.el;
      h = M(h);
      let b = "";
      if (c.type === "bullets") {
        let x = t.params.loop ? Math.ceil(f / t.params.slidesPerGroup) : t.snapGrid.length;
        t.params.freeMode && t.params.freeMode.enabled && x > f && (x = f);
        for (let k = 0; k < x; k += 1)
          c.renderBullet ? b += c.renderBullet.call(t, k, c.bulletClass) : b += `<${c.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${c.bulletClass}"></${c.bulletElement}>`;
      }
      c.type === "fraction" && (c.renderFraction ? b = c.renderFraction.call(t, c.currentClass, c.totalClass) : b = `<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`), c.type === "progressbar" && (c.renderProgressbar ? b = c.renderProgressbar.call(t, c.progressbarFillClass) : b = `<span class="${c.progressbarFillClass}"></span>`), t.pagination.bullets = [], h.forEach((x) => {
        c.type !== "custom" && ge(x, b || ""), c.type === "bullets" && t.pagination.bullets.push(...x.querySelectorAll(Z(c.bulletClass)));
      }), c.type !== "custom" && i("paginationRender", h[0]);
    }
    function d() {
      t.params.pagination = He(t, t.originalParams.pagination, t.params.pagination, {
        el: "swiper-pagination"
      });
      const c = t.params.pagination;
      if (!c.el) return;
      let f;
      typeof c.el == "string" && t.isElement && (f = t.el.querySelector(c.el)), !f && typeof c.el == "string" && (f = [...document.querySelectorAll(c.el)]), f || (f = c.el), !(!f || f.length === 0) && (t.params.uniqueNavElements && typeof c.el == "string" && Array.isArray(f) && f.length > 1 && (f = [...t.el.querySelectorAll(c.el)], f.length > 1 && (f = f.find((h) => Le(h, ".swiper")[0] === t.el))), Array.isArray(f) && f.length === 1 && (f = f[0]), Object.assign(t.pagination, {
        el: f
      }), f = M(f), f.forEach((h) => {
        c.type === "bullets" && c.clickable && h.classList.add(...(c.clickableClass || "").split(" ")), h.classList.add(c.modifierClass + c.type), h.classList.add(t.isHorizontal() ? c.horizontalClass : c.verticalClass), c.type === "bullets" && c.dynamicBullets && (h.classList.add(`${c.modifierClass}${c.type}-dynamic`), l = 0, c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)), c.type === "progressbar" && c.progressbarOpposite && h.classList.add(c.progressbarOppositeClass), c.clickable && h.addEventListener("click", m), t.enabled || h.classList.add(c.lockClass);
      }));
    }
    function g() {
      const c = t.params.pagination;
      if (o()) return;
      let f = t.pagination.el;
      f && (f = M(f), f.forEach((h) => {
        h.classList.remove(c.hiddenClass), h.classList.remove(c.modifierClass + c.type), h.classList.remove(t.isHorizontal() ? c.horizontalClass : c.verticalClass), c.clickable && (h.classList.remove(...(c.clickableClass || "").split(" ")), h.removeEventListener("click", m));
      })), t.pagination.bullets && t.pagination.bullets.forEach((h) => h.classList.remove(...c.bulletActiveClass.split(" ")));
    }
    s("changeDirection", () => {
      if (!t.pagination || !t.pagination.el) return;
      const c = t.params.pagination;
      let {
        el: f
      } = t.pagination;
      f = M(f), f.forEach((h) => {
        h.classList.remove(c.horizontalClass, c.verticalClass), h.classList.add(t.isHorizontal() ? c.horizontalClass : c.verticalClass);
      });
    }), s("init", () => {
      t.params.pagination.enabled === !1 ? T() : (d(), w(), p());
    }), s("activeIndexChange", () => {
      typeof t.snapIndex > "u" && p();
    }), s("snapIndexChange", () => {
      p();
    }), s("snapGridLengthChange", () => {
      w(), p();
    }), s("destroy", () => {
      g();
    }), s("enable disable", () => {
      let {
        el: c
      } = t.pagination;
      c && (c = M(c), c.forEach((f) => f.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)));
    }), s("lock unlock", () => {
      p();
    }), s("click", (c, f) => {
      const h = f.target, b = M(t.pagination.el);
      if (t.params.pagination.el && t.params.pagination.hideOnClick && b && b.length > 0 && !h.classList.contains(t.params.pagination.bulletClass)) {
        if (t.navigation && (t.navigation.nextEl && h === t.navigation.nextEl || t.navigation.prevEl && h === t.navigation.prevEl)) return;
        const x = b[0].classList.contains(t.params.pagination.hiddenClass);
        i(x === !0 ? "paginationShow" : "paginationHide"), b.forEach((k) => k.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
    const v = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let {
        el: c
      } = t.pagination;
      c && (c = M(c), c.forEach((f) => f.classList.remove(t.params.pagination.paginationDisabledClass))), d(), w(), p();
    }, T = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let {
        el: c
      } = t.pagination;
      c && (c = M(c), c.forEach((f) => f.classList.add(t.params.pagination.paginationDisabledClass))), g();
    };
    Object.assign(t.pagination, {
      enable: v,
      disable: T,
      render: w,
      update: p,
      init: d,
      destroy: g
    });
  }
  const O = class O {
    constructor() {
      this.eventsAborter = null, this.swiperInstance = null, this.slideChangeHandler = null, this.linkConfigs = [
        {
          selector: 'a[href*="/discipline/"]',
          eventId: "exp_hp_discipline_click",
          eventDesc: "Discipline"
        },
        {
          selector: ".model-carousel-prev-3",
          eventId: "exp_hp_discipline_prev",
          eventDesc: "Previous"
        },
        {
          selector: ".model-carousel-next-3",
          eventId: "exp_hp_discipline_next",
          eventDesc: "Next"
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
    handleError(e, s) {
      const i = e instanceof Error ? e.message : String(e);
      R(`Discipline ${s}: ${i}`, "error");
    }
    async render() {
      try {
        const e = await j(O.CONTAINER_SELECTOR);
        if (!e) {
          R(`Container ${O.CONTAINER_SELECTOR} not found`, "warn");
          return;
        }
        this.cleanupExistingSection(), this.insertSection(e), this.setupEventListeners(), this.setupPagination(), this.setupVisibilityTracking();
      } catch (e) {
        this.handleError(e, "Rendering");
      }
    }
    cleanupExistingSection() {
      const e = document.querySelector(O.SECTION_SELECTOR);
      e && (this.eventsAborter && this.eventsAborter.abort(), e.remove());
    }
    insertSection(e) {
      e.insertAdjacentHTML(
        O.INSERTION_POSITION,
        Qe
      ), this.initSwiper();
    }
    setupEventListeners() {
      this.eventsAborter && this.eventsAborter.abort(), this.eventsAborter = new AbortController(), this.linkConfigs.forEach((e) => {
        this.setupLinksForConfig(e);
      });
    }
    setupLinksForConfig(e) {
      const s = `${O.SECTION_SELECTOR} ${e.selector}`;
      document.querySelectorAll(s).forEach((n) => {
        this.attachClickListener(n, e);
      });
    }
    attachClickListener(e, s) {
      e.addEventListener(
        "click",
        (i) => {
          let n = s.eventDesc;
          if (e instanceof HTMLAnchorElement && e.href) {
            const r = e.href.match(/\/discipline\/([\w-]+)/);
            r && r[1] && (n = r[1].split("-").map((l) => l.charAt(0).toUpperCase() + l.slice(1)).join(" "));
          }
          J(
            s.eventId,
            n,
            "click",
            "Home Page Discipline"
          );
        },
        { signal: this.eventsAborter.signal }
      );
    }
    initSwiper() {
      const e = document.querySelector(
        O.SECTION_SELECTOR
      );
      if (!e) return;
      const s = e.querySelector(".swiper");
      s && (this.swiperInstance = new H(s, {
        modules: [ys, xs],
        loop: !0,
        centeredSlides: !0,
        slidesPerView: "auto",
        spaceBetween: 0,
        speed: 300,
        allowSlideNext: !0,
        allowSlidePrev: !0,
        allowTouchMove: !0,
        observer: !0,
        navigation: {
          nextEl: ".model-carousel-next-3",
          prevEl: ".model-carousel-prev-3"
        },
        pagination: {
          el: ".categories-carousel-pagination-3",
          type: "bullets",
          clickable: !1
        }
      }));
    }
    setupPagination() {
      const e = document.querySelector(O.SECTION_SELECTOR);
      if (!e || !this.swiperInstance) return;
      const s = e.querySelectorAll(".carousel-dot");
      if (s.length === 0) {
        R("Pagination buttons not found", "warn");
        return;
      }
      this.updatePaginationState(s), s.forEach((i, n) => {
        i.addEventListener(
          "click",
          () => {
            this.swiperInstance.slideToLoop(n), this.updatePaginationState(s), J(
              "exp_hp_discipline_pag_click",
              `Slide ${n + 1}`,
              "click",
              "Home Page Discipline"
            );
          },
          { signal: this.eventsAborter.signal }
        );
      }), this.slideChangeHandler = () => {
        this.updatePaginationState(s);
      }, this.swiperInstance.on("slideChange", this.slideChangeHandler);
    }
    updatePaginationState(e) {
      const i = this.swiperInstance.realIndex % e.length;
      e.forEach((n, r) => {
        r === i ? (n.classList.add("is-active"), n.setAttribute(
          "aria-label",
          `Carousel Page ${r + 1} (Current Slide)`
        )) : (n.classList.remove("is-active"), n.setAttribute("aria-label", `Carousel Page ${r + 1}`));
      });
    }
    setupVisibilityTracking() {
      const e = document.querySelector(
        O.SECTION_SELECTOR
      );
      e && le(
        e,
        "exp_hp_discipline_view",
        "Home Page Discipline",
        "Visibility",
        O.VISIBILITY_THRESHOLD
      );
    }
    addStyles() {
      if (document.getElementById(O.STYLES_ID)) return;
      const e = document.createElement("style");
      e.id = O.STYLES_ID, e.textContent = et, document.head.appendChild(e);
    }
    destroy() {
      this.eventsAborter && (this.eventsAborter.abort(), this.eventsAborter = null), this.swiperInstance && (this.slideChangeHandler && (this.swiperInstance.off("slideChange", this.slideChangeHandler), this.slideChangeHandler = null), this.swiperInstance.destroy(), this.swiperInstance = null);
      const e = document.querySelector(O.SECTION_SELECTOR);
      e && e.remove();
    }
  };
  O.STYLES_ID = "crs-discipline-styles", O.CONTAINER_SELECTOR = "icms-component:has(fashion-recommendations)", O.INSERTION_POSITION = "afterend", O.SECTION_SELECTOR = ".crs-discipline-section", O.VISIBILITY_THRESHOLD = 0;
  let Te = O;
  Re({ name: "Homepage Hero Image Alternative", dev: "OS" }), (function(t, e, s, i, n, r) {
    t.hj = t.hj || function() {
      (t.hj.q = t.hj.q || []).push(arguments);
    }, t._hjSettings = { hjid: 2667925, hjsv: 6 }, n = e.getElementsByTagName("head")[0], r = e.createElement("script"), r.async = !0, r.src = s + t._hjSettings.hjid + i + t._hjSettings.hjsv, n && n.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_hp_hero");
  class Ss {
    // private winterSale: WinterSale;
    constructor() {
      this.previousUrl = location.href, this.hero = new ce(), this.hideSections = new de(), this.popularCategories = new ue(), this.outfitBuilder = new Ze(), this.discipline = new Te(), this.init();
    }
    async init() {
      this.imagePreloading(), this.interceptHistoryAPI(async () => {
        this.destroyComponents(), this.initComponents();
      }), this.initComponents();
    }
    initComponents() {
      (location.pathname === "/" || location.pathname === "/us/") && this.waitAutoInitData().then(() => {
        this.addStyles(), this.hero.init(), this.hideSections.init(), this.popularCategories.init(), this.discipline.init(), this.outfitBuilder.init();
      });
    }
    waitAutoInitData() {
      return new Promise((e) => {
        const s = () => {
          window.autoInitData && window.autoInitData.website ? e() : window.setTimeout(s, 100);
        };
        s();
      });
    }
    destroyComponents() {
      this.hero.destroy(), this.hideSections.destroy(), this.popularCategories.destroy(), this.outfitBuilder.destroy(), this.discipline.destroy();
    }
    interceptHistoryAPI(e) {
      new MutationObserver(() => {
        const i = location.href;
        this.previousUrl !== i && (this.previousUrl = i, e());
      }).observe(document.body, { childList: !0 });
    }
    imagePreloading() {
      oe.forEach((e) => {
        const s = `<link rel="preload" as="image" href="${e.images.mob}" media="(max-width: 700px)" />
      <link rel="preload" as="image" href="${e.images.desktop}" media="(min-width: 701px)" />`;
        document.head.insertAdjacentHTML("beforeend", s);
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = je, document.head.appendChild(e);
    }
  }
  window._crsTestInitialized || (window._crsTestInitialized = !0, new Ss());
})();
