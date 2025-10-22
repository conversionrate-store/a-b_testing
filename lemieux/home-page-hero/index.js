(function() {
  "use strict";
  const d = (a, e, t, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: e,
      event_type: t,
      event_loc: s
    }), g(`Event: ${a} | ${e} | ${t} | ${s}`, "success");
  }, c = (a) => new Promise((e) => {
    const t = document.querySelector(a);
    t && e(t);
    const s = new MutationObserver(() => {
      const i = document.querySelector(a);
      i && (e(i), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), f = ({ name: a, dev: e }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, m = (a, e, t, s, i = 1e3, n = 0.5) => {
    let r, o;
    if (r = new IntersectionObserver(
      function(l) {
        l[0].isIntersecting === !0 ? o = setTimeout(() => {
          d(
            e,
            l[0].target.dataset.visible || s || "",
            "view",
            t
          ), r.disconnect();
        }, i) : (g("Element is not fully visible", "warn"), clearTimeout(o));
      },
      { threshold: [n] }
    ), typeof a == "string") {
      const l = document.querySelector(a);
      l && r.observe(l);
    } else
      r.observe(a);
  }, g = (a, e = "info") => {
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
    console.log(`%c>>> ${a}`, `${t} font-size: 16px; font-weight: 600`);
  }, w = `.crs-hide {
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
`, y = `.crs-hero {
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
`, p = "https://conversionrate-store.github.io/a-b_images/lemieux", h = [
    {
      id: "new-arrivals",
      href: "/new-in/aw25",
      title: { sub: "New Arrivals", main: "AW25", collection: "Collection" },
      images: {
        desktop: `${p}/hero_new_arrivals_desktop.webp`,
        mob: `${p}/hero_new_arrivals_desktop.webp`
      }
    },
    {
      id: "clothing",
      href: "/clothing",
      title: "Clothing",
      images: {
        desktop: "https://www.lemieux.com/static/media/catalog/product/i/t/it07156_lifestyle_ladies_base_layer_damson_2.jpg",
        mob: `${p}/hero_clothing_2.webp`
      }
    },
    {
      id: "horse-wear",
      href: "/horsewear",
      title: "Horse Wear",
      images: {
        desktop: "https://www.lemieux.com/static/media/catalog/product/a/u/au25day4_12842.jpg",
        mob: `${p}/hero_horse_wear.webp`
      }
    },
    {
      id: "toys",
      href: "/toys",
      title: "Toys",
      images: {
        desktop: `${p}/toys_desk_2.webp`,
        mob: `${p}/toys_mob.webp`
      }
    }
  ];
  class x {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.changeHeroImageSection();
    }
    async changeHeroImageSection() {
      const e = await c("page-component-hero-image");
      e != null && e.querySelector(".crs-hero") || e && (e.innerHTML = this.renderNewHeroSection(), this.addEventListeners(e));
    }
    renderNewHeroSection() {
      const e = h.find((i) => i.id === "new-arrivals"), t = h.filter((i) => i.id !== "new-arrivals"), s = (i) => {
        const n = typeof i.title == "string" ? `<div class="crs-block-title">${i.title}</div>` : `<div class="crs-block-title">
              ${i.title.sub ? `<span class="sub-title">${i.title.sub}</span>` : ""}
              ${i.title.main ? `<span class="main-title">${i.title.main}</span>` : ""}
              ${i.title.collection ? `<span class="collection-title">${i.title.collection}</span>` : ""}
            </div>`;
        return `
        <a href="${i.href}" class="crs-hero-block" data-hero="${i.id}" data-title="${typeof i.title == "string" ? i.title : i.title.sub}">
          <picture>
            <source media="(min-width: 701px)" srcset="${i.images.desktop}" />
            <source media="(max-width: 700px)" srcset="${i.images.mob}" />
            <img src="${i.images.desktop}" alt="${typeof i.title == "string" ? i.title : [i.title.sub, i.title.main, i.title.collection].filter(Boolean).join(" ")}" />
          </picture>
          <div class="crs-hero-block-text">
            ${n}
            
          </div>
        </a>
      `;
      };
      return (
        /* HTML */
        `
      <div class="crs-hero">
        <div class="crs-hero-left">${e ? s(e) : ""}</div>
        <div class="crs-hero-right">${t.map(s).join("")}</div>
      </div>
    `
      );
    }
    addEventListeners(e) {
      e.querySelectorAll("a.crs-hero-block").forEach((s) => {
        s.addEventListener("click", (i) => {
          const n = s.dataset.title;
          n && d(
            "exp_hp_hero_click_1",
            n,
            "click",
            "Home page Hero Section"
          );
        }), m(
          s,
          "exp_hp_hero_view_1",
          "Home page Hero Section",
          s.dataset.title || "",
          0
        );
      });
    }
    addStyles() {
      if (document.getElementById("crs-hero-styles")) return;
      const e = document.createElement("style");
      e.id = "crs-hero-styles", e.innerHTML = y, document.head.appendChild(e);
    }
  }
  const v = `[data-crs-hide='true']:not([data-crs-no-hide]) {
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
} */`, _ = [
    "Disney Inspired Hobby Horses",
    "Explore LeMieux Toys",
    "NEW SEASON",
    "Journey to the Top"
  ];
  class b {
    constructor() {
      this.resizeObserver = null, this.resizeTimeout = null, this.init();
    }
    init() {
      this.addStyles(), this.hideSection(), this.changeSectionCopy(), setTimeout(() => {
        this.changeSectionCopy(), this.addStyles(), this.hideSection();
      }, 1e3), this.observeResize();
      const e = setInterval(() => {
        this.changeSectionCopy(), this.addStyles(), this.hideSection();
      }, 500);
      setTimeout(() => {
        clearInterval(e);
      }, 5e3);
    }
    async changeSectionCopy() {
      const e = await c(".page-view-boundary"), t = e == null ? void 0 : e.querySelectorAll(
        ":scope > icms-component"
      );
      t == null || t.forEach((s) => {
        var n;
        const i = s.querySelector("h1, h3");
        if ((n = i == null ? void 0 : i.textContent) != null && n.includes("Shop Popular Categories")) {
          if (s.querySelector("vimeo-player") || (s.dataset.crsTitle = "Popular Categories", i.__crsObserver))
            return;
          i.textContent = "Popular Categories";
          const r = new MutationObserver((o) => {
            var u;
            (((u = i.textContent) == null ? void 0 : u.trim()) || "").includes("Shop Popular Categories") && (i.textContent = "Popular Categories");
          });
          r.observe(i, {
            childList: !0,
            // Watch for child node changes
            subtree: !0,
            // Watch descendants too
            characterData: !0,
            // Watch text node changes
            characterDataOldValue: !0
            // Get old text value
          }), i.__crsObserver = r;
        }
      });
    }
    observeResize() {
      this.resizeObserver && this.resizeObserver.disconnect();
      const e = () => {
        this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(() => {
          console.log("Resize detected, re-evaluating sections..."), this.hideSection();
        }, 150);
      };
      this.resizeObserver = new ResizeObserver(e), c(".page-view-boundary").then((t) => {
        t && this.resizeObserver && (this.resizeObserver.observe(t), console.log("ResizeObserver attached to .page-view-boundary"));
      }), this.resizeObserver.observe(document.body);
    }
    async hideSection() {
      const e = await c(".page-view-boundary"), t = e == null ? void 0 : e.querySelectorAll(
        ":scope > icms-component"
      );
      t == null || t.forEach((s) => {
        var r;
        const i = s.querySelector("h1, h2, h3"), n = (r = s.querySelector(".hero")) == null ? void 0 : r.textContent;
        s.classList.add("crs-top-section"), _.some(
          (o) => {
            var l;
            return (l = i == null ? void 0 : i.textContent) == null ? void 0 : l.includes(o);
          }
        ) && (s.dataset.crsHide = "true"), t == null || t.forEach((o) => {
          var l;
          ((l = o.previousElementSibling) == null ? void 0 : l.dataset.crsHide) === "true" && !o.querySelector("h1, h3") && (o.dataset.crsHide = "true");
        }), n && n.includes("Outfit Builder") && (s.classList.add("crs-target-outfit-builder"), s.innerHTML = "");
      });
    }
    addStyles() {
      if (document.getElementById("crs-hide-section-styles")) return;
      const e = document.createElement("style");
      e.id = "crs-hide-section-styles", e.textContent = v, document.head.appendChild(e);
    }
  }
  const S = `[data-crs-title='Popular Categories'] .swiper-initialized {
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
}`, k = (
    /* HTML */
    `<icms-component
  _ngcontent-ng-c2047601728=""
  class="ng-star-inserted crs-slider-section"
  data-crs-title="Popular Categories"
  data-crs-no-hide
  ><div>
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
  );
  class q {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.modifySection();
    }
    async modifySection() {
      const e = await c('[data-crs-title="Popular Categories"]');
      e && (e.outerHTML = k);
      const t = document.querySelector(".crs-slider-section .swiper-initialized");
      if (!t) return;
      t.style.cursor = "grab";
      let s = !1, i, n, r, o;
      t.addEventListener("mousedown", (l) => {
        l.preventDefault(), s = !0, i = l.pageX, n = l.pageY, r = t.scrollLeft, o = t.scrollTop;
      }), t.addEventListener("mouseleave", () => {
        s = !1, t.style.cursor = "grab";
      }), t.addEventListener("mouseup", () => {
        s = !1, t.style.cursor = "grab";
      }), t.addEventListener("mousemove", (l) => {
        if (!s) return;
        l.preventDefault(), t.style.cursor = "grabbing";
        const u = l.pageX, E = l.pageY, H = (u - i) * 1.5, L = (E - n) * 1.5;
        t.scrollLeft = r - H, t.scrollTop = o - L;
      }), t.addEventListener("dragstart", (l) => {
        l.preventDefault();
      }), t.style.userSelect = "none";
    }
    async observe() {
      new MutationObserver((t) => {
        t.forEach(async (s) => {
          (await c(
            '[data-crs-title="Popular Categories"] swiper'
          )).querySelector(".crs-swiper-wrapper") || g(
            "Detected changes in Popular Categories, reapplying modifications"
          );
        });
      }).observe(document, { childList: !0, subtree: !0 }), this.modifySection();
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = S, document.head.appendChild(e);
    }
  }
  const z = `.crs-outfit-section .crs-mobile page-component-text {
  margin-top: 0 !important;
}

.crs-outfit-section .crs-mobile h1 {
  margin-top: 20px;
}
`, B = (
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
  );
  class P {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render();
    }
    async render() {
      try {
        const e = await c(".crs-target-outfit-builder"), t = document.querySelector(".crs-outfit-section");
        t && t.remove();
        const s = B;
        e && (e.insertAdjacentHTML("afterbegin", s), document.querySelectorAll('[data-builder="outfit-builder"]').forEach((i) => {
          const n = i.querySelector("a");
          m(
            i,
            "exp_hp_hero_view_2",
            "Home Page Outfit Builder",
            "Outfit Builder Visibility",
            0
          ), n && n.addEventListener("click", (r) => {
            d(
              "exp_hp_hero_click_2",
              "Outfit Builder",
              "click",
              "Home Page Outfit Builder"
            );
          });
        }), document.querySelectorAll('[data-builder="pony-builder"]').forEach((i) => {
          const n = i.querySelector("a");
          m(
            i,
            "exp_hp_hero_view_3",
            "Home Page Outfit Builder",
            "Toy Pony Builder Visibility",
            0
          ), n && n.addEventListener("click", (r) => {
            d(
              "exp_hp_hero_click_3",
              "Toy Pony Builder",
              "click",
              "Home Page Outfit Builder"
            );
          });
        }));
      } catch (e) {
        const t = e instanceof Error ? e.message : String(e);
        g(t, "error");
      }
    }
    addStyles() {
      if (!document.getElementById("crs-outfit-builder-styles")) {
        const e = document.createElement("style");
        e.id = "crs-outfit-builder-styles", e.innerHTML = z, document.head.appendChild(e);
      }
    }
  }
  const T = "", C = (
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
  );
  class O {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render();
    }
    async render() {
      try {
        const e = await c(".crs-target-outfit-builder"), t = document.querySelector(
          ".crs-christmas-gifts-section"
        );
        if (t && t.remove(), e) {
          e.insertAdjacentHTML("beforeend", C);
          const s = document.querySelector(
            ".crs-christmas-gifts-section"
          ), i = document.querySelectorAll(
            '.crs-christmas-gifts-section a[href="/gifting"]'
          ), n = document.querySelectorAll(
            '.crs-christmas-gifts-section a[href="/gifts/gift-sets"], .crs-christmas-gifts-section span[href="/gifts/gift-sets"]'
          );
          i.forEach((r) => {
            r.addEventListener("click", (o) => {
              d(
                "exp_hp_hero_click_4",
                "Christmas Gifting",
                "click",
                "Home Page Christmas Gifting"
              );
            });
          }), n.forEach((r) => {
            r.addEventListener("click", (o) => {
              const l = r.tagName.toLowerCase();
              d(
                "exp_hp_hero_click_5",
                "Shop Gift Sets",
                "click",
                "Home Page Christmas Gifting"
              ), l === "span" && (o.stopPropagation(), o.preventDefault(), o.stopImmediatePropagation(), location.href = "/gifts/gift-sets");
            });
          }), s && m(
            s,
            "exp_hp_hero_view_4",
            "Home Page Christmas Gifting",
            "Visibility",
            0
          );
        }
      } catch (e) {
        const t = e instanceof Error ? e.message : String(e);
        g(t, "error");
      }
    }
    addStyles() {
      if (!document.getElementById("crs-christmas-gifts-styles")) {
        const e = document.createElement("style");
        e.id = "crs-christmas-gifts-styles", e.innerHTML = T, document.head.appendChild(e);
      }
    }
  }
  f({ name: "Homepage Hero Image Alternative", dev: "OS" }), (function(a, e, t, s, i, n) {
    a.hj = a.hj || function() {
      (a.hj.q = a.hj.q || []).push(arguments);
    }, a._hjSettings = { hjid: 2667925, hjsv: 6 }, i = e.getElementsByTagName("head")[0], n = e.createElement("script"), n.async = !0, n.src = t + a._hjSettings.hjid + s + a._hjSettings.hjsv, i && i.appendChild(n);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_hp_hero");
  class j {
    constructor() {
      this.previousUrl = "", this.init();
    }
    init() {
      var e, t, s, i, n, r, o, l;
      console.log("defaultCountry", ((t = (e = window.autoInitData) == null ? void 0 : e.website) == null ? void 0 : t.defaultCountry) !== "GB" && ((i = (s = window.autoInitData) == null ? void 0 : s.website) == null ? void 0 : i.defaultCountry) !== "US"), !(((r = (n = window.autoInitData) == null ? void 0 : n.website) == null ? void 0 : r.defaultCountry) !== "GB" && ((l = (o = window.autoInitData) == null ? void 0 : o.website) == null ? void 0 : l.defaultCountry) !== "US") && (this.previousUrl = "", this.imagePreloading(), this.interceptHistoryAPI(async () => {
        await c("footer"), g("init components"), this.initComponents();
      }), this.initComponents());
    }
    initComponents() {
      console.log(
        "Initializing components",
        location.pathname === "/" || location.pathname === "/us"
      ), (location.pathname === "/" || location.pathname === "/us/") && (this.addStyles(), new x(), new b(), new q(), new P(), new O());
    }
    interceptHistoryAPI(e) {
      new MutationObserver(() => {
        const s = location.href;
        this.previousUrl !== s && (this.previousUrl = s, e());
      }).observe(document.body, { childList: !0, subtree: !0 });
    }
    imagePreloading() {
      h.forEach((e) => {
        const t = `<link rel="preload" as="image" href="${e.images.mob}" media="(max-width: 700px)" />
      <link rel="preload" as="image" href="${e.images.desktop}" media="(min-width: 701px)" />`;
        document.head.insertAdjacentHTML("beforeend", t);
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = w, document.head.appendChild(e);
    }
  }
  new j();
})();
