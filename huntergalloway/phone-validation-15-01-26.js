(function() {
  "use strict";
  const h = `.crs_phone_validation {
  width: 100%;
  max-width: 480px;
  margin: 20px 0 0;
}
.crs_phone_validation .crs_phone_container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.crs_phone_validation .crs_phone_input_wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.crs_phone_validation .crs_phone_label {
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: #000000;
}
.crs_phone_validation .crs_phone_input_container {
  position: relative;
  width: 100%;
}
.crs_phone_validation .crs_phone_input {
  width: 100%;
  height: 42px;
  padding: 0 120px 0 16px;
  background: #f4f4f4;
  border: 1px solid #d8d8d8;
  border-radius: 12px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #757575;
  outline: none;
  transition: border-color 0.3s ease;
}
.crs_phone_validation .crs_phone_input:focus {
  border-color: #09233e;
}
.crs_phone_validation .crs_phone_input::-moz-placeholder {
  color: #757575;
}
.crs_phone_validation .crs_phone_input::placeholder {
  color: #757575;
}
.crs_phone_validation .crs_send_code_btn {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px 12px;
  background: #e99202;
  border: none;
  border-radius: 12px;
  font-family: "Gotham", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #09233e;
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.3s ease;
}
.crs_phone_validation .crs_send_code_btn:hover {
  opacity: 0.9;
}
.crs_phone_validation .crs_send_code_btn.crs_sent {
  background: #ffffff;
  color: #f4f4f4;
}
.crs_phone_validation .crs_send_code_btn.crs_sent:hover {
  background: #e8e8e8;
}
.crs_phone_validation .crs_send_code_btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.crs_phone_validation .crs_verification_section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.crs_phone_validation .crs_verification_header {
  display: flex;
  align-items: center;
  gap: 24px;
}
.crs_phone_validation .crs_verify_label {
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: #000000;
}
.crs_phone_validation .crs_resend_btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #e99202;
  text-decoration: underline;
  transition: opacity 0.3s ease;
}
.crs_phone_validation .crs_resend_btn svg {
  flex-shrink: 0;
}
.crs_phone_validation .crs_resend_btn:hover {
  opacity: 0.8;
}
.crs_phone_validation .crs_resend_btn:disabled {
  color: #d8d8d8;
  cursor: not-allowed;
}
.crs_phone_validation .crs_resend_btn:disabled svg path {
  stroke: #d8d8d8;
}
.crs_phone_validation .crs_code_inputs_wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}
.crs_phone_validation .crs_code_input {
  width: 56px;
  height: 42px;
  background: #f4f4f4;
  border: 1px solid #d8d8d8;
  border-radius: 12px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #757575;
  outline: none;
  transition: border-color 0.3s ease;
}
.crs_phone_validation .crs_code_input:focus {
  border-color: #09233e;
}
.crs_phone_validation .crs_code_input.crs_filled {
  border-color: #02bc7d;
}
.crs_phone_validation .crs_code_input.crs_error {
  border-color: #e74c3c;
}
.crs_phone_validation .crs_timer_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 0 18px;
  background: #fef7ea;
  border-radius: 12px;
}
.crs_phone_validation .crs_timer {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #000000;
}
.crs_phone_validation .crs_verified_wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 42px;
  padding: 0 16px;
  background: #fef7ea;
  border-radius: 12px;
}
.crs_phone_validation .crs_verified_wrapper svg {
  flex-shrink: 0;
}
.crs_phone_validation .crs_verified_text {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  color: #09233e;
  white-space: nowrap;
}
.crs_phone_validation .crs_hidden {
  display: none !important;
}
.crs_phone_validation .crs_error_message {
  color: #e74c3c;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  margin-top: -8px;
  text-align: center;
  display: none;
  font-weight: 400;
}
.crs_phone_validation .crs_error_message.active {
  display: block;
}

#home_quiz .step_4 form p.crs_phone_error {
  color: #e74c3c;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  margin-top: -8px;
  text-align: right;
  display: none;
  font-weight: 400;
}
#home_quiz .step_4 form p.crs_phone_error.active {
  display: block;
}

.step_4 #phone {
  display: none;
}/*# sourceMappingURL=style.css.map */`, a = (o, e, n, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: e,
      event_type: n,
      event_loc: t
    }), v(`Event: ${o} | ${e} | ${n} | ${t}`, "success");
  }, _ = (o) => new Promise((e) => {
    const n = document.querySelector(o);
    n && e(n);
    const t = new MutationObserver(() => {
      const s = document.querySelector(o);
      s && (e(s), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), f = ({ name: o, dev: e }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class l {
    constructor(e) {
      this.elements = e instanceof l ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, n, t) {
      return typeof n == "function" && (t = n, n = ""), this.elements.forEach((s) => {
        s.addEventListener(e, function(r) {
          var c;
          if (n !== "") {
            let d = (c = r.target) == null ? void 0 : c.closest(n);
            d && (t == null || t.call(d, r));
          } else
            t == null || t.call(s, r);
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
        e(new l(n), this.elements.indexOf(n));
      return this;
    }
    style(e, n) {
      const t = e.split("-").map((s, r) => r === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[t] = n;
      }), this;
    }
    find(e) {
      const n = this.elements.map((t) => Array.from(t.querySelectorAll(e)));
      return new l(n.flat());
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
  const i = (o) => new l(o), u = (o) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", o, "variant_1"));
    }, 1e3);
  }, v = (o, e = "info") => {
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
  }, m = (
    /* HTML */
    `
  <div class="crs_phone_validation">
    <div class="crs_phone_container">
      <div class="crs_phone_input_wrapper">
        <div class="crs_phone_input_container">
          <input type="tel" class="crs_phone_input" placeholder="+61 4XX XXX XXX" maxlength="15" />
          <button class="crs_send_code_btn">Send code</button>
        </div>
      </div>

      <div class="crs_verification_section crs_hidden">
        <div class="crs_verification_header">
          <span class="crs_verify_label">Verify Phone Number</span>
          <button class="crs_resend_btn">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z"
                stroke="#E99202"
                stroke-width="1.5"
              />
              <path d="M7 4V7L9 9" stroke="#E99202" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <span>Resend verification code</span>
          </button>
        </div>

        <div class="crs_code_inputs_wrapper">
          <input type="text" class="crs_code_input" maxlength="1" data-index="0" />
          <input type="text" class="crs_code_input" maxlength="1" data-index="1" />
          <input type="text" class="crs_code_input" maxlength="1" data-index="2" />
          <input type="text" class="crs_code_input" maxlength="1" data-index="3" />

          <div class="crs_timer_wrapper">
            <span class="crs_timer">00:59</span>
          </div>

          <div class="crs_verified_wrapper" style="display: none;">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8" fill="#02BC7D" />
              <path d="M6 9L8 11L12 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="crs_verified_text">Verified</span>
          </div>
        </div>
      </div>
      <p class="crs_phone_error"></p>
    </div>
  </div>
`
  );
  f({ name: "Phone Validation", dev: "YK" }), u("Phone_Validation");
  class g {
    constructor() {
      this.timerInterval = null, this.timeLeft = 59, this.phoneNumber = "", this.isVerified = !1, this.init();
    }
    async init() {
      await _(".quiz_card .step_4 input#phone"), i("body").elements[0].insertAdjacentHTML("beforeend", `<style class="crs_phone_style">${h}</style>`), i(".quiz_card .step_4 input#phone").elements[0].insertAdjacentHTML("afterend", m), i("#main_button").on("click", () => {
        const e = i(".crs_phone_input").elements[0].value;
        i(".step_4").elements[0].classList.contains("active") && i(".step_4 #phone+.field-error").elements[0] && this.validatePhone(e) && !this.isVerified && i(".step_4 #phone+.field-error").text("Please verify you phone number");
      }), this.setupPhoneInput(), this.setupCodeInputs(), this.setupResendButton(), this.setupSendCodeButton();
    }
    // Format phone input with mask
    setupPhoneInput() {
      i(".crs_phone_input").elements[0].addEventListener("input", (n) => {
        const t = n.target;
        let s = t.value.replace(/\D/g, "");
        if (s.length > 0) {
          let r = "+61";
          s.length > 2 && (r += ` ${s.substring(2, 5)}`, s.length > 5 && (r += ` ${s.substring(5, 8)}`, s.length > 8 && (r += ` ${s.substring(8, 11)}`))), t.value = r;
        }
        i(".crs_phone_error").removeClass("active").text(""), i(".step_4 #phone").elements[0].value = "", i(".step_4 #phone").elements[0].dispatchEvent(new Event("input")), this.isVerified = !1, this.phoneNumber = "";
      }), a("phone_input_visible", "Phone input visible", "view", "Phone Validation");
    }
    // Setup code inputs functionality
    setupCodeInputs() {
      const e = i(".crs_code_input").elements;
      e.forEach((n, t) => {
        n.addEventListener("input", (s) => {
          const r = s.target, c = r.value;
          if (!/^\d*$/.test(c)) {
            r.value = "";
            return;
          }
          c.length === 1 && (r.classList.add("crs_filled"), t < e.length - 1 && e[t + 1].focus(), this.checkCodeComplete());
        }), n.addEventListener("keydown", (s) => {
          if (s.key === "Backspace") {
            const r = s.target;
            r.value === "" && t > 0 ? (e[t - 1].focus(), e[t - 1].value = "", e[t - 1].classList.remove("crs_filled")) : (r.value = "", r.classList.remove("crs_filled"));
          }
        }), n.addEventListener("paste", (s) => {
          var d;
          s.preventDefault();
          const r = (d = s.clipboardData) == null ? void 0 : d.getData("text");
          ((r == null ? void 0 : r.replace(/\D/g, "").split("")) || []).forEach((b, p) => {
            t + p < e.length && (e[t + p].value = b, e[t + p].classList.add("crs_filled"));
          }), this.checkCodeComplete();
        });
      }), a("code_inputs_visible", "Code inputs visible", "view", "Phone Validation");
    }
    // Check if all code inputs are filled
    checkCodeComplete() {
      const e = i(".crs_code_input").elements;
      if (Array.from(e).every((t) => t.value !== "")) {
        const t = Array.from(e).map((s) => s.value).join("");
        this.verifyCode(t);
      }
    }
    // Verify the code (mock implementation)
    async verifyCode(e) {
      a("code_entered", `Code: ${e}`, "input", "Phone Validation");
      const n = await this.checkCodeRequest(this.phoneNumber, e).then((t) => t.json());
      n.success && n.verificationCheck.valid ? (this.isVerified = !0, this.showVerifiedState(), i(".step_4 #phone").elements[0].value = this.phoneNumber, i(".step_4 #phone").elements[0].dispatchEvent(new Event("input")), a("phone_verified", "Phone successfully verified", "success", "Phone Validation")) : (i(".crs_phone_error").text("Invalid verification code. Please try again.").addClass("active"), a("invalid_code", "Invalid verification code entered", "error", "Phone Validation"));
    }
    // Show verified state
    showVerifiedState() {
      const e = i(".crs_timer_wrapper").elements[0], n = i(".crs_verified_wrapper").elements[0], t = i(".crs_resend_btn").elements[0];
      e && n && (e.style.display = "none", n.style.display = "flex"), t && (t.disabled = !0), this.timerInterval && clearInterval(this.timerInterval);
    }
    // Setup resend button
    setupResendButton() {
      i(".crs_resend_btn").elements[0].addEventListener("click", () => {
        this.resendCode(), a("resend_code_click", "Resend verification code clicked", "click", "Phone Validation");
      });
    }
    // Resend verification code
    resendCode() {
      const e = i(".crs_code_input").elements;
      if (e.forEach((n) => {
        n.value = "", n.classList.remove("crs_filled");
      }), this.startTimer(), e[0] && e[0].focus(), this.phoneNumber)
        this.sendCode(this.phoneNumber);
      else {
        const n = i(".crs_phone_input").elements[0].value;
        this.validatePhone(n) ? (this.sendCode(n), this.phoneNumber = n, i(".crs_phone_error").removeClass("active").text("")) : (i(".crs_phone_error").text("Please enter a valid Australian mobile number.").addClass("active"), a("invalid_phone", "Invalid phone number", "error", "Phone Validation"));
      }
    }
    // Setup send code button
    setupSendCodeButton() {
      const e = i(".crs_send_code_btn").elements[0], n = i(".crs_phone_input").elements[0];
      e.addEventListener("click", (t) => {
        t.preventDefault();
        const s = n.value;
        this.validatePhone(s) ? (this.sendCode(s), this.phoneNumber = s, i(".crs_phone_error").removeClass("active").text(""), a("send_code_click", "Send code button clicked", "click", "Phone Validation")) : (i(".crs_phone_error").text("Please enter a valid Australian mobile number.").addClass("active"), a("invalid_phone", "Invalid phone number", "error", "Phone Validation"));
      });
    }
    // Validate phone number (Australian mobile)
    validatePhone(e) {
      const n = e.replace(/\D/g, "");
      return n.length !== 11 ? !1 : n.startsWith("61") && n.charAt(2) === "4";
    }
    // Send verification code
    async sendCode(e) {
      const n = i(".crs_send_code_btn").elements[0], t = i(".crs_code_input").elements[0], s = i(".crs_verification_section").elements[0];
      s == null || s.classList.remove("crs_hidden"), n.classList.add("crs_sent"), n.disabled = !0, this.startTimer(), t && t.focus();
      const r = await this.sendCodeRequest(e);
      console.log(r), a("code_sent", "Verification code sent", "success", "Phone Validation");
    }
    // Start countdown timer
    startTimer() {
      const e = i(".crs_timer").elements[0], n = i(".crs_resend_btn").elements[0], t = i(".crs_timer_wrapper").elements[0];
      this.timerInterval && clearInterval(this.timerInterval), this.timeLeft = 59, n.disabled = !0, t && (t.style.display = "flex"), this.timerInterval = setInterval(() => {
        if (this.timeLeft--, e) {
          const s = Math.floor(this.timeLeft / 60), r = this.timeLeft % 60;
          e.textContent = `${s.toString().padStart(2, "0")}:${r.toString().padStart(2, "0")}`;
        }
        this.timeLeft <= 0 && (this.timerInterval && clearInterval(this.timerInterval), n.disabled = !1);
      }, 1e3);
    }
    async sendCodeRequest(e) {
      return await fetch("https://next-client-api.vercel.app/api/verify/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ phoneNumber: e, var2: !0 })
      });
    }
    async checkCodeRequest(e, n) {
      return await fetch("https://next-client-api.vercel.app/api/verify/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ phoneNumber: e, code: n, var2: !0 })
      });
    }
  }
  new g();
})();
//# sourceMappingURL=index.js.map
