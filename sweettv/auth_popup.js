(function(){var e=(e,t,n,r=``)=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r}),`${e}${t}${n}${r}`},t=({name:e,dev:t})=>{},n=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},r=(t,n,r,i,a=1e3,o=.5)=>{let s,c;if(s=new IntersectionObserver(function(t){t[0].isIntersecting===!0?c=setTimeout(()=>{e(n,t[0].target.dataset.visible||i||``,`view`,r),s.disconnect()},a):clearTimeout(c)},{threshold:[o]}),typeof t==`string`){let e=document.querySelector(t);e&&s.observe(e)}else s.observe(t)},i=[],a=null;function o(e,t){i.push({selector:e,onAppear:t,seen:new WeakSet}),a||(a=new MutationObserver(s),a.observe(document.documentElement,{childList:!0,subtree:!0})),s()}function s(){i.forEach(({selector:e,onAppear:t,seen:n})=>{let r=document.querySelector(e);!r||n.has(r)||(n.add(r),t(r))})}var c=`
.auth-social-buttons {
  gap: 12px !important;
}

.auth-social-buttons > .auth-google-identity-button-wrapper,
.auth-social-buttons > .auth-facebook-login-button,
.auth-social-buttons > .auth-apple-sign-in-button {
  position: relative !important;
  width: 62px !important;
  height: 40px !important;
  min-width: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 8px !important;
  background: rgba(255, 255, 255, 0.08) !important;
  box-shadow: none !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  overflow: hidden !important;
}


.auth-social-buttons > .auth-google-identity-button-wrapper::after,
.auth-social-buttons > .auth-apple-sign-in-button::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: center;
}

.auth-social-buttons > .auth-google-identity-button-wrapper::after {
  background-size: 16px 16px;
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D'16'%20height%3D'16'%20viewBox%3D'0%200%2016%2016'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M8%203.16667C9.18%203.16667%2010.2367%203.57333%2011.07%204.36667L13.3533%202.08333C11.9667%200.793334%2010.1567%200%208%200C4.87333%200%202.17%201.79333%200.853333%204.40667L3.51333%206.47C4.14333%204.57333%205.91333%203.16667%208%203.16667Z'%20fill%3D'white'%2F%3E%3Cpath%20d%3D'M15.66%208.18333C15.66%207.66%2015.61%207.15333%2015.5333%206.66667H8V9.67333H12.3133C12.12%2010.66%2011.56%2011.5%2010.72%2012.0667L13.2967%2014.0667C14.8%2012.6733%2015.66%2010.6133%2015.66%208.18333Z'%20fill%3D'white'%2F%3E%3Cpath%20d%3D'M3.51%209.53C3.35%209.04667%203.25667%208.53333%203.25667%208C3.25667%207.46667%203.34667%206.95333%203.51%206.47L0.85%204.40667C0.306667%205.48667%200%206.70667%200%208C0%209.29333%200.306667%2010.5133%200.853333%2011.5933L3.51%209.53Z'%20fill%3D'white'%2F%3E%3Cpath%20d%3D'M8%2016C10.16%2016%2011.9767%2015.29%2013.2967%2014.0633L10.72%2012.0633C10.0033%2012.5467%209.08%2012.83%208%2012.83C5.91333%2012.83%204.14333%2011.4233%203.51%209.52667L0.85%2011.59C2.17%2014.2067%204.87333%2016%208%2016Z'%20fill%3D'white'%2F%3E%3C%2Fsvg%3E");
}

.auth-social-buttons > .auth-apple-sign-in-button::after {
  background-size: 14px 17px;
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D'14'%20height%3D'17'%20viewBox%3D'0%200%2014.3182%2017.7045'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M7.37163%204.08566C8.16584%204.08566%209.1614%203.54541%209.75426%202.82507C10.2912%202.17227%2010.6827%201.26059%2010.6827%200.348913C10.6827%200.225105%2010.6715%200.101297%2010.6491%200C9.76545%200.0337658%208.70277%200.596529%208.06516%201.35063C7.56179%201.92465%207.10316%202.82507%207.10316%203.74801C7.10316%203.88307%207.12553%204.01813%207.13672%204.06315C7.19265%204.07441%207.28214%204.08566%207.37163%204.08566ZM4.57511%2017.7045C5.66016%2017.7045%206.14116%2016.973%207.49467%2016.973C8.87056%2016.973%209.17259%2017.682%2010.3807%2017.682C11.5664%2017.682%2012.3606%2016.579%2013.1101%2015.4985C13.949%2014.2604%2014.2958%2013.0449%2014.3182%2012.9886C14.2399%2012.9661%2011.9691%2012.0319%2011.9691%209.40941C11.9691%207.13584%2013.7589%206.11161%2013.8596%206.03283C12.6738%204.32202%2010.8729%204.277%2010.3807%204.277C9.04954%204.277%207.96449%205.08738%207.28214%205.08738C6.54386%205.08738%205.57067%204.32203%204.4185%204.32203C2.22603%204.32203%200%206.14538%200%209.58949C0%2011.728%200.82777%2013.9903%201.8457%2015.4535C2.71822%2016.6916%203.47887%2017.7045%204.57511%2017.7045Z'%20fill%3D'white'%2F%3E%3C%2Fsvg%3E");
}

.auth-social-buttons .auth-google-identity-button {
  width: 100% !important;
  height: 100% !important;
  background: transparent !important;
  border: 0 !important;
  border-radius: 8px !important;
  box-shadow: none !important;
}

.auth-social-buttons .auth-google-identity-button > div,
.auth-social-buttons .auth-google-identity-button > div > div,
.auth-social-buttons .auth-google-identity-button > div > iframe {
  width: 100% !important;
  height: 100% !important;
}

.auth-social-buttons .auth-google-identity-button > div > div > div {
  opacity: 0 !important;
}

.auth-social-buttons .auth-facebook-login-button .iconify {
  font-size: 16px !important;
  width: 16px !important;
  height: 16px !important;
  background-size: 16px 16px !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D'16'%20height%3D'16'%20viewBox%3D'0%200%2016%2016'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M16%208.04888C16%203.6036%2012.4182%200%208%200C3.58176%200%200%203.6036%200%208.04888C0%2012.0663%202.92552%2015.3962%206.75%2016V10.3755H4.71872V8.04888H6.75V6.2756C6.75%204.2584%207.94432%203.14408%209.77168%203.14408C10.647%203.14408%2011.5625%203.30128%2011.5625%203.30128V5.28208H10.5537C9.55992%205.28208%209.25%205.90256%209.25%206.53904V8.04888H11.4687L11.1141%2010.3755H9.25V16C13.0745%2015.3962%2016%2012.0663%2016%208.04888Z'%20fill%3D'white'%2F%3E%3C%2Fsvg%3E") !important;
}

.auth-social-buttons
  > .auth-apple-sign-in-button.auth-apple-sign-in-button.auth-apple-sign-in-button--icon {
  width: 62px !important;
  height: 40px !important;
  min-width: 0 !important;
}

.auth-social-buttons .auth-apple-sign-in-button__visual {
  opacity: 0 !important;
  width: 100% !important;
  height: 100% !important;
}

.auth-social-buttons .auth-apple-sign-in-button__trigger {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  border-radius: 8px !important;
  z-index: 1 !important;
}
`,l=`.auth-social-buttons`,u={google:`.auth-google-identity-button-wrapper`,facebook:`.auth-facebook-login-button`,apple:`.auth-apple-sign-in-button`};function d(){o(l,t=>{r(l,`auth_social_view`,`auth_popup`,`Social auth buttons entered the viewport`),t.addEventListener(`click`,t=>{let n=t.target,r=Object.keys(u).find(e=>n.closest(u[e]));r&&e(`auth_social_click`,`Click on ${r} button`,`click`,`auth_popup`)})})}var f={movie:`movie`,series:`series`,cartoon:`cartoon`,tv:`channel`,"free-tv":`channel`},p=e=>`https://sweet.tv/cdn-cgi/image/f=auto,q=80,fit=cover,w=534,h=300/${e}`,m=`https://sweet-tv-static.sweet.tv/web/nuxt/pages/tv/player-frame/bg.png`;function h(e=10){let t=(`useNuxtApp`in window?window.useNuxtApp():null)?.$pinia?v():null;if(t){new Image().src=t.posterUrl;return}e&&setTimeout(()=>h(e-1),300)}var g=new Map;function _(e,t=20){let n=v();if(n){e(n);return}t&&setTimeout(()=>_(e,t-1),100)}function v(){let[,,e,t]=location.pathname.split(`/`),n=f[e];if(!n)return null;if(e===`tv`&&!t)return{kind:n,title:``,posterUrl:p(m),durationMin:null,rating:null};if(!t)return null;let r=window.useNuxtApp();if(n===`channel`){let e=r.$pinia.state.value.tvList.tvCurrentChannel;return e?{kind:n,title:e.title,posterUrl:p(e.banner_url),durationMin:null,rating:null}:null}let i=location.pathname.split(`/`).filter(Boolean).join(`:`),a=r.payload.data[`movie-info:${i}`]?.movie;if(!a)return g.get(`${e}:${t}`)??null;if(!a.released)return null;let o=a.scores?.find(e=>e.provider===`IMDB`),s={kind:n,title:a.year?`${a.title} (${a.year})`:a.title,posterUrl:p(a.horizontal_poster_url||a.banner_url||a.poster_url),durationMin:a.duration||null,rating:o?.value??null};return g.set(`${e}:${t}`,s),s}function y(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)y(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function b(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...i}=t??{},a=document.createElement(e);for(let[e,t]of Object.entries(i))e.startsWith(`on`)&&typeof t==`function`?a.addEventListener(e.slice(2).toLowerCase(),t):t===!0?a.setAttribute(e,``):t!==!1&&t!=null&&a.setAttribute(e,String(t));return y(a,r),a}var x=b,S={movie:`фільм`,series:`серіал`,cartoon:`мультик`,channel:`канал`},C=e=>{let t=Math.floor(e/60),n=e%60;return t?`${t}h ${n}m`:`${n}m`},w=e=>x(`div`,{class:`crs-side-panel__meta`,children:[e.durationMin?b(`span`,{children:C(e.durationMin)}):``,e.durationMin&&e.rating?b(`span`,{children:`·`}):``,e.rating?b(`span`,{class:`crs-side-panel__rating`,children:String(e.rating)}):``]}),T=e=>{let t=x(`aside`,{class:`crs-side-panel`,children:[b(`div`,{class:`crs-side-panel__backdrop`,style:`background-image:url(${e.posterUrl})`}),x(`div`,{class:`crs-side-panel__body`,children:[x(`p`,{class:`crs-side-panel__caption`,children:[`Твій `,S[e.kind],` чекає`]}),b(`div`,{class:`crs-side-panel__poster`,children:b(`img`,{class:`crs-side-panel__poster-img`,src:e.posterUrl,fetchpriority:`high`,alt:``})}),e.title?b(`p`,{class:`crs-side-panel__title`,children:e.title}):``]}),b(`p`,{class:`crs-side-panel__note`,children:`Українською в HD · одразу після активації`})]});return(e.durationMin||e.rating)&&t.querySelector(`.crs-side-panel__poster`).append(w(e)),t},E=`.ui-modal__dialog:has(.crs-side-panel) {
  max-width: 700px !important;
}

.auth-modal-shell:has(.crs-side-panel) {
  min-height: 400px !important;
  display: flex !important;
  flex-direction: row !important;
  align-items: stretch !important;
  gap: 24px !important;
  padding: 0 0 0 32px !important;
  background: #152735 !important;
  border-radius: 16px !important;
  overflow: hidden !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-modal-shell__content {
  flex: 0 0 312px !important;
  width: 312px !important;
  padding: 72px 0 24px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

/* Each step mounts the rail inside its own screen, and the screens differ in height, so in
   the flow of a centred column the rail would sit at a different height on each of them.
   Out of the flow it is measured from the shell instead — the same 24px on both. The top
   padding above is the band the centred content keeps clear of. */
.auth-modal-shell:has(.crs-side-panel) .crs-stepper {
  position: absolute;
  top: 24px;
  left: 0;
  margin-bottom: 0;
}

.crs-side-panel {
  position: relative;
  flex: 0 0 331px;
  width: 331px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: #0b1822;
  border-left: 1px solid #2a4152;
  box-sizing: border-box;
}

.crs-side-panel__backdrop {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.06;
  pointer-events: none;
}

.crs-side-panel__body {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.crs-side-panel__caption {
  margin: 0;
  color: #3fd8e0;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
}

.crs-side-panel__poster {
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
}

.crs-side-panel__poster-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.crs-side-panel__meta {
  position: absolute;
  left: 6px;
  bottom: 6px;
  height: 22px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 8px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  font-size: 12px;
  line-height: 24px;
  white-space: nowrap;
}

.crs-side-panel__rating {
  display: flex;
  align-items: center;
  gap: 2px;
}

.crs-side-panel__rating::before {
  content: '';
  width: 12px;
  height: 12px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D'12'%20height%3D'12'%20viewBox%3D'0%200%2011.5401%2011.5384'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M5.78639%200C6.30764%200%207.11426%202.27074%207.45051%203.29149C7.54595%203.58106%207.81208%203.78096%208.1167%203.79275C9.18145%203.83395%2011.5401%203.9879%2011.5401%204.54336C11.5401%205.08911%209.87039%206.42519%209.07145%207.03325C8.82558%207.22044%208.72395%207.54244%208.81751%207.83694C9.13989%208.85175%209.79226%2011.1093%209.34314%2011.4779C8.9027%2011.8396%207.08583%2010.4906%206.22558%209.81088C5.9592%209.60038%205.58076%209.60006%205.31426%209.8105C4.45363%2010.4901%202.63889%2011.8396%202.22968%2011.4779C1.81158%2011.1084%202.43076%208.842%202.73394%207.83044C2.82131%207.53894%202.71877%207.2235%202.47655%207.03925C1.68078%206.43406%200%205.09091%200%204.54336C0%203.98718%202.36478%203.83355%203.4275%203.79259C3.73011%203.78092%203.99513%203.58347%204.09207%203.29657C4.43614%202.27829%205.26426%200%205.78639%200Z'%20fill%3D'%23FBBC05'%2F%3E%3C%2Fsvg%3E");
}

.crs-side-panel__title {
  position: relative;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
}

.crs-side-panel__note {
  position: absolute;
  bottom: 32px;
  left: 32px;
  right: 32px;
  margin: 0;
  color: #8fa6b3;
  font-size: 10px;
  line-height: normal;
  text-align: center;
}

@media (max-width: 767px) {
  .ui-modal:has(.crs-side-panel) {
    overflow-y: auto !important;
  }

  .ui-modal__dialog:has(.crs-side-panel) {
    width: 100% !important;
    max-width: 480px !important;
    height: auto !important;
  }

  .auth-modal-shell:has(.crs-side-panel) {
    flex-direction: column !important;
    gap: 12px !important;
    min-height: 0 !important;
    padding: 0 !important;
    background: #0b1822 !important;
    border-radius: 24px !important;
  }

  .crs-side-panel {
    order: -1;
    flex: 0 0 auto;
    width: 100%;
    padding: 0;
    border-left: 0;
    justify-content: flex-start;
  }

  .crs-side-panel__backdrop,
  .crs-side-panel__note {
    display: none;
  }

  .crs-side-panel__body {
    gap: 2px;
  }

  .crs-side-panel__poster {
    order: -1;
    height: 188px;
    border-radius: 0;
    margin-bottom: 10px;
  }

  .crs-side-panel__meta {
    left: 9px;
    bottom: 8px;
  }

  .crs-side-panel__caption {
    padding: 0 16px;
    font-size: 13px;
  }

  .crs-side-panel__title {
    padding: 0 16px;
    font-size: 16px;
    line-height: 24px;
  }

  .auth-modal-shell:has(.crs-side-panel) .auth-modal-shell__close {
    top: 7px !important;
    right: 8px !important;
    width: 28px !important;
    height: 28px !important;
    min-width: 0 !important;
    min-height: 0 !important;
    background: rgba(0, 0, 0, 0.35) !important;
    border-radius: 14px !important;
  }

  .auth-modal-shell:has(.crs-side-panel) .auth-modal-shell__content {
    flex: 0 0 auto !important;
    width: 100% !important;
    padding: 24px 16px !important;
    background: #152735 !important;
    border-radius: 0 0 24px 24px !important;
  }

  /* Back into the flow: here the column is sized by its content instead of centring it,
     so the rail is already first on both steps — pinning it would only lift it out over
     the title and past the column's side padding. */
  .auth-modal-shell:has(.crs-side-panel) .crs-stepper {
    position: static;
    margin-bottom: 18px;
  }

  .auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body,
  .auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen {
    width: 100% !important;
  }
}


@media (max-width: 767px) and (max-height: 680px) {
  .crs-side-panel__poster {
    height: 150px;
  }
}`,D=`.auth-modal-shell`,O=`.auth-v1-start-screen`;function k(){o(O,t=>{_(n=>{t.closest(D).append(T(n)),`${n.kind}`,n.title&&`${n.title}`,e(`auth_panel_view`,`Panel with content: ${n.kind}`,`view`,`auth_popup`)})})}var A=`.auth-v1-start-screen__phone-input .ui-input__field {
  display: flex !important;
  align-items: stretch !important;
  gap: 8px !important;
  padding: 0 !important;
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
}

.auth-v1-start-screen__phone-input .ui-input__prefix {
  position: relative !important;
  flex: 0 0 auto !important;
  height: 44px !important;
  display: flex !important;
  align-items: center !important;
  gap: 4px !important;
  padding: 0 11px !important;
  background: #0e1d29 !important;
  border: 1px solid #2a4152 !important;
  border-radius: 8px !important;
  box-sizing: border-box !important;
}

.auth-v1-start-screen__phone-input .auth-phone-country-select {
  position: static !important;
}

.auth-v1-start-screen__phone-input .auth-phone-country-select__arrow {
  display: none !important;
}

.auth-v1-start-screen__phone-input .auth-phone-country-select__trigger::after {
  content: '';
  position: absolute;
  inset: 0;
}

.auth-v1-start-screen__phone-prefix {
  color: #fff !important;
  font-size: 14px !important;
}

.auth-v1-start-screen__phone-input .ui-input__input {
  flex: 1 1 auto !important;
  min-width: 0 !important;
  height: 44px !important;
  padding: 13px 14px !important;
  background: #0e1d29 !important;
  border: 1px solid #2a4152 !important;
  border-radius: 8px !important;
  color: #fff !important;
  font-size: 15px !important;
  box-sizing: border-box !important;
}

.auth-v1-start-screen__phone-input .ui-input__input::placeholder {
  color: #757575 !important;
}
`,j=`.auth-v1-start-screen__phone-input .ui-input__input`;function M(){o(j,e=>{e.placeholder=`93 000 00 00`})}var N=`.crs-stepper {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin-bottom: 18px;
}

.crs-stepper__step {
  flex: 0 0 86px;
  width: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.crs-stepper__badge {
  flex: 0 0 24px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 111px;
  background: #3fd8e0;
  color: #0f1c26;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
}

.crs-stepper__icon {
  flex: 0 0 24px;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D'24'%20height%3D'24'%20viewBox%3D'0%200%2024%2024'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Crect%20x%3D'1'%20y%3D'1'%20width%3D'22'%20height%3D'22'%20rx%3D'11'%20fill%3D'%230E1D29'%2F%3E%3Crect%20x%3D'1'%20y%3D'1'%20width%3D'22'%20height%3D'22'%20rx%3D'11'%20stroke%3D'%232A4152'%20stroke-width%3D'2'%2F%3E%3Cpath%20d%3D'M15.4763%2011.0553C16.1746%2011.4649%2016.1745%2012.5351%2015.4763%2012.9447L10.498%2015.865C9.8243%2016.2602%209%2015.7403%209%2014.9203V9.07966C9%208.25963%209.8243%207.73981%2010.498%208.13499L15.4763%2011.0553Z'%20fill%3D'%232A4152'%2F%3E%3C%2Fsvg%3E");
}

.crs-stepper__label {
  font-size: 11px;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.6);
}

.crs-stepper__step--done .crs-stepper__label {
  color: #3fd8e0;
}

.crs-stepper__divider {
  flex: 1 0 0;
  min-width: 1px;
  height: 2px;
  background: #2a4152;
}
`,P={movie:`фільму`,series:`серіалу`,cartoon:`мультика`,channel:`каналу`},F=e=>x(`div`,{class:`crs-stepper`,children:[x(`div`,{class:`crs-stepper__step crs-stepper__step--done`,children:[b(`span`,{class:`crs-stepper__badge`,children:`1`}),x(`span`,{class:`crs-stepper__label`,children:[`Активація`,b(`br`,{}),`доступу`]})]}),b(`span`,{class:`crs-stepper__divider`}),x(`div`,{class:`crs-stepper__step`,children:[b(`span`,{class:`crs-stepper__icon`}),x(`span`,{class:`crs-stepper__label`,children:[`Перегляд`,b(`br`,{}),P[e.kind]]})]})]}),I=N,L=`.auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body-secure,
.auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body-info-step,
.auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body-form-text {
  display: none !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 16px !important;
  width: 312px !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body-info {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 6px !important;
  width: 100% !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body-info-title {
  font-size: 20px !important;
  font-weight: 500 !important;
  line-height: 28px !important;
  text-align: center !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body-info-text {
  font-size: 12px !important;
  line-height: normal !important;
  color: rgba(255, 255, 255, 0.6) !important;
  text-align: center !important;
}


.auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body-form {
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  width: 100% !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body-form-button {
  width: 100% !important;
  height: 44px !important;
  min-height: 44px !important;
  padding: 0 !important;
  background: #3fd8e0 !important;
  color: #0f1c26 !important;
  border-radius: 22px !important;
 
  font-size: 0 !important;
  font-weight: 500 !important;
 
  gap: 0 !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body-form-button::after {
  content: 'Отримати код і дивитися';
  font-size: 15px;
  line-height: normal;
}

.auth-modal-shell:has(.crs-side-panel)
  .auth-v1-start-screen__body-form-button:has(.ui-button__loader)::after {
  content: none;
}

.crs-trial-badge {
  margin: -6px 0 0 !important;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 11px;
  border-radius: 111px;
  color: #6ee7b7;
  font-size: 12px;
  line-height: normal;
  white-space: nowrap;
  box-sizing: border-box;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body-options {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 10px !important;
  width: 100% !important;
  margin-top: 8px !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body-options-title {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  width: 100% !important;
  margin: 0 !important;
  color: rgba(255, 255, 255, 0.5) !important;
  font-size: 12px !important;
  line-height: normal !important;
  white-space: nowrap !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body-options-title::before,
.auth-modal-shell:has(.crs-side-panel) .auth-v1-start-screen__body-options-title::after {
  content: '';
  flex: 1 0 0;
  min-width: 1px;
  height: 1px;
  background: #2a4152;
}
`,R=`.auth-v1-start-screen`,z={".auth-v1-start-screen__body-info-title":`Активуй безкоштовний доступ`,".auth-v1-start-screen__body-info-text":`Надішлемо SMS-код — це твій вхід без пароля`,".auth-v1-start-screen__body-options-title":`або увійди за 1 клік`},B=`Отримати код і дивитися`;function V(){o(R,e=>{_(t=>{Object.entries(z).forEach(([t,n])=>{e.querySelector(t).textContent=n}),e.querySelector(`.auth-v1-start-screen__body-form-button`).setAttribute(`aria-label`,B),e.querySelector(`.auth-v1-start-screen__body-info`).prepend(F(t));let n=document.createElement(`p`);n.className=`crs-trial-badge`,n.textContent=`7 днів безкоштовно · Без банківської картки`,e.querySelector(`.auth-v1-start-screen__body-form`).append(n),`${t.kind}`})})}var H=`
/* The native «Крок 2 з 2» line — our stepper replaces it. Two selectors for the same
   node: :first-child holds until the stepper is prepended, the sibling rule after. */
.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__info-text:first-child,
.auth-modal-shell:has(.crs-side-panel) .crs-stepper + .auth-v1-sms-screen__info-text,
.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__form-text,
.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__notice,
.auth-modal-shell:has(.crs-side-panel) .auth-modal-shell__back,
/* Moved up into the subtitle, so the bottom copy would only be a duplicate. */
.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__actions-change {
  display: none !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen {
  width: 312px !important;
  gap: 16px !important;
  align-items: center !important;
}

/* Wrapping row, not a column: it lets «Надіслали на», the number and the change link
   flow into one subtitle line without reparenting anything Vue owns. */
.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__info {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 6px 4px !important;
  width: 100% !important;
}

/* The line of its own above the subtitle row. */
.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__info-title {
  flex: 0 0 100% !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__info-title {
  font-size: 20px !important;
  font-weight: 500 !important;
  line-height: 28px !important;
  text-align: center !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__info-text {
  font-size: 12px !important;
  line-height: normal !important;
  opacity: 0.6 !important;
  text-align: center !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__info-number {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 6px !important;
  margin-top: 0 !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__info-number-text {
  font-size: 12px !important;
  font-weight: 500 !important;
  line-height: normal !important;
}

/* Separator before the change link. The 6px flex gap is the space on its right, so it
   is offset by the same on its left — and it belongs to the number, not to the link. */
.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__info-number-text::after {
  content: '·';
  margin-left: 6px;
  opacity: 0.6;
}

/* The host renders this as an Iconify span: the glyph is a mask over the element's
   background colour, and its box is sized by font-size. Dropping the mask — which would
   otherwise clip the pseudo-element too — frees ::after to carry a text label instead,
   and the span keeps the site's own change-number click. */
.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__info-number-icon {
  width: auto !important;
  height: auto !important;
  font-size: 12px !important;
  line-height: normal !important;
  opacity: 1 !important;
  background-color: transparent !important;
  -webkit-mask: none !important;
  mask: none !important;
  color: #3fd8e0 !important;
  cursor: pointer !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__info-number-icon::after {
  content: 'Змінити номер';
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__form {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 12px !important;
  width: 100% !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-code-input__cells {
  display: flex !important;
  justify-content: center !important;
  gap: 8px !important;
}

.auth-modal-shell:has(.crs-side-panel) .auth-code-input__cell {
  width: 44px !important;
  height: 44px !important;
  background: #0e1d29 !important;
  border: 1px solid #2a4152 !important;
  border-radius: 8px !important;
  font-size: 18px !important;
  box-sizing: border-box !important;
}


.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__submit {
  width: auto !important;
  height: 44px !important;
  min-height: 44px !important;
  padding: 13px 64px !important;
  background: #3fd8e0 !important;
  color: #0f1c26 !important;
  border-radius: 22px !important;

  font-size: 0 !important;
  font-weight: 500 !important;

  gap: 0 !important;
}

/* nowrap because the button is sized by its label but its height is fixed: a wrap on a
   narrow column would push the second line out of the box. */
.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__submit::after {
  content: 'Почати перегляд';
  font-size: 15px;
  line-height: normal;
  white-space: nowrap;
}

/* The loader replaces the slot, so the label must not sit next to the spinner. */
.auth-modal-shell:has(.crs-side-panel)
  .auth-v1-sms-screen__submit:has(.ui-button__loader)::after {
  content: none;
}

.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__actions {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 12px !important;
  margin-top: 4px !important;
}
.auth-modal-shell:has(.crs-side-panel) .auth-v1-sms-screen__actions-resend {
  font-size: 12px !important;
  color: #20bec6 !important;
}

@media (max-width: 767px) {
  .auth-modal-shell:has(.crs-side-panel) .auth-code-input__cell {
    width: 56px !important;
    height: 56px !important;
  }
}`,U=`.auth-v1-sms-screen`,W=`Почати перегляд`,G=`Змінити номер`,K=`.auth-v1-sms-screen__info-text`,q=`Надіслали на`;function J(){o(U,e=>{_(t=>{e.querySelectorAll(K)[1].textContent=q,e.querySelector(`.auth-v1-sms-screen__submit`).setAttribute(`aria-label`,W),Y(e),e.querySelector(`.auth-v1-sms-screen__info`).prepend(F(t)),`${t.kind}`})})}function Y(e){let t=e.querySelector(`.auth-v1-sms-screen__info-number-icon`);t.removeAttribute(`aria-hidden`),t.setAttribute(`role`,`button`),t.setAttribute(`tabindex`,`0`),t.setAttribute(`aria-label`,G),t.addEventListener(`keydown`,e=>{e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),t.click())})}t({name:`sweettv testing`,dev:`OS`}),n(`exp_test`);var X=`crs-auth-popup`;new class{constructor(){this.init()}init(){window.IS_AUTH!==!0&&(this.ensureStyles([``,I,E,L,A,H,c]),h(),!window.__crsAuthPopupInit&&(window.__crsAuthPopupInit=!0,k(),V(),J(),M(),d()))}ensureStyles(e){queueMicrotask(()=>{if(document.getElementById(X))return;let t=document.createElement(`style`);t.id=X,t.textContent=e.join(`
`),document.head.appendChild(t)})}}})();
