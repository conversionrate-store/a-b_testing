(function() {
  "use strict";
  const d = (r, e, t, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: e,
      event_type: t,
      event_loc: n
    }), s(`Event: ${r} | ${e} | ${t} | ${n}`, "success");
  }, h = (r) => new Promise((e) => {
    const t = document.querySelector(r);
    t && e(t);
    const n = new MutationObserver(() => {
      const o = document.querySelector(r);
      o && (e(o), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), p = ({ name: r, dev: e }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, y = (r) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, m = (r, e, t, n, o = 1e3, i = 0.5) => {
    let a, c;
    a = new IntersectionObserver(
      function(l) {
        l[0].isIntersecting === !0 ? c = setTimeout(() => {
          d(
            e,
            l[0].target.dataset.visible || n,
            "view",
            t
          ), a.disconnect();
        }, o) : (s("Element is not fully visible", "warn"), clearTimeout(c));
      },
      { threshold: [i] }
    );
    {
      const l = document.querySelector(r);
      l && a.observe(l);
    }
  }, s = (r, e = "info") => {
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
  }, u = "crs-test", f = "https://conversionrate-store.github.io/a-b_images/therighthairstyles", g = `:is(a, button).crs-try-on-button {
  font-size: 14px;
  width: 90px;
  height: 40px;
  border-radius: 20px;
  background: rgb(183, 150, 37);
  padding: 9px 12px 9px 9px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  border: none;
  font-family: Arial, serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
}

:is(a, button).crs-try-on-button::before {
  display: none !important;
}`;
  class w {
    constructor() {
      this.init();
    }
    init() {
      this.checkIsBlogPage() && (this.addStyles(), this.getAllTryOnButtons(), this.changeTryOnButtonText(), this.events());
    }
    changeTryOnButtonText() {
      this.getAllTryOnButtons().then((e) => {
        e.forEach((t) => {
          const n = (
            /* HTML */
            `<a
          href="https://app.therighthairstyles.com/virtual-styler-new/step-1?${u}"
          class="crs-try-on-button"
        >
          <img
            src="https://assets.therighthairstyles.com/image/frontend/magic-wand-icon2.png"
            alt=""
            style="width: 20px; height: 20px;"
          />
          <span>Try On</span>
        </a>`
          );
          t.style.display = "none", t.insertAdjacentHTML("afterend", n);
        });
      });
    }
    async getAllTryOnButtons() {
      return await h("#try-on-button"), document.querySelectorAll("#try-on-button");
    }
    events() {
      h(".crs-try-on-button").then(() => {
        document.querySelectorAll(".crs-try-on-button").forEach((t) => {
          t.addEventListener("click", (n) => {
            d("exp_q_click_1", "Try on", "click", "Banner on Blog");
          });
        });
      });
    }
    checkIsBlogPage() {
      return document.querySelector(
        "body.post-template-default.single.single-post"
      ) !== null;
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = g, document.head.appendChild(e);
    }
  }
  const v = "", b = `header > .header-content-wrapper > .ant-flex button {
  display: none;
}

/* RATING */
.crs-rating-stars {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: 'Roboto', sans-serif;
}

.crs-rating-stars__stars {
  display: flex;
  align-items: center;
}

.crs-star {
  width: 12px;
  height: 12px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path fill="%23EED6A6" d="m6 9.517-2.767 1.666a.605.605 0 0 1-.383.1.645.645 0 0 1-.35-.133.8.8 0 0 1-.234-.292.583.583 0 0 1-.033-.391l.733-3.15L.516 5.2a.639.639 0 0 1-.183-.717.714.714 0 0 1 .2-.3.693.693 0 0 1 .367-.15l3.233-.283L5.383.783a.598.598 0 0 1 .258-.3.714.714 0 0 1 .359-.1c.122 0 .241.034.358.1a.598.598 0 0 1 .258.3l1.25 2.967 3.234.283a.693.693 0 0 1 .366.15.714.714 0 0 1 .225.675.639.639 0 0 1-.208.342l-2.45 2.117.733 3.15a.583.583 0 0 1-.033.391.8.8 0 0 1-.233.292.645.645 0 0 1-.35.133.605.605 0 0 1-.384-.1L6 9.517Z"/></svg>');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.crs-rating-stars__label {
  color: #22190c;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
}
`, x = `.crs-tried-banner {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: #fff4f6;
  font-family: "Roboto", sans-serif;
}

.crs-tried-banner > div {
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}

.crs-tried-banner > div > span {
  color: #6b21a8;
}
`;
  class _ {
    constructor({ container: e, position: t = "beforeend" }) {
      this.container = e instanceof HTMLElement ? e : e ? document.querySelector(e) : null, this.position = t, this.init();
    }
    init() {
      if (!this.container) {
        s("Container not found for TriedBanner", "error");
        return;
      }
      this.addStyles(), this.insertToDOM();
    }
    insertToDOM() {
      var e;
      (e = this.container) == null || e.insertAdjacentHTML(this.position, this.render());
    }
    render() {
      return (
        /* HTML */
        ` <div class="crs-tried-banner">
      <img
        src="${f}/people-have-tried.webp"
        alt=""
        width="80"
        height="19"
        loading="lazy"
      />
      <div><span>320,421+</span> have already tried AI hairstyle try on</div>
    </div>`
      );
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = x, document.head.appendChild(e);
    }
  }
  const q = `.crs-title-banner {
  margin-top: 4px;
  padding: 16px;
  font-family: 'DM Serif Display', serif;
  background: linear-gradient(to bottom, #f5ede2, #e7dbe5);
}

.crs-title-banner .title {
  max-width: 297px;
  color: #22190c;

  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
}

.crs-title-banner .description {
  max-width: 297px;
  margin-top: 8px;
  color: #22190c;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}
`;
  class S {
    constructor({ container: e, position: t = "beforeend" }) {
      this.container = e instanceof HTMLElement ? e : e ? document.querySelector(e) : null, this.position = t, this.init();
    }
    init() {
      if (!this.container) {
        s("Container not found for TitleBanner", "error");
        return;
      }
      this.addStyles(), this.insertToDOM();
    }
    insertToDOM() {
      var e;
      (e = this.container) == null || e.insertAdjacentHTML(this.position, this.render());
    }
    render() {
      return (
        /* HTML */
        `
      <div class="crs-title-banner">
        <div class="title">
          Snap a Selfie & Discover Your Perfect Style in minutes
        </div>
        <div class="description">
          Pick a hairstyle to try on — AI will generate your look with your
          face.
        </div>
      </div>
    `
      );
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = q, document.head.appendChild(e);
    }
  }
  const T = [
    {
      question: "How do I get the generated images?",
      answer: 'To access and download the generated images, follow the direct link we send to your email once the results are ready, or visit the <a href="https://app.therighthairstyles.com/virtual-styler-new/step-1">Log In page</a>.'
    },
    {
      question: "Can I choose what hairstyles to generate?",
      answer: "If you use the free AI hairstyle generator, random hairstyles will be selected for you. After purchasing 20, 40 or 80 credits <span>(1 credit = 1 try-on),</span> you can choose any hairstyles and colors from all available options."
    },
    {
      question: "Does it generate men's hairstyles?",
      answer: "There are five male hairstyles you can try on using the free AI hairstyle changer, available on all articles for men. All other hairstyle options are available for women only."
    },
    {
      question: "How is my privacy protected?",
      answer: "We take your privacy seriously. Your uploaded selfies are deleted as soon as the model training is complete. We do not store any personal information."
    },
    {
      question: "How many images do I need to upload for the hairstyle generator online?",
      answer: "Only one high-quality image! Upload a selfie that is more than 1024x1024 pixels, clear, and not blurry or pixelated."
    },
    {
      question: "How secure is the payment process?",
      answer: "We prioritize the security of your transactions. We use Stripe to handle transactions which uses industry-standard protocols to ensure that your payment information is secure."
    },
    {
      question: "Is there a refund policy for the hairstyle try-on service?",
      answer: "We do offer refunds if you are dissatisfied. Your satisfaction is our priority, and we want to ensure you are pleased with our service. Please contact our customer support team at support@therighthairstyles.com, and we will work to address any concerns you may have. Don't worry if you haven't received the response instantly; we respond to every request within 12 hours."
    },
    {
      question: "How long does it take to generate images using the virtual hairstyle try-on?",
      answer: "The image generation process takes up to 30 minutes, depending on the number of hairstyles you have selected. We appreciate your patience as we ensure the best results for your personalized hairstyles."
    },
    {
      question: "What if I encounter technical issues?",
      answer: "We have a dedicated support team ready to assist you. Contact us at support@therighthairstyles.com for any technical issues or inquiries. Don't worry if you haven't received the response instantly; we respond to every request within 12 hours."
    },
    {
      question: "Who owns the images generated by the AI hairstyle simulator?",
      answer: "You retain ownership of the images generated using our service. We do not use or share them for any purpose other than providing you with the desired hairstyle transformations."
    },
    {
      question: "What are the methods of payment you accept?",
      answer: "Our payments are handled through Stripe which accepts certain Visa/Mastercard depending on your country."
    }
  ], A = `.crs__faq {
  margin-top: -60px;
  margin-inline: -20px;
  margin-bottom: 40px;
  padding: 40px 16px;
  background: #fafafa;
  font-family: 'DM Serif Display', 'Arial', serif;
}


@media screen and (min-width: 768px) {
  .crs__faq {
    margin-inline: -80px;
    padding: 40px 80px;
  }
  
}

.crs__faq .crs__title {
  margin-bottom: 32px;
  text-align: center;
  font-size: 28px;
}
.crs__faq_items {
  position: relative;
  display: grid;
  justify-content: center;
  gap: 24px;
  z-index: 2;
}

.crs__faq_item {
  padding: 19px 20px;
  border-radius: 16px;
  border: 1px solid #eed6a6;
  box-shadow: 0 2px 25px 0 rgba(77, 77, 77, 0.1);
}

.crs__faq_item-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: 150ms grid-template-rows ease;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 1.5;
}

[data-state='open'] .crs__faq_item-answer {
  grid-template-rows: 1fr;
  border-top: 1px solid #e8e8e8;
  margin-top: 16px;
  padding-top: 16px;
}

[data-state='close'] .crs__faq_item-answer {
  grid-template-rows: 0fr;
}

.crs__faq_item-answer > div {
  overflow: hidden;
}

.crs__faq_item-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
}

.crs__faq_item-question::after {
  content: '';
  width: 32px;
  height: 32px;
  background-image: url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6665 17.3334H6.6665V14.6667H14.6665V6.66669H17.3332V14.6667H25.3332V17.3334H17.3332V25.3334H14.6665V17.3334Z" fill="%23B79625"/></svg>');
  background-position: center;
  font-size: 32px;
  right: -10px;
}

[data-state='open'] .crs__faq_item-question::after {
  content: '';
  background-image: url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6665 17.3334V14.6667H25.3332V17.3334H6.6665Z" fill="%23B79625"/></svg>');
}
`;
  class C {
    constructor({ container: e, position: t = "beforeend" }) {
      this.faqData = T, this.container = e instanceof HTMLElement ? e : e ? document.querySelector(e) : null, this.position = t, this.init();
    }
    init() {
      if (!this.container) {
        s("Container not found for FAQ", "error");
        return;
      }
      this.addStyles(), this.insertToDOM(), setTimeout(() => this.events(), 0);
    }
    insertToDOM() {
      var e;
      (e = this.container) == null || e.insertAdjacentHTML(this.position, this.render()), m(
        "#crs-faq",
        "exp_q_view",
        "Virtual Styler. FAQ",
        "FAQ",
        0,
        0.3
      );
    }
    renderFAQItem(e) {
      return (
        /* HTML */
        `
      <div class="crs__faq_item" data-state="close">
        <h4 class="crs__faq_item-question">${e.question}</h4>
        <div class="crs__faq_item-answer"><div>${e.answer}</div></div>
      </div>
    `
      );
    }
    render() {
      return (
        /* HTML */
        `
      <section class="crs__faq" id="crs-faq">
        <div class="crs-container">
          <h2 class="crs__title">
            <span>F.A.Q</span>
          </h2>
          <div class="crs__faq_items">${this.faqData.map((t) => this.renderFAQItem(t)).join("")}</div>
        </div>
      </section>
    `
      );
    }
    events() {
      var t;
      const e = (t = this.container) == null ? void 0 : t.querySelectorAll(".crs__faq_item");
      e == null || e.forEach((n) => {
        n.addEventListener("click", (o) => {
          var a;
          const i = (a = n.querySelector(
            ".crs__faq_item-question"
          )) == null ? void 0 : a.textContent;
          e.forEach((c) => {
            c !== n && c.setAttribute("data-state", "close");
          }), this.toggleFAQItem(o), n.getAttribute("data-state") === "open" && d(
            "exp_q_click_2",
            i || "",
            "click",
            "Virtual Styler. FAQ"
          );
        });
      });
    }
    toggleFAQItem(e) {
      const n = e.target.closest(".crs__faq_item");
      if (!n || !n.querySelector(".crs__faq_item-answer")) return;
      const i = n.getAttribute("data-state") === "open";
      n.setAttribute("data-state", i ? "close" : "open");
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = A, document.head.appendChild(e);
    }
  }
  class k {
    constructor() {
      this.observer = null, this.currentUrl = "", this.componentsAdded = !1, this.init();
    }
    init() {
      this.currentUrl = location.href, this.setupObserver(), this.checkAndUpdateComponents();
    }
    isATestStylerPage() {
      const e = new URL(location.href);
      return location.hostname.includes("app.therighthairstyles.com") && location.pathname.includes("/virtual-styler-new/step-1") && e.searchParams.has(u);
    }
    isUserIsLoggedIn() {
      var t;
      const e = document.querySelector(
        "header button.ant-btn"
      );
      if (e)
        return ((t = e.textContent) == null ? void 0 : t.trim()) !== "Log In";
    }
    addRatingStarsToHeader() {
      if (document.querySelector(".crs-rating-stars"))
        return;
      const e = document.querySelector(
        "header > .header-content-wrapper > .ant-flex"
      );
      if (!e) {
        s("Target element not found for rating stars", "error");
        return;
      }
      e.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        `
      <div class="crs-rating-stars">
        <div class="crs-rating-stars__stars">
          <span class="crs-star" data-value="1"></span>
          <span class="crs-star" data-value="2"></span>
          <span class="crs-star" data-value="3"></span>
          <span class="crs-star" data-value="4"></span>
          <span class="crs-star" data-value="5"></span>
        </div>
        <span class="crs-rating-stars__label">4.7 out of 5</span>
      </div>
    `
      );
    }
    addTriedBanner() {
      if (document.querySelector(".crs-tried-banner"))
        return;
      const e = document.querySelector(
        "header.ant-layout-header"
      );
      if (!e) {
        s("Tried banner container not found", "error");
        return;
      }
      new _({
        container: e,
        position: "afterend"
      });
    }
    addTitleBanner() {
      if (document.querySelector(".crs-title-banner"))
        return;
      const e = document.querySelector(
        "main.ant-layout-content"
      );
      if (!e) {
        s("Title banner container not found", "error");
        return;
      }
      new S({
        container: e,
        position: "beforebegin"
      });
    }
    addFAQ() {
      if (document.querySelector(".crs__faq"))
        return;
      const e = document.querySelector(".footer");
      if (!e) {
        s("FAQ container not found", "error");
        return;
      }
      new C({
        container: e,
        position: "afterbegin"
      });
    }
    addStyles() {
      if (document.querySelector("style[data-crs-styler]"))
        return;
      const e = document.createElement("style");
      e.setAttribute("data-crs-styler", "true"), e.textContent = b, document.head.appendChild(e);
    }
    setupObserver() {
      window.addEventListener("popstate", () => this.handleUrlChange());
      const e = history.pushState, t = history.replaceState;
      history.pushState = (...n) => {
        e.apply(history, n), setTimeout(() => this.handleUrlChange(), 0);
      }, history.replaceState = (...n) => {
        t.apply(history, n), setTimeout(() => this.handleUrlChange(), 0);
      }, this.observer = new MutationObserver(() => {
        this.handleUrlChange();
      }), this.observer.observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    handleUrlChange() {
      const e = location.href;
      e !== this.currentUrl && (this.currentUrl = e, this.checkAndUpdateComponents());
    }
    checkAndUpdateComponents() {
      const e = this.isATestStylerPage() || this.isUserIsLoggedIn();
      e && !this.componentsAdded ? (s("StylerChange components added", "info"), this.addAllComponents(), this.componentsAdded = !0) : !e && this.componentsAdded && (s("StylerChange components removed", "info"), this.removeAllComponents(), this.componentsAdded = !1);
    }
    addAllComponents() {
      this.addStyles(), this.addRatingStarsToHeader(), this.addTriedBanner(), this.addTitleBanner(), setTimeout(() => {
        this.addFAQ();
      }, 1e3);
    }
    removeAllComponents() {
      var a;
      document.querySelectorAll("style[data-crs-styler]").forEach((c) => c.remove());
      const t = document.querySelector(".crs-rating-stars");
      t == null || t.remove();
      const n = document.querySelector(".crs-tried-banner");
      (a = n == null ? void 0 : n.closest(".crs-tried-banner")) == null || a.remove();
      const o = document.querySelector(".crs-title-banner");
      o == null || o.remove();
      const i = document.querySelector(".crs__faq");
      i == null || i.remove();
    }
    destroy() {
      this.observer && (this.observer.disconnect(), this.observer = null), this.removeAllComponents();
    }
  }
  p({ name: "Quick Exp", dev: "OS" }), y("exp_quick");
  class E {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.device === "mobile" && this.init();
    }
    init() {
      this.addStyles(), new w(), new k();
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = v, document.head.appendChild(e);
    }
  }
  new E();
})();
