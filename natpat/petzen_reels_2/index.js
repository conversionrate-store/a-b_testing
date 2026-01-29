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
  }), y = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, S = (t) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, r = "https://conversionrate-store.github.io/a-b_images/natpat/video/reels_2", o = [
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
      e.querySelectorAll(".card-item").forEach((i, n) => {
        var m, g, p, f;
        const u = i.querySelector(".card-gif"), s = i.querySelector("video"), d = i.querySelector(".card-box > p"), h = i.querySelector(".fullscreen-btn");
        u && s && d && (console.log("Updating card item", (m = o[n]) == null ? void 0 : m.previewImageSrc), u.src = ((g = o[n]) == null ? void 0 : g.previewImageSrc) || "", s.src = ((p = o[n]) == null ? void 0 : p.videoSrc) || "", d.textContent = `${((f = o[n]) == null ? void 0 : f.description) || d.textContent}`, h && h.addEventListener("click", async () => {
          var w;
          const c = await a(
            "#fullscreen-video"
          );
          c && (console.log("video)", s), s.pause(), document.querySelectorAll("video").forEach((v) => {
            v !== c && v.pause();
          }), c.src = ((w = o[n]) == null ? void 0 : w.videoSrc) || "", setTimeout(() => {
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
  const b = "";
  y({ name: "New PetZen - Social Proof Reels", dev: "OS" }), S("exp_reels");
  class _ {
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
      e.textContent = b, document.head.appendChild(e);
    }
  }
  new _();
})();
