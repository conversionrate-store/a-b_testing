(function() {
  "use strict";
  const K = (t, e, i, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: e,
      event_type: i,
      event_loc: s
    }), q(`Event: ${t} | ${e} | ${i} | ${s}`, "success");
  }, F = (t) => new Promise((e) => {
    const i = document.querySelector(t);
    i && e(i);
    const s = new MutationObserver(() => {
      const n = document.querySelector(t);
      n && (e(n), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), We = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, ee = (t, e, i, s, n = 1e3, a = 0.5) => {
    let l, o;
    if (l = new IntersectionObserver(
      function(r) {
        r[0].isIntersecting === !0 ? o = setTimeout(() => {
          K(
            e,
            r[0].target.dataset.visible || s || "",
            "view",
            i
          ), l.disconnect();
        }, n) : (q("Element is not fully visible", "warn"), clearTimeout(o));
      },
      { threshold: [a] }
    ), typeof t == "string") {
      const r = document.querySelector(t);
      r && l.observe(r);
    } else
      l.observe(t);
  }, q = (t, e = "info") => {
    let i;
    switch (e) {
      case "info":
        i = "color: #3498db;";
        break;
      case "warn":
        i = "color: #f39c12;";
        break;
      case "error":
        i = "color: #e74c3c;";
        break;
      case "success":
        i = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${t}`, `${i} font-size: 16px; font-weight: 600`);
  }, Xe = `.crs-hide {
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
`, W = "https://ab.conversionrate.store/lemieux/home-page-hero/img", de = [
    {
      id: "winter-essentials",
      href: "/new-in/winter-essentials",
      title: { sub: "Performance in all Weather", main: "Winter Essentials" },
      button: {
        text: "Explore Now",
        href: "/new-in/winter-essentials"
      },
      images: {
        desktop: `${W}/hero_winter_essential.webp`,
        mob: `${W}/hero_winter_essential.webp`
      }
    },
    {
      id: "clothing",
      href: "/clothing",
      title: "Clothing",
      images: {
        desktop: `${W}/hero_clothing.webp`,
        mob: `${W}/hero_clothing.webp`
      }
    },
    {
      id: "horse",
      href: "/horsewear",
      title: "Horse",
      images: {
        desktop: `${W}/hero_horse.webp`,
        mob: `${W}/hero_horse.webp`
      }
    },
    {
      id: "footwear",
      href: "/footwear",
      title: "Footwear",
      images: {
        desktop: `${W}/hero_footwear.webp`,
        mob: `${W}/hero_footwear.webp`
      }
    }
  ];
  function j(t, e) {
    const i = t instanceof Error ? t.message : String(t);
    q(`${e}: ${i}`, "error");
  }
  const Ue = `header {
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
`, Ke = (t) => (
    /* HTML */
    `<icms-component
  _ngcontent-ng-c2047601728
  class="ng-star-inserted crs-hero-section"
  data-crs-no-hide
  >${t}</icms-component
>`
  ), V = class V {
    constructor() {
      this.eventsAborter = null;
    }
    // private mutationObserver: MutationObserver | null = null;
    init() {
      try {
        this.addStyles(), this.addNewHeroSection();
      } catch (e) {
        j(e, "Error initializing Hero section");
      }
    }
    async addNewHeroSection() {
      try {
        const e = await F(V.TARGET_SELECTOR);
        if (!e) {
          console.warn(`Target ${V.TARGET_SELECTOR} not found`);
          return;
        }
        (() => {
          this.replaceHeroContent(e), this.setupEventListeners(e);
        })();
      } catch (e) {
        j(e, "Error changing hero image section");
      }
    }
    replaceHeroContent(e) {
      const i = e.querySelector(V.HERO_CLASS);
      i && i.remove(), this.eventsAborter && this.eventsAborter.abort(), e.insertAdjacentHTML(
        "beforebegin",
        Ke(this.renderNewHeroSection())
      );
    }
    renderNewHeroSection() {
      const e = de.find((s) => s.id === "winter-essentials"), i = de.filter((s) => s.id !== "winter-essentials");
      return (
        /* HTML */
        `
      <div class="crs-hero">
        <div class="crs-hero-left">${e ? this.renderItem(e) : ""}</div>
        <div class="crs-hero-right">
          ${i.map((s) => this.renderItem(s)).join("")}
        </div>
      </div>
    `
      );
    }
    renderItem(e) {
      const i = this.renderTitle(e.title), s = this.generateAltText(e.title);
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
            alt="${s}"
            fetchpriority="high"
          />
        </picture>
        <div class="crs-hero-block-text">
          ${i}
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
      const i = e.previousElementSibling;
      if (!i) {
        console.warn("Hero section not found");
        return;
      }
      i.querySelectorAll("a.crs-hero-block").forEach((n) => {
        this.attachClickListener(n), this.attachVisibilityTracking(n);
      });
    }
    attachClickListener(e) {
      e.addEventListener(
        "click",
        (i) => {
          const s = e.dataset.title;
          if (!s) {
            console.warn("No title found for hero link", e);
            return;
          }
          K(
            "exp_hp_hero_click_1",
            s,
            "click",
            "Home page Hero Section"
          );
        },
        { signal: this.eventsAborter.signal }
      );
    }
    attachVisibilityTracking(e) {
      ee(
        e,
        "exp_hp_hero_view_1",
        "Home page Hero Section",
        e.dataset.title || "",
        V.VISIBILITY_THRESHOLD
      );
    }
    addStyles() {
      if (document.getElementById(V.STYLES_ID)) return;
      const e = document.createElement("style");
      e.id = V.STYLES_ID, e.textContent = Ue, document.head.appendChild(e);
    }
    destroy() {
      var e;
      this.eventsAborter && (this.eventsAborter.abort(), this.eventsAborter = null), (e = document == null ? void 0 : document.querySelector(V.HERO_CLASS)) == null || e.remove();
    }
  };
  V.STYLES_ID = "crs-hero-styles", V.VISIBILITY_THRESHOLD = 0, V.TARGET_SELECTOR = "icms-component:has(page-component-hero-image)", V.HERO_CLASS = ".crs-hero-section";
  let ue = V;
  const Je = `[data-crs-hide='true']:not([data-crs-no-hide]) {
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
} */`, Ie = [
    "What's Your Favourite Colour?",
    "What Suits Your Horse Best?",
    "@lemieuxproductsofficial",
    "WINTER SALE"
  ], Q = class Q {
    constructor() {
      this.resizeObserver = null, this.resizeTimeout = null, this.mutationObservers = /* @__PURE__ */ new Set();
    }
    init() {
      try {
        this.addStyles(), this.hideSection(), this.changeSectionCopy(), this.observeResize();
      } catch (e) {
        j(e, "Error initializing Hide Sections");
      }
    }
    async hideSection() {
      try {
        const e = await F(".page-view-boundary"), i = e == null ? void 0 : e.querySelectorAll(
          ":scope > icms-component"
        );
        if (!i) {
          q("No components found in page view boundary", "warn");
          return;
        }
        const s = Array.from(i);
        this.processInitialComponents(s);
      } catch (e) {
        j(e, "Error hiding sections");
      }
    }
    processInitialComponents(e) {
      e.forEach((i) => {
        try {
          i.classList.add("crs-top-section"), this.resetHideAttribute(i), this.hideComponent(i);
        } catch (s) {
          j(s, "Processing initial component");
        }
      });
    }
    hideComponent(e) {
      var s;
      const i = (s = e.querySelector(
        "h1, h2, h3, div.hero"
      )) == null ? void 0 : s.textContent;
      if (Ie.some((n) => i == null ? void 0 : i.includes(n)) || e.dataset.crsNoHide === "true") {
        const n = Ie.find((a) => i == null ? void 0 : i.includes(a));
        e.dataset.crsMarker = (n == null ? void 0 : n.toLowerCase().replace(/\s+/g, "-")) || "unknown";
        return;
      }
      e.dataset.crsHide = "true";
    }
    resetHideAttribute(e) {
      e.hasAttribute("data-crs-hide") && e.removeAttribute("data-crs-hide");
    }
    handleOutfitBuilder(e) {
      var s;
      const i = (s = e.querySelector(".hero")) == null ? void 0 : s.textContent;
      i != null && i.includes("Outfit Builder") && (e.classList.add("crs-target-outfit-builder"), e.innerHTML = "");
    }
    async changeSectionCopy() {
      try {
        const e = await F(".page-view-boundary"), i = e == null ? void 0 : e.querySelectorAll(
          ":scope > icms-component"
        );
        i == null || i.forEach((s) => {
          this.processPopularCategoriesTitle(s);
        });
      } catch (e) {
        j(e, "Change section copy");
      }
    }
    async processPopularCategoriesTitle(e) {
      var n;
      const i = e.querySelector("h1, h3");
      if (!((n = i == null ? void 0 : i.textContent) != null && n.includes("Shop Popular Categories")) || e.querySelector("vimeo-player") || i.__crsObserver)
        return;
      e.dataset.crsTitle = "Popular Categories", i.textContent = "Popular Categories";
      const s = await F(".crs-hero-section");
      s && s.after(e), this.setupTitleObserver(i);
    }
    setupTitleObserver(e) {
      const i = new MutationObserver(() => {
        var n;
        (((n = e.textContent) == null ? void 0 : n.trim()) || "").includes("Shop Popular Categories") && (e.textContent = "Popular Categories", setTimeout(() => {
          this.cleanupObserver(i);
        }, Q.OBSERVER_CLEANUP_MS));
      });
      i.observe(e, {
        childList: !0,
        subtree: !0,
        characterData: !0,
        characterDataOldValue: !0
      }), this.mutationObservers.add(i), e.__crsObserver = i;
    }
    cleanupObserver(e) {
      e.disconnect(), this.mutationObservers.delete(e);
    }
    observeResize() {
      this.resizeObserver && this.resizeObserver.disconnect();
      const e = () => {
        this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(() => {
          this.hideSection();
        }, Q.RESIZE_DEBOUNCE_MS);
      };
      this.resizeObserver = new ResizeObserver(e), F(".page-view-boundary").then((i) => {
        i && this.resizeObserver && this.resizeObserver.observe(i);
      }).catch((i) => {
        j(i, "Setup resize observer");
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
      e.id = "crs-hide-section-styles", e.textContent = Je, document.head.appendChild(e);
    }
  };
  Q.RESIZE_DEBOUNCE_MS = 500, Q.OBSERVER_CLEANUP_MS = 1e3;
  let pe = Q;
  const Ze = (
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
  ), Qe = `[data-crs-title='Popular Categories'] .swiper-initialized {
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
}`, ie = class ie {
    constructor() {
      this.eventsAborter = null;
    }
    init() {
      try {
        this.addStyles(), this.modifySection();
      } catch (e) {
        j(e, "Error initializing Popular Categories");
      }
    }
    async modifySection() {
      try {
        const e = await F('[data-crs-title="Popular Categories"]');
        e && (e.outerHTML = Ze, this.initSlider());
      } catch (e) {
        j(e, "Error modifying Popular Categories section");
      }
    }
    initSlider() {
      this.eventsAborter && this.eventsAborter.abort(), this.eventsAborter = new AbortController();
      const e = document.querySelector(
        ".crs-slider-section .swiper-initialized"
      );
      if (!e) {
        q("Slider box not found for scroll interaction", "warn");
        return;
      }
      e.style.cursor = "grab";
      let i = !1, s = 0, n = 0, a = 0, l = 0;
      e.addEventListener(
        "mousedown",
        (o) => {
          o.preventDefault(), i = !0, s = o.pageX, n = o.pageY, a = e.scrollLeft, l = e.scrollTop;
        },
        { signal: this.eventsAborter.signal }
      ), e.addEventListener(
        "mouseleave",
        () => {
          i = !1, e.style.cursor = "grab";
        },
        { signal: this.eventsAborter.signal }
      ), e.addEventListener(
        "mouseup",
        () => {
          i = !1, e.style.cursor = "grab";
        },
        { signal: this.eventsAborter.signal }
      ), e.addEventListener(
        "mousemove",
        (o) => {
          if (!i) return;
          o.preventDefault(), e.style.cursor = "grabbing";
          const r = o.pageX, u = o.pageY, m = (r - s) * ie.SCROLL_SENSITIVITY, p = (u - n) * ie.SCROLL_SENSITIVITY;
          e.scrollLeft = a - m, e.scrollTop = l - p;
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
      e.id = "crs-popular-categories-styles", e.textContent = Qe, document.head.appendChild(e);
    }
  };
  ie.SCROLL_SENSITIVITY = 1;
  let fe = ie;
  const et = (
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
  ), tt = `.crs-outfit-section .crs-mobile page-component-text {
  margin-top: 0 !important;
}

.crs-outfit-section .crs-mobile h1 {
  margin-top: 20px;
}
`;
  class it {
    constructor() {
      this.eventsAborter = null;
    }
    init() {
      try {
        this.addStyles(), this.render();
      } catch (e) {
        j(e, "Error initializing Outfit Builder section");
      }
    }
    async render() {
      try {
        const e = await F('[data-crs-marker="winter-sale"]'), i = document.querySelector(".crs-outfit-section");
        i && (this.eventsAborter && this.eventsAborter.abort(), i.remove());
        const s = et;
        if (e)
          e.insertAdjacentHTML("afterend", s), this.setupEvents();
        else {
          q("Container .crs-winter-sale-section not found", "warn");
          return;
        }
      } catch (e) {
        j(e, "Error rendering Outfit Builder section");
      }
    }
    setupEvents() {
      this.setupBuilderEvents();
    }
    setupBuilder(e, i) {
      document.querySelectorAll(e.selector).forEach((s) => {
        const n = s.querySelector("a");
        ee(
          s,
          e.viewEvent,
          "Home Page Outfit Builder",
          e.visibility,
          0
        ), n && n.addEventListener(
          "click",
          (a) => {
            K(
              e.clickEvent,
              e.name,
              "click",
              "Home Page Outfit Builder"
            );
          },
          {
            signal: i.signal
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
      ].forEach((s) => this.setupBuilder(s, e));
    }
    destroy() {
      var e;
      this.eventsAborter && (this.eventsAborter.abort(), this.eventsAborter = null), (e = document.querySelector(".crs-outfit-section")) == null || e.remove();
    }
    addStyles() {
      if (!document.getElementById("crs-outfit-builder-styles")) {
        const e = document.createElement("style");
        e.id = "crs-outfit-builder-styles", e.textContent = tt, document.head.appendChild(e);
      }
    }
  }
  const st = "", nt = (
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
  ), $ = class $ {
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
    handleError(e, i) {
      const s = e instanceof Error ? e.message : String(e);
      q(`ChristmasGifts ${i}: ${s}`, "error");
    }
    async render() {
      try {
        const e = await F($.CONTAINER_SELECTOR);
        if (!e) {
          q(`Container ${$.CONTAINER_SELECTOR} not found`, "warn");
          return;
        }
        this.cleanupExistingSection(), this.insertSection(e), this.setupEventListeners(), this.setupVisibilityTracking();
      } catch (e) {
        this.handleError(e, "Rendering");
      }
    }
    cleanupExistingSection() {
      const e = document.querySelector(
        $.SECTION_SELECTOR
      );
      e && (this.eventsAborter && this.eventsAborter.abort(), e.remove());
    }
    insertSection(e) {
      e.insertAdjacentHTML("beforeend", nt);
    }
    setupEventListeners() {
      this.eventsAborter && this.eventsAborter.abort(), this.eventsAborter = new AbortController(), this.linkConfigs.forEach((e) => {
        this.setupLinksForConfig(e);
      });
    }
    setupLinksForConfig(e) {
      const i = `${$.SECTION_SELECTOR} ${e.selector}`;
      document.querySelectorAll(i).forEach((n) => {
        this.attachClickListener(n, e);
      });
    }
    attachClickListener(e, i) {
      e.addEventListener(
        "click",
        (s) => {
          K(
            i.eventId,
            i.eventDesc,
            "click",
            "Home Page Christmas Gifting"
          ), i.isSpanNavigation && e.tagName.toLowerCase() === "span" && this.handleSpanNavigation(s, e);
        },
        { signal: this.eventsAborter.signal }
      );
    }
    handleSpanNavigation(e, i) {
      e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation();
      const s = i.getAttribute("href");
      s ? window.location.href = s : q("No href found for span navigation", "warn");
    }
    setupVisibilityTracking() {
      const e = document.querySelector($.SECTION_SELECTOR);
      e && ee(
        e,
        "exp_hp_hero_view_4",
        "Home Page Christmas Gifting",
        "Visibility",
        $.VISIBILITY_THRESHOLD
      );
    }
    addStyles() {
      if (document.getElementById($.STYLES_ID)) return;
      const e = document.createElement("style");
      e.id = $.STYLES_ID, e.textContent = st, document.head.appendChild(e);
    }
    destroy() {
      this.eventsAborter && (this.eventsAborter.abort(), this.eventsAborter = null);
      const e = document.querySelector($.SECTION_SELECTOR);
      e && e.remove();
    }
  };
  $.STYLES_ID = "crs-christmas-gifts-styles", $.CONTAINER_SELECTOR = ".crs-target-outfit-builder", $.SECTION_SELECTOR = ".crs-christmas-gifts-section", $.VISIBILITY_THRESHOLD = 0;
  let ge = $;
  const at = (
    /* HTML */
    `<icms-component
  _ngcontent-ng-c2047601728=""
  class="ng-star-inserted crs-winter-sale-section"
  data-crs-title="Winter Sale"
  data-crs-no-hide
  ><div>
    <page-component-hero-image
      _nghost-ng-c534717118=""
      class="ng-star-inserted"
      style="display: block;"
      ng-version="20.3.16"
      ><div _ngcontent-ng-c534717118="" class="overflow-hidden" style="position: relative;height: auto;">
        <div
  
          ><div href="/lemieux-winter-sale" tabindex="0" class="ng-star-inserted"
            ><div _ngcontent-ng-c534717118="" class="fill z-1 ng-star-inserted">
              <df-image-wrapper
        
                style="overflow: hidden; display: block; height: 100%"
                ><shell _ngcontent-ng-c3853189133="" _nghost-ng-c3904987725=""
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
                  style="position: relative; width: 100%; height: 100%;"
                  fetchpriority="auto"
                  decoding="auto"
                  sizes="auto, 375px"
                  src="/tco-images/unsafe/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day 2024 2x1 Header Banner2-1.webp"
                  srcset="
                    /tco-images/unsafe/128x43/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day%202024%202x1%20Header%20Banner2-1.webp    128w,
                    /tco-images/unsafe/256x85/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day%202024%202x1%20Header%20Banner2-1.webp    256w,
                    /tco-images/unsafe/384x128/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day%202024%202x1%20Header%20Banner2-1.webp   384w,
                    /tco-images/unsafe/414x138/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day%202024%202x1%20Header%20Banner2-1.webp   414w,
                    /tco-images/unsafe/640x213/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day%202024%202x1%20Header%20Banner2-1.webp   640w,
                    /tco-images/unsafe/750x250/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day%202024%202x1%20Header%20Banner2-1.webp   750w,
                    /tco-images/unsafe/828x276/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day%202024%202x1%20Header%20Banner2-1.webp   828w,
                    /tco-images/unsafe/1080x360/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day%202024%202x1%20Header%20Banner2-1.webp 1080w,
                    /tco-images/unsafe/1280x427/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day%202024%202x1%20Header%20Banner2-1.webp 1280w,
                    /tco-images/unsafe/1366x455/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day%202024%202x1%20Header%20Banner2-1.webp 1366w,
                    /tco-images/unsafe/1440x480/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day%202024%202x1%20Header%20Banner2-1.webp 1440w,
                    /tco-images/unsafe/1600x533/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day%202024%202x1%20Header%20Banner2-1.webp 1600w,
                    /tco-images/unsafe/1920x640/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day%202024%202x1%20Header%20Banner2-1.webp 1920w,
                    /tco-images/unsafe/2560x853/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Boxing-Day%202024%202x1%20Header%20Banner2-1.webp 2560w
                  "
                  style="aspect-ratio: 3 / 1;"
              /></df-image-wrapper>
            </div>
            <vimeo-player
              _ngcontent-ng-c534717118=""
              ngskiphydration="true"
              class="z-1 fill is-background video-player-container ng-star-inserted crs-vimeo-player"
              style="pointer-events: none;"
              ><div data-vimeo-initialized="true">
                <iframe
                  class="crs-vimeo-iframe"
                  src="https://player.vimeo.com/video/{{VIDEO_ID}}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff&amp;muted=1&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963"
                  width="426"
                  height="214"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  title="LM - Winter SALE backgrounds HR_Animated_V2"
                  data-ready="true"
                  playsinline="true"
                ></iframe>
              </div>
            </vimeo-player>
            <div
              style="position: relative; z-index: 4;"
              class="flex ng-star-inserted crs-winter-container"
            >
              <div _ngcontent-ng-c534717118="" class="flex w-12">
                <div _ngcontent-ng-c534717118="" class="w-12 pos-relative">
                  <text-overlay
                    _ngcontent-ng-c534717118=""
                    _nghost-ng-c3259544976=""
                    class="ng-star-inserted"
                    ><div
                      _ngcontent-ng-c3259544976=""
                      class=" pe-none"
                      style="top: 39%; left: 0%; right: 0%;"
                    >
                      <div
                        _ngcontent-ng-c3259544976=""
                        class="w-12 center hero _text-shadow ng-star-inserted p-t-4 crs-hero-title"
                      >
                        WINTER SALE
                      </div>
                      <div
                        _ngcontent-ng-c3259544976=""
                        class="w-12 center p1 _text-shadow ng-star-inserted p-t-8 crs-hero-subtitle"
                      >
                        JUST GOT EVEN BIGGER
                      </div>
                      <div
                        _ngcontent-ng-c3259544976=""
                        class="w-12 center p1 _text-shadow ng-star-inserted p-t-7 crs-hero-subtitle"
                      >
                        UP TO 50% OFF
                      </div>
                    </div></text-overlay
                  >
                  <div class="crs-winter-wrap">
                    <text-overlay
                      _ngcontent-ng-c534717118=""
                      _nghost-ng-c3259544976=""
                      class="ng-star-inserted"
                      ><div
                        _ngcontent-ng-c3259544976=""
                        class=" pe-none"
                       
                      >
                        <div
                          _ngcontent-ng-c3259544976=""
                          class="pe-none center p-t-0 ng-star-inserted"
                          style="--scale: 1.1;"
                        >
                          <div _ngcontent-ng-c3259544976="" class="pe-auto"
                            ><a
                              href="/lemieux-winter-sale"
                              tabindex="0"
                              class="ng-star-inserted"
                              ><div
                                _ngcontent-ng-c3259544976=""
                                class="button-2 _button-box-shadow ng-star-inserted"
                                style="min-width: 181px;"
                              >
                                <span
                                  _ngcontent-ng-c3259544976=""
                                  class="button__body ng-star-inserted"
                                  >Shop All Sale</span
                                >
                              </div></a
                            ></div
                          >
                        </div>
                      </div></text-overlay
                    >
                    <text-overlay
                      _ngcontent-ng-c534717118=""
                      _nghost-ng-c3259544976=""
                      class="ng-star-inserted"
                      ><div
                        _ngcontent-ng-c3259544976=""
                        class=" pe-none"
                        
                      >
                        <div
                          _ngcontent-ng-c3259544976=""
                          class="pe-none center p-t-0 ng-star-inserted"
                          style="--scale: 1.1;"
                        >
                          <div _ngcontent-ng-c3259544976="" class="pe-auto"
                            ><a
                              href="/lemieux-winter-sale?438=12416"
                              tabindex="0"
                              class="ng-star-inserted"
                              ><div
                                _ngcontent-ng-c3259544976=""
                                class="button-2 _button-box-shadow ng-star-inserted"
                                style="min-width: 181px;"
                              >
                                <span
                                  _ngcontent-ng-c3259544976=""
                                  class="button__body ng-star-inserted"
                                  >Shop Crystal
                                </span>
                              </div></a
                            ></div
                          >
                        </div>
                      </div></text-overlay
                    >
                    <text-overlay
                      _ngcontent-ng-c534717118=""
                      _nghost-ng-c3259544976=""
                      class="ng-star-inserted"
                      ><div
                        _ngcontent-ng-c3259544976=""
                        class=" pe-none"
                       
                      >
                        <div
                          _ngcontent-ng-c3259544976=""
                          class="pe-none center p-t-0 ng-star-inserted"
                          style="--scale: 1.1;"
                        >
                          <div _ngcontent-ng-c3259544976="" class="pe-auto"
                            ><a
                              href="/lemieux-winter-sale?487=11748"
                              tabindex="0"
                              class="ng-star-inserted"
                              ><div
                                _ngcontent-ng-c3259544976=""
                                class="button-2 _button-box-shadow ng-star-inserted"
                                style="min-width: 181px;"
                              >
                                <span
                                  _ngcontent-ng-c3259544976=""
                                  class="button__body ng-star-inserted"
                                  >Shop AW25</span
                                >
                              </div></a
                            ></div
                          >
                        </div>
                      </div></text-overlay
                    >
                  </div>
                </div>
              </div>
            </div>
          </d></href
        ><shop-this-look _ngcontent-ng-c534717118=""><!----></shop-this-look>
      </div></page-component-hero-image
    >
  </div></icms-component
>`
  ), rt = `div:has(> .crs-winter-wrap) {
  display: flex !important;
  flex-direction: column;
  justify-content: center;
}

.crs-winter-container {
  padding: 2rem !important;
}

.crs-hero-title {
  color: rgb(255, 255, 255);
  font-size: 97px;
  line-height: 1;
  letter-spacing: 22px;
  margin-left: 11px;
}

.crs-hero-subtitle {
  color: rgb(255, 255, 255);
  font-size: 25px;
  line-height: 25px;
  letter-spacing: 11px;
  margin-left: 5.5px;
}

.crs-winter-wrap {
  margin-top: 4rem;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  gap: 4rem;
}


@media (max-width: 768px) {
  .crs-winter-wrap {
    flex-direction: column;
    gap: 2rem;
  }
}


.crs-winter-wrap > * {
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .crs-winter-wrap > * {
    transform: scale(1);
  }
}`, z = class z {
    constructor() {
      this.eventsAborter = null, this.resizeObserver = null, this.resizeAbortController = null, this.linkConfigs = [
        {
          selector: 'a[href="/lemieux-winter-sale"]',
          eventId: "exp_hp_hero_click_winter_sale",
          eventDesc: "Winter Sale"
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
    handleError(e, i) {
      const s = e instanceof Error ? e.message : String(e);
      q(`WinterSale ${i}: ${s}`, "error");
    }
    async render() {
      try {
        const e = await F(z.CONTAINER_SELECTOR);
        if (!e) {
          q(`Container ${z.CONTAINER_SELECTOR} not found`, "warn");
          return;
        }
        this.cleanupExistingSection(), this.insertSection(e), this.setupEventListeners(), this.setupResizeHandling(), this.setupVisibilityTracking();
      } catch (e) {
        this.handleError(e, "Rendering");
      }
    }
    cleanupExistingSection() {
      const e = document.querySelector(z.SECTION_SELECTOR);
      e && (this.eventsAborter && this.eventsAborter.abort(), e.remove());
    }
    insertSection(e) {
      const i = this.getVideoId(), s = at.replace("{{VIDEO_ID}}", i);
      e.insertAdjacentHTML(z.INSERTION_POSITION, s);
    }
    getVideoId() {
      return window.innerWidth <= z.MOBILE_BREAKPOINT ? z.MOBILE_VIDEO_ID : z.DESKTOP_VIDEO_ID;
    }
    setupResizeHandling() {
      this.resizeAbortController && this.resizeAbortController.abort(), this.resizeAbortController = new AbortController();
      let e = this.getVideoId();
      window.addEventListener(
        "resize",
        () => {
          const i = this.getVideoId();
          i !== e && (e = i, this.updateVideoId(i));
        },
        { signal: this.resizeAbortController.signal }
      );
    }
    updateVideoId(e) {
      const i = document.querySelector(
        ".crs-vimeo-iframe"
      );
      if (i) {
        const s = i.src.replace(/video\/\d+/, `video/${e}`);
        i.src = s;
      }
    }
    setupEventListeners() {
      this.eventsAborter && this.eventsAborter.abort(), this.eventsAborter = new AbortController(), this.linkConfigs.forEach((e) => {
        this.setupLinksForConfig(e);
      });
    }
    setupLinksForConfig(e) {
      const i = `${z.SECTION_SELECTOR} ${e.selector}`;
      document.querySelectorAll(i).forEach((n) => {
        this.attachClickListener(n, e);
      });
    }
    attachClickListener(e, i) {
      e.addEventListener(
        "click",
        (s) => {
          K(
            i.eventId,
            i.eventDesc,
            "click",
            "Home Page Winter Sale"
          ), i.isSpanNavigation && e.tagName.toLowerCase() === "span" && this.handleSpanNavigation(s, e);
        },
        { signal: this.eventsAborter.signal }
      );
    }
    handleSpanNavigation(e, i) {
      e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation();
      const s = i.getAttribute("href");
      s ? window.location.href = s : q("No href found for span navigation", "warn");
    }
    setupVisibilityTracking() {
      const e = document.querySelector(z.SECTION_SELECTOR);
      e && ee(
        e,
        "exp_hp_hero_view_winter_sale",
        "Home Page Winter Sale",
        "Visibility",
        z.VISIBILITY_THRESHOLD
      );
    }
    addStyles() {
      if (document.getElementById(z.STYLES_ID)) return;
      const e = document.createElement("style");
      e.id = z.STYLES_ID, e.textContent = rt, document.head.appendChild(e);
    }
    destroy() {
      this.eventsAborter && (this.eventsAborter.abort(), this.eventsAborter = null), this.resizeAbortController && (this.resizeAbortController.abort(), this.resizeAbortController = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
      const e = document.querySelector(z.SECTION_SELECTOR);
      e && e.remove();
    }
  };
  z.STYLES_ID = "crs-winter-sale-styles", z.CONTAINER_SELECTOR = ".crs-slider-section", z.INSERTION_POSITION = "afterend", z.SECTION_SELECTOR = ".crs-winter-sale-section", z.VISIBILITY_THRESHOLD = 0, z.DESKTOP_VIDEO_ID = "1153917875", z.MOBILE_VIDEO_ID = "1147990428", z.MOBILE_BREAKPOINT = 768;
  let he = z;
  const lt = (
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
  ), ot = `.crs-discipline-section .categories-carousel .swiper-slide {
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
  function Le(t) {
    return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object;
  }
  function me(t = {}, e = {}) {
    const i = ["__proto__", "constructor", "prototype"];
    Object.keys(e).filter((s) => i.indexOf(s) < 0).forEach((s) => {
      typeof t[s] > "u" ? t[s] = e[s] : Le(e[s]) && Le(t[s]) && Object.keys(e[s]).length > 0 && me(t[s], e[s]);
    });
  }
  const Pe = {
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
  function J() {
    const t = typeof document < "u" ? document : {};
    return me(t, Pe), t;
  }
  const ct = {
    document: Pe,
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
  function H() {
    const t = typeof window < "u" ? window : {};
    return me(t, ct), t;
  }
  function dt(t = "") {
    return t.trim().split(" ").filter((e) => !!e.trim());
  }
  function ut(t) {
    const e = t;
    Object.keys(e).forEach((i) => {
      try {
        e[i] = null;
      } catch {
      }
      try {
        delete e[i];
      } catch {
      }
    });
  }
  function Oe(t, e = 0) {
    return setTimeout(t, e);
  }
  function se() {
    return Date.now();
  }
  function pt(t) {
    const e = H();
    let i;
    return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i;
  }
  function ft(t, e = "x") {
    const i = H();
    let s, n, a;
    const l = pt(t);
    return i.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((o) => o.replace(",", ".")).join(", ")), a = new i.WebKitCSSMatrix(n === "none" ? "" : n)) : (a = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = a.toString().split(",")), e === "x" && (i.WebKitCSSMatrix ? n = a.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])), e === "y" && (i.WebKitCSSMatrix ? n = a.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])), n || 0;
  }
  function ne(t) {
    return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object";
  }
  function gt(t) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11);
  }
  function N(...t) {
    const e = Object(t[0]), i = ["__proto__", "constructor", "prototype"];
    for (let s = 1; s < t.length; s += 1) {
      const n = t[s];
      if (n != null && !gt(n)) {
        const a = Object.keys(Object(n)).filter((l) => i.indexOf(l) < 0);
        for (let l = 0, o = a.length; l < o; l += 1) {
          const r = a[l], u = Object.getOwnPropertyDescriptor(n, r);
          u !== void 0 && u.enumerable && (ne(e[r]) && ne(n[r]) ? n[r].__swiper__ ? e[r] = n[r] : N(e[r], n[r]) : !ne(e[r]) && ne(n[r]) ? (e[r] = {}, n[r].__swiper__ ? e[r] = n[r] : N(e[r], n[r])) : e[r] = n[r]);
        }
      }
    }
    return e;
  }
  function ae(t, e, i) {
    t.style.setProperty(e, i);
  }
  function ze({
    swiper: t,
    targetPosition: e,
    side: i
  }) {
    const s = H(), n = -t.translate;
    let a = null, l;
    const o = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
    const r = e > n ? "next" : "prev", u = (p, w) => r === "next" && p >= w || r === "prev" && p <= w, m = () => {
      l = (/* @__PURE__ */ new Date()).getTime(), a === null && (a = l);
      const p = Math.max(Math.min((l - a) / o, 1), 0), w = 0.5 - Math.cos(p * Math.PI) / 2;
      let d = n + w * (e - n);
      if (u(d, e) && (d = e), t.wrapperEl.scrollTo({
        [i]: d
      }), u(d, e)) {
        t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
            [i]: d
          });
        }), s.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = s.requestAnimationFrame(m);
    };
    m();
  }
  function Y(t, e = "") {
    const i = H(), s = [...t.children];
    return i.HTMLSlotElement && t instanceof HTMLSlotElement && s.push(...t.assignedElements()), e ? s.filter((n) => n.matches(e)) : s;
  }
  function ht(t, e) {
    const i = [e];
    for (; i.length > 0; ) {
      const s = i.shift();
      if (t === s)
        return !0;
      i.push(...s.children, ...s.shadowRoot ? s.shadowRoot.children : [], ...s.assignedElements ? s.assignedElements() : []);
    }
  }
  function mt(t, e) {
    const i = H();
    let s = e.contains(t);
    return !s && i.HTMLSlotElement && e instanceof HTMLSlotElement && (s = [...e.assignedElements()].includes(t), s || (s = ht(t, e))), s;
  }
  function re(t) {
    try {
      console.warn(t);
      return;
    } catch {
    }
  }
  function le(t, e = []) {
    const i = document.createElement(t);
    return i.classList.add(...Array.isArray(e) ? e : dt(e)), i;
  }
  function vt(t, e) {
    const i = [];
    for (; t.previousElementSibling; ) {
      const s = t.previousElementSibling;
      e ? s.matches(e) && i.push(s) : i.push(s), t = s;
    }
    return i;
  }
  function wt(t, e) {
    const i = [];
    for (; t.nextElementSibling; ) {
      const s = t.nextElementSibling;
      e ? s.matches(e) && i.push(s) : i.push(s), t = s;
    }
    return i;
  }
  function X(t, e) {
    return H().getComputedStyle(t, null).getPropertyValue(e);
  }
  function oe(t) {
    let e = t, i;
    if (e) {
      for (i = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (i += 1);
      return i;
    }
  }
  function Ae(t, e) {
    const i = [];
    let s = t.parentElement;
    for (; s; )
      e ? s.matches(e) && i.push(s) : i.push(s), s = s.parentElement;
    return i;
  }
  function ve(t, e, i) {
    const s = H();
    return t[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"));
  }
  function M(t) {
    return (Array.isArray(t) ? t : [t]).filter((e) => !!e);
  }
  function we(t, e = "") {
    typeof trustedTypes < "u" ? t.innerHTML = trustedTypes.createPolicy("html", {
      createHTML: (i) => i
    }).createHTML(e) : t.innerHTML = e;
  }
  let be;
  function bt() {
    const t = H(), e = J();
    return {
      smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
      touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
    };
  }
  function Me() {
    return be || (be = bt()), be;
  }
  let ye;
  function yt({
    userAgent: t
  } = {}) {
    const e = Me(), i = H(), s = i.navigator.platform, n = t || i.navigator.userAgent, a = {
      ios: !1,
      android: !1
    }, l = i.screen.width, o = i.screen.height, r = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = n.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
    const m = n.match(/(iPod)(.*OS\s([\d_]+))?/), p = !u && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), w = s === "Win32";
    let d = s === "MacIntel";
    const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !u && d && e.touch && g.indexOf(`${l}x${o}`) >= 0 && (u = n.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), d = !1), r && !w && (a.os = "android", a.android = !0), (u || p || m) && (a.os = "ios", a.ios = !0), a;
  }
  function Be(t = {}) {
    return ye || (ye = yt(t)), ye;
  }
  let xe;
  function xt() {
    const t = H(), e = Be();
    let i = !1;
    function s() {
      const o = t.navigator.userAgent.toLowerCase();
      return o.indexOf("safari") >= 0 && o.indexOf("chrome") < 0 && o.indexOf("android") < 0;
    }
    if (s()) {
      const o = String(t.navigator.userAgent);
      if (o.includes("Version/")) {
        const [r, u] = o.split("Version/")[1].split(" ")[0].split(".").map((m) => Number(m));
        i = r < 16 || r === 16 && u < 2;
      }
    }
    const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent), a = s(), l = a || n && e.ios;
    return {
      isSafari: i || a,
      needPerspectiveFix: i,
      need3dFix: l,
      isWebView: n
    };
  }
  function De() {
    return xe || (xe = xt()), xe;
  }
  function St({
    swiper: t,
    on: e,
    emit: i
  }) {
    const s = H();
    let n = null, a = null;
    const l = () => {
      !t || t.destroyed || !t.initialized || (i("beforeResize"), i("resize"));
    }, o = () => {
      !t || t.destroyed || !t.initialized || (n = new ResizeObserver((m) => {
        a = s.requestAnimationFrame(() => {
          const {
            width: p,
            height: w
          } = t;
          let d = p, g = w;
          m.forEach(({
            contentBoxSize: v,
            contentRect: _,
            target: c
          }) => {
            c && c !== t.el || (d = _ ? _.width : (v[0] || v).inlineSize, g = _ ? _.height : (v[0] || v).blockSize);
          }), (d !== p || g !== w) && l();
        });
      }), n.observe(t.el));
    }, r = () => {
      a && s.cancelAnimationFrame(a), n && n.unobserve && t.el && (n.unobserve(t.el), n = null);
    }, u = () => {
      !t || t.destroyed || !t.initialized || i("orientationchange");
    };
    e("init", () => {
      if (t.params.resizeObserver && typeof s.ResizeObserver < "u") {
        o();
        return;
      }
      s.addEventListener("resize", l), s.addEventListener("orientationchange", u);
    }), e("destroy", () => {
      r(), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", u);
    });
  }
  function _t({
    swiper: t,
    extendParams: e,
    on: i,
    emit: s
  }) {
    const n = [], a = H(), l = (u, m = {}) => {
      const p = a.MutationObserver || a.WebkitMutationObserver, w = new p((d) => {
        if (t.__preventObserver__) return;
        if (d.length === 1) {
          s("observerUpdate", d[0]);
          return;
        }
        const g = function() {
          s("observerUpdate", d[0]);
        };
        a.requestAnimationFrame ? a.requestAnimationFrame(g) : a.setTimeout(g, 0);
      });
      w.observe(u, {
        attributes: typeof m.attributes > "u" ? !0 : m.attributes,
        childList: t.isElement || (typeof m.childList > "u" ? !0 : m).childList,
        characterData: typeof m.characterData > "u" ? !0 : m.characterData
      }), n.push(w);
    }, o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const u = Ae(t.hostEl);
          for (let m = 0; m < u.length; m += 1)
            l(u[m]);
        }
        l(t.hostEl, {
          childList: t.params.observeSlideChildren
        }), l(t.wrapperEl, {
          attributes: !1
        });
      }
    }, r = () => {
      n.forEach((u) => {
        u.disconnect();
      }), n.splice(0, n.length);
    };
    e({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), i("init", o), i("destroy", r);
  }
  var Tt = {
    on(t, e, i) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
      const n = i ? "unshift" : "push";
      return t.split(" ").forEach((a) => {
        s.eventsListeners[a] || (s.eventsListeners[a] = []), s.eventsListeners[a][n](e);
      }), s;
    },
    once(t, e, i) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
      function n(...a) {
        s.off(t, n), n.__emitterProxy && delete n.__emitterProxy, e.apply(s, a);
      }
      return n.__emitterProxy = e, s.on(t, n, i);
    },
    onAny(t, e) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
      const s = e ? "unshift" : "push";
      return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i;
    },
    offAny(t) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const i = e.eventsAnyListeners.indexOf(t);
      return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
    },
    off(t, e) {
      const i = this;
      return !i.eventsListeners || i.destroyed || !i.eventsListeners || t.split(" ").forEach((s) => {
        typeof e > "u" ? i.eventsListeners[s] = [] : i.eventsListeners[s] && i.eventsListeners[s].forEach((n, a) => {
          (n === e || n.__emitterProxy && n.__emitterProxy === e) && i.eventsListeners[s].splice(a, 1);
        });
      }), i;
    },
    emit(...t) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
      let i, s, n;
      return typeof t[0] == "string" || Array.isArray(t[0]) ? (i = t[0], s = t.slice(1, t.length), n = e) : (i = t[0].events, s = t[0].data, n = t[0].context || e), s.unshift(n), (Array.isArray(i) ? i : i.split(" ")).forEach((l) => {
        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((o) => {
          o.apply(n, [l, ...s]);
        }), e.eventsListeners && e.eventsListeners[l] && e.eventsListeners[l].forEach((o) => {
          o.apply(n, s);
        });
      }), e;
    }
  };
  function Et() {
    const t = this;
    let e, i;
    const s = t.el;
    typeof t.params.width < "u" && t.params.width !== null ? e = t.params.width : e = s.clientWidth, typeof t.params.height < "u" && t.params.height !== null ? i = t.params.height : i = s.clientHeight, !(e === 0 && t.isHorizontal() || i === 0 && t.isVertical()) && (e = e - parseInt(X(s, "padding-left") || 0, 10) - parseInt(X(s, "padding-right") || 0, 10), i = i - parseInt(X(s, "padding-top") || 0, 10) - parseInt(X(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(i) && (i = 0), Object.assign(t, {
      width: e,
      height: i,
      size: t.isHorizontal() ? e : i
    }));
  }
  function Ct() {
    const t = this;
    function e(S, T) {
      return parseFloat(S.getPropertyValue(t.getDirectionLabel(T)) || 0);
    }
    const i = t.params, {
      wrapperEl: s,
      slidesEl: n,
      rtlTranslate: a,
      wrongRTL: l
    } = t, o = t.virtual && i.virtual.enabled, r = o ? t.virtual.slides.length : t.slides.length, u = Y(n, `.${t.params.slideClass}, swiper-slide`), m = o ? t.virtual.slides.length : u.length;
    let p = [];
    const w = [], d = [];
    let g = i.slidesOffsetBefore;
    typeof g == "function" && (g = i.slidesOffsetBefore.call(t));
    let v = i.slidesOffsetAfter;
    typeof v == "function" && (v = i.slidesOffsetAfter.call(t));
    const _ = t.snapGrid.length, c = t.slidesGrid.length, f = t.size - g - v;
    let h = i.spaceBetween, b = -g, x = 0, k = 0;
    if (typeof f > "u")
      return;
    typeof h == "string" && h.indexOf("%") >= 0 ? h = parseFloat(h.replace("%", "")) / 100 * f : typeof h == "string" && (h = parseFloat(h)), t.virtualSize = -h - g - v, u.forEach((S) => {
      a ? S.style.marginLeft = "" : S.style.marginRight = "", S.style.marginBottom = "", S.style.marginTop = "";
    }), i.centeredSlides && i.cssMode && (ae(s, "--swiper-centered-offset-before", ""), ae(s, "--swiper-centered-offset-after", ""));
    const C = i.grid && i.grid.rows > 1 && t.grid;
    C ? t.grid.initSlides(u) : t.grid && t.grid.unsetSlides();
    let y;
    const P = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter((S) => typeof i.breakpoints[S].slidesPerView < "u").length > 0;
    for (let S = 0; S < m; S += 1) {
      y = 0;
      const T = u[S];
      if (!(T && (C && t.grid.updateSlide(S, T, u), X(T, "display") === "none"))) {
        if (o && i.slidesPerView === "auto")
          i.virtual.slidesPerViewAutoSlideSize && (y = i.virtual.slidesPerViewAutoSlideSize), y && T && (i.roundLengths && (y = Math.floor(y)), T.style[t.getDirectionLabel("width")] = `${y}px`);
        else if (i.slidesPerView === "auto") {
          P && (T.style[t.getDirectionLabel("width")] = "");
          const E = getComputedStyle(T), L = T.style.transform, O = T.style.webkitTransform;
          if (L && (T.style.transform = "none"), O && (T.style.webkitTransform = "none"), i.roundLengths)
            y = t.isHorizontal() ? ve(T, "width") : ve(T, "height");
          else {
            const D = e(E, "width"), Ye = e(E, "padding-left"), Z = e(E, "padding-right"), I = e(E, "margin-left"), B = e(E, "margin-right"), G = E.getPropertyValue("box-sizing");
            if (G && G === "border-box")
              y = D + I + B;
            else {
              const {
                clientWidth: U,
                offsetWidth: Oi
              } = T;
              y = D + Ye + Z + I + B + (Oi - U);
            }
          }
          L && (T.style.transform = L), O && (T.style.webkitTransform = O), i.roundLengths && (y = Math.floor(y));
        } else
          y = (f - (i.slidesPerView - 1) * h) / i.slidesPerView, i.roundLengths && (y = Math.floor(y)), T && (T.style[t.getDirectionLabel("width")] = `${y}px`);
        T && (T.swiperSlideSize = y), d.push(y), i.centeredSlides ? (b = b + y / 2 + x / 2 + h, x === 0 && S !== 0 && (b = b - f / 2 - h), S === 0 && (b = b - f / 2 - h), Math.abs(b) < 1 / 1e3 && (b = 0), i.roundLengths && (b = Math.floor(b)), k % i.slidesPerGroup === 0 && p.push(b), w.push(b)) : (i.roundLengths && (b = Math.floor(b)), (k - Math.min(t.params.slidesPerGroupSkip, k)) % t.params.slidesPerGroup === 0 && p.push(b), w.push(b), b = b + y + h), t.virtualSize += y + h, x = y, k += 1;
      }
    }
    if (t.virtualSize = Math.max(t.virtualSize, f) + v, a && l && (i.effect === "slide" || i.effect === "coverflow") && (s.style.width = `${t.virtualSize + h}px`), i.setWrapperSize && (s.style[t.getDirectionLabel("width")] = `${t.virtualSize + h}px`), C && t.grid.updateWrapperSize(y, p), !i.centeredSlides) {
      const S = [];
      for (let T = 0; T < p.length; T += 1) {
        let E = p[T];
        i.roundLengths && (E = Math.floor(E)), p[T] <= t.virtualSize - f && S.push(E);
      }
      p = S, Math.floor(t.virtualSize - f) - Math.floor(p[p.length - 1]) > 1 && p.push(t.virtualSize - f);
    }
    if (o && i.loop) {
      const S = d[0] + h;
      if (i.slidesPerGroup > 1) {
        const T = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup), E = S * i.slidesPerGroup;
        for (let L = 0; L < T; L += 1)
          p.push(p[p.length - 1] + E);
      }
      for (let T = 0; T < t.virtual.slidesBefore + t.virtual.slidesAfter; T += 1)
        i.slidesPerGroup === 1 && p.push(p[p.length - 1] + S), w.push(w[w.length - 1] + S), t.virtualSize += S;
    }
    if (p.length === 0 && (p = [0]), h !== 0) {
      const S = t.isHorizontal() && a ? "marginLeft" : t.getDirectionLabel("marginRight");
      u.filter((T, E) => !i.cssMode || i.loop ? !0 : E !== u.length - 1).forEach((T) => {
        T.style[S] = `${h}px`;
      });
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
      let S = 0;
      d.forEach((E) => {
        S += E + (h || 0);
      }), S -= h;
      const T = S > f ? S - f : 0;
      p = p.map((E) => E <= 0 ? -g : E > T ? T + v : E);
    }
    if (i.centerInsufficientSlides) {
      let S = 0;
      d.forEach((E) => {
        S += E + (h || 0);
      }), S -= h;
      const T = (g || 0) + (v || 0);
      if (S + T < f) {
        const E = (f - S - T) / 2;
        p.forEach((L, O) => {
          p[O] = L - E;
        }), w.forEach((L, O) => {
          w[O] = L + E;
        });
      }
    }
    if (Object.assign(t, {
      slides: u,
      snapGrid: p,
      slidesGrid: w,
      slidesSizesGrid: d
    }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
      ae(s, "--swiper-centered-offset-before", `${-p[0]}px`), ae(s, "--swiper-centered-offset-after", `${t.size / 2 - d[d.length - 1] / 2}px`);
      const S = -t.snapGrid[0], T = -t.slidesGrid[0];
      t.snapGrid = t.snapGrid.map((E) => E + S), t.slidesGrid = t.slidesGrid.map((E) => E + T);
    }
    if (m !== r && t.emit("slidesLengthChange"), p.length !== _ && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), w.length !== c && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !o && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
      const S = `${i.containerModifierClass}backface-hidden`, T = t.el.classList.contains(S);
      m <= i.maxBackfaceHiddenSlides ? T || t.el.classList.add(S) : T && t.el.classList.remove(S);
    }
  }
  function kt(t) {
    const e = this, i = [], s = e.virtual && e.params.virtual.enabled;
    let n = 0, a;
    typeof t == "number" ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
    const l = (o) => s ? e.slides[e.getSlideIndexByData(o)] : e.slides[o];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((o) => {
          i.push(o);
        });
      else
        for (a = 0; a < Math.ceil(e.params.slidesPerView); a += 1) {
          const o = e.activeIndex + a;
          if (o > e.slides.length && !s) break;
          i.push(l(o));
        }
    else
      i.push(l(e.activeIndex));
    for (a = 0; a < i.length; a += 1)
      if (typeof i[a] < "u") {
        const o = i[a].offsetHeight;
        n = o > n ? o : n;
      }
    (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
  }
  function It() {
    const t = this, e = t.slides, i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1)
      e[s].swiperSlideOffset = (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - i - t.cssOverflowAdjustment();
  }
  const qe = (t, e, i) => {
    e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i);
  };
  function Lt(t = this && this.translate || 0) {
    const e = this, i = e.params, {
      slides: s,
      rtlTranslate: n,
      snapGrid: a
    } = e;
    if (s.length === 0) return;
    typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let l = -t;
    n && (l = t), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let o = i.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : typeof o == "string" && (o = parseFloat(o));
    for (let r = 0; r < s.length; r += 1) {
      const u = s[r];
      let m = u.swiperSlideOffset;
      i.cssMode && i.centeredSlides && (m -= s[0].swiperSlideOffset);
      const p = (l + (i.centeredSlides ? e.minTranslate() : 0) - m) / (u.swiperSlideSize + o), w = (l - a[0] + (i.centeredSlides ? e.minTranslate() : 0) - m) / (u.swiperSlideSize + o), d = -(l - m), g = d + e.slidesSizesGrid[r], v = d >= 0 && d <= e.size - e.slidesSizesGrid[r], _ = d >= 0 && d < e.size - 1 || g > 1 && g <= e.size || d <= 0 && g >= e.size;
      _ && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(r)), qe(u, _, i.slideVisibleClass), qe(u, v, i.slideFullyVisibleClass), u.progress = n ? -p : p, u.originalProgress = n ? -w : w;
    }
  }
  function Pt(t) {
    const e = this;
    if (typeof t > "u") {
      const m = e.rtlTranslate ? -1 : 1;
      t = e && e.translate && e.translate * m || 0;
    }
    const i = e.params, s = e.maxTranslate() - e.minTranslate();
    let {
      progress: n,
      isBeginning: a,
      isEnd: l,
      progressLoop: o
    } = e;
    const r = a, u = l;
    if (s === 0)
      n = 0, a = !0, l = !0;
    else {
      n = (t - e.minTranslate()) / s;
      const m = Math.abs(t - e.minTranslate()) < 1, p = Math.abs(t - e.maxTranslate()) < 1;
      a = m || n <= 0, l = p || n >= 1, m && (n = 0), p && (n = 1);
    }
    if (i.loop) {
      const m = e.getSlideIndexByData(0), p = e.getSlideIndexByData(e.slides.length - 1), w = e.slidesGrid[m], d = e.slidesGrid[p], g = e.slidesGrid[e.slidesGrid.length - 1], v = Math.abs(t);
      v >= w ? o = (v - w) / g : o = (v + g - d) / g, o > 1 && (o -= 1);
    }
    Object.assign(e, {
      progress: n,
      progressLoop: o,
      isBeginning: a,
      isEnd: l
    }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t), a && !r && e.emit("reachBeginning toEdge"), l && !u && e.emit("reachEnd toEdge"), (r && !a || u && !l) && e.emit("fromEdge"), e.emit("progress", n);
  }
  const Se = (t, e, i) => {
    e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i);
  };
  function Ot() {
    const t = this, {
      slides: e,
      params: i,
      slidesEl: s,
      activeIndex: n
    } = t, a = t.virtual && i.virtual.enabled, l = t.grid && i.grid && i.grid.rows > 1, o = (p) => Y(s, `.${i.slideClass}${p}, swiper-slide${p}`)[0];
    let r, u, m;
    if (a)
      if (i.loop) {
        let p = n - t.virtual.slidesBefore;
        p < 0 && (p = t.virtual.slides.length + p), p >= t.virtual.slides.length && (p -= t.virtual.slides.length), r = o(`[data-swiper-slide-index="${p}"]`);
      } else
        r = o(`[data-swiper-slide-index="${n}"]`);
    else
      l ? (r = e.find((p) => p.column === n), m = e.find((p) => p.column === n + 1), u = e.find((p) => p.column === n - 1)) : r = e[n];
    r && (l || (m = wt(r, `.${i.slideClass}, swiper-slide`)[0], i.loop && !m && (m = e[0]), u = vt(r, `.${i.slideClass}, swiper-slide`)[0], i.loop && !u === 0 && (u = e[e.length - 1]))), e.forEach((p) => {
      Se(p, p === r, i.slideActiveClass), Se(p, p === m, i.slideNextClass), Se(p, p === u, i.slidePrevClass);
    }), t.emitSlidesClasses();
  }
  const ce = (t, e) => {
    if (!t || t.destroyed || !t.params) return;
    const i = () => t.isElement ? "swiper-slide" : `.${t.params.slideClass}`, s = e.closest(i());
    if (s) {
      let n = s.querySelector(`.${t.params.lazyPreloaderClass}`);
      !n && t.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        s.shadowRoot && (n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`), n && n.remove());
      })), n && n.remove();
    }
  }, _e = (t, e) => {
    if (!t.slides[e]) return;
    const i = t.slides[e].querySelector('[loading="lazy"]');
    i && i.removeAttribute("loading");
  }, Te = (t) => {
    if (!t || t.destroyed || !t.params) return;
    let e = t.params.lazyPreloadPrevNext;
    const i = t.slides.length;
    if (!i || !e || e < 0) return;
    e = Math.min(e, i);
    const s = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView), n = t.activeIndex;
    if (t.params.grid && t.params.grid.rows > 1) {
      const l = n, o = [l - e];
      o.push(...Array.from({
        length: e
      }).map((r, u) => l + s + u)), t.slides.forEach((r, u) => {
        o.includes(r.column) && _e(t, u);
      });
      return;
    }
    const a = n + s - 1;
    if (t.params.rewind || t.params.loop)
      for (let l = n - e; l <= a + e; l += 1) {
        const o = (l % i + i) % i;
        (o < n || o > a) && _e(t, o);
      }
    else
      for (let l = Math.max(n - e, 0); l <= Math.min(a + e, i - 1); l += 1)
        l !== n && (l > a || l < n) && _e(t, l);
  };
  function zt(t) {
    const {
      slidesGrid: e,
      params: i
    } = t, s = t.rtlTranslate ? t.translate : -t.translate;
    let n;
    for (let a = 0; a < e.length; a += 1)
      typeof e[a + 1] < "u" ? s >= e[a] && s < e[a + 1] - (e[a + 1] - e[a]) / 2 ? n = a : s >= e[a] && s < e[a + 1] && (n = a + 1) : s >= e[a] && (n = a);
    return i.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
  }
  function At(t) {
    const e = this, i = e.rtlTranslate ? e.translate : -e.translate, {
      snapGrid: s,
      params: n,
      activeIndex: a,
      realIndex: l,
      snapIndex: o
    } = e;
    let r = t, u;
    const m = (d) => {
      let g = d - e.virtual.slidesBefore;
      return g < 0 && (g = e.virtual.slides.length + g), g >= e.virtual.slides.length && (g -= e.virtual.slides.length), g;
    };
    if (typeof r > "u" && (r = zt(e)), s.indexOf(i) >= 0)
      u = s.indexOf(i);
    else {
      const d = Math.min(n.slidesPerGroupSkip, r);
      u = d + Math.floor((r - d) / n.slidesPerGroup);
    }
    if (u >= s.length && (u = s.length - 1), r === a && !e.params.loop) {
      u !== o && (e.snapIndex = u, e.emit("snapIndexChange"));
      return;
    }
    if (r === a && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = m(r);
      return;
    }
    const p = e.grid && n.grid && n.grid.rows > 1;
    let w;
    if (e.virtual && n.virtual.enabled && n.loop)
      w = m(r);
    else if (p) {
      const d = e.slides.find((v) => v.column === r);
      let g = parseInt(d.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(g) && (g = Math.max(e.slides.indexOf(d), 0)), w = Math.floor(g / n.grid.rows);
    } else if (e.slides[r]) {
      const d = e.slides[r].getAttribute("data-swiper-slide-index");
      d ? w = parseInt(d, 10) : w = r;
    } else
      w = r;
    Object.assign(e, {
      previousSnapIndex: o,
      snapIndex: u,
      previousRealIndex: l,
      realIndex: w,
      previousIndex: a,
      activeIndex: r
    }), e.initialized && Te(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (l !== w && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function Mt(t, e) {
    const i = this, s = i.params;
    let n = t.closest(`.${s.slideClass}, swiper-slide`);
    !n && i.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach((o) => {
      !n && o.matches && o.matches(`.${s.slideClass}, swiper-slide`) && (n = o);
    });
    let a = !1, l;
    if (n) {
      for (let o = 0; o < i.slides.length; o += 1)
        if (i.slides[o] === n) {
          a = !0, l = o;
          break;
        }
    }
    if (n && a)
      i.clickedSlide = n, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = l;
    else {
      i.clickedSlide = void 0, i.clickedIndex = void 0;
      return;
    }
    s.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide();
  }
  var Bt = {
    updateSize: Et,
    updateSlides: Ct,
    updateAutoHeight: kt,
    updateSlidesOffset: It,
    updateSlidesProgress: Lt,
    updateProgress: Pt,
    updateSlidesClasses: Ot,
    updateActiveIndex: At,
    updateClickedSlide: Mt
  };
  function Dt(t = this.isHorizontal() ? "x" : "y") {
    const e = this, {
      params: i,
      rtlTranslate: s,
      translate: n,
      wrapperEl: a
    } = e;
    if (i.virtualTranslate)
      return s ? -n : n;
    if (i.cssMode)
      return n;
    let l = ft(a, t);
    return l += e.cssOverflowAdjustment(), s && (l = -l), l || 0;
  }
  function qt(t, e) {
    const i = this, {
      rtlTranslate: s,
      params: n,
      wrapperEl: a,
      progress: l
    } = i;
    let o = 0, r = 0;
    const u = 0;
    i.isHorizontal() ? o = s ? -t : t : r = t, n.roundLengths && (o = Math.floor(o), r = Math.floor(r)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : r, n.cssMode ? a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -r : n.virtualTranslate || (i.isHorizontal() ? o -= i.cssOverflowAdjustment() : r -= i.cssOverflowAdjustment(), a.style.transform = `translate3d(${o}px, ${r}px, ${u}px)`);
    let m;
    const p = i.maxTranslate() - i.minTranslate();
    p === 0 ? m = 0 : m = (t - i.minTranslate()) / p, m !== l && i.updateProgress(t), i.emit("setTranslate", i.translate, e);
  }
  function Ht() {
    return -this.snapGrid[0];
  }
  function $t() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Gt(t = 0, e = this.params.speed, i = !0, s = !0, n) {
    const a = this, {
      params: l,
      wrapperEl: o
    } = a;
    if (a.animating && l.preventInteractionOnTransition)
      return !1;
    const r = a.minTranslate(), u = a.maxTranslate();
    let m;
    if (s && t > r ? m = r : s && t < u ? m = u : m = t, a.updateProgress(m), l.cssMode) {
      const p = a.isHorizontal();
      if (e === 0)
        o[p ? "scrollLeft" : "scrollTop"] = -m;
      else {
        if (!a.support.smoothScroll)
          return ze({
            swiper: a,
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
    return e === 0 ? (a.setTransition(0), a.setTranslate(m), i && (a.emit("beforeTransitionStart", e, n), a.emit("transitionEnd"))) : (a.setTransition(e), a.setTranslate(m), i && (a.emit("beforeTransitionStart", e, n), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(w) {
      !a || a.destroyed || w.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, a.animating = !1, i && a.emit("transitionEnd"));
    }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0;
  }
  var Nt = {
    getTranslate: Dt,
    setTranslate: qt,
    minTranslate: Ht,
    maxTranslate: $t,
    translateTo: Gt
  };
  function Vt(t, e) {
    const i = this;
    i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${t}ms`, i.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : ""), i.emit("setTransition", t, e);
  }
  function He({
    swiper: t,
    runCallbacks: e,
    direction: i,
    step: s
  }) {
    const {
      activeIndex: n,
      previousIndex: a
    } = t;
    let l = i;
    l || (n > a ? l = "next" : n < a ? l = "prev" : l = "reset"), t.emit(`transition${s}`), e && l === "reset" ? t.emit(`slideResetTransition${s}`) : e && n !== a && (t.emit(`slideChangeTransition${s}`), l === "next" ? t.emit(`slideNextTransition${s}`) : t.emit(`slidePrevTransition${s}`));
  }
  function Rt(t = !0, e) {
    const i = this, {
      params: s
    } = i;
    s.cssMode || (s.autoHeight && i.updateAutoHeight(), He({
      swiper: i,
      runCallbacks: t,
      direction: e,
      step: "Start"
    }));
  }
  function jt(t = !0, e) {
    const i = this, {
      params: s
    } = i;
    i.animating = !1, !s.cssMode && (i.setTransition(0), He({
      swiper: i,
      runCallbacks: t,
      direction: e,
      step: "End"
    }));
  }
  var Ft = {
    setTransition: Vt,
    transitionStart: Rt,
    transitionEnd: jt
  };
  function Yt(t = 0, e, i = !0, s, n) {
    typeof t == "string" && (t = parseInt(t, 10));
    const a = this;
    let l = t;
    l < 0 && (l = 0);
    const {
      params: o,
      snapGrid: r,
      slidesGrid: u,
      previousIndex: m,
      activeIndex: p,
      rtlTranslate: w,
      wrapperEl: d,
      enabled: g
    } = a;
    if (!g && !s && !n || a.destroyed || a.animating && o.preventInteractionOnTransition)
      return !1;
    typeof e > "u" && (e = a.params.speed);
    const v = Math.min(a.params.slidesPerGroupSkip, l);
    let _ = v + Math.floor((l - v) / a.params.slidesPerGroup);
    _ >= r.length && (_ = r.length - 1);
    const c = -r[_];
    if (o.normalizeSlideIndex)
      for (let C = 0; C < u.length; C += 1) {
        const y = -Math.floor(c * 100), P = Math.floor(u[C] * 100), S = Math.floor(u[C + 1] * 100);
        typeof u[C + 1] < "u" ? y >= P && y < S - (S - P) / 2 ? l = C : y >= P && y < S && (l = C + 1) : y >= P && (l = C);
      }
    if (a.initialized && l !== p && (!a.allowSlideNext && (w ? c > a.translate && c > a.minTranslate() : c < a.translate && c < a.minTranslate()) || !a.allowSlidePrev && c > a.translate && c > a.maxTranslate() && (p || 0) !== l))
      return !1;
    l !== (m || 0) && i && a.emit("beforeSlideChangeStart"), a.updateProgress(c);
    let f;
    l > p ? f = "next" : l < p ? f = "prev" : f = "reset";
    const h = a.virtual && a.params.virtual.enabled;
    if (!(h && n) && (w && -c === a.translate || !w && c === a.translate))
      return a.updateActiveIndex(l), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), o.effect !== "slide" && a.setTranslate(c), f !== "reset" && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1;
    if (o.cssMode) {
      const C = a.isHorizontal(), y = w ? c : -c;
      if (e === 0)
        h && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), h && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
          d[C ? "scrollLeft" : "scrollTop"] = y;
        })) : d[C ? "scrollLeft" : "scrollTop"] = y, h && requestAnimationFrame(() => {
          a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1;
        });
      else {
        if (!a.support.smoothScroll)
          return ze({
            swiper: a,
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
    const k = De().isSafari;
    return h && !n && k && a.isElement && a.virtual.update(!1, !1, l), a.setTransition(e), a.setTranslate(c), a.updateActiveIndex(l), a.updateSlidesClasses(), a.emit("beforeTransitionStart", e, s), a.transitionStart(i, f), e === 0 ? a.transitionEnd(i, f) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(y) {
      !a || a.destroyed || y.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, f));
    }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0;
  }
  function Wt(t = 0, e, i = !0, s) {
    typeof t == "string" && (t = parseInt(t, 10));
    const n = this;
    if (n.destroyed) return;
    typeof e > "u" && (e = n.params.speed);
    const a = n.grid && n.params.grid && n.params.grid.rows > 1;
    let l = t;
    if (n.params.loop)
      if (n.virtual && n.params.virtual.enabled)
        l = l + n.virtual.slidesBefore;
      else {
        let o;
        if (a) {
          const v = l * n.params.grid.rows;
          o = n.slides.find((_) => _.getAttribute("data-swiper-slide-index") * 1 === v).column;
        } else
          o = n.getSlideIndexByData(l);
        const r = a ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, {
          centeredSlides: u,
          slidesOffsetBefore: m,
          slidesOffsetAfter: p
        } = n.params, w = u || !!m || !!p;
        let d = n.params.slidesPerView;
        d === "auto" ? d = n.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(n.params.slidesPerView, 10)), w && d % 2 === 0 && (d = d + 1));
        let g = r - o < d;
        if (w && (g = g || o < Math.ceil(d / 2)), s && w && n.params.slidesPerView !== "auto" && !a && (g = !1), g) {
          const v = w ? o < n.activeIndex ? "prev" : "next" : o - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
          n.loopFix({
            direction: v,
            slideTo: !0,
            activeSlideIndex: v === "next" ? o + 1 : o - r + 1,
            slideRealIndex: v === "next" ? n.realIndex : void 0
          });
        }
        if (a) {
          const v = l * n.params.grid.rows;
          l = n.slides.find((_) => _.getAttribute("data-swiper-slide-index") * 1 === v).column;
        } else
          l = n.getSlideIndexByData(l);
      }
    return requestAnimationFrame(() => {
      n.slideTo(l, e, i, s);
    }), n;
  }
  function Xt(t, e = !0, i) {
    const s = this, {
      enabled: n,
      params: a,
      animating: l
    } = s;
    if (!n || s.destroyed) return s;
    typeof t > "u" && (t = s.params.speed);
    let o = a.slidesPerGroup;
    a.slidesPerView === "auto" && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const r = s.activeIndex < a.slidesPerGroupSkip ? 1 : o, u = s.virtual && a.virtual.enabled;
    if (a.loop) {
      if (l && !u && a.loopPreventsSliding) return !1;
      if (s.loopFix({
        direction: "next"
      }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && a.cssMode)
        return requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + r, t, e, i);
        }), !0;
    }
    return a.rewind && s.isEnd ? s.slideTo(0, t, e, i) : s.slideTo(s.activeIndex + r, t, e, i);
  }
  function Ut(t, e = !0, i) {
    const s = this, {
      params: n,
      snapGrid: a,
      slidesGrid: l,
      rtlTranslate: o,
      enabled: r,
      animating: u
    } = s;
    if (!r || s.destroyed) return s;
    typeof t > "u" && (t = s.params.speed);
    const m = s.virtual && n.virtual.enabled;
    if (n.loop) {
      if (u && !m && n.loopPreventsSliding) return !1;
      s.loopFix({
        direction: "prev"
      }), s._clientLeft = s.wrapperEl.clientLeft;
    }
    const p = o ? s.translate : -s.translate;
    function w(f) {
      return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f);
    }
    const d = w(p), g = a.map((f) => w(f)), v = n.freeMode && n.freeMode.enabled;
    let _ = a[g.indexOf(d) - 1];
    if (typeof _ > "u" && (n.cssMode || v)) {
      let f;
      a.forEach((h, b) => {
        d >= h && (f = b);
      }), typeof f < "u" && (_ = v ? a[f] : a[f > 0 ? f - 1 : f]);
    }
    let c = 0;
    if (typeof _ < "u" && (c = l.indexOf(_), c < 0 && (c = s.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (c = c - s.slidesPerViewDynamic("previous", !0) + 1, c = Math.max(c, 0))), n.rewind && s.isBeginning) {
      const f = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
      return s.slideTo(f, t, e, i);
    } else if (n.loop && s.activeIndex === 0 && n.cssMode)
      return requestAnimationFrame(() => {
        s.slideTo(c, t, e, i);
      }), !0;
    return s.slideTo(c, t, e, i);
  }
  function Kt(t, e = !0, i) {
    const s = this;
    if (!s.destroyed)
      return typeof t > "u" && (t = s.params.speed), s.slideTo(s.activeIndex, t, e, i);
  }
  function Jt(t, e = !0, i, s = 0.5) {
    const n = this;
    if (n.destroyed) return;
    typeof t > "u" && (t = n.params.speed);
    let a = n.activeIndex;
    const l = Math.min(n.params.slidesPerGroupSkip, a), o = l + Math.floor((a - l) / n.params.slidesPerGroup), r = n.rtlTranslate ? n.translate : -n.translate;
    if (r >= n.snapGrid[o]) {
      const u = n.snapGrid[o], m = n.snapGrid[o + 1];
      r - u > (m - u) * s && (a += n.params.slidesPerGroup);
    } else {
      const u = n.snapGrid[o - 1], m = n.snapGrid[o];
      r - u <= (m - u) * s && (a -= n.params.slidesPerGroup);
    }
    return a = Math.max(a, 0), a = Math.min(a, n.slidesGrid.length - 1), n.slideTo(a, t, e, i);
  }
  function Zt() {
    const t = this;
    if (t.destroyed) return;
    const {
      params: e,
      slidesEl: i
    } = t, s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
    let n = t.getSlideIndexWhenGrid(t.clickedIndex), a;
    const l = t.isElement ? "swiper-slide" : `.${e.slideClass}`, o = t.grid && t.params.grid && t.params.grid.rows > 1;
    if (e.loop) {
      if (t.animating) return;
      a = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? t.slideToLoop(a) : n > (o ? (t.slides.length - s) / 2 - (t.params.grid.rows - 1) : t.slides.length - s) ? (t.loopFix(), n = t.getSlideIndex(Y(i, `${l}[data-swiper-slide-index="${a}"]`)[0]), Oe(() => {
        t.slideTo(n);
      })) : t.slideTo(n);
    } else
      t.slideTo(n);
  }
  var Qt = {
    slideTo: Yt,
    slideToLoop: Wt,
    slideNext: Xt,
    slidePrev: Ut,
    slideReset: Kt,
    slideToClosest: Jt,
    slideToClickedSlide: Zt
  };
  function ei(t, e) {
    const i = this, {
      params: s,
      slidesEl: n
    } = i;
    if (!s.loop || i.virtual && i.params.virtual.enabled) return;
    const a = () => {
      Y(n, `.${s.slideClass}, swiper-slide`).forEach((g, v) => {
        g.setAttribute("data-swiper-slide-index", v);
      });
    }, l = () => {
      const d = Y(n, `.${s.slideBlankClass}`);
      d.forEach((g) => {
        g.remove();
      }), d.length > 0 && (i.recalcSlides(), i.updateSlides());
    }, o = i.grid && s.grid && s.grid.rows > 1;
    s.loopAddBlankSlides && (s.slidesPerGroup > 1 || o) && l();
    const r = s.slidesPerGroup * (o ? s.grid.rows : 1), u = i.slides.length % r !== 0, m = o && i.slides.length % s.grid.rows !== 0, p = (d) => {
      for (let g = 0; g < d; g += 1) {
        const v = i.isElement ? le("swiper-slide", [s.slideBlankClass]) : le("div", [s.slideClass, s.slideBlankClass]);
        i.slidesEl.append(v);
      }
    };
    if (u) {
      if (s.loopAddBlankSlides) {
        const d = r - i.slides.length % r;
        p(d), i.recalcSlides(), i.updateSlides();
      } else
        re("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      a();
    } else if (m) {
      if (s.loopAddBlankSlides) {
        const d = s.grid.rows - i.slides.length % s.grid.rows;
        p(d), i.recalcSlides(), i.updateSlides();
      } else
        re("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      a();
    } else
      a();
    const w = s.centeredSlides || !!s.slidesOffsetBefore || !!s.slidesOffsetAfter;
    i.loopFix({
      slideRealIndex: t,
      direction: w ? void 0 : "next",
      initial: e
    });
  }
  function ti({
    slideRealIndex: t,
    slideTo: e = !0,
    direction: i,
    setTranslate: s,
    activeSlideIndex: n,
    initial: a,
    byController: l,
    byMousewheel: o
  } = {}) {
    const r = this;
    if (!r.params.loop) return;
    r.emit("beforeLoopFix");
    const {
      slides: u,
      allowSlidePrev: m,
      allowSlideNext: p,
      slidesEl: w,
      params: d
    } = r, {
      centeredSlides: g,
      slidesOffsetBefore: v,
      slidesOffsetAfter: _,
      initialSlide: c
    } = d, f = g || !!v || !!_;
    if (r.allowSlidePrev = !0, r.allowSlideNext = !0, r.virtual && d.virtual.enabled) {
      e && (!f && r.snapIndex === 0 ? r.slideTo(r.virtual.slides.length, 0, !1, !0) : f && r.snapIndex < d.slidesPerView ? r.slideTo(r.virtual.slides.length + r.snapIndex, 0, !1, !0) : r.snapIndex === r.snapGrid.length - 1 && r.slideTo(r.virtual.slidesBefore, 0, !1, !0)), r.allowSlidePrev = m, r.allowSlideNext = p, r.emit("loopFix");
      return;
    }
    let h = d.slidesPerView;
    h === "auto" ? h = r.slidesPerViewDynamic() : (h = Math.ceil(parseFloat(d.slidesPerView, 10)), f && h % 2 === 0 && (h = h + 1));
    const b = d.slidesPerGroupAuto ? h : d.slidesPerGroup;
    let x = f ? Math.max(b, Math.ceil(h / 2)) : b;
    x % b !== 0 && (x += b - x % b), x += d.loopAdditionalSlides, r.loopedSlides = x;
    const k = r.grid && d.grid && d.grid.rows > 1;
    u.length < h + x || r.params.effect === "cards" && u.length < h + x * 2 ? re("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : k && d.grid.fill === "row" && re("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const C = [], y = [], P = k ? Math.ceil(u.length / d.grid.rows) : u.length, S = a && P - c < h && !f;
    let T = S ? c : r.activeIndex;
    typeof n > "u" ? n = r.getSlideIndex(u.find((I) => I.classList.contains(d.slideActiveClass))) : T = n;
    const E = i === "next" || !i, L = i === "prev" || !i;
    let O = 0, D = 0;
    const Z = (k ? u[n].column : n) + (f && typeof s > "u" ? -h / 2 + 0.5 : 0);
    if (Z < x) {
      O = Math.max(x - Z, b);
      for (let I = 0; I < x - Z; I += 1) {
        const B = I - Math.floor(I / P) * P;
        if (k) {
          const G = P - B - 1;
          for (let U = u.length - 1; U >= 0; U -= 1)
            u[U].column === G && C.push(U);
        } else
          C.push(P - B - 1);
      }
    } else if (Z + h > P - x) {
      D = Math.max(Z - (P - x * 2), b), S && (D = Math.max(D, h - P + c + 1));
      for (let I = 0; I < D; I += 1) {
        const B = I - Math.floor(I / P) * P;
        k ? u.forEach((G, U) => {
          G.column === B && y.push(U);
        }) : y.push(B);
      }
    }
    if (r.__preventObserver__ = !0, requestAnimationFrame(() => {
      r.__preventObserver__ = !1;
    }), r.params.effect === "cards" && u.length < h + x * 2 && (y.includes(n) && y.splice(y.indexOf(n), 1), C.includes(n) && C.splice(C.indexOf(n), 1)), L && C.forEach((I) => {
      u[I].swiperLoopMoveDOM = !0, w.prepend(u[I]), u[I].swiperLoopMoveDOM = !1;
    }), E && y.forEach((I) => {
      u[I].swiperLoopMoveDOM = !0, w.append(u[I]), u[I].swiperLoopMoveDOM = !1;
    }), r.recalcSlides(), d.slidesPerView === "auto" ? r.updateSlides() : k && (C.length > 0 && L || y.length > 0 && E) && r.slides.forEach((I, B) => {
      r.grid.updateSlide(B, I, r.slides);
    }), d.watchSlidesProgress && r.updateSlidesOffset(), e) {
      if (C.length > 0 && L) {
        if (typeof t > "u") {
          const I = r.slidesGrid[T], G = r.slidesGrid[T + O] - I;
          o ? r.setTranslate(r.translate - G) : (r.slideTo(T + Math.ceil(O), 0, !1, !0), s && (r.touchEventsData.startTranslate = r.touchEventsData.startTranslate - G, r.touchEventsData.currentTranslate = r.touchEventsData.currentTranslate - G));
        } else if (s) {
          const I = k ? C.length / d.grid.rows : C.length;
          r.slideTo(r.activeIndex + I, 0, !1, !0), r.touchEventsData.currentTranslate = r.translate;
        }
      } else if (y.length > 0 && E)
        if (typeof t > "u") {
          const I = r.slidesGrid[T], G = r.slidesGrid[T - D] - I;
          o ? r.setTranslate(r.translate - G) : (r.slideTo(T - D, 0, !1, !0), s && (r.touchEventsData.startTranslate = r.touchEventsData.startTranslate - G, r.touchEventsData.currentTranslate = r.touchEventsData.currentTranslate - G));
        } else {
          const I = k ? y.length / d.grid.rows : y.length;
          r.slideTo(r.activeIndex - I, 0, !1, !0);
        }
    }
    if (r.allowSlidePrev = m, r.allowSlideNext = p, r.controller && r.controller.control && !l) {
      const I = {
        slideRealIndex: t,
        direction: i,
        setTranslate: s,
        activeSlideIndex: n,
        byController: !0
      };
      Array.isArray(r.controller.control) ? r.controller.control.forEach((B) => {
        !B.destroyed && B.params.loop && B.loopFix({
          ...I,
          slideTo: B.params.slidesPerView === d.slidesPerView ? e : !1
        });
      }) : r.controller.control instanceof r.constructor && r.controller.control.params.loop && r.controller.control.loopFix({
        ...I,
        slideTo: r.controller.control.params.slidesPerView === d.slidesPerView ? e : !1
      });
    }
    r.emit("loopFix");
  }
  function ii() {
    const t = this, {
      params: e,
      slidesEl: i
    } = t;
    if (!e.loop || !i || t.virtual && t.params.virtual.enabled) return;
    t.recalcSlides();
    const s = [];
    t.slides.forEach((n) => {
      const a = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
      s[a] = n;
    }), t.slides.forEach((n) => {
      n.removeAttribute("data-swiper-slide-index");
    }), s.forEach((n) => {
      i.append(n);
    }), t.recalcSlides(), t.slideTo(t.realIndex, 0);
  }
  var si = {
    loopCreate: ei,
    loopFix: ti,
    loopDestroy: ii
  };
  function ni(t) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
    const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
      e.__preventObserver__ = !1;
    });
  }
  function ai() {
    const t = this;
    t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame(() => {
      t.__preventObserver__ = !1;
    }));
  }
  var ri = {
    setGrabCursor: ni,
    unsetGrabCursor: ai
  };
  function li(t, e = this) {
    function i(s) {
      if (!s || s === J() || s === H()) return null;
      s.assignedSlot && (s = s.assignedSlot);
      const n = s.closest(t);
      return !n && !s.getRootNode ? null : n || i(s.getRootNode().host);
    }
    return i(e);
  }
  function $e(t, e, i) {
    const s = H(), {
      params: n
    } = t, a = n.edgeSwipeDetection, l = n.edgeSwipeThreshold;
    return a && (i <= l || i >= s.innerWidth - l) ? a === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
  }
  function oi(t) {
    const e = this, i = J();
    let s = t;
    s.originalEvent && (s = s.originalEvent);
    const n = e.touchEventsData;
    if (s.type === "pointerdown") {
      if (n.pointerId !== null && n.pointerId !== s.pointerId)
        return;
      n.pointerId = s.pointerId;
    } else s.type === "touchstart" && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
      $e(e, s, s.targetTouches[0].pageX);
      return;
    }
    const {
      params: a,
      touches: l,
      enabled: o
    } = e;
    if (!o || !a.simulateTouch && s.pointerType === "mouse" || e.animating && a.preventInteractionOnTransition)
      return;
    !e.animating && a.cssMode && a.loop && e.loopFix();
    let r = s.target;
    if (a.touchEventsTarget === "wrapper" && !mt(r, e.wrapperEl) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || n.isTouched && n.isMoved) return;
    const u = !!a.noSwipingClass && a.noSwipingClass !== "", m = s.composedPath ? s.composedPath() : s.path;
    u && s.target && s.target.shadowRoot && m && (r = m[0]);
    const p = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`, w = !!(s.target && s.target.shadowRoot);
    if (a.noSwiping && (w ? li(p, r) : r.closest(p))) {
      e.allowClick = !0;
      return;
    }
    if (a.swipeHandler && !r.closest(a.swipeHandler))
      return;
    l.currentX = s.pageX, l.currentY = s.pageY;
    const d = l.currentX, g = l.currentY;
    if (!$e(e, s, d))
      return;
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), l.startX = d, l.startY = g, n.touchStartTime = se(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, a.threshold > 0 && (n.allowThresholdMove = !1);
    let v = !0;
    r.matches(n.focusableElements) && (v = !1, r.nodeName === "SELECT" && (n.isTouched = !1)), i.activeElement && i.activeElement.matches(n.focusableElements) && i.activeElement !== r && (s.pointerType === "mouse" || s.pointerType !== "mouse" && !r.matches(n.focusableElements)) && i.activeElement.blur();
    const _ = v && e.allowTouchMove && a.touchStartPreventDefault;
    (a.touchStartForcePreventDefault || _) && !r.isContentEditable && s.preventDefault(), a.freeMode && a.freeMode.enabled && e.freeMode && e.animating && !a.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s);
  }
  function ci(t) {
    const e = J(), i = this, s = i.touchEventsData, {
      params: n,
      touches: a,
      rtlTranslate: l,
      enabled: o
    } = i;
    if (!o || !n.simulateTouch && t.pointerType === "mouse") return;
    let r = t;
    if (r.originalEvent && (r = r.originalEvent), r.type === "pointermove" && (s.touchId !== null || r.pointerId !== s.pointerId))
      return;
    let u;
    if (r.type === "touchmove") {
      if (u = [...r.changedTouches].find((x) => x.identifier === s.touchId), !u || u.identifier !== s.touchId) return;
    } else
      u = r;
    if (!s.isTouched) {
      s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", r);
      return;
    }
    const m = u.pageX, p = u.pageY;
    if (r.preventedByNestedSwiper) {
      a.startX = m, a.startY = p;
      return;
    }
    if (!i.allowTouchMove) {
      r.target.matches(s.focusableElements) || (i.allowClick = !1), s.isTouched && (Object.assign(a, {
        startX: m,
        startY: p,
        currentX: m,
        currentY: p
      }), s.touchStartTime = se());
      return;
    }
    if (n.touchReleaseOnEdges && !n.loop)
      if (i.isVertical()) {
        if (p < a.startY && i.translate <= i.maxTranslate() || p > a.startY && i.translate >= i.minTranslate()) {
          s.isTouched = !1, s.isMoved = !1;
          return;
        }
      } else {
        if (l && (m > a.startX && -i.translate <= i.maxTranslate() || m < a.startX && -i.translate >= i.minTranslate()))
          return;
        if (!l && (m < a.startX && i.translate <= i.maxTranslate() || m > a.startX && i.translate >= i.minTranslate()))
          return;
      }
    if (e.activeElement && e.activeElement.matches(s.focusableElements) && e.activeElement !== r.target && r.pointerType !== "mouse" && e.activeElement.blur(), e.activeElement && r.target === e.activeElement && r.target.matches(s.focusableElements)) {
      s.isMoved = !0, i.allowClick = !1;
      return;
    }
    s.allowTouchCallbacks && i.emit("touchMove", r), a.previousX = a.currentX, a.previousY = a.currentY, a.currentX = m, a.currentY = p;
    const w = a.currentX - a.startX, d = a.currentY - a.startY;
    if (i.params.threshold && Math.sqrt(w ** 2 + d ** 2) < i.params.threshold) return;
    if (typeof s.isScrolling > "u") {
      let x;
      i.isHorizontal() && a.currentY === a.startY || i.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : w * w + d * d >= 25 && (x = Math.atan2(Math.abs(d), Math.abs(w)) * 180 / Math.PI, s.isScrolling = i.isHorizontal() ? x > n.touchAngle : 90 - x > n.touchAngle);
    }
    if (s.isScrolling && i.emit("touchMoveOpposite", r), typeof s.startMoving > "u" && (a.currentX !== a.startX || a.currentY !== a.startY) && (s.startMoving = !0), s.isScrolling || r.type === "touchmove" && s.preventTouchMoveFromPointerMove) {
      s.isTouched = !1;
      return;
    }
    if (!s.startMoving)
      return;
    i.allowClick = !1, !n.cssMode && r.cancelable && r.preventDefault(), n.touchMoveStopPropagation && !n.nested && r.stopPropagation();
    let g = i.isHorizontal() ? w : d, v = i.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
    n.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), a.diff = g, g *= n.touchRatio, l && (g = -g, v = -v);
    const _ = i.touchesDirection;
    i.swipeDirection = g > 0 ? "prev" : "next", i.touchesDirection = v > 0 ? "prev" : "next";
    const c = i.params.loop && !n.cssMode, f = i.touchesDirection === "next" && i.allowSlideNext || i.touchesDirection === "prev" && i.allowSlidePrev;
    if (!s.isMoved) {
      if (c && f && i.loopFix({
        direction: i.swipeDirection
      }), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
        const x = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: {
            bySwiperTouchMove: !0
          }
        });
        i.wrapperEl.dispatchEvent(x);
      }
      s.allowMomentumBounce = !1, n.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0), i.emit("sliderFirstMove", r);
    }
    if ((/* @__PURE__ */ new Date()).getTime(), n._loopSwapReset !== !1 && s.isMoved && s.allowThresholdMove && _ !== i.touchesDirection && c && f && Math.abs(g) >= 1) {
      Object.assign(a, {
        startX: m,
        startY: p,
        currentX: m,
        currentY: p,
        startTranslate: s.currentTranslate
      }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
      return;
    }
    i.emit("sliderMove", r), s.isMoved = !0, s.currentTranslate = g + s.startTranslate;
    let h = !0, b = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (b = 0), g > 0 ? (c && f && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] - (n.slidesPerView !== "auto" && i.slides.length - n.slidesPerView >= 2 ? i.slidesSizesGrid[i.activeIndex + 1] + i.params.spaceBetween : 0) - i.params.spaceBetween : i.minTranslate()) && i.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), s.currentTranslate > i.minTranslate() && (h = !1, n.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + g) ** b))) : g < 0 && (c && f && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween + (n.slidesPerView !== "auto" && i.slides.length - n.slidesPerView >= 2 ? i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween : 0) : i.maxTranslate()) && i.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: i.slides.length - (n.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
    }), s.currentTranslate < i.maxTranslate() && (h = !1, n.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - g) ** b))), h && (r.preventedByNestedSwiper = !0), !i.allowSlideNext && i.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && i.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate), n.threshold > 0)
      if (Math.abs(g) > n.threshold || s.allowThresholdMove) {
        if (!s.allowThresholdMove) {
          s.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, s.currentTranslate = s.startTranslate, a.diff = i.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY;
          return;
        }
      } else {
        s.currentTranslate = s.startTranslate;
        return;
      }
    !n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && i.freeMode || n.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate));
  }
  function di(t) {
    const e = this, i = e.touchEventsData;
    let s = t;
    s.originalEvent && (s = s.originalEvent);
    let n;
    if (s.type === "touchend" || s.type === "touchcancel") {
      if (n = [...s.changedTouches].find((x) => x.identifier === i.touchId), !n || n.identifier !== i.touchId) return;
    } else {
      if (i.touchId !== null || s.pointerId !== i.pointerId) return;
      n = s;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView)))
      return;
    i.pointerId = null, i.touchId = null;
    const {
      params: l,
      touches: o,
      rtlTranslate: r,
      slidesGrid: u,
      enabled: m
    } = e;
    if (!m || !l.simulateTouch && s.pointerType === "mouse") return;
    if (i.allowTouchCallbacks && e.emit("touchEnd", s), i.allowTouchCallbacks = !1, !i.isTouched) {
      i.isMoved && l.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, i.startMoving = !1;
      return;
    }
    l.grabCursor && i.isMoved && i.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const p = se(), w = p - i.touchStartTime;
    if (e.allowClick) {
      const x = s.path || s.composedPath && s.composedPath();
      e.updateClickedSlide(x && x[0] || s.target, x), e.emit("tap click", s), w < 300 && p - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", s);
    }
    if (i.lastClickTime = se(), Oe(() => {
      e.destroyed || (e.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !e.swipeDirection || o.diff === 0 && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) {
      i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
      return;
    }
    i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
    let d;
    if (l.followFinger ? d = r ? e.translate : -e.translate : d = -i.currentTranslate, l.cssMode)
      return;
    if (l.freeMode && l.freeMode.enabled) {
      e.freeMode.onTouchEnd({
        currentPos: d
      });
      return;
    }
    const g = d >= -e.maxTranslate() && !e.params.loop;
    let v = 0, _ = e.slidesSizesGrid[0];
    for (let x = 0; x < u.length; x += x < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
      const k = x < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
      typeof u[x + k] < "u" ? (g || d >= u[x] && d < u[x + k]) && (v = x, _ = u[x + k] - u[x]) : (g || d >= u[x]) && (v = x, _ = u[u.length - 1] - u[u.length - 2]);
    }
    let c = null, f = null;
    l.rewind && (e.isBeginning ? f = l.virtual && l.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (c = 0));
    const h = (d - u[v]) / _, b = v < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
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
      e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(v + b) : e.slideTo(v) : (e.swipeDirection === "next" && e.slideTo(c !== null ? c : v + b), e.swipeDirection === "prev" && e.slideTo(f !== null ? f : v));
    }
  }
  function Ge() {
    const t = this, {
      params: e,
      el: i
    } = t;
    if (i && i.offsetWidth === 0) return;
    e.breakpoints && t.setBreakpoint();
    const {
      allowSlideNext: s,
      allowSlidePrev: n,
      snapGrid: a
    } = t, l = t.virtual && t.params.virtual.enabled;
    t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
    const o = l && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !o ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.params.loop && !l ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout(() => {
      t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume();
    }, 500)), t.allowSlidePrev = n, t.allowSlideNext = s, t.params.watchOverflow && a !== t.snapGrid && t.checkOverflow();
  }
  function ui(t) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())));
  }
  function pi() {
    const t = this, {
      wrapperEl: e,
      rtlTranslate: i,
      enabled: s
    } = t;
    if (!s) return;
    t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, t.translate === 0 && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
    let n;
    const a = t.maxTranslate() - t.minTranslate();
    a === 0 ? n = 0 : n = (t.translate - t.minTranslate()) / a, n !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1);
  }
  function fi(t) {
    const e = this;
    ce(e, t.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
  }
  function gi() {
    const t = this;
    t.documentTouchHandlerProceeded || (t.documentTouchHandlerProceeded = !0, t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"));
  }
  const Ne = (t, e) => {
    const i = J(), {
      params: s,
      el: n,
      wrapperEl: a,
      device: l
    } = t, o = !!s.nested, r = e === "on" ? "addEventListener" : "removeEventListener", u = e;
    !n || typeof n == "string" || (i[r]("touchstart", t.onDocumentTouchStart, {
      passive: !1,
      capture: o
    }), n[r]("touchstart", t.onTouchStart, {
      passive: !1
    }), n[r]("pointerdown", t.onTouchStart, {
      passive: !1
    }), i[r]("touchmove", t.onTouchMove, {
      passive: !1,
      capture: o
    }), i[r]("pointermove", t.onTouchMove, {
      passive: !1,
      capture: o
    }), i[r]("touchend", t.onTouchEnd, {
      passive: !0
    }), i[r]("pointerup", t.onTouchEnd, {
      passive: !0
    }), i[r]("pointercancel", t.onTouchEnd, {
      passive: !0
    }), i[r]("touchcancel", t.onTouchEnd, {
      passive: !0
    }), i[r]("pointerout", t.onTouchEnd, {
      passive: !0
    }), i[r]("pointerleave", t.onTouchEnd, {
      passive: !0
    }), i[r]("contextmenu", t.onTouchEnd, {
      passive: !0
    }), (s.preventClicks || s.preventClicksPropagation) && n[r]("click", t.onClick, !0), s.cssMode && a[r]("scroll", t.onScroll), s.updateOnWindowResize ? t[u](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ge, !0) : t[u]("observerUpdate", Ge, !0), n[r]("load", t.onLoad, {
      capture: !0
    }));
  };
  function hi() {
    const t = this, {
      params: e
    } = t;
    t.onTouchStart = oi.bind(t), t.onTouchMove = ci.bind(t), t.onTouchEnd = di.bind(t), t.onDocumentTouchStart = gi.bind(t), e.cssMode && (t.onScroll = pi.bind(t)), t.onClick = ui.bind(t), t.onLoad = fi.bind(t), Ne(t, "on");
  }
  function mi() {
    Ne(this, "off");
  }
  var vi = {
    attachEvents: hi,
    detachEvents: mi
  };
  const Ve = (t, e) => t.grid && e.grid && e.grid.rows > 1;
  function wi() {
    const t = this, {
      realIndex: e,
      initialized: i,
      params: s,
      el: n
    } = t, a = s.breakpoints;
    if (!a || a && Object.keys(a).length === 0) return;
    const l = J(), o = s.breakpointsBase === "window" || !s.breakpointsBase ? s.breakpointsBase : "container", r = ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase ? t.el : l.querySelector(s.breakpointsBase), u = t.getBreakpoint(a, o, r);
    if (!u || t.currentBreakpoint === u) return;
    const p = (u in a ? a[u] : void 0) || t.originalParams, w = Ve(t, s), d = Ve(t, p), g = t.params.grabCursor, v = p.grabCursor, _ = s.enabled;
    w && !d ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), t.emitContainerClasses()) : !w && d && (n.classList.add(`${s.containerModifierClass}grid`), (p.grid.fill && p.grid.fill === "column" || !p.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`), t.emitContainerClasses()), g && !v ? t.unsetGrabCursor() : !g && v && t.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((k) => {
      if (typeof p[k] > "u") return;
      const C = s[k] && s[k].enabled, y = p[k] && p[k].enabled;
      C && !y && t[k].disable(), !C && y && t[k].enable();
    });
    const c = p.direction && p.direction !== s.direction, f = s.loop && (p.slidesPerView !== s.slidesPerView || c), h = s.loop;
    c && i && t.changeDirection(), N(t.params, p);
    const b = t.params.enabled, x = t.params.loop;
    Object.assign(t, {
      allowTouchMove: t.params.allowTouchMove,
      allowSlideNext: t.params.allowSlideNext,
      allowSlidePrev: t.params.allowSlidePrev
    }), _ && !b ? t.disable() : !_ && b && t.enable(), t.currentBreakpoint = u, t.emit("_beforeBreakpoint", p), i && (f ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !h && x ? (t.loopCreate(e), t.updateSlides()) : h && !x && t.loopDestroy()), t.emit("breakpoint", p);
  }
  function bi(t, e = "window", i) {
    if (!t || e === "container" && !i) return;
    let s = !1;
    const n = H(), a = e === "window" ? n.innerHeight : i.clientHeight, l = Object.keys(t).map((o) => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const r = parseFloat(o.substr(1));
        return {
          value: a * r,
          point: o
        };
      }
      return {
        value: o,
        point: o
      };
    });
    l.sort((o, r) => parseInt(o.value, 10) - parseInt(r.value, 10));
    for (let o = 0; o < l.length; o += 1) {
      const {
        point: r,
        value: u
      } = l[o];
      e === "window" ? n.matchMedia(`(min-width: ${u}px)`).matches && (s = r) : u <= i.clientWidth && (s = r);
    }
    return s || "max";
  }
  var yi = {
    setBreakpoint: wi,
    getBreakpoint: bi
  };
  function xi(t, e) {
    const i = [];
    return t.forEach((s) => {
      typeof s == "object" ? Object.keys(s).forEach((n) => {
        s[n] && i.push(e + n);
      }) : typeof s == "string" && i.push(e + s);
    }), i;
  }
  function Si() {
    const t = this, {
      classNames: e,
      params: i,
      rtl: s,
      el: n,
      device: a
    } = t, l = xi(["initialized", i.direction, {
      "free-mode": t.params.freeMode && i.freeMode.enabled
    }, {
      autoheight: i.autoHeight
    }, {
      rtl: s
    }, {
      grid: i.grid && i.grid.rows > 1
    }, {
      "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
    }, {
      android: a.android
    }, {
      ios: a.ios
    }, {
      "css-mode": i.cssMode
    }, {
      centered: i.cssMode && i.centeredSlides
    }, {
      "watch-progress": i.watchSlidesProgress
    }], i.containerModifierClass);
    e.push(...l), n.classList.add(...e), t.emitContainerClasses();
  }
  function _i() {
    const t = this, {
      el: e,
      classNames: i
    } = t;
    !e || typeof e == "string" || (e.classList.remove(...i), t.emitContainerClasses());
  }
  var Ti = {
    addClasses: Si,
    removeClasses: _i
  };
  function Ei() {
    const t = this, {
      isLocked: e,
      params: i
    } = t, {
      slidesOffsetBefore: s
    } = i;
    if (s) {
      const n = t.slides.length - 1, a = t.slidesGrid[n] + t.slidesSizesGrid[n] + s * 2;
      t.isLocked = t.size > a;
    } else
      t.isLocked = t.snapGrid.length === 1;
    i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked), i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
  }
  var Ci = {
    checkOverflow: Ei
  }, Re = {
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
  function ki(t, e) {
    return function(s = {}) {
      const n = Object.keys(s)[0], a = s[n];
      if (typeof a != "object" || a === null) {
        N(e, s);
        return;
      }
      if (t[n] === !0 && (t[n] = {
        enabled: !0
      }), n === "navigation" && t[n] && t[n].enabled && !t[n].prevEl && !t[n].nextEl && (t[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && t[n] && t[n].enabled && !t[n].el && (t[n].auto = !0), !(n in t && "enabled" in a)) {
        N(e, s);
        return;
      }
      typeof t[n] == "object" && !("enabled" in t[n]) && (t[n].enabled = !0), t[n] || (t[n] = {
        enabled: !1
      }), N(e, s);
    };
  }
  const Ee = {
    eventsEmitter: Tt,
    update: Bt,
    translate: Nt,
    transition: Ft,
    slide: Qt,
    loop: si,
    grabCursor: ri,
    events: vi,
    breakpoints: yi,
    checkOverflow: Ci,
    classes: Ti
  }, Ce = {};
  class R {
    constructor(...e) {
      let i, s;
      e.length === 1 && e[0].constructor && Object.prototype.toString.call(e[0]).slice(8, -1) === "Object" ? s = e[0] : [i, s] = e, s || (s = {}), s = N({}, s), i && !s.el && (s.el = i);
      const n = J();
      if (s.el && typeof s.el == "string" && n.querySelectorAll(s.el).length > 1) {
        const r = [];
        return n.querySelectorAll(s.el).forEach((u) => {
          const m = N({}, s, {
            el: u
          });
          r.push(new R(m));
        }), r;
      }
      const a = this;
      a.__swiper__ = !0, a.support = Me(), a.device = Be({
        userAgent: s.userAgent
      }), a.browser = De(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules);
      const l = {};
      a.modules.forEach((r) => {
        r({
          params: s,
          swiper: a,
          extendParams: ki(s, l),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a)
        });
      });
      const o = N({}, Re, l);
      return a.params = N({}, o, Ce, s), a.originalParams = N({}, a.params), a.passedParams = N({}, s), a.params && a.params.on && Object.keys(a.params.on).forEach((r) => {
        a.on(r, a.params.on[r]);
      }), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
        enabled: a.params.enabled,
        el: i,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return a.params.direction === "horizontal";
        },
        isVertical() {
          return a.params.direction === "vertical";
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
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
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
          focusableElements: a.params.focusableElements,
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
        allowTouchMove: a.params.allowTouchMove,
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
      }), a.emit("_swiper"), a.params.init && a.init(), a;
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
        slidesEl: i,
        params: s
      } = this, n = Y(i, `.${s.slideClass}, swiper-slide`), a = oe(n[0]);
      return oe(e) - a;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.find((i) => i.getAttribute("data-swiper-slide-index") * 1 === e));
    }
    getSlideIndexWhenGrid(e) {
      return this.grid && this.params.grid && this.params.grid.rows > 1 && (this.params.grid.fill === "column" ? e = Math.floor(e / this.params.grid.rows) : this.params.grid.fill === "row" && (e = e % Math.ceil(this.slides.length / this.params.grid.rows))), e;
    }
    recalcSlides() {
      const e = this, {
        slidesEl: i,
        params: s
      } = e;
      e.slides = Y(i, `.${s.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
    setProgress(e, i) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const n = s.minTranslate(), l = (s.maxTranslate() - n) * e + n;
      s.translateTo(l, typeof i > "u" ? 0 : i), s.updateActiveIndex(), s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const i = e.el.className.split(" ").filter((s) => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
      e.emit("_containerClasses", i.join(" "));
    }
    getSlideClasses(e) {
      const i = this;
      return i.destroyed ? "" : e.className.split(" ").filter((s) => s.indexOf("swiper-slide") === 0 || s.indexOf(i.params.slideClass) === 0).join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const i = [];
      e.slides.forEach((s) => {
        const n = e.getSlideClasses(s);
        i.push({
          slideEl: s,
          classNames: n
        }), e.emit("_slideClass", s, n);
      }), e.emit("_slideClasses", i);
    }
    slidesPerViewDynamic(e = "current", i = !1) {
      const s = this, {
        params: n,
        slides: a,
        slidesGrid: l,
        slidesSizesGrid: o,
        size: r,
        activeIndex: u
      } = s;
      let m = 1;
      if (typeof n.slidesPerView == "number") return n.slidesPerView;
      if (n.centeredSlides) {
        let p = a[u] ? Math.ceil(a[u].swiperSlideSize) : 0, w;
        for (let d = u + 1; d < a.length; d += 1)
          a[d] && !w && (p += Math.ceil(a[d].swiperSlideSize), m += 1, p > r && (w = !0));
        for (let d = u - 1; d >= 0; d -= 1)
          a[d] && !w && (p += a[d].swiperSlideSize, m += 1, p > r && (w = !0));
      } else if (e === "current")
        for (let p = u + 1; p < a.length; p += 1)
          (i ? l[p] + o[p] - l[u] < r : l[p] - l[u] < r) && (m += 1);
      else
        for (let p = u - 1; p >= 0; p -= 1)
          l[u] - l[p] < r && (m += 1);
      return m;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const {
        snapGrid: i,
        params: s
      } = e;
      s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
        l.complete && ce(e, l);
      }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
      function n() {
        const l = e.rtlTranslate ? e.translate * -1 : e.translate, o = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
        e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let a;
      if (s.freeMode && s.freeMode.enabled && !s.cssMode)
        n(), s.autoHeight && e.updateAutoHeight();
      else {
        if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
          const l = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          a = e.slideTo(l.length - 1, 0, !1, !0);
        } else
          a = e.slideTo(e.activeIndex, 0, !1, !0);
        a || n();
      }
      s.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, i = !0) {
      const s = this, n = s.params.direction;
      return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((a) => {
        e === "vertical" ? a.style.width = "" : a.style.height = "";
      }), s.emit("changeDirection"), i && s.update()), s;
    }
    changeLanguageDirection(e) {
      const i = this;
      i.rtl && e === "rtl" || !i.rtl && e === "ltr" || (i.rtl = e === "rtl", i.rtlTranslate = i.params.direction === "horizontal" && i.rtl, i.rtl ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`), i.el.dir = "rtl") : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`), i.el.dir = "ltr"), i.update());
    }
    mount(e) {
      const i = this;
      if (i.mounted) return !0;
      let s = e || i.params.el;
      if (typeof s == "string" && (s = document.querySelector(s)), !s)
        return !1;
      s.swiper = i, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === i.params.swiperElementNodeName.toUpperCase() && (i.isElement = !0);
      const n = () => `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let l = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : Y(s, n())[0];
      return !l && i.params.createElements && (l = le("div", i.params.wrapperClass), s.append(l), Y(s, `.${i.params.slideClass}`).forEach((o) => {
        l.append(o);
      })), Object.assign(i, {
        el: s,
        wrapperEl: l,
        slidesEl: i.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : l,
        hostEl: i.isElement ? s.parentNode.host : s,
        mounted: !0,
        // RTL
        rtl: s.dir.toLowerCase() === "rtl" || X(s, "direction") === "rtl",
        rtlTranslate: i.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || X(s, "direction") === "rtl"),
        wrongRTL: X(l, "display") === "-webkit-box"
      }), !0;
    }
    init(e) {
      const i = this;
      if (i.initialized || i.mount(e) === !1) return i;
      i.emit("beforeInit"), i.params.breakpoints && i.setBreakpoint(), i.addClasses(), i.updateSize(), i.updateSlides(), i.params.watchOverflow && i.checkOverflow(), i.params.grabCursor && i.enabled && i.setGrabCursor(), i.params.loop && i.virtual && i.params.virtual.enabled ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0), i.params.loop && i.loopCreate(void 0, !0), i.attachEvents();
      const n = [...i.el.querySelectorAll('[loading="lazy"]')];
      return i.isElement && n.push(...i.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((a) => {
        a.complete ? ce(i, a) : a.addEventListener("load", (l) => {
          ce(i, l.target);
        });
      }), Te(i), i.initialized = !0, Te(i), i.emit("init"), i.emit("afterInit"), i;
    }
    destroy(e = !0, i = !0) {
      const s = this, {
        params: n,
        el: a,
        wrapperEl: l,
        slides: o
      } = s;
      return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), i && (s.removeClasses(), a && typeof a != "string" && a.removeAttribute("style"), l && l.removeAttribute("style"), o && o.length && o.forEach((r) => {
        r.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), r.removeAttribute("style"), r.removeAttribute("data-swiper-slide-index");
      })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((r) => {
        s.off(r);
      }), e !== !1 && (s.el && typeof s.el != "string" && (s.el.swiper = null), ut(s)), s.destroyed = !0), null;
    }
    static extendDefaults(e) {
      N(Ce, e);
    }
    static get extendedDefaults() {
      return Ce;
    }
    static get defaults() {
      return Re;
    }
    static installModule(e) {
      R.prototype.__modules__ || (R.prototype.__modules__ = []);
      const i = R.prototype.__modules__;
      typeof e == "function" && i.indexOf(e) < 0 && i.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach((i) => R.installModule(i)), R) : (R.installModule(e), R);
    }
  }
  Object.keys(Ee).forEach((t) => {
    Object.keys(Ee[t]).forEach((e) => {
      R.prototype[e] = Ee[t][e];
    });
  }), R.use([St, _t]);
  function je(t, e, i, s) {
    return t.params.createElements && Object.keys(s).forEach((n) => {
      if (!i[n] && i.auto === !0) {
        let a = Y(t.el, `.${s[n]}`)[0];
        a || (a = le("div", s[n]), a.className = s[n], t.el.append(a)), i[n] = a, e[n] = a;
      }
    }), i;
  }
  const Fe = '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';
  function Ii({
    swiper: t,
    extendParams: e,
    on: i,
    emit: s
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
      arrowSvg: Fe
    };
    function n(d) {
      let g;
      return d && typeof d == "string" && t.isElement && (g = t.el.querySelector(d) || t.hostEl.querySelector(d), g) ? g : (d && (typeof d == "string" && (g = [...document.querySelectorAll(d)]), t.params.uniqueNavElements && typeof d == "string" && g && g.length > 1 && t.el.querySelectorAll(d).length === 1 ? g = t.el.querySelector(d) : g && g.length === 1 && (g = g[0])), d && !g ? d : g);
    }
    function a(d, g) {
      const v = t.params.navigation;
      d = M(d), d.forEach((_) => {
        _ && (_.classList[g ? "add" : "remove"](...v.disabledClass.split(" ")), _.tagName === "BUTTON" && (_.disabled = g), t.params.watchOverflow && t.enabled && _.classList[t.isLocked ? "add" : "remove"](v.lockClass));
      });
    }
    function l() {
      const {
        nextEl: d,
        prevEl: g
      } = t.navigation;
      if (t.params.loop) {
        a(g, !1), a(d, !1);
        return;
      }
      a(g, t.isBeginning && !t.params.rewind), a(d, t.isEnd && !t.params.rewind);
    }
    function o(d) {
      d.preventDefault(), !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(), s("navigationPrev"));
    }
    function r(d) {
      d.preventDefault(), !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), s("navigationNext"));
    }
    function u() {
      const d = t.params.navigation;
      if (t.params.navigation = je(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(d.nextEl || d.prevEl)) return;
      let g = n(d.nextEl), v = n(d.prevEl);
      Object.assign(t.navigation, {
        nextEl: g,
        prevEl: v
      }), g = M(g), v = M(v);
      const _ = (c, f) => {
        if (c) {
          if (d.addIcons && c.matches(".swiper-button-next,.swiper-button-prev") && !c.querySelector("svg")) {
            const h = document.createElement("div");
            we(h, Fe), c.appendChild(h.querySelector("svg")), h.remove();
          }
          c.addEventListener("click", f === "next" ? r : o);
        }
        !t.enabled && c && c.classList.add(...d.lockClass.split(" "));
      };
      g.forEach((c) => _(c, "next")), v.forEach((c) => _(c, "prev"));
    }
    function m() {
      let {
        nextEl: d,
        prevEl: g
      } = t.navigation;
      d = M(d), g = M(g);
      const v = (_, c) => {
        _.removeEventListener("click", c === "next" ? r : o), _.classList.remove(...t.params.navigation.disabledClass.split(" "));
      };
      d.forEach((_) => v(_, "next")), g.forEach((_) => v(_, "prev"));
    }
    i("init", () => {
      t.params.navigation.enabled === !1 ? w() : (u(), l());
    }), i("toEdge fromEdge lock unlock", () => {
      l();
    }), i("destroy", () => {
      m();
    }), i("enable disable", () => {
      let {
        nextEl: d,
        prevEl: g
      } = t.navigation;
      if (d = M(d), g = M(g), t.enabled) {
        l();
        return;
      }
      [...d, ...g].filter((v) => !!v).forEach((v) => v.classList.add(t.params.navigation.lockClass));
    }), i("click", (d, g) => {
      let {
        nextEl: v,
        prevEl: _
      } = t.navigation;
      v = M(v), _ = M(_);
      const c = g.target;
      let f = _.includes(c) || v.includes(c);
      if (t.isElement && !f) {
        const h = g.path || g.composedPath && g.composedPath();
        h && (f = h.find((b) => v.includes(b) || _.includes(b)));
      }
      if (t.params.navigation.hideOnClick && !f) {
        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === c || t.pagination.el.contains(c))) return;
        let h;
        v.length ? h = v[0].classList.contains(t.params.navigation.hiddenClass) : _.length && (h = _[0].classList.contains(t.params.navigation.hiddenClass)), s(h === !0 ? "navigationShow" : "navigationHide"), [...v, ..._].filter((b) => !!b).forEach((b) => b.classList.toggle(t.params.navigation.hiddenClass));
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
  function te(t = "") {
    return `.${t.trim().replace(/([\.:!+\/()[\]])/g, "\\$1").replace(/ /g, ".")}`;
  }
  function Li({
    swiper: t,
    extendParams: e,
    on: i,
    emit: s
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
    let a, l = 0;
    function o() {
      return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && t.pagination.el.length === 0;
    }
    function r(c, f) {
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
      const f = c.target.closest(te(t.params.pagination.bulletClass));
      if (!f)
        return;
      c.preventDefault();
      const h = oe(f) * t.params.slidesPerGroup;
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
        let P, S, T;
        if (f.dynamicBullets && (a = ve(y[0], t.isHorizontal() ? "width" : "height"), h.forEach((E) => {
          E.style[t.isHorizontal() ? "width" : "height"] = `${a * (f.dynamicMainBullets + 4)}px`;
        }), f.dynamicMainBullets > 1 && x !== void 0 && (l += b - (x || 0), l > f.dynamicMainBullets - 1 ? l = f.dynamicMainBullets - 1 : l < 0 && (l = 0)), P = Math.max(b - l, 0), S = P + (Math.min(y.length, f.dynamicMainBullets) - 1), T = (S + P) / 2), y.forEach((E) => {
          const L = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((O) => `${f.bulletActiveClass}${O}`)].map((O) => typeof O == "string" && O.includes(" ") ? O.split(" ") : O).flat();
          E.classList.remove(...L);
        }), h.length > 1)
          y.forEach((E) => {
            const L = oe(E);
            L === b ? E.classList.add(...f.bulletActiveClass.split(" ")) : t.isElement && E.setAttribute("part", "bullet"), f.dynamicBullets && (L >= P && L <= S && E.classList.add(...`${f.bulletActiveClass}-main`.split(" ")), L === P && r(E, "prev"), L === S && r(E, "next"));
          });
        else {
          const E = y[b];
          if (E && E.classList.add(...f.bulletActiveClass.split(" ")), t.isElement && y.forEach((L, O) => {
            L.setAttribute("part", O === b ? "bullet-active" : "bullet");
          }), f.dynamicBullets) {
            const L = y[P], O = y[S];
            for (let D = P; D <= S; D += 1)
              y[D] && y[D].classList.add(...`${f.bulletActiveClass}-main`.split(" "));
            r(L, "prev"), r(O, "next");
          }
        }
        if (f.dynamicBullets) {
          const E = Math.min(y.length, f.dynamicMainBullets + 4), L = (a * E - a) / 2 - T * a, O = c ? "right" : "left";
          y.forEach((D) => {
            D.style[t.isHorizontal() ? O : "top"] = `${L}px`;
          });
        }
      }
      h.forEach((y, P) => {
        if (f.type === "fraction" && (y.querySelectorAll(te(f.currentClass)).forEach((S) => {
          S.textContent = f.formatFractionCurrent(b + 1);
        }), y.querySelectorAll(te(f.totalClass)).forEach((S) => {
          S.textContent = f.formatFractionTotal(C);
        })), f.type === "progressbar") {
          let S;
          f.progressbarOpposite ? S = t.isHorizontal() ? "vertical" : "horizontal" : S = t.isHorizontal() ? "horizontal" : "vertical";
          const T = (b + 1) / C;
          let E = 1, L = 1;
          S === "horizontal" ? E = T : L = T, y.querySelectorAll(te(f.progressbarFillClass)).forEach((O) => {
            O.style.transform = `translate3d(0,0,0) scaleX(${E}) scaleY(${L})`, O.style.transitionDuration = `${t.params.speed}ms`;
          });
        }
        f.type === "custom" && f.renderCustom ? (we(y, f.renderCustom(t, b + 1, C)), P === 0 && s("paginationRender", y)) : (P === 0 && s("paginationRender", y), s("paginationUpdate", y)), t.params.watchOverflow && t.enabled && y.classList[t.isLocked ? "add" : "remove"](f.lockClass);
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
        c.type !== "custom" && we(x, b || ""), c.type === "bullets" && t.pagination.bullets.push(...x.querySelectorAll(te(c.bulletClass)));
      }), c.type !== "custom" && s("paginationRender", h[0]);
    }
    function d() {
      t.params.pagination = je(t, t.originalParams.pagination, t.params.pagination, {
        el: "swiper-pagination"
      });
      const c = t.params.pagination;
      if (!c.el) return;
      let f;
      typeof c.el == "string" && t.isElement && (f = t.el.querySelector(c.el)), !f && typeof c.el == "string" && (f = [...document.querySelectorAll(c.el)]), f || (f = c.el), !(!f || f.length === 0) && (t.params.uniqueNavElements && typeof c.el == "string" && Array.isArray(f) && f.length > 1 && (f = [...t.el.querySelectorAll(c.el)], f.length > 1 && (f = f.find((h) => Ae(h, ".swiper")[0] === t.el))), Array.isArray(f) && f.length === 1 && (f = f[0]), Object.assign(t.pagination, {
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
    i("changeDirection", () => {
      if (!t.pagination || !t.pagination.el) return;
      const c = t.params.pagination;
      let {
        el: f
      } = t.pagination;
      f = M(f), f.forEach((h) => {
        h.classList.remove(c.horizontalClass, c.verticalClass), h.classList.add(t.isHorizontal() ? c.horizontalClass : c.verticalClass);
      });
    }), i("init", () => {
      t.params.pagination.enabled === !1 ? _() : (d(), w(), p());
    }), i("activeIndexChange", () => {
      typeof t.snapIndex > "u" && p();
    }), i("snapIndexChange", () => {
      p();
    }), i("snapGridLengthChange", () => {
      w(), p();
    }), i("destroy", () => {
      g();
    }), i("enable disable", () => {
      let {
        el: c
      } = t.pagination;
      c && (c = M(c), c.forEach((f) => f.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)));
    }), i("lock unlock", () => {
      p();
    }), i("click", (c, f) => {
      const h = f.target, b = M(t.pagination.el);
      if (t.params.pagination.el && t.params.pagination.hideOnClick && b && b.length > 0 && !h.classList.contains(t.params.pagination.bulletClass)) {
        if (t.navigation && (t.navigation.nextEl && h === t.navigation.nextEl || t.navigation.prevEl && h === t.navigation.prevEl)) return;
        const x = b[0].classList.contains(t.params.pagination.hiddenClass);
        s(x === !0 ? "paginationShow" : "paginationHide"), b.forEach((k) => k.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
    const v = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let {
        el: c
      } = t.pagination;
      c && (c = M(c), c.forEach((f) => f.classList.remove(t.params.pagination.paginationDisabledClass))), d(), w(), p();
    }, _ = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let {
        el: c
      } = t.pagination;
      c && (c = M(c), c.forEach((f) => f.classList.add(t.params.pagination.paginationDisabledClass))), g();
    };
    Object.assign(t.pagination, {
      enable: v,
      disable: _,
      render: w,
      update: p,
      init: d,
      destroy: g
    });
  }
  const A = class A {
    constructor() {
      this.eventsAborter = null, this.swiperInstance = null, this.slideChangeHandler = null, this.linkConfigs = [
        {
          selector: 'a[href*="/discipline/"]',
          eventId: "exp_hp_discipline_click",
          eventDesc: "Discipline"
        },
        {
          selector: ".model-carousel-prev-3",
          eventId: "exp_hp_discipline_nav_prev",
          eventDesc: "Previous"
        },
        {
          selector: ".model-carousel-next-3",
          eventId: "exp_hp_discipline_nav_next",
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
    handleError(e, i) {
      const s = e instanceof Error ? e.message : String(e);
      q(`Discipline ${i}: ${s}`, "error");
    }
    async render() {
      try {
        const e = await F(A.CONTAINER_SELECTOR);
        if (!e) {
          q(`Container ${A.CONTAINER_SELECTOR} not found`, "warn");
          return;
        }
        this.cleanupExistingSection(), this.insertSection(e), this.setupEventListeners(), this.setupPagination(), this.setupVisibilityTracking();
      } catch (e) {
        this.handleError(e, "Rendering");
      }
    }
    cleanupExistingSection() {
      const e = document.querySelector(A.SECTION_SELECTOR);
      e && (this.eventsAborter && this.eventsAborter.abort(), e.remove());
    }
    insertSection(e) {
      e.insertAdjacentHTML(
        A.INSERTION_POSITION,
        lt
      ), this.initSwiper();
    }
    setupEventListeners() {
      this.eventsAborter && this.eventsAborter.abort(), this.eventsAborter = new AbortController(), this.linkConfigs.forEach((e) => {
        this.setupLinksForConfig(e);
      });
    }
    setupLinksForConfig(e) {
      const i = `${A.SECTION_SELECTOR} ${e.selector}`;
      document.querySelectorAll(i).forEach((n) => {
        this.attachClickListener(n, e);
      });
    }
    attachClickListener(e, i) {
      e.addEventListener(
        "click",
        (s) => {
          let n = i.eventDesc;
          if (e instanceof HTMLAnchorElement && e.href) {
            const a = e.href.match(/\/discipline\/([\w-]+)/);
            a && a[1] && (n = a[1].split("-").map((l) => l.charAt(0).toUpperCase() + l.slice(1)).join(" "));
          }
          K(
            i.eventId,
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
        A.SECTION_SELECTOR
      );
      if (!e) return;
      const i = e.querySelector(".swiper");
      i && (this.swiperInstance = new R(i, {
        modules: [Ii, Li],
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
      const e = document.querySelector(A.SECTION_SELECTOR);
      if (!e || !this.swiperInstance) return;
      const i = e.querySelectorAll(".carousel-dot");
      if (i.length === 0) {
        q("Pagination buttons not found", "warn");
        return;
      }
      this.updatePaginationState(i), i.forEach((s, n) => {
        s.addEventListener(
          "click",
          () => {
            this.swiperInstance.slideToLoop(n), this.updatePaginationState(i), K(
              "exp_hp_discipline_pagination_click",
              `Page ${n + 1}`,
              "click",
              "Home Page Discipline"
            );
          },
          { signal: this.eventsAborter.signal }
        );
      }), this.slideChangeHandler = () => {
        this.updatePaginationState(i);
      }, this.swiperInstance.on("slideChange", this.slideChangeHandler);
    }
    updatePaginationState(e) {
      const s = this.swiperInstance.realIndex % e.length;
      e.forEach((n, a) => {
        a === s ? (n.classList.add("is-active"), n.setAttribute(
          "aria-label",
          `Carousel Page ${a + 1} (Current Slide)`
        )) : (n.classList.remove("is-active"), n.setAttribute("aria-label", `Carousel Page ${a + 1}`));
      });
    }
    setupVisibilityTracking() {
      const e = document.querySelector(
        A.SECTION_SELECTOR
      );
      e && ee(
        e,
        "exp_hp_discipline_view",
        "Home Page Discipline",
        "Visibility",
        A.VISIBILITY_THRESHOLD
      );
    }
    addStyles() {
      if (document.getElementById(A.STYLES_ID)) return;
      const e = document.createElement("style");
      e.id = A.STYLES_ID, e.textContent = ot, document.head.appendChild(e);
    }
    destroy() {
      this.eventsAborter && (this.eventsAborter.abort(), this.eventsAborter = null), this.swiperInstance && (this.slideChangeHandler && (this.swiperInstance.off("slideChange", this.slideChangeHandler), this.slideChangeHandler = null), this.swiperInstance.destroy(), this.swiperInstance = null);
      const e = document.querySelector(A.SECTION_SELECTOR);
      e && e.remove();
    }
  };
  A.STYLES_ID = "crs-discipline-styles", A.CONTAINER_SELECTOR = "icms-component:has(fashion-recommendations)", A.INSERTION_POSITION = "afterend", A.SECTION_SELECTOR = ".crs-discipline-section", A.VISIBILITY_THRESHOLD = 0;
  let ke = A;
  We({ name: "Homepage Hero Image Alternative", dev: "OS" }), (function(t, e, i, s, n, a) {
    t.hj = t.hj || function() {
      (t.hj.q = t.hj.q || []).push(arguments);
    }, t._hjSettings = { hjid: 2667925, hjsv: 6 }, n = e.getElementsByTagName("head")[0], a = e.createElement("script"), a.async = !0, a.src = i + t._hjSettings.hjid + s + t._hjSettings.hjsv, n && n.appendChild(a);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_hp_hero");
  class Pi {
    constructor() {
      this.previousUrl = location.href, this.hero = new ue(), this.hideSections = new pe(), this.popularCategories = new fe(), this.outfitBuilder = new it(), this.christmasGifts = new ge(), this.discipline = new ke(), this.winterSale = new he(), this.init();
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
        const i = () => {
          window.autoInitData && window.autoInitData.website ? e() : window.setTimeout(i, 100);
        };
        i();
      });
    }
    destroyComponents() {
      this.hero.destroy(), this.hideSections.destroy(), this.popularCategories.destroy(), this.outfitBuilder.destroy(), this.christmasGifts.destroy(), this.discipline.destroy(), this.winterSale.destroy();
    }
    interceptHistoryAPI(e) {
      new MutationObserver(() => {
        const s = location.href;
        this.previousUrl !== s && (this.previousUrl = s, e());
      }).observe(document.body, { childList: !0 });
    }
    imagePreloading() {
      de.forEach((e) => {
        const i = `<link rel="preload" as="image" href="${e.images.mob}" media="(max-width: 700px)" />
      <link rel="preload" as="image" href="${e.images.desktop}" media="(min-width: 701px)" />`;
        document.head.insertAdjacentHTML("beforeend", i);
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = Xe, document.head.appendChild(e);
    }
  }
  window._crsTestInitialized || (window._crsTestInitialized = !0, new Pi());
})();
