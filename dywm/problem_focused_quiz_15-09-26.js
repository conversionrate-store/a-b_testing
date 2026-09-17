(function() {
  "use strict";
  const E = `.sfc-frontPageAnon__section--survey {
  display: none !important;
}

[data-sfc-id=quiz_entry] {
  display: none !important;
}

.pfq_entry {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
}
@media (min-width: 64em) {
  .pfq_entry {
    background: #ffffff;
    padding: 40px 60px;
  }
}

.pfq_entry__inner {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 1440px;
  margin: 0 auto;
}
.pfq_entry__inner * {
  box-sizing: border-box;
}
@media (min-width: 64em) {
  .pfq_entry__inner {
    flex-direction: row;
    align-items: center;
  }
}

.pfq_entry__card {
  position: relative;
  z-index: 1;
  width: 100%;
  background: #dfebf0;
  border-radius: 2em;
  padding: 22px 16px;
}
@media (min-width: 64em) {
  .pfq_entry__card {
    width: 47%;
    border-radius: 18px;
    background: #e6eff3;
    padding: 32px 40px;
  }
}

@media (min-width: 64em) {
  .pfq_entry__break {
    display: none;
  }
}

.pfq_entry__header h1 {
  margin: 0;
  color: #2b3635;
  font-size: 1.375rem;
  line-height: 1.25;
  font-weight: 700;
}
@media (min-width: 64em) {
  .pfq_entry__header h1 {
    font-size: 42px;
  }
}
.pfq_entry__header p {
  margin: 16px 0 0;
  color: #5b6362;
  font-size: 0.9rem;
  line-height: 1.5;
}
@media (min-width: 64em) {
  .pfq_entry__header p {
    font-size: 18px;
  }
}

.pfq_entry__question {
  margin-top: 20px;
}
.pfq_entry__question h2 {
  margin: 0 0 12px !important;
  color: #000;
  font-size: 18px !important;
  font-weight: 700;
}

.pfq_entry__options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pfq_entry__option {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4%;
  padding: 12px 16px;
  border: 2px solid #d6d6d6;
  border-radius: 12px;
  background: #f9f9f9;
  cursor: pointer;
  text-align: left;
  font: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.pfq_entry__option:hover, .pfq_entry__option:focus-visible {
  border-color: #007db8;
  box-shadow: 0 0 0 2px rgba(0, 125, 184, 0.15);
  outline: none;
}

.pfq_entry__option-label {
  color: #2b3635;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: capitalize;
}
@media (min-width: 64em) {
  .pfq_entry__option-label {
    font-size: 1rem;
  }
}

.pfq_entry__option-chevron {
  flex-shrink: 0;
  display: flex;
}

.pfq_entry__stats {
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  padding: 16px 20px;
  background: #ecf3f6;
  border-radius: 12px;
}
@media (min-width: 64em) {
  .pfq_entry__stats {
    grid-template-columns: 47% 47%;
    grid-auto-flow: column;
    grid-template-rows: repeat(2, auto);
    row-gap: 12px;
    justify-content: space-between;
  }
}

.pfq_entry__stat {
  display: flex;
  align-items: center;
  gap: 4%;
}
.pfq_entry__stat svg {
  flex-shrink: 0;
  width: 1.5em;
  height: 1.5em;
}
.pfq_entry__stat span {
  color: #2b3635;
  font-size: 0.85rem;
}
.pfq_entry__stat span b {
  font-weight: 700;
}

.pfq_entry__rating {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 3%;
  color: #2b3635;
  font-weight: 600;
  font-size: 14px;
}
@media (min-width: 64em) {
  .pfq_entry__rating {
    justify-content: center;
  }
}

.pfq_entry__rating-stars {
  display: flex;
  gap: 2%;
}

.pfq_entry__image {
  display: none;
}
@media (min-width: 64em) {
  .pfq_entry__image {
    position: relative;
    z-index: 1;
    display: block;
    width: 53%;
    flex-shrink: 0;
    border-radius: 0 12px 12px 0;
    overflow: hidden;
    aspect-ratio: 696/600;
  }
  .pfq_entry__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.pfq_popup {
  position: fixed;
  inset: 0;
  z-index: 999999;
  overflow-y: auto;
  background: #ffffff;
}
.pfq_popup * {
  box-sizing: border-box;
}

.pfq_popup__inner {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
@media (min-width: 64em) {
  .pfq_popup__inner {
    max-width: 34em;
    margin: 0 auto;
  }
}

.pfq_popup__scroll {
  flex: 1;
  padding: 6% 6% 8%;
}

.pfq_popup__footer {
  border-radius: 12px 12px 0 0;
  position: sticky;
  bottom: 0;
  background: #ffffff;
  padding: 16px 20px;
  box-shadow: 0 -0.5em 1.5em rgba(43, 54, 53, 0.1);
}

.pfq_popup__head {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4%;
}

.pfq_popup__back {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.2em !important;
  height: 2.2em !important;
  padding: 0;
  border: none !important;
  border-radius: 50%;
  background: none !important;
  cursor: pointer;
  transition: background 0.2s ease;
  padding: 0 !important;
}
.pfq_popup__back:hover, .pfq_popup__back:focus-visible {
  background: none !important;
  outline: none !important;
  box-shadow: none !important;
}

.pfq_popup__logo {
  display: flex;
  align-items: center;
  gap: 0.4em;
  color: #2b3635;
  font-weight: 700;
  font-size: 1rem;
}

.pfq_popup__logo-mark {
  font-size: 1.2em;
}

.pfq_popup__progress {
  width: 100%;
  height: 0.35em;
  border-radius: 1em;
  background: #e3eceb;
  overflow: hidden;
}

.pfq_popup__progress-bar {
  display: block;
  width: 0%;
  height: 100%;
  background: #007170;
  border-radius: inherit;
  transition: width 0.3s ease;
}

.pfq_popup__step-label {
  margin-top: 3%;
  text-align: center;
  color: #5b6362;
  font-size: 0.8rem;
}
.pfq_popup__step-label b {
  color: #2b3635;
}

.pfq_step {
  display: none;
  margin-top: 6%;
}
.pfq_step.active {
  display: block;
}
.pfq_step h2 {
  margin: 0 0 5%;
  color: #2b3635;
  font-size: 1.2rem;
  font-weight: 700;
}

.pfq_step__options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.pfq_step__option {
  position: relative;
  display: flex;
  flex-direction: row-reverse !important;
  justify-content: space-between !important;
  align-items: center;
  padding: 10px 24px;
  border: 2px solid #d6d6d6;
  border-radius: 12px;
  cursor: pointer;
  background: #f9f9f9;
  transition: border-color 0.2s ease, background 0.2s ease;
}
.pfq_step__option:has(input:checked) {
  border-color: #007170;
  background: #e3eceb;
}
.pfq_step__option input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.pfq_step__option-box {
  order: 0 !important;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.2em;
  height: 1.2em;
  border: 1.5px solid rgba(43, 54, 53, 0.3);
  border-radius: 0.3em;
  background: #ffffff;
}
.pfq_step__option-box svg {
  width: 60%;
  height: 60%;
  opacity: 0;
  transition: opacity 0.15s ease;
}

input[type=radio] ~ .pfq_step__option-box {
  border-radius: 50%;
}

input:checked ~ .pfq_step__option-box {
  border-color: #007170;
  background: #007170;
}
input:checked ~ .pfq_step__option-box svg {
  opacity: 1;
}

.pfq_step__option-text {
  order: 1 !important;
  display: flex;
  flex-direction: column;
  color: #2b3635;
  font-size: 0.9rem;
}
.pfq_step__option-text b {
  font-weight: 600;
}
.pfq_step__option-text i {
  font-style: normal;
  color: #8a9291;
  font-size: 0.8em;
}

.pfq_popup__continue {
  width: 100%;
  padding: 12px !important;
  border: none !important;
  border-radius: 50px !important;
  background: #007170 !important;
  color: #ffffff;
  font-size: 14px !important;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s ease, background 0.2s ease;
}
.pfq_popup__continue:hover:not(:disabled) {
  background: #005f5f;
}
.pfq_popup__continue:disabled {
  background: #cbd3d2;
  cursor: not-allowed;
}

.pfq_applied_filters {
  margin: 0 0 1.5em;
}

.pfq_applied_filters__heading {
  margin: 0 0 0.6em;
  color: #2b3635;
  font-size: 1.1rem;
  font-weight: 700;
}

.pfq_chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6em;
}

.pfq_chips__item {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  padding: 0.5em 0.9em;
  border-radius: 2em;
  background: #e3eceb;
  color: #2b3635;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: capitalize;
  white-space: nowrap;
}

/*# sourceMappingURL=style.css.map */
`, d = (i, e, n, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: e,
      event_type: n,
      event_loc: t
    }), h(`Event: ${i} | ${e} | ${n} | ${t}`, "success");
  }, b = (i) => new Promise((e) => {
    const n = document.querySelector(i);
    n && e(n);
    const t = new MutationObserver(() => {
      const o = document.querySelector(i);
      o && (e(o), t.disconnect());
    });
    t.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), z = ({ name: i, dev: e }) => {
    const n = i.toLowerCase().replace(/\s/g, "_");
    d(`${n}_started`, `Experiment ${i} started`, "other", n), console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class f {
    constructor(e) {
      this.elements = e instanceof f ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, n, t) {
      return typeof n == "function" && (t = n, n = ""), this.elements.forEach((o) => {
        o.addEventListener(e, function(s) {
          var r;
          if (n !== "") {
            let l = (r = s.target) == null ? void 0 : r.closest(n);
            l && (t == null || t.call(l, s));
          } else
            t == null || t.call(o, s);
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
      const t = e.split("-").map((o, s) => s === 0 ? o : o.charAt(0).toUpperCase() + o.slice(1)).join("");
      return this.elements.forEach(function(o) {
        o.style[t] = n;
      }), this;
    }
    find(e) {
      const n = this.elements.map((t) => Array.from(t.querySelectorAll(e)));
      return new f(n.flat());
    }
    attr(e, n) {
      return n ? (this.elements.forEach(function(t) {
        t.setAttribute(e, n);
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
  const a = (i) => new f(i), M = (i) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, I = (i, e, n, t, o = 1e3, s = 0.5) => {
    let r, l;
    r = new IntersectionObserver(
      function(p) {
        p[0].isIntersecting === !0 ? l = setTimeout(() => {
          d(
            e,
            p[0].target.dataset.visible || t,
            "view",
            n
          ), r.disconnect();
        }, o) : (h("Element is not fully visible", "warn"), clearTimeout(l));
      },
      { threshold: [s] }
    );
    {
      const p = document.querySelector(i);
      p && r.observe(p);
    }
  }, h = (i, e = "info") => {
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
  }, w = "https://conversionrate-store.github.io/a-b_images/dywm/", H = (
    /* HTML */
    `<svg
  width="18"
  height="18"
  viewBox="0 0 18 18"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.75 4.5L11.25 9L6.75 13.5"
    stroke="#007170"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`
  ), u = (
    /* HTML */
    `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7 0.5L8.90499 4.85443L13.6574 5.34549L10.0777 8.53307L11.1145 13.1795L7 10.75L2.8855 13.1795L3.92229 8.53307L0.342604 5.34549L5.09501 4.85443L7 0.5Z"
    fill="#FFB800"
  />
</svg>`
  ), P = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <g clip-path="url(#clip0_184_11348)">
    <path
      d="M22.2031 15.9004V6.19727C22.2031 4.51722 20.8363 3.15039 19.1563 3.15039H4.84378C3.16373 3.15039 1.79691 4.51722 1.79691 6.19727V15.9004H0V17.8027C0 19.4828 1.36683 20.8496 3.04688 20.8496H20.9531C22.6332 20.8496 24 19.4828 24 17.8027V15.9004H22.2031ZM3.20316 6.19727C3.20316 5.29262 3.93914 4.55664 4.84378 4.55664H19.1563C20.0609 4.55664 20.7969 5.29262 20.7969 6.19727V15.9004H16.6402C18.0521 14.7504 18.9557 12.999 18.9557 11.0402V9.64783H17.5634C16.553 9.64783 15.5979 9.88853 14.7519 10.315C14.4578 8.98558 13.6956 7.74944 12.4757 6.6287L12 6.19164L11.5243 6.6287C10.3044 7.74948 9.54234 8.98563 9.2482 10.315C8.40216 9.88853 7.44708 9.64783 6.43673 9.64783H5.04431V11.0402C5.04431 12.999 5.94792 14.7505 7.35989 15.9004H3.20316V6.19727ZM12.7031 15.9004C12.7106 13.2313 14.8804 11.0615 17.5495 11.0541C17.542 13.7231 15.3721 15.893 12.7031 15.9004ZM12 13.0326C11.6318 12.3247 11.1328 11.6954 10.5348 11.1773C10.6335 10.1043 11.1248 9.08509 12 8.13766C12.8752 9.08509 13.3665 10.1043 13.4653 11.1773C12.8672 11.6954 12.3682 12.3247 12 13.0326ZM11.2969 15.9004C8.62781 15.893 6.45802 13.7231 6.45052 11.0541C9.11958 11.0615 11.2894 13.2313 11.2969 15.9004ZM22.5938 17.8028C22.5938 18.7074 21.8578 19.4434 20.9531 19.4434H3.04688C2.14223 19.4434 1.40625 18.7074 1.40625 17.8028V17.3067H22.5938V17.8028Z"
      fill="#007DB8"
    />
  </g>
  <defs>
    <clipPath id="clip0_184_11348">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>`
  ), A = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M21.6248 19.8749H18.75C18.5919 19.3336 18.2625 18.8583 17.8113 18.5201C17.3602 18.1818 16.8115 17.999 16.2476 17.999C15.6838 17.999 15.1351 18.1818 14.6839 18.5201C14.2327 18.8583 13.9034 19.3336 13.7452 19.8749H1.5C1.30109 19.8749 1.11032 19.9539 0.96967 20.0946C0.829018 20.2352 0.75 20.426 0.75 20.6249C0.75 20.8238 0.829018 21.0146 0.96967 21.1552C1.11032 21.2959 1.30109 21.3749 1.5 21.3749H13.7475C13.9063 21.9152 14.2358 22.3896 14.6866 22.7271C15.1375 23.0645 15.6856 23.2469 16.2488 23.2469C16.8119 23.2469 17.36 23.0645 17.8109 22.7271C18.2617 22.3896 18.5912 21.9152 18.75 21.3749H21.6225C21.8214 21.3749 22.0122 21.2959 22.1528 21.1552C22.2935 21.0146 22.3725 20.8238 22.3725 20.6249C22.3725 20.426 22.2935 20.2352 22.1528 20.0946C22.0122 19.9539 21.8214 19.8749 21.6225 19.8749H21.6248ZM16.2502 21.7499C16.0277 21.7499 15.8102 21.6839 15.6252 21.5603C15.4402 21.4367 15.296 21.261 15.2109 21.0554C15.1257 20.8498 15.1035 20.6236 15.1469 20.4054C15.1903 20.1872 15.2974 19.9867 15.4548 19.8294C15.6121 19.6721 15.8125 19.5649 16.0308 19.5215C16.249 19.4781 16.4752 19.5004 16.6808 19.5855C16.8863 19.6707 17.062 19.8149 17.1857 19.9999C17.3093 20.1849 17.3752 20.4024 17.3752 20.6249C17.3752 20.9233 17.2567 21.2094 17.0457 21.4204C16.8348 21.6314 16.5486 21.7499 16.2502 21.7499Z"
    fill="#007DB8"
  />
  <path
    d="M20.895 0.75H3.105C2.4806 0.750596 1.88194 0.998902 1.44042 1.44042C0.998902 1.88194 0.750596 2.4806 0.75 3.105V14.895C0.750596 15.5194 0.998902 16.1181 1.44042 16.5596C1.88194 17.0011 2.4806 17.2494 3.105 17.25H20.895C21.5194 17.2494 22.1181 17.0011 22.5596 16.5596C23.0011 16.1181 23.2494 15.5194 23.25 14.895V3.105C23.2494 2.4806 23.0011 1.88194 22.5596 1.44042C22.1181 0.998902 21.5194 0.750596 20.895 0.75ZM21.75 14.895C21.7498 15.1217 21.6597 15.3391 21.4994 15.4994C21.3391 15.6597 21.1217 15.7498 20.895 15.75H3.105C2.8783 15.7498 2.66094 15.6597 2.50064 15.4994C2.34034 15.3391 2.2502 15.1217 2.25 14.895V3.105C2.2502 2.8783 2.34034 2.66094 2.50064 2.50064C2.66094 2.34034 2.8783 2.2502 3.105 2.25H20.895C21.1217 2.2502 21.3391 2.34034 21.4994 2.50064C21.6597 2.66094 21.7498 2.8783 21.75 3.105V14.895Z"
    fill="#007DB8"
  />
  <path
    d="M16.1475 8.364L10.1475 4.614C10.034 4.54305 9.90352 4.50377 9.76969 4.50026C9.63585 4.49674 9.50352 4.52912 9.38642 4.59402C9.26933 4.65892 9.17174 4.75398 9.10379 4.86933C9.03584 4.98468 9 5.11612 9 5.25V12.75C9 12.8839 9.03584 13.0153 9.10379 13.1307C9.17174 13.246 9.26933 13.3411 9.38642 13.406C9.50352 13.4709 9.63585 13.5033 9.76969 13.4997C9.90352 13.4962 10.034 13.457 10.1475 13.386L16.1475 9.636C16.256 9.56874 16.3456 9.47488 16.4077 9.36332C16.4698 9.25176 16.5024 9.12619 16.5024 8.9985C16.5024 8.87082 16.4698 8.74524 16.4077 8.63368C16.3456 8.52212 16.256 8.42826 16.1475 8.361V8.364ZM10.5 11.4V6.6L14.3348 9L10.5 11.4Z"
    fill="#007DB8"
  />
</svg>`
  ), F = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <g clip-path="url(#clip0_184_11360)">
    <path
      d="M23.8858 13.95C23.4901 12.732 22.1842 12.0667 20.9664 12.4624L19.0958 13.07C18.7458 10.434 16.9557 8.24664 14.5449 7.32653C15.392 6.60499 15.9307 5.53169 15.9307 4.33436C15.9307 2.16691 14.1674 0.403564 12 0.403564C9.83259 0.403564 8.06929 2.16691 8.06929 4.33436C8.06929 5.53169 8.60802 6.60499 9.4551 7.32653C7.04427 8.24664 5.25421 10.434 4.90415 13.07L3.03355 12.4624C1.81574 12.0668 0.509898 12.732 0.114226 13.95C-0.281492 15.1679 0.383852 16.4738 1.60176 16.8695L3.0089 17.3268C2.12245 17.9737 1.61413 18.9728 1.61413 20.0693C1.61413 22.0143 3.19645 23.5967 5.14138 23.5967H18.8586C20.8035 23.5967 22.3858 22.0143 22.3858 20.0693C22.3858 18.9729 21.8775 17.9737 20.991 17.3268L22.3981 16.8695C23.6161 16.4738 24.2815 15.1679 23.8858 13.95ZM12 1.80977C13.392 1.80977 14.5245 2.94227 14.5245 4.33431C14.5245 5.72636 13.392 6.85886 12 6.85886C10.6079 6.85886 9.47549 5.72636 9.47549 4.33431C9.47549 2.94227 10.608 1.80977 12 1.80977ZM9.47549 15.3793V10.7897C9.47549 9.39766 10.6079 8.26516 12 8.26516C13.392 8.26516 14.5245 9.39766 14.5245 10.7897V15.3793C14.5245 16.24 14.9066 17.0589 15.5555 17.6143L12 18.7696L8.44452 17.6143C9.09341 17.0588 9.47549 16.24 9.47549 15.3793ZM1.45157 14.3845C1.6072 13.9055 2.12066 13.6443 2.59907 13.7998L5.32762 14.6861C5.5416 14.7557 5.77602 14.7185 5.95813 14.5862C6.1402 14.4539 6.24791 14.2425 6.24791 14.0174C6.24791 12.2865 7.01615 10.7319 8.22979 9.67647C8.12535 10.0296 8.06929 10.4032 8.06929 10.7898V15.3793C8.06929 15.8692 7.83271 16.3335 7.43638 16.6214C7.04015 16.9093 6.52541 16.9908 6.05915 16.8393L2.03634 15.5321C1.55727 15.3764 1.29613 14.863 1.45157 14.3845ZM5.14143 22.1904C3.9719 22.1904 3.02038 21.2388 3.02038 20.0693C3.02038 19.4256 3.31973 18.839 3.84159 18.4599C4.18879 18.2076 4.59304 18.0775 5.00502 18.0775C5.21165 18.0775 5.42029 18.1103 5.62466 18.1766L14.9018 21.1911C15.4059 21.3549 15.7973 21.7249 15.9953 22.1904H5.14143ZM18.8586 22.1904H17.467C17.2243 21.1052 16.4285 20.2085 15.3363 19.8536L14.2753 19.5089L18.3753 18.1766C19.6605 17.7592 20.9796 18.7172 20.9796 20.0693C20.9796 21.2388 20.0281 22.1904 18.8586 22.1904ZM21.9636 15.5321L17.9403 16.8394C17.4745 16.9908 16.9597 16.9092 16.5635 16.6214C16.1672 16.3335 15.9306 15.8692 15.9306 15.3793V10.7898C15.9306 10.4032 15.8746 10.0296 15.7701 9.67647C16.9838 10.7319 17.752 12.2865 17.752 14.0174C17.752 14.2424 17.8598 14.4539 18.0418 14.5862C18.2239 14.7185 18.4582 14.7556 18.6723 14.6861L21.4009 13.7998C21.8793 13.6443 22.3927 13.9055 22.5484 14.3845C22.7039 14.863 22.4427 15.3764 21.9636 15.5321Z"
      fill="#007DB8"
    />
  </g>
  <defs>
    <clipPath id="clip0_184_11360">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>`
  ), V = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M18.5618 9.98601V1.6286C18.5618 0.730562 17.8312 0 16.9331 0H3.6911C2.79306 0 2.0625 0.730562 2.0625 1.6286V18.9955C2.0625 19.8936 2.79306 20.6241 3.6911 20.6241H13.687V23.249C13.687 23.8225 14.3081 24.1864 14.809 23.9002L17.0619 22.6128C19.5501 24.0347 19.42 23.999 19.6867 23.999C20.1009 23.999 20.4367 23.6627 20.4367 23.249V18.1386C23.106 15.5742 22.0487 11.1163 18.5618 9.98601ZM3.6911 19.1242C3.62014 19.1242 3.56244 19.0665 3.56244 18.9955V1.6286C3.56244 1.55764 3.62014 1.49994 3.6911 1.49994H16.9332C17.0042 1.49994 17.0619 1.55764 17.0619 1.6286V9.74958C14.3739 9.74958 12.1871 11.9364 12.1871 14.6244C12.1871 16.0037 12.763 17.251 13.687 18.1386V19.1242H3.6911ZM18.9368 21.9567L17.4339 21.0979C17.2033 20.9661 16.9203 20.9661 16.6897 21.0979L15.1869 21.9567V19.1239C16.3828 19.6241 17.7393 19.6248 18.9367 19.1239L18.9368 21.9567ZM17.0619 17.9992C15.201 17.9992 13.687 16.4853 13.687 14.6244C13.687 12.7635 15.201 11.2495 17.0619 11.2495C18.9228 11.2495 20.4367 12.7635 20.4367 14.6244C20.4367 16.4853 18.9228 17.9992 17.0619 17.9992Z"
    fill="#007DB8"
  />
  <path
    d="M16.6868 16.5462C16.3939 16.5462 16.3565 16.4768 15.1466 15.6701C14.8019 15.4404 14.7088 14.9747 14.9385 14.6301C15.1683 14.2855 15.634 14.1924 15.9786 14.4221L16.4795 14.7561L17.5635 13.1302C17.7932 12.7855 18.2589 12.6924 18.6035 12.9222C18.9482 13.1519 19.0413 13.6176 18.8115 13.9622L17.3116 16.2121C17.167 16.4289 16.9291 16.5462 16.6868 16.5462Z"
    fill="#007DB8"
  />
  <path
    d="M12.9372 5.24969H6.56247C6.1483 5.24969 5.8125 4.91389 5.8125 4.49972C5.8125 4.08555 6.1483 3.74976 6.56247 3.74976H12.9372C13.3514 3.74976 13.6872 4.08555 13.6872 4.49972C13.6872 4.91389 13.3514 5.24969 12.9372 5.24969Z"
    fill="#007DB8"
  />
  <path
    d="M12.9372 8.24969H6.56247C6.1483 8.24969 5.8125 7.91389 5.8125 7.49972C5.8125 7.08555 6.1483 6.74976 6.56247 6.74976H12.9372C13.3514 6.74976 13.6872 7.08555 13.6872 7.49972C13.6872 7.91389 13.3514 8.24969 12.9372 8.24969Z"
    fill="#007DB8"
  />
  <path
    d="M10.3123 11.2494H6.56247C6.1483 11.2494 5.8125 10.9136 5.8125 10.4995C5.8125 10.0853 6.1483 9.74951 6.56247 9.74951H10.3123C10.7265 9.74951 11.0623 10.0853 11.0623 10.4995C11.0623 10.9136 10.7265 11.2494 10.3123 11.2494Z"
    fill="#007DB8"
  />
</svg>`
  ), y = [
    { goal: "reduce_stress", emoji: "🌿", label: "Reduce stress &amp; anxiety" },
    { goal: "relieve_pain", emoji: "🧘", label: "Relieve pain or tension" },
    { goal: "get_stronger", emoji: "💪", label: "Get stronger &amp; more flexible" },
    { goal: "sleep_better", emoji: "🌙", label: "Sleep better" }
  ], j = ({ goal: i, emoji: e, label: n }) => (
    /* HTML */
    `
  <div class="pfq_entry__option" data-goal="${i}" role="button" tabindex="0">
    <span class="pfq_entry__option-label">${e}&nbsp;&nbsp;${n}</span>
    <span class="pfq_entry__option-chevron">${H}</span>
  </div>
`
  ), T = (
    /* HTML */
    `
  <section class="pfq_entry">
    <div class="pfq_entry__inner">
      <div class="pfq_entry__card">
        <div class="pfq_entry__header">
          <h1>Find Your Perfect Yoga <br class="pfq_entry__break" />Practice in 40 Seconds</h1>
          <p>Take a short quiz and get a personalize selection of yoga classes tailored to your goal and level.</p>
        </div>
        <div class="pfq_entry__question">
          <h2>What do you need most right now?</h2>
          <div class="pfq_entry__options">${y.map(j).join("")}</div>
        </div>
        <div class="pfq_entry__stats">
          <div class="pfq_entry__stat">
            ${P}<span><b>1,200+</b> exclusive classes</span>
          </div>
          <div class="pfq_entry__stat">
            ${A}<span><b>250+</b> free videos</span>
          </div>
          <div class="pfq_entry__stat">
            ${F}<span><b>26</b> styles</span>
          </div>
          <div class="pfq_entry__stat">
            ${V}<span><b>30+</b> top certified instructors</span>
          </div>
        </div>
        <div class="pfq_entry__rating">
          <span class="pfq_entry__rating-stars">${u}${u}${u}${u}${u}</span>
          Rated 4.9 by 15,000+ customers
        </div>
      </div>
      <div class="pfq_entry__image">
        <!-- TODO: swap for the real desktop hero photo once supplied by the user -->
        <img src="${w}main_img_quiz.jpg" alt="Yoga practice" />
      </div>
    </div>
  </section>
`
  ), O = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="8"
  height="16"
  viewBox="0 0 8 16"
  fill="none"
>
  <path d="M6.98779 0.75L0.987793 7.75L6.98779 14.75" stroke="#007170" stroke-width="1.5" stroke-linecap="round" />
</svg>`
  ), Z = (
    /* HTML */
    `<svg
  width="12"
  height="10"
  viewBox="0 0 12 10"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M1 5L4.3 8.3L11 1.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`
  ), B = (
    /* HTML */
    `<img src="${w}logo.svg" alt="DoYogaWithMe Logo" />`
  ), C = {
    relieve_pain_location: {
      id: "relieve_pain_location",
      question: "Where do you feel it most?",
      type: "multi",
      options: [
        { value: "lower_back", label: "Lower Back" },
        { value: "neck_shoulders", label: "Neck &amp; Shoulders" },
        { value: "hips", label: "Hips" },
        { value: "general_stiffness", label: "All Over / General Stiffness" }
      ]
    },
    get_stronger_focus: {
      id: "get_stronger_focus",
      question: "What Would You Like to Focus On?",
      type: "multi",
      options: [
        { value: "energy", label: "⚡  Vigorous/Energy" },
        { value: "core_strength", label: "💪  Core &amp; overall strength" },
        { value: "flexibility", label: "🤸  Flexibility &amp; mobility" },
        { value: "balance", label: "⚖️  Balance & posture" }
      ]
    },
    level: {
      id: "level",
      question: "What's your yoga level?",
      type: "single",
      options: [
        { value: "new", label: "🌱 New to yoga", sub: "Little Or No Experience" },
        { value: "some_practice", label: "🌿 Some practice", sub: "Know A Few Poses" },
        { value: "intermediate", label: "🌳 Intermediate", sub: "Regular Practitioner" },
        { value: "advanced", label: "⚡ Advanced", sub: "Years Of Practice" }
      ]
    },
    duration: {
      id: "duration",
      question: "How long do you have per session?",
      type: "single",
      options: [
        { value: "under_10", label: "⚡&lt; 10 Min", sub: "Quick Reset" },
        { value: "10_20", label: "⚡10–20 Min", sub: "Quick &amp; Focused" },
        { value: "20_30", label: "🕐20–30 Min", sub: "Short Session" },
        { value: "30_45", label: "🕐30–45 Min", sub: "Standard Class" },
        { value: "60_plus", label: "🕐60+ Min", sub: "Full Practice" }
      ]
    },
    style_preferences: {
      id: "style_preferences",
      question: "Do you have any style preferences?",
      type: "multi",
      options: [
        { value: "ashtanga", label: "Ashtanga" },
        { value: "gentle_yoga", label: "Gentle Yoga" },
        { value: "jivamukti", label: "Jivamukti" },
        { value: "pilates", label: "Pilates" },
        { value: "prenatal_postnatal", label: "Prenatal/Postnatal" },
        { value: "slow_flow", label: "Slow Flow" },
        { value: "hatha", label: "Hatha" },
        { value: "chair_yoga", label: "Chair Yoga" },
        { value: "tai_chi_qigong", label: "Tai Chi And Qigong" },
        { value: "guided_meditation", label: "Guided Meditation" },
        { value: "mom_and_baby", label: "Mom And Baby" },
        { value: "kundalini", label: "Kundalini" },
        { value: "pnf", label: "PNF" },
        { value: "plus_size", label: "Plus Size" },
        { value: "restorative", label: "Restorative" }
      ]
    }
  }, g = {
    relieve_pain: ["relieve_pain_location", "level", "duration"],
    get_stronger: ["get_stronger_focus", "level", "duration"],
    reduce_stress: ["level", "duration"],
    sleep_better: ["level", "duration"]
  }, v = "style_preferences", D = (i) => i.includes("intermediate") || i.includes("advanced"), R = (i, e, n) => (
    /* HTML */
    `
  <label class="pfq_step__option">
    <input type="${e === "multi" ? "checkbox" : "radio"}" name="${n}" value="${i.value}" />
    <span class="pfq_step__option-box">${Z}</span>
    <span class="pfq_step__option-text">
      <b>${i.label}</b>
      ${i.sub ? `<i>${i.sub}</i>` : ""}
    </span>
  </label>
`
  ), U = (i, e) => (
    /* HTML */
    `
  <div class="pfq_step${e === 0 ? " active" : ""}" data-step-id="${i.id}" data-step-index="${e}">
    <h2>${i.question}</h2>
    <div class="pfq_step__options">${i.options.map((n) => R(n, i.type, i.id)).join("")}</div>
  </div>
`
  ), Y = (i) => {
    const e = g[i] || g.reduce_stress, t = [...e, v].map((o) => C[o]).filter(Boolean);
    return (
      /* HTML */
      `
    <div class="pfq_popup" data-goal="${i}" role="dialog" aria-modal="true">
      <div class="pfq_popup__inner">
        <div class="pfq_popup__scroll">
          <div class="pfq_popup__head">
            <button type="button" class="pfq_popup__back" aria-label="Back">${O}</button>
            <div class="pfq_popup__logo">${B}</div>
          </div>
          <div class="pfq_popup__progress"><span class="pfq_popup__progress-bar"></span></div>
          <div class="pfq_popup__step-label">Step <b>1</b> of ${e.length}</div>
          <div class="pfq_popup__steps">${t.map(U).join("")}</div>
        </div>
        <div class="pfq_popup__footer">
          <button type="button" class="pfq_popup__continue" disabled>Continue</button>
        </div>
      </div>
    </div>
  `
    );
  }, N = {
    // relieve_pain_location
    lower_back: [73],
    neck_shoulders: [71],
    hips: [56],
    general_stiffness: [58],
    // "Whole Body" — closest stand-in, not an exact match
    // get_stronger_focus
    energy: [57],
    // Vigorous/Energy
    core_strength: [65, 62],
    // Core Strength + Strength
    flexibility: [64],
    balance: [66]
  }, q = {
    reduce_stress: [61],
    // Stress/Anxiety
    sleep_better: [70]
    // Sleep/Relaxation
  }, x = {
    new: [24],
    // Beginner I
    some_practice: [25],
    // Beginner II
    intermediate: [26, 27, 28],
    // Intermediate I + II + III
    advanced: [29]
  }, k = {
    under_10: [1],
    "10_20": [2],
    "20_30": [3],
    "30_45": [4],
    "60_plus": [6, 7]
    // 60–75 min + 75 min+ (deliberately excludes the site's separate "45-60 mins", which our quiz has no option for)
  }, Q = {
    ashtanga: 30,
    chair_yoga: 213,
    gentle_yoga: 31,
    guided_meditation: 32,
    hatha: 33,
    jivamukti: 34,
    kundalini: 35,
    mom_and_baby: 36,
    pilates: 37,
    plus_size: 38,
    pnf: 39,
    prenatal_postnatal: 126,
    restorative: 44,
    slow_flow: 125,
    tai_chi_qigong: 257
  }, S = (i, e) => {
    var r, l;
    const n = [], t = (p, c) => c.forEach((_) => n.push(`${p}[${_}]=${_}`));
    if (q[i])
      t("focus", q[i]);
    else {
      const c = (e.relieve_pain_location || e.get_stronger_focus || []).flatMap((_) => N[_] || []);
      c.length && t("focus", c);
    }
    const o = (r = e.level) == null ? void 0 : r[0];
    o && x[o] && t("term_node_tid_depth", x[o]);
    const s = (l = e.duration) == null ? void 0 : l[0];
    return s && k[s] && t("field_media_duration_value", k[s]), (e.style_preferences || []).forEach((p) => {
      const c = Q[p];
      c && n.push(`style[${c}]=${c}`);
    }), "/yoga-classes" + (n.length ? "?" + n.join("&") : "");
  }, L = (i, e) => (
    /* HTML */
    `<span class="pfq_chips__item">${i}&nbsp;${e}</span>`
  ), G = (i, e) => {
    const n = [], t = y.find((s) => s.goal === i);
    t && n.push(L(t.emoji, t.label));
    const o = (s, r) => {
      const l = C[s];
      (e[s] || []).forEach((p) => {
        const c = l == null ? void 0 : l.options.find((_) => _.value === p);
        c && n.push(L(r, c.label));
      });
    };
    return o("relieve_pain_location", "📍"), o("get_stronger_focus", "🎯"), o("level", "🧘"), o("duration", "🕐"), o("style_preferences", "✨"), n.length ? (
      /* HTML */
      `
    <div class="pfq_applied_filters">
      <h3 class="pfq_applied_filters__heading">Picked Just for You</h3>
      <div class="pfq_chips">${n.join("")}</div>
    </div>
  `
    ) : "";
  };
  z({ name: "Problem Focused Quiz", dev: "YK" }), M("problem_focused_quiz");
  const $ = ".sfc-frontPageAnon__section--survey", J = "beforebegin", W = ["focus", "term_node_tid_depth", "field_media_duration_value", "style"];
  class K {
    constructor() {
      this.currentStepIndex = 0, this.answers = {}, this.sequence = [], this.goal = "", this.init();
    }
    async init() {
      const e = document.createElement("style");
      e.textContent = `
      .sfc-frontPageAnon__section--survey,
      [data-sfc-id='quiz_entry'] { display: none !important; }
    `, document.head.appendChild(e), await b("body"), a("body").elements[0].insertAdjacentHTML("afterbegin", `<style class="pfq_style">${E}</style>`), window.location.pathname === "/" && await this.initHomepage(), window.location.pathname === "/yoga-classes" && await this.initYogaClassesPage();
    }
    async initHomepage() {
      d("problem_focused_quiz", "Start experiment", "loaded"), await b($), a($).elements[0].insertAdjacentHTML(J, T), h("Problem Focused Quiz entry block mounted"), this.setEntryEvents();
    }
    async initYogaClassesPage() {
      this.applyStoredQuizFilters() || (await b(".view-filters"), this.watchForManualFilterChange(), this.showAppliedFiltersChipsOnce());
    }
    // Re-applies goal/answers saved in localStorage (see finishQuiz) onto the
    // current /yoga-classes URL, merging them in without touching any other
    // param the visitor already had set (sort, teacher, pagination…). Returns
    // true — and starts a redirect — only when the URL actually needs to
    // change, so callers can bail out instead of wiring up a page that's about
    // to navigate away.
    applyStoredQuizFilters() {
      const e = localStorage.getItem("pfq_goal"), n = localStorage.getItem("pfq_answers");
      if (!e || !n) return !1;
      let t;
      try {
        t = JSON.parse(n);
      } catch {
        return !1;
      }
      const o = S(e, t), s = new URLSearchParams(o.split("?")[1] || ""), r = new URLSearchParams(window.location.search);
      W.forEach((_) => {
        Array.from(r.keys()).forEach((m) => {
          m.startsWith(`${_}[`) && r.delete(m);
        });
      }), s.forEach((_, m) => r.set(m, _));
      const l = r.toString(), p = "/yoga-classes" + (l ? `?${l}` : ""), c = window.location.pathname + window.location.search;
      return p === c ? !1 : (d("problem_focused_quiz_filters_reapplied", p, "other", e), window.location.replace(p), !0);
    }
    // The moment the visitor changes a filter by hand, they've taken over —
    // stop re-applying the quiz's answers on their future visits.
    watchForManualFilterChange() {
      a(".view-filters").on("change", "input, select", () => {
        localStorage.removeItem("pfq_goal"), localStorage.removeItem("pfq_answers"), d("problem_focused_quiz_filters_cleared", "Visitor changed a filter manually", "change", "yoga-classes");
      });
    }
    // "Applied Filters" chips are a one-time thing: they only appear on the
    // redirect landing right after finishing the quiz. A one-shot
    // sessionStorage flag (set in finishQuiz, consumed here) gates that —
    // later visits still get the filters re-applied above, just without the
    // chips repeating every time.
    showAppliedFiltersChipsOnce() {
      const e = sessionStorage.getItem("pfq_show_chips") === "1";
      if (sessionStorage.removeItem("pfq_show_chips"), !e) return;
      const n = localStorage.getItem("pfq_goal"), t = localStorage.getItem("pfq_answers");
      if (!n || !t) return;
      let o;
      try {
        o = JSON.parse(t);
      } catch {
        return;
      }
      const s = G(n, o);
      s && (a(".view-filters").elements[0].insertAdjacentHTML("beforebegin", s), d("problem_focused_quiz_filters_shown", "Applied filter chips shown", "view", n));
    }
    setEntryEvents() {
      const e = (n) => {
        const t = n.dataset.goal || "";
        d("problem_focused_quiz_goal_click", `Selected goal: ${t}`, "click", t), this.openPopup(t);
      };
      a(".pfq_entry [data-goal]").on("click", (n) => e(n.currentTarget)), a(".pfq_entry [data-goal]").on("keydown", (n) => {
        const t = n;
        (t.key === "Enter" || t.key === " ") && (t.preventDefault(), e(n.currentTarget));
      }), I(".pfq_entry", "problem_focused_quiz_view", "Homepage", "Entry block");
    }
    openPopup(e) {
      this.goal = e, this.sequence = g[e] || g.reduce_stress, this.currentStepIndex = 0, this.answers = {}, localStorage.setItem("pfq_goal", e), document.body.insertAdjacentHTML("beforeend", Y(e)), document.body.style.overflow = "hidden", this.setPopupEvents(), d("problem_focused_quiz_popup_open", `Opened popup for goal: ${e}`, "other", e), this.updateStepUI();
    }
    closePopup() {
      var e;
      (e = a(".pfq_popup").elements[0]) == null || e.remove(), document.body.style.overflow = "";
    }
    setPopupEvents() {
      a(".pfq_popup__back").on("click", () => {
        var e;
        if (this.currentStepIndex === 0) {
          d(
            "problem_focused_quiz_popup_close",
            "Closed via back on first step",
            "click",
            ((e = this.currentStep()) == null ? void 0 : e.id) || ""
          ), this.closePopup();
          return;
        }
        this.currentStepIndex -= 1, this.updateStepUI();
      }), a(".pfq_step__option input").on("change", () => {
        this.updateContinueState();
      }), a(".pfq_popup__continue").on("click", () => {
        const e = this.currentStep();
        if (!e) return;
        const n = a(
          `.pfq_step[data-step-id="${e.id}"] .pfq_step__option input:checked`
        ).elements.map((t) => t.value);
        this.answers[e.id] = n, d("problem_focused_quiz_step_continue", `Step "${e.id}": ${n.join(", ")}`, "click", e.id), e.id === "level" && D(n) && !this.sequence.includes(v) && this.sequence.push(v), this.currentStepIndex + 1 < this.sequence.length ? (this.currentStepIndex += 1, this.updateStepUI()) : this.finishQuiz();
      });
    }
    currentStep() {
      return { id: this.sequence[this.currentStepIndex] };
    }
    updateStepUI() {
      const e = this.sequence.length, n = this.sequence[this.currentStepIndex];
      a(".pfq_step").removeClass("active"), a(`.pfq_step[data-step-id="${n}"]`).addClass("active"), a(".pfq_popup__progress-bar").style("width", `${(this.currentStepIndex + 1) / e * 100}%`), a(".pfq_popup__step-label").html(`Step <b>${this.currentStepIndex + 1}</b> of ${e}`), this.updateContinueState();
    }
    updateContinueState() {
      const e = this.sequence[this.currentStepIndex], n = a(`.pfq_step[data-step-id="${e}"] .pfq_step__option input:checked`).elements.length > 0, t = a(".pfq_popup__continue").elements[0];
      t && (t.disabled = !n);
    }
    finishQuiz() {
      localStorage.setItem("pfq_answers", JSON.stringify(this.answers)), sessionStorage.setItem("pfq_show_chips", "1"), d("problem_focused_quiz_completed", JSON.stringify(this.answers), "submit", "Quiz popup");
      const e = S(this.goal, this.answers);
      d("problem_focused_quiz_redirect", e, "other", this.goal), h(`Quiz completed, answers: ${JSON.stringify(this.answers)} → ${e}`, "success"), window.location.href = e;
    }
  }
  new K();
})();
//# sourceMappingURL=index.js.map
