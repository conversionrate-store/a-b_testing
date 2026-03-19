(function() {
  "use strict";
  const _ = (l, n, s, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: l,
      event_desc: n,
      event_type: s,
      event_loc: o
    }), V(`Event: ${l} | ${n} | ${s} | ${o}`, "success");
  }, H = (l) => new Promise((n) => {
    const s = document.querySelector(l);
    s && n(s);
    const o = new MutationObserver(() => {
      const d = document.querySelector(l);
      d && (n(d), o.disconnect());
    });
    o.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), O = ({ name: l, dev: n }) => {
    console.log(
      `%c EXP: ${l} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class L {
    constructor(n) {
      this.elements = n instanceof L ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, s, o) {
      return typeof s == "function" && (o = s, s = ""), this.elements.forEach((d) => {
        d.addEventListener(n, function(m) {
          var f;
          if (s !== "") {
            let e = (f = m.target) == null ? void 0 : f.closest(s);
            e && (o == null || o.call(e, m));
          } else
            o == null || o.call(d, m);
        });
      }), this;
    }
    addClass(n) {
      return this.elements.forEach(function(s) {
        s.classList.add(n);
      }), this;
    }
    removeClass(n) {
      return this.elements.forEach(function(s) {
        s.classList.remove(n);
      }), this;
    }
    toggleClass(n) {
      return this.elements.forEach(function(s) {
        s.classList.toggle(n);
      }), this;
    }
    each(n) {
      for (let s of this.elements)
        n(new L(s), this.elements.indexOf(s));
      return this;
    }
    style(n, s) {
      const o = n.split("-").map((d, m) => m === 0 ? d : d.charAt(0).toUpperCase() + d.slice(1)).join("");
      return this.elements.forEach(function(d) {
        d.style[o] = s;
      }), this;
    }
    find(n) {
      const s = this.elements.map((o) => Array.from(o.querySelectorAll(n)));
      return new L(s.flat());
    }
    attr(n, s) {
      return s ? (this.elements.forEach(function(o) {
        o.setAttribute(n, s);
      }), this) : this.elements[0].getAttribute(n);
    }
    text(n) {
      return n ? (this.elements.forEach(function(s) {
        s.textContent = n;
      }), this) : this.elements[0].textContent || "";
    }
    html(n) {
      return n ? (this.elements.forEach(function(s) {
        s.innerHTML = n;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const t = (l) => new L(l), D = (l) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", l, "variant_1"));
    }, 1e3);
  }, V = (l, n = "info") => {
    let s;
    switch (n) {
      case "info":
        s = "color: #3498db;";
        break;
      case "warn":
        s = "color: #f39c12;";
        break;
      case "error":
        s = "color: #e74c3c;";
        break;
      case "success":
        s = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${l}`, `${s} font-size: 16px; font-weight: 600`);
  }, T = "https://conversionrate-store.github.io/a-b_images/theinvestorsedge/", M = {
    back: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
		<path d="M0 8.00005C0 8.30737 0.117512 8.56956 0.361583 8.80456L7.4124 15.7017C7.60228 15.9006 7.85533 16 8.14459 16C8.73227 16 9.19324 15.5481 9.19324 14.9515C9.19324 14.6622 9.07568 14.4 8.8769 14.2012L2.52204 8.00005L8.8769 1.79888C9.07568 1.59096 9.19324 1.32882 9.19324 1.03955C9.19324 0.451984 8.73227 0 8.14459 0C7.85533 0 7.60228 0.0994383 7.4124 0.298303L0.361583 7.19554C0.117512 7.43054 0.00903668 7.69274 0 8.00005Z" fill="white"/>
		</svg>`,
    down: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
		<path d="M0.729492 0.68396L8.22949 8.68396L15.7295 0.68396" stroke="#09233E" stroke-width="2"/>
		</svg>`,
    resend: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
		<path d="M12.2841 4.65524C11.3914 3.94094 10.3076 3.375 9 3.375C5.8934 3.375 3.375 5.89339 3.375 9C3.375 12.1066 5.8934 14.625 9 14.625C11.4412 14.625 13.521 13.0691 14.2985 10.8942C14.4379 10.5041 14.8313 10.2426 15.2365 10.3285L15.9701 10.484C16.3754 10.5699 16.6377 10.9697 16.5134 11.3648C15.509 14.5584 12.5262 16.875 9 16.875C4.65076 16.875 1.125 13.3492 1.125 9C1.125 4.65076 4.65076 1.125 9 1.125C11.0876 1.125 12.7137 2.07635 13.8834 3.05595L15.2197 1.71967C15.4342 1.50517 15.7568 1.441 16.037 1.55709C16.3173 1.67317 16.5 1.94665 16.5 2.25V6.375C16.5 6.78921 16.1642 7.125 15.75 7.125H11.625C11.3217 7.125 11.0482 6.94227 10.9321 6.66201C10.8161 6.38176 10.8802 6.05917 11.0947 5.84467L12.2841 4.65524Z" fill="#59B4E5"/>
		</svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
		<g clip-path="url(#clip0_234_249)">
		<path d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM12.87 6.84L8.73 12.24C8.55 12.42 8.28 12.6 8.01 12.6C7.74 12.6 7.47 12.51 7.29 12.24L5.13 9.45C4.86 9.09 4.86 8.46 5.31 8.19C5.76 7.92 6.3 7.92 6.57 8.37L8.01 10.26L11.43 5.76C11.7 5.4 12.33 5.31 12.69 5.58C13.14 5.85 13.14 6.39 12.87 6.84Z" fill="#02BC7D"/>
		</g>
		<defs>
		<clipPath id="clip0_234_249">
		<rect width="18" height="18" fill="white"/>
		</clipPath>
		</defs>
		</svg>`
  }, Y = (
    /* HTML */
    `
  <div class="crs_quiz_container">
    <div class="crs_quiz_header">
      <div class="crs_quiz_max_width">
        <div class="crs_quiz_logo">
          ${M.back}
          <img src="${T}logo.svg" alt="Quiz Header" />
        </div>
        <div class="crs_quiz_progress">
          <div class="crs_quiz_progress_bar"></div>
        </div>
      </div>
    </div>
    <div class="crs_first_screen active">
      <div class="crs_top">
        <div class="crs_quiz_max_width">For flippers seeking no-money-down financing to acquire a property</div>
      </div>
      <div class="crs_quiz_max_width">
        <h2>Are You Looking for 100% Hard Money Financing?</h2>
        <p>Even if you dont have real estate investing experience or first property in mind</p>
        <div class="crs_quiz_buttons">
          <button class="crs_start_quiz">YES — Check If I Qualify</button>
          <button class="crs_cancel_quiz">No, I don’t need financing</button>
        </div>
        <img src="${T}/quiz_rating.webp" alt="rating" class="crs_rating_m" />
        <img src="${T}/quiz_rating_d.webp" alt="rating" class="crs_rating_d" />
      </div>
    </div>
    <div class="crs_quiz_steps">
      <div class="crs_quiz_max_width">
        <div class="crs_quiz_step_container"></div>
        <p class="crs_error">Please select an answer to continue</p>
        <button>Continue</button>
      </div>
    </div>
  </div>
`
  ), Q = (l, n, s) => {
    let o = "";
    return s ? o = s.map(
      (d) => (
        /* HTML */
        `
          <label class="crs_quiz_answer_radio_label">
            <input type="radio" value="${d.value}" name="step${l}" />
            <div><span></span>${d.label}</div>
          </label>
        `
      )
    ).join("") : o = /* HTML */
    `
      <label class="crs_quiz_answer_input_label">
        <span>First Name</span>
        <input type="text" name="crs_name" placeholder="First Name" data-relation="firstname" />
      </label>
      <label class="crs_quiz_answer_input_label">
        <span>Last Name</span>
        <input type="text" name="crs_last_name" placeholder="Last Name" data-relation="lastname" />
      </label>
      <div class="crs_phone_verify_block">
        <div class="crs_phone_base">
          <label class="crs_quiz_answer_input_label crs_phone_field_label">
            <span>Phone number</span>
            <div class="crs_phone_input_wrap">
              <input type="tel" name="crs_phone" placeholder="+1 (555) 555-5555" autocomplete="tel" />
              <button class="crs_send_code_btn" type="button">Send code</button>
            </div>
          </label>
        </div>
        <div class="crs_phone_otp" style="display:none">
          <div class="crs_otp_header">
            <span class="crs_otp_title">Verify Phone Number *</span>
            <span class="crs_otp_sent_info">Code sent to <strong class="crs_otp_phone_num"></strong></span>
            <button class="crs_change_phone_btn" type="button">Change</button>
          </div>
          <div class="crs_otp_inputs_row">
            <input class="crs_otp_digit" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]*" />
            <input class="crs_otp_digit" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]*" />
            <input class="crs_otp_digit" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]*" />
            <input class="crs_otp_digit" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]*" />
            <div class="crs_otp_timer_box">
              <span class="crs_timer_text">01:00</span>
            </div>
            <div class="crs_phone_verified_box" style="display:none">
              ${M.check}
              <span>Phone verified</span>
            </div>
          </div>
          <div class="crs_resend_row">
            ${M.resend}
            <button class="crs_resend_code_btn" type="button">Resend verification code</button>
          </div>
        </div>
      </div>
      <label class="crs_quiz_answer_input_label">
        <span>Email</span>
        <input type="email" name="crs_email" placeholder="Email" data-relation="email" />
      </label>
      <label class="crs_quiz_answer_select_label">
        <span>State you want to invest in</span>
        <select name="crs_state" placeholder="Select state"></select>
        ${M.down}
      </label>
    `, /* HTML */
    `
    <div class="crs_quiz_step" data-step="${l}">
      <h3>${n}</h3>
      <div class="crs_quiz_answers">${o}</div>
    </div>
  `;
  }, W = (l = !1) => (
    /* HTML */
    `
  <div class="crs_quiz_step crs_quiz_step--warning">
    <h3>To move forward with financing, you'll need to invest at least $5,000 of your own funds</h3>
    ${l ? `<p class="crs_warning_desc">We'd be happy to hear from you if your situation changes.</p>
         <div class="crs_warning_buttons crs_warning_buttons--single">
           <button class="crs_cash_warning_home">Go to main page</button>
         </div>` : `<p class="crs_warning_desc">Please confirm that you're willing to make this investment to proceed.</p>
         <div class="crs_warning_buttons">
           <button class="crs_cash_warning_yes">Yes</button>
           <button class="crs_cash_warning_no">No</button>
         </div>`}
  </div>
`
  ), U = (l) => (
    /* HTML */
    `
  <div class="crs_quiz_step crs_quiz_step--warning">
    <h3>
      We do not fund ${l}, as they typically offer lower ROI and carry higher risk than secondary-market
      residential properties.
    </h3>
    <p class="crs_warning_desc">With our support, you can select a property with a predictably high ROI</p>
    <p class="crs_warning_desc">
      We fund single-family home, condo, townhouse, duplex, triplex, fourplex, or
      <strong>modular home on a permitted</strong>
    </p>
    <p class="crs_warning_question">
      <strong>Would you be open to selecting a 1–4 unit residential property that meets our funding criteria?</strong>
    </p>
    <div class="crs_warning_buttons">
      <button class="crs_warning_yes">Yes</button>
      <button class="crs_warning_no">No</button>
    </div>
  </div>
`
  ), G = (
    /* HTML */
    `
  <div class="crs_sticky_block">
    <p class="crs_sticky_block__text">Are you looking for 100% Hard Money Financing?</p>
    <div class="crs_sticky_block__buttons">
      <button class="crs_sticky_yes">Yes</button>
      <button class="crs_sticky_no">No</button>
    </div>
  </div>
`
  ), Z = (
    /* HTML */
    `
  <div class="crs_inline_promo">
    <div class="crs_inline_promo__top">For flippers seeking no-money-down financing to acquire a property</div>
    <div class="crs_inline_promo__body">
      <h2 class="crs_inline_promo__title">Are You Looking for 100% Hard Money Financing?</h2>
      <p class="crs_inline_promo__sub">
        Even if you dont have real estate investing experience or first property in mind
      </p>
      <div class="crs_inline_promo__buttons">
        <button class="crs_inline_yes">YES — Check If I Qualify</button>
        <button class="crs_inline_no">No, I don't need financing</button>
      </div>
      <img src="${T}/quiz_rating.webp" alt="rating" class="crs_rating_m" />
      <img src="${T}/quiz_rating_d.webp" alt="rating" class="crs_rating_d" />
    </div>
  </div>
`
  ), J = `.row-number-89,
.row-number-91 {
  display: none;
}

.crs_quiz_container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100000;
  background: #ffffff;
  overflow-y: auto;
  display: none;
  flex-direction: column;
  background: #eee;
}
.crs_quiz_container.active {
  display: flex;
}

.crs_quiz_max_width {
  width: 100%;
  max-width: 680px;
  padding: 0 20px;
  margin: 0 auto;
}

.crs_quiz_header {
  background: #09233e;
  padding-bottom: 10px;
}

.crs_quiz_logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 0;
  position: relative;
}
.crs_quiz_logo svg {
  width: 9px;
  height: 16px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: none;
}
.crs_quiz_logo svg.active {
  display: block;
}

.crs_quiz_progress {
  width: 100%;
  height: 4px;
  background: #cfe2f3;
  border-radius: 10px;
  position: relative;
  margin-top: 10px;
  display: none;
}
.crs_quiz_progress.active {
  display: block;
}

.crs_quiz_progress_bar {
  width: 0;
  height: 100%;
  background: #ff9902;
  border-radius: 10px;
  transition: width 0.3s ease;
}

.crs_first_screen .crs_top {
  background: #cfe2f3;
  padding: 24px;
  color: #09233e;
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
}
.crs_first_screen h2 {
  font-family: "Inter", sans-serif;
  font-size: 42px;
  margin-top: 60px;
  margin-bottom: 16px;
  color: #09233e;
  line-height: 52px;
}
.crs_first_screen h2 + p {
  font-size: 24px;
  margin: 0 0 24px;
  color: #09233e;
  line-height: 34px;
}

.crs_quiz_buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.crs_quiz_buttons button {
  width: 100%;
  padding: 16px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  color: #09233e;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #ff9902;
  border: none;
  cursor: pointer;
}
.crs_quiz_buttons button:last-of-type {
  border: 2px solid #ff9902;
  background: transparent;
}

.crs_first_screen .crs_quiz_max_width {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}
.crs_first_screen .crs_quiz_max_width img {
  margin-top: auto;
}

.crs_rating_m {
  display: none;
}
@media (max-width: 768px) {
  .crs_rating_m {
    display: block;
  }
}

.crs_rating_d {
  display: block;
}
@media (max-width: 768px) {
  .crs_rating_d {
    display: none;
  }
}

.crs_quiz_results,
.crs_quiz_steps,
.crs_first_screen {
  display: none;
  flex-direction: column;
  flex: 1;
}
.crs_quiz_results.active,
.crs_quiz_steps.active,
.crs_first_screen.active {
  display: flex;
}

.crs_blue_bg {
  background: #3d85c6;
  padding: 20px 0;
}
.crs_blue_bg p {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
}

.crs_quiz_steps .crs_quiz_max_width {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 32px;
  gap: 20px;
}

.crs_quiz_steps button:not([class*=crs_]) {
  width: 100%;
  padding: 16px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  color: #09233e;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #ff9902;
  border: none;
  cursor: pointer;
}

.crs_quiz_step {
  padding-top: 40px;
}
.crs_quiz_step h3 {
  font-size: 32px;
  line-height: 42px;
  color: #09233e;
  margin-bottom: 32px;
}

.crs_quiz_answer_radio_label input {
  height: 1px;
  width: 1px;
  position: absolute;
  opacity: 0;
}

.crs_quiz_answer_radio_label > div {
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  border: 1px solid #cfe2f3;
  background: #fff;
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  padding: 19px 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}
.crs_quiz_answer_radio_label > div span {
  display: flex;
  width: 20px;
  height: 20px;
  border: 2px solid #09233e;
  border-radius: 50%;
  position: relative;
}
.crs_quiz_answer_radio_label > div span::after {
  content: "";
  width: 12px;
  height: 12px;
  background: #09233e;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.crs_quiz_answer_radio_label input:checked + div {
  border: 2px solid #09233e;
  background: #cfe2f3;
}
.crs_quiz_answer_radio_label input:checked + div span::after {
  opacity: 1;
}

.crs_quiz_answers {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.crs_quiz_answer_input_label span {
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
}
.crs_quiz_answer_input_label input {
  width: 100%;
  padding: 18px 16px !important;
  font-size: 14px;
  border: 1px solid #cfe2f3 !important;
  border-radius: 4px;
  background: #fff !important;
}
.crs_quiz_answer_input_label input::-moz-placeholder {
  color: #a9a9a9;
}
.crs_quiz_answer_input_label input::placeholder {
  color: #a9a9a9;
}

.crs_phone_verify_block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.crs_phone_input_wrap {
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #cfe2f3;
  border-radius: 4px;
  overflow: hidden;
  padding: 6px 6px 6px 16px;
}
.crs_phone_input_wrap input {
  flex: 1;
  min-width: 0;
  padding: 12px 0 !important;
  font-size: 14px;
  border: none !important;
  background: transparent !important;
  outline: none;
}
.crs_phone_input_wrap input::-moz-placeholder {
  color: #a9a9a9;
}
.crs_phone_input_wrap input::placeholder {
  color: #a9a9a9;
}

.crs_send_code_btn {
  flex-shrink: 0;
  padding: 7px 12px;
  background: #ff9902;
  color: #09233e;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  height: 36px;
}
.crs_send_code_btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.crs_phone_otp {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.crs_otp_header {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.crs_otp_header .crs_otp_title {
  font-size: 14px;
  font-weight: 500;
  color: #09233e;
  white-space: nowrap;
}
.crs_otp_header .crs_otp_sent_info {
  font-size: 14px;
  color: #a9a9a9;
  white-space: nowrap;
}
.crs_otp_header .crs_otp_sent_info strong {
  font-weight: 400;
}

.crs_change_phone_btn {
  background: transparent;
  border: none;
  color: #59b4e5;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  flex-shrink: 0;
  white-space: nowrap;
}

.crs_otp_inputs_row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.crs_otp_digit {
  width: 50px !important;
  height: 50px !important;
  flex-shrink: 0;
  padding: 0 !important;
  text-align: center;
  font-size: 16px !important;
  font-weight: 500 !important;
  color: #09233e !important;
  border: 1px solid #cfe2f3 !important;
  border-radius: 4px !important;
  background: #fff !important;
  outline: none;
  caret-color: #09233e;
}
.crs_otp_digit.crs_digit_error {
  border-color: rgb(255, 109, 109) !important;
}
.crs_otp_digit:focus {
  border-color: #59b4e5 !important;
}

.crs_otp_timer_box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 50px;
  flex-shrink: 0;
  background: #eee;
  border: 1px solid #cfe2f3;
  border-radius: 4px;
}
.crs_otp_timer_box .crs_timer_text {
  font-size: 16px;
  font-weight: 500;
  color: #09233e;
  letter-spacing: -0.5px;
}

.crs_phone_verified_box {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 50px;
  padding: 0 12px;
  background: #fff;
  border: 1px solid #cfe2f3;
  border-radius: 4px;
  white-space: nowrap;
}
.crs_phone_verified_box span {
  font-size: 14px;
  font-weight: 500;
  color: #09233e;
}

.crs_resend_row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}
.crs_resend_row svg {
  flex-shrink: 0;
}

.crs_resend_code_btn {
  background: transparent;
  border: none;
  color: #59b4e5;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
}

.crs_quiz_answer_select_label {
  position: relative;
}
.crs_quiz_answer_select_label span {
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
}
.crs_quiz_answer_select_label select {
  width: 100%;
  padding: 18px 16px !important;
  font-size: 14px;
  border: 1px solid #cfe2f3 !important;
  border-radius: 4px;
  background: #fff !important;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.crs_quiz_answer_select_label svg {
  width: 15px;
  height: 8px;
  background: url("") no-repeat center center;
  background-size: contain;
  position: absolute;
  bottom: 22px;
  right: 16px;
  pointer-events: none;
}
.crs_quiz_answer_select_label::-moz-placeholder {
  color: #a9a9a9;
}
.crs_quiz_answer_select_label::placeholder {
  color: #a9a9a9;
}

.crs_error {
  color: rgb(255, 109, 109);
  display: none;
  margin: 0 0 auto;
}
.crs_error.active {
  display: block;
}

.crs_input_error {
  color: rgb(255, 109, 109);
  margin: 10px 0 0;
  line-height: 1;
  font-size: 12px;
}

.crs_inline_promo {
  background: #ffffff;
  overflow: hidden;
}
.crs_inline_promo__top {
  background: #cfe2f3;
  padding: 24px;
  color: #09233e;
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  text-align: center;
}
.crs_inline_promo__body {
  max-width: 680px;
  margin: 0 auto;
  padding: 0 20px 40px;
  display: flex;
  flex-direction: column;
}
.crs_inline_promo__title {
  font-family: "Inter", sans-serif;
  font-size: 42px;
  margin-top: 60px;
  margin-bottom: 16px;
  color: #09233e;
  line-height: 52px;
}
.crs_inline_promo__sub {
  font-size: 24px;
  margin: 0 0 24px;
  color: #09233e;
  line-height: 34px;
}
.crs_inline_promo__buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.crs_inline_promo__buttons button {
  width: 100%;
  padding: 16px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  color: #09233e;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #ff9902;
  border: none;
  cursor: pointer;
}
.crs_inline_promo__buttons button:last-of-type {
  border: 2px solid #ff9902;
  background: transparent;
}
.crs_inline_promo img {
  margin-top: 24px;
}
@media (max-width: 768px) {
  .crs_inline_promo__title {
    font-size: 28px;
    line-height: 36px;
    margin-top: 32px;
  }
  .crs_inline_promo__sub {
    font-size: 16px;
    line-height: 26px;
  }
}

.crs_sticky_block {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  background: #09233e;
  box-shadow: 0px -2px 12px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 120px;
}
.crs_sticky_block__text {
  font-family: "Poppins", sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1px;
  line-height: 38px;
  margin: 0;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01);
}
.crs_sticky_block__buttons {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
}
.crs_sticky_block .crs_sticky_yes {
  height: 56px;
  padding: 16px 67px;
  background: #ff9902;
  color: #09233e;
  border: none;
  border-radius: 6px;
  font-family: "Tahoma", sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}
.crs_sticky_block .crs_sticky_no {
  height: 56px;
  padding: 16px 67px;
  background: transparent;
  color: #ffffff;
  border: 2px solid #ff9902;
  border-radius: 6px;
  font-family: "Tahoma", sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}
@media (max-width: 768px) {
  .crs_sticky_block {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 20px;
    gap: 10px;
  }
  .crs_sticky_block__text {
    font-size: 14px;
    line-height: 24px;
  }
  .crs_sticky_block__buttons {
    width: 100%;
    gap: 20px;
    height: 44px;
  }
  .crs_sticky_block__buttons .crs_sticky_yes,
  .crs_sticky_block__buttons .crs_sticky_no {
    flex: 1;
    height: 44px;
    padding: 0;
  }
}

.crs_quiz_step--warning h3 {
  margin-bottom: 24px;
}
.crs_quiz_step--warning .crs_warning_desc {
  font-size: 16px;
  line-height: 26px;
  color: #09233e;
  margin: 0 0 8px;
}
.crs_quiz_step--warning .crs_warning_question {
  font-size: 16px;
  line-height: 26px;
  color: #09233e;
  margin: 24px 0 20px;
}

.crs_warning_buttons {
  display: flex;
  gap: 16px;
}
.crs_warning_buttons--single button {
  flex: none;
  width: 100%;
}
.crs_warning_buttons button {
  flex: 1;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  border: none;
}
.crs_warning_buttons .crs_warning_yes,
.crs_warning_buttons .crs_cash_warning_yes,
.crs_warning_buttons .crs_cash_warning_home {
  background: #ff9902;
  color: #09233e;
}
.crs_warning_buttons .crs_warning_no,
.crs_warning_buttons .crs_cash_warning_no {
  background: transparent;
  color: #09233e;
  border: 2px solid #ff9902 !important;
}/*# sourceMappingURL=style.css.map */`;
  O({ name: "Quiz", dev: "YK" }), D("quiz_hard_money");
  const K = "Residential real estate (1–4 units only)", X = 1, B = 4, nn = ["$0 to $999", "$1,000 to $2,499", "$2,500 to $5,000"], x = [
    {
      question: "Do you already have a property picked out?",
      answers: [
        { label: "I have one under contract.", value: "1" },
        { label: "I have one I am looking at not under contract.", value: "0" },
        { label: "I am looking for a deal. ", value: "0" },
        { label: "I want to learn how to find the deal.", value: "0" }
      ],
      relation: "property_in_mind"
    },
    {
      question: "What property type are you looking to finance?",
      answers: [
        { label: "Residential property (1-4 units)", value: "Residential real estate (1–4 units only)" },
        { label: "Residential 5+ units", value: "Commercial real estate, personal loan, or equipment loan" },
        { label: "Commercial property", value: "New Construction" },
        { label: "Personal loans", value: "Personal loans" },
        { label: "Equipment loans", value: "Equipment loans" },
        { label: "New Construction (Ground Up Build)", value: "New Construction (Ground Up Build)" },
        { label: "Other", value: "Other" }
      ],
      relation: "what_type_of_financing_are_you_seeking"
    },
    {
      question: "Have you done a fix & flip deal before?",
      answers: [
        { label: "No, this will be my first", value: "Brand New - 0 Properties Flipped" },
        { label: "I’ve flipped 1–2 properties", value: "Starting Out - 1 to 2 Properties Flipped" },
        { label: "I’ve flipped 3–6 properties", value: "Intermediate - 3 to 6 Properties Flipped" },
        { label: "I’ve flipped 7+ properties", value: "Expert - 7 or More Properties Flipped" }
      ],
      relation: "how_much_experience_do_you_have_"
    },
    {
      question: "If everything went well, what profit range would you ideally target?",
      answers: [
        { label: "Under $25,000", value: "Under $25,000" },
        { label: "$25,000–$50,000", value: "$25,000–$50,000" },
        { label: "$50,000–$100,000", value: "$50,000–$100,000" },
        { label: "$100,000+", value: "$100,000+" }
      ]
    },
    {
      question: "How much cash do you currently have available for a deal?",
      answers: [
        { label: "$1,000 to $2,499", value: "$1,000 to $2,499" },
        { label: "$2,500 to $4,999", value: "$2,500 to $5,000" },
        { label: "$5,000 to $9,999", value: "$5,001 to $10,000" },
        { label: "$10,000 to $19,999", value: "$10,001 to $20,000" },
        { label: "$20,000 or more", value: "$20,001 or more" }
      ],
      relation: "amount_of_money_to_invest_in_real_estate_"
    },
    {
      question: "Fill out the application for a free<br/>pre-qualification consultation for 100% financing"
    }
  ];
  class en {
    constructor() {
      this.answers = [], this.showingWarning = !1, this.warningPropertyType = "", this.showingCashWarning = !1, this.phoneVerified = !1, this.verifiedPhone = "", this.phoneTimerInterval = null, this.init(), this.step = 0, this.setup();
    }
    async init() {
      await H("body"), t("body").elements[0].insertAdjacentHTML("afterbegin", `<style class="crs_style">${J}</style>`), t("body").elements[0].insertAdjacentHTML("afterbegin", Y), t("body").elements[0].insertAdjacentHTML("beforeend", G), await H(".row-number-87"), t(".row-number-87").elements[0].insertAdjacentHTML("afterend", Z);
    }
    async setup() {
      await H(".crs_quiz_container");
      const n = t(".crs_first_screen"), s = t(".crs_quiz_steps"), o = t(".crs_quiz_logo svg"), d = t(".crs_start_quiz"), m = t(".crs_quiz_progress"), f = t(".crs_cancel_quiz"), e = t(".crs_quiz_steps button"), P = t("a.pwr-cta_button"), q = t(".crs_sticky_block");
      P.elements.forEach((g, b) => {
        g.addEventListener("click", (k) => {
          k.preventDefault(), t(".crs_quiz_container").addClass("active"), _("exp_quiz_hard_money_cta", `Clicked CTA on Page #${b + 1}`, "click", "page_cta");
        });
      }), t(".crs_sticky_no").on("click", () => {
        q.elements[0].style.display = "none", _("exp_quiz_hard_money_sticky_no", "Sticky No", "click", "sticky_block");
      }), t(".crs_sticky_yes").on("click", () => {
        q.elements[0].style.display = "none", t(".crs_quiz_container").addClass("active"), _("exp_quiz_hard_money_sticky_yes", "Sticky Yes", "click", "sticky_block");
      }), t(".crs_inline_yes").on("click", () => {
        t(".crs_quiz_container").addClass("active"), n.removeClass("active"), s.addClass("active"), o.addClass("active"), m.addClass("active"), this.step = 0, this.setStep(0), _("exp_quiz_hard_money_inline_yes", "Inline Yes", "click", "inline_promo");
      }), t(".crs_inline_no").on("click", () => {
        window.location.pathname = "/", _("exp_quiz_hard_money_inline_no", "Inline No", "click", "inline_promo");
      }), f.on("click", () => {
        t(".crs_quiz_container").removeClass("active"), _("exp_quiz_hard_money_cancel", "Cancel Quiz", "click", "quiz_first_screen");
      }), o.on("click", () => {
        if (this.showingWarning) {
          this.showingWarning = !1, this.warningPropertyType = "", e.elements[0].style.display = "", this.setStep(this.step);
          return;
        }
        if (this.showingCashWarning) {
          this.showingCashWarning = !1, e.elements[0].style.display = "", this.setStep(this.step);
          return;
        }
        if (this.setStep(this.step - 1), this.step === 0) {
          n.addClass("active"), s.removeClass("active"), o.removeClass("active"), m.removeClass("active");
          return;
        }
        this.step -= 1, e.text("Continue");
      }), d.on("click", () => {
        n.removeClass("active"), s.addClass("active"), o.addClass("active"), m.addClass("active"), this.setStep(this.step), _("exp_quiz_hard_money_start", "Start Quiz", "click", "quiz_first_screen");
      }), e.on("click", () => {
        var g, b, k, A;
        if (this.step < x.length - 1) {
          t(".crs_error").removeClass("active");
          const z = s.elements[0].querySelector('input[type="radio"]:checked');
          if (z) {
            if (x[this.step].relation) {
              const p = t(`[name="${x[this.step].relation}"]`).elements[0];
              p.tagName === "SELECT" && (p.value = z.getAttribute("value") || "", p.classList.remove("is-placeholder"), p.dispatchEvent(new Event("change", { bubbles: !0 })));
            }
          } else {
            t(".crs_error").addClass("active");
            return;
          }
          if (this.answers[this.step] = z.getAttribute("value") || "", this.step === X && K !== this.answers[this.step]) {
            this.showingWarning = !0, this.warningPropertyType = this.answers[this.step], e.elements[0].style.display = "none", t(".crs_quiz_step_container").html(U(this.warningPropertyType)), _(
              "exp_quiz_hard_money_warning_property",
              `Property type warning shown: ${this.warningPropertyType}`,
              "view",
              "quiz_step_2"
            ), t(".crs_warning_yes").on("click", () => {
              this.showingWarning = !1, this.warningPropertyType = "", e.elements[0].style.display = "";
              const p = t('[name="what_type_of_financing_are_you_seeking"]').elements[0];
              p && p.tagName === "SELECT" && (p.value = "Residential real estate (1–4 units only)", p.classList.remove("is-placeholder"), p.dispatchEvent(new Event("change", { bubbles: !0 })));
              const v = this.answers[this.step];
              this.setStep(this.step + 1), this.step += 1, _(`exp_quiz_hard_money_step_${this.step}`, v, "success", `quiz_step_${this.step}`), this.step === x.length - 1 && e.text("Apply Now");
            }), t(".crs_warning_no").on("click", () => {
              this.showingWarning = !1, this.warningPropertyType = "", e.elements[0].style.display = "", this.setStep(this.step);
            });
            return;
          }
          if (this.step === B && nn.includes(this.answers[this.step])) {
            this.showingCashWarning = !0, e.elements[0].style.display = "none", t(".crs_quiz_step_container").html(W()), _(
              "exp_quiz_hard_money_warning_cash",
              `Cash warning shown: ${this.answers[this.step]}`,
              "view",
              "quiz_step_5"
            ), t(".crs_cash_warning_yes").on("click", () => {
              this.showingCashWarning = !1, e.elements[0].style.display = "";
              const p = t('[name="amount_of_money_to_invest_in_real_estate_"]').elements[0];
              p && p.tagName === "SELECT" && (p.value = "$5,001 to $10,000", p.classList.remove("is-placeholder"), p.dispatchEvent(new Event("change", { bubbles: !0 })));
              const v = this.answers[this.step];
              this.setStep(this.step + 1), this.step += 1, _(`exp_quiz_hard_money_step_${this.step}`, v, "success", `quiz_step_${this.step}`), this.step === x.length - 1 && e.text("Apply Now");
            }), t(".crs_cash_warning_no").on("click", () => {
              t(".crs_quiz_step_container").html(W(!0)), t(".crs_cash_warning_home").on("click", () => {
                window.location.pathname = "/";
              }), _("exp_quiz_hard_money_cash_low_no", "Cash too low - No", "click", "quiz_cash_warning");
            });
            return;
          }
          this.setStep(this.step + 1), this.step += 1, _(
            `exp_quiz_hard_money_step_${this.step}`,
            ((b = (g = z.closest("label")) == null ? void 0 : g.querySelector("div")) == null ? void 0 : b.textContent) || "",
            "success",
            `quiz_step_${this.step}`
          ), this.step === x.length - 1 && e.text("Apply Now");
        } else {
          let a = !1;
          if (s.elements[0].querySelectorAll(
            ".crs_quiz_answer_input_label input"
          ).forEach((u) => {
            var E, C;
            if (!u.closest(".crs_phone_verify_block") && u.value === "") {
              if (a = !0, (E = u.closest("label")) != null && E.querySelector(".crs_input_error")) return;
              (C = u.closest("label")) == null || C.insertAdjacentHTML("beforeend", '<p class="crs_input_error">This field is required.</p>');
            }
          }), !this.phoneVerified) {
            a = !0;
            const u = s.elements[0].querySelector(".crs_phone_verify_block");
            u && !u.querySelector(".crs_phone_verify_error") && u.insertAdjacentHTML(
              "beforeend",
              '<p class="crs_input_error crs_phone_verify_error">Please verify your phone number</p>'
            );
          }
          if (s.elements[0].querySelector('select[name="crs_state"]').value === "") {
            if (a = !0, (k = s.elements[0].querySelector('select[name="crs_state"]').closest("label")) != null && k.querySelector(".crs_input_error"))
              return;
            (A = s.elements[0].querySelector('select[name="crs_state"]').closest("label")) == null || A.insertAdjacentHTML("beforeend", '<p class="crs_input_error">This field is required.</p>');
          }
          if (a) return;
          const v = t(".hs-error-msg").elements;
          v.length !== 0 && v.forEach((u) => {
            var S, N, I, j;
            const E = ((S = u.textContent) == null ? void 0 : S.toLowerCase()) || "", C = ((I = (N = u.closest(".hs-form-field")) == null ? void 0 : N.querySelector("input")) == null ? void 0 : I.getAttribute("name")) || "";
            (j = t(`input[data-relation="${C}"]`).elements[0].closest("label")) == null || j.insertAdjacentHTML("beforeend", `<p class="crs_input_error">${E}</p>`);
          }), _("exp_quiz_hard_money_complete", "Complete Quiz", "success", "quiz_complete"), t(".hs_submit input").elements[0].click();
        }
      });
    }
    async setStep(n) {
      if (n < 0) return;
      const s = t('select[name="your_state__united_states__"] option').elements.map((f) => ({
        label: f.textContent || "",
        value: f.getAttribute("value") || ""
      })), o = t(".crs_quiz_step_container"), d = t(".crs_quiz_progress_bar");
      o.html(Q(n + 1, x[n].question, x[n].answers));
      const m = (n + 1) / x.length * 100;
      if (d.elements[0].style.width = `${m}%`, this.answers[n] && t(`input[value="${this.answers[n]}"]`).elements[0].setAttribute("checked", "true"), n === x.length - 1) {
        const f = t('select[name="crs_state"]').elements[0];
        s.forEach((r) => {
          const i = document.createElement("option");
          i.value = r.value, i.textContent = r.label, f.appendChild(i);
        }), f.addEventListener("change", () => {
          var r;
          (r = t(".crs_quiz_answer_select_label .crs_input_error").elements[0]) == null || r.remove(), t('select[name="your_state__united_states__"]').elements[0].value = f.value, t('select[name="your_state__united_states__"]').elements[0].dispatchEvent(
            new Event("change", { bubbles: !0 })
          ), _("exp_quiz_hard_money_form_state", f.value, "change", "quiz_form");
        });
        const e = document.querySelector(".crs_phone_verify_block"), P = e == null ? void 0 : e.querySelector(".crs_phone_base"), q = e == null ? void 0 : e.querySelector('input[name="crs_phone"]'), g = e == null ? void 0 : e.querySelector(".crs_send_code_btn"), b = e == null ? void 0 : e.querySelector(".crs_phone_field_label"), k = e == null ? void 0 : e.querySelector(".crs_phone_otp"), A = e == null ? void 0 : e.querySelector(".crs_otp_phone_num"), a = Array.from((e == null ? void 0 : e.querySelectorAll(".crs_otp_digit")) || []), z = e == null ? void 0 : e.querySelector(".crs_otp_timer_box"), p = e == null ? void 0 : e.querySelector(".crs_timer_text"), v = e == null ? void 0 : e.querySelector(".crs_phone_verified_box"), u = e == null ? void 0 : e.querySelector(".crs_resend_code_btn"), E = e == null ? void 0 : e.querySelector(".crs_resend_row"), C = e == null ? void 0 : e.querySelector(".crs_change_phone_btn"), S = (r) => {
          const i = r.replace(/\D/g, "");
          return i.length === 10 ? `+1${i}` : i.length === 11 && i[0] === "1" ? `+${i}` : null;
        }, N = (r = 60) => {
          this.phoneTimerInterval && clearInterval(this.phoneTimerInterval);
          let i = r;
          const c = () => {
            const h = String(Math.floor(i / 60)).padStart(2, "0"), w = String(i % 60).padStart(2, "0");
            p.textContent = `${h}:${w}`;
          };
          c(), this.phoneTimerInterval = setInterval(() => {
            i--, c(), i <= 0 && (clearInterval(this.phoneTimerInterval), this.phoneTimerInterval = null);
          }, 1e3);
        }, I = () => a.map((r) => r.value).join(""), j = async (r) => {
          var c, h;
          const i = I();
          if (!(i.length < 4))
            try {
              const y = await (await fetch("https://app.theinvestorsedge.com/phone/verify/check", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phoneNumber: r, code: i })
              })).json();
              if (y.success && ((c = y.verificationCheck) == null ? void 0 : c.status) === "approved") {
                this.phoneVerified = !0, this.verifiedPhone = r, _("exp_quiz_hard_money_form_phone_verified", "Phone verified", "success", "quiz_form"), this.phoneTimerInterval && (clearInterval(this.phoneTimerInterval), this.phoneTimerInterval = null), z.style.display = "none", v.style.display = "flex", a.forEach((tn) => tn.disabled = !0), E && (E.style.display = "none");
                const $ = t('input[name="mobilephone"]').elements[0];
                $ && ($.value = r, $.dispatchEvent(new Event("input")));
              } else
                a.forEach(($) => $.classList.add("crs_digit_error")), (h = a[0]) == null || h.focus(), _("exp_quiz_hard_money_form_phone_verify_failed", "Phone verification failed", "error", "quiz_form");
            } catch {
              a.forEach((w) => w.classList.add("crs_digit_error"));
            }
        }, F = async (r) => {
          var i, c;
          g.disabled = !0, g.textContent = "...", (i = e.querySelector(".crs_phone_verify_error")) == null || i.remove();
          try {
            const w = await (await fetch("https://app.theinvestorsedge.com/phone/verify/send", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ phoneNumber: r })
            })).json();
            if (w.success)
              A.textContent = r, k.style.display = "block", P.style.display = "none", a.forEach((y) => {
                y.value = "", y.classList.remove("crs_digit_error");
              }), z.style.display = "flex", v.style.display = "none", N(60), (c = a[0]) == null || c.focus();
            else {
              const y = w.message || "Failed to send code. Please try again.";
              b.querySelector(".crs_phone_verify_error") || b.insertAdjacentHTML(
                "beforeend",
                `<p class="crs_input_error crs_phone_verify_error">${y}</p>`
              );
            }
          } catch {
            b.querySelector(".crs_phone_verify_error") || b.insertAdjacentHTML(
              "beforeend",
              '<p class="crs_input_error crs_phone_verify_error">Network error. Please try again.</p>'
            );
          } finally {
            g.disabled = !1, g.textContent = "Send code";
          }
        };
        this.phoneVerified && (P.style.display = "none", A.textContent = this.verifiedPhone, k.style.display = "block", z.style.display = "none", v.style.display = "flex"), g == null || g.addEventListener("click", async () => {
          var i;
          (i = e.querySelector(".crs_phone_verify_error")) == null || i.remove();
          const r = S(q.value);
          if (_("exp_quiz_hard_money_form_phone_send", "Phone code sent", "click", "quiz_form"), !r) {
            b.querySelector(".crs_phone_verify_error") || b.insertAdjacentHTML(
              "beforeend",
              '<p class="crs_input_error crs_phone_verify_error">Please enter a valid US phone number</p>'
            );
            return;
          }
          await F(r);
        }), a.forEach((r, i) => {
          r.addEventListener("input", async () => {
            r.classList.remove("crs_digit_error");
            const c = r.value.replace(/\D/g, "");
            r.value = c ? c[0] : "", r.value && i < a.length - 1 && a[i + 1].focus(), I().length === 4 && await j(S(q.value));
          }), r.addEventListener("keydown", (c) => {
            c.key === "Backspace" && !r.value && i > 0 && a[i - 1].focus();
          }), r.addEventListener("paste", async (c) => {
            var w;
            c.preventDefault();
            const h = ((w = c.clipboardData) == null ? void 0 : w.getData("text").replace(/\D/g, "").slice(0, 4)) || "";
            h.split("").forEach((y, $) => {
              a[$] && (a[$].value = y);
            }), a.forEach((y) => y.classList.remove("crs_digit_error")), h.length === 4 ? await j(S(q.value)) : a[h.length] && a[h.length].focus();
          });
        }), u == null || u.addEventListener("click", async () => {
          const r = S(q.value);
          r && (a.forEach((i) => {
            i.value = "", i.classList.remove("crs_digit_error");
          }), await F(r));
        }), C == null || C.addEventListener("click", () => {
          this.phoneVerified = !1, this.verifiedPhone = "", this.phoneTimerInterval && (clearInterval(this.phoneTimerInterval), this.phoneTimerInterval = null), k.style.display = "none", P.style.display = "block", q.value = "";
          const r = t('input[name="mobilephone"]').elements[0];
          r && (r.value = "", r.dispatchEvent(new Event("input")));
        });
        const R = /* @__PURE__ */ new Set();
        t(".crs_quiz_answer_input_label input").on("input", (r) => {
          const i = r.target;
          if (!R.has(i)) {
            R.add(i);
            const c = i.getAttribute("data-relation") || i.getAttribute("name") || "field";
            _(`exp_quiz_hard_money_form_${c}`, `Form field: ${c}`, "input", "quiz_form");
          }
        }), t(".crs_quiz_answer_input_label input").on("input", (r) => {
          const i = r.target, c = i.getAttribute("data-relation") || "";
          c && (t(`input[name="${c}"]`).elements[0].value = i.value, t(`input[name="${c}"]`).elements[0].dispatchEvent(new Event("input")), t(".crs_quiz_answer_input_label .crs_input_error").elements.forEach((h) => h == null ? void 0 : h.remove()));
        });
      }
    }
  }
  new en();
})();
//# sourceMappingURL=index.js.map
