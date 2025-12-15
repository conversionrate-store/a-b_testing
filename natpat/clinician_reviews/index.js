(function() {
  "use strict";
  const d = (r) => new Promise((e) => {
    const t = document.querySelector(r);
    t && e(t);
    const s = new MutationObserver(() => {
      const a = document.querySelector(r);
      a && (e(a), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), m = ({ name: r, dev: e }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, f = async (r) => {
    const e = (t) => new Promise((s, a) => {
      const p = t.split(".").pop();
      if (p === "js") {
        if (Array.from(document.scripts).map(
          (n) => n.src.toLowerCase()
        ).includes(t.toLowerCase()))
          return i(`Script ${t} allready downloaded!`, "success"), s("");
        const o = document.createElement("script");
        o.src = t, o.onload = s, o.onerror = a, o.async = !0, document.head.appendChild(o);
      } else if (p === "css") {
        if (Array.from(document.styleSheets).map(
          (n) => {
            var l;
            return (l = n.href) == null ? void 0 : l.toLowerCase();
          }
        ).includes(t.toLowerCase()))
          return i(`Style ${t} allready downloaded!`, "success"), s("");
        const o = document.createElement("link");
        o.rel = "stylesheet", o.href = t, o.onload = s, o.onerror = a, document.head.appendChild(o);
      }
    });
    for (const t of r)
      i(t), await e(t), i(`Loaded librari ${t}`);
    i("All libraries loaded!", "success");
  }, h = (r) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, i = (r, e = "info") => {
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
  }, c = {
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
  }, u = "";
  m({ name: "Reviews from clinicians", dev: "OS" }), h("exp-clinician-reviews");
  const w = (r) => r in c;
  class y {
    constructor() {
      this.init();
    }
    init() {
      w(location.pathname) && (i("Injecting testimonials frame..."), this.injectFrame(), this.addStyles());
    }
    async injectFrame() {
      const e = await d("#judgeme_product_reviews");
      if (!e) return;
      const t = e.closest("section");
      if (console.log("targetSection", t), !t) return;
      const s = location.pathname, a = c[s];
      await f([a.scriptUrl + ".js"]), console.log("Loaded testimonials script"), t.insertAdjacentHTML(
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
      );
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = u, document.head.appendChild(e);
    }
  }
  new y();
})();
