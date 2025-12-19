(function() {
  "use strict";
  const o = (t) => new Promise((e) => {
    const c = document.querySelector(t);
    c && e(c);
    const n = new MutationObserver(() => {
      const r = document.querySelector(t);
      r && (e(r), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), w = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, y = (t) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, i = "https://conversionrate-store.github.io/a-b_images/natpat/video/reels_2", s = [
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
  class S {
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
      e.querySelectorAll(".card-item").forEach((n, r) => {
        var g, m, f, h;
        const d = n.querySelector(".card-gif"), p = n.querySelector("video"), a = n.querySelector(".card-box > p"), u = n.querySelector(".fullscreen-btn");
        d && p && a && (console.log("Updating card item", (g = s[r]) == null ? void 0 : g.previewImageSrc), d.src = ((m = s[r]) == null ? void 0 : m.previewImageSrc) || "", p.src = ((f = s[r]) == null ? void 0 : f.videoSrc) || "", a.textContent = `${((h = s[r]) == null ? void 0 : h.description) || a.textContent}`, u && u.addEventListener("click", async () => {
          var v;
          const l = await o(
            "#fullscreen-video"
          );
          l && (l.src = ((v = s[r]) == null ? void 0 : v.videoSrc) || "", l.play());
        }));
      });
    }
    async getTargetSection() {
      this.elements = [
        await o("#in-action-cards"),
        await o("#in-action-slider")
      ];
    }
  }
  const I = "";
  w({ name: "New PetZen - Social Proof Reels", dev: "OS" }), y("exp_reels");
  class _ {
    constructor() {
      this.init();
    }
    init() {
      this.isTargetPage() && (this.addStyles(), new S());
    }
    isTargetPage() {
      return location.pathname.includes("zenpatch-pet");
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = I, document.head.appendChild(e);
    }
  }
  new _();
})();
