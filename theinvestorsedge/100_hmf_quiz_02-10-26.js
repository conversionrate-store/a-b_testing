(function() {
  "use strict";
  const H = `html.crs-hmfq-on .body-wrapper {
  display: none !important;
}

.crs-hmfq {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background: #eee;
  color: #09233e;
  font-family: "Inter", sans-serif;
}
.crs-hmfq * {
  box-sizing: border-box;
}
.crs-hmfq__wrap {
  width: 100%;
  max-width: 680px;
  padding: 0 20px;
  margin: 0 auto;
}
.crs-hmfq__header {
  background: #09233e;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 768px) {
  .crs-hmfq__header {
    height: 60px;
  }
}
.crs-hmfq__header a {
  display: flex;
}
.crs-hmfq__header img {
  height: 44px;
  width: auto;
}
.crs-hmfq__top {
  background: #cfe2f3;
  padding: 24px 0;
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  text-align: center;
}
@media (max-width: 768px) {
  .crs-hmfq__top {
    padding: 20px 0;
    text-align: left;
  }
}
.crs-hmfq__main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}
@media (max-width: 768px) {
  .crs-hmfq__main {
    padding-top: 32px;
    padding-bottom: 90px;
  }
}
.crs-hmfq__title {
  font-family: "Inter", sans-serif;
  font-size: 42px;
  line-height: 52px;
  font-weight: 700;
  color: #09233e;
  margin: 0 0 16px;
  max-width: 560px;
}
@media (max-width: 768px) {
  .crs-hmfq__title {
    max-width: none;
    font-size: 34px;
    line-height: 46px;
  }
}
.crs-hmfq__mob {
  display: none;
}
@media (max-width: 768px) {
  .crs-hmfq__desk {
    display: none;
  }
  .crs-hmfq__mob {
    display: inline;
  }
}
.crs-hmfq__sub {
  font-size: 24px;
  line-height: 34px;
  margin: 0 0 24px;
  color: #09233e;
}
@media (max-width: 768px) {
  .crs-hmfq__sub {
    font-size: 16px;
    line-height: 26px;
  }
}
.crs-hmfq__buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.crs-hmfq__buttons button {
  width: 100%;
  min-height: 56px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #09233e;
  border-radius: 6px;
  border: 2px solid #ff9902;
  background: #ff9902;
  cursor: pointer;
  transition: opacity 0.2s;
}
.crs-hmfq__buttons button:hover {
  opacity: 0.9;
}
.crs-hmfq__no {
  background: transparent !important;
}
.crs-hmfq__rating {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  height: 80px;
  padding: 0 20px;
  background: #f4f6fa;
  border-radius: 6px 6px 0 0;
}
@media (max-width: 768px) {
  .crs-hmfq__rating {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    height: 70px;
    padding: 0 12px;
    border-radius: 0;
    justify-content: space-between;
    gap: 8px;
  }
}
.crs-hmfq__rating-google {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.crs-hmfq__rating-top {
  display: flex;
  align-items: center;
  gap: 6px;
}
.crs-hmfq__rating-top img {
  width: 18px;
  height: 18px;
}
.crs-hmfq__rating-top b {
  font-size: 16px;
  line-height: 1;
}
.crs-hmfq__stars {
  display: flex;
  gap: 1px;
}
.crs-hmfq__stars svg {
  width: 14px;
  height: 13px;
}
.crs-hmfq__rating-count {
  font-size: 12px;
  line-height: 16px;
}
.crs-hmfq__rating-bbb {
  height: 46px;
  width: auto;
}
@media (max-width: 768px) {
  .crs-hmfq__rating-bbb {
    height: 40px;
  }
}
.crs-hmfq__rating-years {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #59b4e5;
  font-weight: 700;
}
.crs-hmfq__rating-years b {
  font-size: 34px;
  line-height: 1;
}
@media (max-width: 768px) {
  .crs-hmfq__rating-years b {
    font-size: 26px;
  }
}
.crs-hmfq__rating-years span {
  font-size: 13px;
  line-height: 12px;
  text-align: center;
}
@media (max-width: 768px) {
  .crs-hmfq__rating-years span {
    font-size: 11px;
    line-height: 11px;
  }
}

.crs_quiz_container[data-crs] .crs_quiz_step_description {
  font-size: 16px;
  line-height: 26px;
  color: #09233e;
  margin: -20px 0 24px;
}
.crs_quiz_container[data-crs] .crs_quiz_answer_radio_label > div:hover {
  border-color: #09233e;
}
.crs_quiz_container[data-crs] .crs_quiz_answer_select_label:has(.crs_input_error) svg {
  bottom: 44px;
}
.crs_quiz_container[data-crs] .crs_warning_buttons .crs_cash_warning_home {
  flex: 1 1 100%;
}
.crs_quiz_container[data-crs] .crs_quiz_answer_submit_error {
  margin-top: 16px;
  font-size: 14px;
}
@media (max-width: 768px) {
  .crs_quiz_container[data-crs] .crs_quiz_step {
    padding-top: 24px;
  }
  .crs_quiz_container[data-crs] .crs_quiz_step h3 {
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 24px;
  }
  .crs_quiz_container[data-crs] .crs_quiz_step_description {
    font-size: 14px;
    line-height: 22px;
    margin-top: -12px;
  }
  .crs_quiz_container[data-crs] .crs_quiz_step h3 br {
    display: none;
  }
  .crs_quiz_container[data-crs] .crs_otp_digit {
    flex: 1 1 0;
    min-width: 0;
    width: auto !important;
    height: 44px !important;
  }
  .crs_quiz_container[data-crs] .crs_otp_timer_box,
  .crs_quiz_container[data-crs] .crs_phone_verified_box {
    height: 44px;
  }
  .crs_quiz_container[data-crs] .crs_phone_verified_box {
    padding: 0 8px;
    gap: 6px;
  }
  .crs_quiz_container[data-crs] .crs_phone_verified_box span {
    font-size: 13px;
  }
}
`, _ = (t, e, n, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: e,
      event_type: n,
      event_loc: s
    }), z(`Event: ${t} | ${e} | ${n} | ${s}`, "success");
  }, k = (t) => new Promise((e) => {
    const n = document.querySelector(t);
    n && e(n);
    const s = new MutationObserver(() => {
      const a = document.querySelector(t);
      a && (e(a), s.disconnect());
    });
    s.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), O = ({ name: t, dev: e }) => {
    const n = t.toLowerCase().replace(/\s/g, "_");
    _(`${n}_started`, `Experiment ${t} started`, "other", n), console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, R = (t) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, D = (t, e, n, s, a = 1e3, c = 0.5) => {
    let i, h;
    i = new IntersectionObserver(
      function(o) {
        o[0].isIntersecting === !0 ? h = setTimeout(() => {
          _(
            e,
            o[0].target.dataset.visible || s,
            "view",
            n
          ), i.disconnect();
        }, a) : (z("Element is not fully visible", "warn"), clearTimeout(h));
      },
      { threshold: [c] }
    );
    {
      const o = document.querySelector(t);
      o && i.observe(o);
    }
  }, z = (t, e = "info") => {
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
    console.log(`%c>>> ${t}`, `${n} font-size: 16px; font-weight: 600`);
  }, w = "https://conversionrate-store.github.io/a-b_images/theinvestorsedge/", y = {
    down: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
		<path d="M0.729492 0.68396L8.22949 8.68396L15.7295 0.68396" stroke="#09233E" stroke-width="2"/>
		</svg>`,
    resend: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
		<path d="M12.2841 4.65524C11.3914 3.94094 10.3076 3.375 9 3.375C5.8934 3.375 3.375 5.89339 3.375 9C3.375 12.1066 5.8934 14.625 9 14.625C11.4412 14.625 13.521 13.0691 14.2985 10.8942C14.4379 10.5041 14.8313 10.2426 15.2365 10.3285L15.9701 10.484C16.3754 10.5699 16.6377 10.9697 16.5134 11.3648C15.509 14.5584 12.5262 16.875 9 16.875C4.65076 16.875 1.125 13.3492 1.125 9C1.125 4.65076 4.65076 1.125 9 1.125C11.0876 1.125 12.7137 2.07635 13.8834 3.05595L15.2197 1.71967C15.4342 1.50517 15.7568 1.441 16.037 1.55709C16.3173 1.67317 16.5 1.94665 16.5 2.25V6.375C16.5 6.78921 16.1642 7.125 15.75 7.125H11.625C11.3217 7.125 11.0482 6.94227 10.9321 6.66201C10.8161 6.38176 10.8802 6.05917 11.0947 5.84467L12.2841 4.65524Z" fill="#59B4E5"/>
		</svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
		<path d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM12.87 6.84L8.73 12.24C8.55 12.42 8.28 12.6 8.01 12.6C7.74 12.6 7.47 12.51 7.29 12.24L5.13 9.45C4.86 9.09 4.86 8.46 5.31 8.19C5.76 7.92 6.3 7.92 6.57 8.37L8.01 10.26L11.43 5.76C11.7 5.4 12.33 5.31 12.69 5.58C13.14 5.85 13.14 6.39 12.87 6.84Z" fill="#02BC7D"/>
		</svg>`,
    star: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 22 20" fill="none">
		<path d="M11.0007 0L13.9102 6.99537L21.4623 7.60081L15.7084 12.5296L17.4663 19.8992L11.0007 15.95L4.53504 19.8992L6.29295 12.5296L0.539062 7.60081L8.09114 6.99537L11.0007 0Z" fill="#FDB948"/>
		</svg>`
  }, V = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ], j = (
    /* HTML */
    `
  <div class="crs-hmfq__rating">
    <div class="crs-hmfq__rating-google">
      <a
        href="https://www.google.com/maps/place/The+Investor's+Edge/@40.1352276,-116.8235437,4z/data=!4m12!1m2!2m1!1sinvestors+edge+google+reviews!3m8!1s0x87528a7e4c0d9a2f:0x2780611107aaf7cc!8m2!3d40.5903343!4d-111.9405222!9m1!1b1!15sCh1pbnZlc3RvcnMgZWRnZSBnb29nbGUgcmV2aWV3cyIFOAGIAQFaECIOaW52ZXN0b3JzIGVkZ2WSARNwcm9wZXJ0eV9pbnZlc3RtZW50mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5UVVJuZFY5RWN6TjNSUkFC4AEA-gEFCKcBEEY!16s%2Fg%2F1tdc13cl?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        class="crs-hmfq__rating-top"
      >
        <img src="${w}google-logo.webp" alt="Google" />
        <span class="crs-hmfq__stars">${y.star.repeat(5)}</span>
        <b>4.8</b>
      </a>
      <span class="crs-hmfq__rating-count"><b>1,000+</b> Google reviews</span>
    </div>
    <img src="${w}a-rating-1.webp" alt="BBB A Rating" class="crs-hmfq__rating-bbb" />
    <div class="crs-hmfq__rating-years">
      <b>15+</b><span>Years<br />in<br />business</span>
    </div>
  </div>
`
  ), U = (
    /* HTML */
    `
  <div class="crs-hmfq">
    <div class="crs-hmfq__header">
      <a href="/"><img src="${w}logo.svg" alt="The Investor's Edge" /></a>
    </div>
    <div class="crs-hmfq__top">
      <div class="crs-hmfq__wrap">For flippers seeking no-money-down financing to acquire a property</div>
    </div>
    <div class="crs-hmfq__main crs-hmfq__wrap">
      <h1 class="crs-hmfq__title">
        <span class="crs-hmfq__desk">Are You Looking for 100% Hard Money Financing?</span>
        <span class="crs-hmfq__mob">Are You Looking For Up To 100% Financing?</span>
      </h1>
      <p class="crs-hmfq__sub">Even if you dont have real estate investing experience or first property in mind</p>
      <div class="crs-hmfq__buttons">
        <button class="crs-hmfq__yes" type="button">YES — Check If I Qualify</button>
        <button class="crs-hmfq__no" type="button">No, I don’t need financing</button>
      </div>
      ${j}
    </div>
  </div>
`
  ), Y = (t, e, n, s) => {
    const a = n ? n.map(
      (c, i) => (
        /* HTML */
        `
            <label class="crs_quiz_answer_radio_label">
              <input type="radio" value="${i}" name="step${t}" />
              <div><span></span>${c.label}</div>
            </label>
          `
      )
    ).join("") : Z;
    return (
      /* HTML */
      `
    <div class="crs_quiz_step" data-step="${t}">
      <h3>${e}</h3>
      ${s ? `<p class="crs_quiz_step_description">${s}</p>` : ""}
      <div class="crs_quiz_answers">${a}</div>
    </div>
  `
    );
  }, Z = (
    /* HTML */
    `
  <label class="crs_quiz_answer_input_label">
    <span>First Name *</span>
    <input type="text" name="crs_name" placeholder="First name" autocomplete="given-name" />
  </label>
  <label class="crs_quiz_answer_input_label">
    <span>Last Name *</span>
    <input type="text" name="crs_last_name" placeholder="Last name" autocomplete="family-name" />
  </label>
  <div class="crs_phone_verify_block">
    <div class="crs_phone_base">
      <label class="crs_quiz_answer_input_label crs_phone_field_label">
        <span>Phone number *</span>
        <div class="crs_phone_input_wrap">
          <input type="tel" name="crs_phone" placeholder="Phone number" autocomplete="tel" />
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
        ${'<input class="crs_otp_digit" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]*" />'.repeat(4)}
        <div class="crs_otp_timer_box"><span class="crs_timer_text">01:00</span></div>
        <div class="crs_phone_verified_box" style="display:none">${y.check}<span>Phone verified</span></div>
      </div>
      <div class="crs_resend_row">
        ${y.resend}
        <button class="crs_resend_code_btn" type="button">Resend verification code</button>
      </div>
    </div>
  </div>
  <label class="crs_quiz_answer_input_label">
    <span>Email *</span>
    <input type="email" name="crs_email" placeholder="Email" autocomplete="email" />
  </label>
  <label class="crs_quiz_answer_select_label">
    <span>State you want to invest in *</span>
    <select name="crs_state">
      <option value="" disabled selected>Select state</option>
      ${V.map((t) => `<option value="${t}">${t}</option>`).join("")}
    </select>
    ${y.down}
  </label>
  <label class="crs_quiz_answer_checkbox_label">
    <div class="crs_checkbox_row">
      <input type="checkbox" name="crs_consent" />
      <span class="crs_checkbox_box"></span>
      <span class="crs_checkbox_text"
        >By checking this box, I agree that The Investor's Edge and its agents may contact me at the phone number and
        email address provided above with marketing calls, texts, and emails, including through the use of an
        autodialer, prerecorded messages, or AI-generated voice messages. Calls may be recorded for quality assurance
        and training purposes. Consent is not a condition of purchase. Msg &amp; data rates may apply. Msg frequency
        varies. Reply STOP to opt out of texts/calls or unsubscribe from emails at any time. See our
        <a href="https://www.theinvestorsedge.com/terms-of-use/privacy-policy" target="_blank" rel="noopener"
          >Privacy Policy</a
        >
        and <a href="https://www.theinvestorsedge.com/terms-of-use" target="_blank" rel="noopener">Terms</a>.</span
      >
    </div>
  </label>
`
  ), Q = (t) => (
    /* HTML */
    `
  <div class="crs_quiz_step crs_quiz_step--warning">
    <h3>
      ${t === "Other" ? "We do not fund commercial, personal loans, or equipment, as they carry a higher risk than 1–4 residential properties." : `We do not fund ${t}, as they typically offer lower ROI and carry higher risk than secondary-market residential properties.`}
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
      <button class="crs_warning_yes" type="button">Yes</button>
      <button class="crs_warning_no" type="button">No</button>
    </div>
  </div>
`
  ), S = (t = !1) => (
    /* HTML */
    `
  <div class="crs_quiz_step crs_quiz_step--warning">
    <h3>To move forward with financing, you'll need to invest at least $6,000 of your own funds</h3>
    ${t ? (
      /* HTML */
      `
          <p class="crs_warning_desc">We'd be happy to hear from you if your situation changes.</p>
          <div class="crs_warning_buttons">
            <button class="crs_warning_yes crs_cash_warning_home" type="button">Go to main page</button>
          </div>
        `
    ) : (
      /* HTML */
      `
          <p class="crs_warning_desc">Please confirm that you're willing to make this investment to proceed.</p>
          <div class="crs_warning_buttons crs_warning_buttons--cash">
            <button class="crs_warning_yes crs_cash_warning_yes" type="button">Yes</button>
            <button class="crs_warning_no crs_cash_warning_no" type="button">No</button>
          </div>
        `
    )}
  </div>
`
  );
  O({ name: "100 HMF Quiz", dev: "YK" }), R("exp_100_hmf_quiz");
  const C = "/100-hard-money-financing", E = "/apply-now", G = "23711988", J = "a705412b-6ee7-4a13-b3ea-5f895603c9c7", K = 1, X = "Residential property (1-4 units)", ee = 4, L = "$1,000 to $4,999", ne = 1, f = [
    {
      question: "Do you have a property in mind?",
      description: "Clients who start without a property and follow our selection process are 131% more likely to get funded",
      answers: [
        { label: "I have one under contract.", value: "I have one under contract" },
        {
          label: "I have one I am looking at not under contract.",
          value: "I'm eyeing a property (not under contract)"
        },
        { label: "I am looking for a deal.", value: "I'm looking for the right deal (Most funded)" },
        { label: "I want to learn how to find the deal.", value: "I want to learn how to find deals" }
      ],
      relation: "property_in_mind_new_design"
    },
    {
      question: "What property type are you looking to finance?",
      answers: [
        "Residential property (1-4 units)",
        "Residential 5+ units",
        "Commercial property",
        "Personal loans",
        "Equipment loans",
        "New Construction (Ground Up Build)",
        "Other"
      ].map((t) => ({ label: t, value: t })),
      relation: "what_property_type_are_you_looking__to_finance__new"
    },
    {
      question: "Have you done a fix & flip deal before?",
      answers: [
        { label: "No, this will be my first (Most funded)", value: "No, this will be my first" },
        ...["I’ve flipped 1–2 properties", "I’ve flipped 3–6 properties", "I’ve flipped 7+ properties"].map(
          (t) => ({ label: t, value: t })
        )
      ],
      relation: "have_you_done_a_fix__flip_deal_before"
    },
    {
      question: "If everything went well, what profit range would you ideally target?",
      answers: ["Under $25,000", "$25,000–$50,000", "$50,000–$100,000", "$100,000+"].map((t) => ({
        label: t,
        value: t
      }))
    },
    {
      question: "How much cash do you currently have available for a deal?",
      answers: [
        { label: "$1,000 to $5,999", value: L },
        { label: "$6,000 to $9,999", value: "$5,000 to $9,999" },
        { label: "$10,000 to $19,999", value: "$10,000 to $19,999" },
        { label: "$20,000 or more", value: "$20,000 or more" }
      ],
      relation: "how_much_cash_do_you_currently_have_available_for_a_deal"
    },
    {
      question: "Fill out the application for a free <br/>pre-qualification consultation for 100% financing"
    }
  ], b = f.length - 1, $ = (t) => {
    if (document.documentElement) return t(document.documentElement);
    const e = new MutationObserver(() => {
      document.documentElement && (e.disconnect(), t(document.documentElement));
    });
    e.observe(document, { childList: !0 });
  }, P = () => $((t) => {
    t.querySelector(".crs-hmfq-style") || t.insertAdjacentHTML("afterbegin", `<style class="crs-hmfq-style">${H}</style>`);
  }), q = (t) => {
    const e = t.replace(/\D/g, "");
    return e.length === 10 ? `+1${e}` : e.length === 11 && e[0] === "1" ? `+${e}` : null;
  }, u = (t, e = "This field is required.", n = "") => {
    const s = t.closest("label") || t;
    s.querySelector(".crs_input_error") || s.insertAdjacentHTML("beforeend", `<p class="crs_input_error ${n}">${e}</p>`);
  };
  class te {
    constructor() {
      $((e) => e.classList.add("crs-hmfq-on")), P(), this.init();
    }
    async init() {
      var e, n;
      await k("body"), !document.querySelector(".crs-hmfq") && (document.body.insertAdjacentHTML("afterbegin", U), (e = document.querySelector(".crs-hmfq__yes")) == null || e.addEventListener("click", () => {
        _("exp_hmf_quiz_start_yes", "YES — Check If I Qualify", "click", "HMF start block"), window.location.href = E + window.location.search;
      }), (n = document.querySelector(".crs-hmfq__no")) == null || n.addEventListener("click", () => {
        _("exp_hmf_quiz_start_no", "No, I don’t need financing", "click", "HMF start block"), window.location.href = "/";
      }), D(".crs-hmfq__buttons", "exp_hmf_quiz_start_view", "HMF start block", "Quiz start block"));
    }
  }
  class se {
    constructor() {
      this.step = 0, this.answers = [], this.showingWarning = !1, this.phoneVerified = !1, this.verifiedPhone = "", this.phoneTimerInterval = null, this.cameFromHmf = document.referrer.includes(C), P(), this.init();
    }
    async init() {
      await k(".crs_quiz_container .crs_quiz_step");
      const e = document.querySelector(".crs_quiz_container");
      if (e.dataset.crs) return;
      const n = e.cloneNode(!0);
      n.dataset.crs = "hmf-quiz", e.replaceWith(n), this.container = n, this.stepContainer = n.querySelector(".crs_quiz_step_container"), this.continueBtn = n.querySelector('.crs_quiz_steps button:not([class*="crs_"])'), this.backBtn = n.querySelector(".crs_quiz_logo svg"), this.continueBtn.disabled = !1, this.continueBtn.addEventListener("click", () => this.onContinue()), this.backBtn.addEventListener("click", () => this.onBack()), this.setStep(0);
    }
    get errorEl() {
      return this.container.querySelector(".crs_error");
    }
    resetView() {
      this.showingWarning = !1, this.continueBtn.style.display = "";
    }
    onBack() {
      if (this.showingWarning) {
        this.resetView(), this.setStep(this.step);
        return;
      }
      if (this.step === 0) {
        this.cameFromHmf && (_("exp_hmf_quiz_back_to_hmf", "Back to HMF page", "click", "quiz_step_1"), history.back());
        return;
      }
      this.setStep(this.step - 1);
    }
    onContinue() {
      if (this.step === b) {
        this.submit();
        return;
      }
      this.errorEl.classList.remove("active");
      const e = this.stepContainer.querySelector('input[type="radio"]:checked');
      if (!e) {
        this.errorEl.classList.add("active");
        return;
      }
      const n = Number(e.value), s = f[this.step].answers[n];
      if (this.answers[this.step] = n, this.step === K && s.value !== X) {
        this.showPropertyWarning(s.value);
        return;
      }
      if (this.step === ee && s.value === L) {
        this.showCashWarning();
        return;
      }
      _(`exp_hmf_quiz_step_${this.step + 1}`, s.label, "success", `quiz_step_${this.step + 1}`), this.setStep(this.step + 1);
    }
    showWarning(e) {
      this.showingWarning = !0, this.continueBtn.style.display = "none", this.stepContainer.innerHTML = e;
    }
    showPropertyWarning(e) {
      this.showWarning(Q(e)), _("exp_hmf_quiz_warning_property", `Property type warning: ${e}`, "view", "quiz_step_2"), this.stepContainer.querySelector(".crs_warning_yes").addEventListener("click", () => {
        _("exp_hmf_quiz_warning_property_yes", "Property warning - Yes", "click", "quiz_step_2"), this.answers[this.step] = 0, this.resetView(), this.setStep(this.step + 1);
      }), this.stepContainer.querySelector(".crs_warning_no").addEventListener("click", () => {
        _("exp_hmf_quiz_warning_property_no", "Property warning - No", "click", "quiz_step_2"), this.resetView(), this.setStep(this.step);
      });
    }
    showCashWarning() {
      this.showWarning(S()), _("exp_hmf_quiz_warning_cash", "Cash warning shown", "view", "quiz_step_5"), this.stepContainer.querySelector(".crs_cash_warning_yes").addEventListener("click", () => {
        _("exp_hmf_quiz_warning_cash_yes", "Cash warning - Yes", "click", "quiz_step_5"), this.answers[this.step] = ne, this.resetView(), this.setStep(this.step + 1);
      }), this.stepContainer.querySelector(".crs_cash_warning_no").addEventListener("click", () => {
        _("exp_hmf_quiz_warning_cash_no", "Cash warning - No", "click", "quiz_step_5"), this.stepContainer.innerHTML = S(!0), this.stepContainer.querySelector(".crs_cash_warning_home").addEventListener("click", () => {
          window.location.href = "/";
        });
      });
    }
    setStep(e) {
      if (e < 0) return;
      this.step = e;
      const { question: n, answers: s, description: a } = f[e];
      this.errorEl.classList.remove("active"), this.stepContainer.innerHTML = Y(e + 1, n, s, a), this.backBtn.classList.toggle("active", e > 0 || this.cameFromHmf), this.continueBtn.textContent = e === b ? "Apply now" : "Continue", this.container.querySelector(".crs_quiz_progress_bar").style.width = `${(e + 1) / f.length * 100}%`, window.scrollTo(0, 0);
      const c = this.answers[e];
      if (c !== void 0) {
        const i = this.stepContainer.querySelector(`input[value="${c}"]`);
        i && (i.checked = !0);
      }
      e === b && this.setupForm();
    }
    setupForm() {
      const e = this.stepContainer;
      e.querySelectorAll(".crs_quiz_answer_input_label input").forEach((n) => {
        let s = !1;
        n.addEventListener("input", () => {
          var a, c;
          (c = (a = n.closest("label")) == null ? void 0 : a.querySelector(".crs_input_error")) == null || c.remove(), !s && (s = !0, _(`exp_hmf_quiz_form_${n.name}`, `Form field: ${n.name}`, "input", "quiz_form"));
        });
      }), e.querySelectorAll('select, input[type="checkbox"]').forEach((n) => {
        n.addEventListener("change", () => {
          var s, a;
          return (a = (s = n.closest("label")) == null ? void 0 : s.querySelector(".crs_input_error")) == null ? void 0 : a.remove();
        });
      }), this.setupPhone();
    }
    setupPhone() {
      const e = this.stepContainer.querySelector(".crs_phone_verify_block"), n = e.querySelector(".crs_phone_base"), s = e.querySelector('input[name="crs_phone"]'), a = e.querySelector(".crs_phone_field_label"), c = e.querySelector(".crs_send_code_btn"), i = e.querySelector(".crs_phone_otp"), h = e.querySelector(".crs_otp_phone_num"), o = Array.from(e.querySelectorAll(".crs_otp_digit")), T = e.querySelector(".crs_otp_timer_box"), re = e.querySelector(".crs_timer_text"), B = e.querySelector(".crs_phone_verified_box"), M = e.querySelector(".crs_resend_row"), v = () => {
        this.phoneTimerInterval && clearInterval(this.phoneTimerInterval), this.phoneTimerInterval = null;
      }, ie = (r = 60) => {
        v();
        let l = r;
        const p = () => {
          re.textContent = `${String(Math.floor(l / 60)).padStart(2, "0")}:${String(l % 60).padStart(2, "0")}`;
        };
        p(), this.phoneTimerInterval = setInterval(() => {
          l--, p(), l <= 0 && v();
        }, 1e3);
      }, A = (r) => {
        n.style.display = "none", i.style.display = "flex", h.textContent = r, T.style.display = "none", B.style.display = "flex", M.style.display = "none", o.forEach((l) => l.disabled = !0);
      }, N = () => {
        o.forEach((r) => r.classList.add("crs_digit_error")), o[0].focus();
      }, F = async () => {
        var p, d;
        const r = q(s.value), l = o.map((m) => m.value).join("");
        if (!(!r || l.length < 4))
          try {
            const g = await (await fetch("https://app.theinvestorsedge.com/phone/verify/check", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ phoneNumber: r, code: l })
            })).json();
            g.success && ((p = g.verificationCheck) == null ? void 0 : p.status) === "approved" ? (this.phoneVerified = !0, this.verifiedPhone = r, v(), A(r), (d = e.querySelector(".crs_phone_verify_error")) == null || d.remove(), _("exp_hmf_quiz_form_phone_verified", "Phone verified", "success", "quiz_form")) : (N(), _("exp_hmf_quiz_form_phone_verify_failed", "Phone verification failed", "error", "quiz_form"));
          } catch {
            N();
          }
      }, W = async (r) => {
        var l;
        c.disabled = !0, c.textContent = "...", (l = e.querySelector(".crs_phone_verify_error")) == null || l.remove();
        try {
          const d = await (await fetch("https://app.theinvestorsedge.com/phone/verify/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phoneNumber: r })
          })).json();
          d.success ? (h.textContent = r, i.style.display = "flex", n.style.display = "none", T.style.display = "flex", B.style.display = "none", o.forEach((m) => {
            m.value = "", m.classList.remove("crs_digit_error");
          }), ie(), o[0].focus()) : u(a, d.message || "Failed to send code. Please try again.", "crs_phone_verify_error");
        } catch {
          u(a, "Network error. Please try again.", "crs_phone_verify_error");
        } finally {
          c.disabled = !1, c.textContent = "Send code";
        }
      };
      this.phoneVerified && (s.value = this.verifiedPhone, A(this.verifiedPhone)), c.addEventListener("click", () => {
        var l;
        (l = e.querySelector(".crs_phone_verify_error")) == null || l.remove(), _("exp_hmf_quiz_form_phone_send", "Send code", "click", "quiz_form");
        const r = q(s.value);
        if (!r) {
          u(a, "Please enter a valid US phone number", "crs_phone_verify_error");
          return;
        }
        W(r);
      }), o.forEach((r, l) => {
        r.addEventListener("input", () => {
          r.classList.remove("crs_digit_error"), r.value = r.value.replace(/\D/g, "").slice(0, 1), r.value && l < o.length - 1 && o[l + 1].focus(), F();
        }), r.addEventListener("keydown", (p) => {
          p.key === "Backspace" && !r.value && l > 0 && o[l - 1].focus();
        }), r.addEventListener("paste", (p) => {
          var m, g;
          p.preventDefault();
          const d = (((m = p.clipboardData) == null ? void 0 : m.getData("text")) || "").replace(/\D/g, "").slice(0, 4);
          d.split("").forEach((x, oe) => o[oe].value = x), o.forEach((x) => x.classList.remove("crs_digit_error")), d.length === 4 ? F() : (g = o[d.length]) == null || g.focus();
        });
      }), e.querySelector(".crs_resend_code_btn").addEventListener("click", () => {
        const r = q(s.value);
        r && W(r);
      }), e.querySelector(".crs_change_phone_btn").addEventListener("click", () => {
        this.phoneVerified = !1, this.verifiedPhone = "", v(), i.style.display = "none", n.style.display = "block", M.style.display = "", o.forEach((r) => {
          r.disabled = !1, r.value = "";
        }), s.value = "", s.focus();
      });
    }
    validate() {
      const e = this.stepContainer;
      let n = !0;
      e.querySelectorAll(".crs_quiz_answer_input_label input").forEach((i) => {
        i.closest(".crs_phone_verify_block") || i.value.trim() || (n = !1, u(i));
      });
      const s = e.querySelector('input[name="crs_email"]');
      s.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.value.trim()) && (n = !1, u(s, "Please enter a valid email address.")), this.phoneVerified || (n = !1, u(
        e.querySelector(".crs_phone_verify_block"),
        "Please verify your phone number",
        "crs_phone_verify_error"
      ));
      const a = e.querySelector('select[name="crs_state"]');
      a.value || (n = !1, u(a));
      const c = e.querySelector('input[name="crs_consent"]');
      return c.checked || (n = !1, u(c, "Please check this box to continue.")), n;
    }
    async submit() {
      var c;
      if ((c = this.stepContainer.querySelector(".crs_quiz_answer_submit_error")) == null || c.remove(), !this.validate()) {
        _("exp_hmf_quiz_form_invalid", "Form validation failed", "error", "quiz_form");
        return;
      }
      const e = this.stepContainer, n = (i) => e.querySelector(i).value.trim(), s = {
        firstname: n('input[name="crs_name"]'),
        lastname: n('input[name="crs_last_name"]'),
        email: n('input[name="crs_email"]'),
        mobilephone: this.verifiedPhone,
        your_state__united_states__: n('select[name="crs_state"]'),
        tcpa_consent: "true"
      };
      f.forEach((i, h) => {
        const o = this.answers[h];
        i.relation && o !== void 0 && (s[i.relation] = i.answers[o].value);
      });
      const a = new URLSearchParams(window.location.search).get("msclkid");
      a && (s.msclkid = a), this.continueBtn.disabled = !0, this.continueBtn.textContent = "Submitting...";
      try {
        const i = await fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/${G}/${J}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fields: Object.entries(s).map(([h, o]) => ({ name: h, value: o })),
              context: {
                pageUri: window.location.href,
                pageName: document.title,
                ...this.hutk() && { hutk: this.hutk() }
              }
            })
          }
        );
        if (!i.ok) throw new Error(String(i.status));
        window.dataLayer = window.dataLayer || [], window.dataLayer.push({
          event: "event-to-ga4",
          event_name: "quiz_apply_now_submit",
          event_desc: "Successful Apply Now quiz submission",
          event_type: "submit",
          event_loc: "apply_now_quiz",
          crs_email: s.email
        }), _("exp_hmf_quiz_complete", "Complete Quiz", "success", "quiz_complete"), window.location.href = "/confirmed-hard-money-financing";
      } catch {
        this.continueBtn.disabled = !1, this.continueBtn.textContent = "Apply now", this.stepContainer.insertAdjacentHTML(
          "beforeend",
          '<p class="crs_input_error crs_quiz_answer_submit_error">Something went wrong. Please try again.</p>'
        ), _("exp_hmf_quiz_submit_error", "Submit error", "error", "quiz_form");
      }
    }
    // HubSpot tracking cookie ties the submission to the visitor's session
    hutk() {
      var e;
      return ((e = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/)) == null ? void 0 : e[1]) || "";
    }
  }
  const I = window.location.pathname.replace(/\/+$/, "");
  I === C ? new te() : I === E && new se();
})();
//# sourceMappingURL=index.js.map
