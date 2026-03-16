(function() {
  "use strict";
  const U = `.sticky-block {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  background: #09233e;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s ease-in-out;
  z-index: 1;
}
.sticky-block.crs-hidden {
  opacity: 0 !important;
  transform: translateY(20px) !important;
  pointer-events: none;
}
@media (max-width: 768px) {
  .sticky-block {
    padding: 20px;
  }
}

.sticky-block__content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.sticky-block__content p {
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  color: #ffffff;
  margin: 0;
}
@media (max-width: 768px) {
  .sticky-block__content p {
    display: none;
  }
}

.row-number-1 .pwr-cta-container {
  display: none;
}

.row-number-2,
.row-number-10,
.row-number-12,
.row-number-14,
.row-number-16,
.row-number-19,
.row-number-21,
.row-number-24,
.row-number-26,
.row-number-29,
.row-number-31,
.row-number-34,
.row-number-36,
.row-number-58,
.row-number-65 .pwr-sec-cta--content .pwr-sec-cta__cta-wrapper {
  display: none;
}

.img_clients_m {
  display: none;
}
@media (max-width: 768px) {
  .img_clients_m {
    display: block;
  }
}

.img_clients_d {
  display: block;
}
@media (max-width: 768px) {
  .img_clients_d {
    display: none;
  }
}

.crs-hero-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.crs-hero-block p {
  font-size: 28px;
  font-weight: 600;
  line-height: 38px;
  margin: 0 0 24px;
  text-align: center;
}
@media (max-width: 768px) {
  .crs-hero-block p {
    font-size: 20px;
    line-height: 28px;
  }
}
.crs-hero-block a {
  margin-bottom: 30px;
}
.crs-hero-block span {
  display: block;
  font-size: 16px;
  margin: 40px 0 12px;
}

@media (max-width: 768px) {
  .pwr-hero__info-box {
    padding: 0 20px !important;
  }
}
.crs_link_button {
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 420px;
  padding: 16px;
  border-radius: 6px;
  background: #ff9902 !important;
  border: none;
  font-size: 16px;
  font-weight: 700 !important;
  line-height: 24px;
  color: #09233e !important;
  text-transform: uppercase;
}

.row-number-39 {
  padding: 80px 0 0 !important;
  background-image: none !important;
  background: #0d2034;
}
@media (max-width: 768px) {
  .row-number-39 {
    padding: 42px 0 0 !important;
  }
}

.crs-between-block {
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background: #ffffff;
}
@media (max-width: 768px) {
  .crs-between-block {
    padding: 42px 20px;
    gap: 24px;
  }
}
.crs-between-block p {
  text-align: center;
  font-weight: 700;
  margin: 0;
  font-family: "Poppins", sans-serif;
}
.crs-between-block p:first-child {
  font-size: 38px;
  line-height: 60px;
}
@media (max-width: 768px) {
  .crs-between-block p:first-child {
    display: none;
  }
}
.crs-between-block p:last-of-type {
  display: none;
}
@media (max-width: 768px) {
  .crs-between-block p:last-of-type {
    display: block;
    font-size: 28px;
    line-height: 38px;
  }
}

.row-number-65 .crs_link_button {
  margin: 24px auto 0;
}

.pwr-hero__info-box {
  bottom: unset !important;
}

.pwr-hero--regular {
  display: flex;
  align-items: center;
}

.crs-video-title {
  font-size: 24px;
  color: #ffffff;
  font-weight: 700;
  line-height: 34px;
  margin: 0;
}
.crs-video-title span {
  color: #ff9902;
}
@media (max-width: 768px) {
  .crs-video-title {
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: -10px;
    line-height: 28px;
  }
}

.row-number-39 .pwr-rich-text p:last-of-type {
  margin-inline: auto;
  max-width: 650px;
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
}/*# sourceMappingURL=style.css.map */`, v = (p, e, n, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: p,
      event_desc: e,
      event_type: n,
      event_loc: o
    }), D(`Event: ${p} | ${e} | ${n} | ${o}`, "success");
  }, P = (p) => new Promise((e) => {
    const n = document.querySelector(p);
    n && e(n);
    const o = new MutationObserver(() => {
      const a = document.querySelector(p);
      a && (e(a), o.disconnect());
    });
    o.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), O = ({ name: p, dev: e }) => {
    console.log(
      `%c EXP: ${p} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class j {
    constructor(e) {
      this.elements = e instanceof j ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, n, o) {
      return typeof n == "function" && (o = n, n = ""), this.elements.forEach((a) => {
        a.addEventListener(e, function(m) {
          var S;
          if (n !== "") {
            let l = (S = m.target) == null ? void 0 : S.closest(n);
            l && (o == null || o.call(l, m));
          } else
            o == null || o.call(a, m);
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
        e(new j(n), this.elements.indexOf(n));
      return this;
    }
    style(e, n) {
      const o = e.split("-").map((a, m) => m === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1)).join("");
      return this.elements.forEach(function(a) {
        a.style[o] = n;
      }), this;
    }
    find(e) {
      const n = this.elements.map((o) => Array.from(o.querySelectorAll(e)));
      return new j(n.flat());
    }
    attr(e, n) {
      return n ? (this.elements.forEach(function(o) {
        o.setAttribute(e, n);
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
  const t = (p) => new j(p), Y = (p) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", p, "variant_1"));
    }, 1e3);
  }, D = (p, e = "info") => {
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
    console.log(`%c>>> ${p}`, `${n} font-size: 16px; font-weight: 600`);
  }, I = "https://conversionrate-store.github.io/a-b_images/theinvestorsedge/", H = {
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
  }, Q = (
    /* HTML */
    `
  <div class="sticky-block">
    <div class="sticky-block__content">
      <p>We help you find, fund, and flip real estate</p>
      <button class="crs_link_button crs_open_quiz">Check if you qualify</button>
    </div>
  </div>
`
  ), G = (
    /* HTML */
    `
  <div class="crs-hero-block">
    <p>With little to no money down and up to 100% Hard Money financing</p>
    <button class="crs_link_button crs_open_quiz">Check if you qualify</button>
    <span>Featured in:</span>
    <img src="${I}clients_d.svg" alt="Clients" class="img_clients_d" />
    <img src="${I}clients_m.svg" alt="Clients" class="img_clients_m" />
  </div>
`
  ), B = (
    /* HTML */
    `
  <div class="crs-between-block">
    <p>See What Our Members Are Saying:</p>
    <p>Start your journey to a profitable flip — even without real estate experience.</p>
    <button class="crs_link_button crs_open_quiz">Check if you qualify</button>
  </div>
`
  ), J = (
    /* HTML */
    `
  <div class="crs_quiz_container">
    <div class="crs_quiz_header">
      <div class="crs_quiz_max_width">
        <div class="crs_quiz_logo">
          ${H.back}
          <img src="${I}logo.svg" alt="Quiz Header" />
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
        <p>Even if you don't have real estate investing experience or first property in mind</p>
        <div class="crs_quiz_buttons">
          <button class="crs_start_quiz">YES — Check If I Qualify</button>
          <button class="crs_cancel_quiz">No, I don't need financing</button>
        </div>
        <img src="${I}/quiz_rating.webp" alt="rating" class="crs_rating_m" />
        <img src="${I}/quiz_rating_d.webp" alt="rating" class="crs_rating_d" />
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
  ), Z = (p, e, n) => {
    let o = "";
    return n ? o = n.map(
      (a) => (
        /* HTML */
        `
          <label class="crs_quiz_answer_radio_label">
            <input type="radio" value="${a.value}" name="step${p}" />
            <div><span></span>${a.label}</div>
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
              ${H.check}
              <span>Phone verified</span>
            </div>
          </div>
          <div class="crs_resend_row">
            ${H.resend}
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
        ${H.down}
      </label>
      <label class="crs_quiz_answer_select_label">
        <span>How Did You Hear About Us?</span>
        <select name="crs_hear_about_us">
          <option disabled="" value="" selected>Please Select</option>
          <option value="BiggerPockets.com">BiggerPockets.com</option>
          <option value="Facebook">Facebook</option>
          <option value="Google">Google</option>
          <option value="Instagram">Instagram</option>
          <option value="Linkedin">Linkedin</option>
          <option value="Podcast">Podcast</option>
          <option value="Referred by Agent">Referred by Agent</option>
          <option value="Referred by Member">Referred by Member</option>
          <option value="Twitter">Twitter</option>
          <option value="Yard Sign">Yard Sign</option>
          <option value="YouTube">YouTube</option>
          <option value="JoinLendr.com">JoinLendr.com</option>
        </select>
        ${H.down}
      </label>
    `, /* HTML */
    `
    <div class="crs_quiz_step" data-step="${p}">
      <h3>${e}</h3>
      <div class="crs_quiz_answers">${o}</div>
    </div>
  `;
  }, K = (p) => (
    /* HTML */
    `
  <div class="crs_quiz_step crs_quiz_step--warning">
    <h3>
      We do not fund ${p}, as they typically offer lower ROI and carry higher risk than secondary-market
      residential properties.
    </h3>
    <p class="crs_warning_desc">With our support, you can select a property with a predictably high ROI</p>
    <p class="crs_warning_desc">
      We fund single-family home, condo, townhouse, duplex, triplex, fourplex, or
      <strong>modular home on a permitted</strong>
    </p>
    <p class="crs_warning_question">
      <strong
        >Would you be open to selecting a residential property on secondary market that meets our funding
        criteria?</strong
      >
    </p>
    <div class="crs_warning_buttons">
      <button class="crs_warning_yes">Yes</button>
      <button class="crs_warning_no">No</button>
    </div>
  </div>
`
  ), F = (p = !1) => (
    /* HTML */
    `
  <div class="crs_quiz_step crs_quiz_step--warning">
    <h3>To move forward with financing, you'll need to invest at least $5,000 of your own funds</h3>
    ${p ? `<p class="crs_warning_desc">We'd be happy to hear from you if your situation changes.</p>
         <div class="crs_warning_buttons crs_warning_buttons--single">
           <button class="crs_cash_warning_home">Go to main page</button>
         </div>` : `<p class="crs_warning_desc">Please confirm that you're willing to make this investment to proceed.</p>
         <div class="crs_warning_buttons">
           <button class="crs_cash_warning_yes">Yes</button>
           <button class="crs_cash_warning_no">No</button>
         </div>`}
  </div>
`
  );
  O({ name: "Home Page Update", dev: "YK" }), Y("home_page_update");
  const X = [
    "Randy - <span>around $60,000</span>",
    "Dalisa - <span>$40,000 - $60,000 in profit</span>",
    "Ptolemy - <span>$80,000 to $100,000 in profit</span>",
    "Joe and Chelsea - <span>about $40,000 in profit</span>",
    "Charles - <span>around $70,000</span>",
    "Stacy - <span>expecting to make $30,000 to $65,000</span>"
  ], ee = "Residential real estate (1–4 units only)", ne = 1, te = 4, se = ["$0 to $999", "$1,000 to $2,499", "$2,500 to $5,000"], g = [
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
        { label: "I've flipped 1–2 properties", value: "Starting Out - 1 to 2 Properties Flipped" },
        { label: "I've flipped 3–6 properties", value: "Intermediate - 3 to 6 Properties Flipped" },
        { label: "I've flipped 7+ properties", value: "Expert - 7 or More Properties Flipped" }
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
  class re {
    constructor() {
      this.step = 0, this.answers = [], this.showingWarning = !1, this.warningPropertyType = "", this.showingCashWarning = !1, this.phoneVerified = !1, this.verifiedPhone = "", this.phoneTimerInterval = null, this.init();
    }
    isElementVisible(e) {
      const n = e.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight;
      return n.top >= 0 && n.bottom <= o;
    }
    handleStickyVisibility() {
      const e = document.querySelector(".sticky-block");
      if (!e) return;
      const n = document.querySelectorAll(".crs_link_button:not(.sticky-block .crs_link_button)");
      let o = !1;
      n.forEach((a) => {
        this.isElementVisible(a) && (o = !0);
      }), o ? e.classList.add("crs-hidden") : e.classList.remove("crs-hidden");
    }
    async init() {
      await P("body"), t("body").elements[0].insertAdjacentHTML("afterbegin", `<style>${U}</style>`), t("body").elements[0].insertAdjacentHTML("afterbegin", J), await P("h1.pwr-hero__title"), t(".body-wrapper").elements[0].insertAdjacentHTML("beforeend", Q), t("h1.pwr-hero__title").elements[0].insertAdjacentHTML("afterend", `${G}`), t(".row-number-6 .pwr-rich-text").elements[0].insertAdjacentElement(
        "afterbegin",
        t(".row-number-2 .row-number-5 .pwr-sec__title").elements[0]
      ), await P(".row-number-65"), t(".row-number-55").elements[0].insertAdjacentElement("afterend", t(".row-number-8").elements[0]), t(".row-number-55").elements[0].insertAdjacentElement("afterend", t(".row-number-6").elements[0]), t(".row-number-52").elements[0].insertAdjacentHTML("afterend", B), t(".row-number-6 .pwr-rich-text p:nth-of-type(4)").elements[0].insertAdjacentHTML(
        "afterend",
        '<button class="crs_link_button crs_open_quiz">Check if you qualify</button>'
      ), await P(".row-number-65 .pwr-sec-cta--content .pwr-sec-cta__cta-wrapper"), t(".row-number-65 .pwr-sec-cta--content .pwr-sec-cta__cta-wrapper").elements[0].insertAdjacentHTML(
        "afterend",
        '<button class="crs_link_button crs_open_quiz">Check if you qualify</button>'
      ), t(
        ".row-number-49 .embed_container, .row-number-52 .embed_container, .row-number-55 .embed_container"
      ).elements.forEach((e, n) => {
        e.insertAdjacentHTML("beforebegin", `<h3 class="crs-video-title">${X[n]}</h3>`);
      }), t(".crs_open_quiz").on("click", (e) => {
        const n = e.target, o = this.getButtonPosition(n);
        v("exp_new_hp_click_quiz_open", "Check if you qualify", "click", o), this.openQuiz();
      }), window.addEventListener("scroll", () => this.handleStickyVisibility()), this.handleStickyVisibility(), this.setupQuiz();
    }
    getButtonPosition(e) {
      return e.closest(".sticky-block") ? "Sticky block" : e.closest(".crs-hero-block") ? "First screen" : e.closest(".crs-between-block") ? "Start your journey to a profitable flip" : e.closest(".row-number-6") ? "About The Investor`s Edge" : e.closest(".row-number-65") ? "Under the FAQs" : "Unknown";
    }
    openQuiz() {
      const e = t(".crs_quiz_container").elements[0];
      if (e) {
        e.style.display = "flex", document.body.style.overflow = "hidden";
        const n = t(".crs_first_screen").elements[0], o = t(".crs_quiz_steps").elements[0], a = t(".crs_quiz_logo svg").elements[0], m = t(".crs_quiz_progress").elements[0];
        n && o && a && m && (n.classList.remove("active"), o.classList.add("active"), a.classList.add("active"), m.classList.add("active"), this.setStep(0)), v("exp_quiz_hard_money_step_00", "View Quiz", "view", "First Screen");
      }
    }
    closeQuiz() {
      const e = t(".crs_quiz_container").elements[0];
      e && (e.style.display = "none", document.body.style.overflow = "");
    }
    async setupQuiz() {
      await P(".crs_quiz_container");
      const e = t(".crs_first_screen"), n = t(".crs_quiz_steps"), o = t(".crs_quiz_logo svg"), a = t(".crs_start_quiz"), m = t(".crs_quiz_progress"), S = t(".crs_cancel_quiz"), l = t(".crs_quiz_steps button");
      S.on("click", () => {
        v("exp_quiz_hard_money_cancel", "Cancel Quiz", "click", "quiz_first_screen"), this.closeQuiz();
      }), o.on("click", () => {
        if (this.showingWarning) {
          this.showingWarning = !1, this.warningPropertyType = "", l.elements[0].style.display = "", this.setStep(this.step);
          return;
        }
        if (this.showingCashWarning) {
          this.showingCashWarning = !1, l.elements[0].style.display = "", this.setStep(this.step);
          return;
        }
        if (this.step === 0) {
          this.closeQuiz();
          return;
        }
        this.step -= 1, this.setStep(this.step), l.text("Continue");
      }), a.on("click", () => {
        e.removeClass("active"), n.addClass("active"), o.addClass("active"), m.addClass("active"), this.setStep(this.step), v("exp_quiz_hard_money_start", "Start Quiz", "click", "quiz_first_screen");
      }), l.on("click", () => {
        var E, r, L, z, w, x, T, M, _;
        if (this.step < g.length - 1) {
          t(".crs_error").removeClass("active");
          const $ = n.elements[0].querySelector('input[type="radio"]:checked');
          if ($) {
            if (g[this.step].relation) {
              const c = t(`[name="${g[this.step].relation}"]`).elements[0];
              c && c.tagName === "SELECT" && (c.value = $.getAttribute("value") || "", c.classList.remove("is-placeholder"), c.dispatchEvent(new Event("change", { bubbles: !0 })));
            }
          } else {
            t(".crs_error").addClass("active");
            return;
          }
          if (this.answers[this.step] = $.getAttribute("value") || "", this.step === ne && ee !== this.answers[this.step]) {
            this.showingWarning = !0, this.warningPropertyType = this.answers[this.step], l.elements[0].style.display = "none", t(".crs_quiz_step_container").html(K(this.warningPropertyType)), t(".crs_warning_yes").on("click", () => {
              this.showingWarning = !1, this.warningPropertyType = "", l.elements[0].style.display = "";
              const c = t('[name="what_type_of_financing_are_you_seeking"]').elements[0];
              c && c.tagName === "SELECT" && (c.value = "Residential real estate (1–4 units only)", c.classList.remove("is-placeholder"), c.dispatchEvent(new Event("change", { bubbles: !0 })));
              const k = this.answers[this.step];
              this.setStep(this.step + 1), this.step += 1, v(`exp_quiz_hard_money_step_${this.step}`, k, "success", `quiz_step_${this.step}`), this.step === g.length - 1 && l.text("Apply Now");
            }), t(".crs_warning_no").on("click", () => {
              this.showingWarning = !1, this.warningPropertyType = "", l.elements[0].style.display = "", this.setStep(this.step);
            });
            return;
          }
          if (this.step === te && se.includes(this.answers[this.step])) {
            this.showingCashWarning = !0, l.elements[0].style.display = "none", t(".crs_quiz_step_container").html(F()), t(".crs_cash_warning_yes").on("click", () => {
              this.showingCashWarning = !1, l.elements[0].style.display = "";
              const c = t('[name="amount_of_money_to_invest_in_real_estate_"]').elements[0];
              c && c.tagName === "SELECT" && (c.value = "$5,001 to $10,000", c.classList.remove("is-placeholder"), c.dispatchEvent(new Event("change", { bubbles: !0 })));
              const k = this.answers[this.step];
              this.setStep(this.step + 1), this.step += 1, v(`exp_quiz_hard_money_step_${this.step}`, k, "success", `quiz_step_${this.step}`), this.step === g.length - 1 && l.text("Apply Now");
            }), t(".crs_cash_warning_no").on("click", () => {
              t(".crs_quiz_step_container").html(F(!0)), t(".crs_cash_warning_home").on("click", () => {
                window.location.pathname = "/";
              }), v("exp_quiz_hard_money_cash_low_no", "Cash too low - No", "click", "quiz_cash_warning");
            });
            return;
          }
          this.setStep(this.step + 1), this.step += 1, v(
            `exp_quiz_hard_money_step_${this.step}`,
            ((r = (E = $.closest("label")) == null ? void 0 : E.querySelector("div")) == null ? void 0 : r.textContent) || "",
            "success",
            `quiz_step_${this.step}`
          ), this.step === g.length - 1 && l.text("Apply Now");
        } else {
          let y = !1;
          if (n.elements[0].querySelectorAll(
            ".crs_quiz_answer_input_label input"
          ).forEach((d) => {
            var q, A;
            if (!d.closest(".crs_phone_verify_block") && d.value === "") {
              if (y = !0, (q = d.closest("label")) != null && q.querySelector(".crs_input_error")) return;
              (A = d.closest("label")) == null || A.insertAdjacentHTML("beforeend", '<p class="crs_input_error">This field is required.</p>');
            }
          }), !this.phoneVerified) {
            y = !0;
            const d = n.elements[0].querySelector(".crs_phone_verify_block");
            d && !d.querySelector(".crs_phone_verify_error") && d.insertAdjacentHTML(
              "beforeend",
              '<p class="crs_input_error crs_phone_verify_error">Please verify your phone number</p>'
            );
          }
          if (((L = n.elements[0].querySelector('select[name="crs_state"]')) == null ? void 0 : L.value) === "") {
            if (y = !0, (z = n.elements[0].querySelector('select[name="crs_state"]').closest("label")) != null && z.querySelector(".crs_input_error"))
              return;
            (w = n.elements[0].querySelector('select[name="crs_state"]').closest("label")) == null || w.insertAdjacentHTML("beforeend", '<p class="crs_input_error">This field is required.</p>');
          }
          if (((x = n.elements[0].querySelector('select[name="crs_hear_about_us"]')) == null ? void 0 : x.value) === "") {
            if (y = !0, (T = n.elements[0].querySelector('select[name="crs_hear_about_us"]').closest("label")) != null && T.querySelector(".crs_input_error"))
              return;
            (M = n.elements[0].querySelector('select[name="crs_hear_about_us"]').closest("label")) == null || M.insertAdjacentHTML("beforeend", '<p class="crs_input_error">This field is required.</p>');
          }
          if (y) return;
          const W = t(".hs-error-msg").elements;
          W.length !== 0 && W.forEach((d) => {
            var R, V, N, s, i;
            const q = ((R = d.textContent) == null ? void 0 : R.toLowerCase()) || "", A = ((N = (V = d.closest(".hs-form-field")) == null ? void 0 : V.querySelector("input")) == null ? void 0 : N.getAttribute("name")) || "";
            (i = (s = t(`input[data-relation="${A}"]`).elements[0]) == null ? void 0 : s.closest("label")) == null || i.insertAdjacentHTML("beforeend", `<p class="crs_input_error">${q}</p>`);
          }), v("exp_quiz_hard_money_complete", "Complete Quiz", "success", "quiz_complete"), (_ = t(".hs_submit input").elements[0]) == null || _.click();
        }
      });
    }
    async setStep(e) {
      var S;
      if (e < 0) return;
      const n = t('select[name="your_state__united_states__"] option').elements.map((l) => ({
        label: l.textContent || "",
        value: l.getAttribute("value") || ""
      })), o = t(".crs_quiz_step_container"), a = t(".crs_quiz_progress_bar");
      o.html(Z(e + 1, g[e].question, g[e].answers));
      const m = (e + 1) / g.length * 100;
      if (a.elements[0].style.width = `${m}%`, this.answers[e] && ((S = t(`input[value="${this.answers[e]}"]`).elements[0]) == null || S.setAttribute("checked", "true")), e === g.length - 1) {
        const l = t('select[name="crs_state"]').elements[0];
        n.forEach((s) => {
          const i = document.createElement("option");
          i.value = s.value, i.textContent = s.label, l.appendChild(i);
        }), l.addEventListener("change", () => {
          var i;
          (i = t(".crs_quiz_answer_select_label .crs_input_error").elements[0]) == null || i.remove();
          const s = t('select[name="your_state__united_states__"]').elements[0];
          s && (s.value = l.value, s.dispatchEvent(new Event("change", { bubbles: !0 })));
        });
        const E = t('select[name="crs_hear_about_us"]').elements[0];
        E && E.addEventListener("change", () => {
          t(".crs_quiz_answer_select_label .crs_input_error").elements.forEach((i) => i == null ? void 0 : i.remove());
          const s = t(
            'select[name="how_did_you_hear_about_us____homepage_on_demand_webinar_registration"]'
          ).elements[0];
          s && (s.value = E.value, s.dispatchEvent(new Event("change", { bubbles: !0 })));
        });
        const r = document.querySelector(".crs_phone_verify_block"), L = r == null ? void 0 : r.querySelector(".crs_phone_base"), z = r == null ? void 0 : r.querySelector('input[name="crs_phone"]'), w = r == null ? void 0 : r.querySelector(".crs_send_code_btn"), x = r == null ? void 0 : r.querySelector(".crs_phone_field_label"), T = r == null ? void 0 : r.querySelector(".crs_phone_otp"), M = r == null ? void 0 : r.querySelector(".crs_otp_phone_num"), _ = Array.from((r == null ? void 0 : r.querySelectorAll(".crs_otp_digit")) || []), y = r == null ? void 0 : r.querySelector(".crs_otp_timer_box"), $ = r == null ? void 0 : r.querySelector(".crs_timer_text"), c = r == null ? void 0 : r.querySelector(".crs_phone_verified_box"), k = r == null ? void 0 : r.querySelector(".crs_resend_code_btn"), W = r == null ? void 0 : r.querySelector(".crs_resend_row"), d = r == null ? void 0 : r.querySelector(".crs_change_phone_btn"), q = (s) => {
          const i = s.replace(/\D/g, "");
          return i.length === 10 ? `+1${i}` : i.length === 11 && i[0] === "1" ? `+${i}` : null;
        }, A = (s = 60) => {
          this.phoneTimerInterval && clearInterval(this.phoneTimerInterval);
          let i = s;
          const u = () => {
            const h = String(Math.floor(i / 60)).padStart(2, "0"), f = String(i % 60).padStart(2, "0");
            $.textContent = `${h}:${f}`;
          };
          u(), this.phoneTimerInterval = setInterval(() => {
            i--, u(), i <= 0 && (clearInterval(this.phoneTimerInterval), this.phoneTimerInterval = null);
          }, 1e3);
        }, R = () => _.map((s) => s.value).join(""), V = async (s) => {
          var u, h;
          const i = R();
          if (!(i.length < 4))
            try {
              const b = await (await fetch("https://app.theinvestorsedge.com/phone/verify/check", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phoneNumber: s, code: i })
              })).json();
              if (b.success && ((u = b.verificationCheck) == null ? void 0 : u.status) === "approved") {
                this.phoneVerified = !0, this.verifiedPhone = s, this.phoneTimerInterval && (clearInterval(this.phoneTimerInterval), this.phoneTimerInterval = null), y.style.display = "none", c.style.display = "flex", _.forEach((ie) => ie.disabled = !0), W && (W.style.display = "none");
                const C = t('input[name="mobilephone"]').elements[0];
                C && (C.value = s, C.dispatchEvent(new Event("input")));
              } else
                _.forEach((C) => C.classList.add("crs_digit_error")), (h = _[0]) == null || h.focus();
            } catch {
              _.forEach((f) => f.classList.add("crs_digit_error"));
            }
        }, N = async (s) => {
          var i, u;
          w.disabled = !0, w.textContent = "...", (i = r.querySelector(".crs_phone_verify_error")) == null || i.remove();
          try {
            const f = await (await fetch("https://app.theinvestorsedge.com/phone/verify/send", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ phoneNumber: s })
            })).json();
            if (f.success)
              M.textContent = s, T.style.display = "block", L.style.display = "none", _.forEach((b) => {
                b.value = "", b.classList.remove("crs_digit_error");
              }), y.style.display = "flex", c.style.display = "none", A(60), (u = _[0]) == null || u.focus();
            else {
              const b = f.message || "Failed to send code. Please try again.";
              x.querySelector(".crs_phone_verify_error") || x.insertAdjacentHTML(
                "beforeend",
                `<p class="crs_input_error crs_phone_verify_error">${b}</p>`
              );
            }
          } catch {
            x.querySelector(".crs_phone_verify_error") || x.insertAdjacentHTML(
              "beforeend",
              '<p class="crs_input_error crs_phone_verify_error">Network error. Please try again.</p>'
            );
          } finally {
            w.disabled = !1, w.textContent = "Send code";
          }
        };
        this.phoneVerified && (L.style.display = "none", M.textContent = this.verifiedPhone, T.style.display = "block", y.style.display = "none", c.style.display = "flex"), w == null || w.addEventListener("click", async () => {
          var i;
          (i = r.querySelector(".crs_phone_verify_error")) == null || i.remove();
          const s = q(z.value);
          if (!s) {
            x.querySelector(".crs_phone_verify_error") || x.insertAdjacentHTML(
              "beforeend",
              '<p class="crs_input_error crs_phone_verify_error">Please enter a valid US phone number</p>'
            );
            return;
          }
          await N(s);
        }), _.forEach((s, i) => {
          s.addEventListener("input", async () => {
            s.classList.remove("crs_digit_error");
            const u = s.value.replace(/\D/g, "");
            s.value = u ? u[0] : "", s.value && i < _.length - 1 && _[i + 1].focus(), R().length === 4 && await V(q(z.value));
          }), s.addEventListener("keydown", (u) => {
            u.key === "Backspace" && !s.value && i > 0 && _[i - 1].focus();
          }), s.addEventListener("paste", async (u) => {
            var f;
            u.preventDefault();
            const h = ((f = u.clipboardData) == null ? void 0 : f.getData("text").replace(/\D/g, "").slice(0, 4)) || "";
            h.split("").forEach((b, C) => {
              _[C] && (_[C].value = b);
            }), _.forEach((b) => b.classList.remove("crs_digit_error")), h.length === 4 ? await V(q(z.value)) : _[h.length] && _[h.length].focus();
          });
        }), k == null || k.addEventListener("click", async () => {
          const s = q(z.value);
          s && (_.forEach((i) => {
            i.value = "", i.classList.remove("crs_digit_error");
          }), await N(s));
        }), d == null || d.addEventListener("click", () => {
          this.phoneVerified = !1, this.verifiedPhone = "", this.phoneTimerInterval && (clearInterval(this.phoneTimerInterval), this.phoneTimerInterval = null), T.style.display = "none", L.style.display = "block", z.value = "";
          const s = t('input[name="mobilephone"]').elements[0];
          s && (s.value = "", s.dispatchEvent(new Event("input")));
        }), t(".crs_quiz_answer_input_label input").on("input", (s) => {
          const i = s.target, u = i.getAttribute("data-relation") || "";
          if (!u) return;
          const h = t(`input[name="${u}"]`).elements[0];
          h && (h.value = i.value, h.dispatchEvent(new Event("input"))), t(".crs_quiz_answer_input_label .crs_input_error").elements.forEach((f) => f == null ? void 0 : f.remove());
        });
      }
    }
  }
  new re();
})();
//# sourceMappingURL=index.js.map
