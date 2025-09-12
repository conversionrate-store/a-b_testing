(function() {
  "use strict";
  const u = (l, e, t, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: l,
      event_desc: e,
      event_type: t,
      event_loc: n
    }), x(`Event: ${l} | ${e} | ${t} | ${n}`, "success");
  }, T = (l) => new Promise((e) => {
    const t = document.querySelector(l);
    t && e(t);
    const n = new MutationObserver(() => {
      const i = document.querySelector(l);
      i && (e(i), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), I = ({ name: l, dev: e }) => {
    console.log(
      `%c EXP: ${l} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, $ = (l) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", l, "variant_1"));
    }, 1e3);
  }, w = (l, e, t, n, i = 1e3, s = 0.5) => {
    let o, r;
    if (o = new IntersectionObserver(
      function(a) {
        a[0].isIntersecting === !0 ? r = setTimeout(() => {
          u(
            e,
            a[0].target.dataset.visible || n || "",
            "view",
            t
          ), o.disconnect();
        }, i) : (x("Element is not fully visible", "warn"), clearTimeout(r));
      },
      { threshold: [s] }
    ), typeof l == "string") {
      const a = document.querySelector(l);
      a && o.observe(a);
    } else
      o.observe(l);
  }, x = (l, e = "info") => {
    let t;
    switch (e) {
      case "info":
        t = "color: #3498db;";
        break;
      case "warn":
        t = "color: #f39c12;";
        break;
      case "error":
        t = "color: #e74c3c;";
        break;
      case "success":
        t = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${l}`, `${t} font-size: 16px; font-weight: 600`);
  }, P = `.crs-reels-section {
  padding-top: 32px;
  padding-bottom: 83px;
  background: linear-gradient(180deg, #f1f3f4 0%, #fff 100%);
}

.crs-reels-section + .wave-effect.js-mobile {
  display: none;
}

.reels-section__title {
  margin: 0 !important;
  color: #202020;
  text-align: center;
  font-family: Barlow !important;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 26.4px;
  text-transform: none;
}

.reels-section__content {
  margin-top: 32px;
}

.reels-section__action {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-inline: 22px;
}

.reels-section__action a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 65px;
}
`;
  class z {
    constructor({
      containerSelector: e,
      position: t
    }) {
      this.container = document.querySelector(e), this.position = t, this.container || x(`Container with selector ${e} not found`, "error"), this.section = null, this.init();
    }
    init() {
      this.addStyles(), this.render().catch(console.error), this.stopVideoByScroll();
    }
    async render() {
      this.section = document.createElement("section"), this.section.classList.add("js-mobile", "crs-reels-section"), this.section.innerHTML = /* html */
      `
    
    <div class="reels-section__container">
      <h2 class="reels-section__title">Watch PetZen Patches in Action</h2>
      <div class="reels-section__content">
        <crs-reels></crs-reels>
      </div>
      <div class="reels-section__action">
      <a href="#lptrPurchase" class="lp-pet-zen--btn lp-tr--mobile scroll-to-checkout">GET PET ZEN NOW</a>
      </div>
    </div>
    `, this.container.insertAdjacentElement(this.position, this.section), w(
        this.section,
        "exp_petzen_v9_view_1",
        "Reels section",
        "Real Stories From Our Customers",
        0
      ), w(
        this.section,
        "exp_petzen_v9_view_item_1",
        "Reels section",
        "1",
        0
      );
    }
    stopVideoByScroll() {
      const e = this.section.querySelector("crs-reels"), t = new IntersectionObserver((n) => {
        n.forEach((i) => {
          i.isIntersecting || e == null || e.stop(!0);
        });
      });
      this.section && t.observe(this.section);
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = P, document.head.appendChild(e);
    }
  }
  const R = `.lp-tr--purchase .lp-tr--gray-bg img.lp-tr--mobile {
  display: none;
}

.crs-product-carousel-section {
  background: #f7f6f4;
}
`;
  class V {
    constructor({
      containerSelector: e,
      position: t
    }) {
      this.container = document.querySelector(e), this.position = t, this.container || x(`Container with selector ${e} not found`, "error"), this.section = null, this.init();
    }
    init() {
      this.addStyles(), this.render().catch(console.error), this.stopVideoByScroll();
    }
    async render() {
      this.section = document.createElement("div"), this.section.classList.add("js-mobile", "crs-product-carousel-section"), this.section.innerHTML = /* html */
      `
    <div>
      <crs-product-slider></crs-product-slider>
    </div>
    `, this.container.insertAdjacentElement(this.position, this.section), w(
        this.section,
        "exp_petzen_v9_view_item_2",
        "Purchase section",
        "1",
        0
      );
    }
    stopVideoByScroll() {
      const e = this.section.querySelector("crs-product-slider"), t = new IntersectionObserver((n) => {
        n.forEach((i) => {
          i.isIntersecting || e == null || e.stop(!0);
        });
      });
      this.section && t.observe(this.section);
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = R, document.head.appendChild(e);
    }
  }
  const C = `* {
  box-sizing: border-box;
}

.reels-list {
  display: flex;
  gap: 16px;
  padding: 0;
  padding-inline: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.reels-list::-webkit-scrollbar {
  display: none;
}

.reels-item {
  flex-shrink: 0;
  width: 327px;
  min-width: 327px;
  height: max-content;
  padding: 16px 14px;
  border-radius: 16px;
  background: #1f50c9;
  scroll-snap-align: center;
}

.item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.item-video {
  position: relative;

  width: 168px;
  height: 299px;
  border-radius: 12px;
  overflow: hidden;
}

.item-video :is(video, img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-video-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  padding-left: 5px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  user-select: auto;
}

.item-video[data-state='off'] img {
  display: block;
}

.item-video[data-state='off'] video {
  display: none;
}

.item-video[data-state='on'] .item-video-icon {
  display: flex;
  user-select: none;
}

.item-video[data-state='on'] img {
  display: none;
}

.item-video[data-state='on'] video {
  display: block;
}

.item-video[data-state='on'] .item-video-icon {
  display: none;
  user-select: none;
}

.item-full-screen {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;
  z-index: 10;
  color: white;
}

.item-video[data-state='on'] .item-full-screen {
  display: flex;
}

/* Double-tap feedback animation */
.item-video.double-tap-feedback {
  animation: doubleTapPulse 0.3s ease-out;
}

@keyframes doubleTapPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  100% {
    transform: scale(1);
  }
}

.item-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.info__icon {
  width: 33px;
  height: 33px;
}

.info__text {
  color: #fff;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.6px;
}

.hidden {
  display: none;
}

.reels-pagination {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.reels-pagination-item {
  flex-shrink: 0;
  width: 10px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: none;
  background: #c9c9c9;
}

.reels-pagination-item.active {
  background: #ff3c7f;
}
`, c = "https://conversionrate-store.github.io/a-b_images/natpat/video/reels/", L = [
    {
      id: 1,
      image: `${c}/gif_petzen_1.gif`,
      video: `${c}/video_petzen_1.mp4`,
      text: "...it's great for separation anxiety, it's great for fireworks, it's great just to take that little bit of edge off"
    },
    {
      id: 2,
      image: `${c}/gif_petzen_2.gif`,
      video: `${c}/Video_petzen_2.mp4`,
      text: "No more fights, no more messes, no more pee accidents, just a calm, happy cat and a peaceful home"
    },
    {
      id: 3,
      image: `${c}/gif_petzen_3.gif`,
      video: `${c}/video_petzen_3.mp4`,
      text: "Just peel, stick, and calm."
    }
  ], k = [
    {
      id: 1,
      template: "image",
      image: `${c}/img_petzen_1.webp`
    },
    {
      id: 2,
      template: "video",
      bgColor: "blue",
      image: `${c}/gif_petzen_1.gif`,
      video: `${c}/video_petzen_1.mp4`,
      text: "...it's great for separation anxiety, it's great for fireworks, it's great just to take that little bit of edge off"
    },
    {
      id: 3,
      template: "image",
      image: `${c}/img_petzen_2.webp`
    },
    {
      id: 4,
      template: "image",
      image: `${c}/img_petzen_3.webp`
    },
    {
      id: 5,
      template: "video",
      bgColor: "blue",
      image: `${c}/gif_petzen_2.gif`,
      video: `${c}/Video_petzen_2.mp4`,
      text: "No more fights, no more messes, no more pee accidents, just a calm, happy cat and a peaceful home"
    },
    {
      id: 6,
      template: "image",
      image: `${c}/img_petzen_4.webp`
    },
    {
      id: 7,
      template: "video",
      bgColor: "blue",
      image: `${c}/gif_petzen_3.gif`,
      video: `${c}/video_petzen_3.mp4`,
      text: "Just peel, stick, and calm."
    },
    {
      id: 8,
      template: "image",
      image: `${c}/img_petzen_5.webp`
    }
  ], A = (
    /* html */
    '<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="none"><path fill="#fff" d="M6.767 23.93c-1.334-1.466-2.134-3.066-2.134-5.733 0-4.667 3.334-8.8 8-10.933l1.2 1.733c-4.4 2.4-5.333 5.467-5.6 7.467.667-.4 1.6-.534 2.534-.4 2.4.266 4.266 2.133 4.266 4.666 0 1.2-.533 2.4-1.333 3.334-.933.933-2 1.333-3.333 1.333-1.467 0-2.8-.667-3.6-1.467Zm13.333 0c-1.333-1.466-2.133-3.066-2.133-5.733 0-4.667 3.333-8.8 8-10.933l1.2 1.733c-4.4 2.4-5.334 5.467-5.6 7.467.666-.4 1.6-.534 2.533-.4 2.4.266 4.267 2.266 4.267 4.666 0 1.2-.534 2.4-1.334 3.334-.933.933-2 1.333-3.333 1.333-1.467 0-2.8-.667-3.6-1.467Z"/></svg>'
  ), E = (
    /* html */
    '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" fill="none"><path fill="#D9D9D9" d="M19.12 13.12 3.344 22.346c-1.333.78-3.01-.181-3.01-1.726V2.059C.333.51 2.018-.45 3.352.338L19.129 9.67c1.313.777 1.308 2.678-.008 3.448Z"/></svg>'
  ), q = `* {
  box-sizing: border-box;
}

.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 999999;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  backdrop-filter: blur(5px);
}

.fullscreen-overlay.show {
  display: flex;
}

.fullscreen-video-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fullscreen-video {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  position: relative;
}

.fullscreen-close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000000;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease;
  user-select: none;
}

.fullscreen-close-button:hover {
  background: rgba(255, 0, 0, 0.8);
  border-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.1);
}

.fullscreen-close-button:active {
  transform: scale(0.95);
}

.play-pause-indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000001;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  border: 3px solid rgba(255, 255, 255, 0.3);
}

.play-pause-indicator.show {
  opacity: 1;
  visibility: visible;
  animation: playPausePulse 0.5s ease-out;
}

@keyframes playPausePulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}

.video-progress-container {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  height: 4px;
  z-index: 1000001;
}

.video-progress-bar {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  cursor: pointer;
  transition: height 0.2s ease;
}

.video-progress-bar:hover {
  height: 6px;
}

.video-progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
  border-radius: 2px;
  transition: width 0.1s ease;
}

.video-progress-handle {
  position: absolute;
  top: 50%;
  left: 0%;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: grab;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
  opacity: 0;
}

.video-progress-bar:hover .video-progress-handle {
  opacity: 1;
}

.video-progress-handle:active {
  cursor: grabbing;
  transform: translate(-50%, -50%) scale(1.2);
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .video-progress-container {
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  
  .video-progress-handle {
    width: 16px;
    height: 16px;
    opacity: 1; /* Always visible on mobile */
  }
  
  .video-progress-bar {
    height: 6px;
  }
}


`, g = class g extends HTMLElement {
    // Track what the user actually wants
    constructor() {
      super(), this.overlay = null, this.videoContainer = null, this.closeButton = null, this.fullscreenVideo = null, this.originalVideo = null, this.isOpen = !1, this.progressBar = null, this.progressFill = null, this.progressHandle = null, this.isDragging = !1, this.currentSection = null, this.currentActiveIndex = 0, this.userIntendedPlayState = !1, this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = this.render(), this.init();
    }
    render() {
      return (
        /* html */
        `
      <style>
        ${q}
      </style>
      <div class="fullscreen-overlay" id="fullscreen-overlay">
        <div class="fullscreen-video-container" id="fullscreen-video-container">
          <button class="fullscreen-close-button" id="fullscreen-close-button" aria-label="Close fullscreen">
            ✕
          </button>
          <div class="play-pause-indicator" id="play-pause-indicator">
            ⏸
          </div>
          <div class="video-progress-container" id="video-progress-container">
            <div class="video-progress-bar" id="video-progress-bar">
              <div class="video-progress-fill" id="video-progress-fill"></div>
              <div class="video-progress-handle" id="video-progress-handle"></div>
            </div>
          </div>
          
        </div>
      </div>
    `
      );
    }
    init() {
      this.overlay = this.shadowRoot.getElementById(
        "fullscreen-overlay"
      ), this.videoContainer = this.shadowRoot.getElementById(
        "fullscreen-video-container"
      ), this.closeButton = this.shadowRoot.getElementById(
        "fullscreen-close-button"
      ), this.progressBar = this.shadowRoot.getElementById(
        "video-progress-bar"
      ), this.progressFill = this.shadowRoot.getElementById(
        "video-progress-fill"
      ), this.progressHandle = this.shadowRoot.getElementById(
        "video-progress-handle"
      ), this.setupEventListeners();
    }
    setupEventListeners() {
      var e, t;
      (e = this.closeButton) == null || e.addEventListener("click", () => {
        this.close();
      }), (t = this.overlay) == null || t.addEventListener("click", (n) => {
        n.target === this.overlay && this.close();
      }), document.addEventListener("keydown", (n) => {
        n.key === "Escape" && this.isOpen && this.close();
      });
    }
    open(e, t = !1, n, i) {
      if (this.isOpen || !e) return;
      g.closeAll(), this.originalVideo = e, this.isOpen = !0, this.currentSection = n || null, this.currentActiveIndex = i || 0, this.userIntendedPlayState = !e.paused, g.currentInstance = this, this.fullscreenVideo = e.cloneNode(!0), this.fullscreenVideo.classList.add("fullscreen-video"), this.fullscreenVideo.removeAttribute("loop"), this.fullscreenVideo.controls = !1, this.fullscreenVideo.currentTime = e.currentTime;
      let s = !t;
      t && setTimeout(() => {
        s = !0;
      }, 300), this.fullscreenVideo.addEventListener("click", () => {
        s && (this.fullscreenVideo.paused ? (this.fullscreenVideo.play(), this.userIntendedPlayState = !0, this.trackVideoAction("play")) : (this.fullscreenVideo.pause(), this.userIntendedPlayState = !1, this.trackVideoAction("pause")));
      }), this.fullscreenVideo.addEventListener("pause", () => {
      }), this.fullscreenVideo.addEventListener("play", () => {
      }), this.fullscreenVideo.addEventListener("ended", () => {
        this.fullscreenVideo.style.opacity = "0.7", setTimeout(() => {
          this.close();
        }, 2e3);
      }), this.fullscreenVideo.addEventListener("timeupdate", () => {
        this.updateProgressBar();
      }), this.videoContainer.appendChild(this.fullscreenVideo), this.setupProgressBar(), this.overlay.classList.add("show"), e.pause(), this.userIntendedPlayState && this.fullscreenVideo.play().catch(console.warn), this.trackFullscreenAction("open");
    }
    close() {
      !this.isOpen || !this.fullscreenVideo || !this.originalVideo || (this.originalVideo.currentTime = this.fullscreenVideo.currentTime, this.userIntendedPlayState && this.originalVideo.play().catch(console.warn), this.trackFullscreenAction("close"), this.fullscreenVideo.remove(), this.fullscreenVideo = null, this.originalVideo = null, this.isOpen = !1, this.overlay.classList.remove("show"), g.currentInstance === this && (g.currentInstance = null));
    }
    static closeAll() {
      g.currentInstance && g.currentInstance.close();
      const e = document.querySelector("crs-fullscreen-video");
      e && e.close();
    }
    showPlayPauseIndicator(e) {
      const t = this.shadowRoot.querySelector(
        ".play-pause-indicator"
      );
      t && (t.textContent = e === "play" ? "▶" : "⏸", t.classList.add("show"));
    }
    hidePlayPauseIndicator() {
      const e = this.shadowRoot.querySelector(
        ".play-pause-indicator"
      );
      e && e.classList.remove("show");
    }
    autoHidePlayPauseIndicator() {
      setTimeout(() => {
        this.hidePlayPauseIndicator();
      }, 2e3);
    }
    updateProgressBar() {
      if (!this.fullscreenVideo || !this.progressFill || !this.progressHandle)
        return;
      const e = this.fullscreenVideo.currentTime / this.fullscreenVideo.duration * 100;
      this.progressFill.style.width = `${e}%`, this.progressHandle.style.left = `${e}%`;
    }
    setupProgressBar() {
      !this.progressBar || !this.progressFill || !this.progressHandle || !this.fullscreenVideo || (this.progressBar.addEventListener("click", (e) => {
        if (this.isDragging) return;
        const t = this.progressBar.getBoundingClientRect(), s = (e.clientX - t.left) / t.width * this.fullscreenVideo.duration;
        this.fullscreenVideo.currentTime = s;
      }), this.progressHandle.addEventListener("mousedown", (e) => {
        this.isDragging = !0, e.preventDefault();
      }), document.addEventListener("mousemove", (e) => {
        if (!this.isDragging || !this.progressBar || !this.fullscreenVideo)
          return;
        const t = this.progressBar.getBoundingClientRect(), n = e.clientX - t.left, s = Math.max(0, Math.min(1, n / t.width)) * this.fullscreenVideo.duration;
        this.fullscreenVideo.currentTime = s;
      }), document.addEventListener("mouseup", () => {
        this.isDragging = !1;
      }), this.progressHandle.addEventListener("touchstart", (e) => {
        this.isDragging = !0, e.preventDefault();
      }), document.addEventListener("touchmove", (e) => {
        if (!this.isDragging || !this.progressBar || !this.fullscreenVideo)
          return;
        const t = this.progressBar.getBoundingClientRect(), i = e.touches[0].clientX - t.left, o = Math.max(0, Math.min(1, i / t.width)) * this.fullscreenVideo.duration;
        this.fullscreenVideo.currentTime = o;
      }), document.addEventListener("touchend", () => {
        this.isDragging = !1;
      }));
    }
    isVideoOpen() {
      return this.isOpen;
    }
    trackVideoAction(e) {
      if (!this.currentSection) return;
      const t = this.currentSection === "reels" ? "1" : "2", n = this.currentSection === "reels" ? "Reels section" : "Purchase section";
      u(
        `exp_petzen_${e}_${t}`,
        `${this.currentActiveIndex + 1}`,
        "click",
        n
      );
    }
    trackFullscreenAction(e) {
      if (!this.currentSection) return;
      const t = this.currentSection === "reels" ? "1" : "2", n = this.currentSection === "reels" ? "Reels section" : "Purchase section";
      u(
        `exp_petzen_full_${e}_${t}`,
        `${this.currentActiveIndex + 1}`,
        "click",
        n
      );
    }
  };
  g.currentInstance = null;
  let v = g;
  class D extends HTMLElement {
    constructor() {
      super(), this.lastActiveIndex = 0, this.scrollTimeout = null, this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = this.render(), this.fullscreenVideo = new v(), this.fullscreenVideo = this.getOrCreateFullscreenVideo(), this.eventListeners();
    }
    getOrCreateFullscreenVideo() {
      let e = document.querySelector(
        "crs-fullscreen-video"
      );
      return e || (e = new v(), document.body.appendChild(e)), e;
    }
    render() {
      return (
        /* html */
        `
    <style>
      ${C}
    </style>
    <div class="reels">
      <ul class="reels-list">
        ${L.map(
          (e) => (
            /* html */
            `
          <div class="reels-item" id="reels-item-${e.id}">
            <div class="item-container">
              <div class="item-video" data-state="off">
                <img src="${e.image}" alt="${e.text}">
                <video class="hidden" loop playsinline preload="metadata">
                  <source src="${e.video}" type="video/mp4">
     
                  Your browser does not support the video tag.
                </video>
                  <div class="item-video-icon">${E}</div>
                  <div class="item-full-screen" title="Fullscreen">⛶</div>
              </div>
              <div class="item-info">
                <div class="info__icon">${A}</div>
                <div class="info__text">${e.text}</div>
              </div>
            </div>
          </div>
        `
          )
        ).join("")}
        
      </ul>
      <div class="reels-pagination">
        ${L.map(
          (e, t) => (
            /* html */
            `
          <button class="reels-pagination-item ${t === 0 ? "active" : ""}" id="reels-pagination-item-${e.id}"></button>
        `
          )
        ).join("")}
      </div>
    </div>
    `
      );
    }
    eventListeners() {
      this.setupVideoListeners(), this.setupPaginationListeners(), this.setupScrollListener(), this.initializeActivePagination();
    }
    setupVideoListeners() {
      this.shadowRoot.querySelectorAll(".reels-item").forEach((e) => {
        const t = e.querySelector(".item-video"), n = e.querySelector("video"), i = { current: 0 }, s = async () => {
          clearTimeout(i.current), i.current = window.setTimeout(async () => {
            const r = t == null ? void 0 : t.getAttribute("data-state");
            if (r === "on" && n && !n.paused) {
              n.pause(), t == null || t.setAttribute("data-state", "paused"), console.log("Video paused"), u(
                "exp_petzen_pause_1",
                `${this.lastActiveIndex + 1}`,
                "click",
                "Reels section"
              );
              return;
            }
            if (r === "paused" && n && n.paused)
              try {
                await (n == null ? void 0 : n.play()), t == null || t.setAttribute("data-state", "on"), console.log("Video resumed"), u(
                  "exp_petzen_play_1",
                  `${this.lastActiveIndex + 1}`,
                  "click",
                  "Reels section"
                );
                return;
              } catch (a) {
                console.warn("Video resume failed:", a), t == null || t.setAttribute("data-state", "off");
                return;
              }
            if (this.stopAllVideos(), n && n.readyState < 2 && (n.load(), await new Promise((a) => {
              const p = () => {
                n.removeEventListener("loadeddata", p), a(!0);
              };
              n.addEventListener("loadeddata", p), setTimeout(() => {
                n.removeEventListener("loadeddata", p), a(!1);
              }, 3e3);
            })), n && n.readyState >= 2) {
              t == null || t.setAttribute("data-state", "on");
              try {
                await (n == null ? void 0 : n.play()), u(
                  "exp_petzen_play_1",
                  `${this.lastActiveIndex + 1}`,
                  "click",
                  "Reels section"
                );
              } catch (a) {
                console.warn("Video play failed:", a), t == null || t.setAttribute("data-state", "off");
              }
            } else
              console.log(
                "Video still not ready after loading attempt, showing image instead"
              );
          }, 200);
        };
        t == null || t.addEventListener("click", s);
        const o = t == null ? void 0 : t.querySelector(
          ".item-full-screen"
        );
        o == null || o.addEventListener("click", (r) => {
          r.stopPropagation(), this.openFullscreen(n, !1, "reels", this.lastActiveIndex);
        }), this.setupDoubleTapFullscreen(
          t,
          n,
          i
        );
      });
    }
    setupPaginationListeners() {
      this.shadowRoot.querySelectorAll(".reels-pagination-item").forEach(
        (e, t) => {
          e.addEventListener("click", () => {
            this.scrollToReelItem(t);
          });
        }
      );
    }
    setupScrollListener() {
      const e = this.shadowRoot.querySelector(
        ".reels-list"
      );
      e && e.addEventListener("scroll", () => {
        this.scrollTimeout && clearTimeout(this.scrollTimeout), this.updateActivePaginationItem(), this.stopAllVideos(), this.scrollTimeout = window.setTimeout(() => {
          this.checkForNewActiveItem();
        }, 200);
      });
    }
    checkForNewActiveItem() {
      const e = this.getCurrentActiveIndex();
      e !== this.lastActiveIndex && (this.emitScrollEvent(this.lastActiveIndex, e), this.lastActiveIndex = e);
    }
    getCurrentActiveIndex() {
      const e = this.shadowRoot.querySelector(
        ".reels-list"
      ), t = this.shadowRoot.querySelectorAll(".reels-item");
      if (!e || !t.length) return 0;
      const n = e.offsetWidth, s = e.scrollLeft + n / 2;
      let o = 0, r = 1 / 0;
      return t.forEach((a, p) => {
        const m = a, b = m.offsetLeft, f = m.offsetWidth, d = b + f / 2, h = Math.abs(s - d);
        h < r && (r = h, o = p);
      }), o;
    }
    emitScrollEvent(e, t) {
      const n = new CustomEvent("reelsScroll", {
        detail: {
          fromIndex: e,
          toIndex: t,
          timestamp: Date.now()
        },
        bubbles: !0
      });
      this.dispatchEvent(n), console.log(`[Reels] Scrolled from item ${e} to item ${t}`);
      const i = e < t ? "right" : "left";
      u(
        `exp_petzen_swipe_${i}_1`,
        `${e + 1}`,
        "swipe",
        "Reels section"
      ), u("exp_petzen_view_1", `${t + 1}`, "view", "Reels section");
    }
    scrollToReelItem(e) {
      const t = this.shadowRoot.querySelector(
        ".reels-list"
      ), n = this.shadowRoot.querySelectorAll(".reels-item");
      if (!t || !n[e]) return;
      const i = n[e], s = i.offsetLeft, o = i.offsetWidth, r = t.offsetWidth, a = s - (r - o) / 2;
      t.scrollTo({
        left: a,
        behavior: "smooth"
      });
    }
    updateActivePaginationItem() {
      const e = this.shadowRoot.querySelectorAll(
        ".reels-pagination-item"
      );
      if (!e.length) return;
      const t = this.getCurrentActiveIndex();
      e.forEach((n, i) => {
        n.classList.toggle("active", i === t);
      });
    }
    initializeActivePagination() {
      const e = this.shadowRoot.querySelectorAll(
        ".reels-pagination-item"
      );
      e.length > 0 && e[0].classList.add("active"), this.lastActiveIndex = 0;
    }
    /**
     * Sets up double-tap detection for opening fullscreen mode on mobile devices
     * Only works when video is currently playing (data-state='on' and not paused)
     * @param itemVideo - The video container element
     * @param video - The video element
     * @param clickTimer - Reference to the click timer to cancel single tap when double tap is detected
     */
    setupDoubleTapFullscreen(e, t, n) {
      let i = 0, s = 0, o, r = 0, a = 0, p = 0;
      const m = (f) => {
        const d = f.touches[0];
        r = Date.now(), a = d.clientX, p = d.clientY;
      }, b = (f) => {
        const d = f.changedTouches[0], h = Date.now(), y = h - i, _ = h - r, S = Math.sqrt(
          Math.pow(d.clientX - a, 2) + Math.pow(d.clientY - p, 2)
        );
        _ < 300 && S < 50 && (y < 500 && y > 0 ? (s++, s === 2 && (e.getAttribute("data-state") === "on" && !t.paused && (clearTimeout(n.current), e.classList.add("double-tap-feedback"), setTimeout(() => {
          e.classList.remove("double-tap-feedback");
        }, 300), this.openFullscreen(t, !0, "reels", this.lastActiveIndex)), s = 0)) : s = 1, i = h, clearTimeout(o), o = window.setTimeout(() => {
          s = 0;
        }, 500));
      };
      e.addEventListener("touchstart", m, {
        passive: !0
      }), e.addEventListener("touchend", b, { passive: !1 });
    }
    openFullscreen(e, t = !1, n, i) {
      e && this.fullscreenVideo.open(e, t, n, i);
    }
    handleVideoPause(e) {
      e.target.pause();
    }
    stopAllVideos(e = !0) {
      this.shadowRoot.querySelectorAll("video").forEach((n) => {
        n.pause(), e || (n.currentTime = 0);
        const i = n.closest(".item-video");
        i && i.setAttribute("data-state", "off");
      });
    }
    stop(e = !0) {
      this.stopAllVideos(e);
    }
    handleVideoPlay(e) {
      e.target.play();
    }
  }
  const B = `* {
  box-sizing: border-box;
}

.product-list {
  margin: 0;
  display: flex;
  gap: 8px;
  padding: 0;
  padding-inline: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.product-list::-webkit-scrollbar {
  display: none;
}
.product-item {
  flex-shrink: 0;
  width: 320px;
  min-width: 320px;
  overflow: hidden;
  border-radius: 16px;
  scroll-snap-align: center;
}

.product-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-item-video.blue {
  background: #1f50c9;
}

.product-item-video.orange {
  background: #febf4e;
}

.item-container {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 12px;
  height: 100%;
}

.item-video {
  flex-shrink: 0;
  position: relative;

  width: 149px;
  height: 265px;
  border-radius: 12px;
  overflow: hidden;
}

.item-video :is(video, img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-video-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  padding-left: 5px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  user-select: auto;
}

.item-video[data-state='off'] img {
  display: block;
}

.item-video[data-state='off'] video {
  display: none;
}

.item-video[data-state='on'] img {
  display: none;
}

.item-video[data-state='on'] video {
  display: block;
}

.item-video[data-state='on'] .item-video-icon {
  display: none;
  user-select: none;
}

.item-video[data-state='paused'] img {
  display: none;
}

.item-video[data-state='paused'] video {
  display: block;
}

.item-video[data-state='paused'] .item-video-icon {
  display: flex;
  user-select: none;
}

.item-full-screen {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;
  z-index: 10;
  color: white;
}

.item-video[data-state='on'] .item-full-screen {
  display: flex;
}

/* Double-tap feedback animation */
.item-video.double-tap-feedback {
  animation: doubleTapPulse 0.3s ease-out;
}

@keyframes doubleTapPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  100% {
    transform: scale(1);
  }
}

.item-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.info__icon {
  width: 33px;
  height: 33px;
}

.info__text {
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 17px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 141.176% */
  letter-spacing: 0.6px;
  text-align: left;
}

.hidden {
  display: none;
}

.product-pagination {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.product-pagination-item {
  flex-shrink: 0;
  width: 10px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: none;
  background: #c9c9c9;
}

.product-pagination-item.active {
  background: #ff3c7f;
}
`;
  class j extends HTMLElement {
    constructor() {
      super(), this.lastActiveIndex = 0, this.scrollTimeout = null, this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = this.render(), this.fullscreenVideo = new v(), this.fullscreenVideo = this.getOrCreateFullscreenVideo(), this.eventListeners();
    }
    getOrCreateFullscreenVideo() {
      let e = document.querySelector(
        "crs-fullscreen-video"
      );
      return e || (e = new v(), document.body.appendChild(e)), e;
    }
    render() {
      return (
        /* html */
        `
    <style>
      ${B}
    </style>
    <div class="product">
      <ul class="product-list">
        ${k.map((e) => e.template === "image" ? (
          /* html */
          `
              <div class="product-item product-item-image" id="product-item-${e.id}">
                
                  <img src="${e.image}">
             
              </div>
              `
        ) : (
          /* html */
          `
          
          <div class="product-item product-item-video ${e.bgColor}" id="product-item-${e.id}">
            <div class="item-container">
              <div class="item-video" data-state="off">
                <img src="${e.image}" alt="${e.text}">
                <video class="hidden" loop playsinline preload="metadata">
                  <source src="${e.video}" type="video/mp4">
     
                  Your browser does not support the video tag.
                </video>
                  <div class="item-video-icon">${E}</div>
                  <div class="item-full-screen" title="Fullscreen">⛶</div>
              </div>
              <div class="item-info">
                <div class="info__icon">${A}</div>
                <div class="info__text">${e.text}</div>
              </div>
            </div>
          </div>
        `
        )).join("")}
        
      </ul>
      <div class="product-pagination">
        ${k.map(
          (e, t) => (
            /* html */
            `
          <button class="product-pagination-item ${t === 0 ? "active" : ""}" id="product-pagination-item-${e.id}"></button>
        `
          )
        ).join("")}
      </div>
    </div>
    `
      );
    }
    eventListeners() {
      this.setupVideoListeners(), this.setupPaginationListeners(), this.setupScrollListener(), this.initializeActivePagination();
    }
    setupVideoListeners() {
      this.shadowRoot.querySelectorAll(".product-item-video").forEach(
        (e) => {
          const t = e.querySelector(".item-video"), n = e.querySelector("video"), i = { current: 0 }, s = async () => {
            clearTimeout(i.current), i.current = window.setTimeout(async () => {
              const o = t == null ? void 0 : t.getAttribute("data-state");
              if (o === "on" && n && !n.paused) {
                n.pause(), t == null || t.setAttribute("data-state", "paused"), console.log("Video paused"), u(
                  "exp_petzen_pause_2",
                  `${this.lastActiveIndex + 1}`,
                  "click",
                  "Purchase section"
                );
                return;
              }
              if (o === "paused" && n && n.paused)
                try {
                  await (n == null ? void 0 : n.play()), t == null || t.setAttribute("data-state", "on"), console.log("Video resumed"), u(
                    "exp_petzen_play_2",
                    `${this.lastActiveIndex + 1}`,
                    "click",
                    "Purchase section"
                  );
                  return;
                } catch (r) {
                  console.warn("Video resume failed:", r), t == null || t.setAttribute("data-state", "off");
                  return;
                }
              if (this.stopAllVideos(), n && n.readyState < 2 && (n.load(), await new Promise((r) => {
                const a = () => {
                  n.removeEventListener("loadeddata", a), r(!0);
                };
                n.addEventListener("loadeddata", a), setTimeout(() => {
                  n.removeEventListener("loadeddata", a), r(!1);
                }, 3e3);
              })), n && n.readyState >= 2) {
                t == null || t.setAttribute("data-state", "on");
                try {
                  await (n == null ? void 0 : n.play()), u(
                    "exp_petzen_play_2",
                    `${this.lastActiveIndex + 1}`,
                    "click",
                    "Purchase section"
                  );
                } catch (r) {
                  console.warn("Video play failed:", r), t == null || t.setAttribute("data-state", "off");
                }
              } else
                console.warn(
                  "Video still not ready after loading attempt, showing image instead. ReadyState:",
                  n == null ? void 0 : n.readyState
                );
            }, 200);
          };
          if (t && n) {
            t.addEventListener("click", s);
            const o = t.querySelector(
              ".item-full-screen"
            );
            o == null || o.addEventListener("click", (r) => {
              r.stopPropagation(), this.openFullscreen(
                n,
                !1,
                "product-slider",
                this.lastActiveIndex
              );
            }), this.setupDoubleTapFullscreen(
              t,
              n,
              i
            );
          } else
            console.warn(
              "No item video or video element found for product item",
              e,
              { itemVideo: t, video: n }
            );
        }
      );
    }
    setupPaginationListeners() {
      this.shadowRoot.querySelectorAll(".product-pagination-item").forEach(
        (e, t) => {
          e.addEventListener("click", () => {
            this.scrollToReelItem(t);
          });
        }
      );
    }
    setupScrollListener() {
      const e = this.shadowRoot.querySelector(
        ".product-list"
      );
      e && e.addEventListener("scroll", () => {
        this.scrollTimeout && clearTimeout(this.scrollTimeout), this.updateActivePaginationItem(), this.stopAllVideos(), this.scrollTimeout = window.setTimeout(() => {
          this.checkForNewActiveItem();
        }, 200);
      });
    }
    checkForNewActiveItem() {
      const e = this.getCurrentActiveIndex();
      e !== this.lastActiveIndex && (this.emitScrollEvent(this.lastActiveIndex, e), this.lastActiveIndex = e);
    }
    getCurrentActiveIndex() {
      const e = this.shadowRoot.querySelector(
        ".product-list"
      ), t = this.shadowRoot.querySelectorAll(".product-item");
      if (!e || !t.length) return 0;
      const n = e.offsetWidth, s = e.scrollLeft + n / 2;
      let o = 0, r = 1 / 0;
      return t.forEach((a, p) => {
        const m = a, b = m.offsetLeft, f = m.offsetWidth, d = b + f / 2, h = Math.abs(s - d);
        h < r && (r = h, o = p);
      }), o;
    }
    emitScrollEvent(e, t) {
      const n = new CustomEvent("productSliderScroll", {
        detail: {
          fromIndex: e,
          toIndex: t,
          timestamp: Date.now()
        },
        bubbles: !0
      });
      this.dispatchEvent(n);
      const i = e < t ? "right" : "left";
      u(
        `exp_petzen_swipe_${i}_2`,
        `${e + 1}`,
        "swipe",
        "Purchase section"
      ), u("exp_petzen_view_2", `${t + 1}`, "view", "Purchase section");
    }
    scrollToReelItem(e) {
      const t = this.shadowRoot.querySelector(
        ".product-list"
      ), n = this.shadowRoot.querySelectorAll(".product-item");
      if (!t || !n[e]) return;
      const i = n[e], s = i.offsetLeft, o = i.offsetWidth, r = t.offsetWidth, a = s - (r - o) / 2;
      t.scrollTo({
        left: a,
        behavior: "smooth"
      });
    }
    updateActivePaginationItem() {
      const e = this.shadowRoot.querySelectorAll(
        ".product-pagination-item"
      );
      if (!e.length) return;
      const t = this.getCurrentActiveIndex();
      e.forEach((n, i) => {
        n.classList.toggle("active", i === t);
      });
    }
    initializeActivePagination() {
      const e = this.shadowRoot.querySelectorAll(
        ".product-pagination-item"
      );
      e.length > 0 && e[0].classList.add("active"), this.lastActiveIndex = 0;
    }
    setupDoubleTapFullscreen(e, t, n) {
      let i = 0, s = 0, o, r = 0, a = 0, p = 0;
      const m = (f) => {
        const d = f.touches[0];
        r = Date.now(), a = d.clientX, p = d.clientY;
      }, b = (f) => {
        const d = f.changedTouches[0], h = Date.now(), y = h - i, _ = h - r, S = Math.sqrt(
          Math.pow(d.clientX - a, 2) + Math.pow(d.clientY - p, 2)
        );
        _ < 300 && S < 50 && (y < 500 && y > 0 ? (s++, s === 2 && (e.getAttribute("data-state") === "on" && !t.paused && (clearTimeout(n.current), e.classList.add("double-tap-feedback"), setTimeout(() => {
          e.classList.remove("double-tap-feedback");
        }, 300), this.openFullscreen(
          t,
          !0,
          "product-slider",
          this.lastActiveIndex
        )), s = 0)) : s = 1, i = h, clearTimeout(o), o = window.setTimeout(() => {
          s = 0;
        }, 500));
      };
      e.addEventListener("touchstart", m, {
        passive: !0
      }), e.addEventListener("touchend", b, { passive: !1 });
    }
    openFullscreen(e, t = !1, n, i) {
      e && this.fullscreenVideo.open(e, t, n, i);
    }
    handleVideoPause(e) {
      e.target.pause();
    }
    stopAllVideos(e = !0) {
      this.shadowRoot.querySelectorAll("video").forEach((n) => {
        n.pause(), e || (n.currentTime = 0);
        const i = n.closest(".item-video");
        i && i.setAttribute("data-state", "off");
      });
    }
    stop(e = !0) {
      this.stopAllVideos(e);
    }
    handleVideoPlay(e) {
      e.target.play();
    }
  }
  const F = "";
  I({ name: "New experiment for BuzzPatch with introduction of reels", dev: "ЩІ" }), $("exp_tick_02_variant_1");
  class M {
    constructor() {
      this.device = window.innerWidth > 768 ? "desktop" : "mobile", this.init();
    }
    async init() {
      this.device === "desktop" || !location.pathname.includes("zenpatch-pet") || (await T(".lp-tr--purchase"), this.addStyles(), this.defineCustomElements(), this.insertReelsSection(), this.insertCarouselSection());
    }
    insertReelsSection() {
      new z({
        containerSelector: "section#OurStory",
        position: "afterend"
      });
    }
    insertCarouselSection() {
      new V({
        containerSelector: ".lp-tr--purchase .row.lp-tr--gray-bg",
        position: "beforebegin"
      });
    }
    defineCustomElements() {
      customElements.define("crs-reels", D), customElements.define("crs-product-slider", j), customElements.define("crs-fullscreen-video", v);
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = F, document.head.appendChild(e);
    }
  }
  new M();
})();
