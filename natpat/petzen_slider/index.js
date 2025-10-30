(function() {
  "use strict";
  const d = (s, t, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: t,
      event_type: e,
      event_loc: n
    }), m(`Event: ${s} | ${t} | ${e} | ${n}`, "success");
  }, p = (s) => new Promise((t) => {
    const e = document.querySelector(s);
    e && t(e);
    const n = new MutationObserver(() => {
      const a = document.querySelector(s);
      a && (t(a), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), g = ({ name: s, dev: t }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, h = (s) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", s, "variant_1"));
    }, 1e3);
  }, m = (s, t = "info") => {
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
    console.log(`%c>>> ${s}`, `${e} font-size: 16px; font-weight: 600`);
  }, c = "https://conversionrate-store.github.io/a-b_images/natpat", u = `.lp-tr--hero-section {
  background: #0d7650;
  padding: 30px 0 300px !important;
}

.lp-tr--hero-section :is(.lp-tr--main-title, .lp-tr--hero-lists) {
  display: none;
}

.lp-tr--float-right-img {
  bottom: 10px !important;
  filter: drop-shadow(0 0 100px rgba(255, 255, 255, 0.3));
}

.lp-tr--hero-section .lp-tr--btn {
  display: none;
}

.lp-tr--hero-section .lp-tr--kids-tick-mb-img {
  max-width: 241px !important;
  filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.6));
}

.lp-tr--learn-more-btn {
  margin-top: 0 !important;
  margin-bottom: 20px !important;
}

.lp-tr--learn-more-btn img {
  margin-top: 13px !important;
  margin-bottom: 22px !important;
}

crs-slider {
  display: block;
  margin-inline: -30px;
  margin-bottom: 40px;
  width: calc(100% + 60px);
}
.crs-slide {
  position: relative;
  scroll-snap-align: center;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  min-height: 393px;
  padding: 24px 16px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-family: 'D-DIN', sans-serif;
  background: #084730;
  color: #fff;
  overflow: hidden;
}

.crs-slide.wide {
  width: 320px;
}
.crs-slide img.full {
  margin-inline: -16px;
  width: calc(100% + 32px);
}

.crs-slide img.top-33 {
  margin-top: -33px;
}

.crs-slide.full {
  padding: 0;
  padding-bottom: 24px;
}

.crs-slide.full img {
  height: 100%;
}

.crs-slide.with-background {
  background-size: cover;
  background-position: center;
  border: none;
}

.crs-slide.transparent {
  background: transparent;
  border: none;
}

.crs-slide.blue-bg {
  background: #183ea9 -1.353px 108.024px / 100% 67.749% no-repeat;
}

.crs-slide.custom-padding-1 {
  padding: 12px;
  padding-bottom: 0;
}

.crs-slide.custom-padding-2 {
  padding: 16px;
  padding-bottom: 24px;
}

.crs-slide:is([data-slide-index='5'], [data-slide-index='6']) {
  justify-content: center;
}

.crs-slide-title {
  margin-inline: -10px;
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  line-height: 32px;
}

.crs-highlight {
  color: #31ee7a;
}

.crs-slide-subtitle {
  margin-top: 6px;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
}

.crs-slide-description {
  margin-top: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
}

.crs-slide-description-list {
  margin-top: 24px;
  display: grid;
  justify-items: center;
  row-gap: 12px;
}

.crs-slide-description-list li {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 17px;
  font-weight: 400;
  line-height: 16px;
  text-wrap: nowrap;
}

.crs-slide-description-list li::before {
  content: '';
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none"><path stroke="%23B1F2B4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.071 5.07 3.64 7.641c.074.075.111.112.154.125.038.012.078.01.115-.003.042-.015.077-.055.147-.134l4.873-5.487"/></svg>');
  width: 10px;
  height: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.crs-slide-solution-grid {
  margin-top: 22px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  place-content: center;
  gap: 24px 16px;
}

.crs-slide-solution-grid .crs-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.crs-slide-solution-grid .crs-text {
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}

.crs-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  padding-top: 24px;
  width: 100%;
}

.crs-action-image {
  margin-bottom: -32px;
}
.crs-action-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: 0;
  min-height: 52px;
  padding: 14px 20px;
  border-radius: 50px;
  z-index: 2;
  text-align: center;
  color: #000;
  font-family: "DIN Next", sans-serif ;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px; /* 120% */
  text-transform: uppercase;
}

.crs-action-button-primary {
  background: #ffa311;
}

.crs-action-button-secondary {
  background: #f3dd1d;
}
`, x = [
    {
      title: '<span class="crs-highlight">Help Your Pet Stay Zen</span>',
      subtitle: "No More Stressing, <br />No Matter Where They Go!",
      list: [
        "For Dogs & Cats",
        "Easy Peel & Stick",
        "100% Natural & Safe",
        "Gentle Anxiety Relief"
      ],
      templates: ["transparent", "custom-padding-1"],
      action: {
        text: "Get Zen Stickers Now",
        templates: ["primary", "with-image"]
      }
    },
    {
      image: {
        src: "best-product.webp",
        width: "100%",
        height: "auto",
        style: "margin-top: -8px; margin-right: -27px"
      },
      templates: ["with-background", "full"],
      backgroundImage: {
        src: "bg-2.webp"
      },
      action: {
        text: "Get Zen Stickers Now",
        templates: ["secondary"]
      }
    },
    {
      title: '<span class="crs-highlight">ONLY!</span> 100% Natural <br />& Safe Ingredients',
      description: 'Every patch is made from <span class="crs-highlight">bamboo fibers</span> <br />Infused with:',
      image: {
        src: "zenpatch_ingredients.webp",
        width: "100%",
        height: "auto",
        templates: ["full"],
        style: "margin-top: -33px; margin-bottom: -20px;"
      },
      templates: ["blue-bg", "custom-padding-2", "wide"],
      action: {
        text: "Get Zen Stickers Now"
      }
    },
    {
      title: "Proven to Calm Pets <br />in Stressful Moments",
      grid: [
        { icon: "noise.svg", text: "Loud noise" },
        { icon: "fireworks.svg", text: "Fireworks" },
        { icon: "storm.svg", text: "Storm" },
        { icon: "separation.svg", text: "Separation anxiety" },
        {
          icon: "unfamiliar_pets.svg",
          text: "Unfamiliar <br />pets / people"
        },
        { icon: "vet_visit.svg", text: "Vet Visits" }
      ],
      action: {
        text: "Get Zen Stickers Now"
      }
    },
    {
      title: '<span class="crs-highlight">All-Day</span> <br />Calming Support',
      description: 'Slow-release diffusion provides continuous calming effect — <span class="crs-highlight"> day or night </span>',
      image: {
        src: "zenpatch_diffusion.webp",
        width: "100%",
        height: "auto",
        style: "margin-top: 22px;"
      },
      action: {
        text: "Get Zen Stickers Now"
      }
    },
    {
      image: {
        src: "zenpatch_great_for.webp",
        width: "100%",
        height: "auto"
      },
      action: {
        text: "Get Zen Stickers Now"
      }
    },
    {
      image: {
        src: "zenpatch_result.webp",
        width: "100%",
        height: "auto"
      },
      action: {
        text: "Get Zen Stickers Now"
      }
    }
  ];
  class f {
    constructor() {
      this.section = document.querySelector(
        ".lp-tr--hero-section"
      ), this.init();
    }
    init() {
      this.addStyles(), this.changeHeaderSectionImages(), this.addSlider();
    }
    addSlider() {
      const t = this.section.querySelector(".lp-tr--main-title"), e = (
        /* HTML */
        ` <crs-slider>
      ${x.map((r, o) => this.renderSlide(r, o)).join("")}
    </crs-slider>`
      );
      t == null || t.insertAdjacentHTML("afterend", e);
      const n = this.section.querySelector("crs-slider");
      let a = 0;
      n == null || n.addEventListener("crs-slide-change", (r) => {
        const i = r.detail.activeSlideIndex;
        clearTimeout(this.activeSlideTimeout), this.activeSlideTimeout = setTimeout(() => {
          i !== a && d("exp_slider_view_1", `${i}`, "view", "Slider"), a = i;
        }, 300);
      }), n == null || n.addEventListener("click", (r) => {
        var l;
        const o = r.target, i = (l = o.closest(".crs-slide")) == null ? void 0 : l.dataset.slideIndex;
        !o.closest(".crs-action-button") || !i || (console.log("Slide action clicked:", i), d("exp_slider_click_1", `${i}`, "click", "Slider"));
      });
    }
    renderSlide(t, e) {
      var a, r, o;
      const n = [];
      if (t.title) {
        const i = (t.title.includes("crs-highlight"), "crs-slide-title");
        n.push(`<div class="${i}">${t.title}</div>`);
      }
      if (t.subtitle && n.push(
        `<div class="crs-slide-subtitle">${t.subtitle}</div>`
      ), t.description && n.push(
        `<div class="crs-slide-description">${t.description}</div>`
      ), t.image) {
        const i = t.image.style ? `style="${t.image.style}"` : "";
        n.push(`
        <img
          src="${c}/${t.image.src}"
          alt=""
          width="${t.image.width}"
          height="${t.image.height}"
          loading="lazy"
          ${i}
          class="${t != null && t.image.templates ? t.image.templates.join(" ") : ""}"
        />
      `);
      }
      return t.list && n.push(`
        <ul class="crs-slide-description-list">
          ${t.list.map((i) => `<li>${i}</li>`).join("")}
        </ul>
      `), t.grid && n.push(`
        <div class="crs-slide-solution-grid">
          ${t.grid.map(
        (i) => `
            <div class="crs-item">
              <div class="crs-icon">
                <img
                  src="${c}/${i.icon}"
                  alt=""
                  width="32"
                  height="32"
                  loading="lazy"
                />
              </div>
              <div class="crs-text">${i.text}</div>
            </div>
          `
      ).join("")}
        </div>
      `), t.action && ((a = t.action.templates) != null && a.includes("with-image") ? n.push(
        /* HTML */
        `
          <div class="crs-action">
            <picture>
              <source
                srcset="
                  data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
                "
                media="(min-width: 768px)"
              />
              <img
                src="//www.natpat.com/cdn/shop/files/header-mobile-zp-pet-stickers.png?v=7126975986313487252"
                alt=""
                class="crs-action-image"
                width="294"
                height="171"
                fetchpriority="high"
              />
            </picture>
            <a
              href="#lptrPurchase"
              class="crs-action-button ${(r = t.action.templates) != null && r.includes(
          "secondary"
        ) ? " crs-action-button-secondary" : " crs-action-button-primary"}"
              >${t.action.text}</a
            >
          </div>
        `
      ) : n.push(
        /* HTML */
        `<div class="crs-action">
            <a
              href="#lptrPurchase"
              class="crs-action-button ${(o = t.action.templates) != null && o.includes(
          "secondary"
        ) ? " crs-action-button-secondary" : " crs-action-button-primary"}"
              >${t.action.text}</a
            >
          </div>`
      )), `
      <div class="crs-slide ${t != null && t.templates ? t.templates.join(" ") : ""}" data-slide-index="${e}" style="${t.backgroundImage ? `background-image: url('${c}/${t.backgroundImage.src}');` : ""}">
        ${n.join("")}
      </div>
    `;
    }
    changeHeaderSectionImages() {
      const t = this.section.querySelector(
        ".lp-tr--float-right-img"
      );
      this.section.querySelector(
        ".lp-tr--kids-tick-mb-img.lp-tr--mobile"
      );
      const e = this.section.querySelector(
        ".lp-tr--learn-more-btn img"
      );
      t && (t.src = `${c}/lp-pet-zen--dog-cat.webp`), e && (e.src = `${c}/arrow_down.svg`);
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = u, document.head.appendChild(t);
    }
  }
  const b = `.slider {
  --slides-gap: 14px;
  position: relative;
  width: 100%;
}

.slider-track {
  display: flex;
  gap: var(--slides-gap);
  overflow-y: auto;
  padding-inline: 32px 16px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.slider-track::-webkit-scrollbar {
  display: none;
}

.slider-track > * {
  flex-shrink: 0;
}

.slider-swipe-indicator {
  position: absolute;
  right: 13px;
  bottom: -70px;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
  
}`;
  class w extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" }).innerHTML = this.render();
    }
    render() {
      return (
        /* HTML */
        `
      <style>
        ${b}
      </style>
      <div class="slider">
        <div class="slider-track">
          <slot></slot>
        </div>
        <div class="slider-swipe-indicator">
          <img src="${c}/swipe_left.gif" alt="" width="79" height="79" loading="lazy" />
        </div>
      </div>
    `
      );
    }
    connectedCallback() {
      const t = this.querySelectorAll(":scope > *"), e = {
        rootMargin: "0px",
        threshold: 1
      }, n = (r) => {
        r.forEach((o) => {
          var l;
          const i = o.target;
          o.isIntersecting ? (i.classList.add("is-visible"), (l = this.shadowRoot) == null || l.dispatchEvent(
            new CustomEvent("crs-slide-change", {
              detail: {
                activeSlideIndex: Number(i.dataset.slideIndex)
              },
              bubbles: !0,
              composed: !0
            })
          )) : i.classList.remove("is-visible");
        });
      }, a = new IntersectionObserver(n, e);
      t.forEach((r, o) => {
        a.observe(r);
      });
    }
  }
  const v = "";
  g({ name: "PetZen Shopify experiment with slider on 1st screen Shopify", dev: "OS" }), h("exp_slider");
  class y {
    constructor() {
      this.device = window.innerWidth > 768 ? "desktop" : "mobile", this.init();
    }
    init() {
      this.device === "desktop" || !location.pathname.includes("zenpatch-pet") || (this.addStyles(), this.initComponents(), this.initChanges());
    }
    initComponents() {
      customElements.get("crs-slider") || customElements.define("crs-slider", w);
    }
    async initChanges() {
      const t = new Promise((e) => setTimeout(e, 2e3));
      await Promise.race([p(".lp-tr--hero-section"), t]), new f();
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = v, document.head.appendChild(t);
    }
  }
  new y();
})();
