(function() {
  "use strict";
  const k = (g, e, t, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: g,
      event_desc: e,
      event_type: t,
      event_loc: s
    }), R(`Event: ${g} | ${e} | ${t} | ${s}`, "success");
  }, $ = (g) => new Promise((e) => {
    const t = document.querySelector(g);
    t && e(t);
    const s = new MutationObserver(() => {
      const n = document.querySelector(g);
      n && (e(n), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), B = ({ name: g, dev: e }) => {
    console.log(
      `%c EXP: ${g} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, E = (g) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", g, "variant_1"));
    }, 1e3);
  }, R = (g, e = "info") => {
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
    console.log(`%c>>> ${g}`, `${t} font-size: 16px; font-weight: 600`);
  }, j = `:root {
  /* ============================================
     TYPOGRAPHY & FONT FAMILY
     ============================================ */
  --font-family: 'Red Hat Display', sans-serif, ui-sans-serif, system-ui,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
    'Noto Color Emoji';

  /* ============================================
     MODAL BACKGROUNDS
     ============================================ */
  --crs-bg-modal-primary: #12151c;
  --crs-bg-modal-secondary: #0e1015;
  --crs-bg-modal-seller: #192233;
  --crs-bg-input: #13151b;
  --crs-bg-input-seller: #192233;

  /* ============================================
     TEXT COLORS
     ============================================ */
  --crs-text-primary: #11121d;
  --crs-text-secondary: rgba(17, 18, 29, 0.75);
  --crs-text-tertiary: rgba(17, 18, 29, 0.9);
  --crs-text-quaternary: rgba(250, 250, 250, 0.9);
  --crs-text-muted: #71717a;
  --crs-text-title: #a1a1aa;
  --crs-text-heading: #fafafa;
  --crs-text-muted-foreground: #a1a1aa;
  --crs-text-foreground: #fafafa;

  /* ============================================
     BUTTONS & INTERACTIVE ELEMENTS
     ============================================ */
  --crs-btn-close: rgba(156, 163, 175, 0.1);
  --crs-btn-close-alt: #bfbfbf;
  --crs-bg-btn-social: #272a30;
  --crs-bg-btn-social-alt: #28334d;
  --white: #ffffff;

  /* ============================================
     STATUS & BADGES
     ============================================ */
  --crs-status-online: #43b581;
  --crs-status-offline: #747f8d;
  --crs-status-border: #0e1015;
  --crs-text-rating: #4ade80;
  --crs-badge-primary: #66a1ff;
  --crs-text-review-count: rgba(250, 250, 250, 0.9);

  /* ============================================
     MESSAGING UI
     ============================================ */
  --crs-message-bg: rgba(56, 132, 255, 0.1);
  --crs-message-border: rgba(96, 165, 250, 0.3);
  --crs-message-text: #fff;
  --crs-message-typing-text: var(--crs-message-text);

  /* ============================================
     BORDERS & DIVIDERS
     ============================================ */
  --crs-border-mobile: #1f2328;

  /* ============================================
     SHADOWS & EFFECTS
     ============================================ */
  --crs-shadow: rgba(0, 0, 0, 0.32);
  --crs-shadow-light: rgba(0, 0, 0, 0.05);
}

html.light {
  --crs-text-title: #11121d;
  --crs-bg-modal-primary: hsl(0 0% 100%);
  --crs-bg-modal-secondary: hsl(218 29% 97%);
  --crs-bg-input: var(--crs-bg-modal-secondary);
  --crs-message-text: #71717a;
  --crs-text-muted-foreground: hsl(var(--foreground));
  --crs-badge-primary: #2563eb;
  --crs-btn-close: rgba(156, 163, 175, 0.1);
  --crs-text-review-count: rgba(17, 18, 29, 0.9);
  --crs-bg-modal-seller: #fff;
  --crs-text-heading: #11121d;
  --crs-message-bg: #2d2f34;
  --crs-message-text: #fff;
  --crs-message-typing-text: #71717a;
  --crs-text-rating: #16a249;
  --crs-status-online: #16a249;
  --crs-text-foreground: #11121d;
}

body.crs-modal-open-waiting
  [id*='reka-dialog-content'][data-state='open']:has(
    input[autofocus]
  )[data-crs-modal-type] {
  display: none;
}

/* add delay */
 [id*='reka-dialog-content'][data-state='open']:not([data-crs-modal-purpose="signup"]) {
  opacity: 0;
  animation: fadeIn 0.1s ease-out 0.2s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.crs-modal > div {
  max-height: 90dvh;
}
.crs-modal-bg {
  display: flex;
  justify-content: center;
}

.crs-modal-wrap {
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

.crs-modal-wrap.buy {
  gap: 20px;
}

.crs-modal-badges {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-inline: 12px;
}

.crs-modal-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 98px;
}

.crs-modal-badge i {
  color: var(--crs-badge-primary);
}
.crs-modal-badge span {
  color: var(--crs-text-muted-foreground);
  text-align: center;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
}
.crs-modal-badge-separator {
  width: 1px;
  height: calc(100% - 22px);
  background: rgb(161 161 170 / 12%);
}

html:not(.light) .crs-modal input.bg-field {
  min-height: 3.25rem;
  background-color: var(--crs-bg-input) !important;
  border: none;
  box-shadow: 0 0 0 1px #282a2f, 0 1px 2px 0 var(--crs-shadow-light);
}

.crs-modal[data-crs-modal-type='message'] input.bg-field {
  min-height: 3.25rem;
}
html:not(.light) .crs-modal[data-crs-modal-type='message'] input.bg-field {
  background-color: var(--crs-bg-input-seller) !important;
}
/*  */
[data-crs-modal-type='buy'] .crs-modal-bg {
  background: var(--crs-bg-modal-secondary);
}

[data-crs-modal-type='buy'] .crs-modal-bg ~ div:not(.hidden) {
  background: var(--crs-bg-modal-primary);
  padding-inline: 3.13rem !important;
}

[data-crs-modal-type='buy'] .crs-modal-bg .crs-modal-bg-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  padding-inline: 4.62rem;
}
html.light [data-crs-modal-type] button:has(.fa-xmark) {
  background: var(--crs-btn-close);
  color: #000;
}

[data-crs-modal-type='message'] {
  max-width: 672px !important;
}
[data-crs-modal-type='message'] > div {
  max-height: 90dvh;
  border-radius: 0.75rem;
}

[data-crs-modal-type='message'] > div:not(.crs-modal-seller) {
  z-index: 10;
}
[data-crs-modal-type='message'] > div:not(.hidden) + .crs-modal-seller {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

[data-crs-modal-type='message'] > .crs-modal-seller {
  width: 100%;
  min-height: 35rem;
  padding: 1.5rem;
  background-color: var(--crs-bg-modal-seller);
}

[data-crs-modal-type='message'] button:has(.fa-xmark) {
  background: var(--crs-btn-close);
}

[data-crs-modal-type='message'] .flex.bg-card {
  margin: 0;
  flex-direction: column;
  min-height: 35rem;
  background: rgba(19, 21, 27, 0.9);

  backdrop-filter: blur(10px);
}
html.light [data-crs-modal-type='message'] .flex.bg-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
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
  animation: modalSlideIn 0.3s ease-out forwards;
}
[data-crs-animation='true'] .crs-modal-bg ~ div:not(.hidden) {
  animation: modalSlideIn 0.3s ease-out forwards;
}
@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

[data-crs-modal-type='message']
  .crs-modal-bg
  ~ div:not(.hidden)
  .text-muted-foreground {
  color: var(--crs-text-muted-foreground);
}

[data-crs-modal-type='message']
  .crs-modal-bg
  ~ div:not(.hidden)
  .text-foreground {
  color: var(--crs-text-foreground);
}

[data-crs-modal-type='message'] h2 {
  color: var(--crs-text-heading) !important;
  font-family: 'Red Hat Display';
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}

.crs-modal-wrap {
  display: grid;
  grid-template-columns: 55px auto auto;
  grid-template-areas:
    'seller-avatar seller-name seller-rating'
    'seller-avatar seller-reviews seller-reviews';
  justify-content: start;
  column-gap: 12px;
  width: 100%;
  max-width: 100%;
  padding: 0;
}

.crs-modal-title {
  color: var(--crs-text-title);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem;
  letter-spacing: -0.0375rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
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
  bottom: 0;
  width: 20px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
}

.crs-modal-seller-status.online {
  background: var(--crs-status-online);
}

.crs-modal-seller-status.offline {
  background: var(--crs-status-offline);
}

.crs-modal-seller-name {
  display: flex;
  align-items: center;
  gap: 2px;
  grid-area: seller-name;
  color: var(--crs-text-heading);
  font-family: Manrope;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
}
.crs-modal-seller-verified {
  display: none;
}
.crs-modal-seller-rating {
  grid-area: seller-rating;
  margin-left: 12px;
  color: var(--crs-text-rating);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
}

.crs-modal-seller-reviews-count {
  grid-area: seller-reviews;
  color: var(--crs-text-review-count);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
}

.crs-modal-seller-message {
  margin-top: 24px;
  margin-bottom: -10px;
}

.crs-modal-seller-message-title {
  color: var(--crs-text-quaternary);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

.crs-modal-seller-message-header {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 0.4375rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background: rgba(74, 222, 128, 0.1);
  box-shadow: 0 0 0 1px rgba(34, 197, 94, 0.2);
}

.crs-modal-seller-message-header .crs-status {
  color: #4ade80;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
}
.crs-modal-seller-message-content {
  min-height: 10.4rem;
  padding: 0.6875rem;
  background: transparent;
  box-shadow: 0 0 0 1px #303a4f, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0 0 8px 8px;
}
html.light .crs-modal-seller-message-content {
  box-shadow: 0 0 0 1px #d4d4d4, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.crs-modal-seller-message-header .crs-status-online {
  color: var(--crs-status-online);
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}

.crs-modal-seller-message-header .crs-status-online::before {
  margin-right: 0.5ch;
  content: '';
  display: inline-block;
  width: 12px;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  background-color: var(--crs-status-online);
}

.crs-modal-seller-message-typing {
  color: var(--crs-message-typing-text);
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
  background: var(--crs-text-muted);
  border-radius: 50%;
  animation: blink 2s infinite;
}

.crs-modal-seller-message-dot:nth-child(2) {
  animation-delay: 0.3s;
}

.crs-modal-seller-message-dot:nth-child(3) {
  animation-delay: 0.6s;
}

.crs-modal-seller-action {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.crs-modal-seller-action button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  min-height: 3.25rem;
  border-radius: 0.5rem;
  background: #2563eb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: var(--white);
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
}

html:not(.light) .crs-modal .space-y-8:has(form) > div:first-child a {
  background-color: var(--crs-bg-btn-social);
}
html:not(.light)
  .crs-modal[data-crs-modal-type='message']
  .space-y-8:has(form)
  > div:first-child
  a {
  background-color: var(--crs-bg-btn-social-alt);
  box-shadow: 0 0 0 1px rgba(156, 163, 175, 0.2),
    0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

[data-crs-modal-purpose='signup'] .space-y-8:has(form) {
  display: flex;
  flex-direction: column;
}
[data-crs-modal-purpose='signup'] .space-y-8:has(form) > div:first-child {
  order: 3;
  margin-top: 1.5rem;
}

[data-crs-modal-purpose='signup'] .space-y-8:has(form) > div:last-of-type {
  margin: 0 !important;
  order: 2;
}

[data-crs-modal-purpose='login'] .space-y-8:has(form) > div:first-child {
  flex-wrap: wrap;
}

[data-crs-modal-purpose='login']
  .space-y-8:has(form)
  > div:first-child
  a[href*='google'] {
  flex: 1 0 100%;
  display: flex;
  gap: 1ch;
}

[data-crs-modal-purpose]
  .space-y-8:has(form)
  > div:first-child
  a[href*='google'] {
  order: -2;
}

[data-crs-modal-purpose]
  .space-y-8:has(form)
  > div:first-child
  a[href*='steam'] {
  order: -1;
}

[data-crs-modal-purpose='signup'] .space-y-8 > span {
  order: 4;
  margin-top: 0.75rem !important;
}

[data-crs-modal-purpose='signup'] .space-y-8 form {
  order: -1;
  display: flex;
  flex-direction: column;
  margin-top: 0 !important;
  margin-bottom: 2rem !important;
}

/* [data-crs-modal-purpose='login'] .space-y-8 form {
  order: -1;
  display: flex;
  flex-direction: column;
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
} */

[data-crs-modal-purpose='signup'] .space-y-8 form input {
  margin: 0 !important;
}

[data-crs-modal-purpose='signup'] .space-y-8 form > div.w-full:last-of-type {
  order: -1;
  margin-bottom: 1rem !important;
}

.crs-add-username:not(.hidden) {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.crs-add-username-label {
  color: var(--crs-text-title);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
}

.crs-add-username-optional-label {
  color: var(--crs-text-muted-foreground);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
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

.crs-message-avatar {
  flex-shrink: 0;
}

.crs-message-avatar img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
}

.crs-message-content {
  padding: 0.75rem;
  border-radius: 5px;
  background: var(--crs-message-bg);
  box-shadow: 0 1px 0 1px rgba(227, 229, 234, 0.05) inset;
  color: var(--crs-message-text);
  font-family: Manrope;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
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

  .crs-modal-wrap {
    grid-template-areas:
      'seller-avatar seller-name seller-name'
      'seller-avatar seller-reviews seller-reviews';
  }

  .crs-modal-seller-rating {
    display: none;
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

  [data-crs-modal-type='buy'] .max-h-\\[calc\\(100svh-250px\\)\\] {
    max-height: calc(100svh - 50px);
  }

  [data-crs-modal-type='buy'] .bg-card {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      'title image'
      'login image'
      'content content';
    padding: 3rem 2rem !important;
  }

  [data-crs-modal-type='buy'] .bg-card > :is(.crs-modal-bg, div:not(.hidden)) {
    display: contents;
    padding-inline: 2rem !important;
  }

  [data-crs-modal-type='buy']
    .bg-card
    :is(.crs-modal-title, .crs-modal-badges) {
    display: none;
  }

  [data-crs-modal-type='buy'] .bg-card .crs-modal-bg-wrap {
    grid-area: image;
    padding: 0;
  }

  [data-crs-modal-type='buy'] .bg-card > div:not(.hidden) h2 {
    grid-area: title;
    text-wrap: balance;
  }
  [data-crs-modal-type='buy'] .bg-card > div:not(.hidden) h2 + p {
    grid-area: login;
    display: flex;
    gap: 0.25ch;
    flex-wrap: wrap;
    width: 90%;
  }
  [data-crs-modal-type='buy'] .bg-card > div:not(.hidden) h2 ~ .mt-8 {
    grid-area: content;
  }

  .crs-modal-seller-message {
    margin-top: 16px;
    padding-inline: 0;
  }

  [data-crs-modal-type='buy'] .crs-modal-bg .crs-modal-bg-wrap {
    padding: 0;
  }

  [data-crs-modal-type='buy'] .bg-card {
    background-color: var(--crs-bg-modal-primary);
  }
  [data-crs-modal-type='message'] h2 {
    width: 90%;
  }

  .crs-close-mobile {
    display: inline-flex;
    top: -45px;
    user-select: none;
    pointer-events: none;
    background: var(--crs-color-close-2btn) !important;
    color: #000;
  }

  .crs-message-content {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  /* [data-crs-modal-type='message'] button:has(.fa-xmark):not(.crs-close-mobile) {
    display: none;
  } */
}

@media (max-width: 640px) {
  .crs-modal-bg {
    padding-inline: 2rem;
  }

  [data-crs-modal-type='message'] .crs-modal-bg {
    padding-inline: 24px;
  }
  .crs-modal-wrap {
    max-width: 100%;
  }
}
`, z = {
    regexpLinks: {
      items: /^https:\/\/gameboost\.com\/(?:[^/]+\/)?[^/]+\/items\/[A-Za-z0-9-]+\/?(?:\?.*)?(?:#.*)?$/
    }
  };
  class U {
    closeMobileButton() {
      return (
        /* HTML */
        `<button
      type="button"
      class="crs-close-mobile inline-flex items-center justify-center text-sm transition-colors focus:outline focus:outline-offset-2 focus-visible:outline outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden font-medium active:translate-y-px whitespace-nowrap bg-secondary-light hover:bg-secondary-light-hover text-secondary-light-foreground focus:outline-secondary absolute top-3 right-3 z-10 p-1 w-7 h-7 rounded-full md:text-white/80 sm:w-7 sm:h-7"
    >
      <span class="sr-only">Close</span><i class="fa-solid fa-xmark"></i>
    </button>`
      );
    }
    addUserNameButton() {
      return (
        /* HTML */
        `<button type="button" class="crs-add-username">
      <span class="crs-add-username-label">Add Username +</span>
      <span class="crs-add-username-optional-label">*Optional</span>
    </button>`
      );
    }
    buyModalBackground({
      backgroundClasses: e,
      imageSrc: t,
      initialBg: s,
      initTitle: n,
      title: l,
      isInstantDelivery: r,
      isWarrantyAvailable: c
    }) {
      var i;
      const o = document.querySelector('nav[aria-label="Breadcrumb"]');
      return (
        /* HTML */
        `
      <div class="crs-modal-bg-wrap buy">
        <div class="crs-modal-title">${n || l}</div>
        <div
          class="crs-modal-image  ${e || ""}"
        >
          <img src="${t || s}" alt="" width="284" height="284" />
        </div>
        <div class="crs-modal-badges">
          ${r ? (
          /* HTML */
          `
                <div class="crs-modal-badge crs-modal-badge-instant-delivery">
                  <i class="fa-solid fa-bolt"></i>
                  <span>
                    Instant <br />
                    Delivery
                  </span>
                </div>
              `
        ) : ""}
          ${r && c ? (
          /* HTML */
          '<div class="crs-modal-badge-separator"></div>'
        ) : ""}
          ${c ? (
          /* HTML */
          `
                <div class="crs-modal-badge crs-modal-badge-warranty">
                  <i class="fa-solid fa-shield-halved"></i>
                  ${o && ((i = o.textContent) != null && i.includes("Game Keys")) ? "<span>Valid Key <br> Guarantee</span>" : `<span>
                    14-days <br />
                    Warranty Included
                  </span>`}
                </div>
              `
        ) : ""}
        </div>
      </div>
    `
      );
    }
    sellerOverModal({
      avatarSrc: e,
      sellerName: t,
      isOnline: s,
      isVerified: n,
      reviewText: l,
      rating: r,
      statusText: c
    }) {
      return (
        /* HTML */
        `
      <div
        class="crs-modal-seller overflow-y-auto max-h-[calc(100svh-250px)] relative"
      >
        <button
          type="button"
          class="crs-modal-seller-msg-close inline-flex items-center justify-center text-sm transition-colors focus:outline focus:outline-offset-2 focus-visible:outline outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden font-medium active:translate-y-px whitespace-nowrap bg-secondary-light hover:bg-secondary-light-hover text-secondary-light-foreground focus:outline-secondary absolute top-3 right-3 z-10 p-1 w-7 h-7 rounded-full md:text-white/80 sm:w-7 sm:h-7"
        >
          <span class="sr-only">Close</span><i class="fa-solid fa-xmark"></i>
        </button>
        <div class="crs-modal-wrap">
          <div class="crs-modal-seller-avatar">
            <img
              src="${e}"
              alt="${t}"
              width="55"
              height="55"
            />
            <div
              class="crs-modal-seller-status${s ? " online" : " offline"}"
            >
              <span class="sr-only"> ${c} </span>
            </div>
          </div>
          <div class="crs-modal-seller-name">
            Message ${t}
            ${n ? (
          /* HTML */
          `<i
                  class="crs-modal-seller-verified -blue-500 fa-solid fa-badge-check"
                ></i>`
        ) : ""}
          </div>
          <div class="crs-modal-seller-reviews-count">${l}</div>

          <div class="crs-modal-seller-rating">
            <i class="mr-0.5 fa-solid fa-thumbs-up"></i>${r}%
          </div>
        </div>
        <div class="crs-modal-seller-message">
          <div class="crs-modal-seller-message-title">Message</div>
          <div class="crs-modal-seller-message-header">
            <div class="crs-status-online">Online</div>
          </div>
          <div class="crs-modal-seller-message-content">
            <div class="crs-modal-seller-message-typing">
              ${t} is typing
              <span class="crs-modal-seller-message-dots">
                <span class="crs-modal-seller-message-dot"></span>
                <span class="crs-modal-seller-message-dot"></span>
                <span class="crs-modal-seller-message-dot"></span>
              </span>
            </div>
            <div class="crs-modal-message">
              <div class="crs-message-avatar">
                <img src="${e}" alt="${t}" />
              </div>
              <div class="crs-message-content">
                hey, what question do you have ?
              </div>
            </div>
          </div>
        </div>
        <div class="crs-modal-seller-action">
          <button id="sign-up-to-chat">
            Sign Up to Chat
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="none"
              >
                <path
                  fill="#FAFAFA"
                  d="M15.063.313c.53-.313 1.218.124 1.093.75l-2.25 13.5a.75.75 0 0 1-1.031.593L9 13.5l-2 2.438a.74.74 0 0 1-1.313-.5v-2.532l7.5-9.156c.157-.188-.093-.406-.25-.25L3.97 11.406.625 10C.062 9.781 0 8.969.562 8.656l14.5-8.344Z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    `
      );
    }
  }
  class O {
    constructor() {
      this.pendingModalObservers = [], this.popupRenderer = new U();
    }
    cleanup() {
      var e;
      (e = this.modalAbortController) == null || e.abort(), this.modalAbortController = void 0, this.pendingModalObservers.forEach((t) => t.disconnect()), this.pendingModalObservers = [];
    }
    async init({
      type: e = "buy",
      location: t = "PDP",
      context: s = document,
      skipAnimation: n = !1,
      initialData: l = {},
      preventAutoClickSignup: r = !1
    }) {
      var c;
      (c = this.modalAbortController) == null || c.abort(), this.modalAbortController = new AbortController();
      try {
        const o = (l == null ? void 0 : l.title) || "", i = (l == null ? void 0 : l.imageSrc) || "", a = await new Promise((m, p) => {
          const S = '[id*="reka-dialog-content"][data-state="open"]:has(input[autofocus]):not([data-crs-modal-type])', f = document.querySelector(S);
          if (f) {
            m(f);
            return;
          }
          const d = new MutationObserver(() => {
            const h = document.querySelector(S);
            if (h) {
              d.disconnect();
              const x = this.pendingModalObservers.indexOf(d);
              x > -1 && this.pendingModalObservers.splice(x, 1), m(h);
            }
          });
          this.pendingModalObservers.push(d), d.observe(document.documentElement, {
            childList: !0,
            subtree: !0
          });
        }), u = a.querySelector(":scope > div"), w = a.querySelector(
          "button:has(.fa-xmark):not(.crs-close-mobile)"
        ), q = a.querySelectorAll("h2"), b = a.querySelector(
          'div[style*="background-image"]'
        );
        a.classList.add("crs-modal"), a.dataset.crsModalType = e;
        let y = !1;
        const A = a.querySelector(
          ".text-foreground.hover\\:underline"
        );
        if (e === "buy") {
          if (b) {
            const {
              title: m,
              imageSrc: p,
              backgroundClasses: S,
              isInstantDelivery: f,
              isWarrantyAvailable: d
            } = this.getProductData(t, s);
            (p || i && i.trim() !== "") && (a.dataset.bg = p || i, a.dataset.productTitle = (l == null ? void 0 : l.title) || m || "", b.style.backgroundImage = "none", b.classList.add("crs-modal-bg"), b.innerHTML = this.popupRenderer.buyModalBackground({
              backgroundClasses: S,
              imageSrc: p,
              initialBg: i,
              initTitle: o,
              title: m,
              isInstantDelivery: f,
              isWarrantyAvailable: d
            }));
          }
        } else {
          const {
            avatarSrc: m,
            sellerName: p,
            sellerTier: S,
            isOnline: f,
            statusText: d,
            isVerified: h,
            rating: x,
            reviewCount: C,
            reviewText: P,
            totalSales: I
          } = this.getSellerData();
          if (b && u) {
            b.style.backgroundImage = "none", b.classList.add("crs-modal-bg");
            const M = a.querySelector(".crs-modal-seller");
            M && M.remove(), a.dataset.crsModalPurpose === "signup" && u.classList.add("hidden"), u.insertAdjacentHTML(
              "afterend",
              this.popupRenderer.sellerOverModal({
                avatarSrc: m,
                sellerName: p,
                isOnline: f,
                isVerified: h,
                reviewText: P,
                rating: x,
                statusText: d
              })
            );
            const _ = a.querySelector(
              ".crs-modal-seller-msg-close"
            ), L = a.querySelector(
              "#sign-up-to-chat"
            );
            if (_ && _.addEventListener(
              "click",
              () => {
                k(
                  "exp_create_acc_to_chat_close",
                  "Create an Account to Chat Step 1 Close",
                  "click",
                  "Registration Popup"
                ), w == null || w.click();
              },
              { signal: this.modalAbortController.signal }
            ), L && L.addEventListener(
              "click",
              () => {
                k(
                  "exp_create_acc_to_chat_click",
                  "Sign Up to Chat",
                  "click",
                  "Registration Popup"
                ), u.classList.remove("hidden"), k(
                  "exp_create_acc_to_chat_view_2",
                  "Create an Account to Chat Step 2",
                  "view",
                  "Registration Popup"
                );
              },
              { signal: this.modalAbortController.signal }
            ), n) {
              const v = a.querySelector(
                ".crs-modal-seller-message-typing"
              ), T = a.querySelector(
                ".crs-modal-message"
              );
              v && v.classList.add("hidden"), T && T.classList.add("show");
            } else
              setTimeout(() => {
                const v = a.querySelector(
                  ".crs-modal-seller-message-typing"
                ), T = a.querySelector(
                  ".crs-modal-message"
                );
                v && v.classList.add("hidden"), T && T.classList.add("show");
              }, 4e3);
          }
        }
        q.forEach((m) => {
          var p, S;
          if (m && m.textContent === "Login") {
            a.dataset.crsModalPurpose = "login";
            const f = e === "buy";
            if (A && !r) {
              A.click();
              return;
            }
            f ? (m.innerHTML = "Login to Buy", y || (k(
              "exp_login_to_buy_view",
              "Login to Buy",
              "view",
              "Registration Popup"
            ), y = !0)) : (m.innerHTML = "Login to Chat", y || (k(
              "exp_login_to_chat_view",
              "Login to Chat",
              "view",
              "Registration Popup"
            ), y = !0));
            const d = a.querySelector(
              '.space-y-8:has(form) > div:first-child a[href*="google"]'
            );
            d && !d.querySelector(".crs-google-login-text") && d.insertAdjacentHTML(
              "beforeend",
              '<span class="crs-google-login-text">Log in with Google</span>'
            );
          }
          if (m && m.textContent === "Create Account") {
            a.dataset.crsModalPurpose = "signup", e === "buy" ? (m.innerHTML = "Create an Account to Buy", y || (k(
              "exp_create_acc_to_save_view",
              "Create an Account to Buy",
              "view",
              "Registration Popup"
            ), y = !0)) : (m.innerHTML = "Create an Account to Chat", y || (y = !0, k(
              "exp_create_acc_to_chat_view_1",
              "Create an Account to Chat Step 1",
              "view",
              "Registration Popup"
            )));
            const d = a.querySelector(
              '.relative:has(> input[placeholder="Username - Optional"])'
            );
            if (d) {
              (p = d.parentElement) == null || p.insertAdjacentHTML(
                "afterbegin",
                this.popupRenderer.addUserNameButton()
              ), d.classList.add("hidden");
              const C = a.querySelector(
                ".crs-add-username"
              );
              C.addEventListener(
                "click",
                () => {
                  d.classList.remove("hidden"), C.classList.add("hidden"), k(
                    "exp_create_acc_to_save_click",
                    "Add Username",
                    "click",
                    "Registration Popup"
                  );
                },
                { signal: this.modalAbortController.signal }
              );
            }
            const h = a.querySelector(
              ".space-y-8:has(form) > div:last-of-type > div"
            );
            h && (h.textContent = "Or Create an Account with:");
            const x = a.querySelector(".space-y-8 form > span");
            x && h && ((S = h.parentElement) == null || S.insertAdjacentElement(
              "afterend",
              x
            ));
          }
        });
      } catch (o) {
        if (o instanceof Error && o.message.includes("cancelled"))
          return;
        console.error("Error waiting for modal:", o);
      } finally {
        setTimeout(() => {
          document.body.classList.remove("crs-modal-open-waiting");
        }, 100);
      }
    }
    getProductData(e = "PDP", t = document) {
      var s, n, l;
      if (e === "PDP") {
        const r = this.getPdpTitle(), c = this.getPdpImageSrc(), o = document.querySelector('nav[aria-label="Breadcrumb"]');
        let i = !!t.querySelector(".ring-1 .fa-bolt"), a = !!t.querySelector(
          ".ring-1 .fa-shield-halved"
        );
        return o && ((s = o.textContent) != null && s.includes("Game Keys")) && (a = !0, i = !0), { title: r, imageSrc: c, isInstantDelivery: i, isWarrantyAvailable: a };
      }
      if (e === "PLP") {
        const r = t.querySelector(
          ".text-sm.text-foreground\\/80.line-clamp-2.h-\\[40px\\]"
        ), c = t.querySelector(
          'img[src*="https://gameboost.com/cdn-cgi/image"]'
        ), o = !!t.querySelector(".fa-bolt");
        return {
          title: r && r.textContent || "",
          imageSrc: c ? c.src : "",
          isInstantDelivery: o,
          isWarrantyAvailable: o
        };
      }
      if (e === "MODAL") {
        const r = t.querySelector(
          ".text-lg.font-semibold.font-display"
        ), c = t.querySelector(
          'img[src*="steamcommunity"]'
        ), o = (l = (n = t.querySelector(
          'img[src*="steamcommunity"]'
        )) == null ? void 0 : n.parentElement) == null ? void 0 : l.className, i = (() => {
          if (!o) return "";
          const a = o.split(/\s+/), u = a.findIndex((q) => q === "bg-gradient");
          if (u === -1) return "";
          const w = [a[u]];
          return u + 1 < a.length && w.push(a[u + 1]), w.join(" ");
        })();
        return {
          title: r && r.innerHTML || "",
          imageSrc: c ? c.src : "",
          backgroundClasses: i
        };
      }
    }
    getSellerData() {
      var h, x, C, P, I, M, _;
      const e = document.querySelector(
        '.bg-card:has(a[href*="seller"])'
      ), t = e == null ? void 0 : e.querySelector('img[src*="avatar"]'), s = e == null ? void 0 : e.querySelector(
        'a[href*="seller"] .text-sm.font-medium.truncate.text-foreground'
      ), n = e == null ? void 0 : e.querySelector(
        ".text-xs.truncate.text-muted-foreground"
      ), l = ((h = n == null ? void 0 : n.textContent) == null ? void 0 : h.trim()) || "", r = e == null ? void 0 : e.querySelector(
        ".bg-success-light.ring-success-ring"
      ), c = !!r, o = ((x = r == null ? void 0 : r.textContent) == null ? void 0 : x.trim().replace(/\s+/g, " ")) || "", i = !!(s != null && s.querySelector(".fa-badge-check")), a = (C = e == null ? void 0 : e.querySelector(".fa-thumbs-up")) == null ? void 0 : C.parentElement, w = (((P = a == null ? void 0 : a.textContent) == null ? void 0 : P.trim()) || "").match(/([\d.]+)%/), q = w ? parseFloat(w[1]) : 0, b = Array.from(
        (e == null ? void 0 : e.querySelectorAll(".text-muted-foreground")) || []
      ).find((L) => {
        var v;
        return (v = L.textContent) == null ? void 0 : v.includes("Reviews");
      }), y = ((I = b == null ? void 0 : b.textContent) == null ? void 0 : I.trim()) || "", A = y.match(/([\d,]+)\s+Reviews/), m = A ? A[1].replace(/,/g, "") : "0", p = Array.from(
        (e == null ? void 0 : e.querySelectorAll("dd")) || []
      ).find((L) => {
        var v;
        return (v = L.textContent) == null ? void 0 : v.includes("Sold");
      }), f = (((M = p == null ? void 0 : p.textContent) == null ? void 0 : M.trim()) || "").match(/([\d,]+)\s+Sold/), d = f ? f[1].replace(/,/g, "") : "0";
      return {
        avatarSrc: t ? t.src : "",
        sellerName: s && ((_ = s.textContent) == null ? void 0 : _.replace(/\s*\u{f058}\s*$/u, "").trim()) || "",
        sellerTier: l,
        isOnline: c,
        statusText: o,
        isVerified: i,
        rating: q,
        reviewCount: m,
        reviewText: y,
        totalSales: d
      };
    }
    getPdpTitle() {
      const e = document.querySelector("h1");
      return e && e.textContent || "";
    }
    getPdpImageSrc() {
      var s;
      const e = document.querySelector(
        '[aria-roledescription="carousel"]:not(:has(a))'
      ), t = ((s = document.querySelector("h1")) == null ? void 0 : s.textContent) || "";
      if (e) {
        const n = e.querySelector("img");
        if (n)
          return n.src;
      }
      if (location.href.match(z.regexpLinks.items)) {
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
  }
  B({ name: "Іmproved registration / account creation flow v2", dev: "OS" }), E("exp_login_modal");
  class D {
    constructor() {
      this.eventsAborder = new AbortController(), this.popupChanges = new O(), this.init();
    }
    init() {
      this.checkUserLoggedIn().then((e) => {
        e || (this.initChanges(), this.observePageChanges());
      });
    }
    async checkUserLoggedIn() {
      var e, t;
      return await $("nav button"), !((t = (e = document.querySelector("nav button:has(.fa-arrow-right)")) == null ? void 0 : e.textContent) != null && t.includes("Log in"));
    }
    async initChanges() {
      var e;
      (e = this.eventsAborder) == null || e.abort(), this.eventsAborder = new AbortController(), !location.href.includes("checkout") && (this.addStyles(), document.addEventListener(
        "click",
        (t) => {
          var l, r, c, o;
          const s = t.target;
          if (s.closest("nav")) return;
          const n = s.closest("button:not(.crs-close-mobile)");
          if (n && (n.querySelector(".fa-cart-shopping-fast") || (l = n == null ? void 0 : n.textContent) != null && l.includes("Buy") && !n.closest("a") && !n.closest('[data-state="open"]') || (r = n.parentElement) != null && r.classList.contains("fixed") && !n.querySelector(".fa-messages")) && (document.body.classList.add("crs-modal-open-waiting"), new O().init({ type: "buy", location: "PDP" })), n && n.classList.contains("text-foreground") && n.closest("[data-crs-modal-type]")) {
            const i = n.closest("[data-crs-modal-type]"), a = i.dataset.bg || "", u = i.dataset.productTitle;
            document.body.classList.add("crs-modal-open-waiting"), this.popupChanges.init({
              type: n.closest("[data-crs-modal-type]").dataset.crsModalType,
              location: "PDP",
              context: document,
              skipAnimation: !1,
              // Skip animation when switching between login/signup
              initialData: {
                title: u,
                imageSrc: a
              },
              preventAutoClickSignup: !0
            });
          }
          if ((n && n.querySelector(".fa-message") || n != null && n.querySelector(".fa-messages") && n.closest(".fixed")) && (document.body.classList.add("crs-modal-open-waiting"), this.popupChanges.init({ type: "message" })), n && n.querySelector(".fa-arrow-right") && n.closest("a")) {
            const i = n.closest("a");
            i && (document.body.classList.add("crs-modal-open-waiting"), this.popupChanges.init({
              type: "buy",
              location: "PLP",
              context: i
            }));
          }
          if (n && ((o = (c = n.textContent) == null ? void 0 : c.toLowerCase()) != null && o.includes("buy")) && n.closest('[data-state="open"]')) {
            const i = n.closest('[data-state="open"]');
            document.body.classList.add("crs-modal-open-waiting"), this.popupChanges.init({
              type: "buy",
              location: "MODAL",
              context: i
            });
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
          e = location.href;
          const s = document.getElementById("crs-styles");
          s && s.remove(), this.initChanges();
        }
      }), this.pageObserver.observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.id = "crs-styles", e.textContent = j, document.head.appendChild(e);
    }
  }
  new D();
})();
