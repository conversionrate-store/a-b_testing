(function() {
  "use strict";
  const $ = (m) => new Promise((e) => {
    const t = document.querySelector(m);
    t && e(t);
    const o = new MutationObserver(() => {
      const n = document.querySelector(m);
      n && (e(n), o.disconnect());
    });
    o.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), D = ({ name: m, dev: e }) => {
    console.log(
      `%c EXP: ${m} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, I = (m) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", m, "variant_1"));
    }, 1e3);
  }, f = (m, e = "info") => {
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
    console.log(`%c>>> ${m}`, `${t} font-size: 16px; font-weight: 600`);
  }, O = `:root {
  --crs-color-bg-card: #f7f9fb;
  --crs-color-close-btn: rgba(0, 0, 0, 0.25);
  --crs-color-close-2btn: #bfbfbf;
  --crs-color-border: #434a54;
  --crs-color-bg-dark: #12151c;
  --crs-color-bg-input: #f7f7f7;
  --crs-color-border-input: #d4d4d4;
  --crs-color-text-primary: #11121d;
  --crs-color-text-secondary: rgba(17, 18, 29, 0.75);
  --crs-color-text-tertiary: rgba(17, 18, 29, 0.9);
  --crs-color-text-muted: #71717a;
  --crs-color-text-title: #a1a1aa;
  --crs-color-text-heading: #fafafa;
  --crs-color-status-online: #43b581;
  --crs-color-status-offline: #747f8d;
  --crs-color-status-border: #0e1015;
  --crs-color-rating: #4ade80;
  --crs-color-message-bg: rgba(51, 129, 255, 0.1);
  --crs-color-message-border: rgba(96, 165, 250, 0.3);
  --crs-color-message-text: #245feb;
  --crs-color-border-mobile: #1f2328;
  --crs-color-shadow: rgba(0, 0, 0, 0.32);
  --crs-color-shadow-light: rgba(0, 0, 0, 0.05);
  --crs-color-text-muted-foreground: #a1a1aa;
  --crs-color-text-foreground: #fafafa;
  --font-family: 'Red Hat Display', sans-serif, ui-sans-serif, system-ui,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
    'Noto Color Emoji';
}

html.light {
  --crs-color-text-title: #11121d;
}

body.crs-modal-open-waiting
  [id*='reka-dialog-content'][data-state='open']:has(input[autofocus]) {
  display: none;
}

.crs-modal-bg {
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
html.light [data-crs-modal-type='buy'] button:has(.fa-xmark) {
  background: var(--crs-color-close-btn);
}

[data-crs-modal-type='message'] button:has(.fa-xmark) {
  background: var(--crs-color-close-btn);
}

[data-crs-modal-type='message'] > div {
  max-height: 90dvh;
  border-radius: 0.75rem;
  background-color: var(--crs-color-bg-card);
}
[data-crs-modal-type='message'] .flex.bg-card {
  margin: 0;
  flex-direction: column;
  background-color: var(--crs-color-bg-card);
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
  border: 1px solid var(--crs-color-border);
  border-bottom: none;
  background: var(--crs-color-bg-dark);
  box-shadow: 0 -4px 24px 0 var(--crs-color-shadow);
  backdrop-filter: blur(2px);
}

[data-crs-modal-type='message']
  .crs-modal-bg
  ~ div:not(.hidden)
  .text-muted-foreground {
  color: var(--crs-color-text-muted-foreground);
}

[data-crs-modal-type='message']
  .crs-modal-bg
  ~ div:not(.hidden)
  .text-foreground {
  color: var(--crs-color-text-foreground);
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
  border-top: 1px solid var(--crs-color-border);
  background-color: var(--crs-color-bg-dark);
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" fill="none"><path fill="%23fff" d="M15.313 7.875H14v-1.75A6.132 6.132 0 0 0 7.875 0 6.132 6.132 0 0 0 1.75 6.125v1.75H.438A.437.437 0 0 0 0 8.313V19.25C0 20.215.785 21 1.75 21H14c.965 0 1.75-.785 1.75-1.75V8.313a.437.437 0 0 0-.438-.438Zm-6.128 9.14a.438.438 0 0 1-.435.485H7a.438.438 0 0 1-.435-.486l.276-2.482a1.73 1.73 0 0 1-.716-1.407c0-.965.785-1.75 1.75-1.75s1.75.785 1.75 1.75a1.73 1.73 0 0 1-.716 1.407l.276 2.482Zm2.19-9.14h-7v-1.75c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v1.75Z"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

[data-crs-modal-type='message'] h2 {
  color: var(--crs-color-text-heading);
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
    'seller-avatar seller-reviews seller-reviews';
  justify-content: start;
  column-gap: 12px;
  width: 100%;
  max-width: 100%;
  padding-block: 24px 0;
  padding-inline: 24px;
}

.crs-modal-title {
  color: var(--crs-color-text-title);
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
  border: 1px solid var(--crs-color-status-border);
}

.crs-modal-seller-status.online {
  background: var(--crs-color-status-online);
}

.crs-modal-seller-status.offline {
  background: var(--crs-color-status-offline);
}

.crs-modal-seller-name {
  display: flex;
  align-items: center;
  gap: 2px;
  grid-area: seller-name;
  color: var(--crs-color-text-primary);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}

.crs-modal-seller-rating {
  grid-area: seller-rating;
  margin-left: 12px;
  color: var(--crs-color-rating);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}

.crs-modal-seller-reviews-count {
  grid-area: seller-reviews;
  color: var(--crs-color-text-secondary);
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
  color: var(--crs-color-text-tertiary);
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
  background: var(--crs-color-bg-input);
  box-shadow: 0 0 0 1px var(--crs-color-border-input),
    0 1px 2px 0 var(--crs-color-shadow-light);
}

.crs-modal-seller-message-typing {
  color: var(--crs-color-text-muted);
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
  background: var(--crs-color-text-muted);
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
  background: var(--crs-color-message-bg);
  box-shadow: 0 0 0 0 #f68717 inset,
    0 0 0 1px var(--crs-color-message-border) inset;
  color: var(--crs-color-message-text);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}

.crs-close-mobile {
  display: none;
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
    border-bottom: 1px solid var(--crs-color-border-mobile);
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

  .crs-close-mobile {
    display: inline-flex;
    top: -45px;
    user-select: none;
    pointer-events: none;
    background: var(--crs-color-close-2btn) !important;
  }

  [data-crs-modal-type='message'] button:has(.fa-xmark):not(.crs-close-mobile) {
    display: none;
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
  D({ name: "Іmproved registration / account creation flow", dev: "OS" }), I("exp_login_modal");
  const j = {
    regexpLinks: {
      items: /^https:\/\/gameboost\.com\/(?:[^/]+\/)?[^/]+\/items\/[A-Za-z0-9-]+\/?(?:\?.*)?(?:#.*)?$/
    }
  };
  class z {
    constructor() {
      this.pendingModalObservers = [], this.eventsAborder = new AbortController(), this.init();
    }
    init() {
      this.checkUserLoggedIn().then((e) => {
        e || (f("User is logged out"), this.initChanges(), this.observePageChanges());
      });
    }
    async checkUserLoggedIn() {
      var e, t;
      return await $("nav button"), !((t = (e = document.querySelector("nav button:has(.fa-arrow-right)")) == null ? void 0 : e.textContent) != null && t.includes("Log in"));
    }
    async waitLoginModal(e = "buy", t = "PDP", o = document, n = !1) {
      try {
        document.body.classList.add("crs-modal-open-waiting");
        const r = await new Promise((s, i) => {
          const l = '[id*="reka-dialog-content"][data-state="open"]:has(input[autofocus])', u = document.querySelector(l);
          if (u) {
            s(u);
            return;
          }
          const d = new MutationObserver(() => {
            const b = document.querySelector(l);
            if (b) {
              d.disconnect();
              const p = this.pendingModalObservers.indexOf(d);
              p > -1 && this.pendingModalObservers.splice(p, 1), s(b);
            }
          });
          this.pendingModalObservers.push(d), d.observe(document.documentElement, {
            childList: !0,
            subtree: !0
          });
        }), c = r.querySelectorAll("h2"), a = r.querySelector(
          'div[style*="background-image"]'
        );
        if (r.dataset.crsModalType = e, c.forEach((s) => {
          s && s.textContent === "Login" && (s.innerHTML = e === "buy" ? "Login to Buy and Save your Purchase" : "Login to Unlock the <br> Chat with Seller"), s && s.textContent === "Create Account" && (s.innerHTML = e === "buy" ? "Create an Account to Save your Purchase" : "Create an Account <br> to Chat with Seller");
        }), e === "buy") {
          if (a) {
            const { title: s, imageSrc: i, backgroundClasses: l } = this.getProductData(
              t,
              o
            );
            if (!i)
              return;
            a.style.backgroundImage = "none", a.classList.add("crs-modal-bg"), a.innerHTML = /* HTML */
            `
            <div class="crs-modal-bg-wrap buy">
              <div
                class="crs-modal-image  ${l || ""}"
              >
                <img src="${i}" alt="" width="284" height="284" />
              </div>

              <div class="crs-modal-title">${s}</div>
            </div>
          `;
          }
        } else {
          const {
            avatarSrc: s,
            sellerName: i,
            sellerTier: l,
            isOnline: u,
            statusText: d,
            isVerified: b,
            rating: p,
            reviewCount: v,
            reviewText: y,
            totalSales: S
          } = this.getSellerData();
          if (a)
            if (a.style.backgroundImage = "none", r.querySelector(".crs-close-mobile") || r.insertAdjacentHTML(
              "afterbegin",
              '<button type="button" class="crs-close-mobile inline-flex items-center justify-center text-sm transition-colors focus:outline focus:outline-offset-2 focus-visible:outline outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden font-medium active:translate-y-px whitespace-nowrap bg-secondary-light hover:bg-secondary-light-hover text-secondary-light-foreground focus:outline-secondary absolute top-3 right-3 z-10 p-1 w-7 h-7 rounded-full md:text-white/80 sm:w-7 sm:h-7"><span class="sr-only">Close</span><i class="fa-solid fa-xmark"></i></button>'
            ), a.classList.add("crs-modal-bg"), a.innerHTML = /* HTML */
            `
            <div class="crs-modal-bg-wrap crs-modal-seller">
              <div class="crs-modal-seller-avatar">
                <img
                  src="${s}"
                  alt="${i}"
                  width="44"
                  height="44"
                />
                <div
                  class="crs-modal-seller-status${u ? " online" : " offline"}"
                >
                  <span class="sr-only"> ${d} </span>
                </div>
              </div>
              <div class="crs-modal-seller-name">
                ${i}
                ${b ? (
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
                  ${i} is typing
                  <span class="crs-modal-seller-message-dots">
                    <span class="crs-modal-seller-message-dot"></span>
                    <span class="crs-modal-seller-message-dot"></span>
                    <span class="crs-modal-seller-message-dot"></span>
                  </span>
                </div>
                <div class="crs-modal-message">
                  <div class="crs-message-avatar">
                    <img src="${s}" alt="${i}" />
                  </div>
                  <div class="crs-message-content">
                    hey, what question do you have ?
                  </div>
                </div>
              </div>
            </div>
          `, n) {
              const g = a.querySelector(
                ".crs-modal-seller-message-typing"
              ), h = a.querySelector(
                ".crs-modal-message"
              );
              g && g.classList.add("hidden"), h && h.classList.add("show");
            } else
              setTimeout(() => {
                const g = a.querySelector(
                  ".crs-modal-seller-message-typing"
                ), h = a.querySelector(
                  ".crs-modal-message"
                );
                g && g.classList.add("hidden"), h && h.classList.add("show");
              }, 4e3);
        }
      } catch (r) {
        if (r instanceof Error && r.message.includes("cancelled"))
          return;
        console.error("Error waiting for modal:", r);
      } finally {
        setTimeout(() => {
          document.body.classList.remove("crs-modal-open-waiting");
        }, 100);
      }
    }
    getProductData(e = "PDP", t = document) {
      var o, n;
      if (e === "PDP") {
        const r = this.getPdpTitle(), c = this.getPdpImageSrc();
        return { title: r, imageSrc: c };
      }
      if (e === "PLP") {
        const r = t.querySelector(
          ".text-sm.text-foreground\\/80.line-clamp-2.h-\\[40px\\]"
        ), c = t.querySelector(
          'img[src*="https://gameboost.com/cdn-cgi/image"]'
        );
        return {
          title: r && r.textContent || "",
          imageSrc: c ? c.src : ""
        };
      }
      if (e === "MODAL") {
        const r = t.querySelector(
          ".text-lg.font-semibold.font-display"
        ), c = t.querySelector(
          'img[src*="steamcommunity"]'
        ), a = (n = (o = t.querySelector(
          'img[src*="steamcommunity"]'
        )) == null ? void 0 : o.parentElement) == null ? void 0 : n.className, s = (() => {
          if (!a) return "";
          const i = a.split(/\s+/), l = i.findIndex((d) => d === "bg-gradient");
          if (l === -1) return "";
          const u = [i[l]];
          return l + 1 < i.length && u.push(i[l + 1]), u.join(" ");
        })();
        return {
          title: r && r.innerHTML || "",
          imageSrc: c ? c.src : "",
          backgroundClasses: s
        };
      }
    }
    getSellerData() {
      var C, L, q, M, P, T, A;
      const e = document.querySelector(
        '.bg-card:has(a[href*="seller"])'
      ), t = e == null ? void 0 : e.querySelector('img[src*="avatar"]'), o = e == null ? void 0 : e.querySelector(
        'a[href*="seller"] .text-sm.font-medium.truncate.text-foreground'
      ), n = e == null ? void 0 : e.querySelector(
        ".text-xs.truncate.text-muted-foreground"
      ), r = ((C = n == null ? void 0 : n.textContent) == null ? void 0 : C.trim()) || "", c = e == null ? void 0 : e.querySelector(
        ".bg-success-light.ring-success-ring"
      ), a = !!c, s = ((L = c == null ? void 0 : c.textContent) == null ? void 0 : L.trim().replace(/\s+/g, " ")) || "", i = !!(o != null && o.querySelector(".fa-badge-check")), l = (q = e == null ? void 0 : e.querySelector(".fa-thumbs-up")) == null ? void 0 : q.parentElement, d = (((M = l == null ? void 0 : l.textContent) == null ? void 0 : M.trim()) || "").match(/([\d.]+)%/), b = d ? parseFloat(d[1]) : 0, p = Array.from(
        (e == null ? void 0 : e.querySelectorAll(".text-muted-foreground")) || []
      ).find((w) => {
        var x;
        return (x = w.textContent) == null ? void 0 : x.includes("Reviews");
      }), v = ((P = p == null ? void 0 : p.textContent) == null ? void 0 : P.trim()) || "", y = v.match(/([\d,]+)\s+Reviews/), S = y ? y[1].replace(/,/g, "") : "0", g = Array.from(
        (e == null ? void 0 : e.querySelectorAll("dd")) || []
      ).find((w) => {
        var x;
        return (x = w.textContent) == null ? void 0 : x.includes("Sold");
      }), k = (((T = g == null ? void 0 : g.textContent) == null ? void 0 : T.trim()) || "").match(/([\d,]+)\s+Sold/), H = k ? k[1].replace(/,/g, "") : "0";
      return {
        avatarSrc: t ? t.src : "",
        sellerName: o && ((A = o.textContent) == null ? void 0 : A.replace(/\s*\u{f058}\s*$/u, "").trim()) || "",
        sellerTier: r,
        isOnline: a,
        statusText: s,
        isVerified: i,
        rating: b,
        reviewCount: S,
        reviewText: v,
        totalSales: H
      };
    }
    getPdpTitle() {
      const e = document.querySelector("h1");
      return e && e.textContent || "";
    }
    getPdpImageSrc() {
      var o;
      const e = document.querySelector(
        '[aria-roledescription="carousel"]:not(:has(a))'
      ), t = ((o = document.querySelector("h1")) == null ? void 0 : o.textContent) || "";
      if (e) {
        const n = e.querySelector("img");
        if (n)
          return n.src;
      }
      if (location.href.match(j.regexpLinks.items)) {
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
      (e = this.eventsAborder) == null || e.abort(), this.eventsAborder = new AbortController(), !location.href.includes("checkout") && (this.addStyles(), document.addEventListener(
        "click",
        (t) => {
          var r, c, a, s;
          const o = t.target;
          if (o.closest("nav")) return;
          const n = o.closest("button:not(.crs-close-mobile)");
          if (n && (n.querySelector(".fa-cart-shopping-fast") || (r = n == null ? void 0 : n.textContent) != null && r.includes("Buy") && !n.closest("a") && !n.closest('[data-state="open"]') || (c = n.parentElement) != null && c.classList.contains("fixed") && !n.querySelector(".fa-messages")) && (f("Detected click on buy button, waiting for login modal..."), this.waitLoginModal("buy", "PDP")), n && n.classList.contains("text-foreground") && n.closest("[data-crs-modal-type]") && (f(
            "Detected click on login modal button, waiting for login modal..."
          ), this.waitLoginModal(
            n.closest("[data-crs-modal-type]").dataset.crsModalType,
            "PDP",
            document,
            !0
            // Skip animation when switching between login/signup
          )), (n && n.querySelector(".fa-message") || n != null && n.querySelector(".fa-messages") && n.closest(".fixed")) && (f("Detected click on message button, waiting for login modal..."), this.waitLoginModal("message")), n && n.querySelector(".fa-arrow-right") && n.closest("a")) {
            f("Button is inside a link, ignoring click event.");
            const i = n.closest("a");
            i && this.waitLoginModal("buy", "PLP", i);
          }
          if (n && ((s = (a = n.textContent) == null ? void 0 : a.toLowerCase()) != null && s.includes("buy")) && n.closest('[data-state="open"]')) {
            f(
              "Detected click on buy button in modal, waiting for login modal..."
            );
            const i = n.closest('[data-state="open"]');
            this.waitLoginModal("buy", "MODAL", i);
          }
        },
        {
          signal: this.eventsAborder.signal
        }
      ));
    }
    observePageChanges() {
      var t;
      (t = this.pageObserver) == null || t.disconnect();
      let e = location.href;
      this.pageObserver = new MutationObserver(() => {
        if (location.href !== e) {
          e = location.href, this.pendingModalObservers.forEach((n) => n.disconnect()), this.pendingModalObservers = [];
          const o = document.getElementById("crs-styles");
          o && o.remove(), this.initChanges();
        }
      }), this.pageObserver.observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.id = "crs-styles", e.textContent = O, document.head.appendChild(e);
    }
  }
  new z();
})();
