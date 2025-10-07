(function() {
  "use strict";
  const d = (t, e, i, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: e,
      event_type: i,
      event_loc: s
    }), v(`Event: ${t} | ${e} | ${i} | ${s}`, "success");
  }, p = (t) => new Promise((e) => {
    const i = document.querySelector(t);
    i && e(i);
    const s = new MutationObserver(() => {
      const r = document.querySelector(t);
      r && (e(r), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), h = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, g = (t) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, v = (t, e = "info") => {
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
  }, n = "https://conversionrate-store.github.io/a-b_images/natpat", m = `.lp-tr--hero-section {
  background: #0d7650;
}

.lp-tr--hero-section :is(.lp-tr--main-title, .lp-tr--hero-lists) {
  display: none;
}

.lp-tr--float-right-img {
  filter: drop-shadow(0 0 100px rgba(255, 255, 255, 0.3));
}

.lp-tr--hero-section .lp-tr--btn {
  margin-top: -20px !important;
}

.lp-tr--hero-section .lp-tr--kids-tick-mb-img {
  max-width: 241px !important;
  filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.6));
}

.lp-tr--hero-section .lp-tr--btn a.scroll-to-checkout {
  margin-inline: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  font-weight: 700 !important;
}
crs-slider {
  display: block;
  margin-inline: -30px;
  width: calc(100% + 60px);
}
.crs-slide {
  scroll-snap-align: center;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 302px;
  min-height: 393px;
  padding: 24px 16px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-family: 'D-DIN', sans-serif;
  background: #084730;
  color: #fff;
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
  font-size: 20px;
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
  margin-top: 22px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 16px;
}

.crs-slide-description-list li {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  font-style: normal;
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
  gap: 12px 16px;
}

.crs-slide-solution-grid .crs-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.crs-slide-solution-grid .crs-text {
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
`;
  class u {
    constructor() {
      this.section = document.querySelector(
        ".lp-tr--hero-section"
      ), this.init();
    }
    init() {
      this.addStyles(), this.changeHeaderSectionImages(), this.addSlider();
    }
    addSlider() {
      const e = this.section.querySelector(".lp-tr--main-title"), i = (
        /* HTML */
        ` <crs-slider>
      <div class="crs-slide" data-slide-index="1">
        <div class="crs-slide-title crs-highlight">Help Your Pet Stay Zen</div>
        <div class="crs-slide-subtitle">
          No More Stressing, <br />
          No Matter Where They Go!
        </div>

        <img
          src="${n}/zenpatch_sticker.webp"
          alt=""
          width="142"
          height="137"
          loading="lazy"
          style="margin-top: 22px;"
        />

        <ul class="crs-slide-description-list">
          <li>100% Safe</li>
          <li>Peel-and-Stick</li>
          <li>Dog & Cat</li>
          <li>Anxiety Aid</li>
        </ul>
      </div>
      <div class="crs-slide" data-slide-index="2">
        <div class="crs-slide-title">
          Proven to Calm Pets <br />
          in Stressful Moments
        </div>
        <div class="crs-slide-solution-grid">
          <div class="crs-item">
            <div class="crs-icon">
              <img
                src="${n}/noise.svg"
                alt=""
                width="32"
                height="32"
                loading="lazy"
              />
            </div>
            <div class="crs-text">Loud noise</div>
          </div>
          <div class="crs-item">
            <div class="crs-icon">
              <img
                src="${n}/fireworks.svg"
                alt=""
                width="32"
                height="32"
                loading="lazy"
              />
            </div>
            <div class="crs-text">Fireworks</div>
          </div>
          <div class="crs-item">
            <div class="crs-icon">
              <img
                src="${n}/storm.svg"
                alt=""
                width="32"
                height="32"
                loading="lazy"
              />
            </div>
            <div class="crs-text">Storm</div>
          </div>
          <div class="crs-item">
            <div class="crs-icon">
              <img
                src="${n}/separation.svg"
                alt=""
                width="32"
                height="32"
                loading="lazy"
              />
            </div>
            <div class="crs-text">Separation anxiety</div>
          </div>
          <div class="crs-item">
            <div class="crs-icon">
              <img
                src="${n}/unfamiliar_pets.svg"
                alt=""
                width="32"
                height="32"
                loading="lazy"
              />
            </div>
            <div class="crs-text">
              Unfamiliar <br />
              pets / people
            </div>
          </div>
          <div class="crs-item">
            <div class="crs-icon">
              <img
                src="${n}/vet_visit.svg"
                alt=""
                width="32"
                height="32"
                loading="lazy"
              />
            </div>
            <div class="crs-text">Vet Visits</div>
          </div>
        </div>
      </div>
      <div class="crs-slide" data-slide-index="3">
        <div class="crs-slide-title">
          <span class="crs-highlight">ONLY!</span> 100% Natural <br />
          & Safe Ingredients
        </div>
        <div class="crs-slide-description">
          Every patch is made from
          <span class="crs-highlight">bamboo fibers</span> <br />
          Infused with:
        </div>
        <img
          src="${n}/zenpatch_ingredients.webp"
          alt=""
          width="100%"
          height="auto"
          loading="lazy"
        />
      </div>
      <div class="crs-slide" data-slide-index="4">
        <div class="crs-slide-title">
          <span class="crs-highlight">All-Day</span> <br />
          Calming Support
        </div>
        <div class="crs-slide-description">
          Slow-release diffusion provides continuous calming effect —
          <span class="crs-highlight"> day or night </span>
        </div>
        <img
          src="${n}/zenpatch_diffusion.webp"
          alt=""
          width="100%"
          height="auto"
          loading="lazy"
          style="margin-top: 22px;"
        />
      </div>
      <div class="crs-slide" data-slide-index="5">
        <img
          src="${n}/zenpatch_great_for.webp"
          alt=""
          width="100%"
          height="auto"
          loading="lazy"
        />
      </div>
      <div class="crs-slide" data-slide-index="6">
        <img
          src="${n}/zenpatch_result.webp"
          alt=""
          width="100%"
          height="auto"
          loading="lazy"
        />
      </div>
    </crs-slider>`
      );
      e == null || e.insertAdjacentHTML("afterend", i);
      const s = this.section.querySelector("crs-slider");
      let r = 0;
      s == null || s.addEventListener("crs-slide-change", (o) => {
        const l = o.detail.activeSlideIndex;
        clearTimeout(this.activeSlideTimeout), this.activeSlideTimeout = setTimeout(() => {
          l !== r && d("exp_slider_view_1", `${l}`, "view", "Slider"), r = l;
        }, 300);
      });
    }
    changeHeaderSectionImages() {
      const e = this.section.querySelector(
        ".lp-tr--float-right-img"
      ), i = this.section.querySelector(
        ".lp-tr--learn-more-btn img"
      );
      e && (e.src = `${n}/lp-pet-zen--dog-cat.webp`), i && (i.src = `${n}/arrow_down.svg`);
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = m, document.head.appendChild(e);
    }
  }
  const x = `.slider {
  --slides-gap: 14px;
  width: 100%;
}

.slider-track {
  display: flex;
  gap: var(--slides-gap);
  overflow-y: auto;
  padding-inline: 16px;
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
}`;
  class f extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" }).innerHTML = this.render();
    }
    render() {
      return (
        /* HTML */
        `
      <style>
        ${x}
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
      const e = this.querySelectorAll(":scope > *"), i = {
        rootMargin: "0px",
        threshold: 1
      }, s = (o) => {
        o.forEach((a) => {
          var c;
          const l = a.target;
          console.log(a), a.isIntersecting ? (l.classList.add("is-visible"), (c = this.shadowRoot) == null || c.dispatchEvent(
            new CustomEvent("crs-slide-change", {
              detail: {
                activeSlideIndex: Number(l.dataset.slideIndex)
              },
              bubbles: !0,
              composed: !0
            })
          )) : l.classList.remove("is-visible");
        });
      }, r = new IntersectionObserver(s, i);
      e.forEach((o, a) => {
        r.observe(o);
      });
    }
  }
  h({ name: "PetZen Shopify experiment with slider on 1st screen Shopify", dev: "OS" }), g("exp_slider");
  class w {
    constructor() {
      this.device = window.innerWidth > 768 ? "desktop" : "mobile", this.init();
    }
    init() {
      this.device !== "desktop" && (this.addStyles(), this.initComponents(), this.initChanges());
    }
    initComponents() {
      customElements.get("crs-slider") || customElements.define("crs-slider", f);
    }
    async initChanges() {
      const e = new Promise((i) => setTimeout(i, 1e3));
      await Promise.race([p("lp-tr--hero-section"), e]), new u();
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = "", document.head.appendChild(e);
    }
  }
  new w();
})();
