(function(){var e=(e,t,n,r=``)=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r}),i(`Event: ${e} | ${t} | ${n} | ${r}`,`success`)},t=({name:e,dev:t})=>{console.log(`%c EXP: ${e} (DEV: ${t})`,`background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`)},n=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},r=(t,n,r,a,o=1e3,s=.5)=>{let c,l;if(c=new IntersectionObserver(function(t){t[0].isIntersecting===!0?l=setTimeout(()=>{e(n,t[0].target.dataset.visible||a||``,`view`,r),c.disconnect()},o):(i(`Element is not fully visible`,`warn`),clearTimeout(l))},{threshold:[s]}),typeof t==`string`){let e=document.querySelector(t);e&&c.observe(e)}else c.observe(t)},i=(e,t=`info`)=>{let n;switch(t){case`info`:n=`color: #3498db;`;break;case`warn`:n=`color: #f39c12;`;break;case`error`:n=`color: #e74c3c;`;break;case`success`:n=`color: #2ecc71;`;break}console.log(`%c>>> ${e}`,`${n} font-size: 16px; font-weight: 600`)},a=`/* Shared styles. Everything is scoped under \`html[data-exp-page]\` so nothing
   applies outside the basket and checkout. */

:root {
  --exp-text: #212529;
  --exp-primary: #093b32;
  --exp-cta-dark: #0f4a3c;
  --exp-cta: #1f8964;
  --exp-muted: #6b7280;
  --exp-border: #dfdedc;
  --exp-border-strong: #ced4da;
  --exp-surface: #f8f9fa;
  --exp-success-bg: #e9f3ee;
}

html[data-exp-page] [data-exp-hide] {
  display: none !important;
}

/* Next.js leaves the basket for a product page without a reload, keeping our
   inserted header/footer in the DOM while the native ones come back. */
html:not([data-exp-page='basket']) .exp-header,
html:not([data-exp-page]) .exp-footer {
  display: none !important;
}

html[data-exp-page] .exp-container {
  box-sizing: border-box;
  width: 100%;
  max-width: 1172px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Link-styled button used for our toggles ("Change", "Edit", …). */
html[data-exp-page] .exp-link {
  padding: 0;
  border: 0;
  background: none;
  color: var(--exp-text);
  font: inherit;
  font-size: 14px;
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
}

/* PayPal's Pay Later message in the design's lilac box (4130:1064, 4102:2748).
   Collapsed until PayPal renders a message, but not display:none: PayPal
   sizes its iframe from the container and only calls onRender once it has
   a width, so a hidden box never gets its message. The margins the pages
   set are dropped meanwhile so the empty box takes no space. */
.exp-pp-message {
  padding: 10px;
  border-radius: 6px;
  background: #fcf2ff;
}

.exp-pp-message:not([data-exp-rendered]) {
  height: 0;
  margin: 0 !important;
  padding: 0;
  overflow: hidden;
  visibility: hidden;
}
`,o=[],s=!1,c=()=>{s=!1;for(let e of o)try{e()}catch(e){console.error(`[exp] task failed`,e)}},l=()=>{s||(s=!0,requestAnimationFrame(c))},u=!1,d=e=>{o.push(e),u||(u=!0,new MutationObserver(l).observe(document.documentElement,{childList:!0,subtree:!0,characterData:!0})),l()},f=l,p=e=>{let t=document.createElement(`style`);t.textContent=e,document.head.appendChild(t)},m=(e,t,n=``)=>{e&&e.getAttribute(t)!==n&&e.setAttribute(t,n)},h=(e,t)=>{e?.hasAttribute(t)&&e.removeAttribute(t)},g=e=>m(e,`data-exp-hide`),_=(e,t)=>{e&&e.textContent!==t&&(e.textContent=t)},v=(e,t)=>{if(!e)return;let n=Array.from(e.childNodes).find(e=>e.nodeType===Node.TEXT_NODE&&e.textContent?.trim());n&&n.textContent!==t&&(n.textContent=t)},y=(e,t,n=document)=>Array.from(n.querySelectorAll(e)).reverse().find(e=>{let n=e.textContent?.trim()??``;return typeof t==`string`?n===t:t.test(n)}),b=e=>{let t=document.createElement(`template`);return t.innerHTML=e.trim(),t.content.firstElementChild},ee=[`contact`,`shipping`,`payment`],x=()=>{let e=location.pathname.replace(/\/+$/,``);return e===`/basket`?`basket`:e===`/checkout`?`checkout`:null},S=()=>{if(x()!==`checkout`)return null;let e=new URLSearchParams(location.search).get(`step`);return e&&ee.includes(e)?e:`contact`},C=()=>{let e=document.documentElement,t=x(),n=S();t?e.dataset.expPage=t:delete e.dataset.expPage,n?e.dataset.expStep=n:delete e.dataset.expStep},te=e=>{let t=location.href,n=()=>{location.href!==t&&(t=location.href,e())};for(let e of[`pushState`,`replaceState`]){let t=history[e];history[e]=function(...e){let r=t.apply(this,e);return n(),r}}window.addEventListener(`popstate`,n)},ne=`/* Basket header (designs 4102:2522, 4102:3136) */
.exp-header {
  position: relative;
  z-index: 40;
  background: #fff;
}

.exp-header__row {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  min-height: 112px;
  /* Divider as wide as the content, not the padded container (4102:2549). */
  background: linear-gradient(var(--exp-border), var(--exp-border)) no-repeat center bottom /
    calc(100% - 32px) 1px;
}

.exp-header__back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  justify-self: start;
  color: var(--exp-text);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.exp-header__back span {
  text-decoration: underline;
  text-underline-offset: 2px;
}

.exp-header__back-short,
.exp-header__login-short {
  display: none;
}

.exp-header__logo img {
  display: block;
  width: 140px;
  height: auto;
}

.exp-header__right {
  justify-self: end;
}

.exp-header__login {
  margin: 0;
  color: var(--exp-muted);
  font-size: 12px;
  line-height: 18px;
}

.exp-header__login a,
.exp-header__login-short {
  color: var(--exp-text);
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* Checkout header: logo left, login prompt right. */
html[data-exp-page='checkout'] [data-exp-checkout-header] {
  position: static;
  border-bottom: 0;
  background: #fff;
}

html[data-exp-page='checkout'] [data-exp-checkout-header] > div > div {
  justify-content: space-between;
}

/* Checkout header (4102:3320): 140px logo, 96px tall above the steps. */
html[data-exp-page='checkout'] [data-exp-checkout-header] > div {
  padding-top: 15px;
  padding-bottom: 10px;
}

html[data-exp-page='checkout'] [data-exp-checkout-header] img {
  width: 140px;
  height: auto;
}

@media (max-width: 767px) {
  .exp-header__row {
    min-height: 96px;
  }

  .exp-header__logo img {
    width: 96px;
  }

  .exp-header__back-full,
  .exp-header__login {
    display: none;
  }

  .exp-header__back-short,
  .exp-header__login-short {
    display: inline;
  }

  .exp-header__back,
  .exp-header__login-short {
    font-size: 14px;
    font-weight: 500;
  }

  /* Mobile checkout: logo centred, the form keeps its own "Login" link. */
  html[data-exp-page='checkout'] [data-exp-checkout-header] > div > div {
    justify-content: center;
  }

  html[data-exp-page='checkout'] [data-exp-checkout-header] .exp-header__login {
    display: none;
  }

  /* Mobile checkout header (4102:3645): 98px logo, 75px tall. */
  html[data-exp-page='checkout'] [data-exp-checkout-header] > div {
    padding-top: 14px;
    padding-bottom: 11px;
  }

  html[data-exp-page='checkout'] [data-exp-checkout-header] img {
    width: 98px;
  }
}
`,w=`exp_checkout_`,T=(t,n,r)=>e(w+t,n,`click`,r),E=new Set,D=(e,t,n,i)=>{let a=`${t}|${i}`;E.has(a)||(E.add(a),r(e,w+t,i,n))},re=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M13 8H3m0 0 4.5-4.5M3 8l4.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,O=`<p class="exp-header__login">Already have an account? <a href="/login">Login</a></p>`,ie=class{constructor(){p(ne),d(()=>this.basket()),d(()=>this.checkout())}basket(){if(x()!==`basket`)return;let e=document.querySelector(`#storefront-header`)?.parentElement;if(e){if(g(e),!document.querySelector(`.exp-header`)){let t=document.querySelector(`#storefront-header a[href="/"] img`),n=b(`
        <header class="exp-header">
          <div class="exp-container exp-header__row">
            <a class="exp-header__back" href="/products">${re}<span class="exp-header__back-full">Continue shopping</span><span class="exp-header__back-short">Go back</span></a>
            <a class="exp-header__logo" href="/" aria-label="House of Worktops"></a>
            <div class="exp-header__right">${O}<a class="exp-header__login-short" href="/login">Login</a></div>
          </div>
        </header>`);t&&n.querySelector(`.exp-header__logo`).appendChild(t.cloneNode(!0)),n.addEventListener(`click`,e=>{let t=e.target.closest(`a`);t&&(t.matches(`.exp-header__back`)?T(`continue_shopping`,`Continue shopping`,`Header`):t.matches(`.exp-header__logo`)?this.proxyLogo(e):t.getAttribute(`href`)===`/login`&&T(`login`,`Login`,`Header`))}),e.before(n)}g(document.querySelector(`main section a[href="/products"]`)?.parentElement)}}proxyLogo(e){if(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=document.querySelector(`header#storefront-header a[aria-label="Homepage"]`);t&&(e.preventDefault(),t.click())}checkout(){if(x()!==`checkout`)return;let e=document.querySelector(`main > div > header`),t=e?.querySelector(`a[href^="tel:"]`)?.closest(`div`);if(!(!e||!t)&&(g(t),m(e,`data-exp-checkout-header`),!e.querySelector(`.exp-header__login`))){let e=b(O);e.querySelector(`a`).addEventListener(`click`,()=>T(`login`,`Login`,`Header`)),t.after(e)}}},ae=`.exp-footer {
  background: #fff;
}

.exp-footer .exp-container > p {
  margin: 0;
  padding: 30px 0 40px;
  border-top: 1px solid var(--exp-border);
  color: var(--exp-muted);
  font-size: 12px;
  line-height: 18px;
  text-align: center;
}

.exp-footer__sep {
  display: inline-block;
  width: 1px;
  height: 14px;
  margin: 0 10px;
  background: var(--exp-muted);
  vertical-align: -2px;
}

.exp-footer__br {
  display: none;
}

@media (max-width: 767px) {
  .exp-footer__sep {
    display: none;
  }

  .exp-footer__br {
    display: inline;
  }
}
`,oe=class{constructor(){p(ae),d(()=>this.mount())}mount(){if(!x())return;let e=document.querySelector(`footer`);if(e){if(g(e),x()===`basket`){let t=document.querySelector(`main`)?.nextElementSibling;for(;t&&t!==e;)t.classList.contains(`exp-footer`)||g(t),t=t.nextElementSibling}if(!document.querySelector(`.exp-footer`)){let t=new Date().getFullYear();e.before(b(`
          <div class="exp-footer">
            <div class="exp-container">
              <p>House of Worktops © ${t}<span class="exp-footer__sep" aria-hidden="true"></span><br class="exp-footer__br">All Prices are inclusive of VAT. All Rights Reserved.</p>
            </div>
          </div>`))}}}},se=`/* ---------- Layout (4102:2651) ---------- */
main[data-exp-basket] > section {
  max-width: 1172px;
  padding-top: 30px;
  padding-right: 16px;
  padding-left: 16px;
}

main[data-exp-basket] section > h1 {
  margin-top: 0;
  color: var(--exp-text);
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}

main[data-exp-basket] section > h1 > span {
  font-weight: 700;
}

main[data-exp-basket] section > div.mt-6 {
  gap: 32px;
  margin-top: 30px;
}

main[data-exp-basket] section > div.mt-6 > div:last-child {
  margin-top: 0;
}

/* Mobile (4102:3136): 24px under the header, 28px title line, 20px to the
   first card, 24px between the cards and the summary. */
@media (max-width: 767px) {
  main[data-exp-basket] > section {
    padding-top: 24px;
  }

  main[data-exp-basket] section > h1 {
    line-height: 28px;
  }

  main[data-exp-basket] section > div.mt-6 {
    gap: 24px;
    margin-top: 20px;
  }
}

@media (min-width: 768px) {
  main[data-exp-basket] section > div.mt-6 > div:first-child {
    flex: 1 1 auto;
    width: auto;
  }

  main[data-exp-basket] section > div.mt-6 > div:last-child {
    width: 445px;
    margin-top: 0;
  }
}

/* ---------- Product card, desktop (4102:2657) ---------- */
@media (min-width: 1024px) {
  /* \`:not([hidden])\` matches the specificity of Tailwind's space-y-* rules. */
  main[data-exp-basket] [data-testid='CartProductList'] > :not([hidden]) ~ :not([hidden]) {
    margin-top: 10px;
  }
}

main[data-exp-basket] [data-testid='CartProductList'] article {
  border-color: var(--exp-border);
  border-radius: 6px;
  background: var(--exp-surface);
}

main[data-exp-basket] [data-testid='CartProductList'] article > div.lg\\:grid {
  min-height: 0;
  grid-template-columns: 206px minmax(0, 1fr) auto;
  column-gap: 28px;
  padding: 0 24px 0 0;
}

/* Photo flush with the card edges. */
main[data-exp-basket] [data-testid='CartProductList'] article > div.lg\\:grid > a:first-child {
  align-self: stretch;
  width: 206px;
  height: auto;
  min-height: 136px;
  border-radius: 0;
}

main[data-exp-basket] [data-testid='CartProductList'] article > div.lg\\:grid > div:nth-child(2) {
  padding-top: 25px;
}

main[data-exp-basket] [data-testid='CartProductList'] article > div.lg\\:grid > div:nth-child(2) a,
main[data-exp-basket] [data-testid='CartProductList'] article > div.lg\\:grid > div:nth-child(2) a + p {
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
}

main[data-exp-basket] [data-testid='CartProductList'] article > div.lg\\:grid > div:nth-child(2) a {
  color: var(--exp-primary);
}

main[data-exp-basket] [data-testid='CartProductList'] article > div.lg\\:grid > div:nth-child(3) {
  margin-top: 27px;
  padding-bottom: 25px;
}

main[data-exp-basket] [data-testid='CartProductList'] article > div.lg\\:grid > button {
  margin-bottom: 25px;
}

/* ---------- Product card, mobile (4102:3136): image left, details right ---------- */
@media (max-width: 1023px) {
  main[data-exp-basket] [data-testid='CartProductList'] article {
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  main[data-exp-basket] [data-testid='CartProductList'] article > div:first-child {
    display: grid;
    grid-template-columns: 98px minmax(0, 1fr);
    grid-template-rows: auto auto;
    column-gap: 14px;
    padding: 0;
  }

  main[data-exp-basket] [data-testid='CartProductList'] article > div:first-child > a:first-child {
    grid-row: 1 / span 2;
    width: 98px;
    height: 118px;
    border-radius: 4px;
  }

  main[data-exp-basket] [data-testid='CartProductList'] article > div:first-child > div {
    margin-top: 0;
  }

  main[data-exp-basket] [data-testid='CartProductList'] article > div:first-child > div:nth-child(2) a,
  main[data-exp-basket] [data-testid='CartProductList'] article > div:first-child > div:nth-child(2) a + p {
    color: var(--exp-text);
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
  }

  main[data-exp-basket] [data-testid='CartProductList'] article > div:first-child > div:nth-child(2) > p {
    margin-top: 4px;
    color: var(--exp-primary);
    font-size: 14px;
  }

  main[data-exp-basket] [data-testid='CartProductList'] article > div:first-child > div:nth-child(3) {
    align-self: end;
    margin-top: 12px;
  }
}

/* ---------- Order summary box (4102:2712) ---------- */
main[data-exp-basket] aside > div {
  display: flex;
  flex-direction: column;
}

main[data-exp-basket] [data-exp-summary='title'],
main[data-exp-basket] [data-exp-summary='coupon'],
main[data-exp-basket] [data-exp-summary='lines'],
main[data-exp-basket] [data-exp-summary='total'] {
  margin: 0;
  padding-right: 20px;
  padding-left: 20px;
  border: solid var(--exp-border-strong);
  border-width: 0 1px;
  background: #fff;
}

main[data-exp-basket] [data-exp-summary='title'] {
  padding-top: 20px;
  padding-bottom: 20px;
  border-top-width: 1px;
  border-radius: 6px 6px 0 0;
  box-shadow: inset 0 -1px 0 var(--exp-border);
  color: var(--exp-text);
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
}

/* Inset divider under the coupon row, like the design's lines. */
main[data-exp-basket] [data-exp-summary='coupon'] {
  padding-top: 30px;
  padding-bottom: 12px;
  background: linear-gradient(var(--exp-border), var(--exp-border)) no-repeat center bottom /
      calc(100% - 40px) 1px,
    #fff;
}

main[data-exp-basket] [data-exp-summary='coupon'] button {
  color: #6c757d;
  font-size: 14px;
  line-height: 25px;
  text-decoration: none;
}

main[data-exp-basket] [data-exp-summary='lines'] {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 12px;
  line-height: 18px;
}

main[data-exp-basket] [data-exp-summary='lines'] > div {
  color: var(--exp-text);
}

main[data-exp-basket] [data-exp-summary='lines'] > :not([hidden]) ~ :not([hidden]) {
  margin-top: 14px;
}

main[data-exp-basket] [data-exp-summary='total'] {
  padding-top: 0;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-radius: 0 0 6px 6px;
}

main[data-exp-basket] [data-exp-summary='total'] > div:first-child {
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
}

main[data-exp-basket] [data-exp-summary='total'] > div:first-child p {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
}

/* CTA under the box on every width (the mobile sticky bar is hidden). */
main[data-exp-basket] [data-exp-summary='cta'] {
  display: block;
  margin-top: 16px;
}

main[data-exp-basket] [data-exp-summary='cta'] [data-testid='CheckoutLink'] {
  height: 50px;
  border-radius: 4px;
  background: var(--exp-cta-dark);
  font-size: 15px;
  font-weight: 600;
}

main[data-exp-basket] [data-exp-summary='cta'] [data-testid='CheckoutLink']::after {
  content: '→';
  margin-left: 2px;
}

.exp-secure {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 15px 0 0;
  color: var(--exp-muted);
  font-size: 12px;
  line-height: 15px;
}

.exp-secure svg {
  color: var(--exp-text);
}

@media (max-width: 1023px) {
  main[data-exp-basket] [data-exp-summary='cta'] [data-testid='CheckoutLink'] {
    height: 50px;
  }
}

/* Mobile summary (4102:3236): 15px sides, 14-15px between its parts. */
@media (max-width: 767px) {
  main[data-exp-basket] [data-exp-summary='title'],
  main[data-exp-basket] [data-exp-summary='coupon'],
  main[data-exp-basket] [data-exp-summary='lines'],
  main[data-exp-basket] [data-exp-summary='total'] {
    padding-right: 15px;
    padding-left: 15px;
  }

  main[data-exp-basket] [data-exp-summary='title'] {
    padding-top: 15px;
    padding-bottom: 14px;
    color: var(--exp-primary);
    font-size: 18px;
    line-height: 30px;
  }

  main[data-exp-basket] [data-exp-summary='coupon'] {
    padding-top: 15px;
    padding-bottom: 15px;
    background-size: calc(100% - 30px) 1px, auto;
  }

  main[data-exp-basket] [data-exp-summary='lines'] {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  main[data-exp-basket] [data-exp-summary='total'] {
    padding-bottom: 15px;
  }

  main[data-exp-basket] [data-exp-summary='total'] > div:first-child {
    padding-top: 15px;
  }

  /* Small label, larger amount (4102:3266). */
  main[data-exp-basket] [data-exp-summary='total'] > div:first-child p:first-child {
    font-size: 13px;
    line-height: 19.5px;
  }

  main[data-exp-basket] [data-exp-summary='total'] > div:first-child p:last-child {
    font-size: 17px;
    line-height: 25.5px;
  }
}

/* "Sub-Total • 1 item" (4134:1164) */
.exp-items::before {
  content: '•';
  margin: 0 6px;
}

/* Pay Later message (4102:2748): 20px under the total, 14px on mobile
   (4102:3271); the box's bottom padding follows it. */
main[data-exp-basket] [data-exp-summary='total'] > .exp-pp-message {
  margin-top: 20px;
}

@media (max-width: 767px) {
  main[data-exp-basket] [data-exp-summary='total'] > .exp-pp-message {
    margin-top: 14px;
  }
}
`,ce=`AbmsZFuzxxtlCkaQGw6yhlZRGIGp4eCpaIyTQ6QFyrg0436ULZWNZS7EPMxyJO_i4mdq8Uz60FHqXu8q`,k=`expPayPalMessages`,le=`https://www.paypal.com/sdk/js?client-id=${ce}&components=messages&currency=GBP`,ue=null,de=()=>ue??=new Promise(e=>{let t=document.createElement(`script`);t.src=le,t.async=!0,t.setAttribute(`data-namespace`,k),t.onload=()=>e(window[k]??null),t.onerror=()=>e(null),document.head.appendChild(t)}),A=new WeakSet,j=new WeakSet,M=new WeakMap,fe=3,N=(e,t,n,r)=>{let i=t.toFixed(2),a=e.querySelector(`.exp-pp-message__slot`);if(e.dataset.amount===i){let t=!!a&&!a.childElementCount&&j.has(e)&&!A.has(e),n=M.get(e)??0;if(!t||n>=fe)return;M.set(e,n+1)}e.dataset.amount=i,pe(e,a,i,n,r)},pe=(e,t,n,r,i)=>{let a=t??e.appendChild(document.createElement(`div`));a.className=`exp-pp-message__slot`,me(e,a,i),A.add(e),de().then(t=>{if(!t||e.dataset.amount!==n)return A.delete(e);t.Messages({amount:n,currency:`GBP`,pageType:r,style:{layout:`text`,logo:{type:`inline`},text:{color:`black`,size:14}},onClick:()=>T(`paylater_message_click`,`Pay Later message`,i)}).render(a).catch(()=>{}).finally(()=>A.delete(e))})},P=new WeakSet,me=(e,t,n)=>{P.has(t)||(P.add(t),new ResizeObserver(()=>{if(t.getBoundingClientRect().height<1)return h(e,`data-exp-rendered`);j.add(e),m(e,`data-exp-rendered`),D(e,`paylater_message_view`,`Pay Later message`,n)}).observe(t))},he=`<div class="exp-pp-message"></div>`,F=`exp-alt6-paylater`,ge=30,_e=2e3,I=()=>{try{let e=sessionStorage.getItem(F);return e===`1`||e!==`0`&&null}catch{return null}},L=e=>{if(I()!==e){try{sessionStorage.setItem(F,e?`1`:`0`)}catch{return}f()}},R=!1,ve=()=>{if(R)return;let e=be();e&&(R=!0,e.findEligibleMethods({currencyCode:`GBP`}).then(e=>L(e.isEligible(`paylater`)===!0)).catch(()=>{}))},ye=e=>e!==null&&e>=ge&&e<=_e,z=e=>{let t=/£\s*([\d,]+(?:\.\d+)?)/.exec(e??``)?.[1];return t?parseFloat(t.replace(/,/g,``)):null},be=()=>{let e=document.querySelector(`[data-testid="paypal-express"]`),t=e&&Object.keys(e).find(e=>e.startsWith(`__reactFiber$`)),n=t?e[t]:null;for(let e=0;n&&e<4;e++,n=n.return)for(let e=n.memoizedState;e&&typeof e==`object`&&`next`in e;e=e.next){let t=e.memoizedState;if(t?.status===`ready`&&typeof t.sdk?.findEligibleMethods==`function`)return t.sdk}return null},xe=`<svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true"><path d="M2 6V4a4 4 0 1 1 8 0v2h.5A1.5 1.5 0 0 1 12 7.5v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 0 12.5v-5A1.5 1.5 0 0 1 1.5 6H2Zm1.5 0h5V4a2.5 2.5 0 0 0-5 0v2Z"/></svg>`,Se=class{constructor(){p(se),d(()=>this.mount())}mount(){if(x()!==`basket`)return;let e=document.querySelector(`main aside`),t=e?.firstElementChild;if(!e||!t)return;m(e.closest(`main`),`data-exp-basket`);for(let e of Array.from(t.children)){let t=this.role(e);m(e,`data-exp-summary`,t),t===`extra`?g(e):h(e,`data-exp-hide`)}let n=e.parentElement?.querySelector(`div.fixed [data-testid="CheckoutLink"]`);g(n?.closest(`div.fixed`));let r=t.querySelector(`[data-exp-summary="cta"]`);r&&!r.querySelector(`.exp-secure`)&&r.appendChild(b(`<p class="exp-secure">${xe}Secure checkout with 256-bit encryption</p>`)),this.payLater(t.querySelector(`[data-exp-summary="total"]`));let i=document.querySelector(`main section h1`),a=i?.firstChild;a?.nodeType===Node.TEXT_NODE&&a.textContent?.trim()===`Basket`&&(a.textContent=`Your Basket `);let o=i?.querySelector(`span`)?.textContent?.match(/\d+\s+items?/)?.[0],s=y(`div`,/^Sub-Total/,t.querySelector(`[data-exp-summary="lines"]`)??t);o&&s&&_(s.querySelector(`.exp-items`)??s.appendChild(b(`<span class="exp-items"></span>`)),o)}payLater(e){let t=z(e?.querySelector(`:scope > div:first-child p:last-child`)?.textContent);if(!e||t===null)return;let n=e.querySelector(`:scope > .exp-pp-message`)??e.appendChild(b(`<div class="exp-pp-message"></div>`));if(I()===!1)return g(n);h(n,`data-exp-hide`),N(n,t,`cart`,`Basket`)}role(e){return e.tagName===`H2`?`title`:e.querySelector(`[data-testid="CheckoutLink"]`)?`cta`:y(`p`,`Order Total`,e)?`total`:y(`div`,/^Sub-Total/,e)?`lines`:e.querySelector(`input[name="promoCode"]`)||/coupon/i.test(e.textContent??``)?`coupon`:e.querySelector(`.trustpilot-widget`)||/^(Trustpilot|Secured Payments by|Need Help\?)/.test(e.textContent?.trim()??``)?`extra`:`other`}},Ce=`html[data-exp-page='checkout'] main > div.bg-muted,
html[data-exp-page='checkout'] [data-exp-columns] > div:first-child > div.bg-light {
  background: #fff;
}

/* ---------- Page width (4102:3462): 1140px of content like the basket,
   form 663px + 32px + summary 445px. ---------- */
[data-exp-checkout-header] .page-container,
html[data-exp-page='checkout'] main.page-container:has(> [data-exp-columns]) {
  max-width: 1172px;
  padding-right: 16px;
  padding-left: 16px;
}

@media (min-width: 1024px) {
  /* The site pads the form panel; the design's form fills its column. */
  [data-exp-columns] > div:first-child > div.bg-light {
    padding-right: 0;
    padding-left: 0;
  }

  [data-exp-columns] > div:last-child {
    flex-basis: 445px;
    /* Lines up with the form's first block, under the step title. */
    margin-top: 56px;
  }
}

/* ---------- Step tabs ---------- */
[data-exp-steps] {
  border-bottom-color: var(--exp-border);
  background: #fff;
}

[data-exp-steps] > div {
  max-width: 632px;
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
}

[data-exp-steps] > div > div {
  margin: 0 20px;
}

[data-exp-steps] [data-exp-tab] {
  position: relative;
  gap: 6px;
  /* 42px row right under the header (4102:3341). */
  padding: 0 18px 20px;
}

[data-exp-steps] [data-exp-tab] > span:first-child {
  width: 20px;
  height: 20px;
  border: 0;
  border-radius: 50%;
  background: #c4c9cc;
  color: #fff;
  font-size: 12px;
}

[data-exp-steps] [data-exp-tab] > span:last-child {
  color: var(--exp-text);
  font-size: 14px;
}

/* Current and completed steps get the green badge. */
html[data-exp-step] [data-exp-tab='1'] > span:first-child,
html[data-exp-step='shipping'] [data-exp-tab='2'] > span:first-child,
html[data-exp-step='payment'] [data-exp-tab] > span:first-child {
  background: var(--exp-cta);
}

html[data-exp-step='contact'] [data-exp-tab='1']::after,
html[data-exp-step='shipping'] [data-exp-tab='2']::after,
html[data-exp-step='payment'] [data-exp-tab='3']::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: var(--exp-cta);
}

/* ---------- Headings ---------- */
/* Step titles: "Checkout" (h2), "Shipping" (legend), "Payment" (h1, no form). */
[data-exp-columns] h1.text-2xl,
[data-exp-columns] h2.text-2xl,
[data-exp-columns] legend.text-2xl {
  color: var(--exp-text);
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}

/* Section titles ("Contact information", "Delivery address", …) */
[data-exp-columns] form section div.text-base.text-foreground {
  color: var(--exp-text);
  font-size: 16px;
  font-weight: 600;
}

/* "OR" dividers sit on a white page now. */
[data-exp-columns] span.bg-light {
  background: #fff;
}

/* ---------- Primary buttons (Continue / Review and Pay / Pay) ---------- */
/* Not the coupon "Apply": the summary cards hold their own small forms. */
[data-exp-columns] form button[type='submit']:not([data-exp-summary-card] button) {
  height: 50px;
  min-height: 0;
  border-radius: 4px;
  background: var(--exp-cta);
  font-size: 15px;
  font-weight: 600;
  /* The site's transition-all would animate the size change on injection. */
  transition-property: color, background-color, border-color, box-shadow, opacity;
}

[data-exp-actions] {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

[data-exp-actions] > button[type='submit'] {
  display: inline-flex;
  width: 300px;
}

@media (max-width: 639px) {
  /* Mobile: full-width CTA with the return link centred under it (4102:3641). */
  [data-exp-actions] {
    flex-direction: column-reverse;
  }

  [data-exp-actions] > button[type='submit'] {
    width: 100%;
  }
}

@media (max-width: 767px) {
  [data-exp-steps] > div > div {
    margin: 0 4px;
  }

  /* 57px row (4102:3669). */
  [data-exp-steps] [data-exp-tab] {
    padding: 16px 6px 16px;
  }
}

/* ---------- Express checkout (4102:5785 desktop, 4102:6024 mobile) ----------
   The site stacks its own PayPal button, full width, above Stripe's Apple Pay /
   Google Pay row. The design puts PayPal under that row on mobile and all
   three in one row on desktop, 8px apart, and 14px between the rows on mobile.
   Stripe's buttons are 44px high, 4px inside its 52px frame; the frame's box
   lands on the buttons' edges, so these gaps are as seen. */
[data-exp-express]:has(> [data-testid='paypal-express']) {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
}

[data-exp-express] > div:has(.__PrivateStripeElement) {
  order: 0;
  margin-bottom: 14px;
}

[data-exp-express] > [data-testid='paypal-express'] {
  order: 1;
  margin-bottom: 6px; /* + the divider's 8px: 14px */
}

/* OR under the express buttons, both steps (4102:3487, 4102:5794 desktop;
   4102:3709, 4102:6044 mobile): a 25px row 16px under the buttons (14px on
   mobile), 24px above what follows. The gap above is 8px here plus the 8px
   (6px) under the buttons. No bottom margin: on Contact the next section
   brings its own 24px, and a grid doesn't collapse margins. Payment sets its
   own (payment/style.css). */
[data-exp-express] > div.relative {
  order: 2;
  margin-top: 8px;
  margin-bottom: 0;
}

[data-exp-express] > div.relative span.border-t {
  border-color: #dee2e6;
}

[data-exp-express] > div.relative > div.relative {
  line-height: 25px;
}

[data-exp-express] > div.relative > div.relative > span {
  padding: 0 19px;
  color: #adb5bd;
  font-size: 14px;
  font-weight: 500;
  line-height: 25px;
  text-transform: none;
}

@media (min-width: 1024px) {
  /* Three equal buttons: Stripe's two take 2/3 of the row less one gap. */
  [data-exp-express]:has(> [data-testid='paypal-express']) {
    grid-template-columns: calc((200% - 8px) / 3) minmax(0, 1fr);
    column-gap: 8px;
  }

  [data-exp-express] > div:has(.__PrivateStripeElement),
  [data-exp-express] > [data-testid='paypal-express'] {
    grid-row: 1;
    margin-bottom: 8px;
  }

  [data-exp-express] > div.relative {
    grid-column: 1 / -1;
  }

  /* No Apple Pay / Google Pay on this device: the site drops Stripe's block
     (its loading skeleton carries the same \`data-express\`), and PayPal takes
     the whole row as in the control. */
  [data-exp-express]:not(:has(> div[data-express]:not([data-testid]))) > [data-testid='paypal-express'] {
    grid-column: 1 / -1;
  }

  /* Stripe shows one button on this device (only Google Pay, say): it and
     PayPal split the row in half (express.ts). */
  [data-exp-express][data-exp-wallets='1']:has(> [data-testid='paypal-express']) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* Stripe's two buttons didn't fit side by side in 2/3 of the row and it
     wrapped them (express.ts): stack as on mobile, PayPal full width below. */
  [data-exp-express][data-exp-express-stacked]:has(> [data-testid='paypal-express']) {
    grid-template-columns: minmax(0, 1fr);
  }

  [data-exp-express][data-exp-express-stacked] > div:has(.__PrivateStripeElement),
  [data-exp-express][data-exp-express-stacked] > [data-testid='paypal-express'] {
    grid-row: auto;
  }

  [data-exp-express][data-exp-express-stacked] > div:has(.__PrivateStripeElement) {
    margin-bottom: 14px;
  }

  [data-exp-express][data-exp-express-stacked] > [data-testid='paypal-express'] {
    margin-bottom: 6px;
  }
}
`,B=e=>{for(let t=e;t;t=t.parentElement){let e=Object.keys(t).find(e=>e.startsWith(`__reactFiber`));if(e){for(let n=t[e];n;n=n.return){let e=n.memoizedProps?.value;if(e?.elements&&e?.stripe)return e.elements}return null}}return null},V=`iframe[title="Secure express checkout frame"]`,we=matchMedia(`(min-width: 1024px)`),Te=60,Ee=8,H=null,U=0,W=new WeakSet,G=new WeakSet,De=e=>{let t=e.querySelector(V);t&&(Oe(t),G.has(t)||(G.add(t),new ResizeObserver(K).observe(t)),q(e,t))},K=()=>{let e=document.querySelector(`[data-exp-express]`),t=e?.querySelector(V);e&&t&&q(e,t)},Oe=e=>{let t=B(e)?.getElement(`expressCheckout`);!t||W.has(t)||(W.add(t),t.on(`availablepaymentmethodschange`,e=>{H=Object.values(e?.paymentMethods??{}).filter(e=>e?.available).length,K()}))},q=(e,t)=>{let n=H===1;n?m(e,`data-exp-wallets`,`1`):h(e,`data-exp-wallets`);let r=!1;if(we.matches&&!n){let n=t.closest(`.StripeElement`)??t;t.getBoundingClientRect().height>Te&&!e.hasAttribute(`data-exp-express-stacked`)&&(U=Math.max(U,n.getBoundingClientRect().width)),r=(2*e.clientWidth-Ee)/3<=U+1}r?m(e,`data-exp-express-stacked`):h(e,`data-exp-express-stacked`)},ke=class{constructor(){p(Ce),d(()=>this.mount())}mount(){if(x()!==`checkout`)return;let e=document.querySelector(`main > div > nav`);if(!e)return;m(e,`data-exp-steps`),e.querySelectorAll(`:scope > div > button`).forEach((e,t)=>{m(e,`data-exp-tab`,String(t+1))});let t=document.querySelector(`main main > div`);m(t,`data-exp-columns`);let n=t?.querySelector(`[data-testid="paypal-express"], iframe[title="Secure express checkout frame"]`)?.closest(`div.group`);n&&(m(n,`data-exp-express`),g(y(`p`,`Express checkout`,n)),De(n)),g(document.querySelector(`main main .trustpilot-widget`)?.closest(`div.mt-4`));let r=t?.querySelector(`form`);if(r)for(let e of Array.from(r.children))e.querySelector(`button[type="submit"]`)&&(e.classList.contains(`fixed`)?g(e):m(e,`data-exp-actions`))}},Ae=`/* ---------- Shared type scale (4102:2712) ---------- */
[data-exp-summary-card] {
  border-color: var(--exp-border-strong);
  border-radius: 6px;
  background: #fff;
}

[data-exp-summary-card] article > header {
  padding: 20px;
}

[data-exp-summary-card] article > header h2 {
  color: var(--exp-text);
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
}

[data-exp-summary-card] [data-testid='checkout-line'] p.font-semibold {
  color: var(--exp-text);
  font-size: 14px;
  font-weight: 700;
}

[data-exp-summary-card] [data-testid='checkout-line'] p.text-sm {
  color: var(--exp-muted);
  font-size: 12px;
}

/* Desktop card (4102:3576): items 30px under the title line, 80px photos,
   inset dividers, 12px around the coupon row, 32px between the totals rows. */
[data-exp-summary-card] [data-exp-summary-content] > section:first-child > ul {
  padding: 30px 20px 20px;
}

[data-exp-summary-card] [data-exp-summary-content] > section + section {
  border-top: 0;
  background: linear-gradient(var(--exp-border), var(--exp-border)) no-repeat center top /
    calc(100% - 40px) 1px;
}

[data-exp-summary-card='desktop'] [data-testid='checkout-line'] .size-16,
[data-exp-summary-card='desktop'] li .size-16 {
  width: 80px;
  height: 80px;
}

[data-exp-summary-card] [data-exp-summary-content] > section:has(> button) {
  padding: 12px 20px;
}

[data-exp-summary-card] [data-exp-summary-content] > section > button {
  line-height: 25px;
  text-decoration: none;
}

[data-exp-summary-card] dl {
  padding: 20px;
  font-size: 12px;
  line-height: 18px;
}

/* A flex column so VAT can move up under Sub-Total (the design's order);
   \`:not([hidden])\` matches the specificity of Tailwind's space-y-* rules. */
[data-exp-summary-card] dl:has(> [data-exp-summary-vat]) {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

[data-exp-summary-card] dl > :not([hidden]) ~ :not([hidden]) {
  margin-top: 14px;
}

[data-exp-summary-card] dl:has(> [data-exp-summary-vat]) > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0;
}

[data-exp-summary-card] dl > :first-child {
  order: -2;
}

[data-exp-summary-card] dl > [data-exp-summary-vat] {
  order: -1;
}

[data-exp-summary-card] dl + div {
  margin: 0 20px;
  padding: 15px 0 20px;
  border-top-color: #e5e7eb;
}

[data-exp-summary-card] dl + div > span,
[data-exp-summary-card] [data-testid='checkout-total'] {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
}

/* ---------- Mobile: the site's accordion as the design's card (4102:3641) ----------
   The site's full-bleed sticky bar under the header becomes the design's
   bordered card at the top of the form, scrolling with the page. Row: title
   left, total and chevron right; the total hides while open, the list below
   repeats it. 24px from the step tabs and from the title below; a 64px
   row with its border. */
[data-exp-summary-card='mobile'] {
  position: static;
  margin: 24px 0;
  overflow: hidden;
  border: 1px solid var(--exp-border);
  border-radius: 6px;
  background: var(--exp-surface);
}

[data-exp-summary-item] > h2 > button {
  gap: 12px;
  padding: 17px 12px;
}

[data-exp-summary-item] > h2 > button > span:first-child {
  color: var(--exp-primary);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
}

/* The site puts the total last (\`order-last\`); the design puts the chevron
   after it. */
[data-exp-summary-item] > h2 > button > span.ml-auto {
  order: 1;
  color: var(--exp-text);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
}

/* Lucide's chevron draws 12×6 in its 24px box: the design's 12px glyph. */
[data-exp-summary-item] > h2 > button > svg {
  order: 2;
  width: 24px;
  height: 24px;
  margin: 0 -6px;
  color: var(--exp-text);
  stroke-width: 1.5;
}

[data-exp-summary-item][data-expanded] > h2 > button > span.ml-auto {
  visibility: hidden;
}

[data-exp-summary-card='mobile'] [data-exp-summary-content] {
  background: #fff;
}

/* ---------- Pay Later message (4130:1064), desktop card ----------
   The total row keeps its 20px bottom padding: 20px above the box. */
[data-exp-summary-card] .exp-pp-message {
  margin: 0 20px 20px;
}
`,je=class{constructor(){this.tracked=new WeakSet,p(Ae),d(()=>this.mount()),matchMedia(`(min-width: 1024px)`).addEventListener(`change`,f)}mount(){x()===`checkout`&&(this.mountDesktop(),this.mountMobile())}mountDesktop(){let e=document.querySelector(`article > header + div:has([data-testid="checkout-total"])`),t=e?.closest(`article`)?.parentElement;!e||!t||(m(t,`data-exp-summary-card`,`desktop`),m(e,`data-exp-summary-content`),this.markVat(e),this.mountPayLater(e))}mountMobile(){let e=[...document.querySelectorAll(`h2 > button[aria-controls]`)].find(e=>e.firstElementChild?.textContent?.trim()===`Order Summary`),t=e?.parentElement?.parentElement,n=t?.closest(`div.sticky`),r=t?.querySelector(`:scope > [role="group"] div:has(> section)`);!e||!t||!n||!r||(m(n,`data-exp-summary-card`,`mobile`),m(t,`data-exp-summary-item`),m(r,`data-exp-summary-content`),this.markVat(r),!this.tracked.has(e)&&(this.tracked.add(e),e.addEventListener(`click`,()=>setTimeout(()=>{T(`summary`,e.getAttribute(`aria-expanded`)===`true`?`Opened`:`Closed`,`Order Summary`)}))))}markVat(e){e.querySelectorAll(`dl > div`).forEach(e=>{/^VAT\b/.test(e.querySelector(`dt`)?.textContent?.trim()??``)&&m(e,`data-exp-summary-vat`)})}mountPayLater(e){let t=e.querySelector(`dl + div`),n=z(e.querySelector(`[data-testid="checkout-total"]`)?.textContent),r=e.querySelector(`.exp-pp-message`);if(!(!t||n===null)){if(r??=b(he),r.previousElementSibling!==t&&t.after(r),I()===!1)return g(r);h(r,`data-exp-hide`),e.getClientRects().length&&N(r,n,`checkout`,`Order Summary`)}}},Me=`@media (min-width: 768px) {
  [data-exp-delivery] [data-exp-desktop-hide] {
    display: none;
  }
}

/* Field labels (4102:3494): a 24px line and 9px down to the input. */
[data-exp-delivery] div.space-y-1\\.5 > label {
  display: block;
  line-height: 24px;
}

[data-exp-delivery] div.space-y-1\\.5 > label + :not([hidden]) {
  margin-top: 9px;
}

/* Section title → first field: 16px on desktop, 10px on mobile (4102:3715). */
[data-exp-delivery] div.text-base.text-foreground + :not([hidden]) {
  margin-top: 16px;
}

@media (max-width: 767px) {
  [data-exp-delivery] div.text-base.text-foreground + :not([hidden]) {
    margin-top: 10px;
  }
}

/* Inputs are 50px in the design (4102:3496), as is "Find my address". */
[data-exp-delivery] input:not([type='checkbox']):not([type='radio']):not(.sr-only),
[data-exp-delivery] select,
[data-exp-delivery] [data-exp-lookup] div.flex-col:has(> button) > button {
  height: 50px;
}

/* ---------- "Your Name" (4102:3502): label, then first/last side by side ---------- */
/* \`:not([hidden])\` matches the specificity of the section's space-y-* rule. */
[data-exp-delivery] .exp-your-name:not([hidden]) {
  margin-top: 20px;
}

.exp-your-name__label {
  display: block;
  color: var(--exp-text);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

.exp-your-name__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 9px;
}

.exp-your-name__error {
  margin: 6px 0 0;
}

@media (max-width: 767px) {
  .exp-your-name__row {
    gap: 12px;
  }
}

/* Postcode + "Find my address" stay side by side on mobile too (4102:3641). */

[data-exp-delivery] [data-exp-lookup] div.flex-col:has(> button) {
  flex-direction: row;
  gap: 10px;
}

[data-exp-delivery] [data-exp-lookup] div.flex-col:has(> button) > button {
  flex: 0 0 auto;
  padding: 0 14px;
}

@media (max-width: 639px) {
  /* Mobile (4102:4296): tighter row and a text-only button. */
  [data-exp-delivery] [data-exp-lookup] div.flex-col:has(> button) {
    gap: 6px;
  }

  [data-exp-delivery] [data-exp-lookup] div.flex-col:has(> button) > button svg {
    display: none;
  }
}

/* ---------- Address box (4102:3984 desktop / 4102:4296 mobile) ----------
   One grey box drawn across the lookup, our panel and the manual grids:
   14px padding, 14px between its parts, 24px label lines. */
[data-exp-delivery] [data-exp-lookup] {
  padding: 14px 14px 0;
  border: 1px solid var(--exp-border-strong);
  border-bottom: 0;
  border-radius: 4px 4px 0 0;
  background: var(--exp-surface);
}

/* \`:not([hidden])\` matches the specificity of Tailwind's space-y-* rules. */
[data-exp-delivery] [data-exp-lookup] > :not([hidden]) ~ :not([hidden]) {
  margin-top: 10px;
}

[data-exp-delivery] [data-exp-lookup] label,
[data-exp-delivery] [data-exp-manual] label {
  display: block;
  line-height: 24px;
}

[data-exp-delivery] [data-exp-lookup] label + :not([hidden]) {
  margin-top: 10px;
}

/* Lookup results dropdown under the postcode input (4102:3987). */
.exp-suggest {
  position: absolute;
  z-index: 20;
  top: calc(100% + 6px);
  right: 0;
  left: 0;
  display: none;
  flex-direction: column;
  max-height: 280px;
  overflow-y: auto;
  padding: 9px 0;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.exp-suggest[data-exp-open='true'] {
  display: flex;
}

.exp-suggest__item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 9px 12px;
  border: 0;
  background: none;
  color: #374151;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  cursor: pointer;
}

.exp-suggest__item:hover,
.exp-suggest__item:focus-visible {
  background: var(--exp-surface);
  outline: none;
}

.exp-suggest__item svg {
  flex: 0 0 auto;
}

.exp-suggest__item span {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.exp-address {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 0 !important;
  padding: 14px;
  border: 1px solid var(--exp-border-strong);
  border-top: 0;
  border-radius: 0 0 4px 4px;
  background: var(--exp-surface);
}

.exp-address[data-exp-open='true'] {
  border-radius: 0;
  border-bottom: 0;
}

.exp-address__card {
  display: none;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  padding: 12px;
  border: 1px solid #cfe3d8;
  border-radius: 4px;
  background: var(--exp-success-bg);
}

.exp-address[data-exp-filled='true'] .exp-address__card {
  display: flex;
}

.exp-address__text {
  flex: 1 1 auto;
  min-width: 0;
}

.exp-address__text p {
  margin: 0;
}

.exp-address__line1 {
  color: var(--exp-text);
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
}

.exp-address__line2 {
  color: var(--exp-muted);
  font-size: 12px;
  line-height: 18px;
}

.exp-address__edit {
  font-size: 12px;
  font-weight: 700;
}

.exp-address__or {
  display: flex;
  align-items: center;
  gap: 19px;
  align-self: stretch;
  color: #adb5bd;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

/* Beats .exp-link's \`font: inherit\`. */
html[data-exp-page] .exp-address__manual {
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

.exp-address__or::before,
.exp-address__or::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--exp-border);
}

/* Manual fields: hidden until opened, then drawn as the bottom of the grey box. */
[data-exp-delivery] [data-exp-manual='closed'] {
  display: none;
}

/* Fields: 17px between rows and columns, 9px from label to input. Each grid
   holds one or two rows, so the gap between grids is the grid's bottom padding;
   the last one closes the box. */
[data-exp-delivery] [data-exp-manual='open'] {
  gap: 17px;
  margin-top: 0 !important;
  padding: 0 14px 17px;
  border: 1px solid var(--exp-border-strong);
  border-top: 0;
  border-bottom: 0;
  background: var(--exp-surface);
}

[data-exp-delivery] [data-exp-manual='open'][data-exp-manual-last] {
  padding-bottom: 14px;
  border-bottom: 1px solid var(--exp-border-strong);
  border-radius: 0 0 4px 4px;
}

[data-exp-delivery] [data-exp-manual] label + :not([hidden]) {
  margin-top: 9px;
}

/* Postcode + phone row: one column, the postcode cell closes the grey box and
   the phone sits 20px under it (4102:3751). */
[data-exp-delivery] [data-exp-phone-row] {
  grid-template-columns: 1fr;
  gap: 0;
  margin-top: 0 !important;
}

[data-exp-delivery] [data-exp-phone-row] > :not([data-exp-manual]) {
  margin-top: 20px;
}

/* Valid manual postcode: green tick inside the input (4102:4060). */
.exp-postcode-ok {
  position: absolute;
  top: 50%;
  right: 12px;
  display: none;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: #1f7a4d;
  transform: translateY(-50%);
  pointer-events: none;
}

[data-exp-postcode='true'] > .exp-postcode-ok {
  display: flex;
}

[data-exp-postcode='true'] > #postalCode {
  padding-right: 44px;
}

/* The site renders the estimate inside the postcode cell, i.e. inside the
   address box. It shows under the summary on desktop and, as in the mobile
   design (4102:3642 / 4102:4198), not at all on mobile. */
[data-exp-delivery] [data-exp-estimate-source] {
  display: none;
}

.exp-estimate {
  display: none;
  align-items: flex-start;
  gap: 10px;
  margin-top: 16px;
  padding: 16px;
  border: 1px solid #cfe3d8;
  border-radius: 6px;
  background: var(--exp-success-bg);
}

@media (min-width: 1024px) {
  .exp-estimate {
    display: flex;
  }
}

.exp-estimate p {
  margin: 0;
  color: var(--exp-muted);
  font-size: 12px;
  line-height: 18px;
}

.exp-estimate b {
  color: var(--exp-text);
}

/* ---------- Business customer / fitters (4271:2271): question left, "Yes" right ---------- */
[data-exp-yes-only] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

/* 18px between the two questions instead of the section's 24px. */
[data-exp-delivery] section > [data-exp-yes-only] + [data-exp-yes-only] {
  margin-top: 18px;
}

/* ---------- Actions ---------- */
[data-exp-delivery] [data-exp-actions] > button[type='submit']::after {
  content: '→';
  margin-left: 6px;
}
`,Ne=`<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="10.5" height="14" viewBox="0 0 10.5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Img">
<path id="Vector" d="M5.89805 13.65C7.30078 11.8945 10.5 7.63984 10.5 5.25C10.5 2.35156 8.14844 0 5.25 0C2.35156 0 0 2.35156 0 5.25C0 7.63984 3.19922 11.8945 4.60195 13.65C4.93828 14.0684 5.56172 14.0684 5.89805 13.65ZM5.25 3.5C5.71413 3.5 6.15925 3.68437 6.48744 4.01256C6.81563 4.34075 7 4.78587 7 5.25C7 5.71413 6.81563 6.15925 6.48744 6.48744C6.15925 6.81563 5.71413 7 5.25 7C4.78587 7 4.34075 6.81563 4.01256 6.48744C3.68437 6.15925 3.5 5.71413 3.5 5.25C3.5 4.78587 3.68437 4.34075 4.01256 4.01256C4.34075 3.68437 4.78587 3.5 5.25 3.5Z" fill="#1F6B4A"/>
</g>
</svg>
`,Pe=`<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="10.5012" height="12" viewBox="0 0 10.5012 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Img">
<path id="Vector" d="M10.2814 2.46973C10.5744 2.7627 10.5744 3.23848 10.2814 3.53145L4.28145 9.53145C3.98848 9.82441 3.5127 9.82441 3.21973 9.53145L0.219727 6.53145C-0.0732422 6.23848 -0.0732422 5.7627 0.219727 5.46973C0.512695 5.17676 0.988477 5.17676 1.28145 5.46973L3.75176 7.9377L9.22207 2.46973C9.51504 2.17676 9.99082 2.17676 10.2838 2.46973H10.2814Z" fill="white"/>
</g>
</svg>
`,Fe=`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="11" fill="#1f8964"/><path d="m6.5 11.2 3 3 6-6.4" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,Ie=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><rect x="1.5" y="3" width="15" height="13.5" rx="1.5" stroke="#1f8964" stroke-width="1.2"/><path d="M1.5 7h15M5.5 1v4M12.5 1v4" stroke="#1f8964" stroke-width="1.2" stroke-linecap="round"/><path d="M4.5 10h1.5M8.25 10h1.5M12 10h1.5M4.5 13h1.5M8.25 13h1.5" stroke="#1f8964" stroke-width="1.2" stroke-linecap="round"/></svg>`,J=[`#streetAddress1`,`#city`,`#postalCode`],Y=/^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i,Le=`Please enter a valid Postcode`,Re=class{constructor(){this.manualOpen=!1,this.findBound=new WeakSet,this.suggestOpen=!1,this.suggestKey=``,this.suggestBound=new WeakSet,this.postcodeBound=new WeakSet,p(Me),d(()=>this.mount()),document.addEventListener(`click`,e=>{let t=e.target,n=t.closest?.(`[data-exp-lookup]`);n&&/Find/.test(t.closest(`button`)?.textContent??``)?this.suggestOpen=!0:!n&&!t.closest?.(`.exp-address`)&&this.suggestOpen&&(this.suggestOpen=!1,f())})}mount(){if(S()!==`contact`){document.querySelector(`.exp-estimate`)?.remove();return}let e=document.querySelector(`[data-exp-columns] form`);e&&(m(e,`data-exp-delivery`),this.revealAll(e),this.yourName(e),this.trimFields(e),this.renameTexts(e),this.address(e),this.postcode(e),this.yesOnly(`business-customer`),this.yesOnly(`fitters`),this.estimate())}formState(e){let t=Object.keys(e).find(e=>e.startsWith(`__reactFiber$`)),n=t?e[t]:null;for(let e=0;n&&e<10;e++,n=n.return){if(typeof n.type!=`function`)continue;let e=ze(n.type);if(e!==void 0){if(e===null)return null;for(let t of[n,n.alternate]){let n=t&&Be(t,e);if(n)return n}return null}}return null}revealAll(e){e.querySelector(`#streetAddress1`)||e.querySelector(`div[class*="bg-muted/40"]`)||this.formState(e)?.setRevealRest(!0)}postcode(e){let t=e.querySelector(`#postalCode`),n=t?.parentElement;if(!t||!n)return;n.querySelector(`.exp-postcode-ok`)||n.append(b(`<span class="exp-postcode-ok" aria-hidden="true">${Pe}</span>`)),this.postcodeBound.has(t)||(this.postcodeBound.add(t),t.addEventListener(`blur`,()=>{let n=t.value.trim();!n||Y.test(n)||this.formState(e)?.setErrors(e=>({...e,postalCode:Le}))}));let r=t.classList.contains(`border-destructive`);m(n,`data-exp-postcode`,String(!r&&Y.test(t.value.trim())))}yourName(e){let t=e.querySelector(`#firstName`),n=e.querySelector(`#lastName`),r=e.querySelector(`#marketingOptIn`)?.closest(`div.flex.items-center.gap-3`)??e.querySelector(`#checkout-email`)?.closest(`div.space-y-1\\.5`),i=e.querySelector(`.exp-your-name`);if(!t||!n||!r){i?.remove(),h(t?.closest(`div.grid`),`data-exp-hide`);return}if(g(t.closest(`div.grid`)),!i){let t=(e,t,n)=>`
        <div class="exp-your-name__field">
          <input type="text" id="exp-${e}" data-mirror="${e}" placeholder="${t}" aria-label="${t}" autocomplete="${n}" maxlength="32">
          <p class="exp-your-name__error text-sm text-destructive" hidden></p>
        </div>`;i=b(`
        <div class="exp-your-name">
          <label class="exp-your-name__label" for="exp-firstName">Your Name</label>
          <div class="exp-your-name__row">
            ${t(`firstName`,`First Name`,`given-name`)}
            ${t(`lastName`,`Last Name`,`family-name`)}
          </div>
        </div>`),i.addEventListener(`input`,t=>{let n=t.target,r=e.querySelector(`#${n.dataset.mirror}`);r&&(Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,`value`).set.call(r,n.value),r.dispatchEvent(new Event(`input`,{bubbles:!0})))})}r.nextElementSibling!==i&&r.after(i);for(let e of[t,n]){let t=i.querySelector(`[data-mirror="${e.id}"]`);t.className!==e.className&&(t.className=e.className),document.activeElement!==t&&t.value!==e.value&&(t.value=e.value);let n=e.getAttribute(`aria-invalid`);n?t.setAttribute(`aria-invalid`,n):t.removeAttribute(`aria-invalid`);let r=e.closest(`div.space-y-1\\.5`)?.querySelector(`p.text-destructive`),a=t.nextElementSibling;_(a,r?.textContent?.trim()??``),a.hidden=!r}}trimFields(e){m(y(`p`,/Login/,e),`data-exp-desktop-hide`),g(document.querySelector(`#createAccount`)?.closest(`div.flex`)),g(y(`button`,/^Company/,e)?.parentElement);let t=y(`div`,`Billing Address`,e)?.closest(`section`),n=y(`button[role="radio"]`,/^Same as shipping address/,t??e);this.hideWhile(t,n?.getAttribute(`aria-checked`)===`true`),g(document.querySelector(`#delivery-note`)?.closest(`div.space-y-1\\.5`));for(let t of e.querySelectorAll(`div.border-b`))!t.textContent?.trim()&&!t.querySelector(`input, select, textarea, button`)&&g(t)}hideWhile(e,t){if(!e)return;let n=e.querySelector(`[aria-invalid="true"], p.text-destructive`);t&&!n?g(e):h(e,`data-exp-hide`)}renameTexts(e){_(y(`div`,`Communication Information`,e),`Contact information`),_(y(`div`,/^(Shipping Address|Delivery address)$/,e),`Delivery address`);let t=e.querySelector(`[data-exp-actions]`),n=t?.querySelector(`button[type="submit"]`);n&&/^Continue/.test(n.textContent?.trim()??``)&&v(n,`Continue to shipping`),v(t?.querySelector(`a`),`Return to cart`);let r=y(`button`,/^Find (my )?address$/,e);v(r,`Find my address`),r&&!this.findBound.has(r)&&(this.findBound.add(r),r.addEventListener(`click`,()=>T(`find_address`,`Find my address`,`Delivery Address`))),v(y(`label, p, span`,/^Type your post ?code to find address$/i,e),`Find your address with post code`)}address(e){let t=e.querySelector(`#streetAddress1`),n=e.querySelector(`select[name="lookupAddress"]`)?.closest(`div.space-y-3`);if(!t||!n)return;m(n,`data-exp-lookup`);let r=n.querySelector(`select[name="lookupAddress"]`);g(r?.closest(`div.space-y-1\\.5`)),r&&this.suggestions(n,r);for(let e of Array.from(n.children)){let t=e.textContent?.trim()??``;/^Address applied/.test(t)||/^Selected address/.test(t)||/isn't listed/.test(t)?g(e):e.classList.contains(`min-h-[1.25rem]`)&&(!e.querySelector(`p:not(.sr-only)`)||/addresse?s? found/.test(t)?g(e):h(e,`data-exp-hide`))}let i=new Set;for(let t of[`#streetAddress1`,`#city`,`#postalCode`]){let n=e.querySelector(t),r=n?.closest(`div.grid`);if(!(!n||!r))if(r.querySelector(`#phone`)){m(r,`data-exp-phone-row`);let e=Array.from(r.children).find(e=>e.contains(n));e&&i.add(e)}else i.add(r)}let a=i.values().next().value?.previousElementSibling;a&&/^OR$/i.test(a.textContent?.trim()??``)&&g(a),[...i].some(e=>e.querySelector(`[aria-invalid="true"]`))&&(this.manualOpen=!0);let o=J.every(t=>e.querySelector(t)?.value.trim()),s=[...i].pop();for(let e of i)m(e,`data-exp-manual`,this.manualOpen?`open`:`closed`),e===s?m(e,`data-exp-manual-last`):h(e,`data-exp-manual-last`);let c=e.querySelector(`.exp-address`);if(c||(c=b(`
        <div class="exp-address">
          <div class="exp-address__card">
            ${Fe}
            <div class="exp-address__text"><p class="exp-address__line1"></p><p class="exp-address__line2"></p></div>
            <button type="button" class="exp-link exp-address__edit">Edit</button>
          </div>
          <div class="exp-address__or"><span>OR</span></div>
          <button type="button" class="exp-link exp-address__manual">Enter address manually</button>
        </div>`),c.querySelector(`.exp-address__edit`).addEventListener(`click`,()=>{T(`address_edit`,`Edit`,`Delivery Address`),this.editAddress(e)}),c.querySelector(`.exp-address__manual`).addEventListener(`click`,()=>{this.manualOpen=!this.manualOpen,T(`address_manual`,this.manualOpen?`Opened`:`Closed`,`Delivery Address`),f()}),n.after(c),e.addEventListener(`click`,t=>{t.target.closest(`button[type="submit"]`)&&J.some(t=>!e.querySelector(t)?.value.trim())&&this.openManual()},!0)),n.nextElementSibling!==c&&n.after(c),m(c,`data-exp-filled`,String(o&&!this.manualOpen)),m(c,`data-exp-open`,String(this.manualOpen)),o){let t=t=>e.querySelector(t)?.value.trim(),n=e.querySelector(`#country`)?.selectedOptions[0]?.textContent?.trim();_(c.querySelector(`.exp-address__line1`),[t(`#streetAddress1`),t(`#streetAddress2`)].filter(Boolean).join(`, `)),_(c.querySelector(`.exp-address__line2`),[t(`#city`),t(`#postalCode`),n].filter(Boolean).join(`, `))}}suggestions(e,t){let n=e.querySelector(`input[name="postcode"]`),r=n?.parentElement;if(!n||!r)return;let i=r.querySelector(`.exp-suggest`);i||(i=b(`<div class="exp-suggest" role="listbox" aria-label="Addresses found"></div>`),i.addEventListener(`mousedown`,e=>e.preventDefault()),i.addEventListener(`click`,e=>{let n=e.target.closest(`.exp-suggest__item`);n?.dataset.value&&(Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,`value`).set.call(t,n.dataset.value),t.dispatchEvent(new Event(`change`,{bubbles:!0})),T(`address_select`,`Address selected`,`Delivery Address`),this.suggestOpen=!1,f())}),r.append(i)),this.suggestBound.has(n)||(this.suggestBound.add(n),n.addEventListener(`focus`,()=>{this.suggestOpen=!0,f()}),n.addEventListener(`keydown`,e=>{e.key!==`Escape`&&e.key!==`Enter`||(this.suggestOpen=e.key===`Enter`,f())}));let a=Array.from(t.options).filter(e=>e.value),o=a.map(e=>e.value).join(`|`);o!==this.suggestKey&&(this.suggestKey=o,this.suggestOpen=!0,i.replaceChildren(...a.map(e=>{let t=b(`<button type="button" class="exp-suggest__item" role="option">${Ne}<span></span></button>`);return t.dataset.value=e.value,t.querySelector(`span`).textContent=e.textContent?.trim()??``,t})));let s=a.length>0&&!t.value&&this.suggestOpen;m(i,`data-exp-open`,String(s))}editAddress(e){let t=e.querySelector(`[data-exp-lookup]`),n=Array.from(t?.children??[]).find(e=>/^Selected address/.test(e.textContent?.trim()??``))?.querySelector(`button`);if(!n){this.openManual();return}n.click(),this.manualOpen=!1,this.suggestOpen=!0,t?.querySelector(`input[name="postcode"]`)?.focus(),f()}openManual(){this.manualOpen=!0,f()}yesOnly(e){let t=document.querySelector(`#${e}-yes`),n=document.querySelector(`#${e}-no`),r=t?.closest(`div.grid`);if(!t||!n||!r)return;m(r,`data-exp-yes-only`);let i=n.closest(`div.flex.items-center.gap-2`);[t,n].some(e=>e.getAttribute(`aria-checked`)===`true`)?g(i):h(i,`data-exp-hide`);let a=t.closest(`div.flex.items-center.gap-2`);!a||a.dataset.expBound||(a.dataset.expBound=`1`,a.addEventListener(`click`,e=>{t.getAttribute(`aria-checked`)===`true`&&(e.preventDefault(),e.stopPropagation(),n.click())},!0))}estimate(){let e=document.querySelector(`[data-exp-delivery] div[class*="bg-success/10"]`),t=document.querySelector(`[data-exp-summary-card="desktop"]`),n=document.querySelector(`.exp-estimate`);if(!e||!t){n?.remove();return}m(e,`data-exp-estimate-source`),n||(n=b(`
        <div class="exp-estimate">${Ie}<div><p class="exp-estimate__title"><span class="exp-estimate__label"></span> <b></b></p><p class="exp-estimate__note"></p></div></div>`),t.after(n),D(n,`estimate_view`,`Estimated Delivery by`,`Order Summary`));let[r,i]=Array.from(e.querySelectorAll(`p`)),a=r?.querySelector(`span`)?.textContent?.trim()??``,o=(r?.textContent??``).replace(a,``).trim();_(n.querySelector(`.exp-estimate__label`),o),_(n.querySelector(`b`),a),_(n.querySelector(`.exp-estimate__note`),i?.textContent?.trim()??``)}},X=new WeakMap,ze=e=>{if(X.has(e))return X.get(e);let t=Function.prototype.toString.call(e),n=t.indexOf(`revealRest:`);if(n<0)return;let r=null,i=/^revealRest:([\w$]+)/.exec(t.slice(n))?.[1],a=[...t.slice(Math.max(0,n-400),n).matchAll(/\berrors:([\w$]+)/g)].pop()?.[1],o=[...t.matchAll(/\[([\w$]+),[\w$]+\]=\(0,[\w$]+\.useState\)/g)],s=o.findIndex(e=>e[1]===a),c=o.findIndex(e=>e[1]===i);return i&&a&&s>=0&&c>s&&o.slice(s,c).every((e,n)=>{let r=t.slice(e.index+e[0].length,o[s+n+1].index);return!/\.use[A-Z]|\buse[A-Z]\w*\(/.test(r)})&&(r=c-s),X.set(e,r),r},Be=(e,t)=>{let n=Ve(e,`revealRest`);if(!n||!n.errors||typeof n.errors!=`object`)return null;let r=[];for(let t=e.memoizedState;t&&typeof t==`object`&&`next`in t;t=t.next)r.push(t);let i=r.findIndex(e=>e.memoizedState===n.errors),a=r[i],o=r[i+t];return i>=0&&typeof a.queue?.dispatch==`function`&&typeof o?.queue?.dispatch==`function`&&o.memoizedState===n.revealRest?{setErrors:a.queue.dispatch,setRevealRest:o.queue.dispatch}:null},Ve=(e,t)=>{let n=[e.child];for(let e=0;n.length&&e<5e3;e++){let e=n.pop();if(!e)continue;let r=e.memoizedProps;if(r&&typeof r==`object`&&t in r)return r;n.push(e.sibling,e.child)}return null},He=`/* ---------- Delivery date card (4102:4403) ---------- */
.exp-date {
  display: flex;
  align-items: center;
  gap: 12px;
  /* Starts under the radio, 30px left of the method text (4102:4580). */
  margin: 0 0 12px -30px;
  padding: 10px 16px;
  border-radius: 4px;
  background: var(--exp-success-bg);
}

.exp-date__text {
  flex: 1 1 auto;
  min-width: 0;
}

.exp-date__text p {
  margin: 0;
}

.exp-date__label {
  color: var(--exp-muted);
  font-size: 11px;
  line-height: 16px;
}

.exp-date__value {
  color: var(--exp-text);
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  white-space: nowrap;
}

.exp-date__change {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  border: 0;
  background: none;
  color: var(--exp-cta);
  font: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}

.exp-date__change svg {
  transform: rotate(-90deg);
  transition: transform 0.2s;
}

.exp-date[data-exp-open='true'] .exp-date__change svg {
  transform: rotate(0deg);
}

/* The design drops the "Preferred Delivery Date" line (the card above shows
   it). The site's note that the date is not guaranteed stays, under the card
   while the calendar is folded and under the calendar once it is open. */
[data-exp-shipping] [data-exp-calendar] {
  display: flex;
  flex-direction: column;
}

[data-exp-shipping] [data-exp-calendar] > div:first-child,
[data-exp-shipping] [data-exp-calendar='closed'] > :not(p) {
  display: none;
}

[data-exp-shipping] [data-exp-calendar] > p {
  order: 1;
  margin: 0 !important;
}

[data-exp-shipping] [data-exp-calendar='open'] > p {
  margin-top: 16px !important;
}

/* ---------- Open calendar (4102:5099) ---------- */
/* The card turns into the "Choose your delivery date" heading under a line;
   picking a day closes it again, so there is no Change button. */
.exp-date[data-exp-open='true'] {
  margin-bottom: 20px;
  padding: 20px 0 0;
  border-top: 1px solid #e5e7eb;
  border-radius: 0;
  background: none;
}

.exp-date[data-exp-open='true'] .exp-date__change {
  display: none;
}

.exp-date[data-exp-open='true'] .exp-date__label {
  color: var(--exp-text);
  font-size: 12px;
  font-weight: 600;
  line-height: 21px;
}

.exp-date[data-exp-open='true'] .exp-date__value {
  margin-top: 5px;
  color: var(--exp-muted);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  white-space: normal;
}

/* The site's calendars (delivery date and pickup day) share the look:
   full width from the radio, like the date card. */
html[data-exp-step='shipping'] [data-exp-calendar='open'] > [role='application'],
html[data-exp-step='shipping'] [data-exp-shipping] div.space-y-3 > [role='application'] {
  width: calc(100% + 30px);
  max-width: none;
  margin: 0 0 0 -30px;
  padding: 0;
  border: 0;
}

[data-exp-shipping] [role='application'] > div.mb-3 {
  height: 46px;
  margin-bottom: 0;
  padding: 0 14px;
  border-radius: 6px;
  background: #f8f9fb;
}

[data-exp-shipping] [role='application'] > div.mb-3 > h2 {
  color: var(--exp-text);
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
}

[data-exp-shipping] [role='application'] > div.mb-3 > div {
  gap: 8px;
}

[data-exp-shipping] [role='application'] > div.mb-3 button {
  color: var(--exp-text);
}

/* 8px between days and rows; the negative margins cancel the spacing the
   table would add around its outer edge. */
[data-exp-shipping] [role='application'] table[role='grid'] {
  width: calc(100% + 16px);
  margin: 0 -8px -8px;
  border-spacing: 8px;
}

[data-exp-shipping] [role='application'] table[role='grid'] th {
  padding: 0;
  color: var(--exp-text);
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
}

[data-exp-shipping] [role='application'] td[role='gridcell'] > div[role='button'] {
  aspect-ratio: auto;
  height: 46px;
  margin: 0;
  border: 1px solid transparent;
  border-radius: 6px;
  background: #fff;
  color: var(--exp-text);
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
}

/* Available day: white with a dark outline. */
[data-exp-shipping] [role='application'] td[role='gridcell'] > div[role='button']:not([data-unavailable]):not([data-disabled]) {
  border-color: #3f3f3f;
  cursor: pointer;
}

[data-exp-shipping] [role='application'] td[role='gridcell'] > div[data-unavailable],
[data-exp-shipping] [role='application'] td[role='gridcell'] > div[data-disabled] {
  background: #f8f9fb;
  color: rgba(33, 37, 41, 0.3);
  font-weight: 400;
}

/* The site's diagonal strike over unavailable days. */
[data-exp-shipping] [role='application'] td[role='gridcell'] > div[role='button'] > span {
  display: none;
}

[data-exp-shipping] [role='application'] td[role='gridcell'] > div[data-selected] {
  border-color: var(--exp-cta);
  background: var(--exp-cta);
  color: #fff;
  font-weight: 700;
}

[data-exp-shipping] [role='application'] td[role='gridcell'] > div[data-outside-month] {
  visibility: hidden;
}

/* ---------- Delivery instructions (4102:4403) ---------- */
.exp-comments-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 0 20px;
  border: 0;
  border-bottom: 1px solid var(--exp-border);
  background: none;
  color: var(--exp-text);
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
}

.exp-comments-toggle[data-exp-open='true'] {
  padding-bottom: 12px;
  border-bottom: 0;
}

.exp-comments-toggle[data-exp-open='true'] svg {
  transform: rotate(180deg);
}

[data-exp-shipping] [data-exp-comments='closed'] {
  display: none;
}

[data-exp-shipping] [data-exp-comments] > label {
  display: none;
}

/* Input (4102:5270): 117px, 14px 19px padding, room at the bottom for the counter.
   Font size stays the site's (16px under md so iOS doesn't zoom, 14px above). */
[data-exp-shipping] [data-exp-comments] {
  position: relative;
}

[data-exp-shipping] [data-exp-comments] > textarea {
  display: block;
  min-height: 117px;
  margin: 0;
  padding: 14px 19px 30px;
  border-color: var(--exp-border-strong);
  border-radius: 4px;
  color: var(--exp-text);
  line-height: 22px;
}

/* Same grey as the site's other placeholders (placeholder:text-muted-foreground). */
[data-exp-shipping] [data-exp-comments] > textarea::placeholder {
  color: #6c757d;
  opacity: 1;
}

.exp-comments-counter {
  position: absolute;
  right: 20px;
  bottom: 5px;
  margin: 0 !important;
  color: var(--exp-text);
  font-size: 12px;
  line-height: 22px;
  opacity: 0.3;
  pointer-events: none;
}

[data-exp-shipping] [data-exp-actions] > button[type='submit']::after {
  content: '→';
  margin-left: 6px;
}

/* ---------- Method icons (4102:4566 / 4102:4626): 24px, 12px before the name ---------- */
.exp-method-icon {
  position: relative;
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  margin-right: 6px; /* + the title's own 6px gap */
  overflow: hidden;
}

/* The warehouse drawing sits inset in its 24px box, as in the design. */
.exp-method-icon--pickup > span {
  position: absolute;
  inset: 2.93%;
}

.exp-method-icon--pickup > span > svg {
  position: absolute;
  top: -2.21%;
  left: -2.21%;
}
`,Ue=`<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="team-leader (1) 2">
<path id="Vector" d="M15.6186 18.5996C15.6186 19.5587 16.3961 20.3362 17.3553 20.3362C18.3144 20.3362 19.0919 19.5587 19.0919 18.5996C19.0919 17.6404 18.3144 16.863 17.3553 16.863C16.3961 16.863 15.6186 17.6404 15.6186 18.5996ZM15.6186 18.5996L15.6184 5.44012C15.6184 4.48103 14.8409 3.70349 13.8817 3.70349H12.1451M15.6186 18.5996L8.9319 18.5995M5.24237 18.5995H3.80843C2.84929 18.5995 2.0718 17.822 2.0718 16.8629V13.2594M1.20312 3.70803H10.4073M1.20312 7.1813H8.67065M1.20312 10.6546H6.93401M15.6184 8.04947H18.2299C18.7747 8.04947 19.2879 8.30511 19.6161 8.73992L22.0425 11.955C22.3837 12.407 22.5682 12.9579 22.5682 13.5243V18.5995H19.4333M22.3915 13.0424H15.6186M8.79972 18.5996C8.79972 19.5587 8.02223 20.3362 7.06308 20.3362C6.10394 20.3362 5.32645 19.5587 5.32645 18.5996C5.32645 17.6404 6.10394 16.863 7.06308 16.863C8.02223 16.863 8.79972 17.6404 8.79972 18.5996Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
</g>
</svg>
`,We=`<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="23.5938" height="23.5938" viewBox="0 0 23.5938 23.5938" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group">
<path id="Vector" d="M23.0938 23.0938H0.5V6.21875L11.7969 0.5L23.0938 6.21875V23.0938Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
<path id="Vector_2" d="M10.8594 4.8125H12.7344" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
<path id="Vector_3" d="M4.79688 17.0938H11.7969V23.0938H4.79688V17.0938Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
<path id="Vector_4" d="M11.7969 17.0938H18.7969V23.0938H11.7969V17.0938Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
<path id="Vector_5" d="M8.79688 10.0938H14.7969V17.0938H8.79688V10.0938Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
<path id="Vector_6" d="M15.2969 17.0938V18.0938" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
<path id="Vector_7" d="M8.29688 17.0938V18.0938" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
<path id="Vector_8" d="M11.7969 10.0938V12.0938" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
</g>
</svg>
`,Ge=`<svg width="22" height="22" viewBox="0 0 18 18" fill="none" aria-hidden="true"><rect x="1.5" y="3" width="15" height="13.5" rx="1.5" stroke="#1f8964" stroke-width="1.2"/><path d="M1.5 7h15M5.5 1v4M12.5 1v4" stroke="#1f8964" stroke-width="1.2" stroke-linecap="round"/><path d="M4.5 10h1.5M8.25 10h1.5M12 10h1.5M4.5 13h1.5M8.25 13h1.5" stroke="#1f8964" stroke-width="1.2" stroke-linecap="round"/></svg>`,Z=`<svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,Ke=class{constructor(){this.calendarOpen=!1,this.commentsOpen=!1,this.initialDate=``,this.lastDate=``,this.calendarBound=new WeakSet,this.counterBound=new WeakSet,p(He),d(()=>this.mount())}mount(){if(S()!==`shipping`)return;let e=document.querySelector(`[data-exp-columns] form`);e&&(m(e,`data-exp-shipping`),g(y(`div`,`Delivery options`,e)),this.methodIcons(e),this.date(e),this.comments(e),v(e.querySelector(`[data-exp-actions] button:not([type="submit"])`),`Return to delivery`))}methodIcons(e){e.querySelectorAll(`span.flex.items-center.font-semibold`).forEach(e=>{if(e.querySelector(`.exp-method-icon`))return;let t=/pick ?up|collect|warehouse/i.test(e.textContent??``);e.prepend(b(`<span class="exp-method-icon exp-method-icon--${t?`pickup`:`delivery`}" aria-hidden="true"><span>${t?We:Ue}</span></span>`))})}date(e){let t=/^(Selected date|Preferred Delivery Date):\s*/i,n=y(`div`,t,e),r=n?.parentElement;if(!n||!r)return;let i=(n.textContent??``).replace(t,``).trim();this.initialDate||=i,this.lastDate&&i!==this.lastDate&&(this.calendarOpen=!1),this.lastDate=i,m(r,`data-exp-calendar`,this.calendarOpen?`open`:`closed`);let a=e.querySelector(`.exp-date`);a||(a=b(`
        <div class="exp-date">
          ${Ge}
          <div class="exp-date__text"><p class="exp-date__label"></p><p class="exp-date__value"></p></div>
          <button type="button" class="exp-date__change">Change ${Z}</button>
        </div>`),a.querySelector(`.exp-date__change`).addEventListener(`click`,()=>{this.calendarOpen=!this.calendarOpen,T(`date_change`,`Change`,`Delivery Options`),f()}),r.before(a)),this.calendarBound.has(r)||(this.calendarBound.add(r),r.addEventListener(`click`,e=>{let t=e.target.closest(`td[role="gridcell"] > div[role="button"]`);!t||t.hasAttribute(`data-unavailable`)||t.hasAttribute(`data-disabled`)||(this.calendarOpen=!1,f())})),m(a,`data-exp-open`,String(this.calendarOpen)),this.calendarOpen?(_(a.querySelector(`.exp-date__label`),`Choose your delivery date`),_(a.querySelector(`.exp-date__value`),`2-man delivery on your selected date.`)):(_(a.querySelector(`.exp-date__label`),i===this.initialDate?`Earliest available delivery date`:`Your delivery date`),_(a.querySelector(`.exp-date__value`),qe(i)))}comments(e){let t=e.querySelector(`#customer-comment`),n=t?.closest(`div.space-y-1\\.5`);if(!t||!n)return;t.value.trim()&&(this.commentsOpen=!0),m(n,`data-exp-comments`,this.commentsOpen?`open`:`closed`),m(t,`placeholder`,`Add any special instructions for delivery`);let r=n.querySelector(`.exp-comments-counter`);r||(r=b(`<span class="exp-comments-counter" aria-live="polite"></span>`),n.append(r));let i=()=>_(r,`${t.value.length}/${t.maxLength>0?t.maxLength:255}`);if(i(),this.counterBound.has(t)||(this.counterBound.add(t),t.addEventListener(`input`,i)),!e.querySelector(`.exp-comments-toggle`)){let e=b(`<button type="button" class="exp-comments-toggle">Delivery instructions (optional) ${Z}</button>`);e.addEventListener(`click`,()=>{this.commentsOpen=!this.commentsOpen,T(`instructions`,this.commentsOpen?`Opened`:`Closed`,`Delivery Instructions`),f()}),n.before(e)}m(e.querySelector(`.exp-comments-toggle`),`data-exp-open`,String(this.commentsOpen))}},Q=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],qe=e=>{let t=e.match(/^([A-Za-z]+),?\s+([A-Za-z]{3})[a-z]*\.?\s+(\d{1,2})(?:,?\s+(\d{4}))?$/),n=t?Q.findIndex(e=>e.startsWith(t[2])):-1;if(!t||n<0)return e;let r=new Date,i=t[4]??String(r.getFullYear()+ +(n<r.getMonth()));return`${t[1]} ${t[3]} ${Q[n]} ${i}`},Je=`/* Payment step (designs 4102:5773 desktop, 4102:6019 mobile). */

/* The design has no subtitle under "Payment". */
html[data-exp-step='payment'] [data-exp-columns] h1.text-2xl {
  margin-bottom: 0;
}

html[data-exp-step='payment'] [data-exp-columns] h1.text-2xl + p {
  display: none;
}

/* ---------- OR divider (4102:5794) ----------
   Look and the gap above: checkout-layout/style.css. Below, 24px to the first
   method: 20px here plus that method's 4px. Without PayPal express the block
   isn't a grid, so the margin above collapses with Stripe's 8px (14px) instead
   of adding to it: it carries the whole 16px (14px on mobile) itself. */
[data-exp-express] > div.relative[data-exp-pay-divider] {
  margin-top: 16px;
  margin-bottom: 20px;
}

@media (max-width: 1023px) {
  [data-exp-express] > div.relative[data-exp-pay-divider] {
    margin-top: 14px;
  }
}

/* ---------- Payment methods (4102:5800, 4102:5824) ----------
   The design draws each method as its own card, the chosen one with a green
   border and header and Pay inside it. The site renders one bordered
   radiogroup and Pay (or the PayPal button) after it, so the group is
   flattened into the step's column and the action block is ordered right
   after the chosen method, continuing its card. React's nodes stay put. */
[data-exp-pay-layout] {
  display: flex;
  flex-direction: column;
}

[data-exp-pay-methods] {
  display: contents;
}

[data-exp-pay-option] {
  margin-top: 20px;
  padding: 1px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  background: #fff;
  overflow: hidden;
}

[data-exp-pay-option]:has(> button[aria-checked='true']) {
  padding: 0;
  border: 2px solid var(--exp-cta);
}

/* 4px of the 24px under the OR divider (4102:5794); the gap between cards. */
[data-exp-pay-index='0'] { order: 10; margin-top: 4px; }
[data-exp-pay-index='1'] { order: 12; }
[data-exp-pay-index='2'] { order: 14; }
[data-exp-pay-index='3'] { order: 16; }
[data-exp-pay-index='4'] { order: 18; }

[data-exp-pay-actions] {
  order: 19;
  margin-top: 0 !important;
}

[data-exp-pay-layout]:has([data-exp-pay-index='0'] > button[aria-checked='true']) > [data-exp-pay-actions] { order: 11; }
[data-exp-pay-layout]:has([data-exp-pay-index='1'] > button[aria-checked='true']) > [data-exp-pay-actions] { order: 13; }
[data-exp-pay-layout]:has([data-exp-pay-index='2'] > button[aria-checked='true']) > [data-exp-pay-actions] { order: 15; }
[data-exp-pay-layout]:has([data-exp-pay-index='3'] > button[aria-checked='true']) > [data-exp-pay-actions] { order: 17; }

/* The chosen card goes on into the action block when there is one (Pay
   Later that isn't available leaves it empty). */
[data-exp-pay-layout]:has(> [data-exp-pay-actions]:not(:empty)) [data-exp-pay-option]:has(> button[aria-checked='true']) {
  border-bottom: 0;
  border-radius: 6px 6px 0 0;
}

[data-exp-pay-actions]:not(:empty) {
  padding: 12px 20px 30px;
  border: 2px solid var(--exp-cta);
  border-top: 0;
  border-radius: 0 0 6px 6px;
  background: #fff;
}

[data-exp-pay-back] {
  order: 30;
}

/* The site's divider line between methods; each is its own card now. */
[data-exp-pay-option] > button[role='radio'] {
  gap: 12px;
  padding: 20px;
  border-top: 0;
  background: #fff;
}

[data-exp-pay-option] > button[aria-checked='true'] {
  background: #eaf5f0;
}

[data-exp-pay-option] > button[role='radio'] > div:first-child {
  gap: 12px;
}

[data-exp-pay-option] > button[role='radio'] > div:first-child > span:first-child {
  width: 18px;
  height: 18px;
  border-color: #adb5bd;
  background: #fff;
}

[data-exp-pay-option] > button[aria-checked='true'] > div:first-child > span:first-child {
  border-color: #0f6b4a;
}

[data-exp-pay-option] > button[role='radio'] > div:first-child > span:first-child > span {
  background: #0f6b4a;
}

[data-exp-pay-option] > button[role='radio'] span.text-sm.font-medium {
  color: var(--exp-text);
  font-weight: 600;
  line-height: 21px;
}

[data-exp-pay-body] {
  border-top: 0;
  padding: 20px;
}

/* Card logos (4102:5831): the design's six networks at 23px, 228px wide.
   The site's strip (card-networks.png, 734×60) ends with PayPal, which sits
   past x=586 of the image: 586 × 23/60 ≈ 228, so the crop ends in the gap
   after Discover. */
[data-exp-pay-option='card'] > button[role='radio'] > div:last-child > img {
  width: 228px;
  height: 23px;
  object-fit: cover;
  object-position: left center;
}

[data-exp-pay-option='card'] [data-exp-pay-body] {
  padding-bottom: 0;
}

[data-exp-pay-option='paypal'] [data-exp-pay-body] {
  padding-bottom: 8px;
}

/* The site reserves 420px inline while Stripe loads; our smaller inputs
   leave that space empty once the form is in. */
[data-exp-pay-body] div[style*='min-height']:has(.StripeElement iframe) {
  min-height: 0 !important;
}

/* ---------- Secure note + Pay (4102:5877, 4102:5887) ---------- */
html[data-exp-step='payment'] [data-exp-pay-note] {
  gap: 8px;
  margin-top: 12px;
  padding: 12px 0;
  color: var(--exp-muted);
  font-size: 12px;
  line-height: 15px;
}

html[data-exp-step='payment'] [data-exp-pay-actions] [data-exp-pay-button] {
  gap: 8px;
  width: 100%;
  height: 50px;
  min-height: 0;
  border-radius: 4px;
  background: var(--exp-cta);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 19.5px;
  transition-property: color, background-color, border-color, box-shadow, opacity;
}

/* Arrow after "Pay £…" (4102:5889), drawn in CSS so React's button stays untouched. */
[data-exp-pay-button]::after {
  content: '';
  flex: 0 0 auto;
  width: 9.63px;
  height: 11px;
  background: currentColor;
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9.63 11'%3E%3Cpath d='M9.42794 5.98521C9.69664 5.71665 9.69664 5.28052 9.42794 5.01196L5.98866 1.57446C5.71996 1.30591 5.2836 1.30591 5.01491 1.57446C4.74621 1.84302 4.74621 2.27915 5.01491 2.5477L7.28269 4.81216H0.687857C0.307386 4.81216 0 5.11938 0 5.49966C0 5.87993 0.307386 6.18716 0.687857 6.18716H7.28054L5.01706 8.45161C4.74836 8.72017 4.74836 9.1563 5.01706 9.42485C5.28575 9.69341 5.72211 9.69341 5.99081 9.42485L9.43009 5.98735L9.42794 5.98521Z'/%3E%3C/svg%3E") center / contain no-repeat;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9.63 11'%3E%3Cpath d='M9.42794 5.98521C9.69664 5.71665 9.69664 5.28052 9.42794 5.01196L5.98866 1.57446C5.71996 1.30591 5.2836 1.30591 5.01491 1.57446C4.74621 1.84302 4.74621 2.27915 5.01491 2.5477L7.28269 4.81216H0.687857C0.307386 4.81216 0 5.11938 0 5.49966C0 5.87993 0.307386 6.18716 0.687857 6.18716H7.28054L5.01706 8.45161C4.74836 8.72017 4.74836 9.1563 5.01706 9.42485C5.28575 9.69341 5.72211 9.69341 5.99081 9.42485L9.43009 5.98735L9.42794 5.98521Z'/%3E%3C/svg%3E") center / contain no-repeat;
}

/* ---------- Return to shipping (4102:5891) ---------- */
[data-exp-pay-back] button {
  color: var(--exp-text);
  font-size: 14px;
  line-height: 24px;
}

/* ---------- Recommended "Buy now pay later" (4102:5799, 4102:6050) ----------
   Only when Pay Later is known to be available (see paylater.ts). It moves
   above the card, which keeps the gap under the OR divider; its action
   block follows it when chosen. */
[data-exp-pay-layout][data-exp-paylater-first] [data-exp-pay-option='paylater'] {
  order: 8;
  margin-top: 4px;
}

[data-exp-pay-layout][data-exp-paylater-first] [data-exp-pay-index='0'] {
  margin-top: 20px;
}

[data-exp-pay-layout][data-exp-paylater-first]:has([data-exp-pay-option='paylater'] > button[aria-checked='true']) > [data-exp-pay-actions] {
  order: 9;
}

[data-exp-recommended] {
  position: relative;
}

/* Radio, PayPal logo, "Buy now, pay later", badge: the site's two inner
   groups are opened up so the logo can sit before the label. */
[data-exp-recommended] > button[role='radio'] {
  justify-content: flex-start;
  gap: 8px;
  padding: 18px 20px 0;
}

[data-exp-recommended] > button[role='radio'] > div {
  display: contents;
}

[data-exp-recommended] > button[role='radio'] > div:first-child > span:first-child {
  margin-right: 7px;
}

[data-exp-recommended] > button[role='radio'] img[alt='PayPal'] {
  order: 1;
  height: 22px;
}

[data-exp-recommended] > button[role='radio'] span.text-sm.font-medium {
  order: 2;
  font-size: 16px;
}

[data-exp-recommended] > button[role='radio'] > div:last-child > span {
  display: none;
}

[data-exp-recommended] > button[role='radio']::after {
  content: 'Recommended';
  order: 3;
  margin-left: auto;
  padding: 1px 7px;
  border-radius: 24px;
  background: #ffc439;
  color: var(--exp-text);
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
  white-space: nowrap;
}

.exp-paylater {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  /* Under the label: padding + radio + its gap. */
  padding: 5px 20px 18px 53px;
  cursor: pointer;
}

[data-exp-recommended] > button[aria-checked='true'] + .exp-paylater {
  background: #eaf5f0;
}

.exp-paylater__text {
  margin: 0;
  color: #6b7280;
  font-size: 12px;
  line-height: 20px;
}

.exp-paylater__more {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #0070e0;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: underline;
  text-underline-position: from-font;
}

.exp-paylater__more::after {
  content: '';
  width: 9.63px;
  height: 8.25px;
  background: currentColor;
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9.62946 8.25322'%3E%3Cpath d='M9.42794 4.61216C9.69664 4.3436 9.69664 3.90747 9.42794 3.63892L5.98866 0.201416C5.71996 -0.0671387 5.2836 -0.0671387 5.01491 0.201416C4.74621 0.469971 4.74621 0.906103 5.01491 1.17466L7.28269 3.43911H0.687857C0.307386 3.43911 0 3.74634 0 4.12661C0 4.50688 0.307386 4.81411 0.687857 4.81411H7.28054L5.01706 7.07856C4.74836 7.34712 4.74836 7.78325 5.01706 8.05181C5.28575 8.32036 5.72211 8.32036 5.99081 8.05181L9.43009 4.61431L9.42794 4.61216Z'/%3E%3C/svg%3E") center / contain no-repeat;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9.62946 8.25322'%3E%3Cpath d='M9.42794 4.61216C9.69664 4.3436 9.69664 3.90747 9.42794 3.63892L5.98866 0.201416C5.71996 -0.0671387 5.2836 -0.0671387 5.01491 0.201416C4.74621 0.469971 4.74621 0.906103 5.01491 1.17466L7.28269 3.43911H0.687857C0.307386 3.43911 0 3.74634 0 4.12661C0 4.50688 0.307386 4.81411 0.687857 4.81411H7.28054L5.01706 7.07856C4.74836 7.34712 4.74836 7.78325 5.01706 8.05181C5.28575 8.32036 5.72211 8.32036 5.99081 8.05181L9.43009 4.61431L9.42794 4.61216Z'/%3E%3C/svg%3E") center / contain no-repeat;
}


@media (max-width: 767px) {
  html[data-exp-step='payment'] [data-exp-columns] h1.text-2xl {
    line-height: 36px;
  }

  [data-exp-pay-option] > button[role='radio'] {
    padding: 13px 14px;
  }

  /* "Buy now, pay later" + "Pay Later with PayPal" only just fit one line. */
  [data-exp-pay-option] > button[role='radio'] span.text-sm.font-medium {
    white-space: nowrap;
  }

  [data-exp-pay-option='paylater'] > button[role='radio'] > div:last-child {
    gap: 6px;
    font-size: 12px;
  }

  [data-exp-pay-option='card'] > button[role='radio'] span.text-sm.font-medium {
    font-size: 18px;
    line-height: 26px;
    white-space: nowrap;
  }

  /* Three logos at 20px here (4102:6082): the strip's gap after Maestro is
     at x≈303 of 734, so 303 × 20/60 ≈ 101px. */
  [data-exp-pay-option='card'] > button[role='radio'] > div:last-child > img {
    width: 101px;
    height: 20px;
  }

  [data-exp-pay-body] {
    padding: 20px 14px;
  }

  [data-exp-pay-actions]:not(:empty) {
    padding: 12px 14px 20px;
  }

  html[data-exp-step='payment'] [data-exp-pay-back] {
    justify-content: center;
    margin-top: 18px;
  }

  /* Mobile: the badge is a tab in the card's top-right corner (4102:6073). */
  [data-exp-recommended] > button[role='radio'] {
    padding: 17px 14px 0;
  }

  [data-exp-recommended] > button[role='radio'] img[alt='PayPal'] {
    height: 20px;
  }

  [data-exp-recommended] > button[role='radio'] span.text-sm.font-medium {
    font-size: 14px;
  }

  [data-exp-recommended] > button[role='radio']::after {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 4px 0 4px;
    font-size: 10px;
  }

  .exp-paylater {
    padding: 5px 14px 17px 47px;
  }
}

/* Under 390px the PayPal logo alone says it; "Pay Later with" no longer fits. */
@media (max-width: 389px) {
  [data-exp-pay-option='paylater'] > button[role='radio'] > div:last-child > span {
    display: none;
  }
}
`,$={locale:`en-GB`,fonts:[{cssSrc:`https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap`}],appearance:{theme:`stripe`,variables:{fontFamily:`Archivo, system-ui, sans-serif`,fontSizeBase:`14px`,colorText:`#212529`,colorTextPlaceholder:`#6c757d`,colorPrimary:`#1f8964`,colorBackground:`#ffffff`,borderRadius:`4px`,spacingGridRow:`12px`,spacingGridColumn:`12px`},rules:{".Label":{fontSize:`14px`,fontWeight:`500`,lineHeight:`24px`,color:`#212529`,marginBottom:`8px`},".Input":{border:`1px solid #ced4da`,boxShadow:`none`,padding:`13px 20px`,fontSize:`14px`,lineHeight:`22px`},".Input:focus":{borderColor:`#1f8964`,boxShadow:`0 0 0 1px #1f8964`},".Input::placeholder":{color:`#6c757d`},".CheckboxInput":{borderColor:`#adb5bd`,borderRadius:`4px`},".CheckboxLabel":{fontSize:`12px`,fontWeight:`500`,lineHeight:`20px`}}}},Ye=class{constructor(){this.styled=new WeakSet,this.firstOn=new WeakSet,this.payLaterOff=new WeakMap,p(Je),d(()=>this.mount())}mount(){let e=S();if(e===`contact`&&ve(),e!==`payment`)return;let t=document.querySelector(`[data-exp-columns] div[role="radiogroup"]`),n=t?.parentElement;if(!t||!n)return;m(n,`data-exp-pay-layout`),m(t,`data-exp-pay-methods`);let r=Array.from(t.children).filter(e=>e.querySelector(`:scope > button[role="radio"]`));r.forEach((e,t)=>{let n=e.querySelector(`:scope > button[role="radio"] span.text-sm.font-medium`),r=n?.textContent?.trim()??``,i=/credit|debit/i.test(r)?`card`:/later/i.test(r)?`paylater`:/paypal/i.test(r)?`paypal`:`other`;if(m(e,`data-exp-pay-option`,i),m(e,`data-exp-pay-index`,String(t)),m(e.querySelector(`[data-testid="collapsible-panel"] div.border-t`),`data-exp-pay-body`),i!==`card`)return;/credit\s*\/\s*debit card/i.test(r)&&v(n,`Credit or debit card`),g(e.querySelector(`img[alt="Apple Pay"]`)?.parentElement);let a=e.querySelector(`p[role="note"]`);a&&(m(a,`data-exp-pay-note`),v(y(`span`,`Payments processed by Stripe`,a),`Encrypted and powered by Stripe`))});let i=t.nextElementSibling;i&&!/Return to/.test(i.textContent??``)&&(m(i,`data-exp-pay-actions`),m(Array.from(i.children).find(e=>e.tagName===`BUTTON`&&/^Pay\b/.test(e.textContent?.trim()??``)),`data-exp-pay-button`)),m(Array.from(n.children).find(e=>/^Return to/.test(e.textContent?.trim()??``)),`data-exp-pay-back`),this.recommend(n,r.find(e=>e.getAttribute(`data-exp-pay-option`)===`paylater`)),m(y(`span`,`OR`,n)?.closest(`div.relative:has(> div.absolute)`),`data-exp-pay-divider`),this.stripe()}recommend(e,t){document.querySelector(`[data-testid="paypal-paylater-unavailable"]`)&&L(!1);let n=z(document.querySelector(`[data-testid="checkout-total"]`)?.textContent),r=!!t&&I()===!0&&ye(n),i=t?.querySelector(`:scope > button[role="radio"]`)?.getAttribute(`aria-checked`)===`true`;this.payLaterOff.has(e)||this.payLaterOff.set(e,I()===!1&&!i),this.payLaterOff.get(e)===!0&&!i?g(t):h(t,`data-exp-hide`);let a=t?.querySelector(`:scope > .exp-paylater`);if(!r){this.firstOn.has(e)||h(e,`data-exp-paylater-first`),h(t,`data-exp-recommended`),a?.remove();return}this.firstOn.add(e),m(e,`data-exp-paylater-first`),m(t,`data-exp-recommended`);let o=t.querySelector(`:scope > button[role="radio"]`);if(!a&&o){let e=b(`<div class="exp-paylater">
          <p class="exp-paylater__text">Flexible payment options available for eligible purchases.</p>
          <a class="exp-paylater__more" href="${Xe}" target="_blank" rel="noopener noreferrer">Learn more</a>
        </div>`);e.addEventListener(`click`,e=>{if(e.target.closest(`.exp-paylater__more`)){T(`paylater_more`,`Learn more`,`Payment`);return}o.click()}),o.after(e)}D(t,`paylater_view`,`Buy now pay later recommended`,`Payment`)}stripe(){let e=document.querySelector(`iframe[title="Secure payment input frame"]`)?.closest(`.__PrivateStripeElement`),t=e&&B(e);if(!t||this.styled.has(t))return;this.styled.add(t);let n=t.update.bind(t);t.update=e=>n({...e,...$}),n($)}},Xe=`https://www.paypal.com/uk/digital-wallet/ways-to-pay/buy-now-pay-later`;t({name:`Cart & Checkout Alt 6`,dev:`OS`}),n(`exp_checkout`),new class{constructor(){if(!document.documentElement.dataset.expAlt6){document.documentElement.dataset.expAlt6=`1`,C(),p(a),te(()=>{C(),f()});for(let e of[`input`,`change`,`click`])document.addEventListener(e,()=>setTimeout(f,50),!0);new ie,new oe,new Se,new ke,new je,new Re,new Ke,new Ye}}}})();
