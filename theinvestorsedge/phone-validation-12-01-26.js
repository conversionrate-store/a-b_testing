(function() {
  "use strict";
  const p = (r) => new Promise((e) => {
    const n = document.querySelector(r);
    n && e(n);
    const t = new MutationObserver(() => {
      const i = document.querySelector(r);
      i && (e(i), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), u = ({ name: r, dev: e }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class a {
    constructor(e) {
      this.elements = e instanceof a ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, n, t) {
      return typeof n == "function" && (t = n, n = ""), this.elements.forEach((i) => {
        i.addEventListener(e, function(s) {
          var c;
          if (n !== "") {
            let l = (c = s.target) == null ? void 0 : c.closest(n);
            l && (t == null || t.call(l, s));
          } else
            t == null || t.call(i, s);
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
        e(new a(n), this.elements.indexOf(n));
      return this;
    }
    style(e, n) {
      const t = e.split("-").map((i, s) => s === 0 ? i : i.charAt(0).toUpperCase() + i.slice(1)).join("");
      return this.elements.forEach(function(i) {
        i.style[t] = n;
      }), this;
    }
    find(e) {
      const n = this.elements.map((t) => Array.from(t.querySelectorAll(e)));
      return new a(n.flat());
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
  const o = (r) => new a(r), v = (r) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, d = (r, e = "info") => {
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
    console.log(`%c>>> ${r}`, `${n} font-size: 16px; font-weight: 600`);
  }, h = {
    resendIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M12.2841 4.65524C11.3914 3.94094 10.3076 3.375 9 3.375C5.8934 3.375 3.375 5.89339 3.375 9C3.375 12.1066 5.8934 14.625 9 14.625C11.4412 14.625 13.521 13.0691 14.2985 10.8942C14.4379 10.5041 14.8313 10.2426 15.2365 10.3285L15.9701 10.484C16.3754 10.5699 16.6377 10.9697 16.5134 11.3648C15.509 14.5584 12.5262 16.875 9 16.875C4.65076 16.875 1.125 13.3492 1.125 9C1.125 4.65076 4.65076 1.125 9 1.125C11.0876 1.125 12.7137 2.07635 13.8834 3.05595L15.2197 1.71967C15.4342 1.50517 15.7568 1.441 16.037 1.55709C16.3173 1.67317 16.5 1.94665 16.5 2.25V6.375C16.5 6.78921 16.1642 7.125 15.75 7.125H11.625C11.3217 7.125 11.0482 6.94227 10.9321 6.66201C10.8161 6.38176 10.8802 6.05917 11.0947 5.84467L12.2841 4.65524Z" fill="#59B4E5"/>
</svg>`,
    checkIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<g clip-path="url(#clip0_1_3410)">
<path d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM12.87 6.84L8.73 12.24C8.55 12.42 8.28 12.6 8.01 12.6C7.74 12.6 7.47 12.51 7.29 12.24L5.13 9.45C4.86 9.09 4.86 8.46 5.31 8.19C5.76 7.92 6.3 7.92 6.57 8.37L8.01 10.26L11.43 5.76C11.7 5.4 12.33 5.31 12.69 5.58C13.14 5.85 13.14 6.39 12.87 6.84Z" fill="#02BC7D"/>
</g>
<defs>
<clipPath id="clip0_1_3410">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>`
  }, m = (
    /* HTML */
    `
  <div class="crs-phone-input-container">
    <input type="text" class="crs-phone-input-field" name="crs-phone" />
    <button class="send-code-button">Send code</button>
  </div>
`
  ), g = (
    /* HTML */
    `
  <div class="verification-container">
    <div class="verification-content">
      <div class="verification-label">
        <span class="label-text">Verify Phone Number</span>
        <span class="label-required">*</span>
      </div>
      <div class="verification-inputs-wrapper">
        <div class="verification-inputs">
          <div class="verification-input">
            <input type="text" maxlength="1" class="input-field" placeholder="x" />
          </div>
          <div class="verification-input">
            <input type="text" maxlength="1" class="input-field" placeholder="x" />
          </div>
          <div class="verification-input">
            <input type="text" maxlength="1" class="input-field" placeholder="x" />
          </div>
          <div class="verification-input">
            <input type="text" maxlength="1" class="input-field" placeholder="x" />
          </div>
        </div>
        <div class="verification-timer">
          <span class="timer-text">00:59</span>
        </div>
      </div>
    </div>
    <div class="verification-resend">
      ${h.resendIcon}
      <span class="resend-link">Resend verification code</span>
    </div>
  </div>
`
  ), b = `.hs_mobilephone .input {
  position: relative;
}

.crs-phone-input-container {
  position: relative;
}

.send-code-button {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  width: -moz-fit-content;
  width: fit-content;
  padding: 6px 16px;
  background-color: #ff9902;
  color: #09233e;
  border: none;
  font-weight: 600;
  font-size: 14px;
}

.verification-container {
  display: none;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 30px;
}
.verification-container.active {
  display: flex;
}

.verification-content {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.verification-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: #09233e;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01);
}
.verification-label .label-text {
  white-space: nowrap;
}
.verification-label .label-required {
  color: #09233e;
}

.verification-inputs-wrapper {
  display: flex;
  align-items: center;
  gap: 24px;
}

.verification-inputs {
  display: flex;
  gap: 12px;
  align-items: center;
}

.verification-input {
  width: 48px;
  height: 37px;
  position: relative;
  overflow: hidden;
  border-bottom: 2px solid #ff9902;
}
.verification-input .input-field {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  color: #09233e;
  outline: none;
}
.verification-input .input-field::-moz-placeholder {
  color: #b7b7b7;
}
.verification-input .input-field::placeholder {
  color: #b7b7b7;
}
.verification-input .input-field:focus {
  outline: none;
}
.verification-input .input-field:disabled {
  background: transparent;
  color: #b7b7b7;
  pointer-events: none;
}

.verification-timer {
  width: 72px;
  height: 37px;
  background: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
}
.verification-timer .timer-text {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #09233e;
  letter-spacing: -0.5px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01);
}

.verification-resend {
  display: flex;
  align-items: center;
  gap: 8px;
}
.verification-resend .resend-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
.verification-resend .resend-link {
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 26px;
  color: #59b4e5;
  text-decoration: underline;
  text-underline-position: from-font;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01);
  white-space: nowrap;
  cursor: pointer;
}
.verification-resend .resend-link:hover {
  opacity: 0.8;
}
.verification-resend .resend-link.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.phone-error {
  margin-top: 10px;
  color: #cc0201;
}

.verification-error {
  color: #cc0201;
}

.phone-verified {
  display: flex;
  align-items: center;
  gap: 8px;
}/*# sourceMappingURL=style.css.map */`;
  u({ name: "Phone validation", dev: "YK" }), v("phone_validation");
  class x {
    constructor() {
      this.timerInterval = null, this.timeLeft = 59, this.phoneChecked = !1, this.code = "", this.phoneNumber = "", this.checkingCode = !1, this.init();
    }
    async init() {
      await p("body"), o("body").elements[0].insertAdjacentHTML("beforeend", `<style>${b}</style>`), await p(".hs_mobilephone"), o(".hs_mobilephone").elements[0].insertAdjacentHTML("beforeend", m), o(".hs_mobilephone").elements[0].insertAdjacentHTML("beforeend", g);
      const e = o(".hs_mobilephone .crs-phone-input-field").elements[0];
      o(".send-code-button").elements[0].addEventListener("click", async (n) => {
        var s;
        n.preventDefault();
        const t = e.value.trim();
        if (!this.isValidUSPhone(t)) {
          d("Invalid US phone number");
          const c = document.querySelector(".phone-error") || document.querySelector(".hs_mobilephone .hs-error-msg");
          setTimeout(() => {
            var l, f;
            !c && !document.querySelector(".hs_mobilephone .hs-error-msg") && ((f = (l = e.parentElement) == null ? void 0 : l.parentElement) == null || f.insertAdjacentHTML(
              "beforeend",
              '<div class="phone-error">Please enter a valid phone number</div>'
            ));
          }, 500);
          return;
        }
        (s = document.querySelector(".phone-error")) == null || s.remove();
        const i = this.normalizeUSPhone(t);
        d(`US phone validated: ${i}`), o(".verification-container").elements[0].classList.add("active"), this.getCodeRequest("+1" + i), this.phoneNumber = i, this.startTimer();
      }), e.addEventListener("input", () => {
        var n;
        (n = document.querySelector(".phone-error")) == null || n.remove();
      }), this.setupInputNavigation(), this.setupResendLink(), o(".hs_submit input").elements[0].addEventListener("click", async (n) => {
        this.phoneChecked;
      });
    }
    setupInputNavigation() {
      const e = document.querySelectorAll(".verification-input .input-field");
      e.forEach((n, t) => {
        n.addEventListener("input", async (i) => {
          if (this.checkingCode) return;
          const s = i.target;
          s.value = s.value.replace(/[^0-9]/g, ""), s.value.length === 1 && t < e.length - 1 && e[t + 1].focus(), this.code = "", e.forEach((c) => {
            this.code += c.value;
          }), this.checkCode();
        }), n.addEventListener("keydown", (i) => {
          const s = i.target;
          i.key === "Backspace" && s.value === "" && t > 0 && e[t - 1].focus();
        });
      });
    }
    async checkCode() {
      if (this.code.length === 4)
        if (this.checkingCode = !0, (await this.checkCodeRequest("+1" + this.phoneNumber, this.code).then((n) => n.json())).success)
          d("Verification code correct"), this.phoneChecked = !0, document.querySelectorAll(".verification-input .input-field").forEach((n) => {
            n.disabled = !0;
          }), o(".verification-timer").elements[0].insertAdjacentHTML(
            "afterend",
            `<div class="phone-verified">${h.checkIcon} Phone verified</div>`
          ), o(".verification-timer").style("display", "none"), o(".verification-resend").style("display", "none"), o(".hs_mobilephone .input input").elements[0].value = "+1" + this.phoneNumber, o(".hs_mobilephone .input input").elements[0].dispatchEvent(
            new Event("input", { bubbles: !0 })
          );
        else {
          if (this.checkingCode = !1, document.querySelector(".verification-error")) return;
          o(".verification-timer").elements[0].insertAdjacentHTML(
            "afterend",
            '<div class="verification-error">Incorrect verification code</div>'
          );
        }
    }
    startTimer() {
      const e = document.querySelector(".timer-text"), n = document.querySelector(".resend-link");
      !e || !n || (n.classList.add("disabled"), this.timerInterval = setInterval(() => {
        this.timeLeft--;
        const t = Math.floor(this.timeLeft / 60), i = this.timeLeft % 60;
        e.textContent = `${String(t).padStart(2, "0")}:${String(i).padStart(2, "0")}`, this.timeLeft <= 0 && (clearInterval(this.timerInterval), n.classList.remove("disabled"), e.textContent = "00:00");
      }, 1e3));
    }
    setupResendLink() {
      const e = document.querySelector(".resend-link");
      e && e.addEventListener("click", (n) => {
        if (e.classList.contains("disabled")) {
          n.preventDefault();
          return;
        }
        clearInterval(this.timerInterval), this.timeLeft = 59, this.startTimer();
        const t = document.querySelectorAll(".verification-input .input-field");
        t.forEach((i) => {
          i.value = "";
        }), t.length > 0 && t[0].focus(), d("Resend verification code clicked");
      });
    }
    isValidUSPhone(e) {
      const n = this.normalizeUSPhone(e);
      if (n.length !== 10) return !1;
      const t = n.slice(0, 3), i = n.slice(3, 6), s = n.slice(6);
      return /^[2-9]\d{2}$/.test(t) && /^[2-9]\d{2}$/.test(i) && /^\d{4}$/.test(s);
    }
    normalizeUSPhone(e) {
      const n = e.replace(/\D/g, "");
      return n.length === 11 && n.startsWith("1") ? n.slice(1) : n;
    }
    async getCodeRequest(e) {
      return await fetch("https://next-client-api.vercel.app/api/verify/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ phoneNumber: e })
      });
    }
    async checkCodeRequest(e, n) {
      return await fetch("https://next-client-api.vercel.app/api/verify/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ phoneNumber: e, code: n })
      });
    }
  }
  new x();
})();
//# sourceMappingURL=index.js.map
