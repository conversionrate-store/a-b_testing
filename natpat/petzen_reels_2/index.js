(function() {
  "use strict";
  const a = (s) => new Promise((e) => {
    const r = document.querySelector(s);
    r && e(r);
    const t = new MutationObserver(() => {
      const i = document.querySelector(s);
      i && (e(i), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), y = ({ name: s, dev: e }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, I = (s) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", s, "variant_1"));
    }, 1e3);
  }, o = "https://conversionrate-store.github.io/a-b_images/natpat/video/reels_2", c = [
    {
      previewImageSrc: `${o}/preview_1.gif`,
      videoSrc: `${o}/reels_1.mp4`,
      description: "Car rides used to be, panting, drooling, shaking the whole thing. I put one of those calming stickers in her locket before we left and she just, curled up."
    },
    {
      previewImageSrc: `${o}/preview_2.gif`,
      videoSrc: `${o}/reels_2.mp4`,
      description: "My cat hates being groomed, like, hates it. Freezes up, won't come out of the carrier, the whole thing. I tried the calming patch before the appointment, and, The groomer actually said she did better than ever."
    },
    {
      previewImageSrc: `${o}/preview_3.gif`,
      videoSrc: `${o}/reels_3.mp4`,
      description: "My friend told me about these calming stickers and I was like, whatever, sure, put one in her little locket before a storm last week, and she actually settled? Like, she still noticed it, but she wasn't panicking. I'm not saying it's magic, but we actually slept through a thunderstorm."
    }
  ];
  class v {
    constructor() {
      this.elements = null, this.slider = null, this.resumeTimeouts = /* @__PURE__ */ new WeakMap(), this.videoDurations = /* @__PURE__ */ new WeakMap(), this.init();
    }
    async init() {
      await this.getTargetSection(), await this.stopAutoSlide(), this.changeCardItems();
    }
    changeCardItems() {
      this.elements && this.elements.forEach((e) => this.updateCardItems(e));
    }
    async stopAutoSlide() {
      this.slider = await a("#in-action-slider .slick-initialized"), this.slider && this.slider.slick.slickPause();
    }
    pauseSlider() {
      this.slider && this.slider.slick.slickPause();
    }
    resumeSlider() {
      this.slider && this.slider.slick.slickPlay();
    }
    setupVideoAutoPause(e) {
      e._crsVideoHandled || (e._crsVideoHandled = !0, e.addEventListener("loadedmetadata", () => {
        const r = Number.isFinite(e.duration) ? e.duration : 0;
        this.videoDurations.set(e, r);
      }), e.addEventListener("play", () => {
        this.pauseSlider();
        const r = this.resumeTimeouts.get(e);
        r && window.clearTimeout(r);
        const t = this.videoDurations.get(e) ?? 0;
        if (t > 0) {
          const i = window.setTimeout(() => {
            e.ended && this.resumeSlider();
          }, t * 1e3);
          this.resumeTimeouts.set(e, i);
        }
      }), e.addEventListener("pause", () => {
        e.ended || this.resumeSlider();
      }), e.addEventListener("ended", () => {
        this.resumeSlider();
      }));
    }
    updateCardItems(e) {
      e.querySelectorAll(".card-item").forEach((t, i) => {
        var p, g, w;
        const l = t.querySelector(".card-gif"), n = t.querySelector("video"), u = t.querySelector(".card-box > p"), m = t.querySelector(".fullscreen-btn");
        l && n && u && (l.src = ((p = c[i]) == null ? void 0 : p.previewImageSrc) || "", n.src = ((g = c[i]) == null ? void 0 : g.videoSrc) || "", n.load(), u.textContent = `${((w = c[i]) == null ? void 0 : w.description) || u.textContent}`, this.setupVideoAutoPause(n), m && m.addEventListener("click", async () => {
          var f;
          const d = await a(
            "#fullscreen-video"
          );
          d && (n.pause(), document.querySelectorAll("video").forEach((S) => {
            S !== d && S.pause();
          }), d.src = ((f = c[i]) == null ? void 0 : f.videoSrc) || "", d.load(), setTimeout(() => {
            d.play();
          }, 100));
        }));
      });
    }
    async getTargetSection() {
      this.elements = [
        await a("#in-action-cards"),
        await a("#in-action-slider")
      ];
    }
  }
  class b {
    constructor() {
      this.elements = null, this.init();
    }
    async init() {
      await this.getTargetSection(), this.changeCardItems();
    }
    changeCardItems() {
      this.elements && this.elements.forEach((e) => this.updateCardItems(e));
    }
    updateCardItems(e) {
      e.querySelectorAll(".card-item").forEach((t, i) => {
        var n;
        const l = t.querySelector(".card-gif");
        l && (l.src = ((n = c[i]) == null ? void 0 : n.previewImageSrc) || "");
      });
    }
    async getTargetSection() {
      this.elements = [
        await a("#in-action-cards"),
        await a("#in-action-slider")
      ];
    }
  }
  const k = "";
  y({ name: "New PetZen - Social Proof Reels", dev: "OS" }), I("exp_reels");
  class h {
    constructor() {
      this.init();
    }
    init() {
      this.isTargetPage() && (this.addStyles(), new v());
    }
    isTargetPage() {
      return location.pathname.includes("zenpatch-pet");
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = k, document.head.appendChild(e);
    }
  }
  new b(), new h(), window.onload = () => {
    new h();
  };
})();
