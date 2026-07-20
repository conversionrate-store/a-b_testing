(function() {
  "use strict";
  const H = `.header {
  display: none;
}

.crs2_new_content_block {
  font-family: "Poppins", sans-serif;
  color: #0d2034;
}
.crs2_new_content_block * {
  box-sizing: border-box;
}
.crs2_new_content_block img {
  max-width: 100%;
  display: block;
}
.crs2_new_content_block section {
  margin: 0;
}
@media (min-width: 768px) {
  .crs2_new_content_block section {
    margin: 90px 0;
  }
}
.crs2_new_content_block h2 {
  letter-spacing: unset !important;
}

.crs2-eyebrow {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #3d85c6;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 0 0 12px;
}
.crs2-eyebrow svg {
  flex-shrink: 0;
}

.crs2-cta-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 32px;
}
.crs2-cta-wrap__microcopy {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.crs2-cta-wrap__microcopy span {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #425b76;
}
.crs2-cta-wrap__microcopy span svg {
  flex-shrink: 0;
}

.crs2-cta {
  width: 100%;
  padding: 16px 24px;
  max-width: 420px;
  background: #ff9902;
  color: #0d2034;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
  text-align: center;
  font-family: "Poppins", sans-serif;
}
.crs2-cta:hover {
  background: #e68900;
}

.crs2_container {
  max-width: 1200px;
  margin: 0 auto;
}

.crs2-header {
  background: #09233e;
  position: relative;
  z-index: 20;
  border-bottom: 1px solid #425b76;
}
.crs2-header__container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.crs2-header__logo {
  width: 128px;
  height: 42px;
  border-radius: 4px;
  flex-shrink: 0;
}
.crs2-header__nav {
  display: none;
  align-items: center;
  gap: 4px;
}
@media (max-width: 767px) {
  .crs2-header__nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    background: #0d2034;
    padding: 8px 20px 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
}
@media (min-width: 768px) {
  .crs2-header__nav {
    display: flex;
  }
}
.crs2-header__nav-link {
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 12px;
  opacity: 0.9;
  transition: opacity 0.2s;
}
.crs2-header__nav-link:hover {
  opacity: 1;
}
@media (max-width: 767px) {
  .crs2-header__nav-link {
    padding: 12px 4px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
}
.crs2-header__phone {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  text-decoration: none;
  flex-shrink: 0;
  margin-left: auto;
}
@media (min-width: 768px) {
  .crs2-header__phone {
    margin-left: 0;
  }
}
.crs2-header__phone-icon {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background: #425b76;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.crs2-header__phone-icon svg {
  width: 20px;
  height: 20px;
}
.crs2-header__phone-text {
  display: none;
  flex-direction: column;
  font-size: 13px;
}
.crs2-header__phone-text b {
  font-size: 15px;
  color: #ff9902;
}
@media (min-width: 768px) {
  .crs2-header__phone-text {
    display: flex;
  }
}
.crs2-header__mobile-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #425b76;
  border: none;
  border-radius: 6px;
  color: #ff9902;
  cursor: pointer;
  flex-shrink: 0;
}
@media (min-width: 768px) {
  .crs2-header__mobile-toggle {
    display: none;
  }
}
.crs2-header__mobile-toggle-icon--close {
  display: none;
}
.crs2-header.crs2-header--menu-open .crs2-header__mobile-toggle-icon--open {
  display: none;
}
.crs2-header.crs2-header--menu-open .crs2-header__mobile-toggle-icon--close {
  display: flex;
}
.crs2-header.crs2-header--menu-open .crs2-header__nav {
  display: flex;
}

.crs-ba-slider {
  width: 100%;
}
.crs-ba-slider__frame {
  position: relative;
  width: 100%;
  aspect-ratio: 568/473;
  border-radius: 12px;
  overflow: hidden;
  background: #cfe2f3;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.crs-ba-slider__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.crs-ba-slider__image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.crs-ba-slider__image--after {
  clip-path: inset(0 0 0 50%);
}
.crs-ba-slider__label {
  position: absolute;
  top: 12px;
  padding: 4px 12px;
  border-radius: 4px;
  background: rgba(13, 32, 52, 0.7);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.crs-ba-slider__label--before {
  left: 12px;
}
.crs-ba-slider__label--after {
  right: 12px;
}
.crs-ba-slider__divider {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  margin-left: -2px;
  background: #fff;
  cursor: ew-resize;
  touch-action: none;
}
.crs-ba-slider__handle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #ff9902;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}
.crs-ba-slider--dragging .crs-ba-slider__divider {
  background: #ff9902;
}

.crs2-hero {
  background: #0d2034;
  padding: 32px 0 0 !important;
  margin-top: 0 !important;
}
.crs2-hero__container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
@media (min-width: 768px) {
  .crs2-hero__container {
    flex-direction: row;
    align-items: center;
    gap: 60px;
    padding: 40px 90px 0;
  }
}
.crs2-hero__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media (min-width: 768px) {
  .crs2-hero__content {
    flex: 1 1 50%;
  }
}
.crs2-hero__badge {
  display: inline-flex;
  align-self: flex-start;
  padding: 8px 16px;
  border-radius: 6px;
  background: #3f8dc2;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.crs2-hero__title {
  font-size: 30px;
  line-height: 1.2;
  font-weight: 700;
  color: #fff;
  margin: 0;
  text-transform: uppercase;
}
.crs2-hero__title span {
  color: #ff9902;
}
@media (min-width: 768px) {
  .crs2-hero__title span {
    display: block;
  }
}
@media (min-width: 768px) {
  .crs2-hero__title {
    font-size: 44px;
  }
}
.crs2-hero__desc {
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
}
.crs2-hero__desc b {
  color: #fff;
}
@media (min-width: 768px) {
  .crs2-hero__desc {
    font-size: 17px;
  }
}
.crs2-hero__cta-row {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
}
@media (min-width: 768px) {
  .crs2-hero__cta-row {
    flex-direction: row;
  }
}
.crs2-hero__cta {
  padding: 15px 24px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}
.crs2-hero__cta--primary {
  background: #ff9902;
  color: #0d2034;
  border: none;
  flex: 1;
}
.crs2-hero__cta--primary:hover {
  background: #e68900;
}
.crs2-hero__cta--secondary {
  background: transparent;
  color: #fff;
  border-color: #ff9902;
}
.crs2-hero__cta--secondary:hover {
  background: rgba(255, 153, 2, 0.1);
}
.crs2-hero__microcopy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}
.crs2-hero__microcopy svg {
  flex-shrink: 0;
}
@media (min-width: 768px) {
  .crs2-hero__media {
    flex: 1 1 50%;
  }
}
.crs2-hero__trust {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin-top: 32px;
  padding: 24px 20px;
}
@media (min-width: 768px) {
  .crs2-hero__trust {
    margin-top: 60px;
    padding: 28px 90px 80px;
  }
}
.crs2-hero__trust-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
}
@media (min-width: 768px) {
  .crs2-hero__trust-row {
    flex-direction: row;
    justify-content: space-around;
    gap: 40px;
  }
}
.crs2-hero__trust-item {
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: center;
}
@media (min-width: 768px) {
  .crs2-hero__trust-item {
    text-align: left;
  }
}
.crs2-hero__trust-logo {
  width: 100px;
  height: auto;
  flex-shrink: 0;
}
.crs2-hero__trust-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.crs2-hero__trust-text b {
  color: #fff;
  font-size: 20px;
}
.crs2-hero__trust-text span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}
.crs2-hero__trust-google {
  display: flex;
  align-items: center;
  gap: 6px;
}
.crs2-hero__trust-google img {
  width: 28px;
  height: 28px;
}
.crs2-hero__trust-divider {
  display: none;
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.15);
}
@media (min-width: 768px) {
  .crs2-hero__trust-divider {
    display: block;
  }
}
.crs2-hero__featured {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}
.crs2-hero__featured p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.crs2-hero__featured-img {
  max-width: 100%;
  height: auto;
}
.crs2-hero img.crs2-hero__featured-img--d {
  display: none;
}
@media (min-width: 768px) {
  .crs2-hero img.crs2-hero__featured-img--d {
    display: block;
  }
}
.crs2-hero img.crs2-hero__featured-img--m {
  display: block;
}
@media (min-width: 768px) {
  .crs2-hero img.crs2-hero__featured-img--m {
    display: none;
  }
}

.crs2-stage {
  background: #fff;
}
.crs2-stage__container {
  border-radius: 12px;
  background: #f4f6fa;
  padding: 42px 20px;
}
@media (min-width: 768px) {
  .crs2-stage__container {
    padding: 60px;
  }
}
.crs2-stage__title {
  font-size: 28px;
  line-height: 1.3;
  font-weight: 700;
  color: #0d2034;
  margin: 0 0 24px;
}
.crs2-stage__title span {
  display: block;
  color: #ff9902;
}
@media (min-width: 768px) {
  .crs2-stage__title {
    display: inline;
    font-size: 36px;
    margin: 0 0 32px;
  }
}
.crs2-stage__row {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
@media (min-width: 768px) {
  .crs2-stage__row {
    flex-direction: row;
    align-items: flex-start;
    gap: 32px;
  }
}
.crs2-stage__quote {
  flex: 1 1 50%;
  background: #cfe2f3;
  border-radius: 12px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.crs2-stage__quote svg {
  width: 28px;
  height: 28px;
}
.crs2-stage__quote-text {
  font-style: italic;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #09233e;
  margin: 0;
}
@media (min-width: 768px) {
  .crs2-stage__quote-text {
    font-size: 20px;
  }
}
.crs2-stage__author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
}
.crs2-stage__author b {
  display: block;
  font-size: 20px;
  color: #0d2034;
}
.crs2-stage__author span span {
  font-size: 12px;
  color: #425b76;
}
@media (min-width: 768px) {
  .crs2-stage__author span span {
    font-size: 14px;
  }
}
.crs2-stage__author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #0d2034;
  flex-shrink: 0;
}
.crs2-stage__video {
  flex: 1 1 50%;
}
.crs2-stage__video-thumb {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  background: #425b76;
  overflow: hidden;
}
.crs2-stage__video-thumb--playing .crs2-stage__video-play {
  display: none;
}
.crs2-stage__video-el {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.crs2-stage__video-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(13, 32, 52, 0.55);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.crs2-stage__video-play svg {
  width: 20px;
  height: 24px;
}

.crs2-how-works__intro {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 42px;
  padding: 42px 20px 0;
}
@media (min-width: 768px) {
  .crs2-how-works__intro {
    flex-direction: row;
    align-items: center;
    gap: 60px;
    padding: 0;
  }
}
@media (min-width: 768px) {
  .crs2-how-works__intro-text {
    flex: 1 1 55%;
  }
}
.crs2-how-works__intro-media {
  border-radius: 12px;
  background: #f4f6fa;
  aspect-ratio: 4/3;
}
@media (min-width: 768px) {
  .crs2-how-works__intro-media {
    flex: 1 1 45%;
  }
}
.crs2-how-works__title {
  font-size: 28px;
  line-height: 1.3;
  font-weight: 700;
  color: #0d2034;
  margin: 0 0 16px;
}
.crs2-how-works__title b {
  color: #ff9902;
  display: block;
}
@media (min-width: 768px) {
  .crs2-how-works__title b {
    display: inline;
  }
}
@media (min-width: 768px) {
  .crs2-how-works__title {
    font-size: 36px;
  }
}
.crs2-how-works__desc {
  font-size: 16px;
  line-height: 1.65;
  color: #425b76;
  margin: 0;
}
.crs2-how-works__desc b {
  color: #0d2034;
}
@media (min-width: 768px) {
  .crs2-how-works__desc {
    font-size: 18px;
  }
}
.crs2-how-works__example {
  background: #f4f6fa;
  border-radius: 0;
  padding: 28px 20px;
}
@media (min-width: 768px) {
  .crs2-how-works__example {
    padding: 40px;
    border-radius: 12px;
  }
}
.crs2-how-works__example-title {
  font-size: 28px;
  font-weight: 700;
  color: #0d2034;
  margin: 0 0 24px;
}
.crs2-how-works__stages {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
@media (min-width: 768px) {
  .crs2-how-works__stages {
    flex-direction: row;
    gap: 32px;
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid #cfe2f3;
  }
}
.crs2-how-works__stage {
  flex: 1;
  padding-left: 0;
  padding-bottom: 24px;
  border-bottom: 1px solid #cfe2f3;
}
@media (min-width: 768px) {
  .crs2-how-works__stage {
    padding-left: 32px;
    border-left: 1px solid #cfe2f3;
    border-bottom: none;
  }
  .crs2-how-works__stage:first-child {
    padding-left: 0;
    border-left: none;
  }
}
.crs2-how-works__stage-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
}
.crs2-how-works__stage-icon {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  display: block;
}
@media (min-width: 768px) {
  .crs2-how-works__stage-icon {
    width: 120px;
    height: 120px;
  }
}
.crs2-how-works__stage-tag {
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 6px;
  background: #cfe2f3;
  color: #09233e;
  font-size: 12px;
  font-weight: 700;
}
.crs2-how-works__stage-title {
  font-size: 24px;
  font-weight: 700;
  color: #0d2034;
  margin: 0 0 8px;
}
.crs2-how-works__stage-amount {
  font-size: 28px;
  font-weight: 700;
  color: #ff9902;
  margin: 0 0 8px;
}
.crs2-how-works__stage-lines {
  list-style: none;
  margin: 0 0 8px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.crs2-how-works__stage-lines li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: #0d2034;
}
.crs2-how-works__stage-total {
  border-bottom: 1px dashed #cfe2f3;
  font-size: 24px !important;
  font-weight: 700;
  padding-bottom: 12px;
  margin-bottom: 12px;
}
.crs2-how-works__stage-total span:last-child {
  color: #ff9902;
}
.crs2-how-works__stage-desc {
  font-size: 16px;
  line-height: 1.5;
  color: #425b76;
  margin: 0;
}
.crs2-how-works__calc {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}
@media (min-width: 768px) {
  .crs2-how-works__calc {
    flex-direction: row;
    align-items: stretch;
    gap: 60px;
    margin-top: 40px;
  }
}
.crs2-how-works__calc-text {
  flex: 1 1 60%;
}
.crs2-how-works__calc-text h4 {
  font-size: 24px;
  font-weight: 700;
  color: #0d2034;
  margin: 0 0 16px;
}
@media (min-width: 768px) {
  .crs2-how-works__calc-text h4 {
    margin: 0 0 20px;
  }
}
.crs2-how-works__calc-text p {
  font-size: 16px;
  line-height: 1.6;
  color: #425b76;
  margin: 0 0 16px;
}
.crs2-how-works__calc-text p b {
  color: #0d2034;
}
@media (min-width: 768px) {
  .crs2-how-works__calc-text p {
    margin: 0 0 20px;
  }
}
.crs2-how-works__calc-formula {
  font-size: 24px !important;
  color: #0d2034 !important;
  font-weight: 700 !important;
  margin: 0 0 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #cfe2f3;
}
.crs2-how-works__calc-formula b {
  color: #ff9902 !important;
}
@media (min-width: 768px) {
  .crs2-how-works__calc-formula {
    font-size: 32px !important;
    margin: 0 0 20px;
    padding-bottom: 20px;
  }
}
.crs2-how-works__calc-cash {
  font-size: 20px !important;
  font-weight: 700;
  color: #ff9902 !important;
  margin: 0;
}
@media (min-width: 768px) {
  .crs2-how-works__calc-cash {
    font-size: 24px !important;
  }
}
.crs2-how-works__calc-box {
  flex: 1 1 40%;
  background: #cfe2f3;
  border-radius: 12px;
  padding: 24px;
}
.crs2-how-works__calc-box h4 {
  font-size: 20px;
  font-weight: 700;
  color: #0d2034;
  margin: 0 0 16px;
}
@media (min-width: 768px) {
  .crs2-how-works__calc-box h4 {
    font-size: 24px;
    margin: 0 0 24px;
  }
}
.crs2-how-works__calc-box ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.crs2-how-works__calc-box li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #09233e;
  padding-left: 18px;
  position: relative;
}
@media (min-width: 768px) {
  .crs2-how-works__calc-box li {
    font-size: 18px;
  }
}
.crs2-how-works__calc-box li::before {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ff9902;
  flex-shrink: 0;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.crs2-people {
  background: #09233e;
  padding: 42px 20px;
}
@media (min-width: 768px) {
  .crs2-people {
    padding: 60px;
    border-radius: 8px;
  }
}
.crs2-people__title {
  font-size: 28px;
  line-height: 1.3;
  font-weight: 700;
  color: #fff;
  margin: 0 0 28px;
}
@media (min-width: 768px) {
  .crs2-people__title {
    font-size: 36px;
  }
}
.crs2-people__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 24px;
}
@media (min-width: 768px) {
  .crs2-people__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}
.crs2-people__card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
}
.crs2-people__card--extra {
  display: none;
}
@media (min-width: 768px) {
  .crs2-people__card--extra {
    display: block;
  }
}
.crs2-people--show-all .crs2-people__card--extra {
  display: block;
}
.crs2-people__card-media {
  position: relative;
  aspect-ratio: 280/190;
  background: #425b76;
  overflow: hidden;
}
.crs2-people__card-media--playing .crs2-people__card-thumb,
.crs2-people__card-media--playing .crs2-people__card-play {
  display: none;
}
.crs2-people__card-thumb {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.crs2-people__card-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.crs2-people__card-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(61, 133, 198, 0.85);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.crs2-people__card-play svg {
  width: 16px;
  height: 20px;
}
.crs2-people__card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.crs2-people__card-name {
  color: #fff;
  font-size: 20px;
}
.crs2-people__card-role {
  color: #54bbff;
  font-size: 14px;
  font-weight: 600;
}
.crs2-people__card-desc {
  color: rgba(255, 255, 255, 0.75);
  font-size: 14px;
  line-height: 1.5;
  margin: 4px 0;
}
.crs2-people__card-loc {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
}
.crs2-people__card-loc svg {
  flex-shrink: 0;
  fill: #ff9902;
  width: 20px;
  height: 20px;
}
.crs2-people__card-stats {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 12px;
  margin-top: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}
.crs2-people__card-stats b {
  color: #ff9902;
  font-size: 18px;
}
.crs2-people__load-more {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 auto;
  background: none;
  border: none;
  color: #ff9902;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
@media (min-width: 768px) {
  .crs2-people__load-more {
    display: none;
  }
}
.crs2-people--show-all .crs2-people__load-more {
  display: none;
}

.crs2-borrowers-say {
  background: #f4f6fa;
  padding: 42px 20px;
}
@media (min-width: 768px) {
  .crs2-borrowers-say {
    padding: 90px 60px;
    border-radius: 12px;
  }
}
.crs2-borrowers-say__head {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 28px;
}
@media (min-width: 768px) {
  .crs2-borrowers-say__head {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
.crs2-borrowers-say__title {
  font-size: 24px;
  font-weight: 700;
  color: #0d2034;
  margin: 0;
}
.crs2-borrowers-say__title span {
  color: #ff9902;
}
@media (min-width: 768px) {
  .crs2-borrowers-say__title {
    font-size: 34px;
  }
}
.crs2-borrowers-say__badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: #fff;
  border-radius: 10px;
  padding: 16px 24px;
  box-shadow: 0 2px 10px rgba(9, 35, 62, 0.06);
}
.crs2-borrowers-say__badge-top {
  display: flex;
  align-items: center;
  gap: 8px;
}
.crs2-borrowers-say__badge-top img {
  width: 24px;
  height: 24px;
}
.crs2-borrowers-say__badge-top b {
  font-size: 22px;
  color: #0d2034;
}
.crs2-borrowers-say__badge span:last-child {
  font-size: 16px;
  color: #09233e;
  font-weight: 700;
}
.crs2-borrowers-say__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 768px) {
  .crs2-borrowers-say__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}
.crs2-borrowers-say__card {
  display: block;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(9, 35, 62, 0.06);
  text-decoration: none;
  transition: box-shadow 0.2s ease;
}
.crs2-borrowers-say__card:hover {
  box-shadow: 0 4px 16px rgba(9, 35, 62, 0.12);
}
.crs2-borrowers-say__card p {
  font-size: 14px;
  line-height: 1.6;
  color: #425b76;
  margin: 10px 0 0;
}
.crs2-borrowers-say__card-text--clamped {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}
.crs2-borrowers-say__card-text--clamped.crs2-borrowers-say__card-text--expanded {
  display: block;
  -webkit-line-clamp: unset;
  overflow: visible;
}
.crs2-borrowers-say__read-more {
  display: block;
  margin: 6px 0 0;
  padding: 0;
  background: none;
  border: none;
  color: #3d85c6;
}
.crs2-borrowers-say__read-more[hidden] {
  display: none;
}
.crs2-borrowers-say__read-more {
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.crs2-borrowers-say__card--extra {
  display: none;
}
@media (min-width: 768px) {
  .crs2-borrowers-say__card--extra {
    display: block;
  }
}
.crs2-borrowers-say--show-all .crs2-borrowers-say__card--extra {
  display: block;
}
.crs2-borrowers-say__card-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.crs2-borrowers-say__card-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #cfe2f3;
  flex-shrink: 0;
}
.crs2-borrowers-say__card-who {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.crs2-borrowers-say__card-who b {
  font-size: 14px;
  color: #0d2034;
}
.crs2-borrowers-say__card-who span {
  font-size: 12px;
  color: #425b76;
}
.crs2-borrowers-say__card-g {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}
.crs2-borrowers-say__load-more {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 24px auto 0;
  background: none;
  border: none;
  color: #ff9902;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
@media (min-width: 768px) {
  .crs2-borrowers-say__load-more {
    display: none;
  }
}
.crs2-borrowers-say--show-all .crs2-borrowers-say__load-more {
  display: none;
}

.crs2-why-tie {
  background: #fff;
  padding: 42px 20px;
}
@media (min-width: 768px) {
  .crs2-why-tie {
    padding: 0;
  }
}
.crs2-why-tie__title {
  font-size: 28px;
  font-weight: 700;
  color: #0d2034;
  margin: 0 0 16px;
}
@media (min-width: 768px) {
  .crs2-why-tie__title {
    font-size: 36px;
    width: 50%;
  }
}
.crs2-why-tie__desc {
  font-size: 16px;
  line-height: 1.6;
  color: #425b76;
  margin: 0 0 24px;
  max-width: 600px;
}
@media (min-width: 768px) {
  .crs2-why-tie__desc {
    font-size: 18px;
    margin: 0 0 42px;
  }
}
.crs2-why-tie__table {
  overflow: hidden;
  border: 1px solid #f4f6fa;
  background: linear-gradient(to right, #f4f6fa 50%, #cfe2f3 50%);
  width: calc(100% + 40px);
  position: relative;
  left: -20px;
  padding: 0 20px;
}
@media (min-width: 768px) {
  .crs2-why-tie__table {
    background: none;
    border-radius: 12px;
    width: 100%;
    margin: 0;
    padding: 0;
    left: 0;
  }
}
.crs2-why-tie__head {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.crs2-why-tie__head span {
  padding: 16px 12px;
  font-size: 14px;
  font-weight: 700;
  color: #0d2034;
  text-align: center;
}
.crs2-why-tie__head span:first-child {
  display: none;
}
@media (min-width: 768px) {
  .crs2-why-tie__head {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .crs2-why-tie__head span {
    text-align: left;
  }
  .crs2-why-tie__head span:first-child {
    display: block;
    padding: 60px 24px 20px;
    font-size: 18px;
    background: #fff;
  }
  .crs2-why-tie__head span:nth-child(2) {
    padding: 60px 24px 20px;
    font-size: 18px;
    background: #f4f6fa;
  }
  .crs2-why-tie__head span:nth-child(3) {
    padding: 60px 24px 20px;
    font-size: 18px;
    background: #cfe2f3;
  }
}
.crs2-why-tie__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "label label" "trad tie";
  padding: 10px 12px;
  border-top: 1px solid rgba(66, 91, 118, 0.12);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
}
.crs2-why-tie__row:first-child {
  border-top: none;
}
@media (min-width: 768px) {
  .crs2-why-tie__row {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "label trad tie";
    padding: 0;
    margin-bottom: 0;
  }
}
.crs2-why-tie__row-label {
  grid-area: label;
  font-size: 14px;
  font-weight: 600;
  color: #5b5b5b;
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(66, 91, 118, 0.12);
}
@media (min-width: 768px) {
  .crs2-why-tie__row-label {
    display: flex;
    align-items: center;
    padding: 20px 24px;
    font-size: 15px;
    text-align: left;
    border-bottom: none;
    margin-bottom: 0;
  }
}
.crs2-why-tie__row-trad, .crs2-why-tie__row-tie {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #425b76;
  padding: 0 10px;
}
.crs2-why-tie__row-trad svg, .crs2-why-tie__row-tie svg {
  flex-shrink: 0;
  margin-top: 2px;
}
@media (min-width: 768px) {
  .crs2-why-tie__row-trad, .crs2-why-tie__row-tie {
    align-items: center;
    font-size: 16px;
    padding: 20px 24px;
  }
  .crs2-why-tie__row-trad svg, .crs2-why-tie__row-tie svg {
    margin-top: 0;
  }
}
.crs2-why-tie__row-trad {
  grid-area: trad;
}
@media (min-width: 768px) {
  .crs2-why-tie__row-trad {
    background: #f4f6fa;
  }
}
.crs2-why-tie__row-tie {
  grid-area: tie;
  font-weight: 600;
  color: #0d2034;
}
@media (min-width: 768px) {
  .crs2-why-tie__row-tie {
    background: #cfe2f3;
  }
}
.crs2-why-tie .crs2-cta-wrap__microcopy svg path {
  fill: #0d2034;
}

.crs2-funding-process {
  background: #fff;
  padding: 0 20px;
}
@media (min-width: 768px) {
  .crs2-funding-process {
    padding: 0;
  }
}
.crs2-funding-process__title {
  font-size: 24px;
  font-weight: 700;
  color: #0d2034;
  margin: 0 0 12px;
}
@media (min-width: 768px) {
  .crs2-funding-process__title {
    font-size: 36px;
  }
}
.crs2-funding-process__desc {
  font-size: 15px;
  line-height: 1.6;
  color: #425b76;
  margin: 0 0 28px;
  max-width: 700px;
}
.crs2-funding-process__accordion {
  background: #f4f6fa;
  width: calc(100% + 40px);
  position: relative;
  left: -20px;
  overflow: hidden;
}
@media (min-width: 768px) {
  .crs2-funding-process__accordion {
    width: 100%;
    margin: 0;
    border-radius: 12px;
    left: 0;
  }
}
.crs2-funding-process__item {
  border-top: 1px solid #ffffff;
}
.crs2-funding-process__item:first-child {
  border-top: none;
}
.crs2-funding-process__item-head {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 20px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}
@media (min-width: 768px) {
  .crs2-funding-process__item-head {
    padding: 32px 40px;
  }
}
.crs2-funding-process__item-num {
  font-size: 20px;
  color: #425b76;
  flex-shrink: 0;
}
.crs2-funding-process__item-title {
  flex: 1;
  font-size: 20px;
  font-weight: 700;
  color: #0d2034;
}
.crs2-funding-process__item-icon {
  flex-shrink: 0;
  display: flex;
}
.crs2-funding-process__item-icon svg {
  width: 16px;
  height: 16px;
}
.crs2-funding-process__item-icon svg:first-child {
  display: block;
}
.crs2-funding-process__item-icon svg:last-child {
  display: none;
}
.crs2-funding-process__item--open .crs2-funding-process__item-icon svg:first-child {
  display: none;
}
.crs2-funding-process__item--open .crs2-funding-process__item-icon svg:last-child {
  display: block;
}
.crs2-funding-process__item-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}
.crs2-funding-process__item--open .crs2-funding-process__item-panel {
  grid-template-rows: 1fr;
}
.crs2-funding-process__item-panel-inner {
  overflow: hidden;
  padding: 0 20px;
}
@media (min-width: 768px) {
  .crs2-funding-process__item-panel-inner {
    padding: 0 32px;
    display: flex;
    gap: 60px;
    justify-content: space-between;
  }
}
.crs2-funding-process__item--open .crs2-funding-process__item-panel-inner {
  padding-bottom: 24px;
}
@media (min-width: 768px) {
  .crs2-funding-process__item--open .crs2-funding-process__item-panel-inner {
    padding-bottom: 32px;
  }
}
.crs2-funding-process__item-panel p {
  font-size: 16px;
  line-height: 1.6;
  color: #425b76;
  margin: 0 0 16px;
  max-width: 640px;
}
@media (min-width: 768px) {
  .crs2-funding-process__item-panel p {
    font-size: 18px;
    margin: 0;
  }
}
.crs2-funding-process__item-media {
  display: none;
}
.crs2-funding-process__item--open .crs2-funding-process__item-media {
  display: block;
  max-width: 360px;
  aspect-ratio: 360/240;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
}
.crs2-funding-process__callout {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #cfe2f3;
  padding: 42px 20px;
  margin: 24px 0 0;
  width: calc(100% + 40px);
  position: relative;
  left: -20px;
}
@media (min-width: 768px) {
  .crs2-funding-process__callout {
    flex-direction: row;
    align-items: flex-start;
    gap: 60px;
    padding: 60px 120px;
    margin-top: 32px;
    border-radius: 12px;
    width: 100%;
    margin: 42px 0 0;
    left: 0;
  }
}
.crs2-funding-process__callout p {
  font-size: 20px;
  line-height: 1.6;
  color: #09233e;
  margin: 0;
}
@media (min-width: 768px) {
  .crs2-funding-process__callout p {
    font-size: 24px;
  }
}
.crs2-funding-process__callout p b {
  color: #0d2034;
}
.crs2-funding-process__callout-icon {
  width: 124px;
  height: 124px;
  border-radius: 10px;
  flex-shrink: 0;
}

.crs2-dont-need {
  background: #09233e;
}
@media (min-width: 768px) {
  .crs2-dont-need {
    border-radius: 12px;
  }
}
.crs2-dont-need__container {
  padding: 42px 20px;
}
@media (min-width: 768px) {
  .crs2-dont-need__container {
    padding: 60px;
  }
}
.crs2-dont-need__title {
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 16px;
}
@media (min-width: 768px) {
  .crs2-dont-need__title {
    font-size: 36px;
    max-width: 50%;
  }
}
.crs2-dont-need__desc {
  font-size: 1px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 28px;
}
@media (min-width: 768px) {
  .crs2-dont-need__desc {
    font-size: 18px;
    max-width: 50%;
  }
}
.crs2-dont-need__cols {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
}
@media (min-width: 768px) {
  .crs2-dont-need__cols {
    flex-direction: row;
  }
}
.crs2-dont-need__col {
  flex: 1;
  border-radius: 12px;
  padding: 24px;
}
.crs2-dont-need__col h3 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
@media (min-width: 768px) {
  .crs2-dont-need__col h3 {
    font-size: 24px;
  }
}
.crs2-dont-need__col h3 svg {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
}
.crs2-dont-need__col ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.crs2-dont-need__col li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
}
.crs2-dont-need__col li svg {
  flex-shrink: 0;
  margin-top: 1px;
  width: 20px;
  height: 20px;
}
.crs2-dont-need__col--matters {
  background: rgba(0, 186, 0, 0.1);
}
.crs2-dont-need__col--dont {
  background: rgba(255, 255, 255, 0.04);
}
.crs2-dont-need__col--dont li {
  color: rgba(255, 255, 255, 0.55);
}
.crs2-dont-need__callout {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 24px;
}
@media (min-width: 768px) {
  .crs2-dont-need__callout {
    flex-direction: row;
    align-items: center;
    padding: 32px;
  }
}
.crs2-dont-need__callout-icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: #425b76;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
@media (min-width: 768px) {
  .crs2-dont-need__callout-icon {
    width: 60px;
    height: 60px;
  }
}
.crs2-dont-need__callout-text {
  flex: 1;
}
.crs2-dont-need__callout-text b {
  display: block;
  color: #fff;
  font-size: 17px;
  margin-bottom: 6px;
}
.crs2-dont-need__callout-text p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}
.crs2-dont-need__callout-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.crs2-dont-need__callout-cta span {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}
.crs2-dont-need__callout-cta span svg {
  flex-shrink: 0;
}

.crs2-first-deal {
  background: #fff;
}
.crs2-first-deal__container {
  max-width: 720px;
  margin: 0 auto;
  padding: 42px 20px;
}
@media (min-width: 768px) {
  .crs2-first-deal__container {
    padding: 0;
  }
}
.crs2-first-deal__title {
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
  color: #0d2034;
  margin: 0 0 24px;
}
@media (min-width: 768px) {
  .crs2-first-deal__title {
    font-size: 32px;
  }
}
.crs2-first-deal__media {
  margin-bottom: 32px;
  position: relative;
}
.crs2-first-deal__media::before {
  content: "";
  position: absolute;
  width: calc(100% + 40px);
  height: 60%;
  background: #cfe2f3;
  left: -20px;
  bottom: 15%;
  z-index: 1;
}
@media (min-width: 768px) {
  .crs2-first-deal__media::before {
    width: 100%;
    left: 0;
  }
}
.crs2-first-deal__media img {
  position: relative;
  z-index: 2;
}
.crs2-first-deal__steps {
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.crs2-first-deal__step {
  display: flex;
  gap: 14px;
  margin: 0;
}
.crs2-first-deal__step::before {
  content: none !important;
}
.crs2-first-deal__step:not(:last-child)::after {
  content: "";
  position: absolute;
  width: 1px;
  height: calc(100% + 4px);
  background: #cfe2f3;
  left: 14px;
  top: 28px;
}
.crs2-first-deal__step-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #cfe2f3;
  color: #09233e;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.crs2-first-deal__step-content h3 {
  font-size: 20px;
  font-weight: 700;
  color: #0d2034;
  margin: 0 0 6px;
}
@media (min-width: 768px) {
  .crs2-first-deal__step-content h3 {
    font-size: 24px;
  }
}
.crs2-first-deal__step-content p {
  font-size: 16px;
  line-height: 1.6;
  color: #425b76;
  margin: 0;
}
@media (min-width: 768px) {
  .crs2-first-deal__step-content p {
    font-size: 18px;
  }
}
.crs2-first-deal__step-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  color: #3d85c6;
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
}
@media (min-width: 768px) {
  .crs2-first-deal__step-link {
    font-size: 18px;
  }
}
.crs2-first-deal__step-link svg {
  flex-shrink: 0;
}
.crs2-first-deal__loan-term {
  background: #cfe2f3;
  border-radius: 10px;
  padding: 18px 20px;
  margin-bottom: 8px;
}
.crs2-first-deal__loan-term b {
  display: block;
  color: #0d2034;
  font-size: 18px;
  margin-bottom: 6px;
}
.crs2-first-deal__loan-term p {
  font-size: 16px;
  line-height: 1.5;
  color: #09233e;
  margin: 0;
}
.crs2-first-deal .crs2-cta-wrap__microcopy svg path {
  fill: #0d2034;
}

.crs2-get-started {
  background: #09233e;
}
@media (min-width: 768px) {
  .crs2-get-started {
    padding: 60px;
    border-radius: 12px;
  }
}
.crs2-get-started__container {
  max-width: 700px;
  margin: 0 auto;
  padding: 42px 20px;
}
@media (min-width: 768px) {
  .crs2-get-started__container {
    padding: 0;
  }
}
.crs2-get-started__title {
  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
  color: #fff;
  margin: 0 0 12px;
}
@media (min-width: 768px) {
  .crs2-get-started__title {
    font-size: 32px;
  }
}
.crs2-get-started__desc {
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 28px;
}
.crs2-get-started__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.crs2-get-started__fields {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
@media (min-width: 768px) {
  .crs2-get-started__fields {
    padding: 32px;
  }
}
.crs2-get-started__row {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
@media (min-width: 768px) {
  .crs2-get-started__row {
    flex-direction: row;
  }
}
.crs2-get-started__field {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}
.crs2-get-started__field span {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
}
.crs2-get-started__field span em {
  color: #ff9902;
  font-style: normal;
}
.crs2-get-started__field input,
.crs2-get-started__field select {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ff9902;
  color: #fff !important;
  font-size: 15px;
  font-family: inherit;
  padding: 6px 0;
}
.crs2-get-started__field input::-moz-placeholder, .crs2-get-started__field select::-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
}
.crs2-get-started__field input::placeholder,
.crs2-get-started__field select::placeholder {
  color: rgba(255, 255, 255, 0.4);
}
.crs2-get-started__field input:focus,
.crs2-get-started__field select:focus {
  outline: none;
}
.crs2-get-started__field select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1L6 6L11 1' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat right center;
}
.crs2-get-started__field select option {
  color: #0d2034 !important;
}
.crs2-get-started__field select:focus {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1L6 6L11 1' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat right center;
}
.crs2-get-started__verify {
  display: none;
  flex-direction: column;
  gap: 12px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 16px;
  margin-top: -8px;
}
.crs2-get-started__verify--active {
  display: flex;
}
.crs2-get-started__verify-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.crs2-get-started__verify-head span:first-child {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
}
.crs2-get-started__verify-head span:first-child em {
  color: #ff9902;
  font-style: normal;
}
.crs2-get-started__verify-timer {
  font-size: 13px;
  font-weight: 700;
  color: #ff9902;
}
.crs2-get-started__verify-row {
  display: flex;
  gap: 10px;
}
.crs2-get-started__verify-row input {
  color: #ffffff !important;
}
.crs2-get-started__verify-digit {
  width: 44px;
  height: 44px;
  text-align: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}
.crs2-get-started__verify-digit:focus {
  outline: none;
  border-color: #ff9902;
}
.crs2-get-started__verify-digit:disabled {
  opacity: 0.6;
}
.crs2-get-started__verify-msg {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  margin: 0;
  min-height: 18px;
  color: rgba(255, 255, 255, 0.6);
}
.crs2-get-started__verify-msg--error {
  color: #ff5c5c;
}
.crs2-get-started__verify-msg--success {
  color: #02bc7d;
  font-weight: 600;
}
.crs2-get-started__verify-resend {
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: flex-start;
  background: none;
  border: none;
  color: #3d85c6;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.crs2-get-started__verify-resend:disabled {
  color: rgba(255, 255, 255, 0.35);
  cursor: default;
}
.crs2-get-started__submit-error {
  color: #ff6b6b;
  font-size: 13px;
  text-align: center;
  margin: -8px 0 0;
}
.crs2-get-started__field-error.crs2-get-started__field-error {
  font-size: 12px;
  color: #ff5c5c;
}
.crs2-get-started__phone-row {
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #ff9902;
}
.crs2-get-started__phone-row input {
  border-bottom: none !important;
}
.crs2-get-started__send-code {
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 14px;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 6px 14px;
  cursor: pointer;
}
.crs2-get-started__consent {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
}
.crs2-get-started__consent input {
  margin-top: 3px;
  flex-shrink: 0;
}
.crs2-get-started__consent span {
  font-size: 12px !important;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.6);
}
.crs2-get-started__consent span::before {
  border-radius: 2px !important;
  border: 1px solid #cfe2f3;
  width: 24px !important;
  height: 24px !important;
}
.crs2-get-started__consent span::after {
  left: 4px !important;
  top: 50% !important;
  width: 16px !important;
  height: 16px !important;
  background: #ff9902 !important;
  border-radius: 2px !important;
}
.crs2-get-started__submit {
  max-width: none;
}
.crs2-get-started__note {
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin: -8px 0 0;
}/*# sourceMappingURL=style.css.map */`, _ = (t, n, e, r = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: n,
      event_type: e,
      event_loc: r
    }), S(`Event: ${t} | ${n} | ${e} | ${r}`, "success");
  }, F = (t) => new Promise((n) => {
    const e = document.querySelector(t);
    e && n(e);
    const r = new MutationObserver(() => {
      const s = document.querySelector(t);
      s && (n(s), r.disconnect());
    });
    r.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), B = ({ name: t, dev: n }) => {
    const e = t.toLowerCase().replace(/\s/g, "_");
    _(`${e}_started`, `Experiment ${t} started`, "other", e), console.log(
      `%c EXP: ${t} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class w {
    constructor(n) {
      this.elements = n instanceof w ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, e, r) {
      return typeof e == "function" && (r = e, e = ""), this.elements.forEach((s) => {
        s.addEventListener(n, function(o) {
          var a;
          if (e !== "") {
            let d = (a = o.target) == null ? void 0 : a.closest(e);
            d && (r == null || r.call(d, o));
          } else
            r == null || r.call(s, o);
        });
      }), this;
    }
    addClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.add(n);
      }), this;
    }
    removeClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.remove(n);
      }), this;
    }
    toggleClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.toggle(n);
      }), this;
    }
    each(n) {
      for (let e of this.elements)
        n(new w(e), this.elements.indexOf(e));
      return this;
    }
    style(n, e) {
      const r = n.split("-").map((s, o) => o === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[r] = e;
      }), this;
    }
    find(n) {
      const e = this.elements.map((r) => Array.from(r.querySelectorAll(n)));
      return new w(e.flat());
    }
    attr(n, e) {
      return e ? (this.elements.forEach(function(r) {
        r.setAttribute(n, e);
      }), this) : this.elements[0].getAttribute(n);
    }
    text(n) {
      return n ? (this.elements.forEach(function(e) {
        e.textContent = n;
      }), this) : this.elements[0].textContent || "";
    }
    html(n) {
      return n ? (this.elements.forEach(function(e) {
        e.innerHTML = n;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const L = (t) => new w(t), A = (t) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, P = (t, n, e, r, s = 1e3, o = 0.5) => {
    let a, d;
    if (a = new IntersectionObserver(
      function(c) {
        c[0].isIntersecting === !0 ? d = setTimeout(() => {
          _(
            n,
            c[0].target.dataset.visible || r || "",
            "view",
            e
          ), a.disconnect();
        }, s) : (S("Element is not fully visible", "warn"), clearTimeout(d));
      },
      { threshold: [o] }
    ), typeof t == "string") {
      const c = document.querySelector(t);
      c && a.observe(c);
    } else
      a.observe(t);
  }, S = (t, n = "info") => {
    let e;
    switch (n) {
      case "info":
        e = "color: #3498db;";
        break;
      case "warn":
        e = "color: #f39c12;";
        break;
      case "error":
        e = "color: #e74c3c;";
        break;
      case "success":
        e = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${t}`, `${e} font-size: 16px; font-weight: 600`);
  }, j = (
    /* HTML */
    `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M5.5 3.5L2 7L5.5 10.5" stroke="#0D2034" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M8.5 3.5L12 7L8.5 10.5" stroke="#0D2034" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`
  ), E = (t, n) => t ? `<img src="${t}" alt="${n}" loading="lazy" />` : "", N = (t = "", n = "", e = "Before and after") => (
    /* HTML */
    `
  <div class="crs-ba-slider" data-crs-ba-slider>
    <div class="crs-ba-slider__frame">
      <div class="crs-ba-slider__image crs-ba-slider__image--before">
        ${E(t, `Before — ${e}`)}
        <span class="crs-ba-slider__label crs-ba-slider__label--before">Before</span>
      </div>
      <div class="crs-ba-slider__image crs-ba-slider__image--after" data-crs-ba-after>
        ${E(n, `After — ${e}`)}
        <span class="crs-ba-slider__label crs-ba-slider__label--after">After</span>
      </div>
      <div class="crs-ba-slider__divider" data-crs-ba-divider>
        <div class="crs-ba-slider__handle">${j}</div>
      </div>
    </div>
  </div>
`
  );
  class D {
    constructor(n) {
      this.dragging = !1, this.container = n, this.frame = n.querySelector(".crs-ba-slider__frame"), this.after = n.querySelector("[data-crs-ba-after]"), this.divider = n.querySelector("[data-crs-ba-divider]"), this.bind(), this.setPosition(50);
    }
    setPosition(n) {
      const e = Math.min(100, Math.max(0, n));
      this.after.style.clipPath = `inset(0 0 0 ${e}%)`, this.divider.style.left = `${e}%`;
    }
    getPercentFromEvent(n) {
      const e = this.frame.getBoundingClientRect();
      return (n - e.left) / e.width * 100;
    }
    bind() {
      const n = (s) => {
        this.dragging = !0, this.container.classList.add("crs-ba-slider--dragging"), this.setPosition(this.getPercentFromEvent(s));
      }, e = (s) => {
        this.dragging && this.setPosition(this.getPercentFromEvent(s));
      }, r = () => {
        this.dragging = !1, this.container.classList.remove("crs-ba-slider--dragging");
      };
      this.divider.addEventListener("mousedown", (s) => n(s.clientX)), window.addEventListener("mousemove", (s) => e(s.clientX)), window.addEventListener("mouseup", r), this.divider.addEventListener("touchstart", (s) => n(s.touches[0].clientX), { passive: !0 }), window.addEventListener("touchmove", (s) => this.dragging && e(s.touches[0].clientX), { passive: !0 }), window.addEventListener("touchend", r), this.frame.addEventListener("click", (s) => {
        this.dragging || this.setPosition(this.getPercentFromEvent(s.clientX));
      });
    }
  }
  const V = (t = document) => {
    t.querySelectorAll("[data-crs-ba-slider]").forEach((n) => new D(n));
  }, i = {
    no_commitment: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2978 3.93974C14.4994 3.67842 13.412 3.66687 10.9997 3.66687C9.7058 3.66687 8.78129 3.66736 8.05272 3.71707C7.33238 3.76622 6.87077 3.86039 6.49571 4.01575C5.37266 4.48093 4.48041 5.37319 4.01522 6.49623C3.85987 6.8713 3.7657 7.3329 3.71655 8.05324C3.66684 8.78181 3.66634 9.70633 3.66634 11.0002C3.66634 12.2941 3.66684 13.2186 3.71655 13.9472C3.7657 14.6675 3.85987 15.1291 4.01522 15.5042C4.48041 16.6273 5.37266 17.5194 6.49571 17.9847C6.87077 18.14 7.33238 18.2342 8.05272 18.2833C8.78129 18.3331 9.7058 18.3335 10.9997 18.3335C12.2935 18.3335 13.2181 18.3331 13.9467 18.2833C14.667 18.2342 15.1286 18.14 15.5036 17.9847C16.6267 17.5194 17.5189 16.6273 17.9841 15.5042C18.1395 15.1291 18.2336 14.6675 18.2828 13.9472C18.3326 13.2186 18.333 12.2941 18.333 11.0002C18.333 10.2982 18.333 9.70202 18.3246 9.18163C18.3164 8.67543 18.7202 8.25847 19.2264 8.25032C19.7326 8.24216 20.1496 8.64591 20.1577 9.1521C20.1663 9.68882 20.1663 10.2992 20.1663 10.9943V11.0339C20.1663 12.2867 20.1663 13.2736 20.1119 14.072C20.0563 14.8857 19.9412 15.5701 19.6779 16.2058C19.0266 17.778 17.7775 19.0272 16.2052 19.6785C15.5695 19.9417 14.8851 20.0569 14.0714 20.1124C13.2731 20.1669 12.2862 20.1669 11.0335 20.1669H10.9658C9.71313 20.1669 8.72621 20.1669 7.92792 20.1124C7.11424 20.0569 6.42981 19.9417 5.79413 19.6785C4.22186 19.0272 2.9727 17.778 2.32144 16.2058C2.05814 15.5701 1.94298 14.8857 1.88747 14.072C1.833 13.2736 1.83301 12.2867 1.83301 11.0339V10.9665C1.83301 9.71366 1.833 8.72673 1.88747 7.92844C1.94298 7.11476 2.05814 6.43032 2.32144 5.79464C2.9727 4.22239 4.22186 2.97323 5.79413 2.32197C6.42981 2.05866 7.11424 1.94351 7.92792 1.88799C8.72621 1.83352 9.71313 1.83352 10.9659 1.83353H10.9997C11.066 1.83353 11.1318 1.83352 11.1968 1.83352C13.3506 1.83319 14.7548 1.83297 15.8682 2.19737C16.3492 2.35484 16.6117 2.87255 16.4542 3.3537C16.2967 3.83484 15.779 4.09722 15.2978 3.93974ZM20.0414 4.57989C20.2965 5.01719 20.1488 5.57847 19.7115 5.83356L19.5084 5.95209C16.213 7.87435 13.5654 10.7352 11.9037 14.1692C11.7744 14.4362 11.524 14.6242 11.2315 14.6737C10.939 14.7232 10.6406 14.6282 10.4307 14.4185L6.75169 10.7434C6.39353 10.3856 6.39321 9.80523 6.75101 9.447C7.10879 9.08885 7.6892 9.08854 8.04737 9.44636L10.8437 12.2397C12.6729 8.97998 15.3426 6.25963 18.5845 4.36849L18.7878 4.24998C19.225 3.99489 19.7863 4.14259 20.0414 4.57989Z" fill="white"/>
		</svg>`,
    stars: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" viewBox="0 0 100 20" fill="none">
		<path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FFD015"/>
		<path d="M30 0L32.2451 6.90983H39.5106L33.6327 11.1803L35.8779 18.0902L30 13.8197L24.1221 18.0902L26.3673 11.1803L20.4894 6.90983H27.7549L30 0Z" fill="#FFD015"/>
		<path d="M50 0L52.2451 6.90983H59.5106L53.6327 11.1803L55.8779 18.0902L50 13.8197L44.1221 18.0902L46.3673 11.1803L40.4894 6.90983H47.7549L50 0Z" fill="#FFD015"/>
		<path d="M70 0L72.2451 6.90983H79.5106L73.6327 11.1803L75.8779 18.0902L70 13.8197L64.1221 18.0902L66.3673 11.1803L60.4894 6.90983H67.7549L70 0Z" fill="#FFD015"/>
		<path d="M90 0L92.2451 6.90983H99.5106L93.6327 11.1803L95.8779 18.0902L90 13.8197L84.1221 18.0902L86.3673 11.1803L80.4894 6.90983H87.7549L90 0Z" fill="#FFD015"/>
		</svg>`,
    quote: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
		<path d="M6.26712 23.6003C4.93379 22.1336 4.13379 20.5336 4.13379 17.8669C4.13379 13.2003 7.46712 9.06693 12.1338 6.93359L13.3338 8.66693C8.93379 11.0669 8.00046 14.1336 7.73379 16.1336C8.40046 15.7336 9.33379 15.6003 10.2671 15.7336C12.6671 16.0003 14.5338 17.8669 14.5338 20.4003C14.5338 21.6003 14.0005 22.8003 13.2005 23.7336C12.2671 24.6669 11.2005 25.0669 9.86712 25.0669C8.40046 25.0669 7.06712 24.4003 6.26712 23.6003ZM19.6005 23.6003C18.2671 22.1336 17.4671 20.5336 17.4671 17.8669C17.4671 13.2003 20.8005 9.06693 25.4671 6.93359L26.6671 8.66693C22.2671 11.0669 21.3338 14.1336 21.0671 16.1336C21.7338 15.7336 22.6671 15.6003 23.6005 15.7336C26.0005 16.0003 27.8671 17.8669 27.8671 20.4003C27.8671 21.6003 27.3338 22.8003 26.5338 23.7336C25.7338 24.6669 24.5338 25.0669 23.2005 25.0669C21.7338 25.0669 20.4005 24.4003 19.6005 23.6003Z" fill="#59B4E5"/>
		</svg>`,
    plus: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path d="M18.2422 8.24219H11.7578V1.75781C11.7578 0.786992 10.9708 0 10 0C9.02918 0 8.24219 0.786992 8.24219 1.75781V8.24219H1.75781C0.786992 8.24219 0 9.02918 0 10C0 10.9708 0.786992 11.7578 1.75781 11.7578H8.24219V18.2422C8.24219 19.213 9.02918 20 10 20C10.9708 20 11.7578 19.213 11.7578 18.2422V11.7578H18.2422C19.213 11.7578 20 10.9708 20 10C20 9.02918 19.213 8.24219 18.2422 8.24219Z" fill="#0D2034"/>
		</svg>`,
    minus: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path d="M18.2422 8.24207H1.75781C0.786992 8.24207 0 9.02906 0 9.99988C0 10.9707 0.786992 11.7577 1.75781 11.7577H18.2422C19.213 11.7577 20 10.9707 20 9.99988C20 9.02906 19.213 8.24207 18.2422 8.24207Z" fill="#0D2034"/>
		</svg>`,
    minus_round: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 1.24988C14.8317 1.24988 18.7501 5.16826 18.7501 9.99993C18.7501 14.8316 14.8317 18.75 10.0001 18.75C5.16838 18.75 1.25 14.8316 1.25 9.99993C1.25 5.16826 5.16838 1.24988 10.0001 1.24988ZM6.24946 9.06251H13.7506C14.2669 9.06251 14.6881 9.48365 14.6881 9.99993C14.6881 10.5162 14.2655 10.9374 13.7506 10.9374H6.24946C5.73458 10.9374 5.31204 10.5162 5.31204 9.99993C5.31204 9.48364 5.73318 9.06251 6.24946 9.06251Z" fill="#425B76"/>
		</svg>`,
    check_round_dark: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0059 1.88281C22.2535 1.88281 28.131 7.76039 28.131 15.0079C28.131 22.2554 22.2535 28.133 15.0059 28.133C7.75843 28.133 1.88086 22.2554 1.88086 15.0079C1.88086 7.76039 7.75843 1.88281 15.0059 1.88281ZM12.2804 19.271L9.06701 16.055C8.51957 15.5072 8.51946 14.614 9.06701 14.0663C9.61468 13.5188 10.5119 13.5222 11.0556 14.0663L13.321 16.3335L18.9565 10.698C19.5042 10.1503 20.3975 10.1503 20.9451 10.698C21.4927 11.2455 21.492 12.1397 20.9451 12.6866L14.3137 19.318C13.7668 19.8649 12.8726 19.8656 12.3251 19.318C12.3097 19.3026 12.2949 19.287 12.2804 19.271Z" fill="#00BA00"/>
		</svg>`,
    cross_round_dark: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
		<g clip-path="url(#clip0_69_1001)">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M24.2806 5.71907C29.4054 10.8438 29.4053 19.156 24.2806 24.2807C19.1558 29.4055 10.8437 29.4055 5.71892 24.2807C0.594163 19.156 0.59416 10.8438 5.71892 5.71907C10.8437 0.594304 19.1558 0.594304 24.2806 5.71907ZM10.0274 17.9837L13.0112 14.9999L10.0274 12.016C9.48129 11.4699 9.4798 10.5751 10.0274 10.0275C10.575 9.47986 11.4684 9.47987 12.016 10.0275L14.9998 13.0113L17.9836 10.0275C18.5312 9.47986 19.4246 9.47987 19.9722 10.0275C20.5198 10.5751 20.5183 11.4699 19.9722 12.016L16.9884 14.9999L19.9722 17.9837C20.5198 18.5313 20.5198 19.4246 19.9722 19.9723C19.4246 20.5199 18.5297 20.5184 17.9836 19.9723L14.9998 16.9884L12.016 19.9723C11.4699 20.5184 10.575 20.5199 10.0274 19.9723C9.47979 19.4246 9.4798 18.5313 10.0274 17.9837Z" fill="#425B76"/>
		</g>
		<defs><clipPath id="clip0_69_1001"><rect width="30" height="30" fill="white"/></clipPath></defs>
		</svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M0.872032 1.1538L5.74703 0.0289437C6.27738 -0.093447 6.81948 0.181381 7.03403 0.681959L9.28403 5.93182C9.38014 6.15608 9.40074 6.4055 9.34272 6.64249C9.2847 6.87948 9.15121 7.09118 8.96238 7.24568L6.12095 9.57049C7.80719 13.1646 10.7587 16.1568 14.4295 17.879L16.7543 15.0376C16.9088 14.8488 17.1205 14.7153 17.3575 14.6573C17.5945 14.5993 17.8439 14.6198 18.0682 14.716L23.318 16.966C23.8185 17.1804 24.0935 17.7225 23.971 18.253L22.8462 23.128C22.7293 23.6345 22.2775 24 21.75 24C9.74594 24 1.71661e-05 14.2719 1.71661e-05 2.24997C1.71661e-05 1.7261 0.36161 1.27155 0.872032 1.1538Z" fill="#FF9902"/>
		</svg>`,
    link_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path d="M11.5555 16H2.66665C1.95431 16 1.28467 15.7226 0.781023 15.2189C0.277378 14.7152 0 14.0456 0 13.3333V4.44444C0 3.73213 0.277409 3.06249 0.781054 2.55884C1.2847 2.0552 1.95434 1.77779 2.66668 1.77779H6.22223C6.71317 1.77779 7.11112 2.17574 7.11112 2.66668C7.11112 3.15763 6.71317 3.55558 6.22223 3.55558H2.66665C2.4292 3.55558 2.20601 3.64805 2.03815 3.81591C1.87029 3.98377 1.77779 4.20699 1.77779 4.44444V13.3333C1.77779 13.5708 1.87026 13.794 2.03815 13.9619C2.20601 14.1297 2.4292 14.2222 2.66665 14.2222H11.5555C11.7929 14.2222 12.0161 14.1297 12.184 13.9618C12.3519 13.794 12.4444 13.5707 12.4444 13.3333V9.77777C12.4444 9.28683 12.8423 8.88891 13.3333 8.88891C13.8242 8.88891 14.2222 9.28686 14.2222 9.77777V13.3333C14.2222 14.0456 13.9448 14.7152 13.4411 15.2189C12.9374 15.7226 12.2678 16 11.5555 16ZM6.22223 10.6666C5.99472 10.6666 5.76724 10.5799 5.5937 10.4063C5.24658 10.0592 5.24658 9.49633 5.5937 9.14921L12.9651 1.77779H9.77777C9.28683 1.77779 8.88891 1.37984 8.88891 0.888894C8.88891 0.397948 9.28683 0 9.77777 0H15.1111C15.234 0 15.3511 0.0249649 15.4576 0.0700819C15.557 0.112125 15.6504 0.173047 15.732 0.252878L15.7321 0.252941C15.8268 0.349633 15.8878 0.442972 15.9298 0.542335C15.9749 0.64884 15.9999 0.765901 15.9999 0.888863V6.2222C15.9999 6.71314 15.6019 7.11109 15.111 7.11109C14.62 7.11109 14.2221 6.71314 14.2221 6.2222V3.03488L6.8506 10.4063C6.67719 10.5799 6.44971 10.6666 6.22223 10.6666Z" fill="#3D85C6"/>
		</svg>`,
    eyebrow_mark: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
		<rect x="2" y="5.75" width="10" height="2.5" fill="#FF9902" transform="rotate(45 7 7)"/>
		</svg>`,
    play: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
		<path d="M18.5 10.2679C19.8333 11.0378 19.8333 12.9622 18.5 13.7321L3.5 22.3923C2.16667 23.1622 0.5 22.2 0.5 20.6603L0.5 3.33975C0.5 1.80005 2.16667 0.837775 3.5 1.60762L18.5 10.2679Z" fill="white"/>
		</svg>`,
    pin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C4.68629 0 2 2.68629 2 6C2 10.5 8 16 8 16C8 16 14 10.5 14 6C14 2.68629 11.3137 0 8 0ZM8 8.5C6.61929 8.5 5.5 7.38071 5.5 6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6C10.5 7.38071 9.38071 8.5 8 8.5Z"/>
		</svg>`,
    menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
		</svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
		</svg>`,
    refresh: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path d="M14 8C14 11.3137 11.3137 14 8 14C5.75384 14 3.79624 12.7658 2.76941 10.9412M2 8C2 4.68629 4.68629 2 8 2C10.2462 2 12.2038 3.23417 13.2306 5.05882M2 5V2M2 5H5M14 11V14M14 11H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`,
    verify_check: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
		<g clip-path="url(#clip0_verify_check)">
		<path d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM12.87 6.84L8.73 12.24C8.55 12.42 8.28 12.6 8.01 12.6C7.74 12.6 7.47 12.51 7.29 12.24L5.13 9.45C4.86 9.09 4.86 8.46 5.31 8.19C5.76 7.92 6.3 7.92 6.57 8.37L8.01 10.26L11.43 5.76C11.7 5.4 12.33 5.31 12.69 5.58C13.14 5.85 13.14 6.39 12.87 6.84Z" fill="#02BC7D"/>
		</g>
		<defs><clipPath id="clip0_verify_check"><rect width="18" height="18" fill="white"/></clipPath></defs>
		</svg>`,
    verify_resend: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="none">
		<path d="M12.2841 4.65524C11.3914 3.94094 10.3076 3.375 9 3.375C5.8934 3.375 3.375 5.89339 3.375 9C3.375 12.1066 5.8934 14.625 9 14.625C11.4412 14.625 13.521 13.0691 14.2985 10.8942C14.4379 10.5041 14.8313 10.2426 15.2365 10.3285L15.9701 10.484C16.3754 10.5699 16.6377 10.9697 16.5134 11.3648C15.509 14.5584 12.5262 16.875 9 16.875C4.65076 16.875 1.125 13.3492 1.125 9C1.125 4.65076 4.65076 1.125 9 1.125C11.0876 1.125 12.7137 2.07635 13.8834 3.05595L15.2197 1.71967C15.4342 1.50517 15.7568 1.441 16.037 1.55709C16.3173 1.67317 16.5 1.94665 16.5 2.25V6.375C16.5 6.78921 16.1642 7.125 15.75 7.125H11.625C11.3217 7.125 11.0482 6.94227 10.9321 6.66201C10.8161 6.38176 10.8802 6.05917 11.0947 5.84467L12.2841 4.65524Z" fill="currentColor"/>
		</svg>`,
    property: `<svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124" fill="none">
		<path d="M33.7776 122.905C33.5521 122.905 33.3326 122.832 33.1527 122.696C32.9728 122.56 32.8423 122.368 32.7812 122.151C32.72 121.934 32.7316 121.703 32.8142 121.493C32.8967 121.283 33.0456 121.106 33.2382 120.989L40.7609 116.39L29.7187 122.76C29.4833 122.9 29.2018 122.941 28.9361 122.874C28.6704 122.807 28.4423 122.637 28.302 122.401C28.1617 122.166 28.1206 121.884 28.1879 121.619C28.2551 121.353 28.4251 121.125 28.6606 120.985L43.6666 111.807L24.6657 122.76C24.4308 122.89 24.1546 122.923 23.8955 122.853C23.6364 122.783 23.4149 122.615 23.2776 122.384C23.1404 122.153 23.0983 121.878 23.1603 121.617C23.2222 121.356 23.3834 121.129 23.6096 120.985L37.3592 112.6L19.9413 122.661C19.7056 122.801 19.4239 122.841 19.1582 122.774C18.8926 122.706 18.6646 122.536 18.5246 122.3C18.3845 122.064 18.3439 121.783 18.4115 121.517C18.4791 121.251 18.6495 121.023 18.8852 120.883L43.6542 105.706L16.5809 121.34C16.346 121.47 16.0698 121.503 15.8107 121.433C15.5516 121.363 15.3301 121.195 15.1928 120.964C15.0556 120.733 15.0135 120.458 15.0755 120.197C15.1374 119.936 15.2986 119.709 15.5248 119.565L38.44 105.58L14.5494 119.371C14.3142 119.511 14.0327 119.553 13.7669 119.487C13.501 119.42 13.2725 119.25 13.1316 119.015C12.9908 118.78 12.9491 118.499 13.0157 118.233C13.0824 117.967 13.2519 117.738 13.4871 117.597L57.3645 90.3133L13.0944 115.872C12.86 115.999 12.5854 116.03 12.3283 115.96C12.0711 115.889 11.8512 115.722 11.7145 115.493C11.5778 115.264 11.535 114.991 11.595 114.731C11.655 114.471 11.8131 114.245 12.0363 114.099L48.823 91.452L12.9766 112.143C12.7412 112.278 12.4625 112.314 12.2006 112.245C11.9386 112.175 11.7144 112.006 11.5762 111.773C11.438 111.54 11.3969 111.262 11.4617 110.999C11.5264 110.735 11.692 110.508 11.9226 110.366L42.3791 91.7228L12.9766 108.707C12.7412 108.841 12.4625 108.877 12.2006 108.808C11.9386 108.738 11.7144 108.569 11.5762 108.336C11.438 108.103 11.3969 107.825 11.4617 107.562C11.5264 107.299 11.692 107.072 11.9226 106.929L42.4432 88.2466L12.9746 105.251C12.7398 105.383 12.4627 105.419 12.2023 105.35C11.9418 105.28 11.7187 105.112 11.5805 104.881C11.4422 104.65 11.3997 104.374 11.4621 104.112C11.5245 103.85 11.6867 103.622 11.9144 103.478L55.4818 76.3798L12.9725 100.921C12.7376 101.051 12.4614 101.085 12.2023 101.015C11.9432 100.944 11.7217 100.776 11.5844 100.545C11.4472 100.315 11.4051 100.04 11.4671 99.7786C11.529 99.5175 11.6902 99.2907 11.9164 99.1462L39.1158 82.4765L12.9704 97.5632C12.736 97.6851 12.4639 97.7126 12.2098 97.6401C11.9558 97.5676 11.7391 97.4005 11.6045 97.1733C11.4698 96.946 11.4273 96.6757 11.4857 96.4181C11.5441 96.1604 11.699 95.9349 11.9185 95.7879L29.2372 85.2334L12.9704 94.6326C12.7362 94.7561 12.4636 94.7849 12.2087 94.7132C11.9539 94.6415 11.7363 94.4747 11.6008 94.2472C11.4654 94.0198 11.4224 93.749 11.4807 93.4908C11.539 93.2325 11.6943 93.0066 11.9144 92.8594L38.8926 76.26L12.9684 91.2185C12.7342 91.3497 12.4582 91.3846 12.1988 91.3159C11.9394 91.2473 11.7168 91.0803 11.5783 90.8505C11.4397 90.6206 11.396 90.3459 11.4564 90.0844C11.5168 89.8229 11.6766 89.5952 11.9019 89.4494L52.357 63.9715L12.9663 86.7049C12.7315 86.8287 12.4581 86.8574 12.2027 86.785C11.9474 86.7127 11.7296 86.5449 11.5946 86.3164C11.4597 86.0878 11.4178 85.8161 11.4777 85.5576C11.5376 85.299 11.6947 85.0734 11.9164 84.9276L12.7824 84.4026C12.5409 84.4877 12.2765 84.4802 12.0404 84.3815C11.8042 84.2829 11.613 84.1 11.5039 83.8685C11.3949 83.6369 11.3756 83.3731 11.4499 83.1282C11.5242 82.8832 11.6867 82.6746 11.9061 82.5426L38.4814 66.0527L12.9642 80.7839C12.7301 80.9151 12.4541 80.95 12.1947 80.8813C11.9352 80.8127 11.7127 80.6457 11.5741 80.4159C11.4356 80.186 11.3919 79.9113 11.4523 79.6498C11.5127 79.3883 11.6725 79.1606 11.8978 79.0148L45.0037 58.1415L12.9704 76.6382C12.736 76.7653 12.4614 76.7968 12.2043 76.7262C11.9471 76.6556 11.7272 76.4883 11.5905 76.2593C11.4538 76.0303 11.411 75.7573 11.471 75.4974C11.531 75.2375 11.6891 75.0109 11.9123 74.8649L27.0734 65.5236L12.9622 73.6642C12.728 73.7954 12.452 73.8304 12.1926 73.7617C11.9332 73.693 11.7106 73.5261 11.5721 73.2962C11.4335 73.0664 11.3898 72.7916 11.4502 72.5301C11.5106 72.2687 11.6704 72.0409 11.8958 71.8951L39.5891 54.438L12.9601 69.814C12.7272 69.9387 12.4553 69.9695 12.2004 69.8999C11.9455 69.8304 11.7269 69.6658 11.5896 69.4401C11.4523 69.2144 11.4066 68.9447 11.462 68.6863C11.5174 68.428 11.6697 68.2007 11.8875 68.0512L43.8547 47.556L12.9601 65.3934C12.7244 65.5337 12.4426 65.5747 12.1767 65.5072C11.9109 65.4398 11.6827 65.2695 11.5424 65.0338C11.402 64.7981 11.3611 64.5163 11.4285 64.2505C11.496 63.9846 11.6663 63.7564 11.9019 63.6161L12.7596 63.0932C12.5205 63.1668 12.2628 63.151 12.0343 63.049C11.8059 62.9469 11.6223 62.7654 11.5175 62.5382C11.4127 62.311 11.394 62.0535 11.4647 61.8135C11.5354 61.5735 11.6907 61.3673 11.9019 61.2332L15.1384 59.2389L12.958 60.4975C12.7239 60.6287 12.4479 60.6636 12.1885 60.5949C11.929 60.5263 11.7065 60.3593 11.5679 60.1295C11.4294 59.8996 11.3857 59.6249 11.4461 59.3634C11.5065 59.1019 11.6663 58.8742 11.8916 58.7284L26.4162 49.6351L12.958 57.3954C12.7252 57.5278 12.4501 57.5646 12.1907 57.4981C11.9313 57.4316 11.7078 57.2669 11.5674 57.0389C11.427 56.8109 11.3806 56.5372 11.438 56.2756C11.4954 56.0141 11.6521 55.785 11.8751 55.6367L40.238 37.0966L12.958 52.8488C12.724 52.9825 12.4471 53.0195 12.1862 52.9519C11.9253 52.8843 11.7012 52.7175 11.5615 52.487C11.4219 52.2565 11.3778 51.9806 11.4387 51.7181C11.4996 51.4556 11.6606 51.2272 11.8875 51.0817L25.4014 42.5423L12.9539 49.7281C12.7214 49.8662 12.444 49.9076 12.1813 49.8436C11.9186 49.7795 11.6915 49.615 11.5487 49.3854C11.4059 49.1558 11.3588 48.8793 11.4175 48.6153C11.4762 48.3514 11.636 48.1209 11.8627 47.9735L38.6281 30.1319L24.0581 38.5433C23.8276 38.6721 23.5565 38.7078 23.3005 38.643C23.0445 38.5782 22.8231 38.4179 22.6816 38.1949C22.5401 37.972 22.4893 37.7033 22.5397 37.4441C22.59 37.1849 22.7377 36.9548 22.9524 36.8011L56.42 13.6647C56.4148 13.4785 56.4601 13.2943 56.5511 13.1317C56.642 12.969 56.7753 12.834 56.9367 12.7409L61.9566 9.84761C62.187 9.72181 62.4566 9.68839 62.7107 9.75413C62.9648 9.81987 63.1844 9.97984 63.3248 10.2016C63.4653 10.4233 63.5161 10.6902 63.4669 10.948C63.4178 11.2058 63.2724 11.4353 63.0602 11.5898L45.0182 24.0663L65.41 12.2863C65.6425 12.1482 65.9199 12.1067 66.1826 12.1708C66.4453 12.2349 66.6724 12.3994 66.8152 12.629C66.958 12.8586 67.0051 13.1351 66.9464 13.399C66.8877 13.663 66.7279 13.8934 66.5012 14.0409L39.7379 31.8803L69.1156 14.9171C69.3495 14.7834 69.6265 14.7464 69.8874 14.814C70.1483 14.8816 70.3724 15.0484 70.5121 15.2789C70.6517 15.5094 70.6958 15.7853 70.6349 16.0478C70.574 16.3103 70.4129 16.5387 70.1861 16.6841L56.6846 25.2133L71.546 16.6366C71.7788 16.5043 72.0539 16.4675 72.3133 16.534C72.5727 16.6005 72.7961 16.7651 72.9366 16.9931C73.077 17.2212 73.1234 17.4948 73.066 17.7564C73.0086 18.018 72.8519 18.247 72.6289 18.3953L44.2639 36.9354L75.0862 19.1414C75.3203 19.0102 75.5963 18.9753 75.8557 19.044C76.1152 19.1126 76.3377 19.2796 76.4762 19.5094C76.6148 19.7393 76.6585 20.014 76.5981 20.2755C76.5377 20.537 76.3779 20.7647 76.1526 20.9105L61.5991 30.0265L77.5 20.8485C77.7345 20.7214 78.009 20.6898 78.2662 20.7604C78.5234 20.831 78.7433 20.9983 78.8799 21.2273C79.0166 21.4564 79.0594 21.7294 78.9995 21.9892C78.9395 22.2491 78.7814 22.4757 78.5582 22.6217L75.3858 24.5767L79.451 22.229C79.5675 22.1595 79.6966 22.1137 79.8309 22.0941C79.9652 22.0745 80.102 22.0816 80.2336 22.1149C80.3651 22.1482 80.4888 22.2071 80.5976 22.2882C80.7064 22.3693 80.7982 22.471 80.8677 22.5876C80.9371 22.7041 80.983 22.8333 81.0026 22.9675C81.0221 23.1018 81.0151 23.2386 80.9818 23.3702C80.9485 23.5017 80.8896 23.6255 80.8085 23.7342C80.7274 23.843 80.6257 23.9348 80.5091 24.0043L80.4202 24.058L81.311 23.5455C81.5439 23.4208 81.8157 23.39 82.0706 23.4596C82.3255 23.5291 82.5441 23.6937 82.6814 23.9194C82.8188 24.1451 82.8644 24.4148 82.809 24.6732C82.7536 24.9315 82.6014 25.1588 82.3836 25.3083L50.4081 45.8076L84.752 25.98C84.9861 25.8488 85.2621 25.8139 85.5215 25.8826C85.7809 25.9512 86.0035 26.1182 86.142 26.348C86.2806 26.5779 86.3243 26.8526 86.2639 27.1141C86.2035 27.3756 86.0437 27.6033 85.8184 27.7491L58.125 45.2103L87.7466 28.1066C87.9813 27.9744 88.2584 27.939 88.5188 28.0082C88.7793 28.0773 89.0024 28.2454 89.1406 28.4766C89.2789 28.7079 89.3214 28.984 89.259 29.2461C89.1966 29.5082 89.0344 29.7356 88.8068 29.8798L73.6333 39.2356L90.0674 29.7496C90.3011 29.6211 90.5755 29.5879 90.8331 29.657C91.0907 29.7261 91.3116 29.8922 91.4496 30.1204C91.5876 30.3486 91.632 30.6214 91.5735 30.8816C91.5151 31.1418 91.3583 31.3694 91.1359 31.5166L58.0279 52.3899L93.2914 32.0333C93.5262 31.901 93.8033 31.8657 94.0637 31.9348C94.3241 32.0039 94.5472 32.172 94.6855 32.4033C94.8238 32.6346 94.8663 32.9107 94.8039 33.1728C94.7415 33.4349 94.5792 33.6623 94.3516 33.8065L67.7867 50.2861L96.0401 33.9739C96.2756 33.8427 96.5531 33.8087 96.8133 33.8793C97.0736 33.9498 97.2959 34.1193 97.4329 34.3515C97.5699 34.5837 97.6108 34.8603 97.5467 35.1222C97.4826 35.3841 97.3187 35.6106 97.09 35.7533L96.9474 35.8401L97.9001 35.2903C98.0162 35.2202 98.1451 35.1736 98.2793 35.1532C98.4134 35.1329 98.5503 35.1391 98.682 35.1717C98.8138 35.2042 98.9378 35.2623 99.0471 35.3428C99.1563 35.4233 99.2487 35.5245 99.3189 35.6406C99.389 35.7568 99.4356 35.8856 99.456 36.0198C99.4763 36.154 99.4701 36.2908 99.4375 36.4226C99.405 36.5543 99.3469 36.6784 99.2664 36.7876C99.1859 36.8969 99.0847 36.9893 98.9686 37.0594L58.5322 62.5269L101.411 37.7703C101.647 37.63 101.928 37.589 102.194 37.6562C102.46 37.7235 102.688 37.8935 102.828 38.1289C102.968 38.3643 103.009 38.6458 102.942 38.9115C102.875 39.1772 102.705 39.4053 102.469 39.5456L75.5181 56.1348L104.067 39.6531C104.302 39.5277 104.576 39.4976 104.832 39.5691C105.088 39.6406 105.307 39.8081 105.443 40.0369C105.578 40.2656 105.621 40.5379 105.561 40.7971C105.501 41.0563 105.343 41.2824 105.121 41.4283L87.761 52.0035L106.361 41.2713C106.478 41.2018 106.607 41.156 106.741 41.1364C106.875 41.1168 107.012 41.1239 107.144 41.1572C107.275 41.1905 107.399 41.2493 107.508 41.3304C107.616 41.4115 107.708 41.5133 107.778 41.6298C107.847 41.7464 107.893 41.8755 107.913 42.0098C107.932 42.1441 107.925 42.2809 107.892 42.4125C107.859 42.544 107.8 42.6677 107.719 42.7765C107.637 42.8853 107.536 42.9771 107.419 43.0466L80.2425 59.6997L108.969 43.1147C109.204 42.9825 109.481 42.9472 109.741 43.0163C110.002 43.0854 110.225 43.2535 110.363 43.4848C110.502 43.716 110.544 43.9921 110.482 44.2542C110.419 44.5164 110.257 44.7438 110.029 44.8879L66.4392 71.9985L111.021 46.2602C111.256 46.1348 111.53 46.1047 111.786 46.1762C112.042 46.2477 112.261 46.4153 112.397 46.644C112.533 46.8728 112.575 47.1451 112.515 47.4042C112.455 47.6634 112.298 47.8895 112.075 48.0355L81.6189 66.681L111.021 49.7053C111.256 49.58 111.53 49.5499 111.786 49.6214C112.042 49.6929 112.261 49.8604 112.397 50.0892C112.533 50.3179 112.575 50.5902 112.515 50.8494C112.455 51.1086 112.298 51.3347 112.075 51.4806L81.5796 70.1488L111.021 53.1525C111.256 53.0291 111.528 53.0003 111.783 53.072C112.038 53.1437 112.255 53.3105 112.391 53.5379C112.526 53.7654 112.569 54.0362 112.511 54.2944C112.453 54.5526 112.298 54.7786 112.077 54.9257L75.3135 77.562L111.021 56.949C111.255 56.824 111.529 56.7938 111.784 56.8647C112.04 56.9356 112.259 57.1021 112.395 57.3298C112.531 57.5574 112.575 57.8288 112.516 58.0876C112.458 58.3464 112.302 58.5729 112.082 58.7201L68.1608 86.0332L111.021 61.289C111.257 61.1549 111.535 61.1185 111.797 61.1879C112.059 61.2572 112.284 61.4267 112.422 61.6597C112.56 61.8928 112.601 62.1708 112.536 62.4339C112.472 62.697 112.306 62.9241 112.075 63.0664L89.2366 77.004L111.021 64.4262C111.256 64.2963 111.532 64.263 111.792 64.3332C112.051 64.4033 112.272 64.5716 112.409 64.8022C112.547 65.0329 112.589 65.3079 112.527 65.5691C112.465 65.8302 112.304 66.057 112.077 66.2015L87.2774 81.4039L111.021 67.6916C111.256 67.5662 111.53 67.5361 111.786 67.6076C112.042 67.6791 112.261 67.8466 112.397 68.0754C112.533 68.3041 112.575 68.5764 112.515 68.8356C112.455 69.0948 112.298 69.3209 112.075 69.4668L98.3238 77.8534L111.021 70.5229C111.256 70.393 111.532 70.3596 111.792 70.4298C112.051 70.5 112.272 70.6682 112.409 70.8989C112.547 71.1296 112.589 71.4046 112.527 71.6658C112.465 71.9269 112.304 72.1537 112.077 72.2982L97.0569 81.5031L111.021 73.4431C111.257 73.3089 111.535 73.2726 111.797 73.342C112.059 73.4113 112.284 73.5807 112.422 73.8138C112.56 74.0469 112.601 74.3249 112.536 74.588C112.472 74.8511 112.306 75.0782 112.075 75.2204L104.598 79.7898L111.021 76.0822C111.255 75.951 111.531 75.9161 111.791 75.9848C112.05 76.0535 112.273 76.2204 112.411 76.4502C112.55 76.6801 112.594 76.9548 112.533 77.2163C112.473 77.4778 112.313 77.7055 112.088 77.8513L86.4859 93.9713L111.021 79.8022C111.256 79.6732 111.531 79.64 111.789 79.7097C112.047 79.7794 112.268 79.9465 112.406 80.1759C112.544 80.4052 112.587 80.679 112.527 80.9397C112.467 81.2003 112.308 81.4274 112.084 81.5734L97.1478 90.894L111.021 82.8857C111.254 82.7557 111.527 82.7204 111.785 82.7873C112.043 82.8542 112.265 83.018 112.405 83.2445C112.545 83.4711 112.592 83.743 112.536 84.0034C112.481 84.2638 112.327 84.4927 112.106 84.6424L83.3797 103.585L111.021 87.6266C111.254 87.4966 111.527 87.4614 111.785 87.5282C112.043 87.5951 112.265 87.7589 112.405 87.9855C112.545 88.212 112.592 88.4839 112.536 88.7443C112.481 89.0048 112.327 89.2337 112.106 89.3833L90.6544 103.523L111.021 91.76C111.253 91.6255 111.529 91.5865 111.789 91.6512C112.049 91.716 112.274 91.8795 112.416 92.1071C112.558 92.3347 112.606 92.6085 112.55 92.8708C112.494 93.1331 112.337 93.3632 112.115 93.5125L93.7068 105.892L111.021 95.8974C111.252 95.7667 111.523 95.7295 111.78 95.7933C112.037 95.8572 112.26 96.0173 112.402 96.2405C112.545 96.4638 112.596 96.7332 112.546 96.9932C112.495 97.2532 112.347 97.4838 112.131 97.6376L95.447 109.364L111.021 100.372C111.254 100.242 111.527 100.207 111.785 100.273C112.043 100.34 112.265 100.504 112.405 100.731C112.545 100.957 112.592 101.229 112.536 101.489C112.481 101.75 112.327 101.979 112.106 102.128L109.814 103.641L111.021 102.945C111.252 102.816 111.524 102.781 111.78 102.847C112.036 102.912 112.257 103.074 112.398 103.297C112.539 103.521 112.589 103.79 112.537 104.049C112.485 104.309 112.337 104.538 112.121 104.691L107.907 107.584L111.021 105.784C111.248 105.654 111.516 105.615 111.771 105.674C112.026 105.734 112.249 105.888 112.394 106.106C112.54 106.323 112.598 106.588 112.556 106.846C112.514 107.105 112.375 107.337 112.168 107.498L104.639 113.324L111.021 109.641C111.244 109.514 111.506 109.475 111.756 109.531C112.006 109.587 112.226 109.733 112.374 109.942C112.522 110.151 112.588 110.408 112.557 110.662C112.527 110.917 112.403 111.151 112.21 111.319L107.444 115.405L110.986 113.359C111.202 113.234 111.455 113.192 111.699 113.239C111.943 113.286 112.163 113.42 112.316 113.616C112.47 113.812 112.547 114.056 112.535 114.305C112.523 114.553 112.421 114.789 112.249 114.969L109.808 117.517C110.043 117.494 110.279 117.552 110.476 117.681C110.673 117.81 110.82 118.003 110.893 118.228C110.965 118.452 110.959 118.695 110.874 118.915C110.79 119.136 110.632 119.32 110.428 119.439L104.78 122.702C104.565 122.825 104.313 122.866 104.069 122.819C103.826 122.771 103.608 122.638 103.455 122.443C103.302 122.248 103.224 122.005 103.235 121.757C103.247 121.509 103.347 121.274 103.517 121.094L105.735 118.78L98.8363 122.76C98.6135 122.886 98.3517 122.925 98.1017 122.87C97.8517 122.814 97.6313 122.667 97.4833 122.458C97.3353 122.249 97.2701 121.993 97.3006 121.738C97.331 121.484 97.4548 121.25 97.648 121.082L102.401 116.998L92.4296 122.76C92.2029 122.889 91.9356 122.928 91.6814 122.869C91.4273 122.809 91.2051 122.655 91.0596 122.439C90.914 122.222 90.8559 121.958 90.8969 121.7C90.9379 121.442 91.075 121.21 91.2805 121.049L98.8115 115.223L85.7522 122.76C85.5217 122.884 85.2526 122.916 84.9993 122.85C84.746 122.783 84.5275 122.623 84.3879 122.401C84.2482 122.18 84.1979 121.913 84.2471 121.656C84.2962 121.399 84.4412 121.17 84.6527 121.016L88.8667 118.124L80.8356 122.76C80.6037 122.885 80.3329 122.916 80.0785 122.848C79.8241 122.78 79.6053 122.618 79.4668 122.394C79.3283 122.17 79.2805 121.901 79.3333 121.643C79.386 121.385 79.5353 121.157 79.7506 121.005L82.0364 119.495L76.3799 122.76C76.15 122.886 75.8807 122.92 75.6266 122.855C75.3726 122.791 75.1526 122.631 75.0115 122.41C74.8704 122.189 74.8185 121.923 74.8666 121.665C74.9146 121.407 75.0588 121.177 75.2701 121.022L91.9543 109.296L68.6299 122.76C68.3984 122.888 68.1264 122.923 67.8702 122.856C67.614 122.79 67.393 122.628 67.2528 122.403C67.1126 122.179 67.0639 121.909 67.1167 121.65C67.1695 121.39 67.3198 121.161 67.5366 121.009L85.9444 108.626L61.4627 122.76C61.2308 122.885 60.96 122.916 60.7056 122.848C60.4512 122.78 60.2324 122.618 60.0939 122.394C59.9553 122.17 59.9076 121.901 59.9603 121.643C60.0131 121.385 60.1624 121.157 60.3777 121.005L81.84 106.867L54.2934 122.76C54.0614 122.888 53.7889 122.922 53.5325 122.855C53.2761 122.788 53.0552 122.625 52.9156 122.4C52.776 122.174 52.7283 121.904 52.7824 121.644C52.8366 121.385 52.9883 121.156 53.2064 121.005L81.933 102.068L46.0867 122.76C45.8528 122.887 45.5791 122.918 45.3225 122.848C45.0659 122.778 44.8462 122.612 44.7091 122.384C44.5719 122.156 44.528 121.884 44.5863 121.625C44.6447 121.365 44.8009 121.138 45.0224 120.991L59.9664 111.664L40.7464 122.76C40.5127 122.888 40.2384 122.922 39.9808 122.853C39.7232 122.783 39.5023 122.617 39.3642 122.389C39.2262 122.161 39.1818 121.888 39.2403 121.628C39.2988 121.368 39.4556 121.14 39.678 120.993L65.2695 104.873L34.2943 122.76C34.1378 122.853 33.9596 122.903 33.7776 122.905Z" fill="#CCE2ED"/>
		<path d="M24.862 28.8961C24.6452 28.8961 24.4338 28.8278 24.2578 28.701C24.0819 28.5742 23.9503 28.3953 23.8817 28.1895C23.8132 27.9838 23.8111 27.7617 23.8757 27.5546C23.9404 27.3476 24.0685 27.1662 24.242 27.0361L25.3663 26.1826C25.142 26.3062 24.8797 26.3421 24.6304 26.2833C24.3811 26.2245 24.1625 26.0752 24.017 25.8643C23.8716 25.6535 23.8096 25.3961 23.8432 25.1422C23.8767 24.8882 24.0034 24.6558 24.1986 24.49L29.5534 19.9867L25.3787 22.3985C25.1513 22.5254 24.8844 22.5617 24.6314 22.5003C24.3784 22.4389 24.1578 22.2842 24.0139 22.0672C23.87 21.8502 23.8134 21.5868 23.8553 21.3298C23.8972 21.0728 24.0346 20.8411 24.24 20.6811L25.1617 19.9826C24.9372 20.0515 24.6959 20.0418 24.4775 19.9552C24.2592 19.8686 24.0769 19.7102 23.9606 19.5061C23.8444 19.302 23.8011 19.0644 23.838 18.8324C23.8749 18.6005 23.9897 18.388 24.1635 18.23L28.6316 14.1463L25.3787 16.0228C25.1808 16.137 24.9507 16.1823 24.7243 16.1518C24.4979 16.1213 24.288 16.0166 24.1274 15.8541C23.9668 15.6917 23.8646 15.4806 23.8367 15.2538C23.8089 15.0271 23.8569 14.7975 23.9734 14.601L25.9884 11.1972H25.9719C25.7357 11.3207 25.4609 11.3482 25.205 11.2739C24.949 11.1997 24.7316 11.0294 24.5982 10.7987C24.4649 10.5679 24.4258 10.2946 24.4892 10.0357C24.5526 9.77682 24.7136 9.55247 24.9385 9.40948L28.3671 7.43995C28.5631 7.32633 28.7913 7.28112 29.0158 7.31143C29.2403 7.34173 29.4483 7.44584 29.6071 7.60735C29.7677 7.76966 29.87 7.98057 29.898 8.20714C29.926 8.43372 29.8783 8.6632 29.7621 8.85975L27.7492 12.2636L35.7927 7.61975C36.0127 7.49548 36.2706 7.45613 36.5177 7.50916C36.7647 7.56218 36.9838 7.7039 37.1335 7.90751C37.2831 8.11112 37.353 8.36251 37.3298 8.61414C37.3067 8.86576 37.1921 9.10019 37.0078 9.27308L32.5521 13.361L38.3822 9.99435C38.6097 9.86487 38.8778 9.82654 39.1324 9.8871C39.3871 9.94767 39.6093 10.1026 39.7541 10.3206C39.8989 10.5387 39.9556 10.8035 39.9127 11.0617C39.8698 11.32 39.7305 11.5523 39.523 11.7118L38.7563 12.2904C38.9833 12.178 39.2437 12.1529 39.488 12.2198C39.7323 12.2868 39.9435 12.4411 40.0815 12.6536C40.2194 12.866 40.2746 13.1218 40.2364 13.3722C40.1982 13.6226 40.0693 13.8503 39.8743 14.012L34.5134 18.5173L38.7046 16.0972C38.9321 15.9677 39.2002 15.9294 39.4548 15.99C39.7095 16.0505 39.9317 16.2055 40.0765 16.4235C40.2213 16.6415 40.278 16.9064 40.2351 17.1646C40.1922 17.4228 40.0529 17.6551 39.8454 17.8146L31.3721 24.2378C31.4743 24.4708 31.487 24.7334 31.4076 24.9751C31.3283 25.2169 31.1626 25.4209 30.9422 25.5481L25.3787 28.7576C25.222 28.8492 25.0436 28.897 24.862 28.8961Z" fill="#30649D"/>
		<path d="M116.736 51.0178C116.544 51.0178 116.356 50.9643 116.192 50.8634C116.029 50.7626 115.897 50.6182 115.811 50.4466C115.726 50.2749 115.689 50.0828 115.706 49.8916C115.724 49.7005 115.794 49.518 115.909 49.3644L117.757 46.9423L114.185 49.009C113.974 49.1308 113.726 49.1737 113.486 49.1303C113.246 49.0869 113.029 48.9598 112.873 48.7717C112.718 48.5835 112.634 48.3464 112.636 48.1024C112.639 47.8583 112.728 47.6231 112.887 47.4383L114.617 45.4398L111.573 47.1986C111.359 47.3214 111.109 47.3638 110.867 47.3183C110.625 47.2727 110.407 47.1422 110.253 46.9502C110.098 46.7582 110.018 46.5173 110.025 46.2711C110.033 46.0249 110.128 45.7894 110.294 45.6072L111.74 44.0366L109.163 45.5225C108.947 45.6457 108.694 45.6868 108.45 45.6383C108.206 45.5897 107.988 45.4549 107.835 45.2584C107.683 45.0619 107.606 44.817 107.62 44.5687C107.633 44.3203 107.736 44.0852 107.909 43.9064L108.87 42.9226L106.981 44.0118C106.765 44.1365 106.51 44.1787 106.265 44.1306C106.02 44.0824 105.801 43.9471 105.648 43.7498C105.495 43.5524 105.419 43.3063 105.433 43.057C105.447 42.8076 105.552 42.572 105.726 42.3936L106.619 41.4842L104.825 42.5176C104.611 42.6497 104.356 42.699 104.108 42.6563C103.86 42.6136 103.636 42.4818 103.478 42.2857C103.32 42.0896 103.24 41.8427 103.251 41.5912C103.262 41.3397 103.365 41.1011 103.54 40.92L104.838 39.5271L102.469 40.8952C102.266 41.013 102.029 41.0581 101.797 41.023C101.565 40.988 101.351 40.8748 101.192 40.7023C101.033 40.5297 100.937 40.308 100.92 40.0738C100.904 39.8395 100.968 39.6066 101.101 39.4134L103.461 35.9931L99.0594 38.5351C98.8511 38.656 98.607 38.7002 98.3695 38.6603C98.132 38.6204 97.9159 38.4987 97.7585 38.3164C97.6012 38.134 97.5125 37.9024 97.5077 37.6616C97.503 37.4208 97.5825 37.1859 97.7326 36.9975L99.7993 34.3935L96.133 36.5098C95.919 36.6326 95.6682 36.6747 95.4258 36.6287C95.1834 36.5826 94.9655 36.4514 94.8115 36.2586C94.6575 36.0659 94.5775 35.8245 94.586 35.5779C94.5945 35.3313 94.6909 35.096 94.8579 34.9143L96.2012 33.4676L93.7667 34.873C93.5465 35.0092 93.2831 35.0577 93.0288 35.0091C92.7745 34.9604 92.5478 34.8181 92.3934 34.6102C92.2391 34.4023 92.1684 34.144 92.1954 33.8865C92.2223 33.629 92.345 33.391 92.5391 33.2196L92.6754 33.0936L91.8715 33.5544C91.6672 33.672 91.4289 33.7163 91.196 33.6798C90.9631 33.6433 90.7497 33.5283 90.5912 33.3538C90.4327 33.1794 90.3386 32.956 90.3245 32.7207C90.3104 32.4854 90.3772 32.2524 90.5137 32.0602L92.8263 28.8238L88.5793 31.277C88.3708 31.3965 88.1272 31.4396 87.8903 31.3989C87.6534 31.3582 87.4382 31.2361 87.2816 31.0538C87.125 30.8715 87.0368 30.6404 87.0323 30.4001C87.0277 30.1598 87.1071 29.9254 87.2567 29.7373L89.3109 27.1684L85.6757 29.264C85.471 29.3812 85.2324 29.4249 84.9995 29.3878C84.7666 29.3507 84.5534 29.2351 84.3953 29.0601C84.2373 28.8851 84.1438 28.6613 84.1304 28.4258C84.1171 28.1904 84.1847 27.9574 84.322 27.7657L86.6243 24.5934L82.4351 27.0114C82.2351 27.1281 82.0016 27.1742 81.7721 27.1423C81.5427 27.1105 81.3307 27.0024 81.17 26.8356C81.0093 26.6687 80.9094 26.4527 80.8862 26.2223C80.863 25.9918 80.918 25.7602 81.0422 25.5647L83.4933 21.667L78.7048 24.428C78.4846 24.5642 78.2213 24.6128 77.967 24.5641C77.7127 24.5155 77.4859 24.3731 77.3316 24.1652C77.1772 23.9574 77.1065 23.6991 77.1335 23.4416C77.1605 23.1841 77.2831 22.9461 77.4772 22.7747L77.6074 22.6528L76.8138 23.1116C76.6081 23.2343 76.3659 23.2809 76.1294 23.2431C75.8929 23.2053 75.6772 23.0856 75.5201 22.9049C75.3622 22.7248 75.2717 22.4955 75.2642 22.2561C75.2566 22.0168 75.3325 21.7822 75.4787 21.5926L77.6342 18.8067L73.7799 21.0222C73.5621 21.1478 73.3059 21.1897 73.0593 21.14C72.8128 21.0902 72.5929 20.9523 72.4408 20.752C72.2887 20.5517 72.2148 20.3029 72.2331 20.052C72.2513 19.8012 72.3604 19.5657 72.5399 19.3895L73.0566 18.8852L71.767 19.6272C71.5612 19.7466 71.3205 19.7913 71.0855 19.7537C70.8505 19.7162 70.6357 19.5987 70.4774 19.4211C70.319 19.2436 70.2267 19.0168 70.2162 18.7791C70.2057 18.5414 70.2775 18.3073 70.4195 18.1164L72.6598 15.1053L68.6133 17.4427C68.397 17.566 68.1434 17.607 67.8993 17.5582C67.6552 17.5095 67.4369 17.3742 67.2845 17.1773C67.1321 16.9805 67.056 16.7352 67.07 16.4867C67.084 16.2381 67.1873 16.003 67.3609 15.8245L68.2454 14.9255L66.4619 15.9588C66.2577 16.0777 66.019 16.1231 65.7855 16.0874C65.552 16.0517 65.3378 15.937 65.1786 15.7625C65.0193 15.5881 64.9246 15.3643 64.9103 15.1285C64.896 14.8927 64.9629 14.6592 65.0999 14.4667L67.4477 11.1166L62.901 13.7351C62.6648 13.8586 62.3901 13.8862 62.1341 13.8119C61.8781 13.7376 61.6608 13.5674 61.5274 13.3366C61.394 13.1059 61.3549 12.8325 61.4183 12.5736C61.4818 12.3148 61.6427 12.0904 61.8677 11.9474L70.4526 6.99777C70.6561 6.88145 70.8931 6.83779 71.1247 6.87394C71.3563 6.91009 71.5687 7.0239 71.7271 7.19671C71.8855 7.36951 71.9804 7.59103 71.9963 7.82489C72.0122 8.05876 71.9481 8.29107 71.8145 8.4837L69.4688 11.8338L73.8089 9.32484C74.0252 9.20159 74.2787 9.16057 74.5228 9.20933C74.7669 9.25808 74.9852 9.39333 75.1376 9.5902C75.29 9.78707 75.3661 10.0323 75.3521 10.2809C75.3381 10.5294 75.2348 10.7646 75.0613 10.943L74.1746 11.8441L75.9582 10.8108C76.1642 10.6916 76.405 10.6471 76.64 10.685C76.875 10.7228 77.0897 10.8406 77.2479 11.0184C77.4061 11.1963 77.498 11.4233 77.5081 11.6611C77.5183 11.8989 77.446 12.1329 77.3036 12.3236L75.0675 15.3388L79.1202 13.0014C79.338 12.8758 79.5942 12.8339 79.8408 12.8837C80.0873 12.9334 80.3072 13.0713 80.4593 13.2716C80.6114 13.4719 80.6853 13.7207 80.667 13.9716C80.6488 14.2224 80.5397 14.458 80.3602 14.6341L79.8477 15.1342L81.1331 14.3944C81.3395 14.2822 81.5779 14.2436 81.8091 14.2851C82.0403 14.3265 82.2504 14.4455 82.405 14.6224C82.5595 14.7993 82.6491 15.0236 82.6591 15.2582C82.6691 15.4929 82.5988 15.724 82.4599 15.9134L80.3106 18.7158L84.1608 16.492C84.381 16.3581 84.6433 16.3113 84.8962 16.3608C85.1491 16.4103 85.3744 16.5526 85.5278 16.7596C85.6813 16.9666 85.7519 17.2235 85.7257 17.4799C85.6995 17.7363 85.5785 17.9736 85.3863 18.1454L85.2623 18.2632L86.0518 17.8085C86.2519 17.6918 86.4853 17.6456 86.7148 17.6775C86.9442 17.7094 87.1562 17.8174 87.3169 17.9843C87.4776 18.1512 87.5775 18.3672 87.6007 18.5976C87.6239 18.8281 87.5689 19.0597 87.4447 19.2552L84.9999 23.1467L89.778 20.3877C89.9829 20.2685 90.2225 20.2234 90.4567 20.2599C90.6909 20.2963 90.9054 20.4122 91.0643 20.5881C91.2232 20.764 91.3169 20.9891 91.3295 21.2258C91.3421 21.4625 91.273 21.6963 91.1337 21.8881L88.8397 25.0584L93.0309 22.6404C93.2394 22.5208 93.4831 22.4777 93.7199 22.5185C93.9568 22.5592 94.172 22.6812 94.3287 22.8635C94.4853 23.0458 94.5734 23.277 94.578 23.5173C94.5825 23.7576 94.5032 23.9919 94.3536 24.18L92.3014 26.7468L95.9346 24.6512C96.1389 24.5336 96.3772 24.4894 96.6101 24.5259C96.843 24.5624 97.0564 24.6774 97.2149 24.8518C97.3734 25.0263 97.4675 25.2497 97.4816 25.485C97.4957 25.7203 97.429 25.9533 97.2924 26.1454L94.9798 29.3818L99.2247 26.9308C99.4449 26.7969 99.7072 26.7501 99.9601 26.7996C100.213 26.8491 100.438 26.9913 100.592 27.1983C100.745 27.4054 100.816 27.6623 100.79 27.9186C100.763 28.175 100.642 28.4124 100.45 28.5841L100.314 28.7143L101.118 28.2514C101.332 28.1286 101.583 28.0865 101.826 28.1328C102.068 28.1792 102.286 28.3108 102.44 28.5038C102.594 28.6969 102.673 28.9387 102.664 29.1854C102.655 29.4322 102.558 29.6675 102.391 29.8489L101.052 31.2956L103.482 29.8923C103.69 29.7725 103.934 29.7289 104.17 29.7691C104.407 29.8092 104.622 29.9306 104.779 30.1123C104.936 30.294 105.025 30.5247 105.031 30.7648C105.036 31.0048 104.958 31.2393 104.809 31.4278L102.742 34.0339L106.408 31.9197C106.611 31.8027 106.848 31.7582 107.08 31.7934C107.311 31.8286 107.524 31.9415 107.683 32.1135C107.842 32.2855 107.938 32.5065 107.955 32.7401C107.972 32.9738 107.909 33.2062 107.777 33.3994L105.416 36.8218L109.821 34.2798C110.035 34.157 110.286 34.1151 110.529 34.1617C110.772 34.2082 110.989 34.3402 111.143 34.5337C111.297 34.7271 111.376 34.9692 111.367 35.2161C111.357 35.463 111.26 35.6983 111.092 35.8794L109.794 37.2703L112.164 35.9022C112.38 35.7789 112.634 35.7379 112.878 35.7867C113.122 35.8354 113.341 35.9707 113.493 36.1675C113.645 36.3644 113.721 36.6097 113.707 36.8582C113.693 37.1068 113.59 37.3419 113.417 37.5204L112.52 38.4338L114.318 37.4005C114.534 37.2743 114.788 37.2308 115.034 37.2781C115.28 37.3254 115.5 37.4604 115.654 37.6579C115.808 37.8554 115.885 38.102 115.87 38.3519C115.856 38.6018 115.752 38.838 115.576 39.0166L114.615 40.0004L116.5 38.9112C116.714 38.787 116.965 38.7436 117.208 38.7889C117.451 38.8341 117.67 38.965 117.825 39.1578C117.98 39.3506 118.06 39.5926 118.052 39.8397C118.043 40.0868 117.947 40.3227 117.779 40.5046L116.345 42.0732L118.918 40.5873C119.13 40.4655 119.377 40.4225 119.617 40.466C119.858 40.5094 120.075 40.6364 120.23 40.8246C120.386 41.0127 120.469 41.2498 120.467 41.4939C120.464 41.738 120.375 41.9732 120.216 42.158L118.484 44.1544L121.206 42.5858C121.413 42.4661 121.654 42.4218 121.89 42.4603C122.126 42.4989 122.341 42.618 122.499 42.7973C122.657 42.9766 122.748 43.2051 122.756 43.4438C122.764 43.6826 122.69 43.9169 122.545 44.1068L119.844 47.6408C119.992 47.7302 120.114 47.8562 120.199 48.0066C120.336 48.2435 120.373 48.5249 120.302 48.7891C120.232 49.0533 120.06 49.2787 119.823 49.4161L117.256 50.8979C117.097 50.9838 116.917 51.0252 116.736 51.0178Z" fill="#3B7AC8"/>
		<path d="M4.7719 49.6393C4.54735 49.6398 4.32876 49.5671 4.14921 49.4322C3.96967 49.2973 3.83894 49.1076 3.77682 48.8918C3.7147 48.6761 3.72456 48.4459 3.80492 48.2362C3.88527 48.0265 4.03174 47.8487 4.22217 47.7297L22.2352 36.4271L3.65383 47.1531C3.41986 47.2868 3.1429 47.3238 2.88202 47.2563C2.62113 47.1887 2.39697 47.0219 2.25733 46.7914C2.11769 46.5609 2.07361 46.285 2.13451 46.0225C2.1954 45.7599 2.35645 45.5316 2.5833 45.3861L23.5476 32.1346L2.9739 44.02C2.73945 44.1472 2.46493 44.1787 2.20775 44.1081C1.95057 44.0375 1.73065 43.8702 1.59398 43.6412C1.45732 43.4122 1.41449 43.1392 1.47447 42.8793C1.53444 42.6194 1.69256 42.3928 1.91577 42.2468L22.4522 29.5534C22.328 29.4714 22.223 29.3635 22.1443 29.2372C22.002 29.0101 21.9534 28.7366 22.009 28.4743C22.0645 28.2121 22.2197 27.9818 22.4419 27.8318L54.6054 6.18144C54.5877 5.98504 54.6265 5.78766 54.7173 5.61262C54.8082 5.43757 54.9472 5.29217 55.118 5.19358L61.9008 1.27724C62.1328 1.14273 62.4081 1.10375 62.6684 1.16852C62.9288 1.2333 63.1537 1.39676 63.2957 1.62435C63.4376 1.85195 63.4855 2.12583 63.4292 2.3881C63.373 2.65038 63.2169 2.88048 62.994 3.02978L48.548 12.7431L65.0256 3.23644C65.261 3.09585 65.5426 3.05454 65.8085 3.12159C66.0744 3.18864 66.3027 3.35856 66.4433 3.59398C66.5839 3.82939 66.6252 4.11102 66.5582 4.37689C66.4911 4.64277 66.3212 4.87112 66.0858 5.01171L61.7458 7.69838L67.0364 4.64178C67.271 4.49982 67.5524 4.45686 67.8187 4.52236C68.0849 4.58786 68.3143 4.75645 68.4562 4.99104C68.5982 5.22564 68.6411 5.50702 68.5756 5.77328C68.5101 6.03954 68.3416 6.26888 68.107 6.41084L47.1324 19.6664L69.8285 6.56378C70.0626 6.43259 70.3386 6.39764 70.598 6.46633C70.8575 6.53501 71.08 6.70193 71.2186 6.93178C71.3571 7.16163 71.4008 7.43636 71.3404 7.69785C71.28 7.95934 71.1202 8.18707 70.8949 8.33285L34.596 31.1096C34.6516 31.1677 34.7002 31.2322 34.7406 31.3018C34.8777 31.5391 34.9148 31.8212 34.8439 32.0859C34.7729 32.3506 34.5998 32.5763 34.3624 32.7133L5.28857 49.4988C5.13168 49.5902 4.95348 49.6387 4.7719 49.6393Z" fill="#3B7AC8"/>
		<path d="M59.367 42.1062C59.1396 42.1062 58.9185 42.0311 58.738 41.8927C58.5575 41.7542 58.4278 41.56 58.369 41.3403C58.3101 41.1206 58.3253 40.8876 58.4124 40.6775C58.4994 40.4673 58.6534 40.2918 58.8504 40.178L61.8243 38.4606C61.9419 38.3917 62.0719 38.3467 62.2069 38.3283C62.3419 38.3098 62.4793 38.3182 62.611 38.353C62.7428 38.3879 62.8663 38.4484 62.9746 38.5312C63.0828 38.614 63.1736 38.7174 63.2418 38.8354C63.3099 38.9534 63.354 39.0837 63.3716 39.2189C63.3892 39.354 63.3798 39.4913 63.3441 39.6228C63.3084 39.7543 63.2471 39.8775 63.1636 39.9852C63.0801 40.0929 62.9761 40.183 62.8576 40.2504L59.8837 41.9678C59.7266 42.0585 59.5484 42.1062 59.367 42.1062Z" fill="#B1CBDD"/>
		<path d="M62.3926 110.482C62.1757 110.482 61.9643 110.414 61.7884 110.287C61.6125 110.16 61.4809 109.981 61.4123 109.775C61.3437 109.57 61.3416 109.348 61.4063 109.14C61.4709 108.933 61.5991 108.752 61.7726 108.622L69.2994 102.85L58.7594 108.932C58.5301 109.064 58.259 109.102 58.002 109.04C57.745 108.978 57.5217 108.82 57.3779 108.598C57.2341 108.376 57.1808 108.107 57.2291 107.847C57.2773 107.587 57.4234 107.356 57.6372 107.2L69.5495 98.5841L55.1799 106.884C54.9501 107.015 54.6788 107.053 54.4218 106.99C54.1648 106.927 53.9418 106.768 53.7987 106.545C53.6556 106.323 53.6034 106.054 53.6527 105.794C53.7021 105.534 53.8493 105.303 54.0639 105.148L70.7316 93.279L51.5116 104.375C51.2806 104.509 51.0065 104.549 50.7469 104.486C50.4872 104.422 50.2622 104.261 50.1191 104.035C49.976 103.809 49.926 103.537 49.9794 103.275C50.0329 103.013 50.1858 102.782 50.4059 102.631L69.3697 89.4598L48.2339 101.663C48.0016 101.796 47.7272 101.833 47.4683 101.767C47.2093 101.701 46.9859 101.537 46.845 101.31C46.7041 101.083 46.6566 100.81 46.7125 100.549C46.7684 100.288 46.9233 100.058 47.1447 99.9089L62.126 89.9889L45.8448 99.3881C45.6102 99.53 45.3288 99.573 45.0626 99.5075C44.7963 99.442 44.567 99.2734 44.425 99.0388C44.283 98.8042 44.2401 98.5228 44.3056 98.2566C44.3711 97.9903 44.5397 97.761 44.7743 97.619L47.2067 96.0814L44.3279 97.7347C44.096 97.8647 43.8229 97.9003 43.5654 97.8342C43.308 97.768 43.0859 97.6052 42.9454 97.3795C42.8049 97.1539 42.7567 96.8827 42.811 96.6225C42.8652 96.3623 43.0177 96.1329 43.2367 95.9822L64.6081 81.6602L41.9202 94.7649C41.6869 94.8914 41.4139 94.9232 41.1578 94.8538C40.9016 94.7845 40.682 94.6192 40.5444 94.3923C40.4067 94.1654 40.3617 93.8943 40.4185 93.6351C40.4754 93.3759 40.6297 93.1485 40.8497 93L50.8275 86.6367L40.4322 92.6301C40.1983 92.7568 39.9246 92.7884 39.668 92.7184C39.4114 92.6484 39.1917 92.4821 39.0546 92.2542C38.9175 92.0263 38.8735 91.7543 38.9319 91.4948C38.9902 91.2353 39.1464 91.0083 39.3679 90.861L40.7587 89.993L39.3121 90.8197C39.0802 90.9497 38.8071 90.9853 38.5497 90.9191C38.2922 90.853 38.0701 90.6901 37.9296 90.4645C37.7891 90.2388 37.7409 89.9677 37.7952 89.7074C37.8494 89.4472 38.0019 89.2179 38.2209 89.0671L63.3598 72.3333L37.4376 87.3043C37.2046 87.4344 36.9303 87.4694 36.6721 87.4019C36.4139 87.3344 36.1919 87.1696 36.0525 86.942C35.9131 86.7145 35.8671 86.4418 35.9242 86.1811C35.9813 85.9204 36.137 85.6919 36.3588 85.5435L56.8767 72.23L36.1439 84.1981C35.9116 84.3244 35.6398 84.357 35.3843 84.289C35.1288 84.221 34.9091 84.0577 34.7704 83.8327C34.6316 83.6076 34.5844 83.3379 34.6385 83.0791C34.6925 82.8203 34.8437 82.5921 35.0609 82.4414L55.988 68.7187L35.0527 80.8067C34.8184 80.9489 34.5371 80.9922 34.2709 80.9271C34.0046 80.862 33.7751 80.6938 33.6329 80.4595C33.4906 80.2251 33.4473 79.9439 33.5124 79.6777C33.5775 79.4114 33.7458 79.1819 33.9801 79.0397L41.8747 74.0156L34.4513 78.3019C34.2188 78.44 33.9414 78.4814 33.6787 78.4174C33.416 78.3533 33.1889 78.1888 33.0461 77.9592C32.9033 77.7295 32.8562 77.4531 32.9149 77.1891C32.9736 76.9252 33.1334 76.6947 33.3601 76.5473L51.0859 64.6867L33.8933 74.6067C33.6629 74.7373 33.3912 74.7746 33.1342 74.7108C32.8772 74.6469 32.6545 74.4868 32.5121 74.2635C32.3697 74.0403 32.3185 73.7708 32.369 73.5109C32.4195 73.2509 32.5678 73.0203 32.7835 72.8665L52.0035 59.4787L33.6453 70.0786C33.4154 70.2097 33.1441 70.2476 32.8871 70.1846C32.6301 70.1216 32.4071 69.9624 32.2641 69.7398C32.121 69.5172 32.0687 69.2483 32.1181 68.9883C32.1674 68.7284 32.3146 68.4973 32.5293 68.3426L50.0277 55.8847L33.6453 65.3418C33.4134 65.4667 33.1426 65.4983 32.8882 65.4302C32.6338 65.3621 32.415 65.1995 32.2764 64.9755C32.1379 64.7515 32.0902 64.4831 32.1429 64.225C32.1957 63.967 32.345 63.7389 32.5603 63.5872L36.9519 60.6939L33.6453 62.6014C33.413 62.7335 33.1386 62.7705 32.8797 62.7047C32.6207 62.6388 32.3973 62.4752 32.2564 62.2482C32.1155 62.0212 32.068 61.7484 32.1239 61.4871C32.1798 61.2258 32.3347 60.9963 32.5561 60.8468L37.1214 57.8047L33.6453 59.8114C33.4311 59.9342 33.18 59.9762 32.9375 59.9299C32.695 59.8836 32.4771 59.752 32.3232 59.5589C32.1694 59.3658 32.0897 59.1241 32.0987 58.8773C32.1077 58.6306 32.2047 58.3952 32.3722 58.2139L36.8672 53.3696L33.6453 55.2296C33.4452 55.3473 33.2113 55.3943 32.9813 55.3628C32.7513 55.3314 32.5385 55.2234 32.3774 55.0563C32.2162 54.8892 32.1161 54.6727 32.093 54.4416C32.0699 54.2106 32.1253 53.9786 32.2503 53.7829L33.1947 52.2557C33.0337 52.2385 32.879 52.1832 32.7436 52.0945C32.6081 52.0057 32.4957 51.886 32.4156 51.7452C32.2784 51.5081 32.241 51.2263 32.3115 50.9616C32.382 50.6969 32.5548 50.471 32.7917 50.3337L35.4929 48.7754C35.6912 48.6584 35.9233 48.6119 36.1514 48.6434C36.3795 48.6749 36.5902 48.7826 36.7494 48.949C36.9098 49.114 37.0105 49.3278 37.0356 49.5566C37.0607 49.7853 37.0087 50.0159 36.8879 50.2117L36.1645 51.3794L41.7735 48.1533C41.9874 48.0319 42.2377 47.9908 42.4792 48.0374C42.7207 48.084 42.9377 48.2153 43.0911 48.4076C43.2446 48.5998 43.3244 48.8406 43.3162 49.0864C43.308 49.3323 43.2124 49.5671 43.0465 49.7488L38.5536 54.591L63.8992 39.959C64.1315 39.8269 64.4059 39.7899 64.6648 39.8557C64.9238 39.9216 65.1471 40.0852 65.2881 40.3122C65.429 40.5392 65.4765 40.812 65.4206 41.0733C65.3647 41.3346 65.2098 41.5641 64.9883 41.7136L60.4417 44.7475L65.7199 41.6888C65.9518 41.5639 66.2226 41.5323 66.477 41.6004C66.7314 41.6685 66.9503 41.8311 67.0888 42.0551C67.2273 42.2791 67.275 42.5475 67.2223 42.8056C67.1695 43.0636 67.0203 43.2917 66.8049 43.4434L62.3926 46.3595L67.7866 43.2429C68.0164 43.1118 68.2878 43.0739 68.5448 43.1369C68.8017 43.1999 69.0247 43.3591 69.1678 43.5817C69.3109 43.8043 69.3632 44.0733 69.3138 44.3332C69.2645 44.5932 69.1173 44.8243 68.9026 44.9789L51.4 57.4389L72.015 45.539C72.2457 45.4066 72.5185 45.3683 72.7767 45.4319C73.0349 45.4956 73.2586 45.6564 73.4013 45.8808C73.544 46.1052 73.5947 46.376 73.5428 46.6369C73.4909 46.8977 73.3405 47.1285 73.1227 47.2812L53.9027 60.6649L77.0969 47.2853C77.3294 47.1472 77.6068 47.1058 77.8695 47.1698C78.1322 47.2339 78.3593 47.3984 78.5021 47.628C78.645 47.8577 78.6921 48.1341 78.6333 48.3981C78.5746 48.662 78.4148 48.8925 78.1881 49.0399L60.4768 60.8902L82.2698 48.3083C82.5031 48.1819 82.7761 48.1501 83.0323 48.2194C83.2884 48.2888 83.508 48.454 83.6457 48.6809C83.7833 48.9078 83.8283 49.179 83.7715 49.4382C83.7147 49.6974 83.5603 49.9248 83.3403 50.0733L75.4684 55.0849L86.4899 48.7217C86.7227 48.5893 86.9978 48.5525 87.2573 48.619C87.5167 48.6855 87.7401 48.8501 87.8805 49.0782C88.0209 49.3062 88.0673 49.5799 88.01 49.8414C87.9526 50.103 87.7959 50.3321 87.5729 50.4804L66.6272 64.2134L90.2492 50.5734C90.4822 50.4432 90.7565 50.4082 91.0147 50.4758C91.2729 50.5433 91.4949 50.7081 91.6343 50.9356C91.7738 51.1632 91.8197 51.4359 91.7626 51.6966C91.7055 51.9573 91.5498 52.1858 91.328 52.3342L70.8122 65.6477L90.3546 54.3657C90.5863 54.2392 90.8576 54.2062 91.1129 54.2734C91.3682 54.3407 91.5881 54.503 91.7274 54.7273C91.8668 54.9515 91.915 55.2205 91.8623 55.4792C91.8095 55.7379 91.6598 55.9665 91.4437 56.1183L66.2965 72.8583L90.3546 58.9703C90.5892 58.835 90.8676 58.7972 91.1298 58.8651C91.3919 58.933 91.617 59.1011 91.7565 59.3332C91.896 59.5653 91.9388 59.8429 91.8756 60.1063C91.8125 60.3697 91.6485 60.5977 91.4189 60.7414L90.0777 61.5784L90.3546 61.4213C90.5879 61.2949 90.8609 61.2631 91.1171 61.3324C91.3732 61.4018 91.5928 61.567 91.7305 61.7939C91.8681 62.0208 91.9131 62.292 91.8563 62.5512C91.7995 62.8104 91.6451 63.0378 91.4251 63.1863L81.4266 69.5661L90.3546 64.418C90.5865 64.288 90.8596 64.2524 91.117 64.3185C91.3745 64.3847 91.5966 64.5475 91.7371 64.7732C91.8776 64.9989 91.9257 65.27 91.8715 65.5302C91.8172 65.7905 91.6648 66.0198 91.4458 66.1705L70.0785 80.4884L90.3525 68.7849C90.5871 68.6432 90.8684 68.6005 91.1345 68.6662C91.4005 68.7319 91.6296 68.9006 91.7713 69.1352C91.913 69.3698 91.9557 69.651 91.89 69.9171C91.8243 70.1832 91.6556 70.4122 91.421 70.5539L89.0051 72.0812L90.2451 71.362C90.4777 71.2271 90.7538 71.1882 91.0146 71.2536C91.2755 71.319 91.5006 71.4835 91.6421 71.7122C91.7836 71.9409 91.8304 72.2157 91.7725 72.4783C91.7146 72.7409 91.5567 72.9707 91.3321 73.1187L76.3385 83.049L89.7718 75.2928C90.0025 75.1604 90.2753 75.1221 90.5335 75.1857C90.7917 75.2494 91.0154 75.4102 91.1581 75.6346C91.3008 75.859 91.3515 76.1298 91.2996 76.3907C91.2477 76.6515 91.0973 76.8823 90.8795 77.035L71.9199 90.2121L88.4843 80.6496C88.7141 80.5185 88.9855 80.4806 89.2424 80.5436C89.4994 80.6066 89.7224 80.7658 89.8655 80.9884C90.0086 81.211 90.0608 81.4799 90.0115 81.7399C89.9621 81.9998 89.815 82.2309 89.6003 82.3856L72.9409 94.24L85.9609 86.7235C86.1902 86.5919 86.4613 86.5532 86.7183 86.6154C86.9753 86.6776 87.1986 86.8359 87.3424 87.0578C87.4862 87.2797 87.5394 87.5483 87.4912 87.8083C87.443 88.0683 87.2969 88.2999 87.0831 88.4554L75.1605 97.0775L81.9391 93.1633C82.1661 93.033 82.4341 92.9937 82.689 93.0533C82.9439 93.1129 83.1666 93.2671 83.3122 93.4846C83.4578 93.7021 83.5155 93.9668 83.4735 94.2251C83.4316 94.4835 83.2931 94.7163 83.0861 94.8765L73.9597 101.887C74.1645 101.929 74.3515 102.033 74.4961 102.184C74.6406 102.335 74.7359 102.527 74.7692 102.733C74.8026 102.94 74.7725 103.152 74.683 103.341C74.5934 103.53 74.4486 103.687 74.2677 103.792L62.901 110.35C62.7461 110.438 62.5707 110.483 62.3926 110.482Z" fill="#B1CBDD"/>
		<path d="M61.6031 101.395C61.3886 101.395 61.1792 101.329 61.004 101.205C60.8288 101.082 60.6965 100.906 60.6254 100.704C60.5543 100.502 60.5479 100.282 60.6072 100.076C60.6665 99.8698 60.7885 99.6871 60.9562 99.5534L64.8023 96.4762L59.245 99.6836C59.016 99.8139 58.7459 99.8518 58.4899 99.7895C58.2338 99.7272 58.0113 99.5695 57.8677 99.3486C57.7241 99.1276 57.6703 98.8602 57.7174 98.601C57.7644 98.3417 57.9087 98.1102 58.1208 97.9538L62.7067 94.6141L56.8332 98.0096C56.6047 98.1405 56.3348 98.1793 56.0787 98.1178C55.8226 98.0564 55.5996 97.8995 55.4552 97.6792C55.3109 97.4589 55.2562 97.1918 55.3022 96.9325C55.3482 96.6732 55.4915 96.4412 55.7028 96.284L65.6228 88.9742L53.975 95.697C53.7438 95.8292 53.4706 95.867 53.2122 95.8026C52.9538 95.7381 52.7303 95.5764 52.5882 95.3512C52.4462 95.126 52.3965 94.8546 52.4497 94.5937C52.5028 94.3328 52.6547 94.1024 52.8735 93.9507L60.0862 88.9907L51.8732 93.7192C51.6413 93.8566 51.3649 93.898 51.1029 93.8344C50.8409 93.7709 50.6142 93.6075 50.471 93.3791C50.3278 93.1507 50.2795 92.8754 50.3365 92.6119C50.3934 92.3484 50.5511 92.1176 50.7758 91.9688L57.8769 87.1658L50.0236 91.7001C49.7916 91.8375 49.5152 91.8789 49.2532 91.8153C48.9913 91.7518 48.7645 91.5884 48.6213 91.36C48.4781 91.1316 48.4299 90.8563 48.4868 90.5928C48.5438 90.3293 48.7014 90.0985 48.9262 89.9496L58.4928 83.4603L48.2235 89.3875C47.9937 89.5186 47.7223 89.5566 47.4653 89.4935C47.2084 89.4305 46.9854 89.2713 46.8423 89.0487C46.6992 88.8261 46.6469 88.5572 46.6963 88.2972C46.7456 88.0373 46.8928 87.8062 47.1075 87.6515L64.5543 75.1978L46.0018 85.9072C45.7716 86.0347 45.5015 86.0695 45.2465 86.0047C44.9915 85.9398 44.7709 85.7801 44.6296 85.5581C44.4883 85.3362 44.437 85.0687 44.4861 84.8102C44.5353 84.5517 44.6812 84.3217 44.8941 84.1671L62.3512 71.9738L44.2989 82.396C44.0663 82.5241 43.7933 82.5577 43.5366 82.4899C43.2799 82.4221 43.0591 82.2581 42.92 82.0319C42.781 81.8057 42.7344 81.5346 42.7899 81.2749C42.8454 81.0152 42.9987 80.7869 43.218 80.6372L48.548 77.159L43.4578 80.0978C43.2247 80.2374 42.946 80.2796 42.682 80.2152C42.4181 80.1508 42.1901 79.9851 42.0474 79.7539C41.9048 79.5226 41.8589 79.2445 41.9198 78.9797C41.9807 78.7149 42.1434 78.4848 42.3728 78.3391L47.4237 75.0138L42.7799 77.686C42.5514 77.8169 42.2815 77.8557 42.0253 77.7942C41.7692 77.7328 41.5462 77.5759 41.4019 77.3556C41.2576 77.1353 41.2028 76.8682 41.2488 76.6089C41.2948 76.3496 41.4381 76.1176 41.6494 75.9604L56.2194 65.2302L42.0607 73.406C41.8323 73.534 41.5638 73.5705 41.3095 73.5081C41.0551 73.4458 40.834 73.2892 40.6907 73.0701C40.5474 72.8509 40.4926 72.5855 40.5375 72.3275C40.5823 72.0696 40.7234 71.8382 40.9323 71.6803L52.1109 63.4467L41.9119 69.3346C41.6854 69.4632 41.4188 69.5015 41.1653 69.4419C40.9118 69.3824 40.6901 69.2293 40.5447 69.0133C40.3992 68.7973 40.3406 68.5343 40.3807 68.277C40.4208 68.0197 40.5565 67.787 40.7608 67.6255L51.3504 59.3588L41.9119 64.8148C41.6862 64.9412 41.4214 64.9784 41.1697 64.9191C40.9179 64.8597 40.6976 64.7081 40.5522 64.4942C40.4068 64.2802 40.347 64.0196 40.3844 63.7637C40.4219 63.5077 40.554 63.2752 40.7546 63.1119L41.5812 62.4588C41.4122 62.4879 41.2387 62.475 41.0758 62.4213C40.9129 62.3676 40.7657 62.2748 40.6471 62.1509C40.4878 61.9825 40.3897 61.7653 40.3687 61.5344C40.3478 61.3035 40.405 61.0723 40.5314 60.8778L41.3043 59.6895C41.1593 59.6606 41.022 59.6013 40.9016 59.5154C40.7812 59.4295 40.6804 59.3191 40.6058 59.1914C40.4687 58.9541 40.4316 58.6721 40.5025 58.4073C40.5735 58.1426 40.7466 57.9169 40.984 57.7799L43.7078 56.2051C43.9078 56.0932 44.1392 56.0509 44.3658 56.0849C44.5923 56.1189 44.8012 56.2273 44.9595 56.3929C45.1178 56.5585 45.2166 56.7721 45.2403 56.9999C45.264 57.2278 45.2113 57.4571 45.0904 57.6518L44.6192 58.3772L52.425 53.8718C52.6508 53.7431 52.9167 53.7042 53.1699 53.7627C53.423 53.8213 53.6448 53.9731 53.7911 54.1879C53.9373 54.4027 53.9973 54.6648 53.959 54.9218C53.9207 55.1788 53.7869 55.4119 53.5844 55.5748L53.0926 55.9654L63.2027 50.1291C63.4292 49.9979 63.6971 49.9576 63.9522 50.0163C64.2074 50.075 64.4307 50.2284 64.5771 50.4454C64.7235 50.6624 64.7821 50.9269 64.7411 51.1854C64.7 51.444 64.5623 51.6773 64.3559 51.8382L53.7622 60.1049L67.117 52.3942C67.3454 52.2662 67.6139 52.2296 67.8682 52.292C68.1225 52.3544 68.3437 52.5109 68.487 52.7301C68.6303 52.9492 68.685 53.2146 68.6402 53.4726C68.5953 53.7306 68.4542 53.9619 68.2454 54.1198L57.073 62.3555L71.2854 54.1467C71.514 54.0158 71.7839 53.9771 72.04 54.0385C72.2961 54.0999 72.5191 54.2568 72.6634 54.4771C72.8077 54.6974 72.8625 54.9645 72.8165 55.2239C72.7705 55.4832 72.6272 55.7152 72.4159 55.8724L57.85 66.5984L76.7249 55.7008C76.958 55.5612 77.2367 55.5191 77.5006 55.5835C77.7646 55.6478 77.9926 55.8136 78.1352 56.0448C78.2779 56.2761 78.3237 56.5542 78.2628 56.8189C78.202 57.0837 78.0392 57.3139 77.8099 57.4596L72.7652 60.7828L80.3684 56.3932C80.6017 56.2575 80.8787 56.2185 81.1403 56.2844C81.4019 56.3503 81.6274 56.5159 81.7685 56.7459C81.9097 56.9758 81.9553 57.2518 81.8957 57.5149C81.836 57.778 81.6758 58.0074 81.4493 58.154L76.1111 61.6342L82.0672 58.1974C82.2979 58.065 82.5707 58.0267 82.8289 58.0903C83.0871 58.154 83.3109 58.3147 83.4536 58.5392C83.5963 58.7636 83.6469 59.0344 83.595 59.2952C83.5432 59.5561 83.3927 59.7869 83.175 59.9396L65.7158 72.1329L82.0879 62.682C82.3177 62.5509 82.5891 62.513 82.8461 62.576C83.103 62.6391 83.326 62.7983 83.4691 63.0208C83.6122 63.2434 83.6645 63.5124 83.6151 63.7723C83.5658 64.0323 83.4186 64.2634 83.2039 64.418L65.7612 76.88L82.0879 67.456C82.3193 67.3259 82.5918 67.2898 82.8491 67.3553C83.1063 67.4207 83.3285 67.5826 83.4696 67.8074C83.6107 68.0322 83.6599 68.3027 83.607 68.5628C83.5541 68.8229 83.4031 69.0527 83.1853 69.2044L73.6208 75.6958L82.0073 70.8536C82.239 70.7216 82.5128 70.6842 82.7714 70.7494C83.03 70.8146 83.2534 70.9772 83.3949 71.2033C83.5364 71.4294 83.585 71.7014 83.5305 71.9625C83.476 72.2236 83.3227 72.4535 83.1026 72.6041L75.9871 77.4174L81.5671 74.1913C81.7983 74.0592 82.0716 74.0214 82.3299 74.0858C82.5883 74.1502 82.8118 74.3119 82.9539 74.5371C83.096 74.7624 83.1456 75.0337 83.0924 75.2947C83.0393 75.5556 82.8875 75.7859 82.6686 75.9376L75.4518 80.8976L80.6557 77.9134C80.8842 77.7825 81.1541 77.7438 81.4102 77.8052C81.6664 77.8666 81.8894 78.0235 82.0337 78.2438C82.178 78.4641 82.2328 78.7312 82.1868 78.9905C82.1408 79.2498 81.9975 79.4818 81.7862 79.639L71.8662 86.9509L78.5332 83.0924C78.7623 82.9622 79.0324 82.9243 79.2884 82.9866C79.5444 83.0489 79.767 83.2066 79.9106 83.4275C80.0541 83.6484 80.1079 83.9159 80.0609 84.1751C80.0138 84.4344 79.8695 84.6658 79.6575 84.8222L75.0778 88.1578L75.5903 87.8644C75.8158 87.7339 76.0823 87.6935 76.3364 87.7512C76.5905 87.8088 76.8134 87.9604 76.9605 88.1754C77.1076 88.3905 77.1681 88.6532 77.1298 88.9109C77.0914 89.1686 76.9572 89.4023 76.7538 89.5652L69.7086 95.199C69.8246 95.2836 69.9212 95.3921 69.9917 95.5172C70.1282 95.7541 70.1653 96.0355 70.0948 96.2997C70.0243 96.5639 69.852 96.7893 69.6156 96.9267L62.1218 101.254C61.9643 101.346 61.7854 101.395 61.6031 101.395Z" fill="#3B7AC8"/>
		<path d="M21.9439 28.148C15.2231 33.2919 7.38424 37.3405 1.07057 42.875C-0.485626 45.2166 2.42837 47.9487 3.69111 49.7591C5.96444 52.1151 8.62424 50.656 10.9079 49.0378V110.069C9.04791 122.177 19.0919 123.409 28.458 122.52C129.332 118.007 111.701 147.008 113.096 49.4718C113.626 50.015 114.275 50.4277 114.991 50.6775C115.708 50.9273 116.472 51.0073 117.225 50.9114C117.978 50.8154 118.698 50.546 119.329 50.1245C119.96 49.7029 120.484 49.1406 120.861 48.4819C122.307 46.4359 124.825 43.9208 122.21 41.7156C104.505 29.3466 86.6223 17.1327 68.8841 4.77605C66.6542 3.23018 63.891 0.38645 60.9398 1.37018C53.8863 5.26998 47.6202 10.7653 40.7836 15.097C42.4928 5.89618 32.0396 5.94372 25.9512 8.09098C20.6564 12.4661 24.2978 21.1399 23.2831 27.22L21.9439 28.148ZM110.104 114.02C109.881 122.636 100.829 121.423 94.6988 121.346H24.9736C12.863 123.382 13.1709 110.356 13.8984 101.92C13.8984 83.5787 13.8984 65.2371 13.8984 46.8947C29.76 35.9848 45.6196 24.8579 61.4462 13.9872C77.8865 24.3804 93.9424 36.3072 110.104 47.4072C109.996 69.6094 110.271 91.8282 110.104 114.02ZM60.4004 3.91218C61.6962 2.52132 62.7544 3.56292 63.827 4.46192L117.854 41.8892C118.568 42.2664 119.234 42.7278 119.838 43.2636C120.881 44.5284 118.598 49.1226 117.027 48.9014C116.44 48.8208 115.483 47.833 115.01 47.5064L66.8071 14.1339C64.478 12.5219 62.587 11.0215 59.6585 12.8216C42.4845 24.1366 25.9388 36.4787 8.87224 47.9797C7.88851 48.6617 7.41317 49.5215 6.45217 48.5274C5.55937 47.246 2.76317 44.5077 4.04864 42.9474C11.2923 37.7931 19.0134 32.7112 26.2219 27.59C30.9752 24.2172 36.0303 20.9085 40.6886 17.5687L60.4004 3.91218ZM26.35 11.78C26.9907 7.82025 32.4136 9.86418 34.9288 9.35992C38.7314 9.93445 37.5658 14.4708 37.7498 17.2133L26.317 25.1327C26.3521 20.6667 26.2467 16.2109 26.35 11.78Z" fill="#262626"/>
		<path d="M89.7409 48.7278C68.1939 48.8208 65.6705 34.9514 59.5841 39.0351C46.8762 54.2065 29.1132 41.3787 31.5498 57.0027C31.6511 66.2862 30.8327 75.7102 34.3667 84.5349C38.3636 94.8413 55.8869 116.651 67.8818 108.215C88.5588 97.9971 94.5935 75.1646 92.4483 53.7663C92.4503 51.4083 92.1259 49.4449 89.7409 48.7278ZM88.3273 78.8577C84.9111 91.545 74.274 105.886 60.8262 107.981C38.4049 98.3836 32.2401 74.9703 34.5795 52.5945C35.0549 49.8107 41.4905 50.2427 43.9229 49.7715C47.3937 49.1367 50.7544 48.0035 53.9008 46.4069C56.8809 45.9068 61.1858 38.8491 63.1388 41.5317C69.4297 48.2917 79.1699 50.3667 88.0401 50.7325C91.2 52.0799 89.1003 74.7885 88.3273 78.8577Z" fill="#262626"/>
		<path d="M84.1134 58.5694C83.5161 55.8062 79.0521 56.0625 76.9317 55.521C52.0966 45.3675 68.4584 50.561 45.1443 56.2072C40.918 56.389 39.0662 58.774 39.8309 62.9321C38.9661 69.7042 39.9817 76.5837 42.7663 82.8171C45.5509 89.0505 49.9972 94.3973 55.6182 98.2721C58.2924 100.233 61.1196 102.184 64.2672 100.339C79.7589 92.2726 86.302 75.3218 84.1134 58.5694ZM81.1642 62.06C82.832 77.3926 76.167 92.2333 62.3865 99.696C61.721 99.7642 58.991 97.5715 58.4144 97.1664C46.0144 89.185 41.414 74.615 42.8255 60.4769C42.4018 58.4102 43.7803 57.5278 45.7457 57.4368C50.6731 56.5037 55.4067 54.742 59.7453 52.2268C60.8944 51.5386 61.2416 50.8752 62.4692 51.6295C66.4819 54.2297 70.9279 56.0901 75.5966 57.1227C79.0046 57.5608 82.1335 57.7944 81.1704 62.06H81.1642Z" fill="#262626"/>
		<path d="M70.8866 65.3853C65.226 68.2414 62.4401 76.1051 57.9389 80.7737L55.1427 77.9775C54.4876 77.3223 51.6749 78.4197 52.3445 79.0893L56.4778 83.2227C60.7269 84.2911 66.6644 71.236 70.1178 68.1691C70.5249 67.3217 72.8954 65.4845 70.8866 65.3853Z" fill="#262626"/>
		</svg>`
  }, h = "https://conversionrate-store.github.io/a-b_images/theinvestorsedge/", u = {
    google: `${h}google-logo.webp`,
    a_rating: `${h}a-rating.webp`,
    clients_d: `${h}clients_d.svg`,
    clients_m: `${h}clients_m.svg`
  }, M = {
    src: "https://23711988.fs1.hubspotusercontent-na1.net/hubfs/23711988/A%20-%20Website%20Videos/Ryan%20G.%20Wright/Ryan%20G.%20Wrights%20Story.mp4",
    poster: "https://23711988.fs1.hubspotusercontent-na1.net/hub/23711988/hubfs/custom-video-thumbnails/RyanGWright-Story-Cover.jpg?length=1920"
  }, W = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ], k = (t, n = "") => (
    /*html*/
    `
  <div class="crs2-cta-wrap" ${n ? `id="${n}"` : ""}>
    <button class="crs2-cta crs2_open_form">${t}</button>
    <div class="crs2-cta-wrap__microcopy">
      <span>${i.no_commitment} No commitment</span>
    </div>
  </div>
`
  ), m = (t) => (
    /*html*/
    `<p class="crs2-eyebrow">${i.eyebrow_mark}${t}</p>`
  ), T = (t) => {
    var n;
    return ((n = t.match(/(?:v=|youtu\.be\/)([\w-]{11})/)) == null ? void 0 : n[1]) || "";
  }, R = (
    /*html*/
    `
  <header class="crs2-header">
    <div class="crs2-header__container">
      <a href="/" class="crs2-header__logo" aria-label="The Investor's Edge">
				<img src="${h}/logo.svg" alt="The Investor's Edge" class="crs2-header__logo-img" />
			</a>
      <nav class="crs2-header__nav" data-crs2-mobile-menu>
        <a href="#crs2-how-works" class="crs2-header__nav-link">How it works</a>
        <a href="#crs2-borrowers-say" class="crs2-header__nav-link">What borrowers say</a>
        <a href="#crs2-people" class="crs2-header__nav-link">Real people. Real deals.</a>
        <a href="#crs2-why-tie" class="crs2-header__nav-link">Why TIE</a>
        <a href="#crs2-get-started" class="crs2-header__nav-link">Get started</a>
      </nav>
      <a href="tel:+18016927678" class="crs2-header__phone">
        <span class="crs2-header__phone-icon">${i.phone}</span>
        <span class="crs2-header__phone-text">
          <span>Talk to an expert</span>
          <b>(801) 692-7678</b>
        </span>
      </a>
      <button class="crs2-header__mobile-toggle" data-crs2-mobile-toggle aria-label="Toggle menu">
        <span class="crs2-header__mobile-toggle-icon crs2-header__mobile-toggle-icon--open">${i.menu}</span>
        <span class="crs2-header__mobile-toggle-icon crs2-header__mobile-toggle-icon--close">${i.close}</span>
      </button>
    </div>
  </header>
`
  ), Z = (
    /*html*/
    `
  <section class="crs2-hero">
    <div class="crs2-hero__container">
      <div class="crs2-hero__content">
        <span class="crs2-hero__badge">For First-Time Flippers</span>
        <h1 class="crs2-hero__title">Fix-and-Flip Financing <span>With No Experience and Close to $0 Cash</span></h1>
        <p class="crs2-hero__desc"><b>We help first-time flippers</b> find, fund, and flip real estate — with no prior experience or large down payment — covering up to <b>100% of purchase price, repair costs, and closing costs</b> on qualifying deals.</p>
        <div class="crs2-hero__cta-row">
          <button class="crs2-hero__cta crs2-hero__cta--primary crs2_open_form">Book a Call with an Expert</button>
          <a href="#crs2-how-works" class="crs2-hero__cta crs2-hero__cta--secondary">See How It Works</a>
        </div>
        <div class="crs2-hero__microcopy">${i.no_commitment} No commitment</div>
      </div>
      <div class="crs2-hero__media">
        ${N(`${h}house-before.webp`, `${h}house-after.webp`, "a distressed home before and after a fix-and-flip rehab")}
      </div>
    </div>
    <div class="crs2-hero__trust">
      <div class="crs2-hero__trust-row">
        <div class="crs2-hero__trust-item">
          <img src="${u.a_rating}" alt="BBB A+ Rating" class="crs2-hero__trust-logo" />
          <div class="crs2-hero__trust-text">
            <b>Accredited Business</b>
            <span>Since 2008 · 22 years in business</span>
          </div>
        </div>
        <div class="crs2-hero__trust-divider"></div>
        <div class="crs2-hero__trust-item">
          <div class="crs2-hero__trust-text">
            <b class="crs2-hero__trust-google"><img src="${u.google}" alt="Google" />${i.stars} 4.8/5</b>
            <span>Based on 1060+&nbsp;reviews</span>
          </div>
        </div>
        <div class="crs2-hero__trust-divider"></div>
        <div class="crs2-hero__trust-item">
          <div class="crs2-hero__trust-text">
            <b>1,500+ Deals Funded</b>
            <span>$47,884 median profit per flip</span>
          </div>
        </div>
      </div>
      <div class="crs2-hero__featured">
        <p>Featured in:</p>
        <img src="${u.clients_d}" alt="Featured in realtor.com, MSN, Fox News, Yahoo, The Sacramento Bee, The Charlotte Observer" class="crs2-hero__featured-img crs2-hero__featured-img--d" />
        <img src="${u.clients_m}" alt="Featured in realtor.com, MSN, Fox News, Yahoo, The Sacramento Bee, The Charlotte Observer" class="crs2-hero__featured-img crs2-hero__featured-img--m" />
      </div>
    </div>
  </section>
`
  ), O = (
    /*html*/
    `
  <section class="crs2-stage">
    <div class="crs2-stage__container">
      ${m("Built for your stage")}
      <h2 class="crs2-stage__title">You&#39;ve Done the Research. <span>Now Do the Deal.</span></h2>
      <div class="crs2-stage__row">
        <div class="crs2-stage__quote">
          ${i.quote}
          <p class="crs2-stage__quote-text">The Investor's Edge was built for people who are ready to create real wealth outside their W-2 — investors without prior experience or significant savings who want to build something their family will feel for generations. Your capital isn't a 20% down payment. It's your drive. We bring everything else.</p>
          <div class="crs2-stage__author">
            <span class="crs2-stage__author-avatar"></span>
            <span>
              <b>Ryan G. Wright</b>
              <span>CEO &amp; Founder, The Investor's Edge</span>
            </span>
          </div>
        </div>
        <div class="crs2-stage__video">
          <div class="crs2-stage__video-thumb" data-crs2-video>
            <video class="crs2-stage__video-el" poster="${M.poster}" playsinline preload="none">
              <source src="${M.src}" type="video/mp4" />
            </video>
            <button class="crs2-stage__video-play" aria-label="Play video">${i.play}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
`
  ), Y = [
    {
      tag: "Stage 1",
      title: "Buy",
      amount: "$100,000",
      desc: "You find a distressed home at 40% of its after-repair value."
    },
    {
      tag: "Stage 2",
      title: "Renovate",
      lines: [
        ["Rehab", "$40,000"],
        ["Closing &amp; points", "$15,000"],
        ["Interest (wrapped)", "$15,000"]
      ],
      total: "$70,000",
      desc: "Rehab, closing costs, and interest — all covered by the loan"
    },
    {
      tag: "Stage 3",
      title: "Sell",
      amount: "$250,000",
      desc: "Once renovated, the property is worth $250,000. That's where your profit comes from."
    }
  ], G = (
    /*html*/
    `
  <section class="crs2-how-works" id="crs2-how-works">
    <div class="crs2-how-works__container">
      <div class="crs2-how-works__intro">
        <div class="crs2-how-works__intro-text">
          ${m("How it works")}
          <h2 class="crs2-how-works__title"><b>100% Hard Money Financing</b> Sounds Too Good? Here's Why It Works.</h2>
          <p class="crs2-how-works__desc">Unlike traditional lenders who lend against your income and credit, <b>hard money lenders lend against what the property will be worth after renovation.</b> That difference is what makes 100% financing structurally possible.</p>
        </div>
        <div class="crs2-how-works__intro-media">
					<img src="${h}hiw.webp" alt="How it works" class="crs2-how-works__intro-img" />
				</div>
      </div>

      <div class="crs2-how-works__example">
        <h3 class="crs2-how-works__example-title">Here's how it works — on a real example:</h3>
        <div class="crs2-how-works__stages">
          ${Y.map(
      (t) => (
        /*html*/
        `
            <div class="crs2-how-works__stage">
              <div class="crs2-how-works__stage-head">
                <span class="crs2-how-works__stage-icon">
									<img src="${h}${t.title.toLowerCase()}.svg" alt="${t.title}" />
								</span>
                <span class="crs2-how-works__stage-tag">${t.tag}</span>
              </div>
              <h4 class="crs2-how-works__stage-title">${t.title}</h4>
              ${t.amount ? `<p class="crs2-how-works__stage-amount">${t.amount}</p>` : (
          /*html*/
          `
                  <ul class="crs2-how-works__stage-lines">
                    ${t.lines.map(([n, e]) => `<li><span>${n}</span><span>${e}</span></li>`).join("")}
                    <li class="crs2-how-works__stage-total"><span>Total:</span><span>${t.total}</span></li>
                  </ul>
                `
        )}
              <p class="crs2-how-works__stage-desc">${t.desc}</p>
            </div>
          `
      )
    ).join("")}
        </div>

        <div class="crs2-how-works__calc">
          <div class="crs2-how-works__calc-text">
            <h4>Calculate Maximum Loan</h4>
            <p>We lend up to <b>74% of ARV</b> — the property's value after renovation, not the purchase price. That's what determines the max loan amount.</p>
            <p class="crs2-how-works__calc-formula">$250,000 × 74% = <b>$185,000 max loan amount</b></p>
            <p><b>This example deal would only need $170,000, so it would qualify for 100% financing.</b></p>
            <p class="crs2-how-works__calc-cash">Cash to close: $0</p>
          </div>
          <div class="crs2-how-works__calc-box">
            <h4>What's included in the loan</h4>
            <ul>
              <li>Purchase price</li>
              <li>Rehab costs</li>
              <li>Closing costs &amp; points</li>
              <li>Interest for the full loan term</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
`
  ), U = [
    {
      name: "Emanuel",
      role: "Master electrician",
      desc: "Wanted more family time; banks wouldn't lend. Plans to do many deals.",
      loc: "Baltimore, MD",
      cash: "$0",
      profit: "$30,000",
      video: "https://www.youtube.com/watch?v=D-t-55HzTiQ"
    },
    {
      name: "Keith",
      role: "Credit card billing department",
      desc: "Father of two from a family of 15. Full remodel; credit was a non-issue.",
      loc: "Pittsburgh, PA",
      cash: "$1,300",
      profit: "$40,000",
      video: "https://www.youtube.com/watch?v=omYxuJqIwdU"
    },
    {
      name: "Brian",
      role: "Insurance salesperson",
      desc: 'Husband and father of 5. Less-than-good credit; cosmetic rehab. "They believed in me."',
      loc: "Muncie, IN",
      cash: "$2,300",
      profit: "$35,000",
      video: "https://www.youtube.com/watch?v=nOx8l_ST1zY"
    },
    {
      name: "Paul",
      role: "Small business owner",
      desc: "Single dad of two who pushed past doubt from family and friends.",
      loc: "Baltimore City, MD",
      cash: "$4,000",
      profit: "$50,000",
      video: "https://www.youtube.com/watch?v=DbtCXaGrMDA"
    },
    {
      name: "Antonio S.",
      role: "Interior designer",
      desc: "15 years in real estate. Nervous about upfront cash, but did a deal bigger than he could self-fund.",
      loc: "Maryland",
      cash: "$14,000",
      profit: "$40,000",
      video: "https://www.youtube.com/watch?v=tliSk-ZOGAQ"
    },
    {
      name: "Dion",
      role: "Runs a crowd management company",
      desc: "Atlanta rehab, cosmetic to full. Stays in close contact with his project manager.",
      loc: "Georgia",
      cash: "$20,000",
      profit: "$30,000–$40,000",
      video: "https://www.youtube.com/watch?v=Nq0272m8KdQ"
    }
  ], J = (
    /*html*/
    `
  <section class="crs2-people" id="crs2-people">
    <div class="crs2-people__container">
      ${m("Real people. Real deals.")}
      <h2 class="crs2-people__title">People at Your Stage. Real Numbers.</h2>
      <div class="crs2-people__grid">
        ${U.map(
      (t, n) => (
        /*html*/
        `
          <div class="crs2-people__card${n > 2 ? " crs2-people__card--extra" : ""}">
            <div class="crs2-people__card-media" data-crs2-yt="${T(t.video)}">
              <img src="https://img.youtube.com/vi/${T(t.video)}/hqdefault.jpg" alt="${t.name}'s story" class="crs2-people__card-thumb" loading="lazy" />
              <button class="crs2-people__card-play" aria-label="Play ${t.name}'s story">${i.play}</button>
            </div>
            <div class="crs2-people__card-body">
              <b class="crs2-people__card-name">${t.name}</b>
              <span class="crs2-people__card-role">${t.role}</span>
              <p class="crs2-people__card-desc">${t.desc}</p>
              <span class="crs2-people__card-loc">${i.pin} ${t.loc}</span>
              <div class="crs2-people__card-stats">
                <span>Cash to close: ${t.cash}</span>
                <b>Profit: ${t.profit}</b>
              </div>
            </div>
          </div>
        `
      )
    ).join("")}
      </div>
      <button class="crs2-people__load-more" data-crs2-load-more="crs2-people__card--extra">${i.refresh} Load more</button>
      ${k("Book a Call with an Expert")}
    </div>
  </section>
`
  ), X = [
    {
      name: "JRC Home Remodel",
      time: "7 months ago",
      text: "We had 100% finance deal fall through with another lender. Investor's Edge came through and got it closed! We are so grateful to work with them everything they said they were gonna do they did. Jerilin and Dick were awesome to work with. They're real people and they relate to everything that was going on. Jerilin is very prompt responded to every text and email in a timely fashion. She was the key in getting this property closed on time. I would definitely recommend these guys for 100% financing and they actually really care and they actually get it done. I think this was probably one of the most elite lender teams I've worked with in a long time thanks, Cedric."
    },
    {
      name: "Stephanie Young",
      time: "7 months ago",
      text: "Exceptional Experience with Investors Edge - True 100% Financing for My Fix and Flip! I recently closed on my first investment property, and I have The Investor's Edge to thank for making it happen. The entire process, from finding the deal to securing the funds, was incredibly smooth and efficient."
    },
    {
      name: "Ashton Chaney",
      time: "9 months ago",
      text: "I had a great experience with The Investor's Edge! I was able to obtain 100% financing for my fix and flip project. The team that assisted me was great and helped me through each step of the process from putting in an offer all the way to completing the rehab of the property and putting it on the market. Jeri Lin, Isaac, Ashley, Dick, Drew, and Eden have all been awesome in guiding me from start to finish in my project. Each step of the process, someone who specializes in that aspect is there to answer questions and make sure that your project stays on track! I'm looking forward to my next project with The Investor's Edge."
    },
    {
      name: "Dee Johnson Tucker",
      time: "a year ago",
      text: "So glad I chose to take this life changing venture with The Investor's Edge. So far I've received a lot of support and materials to make my first offer. I'm almost ready but still scouting out the first location that's perfect for me. I'm excited to see all the accomplishments we will achieve once I make my first deal!!!"
    },
    {
      name: "Seth Walden",
      time: "2 years ago",
      text: "Absolutely amazing experience in assisting me with my first full fix and flip job. They are extremely communicative, dedicate time to you beyond what is needed, are always there to help educate you or handle any issues, and are the most supportive group of lenders I've ever worked with. 5 star experience!"
    },
    {
      name: "Edward Printz",
      time: "a year ago",
      text: "After struggling to find the right properties to make offers and flip, The Investors Edge team met with me to understand my concerns and coach me through the situation. I'm now under contract on my first great opportunity and can't wait to grow my business through EDGE! Very thankful for the guidance and quick support they've been providing."
    }
  ], K = (
    /*html*/
    `
  <section class="crs2-borrowers-say" id="crs2-borrowers-say">
    <div class="crs2-borrowers-say__container">
      <div class="crs2-borrowers-say__head">
        <div>
          ${m("What borrowers say")}
          <h2 class="crs2-borrowers-say__title">Over <span>1,000 Five-Star</span> Reviews</h2>
        </div>
        <div class="crs2-borrowers-say__badge">
          <span class="crs2-borrowers-say__badge-top"><img src="${u.google}" alt="Google" />${i.stars}<b>4.8</b></span>
          <span>1,000+ Google reviews</span>
        </div>
      </div>
      <div class="crs2-borrowers-say__grid">
        ${X.map(
      (t, n) => (
        /*html*/
        `
          <div class="crs2-borrowers-say__card${n > 2 ? " crs2-borrowers-say__card--extra" : ""}">
            <div class="crs2-borrowers-say__card-head">
              <span class="crs2-borrowers-say__card-avatar">
								<img src="${h}user.webp" alt="${t.name}" />
							</span>
              <span class="crs2-borrowers-say__card-who">
                <b>${t.name}</b>
                <span>${t.time}</span>
              </span>
              <img src="${u.google}" alt="Google" class="crs2-borrowers-say__card-g" />
            </div>
            ${i.stars}
            <p class="crs2-borrowers-say__card-text crs2-borrowers-say__card-text--clamped">&quot;${t.text}&quot;</p>
            <button class="crs2-borrowers-say__read-more" data-crs2-read-more hidden>Read more</button>
          </div>
        `
      )
    ).join("")}
      </div>
      <button class="crs2-borrowers-say__load-more" data-crs2-load-more="crs2-borrowers-say__card--extra">${i.refresh} Load more</button>
    </div>
  </section>
`
  ), Q = [
    { label: "Down payment", trad: "10–20% on every deal", tie: "0 or minimal" },
    { label: "Rehab costs", trad: "You fund yourself", tie: "Included in financing" },
    { label: "Closing &amp; title costs", trad: "You bring cash to close", tie: "We cover it — nothing to bring" },
    { label: "Monthly payments", trad: "Every month for the entire loan term", tie: "Wrapped into the loan" },
    { label: "Experience required", trad: "Often preferred", tie: "None" },
    { label: "Property required to start", trad: "Yes", tie: "No" },
    { label: "Qualification basis", trad: "You + deal", tie: "The deal only" }
  ], n1 = (
    /*html*/
    `
  <section class="crs2-why-tie" id="crs2-why-tie">
    <div class="crs2-why-tie__container">
      ${m("Why the Investor's Edge")}
      <h2 class="crs2-why-tie__title">Why This Works Differently Than Other Hard Money Financing</h2>
      <p class="crs2-why-tie__desc">If you're starting out, this difference determines whether you can act now — or wait years until you have everything traditional lenders require.</p>
      <div class="crs2-why-tie__table">
        <div class="crs2-why-tie__head">
          <span></span>
          <span>Traditional Hard Money</span>
          <span>The Investor's Edge</span>
        </div>
        ${Q.map(
      (t) => (
        /*html*/
        `
          <div class="crs2-why-tie__row">
            <span class="crs2-why-tie__row-label">${t.label}</span>
            <span class="crs2-why-tie__row-trad">${i.minus_round} ${t.trad}</span>
            <span class="crs2-why-tie__row-tie">${i.check_round_dark} ${t.tie}</span>
          </div>
        `
      )
    ).join("")}
      </div>
      ${k("Book a Call with an Expert")}
    </div>
  </section>
`
  ), e1 = [
    {
      title: "Analyze Deal",
      desc: "You run the profit potential and cash-to-close before committing a dollar. If the numbers don't work, you find out now — not after you're in."
    },
    {
      title: "Request Funding",
      desc: "You submit the deal with property details and your signed purchase contract. This kicks off the formal funding process."
    },
    {
      title: "Validate Numbers",
      desc: "We confirm your assumptions using property comps and rehab estimates, so the deal stands on real data, not guesses."
    },
    {
      title: "Contractor Info",
      desc: "We verify your contractor's license, insurance, and past work — making sure the person doing the rehab can actually deliver."
    },
    {
      title: "Rehab Scope &amp; Bid",
      desc: "We lock in the exact scope of work and a final, signed rehab budget. No vague estimates, no mid-project surprises."
    },
    {
      title: "Value &amp; Costs",
      desc: "We order the official ARV appraisal and run final checks to generate your exact loan numbers."
    },
    {
      title: "Final Documents",
      desc: "You provide ID, proof of funds, and sign your loan and LLC formation documents. Full transparency before anything is final."
    },
    {
      title: "Final Closing",
      desc: "Title clears, statements are approved, documents are executed, and the funding wire goes out. The deal is funded."
    }
  ], t1 = (
    /*html*/
    `
  <section class="crs2-funding-process">
    <div class="crs2-funding-process__container">
      ${m("8-Step Funding Process")}
      <h2 class="crs2-funding-process__title">How We Take Your Deal From Submission to Funded.</h2>
      <p class="crs2-funding-process__desc">Every step is designed to protect the deal — and protect you. The property is the collateral. When the numbers work, the deal funds — regardless of your background.</p>
      <div class="crs2-funding-process__accordion" data-crs2-accordion>
        ${e1.map(
      (t, n) => (
        /*html*/
        `
          <div class="crs2-funding-process__item${n === 0 ? " crs2-funding-process__item--open" : ""}" data-crs2-accordion-item>
            <button class="crs2-funding-process__item-head" data-crs2-accordion-trigger>
              <span class="crs2-funding-process__item-num">${n + 1}.</span>
              <span class="crs2-funding-process__item-title">${t.title}</span>
              <span class="crs2-funding-process__item-icon">${i.plus}${i.minus}</span>
            </button>
            <div class="crs2-funding-process__item-panel">
              <div class="crs2-funding-process__item-panel-inner">
                <p>${t.desc}</p>
                <div class="crs2-funding-process__item-media">
									<img src="${h}step-${n + 1}.webp" alt="${t.title}" />
								</div>
              </div>
            </div>
          </div>
        `
      )
    ).join("")}
      </div>
      <div class="crs2-funding-process__callout">
        <span class="crs2-funding-process__callout-icon">
					${i.property}
				</span>
        <p><b>The property is the collateral — not your credit score or employment history.</b> This rigorous process protects both sides: you're not funding a bad deal, and we're not lending against a weak asset. When the numbers work, the deal funds.</p>
      </div>
    </div>
  </section>
`
  ), r1 = [
    "Single family home, townhouse, condo, or up to 4-unit property",
    "Minimum ARV of $60,000 with at least 2 bedrooms",
    "Total costs that fit within 74% of ARV",
    "City utilities (power, water, sewer)",
    "Sufficient comparable sales in the market"
  ], s1 = [
    "Prior flip experience — your first deal qualifies",
    "W-2 or proof of employment — self-employed investors qualify",
    "Already under contract? Start anyway",
    "A down payment on the property",
    "A perfect credit score",
    "Cash reserves"
  ], i1 = (
    /*html*/
    `
  <section class="crs2-dont-need">
    <div class="crs2-dont-need__container">
      ${m("What you don't need to get started")}
      <h2 class="crs2-dont-need__title">You Don't Need What Traditional Lenders Require.</h2>
      <p class="crs2-dont-need__desc">Our qualification is based entirely on the deal — not on your background. Here's what we don't ask for, and what actually matters.</p>
      <div class="crs2-dont-need__cols">
        <div class="crs2-dont-need__col crs2-dont-need__col--matters">
          <h3>${i.check_round_dark} What actually matters</h3>
          <ul>
            ${r1.map((t) => `<li>${i.check_round_dark} ${t}</li>`).join("")}
          </ul>
        </div>
        <div class="crs2-dont-need__col crs2-dont-need__col--dont">
          <h3>${i.cross_round_dark} What we don't require</h3>
          <ul>
            ${s1.map((t) => `<li>${i.cross_round_dark} ${t}</li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="crs2-dont-need__callout">
        <span class="crs2-dont-need__callout-icon">${i.phone}</span>
        <div class="crs2-dont-need__callout-text">
          <b>Not Sure If Your Deal Qualifies?</b>
          <p>Book a free 15-minute call — we'll tell you within the first conversation whether your deal fits, and exactly what to look for if it doesn't.</p>
        </div>
        <div class="crs2-dont-need__callout-cta">
          <button class="crs2-cta crs2_open_form">Book a Call with an Expert</button>
          <span>${i.no_commitment} No commitment</span>
        </div>
      </div>
    </div>
  </section>
`
  ), o1 = (
    /*html*/
    `
  <section class="crs2-first-deal">
    <div class="crs2-first-deal__container">
      <h2 class="crs2-first-deal__title">Here's a simple way to think about getting into your first deal</h2>
      <div class="crs2-first-deal__media">
        <img src="${h}house.webp" alt="First deal process" class="crs2-first-deal__img" />
      </div>
      <ol class="crs2-first-deal__steps">
        ${[
      {
        title: "Tell us your goals",
        desc: "A 15-minute call to understand your budget, market, and timeline. We'll pair you with a funding advisor who's worked in your area."
      },
      {
        title: "Find your deal — together",
        desc: "Already have a property? Bring it. Still looking? We give you the tools to find and evaluate off-market opportunities before you commit to anything.",
        link: "Learn more about finding deals"
      },
      {
        title: "We evaluate it — together",
        desc: "Our team reviews purchase price, ARV, and repair scope. If the deal qualifies, we fund up to 100%. If it doesn't, we'll tell you exactly why — and what to look for instead.",
        link: "Learn more about the evaluation"
      },
      {
        title: "We fund it. You renovate.",
        desc: "Close in days. Renovation funds released in draws as work is completed. No monthly payments until the project is done.",
        link: "Learn how we support you during renovation"
      },
      {
        title: "Sell, repay, and keep the profit",
        desc: "Our members average $47,884 per flip. Repay the loan at sale — the cycle repeats on the next deal."
      }
    ].map(
      (t, n) => (
        /*html*/
        `
          <li class="crs2-first-deal__step">
            <span class="crs2-first-deal__step-num">${n + 1}</span>
            <div class="crs2-first-deal__step-content">
              <h3>${t.title}</h3>
              <p>${t.desc}</p>
              ${t.link ? `<a href="https://www.theinvestorsedge.com/our-funding-process" class="crs2-first-deal__step-link">${i.link_icon} ${t.link}</a>` : ""}
            </div>
          </li>
        `
      )
    ).join("")}
      </ol>
      <div class="crs2-first-deal__loan-term">
        <b>Loan term</b>
        <p>Initial term is 5–9 months — enough time to renovate and sell in most markets. Need more time? You can extend for up to 3 additional months.</p>
      </div>
      ${k("Book a Call with an Expert")}
    </div>
  </section>
`
  ), b = (t, n, e) => (
    /*html*/
    `
  <label class="crs2-get-started__field">
    <span>${t} <em>*</em></span>
    <select name="${n}" required>
      <option value="" selected disabled>Please Select</option>
      ${e.map((r) => `<option value="${r}">${r}</option>`).join("")}
    </select>
  </label>
`
  ), a1 = (
    /*html*/
    `
  <section class="crs2-get-started" id="crs2-get-started">
    <div class="crs2-get-started__container">
      ${m("Get started")}
      <h2 class="crs2-get-started__title">Get Prequalified For 100% Financing</h2>
      <p class="crs2-get-started__desc">Free pre-qualification consultation. We'll discuss your goals, review your deal, and tell you exactly what you qualify for.</p>
      <form class="crs2-get-started__form" data-crs2-lead-form novalidate>
        <div class="crs2-get-started__fields">
          <div class="crs2-get-started__row">
            <label class="crs2-get-started__field">
              <span>First Name <em>*</em></span>
              <input type="text" name="first_name" placeholder="Type your Name" required />
            </label>
            <label class="crs2-get-started__field">
              <span>Last Name <em>*</em></span>
              <input type="text" name="last_name" placeholder="Type your Last Name" required />
            </label>
          </div>
          <label class="crs2-get-started__field">
            <span>Email <em>*</em></span>
            <input type="email" name="email" placeholder="Type your Email" required />
          </label>
          <label class="crs2-get-started__field crs2-get-started__field--phone">
            <span>Mobile Number <em>*</em></span>
            <span class="crs2-get-started__phone-row">
              <input type="tel" name="phone" placeholder="+ ___-___-__-__" required data-crs2-phone-input />
              <button type="button" class="crs2-get-started__send-code" data-crs2-send-code>Send code</button>
            </span>
          </label>
          <div class="crs2-get-started__verify" data-crs2-verify>
            <div class="crs2-get-started__verify-head">
              <span>Verify Phone Number <em>*</em></span>
              <span class="crs2-get-started__verify-timer" data-crs2-verify-timer>00:59</span>
            </div>
            <div class="crs2-get-started__verify-row">
              <input type="text" inputmode="numeric" maxlength="1" class="crs2-get-started__verify-digit" data-crs2-verify-digit />
              <input type="text" inputmode="numeric" maxlength="1" class="crs2-get-started__verify-digit" data-crs2-verify-digit />
              <input type="text" inputmode="numeric" maxlength="1" class="crs2-get-started__verify-digit" data-crs2-verify-digit />
              <input type="text" inputmode="numeric" maxlength="1" class="crs2-get-started__verify-digit" data-crs2-verify-digit />
            </div>
            <p class="crs2-get-started__verify-msg" data-crs2-verify-msg></p>
            <button type="button" class="crs2-get-started__verify-resend" data-crs2-verify-resend disabled>${i.verify_resend} Resend verification code</button>
          </div>
          ${b("State you want to invest in", "state", W)}
          ${b("Do You Already Have a Property in Mind?", "has_property", ["Yes", "No"])}
          ${b("How Much Experience Do You Have?", "experience", ["None — this would be my first deal", "1–2 deals", "3–5 deals", "6+ deals"])}
          ${b("Amount of Money to Invest in Real Estate?", "invest_amount", ["$1,000 to $2,499", "$2,500 to $4,999", "$5,000 to $9,999", "$10,000 to $19,999", "$20,000 or more"])}
        </div>
        <label class="crs2-get-started__consent">
          <input type="checkbox" name="consent" />
          <span>By checking this box, I agree The Investor's Edge and its agents may contact me at the number above. Consent isn't required to purchase. See our Privacy Policy and Terms.</span>
        </label>
        <button type="submit" class="crs2-cta crs2-get-started__submit">Book a Call with an Expert</button>
        <p class="crs2-get-started__note">You'll receive email confirmation immediately after submitting</p>
      </form>
    </div>
  </section>
`
  ), c1 = (
    /*html*/
    `
  <section class="crs2_new_content_block">
    ${R}
    ${Z}
		<div class="crs2_container">
    ${O}
    ${G}
    ${J}
    ${K}
    ${n1}
    ${t1}
    ${i1}
    ${o1}
    ${a1}
		</div>
  </section>
`
  );
  B({ name: "New 100 HMF V2", dev: "YK" }), A("new_100_hmf_v2");
  const d1 = "23711988", l1 = "a57c4233-8531-4903-b847-b112ea2bdda4", q = (t) => {
    const n = t.replace(/\D/g, "");
    return n.length === 11 && n.startsWith("1") ? n.slice(1) : n;
  }, $ = (t) => {
    const n = q(t);
    return n.length !== 10 ? !1 : /^[2-9]\d{2}$/.test(n.slice(0, 3)) && /^[2-9]\d{2}$/.test(n.slice(3, 6));
  }, I = (t) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.trim()), x = (t, n) => {
    var s;
    const e = t.closest(".crs2-get-started__field");
    (s = e == null ? void 0 : e.querySelector(".crs2-get-started__field-error")) == null || s.remove();
    const r = document.createElement("span");
    r.className = "crs2-get-started__field-error", r.textContent = n, e == null || e.appendChild(r);
  }, y = (t) => {
    var n, e;
    (e = (n = t.closest(".crs2-get-started__field")) == null ? void 0 : n.querySelector(".crs2-get-started__field-error")) == null || e.remove();
  };
  class p1 {
    constructor() {
      this.verifyTimerInterval = null, this.verifyTimeLeft = 59, this.phoneVerified = !1, this.phoneChecking = !1, this.normalizedPhone = "", this.init();
    }
    async init() {
      await F("#main-content"), L("head").elements[0].insertAdjacentHTML("beforeend", `<style>${H}</style>`), L("#main-content").elements[0].innerHTML = c1, V(), this.bindMobileMenu(), this.bindAccordion(), this.bindLoadMore(), this.bindCtaClicks(), this.bindForm(), this.bindStageVideo(), this.bindPeopleVideos(), this.bindReadMore(), this.bindPhoneVerification(), this.trackVisibility();
    }
    bindReadMore() {
      document.querySelectorAll("[data-crs2-read-more]").forEach((n) => {
        const e = n.previousElementSibling;
        e && (e.scrollHeight <= e.clientHeight + 1 || (n.hidden = !1, n.addEventListener("click", () => {
          const r = e.classList.toggle("crs2-borrowers-say__card-text--expanded");
          n.textContent = r ? "Show less" : "Read more";
        })));
      });
    }
    bindPeopleVideos() {
      document.querySelectorAll("[data-crs2-yt]").forEach((n) => {
        const e = n.dataset.crs2Yt, r = n.querySelector(".crs2-people__card-play");
        r == null || r.addEventListener("click", () => {
          if (!e) return;
          const s = document.createElement("iframe");
          s.className = "crs2-people__card-frame", s.src = `https://www.youtube.com/embed/${e}?autoplay=1`, s.title = "YouTube video player", s.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", s.allowFullscreen = !0, n.appendChild(s), n.classList.add("crs2-people__card-media--playing"), _("video_play", "people", "click", "New 100 HMF V2");
        });
      });
    }
    bindStageVideo() {
      const n = document.querySelector("[data-crs2-video]"), e = n == null ? void 0 : n.querySelector("video"), r = n == null ? void 0 : n.querySelector(".crs2-stage__video-play");
      r == null || r.addEventListener("click", () => {
        e && (e.controls = !0, e.play(), n == null || n.classList.add("crs2-stage__video-thumb--playing"), _("video_play", "stage", "click", "New 100 HMF V2"));
      });
    }
    bindMobileMenu() {
      const n = document.querySelector(".crs2-header"), e = n == null ? void 0 : n.querySelector("[data-crs2-mobile-toggle]");
      e == null || e.addEventListener("click", () => {
        n == null || n.classList.toggle("crs2-header--menu-open");
      }), n == null || n.querySelectorAll(".crs2-header__nav-link").forEach((r) => {
        r.addEventListener("click", () => n.classList.remove("crs2-header--menu-open"));
      });
    }
    bindAccordion() {
      L("[data-crs2-accordion-trigger]").on("click", (n) => {
        const e = n.currentTarget, r = e.closest("[data-crs2-accordion-item]"), s = e.closest("[data-crs2-accordion]"), o = r == null ? void 0 : r.classList.contains("crs2-funding-process__item--open");
        s == null || s.querySelectorAll("[data-crs2-accordion-item]").forEach((a) => a.classList.remove("crs2-funding-process__item--open")), o || r == null || r.classList.add("crs2-funding-process__item--open");
      });
    }
    bindLoadMore() {
      document.querySelectorAll("[data-crs2-load-more]").forEach((n) => {
        n.addEventListener("click", () => {
          const e = n.closest("section");
          e == null || e.classList.add(`${e.classList[0]}--show-all`), _("load_more_click", (e == null ? void 0 : e.classList[0]) || "unknown", "click", "New 100 HMF V2");
        });
      });
    }
    bindCtaClicks() {
      const n = {
        "crs2-hero": "hero",
        "crs2-people": "people",
        "crs2-why-tie": "why_tie",
        "crs2-dont-need": "dont_need",
        "crs2-first-deal": "first_deal"
      };
      document.querySelectorAll(".crs2_open_form, .crs2-hero__cta--primary").forEach((e) => {
        e.addEventListener("click", () => {
          var s;
          let r = "unknown";
          for (const [o, a] of Object.entries(n))
            if (e.closest(`.${o}`)) {
              r = a;
              break;
            }
          _("cta_click", r, "click", "New 100 HMF V2"), (s = document.querySelector(".crs2-get-started__form")) == null || s.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    }
    bindPhoneVerification() {
      const n = document.querySelector("[data-crs2-lead-form]"), e = n == null ? void 0 : n.querySelector("[data-crs2-phone-input]"), r = n == null ? void 0 : n.querySelector("[data-crs2-send-code]"), s = n == null ? void 0 : n.querySelector("[data-crs2-verify]"), o = s == null ? void 0 : s.querySelector("[data-crs2-verify-timer]"), a = s == null ? void 0 : s.querySelector("[data-crs2-verify-msg]"), d = s == null ? void 0 : s.querySelector("[data-crs2-verify-resend]"), c = s ? Array.from(s.querySelectorAll("[data-crs2-verify-digit]")) : [];
      if (!n || !e || !r || !s || !o || !a || !d) return;
      e.addEventListener("blur", () => {
        e.value.trim() && !$(e.value) && x(e, "Please enter a valid phone number");
      }), e.addEventListener("input", () => y(e));
      const v = () => {
        this.verifyTimeLeft = 59, d.disabled = !0, this.verifyTimerInterval && clearInterval(this.verifyTimerInterval), this.verifyTimerInterval = setInterval(() => {
          this.verifyTimeLeft--;
          const l = Math.floor(this.verifyTimeLeft / 60), p = this.verifyTimeLeft % 60;
          o.textContent = `${String(l).padStart(2, "0")}:${String(p).padStart(2, "0")}`, this.verifyTimeLeft <= 0 && (clearInterval(this.verifyTimerInterval), d.disabled = !1, o.textContent = "00:00");
        }, 1e3);
      }, g = async () => {
        var l;
        a.textContent = "", a.className = "crs2-get-started__verify-msg", this.normalizedPhone = q(e.value), s.classList.add("crs2-get-started__verify--active"), v(), c.forEach((p) => {
          p.value = "", p.disabled = !1;
        }), (l = c[0]) == null || l.focus(), await fetch("https://app.theinvestorsedge.com/phone/verify/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber: "+1" + this.normalizedPhone })
        }), _("exp_sms_send_code", "Send code", "click", "New 100 HMF V2");
      };
      r.addEventListener("click", () => {
        if (!$(e.value)) {
          x(e, "Please enter a valid phone number"), _("exp_sms_invalid_phone", "Invalid phone", "click", "New 100 HMF V2");
          return;
        }
        y(e), g();
      }), d.addEventListener("click", () => {
        d.disabled || g();
      });
      const z = async () => {
        var C;
        const l = c.map((f) => f.value).join("");
        if (l.length !== 4 || this.phoneChecking) return;
        this.phoneChecking = !0;
        const p = await fetch("https://app.theinvestorsedge.com/phone/verify/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber: "+1" + this.normalizedPhone, code: l })
        }).then((f) => f.json());
        p.success && ((C = p.verificationCheck) == null ? void 0 : C.status) === "approved" ? (this.phoneVerified = !0, c.forEach((f) => f.disabled = !0), this.verifyTimerInterval && clearInterval(this.verifyTimerInterval), d.style.display = "none", o.style.display = "none", a.innerHTML = `${i.verify_check} Phone verified`, a.className = "crs2-get-started__verify-msg crs2-get-started__verify-msg--success", _("exp_sms_verified", "Phone verified", "success", "New 100 HMF V2")) : (this.phoneChecking = !1, a.textContent = "Incorrect verification code", a.className = "crs2-get-started__verify-msg crs2-get-started__verify-msg--error");
      };
      c.forEach((l, p) => {
        l.addEventListener("input", () => {
          l.value = l.value.replace(/[^0-9]/g, ""), l.value.length === 1 && p < c.length - 1 && c[p + 1].focus(), z();
        }), l.addEventListener("keydown", (C) => {
          C.key === "Backspace" && l.value === "" && p > 0 && c[p - 1].focus();
        });
      });
    }
    bindForm() {
      const n = document.querySelector("[data-crs2-lead-form]"), e = n == null ? void 0 : n.querySelector(".crs2-get-started__submit"), r = n == null ? void 0 : n.querySelector('input[name="email"]'), s = n == null ? void 0 : n.querySelector("[data-crs2-phone-input]"), o = document.createElement("p");
      o.className = "crs2-get-started__submit-error", r == null || r.addEventListener("blur", () => {
        r.value.trim() && !I(r.value) && x(r, "Please enter a valid email address");
      }), r == null || r.addEventListener("input", () => y(r)), n == null || n.querySelectorAll("[required]").forEach((a) => {
        const d = () => y(a);
        a.addEventListener("input", d), a.addEventListener("change", d);
      }), n == null || n.addEventListener("submit", async (a) => {
        var l, p, C;
        a.preventDefault(), o.remove();
        const d = Array.from(n.querySelectorAll("[required]"));
        let c = null;
        if (d.forEach((f) => {
          f.value.trim() || (x(f, "This field is required"), c || (c = f));
        }), c) {
          c.focus();
          return;
        }
        if (r && !I(r.value)) {
          x(r, "Please enter a valid email address"), r.focus();
          return;
        }
        if (s && !$(s.value)) {
          x(s, "Please enter a valid phone number"), s.focus();
          return;
        }
        if (!this.phoneVerified) {
          o.textContent = "Please verify your phone number before submitting", (l = n.querySelector("[data-crs2-verify]")) == null || l.insertAdjacentElement("afterend", o);
          return;
        }
        const v = n.querySelector('input[name="consent"]');
        if (v && !v.checked) {
          o.textContent = "Please agree to be contacted before submitting", (p = n.querySelector(".crs2-get-started__consent")) == null || p.insertAdjacentElement("afterend", o);
          return;
        }
        const g = new FormData(n), z = {
          firstname: String(g.get("first_name") || ""),
          lastname: String(g.get("last_name") || ""),
          email: String(g.get("email") || ""),
          mobilephone: "+1" + this.normalizedPhone,
          your_state__united_states__: String(g.get("state") || ""),
          property_in_mind: String(g.get("has_property") || ""),
          how_much_experience_do_you_have_: String(g.get("experience") || ""),
          amount_of_money_to_invest_in_real_estate_: String(g.get("invest_amount") || ""),
          tcpa_consent: g.get("consent") ? "true" : "false"
        };
        e == null || e.setAttribute("disabled", "true");
        try {
          if (!(await fetch(
            `https://api.hsforms.com/submissions/v3/integration/submit/${d1}/${l1}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                fields: Object.entries(z).map(([h1, g1]) => ({ name: h1, value: g1 })),
                context: { pageUri: window.location.href, pageName: document.title }
              })
            }
          )).ok) throw new Error("HubSpot submit failed");
          _("form_submit", "get_prequalified", "submit", "New 100 HMF V2"), window.location.href = "https://www.theinvestorsedge.com/confirmed-hard-money-financing";
        } catch {
          o.textContent = "Something went wrong. Please try again.", (C = n.querySelector("[data-crs2-verify]")) == null || C.insertAdjacentElement("afterend", o);
        } finally {
          e == null || e.removeAttribute("disabled");
        }
      });
    }
    trackVisibility() {
      [
        { selector: ".crs2-hero", desc: "hero" },
        { selector: ".crs2-stage", desc: "stage" },
        { selector: ".crs2-how-works", desc: "how_works" },
        { selector: ".crs2-people", desc: "people" },
        { selector: ".crs2-borrowers-say", desc: "borrowers_say" },
        { selector: ".crs2-why-tie", desc: "why_tie" },
        { selector: ".crs2-funding-process", desc: "funding_process" },
        { selector: ".crs2-dont-need", desc: "dont_need" },
        { selector: ".crs2-first-deal", desc: "first_deal" },
        { selector: ".crs2-get-started", desc: "get_started" }
      ].forEach(({ selector: e, desc: r }) => {
        P(e, "block_view", "New 100 HMF V2", r);
      });
    }
  }
  new p1();
})();
//# sourceMappingURL=index.js.map
