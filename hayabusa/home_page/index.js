(function(){var e=(e,t,n,r=``)=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r}),i(`Event: ${e} | ${t} | ${n} | ${r}`,`success`)},t=({name:e,dev:t})=>{console.log(`%c EXP: ${e} (DEV: ${t})`,`background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`)},n=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},r=(t,n,r,a,o=1e3,s=.5)=>{let c,l;if(c=new IntersectionObserver(function(t){t[0].isIntersecting===!0?l=setTimeout(()=>{e(n,t[0].target.dataset.visible||a||``,`view`,r),c.disconnect()},o):(i(`Element is not fully visible`,`warn`),clearTimeout(l))},{threshold:[s]}),typeof t==`string`){let e=document.querySelector(t);e&&c.observe(e)}else c.observe(t)},i=(e,t=`info`)=>{let n;switch(t){case`info`:n=`color: #3498db;`;break;case`warn`:n=`color: #f39c12;`;break;case`error`:n=`color: #e74c3c;`;break;case`success`:n=`color: #2ecc71;`;break}console.log(`%c>>> ${e}`,`${n} font-size: 16px; font-weight: 600`)},a=()=>location.pathname===`/`;function o(e){if(a()){e();return}let t=new MutationObserver(()=>{a()&&(t.disconnect(),e())});t.observe(document,{childList:!0,subtree:!0})}var s=[],c;function l(e,t,n){if(t.some(t=>t.parentNode!==e))return!0;let r=[...e.childNodes],i=t.map(e=>r.indexOf(e)),a=r.map((e,t)=>t).filter(e=>i.indexOf(e)===-1);return n?Math.max(...i)>Math.min(...a):Math.min(...i)<Math.max(...a)}function u(){if(!a()){for(let{node:e}of s)e.remove();return}let e=new Map;for(let{node:t,into:n,first:r}of s){let i=n();if(!i)continue;let a=e.get(i);a||e.set(i,a={head:[],tail:[]}),a[r?`head`:`tail`].push(t)}for(let[t,{head:n,tail:r}]of e)n.length&&l(t,n,!0)&&t.prepend(...n),r.length&&l(t,r,!1)&&t.append(...r)}function d(e,t,n){e instanceof Element&&e.setAttribute(`data-exp`,``),s.push({node:e,into:t,first:n}),c||(c=new MutationObserver(u),c.observe(document,{childList:!0,subtree:!0})),u()}function f(e,t){if(document.querySelector(`.${t}`))return;let n=document.createElement(`style`);n.className=t,n.textContent=e,d(n,()=>document.head||document.documentElement)}var p=`exp_hp`,m=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,`_`);function h(e,t){r(t,`${p}_${m(e)}_view`,e,`Visibility`)}function g(t,n,r){e([p,m(t),r&&m(r),`click`].filter(Boolean).join(`_`),n,`click`,t)}function ee(e,t,n,r,a){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r,event_loc2:a}),i(`Event: ${e} | ${t} | ${n} | ${r} | ${a}`,`success`)}function _(e,t,n){ee(`${p}_${m(e)}_click`,t,`click`,e,new URL(n,location.origin).pathname)}var te=1e3,ne=.5,v=new Set,y=new Map;function re(t,n){let r=`${p}_${m(t)}_view`;if(v.has(r))return;y.get(r)?.();let i,a=new IntersectionObserver(n=>{if(!n[0].isIntersecting){clearTimeout(i);return}i=setTimeout(()=>{o(),!v.has(r)&&(v.add(r),e(r,`Visibility`,`view`,t))},te)},{threshold:[ne]}),o=()=>{a.disconnect(),clearTimeout(i),y.get(r)===o&&y.delete(r)};a.observe(n),y.set(r,o)}var b=`.exp-bags-banner {
  --exp-bags-banner-cnd: HayabusaCnd, ui-sans-serif, system-ui, sans-serif;
  --exp-bags-banner-rc: 'Roboto Condensed', ui-sans-serif, system-ui, sans-serif;

  position: relative;
  width: 100%;
}

.exp-bags-banner__image {
  display: block;
  width: 100%;
  aspect-ratio: 375 / 569;
  object-fit: cover;
}

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
  padding: 9px 25px;
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
    aspect-ratio: 1440 / 436;
  }

  .exp-bags-banner__copy {
    top: 0;
    left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: min(55%, 700px);
    padding: 0 clamp(24px, 11.111vw, 160px) 0 0;
    background: none;
    text-align: right;
  }

  .exp-bags-banner__title {
    margin-bottom: clamp(8px, 0.833vw, 12px);
    font-size: clamp(32px, 3.889vw, 56px);
  }

  .exp-bags-banner__subtitle {
    margin-bottom: clamp(16px, 1.944vw, 28px);
    font-size: clamp(15px, 1.389vw, 20px);
    line-height: clamp(21px, 1.944vw, 28px);
  }

  .exp-bags-banner__cta {
    padding: clamp(9px, 0.764vw, 11px) clamp(25px, 2.042vw, 29px);
  }
}
`;function x(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)x(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function S(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...i}=t??{},a=document.createElement(e);for(let[e,t]of Object.entries(i))e.startsWith(`on`)&&typeof t==`function`?a.addEventListener(e.slice(2).toLowerCase(),t):t===!0?a.setAttribute(e,``):t!==!1&&t!=null&&a.setAttribute(e,String(t));return x(a,r),a}var C=S,w=`Punching Bags Banner`,ie=`/collections/quick-swap-punching-bags`,T=`https://cdn.sanity.io/images/6tpq25k0/production/e2d1c6dc08cbf6e3aab18f4d384d974ac83a9beb-10120x4217.png/freestandingbag_lifestyle_bv6a2446_rev1a_dec1_2025_12-5-ratio.png`,E=`https://cdn.sanity.io/images/6tpq25k0/production/e2d1c6dc08cbf6e3aab18f4d384d974ac83a9beb-10120x4217.png/freestandingbag_lifestyle_bv6a2446_rev1a_dec1_2025_12-5-ratio.png?rect=2530,0,5060,4217`,D=(e,t)=>`${e}${e.includes(`?`)?`&`:`?`}w=${t}&q=80&auto=format`,ae=()=>{f(b,`exp-bags-banner-styles`);let e=C(`section`,{class:`exp-bags-banner`,children:[C(`picture`,{children:[S(`source`,{media:`(min-width: 768px)`,srcset:`${D(T,1440)} 1440w, ${D(T,2400)} 2400w`,sizes:`100vw`}),S(`img`,{class:`exp-bags-banner__image`,src:D(E,800),srcset:`${D(E,480)} 480w, ${D(E,800)} 800w, ${D(E,1200)} 1200w`,sizes:`100vw`,alt:``,loading:`lazy`,decoding:`async`})]}),C(`div`,{class:`exp-bags-banner__copy`,children:[S(`h2`,{class:`exp-bags-banner__title`,children:`Punching Bags`}),S(`p`,{class:`exp-bags-banner__subtitle`,children:`The Quick Swap system — change bags in seconds. Find the right weight for your setup.`}),S(`a`,{class:`exp-bags-banner__cta`,href:ie,onClick:()=>g(w,`Shop Bags`,`cta`),children:`Shop Bags`})]})]});return h(w,e),e};function O(e,t){let n=new WeakSet,r=()=>{if(!a())return;let r=document.querySelector(e);!r||n.has(r)||(n.add(r),t(r))};new MutationObserver(r).observe(document,{childList:!0,subtree:!0}),r()}var k=`@media (max-width: 767px) {
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

  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width > a {
    aspect-ratio: 183 / 375;
  }

  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width:nth-child(3) > a {
    aspect-ratio: 375 / 183;
  }

  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width > a > div:last-child {
    align-items: center;
    padding: 0 8px 53px;
  }

  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width h4 {
    font-size: 20px;
    line-height: 24px;
  }
}
`,A=`Shop By Gender`,j=`.page-transition > .flex.flex-col > .module-row:has(a[href="/collections/kids"])`,oe=()=>{f(k,`exp-gender-styles`),O(j,e=>{re(A,e),e.addEventListener(`click`,e=>{let t=e.target.closest(`a`);t&&g(A,t.querySelector(`h4 span`)?.textContent?.trim()??`Tile`)})})},se=e=>`.page-transition > .flex.flex-col > :not([data-exp]):has(.banner-button[href="${e}"])`,ce=[{href:`/pages/hayabusa-wrestling`,subtitle:`Shoes, singlets, and gear. Everything you need to perform at your peak.`,cta:`Shop Wrestling`},{href:`/collections/boxing-shoes`,cta:`Shop Shoes`}],le=()=>{let e=()=>{for(let{href:e,subtitle:t,cta:n}of ce)for(let r of document.querySelectorAll(`${se(e)} .w-fit`)){let e=r.querySelector(`p`);t&&e&&e.textContent!==t&&(e.textContent=t);let i=r.querySelector(`.banner-button`);i&&i.textContent!==n&&(i.textContent=n)}};new MutationObserver(e).observe(document,{childList:!0,subtree:!0,characterData:!0}),e()},ue=5,de=150,fe=600,pe=.4;function M(e){let t=0,n=!1,r=!1,i=!1,a=0,o=0,s=0,c=0,l=0,u,d=()=>{let t=e.getBoundingClientRect().left-e.scrollLeft,n=parseFloat(getComputedStyle(e).scrollPaddingInlineStart)||0;return[...e.children].map(e=>e.getBoundingClientRect().left-t-n)},f=(e,t)=>e.reduce((n,r,i)=>Math.abs(r-t)<Math.abs(e[n]-t)?i:n,0),p=()=>{e.hasPointerCapture(t)&&e.releasePointerCapture(t),e.style.userSelect=``,e.style.cursor=``,r=!1,i=!0};e.addEventListener(`pointerdown`,u=>{i=!1,r&&(p(),e.style.scrollSnapType=``),n=!1,!(u.pointerType===`touch`||u.button!==0)&&(e.scrollWidth<=e.clientWidth||(t=u.pointerId,n=!0,a=s=u.clientX,o=e.scrollLeft,c=u.timeStamp,l=0))}),e.addEventListener(`pointermove`,i=>{if(!n||i.pointerId!==t)return;let d=i.clientX-a,f=i.timeStamp-c;if(f&&(l+=((i.clientX-s)/f-l)*pe),s=i.clientX,c=i.timeStamp,!r){if(Math.abs(d)<=ue)return;r=!0,clearTimeout(u),e.setPointerCapture(t),e.style.scrollSnapType=`none`,e.style.userSelect=`none`,e.style.cursor=`grabbing`}e.scrollLeft=o-d});let m=i=>{if(!n||i.pointerId!==t||(n=!1,!r))return;p();let a=d(),o=f(a,e.scrollLeft-l*de);e.scrollTo({left:a[o],behavior:`smooth`}),u=setTimeout(()=>{e.style.scrollSnapType=``},fe)};e.addEventListener(`pointerup`,m),e.addEventListener(`pointercancel`,m),e.addEventListener(`dragstart`,e=>e.preventDefault()),e.addEventListener(`click`,e=>{i&&(i=!1,e.preventDefault(),e.stopPropagation())},!0)}var me=`.exp-jiu-jitsu {
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

  background: #fff;
  aspect-ratio: 318 / 425;
  text-decoration: none;
}

.exp-jiu-jitsu__tile::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 60%) 100%);
  pointer-events: none;
}

.exp-jiu-jitsu__picture {
  position: absolute;
  inset: 0;
}

.exp-jiu-jitsu__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.exp-jiu-jitsu__label {
  position: absolute;
  bottom: 18px;
  left: 20px;
  z-index: 1;
  color: #fff;
  font-family: var(--exp-jiu-jitsu-cnd);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-shadow: 0 1px 4px rgb(0 0 0 / 45%);
  text-transform: uppercase;
}

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

  .exp-jiu-jitsu__label {
    bottom: 48px;
    left: 32px;
    font-size: 15px;
  }

  .exp-jiu-jitsu__row {
    gap: 32px;
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
`,N=`Jiu-Jitsu`,P=[{title:`Men's Gis`,href:`/collections/jiu-jitsu-gis`,image:`https://cdn.sanity.io/images/6tpq25k0/production/8d7aef27c5282eb0b8fec983a5ad9d1bd0130166-2160x2160.jpg/coregi_shopify_men_black_02.jpg`,crop:`rect=507,0,1146,1532`},{title:`Women's Gis`,href:`/collections/womens-bjj-gis`,image:`https://cdn.sanity.io/images/6tpq25k0/production/c225c3119ab334c087bfd95eb0fc7d48af45ab6b-2160x2160.jpg/coregi_shopify_women_blue_02.jpg`,crop:`rect=507,0,1146,1532`},{title:`Men's No-Gi`,href:`/collections/no-gi-apparel`,image:`https://cdn.sanity.io/images/6tpq25k0/production/e1f8b31bbe8838721c4b32abda3f234c12a5ef7e-1080x1080.png/fusion_blue_fr.png`},{title:`Women's No-Gi`,href:`/collections/womens-no-gi-apparel`,image:`https://cdn.sanity.io/images/6tpq25k0/production/ed40188656c9efc30deef9527b073ee135ca03ee-2160x2160.png/apex_womens_ss_blue_mainimg_fr.png`}],F=(e,t,n=``)=>`${e}?${n&&`${n}&`}w=${t}&q=80&auto=format`,I=(e,t)=>[480,640,960].map(n=>`${F(e,n,t)} ${n}w`).join(`, `),L=e=>t=>{let[n,r]=e.children,i=r.getBoundingClientRect().left-n.getBoundingClientRect().left;e.scrollBy({left:t*i,behavior:`smooth`})},R=()=>{f(me,`exp-jiu-jitsu-styles`);let e=S(`div`,{class:`exp-jiu-jitsu__row`,children:P.map(({title:e,href:t,image:n,crop:r})=>C(`a`,{class:`exp-jiu-jitsu__tile`,href:t,onClick:()=>_(N,e,t),children:[C(`picture`,{class:`exp-jiu-jitsu__picture`,children:[r&&S(`source`,{media:`(min-width: 768px)`,srcset:I(n,r),sizes:`24vw`}),S(`img`,{class:`exp-jiu-jitsu__image`,src:F(n,640),srcset:I(n),sizes:`(min-width: 768px) 24vw, 100vw`,alt:``,loading:`lazy`,decoding:`async`})]}),C(`span`,{class:`exp-jiu-jitsu__label`,children:[e,` >`]})]}))}),t=L(e);M(e);let n=C(`section`,{class:`exp-jiu-jitsu`,children:[S(`h2`,{class:`exp-jiu-jitsu__title`,children:`Jiu-Jitsu`}),C(`div`,{class:`exp-jiu-jitsu__viewport`,children:[e,S(`button`,{class:`exp-jiu-jitsu__nav exp-jiu-jitsu__nav--prev`,type:`button`,"aria-label":`Previous slide`,onClick:()=>{t(-1),g(N,`Previous slide`,`arrow`)}}),S(`button`,{class:`exp-jiu-jitsu__nav exp-jiu-jitsu__nav--next`,type:`button`,"aria-label":`Next slide`,onClick:()=>{t(1),g(N,`Next slide`,`arrow`)}})]})]});return h(N,n),n},z=e=>e?.textContent?.trim()??``,he=/^\$[\d,.]+(?:\s*[-–—]\s*\$[\d,.]+)?$/,B=e=>Number(e.replace(/[^\d.]/g,``));function ge(e){return[...e.querySelectorAll(`span`)].filter(e=>!e.children.length&&he.test(z(e))).reduce((e,t)=>e.concat(z(t).match(/\$[\d,.]+/g)??[]),[]).sort((e,t)=>B(e)-B(t))[0]??``}var _e=e=>Number(z(e?.querySelector(`.okendo-summary-count`)??null).replace(/\D/g,``))||0;function V(e,t,n=!1){let r=[...e.querySelectorAll(`.product-card-hover-shadow`)].map(e=>{let t=e.querySelector(`a[href]`),n=e.querySelector(`img`);if(!t||!n)return null;let r=e.querySelector(`.okendo-summary-inline`);return{href:t.getAttribute(`href`)??``,title:z(e.querySelector(`h4`)),price:ge(e),badge:z(e.querySelector(`span.uppercase.font-serif`)),image:document.importNode(n,!0),stars:r&&document.importNode(r,!0),reviews:_e(r)}}).filter(e=>e!==null).slice(0,t);return n||r.sort((e,t)=>t.reviews-e.reviews),r}async function ve(e,t,n=!1){let r=await fetch(e);if(!r.ok)throw Error(`${e} responded ${r.status}`);return V(new DOMParser().parseFromString(await r.text(),`text/html`),t,n)}function ye(e,t){let n=()=>{let[t,n]=e.children;return n.getBoundingClientRect().left-t.getBoundingClientRect().left},r=()=>{let r=n()*t;if(!r)return;let i=r+((e.scrollLeft-r)%r+r)%r;Math.abs(i-e.scrollLeft)>1&&(e.scrollLeft=i)},i;return e.addEventListener(`scroll`,()=>{clearTimeout(i),i=setTimeout(r,120)}),requestAnimationFrame(r),{page:t=>{r();let i=n(),a=i*Math.max(1,Math.round(e.clientWidth/i));e.scrollBy({left:t*a,behavior:`smooth`})},normalize:r}}function H(e,t){let n=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(n.disconnect(),t())},{rootMargin:`100% 0px`});n.observe(e)}var be=`.exp-slider {
  --exp-slider-cnd: HayabusaCnd, ui-sans-serif, system-ui, sans-serif;
  --exp-slider-rc: 'Roboto Condensed', ui-sans-serif, system-ui, sans-serif;

  --exp-slider-info-h: 104px;
  --exp-slider-gap: 16px;

  --exp-slider-per-view: var(--exp-slider-mobile-per-view);
  --exp-slider-media-h: calc(
    (100vw - 32px - (var(--exp-slider-per-view) - 1) * var(--exp-slider-gap)) / var(--exp-slider-per-view)
  );

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

.exp-slider__title {
  grid-area: title;
  margin: 0 0 16px;
  color: #000;
  font-family: var(--exp-slider-cnd);
  font-size: 32px;
  font-weight: 800;
  line-height: 40px;
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

.exp-slider__viewport {
  position: relative;
  grid-area: viewport;
}

.exp-slider__viewport:empty {
  min-height: calc(var(--exp-slider-media-h) + var(--exp-slider-info-h));
}

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
  display: flex;
  flex: 0 0 calc((100% - (var(--exp-slider-per-view) - 1) * var(--exp-slider-gap)) / var(--exp-slider-per-view));
  flex-direction: column;
  scroll-snap-align: start;
  color: #000;
  text-decoration: none;
}

.exp-slider__media {
  flex: none;
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
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 12px;
}

.exp-slider__info > .exp-slider__row:last-child {
  margin-top: auto;
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

@media (max-width: 767px) {
  .exp-slider--per-2 .exp-slider__name,
  .exp-slider--per-2 .exp-slider__price {
    font-size: 14px;
  }

  .exp-slider--per-2 .exp-slider__name {
    order: -1;

    min-height: 32px;
    margin: 0 0 8px;
    line-height: 16px;
  }

  .exp-slider--per-2 .exp-slider__info > .exp-slider__row:last-child {
    margin-top: 6px;
  }

  .exp-slider--per-2 .exp-slider__badge:empty {
    display: none;
  }
}

.exp-slider__shipping {
  color: #12813f;
  font-family: var(--exp-slider-rc);
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
}

.exp-slider--per-2 .exp-slider__shipping {
  display: none;
}

.exp-slider__nav {
  position: absolute;
  top: calc(var(--exp-slider-media-h) / 2);
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

.exp-slider--fits .exp-slider__card--clone,
.exp-slider--fits .exp-slider__nav {
  display: none;
}

.exp-slider--fits .exp-slider__track {
  overflow-x: hidden;
  cursor: default;
}

@media (min-width: 768px) {
  .exp-slider {
    --exp-slider-per-view: 4;
    --exp-slider-media-h: calc((100vw - 64px - 3 * var(--exp-slider-gap)) / 4);

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

  .exp-slider__viewport:empty {
    min-height: calc(var(--exp-slider-media-h) + var(--exp-slider-info-h));
  }

  .exp-slider__shipping {
    display: none;
  }
}
`,U=12,W=`exp-slider--fits`,xe=300,Se=1e4,Ce=`/pages/glove-guide-quiz`,we=85,Te=e=>Number(e.replace(/[^\d.]/g,``))>=we,Ee=e=>t=>C(`a`,{class:`exp-slider__card`,href:t.href,onClick:()=>_(e,t.title,t.href),children:[S(`div`,{class:`exp-slider__media`,children:t.image.cloneNode(!0)}),C(`div`,{class:`exp-slider__info`,children:[C(`div`,{class:`exp-slider__row`,children:[S(`span`,{class:`exp-slider__badge`,children:t.badge}),t.stars?.cloneNode(!0)]}),S(`h4`,{class:`exp-slider__name`,children:t.title}),C(`div`,{class:`exp-slider__row`,children:[S(`span`,{class:`exp-slider__price`,children:t.price}),Te(t.price)&&S(`span`,{class:`exp-slider__shipping`,children:`Ships Free`})]})]})]}),De=e=>C(`div`,{class:`exp-slider__promo`,children:[C(`p`,{class:`exp-slider__promo-copy`,children:[S(`b`,{children:`Not sure?`}),` Find your perfect pair in 60 seconds.`]}),S(`a`,{class:`exp-slider__promo-cta`,href:Ce,onClick:()=>g(e,`Glove Finder`,`promo`),children:`Glove Finder`})]}),Oe=(e,t)=>new Promise(n=>{let r=()=>{try{let t=document.querySelector(e);return t?V(t,U,!0):[]}catch(e){return i(`${t}: unreadable carousel — ${String(e)}`,`error`),[]}},a,o=0,s=e=>{l.disconnect(),clearTimeout(a),clearTimeout(u),n(e)},c=()=>{let e=r();!e.length||e.length===o||(o=e.length,clearTimeout(a),a=setTimeout(()=>s(r()),xe))},l=new MutationObserver(c),u=setTimeout(()=>{let n=r();n.length||i(`${t}: no carousel matched "${e}" — the slider is hidden`,`error`),s(n)},Se);l.observe(document,{childList:!0,subtree:!0}),c()}),ke=e=>{f(be,`exp-slider-styles`);let{section:t,collection:n,modifier:r,perView:a,cta:o,gloveFinder:s,keepOrder:c,carousel:l}=e,u=()=>l?Oe(l,t):ve(n,U,c),d=S(`div`,{class:`exp-slider__viewport`}),p=C(`section`,{class:`exp-slider exp-slider--${r} exp-slider--per-${a}`,style:`--exp-slider-mobile-per-view: ${a}`,children:[S(`h2`,{class:`exp-slider__title`,children:t}),s&&De(t),o&&S(`a`,{class:`exp-slider__cta`,href:n,onClick:()=>g(t,o,`cta`),children:o}),d]});return H(p,async()=>{let e=await u().catch(e=>(i(`${t}: ${String(e)}`,`error`),[]));if(!e.length){p.style.display=`none`;return}let n=Ee(t),r=e=>{let t=n(e);return t.classList.add(`exp-slider__card--clone`),t},a=C(`div`,{class:`exp-slider__track`,children:[e.map(n),e.map(r),e.map(r)]}),{page:o,normalize:s}=ye(a,e.length);M(a);let c=a.children[0],l=a.children[e.length-1];d.append(a,S(`button`,{class:`exp-slider__nav exp-slider__nav--prev`,type:`button`,"aria-label":`Previous slide`,onClick:()=>{o(-1),g(t,`Previous slide`,`arrow`)}}),S(`button`,{class:`exp-slider__nav exp-slider__nav--next`,type:`button`,"aria-label":`Next slide`,onClick:()=>{o(1),g(t,`Next slide`,`arrow`)}})),new ResizeObserver(()=>{let e=l.getBoundingClientRect().right-c.getBoundingClientRect().left<=a.clientWidth+1;e!==p.classList.contains(W)&&(p.classList.toggle(W,e),e||s())}).observe(a)}),h(t,p),p};function G(e){let t=document.createElement(`div`);return t.innerHTML=e,t.firstElementChild}var K=`fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`,q=()=>G(`<svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path fill="#FFB400" d="M10 .54 12.34 7.77H19.92L13.79 12.23 16.13 19.46 10 14.99 3.87 19.46 6.21 12.23.08 7.77H7.66Z"/></svg>`),Ae=()=>G(`<svg viewBox="0 0 24 24" width="24" height="24" ${K} aria-hidden="true"><path d="M11.46 20.85A11 11 0 0 1 3.5 6a11 11 0 0 0 8.5-3 11 11 0 0 0 8.5 3 11 11 0 0 1-.09 7.06"/><path d="m15 19 2 2 4-4"/></svg>`),je=()=>G(`<svg viewBox="0 0 24 24" width="24" height="24" ${K} aria-hidden="true"><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 17H3v-4M2 5h11v12M9 17h6M13 6h5l3 5v6h-2M21 11h-8M3 9h4"/></svg>`),Me=()=>G(`<svg viewBox="0 0 24 24" width="24" height="24" ${K} aria-hidden="true"><path d="M20 11a8 8 0 0 0-15.5-2M4 5v4h4"/><path d="M4 13a8 8 0 0 0 15.5 2M20 19v-4h-4"/></svg>`),Ne=`.exp-reviews {
  --exp-reviews-cnd: HayabusaCnd, ui-sans-serif, system-ui, sans-serif;
  --exp-reviews-roboto: Roboto, ui-sans-serif, system-ui, sans-serif;

  width: 100%;
}

.exp-reviews__track {
  display: flex;
  gap: 12px;

  min-height: 175px;
  padding: 0 16px;
  overflow-x: auto;

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
  flex: 0 0 156px;
  flex-direction: column;
  min-width: 0;
  gap: 7px;
  margin: 0;
  padding: 15px;
  background: #f5f5f5;
  scroll-snap-align: start;
}

.exp-reviews__head {
  display: flex;
  flex-direction: column;
  gap: 7px;
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
  overflow: hidden;
  margin-top: auto;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000;
  font-family: var(--exp-reviews-roboto);
  font-size: 14px;
  line-height: 20px;
}

@media (min-width: 768px) {
  .exp-reviews__head {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
  }

  .exp-reviews__track {
    min-height: 106px;
    gap: 24px;
    padding: 0 32px;
    scroll-padding-left: 32px;
  }

  .exp-reviews__card {
    flex-basis: 401px;
  }

  .exp-reviews__quote {
    -webkit-line-clamp: 1;
  }
}
`,J=`Reviews`,Pe=`https://api.okendo.io/v1/stores/9320acc9-951d-4875-b33f-aec6d695d945/reviews?limit=40`,Fe=12,Y={min:20,max:110},Ie=new Intl.RelativeTimeFormat(`en`,{numeric:`auto`}),X=[[`year`,365*24*36e5],[`month`,720*36e5],[`day`,24*36e5],[`hour`,36e5],[`minute`,6e4]];function Le(e){let t=Date.now()-Date.parse(e),[n,r]=X.find(([,e])=>t>=e)??X[X.length-1];return Ie.format(-Math.floor(t/r),n)}var Re=e=>e.reviewer?.attributes?.find(e=>e.title===`Primary Discipline`)?.value??`Verified buyer`;async function ze(){let e=await fetch(Pe);if(!e.ok)throw Error(`Okendo responded ${e.status}`);let{reviews:t}=await e.json();return(t??[]).map(e=>({...e,body:(e.body??``).trim()})).filter(e=>e.rating===5&&e.reviewer?.displayName&&Number.isFinite(Date.parse(e.dateCreated))&&e.body.length>=Y.min&&e.body.length<=Y.max).slice(0,Fe)}var Be=e=>C(`figure`,{class:`exp-reviews__card`,children:[C(`div`,{class:`exp-reviews__head`,children:[S(`div`,{class:`exp-reviews__stars`,children:[q(),q(),q(),q(),q()]}),S(`time`,{class:`exp-reviews__date`,children:Le(e.dateCreated)})]}),C(`blockquote`,{class:`exp-reviews__quote`,children:[`“`,e.body,`”`]}),C(`figcaption`,{class:`exp-reviews__author`,children:[e.reviewer?.displayName,` · `,Re(e)]})]}),Ve=()=>{f(Ne,`exp-reviews-styles`);let e=S(`div`,{class:`exp-reviews__track`}),t=S(`section`,{class:`exp-reviews`,children:e});return H(t,async()=>{let n=await ze().catch(e=>(i(`${J}: ${String(e)}`,`error`),[]));if(!n.length){t.style.display=`none`;return}e.append(...n.map(Be)),M(e)}),h(J,t),t},He=`.exp-trust {
  --exp-trust-cnd: HayabusaCnd, ui-sans-serif, system-ui, sans-serif;
  --exp-trust-rc: 'Roboto Condensed', ui-sans-serif, system-ui, sans-serif;

  display: flex;
  flex-direction: column;
  gap: 44px;
  width: 100%;
  padding: 0 16px;
  color: #000;
  text-align: center;
}

.exp-trust__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.exp-trust__stars {
  display: flex;
  align-items: center;
  height: 24px;
}

.exp-trust__title {
  margin: 4px 0 0;
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
}
`,Ue=`Trust Bar`,We=[{icon:()=>S(`div`,{class:`exp-trust__stars`,children:[q(),q(),q(),q(),q()]}),title:`4.8 / 5`,note:`40,000+ verified reviews`},{icon:Ae,title:`Pro-grade durability`,note:`Trusted by champions`},{icon:je,title:`Free shipping $85+`,note:`US, Canada, and EU`},{icon:Me,title:`Easy returns`,note:`Hassle-free exchanges`}],Ge=()=>{f(He,`exp-trust-styles`);let e=S(`section`,{class:`exp-trust`,children:We.map(({icon:e,title:t,note:n})=>C(`div`,{class:`exp-trust__item`,children:[e(),S(`p`,{class:`exp-trust__title`,children:t}),S(`p`,{class:`exp-trust__note`,children:n})]}))});return h(Ue,e),e},Ke=`.page-transition > .flex.flex-col > :nth-child(1) {
  order: 1;
}

.page-transition > .flex.flex-col > :nth-child(2) {
  display: none;
}

.page-transition > .flex.flex-col > :nth-child(3) {
  order: 9;
}

.page-transition > .flex.flex-col > :nth-child(4) {
  display: none;
}

.page-transition > .flex.flex-col > :nth-child(5) {
  order: 11;
}

.page-transition > .flex.flex-col > :nth-child(6) {
  display: none;
}

.page-transition > .flex.flex-col > :nth-child(7) {
  order: 5;
}

.page-transition > .flex.flex-col > :nth-child(8) {
  display: none;
}

.page-transition > .flex.flex-col > :nth-child(9) {
  order: 13;
}

.page-transition > .flex.flex-col > :nth-child(10) {
  display: none;
}

.page-transition > .flex.flex-col > :nth-child(11) {
  display: none;
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

.page-transition > .flex.flex-col > * {
  margin-top: 32px;
  margin-bottom: 0;
}

.page-transition > .flex.flex-col > :nth-child(1) {
  margin-top: 0;
}

@media (min-width: 768px) {
  .page-transition > .flex.flex-col > * {
    margin-top: 44px;
  }
}

.page-transition > .flex.flex-col > :nth-child(3) .banner-button,
.page-transition > .flex.flex-col > :nth-child(5) .banner-button,
.page-transition > .flex.flex-col > :nth-child(7) .banner-button {
  padding-top: 9px !important;
  padding-bottom: 9px !important;
}

@media (min-width: 768px) {
  .page-transition > .flex.flex-col > :nth-child(3) .banner-button,
  .page-transition > .flex.flex-col > :nth-child(5) .banner-button,
  .page-transition > .flex.flex-col > :nth-child(7) .banner-button {
    padding-top: 11px !important;
    padding-bottom: 11px !important;
  }
}

.page-transition > .flex.flex-col > :nth-child(7) .banner-button {
  border: 1px solid #fff;
  background: none !important;
  color: #fff;
}

@media (min-width: 768px) {
  .page-transition > .flex.flex-col > :nth-child(7) {
    height: auto;
    aspect-ratio: 1440 / 436;
  }

  .page-transition > .flex.flex-col > :nth-child(7) > .hidden.md\\:flex {
    top: 50% !important;
    left: 160px !important;
    width: auto !important;
    height: auto !important;
    padding: 0 !important;
    transform: translateY(-50%);
  }

  .page-transition > .flex.flex-col > :nth-child(7) .w-fit {
    align-items: flex-start;
    text-align: left;
  }

  .page-transition > .flex.flex-col > :nth-child(7) .flex-wrap {
    justify-content: flex-start;
  }
}

@media (max-width: 767px) {
  .page-transition > .flex.flex-col > :nth-child(5) > [style*='--hero-h'] {
    aspect-ratio: 375 / 569;
  }
}

@media (min-width: 768px) {
  .page-transition > .flex.flex-col > :nth-child(3) > [style*='--hero-h'],
  .page-transition > .flex.flex-col > :nth-child(5) > [style*='--hero-h'] {
    height: auto;
    aspect-ratio: 1440 / 720;
  }

  .page-transition > .flex.flex-col > :nth-child(3) .banner-button {
    position: relative;
    isolation: isolate;
    overflow: hidden;
  }

  .page-transition > .flex.flex-col > :nth-child(3) .banner-button::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -16px;
    z-index: -1;
    width: calc(50% + 16px);
    background: rgb(255 255 255 / 48%);
    transform: skewX(12deg);
  }
}
`;function qe(e){let t=window;return t[e]?!1:(t[e]=!0,!0)}function Z(){return document.documentElement?Promise.resolve():new Promise(e=>{let t=()=>document.documentElement?e():setTimeout(t);t()})}t({name:`HP`,dev:`OS`}),n(`exp_hp`);var Q=`.page-transition > .flex.flex-col`,Je=`:scope > :not([data-exp])`,Ye=1e4,$=[`Back To The Grind`,`BACK TO THE GRIND - FEATURES`,`PRECISION FIT GIS`,`THREE ALL-NEW GIS`,`HAYABUSA WRESTLING`,``,`Boxing Shoes`,`SHOP BY COLLECTION`,``,`HAYABUSA BLOG`,``],Xe=[{section:`Boxing Gloves`,collection:`/collections/boxing-gloves`,modifier:`gloves`,perView:1,cta:`View All`,gloveFinder:!0},{section:`Best Sellers`,collection:`/collections/best-sellers`,modifier:`best-sellers`,perView:1,keepOrder:!0},{section:`Boxing Shoes`,collection:`/collections/boxing-shoes`,modifier:`boxing-shoes`,perView:2},{section:`Punching Bags`,collection:`/collections/punching-bags`,modifier:`punching-bags`,perView:2,keepOrder:!0},{section:`Wrestling`,collection:`/pages/hayabusa-wrestling`,modifier:`wrestling`,perView:2,carousel:`.page-transition > .flex.flex-col > :has(.collection-carousel a[href^="/products/hayabusa-wrestling-headgear"])`}];function Ze(e){$.forEach((t,n)=>{if(!t)return;let r=e[n]?.querySelector(`h2`)?.textContent?.trim();r!==t&&i(`Section ${n+1} drifted — expected "${t}", got "${r}"`,`error`)})}function Qe(){let e=e=>{let r=document.querySelector(Q),a=r?[...r.querySelectorAll(Je)]:[];!e&&a.length<$.length||(t.disconnect(),clearTimeout(n),r?Ze(a):i(`No section root matched "${Q}"`,`error`))},t=new MutationObserver(()=>e(!1)),n=setTimeout(()=>e(!0),Ye);t.observe(document,{childList:!0,subtree:!0}),e(!1)}async function $e(){await Z(),f(Ke,`exp-hp-styles`),Qe();let e=()=>document.querySelector(Q);d(ae(),e),d(R(),e),d(Ge(),e),d(Ve(),e);for(let t of Xe)d(ke(t),e);oe(),le()}window.top===window.self&&qe(`__exp_hp`)&&o($e)})();
