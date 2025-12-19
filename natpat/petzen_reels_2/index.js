(function() {
  "use strict";
  const m = (t) => new Promise((e) => {
    const r = document.querySelector(t);
    r && e(r);
    const i = new MutationObserver(() => {
      const c = document.querySelector(t);
      c && (e(c), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), g = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, u = (t) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, n = "https://conversionrate-store.github.io/a-b_images/natpat/video/reels_2", o = [
    {
      previewImageSrc: `${n}/preview_1.gif`,
      videoSrc: `${n}/reels_1.mp4`
    },
    {
      previewImageSrc: `${n}/preview_2.gif`,
      videoSrc: `${n}/reels_2.mp4`
    },
    {
      previewImageSrc: `${n}/preview_3.gif`,
      videoSrc: `${n}/reels_3.mp4`
    }
  ];
  class h {
    constructor() {
      this.element = null, this.init();
    }
    async init() {
      await this.getTargetSection(), this.changeCardItems(), console.log("Action Card Changes initialized", this.element);
    }
    changeCardItems() {
      if (!this.element) return;
      this.element.querySelectorAll(".card-item").forEach((r, i) => {
        var a, l, d;
        const c = r.querySelector(".card-gif"), s = r.querySelector("video");
        c && s && (console.log("Updating card item", (a = o[i]) == null ? void 0 : a.previewImageSrc), c.src = ((l = o[i]) == null ? void 0 : l.previewImageSrc) || "", s.src = ((d = o[i]) == null ? void 0 : d.videoSrc) || "");
      });
    }
    async getTargetSection() {
      this.element = await m("#in-action-cards");
    }
  }
  const v = "";
  g({ name: "New PetZen - Social Proof Reels", dev: "OS" }), u("exp_reels");
  class p {
    constructor() {
      this.init();
    }
    init() {
      this.isTargetPage() && (this.addStyles(), new h());
    }
    isTargetPage() {
      return location.pathname.includes("zenpatch-pet");
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = v, document.head.appendChild(e);
    }
  }
  new p();
})();
