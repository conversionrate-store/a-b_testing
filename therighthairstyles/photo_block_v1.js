(function() {
  "use strict";
  const k = `.fixed-button-wrapper,
.crown {
  display: none !important;
}

.ant-modal-wrap {
  z-index: 1002 !important;
}

.ant-modal-wrap.camera-modal {
  z-index: 1200 !important;
}

.photos-block-wrapper {
  justify-content: space-between !important;
}
.photos-block-wrapper .img-wrapper {
  width: calc(50% - 5px);
  aspect-ratio: 1/1;
}
.photos-block-wrapper .img-wrapper img.photo-item {
  width: 100%;
  height: 100%;
}
.photos-block-wrapper .img-wrapper.hide-label label {
  display: none;
}
.photos-block-wrapper .img-wrapper.hide-label img.photo-item {
  border: none;
}

.upload-modal .ant-modal-close {
  display: none !important;
}

.radio-btn-group-wrapper {
  height: auto;
}
.radio-btn-group-wrapper .virtual-try-on {
  flex-wrap: nowrap;
}

.snap-block {
  padding: 16px;
  background: linear-gradient(180deg, #f5ede2 0%, #e7dbe5 100%);
  display: flex;
  gap: 12px;
}
.snap-block h2 {
  margin: 0;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
}
.snap-block p {
  margin: 6px 0 0;
  font-size: 14px;
  color: #6b21a8;
  font-weight: 700;
}

.fixed-ready-block {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, #f5ede2 0%, #e6dae4 100%);
  padding: 30px 20px;
  z-index: 10;
}
.fixed-ready-block.active {
  display: block;
}
.fixed-ready-block p {
  margin: 0 0 16px;
  font-size: 20px;
  font-weight: 700;
}
.fixed-ready-block button {
  width: 100%;
  border-radius: 100px;
  background: #b79625;
  color: #fff;
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
}

.photo-block-wrapper {
  padding: 16px;
  background: linear-gradient(180deg, #f5ede2 0%, #e7dbe5 100%);
}
.photo-block-wrapper h3 {
  font-size: 20px;
  margin: 0 0 6px;
  font-weight: 700;
}
.photo-block-wrapper p {
  margin: 0;
  font-size: 14px;
}
.photo-block-wrapper .photo-block {
  position: relative;
  margin-top: 10px;
  border: 2px solid #ffffff;
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}
.photo-block-wrapper .photo-block img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
.photo-block-wrapper .download-photo {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 15px;
  right: 15px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}
.photo-block-wrapper .timer {
  width: 100%;
  height: 100%;
  -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  text-align: center;
  padding: 30px;
  justify-content: center;
}
.photo-block-wrapper .timer p {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
.photo-block-wrapper .timer p svg {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateZ(-90deg);
  width: 100%;
  height: 100%;
  transition: all 1s linear;
}
.photo-block-wrapper .try-another {
  margin-top: 10px;
}
.photo-block-wrapper .try-another.hide {
  display: none;
}
.photo-block-wrapper .try-another button {
  margin-top: 9px;
  width: 100%;
  border-radius: 100px;
  background: #b79625;
  color: #fff;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
}
.photo-block-wrapper .try-another button svg {
  transform: rotateZ(90deg);
}

.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  padding: 12px 16px;
  z-index: 11;
  box-shadow: 0px -6px 16px 0px rgba(0, 0, 0, 0.08), 0px -3px 6px -4px rgba(0, 0, 0, 0.12), 0px -9px 28px 8px rgba(0, 0, 0, 0.05);
  text-align: justify;
  font-size: 14px;
  font-weight: 600;
  color: #b79625;
}

.reviews-block {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 6px 14px;
  background: #fffafa;
}
.reviews-block p {
  font-size: 12px;
  color: #000;
  margin: 0;
}
.reviews-block p span {
  color: #6b21a8;
}
.reviews-block img {
  width: 78px;
}

.price-block {
  background: linear-gradient(180deg, #f5ede2 0%, #e7dbe5 100%);
  padding: 16px;
}
.price-block p {
  font-size: 14px;
}
.price-block p:last-of-type {
  color: #6b21a8;
  font-weight: 700;
}/*# sourceMappingURL=style.css.map */`, h = (r, e, t, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: e,
      event_type: t,
      event_loc: n
    }), C(`Event: ${r} | ${e} | ${t} | ${n}`, "success");
  }, p = (r) => new Promise((e) => {
    const t = document.querySelector(r);
    t && e(t);
    const n = new MutationObserver(() => {
      const i = document.querySelector(r);
      i && (e(i), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), x = ({ name: r, dev: e }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class l {
    constructor(e) {
      this.elements = e instanceof l ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, t, n) {
      return typeof t == "function" && (n = t, t = ""), this.elements.forEach((i) => {
        i.addEventListener(e, function(a) {
          var s;
          if (t !== "") {
            let c = (s = a.target) == null ? void 0 : s.closest(t);
            c && (n == null || n.call(c, a));
          } else
            n == null || n.call(i, a);
        });
      }), this;
    }
    addClass(e) {
      return this.elements.forEach(function(t) {
        t.classList.add(e);
      }), this;
    }
    removeClass(e) {
      return this.elements.forEach(function(t) {
        t.classList.remove(e);
      }), this;
    }
    toggleClass(e) {
      return this.elements.forEach(function(t) {
        t.classList.toggle(e);
      }), this;
    }
    each(e) {
      for (let t of this.elements)
        e(new l(t), this.elements.indexOf(t));
      return this;
    }
    style(e, t) {
      const n = e.split("-").map((i, a) => a === 0 ? i : i.charAt(0).toUpperCase() + i.slice(1)).join("");
      return this.elements.forEach(function(i) {
        i.style[n] = t;
      }), this;
    }
    find(e) {
      const t = this.elements.map((n) => Array.from(n.querySelectorAll(e)));
      return new l(t.flat());
    }
    attr(e, t) {
      return t ? (this.elements.forEach(function(n) {
        n.setAttribute(e, t);
      }), this) : this.elements[0].getAttribute(e);
    }
    text(e) {
      return e ? (this.elements.forEach(function(t) {
        t.textContent = e;
      }), this) : this.elements[0].textContent || "";
    }
    html(e) {
      return e ? (this.elements.forEach(function(t) {
        t.innerHTML = e;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const o = (r) => new l(r), v = (r) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, g = (r, e) => {
    const t = document.querySelector(r);
    if (!t) return;
    const i = t.getBoundingClientRect().top - 100;
    window.scrollBy({
      top: i,
      behavior: "smooth"
    });
  }, C = (r, e = "info") => {
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
    console.log(`%c>>> ${r}`, `${t} font-size: 16px; font-weight: 600`);
  }, d = {
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M17.3046 8.19232C17.6708 8.55853 17.6708 9.15216 17.3046 9.51819L11.0153 15.8077C10.649 16.1737 10.0556 16.1737 9.68939 15.8077L6.69543 12.8135C6.32922 12.4475 6.32922 11.8539 6.69543 11.4879C7.06146 11.1216 7.65509 11.1216 8.02112 11.4879L10.3522 13.819L15.9787 8.19232C16.3449 7.82629 16.9385 7.82629 17.3046 8.19232ZM24 12C24 18.633 18.6321 24 12 24C5.367 24 0 18.6321 0 12C0 5.367 5.36792 0 12 0C18.633 0 24 5.36792 24 12ZM22.125 12C22.125 6.40338 17.5959 1.875 12 1.875C6.40338 1.875 1.875 6.40411 1.875 12C1.875 17.5966 6.40411 22.125 12 22.125C17.5966 22.125 22.125 17.5959 22.125 12Z" fill="#047F00"/>
</svg>`,
    arrow: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
		<g clip-path="url(#clip0_52_2012)">
		<path d="M1.8457 2.30762L8.76878 9.99992L1.8457 17.6922" stroke="white" stroke-width="2.30769" stroke-linecap="round" stroke-linejoin="round"/>
		</g>
		<defs>
		<clipPath id="clip0_52_2012">
		<rect width="10" height="18.4615" fill="white" transform="translate(0.5 0.769043)"/>
		</clipPath>
		</defs>
		</svg>`,
    download: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
<path d="M2 21C1.45 21 0.979167 20.8042 0.5875 20.4125C0.195833 20.0208 0 19.55 0 19V9C0 8.45 0.195833 7.97917 0.5875 7.5875C0.979167 7.19583 1.45 7 2 7H5C5.28333 7 5.52083 7.09583 5.7125 7.2875C5.90417 7.47917 6 7.71667 6 8C6 8.28333 5.90417 8.52083 5.7125 8.7125C5.52083 8.90417 5.28333 9 5 9H2V19H16V9H13C12.7167 9 12.4792 8.90417 12.2875 8.7125C12.0958 8.52083 12 8.28333 12 8C12 7.71667 12.0958 7.47917 12.2875 7.2875C12.4792 7.09583 12.7167 7 13 7H16C16.55 7 17.0208 7.19583 17.4125 7.5875C17.8042 7.97917 18 8.45 18 9V19C18 19.55 17.8042 20.0208 17.4125 20.4125C17.0208 20.8042 16.55 21 16 21H2ZM10 12.175L10.9 11.275C11.0833 11.0917 11.3125 11 11.5875 11C11.8625 11 12.1 11.1 12.3 11.3C12.4833 11.4833 12.575 11.7167 12.575 12C12.575 12.2833 12.4833 12.5167 12.3 12.7L9.7 15.3C9.5 15.5 9.26667 15.6 9 15.6C8.73333 15.6 8.5 15.5 8.3 15.3L5.7 12.7C5.51667 12.5167 5.42083 12.2875 5.4125 12.0125C5.40417 11.7375 5.5 11.5 5.7 11.3C5.88333 11.1167 6.11667 11.025 6.4 11.025C6.68333 11.025 6.91667 11.1167 7.1 11.3L8 12.175V1C8 0.716667 8.09583 0.479167 8.2875 0.2875C8.47917 0.0958333 8.71667 0 9 0C9.28333 0 9.52083 0.0958333 9.7125 0.2875C9.90417 0.479167 10 0.716667 10 1V12.175Z" fill="#B79625"/>
</svg>`
  }, I = (
    /* HTML */
    `
  <div class="snap-block">
    ${d.check}
    <div>
      <h2>Your photo’s uploaded.</h2>
      <p>Now pick the hairstyle you’d like to try on</p>
    </div>
  </div>
`
  ), L = (
    /* HTML */
    `
  <div class="fixed-ready-block">
    <p>Ready to see how it looks on you?</p>
    <button class="ready-button">Generate My Hairstyle ${d.arrow}</button>
  </div>
`
  ), b = (
    /* HTML */
    `
  <div class="photo-block-wrapper">
    <h3>We’re creating your new look!</h3>
    <p>💡 While you wait, explore more styles to try next</p>
    <div class="photo-block">
      <div class="timer">
        <p>
          <svg id="timer" width="50" height="50">
            <circle cx="25" cy="25" r="23" stroke="#ffffff" stroke-width="4" fill="none" />
            <circle
              id="borderTimer"
              cx="25"
              cy="25"
              r="23"
              stroke="#b79625"
              stroke-width="4"
              stroke-linecap="round"
              fill="none"
              stroke-dasharray="150.8"
              stroke-dashoffset="0"
            />
          </svg>
          <span>27</span>
        </p>
      </div>
    </div>
    <div class="try-another">
      <h3>💇‍♀️ Want to try a different vibe?</h3>
      <p>Explore more styles and keep the inspiration flowing.</p>
      <button>Try another haircut style ${d.arrow}</button>
    </div>
  </div>
`
  ), E = (
    /* HTML */
    `
  <div class="fixed-top">Please wait for your current hairstyle to finish generating before starting a new one</div>
`
  ), u = (r) => (
    /* HTML */
    `
  <div class="download-photo" data-src="${r}">${d.download}</div>
`
  ), _ = (
    /* HTML */
    `
  <div class="reviews-block">
    <img src="https://conversionrate-store.github.io/a-b_images/therighthairstyles/reviews.webp" alt="" />
    <p><span>320,421+</span> have already tried AI hairstyle try on</p>
  </div>
`
  );
  function T(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
  }
  var f, m;
  function j() {
    return m || (m = 1, f = function(r) {
      if (!window || window.window !== window)
        throw new Error("This module is only available in browser");
      var e = window.Blob || window.MozBlob || window.WebKitBlob;
      if (!e)
        throw new Error("Blob was not supported");
      var t = /^data:((.*?)(;charset=.*?)?)(;base64)?,/, n = r.match(t);
      if (!n)
        throw new Error("invalid dataURI");
      for (var i = n[2] ? n[1] : "text/plain" + (n[3] || ";charset=utf-8"), a = !!n[4], s = r.slice(n[0].length), c = a ? atob(s) : decodeURIComponent(s), y = [], w = 0; w < c.length; w++)
        y.push(c.charCodeAt(w));
      return new e([new Uint8Array(y)], { type: i });
    }), f;
  }
  var B = j();
  const M = /* @__PURE__ */ T(B);
  v("exp_new_upload_photo"), x({ name: "Hair block", dev: "YK" }), function() {
    const r = sessionStorage.setItem;
    sessionStorage.setItem = function(e, t) {
      const n = new CustomEvent("sessionStorageChange", {
        detail: { key: e, value: t }
      });
      r.apply(this, arguments), window.dispatchEvent(n);
    };
  }();
  class H {
    constructor() {
      this.lastValue = null, this.intervalId = null;
    }
    startWatching(e, t) {
      this.lastValue = sessionStorage.getItem(e), this.intervalId = setInterval(() => {
        const n = sessionStorage.getItem(e);
        n !== this.lastValue && n && (this.lastValue = n, t(n));
      }, 100);
    }
    stopWatching() {
      this.intervalId && clearInterval(this.intervalId);
    }
  }
  class S {
    constructor() {
      this.generationId = null, this.selectedImage = null, this.init();
    }
    async init() {
      o("body").elements[0].insertAdjacentHTML("afterbegin", `<style>${k}</style>`);
      const e = localStorage.getItem("haircut-used");
      e ? this.usedBlocks(e) : this.createHairBlock();
    }
    async createHairBlock() {
      await p(".page-content"), o(".page-content").elements[0].insertAdjacentHTML("beforebegin", _), o("main").elements[0].insertAdjacentHTML("afterend", L), o(".fixed-ready-block button").on("click", ".ready-button", () => {
        this.sendImageToEditor(), h("exp_q2_click_1", "Generate my hairstyle", "click", "Footer");
      }), await p(".img-wrapper"), o(".photos-block-wrapper").on("click", ".img-wrapper", (n) => {
        var i;
        console.log("click on img"), o(".fixed-ready-block").elements.length === 0 && o(".photo-block img").elements[0] ? window.location.pathname = "/user/purchase-credits" : o(".fixed-ready-block").elements.length === 0 && !o(".photo-block img").elements[0] && (o(".hide-label").removeClass("hide-label"), n.target.closest(".img-wrapper").classList.add("hide-label"), o(".fixed-top").elements[0] || o(".page-content").elements[0].insertAdjacentHTML("beforebegin", E), window.addEventListener("scroll", (a) => {
          window.scrollY < 68 ? o(".fixed-top").attr("style", `top: ${68 - window.scrollY}px; transform: translateY(-100%);`) : o(".fixed-top").attr("style", "top: 0;");
        })), o(".fixed-ready-block").addClass("active"), this.selectedImage = ((i = n.target.closest(".img-wrapper").querySelector("img.photo-item")) == null ? void 0 : i.getAttribute("src")) || null, console.log("Selected image:", this.selectedImage);
      });
      const e = setInterval(() => {
        window.ExternalUploader && window.ExternalUploader.openUploadModal && (clearInterval(e), window.ExternalUploader.openUploadModal(), h("exp_q2_view", "Image loading", "view", "First screen"));
      }, 100);
      new H().startWatching("uploadedFile", (n) => {
        window.ExternalUploader.closeModal(), o(".page-content").elements[0].insertAdjacentHTML("beforebegin", I);
      });
    }
    async sendImageToEditor() {
      const e = sessionStorage.getItem("haircut") || "", t = await this.getFile();
      if (!t) return;
      const n = new FormData();
      n.append("file", t), n.append("haircuts", e);
      const i = await fetch("https://api.dev.therighthairstyles.com/guest_session/create_pack_generation", {
        method: "POST",
        body: n
      }).then((a) => a.json());
      this.generationId = i.generation_id, o(".snap-block").elements[0].insertAdjacentHTML("afterend", b), o(".snap-block").elements[0].remove(), o(".photo-block").attr(
        "style",
        `background:linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${this.selectedImage}) center center no-repeat; background-size: cover;`
      ), o(".fixed-ready-block").elements[0].remove(), o(".try-another").addClass("hide"), o(".reviews-block").elements[0].remove(), o(".try-another button").on("click", () => {
        g(".photos-block-wrapper"), h("exp_q2_click_2", "Try another hairstyle", "click", "Want to try different vibe.");
      }), g(".photo-block"), this.setTimer(), this.getGenerationPhoto();
    }
    async getGenerationPhoto() {
      if (!this.generationId) return;
      const e = setInterval(async () => {
        var i;
        const n = await (await fetch(
          `https://api.dev.therighthairstyles.com/guest_session/get_pack_generation?generation_id=${this.generationId}`
        )).json();
        n.length > 0 && !n[0].generation_in_queue && (clearInterval(e), o(".photo-block .timer").elements[0].remove(), o(".try-another").removeClass("hide"), o(".photo-block-wrapper>h3").text("Your new look is ready 🎉"), o(".photo-block-wrapper>h3+p").text("Enjoy your transformation — you look amazing!"), (i = o(".fixed-top").elements[0]) == null || i.remove(), o(".photo-block").attr("style", "background: none"), o(".photo-block").html(`
					${u(n[0].generated_image_urls[0])}
					<img src="${n[0].generated_image_urls[0]}" alt="Generated hairstyle" />
					`), this.downloadPhotoHandler(), localStorage.setItem("haircut-used", n[0].generated_image_urls[0]));
      }, 5e3);
      setTimeout(() => {
        e && clearInterval(e);
      }, 6e4);
    }
    setTimer() {
      let e = 60;
      o(".photo-block .timer p span").text(e.toString());
      const t = setInterval(() => {
        if (!o(".photo-block .timer").elements[0]) {
          clearInterval(t);
          return;
        }
        e -= 1;
        const n = 150.8 - e / 60 * 150.8;
        o("#borderTimer").attr("stroke-dashoffset", `${-n}`), o(".photo-block .timer p span").text(e.toString()), e <= 0 && (clearInterval(t), o(".photo-block .timer").html("Sorry, we can’t generate your photo now. Please try again later."));
      }, 1e3);
    }
    async getFile() {
      const e = sessionStorage.getItem("uploadedFile");
      if (e)
        try {
          const t = JSON.parse(e);
          console.log(t);
          const n = await M(t.dataURL);
          console.log(n);
          const i = new File([n], t.name, {
            type: t.type,
            lastModified: t.lastModified
          });
          return console.log("file from session storage", i), i;
        } catch (t) {
          console.error("Error while file upload:", t), sessionStorage.removeItem("uploadedFile");
        }
    }
    async usedBlocks(e) {
      await p(".page-content"), o(".page-content").elements[0].insertAdjacentHTML("beforebegin", b), o(".photo-block-wrapper>h3").text("Your new look is ready 🎉"), o(".photo-block-wrapper>h3+p").text("Enjoy your transformation — you look amazing!"), o(".photo-block .timer").elements[0].remove(), o(".photo-block").html(`${u(e)}<img src="${e}" alt="Generated hairstyle" />`), o(".try-another button").on("click", () => {
        g(".photos-block-wrapper");
      }), o(".img-wrapper").on("click", (t) => {
        window.location.pathname = "/user/purchase-credits";
      }), this.downloadPhotoHandler();
    }
    async downloadPhotoHandler() {
      o(".download-photo").on("click", async (e) => {
        const t = e.target.closest(".download-photo").getAttribute("data-src");
        if (!t) return;
        const i = await (await fetch(t)).blob(), a = URL.createObjectURL(i), s = document.createElement("a");
        s.href = a, s.download = "my-hairstyle.jpg", document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(a);
      });
    }
  }
  window.innerWidth < 769 && window.location.pathname.includes("/virtual-styler-test/step-1") && new S(), window.innerWidth < 769 && window.location.pathname.includes("/user/purchase-credits") && localStorage.getItem("haircut-used") && !o(".price-block").elements[0] && p(".page-content").then(() => {
    o(".page-content").elements[0].insertAdjacentHTML(
      "beforebegin",
      /* HTML */
      `
        <div class="price-block">
          <style>
            .price-block {
              background: linear-gradient(180deg, #f5ede2 0%, #e7dbe5 100%);
              padding: 16px;
            }
            .price-block p {
              font-size: 14px;
              margin: 0;
            }
            .price-block p + p {
              color: #6b21a8;
              font-weight: 700;
            }
          </style>
          <p>You've used your first free look!</p>
          <p>To try more styles, pick a plan below</p>
        </div>
      `
    );
  });
})();
//# sourceMappingURL=index.js.map
