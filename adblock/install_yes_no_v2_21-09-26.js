(function() {
  "use strict";
  const _ = `header {
  border-bottom: 1px solid #dbdbe0 !important;
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
  padding: 40px 40px 0;
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
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.iaby-hero__badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px;
  background: #f3f5f5;
  border: 1px solid #d9dbdf;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #005dd8;
  white-space: nowrap;
  cursor: default;
  transition: background 0.15s ease, box-shadow 0.15s ease;
}
@media (max-width: 768px) {
  .iaby-hero__badge {
    position: static;
  }
}
.iaby-hero__badge svg {
  flex-shrink: 0;
}
.iaby-hero__badge:hover, .iaby-hero__badge:focus-within {
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  z-index: 5;
}
.iaby-hero__badge:hover .iaby-hero__badge-popup, .iaby-hero__badge:focus-within .iaby-hero__badge-popup {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.iaby-hero__badge-popup {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  z-index: 30;
  width: 400px;
  max-width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  background: #fff;
  backdrop-filter: blur(2px);
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  white-space: normal;
  text-align: left;
  cursor: default;
  opacity: 0;
  visibility: hidden;
  transform: translateY(4px);
  transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;
}
@media (max-width: 768px) {
  .iaby-hero__badge-popup {
    left: 50%;
    transform: translate(-50%, 4px);
  }
  .iaby-hero__badge:hover .iaby-hero__badge-popup, .iaby-hero__badge:focus-within .iaby-hero__badge-popup {
    transform: translate(-50%, 0);
  }
}
.iaby-hero__badge-popup h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #0b1936;
}
.iaby-hero__badge-popup p {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: #2e353f;
}
@media (min-width: 769px) {
  .iaby-hero__badge:nth-child(3) .iaby-hero__badge-popup, .iaby-hero__badge:nth-child(4) .iaby-hero__badge-popup {
    left: auto;
    right: 0;
  }
}
.iaby-hero__badge-popup-media img {
  display: block;
  max-width: 136px;
  max-height: 100px;
  width: auto;
  height: auto;
}
.iaby-hero__badge-popup-media svg {
  display: block;
}
.iaby-hero__badge-popup-link {
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  color: #1b86fa;
  text-decoration: underline;
}
.iaby-hero__badge-popup-mock {
  border-radius: 8px;
  overflow: hidden;
  background: #f9f9f9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
}
.iaby-hero__badge-popup-mock-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  border-bottom: 1px solid #ececec;
}
.iaby-hero__badge-popup-mock-bar img {
  width: 100%;
}
.iaby-hero__badge-popup-mock-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #d9dbdf;
  flex-shrink: 0;
}
.iaby-hero__badge-popup-mock-url {
  flex: 1;
  margin-left: 8px;
  padding: 4px 10px;
  background: #f3f5f5;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  color: #757575;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.iaby-hero__badge-popup-mock-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
}
.iaby-hero__badge-popup-mock-body h4 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: #0b1936;
}
.iaby-hero__badge-popup-mock-logo {
  display: block;
  width: 103px;
  height: auto;
}
.iaby-hero__badge-popup-mock-highlight {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: #2e353f;
  background: #bbdbfe;
  border-radius: 4px;
  padding: 0 4px;
  display: inline;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
.iaby-hero__badge-popup-mock-muted {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #757575;
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
  flex: 0 0 520px;
  max-width: 520px;
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
  margin: 50px auto 0;
  padding: 0 40px;
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
  padding: 60px 40px;
}
@media (max-width: 768px) {
  .iaby-verified {
    padding: 40px 20px;
    margin-top: 56px;
  }
}
.iaby-verified__title {
  max-width: 1200px;
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
  max-width: 1200px;
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
  max-width: 1200px;
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
  max-width: 1200px;
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
  padding: 16px 40px 32px;
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
`, h = (t, n, e, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: n,
      event_type: e,
      event_loc: i
    }), c(`Event: ${t} | ${n} | ${e} | ${i}`, "success");
  }, g = (t) => new Promise((n) => {
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
  }), x = ({ name: t, dev: n }) => {
    const e = t.toLowerCase().replace(/\s/g, "_");
    h(`${e}_started`, `Experiment ${t} started`, "other", e), console.log(
      `%c EXP: ${t} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class C {
    constructor(n) {
      this.elements = n instanceof C ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, e, i) {
      return typeof e == "function" && (i = e, e = ""), this.elements.forEach((a) => {
        a.addEventListener(n, function(s) {
          var o;
          if (e !== "") {
            let r = (o = s.target) == null ? void 0 : o.closest(e);
            r && (i == null || i.call(r, s));
          } else
            i == null || i.call(a, s);
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
        n(new C(e), this.elements.indexOf(e));
      return this;
    }
    style(n, e) {
      const i = n.split("-").map((a, s) => s === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1)).join("");
      return this.elements.forEach(function(a) {
        a.style[i] = e;
      }), this;
    }
    find(n) {
      const e = this.elements.map((i) => Array.from(i.querySelectorAll(n)));
      return new C(e.flat());
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
  const p = (t) => new C(t), w = async (t) => {
    const n = (e) => new Promise((i, a) => {
      const s = e.split(".").pop();
      if (s === "js") {
        if (Array.from(document.scripts).map((d) => d.src.toLowerCase()).includes(e.toLowerCase()))
          return c(`Script ${e} allready downloaded!`, "success"), i("");
        const r = document.createElement("script");
        r.src = e, r.onload = i, r.onerror = a, document.head.appendChild(r);
      } else if (s === "css") {
        if (Array.from(document.styleSheets).map((d) => {
          var y;
          return (y = d.href) == null ? void 0 : y.toLowerCase();
        }).includes(e.toLowerCase()))
          return c(`Style ${e} allready downloaded!`, "success"), i("");
        const r = document.createElement("link");
        r.rel = "stylesheet", r.href = e, r.onload = i, r.onerror = a, document.head.appendChild(r);
      }
    });
    for (const e of t)
      c(e), await n(e), c(`Loaded librari ${e}`);
    c("All libraries loaded!", "success");
  }, b = (t, n, e, i, a = 1e3, s = 0.5) => {
    let o, r;
    if (o = new IntersectionObserver(
      function(d) {
        d[0].isIntersecting === !0 ? r = setTimeout(() => {
          h(
            n,
            d[0].target.dataset.visible || i || "",
            "view",
            e
          ), o.disconnect();
        }, a) : (c("Element is not fully visible", "warn"), clearTimeout(r));
      },
      { threshold: [s] }
    ), typeof t == "string") {
      const d = document.querySelector(t);
      d && o.observe(d);
    } else
      o.observe(t);
  }, c = (t, n = "info") => {
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
  }, f = {
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
</svg>`,
    verifyed: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
<path d="M15.3136 3.44827C13.2157 3.29898 11.2907 2.01826 9.42071 0.769004C9.09072 0.548981 8.7686 0.336822 8.44643 0.124712C8.16358 -0.0560348 7.79427 -0.0403052 7.53502 0.171853C5.61001 1.68828 3.30001 3.26757 0.730709 3.44827C0.32217 3.47968 0 3.81758 0 4.23398V6.60685C0 11.7768 3.01716 16.554 7.68431 18.7776C7.78646 18.8326 7.90428 18.8561 8.02216 18.8561C8.13999 18.8561 8.25 18.8326 8.36001 18.7776C13.0272 16.554 16.0443 11.7768 16.0443 6.60685V4.23398C16.0443 3.81758 15.7221 3.47968 15.3136 3.44827ZM11.1098 8.34632L8.02643 11.4301C7.72015 11.7364 7.22273 11.7374 6.91538 11.4301L5.52618 10.0409C5.21926 9.73398 5.21926 9.23677 5.52618 8.92985C5.8331 8.62293 6.33031 8.62293 6.63723 8.92985L7.4709 9.76352L9.99877 7.23527C10.3057 6.92835 10.8029 6.92835 11.1098 7.23527C11.4167 7.54219 11.4167 8.0394 11.1098 8.34632Z" fill="#005DD8"/>
</svg>`,
    free: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<g clip-path="url(#clip0_166_86)">
<path d="M19.965 8.20339L21.4654 9.70357C22.1777 10.4164 22.1777 11.5835 21.4655 12.2975L19.9651 13.7977C19.6092 14.1536 19.3171 14.8573 19.3171 15.3622V17.4839C19.3171 18.492 18.4926 19.3176 17.4837 19.3176H15.3612C14.8571 19.3176 14.1528 19.6091 13.7964 19.9652L12.2962 21.466C11.5834 22.1782 10.4163 22.1782 9.70348 21.466L8.20331 19.9652C7.84715 19.6093 7.14261 19.3176 6.63852 19.3176H4.51684C3.50894 19.3176 2.68338 18.492 2.68338 17.4839V15.3622C2.68338 14.8594 2.39183 14.1538 2.03546 13.7977L0.535012 12.2975C-0.178337 11.5835 -0.178337 10.4164 0.535012 9.70362L2.03546 8.20345C2.39162 7.84755 2.68338 7.14161 2.68338 6.63892V4.51725C2.68338 3.508 3.50894 2.68352 4.51684 2.68352H6.63846C7.14148 2.68352 7.84682 2.39197 8.20326 2.03586L9.70343 0.534609C10.4162 -0.178203 11.5834 -0.178203 12.2962 0.534609L13.7963 2.03478C14.1525 2.39063 14.857 2.68298 15.3611 2.68298H17.4836C18.4926 2.68352 19.3171 3.508 19.3171 4.51725V6.63887C19.3171 7.14355 19.6089 7.84728 19.965 8.20339Z" fill="#005DD8"/>
<path d="M13.6025 8.23679C13.8961 7.94557 14.4012 7.91936 14.7315 8.17822C15.0617 8.43708 15.0914 8.88256 14.7979 9.17378L9.93353 14L7.20211 11.2903C6.90855 10.9991 6.93827 10.5536 7.26852 10.2947C7.59876 10.0359 8.10394 10.0621 8.39749 10.3533L9.93275 11.8759L13.6025 8.23679Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_166_86">
<rect width="22" height="22" fill="white"/>
</clipPath>
</defs>
</svg>`,
    freeLg: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
<rect width="60" height="60" rx="8" fill="#005DD8"/>
<path d="M53.2076 30C53.2076 31.9472 50.0822 33.4577 49.6022 35.2535C49.1055 37.1117 51.0423 39.9795 50.101 41.6064C49.1462 43.2567 45.6855 43.0069 44.3462 44.3462C43.0069 45.6855 43.2566 49.1462 41.6064 50.101C39.9795 51.0423 37.1116 49.1055 35.2535 49.6022C33.4577 50.0822 31.9472 53.2076 30 53.2076C28.0529 53.2076 26.5423 50.0822 24.7465 49.6022C22.8884 49.1055 20.0205 51.0423 18.3936 50.101C16.7434 49.1462 16.9931 45.6855 15.6538 44.3462C14.3145 43.0069 10.8538 43.2566 9.899 41.6064C8.95775 39.9795 10.8945 37.1116 10.3979 35.2535C9.91786 33.4577 6.79248 31.9472 6.79248 30C6.79248 28.0529 9.91787 26.5423 10.3979 24.7465C10.8945 22.8884 8.95777 20.0205 9.89903 18.3936C10.8538 16.7434 14.3146 16.9931 15.6539 15.6538C16.9932 14.3145 16.7434 10.8538 18.3937 9.899C20.0205 8.95775 22.8884 10.8945 24.7465 10.3979C26.5423 9.91786 28.0529 6.79248 30 6.79248C31.9472 6.79248 33.4577 9.91787 35.2535 10.3979C37.1117 10.8945 39.9796 8.95777 41.6064 9.89903C43.2567 10.8538 43.0069 14.3146 44.3462 15.6539C45.6855 16.9932 49.1463 16.7434 50.1011 18.3937C51.0423 20.0205 49.1056 22.8884 49.6022 24.7465C50.0822 26.5423 53.2076 28.0529 53.2076 30Z" fill="white"/>
<path d="M29.9515 10.3827C30.1092 10.3827 30.3225 10.4447 30.6273 10.6512C30.9363 10.8606 31.2578 11.1615 31.6332 11.535C31.9841 11.8842 32.3996 12.3165 32.8168 12.6708C33.234 13.0251 33.7536 13.3917 34.3666 13.5555C34.9864 13.7212 35.6242 13.6699 36.1732 13.5741C36.7217 13.4783 37.2996 13.314 37.7826 13.1864C38.2977 13.0504 38.7248 12.9498 39.0931 12.9208C39.4579 12.8921 39.6577 12.944 39.7748 13.0116C39.8995 13.0838 40.0477 13.2368 40.2064 13.5682C40.3668 13.9033 40.4945 14.3244 40.6332 14.8378C40.7631 15.3187 40.9072 15.9017 41.0951 16.4218C41.2831 16.9421 41.5546 17.5209 42.0062 17.9725C42.4578 18.424 43.0359 18.6947 43.556 18.8827C44.0762 19.0707 44.659 19.2156 45.14 19.3456C45.6533 19.4843 46.0745 19.611 46.4095 19.7714C46.741 19.93 46.894 20.0783 46.9662 20.203C47.0339 20.32 47.0857 20.5198 47.057 20.8846C47.028 21.253 46.9274 21.6801 46.7914 22.1952C46.6638 22.6782 46.4995 23.256 46.4037 23.8046C46.3078 24.3536 46.2566 24.9914 46.4222 25.6112C46.5861 26.2242 46.9527 26.7438 47.307 27.161C47.6612 27.5782 48.0935 27.9937 48.4427 28.3446C48.8163 28.72 49.1172 29.0425 49.3265 29.3514C49.5329 29.656 49.5951 29.8686 49.5951 30.0262C49.5951 30.1839 49.5331 30.3972 49.3265 30.702C49.1172 31.0109 48.8162 31.3325 48.4427 31.7079C48.0935 32.0588 47.6612 32.4743 47.307 32.8915C46.9527 33.3087 46.5861 33.8283 46.4222 34.4413C46.2566 35.0611 46.3078 35.6989 46.4037 36.2479C46.4995 36.7964 46.6638 37.3744 46.7914 37.8573C46.9274 38.3724 47.028 38.7995 47.057 39.1678C47.0857 39.5327 47.0339 39.7325 46.9662 39.8495C46.894 39.9742 46.7411 40.1224 46.4095 40.2811C46.0744 40.4415 45.6535 40.5692 45.14 40.7079C44.6591 40.8378 44.0762 40.9818 43.556 41.1698C43.0357 41.3578 42.4579 41.6293 42.0062 42.0809C41.5546 42.5326 41.2831 43.1104 41.0951 43.6307C40.9071 44.1509 40.7631 44.7338 40.6332 45.2147C40.4944 45.7282 40.3668 46.1491 40.2064 46.4843C40.0477 46.8158 39.8995 46.9687 39.7748 47.0409C39.6578 47.1086 39.458 47.1604 39.0931 47.1317C38.7248 47.1027 38.2977 47.0021 37.7826 46.8661C37.2996 46.7385 36.7217 46.5742 36.1732 46.4784C35.6242 46.3825 34.9864 46.3313 34.3666 46.4969C33.7536 46.6608 33.234 47.0274 32.8168 47.3817C32.3996 47.7359 31.9841 48.1682 31.6332 48.5175C31.2578 48.891 30.9362 49.1919 30.6273 49.4012C30.3225 49.6078 30.1092 49.6698 29.9515 49.6698C29.7939 49.6698 29.5813 49.6076 29.2767 49.4012C28.9678 49.1919 28.6453 48.891 28.2699 48.5175C27.919 48.1682 27.5035 47.7359 27.0863 47.3817C26.6691 47.0274 26.1495 46.6608 25.5365 46.4969C24.9167 46.3313 24.2789 46.3825 23.7299 46.4784C23.1813 46.5742 22.6035 46.7385 22.1205 46.8661C21.6054 47.0021 21.1783 47.1027 20.8099 47.1317C20.4451 47.1604 20.2453 47.1086 20.1283 47.0409C20.0036 46.9687 19.8553 46.8158 19.6967 46.4843C19.5363 46.1492 19.4096 45.728 19.2709 45.2147C19.1409 44.7337 18.996 44.1509 18.808 43.6307C18.62 43.1106 18.3492 42.5325 17.8978 42.0809C17.4462 41.6293 16.8674 41.3578 16.347 41.1698C15.827 40.9819 15.244 40.8368 14.7631 40.7069C14.2498 40.5682 13.8286 40.4415 13.4935 40.2811C13.162 40.1224 13.0091 39.9742 12.9369 39.8495C12.8692 39.7325 12.8174 39.5326 12.8461 39.1678C12.8751 38.7995 12.9756 38.3724 13.1117 37.8573C13.2393 37.3743 13.4036 36.7964 13.4994 36.2479C13.5952 35.6989 13.6465 35.0611 13.4808 34.4413C13.317 33.8283 12.9504 33.3087 12.5961 32.8915C12.2418 32.4743 11.8095 32.0588 11.4603 31.7079C11.0868 31.3325 10.7859 31.011 10.5765 30.702C10.37 30.3972 10.308 30.1839 10.308 30.0262C10.308 29.8687 10.3703 29.656 10.5765 29.3514C10.7859 29.0425 11.0868 28.72 11.4603 28.3446C11.8096 27.9936 12.2418 27.5782 12.5961 27.161C12.9504 26.7437 13.317 26.2242 13.4808 25.6112C13.6465 24.9914 13.5953 24.3536 13.4994 23.8046C13.4036 23.256 13.2393 22.6782 13.1117 22.1952C12.9756 21.6801 12.8751 21.253 12.8461 20.8846C12.8174 20.5198 12.8692 20.32 12.9369 20.203C13.0091 20.0783 13.162 19.9301 13.4935 19.7714C13.8286 19.611 14.2498 19.4843 14.7631 19.3456C15.244 19.2156 15.8269 19.0706 16.347 18.8827C16.8673 18.6947 17.4462 18.4242 17.8978 17.9725C18.3495 17.5209 18.6199 16.9421 18.808 16.4218C18.9959 15.9016 19.1409 15.3187 19.2709 14.8378C19.4096 14.3245 19.5363 13.9033 19.6967 13.5682C19.8554 13.2367 20.0036 13.0838 20.1283 13.0116C20.2453 12.9439 20.4451 12.8921 20.8099 12.9208C21.1783 12.9498 21.6054 13.0503 22.1205 13.1864C22.6035 13.314 23.1813 13.4783 23.7299 13.5741C24.2789 13.67 24.9167 13.7212 25.5365 13.5555C26.1495 13.3917 26.669 13.0251 27.0863 12.6708C27.5035 12.3165 27.9189 11.8843 28.2699 11.535C28.6453 11.1615 28.9678 10.8606 29.2767 10.6512C29.5813 10.445 29.794 10.3827 29.9515 10.3827Z" stroke="#005DD8" stroke-width="2"/>
<path d="M18.9467 34.193H17.3669C17.1223 34.193 17 34.0731 17 33.8334V27.3596C17 27.1199 17.1223 27 17.3669 27H21.9126C22.1572 27 22.2795 27.1199 22.2795 27.3596V28.5485C22.2795 28.7883 22.1572 28.9081 21.9126 28.9081H19.3136V29.9471H21.087C21.3316 29.9471 21.454 30.067 21.454 30.3068V31.5056C21.454 31.7454 21.3316 31.8653 21.087 31.8653H19.3136V33.8334C19.3136 34.0731 19.1913 34.193 18.9467 34.193Z" fill="#005DD8"/>
<path d="M25.2352 34.193H23.6657C23.421 34.193 23.2988 34.0731 23.2988 33.8334V27.3596C23.2988 27.1199 23.421 27 23.6657 27H27.0597C27.5693 27 27.9701 27.0699 28.2623 27.2098C28.5544 27.3497 28.7618 27.5445 28.884 27.7942C29.0064 28.044 29.0675 28.3354 29.0675 28.6684V29.1279C29.0675 29.4077 29.0267 29.6442 28.9452 29.8372C28.8637 30.0305 28.7141 30.1736 28.4967 30.2668C28.8703 30.3068 29.1694 30.4534 29.3936 30.7064C29.6179 30.9596 29.73 31.2958 29.73 31.7154V33.8334C29.73 34.0731 29.6077 34.193 29.3631 34.193H27.7833C27.5387 34.193 27.4164 34.0731 27.4164 33.8334V32.3048C27.4164 32.1517 27.3874 32.0418 27.3297 31.9752C27.2719 31.9087 27.1718 31.8753 27.0291 31.8753H25.6022V33.8334C25.6022 34.0731 25.4799 34.193 25.2352 34.193ZM25.6022 28.7983V30.077H26.3666C26.5432 30.077 26.6621 30.0321 26.7233 29.9421C26.7845 29.8522 26.8151 29.7408 26.8151 29.6075V29.2678C26.8151 29.1346 26.7845 29.023 26.7233 28.9331C26.6621 28.8432 26.5432 28.7983 26.3666 28.7983L25.6022 28.7983Z" fill="#005DD8"/>
<path d="M35.9675 34.193H31.2383C30.9937 34.193 30.8715 34.0731 30.8715 33.8334V27.3596C30.8715 27.1199 30.9937 27 31.2383 27H35.9675C36.2121 27 36.3344 27.1199 36.3344 27.3596V28.5285C36.3344 28.7683 36.2121 28.8882 35.9675 28.8882H33.1545V29.6574H35.1419C35.3866 29.6574 35.5088 29.7773 35.5088 30.0171V31.086C35.5088 31.3258 35.3866 31.4457 35.1419 31.4457H33.1545V32.3049H35.9675C36.2121 32.3049 36.3344 32.4247 36.3344 32.6645V33.8334C36.3344 34.0732 36.2121 34.193 35.9675 34.193Z" fill="#005DD8"/>
<path d="M42.633 34.193H37.9039C37.6593 34.193 37.537 34.0731 37.537 33.8334V27.3596C37.537 27.1199 37.6593 27 37.9039 27H42.633C42.8776 27 43 27.1199 43 27.3596V28.5285C43 28.7683 42.8776 28.8882 42.633 28.8882H39.82V29.6574H41.8075C42.0521 29.6574 42.1744 29.7773 42.1744 30.0171V31.086C42.1744 31.3258 42.0521 31.4457 41.8075 31.4457H39.82V32.3049H42.633C42.8776 32.3049 43 32.4247 43 32.6645V33.8334C43 34.0732 42.8776 34.193 42.633 34.193Z" fill="#005DD8"/>
</svg>`
  }, u = [
    {
      title: "EV code signed",
      svg: f.ev,
      popup: {
        // TODO: upload to a-b_images/adblock/ — filenames match what's downloaded to the scratchpad
        image: "https://conversionrate-store.github.io/a-b_images/adblock/digicert.webp",
        title: "DigiCert™ EV Code Signing",
        desc: "Your OS verifies our identity before install. The certificate is issued to AdBlock Ltd — that's the publisher name you'll see on the Windows prompt."
      }
    },
    {
      title: "AppEsteem certified",
      svg: f.award,
      popup: {
        // TODO: upload to a-b_images/adblock/ — filenames match what's downloaded to the scratchpad
        image: "https://conversionrate-store.github.io/a-b_images/adblock/app_est.webp",
        title: "Independently certified by AppEsteem",
        desc: "Every AdBlock360 release is tested and approved by AppEsteem, an independent certification body for safe software and clean installation practices, before it is published."
      }
    },
    {
      title: "Cybernews verified",
      svg: f.verifyed,
      popup: {
        variant: "cybernews",
        title: "Reviewed and verified by Cybernews",
        desc: 'AdBlock360 is the real app — fully vetted, zero adware. Not to be confused with the fake "AdBlock 360" that shows up in search results.',
        link: { text: "Cybernews independent security review →", url: "https://cybernews.com/adblock360-review/" }
      }
    },
    {
      title: "Free, no trial",
      svg: f.free,
      popup: {
        icon: f.freeLg,
        title: "Free version, optional Premium",
        desc: "The basic version is free. Premium is a separate paid subscription. Nothing is charged and nothing upgrades unless you choose it."
      }
    }
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
    music: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
<path d="M21.8329 0.0168873C10.2438 -0.44384 0.475346 8.57675 0.0168826 20.1655C-0.443779 31.7543 8.57925 41.5208 20.1673 41.9816C31.7569 42.4428 41.5226 33.4223 41.9833 21.8329C42.4417 10.2441 33.4204 0.476518 21.8329 0.0168873ZM30.6971 30.7789C30.4359 31.2398 29.9275 31.4699 29.4322 31.4009C29.2804 31.3795 29.1287 31.3296 28.9869 31.249C26.2114 29.6691 23.1863 28.6404 19.9963 28.191C16.8063 27.7415 13.6141 27.897 10.5104 28.6515C9.83645 28.8147 9.1592 28.4021 8.99594 27.7281C8.83267 27.0546 9.24551 26.3767 9.91891 26.2135C13.3315 25.3845 16.8404 25.2136 20.3454 25.707C23.8504 26.2003 27.1745 27.3309 30.2287 29.0681C30.8295 29.4117 31.0406 30.1756 30.6987 30.7784L30.6971 30.7784L30.6971 30.7789ZM33.4572 25.2668C33.029 26.0576 32.0389 26.3529 31.2479 25.9249C28.0002 24.1685 24.4836 23.0148 20.7967 22.4963C17.1092 21.9778 13.4124 22.1179 9.80622 22.9107C9.61052 22.9529 9.41647 22.9606 9.22847 22.9337C8.57376 22.8417 8.0136 22.3539 7.86352 21.6689C7.66947 20.79 8.22634 19.9203 9.10533 19.7264C13.0919 18.8492 17.1785 18.6943 21.2513 19.266C25.3225 19.8382 29.209 21.113 32.7986 23.0551C33.5913 23.4832 33.8849 24.4717 33.4572 25.2641V25.2668ZM36.5163 19.0539C36.1134 19.8293 35.2745 20.2304 34.4571 20.1153C34.2361 20.0846 34.0195 20.0155 33.8101 19.9081C30.0286 17.9407 25.9558 16.6413 21.7043 16.0438C17.4528 15.4469 13.1782 15.5733 9.00143 16.4215C7.9152 16.6423 6.85754 15.9397 6.63656 14.8552C6.41557 13.7691 7.11811 12.7115 8.2027 12.4907C12.8286 11.5522 17.5578 11.4126 22.2628 12.0726C26.9672 12.7331 31.4744 14.1728 35.6621 16.3512C36.645 16.862 37.0265 18.073 36.5163 19.0555V19.0539Z" fill="#00B67A"/>
</svg>`,
    youtube: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="42" height="42" rx="4" fill="#FF0033"/>
<g clip-path="url(#clip0_124_39)">
<path d="M20.9853 31C20.9853 31 29.7568 31 31.9325 30.4C33.1575 30.06 34.0788 29.08 34.4022 27.87C35 25.65 35 20.98 35 20.98C35 20.98 35 16.34 34.4022 14.14C34.0788 12.9 33.1575 11.94 31.9325 11.61C29.7568 11 20.9853 11 20.9853 11C20.9853 11 12.2335 11 10.0676 11.61C8.8621 11.94 7.92125 12.9 7.57823 14.14C7 16.34 7 20.98 7 20.98C7 20.98 7 25.65 7.57823 27.87C7.92125 29.08 8.8621 30.06 10.0676 30.4C12.2335 31 20.9853 31 20.9853 31Z" fill="white"/>
<path d="M25.3447 21.0002L18.1033 16.7502V25.2502L25.3447 21.0002Z" fill="#FF0033"/>
</g>
<defs>
<clipPath id="clip0_124_39">
<rect width="28" height="20" fill="white" transform="translate(7 11)"/>
</clipPath>
</defs>
</svg>`,
    browser: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
<g clip-path="url(#clip0_124_46)">
<path d="M34.3943 11.4085L42 7.60563V0.633803C42 0.283775 41.7162 0 41.3662 0H39.4648L34.3943 11.4085Z" fill="black"/>
<path d="M39.4648 0H0.633803C0.283775 0 0 0.283775 0 0.633803V7.60563L39.4648 16.4789V0Z" fill="black"/>
<path d="M34.3943 19.0141L42 15.2113V7.60564H39.4648L34.3943 19.0141Z" fill="#D0CDCD"/>
<path d="M0 7.60564V15.2113L39.4648 25.3521V7.60564H0Z" fill="#D0CDCD"/>
<path d="M39.4648 34.3976L29.324 24.8044L39.4648 15.2113H42V33.7638C42 34.1138 41.7163 34.3976 41.3662 34.3976H39.4648Z" fill="#E7E6E6"/>
<path d="M0 33.7638V15.2113H39.4648V17.7465L29.3239 24.8044L39.4648 31.8624V34.3976H0.633803C0.283775 34.3976 0 34.1138 0 33.7638Z" fill="#E7E6E6"/>
<path d="M36.9296 31.8624L29.324 24.8044L36.9296 17.7465H39.4648V31.8624H36.9296Z" fill="white"/>
<path d="M2.53522 17.7465H36.9296V31.8624H2.53522V17.7465Z" fill="white"/>
<path d="M29.324 42L24.2535 33.13L29.324 24.2599H31.8592C33.2594 24.2599 34.3944 25.395 34.3944 26.7952V39.4648C34.3944 40.865 33.2594 42 31.8592 42H29.324Z" fill="#D61717"/>
<path d="M24.3305 24.2599L22.0547 20.8461C21.5529 20.0935 20.447 20.0935 19.9452 20.8461L17.6693 24.2599H10.1409C8.74067 24.2599 7.60565 25.3949 7.60565 26.7951V39.4648C7.60565 40.865 8.74067 42 10.1409 42H29.324C30.7242 42 31.8592 40.865 31.8592 39.4648V26.7951C31.8592 25.3949 30.7242 24.2599 29.324 24.2599H24.3305Z" fill="#D61717"/>
<path d="M24.5403 27.797L22.7476 29.5897L24.5403 31.3823L26.3329 29.5897C26.828 29.0946 26.828 28.292 26.3329 27.797C25.838 27.302 25.0353 27.302 24.5403 27.797Z" fill="white"/>
<path d="M26.3329 36.6702L24.5403 34.8776L22.7476 36.6702L24.5403 38.4629C25.0353 38.9579 25.8379 38.9579 26.3329 38.4629C26.828 37.9678 26.828 37.1653 26.3329 36.6702Z" fill="white"/>
<path d="M22.7926 33.13L24.5402 31.3824C25.0353 30.8873 25.0353 30.0848 24.5402 29.5897C24.0452 29.0947 23.2426 29.0947 22.7476 29.5897L21 31.3373L17.4596 27.797C16.9646 27.302 16.162 27.302 15.667 27.797C15.172 28.292 15.172 29.0946 15.667 29.5897L19.2073 33.13L15.667 36.6703C15.172 37.1654 15.172 37.9679 15.667 38.463C16.162 38.958 16.9646 38.958 17.4596 38.463L21 34.9226L22.7476 36.6702C23.2426 37.1653 24.0452 37.1653 24.5402 36.6702C25.0353 36.1752 25.0353 35.3726 24.5402 34.8776L22.7926 33.13Z" fill="white"/>
<path d="M38.1972 10.1408H35.662V12.676H38.1972C38.8973 12.676 39.4648 12.1085 39.4648 11.4084C39.4648 10.7084 38.8973 10.1408 38.1972 10.1408Z" fill="white"/>
<path d="M36.9296 11.4084C36.9296 10.7084 36.362 10.1408 35.662 10.1408H3.80282C3.10277 10.1408 2.53522 10.7084 2.53522 11.4084C2.53522 12.1085 3.10277 12.676 3.80282 12.676H35.662C36.362 12.676 36.9296 12.1085 36.9296 11.4084Z" fill="white"/>
<path d="M28.4441 5.07044C29.1441 5.07044 29.7117 4.50292 29.7117 3.80284C29.7117 3.10276 29.1441 2.53523 28.4441 2.53523C27.744 2.53523 27.1765 3.10276 27.1765 3.80284C27.1765 4.50292 27.744 5.07044 28.4441 5.07044Z" fill="white"/>
<path d="M33.5143 5.07044C34.2144 5.07044 34.7819 4.50292 34.7819 3.80284C34.7819 3.10276 34.2144 2.53523 33.5143 2.53523C32.8142 2.53523 32.2467 3.10276 32.2467 3.80284C32.2467 4.50292 32.8142 5.07044 33.5143 5.07044Z" fill="white"/>
<path d="M38.585 5.07044C39.2851 5.07044 39.8526 4.50292 39.8526 3.80284C39.8526 3.10276 39.2851 2.53523 38.585 2.53523C37.8849 2.53523 37.3174 3.10276 37.3174 3.80284C37.3174 4.50292 37.8849 5.07044 38.585 5.07044Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_124_46">
<rect width="42" height="42" fill="white"/>
</clipPath>
</defs>
</svg>`,
    cookie: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
<g clip-path="url(#clip0_124_68)">
<path d="M39.1086 22.277C37.7687 21.7377 36.5663 20.9293 35.5659 19.9196C35.2426 19.5934 34.7723 19.4877 34.3208 19.5718C34.0652 19.6193 33.8018 19.6448 33.5322 19.6448C32.0745 19.6448 30.7855 18.9342 29.9847 17.8425C29.8011 17.5922 29.5242 17.4349 29.2244 17.3544C26.0485 16.5016 23.7097 13.6059 23.7097 10.1609C23.7097 9.73694 23.746 9.3217 23.8149 8.91745C23.9117 8.34963 23.6885 7.7563 23.181 7.48379C21.4798 6.57004 20.3226 4.77561 20.3226 2.70924C20.3226 2.21517 20.3898 1.73717 20.5147 1.28305C20.7179 0.544684 20.3155 -0.00328458 19.5515 0.0488053C8.14882 0.825559 -0.754605 10.7047 0.050614 22.4767C0.364384 27.0646 2.18605 31.2752 5.02236 34.6018C5.02236 34.6018 11.4393 41.2684 19.0811 41.2684C30.5945 41.2684 39.4318 34.7717 40.9171 23.9238L39.1086 22.277Z" fill="#E2996C"/>
<path d="M33.3598 9.65262C33.0315 9.56911 32.3852 9.62571 32.3852 9.62571C31.7787 9.80765 31.2437 10.1549 30.8326 10.6153C30.0538 11.4873 30.6629 12.8705 31.8321 12.8705H32.9645C35.5053 12.8705 35.2514 10.1337 33.3598 9.65262Z" fill="#E2996C"/>
<path d="M41.3803 3.50593C41.2471 1.69952 39.9549 0.744264 38.4316 0.111803C38.2403 0.0323145 37.8869 0.000732422 37.8869 0.000732422C36.6133 0.0156621 35.4824 0.615967 34.7488 1.54604C33.9428 2.56782 34.2204 4.07137 35.3032 4.79324L38.2254 6.7414C38.2254 6.74124 41.6654 7.37214 41.3803 3.50593Z" fill="#E2996C"/>
<path d="M9.58421 26.0147C8.90852 26.5784 8.40583 27.3709 8.20879 28.3297C7.84416 30.104 8.75733 31.967 10.3825 32.7669C10.4055 32.7782 10.4286 32.7893 10.4516 32.8002C10.4516 32.8002 13.1052 33.4202 14.0584 32.0572C14.5932 31.2926 14.5234 30.0578 13.7369 29.0211L11.5731 26.1689L10.0344 25.7289C9.87616 25.8024 9.72489 25.8973 9.58421 26.0147Z" fill="black"/>
<path d="M32.2315 32.4212C33.2228 31.6008 33.4106 30.0985 32.8119 28.9596C31.991 27.3981 29.8914 27.6611 29.8914 27.6611C29.4225 27.9531 29.1134 28.4877 29.1298 29.0832L29.1994 31.6255C29.2144 32.1738 29.503 32.6659 29.9301 32.947C29.9301 32.947 31.1536 33.3132 32.2315 32.4212Z" fill="black"/>
<path d="M13.9248 6.80646C13.5908 6.5392 12.7698 6.48022 12.7698 6.48022C11.9079 6.57112 11.0962 7.04526 10.6184 7.7992C10.0497 8.69679 10.0346 9.75007 10.4459 10.61L12.2315 10.8618L14.4192 9.54573C15.1835 9.08595 14.4699 7.24254 13.9248 6.80646Z" fill="black"/>
<path d="M41.0523 22.8465C40.3789 22.7189 39.7295 22.527 39.1085 22.277C37.3161 32.0558 28.7587 39.4615 18.4619 39.4615C13.3502 39.4615 8.66403 37.6377 5.02234 34.6018C8.49144 38.6712 13.478 41.417 19.081 41.9142C30.5493 42.932 40.3157 34.7222 41.801 23.8743C41.8673 23.3903 41.5324 22.9374 41.0523 22.8465Z" fill="#E2996C"/>
<path d="M40.5073 16.2577C40.5073 17.006 40.0385 17.4029 39.2903 17.4029C38.6804 17.4029 37.9947 16.6553 37.9947 16.6553C37.9562 16.5295 37.9354 16.396 37.9354 16.2576C37.9354 15.5093 38.542 14.9028 39.2903 14.9028C39.4286 14.9028 39.5621 14.9235 39.6879 14.9621C39.6879 14.9621 40.5073 15.4877 40.5073 16.2577Z" fill="#E2996C"/>
<path d="M39.6879 14.9621C39.7261 15.0874 39.7485 15.2233 39.7485 15.3611C39.7485 16.1093 39.142 16.7159 38.3937 16.7159C38.2559 16.7159 38.12 16.6936 37.9948 16.6553C38.1641 17.2103 38.6798 17.6125 39.2903 17.6125C40.0385 17.6125 40.6451 17.0059 40.6451 16.2577C40.6452 15.6471 40.243 15.1315 39.6879 14.9621Z" fill="#E2996C"/>
<path d="M41.9635 3.51208C41.7267 1.71634 40.2536 0.25528 38.4561 0.0319911C38.2639 0.00812001 38.074 -0.00147765 37.8871 0.000655166C39.1084 0.577909 40.0167 1.75112 40.198 3.1258C40.326 4.09631 40.1106 5.00965 39.6569 5.76368C39.3326 6.30254 38.8036 6.63305 38.2255 6.74116L38.2821 6.7789C39.3229 7.47272 40.7775 7.22154 41.4225 6.14988C41.8762 5.39593 42.0915 4.4826 41.9635 3.51208Z" fill="#E2996C"/>
<path d="M35.9744 10.7171C35.3531 9.96369 34.4126 9.48347 33.3599 9.48347C33.0231 9.48347 32.6923 9.53425 32.3853 9.6258C33.0394 9.82005 33.62 10.2039 34.0432 10.7171C34.7487 11.5727 34.0735 12.8706 32.9646 12.8706H34.8957C36.0047 12.8705 36.6799 11.5727 35.9744 10.7171Z" fill="#E2996C"/>
<path d="M14.9211 29.3015L12.7573 26.4492C12.1122 25.5988 10.9561 25.3 10.0343 25.7288L12.4935 28.9704C13.2801 30.0072 13.0498 31.5187 11.9535 32.22C11.5 32.51 10.9851 32.7072 10.4516 32.8001C11.79 33.4274 13.2576 33.2698 14.3811 32.551C15.4773 31.8498 15.7077 30.3382 14.9211 29.3015Z" fill="black"/>
<path d="M15.4668 7.7495C15.1187 7.22729 14.5953 6.81032 13.9306 6.59729C13.5519 6.47597 13.1538 6.44028 12.7697 6.48023C12.9533 6.64421 13.126 6.83157 13.2598 7.03222C13.7544 7.77444 13.4734 8.78892 12.7091 9.24879L10.4458 10.61C10.4516 10.6237 10.4591 10.6375 10.4657 10.6508C10.8792 11.4817 11.9333 11.7605 12.7285 11.2821L14.9162 9.96607C15.6805 9.50628 15.9614 8.49172 15.4668 7.7495Z" fill="black"/>
<path d="M33.1833 28.9611C32.6755 28.0132 31.7484 27.4821 30.7848 27.4315C30.458 27.4143 30.1483 27.5029 29.8903 27.6627C30.4669 27.9097 30.9786 28.3473 31.3074 28.9611C31.915 30.0954 31.6716 31.5491 30.7271 32.4229C30.4826 32.649 30.2126 32.8209 29.93 32.947C30.1948 33.1213 30.5118 33.2158 30.8509 33.1908C31.4744 33.1447 32.0926 32.8951 32.603 32.4229C33.5475 31.549 33.7909 30.0953 33.1833 28.9611Z" fill="black"/>
<path d="M8.66852 14.9028C8.66852 15.6511 8.1998 16.048 7.45151 16.048C6.84161 16.048 6.15599 15.3004 6.15599 15.3004C6.11743 15.1746 6.09668 15.0411 6.09668 14.9027C6.09668 14.1544 6.7033 13.5479 7.45151 13.5479C7.58989 13.5479 7.72336 13.5686 7.84911 13.6072C7.84911 13.6073 8.66852 14.1327 8.66852 14.9028Z" fill="black"/>
<path d="M7.84913 13.6073C7.88736 13.7325 7.90975 13.8685 7.90975 14.0063C7.90975 14.7545 7.30321 15.3611 6.55492 15.3611C6.41719 15.3611 6.28127 15.3388 6.15601 15.3005C6.3254 15.8555 6.84105 16.2577 7.45153 16.2577C8.19973 16.2577 8.80635 15.6511 8.80635 14.9029C8.80644 14.2923 8.40415 13.7766 7.84913 13.6073Z" fill="black"/>
<path d="M23.0474 12.4485C23.0474 13.5708 22.3408 14.1055 21.2184 14.1055C19.9116 14.1055 19.344 13.2351 19.344 13.2351C19.2423 12.9932 19.1862 12.7274 19.1862 12.4485C19.1862 11.3261 20.096 10.4162 21.2184 10.4162C21.4975 10.4162 21.7635 10.4725 22.0056 10.5743C22.0056 10.5743 23.0474 11.1011 23.0474 12.4485Z" fill="black"/>
<path d="M22.0056 10.5743C22.1008 10.8097 22.1533 11.0816 22.1533 11.3512C22.1533 12.4735 21.2434 13.3834 20.1211 13.3834C19.8516 13.3834 19.5793 13.3303 19.344 13.2351C19.6513 13.9649 20.3767 14.4808 21.2184 14.4808C22.3408 14.4808 23.2507 13.5709 23.2507 12.4486C23.2507 11.6068 22.7355 10.8817 22.0056 10.5743Z" fill="black"/>
<path d="M30.2806 4.74149C30.2806 5.86384 29.574 6.39852 28.4517 6.39852C27.1448 6.39852 26.5773 5.52808 26.5773 5.52808C26.4756 5.28617 26.4194 5.02039 26.4194 4.74149C26.4194 3.61913 27.3293 2.70924 28.4517 2.70924C28.7307 2.70924 28.9968 2.76552 29.2388 2.86732C29.2388 2.86732 30.2806 3.3942 30.2806 4.74149Z" fill="#E2996C"/>
<path d="M29.2389 2.86732C29.3341 3.10267 29.3866 3.37461 29.3866 3.64416C29.3866 4.76651 28.4767 5.6764 27.3544 5.6764C27.0849 5.6764 26.8126 5.62333 26.5773 5.52809C26.8846 6.25792 27.61 6.77382 28.4517 6.77382C29.574 6.77382 30.4839 5.86393 30.4839 4.74158C30.4839 3.89977 29.9688 3.1747 29.2389 2.86732Z" fill="#E2996C"/>
<path d="M22.1825 35.5641C22.1825 36.4994 21.5966 36.9957 20.6613 36.9957C19.899 36.9957 19.0418 36.0612 19.0418 36.0612C18.9937 35.904 18.9677 35.7371 18.9677 35.5641C18.9677 34.6288 19.7259 33.8706 20.6612 33.8706C20.8341 33.8706 21.001 33.8965 21.1581 33.9447C21.1581 33.9447 22.1825 34.6016 22.1825 35.5641Z" fill="black"/>
<path d="M21.1583 33.9446C21.2061 34.1012 21.2341 34.2711 21.2341 34.4434C21.2341 35.3787 20.4759 36.1369 19.5405 36.1369C19.3684 36.1369 19.1985 36.109 19.0419 36.0612C19.2536 36.755 19.8982 37.2577 20.6613 37.2577C21.5967 37.2577 22.3549 36.4995 22.3549 35.5642C22.3549 34.8009 21.8521 34.1563 21.1583 33.9446Z" fill="black"/>
<path d="M24.7351 20.2758C24.2108 19.6232 22.9571 19.0226 22.9571 19.0226C22.2099 18.9828 21.4502 19.2035 20.8442 19.6827C19.9248 20.4095 19.5331 21.5063 19.6638 22.5499C19.6759 22.646 19.6958 22.7388 19.7228 22.8282L21.5263 23.2576L24.2406 22.6944C25.1889 22.4977 25.3898 21.091 24.7351 20.2758Z" fill="black"/>
<path d="M25.8301 21.3725C25.661 20.7125 25.2744 20.0973 24.6696 19.6403C24.1699 19.2627 23.5628 19.0568 22.9571 19.0226C23.2534 19.3839 23.4759 19.8011 23.5864 20.2323C23.8268 21.1705 23.1746 22.1092 22.2263 22.3059L19.7229 22.8282C19.977 23.67 20.8635 24.1944 21.7558 24.0092L24.47 23.4461C25.4183 23.2494 26.0706 22.3107 25.8301 21.3725Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_124_68">
<rect width="42" height="42" fill="white"/>
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
  ), H = { audio: l.music, youtube: l.youtube, browser: l.browser, cookie: l.cookie }, V = { virus: l.virus, windows: l.windowsBadge, users: l.users, cyber: M }, D = u.map(({ title: t, svg: n, popup: e }) => {
    const i = e.variant === "cybernews", a = i ? "" : (
      /* html */
      `<div class="iaby-hero__badge-popup-media">${e.image ? `<img src="${e.image}" alt="${e.title}" loading="lazy" />` : e.icon || ""}</div>`
    ), s = i ? (
      /* html */
      `
      <div class="iaby-hero__badge-popup-mock">
        <div class="iaby-hero__badge-popup-mock-bar">
          <img src="https://conversionrate-store.github.io/a-b_images/adblock/navbar.webp" alt="Cybernews" loading="lazy" />
        </div>
        <div class="iaby-hero__badge-popup-mock-body">
          <img class="iaby-hero__badge-popup-mock-logo" src="https://conversionrate-store.github.io/a-b_images/adblock/cybernews_logo.webp" alt="Cybernews" loading="lazy" />
          <h4>Is AdBlock360 Safe?</h4>
          <p class="iaby-hero__badge-popup-mock-highlight">Cybernews security testing showed no suspicious connections or hidden data transfers.</p>
          <p class="iaby-hero__badge-popup-mock-muted">All traffic was processed locally rather than sent to external servers — which would be highly suspicious, and evidence of third-party data-gathering.</p>
        </div>
      </div>`
    ) : "", o = e.link ? `<a href="${e.link.url}" target="_blank" rel="noopener" class="iaby-hero__badge-popup-link">${e.link.text}</a>` : "";
    return (
      /* html */
      `
  <div class="iaby-hero__badge" tabindex="0">
    ${n}<span>${t}</span>
    <div class="iaby-hero__badge-popup${i ? " iaby-hero__badge-popup--cybernews" : ""}">
      ${a}${s}
      <h3>${e.title}</h3>
      <p>${e.desc}</p>
      ${o}
    </div>
  </div>`
    );
  }).join(""), A = m.map(
    ({ icon: t, title: n }) => (
      /* html */
      `
  <div class="iaby-hero__benefit">
    ${H[t]}
    <span>${n}</span>
  </div>`
    )
  ).join(""), $ = v.map(
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
  ).join(""), E = L.map(
    ({ icon: t, title: n, titleAccent: e, desc: i, link: a, url: s }) => (
      /* html */
      `
  <div class="iaby-verified__card">
    <div class="iaby-verified__card-top">
      ${V[t]}
    </div>
    <div class="iaby-verified__card-body">
      <h3><span class="accent">${e}</span> ${n}</h3>
      <p>${i}</p>
    </div>
    ${a ? `<a href="${s}" class="iaby-verified__card-link" target="_blank" rel="noopener">${a}</a>` : ""}
  </div>`
    )
  ).join(""), q = k.map(
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
  ).join(""), z = (
    /* html */
    `
<div class="iaby">

  <section class="iaby-hero">
    <div class="iaby-hero__left">
      <div class="iaby-hero__badges">${D}</div>
      <h1 class="iaby-hero__title">You're 3 clicks away from<br> an <span>ad-free PC</span></h1>
      <p class="iaby-hero__desc">Every browser, Spotify, every website — not just YouTube.</p>
      <div class="iaby-hero__benefits">${A}</div>
    </div>

    <div class="iaby-steps">
      <h2 class="iaby-steps__title">How to install</h2>
      <div class="iaby-steps__list">${$}</div>
      <button type="button" class="iaby-steps__restart">${l.download} Didn't start? Restart download</button>
    </div>
  </section>

  <section class="iaby-trustpilot">
    <h2 class="iaby-trustpilot__title">From Trustpilot</h2>
    ${Z}
  </section>

  <section class="iaby-verified">
    <h2 class="iaby-verified__title">Independently verified</h2>
    <div class="iaby-verified__grid">${E}</div>

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
    <div class="iaby-faq__list">${q}</div>
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
  w(["//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"]), x({ name: "Install AdBlock for YouTube v2", dev: "YK" });
  class B {
    constructor() {
      this.init();
    }
    async init() {
      await g("body"), document.head.insertAdjacentHTML("beforeend", `<style class="crs-install-aby-v2-style">${_}</style>`), await g("main"), p("main").elements[0].insertAdjacentHTML("beforebegin", z), h("iaby_view", "Install AdBlock for YouTube v2 viewed", "view", "install_aby_v2"), this.initCtaClicks(), this.initFaq(), this.initTooltip(), this.initCopyHash(), this.initSectionsVisibility(), this.renderTrustpilot(), this.replaceHeaderLogo();
    }
    // The host page's own header (outside <main>, so it stays visible) ships its own logo —
    // swap it for the new one.
    async replaceHeaderLogo() {
      const n = await g(".header__logo img");
      n.src = "https://conversionrate-store.github.io/a-b_images/adblock/new_logo.svg";
    }
    initCtaClicks() {
      p(".iaby-steps__restart").on("click", () => {
        h("iaby_restart_download_click", "Restart download", "click", "install_aby_v2"), this.triggerRealDownload();
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
      p(".iaby-cert__copy-btn").on("click", async function() {
        var i, a, s;
        const n = this, e = ((s = (a = (i = n.closest(".iaby-cert__hash-value")) == null ? void 0 : i.querySelector(".iaby-cert__hash-text")) == null ? void 0 : a.textContent) == null ? void 0 : s.trim()) || "";
        try {
          await navigator.clipboard.writeText(e);
        } catch {
          const o = document.createElement("textarea");
          o.value = e, o.style.position = "fixed", o.style.opacity = "0", document.body.appendChild(o), o.select(), document.execCommand("copy"), o.remove();
        }
        n.classList.add("is-copied"), setTimeout(() => n.classList.remove("is-copied"), 1500), h("iaby_copy_hash_click", "SHA-256 hash copied", "click", "install_aby_v2");
      });
    }
    initFaq() {
      p(".iaby-faq__q").on("click", function() {
        const n = this.closest(".iaby-faq__item"), e = n == null ? void 0 : n.classList.contains("is-open");
        p(".iaby-faq__item").removeClass("is-open"), e || n == null || n.classList.add("is-open"), h("iaby_faq_toggle", "FAQ item toggled", "click", "install_aby_v2");
      });
    }
    initTooltip() {
      p(".iaby-header__info").on("click", (n) => {
        n.stopPropagation(), p(".iaby-header__info").elements[0].classList.toggle("is-open");
      }), document.addEventListener("click", () => {
        p(".iaby-header__info").removeClass("is-open");
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
  new B();
})();
//# sourceMappingURL=index.js.map
