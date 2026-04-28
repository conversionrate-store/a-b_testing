(function() {
  "use strict";
  const s = (t) => new Promise((e) => {
    const n = document.querySelector(t);
    n && e(n);
    const o = new MutationObserver(() => {
      const c = document.querySelector(t);
      c && (e(c), o.disconnect());
    });
    o.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  });
  (({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  })({ name: "Not Buy Now", dev: "YK" });
  class r {
    constructor() {
      this.init();
    }
    async init() {
      await s("body"), document.head.insertAdjacentHTML(
        "beforeend",
        `<style class="crs-not-buy-now-style">.crs-buy-now-btn {
				display: none !important;
			}</style>`
      );
    }
  }
  new r();
})();
//# sourceMappingURL=index.js.map
