(function(){var e=(e,t,n,r=``)=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r}),`${e}${t}${n}${r}`},t=({name:e,dev:t})=>{},n=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},r=`:root {
  --crs-play-glyph: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19.1336 10.0398C20.699 10.8905 20.6989 13.1131 19.1336 13.9638L7.97341 20.0291C6.46319 20.8499 4.61531 19.7702 4.61531 18.0671L4.61531 5.93646C4.61531 4.23333 6.46319 3.15369 7.97341 3.97446L19.1336 10.0398Z' fill='%23fff'/%3E%3C/svg%3E");
  --crs-play-red: #ff0d0d;
  --crs-play-size: 56px;
  --crs-play-glyph-size: 28px;
}
`,i=[],a=null,o=!1;function s(e){let t=window.useNuxtApp?.();if(t&&!t.isHydrating){e();return}requestAnimationFrame(()=>s(e))}function c(e){i.push(e),a||(a=new MutationObserver(l),a.observe(document.body,{childList:!0,subtree:!0})),l()}function l(){o||(o=!0,requestAnimationFrame(()=>{o=!1,i.forEach(e=>e())}))}function u(e){if(e.getClientRects().length===0)return!1;let{visibility:t,opacity:n}=getComputedStyle(e);return t!==`hidden`&&t!==`collapse`&&n!==`0`}var d={tv:`tv`,movie:`movie`,series:`series`};function f(){return d[location.pathname.split(`/`)[2]]??null}function p(){let e=f();if(!e||e===`tv`)return!1;let t=window.useNuxtApp?.();if(!t)return!1;let n=location.pathname.split(`/`).filter(Boolean).join(`:`),r=t.payload.data[`movie-info:${n}`]?.movie;return r?!r.released:!1}function m(){let[,e,t,n]=location.pathname.split(`/`),r=window.useNuxtApp?.();return r?f()===`tv`?r.$pinia.state.value.tvList?.tvCurrentChannel?.title??``:r.payload.data[`movie-info:${e}:${t}:${n}`]?.movie?.title??``:``}function h(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)h(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function g(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...i}=t??{},a=document.createElement(e);for(let[e,t]of Object.entries(i))e.startsWith(`on`)&&typeof t==`function`?a.addEventListener(e.slice(2).toLowerCase(),t):t===!0?a.setAttribute(e,``):t!==!1&&t!=null&&a.setAttribute(e,String(t));return h(a,r),a}var _=({onPlay:e})=>g(`button`,{class:`crs-play`,type:`button`,tabindex:`-1`,"aria-hidden":`true`,onClick:e}),v=`.crs-play {
  float: right;
  width: var(--crs-play-size);
  height: var(--crs-play-size);
  margin-left: 12px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--crs-play-red) var(--crs-play-glyph) no-repeat center /
    var(--crs-play-glyph-size);
  cursor: pointer;
}

@media screen and (width >= 768px) {
  .crs-play {
    display: none;
  }
}

@media screen and (width <= 767px) {
  .movie-content__title::before,
  .stub__info-title::before {
    content: '';
    float: right;
    width: var(--crs-play-size);
    height: var(--crs-play-size);
    margin-left: 12px;
    border-radius: 50%;
    background: var(--crs-play-red) var(--crs-play-glyph) no-repeat center /
      var(--crs-play-glyph-size);
  }

  .movie-content__title:has(> .crs-play)::before,
  .stub__info-title:has(> .crs-play)::before,
  .crs-unreleased .movie-content__title::before {
    content: none;
  }

  html:not(.crs-unreleased) .movie-content__player_watch-icon {
    display: none !important;
  }

  .stub__info-title {
    width: 100% !important;
  }
}
`,y=[[`.movie-content__title`,`.movie-content__actions-watch`,`.movie-content`],[`.stub__info-title`,`.tv-mobile__stub-action-button, .stub__action-button`,`.stub`]];function b(){c(()=>{if(p()){document.querySelectorAll(`.crs-play`).forEach(e=>e.remove());return}y.forEach(([t,n,r])=>{let i=document.querySelector(t);if(!i||i.querySelector(`.crs-play`))return;let a=_({onPlay:()=>{let t=[...(i.closest(r)??document).querySelectorAll(n)].find(u)??[...document.querySelectorAll(n)].find(u);if(!t){`${n}`;return}e(`exp_play_btn_click`,`Play button`,`click`,`Content Page`),t.click()}});i.prepend(a)})})}var x=`html:not(.crs-unreleased) .episode-card__image::after {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: var(--crs-play-size);
  height: var(--crs-play-size);
  border-radius: 50%;
  background: var(--crs-play-red) var(--crs-play-glyph) no-repeat center /
    var(--crs-play-glyph-size);
  pointer-events: none;
}
`;function S(){document.addEventListener(`click`,e=>{e.target.closest(`.episode-card__image`)},!0)}var C={tv:!0,movie:!1,series:!1},w=`/* Both lines keep the host's own type scale — per design — so the pill is sized by
   its content instead of the host's fixed height. */
.stub__action-button:has(> .crs-cta-title),
.tv-mobile__stub-action-button:has(> .crs-cta-title) {
  flex-direction: column;
  gap: 0;
  height: auto;
}

/* Desktop has 974px of room around the 380px pill, so a long channel name widens the
   button and "{назва} безкоштовно" stays on one line at the design's 70px height.
   The mobile CTA is already full-width — there a long name wraps and the pill grows. */
@media screen and (width >= 768px) {
  .stub__action-button:has(> .crs-cta-title) {
    width: max-content;
    min-width: 380px;
    max-width: 100%;
  }
}
`,T={tv:`.stub__action-button, .tv-mobile__stub-action-button`,movie:`.movie-content__actions-watch`,series:`.movie-content__actions-watch`},E=`Дивитися`;function D(){c(()=>{let e=f();if(!e||!C[e]||p())return;let t=m();t&&document.querySelectorAll(T[e]).forEach(e=>{let n=[...e.childNodes].find(e=>e.nodeValue?.includes(E));if(!n)return;e.dataset.crsLabel??=n.nodeValue;let r=`${t} ${e.dataset.crsLabel.replace(E,``).trim()}`;n.nodeValue!==E&&(n.nodeValue=E);let i=e.querySelector(`.crs-cta-title`);i||(i=document.createElement(`span`),i.className=`crs-cta-title`,n.after(i)),i.textContent!==r&&(i.textContent=r)})})}t({name:`Additional play buttons`,dev:`OS`}),n(`exp_play_btns`);var O=`crs-play-btns`;new class{constructor(){this.init()}init(){this.ensureStyles([r,v,x,w]),!window.__crsPlayBtnsInit&&(window.__crsPlayBtnsInit=!0,S(),s(()=>{c(()=>{document.documentElement.classList.toggle(`crs-unreleased`,p())}),b(),D()}))}ensureStyles(e){queueMicrotask(()=>{if(!document.head){requestAnimationFrame(()=>this.ensureStyles(e));return}if(document.getElementById(O))return;let t=document.createElement(`style`);t.id=O,t.textContent=e.join(`
`),document.head.appendChild(t)})}}})();
