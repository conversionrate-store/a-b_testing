var q = function() {
  "use strict";
  const m = (a, n, t, e = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: n,
      event_type: t,
      event_loc: e
    }), console.log(`Event: ${a} | ${n} | ${t} | ${e}`);
  }, x = ({ name: a, dev: n }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, f = (a) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", a, "variant_1"));
    }, 1e3);
  };
  async function w(a, n = "GET", t = null) {
    try {
      const e = {
        method: n,
        headers: {
          "Content-Type": "application/json"
        }
      };
      t && (e.body = JSON.stringify(t));
      const i = await fetch(a, e);
      if (!i.ok)
        throw new Error(`HTTP error! status: ${i.status}`);
      return { data: await i.json(), error: null };
    } catch (e) {
      return console.error("Fetch error:", e), { data: null, error: e };
    }
  }
  const y = async () => await w(
    "https://api.ipgeolocation.io/ipgeo?apiKey=c29806a96e67474aa371681f82156268"
  ), p = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="22"
  fill="none"
>
  <path
    fill="#4A4A4A"
    stroke="#4A4A4A"
    stroke-width=".2"
    d="M10.083 1c-4.009 0-7.27 3.262-7.27 7.27 0 1.248.407 2.633 1.015 4.008.61 1.378 1.423 2.753 2.244 3.982a43.738 43.738 0 0 0 3.457 4.493c.296.33.813.33 1.11 0a43.72 43.72 0 0 0 3.456-4.493c.82-1.229 1.635-2.604 2.244-3.982.608-1.375 1.015-2.76 1.015-4.007 0-4.01-3.261-7.27-7.27-7.27Zm3.664 13.018c-1.168 1.953-2.593 3.813-3.664 5.092-1.07-1.279-2.495-3.138-3.663-5.092-1.2-2.006-2.116-4.093-2.116-5.747a5.786 5.786 0 0 1 5.78-5.78 5.786 5.786 0 0 1 5.779 5.78c0 1.654-.917 3.741-2.116 5.746Z"
  />
  <path
    fill="#4A4A4A"
    stroke="#4A4A4A"
    stroke-width=".2"
    d="M10.084 4.563A3.715 3.715 0 0 0 6.37 8.271a3.715 3.715 0 0 0 7.427 0 3.715 3.715 0 0 0-3.713-3.708Zm0 5.924a2.221 2.221 0 0 1-2.22-2.216 2.221 2.221 0 0 1 4.44 0 2.221 2.221 0 0 1-2.22 2.216Z"
  />
</svg>`
  ), v = `#estimate-map h4 {
  margin-bottom: 32px !important;
}

@media (max-width: 768px) {
  #estimate-map h4 {
    margin-bottom: 16px !important;
  }
}
#estimate-map .small-container {
  position: relative;
  max-width: 620px !important;
}

#estimate-map .small-container .error-msg {
  position: absolute;
}

[data-current-slide='3'] #next-block .nextSlide,
#estimate-map #autoaddress {
  width: 620px !important;
  max-width: 100% !important;
}

[data-current-slide='3'] :has(#autoaddress.input-error) #next-block {
  padding-top: 40px !important;
}
@media (max-width: 768px) {
  #estimate-map .small-container:has(#autoaddress.input-error) {
    margin-bottom: 40px !important;
  }
}
#estimate-map #autoaddress {
  padding-right: 130px;
  border-radius: 100px;
 }

@media (max-width: 768px) {
  #estimate-map #autoaddress {
    padding-right: 115px;
    padding-left: 16px;
    border-radius: 5px;
  }
}

#estimate-map #autoaddress::placeholder {
  color: #757575;
  font-family: 'Noto Sans SC';
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
}

@media (max-width: 768px) {
  #estimate-map #autoaddress::placeholder {
    font-size: 16px;
    line-height: 20px;
  }
}
`;
  class b {
    constructor() {
      this.addressSlide = document.getElementById("estimate-map"), this.init();
    }
    init() {
      this.addStyles(), this.changeSubTitle(), this.addLocationToInput(), this.changePlaceholderOfInput();
    }
    changeSubTitle() {
      var e;
      const n = (
        /* HTML */
        `This info is necessary to determine your <br class="mobile" />
        household's
        <br class="desktop" />
        eligibility for solar incentives`
      ), t = (e = this.addressSlide) == null ? void 0 : e.querySelectorAll(".sub-title");
      t && t.forEach((i) => {
        i.innerHTML = n;
      });
    }
    addLocationToInput() {
      var e;
      const n = (
        /* HTML */
        `<div
      class="current-location"
      id="current-location-address"
    >
      <span class="icon">${p}</span>
      <span class="text">New York</span>
    </div> `
      ), t = (e = this.addressSlide) == null ? void 0 : e.querySelector("#autoaddress");
      t && t.insertAdjacentHTML("afterend", n);
    }
    changePlaceholderOfInput() {
      var t;
      const n = (t = this.addressSlide) == null ? void 0 : t.querySelector("#autoaddress");
      n && n.setAttribute("placeholder", "Type your address here");
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = v, document.head.appendChild(n);
    }
  }
  const S = `#estimate-email :is(h1, h2, h4) {
  display: none;
}

.os-note {
  width: 551px;
  max-width: 100%;
  margin: 0 auto;
  padding: 16px 46px;
  border-top: 1px solid var(--stroke-2, rgba(247, 249, 251, 0));
  border-bottom: 1px solid var(--stroke-2, rgba(247, 249, 251, 0));
  background: var(
    --fill2,
    linear-gradient(
      90deg,
      rgba(242, 245, 248, 0) 6.35%,
      #e0ffcf 25.38%,
      #e0ffcf 41.4%,
      #e9ffde 49.92%,
      #e0ffcf 57.93%,
      #e0ffcf 75.96%,
      rgba(242, 245, 248, 0) 93.99%
    )
  );
}

.os-note__top {
  color: #4a4a4a;
  text-align: center;

  font-family: 'Noto Sans SC';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}

.os-note__bottom {
  margin-top: 15.5px;
  color: #4a4a4a;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
}

.os-note__bottom .highlight {
  color: #00c105;
  font-weight: 700;
}

@media (max-width: 768px) {
  .os-note {
    padding: 16px 10px;
  }

  .os-note > div {
    display: inline;
  }

  .os-note__top,
  .os-note__bottom {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
  }
}
#estimate-email .os-title {
  margin-top: 32px;
  color: #4a4a4a;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: 56px; /* 127.273% */
}

@media (max-width: 768px) {
  #estimate-email .os-title {
    margin-top: 24px;
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
  }
}

#estimate-email .os-subtitle {
  margin-top: 12px;
  color: #4a4a4a;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 20px;
  font-weight: 500;
  line-height: 24px; /* 120% */
}

@media (max-width: 768px) {
  #estimate-email .os-subtitle {
    margin-top: 16px;
    font-size: 16px;
    line-height: 24px;
  }
}
#estimate-email .small-container {
  margin-top: 32px;
  max-width: 620px !important;
}

@media (max-width: 768px) {
  #estimate-email .small-container {
    margin-top: 18px;
  }
}
[data-current-slide='5'] #next-block .nextSlide,
#estimate-map #email {
  width: 620px !important;
  max-width: 100% !important;
}

#estimate-email #email {
  border-radius: 100px;
}

@media (max-width: 768px) {
  #estimate-email #email {
    padding: 16px;
    border-radius: 5px;
  }
}
`;
  class z {
    constructor() {
      this.emailSlide = document.getElementById("estimate-email"), this.init();
    }
    init() {
      this.addStyles(), this.addNewTitle(), this.addSubTitle(), this.addCongratsMessage();
    }
    addNewTitle() {
      var e;
      const n = (
        /* HTML */
        '<div class="os-title">Provide your Email</div>'
      ), t = (e = this.emailSlide) == null ? void 0 : e.querySelector(".container h2");
      t && t.insertAdjacentHTML("afterend", n);
    }
    addSubTitle() {
      var e;
      const n = (
        /* HTML */
        `<div class="os-subtitle">
      To get all participation details
    </div>`
      ), t = (e = this.emailSlide) == null ? void 0 : e.querySelector(
        ".container .small-container"
      );
      t && t.insertAdjacentHTML("beforebegin", n);
    }
    addCongratsMessage() {
      var e;
      const n = (
        /* HTML */
        `<div class="os-note">
      <div class="os-note__top">✅ Congrats!</div>
      <div class="os-note__bottom">
        Your household <br class="mobile" />
        <span class="highlight">may qualify for 2 </span> out of
        <span data-incentives-count>6</span> incentives
      </div>
    </div>`
      ), t = (e = this.emailSlide) == null ? void 0 : e.querySelector(".container h4");
      t && t.insertAdjacentHTML("afterend", n);
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = S, document.head.appendChild(n);
    }
  }
  const T = `#estimate-name .form-list {
  max-width: 620px;
}`;
  class A {
    constructor() {
      this.nameSlide = document.getElementById("estimate-name"), this.init();
    }
    init() {
      this.addStyles(), this.changeTitles();
    }
    changeTitles() {
      var t;
      const n = (t = this.nameSlide) == null ? void 0 : t.querySelectorAll(".container .title");
      n && n.forEach((e) => {
        e.innerHTML = /* HTML */
        '<div class="os-title">What is your name?</div>';
      });
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = T, document.head.appendChild(n);
    }
  }
  const E = `#estimate-zip :is(h1, h4, h5) {
  display: none;
}

@media (max-width: 768px) {
  #estimate-zip .container {
    padding-inline: 16px !important;
  }
}

#estimate-zip .available-incentives {
  color: #4a4a4a;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}

@media (max-width: 768px) {
  #estimate-zip .available-incentives {
    position: relative;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    background: var(
      --df,
      linear-gradient(
        90deg,
        rgba(242, 245, 248, 0) 6.35%,
        #e0ffcf 19.87%,
        #e0ffcf 41.4%,
        #e9ffde 49.92%,
        #e0ffcf 57.93%,
        #e0ffcf 79.97%,
        rgba(242, 245, 248, 0) 93.99%
      )
    );
  }

  #estimate-zip .available-incentives::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    border-bottom: 1px dashed rgb(131, 190, 99);

    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 0) 100%
    );
    -webkit-mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 0) 100%
    );
  }
}

#estimate-zip .available-incentives span {
  color: #00c105;
  font-weight: 700;
}

#estimate-zip .os-title {
  margin-top: 32px;
  color: #4a4a4a;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: 56px;
  text-wrap: balance;
}

@media (max-width: 768px) {
  #estimate-zip .os-title {
    margin-top: 36px;
    font-size: 27px;
    line-height: 32px;
    font-weight: 700;
  }
}
#estimate-zip .homeowner-save {
  margin-top: 42px;
  color: #4a4a4a;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 18px;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
}

@media (max-width: 768px) {
  #estimate-zip .homeowner-save {
    margin-top: 16px;
    font-size: 14px;
    line-height: 22px;
  }
}

#estimate-zip .homeowner-save .highlight {
  color: #00c105;
}

#estimate-zip .form-list {
  margin: 0;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  max-width: 620px;
}

@media (max-width: 768px) {
  #estimate-zip .form-list {
    margin-top: 44px;
    flex-direction: column;
  }
}

#estimate-zip li {
  flex: 1;
  width: auto !important;
  margin: 0 !important;
}
#estimate-zip li:has(#zip),
#estimate-zip li:first-child {
  position: relative;
}

#estimate-zip #zip {
  max-width: 300px;
  width: 100%;
  color: #4a4a4a;
  font-family: 'Noto Sans SC';
  font-size: 20px;
  font-weight: 700;
  border-radius: 100px;
}


@media (max-width: 768px) {
  #estimate-zip #zip {
    max-width: 100%;
    border-radius: 5px;
    padding: 16px;
  }

  #estimate-zip li:has(.input-error) {
    margin-bottom: 15px !important;
  }
}

#estimate-zip #zip::placeholder {
  font-size: 20px;
  font-weight: 500;
}

@media (max-width: 768px) {
  #estimate-zip #zip::placeholder {
    font-size: 16px;
    line-height: 20px;
  }
}

#estimate-zip .error-msg {
  position: absolute;
}

#calculateYourSavings {
  max-width: 304px;
  width: 100%;
}

@media (max-width: 768px) {
  #calculateYourSavings {
    max-width: 100%;
    border-radius: 5px;
  }
}
`;
  class L {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.addAvailableIncentivesMassage(), this.addHomeownerSaveMassage(), this.addNewTitle(), this.addLocationToInput(), this.changeCopyOfButton();
    }
    addNewTitle() {
      const n = (
        /* HTML */
        `<div class="os-title">
      Learn if you're eligible <br />
      by entering your ZIP code
    </div>`
      ), t = document.querySelector("#estimate-zip .container h1");
      t && t.insertAdjacentHTML("afterend", n);
    }
    addAvailableIncentivesMassage() {
      const n = (
        /* HTML */
        ` <div class="available-incentives">
      ✅ <span data-incentives-count>6</span> Government Incentives Available in
      <span id="os-region">New York</span>
    </div>`
      ), t = document.querySelector("#estimate-zip .container");
      t && t.insertAdjacentHTML("afterbegin", n);
    }
    addHomeownerSaveMassage() {
      const n = (
        /* HTML */
        `<div class="homeowner-save">
      *<span data-region-homeowner>NY</span> homeowner may save up to
      <span class="highlight">$13K</span> on a solar
      <br class="mobile" />
      system <br class="desktop" />
      with government incentives
    </div>`
      ), t = document.querySelector("#estimate-zip .container");
      t && t.insertAdjacentHTML("beforeend", n);
    }
    addLocationToInput() {
      const n = (
        /* HTML */
        `<div
      class="current-location"
      id="current-location-zip"
    >
      <span class="icon">${p}</span>
      <span class="text">New York</span>
    </div> `
      ), t = document.querySelector("#estimate-zip #zip");
      t && t.insertAdjacentHTML("afterend", n);
    }
    changeCopyOfButton() {
      const n = document.querySelector(
        "#calculateYourSavings"
      );
      n && (n.innerHTML = "Check now");
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = E, document.head.appendChild(n);
    }
  }
  const C = `@media (max-width: 768px) {
  [data-current-slide="1"] .wrapper {
    padding-top: 115px;
    padding-bottom: 50px;
  }
}


.os-title {
  color: #4a4a4a;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 44px;
  font-weight: 500;
  line-height: 56px;
}

@media (max-width: 768px) {
  .os-title {
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
  }
}

.estimate-custom-bill .custom-radio {
  margin-top: 32px !important;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 16px;
  max-width: 620px;
}

@media (max-width: 768px) {
  .estimate-custom-bill .custom-radio {
    grid-template-columns: 1fr;
  }
}
.estimate-custom-bill .custom-radio-item {
  margin: 0 !important;
  width: 100% !important;
  max-width: 302px !important;
  border-radius: 100px !important;
}

@media (max-width: 768px) {
  .estimate-custom-bill .custom-radio-item {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    height: 58px;
    border-radius: 5px !important;
    max-width: 100% !important;
  }
}

.estimate-custom-bill .custom-radio-item:last-child {
  grid-column: 1 / -1;
}

.os-subnote {
  margin-top: 32px;
  color: #4a4a4a;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .os-subnote {
    margin-top: 16px;
    padding-inline: 16px;
    font-size: 14px;
    line-height: 22px;
  }
}`;
  class N {
    constructor({ container: n, position: t }) {
      this.position = t || "beforeend", this.container = n, this.init();
    }
    init() {
      this.render(), this.handle();
    }
    render() {
      var e;
      const n = (
        /* HTML */
        `<div
      class="v-center estimate-custom-bill"
      id="estimate-custom-bill"
    >
      <div class="container text-center">
        <div class="os-title">How much is your latest monthly energy bill?</div>

        <div class="custom-radio with-img borderd">
          ${[
          { text: "$100 - $200", value: "100", averageValue: "150" },
          { text: "$200 - $300", value: "200", averageValue: "250" },
          { text: "$300 - $400", value: "300", averageValue: "350" },
          { text: "$400 - $500", value: "400", averageValue: "450" },
          { text: "$500+", value: "500", averageValue: "500" }
        ].map(({ text: i, value: o, averageValue: s }) => (
          /* HTML */
          `<div class="custom-radio-item radioNext">
                <input
                  class="bill-button"
                  type="radio"
                  name="monthly_elec"
                  value="${s}"
                  data-average-value="${s}"
                />${i}
              </div>`
        )).join("")}
        </div>
      </div>
      <div class="os-subnote">
        *100% of <span data-region-homeowner>NY</span> Homeowners are likely
        eligible for at least one federal solar incentive
      </div>
    </div>`
      );
      if (!this.container || document.querySelector("#estimate-custom-bill"))
        return;
      const t = document.querySelector("#bill-slider");
      (e = this.container) == null || e.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${C}</style>`), t && t.remove();
    }
    handle() {
      const n = document.querySelector(
        ".estimate-custom-bill .custom-radio"
      );
      if (!n) return;
      n.addEventListener("click", (e) => {
        if (e.target.closest(".radioNext")) {
          const o = document.querySelector(".nextSlide");
          o && o.click();
        }
      }), n.querySelectorAll(".bill-button").forEach((e) => {
        e.addEventListener("change", () => {
          var o, s;
          e.dataset.averageValue;
          const i = (s = (o = e.parentElement) == null ? void 0 : o.textContent) == null ? void 0 : s.trim();
          m(
            "exp_energy_bill_click_01",
            i,
            "click",
            "How much is your monthly energy bill?"
          );
        });
      });
    }
  }
  const h = {
    "New York": "New York",
    Illinois: "Illinois",
    Massachusetts: "Massachusetts"
  }, c = {
    "New York": {
      incentivesAvailable: "6",
      stateName: "New York",
      homeownerSaveVariant: "NY"
    },
    Illinois: {
      incentivesAvailable: "7",
      stateName: "Illinois",
      homeownerSaveVariant: "Illinois"
    },
    Massachusetts: {
      incentivesAvailable: "6",
      stateName: "Massachusetts",
      homeownerSaveVariant: "Massachusetts"
    }
  }, M = `.swiper-wrapper {
  min-height: var(--height, initial) !important;
}

#estimate-bill {
  display: none;
}

#estimate-shade .title {
  margin-bottom: 32px !important;
}
[data-current-slide='1'] .nextSlide {
  display: none !important;
}

.current-location {
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 5px;
  max-width: 106px;
}

@media (max-width: 768px) {
  .current-location {
    right: 16px;
  }
}

.current-location .text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #4a4a4a;
  font-size: 18px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .current-location .text {
    font-size: 16px;
  }
}
.current-location .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper
  input:is(#zip, #autoaddress, #email, #fname, #lname, #phone):not(
    .input-error
  ) {
  height: 58px;
  border: 1px solid #83be63 !important;
  background: #fff !important;
  box-shadow: 0px 0px 0px 3px #e2f3d9, 0px 2px 12px 0px rgba(0, 0, 0, 0.06) !important;
}

#next-block .nextSlide,
#submit,
.final-btn,
#phone {
  width: 620px !important;
  max-width: 100% !important;
}

@media (min-width: 768px) {
  #estimate-phone .title {
    text-wrap: balance;
  }
}
#estimate-phone .final-btn {
  padding-top: 0 !important;
}
`;
  class k {
    constructor(n) {
      this.activeState = n, this.init();
    }
    async init() {
      await this.observeSlides(), this.addNewStyles(), this.addChanges(), this.addStyles(), this.getCopyByRegion();
    }
    addNewStyles() {
      const n = document.querySelectorAll(".swiper-slide");
      new N({ container: n[1], position: "beforeend" });
    }
    addChanges() {
      new L(), new b(), new z(), new A();
    }
    async getCopyByRegion() {
      const n = await this.getLocationRegionAndCity();
      if (!n) return;
      const { regionName: t, city: e } = n;
      if (t) {
        const i = c[t] ? t : h["New York"], o = document.querySelector("#os-region"), s = document.querySelectorAll(".current-location"), l = document.querySelectorAll(
          "[data-region-homeowner]"
        ), u = document.querySelectorAll(
          "[data-incentives-count]"
        );
        o && (o.innerHTML = i), s.forEach((d) => {
          const r = d.querySelector(".text");
          r && (r.innerHTML = e);
        }), l.length && l.forEach((d) => {
          const r = c[i].homeownerSaveVariant;
          d.innerHTML = r;
        }), u.length && u.forEach((d) => {
          const r = c[i].incentivesAvailable;
          d.innerHTML = r;
        });
      }
    }
    async getLocationRegionAndCity() {
      const { data: n, error: t } = await y();
      if (t || !n)
        return console.error("Error fetching geolocation:", t), null;
      const { state_prov: e, city: i } = n;
      return this.activeState && this.activeState !== "" ? { regionName: this.activeState, city: i } : e ? { regionName: e, city: i } : (console.error("Region name not found in geolocation data"), null);
    }
    async observeSlides() {
      const n = document.querySelector(".swiper-container"), t = n == null ? void 0 : n.swiper, e = document.getElementById("solarForm"), i = document.querySelector(".swiper-wrapper");
      !t || !e || (e.dataset.currentSlide = "0", t == null || t.on("transitionEnd", () => {
        const o = t.realIndex;
        e.dataset.currentSlide = o.toString();
        const s = i == null ? void 0 : i.querySelector(".swiper-slide-active"), l = s == null ? void 0 : s.clientHeight;
        l && i && setTimeout(() => {
          i.style.setProperty(
            "--height",
            `${l + 5}px`
          );
        }, 200), o === 5 && m(
          "exp_energy_bill_view_01",
          "View Screen",
          "view",
          "Provide your Email"
        );
      }));
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = M, document.head.appendChild(n);
    }
  }
  const H = `@media (max-width: 768px) {
  br.desktop {
    display: none;
  }
}

@media (min-width: 768px) {
  br.mobile {
    display: none;
  }
}
`, _ = (() => {
    const n = new URLSearchParams(window.location.search).get("state");
    return n && h[n] ? n : null;
  })();
  f("energy_bill"), x({
    dev: "OS",
    name: "Price Tabs"
  });
  class g {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), new k(_);
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = H, document.head.appendChild(n);
    }
  }
  return new g(), {
    LaunchExperiment: g
  };
}();
