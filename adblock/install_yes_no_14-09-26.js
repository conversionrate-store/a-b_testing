(function() {
  "use strict";
  const x = `header {
  border-bottom: 1px solid #dbdbe0 !important;
}

installation-instructions {
  display: none;
}

.header__wrapper[data-astro-cid-ikm5ehdx] {
  padding: 10px 0 !important;
}

.iaby * {
  box-sizing: border-box;
  font-family: inherit;
}
.iaby {
  font-family: "Manrope", sans-serif;
  color: #2e353f;
  background: #fff;
}

main {
  display: none !important;
}

.iaby-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 73px;
  padding: 0 60px;
  border-bottom: 0.9px solid rgba(0, 3, 36, 0.14);
  background: #fff;
}
@media (max-width: 768px) {
  .iaby-header {
    padding: 0 20px;
  }
}
.iaby-header__logo {
  display: flex;
  align-items: center;
}
.iaby-header__logo svg {
  display: block;
  height: 24px;
  width: auto;
}
.iaby-header__why {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  letter-spacing: -0.3px;
  color: #000;
}
@media (max-width: 768px) {
  .iaby-header__why span {
    display: none;
  }
}
.iaby-header__info {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
.iaby-header__tooltip {
  display: none;
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 280px;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(5, 23, 47, 0.16);
  font-size: 13px;
  line-height: 1.5;
  color: #2e353f;
  text-align: left;
  z-index: 20;
}
.iaby-header__info.is-open .iaby-header__tooltip {
  display: block;
}

.iaby-hero {
  display: flex;
  align-items: flex-start;
  gap: 42px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 60px 0;
}
@media (max-width: 1024px) {
  .iaby-hero {
    flex-direction: column;
    padding: 32px 20px 0;
  }
}
.iaby-hero__left {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.iaby-hero__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.iaby-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: #f3f5f5;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #005dd8;
  white-space: nowrap;
}
.iaby-hero__badge svg {
  flex-shrink: 0;
}
.iaby-hero__title {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.24;
  letter-spacing: -0.3px;
  color: #0b1936;
  margin: 0;
}
.iaby-hero__title span {
  color: #005dd8;
}
@media (max-width: 768px) {
  .iaby-hero__title {
    font-size: 30px;
  }
}
.iaby-hero__desc {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.55;
  color: #2e353f;
  margin: 0;
}
.iaby-hero__benefits {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 30px;
}
@media (max-width: 768px) {
  .iaby-hero__benefits {
    grid-template-columns: 1fr;
  }
}
.iaby-hero__benefit {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #0b1936;
}
.iaby-hero__benefit svg {
  flex-shrink: 0;
}

.iaby-steps {
  flex: 0 0 460px;
  max-width: 460px;
  width: 100%;
  background: #f3f5f5;
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
@media (max-width: 1024px) {
  .iaby-steps {
    flex: none;
    max-width: 100%;
  }
}
.iaby-steps__title {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: #000;
  margin: 0;
}
.iaby-steps__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
}
.iaby-steps__list::before {
  content: "";
  position: absolute;
  left: 11px;
  top: 22px;
  bottom: 22px;
  width: 2px;
  background: #ddeaf5;
}
.iaby-steps__row {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  position: relative;
}
.iaby-steps__dot {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #0ba43f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  z-index: 1;
}
.iaby-steps__body {
  display: flex;
  gap: 15px;
  align-items: center;
}
.iaby-steps__body h3 {
  font-size: 16px;
  font-weight: 600;
  color: #0b1936;
  margin: 0 0 4px;
}
.iaby-steps__body p {
  font-size: 12px;
  font-weight: 500;
  color: #757575;
  margin: 0;
}
.iaby-steps__restart {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  padding: 0;
  font-size: 12px;
  font-weight: 500;
  color: #2e353f;
  text-decoration: underline;
  cursor: pointer;
  align-self: flex-start;
  margin: 0 auto;
}

.iaby-trustpilot {
  max-width: 1280px;
  margin: 90px auto 0;
  padding: 0 60px;
  text-align: center;
}
@media (max-width: 768px) {
  .iaby-trustpilot {
    padding: 0 20px;
    margin-top: 56px;
  }
}
.iaby-trustpilot__title {
  font-size: 46px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: #0b1936;
  margin: 0 0 24px;
}
@media (max-width: 768px) {
  .iaby-trustpilot__title {
    font-size: 30px;
  }
}

.iaby-verified {
  background: #f3f5f5;
  margin-top: 90px;
  padding: 60px;
}
@media (max-width: 768px) {
  .iaby-verified {
    padding: 40px 20px;
    margin-top: 56px;
  }
}
.iaby-verified__title {
  max-width: 1280px;
  margin: 0 auto 42px;
  font-size: 46px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: #0b1936;
}
@media (max-width: 768px) {
  .iaby-verified__title {
    font-size: 30px;
  }
}
.iaby-verified__grid {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
@media (max-width: 1024px) {
  .iaby-verified__grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 768px) {
  .iaby-verified__grid {
    grid-template-columns: 1fr;
  }
}
.iaby-verified__card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 260px;
}
.iaby-verified__card-top svg {
  display: block;
}
.iaby-verified__card-top img {
  height: 50px;
}
.iaby-verified__card-body {
  flex: 1;
}
.iaby-verified__card-body h3 {
  font-size: 22px;
  font-weight: 700;
  color: #0b1936;
  margin: 0 0 10px;
}
.iaby-verified__card-body h3 .accent {
  color: #005dd8;
}
.iaby-verified__card-body p {
  font-size: 14px;
  font-weight: 500;
  color: #2e353f;
  margin: 0;
}
.iaby-verified__card-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #005dd8;
  color: #005dd8;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
}
.iaby-verified__card-link:hover {
  background: #eef4ff;
}
.iaby-verified__warning {
  max-width: 1280px;
  margin: 24px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  background: #e8eaee;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #262a2e;
}
.iaby-verified__warning svg {
  flex-shrink: 0;
}
.iaby-verified__warning a {
  color: #005dd8;
  font-weight: 700;
  text-decoration: underline;
}

.iaby-cert {
  max-width: 1280px;
  margin: 24px auto 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}
.iaby-cert__head {
  background: #e8eaee;
  padding: 18px 32px;
  font-size: 16px;
  color: #262a2e;
  display: flex;
  align-items: center;
}
.iaby-cert__head span {
  font-weight: 700;
}
.iaby-cert__head svg {
  margin-right: 20px;
}
.iaby-cert__body {
  display: flex;
  gap: 24px;
  padding: 24px 32px 32px;
}
@media (max-width: 768px) {
  .iaby-cert__body {
    flex-direction: column;
  }
}
.iaby-cert__hash {
  flex: 1;
  min-width: 0;
}
.iaby-cert__hash label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #757575;
  margin-bottom: 8px;
}
.iaby-cert__hash-value {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: #f8f8f8;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px 21px;
}
.iaby-cert__hash-text {
  font-size: 13px;
  font-weight: 500;
  color: #2e353f;
  word-break: break-all;
}
.iaby-cert__copy-btn {
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
.iaby-cert__copy-btn svg {
  display: block;
}
.iaby-cert__copied {
  position: absolute;
  bottom: calc(100% + 8px);
  right: -6px;
  padding: 4px 10px;
  background: #262a2e;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  border-radius: 6px;
  opacity: 0;
  transform: translateY(4px);
  pointer-events: none;
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.iaby-cert__copied::after {
  content: "";
  position: absolute;
  top: 100%;
  right: 12px;
  border: 5px solid transparent;
  border-top-color: #262a2e;
}
.iaby-cert__copy-btn.is-copied .iaby-cert__copied {
  opacity: 1;
  transform: translateY(0);
}
.iaby-cert__info {
  flex: 0 0 420px;
}
@media (max-width: 768px) {
  .iaby-cert__info {
    flex: none;
  }
}
.iaby-cert__info label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #757575;
  margin-bottom: 8px;
}
.iaby-cert__info p {
  font-size: 14px;
  font-weight: 500;
  color: #2e353f;
  margin: 0;
}

.iaby-faq {
  max-width: 760px;
  margin: 90px auto 0;
  padding: 0 20px;
}
@media (max-width: 768px) {
  .iaby-faq {
    margin-top: 56px;
  }
}
.iaby-faq__title {
  font-size: 46px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: #0b1936;
  margin: 0 0 24px;
}
@media (max-width: 768px) {
  .iaby-faq__title {
    font-size: 30px;
  }
}
.iaby-faq__item {
  border-bottom: 1px solid rgba(0, 3, 36, 0.14);
}
.iaby-faq__q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: none;
  border: none;
  padding: 24px 0;
  text-align: left;
  font-size: 20px;
  font-weight: 700;
  color: #262a2e;
  cursor: pointer;
}
.iaby-faq__q svg {
  flex-shrink: 0;
  transition: transform 0.2s ease;
}
.iaby-faq__a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease;
}
.iaby-faq__a p {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.7;
  color: #2e353f;
  margin: 0 0 24px;
}
.iaby-faq__item.is-open .iaby-faq__a {
  max-height: 200px;
}
.iaby-faq__item.is-open .iaby-faq__q svg {
  transform: rotate(45deg);
}

.iaby-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 1280px;
  margin: 90px auto 0;
  padding: 16px 60px 32px;
  border-top: 1px solid rgba(0, 3, 36, 0.14);
  font-size: 14px;
  color: #2e353f;
}
@media (max-width: 768px) {
  .iaby-footer {
    padding: 16px 20px 32px;
  }
}
.iaby-footer nav {
  display: flex;
  gap: 24px;
}
.iaby-footer a {
  color: #2e353f;
  text-decoration: none;
}
.iaby-footer a:hover {
  text-decoration: underline;
}

/*# sourceMappingURL=style.css.map */
`, f = (t, n, e, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: n,
      event_type: e,
      event_loc: i
    }), p(`Event: ${t} | ${n} | ${e} | ${i}`, "success");
  }, y = (t) => new Promise((n) => {
    const e = document.querySelector(t);
    e && n(e);
    const i = new MutationObserver(() => {
      const a = document.querySelector(t);
      a && (n(a), i.disconnect());
    });
    i.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), C = ({ name: t, dev: n }) => {
    const e = t.toLowerCase().replace(/\s/g, "_");
    f(`${e}_started`, `Experiment ${t} started`, "other", e), console.log(
      `%c EXP: ${t} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class h {
    constructor(n) {
      this.elements = n instanceof h ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, e, i) {
      return typeof e == "function" && (i = e, e = ""), this.elements.forEach((a) => {
        a.addEventListener(n, function(r) {
          var o;
          if (e !== "") {
            let s = (o = r.target) == null ? void 0 : o.closest(e);
            s && (i == null || i.call(s, r));
          } else
            i == null || i.call(a, r);
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
        n(new h(e), this.elements.indexOf(e));
      return this;
    }
    style(n, e) {
      const i = n.split("-").map((a, r) => r === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1)).join("");
      return this.elements.forEach(function(a) {
        a.style[i] = e;
      }), this;
    }
    find(n) {
      const e = this.elements.map((i) => Array.from(i.querySelectorAll(n)));
      return new h(e.flat());
    }
    attr(n, e) {
      return e ? (this.elements.forEach(function(i) {
        i.setAttribute(n, e);
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
  const c = (t) => new h(t), w = async (t) => {
    const n = (e) => new Promise((i, a) => {
      const r = e.split(".").pop();
      if (r === "js") {
        if (Array.from(document.scripts).map((d) => d.src.toLowerCase()).includes(e.toLowerCase()))
          return p(`Script ${e} allready downloaded!`, "success"), i("");
        const s = document.createElement("script");
        s.src = e, s.onload = i, s.onerror = a, document.head.appendChild(s);
      } else if (r === "css") {
        if (Array.from(document.styleSheets).map((d) => {
          var _;
          return (_ = d.href) == null ? void 0 : _.toLowerCase();
        }).includes(e.toLowerCase()))
          return p(`Style ${e} allready downloaded!`, "success"), i("");
        const s = document.createElement("link");
        s.rel = "stylesheet", s.href = e, s.onload = i, s.onerror = a, document.head.appendChild(s);
      }
    });
    for (const e of t)
      p(e), await n(e), p(`Loaded librari ${e}`);
    p("All libraries loaded!", "success");
  }, b = (t, n, e, i, a = 1e3, r = 0.5) => {
    let o, s;
    if (o = new IntersectionObserver(
      function(d) {
        d[0].isIntersecting === !0 ? s = setTimeout(() => {
          f(
            n,
            d[0].target.dataset.visible || i || "",
            "view",
            e
          ), o.disconnect();
        }, a) : (p("Element is not fully visible", "warn"), clearTimeout(s));
      },
      { threshold: [r] }
    ), typeof t == "string") {
      const d = document.querySelector(t);
      d && o.observe(d);
    } else
      o.observe(t);
  }, p = (t, n = "info") => {
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
    console.log(`%c>>> ${t}`, `${e} font-size: 16px; font-weight: 600`);
  }, g = {
    ev: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M11 21.175L10.6333 21.0833C1.00834 17.1417 1.83334 4.675 1.83334 4.49166L1.92501 3.66666H2.75001C6.96667 3.66666 10.45 1.1 10.45 1.1L11 0.73333L11.55 1.1C11.55 1.1 15.0333 3.66666 19.25 3.66666H20.075L20.1667 4.49166C20.1667 4.58333 20.9917 17.1417 11.3667 20.9917L11 21.175ZM3.66668 5.5C3.66668 8.06666 4.21667 16.225 11 19.25C17.7833 16.3167 18.3333 8.15833 18.3333 5.5C14.9417 5.225 12.1 3.66666 11 2.93333C9.90001 3.66666 7.05834 5.225 3.66668 5.5Z" fill="#005DD8"/>
<path d="M10.9998 17.4163C4.94983 14.8497 5.49983 6.50801 5.49983 6.50801C8.52483 6.50801 10.9998 4.58301 10.9998 4.58301C10.9998 4.58301 13.4748 6.50801 16.4998 6.50801C16.4998 6.50801 17.0498 14.8497 10.9998 17.4163Z" fill="#005DD8"/>
</svg>`,
    award: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<g clip-path="url(#clip0_19_6666)">
<path d="M14.5193 15.4181L15.5253 13.7857L17.3409 13.1665L17.542 11.2597L18.9079 9.91495L18.2585 8.11001L18.9079 6.30502L17.542 4.96031L17.3409 3.05353L15.5254 2.43435L14.5194 0.80184L12.6165 1.03159L11 0L9.38361 1.03168L7.48078 0.801926L6.47475 2.43439L4.65923 3.05357L4.4581 4.96036L3.09216 6.30506L3.74159 8.11005L3.09216 9.91504L4.45805 11.2597L4.65919 13.1665L6.47471 13.7857L7.48073 15.4182L9.38361 15.1885L11 16.2201L12.6165 15.1885L14.5193 15.4181ZM5.43864 8.11005C5.43864 5.0435 7.9335 2.54865 11 2.54865C14.0666 2.54865 16.5614 5.0435 16.5614 8.11005C16.5614 11.1766 14.0666 13.6715 11 13.6715C7.9335 13.6715 5.43864 11.1766 5.43864 8.11005Z" fill="#005DD8"/>
<path d="M11 3.83887C8.64471 3.83887 6.72852 5.75506 6.72852 8.11039C6.72852 10.4657 8.64471 12.3819 11 12.3819C13.3554 12.3819 15.2716 10.4657 15.2716 8.11039C15.2716 5.75506 13.3554 3.83887 11 3.83887Z" fill="#005DD8"/>
<path d="M9.07927 16.5249L6.81568 16.7981L5.61973 14.8574L5.21316 14.7188L3.45947 20.2001L6.6166 20.0265L9.08666 22.0004L10.5402 17.4573L9.07927 16.5249Z" fill="#005DD8"/>
<path d="M16.3804 14.8574L15.1844 16.7981L12.9209 16.5249L11.46 17.4573L12.9135 22.0004L15.3836 20.0265L18.5407 20.2001L16.787 14.7188L16.3804 14.8574Z" fill="#005DD8"/>
</g>
<defs>
<clipPath id="clip0_19_6666">
<rect width="22" height="22" fill="white"/>
</clipPath>
</defs>
</svg>`
  }, u = [
    {
      title: "EV code signed",
      svg: g.ev
    },
    { title: "AppEsteem certified", svg: g.award },
    { title: "Cybernews verified", svg: g.award },
    { title: "Free, no trial", svg: g.award }
  ], m = [
    { icon: "audio", title: "No audio ads in Spotify" },
    { icon: "youtube", title: "YouTube: all ads gone, sponsor segments too" },
    { icon: "browser", title: "Zero ads in every browser" },
    { icon: "cookie", title: "Cookie pop-ups dismissed for you" }
  ], v = [
    { title: "Open the file from Downloads, top-right", desc: "Adblockforyoutube_AdBlock360_Setup.exe", img: "open.svg" },
    { title: 'Click "Yes" on the Windows prompt', desc: "Verified publisher: AdBlock Ltd", img: "approve.svg" },
    { title: "Installation completes automatically", desc: "Ads are gone right away", img: "install.svg" }
  ], L = [
    {
      icon: "virus",
      titleAccent: "72 antivirus",
      title: "engines",
      desc: "scanned this file — 0 warnings",
      link: "See the scan on VirusTotal",
      url: "https://www.virustotal.com/gui/file/9aab6d00818bc8ab93945e4d22652e296fb72a283b51b4cf29ce15e02ebf207a"
    },
    {
      icon: "windows",
      titleAccent: "Windows verified",
      title: "publisher",
      desc: "AdBlock Ltd — you'll see it on the install prompt"
    },
    {
      icon: "users",
      titleAccent: "11M+",
      title: "users trust us",
      desc: "same team as the Adblock for Youtube extension you use"
    },
    {
      icon: "cyber",
      titleAccent: "checked",
      title: "Cybernews",
      desc: "independent security test: no suspicious connections",
      link: "Read the review",
      url: "https://cybernews.com/adblock360-review/"
    }
  ], k = [
    {
      q: 'Why does Windows ask to "make changes to my device"?',
      a: "Standard text for any program that installs outside the browser. Check the prompt shows <strong>Verified publisher: AdBlock Ltd</strong> and click Yes."
    },
    {
      q: "Why an .exe instead of an extension?",
      a: "An extension only sees Chrome. To block ads in Spotify, Edge or Firefox, a small app has to run on Windows."
    },
    {
      q: "Is it really free?",
      a: "Yes. No trial, no card, no paid tier later."
    },
    {
      q: "What about my Adblock for Youtube extension?",
      a: "Nothing changes. Both run side by side."
    },
    {
      q: "I don't have admin rights.",
      a: "Windows will block the install on work or school PCs. Your extension still works."
    }
  ], l = {
    download: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M10 1V14.3333M16.75 8.33333L10 14.3333L3.25 8.33333M1 19H19" stroke="#262A2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    music: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
<path d="M18.7139 0.0151288C8.78039 -0.37978 0.407439 7.35215 0.0144708 17.2854C-0.380382 27.2186 7.35365 35.5899 17.2862 35.9849C27.2202 36.3802 35.5908 28.6483 35.9857 18.7146C36.3786 8.78135 28.646 0.409098 18.7139 0.0151288ZM26.3118 26.3826C26.088 26.7776 25.6521 26.9749 25.2276 26.9157C25.0975 26.8973 24.9675 26.8546 24.8459 26.7855C22.4669 25.4313 19.874 24.5496 17.1397 24.1643C14.4054 23.7791 11.6692 23.9124 9.00892 24.5591C8.43124 24.699 7.85074 24.3453 7.7108 23.7676C7.57086 23.1903 7.92472 22.6093 8.50192 22.4693C11.427 21.7588 14.4346 21.6123 17.4389 22.0352C20.4432 22.458 23.2924 23.4271 25.9103 24.9162C26.4253 25.2107 26.6063 25.8655 26.3132 26.3821L26.3118 26.3821L26.3118 26.3826ZM28.6776 21.658C28.3105 22.3357 27.4619 22.5889 26.7839 22.222C24.0001 20.7165 20.986 19.7277 17.8257 19.2832C14.665 18.8388 11.4963 18.9589 8.40533 19.6384C8.23759 19.6746 8.07126 19.6812 7.91012 19.6581C7.34893 19.5792 6.8688 19.1612 6.74016 18.574C6.57383 17.8206 7.05114 17.0752 7.80457 16.909C11.2216 16.1571 14.7244 16.0243 18.2154 16.5143C21.705 17.0048 25.0363 18.0975 28.1131 19.7622C28.7926 20.1291 29.0442 20.9764 28.6776 21.6556V21.658ZM31.2997 16.3326C30.9544 16.9972 30.2353 17.341 29.5347 17.2423C29.3453 17.216 29.1596 17.1568 28.9801 17.0647C25.7388 15.3784 22.2478 14.2646 18.6037 13.7525C14.9595 13.2409 11.2956 13.3492 7.71552 14.0762C6.78445 14.2655 5.87789 13.6633 5.68848 12.7337C5.49906 11.8028 6.10124 10.8963 7.03088 10.707C10.9959 9.90255 15.0495 9.78292 19.0824 10.3486C23.1148 10.9147 26.978 12.1488 30.5675 14.016C31.41 14.4538 31.737 15.4918 31.2997 16.334V16.3326Z" fill="#005DD8"/>
</svg>`,
    youtube: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="34" height="34" rx="3" stroke="#005DD8" stroke-width="2"/>
<g clip-path="url(#clip0_21_8631)">
<path d="M17.9895 25C17.9895 25 24.2548 25 25.8089 24.58C26.6839 24.342 27.342 23.656 27.573 22.809C28 21.255 28 17.986 28 17.986C28 17.986 28 14.738 27.573 13.198C27.342 12.33 26.6839 11.658 25.8089 11.427C24.2548 11 17.9895 11 17.9895 11C17.9895 11 11.7382 11 10.1911 11.427C9.33007 11.658 8.65803 12.33 8.41302 13.198C8 14.738 8 17.986 8 17.986C8 17.986 8 21.255 8.41302 22.809C8.65803 23.656 9.33007 24.342 10.1911 24.58C11.7382 25 17.9895 25 17.9895 25Z" fill="#005DD8"/>
<path d="M21.1033 18.0001L15.9309 15.0251V20.9751L21.1033 18.0001Z" fill="#F8F8F8"/>
</g>
<defs>
<clipPath id="clip0_21_8631">
<rect width="20" height="14" fill="white" transform="translate(8 11)"/>
</clipPath>
</defs>
</svg>`,
    browser: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
<path d="M6.75 2.25998C4.27646 2.25998 2.25 4.28644 2.25 6.75998V29.2029C2.25 31.6764 4.27646 33.7029 6.75 33.7029H15.75C16.0484 33.7029 16.3345 33.5843 16.5455 33.3733C16.7565 33.1624 16.875 32.8762 16.875 32.5779C16.875 32.2795 16.7565 31.9933 16.5455 31.7824C16.3345 31.5714 16.0484 31.4529 15.75 31.4529H6.75C5.48404 31.4529 4.5 30.4688 4.5 29.2029V13.4529H31.5V16.8564C31.5 17.1548 31.6185 17.4409 31.8295 17.6519C32.0405 17.8629 32.3266 17.9814 32.625 17.9814C32.9234 17.9814 33.2095 17.8629 33.4205 17.6519C33.6315 17.4409 33.75 17.1548 33.75 16.8564V6.75998C33.75 4.28644 31.7235 2.25998 29.25 2.25998H6.75ZM6.75 4.50998H29.25C30.516 4.50998 31.5 5.49402 31.5 6.75998V11.2029H4.5V6.75998C4.5 5.49402 5.48404 4.50998 6.75 4.50998Z" fill="#005DD8"/>
<path d="M9 7.82776C9 8.12613 8.88147 8.41228 8.67049 8.62325C8.45952 8.83423 8.17337 8.95276 7.875 8.95276C7.57663 8.95276 7.29048 8.83423 7.07951 8.62325C6.86853 8.41228 6.75 8.12613 6.75 7.82776C6.75 7.52939 6.86853 7.24324 7.07951 7.03226C7.29048 6.82129 7.57663 6.70276 7.875 6.70276C8.17337 6.70276 8.45952 6.82129 8.67049 7.03226C8.88147 7.24324 9 7.52939 9 7.82776Z" fill="#005DD8"/>
<path d="M13.5 7.82776C13.5 8.12613 13.3815 8.41228 13.1705 8.62325C12.9595 8.83423 12.6734 8.95276 12.375 8.95276C12.0766 8.95276 11.7905 8.83423 11.5795 8.62325C11.3685 8.41228 11.25 8.12613 11.25 7.82776C11.25 7.52939 11.3685 7.24324 11.5795 7.03226C11.7905 6.82129 12.0766 6.70276 12.375 6.70276C12.6734 6.70276 12.9595 6.82129 13.1705 7.03226C13.3815 7.24324 13.5 7.52939 13.5 7.82776Z" fill="#005DD8"/>
<path d="M18 7.82776C18 8.12613 17.8815 8.41228 17.6705 8.62325C17.4595 8.83423 17.1734 8.95276 16.875 8.95276C16.5766 8.95276 16.2905 8.83423 16.0795 8.62325C15.8685 8.41228 15.75 8.12613 15.75 7.82776C15.75 7.52939 15.8685 7.24324 16.0795 7.03226C16.2905 6.82129 16.5766 6.70276 16.875 6.70276C17.1734 6.70276 17.4595 6.82129 17.6705 7.03226C17.8815 7.24324 18 7.52939 18 7.82776Z" fill="#005DD8"/>
<path d="M21.6101 17.2294C20.5313 17.2307 19.7445 17.5776 19.3084 18.4063L15.9456 24.0497C15.4335 24.9406 15.4353 26.0431 15.9501 26.9325L19.1054 32.3861C19.5897 33.223 20.487 33.7409 21.4542 33.7396L27.9317 33.7309C28.8468 33.7297 29.6972 33.2365 30.1531 32.4433L33.3963 26.8007C33.8696 25.9773 33.8675 24.9596 33.3918 24.1376L30.1069 18.4599C29.6635 17.6938 28.8411 17.2195 27.9557 17.2206C25.8405 17.2235 23.7254 17.2265 21.6101 17.2294ZM27.9581 19.4706C28.0423 19.4705 28.1174 19.5131 28.1602 19.5871L31.4451 25.2648C31.5203 25.3947 31.5197 25.5502 31.4451 25.6801L28.202 31.3227C28.1446 31.4223 28.0435 31.4807 27.9295 31.4809L21.4519 31.4896C21.2858 31.4899 21.1359 31.4038 21.052 31.2589L17.8967 25.8053C17.7826 25.608 17.7811 25.3698 17.8945 25.1725L21.1746 19.6138C21.2313 19.4969 21.3388 19.4607 21.4562 19.4754L27.9581 19.4706Z" fill="#005DD8"/>
<path d="M21.2432 22.0859C20.804 22.5252 20.804 23.2374 21.2432 23.6767L23.0471 25.4807L21.2432 27.2846C20.804 27.724 20.804 28.4361 21.2432 28.8755C21.6825 29.3147 22.3947 29.3147 22.834 28.8755L24.6401 27.0715L26.4441 28.8755C26.8834 29.3147 27.5956 29.3147 28.0349 28.8755C28.4741 28.4361 28.4741 27.724 28.0349 27.2846L26.231 25.4807L28.0349 23.6767C28.4741 23.2374 28.4741 22.5252 28.0349 22.0859C27.5159 21.6164 26.8688 21.683 26.4441 22.0859L24.6401 23.8899L22.834 22.0859C22.3221 21.5976 21.7246 21.6499 21.2432 22.0859Z" fill="#005DD8"/>
</svg>`,
    cookie: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
<g clip-path="url(#clip0_21_8672)">
<path d="M18.2169 35.9966C8.41746 36.1972 -0.193377 27.5869 0.00797874 17.7872C-0.129118 9.61748 5.86789 2.01187 13.7819 0.123598C15.8878 -0.45059 18.1909 1.05409 18.5145 3.21213C18.7606 4.64806 19.4375 5.95385 20.4721 6.98832C21.4597 7.97605 22.7026 8.64114 24.0662 8.91182C25.6001 9.21624 26.7879 10.4041 27.0924 11.938C27.3632 13.3016 28.0283 14.5445 29.0159 15.5322C29.016 15.5322 29.016 15.5322 29.016 15.5322C30.0504 16.5666 31.3561 17.2435 32.7921 17.4898C33.848 17.6708 34.7884 18.2879 35.3719 19.1829C35.955 20.077 36.1404 21.1848 35.8806 22.2223C33.992 30.1369 26.387 36.1332 18.2169 35.9966ZM14.7226 2.81954C14.6371 2.81954 14.5507 2.83016 14.4648 2.85167C2.98051 5.57433 -1.11248 20.4496 7.32568 28.6786C15.5569 37.1191 30.4315 33.0204 33.1527 21.5395C33.224 21.2546 33.1756 20.9632 33.0164 20.7191C32.8566 20.474 32.6081 20.3116 32.317 20.2616C30.3045 19.9166 28.4754 18.9688 27.0275 17.5208C25.6449 16.1382 24.7135 14.3971 24.3341 12.4856C24.252 12.0723 23.932 11.7522 23.5187 11.6703C21.6072 11.2908 19.8661 10.3595 18.4835 8.97678C17.0354 7.52876 16.0877 5.69962 15.7427 3.68726C15.6928 3.39605 15.5303 3.14766 15.2852 2.98786C15.1147 2.8767 14.9211 2.81954 14.7226 2.81954ZM16.389 17.7874C16.389 18.7581 17.1759 19.545 18.1467 19.545C20.4756 19.4588 20.475 16.1156 18.1467 16.0297C17.1759 16.0297 16.389 16.8167 16.389 17.7874ZM10.413 11.7411C10.413 12.7118 11.2 13.4987 12.1707 13.4987C14.4996 13.4125 14.499 10.0693 12.1707 9.98342C11.2 9.98342 10.413 10.7704 10.413 11.7411ZM10.413 23.7634C10.413 24.7341 11.2 25.521 12.1707 25.521C14.4996 25.4348 14.499 22.0916 12.1707 22.0057C11.2 22.0057 10.413 22.7926 10.413 23.7634ZM23.0681 23.7634C23.0681 24.7341 23.855 25.521 24.8257 25.521C27.1547 25.4348 27.154 22.0916 24.8257 22.0057C23.855 22.0057 23.0681 22.7926 23.0681 23.7634ZM26.9349 0C27.9056 0 28.6925 0.786933 28.6925 1.75764C28.6063 4.08659 25.2631 4.08596 25.1772 1.75764C25.1772 0.786933 25.9642 0 26.9349 0ZM32.489 3.86682C32.489 4.83753 33.276 5.62446 34.2467 5.62446C36.5756 5.53827 36.575 2.19502 34.2467 2.10917C33.276 2.10917 32.489 2.89611 32.489 3.86682ZM30.8017 11.6005C30.8017 12.5712 31.5886 13.3581 32.5593 13.3581C34.8883 13.2719 34.8877 9.92865 32.5593 9.84281C31.5886 9.84281 30.8017 10.6297 30.8017 11.6005Z" fill="#005DD8"/>
</g>
<defs>
<clipPath id="clip0_21_8672">
<rect width="36" height="36" fill="white"/>
</clipPath>
</defs>
</svg>`,
    virus: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<g clip-path="url(#clip0_19_6499)">
<path d="M48.5352 0H1.46484C0.65625 0 0 0.65625 0 1.46484V11.7188H50V1.46484C50 0.65625 49.3447 0 48.5352 0ZM16.9277 7.32422H7.32422C6.51562 7.32422 5.85938 6.66797 5.85938 5.85938C5.85938 5.05078 6.51562 4.39453 7.32422 4.39453H16.9277C17.7373 4.39453 18.3926 5.05078 18.3926 5.85938C18.3926 6.66797 17.7373 7.32422 16.9277 7.32422ZM30.957 7.32422C30.1484 7.32422 29.4922 6.66797 29.4922 5.85938C29.4922 5.05078 30.1484 4.39453 30.957 4.39453C31.7656 4.39453 32.4219 5.05078 32.4219 5.85938C32.4219 6.66797 31.7656 7.32422 30.957 7.32422ZM36.8164 7.32422C36.0078 7.32422 35.3516 6.66797 35.3516 5.85938C35.3516 5.05078 36.0078 4.39453 36.8164 4.39453C37.625 4.39453 38.2812 5.05078 38.2812 5.85938C38.2812 6.66797 37.625 7.32422 36.8164 7.32422ZM42.6758 7.32422C41.8672 7.32422 41.2109 6.66797 41.2109 5.85938C41.2109 5.05078 41.8672 4.39453 42.6758 4.39453C43.4844 4.39453 44.1406 5.05078 44.1406 5.85938C44.1406 6.66797 43.4844 7.32422 42.6758 7.32422Z" fill="#005DD8"/>
<path d="M0 39.7461C0 40.5547 0.65625 41.2109 1.46484 41.2109H12.4854C11.6562 39.4795 11 37.6289 10.5225 35.6748C9.23047 30.3779 9.67969 26.1172 9.73535 25.6484C9.73535 25.6465 9.73535 25.6445 9.73633 25.6426C9.97295 23.6672 11.55 22.0957 13.5527 21.8867C14.3408 21.8018 16.7002 21.4238 18.1934 20.7051C20.2256 19.7266 21.7168 18.0898 21.7764 18.0244C23.4856 16.0798 26.5123 16.0817 28.2197 18.0205C28.2959 18.1035 29.8008 19.7393 31.8066 20.7051C33.2998 21.4238 35.6572 21.8008 36.4453 21.8867H36.4512C38.4401 22.0967 40.0267 23.6559 40.2646 25.6484C40.3203 26.1172 40.7695 30.3779 39.4775 35.6748C39 37.6289 38.3438 39.4795 37.5146 41.2109H48.5352C49.3447 41.2109 50 40.5547 50 39.7461V14.6484H0V39.7461Z" fill="#005DD8"/>
<path d="M36.1446 24.8008C35.2897 24.7226 32.453 24.2675 30.5362 23.3448C28.4989 22.3643 26.6378 20.6815 26.0254 19.961C25.4822 19.34 24.5172 19.3407 23.9746 19.961C23.1239 20.9542 21.268 22.4762 19.4639 23.3448C17.6173 24.2337 14.8506 24.707 13.8565 24.8008C13.2237 24.8662 12.7207 25.3614 12.6446 25.9932C12.2333 29.4678 12.8485 35.839 15.699 41.0582C17.7063 44.734 20.6213 47.7099 24.3262 49.8213C24.7421 50.0595 25.2578 50.0596 25.6738 49.8213C29.379 47.7097 32.2943 44.7335 34.3015 41.0573C36.8425 36.4045 37.8416 30.1009 37.3555 25.9932C37.2804 25.3623 36.7763 24.8672 36.1446 24.8008ZM25 36.2637L30.294 30.1241C30.8296 29.5037 31.7608 29.455 32.3604 29.9717C32.9728 30.5001 33.0409 31.425 32.5127 32.0371L26.1885 39.3711C25.6346 40.0146 24.6426 40.0511 24.044 39.4502L19.9024 35.3086C19.3301 34.7364 19.3301 33.8096 19.9024 33.2373C20.4716 32.6681 21.3997 32.6633 21.9737 33.2373L25 36.2637Z" fill="#005DD8"/>
</g>
<defs>
<clipPath id="clip0_19_6499">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>`,
    windowsBadge: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<g clip-path="url(#clip0_19_6514)">
<path d="M0 0L23.7026 0V23.6923H0L0 0ZM26.2974 0L50 0V23.6923H26.2974V0ZM0 26.2974H23.7026V50H0L0 26.2974ZM26.2974 26.2974H50V50H26.2974" fill="#0078D4"/>
</g>
<defs>
<clipPath id="clip0_19_6514">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>`,
    users: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.2142 46.5271V35.9694C16.3381 30.8428 12.5593 24.6868 11.9918 16.7658L3.85657 11.9019V14.8433C3.92749 27.1555 9.7022 36.6103 18.9317 43.9324L22.2041 46.5271H22.2142Z" fill="#005DD8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7059 13.951L23.8168 9.16056L33.9378 13.951L42.4886 8.83494L23.8168 0L5.15527 8.83494L13.7059 13.951Z" fill="#005DD8"/>
<path d="M32.4047 16.8896C32.1455 19.8832 31.3551 22.5625 30.1308 24.9992H24.6087V32.2665C24.3486 32.5148 24.0842 32.7617 23.8137 33.005C19.0117 28.6768 15.8103 23.5498 15.2228 16.8896L23.8137 12.8247L32.4047 16.8896Z" fill="#1B86FA"/>
<path d="M25.9374 45.138H27.1767L25.425 46.5275V35.9705C25.5994 35.8187 25.767 35.6601 25.9374 35.5066V45.138Z" fill="#005DD8"/>
<path d="M43.7626 14.8438C43.7457 18.9238 43.0945 22.6905 41.8998 26.1719V24.3041H33.9849C34.8843 21.9793 35.4531 19.4765 35.647 16.7664L43.7626 11.9019V14.8438Z" fill="#005DD8"/>
<path d="M28.5458 23.0293C25.6923 23.2405 25.2875 23.3884 24.4578 24.6775C23.7089 25.8185 23.5672 27.1076 23.4458 33.6795C23.2839 43.2731 23.6076 45.7666 25.1862 47.1614C25.8137 47.7108 25.7327 47.6896 30.7721 48.0911C33.3625 48.3024 37.2887 48.3024 39.8792 48.0911C45.1816 47.6685 44.8174 47.7319 45.6674 46.95C46.7602 45.9358 47.0031 44.8791 47.2864 40.1668C47.6305 34.2289 47.2257 26.7061 46.4769 25.1635C45.8293 23.8323 45.1816 23.3673 43.765 23.1771C41.6399 22.9235 31.3184 22.8179 28.5458 23.0293ZM42.065 25.882C43.0162 26.051 43.9268 26.9596 44.2507 28.0374C44.5543 29.0939 44.7161 38.265 44.4733 40.6529C44.2709 42.7871 43.846 43.9494 43.0769 44.4565C42.2673 45.027 36.4387 45.3229 31.8852 45.0481C27.797 44.8158 27.4529 44.689 26.7648 43.252C26.178 42.0264 25.8744 36.173 26.178 31.7776C26.522 26.537 26.8661 26.0299 30.1851 25.7551C32.3304 25.565 40.7899 25.6706 42.065 25.882Z" fill="url(#paint0_linear_19_6526)"/>
<path d="M29.6641 35.2649V41.9213L32.6594 38.7938C34.2986 37.0821 35.7154 35.6875 35.7963 35.6875C35.8772 35.6875 35.9379 37.0821 35.9379 38.7938V41.9213L39.1153 38.5825L42.3129 35.2649L39.1153 31.9473L35.9379 28.6084V31.7359C35.9379 33.4475 35.8772 34.8423 35.7963 34.8423C35.7154 34.8423 34.2986 33.4475 32.6594 31.7359L29.6641 28.6084V35.2649Z" fill="url(#paint1_linear_19_6526)"/>
<defs>
<linearGradient id="paint0_linear_19_6526" x1="35.4094" y1="22.9163" x2="35.4094" y2="48.2496" gradientUnits="userSpaceOnUse">
<stop stop-color="#BD4237"/>
<stop offset="1" stop-color="#872E26"/>
</linearGradient>
<linearGradient id="paint1_linear_19_6526" x1="35.9886" y1="28.6084" x2="35.9886" y2="41.9213" gradientUnits="userSpaceOnUse">
<stop stop-color="#BD4237"/>
<stop offset="1" stop-color="#872E26"/>
</linearGradient>
</defs>
</svg>`,
    warning: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 2.25C6.62 2.25 2.25 6.62 2.25 12C2.25 17.38 6.62 21.75 12 21.75C17.38 21.75 21.75 17.38 21.75 12C21.75 6.62 17.38 2.25 12 2.25ZM12 20.25C7.45 20.25 3.75 16.55 3.75 12C3.75 7.45 7.45 3.75 12 3.75C16.55 3.75 20.25 7.45 20.25 12C20.25 16.55 16.55 20.25 12 20.25Z" fill="#D61717"/>
<path d="M12 13.95C12.41 13.95 12.75 13.61 12.75 13.2V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V13.2C11.25 13.61 11.59 13.95 12 13.95Z" fill="#D61717"/>
<path d="M12 17C12.4418 17 12.8 16.6419 12.8 16.2C12.8 15.7582 12.4418 15.4 12 15.4C11.5581 15.4 11.2 15.7582 11.2 16.2C11.2 16.6419 11.5581 17 12 17Z" fill="#D61717"/>
</svg>`,
    code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g clip-path="url(#clip0_19_6565)">
<path d="M5.6 17.6C5.2788 17.6 4.9772 17.4748 4.7512 17.248L0.3516 12.8484C0.1252 12.6228 0 12.3212 0 12C0 11.6788 0.1252 11.3772 0.352 11.1512L4.7516 6.75162C4.9772 6.52522 5.2788 6.40002 5.6 6.40002C6.2616 6.40002 6.8 6.93842 6.8 7.60002C6.8 7.92122 6.6748 8.22282 6.448 8.44882L2.8968 12L6.4484 15.5516C6.6752 15.7772 6.8 16.0788 6.8 16.4C6.8 17.0616 6.2616 17.6 5.6 17.6Z" fill="#262A2E"/>
<path d="M18.4 18C17.7384 18 17.2 17.4616 17.2 16.8C17.2 16.4788 17.3252 16.1772 17.552 15.9512L21.1032 12.4L17.5516 8.84845C17.3252 8.62205 17.2 8.32045 17.2 8.00005C17.2 7.33845 17.7384 6.80005 18.4 6.80005C18.7212 6.80005 19.0228 6.92525 19.2488 7.15205L23.6484 11.5516C23.8752 11.778 24 12.0796 24 12.4C24 12.7212 23.8748 13.0229 23.648 13.2488L19.2484 17.6484C19.0228 17.8752 18.7212 18 18.4 18Z" fill="#262A2E"/>
<path d="M8.40001 21.2001C7.73841 21.2001 7.20001 20.6616 7.20001 20C7.20001 19.8409 7.23121 19.6853 7.29201 19.5381L14.4924 3.53725C14.6804 3.08925 15.1152 2.80005 15.6 2.80005C16.2616 2.80005 16.8 3.33845 16.8 4.00005C16.8 4.15925 16.7688 4.31485 16.708 4.46205L9.50761 20.4629C9.31961 20.9109 8.88481 21.2001 8.40001 21.2001Z" fill="#262A2E"/>
</g>
<defs>
<clipPath id="clip0_19_6565">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>`,
    copy: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_19_6576)">
<mask id="mask0_19_6576" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
<path d="M0 0H20V20H0V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_19_6576)">
<path d="M12.5 0.833374H3.33329C2.41663 0.833374 1.66663 1.58337 1.66663 2.50004V13.3334C1.66663 13.7917 2.04163 14.1667 2.49996 14.1667C2.95829 14.1667 3.33329 13.7917 3.33329 13.3334V3.33337C3.33329 2.87504 3.70829 2.50004 4.16663 2.50004H12.5C12.9583 2.50004 13.3333 2.12504 13.3333 1.66671C13.3333 1.20837 12.9583 0.833374 12.5 0.833374ZM15.8333 4.16671H6.66663C5.74996 4.16671 4.99996 4.91671 4.99996 5.83337V17.5C4.99996 18.4167 5.74996 19.1667 6.66663 19.1667H15.8333C16.75 19.1667 17.5 18.4167 17.5 17.5V5.83337C17.5 4.91671 16.75 4.16671 15.8333 4.16671ZM15 17.5H7.49996C7.04163 17.5 6.66663 17.125 6.66663 16.6667V6.66671C6.66663 6.20837 7.04163 5.83337 7.49996 5.83337H15C15.4583 5.83337 15.8333 6.20837 15.8333 6.66671V16.6667C15.8333 17.125 15.4583 17.5 15 17.5Z" fill="black"/>
</g>
</g>
<defs>
<clipPath id="clip0_19_6576">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>`,
    chevron: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M12 6v12M6 12h12" stroke="#262A2E" stroke-width="2" stroke-linecap="round"/>
		</svg>`
  }, M = '<img src="https://conversionrate-store.github.io/a-b_images/adblock/cybernews_logo.webp" alt="Cyber Logo"/>', Z = (
    /* html */
    `
  <!-- TrustBox widget - Carousel -->
  <div class="trustpilot-widget-2" data-locale="en" data-template-id="53aa8912dec7e10d38f59f36"
    data-businessunit-id="695876155fb698cf3a93bf94" data-style-height="240px" data-style-width="100%"
    data-token="0a8f5b61-a60c-429d-9f03-1e64fb80da6a" data-stars="1,2,3,4,5">
    <a href="https://www.trustpilot.com/review/adblock360.com" target="_blank" rel="noopener">Trustpilot</a>
  </div>
  <!-- End TrustBox widget -->
`
  ), D = { audio: l.music, youtube: l.youtube, browser: l.browser, cookie: l.cookie }, H = { virus: l.virus, windows: l.windowsBadge, users: l.users, cyber: M }, q = u.map(({ title: t, svg: n }) => `<div class="iaby-hero__badge">${n}<span>${t}</span></div>`).join(""), V = m.map(
    ({ icon: t, title: n }) => (
      /* html */
      `
  <div class="iaby-hero__benefit">
    ${D[t]}
    <span>${n}</span>
  </div>`
    )
  ).join(""), A = v.map(
    ({ title: t, desc: n, img: e }, i) => (
      /* html */
      `
  <div class="iaby-steps__row">
    <div class="iaby-steps__dot"><span>${i + 1}</span></div>
    <div class="iaby-steps__body">
			<img src="https://conversionrate-store.github.io/a-b_images/adblock/${e}" alt="Step Icon"/>
			<div class="iaby-steps__content">
				<h3>${t}</h3>
				<p>${n}</p>
			</div>
    </div>
  </div>`
    )
  ).join(""), $ = L.map(
    ({ icon: t, title: n, titleAccent: e, desc: i, link: a, url: r }) => (
      /* html */
      `
  <div class="iaby-verified__card">
    <div class="iaby-verified__card-top">
      ${H[t]}
    </div>
    <div class="iaby-verified__card-body">
      <h3><span class="accent">${e}</span> ${n}</h3>
      <p>${i}</p>
    </div>
    ${a ? `<a href="${r}" class="iaby-verified__card-link" target="_blank" rel="noopener">${a}</a>` : ""}
  </div>`
    )
  ).join(""), z = k.map(
    ({ q: t, a: n }) => (
      /* html */
      `
  <div class="iaby-faq__item">
    <button type="button" class="iaby-faq__q">
      <span>${t}</span>
      ${l.chevron}
    </button>
    <div class="iaby-faq__a"><p>${n}</p></div>
  </div>`
    )
  ).join(""), B = (
    /* html */
    `
<div class="iaby">

  <section class="iaby-hero">
    <div class="iaby-hero__left">
      <div class="iaby-hero__badges">${q}</div>
      <h1 class="iaby-hero__title">You're 3 clicks away from<br> an <span>ad-free PC</span></h1>
      <p class="iaby-hero__desc">Every browser, Spotify, every website — not just YouTube.</p>
      <div class="iaby-hero__benefits">${V}</div>
    </div>

    <div class="iaby-steps">
      <h2 class="iaby-steps__title">How to install</h2>
      <div class="iaby-steps__list">${A}</div>
      <button type="button" class="iaby-steps__restart">${l.download} Didn't start? Restart download</button>
    </div>
  </section>

  <section class="iaby-trustpilot">
    <h2 class="iaby-trustpilot__title">From Trustpilot</h2>
    ${Z}
  </section>

  <section class="iaby-verified">
    <h2 class="iaby-verified__title">Independently verified</h2>
    <div class="iaby-verified__grid">${$}</div>

    <div class="iaby-verified__warning">
      ${l.warning}
      <span><strong>Seen "AdBlock 360" elsewhere?</strong> The real one comes only from <a href="https://adblock360.com" target="_blank" rel="noopener">adblock360.com.</a></span>
    </div>

    <div class="iaby-cert">
      <div class="iaby-cert__head">
        ${l.code} <span>For advanced users:</span> fingerprint and certificate
      </div>
      <div class="iaby-cert__body">
        <div class="iaby-cert__hash">
          <label>SHA-256</label>
          <div class="iaby-cert__hash-value">
            <span class="iaby-cert__hash-text">3f9a2c7e51d84b0f6a1e9d2c4b8f7a63e0c1d5b9a7f2e4c6d8b0a1f3e5c7d9b2</span>
            <button type="button" class="iaby-cert__copy-btn" aria-label="Copy hash">
              ${l.copy}
              <span class="iaby-cert__copied">Copied!</span>
            </button>
          </div>
        </div>
        <div class="iaby-cert__info">
          <label>Certificate</label>
          <p>EV, issued by DigiCert to AdBlock Ltd, valid to Mar 2028. Right-click the file → Properties → Digital Signatures.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="iaby-faq">
    <h2 class="iaby-faq__title">Quick questions</h2>
    <div class="iaby-faq__list">${z}</div>
  </section>

  <footer class="iaby-footer">
    <span>© 2026 AdBlock Ltd</span>
    <nav>
      <a href="#">Cookie Policy</a>
      <a href="#">Terms</a>
      <a href="#">Privacy Policy</a>
    </nav>
  </footer>
</div>
`
  );
  w(["//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"]), C({ name: "Install AdBlock for YouTube v2", dev: "YK" });
  class E {
    constructor() {
      this.init();
    }
    async init() {
      await y("body"), document.head.insertAdjacentHTML("beforeend", `<style class="crs-install-aby-v2-style">${x}</style>`), await y("main"), c("main").elements[0].insertAdjacentHTML("beforebegin", B), f("iaby_view", "Install AdBlock for YouTube v2 viewed", "view", "install_aby_v2"), this.initCtaClicks(), this.initFaq(), this.initTooltip(), this.initCopyHash(), this.initSectionsVisibility(), this.renderTrustpilot();
    }
    initCtaClicks() {
      c(".iaby-steps__restart").on("click", () => {
        f("iaby_restart_download_click", "Restart download", "click", "install_aby_v2"), this.triggerRealDownload();
      });
    }
    // The host page's own restart-download handler is bound to the inner
    // <span class="restartDownload__link">click here</span>, not the wrapping <a> and not plain
    // href navigation (confirmed: clicking the <a> or navigating to its href does nothing; only
    // `.restartDownload__link.click()` actually restarts the download). It lives inside <main>,
    // which we hide via CSS, but the element itself stays in the DOM and clickable.
    triggerRealDownload(n = 0) {
      const e = document.querySelector(".buttons__18_600");
      if (e) {
        e.click();
        return;
      }
      const i = document.querySelector('#main-cta, [data-event="download"]'), a = i == null ? void 0 : i.closest("a[href]");
      if (a != null && a.href) {
        a.click();
        return;
      }
      if (n < 10) {
        setTimeout(() => this.triggerRealDownload(n + 1), 200);
        return;
      }
      i == null || i.click();
    }
    initCopyHash() {
      c(".iaby-cert__copy-btn").on("click", async function() {
        var i, a, r;
        const n = this, e = ((r = (a = (i = n.closest(".iaby-cert__hash-value")) == null ? void 0 : i.querySelector(".iaby-cert__hash-text")) == null ? void 0 : a.textContent) == null ? void 0 : r.trim()) || "";
        try {
          await navigator.clipboard.writeText(e);
        } catch {
          const o = document.createElement("textarea");
          o.value = e, o.style.position = "fixed", o.style.opacity = "0", document.body.appendChild(o), o.select(), document.execCommand("copy"), o.remove();
        }
        n.classList.add("is-copied"), setTimeout(() => n.classList.remove("is-copied"), 1500), f("iaby_copy_hash_click", "SHA-256 hash copied", "click", "install_aby_v2");
      });
    }
    initFaq() {
      c(".iaby-faq__q").on("click", function() {
        const n = this.closest(".iaby-faq__item"), e = n == null ? void 0 : n.classList.contains("is-open");
        c(".iaby-faq__item").removeClass("is-open"), e || n == null || n.classList.add("is-open"), f("iaby_faq_toggle", "FAQ item toggled", "click", "install_aby_v2");
      });
    }
    initTooltip() {
      c(".iaby-header__info").on("click", (n) => {
        n.stopPropagation(), c(".iaby-header__info").elements[0].classList.toggle("is-open");
      }), document.addEventListener("click", () => {
        c(".iaby-header__info").removeClass("is-open");
      });
    }
    initSectionsVisibility() {
      b(".iaby-hero", "iaby_hero_visible", "install_aby_v2", "Hero section visible"), b(".iaby-trustpilot", "iaby_trustpilot_visible", "install_aby_v2", "Trustpilot section visible"), b(
        ".iaby-verified",
        "iaby_verified_visible",
        "install_aby_v2",
        "Independently verified section visible"
      ), b(".iaby-faq", "iaby_faq_visible", "install_aby_v2", "FAQ section visible");
    }
    renderTrustpilot() {
      const n = () => {
        const e = window.Trustpilot, i = document.querySelector(".trustpilot-widget-2");
        e && i ? e.loadFromElement(i, !0) : setTimeout(n, 100);
      };
      n();
    }
  }
  new E();
})();
//# sourceMappingURL=index.js.map
