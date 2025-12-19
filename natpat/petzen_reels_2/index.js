(function() {
  "use strict";
  const l = (t) => new Promise((e) => {
    const n = document.querySelector(t);
    n && e(n);
    const r = new MutationObserver(() => {
      const s = document.querySelector(t);
      s && (e(s), r.disconnect());
    });
    r.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), v = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, w = (t) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, i = "https://conversionrate-store.github.io/a-b_images/natpat/video/reels_2", o = [
    {
      previewImageSrc: `${i}/preview_1.gif`,
      videoSrc: `${i}/reels_1.mp4`,
      description: "Your drawer is full of gimmicks. Choose Natpat Pet Zen vapor stickers. Lightweight, travel-ready and effective real calm from one sticker instead of complicated contraptions"
    },
    {
      previewImageSrc: `${i}/preview_2.gif`,
      videoSrc: `${i}/reels_2.mp4`,
      description: "Different triggers need different tools. NatPat Pet Zen vapor stickers handle thunder, fireworks, separation, and vet days with one consistent, collar-ready approach."
    },
    {
      previewImageSrc: `${i}/preview_3.gif`,
      videoSrc: `${i}/reels_3.mp4`,
      description: "Stress hormones spiral during triggers. NatPat Petzen vapor stickers provide soothing aromatics linked to calmer physiology, helping your pet deescalate quickly and stay settled, fun"
    }
  ];
  class y {
    constructor() {
      this.element = null, this.init();
    }
    async init() {
      await this.getTargetSection(), this.changeCardItems(), console.log("Action Card Changes initialized", this.element);
    }
    changeCardItems() {
      if (!this.element) return;
      this.element.querySelectorAll(".card-item").forEach((n, r) => {
        var g, u, m, f;
        const s = n.querySelector(".card-gif"), d = n.querySelector("video"), c = n.querySelector(".card-box > p"), p = n.querySelector(".fullscreen-btn");
        s && d && c && (console.log("Updating card item", (g = o[r]) == null ? void 0 : g.previewImageSrc), s.src = ((u = o[r]) == null ? void 0 : u.previewImageSrc) || "", d.src = ((m = o[r]) == null ? void 0 : m.videoSrc) || "", c.textContent = `${((f = o[r]) == null ? void 0 : f.description) || c.textContent}`, p && p.addEventListener("click", async () => {
          var h;
          const a = await l(
            "#fullscreen-video"
          );
          a && (a.src = ((h = o[r]) == null ? void 0 : h.videoSrc) || "", a.play());
        }));
      });
    }
    async getTargetSection() {
      this.element = await l("#in-action-cards");
    }
  }
  const S = "";
  v({ name: "New PetZen - Social Proof Reels", dev: "OS" }), w("exp_reels");
  class I {
    constructor() {
      this.init();
    }
    init() {
      this.isTargetPage() && (this.addStyles(), new y());
    }
    isTargetPage() {
      return location.pathname.includes("zenpatch-pet");
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = S, document.head.appendChild(e);
    }
  }
  new I();
})();
