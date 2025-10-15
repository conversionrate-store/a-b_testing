(function() {
  "use strict";
  const g = (o, t, n, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: t,
      event_type: n,
      event_loc: i
    }), p(`Event: ${o} | ${t} | ${n} | ${i}`, "success");
  }, l = (o) => new Promise((t) => {
    const n = document.querySelector(o);
    n && t(n);
    const i = new MutationObserver(() => {
      const e = document.querySelector(o);
      e && (t(e), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), m = ({ name: o, dev: t }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, b = (o, t, n, i, e = 1e3, r = 0.5) => {
    let s, h;
    if (s = new IntersectionObserver(
      function(c) {
        c[0].isIntersecting === !0 ? h = setTimeout(() => {
          g(
            t,
            c[0].target.dataset.visible || i || "",
            "view",
            n
          ), s.disconnect();
        }, e) : (p("Element is not fully visible", "warn"), clearTimeout(h));
      },
      { threshold: [r] }
    ), typeof o == "string") {
      const c = document.querySelector(o);
      c && s.observe(c);
    } else
      s.observe(o);
  }, p = (o, t = "info") => {
    let n;
    switch (t) {
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
    console.log(`%c>>> ${o}`, `${n} font-size: 16px; font-weight: 600`);
  }, y = `.crs-hide {
  display: none !important;
}`, f = `.crs-hero {
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
  bottom: 30%;
  width: max-content;
}
[data-hero='new-arrivals'] .crs-block-title {
  display: flex;
  flex-direction: column;
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
`, a = "https://conversionrate-store.github.io/a-b_images/lemieux", d = [
    {
      id: "new-arrivals",
      href: "/new-in/aw25",
      title: { sub: "New Arrivals", main: "AW25", collection: "Collection" },
      images: {
        desktop: `${a}/hero_new_arrivals_desktop.webp`,
        mob: `${a}/hero_new_arrivals_desktop.webp`
      }
    },
    {
      id: "clothing",
      href: "/clothing",
      title: "Clothing",
      images: {
        desktop: "https://www.lemieux.com/static/media/catalog/product/i/t/it07156_lifestyle_ladies_base_layer_damson_2.jpg",
        mob: `${a}/hero_clothing_2.webp`
      }
    },
    {
      id: "horse-wear",
      href: "/horsewear",
      title: "Horse Wear",
      images: {
        desktop: "https://www.lemieux.com/static/media/catalog/product/a/u/au25day4_12842.jpg",
        mob: `${a}/hero_horse_wear.webp`
      }
    },
    {
      id: "toys",
      href: "/toys",
      title: "Toys",
      images: {
        desktop: `${a}/toys_desk_2.webp`,
        mob: `${a}/toys_mob.webp`
      }
    }
  ];
  class w {
    constructor() {
      this.init();
    }
    init() {
      location.pathname === "/" && (this.addStyles(), this.changeHeroImageSection());
    }
    async changeHeroImageSection() {
      const t = await l("page-component-hero-image");
      t && !t.classList.contains("crs-hero") && (t.innerHTML = this.renderNewHeroSection(), this.addEventListeners(t));
    }
    renderNewHeroSection() {
      const t = d.find((e) => e.id === "new-arrivals"), n = d.filter((e) => e.id !== "new-arrivals"), i = (e) => {
        const r = typeof e.title == "string" ? `<div class="crs-block-title">${e.title}</div>` : `<div class="crs-block-title">
              ${e.title.sub ? `<span class="sub-title">${e.title.sub}</span>` : ""}
              ${e.title.main ? `<span class="main-title">${e.title.main}</span>` : ""}
              ${e.title.collection ? `<span class="collection-title">${e.title.collection}</span>` : ""}
            </div>`;
        return `
        <a href="${e.href}" class="crs-hero-block" data-hero="${e.id}" data-title="${typeof e.title == "string" ? e.title : e.title.sub}">
          <picture>
            <source media="(min-width: 701px)" srcset="${e.images.desktop}" />
            <source media="(max-width: 700px)" srcset="${e.images.mob}" />
            <img src="${e.images.desktop}" alt="${typeof e.title == "string" ? e.title : [e.title.sub, e.title.main, e.title.collection].filter(Boolean).join(" ")}" />
          </picture>
          <div class="crs-hero-block-text">
            ${r}
            
          </div>
        </a>
      `;
      };
      return (
        /* HTML */
        `
      <div class="crs-hero">
        <div class="crs-hero-left">${t ? i(t) : ""}</div>
        <div class="crs-hero-right">${n.map(i).join("")}</div>
      </div>
    `
      );
    }
    addEventListeners(t) {
      t.querySelectorAll("a.crs-hero-block").forEach((i) => {
        i.addEventListener("click", (e) => {
          const r = i.dataset.title;
          r && g("exp_hp_hero_click_1", r, "click", "Home page Hero Section");
        }), b(
          i,
          "exp_hp_hero_view_1",
          "Home page Hero Section",
          i.dataset.title || "",
          0
        );
      });
    }
    addStyles() {
      if (document.getElementById("crs-hero-styles")) return;
      const t = document.createElement("style");
      t.id = "crs-hero-styles", t.innerHTML = f, document.head.appendChild(t);
    }
  }
  const v = `[data-crs-hide='true'] {
  display: none !important;
}`, x = [
    "Disney Inspired Hobby Horses",
    "Explore LeMieux Toys",
    "NEW SEASON",
    "Journey to the Top"
  ];
  class k {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.hideSection(), this.changeSectionCopy(), setTimeout(() => {
        this.changeSectionCopy(), this.addStyles(), this.hideSection();
      }, 1e3);
      const t = setInterval(() => {
        this.changeSectionCopy(), this.addStyles(), this.hideSection();
      }, 500);
      setTimeout(() => {
        clearInterval(t);
      }, 5e3);
    }
    async changeSectionCopy() {
      const t = await l(".page-view-boundary"), n = t == null ? void 0 : t.querySelectorAll("icms-component");
      n == null || n.forEach((i) => {
        var r;
        const e = i.querySelector("h1, h3");
        if ((r = e == null ? void 0 : e.textContent) != null && r.includes("Popular Categories")) {
          if (i.dataset.crsTitle = "Popular Categories", e.__crsObserver)
            return;
          e.textContent = "Popular Categories";
          const s = new MutationObserver((h) => {
            var u;
            (((u = e.textContent) == null ? void 0 : u.trim()) || "").includes("Shop Popular Categories") && (e.textContent = "Popular Categories");
          });
          s.observe(e, {
            childList: !0,
            // Watch for child node changes
            subtree: !0,
            // Watch descendants too
            characterData: !0,
            // Watch text node changes
            characterDataOldValue: !0
            // Get old text value
          }), e.__crsObserver = s;
        }
      });
    }
    async hideSection() {
      const t = await l(".page-view-boundary"), n = t == null ? void 0 : t.querySelectorAll("icms-component");
      n == null || n.forEach((i) => {
        const e = i.querySelector("h1, h3");
        x.some(
          (r) => {
            var s;
            return (s = e == null ? void 0 : e.textContent) == null ? void 0 : s.includes(r);
          }
        ) && (i.dataset.crsHide = "true"), n == null || n.forEach((r) => {
          var s;
          ((s = r.previousElementSibling) == null ? void 0 : s.dataset.crsHide) === "true" && !r.querySelector("h1, h3") && (r.dataset.crsHide = "true");
        });
      });
    }
    addStyles() {
      if (document.getElementById("crs-hide-section-styles")) return;
      const t = document.createElement("style");
      t.id = "crs-hide-section-styles", t.textContent = v, document.head.appendChild(t);
    }
  }
  m({ name: "Homepage Hero Image Alternative", dev: "OS" }), (function(o, t, n, i, e, r) {
    o.hj = o.hj || function() {
      (o.hj.q = o.hj.q || []).push(arguments);
    }, o._hjSettings = { hjid: 2667925, hjsv: 6 }, e = t.getElementsByTagName("head")[0], r = t.createElement("script"), r.async = !0, r.src = n + o._hjSettings.hjid + i + o._hjSettings.hjsv, e && e.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_hp_hero");
  class S {
    constructor() {
      this.init();
    }
    init() {
      this.imagePreloading(), this.interceptHistoryAPI(() => {
        this.initComponents();
      }), this.initComponents();
    }
    initComponents() {
      location.pathname === "/" && (this.addStyles(), new w(), new k());
    }
    interceptHistoryAPI(t) {
      const n = history.pushState, i = history.replaceState;
      history.pushState = (...e) => {
        n.apply(history, e), setTimeout(() => t(), 50);
      }, history.replaceState = (...e) => {
        i.apply(history, e), setTimeout(() => t(), 50);
      };
    }
    imagePreloading() {
      d.forEach((t) => {
        const n = `<link rel="preload" as="image" href="${t.images.mob}" media="(max-width: 700px)" />
      <link rel="preload" as="image" href="${t.images.desktop}" media="(min-width: 701px)" />`;
        document.head.insertAdjacentHTML("beforeend", n);
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = y, document.head.appendChild(t);
    }
  }
  new S();
})();
