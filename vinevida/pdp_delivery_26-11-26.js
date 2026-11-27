(function() {
  "use strict";
  const U = `.vvdl-hidden {
  display: none !important;
}

.vvdl {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 24px;
  padding: 20px;
  background: #efefef;
  color: #000;
  font-family: "Manrope", sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  text-transform: none;
  box-sizing: border-box;
}
@media (min-width: 769px) {
  .vvdl {
    width: calc(100% - 10px);
    margin-left: 10px;
  }
}
@media (max-width: 768px) {
  .vvdl {
    margin-top: 16px;
    padding: 16px;
    font-size: 14px;
  }
}
.vvdl *,
.vvdl *::before,
.vvdl *::after {
  box-sizing: border-box;
}
.vvdl [hidden] {
  display: none !important;
}
.vvdl p {
  margin: 0;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
}
.vvdl b {
  font-weight: 700;
}
.vvdl[data-state=view] .vvdl-edit-only, .vvdl[data-state=edit] .vvdl-view-only {
  display: none !important;
}

.vvdl-icon {
  display: flex;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}
.vvdl-icon svg {
  display: block;
  width: 20px;
  height: 20px;
}

.vvdl-delivery {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.vvdl[data-state=edit] .vvdl-delivery {
  gap: 12px;
}

.vvdl-head {
  display: flex;
  align-items: center;
  gap: 12px;
}

.vvdl-to {
  flex: 1;
}

.vvdl-change {
  margin-left: auto;
  padding: 0;
  border: 0;
  background: none;
  color: #0075ff;
  font: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}

.vvdl-rows {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 32px;
  transition: opacity 0.2s;
}
.vvdl--loading .vvdl-rows {
  opacity: 0.5;
}

.vvdl-accent {
  color: #007085;
}

.vvdl-timer {
  color: #007085;
  font-weight: 600;
}

.vvdl-rate-sep {
  margin: 4px 0;
  border-top: 1px dashed #d4d6d8;
}
@media (max-width: 768px) {
  .vvdl-rate-sep {
    margin: 0;
    border-top-style: solid;
  }
}

@media (max-width: 768px) {
  .vvdl-countdown {
    display: block;
    margin-top: 8px;
    font-size: 15px;
    line-height: 28px;
  }
}

.vvdl-form {
  display: flex;
  gap: 12px;
  align-items: stretch;
}
@media (max-width: 768px) {
  .vvdl-form {
    flex-direction: column;
    padding-left: 31px;
  }
}

.vvdl-field {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  min-width: 0;
  margin: 0;
}
@media (max-width: 768px) {
  .vvdl-field {
    gap: 4px;
  }
}

.vvdl-label {
  font-size: 12px;
  font-weight: 600;
  line-height: 22px;
}
@media (min-width: 769px) {
  .vvdl-label {
    position: absolute;
    top: 5px;
    left: 13px;
    z-index: 1;
    color: #5f6368;
    font-weight: 400;
    line-height: 16px;
    pointer-events: none;
  }
}

.vvdl .vvdl-input {
  width: 100%;
  height: 46px;
  min-height: 0;
  margin: 0;
  padding: 0 12px;
  border: 1px solid #d4d6d8;
  border-radius: 0;
  background: #fff;
  box-shadow: none;
  color: #000;
  font-family: inherit;
  font-size: 14px;
  line-height: 24px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
}
.vvdl .vvdl-input:focus {
  border-color: #000;
}
@media (min-width: 769px) {
  .vvdl .vvdl-input {
    height: 48px;
    padding: 20px 14px 4px 12px;
    font-size: 15px;
    line-height: 22px;
  }
}
@media (max-width: 768px) {
  .vvdl .vvdl-input {
    font-size: 16px;
  }
}

.vvdl-field--select .vvdl-input {
  padding-right: 34px;
  text-overflow: ellipsis;
  cursor: pointer;
}

.vvdl-chevron {
  position: absolute;
  right: 14px;
  bottom: 20px;
  display: flex;
  pointer-events: none;
}
.vvdl-chevron svg {
  width: 10px;
  height: 6px;
}
@media (min-width: 769px) {
  .vvdl-chevron {
    bottom: 21px;
  }
}

.vvdl-zip-row {
  display: flex;
  gap: 12px;
}
@media (max-width: 768px) {
  .vvdl-zip-row {
    align-items: flex-end;
    gap: 10px;
  }
}

.vvdl-field--zip {
  flex: 0 0 112px;
}

.vvdl .vvdl-estimate {
  flex: 0 0 140px;
  height: 48px;
  margin: 0;
  padding: 0 12px;
  border: 1px solid #000;
  border-radius: 0;
  background: #fff;
  color: #000;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.vvdl .vvdl-estimate:hover {
  background: #000;
  color: #fff;
}
@media (max-width: 768px) {
  .vvdl .vvdl-estimate {
    flex: 1 1 auto;
    height: 46px;
    font-size: 11.3px;
    letter-spacing: 1.69px;
  }
}

.vvdl-error {
  color: #d01010;
  font-size: 13px;
}
@media (min-width: 769px) {
  .vvdl-error {
    flex-basis: 100%;
  }
}

@media (min-width: 769px) {
  .vvdl-form {
    flex-wrap: wrap;
  }
}

.vvdl-sep {
  border-top: 1px solid #d4d6d8;
}

.vvdl-returns {
  display: flex;
  align-items: center;
  gap: 12px;
}
@media (max-width: 768px) {
  .vvdl-returns {
    align-items: flex-start;
    font-size: 15px;
    line-height: 28px;
  }
  .vvdl-returns .vvdl-icon {
    margin-top: 4px;
  }
}
.vvdl-returns a {
  color: #0075ff;
  text-transform: none;
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 768px) {
  .vvdl-dot {
    display: none;
  }
}

@media (max-width: 768px) {
  .vvdl-policy {
    display: table;
  }
}
`, v = (n, e, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: e,
      event_type: t,
      event_loc: i
    }), p(`Event: ${n} | ${e} | ${t} | ${i}`, "success");
  }, z = (n) => new Promise((e) => {
    const t = document.querySelector(n);
    t && e(t);
    const i = new MutationObserver(() => {
      const s = document.querySelector(n);
      s && (e(s), i.disconnect());
    });
    i.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), V = ({ name: n, dev: e }) => {
    const t = n.toLowerCase().replace(/\s/g, "_");
    v(`${t}_started`, `Experiment ${n} started`, "other", t), console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, H = (n, e, t, i, s = 1e3, o = 0.5) => {
    let a, r;
    if (a = new IntersectionObserver(
      function(c) {
        c[0].isIntersecting === !0 ? r = setTimeout(() => {
          v(
            e,
            c[0].target.dataset.visible || i,
            "view",
            t
          ), a.disconnect();
        }, s) : (p("Element is not fully visible", "warn"), clearTimeout(r));
      },
      { threshold: [o] }
    ), typeof n == "string") {
      const c = document.querySelector(n);
      c && a.observe(c);
    } else
      a.observe(n);
  }, p = (n, e = "info") => {
    let t;
    switch (e) {
      case "info":
        t = "color: #3498db;";
        break;
      case "warn":
        t = "color: #f39c12;";
        break;
      case "error":
        t = "color: #e74c3c;";
        break;
      case "success":
        t = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${n}`, `${t} font-size: 16px; font-weight: 600`);
  }, S = "vvsc_zip_guess", F = "https://ipwho.is/", j = async (n = 4e3) => {
    try {
      const e = sessionStorage.getItem(S);
      if (e) return JSON.parse(e);
    } catch {
    }
    try {
      const e = new AbortController(), t = setTimeout(() => e.abort(), n), i = await fetch(F, { signal: e.signal });
      if (clearTimeout(t), !i.ok) return null;
      const s = await i.json();
      if (!(s != null && s.success)) return null;
      const o = String(s.country_code || ""), a = String(s.postal || "").trim();
      if (o !== "US" || !/^\d{5}$/.test(a)) return null;
      const r = { zip: a, countryCode: o };
      try {
        sessionStorage.setItem(S, JSON.stringify(r));
      } catch {
      }
      return r;
    } catch {
      return p("Vinevida slide cart: IP geolocation unavailable, skipping shipping estimate", "warn"), null;
    }
  }, m = /* @__PURE__ */ new Map(), Y = async (n, e = 4e3) => {
    var t;
    if (m.has(n)) return m.get(n) ?? null;
    try {
      const i = new AbortController(), s = setTimeout(() => i.abort(), e), o = await fetch(`https://api.zippopotam.us/us/${n}`, { signal: i.signal });
      if (clearTimeout(s), !o.ok)
        return m.set(n, null), null;
      const a = await o.json(), r = (t = a == null ? void 0 : a.places) == null ? void 0 : t[0], c = r == null ? void 0 : r["place name"], u = r == null ? void 0 : r["state abbreviation"], f = c && u ? { city: c, state: u } : null;
      return m.set(n, f), f;
    } catch {
      return null;
    }
  }, L = 1e4, W = "/policies/refund-policy", T = 14, M = 0, Z = "America/New_York", J = 2, K = [
    "2026-11-26",
    // Thanksgiving
    "2026-12-25",
    // Christmas
    "2027-01-01",
    // New Year
    "2027-05-31",
    // Memorial Day
    "2027-07-05",
    // Independence Day (observed)
    "2027-09-06",
    // Labor Day
    "2027-11-25",
    // Thanksgiving
    "2027-12-24"
    // Christmas (observed)
  ], G = [
    "AL",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY"
  ], y = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    DC: "District of Columbia",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
    PR: "Puerto Rico"
  }, X = { "Washington DC": "DC" }, E = (n) => X[n] ?? Object.keys(y).find((e) => y[e] === n) ?? "", B = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M19.4641 4.25636C19.4641 4.00263 19.3108 3.77401 19.0761 3.67757L10.2384 0.0469287C10.086 -0.0156429 9.91519 -0.0156429 9.76283 0.0469287L0.925053 3.67757C0.690371 3.77397 0.537109 4.00263 0.537109 4.25636V15.7436C0.537109 15.9974 0.690332 16.226 0.925053 16.3224L9.76283 19.9531C9.91354 20.015 10.083 20.0163 10.2376 19.953C10.2451 19.9505 9.91053 20.0878 19.0761 16.3224C19.3109 16.226 19.4641 15.9974 19.4641 15.7436V4.25636ZM10.0006 7.26316L6.74421 5.92541L13.7816 2.85546L17.2558 4.28268L10.0006 7.26316ZM1.78854 5.24248L4.59805 6.39666V9.65288C4.59805 9.99844 4.87821 10.2786 5.22376 10.2786C5.56931 10.2786 5.84948 9.99844 5.84948 9.65288V6.91076L9.37488 8.35902V18.4408L1.78854 15.3242V5.24248ZM10.0006 1.30215L12.1697 2.19325L5.13233 5.26321L2.74542 4.28264L10.0006 1.30215ZM10.6263 8.35902L18.2127 5.24248V15.3242L10.6263 18.4408V8.35902Z" fill="currentColor"/></svg>', Q = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M19.6004 10.0004C19.6004 15.2938 15.2938 19.6004 10.0004 19.6004C4.70699 19.6004 0.400391 15.2938 0.400391 10.0004C0.400391 9.66879 0.668791 9.40039 1.00039 9.40039C1.33199 9.40039 1.60039 9.66879 1.60039 10.0004C1.60039 14.6322 5.36859 18.4004 10.0004 18.4004C14.6322 18.4004 18.4004 14.6322 18.4004 10.0004C18.4004 5.36859 14.6322 1.60039 10.0004 1.60039C7.76779 1.60039 5.69519 2.46819 4.13599 4.00039H6.40039C6.73199 4.00039 7.00039 4.26879 7.00039 4.60039C7.00039 4.93199 6.73199 5.20039 6.40039 5.20039H2.80039C2.46879 5.20039 2.20039 4.93199 2.20039 4.60039V1.00039C2.20039 0.668791 2.46879 0.400391 2.80039 0.400391C3.13199 0.400391 3.40039 0.668791 3.40039 1.00039V3.04719C5.17059 1.35759 7.49659 0.400391 10.0004 0.400391C15.2938 0.400391 19.6004 4.70699 19.6004 10.0004ZM15.4004 7.60039V13.0004C15.4004 13.2506 15.2452 13.4744 15.0114 13.5624L10.2114 15.3624C10.1434 15.3876 10.0718 15.4004 10.0004 15.4004C9.92899 15.4004 9.85739 15.3876 9.78939 15.3624L4.98939 13.5624C4.75559 13.4744 4.60039 13.2506 4.60039 13.0004V7.60039C4.60039 7.35019 4.75559 7.12639 4.98939 7.03839L9.78939 5.23839C9.92539 5.18799 10.0754 5.18799 10.2112 5.23839L15.0112 7.03839C15.2452 7.12639 15.4004 7.35019 15.4004 7.60039ZM6.90899 7.60039L10.0004 8.75939L13.0918 7.60039L10.0004 6.44139L6.90899 7.60039ZM5.80039 12.5844L9.40039 13.9344V9.81639L5.80039 8.46639V12.5844ZM14.2004 12.5844V8.46639L10.6004 9.81639V13.9344L14.2004 12.5844Z" fill="currentColor"/></svg>', _ = '<svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', ee = () => (
    /* html */
    `
  <div class="vvdl" data-state="view">
    <div class="vvdl-delivery">
      <div class="vvdl-head">
        <span class="vvdl-icon">${B}</span>
        <span class="vvdl-to vvdl-view-only">Delivery to <b class="vvdl-place"></b></span>
        <span class="vvdl-to vvdl-edit-only">Delivery to:</span>
        <button type="button" class="vvdl-change vvdl-view-only">Change</button>
      </div>

      <div class="vvdl-rows vvdl-view-only">
        <p class="vvdl-row vvdl-standard"></p>
        <div class="vvdl-rate-sep" hidden></div>
        <p class="vvdl-row vvdl-expedited" hidden></p>
        <div class="vvdl-extra"></div>
      </div>

      <div class="vvdl-form vvdl-edit-only">
        <label class="vvdl-field vvdl-field--select">
          <span class="vvdl-label">Country</span>
          <select data-field="country" class="vvdl-input"></select>
          <span class="vvdl-chevron">${_}</span>
        </label>
        <label class="vvdl-field vvdl-field--select vvdl-field--province">
          <span class="vvdl-label">Province</span>
          <select data-field="province" class="vvdl-input"></select>
          <span class="vvdl-chevron">${_}</span>
        </label>
        <div class="vvdl-zip-row">
          <label class="vvdl-field vvdl-field--zip">
            <span class="vvdl-label">Zip code</span>
            <input data-field="zip" class="vvdl-input" type="text" inputmode="text" autocomplete="postal-code" placeholder="000000" maxlength="10" />
          </label>
          <button type="button" class="vvdl-estimate">Estimate</button>
        </div>
        <p class="vvdl-error" hidden></p>
      </div>
    </div>

    <div class="vvdl-sep"></div>

    <div class="vvdl-returns">
      <span class="vvdl-icon">${Q}</span>
      <p><b>30-day returns</b> on unopened items<span class="vvdl-dot"> · </span><a class="vvdl-policy" href="${W}" target="_blank" rel="noopener">Return policy</a></p>
    </div>
  </div>
`
  ), x = (n) => `$${(n / 100).toFixed(2)}`, te = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ne = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], N = (n) => {
    const e = new Intl.DateTimeFormat("en-US", {
      timeZone: Z,
      hourCycle: "h23",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    }).formatToParts(n), t = (i) => {
      var s;
      return Number(((s = e.find((o) => o.type === i)) == null ? void 0 : s.value) ?? 0);
    };
    return { y: t("year"), m: t("month"), d: t("day"), h: t("hour"), min: t("minute"), s: t("second") };
  }, w = ({ y: n, m: e, d: t }) => new Date(Date.UTC(n, e - 1, t)), ie = (n) => ({ y: n.getUTCFullYear(), m: n.getUTCMonth() + 1, d: n.getUTCDate() }), b = (n, e) => {
    const t = w(n);
    return t.setUTCDate(t.getUTCDate() + e), ie(t);
  }, se = ({ y: n, m: e, d: t }) => `${n}-${String(e).padStart(2, "0")}-${String(t).padStart(2, "0")}`, D = (n) => {
    const e = w(n).getUTCDay();
    return e !== 0 && e !== 6 && !K.includes(se(n));
  }, $ = (n) => {
    let e = n;
    for (; !D(e); ) e = b(e, 1);
    return e;
  }, oe = (n, e) => {
    const t = N(e), i = Date.UTC(t.y, t.m - 1, t.d, t.h, t.min, t.s) - Math.floor(e.getTime() / 1e3) * 1e3;
    return Date.UTC(n.y, n.m - 1, n.d, T, M) - i;
  }, re = (n = /* @__PURE__ */ new Date()) => {
    const e = N(n), t = { y: e.y, m: e.m, d: e.d }, i = e.h * 60 + e.min < T * 60 + M, s = D(t) && i ? t : $(b(t, 1));
    let o = s;
    for (let r = 0; r < J; r++) o = $(b(o, 1));
    return {
      dateLabel: `${te[w(o).getUTCDay()]}, ${ne[o.m - 1]} ${o.d}`,
      msLeft: Math.max(0, oe(s, n) - n.getTime())
    };
  }, ae = (n) => {
    const e = Math.max(1, Math.ceil(n / 6e4)), t = Math.floor(e / 1440), i = Math.floor(e % 1440 / 60), s = e % 60;
    return t > 0 ? `${t} d ${i} h` : i > 0 ? `${i} h ${s} min` : `${s} min`;
  }, le = (n) => {
    const e = String(n ?? "").match(/(\d+)\s*(?:-|–|to)\s*(\d+)\s*business\s*days?/i);
    if (e) return `${e[1]}–${e[2]} business days`;
    const t = String(n ?? "").match(/(\d+)\s*business\s*days?/i);
    return t ? `${t[1]} business day${t[1] === "1" ? "" : "s"}` : "";
  }, k = window.fetch.bind(window), ce = 8e3, g = async (n, e = {}) => {
    const t = new AbortController(), i = setTimeout(() => t.abort(), ce);
    try {
      return await k(n, { credentials: "same-origin", ...e, signal: t.signal });
    } finally {
      clearTimeout(i);
    }
  }, de = ({ country: n, province: e, zip: t }) => `/cart/shipping_rates.json?${new URLSearchParams({
    "shipping_address[zip]": t,
    "shipping_address[country]": n,
    "shipping_address[province]": e
  })}`, ve = async (n) => {
    if (!n.ok) return null;
    const e = await n.json(), t = e == null ? void 0 : e.shipping_rates;
    return Array.isArray(t) ? t.map((i) => ({
      name: String(i.presentment_name || i.name || ""),
      priceCents: Math.round(Number(i.price) * 100),
      days: le(i.description)
    })).filter((i) => i.name && Number.isFinite(i.priceCents)) : null;
  }, pe = (n) => {
    const e = document.cookie.match(new RegExp(`(?:^|; )${n}=([^;]*)`));
    return e ? decodeURIComponent(e[1]) : "";
  }, I = (n) => {
    document.cookie = `cart=${n}; path=/`;
  }, O = async (n) => ve(await g(de(n)));
  let A = Promise.resolve();
  const he = (n, e) => {
    const t = async () => {
      const s = pe("cart");
      I(`fake-cart-cookie___${Date.now()}${Math.floor(Math.random() * 1e3)}`);
      try {
        return (await g("/cart/add.js", {
          method: "POST",
          body: new FormData(e),
          headers: { "X-Requested-With": "XMLHttpRequest" }
        })).ok ? await O(n) : null;
      } finally {
        s ? I(s) : document.cookie = "cart=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    }, i = A.then(t, t);
    return A = i.catch(() => null), i;
  }, ue = async (n, e, t) => {
    try {
      return e > 0 ? await O(n) : t ? await he(n, t) : null;
    } catch {
      return null;
    }
  };
  let C = null;
  const R = "vvdl_countries", fe = async () => {
    const n = await (await g("/cart")).text(), e = new DOMParser().parseFromString(n, "text/html");
    return Array.from(e.querySelectorAll('select[name="country"] option')).filter((t) => t.value && t.value !== "---").map((t) => {
      let i = [];
      try {
        i = JSON.parse(t.dataset.provinces || "[]");
      } catch {
      }
      return { name: t.value, provinces: i };
    });
  }, me = async () => {
    const n = await (await g("/services/javascripts/countries.js")).text(), e = JSON.parse(n.slice(n.indexOf("{"), n.lastIndexOf("}") + 1));
    return Object.keys(e).map((i) => ({
      name: i,
      provinces: (e[i].provinces ?? []).map((s) => [s, s])
    })).sort((i, s) => +(s.name === "United States") - +(i.name === "United States"));
  }, ye = () => (C ?? (C = (async () => {
    try {
      const e = sessionStorage.getItem(R);
      if (e) return JSON.parse(e);
    } catch {
    }
    let n = await fe().catch(() => []);
    if (n.length) {
      try {
        sessionStorage.setItem(R, JSON.stringify(n));
      } catch {
      }
      return n;
    }
    return n = await me().catch(() => []), n.length ? n : (C = null, [{ name: "United States", provinces: [] }]);
  })()), C);
  V({ name: "PDP Delivery & Returns", dev: "AI" });
  const h = "PDP Delivery", P = "vvdl_location", d = "United States", q = /\/cart\/(add|change|update|clear)(\.js)?(\?|$)/;
  class ge {
    constructor() {
      this.form = null, this.location = null, this.cart = { total_price: 0, item_count: 0 }, this.rates = null, this.status = "idle", this.requestId = 0, this.countries = [], this.init();
    }
    async init() {
      const e = await z("form.product-form .product-form__buy-buttons");
      if (document.querySelector(".vvdl")) return;
      document.head.insertAdjacentHTML("beforeend", `<style class="vvdl-style">${U}</style>`), this.form = e.closest("form"), this.hideNativeNote(), e.insertAdjacentHTML("afterend", ee()), this.root = document.querySelector(".vvdl"), this.bindEvents(), this.watchCart(), H(this.root, "pdp_delivery_view", h, "Delivery & returns block viewed"), setInterval(() => this.renderRates(), 3e4), this.renderRates();
      const [t] = await Promise.all([this.resolveLocation(), this.refreshCart()]);
      if (!t) {
        p("PDP Delivery: location not detected, showing the edit form", "warn"), await this.openEdit();
        return;
      }
      this.location = t, this.estimate();
    }
    // "Taxes and shipping calculated at checkout" under ATC is replaced by our block
    hideNativeNote() {
      var t;
      const e = ((t = this.form) == null ? void 0 : t.closest(".product__info, .card__section")) ?? this.form;
      e == null || e.querySelectorAll("p, span, div, small").forEach((i) => {
        i.childElementCount < 2 && /taxes\s+and\s+shipping\s+calculated\s+at\s+checkout/i.test(i.textContent ?? "") && i.classList.add("vvdl-hidden");
      });
    }
    // ─── Location ──────────────────────────────────────────────────────────────
    async resolveLocation() {
      try {
        const i = sessionStorage.getItem(P);
        if (i) return JSON.parse(i);
      } catch {
      }
      const e = await j();
      if (!e) return null;
      const t = await Y(e.zip);
      return t ? { country: d, province: y[t.state] ?? t.state, zip: e.zip } : null;
    }
    saveLocation(e) {
      this.location = e;
      try {
        sessionStorage.setItem(P, JSON.stringify(e));
      } catch {
      }
    }
    placeLabel() {
      if (!this.location) return "";
      const { country: e, province: t, zip: i } = this.location;
      return `${e === d ? E(t) || t : t || e} ${i}`.trim();
    }
    isFreeShippingRegion() {
      return this.location ? this.location.country !== d ? !1 : G.includes(E(this.location.province)) : !0;
    }
    // ─── Cart ──────────────────────────────────────────────────────────────────
    async refreshCart() {
      try {
        const e = await k("/cart.js", { credentials: "same-origin" });
        e.ok && (this.cart = await e.json());
      } catch {
      }
    }
    watchCart() {
      var s;
      const e = window.fetch;
      window.fetch = async (o, a) => {
        const r = await e(o, a), c = typeof o == "string" ? o : o instanceof Request ? o.url : String(o);
        return r.ok && q.test(c) && this.scheduleReestimate(!0), r;
      };
      const t = XMLHttpRequest.prototype.open, i = this;
      XMLHttpRequest.prototype.open = function(o, a, ...r) {
        return q.test(String(a)) && this.addEventListener("load", () => i.scheduleReestimate(!0)), t.call(this, o, a, ...r);
      }, ["cart:rerendered", "cart:refresh", "product:added"].forEach(
        (o) => document.addEventListener(o, () => this.scheduleReestimate(!0))
      ), (s = this.form) == null || s.addEventListener("change", (o) => {
        const a = o.target;
        a.closest(".vvdl") || this.cart.item_count === 0 && /^(id|option)/.test(a.name || "") && this.scheduleReestimate(!1);
      });
    }
    scheduleReestimate(e) {
      clearTimeout(this.reestimateTimer), this.reestimateTimer = setTimeout(async () => {
        e && await this.refreshCart(), this.renderRates(), this.location && this.estimate();
      }, 400);
    }
    // ─── Estimate ──────────────────────────────────────────────────────────────
    async estimate() {
      if (!this.location) return;
      const e = ++this.requestId;
      this.status = "loading", this.renderRates();
      const t = await ue(this.location, this.cart.item_count, this.form);
      e === this.requestId && (this.rates = t && t.length ? t : null, this.status = this.rates ? "ready" : "error", this.rates || p(`PDP Delivery: no rates for ${this.placeLabel()}, hiding rates and dates`, "warn"), this.renderRates());
    }
    // ─── Render ────────────────────────────────────────────────────────────────
    renderRates() {
      var f;
      if (!this.root) return;
      const e = (l) => this.root.querySelector(l);
      e(".vvdl-place").textContent = this.placeLabel();
      const t = this.status === "ready" ? this.rates ?? [] : [], i = t.find((l) => /standard/i.test(l.name)), s = t.find((l) => /expedit/i.test(l.name)), o = t.filter((l) => l !== i && l !== s), a = this.isFreeShippingRegion(), r = a && this.cart.total_price >= L, c = e(".vvdl-standard");
      if (r)
        c.innerHTML = `Standard: <b class="vvdl-accent">free on this order</b>${i != null && i.days ? ` · ${i.days}` : ""}`;
      else {
        const l = ["Standard"];
        i && l.push(i.priceCents > 0 ? x(i.priceCents) : "Free"), i != null && i.days && l.push(i.days), a && l.push(`free on orders <b class="vvdl-accent">over $${L / 100}</b>`), c.innerHTML = l.join(" · ");
      }
      c.hidden = !a && !i;
      const u = e(".vvdl-expedited");
      if (s) {
        let l = `<b>Expedited</b> · ${x(s.priceCents)}`;
        if (((f = this.location) == null ? void 0 : f.country) === d) {
          const { dateLabel: xe, msLeft: we } = re();
          l += ` · get it by <b>${xe}</b> <span class="vvdl-countdown">if you order within <span class="vvdl-timer">${ae(we)}</span></span>`;
        }
        u.innerHTML = l;
      }
      u.hidden = !s, e(".vvdl-rate-sep").hidden = !s || c.hidden, e(".vvdl-extra").innerHTML = o.map((l) => `<p class="vvdl-row"><b>${l.name}</b> · ${l.priceCents > 0 ? x(l.priceCents) : "Free"}${l.days ? ` · ${l.days}` : ""}</p>`).join(""), this.root.classList.toggle("vvdl--loading", this.status === "loading");
    }
    // ─── Edit state ────────────────────────────────────────────────────────────
    async openEdit() {
      var s, o, a;
      this.root.dataset.state = "edit", this.countries.length || (this.countries = await ye());
      const e = this.root.querySelector(".vvdl-form"), t = e.querySelector('[data-field="country"]'), i = ((s = this.location) == null ? void 0 : s.country) ?? d;
      t.innerHTML = this.countries.map((r) => `<option value="${r.name}"${r.name === i ? " selected" : ""}>${r.name}</option>`).join(""), this.fillProvinces((o = this.location) == null ? void 0 : o.province), e.querySelector('[data-field="zip"]').value = ((a = this.location) == null ? void 0 : a.zip) ?? "", e.querySelector(".vvdl-error").hidden = !0;
    }
    fillProvinces(e) {
      var a;
      const t = this.root.querySelector(".vvdl-form"), i = t.querySelector('[data-field="country"]').value, s = t.querySelector('[data-field="province"]');
      let o = ((a = this.countries.find((r) => r.name === i)) == null ? void 0 : a.provinces) ?? [];
      !o.length && i === d && (o = Object.values(y).map((r) => [r, r])), s.innerHTML = o.map(([r, c]) => `<option value="${r}"${r === e ? " selected" : ""}>${c}</option>`).join(""), t.querySelector(".vvdl-field--province").hidden = !o.length, this.root.classList.toggle("vvdl--no-province", !o.length);
    }
    submitEdit() {
      const e = this.root.querySelector(".vvdl-form"), t = e.querySelector('[data-field="country"]').value, s = e.querySelector(".vvdl-field--province").hidden ? "" : e.querySelector('[data-field="province"]').value, o = e.querySelector('[data-field="zip"]').value.trim(), a = e.querySelector(".vvdl-error");
      if (!o || t === d && !/^\d{5}(-\d{4})?$/.test(o)) {
        a.textContent = "Please enter a valid zip code", a.hidden = !1, v("pdp_delivery_estimate_error", "Invalid zip code", "error", h);
        return;
      }
      v("pdp_delivery_estimate", `Estimate: ${t}`, "click", h), this.saveLocation({ country: t, province: s, zip: o }), this.root.dataset.state = "view", this.estimate();
    }
    bindEvents() {
      this.root.querySelector(".vvdl-change").addEventListener("click", () => {
        v("pdp_delivery_change", "Change location", "click", h), this.openEdit();
      }), ["change", "input"].forEach((t) => this.root.addEventListener(t, (i) => i.stopPropagation()));
      const e = this.root.querySelector(".vvdl-form");
      e.querySelector('[data-field="country"]').addEventListener("change", () => this.fillProvinces()), e.querySelector(".vvdl-estimate").addEventListener("click", (t) => {
        t.preventDefault(), this.submitEdit();
      }), e.querySelector('[data-field="zip"]').addEventListener("keydown", (t) => {
        t.key === "Enter" && (t.preventDefault(), t.stopPropagation(), this.submitEdit());
      }), this.root.querySelector(".vvdl-policy").addEventListener(
        "click",
        () => v("pdp_delivery_return_policy", "Return policy", "click", h)
      );
    }
  }
  new ge();
})();
//# sourceMappingURL=index.js.map
