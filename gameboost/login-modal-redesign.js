(function() {
  "use strict";
  const D = ({ name: u, dev: e }) => {
    console.log(
      `%c EXP: ${u} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, $ = (u) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", u, "variant_1"));
    }, 1e3);
  }, b = (u, e = "info") => {
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
    console.log(`%c>>> ${u}`, `${t} font-size: 16px; font-weight: 600`);
  }, O = `body.crs-modal-open-waiting
  [id*='reka-dialog-content'][data-state='open']:has(input[autofocus]) {
  display: none;
}

.crs-modal-bg {
  --font-family: 'Red Hat Display', sans-serif, ui-sans-serif, system-ui,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
    'Noto Color Emoji';
  display: flex;
  justify-content: center;
}

.crs-modal-bg-wrap {
  padding-block: 44px;
  font-family: var(--font-family);
  max-width: 285px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.crs-modal-image {
  border-radius: 8px;
}
.crs-modal-image img {
  width: 284px;
  height: 284px;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
}

.crs-modal-bg-wrap.buy {
  gap: 20px;
}

/*  */
[data-crs-modal-type='message'] {
  max-width: 588px !important;
}

[data-crs-modal-type='message'] button:has(.fa-xmark) {
  background: rgba(0, 0, 0, 0.25);
}

[data-crs-modal-type='message'] > div {
  border-radius: 0.75rem;
  background-color: #f7f9fb;
}
[data-crs-modal-type='message'] .flex.bg-card {
  margin: 0;
  flex-direction: column;
  background-color: #f7f9fb;
}

[data-crs-modal-type='message'] .crs-modal-bg {
  flex-direction: column;
  order: 0;
  width: 100%;
}

[data-crs-modal-type='message'] .crs-modal-bg ~ div:not(.hidden) {
  position: relative;
  margin-inline: auto;
  width: 100%;
  max-width: calc(100% - 28px);
  border-radius: 12px 12px 0 0;
  border: 1px solid #434a54;
  border-bottom: none;
  background: #12151c;
  box-shadow: 0 -4px 24px 0 rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
}

[data-crs-modal-type='message'] .crs-modal-bg ~ div:not(.hidden)::before {
  content: '';
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 57px;
  height: 57px;
  border-radius: 50%;
  border-top: 1px solid #434a54;
  background-color: #12151c;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" fill="none"><path fill="%23fff" d="M15.313 7.875H14v-1.75A6.132 6.132 0 0 0 7.875 0 6.132 6.132 0 0 0 1.75 6.125v1.75H.438A.437.437 0 0 0 0 8.313V19.25C0 20.215.785 21 1.75 21H14c.965 0 1.75-.785 1.75-1.75V8.313a.437.437 0 0 0-.438-.438Zm-6.128 9.14a.438.438 0 0 1-.435.485H7a.438.438 0 0 1-.435-.486l.276-2.482a1.73 1.73 0 0 1-.716-1.407c0-.965.785-1.75 1.75-1.75s1.75.785 1.75 1.75a1.73 1.73 0 0 1-.716 1.407l.276 2.482Zm2.19-9.14h-7v-1.75c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v1.75Z"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

[data-crs-modal-type='message'] h2 {
  color: #fafafa;
  text-align: center;
  font-family: 'Red Hat Display';
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
}

[data-crs-modal-type='message'] h2 + p {
  text-align: center;
}

.crs-modal-seller {
  display: grid;
  grid-template-columns: 44px auto auto;
  grid-template-areas:
    'seller-avatar seller-name seller-rating'
    'seller-avatar seller-reviews .';
  justify-content: start;
  column-gap: 12px;
  width: 100%;
  max-width: 100%;
  padding-block: 24px 0;
  padding-inline: 24px;
}

.crs-modal-title {
  color: #a1a1aa;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.6px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.crs-modal-seller-avatar {
  grid-area: seller-avatar;
  position: relative;
}

.crs-modal-seller-avatar img {
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
}

.crs-modal-seller-status {
  position: absolute;
  right: 0;
  bottom: 3px;
  width: 10px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 1px solid #0e1015;
}

.crs-modal-seller-status.online {
  background: #43b581;
}

.crs-modal-seller-status.offline {
  background: #747f8d;
}

.crs-modal-seller-name {
  display: flex;
  align-items: center;
  gap: 2px;
  grid-area: seller-name;
  color: #11121d;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}

.crs-modal-seller-rating {
  grid-area: seller-rating;
  margin-left: 12px;
  color: #4ade80;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}

.crs-modal-seller-reviews-count {
  grid-area: seller-reviews;
  color: rgba(17, 18, 29, 0.75);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.crs-modal-seller-message {
  margin-top: 24px;
  margin-bottom: -10px;
  padding-inline: 24px;
}

.crs-modal-seller-message-title {
  color: rgba(17, 18, 29, 0.9);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

.crs-modal-seller-message-content {
  margin-top: 8px;
  padding: 12px;
  padding-bottom: 53px;
  border-radius: 6px 6px 0 0;
  background: #f7f7f7;
  box-shadow: 0 0 0 1px #d4d4d4, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.crs-modal-seller-message-typing {
  color: #71717a;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  transition: opacity 0.2s ease-out;
}

.crs-modal-seller-message-typing.hidden {
  opacity: 0;
  pointer-events: none;
  position: absolute;
}

.crs-modal-seller-message-dot {
  display: inline-block;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: #71717a;
  border-radius: 50%;
  animation: blink 2s infinite;
}

.crs-modal-seller-message-dot:nth-child(2) {
  animation-delay: 0.3s;
}

.crs-modal-seller-message-dot:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes blink {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.crs-modal-message {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.crs-modal-message.show {
  position: static;
  opacity: 1;
  transform: translateY(0);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.crs-message-avatar img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
}

.crs-message-content {
  padding: 8px;
  border-radius: 5px;
  background: rgba(51, 129, 255, 0.1);
  box-shadow: 0 0 0 0 #f68717 inset, 0 0 0 1px rgba(96, 165, 250, 0.3) inset;
  color: #245feb;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}
@media (max-width: 768px) {
  div:has(> .crs-modal-bg) {
    flex-direction: column;
  }

  .crs-modal-bg {
    order: 0;
  }

  .crs-modal-bg-wrap:not(.crs-modal-seller) {
    flex-direction: row;
    gap: 16px;
    max-width: 400px;
    padding-bottom: 16px;
    border-bottom: 1px solid #1f2328;
  }

  .crs-modal-bg-wrap.crs-modal-seller {
    border-bottom: none;
    padding: 0;
    padding-top: 24px;
  }
  .crs-modal-image {
    flex-shrink: 0;
    border-radius: 6px;
  }
  .crs-modal-image img {
    width: 68px;
    height: 68px;
    border-radius: 6px;
    overflow: hidden;
  }

  .crs-modal-title {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }

  [data-crs-modal-type='message'] {
    top: auto;
    bottom: 0;
    transform: translateY(0);
  }

  .crs-modal-seller-message {
    padding-inline: 0;
  }

  .crs-modal-seller-message {
    margin-top: 16px;
  }

  [data-crs-modal-type='message'] h2 {
    font-size: 24px;
    line-height: 32px;
  }
}

@media (max-width: 640px) {
  .crs-modal-bg {
    padding-inline: 2rem;
  }

  [data-crs-modal-type='message'] .crs-modal-bg {
    padding-inline: 24px;
  }
  .crs-modal-bg-wrap {
    max-width: 100%;
  }
}
`;
  D({ name: "Іmproved registration / account creation flow", dev: "OS" }), $("exp_login_modal");
  const I = {
    regexpLinks: {
      items: /^https:\/\/gameboost\.com\/(?:[^/]+\/)?[^/]+\/items\/[A-Za-z0-9-]+\/?(?:\?.*)?(?:#.*)?$/
    }
  };
  class z {
    constructor() {
      this.pendingModalObservers = [], this.eventsAborder = new AbortController(), this.init();
    }
    init() {
      this.addStyles(), this.initChanges(), this.observePageChanges();
    }
    async waitLoginModal(e = "buy", t = "PDP", i = document, n = !1) {
      try {
        document.body.classList.add("crs-modal-open-waiting");
        const a = await new Promise((s, r) => {
          const l = '[id*="reka-dialog-content"][data-state="open"]:has(input[autofocus])', d = document.querySelector(l);
          if (d) {
            s(d);
            return;
          }
          const g = new MutationObserver(() => {
            const f = document.querySelector(l);
            if (f) {
              g.disconnect();
              const p = this.pendingModalObservers.indexOf(g);
              p > -1 && this.pendingModalObservers.splice(p, 1), s(f);
            }
          });
          this.pendingModalObservers.push(g), g.observe(document.documentElement, {
            childList: !0,
            subtree: !0
          });
        }), c = a.querySelectorAll("h2"), o = a.querySelector(
          'div[style*="background-image"]'
        );
        if (a.dataset.crsModalType = e, c.forEach((s) => {
          console.log("login title", s), s && s.textContent === "Login" && (s.innerHTML = e === "buy" ? "Login to Buy and Save your Purchase" : "Login to Unlock the <br> Chat with Seller"), s && s.textContent === "Create Account" && (s.innerHTML = e === "buy" ? "Create an Account to Save your Purchase" : "Create an Account <br> to Chat with Seller");
        }), e === "buy") {
          if (o) {
            const { title: s, imageSrc: r, backgroundClasses: l } = this.getProductData(
              t,
              i
            );
            if (console.log("Product Data:", { title: s, imageSrc: r }), !r)
              return;
            o.style.backgroundImage = "none", o.classList.add("crs-modal-bg"), o.innerHTML = /* HTML */
            `
            <div class="crs-modal-bg-wrap buy">
              <div
                class="crs-modal-image  ${l || ""}"
              >
                <img src="${r}" alt="" width="284" height="284" />
              </div>

              <div class="crs-modal-title">${s}</div>
            </div>
          `;
          }
        } else {
          const {
            avatarSrc: s,
            sellerName: r,
            sellerTier: l,
            isOnline: d,
            statusText: g,
            isVerified: f,
            rating: p,
            reviewCount: v,
            reviewText: y,
            totalSales: S
          } = this.getSellerData();
          if (o)
            if (o.style.backgroundImage = "none", o.classList.add("crs-modal-bg"), o.innerHTML = /* HTML */
            `
            <div class="crs-modal-bg-wrap crs-modal-seller">
              <div class="crs-modal-seller-avatar">
                <img
                  src="${s}"
                  alt="${r}"
                  width="44"
                  height="44"
                />
                <div
                  class="crs-modal-seller-status${d ? " online" : " offline"}"
                >
                  <span class="sr-only"> ${g} </span>
                </div>
              </div>
              <div class="crs-modal-seller-name">
                ${r}
                ${f ? (
              /* HTML */
              `<i
                      class="text-blue-500 fa-solid fa-badge-check"
                    ></i>`
            ) : ""}
              </div>
              <div class="crs-modal-seller-reviews-count">${y}</div>

              <div class="crs-modal-seller-rating">
                <i class="mr-0.5 fa-solid fa-thumbs-up"></i>${p}%
              </div>
            </div>
            <div class="crs-modal-seller-message">
              <div class="crs-modal-seller-message-title">Message</div>
              <div class="crs-modal-seller-message-content">
                <div class="crs-modal-seller-message-typing">
                  ${r} is typing
                  <span class="crs-modal-seller-message-dots">
                    <span class="crs-modal-seller-message-dot"></span>
                    <span class="crs-modal-seller-message-dot"></span>
                    <span class="crs-modal-seller-message-dot"></span>
                  </span>
                </div>
                <div class="crs-modal-message">
                  <div class="crs-message-avatar">
                    <img src="${s}" alt="${r}" />
                  </div>
                  <div class="crs-message-content">
                    hey, what question do you have ?
                  </div>
                </div>
              </div>
            </div>
          `, n) {
              const m = o.querySelector(
                ".crs-modal-seller-message-typing"
              ), h = o.querySelector(
                ".crs-modal-message"
              );
              m && m.classList.add("hidden"), h && h.classList.add("show");
            } else
              setTimeout(() => {
                const m = o.querySelector(
                  ".crs-modal-seller-message-typing"
                ), h = o.querySelector(
                  ".crs-modal-message"
                );
                m && m.classList.add("hidden"), h && h.classList.add("show");
              }, 3e3);
        }
      } catch (a) {
        if (a instanceof Error && a.message.includes("cancelled"))
          return;
        console.error("Error waiting for modal:", a);
      } finally {
        setTimeout(() => {
          document.body.classList.remove("crs-modal-open-waiting");
        }, 100);
      }
    }
    getProductData(e = "PDP", t = document) {
      var i, n;
      if (e === "PDP") {
        const a = this.getPdpTitle(), c = this.getPdpImageSrc();
        return { title: a, imageSrc: c };
      }
      if (e === "PLP") {
        const a = t.querySelector(
          ".text-sm.text-foreground\\/80.line-clamp-2.h-\\[40px\\]"
        ), c = t.querySelector(
          'img[src*="https://gameboost.com/cdn-cgi/image"]'
        );
        return {
          title: a && a.textContent || "",
          imageSrc: c ? c.src : ""
        };
      }
      if (e === "MODAL") {
        const a = t.querySelector(
          ".text-lg.font-semibold.font-display"
        ), c = t.querySelector(
          'img[src*="steamcommunity"]'
        ), o = (n = (i = t.querySelector(
          'img[src*="steamcommunity"]'
        )) == null ? void 0 : i.parentElement) == null ? void 0 : n.className, s = (() => {
          if (!o) return "";
          const r = o.split(/\s+/), l = r.findIndex((g) => g === "bg-gradient");
          if (l === -1) return "";
          const d = [r[l]];
          return l + 1 < r.length && d.push(r[l + 1]), d.join(" ");
        })();
        return {
          title: a && a.innerHTML || "",
          imageSrc: c ? c.src : "",
          backgroundClasses: s
        };
      }
    }
    getSellerData() {
      var C, q, L, M, P, T, A;
      const e = document.querySelector(
        '.bg-card:has(a[href*="seller"])'
      ), t = e == null ? void 0 : e.querySelector('img[src*="avatar"]'), i = e == null ? void 0 : e.querySelector(
        'a[href*="seller"] .text-sm.font-medium.truncate.text-foreground'
      ), n = e == null ? void 0 : e.querySelector(
        ".text-xs.truncate.text-muted-foreground"
      ), a = ((C = n == null ? void 0 : n.textContent) == null ? void 0 : C.trim()) || "", c = e == null ? void 0 : e.querySelector(
        ".bg-success-light.ring-success-ring"
      ), o = !!c, s = ((q = c == null ? void 0 : c.textContent) == null ? void 0 : q.trim().replace(/\s+/g, " ")) || "", r = !!(i != null && i.querySelector(".fa-badge-check")), l = (L = e == null ? void 0 : e.querySelector(".fa-thumbs-up")) == null ? void 0 : L.parentElement, g = (((M = l == null ? void 0 : l.textContent) == null ? void 0 : M.trim()) || "").match(/([\d.]+)%/), f = g ? parseFloat(g[1]) : 0, p = Array.from(
        (e == null ? void 0 : e.querySelectorAll(".text-muted-foreground")) || []
      ).find((w) => {
        var x;
        return (x = w.textContent) == null ? void 0 : x.includes("Reviews");
      }), v = ((P = p == null ? void 0 : p.textContent) == null ? void 0 : P.trim()) || "", y = v.match(/([\d,]+)\s+Reviews/), S = y ? y[1].replace(/,/g, "") : "0", m = Array.from(
        (e == null ? void 0 : e.querySelectorAll("dd")) || []
      ).find((w) => {
        var x;
        return (x = w.textContent) == null ? void 0 : x.includes("Sold");
      }), k = (((T = m == null ? void 0 : m.textContent) == null ? void 0 : T.trim()) || "").match(/([\d,]+)\s+Sold/), j = k ? k[1].replace(/,/g, "") : "0";
      return {
        avatarSrc: t ? t.src : "",
        sellerName: i && ((A = i.textContent) == null ? void 0 : A.replace(/\s*\u{f058}\s*$/u, "").trim()) || "",
        sellerTier: a,
        isOnline: o,
        statusText: s,
        isVerified: r,
        rating: f,
        reviewCount: S,
        reviewText: v,
        totalSales: j
      };
    }
    getPdpTitle() {
      const e = document.querySelector("h1");
      return e && e.textContent || "";
    }
    getPdpImageSrc() {
      var i;
      const e = document.querySelector(
        '[aria-roledescription="carousel"]:not(:has(a))'
      ), t = ((i = document.querySelector("h1")) == null ? void 0 : i.textContent) || "";
      if (e) {
        const n = e.querySelector("img");
        if (n)
          return n.src;
      }
      if (location.href.match(I.regexpLinks.items)) {
        const n = document.head.querySelector(
          'meta[property="og:image"]'
        );
        if (n)
          return n.content;
      }
      if (document.querySelector('img[alt="' + t + '"]')) {
        const n = document.querySelector(
          'img[alt="' + t + '"]'
        );
        if (n)
          return n.src;
      }
      return null;
    }
    async initChanges() {
      var e;
      (e = this.eventsAborder) == null || e.abort(), this.eventsAborder = new AbortController(), document.addEventListener(
        "click",
        (t) => {
          var a, c, o, s, r, l;
          const i = t.target;
          if (i.closest("nav") || !((c = (a = document.querySelector("nav button:has(.fa-arrow-right)")) == null ? void 0 : a.textContent) != null && c.includes("Log in"))) return;
          const n = i.closest("button");
          if (n && (n.querySelector(".fa-cart-shopping-fast") || (o = n == null ? void 0 : n.textContent) != null && o.includes("Buy") && !n.closest("a") && !n.closest('[data-state="open"]') || (s = n.parentElement) != null && s.classList.contains("fixed") && !n.querySelector(".fa-messages")) && (b("Detected click on buy button, waiting for login modal..."), this.waitLoginModal("buy", "PDP")), n && n.classList.contains("text-foreground") && n.closest("[data-crs-modal-type]") && (b(
            "Detected click on login modal button, waiting for login modal..."
          ), this.waitLoginModal(
            n.closest("[data-crs-modal-type]").dataset.crsModalType,
            "PDP",
            document,
            !0
            // Skip animation when switching between login/signup
          )), (n && n.querySelector(".fa-message") || n != null && n.querySelector(".fa-messages") && n.closest(".fixed")) && (b("Detected click on message button, waiting for login modal..."), this.waitLoginModal("message")), n && n.querySelector(".fa-arrow-right") && n.closest("a")) {
            b("Button is inside a link, ignoring click event.");
            const d = n.closest("a");
            d && this.waitLoginModal("buy", "PLP", d);
          }
          if (n && ((l = (r = n.textContent) == null ? void 0 : r.toLowerCase()) != null && l.includes("buy")) && n.closest('[data-state="open"]')) {
            b(
              "Detected click on buy button in modal, waiting for login modal..."
            );
            const d = n.closest('[data-state="open"]');
            this.waitLoginModal("buy", "MODAL", d);
          }
        },
        {
          signal: this.eventsAborder.signal
        }
      );
    }
    observePageChanges() {
      var t;
      (t = this.pageObserver) == null || t.disconnect();
      let e = location.href;
      this.pageObserver = new MutationObserver(() => {
        location.href !== e && (e = location.href, this.pendingModalObservers.forEach((i) => i.disconnect()), this.pendingModalObservers = [], this.initChanges());
      }), this.pageObserver.observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = O, document.head.appendChild(e);
    }
  }
  new z();
})();
