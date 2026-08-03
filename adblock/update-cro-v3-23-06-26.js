(function() {
  "use strict";
  const x = `exit-layer [class*=_popup__logo] img {
  display: none;
}

exit-layer [class*=_popup__logo] svg {
  width: 40px;
  height: 40px;
}

main,
footer {
  display: none !important;
}

.update {
  min-height: unset !important;
  padding-bottom: 0 !important;
  max-width: 1280px !important;
}

.ab360-main {
  display: flex;
  align-items: center;
  gap: 61px;
  width: 100%;
  max-width: 1280px;
  padding: 0 40px;
  margin: 42px auto 0;
  transition: opacity 0.4s ease;
}
.ab360-main__left {
  flex-shrink: 0;
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.ab360-main__header {
  display: flex;
  align-items: center;
  gap: 16px;
}
.ab360-main__logo-link {
  display: flex;
  align-items: center;
  padding: 6px 0 5px;
  text-decoration: none;
}
.ab360-main__logo-link img {
  display: block;
  height: 24px;
  width: 139px;
}
.ab360-main__badge {
  display: flex;
  align-items: center;
  height: 38px;
  padding: 8px 16px;
  background: rgba(27, 134, 250, 0.3);
  border-radius: 8px;
  color: #005dd8;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  white-space: nowrap;
}
.ab360-main__trust {
  width: 420px;
}
.ab360-main__body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 292px;
  width: 100%;
}
.ab360-main__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.ab360-main__title {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  letter-spacing: -0.3px;
  color: #0b1936;
}
.ab360-main__subtitle {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #2e353f;
}
.ab360-main__actions {
  display: flex;
  gap: 24px;
  align-items: center;
  width: 100%;
}
.ab360-main__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  border-radius: 8px;
  border: 1px solid #005dd8;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;
}
.ab360-main__btn--yes {
  flex: 1;
  background: #005dd8;
  color: #fff;
}
.ab360-main__btn--no {
  width: 260px;
  background: transparent;
  color: #005dd8;
}
.ab360-main__right {
  flex: 1;
}
.ab360-main__right img {
  width: 100%;
}

.ab360-yes {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 60px;
  gap: 60px;
  padding-bottom: 60px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.ab360-s1 {
  display: flex;
  gap: 61px;
  align-items: flex-end;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
}
.ab360-s1__left {
  flex-shrink: 0;
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.ab360-s1__header {
  display: flex;
  align-items: center;
  gap: 16px;
}
.ab360-s1__logo-link {
  display: flex;
  align-items: center;
  padding: 6px 0 5px;
  text-decoration: none;
}
.ab360-s1__badge {
  display: flex;
  align-items: center;
  height: 38px;
  padding: 8px 16px;
  background: rgba(27, 134, 250, 0.3);
  border-radius: 8px;
  color: #005dd8;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  white-space: nowrap;
}
.ab360-s1__body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 332px;
}
.ab360-s1__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.ab360-s1__title {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  letter-spacing: -0.3px;
  color: #0b1936;
}
.ab360-s1__subtitle {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #2e353f;
}
.ab360-s1__actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.ab360-s1__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  padding: 18px;
  background: #005dd8;
  border: 1px solid #005dd8;
  border-radius: 8px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;
}
.ab360-s1__btn svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
.ab360-s1__trust {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #2e353f;
  justify-content: center;
}
.ab360-s1__trust svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
.ab360-s1__right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.ab360-s1__table {
  width: 540px;
  background: #fbfbfb;
  border: 1px solid #e7e7e9;
  border-radius: 8px;
  overflow: hidden;
}
.ab360-s1__table-head {
  display: grid;
  grid-template-columns: 1fr 148px 108px;
  align-items: center;
  height: 67px;
  padding: 0 20px;
}
.ab360-s1__table-head img {
  display: block;
  width: 140px;
  height: 23px;
  -o-object-fit: contain;
     object-fit: contain;
}
.ab360-s1__table-head svg {
  display: block;
  width: 132px;
  height: 23px;
}
.ab360-s1__table-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ab360-s1__row {
  display: grid;
  grid-template-columns: 1fr 148px 108px;
  align-items: center;
  height: 56px;
  padding: 0 20px;
  background: #fff;
}
.ab360-s1__row--alt {
  background: #f3f5f5;
}
.ab360-s1__row--last {
  border-radius: 0 0 8px 8px;
}
.ab360-s1__row-label {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #262a2e;
}
.ab360-s1__row-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ab360-s1__row-icon svg {
  display: block;
}
.ab360-s1__trustpilot {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
}

.ab360-s2 {
  background: radial-gradient(ellipse at bottom right, #5d52cc 0%, #3b3c8c 25%, #2a316b 37%, #19264b 50%, #0b1936 100%);
  padding: 80px 120px;
  border-radius: 8px;
}
.ab360-s2__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
}
.ab360-s2__badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 260px;
}
.ab360-s2__badge-icon {
  display: block;
  width: 90px;
  height: 90px;
  -o-object-fit: contain;
     object-fit: contain;
}
.ab360-s2__badge-icon--wide {
  width: auto;
}
.ab360-s2__badge-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  color: #fff;
  width: 260px;
}
.ab360-s2__badge-title {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
}
.ab360-s2__badge-desc {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}
.ab360-s2__badge-link {
  color: #fff;
  font-weight: 700;
  text-decoration: underline;
}

.ab360-s3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
}
.ab360-s3__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}
.ab360-s3__title {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 46px;
  line-height: 58px;
  letter-spacing: -0.3px;
  color: #0b1936;
}
.ab360-s3__subtitle {
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #2e353f;
}
.ab360-s3__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 100%;
}
.ab360-s3__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
  padding: 40px;
  background: #f3f5f5;
  border-radius: 8px;
  box-sizing: border-box;
}
.ab360-s3__card-img {
  display: block;
  width: 100%;
  height: 160px;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 4px;
}
.ab360-s3__card-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;
  width: 100%;
}
.ab360-s3__card-title {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;
  color: #0b1936;
}
.ab360-s3__card-desc {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #2e353f;
}
.ab360-s3__features {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}
.ab360-s3__feature {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
}
.ab360-s3__feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 86px;
  background: #e8eaee;
  border-radius: 8px;
  padding: 18px;
  box-sizing: border-box;
  flex-shrink: 0;
}
.ab360-s3__feature-icon svg {
  width: 50px;
  height: 50px;
}
.ab360-s3__feature-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ab360-s3__feature-title {
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0b1936;
}
.ab360-s3__feature-desc {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #2e353f;
}

.ab360-s4 {
  background: #f3f5f5;
  border-radius: 8px;
  padding: 90px 120px;
}
.ab360-s4__inner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
}
.ab360-s4__left {
  display: flex;
  flex-direction: column;
  gap: 41px;
  width: 490px;
  flex-shrink: 0;
}
.ab360-s4__intro {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.ab360-s4__title {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 46px;
  line-height: 58px;
  letter-spacing: -0.3px;
  color: #0b1936;
}
.ab360-s4__desc {
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #2e353f;
}
.ab360-s4__review {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.ab360-s4__review-title {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;
  color: #0b1936;
}
.ab360-s4__review-desc {
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #2e353f;
}
.ab360-s4__review-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ab360-s4__review-label {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: #2e353f;
}
.ab360-s4__review-link {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: #1b86fa;
  text-decoration: underline;
}
.ab360-s4__right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}
.ab360-s4__mockup {
  display: block;
  width: 100%;
  max-width: 700px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
}

.ab360-s5 {
  display: flex;
  justify-content: center;
  padding: 10px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
}
.ab360-s5__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 600px;
}
.ab360-s5__main {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
}
.ab360-s5__icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
}
.ab360-s5__icon svg {
  width: 50px;
  height: 50px;
}
.ab360-s5__body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ab360-s5__title {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;
  color: #0b1936;
}
.ab360-s5__desc {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #2e353f;
}
.ab360-s5__more {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 70px;
  width: 100%;
}
.ab360-s5__more-title {
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0b1936;
}
.ab360-s5__more-text {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2e353f;
}
.ab360-s5__more-link {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  color: #1b86fa;
  text-decoration: underline;
}/*# sourceMappingURL=style.css.map */`, m = (i, e, n, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: e,
      event_type: n,
      event_loc: s
    }), b(`Event: ${i} | ${e} | ${n} | ${s}`, "success");
  }, h = (i) => new Promise((e) => {
    const n = document.querySelector(i);
    n && e(n);
    const s = new MutationObserver(() => {
      const a = document.querySelector(i);
      a && (e(a), s.disconnect());
    });
    s.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), u = ({ name: i, dev: e }) => {
    const n = i.toLowerCase().replace(/\s/g, "_");
    m(`${n}_started`, `Experiment ${i} started`, "other", n), console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class f {
    constructor(e) {
      this.elements = e instanceof f ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, n, s) {
      return typeof n == "function" && (s = n, n = ""), this.elements.forEach((a) => {
        a.addEventListener(e, function(l) {
          var _;
          if (n !== "") {
            let o = (_ = l.target) == null ? void 0 : _.closest(n);
            o && (s == null || s.call(o, l));
          } else
            s == null || s.call(a, l);
        });
      }), this;
    }
    addClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.add(e);
      }), this;
    }
    removeClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.remove(e);
      }), this;
    }
    toggleClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.toggle(e);
      }), this;
    }
    each(e) {
      for (let n of this.elements)
        e(new f(n), this.elements.indexOf(n));
      return this;
    }
    style(e, n) {
      const s = e.split("-").map((a, l) => l === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1)).join("");
      return this.elements.forEach(function(a) {
        a.style[s] = n;
      }), this;
    }
    find(e) {
      const n = this.elements.map((s) => Array.from(s.querySelectorAll(e)));
      return new f(n.flat());
    }
    attr(e, n) {
      return n ? (this.elements.forEach(function(s) {
        s.setAttribute(e, n);
      }), this) : this.elements[0].getAttribute(e);
    }
    text(e) {
      return e ? (this.elements.forEach(function(n) {
        n.textContent = e;
      }), this) : this.elements[0].textContent || "";
    }
    html(e) {
      return e ? (this.elements.forEach(function(n) {
        n.innerHTML = e;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const p = (i) => new f(i), w = async (i) => {
    const e = (n) => new Promise((s, a) => {
      const l = n.split(".").pop();
      if (l === "js") {
        if (Array.from(document.scripts).map((d) => d.src.toLowerCase()).includes(n.toLowerCase()))
          return b(`Script ${n} allready downloaded!`, "success"), s("");
        const o = document.createElement("script");
        o.src = n, o.onload = s, o.onerror = a, document.head.appendChild(o);
      } else if (l === "css") {
        if (Array.from(document.styleSheets).map((d) => {
          var c;
          return (c = d.href) == null ? void 0 : c.toLowerCase();
        }).includes(n.toLowerCase()))
          return b(`Style ${n} allready downloaded!`, "success"), s("");
        const o = document.createElement("link");
        o.rel = "stylesheet", o.href = n, o.onload = s, o.onerror = a, document.head.appendChild(o);
      }
    });
    for (const n of i)
      b(n), await e(n), b(`Loaded librari ${n}`);
    b("All libraries loaded!", "success");
  }, b = (i, e = "info") => {
    let n;
    switch (e) {
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
  }, r = "https://conversionrate-store.github.io/a-b_images/adblock/", v = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M6.34629 0.133628C2.82149 0.383228 2.32229 0.558428 1.29669 2.08323C0.371894 3.43443 0.196694 4.95843 0.0462943 12.7336C-0.153706 24.0832 0.246294 27.0336 2.19669 28.6832C2.97189 29.3336 2.87189 29.3088 9.09669 29.7832C12.2967 30.0336 17.1463 30.0336 20.3463 29.7832C26.8967 29.2832 26.4463 29.3584 27.4967 28.4336C28.8471 27.2336 29.1471 25.9832 29.4967 20.408C29.9215 13.384 29.4215 4.48323 28.4967 2.65843C27.6967 1.08323 26.8967 0.533628 25.1463 0.308028C22.5223 0.00802763 9.77189 -0.115972 6.34629 0.133628ZM23.0463 3.50803C24.2223 3.70803 25.3463 4.78323 25.7463 6.05843C26.1223 7.30883 26.3223 18.1584 26.0215 20.9832C25.7719 23.5088 25.2471 24.8832 24.2967 25.4832C23.2967 26.1584 16.0967 26.5088 10.4719 26.1832C5.42149 25.9088 4.99669 25.7584 4.14629 24.0584C3.42149 22.608 3.04629 15.6832 3.42149 10.4832C3.84629 4.28323 4.27189 3.68323 8.37189 3.35843C11.0215 3.13363 21.4719 3.25843 23.0463 3.50883V3.50803Z" fill="#d61717"/>
<path d="M7.72266 14.6084V22.4828L11.4227 18.7828C13.4475 16.758 15.1979 15.1084 15.2979 15.1084C15.3979 15.1084 15.4723 16.758 15.4723 18.7828V22.4828L19.3979 18.5332L23.3475 14.6076L19.3979 10.6828L15.4723 6.73322V10.4332C15.4723 12.458 15.3979 14.1084 15.2979 14.1084C15.1979 14.1084 13.4475 12.458 11.4227 10.4324L7.72266 6.73242V14.6084Z" fill="#d61717"/>
</svg>`, t = {
    greenCheck: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
<path d="M14.3165 0.298415C14.7016 -0.0994735 15.326 -0.0994702 15.7111 0.298415C16.0963 0.696306 16.0963 1.34126 15.7111 1.73915L6.06724 11.7016C5.68207 12.0995 5.05774 12.0995 4.67257 11.7016L0.288876 7.17308C-0.096292 6.77519 -0.096292 6.13024 0.288876 5.73235C0.674044 5.33446 1.29838 5.33446 1.68354 5.73235L5.36991 9.54048L14.3165 0.298415Z" fill="#0BA43F"/>
</svg>`,
    redCross: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M13.8661 0.366117C14.3543 -0.122039 15.1455 -0.122039 15.6337 0.366117C16.1218 0.854279 16.1218 1.64557 15.6337 2.13369L9.76748 7.99991L15.6337 13.8661C16.1218 14.3543 16.1218 15.1456 15.6337 15.6337C15.1456 16.1218 14.3543 16.1218 13.8661 15.6337L7.9999 9.76748L2.13369 15.6337C1.64557 16.1218 0.854278 16.1218 0.366116 15.6337C-0.122039 15.1455 -0.122038 14.3543 0.366116 13.8661L6.23233 7.99991L0.366116 2.13369C-0.122039 1.64554 -0.122038 0.854272 0.366116 0.366117C0.854271 -0.122039 1.64554 -0.122039 2.13369 0.366117L7.9999 6.23233L13.8661 0.366117Z" fill="#D61717"/>
</svg>`,
    windows: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 5.549L10.195 4.582V11.611L3.007 11.665L3 5.549ZM10.195 12.391V19.496L3.005 18.511V12.391H10.195ZM11.113 4.456L20.998 3V11.533L11.113 11.611V4.456ZM21 12.505L20.998 21L11.113 19.647V12.505H21Z" fill="white"/>
</svg>`,
    trusted: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 1.45117L3 4.72437V11.9995C3 20.2202 11.7334 22.4563 11.8213 22.4783L12 22.5215L12.1787 22.4783C12.2666 22.4563 21 20.2202 21 11.9995V4.72437L12 1.45117ZM19.5 11.9995C19.5 18.5085 13.1931 20.6296 12.0029 20.9717C10.8552 20.6318 4.5 18.4529 4.5 11.9995V5.77466L12 3.04785L19.5 5.77466V11.9995Z" fill="#2E353F"/>
<path d="M8.03027 11.4688L6.96973 12.5293L10.5 16.0596L17.0303 9.5293L15.9697 8.46875L10.5 13.9385L8.03027 11.4688Z" fill="#2E353F"/>
</svg>`,
    popups: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<g clip-path="url(#clip0_912_2281)">
<path d="M7.2653 42.7952L18.2906 31.4879L18.3665 37.4862L20.0355 37.4653L19.9345 29.4525C19.9287 28.9952 19.5565 28.6289 19.1 28.6289C19.0967 28.6289 19.0925 28.6289 19.0892 28.6289L11.0764 28.7299L11.0973 30.3989L17.0947 30.3229L6.07031 41.6302L7.2653 42.7952Z" fill="black"/>
<path d="M33.8952 47.0101H1.66898V21.5398H9.36212V19.8709H1.66898V16.1123H9.2553V14.4434H0.834488C0.373016 14.4434 0 14.8172 0 15.2778V47.8446C0 48.306 0.373016 48.6791 0.834488 48.6791H34.7297C35.1912 48.6791 35.5642 48.306 35.5642 47.8446V39.3528H33.8952V47.0101Z" fill="black"/>
<path d="M50.0002 6.36062C50.0002 3.58177 47.7388 1.32031 44.9599 1.32031C43.1558 1.32031 41.5068 2.29499 40.6022 3.8438H11.8032C11.3418 3.8438 10.9688 4.21765 10.9688 4.67829V26.9808H12.6377V10.8877H42.7594C42.9129 10.9628 43.069 11.0321 43.23 11.0905C43.301 11.1164 43.3727 11.1372 43.4445 11.1598C43.6231 11.2157 43.8042 11.2616 43.9886 11.2974C44.0353 11.3066 44.0787 11.3242 44.1263 11.3325V36.1018H21.6285V37.7707H44.9608C45.4222 37.7707 45.7953 37.3977 45.7953 36.9362V11.3258C48.1769 10.9261 50.0002 8.8549 50.0002 6.36062ZM12.6377 5.51278H39.9906C39.9856 5.54199 39.9872 5.57286 39.9831 5.60207C39.9455 5.85242 39.9205 6.10443 39.9205 6.36062C39.9205 7.39956 40.2518 8.38842 40.8259 9.21874H12.6377V5.51278ZM44.9599 9.73195C44.39 9.73195 43.8309 9.59009 43.346 9.32388C42.262 8.72305 41.5894 7.58815 41.5894 6.36145C41.5894 5.89497 41.6829 5.44018 41.8665 5.00958C42.4139 3.78205 43.6273 2.98929 44.9599 2.98929C46.8183 2.98929 48.3313 4.50138 48.3313 6.36062C48.3313 8.21986 46.8183 9.73195 44.9599 9.73195Z" fill="black"/>
<path d="M46.0522 4.08984L44.9598 5.18219L43.8675 4.08984L42.6875 5.26981L43.7798 6.36215L42.6875 7.4545L43.8675 8.63446L44.9598 7.54212L46.0522 8.63446L47.233 7.4545L46.1406 6.36215L47.233 5.26981L46.0522 4.08984Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_912_2281">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>`,
    noAd: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<path d="M20.9756 41.0913C20.6234 41.0913 20.2712 41.0302 19.93 40.908C19.1523 40.6291 18.5289 40.0636 18.1767 39.3169L14.74 32.0402C14.53 31.5969 14.72 31.0669 15.1645 30.8569C15.6078 30.6469 16.1378 30.8369 16.3478 31.2813L19.7845 38.5569C19.9345 38.8747 20.2 39.1147 20.53 39.2336C20.8612 39.3525 21.2178 39.3347 21.5356 39.1847C22.1912 38.8747 22.4734 38.0891 22.1634 37.4325L18.8667 30.4525C18.6567 30.0091 18.8467 29.4791 19.2912 29.2691C19.7356 29.0591 20.2645 29.2491 20.4745 29.6936L23.7712 36.6736C24.5 38.2158 23.8378 40.0636 22.2945 40.7925C21.8756 40.9913 21.4267 41.0913 20.9756 41.0913Z" fill="black"/>
<path d="M15.446 32.5554C14.9072 32.5554 14.366 32.4621 13.8438 32.2754C12.6516 31.8477 11.6972 30.9821 11.1572 29.8377C10.0405 27.4743 11.056 24.6432 13.4194 23.5265L18.0805 21.3254C18.2938 21.2243 18.5383 21.2132 18.7605 21.2921C18.9827 21.371 19.1638 21.5365 19.2649 21.7488L22.5549 28.7143C22.7649 29.1577 22.5749 29.6877 22.1305 29.8977L17.4694 32.0988C16.8249 32.4021 16.1372 32.5554 15.446 32.5554ZM18.0349 23.311L14.1783 25.1332C12.7016 25.831 12.0672 27.5999 12.7649 29.0777C13.1027 29.7932 13.6994 30.3343 14.4449 30.601C15.1905 30.8677 15.9938 30.8288 16.7094 30.491L20.566 28.6688L18.0349 23.311Z" fill="black"/>
<path d="M21.7493 29.9826C21.4082 29.9826 21.0937 29.7859 20.946 29.4737L17.656 22.5081C17.4948 22.1681 17.566 21.7637 17.8326 21.4981L26.6637 12.7081C26.8682 12.5048 27.1593 12.4126 27.4437 12.4626C27.7282 12.5126 27.9704 12.697 28.0937 12.9581L34.9504 27.4759C35.0737 27.737 35.0626 28.0426 34.9204 28.2937C34.7782 28.5448 34.5226 28.7115 34.2348 28.7404L21.8371 29.9792C21.8082 29.9815 21.7782 29.9826 21.7493 29.9826ZM19.5304 22.3159L22.2848 28.147L32.806 27.097L27.0248 14.857L19.5304 22.3159Z" fill="black"/>
<path d="M35.076 30.7094C34.7427 30.7094 34.4238 30.5217 34.2716 30.2005L25.5583 11.7539C25.4572 11.5405 25.446 11.2961 25.5249 11.0739C25.6049 10.8517 25.7694 10.6705 25.9816 10.5694L29.3138 8.99499C29.5272 8.89499 29.7716 8.88277 29.9938 8.96166C30.216 9.04166 30.3972 9.2061 30.4972 9.41833L39.2105 27.865C39.3116 28.0783 39.3227 28.3228 39.2438 28.545C39.1649 28.7672 38.9994 28.9483 38.7872 29.0483L35.4549 30.6228C35.3327 30.6817 35.2027 30.7094 35.076 30.7094ZM27.546 11.7972L35.4994 28.6361L37.2249 27.8217L29.2716 10.9828L27.546 11.7972Z" fill="black"/>
<path d="M25 48.1109C12.2567 48.1109 1.88889 37.7431 1.88889 24.9998C1.88889 12.2564 12.2567 1.88867 25 1.88867C37.7433 1.88867 48.1111 12.2564 48.1111 24.9998C48.1111 37.7431 37.7433 48.1109 25 48.1109ZM25 3.66645C13.2367 3.66645 3.66666 13.2364 3.66666 24.9998C3.66666 36.7631 13.2367 46.3331 25 46.3331C36.7633 46.3331 46.3333 36.7631 46.3333 24.9998C46.3333 13.2364 36.7633 3.66645 25 3.66645Z" fill="black"/>
<path d="M40.7133 41.6018C40.4856 41.6018 40.2578 41.5151 40.0844 41.3418L8.65778 9.9151C8.31 9.56844 8.31 9.0051 8.65778 8.65844C9.00444 8.31177 9.56778 8.31177 9.91444 8.65844L41.3411 40.0851C41.6878 40.4329 41.6878 40.9951 41.3411 41.3418C41.1689 41.5151 40.9411 41.6018 40.7133 41.6018Z" fill="black"/>
</svg>`,
    pageLoads: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<g clip-path="url(#clip0_912_2310)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.3186 43.1044H48.9577C49.3889 43.1044 49.7389 42.7549 49.7389 42.3232V10.4221C49.7389 8.83203 49.1072 7.30651 47.9827 6.18203C46.8582 5.05755 45.3327 4.42578 43.7426 4.42578C34.5275 4.42578 15.4712 4.42578 6.25612 4.42578C4.66602 4.42578 3.1405 5.05755 2.01602 6.18203C0.891537 7.30651 0.259766 8.83203 0.259766 10.4221V42.3232C0.259766 42.7549 0.609766 43.1044 1.04102 43.1044H20.304C20.7353 43.1044 21.0853 42.7544 21.0853 42.3232C21.0853 41.8924 20.7353 41.5419 20.304 41.5419H1.82227V10.4221C1.82227 9.24609 2.28945 8.11849 3.1207 7.28672C3.95247 6.45547 5.08008 5.98828 6.25612 5.98828H43.7426C44.9186 5.98828 46.0462 6.45547 46.878 7.28672C47.7093 8.11849 48.1764 9.24609 48.1764 10.4221V41.5419H29.3186C28.8874 41.5419 28.5374 41.8924 28.5374 42.3232C28.5374 42.7544 28.8874 43.1044 29.3186 43.1044Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2617 18.1445H7.04297C6.61224 18.1445 6.26172 18.4945 6.26172 18.9258C6.26172 19.357 6.61224 19.707 7.04297 19.707H11.2617C11.693 19.707 12.043 19.357 12.043 18.9258C12.043 18.4945 11.693 18.1445 11.2617 18.1445Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2611 20.9668H4.38867C3.95742 20.9668 3.60742 21.3168 3.60742 21.748C3.60742 22.1793 3.95742 22.5293 4.38867 22.5293H11.2611C11.6923 22.5293 12.0423 22.1793 12.0423 21.748C12.0423 21.3168 11.6923 20.9668 11.2611 20.9668Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.04102 16.0273H48.9577C49.3889 16.0273 49.7389 15.6773 49.7389 15.2461C49.7389 14.8148 49.3889 14.4648 48.9577 14.4648H1.04102C0.609766 14.4648 0.259766 14.8148 0.259766 15.2461C0.259766 15.6773 0.609766 16.0273 1.04102 16.0273Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.6398 7.75391C33.2758 7.75391 32.168 8.86172 32.168 10.2258C32.168 11.5904 33.2758 12.6977 34.6398 12.6977C36.0044 12.6977 37.1122 11.5904 37.1122 10.2258C37.1122 8.86172 36.0044 7.75391 34.6398 7.75391ZM34.6398 9.31641C35.1419 9.31641 35.5497 9.7237 35.5497 10.2258C35.5497 10.7279 35.1419 11.1352 34.6398 11.1352C34.1383 11.1352 33.7305 10.7279 33.7305 10.2258C33.7305 9.7237 34.1383 9.31641 34.6398 9.31641Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.5871 7.75391C40.223 7.75391 39.1152 8.86172 39.1152 10.2258C39.1152 11.5904 40.223 12.6977 41.5871 12.6977C42.9517 12.6977 44.0595 11.5904 44.0595 10.2258C44.0595 8.86172 42.9517 7.75391 41.5871 7.75391ZM41.5871 9.31641C42.0892 9.31641 42.497 9.7237 42.497 10.2258C42.497 10.7279 42.0892 11.1352 41.5871 11.1352C41.0855 11.1352 40.6777 10.7279 40.6777 10.2258C40.6777 9.7237 41.0855 9.31641 41.5871 9.31641Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.6792 27.524C41.3313 30.2604 43.1714 33.7896 43.8068 37.7193H30.0527C29.6214 37.7193 29.2714 38.0693 29.2714 38.5005C29.2714 38.9318 29.6214 39.2818 30.0527 39.2818H44.7032C44.9256 39.2818 45.1376 39.187 45.286 39.0208C45.4344 38.8542 45.5047 38.6328 45.4792 38.4115C44.9485 33.7812 42.8818 29.6151 39.8011 26.4365C39.5011 26.1271 39.0063 26.1193 38.6964 26.4193C38.387 26.7193 38.3792 27.2146 38.6792 27.524ZM19.749 37.7193H6.19121C7.65683 28.6563 15.5251 21.7266 24.999 21.7266C29.6667 21.7266 33.9449 23.4094 37.2594 26.2C37.5891 26.4781 38.0824 26.4354 38.3605 26.1057C38.6381 25.776 38.5959 25.2828 38.2657 25.0052C34.6792 21.9849 30.0501 20.1641 24.999 20.1641C14.4219 20.1641 5.69537 28.1474 4.51881 38.4115C4.49329 38.6328 4.5636 38.8542 4.71204 39.0208C4.86048 39.187 5.07246 39.2818 5.29485 39.2818H19.749C20.1803 39.2818 20.5303 38.9318 20.5303 38.5005C20.5303 38.0693 20.1803 37.7193 19.749 37.7193Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.7034 38.6776L43.6258 22.2369C43.8701 21.926 43.8435 21.4812 43.5638 21.2015C43.2841 20.9218 42.8398 20.8953 42.5289 21.1396L26.0878 34.0619C24.2628 33.7151 22.3034 34.2479 20.8914 35.6599C18.6247 37.9265 18.6247 41.6073 20.8914 43.8739C23.1586 46.1406 26.8388 46.1406 29.106 43.8739C30.5174 42.4625 31.0503 40.5026 30.7034 38.6776ZM29.2461 38.0041C29.0945 38.1963 29.0424 38.4484 29.1044 38.6849C29.4742 40.0968 29.107 41.663 28.0008 42.7687C26.344 44.426 23.6534 44.426 21.9966 42.7687C20.3393 41.1119 20.3393 38.4213 21.9966 36.7645C23.1023 35.6588 24.6685 35.2911 26.0805 35.6609C26.3174 35.7229 26.569 35.6708 26.7612 35.5198L38.369 26.3963L29.2461 38.0041Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_912_2310">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>`,
    phishing: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<g clip-path="url(#clip0_912_2327)">
<path d="M12.5657 22.6983C12.2231 22.3558 11.6678 22.3558 11.3252 22.6983L8.56562 25.4579L5.80605 22.6983C5.46348 22.3558 4.90811 22.3558 4.56553 22.6983C4.22295 23.0409 4.22295 23.5963 4.56553 23.9389L7.3251 26.6984L4.56553 29.458C4.22295 29.8006 4.22295 30.356 4.56553 30.6985C4.73682 30.8698 4.96133 30.9555 5.18584 30.9555C5.41035 30.9555 5.63486 30.8698 5.80615 30.6985L8.56572 27.939L11.3253 30.6985C11.4966 30.8698 11.7211 30.9555 11.9456 30.9555C12.1701 30.9555 12.3946 30.8698 12.5659 30.6985C12.9085 30.356 12.9085 29.8006 12.5659 29.458L9.80635 26.6984L12.5659 23.9389C12.9082 23.5964 12.9082 23.0409 12.5657 22.6983Z" fill="black"/>
<path d="M21.5243 30.6985C21.6956 30.8698 21.9201 30.9555 22.1446 30.9555C22.3691 30.9555 22.5937 30.8698 22.7649 30.6985C23.1075 30.356 23.1075 29.8006 22.7649 29.458L20.0054 26.6984L22.7649 23.9389C23.1075 23.5963 23.1075 23.0409 22.7649 22.6983C22.4224 22.3558 21.867 22.3558 21.5244 22.6983L18.7648 25.4579L16.0053 22.6983C15.6627 22.3558 15.1073 22.3558 14.7647 22.6983C14.4222 23.0409 14.4222 23.5963 14.7647 23.9389L17.5243 26.6984L14.7647 29.458C14.4222 29.8006 14.4222 30.356 14.7647 30.6985C14.936 30.8698 15.1605 30.9555 15.3851 30.9555C15.6096 30.9555 15.8341 30.8698 16.0054 30.6985L18.7649 27.939L21.5243 30.6985Z" fill="black"/>
<path d="M24.9639 30.6985C25.1352 30.8698 25.3597 30.9555 25.5843 30.9555C25.8088 30.9555 26.0333 30.8698 26.2046 30.6985L28.9641 27.939L31.7237 30.6985C31.895 30.8698 32.1195 30.9555 32.344 30.9555C32.5685 30.9555 32.793 30.8698 32.9643 30.6985C33.3069 30.356 33.3069 29.8006 32.9643 29.458L30.2048 26.6984L32.9643 23.9389C33.3069 23.5963 33.3069 23.0409 32.9643 22.6983C32.6218 22.3558 32.0664 22.3558 31.7238 22.6983L28.9642 25.4579L26.2047 22.6983C25.8621 22.3558 25.3067 22.3558 24.9641 22.6983C24.6216 23.0409 24.6216 23.5963 24.9641 23.9389L27.7237 26.6984L24.9641 29.458C24.6214 29.8006 24.6214 30.356 24.9639 30.6985Z" fill="black"/>
<path d="M47.807 9.64883H43.7068C43.4058 9.01387 43.0007 8.43945 42.4997 7.93848C41.936 7.3748 41.2795 6.93223 40.5481 6.62295C40.061 6.41689 39.5547 6.27656 39.035 6.20234V1.7541C39.035 1.26963 38.6422 0.876953 38.1578 0.876953C37.6734 0.876953 37.2807 1.26973 37.2807 1.7541V6.20244C36.7609 6.27666 36.2546 6.41699 35.7675 6.62305C35.0361 6.93232 34.3796 7.375 33.8159 7.93857C33.3117 8.44277 32.9047 9.02148 32.603 9.66143C32.5552 9.65332 32.5062 9.64893 32.4561 9.64893H2.19297C0.983789 9.64883 0 10.6326 0 11.8418V46.9295C0 48.1387 0.983789 49.1225 2.19297 49.1225H47.807C49.0162 49.1225 50 48.1387 50 46.9295V11.8418C50 10.6326 49.0162 9.64883 47.807 9.64883ZM38.1579 7.89443C40.5764 7.89443 42.5438 9.86201 42.5438 12.2804C42.5438 14.6987 40.5763 16.6663 38.1579 16.6663C35.7396 16.6663 33.772 14.6987 33.772 12.2804C33.772 9.86201 35.7395 7.89443 38.1579 7.89443ZM48.2456 46.9295C48.2456 47.1713 48.0488 47.3681 47.807 47.3681H2.19297C1.95117 47.3681 1.75439 47.1713 1.75439 46.9295V19.2979H31.579C32.0635 19.2979 32.4562 18.9052 32.4562 18.4208C32.4562 17.9364 32.0634 17.5437 31.579 17.5437H1.75439V11.8419C1.75439 11.6 1.95117 11.4033 2.19297 11.4033H32.0799C32.0387 11.692 32.0176 11.9847 32.0176 12.2805C32.0176 13.109 32.1801 13.9133 32.5005 14.6708C32.8098 15.4021 33.2524 16.0587 33.816 16.6224C34.3797 17.186 35.0362 17.6286 35.7676 17.9379C36.2547 18.1439 36.761 18.2843 37.2808 18.3585V34.8682C37.2808 39.826 33.2473 43.8594 28.2896 43.8594C23.553 43.8594 19.6602 40.1779 19.3222 35.5261H25.4387C25.9231 35.5261 26.3158 35.1333 26.3158 34.6489C26.3158 34.1646 25.923 33.7718 25.4387 33.7718H18.4211C17.9366 33.7718 17.5439 34.1646 17.5439 34.6489V34.8683C17.5439 36.3186 17.8281 37.7259 18.3888 39.0512C18.9301 40.3309 19.7047 41.48 20.6913 42.4665C21.6779 43.453 22.827 44.2277 24.1066 44.769C25.4319 45.3296 26.8394 45.6139 28.2896 45.6139C29.7397 45.6139 31.1472 45.3296 32.4725 44.769C33.7521 44.2277 34.9013 43.4531 35.8878 42.4665C36.8744 41.48 37.649 40.3309 38.1903 39.0512C38.7509 37.7259 39.0352 36.3185 39.0352 34.8683V18.3584C39.5549 18.2842 40.0612 18.1438 40.5483 17.9378C41.2797 17.6285 41.9362 17.1858 42.4999 16.6223C43.0636 16.0586 43.5062 15.4021 43.8154 14.6707C44.1358 13.9131 44.2983 13.1089 44.2983 12.2804C44.2983 11.9845 44.2772 11.6918 44.236 11.4032H47.8071C48.0489 11.4032 48.2457 11.6 48.2457 11.8418V17.5436H44.7369C44.2524 17.5436 43.8598 17.9363 43.8598 18.4207C43.8598 18.9051 44.2525 19.2979 44.7369 19.2979H48.2457V46.9295H48.2456Z" fill="black"/>
<path d="M5.04434 13.377C4.31885 13.377 3.72852 13.9672 3.72852 14.6928C3.72852 15.4184 4.31875 16.0086 5.04434 16.0086C5.76992 16.0086 6.36016 15.4184 6.36016 14.6928C6.36016 13.9672 5.76992 13.377 5.04434 13.377ZM5.04434 15.1313C4.80254 15.1313 4.60576 14.9346 4.60576 14.6928C4.60576 14.451 4.80254 14.2542 5.04434 14.2542C5.28613 14.2542 5.48291 14.451 5.48291 14.6928C5.48291 14.9346 5.28613 15.1313 5.04434 15.1313Z" fill="black"/>
<path d="M9.4291 13.377C8.70361 13.377 8.11328 13.9672 8.11328 14.6928C8.11328 15.4184 8.70352 16.0086 9.4291 16.0086C10.1547 16.0086 10.7449 15.4184 10.7449 14.6928C10.7449 13.9672 10.1547 13.377 9.4291 13.377ZM9.4291 15.1313C9.1873 15.1313 8.99053 14.9346 8.99053 14.6928C8.99053 14.451 9.1873 14.2542 9.4291 14.2542C9.6709 14.2542 9.86768 14.451 9.86768 14.6928C9.86768 14.9346 9.671 15.1313 9.4291 15.1313Z" fill="black"/>
<path d="M13.8158 13.377C13.0903 13.377 12.5 13.9672 12.5 14.6928C12.5 15.4184 13.0902 16.0086 13.8158 16.0086C14.5413 16.0086 15.1316 15.4184 15.1316 14.6928C15.1316 13.9672 14.5413 13.377 13.8158 13.377ZM13.8158 15.1313C13.574 15.1313 13.3772 14.9346 13.3772 14.6928C13.3772 14.451 13.574 14.2542 13.8158 14.2542C14.0576 14.2542 14.2544 14.451 14.2544 14.6928C14.2544 14.9346 14.0576 15.1313 13.8158 15.1313Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_912_2327">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>`,
    system: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<path d="M43.9494 48.0484H6.04941C3.79941 48.0484 1.89941 46.1984 1.89941 43.8984V6.04844C1.89941 3.79844 3.74941 1.89844 6.04941 1.89844H43.9494C46.1994 1.89844 48.0994 3.74844 48.0994 6.04844V43.9484C48.0494 46.1984 46.1994 48.0484 43.9494 48.0484ZM3.94941 10.3984V43.9484C3.94941 45.0984 4.89941 46.0984 6.09941 46.0984H43.9994C45.1494 46.0984 46.1494 45.1484 46.1494 43.9484V10.3984H3.94941ZM3.94941 8.39844H46.0994V6.09844C46.0994 4.94844 45.1494 3.94844 43.9494 3.94844H6.04941C4.89941 3.94844 3.89941 4.89844 3.89941 6.09844V8.39844H3.94941ZM34.3994 43.1984H15.6494C14.0494 43.1984 12.6994 41.8984 12.6994 40.2484V28.1984C12.6994 26.5984 13.9994 25.2484 15.6494 25.2484H16.7994V20.6484C16.7994 16.0984 20.4994 12.4484 24.9994 12.4484C29.4994 12.4484 33.1994 16.1484 33.1994 20.6484V25.2484H34.3494C35.9494 25.2484 37.2994 26.5484 37.2994 28.1984V40.2484C37.2994 41.8484 35.9994 43.1984 34.3994 43.1984ZM15.6494 27.2484C15.1494 27.2484 14.6994 27.6484 14.6994 28.1984V40.2484C14.6994 40.7484 15.0994 41.1984 15.6494 41.1984H34.3994C34.8994 41.1984 35.3494 40.7984 35.3494 40.2484V28.1984C35.3494 27.6984 34.9494 27.2484 34.3994 27.2484H15.6494ZM30.1994 25.2484H31.1994V20.6484C31.1994 17.1984 28.3994 14.4484 24.9994 14.4484C21.5994 14.4484 18.7994 17.2484 18.7994 20.6484V25.2484H19.7994V20.6484C19.7994 17.7484 22.1494 15.4484 24.9994 15.4484C27.8494 15.4484 30.1994 17.7984 30.1994 20.6484V25.2484ZM21.7994 25.2484H28.2494V20.6484C28.2494 18.8984 26.7994 17.4484 25.0494 17.4484C23.2994 17.4484 21.8494 18.8984 21.8494 20.6484V25.2484H21.7994ZM24.9994 39.1984C24.4494 39.1984 23.9994 38.7484 23.9994 38.1984V36.1484C22.7494 35.7484 21.7994 34.5484 21.7994 33.0984C21.7994 31.3484 23.2494 29.8984 24.9994 29.8984C26.7494 29.8984 28.1994 31.3484 28.1994 33.0984C28.1994 34.4984 27.2994 35.6984 25.9994 36.1484V38.1984C25.9994 38.7484 25.5494 39.1984 24.9994 39.1984ZM24.9994 31.9484C24.3494 31.9484 23.7994 32.4984 23.7994 33.1484C23.7994 33.7984 24.3494 34.3484 24.9994 34.3484C25.6494 34.3484 26.1994 33.7984 26.1994 33.1484C26.1994 32.4984 25.6494 31.9484 24.9994 31.9484ZM42.3994 7.14844H29.2994C28.7494 7.14844 28.2994 6.69844 28.2994 6.14844C28.2994 5.59844 28.7494 5.14844 29.2994 5.14844H42.3494C42.8994 5.14844 43.3494 5.59844 43.3494 6.14844C43.3494 6.69844 42.9494 7.14844 42.3994 7.14844ZM17.7494 7.14844H13.8494C13.2994 7.14844 12.8494 6.69844 12.8494 6.14844C12.8494 5.59844 13.2994 5.14844 13.8494 5.14844H17.7494C18.2994 5.14844 18.7494 5.59844 18.7494 6.14844C18.7494 6.69844 18.2994 7.14844 17.7494 7.14844ZM10.9994 7.14844H6.14941C5.59941 7.14844 5.14941 6.69844 5.14941 6.14844C5.14941 5.59844 5.59941 5.14844 6.14941 5.14844H10.9994C11.5494 5.14844 11.9994 5.59844 11.9994 6.14844C11.9994 6.69844 11.5494 7.14844 10.9994 7.14844Z" fill="#2E353F"/>
</svg>`
  }, y = "https://adblock-for-y.com/_astro/horizontal-aby-logo.Be8n11XS_Z16OF2d.svg", g = r + "new_logo.svg", L = r + "ev_code.webp", k = r + "app_cert.webp", M = r + "no_data.webp", H = r + "cybernews.webp", V = r + "spotify_1.webp", Z = r + "browsers.webp", $ = r + "youtube_1.webp", A = r + "cookies.webp", E = r + "browser_tab.webp", z = (
    /* HTML */
    `
  <section class="ab360-s1">
    <div class="ab360-s1__left">
      <div class="ab360-s1__header">
        <img src="${g}" alt="AdBlock360" class="ab360-s1__logo" />
        <span class="ab360-s1__badge">From the team behind Adblock for Youtube™</span>
      </div>
      <div class="ab360-s1__body">
        <div class="ab360-s1__text">
          <h2 class="ab360-s1__title">Finally, one more install and ads are gone. Everywhere</h2>
          <p class="ab360-s1__subtitle">
            Say goodbye to autoplay videos, flashing banners, and cluttered layouts. AdBlock360 removes distractions so
            you can focus on what matters
          </p>
        </div>
        <div class="ab360-s1__actions">
          <a href="#" class="ab360-s1__btn">
            ${t.windows}
            <span>Download AdBlock360</span>
          </a>
          <div class="ab360-s1__trust">
            ${t.trusted}
            <span>Trusted by 17M users</span>
          </div>
        </div>
      </div>
    </div>
    <div class="ab360-s1__right">
      <div class="ab360-s1__table">
        <div class="ab360-s1__table-head">
          <span></span>
          <span class="ab360-s1__table-col">
            <img src="${y}" alt="Adblock for Youtube™" />
          </span>
          <span class="ab360-s1__table-col">
            <img src="${g}" alt="AdBlock360" />
          </span>
        </div>
        <div class="ab360-s1__row ab360-s1__row--alt">
          <span class="ab360-s1__row-label">YouTube ads</span>
          <span class="ab360-s1__row-icon">${t.greenCheck}</span>
          <span class="ab360-s1__row-icon">${t.greenCheck}</span>
        </div>
        <div class="ab360-s1__row">
          <span class="ab360-s1__row-label">YouTube sponsor segment skip</span>
          <span class="ab360-s1__row-icon">${t.redCross}</span>
          <span class="ab360-s1__row-icon">${t.greenCheck}</span>
        </div>
        <div class="ab360-s1__row ab360-s1__row--alt">
          <span class="ab360-s1__row-label">Spotify &amp; desktop apps</span>
          <span class="ab360-s1__row-icon">${t.redCross}</span>
          <span class="ab360-s1__row-icon">${t.greenCheck}</span>
        </div>
        <div class="ab360-s1__row">
          <span class="ab360-s1__row-label">All browsers</span>
          <span class="ab360-s1__row-icon">${t.redCross}</span>
          <span class="ab360-s1__row-icon">${t.greenCheck}</span>
        </div>
        <div class="ab360-s1__row ab360-s1__row--alt">
          <span class="ab360-s1__row-label">All websites</span>
          <span class="ab360-s1__row-icon">${t.redCross}</span>
          <span class="ab360-s1__row-icon">${t.greenCheck}</span>
        </div>
        <div class="ab360-s1__row ab360-s1__row--last">
          <span class="ab360-s1__row-label">Cookie consent auto-denial</span>
          <span class="ab360-s1__row-icon">${t.redCross}</span>
          <span class="ab360-s1__row-icon">${t.greenCheck}</span>
        </div>
      </div>
    </div>
  </section>
  <section class="ab360-s1__trustpilot">
    <!-- TrustBox widget - Carousel -->
    <div
      class="trustpilot-widget-2"
      data-locale="en"
      data-template-id="53aa8912dec7e10d38f59f36"
      data-businessunit-id="695876155fb698cf3a93bf94"
      data-style-height="140px"
      data-style-width="100%"
      data-token="0a8f5b61-a60c-429d-9f03-1e64fb80da6a"
      data-stars="1,2,3,4,5"
    >
      <a href="https://www.trustpilot.com/review/adblock360.com" target="_blank" rel="noopener">Trustpilot</a>
    </div>
    <!-- End TrustBox widget -->
  </section>
`
  ), S = (
    /* HTML */
    `
  <section class="ab360-s2">
    <div class="ab360-s2__inner">
      <div class="ab360-s2__badge">
        <img src="${L}" alt="EV Code Signed" class="ab360-s2__badge-icon" />
        <div class="ab360-s2__badge-info">
          <h3 class="ab360-s2__badge-title">EV Code Signed</h3>
          <p class="ab360-s2__badge-desc">Your OS verifies our identity<br />before install</p>
        </div>
      </div>
      <div class="ab360-s2__badge">
        <img src="${k}" alt="AppEsteem Certified" class="ab360-s2__badge-icon ab360-s2__badge-icon--wide" />
        <div class="ab360-s2__badge-info">
          <h3 class="ab360-s2__badge-title">AppEsteem Certified</h3>
          <p class="ab360-s2__badge-desc">Independently audited.<br />No bundleware</p>
        </div>
      </div>
      <div class="ab360-s2__badge">
        <img src="${M}" alt="No data collection" class="ab360-s2__badge-icon" />
        <div class="ab360-s2__badge-info">
          <h3 class="ab360-s2__badge-title">No data collection</h3>
          <p class="ab360-s2__badge-desc">Zero personal data collected — only anonymized crash reports</p>
        </div>
      </div>
      <div class="ab360-s2__badge">
        <img src="${H}" alt="Cybernews verified" class="ab360-s2__badge-icon" />
        <div class="ab360-s2__badge-info">
          <h3 class="ab360-s2__badge-title">Cybernews verified</h3>
          <p class="ab360-s2__badge-desc">
            Independent security<br /><a href="https://cybernews.com/adblock360-review/" class="ab360-s2__badge-link"
              >review →</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
`
  ), j = (
    /* HTML */
    `
  <section class="ab360-s3">
    <div class="ab360-s3__header">
      <h2 class="ab360-s3__title">Install once. Never think about ads again</h2>
      <p class="ab360-s3__subtitle">
        Every app, every browser, every website — the way the internet was supposed to feel.
      </p>
    </div>
    <div class="ab360-s3__cards">
      <div class="ab360-s3__card">
        <img src="${V}" alt="" class="ab360-s3__card-img" />
        <div class="ab360-s3__card-body">
          <h3 class="ab360-s3__card-title">No more Spotify interruptions</h3>
          <p class="ab360-s3__card-desc">Blocks audio ads in the desktop app — before they<br />reach your speakers.</p>
        </div>
      </div>
      <div class="ab360-s3__card">
        <img src="${Z}" alt="" class="ab360-s3__card-img" />
        <div class="ab360-s3__card-body">
          <h3 class="ab360-s3__card-title">Every browser. Zero ads</h3>
          <p class="ab360-s3__card-desc">Chrome, Edge, Firefox — blocked simultaneously.<br />No extra extensions.</p>
        </div>
      </div>
      <div class="ab360-s3__card">
        <img src="${$}" alt="" class="ab360-s3__card-img" />
        <div class="ab360-s3__card-body">
          <h3 class="ab360-s3__card-title">YouTube without sponsored segments</h3>
          <p class="ab360-s3__card-desc">
            Blocks pre-rolls, mid-rolls, banners and in-video sponsor<br />segments automatically.
          </p>
        </div>
      </div>
      <div class="ab360-s3__card">
        <img src="${A}" alt="" class="ab360-s3__card-img" />
        <div class="ab360-s3__card-body">
          <h3 class="ab360-s3__card-title">Cookie popups — gone</h3>
          <p class="ab360-s3__card-desc">Every consent banner auto-dismissed.<br />No more "reject all".</p>
        </div>
      </div>
    </div>
    <div class="ab360-s3__features">
      <div class="ab360-s3__feature">
        <div class="ab360-s3__feature-icon">${t.popups}</div>
        <div class="ab360-s3__feature-body">
          <h4 class="ab360-s3__feature-title">Popups &amp; autoplay blocked</h4>
          <p class="ab360-s3__feature-desc">No more tabs hijacking your screen mid-browse.</p>
        </div>
      </div>
      <div class="ab360-s3__feature">
        <div class="ab360-s3__feature-icon">${t.noAd}</div>
        <div class="ab360-s3__feature-body">
          <h4 class="ab360-s3__feature-title">No ad retargeting</h4>
          <p class="ab360-s3__feature-desc">Trackers can't follow you<br />across sites.</p>
        </div>
      </div>
      <div class="ab360-s3__feature">
        <div class="ab360-s3__feature-icon">${t.pageLoads}</div>
        <div class="ab360-s3__feature-body">
          <h4 class="ab360-s3__feature-title">Faster page loads</h4>
          <p class="ab360-s3__feature-desc">Pages without ad scripts load noticeably quicker.</p>
        </div>
      </div>
      <div class="ab360-s3__feature">
        <div class="ab360-s3__feature-icon">${t.phishing}</div>
        <div class="ab360-s3__feature-body">
          <h4 class="ab360-s3__feature-title">Phishing protection</h4>
          <p class="ab360-s3__feature-desc">Malicious sites blocked before<br />they open.</p>
        </div>
      </div>
    </div>
  </section>
`
  ), B = (
    /* HTML */
    `
  <section class="ab360-s4">
    <div class="ab360-s4__inner">
      <div class="ab360-s4__left">
        <div class="ab360-s4__intro">
          <h2 class="ab360-s4__title">Is AdBlock360 Safe?</h2>
          <p class="ab360-s4__desc">
            AdBlock360 is the real app. Fully vetted, zero adware — unlike the fake "AdBlock 360" showing up in your
            search results.
          </p>
        </div>
        <div class="ab360-s4__review">
          <h3 class="ab360-s4__review-title">Reviewed and verified by Cybernews</h3>
          <p class="ab360-s4__review-desc">
            A trusted source for independent software security audits, used by millions of readers worldwide.
          </p>
          <div class="ab360-s4__review-links">
            <p class="ab360-s4__review-label">Read the full review:</p>
            <a href="https://cybernews.com/adblock360-review/" class="ab360-s4__review-link"
              >Cybernews independent security review →</a
            >
          </div>
        </div>
      </div>
      <div class="ab360-s4__right">
        <img src="${E}" alt="Cybernews security review of AdBlock360" class="ab360-s4__mockup" />
      </div>
    </div>
  </section>
`
  ), T = (
    /* HTML */
    `
  <section class="ab360-s5">
    <div class="ab360-s5__content">
      <div class="ab360-s5__main">
        <div class="ab360-s5__icon">${t.system}</div>
        <div class="ab360-s5__body">
          <h3 class="ab360-s5__title">Why does it need system access?</h3>
          <p class="ab360-s5__desc">
            AdBlock360 blocks ads at the network level — covering Spotify, games and every browser at once, not just
            Chrome. The Windows security prompt is normal. Every legitimate system-level app triggers it, including
            AdGuard.
          </p>
        </div>
      </div>
      <div class="ab360-s5__more">
        <h4 class="ab360-s5__more-title">Have more questions?</h4>
        <p class="ab360-s5__more-text">
          Read our
          <a href="https://adblock360.com/privacy-policy" class="ab360-s5__more-link"
            >privacy policy — written in plain language, not legalese →</a
          >
        </p>
      </div>
    </div>
  </section>
`
  ), q = (
    /* HTML */
    `
  <div class="ab360-yes">${z} ${S} ${j} ${B} ${T}</div>
`
  ), F = (
    /* HTML */
    `
  <section class="ab360-main">
    <div class="ab360-main__left">
      <div class="ab360-main__header">
        <img src="${g}" alt="AdBlock360" class="ab360-main__logo" />
        <span class="ab360-main__badge">From the team behind Adblock for Youtube™</span>
      </div>
      <div class="ab360-main__trust">
        <div
          class="trustpilot-widget"
          data-locale="en"
          data-template-id="5419b6ffb0d04a076446a9af"
          data-businessunit-id="695876155fb698cf3a93bf94"
          data-style-height="26px"
          data-style-width="100%"
          data-token="0a8f5b61-a60c-429d-9f03-1e64fb80da6a"
          data-stars="1,2,3,4,5"
        >
          <a href="https://www.trustpilot.com/review/adblock360.com" target="_blank" rel="noopener">Trustpilot</a>
        </div>
      </div>
      <div class="ab360-main__body">
        <div class="ab360-main__text">
          <h2 class="ab360-main__title">Want ads gone everywhere — not just YouTube?</h2>
          <p class="ab360-main__subtitle">Every app, every browser, every website — plus AI YouTube sponsor skip.</p>
        </div>
        <div class="ab360-main__actions">
          <a href="#" class="ab360-main__btn ab360-main__btn--yes">YES</a>
          <a href="#" class="ab360-main__btn ab360-main__btn--no">No, thanks</a>
        </div>
      </div>
    </div>
    <div class="ab360-main__right">
      <img src="${r}hero.webp" alt="AdBlock360" />
    </div>
  </section>
`
  );
  w(["//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"]), u({ name: "Adblock Update V3", dev: "YK" });
  class Y {
    constructor() {
      this.init();
    }
    async init() {
      await h("body"), p("body").elements[0].insertAdjacentHTML("afterbegin", `<style>${x}</style>`), p(".update").elements[0].insertAdjacentHTML("afterend", F), await h(".ab360-main__btn--yes");
      const e = document.querySelector(".ab360-main__btn--yes"), n = document.querySelector(".ab360-main__btn--no");
      p('exit-layer [class*="_popup__logo"]').elements[0].insertAdjacentHTML("afterbegin", v), p("exit-layer h3").elements[0].innerHTML = "AdBlock for YouTube Desktop: Choose what you want to block";
      const s = (a) => new Promise((l) => {
        a.style.opacity = "0", a.addEventListener(
          "transitionend",
          () => {
            a.style.display = "none", l();
          },
          { once: !0 }
        );
      });
      e == null || e.addEventListener("click", (a) => {
        if (a.preventDefault(), !document.querySelector(".ab360-yes")) {
          const l = document.querySelector(".ab360-main");
          s(l).then(() => {
            l.insertAdjacentHTML("afterend", q);
            const _ = document.querySelector(".ab360-yes");
            requestAnimationFrame(
              () => requestAnimationFrame(() => {
                _.style.opacity = "1";
              })
            );
            const o = () => {
              const c = window.Trustpilot, C = document.querySelector(".trustpilot-widget-2");
              c && C ? c.loadFromElement(C, !0) : setTimeout(o, 100);
            };
            o();
            const d = document.querySelector(".ab360-s1__btn");
            d == null || d.addEventListener("click", (c) => {
              c.preventDefault(), p("#main-cta").elements[0].click();
            });
          });
        }
      }), n == null || n.addEventListener("click", (a) => {
        a.preventDefault();
        const l = p(".ab360-main").elements[0];
        s(l);
      });
    }
  }
  new Y();
})();
//# sourceMappingURL=index.js.map
