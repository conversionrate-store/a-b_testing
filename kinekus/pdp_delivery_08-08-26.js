(function() {
  "use strict";
  const g = `.number-of-days-wrapper {
  display: none !important;
}

.kdlv-block {
  font-family: "Open Sans", sans-serif;
  background: #f4f8fb;
  border: 1px solid #e3e9ee;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(20, 56, 127, 0.06);
  padding: 14px 18px;
  margin-top: 20px;
  color: #525252;
}

.kdlv-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 9px 0;
  background: none;
  border: none;
  font-family: inherit;
  text-align: left;
  cursor: default;
}
.kdlv-row--btn {
  cursor: pointer;
}
.kdlv-row--tier {
  padding: 8px 0;
}
.kdlv-row--tier .kdlv-row-label span {
  font-weight: 400;
  font-size: 14px;
  color: #707070;
}

.kdlv-row-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #525252;
}
.kdlv-row-label svg {
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  color: #057222;
}
.kdlv-row-label.kdlv-accent {
  color: #057222;
  font-weight: 700;
}
.kdlv-row-label.kdlv-accent svg {
  color: #057222;
}

.kdlv-row-value {
  font-size: 14px;
  font-weight: 700;
  color: #525252;
  white-space: nowrap;
}

.kdlv-divider {
  height: 1px;
  border-top: 1px dashed #c7d2da;
  margin: 2px 0;
}

.kdlv-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 12px;
  flex-wrap: wrap;
}

.kdlv-free {
  color: #057222;
  font-weight: 700;
  font-size: 14px;
}

.kdlv-link {
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  color: #1075ac;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
}
.kdlv-link:hover {
  color: #0c557d;
}

.kdlv-trigger {
  transition: opacity 0.15s ease;
}
.kdlv-trigger:hover {
  opacity: 0.8;
}

.kdlv-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 20, 35, 0.55);
  z-index: 10000000000;
  display: none;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  padding: 40px 16px;
}
.kdlv-overlay.active {
  display: flex;
}

body.kdlv-lock {
  overflow: hidden;
}

.kdlv-modal {
  position: relative;
  width: 100%;
  max-width: 480px;
  margin: auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
  font-family: "Open Sans", sans-serif;
  color: #525252;
  overflow: hidden;
}

.kdlv-close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: none;
  color: #1075ac;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.kdlv-close svg {
  width: 18px;
  height: 18px;
}
.kdlv-close:hover {
  color: #0c557d;
}

.kdlv-modal-head {
  padding: 28px 28px 4px;
}
.kdlv-modal-head h3 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #525252;
}
.kdlv-modal-head .kdlv-modal-sub {
  margin: 4px 0 0;
  font-size: 12px;
  color: #707070;
}

.kdlv-modal-body {
  padding: 12px 28px 28px;
  max-height: calc(90vh - 90px);
  overflow-y: auto;
}
.kdlv-modal-body .kdlv-row {
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.kdlv-subhead {
  margin: 14px 0 4px;
  font-size: 13px;
  font-weight: 700;
  text-align: right;
  color: #525252;
}

.kdlv-time {
  padding: 14px 0 4px;
}
.kdlv-time .kdlv-row-label {
  margin-bottom: 6px;
}
.kdlv-time p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #707070;
}

.kdlv-free-box {
  margin-top: 16px;
  padding: 14px 16px;
  background: #eafaf0;
  border-radius: 10px;
  font-size: 13px;
  line-height: 1.5;
  color: #444;
}
.kdlv-free-box strong {
  color: #057222;
}

.kdlv-cta {
  display: block;
  width: 100%;
  margin-top: 18px;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: #057222;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 0.15s ease;
}
.kdlv-cta:hover {
  background: #057222;
}

@media (max-width: 767px) {
  .kdlv-block {
    padding: 12px 14px;
  }
  .kdlv-footer {
    flex-direction: row;
    align-items: center;
  }
  .kdlv-overlay {
    padding: 15px;
    align-items: flex-end;
  }
  .kdlv-modal {
    max-width: 100%;
    border-radius: 0;
    max-height: 92vh;
  }
  .kdlv-modal-head {
    padding: 22px 20px 4px;
  }
  .kdlv-modal-head h3 {
    font-size: 19px;
  }
  .kdlv-modal-body {
    padding: 10px 20px 24px;
  }
}/*# sourceMappingURL=style.css.map */`, k = (o, e, n, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: e,
      event_type: n,
      event_loc: t
    }), C(`Event: ${o} | ${e} | ${n} | ${t}`, "success");
  }, u = (o) => new Promise((e) => {
    const n = document.querySelector(o);
    n && e(n);
    const t = new MutationObserver(() => {
      const l = document.querySelector(o);
      l && (e(l), t.disconnect());
    });
    t.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), m = ({ name: o, dev: e }) => {
    const n = o.toLowerCase().replace(/\s/g, "_");
    k(`${n}_started`, `Experiment ${o} started`, "other", n), console.log(
      `%c EXP: ${o} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class v {
    constructor(e) {
      this.elements = e instanceof v ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, n, t) {
      return typeof n == "function" && (t = n, n = ""), this.elements.forEach((l) => {
        l.addEventListener(e, function(r) {
          var a;
          if (n !== "") {
            let s = (a = r.target) == null ? void 0 : a.closest(n);
            s && (t == null || t.call(s, r));
          } else
            t == null || t.call(l, r);
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
        e(new v(n), this.elements.indexOf(n));
      return this;
    }
    style(e, n) {
      const t = e.split("-").map((l, r) => r === 0 ? l : l.charAt(0).toUpperCase() + l.slice(1)).join("");
      return this.elements.forEach(function(l) {
        l.style[t] = n;
      }), this;
    }
    find(e) {
      const n = this.elements.map((t) => Array.from(t.querySelectorAll(e)));
      return new v(n.flat());
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
  const p = (o) => new v(o), x = (o, e, n, t, l = 1e3, r = 0.5) => {
    let a, s;
    a = new IntersectionObserver(
      function(d) {
        d[0].isIntersecting === !0 ? s = setTimeout(() => {
          k(
            e,
            d[0].target.dataset.visible || t,
            "view",
            n
          ), a.disconnect();
        }, l) : (C("Element is not fully visible", "warn"), clearTimeout(s));
      },
      { threshold: [r] }
    );
    {
      const d = document.querySelector(o);
      d && a.observe(d);
    }
  }, C = (o, e = "info") => {
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
    console.log(`%c>>> ${o}`, `${n} font-size: 16px; font-weight: 600`);
  }, c = {
    store: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M12.093 10.6276C11.6946 10.6317 11.3003 10.5475 10.9384 10.3811C10.5766 10.2146 10.2561 9.97 9.99999 9.66485C9.74205 9.96778 9.42118 10.2108 9.05972 10.3771C8.69826 10.5434 8.3049 10.6289 7.90703 10.6276C7.50871 10.6317 7.11442 10.5475 6.75252 10.3811C6.39063 10.2146 6.07013 9.97 5.81407 9.66485C5.73689 9.75746 5.65294 9.8442 5.56291 9.92438C5.28107 10.1808 4.94806 10.3746 4.58585 10.4929C4.22364 10.6113 3.84046 10.6515 3.46158 10.6109C2.77583 10.5264 2.14541 10.1917 1.6912 9.67107C1.23698 9.15042 0.990944 8.48043 1.00025 7.78956V7.19516C0.999574 6.76851 1.06741 6.34452 1.20118 5.93938L2.51556 2.00462C2.6123 1.7124 2.79863 1.45808 3.04809 1.27775C3.29755 1.09741 3.59747 1.00023 3.90529 1H16.0947C16.4025 1.00023 16.7024 1.09741 16.9519 1.27775C17.2014 1.45808 17.3877 1.7124 17.4844 2.00462L18.7988 5.93938C18.9326 6.34452 19.0004 6.76851 18.9997 7.19516V7.78956C19.0095 8.47788 18.7658 9.14576 18.315 9.66603C17.8642 10.1863 17.2379 10.5226 16.5552 10.6109C16.1762 10.6525 15.7927 10.6129 15.4304 10.4945C15.068 10.3761 14.7351 10.1817 14.4538 9.92438C14.3617 9.84066 14.2696 9.7402 14.1859 9.64811C13.9292 9.95366 13.6089 10.1996 13.2475 10.3687C12.886 10.5379 12.492 10.6262 12.093 10.6276ZM3.90529 2.25578C3.86134 2.25644 3.81863 2.27039 3.78277 2.2958C3.7469 2.3212 3.71957 2.35686 3.70436 2.3981L2.39835 6.33286C2.30766 6.60282 2.25964 6.88528 2.25603 7.17005V7.76445C2.24375 8.14238 2.37091 8.51164 2.61329 8.80188C2.85567 9.09212 3.19634 9.28306 3.57041 9.33835C3.77229 9.35926 3.97632 9.33799 4.16955 9.2759C4.36278 9.21381 4.541 9.11224 4.69291 8.97765C4.84482 8.84305 4.96711 8.67836 5.05202 8.49402C5.13694 8.30967 5.18262 8.1097 5.18618 7.90677C5.18618 7.74024 5.25233 7.58054 5.37008 7.46278C5.48784 7.34503 5.64754 7.27888 5.81407 7.27888C5.98059 7.27888 6.1403 7.34503 6.25805 7.46278C6.3758 7.58054 6.44196 7.74024 6.44196 7.90677C6.43237 8.1017 6.46371 8.29648 6.53394 8.47857C6.60418 8.66066 6.71176 8.82603 6.84976 8.96403C6.98777 9.10204 7.15314 9.20962 7.33523 9.27985C7.51732 9.35009 7.7121 9.38142 7.90703 9.37184C8.29491 9.36964 8.66629 9.21458 8.94057 8.9403C9.21484 8.66602 9.36991 8.29465 9.3721 7.90677C9.3721 7.74024 9.43826 7.58054 9.55601 7.46278C9.67376 7.34503 9.83347 7.27888 9.99999 7.27888C10.1665 7.27888 10.3262 7.34503 10.444 7.46278C10.5617 7.58054 10.6279 7.74024 10.6279 7.90677C10.6183 8.1017 10.6496 8.29648 10.7199 8.47857C10.7901 8.66066 10.8977 8.82603 11.0357 8.96403C11.1737 9.10204 11.3391 9.20962 11.5212 9.27985C11.7032 9.35009 11.898 9.38142 12.093 9.37184C12.4808 9.36964 12.8522 9.21458 13.1265 8.9403C13.4008 8.66602 13.5558 8.29465 13.558 7.90677C13.558 7.74024 13.6242 7.58054 13.7419 7.46278C13.8597 7.34503 14.0194 7.27888 14.1859 7.27888C14.3524 7.27888 14.5122 7.34503 14.6299 7.46278C14.7477 7.58054 14.8138 7.74024 14.8138 7.90677C14.8139 8.11182 14.857 8.31458 14.9404 8.50191C15.0238 8.68925 15.1456 8.857 15.2979 8.9943C15.4502 9.13161 15.6296 9.23542 15.8245 9.29901C16.0195 9.3626 16.2256 9.38456 16.4296 9.36347C16.8036 9.30818 17.1443 9.11723 17.3867 8.82699C17.6291 8.53675 17.7562 8.1675 17.744 7.78956V7.19516C17.7403 6.9104 17.6923 6.62794 17.6016 6.35798L16.2956 2.42321C16.2804 2.38198 16.2531 2.34632 16.2172 2.32091C16.1814 2.29551 16.1386 2.28156 16.0947 2.28089L3.90529 2.25578Z"
      fill="#057222"
    />
    <path
      d="M16.6979 18.9994H3.30296C2.91508 18.9972 2.54371 18.8422 2.26943 18.5679C1.99515 18.2936 1.84009 17.9222 1.83789 17.5344V9.56436C1.83789 9.39783 1.90404 9.23813 2.02179 9.12038C2.13955 9.00262 2.29925 8.93647 2.46578 8.93647C2.63231 8.93647 2.79201 9.00262 2.90976 9.12038C3.02752 9.23813 3.09367 9.39783 3.09367 9.56436V17.5344C3.09367 17.5899 3.11572 17.6431 3.15497 17.6823C3.19422 17.7216 3.24746 17.7436 3.30296 17.7436H16.6979C16.7534 17.7436 16.8067 17.7216 16.8459 17.6823C16.8852 17.6431 16.9072 17.5899 16.9072 17.5344V9.55599C16.9072 9.38946 16.9734 9.22976 17.0911 9.112C17.2089 8.99425 17.3686 8.9281 17.5351 8.9281C17.7016 8.9281 17.8613 8.99425 17.9791 9.112C18.0968 9.22976 18.163 9.38946 18.163 9.55599V17.5344C18.1608 17.9222 18.0057 18.2936 17.7315 18.5679C17.4572 18.8422 17.0858 18.9972 16.6979 18.9994Z"
      fill="#057222"
    />
    <path
      d="M12.9296 18.9995H7.0693C6.90344 18.9973 6.74499 18.9304 6.62771 18.8132C6.51042 18.6959 6.44357 18.5374 6.44141 18.3716V14.1857C6.4436 13.7978 6.59867 13.4264 6.87294 13.1521C7.14722 12.8778 7.5186 12.7228 7.90648 12.7206H12.0924C12.4803 12.7228 12.8517 12.8778 13.1259 13.1521C13.4002 13.4264 13.5553 13.7978 13.5575 14.1857V18.3716C13.5553 18.5374 13.4885 18.6959 13.3712 18.8132C13.2539 18.9304 13.0954 18.9973 12.9296 18.9995ZM7.69718 17.7437H12.3017V14.1857C12.3017 14.1301 12.2797 14.0769 12.2404 14.0377C12.2011 13.9984 12.1479 13.9764 12.0924 13.9764H7.90648C7.85097 13.9764 7.79774 13.9984 7.75849 14.0377C7.71923 14.0769 7.69718 14.1301 7.69718 14.1857V17.7437Z"
      fill="#057222"
    />
  </svg>`
    ),
    courier: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g clip-path="url(#clip0_116_8484)">
      <path
        d="M19.0242 10.1758L18.2634 9.41522C17.8664 9.01862 17.339 8.80002 16.7786 8.80002H16.7148C16.5402 8.80002 16.3684 8.82902 16.2 8.87202V1.60002C16.2 0.938424 15.6618 0.400024 15 0.400024H4.2C3.5382 0.400024 3 0.938424 3 1.60002V10.5606C2.6834 10.7432 2.3866 10.965 2.1214 11.2304L0.1758 13.1758C-0.0586 13.4102 -0.0586 13.7898 0.1758 14.0242C0.293 14.1414 0.4464 14.2 0.6 14.2C0.7536 14.2 0.907 14.1414 1.0242 14.0242L2.97 12.0788C3.5362 11.5124 4.2896 11.2 5.0912 11.2H9C9.6618 11.2 10.2 11.7384 10.2 12.4V12.9812C10.1258 12.9906 10.0516 13 9.9764 13H7.2C6.8686 13 6.6 13.2684 6.6 13.6C6.6 13.9316 6.8686 14.2 7.2 14.2H9.9764C10.64 14.2 11.2942 13.9756 11.8182 13.5678L16.1614 10.1898C16.3192 10.0674 16.5156 10 16.7148 10H16.7786C17.0188 10 17.245 10.0938 17.4152 10.2636L17.7516 10.6L12.6298 15.721C12.0638 16.2876 11.3104 16.6 10.5088 16.6H5.4428C4.4806 16.6 3.5766 16.9744 2.8972 17.6546L1.9758 18.5756C1.7414 18.81 1.7414 19.1896 1.9758 19.424C2.093 19.5414 2.2464 19.6 2.4 19.6C2.5536 19.6 2.707 19.5414 2.8242 19.4242L3.7458 18.5032C4.1988 18.0496 4.8014 17.8 5.4428 17.8H10.5088C11.6312 17.8 12.6858 17.3628 13.4786 16.5696L19.0242 11.0242C19.1368 10.9118 19.2 10.7594 19.2 10.6C19.2 10.4406 19.1368 10.2882 19.0242 10.1758ZM8.4 1.60002H10.8V6.40002H8.4V1.60002ZM11.3976 12.3754C11.3838 11.0634 10.315 10 9 10H5.0912C4.7876 10 4.4898 10.0346 4.2 10.097V1.60002H7.2V7.00002C7.2 7.33162 7.4686 7.60002 7.8 7.60002H11.4C11.7314 7.60002 12 7.33162 12 7.00002V1.60002H15V9.57322L11.3976 12.3754Z"
        fill="#057222"
      />
    </g>
    <defs>
      <clipPath id="clip0_116_8484">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>`
    ),
    clock: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.44647 5.02729C8.61513 3.99671 10.1496 3.37032 11.8294 3.37032C15.4881 3.37032 18.4591 6.34134 18.4591 10C18.4591 13.6587 15.4881 16.6297 11.8294 16.6297C10.1496 16.6297 8.61513 16.0033 7.44647 14.9727C7.16299 14.7222 6.72863 14.7487 6.47808 15.0331C6.22752 15.3166 6.25495 15.75 6.53843 16.0006C7.94941 17.246 9.80207 18.0014 11.8294 18.0014C16.2452 18.0014 19.8307 14.4159 19.8307 10C19.8307 5.58418 16.2452 1.99866 11.8294 1.99866C9.80207 1.99866 7.94941 2.75399 6.53843 3.99945C6.25495 4.25001 6.22752 4.68346 6.47808 4.96693C6.72863 5.25132 7.16299 5.27784 7.44647 5.02729Z"
      fill="#057222"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.7773 5.97648V9.63424C10.7773 9.81622 10.8496 9.99088 10.9785 10.1189L13.9047 13.0451C14.1717 13.313 14.607 13.313 14.874 13.0451C15.142 12.7781 15.142 12.3428 14.874 12.0758L12.149 9.34985V5.97648C12.149 5.5979 11.8418 5.29065 11.4632 5.29065C11.0846 5.29065 10.7773 5.5979 10.7773 5.97648Z"
      fill="#057222"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.855753 7.48531H6.3424C6.72098 7.48531 7.02823 7.17806 7.02823 6.79948C7.02823 6.4209 6.72098 6.11365 6.3424 6.11365H0.855753C0.477174 6.11365 0.169922 6.4209 0.169922 6.79948C0.169922 7.17806 0.477174 7.48531 0.855753 7.48531Z"
      fill="#057222"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.76982 10.6859H7.25646C7.63504 10.6859 7.94229 10.3786 7.94229 10C7.94229 9.62146 7.63504 9.31421 7.25646 9.31421H1.76982C1.39124 9.31421 1.08398 9.62146 1.08398 10C1.08398 10.3786 1.39124 10.6859 1.76982 10.6859Z"
      fill="#057222"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.68388 13.8863H8.17052C8.5491 13.8863 8.85635 13.5791 8.85635 13.2005C8.85635 12.8219 8.5491 12.5146 8.17052 12.5146H2.68388C2.3053 12.5146 1.99805 12.8219 1.99805 13.2005C1.99805 13.5791 2.3053 13.8863 2.68388 13.8863Z"
      fill="#057222"
    />
  </svg>`
    ),
    close: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="13.9492" y="1.63" width="2.00001" height="16" transform="rotate(45 13.9492 1.63)" fill="#042DE1" />
    <rect x="2.64062" y="3.04999" width="2.00001" height="16" transform="rotate(-45 2.64062 3.04999)" fill="#042DE1" />
  </svg>`
    )
  }, y = [
    { label: "Nadrozmerný / ťažko baliteľný tovar", price: "7,99 – 12,99 €" },
    { label: "Ťažký tovar 45 kg a viac", price: "19,99 €" },
    { label: "Ťažký tovar 70 kg a viac", price: "23,90 €" }
  ], i = {
    pickupLabel: "Osobný odber",
    courierLabel: "Kuriér",
    deliveryTimeLabel: "Termín doručenia:",
    detailsLinkLabel: "Podrobnosti o doprave",
    modalTitle: "Možnosti doručenia",
    modalSubtitle: "Ceny vrátane DPH",
    bulkyHeading: "Objemný, krehký alebo nadrozmerný tovar",
    ctaLabel: "ROZUMIEM",
    freeShortLabel: (o) => `Doprava zdarma nad ${o} €`,
    // POZOR: presný text/hranice (kg, cm, dní navyše počas špičky) nie sú overené v DOM –
    // prevzaté z mockupu, doplniť podľa reálnych podmienok dopravy.
    deliveryTimeNote: (o) => `Objednávky spracúvame v dávkach a bežne doručíme do ${o} pracovných dní od zadania objednávky. Počas období vyššieho dopytu sa termín môže predĺžiť až na 5 pracovných dní.`,
    freeDeliveryNote: () => "pre tovar do 10 kg a najdlhšou stranou do 100 cm. Štandardný tovar (do 45 kg) nad 200 € doručujeme tiež zdarma."
  }, w = (o) => (
    /* HTML */
    `
  <div class="kdlv-block" id="kdlvBlock">
    <div class="kdlv-row">
      <div class="kdlv-row-label">${c.store}<span>${i.pickupLabel}</span></div>
      <div class="kdlv-row-value">${o.pickupPrice}</div>
    </div>
    <div class="kdlv-row">
      <div class="kdlv-row-label">${c.courier}<span>${i.courierLabel}</span></div>
      <div class="kdlv-row-value">${o.courierPrice}</div>
    </div>
    <div class="kdlv-divider"></div>
    <button type="button" class="kdlv-row kdlv-row--btn kdlv-trigger" id="kdlvTimeTrigger">
      <div class="kdlv-row-label kdlv-accent">${c.clock}<span>${i.deliveryTimeLabel}</span></div>
      <div class="kdlv-row-value">${o.daysText}</div>
    </button>
    <div class="kdlv-divider"></div>
    <div class="kdlv-footer">
      <span class="kdlv-free">${o.freeShortLabel}</span>
      <button type="button" class="kdlv-link kdlv-trigger" id="kdlvDetailsTrigger">
        ${i.detailsLinkLabel}
      </button>
    </div>
  </div>
`
  ), L = (o) => (
    /* HTML */
    `
  <div class="kdlv-overlay" id="kdlvOverlay">
    <div class="kdlv-modal" role="dialog" aria-modal="true" aria-labelledby="kdlvModalTitle">
      <button type="button" class="kdlv-close" id="kdlvClose" aria-label="Zatvoriť">${c.close}</button>
      <div class="kdlv-modal-head">
        <h3 id="kdlvModalTitle">${i.modalTitle}</h3>
        <p class="kdlv-modal-sub">${i.modalSubtitle}</p>
      </div>
      <div class="kdlv-modal-body">
        <div class="kdlv-row">
          <div class="kdlv-row-label">${c.store}<span>${i.pickupLabel}</span></div>
          <div class="kdlv-row-value">${o.pickupPrice}</div>
        </div>
        <div class="kdlv-row">
          <div class="kdlv-row-label">${c.courier}<span>${i.courierLabel}</span></div>
          <div class="kdlv-row-value">${o.courierPrice}</div>
        </div>
        <p class="kdlv-subhead">${i.bulkyHeading}</p>
        ${y.map(
      (e) => (
        /* HTML */
        `
              <div class="kdlv-row kdlv-row--tier">
                <div class="kdlv-row-label"><span>${e.label}</span></div>
                <div class="kdlv-row-value">${e.price}</div>
              </div>
            `
      )
    ).join("")}
        <div class="kdlv-time">
          <div class="kdlv-row-label kdlv-accent">${c.clock}<strong>${i.deliveryTimeLabel}</strong></div>
          <p>${o.deliveryTimeNote}</p>
        </div>
        <div class="kdlv-free-box"><strong>${o.freeShortLabel}</strong> — ${o.freeDeliveryNote}</div>
        <button type="button" class="kdlv-cta" id="kdlvCta">${i.ctaLabel}</button>
      </div>
    </div>
  </div>
`
  );
  m({ name: "Kinekus PDP Delivery block", dev: "AI" });
  class $ {
    constructor() {
      this.init();
    }
    async init() {
      await u("head"), document.head.insertAdjacentHTML("beforeend", `<style>${g}</style>`);
      const e = await u(".product-tab__content-item");
      await u("#deliverOptionsModalContent table"), this.render(e);
    }
    render(e) {
      if (p("#kdlvBlock").elements.length) return;
      const n = this.getNativeDeliveryOptions(), t = n.find((d) => /predajn/i.test(d.label)), l = n.find((d) => /adres/i.test(d.label)), r = this.getDeliveryDays(), a = this.getFreeThreshold(), s = {
        pickupPrice: (t == null ? void 0 : t.price) || "0,90 €",
        courierPrice: l ? l.isFree ? "0 €" : l.price : "4,99 €",
        daysText: `do ${r} pracovných dní`,
        freeShortLabel: i.freeShortLabel(a),
        deliveryTimeNote: i.deliveryTimeNote(r),
        freeDeliveryNote: i.freeDeliveryNote()
      };
      e.insertAdjacentHTML("beforeend", w(s)), document.body.insertAdjacentHTML("beforeend", L(s)), this.addEventListeners(), x(
        "#kdlvBlock",
        "exp_kinekus_delivery_block_01",
        "PDP delivery block",
        "PDP delivery block visibility"
      );
    }
    // Číta priamo riadky natívnej tabuľky #deliverOptionsModalContent (bez posledného riadku "Zavrieť")
    getNativeDeliveryOptions() {
      return Array.from(document.querySelectorAll("#deliverOptionsModalContent table tr")).slice(1, -1).map((n) => {
        var h, b;
        const t = n.children[0], l = n.children[1];
        if (!t || !l) return null;
        const r = Array.from(t.childNodes).filter((f) => f.nodeType === Node.TEXT_NODE).map((f) => (f.textContent || "").trim()).filter(Boolean).join(" "), a = ((b = (h = t.querySelector(".delivery-date-info")) == null ? void 0 : h.textContent) == null ? void 0 : b.trim()) || "", s = l.classList.contains("delivery-popup-green"), d = (l.textContent || "").trim();
        return !r || !d ? null : { label: r, dateText: a, price: d, isFree: s };
      }).filter((n) => n !== null);
    }
    getDeliveryDays() {
      const e = document.querySelector(".delivery-days");
      return (e != null && e.dataset.days ? parseInt(e.dataset.days, 10) : 3) || 3;
    }
    getFreeThreshold() {
      var t;
      const n = (((t = document.querySelector(".kinekus-topbar .kinekus-headline")) == null ? void 0 : t.textContent) || "").match(/(\d+)/);
      return n ? n[1] : "79";
    }
    addEventListeners() {
      const e = document.getElementById("kdlvOverlay"), n = () => this.open(), t = () => this.close();
      p("#kdlvTimeTrigger, #kdlvDetailsTrigger").on("click", n), p("#kdlvClose, #kdlvCta").on("click", t), e == null || e.addEventListener("click", (l) => {
        l.target === e && t();
      }), document.addEventListener("keydown", (l) => {
        l.key === "Escape" && t();
      });
    }
    open() {
      p("#kdlvOverlay").addClass("active"), document.body.classList.add("kdlv-lock"), k("exp_kinekus_delivery_popup_01", "Delivery options popup", "click", "PDP delivery block");
    }
    close() {
      p("#kdlvOverlay").removeClass("active"), document.body.classList.remove("kdlv-lock");
    }
  }
  new $();
})();
//# sourceMappingURL=index.js.map
