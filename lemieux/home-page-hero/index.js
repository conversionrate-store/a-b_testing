(function() {
  "use strict";
  const u = (i, e, n, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: e,
      event_type: n,
      event_loc: s
    }), h(`Event: ${i} | ${e} | ${n} | ${s}`, "success");
  }, d = (i) => new Promise((e) => {
    const n = document.querySelector(i);
    n && e(n);
    const s = new MutationObserver(() => {
      const t = document.querySelector(i);
      t && (e(t), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), m = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, f = (i, e, n, s, t = 1e3, a = 0.5) => {
    let r, c;
    if (r = new IntersectionObserver(
      function(o) {
        o[0].isIntersecting === !0 ? c = setTimeout(() => {
          u(
            e,
            o[0].target.dataset.visible || s || "",
            "view",
            n
          ), r.disconnect();
        }, t) : (h("Element is not fully visible", "warn"), clearTimeout(c));
      },
      { threshold: [a] }
    ), typeof i == "string") {
      const o = document.querySelector(i);
      o && r.observe(o);
    } else
      r.observe(i);
  }, h = (i, e = "info") => {
    let n;
    switch (e) {
      case "info":
        n = "color: #3498db;";
        break;
      case "warn":
        n = "color: #f39c12;";
        break;
      case "error":
        n = "color: #e74c3c;";
        break;
      case "success":
        n = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${i}`, `${n} font-size: 16px; font-weight: 600`);
  }, w = `.crs-hide {
  display: none !important;
}`, b = `.crs-hero {
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
  bottom: 50%;
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

  .crs-hero-block-text {
    bottom: 10px;
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
`, l = "https://conversionrate-store.github.io/a-b_images/lemieux", p = [
    {
      id: "new-arrivals",
      href: "/new-in/aw25",
      title: { sub: "New Arrivals", main: "AW25", collection: "Collection" },
      images: {
        desktop: `${l}/hero_new_arrivals_desktop.webp`,
        mob: `${l}/hero_new_arrivals_desktop.webp`
      }
    },
    {
      id: "clothing",
      href: "/clothing",
      title: "Clothing",
      images: {
        desktop: "https://www.lemieux.com/static/media/catalog/product/i/t/it07156_lifestyle_ladies_base_layer_damson_2.jpg",
        mob: `${l}/hero_clothing_2.webp`
      }
    },
    {
      id: "horse-wear",
      href: "/horsewear",
      title: "Horse Wear",
      images: {
        desktop: "https://www.lemieux.com/static/media/catalog/product/a/u/au25day4_12842.jpg",
        mob: `${l}/hero_horse_wear.webp`
      }
    },
    {
      id: "toys",
      href: "/toys",
      title: "Toys",
      images: {
        desktop: `${l}/toys_desk_2.webp`,
        mob: `${l}/toys_mob.webp`
      }
    }
  ];
  class y {
    constructor() {
      this.init();
    }
    init() {
      location.pathname === "/" && (this.addStyles(), this.changeHeroImageSection());
    }
    async changeHeroImageSection() {
      const e = await d("page-component-hero-image");
      e && !e.classList.contains("crs-hero") && (e.innerHTML = this.renderNewHeroSection(), this.addEventListeners(e));
    }
    renderNewHeroSection() {
      const e = p.find((t) => t.id === "new-arrivals"), n = p.filter((t) => t.id !== "new-arrivals"), s = (t) => {
        const a = typeof t.title == "string" ? `<div class="crs-block-title">${t.title}</div>` : `<div class="crs-block-title">
              ${t.title.sub ? `<span class="sub-title">${t.title.sub}</span>` : ""}
              ${t.title.main ? `<span class="main-title">${t.title.main}</span>` : ""}
              ${t.title.collection ? `<span class="collection-title">${t.title.collection}</span>` : ""}
            </div>`;
        return `
        <a href="${t.href}" class="crs-hero-block" data-hero="${t.id}" data-title="${typeof t.title == "string" ? t.title : t.title.sub}">
          <picture>
            <source media="(min-width: 701px)" srcset="${t.images.desktop}" />
            <source media="(max-width: 700px)" srcset="${t.images.mob}" />
            <img src="${t.images.desktop}" alt="${typeof t.title == "string" ? t.title : [t.title.sub, t.title.main, t.title.collection].filter(Boolean).join(" ")}" />
          </picture>
          <div class="crs-hero-block-text">
            ${a}
            
          </div>
        </a>
      `;
      };
      return (
        /* HTML */
        `
      <div class="crs-hero">
        <div class="crs-hero-left">${e ? s(e) : ""}</div>
        <div class="crs-hero-right">${n.map(s).join("")}</div>
      </div>
    `
      );
    }
    addEventListeners(e) {
      e.querySelectorAll("a.crs-hero-block").forEach((s) => {
        s.addEventListener("click", (t) => {
          const a = s.dataset.title;
          a && u("exp_hp_hero_click_1", a, "click", "Home page Hero Section");
        }), f(
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
      e.id = "crs-hero-styles", e.innerHTML = b, document.head.appendChild(e);
    }
  }
  const v = `[data-crs-hide='true']:not([data-crs-no-hide]) {
  display: none !important;
}

[data-crs-title='Popular Categories']:not([data-crs-no-hide]) {
  display: none !important;
}

`, x = [
    "Disney Inspired Hobby Horses",
    "Explore LeMieux Toys",
    "NEW SEASON",
    "Journey to the Top"
  ];
  class _ {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.hideSection(), this.changeSectionCopy(), setTimeout(() => {
        this.changeSectionCopy(), this.addStyles(), this.hideSection();
      }, 1e3);
      const e = setInterval(() => {
        this.changeSectionCopy(), this.addStyles(), this.hideSection();
      }, 500);
      setTimeout(() => {
        clearInterval(e);
      }, 5e3);
    }
    async changeSectionCopy() {
      const e = await d(".page-view-boundary"), n = e == null ? void 0 : e.querySelectorAll("icms-component");
      n == null || n.forEach((s) => {
        var a;
        const t = s.querySelector("h1, h3");
        if ((a = t == null ? void 0 : t.textContent) != null && a.includes("Shop Popular Categories")) {
          if (s.querySelector("vimeo-player") || (s.dataset.crsTitle = "Popular Categories", t.__crsObserver))
            return;
          t.textContent = "Popular Categories";
          const r = new MutationObserver((c) => {
            var g;
            (((g = t.textContent) == null ? void 0 : g.trim()) || "").includes("Shop Popular Categories") && (t.textContent = "Popular Categories");
          });
          r.observe(t, {
            childList: !0,
            // Watch for child node changes
            subtree: !0,
            // Watch descendants too
            characterData: !0,
            // Watch text node changes
            characterDataOldValue: !0
            // Get old text value
          }), t.__crsObserver = r;
        }
      });
    }
    async hideSection() {
      const e = await d(".page-view-boundary"), n = e == null ? void 0 : e.querySelectorAll("icms-component");
      n == null || n.forEach((s) => {
        const t = s.querySelector("h1, h3");
        x.some(
          (a) => {
            var r;
            return (r = t == null ? void 0 : t.textContent) == null ? void 0 : r.includes(a);
          }
        ) && (s.dataset.crsHide = "true"), n == null || n.forEach((a) => {
          var r;
          ((r = a.previousElementSibling) == null ? void 0 : r.dataset.crsHide) === "true" && !a.querySelector("h1, h3") && (a.dataset.crsHide = "true");
        });
      });
    }
    addStyles() {
      if (document.getElementById("crs-hide-section-styles")) return;
      const e = document.createElement("style");
      e.id = "crs-hide-section-styles", e.textContent = v, document.head.appendChild(e);
    }
  }
  const k = `[data-crs-title='Popular Categories'] .swiper-initialized {
  overflow-x: auto;
  touch-action: pan-x;
  padding-inline: 12px;
  min-height: 250px;

  /* Hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer and Edge */
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
}

@media (min-width: 1390px) {
  [data-crs-title='Popular Categories'] .swiper-initialized {
    min-height: 400px;
  }
  [data-crs-title='Popular Categories'] .swiper-wrapper .swiper-slide {
    flex: 0 0 auto;
    width: calc(100% / 6.2 - 10px);
    aspect-ratio: 1;
  }
}



.crs-slider-section + icms-component page-component-hero-image {
  padding-top: 0 !important;
}`, S = (
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
                        href="/clothing/accessories/accessories/rider-luggage"
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
                      href="/clothing/accessories/accessories/rider-luggage"
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
  class C {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.modifySection();
    }
    async modifySection() {
      const e = await d('[data-crs-title="Popular Categories"]');
      e && (e.outerHTML = S);
      const n = document.querySelector(".crs-slider-section .swiper-initialized");
      if (!n) return;
      n.style.cursor = "grab";
      let s = !1, t, a, r, c;
      n.addEventListener("mousedown", (o) => {
        o.preventDefault(), s = !0, t = o.pageX, a = o.pageY, r = n.scrollLeft, c = n.scrollTop;
      }), n.addEventListener("mouseleave", () => {
        s = !1, n.style.cursor = "grab";
      }), n.addEventListener("mouseup", () => {
        s = !1, n.style.cursor = "grab";
      }), n.addEventListener("mousemove", (o) => {
        if (!s) return;
        o.preventDefault(), n.style.cursor = "grabbing";
        const g = o.pageX, $ = o.pageY, P = (g - t) * 1.5, j = ($ - a) * 1.5;
        n.scrollLeft = r - P, n.scrollTop = c - j;
      }), n.addEventListener("dragstart", (o) => {
        o.preventDefault();
      }), n.style.userSelect = "none";
    }
    async observe() {
      new MutationObserver((n) => {
        n.forEach(async (s) => {
          (await d(
            '[data-crs-title="Popular Categories"] swiper'
          )).querySelector(".crs-swiper-wrapper") || h(
            "Detected changes in Popular Categories, reapplying modifications"
          );
        });
      }).observe(document, { childList: !0, subtree: !0 }), this.modifySection();
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = k, document.head.appendChild(e);
    }
  }
  m({ name: "Homepage Hero Image Alternative", dev: "OS" }), (function(i, e, n, s, t, a) {
    i.hj = i.hj || function() {
      (i.hj.q = i.hj.q || []).push(arguments);
    }, i._hjSettings = { hjid: 2667925, hjsv: 6 }, t = e.getElementsByTagName("head")[0], a = e.createElement("script"), a.async = !0, a.src = n + i._hjSettings.hjid + s + i._hjSettings.hjsv, t && t.appendChild(a);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_hp_hero");
  class E {
    constructor() {
      this.init();
    }
    init() {
      this.imagePreloading(), this.interceptHistoryAPI(() => {
        this.initComponents();
      }), this.initComponents();
    }
    initComponents() {
      location.pathname === "/" && (this.addStyles(), new y(), new _(), new C());
    }
    interceptHistoryAPI(e) {
      const n = history.pushState, s = history.replaceState;
      history.pushState = (...t) => {
        n.apply(history, t), setTimeout(() => e(), 50);
      }, history.replaceState = (...t) => {
        s.apply(history, t), setTimeout(() => e(), 50);
      };
    }
    imagePreloading() {
      p.forEach((e) => {
        const n = `<link rel="preload" as="image" href="${e.images.mob}" media="(max-width: 700px)" />
      <link rel="preload" as="image" href="${e.images.desktop}" media="(min-width: 701px)" />`;
        document.head.insertAdjacentHTML("beforeend", n);
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = w, document.head.appendChild(e);
    }
  }
  new E();
})();
