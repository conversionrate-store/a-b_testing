(function() {
  "use strict";
  const a = (t) => new Promise((e) => {
    const l = document.querySelector(t);
    l && e(l);
    const i = new MutationObserver(() => {
      const n = document.querySelector(t);
      n && (e(n), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), v = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, y = (t) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, r = "https://conversionrate-store.github.io/a-b_images/natpat/video/reels_2", c = [
    {
      previewImageSrc: `${r}/preview_1.gif`,
      videoSrc: `${r}/reels_1.mp4`,
      description: "Car rides used to be, panting, drooling, shaking the whole thing. I put one of those calming stickers in her locket before we left and she just, curled up."
    },
    {
      previewImageSrc: `${r}/preview_2.gif`,
      videoSrc: `${r}/reels_2.mp4`,
      description: "My cat hates being groomed, like, hates it. Freezes up, won't come out of the carrier, the whole thing. I tried the calming patch before the appointment, and, The groomer actually said she did better than ever."
    },
    {
      previewImageSrc: `${r}/preview_3.gif`,
      videoSrc: `${r}/reels_3.mp4`,
      description: "My friend told me about these calming stickers and I was like, whatever, sure, put one in her little locket before a storm last week, and she actually settled? Like, she still noticed it, but she wasn't panicking. I'm not saying it's magic, but we actually slept through a thunderstorm."
    }
  ];
  class S {
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
      e.querySelectorAll(".card-item").forEach((i, n) => {
        var m, g, p;
        const o = i.querySelector(".card-gif"), s = i.querySelector("video"), h = i.querySelector(".card-box > p"), u = i.querySelector(".fullscreen-btn");
        o && s && h && (o.src = ((m = c[n]) == null ? void 0 : m.previewImageSrc) || "", s.src = ((g = c[n]) == null ? void 0 : g.videoSrc) || "", h.textContent = `${((p = c[n]) == null ? void 0 : p.description) || h.textContent}`, u && u.addEventListener("click", async () => {
          var w;
          const d = await a(
            "#fullscreen-video"
          );
          d && (s.pause(), document.querySelectorAll("video").forEach((f) => {
            f !== d && f.pause();
          }), d.src = ((w = c[n]) == null ? void 0 : w.videoSrc) || "", setTimeout(() => {
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
  class I {
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
      e.querySelectorAll(".card-item").forEach((i, n) => {
        var s;
        const o = i.querySelector(".card-gif");
        o && (o.src = ((s = c[n]) == null ? void 0 : s.previewImageSrc) || "");
      });
    }
    async getTargetSection() {
      this.elements = [
        await a("#in-action-cards"),
        await a("#in-action-slider")
      ];
    }
  }
  const b = "";
  v({ name: "New PetZen - Social Proof Reels", dev: "OS" }), y("exp_reels");
  class C {
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
      e.textContent = b, document.head.appendChild(e);
    }
  }
  new I(), window.onload = () => {
    new C();
  };
})();
