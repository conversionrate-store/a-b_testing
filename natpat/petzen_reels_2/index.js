(function() {
  "use strict";
  const c = (s) => new Promise((e) => {
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
  }), S = ({ name: s, dev: e }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, y = (s) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", s, "variant_1"));
    }, 1e3);
  }, n = "https://conversionrate-store.github.io/a-b_images/natpat/video/reels_2", l = [
    {
      previewImageSrc: `${n}/preview_1.gif`,
      videoSrc: `${n}/reels_1.mp4`,
      description: "Car rides used to be, panting, drooling, shaking the whole thing. I put one of those calming stickers in her locket before we left and she just, curled up."
    },
    {
      previewImageSrc: `${n}/preview_2.gif`,
      videoSrc: `${n}/reels_2.mp4`,
      description: "My cat hates being groomed, like, hates it. Freezes up, won't come out of the carrier, the whole thing. I tried the calming patch before the appointment, and, The groomer actually said she did better than ever."
    },
    {
      previewImageSrc: `${n}/preview_3.gif`,
      videoSrc: `${n}/reels_3.mp4`,
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
      this.slider = await c("#in-action-slider .slick-initialized"), this.slider && this.slider.slick.slickPause();
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
        var m, p, f;
        const u = t.querySelector(".card-gif"), a = t.querySelector("video"), d = t.querySelector(".card-box > p"), h = t.querySelector(".fullscreen-btn");
        u && a && d && (u.src = ((m = l[i]) == null ? void 0 : m.previewImageSrc) || "", a.src = ((p = l[i]) == null ? void 0 : p.videoSrc) || "", a.load(), d.textContent = `${((f = l[i]) == null ? void 0 : f.description) || d.textContent}`, this.setupVideoAutoPause(a), h && h.addEventListener("click", async () => {
          var g;
          const o = await c(
            "#fullscreen-video"
          );
          o && (a.pause(), document.querySelectorAll("video").forEach((w) => {
            w !== o && w.pause();
          }), o.src = ((g = l[i]) == null ? void 0 : g.videoSrc) || "", o.load(), setTimeout(() => {
            o.play();
          }, 100));
        }));
      });
    }
    async getTargetSection() {
      this.elements = [
        await c("#in-action-cards"),
        await c("#in-action-slider")
      ];
    }
  }
  const b = "";
  S({ name: "New PetZen - Social Proof Reels", dev: "OS" }), y("exp_reels");
  class k {
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
      e.textContent = b, document.head.appendChild(e);
    }
  }
  window.onload = () => {
    new k();
  };
})();
