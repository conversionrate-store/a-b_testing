(function() {
  "use strict";
  const P = `.sticky-block {
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
  margin-bottom: 12px;
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

.crs_quiz_steps button {
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
  margin: 0;
}
.crs_error.active {
  display: block;
}

.crs_input_error {
  color: rgb(255, 109, 109);
  margin: 10px 0 0;
  line-height: 1;
  font-size: 12px;
}/*# sourceMappingURL=style.css.map */`, _ = (r, e, n, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: e,
      event_type: n,
      event_loc: s
    }), Q(`Event: ${r} | ${e} | ${n} | ${s}`, "success");
  }, g = (r) => new Promise((e) => {
    const n = document.querySelector(r);
    n && e(n);
    const s = new MutationObserver(() => {
      const i = document.querySelector(r);
      i && (e(i), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), B = ({ name: r, dev: e }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class w {
    constructor(e) {
      this.elements = e instanceof w ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, n, s) {
      return typeof n == "function" && (s = n, n = ""), this.elements.forEach((i) => {
        i.addEventListener(e, function(c) {
          var u;
          if (n !== "") {
            let l = (u = c.target) == null ? void 0 : u.closest(n);
            l && (s == null || s.call(l, c));
          } else
            s == null || s.call(i, c);
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
        e(new w(n), this.elements.indexOf(n));
      return this;
    }
    style(e, n) {
      const s = e.split("-").map((i, c) => c === 0 ? i : i.charAt(0).toUpperCase() + i.slice(1)).join("");
      return this.elements.forEach(function(i) {
        i.style[s] = n;
      }), this;
    }
    find(e) {
      const n = this.elements.map((s) => Array.from(s.querySelectorAll(e)));
      return new w(n.flat());
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
  const t = (r) => new w(r), F = (r) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, Q = (r, e = "info") => {
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
  }, x = "https://conversionrate-store.github.io/a-b_images/theinvestorsedge/", $ = {
    back: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
		<path d="M0 8.00005C0 8.30737 0.117512 8.56956 0.361583 8.80456L7.4124 15.7017C7.60228 15.9006 7.85533 16 8.14459 16C8.73227 16 9.19324 15.5481 9.19324 14.9515C9.19324 14.6622 9.07568 14.4 8.8769 14.2012L2.52204 8.00005L8.8769 1.79888C9.07568 1.59096 9.19324 1.32882 9.19324 1.03955C9.19324 0.451984 8.73227 0 8.14459 0C7.85533 0 7.60228 0.0994383 7.4124 0.298303L0.361583 7.19554C0.117512 7.43054 0.00903668 7.69274 0 8.00005Z" fill="white"/>
		</svg>`,
    down: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
		<path d="M0.729492 0.68396L8.22949 8.68396L15.7295 0.68396" stroke="#09233E" stroke-width="2"/>
		</svg>`
  }, I = (
    /* HTML */
    `
  <div class="sticky-block">
    <div class="sticky-block__content">
      <p>We help you find, fund, and flip real estate</p>
      <button class="crs_link_button crs_open_quiz">Check if you qualify</button>
    </div>
  </div>
`
  ), U = (
    /* HTML */
    `
  <div class="crs-hero-block">
    <p>with no money down using 100% hard-money financing.</p>
    <button class="crs_link_button crs_open_quiz">Check if you qualify</button>
    <span>Featured in:</span>
    <img src="${x}clients_d.svg" alt="Clients" class="img_clients_d" />
    <img src="${x}clients_m.svg" alt="Clients" class="img_clients_m" />
  </div>
`
  ), V = (
    /* HTML */
    `
  <div class="crs-between-block">
    <p>See What Our Members Are Saying:</p>
    <p>Start your journey to a profitable flip — even without real estate experience.</p>
    <button class="crs_link_button crs_open_quiz">Check if you qualify</button>
  </div>
`
  ), Y = (
    /* HTML */
    `
  <div class="crs_quiz_container">
    <div class="crs_quiz_header">
      <div class="crs_quiz_max_width">
        <div class="crs_quiz_logo">
          ${$.back}
          <img src="${x}logo.svg" alt="Quiz Header" />
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
        <img src="${x}/quiz_rating.webp" alt="rating" class="crs_rating_m" />
        <img src="${x}/quiz_rating_d.webp" alt="rating" class="crs_rating_d" />
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
  ), N = (r, e, n) => {
    let s = "";
    return n ? s = n.map(
      (i) => (
        /* HTML */
        `
          <label class="crs_quiz_answer_radio_label">
            <input type="radio" value="${i.value}" name="step${r}" />
            <div><span></span>${i.label}</div>
          </label>
        `
      )
    ).join("") : s = /* HTML */
    `
      <label class="crs_quiz_answer_input_label">
        <span>First Name</span>
        <input type="text" name="crs_name" placeholder="First Name" data-relation="firstname" />
      </label>
      <label class="crs_quiz_answer_input_label">
        <span>Last Name</span>
        <input type="text" name="crs_last_name" placeholder="Last Name" data-relation="lastname" />
      </label>
      <label class="crs_quiz_answer_input_label">
        <span>Phone number</span>
        <input type="text" name="crs_phone" placeholder="Phone number" data-relation="mobilephone" />
      </label>
      <label class="crs_quiz_answer_input_label">
        <span>Email</span>
        <input type="email" name="crs_email" placeholder="Email" data-relation="email" />
      </label>
      <label class="crs_quiz_answer_select_label">
        <span>Your State</span>
        <select name="crs_state" placeholder="Select your state"></select>
        ${$.down}
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
        ${$.down}
      </label>
    `, /* HTML */
    `
    <div class="crs_quiz_step" data-step="${r}">
      <h3>${e}</h3>
      <div class="crs_quiz_answers">${s}</div>
    </div>
  `;
  };
  B({ name: "Home Page Update", dev: "YK" }), F("home_page_update");
  const R = [
    "Randy - <span>around $60,000</span>",
    "Dalisa - <span>$40,000 - $60,000 in profit</span>",
    "Ptolemy - <span>$80,000 to $100,000 in profit</span>",
    "Joe and Chelsea - <span>about $40,000 in profit</span>",
    "Charles - <span>around $70,000</span>",
    "Stacy - <span>expecting to make $30,000 to $65,000</span>"
  ], p = [
    {
      question: "Do you already have a property picked out?",
      answers: [
        { label: "I already have a property under contract", value: "1" },
        { label: "I'm actively looking for a deal", value: "0" },
        { label: "I want to learn how to find the best deal", value: "0" }
      ],
      relation: "property_in_mind"
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
        { label: "$2,500 to $5,000", value: "$2,500 to $5,000" },
        { label: "$5,001 to $10,000", value: "$5,001 to $10,000" },
        { label: "$10,001 to $20,000", value: "$10,001 to $20,000" },
        { label: "$20,001 or more", value: "$20,001 or more" }
      ],
      relation: "amount_of_money_to_invest_in_real_estate_"
    },
    {
      question: "Fill out the application for a free<br/>pre-qualification consultation for 100% financing"
    }
  ];
  class D {
    constructor() {
      this.step = 0, this.answers = [], this.init();
    }
    isElementVisible(e) {
      const n = e.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight;
      return n.top >= 0 && n.bottom <= s;
    }
    handleStickyVisibility() {
      const e = document.querySelector(".sticky-block");
      if (!e) return;
      const n = document.querySelectorAll(".crs_link_button:not(.sticky-block .crs_link_button)");
      let s = !1;
      n.forEach((i) => {
        this.isElementVisible(i) && (s = !0);
      }), s ? e.classList.add("crs-hidden") : e.classList.remove("crs-hidden");
    }
    async init() {
      await g("body"), t("body").elements[0].insertAdjacentHTML("afterbegin", `<style>${P}</style>`), t("body").elements[0].insertAdjacentHTML("afterbegin", Y), await g("h1.pwr-hero__title"), t(".body-wrapper").elements[0].insertAdjacentHTML("beforeend", I), t("h1.pwr-hero__title").elements[0].insertAdjacentHTML("afterend", `${U}`), t(".row-number-6 .pwr-rich-text").elements[0].insertAdjacentElement(
        "afterbegin",
        t(".row-number-2 .row-number-5 .pwr-sec__title").elements[0]
      ), await g(".row-number-65"), t(".row-number-55").elements[0].insertAdjacentElement("afterend", t(".row-number-8").elements[0]), t(".row-number-55").elements[0].insertAdjacentElement("afterend", t(".row-number-6").elements[0]), t(".row-number-52").elements[0].insertAdjacentHTML("afterend", V), t(".row-number-6 .pwr-rich-text p:nth-of-type(4)").elements[0].insertAdjacentHTML(
        "afterend",
        '<button class="crs_link_button crs_open_quiz">Check if you qualify</button>'
      ), await g(".row-number-65 .pwr-sec-cta--content .pwr-sec-cta__cta-wrapper"), t(".row-number-65 .pwr-sec-cta--content .pwr-sec-cta__cta-wrapper").elements[0].insertAdjacentHTML(
        "afterend",
        '<button class="crs_link_button crs_open_quiz">Check if you qualify</button>'
      ), t(
        ".row-number-49 .embed_container, .row-number-52 .embed_container, .row-number-55 .embed_container"
      ).elements.forEach((e, n) => {
        e.insertAdjacentHTML("beforebegin", `<h3 class="crs-video-title">${R[n]}</h3>`);
      }), t(".crs_open_quiz").on("click", (e) => {
        const n = e.target, s = this.getButtonPosition(n);
        _("exp_new_hp_click_quiz_open", "Check if you qualify", "click", s), this.openQuiz();
      }), window.addEventListener("scroll", () => this.handleStickyVisibility()), this.handleStickyVisibility(), this.setupQuiz();
    }
    getButtonPosition(e) {
      return e.closest(".sticky-block") ? "Sticky block" : e.closest(".crs-hero-block") ? "First screen" : e.closest(".crs-between-block") ? "Start your journey to a profitable flip" : e.closest(".row-number-6") ? "About The Investor`s Edge" : e.closest(".row-number-65") ? "Under the FAQs" : "Unknown";
    }
    openQuiz() {
      const e = t(".crs_quiz_container").elements[0];
      if (e) {
        e.style.display = "flex", document.body.style.overflow = "hidden";
        const n = t(".crs_first_screen").elements[0], s = t(".crs_quiz_steps").elements[0], i = t(".crs_quiz_logo svg").elements[0], c = t(".crs_quiz_progress").elements[0];
        n && s && i && c && (n.classList.remove("active"), s.classList.add("active"), i.classList.add("active"), c.classList.add("active"), this.setStep(0)), _("exp_quiz_hard_money_step_00", "View Quiz", "view", "First Screen");
      }
    }
    closeQuiz() {
      const e = t(".crs_quiz_container").elements[0];
      e && (e.style.display = "none", document.body.style.overflow = "");
    }
    async setupQuiz() {
      await g(".crs_quiz_container");
      const e = t(".crs_first_screen"), n = t(".crs_quiz_steps"), s = t(".crs_quiz_logo svg"), i = t(".crs_start_quiz"), c = t(".crs_quiz_progress"), u = t(".crs_cancel_quiz"), l = t(".crs_quiz_steps button");
      u.on("click", () => {
        _("exp_quiz_hard_money_cancel", "Cancel Quiz", "click", "quiz_first_screen"), this.closeQuiz();
      }), s.on("click", () => {
        if (this.step === 0) {
          this.closeQuiz();
          return;
        }
        this.step -= 1, this.setStep(this.step), l.text("Continue");
      }), i.on("click", () => {
        e.removeClass("active"), n.addClass("active"), s.addClass("active"), c.addClass("active"), this.setStep(this.step), _("exp_quiz_hard_money_start", "Start Quiz", "click", "quiz_first_screen");
      }), l.on("click", () => {
        var m, a, o, z, b, f, E, L, C;
        if (this.step < p.length - 1) {
          t(".crs_error").removeClass("active");
          const v = n.elements[0].querySelector('input[type="radio"]:checked');
          if (v) {
            if (p[this.step].relation) {
              const d = t(`[name="${p[this.step].relation}"]`).elements[0];
              d && d.tagName === "SELECT" && (d.value = v.getAttribute("value") || "", d.classList.remove("is-placeholder"), d.dispatchEvent(new Event("change", { bubbles: !0 })));
            }
          } else {
            t(".crs_error").addClass("active");
            return;
          }
          this.answers[this.step] = v.getAttribute("value") || "", this.setStep(this.step + 1), this.step += 1, _(
            `exp_quiz_hard_money_step_${this.step}`,
            ((a = (m = v.closest("label")) == null ? void 0 : m.querySelector("div")) == null ? void 0 : a.textContent) || "",
            "success",
            `quiz_step_${this.step}`
          ), this.step === p.length - 1 && l.text("Apply Now");
        } else {
          let y = !1;
          if (n.elements[0].querySelectorAll(
            ".crs_quiz_answer_input_label input"
          ).forEach((h) => {
            var k, q;
            if (h.value === "") {
              if (y = !0, (k = h.closest("label")) != null && k.querySelector(".crs_input_error")) return;
              (q = h.closest("label")) == null || q.insertAdjacentHTML("beforeend", '<p class="crs_input_error">This field is required.</p>');
            }
          }), ((o = n.elements[0].querySelector('select[name="crs_state"]')) == null ? void 0 : o.value) === "") {
            if (y = !0, (z = n.elements[0].querySelector('select[name="crs_state"]').closest("label")) != null && z.querySelector(".crs_input_error"))
              return;
            (b = n.elements[0].querySelector('select[name="crs_state"]').closest("label")) == null || b.insertAdjacentHTML("beforeend", '<p class="crs_input_error">This field is required.</p>');
          }
          if (((f = n.elements[0].querySelector('select[name="crs_hear_about_us"]')) == null ? void 0 : f.value) === "") {
            if (y = !0, (E = n.elements[0].querySelector('select[name="crs_hear_about_us"]').closest("label")) != null && E.querySelector(".crs_input_error"))
              return;
            (L = n.elements[0].querySelector('select[name="crs_hear_about_us"]').closest("label")) == null || L.insertAdjacentHTML("beforeend", '<p class="crs_input_error">This field is required.</p>');
          }
          if (y) return;
          const S = t(".hs-error-msg").elements;
          S.length !== 0 && S.forEach((h) => {
            var A, j, H, T, M;
            const k = ((A = h.textContent) == null ? void 0 : A.toLowerCase()) || "", q = ((H = (j = h.closest(".hs-form-field")) == null ? void 0 : j.querySelector("input")) == null ? void 0 : H.getAttribute("name")) || "";
            (M = (T = t(`input[data-relation="${q}"]`).elements[0]) == null ? void 0 : T.closest("label")) == null || M.insertAdjacentHTML("beforeend", `<p class="crs_input_error">${k}</p>`);
          }), _("exp_quiz_hard_money_complete", "Complete Quiz", "success", "quiz_complete"), (C = t(".hs_submit input").elements[0]) == null || C.click();
        }
      });
    }
    async setStep(e) {
      var u;
      if (e < 0) return;
      const n = t('select[name="your_state__united_states__"] option').elements.map((l) => ({
        label: l.textContent || "",
        value: l.getAttribute("value") || ""
      })), s = t(".crs_quiz_step_container"), i = t(".crs_quiz_progress_bar");
      s.html(N(e + 1, p[e].question, p[e].answers));
      const c = (e + 1) / p.length * 100;
      if (i.elements[0].style.width = `${c}%`, this.answers[e] && ((u = t(`input[value="${this.answers[e]}"]`).elements[0]) == null || u.setAttribute("checked", "true")), e === p.length - 1) {
        const l = t('select[name="crs_state"]').elements[0];
        n.forEach((a) => {
          const o = document.createElement("option");
          o.value = a.value, o.textContent = a.label, l.appendChild(o);
        }), l.addEventListener("change", () => {
          var o;
          (o = t(".crs_quiz_answer_select_label .crs_input_error").elements[0]) == null || o.remove();
          const a = t('select[name="your_state__united_states__"]').elements[0];
          a && (a.value = l.value, a.dispatchEvent(new Event("change", { bubbles: !0 })));
        });
        const m = t('select[name="crs_hear_about_us"]').elements[0];
        m && m.addEventListener("change", () => {
          t(".crs_quiz_answer_select_label .crs_input_error").elements.forEach((o) => o == null ? void 0 : o.remove());
          const a = t(
            'select[name="how_did_you_hear_about_us____homepage_on_demand_webinar_registration"]'
          ).elements[0];
          a && (a.value = m.value, a.dispatchEvent(new Event("change", { bubbles: !0 })));
        }), t(".crs_quiz_answer_input_label input").on("input", (a) => {
          const o = a.target, z = o.getAttribute("data-relation") || "", b = t(`input[name="${z}"]`).elements[0];
          b && (b.value = o.value, b.dispatchEvent(new Event("input"))), t(".crs_quiz_answer_input_label .crs_input_error").elements.forEach((f) => f == null ? void 0 : f.remove());
        });
      }
    }
  }
  new D();
})();
//# sourceMappingURL=index.js.map
