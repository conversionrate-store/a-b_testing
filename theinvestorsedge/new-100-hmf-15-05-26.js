(function() {
  "use strict";
  const w = `.row-number-1,
.row-number-7,
.row-number-9,
.row-number-12 {
  display: none;
}

.pwr-header--padding {
  padding: 13px 0;
}

.pwr-header-logo__img {
  height: 50px;
  width: auto;
}

.crs-hero {
  position: relative;
  overflow: hidden;
  background: #09233e;
}
.crs-hero__container {
  position: relative;
  z-index: 1;
  margin: 0 auto;
  padding: 34px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  background: linear-gradient(rgba(9, 35, 62, 0.7), rgba(9, 35, 62, 0.7)), url("https://conversionrate-store.github.io/a-b_images/theinvestorsedge/bg.webp") no-repeat center;
  background-size: cover;
}
@media (max-width: 768px) {
  .crs-hero__container {
    background: #f4f6fa;
  }
}
.crs-hero__content {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
.crs-hero__label {
  font-size: 28px;
  line-height: 1;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.02em;
  text-align: center;
  margin: 0 0 12px;
}
@media (max-width: 768px) {
  .crs-hero__label {
    font-size: 16px;
    line-height: 1.75;
    color: #425b76;
    text-align: left;
    margin: 0;
  }
}
.crs-hero__title {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  color: #09233e;
  margin: 0 0 20px;
}
@media (min-width: 768px) {
  .crs-hero__title {
    text-transform: uppercase;
    font-size: 52px;
    text-align: center;
    color: #fff;
  }
}
.crs-hero__badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: #cfe2f3;
  padding: 12px 10px;
  margin: 0 auto 20px;
  max-width: 600px;
  width: 100%;
}
@media (min-width: 768px) {
  .crs-hero__badges {
    justify-content: center;
    padding: 12px 15px;
    gap: 12px;
  }
}
.crs-hero__badge {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #09233e;
  font-size: 16px;
  font-weight: 700;
}
.crs-hero__badge-img {
  width: 18px;
  height: 18px;
  -o-object-fit: contain;
     object-fit: contain;
}
.crs-hero__badge-sep {
  color: #09233e;
  font-size: 18px;
}
.crs-hero__desc {
  font-size: 18px;
  line-height: 1.6;
  color: #09233e;
  margin: 0 auto 28px;
  width: 100%;
  max-width: 680px;
}
@media (min-width: 768px) {
  .crs-hero__desc {
    font-size: 24px;
    text-align: center;
    color: #fff;
  }
}
.crs-hero__cta-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding-bottom: 20px;
}
@media (min-width: 768px) {
  .crs-hero__cta-wrap {
    padding: 0 100px 40px;
  }
}
.crs-hero__cta {
  width: 100%;
  max-width: 600px;
  padding: 15px 24px;
  background: #ff9902;
  color: #09233e;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
  text-transform: uppercase;
}
.crs-hero__cta:hover {
  background: #e68900;
}
.crs-hero__microcopy {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.crs-hero__microcopy-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
}
.crs-hero__microcopy-item svg {
  flex-shrink: 0;
  fill: #fff;
}
@media (max-width: 768px) {
  .crs-hero__microcopy-item svg {
    fill: #0d2034;
  }
}
@media (max-width: 768px) {
  .crs-hero__microcopy-item {
    color: #0d2034;
  }
}
.crs-hero__social-proof {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 24px 0 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .crs-hero__social-proof {
    background: #f4f6fa;
  }
}
.crs-hero__reviews-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;
}
@media (max-width: 768px) {
  .crs-hero__reviews-row {
    width: calc(100% - 40px);
    margin: 0 auto;
    gap: 20px;
  }
}
.crs-hero__google-rating {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.crs-hero__google-rating-top {
  display: flex;
  align-items: center;
  gap: 8px;
}
.crs-hero__google-logo {
  width: 28px;
  height: 28px;
  -o-object-fit: contain;
     object-fit: contain;
}
.crs-hero__rating-score {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}
@media (max-width: 768px) {
  .crs-hero__rating-score {
    color: #0d2034;
  }
}
.crs-hero__rating-count {
  font-size: 18px;
  color: #fff;
}
@media (max-width: 768px) {
  .crs-hero__rating-count {
    color: #0d2034;
  }
}
.crs-hero__bbb-logo {
  width: 99px;
  height: 69px;
  -o-object-fit: contain;
     object-fit: contain;
}
.crs-hero__testimonial-card {
  background: #cfe2f3;
  border-radius: 8px;
  overflow: hidden;
  max-width: 640px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .crs-hero__testimonial-card {
    width: calc(100% - 40px);
    margin: 0 auto 40px;
  }
}
.crs-hero__testimonial-inner {
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.crs-hero__testimonial-text {
  font-size: 16px;
  line-height: 1.6;
  color: #09233e;
  margin: 0;
}
.crs-hero__testimonial-author {
  font-size: 16px;
  color: #09233e;
  margin: 0;
}

.crs-hero-below {
  background: #09233e;
}
.crs-hero-below__container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}
@media (min-width: 768px) {
  .crs-hero-below__container {
    padding: 0;
  }
}
.crs-hero-below__problem {
  font-size: 24px;
  line-height: 32px;
  color: #fff;
  margin: 0 auto;
  max-width: 640px;
  padding: 60px 0;
}
@media (max-width: 768px) {
  .crs-hero-below__problem {
    font-size: 18px;
    padding: 32px 0;
  }
}
.crs-hero-below__featured {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 60px;
}
.crs-hero-below__featured-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}
.crs-hero-below__logos {
  display: flex;
  align-items: center;
  justify-content: center;
}
.crs-hero-below__logos-img {
  width: 100%;
  height: auto;
  display: block;
}
.crs-hero-below__logos-img--d {
  display: none;
}
@media (min-width: 768px) {
  .crs-hero-below__logos-img--m {
    display: none;
  }
  .crs-hero-below__logos-img--d {
    display: block;
  }
}
.crs-hero-below__video-section {
  margin-bottom: 40px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
.crs-hero-below__video-title {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
  margin: 0 auto 20px;
  max-width: 640px;
  border-top: 1px solid rgba(207, 226, 243, 0.3);
}
@media (min-width: 768px) {
  .crs-hero-below__video-title {
    font-size: 28px;
    text-align: center;
    padding-top: 60px;
  }
}
@media (max-width: 768px) {
  .crs-hero-below__video-title {
    margin-bottom: 0;
    padding-top: 32px;
    text-transform: capitalize;
  }
}
.crs-hero-below__video-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.crs-hero-below__video-embed {
  position: absolute;
  inset: 0;
  width: 100% !important;
  height: 100% !important;
}
.crs-hero-below__mistake-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 640px;
  width: 100%;
  margin: 32px auto 0;
  padding-bottom: 60px;
}
.crs-hero-below__mistake-title {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 0;
}
@media (min-width: 768px) {
  .crs-hero-below__mistake-title {
    font-size: 24px;
  }
}
.crs-hero-below__mistake-card {
  border-radius: 8px;
  background: #cfe2f3;
  padding: 20px 18px;
}
.crs-hero-below__mistake-text {
  font-size: 18px;
  line-height: 1.7;
  color: #09233e;
  margin: 0;
  font-weight: 500;
}
.crs-hero-below__arv-text {
  font-size: 18px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}
.crs-hero-below__arv-text strong {
  color: #fff;
  font-weight: 700;
}

.crs-first-deal {
  background: #fff;
}
.crs-first-deal__container {
  max-width: 640px;
  margin: 0 auto;
  padding: 48px 20px 0;
}
@media (min-width: 768px) {
  .crs-first-deal__container {
    padding: 64px 0 0;
  }
}
.crs-first-deal__title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.25;
  color: #09233e;
  margin: 0 0 32px;
}
@media (min-width: 768px) {
  .crs-first-deal__title {
    font-size: 38px;
    text-align: left;
  }
}
.crs-first-deal__house-wrap {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 40px;
  position: relative;
}
.crs-first-deal__house-wrap::after {
  content: "";
  position: absolute;
  background: #cfe2f3;
  height: 50%;
  width: 100%;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
}
@media (max-width: 768px) {
  .crs-first-deal__house-wrap::after {
    width: calc(100% + 40px);
    left: -20px;
  }
}
.crs-first-deal__house-img {
  position: relative;
  width: 100%;
  height: auto;
  display: block;
  z-index: 1;
}
.crs-first-deal__steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.crs-first-deal__step {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  position: relative;
}
.crs-first-deal__step:not(:last-child)::after {
  content: "";
  left: 16px;
  top: 30px;
  position: absolute;
  height: calc(100% + 24px);
  width: 1px;
  background: #cfe2f3;
}
.crs-first-deal__step::before {
  content: none !important;
}
.crs-first-deal__step-num {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #cfe2f3;
  color: #0d2034;
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}
.crs-first-deal__step-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}
.crs-first-deal__step-title {
  font-size: 20px;
  font-weight: 700;
  color: #09233e;
  margin: 0;
}
@media (min-width: 768px) {
  .crs-first-deal__step-title {
    font-size: 24px;
  }
}
.crs-first-deal__step-desc {
  font-size: 18px;
  line-height: 1.65;
  color: #3d4a5c;
  margin: 0;
}
.crs-first-deal__step-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #3d85c6;
  text-decoration: none;
}
.crs-first-deal__step-link:hover {
  text-decoration: underline;
  color: #3d85c6;
}
.crs-first-deal__step-link svg {
  flex-shrink: 0;
}
.crs-first-deal__testimonial {
  background: #cfe2f3;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
}
.crs-first-deal__testimonial-text {
  font-size: 16px;
  line-height: 1.6;
  color: #09233e;
  margin: 0;
}
.crs-first-deal__testimonial-author {
  font-size: 16px;
  color: #09233e;
  margin: 0;
  font-weight: 500;
}

.crs-do-qualify {
  background: #fff;
}
.crs-do-qualify__container {
  max-width: 640px;
  margin: 0 auto;
  padding: 48px 0 56px;
}
@media (max-width: 768px) {
  .crs-do-qualify__container {
    padding: 40px 20px 48px;
  }
}
.crs-do-qualify__title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.25;
  color: #09233e;
  margin: 0 0 16px;
}
@media (min-width: 768px) {
  .crs-do-qualify__title {
    font-size: 38px;
  }
}
.crs-do-qualify__intro {
  font-size: 18px;
  line-height: 1.6;
  color: #09233e;
  margin: 0 0 20px;
}
.crs-do-qualify__disq-box {
  background: #f4f6fa;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 24px;
}
@media (min-width: 768px) {
  .crs-do-qualify__disq-box {
    padding: 24px 28px;
  }
}
.crs-do-qualify__disq-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.crs-do-qualify__disq-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #09233e;
}
.crs-do-qualify__disq-item::before {
  content: "";
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff9902;
}
.crs-do-qualify__reassurance {
  font-size: 16px;
  line-height: 1.6;
  color: #09233e;
  font-weight: 400;
  margin: 0 0 28px;
}
.crs-do-qualify__benefits {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  background: #f4f6fa;
  border-radius: 10px;
  padding: 20px;
}
@media (min-width: 768px) {
  .crs-do-qualify__benefits {
    padding: 24px 28px;
  }
}
.crs-do-qualify__benefit {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 700;
  color: #09233e;
}
.crs-do-qualify__benefit svg {
  flex-shrink: 0;
}
.crs-do-qualify__cta-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-bottom: 32px;
}
.crs-do-qualify__cta {
  width: 100%;
  max-width: 480px;
  padding: 15px 24px;
  background: #ff9902;
  color: #09233e;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.2s;
}
.crs-do-qualify__cta:hover {
  background: #e68900;
}
.crs-do-qualify__microcopy {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.crs-do-qualify__microcopy-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #0d2034;
  font-size: 14px;
}
.crs-do-qualify__microcopy-item svg {
  flex-shrink: 0;
}
.crs-do-qualify__testimonial {
  background: #daedf8;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
@media (min-width: 768px) {
  .crs-do-qualify__testimonial {
    padding: 24px 28px;
  }
}
.crs-do-qualify__testimonial-text {
  font-size: 16px;
  line-height: 1.6;
  color: #09233e;
  margin: 0;
}
.crs-do-qualify__testimonial-author {
  font-size: 16px;
  color: #09233e;
  margin: 0;
}

.crs-qualify {
  background: #09233e;
}
.crs-qualify__container {
  max-width: 640px;
  margin: 0 auto;
  padding: 48px 20px 56px;
}
@media (min-width: 768px) {
  .crs-qualify__container {
    padding: 64px 0 80px;
  }
}
.crs-qualify__title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.25;
  color: #fff;
  margin: 0 0 28px;
}
@media (min-width: 768px) {
  .crs-qualify__title {
    font-size: 42px;
    text-align: center;
  }
}
.crs-qualify__badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(207, 226, 243, 0.4);
  border-radius: 8px;
  padding: 14px 20px;
  margin-bottom: 28px;
}
.crs-qualify__badge span {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}
.crs-qualify__badge svg {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
}
.crs-qualify__desc {
  font-size: 18px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 32px;
}
.crs-qualify__stats {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
@media (min-width: 768px) {
  .crs-qualify__stats {
    flex-direction: row;
    justify-content: space-between;
  }
}
.crs-qualify__stat {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}
.crs-qualify__stat svg {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-top: 2px;
}
.crs-qualify__stat-text {
  font-size: 18px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
}
.crs-qualify__stat-text strong {
  font-weight: 700;
}

.crs-reviews {
  background: #f4f6fa;
  padding: 60px 20px;
}
@media (max-width: 768px) {
  .crs-reviews {
    padding: 40px 20px;
  }
}
.crs-reviews__container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
.crs-reviews__title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.25;
  color: #09233e;
  margin: 0 auto 12px;
  max-width: 640px;
}
@media (min-width: 768px) {
  .crs-reviews__title {
    font-size: 42px;
  }
}
.crs-reviews__subtitle {
  font-size: 16px;
  color: #3d4a5c;
  margin: 0 auto 20px;
  max-width: 640px;
}
.crs-reviews__checklist {
  border-radius: 10px;
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #fff;
  max-width: 640px;
  margin: 0 auto 32px;
}
@media (min-width: 768px) {
  .crs-reviews__checklist {
    padding: 24px 28px;
    gap: 14px;
    margin-bottom: 24px;
  }
}
.crs-reviews__check-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
}
.crs-reviews__check-item svg {
  flex-shrink: 0;
}
.crs-reviews__check-item--yes {
  color: #09233e;
  font-weight: 700;
}
.crs-reviews__check-item--no {
  color: #425b76;
}
.crs-reviews__check-item--no span {
  text-decoration: line-through;
}
.crs-reviews__google-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  padding: 16px 20px;
  width: -moz-fit-content;
  width: fit-content;
  background: #fff;
  margin: 0 auto 4px;
}
@media (min-width: 768px) {
  .crs-reviews__google-badge {
    margin: 0 auto 48px;
  }
}
@media (max-width: 768px) {
  .crs-reviews__google-badge {
    background: none;
  }
}
.crs-reviews__google-logo {
  width: 60px;
  height: 60px;
  -o-object-fit: contain;
     object-fit: contain;
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .crs-reviews__google-logo {
    width: 32px;
    height: 32px;
  }
}
.crs-reviews__google-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.crs-reviews__google-score {
  font-size: 32px;
  font-weight: 700;
  color: #09233e;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}
.crs-reviews__google-score svg {
  height: 32px;
  width: auto;
}
@media (max-width: 768px) {
  .crs-reviews__google-score {
    font-size: 18px;
    margin-bottom: 4px;
  }
  .crs-reviews__google-score svg {
    height: 20px;
  }
}
.crs-reviews__google-count {
  font-size: 24px;
  color: #0d2034;
  font-weight: 700;
}
@media (max-width: 768px) {
  .crs-reviews__google-count {
    font-size: 18px;
    font-weight: 400;
  }
}
.crs-reviews__list {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.crs-reviews__divider {
  border: none;
  border-top: 1px solid #ff9902;
  margin: 42px 0;
}
@media (max-width: 768px) {
  .crs-reviews__divider {
    display: none;
  }
}
.crs-reviews__item {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
@media (min-width: 768px) {
  .crs-reviews__item {
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }
}
@media (max-width: 768px) {
  .crs-reviews__item {
    margin-bottom: 20px;
  }
}
@media (min-width: 768px) {
  .crs-reviews__item--reverse {
    flex-direction: row-reverse;
  }
}
.crs-reviews__item-video {
  width: 100%;
  flex-shrink: 0;
}
@media (min-width: 768px) {
  .crs-reviews__item-video {
    flex: 1;
    flex-shrink: 0;
  }
}
.crs-reviews__item-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
@media (max-width: 768px) {
  .crs-reviews__item-text {
    border-radius: 12px;
    background: #daedf8;
    padding: 20px;
  }
}
.crs-reviews__item-quote-icon {
  display: none;
}
@media (max-width: 768px) {
  .crs-reviews__item-quote-icon {
    display: block;
    line-height: 0;
    margin-bottom: 4px;
  }
}
.crs-reviews__item-name {
  font-size: 18px;
  font-weight: 700;
  color: #09233e;
  margin: 0;
}
@media (min-width: 768px) {
  .crs-reviews__item-name {
    font-size: 24px;
  }
}
@media (max-width: 768px) {
  .crs-reviews__item-name {
    display: none;
  }
}
.crs-reviews__item-desc {
  font-size: 16px;
  line-height: 1.7;
  color: #3d4a5c;
  margin: 0;
}
@media (min-width: 768px) {
  .crs-reviews__item-desc {
    font-size: 18px;
  }
}
.crs-reviews__item-author {
  display: none;
}
@media (max-width: 768px) {
  .crs-reviews__item-author {
    display: block;
    font-size: 16px;
    color: #09233e;
    margin: 4px 0 0;
  }
}
.crs-reviews__item--testimonial-only .crs-reviews__item-text {
  border-radius: 12px;
  background: #daedf8;
  padding: 20px;
}
.crs-reviews__item--testimonial-only .crs-reviews__item-quote-icon {
  display: block;
  line-height: 0;
  margin-bottom: 4px;
}
.crs-reviews__item--testimonial-only .crs-reviews__item-author {
  display: block;
  font-size: 16px;
  color: #09233e;
  margin: 4px 0 0;
}
.crs-reviews__cta-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
}
.crs-reviews__cta {
  width: 100%;
  max-width: 480px;
  padding: 15px 24px;
  background: #ff9902;
  color: #09233e;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.2s;
}
.crs-reviews__cta:hover {
  background: #e68900;
}
.crs-reviews__microcopy {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.crs-reviews__microcopy-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #09233e;
  font-size: 14px;
}
.crs-reviews__microcopy-item svg {
  flex-shrink: 0;
}

.crs-how-fund {
  background: #fff;
}
.crs-how-fund__container {
  max-width: 640px;
  margin: 0 auto;
  padding: 48px 20px 56px;
}
@media (min-width: 768px) {
  .crs-how-fund__container {
    padding: 64px 0 80px;
  }
}
.crs-how-fund__title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.25;
  color: #09233e;
  margin: 0 0 24px;
}
@media (min-width: 768px) {
  .crs-how-fund__title {
    font-size: 38px;
  }
}
.crs-how-fund__text {
  font-size: 18px;
  line-height: 1.7;
  color: #3d4a5c;
  margin: 0 0 20px;
}
.crs-how-fund__cost-box {
  background: #f4f6fa;
  border-radius: 10px;
  padding: 20px 18px;
  margin-bottom: 20px;
}
@media (min-width: 768px) {
  .crs-how-fund__cost-box {
    padding: 24px 28px;
  }
}
.crs-how-fund__cost-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.crs-how-fund__cost-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 16px;
  line-height: 1.6;
  color: #3d4a5c;
}
.crs-how-fund__cost-item p {
  margin: 0;
}
.crs-how-fund__cost-item strong {
  color: #09233e;
}
@media (min-width: 768px) {
  .crs-how-fund__cost-item {
    font-size: 16px;
  }
}
.crs-how-fund__cost-dot {
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ff9902;
  margin-top: 6px;
}
.crs-how-fund__callout {
  background: #f4f6fa;
  border-radius: 10px;
  padding: 20px 18px;
  margin-bottom: 32px;
}
@media (min-width: 768px) {
  .crs-how-fund__callout {
    padding: 24px 28px;
  }
}
.crs-how-fund__callout-text {
  font-size: 16px;
  line-height: 1.7;
  color: #3d4a5c;
  margin: 0;
}
.crs-how-fund__callout-text strong {
  color: #09233e;
}
@media (min-width: 768px) {
  .crs-how-fund__callout-text {
    font-size: 16px;
  }
}
.crs-how-fund__cta-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.crs-how-fund__cta {
  width: 100%;
  padding: 15px 24px;
  background: #ff9902;
  color: #09233e;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.2s;
}
.crs-how-fund__cta:hover {
  background: #e68900;
}
.crs-how-fund__microcopy {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.crs-how-fund__microcopy-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6b7a8d;
  font-size: 14px;
}
.crs-how-fund__microcopy-item svg {
  flex-shrink: 0;
}

.crs-what-100 {
  background: #09233e;
}
.crs-what-100__container {
  max-width: 640px;
  margin: 0 auto;
  padding: 48px 20px 56px;
}
@media (min-width: 768px) {
  .crs-what-100__container {
    padding: 64px 0 80px;
  }
}
.crs-what-100__title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.25;
  color: #fff;
  margin: 0 0 24px;
}
@media (min-width: 768px) {
  .crs-what-100__title {
    font-size: 38px;
  }
}
.crs-what-100__text {
  font-size: 18px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 18px;
}
.crs-what-100__lead {
  font-size: 18px;
  line-height: 1.6;
  color: #fff;
  margin: 0 0 24px;
}
.crs-what-100__lead strong {
  font-weight: 700;
}
@media (min-width: 768px) {
  .crs-what-100__lead {
    font-size: 24px;
  }
}
.crs-what-100__cost-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 28px;
}
.crs-what-100__cost-list + .crs-what-100__text {
  font-size: 14px;
}
.crs-what-100__cost-item {
  display: flex;
  align-items: center;
  gap: 16px;
}
.crs-what-100__cost-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.crs-what-100__cost-icon svg {
  width: 28px;
  height: 28px;
}
.crs-what-100__cost-label {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}/*# sourceMappingURL=style.css.map */`, g = (t, n, e, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: n,
      event_type: e,
      event_loc: s
    }), m(`Event: ${t} | ${n} | ${e} | ${s}`, "success");
  }, f = (t) => new Promise((n) => {
    const e = document.querySelector(t);
    e && n(e);
    const s = new MutationObserver(() => {
      const r = document.querySelector(t);
      r && (n(r), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), x = ({ name: t, dev: n }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class l {
    constructor(n) {
      this.elements = n instanceof l ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, e, s) {
      return typeof e == "function" && (s = e, e = ""), this.elements.forEach((r) => {
        r.addEventListener(n, function(o) {
          var a;
          if (e !== "") {
            let h = (a = o.target) == null ? void 0 : a.closest(e);
            h && (s == null || s.call(h, o));
          } else
            s == null || s.call(r, o);
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
        n(new l(e), this.elements.indexOf(e));
      return this;
    }
    style(n, e) {
      const s = n.split("-").map((r, o) => o === 0 ? r : r.charAt(0).toUpperCase() + r.slice(1)).join("");
      return this.elements.forEach(function(r) {
        r.style[s] = e;
      }), this;
    }
    find(n) {
      const e = this.elements.map((s) => Array.from(s.querySelectorAll(n)));
      return new l(e.flat());
    }
    attr(n, e) {
      return e ? (this.elements.forEach(function(s) {
        s.setAttribute(n, e);
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
  const d = (t) => new l(t), u = (t) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, v = (t, n, e, s, r = 1e3, o = 0.5) => {
    let a, h;
    if (a = new IntersectionObserver(
      function(_) {
        _[0].isIntersecting === !0 ? h = setTimeout(() => {
          g(
            n,
            _[0].target.dataset.visible || s || "",
            "view",
            e
          ), a.disconnect();
        }, r) : (m("Element is not fully visible", "warn"), clearTimeout(h));
      },
      { threshold: [o] }
    ), typeof t == "string") {
      const _ = document.querySelector(t);
      _ && a.observe(_);
    } else
      a.observe(t);
  }, m = (t, n = "info") => {
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
  }, i = {
    no_commitment: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" >
		<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2978 3.9395C14.4994 3.67817 13.412 3.66662 10.9997 3.66662C9.7058 3.66662 8.78129 3.66712 8.05272 3.71683C7.33238 3.76597 6.87077 3.86015 6.49571 4.01551C5.37266 4.48069 4.48041 5.37294 4.01522 6.49599C3.85987 6.87105 3.7657 7.33266 3.71655 8.05299C3.66684 8.78157 3.66634 9.70608 3.66634 11C3.66634 12.2938 3.66684 13.2184 3.71655 13.9469C3.7657 14.6673 3.85987 15.1289 4.01522 15.5039C4.48041 16.627 5.37266 17.5192 6.49571 17.9844C6.87077 18.1398 7.33238 18.2339 8.05272 18.2831C8.78129 18.3328 9.7058 18.3333 10.9997 18.3333C12.2935 18.3333 13.2181 18.3328 13.9467 18.2831C14.667 18.2339 15.1286 18.1398 15.5036 17.9844C16.6267 17.5192 17.5189 16.627 17.9841 15.5039C18.1395 15.1289 18.2336 14.6673 18.2828 13.9469C18.3326 13.2184 18.333 12.2938 18.333 11C18.333 10.298 18.333 9.70177 18.3246 9.18138C18.3164 8.67519 18.7202 8.25822 19.2264 8.25008C19.7326 8.24192 20.1496 8.64566 20.1577 9.15186C20.1663 9.68857 20.1663 10.299 20.1663 10.9941V11.0337C20.1663 12.2865 20.1663 13.2734 20.1119 14.0717C20.0563 14.8854 19.9412 15.5698 19.6779 16.2055C19.0266 17.7778 17.7775 19.0269 16.2052 19.6782C15.5695 19.9415 14.8851 20.0566 14.0714 20.1122C13.2731 20.1666 12.2862 20.1666 11.0335 20.1666H10.9658C9.71313 20.1666 8.72621 20.1666 7.92792 20.1122C7.11424 20.0566 6.42981 19.9415 5.79413 19.6782C4.22186 19.0269 2.9727 17.7778 2.32144 16.2055C2.05814 15.5698 1.94298 14.8854 1.88747 14.0717C1.833 13.2734 1.83301 12.2865 1.83301 11.0337V10.9662C1.83301 9.71341 1.833 8.72649 1.88747 7.9282C1.94298 7.11452 2.05814 6.43008 2.32144 5.7944C2.9727 4.22214 4.22186 2.97298 5.79413 2.32173C6.42981 2.05841 7.11424 1.94326 7.92792 1.88775C8.72621 1.83328 9.71313 1.83328 10.9659 1.83329H10.9997C11.066 1.83329 11.1318 1.83328 11.1968 1.83327C13.3506 1.83294 14.7548 1.83273 15.8682 2.19712C16.3492 2.3546 16.6117 2.8723 16.4542 3.35345C16.2967 3.83459 15.779 4.09698 15.2978 3.9395ZM20.0414 4.57964C20.2965 5.01695 20.1488 5.57823 19.7115 5.83332L19.5084 5.95185C16.213 7.8741 13.5654 10.7349 11.9037 14.169C11.7744 14.436 11.524 14.624 11.2315 14.6735C10.939 14.723 10.6406 14.6279 10.4307 14.4182L6.75169 10.7431C6.39353 10.3853 6.39321 9.80499 6.75101 9.44676C7.10879 9.08861 7.6892 9.08829 8.04737 9.44612L10.8437 12.2395C12.6729 8.97973 15.3426 6.25939 18.5845 4.36825L18.7878 4.24973C19.225 3.99464 19.7863 4.14235 20.0414 4.57964Z"/>
		</svg>`,
    no_credit: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
		<g clip-path="url(#clip0_293_3934)">
		<path d="M12.8544 16.01C13.3465 16.5022 12.998 17.3437 12.3019 17.3437H3.125C1.39908 17.3437 0 15.9447 0 14.2187V5.78124C0 5.5397 0.0276184 5.30441 0.0798034 5.07858C0.217438 4.48196 0.960235 4.272 1.39328 4.70504C1.58371 4.89547 1.66199 5.17028 1.60187 5.43273C1.57608 5.54489 1.5625 5.66146 1.5625 5.78124V6.8016H3.32245C3.52951 6.8016 3.72833 6.88384 3.87481 7.03048C4.36691 7.52258 4.0184 8.35937 3.32245 8.35937H1.5625V14.2187C1.5625 15.0816 2.26211 15.7812 3.125 15.7812H12.3019C12.5091 15.7812 12.708 15.8635 12.8544 16.01ZM18.4375 10.3172V8.3641H9.46899L16.8858 15.7809C17.7424 15.775 18.4375 15.0766 18.4375 14.2187C18.4375 13.7872 18.7872 13.4375 19.2187 13.4375C19.6502 13.4375 20 13.7872 20 14.2187C20 15.4809 19.2473 16.57 18.1676 17.0627L19.7711 18.6662C20.0763 18.9714 20.0763 19.4661 19.7711 19.7711C19.6187 19.9237 19.4188 20 19.2187 20C19.0188 20 18.8188 19.9237 18.6664 19.7711L0.228882 1.33362C-0.0762939 1.02859 -0.0762939 0.533905 0.228882 0.228882C0.533905 -0.0762939 1.02859 -0.0762939 1.33362 0.228882L3.76114 2.65625H16.875C18.5982 2.65625 20 4.05807 20 5.78124V10.3172C20 10.7487 19.6502 11.0985 19.2187 11.0985C18.7872 11.0985 18.4375 10.7487 18.4375 10.3172ZM18.4375 6.8016V5.78124C18.4375 4.91958 17.7365 4.21875 16.875 4.21875H5.32363L7.90649 6.8016H18.4375Z"/>
		</g>
		<defs>
		<clipPath id="clip0_293_3934">
		<rect width="20" height="20"/>
		</clipPath>
		</defs>
		</svg>`,
    stars: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" viewBox="0 0 100 20" fill="none">
		<path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FFD015"/>
		<path d="M30 0L32.2451 6.90983H39.5106L33.6327 11.1803L35.8779 18.0902L30 13.8197L24.1221 18.0902L26.3673 11.1803L20.4894 6.90983H27.7549L30 0Z" fill="#FFD015"/>
		<path d="M50 0L52.2451 6.90983H59.5106L53.6327 11.1803L55.8779 18.0902L50 13.8197L44.1221 18.0902L46.3673 11.1803L40.4894 6.90983H47.7549L50 0Z" fill="#FFD015"/>
		<path d="M70 0L72.2451 6.90983H79.5106L73.6327 11.1803L75.8779 18.0902L70 13.8197L64.1221 18.0902L66.3673 11.1803L60.4894 6.90983H67.7549L70 0Z" fill="#FFD015"/>
		<path d="M90 0L92.2451 6.90983H99.5106L93.6327 11.1803L95.8779 18.0902L90 13.8197L84.1221 18.0902L86.3673 11.1803L80.4894 6.90983H87.7549L90 0Z" fill="#FFD015"/>
		</svg>`,
    link: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path d="M11.5555 16H2.66665C1.95431 16 1.28467 15.7226 0.781023 15.2189C0.277378 14.7152 0 14.0456 0 13.3333V4.44444C0 3.73213 0.277409 3.06249 0.781054 2.55884C1.2847 2.0552 1.95434 1.77779 2.66668 1.77779H6.22223C6.71317 1.77779 7.11112 2.17574 7.11112 2.66668C7.11112 3.15763 6.71317 3.55558 6.22223 3.55558H2.66665C2.4292 3.55558 2.20601 3.64805 2.03815 3.81591C1.87029 3.98377 1.77779 4.20699 1.77779 4.44444V13.3333C1.77779 13.5708 1.87026 13.794 2.03815 13.9619C2.20601 14.1297 2.4292 14.2222 2.66665 14.2222H11.5555C11.7929 14.2222 12.0161 14.1297 12.184 13.9618C12.3519 13.794 12.4444 13.5707 12.4444 13.3333V9.77777C12.4444 9.28683 12.8423 8.88891 13.3333 8.88891C13.8242 8.88891 14.2222 9.28686 14.2222 9.77777V13.3333C14.2222 14.0456 13.9448 14.7152 13.4411 15.2189C12.9374 15.7226 12.2678 16 11.5555 16ZM6.22223 10.6666C5.99472 10.6666 5.76724 10.5799 5.5937 10.4063C5.24658 10.0592 5.24658 9.49633 5.5937 9.14921L12.9651 1.77779H9.77777C9.28683 1.77779 8.88891 1.37984 8.88891 0.888894C8.88891 0.397948 9.28683 0 9.77777 0H15.1111C15.234 0 15.3511 0.0249649 15.4576 0.0700819C15.557 0.112125 15.6504 0.173047 15.732 0.252878L15.7321 0.252941C15.7327 0.253531 15.7333 0.254089 15.7338 0.254679C15.734 0.254835 15.7342 0.255021 15.7344 0.255176C15.7348 0.255611 15.7353 0.256077 15.7357 0.256543C15.736 0.256853 15.7363 0.257132 15.7366 0.257443C15.737 0.257785 15.7373 0.258157 15.7376 0.258437C15.7382 0.259058 15.7389 0.25971 15.7395 0.260362C15.7402 0.260983 15.7408 0.261666 15.7415 0.262287C15.7418 0.262597 15.7422 0.263001 15.7424 0.263281C15.7428 0.263591 15.743 0.263871 15.7433 0.264181C15.7438 0.264647 15.7443 0.265082 15.7447 0.265578C15.7449 0.265703 15.7451 0.26592 15.7452 0.266075C15.7458 0.266665 15.7464 0.267255 15.7469 0.267845L15.747 0.267907C15.8268 0.349633 15.8878 0.442972 15.9298 0.542335C15.9749 0.64884 15.9999 0.765901 15.9999 0.888863V6.2222C15.9999 6.71314 15.6019 7.11109 15.111 7.11109C14.62 7.11109 14.2221 6.71314 14.2221 6.2222V3.03488L6.8506 10.4063C6.67719 10.5799 6.44971 10.6666 6.22223 10.6666Z" fill="#3D85C6"/>
		</svg>`,
    quote: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
		<path d="M6.26712 23.6003C4.93379 22.1336 4.13379 20.5336 4.13379 17.8669C4.13379 13.2003 7.46712 9.06693 12.1338 6.93359L13.3338 8.66693C8.93379 11.0669 8.00046 14.1336 7.73379 16.1336C8.40046 15.7336 9.33379 15.6003 10.2671 15.7336C12.6671 16.0003 14.5338 17.8669 14.5338 20.4003C14.5338 21.6003 14.0005 22.8003 13.2005 23.7336C12.2671 24.6669 11.2005 25.0669 9.86712 25.0669C8.40046 25.0669 7.06712 24.4003 6.26712 23.6003ZM19.6005 23.6003C18.2671 22.1336 17.4671 20.5336 17.4671 17.8669C17.4671 13.2003 20.8005 9.06693 25.4671 6.93359L26.6671 8.66693C22.2671 11.0669 21.3338 14.1336 21.0671 16.1336C21.7338 15.7336 22.6671 15.6003 23.6005 15.7336C26.0005 16.0003 27.8671 17.8669 27.8671 20.4003C27.8671 21.6003 27.3338 22.8003 26.5338 23.7336C25.7338 24.6669 24.5338 25.0669 23.2005 25.0669C21.7338 25.0669 20.4005 24.4003 19.6005 23.6003Z" fill="#59B4E5"/>
		</svg>`,
    check_white: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<g clip-path="url(#clip0_293_3731)">
		<path d="M17.3046 8.19232C17.6708 8.55853 17.6708 9.15216 17.3046 9.51819L11.0153 15.8077C10.649 16.1737 10.0556 16.1737 9.68939 15.8077L6.69543 12.8135C6.32922 12.4475 6.32922 11.8539 6.69543 11.4879C7.06146 11.1216 7.65509 11.1216 8.02112 11.4879L10.3522 13.819L15.9787 8.19232C16.3449 7.82629 16.9385 7.82629 17.3046 8.19232ZM24 12C24 18.633 18.6321 24 12 24C5.367 24 0 18.6321 0 12C0 5.367 5.36792 0 12 0C18.633 0 24 5.36792 24 12ZM22.125 12C22.125 6.40338 17.5959 1.875 12 1.875C6.40338 1.875 1.875 6.40411 1.875 12C1.875 17.5966 6.40411 22.125 12 22.125C17.5966 22.125 22.125 17.5959 22.125 12Z" fill="white"/>
		</g>
		<defs>
		<clipPath id="clip0_293_3731">
		<rect width="24" height="24" fill="white"/>
		</clipPath>
		</defs>
		</svg>`,
    parts: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
		<path d="M17.9934 0.131393L16.9397 0V15.0602H31.9999L31.8685 14.0065C30.9746 6.83718 25.2388 1.03495 17.9934 0.131393ZM18.815 13.1849V2.16392C24.3712 3.28476 28.7152 7.62879 29.836 13.185H18.815V13.1849Z" fill="white"/>
		<path d="M15.0646 0L14.0109 0.131393C6.1179 1.11572 0 7.89827 0 15.9978C0 24.809 7.19155 32 16.0022 32C20.828 32 23.8653 29.8687 24.4186 29.6452L15.0646 17.5528V0ZM21.5418 28.9912C19.8019 29.7351 17.9078 30.1247 16.0022 30.1247C8.21256 30.1247 1.87526 23.7874 1.87526 15.9978C1.87526 9.2512 6.66929 3.48198 13.1893 2.16405V18.1934L21.5418 28.9912Z" fill="white"/>
		<path d="M25.9484 28.558L26.6999 27.8772C29.5611 25.2856 31.3967 21.7739 31.8686 17.9892L32 16.9355H16.9695L25.9484 28.558ZM26.1706 25.7782L20.7879 18.8102H29.8351C29.304 21.4176 28.0326 23.8353 26.1706 25.7782Z" fill="white"/>
		</svg>`,
    profit: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
		<g clip-path="url(#clip0_293_3744)">
		<path d="M30.9996 17.6008C29.8492 16.629 28.1463 16.7408 27.1289 17.833L24.3736 20.791C24.0407 19.7208 23.0844 18.9233 21.9317 18.8235C22.4206 18.4817 22.8841 18.0954 23.3169 17.6666C25.2887 15.7126 26.3747 13.123 26.3747 10.3748C26.3747 4.69176 21.703 0 15.9998 0C10.3117 0 5.68751 4.67876 5.68751 10.3748C5.68751 12.9476 6.63889 15.3877 8.33783 17.2703C7.88295 17.5011 7.44964 17.788 7.04808 18.1314C6.53845 17.4098 5.69857 16.9372 4.75001 16.9372H0.937502C0.419751 16.9372 0 17.357 0 17.8747V31.0621C0 31.5798 0.419751 31.9996 0.937502 31.9996H4.74995C5.97732 31.9996 7.02289 31.2089 7.40589 30.1104C7.45689 30.119 7.50895 30.1246 7.56239 30.1246H21.6872C23.7417 30.1246 25.7043 29.1432 26.9399 27.4959L31.4379 21.4362C32.3313 20.2453 32.1413 18.5652 30.9996 17.6008ZM5.68745 29.1871C5.68745 29.7041 5.26689 30.1246 4.74995 30.1246H1.875V18.8123H4.74995C5.26689 18.8123 5.68745 19.2329 5.68745 19.7498V29.1871ZM7.56239 10.3749C7.56239 5.68801 11.3474 1.875 15.9998 1.875C20.6867 1.875 24.4997 5.68801 24.4997 10.3749C24.4997 14.8501 20.9714 18.522 16.5312 18.7954C16.3678 18.7641 16.2145 18.69 16.088 18.5786L15.6477 18.1911C14.1545 16.8771 12.2031 16.3583 10.347 16.632C8.57245 15.0291 7.56239 12.7719 7.56239 10.3749ZM29.9352 20.3149L25.4372 26.3747C24.5566 27.5488 23.1548 28.2497 21.6872 28.2497H7.56239V20.1736L8.2157 19.5987C9.98108 18.0451 12.6437 18.0451 14.409 19.5987C14.7277 19.8792 15.5921 20.6872 15.9998 20.6872C16.793 20.6872 21.1926 20.6872 21.6872 20.6872C22.2042 20.6872 22.6247 21.1078 22.6247 21.6247C22.6247 22.1417 22.2042 22.5622 21.6872 22.5622C21.0209 22.5622 15.6342 22.5622 14.962 22.5622C14.4442 22.5622 14.0245 22.982 14.0245 23.4997C14.0245 24.0175 14.4442 24.4372 14.962 24.4372C15.4592 24.4372 15.2732 24.4372 22.3156 24.4372C23.0933 24.4372 23.8434 24.1109 24.3735 23.5417L28.5009 19.111C28.8364 18.7509 29.3756 18.7188 29.7496 19.0002C30.1594 19.3084 30.2521 19.8923 29.9352 20.3149Z" fill="white"/>
		<path d="M15.9999 9.43739C15.483 9.43739 15.0624 9.01682 15.0624 8.49988C15.0624 8.10701 15.3103 7.75276 15.6791 7.61844C16.1606 7.44313 16.7212 7.68094 17.2169 8.27126C17.5499 8.6677 18.1413 8.7192 18.5378 8.3862C18.9342 8.0532 18.9857 7.46182 18.6527 7.06538C18.1459 6.46188 17.556 6.04707 16.9374 5.83882V4.75C16.9374 4.23225 16.5176 3.8125 15.9999 3.8125C15.4821 3.8125 15.0624 4.23225 15.0624 4.75V5.84825C15.054 5.85119 15.0456 5.85375 15.0373 5.85682C13.9309 6.25982 13.1875 7.32207 13.1875 8.49995C13.1875 10.0508 14.4492 11.3124 15.9999 11.3124C16.5169 11.3124 16.9374 11.733 16.9374 12.2499C16.9374 12.6275 16.7128 12.9666 16.365 13.114C15.9451 13.2916 15.4428 13.14 14.9863 12.6978C14.6144 12.3375 14.0209 12.3469 13.6607 12.7187C13.3004 13.0906 13.3098 13.6841 13.6816 14.0443C14.1049 14.4544 14.5754 14.7441 15.0624 14.9076V15.9998C15.0624 16.5176 15.4822 16.9373 15.9999 16.9373C16.5177 16.9373 16.9374 16.5176 16.9374 15.9998V14.9016C16.9906 14.8828 17.0436 14.8627 17.0962 14.8404C18.1388 14.3989 18.8124 13.382 18.8124 12.2499C18.8124 10.6991 17.5508 9.43739 15.9999 9.43739Z" fill="white"/>
		</g>
		<defs>
		<clipPath id="clip0_293_3744">
		<rect width="32" height="32" fill="white"/>
		</clipPath>
		</defs>
		</svg>`,
    check_orange: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
		<path d="M5.90803 15L0 9.00579L2.69239 6.27413L5.90803 9.54633L15.3076 0L18 2.73166L5.90803 15Z" fill="#FF9902"/>
		</svg>`,
    minus: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
		<path d="M0 9.93877V8.06143C0 7.41455 0.523828 6.88721 1.17422 6.88721H16.8258C17.4727 6.88721 18 7.41104 18 8.06143V9.93877C18 10.5856 17.4762 11.113 16.8258 11.113H1.17422C0.523828 11.113 0 10.5856 0 9.93877Z" fill="#FF2147"/>
		</svg>`,
    purchase: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
		<g clip-path="url(#clip0_246_3930)">
		<path d="M20.9995 18.5001H23.9991C24.2643 18.5001 24.5187 18.3948 24.7062 18.2073C24.8938 18.0197 24.9991 17.7654 24.9991 17.5001C24.9991 17.2349 24.8938 16.9806 24.7062 16.793C24.5187 16.6055 24.2643 16.5001 23.9991 16.5001H22.4993V16.0001C22.4996 15.8687 22.4739 15.7384 22.4238 15.6168C22.3737 15.4953 22.3001 15.3848 22.2072 15.2917C22.1144 15.1986 22.004 15.1248 21.8826 15.0744C21.7611 15.024 21.6309 14.998 21.4994 14.998C21.3679 14.998 21.2377 15.024 21.1163 15.0744C20.9948 15.1248 20.8845 15.1986 20.7916 15.2917C20.6988 15.3848 20.6252 15.4953 20.575 15.6168C20.5249 15.7384 20.4993 15.8687 20.4996 16.0001V16.5453C19.758 16.6704 19.0906 17.0695 18.6295 17.6636C18.1684 18.2577 17.9475 19.0033 18.0104 19.7527C18.0733 20.5021 18.4155 21.2004 18.9692 21.7093C19.5228 22.2182 20.2475 22.5005 20.9995 22.5001H21.9994C22.2646 22.5001 22.519 22.6055 22.7065 22.793C22.8941 22.9806 22.9994 23.2349 22.9994 23.5001C22.9994 23.7654 22.8941 24.0197 22.7065 24.2073C22.519 24.3948 22.2646 24.5001 21.9994 24.5001H18.9998C18.7345 24.5001 18.4802 24.6055 18.2926 24.793C18.1051 24.9806 17.9998 25.2349 17.9998 25.5001C17.9998 25.7654 18.1051 26.0197 18.2926 26.2073C18.4802 26.3948 18.7345 26.5001 18.9998 26.5001H20.4996V27.0001C20.4993 27.1316 20.5249 27.2619 20.575 27.3835C20.6252 27.505 20.6988 27.6155 20.7916 27.7086C20.8845 27.8017 20.9948 27.8755 21.1163 27.9259C21.2377 27.9763 21.3679 28.0022 21.4994 28.0022C21.6309 28.0022 21.7611 27.9763 21.8826 27.9259C22.004 27.8755 22.1144 27.8017 22.2072 27.7086C22.3001 27.6155 22.3737 27.505 22.4238 27.3835C22.4739 27.2619 22.4996 27.1316 22.4993 27.0001V26.455C23.2408 26.3299 23.9083 25.9308 24.3694 25.3367C24.8304 24.7426 25.0514 23.997 24.9885 23.2476C24.9256 22.4983 24.5834 21.7999 24.0297 21.291C23.4761 20.7821 22.7514 20.4998 21.9994 20.5001H20.9995C20.7343 20.5001 20.4799 20.3948 20.2924 20.2073C20.1049 20.0197 19.9995 19.7654 19.9995 19.5001C19.9995 19.2349 20.1049 18.9806 20.2924 18.793C20.4799 18.6055 20.7343 18.5001 20.9995 18.5001Z" fill="white"/>
		<path d="M30.9983 14.5C31.1737 14.4979 31.3456 14.4501 31.4968 14.3612C31.648 14.2723 31.7734 14.1454 31.8604 13.9931C31.9475 13.8408 31.9933 13.6684 31.9932 13.4929C31.9931 13.3175 31.9472 13.1451 31.86 12.9929L26.8606 4.49292C26.7724 4.34282 26.6464 4.21837 26.4953 4.13192C26.3441 4.04546 26.173 3.99998 25.9989 4H24.4991V1C24.4991 0.734805 24.3938 0.48047 24.2062 0.292937C24.0187 0.105405 23.7644 3.31494e-05 23.4992 0H19.4997C19.2345 3.31494e-05 18.9802 0.105405 18.7927 0.292937C18.6052 0.48047 18.4998 0.734805 18.4998 1V4H5.50147C5.31971 4 5.14139 4.04955 4.98569 4.14333C4.82999 4.23711 4.7028 4.37156 4.61781 4.53223L0.118356 13.0322C0.0397409 13.1848 0.00145769 13.355 0.00714439 13.5266C0.0128311 13.6982 0.0622988 13.8655 0.150847 14.0126C0.239395 14.1596 0.364082 14.2816 0.513059 14.3669C0.662036 14.4523 0.830355 14.4981 1.00202 14.5H3.00178V30C3.00178 30.2652 3.10712 30.5195 3.29463 30.7071C3.48214 30.8946 3.73646 31 4.00166 31H17.0572C19.2473 32.0302 21.7264 32.2707 24.0736 31.6805C26.4208 31.0903 28.4915 29.7059 29.9338 27.7624C31.3762 25.8189 32.1014 23.436 31.9863 21.0185C31.8713 18.6009 30.923 16.2977 29.3025 14.5H30.9983ZM2.66297 12.5L6.10345 6H18.4999V7C18.4996 7.13149 18.5252 7.26175 18.5753 7.38332C18.6254 7.50489 18.699 7.61538 18.7919 7.70847C18.8848 7.80155 18.9951 7.8754 19.1166 7.92579C19.238 7.97618 19.3682 8.00212 19.4997 8.00212C19.6312 8.00212 19.7614 7.97618 19.8829 7.92579C20.0043 7.8754 20.1147 7.80155 20.2075 7.70847C20.3004 7.61538 20.374 7.50489 20.4241 7.38332C20.4743 7.26175 20.4999 7.13149 20.4996 7V2H22.4993V7C22.499 7.13149 22.5247 7.26175 22.5748 7.38332C22.6249 7.50489 22.6985 7.61538 22.7914 7.70847C22.8843 7.80155 22.9946 7.8754 23.1161 7.92579C23.2375 7.97618 23.3677 8.00212 23.4992 8.00212C23.6307 8.00212 23.7609 7.97618 23.8824 7.92579C24.0038 7.8754 24.1141 7.80155 24.207 7.70847C24.2999 7.61538 24.3735 7.50489 24.4236 7.38332C24.4737 7.26175 24.4994 7.13149 24.4991 7V6H25.4272L29.25 12.5H26.8792C25.2563 11.5187 23.396 11 21.4995 11C19.603 11 17.7427 11.5187 16.1198 12.5H2.66297ZM5.00153 29V14.5H13.6964C11.883 16.5078 10.9187 19.1406 11.0062 21.8447C11.0938 24.5489 12.2265 27.1137 14.166 29H5.00153ZM29.9984 21.5C29.9982 23.1809 29.4996 24.824 28.5656 26.2215C27.6316 27.619 26.3042 28.7082 24.7512 29.3513C23.1982 29.9944 21.4894 30.1625 19.8408 29.8345C18.1922 29.5064 16.678 28.6969 15.4895 27.5082C14.301 26.3196 13.4916 24.8052 13.1638 23.1566C12.8359 21.508 13.0043 19.7992 13.6476 18.2463C14.2909 16.6934 15.3802 15.3661 16.7778 14.4323C18.1755 13.4984 19.8186 13 21.4995 13C23.7529 13.0027 25.9133 13.8991 27.5066 15.4926C29.0999 17.0861 29.9961 19.2466 29.9984 21.5Z" fill="white"/>
		<path d="M8.00105 8C7.80327 7.99999 7.60992 8.05862 7.44546 8.16849C7.281 8.27837 7.15282 8.43454 7.07712 8.61726C7.00142 8.79999 6.98161 9.00106 7.02018 9.19504C7.05876 9.38903 7.15399 9.56722 7.29384 9.70708C7.43369 9.84694 7.61188 9.94219 7.80586 9.98078C7.99984 10.0194 8.20091 9.99957 8.38364 9.92389C8.56637 9.8482 8.72256 9.72003 8.83244 9.55558C8.94233 9.39113 9.00098 9.19778 9.00098 9C9.00023 8.73503 8.89464 8.48112 8.70728 8.29375C8.51992 8.10638 8.26602 8.00077 8.00105 8Z" fill="white"/>
		</g>
		<defs>
		<clipPath id="clip0_246_3930">
		<rect width="32" height="32" fill="white"/>
		</clipPath>
		</defs>
		</svg>`,
    repair: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
		<g clip-path="url(#clip0_246_3937)">
		<path d="M4.50305 28.3948C5.02089 28.3948 5.44068 27.975 5.44068 27.4572C5.44068 26.9393 5.02089 26.5195 4.50305 26.5195C3.98522 26.5195 3.56543 26.9393 3.56543 27.4572C3.56543 27.975 3.98522 28.3948 4.50305 28.3948Z" fill="white"/>
		<path d="M31.7229 13.5329L23.7287 5.57687C23.4775 5.32687 23.1069 5.23987 22.7709 5.35193L20.5718 6.08493L21.3049 3.88593C21.4172 3.549 21.3295 3.1775 21.0783 2.92644L18.4263 0.274379C18.0359 -0.11612 17.3899 -0.086933 17.0376 0.343629C16.7811 0.657128 7.57076 11.9142 7.25283 12.3028C5.72121 14.1748 5.85596 16.8762 7.56633 18.5865L8.37989 19.4001L1.79146 24.3414C-0.147471 25.7955 -0.641782 28.6476 0.95534 30.5203C2.7089 32.5768 5.89427 32.4697 7.50376 30.3238L12.5608 23.5811L13.3743 24.3946C15.086 26.1063 17.7874 26.2385 19.6569 24.709L31.6543 14.9242C32.0852 14.5725 32.1167 13.9247 31.7229 13.5329ZM18.4704 23.2566C17.3472 24.1756 15.7264 24.0948 14.7002 23.0686L13.1222 21.4906C12.7186 21.087 12.0509 21.1353 11.7091 21.591L6.00339 29.1986C5.11833 30.3788 3.35965 30.4498 2.38202 29.3034C1.51234 28.2837 1.81246 26.6696 2.91646 25.8416L10.3698 20.2516C10.8263 19.9092 10.8731 19.2413 10.4701 18.8385L8.89214 17.2605C7.86595 16.2343 7.78514 14.6134 8.70408 13.4902L9.47895 12.5432L19.4188 22.483L18.4704 23.2566ZM20.8796 21.2918L10.6724 11.0847L11.8659 9.62605L22.3403 20.1005L20.8796 21.2918ZM23.8009 18.9092L13.0593 8.16749L17.8329 2.33306L19.3425 3.84268L18.1997 7.27099C17.9556 8.00324 18.6548 8.70074 19.3858 8.45705L22.8155 7.3138L29.6628 14.1283L23.8009 18.9092Z" fill="white"/>
		</g>
		<defs>
		<clipPath id="clip0_246_3937">
		<rect width="32" height="32" fill="white"/>
		</clipPath>
		</defs>
		</svg>`,
    loan: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
		<path d="M10.6404 9.64962L7.76778 12.5222L6.66291 11.4174C6.29684 11.0512 5.70322 11.0512 5.33709 11.4174C4.97097 11.7835 4.97097 12.3771 5.33709 12.7432L7.10484 14.5109C7.28791 14.6941 7.52778 14.7856 7.76772 14.7856C8.00759 14.7856 8.24759 14.694 8.43059 14.5109L11.9662 10.9754C12.3323 10.6094 12.3323 10.0157 11.9662 9.64962C11.6001 9.28349 11.0065 9.28343 10.6404 9.64962Z" fill="white"/>
		<path d="M10.6404 16.3195L7.76778 19.1921L6.66291 18.0873C6.29684 17.7211 5.70322 17.7211 5.33709 18.0873C4.97097 18.4534 4.97097 19.047 5.33709 19.4131L7.10484 21.1808C7.28791 21.364 7.52778 21.4555 7.76772 21.4555C8.00759 21.4555 8.24759 21.3639 8.43059 21.1808L11.9662 17.6453C12.3323 17.2793 12.3323 16.6856 11.9662 16.3195C11.6 15.9534 11.0065 15.9534 10.6404 16.3195Z" fill="white"/>
		<path d="M10.6404 22.9894L7.76778 25.862L6.66291 24.7572C6.29684 24.3911 5.70322 24.3911 5.33709 24.7572C4.97097 25.1233 4.97097 25.7169 5.33709 26.083L7.10484 27.8507C7.28791 28.0339 7.52778 28.1254 7.76772 28.1254C8.00759 28.1254 8.24759 28.0338 8.43059 27.8507L11.9662 24.3152C12.3323 23.9492 12.3323 23.3556 11.9662 22.9894C11.6 22.6233 11.0065 22.6233 10.6404 22.9894Z" fill="white"/>
		<path d="M25.4888 16.632L22.6162 19.5046L21.5113 18.3998C21.1452 18.0336 20.5516 18.0336 20.1855 18.3998C19.8194 18.7659 19.8194 19.3595 20.1855 19.7256L21.9532 21.4933C22.1363 21.6764 22.3762 21.768 22.6161 21.768C22.856 21.768 23.096 21.6765 23.279 21.4933L26.8145 17.9578C27.1806 17.5917 27.1806 16.9981 26.8145 16.632C26.4485 16.2659 25.8549 16.2659 25.4888 16.632Z" fill="white"/>
		<path d="M29.75 12.5C28.5653 12.5 27.5003 11.8418 26.9705 10.7823L26.8386 10.5183C26.6798 10.2006 26.3551 10 26 10H23.1875V6.5625C23.1875 5.01169 21.9258 3.75 20.375 3.75H18.8125V3.4375C18.8125 2.91975 18.3927 2.5 17.875 2.5C16.834 2.5 15.9306 1.79469 15.6781 0.784625L15.6594 0.71C15.5551 0.292687 15.1801 0 14.75 0H9.75C9.31987 0 8.94494 0.292688 8.84056 0.709938L8.82181 0.78475C8.56938 1.79469 7.666 2.5 6.625 2.5C6.10725 2.5 5.6875 2.91975 5.6875 3.4375V3.75H4.125C2.57419 3.75 1.3125 5.01169 1.3125 6.5625V29.1875C1.3125 30.7383 2.57419 32 4.125 32H20.375C21.9258 32 23.1875 30.7383 23.1875 29.1875V28.0721C23.2019 28.0764 23.2162 28.0811 23.2306 28.0854C23.3185 28.1118 23.4093 28.125 23.5 28.125C23.5907 28.125 23.6815 28.1118 23.7694 28.0854C25.7841 27.4811 27.5127 26.2696 28.7682 24.5821C30.0238 22.8945 30.6875 20.8907 30.6875 18.7873V13.4375C30.6875 12.9198 30.2677 12.5 29.75 12.5ZM7.5625 4.26831C8.838 3.97331 9.9055 3.0875 10.4266 1.875H14.0734C14.5946 3.08744 15.6621 3.97337 16.9375 4.26831V5.625H7.5625V4.26831ZM21.3125 29.1875C21.3125 29.7044 20.8919 30.125 20.375 30.125H4.125C3.60806 30.125 3.1875 29.7044 3.1875 29.1875V6.5625C3.1875 6.04556 3.60806 5.625 4.125 5.625H5.6875V6.5625C5.6875 7.08025 6.10725 7.5 6.625 7.5H17.875C18.3927 7.5 18.8125 7.08025 18.8125 6.5625V5.625H20.375C20.8919 5.625 21.3125 6.04556 21.3125 6.5625V10H21C20.6449 10 20.3202 10.2006 20.1614 10.5183L20.0295 10.7821C19.4997 11.8418 18.4347 12.5 17.25 12.5C16.7323 12.5 16.3125 12.9198 16.3125 13.4375V18.7873C16.3125 20.8907 16.9762 22.8945 18.2318 24.5821C19.0674 25.7052 20.1129 26.6172 21.3125 27.2799V29.1875ZM28.8125 18.7873C28.8125 22.1783 26.6893 25.1239 23.5 26.2036C20.3107 25.1239 18.1875 22.1783 18.1875 18.7873V14.2876C19.6063 14.0198 20.8398 13.1501 21.5703 11.8749H25.4297C26.1602 13.1501 27.3937 14.0198 28.8125 14.2876V18.7873Z" fill="white"/>
		</svg>`
  }, p = "https://conversionrate-store.github.io/a-b_images/theinvestorsedge/", c = {
    google: `${p}google-logo.webp`,
    a_rating: `${p}a-rating.webp`,
    house: `${p}house.webp`,
    clients_d: `${p}clients_d.svg`,
    clients_m: `${p}clients_m.svg`
  }, C = (
    /*html*/
    `
  <div class="crs-hero">
    <div class="crs-hero__container">
      <div class="crs-hero__content">
        <p class="crs-hero__label">For first-time flippers — no property needed</p>
        <h1 class="crs-hero__title">Start Your First Flip — Even With No Experience or Deal</h1>
        <div class="crs-hero__badges">
          <div class="crs-hero__badge">
            <span>Guided deal finding</span>
          </div>
          <div class="crs-hero__badge">
          	<span class="crs-hero__badge-sep">·</span>
            <span>Low upfront cash</span>
          </div>
          <div class="crs-hero__badge">
          	<span class="crs-hero__badge-sep">·</span>
            <span>No credit minimum</span>
          </div>
        </div>
        <p class="crs-hero__desc"><b>We lend up to 100%</b> of purchase, rehab, and closing costs on qualifying deals — most borrowers close with little or no money out of pocket.</p>
        <div class="crs-hero__cta-wrap">
          <button class="crs-hero__cta crs_open_quiz">See If This Is A Fit For You</button>
          <div class="crs-hero__microcopy">
            <span class="crs-hero__microcopy-item">${i.no_commitment} No commitment</span>
            <span class="crs-hero__microcopy-item">${i.no_credit} No credit pull yet</span>
          </div>
        </div>
      </div>
    </div>
		<div class="crs-hero__social-proof">
        <div class="crs-hero__reviews-row">
          <div class="crs-hero__google-rating">
            <div class="crs-hero__google-rating-top">
              <img src="${c.google}" alt="Google" class="crs-hero__google-logo" />
              ${i.stars}
              <span class="crs-hero__rating-score">4.8/5</span>
            </div>
            <span class="crs-hero__rating-count">Based on 1060+&nbsp;reviews</span>
          </div>
          <img src="${c.a_rating}" alt="BBB A+ Rating" class="crs-hero__bbb-logo" />
        </div>
        <div class="crs-hero__testimonial-card">
          <div class="crs-hero__testimonial-inner">
            ${i.quote}
            <p class="crs-hero__testimonial-text">The entire process, from finding the deal to securing the funds, was incredibly smooth and efficient</p>
            <p class="crs-hero__testimonial-author"><b>Stephanie Y</b> · Bradley, West Virginia</p>
          </div>
        </div>
      </div>
  </div>
  <div class="crs-hero-below">
    <div class="crs-hero-below__container">
      <p class="crs-hero-below__problem">Most people who want to get into real estate never get their first deal — not because they aren't capable, but because they don't know where to start, what kind of deal to look for, or how funding actually works</p>
      
      <div class="crs-hero-below__featured">
        <p class="crs-hero-below__featured-label">Featured in:</p>
        <div class="crs-hero-below__logos">
          <img src="${c.clients_m}" alt="Featured in" class="crs-hero-below__logos-img crs-hero-below__logos-img--m" />
          <img src="${c.clients_d}" alt="Featured in" class="crs-hero-below__logos-img crs-hero-below__logos-img--d" />
        </div>
      </div>
      
      <div class="crs-hero-below__video-section">
        <h2 class="crs-hero-below__video-title">Watch: how beginners are getting into their first deal without experience</h2>
        <div class="crs-hero-below__video-wrap">
          
        </div>
      </div>
      <div class="crs-hero-below__mistake-section">
        <h3 class="crs-hero-below__mistake-title">The Biggest Mistake Beginners Make</h3>
        <div class="crs-hero-below__mistake-card">
          <p class="crs-hero-below__mistake-text">Most people think they need funding before they even start. In reality, the biggest problem is not knowing what kind of deal to look for in the first place.</p>
        </div>
        <p class="crs-hero-below__arv-text"><strong>We use the 74% ARV rule:</strong> total project cost (purchase + rehab) at or below 74% of after-repair value. We tell you the box. You find deals that fit. The funding part takes care of itself.</p>
      </div>
    </div>
  </div>
`
  ), b = (
    /*html*/
    `
  <div class="crs-first-deal">
    <div class="crs-first-deal__container">
      <h2 class="crs-first-deal__title">Here's a simple way to think about getting into your first deal</h2>
      <div class="crs-first-deal__house-wrap">
        <img src="${c.house}" alt="House" class="crs-first-deal__house-img" />
      </div>
      <ol class="crs-first-deal__steps">
        <li class="crs-first-deal__step">
          <div class="crs-first-deal__step-num">1</div>
          <div class="crs-first-deal__step-content">
            <h3 class="crs-first-deal__step-title">Tell us your goals</h3>
            <p class="crs-first-deal__step-desc">Answer a few quick questions about your goals and experience. We'll match you with the right funding tier and rates — before you even find a property.</p>
          </div>
        </li>
        <li class="crs-first-deal__step">
          <div class="crs-first-deal__step-num">2</div>
          <div class="crs-first-deal__step-content">
            <h3 class="crs-first-deal__step-title">Find your first deal — together</h3>
            <p class="crs-first-deal__step-desc">We help you find a distressed home below market value. You'll get our deal-finding software, skip tracing tools, and marketing templates — plus our team to guide you through it.</p>
          </div>
        </li>
        <li class="crs-first-deal__step">
          <div class="crs-first-deal__step-num">3</div>
          <div class="crs-first-deal__step-content">
            <h3 class="crs-first-deal__step-title">We evaluate it for you</h3>
            <p class="crs-first-deal__step-desc">Desktop evaluation, virtual walkthrough, on-site check. If it qualifies, we issue a Letter of Intent. Most deals close in ~15 business days.</p>
            <a href="https://www.theinvestorsedge.com/our-funding-process" class="crs-first-deal__step-link">${i.link} Learn more about our funding process</a>
          </div>
        </li>
        <li class="crs-first-deal__step">
          <div class="crs-first-deal__step-num">4</div>
          <div class="crs-first-deal__step-content">
            <h3 class="crs-first-deal__step-title">We fund up to 100%</h3>
            <p class="crs-first-deal__step-desc">No monthly payments — interest rolls into the loan. Loans up to $350k or 74% of ARV (After Repair Value — the estimated price after renovation). Minimum ARV $50k.</p>
            <div class="crs-first-deal__testimonial">
              ${i.quote}
              <p class="crs-first-deal__testimonial-text">I had a great experience with The Investor's Edge! I was able to obtain 100% financing for my fix and flip project</p>
              <p class="crs-first-deal__testimonial-author"><b>Ashton C.</b> · Independence, Kansas</p>
            </div>
          </div>
        </li>
        <li class="crs-first-deal__step">
          <div class="crs-first-deal__step-num">5</div>
          <div class="crs-first-deal__step-content">
            <h3 class="crs-first-deal__step-title">Renovate with full support</h3>
            <p class="crs-first-deal__step-desc">Your Investment Associate, vetted contractor bids, and our rehab estimator keep the project on track. You're not alone.</p>
          </div>
        </li>
        <li class="crs-first-deal__step">
          <div class="crs-first-deal__step-num">6</div>
          <div class="crs-first-deal__step-content">
            <h3 class="crs-first-deal__step-title">Sell, repay, and keep the profit</h3>
            <p class="crs-first-deal__step-desc">Our members' median profit is $47,884 per flip — with top performers exceeding $100k.<br />Results vary.</p>
            <div class="crs-first-deal__testimonial">
              ${i.quote}
              <p class="crs-first-deal__testimonial-text">We do always take one trip after a flip... flipping homes has allowed me to provide those types of opportunities for myself and my family</p>
              <p class="crs-first-deal__testimonial-author"><b>Ed H.</b> · New Mexico</p>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </div>
`
  ), y = (
    /*html*/
    `
  <div class="crs-do-qualify">
    <div class="crs-do-qualify__container">
      <h2 class="crs-do-qualify__title">Do You Qualify?</h2>
      <p class="crs-do-qualify__intro">We're asset-based — your deal matters more than your past. The only things that disqualify you:</p>
      <div class="crs-do-qualify__disq-box">
        <ul class="crs-do-qualify__disq-list">
          <li class="crs-do-qualify__disq-item">Active bankruptcy</li>
          <li class="crs-do-qualify__disq-item">Foreclosure</li>
          <li class="crs-do-qualify__disq-item">Active judgments</li>
          <li class="crs-do-qualify__disq-item">Tax liens</li>
          <li class="crs-do-qualify__disq-item">Open collections</li>
        </ul>
      </div>
      <p class="crs-do-qualify__reassurance">Anything else, including bad credit and no experience, is fine.</p>
      <div class="crs-do-qualify__benefits">
        <div class="crs-do-qualify__benefit">
          ${i.check_orange}
          <span>No prepayment penalties</span>
        </div>
        <div class="crs-do-qualify__benefit">
          ${i.check_orange}
          <span>Closes in ~15 days</span>
        </div>
        <div class="crs-do-qualify__benefit">
          ${i.check_orange}
          <span>Loans from $50k to $350k ARV</span>
        </div>
      </div>
      <div class="crs-do-qualify__cta-wrap">
        <button class="crs-do-qualify__cta crs_open_quiz">See If This Is A Fit For You</button>
        <div class="crs-do-qualify__microcopy">
          <span class="crs-do-qualify__microcopy-item">${i.no_commitment} No commitment</span>
          <span class="crs-do-qualify__microcopy-item">${i.no_credit} No credit pull yet</span>
        </div>
      </div>
      <div class="crs-do-qualify__testimonial">
        ${i.quote}
        <p class="crs-do-qualify__testimonial-text">I went from a part-time salary to well over a six-figure income. We brought zero dollars to the table on this deal... $55-60k profit</p>
        <p class="crs-do-qualify__testimonial-author"><b>Lauren</b> · Indianapolis</p>
      </div>
    </div>
  </div>
`
  ), k = (
    /*html*/
    `
  <div class="crs-qualify">
    <div class="crs-qualify__container">
      <h2 class="crs-qualify__title">100% Financing Is Real.<br>Here's the Catch.</h2>
      <div class="crs-qualify__badge">
        ${i.check_white}
        <span>Your deal has to qualify</span>
      </div>
      <p class="crs-qualify__desc">We lend based on the property's after-repair value — not your credit score, savings, or experience. If the numbers work, we fund up to 100% of purchase, rehab, and closing costs. If they don't, we tell you exactly why.</p>
      <div class="crs-qualify__stats">
        <div class="crs-qualify__stat">
          ${i.parts}
          <p class="crs-qualify__stat-text"><strong>37% of our borrowers close with $0 out of pocket.</strong></p>
        </div>
        <div class="crs-qualify__stat">
          ${i.profit}
          <p class="crs-qualify__stat-text"><strong>Our members have profited $40k–$100k on a single flip.</strong></p>
        </div>
      </div>
    </div>
  </div>
`
  ), L = (
    /*html*/
    `
  <div class="crs-reviews">
    <div class="crs-reviews__container">
      <h2 class="crs-reviews__title">Real People. Real Deals.<br>Real Money.</h2>
      <p class="crs-reviews__subtitle">Most of them started with just:</p>
      <div class="crs-reviews__checklist">
        <div class="crs-reviews__check-item crs-reviews__check-item--yes">
          ${i.check_orange}
          <span>Willingness to find a qualifying property — we help you spot one</span>
        </div>
        <div class="crs-reviews__check-item crs-reviews__check-item--yes">
          ${i.check_orange}
          <span>Drive to see a deal through</span>
        </div>
        <div class="crs-reviews__check-item crs-reviews__check-item--no">
          ${i.minus}
          <span>A property in mind or under contract</span>
        </div>
        <div class="crs-reviews__check-item crs-reviews__check-item--no">
          ${i.minus}
          <span>Perfect credit</span>
        </div>
        <div class="crs-reviews__check-item crs-reviews__check-item--no">
          ${i.minus}
          <span>Savings / A down payment</span>
        </div>
        <div class="crs-reviews__check-item crs-reviews__check-item--no">
          ${i.minus}
          <span>Prior flipping experience</span>
        </div>
      </div>
      <div class="crs-reviews__google-badge">
        
        <div class="crs-reviews__google-text">
          <span class="crs-reviews__google-score"><img src="${c.google}" alt="Google" class="crs-reviews__google-logo" />
        ${i.stars}4.8/5</span>
          <span class="crs-reviews__google-count">Based on 1060+&nbsp;reviews</span>
        </div>
      </div>
      <div class="crs-reviews__list">
        <div class="crs-reviews__item crs-reviews__item--reverse">
          <div class="crs-reviews__item-video">
            <script src="https://fast.wistia.com/player.js" async><\/script><script src="https://fast.wistia.com/embed/6kt8w9xnkt.js" async type="module"><\/script><style>wistia-player[media-id='6kt8w9xnkt']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/6kt8w9xnkt/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }</style> <wistia-player media-id="6kt8w9xnkt" aspect="1.7777777777777777"></wistia-player>
          </div>
          <div class="crs-reviews__item-text">
            <span class="crs-reviews__item-quote-icon">${i.quote}</span>
            <h3 class="crs-reviews__item-name">Delisa's review:</h3>
            <p class="crs-reviews__item-desc">Delisa is an IT administrator by trade. She was looking to do some house flips in the Chicago area and was looking for lenders who could finance her fix and flip houses. That's where she discovered The Investor's Edge and became a member. This house was an older house so she did a full rehab. She also increased the bedroom/bathroom count from a 3 bedroom 1 bathroom to a 4 bedroom 2 bathroom house. She is expecting to make between $40,000 to $75,000 on this deal.</p>
            <p class="crs-reviews__item-author"><b>Delisa M.</b></p>
          </div>
        </div>
        <div class="crs-reviews__divider"></div>
        <div class="crs-reviews__item ">
          <div class="crs-reviews__item-video">
            <script src="https://fast.wistia.com/player.js" async><\/script><script src="https://fast.wistia.com/embed/61bclpy8ng.js" async type="module"><\/script><style>wistia-player[media-id='61bclpy8ng']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/61bclpy8ng/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }</style> <wistia-player media-id="61bclpy8ng" aspect="1.7777777777777777"></wistia-player>
          </div>
          <div class="crs-reviews__item-text">
            <span class="crs-reviews__item-quote-icon">${i.quote}</span>
            <h3 class="crs-reviews__item-name">Ptolemy's review:</h3>
            <p class="crs-reviews__item-desc">Ptolemy has 20 years experience as a teacher, but wanted to start supplementing his teacher salary with some real estate deals. He researched a lot of hard money lenders, but chose The Investor's Edge for his first deal because we work with 1st time flippers and walk them through the process. He is expecting to make around $80,000 to $100,000 in profit on this flip. He wants to do more flips to upgrade his lifestyle for himself, his wife, and his kids. Watch his experience now.</p>
            <p class="crs-reviews__item-author"><b>Ptolemy T.</b></p>
          </div>
        </div>
        <div class="crs-reviews__divider"></div>
        <div class="crs-reviews__item crs-reviews__item--reverse">
          <div class="crs-reviews__item-video">
            <script src="https://fast.wistia.com/player.js" async><\/script><script src="https://fast.wistia.com/embed/eqvi2hrbm0.js" async type="module"><\/script><style>wistia-player[media-id='eqvi2hrbm0']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/eqvi2hrbm0/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }</style> <wistia-player media-id="eqvi2hrbm0" aspect="1.7777777777777777"></wistia-player>
          </div>
          <div class="crs-reviews__item-text">
            <span class="crs-reviews__item-quote-icon">${i.quote}</span>
            <h3 class="crs-reviews__item-name">Charles's review:</h3>
            <p class="crs-reviews__item-desc">Charles chose to work with us because we help beginners get their first flip done successfully. He was able to get $167,000 in funding to buy and fix-up this house. He is expecting to make around $70,000 on this flip. He wants to do more flips with us so he can free up more of his time to spend with his family. Watch his experience now.</p>
            <p class="crs-reviews__item-author"><b>Charles F.</b></p>
          </div>
        </div>
      </div>
      <div class="crs-reviews__cta-wrap">
        <button class="crs-reviews__cta crs_open_quiz">See If This Is A Fit For You</button>
        <div class="crs-reviews__microcopy">
          <span class="crs-reviews__microcopy-item">${i.no_commitment} No commitment</span>
          <span class="crs-reviews__microcopy-item">${i.no_credit} No credit pull yet</span>
        </div>
      </div>
    </div>
  </div>
`
  ), q = (
    /*html*/
    `
  <div class="crs-how-fund">
    <div class="crs-how-fund__container">
      <h2 class="crs-how-fund__title">How Beginners Can Get Deals Funded Without Using Their Own Money</h2>
      <p class="crs-how-fund__text">A hard money loan is a short-term financing option based on real estate value — not your credit score. The property is the collateral, which makes it far more accessible than a traditional mortgage.</p>
      <p class="crs-how-fund__text">When evaluating any hard money deal, there are three costs to understand:</p>
      <div class="crs-how-fund__cost-box">
        <ul class="crs-how-fund__cost-list">
          <li class="crs-how-fund__cost-item">
            <span class="crs-how-fund__cost-dot"></span>
            <p><strong>Purchase cost</strong> — what you pay to acquire the property, including closing costs</p>
          </li>
          <li class="crs-how-fund__cost-item">
            <span class="crs-how-fund__cost-dot"></span>
            <p><strong>Repair costs</strong> — contractor work, cosmetic upgrades, maintenance</p>
          </li>
          <li class="crs-how-fund__cost-item">
            <span class="crs-how-fund__cost-dot"></span>
            <p><strong>Loan &amp; closing costs</strong> — title insurance, fees, and everything it takes to close</p>
          </li>
        </ul>
      </div>
      <p class="crs-how-fund__text">Most hard money lenders call it "100% financing" when they cover the purchase price — but still expect you to bring repair costs and closing costs out of pocket.</p>
      <div class="crs-how-fund__callout">
        <p class="crs-how-fund__callout-text">We do it differently. At The Investor's Edge, <strong>about 37% of our deals qualify for genuine 100% financing</strong> — purchase, repairs, and closing costs covered. For the rest, our average cash-to-close is just $2,183.</p>
      </div>
      <div class="crs-how-fund__cta-wrap">
        <button class="crs-how-fund__cta crs_open_quiz">See If This Is A Fit For You</button>
        <div class="crs-how-fund__microcopy">
          <span class="crs-how-fund__microcopy-item">${i.no_commitment} No commitment</span>
          <span class="crs-how-fund__microcopy-item">${i.no_credit} No credit pull yet</span>
        </div>
      </div>
    </div>
  </div>
`
  ), z = (
    /*html*/
    `
  <div class="crs-what-100">
    <div class="crs-what-100__container">
      <h2 class="crs-what-100__title">What does 100% financing mean?</h2>
      <p class="crs-what-100__text">We've covered what hard money is but what exactly is a 100% hard money financed loan</p>
      <p class="crs-what-100__text">This can be a little trickier because every hard money lender has their own definition.</p>
      <p class="crs-what-100__lead"><strong>There are three different categories of costs for completing a fix-and-flip deal:</strong></p>
      <div class="crs-what-100__cost-list">
        <div class="crs-what-100__cost-item">
          <div class="crs-what-100__cost-icon">${i.purchase}</div>
          <span class="crs-what-100__cost-label">Purchase Price</span>
        </div>
        <div class="crs-what-100__cost-item">
          <div class="crs-what-100__cost-icon">${i.repair}</div>
          <span class="crs-what-100__cost-label">Repair Costs</span>
        </div>
        <div class="crs-what-100__cost-item">
          <div class="crs-what-100__cost-icon">${i.loan}</div>
          <span class="crs-what-100__cost-label">Loan/Closing Costs</span>
        </div>
      </div>
      <p class="crs-what-100__text">For most hard money lenders, 100% financing means they lend up to 100% of just the purchase price of the property. They'll lend perhaps 90% of the repair costs, and then the borrower also brings the loan/closing costs to the table as well.</p>
    </div>
  </div>
`
  ), H = (
    /*html*/
    `
	<section class="crs_new_content_block">
		${C}
		${b}
		${y}
		${k}
		${L}
		${q}
		${z}
	</section>
`
  );
  x({ name: "New 100 HMF", dev: "YK" }), u("new_100_hmf");
  class $ {
    constructor() {
      this.init();
    }
    async init() {
      await f("body"), d("head").elements[0].insertAdjacentHTML("beforeend", `<style>${w}</style>`), await f(".row-number-1"), d(".row-number-1").elements[0].insertAdjacentHTML("beforebegin", H), await f("#hs_cos_wrapper_widget_1675359451364"), d(".crs-hero-below__video-wrap").elements[0].appendChild(d("#hs_cos_wrapper_widget_1675359451364").elements[0]), d('[href="#application"]').elements.forEach((n) => {
        n.innerText = "See if this is a fit for you", n.addEventListener("click", (e) => {
          const s = document.querySelector(".pwr-sec-form__content");
          e.preventDefault(), s && s.scrollIntoView({ behavior: "instant", block: "start" });
        });
      }), this.bindCtaClicks(), this.trackVisibility();
    }
    bindCtaClicks() {
      const n = {
        "crs-hero": "hero",
        "crs-do-qualify": "do_qualify",
        "crs-reviews": "reviews",
        "crs-how-fund": "how_fund"
      };
      document.querySelectorAll(".crs_open_quiz").forEach((e) => {
        e.addEventListener("click", () => {
          let s = "unknown";
          for (const [o, a] of Object.entries(n))
            if (e.closest(`.${o}`)) {
              s = a;
              break;
            }
          g("cta_click", s, "click", "New 100 HMF");
          const r = document.querySelector(".pwr-sec-form__content");
          r && r.scrollIntoView({ behavior: "instant", block: "start" });
        });
      });
    }
    trackVisibility() {
      [
        { selector: ".crs-hero", desc: "hero" },
        { selector: ".crs-hero-below", desc: "hero_below" },
        { selector: ".crs-first-deal", desc: "first_deal" },
        { selector: ".crs-do-qualify", desc: "do_qualify" },
        { selector: ".crs-qualify", desc: "qualify" },
        { selector: ".crs-reviews", desc: "reviews" },
        { selector: ".crs-how-fund", desc: "how_fund" },
        { selector: ".crs-what-100", desc: "what_100" }
      ].forEach(({ selector: e, desc: s }) => {
        v(e, "block_view", "New 100 HMF", s);
      });
    }
  }
  new $();
})();
//# sourceMappingURL=index.js.map
