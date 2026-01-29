(function() {
  "use strict";
  const c = (t) => new Promise((e) => {
    const a = document.querySelector(t);
    a && e(a);
    const n = new MutationObserver(() => {
      const i = document.querySelector(t);
      i && (e(i), n.disconnect());
    });
    n.observe(document.documentElement, {
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
  }, r = "https://conversionrate-store.github.io/a-b_images/natpat/video/reels_2", s = [
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
      e.querySelectorAll(".card-item").forEach((n, i) => {
        var p, g, f;
        const h = n.querySelector(".card-gif"), l = n.querySelector("video"), d = n.querySelector(".card-box > p"), m = n.querySelector(".fullscreen-btn");
        h && l && d && (h.src = ((p = s[i]) == null ? void 0 : p.previewImageSrc) || "", l.src = ((g = s[i]) == null ? void 0 : g.videoSrc) || "", d.textContent = `${((f = s[i]) == null ? void 0 : f.description) || d.textContent}`, m && m.addEventListener("click", async () => {
          var w;
          const o = await c(
            "#fullscreen-video"
          );
          o && (l.pause(), document.querySelectorAll("video").forEach((v) => {
            v !== o && v.pause();
          }), o.src = ((w = s[i]) == null ? void 0 : w.videoSrc) || "", setTimeout(() => {
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
  const I = "";
  y({ name: "New PetZen - Social Proof Reels", dev: "OS" }), S("exp_reels");
  class u {
    constructor() {
      this.init();
    }
    init() {
      this.isTargetPage() && (this.addStyles(), new b());
    }
    isTargetPage() {
      return location.pathname.includes("zenpatch-pet");
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = I, document.head.appendChild(e);
    }
  }
  new u(), window.onload = () => {
    new u();
  };
})();
