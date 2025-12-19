(function() {
  "use strict";
  const o = (i) => new Promise((t) => {
    const n = document.querySelector(i);
    n && t(n);
    const e = new MutationObserver(() => {
      const s = document.querySelector(i);
      s && (t(s), e.disconnect());
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
  class r {
    constructor(t) {
      this.elements = t instanceof r ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, n, e) {
      return typeof n == "function" && (e = n, n = ""), this.elements.forEach((s) => {
        s.addEventListener(t, function(a) {
          var C;
          if (n !== "") {
            let c = (C = a.target) == null ? void 0 : C.closest(n);
            c && (e == null || e.call(c, a));
          } else
            e == null || e.call(s, a);
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
        t(new r(n), this.elements.indexOf(n));
      return this;
    }
    style(t, n) {
      const e = t.split("-").map((s, a) => a === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[e] = n;
      }), this;
    }
    find(t) {
      const n = this.elements.map((e) => Array.from(e.querySelectorAll(t)));
      return new r(n.flat());
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
  const l = (i) => new r(i), h = `.crs-christmas-banner {
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 14px 18px;
  border-radius: 12px;
  background: #262626;
  margin: 0 auto 20px;
}
@media (max-width: 768px) {
  .crs-christmas-banner {
    margin: 90px auto 20px;
    align-items: flex-start;
  }
}
.crs-christmas-banner p {
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  padding: 0 !important;
}
@media (max-width: 768px) {
  .crs-christmas-banner p {
    font-size: 14px;
  }
}
.crs-christmas-banner p span {
  font-weight: 700;
}
.crs-christmas-banner p b {
  color: #ffb027;
}
.crs-christmas-banner svg {
  flex-shrink: 0;
}/*# sourceMappingURL=style.css.map */`;
  f({ name: "Christmas banner", dev: "YK" });
  const p = `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
<path d="M19.6875 15.75C20.7748 15.75 21.6562 14.8686 21.6562 13.7812C21.6562 12.6939 20.7748 11.8125 19.6875 11.8125C18.6002 11.8125 17.7188 12.6939 17.7188 13.7812C17.7188 14.8686 18.6002 15.75 19.6875 15.75Z" fill="#FFB027"/>
<path d="M18.1886 10.8793C18.1683 10.8452 18.1519 10.8098 18.1328 10.775C16.8341 10.1456 13.0581 8.53125 8.53125 8.53125C7.80741 8.53125 7.21875 9.11991 7.21875 9.84375V11.1562H17.7391C17.8802 11.0512 18.0311 10.9613 18.1886 10.8793Z" fill="#FFB027"/>
<path d="M17.7397 16.4069L15.7001 20.078L18.081 19.6015L19.007 21.4535L21.2166 16.6655C20.7585 16.9109 20.2427 17.0625 19.6875 17.0625C18.9558 17.0625 18.2864 16.8131 17.7397 16.4069Z" fill="#FFB027"/>
<path d="M15.0649 8.19591C16.1136 8.50632 17.0113 8.8456 17.7227 9.14813C17.7266 8.81147 17.7922 8.49254 17.8907 8.18804L15.246 5.01375L16.254 4.17375L18.5909 6.97791C18.877 6.66619 19.2209 6.41091 19.6074 6.22782L19.1408 3.89354C18.0836 3.7216 17.1701 3.05879 16.6786 2.10657C15.6693 2.3566 14.6232 2.40122 13.5962 2.23913C13.9401 3.34819 13.8639 4.5511 13.3829 5.60832C14.3056 6.1635 14.9297 7.11507 15.0649 8.19591Z" fill="#FFB027"/>
<path d="M19.5595 10.5131C19.6028 10.5112 19.6435 10.5 19.6875 10.5C20.3739 10.5 21.0098 10.7133 21.5375 11.0749C22.367 10.8373 22.9688 10.0702 22.9688 9.1875C22.9688 8.10206 22.0854 7.21875 21 7.21875C19.9146 7.21875 19.0312 8.10206 19.0312 9.1875C19.0312 9.68494 19.2275 10.1515 19.5595 10.5131Z" fill="#FFB027"/>
<path d="M23.625 14.4375C24.7104 14.4375 25.5937 13.5542 25.5937 12.4688C25.5937 11.5028 24.8935 10.7015 23.9748 10.5354C23.6683 11.2055 23.1479 11.76 22.4903 12.0999C22.7876 12.5934 22.9687 13.1644 22.9687 13.7813C22.9687 13.9591 22.9438 14.1304 22.9162 14.3004C23.1407 14.3876 23.3789 14.4375 23.625 14.4375Z" fill="#FFB027"/>
<path d="M26.628 11.1562H34.7812V9.84375C34.7812 9.11991 34.1926 8.53125 33.4687 8.53125C30.3371 8.53125 27.5822 9.29578 25.7401 9.98091C26.1168 10.3018 26.4265 10.6975 26.628 11.1562Z" fill="#FFB027"/>
<path d="M34.7812 12.4688H26.9062C26.9062 12.936 26.8052 13.3783 26.628 13.7812H31.1023C32.3846 13.7812 33.6374 14.0739 34.7806 14.6258L34.7812 12.4688Z" fill="#FFB027"/>
<path d="M34.4571 15.9482C33.4241 15.3983 32.2809 15.0938 31.103 15.0938H25.5741C25.5563 15.1069 25.5412 15.1226 25.5235 15.1351C27.1661 15.6883 29.969 16.4062 33.4687 16.4062C33.8645 16.4062 34.2162 16.2264 34.4571 15.9482Z" fill="#FFB027"/>
<path d="M23.6486 21.4541L24.5746 19.6022L26.9699 20.0813L24.9191 16.3223C24.1651 16.0591 23.6631 15.8373 23.4498 15.7375C23.3343 15.7316 23.2188 15.7251 23.1059 15.7074L22.0513 17.9924L23.6486 21.4541Z" fill="#FFB027"/>
<path d="M25.746 4.17375L26.754 5.01375L24.1087 8.18804C24.2071 8.49319 24.2727 8.81213 24.2773 9.14879C24.9683 8.8561 25.8746 8.51485 26.9404 8.2005C27.0861 7.09997 27.7062 6.15825 28.6178 5.60897C28.1367 4.55241 28.0606 3.34885 28.4045 2.23979C27.3768 2.40254 26.3307 2.35725 25.3221 2.10722C24.8305 3.05944 23.9164 3.7216 22.8598 3.89419L22.3926 6.22782C22.7798 6.41091 23.123 6.66554 23.4091 6.97791L25.746 4.17375Z" fill="#FFB027"/>
<path d="M39.7386 25.2807C39.6651 25.2079 39.583 25.1423 39.4866 25.0943L38.0172 24.36C31.7533 26.8058 26.8026 31.7664 24.3685 38.0343L25.0943 39.4866C25.1442 39.5863 25.2144 39.6703 25.2919 39.7451C27.9733 33.182 33.1793 27.97 39.7386 25.2807Z" fill="#FFB027"/>
<path d="M35.6652 23.9603C34.2936 23.5627 33.035 22.8309 31.9968 21.7928L28.7529 18.5483C28.2115 18.0068 27.5841 17.5704 26.9082 17.2272L29.4669 21.9188L26.5834 21.3419C26.7914 22.0854 26.9062 22.8526 26.9062 23.6388C26.9062 25.9212 26.0177 28.0672 24.4033 29.6809L21.9332 32.151C22.8985 33.1629 23.5869 34.3691 23.9643 35.681C26.4403 30.574 30.5616 26.4449 35.6652 23.9603Z" fill="#FFB027"/>
<path d="M34.2917 29.9473C34.6192 30.3922 34.8055 30.9337 34.8055 31.5C34.8055 32.9477 33.6282 34.125 32.1805 34.125C31.5774 34.125 31.0091 33.917 30.5517 33.5541C28.9721 35.4283 27.6603 37.5355 26.6772 39.8252C29.671 38.6479 32.3466 36.9029 34.629 34.6237C36.9101 32.3387 38.6551 29.6592 39.8317 26.6608C37.8348 27.5198 35.9776 28.6289 34.2917 29.9473Z" fill="#FFB027"/>
<path d="M31.4298 32.5651C31.6477 32.7187 31.9049 32.8125 32.1805 32.8125C32.9044 32.8125 33.493 32.2239 33.493 31.5C33.493 31.2421 33.4097 30.9986 33.2725 30.7886C32.6281 31.3491 32.0138 31.9423 31.4298 32.5651Z" fill="#FFB027"/>
<path d="M25.5937 23.6388C25.5937 22.829 25.4566 22.0428 25.198 21.2907L23.6014 24.4834L21.3281 19.5582L19.0549 24.4834L17.3558 21.0853L13.1742 21.9214L15.9948 16.844C14.9763 17.2023 14.0365 17.7818 13.2707 18.5483L10.0262 21.7928C8.98865 22.8303 7.7293 23.5627 6.35774 23.9604C11.4614 26.4449 15.5833 30.574 18.0587 35.6816C18.4551 34.3035 19.1887 33.0389 20.2302 31.9968L23.4741 28.7529C24.8417 27.3866 25.5937 25.5708 25.5937 23.6388Z" fill="#FFB027"/>
<path d="M7.54294 15.9482C7.78378 16.2264 8.13553 16.4062 8.53125 16.4062C12.1216 16.4062 14.9513 15.6686 16.611 15.0938H10.8977C9.71906 15.0938 8.57588 15.3983 7.54294 15.9482Z" fill="#FFB027"/>
<path d="M4.00706 24.36L2.53771 25.0943C2.44124 25.1423 2.35921 25.2079 2.28571 25.2807C8.84493 27.9694 14.0503 33.1813 16.7317 39.7445C16.8092 39.6697 16.8801 39.5863 16.9293 39.4866L17.6557 38.0343C15.2211 31.7664 10.271 26.8052 4.00706 24.36Z" fill="#FFB027"/>
<path d="M9.84375 34.125C8.39606 34.125 7.21875 32.9477 7.21875 31.5C7.21875 30.9337 7.40512 30.3929 7.73259 29.9473C6.04668 28.6289 4.1895 27.5198 2.19253 26.6608C3.36787 29.6553 5.10956 32.3315 7.38609 34.6139C9.66918 36.8977 12.3487 38.6453 15.3471 39.8245C14.3633 37.5349 13.0515 35.4277 11.4726 33.5534C11.0152 33.917 10.4468 34.125 9.84375 34.125Z" fill="#FFB027"/>
<path d="M16.4062 13.7812C16.4062 13.314 16.5073 12.8717 16.6845 12.4688H7.21875V14.6258C8.36259 14.0739 9.61472 13.7812 10.897 13.7812H16.4062Z" fill="#FFB027"/>
<path d="M10.5938 32.5651C10.0104 31.9423 9.39619 31.3491 8.75175 30.788C8.61459 30.9993 8.53125 31.2421 8.53125 31.5C8.53125 32.2239 9.11991 32.8125 9.84375 32.8125C10.1194 32.8125 10.376 32.7187 10.5938 32.5651Z" fill="#FFB027"/>
</svg>`;
  class d {
    constructor() {
      this.init();
    }
    async init() {
      await o("body"), l("body").elements[0].insertAdjacentHTML(
        "afterbegin",
        `
			<style>${h}</style>`
      ), await o("header"), l("header").elements[0].insertAdjacentHTML(
        "afterend",
        /* HTML */
        `
        <div class="crs-christmas-banner container">
          ${p}
          <p>
            <span>Holiday Closure:</span> We will be closed from <b>Tuesday, 23rd December 2025 at 2pm</b> and will
            reopen on <b>Monday, 5th January 2026 at 9am</b>
          </p>
        </div>
      `
      ), window.getComputedStyle(l("header").elements[0]).position === "fixed" && window.innerWidth > 768 && (l(".crs-christmas-banner").elements[0].style.margin = "110px auto -80px");
    }
  }
  new d();
})();
//# sourceMappingURL=index.js.map
