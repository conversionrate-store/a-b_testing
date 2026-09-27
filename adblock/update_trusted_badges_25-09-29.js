(function() {
  "use strict";
  const h = `[class*=_freeAdBlockerPage__wrapper] {
  align-items: flex-start !important;
}

.iaby-hero__badges {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  font-family: "Manrope", sans-serif;
}
.iaby-hero__badges * {
  box-sizing: border-box;
}

.iaby-hero__badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px;
  background: #ffffff;
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
.iaby-hero__badge:hover {
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  z-index: 5;
}
.iaby-hero__badge:hover .iaby-hero__badge-popup {
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
  .iaby-hero__badge:hover .iaby-hero__badge-popup {
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
  .iaby-hero__badge:nth-child(3) .iaby-hero__badge-popup,
  .iaby-hero__badge:nth-child(4) .iaby-hero__badge-popup {
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

/*# sourceMappingURL=style.css.map */
`, d = (i, t, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: t,
      event_type: e,
      event_loc: n
    }), g(`Event: ${i} | ${t} | ${e} | ${n}`, "success");
  }, p = (i) => new Promise((t) => {
    const e = document.querySelector(i);
    e && t(e);
    const n = new MutationObserver(() => {
      const o = document.querySelector(i);
      o && (t(o), n.disconnect());
    });
    n.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), C = ({ name: i, dev: t }) => {
    const e = i.toLowerCase().replace(/\s/g, "_");
    d(`${e}_started`, `Experiment ${i} started`, "other", e), console.log(
      `%c EXP: ${i} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class s {
    constructor(t) {
      this.elements = t instanceof s ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, e, n) {
      return typeof e == "function" && (n = e, e = ""), this.elements.forEach((o) => {
        o.addEventListener(t, function(a) {
          var l;
          if (e !== "") {
            let c = (l = a.target) == null ? void 0 : l.closest(e);
            c && (n == null || n.call(c, a));
          } else
            n == null || n.call(o, a);
        });
      }), this;
    }
    addClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.add(t);
      }), this;
    }
    removeClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.remove(t);
      }), this;
    }
    toggleClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.toggle(t);
      }), this;
    }
    each(t) {
      for (let e of this.elements)
        t(new s(e), this.elements.indexOf(e));
      return this;
    }
    style(t, e) {
      const n = t.split("-").map((o, a) => a === 0 ? o : o.charAt(0).toUpperCase() + o.slice(1)).join("");
      return this.elements.forEach(function(o) {
        o.style[n] = e;
      }), this;
    }
    find(t) {
      const e = this.elements.map((n) => Array.from(n.querySelectorAll(t)));
      return new s(e.flat());
    }
    attr(t, e) {
      return e ? (this.elements.forEach(function(n) {
        n.setAttribute(t, e);
      }), this) : this.elements[0].getAttribute(t);
    }
    text(t) {
      return t ? (this.elements.forEach(function(e) {
        e.textContent = t;
      }), this) : this.elements[0].textContent || "";
    }
    html(t) {
      return t ? (this.elements.forEach(function(e) {
        e.innerHTML = t;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const b = (i) => new s(i), g = (i, t = "info") => {
    let e;
    switch (t) {
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
  }, r = {
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
  }, f = (
    /* html */
    `
<div class="iaby-hero__badges" data-experiment="trust_labels_update">${[
      {
        title: "EV code signed",
        svg: r.ev,
        popup: {
          image: "https://conversionrate-store.github.io/a-b_images/adblock/digicert.webp",
          title: "DigiCert™ EV Code Signing",
          desc: "Your OS verifies our identity before install. The certificate is issued to AdBlock Ltd — that's the publisher name you'll see on the Windows prompt."
        }
      },
      {
        title: "AppEsteem certified",
        svg: r.award,
        popup: {
          image: "https://conversionrate-store.github.io/a-b_images/adblock/app_est.webp",
          title: "Independently certified by AppEsteem",
          desc: "Every AdBlock360 release is tested and approved by AppEsteem, an independent certification body for safe software and clean installation practices, before it is published."
        }
      },
      {
        title: "Cybernews verified",
        svg: r.verifyed,
        popup: {
          variant: "cybernews",
          title: "Reviewed and verified by Cybernews",
          desc: 'AdBlock360 is the real app — fully vetted, zero adware. Not to be confused with the fake "AdBlock 360" that shows up in search results.',
          link: { text: "Cybernews independent security review →", url: "https://cybernews.com/adblock360-review/" }
        }
      },
      {
        title: "Free, no trial",
        svg: r.free,
        popup: {
          icon: r.freeLg,
          title: "Free version, optional Premium",
          desc: "The basic version is free. Premium is a separate paid subscription. Nothing is charged and nothing upgrades unless you choose it."
        }
      }
    ].map(({ title: i, svg: t, popup: e }) => {
      const n = e.variant === "cybernews", o = n ? "" : (
        /* html */
        `<div class="iaby-hero__badge-popup-media">${e.image ? `<img src="${e.image}" alt="${e.title}" loading="lazy" />` : e.icon || ""}</div>`
      ), a = n ? (
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
      ) : "", l = e.link ? `<a href="${e.link.url}" target="_blank" rel="noopener" class="iaby-hero__badge-popup-link">${e.link.text}</a>` : "";
      return (
        /* html */
        `
  <div class="iaby-hero__badge">
    ${t}<span>${i}</span>
    <div class="iaby-hero__badge-popup${n ? " iaby-hero__badge-popup--cybernews" : ""}">
      ${o}${a}
      <h3>${e.title}</h3>
      <p>${e.desc}</p>
      ${l}
    </div>
  </div>`
      );
    }).join("")}</div>
`
  );
  C({ name: "Trust Labels Update", dev: "YK" });
  class u {
    constructor() {
      window.location.pathname === "/update-cro-v1" && this.init();
    }
    async init() {
      await p("body"), document.head.insertAdjacentHTML("beforeend", `<style class="crs-trust-labels-update-style">${h}</style>`), (await p("main micro-combo")).insertAdjacentHTML("beforebegin", f), d("trust_labels_update_view", "Trust labels update viewed", "view", "trust_labels_update"), this.initLinkClicks();
    }
    // Outbound link inside the Cybernews popover — delegated since the badges are rebuilt from
    // data and .on() only binds once.
    initLinkClicks() {
      b(".iaby-hero__badges").on("click", ".iaby-hero__badge-popup-link", function() {
        var t;
        d(
          "trust_labels_badge_popup_link_click",
          `Trust badge popup link clicked: ${(t = this.textContent) == null ? void 0 : t.trim()}`,
          "click",
          "trust_labels_update"
        );
      });
    }
  }
  new u();
})();
//# sourceMappingURL=index.js.map
