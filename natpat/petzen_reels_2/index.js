(function() {
  "use strict";
  const a = (n) => new Promise((e) => {
    const l = document.querySelector(n);
    l && e(l);
    const o = new MutationObserver(() => {
      const t = document.querySelector(n);
      t && (e(t), o.disconnect());
    });
    o.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), y = ({ name: n, dev: e }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, b = (n) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", n, "variant_1"));
    }, 1e3);
  }, i = "https://conversionrate-store.github.io/a-b_images/natpat/video/reels_2", r = [
    {
      previewImageSrc: `${i}/preview_1.gif`,
      videoSrc: `${i}/reels_1.mp4`,
      description: "Car rides used to be, panting, drooling, shaking the whole thing. I put one of those calming stickers in her locket before we left and she just, curled up."
    },
    {
      previewImageSrc: `${i}/preview_2.gif`,
      videoSrc: `${i}/reels_2.mp4`,
      description: "My cat hates being groomed, like, hates it. Freezes up, won't come out of the carrier, the whole thing. I tried the calming patch before the appointment, and, The groomer actually said she did better than ever."
    },
    {
      previewImageSrc: `${i}/preview_3.gif`,
      videoSrc: `${i}/reels_3.mp4`,
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
      e.querySelectorAll(".card-item").forEach((o, t) => {
        var g, m, p, f;
        const u = o.querySelector(".card-gif"), c = o.querySelector("video"), d = o.querySelector(".card-box > p"), h = o.querySelector(".fullscreen-btn");
        u && c && d && (console.log("Updating card item", (g = r[t]) == null ? void 0 : g.previewImageSrc), u.src = ((m = r[t]) == null ? void 0 : m.previewImageSrc) || "", c.src = ((p = r[t]) == null ? void 0 : p.videoSrc) || "", d.textContent = `${((f = r[t]) == null ? void 0 : f.description) || d.textContent}`, h && h.addEventListener("click", async () => {
          var w, v;
          console.log("Full screen button clicked");
          const s = await a(
            "#fullscreen-video"
          );
          s && (console.log("video", c), c.pause(), document.querySelectorAll("video").forEach((S) => {
            S !== s && S.pause();
          }), s.src = ((w = r[t]) == null ? void 0 : w.videoSrc) || "", console.log("fullScreenVideo", s), console.log("Setting video to full screen and playing", ((v = r[t]) == null ? void 0 : v.videoSrc) || ""), setTimeout(() => {
            s.play();
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
  y({ name: "New PetZen - Social Proof Reels", dev: "OS" }), b("exp_reels");
  class k {
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
  window.onload = () => {
    new k();
  };
})();
