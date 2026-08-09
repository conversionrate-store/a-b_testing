(function() {
  "use strict";
  const h = `.base-popup.exitLayer {
  display: none;
}

.ab360-exit-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(16, 24, 40, 0.6);
  align-items: center;
  justify-content: center;
  z-index: 999999;
  display: none;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}
.ab360-exit-overlay.active {
  display: flex;
}

.ab360-exit {
  --ink: #101828;
  --ink-2: #47536b;
  --blue: #1a65e8;
  --blue-2: #2563eb;
  --panel: #f1f2f4;
  --cycle: 8.4s;
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1080px;
  margin: auto;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  color: var(--ink);
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
}
@media (max-width: 900px) {
  .ab360-exit {
    flex-direction: column;
    max-height: 90vh;
    overflow-y: auto;
  }
}

.ab360-exit__close {
  position: absolute;
  right: 22px;
  top: 22px;
  z-index: 5;
  opacity: 0.85;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px;
  line-height: 0;
}
.ab360-exit__close:hover {
  opacity: 1;
}

.ab360-exit__left {
  width: 50%;
  flex: none;
  box-sizing: border-box;
  padding: 48px 44px;
  display: flex;
  flex-direction: column;
}
@media (max-width: 900px) {
  .ab360-exit__left {
    width: 100%;
    padding: 40px 32px 24px;
  }
}
@media (max-width: 560px) {
  .ab360-exit__left {
    padding: 36px 20px 20px;
  }
}

.ab360-exit__badges {
  display: flex;
  gap: 10px;
  margin-bottom: 26px;
  flex-wrap: wrap;
}

.ab360-exit__badge {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 13px;
  border-radius: 9px;
  background: #eff4fe;
  color: var(--blue-2);
  font-size: 13.5px;
  font-weight: 600;
}
.ab360-exit__badge svg {
  flex: none;
}

.ab360-exit__headline {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.12;
  margin: 0;
}
@media (max-width: 560px) {
  .ab360-exit__headline {
    font-size: 30px;
  }
}

.ab360-exit__slot {
  position: relative;
  height: 50px;
  overflow: hidden;
  margin-top: 2px;
}
@media (max-width: 560px) {
  .ab360-exit__slot {
    height: 38px;
  }
}

.ab360-exit__word {
  position: absolute;
  left: 0;
  top: 0;
  color: var(--blue-2);
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.2;
  white-space: nowrap;
  opacity: 0;
  animation: ab360ExitSwap var(--cycle) cubic-bezier(0.3, 0.8, 0.3, 1) infinite;
}
@media (max-width: 560px) {
  .ab360-exit__word {
    font-size: 30px;
  }
}
.ab360-exit__word--w1 {
  animation-delay: 0s;
}
.ab360-exit__word--w2 {
  animation-delay: -6.3s;
}
.ab360-exit__word--w3 {
  animation-delay: -4.2s;
}
.ab360-exit__word--w4 {
  animation-delay: -2.1s;
}

@keyframes ab360ExitSwap {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  4.3% {
    opacity: 1;
    transform: translateY(0);
  }
  20.7% {
    opacity: 1;
    transform: translateY(0);
  }
  25% {
    opacity: 0;
    transform: translateY(30px);
  }
  25.01% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px);
  }
}
.ab360-exit__subtitle {
  font-size: 16px;
  line-height: 1.5;
  color: var(--ink-2);
  margin: 20px 0 0;
  max-width: 400px;
}

.ab360-exit__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
  width: 100%;
  max-width: 440px;
  height: 58px;
  border-radius: 10px;
  background: var(--blue);
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.2px;
  box-shadow: 0 10px 24px rgba(26, 101, 232, 0.28);
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
}
.ab360-exit__cta:hover {
  background: var(--blue-2);
}
@media (max-width: 560px) {
  .ab360-exit__cta {
    height: 52px;
    font-size: 15px;
  }
}

.ab360-exit__trust {
  margin-top: 20px;
  min-height: 26px;
}

.ab360-exit__right {
  position: relative;
  flex: 1;
  background: var(--panel);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 90px 60px 50px;
  box-sizing: border-box;
}
@media (max-width: 900px) {
  .ab360-exit__right {
    padding: 24px;
  }
}
@media (max-width: 560px) {
  .ab360-exit__right {
    display: none;
  }
}

.ab360-exit__stage {
  position: relative;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 480/360;
}

.ab360-exit__visual {
  position: absolute;
  inset: 0;
  border-radius: 14px;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 18px 40px rgba(16, 24, 40, 0.16);
  animation: ab360ExitSwap var(--cycle) cubic-bezier(0.3, 0.8, 0.3, 1) infinite;
}
.ab360-exit__visual--v1 {
  animation-delay: 0s;
}
.ab360-exit__visual--v2 {
  animation-delay: -6.3s;
}
.ab360-exit__visual--v3 {
  animation-delay: -4.2s;
}
.ab360-exit__visual--v4 {
  animation-delay: -2.1s;
}

.ab360-exit__caption {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-2);
}

.yt-scene {
  --dur: 2.1s;
  --bg: #0f0f0f;
  --video: #181818;
  --surface: #282828;
  --text: #fff;
  --text-2: #aaa;
  --track: #4d4d4d;
  --yt-red: #ff0000;
  --green: #16a34a;
  --flagged: #ffc933;
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--bg);
  color: var(--text);
}
.yt-scene .yt-screen {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 86px;
  background: var(--video);
  overflow: hidden;
}
.yt-scene .yt-frame {
  position: absolute;
  inset: 0;
  background: linear-gradient(150deg, #2b3a8f 0%, #5b3fa8 52%, #8c3a6b 100%);
}
.yt-scene .yt-frame i {
  position: absolute;
  border-radius: 50%;
}
.yt-scene .yt-frame i:nth-child(1) {
  width: 240px;
  height: 240px;
  left: -60px;
  top: -80px;
  background: rgba(255, 255, 255, 0.12);
}
.yt-scene .yt-frame i:nth-child(2) {
  width: 150px;
  height: 150px;
  right: 30px;
  top: 36px;
  background: rgba(0, 0, 0, 0.2);
}
.yt-scene .yt-frame i:nth-child(3) {
  width: 110px;
  height: 110px;
  left: 170px;
  bottom: -40px;
  background: rgba(255, 255, 255, 0.09);
}
.yt-scene .yt-scrim {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 130px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
}
.yt-scene .yt-logo {
  position: absolute;
  left: 20px;
  top: 18px;
  height: 20px;
}
.yt-scene .yt-logo img {
  height: 20px;
  width: auto;
  display: block;
}
.yt-scene .yt-notif {
  position: absolute;
  right: 16px;
  top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 13px;
  border-radius: 10px;
  background: var(--surface);
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: -0.1px;
  white-space: nowrap;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.5);
  opacity: 0;
  animation: ytNotifIn var(--dur) cubic-bezier(0.2, 0.9, 0.2, 1) infinite;
}
.yt-scene .yt-notif .yt-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  animation: ytDotPulse var(--dur) ease-out infinite;
}
.yt-scene .yt-controls {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 14px 16px 16px;
  box-sizing: border-box;
  background: var(--bg);
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.yt-scene .yt-bar-row {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.yt-scene .yt-part {
  height: 4px;
  border-radius: 2px;
}
.yt-scene .yt-part.yt-played {
  flex: 0 0 36%;
  background: var(--yt-red);
  position: relative;
}
.yt-scene .yt-part.yt-played::after {
  content: "";
  position: absolute;
  right: -5px;
  top: 50%;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--yt-red);
  transform: translateY(-50%);
}
.yt-scene .yt-part.yt-rest {
  flex: 1;
  background: var(--track);
}
.yt-scene .yt-seg {
  position: relative;
  flex: none;
  width: 126px;
  height: 18px;
  margin: 0 8px;
  border-radius: 5px;
  background: var(--flagged);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8.5px;
  font-weight: 800;
  letter-spacing: 0.7px;
  color: #3b2c00;
  white-space: nowrap;
  animation: ytSeg var(--dur) cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.yt-scene .yt-seg .yt-lbl {
  animation: ytLbl var(--dur) linear infinite;
}
.yt-scene .yt-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.yt-scene .yt-row svg {
  display: block;
}
.yt-scene .yt-ctrl {
  display: flex;
  align-items: center;
  gap: 16px;
}
.yt-scene .yt-time {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-2);
  font-variant-numeric: tabular-nums;
}

@keyframes ytNotifIn {
  0%, 40% {
    opacity: 0;
    transform: translateX(12px) scale(0.94);
  }
  47.1% {
    opacity: 1;
    transform: translateX(0) scale(1.03);
  }
  51.4% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  96% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  99%, 100% {
    opacity: 0;
    transform: translateX(12px) scale(0.94);
  }
}
@keyframes ytDotPulse {
  0%, 44.3% {
    box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.55);
  }
  62.9% {
    box-shadow: 0 0 0 7px rgba(22, 163, 74, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
  }
}
@keyframes ytSeg {
  0% {
    width: 126px;
    margin: 0 8px;
    opacity: 1;
    transform: scale(1);
  }
  11.4% {
    transform: scale(1.045);
  }
  22.9% {
    transform: scale(1);
  }
  28.6% {
    width: 126px;
    margin: 0 8px;
    opacity: 1;
    transform: scale(1.03);
  }
  41.4% {
    width: 0;
    margin: 0;
    opacity: 0;
    transform: scale(0.5);
  }
  96% {
    width: 0;
    margin: 0;
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    width: 126px;
    margin: 0 8px;
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes ytLbl {
  0%, 28.6% {
    opacity: 1;
  }
  35.7%, 96% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.sp-scene {
  --dur: 2.1s;
  --bg: #121212;
  --surface: #282828;
  --text: #fff;
  --text-2: #a7a7a7;
  --track: #4d4d4d;
  --sp-green: #1db954;
  --flagged: #ffc933;
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--bg);
  color: var(--text);
}
.sp-scene .sp-screen {
  position: absolute;
  inset: 0;
  bottom: 104px;
  overflow: hidden;
  background: #0c2a2e;
}
.sp-scene .sp-cover {
  position: absolute;
  inset: 0;
  background: linear-gradient(155deg, #1db954 0%, #0f6e63 48%, #102e52 100%);
}
.sp-scene .sp-cover i {
  position: absolute;
  border-radius: 50%;
}
.sp-scene .sp-cover i:nth-child(1) {
  width: 230px;
  height: 230px;
  left: -40px;
  top: -70px;
  background: rgba(255, 255, 255, 0.13);
}
.sp-scene .sp-cover i:nth-child(2) {
  width: 150px;
  height: 150px;
  right: 26px;
  top: 46px;
  background: rgba(0, 0, 0, 0.2);
}
.sp-scene .sp-cover i:nth-child(3) {
  width: 96px;
  height: 96px;
  left: 150px;
  bottom: -30px;
  background: rgba(255, 255, 255, 0.09);
}
.sp-scene .sp-scrim {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 130px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 100%);
}
.sp-scene .sp-logo {
  position: absolute;
  left: 20px;
  top: 18px;
  height: 20px;
}
.sp-scene .sp-logo img {
  height: 20px;
  width: auto;
  display: block;
  filter: brightness(0) invert(1);
}
.sp-scene .sp-notif {
  position: absolute;
  right: 16px;
  top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 13px;
  border-radius: 10px;
  background: var(--surface);
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: -0.1px;
  white-space: nowrap;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.5);
  opacity: 0;
  animation: spNotifIn var(--dur) cubic-bezier(0.2, 0.9, 0.2, 1) infinite;
}
.sp-scene .sp-notif .sp-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--sp-green);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  animation: spDotPulse var(--dur) ease-out infinite;
}
.sp-scene .sp-np {
  position: absolute;
  left: 20px;
  bottom: 114px;
  display: flex;
  align-items: center;
  gap: 12px;
  line-height: 1.4;
}
.sp-scene .sp-thumb {
  width: 48px;
  height: 48px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  flex: none;
  background: #123b63;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.45);
}
.sp-scene .sp-thumb i {
  position: absolute;
  border-radius: 50%;
}
.sp-scene .sp-thumb i:nth-child(1) {
  width: 34px;
  height: 34px;
  left: -6px;
  top: -8px;
  background: rgba(29, 185, 84, 0.9);
}
.sp-scene .sp-thumb i:nth-child(2) {
  width: 22px;
  height: 22px;
  right: 5px;
  bottom: 5px;
  background: rgba(255, 255, 255, 0.28);
}
.sp-scene .sp-np .sp-t {
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: var(--text);
}
.sp-scene .sp-np .sp-a {
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.72);
  margin-top: 3px;
}
.sp-scene .sp-controls {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px 16px 18px;
  box-sizing: border-box;
  background: #000;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.sp-scene .sp-transport {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  margin-bottom: 16px;
  height: 34px;
}
.sp-scene .sp-transport svg {
  display: block;
}
.sp-scene .sp-play {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
}
.sp-scene .sp-bar-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.sp-scene .sp-time {
  font-size: 11.5px;
  font-weight: 500;
  color: var(--text-2);
  font-variant-numeric: tabular-nums;
  min-width: 28px;
}
.sp-scene .sp-time.sp-time--right {
  text-align: right;
}
.sp-scene .sp-adslot {
  position: relative;
  flex: none;
  width: 124px;
  height: 18px;
  margin-right: 9px;
  border-radius: 5px;
  background: var(--flagged);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 1.4px;
  color: #3b2c00;
  animation: spAdSlot var(--dur) cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.sp-scene .sp-adslot .sp-lbl {
  animation: spLbl var(--dur) linear infinite;
}
.sp-scene .sp-track {
  position: relative;
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background: var(--track);
}
.sp-scene .sp-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2%;
  background: #fff;
  border-radius: 2px;
}

@keyframes spNotifIn {
  0%, 40% {
    opacity: 0;
    transform: translateX(12px) scale(0.94);
  }
  47.1% {
    opacity: 1;
    transform: translateX(0) scale(1.03);
  }
  51.4% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  96% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  99%, 100% {
    opacity: 0;
    transform: translateX(12px) scale(0.94);
  }
}
@keyframes spDotPulse {
  0%, 44.3% {
    box-shadow: 0 0 0 0 rgba(29, 185, 84, 0.55);
  }
  62.9% {
    box-shadow: 0 0 0 7px rgba(29, 185, 84, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(29, 185, 84, 0);
  }
}
@keyframes spAdSlot {
  0% {
    width: 124px;
    margin-right: 9px;
    opacity: 1;
    transform: scale(1);
  }
  11.4% {
    transform: scale(1.045);
  }
  22.9% {
    transform: scale(1);
  }
  28.6% {
    width: 124px;
    margin-right: 9px;
    opacity: 1;
    transform: scale(1.03);
  }
  41.4% {
    width: 0;
    margin-right: 0;
    opacity: 0;
    transform: scale(0.5);
  }
  96% {
    width: 0;
    margin-right: 0;
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    width: 124px;
    margin-right: 9px;
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes spLbl {
  0%, 28.6% {
    opacity: 1;
  }
  35.7%, 96% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.web-scene {
  --dur: 2.1s;
  --ink: #101828;
  --green: #16a34a;
  --flagged: #ffc933;
  --skeleton: #e3e7ef;
  position: relative;
  width: 100%;
  height: 100%;
  background: #e7ecf7;
  color: var(--ink);
}
.web-scene .web-screen {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(120deg, #edf1fa 0%, #dfe6f7 55%, #d3dcf2 100%);
}
.web-scene .web-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0.6;
}
.web-scene .web-blob.web-b1 {
  width: 300px;
  height: 300px;
  background: #9fb6f2;
  left: -70px;
  top: -80px;
  animation: webD1 10s ease-in-out infinite;
}
.web-scene .web-blob.web-b2 {
  width: 260px;
  height: 260px;
  background: #8fc6e8;
  right: -60px;
  top: 10px;
  animation: webD2 12s ease-in-out infinite;
}
.web-scene .web-blob.web-b3 {
  width: 230px;
  height: 230px;
  background: #bdb1f5;
  left: 150px;
  bottom: -120px;
  animation: webD3 14s ease-in-out infinite;
}
.web-scene .web-window {
  position: absolute;
  left: 24px;
  right: 24px;
  top: 26px;
  height: 246px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 14px 34px rgba(16, 24, 40, 0.14);
}
.web-scene .web-chrome {
  height: 28px;
  background: #f1f3f7;
  border-bottom: 1px solid #e5e8ef;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 12px;
  box-sizing: border-box;
}
.web-scene .web-chrome i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d6dae3;
  display: block;
}
.web-scene .web-chrome .web-url {
  height: 12px;
  border-radius: 6px;
  background: #e5e8ef;
  flex: 1;
  margin-left: 10px;
  max-width: 210px;
}
.web-scene .web-page {
  position: relative;
  height: 218px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.web-scene .web-body {
  display: flex;
  flex: 1;
}
.web-scene .web-main {
  flex: 1;
  display: flex;
  gap: 12px;
}
.web-scene .web-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 2px;
}
.web-scene .web-col b {
  display: block;
  height: 8px;
  border-radius: 4px;
  background: var(--skeleton);
}
.web-scene .web-col b.web-s {
  width: 70%;
}
.web-scene .web-col b.web-m {
  width: 88%;
}
.web-scene .web-col .web-h {
  height: 11px;
  width: 55%;
  background: #cfd6e3;
  border-radius: 5px;
  margin-bottom: 2px;
}
.web-scene .web-side {
  width: 132px;
  margin-left: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  animation: webHideSide var(--dur) cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.web-scene .web-ad {
  position: relative;
  flex: none;
  min-width: 132px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #8a6a00;
  border: 1px dashed #e0a900;
  background: rgba(255, 201, 51, 0.3);
  animation: webAdBox var(--dur) ease-out infinite;
}
.web-scene .web-ad:first-child {
  height: 96px;
}
.web-scene .web-ad:last-child {
  height: 72px;
}
.web-scene .web-ad .web-lbl {
  animation: webLblOut var(--dur) ease-out infinite;
}
.web-scene .web-x {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 6px;
}
.web-scene .web-x i {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 4px;
}
.web-scene .web-x i span {
  display: block;
  width: 100%;
  height: 100%;
  background: #e5342b;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left center;
  animation: webDraw var(--dur) cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.web-scene .web-x i:last-child span {
  transform-origin: right center;
  animation-delay: calc(var(--dur) * 0.01);
}
.web-scene .web-ad.web-a2 .web-x i {
  width: 141px;
  margin-left: -70.5px;
  margin-top: -2px;
}
.web-scene .web-ad.web-a2 .web-x i:first-child {
  transform: rotate(34.6deg);
}
.web-scene .web-ad.web-a2 .web-x i:last-child {
  transform: rotate(-34.6deg);
}
.web-scene .web-ad.web-a3 .web-x i {
  width: 129px;
  margin-left: -64.5px;
  margin-top: -2px;
}
.web-scene .web-ad.web-a3 .web-x i:first-child {
  transform: rotate(25.8deg);
}
.web-scene .web-ad.web-a3 .web-x i:first-child span {
  animation-delay: calc(var(--dur) * 0.02);
}
.web-scene .web-ad.web-a3 .web-x i:last-child {
  transform: rotate(-25.8deg);
}
.web-scene .web-ad.web-a3 .web-x i:last-child span {
  animation-delay: calc(var(--dur) * 0.03);
}
.web-scene .web-notif {
  position: absolute;
  right: 36px;
  top: 44px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 13px;
  border-radius: 10px;
  background: var(--ink);
  color: #fff;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: -0.1px;
  white-space: nowrap;
  box-shadow: 0 8px 22px rgba(16, 24, 40, 0.28);
  opacity: 0;
  animation: webNotifIn var(--dur) cubic-bezier(0.2, 0.9, 0.2, 1) infinite;
}
.web-scene .web-notif .web-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  animation: webDotPulse var(--dur) ease-out infinite;
}
.web-scene .web-pill {
  position: absolute;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 999px;
  background: var(--ink);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.15px;
  white-space: nowrap;
  box-shadow: 0 12px 30px rgba(16, 24, 40, 0.3);
  animation: webPillPulse var(--dur) ease-out infinite;
}
.web-scene .web-pill svg {
  flex: none;
}

@keyframes webD1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(60px, 45px) scale(1.15);
  }
}
@keyframes webD2 {
  0%, 100% {
    transform: translate(0, 0) scale(1.1);
  }
  50% {
    transform: translate(-55px, 45px) scale(0.92);
  }
}
@keyframes webD3 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(45px, -40px) scale(1.18);
  }
}
@keyframes webHideSide {
  0%, 41.4% {
    width: 132px;
    margin-left: 14px;
  }
  50% {
    width: 0;
    margin-left: 0;
  }
  96% {
    width: 0;
    margin-left: 0;
  }
  100% {
    width: 132px;
    margin-left: 14px;
  }
}
@keyframes webAdBox {
  0%, 7.1% {
    opacity: 1;
    transform: scale(1);
    border-color: #e0a900;
    background: rgba(255, 201, 51, 0.3);
  }
  12.9% {
    opacity: 1;
    transform: scale(1.035);
    border-color: #e0a900;
    background: rgba(255, 201, 51, 0.3);
  }
  18.6% {
    opacity: 1;
    transform: scale(1);
    border-color: #e0a900;
    background: rgba(255, 201, 51, 0.3);
  }
  24.3% {
    opacity: 1;
    transform: scale(1);
    border-color: #e5342b;
    background: rgba(229, 52, 43, 0.16);
  }
  40% {
    opacity: 1;
    transform: scale(1);
    border-color: #e5342b;
    background: rgba(229, 52, 43, 0.16);
  }
  47.1% {
    opacity: 0;
    transform: scale(0.9);
    border-color: #e5342b;
    background: rgba(229, 52, 43, 0.16);
  }
  96% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    border-color: #e0a900;
    background: rgba(255, 201, 51, 0.3);
  }
}
@keyframes webLblOut {
  0%, 21.4% {
    opacity: 1;
  }
  28.6%, 96% {
    opacity: 0.35;
  }
  100% {
    opacity: 1;
  }
}
@keyframes webDraw {
  0%, 21.4% {
    transform: scaleX(0);
  }
  34.3% {
    transform: scaleX(1);
  }
  86% {
    transform: scaleX(1);
  }
  89%, 100% {
    transform: scaleX(0);
  }
}
@keyframes webNotifIn {
  0%, 48.6% {
    opacity: 0;
    transform: translateX(12px) scale(0.94);
  }
  55.7% {
    opacity: 1;
    transform: translateX(0) scale(1.03);
  }
  60% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  96% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  99%, 100% {
    opacity: 0;
    transform: translateX(12px) scale(0.94);
  }
}
@keyframes webDotPulse {
  0%, 51.4% {
    box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.55);
  }
  67.1% {
    box-shadow: 0 0 0 7px rgba(22, 163, 74, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
  }
}
@keyframes webPillPulse {
  0%, 38.6% {
    transform: translateX(-50%) scale(1);
  }
  47.1% {
    transform: translateX(-50%) scale(1.05);
  }
  56%, 100% {
    transform: translateX(-50%) scale(1);
  }
}
.pc-scene {
  --ink: #101828;
  --frame: #2e353f;
  --blue: #2563eb;
  --green: #16a34a;
  --skeleton: #e3e7ef;
  position: relative;
  width: 100%;
  height: 100%;
  background: #e7ecf7;
  color: var(--ink);
}
.pc-scene .pc-screenbg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(120deg, #edf1fa 0%, #dfe6f7 55%, #d3dcf2 100%);
}
.pc-scene .pc-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0.6;
}
.pc-scene .pc-blob.pc-b1 {
  width: 300px;
  height: 300px;
  background: #9fb6f2;
  left: -70px;
  top: -80px;
  animation: pcD1 10s ease-in-out infinite;
}
.pc-scene .pc-blob.pc-b2 {
  width: 260px;
  height: 260px;
  background: #8fc6e8;
  right: -60px;
  top: 10px;
  animation: pcD2 12s ease-in-out infinite;
}
.pc-scene .pc-blob.pc-b3 {
  width: 230px;
  height: 230px;
  background: #bdb1f5;
  left: 150px;
  bottom: -120px;
  animation: pcD3 14s ease-in-out infinite;
}
.pc-scene .pc-laptop {
  position: absolute;
  left: 50%;
  top: 62px;
  transform: translateX(-50%);
  width: 340px;
  max-width: 88%;
}
.pc-scene .pc-lid {
  position: relative;
  height: 212px;
  box-sizing: border-box;
  border: 5px solid var(--frame);
  border-radius: 14px 14px 5px 5px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 16px 34px rgba(16, 24, 40, 0.16);
}
.pc-scene .pc-cam {
  position: absolute;
  left: 50%;
  top: 3px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #1668e3;
  transform: translateX(-50%);
  z-index: 3;
}
.pc-scene .pc-base {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 4px;
  width: 92%;
  height: 15px;
  border-radius: 3px 3px 7px 7px;
  background: var(--frame);
}
.pc-scene .pc-base::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 80px;
  height: 6px;
  border-radius: 0 0 4px 4px;
  background: #1668e3;
}
.pc-scene .pc-page {
  position: absolute;
  inset: 0;
  padding: 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  filter: blur(4px);
  opacity: 0.45;
}
.pc-scene .pc-topbar {
  height: 11px;
  border-radius: 5px;
  background: #dee3ec;
  margin-bottom: 14px;
}
.pc-scene .pc-body {
  display: flex;
  flex: 1;
}
.pc-scene .pc-main {
  flex: 1;
  display: flex;
  gap: 10px;
}
.pc-scene .pc-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.pc-scene .pc-col b {
  display: block;
  height: 7px;
  border-radius: 3.5px;
  background: var(--skeleton);
}
.pc-scene .pc-col b.pc-s {
  width: 68%;
}
.pc-scene .pc-col b.pc-m {
  width: 86%;
}
.pc-scene .pc-side {
  width: 92px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pc-scene .pc-card {
  border-radius: 5px;
  background: #ecedef;
  flex: none;
}
.pc-scene .pc-card:first-child {
  height: 60px;
}
.pc-scene .pc-card:last-child {
  height: 46px;
}
.pc-scene .pc-lockup {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 2;
}
.pc-scene .pc-check {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 18px rgba(22, 163, 74, 0.32);
  animation: pcBreathe 1.5s ease-in-out infinite;
}
.pc-scene .pc-check svg {
  position: relative;
  z-index: 1;
}
.pc-scene .pc-check::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.5);
  animation: pcRipple 1.5s cubic-bezier(0.25, 0.6, 0.3, 1) infinite;
}
.pc-scene .pc-h1 {
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.8px;
  color: var(--blue);
  line-height: 1;
}
.pc-scene .pc-h2 {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink);
}

@keyframes pcD1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(60px, 45px) scale(1.15);
  }
}
@keyframes pcD2 {
  0%, 100% {
    transform: translate(0, 0) scale(1.1);
  }
  50% {
    transform: translate(-55px, 45px) scale(0.92);
  }
}
@keyframes pcD3 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(45px, -40px) scale(1.18);
  }
}
@keyframes pcBreathe {
  0%, 100% {
    transform: scale(1);
  }
  45% {
    transform: scale(1.07);
  }
}
@keyframes pcRipple {
  0% {
    box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.5);
  }
  60% {
    box-shadow: 0 0 0 16px rgba(22, 163, 74, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
  }
}
@media (prefers-reduced-motion: reduce) {
  .ab360-exit__word,
  .ab360-exit__visual {
    animation: none !important;
  }
  .ab360-exit__word--w1,
  .ab360-exit__visual--v1 {
    opacity: 1;
  }
  .ab360-exit *,
  .ab360-exit *::after,
  .ab360-exit *::before {
    animation: none !important;
  }
}/*# sourceMappingURL=style.css.map */`, x = (i, e, n, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: e,
      event_type: n,
      event_loc: t
    }), c(`Event: ${i} | ${e} | ${n} | ${t}`, "success");
  }, g = (i) => new Promise((e) => {
    const n = document.querySelector(i);
    n && e(n);
    const t = new MutationObserver(() => {
      const a = document.querySelector(i);
      a && (e(a), t.disconnect());
    });
    t.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), w = ({ name: i, dev: e }) => {
    const n = i.toLowerCase().replace(/\s/g, "_");
    x(`${n}_started`, `Experiment ${i} started`, "other", n), console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class p {
    constructor(e) {
      this.elements = e instanceof p ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, n, t) {
      return typeof n == "function" && (t = n, n = ""), this.elements.forEach((a) => {
        a.addEventListener(e, function(o) {
          var r;
          if (n !== "") {
            let s = (r = o.target) == null ? void 0 : r.closest(n);
            s && (t == null || t.call(s, o));
          } else
            t == null || t.call(a, o);
        });
      }), this;
    }
    addClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.add(e);
      }), this;
    }
    removeClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.remove(e);
      }), this;
    }
    toggleClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.toggle(e);
      }), this;
    }
    each(e) {
      for (let n of this.elements)
        e(new p(n), this.elements.indexOf(n));
      return this;
    }
    style(e, n) {
      const t = e.split("-").map((a, o) => o === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1)).join("");
      return this.elements.forEach(function(a) {
        a.style[t] = n;
      }), this;
    }
    find(e) {
      const n = this.elements.map((t) => Array.from(t.querySelectorAll(e)));
      return new p(n.flat());
    }
    attr(e, n) {
      return n ? (this.elements.forEach(function(t) {
        t.setAttribute(e, n);
      }), this) : this.elements[0].getAttribute(e);
    }
    text(e) {
      return e ? (this.elements.forEach(function(n) {
        n.textContent = e;
      }), this) : this.elements[0].textContent || "";
    }
    html(e) {
      return e ? (this.elements.forEach(function(n) {
        n.innerHTML = e;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const d = (i) => new p(i), u = async (i) => {
    const e = (n) => new Promise((t, a) => {
      const o = n.split(".").pop();
      if (o === "js") {
        if (Array.from(document.scripts).map((l) => l.src.toLowerCase()).includes(n.toLowerCase()))
          return c(`Script ${n} allready downloaded!`, "success"), t("");
        const s = document.createElement("script");
        s.src = n, s.onload = t, s.onerror = a, document.head.appendChild(s);
      } else if (o === "css") {
        if (Array.from(document.styleSheets).map((l) => {
          var f;
          return (f = l.href) == null ? void 0 : f.toLowerCase();
        }).includes(n.toLowerCase()))
          return c(`Style ${n} allready downloaded!`, "success"), t("");
        const s = document.createElement("link");
        s.rel = "stylesheet", s.href = n, s.onload = t, s.onerror = a, document.head.appendChild(s);
      }
    });
    for (const n of i)
      c(n), await e(n), c(`Loaded librari ${n}`);
    c("All libraries loaded!", "success");
  }, v = (i, e) => {
    const n = i === window ? window : document.querySelector(i);
    let t, a, o, r, s;
    function l() {
      t = null, r = 0;
    }
    l(), n.addEventListener("scroll", function() {
      a = i === window ? this.scrollY : this.scrollTop, s = a > t ? "down" : "up", t != null && (r = a - t), t = a, clearTimeout(o), o = setTimeout(l, 50), e(Math.abs(r), s);
    });
  }, c = (i, e = "info") => {
    let n;
    switch (e) {
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
    console.log(`%c>>> ${i}`, `${n} font-size: 16px; font-weight: 600`);
  }, m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAApCAYAAACYwNOSAAAM3klEQVR4nO2da6xdRRXHf+ucc297e9vSUii05Y20SHkEUihgqS8eIhGJQhCMAQuJBD9ANAY1foDExEgkJlRiCAgC2kRUPogggtSAQAooIC1CkWcLhWJ76bu39zz+fpiZc/bdZ/Y593HOfbX/ZGfPnlkzex5rz6xZs2a2kYAkAzAz+edu4CBgLjDvVrN582D2LDigF2YeA9MnwxRgSh9MnQuTJ0EB6AQ6gByQ91cOMH+vAPL3ClAGSv4q9kLxA+jtgJ0GOyuw62XY3g09m2HTe/C/66T3gXBtNrOtsTLsw14OSQWA++CCzbBasEegcXQVN8Ka++ECX5786Nbo3glJMyVdLenSxHW1pP1HMh/mM1MAKr1m706CQ4CKuTAbycwMExJgYBVYn5OOAHJmVsqOoCnUlzFvZtskWbrXD6MBMBU30vQLNrNdwyvC0OA/4sm4UXCoyAM7hjvSSToNeDYStMTMnh5O2oPNSAFAUCxCSVAZA73vsK4SFAUlSRbKl1H2cxXHNxvEuTwjzhfb0T4DhaSejHwNBme3IB8nZ6R9aivKOVDkzKy0CZ4tgRXcVzueeuko8lAoAjvNXm7UYwOP4+T7NC5qEOerGf5/GWD22oUdLUhjdwvSGBPISZo/C04ruEndhEEH5LrheEnzVRMh+sHMysBq6ofwTzVI+owUvYDV+yarYwu5Z8yuk2uccd9Tp2CAXjD7fhbTeYa/k/qyz5I0OULfCcxJ0Yc0RhtZHVN6LtAIE2bCXVgA5040jk7iWGgmN/4O+EXEf4Gkl1MfxcKMNB5QZLI5wvgt0E3/0aQP+E6E9lXgz0BXwu9AnOp0YmAcqvUGe/VliSLVOpC2SaqkJjs/iNDdmKKpSNrWvtYZGJSh2pSUz5jIxT7kVuVlbEwecYspExkdwPQmNH+jv3gh4EsRui9H/B4bYr5aBj9XiCGrbbsy/CcMJtSEsQHmNQn/ZerZgBMjdMfRf6g3YHmzEWEfRh7tY+wZM/wbRv/bucPs0CYkT0X8uiXtFx4kzcH1gGkm7rfoICkXGF3SJEkzJO0vaVKSJpaJLJHCh3Uk3JkfUqM0MuibiWmhLMNuSLl1hZx3T5E0O9RLs/R93OqCoqSpvm67kjTBnbl4MWycfz6sWAELFsDrr0M+D+WsEbO9yMORjcLNbLekd4HD6M+4p+LEFIAzU9EEvGFmxaqHYyoBN0u6GpjRL4K0FfgTsEwSgCKrm4/TXydtwAYzuybhN13SI0BPwq8A/MPMftyorGmYmSR9FrgR2JJ8B3CDmT3n6SqSlgHfAJIrrDOAr5nZ+iavyvl3zZf0KK6uAZD0FrBE0kcxsUpSwcxKki6T9BPc6ng+EV4EXgSuAtZIyrePsTdvdve1a929s9Mxdi4HlcFooIYHAZ9oLooA/Ab4YcrvImqMfUkqzID7qu9xK5yHAG9TrxcPmAZ8HcccJwD/SdHmgM9F4q1NPU8CTo/Q7cl4bzMcBiyN+M9NPR8PfCZCN3UA79jhP/Y7cMZuQcUs4AhgAzBD0o4kcyeYej3e3IP6UbOA64RWS7rBzG4eOTmhr8/pKCoV13vbyIilBuyCgxvR+CHsHuonkOclns+knmFX+Pg5HFO+jWu0LDubQFfELQx1R0SH2EeRXj3N+nAarbI2QlZPk+49s9IfiJrzFBxTl3GMGOonWHyWgadSTG2eqdfg2lDUrESTCPVdBn4q6ZSRF4AlWLrU3UdI/l4IsxuFm5nM7L+4Hi80kgGHe5k5BxxKrUIF7DGzN338CvAEtUYLNAK2AzsTz+A0NWVgZQONxkRCCbgXqqbKwS+JHG6leFrSU9JS3PpBMPcI9biF2kgWxME8rl4fGp2Z3cqVjrHneQkh394Fr6ITAQaC51LPHTh79KMitE9BdVKzH040SNfns2Y23cym+rTTYsciSdP3Aq1KaOCbzKwTp24M4khAqINPVz3c/ONW6lfGXzSzmWZ2LHAxrp2S7zp4dFUW69Y5Bg+yd5t68PLAZEBwar80ky2iXp414FbVVhu/kvBP0lyS6PEvpD/jB9oL9xI7k0fN7CZfF3uAZcTFtXOCw9OelAo34NqgJTGzPxKZW4y+Lg4cc197bdvk72432WqSBRnwcCToRJzhUxorE+6YxV8FeN/MKl5U2URcRr2oWd4mAAz4nmfEIIo8kUF7QsJ9dCJ+Euu9+Bg6hJ5U+BhhbIDlyx2DL1rk7h0dzeMMEPsPYHXVV9RW4GNqQ6RwPcaxKfJ1ZpY0yj8ukmQ/o33foL0RuhMifhMRk0J9+PvHGXRzEu4s25ydqecxzNgBq1Y5xi4Wm9MOEKXBWa09kHAbcD6wOOEn4PepOAdG0umL+MUYu+HEdgKjSFwbk5wPLciImx756uzIxx5jL1zoRJFC61Tshfhmgjp4ceQO+g99U3FWcwEG3J2KGhN1Yo0Wy0dTMWmCoky8PpLmwgdlxE3PSepEvLHD2Fde6Rh67Vp3Lw1VJVuPTTV1UEP4IfIFGutly2b2SnjweuiBjgixycOEsYEeDHxdxz7+JE9OyYhet980TdC+lcfBIGhDzNqy7L4nLgJEYWZFSa/g5Ls0Iwp4Ph0lQjcYmEbflnu0ECtzkrGzPvqT5DZ9gJPV69S5o8vYs2ZBT0/b7Uhy9ZONTHhx5G7glkiwAbftxYw4EmhWr0VgVbM4oyOKnH666523bnXPbTaO6oTBbgZY0SBstDft7u2IqcvqRsyR77HNnOjRJrEjhtXw0UBpfU/8oaQd1C/sfGhmm1uauX1Io5lY18cA1LftY2ylRofOTjchHGHrPoAp8OEQosUmnK3TQe5DFpThDugkZQ4cQ/sYe7ZXz86bBxs2ODk67EIcYbwxtE2qsZ4j5hfOHhxIXcYKX9mL5fWYKJzs9WJrAQB9ZtbwDJT2MfaDDzpxIxg4jdImA4+32pWwN8AvUV+XWWaraWQ13oSGtwOJ8V+SYbPEvmrdSsollumraN/kcZufr40uQwOwTFrX5lfEtC6xSU7Mb0trszJu0Emc/7Yk3O9kxK2qAX3Hcr2kjZJek/SspMfGhh67/djY5vTfA2al/OoO3CG+4PBOy3MzPpBlSvBuwv1KBs1knJ17wEE+vWqaufIgFi/GKUpmlmVw0yqk9aoAk/2GVfPXVOKz+ccT7nBueBozg8OvdLb6VNcsebXKKF6/P5zzAbeE3UI+rbMy6J5JuF/NoJmTsmGvO7MktxvWM7CtPeMOfvtKs02mrUCW3vuyhHnlFRk09weH300T62jmht3cnmYlgzu6rBmyJtdXJdwHAjcR55VmKjoBfwi7hXx93E68DA9VEzXbTn9ry5DWDX5jcHjv59P5yr08sRcc9GZtM27bYGZP4gxxkhOKEnCnpJ9JWo47Rq2UCt9uZuleaR1xI59Nku6RO3nqNJx82iqDmljPKOAMSav8jviN9N/eNlic4E+E+qekPTjjr6SMXQEws5eqGXCM+/NIvi6X9BDwI0nbqe0zraaDpHleCTfuz8WOXtL8obSCpI9Vj2jv70WNb3ua5FFp5Qx3oPmCEudp+HS+q/rj1pIo+vtxkbAHUvnqykjjVxnlLaXokvkoSvqrpNsj6X0ykU7siLOipB2S+jLyI//uFak8hTNIKqqVO52vtLsi6c6cmb2/BZ4utXZoG3WUofQRPGdmr4/A68zMbqN2VFrouZM9UnCXPc29ZvYIqX1/ZnYLNd14GkGteAFDW3SKQq5nvJTaZthqfnz+gghxHrB1CK/oAQ6gtok5jRLuTxKXK7Fr32s88jiDtEIibnoLHtTq9QUzuzonqTATlhSgr9y6oW1UUYZSHnQQLFaDPxo0Qfj1RfKKaTpCA3SY2TnANTReodwFXGxmV8idmdFvl41vyNnEZe0+YLGZPWxmPam8QWKSGZL09zTdAZEyPApcT71FnQFrgE7/ATyZShP6qzE7I+H/MrNenOYoqfUI2I47iqKQ3rXvn9fi6uS1SNyA3cC3zGyRpI7qkVFmVtoGa6bBwgrIRuzkj9ZBrqfL9cLbXdLRuNOHBq1Ib/YxZP0lwQ+d8hObI3E9zRyXNd7H7a7+UE3+bCYpb2ZlSSfjZvwV4Hkz+3d4B44BRf1ZKNVDKj1toCNFp+TChvxCh9wk9WzgcJyNzd/NbHPgEU/bkUqzHMriy1ZIhvuzQfLhnZIOwZ0zMgV4ycxeS6afVbc+7jTcwT1H4UbBD3AH72/0707uq6w15u2wZAM8X4HetLxaGW15uUE+SrB7Czx3lz9JaRg99T5MANR1ykrYGvuvdxb+X4+/NpvbA7MXwwF9MLMX9jsGurvc1qnuCnQVYNIcNzQl//NYoHaCT/LQkyBLhqv4ART9R7UH94/HnWtgRxdsLcDHZ0mb7zLbuEz6AHcs1ke4/zzuDvmHff953Nvxf2cKVVNqNd+JAAAAAElFTkSuQmCC", y = "data:image/png;base64,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", b = {
    close: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#101828" stroke-width="2.4" stroke-linecap="round">
<path d="M5 5l14 14M19 5 5 19"/>
</svg>`,
    evBadge: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M11 21.175L10.6333 21.0833C1.00834 17.1417 1.83334 4.675 1.83334 4.49166L1.92501 3.66666H2.75001C6.96667 3.66666 10.45 1.1 10.45 1.1L11 0.73333L11.55 1.1C11.55 1.1 15.0333 3.66666 19.25 3.66666H20.075L20.1667 4.49166C20.1667 4.58333 20.9917 17.1417 11.3667 20.9917L11 21.175ZM3.66668 5.5C3.66668 8.06666 4.21667 16.225 11 19.25C17.7833 16.3167 18.3333 8.15833 18.3333 5.5C14.9417 5.225 12.1 3.66666 11 2.93333C9.90001 3.66666 7.05834 5.225 3.66668 5.5Z" fill="#005DD8"/>
<path d="M10.9998 17.4163C4.94983 14.8497 5.49983 6.50801 5.49983 6.50801C8.52483 6.50801 10.9998 4.58301 10.9998 4.58301C10.9998 4.58301 13.4748 6.50801 16.4998 6.50801C16.4998 6.50801 17.0498 14.8497 10.9998 17.4163Z" fill="#005DD8"/>
</svg>`,
    appEsteemBadge: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<g clip-path="url(#clip0_1412_446)">
<path d="M14.5193 15.4181L15.5253 13.7857L17.3409 13.1665L17.542 11.2597L18.9079 9.91495L18.2585 8.11001L18.9079 6.30502L17.542 4.96031L17.3409 3.05353L15.5254 2.43435L14.5194 0.80184L12.6165 1.03159L11 0L9.38361 1.03168L7.48078 0.801926L6.47475 2.43439L4.65923 3.05357L4.4581 4.96036L3.09216 6.30506L3.74159 8.11005L3.09216 9.91504L4.45805 11.2597L4.65919 13.1665L6.47471 13.7857L7.48073 15.4182L9.38361 15.1885L11 16.2201L12.6165 15.1885L14.5193 15.4181ZM5.43864 8.11005C5.43864 5.0435 7.9335 2.54865 11 2.54865C14.0666 2.54865 16.5614 5.0435 16.5614 8.11005C16.5614 11.1766 14.0666 13.6715 11 13.6715C7.9335 13.6715 5.43864 11.1766 5.43864 8.11005Z" fill="#005DD8"/>
<path d="M11 3.83887C8.64471 3.83887 6.72852 5.75506 6.72852 8.11039C6.72852 10.4657 8.64471 12.3819 11 12.3819C13.3554 12.3819 15.2716 10.4657 15.2716 8.11039C15.2716 5.75506 13.3554 3.83887 11 3.83887Z" fill="#005DD8"/>
<path d="M9.07927 16.5249L6.81568 16.7981L5.61973 14.8574L5.21316 14.7188L3.45947 20.2001L6.6166 20.0265L9.08666 22.0004L10.5402 17.4573L9.07927 16.5249Z" fill="#005DD8"/>
<path d="M16.3804 14.8574L15.1844 16.7981L12.9209 16.5249L11.46 17.4573L12.9135 22.0004L15.3836 20.0265L18.5407 20.2001L16.787 14.7188L16.3804 14.8574Z" fill="#005DD8"/>
</g>
<defs>
<clipPath id="clip0_1412_446">
<rect width="22" height="22" fill="white"/>
</clipPath>
</defs>
</svg>`,
    download: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 5.549L10.195 4.582V11.611L3.007 11.665L3 5.549ZM10.195 12.391V19.496L3.005 18.511V12.391H10.195ZM11.113 4.456L20.998 3V11.533L11.113 11.611V4.456ZM21 12.505L20.998 21L11.113 19.647V12.505H21Z" fill="white"/>
</svg>`,
    realtime: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 11.9005C16 10.7565 15.617 9.70483 14.9718 8.86272C14.6359 8.42432 14.719 7.79663 15.1574 7.46073C15.5958 7.12483 16.2234 7.20791 16.5594 7.6463C17.4627 8.82528 18 10.3016 18 11.9005C18 13.5669 17.4164 15.0998 16.4434 16.3019C16.0959 16.7312 15.4662 16.7975 15.0369 16.45C14.6077 16.1025 14.5413 15.4728 14.8888 15.0436C15.5842 14.1845 16 13.0924 16 11.9005Z" fill="#005DD8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.9005C8 10.755 8.38397 9.70208 9.03075 8.85941C9.36702 8.42129 9.28446 7.79354 8.84635 7.45727C8.40823 7.121 7.78048 7.20356 7.44421 7.64167C6.53871 8.82142 6 10.2995 6 11.9005C6 13.5656 6.58267 15.0974 7.55437 16.2991C7.90163 16.7286 8.53128 16.7952 8.96074 16.4479C9.39019 16.1007 9.45682 15.471 9.10956 15.0416C8.41518 14.1828 8 13.0915 8 11.9005Z" fill="#005DD8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.9003C10 13.0049 10.8954 13.9003 12 13.9003C13.1046 13.9003 14 13.0049 14 11.9003C14 10.7958 13.1046 9.90033 12 9.90033C10.8954 9.90033 10 10.7958 10 11.9003Z" fill="#1B86FA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 11.9003C20 9.66825 19.1888 7.62823 17.8438 6.05514C17.4849 5.63536 17.5342 5.00413 17.954 4.64523C18.3738 4.28633 19.005 4.33567 19.3639 4.75545C21.0069 6.67707 22 9.17398 22 11.9003C22 14.6893 20.9607 17.2381 19.2497 19.1766C18.8843 19.5907 18.2523 19.6301 17.8383 19.2646C17.4242 18.8991 17.3848 18.2672 17.7503 17.8531C19.1511 16.266 20 14.1835 20 11.9003Z" fill="#1B86FA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 11.9003C4 9.66839 4.81114 7.62848 6.15595 6.05543C6.51483 5.63564 6.46545 5.00441 6.04566 4.64553C5.62588 4.28665 4.99464 4.33602 4.63576 4.75581C2.99299 6.67738 2 9.17415 2 11.9003C2 14.6856 3.03649 17.2312 4.74335 19.1688C5.10842 19.5832 5.74032 19.6232 6.15474 19.2581C6.56915 18.893 6.60915 18.2611 6.24408 17.8467C4.8466 16.2604 4 14.1804 4 11.9003Z" fill="#1B86FA"/>
</svg>`
  }, k = (
    /* HTML */
    `
  <!-- TrustBox widget - Micro Combo -->
  <div
    class="trustpilot-widget"
    data-locale="en"
    data-template-id="5419b6ffb0d04a076446a9af"
    data-businessunit-id="695876155fb698cf3a93bf94"
    data-style-height="26px"
    data-style-width="100%"
    data-token="0a8f5b61-a60c-429d-9f03-1e64fb80da6a"
    data-stars="1,2,3,4,5"
  >
    <a href="https://www.trustpilot.com/review/adblock360.com" target="_blank" rel="noopener">Trustpilot</a>
  </div>
  <!-- End TrustBox widget -->
`
  ), A = (
    /* HTML */
    `
  <div class="yt-scene">
    <div class="yt-screen">
      <div class="yt-frame"><i></i><i></i><i></i></div>
      <div class="yt-scrim"></div>
    </div>
    <div class="yt-logo"><img src="${m}" alt="YouTube" /></div>
    <div class="yt-notif">
      <span class="yt-dot">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12.6 9.8 17.4 19 7.6"
            stroke="#fff"
            stroke-width="3.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      Sponsor segment blocked
    </div>
    <div class="yt-controls">
      <div class="yt-bar-row">
        <div class="yt-part yt-played"></div>
        <div class="yt-seg"><span class="yt-lbl">SPONSOR SEGMENT</span></div>
        <div class="yt-part yt-rest"></div>
      </div>
      <div class="yt-row">
        <div class="yt-ctrl">
          <svg width="14" height="16" viewBox="0 0 15 17" fill="#fff"><path d="M1.5 1 14 8.5 1.5 16V1Z" /></svg>
          <svg width="16" height="14" viewBox="0 0 17 15" fill="#fff">
            <path d="M1 1 11 7.5 1 14V1Z" />
            <rect x="13" y="1" width="2.6" height="13" rx="1" />
          </svg>
          <svg width="18" height="16" viewBox="0 0 20 18" fill="none">
            <path d="M2 6.5h3.5L10 2.5v13L5.5 11.5H2v-5Z" fill="#fff" />
            <path
              d="M13.2 6.2a4 4 0 0 1 0 5.6M15.6 3.9a7.4 7.4 0 0 1 0 10.2"
              stroke="#fff"
              stroke-width="1.6"
              stroke-linecap="round"
            />
          </svg>
          <div class="yt-time">3:14 / 8:12</div>
        </div>
        <div class="yt-ctrl">
          <svg width="18" height="14" viewBox="0 0 20 16" fill="none">
            <rect x="1" y="1.5" width="18" height="13" rx="2" stroke="#fff" stroke-width="1.8" />
            <rect x="10" y="8" width="7" height="5" rx="1" fill="#fff" />
          </svg>
          <svg
            width="17"
            height="17"
            viewBox="0 0 20 20"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
          >
            <path d="M2 7V2h5M13 2h5v5M18 13v5h-5M7 18H2v-5" />
          </svg>
        </div>
      </div>
    </div>
  </div>
`
  ), C = (
    /* HTML */
    `
  <div class="sp-scene">
    <div class="sp-screen">
      <div class="sp-cover"><i></i><i></i><i></i></div>
      <div class="sp-scrim"></div>
    </div>
    <div class="sp-np">
      <div class="sp-thumb"><i></i><i></i></div>
      <div>
        <div class="sp-t">Slow Tide</div>
        <div class="sp-a">Mara Vane</div>
      </div>
    </div>
    <div class="sp-logo"><img src="${y}" alt="Spotify" /></div>
    <div class="sp-notif">
      <span class="sp-dot">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12.6 9.8 17.4 19 7.6"
            stroke="#000"
            stroke-width="3.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      Ad blocked · 0:30
    </div>
    <div class="sp-controls">
      <div class="sp-transport">
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          stroke="#B3B3B3"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M1 4.2h2.4c1.15 0 1.95.5 2.7 1.45l.85 1.05" />
          <path d="M9.35 9.3l.85 1.05c.75.95 1.55 1.45 2.7 1.45h2.6" />
          <path d="M1 11.8h2.4c1.15 0 1.95-.5 2.7-1.45l4.1-5.05c.75-.95 1.55-1.45 2.7-1.45h2.6" />
          <path d="M13.5 1.9 15.9 4.2l-2.4 2.3M13.5 9.5l2.4 2.3-2.4 2.3" />
        </svg>
        <svg width="15" height="14" viewBox="0 0 16 15" fill="#B3B3B3">
          <path d="M15 1 5.5 7.5 15 14V1Z" />
          <rect x="1" y="1" width="2.6" height="13" rx="1" />
        </svg>
        <span class="sp-play">
          <svg width="12" height="13" viewBox="0 0 12 13" fill="#000"><path d="M1.5 1 11 6.5 1.5 12V1Z" /></svg>
        </span>
        <svg width="15" height="14" viewBox="0 0 16 15" fill="#B3B3B3">
          <path d="M1 1 10.5 7.5 1 14V1Z" />
          <rect x="12.4" y="1" width="2.6" height="13" rx="1" />
        </svg>
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          stroke="#B3B3B3"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M12.6 2.2H4.6a3.1 3.1 0 0 0-3.1 3.1v5.4a3.1 3.1 0 0 0 3.1 3.1h8.8a3.1 3.1 0 0 0 3.1-3.1V5.3a3.1 3.1 0 0 0-1.5-2.65"
          />
          <path d="M11.1 4.4 13.5 2.2 11.1 0" />
        </svg>
      </div>
      <div class="sp-bar-row">
        <div class="sp-time">0:00</div>
        <div class="sp-adslot"><span class="sp-lbl">AD</span></div>
        <div class="sp-track"><div class="sp-played"></div></div>
        <div class="sp-time sp-time--right">4:15</div>
      </div>
    </div>
  </div>
`
  ), L = (
    /* HTML */
    `
  <div class="ab360-exit-overlay">
    <div class="ab360-exit">
      <button type="button" class="ab360-exit__close" aria-label="Close">${b.close}</button>
      <div class="ab360-exit__left">
        <div class="ab360-exit__badges">
          <div class="ab360-exit__badge">${b.evBadge} EV code signed</div>
          <div class="ab360-exit__badge">${b.appEsteemBadge} AppEsteem</div>
        </div>

        <h2 class="ab360-exit__headline">Kill ads forever on</h2>
        <div class="ab360-exit__slot">
          <div class="ab360-exit__word ab360-exit__word--w1">YouTube</div>
          <div class="ab360-exit__word ab360-exit__word--w2">Spotify</div>
          <div class="ab360-exit__word ab360-exit__word--w3">every website</div>
          <div class="ab360-exit__word ab360-exit__word--w4">your entire PC</div>
        </div>

        <p class="ab360-exit__subtitle">
          One install and every ad disappears — across every browser and app on your PC.
        </p>

        <button type="button" id="ab360-exit-cta" class="ab360-exit__cta">
          ${b.download} Download AdBlock for YouTube Desktop
        </button>

        <div class="ab360-exit__trust">${k}</div>
      </div>

      <div class="ab360-exit__right">
        <div class="ab360-exit__stage">
          <div class="ab360-exit__visual ab360-exit__visual--v1">${A}</div>
          <div class="ab360-exit__visual ab360-exit__visual--v2">${C}</div>
          <div class="ab360-exit__visual ab360-exit__visual--v3">
  <div class="web-scene">
    <div class="web-screen">
      <div class="web-blob web-b1"></div>
      <div class="web-blob web-b2"></div>
      <div class="web-blob web-b3"></div>
    </div>
    <div class="web-window">
      <div class="web-chrome">
        <i></i><i></i><i></i>
        <div class="web-url"></div>
      </div>
      <div class="web-page">
        <div class="web-body">
          <div class="web-main">
            <div class="web-col">
              <div class="web-h"></div>
              <b class="web-m"></b><b></b><b class="web-s"></b><b class="web-m"></b><b></b><b class="web-s"></b>
            </div>
            <div class="web-col">
              <div class="web-h"></div>
              <b></b><b class="web-s"></b><b class="web-m"></b><b></b><b class="web-m"></b><b class="web-s"></b>
            </div>
          </div>
          <div class="web-side">
            <div class="web-ad web-a2">
              <span class="web-lbl">AD</span>
              <span class="web-x"
                ><i><span></span></i><i><span></span></i
              ></span>
            </div>
            <div class="web-ad web-a3">
              <span class="web-lbl">AD</span>
              <span class="web-x"
                ><i><span></span></i><i><span></span></i
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="web-notif">
      <span class="web-dot">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12.6 9.8 17.4 19 7.6"
            stroke="#fff"
            stroke-width="3.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      Ads blocked · 2
    </div>
    <div class="web-pill">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M5.6 5.6l12.8 12.8" />
      </svg>
      Block ads on every site
    </div>
  </div>
</div>
          <div class="ab360-exit__visual ab360-exit__visual--v4">
  <div class="pc-scene">
    <div class="pc-screenbg">
      <div class="pc-blob pc-b1"></div>
      <div class="pc-blob pc-b2"></div>
      <div class="pc-blob pc-b3"></div>
    </div>
    <div class="pc-laptop">
      <div class="pc-lid">
        <div class="pc-cam"></div>
        <div class="pc-page">
          <div class="pc-topbar"></div>
          <div class="pc-body">
            <div class="pc-main">
              <div class="pc-col">
                <b class="pc-m"></b><b></b><b class="pc-s"></b><b class="pc-m"></b><b></b><b class="pc-s"></b>
              </div>
              <div class="pc-col">
                <b></b><b class="pc-s"></b><b class="pc-m"></b><b></b><b class="pc-m"></b><b class="pc-s"></b>
              </div>
            </div>
            <div class="pc-side">
              <div class="pc-card"></div>
              <div class="pc-card"></div>
            </div>
          </div>
        </div>
        <div class="pc-lockup">
          <div class="pc-check">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12.4 9.8 17.2 19 7.8"
                stroke="#fff"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="pc-h1">Ad-free</div>
          <div class="pc-h2">Your entire PC</div>
        </div>
      </div>
      <div class="pc-base"></div>
    </div>
  </div>
</div>
        </div>
        <div class="ab360-exit__caption">${b.realtime} Ads removed in real time</div>
      </div>
    </div>
  </div>
`
  );
  u(["//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"]), w({ name: "AdBlock360 Hero Exit Popup", dev: "YK" });
  class E {
    constructor() {
      this.shown = !1, this.device = window.innerWidth <= 768 ? "mobile" : "desktop", this.init();
    }
    async init() {
      await g("body"), d("head").elements[0].insertAdjacentHTML("beforeend", `<style>${h}</style>`), d("body").elements[0].insertAdjacentHTML("beforeend", L), this.renderTrustpilot(), this.bindTriggers(), this.bindClose(), this.bindCta();
    }
    overlay() {
      return d(".ab360-exit-overlay").elements[0];
    }
    showPopup(e) {
      if (this.shown) return;
      const n = this.overlay();
      !n || n.classList.contains("active") || (n.classList.add("active"), document.body.style.overflow = "hidden", this.shown = !0, x("ab360_exit_popup_view", "AdBlock360 hero exit popup shown", "view", e));
    }
    closePopup(e) {
      const n = this.overlay();
      !n || !n.classList.contains("active") || (n.classList.remove("active"), document.body.style.overflow = "", x("ab360_exit_popup_close", "AdBlock360 hero exit popup closed", "click", e));
    }
    bindTriggers() {
      this.device === "desktop" ? document.addEventListener("mouseout", (e) => {
        !e.relatedTarget && e.clientY <= 0 && this.showPopup("mouseleave");
      }) : v(window, (e, n) => {
        n === "up" && e > 120 && this.showPopup("scroll_up");
      });
    }
    bindClose() {
      var e;
      d(".ab360-exit__close").on("click", () => this.closePopup("close_btn")), (e = this.overlay()) == null || e.addEventListener("click", (n) => {
        n.target.matches(".ab360-exit-overlay") && this.closePopup("backdrop");
      }), document.addEventListener("keydown", (n) => {
        n.key === "Escape" && this.closePopup("escape_key");
      });
    }
    bindCta() {
      d("#ab360-exit-cta").on("click", () => {
        x("ab360_exit_popup_cta_click", "Download AdBlock for YouTube Desktop", "click", "exit_popup");
        const e = document.querySelector("#main-cta");
        e && e.click(), this.closePopup("cta_click");
      });
    }
    renderTrustpilot() {
      const e = () => {
        const n = window.Trustpilot, t = document.querySelector(".ab360-exit__trust .trustpilot-widget");
        n && t ? n.loadFromElement(t, !0) : setTimeout(e, 200);
      };
      e();
    }
  }
  new E();
})();
//# sourceMappingURL=index.js.map
