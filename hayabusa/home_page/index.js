(function(){var e=(e,t,n,r=``)=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r}),a(`Event: ${e} | ${t} | ${n} | ${r}`,`success`)},t=e=>new Promise(t=>{let n=document.querySelector(e);if(n){t(n);return}let r=new MutationObserver(()=>{let n=document.querySelector(e);n&&(t(n),r.disconnect())});r.observe(document.documentElement,{childList:!0,subtree:!0})}),n=({name:e,dev:t})=>{console.log(`%c EXP: ${e} (DEV: ${t})`,`background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`)},r=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},i=(t,n,r,i,o=1e3,s=.5)=>{let c,l;if(c=new IntersectionObserver(function(t){t[0].isIntersecting===!0?l=setTimeout(()=>{e(n,t[0].target.dataset.visible||i||``,`view`,r),c.disconnect()},o):(a(`Element is not fully visible`,`warn`),clearTimeout(l))},{threshold:[s]}),typeof t==`string`){let e=document.querySelector(t);e&&c.observe(e)}else c.observe(t)},a=(e,t=`info`)=>{let n;switch(t){case`info`:n=`color: #3498db;`;break;case`warn`:n=`color: #f39c12;`;break;case`error`:n=`color: #e74c3c;`;break;case`success`:n=`color: #2ecc71;`;break}console.log(`%c>>> ${e}`,`${n} font-size: 16px; font-weight: 600`)},o=()=>location.pathname===`/`;function s(e){if(o()){e();return}let t=new MutationObserver(()=>{o()&&(t.disconnect(),e())});t.observe(document,{childList:!0,subtree:!0})}var c=[],l;function u(){for(let{node:e,into:t,first:n}of c)if(!o())e.remove();else if(!e.isConnected){let r=t();n?r?.prepend(e):r?.append(e)}}function d(e,t,n){c.push({node:e,into:t,first:n}),l||(l=new MutationObserver(u),l.observe(document,{childList:!0,subtree:!0})),u()}function f(e,t){if(document.querySelector(`.${t}`))return;let n=document.createElement(`style`);n.className=t,n.textContent=e,d(n,()=>document.head||document.documentElement)}var p=`exp_hp`,m=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,`_`);function h(e,t){i(t,`${p}_${m(e)}_view`,e,`Visibility`)}function g(t,n,r){e([p,m(t),r&&m(r),`click`].filter(Boolean).join(`_`),n,`click`,t)}var _=`.exp-bags-banner {
  --exp-bags-banner-cnd: HayabusaCnd, ui-sans-serif, system-ui, sans-serif;
  --exp-bags-banner-rc: 'Roboto Condensed', ui-sans-serif, system-ui, sans-serif;

  position: relative;
  width: 100%;
}

.exp-bags-banner__image {
  display: block;
  width: 100%;
  aspect-ratio: 375 / 500;
  object-fit: cover;
}

/*
  Copy sits bottom-centre over the photo on mobile and right-of-centre on
  desktop, matching Hayabusa's own banners. The scrim is on the copy rather than
  the image so it tracks whichever side the text is on.
*/
.exp-bags-banner__copy {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 80px 24px 40px;
  background: linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 65%) 60%);
  color: #fff;
  text-align: center;
}

/* Colour is set on each element rather than inherited from \`__copy\`: the host
   stylesheet colours bare \`h2\` and \`p\`, and a direct rule beats inheritance. */
.exp-bags-banner__title {
  margin: 0 0 8px;
  color: #fff;
  font-family: var(--exp-bags-banner-cnd);
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.exp-bags-banner__subtitle {
  margin: 0 0 20px;
  color: #fff;
  font-family: var(--exp-bags-banner-rc);
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
}

.exp-bags-banner__cta {
  display: inline-block;
  padding: 14px 32px;
  border: 1px solid rgb(255 255 255 / 80%);
  color: #fff;
  font-family: var(--exp-bags-banner-rc);
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.exp-bags-banner__cta:hover {
  background: #fff;
  color: #000;
}

@media (min-width: 768px) {
  .exp-bags-banner__image {
    aspect-ratio: 1440 / 700;
  }

  .exp-bags-banner__copy {
    top: 0;
    left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: min(50%, 700px);
    padding: 0 64px;
    background: none;
    text-align: right;
  }

  .exp-bags-banner__title {
    margin-bottom: 12px;
    font-size: 56px;
  }

  .exp-bags-banner__subtitle {
    margin-bottom: 28px;
    font-size: 20px;
    line-height: 28px;
  }
}
`;function v(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)v(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function y(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...i}=t??{},a=document.createElement(e);for(let[e,t]of Object.entries(i))e.startsWith(`on`)&&typeof t==`function`?a.addEventListener(e.slice(2).toLowerCase(),t):t===!0?a.setAttribute(e,``):t!==!1&&t!=null&&a.setAttribute(e,String(t));return v(a,r),a}var b=y,x=`Punching Bags`,S=`/collections/quick-swap-punching-bags`,C=`https://cdn.sanity.io/images/6tpq25k0/production/e2d1c6dc08cbf6e3aab18f4d384d974ac83a9beb-10120x4217.png/freestandingbag_lifestyle_bv6a2446_rev1a_dec1_2025_12-5-ratio.png`,w=`https://cdn.sanity.io/images/6tpq25k0/production/e2d1c6dc08cbf6e3aab18f4d384d974ac83a9beb-10120x4217.png/freestandingbag_lifestyle_bv6a2446_rev1a_dec1_2025_12-5-ratio.png?rect=2530,0,5060,4217`,T=(e,t)=>`${e}${e.includes(`?`)?`&`:`?`}w=${t}&q=80&auto=format`,ee=()=>{f(_,`exp-bags-banner-styles`);let e=b(`section`,{class:`exp-bags-banner`,children:[b(`picture`,{children:[y(`source`,{media:`(min-width: 768px)`,srcset:`${T(C,1440)} 1440w, ${T(C,2400)} 2400w`,sizes:`100vw`}),y(`img`,{class:`exp-bags-banner__image`,src:T(w,800),srcset:`${T(w,480)} 480w, ${T(w,800)} 800w, ${T(w,1200)} 1200w`,sizes:`100vw`,alt:``,loading:`lazy`,decoding:`async`})]}),b(`div`,{class:`exp-bags-banner__copy`,children:[y(`h2`,{class:`exp-bags-banner__title`,children:`Punching Bags`}),y(`p`,{class:`exp-bags-banner__subtitle`,children:`The Quick Swap system — change bags in seconds. Find the right weight for your setup.`}),y(`a`,{class:`exp-bags-banner__cta`,href:S,onClick:()=>g(x,`Shop Bags`,`cta`),children:`Shop Bags`})]})]});return h(x,e),e},te=`.exp-disciplines {
  --exp-disciplines-cnd: HayabusaCnd, ui-sans-serif, system-ui, sans-serif;

  width: 100%;
  padding: 0 16px;
}

.exp-disciplines__title {
  margin: 0 0 16px;
  color: #000;
  font-family: var(--exp-disciplines-cnd);
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
}

/*
  Mobile scrolls the six tiles sideways; the negative margin and matching
  padding let the row bleed to the screen edge while the first tile still lines
  up with the heading.
*/
.exp-disciplines__row {
  display: flex;
  gap: 8px;
  margin: 0 -16px;
  padding: 0 16px;
  overflow-x: auto;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
}

.exp-disciplines__row::-webkit-scrollbar {
  display: none;
}

.exp-disciplines__tile {
  display: flex;
  flex: 0 0 142px;
  flex-direction: column;
  scroll-snap-align: start;
  text-decoration: none;
}

/* The comp runs these in colour — only Wrestling is black and white, and that
   one is shot that way. */
.exp-disciplines__image {
  width: 100%;
  aspect-ratio: 219 / 189;
  object-fit: cover;
}

.exp-disciplines__label {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: #000;
  color: #fff;
  font-family: var(--exp-disciplines-cnd);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .exp-disciplines {
    padding: 0 32px;
  }

  .exp-disciplines__title {
    margin-bottom: 24px;
    font-size: 32px;
  }

  .exp-disciplines__row {
    gap: 12px;
    margin: 0;
    padding: 0;
    overflow: visible;
  }

  .exp-disciplines__tile {
    flex: 1 1 0;
    min-width: 0;
  }
}
`,E=`Shop By Discipline`,D=[{title:`Boxing`,href:`/pages/hayabusa-boxing-discipline`,image:`https://cdn.sanity.io/images/6tpq25k0/production/bea8b8c51f137bdc99b9c2fa5f5df8f167063c88-1080x1080.jpg/kanpeki_lifestyle_social3_1080x1080.jpg`},{title:`Jiu-Jitsu`,href:`/pages/hayabusa-jiu-jitsu-discipline`,image:`https://cdn.sanity.io/images/6tpq25k0/production/c69ec979e8701a4eef7e919d78499ae4a9ae9f58-8192x5464.jpg/core_lifestyle_bv6a6156_rev1a_aug31_2025-copy.jpg`},{title:`Muay Thai`,href:`/pages/hayabusa-muay-thai-discipline`,image:`https://cdn.sanity.io/images/6tpq25k0/production/3113d472dc598eaf8b35ac392e8b83cc34159058-6000x4000.png/muaythai_hendo_dsc01809_rev1a_april12_2022_high-res.png?rect=0,0,6000,3445`},{title:`MMA`,href:`/pages/hayabusa-mma-discipline`,image:`https://cdn.sanity.io/images/6tpq25k0/production/5ba35ed9b3bae11f2aa94a113176f78879f290a1-8192x5464.jpg/tristar_lifestyle_bv6a0283_rev1a_jan29_2026.jpg`},{title:`Kickboxing`,href:`/pages/hayabusa-kickboxing-discipline`,image:`https://cdn.sanity.io/images/6tpq25k0/production/24dffb25541f890676c3c85510f2666dfb0f2bce-6720x4480.png/hayabusa-bazooka-shorts-162.png?rect=24,454,4520,2818`},{title:`Wrestling`,href:`/pages/hayabusa-wrestling-discipline`,image:`https://cdn.sanity.io/images/6tpq25k0/production/f22972f04b0438a5885e64e0a578a85c5921a5d6-15360x8640.png/wrestlinglifestyle_683a3001_rev1a_july2_2026_hero.png`}],O=(e,t)=>`${e}${e.includes(`?`)?`&`:`?`}w=${t}&q=80&auto=format`,k=()=>{f(te,`exp-disciplines-styles`);let e=b(`section`,{class:`exp-disciplines`,children:[y(`h2`,{class:`exp-disciplines__title`,children:`Shop By Discipline`}),y(`div`,{class:`exp-disciplines__row`,children:D.map(({title:e,href:t,image:n})=>b(`a`,{class:`exp-disciplines__tile`,href:t,onClick:()=>g(E,e),children:[y(`img`,{class:`exp-disciplines__image`,src:O(n,480),srcset:`${O(n,320)} 320w, ${O(n,480)} 480w, ${O(n,720)} 720w`,sizes:`(min-width: 768px) 22vw, 142px`,alt:``,loading:`lazy`,decoding:`async`}),y(`span`,{class:`exp-disciplines__label`,children:e})]}))})]});return h(E,e),e};function A(e,t){let n=new WeakSet,r=()=>{if(!o())return;let r=document.querySelector(e);!r||n.has(r)||(n.add(r),t(r))};new MutationObserver(r).observe(document,{childList:!0,subtree:!0}),r()}var ne=`/*
  Mobile only: the control stacks three full-width 3:4 tiles, which pushes the
  whole segmentation far down the page. The variant puts Men and Women side by
  side as tall portraits and gives Kids a full-width band, matching the comp.

  The section is matched by its Kids link, not by its position — while the page
  streams in, :nth-child() briefly points at whichever block has arrived so far.
  Desktop is untouched.
*/
@media (max-width: 767px) {
  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) > div > .flex {
    flex-flow: row wrap;
    gap: 8px;
  }

  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width {
    flex: 0 0 calc((100% - 8px) / 2);
    width: auto;
  }

  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width:nth-child(3) {
    flex-basis: 100%;
  }

  /* Ratios rather than the comp's 375px/183px heights, so the tiles keep their
     proportions on narrower and wider phones alike. */
  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width > a {
    aspect-ratio: 183 / 375;
  }

  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width:nth-child(3) > a {
    aspect-ratio: 375 / 183;
  }

  /* The caption block: centred over the tile instead of pinned bottom-left. */
  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width > a > div:last-child {
    align-items: center;
    padding: 0 8px 53px;
  }

  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width h4 {
    font-size: 20px;
    line-height: 24px;
  }
}
`,j=`Shop By Gender`,re=`.page-transition > .flex.flex-col > .module-row:has(a[href="/collections/kids"])`,ie=()=>{f(ne,`exp-gender-styles`),A(re,e=>{h(j,e),e.addEventListener(`click`,e=>{let t=e.target.closest(`a`);t&&g(j,t.querySelector(`h4 span`)?.textContent?.trim()??`Tile`)})})},ae=5,oe=150,se=600,ce=.4;function M(e){let t=0,n=!1,r=!1,i=0,a=0,o=0,s=0,c=0,l,u=()=>{let t=e.getBoundingClientRect().left-e.scrollLeft,n=parseFloat(getComputedStyle(e).scrollPaddingInlineStart)||0;return[...e.children].map(e=>e.getBoundingClientRect().left-t-n)},d=(e,t)=>e.reduce((n,r,i)=>Math.abs(r-t)<Math.abs(e[n]-t)?i:n,0);e.addEventListener(`pointerdown`,l=>{r=!1,!(l.pointerType===`touch`||l.button!==0)&&(t=l.pointerId,n=!0,i=o=l.clientX,a=e.scrollLeft,s=l.timeStamp,c=0)}),e.addEventListener(`pointermove`,u=>{if(!n||u.pointerId!==t)return;let d=u.clientX-i,f=u.timeStamp-s;if(f&&(c+=((u.clientX-o)/f-c)*ce),o=u.clientX,s=u.timeStamp,!r){if(Math.abs(d)<=ae)return;r=!0,clearTimeout(l),e.setPointerCapture(t),e.style.scrollSnapType=`none`,e.style.userSelect=`none`,e.style.cursor=`grabbing`}e.scrollLeft=a-d});let f=i=>{if(!n||i.pointerId!==t||(n=!1,!r))return;e.hasPointerCapture(t)&&e.releasePointerCapture(t),e.style.userSelect=``,e.style.cursor=``;let a=u(),o=d(a,e.scrollLeft-c*oe);e.scrollTo({left:a[o],behavior:`smooth`}),l=setTimeout(()=>{e.style.scrollSnapType=``},se)};e.addEventListener(`pointerup`,f),e.addEventListener(`pointercancel`,f),e.addEventListener(`dragstart`,e=>e.preventDefault()),e.addEventListener(`click`,e=>{r&&(r=!1,e.preventDefault(),e.stopPropagation())},!0)}var N=`.exp-jiu-jitsu {
  --exp-jiu-jitsu-cnd: HayabusaCnd, ui-sans-serif, system-ui, sans-serif;

  width: 100%;
  padding: 0 16px;
}

.exp-jiu-jitsu__title {
  margin: 0 0 16px;
  color: #000;
  font-family: var(--exp-jiu-jitsu-cnd);
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
}

.exp-jiu-jitsu__viewport {
  position: relative;
}

/* Exactly one tile per view on mobile, as the comp has it — the row bleeds to
   both screen edges so the tile is the full 343px of the padded column and the
   next one sits entirely offscreen; four across from 768px, where they all fit.
   \`scroll-padding\` is what keeps every tile after the first snapping to the
   column's left edge rather than the screen's. */
.exp-jiu-jitsu__row {
  display: flex;
  gap: 12px;
  margin: 0 -16px;
  padding: 0 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 16px;
  scrollbar-width: none;
  cursor: grab;
}

.exp-jiu-jitsu__row::-webkit-scrollbar {
  display: none;
}

.exp-jiu-jitsu__tile {
  position: relative;
  flex: 0 0 100%;
  scroll-snap-align: start;
  /* The comp shoots these on a studio backdrop; the two no-gi PNGs are cut out,
     so the gradient stands in for it. */
  background: linear-gradient(180deg, #e6e7e9 0%, #a9adb2 100%);
  aspect-ratio: 318 / 425;
  text-decoration: none;
}

/*
  The shots are square and the tile is portrait, so \`cover\` trims the empty
  studio margin at the sides rather than letterboxing the gi photos — those two
  carry their own backdrop and would otherwise sit as a pale square on the
  gradient.
*/
.exp-jiu-jitsu__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.exp-jiu-jitsu__label {
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: #fff;
  font-family: var(--exp-jiu-jitsu-cnd);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-shadow: 0 1px 4px rgb(0 0 0 / 45%);
  text-transform: uppercase;
}

/* --- Arrows ------------------------------------------------------------- */

/* Mobile only: from 768px the row shows every tile, so there is nowhere to page
   to. Sits over the tile, centred on it, matching the sliders above. */
.exp-jiu-jitsu__nav {
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  transform: translateY(-50%);
  border: 0;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
  color: #000;
  cursor: pointer;
}

/* CSS chevron: the JSX runtime builds nodes with createElement, so an inline
   <svg> would come out as an HTML element and never render. */
.exp-jiu-jitsu__nav::before {
  content: '';
  width: 8px;
  height: 8px;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
}

.exp-jiu-jitsu__nav--prev {
  left: 12px;
}

.exp-jiu-jitsu__nav--prev::before {
  margin-left: 3px;
  transform: rotate(-135deg);
}

.exp-jiu-jitsu__nav--next {
  right: 12px;
}

.exp-jiu-jitsu__nav--next::before {
  margin-right: 3px;
  transform: rotate(45deg);
}

@media (min-width: 768px) {
  .exp-jiu-jitsu {
    padding: 0 32px;
  }

  .exp-jiu-jitsu__title {
    margin-bottom: 24px;
    font-size: 32px;
  }

  .exp-jiu-jitsu__row {
    gap: 16px;
    margin: 0;
    padding: 0;
    overflow: visible;
    cursor: auto;
  }

  .exp-jiu-jitsu__nav {
    display: none;
  }

  .exp-jiu-jitsu__tile {
    flex: 1 1 0;
    min-width: 0;
  }
}
`,P=`Jiu-Jitsu`,F=[{title:`Men's Gis`,href:`/collections/jiu-jitsu-gis`,image:`https://cdn.sanity.io/images/6tpq25k0/production/8d7aef27c5282eb0b8fec983a5ad9d1bd0130166-2160x2160.jpg/coregi_shopify_men_black_02.jpg`},{title:`Women's Gis`,href:`/collections/womens-bjj-gis`,image:`https://cdn.sanity.io/images/6tpq25k0/production/c225c3119ab334c087bfd95eb0fc7d48af45ab6b-2160x2160.jpg/coregi_shopify_women_blue_02.jpg`},{title:`Men's No-Gi`,href:`/collections/no-gi-apparel`,image:`https://cdn.sanity.io/images/6tpq25k0/production/e1f8b31bbe8838721c4b32abda3f234c12a5ef7e-1080x1080.png/fusion_blue_fr.png`},{title:`Women's No-Gi`,href:`/collections/womens-no-gi-apparel`,image:`https://cdn.sanity.io/images/6tpq25k0/production/ed40188656c9efc30deef9527b073ee135ca03ee-2160x2160.png/apex_womens_ss_blue_mainimg_fr.png`}],I=(e,t)=>`${e}?w=${t}&q=80&auto=format`,L=e=>t=>{let[n,r]=e.children,i=r.getBoundingClientRect().left-n.getBoundingClientRect().left;e.scrollBy({left:t*i,behavior:`smooth`})},R=()=>{f(N,`exp-jiu-jitsu-styles`);let e=y(`div`,{class:`exp-jiu-jitsu__row`,children:F.map(({title:e,href:t,image:n})=>b(`a`,{class:`exp-jiu-jitsu__tile`,href:t,onClick:()=>g(P,e),children:[y(`img`,{class:`exp-jiu-jitsu__image`,src:I(n,640),srcset:`${I(n,480)} 480w, ${I(n,640)} 640w, ${I(n,960)} 960w`,sizes:`(min-width: 768px) 24vw, 100vw`,alt:``,loading:`lazy`,decoding:`async`}),b(`span`,{class:`exp-jiu-jitsu__label`,children:[e,` >`]})]}))}),t=L(e);M(e);let n=b(`section`,{class:`exp-jiu-jitsu`,children:[y(`h2`,{class:`exp-jiu-jitsu__title`,children:`Jiu-Jitsu`}),b(`div`,{class:`exp-jiu-jitsu__viewport`,children:[e,y(`button`,{class:`exp-jiu-jitsu__nav exp-jiu-jitsu__nav--prev`,type:`button`,"aria-label":`Previous slide`,onClick:()=>{t(-1),g(P,`Previous slide`,`arrow`)}}),y(`button`,{class:`exp-jiu-jitsu__nav exp-jiu-jitsu__nav--next`,type:`button`,"aria-label":`Next slide`,onClick:()=>{t(1),g(P,`Next slide`,`arrow`)}})]})]});return h(P,n),n},z=e=>e?.textContent?.trim()??``,B=e=>Number(z(e?.querySelector(`.okendo-summary-count`)??null).replace(/\D/g,``))||0;function V(e,t,n=!1){let r=[...e.querySelectorAll(`.product-card-hover-shadow`)].slice(0,t).map(e=>{let t=e.querySelector(`.okendo-summary-inline`);return{href:e.querySelector(`a[href]`).getAttribute(`href`),title:z(e.querySelector(`h4`)),price:z([...e.querySelectorAll(`span`)].find(e=>!e.children.length&&/^\$[\d,.]+$/.test(z(e)))??null),badge:z(e.querySelector(`span.uppercase.font-serif`)),image:document.importNode(e.querySelector(`img`),!0),stars:t&&document.importNode(t,!0),reviews:B(t)}});return n||r.sort((e,t)=>t.reviews-e.reviews),r}async function H(e,t,n=!1){let r=await(await fetch(e)).text();return V(new DOMParser().parseFromString(r,`text/html`),t,n)}function U(e,t){let n=()=>{let[t,n]=e.children;return n.getBoundingClientRect().left-t.getBoundingClientRect().left},r=()=>{let r=n()*t;if(!r)return;let i=r+((e.scrollLeft-r)%r+r)%r;Math.abs(i-e.scrollLeft)>1&&(e.scrollLeft=i)},i;return e.addEventListener(`scroll`,()=>{clearTimeout(i),i=setTimeout(r,120)}),requestAnimationFrame(r),t=>{r();let i=n(),a=i*Math.max(1,Math.round(e.clientWidth/i));e.scrollBy({left:t*a,behavior:`smooth`})}}function W(e,t){let n=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(n.disconnect(),t())},{rootMargin:`100% 0px`});n.observe(e)}var G=`/*
  The heading row rearranges between breakpoints — on mobile the CTA sits beside
  the title and the "Not sure?" bar drops under the track, on desktop the bar
  takes the title's right and the CTA centres below. Both layouts are the same
  four children in the same DOM order, placed by grid areas.
*/
.exp-slider {
  --exp-slider-cnd: HayabusaCnd, ui-sans-serif, system-ui, sans-serif;
  --exp-slider-rc: 'Roboto Condensed', ui-sans-serif, system-ui, sans-serif;
  /* Fixed so every card is the same height and the arrows stay centred on the
     image. Tall enough for the worst case the card can produce — a name at its
     two-line clamp over a price row — because the track scrolls horizontally,
     and that makes the browser clip the vertical overflow rather than show it. */
  --exp-slider-info-h: 104px;
  --exp-slider-gap: 12px;
  /* Set inline per slider; desktop overrides the resolved value, not the input,
     because an inline custom property would win over any rule here. */
  --exp-slider-per-view: var(--exp-slider-mobile-per-view);

  display: grid;
  grid-template-areas:
    'title cta'
    'viewport viewport'
    'promo promo';
  grid-template-columns: 1fr auto;
  align-items: center;
  width: 100%;
  padding: 0 16px;
}

/* Colour is set on each element rather than inherited: the host stylesheet
   colours bare \`h2\`, \`h4\` and \`p\`, and a direct rule beats inheritance. */
.exp-slider__title {
  grid-area: title;
  margin: 0 0 16px;
  color: #000;
  font-family: var(--exp-slider-cnd);
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
}

.exp-slider__cta {
  grid-area: cta;
  margin: 0 0 16px;
  padding: 12px 20px;
  border: 1px solid #000;
  color: #000;
  font-family: var(--exp-slider-rc);
  font-size: 14px;
  white-space: nowrap;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.exp-slider__cta:hover {
  background: #000;
  color: #fff;
}

/* --- "Not sure? Find your perfect pair in 60 seconds." ------------------- */

.exp-slider__promo {
  display: flex;
  grid-area: promo;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  padding: 12px 16px;
  background: #000;
}

.exp-slider__promo-copy {
  margin: 0;
  color: #fff;
  font-family: var(--exp-slider-rc);
  font-size: 14px;
  line-height: 18px;
}

.exp-slider__promo-copy b {
  font-weight: 700;
}

.exp-slider__promo-cta {
  flex: none;
  padding: 8px 16px;
  background: #fff;
  color: #000;
  font-family: var(--exp-slider-cnd);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
}

/* --- Track -------------------------------------------------------------- */

.exp-slider__viewport {
  position: relative;
  grid-area: viewport;
  /* Held before the products land, so the sections below don't jump on fill:
     one square card plus its info block, at whatever width the cards get. */
  min-height: calc(
    (100vw - 32px - (var(--exp-slider-per-view) - 1) * var(--exp-slider-gap)) / var(--exp-slider-per-view) +
      var(--exp-slider-info-h)
  );
}

/* \`grab\` matches the host carousels; dragScroll swaps in \`grabbing\` for the
   duration of the gesture. */
.exp-slider__track {
  display: flex;
  gap: var(--exp-slider-gap);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  cursor: grab;
}

.exp-slider__track::-webkit-scrollbar {
  display: none;
}

.exp-slider__card {
  flex: 0 0 calc((100% - (var(--exp-slider-per-view) - 1) * var(--exp-slider-gap)) / var(--exp-slider-per-view));
  scroll-snap-align: start;
  color: #000;
  text-decoration: none;
}

.exp-slider__media {
  padding: 8px;
  background: #f3f4f6;
  aspect-ratio: 1 / 1;
}

.exp-slider__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.exp-slider__info {
  height: var(--exp-slider-info-h);
  padding-top: 12px;
}

.exp-slider__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 18px;
}

.exp-slider__badge {
  color: #ff9c00;
  font-family: HayabusaIndustry, Palatino, ui-serif;
  font-size: 13px;
  line-height: 1;
  text-transform: uppercase;
}

.exp-slider__name {
  display: -webkit-box;
  overflow: hidden;
  margin: 6px 0 4px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #000;
  font-family: var(--exp-slider-cnd);
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
}

.exp-slider__price {
  font-family: var(--exp-slider-rc);
  font-size: 16px;
}

.exp-slider__shipping {
  color: #12813f;
  font-family: var(--exp-slider-rc);
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
}

/* Two cards to a screen leaves no room beside the price, and the comp drops the
   reassurance there — it only rides along where a card has the width for it. */
.exp-slider--per-2 .exp-slider__shipping {
  display: none;
}

/* --- Arrows ------------------------------------------------------------- */

.exp-slider__nav {
  position: absolute;
  top: calc((100% - var(--exp-slider-info-h)) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  transform: translateY(-50%);
  border: 0;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
  color: #000;
  cursor: pointer;
}

/* CSS chevron: the JSX runtime builds nodes with createElement, so an inline
   <svg> would come out as an HTML element and never render. */
.exp-slider__nav::before {
  content: '';
  width: 8px;
  height: 8px;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
}

.exp-slider__nav--prev {
  left: 8px;
}

.exp-slider__nav--prev::before {
  margin-left: 3px;
  transform: rotate(-135deg);
}

.exp-slider__nav--next {
  right: 8px;
}

.exp-slider__nav--next::before {
  margin-right: 3px;
  transform: rotate(45deg);
}

@media (min-width: 768px) {
  .exp-slider {
    --exp-slider-gap: 16px;
    /* Four per view — the 1440w frame's 332px cards. */
    --exp-slider-per-view: 4;

    grid-template-areas:
      'title promo'
      'viewport viewport'
      'cta cta';
    padding: 0 32px;
  }

  .exp-slider__title {
    margin-bottom: 24px;
    font-size: 32px;
  }

  .exp-slider__cta {
    justify-self: center;
    margin: 24px 0 0;
    padding: 14px 32px;
    font-size: 16px;
  }

  .exp-slider__promo {
    justify-self: end;
    width: 496px;
    margin: 0 0 24px;
    padding: 14px 18px;
  }

  .exp-slider__media {
    padding: 32px;
  }

  .exp-slider__viewport {
    min-height: calc((100vw - 64px - 3 * var(--exp-slider-gap)) / 4 + var(--exp-slider-info-h));
  }

  /* Shipping is a mobile-only reassurance in the comp — desktop keeps the row
     to the price alone. */
  .exp-slider__shipping {
    display: none;
  }
}
`,K=12,le=300,ue=1e4,de=`/pages/glove-guide-quiz`,fe=85,pe=e=>Number(e.replace(/[^\d.]/g,``))>=fe,me=e=>t=>b(`a`,{class:`exp-slider__card`,href:t.href,onClick:()=>g(e,t.title),children:[y(`div`,{class:`exp-slider__media`,children:t.image.cloneNode(!0)}),b(`div`,{class:`exp-slider__info`,children:[b(`div`,{class:`exp-slider__row`,children:[y(`span`,{class:`exp-slider__badge`,children:t.badge}),t.stars?.cloneNode(!0)]}),y(`h4`,{class:`exp-slider__name`,children:t.title}),b(`div`,{class:`exp-slider__row`,children:[y(`span`,{class:`exp-slider__price`,children:t.price}),pe(t.price)&&y(`span`,{class:`exp-slider__shipping`,children:`Ships Free`})]})]})]}),he=e=>b(`div`,{class:`exp-slider__promo`,children:[b(`p`,{class:`exp-slider__promo-copy`,children:[y(`b`,{children:`Not sure?`}),` Find your perfect pair in 60 seconds.`]}),y(`a`,{class:`exp-slider__promo-cta`,href:de,onClick:()=>g(e,`Glove Finder`,`promo`),children:`Glove Finder`})]}),ge=(e,t)=>new Promise(n=>{let r=()=>{let t=document.querySelector(e);return t?V(t,K,!0):[]},i,o=e=>{c.disconnect(),clearTimeout(i),clearTimeout(l),n(e)},s=()=>{clearTimeout(i),i=setTimeout(()=>{let e=r();e.length&&o(e)},le)},c=new MutationObserver(s),l=setTimeout(()=>{a(`${t}: no carousel matched "${e}" — the slider is hidden`,`error`),o(r())},ue);c.observe(document,{childList:!0,subtree:!0}),s()}),_e=e=>{f(G,`exp-slider-styles`);let{section:t,collection:n,modifier:r,perView:i,cta:a,gloveFinder:o,keepOrder:s,carousel:c}=e,l=()=>c?ge(c,t):H(n,K,s),u=y(`div`,{class:`exp-slider__viewport`}),d=b(`section`,{class:`exp-slider exp-slider--${r} exp-slider--per-${i}`,style:`--exp-slider-mobile-per-view: ${i}`,children:[y(`h2`,{class:`exp-slider__title`,children:t}),o&&he(t),a&&y(`a`,{class:`exp-slider__cta`,href:n,onClick:()=>g(t,a,`cta`),children:a}),u]});return W(d,async()=>{let e=await l().catch(()=>[]);if(!e.length){d.style.display=`none`;return}let n=me(t),r=b(`div`,{class:`exp-slider__track`,children:[e.map(n),e.map(n),e.map(n)]}),i=U(r,e.length);M(r),u.append(r,y(`button`,{class:`exp-slider__nav exp-slider__nav--prev`,type:`button`,"aria-label":`Previous slide`,onClick:()=>{i(-1),g(t,`Previous slide`,`arrow`)}}),y(`button`,{class:`exp-slider__nav exp-slider__nav--next`,type:`button`,"aria-label":`Next slide`,onClick:()=>{i(1),g(t,`Next slide`,`arrow`)}}))}),h(t,d),d};function q(e){let t=document.createElement(`div`);return t.innerHTML=e,t.firstElementChild}var J=`fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`,Y=()=>q(`<svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path fill="#FFB400" d="M10 .54 12.34 7.77H19.92L13.79 12.23 16.13 19.46 10 14.99 3.87 19.46 6.21 12.23.08 7.77H7.66Z"/></svg>`),ve=()=>q(`<svg viewBox="0 0 24 24" width="24" height="24" ${J} aria-hidden="true"><path d="M11.46 20.85A11 11 0 0 1 3.5 6a11 11 0 0 0 8.5-3 11 11 0 0 0 8.5 3 11 11 0 0 1-.09 7.06"/><path d="m15 19 2 2 4-4"/></svg>`),ye=()=>q(`<svg viewBox="0 0 24 24" width="24" height="24" ${J} aria-hidden="true"><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 17H3v-4M2 5h11v12M9 17h6M13 6h5l3 5v6h-2M21 11h-8M3 9h4"/></svg>`),be=()=>q(`<svg viewBox="0 0 24 24" width="24" height="24" ${J} aria-hidden="true"><path d="M20 11a8 8 0 0 0-15.5-2M4 5v4h4"/><path d="M4 13a8 8 0 0 0 15.5 2M20 19v-4h-4"/></svg>`),xe=`/* Full-bleed row — the comp runs the cards past both screen edges so the strip
   reads as a marquee rather than a contained module. */
.exp-reviews {
  --exp-reviews-cnd: HayabusaCnd, ui-sans-serif, system-ui, sans-serif;
  --exp-reviews-roboto: Roboto, ui-sans-serif, system-ui, sans-serif;

  width: 100%;
}

.exp-reviews__track {
  display: flex;
  gap: 16px;
  /* Reserves the card's height so the footer doesn't jump when they land. */
  min-height: 160px;
  padding: 0 16px;
  overflow-x: auto;
  /* Matches the padding so a snapped card keeps its inset from the edge. */
  scroll-padding-left: 16px;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  cursor: grab;
}

.exp-reviews__track::-webkit-scrollbar {
  display: none;
}

.exp-reviews__card {
  display: flex;
  flex: 0 0 190px;
  flex-direction: column;
  gap: 7px;
  margin: 0;
  padding: 15px;
  background: #f5f5f5;
  scroll-snap-align: start;
}

.exp-reviews__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.exp-reviews__stars {
  display: flex;
  flex: none;
}

.exp-reviews__date {
  color: rgb(0 0 0 / 56%);
  font-family: var(--exp-reviews-roboto);
  font-size: 14px;
  font-style: italic;
  line-height: 21px;
  white-space: nowrap;
}

.exp-reviews__quote {
  display: -webkit-box;
  overflow: hidden;
  margin: 0;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: #000;
  font-family: var(--exp-reviews-cnd);
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
}

.exp-reviews__author {
  margin-top: auto;
  color: #000;
  font-family: var(--exp-reviews-roboto);
  font-size: 14px;
  line-height: 20px;
}

@media (min-width: 768px) {
  .exp-reviews__track {
    min-height: 106px;
    gap: 24px;
    padding: 0 32px;
    scroll-padding-left: 32px;
  }

  .exp-reviews__card {
    flex-basis: 401px;
  }

  /* One line fits at this width, so the card keeps the comp's 106px height. */
  .exp-reviews__quote {
    -webkit-line-clamp: 1;
  }
}
`,Se=`Reviews`,Ce=`https://api.okendo.io/v1/stores/9320acc9-951d-4875-b33f-aec6d695d945/reviews?limit=40`,we=12,X={min:20,max:110},Te=new Intl.RelativeTimeFormat(`en`,{numeric:`auto`}),Z=[[`year`,365*24*36e5],[`month`,720*36e5],[`day`,24*36e5],[`hour`,36e5],[`minute`,6e4]];function Ee(e){let t=Date.now()-Date.parse(e),[n,r]=Z.find(([,e])=>t>=e)??Z[Z.length-1];return Te.format(-Math.floor(t/r),n)}var De=e=>e.reviewer.attributes?.find(e=>e.title===`Primary Discipline`)?.value??`Verified buyer`;async function Oe(){let{reviews:e}=await(await fetch(Ce)).json();return e.map(e=>({...e,body:(e.body??``).trim()})).filter(e=>e.rating===5&&e.reviewer.displayName&&e.body.length>=X.min&&e.body.length<=X.max).slice(0,we)}var ke=e=>b(`figure`,{class:`exp-reviews__card`,children:[b(`div`,{class:`exp-reviews__head`,children:[y(`div`,{class:`exp-reviews__stars`,children:[Y(),Y(),Y(),Y(),Y()]}),y(`time`,{class:`exp-reviews__date`,children:Ee(e.dateCreated)})]}),b(`blockquote`,{class:`exp-reviews__quote`,children:[`“`,e.body,`”`]}),b(`figcaption`,{class:`exp-reviews__author`,children:[e.reviewer.displayName,` · `,De(e)]})]}),Ae=()=>{f(xe,`exp-reviews-styles`);let e=y(`div`,{class:`exp-reviews__track`}),t=y(`section`,{class:`exp-reviews`,children:e});return W(t,async()=>{let n=await Oe().catch(()=>[]);if(!n.length){t.style.display=`none`;return}e.append(...n.map(ke)),M(e)}),h(Se,t),t},je=`.exp-trust {
  --exp-trust-cnd: HayabusaCnd, ui-sans-serif, system-ui, sans-serif;
  --exp-trust-rc: 'Roboto Condensed', ui-sans-serif, system-ui, sans-serif;

  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  padding: 0 16px;
  color: #000;
  text-align: center;
}

.exp-trust__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.exp-trust__stars {
  display: flex;
}

/* Colour is set on each element rather than inherited from \`.exp-trust\`: the
   host stylesheet colours bare \`p\`, and a direct rule beats inheritance. */
.exp-trust__title {
  margin: 0;
  color: #000;
  font-family: var(--exp-trust-cnd);
  font-size: 26px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}

.exp-trust__note {
  margin: 0;
  color: #000;
  font-family: var(--exp-trust-rc);
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .exp-trust {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    max-width: 1184px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .exp-trust__item {
    gap: 8px;
  }
}
`,Q=`Trust Bar`,Me=[{icon:()=>y(`div`,{class:`exp-trust__stars`,children:[Y(),Y(),Y(),Y(),Y()]}),title:`4.8 / 5`,note:`40,000+ verified reviews`},{icon:ve,title:`Pro-grade durability`,note:`Trusted by champions`},{icon:ye,title:`Free shipping $85+`,note:`US, Canada, and EU`},{icon:be,title:`Easy returns`,note:`Hassle-free exchanges`}],Ne=()=>{f(je,`exp-trust-styles`);let e=y(`section`,{class:`exp-trust`,children:Me.map(({icon:e,title:t,note:n})=>b(`div`,{class:`exp-trust__item`,children:[e(),y(`p`,{class:`exp-trust__title`,children:t}),y(`p`,{class:`exp-trust__note`,children:n})]}))});return h(Q,e),e},Pe=`/*
  The homepage sections are direct children of one \`display:flex; flex-direction:column\`
  wrapper, so the whole re-order is plain CSS \`order\` — no DOM moves, nothing for
  Hydrogen's React tree to reconcile away, and no reorder flash.

  This variant reads the homepage as a category-first store: discipline entry
  points, then a merchandised carousel under every banner. Four of the control's
  eleven sections have nothing to do in that layout and are hidden; the rest are
  interleaved with the sections we inject.

  :nth-child() indexes below are the CONTROL layout. \`checkSectionOrder()\` in index.ts
  logs loudly in dev if Hayabusa ships a section and the mapping drifts.
*/
.page-transition > .flex.flex-col > :nth-child(1) {
  order: 1; /* Hero video — Back To The Grind */
}

.page-transition > .flex.flex-col > :nth-child(2) {
  display: none; /* "Back To The Grind - Features" slider — replaced by Boxing Gloves */
}

.page-transition > .flex.flex-col > :nth-child(3) {
  order: 9; /* Precision Fit Gis banner */
}

.page-transition > .flex.flex-col > :nth-child(4) {
  display: none; /* Three All-New Gis slider — replaced by the Jiu-Jitsu tiles */
}

.page-transition > .flex.flex-col > :nth-child(5) {
  order: 11; /* Hayabusa Wrestling banner */
}

.page-transition > .flex.flex-col > :nth-child(6) {
  display: none; /* Wrestling products slider — its cards are re-rendered into ours */
}

.page-transition > .flex.flex-col > :nth-child(7) {
  order: 5; /* Boxing Shoes banner */
}

.page-transition > .flex.flex-col > :nth-child(8) {
  display: none; /* Shop By Collection — replaced by Shop By Discipline */
}

.page-transition > .flex.flex-col > :nth-child(9) {
  order: 13; /* Shop Men / Women / Kids segmentation */
}

.page-transition > .flex.flex-col > :nth-child(10) {
  display: none; /* Hayabusa Blog — editorial, off-message this far down a shopping page */
}

.page-transition > .flex.flex-col > :nth-child(11) {
  display: none; /* Brand tagline — the trust bar carries the reassurance now */
}

/* Sections we append live at the end of the DOM and are placed purely by \`order\`. */
.exp-disciplines {
  order: 2;
}

.exp-slider--gloves {
  order: 3;
}

.exp-slider--best-sellers {
  order: 4;
}

.exp-slider--boxing-shoes {
  order: 6;
}

.exp-bags-banner {
  order: 7;
}

.exp-slider--punching-bags {
  order: 8;
}

.exp-jiu-jitsu {
  order: 10;
}

.exp-slider--wrestling {
  order: 12;
}

.exp-trust {
  order: 14;
}

.exp-reviews {
  order: 15;
}

/*
  Vertical rhythm. The site spaces its sections 64px / 128px apart, and unevenly
  — full-bleed banners carry no margin at all, so a re-order can leave two of
  them touching. The comp uses a flat 32px / 44px. Gaps live on \`margin-top\`
  only, so each one is written in exactly one place.
*/
.page-transition > .flex.flex-col > * {
  margin-top: 32px;
  margin-bottom: 0;
}

.page-transition > .flex.flex-col > :nth-child(1) {
  margin-top: 0; /* Hero video runs flush under the header. */
}

/* Each banner introduces the carousel beneath it, so the pair sits tighter than
   the gap between two modules. */
.page-transition > .flex.flex-col > .exp-slider--boxing-shoes,
.page-transition > .flex.flex-col > .exp-slider--punching-bags,
.page-transition > .flex.flex-col > .exp-jiu-jitsu,
.page-transition > .flex.flex-col > .exp-slider--wrestling {
  margin-top: 20px;
}

@media (min-width: 768px) {
  .page-transition > .flex.flex-col > * {
    margin-top: 44px;
  }

  .page-transition > .flex.flex-col > .exp-slider--boxing-shoes,
  .page-transition > .flex.flex-col > .exp-slider--punching-bags,
  .page-transition > .flex.flex-col > .exp-jiu-jitsu,
  .page-transition > .flex.flex-col > .exp-slider--wrestling {
    margin-top: 28px;
  }
}
`;function Fe(e){let t=window;return t[e]?!1:(t[e]=!0,!0)}function Ie(){return document.documentElement?Promise.resolve():new Promise(e=>{let t=()=>document.documentElement?e():setTimeout(t);t()})}n({name:`HP`,dev:`OS`}),r(`exp_hp`);var $=`.page-transition > .flex.flex-col`,Le=[`Back To The Grind`,`BACK TO THE GRIND - FEATURES`,`PRECISION FIT GIS`,`THREE ALL-NEW GIS`,`HAYABUSA WRESTLING`,``,`Boxing Shoes`,`SHOP BY COLLECTION`,``,`HAYABUSA BLOG`,``],Re=[{section:`Boxing Gloves`,collection:`/collections/boxing-gloves`,modifier:`gloves`,perView:1,cta:`View All`,gloveFinder:!0},{section:`Best Sellers`,collection:`/collections/best-sellers`,modifier:`best-sellers`,perView:1},{section:`Boxing Shoes`,collection:`/collections/boxing-shoes`,modifier:`boxing-shoes`,perView:2},{section:`Punching Bags`,collection:`/collections/punching-bags`,modifier:`punching-bags`,perView:2,keepOrder:!0},{section:`Wrestling`,collection:`/pages/hayabusa-wrestling`,modifier:`wrestling`,perView:2,carousel:`.page-transition > .flex.flex-col > :has(.collection-carousel a[href^="/products/hayabusa-wrestling-headgear"])`}];function ze(e){Le.forEach((t,n)=>{if(!t)return;let r=e.children[n]?.querySelector(`h2`)?.textContent?.trim();r!==t&&a(`Section ${n+1} drifted — expected "${t}", got "${r}"`,`error`)})}async function Be(){await Ie(),f(Pe,`exp-hp-styles`),ze(await t($));let e=()=>document.querySelector($);d(k(),e),d(ee(),e),d(R(),e),d(Ne(),e),d(Ae(),e);for(let t of Re)d(_e(t),e);ie()}window.top===window.self&&Fe(`__exp_hp`)&&s(Be)})();
