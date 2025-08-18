(function() {
  "use strict";
  const pushData = (name, desc, type, loc = "") => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "event-to-ga4",
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc
    });
    log(`Event: ${name} | ${desc} | ${type} | ${loc}`, "success");
  };
  const startLog = ({ name, dev }) => {
    console.log(
      `%c EXP: ${name} (DEV: ${dev})`,
      `background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`
    );
  };
  const clarityInterval = (name) => {
    let int = setInterval(function() {
      if (typeof window.clarity == "function") {
        clearInterval(int);
        window.clarity("set", name, "variant_1");
      }
    }, 1e3);
  };
  const visibilityOfTime = (selector, eventName, visiblePlace, description, time = 1e3, threshold = 0.5) => {
    let observer;
    let timer;
    observer = new IntersectionObserver(
      function(entries) {
        if (entries[0].isIntersecting === true) {
          timer = setTimeout(() => {
            pushData(
              eventName,
              entries[0].target.dataset.visible || description,
              "view",
              visiblePlace
            );
            observer.disconnect();
          }, time);
        } else {
          log("Element is not fully visible", "warn");
          clearTimeout(timer);
        }
      },
      { threshold: [threshold] }
    );
    {
      const element = document.querySelector(selector);
      if (element) {
        observer.observe(element);
      }
    }
  };
  const log = (text, style = "info") => {
    let color;
    switch (style) {
      case "info":
        color = "color: #3498db;";
        break;
      case "warn":
        color = "color: #f39c12;";
        break;
      case "error":
        color = "color: #e74c3c;";
        break;
      case "success":
        color = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${text}`, `${color} font-size: 16px; font-weight: 600`);
  };
  const IMG_GIT_HUB_REPO_URL = "https://conversionrate-store.github.io/a-b_images/natpat/";
  const isTestEnvironment = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname.includes("test"));
  const config = {
    dir: isTestEnvironment ? `${IMG_GIT_HUB_REPO_URL}video` : `${IMG_GIT_HUB_REPO_URL}video`
  };
  const lavShortsConfig = [
    {
      id: 1,
      title: "How It Works",
      videos: [
        `${config.dir}/how-it-works-1.mp4`,
        `${config.dir}/how-it-works-2.mp4`,
        `${config.dir}/how-it-works-3.mp4`,
        `${config.dir}/how-it-works-4.mp4`
      ]
    },
    {
      id: 2,
      title: "What people are saying",
      videos: [
        `${config.dir}/review1.mp4`,
        `${config.dir}/review2.mp4`
      ]
    },
    {
      id: 3,
      title: "Science",
      videos: [`${config.dir}/science.mp4`]
    }
  ];
  async function waitFor(condition, cb = false, customConfig = {}) {
    const config2 = {
      ms: 500,
      // repeat each 0.5 second if condition is false
      limit: 10,
      // limit in seconds
      ...customConfig
    };
    if (typeof condition === "function") {
      if (condition()) {
        if (typeof cb === "function") cb();
        return;
      }
      return new Promise((resolve) => {
        let limit = config2.limit * 1e3;
        const interval = setInterval(function() {
          if (condition() || limit <= 0) {
            clearInterval(interval);
            if (limit > 0 && typeof cb === "function") cb();
            resolve();
          }
          limit -= config2.ms;
        }, config2.ms);
      });
    }
    if (typeof condition === "string" && (condition.startsWith(".") || condition.startsWith("#"))) {
      if ($(condition)) {
        if (typeof cb === "function") cb();
        return;
      }
      return new Promise((resolve) => {
        const observer = new MutationObserver((mutations, observer2) => {
          if ($(condition)) {
            if (typeof cb === "function") cb();
            observer2.disconnect();
            resolve();
          }
        });
        observer.observe(document, { childList: true, subtree: true });
      });
    }
  }
  function $(selector, context = document) {
    return context.querySelector(selector);
  }
  function $$(selector, context = document, toSimpleArray = false) {
    const arr = context.querySelectorAll(selector);
    return toSimpleArray ? Array.from(arr) : arr;
  }
  function getSvg(name) {
    const svgObj = {
      play: `
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <foreignObject x="-4" y="-4" width="44" height="44"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(2px);clip-path:url(#bgblur_0_855_477_clip_path);height:100%;width:100%"></div></foreignObject><circle data-figma-bg-blur-radius="4" cx="18" cy="18" r="18" fill="black" fill-opacity="0.4"/>
        <path d="M26.0651 19.7733L15.0098 26.2396C13.6765 27.0194 12 26.0578 12 24.5132V11.5069C12 9.95786 13.6851 8.99685 15.0183 9.78555L26.0737 16.3256C27.3864 17.1022 27.3817 19.0033 26.0651 19.7733Z" fill="#D9D9D9"/>
        <defs>
          <clipPath id="bgblur_0_855_477_clip_path" transform="translate(4 4)"><circle cx="18" cy="18" r="18"/>
        </clipPath></defs>
      </svg>
    `,
      close: `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M17 1.00024L1.00024 17" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M17 16.9998L1.00025 0.999999" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `
    };
    return svgObj[name] || "";
  }
  const _Modal = class _Modal {
    constructor(name, html) {
      if (!document.querySelector(".lav-modal")) {
        _Modal.init();
      }
      if (_Modal.list.find((item) => item.name === name)) {
        console.warn("Modal with this name already exists");
        return;
      }
      this.el = document.createElement("div");
      this.el.classList.add("lav-modal__inner", name);
      this.name = name;
      this.el.innerHTML = html;
      const modalContainer = document.querySelector(".lav-modal");
      if (modalContainer) {
        modalContainer.insertAdjacentElement("beforeend", this.el);
      }
      _Modal.list.push(this);
    }
    static init() {
      document.body.insertAdjacentHTML(
        "beforeend",
        "<div class='lav-modal'></div>"
      );
      document.addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("lav-modal")) {
          const videoPlayer = window.currentVideoPlayer;
          if (videoPlayer && typeof videoPlayer.trackVideoWatchTime === "function") {
            videoPlayer.trackVideoWatchTime("click_outside");
          }
          _Modal.close();
        }
        if (target.closest(".lav-modal__close")) {
          const videoPlayer = window.currentVideoPlayer;
          if (videoPlayer && typeof videoPlayer.trackVideoWatchTime === "function") {
            pushData("exp_buzz_v8_click_04", "Modal Close", "view", "modal_closed");
            videoPlayer.trackVideoWatchTime("close_button");
          }
          _Modal.close();
        }
        if (target.dataset.modal) {
          _Modal.open(target.dataset.modal);
        } else if (target.closest("[data-modal]")) {
          const modalElement = target.closest("[data-modal]");
          if (modalElement) {
            _Modal.open(modalElement.dataset.modal || "");
          }
        }
      });
      _Modal.addStyles();
    }
    static open(modalName, cb) {
      document.body.classList.add("lav-modal-open");
      const activeModal = document.querySelector(".lav-modal__inner.active");
      if (activeModal) {
        activeModal.classList.remove("active");
      }
      const targetModal = document.querySelector(modalName);
      if (targetModal) {
        targetModal.classList.add("active");
      }
      if (typeof cb === "function") cb();
      setTimeout(() => {
        const modal = document.querySelector(".lav-modal");
        if (modal) {
          modal.classList.add("active");
        }
      }, 100);
    }
    static close(cb) {
      const videoPlayer = window.currentVideoPlayer;
      if (videoPlayer && typeof videoPlayer.trackVideoWatchTime === "function") {
        videoPlayer.trackVideoWatchTime("modal_closed");
      }
      const modal = document.querySelector(".lav-modal");
      if (!modal) return;
      modal.classList.remove("active");
      document.body.style.overflow = "";
      document.body.classList.remove("lav-modal-open");
      if (cb) cb();
    }
    static addStyles() {
      const styles2 = (
        /* css */
        `
      .lav-modal {
        position: fixed;
        z-index: 999999999999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,.1);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        overflow-y: auto;
        max-height: 100%;
        display: flex;
      }
      .lav-modal.active {
        opacity: 1;
        pointer-events: auto;
      }
      .lav-modal__inner {
        position: relative;
        background: #000;
        max-width: 100%;
        width: 100%;
        height: 100%;
        display: none;
        margin: auto;
      }
      .lav-modal__inner.active {
        display: block;
      }
      [data-modal] {
        cursor: pointer;
      }
      .lav-modal-open {
        overflow: hidden;
      }

      .lav-modal__close {
        position: absolute;
        padding: 10px;
        z-index: 20;
        right: 10px;
        top: 23px;
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
      }
      @media(hover:hover) {
        .lav-modal__close:hover {
          opacity: 0.5;
        }
      }

      .lavm-control {
        position: relative;
        z-index: 10;
        padding: 15px 20px;
      }
      .lavm-pagination {
        display: flex;
        gap: 4px;
      }
      .lavm-pagination [data-id] {
        position: relative;
        border-radius: 100px;
        background: #FFF;
        height: 6px;
        flex: 1;
        min-width: 0;
      }
      .lavm-pagination [data-id]:last-child span {

      }
      .lavm-pagination [data-id]:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        border-radius: 100px;
        background: #FF3C81;
        width: var(--my-width);
        transition: .4s;
      }
      .lavm-pagination span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        opacity: 0;
        transition: .3s;
        position: relative;
        color: #FFF;
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        top: 19px;
        pointer-events: none;
        width: 100%;
        display: block;
      }
      .lavm-pagination .active[data-id] span {
        opacity: 1;
      }
      .lavm__btn {
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 10;
        left: 0;
        right: 0;
        bottom: 25px;
        margin: auto;
        border-radius: 500px;
        background: #FF3C81;
        box-shadow: 0px 4px 15px 0px rgba(72, 67, 69, 0.51);
        color: #FFF;
        padding: 5px 10px 0;
        max-width: 210px;
        text-align: center;
        font-family: "DIN Condensed";
        font-size: 24px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.48px;
        text-transform: uppercase;
      }
      .lavm-video {
        line-height: 0;
      }
      .lavm-video:before, .lavm-video:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 85px;
        z-index: 8;
        pointer-events: none;
      }
      .lavm-video:before {
        top: 0;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%);
      }
      .lavm-video:after {
        bottom: 0;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.00) 100%);
      }
      .lavm-video__group {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: none;
      }
      .lavm-video__item {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .lavm-video__item.active {
        z-index: 5;
      }
      .lavm-video__group.active {
        display: block;
      }
    `
      );
      const stylesEl = document.createElement("style");
      stylesEl.classList.add("exp-modal");
      stylesEl.innerHTML = styles2;
      document.head.appendChild(stylesEl);
    }
  };
  _Modal.list = [];
  let Modal = _Modal;
  class VideoPlayer {
    constructor() {
      this.currentGroupId = 1;
      this.videoStartTime = 0;
      this.currentVideoId = "";
      this.setupEventListeners();
    }
    setupEventListeners() {
      document.addEventListener("modalClosed", () => {
        this.trackVideoWatchTime("modal_closed");
      });
    }
    startVideoTracking(video) {
      var _a;
      this.videoStartTime = Date.now();
      this.currentVideoId = `${(_a = video.closest(".lavm-video__group")) == null ? void 0 : _a.getAttribute("data-group-id")}-${video.getAttribute("data-id")}`;
    }
    getVideoName(groupId, videoId) {
      const videoConfigs = window.lavShortsConfig || [];
      const group = videoConfigs.find((config2) => config2.id === groupId);
      if (!group) return `Unknown Group ${groupId}`;
      const readableName = `Part ${videoId + 1}`;
      return `${group.title} - ${readableName}`;
    }
    trackVideoWatchTime(action) {
      var _a;
      if (!this.videoStartTime || !this.currentVideoId) return;
      Math.round((Date.now() - this.videoStartTime) / 1e3);
      const activeVideo = document.querySelector(
        ".lavm-video__item.active"
      );
      if (!activeVideo) return;
      const videoDuration = activeVideo.duration || 0;
      const videoProgress = Math.round(activeVideo.currentTime || 0);
      const groupId = (_a = activeVideo.closest(".lavm-video__group")) == null ? void 0 : _a.getAttribute("data-group-id");
      const videoIndex = activeVideo.getAttribute("data-id");
      const videoName = this.getVideoName(
        parseInt(groupId || "0"),
        parseInt(videoIndex || "0")
      );
      const watchText = videoProgress >= Math.round(videoDuration) ? `Video "${videoName}" watched complete` : `Video "${videoName}" watched ${videoProgress}s from ${Math.round(
        videoDuration
      )}s`;
      pushData("exp_buzz_v8_video", videoName, "view", watchText);
      this.videoStartTime = 0;
      this.currentVideoId = "";
    }
    openModal(id) {
      pushData("exp_buzz_v8_stories_view", "Stories modal", "view", "Stories");
      const activeVideo = $(".lavm-video__item.active");
      if (activeVideo) {
        activeVideo.classList.remove("active");
      }
      const activeGroup = $(".lavm-video__group.active");
      if (activeGroup) {
        activeGroup.classList.remove("active");
      }
      this.playGroupVideo(id);
      Modal.open(".lav-shorts__modal");
    }
    playGroupVideo(groupId) {
      const activeGroup = $(`.lavm-video__group[data-group-id="${groupId}"]`);
      if (!activeGroup) {
        Modal.close();
        return;
      }
      const currentActiveGroup = $(".lavm-video__group.active");
      if (currentActiveGroup) {
        currentActiveGroup.classList.remove("active");
      }
      const firstVideo = activeGroup.querySelector(
        ".lavm-video__item"
      );
      if (!firstVideo) {
        return;
      }
      activeGroup.classList.add("active");
      firstVideo.classList.add("active");
      firstVideo.currentTime = 0;
      this.startVideoTracking(firstVideo);
      firstVideo.play();
      this.currentGroupId = groupId;
      this.handlePagination();
    }
    playNextVideo() {
      var _a;
      const currentVideo = $(".lavm-video__item.active");
      if (!currentVideo) return;
      this.trackVideoWatchTime("next_video");
      currentVideo.classList.remove("active");
      const nextVideo = currentVideo.nextElementSibling;
      if (!currentVideo || !nextVideo) {
        const nextGroupId = parseInt(
          ((_a = currentVideo.closest(".lavm-video__group")) == null ? void 0 : _a.getAttribute("data-group-id")) || "0"
        ) + 1;
        this.playGroupVideo(nextGroupId);
        return;
      }
      nextVideo.classList.add("active");
      nextVideo.currentTime = 0;
      this.startVideoTracking(nextVideo);
      nextVideo.play();
      this.handlePagination();
    }
    playPrevVideo() {
      var _a;
      const currentVideo = $(".lavm-video__item.active");
      if (!currentVideo) return;
      this.trackVideoWatchTime("prev_video");
      const prevVideo = currentVideo.previousElementSibling;
      if (!currentVideo || !prevVideo) {
        const prevGroupId = parseInt(
          ((_a = currentVideo.closest(".lavm-video__group")) == null ? void 0 : _a.getAttribute("data-group-id")) || "0"
        ) - 1;
        if (prevGroupId < 1) return;
        this.playGroupVideo(prevGroupId);
        return;
      }
      currentVideo.classList.remove("active");
      prevVideo.classList.add("active");
      prevVideo.currentTime = 0;
      this.startVideoTracking(prevVideo);
      prevVideo.play();
      this.handlePagination();
    }
    handlePagination() {
      const activeGroup = $(".lavm-video__group.active");
      if (!activeGroup) return;
      const id = parseInt(activeGroup.getAttribute("data-group-id") || "0");
      const activePagination = $(".lavm-pagination .active[data-id]");
      if (activePagination) {
        activePagination.classList.remove("active");
      }
      const paginationElements = $$(".lavm-pagination [data-id]");
      paginationElements.forEach((el, index) => {
        if (index + 1 === id) {
          const videosLength = $$(".lavm-video__group.active video").length;
          const activeVideo = $(".lavm-video__group.active video.active");
          if (activeVideo) {
            const activeVideoId = activeVideo.getAttribute("data-id");
            if (activeVideoId) {
              const progress = 100 / videosLength * (parseInt(activeVideoId) + 1);
              el.style.setProperty("--my-width", `${progress}%`);
              el.classList.add("active");
            }
          }
        }
        if (index + 1 < id) {
          el.style.setProperty("--my-width", "100%");
        }
        if (index + 1 > id) {
          el.style.setProperty("--my-width", "0%");
        }
      });
    }
    addSwipeListener(el, onSwipeLeft, onSwipeRight) {
      let touchStartX = 0;
      let touchEndX = 0;
      el.addEventListener("touchstart", (e) => {
        const touchEvent = e;
        touchStartX = touchEvent.changedTouches[0].screenX;
      });
      el.addEventListener("touchend", (e) => {
        const touchEvent = e;
        touchEndX = touchEvent.changedTouches[0].screenX;
        this.handleSwipe(touchStartX, touchEndX, onSwipeLeft, onSwipeRight);
      });
    }
    handleSwipe(touchStartX, touchEndX, onSwipeLeft, onSwipeRight) {
      const delta = touchEndX - touchStartX;
      const threshold = 80;
      if (Math.abs(delta) > threshold) {
        if (delta < 0) {
          pushData("exp_buzz_v8_swipe_01", "Swipe Next", "other", "Stories");
          onSwipeLeft == null ? void 0 : onSwipeLeft();
        } else {
          pushData("exp_buzz_v8_swipe_02", "Swipe Back", "other", "Stories");
          onSwipeRight == null ? void 0 : onSwipeRight();
        }
      }
    }
  }
  const _VideoModal = class _VideoModal {
    constructor() {
      if (_VideoModal.instance) {
        console.warn(
          "VideoModal instance already exists, returning existing instance"
        );
        return _VideoModal.instance;
      }
      _VideoModal.instance = this;
      this.cleanupExistingModal();
      this.videoPlayer = new VideoPlayer();
      window.currentVideoPlayer = this.videoPlayer;
      this.createModal();
    }
    cleanupExistingModal() {
      const existingModal = document.querySelector(".lav-shorts__modal");
      if (existingModal) {
        existingModal.remove();
      }
      const existingPagination = document.querySelector(".lavm-pagination");
      if (existingPagination) {
        existingPagination.innerHTML = "";
      }
    }
    openModal(id) {
      this.videoPlayer.openModal(id);
    }
    createModal() {
      const modalHTML = (
        /* html */
        `
      <div class='lavm-control'>
        <div class='lavm-pagination'></div>
        <div class='lav-modal__close'>
          ${getSvg("close")}
        </div>
      </div>

      <div class='lavm-arrow lavm-arrow__left'></div>
      <div class='lavm-arrow lavm-arrow__right'></div>

      <div class='lavm-video'>
      </div>

      <div class='lavm__btn'>
        Get it now!
      </div>
    `
      );
      new Modal("lav-shorts__modal", modalHTML);
      this.createPagination();
      this.createVideoGroups();
      this.setupArrowEventListeners();
    }
    setupArrowEventListeners() {
      setTimeout(() => {
        document.querySelectorAll(".lavm-arrow");
        document.querySelectorAll(".lavm-arrow__left");
        document.querySelectorAll(".lavm-arrow__right");
        const leftArrow = $(".lavm-arrow__left");
        if (leftArrow) {
          leftArrow.addEventListener("click", () => {
            pushData("exp_buzz_v8_click_02", "Previous Video", "click", "Stories");
            this.videoPlayer.trackVideoWatchTime("left_arrow_clicked");
            this.videoPlayer.playNextVideo();
          });
        } else {
          console.warn("Left arrow not found");
        }
        const rightArrow = $(".lavm-arrow__right");
        if (rightArrow) {
          rightArrow.addEventListener("click", () => {
            pushData("exp_buzz_v8_click_03", "Next Video", "click", "Stories");
            this.videoPlayer.trackVideoWatchTime("right_arrow_clicked");
            this.videoPlayer.playNextVideo();
          });
        } else {
          console.warn("Right arrow not found");
        }
        const getItNowBtn = $(".lavm__btn");
        if (getItNowBtn) {
          getItNowBtn.addEventListener("click", () => {
            this.videoPlayer.trackVideoWatchTime("cta_button_clicked");
            pushData("exp_buzz_v8_click_05", "Get it now", "click", "Stories");
            Modal.close();
            const purchaseElement = $("#purchase");
            if (purchaseElement) {
              purchaseElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }
          });
        }
        const modalInner = $(".lav-modal__inner");
        if (modalInner) {
          this.videoPlayer.addSwipeListener(
            modalInner,
            this.videoPlayer.playNextVideo.bind(this.videoPlayer),
            this.videoPlayer.playPrevVideo.bind(this.videoPlayer)
          );
        }
      }, 100);
    }
    createPagination() {
      const paginationContainer = $(".lavm-pagination");
      if (!paginationContainer) return;
      if (paginationContainer.children.length > 0) {
        return;
      }
      const videoConfigs = window.lavShortsConfig || [];
      videoConfigs.forEach((videoConfig) => {
        const paginationDot = document.createElement("div");
        paginationDot.setAttribute("data-id", videoConfig.id.toString());
        paginationDot.style.setProperty("--my-width", "0%");
        const span = document.createElement("span");
        span.textContent = videoConfig.title;
        paginationDot.appendChild(span);
        paginationDot.addEventListener("click", () => {
          const videoPlayer = window.currentVideoPlayer;
          if (videoPlayer && typeof videoPlayer.trackVideoWatchTime === "function") {
            videoPlayer.trackVideoWatchTime(
              `pagination_clicked_group_${videoConfig.id}`
            );
          }
          this.videoPlayer.playGroupVideo(videoConfig.id);
        });
        paginationContainer.appendChild(paginationDot);
      });
    }
    createVideoGroups() {
      const videoConfigs = window.lavShortsConfig || [];
      videoConfigs.forEach((videoConfig) => {
        this.createVideoGroup(videoConfig);
      });
    }
    createVideoGroup(videoConfig) {
      const group = document.createElement("div");
      group.classList.add("lavm-video__group");
      group.setAttribute("data-group-id", videoConfig.id.toString());
      videoConfig.videos.forEach((src, id) => {
        group.insertAdjacentHTML(
          "beforeend",
          /* html */
          `
        <video class="lavm-video__item" src="${src}" data-id='${id}' playsinline preload="metadata"></video>
      `
        );
      });
      const createdVideos = group.querySelectorAll(".lavm-video__item");
      createdVideos.forEach((video, index) => {
      });
      group.querySelectorAll(".lavm-video__item").forEach((videoEl) => {
        const video = videoEl;
        video.addEventListener("play", (e) => {
          if (!video.paused && video.readyState >= 2) {
            $$(".lavm-video__item").forEach((otherVideo) => {
              const other = otherVideo;
              if (other !== video && !other.paused && other.readyState >= 2) {
                other.pause();
              }
            });
          }
        });
        video.addEventListener("ended", () => {
          const videoPlayer = window.currentVideoPlayer;
          if (videoPlayer && typeof videoPlayer.trackVideoWatchTime === "function") {
            videoPlayer.trackVideoWatchTime("video_ended");
          }
          this.videoPlayer.playNextVideo();
        });
      });
      const videoContainer = $(".lavm-video");
      if (videoContainer) {
        videoContainer.appendChild(group);
      }
    }
  };
  _VideoModal.instance = null;
  let VideoModal = _VideoModal;
  const shortsStyles = "/* Shorts Section Styles */\n.lav-shorts {\n  margin-inline: -10px;\n  padding-bottom: 13px;\n  overflow: auto;\n}\n\n.lav-shorts__title {\n  padding: 0 15px;\n  text-align: center;\n  color: #0c0b0b;\n  font-family: 'DINEngschrift LT';\n  font-size: 30px;\n  font-weight: 400;\n  line-height: 36px;\n}\n\n.lav-shorts__list {\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  gap: 12px;\n  padding: 8px 23px;\n  margin-top: 12px;\n  background: #efefef;\n}\n\n.lav-short {\n \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  width: max-content;\n}\n\n.lav-short__video {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  background: #ff3c81;\n  background: linear-gradient(\n    135deg,\n    rgba(255, 60, 129, 1) 0%,\n    rgba(245, 167, 62, 1) 100%\n  );\n\n  line-height: 0;\n  overflow: hidden;\n}\n\n.lav-short__video svg {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.lav-short__video img {\n  margin: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  border-radius: 50%;\n  object-fit: cover;\n \n}\n\n.lav-short__title {\n  color: #000;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 16px;\n  text-decoration: underline;\n\n}\n";
  class ShortsSection {
    constructor() {
      this.videoModal = new VideoModal();
      this.injectStyles();
      this.addShorts();
    }
    injectStyles() {
      const styleElement = document.createElement("style");
      styleElement.classList.add("exp-shorts-styles");
      styleElement.textContent = shortsStyles;
      document.head.appendChild(styleElement);
    }
    addShorts() {
      const placeholder1Url = IMG_GIT_HUB_REPO_URL + "story-cover-1.webp";
      const placeholder2Url = IMG_GIT_HUB_REPO_URL + "story-cover-2.webp";
      const placeholder3Url = IMG_GIT_HUB_REPO_URL + "story-cover-3.webp";
      const shortsHtml = (
        /* html */
        `
      <div class="lav-shorts">
        
        <div class="lav-shorts__list">
          <div class="lav-short" data-id="1">
            <div class="lav-short__video">
              
              <img src="${placeholder1Url}">
            </div>
            <div class="lav-short__title">How It Works</div>
          </div>

          <div class="lav-short" data-id="2">
            <div class="lav-short__video">
             
              <img src="${placeholder2Url}">
            </div>
            <div class="lav-short__title">What people are saying</div>
          </div>

          <div class="lav-short" data-id="3">
            <div class="lav-short__video">
              
              <img src="${placeholder3Url}">
            </div>
            <div class="lav-short__title">The Science Behind</div>
          </div>
        </div>
      </div>
    `
      );
      const loveBuzzPatch = $("#purchase .form");
      if (loveBuzzPatch) {
        loveBuzzPatch.insertAdjacentHTML("beforebegin", shortsHtml);
      }
      visibilityOfTime(".lav-shorts", "exp_buzz_v8_view", "PDP", "Visibility", 0);
      $$(".lav-short").forEach((shortEl) => {
        shortEl.addEventListener("click", () => {
          var _a;
          const titleElement = shortEl.querySelector(".lav-short__title");
          if (titleElement) {
            const name = ((_a = titleElement.textContent) == null ? void 0 : _a.trim()) || "";
            pushData("exp_buzz_v8_click_01", name, "click", "PDP");
          }
          const id = shortEl.getAttribute("data-id");
          if (id) {
            this.videoModal.openModal(parseInt(id));
          }
        });
      });
    }
  }
  const shippingStyles = "/* Shipping Banner Styles */\n.lav-shipping {\n  background: #FEEDD6;\n  text-align: center;\n  padding: 10px;\n  color: #000;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: 0.6px;\n  margin-bottom: 20px;\n  margin-top: -5px;\n}\n";
  class ShippingBanner {
    constructor() {
      this.injectStyles();
      this.addFreeShippingBanner();
    }
    injectStyles() {
      const styleElement = document.createElement("style");
      styleElement.classList.add("exp-shipping-styles");
      styleElement.textContent = shippingStyles;
      document.head.appendChild(styleElement);
    }
    addFreeShippingBanner() {
      const bannerHtml = (
        /* html */
        `
      <div class="lav-shipping">
        FREE shipping | 30-day Money Back Guarantee
      </div>
    `
      );
      const handBanner = $(".js-heading .hand-banner");
      if (handBanner) {
        handBanner.insertAdjacentHTML("beforeend", bannerHtml);
      }
    }
  }
  const styles = `/* General Layout Styles */
.js-heading .hand-banner .learn-now, .js-heading+.wave-bg {
  display: none!important;
}

#LoveBuzzPatch {
  padding-top: 0;
}

/* Arrow Navigation Styles */
.lavm-arrow {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  display: block !important;
  z-index: 9;
}

.lavm-arrow__left {
  left: 0;
}

.lavm-arrow__right {
  right: 0;
}

/* Modal Control Styles */
.lavm-control {
  position: relative;
  z-index: 10;
  padding: 15px 20px;
}

.lavm-pagination {
  display: flex;
  gap: 4px;
}

.lavm-pagination [data-id] {
  position: relative;
  border-radius: 100px;
  background: #FFF;
  height: 6px;
  flex: 1;
  min-width: 0;
}

.lavm-pagination [data-id]:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 100px;
  background: #FF3C81;
  width: var(--my-width);
  transition: .4s;
}

.lavm-pagination span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0;
  transition: .3s;
  position: relative;
  color: #FFF;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  top: 19px;
  pointer-events: none;
  width: 100%;
  display: block;
}

.lavm-pagination .active[data-id] span {
  opacity: 1;
}

.lavm__btn {
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 25px;
  margin: auto;
  border-radius: 500px;
  background: #FF3C81;
  box-shadow: 0px 4px 15px 0px rgba(72, 67, 69, 0.51);
  color: #FFF;
  padding: 5px 10px 0;
  max-width: 210px;
  text-align: center;
  font-family: "DIN Condensed";
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.48px;
  text-transform: uppercase;
}

.lavm-video {
  line-height: 0;
}

.lavm-video:before, .lavm-video:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 85px;
  z-index: 8;
  pointer-events: none;
}

.lavm-video:before {
  top: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%);
}

.lavm-video:after {
  bottom: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.00) 100%);
}

.lavm-video__group {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: none;
}

.lavm-video__item {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lavm-video__item.active {
  z-index: 5;
}

.lavm-video__group.active {
  display: block;
}
`;
  const globals = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: styles
  }, Symbol.toStringTag, { value: "Module" }));
  startLog({ name: " Video stories", dev: "OS" });
  clarityInterval("exp_video");
  window.lavShortsConfig = lavShortsConfig;
  class Test {
    constructor() {
      this.init();
    }
    async init() {
      await waitFor(() => !!(document.head && document.body), false, { ms: 20 });
      console.debug("** InitExp **");
      this.addGlobalStyles();
      this.initModal();
      this.addShorts();
      this.addStyles();
    }
    addGlobalStyles() {
      Promise.resolve().then(() => globals).then((styles2) => {
        const styleElement = document.createElement("style");
        styleElement.classList.add("exp-global-styles");
        styleElement.textContent = styles2.default;
        document.head.appendChild(styleElement);
      });
    }
    initModal() {
      new VideoModal();
    }
    addFreeShippingBanner() {
      new ShippingBanner();
    }
    addShorts() {
      new ShortsSection();
    }
    addStyles() {
      const styleElement = document.createElement("style");
      styleElement.textContent = styles;
      document.head.appendChild(styleElement);
    }
  }
  new Test();
})();
