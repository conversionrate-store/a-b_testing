(function() {
  "use strict";
  const D = `.bf_root {
  font-family: "DM Sans", sans-serif;
  color: #2b3635;
  background: #fff;
  padding-bottom: var(--bf-sticky-h, 0px);
  transition: padding-bottom 0.2s;
}
.bf_root *,
.bf_root *::before,
.bf_root *::after {
  box-sizing: border-box;
}
.bf_root h1,
.bf_root h2,
.bf_root h3,
.bf_root p,
.bf_root ul,
.bf_root hr {
  margin: 0;
  padding: 0;
}
.bf_root ul {
  list-style: none;
}
.bf_root img {
  display: block;
  max-width: none;
}
.bf_root p {
  max-width: none;
}
.bf_root a {
  color: inherit;
  text-decoration: none;
}
.bf_root [hidden] {
  display: none !important;
}
.bf_root button,
.bf_root input,
.bf_root details,
.bf_root summary {
  margin: 0;
  box-shadow: none;
  text-transform: none;
  letter-spacing: normal;
}
.bf_root details,
.bf_root summary {
  padding-top: 0;
}
.bf_root .bf_btn[class] {
  display: inline-flex;
  min-width: 0;
  max-width: none;
  border: 1px solid #007170 !important;
  border-radius: 100px !important;
  background: #007170 !important;
  color: #fff !important;
  font-family: "DM Sans", sans-serif !important;
  font-weight: 700 !important;
  flex-wrap: nowrap;
}
.bf_root .bf_btn[class]:hover {
  background: #005f5e !important;
}
.bf_root .bf_form input[type] {
  flex: 1;
  width: auto;
  height: auto !important;
  min-width: 0;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 0 !important;
  text-align: left !important;
  text-indent: 0 !important;
  background: none !important;
  box-shadow: none !important;
  outline: 0;
}
.bf_root details.bf_qa {
  padding: 0 !important;
  border: 0 !important;
  border-bottom: 1px solid #d6d6d6 !important;
  border-radius: 0 !important;
  background: none !important;
}
.bf_root details.bf_qa summary {
  padding: 0 0 20px !important;
  background: none !important;
}

.bf_nw {
  white-space: nowrap;
}

@media (max-width: 768px) {
  .bf_d {
    display: none !important;
  }
}

@media (min-width: 769px) {
  .bf_m {
    display: none !important;
  }
}

.bf_wrap {
  max-width: 1280px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .bf_wrap {
    padding: 0 20px;
  }
}

.bf_h2 {
  font: 700 36px/44px "DM Sans", sans-serif;
  color: #2b3635;
}
@media (max-width: 768px) {
  .bf_h2 {
    font-size: 28px;
    line-height: 38px;
  }
}

.bf_h3 {
  font: 700 20px/30px Manrope, "DM Sans", sans-serif;
  color: #000;
}
@media (max-width: 768px) {
  .bf_h3 {
    font-size: 18px;
    line-height: 28px;
  }
}

.bf_lead {
  font: 400 18px/26px "DM Sans", sans-serif;
  color: #5b6362;
}
@media (max-width: 768px) {
  .bf_lead {
    font-size: 16px;
  }
}

.bf_big {
  font: 700 60px/70px "DM Sans", sans-serif;
  color: #007170;
  opacity: 0.9;
}
@media (max-width: 768px) {
  .bf_big {
    font-size: 42px;
    line-height: 52px;
  }
}

.bf_more {
  font: 700 18px/28px Manrope, "DM Sans", sans-serif;
  color: #007170;
  text-align: center;
}

.bf_off {
  display: inline-flex;
  padding: 0 8px;
  border-radius: 4px;
  background: #e7937b;
  font: 700 18px/28px Manrope, "DM Sans", sans-serif;
  color: #000;
  white-space: nowrap;
}
.bf_off--sm {
  padding: 0 4px;
}
.bf_off--xs {
  padding: 0 4px;
  font: 700 14px/22px "DM Sans", sans-serif;
}

.bf_btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 60px;
  padding: 0 24px;
  border: 1px solid #007170;
  border-radius: 100px;
  background: #007170;
  color: #fff !important;
  font: 700 18px/30.6px "DM Sans", sans-serif;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.2s;
}
.bf_btn:hover {
  background: #005f5e;
}
.bf_btn img {
  width: 24px;
  height: 24px;
}
.bf_btn--card {
  width: 100%;
}
.bf_btn--final {
  height: 50px;
  padding: 0 50px;
}
@media (max-width: 768px) {
  .bf_btn--final {
    width: 100%;
    padding: 0 20px;
  }
}
.bf_btn--sticky {
  height: 48px;
  padding: 0 88px;
}
@media (max-width: 768px) {
  .bf_btn--sticky {
    width: 100%;
    height: 42px;
    padding: 0 24px;
    font-size: 14px;
    line-height: 22px;
  }
}

.bf_mail {
  position: relative;
  flex: none;
  width: 20px;
  height: 20px;
}
.bf_mail img {
  position: absolute;
  left: 0;
  width: 100%;
}
.bf_mail__b {
  top: 33.95%;
  height: 52.89%;
}
.bf_mail__t {
  top: 13.16%;
  left: 0.47% !important;
  width: 99.06% !important;
  height: 41.8%;
}

.bf_form {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.bf_form .bf_input {
  display: flex;
  flex: 1 1 0;
  align-items: center;
  gap: 12px;
  min-width: 0;
  height: 60px;
  padding: 0 24px;
  border: 1px solid #d6d6d6;
  border-radius: 100px;
  background: #fff;
  cursor: text;
}
.bf_form input {
  flex: 1;
  min-width: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: none;
  font: 400 16px/normal "DM Sans", sans-serif;
  color: #2b3635;
}
.bf_form input::placeholder {
  color: #757575;
}
.bf_form__msg {
  flex-basis: 100%;
  font: 500 14px/22px "DM Sans", sans-serif;
  color: #007170;
}
.bf_form--error .bf_input {
  border-color: #c0392b;
}
.bf_form--error .bf_form__msg {
  color: #c0392b;
}
.bf_form--done .bf_input,
.bf_form--done .bf_btn {
  display: none;
}
@media (max-width: 768px) {
  .bf_form--card, .bf_form--wide, .bf_form--final {
    flex-direction: column;
  }
  .bf_form--card .bf_input, .bf_form--wide .bf_input, .bf_form--final .bf_input {
    flex: none;
    width: 100%;
  }
  .bf_form--card .bf_btn, .bf_form--wide .bf_btn, .bf_form--final .bf_btn {
    width: 100%;
  }
}
.bf_form--final {
  width: 100%;
}
.bf_form--final .bf_form__msg {
  color: #fff;
  text-align: center;
}
.bf_form--sticky {
  flex: 1;
}
.bf_form--sticky .bf_input,
.bf_form--sticky .bf_btn {
  height: 48px;
}

.bf_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 80px;
  border-bottom: 1px solid #e3eceb;
}
.bf_header__logo img.bf_d {
  width: 150.34px;
  height: 23.94px;
}
.bf_header__logo img.bf_m {
  width: 40px;
  height: 40px;
}
.bf_header__login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 40px;
  border: 1px solid #d6d6d6;
  border-radius: 100px;
  background: #f6f7f7;
  font: 500 14px/23.87px "DM Sans", sans-serif;
  color: #007170 !important;
}
@media (max-width: 768px) {
  .bf_header {
    height: 56px;
    padding: 0 16px;
  }
}

.bf_badge {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  padding: 12px 24px;
  border-radius: 12px;
  background: #000;
  font: 700 18px/28px Manrope, "DM Sans", sans-serif;
  color: #fff;
  white-space: nowrap;
}
.bf_badge__fire {
  width: 26.3px;
  height: 30px;
  margin: 0 1.85px;
}
.bf_badge__div {
  width: 1px;
  height: 30px;
}
.bf_badge--dark {
  background: #272727;
}
@media (max-width: 768px) {
  .bf_badge {
    gap: 12px;
    padding: 12px 20px;
    font-size: 14px;
    line-height: 24px;
  }
  .bf_badge__div {
    display: none;
  }
  .bf_badge .bf_off {
    font-size: 14px;
    line-height: 24px;
    color: #272727;
  }
}

.bf_timer {
  display: flex;
  gap: 4px;
}
.bf_timer__u {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 55px;
  padding: 6px 12px;
  border-radius: 12px;
  background: #fff;
}
.bf_timer__u b {
  font: 700 24px/26px "DM Sans", sans-serif;
  color: #007170;
}
.bf_timer__u i {
  font: 700 12px/18px "DM Sans", sans-serif;
  font-style: normal;
  text-transform: uppercase;
  color: #a6a6a6;
}
.bf_timer--dark .bf_timer__u {
  background: #272727;
}
.bf_timer--dark .bf_timer__u b {
  color: #fff;
}
.bf_timer--sticky .bf_timer__u {
  min-width: 41px;
  padding: 4px 8px;
  background: #f6f7f7;
}
.bf_timer--sticky .bf_timer__u b {
  font-size: 18px;
  line-height: 24px;
}

.bf_hero {
  display: flex;
  justify-content: space-between;
  gap: 48px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 62px 80px 0;
}
.bf_hero__main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 600px;
  flex: none;
}
.bf_hero__title {
  font: 700 42px/52px Manrope, "DM Sans", sans-serif;
  color: #2b3635;
}
.bf_hero__sub {
  margin-bottom: 8px !important;
  font: 400 18px/26px "DM Sans", sans-serif;
  color: #5b6362;
}
.bf_hero__sub b {
  font-weight: 700;
}
.bf_hero__pic {
  flex: 0 1 632px;
  height: 566px;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(93.56deg, #144e7b 0.54%, #003a67 98.3%);
}
.bf_hero__pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 768px) {
  .bf_hero {
    flex-direction: column;
    gap: 16px;
    padding: 32px 20px 0;
  }
  .bf_hero__main {
    width: 100%;
  }
  .bf_hero__title {
    font-size: 32px;
    line-height: 42px;
  }
  .bf_hero__sub {
    margin-bottom: 8px;
    font-size: 16px;
  }
  .bf_hero__pic {
    flex: none;
    width: 100%;
    height: auto;
    aspect-ratio: 335/299;
  }
}

.bf_card {
  width: 100%;
  margin-top: 8px;
  padding-bottom: 32px;
  border-radius: 12px;
  background: #f6f7f7;
  overflow: hidden;
}
.bf_card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px;
  background: #c8dee8;
}
.bf_card__title {
  font: 700 20px/30px Manrope, "DM Sans", sans-serif;
  color: #000;
}
.bf_card__timer {
  display: flex;
  align-items: center;
  gap: 16px;
  font: 400 16px/24px "DM Sans", sans-serif;
  color: #5b6362;
}
.bf_card__body {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 32px 0;
}
.bf_card__price {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.bf_card__note {
  font: 400 16px/24px "DM Sans", sans-serif;
  color: #5b6362;
}
@media (max-width: 768px) {
  .bf_card {
    padding-bottom: 20px;
  }
  .bf_card__head {
    flex-direction: column;
    gap: 12px;
    padding: 12px 20px;
  }
  .bf_card__timer {
    flex-direction: column;
    gap: 4px;
  }
  .bf_card__body {
    gap: 16px;
    padding: 16px 20px 0;
  }
  .bf_card__note {
    font-size: 14px;
    text-align: center;
  }
}

.bf_price {
  display: flex;
  align-items: flex-end;
  gap: 12px;
}
.bf_price__vals {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}
.bf_price s {
  font: 600 18px/28px "DM Sans", sans-serif;
  color: #757575;
}
.bf_price strong {
  font: 800 36px/46px Manrope, "DM Sans", sans-serif;
  color: #2b3635;
}
.bf_price__per {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 8px;
  font: 600 18px/30px "DM Sans", sans-serif;
  color: #757575;
}
@media (max-width: 768px) {
  .bf_card:not(.bf_card--pre) .bf_price {
    justify-content: space-between;
    width: 100%;
  }
  .bf_price__vals {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
  .bf_price s {
    font-size: 14px;
    line-height: 24px;
  }
  .bf_price strong {
    font-size: 28px;
    line-height: 38px;
  }
  .bf_price__per {
    padding-bottom: 6px;
    font-size: 14px;
    line-height: 24px;
  }
  .bf_price__per .bf_off {
    font-size: 16px;
    line-height: 26px;
  }
}

.bf_perks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 24px;
}
.bf_perks li {
  display: flex;
  align-items: center;
  gap: 6px;
  font: 500 14px/24px "DM Sans", sans-serif;
  color: #38495c;
}
.bf_perks img {
  width: 24px;
  height: 24px;
}
.bf_perks .bf_perks__inset {
  padding: 2px 3.56px;
}
@media (max-width: 768px) {
  .bf_perks {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .bf_perks li {
    color: #2b3635;
  }
}

.bf_rating {
  display: flex;
  align-items: center;
  align-self: center;
  gap: 1px;
  margin-top: 8px !important;
  font: 600 14px/24px "DM Sans", sans-serif;
  color: #2b3635;
}
.bf_rating img {
  width: 14px;
  height: 14px;
}
.bf_rating span {
  margin-left: 3px;
}

.bf_classes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  max-width: 1280px;
  margin: 80px auto 0;
}
.bf_classes__text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 600px;
  flex: none;
}
.bf_classes__text .bf_h3 {
  margin-top: 12px;
}
.bf_classes__hr {
  height: 1px;
  margin: 12px 0 0 !important;
  border: 0;
  background: #dde4e3;
}
.bf_classes__box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 0 1 632px;
  padding: 32px 42px;
  border-radius: 24px 24px 160px 24px;
  background: #e6eff3;
  overflow: hidden;
}
.bf_classes__bg {
  position: absolute;
  top: -311px;
  left: calc(50% + 168.5px - 420.5px);
  width: 841px;
  height: 841px;
}
@media (max-width: 768px) {
  .bf_classes {
    flex-direction: column;
    gap: 24px;
    margin-top: 42px;
    padding: 0 20px;
  }
  .bf_classes__text {
    width: 100%;
  }
  .bf_classes__box {
    flex: none;
    width: 100%;
    padding: 24px 20px;
    border-radius: 12px 12px 80px 12px;
  }
}

.bf_colls {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 768px) {
  .bf_colls {
    grid-template-columns: 1fr;
  }
}

.bf_coll {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0 20px 24px;
  border-radius: 12px;
  background: rgba(207, 224, 231, 0.3);
  overflow: hidden;
}
.bf_coll__bg {
  position: absolute;
  top: -67.5px;
  left: calc(50% + 145.5px - 118.5px);
  width: 237px;
  height: 237px;
}
.bf_coll b {
  position: relative;
  font: 700 36px/44px "DM Sans", sans-serif;
  color: #007170;
}
.bf_coll span {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  font: 500 14px/24px "DM Sans", sans-serif;
  color: #2b3635;
}
.bf_coll span img {
  width: 24px;
  height: 24px;
}
@media (max-width: 768px) {
  .bf_coll {
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 12px 20px;
  }
  .bf_coll b {
    font-size: 28px;
    line-height: 38px;
  }
}

.bf_tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px !important;
}
.bf_tags li {
  padding: 8px 16px;
  border-radius: 12px;
  background: rgba(207, 224, 231, 0.3);
  font: 700 14px/26px "DM Sans", sans-serif;
  color: #007170;
}

.bf_stack {
  --s: 1;
  position: relative;
  width: calc(505px * var(--s));
  height: calc(494px * var(--s));
}
@media (max-width: 768px) {
  .bf_stack {
    --s: 0.58;
  }
}

.bf_class {
  position: absolute;
  width: 355px;
  padding: 16px;
  border-radius: 12px;
  background: #fff;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.16));
  transform: scale(var(--s));
  transform-origin: 0 0;
}
.bf_class:nth-child(1) {
  left: calc(150px * var(--s));
  top: 0;
}
.bf_class:nth-child(2) {
  left: calc(70px * var(--s));
  top: calc(80px * var(--s));
}
.bf_class:nth-child(3) {
  left: 0;
  top: calc(190px * var(--s));
}
.bf_class__pic {
  position: relative;
  height: 184px;
}
.bf_class__pic > img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
}
.bf_class__lock {
  position: absolute;
  top: 10px;
  left: 175px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border-radius: 4px;
  background: #fff;
  font: 500 12px/18px "DM Sans", sans-serif;
}
.bf_class__lock img {
  width: 10px;
  height: 12px;
}
.bf_class__tag {
  position: absolute;
  top: 148px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 4px;
  background: rgba(43, 54, 53, 0.7);
  font: 700 12px/18px "DM Sans", sans-serif;
  color: #fff;
}
.bf_class__tag--lvl {
  left: 10px;
  gap: 4px;
}
.bf_class__tag--lvl i {
  width: 2px;
  height: 3px;
  margin-right: -3px;
  align-self: flex-end;
  margin-bottom: 5px;
  background: #fff;
}
.bf_class__tag--lvl i + i {
  height: 6px;
  background: #5b6362;
}
.bf_class__tag--lvl i + i + i {
  height: 9px;
  margin-right: 0;
}
.bf_class__tag--dur {
  right: 10px;
}
.bf_class__tag--dur img {
  width: 14px;
  height: 14px;
}
.bf_class__info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 16px;
  font: 400 14px/20px "DM Sans", sans-serif;
  color: #5b6362;
}
.bf_class__name {
  display: flex;
  justify-content: space-between;
}
.bf_class__name b {
  font: 700 16px/24px "DM Sans", sans-serif;
  color: #2b3635;
}
.bf_class__name span {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #2b3635;
}
.bf_class__name img {
  width: 16px;
  height: 16px;
}
.bf_class__meta {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bf_class__teacher {
  display: flex;
  align-items: center;
  gap: 6px;
}
.bf_class__teacher img {
  width: 16px;
  height: 16px;
}

.bf_benefits {
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 80px;
  padding: 80px;
  background: #f6f7f7;
}
.bf_benefits .bf_wrap {
  width: 100%;
}
.bf_benefits .bf_lead {
  margin: 24px 0 32px !important;
}
@media (max-width: 768px) {
  .bf_benefits {
    gap: 42px;
    margin-top: 42px;
    padding: 42px 0;
  }
  .bf_benefits .bf_lead {
    margin: 16px 0 24px !important;
  }
}

.bf_feats {
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 32px;
}
@media (max-width: 768px) {
  .bf_feats {
    grid-auto-flow: row;
    gap: 12px;
  }
}

.bf_feat {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px;
  border-radius: 12px;
  background: #fff;
}
.bf_feat__icon {
  flex: none;
  padding: 12px;
  border-radius: 12px;
  background: #dfebef;
}
.bf_feat__icon img {
  width: 60px;
  height: 60px;
}
.bf_feat p {
  margin-top: 8px;
  font: 400 16px/26px "DM Sans", sans-serif;
  font-variation-settings: "opsz" 9;
  color: #5b6362;
}
@media (max-width: 768px) {
  .bf_feat {
    align-items: flex-start;
    gap: 12px;
  }
  .bf_feat__icon img {
    width: 24px;
    height: 24px;
  }
}

.bf_teachers {
  display: flex;
  flex-direction: column;
}
.bf_teachers .bf_more {
  align-self: center;
  margin-top: 32px;
}

.bf_tlist {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
@media (max-width: 768px) {
  .bf_tlist {
    margin: 0 -20px;
    padding: 0 20px 12px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }
  .bf_tlist::-webkit-scrollbar {
    display: none;
  }
}

.bf_teacher {
  flex: none;
  width: 242px;
  padding: 16px;
  border-radius: 12px;
  background: #fff;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.16));
  scroll-snap-align: start;
}
.bf_teacher img {
  width: 210px;
  height: 210px;
  margin-bottom: 16px;
  border-radius: 12px;
  object-fit: cover;
}
.bf_teacher__name {
  font: 700 20px/30px Manrope, "DM Sans", sans-serif;
  color: #000;
}
.bf_teacher__role {
  margin: 6px 0 !important;
  font: 700 14px/26px "DM Sans", sans-serif;
  color: #007170;
}
.bf_teacher__text {
  font: 400 14px/20px "DM Sans", sans-serif;
  color: #5b6362;
}

.bf_reviews {
  margin-top: 80px;
}
.bf_reviews .bf_h2 {
  margin-bottom: 32px;
}
.bf_reviews__row {
  display: flex;
  align-items: center;
  gap: 45px;
}
@media (max-width: 768px) {
  .bf_reviews {
    margin-top: 42px;
  }
  .bf_reviews__row {
    flex-direction: column;
    gap: 20px;
  }
}

.bf_stars {
  display: flex;
  gap: 4px;
}
.bf_stars img {
  width: 20px;
  height: 20px;
}

.bf_score {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  flex: none;
  width: 292px;
  height: 378px;
  padding: 0 32px;
  border-radius: 12px;
  background: rgba(207, 224, 231, 0.3);
  overflow: hidden;
}
.bf_score__bg {
  position: absolute;
  top: -127px;
  left: calc(50% + 116.5px - 162.5px);
  width: 325px;
  height: 325px;
}
.bf_score > b {
  position: relative;
  font: 700 60px/70px "DM Sans", sans-serif;
  color: #007170;
  opacity: 0.9;
}
.bf_score > div {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.bf_score p {
  font: 500 14px/24px "DM Sans", sans-serif;
  color: #000;
}
.bf_score p strong {
  color: #003a67;
}
@media (max-width: 768px) {
  .bf_score {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    padding: 20px 32px;
  }
  .bf_score > b {
    font-size: 42px;
    line-height: 52px;
  }
  .bf_score__bg {
    display: none;
  }
}

.bf_rlist {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  flex: 1;
}
@media (max-width: 768px) {
  .bf_rlist {
    grid-template-columns: 1fr;
    gap: 20px;
    width: 100%;
  }
}

.bf_review {
  display: flex;
  gap: 24px;
  min-height: 190px;
  padding: 16px;
  border: 1px solid #d6d6d6;
  border-radius: 12px;
  background: #fff;
}
.bf_review__ava {
  flex: none;
  align-self: flex-start;
  padding: 16px;
  border-radius: 100px;
  background: #dfebef;
}
.bf_review__ava img {
  width: 42px;
  height: 42px;
}
.bf_review__body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font: 400 16px/26px "DM Sans", sans-serif;
  font-variation-settings: "opsz" 9;
  color: #5b6362;
}
.bf_review__by {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: auto !important;
}
.bf_review__by b {
  color: #000;
}
.bf_review__by img {
  width: 4px;
  height: 4px;
}
@media (max-width: 768px) {
  .bf_review {
    min-height: 0;
  }
  .bf_review__ava {
    display: none;
  }
  .bf_review__by span {
    font-size: 14px;
    line-height: 24px;
  }
}

.bf_flower {
  position: absolute;
  width: 500px;
  height: 500px;
  pointer-events: none;
}
.bf_flower--l {
  top: 260px;
  left: calc(50% - 696px - 250px);
}
.bf_flower--r {
  top: -220px;
  left: calc(50% + 696px - 250px);
}
@media (max-width: 768px) {
  .bf_flower {
    display: none;
  }
}

.bf_faq {
  position: relative;
  margin-top: 80px;
  padding: 80px 20px;
  background: #f6f7f7;
  overflow: hidden;
}
.bf_faq__inner {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 700px;
  margin: 0 auto;
}
.bf_faq__inner .bf_h2 {
  margin-bottom: 8px;
}
@media (max-width: 768px) {
  .bf_faq {
    margin-top: 42px;
    padding: 42px 20px;
  }
}

.bf_guarantee {
  display: flex;
  gap: 24px;
  padding: 24px 32px;
  border-radius: 12px;
  background: #c8dee8;
}
.bf_guarantee img {
  flex: none;
  width: 70px;
  height: 70px;
}
.bf_guarantee p {
  margin-top: 12px;
  font: 400 18px/26px "DM Sans", sans-serif;
  color: #000;
}
@media (max-width: 768px) {
  .bf_guarantee {
    flex-direction: column;
    gap: 16px;
    padding: 20px;
  }
  .bf_guarantee p {
    font-size: 16px;
  }
}

.bf_qa {
  border-bottom: 1px solid #d6d6d6;
}
.bf_qa summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 20px;
  font: 700 20px/30px Manrope, "DM Sans", sans-serif;
  color: #000;
  list-style: none;
  cursor: pointer;
}
.bf_qa summary::-webkit-details-marker {
  display: none;
}
.bf_qa p {
  padding-bottom: 20px;
  font: 400 16px/26px "DM Sans", sans-serif;
  color: #5b6362;
}
.bf_qa[open] .bf_plus__v {
  transform: scaleY(0);
}
@media (max-width: 768px) {
  .bf_qa summary {
    font-size: 18px;
    line-height: 28px;
  }
}

.bf_plus {
  position: relative;
  flex: none;
  width: 24px;
  height: 24px;
}
.bf_plus img {
  position: absolute;
}
.bf_plus__v {
  inset: 14.07% 45.12%;
  width: 9.76%;
  height: 71.86%;
  transition: transform 0.2s;
}
.bf_plus__h {
  inset: 45.12% 14.07%;
  width: 71.86%;
  height: 9.76%;
}

.bf_notready {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 80px;
  padding: 32px 60px;
  border-radius: 12px;
  background: #c8dee8;
}
.bf_notready__text {
  flex: none;
  width: 500px;
}
.bf_notready__text p {
  margin-top: 12px;
  font: 400 18px/26px "DM Sans", sans-serif;
  color: #000;
}
.bf_notready .bf_form {
  flex: 1;
}
.bf_notready .bf_btn {
  gap: 16px;
  padding: 0 32px;
}
@media (max-width: 768px) {
  .bf_notready {
    flex-direction: column;
    align-items: stretch;
    margin: 42px 20px 0;
    padding: 24px 20px;
  }
  .bf_notready__text {
    width: auto;
  }
  .bf_notready__text p {
    font-size: 16px;
  }
}

.bf_final {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 1280px;
  margin: 80px auto 0;
  padding: 60px 32px;
  border-radius: 12px;
  background: #000;
  text-align: center;
  overflow: hidden;
}
.bf_final .bf_flower--l {
  top: 250px;
  left: calc(50% - 640px - 250px);
}
.bf_final .bf_flower--r {
  top: -250px;
  left: calc(50% + 640px - 250px);
}
.bf_final__title {
  position: relative;
  font: 700 36px/44px "DM Sans", sans-serif;
  color: #fff;
}
.bf_final__title em {
  font-style: normal;
  color: #e7937b;
}
.bf_final .bf_badge,
.bf_final .bf_timer,
.bf_final .bf_btn,
.bf_final .bf_form {
  position: relative;
}
.bf_final .bf_form {
  width: 480px;
  max-width: 100%;
}
.bf_final__note {
  position: relative;
  max-width: 518px;
  font: 400 14px/24px "DM Sans", sans-serif;
  color: #d6d6d6;
}
@media (max-width: 768px) {
  .bf_final {
    gap: 24px;
    margin-top: 42px;
    padding: 42px 32px;
    border-radius: 0;
  }
  .bf_final .bf_badge {
    margin-bottom: 8px;
  }
  .bf_final__title {
    font-size: 28px;
    line-height: 38px;
  }
}

.bf_footer {
  margin-top: 80px;
  padding: 24px 80px;
  background: #f6f7f7;
  font: 400 14px/24px "DM Sans", sans-serif;
  color: #5b6362;
}
.bf_footer__top {
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid #e3eceb;
}
.bf_footer__top nav {
  display: flex;
  gap: 58px;
  font-weight: 500;
  color: #2b3635;
}
.bf_footer__logo {
  width: 176.9px;
  height: 30px;
  background: #007170;
  -webkit-mask: var(--mask) no-repeat 0 0/100% 100%;
  mask: var(--mask) no-repeat 0 0/100% 100%;
}
.bf_footer__bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
}
@media (max-width: 768px) {
  .bf_footer {
    margin-top: 0;
    padding: 42px 20px;
  }
  .bf_footer__top, .bf_footer__bottom {
    flex-direction: column;
    gap: 20px;
  }
  .bf_footer__top nav {
    gap: 20px;
  }
}

.bf_sticky {
  position: fixed;
  z-index: 1000;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 142px;
  padding: 16px 80px;
  background: #fff;
  filter: drop-shadow(0 -2px 6px rgba(0, 0, 0, 0.16));
  transform: translateY(110%);
  transition: transform 0.3s;
}
.bf_sticky--on {
  transform: none;
}
.bf_sticky__info {
  display: flex;
  align-items: center;
  gap: 24px;
}
.bf_sticky__offer {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  font: 700 20px/30px Manrope, "DM Sans", sans-serif;
  color: #000;
  white-space: nowrap;
}
.bf_sticky__offer s,
.bf_sticky__offer .bf_sticky__then {
  font: 400 16px/24px "DM Sans", sans-serif;
  color: #5b6362;
  padding-bottom: 2px;
}
.bf_sticky__offer .bf_off {
  align-self: center;
  padding: 0 4px;
  font-size: 20px;
  line-height: 30px;
}
.bf_sticky__offer .bf_off--xs {
  font: 700 14px/22px "DM Sans", sans-serif;
}
.bf_sticky__div {
  width: 1px;
  height: 32px;
}
.bf_sticky__timer {
  display: flex;
  align-items: center;
  gap: 16px;
  font: 400 16px/24px "DM Sans", sans-serif;
  color: #5b6362;
}
.bf_sticky .bf_form--sticky {
  max-width: 640px;
}
@media (max-width: 768px) {
  .bf_sticky {
    flex-direction: column;
    gap: 12px;
    padding: 12px 22px;
  }
  .bf_sticky__offer {
    font-size: 16px;
    line-height: 26px;
  }
  .bf_sticky__offer .bf_off {
    font-size: 16px;
    line-height: 26px;
  }
}

@media (min-width: 769px) {
  .bf_root--presale .bf_sticky {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .bf_root .bf_btn--sticky.bf_m {
    display: flex !important;
  }
}
.bf_root .bf_form .bf_input input[type][name] {
  padding: 0 !important;
}

.bf_root button.bf_btn:not(.bf_d):not(.bf_m) {
  display: inline-flex !important;
}

@media (max-width: 768px) {
  .bf_root .bf_form button.bf_btn:not(.bf_d):not(.bf_m) {
    display: flex !important;
  }
}
.bf_root .bf_final__note {
  max-width: 518px;
}

@media (max-width: 768px) {
  .bf_final__note .bf_nw {
    white-space: normal;
  }
}
.bf_root .bf_form.bf_form--done {
  justify-content: center;
}
.bf_root .bf_form.bf_form--done .bf_input,
.bf_root .bf_form.bf_form--done .bf_btn {
  display: none !important;
}
.bf_root .bf_form.bf_form--done .bf_form__msg {
  text-align: center;
}
`, f = (n, e, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: e,
      event_type: t,
      event_loc: i
    }), Z(`Event: ${n} | ${e} | ${t} | ${i}`, "success");
  }, E = (n) => new Promise((e) => {
    const t = document.querySelector(n);
    t && e(t);
    const i = new MutationObserver(() => {
      const o = document.querySelector(n);
      o && (e(o), i.disconnect());
    });
    i.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), T = ({ name: n, dev: e }) => {
    const t = n.toLowerCase().replace(/\s/g, "_");
    f(`${t}_started`, `Experiment ${n} started`, "other", t), console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, R = (n) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", n, "variant_1"));
    }, 1e3);
  }, Z = (n, e = "info") => {
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
    console.log(`%c>>> ${n}`, `${t} font-size: 16px; font-weight: 600`);
  }, d = {
    presale: Date.parse("2026-11-23T00:00:00-05:00"),
    sale: Date.parse("2026-11-27T00:00:00-05:00"),
    lastday: Date.parse("2026-11-30T00:00:00-05:00"),
    end: Date.parse("2026-12-01T00:00:00-05:00")
  }, j = {
    presale: d.sale,
    sale: d.lastday,
    lastday: d.end
  }, O = {
    general: "/black-friday",
    beginners: "/black-friday-yoga-beginners",
    calm: "/black-friday-calm-mind-sleep",
    strength: "/black-friday-strength-flexibility"
  }, g = "bf_state", I = ["off", "presale", "sale", "lastday"], v = () => {
    try {
      const n = new URLSearchParams(window.location.search).get(g);
      return n === "reset" ? sessionStorage.removeItem(g) : n && I.includes(n) && sessionStorage.setItem(g, n), sessionStorage.getItem(g) || null;
    } catch {
      return null;
    }
  }, V = (n = Date.now()) => {
    const e = v();
    return e || (n < d.presale || n >= d.end ? "off" : n < d.sale ? "presale" : n < d.lastday ? "sale" : "lastday");
  }, z = (n, e = Date.now()) => {
    const t = Math.max(0, Math.floor((j[n] - e) / 1e3));
    return {
      d: Math.floor(t / 86400),
      h: Math.floor(t % 86400 / 3600),
      m: Math.floor(t % 3600 / 60),
      s: t % 60
    };
  }, q = (n) => String(n).padStart(2, "0"), A = (n) => n !== "lastday", N = (n, e, t, i = V) => {
    const o = v() !== null, l = () => {
      e(z(n)), !o && i() !== n && (clearInterval(p), t());
    }, p = window.setInterval(l, 1e3);
    return l(), () => clearInterval(p);
  }, B = (n, e, t) => {
    n.querySelectorAll("[data-bf-timer]").forEach((i) => {
      const o = i.querySelector('[data-u="d"]');
      o && (o.hidden = !A(e)), ["d", "h", "m", "s"].forEach((l) => {
        const p = i.querySelector(`[data-u="${l}"] b`);
        if (!p) return;
        const w = l === "h" && !A(e) ? t.h + t.d * 24 : t[l];
        p.textContent = q(w);
      });
    });
  }, y = (n = Date.now()) => {
    const e = V(n);
    return e === "off" && !v() && n < d.presale ? "presale" : e;
  }, P = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='150.343'%20height='23.94'%20viewBox='0%200%20150.343%2023.94'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='logo.svg'%20clip-path='url(%23clip0_0_4)'%3e%3cpath%20id='Vector'%20d='M10.317%200.386394C8.68736%200.639163%206.51895%201.65023%204.99449%202.86351C4.0877%203.5839%203.89057%203.77348%203.10205%204.72136C1.27533%206.88252%200.197697%2010.4718%200.526244%2013.2269C0.802224%2015.641%201.85358%2018.2065%203.06263%2019.4703C4.19283%2020.6331%205.96699%2020.8858%209.22617%2020.3424C11.5128%2019.9633%2013.4973%2019.9633%2016.1519%2020.3424C18.6883%2020.7089%2019.8974%2020.6709%2020.9487%2020.1781C21.619%2019.8622%2022.736%2018.9269%2022.736%2018.6742C22.736%2018.611%2022.8543%2018.3961%2022.9989%2018.1938C23.4194%2017.6377%2024.0371%2016.1086%2024.3393%2014.8574C25.0228%2012.1021%2024.4708%208.33594%2023.0646%206.18741C22.8806%205.922%2022.736%205.66923%2022.736%205.63132C22.736%205.4923%2021.9081%204.5065%2021.159%203.76084C19.7528%202.3327%2018.1101%201.35955%2015.9023%200.639163C15.1926%200.399032%2014.7063%200.348479%2013.011%200.310565C11.894%200.297926%2010.6849%200.323202%2010.317%200.386394ZM13.4447%201.03095C14.4041%201.28372%2015.7708%202.85088%2015.7708%203.69765C15.7708%203.89986%2015.8365%204.05153%2015.9154%204.05153C16.1651%204.05153%2017.637%204.72136%2018.3335%205.13842C21.1458%206.86988%2022.9332%2010.4339%2022.6967%2013.7957C22.6046%2014.9079%2021.9213%2017.3218%2021.6847%2017.3218C21.6321%2017.3218%2021.4087%2017.1449%2021.1984%2016.9426C21.0013%2016.7278%2020.6333%2016.5003%2020.4099%2016.4245C19.9368%2016.2729%2019.8843%2016.1718%2020.1734%2015.9316C20.423%2015.7293%2020.423%2015.3755%2020.1734%2015.1227C20.0157%2014.9711%2019.7528%2014.9458%2018.8592%2015.009L17.7421%2015.0848L17.2822%2014.6172C16.7039%2014.0232%2016.4279%2013.1386%2016.4279%2011.8368C16.4148%209.80199%2015.9942%208.23482%2015.3503%207.85567C15.1795%207.75457%2014.6932%207.57763%2014.2595%207.46389C13.3002%207.22375%2013.1951%206.95835%2013.7601%206.2506C14.1018%205.8209%2014.1281%205.66923%2014.1675%204.5697C14.207%203.19211%2014.023%202.73714%2013.2476%202.28215C11.1843%201.0815%209.67301%204.63289%2011.4603%206.4781C11.9729%207.0089%2011.8414%207.21112%2010.8164%207.47652C9.69924%207.76721%209.52844%207.89359%209.18674%208.56342C8.96334%209.01841%208.8582%209.5745%208.72678%2010.99C8.39824%2014.4529%207.93827%2015.1227%205.92756%2015.0342C4.95506%2014.9838%204.94192%2014.9838%204.8105%2015.325C4.70537%2015.5904%204.73165%2015.7293%204.90249%2015.9063C5.20476%2016.235%205.19161%2016.2729%204.6528%2016.4371C4.33739%2016.5382%204.12712%2016.7152%203.98256%2017.0185C3.86428%2017.2586%203.69343%2017.4482%203.60145%2017.4482C3.4306%2017.4482%203.01006%2016.4118%202.68151%2015.1733C2.33983%2013.8589%202.47124%2011.5208%202.98378%2010.0547C3.92999%207.35013%205.80928%205.37855%208.46395%204.29166C9.22617%203.9757%209.25246%203.95042%209.39701%203.33114C9.63355%202.34534%2010.6192%201.28372%2011.5392%201.01831C12.0517%200.866652%2012.8665%200.866652%2013.4447%201.03095Z'%20fill='%23007170'/%3e%3cpath%20id='Vector_2'%20d='M94.9124%205.15115C94.8336%205.35336%2094.689%205.75779%2094.5839%206.07375C94.4656%206.38971%2094.1371%207.29967%2093.8348%208.09589C93.5325%208.89211%2093.2434%209.71361%2093.1777%209.92849C93.1252%2010.1306%2092.7966%2011.0406%2092.4681%2011.9379C92.1395%2012.8353%2091.8635%2013.5936%2091.8635%2013.6189C91.8635%2013.6442%2091.811%2013.6568%2091.7584%2013.6568C91.6401%2013.6568%2090.9042%2011.1923%2089.6951%206.70567C89.498%205.97264%2089.3009%205.29017%2089.2351%205.18906C89.13%204.96157%2087.829%204.84783%2087.6187%205.05004C87.4742%205.18906%2087.6318%205.93473%2088.1838%207.71673C88.394%208.37393%2088.7357%209.52402%2088.9591%2010.2823C89.1825%2011.028%2089.5374%2012.2413%2089.7608%2012.9996C90.2208%2014.5162%2090.707%2016.1845%2090.9699%2017.1323C91.1013%2017.5999%2091.2195%2017.7769%2091.4167%2017.8022C91.7978%2017.8527%2091.9292%2017.6631%2092.376%2016.374C92.5863%2015.7421%2093.0069%2014.5794%2093.3091%2013.7831C93.5982%2012.987%2093.9925%2011.9253%2094.1634%2011.445C95.057%208.9553%2095.2279%208.55087%2095.3461%208.51296C95.4775%208.47504%2095.7009%208.99321%2096.6601%2011.5714C96.9235%2012.2666%2097.3171%2013.3155%2097.5411%2013.9095C97.9615%2015.0343%2098.4212%2016.2729%2098.7238%2017.1197C98.9335%2017.701%2099.2495%2017.9412%2099.5253%2017.7263C99.6172%2017.6505%2099.8145%2017.2208%2099.9323%2016.7911C100.261%2015.6789%20101.102%2012.8353%20102.115%209.42292C102.351%208.65197%20102.705%207.48925%20102.916%206.81941C103.126%206.14958%20103.297%205.45447%20103.297%205.26489C103.297%204.94893%20103.27%204.93629%20102.508%204.93629C101.904%204.93629%20101.707%204.98685%20101.615%205.15115C101.497%205.37864%20101.3%206.06111%20100.524%208.91738C100.301%209.75153%2099.9591%2010.9395%2099.7752%2011.5714C99.5914%2012.1907%2099.4065%2012.8985%2099.3673%2013.1386C99.2361%2013.821%2099.0254%2013.7326%2098.7238%2012.8732C98.5658%2012.4309%2098.1981%2011.4198%2097.8955%2010.6235C97.5938%209.82737%2097.2778%208.91738%2097.1859%208.60142C97.0805%208.28546%2096.8574%207.67882%2096.6736%207.24912C96.4897%206.80677%2096.3317%206.38971%2096.3317%206.30124C96.3317%206.21277%2096.2005%205.84625%2096.0425%205.47974C95.7926%204.91102%2095.7009%204.80991%2095.3987%204.80991C95.1358%204.80991%2095.0176%204.89838%2094.9124%205.15115Z'%20fill='%23007170'/%3e%3cpath%20id='Vector_3'%20d='M128.25%205.15106C128.185%205.34063%20128.093%205.74506%20128.053%206.06102C128.014%206.37698%20127.843%207.35014%20127.672%208.22218C127.502%209.09423%20127.187%2010.7119%20126.962%2011.8242C126.753%2012.9363%20126.424%2014.6172%20126.239%2015.5525C126.043%2016.4877%20125.899%2017.3345%20125.899%2017.4103C125.899%2017.6504%20127.554%2017.6377%20127.646%2017.4103C127.685%2017.3092%20127.791%2016.791%20127.869%2016.235C127.961%2015.6914%20128.198%2014.2634%20128.408%2013.088C128.606%2011.9%20128.815%2010.6488%20128.856%2010.3075C129.039%208.90466%20129.21%208.79091%20129.578%209.81463C129.71%2010.1558%20129.946%2010.7498%20130.103%2011.129C130.275%2011.5082%20130.576%2012.2538%20130.8%2012.772C131.01%2013.2901%20131.365%2014.1496%20131.589%2014.6678C132.509%2016.8921%20132.719%2017.3977%20132.785%2017.5998C132.824%2017.7389%20132.982%2017.8274%20133.166%2017.8274C133.494%2017.8274%20133.691%2017.4988%20134.323%2015.9316C134.467%2015.5525%20134.769%2014.8321%20134.966%2014.3518C135.163%2013.8589%20135.57%2012.8984%20135.847%2012.2033C136.99%209.42283%20137.134%209.10687%20137.214%209.10687C137.253%209.10687%20137.476%2010.1432%20137.712%2011.407C138.619%2016.4497%20138.803%2017.3724%20138.856%2017.4735C138.895%2017.524%20139.276%2017.5745%20139.71%2017.5745H140.486V17.1828C140.486%2016.9679%20140.315%2015.9569%20140.105%2014.9458C139.894%2013.9221%20139.553%2012.1527%20139.329%2011.0026C138.633%207.40069%20138.226%205.39119%20138.16%205.08786C138.107%204.88566%20138.002%204.80982%20137.712%204.80982C137.503%204.80982%20137.331%204.87302%20137.331%204.96148C137.331%205.03731%20137.161%205.47966%20136.95%205.93464C136.753%206.38962%20136.385%207.22375%20136.149%207.77984C135.926%208.33593%20135.597%209.10687%20135.426%209.48602C135.269%209.8652%20134.94%2010.6362%20134.704%2011.1922C134.467%2011.7483%20134.112%2012.5697%20133.915%2013.0248C133.705%2013.4798%20133.508%2013.9473%20133.468%2014.0611C133.35%2014.4276%20133.139%2014.3266%20132.916%2013.8083C132.39%2012.6456%20132.062%2011.8747%20131.614%2010.813C131.352%2010.1811%20130.958%209.29645%20130.748%208.84146C130.537%208.38648%20130.367%207.96942%20130.367%207.91886C130.367%207.86831%20130.195%207.45124%20129.972%206.99626C129.762%206.55392%20129.578%206.13686%20129.578%206.07366C129.578%206.01047%20129.446%205.69451%20129.288%205.37855C128.948%204.69608%20128.474%204.58233%20128.25%205.15106Z'%20fill='%23007170'/%3e%3cpath%20id='Vector_4'%20d='M32.2623%205.08784C32.223%205.17632%2032.2098%208.00732%2032.223%2011.3817L32.2623%2017.5113L34.8907%2017.5493C36.5466%2017.5745%2037.7819%2017.5366%2038.2419%2017.4481C42.1188%2016.652%2044.4975%2012.7088%2043.1701%209.23324C42.3422%207.08471%2040.5681%205.59338%2038.2551%205.12576C37.0198%204.873%2032.3543%204.84772%2032.2623%205.08784ZM39.0436%207.05944C39.7795%207.46386%2040.6994%208.298%2041.0017%208.86672C41.5274%209.80199%2041.6851%2011.7104%2041.3303%2012.8352C41.0411%2013.7325%2040.2921%2014.7183%2039.5035%2015.2112C38.531%2015.8431%2037.3351%2016.0833%2035.4821%2016.0327L33.9708%2015.9948L33.9314%2011.268L33.9051%206.5539L36.0998%206.60445C38.3076%206.64236%2038.3076%206.655%2039.0436%207.05944Z'%20fill='%23007170'/%3e%3cpath%20id='Vector_5'%20d='M52.1067%205.06263C52.0015%205.22693%2052.1987%205.56817%2053.0135%206.64243C53.3946%207.12269%2053.9071%207.84308%2054.1831%208.22222C55.0111%209.3976%2056.0624%2010.8384%2056.3515%2011.1922C56.6275%2011.5335%2056.6406%2011.6598%2056.6406%2014.5541V17.5746H57.4949H58.3491V14.4909C58.3491%2011.4577%2058.3491%2011.3945%2058.6514%2011.0406C58.9405%2010.712%2061.5951%207.14797%2062.0288%206.54132C62.134%206.37702%2062.3967%206.04842%2062.607%205.78302C63.1327%205.12582%2063.0145%204.93625%2062.0288%204.93625C61.1089%204.93625%2061.1614%204.89833%2059.9524%206.54132C58.2177%208.90469%2057.5606%209.73879%2057.4554%209.73879C57.4029%209.73879%2057.1794%209.48606%2056.9692%209.18274C56.2989%208.22222%2054.2488%205.51761%2053.9728%205.21429C53.7494%204.9868%2053.5655%204.93625%2052.9477%204.93625C52.5272%204.93625%2052.1461%204.9868%2052.1067%205.06263Z'%20fill='%23007170'/%3e%3cpath%20id='Vector_6'%20d='M116.53%205.01206C116.478%205.06262%20116.438%207.90625%20116.438%2011.3439V17.5746H117.227H118.016V15.2365V12.8858L118.448%2012.4561C119.224%2011.6978%20120.105%2011.4702%20120.972%2011.8115C121.8%2012.1527%20121.879%2012.4182%20121.958%2015.1102L122.023%2017.5114L122.785%2017.5494L123.535%2017.5873V15.2112C123.535%2013.9095%20123.483%2012.6204%20123.416%2012.355C123.141%2011.2049%20122.05%2010.3834%20120.683%2010.2696C120.118%2010.219%20119.842%2010.2822%20119.119%2010.6109C118.646%2010.8258%20118.199%2011.0026%20118.133%2011.0026C118.067%2011.0026%20118.002%209.65031%20117.989%207.99472L117.949%204.99943L117.293%204.96151C116.925%204.93624%20116.583%204.96151%20116.53%205.01206Z'%20fill='%23007170'/%3e%3cpath%20id='Vector_7'%20d='M105.545%205.64394C105.031%206.27586%20105.308%207.10999%20106.083%207.28692C106.372%207.35012%20106.53%207.28692%20106.859%206.97096C107.2%206.62973%20107.253%206.50335%20107.187%206.16211C107.017%205.32798%20106.044%205.02466%20105.545%205.64394Z'%20fill='%23007170'/%3e%3cpath%20id='Vector_8'%20d='M110.235%209.25856L110.195%2010.4339L109.67%2010.4971L109.144%2010.5603V11.129V11.6978L109.696%2011.7357L110.248%2011.7736L110.288%2014.2634C110.327%2016.513%20110.353%2016.791%20110.589%2017.0943C110.997%2017.6252%20111.641%2017.8653%20112.416%2017.7894C113.126%2017.7136%20114.467%2017.2334%20114.467%2017.0564C114.467%2016.9806%20114.111%2016.1718%20113.994%2015.9569C113.98%2015.9316%20113.783%2016.0074%20113.56%2016.1086C112.995%2016.3993%20112.141%2016.374%20111.969%2016.0706C111.891%2015.9316%20111.838%2014.9458%20111.838%2013.7958V11.7736L112.995%2011.7357L114.138%2011.6978V11.129V10.5603L113.021%2010.4971L111.904%2010.4339L111.864%209.25856L111.825%208.09583H111.05H110.274L110.235%209.25856Z'%20fill='%23007170'/%3e%3cpath%20id='Vector_9'%20d='M48.2306%2010.3581C47.0215%2010.7372%2046.1936%2011.4449%2045.6547%2012.5571C45.3656%2013.1764%2045.3131%2013.4292%2045.3656%2014.137C45.497%2016.2349%2047.1003%2017.7768%2049.1504%2017.7641C50.5567%2017.7515%2051.8446%2016.9173%2052.528%2015.5778C53.0667%2014.5161%2053.0405%2013.366%2052.4622%2012.3297C52.0286%2011.5334%2051.5291%2011.0785%2050.5829%2010.5982C49.9784%2010.3075%2048.7957%2010.1811%2048.2306%2010.3581ZM50.3464%2012.0642C51.2531%2012.6456%2051.6475%2013.96%2051.2007%2014.9585C50.7932%2015.919%2049.663%2016.5635%2048.7036%2016.3865C47.7705%2016.2097%2046.7981%2015.0342%2046.785%2014.0611C46.785%2013.2143%2047.4683%2012.178%2048.2963%2011.8115C48.8482%2011.5587%2049.7156%2011.6725%2050.3464%2012.0642Z'%20fill='%23007170'/%3e%3cpath%20id='Vector_10'%20d='M64.7375%2010.4466C63.9359%2010.7246%2062.9634%2011.5081%2062.5429%2012.2159C62.2011%2012.7973%2062.1617%2012.9742%2062.1617%2013.9726C62.1617%2015.2491%2062.3194%2015.641%2063.1605%2016.5509C63.9227%2017.3724%2065.0792%2017.8779%2066.0255%2017.8021C67.379%2017.6883%2068.6801%2016.8163%2069.2714%2015.603C69.7315%2014.6677%2069.7051%2013.3281%2069.2189%2012.3676C68.3778%2010.7246%2066.3803%209.86519%2064.7375%2010.4466ZM66.7614%2011.8874C67.6681%2012.3297%2068.3384%2013.543%2068.1282%2014.3771C67.7602%2015.8431%2066.4985%2016.7026%2065.2895%2016.3234C64.133%2015.9569%2063.5022%2014.87%2063.673%2013.5682C63.7387%2013.0122%2063.8439%2012.7973%2064.225%2012.4308C65.0792%2011.6219%2065.8678%2011.4449%2066.7614%2011.8874Z'%20fill='%23007170'/%3e%3cpath%20id='Vector_11'%20d='M73.9357%2010.4339C72.7923%2010.8258%2071.9775%2011.8368%2071.7936%2013.088C71.741%2013.505%2071.7936%2013.859%2072.017%2014.4403L72.3193%2015.2239L71.9249%2015.5525C71.4256%2015.9695%2071.1365%2016.4246%2071.0313%2016.9806C70.8999%2017.6126%2071.3468%2018.4719%2071.9513%2018.7879C72.2009%2018.9143%2072.4112%2019.0659%2072.4112%2019.1038C72.4112%2019.1544%2072.1878%2019.3819%2071.9249%2019.6094C71.4388%2020.0138%2071.4256%2020.0518%2071.4256%2020.8732C71.4256%2021.6442%2071.465%2021.7706%2071.8067%2022.1118C72.6123%2022.9124%2073.8166%2023.0667%2075.1711%2022.9824C76.6628%2022.8896%2078.128%2022.491%2078.68%2021.4546C79.3238%2020.2286%2078.9034%2018.9143%2077.6812%2018.3203C77.1423%2018.0675%2076.8532%2018.017%2075.171%2017.979C74.1197%2017.9664%2073.1078%2017.8779%2072.8975%2017.8021C72.2667%2017.562%2072.2667%2016.7658%2072.8975%2016.3614C73.1997%2016.1718%2073.3312%2016.1718%2073.8175%2016.2855C74.1328%2016.374%2074.698%2016.4372%2075.079%2016.4372C77.4183%2016.4246%2078.9559%2013.8969%2077.7205%2012.1022C77.5366%2011.8368%2077.4052%2011.584%2077.4446%2011.5587C77.4709%2011.5334%2077.7205%2011.4324%2078.0096%2011.3439C78.4697%2011.1796%2078.5222%2011.129%2078.5222%2010.7373V10.3075L76.4852%2010.2822C75.0133%2010.2569%2074.3036%2010.2949%2073.9357%2010.4339ZM75.7361%2011.7736C77.0372%2012.4308%2077.0898%2014.4024%2075.8281%2015.009C75.0265%2015.4008%2073.8568%2015.047%2073.4363%2014.2886C72.9895%2013.4671%2073.1866%2012.6204%2073.9883%2011.9632C74.4482%2011.5966%2075.2236%2011.5208%2075.7361%2011.7736ZM76.8926%2019.6978C77.4183%2020.2666%2077.4052%2020.7595%2076.84%2021.303C75.5784%2022.5162%2072.9369%2022.0107%2072.9369%2020.5573C72.9369%2019.5968%2073.6729%2019.205%2075.3419%2019.2429C76.4721%2019.2808%2076.5247%2019.2934%2076.8926%2019.6978Z'%20fill='%23007170'/%3e%3cpath%20id='Vector_12'%20d='M81.7416%2010.4718C80.9137%2010.6867%2080.8874%2010.6994%2080.848%2011.129C80.7954%2011.8115%2080.9662%2011.9632%2081.5708%2011.7862C82.5564%2011.5082%2083.6341%2011.4703%2084.0677%2011.6851C84.5409%2011.9126%2084.6329%2012.1022%2084.6329%2012.8478C84.6329%2013.404%2084.6329%2013.404%2084.278%2013.3155C84.0677%2013.2523%2083.4633%2013.2144%2082.9244%2013.2144C81.8074%2013.227%2081.0846%2013.505%2080.5194%2014.1622C79.6258%2015.186%2080.0464%2016.8795%2081.3606%2017.5114C82.2542%2017.9538%2082.8587%2017.9158%2083.9363%2017.385C84.7643%2016.968%2084.83%2016.9427%2084.9877%2017.145C85.0797%2017.2713%2085.1585%2017.423%2085.1585%2017.4862C85.1585%2017.5367%2085.3819%2017.5746%2085.6579%2017.5494L86.1442%2017.5114L86.1836%2015.1102C86.223%2012.5446%2086.1047%2011.7104%2085.6579%2011.1038C85.0534%2010.2697%2083.529%2010.0295%2081.7416%2010.4718ZM84.4752%2014.3392C84.5672%2014.3898%2084.6329%2014.731%2084.6329%2015.0975C84.6329%2015.6536%2084.5803%2015.8053%2084.278%2016.0833C83.7524%2016.5635%2082.9244%2016.7658%2082.3987%2016.5635C81.7548%2016.3108%2081.6102%2016.0959%2081.6102%2015.4387C81.6102%2014.4277%2082.0439%2014.137%2083.3975%2014.2002C83.9101%2014.2254%2084.3963%2014.2886%2084.4752%2014.3392Z'%20fill='%23007170'/%3e%3cpath%20id='Vector_13'%20d='M145.219%2010.3581C143.931%2010.7626%20142.985%2011.6346%20142.656%2012.7215C142.223%2014.1749%20142.512%2015.6915%20143.418%2016.6014C144.798%2018.0043%20146.744%2018.1939%20148.53%2017.1197C149.095%2016.7784%20149.109%2016.652%20148.609%2016.0706L148.32%2015.7421L147.598%2016.0959C146.993%2016.3866%20146.73%2016.4498%20146.178%2016.4119C145.311%2016.3361%20144.51%2015.8432%20144.233%2015.2239C143.812%2014.2507%20143.707%2014.3013%20146.769%2014.2634L149.49%2014.2254L149.529%2013.5556C149.595%2012.355%20148.886%2011.2302%20147.65%2010.5982C147.084%2010.3202%20145.771%2010.1812%20145.219%2010.3581ZM147.19%2011.8368C147.61%2012.1906%20147.979%2012.7594%20147.979%2013.088C147.979%2013.2523%20147.702%2013.2776%20146.007%2013.2776C144.93%2013.2776%20144.035%2013.2523%20144.035%2013.2144C144.035%2013.1891%20144.128%2012.9237%20144.246%2012.6457C144.693%2011.584%20146.322%2011.1417%20147.19%2011.8368Z'%20fill='%23007170'/%3e%3cpath%20id='Vector_14'%20d='M105.53%2014.0358V17.5873L106.293%2017.5494L107.041%2017.5114V14.0358V10.5603L106.293%2010.5224L105.53%2010.4845V14.0358Z'%20fill='%23007170'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_4'%3e%3crect%20width='150.343'%20height='23.94'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", U = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='image-307%204'%3e%3cpath%20id='Vector'%20d='M16.578%204.56556C14.0802%204.95277%2010.7566%206.50163%208.42002%208.36026C7.03015%209.46383%206.728%209.75424%205.51941%2011.2063C2.71952%2014.517%201.06779%2020.0154%201.57136%2024.2361C1.99437%2027.934%203.60582%2031.8642%205.45898%2033.8003C7.19129%2035.5815%209.91061%2035.9687%2014.9061%2035.1362C18.411%2034.5554%2021.4526%2034.5554%2025.5215%2035.1362C29.4091%2035.6976%2031.2623%2035.6396%2032.8738%2034.8845C33.9011%2034.4005%2035.6132%2032.9678%2035.6132%2032.5806C35.6132%2032.4838%2035.7945%2032.1546%2036.0161%2031.8449C36.6607%2030.993%2037.6074%2028.6503%2038.0707%2026.7336C39.1181%2022.513%2038.2721%2016.7435%2036.1168%2013.4521C35.8348%2013.0456%2035.6132%2012.6583%2035.6132%2012.6003C35.6132%2012.3873%2034.3442%2010.8772%2033.196%209.73488C31.0407%207.54711%2028.5228%206.05633%2025.1388%204.95277C24.0511%204.58492%2023.3058%204.50747%2020.7073%204.44939C18.9952%204.43003%2017.142%204.46875%2016.578%204.56556ZM21.372%205.55295C22.8425%205.94017%2024.9374%208.3409%2024.9374%209.63807C24.9374%209.94785%2025.0381%2010.1802%2025.1589%2010.1802C25.5417%2010.1802%2027.7977%2011.2063%2028.8653%2011.8452C33.1759%2014.4976%2035.9154%2019.9574%2035.5528%2025.1073C35.4118%2026.8111%2034.3643%2030.509%2034.0018%2030.509C33.9212%2030.509%2033.5788%2030.2379%2033.2565%2029.9281C32.9543%2029.599%2032.3903%2029.2505%2032.0479%2029.1343C31.3227%2028.902%2031.2422%2028.7471%2031.6853%2028.3793C32.068%2028.0695%2032.068%2027.5274%2031.6853%2027.1402C31.4436%2026.9079%2031.0407%2026.8691%2029.671%2026.9659L27.9588%2027.0821L27.2538%2026.3658C26.3675%2025.4558%2025.9445%2024.1006%2025.9445%2022.1064C25.9244%2018.9893%2025.2798%2016.5886%2024.2928%2016.0078C24.0309%2015.8529%2023.2856%2015.5818%2022.6209%2015.4076C21.1505%2015.0397%2020.9893%2014.6331%2021.8555%2013.5489C22.3792%2012.8907%2022.4195%2012.6583%2022.4799%2010.974C22.5403%208.86364%2022.2583%208.16666%2021.0699%207.46967C17.9074%205.6304%2015.591%2011.0708%2018.3304%2013.8974C19.116%2014.7106%2018.9146%2015.0204%2017.3434%2015.4269C15.6313%2015.8722%2015.3694%2016.0658%2014.8457%2017.092C14.5032%2017.7889%2014.3421%2018.6408%2014.1407%2020.8092C13.6371%2026.1141%2012.9321%2027.1402%209.85018%2027.0047C8.35959%2026.9272%208.33945%2026.9272%208.13802%2027.45C7.97687%2027.8565%208.01716%2028.0695%208.27902%2028.3406C8.74231%2028.8439%208.72217%2028.902%207.8963%2029.1537C7.41287%2029.3086%207.09058%2029.5796%206.869%2030.0443C6.68771%2030.4122%206.42585%2030.7026%206.28485%2030.7026C6.02299%2030.7026%205.37841%2029.115%204.87483%2027.2176C4.35111%2025.2041%204.55254%2021.6224%205.33813%2019.3765C6.78843%2015.2333%209.66889%2012.2131%2013.7378%2010.548C14.9061%2010.064%2014.9464%2010.0253%2015.168%209.07661C15.5305%207.56647%2017.0413%205.94017%2018.4513%205.53359C19.2369%205.30126%2020.4857%205.30126%2021.372%205.55295Z'%20fill='%23007170'/%3e%3c/g%3e%3c/svg%3e", Y = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='26.3248'%20height='30'%20viewBox='0%200%2026.3248%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M9.58389%2016.8378C9.88562%2016.8378%2010.1615%2016.6666%2010.3006%2016.3695C10.3429%2016.2793%2010.3605%2016.1794%2010.3605%2016.0797V16.0771C10.3605%2015.9116%2010.3152%2015.747%2010.2186%2015.6125C10.0691%2015.4042%209.83872%2015.2861%209.58958%2015.2841C9.58758%2015.2841%209.58559%2015.2841%209.5836%2015.2841C9.158%2015.2841%208.81019%2015.6288%208.80696%2016.0551C8.80374%2016.4834%209.1495%2016.8345%209.57779%2016.8377C9.57985%2016.8377%209.5819%2016.8378%209.58389%2016.8378Z'%20fill='%23E7937B'/%3e%3cpath%20id='Vector_2'%20d='M16.747%2022.5506C16.7449%2022.5506%2016.7429%2022.5505%2016.7409%2022.5505C16.4571%2022.5505%2016.1961%2022.702%2016.0503%2022.9674C16.0307%2023.0031%2016.0147%2023.0408%2016.0026%2023.0797C15.9117%2023.372%2015.9863%2023.6681%2016.1877%2023.8725C16.3333%2024.0203%2016.5277%2024.1026%2016.7352%2024.1042C16.7372%2024.1042%2016.7392%2024.1042%2016.7412%2024.1042C17.1668%2024.1042%2017.5146%2023.7596%2017.5178%2023.3333C17.5211%2022.9049%2017.1753%2022.5538%2016.747%2022.5506Z'%20fill='%23E7937B'/%3e%3cpath%20id='Vector_3'%20d='M25.4543%2012.3073C25.2613%2011.7665%2024.5038%2011.7323%2024.2703%2012.2569C22.139%2017.0445%2017.332%2013.1595%2019.666%209.60504C20.2466%208.72077%2020.5228%207.66498%2020.3738%206.61762C20.264%205.84527%2019.9849%205.06154%2019.5053%204.44272C19.1894%204.03505%2018.5456%204.14397%2018.3876%204.63494C18.019%205.78037%2017.1424%207.4945%2015.2293%207.26118C12.9022%206.97739%2011.759%203.44009%2012.6491%200.835829C12.8407%200.275277%2012.22%20-0.210413%2011.7117%200.0937809C9.39419%201.48056%207.83851%203.99419%208.2596%206.53133C8.6434%208.84388%209.93334%2010.3697%207.92006%2011.4765C6.88114%2012.0292%205.59431%2011.5223%205.21121%2010.4096C5.21121%2010.4096%204.79968%208.41007%203.07201%207.83639C2.7691%207.73579%202.43812%207.87584%202.29754%208.16233C1.58252%209.6194%20-0.454038%2014.3378%200.0917991%2018.0619C0.880335%2024.7854%206.38203%2030.0021%2013.3006%2030C20.7837%2030%2026.3248%2023.9339%2026.3248%2016.4508C26.2843%2015.1519%2025.9795%2013.7797%2025.4543%2012.3073ZM7.00478%2016.0415C7.01557%2014.6261%208.17055%2013.4819%209.58336%2013.4819C9.59005%2013.4819%209.59649%2013.482%209.60318%2013.482C10.3278%2013.4875%2011.0044%2013.7894%2011.4949%2014.3292C11.9036%2014.779%2012.1413%2015.3653%2012.1612%2015.9728C12.1852%2016.7017%2011.9097%2017.3897%2011.3935%2017.8982C10.9075%2018.377%2010.2656%2018.6399%209.58424%2018.6399C9.5775%2018.6399%209.57088%2018.6398%209.56419%2018.6398C8.14224%2018.6291%206.99411%2017.4634%207.00478%2016.0415ZM10.3805%2025.3396C10.2069%2025.6002%209.92097%2025.7411%209.62973%2025.7411C9.45803%2025.7411%209.28456%2025.6922%209.13097%2025.5899C8.7168%2025.314%208.60477%2024.7545%208.88065%2024.3404L15.8121%2013.9362C16.088%2013.522%2016.6475%2013.4101%2017.0616%2013.6859C17.4758%2013.9618%2017.5878%2014.5213%2017.3119%2014.9354L10.3805%2025.3396ZM19.32%2023.3469C19.3092%2024.7622%2018.1543%2025.9064%2016.7414%2025.9064C16.7348%2025.9064%2016.7283%2025.9063%2016.7216%2025.9062C16.0328%2025.901%2015.3872%2025.6279%2014.9037%2025.1371C14.3955%2024.6212%2014.1306%2023.9296%2014.1651%2023.2016C14.1939%2022.5966%2014.4384%2022.0156%2014.8513%2021.5724C15.3456%2021.0415%2016.0211%2020.7483%2016.7406%2020.7483C16.7463%2020.7483%2016.7519%2020.7483%2016.7575%2020.7484C18.1774%2020.7589%2019.3201%2021.9194%2019.3201%2023.3393L19.32%2023.3469Z'%20fill='%23E7937B'/%3e%3c/g%3e%3c/svg%3e", J = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='1'%20height='30'%20viewBox='0%200%201%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector%2018'%20d='M0.5%200V30'%20stroke='%23757575'/%3e%3c/svg%3e", W = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='1'%20height='32'%20viewBox='0%200%201%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector%2019'%20d='M0.5%200V32'%20stroke='%23D6D6D6'/%3e%3c/svg%3e", X = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame'%3e%3cpath%20id='Vector'%20d='M4.73987%2019.9056H11.1321C11.5463%2019.9056%2011.8821%2019.5698%2011.8821%2019.1556C11.8821%2018.7415%2011.5463%2018.4056%2011.1321%2018.4056H4.73987C3.7804%2018.4056%203%2017.6285%203%2016.6731V8.69702H17.666V9.95386C17.666%2010.368%2018.0018%2010.7039%2018.416%2010.7039C18.8302%2010.7039%2019.166%2010.368%2019.166%209.95386V6.69824C19.166%204.91187%2017.7125%203.45837%2015.9261%203.45837H15.123V2.99219C15.123%202.578%2014.7872%202.24219%2014.373%202.24219C13.9589%202.24219%2013.623%202.578%2013.623%202.99219V3.45837H7.04114V2.99219C7.04114%202.578%206.70532%202.24219%206.29114%202.24219C5.87695%202.24219%205.54114%202.578%205.54114%202.99219V3.45837H4.73987C3.62311%203.45837%202.63649%204.02646%202.05376%204.88875C1.7043%205.40552%201.5%206.02808%201.5%206.69751V16.6731C1.5%2018.4554%202.95349%2019.9056%204.73987%2019.9056ZM17.6642%207.19702H3V6.69824C3%206.45851%203.04871%206.23%203.13678%206.02203C3.40086%205.39893%204.01875%204.96057%204.73694%204.96057H5.54114V5.42896C5.54114%205.84314%205.87695%206.17896%206.29114%206.17896C6.70532%206.17896%207.04114%205.84314%207.04114%205.42896V4.96057H13.623V5.42896C13.623%205.84314%2013.9589%206.17896%2014.373%206.17896C14.7872%206.17896%2015.123%205.84314%2015.123%205.42896V4.96057H15.9276C16.8853%204.96057%2017.6642%205.73987%2017.6642%206.69751V7.19702Z'%20fill='%23003A67'/%3e%3cpath%20id='Vector_2'%20d='M17.2933%2011.3438C14.4208%2011.3438%2012.084%2013.6805%2012.084%2016.5531C12.084%2019.4257%2014.4208%2021.7628%2017.2933%2021.7628C20.1659%2021.7628%2022.5031%2019.4257%2022.5031%2016.5531C22.5031%2013.6805%2020.1659%2011.3438%2017.2933%2011.3438ZM13.584%2016.5531C13.584%2014.5078%2015.248%2012.8438%2017.2933%2012.8438C19.339%2012.8438%2021.0031%2014.5078%2021.0031%2016.5531C21.0031%2018.5988%2019.339%2020.2628%2017.2933%2020.2628C15.248%2020.2628%2013.584%2018.5988%2013.584%2016.5531Z'%20fill='%23003A67'/%3e%3cpath%20id='Vector_3'%20d='M18.9969%2014.8447C18.704%2014.5518%2018.2294%2014.5518%2017.9364%2014.8447L17.291%2015.4902L16.6455%2014.8447C16.3525%2014.5518%2015.8779%2014.5518%2015.585%2014.8447C15.292%2015.1377%2015.292%2015.6123%2015.585%2015.9053L16.2304%2016.5507L15.585%2017.1962C15.292%2017.4891%2015.292%2017.9637%2015.585%2018.2567C15.7314%2018.4032%2015.9233%2018.4764%2016.1152%2018.4764C16.3071%2018.4764%2016.499%2018.4032%2016.6455%2018.2567L17.291%2017.6113L17.9364%2018.2567C18.0829%2018.4032%2018.2748%2018.4764%2018.4667%2018.4764C18.6586%2018.4764%2018.8505%2018.4032%2018.9969%2018.2567C19.2899%2017.9637%2019.2899%2017.4891%2018.9969%2017.1962L18.3515%2016.5507L18.9969%2015.9053C19.2899%2015.6123%2019.2899%2015.1377%2018.9969%2014.8447Z'%20fill='%23003A67'/%3e%3c/g%3e%3c/svg%3e", Q = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='fi_17742490'%3e%3cpath%20id='Vector'%20d='M19.25%2013.5498C18.8984%2013.3701%2018.6494%2012.9541%2018.6001%2012.4639L18.2666%209.12792C17.9616%206.08208%2015.6448%203.64013%2012.75%203.29851V1.99999C12.75%201.58593%2012.4141%201.24999%2012%201.24999C11.5859%201.24999%2011.25%201.58593%2011.25%201.99999V3.29937C10.0834%203.43737%208.98218%203.89458%208.05078%204.64843C6.73877%205.71191%205.92383%207.22167%205.75635%208.90136L5.3999%2012.4639C5.35058%2012.9541%205.10156%2013.3701%204.75%2013.5498C3.68115%2014.0957%203.09326%2015.2637%203.28711%2016.4561C3.5%2017.7637%204.7124%2018.75%206.10693%2018.75H17.8931C19.2886%2018.75%2020.5005%2017.7637%2020.7129%2016.4561C20.9067%2015.2637%2020.3188%2014.0957%2019.25%2013.5498ZM19.2324%2016.2158C19.1367%2016.8057%2018.561%2017.25%2017.8931%2017.25H6.10693C5.43945%2017.25%204.86377%2016.8057%204.76757%2016.2158C4.6787%2015.6689%204.94579%2015.1338%205.43261%2014.8857C6.24609%2014.4697%206.7915%2013.6201%206.89208%2012.6123L7.24853%209.0498C7.37646%207.77246%207.99658%206.62304%208.99511%205.81445C9.85302%205.11914%2010.9038%204.75%2012.0005%204.75C12.1792%204.75%2012.3589%204.75977%2012.5395%204.7793C14.7568%205.02344%2016.5376%206.91504%2016.7744%209.27735L17.1079%2012.6123C17.2085%2013.6201%2017.7539%2014.4697%2018.5674%2014.8857C19.0542%2015.1338%2019.3213%2015.6689%2019.2324%2016.2158ZM21.7441%208.90723C21.7954%209.31836%2021.5039%209.69239%2021.0933%209.74414C21.0615%209.74805%2021.0303%209.75%2020.999%209.75C20.6265%209.75%2020.3032%209.47266%2020.2559%209.09277C19.9546%206.68359%2018.6196%204.53222%2016.5938%203.19043C16.2485%202.96191%2016.1538%202.49707%2016.3823%202.15137C16.6118%201.80567%2017.0767%201.71094%2017.4219%201.94043C19.8135%203.52344%2021.3887%206.06348%2021.7441%208.90723ZM3.00098%209.75C2.96973%209.75%202.93848%209.74805%202.90674%209.74414C2.4961%209.69238%202.20459%209.31836%202.25586%208.90723C2.61133%206.06348%204.18652%203.52344%206.57813%201.94043C6.92334%201.71094%207.38819%201.80566%207.61768%202.15137C7.8462%202.49707%207.75147%202.96192%207.40625%203.19043C5.38037%204.53223%204.04541%206.68359%203.74414%209.09277C3.69678%209.47265%203.37353%209.75%203.00098%209.75ZM13.25%2020H14.75C14.75%2021.5166%2013.5166%2022.75%2012%2022.75C10.4834%2022.75%209.25%2021.5166%209.25%2020H10.75C10.75%2020.6894%2011.3105%2021.25%2012%2021.25C12.6895%2021.25%2013.25%2020.6894%2013.25%2020Z'%20fill='%23003A67'/%3e%3c/g%3e%3c/svg%3e", G = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='fi_17742490'%3e%3cpath%20id='Vector'%20d='M19.25%2013.5498C18.8984%2013.3701%2018.6494%2012.9541%2018.6001%2012.4639L18.2666%209.12792C17.9616%206.08208%2015.6448%203.64013%2012.75%203.29851V1.99999C12.75%201.58593%2012.4141%201.24999%2012%201.24999C11.5859%201.24999%2011.25%201.58593%2011.25%201.99999V3.29937C10.0834%203.43737%208.98218%203.89458%208.05078%204.64843C6.73877%205.71191%205.92383%207.22167%205.75635%208.90136L5.3999%2012.4639C5.35058%2012.9541%205.10156%2013.3701%204.75%2013.5498C3.68115%2014.0957%203.09326%2015.2637%203.28711%2016.4561C3.5%2017.7637%204.7124%2018.75%206.10693%2018.75H17.8931C19.2886%2018.75%2020.5005%2017.7637%2020.7129%2016.4561C20.9067%2015.2637%2020.3188%2014.0957%2019.25%2013.5498ZM19.2324%2016.2158C19.1367%2016.8057%2018.561%2017.25%2017.8931%2017.25H6.10693C5.43945%2017.25%204.86377%2016.8057%204.76757%2016.2158C4.6787%2015.6689%204.94579%2015.1338%205.43261%2014.8857C6.24609%2014.4697%206.7915%2013.6201%206.89208%2012.6123L7.24853%209.0498C7.37646%207.77246%207.99658%206.62304%208.99511%205.81445C9.85302%205.11914%2010.9038%204.75%2012.0005%204.75C12.1792%204.75%2012.3589%204.75977%2012.5395%204.7793C14.7568%205.02344%2016.5376%206.91504%2016.7744%209.27735L17.1079%2012.6123C17.2085%2013.6201%2017.7539%2014.4697%2018.5674%2014.8857C19.0542%2015.1338%2019.3213%2015.6689%2019.2324%2016.2158ZM21.7441%208.90723C21.7954%209.31836%2021.5039%209.69239%2021.0933%209.74414C21.0615%209.74805%2021.0303%209.75%2020.999%209.75C20.6265%209.75%2020.3032%209.47266%2020.2559%209.09277C19.9546%206.68359%2018.6196%204.53222%2016.5938%203.19043C16.2485%202.96191%2016.1538%202.49707%2016.3823%202.15137C16.6118%201.80567%2017.0767%201.71094%2017.4219%201.94043C19.8135%203.52344%2021.3887%206.06348%2021.7441%208.90723ZM3.00098%209.75C2.96973%209.75%202.93848%209.74805%202.90674%209.74414C2.4961%209.69238%202.20459%209.31836%202.25586%208.90723C2.61133%206.06348%204.18652%203.52344%206.57813%201.94043C6.92334%201.71094%207.38819%201.80566%207.61768%202.15137C7.8462%202.49707%207.75147%202.96192%207.40625%203.19043C5.38037%204.53223%204.04541%206.68359%203.74414%209.09277C3.69678%209.47265%203.37353%209.75%203.00098%209.75ZM13.25%2020H14.75C14.75%2021.5166%2013.5166%2022.75%2012%2022.75C10.4834%2022.75%209.25%2021.5166%209.25%2020H10.75C10.75%2020.6894%2011.3105%2021.25%2012%2021.25C12.6895%2021.25%2013.25%2020.6894%2013.25%2020Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e", K = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='16.875'%20height='20'%20viewBox='0%200%2016.875%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M16.3933%203.23852L8.73708%200.0597218C8.54529%20-0.0198877%208.3297%20-0.0199268%208.13794%200.0597218L0.481681%203.23852C0.190078%203.35961%200%203.6443%200%203.96004V7.82431C0%2013.1451%203.21598%2017.9314%208.14228%2019.9421C8.3315%2020.0193%208.54349%2020.0193%208.73275%2019.9421C13.659%2017.9314%2016.875%2013.1452%2016.875%207.82431V3.96004C16.875%203.6443%2016.685%203.35961%2016.3933%203.23852ZM15.3125%207.82431C15.3125%2012.3476%2012.6563%2016.5115%208.43751%2018.3702C4.33149%2016.5612%201.5625%2012.4701%201.5625%207.82431V4.4816L8.43751%201.62715L15.3125%204.4816V7.82431ZM7.574%2010.4577L10.932%207.09973C11.237%206.79465%2011.7317%206.79462%2012.0368%207.09973C12.3419%207.40485%2012.3419%207.8995%2012.0368%208.20458L8.12642%2012.1149C7.82126%2012.4201%207.32661%2012.42%207.02157%2012.1149L4.83821%209.93157C4.53309%209.62646%204.53309%209.13181%204.83821%208.82673C5.14333%208.52165%205.63798%208.52161%205.94306%208.82673L7.574%2010.4577Z'%20fill='%23003A67'/%3e%3c/g%3e%3c/svg%3e", $ = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2035991'%3e%3cpath%20id='Star%201'%20d='M7%200L8.5716%204.83688H13.6574L9.5429%207.82624L11.1145%2012.6631L7%209.67376L2.8855%2012.6631L4.4571%207.82624L0.342604%204.83688H5.4284L7%200Z'%20fill='%23FAA900'/%3e%3c/g%3e%3c/svg%3e", n2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='fi_1828884'%20clip-path='url(%23clip0_0_7)'%3e%3cpath%20id='Vector'%20d='M19.9479%207.67148C19.8169%207.2665%2019.4577%206.97887%2019.0328%206.94057L13.2602%206.41641L10.9776%201.07372C10.8093%200.682166%2010.426%200.428711%2010.0001%200.428711C9.57422%200.428711%209.19091%200.682166%209.0226%201.07463L6.73998%206.41641L0.966514%206.94057C0.542309%206.97978%200.184023%207.2665%200.0523365%207.67148C-0.0793503%208.07646%200.0422654%208.52065%200.363166%208.80066L4.72653%2012.6274L3.43987%2018.2951C3.34573%2018.7118%203.50747%2019.1426%203.85325%2019.3925C4.0391%2019.5268%204.25655%2019.5952%204.47582%2019.5952C4.66488%2019.5952%204.85242%2019.5442%205.02073%2019.4435L10.0001%2016.4675L14.9776%2019.4435C15.3419%2019.6626%2015.801%2019.6426%2016.146%2019.3925C16.492%2019.1418%2016.6536%2018.7109%2016.5594%2018.2951L15.2728%2012.6274L19.6361%208.80142C19.957%208.52065%2020.0796%208.07722%2019.9479%207.67148Z'%20fill='%23FAA900'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_7'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", e2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='16_star'%3e%3cpath%20id='Vector'%20d='M14.8512%206.55066L11.7834%209.54115L12.5079%2013.7649C12.5394%2013.9496%2012.4636%2014.1362%2012.3119%2014.2465C12.2262%2014.3091%2012.1242%2014.3406%2012.0223%2014.3406C11.944%2014.3406%2011.8652%2014.3219%2011.7933%2014.284L8%2012.2898L4.20722%2014.2835C4.04174%2014.3711%203.8403%2014.3569%203.68861%2014.2461C3.53692%2014.1357%203.46107%2013.9491%203.49259%2013.7644L4.21707%209.54066L1.14876%206.55066C1.0148%206.41965%200.966041%206.22363%201.02416%206.04584C1.08227%205.86805%201.23643%205.73753%201.4221%205.71044L5.66208%205.09481L7.55822%201.25229C7.7242%200.915905%208.2758%200.915905%208.44178%201.25229L10.3379%205.09481L14.5779%205.71044C14.7636%205.73753%2014.9177%205.86755%2014.9758%206.04584C15.034%206.22413%2014.9852%206.41916%2014.8512%206.55066Z'%20fill='%23E7937B'/%3e%3c/g%3e%3c/svg%3e", t2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='20'%20height='10.5785'%20viewBox='0%200%2020%2010.5785'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M10.5785%205.7379C10.3896%205.85596%2010.1771%205.90319%209.98819%205.90319C9.79929%205.90319%209.58678%205.85596%209.39787%205.7379L0%200V7.62692C0%209.2562%201.32231%2010.5785%202.95159%2010.5785H17.0484C18.6777%2010.5785%2020%209.2562%2020%207.62692V0L10.5785%205.7379Z'%20fill='%23757575'/%3e%3c/g%3e%3c/svg%3e", i2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='19.8111'%20height='8.35891'%20viewBox='0%200%2019.8111%208.35891'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M16.954%200H2.85714C1.46399%200%200.283353%200.991736%200%202.31405L9.91736%208.35891L19.8111%202.31405C19.5277%200.991736%2018.3471%200%2016.954%200Z'%20fill='%23757575'/%3e%3c/g%3e%3c/svg%3e", a2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='237'%20height='237'%20viewBox='0%200%20237%20237'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Vector'%20opacity='0.3'%3e%3cpath%20d='M177.374%2019.0758C175.067%2012.4532%20172.578%207.11748%20170.896%203.80919C169.335%200.737907%20165.824%20-0.716498%20162.549%200.351855C159.017%201.50307%20153.478%203.51803%20147.158%206.57312C150.973%2011.1831%20154.858%2016.5544%20158.24%2022.5396C164.86%2020.6927%20171.399%2019.6378%20177.374%2019.0758Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M89.8417%206.57265C83.521%203.51757%2077.9825%201.5026%2074.4506%200.351392C71.1752%20-0.716961%2067.6646%200.737444%2066.1037%203.80873C64.4216%207.11748%2061.9326%2012.4532%2059.6251%2019.0758C65.6001%2019.6378%2072.1403%2020.6927%2078.7601%2022.5392C82.142%2016.554%2086.027%2011.1826%2089.8417%206.57265Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M6.57265%2089.8417C11.1849%2086.0247%2016.5591%2082.1383%2022.547%2078.755C20.7047%2072.1278%2019.653%2065.5797%2019.0906%2059.6195C12.4611%2061.9285%207.11979%2064.4202%203.80873%2066.1037C0.737444%2067.6646%20-0.716961%2071.1752%200.351392%2074.4506C1.5026%2077.9825%203.51803%2083.5214%206.57265%2089.8417Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M0.351855%20162.549C-0.716498%20165.824%200.737906%20169.335%203.80919%20170.896C7.12072%20172.579%2012.462%20175.071%2019.0916%20177.38C19.654%20171.42%2020.7057%20164.871%2022.5475%20158.245C16.5586%20154.861%2011.1849%20150.974%206.57265%20147.158C3.51757%20153.479%201.5026%20159.017%200.351855%20162.549Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M59.6256%20217.924C61.9331%20224.546%2064.4221%20229.882%2066.1042%20233.19C67.6651%20236.262%2071.1756%20237.716%2074.451%20236.648C77.9829%20235.497%2083.5219%20233.482%2089.8422%20230.426C86.027%20225.817%2082.1425%20220.446%2078.7606%20214.46C72.1403%20216.307%2065.6006%20217.362%2059.6256%20217.924Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M147.158%20230.427C153.479%20233.482%20159.017%20235.497%20162.549%20236.648C165.824%20237.717%20169.335%20236.262%20170.896%20233.191C172.578%20229.882%20175.067%20224.546%20177.374%20217.925C171.399%20217.363%20164.86%20216.308%20158.24%20214.461C154.858%20220.446%20150.973%20225.817%20147.158%20230.427Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M230.427%20147.158C225.815%20150.975%20220.441%20154.861%20214.453%20158.245C216.295%20164.871%20217.347%20171.419%20217.909%20177.38C224.538%20175.071%20229.88%20172.579%20233.191%20170.895C236.262%20169.335%20237.717%20165.824%20236.648%20162.549C235.497%20159.017%20233.482%20153.478%20230.427%20147.158Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M236.648%2074.4506C237.717%2071.1752%20236.262%2067.6646%20233.191%2066.1037C229.879%2064.4202%20224.538%2061.9285%20217.909%2059.6195C217.347%2065.5802%20216.295%2072.1283%20214.453%2078.755C220.441%2082.1383%20225.815%2086.0247%20230.427%2089.8417C233.482%2083.5214%20235.497%2077.9825%20236.648%2074.4506Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M118.502%20199.672C106.791%20207.09%2095.5895%20210.252%2094.0642%20210.662C93.6495%20210.774%2093.2306%20210.87%2092.8093%20210.956C100.115%20222.639%20109.402%20231.376%20113.977%20235.31C115.288%20236.437%20116.894%20237%20118.5%20237C120.106%20237%20121.713%20236.437%20123.023%20235.31C127.597%20231.376%20136.884%20222.639%20144.19%20210.956C143.768%20210.87%20143.348%20210.773%20142.931%20210.661C141.396%20210.247%20130.192%20207.071%20118.502%20199.672Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M200.945%20166.392C199.576%20167.181%20189.416%20172.863%20175.898%20175.897C172.864%20189.422%20167.179%20199.579%20166.391%20200.947C166.175%20201.321%20165.947%20201.685%20165.71%20202.042C179.137%20205.138%20191.882%20204.749%20197.899%20204.296C199.622%20204.166%20201.156%20203.428%20202.292%20202.292C203.428%20201.156%20204.166%20199.622%20204.295%20197.899C204.749%20191.882%20205.137%20179.137%20202.042%20165.709C201.685%20165.946%20201.321%20166.176%20200.945%20166.392Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M36.0537%2070.6081C37.4239%2069.8189%2047.5844%2064.1365%2061.1022%2061.1017C64.1369%2047.5839%2069.8189%2037.4244%2070.6072%2036.0556C70.8234%2035.6807%2071.0525%2035.3159%2071.2895%2034.9576C57.8624%2031.8623%2045.1172%2032.2511%2039.1005%2032.7038C35.6547%2032.9639%2032.9639%2035.6538%2032.7038%2039.1014C32.2506%2045.1181%2031.8623%2057.8633%2034.9576%2071.2909C35.315%2071.0544%2035.6783%2070.8243%2036.0537%2070.6081Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M235.31%20123.023C236.437%20121.712%20237%20120.106%20237%20118.5C237%20116.894%20236.437%20115.287%20235.31%20113.977C231.376%20109.402%20222.638%20100.115%20210.954%2092.8084C210.869%2093.2287%20210.774%2093.649%20210.662%2094.0675C210.252%2095.5913%20207.088%20106.793%20199.673%20118.5C207.086%20130.204%20210.252%20141.406%20210.662%20142.931C210.775%20143.35%20210.869%20143.77%20210.955%20144.191C222.639%20136.885%20231.376%20127.598%20235.31%20123.023Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M26.3377%2094.0684C26.2252%2093.6495%2026.1307%2093.2292%2026.0451%2092.8089C14.3613%20100.115%205.62373%20109.402%201.68961%20113.977C-0.562818%20116.597%20-0.563744%20120.402%201.69007%20123.024C5.62419%20127.598%2014.3617%20136.886%2026.0456%20144.192C26.1312%20143.771%2026.2256%20143.35%2026.3386%20142.931C26.7464%20141.412%2029.9065%20130.211%2037.3272%20118.499C29.9135%20106.795%2026.7482%2095.5936%2026.3377%2094.0684Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M166.393%2036.0561C167.18%2037.4216%20172.864%2047.5779%20175.899%2061.1022C189.413%2064.1364%20199.573%2069.8175%20200.943%2070.6058C201.319%2070.8229%20201.684%2071.0539%20202.042%2071.2909C205.138%2057.8629%20204.749%2045.1176%20204.296%2039.1005C204.166%2037.3772%20203.429%2035.8431%20202.293%2034.7072C201.157%2033.5713%20199.622%2032.8334%20197.899%2032.7038C191.883%2032.2506%20179.138%2031.8618%20165.711%2034.9572C165.947%2035.3154%20166.177%2035.6807%20166.393%2036.0561Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M70.6063%20200.943C69.818%20199.575%2064.1364%20189.415%2061.1017%20175.898C47.5876%20172.864%2037.4267%20167.183%2036.0574%20166.394C35.6811%20166.177%2035.3164%20165.947%2034.9581%20165.709C31.8623%20179.137%2032.2511%20191.882%2032.7043%20197.9C32.9644%20201.345%2035.6543%20204.036%2039.1019%20204.296C45.1185%20204.749%2057.8647%20205.138%2071.2927%20202.042C71.0534%20201.682%2070.8224%20201.317%2070.6063%20200.943Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M118.497%2037.3281C130.208%2029.9098%20141.41%2026.7473%20142.935%2026.3372C143.35%2026.2256%20143.769%2026.1289%20144.19%2026.0433C136.884%2014.3603%20127.597%205.62373%20123.023%201.68961C120.402%20-0.562818%20116.598%20-0.563744%20113.976%201.69007C109.402%205.62373%20100.115%2014.3608%2092.8093%2026.0433C93.2315%2026.1294%2093.6513%2026.2261%2094.0679%2026.3381C95.6047%2026.7524%20106.809%2029.9302%20118.497%2037.3281Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M118.5%20139.33C130.004%20139.33%20139.33%20130.004%20139.33%20118.5C139.33%20106.996%20130.004%2097.6697%20118.5%2097.6697C106.996%2097.6697%2097.6697%20106.996%2097.6697%20118.5C97.6697%20130.004%20106.996%20139.33%20118.5%20139.33Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M154.359%20194.013C154.738%20193.356%20162.505%20179.691%20163.746%20163.746C179.691%20162.504%20193.356%20154.738%20194.013%20154.36C196.74%20152.788%20198.07%20149.579%20197.252%20146.539C197.055%20145.807%20192.885%20130.653%20182.488%20118.5C192.885%20106.347%20197.055%2091.1929%20197.252%2090.4606C198.069%2087.4213%20196.74%2084.2116%20194.013%2082.6401C193.356%2082.2619%20179.691%2074.4941%20163.746%2073.254C162.505%2057.3088%20154.738%2043.6438%20154.36%2042.9869C152.788%2040.2596%20149.579%2038.9297%20146.539%2039.7481C145.807%2039.9448%20130.653%2044.1155%20118.5%2054.5125C106.347%2044.1159%2091.1929%2039.9453%2090.4611%2039.7481C87.4213%2038.9302%2084.2116%2040.26%2082.6405%2042.9874C82.2619%2043.6442%2074.4955%2057.3093%2073.254%2073.254C57.3088%2074.4955%2043.6438%2082.2623%2042.9874%2082.6405C40.2596%2084.212%2038.9302%2087.4217%2039.7481%2090.4611C39.9448%2091.1929%2044.1155%20106.348%2054.5125%20118.5C44.1155%20130.653%2039.9448%20145.807%2039.7481%20146.539C38.9306%20149.579%2040.2596%20152.788%2042.9874%20154.36C43.6442%20154.738%2057.3088%20162.505%2073.254%20163.747C74.4955%20179.691%2082.2623%20193.356%2082.6405%20194.013C83.426%20195.377%2084.6212%20196.391%2086.0002%20196.963C87.3791%20197.534%2088.9409%20197.662%2090.4611%20197.252C91.1929%20197.056%20106.347%20192.885%20118.5%20182.488C130.653%20192.885%20145.808%20197.055%20146.539%20197.253C149.579%20198.07%20152.788%20196.74%20154.359%20194.013ZM118.5%20153.217C99.3569%20153.217%2083.783%20137.643%2083.783%20118.5C83.783%2099.3569%2099.3569%2083.783%20118.5%2083.783C137.643%2083.783%20153.217%2099.3569%20153.217%20118.5C153.217%20137.643%20137.643%20153.217%20118.5%20153.217Z'%20fill='%23CFE0E7'/%3e%3c/g%3e%3c/svg%3e", s2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='841'%20height='841'%20viewBox='0%200%20841%20841'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Vector'%20opacity='0.3'%3e%3cpath%20d='M629.418%2067.691C621.229%2044.1906%20612.397%2025.2565%20606.428%2013.517C600.889%202.61848%20588.432%20-2.54251%20576.809%201.24857C564.276%205.33367%20544.621%2012.4838%20522.193%2023.3249C535.731%2039.6833%20549.517%2058.7438%20561.518%2079.9824C585.009%2073.4285%20608.215%2069.6851%20629.418%2067.691Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M318.805%2023.3232C296.376%2012.4822%20276.723%205.33202%20264.19%201.24692C252.567%20-2.54415%20240.109%202.61684%20234.571%2013.5154C228.602%2025.2565%20219.769%2044.1906%20211.581%2067.691C232.784%2069.6851%20255.992%2073.4285%20279.482%2079.9808C291.483%2058.7422%20305.269%2039.6817%20318.805%2023.3232Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M23.3232%20318.806C39.6899%20305.261%2058.7603%20291.47%2080.0087%20279.464C73.4712%20255.947%2069.7393%20232.711%2067.7435%20211.561C44.2185%20219.755%2025.2647%20228.597%2013.5154%20234.571C2.61684%20240.109%20-2.54415%20252.567%201.24692%20264.19C5.33202%20276.723%2012.4838%20296.378%2023.3232%20318.806Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M1.24857%20576.809C-2.54251%20588.432%202.61848%20600.889%2013.517%20606.428C25.268%20612.402%2044.2218%20621.244%2067.7468%20629.437C69.7426%20608.287%2073.4745%20585.05%2080.0103%20561.535C58.7586%20549.529%2039.6899%20535.736%2023.3232%20522.193C12.4822%20544.623%205.33202%20564.276%201.24857%20576.809Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M211.583%20773.309C219.771%20796.808%20228.603%20815.742%20234.572%20827.482C240.111%20838.38%20252.568%20843.541%20264.191%20839.75C276.724%20835.665%20296.379%20828.515%20318.807%20817.674C305.269%20801.315%20291.484%20782.256%20279.484%20761.018C255.992%20767.572%20232.785%20771.315%20211.583%20773.309Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M522.193%20817.675C544.623%20828.516%20564.276%20835.667%20576.809%20839.752C588.432%20843.543%20600.889%20838.382%20606.428%20827.483C612.397%20815.742%20621.229%20796.808%20629.418%20773.311C608.215%20771.317%20585.009%20767.573%20561.518%20761.021C549.516%20782.256%20535.731%20801.317%20522.193%20817.675Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M817.677%20522.193C801.31%20535.738%20782.24%20549.529%20760.99%20561.535C767.527%20585.05%20771.259%20608.286%20773.255%20629.436C796.78%20621.242%20815.734%20612.4%20827.483%20606.426C838.382%20600.888%20843.543%20588.43%20839.752%20576.807C835.667%20564.276%20828.516%20544.621%20817.677%20522.193Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M839.752%20264.19C843.543%20252.567%20838.382%20240.109%20827.483%20234.571C815.732%20228.597%20796.778%20219.755%20773.255%20211.561C771.259%20232.713%20767.527%20255.949%20760.99%20279.464C782.24%20291.47%20801.309%20305.261%20817.675%20318.806C828.516%20296.378%20835.667%20276.723%20839.752%20264.19Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M420.508%20708.539C378.952%20734.865%20339.201%20746.085%20333.789%20747.54C332.317%20747.936%20330.831%20748.278%20329.336%20748.583C355.261%20790.041%20388.214%20821.044%20404.45%20835.005C409.101%20839.003%20414.8%20841%20420.499%20841C426.199%20841%20431.9%20839.001%20436.551%20835.003C452.783%20821.043%20485.738%20790.041%20511.663%20748.583C510.165%20748.278%20508.673%20747.935%20507.195%20747.537C501.748%20746.067%20461.988%20734.797%20420.508%20708.539Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M713.058%20590.447C708.199%20593.245%20672.148%20613.407%20624.179%20624.176C613.411%20672.169%20593.24%20708.211%20590.441%20713.066C589.677%20714.393%20588.866%20715.684%20588.025%20716.952C635.673%20727.936%20680.898%20726.556%20702.248%20724.948C708.363%20724.487%20713.807%20721.868%20717.838%20717.839C721.869%20713.808%20724.487%20708.363%20724.947%20702.248C726.555%20680.898%20727.935%20635.671%20716.951%20588.021C715.683%20588.862%20714.392%20589.679%20713.058%20590.447Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M127.938%20250.555C132.8%20247.754%20168.854%20227.59%20216.823%20216.821C227.591%20168.853%20247.754%20132.801%20250.551%20127.944C251.318%20126.614%20252.131%20125.319%20252.972%20124.048C205.326%20113.064%20160.099%20114.444%20138.749%20116.05C126.522%20116.973%20116.973%20126.518%20116.05%20138.752C114.442%20160.103%20113.064%20205.329%20124.048%20252.977C125.316%20252.138%20126.605%20251.322%20127.938%20250.555Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M835.005%20436.551C839.003%20431.899%20841%20426.201%20841%20420.501C841%20414.801%20839.001%20409.1%20835.003%20404.45C821.043%20388.216%20790.037%20355.259%20748.577%20329.333C748.273%20330.824%20747.938%20332.316%20747.539%20333.801C746.085%20339.208%20734.856%20378.957%20708.544%20420.501C734.848%20462.034%20746.083%20501.782%20747.539%20507.195C747.94%20508.681%20748.275%20510.173%20748.579%20511.666C790.039%20485.741%20821.044%20452.786%20835.005%20436.551Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M93.4598%20333.804C93.0606%20332.317%2092.7255%20330.826%2092.4217%20329.334C50.9613%20355.259%2019.9559%20388.216%205.99563%20404.45C-1.99717%20413.748%20-2.00046%20427.249%205.99727%20436.552C19.9576%20452.786%2050.9629%20485.743%2092.4233%20511.667C92.7272%20510.174%2093.0623%20508.681%2093.4631%20507.193C94.9102%20501.802%20106.124%20462.057%20132.456%20420.496C106.149%20378.963%2094.9167%20339.216%2093.4598%20333.804Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M590.449%20127.946C593.241%20132.791%20613.411%20168.831%20624.181%20216.823C672.136%20227.59%20708.191%20247.749%20713.05%20250.546C714.387%20251.317%20715.679%20252.136%20716.952%20252.977C727.938%20205.328%20726.558%20160.101%20724.95%20138.749C724.488%20132.634%20721.872%20127.19%20717.841%20123.159C713.81%20119.128%20708.365%20116.51%20702.25%20116.05C680.901%20114.442%20635.674%20113.062%20588.028%20124.046C588.867%20125.318%20589.682%20126.614%20590.449%20127.946Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M250.548%20713.05C247.751%20708.196%20227.59%20672.144%20216.821%20624.178C168.866%20613.411%20132.809%20593.251%20127.951%20590.454C126.615%20589.683%20125.321%20588.866%20124.05%20588.023C113.064%20635.673%20114.444%20680.899%20116.052%20702.251C116.975%20714.479%20126.52%20724.027%20138.754%20724.95C160.104%20726.558%20205.334%20727.938%20252.984%20716.952C252.135%20715.674%20251.315%20714.378%20250.548%20713.05Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M420.489%20132.46C462.045%20106.136%20501.797%2094.9135%20507.21%2093.4581C508.681%2093.0623%20510.168%2092.719%20511.661%2092.4151C485.736%2050.958%20452.783%2019.9559%20436.549%205.99563C427.25%20-1.99717%20413.75%20-2.00046%20404.446%205.99727C388.214%2019.9559%20355.261%2050.9596%20329.336%2092.4151C330.834%2092.7206%20332.324%2093.0639%20333.802%2093.4614C339.256%2094.9315%20379.016%20106.208%20420.489%20132.46Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M420.499%20494.415C461.322%20494.415%20494.415%20461.322%20494.415%20420.499C494.415%20379.677%20461.322%20346.583%20420.499%20346.583C379.677%20346.583%20346.583%20379.677%20346.583%20420.499C346.583%20461.322%20379.677%20494.415%20420.499%20494.415Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M547.747%20688.458C549.09%20686.128%20576.651%20637.639%20581.057%20581.057C637.639%20576.65%20686.128%20549.09%20688.458%20547.748C698.137%20542.174%20702.856%20530.784%20699.953%20519.997C699.255%20517.4%20684.456%20463.624%20647.562%20420.499C684.456%20377.375%20699.255%20323.6%20699.953%20321.002C702.854%20310.216%20698.138%20298.827%20688.458%20293.25C686.128%20291.908%20637.637%20264.344%20581.057%20259.944C576.651%20203.362%20549.09%20154.871%20547.748%20152.54C542.174%20142.862%20530.784%20138.143%20519.997%20141.047C517.4%20141.745%20463.624%20156.545%20420.499%20193.439C377.373%20156.546%20323.6%20141.747%20321.003%20141.047C310.216%20138.145%20298.827%20142.864%20293.252%20152.542C291.908%20154.873%20264.349%20203.363%20259.944%20259.944C203.362%20264.349%20154.871%20291.91%20152.542%20293.252C142.862%20298.828%20138.145%20310.218%20141.047%20321.003C141.745%20323.6%20156.545%20377.377%20193.439%20420.501C156.545%20463.625%20141.745%20517.4%20141.047%20519.999C138.146%20530.784%20142.862%20542.174%20152.542%20547.75C154.873%20549.092%20203.362%20576.655%20259.944%20581.058C264.349%20637.639%20291.91%20686.129%20293.252%20688.46C296.039%20693.301%20300.28%20696.9%20305.174%20698.927C310.067%20700.954%20315.609%20701.407%20321.003%20699.955C323.6%20699.257%20377.375%20684.457%20420.501%20647.563C463.625%20684.457%20517.402%20699.255%20519.999%20699.957C530.784%20702.856%20542.172%20698.137%20547.747%20688.458ZM420.499%20543.693C352.57%20543.693%20297.306%20488.428%20297.306%20420.499C297.306%20352.57%20352.57%20297.306%20420.499%20297.306C488.428%20297.306%20543.693%20352.57%20543.693%20420.499C543.693%20488.428%20488.428%20543.693%20420.499%20543.693Z'%20fill='%23CFE0E7'/%3e%3c/g%3e%3c/svg%3e", o2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='&%23239;&%23128;&%23151;'%20d='M7%2014C3.11719%2014%200%2010.8828%200%207C0%203.14453%203.11719%200%207%200C10.8555%200%2014%203.14453%2014%207C14%2010.8828%2010.8555%2014%207%2014ZM6.34375%207C6.34375%207.21875%206.45312%207.4375%206.61719%207.54688L9.24219%209.29688C9.54297%209.51562%209.95312%209.43359%2010.1445%209.13281C10.3633%208.83203%2010.2812%208.42188%209.98047%208.20312L7.65625%206.67188V3.28125C7.65625%202.92578%207.35547%202.625%206.97266%202.625C6.61719%202.625%206.31641%202.92578%206.31641%203.28125L6.34375%207Z'%20fill='white'/%3e%3c/svg%3e", l2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='10'%20height='12'%20viewBox='0%200%2010%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='&%23239;&%23128;&%23163;'%20d='M1.78571%204.5V3.375C1.78571%201.52344%203.21429%200%205%200C6.76339%200%208.21429%201.52344%208.21429%203.375V4.5H8.57143C9.35268%204.5%2010%205.17969%2010%206V10.5C10%2011.3438%209.35268%2012%208.57143%2012H1.42857C0.625%2012%200%2011.3438%200%2010.5V6C0%205.17969%200.625%204.5%201.42857%204.5H1.78571ZM3.21429%204.5H6.78571V3.375C6.78571%202.34375%205.98214%201.5%205%201.5C3.99554%201.5%203.21429%202.34375%203.21429%203.375V4.5Z'%20fill='%23007170'/%3e%3c/svg%3e", C2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='14.8833'%20height='15.9941'%20viewBox='0%200%2014.8833%2015.9941'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='_09.yoga'%3e%3cpath%20id='Vector'%20d='M4.86408%209.35003C4.78908%209.46253%204.73908%209.52815%204.7047%209.5969C4.27033%2010.5%203.60158%2011.2094%202.86408%2011.8657C2.5297%2012.1625%202.20158%2012.4719%201.87345%2012.7782C1.39533%2013.2219%200.773454%2013.2125%200.326579%2012.7594C-0.110921%2012.3125%20-0.110921%2011.6907%200.339079%2011.2313C0.935954%2010.6219%201.55158%2010.0313%202.13908%209.41878C2.37033%209.17815%202.57033%208.91253%202.7422%208.62815C3.32033%207.65315%203.88283%206.66878%204.43908%205.68128C4.72033%205.1844%205.16095%204.9219%205.69533%204.8219C6.92658%204.59065%208.16096%204.58128%209.38283%204.89378C9.86721%205.01878%2010.2328%205.2969%2010.4828%205.7469C11.011%206.6969%2011.5828%207.62503%2012.0985%208.58128C12.386%209.11253%2012.8235%209.49378%2013.2297%209.9094C13.6766%2010.3657%2014.136%2010.8094%2014.5828%2011.2657C14.9922%2011.6844%2014.9797%2012.3125%2014.5672%2012.7438C14.1547%2013.175%2013.5203%2013.2375%2013.0922%2012.8469C12.436%2012.2469%2011.7953%2011.6282%2011.1485%2011.0157C10.7235%2010.6094%2010.4641%2010.0875%2010.1735%209.58753C10.136%209.52503%2010.0953%209.46565%2010.0328%209.36253C10.011%209.45315%209.99533%209.49378%209.99533%209.5344C9.95158%2010.4094%209.91721%2011.2813%209.86721%2012.1563C9.85783%2012.3407%209.90471%2012.4219%2010.0922%2012.4719C10.8578%2012.675%2011.6078%2012.925%2012.3766%2013.1094C13.3297%2013.3375%2013.7578%2014.7375%2013.1891%2015.5032C12.8297%2015.9844%2012.3141%2016.0594%2011.7703%2015.95C10.3891%2015.675%209.01408%2015.3782%207.63908%2015.0938C7.5047%2015.0688%207.37033%2015.0688%207.23595%2015.0938C5.86408%2015.375%204.49533%2015.6657%203.12658%2015.9438C2.93283%2015.9813%202.73283%2015.9875%202.53595%2015.9688C1.81095%2015.8969%201.3547%2015.2813%201.43595%2014.5032C1.5172%2013.7407%201.89845%2013.2875%202.63595%2013.0782C3.37345%2012.8688%204.09845%2012.6594%204.8297%2012.4563C4.96095%2012.4188%205.0172%2012.3625%205.00783%2012.2188C4.96095%2011.3063%204.92345%2010.3938%204.88283%209.4844C4.88595%209.46253%204.87658%209.43753%204.86408%209.35003Z'%20fill='%23A6A6A6'/%3e%3cpath%20id='Vector_2'%20d='M5.21487%202.21253C5.22112%200.984404%206.22425%20-0.00622059%207.45237%202.94122e-05C8.6805%200.00627941%209.67112%201.0094%209.66487%202.23753C9.65237%203.48128%208.66487%204.45628%207.41487%204.45003C6.19612%204.4469%205.20862%203.44065%205.21487%202.21253Z'%20fill='%23A6A6A6'/%3e%3c/g%3e%3c/svg%3e", r2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='325'%20height='325'%20viewBox='0%200%20325%20325'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Vector'%20opacity='0.3'%3e%3cpath%20d='M243.235%2026.1588C240.071%2017.0772%20236.658%209.76025%20234.351%205.22357C232.21%201.0119%20227.396%20-0.982539%20222.905%200.482502C218.062%202.06117%20210.466%204.82431%20201.799%209.01377C207.031%2015.3354%20212.358%2022.7012%20216.996%2030.9088C226.074%2028.3761%20235.042%2026.9294%20243.235%2026.1588Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M123.201%209.01313C114.533%204.82367%20106.938%202.06053%20102.095%200.481867C97.6031%20-0.983174%2092.789%201.01126%2090.6486%205.22294C88.3419%209.76025%2084.9287%2017.0772%2081.7644%2026.1588C89.958%2026.9294%2098.9266%2028.3761%20108.004%2030.9081C112.642%2022.7006%20117.97%2015.3348%20123.201%209.01313Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M9.01313%20123.201C15.3379%20117.966%2022.7076%20112.637%2030.9189%20107.997C28.3926%2098.9094%2026.9504%2089.93%2026.1791%2081.7568C17.088%2084.923%209.76343%2088.34%205.22294%2090.6486C1.01126%2092.789%20-0.983174%2097.6031%200.481867%20102.095C2.06053%20106.938%204.82431%20114.534%209.01313%20123.201Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M0.482502%20222.905C-0.98254%20227.396%201.0119%20232.21%205.22358%20234.351C9.7647%20236.66%2017.0893%20240.076%2026.1804%20243.243C26.9516%20235.069%2028.3938%20226.089%2030.9196%20217.002C22.707%20212.363%2015.3379%20207.032%209.01313%20201.799C4.82367%20210.467%202.06053%20218.062%200.482502%20222.905Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M81.765%20298.841C84.9293%20307.922%2088.3425%20315.239%2090.6492%20319.776C92.7896%20323.988%2097.6037%20325.982%20102.095%20324.517C106.939%20322.938%20114.534%20320.175%20123.201%20315.986C117.97%20309.664%20112.643%20302.299%20108.005%20294.091C98.9266%20296.624%2089.9586%20298.071%2081.765%20298.841Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M201.799%20315.986C210.467%20320.176%20218.062%20322.939%20222.905%20324.518C227.396%20325.983%20232.21%20323.988%20234.351%20319.777C236.658%20315.239%20240.071%20307.922%20243.235%20298.842C235.042%20298.071%20226.074%20296.625%20216.996%20294.093C212.357%20302.299%20207.031%20309.665%20201.799%20315.986Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M315.987%20201.799C309.662%20207.033%20302.293%20212.363%20294.081%20217.002C296.607%20226.089%20298.049%20235.069%20298.82%20243.242C307.911%20240.076%20315.236%20236.659%20319.777%20234.35C323.988%20232.21%20325.983%20227.396%20324.518%20222.904C322.939%20218.062%20320.176%20210.466%20315.987%20201.799Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M324.518%20102.095C325.983%2097.6031%20323.988%2092.789%20319.777%2090.6486C315.235%2088.34%20307.911%2084.923%20298.82%2081.7568C298.049%2089.9307%20296.607%2098.9101%20294.081%20107.997C302.293%20112.637%20309.661%20117.966%20315.986%20123.201C320.176%20114.534%20322.939%20106.938%20324.518%20102.095Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M162.503%20273.811C146.444%20283.985%20131.083%20288.321%20128.991%20288.883C128.422%20289.036%20127.848%20289.168%20127.27%20289.286C137.289%20305.307%20150.023%20317.288%20156.297%20322.683C158.095%20324.228%20160.297%20325%20162.5%20325C164.702%20325%20166.906%20324.228%20168.703%20322.682C174.975%20317.288%20187.711%20305.307%20197.729%20289.286C197.15%20289.168%20196.574%20289.035%20196.003%20288.882C193.898%20288.314%20178.533%20283.959%20162.503%20273.811Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M275.557%20228.175C273.68%20229.256%20259.748%20237.048%20241.211%20241.21C237.049%20259.756%20229.254%20273.684%20228.173%20275.561C227.878%20276.073%20227.564%20276.572%20227.239%20277.062C245.652%20281.307%20263.129%20280.774%20271.38%20280.152C273.743%20279.974%20275.847%20278.962%20277.405%20277.405C278.962%20275.847%20279.974%20273.743%20280.152%20271.38C280.773%20263.129%20281.307%20245.652%20277.062%20227.238C276.572%20227.563%20276.073%20227.878%20275.557%20228.175Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M49.4408%2096.8255C51.3197%2095.7432%2065.2528%2087.9508%2083.7899%2083.7893C87.9514%2065.2522%2095.7432%2051.3203%2096.8242%2049.4433C97.1207%2048.9292%2097.4349%2048.429%2097.7599%2047.9377C79.3472%2043.693%2061.8695%2044.2262%2053.6188%2044.847C48.8936%2045.2037%2045.2037%2048.8924%2044.847%2053.6201C44.2255%2061.8708%2043.693%2079.3485%2047.9377%2097.7618C48.4277%2097.4374%2048.926%2097.1219%2049.4408%2096.8255Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M322.683%20168.703C324.228%20166.905%20325%20164.703%20325%20162.5C325%20160.298%20324.228%20158.094%20322.682%20156.297C317.288%20150.024%20305.306%20137.288%20289.284%20127.269C289.166%20127.845%20289.037%20128.422%20288.882%20128.995C288.321%20131.085%20283.981%20146.446%20273.813%20162.5C283.978%20178.55%20288.32%20193.911%20288.882%20196.003C289.037%20196.577%20289.167%20197.154%20289.284%20197.731C305.306%20187.712%20317.288%20174.977%20322.683%20168.703Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M36.117%20128.997C35.9628%20128.422%2035.8333%20127.846%2035.7159%20127.27C19.6937%20137.288%207.71186%20150.024%202.31698%20156.297C-0.771797%20159.891%20-0.773067%20165.108%202.31761%20168.703C7.71249%20174.977%2019.6944%20187.713%2035.7165%20197.731C35.8339%20197.154%2035.9634%20196.577%2036.1183%20196.002C36.6775%20193.919%2041.0111%20178.559%2051.187%20162.498C41.0206%20146.448%2036.6801%20131.088%2036.117%20128.997Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M228.176%2049.444C229.255%2051.3165%20237.049%2065.2439%20241.211%2083.7899C259.743%2087.9508%20273.677%2095.7413%20275.554%2096.8223C276.071%2097.12%20276.57%2097.4368%20277.062%2097.7618C281.308%2079.3478%20280.775%2061.8702%20280.153%2053.6188C279.975%2051.2556%20278.964%2049.152%20277.406%2047.5943C275.848%2046.0365%20273.744%2045.0247%20271.381%2044.847C263.131%2044.2256%20245.653%2043.6923%20227.24%2047.937C227.565%2048.4283%20227.879%2048.9292%20228.176%2049.444Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M96.823%20275.554C95.7419%20273.679%2087.9508%20259.747%2083.7893%20241.21C65.2573%20237.049%2051.3235%20229.259%2049.4459%20228.178C48.9298%20227.88%2048.4296%20227.564%2047.9383%20227.238C43.693%20245.652%2044.2262%20263.13%2044.8476%20271.381C45.2044%20276.107%2048.893%20279.796%2053.6207%20280.153C61.8714%20280.775%2079.3504%20281.308%2097.7643%20277.062C97.4361%20276.569%2097.1194%20276.068%2096.823%20275.554Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M162.496%2051.1883C178.555%2041.0155%20193.917%2036.6788%20196.008%2036.1164C196.577%2035.9634%20197.152%2035.8308%20197.729%2035.7133C187.71%2019.6925%20174.975%207.71186%20168.702%202.31698C165.109%20-0.771797%20159.891%20-0.773067%20156.296%202.31761C150.023%207.71186%20137.289%2019.6931%20127.27%2035.7133C127.849%2035.8314%20128.425%2035.9641%20128.996%2036.1177C131.104%2036.6858%20146.469%2041.0435%20162.496%2051.1883Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M162.5%20191.064C178.275%20191.064%20191.064%20178.275%20191.064%20162.5C191.064%20146.724%20178.275%20133.935%20162.5%20133.935C146.724%20133.935%20133.935%20146.724%20133.935%20162.5C133.935%20178.275%20146.724%20191.064%20162.5%20191.064Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M211.674%20266.051C212.193%20265.15%20222.844%20246.412%20224.546%20224.546C246.412%20222.843%20265.15%20212.193%20266.051%20211.674C269.791%20209.52%20271.615%20205.119%20270.493%20200.95C270.223%20199.947%20264.504%20179.165%20250.247%20162.5C264.504%20145.835%20270.223%20125.054%20270.493%20124.049C271.614%20119.882%20269.792%20115.48%20266.051%20113.325C265.15%20112.806%20246.411%20102.154%20224.546%20100.454C222.844%2078.588%20212.193%2059.8491%20211.674%2058.9483C209.52%2055.2083%20205.119%2053.3846%20200.95%2054.5069C199.947%2054.7766%20179.165%2060.4959%20162.5%2074.7534C145.834%2060.4965%20125.054%2054.7773%20124.05%2054.5069C119.882%2053.3852%20115.48%2055.2089%20113.326%2058.949C112.806%2059.8497%20102.156%2078.5886%20100.454%20100.454C78.588%20102.156%2059.8491%20112.807%2058.949%20113.326C55.2083%20115.481%2053.3852%20119.882%2054.5069%20124.05C54.7766%20125.054%2060.4959%20145.835%2074.7534%20162.5C60.4959%20179.166%2054.7766%20199.947%2054.5069%20200.951C53.3859%20205.119%2055.2083%20209.52%2058.949%20211.675C59.8497%20212.194%2078.588%20222.845%20100.454%20224.547C102.156%20246.412%20112.807%20265.151%20113.326%20266.052C114.403%20267.922%20116.042%20269.313%20117.933%20270.097C119.824%20270.88%20121.965%20271.055%20124.05%20270.494C125.054%20270.224%20145.835%20264.505%20162.5%20250.247C179.166%20264.505%20199.947%20270.223%20200.951%20270.495C205.119%20271.615%20209.519%20269.791%20211.674%20266.051ZM162.5%20210.107C136.249%20210.107%20114.892%20188.751%20114.892%20162.5C114.892%20136.249%20136.249%20114.892%20162.5%20114.892C188.751%20114.892%20210.107%20136.249%20210.107%20162.5C210.107%20188.751%20188.751%20210.107%20162.5%20210.107Z'%20fill='%23CFE0E7'/%3e%3c/g%3e%3c/svg%3e", p2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='42'%20height='42'%20viewBox='0%200%2042%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='fi_12672080'%3e%3cpath%20id='Vector'%20d='M21.0003%204.8125C19.309%204.8125%2017.9378%206.18362%2017.9378%207.875C17.9378%209.56637%2019.309%2010.9375%2021.0003%2010.9375C22.6917%2010.9375%2024.0628%209.56637%2024.0628%207.875C24.0628%206.18362%2022.6917%204.8125%2021.0003%204.8125ZM15.3129%207.875C15.3129%204.73387%2017.8593%202.1875%2021.0003%202.1875C24.1414%202.1875%2026.6878%204.73387%2026.6878%207.875C26.6878%2011.0161%2024.1414%2013.5625%2021.0003%2013.5625C17.8593%2013.5625%2015.3129%2011.0161%2015.3129%207.875ZM21.0003%2017.0986C20.377%2017.0986%2019.8119%2017.1344%2019.4936%2017.1884L17.9333%2017.4512C14.4114%2018.0442%2011.8128%2021.1288%2011.8128%2024.7628C11.8128%2026.6542%2010.8775%2028.4261%209.31119%2029.4812L9.13404%2029.6006C8.68819%2029.9009%208.20435%2030.1401%207.69527%2030.3114L5.6693%2030.9939C4.98235%2031.2253%204.23789%2030.8558%204.00652%2030.169C3.77513%2029.4821%204.14445%2028.7374%204.83142%2028.5061L6.85737%2027.8238C7.14346%2027.7274%207.4159%2027.5928%207.66745%2027.4234L7.8446%2027.304C8.6804%2026.741%209.18785%2025.7887%209.18785%2024.7628C9.18785%2019.8671%2012.6924%2015.6718%2017.4974%2014.8626L19.0549%2014.6003C19.055%2014.6003%2019.0547%2014.6003%2019.0549%2014.6003C19.5876%2014.5101%2020.3233%2014.4736%2021.0003%2014.4736C21.6772%2014.4735%2022.4126%2014.5098%2022.9456%2014.6003C22.9458%2014.6003%2022.9455%2014.6002%2022.9456%2014.6003L24.5033%2014.8626C29.3083%2015.6718%2032.8129%2019.8671%2032.8129%2024.7628C32.8129%2025.7887%2033.3203%2026.741%2034.1561%2027.304L34.3332%2027.4234C34.5849%2027.5928%2034.8572%2027.7274%2035.1433%2027.8238L37.1693%2028.5061C37.8562%2028.7374%2038.2256%2029.4821%2037.9943%2030.169C37.7629%2030.8558%2037.0184%2031.2253%2036.3314%2030.9939L34.3054%2030.3114C33.7964%2030.1401%2033.3125%2029.9009%2032.8668%2029.6006L32.6895%2029.4812C31.1232%2028.4261%2030.1878%2026.6542%2030.1878%2024.7628C30.1878%2021.1288%2027.5893%2018.0442%2024.0674%2017.4512L22.5067%2017.1883C22.1888%2017.1343%2021.6239%2017.0985%2021.0003%2017.0986ZM15.5753%2027.2125C16.0103%2026.6326%2016.833%2026.5151%2017.4129%2026.95C17.9928%2027.3849%2018.1102%2028.2076%2017.6753%2028.7875L16.0575%2030.9447C16.0446%2030.9619%2016.0319%2030.9789%2016.0194%2030.9955C15.7981%2031.2907%2015.6242%2031.5227%2015.4237%2031.7324C14.9305%2032.2479%2014.3288%2032.6475%2013.6622%2032.9019C13.3912%2033.0054%2013.1098%2033.0757%2012.7519%2033.165C12.7316%2033.17%2012.7111%2033.1753%2012.6903%2033.1803L9.5518%2033.965C8.82367%2034.147%208.31285%2034.8014%208.31285%2035.5518C8.31285%2036.4551%209.04516%2037.1875%209.94851%2037.1875H11.1451C13.8504%2037.1875%2016.4828%2036.3101%2018.6471%2034.6869L21.9628%2032.2C22.5428%2031.7651%2023.3655%2031.8825%2023.8003%2032.4625C24.2352%2033.0424%2024.1178%2033.8651%2023.5379%2034.3L21.9546%2035.4874L22.8153%2035.8101C23.7496%2036.1604%2024.171%2036.3179%2024.5943%2036.4504C25.8687%2036.8487%2027.1875%2037.0877%2028.5206%2037.1623C28.9634%2037.187%2029.4133%2037.1875%2030.4111%2037.1875H32.0521C32.9555%2037.1875%2033.6879%2036.4551%2033.6879%2035.5518C33.6879%2034.8014%2033.177%2034.147%2032.4489%2033.965L29.87%2033.3203C29.8217%2033.3083%2029.774%2033.2964%2029.7269%2033.2847C28.8946%2033.0771%2028.2378%2032.9133%2027.6509%2032.575C27.4753%2032.4739%2027.3065%2032.3617%2027.1453%2032.2392C26.6056%2031.8297%2026.1998%2031.2879%2025.6856%2030.6012C25.6564%2030.5624%2025.627%2030.523%2025.5971%2030.4831L24.3253%2028.7875C23.8905%2028.2076%2024.0079%2027.3849%2024.5878%2026.95C25.1678%2026.5151%2025.9905%2026.6326%2026.4253%2027.2125L27.6971%2028.9081C28.3419%2029.768%2028.5222%2029.9889%2028.7322%2030.1483C28.8055%2030.204%2028.8823%2030.2549%2028.9622%2030.3009C29.1905%2030.4327%2029.4641%2030.513%2030.5069%2030.7737L33.0855%2031.4184C34.9823%2031.8925%2036.3129%2033.5968%2036.3129%2035.5518C36.3129%2037.905%2034.4054%2039.8125%2032.0521%2039.8125H30.3669C29.4247%2039.8125%2028.8986%2039.8125%2028.3742%2039.7833C26.8249%2039.6966%2025.2922%2039.4188%2023.8112%2038.9559C23.3098%2038.7991%2022.8174%2038.6145%2021.9352%2038.2835L19.4281%2037.3434C16.972%2038.9506%2014.0944%2039.8125%2011.1451%2039.8125H9.94851C7.59542%2039.8125%205.68785%2037.905%205.68785%2035.5518C5.68785%2033.5968%207.01844%2031.8925%208.91515%2031.4184L12.0536%2030.6337C12.5011%2030.5219%2012.6206%2030.4897%2012.7261%2030.4495C13.029%2030.334%2013.3026%2030.1523%2013.5267%2029.918C13.6047%2029.8363%2013.6807%2029.7386%2013.9575%2029.3697L15.5753%2027.2125Z'%20fill-rule='evenodd'%20clip-rule='evenodd'%20fill='%23003A67'/%3e%3c/g%3e%3c/svg%3e", f2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='4'%20height='4'%20viewBox='0%200%204%204'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20id='Ellipse%201'%20cx='2'%20cy='2'%20r='2'%20fill='%23757575'/%3e%3c/svg%3e", c2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='70'%20height='70'%20viewBox='0%200%2070%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='fi_9256620'%3e%3cpath%20id='Vector'%20d='M35%2053.9555C34.1403%2053.957%2033.2887%2053.7887%2032.4943%2053.4601C31.6999%2053.1315%2030.9782%2052.6491%2030.3708%2052.0407L27.8272%2049.4964C27.4908%2049.1584%2027.0908%2048.8904%2026.6502%2048.7079C26.2095%2048.5254%2025.7371%2048.4321%2025.2602%2048.4333H22.2794C20.5438%2048.4313%2018.88%2047.741%2017.6528%2046.5138C16.4255%2045.2866%2015.7352%2043.6227%2015.7333%2041.8872V38.9064C15.7345%2038.4294%2015.6411%2037.9569%2015.4585%2037.5163C15.2759%2037.0756%2015.0077%2036.6756%2014.6694%2036.3393L12.126%2033.7959C10.8999%2032.5672%2010.2114%2030.9024%2010.2114%2029.1667C10.2114%2027.4309%2010.8999%2025.7661%2012.126%2024.5374L14.6702%2021.9939C15.0083%2021.6575%2015.2763%2021.2574%2015.4587%2020.8168C15.6412%2020.3762%2015.7346%2019.9038%2015.7333%2019.4269V16.4461C15.7353%2014.7106%2016.4256%2013.0467%2017.6528%2011.8195C18.88%2010.5923%2020.5439%209.90197%2022.2795%209.9H25.2603C25.7373%209.90125%2026.2097%209.80787%2026.6504%209.62526C27.091%209.44265%2027.4911%209.17444%2027.8273%208.83616L30.3709%206.29262C31.5995%205.0666%2033.2643%204.37805%2035.0001%204.37805C36.7358%204.37805%2038.4006%205.0666%2039.6293%206.29262L42.1728%208.83687C42.5092%209.17492%2042.9093%209.44293%2043.3499%209.62541C43.7905%209.80789%2044.2629%209.90122%2044.7399%209.9H47.7206C49.4561%209.90197%2051.12%2010.5923%2052.3472%2011.8195C53.5745%2013.0467%2054.2648%2014.7106%2054.2667%2016.4461V19.4269C54.2655%2019.9039%2054.3589%2020.3763%2054.5415%2020.817C54.7241%2021.2576%2054.9923%2021.6576%2055.3306%2021.9939L57.8741%2024.5374C59.1001%2025.7661%2059.7887%2027.4309%2059.7887%2029.1667C59.7887%2030.9024%2059.1001%2032.5672%2057.8741%2033.7959L55.3306%2036.3394C54.9923%2036.6757%2054.7241%2037.0757%2054.5415%2037.5164C54.3589%2037.957%2054.2655%2038.4295%2054.2667%2038.9065V41.8873C54.2648%2043.6228%2053.5745%2045.2867%2052.3472%2046.5139C51.12%2047.7411%2049.4561%2048.4314%2047.7206%2048.4334H44.7398C44.2628%2048.4321%2043.7903%2048.5255%2043.3497%2048.7081C42.909%2048.8908%2042.509%2049.159%2042.1728%2049.4973L39.6292%2052.0408C39.0217%2052.649%2038.3%2053.1313%2037.5056%2053.4599C36.7112%2053.7885%2035.8597%2053.9569%2035%2053.9555ZM22.2795%2012.8167C21.3172%2012.8179%2020.3948%2013.2006%2019.7144%2013.881C19.034%2014.5614%2018.6512%2015.4839%2018.65%2016.4461V19.4269C18.6522%2020.2869%2018.484%2021.1388%2018.1549%2021.9334C17.8259%2022.7279%2017.3426%2023.4494%2016.7331%2024.0561L14.1881%2026.5996C13.5082%2027.281%2013.1264%2028.2042%2013.1264%2029.1667C13.1264%2030.1292%2013.5082%2031.0524%2014.1881%2031.7337L16.7324%2034.2772C17.3422%2034.8838%2017.8256%2035.6052%2018.1548%2036.3998C18.4839%2037.1944%2018.6523%2038.0464%2018.65%2038.9065V41.8873C18.6512%2042.8495%2019.034%2043.772%2019.7144%2044.4524C20.3948%2045.1328%2021.3172%2045.5155%2022.2795%2045.5167H25.2603C26.1203%2045.5145%2026.9722%2045.6828%2027.7668%2046.0118C28.5614%2046.3408%2029.2828%2046.8241%2029.8895%2047.4336L32.433%2049.9785C33.1143%2050.6584%2034.0375%2051.0403%2035%2051.0403C35.9625%2051.0403%2036.8857%2050.6584%2037.567%2049.9785L40.1106%2047.4343C40.7171%2046.8245%2041.4385%2046.341%2042.2331%2046.0119C43.0277%2045.6827%2043.8797%2045.5144%2044.7398%2045.5167H47.7205C48.6828%2045.5155%2049.6052%2045.1327%2050.2856%2044.4523C50.966%2043.7719%2051.3488%2042.8494%2051.35%2041.8872V38.9064C51.3478%2038.0464%2051.516%2037.1945%2051.8451%2036.3999C52.1741%2035.6053%2052.6574%2034.8838%2053.2669%2034.2772L55.8119%2031.7337C56.4918%2031.0524%2056.8736%2030.1292%2056.8736%2029.1667C56.8736%2028.2042%2056.4918%2027.281%2055.8119%2026.5996L53.2676%2024.0561C52.6578%2023.4496%2052.1744%2022.7281%2051.8452%2021.9335C51.5161%2021.1389%2051.3477%2020.287%2051.35%2019.4269V16.4461C51.3488%2015.4839%2050.966%2014.5614%2050.2856%2013.881C49.6052%2013.2006%2048.6828%2012.8179%2047.7205%2012.8167H44.7398C43.8798%2012.8189%2043.0279%2012.6506%2042.2333%2012.3216C41.4387%2011.9926%2040.7172%2011.5093%2040.1106%2010.8998L37.567%208.35479C36.8857%207.67491%2035.9625%207.29308%2035%207.29308C34.0375%207.29308%2033.1143%207.67491%2032.433%208.35479L29.8894%2010.899C29.2829%2011.5088%2028.5615%2011.9923%2027.7669%2012.3214C26.9723%2012.6506%2026.1203%2012.8189%2025.2602%2012.8167H22.2795Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M35.0001%2044.7922C31.9098%2044.7922%2028.8888%2043.8758%2026.3193%2042.1589C23.7497%2040.442%2021.747%2038.0017%2020.5644%2035.1466C19.3818%2032.2915%2019.0723%2029.1498%2019.6752%2026.1188C20.2781%2023.0878%2021.7663%2020.3037%2023.9515%2018.1185C26.1367%2015.9333%2028.9208%2014.4451%2031.9518%2013.8422C34.9828%2013.2393%2038.1245%2013.5488%2040.9796%2014.7314C43.8347%2015.914%2046.275%2017.9167%2047.9919%2020.4863C49.7088%2023.0558%2050.6252%2026.0768%2050.6252%2029.1671C50.6204%2033.3097%2048.9727%2037.2812%2046.0434%2040.2104C43.1142%2043.1397%2039.1427%2044.7874%2035.0001%2044.7922ZM35.0001%2016.4587C32.4866%2016.4587%2030.0296%2017.204%2027.9397%2018.6004C25.8498%2019.9968%2024.2209%2021.9816%2023.259%2024.3038C22.2972%2026.626%2022.0455%2029.1812%2022.5359%2031.6464C23.0262%2034.1116%2024.2366%2036.376%2026.0139%2038.1533C27.7912%2039.9306%2030.0556%2041.141%2032.5208%2041.6314C34.986%2042.1217%2037.5413%2041.87%2039.8634%2040.9082C42.1856%2039.9463%2044.1704%2038.3174%2045.5668%2036.2275C46.9632%2034.1376%2047.7086%2031.6806%2047.7086%2029.1671C47.7048%2025.7978%2046.3646%2022.5675%2043.9822%2020.1851C41.5997%2017.8026%2038.3694%2016.4624%2035.0001%2016.4587Z'%20fill='black'/%3e%3cpath%20id='Vector_3'%20d='M19.1663%2064.8673C19.0879%2064.8673%2019.0096%2064.8645%2018.9306%2064.8581C18.4352%2064.8209%2017.9577%2064.657%2017.5439%2064.382C17.1301%2064.107%2016.794%2063.7303%2016.5679%2063.288L13.4796%2057.3592L6.87795%2056.2576C6.3891%2056.176%205.92906%2055.9713%205.54116%2055.6628C5.15326%2055.3543%204.85027%2054.9522%204.66072%2054.4942C4.47118%2054.0363%204.40132%2053.5376%204.45772%2053.0452C4.51412%2052.5528%204.69493%2052.0829%204.98312%2051.6797L15.8387%2036.7247C15.9512%2036.5697%2016.0931%2036.4384%2016.2564%2036.3383C16.4196%2036.2382%2016.6009%2036.1713%2016.7901%2036.1412C16.9792%2036.1112%2017.1723%2036.1187%2017.3585%2036.1634C17.5447%2036.208%2017.7203%2036.2889%2017.8753%2036.4014C18.0302%2036.5139%2018.1615%2036.6558%2018.2616%2036.819C18.3617%2036.9822%2018.4287%2037.1636%2018.4587%2037.3527C18.4887%2037.5418%2018.4812%2037.735%2018.4366%2037.9212C18.3919%2038.1074%2018.311%2038.283%2018.1986%2038.4379L7.34864%2053.3858L13.961%2054.4739C14.4123%2054.5481%2014.8395%2054.7283%2015.2075%2054.9998C15.5755%2055.2713%2015.8739%2055.6262%2016.078%2056.0355L19.1577%2061.9471L28.7736%2048.6981C28.886%2048.5431%2029.0278%2048.4117%2029.191%2048.3115C29.3542%2048.2112%2029.5355%2048.1441%2029.7246%2048.114C29.9137%2048.0838%2030.1069%2048.0912%2030.2932%2048.1357C30.4794%2048.1802%2030.6551%2048.261%2030.8101%2048.3734C30.9652%2048.4858%2031.0966%2048.6276%2031.1968%2048.7908C31.297%2048.954%2031.3641%2049.1353%2031.3943%2049.3244C31.4244%2049.5135%2031.417%2049.7067%2031.3725%2049.893C31.328%2050.0792%2031.2472%2050.2549%2031.1348%2050.4099L21.5247%2063.666C21.2545%2064.0384%2020.8999%2064.3415%2020.49%2064.5503C20.08%2064.7592%2019.6264%2064.8678%2019.1663%2064.8673Z'%20fill='black'/%3e%3cpath%20id='Vector_4'%20d='M50.5858%2064.9759C50.1235%2064.9771%2049.6677%2064.8675%2049.2565%2064.6563C48.8453%2064.445%2048.4907%2064.1383%2048.2224%2063.7618L38.7575%2050.5186C38.6449%2050.3629%2038.5642%2050.1864%2038.52%2049.9994C38.4758%2049.8124%2038.4691%2049.6184%2038.5001%2049.4288C38.5311%2049.2391%2038.5993%2049.0575%2038.7007%2048.8943C38.8022%2048.7311%2038.9349%2048.5895%2039.0912%2048.4777C39.2475%2048.366%2039.4244%2048.2862%2039.6117%2048.2431C39.7989%2048.1999%2039.9929%2048.1942%2040.1824%2048.2262C40.3718%2048.2582%2040.5531%2048.3274%2040.7158%2048.4297C40.8785%2048.532%2041.0193%2048.6655%2041.1302%2048.8224L50.5944%2062.0642L53.719%2056.1497C53.933%2055.7416%2054.2413%2055.3905%2054.6183%2055.1256C54.9953%2054.8607%2055.4301%2054.6896%2055.8866%2054.6266L62.4655%2053.5819L51.7508%2038.6041C51.6383%2038.4484%2051.5577%2038.272%2051.5136%2038.085C51.4695%2037.898%2051.4628%2037.7042%2051.4939%2037.5146C51.5249%2037.325%2051.5931%2037.1434%2051.6946%2036.9803C51.796%2036.8172%2051.9287%2036.6757%2052.0849%2036.564C52.2412%2036.4522%2052.418%2036.3725%2052.6052%2036.3293C52.7924%2036.2861%2052.9863%2036.2804%2053.1757%2036.3123C53.3651%2036.3443%2053.5464%2036.4134%2053.709%2036.5156C53.8717%2036.6178%2054.0125%2036.7511%2054.1235%2036.9079L64.8281%2051.885C65.1192%2052.283%2065.3028%2052.7491%2065.3615%2053.2387C65.4201%2053.7282%2065.3517%2054.2245%2065.1628%2054.6799C64.9756%2055.1439%2064.6719%2055.5516%2064.2809%2055.8638C63.89%2056.1759%2063.425%2056.3818%2062.9312%2056.4616L56.3017%2057.5133L53.1771%2063.4186C52.945%2063.8601%2052.6034%2064.2346%2052.1849%2064.5061C51.7664%2064.7776%2051.2851%2064.9369%2050.7873%2064.9688C50.7197%2064.9737%2050.6527%2064.9759%2050.5858%2064.9759Z'%20fill='black'/%3e%3cpath%20id='Vector_5'%20d='M33.9632%2034.9184C33.625%2034.9184%2033.2973%2034.8008%2033.0361%2034.5859L28.8648%2031.1508C28.5676%2030.9045%2028.3801%2030.5504%2028.3435%2030.1661C28.3069%2029.7818%2028.4241%2029.3987%2028.6695%2029.1007C28.9149%2028.8027%2029.2685%2028.6142%2029.6526%2028.5764C30.0368%2028.5386%2030.4203%2028.6547%2030.719%2028.8992L33.7482%2031.3943L39.6948%2023.9617C39.8141%2023.8114%2039.9619%2023.6861%2040.1298%2023.593C40.2976%2023.5%2040.4822%2023.441%2040.6729%2023.4194C40.8636%2023.3978%2041.0567%2023.4141%2041.2411%2023.4674C41.4255%2023.5206%2041.5976%2023.6097%2041.7475%2023.7296C41.8974%2023.8495%2042.0221%2023.9978%2042.1145%2024.166C42.207%2024.3342%2042.2653%2024.5189%2042.2861%2024.7097C42.307%2024.9005%2042.29%2025.0936%2042.2361%2025.2778C42.1822%2025.462%2042.0924%2025.6337%2041.972%2025.7831L35.1019%2034.3708C34.9812%2034.5217%2034.8317%2034.6471%2034.6622%2034.7397C34.4927%2034.8324%2034.3064%2034.8904%2034.1142%2034.9105C34.0636%2034.9155%2034.0131%2034.9184%2033.9632%2034.9184Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e", d2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='2.34375'%20height='17.2481'%20viewBox='0%200%202.34375%2017.2481'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M1.17188%2017.2481C0.524531%2017.2481%200%2016.7236%200%2016.0763V1.17188C0%200.524531%200.524531%200%201.17188%200C1.81922%200%202.34375%200.524531%202.34375%201.17188V16.0763C2.34375%2016.7236%201.81922%2017.2481%201.17188%2017.2481Z'%20fill='%23003A67'/%3e%3c/g%3e%3c/svg%3e", b2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='17.2481'%20height='2.34375'%20viewBox='0%200%2017.2481%202.34375'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M16.0763%202.34375H1.17188C0.524531%202.34375%200%201.81922%200%201.17188C0%200.524531%200.524531%200%201.17188%200H16.0763C16.7236%200%2017.2481%200.524531%2017.2481%201.17188C17.2481%201.81922%2016.7236%202.34375%2016.0763%202.34375Z'%20fill='%23003A67'/%3e%3c/g%3e%3c/svg%3e", h2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='500'%20height='500'%20viewBox='0%200%20500%20500'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Vector'%20opacity='0.3'%3e%3cpath%20d='M374.208%2040.2443C369.34%2026.2726%20364.089%2015.0158%20360.54%208.03627C357.247%201.55676%20349.841%20-1.5116%20342.93%200.742311C335.479%203.17103%20323.794%207.42201%20310.46%2013.8673C318.509%2023.5929%20326.705%2034.925%20333.84%2047.552C347.805%2043.6555%20361.602%2041.4299%20374.208%2040.2443Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M189.54%2013.8664C176.205%207.42103%20164.52%203.17005%20157.069%200.741334C150.159%20-1.51258%20142.752%201.55579%20139.459%208.03529C135.911%2015.0158%20130.66%2026.2726%20125.791%2040.2443C138.397%2041.4299%20152.195%2043.6555%20166.161%2047.551C173.295%2034.924%20181.492%2023.592%20189.54%2013.8664Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M13.8664%20189.54C23.5968%20181.487%2034.9348%20173.288%2047.5676%20166.15C43.6809%20152.168%2041.4621%20138.354%2040.2756%20125.78C26.2892%20130.651%2015.0207%20135.908%208.03529%20139.459C1.55579%20142.752%20-1.51258%20150.159%200.741334%20157.069C3.17005%20164.52%207.42201%20176.206%2013.8664%20189.54Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M0.742311%20342.93C-1.5116%20349.841%201.55676%20357.247%208.03627%20360.54C15.0226%20364.092%2026.2912%20369.348%2040.2775%20374.22C41.4641%20361.645%2043.6828%20347.83%2047.5686%20333.849C34.9338%20326.712%2023.5968%20318.511%2013.8664%20310.46C7.42103%20323.795%203.17005%20335.479%200.742311%20342.93Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M125.792%20459.756C130.661%20473.727%20135.911%20484.983%20139.46%20491.963C142.753%20498.442%20150.16%20501.511%20157.07%20499.257C164.521%20496.828%20176.206%20492.577%20189.54%20486.132C181.492%20476.406%20173.296%20465.075%20166.162%20452.448C152.195%20456.345%20138.398%20458.57%20125.792%20459.756Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M310.46%20486.133C323.795%20492.578%20335.479%20496.829%20342.93%20499.258C349.841%20501.512%20357.247%20498.443%20360.54%20491.964C364.089%20484.983%20369.34%20473.727%20374.208%20459.757C361.602%20458.571%20347.805%20456.346%20333.84%20452.45C326.704%20465.075%20318.509%20476.407%20310.46%20486.133Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M486.134%20310.46C476.403%20318.512%20465.065%20326.712%20452.432%20333.849C456.318%20347.83%20458.537%20361.644%20459.724%20374.219C473.71%20369.347%20484.979%20364.091%20491.964%20360.539C498.443%20357.246%20501.512%20349.84%20499.258%20342.929C496.829%20335.479%20492.578%20323.794%20486.134%20310.46Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M499.258%20157.069C501.512%20150.159%20498.443%20142.752%20491.964%20139.459C484.978%20135.908%20473.709%20130.651%20459.724%20125.78C458.537%20138.355%20456.318%20152.169%20452.432%20166.15C465.065%20173.288%20476.402%20181.487%20486.133%20189.54C492.578%20176.206%20496.829%20164.52%20499.258%20157.069Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M250.004%20421.248C225.298%20436.899%20201.666%20443.57%20198.448%20444.435C197.573%20444.671%20196.689%20444.874%20195.8%20445.056C211.213%20469.703%20230.805%20488.136%20240.458%20496.436C243.223%20498.813%20246.611%20500%20250%20500C253.388%20500%20256.778%20498.812%20259.543%20496.435C269.193%20488.135%20288.786%20469.703%20304.199%20445.056C303.308%20444.874%20302.422%20444.67%20301.543%20444.434C298.304%20443.56%20274.666%20436.859%20250.004%20421.248Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M423.935%20351.039C421.046%20352.702%20399.612%20364.689%20371.094%20371.092C364.691%20399.625%20352.699%20421.053%20351.035%20423.939C350.581%20424.728%20350.098%20425.496%20349.598%20426.25C377.927%20432.78%20404.814%20431.96%20417.508%20431.004C421.143%20430.729%20424.38%20429.173%20426.776%20426.777C429.173%20424.381%20430.729%20421.143%20431.003%20417.508C431.959%20404.814%20432.779%20377.926%20426.249%20349.596C425.495%20350.096%20424.728%20350.582%20423.935%20351.039Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M76.0628%20148.962C78.9534%20147.297%20100.389%20135.309%20128.908%20128.907C135.31%20100.388%20147.297%2078.9544%20148.96%2076.0667C149.416%2075.2756%20149.9%2074.5061%20150.4%2073.7503C122.073%2067.22%2095.1839%2068.0403%2082.4905%2068.9954C75.221%2069.5442%2069.5442%2075.219%2068.9954%2082.4925C68.0393%2095.1858%2067.22%20122.075%2073.7503%20150.403C74.5042%20149.904%2075.2708%20149.418%2076.0628%20148.962Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M496.436%20259.543C498.813%20256.777%20500%20253.389%20500%20250.001C500%20246.612%20498.812%20243.222%20496.435%20240.458C488.135%20230.806%20469.701%20211.212%20445.052%20195.798C444.871%20196.685%20444.672%20197.572%20444.435%20198.455C443.57%20201.669%20436.894%20225.301%20421.251%20250.001C436.89%20274.693%20443.569%20298.325%20444.435%20301.543C444.673%20302.426%20444.872%20303.313%20445.053%20304.201C469.702%20288.788%20488.136%20269.195%20496.436%20259.543Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M55.5647%20198.457C55.3274%20197.573%2055.1281%20196.686%2054.9475%20195.799C30.298%20211.212%2011.8644%20230.806%203.56458%20240.458C-1.18738%20245.986%20-1.18933%20254.012%203.56556%20259.544C11.8654%20269.195%2030.299%20288.789%2054.9485%20304.202C55.1291%20303.314%2055.3283%20302.426%2055.5666%20301.542C56.427%20298.337%2063.094%20274.707%2078.7493%20249.998C63.1086%20225.305%2056.4309%20201.674%2055.5647%20198.457Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M351.04%2076.0676C352.7%2078.9485%20364.691%20100.375%20371.095%20128.908C399.605%20135.309%20421.041%20147.294%20423.93%20148.957C424.725%20149.415%20425.493%20149.903%20426.25%20150.403C432.781%20122.074%20431.961%2095.1849%20431.005%2082.4905C430.73%2078.8548%20429.175%2075.6184%20426.778%2073.2219C424.382%2070.8255%20421.144%2069.2688%20417.509%2068.9954C404.816%2068.0393%20377.928%2067.219%20349.6%2073.7493C350.099%2074.5051%20350.584%2075.2756%20351.04%2076.0676Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M148.958%20423.93C147.295%20421.044%20135.309%20399.61%20128.907%20371.093C100.396%20364.691%2078.9592%20352.706%2076.0706%20351.043C75.2766%20350.585%2074.5071%20350.098%2073.7512%20349.597C67.22%20377.927%2068.0403%20404.815%2068.9963%20417.51C69.5452%20424.779%2075.22%20430.456%2082.4934%20431.005C95.1868%20431.961%20122.077%20432.781%20150.407%20426.25C149.902%20425.49%20149.414%20424.72%20148.958%20423.93Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M249.994%2078.7512C274.7%2063.1008%20298.334%2056.4289%20301.551%2055.5637C302.426%2055.3283%20303.31%2055.1242%20304.198%2054.9436C288.785%2030.2961%20269.193%2011.8644%20259.542%203.56458C254.013%20-1.18738%20245.987%20-1.18933%20240.456%203.56556C230.805%2011.8644%20211.213%2030.2971%20195.8%2054.9436C196.691%2055.1252%20197.577%2055.3293%20198.456%2055.5657C201.698%2056.4397%20225.336%2063.1438%20249.994%2078.7512Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M250%20293.945C274.27%20293.945%20293.945%20274.27%20293.945%20250C293.945%20225.729%20274.27%20206.054%20250%20206.054C225.729%20206.054%20206.054%20225.729%20206.054%20250C206.054%20274.27%20225.729%20293.945%20250%20293.945Z'%20fill='%23CFE0E7'/%3e%3cpath%20d='M325.652%20409.309C326.451%20407.924%20342.837%20379.096%20345.456%20345.456C379.096%20342.836%20407.924%20326.451%20409.309%20325.653C415.063%20322.339%20417.869%20315.567%20416.143%20309.154C415.728%20307.61%20406.93%20275.638%20384.995%20250C406.93%20224.361%20415.728%20192.39%20416.143%20190.845C417.868%20184.433%20415.064%20177.662%20409.309%20174.346C407.924%20173.548%20379.095%20157.161%20345.456%20154.544C342.837%20120.905%20326.451%2092.0755%20325.653%2090.6897C322.339%2084.9358%20315.567%2082.1302%20309.154%2083.8567C307.61%2084.2718%20275.638%2093.0706%20250%20115.005C224.36%2093.0716%20192.39%2084.2727%20190.846%2083.8567C184.433%2082.1311%20177.662%2084.9368%20174.347%2090.6907C173.548%2092.0765%20157.163%20120.906%20154.544%20154.544C120.905%20157.163%2092.0755%20173.549%2090.6907%20174.347C84.9358%20177.663%2082.1311%20184.434%2083.8567%20190.846C84.2718%20192.39%2093.0706%20224.362%20115.005%20250.001C93.0706%20275.639%2084.2718%20307.61%2083.8567%20309.155C82.1321%20315.567%2084.9358%20322.339%2090.6907%20325.654C92.0765%20326.452%20120.905%20342.839%20154.544%20345.457C157.163%20379.096%20173.549%20407.925%20174.347%20409.31C176.004%20412.188%20178.526%20414.328%20181.435%20415.533C184.344%20416.738%20187.639%20417.008%20190.846%20416.144C192.39%20415.729%20224.361%20406.931%20250.001%20384.996C275.639%20406.931%20307.611%20415.728%20309.155%20416.145C315.567%20417.869%20322.338%20415.063%20325.652%20409.309ZM250%20323.242C209.614%20323.242%20176.757%20290.385%20176.757%20250C176.757%20209.614%20209.614%20176.757%20250%20176.757C290.385%20176.757%20323.242%20209.614%20323.242%20250C323.242%20290.385%20290.385%20323.242%20250%20323.242Z'%20fill='%23CFE0E7'/%3e%3c/g%3e%3c/svg%3e", g2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='500'%20height='500'%20viewBox='0%200%20500%20500'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Vector'%20opacity='0.5'%3e%3cpath%20d='M374.208%2040.2443C369.34%2026.2726%20364.089%2015.0158%20360.54%208.03627C357.247%201.55676%20349.841%20-1.5116%20342.93%200.742311C335.479%203.17103%20323.794%207.42201%20310.46%2013.8673C318.509%2023.5929%20326.705%2034.925%20333.84%2047.552C347.805%2043.6555%20361.602%2041.4299%20374.208%2040.2443Z'%20fill='%23272727'/%3e%3cpath%20d='M189.54%2013.8664C176.205%207.42103%20164.52%203.17005%20157.069%200.741334C150.159%20-1.51258%20142.752%201.55579%20139.459%208.03529C135.911%2015.0158%20130.66%2026.2726%20125.791%2040.2443C138.397%2041.4299%20152.195%2043.6555%20166.161%2047.551C173.295%2034.924%20181.492%2023.592%20189.54%2013.8664Z'%20fill='%23272727'/%3e%3cpath%20d='M13.8664%20189.54C23.5968%20181.487%2034.9348%20173.288%2047.5676%20166.15C43.6809%20152.168%2041.4621%20138.354%2040.2756%20125.78C26.2892%20130.651%2015.0207%20135.908%208.03529%20139.459C1.55579%20142.752%20-1.51258%20150.159%200.741334%20157.069C3.17005%20164.52%207.42201%20176.206%2013.8664%20189.54Z'%20fill='%23272727'/%3e%3cpath%20d='M0.742311%20342.93C-1.5116%20349.841%201.55676%20357.247%208.03627%20360.54C15.0226%20364.092%2026.2912%20369.348%2040.2775%20374.22C41.4641%20361.645%2043.6828%20347.83%2047.5686%20333.849C34.9338%20326.712%2023.5968%20318.511%2013.8664%20310.46C7.42103%20323.795%203.17005%20335.479%200.742311%20342.93Z'%20fill='%23272727'/%3e%3cpath%20d='M125.792%20459.756C130.661%20473.727%20135.911%20484.983%20139.46%20491.963C142.753%20498.442%20150.16%20501.511%20157.07%20499.257C164.521%20496.828%20176.206%20492.577%20189.54%20486.132C181.492%20476.406%20173.296%20465.075%20166.162%20452.448C152.195%20456.345%20138.398%20458.57%20125.792%20459.756Z'%20fill='%23272727'/%3e%3cpath%20d='M310.46%20486.133C323.795%20492.578%20335.479%20496.829%20342.93%20499.258C349.841%20501.512%20357.247%20498.443%20360.54%20491.964C364.089%20484.983%20369.34%20473.727%20374.208%20459.757C361.602%20458.571%20347.805%20456.346%20333.84%20452.45C326.704%20465.075%20318.509%20476.407%20310.46%20486.133Z'%20fill='%23272727'/%3e%3cpath%20d='M486.134%20310.46C476.403%20318.512%20465.065%20326.712%20452.432%20333.849C456.318%20347.83%20458.537%20361.644%20459.724%20374.219C473.71%20369.347%20484.979%20364.091%20491.964%20360.539C498.443%20357.246%20501.512%20349.84%20499.258%20342.929C496.829%20335.479%20492.578%20323.794%20486.134%20310.46Z'%20fill='%23272727'/%3e%3cpath%20d='M499.258%20157.069C501.512%20150.159%20498.443%20142.752%20491.964%20139.459C484.978%20135.908%20473.709%20130.651%20459.724%20125.78C458.537%20138.355%20456.318%20152.169%20452.432%20166.15C465.065%20173.288%20476.402%20181.487%20486.133%20189.54C492.578%20176.206%20496.829%20164.52%20499.258%20157.069Z'%20fill='%23272727'/%3e%3cpath%20d='M250.004%20421.248C225.298%20436.899%20201.666%20443.57%20198.448%20444.435C197.573%20444.671%20196.689%20444.874%20195.8%20445.056C211.213%20469.703%20230.805%20488.136%20240.458%20496.436C243.223%20498.813%20246.611%20500%20250%20500C253.388%20500%20256.778%20498.812%20259.543%20496.435C269.193%20488.135%20288.786%20469.703%20304.199%20445.056C303.308%20444.874%20302.422%20444.67%20301.543%20444.434C298.304%20443.56%20274.666%20436.859%20250.004%20421.248Z'%20fill='%23272727'/%3e%3cpath%20d='M423.935%20351.039C421.046%20352.702%20399.612%20364.689%20371.094%20371.092C364.691%20399.625%20352.699%20421.053%20351.035%20423.939C350.581%20424.728%20350.098%20425.496%20349.598%20426.25C377.927%20432.78%20404.814%20431.96%20417.508%20431.004C421.143%20430.729%20424.38%20429.173%20426.776%20426.777C429.173%20424.381%20430.729%20421.143%20431.003%20417.508C431.959%20404.814%20432.779%20377.926%20426.249%20349.596C425.495%20350.096%20424.728%20350.582%20423.935%20351.039Z'%20fill='%23272727'/%3e%3cpath%20d='M76.0628%20148.962C78.9534%20147.297%20100.389%20135.309%20128.908%20128.907C135.31%20100.388%20147.297%2078.9544%20148.96%2076.0667C149.416%2075.2756%20149.9%2074.5061%20150.4%2073.7503C122.073%2067.22%2095.1839%2068.0403%2082.4905%2068.9954C75.221%2069.5442%2069.5442%2075.219%2068.9954%2082.4925C68.0393%2095.1858%2067.22%20122.075%2073.7503%20150.403C74.5042%20149.904%2075.2708%20149.418%2076.0628%20148.962Z'%20fill='%23272727'/%3e%3cpath%20d='M496.436%20259.543C498.813%20256.777%20500%20253.389%20500%20250.001C500%20246.612%20498.812%20243.222%20496.435%20240.458C488.135%20230.806%20469.701%20211.212%20445.052%20195.798C444.871%20196.685%20444.672%20197.572%20444.435%20198.455C443.57%20201.669%20436.894%20225.301%20421.251%20250.001C436.89%20274.693%20443.569%20298.325%20444.435%20301.543C444.673%20302.426%20444.872%20303.313%20445.053%20304.201C469.702%20288.788%20488.136%20269.195%20496.436%20259.543Z'%20fill='%23272727'/%3e%3cpath%20d='M55.5647%20198.457C55.3274%20197.573%2055.1281%20196.686%2054.9475%20195.799C30.298%20211.212%2011.8644%20230.806%203.56458%20240.458C-1.18738%20245.986%20-1.18933%20254.012%203.56556%20259.544C11.8654%20269.195%2030.299%20288.789%2054.9485%20304.202C55.1291%20303.314%2055.3283%20302.426%2055.5666%20301.542C56.427%20298.337%2063.094%20274.707%2078.7493%20249.998C63.1086%20225.305%2056.4309%20201.674%2055.5647%20198.457Z'%20fill='%23272727'/%3e%3cpath%20d='M351.04%2076.0676C352.7%2078.9485%20364.691%20100.375%20371.095%20128.908C399.605%20135.309%20421.041%20147.294%20423.93%20148.957C424.725%20149.415%20425.493%20149.903%20426.25%20150.403C432.781%20122.074%20431.961%2095.1849%20431.005%2082.4905C430.73%2078.8548%20429.175%2075.6184%20426.778%2073.2219C424.382%2070.8255%20421.144%2069.2688%20417.509%2068.9954C404.816%2068.0393%20377.928%2067.219%20349.6%2073.7493C350.099%2074.5051%20350.584%2075.2756%20351.04%2076.0676Z'%20fill='%23272727'/%3e%3cpath%20d='M148.958%20423.93C147.295%20421.044%20135.309%20399.61%20128.907%20371.093C100.396%20364.691%2078.9592%20352.706%2076.0706%20351.043C75.2766%20350.585%2074.5071%20350.098%2073.7512%20349.597C67.22%20377.927%2068.0403%20404.815%2068.9963%20417.51C69.5452%20424.779%2075.22%20430.456%2082.4934%20431.005C95.1868%20431.961%20122.077%20432.781%20150.407%20426.25C149.902%20425.49%20149.414%20424.72%20148.958%20423.93Z'%20fill='%23272727'/%3e%3cpath%20d='M249.994%2078.7512C274.7%2063.1008%20298.334%2056.4289%20301.551%2055.5637C302.426%2055.3283%20303.31%2055.1242%20304.198%2054.9436C288.785%2030.2961%20269.193%2011.8644%20259.542%203.56458C254.013%20-1.18738%20245.987%20-1.18933%20240.456%203.56556C230.805%2011.8644%20211.213%2030.2971%20195.8%2054.9436C196.691%2055.1252%20197.577%2055.3293%20198.456%2055.5657C201.698%2056.4397%20225.336%2063.1438%20249.994%2078.7512Z'%20fill='%23272727'/%3e%3cpath%20d='M250%20293.945C274.27%20293.945%20293.945%20274.27%20293.945%20250C293.945%20225.729%20274.27%20206.054%20250%20206.054C225.729%20206.054%20206.054%20225.729%20206.054%20250C206.054%20274.27%20225.729%20293.945%20250%20293.945Z'%20fill='%23272727'/%3e%3cpath%20d='M325.652%20409.309C326.451%20407.924%20342.837%20379.096%20345.456%20345.456C379.096%20342.836%20407.924%20326.451%20409.309%20325.653C415.063%20322.339%20417.869%20315.567%20416.143%20309.154C415.728%20307.61%20406.93%20275.638%20384.995%20250C406.93%20224.361%20415.728%20192.39%20416.143%20190.845C417.868%20184.433%20415.064%20177.662%20409.309%20174.346C407.924%20173.548%20379.095%20157.161%20345.456%20154.544C342.837%20120.905%20326.451%2092.0755%20325.653%2090.6897C322.339%2084.9358%20315.567%2082.1302%20309.154%2083.8567C307.61%2084.2718%20275.638%2093.0706%20250%20115.005C224.36%2093.0716%20192.39%2084.2727%20190.846%2083.8567C184.433%2082.1311%20177.662%2084.9368%20174.347%2090.6907C173.548%2092.0765%20157.163%20120.906%20154.544%20154.544C120.905%20157.163%2092.0755%20173.549%2090.6907%20174.347C84.9358%20177.663%2082.1311%20184.434%2083.8567%20190.846C84.2718%20192.39%2093.0706%20224.362%20115.005%20250.001C93.0706%20275.639%2084.2718%20307.61%2083.8567%20309.155C82.1321%20315.567%2084.9358%20322.339%2090.6907%20325.654C92.0765%20326.452%20120.905%20342.839%20154.544%20345.457C157.163%20379.096%20173.549%20407.925%20174.347%20409.31C176.004%20412.188%20178.526%20414.328%20181.435%20415.533C184.344%20416.738%20187.639%20417.008%20190.846%20416.144C192.39%20415.729%20224.361%20406.931%20250.001%20384.996C275.639%20406.931%20307.611%20415.728%20309.155%20416.145C315.567%20417.869%20322.338%20415.063%20325.652%20409.309ZM250%20323.242C209.614%20323.242%20176.757%20290.385%20176.757%20250C176.757%20209.614%20209.614%20176.757%20250%20176.757C290.385%20176.757%20323.242%20209.614%20323.242%20250C323.242%20290.385%20290.385%20323.242%20250%20323.242Z'%20fill='%23272727'/%3e%3c/g%3e%3c/svg%3e", x2 = "data:image/png;base64,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", _2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='teacher'%3e%3cpath%20id='Vector'%20d='M10.05%202.53L4.03%206.46C2.1%207.72%202.1%2010.54%204.03%2011.8L10.05%2015.73C11.13%2016.44%2012.91%2016.44%2013.99%2015.73L19.98%2011.8C21.9%2010.54%2021.9%207.73%2019.98%206.47L13.99%202.54C12.91%201.82%2011.13%201.82%2010.05%202.53Z'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%232B3635'/%3e%3cpath%20id='Vector_2'%20d='M5.63%2013.08L5.62%2017.77C5.62%2019.04%206.6%2020.4%207.8%2020.8L10.99%2021.86C11.54%2022.04%2012.45%2022.04%2013.01%2021.86L16.2%2020.8C17.4%2020.4%2018.38%2019.04%2018.38%2017.77V13.13'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%232B3635'/%3e%3cpath%20id='Vector_3'%20d='M21.4%2015V9'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%232B3635'/%3e%3cg%20id='Vector_4'%20opacity='0'%3e%3c/g%3e%3c/g%3e%3c/svg%3e", m2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='19.7547'%20height='21.7386'%20viewBox='0%200%2019.7547%2021.7386'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20id='outline'%3e%3cg%20id='Vector'%3e%3cuse%20xlink:href='%23stroke0_0_39'%20fill='black'/%3e%3cmask%20id='stroke1_0_39'%20maskUnits='userSpaceOnUse'%20x='-0.8'%20y='-0.8'%20width='21'%20height='23'%20fill='black'%3e%3crect%20fill='white'%20x='-0.8'%20y='-0.8'%20width='21'%20height='23'/%3e%3cuse%20xlink:href='%23stroke0_0_39'/%3e%3c/mask%3e%3cpath%20d='M18.3054%2013.2582C19.5189%2011.2644%2019.8687%208.82688%2019.2654%206.57125C18.2615%202.81975%2014.8486%200.2%2010.9651%200.2H10.4116C5.75112%200.2%201.9595%203.99162%201.9595%208.65212V9.77337L0.387499%2012.1888C0.204124%2012.4708%200.152374%2012.818%200.244999%2013.1412C0.337999%2013.4641%200.565624%2013.7307%200.870499%2013.8721L1.99925%2014.3971L2.44625%2016.9423C2.6735%2018.236%203.79175%2019.175%205.10537%2019.175H7.17425C7.44537%2019.175%207.682%2019.3677%207.73712%2019.6329L8.07125%2021.2397C8.10725%2021.4137%208.26062%2021.5386%208.43837%2021.5386H16.4071C16.52%2021.5386%2016.6269%2021.4876%2016.6981%2021.4003C16.7694%2021.3129%2016.7975%2021.1978%2016.7742%2021.0875L16.2642%2018.6324C16.0625%2017.6615%2016.2354%2016.6602%2016.751%2015.8127L18.3054%2013.2582ZM16.1097%2015.4239C15.4951%2016.4338%2015.2892%2017.6277%2015.5296%2018.7854L15.9459%2020.7894H8.74325L8.47137%2019.4814C8.34462%2018.8698%207.799%2018.4261%207.17425%2018.4261H5.10537C4.157%2018.4261%203.34925%2017.7477%203.185%2016.8136L2.70425%2014.0757C2.68287%2013.955%202.60412%2013.8523%202.49312%2013.8009L1.187%2013.193C1.07787%2013.1424%200.999499%2013.0509%200.966124%2012.935C0.933124%2012.8191%200.950749%2012.6999%201.01675%2012.599L2.6495%2010.0906C2.68887%2010.0295%202.71025%209.95825%202.71025%209.88587V8.65325C2.71025%204.40638%206.1655%200.951125%2010.4124%200.951125H10.9659C14.5104%200.951125%2017.6255%203.3425%2018.5416%206.76662C19.0921%208.825%2018.773%2011.0495%2017.6652%2012.8698L16.1097%2015.4239ZM6.42012%209.64737C6.54725%209.81087%206.518%2010.0464%206.3545%2010.1735C5.99712%2010.4517%205.53587%2010.6047%205.0555%2010.6047C4.57475%2010.6047%204.1135%2010.4517%203.75612%2010.1735C3.59262%2010.0464%203.56337%209.8105%203.6905%209.64737C3.818%209.48425%204.0535%209.45463%204.21662%209.58175C4.66925%209.9335%205.441%209.93425%205.89362%209.58175C6.05712%209.45425%206.29262%209.48425%206.42012%209.64737ZM14.7382%204.329C16.4362%206.027%2016.4362%208.79%2014.7382%2010.488C14.6651%2010.5611%2014.5691%2010.5979%2014.4731%2010.5979C14.3771%2010.5979%2014.2811%2010.5611%2014.208%2010.488C14.0614%2010.3414%2014.0614%2010.1044%2014.208%209.95775C15.6135%208.55225%2015.6135%206.26475%2014.208%204.85925C13.5266%204.17787%2012.6214%203.8025%2011.6591%203.8025C10.6969%203.8025%209.79163%204.17787%209.10988%204.85925C8.61638%205.35275%208.3445%206.00788%208.3445%206.705C8.3445%207.40138%208.61638%208.05688%209.10988%208.55038C9.60338%209.04388%2010.2585%209.31575%2010.9552%209.31575C11.652%209.31575%2012.3071%209.0435%2012.8006%208.55038C13.4302%207.92038%2013.4302%206.89625%2012.8006%206.26625C12.171%205.637%2011.1465%205.637%2010.5169%206.26625C10.275%206.50812%2010.275%206.9015%2010.5169%207.14337C10.7512%207.37775%2011.1592%207.37775%2011.3936%207.14337C11.5399%206.99675%2011.7772%206.99675%2011.9239%207.14337C12.0705%207.29%2012.0705%207.527%2011.9239%207.67363C11.4064%208.1915%2010.5041%208.1915%209.98662%207.67363C9.45225%207.13925%209.45225%206.27037%209.98662%205.736C10.9087%204.81387%2012.4087%204.81387%2013.3309%205.736C14.253%206.65812%2014.253%208.1585%2013.3309%209.08062C12.696%209.7155%2011.8522%2010.0658%2010.9552%2010.0658C10.0582%2010.0658%209.2145%209.7155%208.57962%209.08062C7.94437%208.44575%207.59487%207.602%207.59487%206.705C7.59487%205.80763%207.94475%204.96387%208.57962%204.329C9.40275%203.50587%2010.4962%203.0525%2011.6591%203.0525C12.8216%203.05212%2013.9151%203.5055%2014.7382%204.329Z'%20stroke-width='0.4'%20stroke='black'%20mask='url(%23stroke1_0_39)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cpath%20id='stroke0_0_39'%20d='M18.3054%2013.2582C19.5189%2011.2644%2019.8687%208.82687%2019.2654%206.57125C18.2615%202.81975%2014.8486%200.2%2010.9651%200.2H10.4116C5.75112%200.2%201.9595%203.99162%201.9595%208.65212V9.77337L0.387499%2012.1888C0.204124%2012.4708%200.152374%2012.818%200.244999%2013.1412C0.337999%2013.4641%200.565624%2013.7308%200.870499%2013.8721L1.99925%2014.3971L2.44625%2016.9423C2.6735%2018.236%203.79175%2019.175%205.10537%2019.175H7.17425C7.44537%2019.175%207.682%2019.3677%207.73712%2019.6329L8.07125%2021.2397C8.10725%2021.4137%208.26062%2021.5386%208.43837%2021.5386H16.4071C16.52%2021.5386%2016.6269%2021.4876%2016.6981%2021.4003C16.7694%2021.3129%2016.7975%2021.1978%2016.7742%2021.0875L16.2642%2018.6324C16.0625%2017.6615%2016.2354%2016.6602%2016.751%2015.8127L18.3054%2013.2582ZM16.1097%2015.4239C15.4951%2016.4337%2015.2892%2017.6277%2015.5296%2018.7854L15.9459%2020.7894H8.74325L8.47137%2019.4814C8.34462%2018.8698%207.799%2018.4261%207.17425%2018.4261H5.10537C4.157%2018.4261%203.34925%2017.7477%203.185%2016.8136L2.70425%2014.0757C2.68287%2013.955%202.60412%2013.8523%202.49312%2013.8009L1.187%2013.193C1.07787%2013.1424%200.999499%2013.0509%200.966124%2012.935C0.933124%2012.8191%200.950749%2012.6999%201.01675%2012.599L2.6495%2010.0906C2.68887%2010.0295%202.71025%209.95825%202.71025%209.88587V8.65325C2.71025%204.40638%206.1655%200.951125%2010.4124%200.951125H10.9659C14.5104%200.951125%2017.6255%203.3425%2018.5416%206.76662C19.0921%208.825%2018.773%2011.0495%2017.6652%2012.8698L16.1097%2015.4239ZM6.42012%209.64737C6.54725%209.81087%206.518%2010.0464%206.3545%2010.1735C5.99712%2010.4517%205.53587%2010.6047%205.0555%2010.6047C4.57475%2010.6047%204.1135%2010.4517%203.75612%2010.1735C3.59262%2010.0464%203.56337%209.8105%203.6905%209.64737C3.818%209.48425%204.0535%209.45463%204.21662%209.58175C4.66925%209.9335%205.441%209.93425%205.89362%209.58175C6.05712%209.45425%206.29262%209.48425%206.42012%209.64737ZM14.7382%204.329C16.4363%206.027%2016.4363%208.79%2014.7382%2010.488C14.6651%2010.5611%2014.5691%2010.5979%2014.4731%2010.5979C14.3771%2010.5979%2014.2811%2010.5611%2014.208%2010.488C14.0614%2010.3414%2014.0614%2010.1044%2014.208%209.95775C15.6135%208.55225%2015.6135%206.26475%2014.208%204.85925C13.5266%204.17787%2012.6214%203.8025%2011.6591%203.8025C10.6969%203.8025%209.79163%204.17787%209.10988%204.85925C8.61638%205.35275%208.3445%206.00788%208.3445%206.705C8.3445%207.40138%208.61638%208.05688%209.10988%208.55038C9.60337%209.04387%2010.2585%209.31575%2010.9552%209.31575C11.652%209.31575%2012.3071%209.0435%2012.8006%208.55038C13.4302%207.92038%2013.4302%206.89625%2012.8006%206.26625C12.171%205.637%2011.1465%205.637%2010.5169%206.26625C10.275%206.50813%2010.275%206.9015%2010.5169%207.14337C10.7512%207.37775%2011.1592%207.37775%2011.3936%207.14337C11.5399%206.99675%2011.7772%206.99675%2011.9239%207.14337C12.0705%207.29%2012.0705%207.527%2011.9239%207.67363C11.4064%208.1915%2010.5041%208.1915%209.98662%207.67363C9.45225%207.13925%209.45225%206.27037%209.98662%205.736C10.9087%204.81387%2012.4088%204.81387%2013.3309%205.736C14.253%206.65812%2014.253%208.1585%2013.3309%209.08062C12.696%209.7155%2011.8522%2010.0658%2010.9552%2010.0658C10.0582%2010.0658%209.2145%209.7155%208.57962%209.08062C7.94437%208.44575%207.59487%207.602%207.59487%206.705C7.59487%205.80763%207.94475%204.96387%208.57962%204.329C9.40275%203.50587%2010.4962%203.0525%2011.6591%203.0525C12.8216%203.05212%2013.9151%203.5055%2014.7382%204.329Z'/%3e%3c/defs%3e%3c/svg%3e", w2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='fi_1373778'%3e%3cpath%20id='Vector'%20d='M19.845%205.13797H9.40189C9.12006%203.362%207.578%202%205.72391%202C3.67053%202%202%203.67053%202%205.72391V18.2759C2%2020.3295%203.67053%2022%205.72391%2022H19.845C21.0334%2022%2022%2021.0334%2022%2019.845V7.29297C22%206.10477%2021.0334%205.13797%2019.845%205.13797ZM3.17188%205.72391C3.17188%204.31674%204.31674%203.17188%205.72391%203.17188C7.13107%203.17188%208.27594%204.31674%208.27594%205.72391V15.5664C7.60898%2014.9378%206.71069%2014.552%205.72391%2014.552C4.73712%2014.552%203.83884%2014.9378%203.17188%2015.5664V5.72391ZM20.8281%2019.845C20.8281%2020.3871%2020.3871%2020.8281%2019.845%2020.8281H5.72391C4.31674%2020.8281%203.17188%2019.6833%203.17188%2018.2759C3.17188%2016.8688%204.31674%2015.7239%205.72391%2015.7239C7.13107%2015.7239%208.27594%2016.8688%208.27594%2018.2759C8.27594%2018.5996%208.53839%2018.8619%208.86188%2018.8619C9.18552%2018.8619%209.44781%2018.5996%209.44781%2018.2759V6.30984H19.845C20.3871%206.30984%2020.8281%206.75082%2020.8281%207.29297V19.845Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e", v2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='fi_1187247'%20clip-path='url(%23clip0_0_30)'%3e%3cpath%20id='Vector'%20d='M23.7618%2022.8316L23.9251%2022.1329C24.2193%2020.8738%2023.6279%2019.57%2022.4879%2018.9628L17.2895%2016.1732C17.3009%2016.1329%2017.3073%2016.0906%2017.3073%2016.0468V4.61066C17.3073%204.35175%2017.0975%204.14191%2016.8385%204.14191C16.5796%204.14191%2016.3698%204.35175%2016.3698%204.61066V15.6795L16.2843%2015.6337C16.0563%2015.5112%2015.7721%2015.5969%2015.6496%2015.8251C15.5273%2016.0532%2015.613%2016.3374%2015.841%2016.4597L22.0459%2019.7895C22.8125%2020.1978%2023.2099%2021.0738%2023.0121%2021.9196L22.925%2022.2925L21.8384%2021.1639C21.7985%2021.1223%2021.7511%2021.0884%2021.6987%2021.0641L12.8425%2016.938L14.917%2013.3876C14.9798%2013.2797%2014.9974%2013.1514%2014.9654%2013.0309C14.9476%2012.9641%2014.915%2012.9029%2014.8714%2012.8507V2.99195C14.8714%202.88282%2014.8335%202.77716%2014.764%202.69312L13.5824%201.26563H14.6611C15.6031%201.26563%2016.3698%202.03229%2016.3698%202.97437V5.59644C16.3698%205.85517%2016.5796%206.06519%2016.8385%206.06519C17.0975%206.06519%2017.3073%205.85517%2017.3073%205.59644V2.97437C17.3073%201.5152%2016.1202%200.328129%2014.6611%200.328129H12.5876C12.3693%200.327214%2012.173%200.479557%2012.1269%200.701664L11.7482%202.52741L7.61993%209.93457C7.41833%209.21827%206.92962%208.5849%206.21496%208.22309L5.64074%207.9325C4.28723%207.24732%202.62866%207.79114%201.94348%209.14466C1.93469%209.16187%201.927%209.17945%201.91876%209.19666L1.31122%209.39588C0.313659%209.72309%20-0.231811%2010.8007%200.0952147%2011.7982C0.357971%2012.5995%201.10486%2013.1091%201.90576%2013.1091C2.10187%2013.1091%202.30127%2013.0785%202.49737%2013.014L3.1051%2012.8148C3.12194%2012.8238%203.13842%2012.8335%203.15564%2012.8421L3.72985%2013.1327C4.12701%2013.3337%204.55035%2013.429%204.96783%2013.429C5.29302%2013.429%205.61456%2013.3709%205.91705%2013.2603L3.25085%2021.4363L2.17254%2022.4874C2.09399%2022.5639%202.04693%2022.6642%202.03485%2022.7701H0.468749C0.209839%2022.7701%200%2022.9799%200%2023.2388C0%2023.4976%200.209839%2023.7076%200.468749%2023.7076H23.5301C23.789%2023.7076%2023.9989%2023.4976%2023.9989%2023.2388C23.9989%2023.0642%2023.9033%2022.9122%2023.7618%2022.8316ZM22.0832%2022.7701H5.82952C5.90844%2022.6403%205.97381%2022.4991%206.0227%2022.3478L8.26317%2015.4266L11.9438%2017.5516C11.9465%2017.5532%2021.2235%2021.8771%2021.2235%2021.8771L22.0832%2022.7701ZM12.0088%2016.5064L8.22783%2014.3236L8.22637%2014.3227L7.79076%2014.0713C7.47051%2013.8864%207.24163%2013.5879%207.14587%2013.231C7.05028%2012.874%207.09936%2012.501%207.28411%2012.1809L7.61516%2011.6078C7.83452%2011.2277%208.18883%2010.9558%208.6129%2010.842C8.75445%2010.8041%208.89818%2010.7855%209.04082%2010.7855C9.32555%2010.7855%209.60662%2010.8602%209.85985%2011.0063L13.8697%2013.3215L12.0088%2016.5064ZM13.9339%2012.2759L10.5976%2010.3497L13.9339%204.4513V12.2759ZM12.602%202.92109C12.6253%202.87952%2012.642%202.83466%2012.6517%202.78815L12.8468%201.84717L13.7278%202.91156L9.74816%209.94721C9.41857%209.85236%209.07396%209.82489%208.73101%209.86683L12.602%202.92109ZM0.986022%2011.5062C0.820129%2010.9997%201.09698%2010.4528%201.60327%2010.2867L1.65033%2010.2713C1.62323%2010.9345%201.83801%2011.5893%202.25238%2012.1079L2.20532%2012.1232C1.69903%2012.2891%201.1521%2012.0123%200.986022%2011.5062ZM4.15319%2012.2963L3.57916%2012.0057C3.14685%2011.7869%202.82568%2011.4128%202.67462%2010.9525C2.52374%2010.4919%202.56109%2010.0003%202.7799%209.568C3.09906%208.93756%203.73864%208.57355%204.4013%208.57355C4.67633%208.57355%204.95556%208.63636%205.2174%208.76892L5.79162%209.05951C6.68407%209.51123%207.04259%2010.6047%206.59087%2011.497C6.13915%2012.3895%205.04565%2012.748%204.15319%2012.2963ZM3.86755%2022.7302L3.40393%2022.5963L3.98785%2022.027C4.04223%2021.9741%204.08288%2021.9088%204.10632%2021.8366L6.59069%2014.2191C6.78112%2014.4871%207.0285%2014.7138%207.32183%2014.8832L7.43297%2014.9471L5.13079%2022.0591C4.99346%2022.4835%204.61151%2022.7562%204.19%2022.7701H4.13397C4.04571%2022.7681%203.95636%2022.7558%203.86755%2022.7302Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_30'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", y2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='57.6'%20height='57.6'%20viewBox='0%200%2057.6%2057.6'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M10.32%2056.4V55.8C10.32%2053.4%208.64%2051.36%206.36%2050.76V42.24H20.52C21.24%2042.24%2021.72%2041.76%2021.72%2041.04C21.72%2040.68%2021.6%2040.44%2021.36%2040.2L17.76%2036L21.36%2031.8C21.6%2031.56%2021.72%2031.32%2021.72%2030.96C21.72%2030.24%2021.24%2029.76%2020.52%2029.76H6.36V28.32C6.36%2027.6%205.88%2027.12%205.16%2027.12C4.44%2027.12%203.96%2027.6%203.96%2028.32V50.76C1.68%2051.36%200%2053.4%200%2055.8V56.4C0%2057.12%200.48%2057.6%201.2%2057.6H9.12C9.72%2057.6%2010.32%2057.12%2010.32%2056.4ZM6.36%2032.16H17.88L15.24%2035.16C14.88%2035.64%2014.88%2036.24%2015.24%2036.72L17.88%2039.72H6.36V32.16ZM2.52%2055.2C2.76%2054%203.84%2053.04%205.16%2053.04C6.48%2053.04%207.56%2054%207.8%2055.2H2.52Z'%20fill='%23003A67'/%3e%3cpath%20id='Vector_2'%20d='M57.6%203.24C57.6%202.52%2057.12%202.04%2056.4%202.04H45.72V1.2C45.72%200.48%2045.24%200%2044.52%200C43.8%200%2043.32%200.48%2043.32%201.2V16.92C41.52%2017.4%2040.32%2019.08%2040.32%2021V21.48C40.32%2022.2%2040.8%2022.68%2041.52%2022.68H47.64C48.36%2022.68%2048.84%2022.2%2048.84%2021.48V21C48.84%2019.08%2047.52%2017.52%2045.84%2016.92V12.12H56.4C57.12%2012.12%2057.6%2011.64%2057.6%2010.92C57.6%2010.56%2057.48%2010.32%2057.24%2010.08L54.6%207.08L57.24%204.08C57.48%203.84%2057.6%203.48%2057.6%203.24ZM46.2%2020.28H42.84C43.08%2019.68%2043.8%2019.2%2044.52%2019.2C45.24%2019.2%2045.96%2019.56%2046.2%2020.28ZM52.2%207.8L53.88%209.72H45.84V4.44H53.88L52.2%206.36C51.72%206.72%2051.72%207.44%2052.2%207.8Z'%20fill='%23003A67'/%3e%3cpath%20id='Vector_3'%20d='M37.2%2025.68L39%2025.08C39.6%2024.84%2039.96%2024.24%2039.72%2023.52C39.6%2022.92%2039%2022.56%2038.4%2022.8L36.6%2023.4C35.76%2023.64%2035.16%2024.36%2034.92%2025.2C34.68%2026.04%2034.92%2027%2035.4%2027.6L40.2%2033.24C40.8%2033.96%2038.04%2033.72%2031.68%2034.92C28.68%2035.4%2027%2038.52%2028.2%2041.28L30.72%2046.68C31.32%2047.88%2030.6%2049.32%2029.16%2049.56L12.36%2052.92C11.76%2053.04%2011.28%2053.64%2011.4%2054.36C11.52%2054.96%2012%2055.32%2012.6%2055.32H12.84L29.64%2051.96C32.52%2051.36%2034.08%2048.24%2032.88%2045.6L30.36%2040.2C29.76%2038.88%2030.6%2037.44%2031.92%2037.2L40.2%2036C42.24%2035.64%2043.2%2033.24%2041.88%2031.68L37.08%2026.04C36.8952%2025.782%2037.2%2025.68%2037.2%2025.68Z'%20fill='%23003A67'/%3e%3c/g%3e%3c/svg%3e", u2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='48.7868'%20height='53.7466'%20viewBox='0%200%2048.7868%2053.7466'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20id='outline'%3e%3cg%20id='Vector'%3e%3cuse%20xlink:href='%23stroke0_0_9'%20fill='%23003A67'/%3e%3cmask%20id='stroke1_0_9'%20maskUnits='userSpaceOnUse'%20x='-0.8'%20y='-0.8'%20width='50'%20height='55'%20fill='black'%3e%3crect%20fill='white'%20x='-0.8'%20y='-0.8'%20width='50'%20height='55'/%3e%3cuse%20xlink:href='%23stroke0_0_9'/%3e%3c/mask%3e%3cpath%20d='M45.4634%2032.8456C48.4972%2027.8609%2049.3719%2021.7672%2047.8634%2016.1281C45.3537%206.74938%2036.8216%200.2%2027.1128%200.2H25.7291C14.0778%200.2%204.59875%209.67906%204.59875%2021.3303V24.1334L0.668746%2030.1719C0.210309%2030.8769%200.0809335%2031.745%200.312496%2032.5531C0.544996%2033.3603%201.11406%2034.0269%201.87625%2034.3803L4.69812%2035.6928L5.81562%2042.0556C6.38375%2045.29%209.17937%2047.6375%2012.4634%2047.6375H17.6356C18.3134%2047.6375%2018.905%2048.1194%2019.0428%2048.7822L19.8781%2052.7994C19.9681%2053.2344%2020.3516%2053.5466%2020.7959%2053.5466H40.7178C41%2053.5466%2041.2672%2053.4191%2041.4453%2053.2006C41.6234%2052.9822%2041.6937%2052.6944%2041.6356%2052.4188L40.3606%2046.2809C39.8562%2043.8537%2040.2884%2041.3506%2041.5775%2039.2319L45.4634%2032.8456ZM39.9744%2038.2597C38.4378%2040.7844%2037.9231%2043.7694%2038.5241%2046.6634L39.5647%2051.6734H21.5581L20.8784%2048.4034C20.5616%2046.8744%2019.1975%2045.7653%2017.6356%2045.7653H12.4634C10.0925%2045.7653%208.07312%2044.0694%207.6625%2041.7341L6.46062%2034.8894C6.40718%2034.5875%206.21031%2034.3306%205.93281%2034.2022L2.6675%2032.6825C2.39468%2032.5559%202.19875%2032.3272%202.11531%2032.0375C2.03281%2031.7478%202.07687%2031.4497%202.24187%2031.1975L6.32375%2024.9266C6.42218%2024.7737%206.47562%2024.5956%206.47562%2024.4147V21.3331C6.47562%2010.7159%2015.1137%202.07781%2025.7309%202.07781H27.1147C35.9759%202.07781%2043.7638%208.05625%2046.0541%2016.6166C47.4303%2021.7625%2046.6325%2027.3238%2043.8631%2031.8744L39.9744%2038.2597ZM15.7503%2023.8184C16.0681%2024.2272%2015.995%2024.8159%2015.5862%2025.1337C14.6928%2025.8294%2013.5397%2026.2119%2012.3387%2026.2119C11.1369%2026.2119%209.98375%2025.8294%209.09031%2025.1337C8.68156%2024.8159%208.60843%2024.2262%208.92625%2023.8184C9.245%2023.4106%209.83375%2023.3366%2010.2416%2023.6544C11.3731%2024.5338%2013.3025%2024.5356%2014.4341%2023.6544C14.8428%2023.3356%2015.4316%2023.4106%2015.7503%2023.8184ZM36.5456%2010.5225C40.7906%2014.7675%2040.7906%2021.675%2036.5456%2025.92C36.3628%2026.1028%2036.1228%2026.1947%2035.8828%2026.1947C35.6428%2026.1947%2035.4028%2026.1028%2035.22%2025.92C34.8534%2025.5534%2034.8534%2024.9609%2035.22%2024.5944C38.7337%2021.0806%2038.7337%2015.3619%2035.22%2011.8481C33.5166%2010.1447%2031.2534%209.20625%2028.8478%209.20625C26.4422%209.20625%2024.1791%2010.1447%2022.4747%2011.8481C21.2409%2013.0819%2020.5612%2014.7197%2020.5612%2016.4625C20.5612%2018.2034%2021.2409%2019.8422%2022.4747%2021.0759C23.7084%2022.3097%2025.3462%2022.9894%2027.0881%2022.9894C28.83%2022.9894%2030.4678%2022.3088%2031.7016%2021.0759C33.2756%2019.5009%2033.2756%2016.9406%2031.7016%2015.3656C30.1275%2013.7925%2027.5662%2013.7925%2025.9922%2015.3656C25.3875%2015.9703%2025.3875%2016.9537%2025.9922%2017.5584C26.5781%2018.1444%2027.5981%2018.1444%2028.1841%2017.5584C28.5497%2017.1919%2029.1431%2017.1919%2029.5097%2017.5584C29.8762%2017.925%2029.8762%2018.5175%2029.5097%2018.8841C28.2159%2020.1788%2025.9603%2020.1788%2024.6666%2018.8841C23.3306%2017.5481%2023.3306%2015.3759%2024.6666%2014.04C26.9719%2011.7347%2030.7219%2011.7347%2033.0272%2014.04C35.3325%2016.3453%2035.3325%2020.0962%2033.0272%2022.4016C31.44%2023.9887%2029.3306%2024.8644%2027.0881%2024.8644C24.8456%2024.8644%2022.7362%2023.9887%2021.1491%2022.4016C19.5609%2020.8144%2018.6872%2018.705%2018.6872%2016.4625C18.6872%2014.2191%2019.5619%2012.1097%2021.1491%2010.5225C23.2069%208.46469%2025.9406%207.33125%2028.8478%207.33125C31.7541%207.33031%2034.4878%208.46375%2036.5456%2010.5225Z'%20stroke-width='0.4'%20stroke='%23003A67'%20mask='url(%23stroke1_0_9)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cpath%20id='stroke0_0_9'%20d='M45.4634%2032.8456C48.4972%2027.8609%2049.3719%2021.7672%2047.8634%2016.1281C45.3537%206.74938%2036.8216%200.2%2027.1128%200.2H25.7291C14.0778%200.2%204.59875%209.67906%204.59875%2021.3303V24.1334L0.668746%2030.1719C0.210309%2030.8769%200.0809335%2031.745%200.312496%2032.5531C0.544996%2033.3603%201.11406%2034.0269%201.87625%2034.3803L4.69812%2035.6928L5.81562%2042.0556C6.38375%2045.29%209.17937%2047.6375%2012.4634%2047.6375H17.6356C18.3134%2047.6375%2018.905%2048.1194%2019.0428%2048.7822L19.8781%2052.7994C19.9681%2053.2344%2020.3516%2053.5466%2020.7959%2053.5466H40.7178C41%2053.5466%2041.2672%2053.4191%2041.4453%2053.2006C41.6234%2052.9822%2041.6937%2052.6944%2041.6356%2052.4188L40.3606%2046.2809C39.8562%2043.8538%2040.2884%2041.3506%2041.5775%2039.2319L45.4634%2032.8456ZM39.9744%2038.2597C38.4378%2040.7844%2037.9231%2043.7694%2038.5241%2046.6634L39.5647%2051.6734H21.5581L20.8784%2048.4034C20.5616%2046.8744%2019.1975%2045.7653%2017.6356%2045.7653H12.4634C10.0925%2045.7653%208.07312%2044.0694%207.6625%2041.7341L6.46062%2034.8894C6.40718%2034.5875%206.21031%2034.3306%205.93281%2034.2022L2.6675%2032.6825C2.39468%2032.5559%202.19875%2032.3272%202.11531%2032.0375C2.03281%2031.7478%202.07687%2031.4497%202.24187%2031.1975L6.32375%2024.9266C6.42218%2024.7737%206.47562%2024.5956%206.47562%2024.4147V21.3331C6.47562%2010.7159%2015.1137%202.07781%2025.7309%202.07781H27.1147C35.9759%202.07781%2043.7638%208.05625%2046.0541%2016.6166C47.4303%2021.7625%2046.6325%2027.3238%2043.8631%2031.8744L39.9744%2038.2597ZM15.7503%2023.8184C16.0681%2024.2272%2015.995%2024.8159%2015.5862%2025.1337C14.6928%2025.8294%2013.5397%2026.2119%2012.3387%2026.2119C11.1369%2026.2119%209.98375%2025.8294%209.09031%2025.1337C8.68156%2024.8159%208.60844%2024.2262%208.92625%2023.8184C9.245%2023.4106%209.83375%2023.3366%2010.2416%2023.6544C11.3731%2024.5337%2013.3025%2024.5356%2014.4341%2023.6544C14.8428%2023.3356%2015.4316%2023.4106%2015.7503%2023.8184ZM36.5456%2010.5225C40.7906%2014.7675%2040.7906%2021.675%2036.5456%2025.92C36.3628%2026.1028%2036.1228%2026.1947%2035.8828%2026.1947C35.6428%2026.1947%2035.4028%2026.1028%2035.22%2025.92C34.8534%2025.5534%2034.8534%2024.9609%2035.22%2024.5944C38.7337%2021.0806%2038.7337%2015.3619%2035.22%2011.8481C33.5166%2010.1447%2031.2534%209.20625%2028.8478%209.20625C26.4422%209.20625%2024.1791%2010.1447%2022.4747%2011.8481C21.2409%2013.0819%2020.5613%2014.7197%2020.5613%2016.4625C20.5613%2018.2034%2021.2409%2019.8422%2022.4747%2021.0759C23.7084%2022.3097%2025.3462%2022.9894%2027.0881%2022.9894C28.83%2022.9894%2030.4678%2022.3088%2031.7016%2021.0759C33.2756%2019.5009%2033.2756%2016.9406%2031.7016%2015.3656C30.1275%2013.7925%2027.5662%2013.7925%2025.9922%2015.3656C25.3875%2015.9703%2025.3875%2016.9537%2025.9922%2017.5584C26.5781%2018.1444%2027.5981%2018.1444%2028.1841%2017.5584C28.5497%2017.1919%2029.1431%2017.1919%2029.5097%2017.5584C29.8762%2017.925%2029.8762%2018.5175%2029.5097%2018.8841C28.2159%2020.1788%2025.9603%2020.1788%2024.6666%2018.8841C23.3306%2017.5481%2023.3306%2015.3759%2024.6666%2014.04C26.9719%2011.7347%2030.7219%2011.7347%2033.0272%2014.04C35.3325%2016.3453%2035.3325%2020.0962%2033.0272%2022.4016C31.44%2023.9887%2029.3306%2024.8644%2027.0881%2024.8644C24.8456%2024.8644%2022.7362%2023.9887%2021.1491%2022.4016C19.5609%2020.8144%2018.6872%2018.705%2018.6872%2016.4625C18.6872%2014.2191%2019.5619%2012.1097%2021.1491%2010.5225C23.2069%208.46469%2025.9406%207.33125%2028.8478%207.33125C31.7541%207.33031%2034.4878%208.46375%2036.5456%2010.5225Z'/%3e%3c/defs%3e%3c/svg%3e", L2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='50.4673'%20height='59.03'%20viewBox='0%200%2050.4673%2059.03'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M26.8%208.474V3H32.654C34.61%202.992%2034.618%200.008%2032.654%200H17.948C15.99%200.008%2015.984%202.992%2017.948%203H23.8V14.2C23.8%2015.028%2024.472%2015.7%2025.3%2015.7C27.446%2015.628%2026.662%2012.832%2026.8%2011.474C37.916%2012.236%2046.764%2021.084%2047.524%2032.2C46.168%2032.336%2043.366%2031.556%2043.298%2033.7C43.37%2035.846%2046.166%2035.062%2047.524%2035.2C46.762%2046.314%2037.914%2055.162%2026.8%2055.924C26.664%2054.568%2027.444%2051.766%2025.3%2051.698C23.154%2051.77%2023.938%2054.566%2023.8%2055.924C12.686%2055.162%203.83802%2046.314%203.07602%2035.2C4.43402%2035.064%207.23402%2035.842%207.30202%2033.7C7.22602%2031.548%204.42202%2032.34%203.05802%2032.2C3.67602%2023.548%209.22002%2016.026%2017.3%2012.876C19.128%2012.172%2018.054%209.374%2016.222%2010.076C6.47602%2013.87%200.042017%2023.24%201.69492e-05%2033.7C-0.0159831%2047.672%2011.298%2059.014%2025.27%2059.03C57.902%2057.918%2059.288%2011.546%2026.8%208.474Z'%20fill='%23003A67'/%3e%3cpath%20id='Vector_2'%20d='M35.544%2023.464C34.96%2022.876%2034.006%2022.874%2033.42%2023.46L25.62%2031.26C24.158%2030.954%2022.788%2032.242%2022.804%2033.7C22.882%2037.204%2028.214%2036.848%2027.736%2033.386L35.536%2025.586C36.122%2025.002%2036.126%2024.052%2035.544%2023.464Z'%20fill='%23003A67'/%3e%3c/g%3e%3c/svg%3e", M2 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='60'%20height='43.0479'%20viewBox='0%200%2060%2043.0479'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M58.837%203.58219C58.8331%203.58219%2058.8291%203.58219%2058.8254%203.58219H54.8827V2.23309C54.904%201.69912%2054.5585%201.21923%2054.0454%201.07007C51.3082%200.352784%2048.4896%20-0.00687848%2045.66%209.96158e-05C41.0079%209.96158e-05%2034.6695%201.04681%2029.9826%205.81518C25.3305%201.00029%2018.9455%209.96158e-05%2014.3051%209.96158e-05C11.4755%20-0.00687848%208.65691%200.352784%205.91975%201.07007C5.40657%201.21923%205.06116%201.69912%205.08238%202.23309V3.57056H1.16302C0.52074%203.57056%200%204.0913%200%204.73357V41.8803C0%2042.5226%200.52074%2043.0433%201.16302%2043.0433C1.36276%2043.0427%201.55902%2042.9907%201.73289%2042.8921C1.8492%2042.834%2013.4794%2036.4723%2029.7151%2040.5661H29.8895H29.9942C30.0869%2040.5773%2030.1806%2040.5773%2030.2733%2040.5661C46.5555%2036.4374%2058.1857%2042.7875%2058.2555%2042.8921C58.6153%2043.0999%2059.0587%2043.0999%2059.4185%2042.8921C59.7761%2042.6857%2059.9975%2042.305%2060%2041.8919V4.74521C60%204.10293%2059.4794%203.58219%2058.837%203.58219ZM2.32603%2040.0311V5.90822H5.10564V35.0767C5.09837%2035.7189%205.61315%2036.2455%206.25543%2036.2528C6.31823%2036.2535%206.38103%2036.2491%206.44311%2036.2397C8.8491%2035.8723%2011.2782%2035.6779%2013.712%2035.6582C17.0833%2035.5997%2020.4404%2036.1068%2023.6441%2037.1585C16.4094%2036.2836%209.07109%2037.2724%202.32603%2040.0311ZM13.712%2033.3438C11.5966%2033.3486%209.48367%2033.4845%207.38515%2033.7508V3.15187C9.64954%202.64741%2011.9619%202.38995%2014.2818%202.38428C18.6315%202.38428%2024.6327%203.38448%2028.7963%208.08306L28.8312%2037.0538C26.4121%2035.4721%2021.6903%2033.3438%2013.712%2033.3438ZM31.1572%208.08306C35.3208%203.431%2041.322%202.38428%2045.6716%202.38428C47.9914%202.39112%2050.3038%202.64843%2052.5683%203.15187V33.7508C50.4816%2033.482%2048.3803%2033.3422%2046.2764%2033.3321C38.3446%2033.3321%2033.6112%2035.4605%2031.1572%2037.0422V8.08306ZM57.6623%2040.0311C50.9029%2037.2649%2043.5477%2036.2759%2036.2977%2037.1585C39.5165%2036.103%2042.8897%2035.5958%2046.2764%2035.6582C48.7254%2035.6718%2051.1702%2035.8623%2053.5918%2036.2281C54.2268%2036.3244%2054.8198%2035.8877%2054.9162%2035.2527C54.9256%2035.1906%2054.93%2035.1278%2054.9292%2035.065V5.90822H57.7089L57.6623%2040.0311Z'%20fill='%23003A67'/%3e%3c/g%3e%3c/svg%3e", r = "https://conversionrate-store.github.io/a-b_images/dywm/", k2 = `${r}hero_g.webp`, E2 = `${r}hero_b.webp`, Z2 = `${r}hero_c.webp`, V2 = `${r}hero_s.webp`, A2 = `${r}class1.webp`, S2 = `${r}class2.webp`, H2 = `${r}class3.webp`, F2 = `${r}t_david.webp`, D2 = `${r}t_fiji.webp`, T2 = `${r}t_melissa.webp`, R2 = `${r}t_josh.webp`, j2 = `${r}t_julia.webp`, S = {
    planId: "139",
    coupon: "ANNUAL40"
  }, O2 = "", C = { old: "$108.99", now: "$65.39", off: "−40%" }, u = {
    general: {
      title: "A year of yoga for a stronger body and a calmer mind",
      sub: "<b>1,200+ classes</b> for beginners, stress and sleep, pain relief and strength. Practise at home with certified teachers.",
      hero: k2
    },
    beginners: {
      title: "From your first class to a daily habit in one year",
      sub: "Clear, beginner-friendly classes that teach you the basics step by step. No flexibility or experience needed.",
      hero: E2
    },
    calm: {
      title: "A year of calmer days and deeper sleep",
      sub: "Guided meditation, breathwork and gentle yoga for stress, anxiety and restless nights. Practise at home, a few minutes a day.",
      hero: Z2
    },
    strength: {
      title: "A year of yoga to get stronger and more flexible",
      sub: "Yoga classes that work your core, build full-body strength and loosen tight muscles at home. No gym and no equipment needed.",
      hero: V2
    }
  }, x = {
    presale: {
      badge: "Black Friday&nbsp;&nbsp;·&nbsp;&nbsp;Nov 27",
      cardHead: "Starts November 27",
      timerLabel: "Starts in",
      finalTitle: "<em>40% off</em> a full year starts Nov 27",
      stickyLabel: "Starts in"
    },
    sale: {
      badge: "Black Friday",
      cardHead: "7 days free, then",
      timerLabel: "Ends in",
      finalTitle: "Your year of yoga starts with 7 free days",
      stickyLabel: "Offer ends"
    },
    lastday: {
      badge: "Cyber Monday&nbsp;&nbsp;·&nbsp;&nbsp;last day",
      cardHead: "7 days free, then",
      timerLabel: "Ends in",
      finalTitle: "Last day. The price goes back up tonight.",
      stickyLabel: "Offer ends"
    }
  }, I2 = `7 days free, then ${C.now} for your first year. Price goes back to ${C.old} <span class="bf_nw">after 11:59&nbsp;pm ET on Nov&nbsp;30.</span>`, z2 = ["Cancel any time", "Reminder 3 days before your trial ends", "30-day money-back guarantee"], q2 = [
    { n: "605", label: "For beginners", icon: _2 },
    { n: "188", label: "for calm and sleep", icon: m2 },
    { n: "93", label: "for pain relief", icon: w2 },
    { n: "96", label: "for strength and flexibility", icon: v2 }
  ], N2 = ["Hatha", "Vinyasa", "Yin", "Restorative", "Pilates", "Meditation"], H = [A2, S2, H2], B2 = [
    { title: "A clear path for your practice", text: "Know exactly what to do next with 90+ programs and challenges.", icon: y2 },
    { title: "Less stress and pain, better sleep", text: "Focused collections for the goals that matter most to you.", icon: u2 },
    { title: "Fits any day", text: "Classes from 2 to 90 minutes, on the web, in the app and on TV.", icon: L2 },
    { title: "A beginner-friendly start", text: "No flexibility needed. Build confidence step by step.", icon: M2 }
  ], P2 = [
    { name: "David Procyshyn", role: "Founder of DoYogaWithMe", text: "Hatha, pain care, meditation. Also a massage therapist.", img: F2 },
    { name: "Fiji McAlpine", role: "E-RYT 500 · founding teacher", text: "Vinyasa, power and meditation.", img: D2 },
    { name: "Melissa Krieger", role: "Hatha, slow flow, restorative", text: "Calm, clear classes for every level.", img: T2 },
    { name: "Josh Chen", role: "Hatha, yin, meditation", text: "Stretches and evening wind-downs.", img: R2 },
    { name: "Julia Crouch", role: "Pilates, hatha", text: "Pilates and core strength.", img: j2 }
  ], U2 = [
    { text: "I honestly don't know what I would do without DoYogaWithMe.", name: "Kristin Fields" },
    { text: "You have great content and amazing teachers. I haven't done a class that I haven't enjoyed.", name: "Molly" },
    { text: "Oh my goodness it is so hard to pick a favorite teacher.", name: "Betse Lyons" },
    { text: "I love this site and I tell everyone I can about it.", name: "Rebecca Fisher" }
  ], Y2 = [
    {
      q: "When will I be charged?",
      a: `Your 7-day free trial starts today. If you keep your membership, you'll be charged ${C.now} for your first year when the trial ends. Cancel before then and you pay nothing.`
    },
    {
      q: "Do I need to start before Nov 30?",
      a: `Yes. The 40% off price is for trials started by 11:59 pm ET on November 30. After that, the yearly price goes back to ${C.old}.`
    },
    {
      q: "What happens after the first year?",
      a: `Your membership renews at the regular yearly price of ${C.old}. We'll email you before it renews, and you can cancel any time from your account.`
    },
    {
      q: "Where can I practise?",
      a: "Anywhere you like: on the web, in the DoYogaWithMe app for iOS and Android, and on your TV."
    }
  ], a = {
    logo: P,
    logoM: U,
    fire: Y,
    divider: J,
    dividerGrey: W,
    cal: X,
    bell: Q,
    bellW: G,
    shield: K,
    star: $,
    starY: n2,
    starCoral: e2,
    mailB: t2,
    mailT: i2,
    collBg: a2,
    classesBg: s2,
    clock: o2,
    lock: l2,
    icYoga: C2,
    ratingBg: r2,
    avatar: p2,
    dot: f2,
    badge: c2,
    plusV: d2,
    plusH: b2,
    flower: h2,
    flowerDark: g2
  }, s = (n, e = "") => `<img class="${e}" src="${n}" alt="" />`, L = (n, e = 5) => s(n, "").repeat(e), _ = (n) => n === "presale", J2 = [
    ["d", "Days"],
    ["h", "Hrs"],
    ["m", "Min"],
    ["s", "Sec"]
  ], M = (n) => `
  <div class="bf_timer bf_timer--${n}" data-bf-timer>
    ${J2.map(([e, t]) => `<span class="bf_timer__u" data-u="${e}"><b>00</b><i>${t}</i></span>`).join("")}
  </div>`, F = (n, e = !1) => `
  <div class="bf_badge${e ? " bf_badge--dark" : ""}">
    ${s(a.fire, "bf_badge__fire")}
    <span>${x[n].badge}</span>
    ${s(a.divider, "bf_badge__div")}
    <span class="bf_off">40% off</span>
  </div>`, W2 = () => `
  <span class="bf_mail">${s(a.mailB, "bf_mail__b")}${s(a.mailT, "bf_mail__t")}</span>`, m = (n, e = "", t = "Remind me on Nov 27", i = !1) => `
  <form class="bf_form ${e}" data-bf-remind="${n}" novalidate>
    <label class="bf_input">
      ${W2()}
      <input type="email" name="email" placeholder="Email address" autocomplete="email" required />
    </label>
    <button type="submit" class="bf_btn">${i ? s(a.bellW) : ""}${t}</button>
    <p class="bf_form__msg" hidden></p>
  </form>`, k = (n, e = "", t = "Start my 7-day free trial") => `<a class="bf_btn ${e}" href="#" data-bf-trial="${n}">${t}</a>`, X2 = () => `
  <header class="bf_header">
    <a class="bf_header__logo" href="/">${s(a.logo, "bf_d")}${s(a.logoM, "bf_m")}</a>
    <a class="bf_header__login" href="/yogi/login?destination=${encodeURIComponent(window.location.pathname)}">Log in</a>
  </header>`, Q2 = (n) => {
    const e = x[n], t = `
    <div class="bf_card__head">
      <p class="bf_card__title">${e.cardHead}</p>
      <div class="bf_card__timer"><span>${e.timerLabel}</span>${M("light")}</div>
    </div>`;
    return _(n) ? `
      <div class="bf_card bf_card--pre">
        ${t}
        <div class="bf_card__body">
          <div class="bf_card__price">
            <div class="bf_price">
              <span class="bf_price__vals"><s>${C.old}</s><strong>${C.now}</strong></span>
              <span class="bf_price__per">first year <span class="bf_off bf_off--sm">${C.off}</span></span>
            </div>
            <p class="bf_card__note">7-day free trial, then 40% off a full year.</p>
          </div>
          ${m("hero", "bf_form--card")}
        </div>
      </div>` : `
    <div class="bf_card">
      ${t}
      <div class="bf_card__body">
        <div class="bf_card__price">
          <div class="bf_price">
            <span class="bf_price__vals"><s>${C.old}</s><strong>${C.now}</strong></span>
            <span class="bf_price__per">for your first year <span class="bf_off bf_off--sm">${C.off}</span></span>
          </div>
        </div>
        ${k("hero", "bf_btn--card")}
        <ul class="bf_perks">
          ${z2.map((i, o) => `<li>${s([a.cal, a.bell, a.shield][o], o === 2 ? "bf_perks__inset" : "")}${i}</li>`).join("")}
        </ul>
      </div>
    </div>`;
  }, G2 = (n, e) => `
  <section class="bf_hero">
    <div class="bf_hero__main">
      ${F(e)}
      <h1 class="bf_hero__title">${u[n].title}</h1>
      <p class="bf_hero__sub">${u[n].sub}</p>
      ${Q2(e)}
      <p class="bf_rating">${L(a.star)}<span>Rated 4.9 by 15,000+ customers</span></p>
    </div>
    <div class="bf_hero__pic"><img src="${u[n].hero}" alt="" fetchpriority="high" /></div>
  </section>`, K2 = (n, e) => `
  <div class="bf_class">
    <div class="bf_class__pic">
      <img src="${n}" alt="" loading="lazy" />
      ${e ? `<span class="bf_class__lock">${s(a.lock)}Subscribers only</span>` : ""}
      <span class="bf_class__tag bf_class__tag--lvl"><i></i><i></i><i></i>Beginner I</span>
      <span class="bf_class__tag bf_class__tag--dur">${s(a.clock)}38 mins</span>
    </div>
    <div class="bf_class__info">
      <p class="bf_class__name"><b>Yoga for Grief</b><span>${s(a.starCoral)}5,0</span></p>
      <p class="bf_class__meta">Vinyasa&nbsp;&nbsp;•&nbsp;&nbsp;Power Yoga&nbsp;&nbsp;•&nbsp;&nbsp;Reclining Heart Opener</p>
      <p class="bf_class__teacher">${s(a.icYoga)}Julia Crouch</p>
    </div>
  </div>`, $2 = () => `
  <section class="bf_classes">
    <div class="bf_classes__text">
      <p class="bf_big">1,200 +</p>
      <h2 class="bf_h2">Classes you won't find on YouTube</h2>
      <p class="bf_lead">Every collection below is part of your subscription, across 25+ styles.</p>
      <hr class="bf_classes__hr" />
      <h3 class="bf_h3">Collections included</h3>
      <div class="bf_colls">
        ${q2.map(
    (n) => `
          <div class="bf_coll">
            ${s(a.collBg, "bf_coll__bg")}
            <b>${n.n}</b>
            <span>${s(n.icon)}${n.label}</span>
          </div>`
  ).join("")}
      </div>
      <ul class="bf_tags">${N2.map((n) => `<li>${n}</li>`).join("")}</ul>
    </div>
    <div class="bf_classes__box">
      ${s(a.classesBg, "bf_classes__bg")}
      <div class="bf_stack">${H.map((n, e) => K2(n, e === H.length - 1)).join("")}</div>
      <p class="bf_more">+ 1,195 more classes</p>
    </div>
  </section>`, n0 = () => `
  <section class="bf_benefits">
    <div class="bf_wrap">
      <h2 class="bf_h2">Yoga you'll stick with</h2>
      <p class="bf_lead">Build a habit that helps you feel better every day, whatever brought you to the mat.</p>
      <div class="bf_feats">
        ${B2.map(
    (n) => `
          <div class="bf_feat">
            <span class="bf_feat__icon">${s(n.icon)}</span>
            <div><h3 class="bf_h3">${n.title}</h3><p>${n.text}</p></div>
          </div>`
  ).join("")}
      </div>
    </div>
    <div class="bf_wrap bf_teachers">
      <h2 class="bf_h2">Learn from certified teachers</h2>
      <p class="bf_lead">41 teachers across 25+ styles. Here are a few you'll practise with.</p>
      <div class="bf_tlist">
        ${P2.map(
    (n) => `
          <div class="bf_teacher">
            <img src="${n.img}" alt="${n.name}" loading="lazy" />
            <p class="bf_teacher__name">${n.name}</p>
            <p class="bf_teacher__role">${n.role}</p>
            <p class="bf_teacher__text">${n.text}</p>
          </div>`
  ).join("")}
      </div>
      <p class="bf_more">+36 more teachers</p>
    </div>
  </section>`, e0 = () => `
  <section class="bf_wrap bf_reviews">
    <h2 class="bf_h2">Members stay for years</h2>
    <div class="bf_reviews__row">
      <div class="bf_score">
        ${s(a.ratingBg, "bf_score__bg")}
        <b>4.9</b>
        <div>
          <span class="bf_stars">${L(a.starY)}</span>
          <p>Rated by <strong>15,000+</strong> customers</p>
        </div>
      </div>
      <div class="bf_rlist">
        ${U2.map(
    (n) => `
          <div class="bf_review">
            <span class="bf_review__ava">${s(a.avatar)}</span>
            <div class="bf_review__body">
              <span class="bf_stars">${L(a.starY)}</span>
              <p>${n.text}</p>
              <p class="bf_review__by"><b>${n.name}</b>${s(a.dot)}<span>Sustaining Member</span></p>
            </div>
          </div>`
  ).join("")}
      </div>
    </div>
  </section>`, t0 = () => `
  <section class="bf_faq">
    ${s(a.flower, "bf_flower bf_flower--l")}${s(a.flower, "bf_flower bf_flower--r")}
    <div class="bf_faq__inner">
      <h2 class="bf_h2">Popular questions</h2>
      <div class="bf_guarantee">
        ${s(a.badge)}
        <div><h3 class="bf_h3">30 days Money-back guarantee</h3><p>Not for you? Write to us within 30 days of your first payment for a full refund.</p></div>
      </div>
      ${Y2.map(
    (n, e) => `
        <details class="bf_qa" data-bf-faq="${e}">
          <summary>${n.q}<span class="bf_plus">${s(a.plusV, "bf_plus__v")}${s(a.plusH, "bf_plus__h")}</span></summary>
          <p>${n.a}</p>
        </details>`
  ).join("")}
    </div>
  </section>`, i0 = () => `
  <section class="bf_wrap bf_notready">
    <div class="bf_notready__text">
      <h2 class="bf_h2">Not ready yet?</h2>
      <p>We'll email you once before the price goes back up.</p>
    </div>
    ${m("not_ready", "bf_form--wide", "Remind me", !0)}
  </section>`, a0 = (n) => `
  <section class="bf_final">
    ${s(a.flowerDark, "bf_flower bf_flower--l")}${s(a.flowerDark, "bf_flower bf_flower--r")}
    ${F(n, !0)}
    <h2 class="bf_final__title">${x[n].finalTitle}</h2>
    ${M("dark")}
    ${_(n) ? m("final", "bf_form--final") : k("final", "bf_btn--final")}
    <p class="bf_final__note">${I2}</p>
  </section>`, s0 = () => `
  <footer class="bf_footer">
    <div class="bf_footer__top">
      <a href="/" class="bf_footer__logo" style="--mask: url('${x2}')"></a>
      <nav><a href="/contact">Contact Us</a><a href="/help">Help &amp; FAQs</a></nav>
    </div>
    <div class="bf_footer__bottom">
      <span>© ${(/* @__PURE__ */ new Date()).getFullYear()} DoYogaWithMe</span>
      <span><a href="/privacy">Privacy Policy</a> • <a href="/legal">Terms &amp; Conditions</a></span>
    </div>
  </footer>`, o0 = (n) => {
    const e = x[n], t = _(n) ? '<p class="bf_sticky__offer"><span class="bf_off">−40% off</span><b>from Nov 27</b></p>' : `<p class="bf_sticky__offer"><b>7 days free</b><span class="bf_sticky__then">then</span><b>${C.now}/yr</b><s>${C.old}</s><span class="bf_off bf_off--xs">${C.off}</span></p>`, i = _(n) ? `${m("sticky", "bf_form--sticky bf_d")}
       <button type="button" class="bf_btn bf_btn--sticky bf_m" data-bf-goto-form>${s(a.bellW)}Remind me on Nov 27</button>` : k("sticky", "bf_btn--sticky", "Start free trial");
    return `
    <div class="bf_sticky" aria-hidden="true">
      <div class="bf_sticky__info">
        ${t}
        ${s(a.dividerGrey, "bf_sticky__div bf_d")}
        <div class="bf_sticky__timer bf_d"><span>${e.stickyLabel}</span>${M("sticky")}</div>
      </div>
      ${i}
    </div>`;
  };
  T({ name: "Black Friday landing pages", dev: "YK" }), R("bf_landing");
  const c = "bf_landing", l0 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, C0 = () => {
    const n = window.location.pathname.replace(/\/$/, ""), e = Object.entries(O).find(([, t]) => t === n);
    return e ? e[0] : null;
  };
  class r0 {
    constructor() {
      this.stopTicker = null, this.stickyObserver = null, this.seen = /* @__PURE__ */ new Set(), this.init();
    }
    async init() {
      const e = C0();
      if (!e) return;
      const t = y();
      if (t === "off") {
        Date.now() >= d.end && window.location.replace("/");
        return;
      }
      (await E("head")).insertAdjacentHTML(
        "beforeend",
        `<style class="bf_style">${D}</style><style class="bf_hide">body > *:not(.bf_root):not(.sfc-modalTrialFunnel) { display: none !important; } .sfc-modalTrialFunnel__triggerWrapper { display: none !important; }</style>`
      ), await E("body"), this.page = e, this.root = document.createElement("div"), this.root.className = "bf_root", document.body.prepend(this.root), this.bindEvents(), this.render(t);
    }
    get loc() {
      return `${this.page}|${this.state}`;
    }
    render(e) {
      var t;
      this.state = e, (t = this.stopTicker) == null || t.call(this), this.root.className = `bf_root bf_root--${e}`, this.root.innerHTML = `
      ${X2()}
      <main>
        ${G2(this.page, e)}
        ${$2()}
        ${n0()}
        ${e0()}
        ${t0()}
        ${e !== "presale" ? i0() : ""}
        ${a0(e)}
      </main>
      ${s0()}
      ${o0(e)}`, this.stopTicker = N(
        e,
        (i) => B(this.root, e, i),
        () => {
          const i = y();
          i === "off" ? window.location.replace("/") : this.render(i);
        },
        y
      ), this.watchSticky(), f(c, "Landing view", "loaded", this.loc), Z(`Rendered ${this.loc}`);
    }
    // Fallback when the native trial popup isn't on the page.
    trialUrl() {
      const { planId: e, coupon: t } = S, i = `/express-checkout/${e}?coupon=${t}`;
      return `/yogi/register?destination=${encodeURIComponent(i)}&plan=${e}&trial=1&coupon=${t}&from=${c}_${this.page}`;
    }
    // The native trial form redirects to the checked plan's data-checkout-url,
    // so the coupon is appended there (yearly plan only, it is an annual coupon).
    applyCoupon() {
      const { planId: e, coupon: t } = S;
      document.querySelectorAll(`input[name="plan"][value="${e}"][data-checkout-url]`).forEach((i) => {
        const o = i.getAttribute("data-checkout-url");
        o.includes("coupon=") || i.setAttribute("data-checkout-url", `${o}${o.includes("?") ? "&" : "?"}coupon=${t}`);
      });
    }
    // Trial CTAs open the site's own trial popup; it sends guests to registration itself.
    openTrial() {
      const e = document.querySelector(".sfc-modalTrialFunnel__triggerWrapper button");
      if (!e) {
        window.location.href = this.trialUrl();
        return;
      }
      this.applyCoupon(), e.click();
    }
    // Delegated once on the root, so it survives re-renders on state change.
    bindEvents() {
      this.root.addEventListener("click", (e) => {
        const t = e.target, i = t.closest("[data-bf-trial]");
        if (i) {
          e.preventDefault(), f(c, "Start trial CTA", "click", `${i.dataset.bfTrial}|${this.loc}`), this.openTrial();
          return;
        }
        if (t.closest("[data-bf-goto-form]")) {
          f(c, "Sticky remind button", "click", this.loc);
          const o = this.root.querySelector('[data-bf-remind="hero"] input');
          o == null || o.scrollIntoView({ behavior: "smooth", block: "center" }), o == null || o.focus({ preventScroll: !0 });
        }
      }), this.root.addEventListener("toggle", (e) => {
        var i;
        const t = e.target;
        (i = t.matches) != null && i.call(t, "[data-bf-faq]") && t.open && f(c, "FAQ open", "click", `${t.dataset.bfFaq}|${this.loc}`);
      }, !0), this.root.addEventListener("submit", (e) => {
        const t = e.target.closest("[data-bf-remind]");
        t && (e.preventDefault(), this.submitReminder(t));
      });
    }
    async submitReminder(e) {
      const t = e.querySelector("input"), i = e.querySelector(".bf_form__msg"), o = t.value.trim(), l = `${e.dataset.bfRemind}|${this.loc}`;
      if (!l0.test(o)) {
        e.classList.add("bf_form--error"), i.textContent = "Please enter a valid email address.", i.hidden = !1, f(c, "Reminder email", "error", l);
        return;
      }
      e.classList.remove("bf_form--error"), f(c, "Reminder email", "submit", l);
      try {
        e.classList.add("bf_form--done"), e.querySelectorAll(".bf_input, .bf_btn").forEach((p) => p.remove()), i.textContent = this.state === "presale" ? "You're on the list. We'll remind you on Nov 27." : "You're on the list. We'll email you before the price goes back up.", i.hidden = !1, f(c, "Reminder email", "success", l);
      } catch (p) {
        e.classList.add("bf_form--error"), i.textContent = "Something went wrong. Please try again.", i.hidden = !1, f(c, "Reminder email", "error", `${l}|${p}`);
      }
    }
    // Sticky bar shows once the hero has been scrolled past.
    // Sticky bar shows once the hero has been scrolled past, and hides again while the
    // final banner or the footer is on screen (they already carry the same CTA).
    watchSticky() {
      var w;
      const e = this.root.querySelector(".bf_sticky"), t = this.root.querySelector(".bf_hero"), i = [this.root.querySelector(".bf_final"), this.root.querySelector(".bf_footer")];
      let o = !1;
      const l = /* @__PURE__ */ new Set(), p = () => {
        const b = o && l.size === 0;
        e.classList.toggle("bf_sticky--on", b), e.setAttribute("aria-hidden", String(!b)), b && !this.seen.has(`sticky|${this.state}`) && (this.seen.add(`sticky|${this.state}`), f(c, "Sticky bar view", "view", this.loc));
      };
      (w = this.stickyObserver) == null || w.disconnect(), this.stickyObserver = new IntersectionObserver((b) => {
        b.forEach((h) => {
          h.target === t ? o = !h.isIntersecting && h.boundingClientRect.top < 0 : h.isIntersecting ? l.add(h.target) : l.delete(h.target);
        }), p();
      }), [t, ...i].forEach((b) => this.stickyObserver.observe(b));
    }
  }
  new r0();
})();
//# sourceMappingURL=index.js.map
