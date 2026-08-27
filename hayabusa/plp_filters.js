(function(){var e=(e,t,n,r=``)=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r}),`${e}${t}${n}${r}`},t=({name:e,dev:t})=>{},n=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},r=(t,n,r,i,a=1e3,o=.5)=>{let s,c;if(s=new IntersectionObserver(function(t){t[0].isIntersecting===!0?c=setTimeout(()=>{e(n,t[0].target.dataset.visible||i||``,`view`,r),s.disconnect()},a):clearTimeout(c)},{threshold:[o]}),typeof t==`string`){let e=document.querySelector(t);e&&s.observe(e)}else s.observe(t)},i=`@font-face {
  font-family: 'CrsHayabusaCnd';
  src: url('https://cdn.shopify.com/oxygen-v2/43188/37999/79895/4309125/fonts/HayabusaCndRegular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
  ascent-override: 82.5%;
  descent-override: 12.5%;
  line-gap-override: 0%;
}

@font-face {
  font-family: 'CrsHayabusaCnd';
  src: url('https://cdn.shopify.com/oxygen-v2/43188/37999/79895/4309125/fonts/HayabusaCndBold.woff2') format('woff2');
  font-weight: 600;
  font-display: swap;
  ascent-override: 82.5%;
  descent-override: 12.5%;
  line-gap-override: 0%;
}

@font-face {
  font-family: 'CrsHayabusaCnd';
  src: url('https://cdn.shopify.com/oxygen-v2/43188/37999/79895/4309125/fonts/HayabusaCndBlack.woff2') format('woff2');
  font-weight: 800;
  font-display: swap;
  ascent-override: 82.5%;
  descent-override: 12.5%;
  line-gap-override: 0%;
}

.crs-aside,
.crs-header,
.crs-quiz-tile,
.crs-ships,
.crs-rating-text,
.crs-badge,
.crs-drawer,
.crs-mchips {
  display: none;
}

body.crs-plp-on {
  --crs-border: #e9e9e9;
  --crs-muted: rgba(0, 0, 0, 0.4);
  --crs-green: #008236;
  --crs-red: rgba(212, 0, 0, 0.7);
  --crs-cond: 'Roboto Condensed', ui-sans-serif, system-ui, sans-serif;
  --crs-haya: CrsHayabusaCnd, HayabusaCnd, ui-sans-serif, system-ui, sans-serif;
}

body.crs-plp-on .crs-h1-block {
  display: none !important;
}

body.crs-plp-on .cfv-content>div:has(> .cfv-chip) {
  display: none !important;
}

body.crs-plp-on .crs-header {
  display: block;
}

body.crs-plp-on .crs-h1 {
  text-align: left;
}

body.crs-plp-on .crs-chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

body.crs-plp-on .crs-chip {
  display: inline-flex;
  align-items: center;
  height: 34px;
  padding: 0 16px;
  border: 1px solid #e9e9e9;
  border-radius: 999px;
  background: #fff;
  font-family: var(--crs-cond);
  font-size: 12.5px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  transition: border-color 0.15s, background 0.15s, color 0.15s;
}

body.crs-plp-on .crs-chip:hover {
  border-color: #000;
}

body.crs-plp-on .crs-chip-active {
  background: #000;
  border-color: #000;
  color: #fff;
}

body.crs-plp-on .crs-hide {
  display: none !important;
}

body.crs-plp-on .crs-card-info {
  display: flex;
  flex-direction: column;
}

body.crs-plp-on .crs-title-link {
  order: 1;
}

body.crs-plp-on .crs-rating-row {
  position: static !important;
  order: 2;
  display: flex !important;
  align-items: center;
  gap: 4px;
  margin: 8px 0 0;
  height: auto;
}

body.crs-plp-on .crs-rating-row .okendo-summary-stars svg {
  width: 15px;
  height: 15px;
}

body.crs-plp-on .crs-rating-row .okendo-summary-count {
  display: none;
}

body.crs-plp-on .crs-rating-row .text-review-star,
body.crs-plp-on .crs-rating-row .okendo-summary-stars {
  color: #000;
}

body.crs-plp-on .crs-rating-text {
  display: inline;
  font-family: var(--crs-haya);
  font-size: 14px;
  letter-spacing: 0.3px;
  color: #000;
  font-variant-numeric: tabular-nums;
  line-height: 14px;
}

body.crs-plp-on .crs-title-link h4 {
  color: #1a1a1a;
}

body.crs-plp-on .crs-price-row {
  order: 3;
}

body.crs-plp-on .crs-card-info .okendo-rating-card-mobile {
  display: none;
}

body.crs-plp-on .crs-ships {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  right: 0;
  height: 20px;
  font-family: var(--crs-cond);
  font-size: 13px;
  font-weight: 500;
  color: var(--crs-green);
  line-height: 1;
}

body.crs-plp-on .crs-ships::before {
  content: '';
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' fill='%23008236'><path d='M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120Z'/></svg>") no-repeat center / contain;
}

body.crs-plp-on .crs-badge-row {
  display: none !important;
}

body.crs-plp-on .crs-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 5;
  display: inline-block;
  padding: 5px 8px;
  background: #000;
  border-radius: 2px;
  color: #fff;
  font-family: var(--crs-cond);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 1;
}

body.crs-plp-on .crs-badge--bestseller {
  background: #f59d11;
  color: #000;
}

body.crs-plp-on .crs-badge--sale {
  background: #c8102e;
}

body.crs-plp-on .crs-quiz-tile {
  display: flex;
  align-items: center;
  background: #ebebeb;
  border: 1px solid #e9e9e9;
  border-radius: 2px;
}

body.crs-plp-on .crs-quiz-tile+.merch-card {
  display: none !important;
}

body.crs-plp-on .crs-quiz-overline {
  display: block;
  font-family: var(--crs-cond);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: #6f6f6f;
  margin-bottom: 11px;
}

body.crs-plp-on .crs-quiz-title {
  font-family: var(--crs-haya);
  font-weight: 900;
  letter-spacing: 0.54px;
  line-height: 28px;
  text-transform: uppercase;
  color: #1a1a1a;
  margin-bottom: 13px;
}

body.crs-plp-on .crs-quiz-text {
  font-family: var(--crs-cond);
  font-weight: 500;
  line-height: 20px;
  color: #6f6f6f;
  margin-bottom: 20px;
}

body.crs-plp-on .crs-quiz-cta {
  display: block;
  width: 100%;
  height: 36px;
  line-height: 36px;
  padding: 0;
  background: #000;
  color: #fff;
  font-family: var(--crs-cond);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
}

body.crs-plp-on .crs-quiz-cta:hover {
  opacity: 0.85;
}

body.crs-plp-on .crs-group {
  padding: 14px 0;
  border-bottom: 1px solid var(--crs-border);
}

body.crs-plp-on .crs-group-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 0;
  background: none;
  padding: 0;
  cursor: pointer;
}

body.crs-plp-on .crs-group-title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--crs-haya);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: #1a1a1a;
  text-transform: uppercase;
}

body.crs-plp-on .crs-chevron {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>") no-repeat center / contain;
  opacity: 0.6;
  transition: transform 0.2s;
}

body.crs-plp-on .crs-collapsed .crs-chevron {
  transform: rotate(-90deg);
}

body.crs-plp-on .crs-group-body {
  margin-top: 12px;
}

body.crs-plp-on .crs-collapsed .crs-group-body {
  display: none;
}

body.crs-plp-on .crs-opt {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 0;
  font-family: var(--crs-cond);
  font-size: 13px;
  cursor: pointer;
  user-select: none;
}

body.crs-plp-on .crs-opt-check {
  appearance: none;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  display: inline-block;
  position: relative;
}

body.crs-plp-on .crs-opt-check:checked {
  background: #000 url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3.5'><path d='M5 12.5l5 5L19 7'/></svg>") no-repeat center / 13px;
  border-color: #000;
}

body.crs-plp-on .crs-opt-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.3;
}

body.crs-plp-on .crs-opt-count {
  font-size: 13px;
  font-weight: 500;
  color: var(--crs-muted);
  font-variant-numeric: tabular-nums;
}

body.crs-plp-on .crs-opt-empty {
  opacity: 0.4;
}

body.crs-plp-on .crs-chips-body {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

body.crs-plp-on .crs-size {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: #fff;
  font-family: var(--crs-cond);
  font-size: 13px;
  line-height: 1;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s, color 0.15s;
}

body.crs-plp-on .crs-size b {
  font-weight: 600;
}

body.crs-plp-on .crs-size-count {
  font-size: 12px;
  font-weight: 500;
  color: var(--crs-muted);
  font-variant-numeric: tabular-nums;
}

body.crs-plp-on .crs-size:hover {
  border-color: #000;
}

body.crs-plp-on .crs-size-active {
  background: #000;
  border-color: #000;
  color: #fff;
}

body.crs-plp-on .crs-size-active .crs-size-count {
  color: rgba(255, 255, 255, 0.6);
}

body.crs-plp-on .crs-active-chips {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

body.crs-plp-on .crs-active-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.04);
  font-family: var(--crs-cond);
  font-size: 12px;
  font-weight: 600;
  color: #000;
  line-height: 1;
  cursor: pointer;
}

body.crs-plp-on .crs-active-chip:hover {
  border-color: rgba(0, 0, 0, 0.4);
}

body.crs-plp-on .crs-active-chip-x {
  display: inline-block;
  width: 7px;
  height: 7px;
  font-size: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5'><path d='M4 4l16 16M20 4L4 20'/></svg>") no-repeat center / contain;
}

body.crs-plp-on .crs-info {
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none'><rect width='13' height='13' x='.5' y='.5' stroke='%23b9b9b9' rx='6.5'/><path fill='%23000' fill-opacity='.4' d='M6.526 4.002h1.242v1.062H6.526zm0 1.656h1.242V10.5H6.526z'/></svg>")
    no-repeat center / contain;
  cursor: help;
}

body.crs-plp-on .crs-tip {
  position: absolute;
  left: calc(-8px + var(--crs-tip-shift, 0px));
  bottom: calc(100% + 8px);
  box-sizing: border-box;
  width: 193px;
  padding: 12px;
  border-radius: 4px;
  background: #0a0a0a;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  font-family: var(--crs-cond);
  line-height: 1.35;
  text-align: left;
  text-transform: none;
  letter-spacing: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s;
  z-index: 50;
  pointer-events: none;
  cursor: default;
}

body.crs-plp-on .crs-info::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: calc(100% + 2px);
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 6px solid #0a0a0a;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s;
  z-index: 50;
  pointer-events: none;
}

body.crs-plp-on .crs-info:hover .crs-tip,
body.crs-plp-on .crs-info:hover::before,
body.crs-plp-on .crs-info-open .crs-tip,
body.crs-plp-on .crs-info-open::before {
  opacity: 1;
  visibility: visible;
}

body.crs-plp-on .crs-info-open .crs-tip {
  pointer-events: auto;
}

body.crs-plp-on .crs-tip-x {
  display: none;
  position: absolute;
  top: 12px;
  right: 10px;
  width: 8px;
  height: 8px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' fill='none'><path stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' d='m7.5.5-7 7M.5.5l7 7'/></svg>")
    no-repeat center / contain;
  cursor: pointer;
}

body.crs-plp-on .crs-tip-x::after {
  content: '';
  position: absolute;
  inset: -10px;
}

@media (min-width: 1024px) {
   body.crs-plp-on .cfv-aside {
    padding-left: 0;
   }

  body.crs-plp-on .cfv-aside> :not(.crs-aside) {
    display: none !important;
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) {
    display: none !important;
  }

  body.crs-plp-on .crs-header {
    margin: 32px 0 4px;
    &::after {
      content: '';
      display: block;
      transform: translateX(-4rem);
      width: calc(100% + 6rem);
      height: 1px;
      margin-block: 20px 24px;
      background: var(--crs-border);
    }
  }

  body.crs-plp-on .crs-h1 {
    font-size: 44px;
    font-weight: 700;
    line-height: 44px;
    color: #1a1a1a;
    margin-bottom: 12px;
  }

  body.crs-plp-on .crs-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 8px;
    min-height: 36px;
  }

  body.crs-plp-on .crs-toolbar-left {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    min-width: 0;
  }

  body.crs-plp-on .crs-results {
    font-family: var(--crs-cond);
    font-size: 16px;
    font-weight: 500;
    color: var(--crs-muted);
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }

  body.crs-plp-on .crs-clear {
    border: 0;
    background: none;
    padding: 6px 2px;
    font-family: var(--crs-cond);
    font-size: 14px;
    font-weight: 500;
    color: var(--crs-red);
    text-decoration: underline;
    text-underline-offset: 3px;
    cursor: pointer;
  }

  body.crs-plp-on .crs-sort {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  body.crs-plp-on .crs-sort-label {
    font-family: var(--crs-haya);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #000;
  }

  body.crs-plp-on .crs-sort-select {
    appearance: none;
    height: 36px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background: #fff url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='14' height='14' fill='none' stroke='black' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>") no-repeat right 10px center;
    padding: 0 32px 0 12px;
    font-family: var(--crs-cond);
    font-size: 13px;
    font-weight: 700;
    color: #1a1a1a;
    cursor: pointer;
    min-width: 116px;
  }

  body.crs-plp-on .crs-aside {
    display: block;
  }

  body.crs-plp-on .crs-card-info {
    margin-top: 19px;
  }

  body.crs-plp-on .crs-title-link {
    padding-right: 84px;
  }

  body.crs-plp-on .crs-ships {
    top: 0;
  }

  body.crs-plp-on .crs-price-row,
  body.crs-plp-on .crs-price-row p,
  body.crs-plp-on .crs-price-row span {
    font-family: var(--crs-cond);
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.35px;
  }

  body.crs-plp-on .crs-quiz-inner {
    padding: 24px 25px;
  }

  body.crs-plp-on .crs-quiz-title {
    font-size: 24px;
  }

  body.crs-plp-on .crs-quiz-text {
    font-size: 14px;
  }
}

@media (max-width: 1023px) {
  body.crs-plp-on .crs-header {
    margin: 24px 0 0;
  }

  body.crs-plp-on .crs-h1 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  body.crs-plp-on .crs-header .crs-toolbar {
    display: none;
  }

  body.crs-plp-on .crs-chips-row {
    margin-left: -1rem;
    width: calc(100% + 2rem);
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 2px 1rem 10px;
    margin-bottom: 0;
    scrollbar-width: none;
  }

  body.crs-plp-on .crs-chips-row::-webkit-scrollbar {
    display: none;
  }

  body.crs-plp-on .crs-chip {
    flex-shrink: 0;
  }

  body.crs-plp-on .crs-chip-active {
    border-color: #000;
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) {
    flex-direction: row-reverse;
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) .tabular-nums {
    margin-left: 0;
    font-size: 0;
    color: rgba(0, 0, 0, 0.4);
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) .tabular-nums::after {
    content: attr(data-crs-results);
    font-size: 15px;
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) select.cfv-sort-select {
    display: none;
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) button[aria-controls='cfv-mobile-drawer'] {
    font-size: 0;
    letter-spacing: 0;
    gap: 0;
    height: auto;
    padding: 10px 14px;
    border: 1px solid #0a0a0a;
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) button[aria-controls='cfv-mobile-drawer'] svg {
    display: none;
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) button[aria-controls='cfv-mobile-drawer']::after {
    content: 'Filter & Sort';
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #1a1a1a;
    line-height: 1;
  }

  body.crs-plp-on .crs-tip {
    width: 254px;
    padding-right: 30px;
  }

  body.crs-plp-on .crs-tip-x {
    display: block;
  }

  body.crs-plp-on .crs-mchips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: -8px 0 14px;
  }

  body.crs-plp-on .crs-mchips:empty {
    display: none;
  }

  body.crs-plp-on .crs-active-chip {
    height: auto;
    padding: 9px 12px;
    font-size: 13px;
  }

  body.crs-plp-on .crs-card-info>div.md\\:hidden {
    order: 4;
    margin-top: 12px;
  }

  body.crs-plp-on .crs-card-info {
    padding-top: 8px;
  }

  body.crs-plp-on .crs-title-link h4 {
    min-height: 0;
  }

  body.crs-plp-on .crs-rating-row .okendo-summary-stars svg {
    width: 13px;
    height: 13px;
  }

  body.crs-plp-on .crs-rating-text {
    font-size: 13px;
  }

  body.crs-plp-on .crs-ships {
    bottom: 44px;
    font-size: 11px;
  }

  body.crs-plp-on .crs-ships::before {
    width: 15px;
    height: 15px;
  }

  body.crs-plp-on .crs-card-info button.w-full {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.3px;
  }

  body.crs-plp-on .crs-quiz-inner {
    padding: 24px 16px;
  }

  body.crs-plp-on .crs-quiz-title {
    font-size: 18px;
  }

  body.crs-plp-on .crs-quiz-text {
    font-size: 12px;
  }

  body.crs-plp-on.crs-toolbar-stuck .cfv-content>div:has(.cfv-sort-select) {
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 39;
    height: 46px;
    margin: 0;
    padding: 0;
    background: #0a0a0a;
    animation: crs-bar-in 0.25s ease;
  }

  body.crs-plp-on.crs-toolbar-stuck .cfv-content>div:has(.cfv-sort-select) .tabular-nums {
    display: none;
  }

  body.crs-plp-on.crs-toolbar-stuck .cfv-content>div:has(.cfv-sort-select)>div.flex.items-center {
    flex: 1;
    height: 100%;
  }

  body.crs-plp-on.crs-toolbar-stuck .cfv-content>div:has(.cfv-sort-select) button[aria-controls='cfv-mobile-drawer'] {
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    justify-content: center;
  }

  body.crs-plp-on.crs-toolbar-stuck .cfv-content>div:has(.cfv-sort-select) button[aria-controls='cfv-mobile-drawer']::after {
    color: #fff;
    font-size: 13px;
    letter-spacing: 1.56px;
  }

  @keyframes crs-bar-in {
    from {
      transform: translateY(100%);
    }

    to {
      transform: translateY(0);
    }
  }

  body.crs-plp-on main~section {
    margin-bottom: 46px;
  }

  body.crs-plp-on.crs-drawer-open {
    overflow: hidden;
  }

  body.crs-plp-on .crs-drawer {
    position: fixed;
    inset: 0;
    z-index: 80;
    background: #fff;
    flex-direction: column;
  }

  body.crs-plp-on.crs-drawer-open .crs-drawer {
    display: flex;
    animation: crs-drawer-in 0.25s ease;
  }

  @keyframes crs-drawer-in {
    from {
      transform: translateY(6%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  body.crs-plp-on .crs-drawer-head {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 57px;
    padding: 0 20px;
    border-bottom: 1px solid var(--crs-border);
  }

  body.crs-plp-on .crs-drawer-title {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  body.crs-plp-on .crs-drawer-x {
    border: 0;
    background: none;
    width: 28px;
    padding: 0 0 3px;
    font-size: 26px;
    line-height: 1;
    cursor: pointer;
  }

  body.crs-plp-on .crs-drawer-body {
    flex: 1;
    min-height: 0;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 24px;
  }

  body.crs-plp-on .crs-drawer-foot {
    flex-shrink: 0;
    display: flex;
    gap: 8px;
    padding: 9px 20px;
    border-top: 1px solid var(--crs-border);
    background: #fff;
  }

  body.crs-plp-on .crs-drawer-clear {
    flex-shrink: 0;
    height: 44px;
    padding: 0 15px;
    background: #fff;
    border: 1px solid #0a0a0a;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
  }

  body.crs-plp-on .crs-drawer-show {
    flex: 1;
    height: 44px;
    border: 0;
    background: #0a0a0a;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
  }

  body.crs-plp-on .crs-drawer-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 14px 20px;
    border-bottom: 1px solid var(--crs-border);
  }

  body.crs-plp-on .crs-drawer-chips:empty {
    display: none;
  }

  body.crs-plp-on .crs-drawer .crs-active-chip {
    background: #fff;
    border-color: rgba(0, 0, 0, 0.35);
    padding: 9px 12px;
    font-size: 13px;
  }

  body.crs-plp-on .crs-drawer-sort {
    display: flex;
    flex-direction: column;
    padding: 16px 20px 18px;
    border-bottom: 1px solid var(--crs-border);
  }

  body.crs-plp-on .crs-drawer-sort-title {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  body.crs-plp-on .crs-radio {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 0;
    font-size: 13px;
    cursor: pointer;
    user-select: none;
  }

  body.crs-plp-on .crs-radio-input {
    appearance: none;
    width: 22px;
    height: 22px;
    margin: 0;
    flex-shrink: 0;
    border: 1.5px solid rgba(0, 0, 0, 0.45);
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }

  body.crs-plp-on .crs-radio-input:checked {
    border-color: #000;
    background: radial-gradient(circle, #000 0 40%, transparent 46%);
  }

  body.crs-plp-on .crs-drawer .crs-group {
    padding: 16px 20px;
    border-bottom: 1px solid var(--crs-border);
  }
}`,a=`/collections/boxing-gloves`,o=`/pages/glove-guide-quiz`,s=e=>/youth|kids/i.test(e.title),c=e=>/^pro\b|t3d/i.test(e.title),l=e=>!c(e)&&(/\bs4\b|\be1\b|contender/i.test(e.title)||s(e)),u=[`beginner`],ee=[`intermediate`],d=[`beginner`,`intermediate`],f=[`intermediate`,`advanced`],te={"hayabusa-batroc-boxing-gloves":f,"hayabusa-black-widow-boxing-gloves":f,"hayabusa-captain-america-sam-wilson-boxing-gloves":f,"hayabusa-daredevil-boxing-gloves":f,"hayabusa-deadpool-boxing-gloves":f,"hayabusa-e1-boxing-gloves":d,"hayabusa-e1-kids-boxing-gloves":d,"hayabusa-e1-leather-boxing-gloves":d,"hayabusa-hulk-boxing-gloves":f,"hayabusa-miles-morales-boxing-gloves":f,"hayabusa-s4-lace-up-boxing-gloves":ee,"hayabusa-s4-leather-boxing-gloves":u,"hayabusa-s4-youth-epic-boxing-gloves":u,"hayabusa-t3-lace-up-boxing-gloves":f,"hayabusa-t3-lx-boxing-gloves":f,"hayabusa-t3-neon-boxing-gloves":f,"hayabusa-t360-boxing-gloves":f,"hayabusa-t360-leather-boxing-gloves":f,"hayabusa-t3d-boxing-gloves":f,"hayabusa-thanos-boxing-gloves":f,"hayabusa-thor-boxing-gloves":f,"hayabusa-wolverine-boxing-gloves":f,"marvel-black-panther-boxing-gloves":f,"marvel-captain-america-boxing-gloves":f,"marvel-captain-marvel-boxing-gloves":f,"marvel-iron-man-boxing-gloves":f,"marvel-the-punisher-boxing-gloves":f,"marvel-venom-boxing-gloves":f,"mayweather-champ-boxing-gloves":f,"mayweather-contender-boxing-gloves":d,"s4-boxing-gloves":u,"s4-youth-boxing-gloves":u,"t3-boxing-gloves":f,"t3-kanpeki-boxing-gloves":f},p=(e,t)=>{let n=te[e.handle];return n?n.includes(t):t===`advanced`?c(e):t===`beginner`?l(e):!c(e)&&!l(e)},m=e=>[{group:`Glove Use`,option:e}],h=e=>({group:`Glove Surface Material`,option:e}),g=[{title:`Training Type`,tip:`What you'll do in these gloves most days. Mixing bag, pads and classes? Choose All-Purpose.`,options:[{label:`All-Purpose Training`,tip:`One glove for everything — heavy bag, pads, mitts and class work. The right first pair for most people.`,native:m(`All-Purpose Training`)},{label:`Bag Work`,tip:`Firmer, denser padding built to take heavy bag impact round after round. Not for hitting a partner.`,native:m(`Bag Work`)},{label:`Sparring`,tip:`Softer, thicker padding — usually 16 oz — that protects your hands and your training partner.`,native:m(`Sparring`)},{label:`Competition`,tip:`Lighter, fight-approved construction built to ring rules. For competing, not daily training.`,native:m(`Competition`)}]},{title:`Glove Weight`,tip:`Ounces measure padding, not hand size — more ounces, more protection. Common picks: 12 oz bag work · 14 oz all-purpose · 16 oz sparring standard. Kids: 6–10 oz.`,chips:!0,dynamicNative:{group:`Glove Weight`,pattern:/oz$/i},options:[]},{title:`Experience Level`,tip:`Pick where you are today. Each level matches glove firmness, feedback and construction — it's about fit for your training, not a skill test.`,options:[{label:`Beginner`,tip:`New or coming back to training. Forgiving fit, softer impact feel, easy on-off closures.`,match:e=>p(e,`beginner`)},{label:`Intermediate`,tip:`Training regularly, starting to spar. Balanced padding with more feedback on every punch.`,match:e=>p(e,`intermediate`)},{label:`Advanced`,tip:`Years in the gym or competing. Pro-level construction, premium materials, firmer feedback.`,match:e=>p(e,`advanced`)}]},{title:`Price`,options:[{label:`Under $100`,match:e=>e.price<100},{label:`$100 – $200`,match:e=>e.price>=100&&e.price<200},{label:`$200+`,match:e=>e.price>=200}]},{title:`Closure`,tip:`How the glove tightens around your wrist — this decides wrist support and whether you can glove up without help.`,collapsed:!0,options:[{label:`Dual-X`,tip:`Hayabusa's double-strap closure — wraps the wrist from both sides for lace-like support you can put on yourself.`,native:[{group:`Glove Closure`,option:`Dual-X`}]},{label:`Hook & Loop`,tip:`Velcro strap — on and off in seconds. Ideal for classes and training on your own.`,native:[{group:`Glove Closure`,option:`Hook and loop`}]},{label:`Lace-Up`,tip:`The tightest, most locked-in fit, but you'll need a partner to tie them. The choice for sparring and fight night.`,native:[{group:`Glove Closure`,option:`Lace`}]}]},{title:`Age Group`,collapsed:!0,options:[{label:`Adult`,match:e=>!s(e)},{label:`Kids & Youth`,tip:`Built for smaller hands — 6 to 10 oz. Match size to your child's age and weight with the size guide.`,match:s}]},{title:`Discipline`,collapsed:!0,options:[{label:`Boxing`,native:[{group:`Discipline`,option:`Boxing`}]},{label:`Kickboxing`,native:[{group:`Discipline`,option:`Kickboxing`}]},{label:`Muay Thai`,native:[{group:`Discipline`,option:`Muay Thai`}]},{label:`MMA`,native:[{group:`Discipline`,option:`MMA`}]}]},{title:`Material`,collapsed:!0,options:[{label:`Vylar Engineered Leather`,tip:`Hayabusa's engineered leather — outlasts traditional leather under heavy use, and it's animal-free.`,native:[h(`Vylar`)]},{label:`Genuine Leather`,tip:`Full- and top-grain natural leather — premium feel that softens and molds to your hand over time.`,native:[`Top Grain Leather`,`Microfiber Leather`,`Full Grain Leather`,`Genuine Leather`].map(h)}]},{title:`Collection`,collapsed:!0,options:[{label:`T3 Series`,match:e=>/\bt3\b/i.test(e.title)&&!/t3d/i.test(e.title)},{label:`S4 Series`,match:e=>/\bs4\b/i.test(e.title)},{label:`T360`,match:e=>/t360/i.test(e.title)},{label:`E1`,match:e=>/\be1\b/i.test(e.title)},{label:`PRO Series`,match:e=>/^pro\b/i.test(e.title)},{label:`T3D`,match:e=>/t3d/i.test(e.title)},{label:`Marvel`,match:e=>/marvel/i.test(e.title)},{label:`Mayweather`,match:e=>/mayweather/i.test(e.title)}]},{title:`Padding Profile`,collapsed:!0,options:[{label:`Balanced`,native:[{group:`Glove Padding Profile`,option:`Balanced`}]},{label:`Soft Impact`,native:[{group:`Glove Padding Profile`,option:`Soft Impact`}]},{label:`Precision`,native:[{group:`Glove Padding Profile`,option:`Precision`}]}]},{title:`Color`,collapsed:!0,dynamicNative:{group:`Color`,pattern:/./},options:[]},{title:`Quick`,hidden:!0,options:[{label:`Bestsellers`,match:e=>e.bestseller}]}],ne=[{label:`Bestsellers`,group:`Quick`,option:`Bestsellers`},{label:`Sparring-Ready`,group:`Training Type`,option:`Sparring`},{label:`Bag Work`,group:`Training Type`,option:`Bag Work`},{label:`Best for Beginners`,group:`Experience Level`,option:`Beginner`},{label:`Kids & Youth`,group:`Age Group`,option:`Kids & Youth`},{label:`Premium Leather`,group:`Material`,option:`Genuine Leather`}],_=[{value:`featured`,label:`Featured`},{value:`price-low-high`,label:`Price: Low to High`},{value:`price-high-low`,label:`Price: High to Low`},{value:`newest`,label:`Newest`}];function v(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)v(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function y(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...i}=t??{},a=document.createElement(e);for(let[e,t]of Object.entries(i))e.startsWith(`on`)&&typeof t==`function`?a.addEventListener(e.slice(2).toLowerCase(),t):t===!0?a.setAttribute(e,``):t!==!1&&t!=null&&a.setAttribute(e,String(t));return v(a,r),a}var b=y,x=`Filters Panel`,re=new Set,ie=(t,n)=>{let r=x,i=`${r}|${n}`;re.has(i)||(re.add(i),e(`exp_plp_tooltip`,n,`view`,r))},ae,oe=(e,t)=>y(`span`,{class:`crs-info`,onMouseEnter:e=>{if(!matchMedia(`(hover: hover) and (pointer: fine)`).matches)return;let n=e.currentTarget;ae=setTimeout(()=>ie(n,t),400)},onMouseLeave:()=>clearTimeout(ae),onClick:e=>{e.preventDefault(),e.stopPropagation();let n=e.currentTarget;if(document.querySelectorAll(`.crs-info-open`).forEach(e=>e!==n&&e.classList.remove(`crs-info-open`)),n.classList.toggle(`crs-info-open`),n.classList.contains(`crs-info-open`)){ie(n,t);let e=innerWidth<1024?254:193,r=n.getBoundingClientRect().left-8+e-(innerWidth-16);n.style.setProperty(`--crs-tip-shift`,r>0?`${-r}px`:`0px`)}},children:b(`span`,{class:`crs-tip`,children:[e,y(`span`,{class:`crs-tip-x`,onClick:e=>{e.preventDefault(),e.stopPropagation(),e.currentTarget.closest(`.crs-info`)?.classList.remove(`crs-info-open`)}})]})}),se=()=>y(`span`,{class:`crs-chevron`}),ce=(e,t,n)=>b(`label`,{class:`crs-opt`,"data-group":e.title,"data-option":t.label,children:[y(`input`,{type:`checkbox`,class:`crs-opt-check`,onChange:()=>n(e.title,t.label)}),b(`span`,{class:`crs-opt-label`,children:[t.label,t.tip?oe(t.tip,t.label):null]}),y(`span`,{class:`crs-opt-count`})]}),le=(e,t,n)=>b(`button`,{type:`button`,class:`crs-size`,"data-group":e.title,"data-option":t.label,onClick:()=>n(e.title,t.label),children:[y(`b`,{children:t.label}),y(`span`,{class:`crs-size-count`})]}),S=(t,n)=>b(`div`,{class:`crs-group`+(t.collapsed?` crs-collapsed`:``),"data-group":t.title,children:[b(`button`,{type:`button`,class:`crs-group-head`,onClick:n=>{n.currentTarget.closest(`.crs-group`).classList.toggle(`crs-collapsed`),e(`exp_plp_group_toggle`,t.title,`click`,x)},children:[b(`span`,{class:`crs-group-title`,children:[t.title,t.tip?oe(t.tip,t.title):null]}),se()]}),y(`div`,{class:`crs-group-body`+(t.chips?` crs-chips-body`:``),children:t.options.map(e=>t.chips?le(t,e,n):ce(t,e,n))})]}),ue=(e,t)=>y(`div`,{class:`crs-aside`,"data-crs":``,children:e.filter(e=>!e.hidden).map(e=>S(e,t))}),de=(e,t,n,r,i,a)=>b(`div`,{class:`crs-drawer`,"data-crs":``,children:[b(`div`,{class:`crs-drawer-head`,children:[y(`span`,{class:`crs-drawer-title`,children:`Filter & Sort`}),y(`button`,{type:`button`,class:`crs-drawer-x`,"aria-label":`Close filters`,onClick:()=>r(),children:`×`})]}),b(`div`,{class:`crs-drawer-body`,children:[y(`div`,{class:`crs-drawer-chips`}),b(`div`,{class:`crs-drawer-sort`,children:[y(`span`,{class:`crs-drawer-sort-title`,children:`Sort by`}),_.map(e=>b(`label`,{class:`crs-radio`,children:[y(`input`,{type:`radio`,name:`crs-drawer-sort`,value:e.value,class:`crs-radio-input`,onChange:()=>n(e.value)}),y(`span`,{class:`crs-radio-label`,children:e.label})]}))]}),e.filter(e=>!e.hidden).map(e=>S(e,t))]}),b(`div`,{class:`crs-drawer-foot`,children:[y(`button`,{type:`button`,class:`crs-drawer-clear`,onClick:()=>a(),children:`Clear all`}),y(`button`,{type:`button`,class:`crs-drawer-show`,onClick:()=>i()})]})]}),fe=e=>y(`div`,{class:`crs-chips-row`,"data-crs":``,children:ne.map(t=>y(`button`,{type:`button`,class:`crs-chip`,"data-group":t.group,"data-option":t.option,onClick:()=>e(t.group,t.option),children:t.label}))}),pe=e=>b(`div`,{class:`crs-toolbar`,"data-crs":``,children:[b(`div`,{class:`crs-toolbar-left`,children:[y(`span`,{class:`crs-results`}),y(`div`,{class:`crs-active-chips`})]}),b(`div`,{class:`crs-sort`,children:[y(`span`,{class:`crs-sort-label`,children:`Sort by`}),y(`select`,{class:`crs-sort-select`,"aria-label":`Sort by`,onChange:t=>e(t.currentTarget.value),children:_.map(e=>y(`option`,{value:e.value,children:e.label}))})]})]}),C=(e,t)=>b(`button`,{type:`button`,class:`crs-active-chip`,onClick:t,children:[e,y(`span`,{class:`crs-active-chip-x`,children:`×`})]}),me=e=>y(`button`,{type:`button`,class:`crs-clear`,onClick:e,children:`Clear filters`}),he=()=>y(`div`,{class:`crs-quiz-tile`,"data-crs":``,children:b(`div`,{class:`crs-quiz-inner`,children:[y(`span`,{class:`crs-quiz-overline`,children:`Glove Finder`}),y(`h3`,{class:`crs-quiz-title`,children:`Find your glove in 60 seconds`}),y(`p`,{class:`crs-quiz-text`,children:`Five quick questions about how you train — we'll match model and size.`}),y(`a`,{class:`crs-quiz-cta`,href:o,onClick:()=>e(`exp_plp_quiz_start`,`Start the quiz`,`click`,`Glove Finder`),children:`Start the quiz`})]})}),ge=()=>y(`span`,{class:`crs-ships`,children:`Ships Free`}),w=new Set,T=(e,t)=>`${e}||${t}`,E=()=>document.querySelector(`.cfv-aside`),D=()=>document.querySelector(`.cfv-content`),O=()=>D()?.querySelector(`:scope > div:has(.cfv-sort-select)`)??null,k=()=>location.pathname===a;function A(e){let t=E();if(!t)return null;let n=[...t.querySelectorAll(`h3`)].find(t=>t.textContent.trim()===e);return n?n.parentElement.parentElement:null}function j(e,t){let n=A(e);return n?[...n.querySelectorAll(`label.cfv-option`)].find(e=>e.querySelector(`.flex-1`)?.textContent.trim()===t)??null:null}function M(e,t){return j(e,t)?.querySelector(`input`)??null}function _e(e,t){let n=j(e,t)?.querySelector(`.tabular-nums`);return n&&parseInt(n.textContent.trim(),10)||0}function N(e,t){let n=g.find(t=>t.title===e),r=n?.options.find(e=>e.label===t);return n&&r?{g:n,o:r}:null}function P(e,t){let n=N(e,t);return n?n.o.native?n.o.native.every(e=>M(e.group,e.option)?.checked):w.has(T(e,t)):!1}function F(e,t){let n=e.find(e=>{let n=M(e.group,e.option);return n&&n.checked!==t});if(!n){$();return}M(n.group,n.option).click(),setTimeout(()=>F(e,t),180)}var ve={panel:{name:`exp_plp_filter`,loc:`Filters Panel`},quick:{name:`exp_plp_quick_filter`,loc:`Quick Filters`},chip:{name:`exp_plp_filter_remove`,loc:`Chosen Filters`}};function I(t,n,r=`panel`){let i=N(t,n);if(!i)return;let a=!P(t,n);if(i.o.native)F(i.o.native,a);else{a?w.add(T(t,n)):w.delete(T(t,n));let i=ve[r];e(i.name,`${t}: ${n} ${a?`on`:`off`}`,`click`,i.loc)}$()}function L(){let e=E()?.querySelector(`input[type="checkbox"]:checked`);if(!e){$();return}e.click(),setTimeout(L,180)}function R(t=`exp_plp_clear`,n=`Clear filters`,r=`Chosen Filters`){w.clear(),L(),e(t,n,`click`,r),$()}function z(e){(E()?.querySelector(`input[name="cfv-sort"][value="${e}"]`))?.click(),$()}function B(){return E()?.querySelector(`input[name="cfv-sort"]:checked`)?.value??`featured`}function V(e){let t=(e.querySelector(`a[href^="/products/"]`)?.getAttribute(`href`)??``).split(`?`)[0].split(`/`).pop()??``,n=e.querySelector(`h4`)?.textContent?.trim()??``,r=e.querySelector(`.font-body span`)?.textContent??``;return{handle:t,title:n,price:parseFloat(r.replace(/[^\d.]/g,``))||0,bestseller:[...e.querySelectorAll(`span.font-serif`)].some(e=>/bestseller/i.test(e.textContent))}}function H(){let e=D();return e?[...e.querySelectorAll(`:scope > div.grid`)].find(e=>e.querySelector(`.product-card-hover-shadow`))??null:null}var U=()=>[...H()?.querySelectorAll(`.product-card-hover-shadow`)??[]];function ye(e){if(e.dataset.crsDone)return;let t=e.querySelector(`.text-left`);if(!t)return;e.dataset.crsDone=`1`,t.classList.add(`crs-card-info`);let n=t.querySelector(`:scope > div.absolute`);if(n){n.classList.add(`crs-rating-row`);let e=n.querySelector(`.okendo-summary-stars`)?.getAttribute(`aria-label`)?.match(/([\d.]+) out of 5/)?.[1],t=n.querySelector(`.okendo-summary-count`)?.textContent?.replace(/\D/g,``);if(e){let r=document.createElement(`span`);r.className=`crs-rating-text`,r.textContent=`${e}/5${t?` (${t})`:``}`,n.append(r)}}let r=[...t.querySelectorAll(`:scope > div.h-5`)].find(e=>!e.classList.contains(`crs-rating-row`));if(r){r.classList.add(`crs-badge-row`);let t=r.textContent.trim(),n=e.querySelector(`.bg-gray-100, [class*="dark:bg-"]`);if(t&&n&&!n.querySelector(`.crs-badge`)){let e=document.createElement(`span`);e.className=`crs-badge crs-badge--${t.toLowerCase()}`,e.textContent=t,n.append(e)}}t.querySelector(`:scope > a`)?.classList.add(`crs-title-link`),t.querySelector(`:scope > div.md\\:flex.flex-col`)?.classList.add(`crs-price-row`),V(e).price>=85&&t.append(ge())}function be(){let e=new Map;for(let t of g){let n=t.options.filter(e=>e.match&&w.has(T(t.title,e.label)));n.length&&e.set(t.title,n)}return e}function xe(){let e=be(),t=0;for(let n of U()){let r=V(n),i=!0;for(let t of e.values())if(!t.some(e=>e.match(r))){i=!1;break}n.classList.toggle(`crs-hide`,!i),i&&t++}return t}var W=null;function Se(){for(let e of g){if(!e.dynamicNative||e.options.length)continue;let t=A(e.dynamicNative.group);t&&(e.options=[...t.querySelectorAll(`label.cfv-option .flex-1`)].map(e=>e.textContent.trim()).filter(t=>e.dynamicNative.pattern.test(t)).map(t=>({label:t,native:[{group:e.dynamicNative.group,option:t}]})))}}function Ce(e,t){return t.native?t.native.reduce((e,t)=>e+_e(t.group,t.option),0):U().reduce((e,n)=>e+ +!!t.match(V(n)),0)}function we(){if(!W)return;for(let e of[W.sidebar,W.drawer])e.querySelectorAll(`.crs-opt, .crs-size`).forEach(e=>{let t=e.dataset.group,n=e.dataset.option,r=N(t,n);if(!r)return;let i=P(t,n),a=Ce(r.g,r.o);e.classList.contains(`crs-opt`)?(e.querySelector(`.crs-opt-check`).checked=i,e.querySelector(`.crs-opt-count`).textContent=String(a)):(e.classList.toggle(`crs-size-active`,i),e.querySelector(`.crs-size-count`).textContent=String(a)),e.classList.toggle(`crs-opt-empty`,a===0&&!i)});W.chips.querySelectorAll(`.crs-chip`).forEach(e=>{e.classList.toggle(`crs-chip-active`,P(e.dataset.group,e.dataset.option))});let e=B();W.drawer.querySelectorAll(`input[name="crs-drawer-sort"]`).forEach(t=>{t.checked=t.value===e})}function Te(e){if(!W)return;let t=`${e} result${e===1?``:`s`}`;W.toolbar.querySelector(`.crs-results`).textContent=t,O()?.querySelector(`.tabular-nums`)?.setAttribute(`data-crs-results`,t),W.drawer.querySelector(`.crs-drawer-show`).textContent=`Show ${t}`,W.toolbar.querySelector(`.crs-sort-select`).value=B();let n=[];for(let e of g)for(let t of e.options)P(e.title,t.label)&&n.push({group:e.title,option:t.label});let r=W.toolbar.querySelector(`.crs-active-chips`);r.textContent=``;let i=W.drawer.querySelector(`.crs-drawer-chips`);if(i.textContent=``,W.mchips.textContent=``,n.length){for(let e of n)r.append(C(e.option,()=>I(e.group,e.option,`chip`))),i.append(C(e.option,()=>I(e.group,e.option,`chip`))),W.mchips.append(C(e.option,()=>I(e.group,e.option,`chip`)));r.append(me(()=>R()))}}var G=null,K=0,Ee=0;function De(){let e=O();e&&(G||(G=document.createElement(`div`),G.className=`crs-stuck-sentinel`,G.setAttribute(`data-crs`,``)),G.nextElementSibling!==e&&e.before(G),Oe())}function Oe(){let e=document.body;if(!e)return;let t=O();if(!k()||!t||!G?.isConnected||matchMedia(`(min-width: 1024px)`).matches){e.classList.remove(`crs-toolbar-stuck`),G?.style.removeProperty(`height`);return}let n=e.classList.contains(`crs-toolbar-stuck`);n||(K=parseFloat(getComputedStyle(t).top)||0,Ee=t.offsetHeight);let r=G.getBoundingClientRect().top<=K;r!==n&&(e.classList.toggle(`crs-toolbar-stuck`,r),G.style.height=r?`${Ee}px`:``)}var q=!1;function ke(){q||(q=!0,requestAnimationFrame(()=>{q=!1,Oe()}))}var J=!1;function Ae(){J=!0,document.body.classList.add(`crs-drawer-open`)}function je(t=`exp_plp_drawer_close`,n=`Close filters`){J=!1,document.body.classList.remove(`crs-drawer-open`),e(t,n,`click`,`Filter & Sort Drawer`)}function Me(e){k()&&e.target?.closest?.(`button[aria-controls="cfv-mobile-drawer"]`)&&(e.preventDefault(),e.stopPropagation(),Ae())}var Y=null;function Ne(){let e=H();if(!e)return;Y??=he();let t=[...e.children].filter(e=>e!==Y)[6]??null;(Y.nextElementSibling!==t||Y.parentElement!==e)&&e.insertBefore(Y,t)}var Pe=``,X=null,Z=!1;function Fe(){X||(X=document.createElement(`style`),X.id=`crs-plp-styles`,X.textContent=Pe);let e=document.head||document.documentElement;e&&X.parentElement!==e&&e.append(X)}var Q=!1,Ie=0;function $(){cancelAnimationFrame(Ie),Ie=requestAnimationFrame(Le)}function Le(){if(!Q){Q=!0;try{if(Fe(),!k()){J=!1,document.body?.classList.remove(`crs-plp-on`,`crs-toolbar-stuck`,`crs-drawer-open`);return}let t=E(),n=D(),i=H();if(!t||!n||!i)return;if(document.body.classList.add(`crs-plp-on`),(n.querySelector(`h1`)?.parentElement)?.classList.add(`crs-h1-block`),!W){Se();let e=fe((e,t)=>I(e,t,`quick`)),t=pe(z),r=document.createElement(`div`);r.className=`crs-header`,r.setAttribute(`data-crs`,``);let i=document.createElement(`h1`);i.className=`uppercase font-semibold crs-h1`,i.textContent=n.querySelector(`h1`)?.textContent??`Boxing Gloves`,r.append(i,e,t),W={header:r,sidebar:ue(g,I),chips:e,toolbar:t,drawer:de(g,(e,t)=>I(e,t,`panel`),z,()=>je(),()=>je(`exp_plp_drawer_show`,`Show results`),()=>R(`exp_plp_drawer_clear`,`Clear all`,`Filter & Sort Drawer`)),mchips:Object.assign(document.createElement(`div`),{className:`crs-mchips`})},W.mchips.setAttribute(`data-crs`,``)}let a=n.parentElement;(W.header.nextElementSibling!==a||W.header.parentElement!==a.parentElement)&&a.before(W.header),t.contains(W.sidebar)||t.prepend(W.sidebar);let o=O();o&&W.mchips.previousElementSibling!==o&&o.after(W.mchips),document.body.contains(W.drawer)||document.body.append(W.drawer),document.body.classList.toggle(`crs-drawer-open`,J),De(),Ne(),U().forEach(ye);let s=xe();we(),Te(s),Z||(Z=!0,e(`exp_plp_loaded`,`Experiment loaded`,`load`,`PLP`),r(`.crs-quiz-tile`,`exp_plp_quiz_view`,`Glove Finder`,`Visibility`,1e3))}finally{Q=!1}}}function Re(e){Pe=e,new MutationObserver(e=>{Q||e.some(e=>!(e.target instanceof Element&&e.target.closest(`[data-crs]`)))&&$()}).observe(document,{childList:!0,subtree:!0}),addEventListener(`scroll`,ke,{passive:!0}),addEventListener(`resize`,ke),document.addEventListener(`click`,Me,!0),document.addEventListener(`click`,e=>{e.target?.closest?.(`.crs-info`)||document.querySelectorAll(`.crs-info-open`).forEach(e=>e.classList.remove(`crs-info-open`))}),$()}t({name:`PLP`,dev:`OS`}),n(`exp_plp`);var ze=window;window.top===window.self&&!ze.__crsPlp&&(ze.__crsPlp=!0,Re(i))})();
