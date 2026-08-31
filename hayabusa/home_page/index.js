(function(){var e=(e,t,n,r=``)=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r}),i(`Event: ${e} | ${t} | ${n} | ${r}`,`success`)},t=({name:e,dev:t})=>{console.log(`%c EXP: ${e} (DEV: ${t})`,`background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`)},n=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},r=(t,n,r,a,o=1e3,s=.5)=>{let c,l;if(c=new IntersectionObserver(function(t){t[0].isIntersecting===!0?l=setTimeout(()=>{e(n,t[0].target.dataset.visible||a||``,`view`,r),c.disconnect()},o):(i(`Element is not fully visible`,`warn`),clearTimeout(l))},{threshold:[s]}),typeof t==`string`){let e=document.querySelector(t);e&&c.observe(e)}else c.observe(t)},i=(e,t=`info`)=>{let n;switch(t){case`info`:n=`color: #3498db;`;break;case`warn`:n=`color: #f39c12;`;break;case`error`:n=`color: #e74c3c;`;break;case`success`:n=`color: #2ecc71;`;break}console.log(`%c>>> ${e}`,`${n} font-size: 16px; font-weight: 600`)},a=()=>location.pathname===`/`;function o(e){if(a()){e();return}let t=new MutationObserver(()=>{a()&&(t.disconnect(),e())});t.observe(document,{childList:!0,subtree:!0})}var s=[],c;function l(e,t,n){if(t.some(t=>t.parentNode!==e))return!0;let r=[...e.childNodes],i=t.map(e=>r.indexOf(e)),a=r.map((e,t)=>t).filter(e=>i.indexOf(e)===-1);return n?Math.max(...i)>Math.min(...a):Math.min(...i)<Math.max(...a)}function u(){if(!a()){for(let{node:e}of s)e.remove();return}let e=new Map;for(let{node:t,into:n,place:r}of s){let i=n();if(!i)continue;if(r===`anywhere`){t.parentNode!==i&&i.append(t);continue}let a=e.get(i);a||e.set(i,a={first:[],last:[]}),a[r].push(t)}for(let[t,{first:n,last:r}]of e)n.length&&l(t,n,!0)&&t.prepend(...n),r.length&&l(t,r,!1)&&t.append(...r)}function d(e,t,n=`last`){e instanceof Element&&e.setAttribute(`data-exp`,``),s.push({node:e,into:t,place:n}),c||(c=new MutationObserver(u),c.observe(document,{childList:!0,subtree:!0})),u()}function f(e,t){if(document.querySelector(`.${t}`))return;let n=document.createElement(`style`);n.className=t,n.textContent=e,d(n,()=>document.head||document.documentElement,`anywhere`)}var p=`exp_hp`,m={"Friends And Family":`ff`},h=e=>m[e]??e.toLowerCase().replace(/[^a-z0-9]+/g,`_`);function g(e,t){r(t,`${p}_${h(e)}_view`,e,`Visibility`)}function _(t,n,r){e([p,h(t),r&&h(r),`click`].filter(Boolean).join(`_`),n,`click`,t)}function ee(e,t,n,r,a){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r,event_loc2:a}),i(`Event: ${e} | ${t} | ${n} | ${r} | ${a}`,`success`)}function v(e,t,n){ee(`${p}_${h(e)}_click`,t,`click`,e,new URL(n,location.origin).pathname)}var te=1e3,y=.5,b=new Set,x=new Map;function ne(t,n){let r=`${p}_${h(t)}_view`;if(b.has(r))return;x.get(r)?.();let i,a=new IntersectionObserver(n=>{if(!n[0].isIntersecting){clearTimeout(i);return}i=setTimeout(()=>{o(),!b.has(r)&&(b.add(r),e(r,`Visibility`,`view`,t))},te)},{threshold:[y]}),o=()=>{a.disconnect(),clearTimeout(i),x.get(r)===o&&x.delete(r)};a.observe(n),x.set(r,o)}var S=`.exp-bags-banner {
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
`;function C(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)C(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function w(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...i}=t??{},a=document.createElement(e);for(let[e,t]of Object.entries(i))e.startsWith(`on`)&&typeof t==`function`?a.addEventListener(e.slice(2).toLowerCase(),t):t===!0?a.setAttribute(e,``):t!==!1&&t!=null&&a.setAttribute(e,String(t));return C(a,r),a}var T=w,E=`Punching Bags Banner`,re=`/collections/quick-swap-punching-bags`,D=`https://cdn.sanity.io/images/6tpq25k0/production/e2d1c6dc08cbf6e3aab18f4d384d974ac83a9beb-10120x4217.png/freestandingbag_lifestyle_bv6a2446_rev1a_dec1_2025_12-5-ratio.png`,O=`https://cdn.sanity.io/images/6tpq25k0/production/e2d1c6dc08cbf6e3aab18f4d384d974ac83a9beb-10120x4217.png/freestandingbag_lifestyle_bv6a2446_rev1a_dec1_2025_12-5-ratio.png?rect=2530,0,5060,4217`,k=(e,t)=>`${e}${e.includes(`?`)?`&`:`?`}w=${t}&q=80&auto=format`,ie=()=>{f(S,`exp-bags-banner-styles`);let e=T(`section`,{class:`exp-bags-banner`,children:[T(`picture`,{children:[w(`source`,{media:`(min-width: 768px)`,srcset:`${k(D,1440)} 1440w, ${k(D,2400)} 2400w`,sizes:`100vw`}),w(`img`,{class:`exp-bags-banner__image`,src:k(O,800),srcset:`${k(O,480)} 480w, ${k(O,800)} 800w, ${k(O,1200)} 1200w`,sizes:`100vw`,alt:``,loading:`lazy`,decoding:`async`})]}),T(`div`,{class:`exp-bags-banner__copy`,children:[w(`h2`,{class:`exp-bags-banner__title`,children:`Punching Bags`}),w(`p`,{class:`exp-bags-banner__subtitle`,children:`The Quick Swap system — change bags in seconds. Find the right weight for your setup.`}),w(`a`,{class:`exp-bags-banner__cta`,href:re,onClick:()=>_(E,`Shop Bags`,`cta`),children:`Shop Bags`})]})]});return g(E,e),e},ae=`.exp-disciplines {
  --exp-disciplines-cnd: HayabusaCnd, ui-sans-serif, system-ui, sans-serif;

  width: 100%;
  padding: 0 16px;
}

.exp-disciplines__title {
  margin: 0 0 16px;
  color: #000;
  font-family: var(--exp-disciplines-cnd);
  font-size: 32px;
  font-weight: 800;
  line-height: 40px;
  text-transform: uppercase;
}

.exp-disciplines__row {
  display: flex;
  gap: 12px;
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
  flex: 0 0 140px;
  flex-direction: column;
  background: #000;
  scroll-snap-align: start;
  text-decoration: none;
}

.exp-disciplines__image {
  width: 100%;
  aspect-ratio: 218 / 172;
  object-fit: cover;
}

.exp-disciplines__label {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  color: #fff;
  font-family: var(--exp-disciplines-cnd);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .exp-disciplines {
    padding: 0 32px;
  }

  .exp-disciplines__title {
    margin-bottom: 24px;
  }

  .exp-disciplines__row {
    margin: 0;
    padding: 0;
    overflow: visible;
  }

  .exp-disciplines__tile {
    flex: 1 1 0;
    min-width: 0;
  }
}
`,A=`Shop By Discipline`,oe=[{title:`Boxing`,href:`/collections/boxing`,image:`https://cdn.sanity.io/images/6tpq25k0/production/bea8b8c51f137bdc99b9c2fa5f5df8f167063c88-1080x1080.jpg/kanpeki_lifestyle_social3_1080x1080.jpg`},{title:`Jiu-Jitsu`,href:`/collections/jiu-jitsu`,image:`https://cdn.sanity.io/images/6tpq25k0/production/c69ec979e8701a4eef7e919d78499ae4a9ae9f58-8192x5464.jpg/core_lifestyle_bv6a6156_rev1a_aug31_2025-copy.jpg`},{title:`Muay Thai`,href:`/collections/muay-thai`,image:`https://cdn.sanity.io/images/6tpq25k0/production/3113d472dc598eaf8b35ac392e8b83cc34159058-6000x4000.png/muaythai_hendo_dsc01809_rev1a_april12_2022_high-res.png?rect=0,0,6000,3445`},{title:`MMA`,href:`/collections/mma-discipline`,image:`https://cdn.sanity.io/images/6tpq25k0/production/5ba35ed9b3bae11f2aa94a113176f78879f290a1-8192x5464.jpg/tristar_lifestyle_bv6a0283_rev1a_jan29_2026.jpg`},{title:`Kickboxing`,href:`/collections/kickboxing`,image:`https://cdn.sanity.io/images/6tpq25k0/production/24dffb25541f890676c3c85510f2666dfb0f2bce-6720x4480.png/hayabusa-bazooka-shorts-162.png?rect=24,454,4520,2818`},{title:`Wrestling`,href:`/collections/wrestling`,image:`https://cdn.sanity.io/images/6tpq25k0/production/f22972f04b0438a5885e64e0a578a85c5921a5d6-15360x8640.png/wrestlinglifestyle_683a3001_rev1a_july2_2026_hero.png`}],j=(e,t)=>`${e}${e.includes(`?`)?`&`:`?`}w=${t}&q=80&auto=format`,se=()=>{f(ae,`exp-disciplines-styles`);let e=T(`section`,{class:`exp-disciplines`,children:[w(`h2`,{class:`exp-disciplines__title`,children:`Shop By Discipline`}),w(`div`,{class:`exp-disciplines__row`,children:oe.map(({title:e,href:t,image:n})=>T(`a`,{class:`exp-disciplines__tile`,href:t,onClick:()=>v(A,e,t),children:[w(`img`,{class:`exp-disciplines__image`,src:j(n,480),srcset:`${j(n,320)} 320w, ${j(n,480)} 480w, ${j(n,720)} 720w`,sizes:`(min-width: 768px) 16vw, 140px`,alt:``,loading:`lazy`,decoding:`async`}),w(`span`,{class:`exp-disciplines__label`,children:e})]}))})]});return g(A,e),e};function ce(e,t){let n=new WeakSet,r=()=>{if(!a())return;let r=document.querySelector(e);!r||n.has(r)||(n.add(r),t(r))};new MutationObserver(r).observe(document,{childList:!0,subtree:!0}),r()}var le=`@media (max-width: 767px) {
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

@media (min-width: 768px) {
  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width > a > div:last-child {
    align-items: center;
    padding: 0 20px 25%;
  }

  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width h4 {
    margin-bottom: 0;
    font-size: clamp(20px, 2.08vw, 30px);
    line-height: 1.2;
  }
}
`,M=`Shop By Gender`,ue=`.page-transition > .flex.flex-col > .module-row:has(a[href="/collections/kids"])`,de=()=>{f(le,`exp-gender-styles`),ce(ue,e=>{ne(M,e),e.addEventListener(`click`,e=>{let t=e.target.closest(`a`);t&&_(M,t.querySelector(`h4 span`)?.textContent?.trim()??`Tile`)})})},fe=e=>`.page-transition > .flex.flex-col > :not([data-exp]):has(.banner-button[href="${e}"])`,pe=[{href:`/pages/hayabusa-wrestling`,subtitle:`Shoes, singlets, and gear. Everything you need to perform at your peak.`,cta:`Shop Wrestling`},{href:`/collections/boxing-shoes`,cta:`Shop Shoes`}],me=()=>{let e=()=>{if(a())for(let{href:e,subtitle:t,cta:n}of pe)for(let r of document.querySelectorAll(`${fe(e)} .w-fit`)){let e=r.querySelector(`p`);t&&e&&e.textContent!==t&&(e.textContent=t);let i=r.querySelector(`.banner-button`);n&&i&&i.textContent!==n&&(i.textContent=n)}},t=0;new MutationObserver(()=>{cancelAnimationFrame(t),t=requestAnimationFrame(e)}).observe(document,{childList:!0,subtree:!0,characterData:!0}),e()},he=5,ge=150,_e=600,ve=.4;function N(e){let t=0,n=!1,r=!1,i=!1,a=0,o=0,s=0,c=0,l=0,u,d=()=>{let t=e.getBoundingClientRect().left-e.scrollLeft,n=parseFloat(getComputedStyle(e).scrollPaddingInlineStart)||0;return[...e.children].map(e=>e.getBoundingClientRect().left-t-n)},f=(e,t)=>e.reduce((n,r,i)=>Math.abs(r-t)<Math.abs(e[n]-t)?i:n,0),p=()=>{e.hasPointerCapture(t)&&e.releasePointerCapture(t),e.style.userSelect=``,e.style.cursor=``,r=!1};e.addEventListener(`pointerdown`,u=>{i=!1,r&&(p(),e.style.scrollSnapType=``),n=!1,!(u.pointerType===`touch`||u.button!==0)&&(e.scrollWidth<=e.clientWidth||(t=u.pointerId,n=!0,a=s=u.clientX,o=e.scrollLeft,c=u.timeStamp,l=0))}),e.addEventListener(`pointermove`,i=>{if(!n||i.pointerId!==t)return;let d=i.clientX-a,f=i.timeStamp-c;if(f&&(l+=((i.clientX-s)/f-l)*ve),s=i.clientX,c=i.timeStamp,!r){if(Math.abs(d)<=he)return;r=!0,clearTimeout(u),e.setPointerCapture(t),e.style.scrollSnapType=`none`,e.style.userSelect=`none`,e.style.cursor=`grabbing`}e.scrollLeft=o-d});let m=a=>{if(!n||a.pointerId!==t||(n=!1,!r))return;p(),i=!0;let o=d(),s=f(o,e.scrollLeft-l*ge);e.scrollTo({left:o[s],behavior:`smooth`}),u=setTimeout(()=>{e.style.scrollSnapType=``},_e)};e.addEventListener(`pointerup`,m),e.addEventListener(`pointercancel`,m),e.addEventListener(`dragstart`,e=>e.preventDefault()),e.addEventListener(`click`,e=>{i&&(i=!1,e.preventDefault(),e.stopPropagation())},!0)}var P=`.exp-jiu-jitsu {
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
`,F=`Jiu-Jitsu`,ye=[{title:`Men's Gis`,href:`/collections/jiu-jitsu-gis`,image:`https://cdn.sanity.io/images/6tpq25k0/production/8d7aef27c5282eb0b8fec983a5ad9d1bd0130166-2160x2160.jpg/coregi_shopify_men_black_02.jpg`,crop:`rect=507,0,1146,1532`},{title:`Women's Gis`,href:`/collections/womens-bjj-gis`,image:`https://cdn.sanity.io/images/6tpq25k0/production/c225c3119ab334c087bfd95eb0fc7d48af45ab6b-2160x2160.jpg/coregi_shopify_women_blue_02.jpg`,crop:`rect=507,0,1146,1532`},{title:`Men's No-Gi`,href:`/collections/no-gi-apparel`,image:`https://cdn.sanity.io/images/6tpq25k0/production/e1f8b31bbe8838721c4b32abda3f234c12a5ef7e-1080x1080.png/fusion_blue_fr.png`},{title:`Women's No-Gi`,href:`/collections/womens-no-gi-apparel`,image:`https://cdn.sanity.io/images/6tpq25k0/production/ed40188656c9efc30deef9527b073ee135ca03ee-2160x2160.png/apex_womens_ss_blue_mainimg_fr.png`}],I=(e,t,n=``)=>`${e}?${n&&`${n}&`}w=${t}&q=80&auto=format`,L=(e,t)=>[480,640,960].map(n=>`${I(e,n,t)} ${n}w`).join(`, `),be=e=>t=>{let[n,r]=e.children,i=r.getBoundingClientRect().left-n.getBoundingClientRect().left;e.scrollBy({left:t*i,behavior:`smooth`})},xe=()=>{f(P,`exp-jiu-jitsu-styles`);let e=w(`div`,{class:`exp-jiu-jitsu__row`,children:ye.map(({title:e,href:t,image:n,crop:r})=>T(`a`,{class:`exp-jiu-jitsu__tile`,href:t,onClick:()=>v(F,e,t),children:[T(`picture`,{class:`exp-jiu-jitsu__picture`,children:[r&&w(`source`,{media:`(min-width: 768px)`,srcset:L(n,r),sizes:`24vw`}),w(`img`,{class:`exp-jiu-jitsu__image`,src:I(n,640),srcset:L(n),sizes:`(min-width: 768px) 24vw, 100vw`,alt:``,loading:`lazy`,decoding:`async`})]}),T(`span`,{class:`exp-jiu-jitsu__label`,children:[e,` >`]})]}))}),t=be(e);N(e);let n=T(`section`,{class:`exp-jiu-jitsu`,children:[w(`h2`,{class:`exp-jiu-jitsu__title`,children:`Jiu-Jitsu`}),T(`div`,{class:`exp-jiu-jitsu__viewport`,children:[e,w(`button`,{class:`exp-jiu-jitsu__nav exp-jiu-jitsu__nav--prev`,type:`button`,"aria-label":`Previous slide`,onClick:()=>{t(-1),_(F,`Previous slide`,`arrow`)}}),w(`button`,{class:`exp-jiu-jitsu__nav exp-jiu-jitsu__nav--next`,type:`button`,"aria-label":`Next slide`,onClick:()=>{t(1),_(F,`Next slide`,`arrow`)}})]})]});return g(F,n),n},R=`.product-card-hover-shadow`,z=e=>e?.textContent?.trim()??``,Se=/^\$[\d,.]+(?:\s*[-–—]\s*\$[\d,.]+)?$/,B=e=>Number(e.replace(/[^\d.]/g,``));function Ce(e){return[...e.querySelectorAll(`span`)].filter(e=>!e.children.length&&Se.test(z(e))).reduce((e,t)=>e.concat(z(t).match(/\$[\d,.]+/g)??[]),[]).sort((e,t)=>B(e)-B(t))[0]??``}var we=e=>Number(z(e?.querySelector(`.okendo-summary-count`)??null).replace(/\D/g,``))||0;function V(e,t,n=!1){let r=[...e.querySelectorAll(R)].map(e=>{let t=e.querySelector(`a[href]`),n=e.querySelector(`img`);if(!t||!n)return null;let r=e.querySelector(`.okendo-summary-inline`);return{href:t.getAttribute(`href`)??``,title:z(e.querySelector(`h4`)),price:Ce(e),badge:z(e.querySelector(`span.uppercase.font-serif`)),image:document.importNode(n,!0),stars:r&&document.importNode(r,!0),reviews:we(r)}}).filter(e=>e!==null).slice(0,t);return n||r.sort((e,t)=>t.reviews-e.reviews),r}async function Te(e,t,n=!1){let r=await fetch(e);if(!r.ok)throw Error(`${e} responded ${r.status}`);return V(new DOMParser().parseFromString(await r.text(),`text/html`),t,n)}function Ee(e,t){let n=()=>{let[t,n]=e.children;return!t||!n?0:Math.max(0,n.getBoundingClientRect().left-t.getBoundingClientRect().left)},r=()=>{let r=n()*t;if(!r)return;let i=r+((e.scrollLeft-r)%r+r)%r;Math.abs(i-e.scrollLeft)>1&&(e.scrollLeft=i)},i;return e.addEventListener(`scroll`,()=>{clearTimeout(i),i=setTimeout(r,120)}),requestAnimationFrame(r),{page:t=>{r();let i=n();if(!i)return;let a=i*Math.max(1,Math.round(e.clientWidth/i));e.scrollBy({left:t*a,behavior:`smooth`})},normalize:r}}function H(e,t){let n=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(n.disconnect(),t())},{rootMargin:`100% 0px`});n.observe(e)}var De=`.exp-slider {
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

.exp-slider--best-sellers .exp-slider__badge {
  display: none;
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
`,U=20,W=`exp-slider--fits`,Oe=300,ke=1e4,Ae=`/pages/glove-guide-quiz`,je=85,Me=e=>Number(e.replace(/[^\d.]/g,``))>=je,Ne=e=>t=>T(`a`,{class:`exp-slider__card`,href:t.href,onClick:()=>v(e,t.title,t.href),children:[w(`div`,{class:`exp-slider__media`,children:t.image.cloneNode(!0)}),T(`div`,{class:`exp-slider__info`,children:[T(`div`,{class:`exp-slider__row`,children:[w(`span`,{class:`exp-slider__badge`,children:t.badge}),t.stars?.cloneNode(!0)]}),w(`h4`,{class:`exp-slider__name`,children:t.title}),T(`div`,{class:`exp-slider__row`,children:[w(`span`,{class:`exp-slider__price`,children:t.price}),Me(t.price)&&w(`span`,{class:`exp-slider__shipping`,children:`Ships Free`})]})]})]}),G=e=>T(`div`,{class:`exp-slider__promo`,children:[T(`p`,{class:`exp-slider__promo-copy`,children:[w(`b`,{children:`Not sure?`}),` Find your perfect pair in 60 seconds.`]}),w(`a`,{class:`exp-slider__promo-cta`,href:Ae,onClick:()=>_(e,`Glove Finder`,`promo`),children:`Glove Finder`})]}),Pe=(e,t)=>new Promise(n=>{let r=()=>{try{let t=document.querySelector(e);return t?V(t,U,!0):[]}catch(e){return i(`${t}: unreadable carousel — ${String(e)}`,`error`),[]}},a,o=0,s=[],c=e=>{d.disconnect(),clearTimeout(a),clearTimeout(f),n(e)},l=e=>e.length?e:s,u=()=>{let t=document.querySelector(e),n=t?t.querySelectorAll(R).length:0;if(!n||n===o)return;o=n;let i=r();i.length&&(s=i,clearTimeout(a),a=setTimeout(()=>c(l(r())),Oe))},d=new MutationObserver(u),f=setTimeout(()=>{let n=l(r());n.length||i(`${t}: no carousel matched "${e}" — the slider is hidden`,`error`),c(n)},ke);d.observe(document,{childList:!0,subtree:!0}),u()}),Fe=e=>{f(De,`exp-slider-styles`);let{section:t,title:n,collection:r,modifier:a,perView:o,cta:s,gloveFinder:c,keepOrder:l,carousel:u,swapFirstAndThird:d}=e,p=()=>u?Pe(u,t):Te(r,U,l),m=w(`div`,{class:`exp-slider__viewport`}),h=T(`section`,{class:`exp-slider exp-slider--${a} exp-slider--per-${o}`,style:`--exp-slider-mobile-per-view: ${o}`,children:[w(`h2`,{class:`exp-slider__title`,children:n??t}),c&&G(t),s&&w(`a`,{class:`exp-slider__cta`,href:r,onClick:()=>_(t,s,`cta`),children:s}),m]});return H(h,async()=>{let e=await p().catch(e=>(i(`${t}: ${String(e)}`,`error`),[]));if(!e.length){h.style.display=`none`;return}d&&([e[0],e[2]]=[e[2],e[0]]);let n=Ne(t),r=e=>{let t=n(e);return t.classList.add(`exp-slider__card--clone`),t},a=T(`div`,{class:`exp-slider__track`,children:[e.map(n),e.map(r),e.map(r)]}),{page:o,normalize:s}=Ee(a,e.length);N(a);let c=a.children[0],l=a.children[e.length-1];m.append(a,w(`button`,{class:`exp-slider__nav exp-slider__nav--prev`,type:`button`,"aria-label":`Previous slide`,onClick:()=>{o(-1),_(t,`Previous slide`,`arrow`)}}),w(`button`,{class:`exp-slider__nav exp-slider__nav--next`,type:`button`,"aria-label":`Next slide`,onClick:()=>{o(1),_(t,`Next slide`,`arrow`)}})),new ResizeObserver(()=>{let e=l.getBoundingClientRect().right-c.getBoundingClientRect().left<=a.clientWidth+1;e!==h.classList.contains(W)&&(h.classList.toggle(W,e),e||s())}).observe(a)}),g(t,h),h};function K(e){let t=document.createElement(`div`);return t.innerHTML=e,t.firstElementChild}var q=`fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`,J=()=>K(`<svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path fill="#FFB400" d="M10 .54 12.34 7.77H19.92L13.79 12.23 16.13 19.46 10 14.99 3.87 19.46 6.21 12.23.08 7.77H7.66Z"/></svg>`),Ie=()=>K(`<svg viewBox="0 0 24 24" width="24" height="24" ${q} aria-hidden="true"><path d="M11.46 20.85A11 11 0 0 1 3.5 6a11 11 0 0 0 8.5-3 11 11 0 0 0 8.5 3 11 11 0 0 1-.09 7.06"/><path d="m15 19 2 2 4-4"/></svg>`),Le=()=>K(`<svg viewBox="0 0 24 24" width="24" height="24" ${q} aria-hidden="true"><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 17H3v-4M2 5h11v12M9 17h6M13 6h5l3 5v6h-2M21 11h-8M3 9h4"/></svg>`),Re=()=>K(`<svg viewBox="0 0 24 24" width="24" height="24" ${q} aria-hidden="true"><path d="M20 11a8 8 0 0 0-15.5-2M4 5v4h4"/><path d="M4 13a8 8 0 0 0 15.5 2M20 19v-4h-4"/></svg>`),ze=`.exp-reviews {
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
`,Y=`Reviews`,Be=`https://api.okendo.io/v1/stores/9320acc9-951d-4875-b33f-aec6d695d945/reviews?limit=40`,Ve=12,X={min:20,max:110},He=new Intl.RelativeTimeFormat(`en`,{numeric:`auto`}),Z=[[`year`,365*24*36e5],[`month`,720*36e5],[`day`,24*36e5],[`hour`,36e5],[`minute`,6e4]];function Ue(e){let t=Date.now()-Date.parse(e),[n,r]=Z.find(([,e])=>t>=e)??Z[Z.length-1];return He.format(-Math.floor(t/r),n)}var We=e=>e.reviewer?.attributes?.find(e=>e.title===`Primary Discipline`)?.value??`Verified buyer`;async function Ge(){let e=await fetch(Be);if(!e.ok)throw Error(`Okendo responded ${e.status}`);let{reviews:t}=await e.json();return(t??[]).map(e=>({...e,body:(e.body??``).trim()})).filter(e=>e.rating===5&&e.reviewer?.displayName&&Number.isFinite(Date.parse(e.dateCreated))&&e.body.length>=X.min&&e.body.length<=X.max).slice(0,Ve)}var Ke=e=>T(`figure`,{class:`exp-reviews__card`,children:[T(`div`,{class:`exp-reviews__head`,children:[w(`div`,{class:`exp-reviews__stars`,children:[J(),J(),J(),J(),J()]}),w(`time`,{class:`exp-reviews__date`,children:Ue(e.dateCreated)})]}),T(`blockquote`,{class:`exp-reviews__quote`,children:[`“`,e.body,`”`]}),T(`figcaption`,{class:`exp-reviews__author`,children:[e.reviewer?.displayName,` · `,We(e)]})]}),qe=()=>{f(ze,`exp-reviews-styles`);let e=w(`div`,{class:`exp-reviews__track`}),t=w(`section`,{class:`exp-reviews`,children:e});return H(t,async()=>{let n=await Ge().catch(e=>(i(`${Y}: ${String(e)}`,`error`),[]));if(!n.length){t.style.display=`none`;return}e.append(...n.map(Ke)),N(e)}),g(Y,t),t},Je=`.exp-trust {
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
`,Ye=`Trust Bar`,Xe=[{icon:()=>w(`div`,{class:`exp-trust__stars`,children:[J(),J(),J(),J(),J()]}),title:`4.8 / 5`,note:`40,000+ verified reviews`},{icon:Ie,title:`Pro-grade durability`,note:`Trusted by champions`},{icon:Le,title:`Free shipping $85+`,note:`US, Canada, and EU`},{icon:Re,title:`Easy returns`,note:`Hassle-free exchanges`}],Ze=()=>{f(Je,`exp-trust-styles`);let e=w(`section`,{class:`exp-trust`,children:Xe.map(({icon:e,title:t,note:n})=>T(`div`,{class:`exp-trust__item`,children:[e(),w(`p`,{class:`exp-trust__title`,children:t}),w(`p`,{class:`exp-trust__note`,children:n})]}))});return g(Ye,e),e},Qe=`.page-transition > .flex.flex-col > :not([data-exp]):nth-child(1) {
  order: 1;
}

.page-transition > .flex.flex-col > :not([data-exp]):nth-child(2) {
  display: none;
}

.page-transition > .flex.flex-col > :not([data-exp]):nth-child(3) {
  order: 9;
}

.page-transition > .flex.flex-col > :not([data-exp]):nth-child(4) {
  display: none;
}

.page-transition > .flex.flex-col > :not([data-exp]):nth-child(5) {
  order: 11;
}

.page-transition > .flex.flex-col > :not([data-exp]):nth-child(6) {
  display: none;
}

.page-transition > .flex.flex-col > :not([data-exp]):nth-child(7) {
  order: 5;
}

.page-transition > .flex.flex-col > :not([data-exp]):nth-child(8) {
  display: none;
}

.page-transition > .flex.flex-col > :not([data-exp]):nth-child(9) {
  order: 13;
}

.page-transition > .flex.flex-col > :not([data-exp]):nth-child(10) {
  display: none;
}

.page-transition > .flex.flex-col > :not([data-exp]):nth-child(11) {
  display: none;
}

.exp-slider--best-sellers {
  order: 2;
}

.exp-disciplines {
  order: 3;
}

.exp-slider--gloves {
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

.page-transition > .flex.flex-col > :not([data-exp]):nth-child(1) {
  margin-top: 0;
}

@media (min-width: 768px) {
  .page-transition > .flex.flex-col > * {
    margin-top: 44px;
  }
}

.page-transition > .flex.flex-col > .exp-slider--best-sellers {
  margin-top: 40px;
}

.page-transition > .flex.flex-col > .exp-disciplines,
.page-transition > .flex.flex-col > .exp-slider--gloves {
  margin-top: 72px;
}

@media (min-width: 768px) {
  .page-transition > .flex.flex-col > .exp-slider--best-sellers {
    margin-top: 36px;
  }

  .page-transition > .flex.flex-col > .exp-disciplines,
  .page-transition > .flex.flex-col > .exp-slider--gloves {
    margin-top: 68px;
  }
}

.page-transition > .flex.flex-col > :not([data-exp]):nth-child(3) .banner-button,
.page-transition > .flex.flex-col > :not([data-exp]):nth-child(5) .banner-button,
.page-transition > .flex.flex-col > :not([data-exp]):nth-child(7) .banner-button {
  padding-top: 9px !important;
  padding-bottom: 9px !important;
}

@media (min-width: 768px) {
  .page-transition > .flex.flex-col > :not([data-exp]):nth-child(3) .banner-button,
  .page-transition > .flex.flex-col > :not([data-exp]):nth-child(5) .banner-button,
  .page-transition > .flex.flex-col > :not([data-exp]):nth-child(7) .banner-button {
    padding-top: 11px !important;
    padding-bottom: 11px !important;
  }
}

.page-transition > .flex.flex-col > :not([data-exp]):nth-child(7) .banner-button {
  border: 1px solid #fff;
  background: none !important;
  color: #fff;
}

@media (min-width: 768px) {
  .page-transition > .flex.flex-col > :not([data-exp]):nth-child(7) {
    height: auto;
    aspect-ratio: 1440 / 436;
  }

  .page-transition > .flex.flex-col > :not([data-exp]):nth-child(7) > .hidden.md\\:flex {
    top: 50% !important;
    left: 160px !important;
    width: auto !important;
    height: auto !important;
    padding: 0 !important;
    transform: translateY(-50%);
  }

  .page-transition > .flex.flex-col > :not([data-exp]):nth-child(7) .w-fit {
    align-items: flex-start;
    text-align: left;
  }

  .page-transition > .flex.flex-col > :not([data-exp]):nth-child(7) .flex-wrap {
    justify-content: flex-start;
  }
}

@media (max-width: 767px) {
  .page-transition > .flex.flex-col > :not([data-exp]):nth-child(5) > [style*='--hero-h'] {
    aspect-ratio: 375 / 569;
  }
}

@media (min-width: 768px) {
  .page-transition > .flex.flex-col > :not([data-exp]):nth-child(3) > [style*='--hero-h'],
  .page-transition > .flex.flex-col > :not([data-exp]):nth-child(5) > [style*='--hero-h'] {
    height: auto;
    aspect-ratio: 1440 / 720;
  }

  .page-transition > .flex.flex-col > :not([data-exp]):nth-child(3) .banner-button {
    position: relative;
    isolation: isolate;
    overflow: hidden;
  }

  .page-transition > .flex.flex-col > :not([data-exp]):nth-child(3) .banner-button::before {
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
`;function $e(e){let t=window;return t[e]?!1:(t[e]=!0,!0)}function et(){return document.documentElement?Promise.resolve():new Promise(e=>{let t=()=>document.documentElement?e():setTimeout(t);t()})}t({name:`HP`,dev:`OS`}),n(`exp_hp`);var Q=`.page-transition > .flex.flex-col`,tt=`:scope > :not([data-exp])`,nt=1e4,$=[`Back To The Grind`,`BACK TO THE GRIND - FEATURES`,`PRECISION FIT GIS`,`THREE ALL-NEW GIS`,`HAYABUSA WRESTLING`,``,`Boxing Shoes`,`SHOP BY COLLECTION`,``,`HAYABUSA BLOG`,``],rt=[{section:`Boxing Gloves`,collection:`/collections/boxing-gloves`,modifier:`gloves`,perView:1,cta:`View All`,gloveFinder:!0},{section:`Friends And Family`,title:`Best sellers`,collection:`/collections/best-sellers`,modifier:`best-sellers`,perView:1,keepOrder:!0,swapFirstAndThird:!0},{section:`Boxing Shoes`,collection:`/collections/boxing-shoes`,modifier:`boxing-shoes`,perView:2},{section:`Punching Bags`,collection:`/collections/punching-bags`,modifier:`punching-bags`,perView:2,keepOrder:!0},{section:`Wrestling`,collection:`/pages/hayabusa-wrestling`,modifier:`wrestling`,perView:2,carousel:`.page-transition > .flex.flex-col > :has(.collection-carousel a[href^="/products/hayabusa-wrestling-headgear"])`}];function it(e){$.forEach((t,n)=>{if(!t)return;let r=e[n]?.querySelector(`h2`)?.textContent?.trim();r!==t&&i(`Section ${n+1} drifted — expected "${t}", got "${r}"`,`error`)})}function at(){let e=e=>{let r=document.querySelector(Q),a=r?[...r.querySelectorAll(tt)]:[];!e&&a.length<$.length||(t.disconnect(),clearTimeout(n),r?it(a):i(`No section root matched "${Q}"`,`error`))},t=new MutationObserver(()=>e(!1)),n=setTimeout(()=>e(!0),nt);t.observe(document,{childList:!0,subtree:!0}),e(!1)}async function ot(){await et(),f(Qe,`exp-hp-styles`),at();let e=()=>document.querySelector(Q);d(se(),e),d(ie(),e),d(xe(),e),d(Ze(),e),d(qe(),e);for(let t of rt)d(Fe(t),e);de(),me()}window.top===window.self&&$e(`__exp_hp`)&&o(ot)})();
