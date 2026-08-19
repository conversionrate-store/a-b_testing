(function(){var e=({name:e,dev:t})=>{},t=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},n=[],r=null;function i(e,t){n.push({selector:e,onAppear:t,seen:new WeakSet}),r||(r=new MutationObserver(a),r.observe(document.documentElement,{childList:!0,subtree:!0})),a()}function a(){n.forEach(({selector:e,onAppear:t,seen:n})=>{let r=document.querySelector(e);!r||n.has(r)||(n.add(r),t(r))})}var o=`.auth-modal-shell:has(.crs-chips) .auth-social-buttons {
  gap: 12px !important;
}

.auth-modal-shell:has(.crs-chips) .auth-social-buttons > .auth-google-identity-button-wrapper,
.auth-modal-shell:has(.crs-chips) .auth-social-buttons > .auth-facebook-login-button,
.auth-modal-shell:has(.crs-chips)
  .auth-social-buttons
  > .auth-apple-sign-in-button.auth-apple-sign-in-button--icon {
  position: relative !important;
  width: 62px !important;
  height: 40px !important;
  min-width: 0 !important;
  padding: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #fff !important;
  border: 0 !important;
  border-radius: 8px !important;
  overflow: hidden !important;
}

.auth-modal-shell:has(.crs-chips) .auth-social-buttons .auth-google-identity-button,
.auth-modal-shell:has(.crs-chips) .auth-social-buttons .auth-google-identity-button [role='button'] {
  background: transparent !important;
  border: 0 !important;
}

.auth-modal-shell:has(.crs-chips) .auth-social-buttons .auth-google-identity-button,
.auth-modal-shell:has(.crs-chips) .auth-social-buttons .auth-google-identity-button > div,
.auth-modal-shell:has(.crs-chips) .auth-social-buttons .auth-google-identity-button > div > div,
.auth-modal-shell:has(.crs-chips) .auth-social-buttons .auth-google-identity-button [role='button'] {
  width: 100% !important;
  height: 100% !important;
  justify-content: center !important;
}

.auth-modal-shell:has(.crs-chips) .auth-social-buttons .auth-apple-sign-in-button__visual {
  display: flex !important;
  align-items: flex-start !important;
  justify-content: center !important;
}

.auth-modal-shell:has(.crs-chips) .auth-social-buttons .auth-apple-sign-in-button__trigger {
  position: absolute !important;
  inset: 0 !important;
  z-index: 1 !important;
}
`,s=`.ui-modal__dialog:has(.crs-v2) {
  max-width: 420px !important;
  width: 95% !important;
}

.auth-modal-shell:has(.crs-v2) {
  min-height: 0 !important;
  background: #152735 !important;
  border: 0 !important;
  border-radius: 16px !important;
  overflow: visible !important;
}

.auth-modal-shell:has(.crs-v2) .auth-modal-shell__content {
  min-height: 0 !important;
  padding: 32px !important;
}

@media (max-height: 640px) {
  .auth-modal-shell:has(.crs-v2) .auth-modal-shell__content {
    max-height: calc(100vh - 96px) !important;
    max-height: calc(100dvh - 96px) !important;
    overflow: hidden auto !important;
    scrollbar-width: none !important;
  }
}

.auth-modal-shell:has(.crs-sms) .auth-modal-shell__content {
  padding: 56px 32px !important;
}

.auth-modal-shell:has(.crs-v2) .auth-modal-shell__close {
  top: -44px !important;
  right: 0 !important;
  width: 28px !important;
  height: 28px !important;
  min-width: 0 !important;
  min-height: 0 !important;
  padding: 0 !important;
  background: #0E1B24 !important;
  border-radius: 14px !important;
  color: #8fa6b3 !important;
}

.auth-modal-shell:has(.crs-v2) .auth-modal-shell__close::before {
  content: '';
  position: absolute;
  inset: -8px;
}

.auth-modal-shell:has(.crs-v2) .auth-modal-shell__close .iconify {
  font-size: 15px !important;
}

@media (max-width: 767px) {
  .ui-modal__dialog:has(.crs-v2) {
    height: auto !important;
  }

  .auth-modal-shell:has(.crs-v2) {
    border-radius: 24px !important;
  }

  .auth-modal-shell:has(.crs-v2) .auth-modal-shell__content {
    padding: 40px 24px !important;
  }

  .auth-modal-shell:has(.crs-sms) .auth-modal-shell__content {
    padding: 56px 24px !important;
  }
}
`,c={movie:`movie`,series:`series`,cartoon:`cartoon`,tv:`channel`,"free-tv":`channel`},l=new Map;function u(e,t=20){let n=d();if(n){e(n);return}t&&setTimeout(()=>u(e,t-1),100)}function d(){let[,,e,t]=location.pathname.split(`/`),n=c[e];if(!n)return null;if(e===`tv`&&!t)return{kind:n};if(!t)return null;let r=window.useNuxtApp();if(n===`channel`)return r.$pinia.state.value.tvList.tvCurrentChannel?{kind:n}:null;let i=location.pathname.split(`/`).filter(Boolean).join(`:`),a=r.payload.data[`movie-info:${i}`]?.movie;if(!a){let n=l.get(`${e}:${t}`);return n?{kind:n}:null}return a.released?(l.set(`${e}:${t}`,n),{kind:n}):null}var f=`.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__phone-input .ui-input__field {
  display: flex !important;
  align-items: stretch !important;
  gap: 8px !important;
  min-height: 46px !important;
  padding: 0 !important;
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
}

.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__phone-input .ui-input__prefix {
  position: relative !important;
  flex: 0 0 auto !important;
  height: 46px !important;
  display: flex !important;
  align-items: center !important;
  gap: 4px !important;
  padding: 0 11px !important;
  background: #0e1d29 !important;
  border: 1px solid #2a4152 !important;
  border-radius: 8px !important;
  box-sizing: border-box !important;
}

.auth-modal-shell:has(.crs-chips)
  .auth-v1-start-screen__phone-input
  .auth-phone-country-select {
  position: static !important;
}

.auth-modal-shell:has(.crs-chips)
  .auth-v1-start-screen__phone-input
  .auth-phone-country-select__arrow {
  display: none !important;
}

.auth-modal-shell:has(.crs-chips)
  .auth-v1-start-screen__phone-input
  .auth-phone-country-select__trigger::after {
  content: '';
  position: absolute;
  inset: 0;
}

.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__phone-prefix {
  color: #fff !important;
  font-size: 14px !important;
}

.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__phone-input .ui-input__input {
  flex: 1 1 auto !important;
  min-width: 0 !important;
  height: 46px !important;
  padding: 13px 14px !important;
  background: #0e1d29 !important;
  border: 1px solid #2a4152 !important;
  border-radius: 8px !important;
  color: #fff !important;
  font-size: 15px !important;
  box-sizing: border-box !important;
}

.auth-modal-shell:has(.crs-chips)
  .auth-v1-start-screen__phone-input
  .ui-input__input::placeholder {
  color: #757575 !important;
}
`,p=`.auth-v1-start-screen__phone-input .ui-input__input`;function m(){i(p,e=>{u(()=>{e.placeholder=`93 000 00 00`})})}var h=`.crs-stepper {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  margin-bottom: 8px;
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
  line-height: 13px;
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

@media (max-width: 767px) {
  .crs-stepper {
    margin-bottom: 0;
  }
}
`;function g(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)g(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function _(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...i}=t??{},a=document.createElement(e);for(let[e,t]of Object.entries(i))e.startsWith(`on`)&&typeof t==`function`?a.addEventListener(e.slice(2).toLowerCase(),t):t===!0?a.setAttribute(e,``):t!==!1&&t!=null&&a.setAttribute(e,String(t));return g(a,r),a}var v=_,y={movie:`фільму`,series:`серіалу`,cartoon:`мультика`,channel:`каналу`},b=e=>v(`div`,{class:`crs-stepper`,children:[v(`div`,{class:`crs-stepper__step crs-stepper__step--done`,children:[_(`span`,{class:`crs-stepper__badge`,children:`1`}),v(`span`,{class:`crs-stepper__label`,children:[`Активація`,_(`br`,{}),`доступу`]})]}),_(`span`,{class:`crs-stepper__divider`}),v(`div`,{class:`crs-stepper__step`,children:[_(`span`,{class:`crs-stepper__icon`}),v(`span`,{class:`crs-stepper__label`,children:[`Перегляд`,_(`br`,{}),y[e.kind]]})]})]}),x=h,S=()=>v(`div`,{class:`crs-chips crs-v2`,children:[_(`span`,{class:`crs-chips__item`,children:`Безкоштовно`}),_(`span`,{class:`crs-chips__item`,children:`Займе пару секунд`})]}),C=`.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-info-step,
.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-info-text,
.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-secure {
  display: none !important;
}

.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 24px !important;
}

.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-info {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 6px !important;
  width: 100% !important;
}

.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-info-title {
  font-size: 22px !important;
  font-weight: 500 !important;
  line-height: 28px !important;
  text-align: center !important;
}

.crs-chips {
  display: flex;
  justify-content: center;
  gap: 6px;
}

.crs-chips__item {
  padding: 6px 12px;
  border-radius: 1111px;
  background: rgba(32, 190, 198, 0.1);
  color: #3fd8e0;
  font-size: 13px;
  line-height: 18px;
  white-space: nowrap;
}

.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-form {
  display: flex !important;
  flex-direction: column !important;
  gap: 8px !important;
  width: 100% !important;
}

.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-form-text {
  color: rgba(255, 255, 255, 0.6) !important;
  font-size: 12px !important;
  line-height: normal !important;
  text-align: center !important;
}

.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-form-button {
  margin-top: 4px !important;
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

.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-form-button::after {
  content: 'Отримати код і почати перегляд';
  order: 1;
  font-size: 15px;
  line-height: normal;
}

.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-form-button::before {
  content: '';
  order: 2;
  flex: 0 0 18px;
  width: 18px;
  height: 18px;
  margin-left: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D'18'%20height%3D'18'%20viewBox%3D'0%200%2018%2018'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M3.75%209H14.25M9.75%2013.5L14.25%209L9.75%204.5'%20stroke%3D'%230F1C26'%20stroke-width%3D'1.5'%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%2F%3E%3C%2Fsvg%3E");
}

.auth-modal-shell:has(.crs-chips)
  .auth-v1-start-screen__body-form-button:has(.ui-button__loader)::after,
.auth-modal-shell:has(.crs-chips)
  .auth-v1-start-screen__body-form-button:has(.ui-button__loader)::before {
  content: none;
}

.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-options {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 10px !important;
  width: 100% !important;
  margin-top: 8px !important;
}

.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-options-title {
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

.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-options-title::before,
.auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-options-title::after {
  content: '';
  flex: 1 0 0;
  min-width: 1px;
  height: 1px;
  background: #2a4152;
}

@media (max-width: 767px) {
  .auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body {
    gap: 32px !important;
  }

  .auth-modal-shell:has(.crs-chips) .auth-v1-start-screen__body-options {
    margin-top: 0 !important;
  }
}
`,w=`.auth-v1-start-screen`,T=`.auth-v1-start-screen__body-options-title`,E=`або увійди за 1 клік`,D=`Отримати код і почати перегляд`;function O(){i(w,e=>{u(t=>{e.querySelector(T).textContent=E,e.querySelector(`.auth-v1-start-screen__body-form-button`).setAttribute(`aria-label`,D),e.querySelector(`.auth-v1-start-screen__body-info`).append(S()),e.querySelector(`.auth-v1-start-screen__body`).prepend(b(t)),`${t.kind}`})})}var k=`.crs-sms {
  display: none;
}

.auth-modal-shell:has(.crs-sms) .auth-modal-shell__back,
.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__info-text:first-child,
.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__form-text {
  display: none !important;
}

.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen {
  gap: 16px !important;
}

.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__info {
  gap: 6px !important;
  width: 100% !important;
}

.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__info-title {
  font-size: 20px !important;
  font-weight: 500 !important;
  line-height: 28px !important;
}

.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__info-text {
  font-size: 12px !important;
  line-height: normal !important;
}

.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__info-number {
  gap: 6px !important;
  margin-top: 6px !important;
  justify-content: center !important;
}

.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__info-number-text {
  font-size: 18px !important;
  font-weight: 600 !important;
  line-height: 30px !important;
}

.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__info-number-icon {
  font-size: 20px !important;
  opacity: 1 !important;
  color: #3fd8e0 !important;
  background-color: #3fd8e0 !important;
}

.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__form {
  gap: 12px !important;
  width: 100% !important;
}

.auth-modal-shell:has(.crs-sms) .ui-code-input__cells {
  display: flex !important;
  justify-content: center !important;
  gap: 8px !important;
}

.auth-modal-shell:has(.crs-sms) .ui-code-input__cell {
  width: 44px !important;
  height: 44px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #0e1d29 !important;
  border: 1px solid #2a4152 !important;
  border-radius: 8px !important;
  color: rgba(255, 255, 255, 0.5) !important;
  font-size: 18px !important;
  box-sizing: border-box !important;
}

.auth-modal-shell:has(.crs-sms) .ui-code-input__error:empty {
  display: none !important;
}

.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__submit {
  width: auto !important;
  height: 44px !important;
  min-height: 44px !important;
  padding: 13px 64px !important;
  background: #3fd8e0 !important;
  color: #0f1c26 !important;
  border-radius: 22px !important;
  font-size: 15px !important;
  font-weight: 500 !important;
  line-height: normal !important;
}

.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__actions {
  gap: 12px !important;
  margin-top: 4px !important;
}

.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__actions-resend,
.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__actions-change {
  font-size: 12px !important;
  line-height: normal !important;
}

@media (max-width: 767px) {
  .auth-modal-shell:has(.crs-sms) .ui-code-input__cell {
    width: 56px !important;
    height: 56px !important;
  }

  .auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__submit {
    padding: 13px 72px !important;
  }
}

.auth-modal-shell:has(.crs-sms) .auth-v1-sms-screen__notice {
  position: static !important;
  order: 99 !important;
  width: 100% !important;
}
`,A=`.auth-v1-sms-screen`;function j(){i(A,e=>{u(()=>{let t=document.createElement(`i`);t.className=`crs-v2 crs-sms`,t.setAttribute(`aria-hidden`,`true`),e.append(t)})})}e({name:`Auth Popup`,dev:`OS`}),t(`exp_auth_popup`);var M=`crs-auth-popup`;function N(e){return!e||e===`undefined`||e===`null`?``:e}new class{constructor(){this.init()}init(){this.ensureStyles([``,x,s,C,f,k,o]),!window.__crsAuthPopupInit&&(window.__crsAuthPopupInit=!0,O(),j(),m())}isUserLoggedOut(){let e=document.cookie.match(/(?:^|; )refresh_token=([^;]+)/),t=N(e?e[1]:``);if(t===``)try{t=N(localStorage.getItem(`refresh_token`))}catch{t=``}return t===``}ensureStyles(e){queueMicrotask(()=>{if(document.getElementById(M))return;let t=document.createElement(`style`);t.id=M,t.textContent=e.join(`
`),document.head.appendChild(t)})}}})();
