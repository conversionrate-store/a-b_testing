(function() {
  "use strict";
  const y = `.bfb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 20px;
  background: #000;
  font: 400 14px/22px "DM Sans", sans-serif;
  color: #fff;
  white-space: nowrap;
}
.bfb__row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.bfb__fire {
  display: block;
  width: 19.3px;
  height: 22px;
  margin: 0 1.35px;
}
.bfb__off {
  padding: 0 4px;
  border-radius: 4px;
  background: #e7937b;
  font-weight: 700;
  color: #000;
}
.bfb__time {
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}
.bfb__link, .bfb__link:hover, .bfb__link:visited {
  font-weight: 700;
  color: #e7937b;
  text-decoration: underline;
}
@media (max-width: 768px) {
  .bfb {
    flex-direction: column;
    gap: 8px;
    white-space: normal;
    text-align: center;
  }
  .bfb__row {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 4px;
  }
  .bfb__time, .bfb__link {
    white-space: nowrap;
  }
  .bfb__row:first-child {
    gap: 8px;
  }
  .bfb__off {
    margin: 0 4px;
  }
}
`, f = (n, e, t, a = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: e,
      event_type: t,
      event_loc: a
    }), u(`Event: ${n} | ${e} | ${t} | ${a}`, "success");
  }, m = (n) => new Promise((e) => {
    const t = document.querySelector(n);
    t && e(t);
    const a = new MutationObserver(() => {
      const r = document.querySelector(n);
      r && (e(r), a.disconnect());
    });
    a.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), v = ({ name: n, dev: e }) => {
    const t = n.toLowerCase().replace(/\s/g, "_");
    f(`${t}_started`, `Experiment ${n} started`, "other", t), console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, k = (n) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", n, "variant_1"));
    }, 1e3);
  }, u = (n, e = "info") => {
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
  }, s = {
    presale: Date.parse("2026-11-23T00:00:00-05:00"),
    sale: Date.parse("2026-11-27T00:00:00-05:00"),
    lastday: Date.parse("2026-11-30T00:00:00-05:00"),
    end: Date.parse("2026-12-01T00:00:00-05:00")
  }, x = {
    presale: s.sale,
    sale: s.lastday,
    lastday: s.end
  }, h = {
    general: "/black-friday",
    beginners: "/black-friday-yoga-beginners",
    calm: "/black-friday-calm-mind-sleep",
    strength: "/black-friday-strength-flexibility"
  }, $ = h.general, c = "bf_state", S = ["off", "presale", "sale", "lastday"], b = () => {
    try {
      const n = new URLSearchParams(window.location.search).get(c);
      return n === "reset" ? sessionStorage.removeItem(c) : n && S.includes(n) && sessionStorage.setItem(c, n), sessionStorage.getItem(c) || null;
    } catch {
      return null;
    }
  }, g = (n = Date.now()) => {
    const e = b();
    return e || (n < s.presale || n >= s.end ? "off" : n < s.sale ? "presale" : n < s.lastday ? "sale" : "lastday");
  }, E = (n, e = Date.now()) => {
    const t = Math.max(0, Math.floor((x[n] - e) / 1e3));
    return {
      d: Math.floor(t / 86400),
      h: Math.floor(t % 86400 / 3600),
      m: Math.floor(t % 3600 / 60),
      s: t % 60
    };
  }, o = (n) => String(n).padStart(2, "0"), L = (n) => n !== "lastday", T = (n, e, t, a = g) => {
    const r = b() !== null, i = () => {
      e(E(n)), !r && a() !== n && (clearInterval(l), t());
    }, l = window.setInterval(i, 1e3);
    return i(), () => clearInterval(l);
  }, M = (n, e) => L(n) ? `${e.d}d ${o(e.h)}h ${o(e.m)}m ${o(e.s)}s` : `${o(e.h + e.d * 24)}h ${o(e.m)}m ${o(e.s)}s`, p = (n = Date.now()) => {
    const e = g(n);
    return e === "off" && !b() && n < s.presale ? "presale" : e;
  }, D = (n = window.location.pathname) => Object.values(h).includes(n.replace(/\/$/, "")), B = { fire: "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='26.3248'%20height='30'%20viewBox='0%200%2026.3248%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M9.58389%2016.8378C9.88562%2016.8378%2010.1615%2016.6666%2010.3006%2016.3695C10.3429%2016.2793%2010.3605%2016.1794%2010.3605%2016.0797V16.0771C10.3605%2015.9116%2010.3152%2015.747%2010.2186%2015.6125C10.0691%2015.4042%209.83872%2015.2861%209.58958%2015.2841C9.58758%2015.2841%209.58559%2015.2841%209.5836%2015.2841C9.158%2015.2841%208.81019%2015.6288%208.80696%2016.0551C8.80374%2016.4834%209.1495%2016.8345%209.57779%2016.8377C9.57985%2016.8377%209.5819%2016.8378%209.58389%2016.8378Z'%20fill='%23E7937B'/%3e%3cpath%20id='Vector_2'%20d='M16.747%2022.5506C16.7449%2022.5506%2016.7429%2022.5505%2016.7409%2022.5505C16.4571%2022.5505%2016.1961%2022.702%2016.0503%2022.9674C16.0307%2023.0031%2016.0147%2023.0408%2016.0026%2023.0797C15.9117%2023.372%2015.9863%2023.6681%2016.1877%2023.8725C16.3333%2024.0203%2016.5277%2024.1026%2016.7352%2024.1042C16.7372%2024.1042%2016.7392%2024.1042%2016.7412%2024.1042C17.1668%2024.1042%2017.5146%2023.7596%2017.5178%2023.3333C17.5211%2022.9049%2017.1753%2022.5538%2016.747%2022.5506Z'%20fill='%23E7937B'/%3e%3cpath%20id='Vector_3'%20d='M25.4543%2012.3073C25.2613%2011.7665%2024.5038%2011.7323%2024.2703%2012.2569C22.139%2017.0445%2017.332%2013.1595%2019.666%209.60504C20.2466%208.72077%2020.5228%207.66498%2020.3738%206.61762C20.264%205.84527%2019.9849%205.06154%2019.5053%204.44272C19.1894%204.03505%2018.5456%204.14397%2018.3876%204.63494C18.019%205.78037%2017.1424%207.4945%2015.2293%207.26118C12.9022%206.97739%2011.759%203.44009%2012.6491%200.835829C12.8407%200.275277%2012.22%20-0.210413%2011.7117%200.0937809C9.39419%201.48056%207.83851%203.99419%208.2596%206.53133C8.6434%208.84388%209.93334%2010.3697%207.92006%2011.4765C6.88114%2012.0292%205.59431%2011.5223%205.21121%2010.4096C5.21121%2010.4096%204.79968%208.41007%203.07201%207.83639C2.7691%207.73579%202.43812%207.87584%202.29754%208.16233C1.58252%209.6194%20-0.454038%2014.3378%200.0917991%2018.0619C0.880335%2024.7854%206.38203%2030.0021%2013.3006%2030C20.7837%2030%2026.3248%2023.9339%2026.3248%2016.4508C26.2843%2015.1519%2025.9795%2013.7797%2025.4543%2012.3073ZM7.00478%2016.0415C7.01557%2014.6261%208.17055%2013.4819%209.58336%2013.4819C9.59005%2013.4819%209.59649%2013.482%209.60318%2013.482C10.3278%2013.4875%2011.0044%2013.7894%2011.4949%2014.3292C11.9036%2014.779%2012.1413%2015.3653%2012.1612%2015.9728C12.1852%2016.7017%2011.9097%2017.3897%2011.3935%2017.8982C10.9075%2018.377%2010.2656%2018.6399%209.58424%2018.6399C9.5775%2018.6399%209.57088%2018.6398%209.56419%2018.6398C8.14224%2018.6291%206.99411%2017.4634%207.00478%2016.0415ZM10.3805%2025.3396C10.2069%2025.6002%209.92097%2025.7411%209.62973%2025.7411C9.45803%2025.7411%209.28456%2025.6922%209.13097%2025.5899C8.7168%2025.314%208.60477%2024.7545%208.88065%2024.3404L15.8121%2013.9362C16.088%2013.522%2016.6475%2013.4101%2017.0616%2013.6859C17.4758%2013.9618%2017.5878%2014.5213%2017.3119%2014.9354L10.3805%2025.3396ZM19.32%2023.3469C19.3092%2024.7622%2018.1543%2025.9064%2016.7414%2025.9064C16.7348%2025.9064%2016.7283%2025.9063%2016.7216%2025.9062C16.0328%2025.901%2015.3872%2025.6279%2014.9037%2025.1371C14.3955%2024.6212%2014.1306%2023.9296%2014.1651%2023.2016C14.1939%2022.5966%2014.4384%2022.0156%2014.8513%2021.5724C15.3456%2021.0415%2016.0211%2020.7483%2016.7406%2020.7483C16.7463%2020.7483%2016.7519%2020.7483%2016.7575%2020.7484C18.1774%2020.7589%2019.3201%2021.9194%2019.3201%2023.3393L19.32%2023.3469Z'%20fill='%23E7937B'/%3e%3c/g%3e%3c/svg%3e" }, A = {
    presale: { label: "Black Friday:", text: "on a full year starts in", link: "Get my discount →" },
    sale: { label: "Black Friday:", text: "on a full year ends in", link: "Get my discount →" },
    lastday: { label: "Cyber Monday · last day:", text: "on a full year ends in", link: "Get my discount →" }
  }, I = (n) => {
    const e = A[n];
    return `
    <div class="bfb">
      <div class="bfb__row">
        <img class="bfb__fire" src="${B.fire}" alt="" />
        <span>${e.label}</span>
        <span class="bfb__off">−40%</span>
        <span>${e.text}</span>
      </div>
      <div class="bfb__row">
        <b class="bfb__time" data-bfb-time></b>
        <a class="bfb__link" href="${$}" data-bfb-link>${e.link}</a>
      </div>
    </div>`;
  };
  v({ name: "Black Friday header banner", dev: "YK" }), k("bf_banner");
  const w = "bf_banner";
  class P {
    constructor() {
      this.el = null, this.stopTicker = null, this.init();
    }
    async init() {
      if (D()) return;
      const e = p();
      if (e === "off") return;
      const t = await m("header.o-page__header");
      document.head.insertAdjacentHTML("beforeend", `<style class="bfb_style">${y}</style>`), this.render(e, t);
    }
    render(e, t) {
      var r, i, l;
      (r = this.stopTicker) == null || r.call(this), (i = this.el) == null || i.remove(), t.insertAdjacentHTML("beforebegin", I(e)), this.el = t.previousElementSibling;
      const a = this.el.querySelector("[data-bfb-time]");
      (l = this.el.querySelector("[data-bfb-link]")) == null || l.addEventListener("click", () => {
        f(w, "Banner link", "click", e);
      }), this.stopTicker = T(
        e,
        (d) => a.textContent = M(e, d),
        () => {
          var C, _;
          const d = p();
          d === "off" ? ((C = this.stopTicker) == null || C.call(this), (_ = this.el) == null || _.remove()) : this.render(d, t);
        },
        p
      ), f(w, "Banner view", "view", e), u(`Banner rendered: ${e}`);
    }
  }
  new P();
})();
//# sourceMappingURL=index.js.map
