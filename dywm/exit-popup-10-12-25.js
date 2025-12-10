(function() {
  "use strict";
  const x = `.crs_exit_popup_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  z-index: 1000;
  display: none;
}
.crs_exit_popup_overlay.active {
  display: flex;
}
@media (max-width: 768px) {
  .crs_exit_popup_overlay.active {
    display: block;
    overflow-y: auto;
  }
}

.crs_exit_popup_container {
  background: #ffffff;
  border-radius: 12px;
  width: calc(100% - 40px);
  max-width: 840px;
  position: relative;
  display: flex;
}
@media (max-width: 768px) {
  .crs_exit_popup_container {
    flex-direction: column-reverse;
    margin: 20px auto;
  }
}

@media (max-width: 768px) {
  .crs_exit_popup_logo {
    display: none;
  }
}

.crs_exit_popup_img {
  width: calc(50% - 20px);
  overflow: hidden;
  border-radius: 0 12px 12px 0;
}
@media (max-width: 768px) {
  .crs_exit_popup_img {
    width: 100%;
    border-radius: 12px 12px 0 0;
    height: 230px;
  }
}
.crs_exit_popup_img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}

.crs_exit_popup_content {
  flex: 1;
  padding: 40px;
}
@media (max-width: 768px) {
  .crs_exit_popup_content {
    padding: 16px;
  }
}
.crs_exit_popup_content h3 {
  font-size: 32px;
  line-height: 40px;
  color: #272727;
  margin: 16px 0;
}
@media (max-width: 768px) {
  .crs_exit_popup_content h3 {
    font-size: 24px;
    line-height: 34;
    margin: 0 0 8px;
  }
}
.crs_exit_popup_content h3 + p {
  font-size: 18px;
  line-height: 26px;
  color: #555;
  margin-bottom: 16px;
}
@media (max-width: 768px) {
  .crs_exit_popup_content h3 + p {
    font-size: 14px;
    line-height: 22px;
  }
}
.crs_exit_popup_content .crs_exit_popup_btn {
  display: flex;
  background: #007170;
  color: #fff;
  font-size: 16px;
  line-height: 26px;
  padding: 12px 40px;
  border-radius: 80px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 12px;
  border: none;
  justify-content: center;
}
.crs_exit_popup_content .crs_exit_popup_btn + span {
  display: flex;
  justify-content: center;
  font-size: 14px;
  line-height: 26px;
  font-weight: 500;
  color: #2b3635;
}
.crs_exit_popup_content ul {
  border-radius: 12px;
  background: #f5f5f5;
  padding: 24px;
  margin: 16px 0 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
@media (max-width: 768px) {
  .crs_exit_popup_content ul {
    padding: 15px;
    gap: 0;
  }
}
.crs_exit_popup_content ul li {
  list-style: disc;
  margin-left: 20px;
  font-size: 16px;
  line-height: 30px;
  color: #2b3635;
}

.crs_exit_popup_stars {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}
.crs_exit_popup_stars span {
  font-size: 16px;
  line-height: 24px;
  color: #2b3635;
  font-weight: 600;
}
@media (max-width: 768px) {
  .crs_exit_popup_stars span {
    font-size: 14px;
  }
}

.crs_exit_popup_close_btn {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.crs_exit_popup_close_btn svg {
  width: 24px;
  height: 24px;
}/*# sourceMappingURL=style.css.map */`, l = (i, t, n, e = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: t,
      event_type: n,
      event_loc: e
    }), g(`Event: ${i} | ${t} | ${n} | ${e}`, "success");
  }, u = (i) => new Promise((t) => {
    const n = document.querySelector(i);
    n && t(n);
    const e = new MutationObserver(() => {
      const o = document.querySelector(i);
      o && (t(o), e.disconnect());
    });
    e.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), f = ({ name: i, dev: t }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class p {
    constructor(t) {
      this.elements = t instanceof p ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, n, e) {
      return typeof n == "function" && (e = n, n = ""), this.elements.forEach((o) => {
        o.addEventListener(t, function(s) {
          var c;
          if (n !== "") {
            let a = (c = s.target) == null ? void 0 : c.closest(n);
            a && (e == null || e.call(a, s));
          } else
            e == null || e.call(o, s);
        });
      }), this;
    }
    addClass(t) {
      return this.elements.forEach(function(n) {
        n.classList.add(t);
      }), this;
    }
    removeClass(t) {
      return this.elements.forEach(function(n) {
        n.classList.remove(t);
      }), this;
    }
    toggleClass(t) {
      return this.elements.forEach(function(n) {
        n.classList.toggle(t);
      }), this;
    }
    each(t) {
      for (let n of this.elements)
        t(new p(n), this.elements.indexOf(n));
      return this;
    }
    style(t, n) {
      const e = t.split("-").map((o, s) => s === 0 ? o : o.charAt(0).toUpperCase() + o.slice(1)).join("");
      return this.elements.forEach(function(o) {
        o.style[e] = n;
      }), this;
    }
    find(t) {
      const n = this.elements.map((e) => Array.from(e.querySelectorAll(t)));
      return new p(n.flat());
    }
    attr(t, n) {
      return n ? (this.elements.forEach(function(e) {
        e.setAttribute(t, n);
      }), this) : this.elements[0].getAttribute(t);
    }
    text(t) {
      return t ? (this.elements.forEach(function(n) {
        n.textContent = t;
      }), this) : this.elements[0].textContent || "";
    }
    html(t) {
      return t ? (this.elements.forEach(function(n) {
        n.innerHTML = t;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const r = (i) => new p(i), h = (i) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, m = (i, t) => {
    const n = i === window ? window : document.querySelector(i);
    let e, o, s, c, a;
    function d() {
      e = null, c = 0;
    }
    d(), n.addEventListener("scroll", function() {
      o = i === window ? this.scrollY : this.scrollTop, a = o > e ? "down" : "up", e != null && (c = o - e), e = o, clearTimeout(s), s = setTimeout(d, 50), t(Math.abs(c), a);
    });
  }, g = (i, t = "info") => {
    let n;
    switch (t) {
      case "info":
        n = "color: #3498db;";
        break;
      case "warn":
        n = "color: #f39c12;";
        break;
      case "error":
        n = "color: #e74c3c;";
        break;
      case "success":
        n = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${i}`, `${n} font-size: 16px; font-weight: 600`);
  }, _ = {
    close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M20 20L4 4M20 4L4 20" stroke="#272727" stroke-width="2" stroke-linecap="round"/>
		</svg>`,
    stars: `<svg width="74" height="14" viewBox="0 0 74 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="#FAA900"/>
		<path d="M22 0L23.5716 4.83688H28.6574L24.5429 7.82624L26.1145 12.6631L22 9.67376L17.8855 12.6631L19.4571 7.82624L15.3426 4.83688H20.4284L22 0Z" fill="#FAA900"/>
		<path d="M37 0L38.5716 4.83688H43.6574L39.5429 7.82624L41.1145 12.6631L37 9.67376L32.8855 12.6631L34.4571 7.82624L30.3426 4.83688H35.4284L37 0Z" fill="#FAA900"/>
		<path d="M52 0L53.5716 4.83688H58.6574L54.5429 7.82624L56.1145 12.6631L52 9.67376L47.8855 12.6631L49.4571 7.82624L45.3426 4.83688H50.4284L52 0Z" fill="#FAA900"/>
		<path d="M67 0L68.5716 4.83688H73.6574L69.5429 7.82624L71.1145 12.6631L67 9.67376L62.8855 12.6631L64.4571 7.82624L60.3426 4.83688H65.4284L67 0Z" fill="#FAA900"/>
		</svg>`
  }, w = (
    /* HTML */
    `
  <div class="crs_exit_popup_overlay">
    <div class="crs_exit_popup_container">
      <span class="crs_exit_popup_close_btn">${_.close}</span>
      <div class="crs_exit_popup_content">
        <img
          src="https://www.doyogawithme.com/themes/custom/samsara/assets/img/logo/logo.svg"
          alt="logo"
          class="crs_exit_popup_logo"
        />
        <h3>Find Your Perfect Yoga Practice in 40 Seconds</h3>
        <p>Take a short quiz and get a personalized selection of yoga classes tailored to your goals and level.</p>
        <a class="crs_exit_popup_btn" href="https://www.doyogawithme.com/yoga-interest-quiz">Take the Quiz</a>
        <span>It’s free. Pay only for Premium classes</span>
        <ul>
          <li><b>1,200+</b> exclusive classes</li>
          <li><b>250+</b> free videos</li>
          <li><b>26</b> styles</li>
          <li><b>30+</b> top certified instructors</li>
        </ul>
        <div class="crs_exit_popup_stars">
          ${_.stars}
          <span>Rated 4.9 by 15,000+ customers</span>
        </div>
      </div>
      <div class="crs_exit_popup_img">
        <img
          src="https://www.doyogawithme.com/themes/custom/samsara/components/content-customization/interest_survey/img-square.jpg"
          alt="img"
        />
      </div>
    </div>
  </div>
`
  );
  f({ name: "Exit popup", dev: "YK" }), h("popup_exit");
  class y {
    constructor() {
      this.init();
    }
    async init() {
      if (window.location.pathname !== "/yoga-interest-quiz") {
        if (window.location.pathname === "/") return;
        await u("body"), r("body").elements[0].insertAdjacentHTML("beforeend", `<style>${x}</style>`), r("body").elements[0].insertAdjacentHTML("beforeend", w);
        const t = r(".crs_exit_popup_overlay").elements[0];
        r("body").on("mouseleave", () => {
          localStorage.getItem("exit_popup_shown") !== "true" && (t.classList.contains("active") || (t.classList.add("active"), l("exp_exit_intent_view_01", "Find Your Perfect Yoga Practice in 40 Seconds", "view"), localStorage.setItem("exit_popup_shown", "true")));
        }), window.innerWidth <= 768 && m(window, (n) => {
          if (console.log(n), n > 120) {
            if (localStorage.getItem("exit_popup_shown") === "true") return;
            t.classList.add("active"), l("exp_exit_intent_view_01", "Find Your Perfect Yoga Practice in 40 Seconds", "view"), localStorage.setItem("exit_popup_shown", "true");
          }
        }), r(".crs_exit_popup_close_btn").on("click", () => {
          t.classList.remove("active"), l("exp_exit_intent_button_02", "Close", "click");
        }), r(".crs_exit_popup_btn").on("click", () => {
          l("exp_exit_intent_button_01", "Take a Quiz", "click"), localStorage.setItem("exit_popup_start", "true");
        });
      } else
        await u("body"), document.querySelector("body").style.opacity = "0", await u(".sfc-interestSurveyEntry__cta"), setTimeout(() => {
          document.querySelector(".sfc-interestSurveyEntry__cta").click(), document.querySelector("body").style.opacity = "1", localStorage.removeItem("exit_popup_start");
        }, 1e3);
    }
  }
  new y();
})();
//# sourceMappingURL=index.js.map
