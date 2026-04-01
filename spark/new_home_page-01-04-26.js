(function() {
  "use strict";
  const x = `[data-id=a0ec5d7],
[data-id=e5f5726],
[data-id="6888788"],
[data-id="0656969"],
[data-id="4302c05"],
[data-id="9ebfa84"],
[data-id="876ca5b"],
[data-id="5700a6b"],
[data-id="7abb097"],
[data-id=ed1ba9c],
[data-id="6f64fb3"],
[data-id="540f3ea"] {
  display: none;
}

.crs_hero_block {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 122px 20px 24px;
  background: linear-gradient(180deg, rgba(33, 45, 58, 0.6) 0%, #212d3a 20.56%), url("https://conversionrate-store.github.io/a-b_images/spark/hero_bg.webp") no-repeat top center;
  background-size: contain;
}
.crs_hero_block .crs_hero_badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #767676;
  color: #fff;
  font-size: 14px;
  font-weight: 350;
  line-height: 20px;
  padding: 5px 15px 5px 12px;
  border-radius: 15px;
  height: 30px;
  width: -moz-fit-content;
  width: fit-content;
}
.crs_hero_block .crs_hero_heading {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.crs_hero_block .crs_hero_title {
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  line-height: 42px;
  margin: 0;
}
.crs_hero_block .crs_hero_desc {
  color: #fff;
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
  margin: 0;
}
.crs_hero_block .crs_hero_ctas {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.crs_hero_block .crs_hero_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  line-height: 31px;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
}
.crs_hero_block .crs_hero_btn--primary {
  background-color: #ea5e58;
  color: #fff;
}
.crs_hero_block .crs_hero_btn--secondary {
  background-color: #fff;
  color: #ea5e58;
}
.crs_hero_block .crs_hero_stats {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}
.crs_hero_block .crs_hero_stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #fff;
}
.crs_hero_block .crs_hero_stat__value {
  font-size: 14px;
  font-weight: 900;
  line-height: 22px;
  white-space: nowrap;
}
.crs_hero_block .crs_hero_stat__label {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  max-width: 110px;
}
.crs_hero_block .crs_hero_divider {
  width: 1px;
  height: 58px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 10px;
  flex-shrink: 0;
}

.crs_growth_block {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 20px;
}
.crs_growth_block .crs_growth_intro {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.crs_growth_block .crs_growth_title {
  margin: 0;
  font-size: 24px;
  font-weight: 900;
  line-height: 31px;
  color: #091d27;
}
.crs_growth_block .crs_growth_desc {
  margin: 0;
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
  color: #3f444b;
}
.crs_growth_block .crs_growth_cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.crs_growth_block .crs_growth_card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
}
.crs_growth_block .crs_growth_card__head {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.crs_growth_block .crs_growth_card__title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: #0a1d27;
}
.crs_growth_block .crs_growth_card__img {
  overflow: hidden;
  border-radius: 8px;
}
.crs_growth_block .crs_growth_card__img img {
  width: 100%;
  display: block;
}
.crs_growth_block .crs_growth_badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 3px 13px 3px 14px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #000;
  width: -moz-fit-content;
  width: fit-content;
}
.crs_growth_block .crs_growth_badge--finance {
  background-color: #d8f4da;
}
.crs_growth_block .crs_growth_badge--marketing {
  background-color: #faebd8;
}
.crs_growth_block .crs_growth_badge--sales {
  background-color: #fadddb;
}
.crs_growth_block .crs_growth_badge--operations {
  background-color: #d8dafa;
}
.crs_growth_block .crs_growth_list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.crs_growth_block .crs_growth_list__item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.crs_growth_block .crs_growth_list__item svg {
  flex-shrink: 0;
  margin-top: 2px;
}
.crs_growth_block .crs_growth_list__item span {
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
  color: #3f444b;
}
.crs_growth_block .crs_growth_list__item span strong {
  font-weight: 700;
}
.crs_growth_block .crs_growth_cta {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  background-color: #ea5e58;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  line-height: 31px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
}

.crs_revenue_block {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 20px;
  background: #fff;
}
.crs_revenue_block .crs_revenue_card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.crs_revenue_block .crs_revenue_card__info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.crs_revenue_block .crs_revenue_card__label {
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: #0a1d27;
}
.crs_revenue_block .crs_revenue_card__value {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: #ff9011;
}
.crs_revenue_block .crs_revenue_card__icon {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
}
.crs_revenue_block .crs_revenue_card__icon svg {
  width: 100%;
  height: 100%;
}
.crs_revenue_block .crs_revenue_text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.crs_revenue_block .crs_revenue_title {
  margin: 0;
  font-size: 24px;
  font-weight: 900;
  line-height: 31px;
  color: #091d27;
}
.crs_revenue_block .crs_revenue_desc {
  margin: 0;
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
  color: #3f444b;
}
.crs_revenue_block .crs_revenue_disclaimer {
  margin: 0;
  font-size: 12px;
  font-weight: 350;
  line-height: 22px;
  color: #969696;
}

.crs_calc_block {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 20px;
}
.crs_calc_block .crs_calc_intro {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.crs_calc_block .crs_calc_intro__title {
  margin: 0;
  font-size: 24px;
  font-weight: 900;
  line-height: 31px;
  color: #091d27;
}
.crs_calc_block .crs_calc_intro__desc {
  margin: 0;
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
  color: #3f444b;
}
.crs_calc_block .crs_calc_guarantee {
  background-color: #cbd6e2;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.crs_calc_block .crs_calc_guarantee__head {
  display: flex;
  align-items: center;
  gap: 8px;
}
.crs_calc_block .crs_calc_guarantee__head strong {
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: #0a1d27;
}
.crs_calc_block .crs_calc_guarantee__head svg {
  flex-shrink: 0;
}
.crs_calc_block .crs_calc_guarantee p {
  margin: 0;
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
  color: #3f444b;
}
.crs_calc_block .crs_calc_card {
  background-color: #33475b;
  border-radius: 12px;
  border-bottom: 4px solid #000;
  padding: 32px 19px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.crs_calc_block .crs_calc_card__title {
  margin: 0;
  font-size: 24px;
  font-weight: 900;
  line-height: 31px;
  color: #fff;
}
.crs_calc_block .crs_calc_card__desc {
  margin: 0;
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
  color: #fff;
}
.crs_calc_block .crs_calc_card__disclaimer {
  margin: 0;
  font-size: 12px;
  font-weight: 350;
  line-height: 22px;
  color: #969696;
}
.crs_calc_block .crs_calc_card__text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.crs_calc_block .crs_calc_results {
  display: none;
}
.crs_calc_block .crs_calc_results__rows {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.crs_calc_block .crs_calc_results__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.crs_calc_block .crs_calc_results__label {
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);
}
.crs_calc_block .crs_calc_results__val {
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  color: #ff7a59;
  text-align: right;
  white-space: nowrap;
}
.crs_calc_block .crs_calc_fields {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.crs_calc_block .crs_calc_field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.crs_calc_block .crs_calc_label {
  font-size: 14px;
  font-weight: 350;
  line-height: 22px;
  color: #fff;
}
.crs_calc_block .crs_calc_slider {
  -webkit-appearance: none;
  -moz-appearance: none;
       appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(to right, #ea5e58 15%, rgba(255, 255, 255, 0.3) 15%);
  outline: none;
  cursor: pointer;
}
.crs_calc_block .crs_calc_slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #ea5e58;
  border: 3px solid #fff;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}
.crs_calc_block .crs_calc_slider::-moz-range-thumb {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #ea5e58;
  border: 3px solid #fff;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}
.crs_calc_block .crs_calc_slider_value {
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: #fff;
}
.crs_calc_block .crs_calc_input_wrap {
  display: flex;
  align-items: center;
  background: #f5f8fa;
  border: 1px solid #cbd6e2;
  border-radius: 12px;
  height: 42px;
  overflow: hidden;
}
.crs_calc_block .crs_calc_input_prefix {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 100%;
  flex-shrink: 0;
  background: rgba(203, 214, 226, 0.49);
  border-right: 1px solid #cbd6e2;
  font-size: 16px;
  color: #33475b;
}
.crs_calc_block .crs_calc_rate {
  flex: 1;
  border: none;
  background: transparent;
  padding: 0 12px;
  font-size: 16px;
  color: #33475b;
  outline: none;
}
.crs_calc_block .crs_calc_rate::-webkit-outer-spin-button, .crs_calc_block .crs_calc_rate::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.crs_calc_block .crs_calc_btn {
  width: 100%;
  height: 60px;
  background: #ea5e58;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
}
.crs_calc_block .crs_calc_demo_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background: #ea5e58;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  box-sizing: border-box;
}

.crs_reviews_block {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 20px;
}
.crs_reviews_block .crs_reviews_header {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.crs_reviews_block .crs_reviews_title {
  margin: 0;
  font-size: 24px;
  font-weight: 900;
  line-height: 31px;
  color: #091d27;
}
.crs_reviews_block .crs_reviews_desc {
  margin: 0;
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
  color: #3f444b;
}
.crs_reviews_block .crs_reviews_logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.crs_reviews_block .crs_reviews_logos img {
  width: 100%;
}
.crs_reviews_block .crs_reviews_swiper {
  background: #e8a446;
  border-radius: 12px;
  overflow: hidden;
  padding: 20px 20px 52px;
  position: relative;
  width: 100%;
}
.crs_reviews_block .crs_reviews_swiper .swiper-pagination-bullet {
  width: 12px !important;
  height: 8px !important;
  border-radius: 4px !important;
  background: rgba(255, 255, 255, 0.4) !important;
  opacity: 1 !important;
  transition: width 0.3s !important;
  margin: 0 3px !important;
  display: inline-block !important;
  font-size: 0 !important;
  color: transparent !important;
}
.crs_reviews_block .crs_reviews_swiper .swiper-pagination-bullet::before, .crs_reviews_block .crs_reviews_swiper .swiper-pagination-bullet::after {
  display: none !important;
  content: none !important;
}
.crs_reviews_block .crs_reviews_swiper .swiper-pagination-bullet-active {
  width: 32px !important;
  background: rgba(255, 255, 255, 0.9) !important;
}
.crs_reviews_block .crs_reviews_swiper .crs_reviews_pagination {
  text-align: left;
  padding: 0 0 4px 20px;
}
.crs_reviews_block .crs_review_card {
  background: transparent;
  border-radius: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.crs_reviews_block .crs_review_card__head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}
.crs_reviews_block .crs_review_card__avatar {
  width: 90px;
  height: 90px;
  border-radius: 12px;
  -o-object-fit: cover;
     object-fit: cover;
  flex-shrink: 0;
}
.crs_reviews_block .crs_review_card__avatar--placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 36px;
  font-weight: 900;
}
.crs_reviews_block .crs_review_card__info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.crs_reviews_block .crs_review_card__name {
  display: block;
  font-size: 24px;
  font-weight: 900;
  line-height: 32px;
  color: #fff;
}
.crs_reviews_block .crs_review_card__role {
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #fff;
}
.crs_reviews_block .crs_review_card__quote {
  margin-bottom: 8px;
}
.crs_reviews_block .crs_review_card__quote svg {
  transform: rotate(180deg);
}
.crs_reviews_block .crs_review_card__text {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #fff;
}
.crs_reviews_block .crs_reviews_cta {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  background: #ea5e58;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  box-sizing: border-box;
}/*# sourceMappingURL=style.css.map */`, d = (s, n, e, r = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: n,
      event_type: e,
      event_loc: r
    }), p(`Event: ${s} | ${n} | ${e} | ${r}`, "success");
  }, v = (s) => new Promise((n) => {
    const e = document.querySelector(s);
    e && n(e);
    const r = new MutationObserver(() => {
      const c = document.querySelector(s);
      c && (n(c), r.disconnect());
    });
    r.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), k = ({ name: s, dev: n }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class g {
    constructor(n) {
      this.elements = n instanceof g ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, e, r) {
      return typeof e == "function" && (r = e, e = ""), this.elements.forEach((c) => {
        c.addEventListener(n, function(a) {
          var i;
          if (e !== "") {
            let t = (i = a.target) == null ? void 0 : i.closest(e);
            t && (r == null || r.call(t, a));
          } else
            r == null || r.call(c, a);
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
        n(new g(e), this.elements.indexOf(e));
      return this;
    }
    style(n, e) {
      const r = n.split("-").map((c, a) => a === 0 ? c : c.charAt(0).toUpperCase() + c.slice(1)).join("");
      return this.elements.forEach(function(c) {
        c.style[r] = e;
      }), this;
    }
    find(n) {
      const e = this.elements.map((r) => Array.from(r.querySelectorAll(n)));
      return new g(e.flat());
    }
    attr(n, e) {
      return e ? (this.elements.forEach(function(r) {
        r.setAttribute(n, e);
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
  const o = (s) => new g(s), y = async (s) => {
    const n = (e) => new Promise((r, c) => {
      const a = e.split(".").pop();
      if (a === "js") {
        if (Array.from(document.scripts).map((_) => _.src.toLowerCase()).includes(e.toLowerCase()))
          return p(`Script ${e} allready downloaded!`, "success"), r("");
        const t = document.createElement("script");
        t.src = e, t.onload = r, t.onerror = c, document.head.appendChild(t);
      } else if (a === "css") {
        if (Array.from(document.styleSheets).map((_) => {
          var u;
          return (u = _.href) == null ? void 0 : u.toLowerCase();
        }).includes(e.toLowerCase()))
          return p(`Style ${e} allready downloaded!`, "success"), r("");
        const t = document.createElement("link");
        t.rel = "stylesheet", t.href = e, t.onload = r, t.onerror = c, document.head.appendChild(t);
      }
    });
    for (const e of s)
      p(e), await n(e), p(`Loaded librari ${e}`);
    p("All libraries loaded!", "success");
  }, C = (s) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", s, "variant_1"));
    }, 1e3);
  }, w = (s, n, e, r, c = 1e3, a = 0.5) => {
    let i, t;
    if (i = new IntersectionObserver(
      function(_) {
        _[0].isIntersecting === !0 ? t = setTimeout(() => {
          d(
            n,
            _[0].target.dataset.visible || r || "",
            "view",
            e
          ), i.disconnect();
        }, c) : (p("Element is not fully visible", "warn"), clearTimeout(t));
      },
      { threshold: [a] }
    ), typeof s == "string") {
      const _ = document.querySelector(s);
      _ && i.observe(_);
    } else
      i.observe(s);
  }, p = (s, n = "info") => {
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
    console.log(`%c>>> ${s}`, `${e} font-size: 16px; font-weight: 600`);
  }, h = "https://conversionrate-store.github.io/a-b_images/spark/", l = {
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
		<path d="M7.87503 17.8675L2.44128 12.4338L4.91753 9.95752L7.87503 12.9238L16.52 4.27002L18.9963 6.74627L7.87503 17.8675Z" fill="#80C67D"/>
		</svg>`,
    growth: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
		<g clip-path="url(#clip0_110_126)">
		<path d="M48.5345 47.0704H46.972V18.1645C46.972 17.3556 46.3162 16.6997 45.5072 16.6997H39.6479C38.8389 16.6997 38.1831 17.3556 38.1831 18.1645V47.0704H35.2534V27.93C35.2534 27.1211 34.5976 26.4652 33.7886 26.4652H27.9293C27.1203 26.4652 26.4645 27.1211 26.4645 27.93V47.0704H23.5348V33.301C23.5348 32.4921 22.879 31.8362 22.07 31.8362H16.2107C15.4017 31.8362 14.7459 32.4921 14.7459 33.301V47.0704H11.8162V36.8166C11.8162 36.0076 11.1604 35.3518 10.3514 35.3518H4.49213C3.68315 35.3518 3.0273 36.0076 3.0273 36.8166V47.0704H1.46482C0.65585 47.0704 0 47.7262 0 48.5352C0 49.3442 0.65585 50 1.46482 50H48.5345C49.3435 50 49.9993 49.3442 49.9993 48.5352C49.9993 47.7262 49.3435 47.0704 48.5345 47.0704Z" fill="#CBD6E2"/>
		<path d="M1.46482 31.4754C10.6071 31.4754 20.5212 28.192 29.381 22.2301C36.3199 17.5607 42.1041 11.5957 45.697 5.48763L47.1197 10.7968C47.2951 11.4513 48.1418 12.0167 48.9137 11.8326C49.7006 11.6449 50.1588 10.82 49.9494 10.0385L47.5507 1.08652C47.3412 0.305182 46.5384 -0.158678 45.7567 0.0507914L36.8047 2.44949C36.0232 2.65886 35.5596 3.46207 35.7689 4.24351C35.9784 5.02494 36.7812 5.4888 37.563 5.27924L43.33 3.73394C39.978 9.55867 34.4382 15.2957 27.7454 19.7994C19.3639 25.4396 10.0306 28.5457 1.46482 28.5457C0.65585 28.5457 0 29.2016 0 30.0105C0 30.8195 0.65585 31.4754 1.46482 31.4754Z" fill="#CBD6E2"/>
		</g>
		<defs>
		<clipPath id="clip0_110_126">
		<rect width="50" height="50" fill="white"/>
		</clipPath>
		</defs>
		</svg>`,
    shield: `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="0 0 27 30" fill="none">
		<path d="M12.447 0.190229C13.0389 -0.0312427 13.6857 -0.0601155 14.295 0.107729L14.553 0.190229L25.053 4.12773C25.5854 4.32736 26.0501 4.67419 26.3929 5.12778C26.7358 5.58138 26.9427 6.12307 26.9895 6.68973L27 6.93723V14.9817C26.9999 17.4124 26.3437 19.7979 25.1004 21.8865C23.8572 23.9751 22.0731 25.6894 19.9365 26.8482L19.5375 27.0567L14.5065 29.5722C14.2295 29.7105 13.9269 29.7902 13.6177 29.8062C13.3085 29.8222 12.9993 29.7742 12.7095 29.6652L12.4935 29.5722L7.4625 27.0567C5.28842 25.9697 3.44816 24.3158 2.13601 22.2696C0.823849 20.2235 0.0884708 17.8611 0.00750017 15.4317L0 14.9817V6.93723C8.72257e-06 6.36892 0.16144 5.81231 0.465501 5.33219C0.769561 4.85206 1.20374 4.46818 1.7175 4.22523L1.947 4.12773L12.447 0.190229ZM13.5 2.99973L3 6.93723V14.9817C3.00004 16.8642 3.50618 18.7121 4.46543 20.3319C5.42469 21.9517 6.80177 23.2838 8.4525 24.1887L8.805 24.3732L13.5 26.7207L18.195 24.3732C19.8791 23.5313 21.3058 22.2521 22.3258 20.6695C23.3458 19.0869 23.9214 17.2592 23.9925 15.3777L24 14.9817V6.93723L13.5 2.99973ZM18.6495 9.84123C18.9194 9.57221 19.2817 9.41602 19.6626 9.40439C20.0435 9.39275 20.4146 9.52655 20.7004 9.7786C20.9863 10.0307 21.1655 10.3821 21.2016 10.7614C21.2377 11.1408 21.1281 11.5197 20.895 11.8212L20.7705 11.9622L12.9195 19.8147C12.6335 20.1007 12.2525 20.2716 11.8488 20.2951C11.445 20.3186 11.0467 20.193 10.7295 19.9422L10.5855 19.8147L6.9795 16.2087C6.70762 15.9394 6.54895 15.5764 6.53598 15.1939C6.523 14.8114 6.6567 14.4385 6.9097 14.1514C7.1627 13.8642 7.51588 13.6847 7.89694 13.6494C8.27799 13.6142 8.65812 13.7259 8.9595 13.9617L9.1005 14.0862L11.7525 16.7382L18.6495 9.84123Z" fill="#FF9011"/>
		</svg>`,
    quote: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
		<path d="M33.3375 16.7475C34.2038 14.5688 35.5687 12.4162 37.3931 10.3425C37.9706 9.68622 38.0494 8.74126 37.5769 8.00626C37.2093 7.42876 36.6056 7.11377 35.9494 7.11377C35.7656 7.11377 35.5819 7.12683 35.3981 7.19252C31.5394 8.32126 22.5225 12.3244 22.2731 25.1606C22.1813 30.1087 25.8037 34.3612 30.5156 34.8468C33.1275 35.1093 35.7262 34.2563 37.6556 32.5238C39.585 30.7781 40.6875 28.2843 40.6875 25.6856C40.6875 21.3544 37.6162 17.5612 33.3375 16.7475Z" fill="white" fill-opacity="0.19"/>
		<path d="M9.56812 34.8468C12.1669 35.1093 14.7656 34.2563 16.695 32.5238C18.6244 30.7781 19.7269 28.2843 19.7269 25.6856C19.7269 21.3544 16.6556 17.5612 12.3769 16.7475C13.2432 14.5688 14.6081 12.4162 16.4325 10.3425C17.01 9.68624 17.0888 8.74128 16.6162 8.00627C16.2488 7.42878 15.645 7.11379 14.9887 7.11379C14.8051 7.11379 14.6213 7.12685 14.4375 7.19254C10.5788 8.32127 1.56189 12.3244 1.31252 25.1607L1.31252 25.3443C1.31252 30.2137 4.89562 34.3612 9.56812 34.8468Z" fill="white" fill-opacity="0.19"/>
		</svg>`
  }, L = (
    /* HTML */
    ' <div class="crs_content_wrapper"></div> '
  ), S = (
    /* HTML */
    `
  <section class="crs_hero_block">
    <div class="crs_hero_badge">All-in-one software for martial arts schools</div>
    <div class="crs_hero_heading">
      <h1 class="crs_hero_title">All-in-One Software to Run, Grow, and Scale Your Martial Arts School</h1>
      <p class="crs_hero_desc">
        From first inquiry to recurring tuition — automate your operations, track your numbers, and turn more trials
        into long-term members.
      </p>
    </div>
    <div class="crs_hero_ctas">
      <a href="/demo" class="crs_hero_btn crs_hero_btn--primary">WATCH A QUICK DEMO</a>
      <a href="/pricing" class="crs_hero_btn crs_hero_btn--secondary">START NOW FOR $1</a>
    </div>
    <div class="crs_hero_stats">
      <div class="crs_hero_stat">
        <span class="crs_hero_stat__value">$40,062,744.59</span>
        <span class="crs_hero_stat__label">Processed Monthly For Clients</span>
      </div>
      <div class="crs_hero_divider"></div>
      <div class="crs_hero_stat">
        <span class="crs_hero_stat__value">3,684,500+</span>
        <span class="crs_hero_stat__label">Monthly Emails Delivered</span>
      </div>
      <div class="crs_hero_divider"></div>
      <div class="crs_hero_stat">
        <span class="crs_hero_stat__value">869,972+</span>
        <span class="crs_hero_stat__label">Monthly Classes Attended</span>
      </div>
    </div>
  </section>
`
  ), z = (
    /* HTML */
    `
  <section class="crs_growth_block">
    <div class="crs_growth_intro">
      <h2 class="crs_growth_title">Turn Operations Into a Growth Engine</h2>
      <p class="crs_growth_desc">
        Unify billing, leads, communication, and reporting in one system built for martial arts schools — so you gain
        clarity, improve retention, and scale confidently.
      </p>
    </div>
    <div class="crs_growth_cards">
      <div class="crs_growth_card">
        <div class="crs_growth_card__head">
          <span class="crs_growth_badge crs_growth_badge--finance">Finance</span>
          <h3 class="crs_growth_card__title">Get Paid Faster &amp; Predictably</h3>
        </div>
        <ul class="crs_growth_list">
          <li class="crs_growth_list__item">
            ${l.check}
            <span>Reduce late payments by 15–25% with automated recurring billing.</span>
          </li>
          <li class="crs_growth_list__item">
            ${l.check}
            <span>Gain clear revenue forecasts and real-time cash flow visibility.</span>
          </li>
        </ul>
        <div class="crs_growth_card__img">
          <img src="${h}imp_1.webp" alt="Finance dashboard" />
        </div>
      </div>
      <div class="crs_growth_card">
        <div class="crs_growth_card__head">
          <span class="crs_growth_badge crs_growth_badge--marketing">Marketing</span>
          <h3 class="crs_growth_card__title">Generate &amp; Nurture More Leads</h3>
        </div>
        <ul class="crs_growth_list">
          <li class="crs_growth_list__item">
            ${l.check}
            <span>Reduce missed inquiries by up to 30% with automated email, SMS, and app follow-ups.</span>
          </li>
          <li class="crs_growth_list__item">
            ${l.check}
            <span>Increase event and trial registrations with high-converting checkout pages.</span>
          </li>
        </ul>
        <div class="crs_growth_card__img">
          <img src="${h}imp_2.webp" alt="Marketing automation" />
        </div>
      </div>
      <div class="crs_growth_card">
        <div class="crs_growth_card__head">
          <span class="crs_growth_badge crs_growth_badge--sales">Sales</span>
          <h3 class="crs_growth_card__title">Convert More Trials to Members</h3>
        </div>
        <ul class="crs_growth_list">
          <li class="crs_growth_list__item">
            ${l.check}
            <span>Improve trial-to-member conversions by <strong>10–20%</strong> with automated follow-ups.</span>
          </li>
          <li class="crs_growth_list__item">
            ${l.check}
            <span>Remove checkout friction and enable instant enrollment in just a few clicks.</span>
          </li>
        </ul>
        <div class="crs_growth_card__img">
          <img src="${h}imp_3.webp" alt="Sales pipeline" />
        </div>
      </div>
      <div class="crs_growth_card">
        <div class="crs_growth_card__head">
          <span class="crs_growth_badge crs_growth_badge--operations">Operations</span>
          <h3 class="crs_growth_card__title">Save 400+ Hours Annually</h3>
        </div>
        <ul class="crs_growth_list">
          <li class="crs_growth_list__item">
            ${l.check}
            <span>Reclaim 10–12 hours per week by automating attendance, renewals, and reminders.</span>
          </li>
          <li class="crs_growth_list__item">
            ${l.check}
            <span>Get full visibility into retention risks and daily performance metrics.</span>
          </li>
        </ul>
        <div class="crs_growth_card__img">
          <img src="${h}imp_4.webp" alt="Operations dashboard" />
        </div>
      </div>
    </div>
    <a href="/demo" class="crs_growth_cta">SCHEDULE A LIVE DEMO</a>
  </section>
`
  ), E = (
    /* HTML */
    `
  <section class="crs_revenue_block">
    <div class="crs_revenue_card">
      <div class="crs_revenue_card__info">
        <span class="crs_revenue_card__label">Revenue growth</span>
        <span class="crs_revenue_card__value">+25%</span>
      </div>
      <div class="crs_revenue_card__icon">${l.growth}</div>
    </div>
    <div class="crs_revenue_text">
      <h2 class="crs_revenue_title">Schools Increase Revenue by an Average of 25% in 6 Months*</h2>
      <p class="crs_revenue_desc">
        Schools using automation, recurring billing, and streamlined enrollment typically see double-digit growth within
        the first 6 months.
      </p>
    </div>
    <p class="crs_revenue_disclaimer">
      *Results are not guaranteed and vary based on market, pricing, and implementation. Data is based on average growth
      statistics from clients using the Spark app.
    </p>
  </section>
`
  ), $ = (
    /* HTML */
    `
  <section class="crs_calc_block">
    <div class="crs_calc_intro">
      <h2 class="crs_calc_intro__title">Migrate With Minimal Effort &amp; Operational Disruption</h2>
      <p class="crs_calc_intro__desc">
        Our team manages the entire transition for you — so your classes, payments, and members keep running as usual.
      </p>
      <div class="crs_calc_guarantee">
        <div class="crs_calc_guarantee__head">
          ${l.shield}
          <strong>Zero-Data-Loss Guarantee</strong>
        </div>
        <p>Your members, attendance, and records move safely — with zero data loss, guaranteed.</p>
      </div>
    </div>
    <div class="crs_calc_card" id="crs_calc_form">
      <div class="crs_calc_card__text">
        <h3 class="crs_calc_card__title">How Much Can You Save with Spark?</h3>
        <p class="crs_calc_card__desc">
          Enter your admin hours below to see how much time and money Spark could save your school.
        </p>
      </div>
      <div class="crs_calc_fields">
        <div class="crs_calc_field">
          <label class="crs_calc_label">Admin hours per week</label>
          <input class="crs_calc_slider" type="range" min="10" max="200" value="30" />
          <span class="crs_calc_slider_value">30</span>
        </div>
        <div class="crs_calc_field">
          <label class="crs_calc_label">Hourly rate</label>
          <div class="crs_calc_input_wrap">
            <span class="crs_calc_input_prefix">$</span>
            <input class="crs_calc_rate" type="number" value="20" min="1" />
          </div>
        </div>
      </div>
      <button class="crs_calc_btn">CALCULATE SAVINGS</button>
    </div>
    <div class="crs_calc_card crs_calc_results" id="crs_calc_results">
      <h3 class="crs_calc_card__title">Your Estimated Savings</h3>
      <div class="crs_calc_results__rows">
        <div class="crs_calc_results__row">
          <span class="crs_calc_results__label">Time saved annually:</span>
          <span class="crs_calc_time crs_calc_results__val"></span>
        </div>
        <div class="crs_calc_results__row">
          <span class="crs_calc_results__label">Annual savings:</span>
          <span class="crs_calc_money crs_calc_results__val"></span>
        </div>
      </div>
      <p class="crs_calc_card__desc">Reinvest these savings into growth or enjoy your free time.</p>
      <p class="crs_calc_card__disclaimer">
        *Based on an average 50% admin time reduction reported by Spark users. Individual results may vary.
      </p>
      <a href="/demo" class="crs_calc_demo_btn">SCHEDULE MY DEMO</a>
    </div>
  </section>
`
  ), M = [
    {
      name: "Raymond Ahles",
      role: "Spark User",
      photo: `${h}raymond.webp`,
      text: "We’ve been around for over 26 years and until Spark Minds came along we always had issues. In our case, it was because we tend to do things a bit differently and need a lot of customization. Spark was the answer and it just keeps improving. They don’t rest and support is unlike anything we’ve seen before. I give Spark, Master Ron Sell, GM Park, and the whole team my highest recommendation."
    },
    {
      name: "Dan Heart",
      role: "Spark User",
      photo: "",
      text: "We have been members of Spark for a while. Their continuous improvement is inspiring. Customer service is amazing. Dedication to clients is exceptional. There are a lot of awesome companies out there and I’m sure are great. It’s always a hard decision who to choose. Spark has been nothing but great for us. Highly recommended!"
    },
    {
      name: "Amanda Buser Denu",
      role: "Spark User",
      photo: "",
      text: "I am sooo appreciative of this amazing Spark software and the phenomenal team that works around the clock for us. Honestly, I can’t express enough how awesome you guys are!!! You answer my questions promptly, you set up videos to walk me through questions, you stay positive, and are constantly working on ways to improve & help school owners like myself… even in these challenging times. I just want to say THANK YOU!!!! You guys rock!!!"
    }
  ], A = (
    /* HTML */
    `
  <section class="crs_reviews_block">
    <div class="crs_reviews_header">
      <h2 class="crs_reviews_title">2000+ Local Member-Based Businesses Are THRIVING with Spark</h2>
      <p class="crs_reviews_desc">Learn Why These Schools Choose SPARK</p>
    </div>
    <div class="crs_reviews_logos">
      <img src="${h}logos.webp" alt="" />
    </div>
    <div class="swiper crs_reviews_swiper">
      <div class="swiper-wrapper">
        ${M.map(
      (s) => `
          <div class="swiper-slide">
            <div class="crs_review_card">
              <div class="crs_review_card__head">
                ${s.photo ? `<img class="crs_review_card__avatar" src="${s.photo}" alt="${s.name}"
                        onerror="this.outerHTML='<div class='crs_review_card__avatar crs_review_card__avatar--placeholder'>${s.name.charAt(0)}</div>'" />` : `<div class="crs_review_card__avatar crs_review_card__avatar--placeholder">${s.name.charAt(0)}</div>`}
                <div class="crs_review_card__info">
                  <strong class="crs_review_card__name">${s.name}</strong>
                  <span class="crs_review_card__role">${s.role}</span>
                </div>
              </div>
              <div class="crs_review_card__quote">${l.quote}</div>
              <p class="crs_review_card__text">${s.text}</p>
            </div>
          </div>`
    ).join("")}
      </div>
      <div class="swiper-pagination crs_reviews_pagination"></div>
    </div>
    <a href="/case-studies" class="crs_reviews_cta">VIEW ALL TESTIMONIALS</a>
  </section>
`
  );
  k({ name: "New Home Page", dev: "YK" }), C("new_home_page");
  class H {
    constructor() {
      this.init();
    }
    async init() {
      await v("body"), o("head").elements[0].insertAdjacentHTML("beforeend", `<style>${x}</style>`), await v('[data-elementor-type="wp-post"]'), o('[data-elementor-type="wp-post"]').elements[0].insertAdjacentHTML("afterbegin", L), o(".crs_content_wrapper").elements[0].insertAdjacentHTML("afterbegin", S), o(".crs_content_wrapper").elements[0].insertAdjacentHTML("beforeend", z), o(".crs_content_wrapper").elements[0].insertAdjacentHTML("beforeend", E), o(".crs_content_wrapper").elements[0].insertAdjacentHTML("beforeend", $), o(".crs_content_wrapper").elements[0].insertAdjacentHTML("beforeend", A), this.initCalculator(), this.initReviews(), this.initTracking();
    }
    initCalculator() {
      const n = document.querySelector(".crs_calc_slider"), e = document.querySelector(".crs_calc_slider_value"), r = document.querySelector(".crs_calc_rate"), c = document.querySelector(".crs_calc_btn"), a = document.getElementById("crs_calc_form"), i = document.getElementById("crs_calc_results"), t = document.querySelector(".crs_calc_time"), _ = document.querySelector(".crs_calc_money"), u = () => {
        const f = parseInt(n.value);
        e.textContent = f.toString();
        const b = (f - 10) / 190 * 100;
        n.style.background = `linear-gradient(to right, #ea5e58 ${b}%, rgba(255,255,255,0.3) ${b}%)`;
      };
      n.addEventListener("input", u), u(), c.addEventListener("click", () => {
        const f = parseInt(n.value), b = parseFloat(r.value) || 0, T = f * 52, m = Math.round(T * 0.5), I = Math.round(m * b);
        t.textContent = `${m.toLocaleString()} hours*`, _.textContent = `$${I.toLocaleString()}`, a.style.display = "none", i.style.display = "flex";
      });
    }
    async initReviews() {
      await y([
        "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
        "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
      ]), new window.Swiper(".crs_reviews_swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: !0,
        pagination: {
          el: ".crs_reviews_pagination",
          clickable: !0,
          renderBullet: (n, e) => `<span class="${e}"></span>`
        }
      });
    }
    initTracking() {
      o(".crs_hero_btn--primary").on("click", () => {
        d("spark_new_hp_hero_demo", "WATCH A QUICK DEMO", "click", "hero");
      }), o(".crs_hero_btn--secondary").on("click", () => {
        d("spark_new_hp_hero_start", "START NOW FOR $1", "click", "hero");
      }), o(".crs_growth_cta").on("click", () => {
        d("spark_new_hp_growth_demo", "SCHEDULE A LIVE DEMO", "click", "growth_engine");
      }), o(".crs_calc_btn").on("click", () => {
        var a, i;
        const r = ((a = document.querySelector(".crs_calc_slider")) == null ? void 0 : a.value) || "", c = ((i = document.querySelector(".crs_calc_rate")) == null ? void 0 : i.value) || "";
        d("spark_new_hp_calc_calculate", `hours: ${r}, rate: ${c}`, "click", "calculator");
      }), o(".crs_calc_demo_btn").on("click", () => {
        d("spark_new_hp_calc_demo", "SCHEDULE MY DEMO", "click", "calculator");
      }), o(".crs_reviews_cta").on("click", () => {
        d("spark_new_hp_reviews_cta", "VIEW ALL TESTIMONIALS", "click", "reviews");
      });
      const n = document.querySelector(".crs_calc_slider");
      n && n.addEventListener("change", () => {
        d("spark_new_hp_calc_slider", `hours: ${n.value}`, "input", "calculator");
      });
      const e = document.querySelector(".crs_calc_rate");
      e && e.addEventListener("change", () => {
        d("spark_new_hp_calc_rate", `rate: ${e.value}`, "input", "calculator");
      }), w(".crs_hero_block", "spark_new_hp_view_hero", "hero", "Hero section viewed"), w(
        ".crs_growth_block",
        "spark_new_hp_view_growth",
        "growth_engine",
        "Growth engine section viewed",
        1e3,
        0.2
      ), w(".crs_revenue_block", "spark_new_hp_view_revenue", "revenue", "Revenue section viewed"), w(".crs_calc_block", "spark_new_hp_view_calculator", "calculator", "Calculator section viewed"), w(".crs_reviews_block", "spark_new_hp_view_reviews", "reviews", "Reviews section viewed");
    }
  }
  new H();
})();
//# sourceMappingURL=index.js.map
