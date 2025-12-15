(function() {
  "use strict";
  const m = (r, e, t, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: e,
      event_type: t,
      event_loc: o
    }), n(`Event: ${r} | ${e} | ${t} | ${o}`, "success");
  }, f = (r) => new Promise((e) => {
    const t = document.querySelector(r);
    t && e(t);
    const o = new MutationObserver(() => {
      const a = document.querySelector(r);
      a && (e(a), o.disconnect());
    });
    o.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), h = ({ name: r, dev: e }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, u = async (r) => {
    const e = (t) => new Promise((o, a) => {
      const p = t.split(".").pop();
      if (p === "js") {
        if (Array.from(document.scripts).map(
          (i) => i.src.toLowerCase()
        ).includes(t.toLowerCase()))
          return n(`Script ${t} allready downloaded!`, "success"), o("");
        const s = document.createElement("script");
        s.src = t, s.onload = o, s.onerror = a, s.async = !0, document.head.appendChild(s);
      } else if (p === "css") {
        if (Array.from(document.styleSheets).map(
          (i) => {
            var d;
            return (d = i.href) == null ? void 0 : d.toLowerCase();
          }
        ).includes(t.toLowerCase()))
          return n(`Style ${t} allready downloaded!`, "success"), o("");
        const s = document.createElement("link");
        s.rel = "stylesheet", s.href = t, s.onload = o, s.onerror = a, document.head.appendChild(s);
      }
    });
    for (const t of r)
      n(t), await e(t), n(`Loaded librari ${t}`);
    n("All libraries loaded!", "success");
  }, w = (r) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, y = (r, e, t, o, a = 1e3, p = 0.5) => {
    let c, s;
    c = new IntersectionObserver(
      function(i) {
        i[0].isIntersecting === !0 ? s = setTimeout(() => {
          m(
            e,
            i[0].target.dataset.visible || o,
            "view",
            t
          ), c.disconnect();
        }, a) : (n("Element is not fully visible", "warn"), clearTimeout(s));
      },
      { threshold: [p] }
    );
    {
      const i = document.querySelector(r);
      i && c.observe(i);
    }
  }, n = (r, e = "info") => {
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
    console.log(`%c>>> ${r}`, `${t} font-size: 16px; font-weight: 600`);
  }, l = {
    "/en-au/products/allergypatch-allergy-relief-stickers": {
      scriptUrl: "https://app.thefrontrowhealth.com/api/widgets/script?presentation_type=qual&product_id=2122",
      frame: (
        /* HTML */
        `
      <iframe
        id="frontrow-testimonials"
        class="iframe-frontrow-testimonials"
        frameborder="0"
        src="https://app.thefrontrowhealth.com/api/widgets?presentation_type=qual&product_id=2122"
      ></iframe>
    `
      )
    },
    "/en-au/products/sunnypatch": {
      scriptUrl: "https://app.thefrontrowhealth.com/api/widgets/script?presentation_type=qual&product_id=2125",
      frame: (
        /* HTML */
        `
      <iframe
        id="frontrow-testimonials"
        class="iframe-frontrow-testimonials"
        frameborder="0"
        src="https://app.thefrontrowhealth.com/api/widgets?presentation_type=qual&product_id=2125"
      ></iframe>
    `
      )
    },
    "/en-au/products/pack-magic-patch-bundles": {
      scriptUrl: "https://app.thefrontrowhealth.com/api/widgets/script?presentation_type=qual&product_id=2123",
      frame: (
        /* HTML */
        `
      <iframe
        id="frontrow-testimonials"
        class="iframe-frontrow-testimonials"
        frameborder="0"
        src="https://app.thefrontrowhealth.com/api/widgets?presentation_type=qual&product_id=2123"
      ></iframe>
    `
      )
    },
    "/en-au/products/focuspatch-focus-enhancing-stickers": {
      scriptUrl: "https://app.thefrontrowhealth.com/api/widgets/script?presentation_type=qual&product_id=2090",
      frame: (
        /* HTML */
        `
      <iframe
        id="frontrow-testimonials"
        class="iframe-frontrow-testimonials"
        frameborder="0"
        src="https://app.thefrontrowhealth.com/api/widgets?presentation_type=qual&product_id=2090"
      ></iframe>
    `
      )
    },
    "/en-au/products/buzzpatch-bundles": {
      scriptUrl: "https://app.thefrontrowhealth.com/api/widgets/script?presentation_type=qual&product_id=2119",
      frame: (
        /* HTML */
        `
      <iframe
        id="frontrow-testimonials"
        class="iframe-frontrow-testimonials"
        frameborder="0"
        src="https://app.thefrontrowhealth.com/api/widgets?presentation_type=qual&product_id=2119"
      ></iframe>
    `
      )
    },
    "/en-au/products/stuffypatch": {
      scriptUrl: "https://app.thefrontrowhealth.com/api/widgets/script?presentation_type=qual&product_id=2121",
      frame: (
        /* HTML */
        `
      <iframe
        id="frontrow-testimonials"
        class="iframe-frontrow-testimonials"
        frameborder="0"
        src="https://app.thefrontrowhealth.com/api/widgets?presentation_type=qual&product_id=2121"
      ></iframe>
    `
      )
    },
    "/en-au/products/sleepypatch-sleep-promoting-stickers": {
      scriptUrl: "https://app.thefrontrowhealth.com/api/widgets/script?presentation_type=qual&product_id=2088",
      frame: (
        /* HTML */
        `
      <iframe
        id="frontrow-testimonials"
        class="iframe-frontrow-testimonials"
        frameborder="0"
        src="https://app.thefrontrowhealth.com/api/widgets?presentation_type=qual&product_id=2088"
      ></iframe>
    `
      )
    },
    "/en-au/products/zenpatch-mood-calming-stickers": {
      scriptUrl: "https://app.thefrontrowhealth.com/api/widgets/script?presentation_type=qual&product_id=2089",
      frame: (
        /* HTML */
        `
      <iframe
        id="frontrow-testimonials"
        class="iframe-frontrow-testimonials"
        frameborder="0"
        src="https://app.thefrontrowhealth.com/api/widgets?presentation_type=qual&product_id=2089"
      ></iframe>
    `
      )
    }
  }, _ = "";
  h({ name: "Reviews from clinicians", dev: "OS" }), w("exp-clin-rev");
  const g = (r) => r in l;
  class b {
    constructor() {
      this.init();
    }
    init() {
      g(location.pathname) && (this.injectFrame(), this.addStyles());
    }
    async injectFrame() {
      const e = await f("#judgeme_product_reviews");
      if (!e) return;
      const t = e.closest("section");
      if (!t) return;
      const o = location.pathname, a = l[o];
      await u([a.scriptUrl + ".js"]), t.insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        `<section class="fr-testimonials">
        <style>
          iframe.iframe-frontrow-testimonials {
            width: 100%;
          }
          iframe.iframe-modal-testimonials {
            z-index: 99999998;
          }
        </style>
        <div class="page-width">${a.frame}</div>
      </section>`
      ), y(
        ".fr-testimonials",
        "exp_clin_rev_view_1",
        "Clinician Reviewed",
        "Visibility",
        0
      );
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = _, document.head.appendChild(e);
    }
  }
  new b();
})();
