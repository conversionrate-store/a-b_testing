(function() {
  "use strict";
  const l = (s, n, t, e = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: n,
      event_type: t,
      event_loc: e
    }), m(`Event: ${s} | ${n} | ${t} | ${e}`, "success");
  }, p = (s) => new Promise((n) => {
    const t = document.querySelector(s);
    t && n(t);
    const e = new MutationObserver(() => {
      const i = document.querySelector(s);
      i && (n(i), e.disconnect());
    });
    e.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), g = ({ name: s, dev: n }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, h = (s) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", s, "variant_1"));
    }, 1e3);
  }, m = (s, n = "info") => {
    let t;
    switch (n) {
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
    console.log(`%c>>> ${s}`, `${t} font-size: 16px; font-weight: 600`);
  }, a = "https://conversionrate-store.github.io/a-b_images/natpat", u = `.lp-tr--hero-section {
  background: #1c6f5c !important;
  padding: 30px 0 280px !important;
}

.lp-tr--hero-section :is(.lp-tr--main-title, .lp-tr--hero-lists) {
  display: none;
}

.lp-tr--float-right-img {
  bottom: 10px !important;
  filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.6))
    drop-shadow(0 0 150px rgba(255, 255, 255, 0.3));
}

.lp-tr--hero-section .lp-tr--btn {
  display: none;
}

.lp-tr--hero-section .lp-tr--kids-tick-mb-img {
  max-width: 241px !important;
  filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.6));
}

.lp-tr--hero-section .container-fluid {
  margin-top: 20px;
}

.lp-tr--learn-more-btn {
  margin-top: 0 !important;
  margin-bottom: 20px !important;
}

.lp-tr--learn-more-btn:hover,
.lp-tr--learn-more-btn:focus {
  color: #fff !important;
}

.lp-tr--learn-more-btn img {
  margin-top: 13px !important;
  margin-bottom: 22px !important;
}

crs-slider {
  display: block;
  margin-inline: -30px;
  width: calc(100% + 60px);
}
.crs-slide {
  position: relative;
}
.crs-slide-wrap {
  position: relative;
  scroll-snap-align: center;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  min-height: 379px;
  padding: 24px 16px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-family: 'DIN Next', sans-serif;
  background: #084730;
  color: #fff;
  overflow: hidden;
}

.crs-slide-wrap.wide {
  width: 320px;
}
.crs-slide-wrap img.full {
  margin-inline: -16px;
  width: calc(100% + 32px);
}
.crs-slide-wrap img.offset-1 {
  object-position: right -4px top -17px;
}
.crs-slide-wrap img.top-33 {
  margin-top: -33px;
}

.crs-slide-wrap.full {
  padding: 0;
  padding-bottom: 24px;
}

.crs-slide-wrap.full img {
  height: 100%;
}

.crs-slide-wrap.with-background {
  background-size: cover;
  background-position: top;
  border: none;
}

.crs-slide-wrap.transparent {
  background: transparent;
  border: none;
}

.crs-slide-wrap.blue-bg {
  background: #183ea9 -1.353px 108.024px / 100% 67.749% no-repeat;
}

.crs-slide-wrap.custom-padding-1 {
  padding: 12px;
  padding-bottom: 0;
}

.crs-slide-wrap.custom-padding-2 {
  padding: 16px;
  padding-bottom: 24px;
}

.crs-slide-wrap:is([data-slide-index='5'], [data-slide-index='6']) {
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
  line-height: 28px;
}

.crs-slide-description {
  margin-top: 6px;
  margin-inline: -2px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
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

.crs-slide-solution-grid .crs-icon img {
  width: 32px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
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
  margin-top: -30px;
  margin-inline: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  min-height: 52px;
  padding: 14px 20px;
  border-radius: 50px;
  z-index: 2;
  text-align: center;
  color: #000;
  font-family: 'DIN Next', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px; /* 120% */
  text-transform: uppercase;
  background: #ffa311;
  box-shadow: 0 4px 24px 0 rgba(255, 255, 255, 0.55);
}

.crs-action-button:hover,
.crs-action-button:focus {
  color: #000;
}
.slider-swipe-indicator {
  position: absolute;
  top: 149px;
  right: calc(-87px / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  width: 87px;
  height: 87px;
  border-radius: 50%;
  background: rgba(50, 125, 108, 0.36);
  backdrop-filter: blur(2px);
  z-index: 9;
}

.slider-swipe-indicator img {
  width: 63px;
  height: 63px;
  object-fit: contain;
}
`, x = [
    {
      title: '<span class="crs-highlight">Help Your Pet Stay Zen</span>',
      subtitle: "No More Stressing, <br />No Matter Where They Go!",
      list: [
        "For Dogs & Cats",
        "All-Day Calming Effect",
        "Easy Peel & Stick",
        "100% Natural & Safe"
      ],
      templates: ["transparent", "custom-padding-1"],
      image: {
        src: "//www.natpat.com/cdn/shop/files/header-mobile-zp-pet-stickers.png?v=7126975986313487252",
        width: "108%",
        height: "auto",
        style: "margin-top: 24px;"
      },
      animationHand: !0
    },
    {
      image: {
        src: "best-product.webp",
        width: "100%",
        height: "auto",
        templates: ["offset-1"]
      },
      templates: ["with-background", "full"],
      backgroundImage: {
        src: "bg-2.webp"
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
      templates: ["blue-bg", "custom-padding-2", "wide"]
    },
    {
      title: 'Proven to <span class="crs-highlight">Calm Pets</span> <br />in Stressful Moments',
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
      ]
    },
    {
      image: {
        src: "zenpatch_great_for.webp",
        width: "100%",
        height: "auto"
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
      }
    },
    {
      image: {
        src: "zenpatch_result.webp",
        width: "100%",
        height: "auto"
      }
    }
  ];
  class f {
    constructor() {
      this.activeSlideIndex = 1, this.section = document.querySelector(
        ".lp-tr--hero-section"
      ), this.init();
    }
    init() {
      this.addStyles(), this.changeHeaderSectionImages(), this.addSlider();
    }
    addSlider() {
      const n = this.section.querySelector(".lp-tr--main-title"), t = (
        /* HTML */
        `
      <crs-slider>
        ${x.map((r, o) => this.renderSlide(r, o)).join("")}
      </crs-slider>
      <a href="#lptrPurchase" class="crs-action-button "
        >Get Zen Stickers Now</a
      >
    `
      );
      n == null || n.insertAdjacentHTML("afterend", t), l("exp_slider_view_1", "1", "view", "Slider");
      const e = this.section.querySelector("crs-slider"), i = this.section.querySelector(".crs-action-button");
      let c = 0;
      e == null || e.addEventListener("crs-slide-change", (r) => {
        const o = r;
        this.activeSlideIndex = o.detail.activeSlideIndex, clearTimeout(this.activeSlideTimeout), this.activeSlideTimeout = setTimeout(() => {
          this.activeSlideIndex !== c && l(
            "exp_slider_view_1",
            `${this.activeSlideIndex}`,
            "view",
            "Slider"
          ), c = this.activeSlideIndex;
        }, 1e3);
      }), i == null || i.addEventListener("click", (r) => {
        l(
          "exp_slider_click_1",
          `${this.activeSlideIndex}`,
          "click",
          "Slider"
        );
      });
    }
    renderSlide(n, t) {
      const e = [];
      if (n.title) {
        const i = (n.title.includes("crs-highlight"), "crs-slide-title");
        e.push(`<div class="${i}">${n.title}</div>`);
      }
      if (n.subtitle && e.push(
        `<div class="crs-slide-subtitle">${n.subtitle}</div>`
      ), n.description && e.push(
        `<div class="crs-slide-description">${n.description}</div>`
      ), n.list && e.push(`
        <ul class="crs-slide-description-list">
          ${n.list.map((i) => `<li>${i}</li>`).join("")}
        </ul>
      `), n.image) {
        const i = n.image.style ? `style="${n.image.style}"` : "";
        e.push(`
        <img
          src="${n.image.src.startsWith("//") ? n.image.src : `${a}/${n.image.src}`}"
          alt=""
          width="${n.image.width}"
          height="${n.image.height}"
          loading="lazy"
          ${i}
          class="${n != null && n.image.templates ? n.image.templates.join(" ") : ""}"
        />
      `);
      }
      return n.grid && e.push(`
        <div class="crs-slide-solution-grid">
          ${n.grid.map(
        (i) => `
            <div class="crs-item">
              <div class="crs-icon">
                <img
                  src="${a}/${i.icon}"
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
      `), /* HTML */
      `
      <div class="crs-slide" data-slide-index="${t + 1}">
        <div
          class="crs-slide-wrap  ${n != null && n.templates ? n.templates.join(" ") : ""}"
          style="${n.backgroundImage ? `background-image: url('${a}/${n.backgroundImage.src}');` : ""}"
        >
          ${e.join("")}
        </div>
        ${n != null && n.animationHand ? (
        /* HTML */
        ` <div class="slider-swipe-indicator">
              <img
                src="${a}/swipe_left.gif"
                alt=""
                width="79"
                height="79"
                loading="lazy"
              />
            </div>`
      ) : ""}
      </div>
    `;
    }
    changeHeaderSectionImages() {
      const n = this.section.querySelector(
        ".lp-tr--float-right-img"
      );
      this.section.querySelector(
        ".lp-tr--kids-tick-mb-img.lp-tr--mobile"
      );
      const t = this.section.querySelector(
        ".lp-tr--learn-more-btn img"
      );
      n && (n.src = `${a}/lp-pet-zen--dog-cat.webp`), t && (t.src = `${a}/arrow_down.svg`);
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = u, document.head.appendChild(n);
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
`;
  class w extends HTMLElement {
    constructor() {
      super(), this.initialLoad = !0, this.attachShadow({ mode: "open" }).innerHTML = this.render();
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
      </div>
    `
      );
    }
    connectedCallback() {
      const n = this.querySelectorAll(":scope > *"), t = {
        rootMargin: "0px",
        threshold: 1
      }, e = (c) => {
        c.forEach((r) => {
          var d;
          const o = r.target;
          if (r.isIntersecting) {
            if (o.classList.add("is-visible"), this.initialLoad) {
              this.initialLoad = !1;
              return;
            }
            (d = this.shadowRoot) == null || d.dispatchEvent(
              new CustomEvent("crs-slide-change", {
                detail: {
                  activeSlideIndex: Number(o.dataset.slideIndex)
                },
                bubbles: !0,
                composed: !0
              })
            );
          } else
            o.classList.remove("is-visible");
        });
      }, i = new IntersectionObserver(e, t);
      n.forEach((c, r) => {
        i.observe(c);
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
      const n = new Promise((t) => setTimeout(t, 2e3));
      await Promise.race([p(".lp-tr--hero-section"), n]), new f();
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = v, document.head.appendChild(n);
    }
  }
  new y();
})();
