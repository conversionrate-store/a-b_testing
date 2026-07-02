//#region src/supernormal/new-flow/style.css?raw
(function() {
	var e = ".sn-popup {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  pointer-events: none;\n}\n.sn-popup.active {\n  pointer-events: all;\n}\n.sn-popup.active .sn-popup__overlay {\n  opacity: 1;\n}\n.sn-popup.active .sn-popup__card {\n  transform: translateY(0);\n}\n.sn-popup__overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(28, 25, 23, 0.4);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  display: block !important;\n}\n.sn-popup__card {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #1b4241;\n  border-radius: 16px 16px 0 0;\n  padding: 32px 20px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  transform: translateY(100%);\n  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.sn-popup__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.sn-popup__header-text {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.sn-popup__title {\n  color: #fff;\n  font-family: \"Bricolage Grotesque\", sans-serif;\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 30px;\n  letter-spacing: -0.6px;\n  margin: 0;\n}\n.sn-popup__subtitle {\n  color: #fff;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0;\n}\n.sn-popup__close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sn-popup__close svg {\n  width: 32px;\n  height: 32px;\n}\n.sn-popup__timeline {\n  display: flex;\n  flex-direction: column;\n}\n.sn-popup__step {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  position: relative;\n}\n.sn-popup__step:not(:last-child)::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 14px;\n  display: block;\n  width: 2px;\n  height: 100%;\n  background: #1fcd5d;\n  z-index: 0;\n}\n.sn-popup__step-left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 1;\n}\n.sn-popup__circle {\n  width: 30px;\n  height: 30px;\n  flex-shrink: 0;\n}\n.sn-popup__circle svg {\n  display: block;\n}\n.sn-popup__line {\n  width: 1.5px;\n  min-height: 41px;\n  background: rgba(31, 205, 93, 0.3);\n  margin: 4px 0;\n}\n.sn-popup__step-content {\n  padding-bottom: 24px;\n  flex: 1;\n  padding-top: 4px;\n}\n.sn-popup__step:last-child .sn-popup__step-content {\n  padding-bottom: 0;\n}\n.sn-popup__step-title {\n  color: #fff;\n  font-family: \"Bricolage Grotesque\", sans-serif;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 20px;\n  letter-spacing: -0.4px;\n  margin-bottom: 8px;\n}\n.sn-popup__step-desc {\n  color: #fff;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 22.4px;\n}\n.sn-popup__step-desc--green {\n  color: #1fcd5d;\n}\n.sn-popup__footer {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: center;\n}\n.sn-popup__cta {\n  width: 100%;\n  background: #cfff90;\n  border: 2px solid #1fcd5d;\n  border-radius: 100px;\n  padding: 18px 26px;\n  color: #254141;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 16px;\n  cursor: pointer;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.2s ease;\n}\n.sn-popup__cta:hover {\n  opacity: 0.9;\n}\n.sn-popup__fine-print {\n  color: #fff;\n  font-family: \"Inter\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 22px;\n  text-align: center;\n  margin: 0;\n}\n@media (min-width: 768px) {\n  .sn-popup__fine-print br {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .sn-popup__overlay {\n    backdrop-filter: blur(6px);\n  }\n  .sn-popup__card {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    right: auto;\n    bottom: auto;\n    width: 600px;\n    border-radius: 16px;\n    padding: 42px;\n    gap: 42px;\n    max-height: 90vh;\n    transform: translate(-50%, -48%) scale(0.97);\n    opacity: 0;\n    transition: opacity 0.3s ease, transform 0.3s ease;\n  }\n  .sn-popup.active .sn-popup__card {\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 1;\n  }\n}\n\n.sn-plan-popup {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  pointer-events: none;\n}\n.sn-plan-popup.active {\n  pointer-events: all;\n}\n.sn-plan-popup.active .sn-plan-popup__overlay {\n  opacity: 1;\n}\n.sn-plan-popup.active .sn-plan-popup__card {\n  transform: translateY(0);\n}\n.sn-plan-popup__overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(28, 25, 23, 0.4);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  display: block !important;\n}\n.sn-plan-popup__card {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff8f0;\n  border-radius: 16px 16px 0 0;\n  max-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  transform: translateY(100%);\n  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1);\n}\n.sn-plan-popup__body {\n  flex: 1;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 32px 20px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sn-plan-popup__footer {\n  flex-shrink: 0;\n  background: #fff8f0;\n  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.12);\n  padding: 15px 20px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.sn-plan-popup__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sn-plan-popup__title {\n  color: #1c1917;\n  font-family: \"Bricolage Grotesque\", sans-serif;\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 32px;\n  letter-spacing: -0.64px;\n  margin: 0;\n}\n.sn-plan-popup__close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sn-plan-popup__close svg {\n  width: 32px;\n  height: 32px;\n}\n.sn-plan-popup__billing {\n  display: flex;\n  background: rgba(0, 0, 0, 0.03);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 999px;\n  padding: 7px;\n}\n.sn-plan-popup__billing-tab {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 10px 17px;\n  border-radius: 999px;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.55);\n  cursor: pointer;\n}\n.sn-plan-popup__billing-tab--active {\n  background: #fff;\n  box-shadow: 0 6px 9px rgba(0, 0, 0, 0.08);\n  color: rgba(0, 0, 0, 0.86);\n}\n.sn-plan-popup__billing-badge {\n  background: rgba(16, 185, 129, 0.14);\n  color: rgba(16, 185, 129, 0.95);\n  font-family: \"Inter\", sans-serif;\n  font-weight: 800;\n  font-size: 11px;\n  padding: 6px;\n  border-radius: 999px;\n  text-align: center;\n}\n.sn-plan-popup__included {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.sn-plan-popup__included-title {\n  color: #253627;\n  font-family: \"Bricolage Grotesque\", sans-serif;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n}\n.sn-plan-popup__included-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px 16px;\n}\n.sn-plan-popup__included-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  color: #545454;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 22.4px;\n}\n.sn-plan-popup__included-item svg {\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.sn-plan-popup__plans {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.sn-plan-popup__plan {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 17px 13px;\n  border-radius: 18px;\n  background: rgba(0, 0, 0, 0.03);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;\n}\n.sn-plan-popup__plan--selected {\n  background: #fff;\n  border-color: #1b4241;\n  box-shadow: 0 6px 9px rgba(0, 0, 0, 0.08);\n}\n.sn-plan-popup__plan-radio {\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(0, 0, 0, 0.2);\n  position: relative;\n  transition: border-color 0.2s ease;\n}\n.sn-plan-popup__plan-radio::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #1b4241;\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform 0.2s ease;\n}\n.sn-plan-popup__plan--selected .sn-plan-popup__plan-radio {\n  border-color: #1b4241;\n}\n.sn-plan-popup__plan--selected .sn-plan-popup__plan-radio::after {\n  transform: translate(-50%, -50%) scale(1);\n}\n.sn-plan-popup__plan-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sn-plan-popup__plan-name {\n  color: #253627;\n  font-family: \"Bricolage Grotesque\", sans-serif;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n}\n.sn-plan-popup__plan-badge {\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 13px;\n  line-height: 13px;\n  white-space: nowrap;\n}\n.sn-plan-popup__plan-badge--purple {\n  background: rgba(109, 92, 255, 0.14);\n  color: #6d5cff;\n}\n.sn-plan-popup__plan-badge--teal {\n  background: rgba(16, 185, 129, 0.14);\n  color: #059da4;\n}\n.sn-plan-popup__plan-price {\n  color: #253627;\n  font-family: \"Bricolage Grotesque\", sans-serif;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  white-space: nowrap;\n}\n.sn-plan-popup__plan-price span:not(.sn-plan-popup__plan-price-val) {\n  color: rgba(0, 0, 0, 0.55);\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n}\n.sn-plan-popup__timeline {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 20px;\n}\n.sn-plan-popup__step {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  position: relative;\n}\n.sn-plan-popup__step:not(:last-child)::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 14px;\n  display: block;\n  width: 2px;\n  height: 100%;\n  background: #1fcd5d;\n  z-index: 0;\n}\n.sn-plan-popup__step-left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 1;\n}\n.sn-plan-popup__circle {\n  width: 30px;\n  height: 30px;\n  flex-shrink: 0;\n}\n.sn-plan-popup__circle svg {\n  display: block;\n}\n.sn-plan-popup__line {\n  width: 1.5px;\n  min-height: 41px;\n  background: rgba(31, 205, 93, 0.3);\n  margin: 4px 0;\n}\n.sn-plan-popup__step-content {\n  flex: 1;\n  padding-top: 4px;\n  padding-bottom: 24px;\n}\n.sn-plan-popup__step:last-child .sn-plan-popup__step-content {\n  padding-bottom: 0;\n}\n.sn-plan-popup__step-title {\n  color: #0b051d;\n  font-family: \"Bricolage Grotesque\", sans-serif;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 20px;\n  letter-spacing: -0.4px;\n  margin-bottom: 8px;\n}\n.sn-plan-popup__step-desc {\n  color: #5f6368;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 22.4px;\n}\n.sn-plan-popup__price-summary {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.sn-plan-popup__price-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sn-plan-popup__price-label {\n  color: #253627;\n  font-family: \"Bricolage Grotesque\", sans-serif;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 20px;\n  letter-spacing: -0.4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sn-plan-popup__price-note {\n  color: #5f6368;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 14px;\n}\n.sn-plan-popup__price-val {\n  color: #253627;\n  font-family: \"Bricolage Grotesque\", sans-serif;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 20px;\n  letter-spacing: -0.4px;\n}\n.sn-plan-popup__price-sub {\n  color: #5f6368;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 14px;\n}\n.sn-plan-popup__cta {\n  width: 100%;\n  background: #1b4241;\n  border: 2px solid #1b4241;\n  border-radius: 60px;\n  padding: 16px 26px;\n  color: #cfff90;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: opacity 0.2s ease;\n}\n.sn-plan-popup__cta svg {\n  flex-shrink: 0;\n}\n.sn-plan-popup__cta:hover {\n  opacity: 0.9;\n}\n.sn-plan-popup__fine-print {\n  color: #5f6368;\n  font-family: \"Inter\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 22px;\n  text-align: center;\n  margin: 0;\n  letter-spacing: -0.04px;\n}\n@media (min-width: 768px) {\n  .sn-plan-popup__overlay {\n    backdrop-filter: blur(6px);\n  }\n  .sn-plan-popup__card {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: auto;\n    width: 481px;\n    max-height: 100%;\n    border-radius: 0;\n    transform: translateX(100%);\n    transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1);\n  }\n  .sn-plan-popup.active .sn-plan-popup__card {\n    transform: translateX(0);\n  }\n  .sn-plan-popup__body {\n    padding: 32px 42px 0;\n    gap: 24px;\n  }\n  .sn-plan-popup__footer {\n    padding: 15px 42px 20px;\n  }\n}\n\n.pp-wrap {\n  display: none !important;\n}\n\n.sn-cta {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding-top: 10px;\n}\n.sn-cta__label {\n  color: #1c1917;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.56px;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n.sn-cta__colour-options {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.sn-cta__colour-btn {\n  background: #faf0e4;\n  border: 2px solid transparent;\n  border-radius: 12px;\n  padding: 12px 20px;\n  color: #1c1917;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 14px;\n  cursor: pointer;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.sn-cta__colour-btn--active {\n  background: rgba(31, 205, 93, 0.08);\n  border-color: #1fcd5d;\n}\n.sn-cta__qty-label {\n  color: #1c1917;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.56px;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n.sn-cta__action {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: stretch;\n}\n.sn-cta__qty {\n  display: flex;\n  align-items: stretch;\n  height: 52px;\n  width: 144px;\n}\n.sn-cta__qty-btn {\n  flex-shrink: 0;\n  width: 46px;\n  background: #faf0e4;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  color: #1c1917;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 20px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.15s ease;\n}\n.sn-cta__qty-btn:active {\n  opacity: 0.7;\n}\n.sn-cta__qty-btn--dec {\n  border-radius: 20px 0 0 20px;\n}\n.sn-cta__qty-btn--inc {\n  border-radius: 0 20px 20px 0;\n}\n.sn-cta__qty-val {\n  flex: 1;\n  background: #fff8f0;\n  border-top: 1px solid rgba(0, 0, 0, 0.04);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n  border-left: none;\n  border-right: none;\n  color: #1c1917;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sn-cta__main-btn {\n  width: 100%;\n  background: #1b4241;\n  border: 2px solid #1b4241;\n  border-radius: 60px;\n  padding: 18px 26px;\n  color: #cfff90;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 16px;\n  cursor: pointer;\n  text-align: center;\n  transition: opacity 0.2s ease;\n}\n.sn-cta__main-btn:hover {\n  opacity: 0.9;\n}\n.sn-cta__links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 8px;\n  align-items: center;\n  justify-content: center;\n}\n.sn-cta__link-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #1c1917;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  white-space: nowrap;\n}\n.sn-cta__link-item svg {\n  display: block;\n  flex-shrink: 0;\n}\n.sn-cta__how-works {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: #34a853;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  text-decoration: underline;\n  white-space: nowrap;\n}\n.sn-cta__how-works svg {\n  display: block;\n  flex-shrink: 0;\n}\n.sn-cta__dot {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: #1c1917;\n  flex-shrink: 0;\n}\n@media (min-width: 768px) {\n  .sn-cta__qty-label {\n    display: none;\n  }\n  .sn-cta__action {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .sn-cta__main-btn {\n    width: 392px;\n    flex-shrink: 0;\n  }\n  .sn-cta__links {\n    gap: 8px 16px;\n  }\n}\n\n.sn-features {\n  background: #faf0e4;\n  padding: 16px 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.sn-features__item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.sn-features__icon {\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n}\n.sn-features__icon svg {\n  width: 32px;\n  height: 32px;\n  display: block;\n}\n.sn-features__text {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 4px;\n}\n.sn-features__title {\n  color: #253627;\n  font-family: \"Bricolage Grotesque\", sans-serif;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 20px;\n  letter-spacing: -0.4px;\n}\n.sn-features__desc {\n  color: #545454;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 22.4px;\n}\n\n.newProduct_text_side {\n  text-align: left;\n}\n\n[data-option-value=Engraved], .price, .pawtag-variant-picker, .quantity_select, .buy_button, .shipping, [class*=ai-green-button-container-],\n#shopify-section-template--28332778750298__pawtag_tag_arrival_KDrRBw,\n#shopify-section-template--28332778750298__blocks_V6KxmT {\n  display: none !important;\n}/*# sourceMappingURL=style.css.map */", t = (e, t, n, r = "") => {
		window.dataLayer = window.dataLayer || [], window.dataLayer.push({
			event: "event-to-ga4",
			event_name: e,
			event_desc: t,
			event_type: n,
			event_loc: r
		}), o(`Event: ${e} | ${t} | ${n} | ${r}`, "success");
	}, n = (e) => new Promise((t) => {
		let n = document.querySelector(e);
		n && t(n);
		let r = new MutationObserver(() => {
			let n = document.querySelector(e);
			n && (t(n), r.disconnect());
		});
		r.observe(document.documentElement, {
			childList: !0,
			subtree: !0
		});
	}), r = ({ name: e, dev: n }) => {
		let r = e.toLowerCase().replace(/\s/g, "_");
		t(`${r}_started`, `Experiment ${e} started`, "other", r), console.log(`%c EXP: ${e} (DEV: ${n})`, "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;");
	}, i = class e {
		elements;
		constructor(t) {
			this.elements = t instanceof e ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
		}
		on(e, t, n) {
			return typeof t == "function" && (n = t, t = ""), this.elements.forEach((r) => {
				r.addEventListener(e, function(e) {
					if (t !== "") {
						let r = e.target?.closest(t);
						r && n?.call(r, e);
					} else n?.call(r, e);
				});
			}), this;
		}
		addClass(e) {
			return this.elements.forEach(function(t) {
				t.classList.add(e);
			}), this;
		}
		removeClass(e) {
			return this.elements.forEach(function(t) {
				t.classList.remove(e);
			}), this;
		}
		toggleClass(e) {
			return this.elements.forEach(function(t) {
				t.classList.toggle(e);
			}), this;
		}
		each(t) {
			for (let n of this.elements) t(new e(n), this.elements.indexOf(n));
			return this;
		}
		style(e, t) {
			let n = e.split("-").map((e, t) => t === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)).join("");
			return this.elements.forEach(function(e) {
				e.style[n] = t;
			}), this;
		}
		find(t) {
			return new e(this.elements.map((e) => Array.from(e.querySelectorAll(t))).flat());
		}
		attr(e, t) {
			return t ? (this.elements.forEach(function(n) {
				n.setAttribute(e, t);
			}), this) : this.elements[0].getAttribute(e);
		}
		text(e) {
			return e ? (this.elements.forEach(function(t) {
				t.textContent = e;
			}), this) : this.elements[0].textContent || "";
		}
		html(e) {
			return e ? (this.elements.forEach(function(t) {
				t.innerHTML = e;
			}), this) : this.elements[0].innerHTML;
		}
	}, a = (e) => new i(e), o = (e, t = "info") => {
		let n;
		switch (t) {
			case "info":
				n = "color: #3498db;";
				break;
			case "warn":
				n = "color: #f39c12;";
				break;
			case "error":
				n = "color: #e74c3c;";
				break;
			case "success":
				n = "color: #2ecc71;";
				break;
		}
		console.log(`%c>>> ${e}`, `${n} font-size: 16px; font-weight: 600`);
	}, s = {
		close_white: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\">\n		<g clip-path=\"url(#clip0_97_915)\">\n		<path d=\"M16 0C7.17371 0 0 7.17371 0 16C0 24.8263 7.17371 32 16 32C24.8263 32 32 24.8263 32 16C32 7.17371 24.8263 0 16 0ZM16 30.385C8.07512 30.385 1.61502 23.9249 1.61502 16C1.61502 8.07512 8.07512 1.61502 16 1.61502C23.9249 1.61502 30.385 8.07512 30.385 16C30.385 23.9249 23.9249 30.385 16 30.385Z\" fill=\"white\"/>\n		<path d=\"M17.1268 15.9249L21.8217 11.23C22.1221 10.9296 22.1221 10.4038 21.8217 10.1033C21.5212 9.80281 20.9954 9.80281 20.6949 10.1033L16.0001 14.7981L11.3052 10.1033C11.0048 9.80281 10.4789 9.80281 10.1785 10.1033C9.87801 10.4038 9.87801 10.9296 10.1785 11.23L14.8733 15.9249L10.1785 20.5822C9.87801 20.8826 9.87801 21.4084 10.1785 21.7089C10.3287 21.8592 10.5541 21.9343 10.7419 21.9343C10.9297 21.9343 11.155 21.8592 11.3052 21.7089L16.0001 17.0141L20.6949 21.7089C20.8451 21.8592 21.0705 21.9343 21.2583 21.9343C21.4461 21.9343 21.6714 21.8592 21.8217 21.7089C22.1221 21.4084 22.1221 20.8826 21.8217 20.5822L17.1268 15.9249Z\" fill=\"white\"/>\n		</g>\n		<defs>\n		<clipPath id=\"clip0_97_915\">\n		<rect width=\"32\" height=\"32\" fill=\"white\"/>\n		</clipPath>\n		</defs>\n		</svg>",
		close_dark: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\">\n		<g clip-path=\"url(#clip0_47_362)\">\n		<path d=\"M16 0C7.17371 0 0 7.17371 0 16C0 24.8263 7.17371 32 16 32C24.8263 32 32 24.8263 32 16C32 7.17371 24.8263 0 16 0ZM16 30.385C8.07512 30.385 1.61502 23.9249 1.61502 16C1.61502 8.07512 8.07512 1.61502 16 1.61502C23.9249 1.61502 30.385 8.07512 30.385 16C30.385 23.9249 23.9249 30.385 16 30.385Z\" fill=\"#254141\"/>\n		<path d=\"M17.1268 15.9249L21.8217 11.23C22.1221 10.9296 22.1221 10.4038 21.8217 10.1033C21.5212 9.80281 20.9954 9.80281 20.6949 10.1033L16.0001 14.7981L11.3052 10.1033C11.0048 9.80281 10.4789 9.80281 10.1785 10.1033C9.87801 10.4038 9.87801 10.9296 10.1785 11.23L14.8733 15.9249L10.1785 20.5822C9.87801 20.8826 9.87801 21.4084 10.1785 21.7089C10.3287 21.8592 10.5541 21.9343 10.7419 21.9343C10.9297 21.9343 11.155 21.8592 11.3052 21.7089L16.0001 17.0141L20.6949 21.7089C20.8451 21.8592 21.0705 21.9343 21.2583 21.9343C21.4461 21.9343 21.6714 21.8592 21.8217 21.7089C22.1221 21.4084 22.1221 20.8826 21.8217 20.5822L17.1268 15.9249Z\" fill=\"#254141\"/>\n		</g>\n		<defs>\n		<clipPath id=\"clip0_47_362\">\n		<rect width=\"32\" height=\"32\" fill=\"white\"/>\n		</clipPath>\n		</defs>\n		</svg>",
		instant: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\">\n		<path d=\"M13.3193 26.3772H17.6369V28.2522H13.3193V26.3772Z\" fill=\"#34A853\"/>\n		<path d=\"M25.9349 32H5.3335V0H25.9348V32H25.9349ZM7.2085 30.125H24.0598V1.875H7.2085V30.125Z\" fill=\"#34A853\"/>\n		<path d=\"M17.6367 3.7478H19.5117V5.6228H17.6367V3.7478Z\" fill=\"#34A853\"/>\n		<path d=\"M11.7563 3.7478H15.7579V5.6228H11.7563V3.7478Z\" fill=\"#34A853\"/>\n		<path d=\"M15.634 17.6714C14.0303 17.6714 12.7256 16.3667 12.7256 14.7631C12.7256 13.1594 14.0303 11.8547 15.634 11.8547C17.2376 11.8547 18.5423 13.1594 18.5423 14.7631C18.5423 16.3667 17.2376 17.6714 15.634 17.6714ZM15.634 13.7297C15.0641 13.7297 14.6006 14.1933 14.6006 14.7631C14.6006 15.3329 15.0641 15.7964 15.634 15.7964C16.2038 15.7964 16.6673 15.3329 16.6673 14.7631C16.6673 14.1933 16.2038 13.7297 15.634 13.7297Z\" fill=\"#34A853\"/>\n		<path d=\"M15.6358 23.8994C15.6358 23.8994 11.7876 20.3447 10.7759 19.1346C9.66615 17.8072 9.08602 16.2777 9.09834 14.7112C9.11202 12.971 9.79715 11.3405 11.0275 10.1201C12.2578 8.89985 13.8937 8.22778 15.634 8.22778C19.238 8.22778 22.1699 11.1598 22.1699 14.7637C22.1699 16.3587 21.5826 17.8783 20.4715 19.1582C19.3516 20.4481 15.6358 23.8994 15.6358 23.8994ZM15.634 10.1027C14.3917 10.1027 13.2246 10.5817 12.348 11.4513C11.4712 12.3209 10.983 13.4838 10.9733 14.726C10.9622 16.1356 11.6421 17.2475 12.2143 17.932C12.8856 18.7348 14.6694 20.4344 15.6323 21.3385C16.5728 20.4512 18.3035 18.7953 19.0555 17.929C19.6209 17.2777 20.2948 16.1999 20.2948 14.7636C20.2949 12.1936 18.204 10.1027 15.634 10.1027Z\" fill=\"#34A853\"/>\n		</svg>",
		no_batteriees: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\">\n		<path d=\"M4.18555 10.8027C4.18555 10.2236 4.65674 9.75195 5.23584 9.75195H16.4457H17.4453C17.9976 9.75195 18.4453 9.30469 18.4453 8.75195C18.4453 8.19922 17.9976 7.75195 17.4453 7.75195H5.23584C3.55371 7.75195 2.18555 9.12012 2.18555 10.8027V21.1973C2.18555 21.9189 2.4458 22.6201 2.91895 23.1709C3.1167 23.4014 3.39648 23.5195 3.67822 23.5195C3.90869 23.5195 4.14062 23.4404 4.3291 23.2783C4.74805 22.9189 4.79639 22.2871 4.43652 21.8682C4.42255 21.8518 4.40967 21.8215 4.39526 21.8024C4.2923 21.6655 4.18555 21.4715 4.18555 21.1973V10.8027Z\" fill=\"#34A853\"/>\n		<path d=\"M29.707 2.29297C29.3164 1.90234 28.6836 1.90234 28.293 2.29297L22.5429 8.04303C22.5415 8.04443 22.5402 8.04572 22.5388 8.04712L2.29297 28.293C1.90234 28.6836 1.90234 29.3164 2.29297 29.707C2.48828 29.9023 2.74414 30 3 30C3.25586 30 3.51172 29.9023 3.70703 29.707L9.16602 24.248H24.7241C26.4062 24.248 27.7744 22.8799 27.7744 21.1973V20.0957H28.8145C29.3667 20.0957 29.8145 19.6484 29.8145 19.0957V12.9043C29.8145 12.3516 29.3667 11.9043 28.8145 11.9043H27.7744V10.8027C27.7744 9.40387 26.8234 8.23492 25.5379 7.87616L29.707 3.70703C30.0977 3.31641 30.0977 2.68359 29.707 2.29297ZM24.7241 9.75195C25.3032 9.75195 25.7744 10.2236 25.7744 10.8027V12.9043C25.7744 13.457 26.2222 13.9043 26.7744 13.9043H27.8145V18.0957H26.7744C26.2222 18.0957 25.7744 18.543 25.7744 19.0957V21.1973C25.7744 21.7764 25.3032 22.248 24.7241 22.248H11.166L23.6621 9.75195H24.7241Z\" fill=\"#34A853\"/>\n		</svg>",
		durable: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\">\n		<g clip-path=\"url(#clip0_97_250)\">\n		<path d=\"M1.62685 4.83473C1.78717 4.66603 1.99073 4.54501 2.21547 4.48472C2.6797 4.36038 3.18247 4.51464 3.49693 4.87765C3.68231 5.09152 3.94329 5.20117 4.2057 5.20111C4.30348 5.20111 4.40132 5.18499 4.49567 5.15431C4.85362 5.07877 5.14952 4.79693 5.22312 4.41511C5.31403 3.94345 5.67254 3.55845 6.13645 3.43412C6.36138 3.37395 6.59811 3.37689 6.82123 3.44287C7.31725 3.58944 7.8389 3.30616 7.98566 2.80976C8.13243 2.31342 7.84896 1.79209 7.35256 1.64532C6.79823 1.48144 6.20999 1.47388 5.65136 1.62358C4.92453 1.81833 4.30211 2.27087 3.88468 2.87236C3.22252 2.56022 2.45721 2.47949 1.73032 2.67418C1.17193 2.82388 0.666224 3.12453 0.26804 3.54365C-0.0884691 3.91884 -0.073349 4.51208 0.301904 4.86859C0.677095 5.22504 1.27028 5.21004 1.62685 4.83473Z\" fill=\"#34A853\"/>\n		<path d=\"M31.0628 30.1201H20.7536V25.3893C25.7245 24.9174 29.6258 20.7326 29.6258 15.6561C29.6258 13.2638 28.7658 10.9957 27.1931 9.21115C27.3167 8.66589 27.3791 8.10738 27.3791 7.54419C27.3791 3.38697 23.9865 0.00488281 19.8164 0.00488281C15.6464 0.00488281 12.2538 3.38697 12.2538 7.54419C12.2538 8.10738 12.3162 8.66589 12.4398 9.21115C12.0522 9.65094 11.7081 10.1202 11.4094 10.6134L9.89173 7.84584C9.72716 7.54581 9.4122 7.35925 9.07 7.35925C8.7278 7.35925 8.41277 7.54575 8.24826 7.84584L2.92899 17.5459C2.76979 17.8362 2.7756 18.189 2.9443 18.474C3.11299 18.759 3.41958 18.9337 3.75072 18.9337H4.82187L0.750632 26.358C0.591433 26.6484 0.597244 27.0012 0.765939 27.2862C0.934634 27.5711 1.24122 27.7458 1.57237 27.7458H6.25835V30.1201H0.937196C0.419614 30.1201 0 30.5397 0 31.0573C0 31.5748 0.419614 31.9944 0.937196 31.9944H31.0628C31.5804 31.9944 32 31.5748 32 31.0573C32 30.5397 31.5804 30.1201 31.0628 30.1201ZM16.5675 27.7458C16.8986 27.7458 17.2052 27.5711 17.3739 27.2862C17.5426 27.0013 17.5485 26.6485 17.3893 26.3581L16.5832 24.8878C17.3134 25.1425 18.0825 25.3137 18.8793 25.3893V30.1201H11.8815V27.7458H16.5675ZM14.3742 9.1969C14.211 8.66289 14.1282 8.10682 14.1282 7.54419C14.1282 4.42051 16.6799 1.87928 19.8164 1.87928C22.953 1.87928 25.5047 4.42058 25.5047 7.54419C25.5047 8.10682 25.422 8.66289 25.2587 9.1969C25.1583 9.52555 25.2457 9.8828 25.4865 10.1279C26.947 11.6138 27.7513 13.5771 27.7513 15.656C27.7513 19.6982 24.6888 23.041 20.7536 23.5043V15.7453L24.9132 13.3437C25.3615 13.0849 25.5151 12.5117 25.2562 12.0635C24.9975 11.6152 24.4242 11.4617 23.976 11.7205L20.7536 13.581V8.37717C20.7536 7.85959 20.334 7.43997 19.8164 7.43997C19.2988 7.43997 18.8792 7.85959 18.8792 8.37717V17.2334L15.9519 14.3061C15.5859 13.9401 14.9925 13.9401 14.6265 14.3061C14.2605 14.6721 14.2605 15.2655 14.6265 15.6315L18.7189 19.7239C18.7685 19.7735 18.8224 19.8157 18.8791 19.8518V23.5044C14.9439 23.041 11.8814 19.6983 11.8814 15.6561C11.8814 13.5771 12.6857 11.6138 14.1462 10.1279C14.3872 9.88274 14.4746 9.52555 14.3742 9.1969ZM7.22641 18.4472C7.38561 18.1568 7.37979 17.804 7.2111 17.519C7.0424 17.234 6.73582 17.0594 6.40467 17.0594H5.33352L9.06993 10.2456L10.4456 12.7543C10.1572 13.6826 10.0071 14.6584 10.0071 15.656C10.0071 18.6485 11.3631 21.3308 13.4943 23.1259C13.5107 23.1715 14.985 25.8714 14.985 25.8714H3.15516L7.22641 18.4472ZM8.13274 27.7458H10.0071V30.1201H8.13274V27.7458Z\" fill=\"#34A853\"/>\n		</g>\n		<defs>\n		<clipPath id=\"clip0_97_250\">\n		<rect width=\"32\" height=\"32\" fill=\"white\"/>\n		</clipPath>\n		</defs>\n		</svg>",
		safe: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\">\n		<g clip-path=\"url(#clip0_97_258)\">\n		<path d=\"M16 32C15.8569 32 15.7139 31.9692 15.5811 31.9082L12.586 30.5259C6.1553 27.5576 2 21.0635 2 13.981V4.00005C2 3.49175 2.3813 3.06405 2.8867 3.00635C4.8618 2.78075 6.8467 2.45015 8.7851 2.02345C11.1094 1.51175 13.4243 0.85015 15.6665 0.05715C15.8823 -0.01905 16.1177 -0.01905 16.3335 0.05715C18.5757 0.85015 20.8906 1.51175 23.2148 2.02345C25.1533 2.45025 27.1381 2.78075 29.1132 3.00635C29.6186 3.06395 29.9999 3.49175 29.9999 4.00005V13.981C29.9999 21.0635 25.8446 27.5577 19.414 30.5259L16.4189 31.9082C16.2861 31.9692 16.143 32 16 32ZM4 4.88575V13.981C4 20.2862 7.6992 26.0674 13.4238 28.7095L16 29.8986L18.5762 28.7095C24.3008 26.0674 28 20.2862 28 13.981V4.88575C26.2505 4.65915 24.5005 4.35405 22.7852 3.97655C20.4961 3.47265 18.2149 2.82815 16 2.05955C13.7852 2.82815 11.5039 3.47265 9.2148 3.97655C7.4995 4.35395 5.7495 4.65915 4 4.88575Z\" fill=\"#34A853\"/>\n		<path d=\"M20 23H12C10.897 23 10 22.103 10 21V14C10 12.897 10.897 12 12 12H20C21.103 12 22 12.897 22 14V21C22 22.103 21.103 23 20 23ZM12 14V21H20.0015L20 14H12Z\" fill=\"#34A853\"/>\n		<path d=\"M19 14H13C12.4478 14 12 13.5522 12 13V11C12 8.7944 13.7944 7 16 7C18.2056 7 20 8.7944 20 11V13C20 13.5522 19.5522 14 19 14ZM14 12H18V11C18 9.897 17.103 9 16 9C14.897 9 14 9.897 14 11V12Z\" fill=\"#34A853\"/>\n		</g>\n		<defs>\n		<clipPath id=\"clip0_97_258\">\n		<rect width=\"32\" height=\"32\" fill=\"white\"/>\n		</clipPath>\n		</defs>\n		</svg>",
		cancel: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\n		<g clip-path=\"url(#clip0_97_297)\">\n		<path d=\"M14.7049 4.11971C14.6967 3.68773 14.6889 3.27965 14.6889 2.88486C14.6889 2.57556 14.4382 2.32481 14.1288 2.32481C11.7337 2.32481 9.91017 1.63649 8.39014 0.158576C8.1727 -0.0528959 7.82667 -0.0528212 7.6093 0.158576C6.08942 1.63649 4.26615 2.32481 1.87119 2.32481C1.5619 2.32481 1.31115 2.57556 1.31115 2.88486C1.31115 3.27972 1.30338 3.68795 1.29509 4.12001C1.21833 8.14006 1.11319 13.6457 7.81629 15.9691C7.87573 15.9897 7.9377 16 7.99968 16C8.06166 16 8.12371 15.9897 8.18308 15.9691C14.8867 13.6456 14.7817 8.13983 14.7049 4.11971ZM7.99976 14.8457C2.25097 12.7573 2.33789 8.18254 2.41503 4.14136C2.41966 3.89883 2.42414 3.66376 2.42727 3.43332C4.67042 3.33864 6.4642 2.6589 7.99976 1.32122C9.53546 2.6589 11.3295 3.33871 13.5728 3.43332C13.576 3.66369 13.5805 3.8986 13.5851 4.14099C13.6621 8.18232 13.749 12.7573 7.99976 14.8457Z\" fill=\"#1C1917\"/>\n		<path d=\"M9.92825 6.05462L7.22519 8.75753L6.07173 7.60407C5.85302 7.38543 5.4984 7.38543 5.27976 7.60407C5.06104 7.82286 5.06104 8.1774 5.27976 8.39612L6.82921 9.94556C6.93853 10.0549 7.0819 10.1095 7.22519 10.1095C7.36849 10.1095 7.51186 10.0549 7.62118 9.94556L10.7201 6.84667C10.9389 6.62796 10.9389 6.27334 10.7202 6.0547C10.5016 5.83598 10.147 5.83591 9.92825 6.05462Z\" fill=\"#1C1917\"/>\n		</g>\n		<defs>\n		<clipPath id=\"clip0_97_297\">\n		<rect width=\"16\" height=\"16\" fill=\"white\"/>\n		</clipPath>\n		</defs>\n		</svg>",
		circle_active: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\">\n		<circle cx=\"15\" cy=\"15\" r=\"14\" fill=\"#1B4D43\"  stroke=\"#1fcd5d\" stroke-width=\"2\"/>\n		<circle cx=\"15\" cy=\"15\" r=\"8\" fill=\"#1fcd5d\"/>\n		</svg>",
		circle_active_light: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\">\n		<circle cx=\"15\" cy=\"15\" r=\"14\" fill=\"#EDF5E4\"  stroke=\"#1fcd5d\" stroke-width=\"2\"/>\n		<circle cx=\"15\" cy=\"15\" r=\"8\" fill=\"#1fcd5d\"/>\n		</svg>",
		circle_inactive: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\">\n		<circle cx=\"15\" cy=\"15\" r=\"14\" stroke=\"#1fcd5d\" stroke-width=\"2\" fill=\"#1B4D43\"/>\n		</svg>",
		circle_inactive_light: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\">\n		<circle cx=\"15\" cy=\"15\" r=\"14\" stroke=\"#1fcd5d\" stroke-width=\"2\" fill=\"#EDF5E4\"/>\n		</svg>",
		how_works: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\n		<g clip-path=\"url(#clip0_97_304)\">\n		<path d=\"M8.18219 1.1875C9.69094 1.1875 11.7756 1.38594 12.4444 1.51969C12.4466 1.52 12.4487 1.52062 12.4509 1.52094C13.3625 1.69781 14.2975 2.59063 14.4966 3.47312C14.7097 4.50281 14.81 5.52906 14.8122 6.7025C14.81 7.87562 14.7097 8.90219 14.4966 9.93188C14.2975 10.8141 13.3625 11.7072 12.4509 11.8841C12.4487 11.8844 12.4466 11.885 12.4444 11.8853C12.0444 11.9653 11.2038 12.0603 10.3022 12.1275C9.92875 12.1553 9.59 12.3578 9.38875 12.6737C9.28094 12.8428 9.16594 13.0203 9.04656 13.2013C8.65 13.8019 8.29844 14.3013 8 14.6888C7.70156 14.3013 7.35 13.8019 6.95344 13.2013C6.83406 13.0203 6.71875 12.8428 6.61125 12.6737C6.41 12.3578 6.07156 12.1553 5.69781 12.1275C4.79656 12.0603 3.95563 11.9653 3.55562 11.8853C3.55344 11.885 3.55125 11.8844 3.54906 11.8841C2.6375 11.7072 1.7025 10.8144 1.50344 9.93188C1.29031 8.90219 1.19 7.87594 1.18781 6.7025C1.19 5.52906 1.29031 4.50281 1.50344 3.47312C1.7025 2.59094 2.6375 1.69813 3.54906 1.52125C3.55125 1.52094 3.55344 1.52031 3.55562 1.52C4.22469 1.38625 6.30906 1.18781 7.81781 1.18781C7.87531 1.18781 7.93156 1.18781 7.98688 1.18875H8C8 1.18875 8.00875 1.18875 8.01313 1.18875C8.06844 1.18813 8.12469 1.18781 8.18219 1.18781M7.81781 0C6.29031 0 4.12063 0.195625 3.32281 0.355C1.96031 0.619375 0.643125 1.86406 0.342187 3.22281C0.170937 4.04781 0.0025 5.17031 0 6.7025C0.0025 8.23469 0.170937 9.35688 0.342187 10.1819C0.643125 11.5406 1.96031 12.7853 3.32281 13.0497C3.77094 13.1394 4.6525 13.2403 5.60938 13.3116C5.71781 13.4819 5.83531 13.6631 5.9625 13.8553C6.47031 14.6244 6.85906 15.1603 7.15344 15.5337C7.39844 15.8444 7.69938 15.9997 8 15.9997C8.30062 15.9997 8.60156 15.8444 8.84656 15.5337C9.14094 15.1603 9.52938 14.6244 10.0375 13.8553C10.1647 13.6628 10.2819 13.4819 10.3906 13.3116C11.3478 13.2403 12.2291 13.1394 12.6775 13.0497C14.04 12.7853 15.3572 11.5406 15.6581 10.1819C15.8294 9.35688 15.9978 8.23469 16.0003 6.7025C15.9978 5.17031 15.8294 4.04812 15.6581 3.22312C15.3572 1.86437 14.04 0.619687 12.6775 0.355312C11.8794 0.195625 9.70969 0 8.18219 0C8.12031 0 8.05969 0.0003125 8 0.0009375C7.94063 0.0003125 7.87969 0 7.81781 0Z\" fill=\"#34A853\"/>\n		<path d=\"M8.88361 11.3635C8.84986 11.5538 8.67736 11.7263 8.48705 11.7601C8.37174 11.7791 8.21455 11.7973 7.99986 11.7976C7.78549 11.7976 7.6283 11.7795 7.51268 11.7601C7.32236 11.7263 7.14986 11.5538 7.11611 11.3635C7.09705 11.2482 7.07893 11.091 7.07861 10.8763C7.07861 10.662 7.09674 10.5048 7.11611 10.3891C7.14986 10.1988 7.32236 10.0263 7.51268 9.99258C7.62799 9.97352 7.78518 9.95539 7.99986 9.95508C8.21424 9.95508 8.37143 9.9732 8.48705 9.99258C8.67736 10.0263 8.84986 10.1988 8.88361 10.3891C8.90268 10.5045 8.9208 10.6616 8.92111 10.8763C8.92111 11.0907 8.90299 11.2479 8.88361 11.3635Z\" fill=\"#34A853\"/>\n		<path d=\"M7.96744 9.01281C7.66869 9.01281 7.4115 8.78781 7.37807 8.48406C7.37369 8.44281 7.33713 8.06938 7.45182 7.62187C7.61525 6.98469 7.99963 6.49937 8.56338 6.21937C9.59525 5.70625 9.67525 5.12625 9.67525 4.96062C9.67525 4.83687 9.6265 4.56688 9.44432 4.34031C9.19994 4.03688 8.77682 3.88313 8.1865 3.88313C7.59619 3.88313 7.20463 4.08313 6.89869 4.49469C6.66994 4.80219 6.59713 5.11156 6.5965 5.11437C6.52869 5.43531 6.21369 5.64031 5.89275 5.57219C5.57182 5.50438 5.36682 5.18906 5.43494 4.86844C5.44682 4.81188 5.56307 4.30094 5.94588 3.78594C6.31588 3.28844 7.00494 2.69531 8.18682 2.69531C10.304 2.69531 10.8634 4.17688 10.8634 4.96C10.8634 5.39344 10.6909 6.4875 9.09275 7.28187C8.4815 7.58562 8.55807 8.34563 8.559 8.35313C8.59494 8.67906 8.35994 8.9725 8.034 9.00844C8.01182 9.01094 7.98994 9.01219 7.96807 9.01219L7.96744 9.01281Z\" fill=\"#34A853\"/>\n		</g>\n		<defs>\n		<clipPath id=\"clip0_97_304\">\n		<rect width=\"16\" height=\"16\" fill=\"white\"/>\n		</clipPath>\n		</defs>\n		</svg>",
		shipping: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\n		<path d=\"M15.105 11.8906C13.7149 11.8906 12.584 13.0215 12.584 14.4116C12.584 15.8018 13.7149 16.9327 15.105 16.9327C16.4954 16.9327 17.626 15.8018 17.626 14.4116C17.626 13.0215 16.4951 11.8906 15.105 11.8906ZM15.105 15.6721C14.4098 15.6721 13.8445 15.1068 13.8445 14.4116C13.8445 13.7165 14.4098 13.1511 15.105 13.1511C15.8002 13.1511 16.3655 13.7165 16.3655 14.4116C16.3655 15.1068 15.8002 15.6721 15.105 15.6721Z\" fill=\"#34A853\"/>\n		<path d=\"M6.49172 11.8906C5.1016 11.8906 3.9707 13.0215 3.9707 14.4116C3.9707 15.8018 5.1016 16.9327 6.49172 16.9327C7.88184 16.9327 9.01273 15.8018 9.01273 14.4116C9.01273 13.0215 7.88184 11.8906 6.49172 11.8906ZM6.49172 15.6721C5.79656 15.6721 5.23121 15.1068 5.23121 14.4116C5.23121 13.7165 5.79656 13.1511 6.49172 13.1511C7.18668 13.1511 7.75223 13.7165 7.75223 14.4116C7.75223 15.1068 7.18687 15.6721 6.49172 15.6721Z\" fill=\"#34A853\"/>\n		<path d=\"M16.8025 4.6752C16.6954 4.46238 16.4775 4.32812 16.2393 4.32812H12.9199V5.58863H15.8506L17.5668 9.00207L18.6932 8.43566L16.8025 4.6752Z\" fill=\"#34A853\"/>\n		<path d=\"M13.2142 13.8025H8.44531V15.063H13.2142V13.8025Z\" fill=\"#34A853\"/>\n		<path d=\"M4.60072 13.8025H2.41588C2.06775 13.8025 1.78564 14.0846 1.78564 14.4327C1.78564 14.7808 2.06779 15.063 2.41588 15.063H4.60076C4.94889 15.063 5.231 14.7808 5.231 14.4327C5.231 14.0846 4.94885 13.8025 4.60072 13.8025Z\" fill=\"#34A853\"/>\n		<path d=\"M19.8676 9.94948L18.6279 8.35284C18.5088 8.19905 18.3249 8.10913 18.1302 8.10913H13.5503V3.69737C13.5503 3.34925 13.2682 3.06714 12.9201 3.06714H2.41588C2.06775 3.06714 1.78564 3.34929 1.78564 3.69737C1.78564 4.04546 2.06779 4.32761 2.41588 4.32761H12.2898V8.73936C12.2898 9.08749 12.572 9.3696 12.9201 9.3696H17.8215L18.7394 10.5519V13.8024H16.9957C16.6476 13.8024 16.3654 14.0845 16.3654 14.4326C16.3654 14.7807 16.6476 15.0628 16.9957 15.0628H19.3696C19.7178 15.0628 19.9999 14.7807 19.9999 14.4326V10.336C19.9999 10.1961 19.9533 10.06 19.8676 9.94948Z\" fill=\"#34A853\"/>\n		<path d=\"M4.55871 10.6094H1.65953C1.31141 10.6094 1.0293 10.8915 1.0293 11.2396C1.0293 11.5877 1.31145 11.8698 1.65953 11.8698H4.55867C4.9068 11.8698 5.18891 11.5877 5.18891 11.2396C5.18895 10.8915 4.9068 10.6094 4.55871 10.6094Z\" fill=\"#34A853\"/>\n		<path d=\"M6.0084 8.12988H0.630234C0.282148 8.12988 0 8.41203 0 8.76016C0 9.10828 0.282148 9.39039 0.630234 9.39039H6.0084C6.35652 9.39039 6.63863 9.10824 6.63863 8.76016C6.63863 8.41207 6.35652 8.12988 6.0084 8.12988Z\" fill=\"#34A853\"/>\n		<path d=\"M7.0377 5.65137H1.65953C1.31141 5.65137 1.0293 5.93352 1.0293 6.2816C1.0293 6.62973 1.31145 6.91184 1.65953 6.91184H7.0377C7.38582 6.91184 7.66793 6.62969 7.66793 6.2816C7.66797 5.93352 7.38582 5.65137 7.0377 5.65137Z\" fill=\"#34A853\"/>\n		</svg>",
		green_check: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\">\n		<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.504 1.31787C15.5773 1.31787 19.6916 5.43219 19.6916 10.5055C19.6916 15.5788 15.5773 19.6931 10.504 19.6931C5.43073 19.6931 1.31641 15.5788 1.31641 10.5055C1.31641 5.43219 5.43073 1.31787 10.504 1.31787ZM8.59609 13.4897L6.34674 11.2385C5.96353 10.855 5.96345 10.2297 6.34674 9.84638C6.73011 9.46309 7.35817 9.46549 7.73875 9.84638L9.32453 11.4334L13.2694 7.48852C13.6528 7.10515 14.2781 7.10515 14.6614 7.48852C15.0448 7.87181 15.0442 8.4977 14.6614 8.88053L10.0194 13.5225C9.63659 13.9054 9.01069 13.9059 8.6274 13.5225C8.61663 13.5118 8.60624 13.5008 8.59609 13.4897Z\" fill=\"#1FCD5D\"/>\n		</svg>",
		secure: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\n		<path d=\"M16.8259 8.60245C16.3364 8.11308 15.6856 7.8437 14.9936 7.8437H14.8061V5.26808C14.8061 2.63714 12.6658 0.496826 10.035 0.496826H9.85859C7.22781 0.496826 5.08734 2.63714 5.08734 5.26808V7.84354H4.89984C4.20781 7.84354 3.55703 8.11308 3.0675 8.60245C2.57812 9.09198 2.30859 9.74276 2.30859 10.435V16.9118C2.30859 17.604 2.57812 18.2548 3.0675 18.744C3.55687 19.2335 4.20766 19.5031 4.89984 19.5031H14.9936C15.6858 19.5031 16.3366 19.2335 16.8261 18.744C17.3155 18.2546 17.585 17.6039 17.585 16.9118V10.435C17.585 9.74292 17.3155 9.09214 16.8259 8.60245ZM6.33734 5.26808C6.33734 3.32651 7.91687 1.74683 9.85859 1.74683H10.035C11.9766 1.74683 13.5561 3.32651 13.5561 5.26808V7.84354H6.33734V5.26808ZM16.335 16.9118C16.335 17.2648 16.1917 17.6104 15.9422 17.8601C15.6887 18.1135 15.3519 18.2531 14.9936 18.2531H4.89984C4.54156 18.2531 4.20484 18.1135 3.95125 17.86C3.69797 17.6068 3.55844 17.2701 3.55844 16.9118V10.435C3.55844 10.0767 3.69797 9.73964 3.95125 9.48636C4.20469 9.23308 4.54141 9.09354 4.89969 9.09354H14.9934C15.3517 9.09354 15.6886 9.23308 15.9419 9.4862C16.1953 9.73979 16.3348 10.0767 16.3348 10.435L16.335 16.9118Z\" fill=\"#CFFF90\"/>\n		<path d=\"M9.94629 11.9475C9.60113 11.9475 9.32129 12.2274 9.32129 12.5725V14.7744C9.32129 15.1195 9.60113 15.3994 9.94629 15.3994C10.2914 15.3994 10.5713 15.1195 10.5713 14.7744V12.5725C10.5713 12.2274 10.2914 11.9475 9.94629 11.9475Z\" fill=\"#CFFF90\"/>\n		</svg>"
	}, c = `
<div class="sn-popup" id="snHowTrialPopup">
  <div class="sn-popup__overlay" id="snHowTrialOverlay"></div>
  <div class="sn-popup__card">
    <div class="sn-popup__header">
      <div class="sn-popup__header-text">
        <h3 class="sn-popup__title">How our trial works</h3>
        <p class="sn-popup__subtitle">Clear timeline, no surprise charges.</p>
      </div>
      <button class="sn-popup__close" id="snHowTrialClose" aria-label="Close">
        ${s.close_white}
      </button>
    </div>
    <div class="sn-popup__timeline">
      <div class="sn-popup__step">
        <div class="sn-popup__step-left">
          <div class="sn-popup__circle">${s.circle_active}</div>
          <div class="sn-popup__line"></div>
        </div>
        <div class="sn-popup__step-content">
          <div class="sn-popup__step-title">Today</div>
          <div class="sn-popup__step-desc">Tag ships to you.</div>
        </div>
      </div>
      <div class="sn-popup__step">
        <div class="sn-popup__step-left">
          <div class="sn-popup__circle">${s.circle_inactive}</div>
          <div class="sn-popup__line"></div>
        </div>
        <div class="sn-popup__step-content">
          <div class="sn-popup__step-title">Day 0 · when you activate</div>
          <div class="sn-popup__step-desc">Scan the tag and add your pet profile — <span class="sn-popup__step-desc--green">your trial starts here.</span></div>
        </div>
      </div>
      <div class="sn-popup__step">
        <div class="sn-popup__step-left">
          <div class="sn-popup__circle">${s.circle_inactive}</div>
          <div class="sn-popup__line"></div>
        </div>
        <div class="sn-popup__step-content">
          <div class="sn-popup__step-title">Day 5</div>
          <div class="sn-popup__step-desc">Reminder to cancel if you want.</div>
        </div>
      </div>
      <div class="sn-popup__step">
        <div class="sn-popup__step-left">
          <div class="sn-popup__circle">${s.circle_inactive}</div>
        </div>
        <div class="sn-popup__step-content">
          <div class="sn-popup__step-title">Day 7</div>
          <div class="sn-popup__step-desc">Plan starts unless you cancel.</div>
        </div>
      </div>
    </div>
    <div class="sn-popup__footer">
      <button class="sn-popup__cta">Get my tag with free 7-day trial →</button>
      <p class="sn-popup__fine-print">
        Today you pay shipping only.<br> 
        Cancel any time before day 7
      </p>
    </div>
  </div>
</div>
`, l = `
<div class="sn-plan-popup" id="snPlanPopup">
  <div class="sn-plan-popup__overlay" id="snPlanOverlay"></div>
  <div class="sn-plan-popup__card">
    <div class="sn-plan-popup__body">
      <div class="sn-plan-popup__header">
        <h3 class="sn-plan-popup__title">Free 7-day trial</h3>
        <button class="sn-plan-popup__close" id="snPlanClose" aria-label="Close">
          ${s.close_dark}
        </button>
      </div>
      <div class="sn-plan-popup__billing">
        <div class="sn-plan-popup__billing-tab sn-plan-popup__billing-tab--active" data-billing="annually">
          <span>Annually</span>
          <span class="sn-plan-popup__billing-badge">37% OFF</span>
        </div>
        <div class="sn-plan-popup__billing-tab" data-billing="monthly">Monthly</div>
      </div>
      <div class="sn-plan-popup__included">
        <div class="sn-plan-popup__included-title">What's included</div>
        <div class="sn-plan-popup__included-grid">
          <div class="sn-plan-popup__included-item">${s.green_check}<span>Free Pet Tag</span></div>
          <div class="sn-plan-popup__included-item">${s.green_check}<span>Pet profile contacts</span></div>
          <div class="sn-plan-popup__included-item">${s.green_check}<span>GPS scan alerts</span></div>
          <div class="sn-plan-popup__included-item">${s.green_check}<span>Community alerts</span></div>
          <div class="sn-plan-popup__included-item">${s.green_check}<span>Vet &amp; kennel alerts</span></div>
          <div class="sn-plan-popup__included-item">${s.green_check}<span>Vet &amp; training support</span></div>
          <div class="sn-plan-popup__included-item">${s.green_check}<span>Health analysis</span></div>
        </div>
      </div>
      <div class="sn-plan-popup__plans">
        <div class="sn-plan-popup__plan sn-plan-popup__plan--selected" data-plan="single">
          <div class="sn-plan-popup__plan-radio"></div>
          <div class="sn-plan-popup__plan-info">
            <div class="sn-plan-popup__plan-name">Single pet</div>
            <span class="sn-plan-popup__plan-badge sn-plan-popup__plan-badge--purple">Popular</span>
          </div>
          <div class="sn-plan-popup__plan-price"><span class="sn-plan-popup__plan-price-val">£3.12</span><span>/mo</span></div>
        </div>
        <div class="sn-plan-popup__plan" data-plan="unlimited">
          <div class="sn-plan-popup__plan-radio"></div>
          <div class="sn-plan-popup__plan-info">
            <div class="sn-plan-popup__plan-name">Unlimited pets</div>
            <span class="sn-plan-popup__plan-badge sn-plan-popup__plan-badge--teal">Best value</span>
          </div>
          <div class="sn-plan-popup__plan-price"><span class="sn-plan-popup__plan-price-val">£5.25</span><span>/mo</span></div>
        </div>
      </div>
      <div class="sn-plan-popup__timeline">
        <div class="sn-plan-popup__step">
          <div class="sn-plan-popup__step-left">
            <div class="sn-plan-popup__circle">${s.circle_active_light}</div>
            <div class="sn-plan-popup__line"></div>
          </div>
          <div class="sn-plan-popup__step-content">
            <div class="sn-plan-popup__step-title">Today</div>
            <div class="sn-plan-popup__step-desc">Tag ships to you.</div>
          </div>
        </div>
        <div class="sn-plan-popup__step">
          <div class="sn-plan-popup__step-left">
            <div class="sn-plan-popup__circle">${s.circle_inactive_light}</div>
            <div class="sn-plan-popup__line"></div>
          </div>
          <div class="sn-plan-popup__step-content">
            <div class="sn-plan-popup__step-title">Day 0 · when you activate</div>
            <div class="sn-plan-popup__step-desc">Scan the tag and add your pet profile — your trial starts here.</div>
          </div>
        </div>
        <div class="sn-plan-popup__step">
          <div class="sn-plan-popup__step-left">
            <div class="sn-plan-popup__circle">${s.circle_inactive_light}</div>
            <div class="sn-plan-popup__line"></div>
          </div>
          <div class="sn-plan-popup__step-content">
            <div class="sn-plan-popup__step-title">Day 5</div>
            <div class="sn-plan-popup__step-desc">Reminder to cancel if you want.</div>
          </div>
        </div>
        <div class="sn-plan-popup__step">
          <div class="sn-plan-popup__step-left">
            <div class="sn-plan-popup__circle">${s.circle_inactive_light}</div>
          </div>
          <div class="sn-plan-popup__step-content">
            <div class="sn-plan-popup__step-title">Day 7</div>
            <div class="sn-plan-popup__step-desc">Plan starts unless you cancel.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="sn-plan-popup__footer">
      <div class="sn-plan-popup__price-summary">
        <div class="sn-plan-popup__price-row">
          <div class="sn-plan-popup__price-label">Today you pay <span class="sn-plan-popup__price-note">(for shipping)</span></div>
          <div class="sn-plan-popup__price-val">£2.99</div>
        </div>
        <div class="sn-plan-popup__price-row">
          <div class="sn-plan-popup__price-sub">After 7 days</div>
          <div class="sn-plan-popup__price-sub" id="snPlanAfterPrice">£37.44/yr</div>
        </div>
      </div>
      <button class="sn-plan-popup__cta" id="snPlanCta">
        ${s.secure}
        Secure checkout
      </button>
      <p class="sn-plan-popup__fine-print">Today you pay shipping only. Cancel any time before day 7</p>
    </div>
  </div>
</div>
`, u = `
<div class="sn-cta">
  <div class="sn-cta__colour">
    <div class="sn-cta__label">Colour</div>
    <div class="sn-cta__colour-options">
      <button class="sn-cta__colour-btn sn-cta__colour-btn--active" data-colour="green">Green</button>
      <button class="sn-cta__colour-btn" data-colour="lilac">Lilac</button>
      <button class="sn-cta__colour-btn" data-colour="orange">Orange</button>
    </div>
  </div>
  <div class="sn-cta__action-wrap">
    <div class="sn-cta__qty-label">How many tags do you need?</div>
    <div class="sn-cta__action">
      <div class="sn-cta__qty">
        <button class="sn-cta__qty-btn sn-cta__qty-btn--dec" id="snQtyMinus">−</button>
        <span class="sn-cta__qty-val" id="snQtyVal">1</span>
        <button class="sn-cta__qty-btn sn-cta__qty-btn--inc" id="snQtyPlus">+</button>
      </div>
      <button class="sn-cta__main-btn" id="snMainCta">Get my tag with free 7-day trial →</button>
    </div>
  </div>
  <div class="sn-cta__links">
    <div class="sn-cta__link-item">
      ${s.cancel}<span>Cancel any time</span>
    </div>
    <span class="sn-cta__dot"></span>
    <button class="sn-cta__how-works" id="snHowWorksLink">
      ${s.how_works}<span>How our trial works</span>
    </button>
    <span class="sn-cta__dot"></span>
    <div class="sn-cta__link-item">
      <span>Worldwide</span>
      ${s.shipping}
      <span>Fast shipping</span>
    </div>
  </div>
</div>
`, d = `
<div class="sn-features">
  <div class="sn-features__item">
    <div class="sn-features__icon">${s.instant}</div>
    <div class="sn-features__text">
      <div class="sn-features__title">Instant location alerts</div>
      <div class="sn-features__desc">Get an SMS the second your tag is scanned.</div>
    </div>
  </div>
  <div class="sn-features__item">
    <div class="sn-features__icon">${s.no_batteriees}</div>
    <div class="sn-features__text">
      <div class="sn-features__title">No batteries, ever</div>
      <div class="sn-features__desc">Simple QR works with any smartphone.</div>
    </div>
  </div>
  <div class="sn-features__item">
    <div class="sn-features__icon">${s.durable}</div>
    <div class="sn-features__text">
      <div class="sn-features__title">Durable &amp; waterproof</div>
      <div class="sn-features__desc">Built for rain, mud and every adventure.</div>
    </div>
  </div>
  <div class="sn-features__item">
    <div class="sn-features__icon">${s.safe}</div>
    <div class="sn-features__text">
      <div class="sn-features__title">Safe &amp; secure</div>
      <div class="sn-features__desc">Pet's data encrypted, shared only when needed.</div>
    </div>
  </div>
</div>
`, f = {
		monthly: {
			single: 4.99,
			unlimited: 6.99
		},
		annually: {
			single: 3.12,
			unlimited: 5.25
		}
	}, p = {
		green: 53969370022234,
		lilac: 53969370055002,
		orange: 53996999901530
	}, m = {
		"one-monthly": 54377674834266,
		"one-yearly": 54377674867034,
		"ulim-monthly": 54377674899802,
		"ulim-yearly": 54377674932570
	}, h = 692202897754;
	function g(e) {
		let t = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
		return document.querySelector(`.pawtag-variant-btn[data-option-value="${t}"]`);
	}
	function _() {
		let e = document.querySelectorAll(".sn-cta__colour-btn");
		e.forEach((t) => {
			g(t.dataset.colour ?? "")?.classList.contains("pawtag-variant-btn--active") && (e.forEach((e) => e.classList.remove("sn-cta__colour-btn--active")), t.classList.add("sn-cta__colour-btn--active"));
		});
	}
	function v() {
		document.querySelector(".pawtag-variant-btn[data-option-value=\"Engraved\"]")?.classList.contains("pawtag-variant-btn--active") && g("Green")?.click(), _(), document.querySelectorAll(".sn-cta__colour-btn").forEach((e) => {
			e.addEventListener("click", () => {
				document.querySelectorAll(".sn-cta__colour-btn").forEach((e) => e.classList.remove("sn-cta__colour-btn--active")), e.classList.add("sn-cta__colour-btn--active"), g(e.dataset.colour ?? "")?.click();
			});
		});
		let e = document.getElementById("snQtyVal"), t = 1, n = (n) => {
			t = Math.max(1, n), e && (e.textContent = String(t));
		};
		document.getElementById("snQtyMinus")?.addEventListener("click", () => n(t - 1)), document.getElementById("snQtyPlus")?.addEventListener("click", () => n(t + 1)), document.getElementById("snMainCta")?.addEventListener("click", () => O()), document.getElementById("snHowWorksLink")?.addEventListener("click", () => b());
	}
	function y() {
		let e = document.getElementById("snHowTrialPopup");
		if (e) return e;
		document.body.insertAdjacentHTML("beforeend", c), e = document.getElementById("snHowTrialPopup");
		let t = document.getElementById("snHowTrialOverlay"), n = document.getElementById("snHowTrialClose"), r = e.querySelector(".sn-popup__cta");
		return t.addEventListener("click", () => x()), n.addEventListener("click", () => x()), r.addEventListener("click", () => {
			x(), O();
		}), e;
	}
	function b() {
		let e = y();
		requestAnimationFrame(() => requestAnimationFrame(() => {
			e.classList.add("active");
		}));
	}
	function x() {
		document.getElementById("snHowTrialPopup")?.classList.remove("active");
	}
	function S(e, t) {
		return `£${f[e][t].toFixed(2)}`;
	}
	function C(e, t) {
		if (e !== "annually") return 0;
		let n = f.monthly[t], r = f.annually[t];
		return Math.round((1 - r / n) * 100);
	}
	function w(e, t) {
		return e === "annually" ? `£${(f.annually[t] * 12).toFixed(2)}/yr` : `£${f.monthly[t].toFixed(2)}/mo`;
	}
	function T(e, t, n) {
		let r = e.querySelector(".sn-plan-popup__plan[data-plan=\"single\"] .sn-plan-popup__plan-price-val"), i = e.querySelector(".sn-plan-popup__plan[data-plan=\"unlimited\"] .sn-plan-popup__plan-price-val");
		r && (r.textContent = S(t, "single")), i && (i.textContent = S(t, "unlimited"));
		let a = e.querySelector(".sn-plan-popup__billing-badge");
		a && (a.textContent = `${C("annually", n)}% OFF`);
		let o = e.querySelector("#snPlanAfterPrice");
		o && (o.textContent = w(t, n));
	}
	async function E(e, t, n) {
		let r = document.querySelector(".sn-cta__colour-btn--active")?.dataset.colour ?? "green", i = parseInt(document.getElementById("snQtyVal")?.textContent ?? "1", 10), a = p[r], o = m[`${t === "single" ? "one" : "ulim"}-${e === "annually" ? "yearly" : "monthly"}`];
		n.setAttribute("disabled", "true");
		try {
			await fetch("/cart/clear.js", { method: "POST" }), (await fetch("/cart/add.js", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ items: [{
					id: a,
					quantity: i
				}, {
					id: o,
					quantity: 1,
					selling_plan: h
				}] })
			})).ok ? window.location.href = "/checkout" : n.removeAttribute("disabled");
		} catch {
			n.removeAttribute("disabled");
		}
	}
	function D() {
		let e = document.getElementById("snPlanPopup");
		if (e) return e;
		document.body.insertAdjacentHTML("beforeend", l), e = document.getElementById("snPlanPopup"), document.getElementById("snPlanOverlay").addEventListener("click", () => k()), document.getElementById("snPlanClose").addEventListener("click", () => k());
		let t = "annually", n = "single", r = e.querySelectorAll(".sn-plan-popup__billing-tab");
		r.forEach((i) => {
			i.addEventListener("click", () => {
				r.forEach((e) => e.classList.remove("sn-plan-popup__billing-tab--active")), i.classList.add("sn-plan-popup__billing-tab--active"), t = i.dataset.billing ?? "annually", T(e, t, n);
			});
		});
		let i = e.querySelectorAll(".sn-plan-popup__plan");
		i.forEach((r) => {
			r.addEventListener("click", () => {
				i.forEach((e) => e.classList.remove("sn-plan-popup__plan--selected")), r.classList.add("sn-plan-popup__plan--selected"), n = r.dataset.plan ?? "single", T(e, t, n);
			});
		});
		let a = document.getElementById("snPlanCta");
		return a.addEventListener("click", () => E(t, n, a)), document.addEventListener("keydown", (t) => {
			t.key === "Escape" && e.classList.contains("active") && k();
		}), T(e, t, n), e;
	}
	function O() {
		let e = D();
		requestAnimationFrame(() => requestAnimationFrame(() => {
			e.classList.add("active");
		}));
	}
	function k() {
		document.getElementById("snPlanPopup")?.classList.remove("active");
	}
	r({
		name: "Supernormal Trial",
		dev: "YK"
	}), new class {
		constructor() {
			this.init();
		}
		async init() {
			o("Supernormal Trial Init"), await n(".description"), a("body").elements[0].insertAdjacentHTML("beforeend", `<style class="crs_sn">${e}</style>`), a(".description").elements[0].insertAdjacentHTML("afterend", u), a(".description").elements[0].insertAdjacentHTML("afterend", d), v();
		}
	}();
})();
//#endregion

//# sourceMappingURL=index.js.map
