(function() {
  "use strict";
  const a = (t) => new Promise((e) => {
    const l = document.querySelector(t);
    l && e(l);
    const i = new MutationObserver(() => {
      const r = document.querySelector(t);
      r && (e(r), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), y = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, S = (t) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, n = "https://conversionrate-store.github.io/a-b_images/natpat/video/reels_2", o = [
    {
      previewImageSrc: `${n}/preview_1.gif`,
      videoSrc: `${n}/reels_1.mp4`,
      description: "Your drawer is full of gimmicks. Choose Natpat Pet Zen vapor stickers. Lightweight, travel-ready and effective real calm from one sticker instead of complicated contraptions"
    },
    {
      previewImageSrc: `${n}/preview_2.gif`,
      videoSrc: `${n}/reels_2.mp4`,
      description: "Different triggers need different tools. NatPat Pet Zen vapor stickers handle thunder, fireworks, separation, and vet days with one consistent, collar-ready approach."
    },
    {
      previewImageSrc: `${n}/preview_3.gif`,
      videoSrc: `${n}/reels_3.mp4`,
      description: "Stress hormones spiral during triggers. NatPat Petzen vapor stickers provide soothing aromatics linked to calmer physiology, helping your pet deescalate quickly and stay settled, fun"
    }
  ];
  class I {
    constructor() {
      this.elements = null, this.init();
    }
    async init() {
      await this.getTargetSection(), this.changeCardItems(), console.log("Action Card Changes initialized", this.elements);
    }
    changeCardItems() {
      this.elements && this.elements.forEach((e) => this.updateCardItems(e));
    }
    updateCardItems(e) {
      e.querySelectorAll(".card-item").forEach((i, r) => {
        var m, g, f, h;
        const u = i.querySelector(".card-gif"), s = i.querySelector("video"), d = i.querySelector(".card-box > p"), p = i.querySelector(".fullscreen-btn");
        u && s && d && (console.log("Updating card item", (m = o[r]) == null ? void 0 : m.previewImageSrc), u.src = ((g = o[r]) == null ? void 0 : g.previewImageSrc) || "", s.src = ((f = o[r]) == null ? void 0 : f.videoSrc) || "", d.textContent = `${((h = o[r]) == null ? void 0 : h.description) || d.textContent}`, p && p.addEventListener("click", async () => {
          var v;
          const c = await a(
            "#fullscreen-video"
          );
          c && (console.log("video)", s), s.pause(), document.querySelectorAll("video").forEach((w) => {
            w !== c && w.pause();
          }), c.src = ((v = o[r]) == null ? void 0 : v.videoSrc) || "", setTimeout(() => {
            c.play();
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
  const _ = "";
  y({ name: "New PetZen - Social Proof Reels", dev: "OS" }), S("exp_reels");
  class C {
    constructor() {
      this.init();
    }
    init() {
      this.isTargetPage() && (this.addStyles(), new I());
    }
    isTargetPage() {
      return location.pathname.includes("zenpatch-pet");
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = _, document.head.appendChild(e);
    }
  }
  new C();
})();
