(function() {
  "use strict";
  const m = (i, n, e, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: n,
      event_type: e,
      event_loc: t
    }), d(`Event: ${i} | ${n} | ${e} | ${t}`, "success");
  }, a = (i) => new Promise((n) => {
    const e = document.querySelector(i);
    e && n(e);
    const t = new MutationObserver(() => {
      const s = document.querySelector(i);
      s && (n(s), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), p = ({ name: i, dev: n }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class r {
    constructor(n) {
      this.elements = n instanceof r ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, e, t) {
      return typeof e == "function" && (t = e, e = ""), this.elements.forEach((s) => {
        s.addEventListener(n, function(o) {
          var f;
          if (e !== "") {
            let u = (f = o.target) == null ? void 0 : f.closest(e);
            u && (t == null || t.call(u, o));
          } else
            t == null || t.call(s, o);
        });
      }), this;
    }
    addClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.add(n);
      }), this;
    }
    removeClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.remove(n);
      }), this;
    }
    toggleClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.toggle(n);
      }), this;
    }
    each(n) {
      for (let e of this.elements)
        n(new r(e), this.elements.indexOf(e));
      return this;
    }
    style(n, e) {
      const t = n.split("-").map((s, o) => o === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[t] = e;
      }), this;
    }
    find(n) {
      const e = this.elements.map((t) => Array.from(t.querySelectorAll(n)));
      return new r(e.flat());
    }
    attr(n, e) {
      return e ? (this.elements.forEach(function(t) {
        t.setAttribute(n, e);
      }), this) : this.elements[0].getAttribute(n);
    }
    text(n) {
      return n ? (this.elements.forEach(function(e) {
        e.textContent = n;
      }), this) : this.elements[0].textContent || "";
    }
    html(n) {
      return n ? (this.elements.forEach(function(e) {
        e.innerHTML = n;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const c = (i) => new r(i), g = (i) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, d = (i, n = "info") => {
    let e;
    switch (n) {
      case "info":
        e = "color: #3498db;";
        break;
      case "warn":
        e = "color: #f39c12;";
        break;
      case "error":
        e = "color: #e74c3c;";
        break;
      case "success":
        e = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${i}`, `${e} font-size: 16px; font-weight: 600`);
  }, l = "https://conversionrate-store.github.io/a-b_images/dywm/", h = (
    /* HTML */
    `
  <div class="main_screen">
    <div class="main_screen__info">
      <img src="${l}logo.svg" alt="Logo" />
      <h1>Find Your Perfect Yoga<br />Practice in 40 Seconds</h1>
      <p>Take a short quiz and get a personalized selection of yoga classes tailored to your goals and level.</p>
      <a href="https://www.doyogawithme.com/yoga-interest-quiz">Start Quiz</a>
      <p>It’s free. Pay only for Premium classes</p>
      <ul>
        <li><b>1,200+</b> exclusive classes</li>
        <li><b>250+</b> free videos</li>
        <li><b>26</b> styles</li>
        <li><b>30+</b> top certified instructors</li>
      </ul>
      <div class="main_screen__reviews">
        <img src="${l}stars.svg" alt="Stars" />
        Rated 4.8 by 21,000+ customers
      </div>
    </div>
    <div class="main_screen__image">
      <img src="${l}main_img_quiz.jpg" alt="Main Screen" />
    </div>
  </div>
`
  ), x = `section.sfc-frontPageAnon__slider,
section.sfc-frontPageAnon__section {
  display: none !important;
}

.main_screen * {
  box-sizing: border-box;
}

.main_screen {
  display: flex;
  gap: 94px;
  padding: 60px 3.33em;
  max-width: 1400px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .main_screen {
    height: calc(100vh - 100px);
    background: url(https://conversionrate-store.github.io/a-b_images/dywm/main_img_quiz.jpg) center center no-repeat;
    background-size: cover;
    margin: 20px;
    border-radius: 8px;
    overflow: hidden;
    padding: 0;
    max-height: 600px;
  }
}
.main_screen a {
  display: flex;
  width: 100%;
  padding: 12px 0;
  justify-content: center;
  color: white;
  border-radius: 50px;
  background: #007170;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-decoration: none;
}
.main_screen a:hover {
  background: #005f5f;
}
.main_screen a + p {
  font-size: 14px;
  font-weight: 500;
  color: #2b3635;
  margin: 0;
}
@media (max-width: 768px) {
  .main_screen a + p {
    color: white;
  }
}
.main_screen ul {
  padding: 24px 0;
  margin: 0;
}
@media (max-width: 768px) {
  .main_screen ul {
    width: 100%;
    padding: 16px 16px 16px 36px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.5);
  }
}
.main_screen ul li {
  color: #2b3635;
  font-size: 16px;
}
@media (max-width: 768px) {
  .main_screen ul li {
    color: white;
    font-size: 14px;
  }
}

.main_screen__image {
  width: 55%;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  max-height: 600px;
}
@media (max-width: 768px) {
  .main_screen__image {
    display: none;
  }
}

.main_screen__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 768px) {
  .main_screen__info {
    -webkit-backdrop-filter: blur(4px);
            backdrop-filter: blur(4px);
    background: rgba(0, 0, 0, 0.3);
    padding: 16px;
    justify-content: flex-end;
    gap: 16px;
    width: 100%;
  }
  .main_screen__info > img {
    display: none;
  }
}

h1 {
  text-align: center;
  font-size: 44px;
  line-height: 54px;
  color: #2b3635;
}
@media (max-width: 768px) {
  h1 {
    text-align: left;
    font-size: 24px;
    line-height: 32px !important;
    color: white;
    margin-bottom: -8px;
    align-self: flex-start;
  }
}
h1 + p {
  text-align: center;
  color: #5b6362;
  font-size: 18px;
  line-height: 1.4;
  margin: 0;
}
@media (max-width: 768px) {
  h1 + p {
    text-align: left;
    color: white;
    font-size: 14px;
    line-height: 22px;
  }
}

.main_screen__reviews {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #2b3635;
  font-weight: 600;
}
@media (max-width: 768px) {
  .main_screen__reviews {
    color: white;
    font-size: 14px;
  }
}/*# sourceMappingURL=style.css.map */`;
  p({ name: "Main Screen Quiz", dev: "YK" }), g("main_screen_quiz");
  class _ {
    constructor() {
      this.init();
    }
    async init() {
      await a("body"), console.log(window.location.href), window.location.href === "https://www.doyogawithme.com/" && (m("main_screen_quiz", "Start experiment", "loaded"), c("body").elements[0].insertAdjacentHTML("afterbegin", `<style class="crs_style">${x}</style>`), await a("div.sfc-frontPageAnon"), c("div.sfc-frontPageAnon").elements[0].insertAdjacentHTML("afterbegin", h), d("init"), c(".main_screen a").on("click", (n) => {
        m("main_screen_quiz_start_click", "Click Start Quiz", "click", "Main Screen"), localStorage.setItem("main_screen_quiz", "1");
      })), window.location.href.includes("yoga-interest-quiz") && localStorage.getItem("main_screen_quiz") && (await a("body"), document.querySelector("body").style.opacity = "0", await a(".sfc-interestSurveyEntry__cta"), console.log(c(".sfc-dialog__dialog")), setTimeout(() => {
        document.querySelector(".sfc-interestSurveyEntry__cta").click(), document.querySelector("body").style.opacity = "1", localStorage.removeItem("main_screen_quiz");
      }, 1e3));
    }
  }
  new _();
})();
//# sourceMappingURL=index.js.map
