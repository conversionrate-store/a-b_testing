(function() {
  "use strict";
  const wn = ({ name: e, dev: t }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, xn = (e) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, De = (e, t = "info") => {
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
  }, kn = `section.apps {
  display: none; /* Hide control section */
}

.crs-apps {
  color: #fff;
}
.crs-apps-content {
  padding-top: 90px;
  padding-bottom: 120px;
  border-top: 1px solid #3e3e46;
}

.crs-apps-title {
  color: #fff;
  margin-bottom: 0;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  line-height: 51.84px;
  letter-spacing: 1px;
}

.crs-apps-description {
  margin-inline: auto;
  margin-top: 12px;
  max-width: 578px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 32.04px;
}

.crs-apps-nav {
  margin-top: 32px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1140px;
  list-style: none;
}

.crs-apps-nav-item a {
  display: flex;
  align-items: center;
  height: 61px;
  padding: 24px 40px;
  border-radius: 15px;
  border: 1px solid #3e3e46;
  background: #26262b;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 36px;
  text-decoration: none;
}

.crs-apps-nav-item--more a {
  background: transparent;
}

/* APPS BLOCKS */

.crs-apps-blocks {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 992px) {
  .crs-apps-blocks {
    grid-template-columns: repeat(1, 1fr);
  }
}

.crs-apps-block {
  --main-text-color: #fff;
  scroll-margin-top: 80px;
  container-type: inline-size;
  border-radius: 20px;
}

.crs-apps-block-inner {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

@container (max-width: 900px) {
  .crs-apps-block-inner {
    flex-direction: column;
  }
}

.crs-apps-block:nth-child(3n + 1) {
  grid-column: 1 / -1;
}

.crs-apps-block[data-color='7E7EE1'] {
  background: #7e7ee1;
}

.crs-apps-block[data-color='D5D8FE'] {
  --main-text-color: #26262b;
  background: #d5d8fe;
}

.crs-apps-block[data-color='424E81'] {
  
  background: #424e81;
}

.crs-apps-block[data-color='CF6F8A'] {
  background: #cf6f8a;
}

.crs-apps-block[data-color='F0AD84'] {
  --main-text-color: #26262b;
  background: #f0ad84;
}

.crs-apps-block[data-color='F0D0B5'] {
  --main-text-color: #26262b;
  background: #f0d0b5;
}

.crs-block-info {
  width: 100%;
  max-width: 465px;
  padding: 60px 0 32px 60px;
}

.crs-block-apps {
  width: 100%;
  max-width: 575px;
  padding: 40px 40px 24px 0;
}

@container (max-width: 900px) {
  .crs-block-info {
    max-width: 100%;
    padding: 60px 40px 0;
  }

  .crs-block-apps {
    max-width: 100%;
    padding: 0 40px 24px;
  }
}

.crs-block-title {
  color: var(--main-text-color);
  font-size: 36px;
  font-weight: 600;
  line-height: 51.84px;
}

.crs-block-description {
  margin-top: 12px;
  color: var(--main-text-color);
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
}

.crs-block-action {
  margin-top: 32px;
}

.crs-block-action-text {
  margin-top: 12px;
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.crs-block-comment {
  --star-svg-url: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M13.6285 5.01668L9.32465 4.40531L7.39557 0.584123C7.25148 0.298782 6.74807 0.298782 6.60399 0.584123L4.67549 4.40531L0.371669 5.01668C0.0181703 5.06713 -0.122996 5.46694 0.12492 5.70291L3.25158 8.68327L2.5125 12.8967C2.45358 13.2314 2.838 13.4825 3.15591 13.3182L7.00007 11.3425L10.8442 13.3187C11.1592 13.4815 11.5471 13.2352 11.4876 12.8972L10.7486 8.68381L13.8752 5.70345C14.1231 5.46694 13.9814 5.06713 13.6285 5.01668Z" fill="white"/></svg>');
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
}

.crs-block-comment-author {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.crs-block-comment-rating {
  display: inline-flex;
  gap: 4px;
  align-items: center;
  color: var(--main-text-color);
}

.crs-block-comment-rating > span {
  width: 14px;
  height: 14px;
  background-image: var(--star-svg-url);
}

.crs-block-comment-text {
  margin-top: 8px;
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
}

.crs-block-more > div:first-child {
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
}

.crs-block-more > div:nth-child(2) {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

/* APP BLOCK */

.crs-apps-block .crs-block-apps-list {
  columns: 3;
  column-gap: 20px;
  column-fill: balance;
}
@container (max-width: 900px) {
  .crs-block-apps-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
}

.crs-block-app {
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 12px;
  border-radius: 15px;
  background: #fff;
  color: #26262b;
  break-inside: avoid;
  cursor: pointer;
}

.crs-block-app-name {
  font-size: 18px;
  font-weight: 600;
  line-height: 32.04px;
}

.crs-block-app-description {
  --line-height: 25px;
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: var(--line-height);
  min-height: calc(var(--line-height) * 2);
}

@container (min-width: 900px) {
  .crs-apps-block
    :is(
      .crs-block-app:nth-child(2),
      .crs-block-app:nth-child(3),
      .crs-block-app:nth-child(6),

    )
    .crs-block-app-description {
    display: none;
  }
}

.crs-block-app-meta {
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 21.36px;
}

.crs-block-app-rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.crs-block-more {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--main-text-color);
}

.crs-apps-action {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.crs-apps-subtitle {
  margin-top: 60px;
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
}

.crs-apps-sub-action {
  margin-top: 24px;
  display: flex;
  justify-content: center;
}`, le = [
    {
      name: "CleanMyMac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/78/42681/icon-1747895078-682ec326c5805.png",
      description: "Tidy up your Mac",
      url: "https://setapp.com/apps/cleanmymac",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "QuitAll",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/493/10507/icon-1715515857-6640b1d134f36.png",
      description: "Speed up Mac by quitting all apps",
      url: "https://setapp.com/apps/quit-all-mac",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "iStat Menus",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/144/41794/icon-1739274958-67ab3ace7a0bf.png",
      description: "Track CPU, GPU, sensors, etc.",
      url: "https://setapp.com/apps/istat-menus",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Endurance",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/301/42576/icon-1746973828-6820b484ae86f.png",
      description: "Extend your battery life",
      url: "https://setapp.com/apps/endurance",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "AlDente Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/483/42676/icon-1747828119-682dbd97182a6.png",
      description: "Set battery charging limits",
      url: "https://setapp.com/apps/aldente-pro",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Mission Control",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/376/42548/icon-1746731563-681d022b89238.png",
      description: "Close windows from Mission Control",
      url: "https://setapp.com/apps/mission-control-plus",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "WidgetWall",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/528/42687/icon-1747926996-682f3fd48a02b.png",
      description: "Add widgets to Mac desktop",
      url: "https://setapp.com/apps/widget-wall",
      platforms: "Mac",
      rating: "88"
    },
    {
      name: "Bartender",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/153/42799/icon-1748962599-683f0d271f5a8.png",
      description: "Personalize your menu bar",
      url: "https://setapp.com/apps/bartender",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "CleanShot X",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/321/42718/icon-1748347773-6835ab7ddfd5d.png",
      description: "Take better screenshots and GIFs",
      url: "https://setapp.com/apps/cleanshot",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Downie",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/222/42263/icon-1743756630-67ef9d568e1e3.png",
      description: "Download YouTube videos",
      url: "https://setapp.com/apps/downie",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Pulltube",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png",
      description: "Download and trim videos",
      url: "https://setapp.com/apps/pulltube",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Permute",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/219/42264/icon-1743758208-67efa380b6636.png",
      description: "Convert video and audio files",
      url: "https://setapp.com/apps/permute",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Nitro PDF Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/518/42755/icon-1749071187-6840b55359ae5.png",
      description: "Work with your PDFs",
      url: "https://setapp.com/apps/nitro-pdf-pro",
      platforms: "Mac, iOS",
      rating: "89"
    },
    {
      name: "BetterZip",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/245/7858/icon-1681236553-6435a249c1fd2.png",
      description: "Archive files the easy way",
      url: "https://setapp.com/apps/betterzip",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Get Backup Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png",
      description: "Back up only essential files",
      url: "https://setapp.com/apps/get-backup-pro",
      platforms: "Mac",
      rating: "86"
    },
    {
      name: "Archiver",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/194/10197/icon-1711963165-660a7c1d7fdbc.png",
      description: "Compress files easily",
      url: "https://setapp.com/apps/archiver",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Ulysses",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/67/42660/icon-1747749841-682c8bd1e7d9c.png",
      description: "Write and publish from one app",
      url: "https://setapp.com/apps/ulysses",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "Renamer",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/136/40792/icon-1730733142-6728e4563df6a.png",
      description: "Rename a batch of files",
      url: "https://setapp.com/apps/renamer",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Session",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/428/42692/icon-1747967217-682fdcf1a2474.png",
      description: "Work in short intervals",
      url: "https://setapp.com/apps/session",
      platforms: "Mac, iOS",
      rating: "98"
    },
    {
      name: "CodeRunner",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/122/41549/icon-1737112183-678a3a77b43aa.png",
      description: "Edit and run code faster",
      url: "https://setapp.com/apps/coderunner",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Craft",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/554/42201/icon-1743413950-67ea62be54f57.png",
      description: "Create and structure documents",
      url: "https://setapp.com/apps/craft",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "PDF Pals",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/606/42481/icon-1746107539-68137c9375583.png",
      description: "Chat with your PDFs",
      url: "https://setapp.com/apps/pdf-pals",
      platforms: "Mac",
      rating: "89"
    },
    {
      name: "MurmurType",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/592/43811/icon-1749109056-68414940d76a1.png",
      description: "Transcribe your speech",
      url: "https://setapp.com/apps/murmur",
      platforms: "Mac",
      rating: "83"
    },
    {
      name: "Ready to Send",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/607/main/icon-65719fa98f5e6.png",
      description: "Generate draft email replies",
      url: "https://setapp.com/apps/ready-to-send",
      platforms: "Web",
      rating: "0"
    }
  ], Cn = `.tippy-box,
.tippy-content {
  background: transparent !important;
  /* padding: 0 !important;
  border: 0; */
}

.os-popover {
  width: 100%;
  max-width: 408px;
  max-height: 100vh;
  background-color: #fff;
  color: #26262b;
  padding-top: 0;
  border-radius: 24px;
  font-size: 14px;
  z-index: 1000;
  border: 1px solid #e5e5e5;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Avenir Next, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, sans-serif;
  overflow: hidden;
  overflow-y: auto;
}
.os-dialog .os-popover {
  max-width: 100%;
}
.os-available {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 6px;
  background: #f5f5f5;
  color: #77767a;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
}

.os-popover-close {
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
  margin-right: 16px;
  justify-self: end;
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  background-size: cover;
  background-image: url('https://cdn.setapp.com/master-9f18f44f26fe5f8aa6077a4a8f38ca796e93985f-590/build/main/351e912995feef9e5a79.svg');
  cursor: pointer;
}

.os-popover-header-inner {
  margin-top: 12px;
  display: flex;
  gap: 14px;
  padding-inline: 4px;
  padding-left: 36px;
}

.os-popover-header img {
  width: 96px;
  height: 96px;
}
.os-popover-header h3 {
  margin: 0;
  padding: 0;
  max-width: 209px;
  color: #26262b;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px; 
  letter-spacing: 1.15px;
}

.os-popover-header p {
  margin-top: 6px;
  margin-bottom: 0;
  color: #26262b;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
}

.os-popover-rating {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.os-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #26262b;
  font-size: 26px;
  font-weight: 700;
  line-height: 40.04px;
}

.os-rating::before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="%239D9CA2" fill-rule="evenodd" d="M9.637 7.41A6.015 6.015 0 0 0 9 10.11v6.39c0 1.65 1.342 3 3 3h5.343c1.284 0 2.425-.81 2.84-2.025l1.888-5.55c.663-1.935-.785-3.96-2.841-3.96H15v-4.98a1.485 1.485 0 0 0-2.805-.675l-2.558 5.1Zm-5.887.555a2.249 2.249 0 0 0-2.25 2.25v7.035a2.25 2.25 0 1 0 4.5 0v-7.035a2.249 2.249 0 0 0-2.25-2.25Z" clip-rule="evenodd"/></svg>');
}

.os-rating-amount {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #26262b;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.02px;
}

.os-rating-amount::before {
  content: '';
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #26262b;
}

.os-popover-body {
  margin-top: 12px;
  padding-inline: 16px;
}

.os-popover-body p {
  margin-bottom: 12px;
  padding-top: 12px;
  border-top: 1px solid #ebebec;
  color: #26262b;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}

.os-popover-body ul {
  padding-inline: 0 !important;
  margin-inline: 0 !important;
  margin-bottom: 0 !important;
  display: grid;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px solid #ebebec;
  list-style: none;
  list-style-position: inside;
}

.os-popover-body li {
  margin: 0 !important;
  padding: 0 !important;
  color: #26262b;
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: 22px;
  list-style-type: disc !important;
  list-style-image: none !important;
}

.os-popover-body a {
  color: #e6842e;
}

.os-popover-footer {
  margin-top: 12px;
  padding-inline: 16px;
}

.os-popover-footer-inner {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding-top: 12px;
  border-top: 1px solid #ebebec;
}

.btn-download,
.btn-learn-more {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 22px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 4px;
  transition: color 0.15sease-in-out, background-color 0.15sease-in-out,
    border-color 0.15sease-in-out, box-shadow 0.15sease-in-out;
  cursor: pointer;
}

.btn-download {
  background-color: #26262b;
  color: #fff;
}
.btn-download:hover {
  background-color: #36383e;
}

.btn-learn-more {
  background-color: #fff;
  border: 1px solid #26262b;
  color: #26262b !important;
  text-decoration: none !important;
}

.os-popover-security {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
}
.os-popover-security::before {
  content: '';
  width: 15px;
  height: 17px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" fill="none"><g clip-path="url(%23a)"><path fill="%2326262B" fill-rule="evenodd" d="M8.064.666a2 2 0 0 0-1.128 0L.5 2.553v6.389a7 7 0 0 0 4.362 6.483l1.884.766a2 2 0 0 0 1.508 0l1.883-.766A7 7 0 0 0 14.5 8.944V2.555L8.064.666ZM7.5 2.585l-5 1.467v4.89a5 5 0 0 0 3.116 4.632l1.884.766V2.585Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="%23fff" d="M.5.5h14v16H.5z"/></clipPath></defs></svg>');
}

.os-dialog {
  max-width: 100%;
  width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 0;
  border: none;
  background: rgba(0, 0, 0, 0.2);
}

/* body:has(#signup-modal.is-open) :is(.os-dialog, .os-dialog::backdrop) {
  visibility: hidden;
  pointer-events: none;
} */
.os-dialog-inner {
  display: grid;
  place-content: end center;
  height: 100%;
  overflow-y: auto;
}

.os-dialog-close {
  margin-right: 16px;
  justify-self: end;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none"><g clip-path="url(%23a)"><path fill="%23fff" fill-rule="evenodd" d="M20 40.02c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Zm7.134-27.134a1.25 1.25 0 0 1 0 1.768l-5.366 5.366 5.366 5.366a1.25 1.25 0 0 1-1.768 1.768L20 21.788l-5.366 5.366a1.25 1.25 0 0 1-1.768-1.768l5.366-5.366-5.366-5.366a1.25 1.25 0 0 1 1.768-1.768L20 18.252l5.366-5.366a1.25 1.25 0 0 1 1.768 0Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="%23fff" d="M0 .02h40v40H0z"/></clipPath></defs></svg>');
}

.os-dialog-content {
  margin-top: 12px;
}

.os-dialog .os-popover {
  border-radius: 24px 24px 0 0;
}

body:has(.os-dialog[open]) {
  overflow: hidden;
}
`;
  class Sn {
    constructor() {
      this.popoverElement = null, this.aborters = [], this.init(), this.aborters = [];
    }
    init() {
      this.addStyles(), this.renderDialog();
    }
    content(t) {
      return (
        /* HTML */
        `<div class="os-popover-header">
        <div class="os-available">
          Available via Setapp
          <button class="os-popover-close" type="button"></button>
        </div>

        <div class="os-popover-header-inner">
          <img
            src="${t.imgSrc}"
            alt=""
            width="96"
            height="96"
            loading="lazy"
          />
          <div>
            <h3>${t.title}</h3>
            <p>${t.description}</p>
            <div class="os-popover-rating">
              ${t.ratingDetails ? (
          /* HTML */
          ` <div class="os-rating">
                      ${t.ratingDetails.percentage}
                    </div>
                    <div class="os-rating-amount">
                      ${t.ratingDetails.total} ratings
                    </div>`
        ) : ""}
            </div>
          </div>
        </div>
      </div>
      <div class="os-popover-body">
        <p>${t.body.text}</p>
        <ul>
          ${t.body.list.map((n) => `<li>${n}</li>`).join("")}
        </ul>
      </div>
      <div class="os-popover-footer">
        <div class="os-popover-footer-inner">
          <button class="btn-download" id="os-download">
            Try free for 7 days
          </button>
        </div>
      </div>
      <div class="os-popover-security">Security-tested</div>`
      );
    }
    returnHtml(t) {
      return (
        /* HTML */
        `
      <div class="os-popover">${this.content(t)}</div>
    `
      );
    }
    renderDialog() {
      var t;
      this.popoverElement = document.createElement("dialog"), this.popoverElement.classList.add("os-popover--dialog", "os-dialog"), this.popoverElement.id = "os-dialog", this.popoverElement.innerHTML = /* HTML */
      `
      <div class="os-dialog-inner">
        <button class="os-dialog-close" type="button"></button>
        <div class="os-dialog-content" id="os-dialog-content"></div>
      </div>
    `, (t = document.body) == null || t.appendChild(this.popoverElement);
    }
    showDialog(t) {
      var r;
      t && t !== "latest" && sessionStorage.setItem("os-tooltip-variant", JSON.stringify(t));
      const o = document.getElementById("os-dialog").querySelector(
        "#os-dialog-content"
      ), a = t === "latest" ? JSON.parse(sessionStorage.getItem("os-tooltip-variant")) : t;
      o.innerHTML = this.returnHtml(a), (r = this.popoverElement) == null || r.showModal(), this.eventListeners();
    }
    closeDialog() {
      if (!this.popoverElement) return;
      const t = this.popoverElement.querySelector(
        "#os-dialog-content"
      );
      this.popoverElement.close(), t.innerHTML = "", this.aborters.forEach((n) => {
        n.abort();
      }), this.aborters = [];
    }
    eventListeners() {
      if (!this.popoverElement) return;
      const t = document.getElementById("os-dialog"), n = t == null ? void 0 : t.querySelector(
        'button[type="button"]'
      );
      n == null || n.addEventListener("click", () => {
        this.closeDialog();
      });
      const o = new AbortController();
      this.aborters.push(o);
      const a = t.querySelector(
        ".btn-download"
      );
      a == null || a.addEventListener(
        "click",
        async () => {
          var c;
          (c = document.querySelector(".header__cta-button")) == null || c.click();
          const r = document.querySelector("#signup-modal");
          if (r) {
            const s = new MutationObserver((p) => {
              p.forEach((u) => {
                u.type === "attributes" && u.attributeName === "aria-hidden" && r.getAttribute("aria-hidden") === "true" && (s.disconnect(), this.showDialog("latest"));
              });
            });
            s.observe(r, { attributes: !0 });
          }
        },
        {
          signal: o.signal
        }
      );
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = Cn, document.head.appendChild(t);
    }
  }
  const An = [
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png",
      title: "Disk Drill",
      description: "Recover files and avoid data loss",
      link: "https://setapp.com/apps/disk-drill",
      ratingDetails: {
        percentage: "93%",
        total: "1224"
      },
      body: {
        text: "This first rated data recovery app can bring any kind of data back regardless of the loss cause. Indeed, no matter whether your stuff has gone because of data corruption, unintended removal, and disk utility error, it will help.",
        list: [
          "Recover deleted files",
          "Simple and fast data backup",
          "Hard drive data recovery",
          "Powerful data protection"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/217/40765/icon-1730479186-67250452d2169.png",
      title: "ChronoSync Express",
      description: "Sync and back up folders",
      link: "/apps/chronosync-express",
      ratingDetails: {
        percentage: "95%",
        total: "389"
      },
      body: {
        text: "Chronosync Express gives you peace of mind for the security of your files, office and personal data. This consistent application keeps your data safe and updated, no matter where you happen to be.",
        list: [
          "Home folder backup or sync",
          "Easy connection to Macs, iPhones and iPads",
          "File servers backup and auto mount",
          "Email and system notifications supported"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png",
      title: "Backup Pro",
      description: "Back up only essential files",
      link: "/apps/get-backup-pro",
      ratingDetails: {
        percentage: "86%",
        total: "281"
      },
      body: {
        text: "Try Get Backup Pro. It's a good mix of backup methods, coming with four varying ways of backups: simple copy, clone, incremental and versioned. Plus, it's used once you need to recover data that has been accidentally deleted from your Mac.",
        list: [
          "Backup only those units you want",
          "Scheduled backups with Stealth mode",
          "Recover to any computer",
          "Folder synchronization"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/289/42253/icon-1743678842-67ee6d7aeeda6.png",
      title: "CloudMounter",
      description: "Connect cloud storage to Finder",
      link: "/apps/cloudmounter",
      ratingDetails: {
        percentage: "90%",
        total: "1234"
      },
      body: {
        text: "CloudMounter connects your cloud storage accounts like Google Drive, Dropbox, Amazon S3, OneDrive, and others to your Mac's Finder so you can treat them as regular, local drives.",
        list: [
          "Secure cloud data encryption",
          "Streamlined into your Finder",
          "Access multiple cloud accounts",
          "Mount all Cloud storages as local disks"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/222/42263/icon-1743756630-67ef9d568e1e3.png",
      title: "Downie",
      description: "Download YouTube videos",
      link: "/apps/downie",
      ratingDetails: {
        percentage: "98%",
        total: "4372"
      },
      body: {
        text: "Find a video you want to download, then drag and drop the link into the app, or take advantage of a Downie browser extension doing it for you. That's literally all it takes to get that video on your Mac.",
        list: [
          "Download YouTube videos",
          "Download MP4 or just the audio",
          "Simply drag-and-drop an URL",
          "Save 4K YouTube videos"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png",
      title: "Pulltube",
      description: "Download and trim videos",
      link: "https://setapp.com/apps/pulltube",
      ratingDetails: {
        percentage: "98%",
        total: "1478"
      },
      body: {
        text: "Pulltube is a Mac app that enables you to save any type of video and audio content from the top websites like YouTube and Vimeo — in the best quality. 4K, 8K, HD, and 60fps videos are covered.",
        list: [
          "Download from 1000+ sites",
          "Trim your video and audio",
          "Capture video subtitles",
          "Download faster via extensions"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/321/42059/icon-1741882724-67d3056489850.png",
      title: "CleanShot X",
      description: "Take better screenshots and GIFs",
      link: "/apps/cleanshot",
      ratingDetails: {
        percentage: "99%",
        total: "11843"
      },
      body: {
        text: "CleanShot is the ultimate screen recording app made for macOS. With its rich toolkit, CleanShot actually feels like 6 apps in one. You can use it to swiftly capture Mac's screen without desktop icons, record and trim video, annotate, save screenshots to dedicated cloud, and more.",
        list: [
          "Record screen",
          "Hide desktop icons",
          "Annotate, highlight or blur",
          "Quick Access Overlay"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/328/41359/icon-1734924881-6768da51c8c1a.png",
      title: "AnyTrans for iOS",
      description: "Move files between macOS and iOS",
      link: "/apps/anytrans",
      body: {
        text: "The app instantly backups and copies your iPhone content to Mac, as well as transfers data across iOS, iTunes and iCloud. Connect a device and watch your content fly.",
        list: [
          "Schedule instant iPhone backups",
          "Manage iTunes and iCloud content",
          "Secure management of backups",
          "Download media from 900+ sites"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/67/41952/icon-1740773686-67c219360b852.png",
      title: "Ulysses",
      description: "Write and publish from one app",
      link: "/apps/ulysses",
      ratingDetails: {
        percentage: "99%",
        total: "2127"
      },
      body: {
        text: "It's an insanely functional writing program, yet it stays completely out of your way when you just need a page to write on. With Ulysses, every step of your story's lifecycle gets easier: you can write undistracted, format with a few keystrokes, and publish without leaving the app.",
        list: [
          "Write without distractions",
          "Stay safe with iCloud sync",
          "Export beautiful ebooks and PDFs",
          "Publish to WordPress or Medium"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/554/42201/icon-1743413950-67ea62be54f57.png",
      title: "Craft",
      description: "Create and structure documents",
      link: "/apps/craft",
      ratingDetails: {
        percentage: "99%",
        total: "2127"
      },
      body: {
        text: "Create efficient and visually pleasing documents to track your projects, ideas, plans, and more. File away your items into neatly organized folders or interlink via a master document.",
        list: [
          "Share what you are working on",
          "Use AI assistant",
          "Structure your items",
          "Collaborate easily"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/219/42264/icon-1743758208-67efa380b6636.png",
      title: "Permute",
      description: "Convert audio, images, and videos",
      link: "/apps/permute",
      ratingDetails: {
        percentage: "98%",
        total: "3778"
      },
      body: {
        text: "Permute is a quick image, audio, and video converter. You can use it for files of all formats because Permute can convert anything into anything.",
        list: [
          "Video converter",
          "Image converter",
          "Audio converter",
          "Video to audio converter"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/566/0/icon-1741357275-67cb00db1ded3.png",
      title: "Luminar Neo",
      description: "Improve your photos like a pro",
      link: "/apps/luminar-neo",
      ratingDetails: {
        percentage: "90%",
        total: "700"
      },
      body: {
        text: "Luminar Neo does everything you need done with your shots — from simple color and vibrancy fixes to more advanced clutter removal, sky replacement, improving the lighting in your photos and more.",
        list: [
          "Enhance photos with AI tools",
          "Utilize extensions",
          "Get the colors just right",
          "Use presets"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/299/42088/icon-1742267911-67d8e607487c0.png",
      title: "CameraBag Pro",
      description: "Edit photos and videos",
      link: "/apps/camerabag-pro",
      ratingDetails: {
        percentage: "90%",
        total: "428"
      },
      body: {
        text: "Create breathtaking photos and films with professional one-click filters, or tweak and adjust image settings precisely to impress your friends, colleagues, and clients easier than ever before.",
        list: [
          "Professional filters at the ready",
          "Quick and easy batch changes",
          "Intuitive adjustment tiles",
          "Award-winning interface"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/298/8541/icon-1691068510-64cba85e8b087.png",
      title: "TouchRetouch",
      description: "Remove objects from photos",
      link: "/apps/touchretouch",
      ratingDetails: {
        percentage: "98%",
        total: "680"
      },
      body: {
        text: "Don't let a poorly placed trash can or powerline ruin an otherwise perfect photo. With TouchRetouch, your Mac becomes an all-in-one photo retouching studio where you can get your images looking their best.",
        list: [
          "Remove unwanted objects",
          "Crop and edit photos",
          "Photo retouching in a click",
          "Line removal"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/433/42254/icon-1743694727-67eeab8756821.png",
      title: "ClearVPN",
      description: "Use an intuitive VPN",
      link: "/apps/clearvpn",
      ratingDetails: {
        percentage: "88%",
        total: "2686"
      },
      body: {
        text: "The app offers simple, ready-made tools that help you spend less time tweaking your VPN's settings and more time actually doing what you want done. Stay more anonymous online, protect your personal information, connect to servers from a specific country and more in a click.",
        list: [
          "Deploy a VPN easily",
          "Change geolocation",
          "Enjoy perfectly usable speeds",
          "Keep your data anonymous"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/517/41861/icon-1740384397-67bc288ddd017.png",
      title: "AddLock",
      description: "Block annoying browser ads",
      link: "/apps/adlock",
      ratingDetails: {
        percentage: "69%",
        total: "711"
      },
      body: {
        text: "AdLock — a simple blocker for intrusive pop-up ads, annoying online chats, snoopers, and trackers. Save traffic on autoplay videos and remove unwanted distractions by blocking out ad types you'd like to avoid.",
        list: [
          "Block intrusive ads",
          "Use flexible blocking",
          "Browse safely",
          "Remove distractions"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/496/41929/icon-1740575425-67bf12c1bdfa7.png",
      title: "Pareto Security",
      description: "Check your security settings",
      link: "/apps/pareto-security",
      ratingDetails: {
        percentage: "97%",
        total: "634"
      },
      body: {
        text: "Pareto Security checks your device to see if you've utilized all these solutions and lets you know what can be improved. Always keep your Mac security settings up to par with this helpful tool.",
        list: [
          "Easy security",
          "Menu bar interface",
          "Security checklist",
          "Automatic checks"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/587/41798/icon-1739292259-67ab7e63760de.png",
      title: "Secrets 4",
      description: "Store and manage passwords",
      link: "/apps/secrets",
      ratingDetails: {
        percentage: "77%",
        total: "151"
      },
      body: {
        text: "Keep your secrets secret with Secrets 4, an updated tool to lock your sensitive information away. Your passwords are not synced to the app's server and are stored on your device or in your iCloud. Easily generate, store, use, and share your passwords.",
        list: [
          "Store sensitive information",
          "Generate passwords",
          "Share passwords",
          "Sync between devices"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/194/10197/icon-1711963165-660a7c1d7fdbc.png",
      title: "Archiver",
      description: "Compress and unarchive files",
      link: "/apps/archiver",
      ratingDetails: {
        percentage: "97%",
        total: "1435"
      },
      body: {
        text: "Zip, unpack and encrypt archives, split big files. You will enjoy its smooth interface, compelling features, and a rapid workflow. Definitely one of the today's most feature-rich file extractor and compressor programs.",
        list: [
          "Unpack folders and files in a snap",
          "Compress files to get more space",
          "Encrypt and password protect archives",
          "Preview files in archive without their opening"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/245/7858/icon-1681236553-6435a249c1fd2.png",
      title: "BetterZip",
      description: "Create and encrypt archives",
      link: "/apps/betterzip",
      ratingDetails: {
        percentage: "96%",
        total: "2353"
      },
      body: {
        text: "Delete the unnecessary files right in the archives, preview with Quick Look, rename or move files or folders there - no need to recompress!",
        list: [
          "Convenient ZIP file reader and manager",
          "Archive comments for ZIP and RAR formats",
          "Reliable password generator and manager",
          "Over 30 archive formats support + ISO extractor"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/78/43873/icon-1749713159-684a8107ee73d.png",
      title: "CleanMyMac",
      description: "Tidy up your Mac",
      link: "https://setapp.com/apps/cleanmymac",
      ratingDetails: {
        percentage: "97%",
        total: "15454"
      },
      body: {
        text: "CleanMyMac is an all-in-one Mac care app. Run performance optimization, free up space, eliminate duplicates, and manage apps seamlessly.",
        list: [
          "Care smarter",
          "Steer clear of malware",
          "Free up space",
          "Declutter your space"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/144/41794/icon-1739274958-67ab3ace7a0bf.png",
      title: "iStat Menus",
      description: "Track CPU, GPU, sensors, etc.",
      link: "https://setapp.com/apps/istat-menus",
      ratingDetails: {
        percentage: "97%",
        total: "4991"
      },
      body: {
        text: "The most comprehensive Mac monitor to date. iStat Menus is a fully-equipped system data collector that lives in your menu bar and provides vital info about the key indicators.",
        list: ["CPU & GPU", "Disk usage & activity", "Memory", "Sensors"]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/493/10507/icon-1715515857-6640b1d134f36.png",
      title: "QuitAll",
      description: "Speed up Mac by quitting all apps",
      link: "https://setapp.com/apps/quit-all-mac",
      ratingDetails: {
        percentage: "98%",
        total: "1635"
      },
      body: {
        text: "Love handling all the tasks at the same time but hate closing multiple apps one by one? Or find yourself stuck when your machine stalls due to too many apps running in the background?",
        list: [
          "Quick quit",
          "Handle background apps",
          "Force quit",
          "Customize to your needs"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/301/42576/icon-1746973828-6820b484ae86f.png",
      title: "Endurance",
      description: "Extend your battery life",
      link: "https://setapp.com/apps/endurance",
      ratingDetails: {
        percentage: "94%",
        total: "569"
      },
      body: {
        text: "Did you ever wish you could squeeze a little more battery life out of your MacBook? Now there’s Endurance, the app designed to make your laptop battery last longer while improving its overall battery health.",
        list: [
          "Lower the lights",
          "Snooze inactive apps",
          "Toggle your turbo",
          "Lessen dependence on Flash"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/483/42676/icon-1747828119-682dbd97182a6.png",
      title: "AlDente Pro",
      description: "Set battery charging limits",
      link: "https://setapp.com/apps/aldente-pro",
      ratingDetails: {
        percentage: "98%",
        total: "2847"
      },
      body: {
        text: "You may have heard that having your device plugged in and at 100% all day long is not the best for the battery. You may also have been trying to make sure you don’t go below 20 or 30% on your battery.",
        list: [
          "Set charging limit",
          "Stop charging when hot",
          "Run on battery when plugged in",
          "Monitor status and manage"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/376/42548/icon-1746731563-681d022b89238.png",
      title: "Mission Control",
      description: "Close windows from Mission Control",
      link: "https://setapp.com/apps/mission-control-plus",
      ratingDetails: {
        percentage: "98%",
        total: "968"
      },
      body: {
        text: "Tweak Mac’s native Mission Control feature to make the most out of it. Mission Control Plus is an app that adds the close button to all open windows you can view from Mission Control on Mac. It also covers a few shortcuts for quick actions like closing apps or killing active processes.",
        list: [
          "Master Mission Control and improve it",
          "Useful shortcuts for batch actions",
          "Close windows in Mission Control",
          "Enjoy the native experience"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/528/42687/icon-1747926996-682f3fd48a02b.png",
      title: "WidgetWall",
      description: "Add widgets to Mac desktop",
      link: "https://setapp.com/apps/widget-wall",
      ratingDetails: {
        percentage: "88%",
        total: "469"
      },
      body: {
        text: "Customize your Mac desktop with widgets — add favorite apps, pictures, Mac stats, and even websites for quick access. Build your very own widget wall on your desktop with WidgetWall.",
        list: [
          "Desktop overlay",
          "Desktop browser widget",
          "Quick access to tools",
          "Easy customization"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/153/42799/icon-1748962599-683f0d271f5a8.png",
      title: "Bartender",
      description: "Personalize your menu bar",
      link: "https://setapp.com/apps/bartender",
      ratingDetails: {
        percentage: "99%",
        total: "14530"
      },
      body: {
        text: "Bartender is a slick utility app and a one-stop menu bar organizer for Mac. It helps to organize, search, and actually use your Mac menu bar icons while also keeping your desktop tidy.",
        list: [
          "Customize the macOS menu bar",
          "Search menu items",
          "Reorder all icons",
          "Make your own hotkeys"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/321/42718/icon-1748347773-6835ab7ddfd5d.png",
      title: "CleanShot X",
      description: "Take better screenshots and GIFs",
      link: "https://setapp.com/apps/cleanshot",
      ratingDetails: {
        percentage: "99%",
        total: "12298"
      },
      body: {
        text: "CleanShot is the ultimate screen recording app made for macOS. With its rich toolkit, CleanShot actually feels like 6 apps in one. You can use it to swiftly capture Mac’s screen without desktop icons, record and trim video, annotate, save screenshots to dedicated cloud, and more.",
        list: [
          "CleanShot Cloud",
          "Quick Access Overlay",
          "Hide desktop icons",
          "Simple yet powerful"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/428/42692/icon-1747967217-682fdcf1a2474.png",
      title: "Session",
      description: "Work in short intervals",
      link: "https://setapp.com/apps/session",
      ratingDetails: {
        percentage: "98%",
        total: "1943"
      },
      body: {
        text: "Session is a focus app that helps build your productivity momentum. Block distractions, work in short intervals, and take regular breaks to recharge your mind. What makes Session stand out is its huge focus on analytics.",
        list: [
          "25 minutes of focused work",
          "Reflect on your sessions",
          "Block distractions",
          "See how you perform over time"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/518/42755/icon-1749071187-6840b55359ae5.png",
      title: "Nitro PDF Pro",
      description: "Work with your PDFs",
      link: "https://setapp.com/apps/nitro-pdf-pro",
      ratingDetails: {
        percentage: "89%",
        total: "2746"
      },
      body: {
        text: "Discover this all-round tool for all your PDF editing needs. Create and edit PDFs in Nitro PDF Pro, merge multiple files into one document, or convert into popular formats. ",
        list: [
          "Create and edit PDFs",
          "Merge PDFs",
          "Annotate PDFs",
          "Convert PDFs"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png",
      title: "Get Backup Pro",
      description: "Back up only essential files",
      link: "https://setapp.com/apps/get-backup-pro",
      ratingDetails: {
        percentage: "86%",
        total: "288"
      },
      body: {
        text: "You've got a lot of data stored on your computer, right? How about a reliable backup utility for your Mac to be able to resist any kind of data-loss catastrophes? Try Get Backup Pro. It’s a good mix of backup methods, coming with four varying ways of backups: simple copy, clone, incremental and versioned.",
        list: [
          "Backup only those units you want",
          "Folder synchronization",
          "Incremental and compressed backups",
          "Scheduled backups with Stealth mode"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/136/40792/icon-1730733142-6728e4563df6a.png",
      title: "Renamer",
      description: "Rename a batch of files",
      link: "https://setapp.com/apps/renamer",
      ratingDetails: {
        percentage: "96%",
        total: "935"
      },
      body: {
        text: "What if you could rename lots of files in a snap? Feels wonderful, right? Renamer makes it possible! This robust application takes the pain out of renaming and managing dozens of files.",
        list: [
          "Multiple ways to rename files",
          "Keep your music organized",
          "Live preview",
          "Convert upper and lower cases"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/122/41549/icon-1737112183-678a3a77b43aa.png",
      title: "CodeRunner",
      description: "Edit and run code faster",
      link: "https://setapp.com/apps/coderunner",
      ratingDetails: {
        percentage: "96%",
        total: "1186"
      },
      body: {
        text: "Simplify your software development with the lightning-fast code editor. Write, run, and debug quickly from a single app with out-of-the-box support for more than 25 languages.",
        list: [
          "Build smarter",
          "Debug like a dream",
          "Beautify your code",
          "Search docs swiftly"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/606/42481/icon-1746107539-68137c9375583.png",
      title: "PDF Pals",
      description: "Chat with your PDFs",
      link: "https://setapp.com/apps/pdf-pals",
      ratingDetails: {
        percentage: "89%",
        total: "354"
      },
      body: {
        text: "What if the long report you’ve been going over could talk? What if you could just type in some questions and it could give you the answer right away, without having to read (or re-read) it top to bottom? PDF Pals app does exactly that.",
        list: [
          "Interact with your PDFs",
          "No uploads needed",
          "Get answers with citations",
          "Customize your chat"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/592/43811/icon-1749109056-68414940d76a1.png",
      title: "MurmurType",
      description: "Transcribe your speech",
      link: "https://setapp.com/apps/murmur",
      ratingDetails: {
        percentage: "83%",
        total: "323"
      },
      body: {
        text: "Got a lot to say and not a lot of time to type it all out? MurmurType is here to help. Record your voice and get the transcription right away. And if you prefer to speak another language, you can set the app to translate your speech into English.",
        list: [
          "Easy-to-use interface",
          "Quick translation",
          "Automated silence tracker",
          "Keyboard shortcuts"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/607/main/icon-65719fa98f5e6.png",
      title: "Ready to Send",
      description: "Generate draft email replies",
      link: "https://setapp.com/apps/ready-to-send",
      body: {
        text: "Start your day with some work already done using Ready to Send. This web app connects to your Gmail, finds unread emails that need replying, and generates handy drafts. All you need to do is review, edit, and send.",
        list: [
          "Get automated email reply drafts",
          "Disable auto-generated responses",
          "Customize response style",
          "Add calendar links automatically"
        ]
      }
    }
  ];
  var $ = "top", N = "bottom", U = "right", F = "left", de = "auto", Tt = [$, N, U, F], wt = "start", Pt = "end", On = "clippingParents", Te = "viewport", Lt = "popper", Mn = "reference", Pe = /* @__PURE__ */ Tt.reduce(function(e, t) {
    return e.concat([t + "-" + wt, t + "-" + Pt]);
  }, []), Le = /* @__PURE__ */ [].concat(Tt, [de]).reduce(function(e, t) {
    return e.concat([t, t + "-" + wt, t + "-" + Pt]);
  }, []), En = "beforeRead", Dn = "read", Tn = "afterRead", Pn = "beforeMain", Ln = "main", Rn = "afterMain", qn = "beforeWrite", Bn = "write", In = "afterWrite", jn = [En, Dn, Tn, Pn, Ln, Rn, qn, Bn, In];
  function X(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function _(e) {
    if (e == null)
      return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function ft(e) {
    var t = _(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Y(e) {
    var t = _(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function ue(e) {
    if (typeof ShadowRoot > "u")
      return !1;
    var t = _(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function zn(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, a = t.attributes[n] || {}, r = t.elements[n];
      !Y(r) || !X(r) || (Object.assign(r.style, o), Object.keys(a).forEach(function(c) {
        var s = a[c];
        s === !1 ? r.removeAttribute(c) : r.setAttribute(c, s === !0 ? "" : s);
      }));
    });
  }
  function Hn(e) {
    var t = e.state, n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
      Object.keys(t.elements).forEach(function(o) {
        var a = t.elements[o], r = t.attributes[o] || {}, c = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = c.reduce(function(p, u) {
          return p[u] = "", p;
        }, {});
        !Y(a) || !X(a) || (Object.assign(a.style, s), Object.keys(r).forEach(function(p) {
          a.removeAttribute(p);
        }));
      });
    };
  }
  const Re = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: zn,
    effect: Hn,
    requires: ["computeStyles"]
  };
  function K(e) {
    return e.split("-")[0];
  }
  var mt = Math.max, Wt = Math.min, xt = Math.round;
  function fe() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function qe() {
    return !/^((?!chrome|android).)*safari/i.test(fe());
  }
  function kt(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var o = e.getBoundingClientRect(), a = 1, r = 1;
    t && Y(e) && (a = e.offsetWidth > 0 && xt(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && xt(o.height) / e.offsetHeight || 1);
    var c = ft(e) ? _(e) : window, s = c.visualViewport, p = !qe() && n, u = (o.left + (p && s ? s.offsetLeft : 0)) / a, d = (o.top + (p && s ? s.offsetTop : 0)) / r, k = o.width / a, x = o.height / r;
    return {
      width: k,
      height: x,
      top: d,
      right: u + k,
      bottom: d + x,
      left: u,
      x: u,
      y: d
    };
  }
  function me(e) {
    var t = kt(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function Be(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t))
      return !0;
    if (n && ue(n)) {
      var o = t;
      do {
        if (o && e.isSameNode(o))
          return !0;
        o = o.parentNode || o.host;
      } while (o);
    }
    return !1;
  }
  function nt(e) {
    return _(e).getComputedStyle(e);
  }
  function $n(e) {
    return ["table", "td", "th"].indexOf(X(e)) >= 0;
  }
  function ct(e) {
    return ((ft(e) ? e.ownerDocument : (
      // $FlowFixMe[prop-missing]
      e.document
    )) || window.document).documentElement;
  }
  function Nt(e) {
    return X(e) === "html" ? e : (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      e.parentNode || // DOM Element detected
      (ue(e) ? e.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      ct(e)
    );
  }
  function Ie(e) {
    return !Y(e) || // https://github.com/popperjs/popper-core/issues/837
    nt(e).position === "fixed" ? null : e.offsetParent;
  }
  function Fn(e) {
    var t = /firefox/i.test(fe()), n = /Trident/i.test(fe());
    if (n && Y(e)) {
      var o = nt(e);
      if (o.position === "fixed")
        return null;
    }
    var a = Nt(e);
    for (ue(a) && (a = a.host); Y(a) && ["html", "body"].indexOf(X(a)) < 0; ) {
      var r = nt(a);
      if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
        return a;
      a = a.parentNode;
    }
    return null;
  }
  function Rt(e) {
    for (var t = _(e), n = Ie(e); n && $n(n) && nt(n).position === "static"; )
      n = Ie(n);
    return n && (X(n) === "html" || X(n) === "body" && nt(n).position === "static") ? t : n || Fn(e) || t;
  }
  function he(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function qt(e, t, n) {
    return mt(e, Wt(t, n));
  }
  function _n(e, t, n) {
    var o = qt(e, t, n);
    return o > n ? n : o;
  }
  function je() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function ze(e) {
    return Object.assign({}, je(), e);
  }
  function He(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var Vn = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, ze(typeof t != "number" ? t : He(t, Tt));
  };
  function Wn(e) {
    var t, n = e.state, o = e.name, a = e.options, r = n.elements.arrow, c = n.modifiersData.popperOffsets, s = K(n.placement), p = he(s), u = [F, U].indexOf(s) >= 0, d = u ? "height" : "width";
    if (!(!r || !c)) {
      var k = Vn(a.padding, n), x = me(r), v = p === "y" ? $ : F, y = p === "y" ? N : U, g = n.rects.reference[d] + n.rects.reference[p] - c[p] - n.rects.popper[d], h = c[p] - n.rects.reference[p], f = Rt(r), C = f ? p === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, A = g / 2 - h / 2, i = k[v], b = C - x[d] - k[y], m = C / 2 - x[d] / 2 + A, O = qt(i, m, b), E = p;
      n.modifiersData[o] = (t = {}, t[E] = O, t.centerOffset = O - m, t);
    }
  }
  function Nn(e) {
    var t = e.state, n = e.options, o = n.element, a = o === void 0 ? "[data-popper-arrow]" : o;
    a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Be(t.elements.popper, a) && (t.elements.arrow = a));
  }
  const Un = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Wn,
    effect: Nn,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function Ct(e) {
    return e.split("-")[1];
  }
  var Yn = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Gn(e, t) {
    var n = e.x, o = e.y, a = t.devicePixelRatio || 1;
    return {
      x: xt(n * a) / a || 0,
      y: xt(o * a) / a || 0
    };
  }
  function $e(e) {
    var t, n = e.popper, o = e.popperRect, a = e.placement, r = e.variation, c = e.offsets, s = e.position, p = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, k = e.isFixed, x = c.x, v = x === void 0 ? 0 : x, y = c.y, g = y === void 0 ? 0 : y, h = typeof d == "function" ? d({
      x: v,
      y: g
    }) : {
      x: v,
      y: g
    };
    v = h.x, g = h.y;
    var f = c.hasOwnProperty("x"), C = c.hasOwnProperty("y"), A = F, i = $, b = window;
    if (u) {
      var m = Rt(n), O = "clientHeight", E = "clientWidth";
      if (m === _(n) && (m = ct(n), nt(m).position !== "static" && s === "absolute" && (O = "scrollHeight", E = "scrollWidth")), m = m, a === $ || (a === F || a === U) && r === Pt) {
        i = N;
        var T = k && m === b && b.visualViewport ? b.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          m[O]
        );
        g -= T - o.height, g *= p ? 1 : -1;
      }
      if (a === F || (a === $ || a === N) && r === Pt) {
        A = U;
        var P = k && m === b && b.visualViewport ? b.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          m[E]
        );
        v -= P - o.width, v *= p ? 1 : -1;
      }
    }
    var q = Object.assign({
      position: s
    }, u && Yn), R = d === !0 ? Gn({
      x: v,
      y: g
    }, _(n)) : {
      x: v,
      y: g
    };
    if (v = R.x, g = R.y, p) {
      var L;
      return Object.assign({}, q, (L = {}, L[i] = C ? "0" : "", L[A] = f ? "0" : "", L.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + g + "px)" : "translate3d(" + v + "px, " + g + "px, 0)", L));
    }
    return Object.assign({}, q, (t = {}, t[i] = C ? g + "px" : "", t[A] = f ? v + "px" : "", t.transform = "", t));
  }
  function Zn(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, a = o === void 0 ? !0 : o, r = n.adaptive, c = r === void 0 ? !0 : r, s = n.roundOffsets, p = s === void 0 ? !0 : s, u = {
      placement: K(t.placement),
      variation: Ct(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, $e(Object.assign({}, u, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: c,
      roundOffsets: p
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, $e(Object.assign({}, u, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: !1,
      roundOffsets: p
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const Xn = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: Zn,
    data: {}
  };
  var Ut = {
    passive: !0
  };
  function Kn(e) {
    var t = e.state, n = e.instance, o = e.options, a = o.scroll, r = a === void 0 ? !0 : a, c = o.resize, s = c === void 0 ? !0 : c, p = _(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return r && u.forEach(function(d) {
      d.addEventListener("scroll", n.update, Ut);
    }), s && p.addEventListener("resize", n.update, Ut), function() {
      r && u.forEach(function(d) {
        d.removeEventListener("scroll", n.update, Ut);
      }), s && p.removeEventListener("resize", n.update, Ut);
    };
  }
  const Qn = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {
    },
    effect: Kn,
    data: {}
  };
  var Jn = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Yt(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Jn[t];
    });
  }
  var to = {
    start: "end",
    end: "start"
  };
  function Fe(e) {
    return e.replace(/start|end/g, function(t) {
      return to[t];
    });
  }
  function ge(e) {
    var t = _(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function ve(e) {
    return kt(ct(e)).left + ge(e).scrollLeft;
  }
  function eo(e, t) {
    var n = _(e), o = ct(e), a = n.visualViewport, r = o.clientWidth, c = o.clientHeight, s = 0, p = 0;
    if (a) {
      r = a.width, c = a.height;
      var u = qe();
      (u || !u && t === "fixed") && (s = a.offsetLeft, p = a.offsetTop);
    }
    return {
      width: r,
      height: c,
      x: s + ve(e),
      y: p
    };
  }
  function no(e) {
    var t, n = ct(e), o = ge(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, r = mt(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = mt(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -o.scrollLeft + ve(e), p = -o.scrollTop;
    return nt(a || n).direction === "rtl" && (s += mt(n.clientWidth, a ? a.clientWidth : 0) - r), {
      width: r,
      height: c,
      x: s,
      y: p
    };
  }
  function be(e) {
    var t = nt(e), n = t.overflow, o = t.overflowX, a = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + a + o);
  }
  function _e(e) {
    return ["html", "body", "#document"].indexOf(X(e)) >= 0 ? e.ownerDocument.body : Y(e) && be(e) ? e : _e(Nt(e));
  }
  function Bt(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = _e(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = _(o), c = a ? [r].concat(r.visualViewport || [], be(o) ? o : []) : o, s = t.concat(c);
    return a ? s : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      s.concat(Bt(Nt(c)))
    );
  }
  function ye(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function oo(e, t) {
    var n = kt(e, !1, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function Ve(e, t, n) {
    return t === Te ? ye(eo(e, n)) : ft(t) ? oo(t, n) : ye(no(ct(e)));
  }
  function io(e) {
    var t = Bt(Nt(e)), n = ["absolute", "fixed"].indexOf(nt(e).position) >= 0, o = n && Y(e) ? Rt(e) : e;
    return ft(o) ? t.filter(function(a) {
      return ft(a) && Be(a, o) && X(a) !== "body";
    }) : [];
  }
  function ao(e, t, n, o) {
    var a = t === "clippingParents" ? io(e) : [].concat(t), r = [].concat(a, [n]), c = r[0], s = r.reduce(function(p, u) {
      var d = Ve(e, u, o);
      return p.top = mt(d.top, p.top), p.right = Wt(d.right, p.right), p.bottom = Wt(d.bottom, p.bottom), p.left = mt(d.left, p.left), p;
    }, Ve(e, c, o));
    return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
  }
  function We(e) {
    var t = e.reference, n = e.element, o = e.placement, a = o ? K(o) : null, r = o ? Ct(o) : null, c = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, p;
    switch (a) {
      case $:
        p = {
          x: c,
          y: t.y - n.height
        };
        break;
      case N:
        p = {
          x: c,
          y: t.y + t.height
        };
        break;
      case U:
        p = {
          x: t.x + t.width,
          y: s
        };
        break;
      case F:
        p = {
          x: t.x - n.width,
          y: s
        };
        break;
      default:
        p = {
          x: t.x,
          y: t.y
        };
    }
    var u = a ? he(a) : null;
    if (u != null) {
      var d = u === "y" ? "height" : "width";
      switch (r) {
        case wt:
          p[u] = p[u] - (t[d] / 2 - n[d] / 2);
          break;
        case Pt:
          p[u] = p[u] + (t[d] / 2 - n[d] / 2);
          break;
      }
    }
    return p;
  }
  function It(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, a = o === void 0 ? e.placement : o, r = n.strategy, c = r === void 0 ? e.strategy : r, s = n.boundary, p = s === void 0 ? On : s, u = n.rootBoundary, d = u === void 0 ? Te : u, k = n.elementContext, x = k === void 0 ? Lt : k, v = n.altBoundary, y = v === void 0 ? !1 : v, g = n.padding, h = g === void 0 ? 0 : g, f = ze(typeof h != "number" ? h : He(h, Tt)), C = x === Lt ? Mn : Lt, A = e.rects.popper, i = e.elements[y ? C : x], b = ao(ft(i) ? i : i.contextElement || ct(e.elements.popper), p, d, c), m = kt(e.elements.reference), O = We({
      reference: m,
      element: A,
      placement: a
    }), E = ye(Object.assign({}, A, O)), T = x === Lt ? E : m, P = {
      top: b.top - T.top + f.top,
      bottom: T.bottom - b.bottom + f.bottom,
      left: b.left - T.left + f.left,
      right: T.right - b.right + f.right
    }, q = e.modifiersData.offset;
    if (x === Lt && q) {
      var R = q[a];
      Object.keys(P).forEach(function(L) {
        var I = [U, N].indexOf(L) >= 0 ? 1 : -1, W = [$, N].indexOf(L) >= 0 ? "y" : "x";
        P[L] += R[W] * I;
      });
    }
    return P;
  }
  function ro(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, a = n.boundary, r = n.rootBoundary, c = n.padding, s = n.flipVariations, p = n.allowedAutoPlacements, u = p === void 0 ? Le : p, d = Ct(o), k = d ? s ? Pe : Pe.filter(function(y) {
      return Ct(y) === d;
    }) : Tt, x = k.filter(function(y) {
      return u.indexOf(y) >= 0;
    });
    x.length === 0 && (x = k);
    var v = x.reduce(function(y, g) {
      return y[g] = It(e, {
        placement: g,
        boundary: a,
        rootBoundary: r,
        padding: c
      })[K(g)], y;
    }, {});
    return Object.keys(v).sort(function(y, g) {
      return v[y] - v[g];
    });
  }
  function so(e) {
    if (K(e) === de)
      return [];
    var t = Yt(e);
    return [Fe(e), t, Fe(t)];
  }
  function co(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var a = n.mainAxis, r = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !0 : c, p = n.fallbackPlacements, u = n.padding, d = n.boundary, k = n.rootBoundary, x = n.altBoundary, v = n.flipVariations, y = v === void 0 ? !0 : v, g = n.allowedAutoPlacements, h = t.options.placement, f = K(h), C = f === h, A = p || (C || !y ? [Yt(h)] : so(h)), i = [h].concat(A).reduce(function(it, Z) {
        return it.concat(K(Z) === de ? ro(t, {
          placement: Z,
          boundary: d,
          rootBoundary: k,
          padding: u,
          flipVariations: y,
          allowedAutoPlacements: g
        }) : Z);
      }, []), b = t.rects.reference, m = t.rects.popper, O = /* @__PURE__ */ new Map(), E = !0, T = i[0], P = 0; P < i.length; P++) {
        var q = i[P], R = K(q), L = Ct(q) === wt, I = [$, N].indexOf(R) >= 0, W = I ? "width" : "height", j = It(t, {
          placement: q,
          boundary: d,
          rootBoundary: k,
          altBoundary: x,
          padding: u
        }), z = I ? L ? U : F : L ? N : $;
        b[W] > m[W] && (z = Yt(z));
        var B = Yt(z), J = [];
        if (r && J.push(j[R] <= 0), s && J.push(j[z] <= 0, j[B] <= 0), J.every(function(it) {
          return it;
        })) {
          T = q, E = !1;
          break;
        }
        O.set(q, J);
      }
      if (E)
        for (var tt = y ? 3 : 1, gt = function(Z) {
          var at = i.find(function(At) {
            var rt = O.get(At);
            if (rt)
              return rt.slice(0, Z).every(function(Ot) {
                return Ot;
              });
          });
          if (at)
            return T = at, "break";
        }, et = tt; et > 0; et--) {
          var vt = gt(et);
          if (vt === "break") break;
        }
      t.placement !== T && (t.modifiersData[o]._skip = !0, t.placement = T, t.reset = !0);
    }
  }
  const po = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: co,
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };
  function Ne(e, t, n) {
    return n === void 0 && (n = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    };
  }
  function Ue(e) {
    return [$, U, N, F].some(function(t) {
      return e[t] >= 0;
    });
  }
  function lo(e) {
    var t = e.state, n = e.name, o = t.rects.reference, a = t.rects.popper, r = t.modifiersData.preventOverflow, c = It(t, {
      elementContext: "reference"
    }), s = It(t, {
      altBoundary: !0
    }), p = Ne(c, o), u = Ne(s, a, r), d = Ue(p), k = Ue(u);
    t.modifiersData[n] = {
      referenceClippingOffsets: p,
      popperEscapeOffsets: u,
      isReferenceHidden: d,
      hasPopperEscaped: k
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": d,
      "data-popper-escaped": k
    });
  }
  const uo = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: lo
  };
  function fo(e, t, n) {
    var o = K(e), a = [F, $].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, c = r[0], s = r[1];
    return c = c || 0, s = (s || 0) * a, [F, U].indexOf(o) >= 0 ? {
      x: s,
      y: c
    } : {
      x: c,
      y: s
    };
  }
  function mo(e) {
    var t = e.state, n = e.options, o = e.name, a = n.offset, r = a === void 0 ? [0, 0] : a, c = Le.reduce(function(d, k) {
      return d[k] = fo(k, t.rects, r), d;
    }, {}), s = c[t.placement], p = s.x, u = s.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += p, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = c;
  }
  const ho = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: mo
  };
  function go(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = We({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const vo = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: go,
    data: {}
  };
  function bo(e) {
    return e === "x" ? "y" : "x";
  }
  function yo(e) {
    var t = e.state, n = e.options, o = e.name, a = n.mainAxis, r = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !1 : c, p = n.boundary, u = n.rootBoundary, d = n.altBoundary, k = n.padding, x = n.tether, v = x === void 0 ? !0 : x, y = n.tetherOffset, g = y === void 0 ? 0 : y, h = It(t, {
      boundary: p,
      rootBoundary: u,
      padding: k,
      altBoundary: d
    }), f = K(t.placement), C = Ct(t.placement), A = !C, i = he(f), b = bo(i), m = t.modifiersData.popperOffsets, O = t.rects.reference, E = t.rects.popper, T = typeof g == "function" ? g(Object.assign({}, t.rects, {
      placement: t.placement
    })) : g, P = typeof T == "number" ? {
      mainAxis: T,
      altAxis: T
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, T), q = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, R = {
      x: 0,
      y: 0
    };
    if (m) {
      if (r) {
        var L, I = i === "y" ? $ : F, W = i === "y" ? N : U, j = i === "y" ? "height" : "width", z = m[i], B = z + h[I], J = z - h[W], tt = v ? -E[j] / 2 : 0, gt = C === wt ? O[j] : E[j], et = C === wt ? -E[j] : -O[j], vt = t.elements.arrow, it = v && vt ? me(vt) : {
          width: 0,
          height: 0
        }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : je(), at = Z[I], At = Z[W], rt = qt(0, O[j], it[j]), Ot = A ? O[j] / 2 - tt - rt - at - P.mainAxis : gt - rt - at - P.mainAxis, dt = A ? -O[j] / 2 + tt + rt + At + P.mainAxis : et + rt + At + P.mainAxis, Mt = t.elements.arrow && Rt(t.elements.arrow), Jt = Mt ? i === "y" ? Mt.clientTop || 0 : Mt.clientLeft || 0 : 0, Ht = (L = q == null ? void 0 : q[i]) != null ? L : 0, te = z + Ot - Ht - Jt, ee = z + dt - Ht, $t = qt(v ? Wt(B, te) : B, z, v ? mt(J, ee) : J);
        m[i] = $t, R[i] = $t - z;
      }
      if (s) {
        var Ft, ne = i === "x" ? $ : F, oe = i === "x" ? N : U, st = m[b], ut = b === "y" ? "height" : "width", _t = st + h[ne], bt = st - h[oe], Vt = [$, F].indexOf(f) !== -1, ie = (Ft = q == null ? void 0 : q[b]) != null ? Ft : 0, ae = Vt ? _t : st - O[ut] - E[ut] - ie + P.altAxis, re = Vt ? st + O[ut] + E[ut] - ie - P.altAxis : bt, se = v && Vt ? _n(ae, st, re) : qt(v ? ae : _t, st, v ? re : bt);
        m[b] = se, R[b] = se - st;
      }
      t.modifiersData[o] = R;
    }
  }
  const wo = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: yo,
    requiresIfExists: ["offset"]
  };
  function xo(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function ko(e) {
    return e === _(e) || !Y(e) ? ge(e) : xo(e);
  }
  function Co(e) {
    var t = e.getBoundingClientRect(), n = xt(t.width) / e.offsetWidth || 1, o = xt(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function So(e, t, n) {
    n === void 0 && (n = !1);
    var o = Y(t), a = Y(t) && Co(t), r = ct(t), c = kt(e, a, n), s = {
      scrollLeft: 0,
      scrollTop: 0
    }, p = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((X(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    be(r)) && (s = ko(t)), Y(t) ? (p = kt(t, !0), p.x += t.clientLeft, p.y += t.clientTop) : r && (p.x = ve(r))), {
      x: c.left + s.scrollLeft - p.x,
      y: c.top + s.scrollTop - p.y,
      width: c.width,
      height: c.height
    };
  }
  function Ao(e) {
    var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
    e.forEach(function(r) {
      t.set(r.name, r);
    });
    function a(r) {
      n.add(r.name);
      var c = [].concat(r.requires || [], r.requiresIfExists || []);
      c.forEach(function(s) {
        if (!n.has(s)) {
          var p = t.get(s);
          p && a(p);
        }
      }), o.push(r);
    }
    return e.forEach(function(r) {
      n.has(r.name) || a(r);
    }), o;
  }
  function Oo(e) {
    var t = Ao(e);
    return jn.reduce(function(n, o) {
      return n.concat(t.filter(function(a) {
        return a.phase === o;
      }));
    }, []);
  }
  function Mo(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function Eo(e) {
    var t = e.reduce(function(n, o) {
      var a = n[o.name];
      return n[o.name] = a ? Object.assign({}, a, o, {
        options: Object.assign({}, a.options, o.options),
        data: Object.assign({}, a.data, o.data)
      }) : o, n;
    }, {});
    return Object.keys(t).map(function(n) {
      return t[n];
    });
  }
  var Ye = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Ge() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function Do(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, a = t.defaultOptions, r = a === void 0 ? Ye : a;
    return function(s, p, u) {
      u === void 0 && (u = r);
      var d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Ye, r),
        modifiersData: {},
        elements: {
          reference: s,
          popper: p
        },
        attributes: {},
        styles: {}
      }, k = [], x = !1, v = {
        state: d,
        setOptions: function(f) {
          var C = typeof f == "function" ? f(d.options) : f;
          g(), d.options = Object.assign({}, r, d.options, C), d.scrollParents = {
            reference: ft(s) ? Bt(s) : s.contextElement ? Bt(s.contextElement) : [],
            popper: Bt(p)
          };
          var A = Oo(Eo([].concat(o, d.options.modifiers)));
          return d.orderedModifiers = A.filter(function(i) {
            return i.enabled;
          }), y(), v.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function() {
          if (!x) {
            var f = d.elements, C = f.reference, A = f.popper;
            if (Ge(C, A)) {
              d.rects = {
                reference: So(C, Rt(A), d.options.strategy === "fixed"),
                popper: me(A)
              }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(P) {
                return d.modifiersData[P.name] = Object.assign({}, P.data);
              });
              for (var i = 0; i < d.orderedModifiers.length; i++) {
                if (d.reset === !0) {
                  d.reset = !1, i = -1;
                  continue;
                }
                var b = d.orderedModifiers[i], m = b.fn, O = b.options, E = O === void 0 ? {} : O, T = b.name;
                typeof m == "function" && (d = m({
                  state: d,
                  options: E,
                  name: T,
                  instance: v
                }) || d);
              }
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: Mo(function() {
          return new Promise(function(h) {
            v.forceUpdate(), h(d);
          });
        }),
        destroy: function() {
          g(), x = !0;
        }
      };
      if (!Ge(s, p))
        return v;
      v.setOptions(u).then(function(h) {
        !x && u.onFirstUpdate && u.onFirstUpdate(h);
      });
      function y() {
        d.orderedModifiers.forEach(function(h) {
          var f = h.name, C = h.options, A = C === void 0 ? {} : C, i = h.effect;
          if (typeof i == "function") {
            var b = i({
              state: d,
              name: f,
              instance: v,
              options: A
            }), m = function() {
            };
            k.push(b || m);
          }
        });
      }
      function g() {
        k.forEach(function(h) {
          return h();
        }), k = [];
      }
      return v;
    };
  }
  var To = [Qn, vo, Xn, Re, ho, po, wo, Un, uo], Po = /* @__PURE__ */ Do({
    defaultModifiers: To
  }), Lo = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>', Ro = "tippy-box", Ze = "tippy-content", Xe = "tippy-backdrop", Ke = "tippy-arrow", Qe = "tippy-svg-arrow", pt = {
    passive: !0,
    capture: !0
  }, Je = function() {
    return document.body;
  };
  function we(e, t, n) {
    if (Array.isArray(e)) {
      var o = e[t];
      return o ?? (Array.isArray(n) ? n[t] : n);
    }
    return e;
  }
  function xe(e, t) {
    var n = {}.toString.call(e);
    return n.indexOf("[object") === 0 && n.indexOf(t + "]") > -1;
  }
  function tn(e, t) {
    return typeof e == "function" ? e.apply(void 0, t) : e;
  }
  function en(e, t) {
    if (t === 0)
      return e;
    var n;
    return function(o) {
      clearTimeout(n), n = setTimeout(function() {
        e(o);
      }, t);
    };
  }
  function nn(e, t) {
    var n = Object.assign({}, e);
    return t.forEach(function(o) {
      delete n[o];
    }), n;
  }
  function qo(e) {
    return e.split(/\s+/).filter(Boolean);
  }
  function lt(e) {
    return [].concat(e);
  }
  function on(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  function Bo(e) {
    return e.filter(function(t, n) {
      return e.indexOf(t) === n;
    });
  }
  function an(e) {
    return e.split("-")[0];
  }
  function St(e) {
    return [].slice.call(e);
  }
  function rn(e) {
    return Object.keys(e).reduce(function(t, n) {
      return e[n] !== void 0 && (t[n] = e[n]), t;
    }, {});
  }
  function ht() {
    return document.createElement("div");
  }
  function Gt(e) {
    return ["Element", "Fragment"].some(function(t) {
      return xe(e, t);
    });
  }
  function Io(e) {
    return xe(e, "NodeList");
  }
  function ke(e) {
    return xe(e, "MouseEvent");
  }
  function sn(e) {
    return !!(e && e._tippy && e._tippy.reference === e);
  }
  function jo(e) {
    return Gt(e) ? [e] : Io(e) ? St(e) : Array.isArray(e) ? e : St(document.querySelectorAll(e));
  }
  function Ce(e, t) {
    e.forEach(function(n) {
      n && (n.style.transitionDuration = t + "ms");
    });
  }
  function jt(e, t) {
    e.forEach(function(n) {
      n && n.setAttribute("data-state", t);
    });
  }
  function cn(e) {
    var t, n = lt(e), o = n[0];
    return o != null && (t = o.ownerDocument) != null && t.body ? o.ownerDocument : document;
  }
  function zo(e, t) {
    var n = t.clientX, o = t.clientY;
    return e.every(function(a) {
      var r = a.popperRect, c = a.popperState, s = a.props, p = s.interactiveBorder, u = an(c.placement), d = c.modifiersData.offset;
      if (!d)
        return !0;
      var k = u === "bottom" ? d.top.y : 0, x = u === "top" ? d.bottom.y : 0, v = u === "right" ? d.left.x : 0, y = u === "left" ? d.right.x : 0, g = r.top - o + k > p, h = o - r.bottom - x > p, f = r.left - n + v > p, C = n - r.right - y > p;
      return g || h || f || C;
    });
  }
  function Se(e, t, n) {
    var o = t + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function(a) {
      e[o](a, n);
    });
  }
  function pn(e, t) {
    for (var n = t; n; ) {
      var o;
      if (e.contains(n))
        return !0;
      n = n.getRootNode == null || (o = n.getRootNode()) == null ? void 0 : o.host;
    }
    return !1;
  }
  var Q = {
    isTouch: !1
  }, ln = 0;
  function Ho() {
    Q.isTouch || (Q.isTouch = !0, window.performance && document.addEventListener("mousemove", dn));
  }
  function dn() {
    var e = performance.now();
    e - ln < 20 && (Q.isTouch = !1, document.removeEventListener("mousemove", dn)), ln = e;
  }
  function $o() {
    var e = document.activeElement;
    if (sn(e)) {
      var t = e._tippy;
      e.blur && !t.state.isVisible && e.blur();
    }
  }
  function Fo() {
    document.addEventListener("touchstart", Ho, pt), window.addEventListener("blur", $o);
  }
  var _o = typeof window < "u" && typeof document < "u", Vo = _o ? (
    // @ts-ignore
    !!window.msCrypto
  ) : !1, Wo = {
    animateFill: !1,
    followCursor: !1,
    inlinePositioning: !1,
    sticky: !1
  }, No = {
    allowHTML: !1,
    animation: "fade",
    arrow: !0,
    content: "",
    inertia: !1,
    maxWidth: 350,
    role: "tooltip",
    theme: "",
    zIndex: 9999
  }, V = Object.assign({
    appendTo: Je,
    aria: {
      content: "auto",
      expanded: "auto"
    },
    delay: 0,
    duration: [300, 250],
    getReferenceClientRect: null,
    hideOnClick: !0,
    ignoreAttributes: !1,
    interactive: !1,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: "",
    offset: [0, 10],
    onAfterUpdate: function() {
    },
    onBeforeUpdate: function() {
    },
    onCreate: function() {
    },
    onDestroy: function() {
    },
    onHidden: function() {
    },
    onHide: function() {
    },
    onMount: function() {
    },
    onShow: function() {
    },
    onShown: function() {
    },
    onTrigger: function() {
    },
    onUntrigger: function() {
    },
    onClickOutside: function() {
    },
    placement: "top",
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: !1,
    touch: !0,
    trigger: "mouseenter focus",
    triggerTarget: null
  }, Wo, No), Uo = Object.keys(V), Yo = function(t) {
    var n = Object.keys(t);
    n.forEach(function(o) {
      V[o] = t[o];
    });
  };
  function un(e) {
    var t = e.plugins || [], n = t.reduce(function(o, a) {
      var r = a.name, c = a.defaultValue;
      if (r) {
        var s;
        o[r] = e[r] !== void 0 ? e[r] : (s = V[r]) != null ? s : c;
      }
      return o;
    }, {});
    return Object.assign({}, e, n);
  }
  function Go(e, t) {
    var n = t ? Object.keys(un(Object.assign({}, V, {
      plugins: t
    }))) : Uo, o = n.reduce(function(a, r) {
      var c = (e.getAttribute("data-tippy-" + r) || "").trim();
      if (!c)
        return a;
      if (r === "content")
        a[r] = c;
      else
        try {
          a[r] = JSON.parse(c);
        } catch {
          a[r] = c;
        }
      return a;
    }, {});
    return o;
  }
  function fn(e, t) {
    var n = Object.assign({}, t, {
      content: tn(t.content, [e])
    }, t.ignoreAttributes ? {} : Go(e, t.plugins));
    return n.aria = Object.assign({}, V.aria, n.aria), n.aria = {
      expanded: n.aria.expanded === "auto" ? t.interactive : n.aria.expanded,
      content: n.aria.content === "auto" ? t.interactive ? null : "describedby" : n.aria.content
    }, n;
  }
  var Zo = function() {
    return "innerHTML";
  };
  function Ae(e, t) {
    e[Zo()] = t;
  }
  function mn(e) {
    var t = ht();
    return e === !0 ? t.className = Ke : (t.className = Qe, Gt(e) ? t.appendChild(e) : Ae(t, e)), t;
  }
  function hn(e, t) {
    Gt(t.content) ? (Ae(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? Ae(e, t.content) : e.textContent = t.content);
  }
  function Zt(e) {
    var t = e.firstElementChild, n = St(t.children);
    return {
      box: t,
      content: n.find(function(o) {
        return o.classList.contains(Ze);
      }),
      arrow: n.find(function(o) {
        return o.classList.contains(Ke) || o.classList.contains(Qe);
      }),
      backdrop: n.find(function(o) {
        return o.classList.contains(Xe);
      })
    };
  }
  function gn(e) {
    var t = ht(), n = ht();
    n.className = Ro, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
    var o = ht();
    o.className = Ze, o.setAttribute("data-state", "hidden"), hn(o, e.props), t.appendChild(n), n.appendChild(o), a(e.props, e.props);
    function a(r, c) {
      var s = Zt(t), p = s.box, u = s.content, d = s.arrow;
      c.theme ? p.setAttribute("data-theme", c.theme) : p.removeAttribute("data-theme"), typeof c.animation == "string" ? p.setAttribute("data-animation", c.animation) : p.removeAttribute("data-animation"), c.inertia ? p.setAttribute("data-inertia", "") : p.removeAttribute("data-inertia"), p.style.maxWidth = typeof c.maxWidth == "number" ? c.maxWidth + "px" : c.maxWidth, c.role ? p.setAttribute("role", c.role) : p.removeAttribute("role"), (r.content !== c.content || r.allowHTML !== c.allowHTML) && hn(u, e.props), c.arrow ? d ? r.arrow !== c.arrow && (p.removeChild(d), p.appendChild(mn(c.arrow))) : p.appendChild(mn(c.arrow)) : d && p.removeChild(d);
    }
    return {
      popper: t,
      onUpdate: a
    };
  }
  gn.$$tippy = !0;
  var Xo = 1, Xt = [], Kt = [];
  function Ko(e, t) {
    var n = fn(e, Object.assign({}, V, un(rn(t)))), o, a, r, c = !1, s = !1, p = !1, u = !1, d, k, x, v = [], y = en(te, n.interactiveDebounce), g, h = Xo++, f = null, C = Bo(n.plugins), A = {
      // Is the instance currently enabled?
      isEnabled: !0,
      // Is the tippy currently showing and not transitioning out?
      isVisible: !1,
      // Has the instance been destroyed?
      isDestroyed: !1,
      // Is the tippy currently mounted to the DOM?
      isMounted: !1,
      // Has the tippy finished transitioning in?
      isShown: !1
    }, i = {
      // properties
      id: h,
      reference: e,
      popper: ht(),
      popperInstance: f,
      props: n,
      state: A,
      plugins: C,
      // methods
      clearDelayTimeouts: ae,
      setProps: re,
      setContent: se,
      show: Ai,
      hide: Oi,
      hideWithInteractivity: Mi,
      enable: Vt,
      disable: ie,
      unmount: Ei,
      destroy: Di
    };
    if (!n.render)
      return i;
    var b = n.render(i), m = b.popper, O = b.onUpdate;
    m.setAttribute("data-tippy-root", ""), m.id = "tippy-" + i.id, i.popper = m, e._tippy = i, m._tippy = i;
    var E = C.map(function(l) {
      return l.fn(i);
    }), T = e.hasAttribute("aria-expanded");
    return Mt(), tt(), z(), B("onCreate", [i]), n.showOnCreate && _t(), m.addEventListener("mouseenter", function() {
      i.props.interactive && i.state.isVisible && i.clearDelayTimeouts();
    }), m.addEventListener("mouseleave", function() {
      i.props.interactive && i.props.trigger.indexOf("mouseenter") >= 0 && I().addEventListener("mousemove", y);
    }), i;
    function P() {
      var l = i.props.touch;
      return Array.isArray(l) ? l : [l, 0];
    }
    function q() {
      return P()[0] === "hold";
    }
    function R() {
      var l;
      return !!((l = i.props.render) != null && l.$$tippy);
    }
    function L() {
      return g || e;
    }
    function I() {
      var l = L().parentNode;
      return l ? cn(l) : document;
    }
    function W() {
      return Zt(m);
    }
    function j(l) {
      return i.state.isMounted && !i.state.isVisible || Q.isTouch || d && d.type === "focus" ? 0 : we(i.props.delay, l ? 0 : 1, V.delay);
    }
    function z(l) {
      l === void 0 && (l = !1), m.style.pointerEvents = i.props.interactive && !l ? "" : "none", m.style.zIndex = "" + i.props.zIndex;
    }
    function B(l, w, S) {
      if (S === void 0 && (S = !0), E.forEach(function(M) {
        M[l] && M[l].apply(M, w);
      }), S) {
        var D;
        (D = i.props)[l].apply(D, w);
      }
    }
    function J() {
      var l = i.props.aria;
      if (l.content) {
        var w = "aria-" + l.content, S = m.id, D = lt(i.props.triggerTarget || e);
        D.forEach(function(M) {
          var H = M.getAttribute(w);
          if (i.state.isVisible)
            M.setAttribute(w, H ? H + " " + S : S);
          else {
            var G = H && H.replace(S, "").trim();
            G ? M.setAttribute(w, G) : M.removeAttribute(w);
          }
        });
      }
    }
    function tt() {
      if (!(T || !i.props.aria.expanded)) {
        var l = lt(i.props.triggerTarget || e);
        l.forEach(function(w) {
          i.props.interactive ? w.setAttribute("aria-expanded", i.state.isVisible && w === L() ? "true" : "false") : w.removeAttribute("aria-expanded");
        });
      }
    }
    function gt() {
      I().removeEventListener("mousemove", y), Xt = Xt.filter(function(l) {
        return l !== y;
      });
    }
    function et(l) {
      if (!(Q.isTouch && (p || l.type === "mousedown"))) {
        var w = l.composedPath && l.composedPath()[0] || l.target;
        if (!(i.props.interactive && pn(m, w))) {
          if (lt(i.props.triggerTarget || e).some(function(S) {
            return pn(S, w);
          })) {
            if (Q.isTouch || i.state.isVisible && i.props.trigger.indexOf("click") >= 0)
              return;
          } else
            B("onClickOutside", [i, l]);
          i.props.hideOnClick === !0 && (i.clearDelayTimeouts(), i.hide(), s = !0, setTimeout(function() {
            s = !1;
          }), i.state.isMounted || at());
        }
      }
    }
    function vt() {
      p = !0;
    }
    function it() {
      p = !1;
    }
    function Z() {
      var l = I();
      l.addEventListener("mousedown", et, !0), l.addEventListener("touchend", et, pt), l.addEventListener("touchstart", it, pt), l.addEventListener("touchmove", vt, pt);
    }
    function at() {
      var l = I();
      l.removeEventListener("mousedown", et, !0), l.removeEventListener("touchend", et, pt), l.removeEventListener("touchstart", it, pt), l.removeEventListener("touchmove", vt, pt);
    }
    function At(l, w) {
      Ot(l, function() {
        !i.state.isVisible && m.parentNode && m.parentNode.contains(m) && w();
      });
    }
    function rt(l, w) {
      Ot(l, w);
    }
    function Ot(l, w) {
      var S = W().box;
      function D(M) {
        M.target === S && (Se(S, "remove", D), w());
      }
      if (l === 0)
        return w();
      Se(S, "remove", k), Se(S, "add", D), k = D;
    }
    function dt(l, w, S) {
      S === void 0 && (S = !1);
      var D = lt(i.props.triggerTarget || e);
      D.forEach(function(M) {
        M.addEventListener(l, w, S), v.push({
          node: M,
          eventType: l,
          handler: w,
          options: S
        });
      });
    }
    function Mt() {
      q() && (dt("touchstart", Ht, {
        passive: !0
      }), dt("touchend", ee, {
        passive: !0
      })), qo(i.props.trigger).forEach(function(l) {
        if (l !== "manual")
          switch (dt(l, Ht), l) {
            case "mouseenter":
              dt("mouseleave", ee);
              break;
            case "focus":
              dt(Vo ? "focusout" : "blur", $t);
              break;
            case "focusin":
              dt("focusout", $t);
              break;
          }
      });
    }
    function Jt() {
      v.forEach(function(l) {
        var w = l.node, S = l.eventType, D = l.handler, M = l.options;
        w.removeEventListener(S, D, M);
      }), v = [];
    }
    function Ht(l) {
      var w, S = !1;
      if (!(!i.state.isEnabled || Ft(l) || s)) {
        var D = ((w = d) == null ? void 0 : w.type) === "focus";
        d = l, g = l.currentTarget, tt(), !i.state.isVisible && ke(l) && Xt.forEach(function(M) {
          return M(l);
        }), l.type === "click" && (i.props.trigger.indexOf("mouseenter") < 0 || c) && i.props.hideOnClick !== !1 && i.state.isVisible ? S = !0 : _t(l), l.type === "click" && (c = !S), S && !D && bt(l);
      }
    }
    function te(l) {
      var w = l.target, S = L().contains(w) || m.contains(w);
      if (!(l.type === "mousemove" && S)) {
        var D = ut().concat(m).map(function(M) {
          var H, G = M._tippy, Et = (H = G.popperInstance) == null ? void 0 : H.state;
          return Et ? {
            popperRect: M.getBoundingClientRect(),
            popperState: Et,
            props: n
          } : null;
        }).filter(Boolean);
        zo(D, l) && (gt(), bt(l));
      }
    }
    function ee(l) {
      var w = Ft(l) || i.props.trigger.indexOf("click") >= 0 && c;
      if (!w) {
        if (i.props.interactive) {
          i.hideWithInteractivity(l);
          return;
        }
        bt(l);
      }
    }
    function $t(l) {
      i.props.trigger.indexOf("focusin") < 0 && l.target !== L() || i.props.interactive && l.relatedTarget && m.contains(l.relatedTarget) || bt(l);
    }
    function Ft(l) {
      return Q.isTouch ? q() !== l.type.indexOf("touch") >= 0 : !1;
    }
    function ne() {
      oe();
      var l = i.props, w = l.popperOptions, S = l.placement, D = l.offset, M = l.getReferenceClientRect, H = l.moveTransition, G = R() ? Zt(m).arrow : null, Et = M ? {
        getBoundingClientRect: M,
        contextElement: M.contextElement || L()
      } : e, yn = {
        name: "$$tippy",
        enabled: !0,
        phase: "beforeWrite",
        requires: ["computeStyles"],
        fn: function(ce) {
          var Dt = ce.state;
          if (R()) {
            var Ti = W(), Ee = Ti.box;
            ["placement", "reference-hidden", "escaped"].forEach(function(pe) {
              pe === "placement" ? Ee.setAttribute("data-placement", Dt.placement) : Dt.attributes.popper["data-popper-" + pe] ? Ee.setAttribute("data-" + pe, "") : Ee.removeAttribute("data-" + pe);
            }), Dt.attributes.popper = {};
          }
        }
      }, yt = [{
        name: "offset",
        options: {
          offset: D
        }
      }, {
        name: "preventOverflow",
        options: {
          padding: {
            top: 2,
            bottom: 2,
            left: 5,
            right: 5
          }
        }
      }, {
        name: "flip",
        options: {
          padding: 5
        }
      }, {
        name: "computeStyles",
        options: {
          adaptive: !H
        }
      }, yn];
      R() && G && yt.push({
        name: "arrow",
        options: {
          element: G,
          padding: 3
        }
      }), yt.push.apply(yt, (w == null ? void 0 : w.modifiers) || []), i.popperInstance = Po(Et, m, Object.assign({}, w, {
        placement: S,
        onFirstUpdate: x,
        modifiers: yt
      }));
    }
    function oe() {
      i.popperInstance && (i.popperInstance.destroy(), i.popperInstance = null);
    }
    function st() {
      var l = i.props.appendTo, w, S = L();
      i.props.interactive && l === Je || l === "parent" ? w = S.parentNode : w = tn(l, [S]), w.contains(m) || w.appendChild(m), i.state.isMounted = !0, ne();
    }
    function ut() {
      return St(m.querySelectorAll("[data-tippy-root]"));
    }
    function _t(l) {
      i.clearDelayTimeouts(), l && B("onTrigger", [i, l]), Z();
      var w = j(!0), S = P(), D = S[0], M = S[1];
      Q.isTouch && D === "hold" && M && (w = M), w ? o = setTimeout(function() {
        i.show();
      }, w) : i.show();
    }
    function bt(l) {
      if (i.clearDelayTimeouts(), B("onUntrigger", [i, l]), !i.state.isVisible) {
        at();
        return;
      }
      if (!(i.props.trigger.indexOf("mouseenter") >= 0 && i.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(l.type) >= 0 && c)) {
        var w = j(!1);
        w ? a = setTimeout(function() {
          i.state.isVisible && i.hide();
        }, w) : r = requestAnimationFrame(function() {
          i.hide();
        });
      }
    }
    function Vt() {
      i.state.isEnabled = !0;
    }
    function ie() {
      i.hide(), i.state.isEnabled = !1;
    }
    function ae() {
      clearTimeout(o), clearTimeout(a), cancelAnimationFrame(r);
    }
    function re(l) {
      if (!i.state.isDestroyed) {
        B("onBeforeUpdate", [i, l]), Jt();
        var w = i.props, S = fn(e, Object.assign({}, w, rn(l), {
          ignoreAttributes: !0
        }));
        i.props = S, Mt(), w.interactiveDebounce !== S.interactiveDebounce && (gt(), y = en(te, S.interactiveDebounce)), w.triggerTarget && !S.triggerTarget ? lt(w.triggerTarget).forEach(function(D) {
          D.removeAttribute("aria-expanded");
        }) : S.triggerTarget && e.removeAttribute("aria-expanded"), tt(), z(), O && O(w, S), i.popperInstance && (ne(), ut().forEach(function(D) {
          requestAnimationFrame(D._tippy.popperInstance.forceUpdate);
        })), B("onAfterUpdate", [i, l]);
      }
    }
    function se(l) {
      i.setProps({
        content: l
      });
    }
    function Ai() {
      var l = i.state.isVisible, w = i.state.isDestroyed, S = !i.state.isEnabled, D = Q.isTouch && !i.props.touch, M = we(i.props.duration, 0, V.duration);
      if (!(l || w || S || D) && !L().hasAttribute("disabled") && (B("onShow", [i], !1), i.props.onShow(i) !== !1)) {
        if (i.state.isVisible = !0, R() && (m.style.visibility = "visible"), z(), Z(), i.state.isMounted || (m.style.transition = "none"), R()) {
          var H = W(), G = H.box, Et = H.content;
          Ce([G, Et], 0);
        }
        x = function() {
          var yt;
          if (!(!i.state.isVisible || u)) {
            if (u = !0, m.offsetHeight, m.style.transition = i.props.moveTransition, R() && i.props.animation) {
              var Me = W(), ce = Me.box, Dt = Me.content;
              Ce([ce, Dt], M), jt([ce, Dt], "visible");
            }
            J(), tt(), on(Kt, i), (yt = i.popperInstance) == null || yt.forceUpdate(), B("onMount", [i]), i.props.animation && R() && rt(M, function() {
              i.state.isShown = !0, B("onShown", [i]);
            });
          }
        }, st();
      }
    }
    function Oi() {
      var l = !i.state.isVisible, w = i.state.isDestroyed, S = !i.state.isEnabled, D = we(i.props.duration, 1, V.duration);
      if (!(l || w || S) && (B("onHide", [i], !1), i.props.onHide(i) !== !1)) {
        if (i.state.isVisible = !1, i.state.isShown = !1, u = !1, c = !1, R() && (m.style.visibility = "hidden"), gt(), at(), z(!0), R()) {
          var M = W(), H = M.box, G = M.content;
          i.props.animation && (Ce([H, G], D), jt([H, G], "hidden"));
        }
        J(), tt(), i.props.animation ? R() && At(D, i.unmount) : i.unmount();
      }
    }
    function Mi(l) {
      I().addEventListener("mousemove", y), on(Xt, y), y(l);
    }
    function Ei() {
      i.state.isVisible && i.hide(), i.state.isMounted && (oe(), ut().forEach(function(l) {
        l._tippy.unmount();
      }), m.parentNode && m.parentNode.removeChild(m), Kt = Kt.filter(function(l) {
        return l !== i;
      }), i.state.isMounted = !1, B("onHidden", [i]));
    }
    function Di() {
      i.state.isDestroyed || (i.clearDelayTimeouts(), i.unmount(), Jt(), delete e._tippy, i.state.isDestroyed = !0, B("onDestroy", [i]));
    }
  }
  function ot(e, t) {
    t === void 0 && (t = {});
    var n = V.plugins.concat(t.plugins || []);
    Fo();
    var o = Object.assign({}, t, {
      plugins: n
    }), a = jo(e), r = a.reduce(function(c, s) {
      var p = s && Ko(s, o);
      return p && c.push(p), c;
    }, []);
    return Gt(e) ? r[0] : r;
  }
  ot.defaultProps = V, ot.setDefaultProps = Yo, ot.currentInput = Q;
  var Qo = function(t) {
    var n = t === void 0 ? {} : t, o = n.exclude, a = n.duration;
    Kt.forEach(function(r) {
      var c = !1;
      if (o && (c = sn(o) ? r.reference === o : r.popper === o.popper), !c) {
        var s = r.props.duration;
        r.setProps({
          duration: a
        }), r.hide(), r.state.isDestroyed || r.setProps({
          duration: s
        });
      }
    });
  }, Jo = Object.assign({}, Re, {
    effect: function(t) {
      var n = t.state, o = {
        popper: {
          position: n.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(n.elements.popper.style, o.popper), n.styles = o, n.elements.arrow && Object.assign(n.elements.arrow.style, o.arrow);
    }
  }), ti = function(t, n) {
    var o;
    n === void 0 && (n = {});
    var a = t, r = [], c = [], s, p = n.overrides, u = [], d = !1;
    function k() {
      c = a.map(function(i) {
        return lt(i.props.triggerTarget || i.reference);
      }).reduce(function(i, b) {
        return i.concat(b);
      }, []);
    }
    function x() {
      r = a.map(function(i) {
        return i.reference;
      });
    }
    function v(i) {
      a.forEach(function(b) {
        i ? b.enable() : b.disable();
      });
    }
    function y(i) {
      return a.map(function(b) {
        var m = b.setProps;
        return b.setProps = function(O) {
          m(O), b.reference === s && i.setProps(O);
        }, function() {
          b.setProps = m;
        };
      });
    }
    function g(i, b) {
      var m = c.indexOf(b);
      if (b !== s) {
        s = b;
        var O = (p || []).concat("content").reduce(function(E, T) {
          return E[T] = a[m].props[T], E;
        }, {});
        i.setProps(Object.assign({}, O, {
          getReferenceClientRect: typeof O.getReferenceClientRect == "function" ? O.getReferenceClientRect : function() {
            var E;
            return (E = r[m]) == null ? void 0 : E.getBoundingClientRect();
          }
        }));
      }
    }
    v(!1), x(), k();
    var h = {
      fn: function() {
        return {
          onDestroy: function() {
            v(!0);
          },
          onHidden: function() {
            s = null;
          },
          onClickOutside: function(m) {
            m.props.showOnCreate && !d && (d = !0, s = null);
          },
          onShow: function(m) {
            m.props.showOnCreate && !d && (d = !0, g(m, r[0]));
          },
          onTrigger: function(m, O) {
            g(m, O.currentTarget);
          }
        };
      }
    }, f = ot(ht(), Object.assign({}, nn(n, ["overrides"]), {
      plugins: [h].concat(n.plugins || []),
      triggerTarget: c,
      popperOptions: Object.assign({}, n.popperOptions, {
        modifiers: [].concat(((o = n.popperOptions) == null ? void 0 : o.modifiers) || [], [Jo])
      })
    })), C = f.show;
    f.show = function(i) {
      if (C(), !s && i == null)
        return g(f, r[0]);
      if (!(s && i == null)) {
        if (typeof i == "number")
          return r[i] && g(f, r[i]);
        if (a.indexOf(i) >= 0) {
          var b = i.reference;
          return g(f, b);
        }
        if (r.indexOf(i) >= 0)
          return g(f, i);
      }
    }, f.showNext = function() {
      var i = r[0];
      if (!s)
        return f.show(0);
      var b = r.indexOf(s);
      f.show(r[b + 1] || i);
    }, f.showPrevious = function() {
      var i = r[r.length - 1];
      if (!s)
        return f.show(i);
      var b = r.indexOf(s), m = r[b - 1] || i;
      f.show(m);
    };
    var A = f.setProps;
    return f.setProps = function(i) {
      p = i.overrides || p, A(i);
    }, f.setInstances = function(i) {
      v(!0), u.forEach(function(b) {
        return b();
      }), a = i, v(!1), x(), k(), u = y(f), f.setProps({
        triggerTarget: c
      });
    }, u = y(f), f;
  }, ei = {
    mouseover: "mouseenter",
    focusin: "focus",
    click: "click"
  };
  function ni(e, t) {
    var n = [], o = [], a = !1, r = t.target, c = nn(t, ["target"]), s = Object.assign({}, c, {
      trigger: "manual",
      touch: !1
    }), p = Object.assign({
      touch: V.touch
    }, c, {
      showOnCreate: !0
    }), u = ot(e, s), d = lt(u);
    function k(h) {
      if (!(!h.target || a)) {
        var f = h.target.closest(r);
        if (f) {
          var C = f.getAttribute("data-tippy-trigger") || t.trigger || V.trigger;
          if (!f._tippy && !(h.type === "touchstart" && typeof p.touch == "boolean") && !(h.type !== "touchstart" && C.indexOf(ei[h.type]) < 0)) {
            var A = ot(f, p);
            A && (o = o.concat(A));
          }
        }
      }
    }
    function x(h, f, C, A) {
      A === void 0 && (A = !1), h.addEventListener(f, C, A), n.push({
        node: h,
        eventType: f,
        handler: C,
        options: A
      });
    }
    function v(h) {
      var f = h.reference;
      x(f, "touchstart", k, pt), x(f, "mouseover", k), x(f, "focusin", k), x(f, "click", k);
    }
    function y() {
      n.forEach(function(h) {
        var f = h.node, C = h.eventType, A = h.handler, i = h.options;
        f.removeEventListener(C, A, i);
      }), n = [];
    }
    function g(h) {
      var f = h.destroy, C = h.enable, A = h.disable;
      h.destroy = function(i) {
        i === void 0 && (i = !0), i && o.forEach(function(b) {
          b.destroy();
        }), o = [], y(), f();
      }, h.enable = function() {
        C(), o.forEach(function(i) {
          return i.enable();
        }), a = !1;
      }, h.disable = function() {
        A(), o.forEach(function(i) {
          return i.disable();
        }), a = !0;
      }, v(h);
    }
    return d.forEach(g), u;
  }
  var oi = {
    name: "animateFill",
    defaultValue: !1,
    fn: function(t) {
      var n;
      if (!((n = t.props.render) != null && n.$$tippy))
        return {};
      var o = Zt(t.popper), a = o.box, r = o.content, c = t.props.animateFill ? ii() : null;
      return {
        onCreate: function() {
          c && (a.insertBefore(c, a.firstElementChild), a.setAttribute("data-animatefill", ""), a.style.overflow = "hidden", t.setProps({
            arrow: !1,
            animation: "shift-away"
          }));
        },
        onMount: function() {
          if (c) {
            var p = a.style.transitionDuration, u = Number(p.replace("ms", ""));
            r.style.transitionDelay = Math.round(u / 10) + "ms", c.style.transitionDuration = p, jt([c], "visible");
          }
        },
        onShow: function() {
          c && (c.style.transitionDuration = "0ms");
        },
        onHide: function() {
          c && jt([c], "hidden");
        }
      };
    }
  };
  function ii() {
    var e = ht();
    return e.className = Xe, jt([e], "hidden"), e;
  }
  var Oe = {
    clientX: 0,
    clientY: 0
  }, Qt = [];
  function vn(e) {
    var t = e.clientX, n = e.clientY;
    Oe = {
      clientX: t,
      clientY: n
    };
  }
  function ai(e) {
    e.addEventListener("mousemove", vn);
  }
  function ri(e) {
    e.removeEventListener("mousemove", vn);
  }
  var si = {
    name: "followCursor",
    defaultValue: !1,
    fn: function(t) {
      var n = t.reference, o = cn(t.props.triggerTarget || n), a = !1, r = !1, c = !0, s = t.props;
      function p() {
        return t.props.followCursor === "initial" && t.state.isVisible;
      }
      function u() {
        o.addEventListener("mousemove", x);
      }
      function d() {
        o.removeEventListener("mousemove", x);
      }
      function k() {
        a = !0, t.setProps({
          getReferenceClientRect: null
        }), a = !1;
      }
      function x(g) {
        var h = g.target ? n.contains(g.target) : !0, f = t.props.followCursor, C = g.clientX, A = g.clientY, i = n.getBoundingClientRect(), b = C - i.left, m = A - i.top;
        (h || !t.props.interactive) && t.setProps({
          // @ts-ignore - unneeded DOMRect properties
          getReferenceClientRect: function() {
            var E = n.getBoundingClientRect(), T = C, P = A;
            f === "initial" && (T = E.left + b, P = E.top + m);
            var q = f === "horizontal" ? E.top : P, R = f === "vertical" ? E.right : T, L = f === "horizontal" ? E.bottom : P, I = f === "vertical" ? E.left : T;
            return {
              width: R - I,
              height: L - q,
              top: q,
              right: R,
              bottom: L,
              left: I
            };
          }
        });
      }
      function v() {
        t.props.followCursor && (Qt.push({
          instance: t,
          doc: o
        }), ai(o));
      }
      function y() {
        Qt = Qt.filter(function(g) {
          return g.instance !== t;
        }), Qt.filter(function(g) {
          return g.doc === o;
        }).length === 0 && ri(o);
      }
      return {
        onCreate: v,
        onDestroy: y,
        onBeforeUpdate: function() {
          s = t.props;
        },
        onAfterUpdate: function(h, f) {
          var C = f.followCursor;
          a || C !== void 0 && s.followCursor !== C && (y(), C ? (v(), t.state.isMounted && !r && !p() && u()) : (d(), k()));
        },
        onMount: function() {
          t.props.followCursor && !r && (c && (x(Oe), c = !1), p() || u());
        },
        onTrigger: function(h, f) {
          ke(f) && (Oe = {
            clientX: f.clientX,
            clientY: f.clientY
          }), r = f.type === "focus";
        },
        onHidden: function() {
          t.props.followCursor && (k(), d(), c = !0);
        }
      };
    }
  };
  function ci(e, t) {
    var n;
    return {
      popperOptions: Object.assign({}, e.popperOptions, {
        modifiers: [].concat((((n = e.popperOptions) == null ? void 0 : n.modifiers) || []).filter(function(o) {
          var a = o.name;
          return a !== t.name;
        }), [t])
      })
    };
  }
  var pi = {
    name: "inlinePositioning",
    defaultValue: !1,
    fn: function(t) {
      var n = t.reference;
      function o() {
        return !!t.props.inlinePositioning;
      }
      var a, r = -1, c = !1, s = [], p = {
        name: "tippyInlinePositioning",
        enabled: !0,
        phase: "afterWrite",
        fn: function(v) {
          var y = v.state;
          o() && (s.indexOf(y.placement) !== -1 && (s = []), a !== y.placement && s.indexOf(y.placement) === -1 && (s.push(y.placement), t.setProps({
            // @ts-ignore - unneeded DOMRect properties
            getReferenceClientRect: function() {
              return u(y.placement);
            }
          })), a = y.placement);
        }
      };
      function u(x) {
        return li(an(x), n.getBoundingClientRect(), St(n.getClientRects()), r);
      }
      function d(x) {
        c = !0, t.setProps(x), c = !1;
      }
      function k() {
        c || d(ci(t.props, p));
      }
      return {
        onCreate: k,
        onAfterUpdate: k,
        onTrigger: function(v, y) {
          if (ke(y)) {
            var g = St(t.reference.getClientRects()), h = g.find(function(C) {
              return C.left - 2 <= y.clientX && C.right + 2 >= y.clientX && C.top - 2 <= y.clientY && C.bottom + 2 >= y.clientY;
            }), f = g.indexOf(h);
            r = f > -1 ? f : r;
          }
        },
        onHidden: function() {
          r = -1;
        }
      };
    }
  };
  function li(e, t, n, o) {
    if (n.length < 2 || e === null)
      return t;
    if (n.length === 2 && o >= 0 && n[0].left > n[1].right)
      return n[o] || t;
    switch (e) {
      case "top":
      case "bottom": {
        var a = n[0], r = n[n.length - 1], c = e === "top", s = a.top, p = r.bottom, u = c ? a.left : r.left, d = c ? a.right : r.right, k = d - u, x = p - s;
        return {
          top: s,
          bottom: p,
          left: u,
          right: d,
          width: k,
          height: x
        };
      }
      case "left":
      case "right": {
        var v = Math.min.apply(Math, n.map(function(m) {
          return m.left;
        })), y = Math.max.apply(Math, n.map(function(m) {
          return m.right;
        })), g = n.filter(function(m) {
          return e === "left" ? m.left === v : m.right === y;
        }), h = g[0].top, f = g[g.length - 1].bottom, C = v, A = y, i = A - C, b = f - h;
        return {
          top: h,
          bottom: f,
          left: C,
          right: A,
          width: i,
          height: b
        };
      }
      default:
        return t;
    }
  }
  var di = {
    name: "sticky",
    defaultValue: !1,
    fn: function(t) {
      var n = t.reference, o = t.popper;
      function a() {
        return t.popperInstance ? t.popperInstance.state.elements.reference : n;
      }
      function r(u) {
        return t.props.sticky === !0 || t.props.sticky === u;
      }
      var c = null, s = null;
      function p() {
        var u = r("reference") ? a().getBoundingClientRect() : null, d = r("popper") ? o.getBoundingClientRect() : null;
        (u && bn(c, u) || d && bn(s, d)) && t.popperInstance && t.popperInstance.update(), c = u, s = d, t.state.isMounted && requestAnimationFrame(p);
      }
      return {
        onMount: function() {
          t.props.sticky && p();
        }
      };
    }
  };
  function bn(e, t) {
    return e && t ? e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom || e.left !== t.left : !0;
  }
  ot.setDefaultProps({
    render: gn
  });
  const ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    animateFill: oi,
    createSingleton: ti,
    default: ot,
    delegate: ni,
    followCursor: si,
    hideAll: Qo,
    inlinePositioning: pi,
    roundArrow: Lo,
    sticky: di
  }, Symbol.toStringTag, { value: "Module" })), zt = ({
    eventCategory: e,
    eventAction: t,
    eventLabel: n
  }) => {
    const o = {
      eventCategory: e,
      eventAction: t,
      eventLabel: n
    }, a = {
      event: "crs-setapp",
      ...o,
      eventLabel2: "",
      //cd8
      eventValue: "",
      eventNonInteraction: !0,
      intercomLoaded: !0
    };
    window.dataLayer.push(a), De("Data pushed to dataLayer", "info"), console.table(o);
  }, fi = (e, t, n, o = 1e3, a = 0.5) => {
    let r, c;
    r = new IntersectionObserver(
      function(s) {
        s[0].isIntersecting === !0 ? c = setTimeout(() => {
          zt({
            eventCategory: t,
            eventAction: "View",
            eventLabel: n
          }), r.disconnect();
        }, o) : (De("Element is not fully visible", "warn"), clearTimeout(c));
      },
      { threshold: [a] }
    );
    {
      const s = document.querySelector(e);
      s && r.observe(s);
    }
  }, mi = ot || ui;
  class hi {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render(), this.addSmoothScrolling(), this.events(), this.addTooltipByHover();
    }
    render() {
      const t = document.querySelector("section.header");
      if (!t) {
        console.error("Target element not found");
        return;
      }
      if (le == null) return;
      const n = (
        /* HTML */
        `<section class="page-content-wrapper crs-apps">
      <div class="crs-apps-content">
        <h3 class="crs-apps-title">What do you want to start with today?</h3>
        <div class="crs-apps-description">
          Big task or small fix — with 260+ trusted apps, Setapp helps you solve
          anything without stress, all with one simple subscription
        </div>
        <ul class="crs-apps-nav">
          <li class="crs-apps-nav-item">
            <a href="#fix-slow-mac" data-title="Fix slow Mac">Fix slow Mac</a>
          </li>
          <li class="crs-apps-nav-item">
            <a href="#customize-workspace" data-title="Customise your workspace"
              >Customise your workspace</a
            >
          </li>
          <li class="crs-apps-nav-item">
            <a
              href="#download-convert-media"
              data-title="Download & convert media"
              >Download & convert media</a
            >
          </li>
          <li class="crs-apps-nav-item">
            <a href="#recover-open-files" data-title="Recover & open files"
              >Recover & open files</a
            >
          </li>
          <li class="crs-apps-nav-item">
            <a href="#use-tools" data-title="All-in-one work tools"
              >All-in-one work tools</a
            >
          </li>
          <li class="crs-apps-nav-item">
            <a href="#use-ai" data-title="Do more with AI">Do more with AI</a>
          </li>
          <li class="crs-apps-nav-item crs-apps-nav-item--more">
            <a href="https://setapp.com/apps" data-title="And more..."
              >And more...</a
            >
          </li>
        </ul>
        <div class="crs-apps-blocks">
          <div class="crs-apps-block" data-color="7E7EE1" id="fix-slow-mac">
            <div class="crs-apps-block-inner">
              <div class="crs-block-info">
                <h4 class="crs-block-title">
                  Make your Mac faster and last longer
                </h4>
                <div class="crs-block-description">
                  Clean hidden junk, free up RAM, and keep your Mac in peak
                  shape with tools that prevent future slowdowns.
                </div>
                <div class="crs-block-action">
                  <button
                    type="button"
                    data-block-title="Make your Mac faster and last longer"
                    data-title="Speed up my Mac"
                    class="btn btn_primary signup__button crs-block-action-button"
                  >
                    Speed up my Mac
                  </button>
                  <div class="crs-block-action-text">
                    start your 7 days free trial
                  </div>
                </div>
                <div class="crs-block-comment">
                  <div class="crs-block-comment-author">
                    <span class="crs-block-comment-rating">
                      <span></span><span></span><span></span><span></span
                      ><span></span
                    ></span>
                    — David M.
                  </div>
                  <div class="crs-block-comment-text">
                    " Setapp is like a magic toolbox for my Mac — whatever I
                    need, it’s just there. Makes me way more productive "
                  </div>
                </div>
              </div>
              <div class="crs-block-apps">
                <div class="crs-block-apps-list">
                  ${this.renderApps([
          "CleanMyMac",
          "QuitAll",
          "iStat Menus",
          "Endurance",
          "AlDente Pro",
          "Mission Control"
        ])}
                </div>
                <div class="crs-block-more">
                  <div>35+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="crs-apps-block"
            data-color="D5D8FE"
            id="customize-workspace"
          >
            <div class="crs-apps-block-inner">
              <div class="crs-block-info">
                <h4 class="crs-block-title">
                  Customize your Mac to look clean and work faster
                </h4>
                <div class="crs-block-description">
                  Hide distractions, manage your menu bar, create custom
                  gestures, and design a workspace that fits the way you think —
                  not the way Apple decided
                </div>
                <div class="crs-block-action">
                  <button
                    type="button"
                    data-block-title="Customize your Mac to look clean and work faster"
                    data-title="Customize my Mac"
                    class="btn btn_primary signup__button crs-block-action-button"
                  >
                    Customize my Mac
                  </button>
                  <div class="crs-block-action-text">
                    start your 7 days free trial
                  </div>
                </div>
              </div>
              <div class="crs-block-apps">
                <div class="crs-block-apps-list">
                  ${this.renderApps(["WidgetWall", "Bartender", "CleanShot X"])}
                </div>
                <div class="crs-block-more">
                  <div>20+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="crs-apps-block"
            data-color="424E81"
            id="download-convert-media"
          >
            <div class="crs-apps-block-inner">
              <div class="crs-block-info">
                <h4 class="crs-block-title">
                  Get the videos you need, in the format you want
                </h4>
                <div class="crs-block-description">
                  Whether it's YouTube tutorials or social media clips, Setapp
                  gives you tools to download videos, extract audio, and convert
                  formats that actually work
                </div>
                <div class="crs-block-action">
                  <button
                    type="button"
                    data-block-title="Get the videos you need, in the format you want"
                    data-title="Get the video I need"
                    class="btn btn_light signup__button crs-block-action-button"
                  >
                    Get the video I need
                  </button>
                  <div class="crs-block-action-text">
                    start your 7 days free trial
                  </div>
                </div>
              </div>
              <div class="crs-block-apps">
                <div class="crs-block-apps-list">
                  ${this.renderApps(["Downie", "Pulltube", "Permute"])}
                </div>
                <div class="crs-block-more">
                  <div>17+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="crs-apps-block"
            data-color="CF6F8A"
            id="recover-open-files"
          >
            <div class="crs-apps-block-inner">
              <div class="crs-block-info">
                <h4 class="crs-block-title">
                  Open and edit what your Mac usually can't
                </h4>
                <div class="crs-block-description">
                  Work with PDFs, RARs, NTFS, and more — open, edit, fix, and
                  convert the formats your Mac can't handle on its own
                </div>
                <div class="crs-block-action">
                  <button
                    type="button"
                    data-block-title="Open and edit what your Mac usually can't"
                    data-title="Handle my tricky files"
                    class="btn btn_primary signup__button crs-block-action-button"
                  >
                    Handle my tricky files
                  </button>
                  <div class="crs-block-action-text">
                    start your 7 days free trial
                  </div>
                </div>
                <div class="crs-block-comment">
                  <div class="crs-block-comment-author">
                    <span class="crs-block-comment-rating">
                      <span></span><span></span><span></span><span></span
                      ><span></span
                    ></span>
                    — Andy S.
                  </div>
                  <div class="crs-block-comment-text">
                    " One subscription, tons of great Mac and iOS apps. No
                    separate licenses needed! "
                  </div>
                </div>
              </div>
              <div class="crs-block-apps">
                <div class="crs-block-apps-list">
                  ${this.renderApps([
          "Nitro PDF Pro",
          "BetterZip",
          "Get Backup Pro",
          "Archiver",
          "Ulysses",
          "Renamer"
        ])}
                </div>
                <div class="crs-block-more">
                  <div>63+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
          <div class="crs-apps-block" data-color="F0AD84" id="use-tools">
            <div class="crs-apps-block-inner">
              <div class="crs-block-info">
                <h4 class="crs-block-title">
                  All your work tools, finally in one place
                </h4>
                <div class="crs-block-description">
                  From documents to development, Setapp includes focused tools
                  for writing, coding, managing tasks, and staying productive —
                  no extra subscriptions needed
                </div>
                <div class="crs-block-action">
                  <button
                    type="button"
                    data-block-title="All your work tools, finally in one place"
                    data-title="Get my full toolkit"
                    class="btn btn_primary signup__button crs-block-action-button"
                  >
                    Get my full toolkit
                  </button>
                  <div class="crs-block-action-text">
                    start your 7 days free trial
                  </div>
                </div>
              </div>
              <div class="crs-block-apps">
                <div class="crs-block-apps-list">
                  ${this.renderApps(["Session", "CodeRunner", "Craft"])}
                </div>
                <div class="crs-block-more">
                  <div>83+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
          <div class="crs-apps-block" data-color="F0D0B5" id="use-ai">
            <div class="crs-apps-block-inner">
              <div class="crs-block-info">
                <h4 class="crs-block-title">
                  Use AI to write, transcribe, and stay ahead
                </h4>
                <div class="crs-block-description">
                  With tools for writing, summarising, chatting with PDFs, and
                  transcribing meetings, Setapp brings AI into your workflow —
                  without setup, stress, or extra subscriptions
                </div>
                <div class="crs-block-action">
                  <button
                    type="button"
                    data-block-title="Use AI to write, transcribe, and stay ahead"
                    data-title="Explore my AI tools"
                    class="btn btn_primary signup__button crs-block-action-button"
                  >
                    Explore my AI tools
                  </button>
                  <div class="crs-block-action-text">
                    start your 7 days free trial
                  </div>
                </div>
              </div>
              <div class="crs-block-apps">
                <div class="crs-block-apps-list">
                  ${this.renderApps([
          "PDF Pals",
          "MurmurType",
          "Ready to Send"
        ])}
                </div>
                <div class="crs-block-more">
                  <div>9+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="crs-apps-action">
          <a
            href="https://setapp.com/apps"
            class="btn btn-link btn_no-spacing btn-link_light btn-link_with-arrow"
          >
            View all superpowers
          </a>
        </div>
        <div class="crs-apps-subtitle">
          Sign up, install Setapp, and find your <br />
          perfect app in our suite of 260+ apps.
        </div>
        <div class="crs-apps-sub-action">
          <button
            class="btn btn_light signup__button crs-block-action-button"
            type="button"
            data-block-title="Sign up, install Setapp..."
            data-title="Try free for 7 days"
          >
            Try free for 7 days
          </button>
        </div>
      </div>
    </section>`
      );
      t.insertAdjacentHTML("afterend", n);
    }
    renderApps(t) {
      return t.map((n) => le.find((o) => o.name === n)).filter((n) => n !== void 0).map(
        (n) => (
          /* HTML */
          `<div class="crs-block-app">
          <div class="crs-block-app-icon">
            <img
              src="${n.icon}"
              alt="${n.name}"
              width="80"
              height="80"
              loading="lazy"
            />
          </div>
          <div class="crs-block-app-name">${n.name}</div>
          <div class="crs-block-app-description">${n.description}</div>

          <div class="crs-block-app-meta">
            ${n.rating ? (
            /* HTML */
            `<div class="crs-block-app-rating">
                  <img
                    alt=""
                    width="16"
                    height="16"
                    src="https://cdn.setapp.com/master-9f18f44f26fe5f8aa6077a4a8f38ca796e93985f-590/build/main/751ecfba46c61061d678.svg"
                  />${n.rating}%
                </div>`
          ) : ""}
            <div class="crs-block-app-platforms">${n.platforms}</div>
          </div>
        </div>`
        )
      ).join("");
    }
    events() {
      const t = document.querySelectorAll(
        ".crs-block-action-button"
      );
      t && t.length > 0 && t.forEach((n) => {
        n.addEventListener("click", (o) => {
          var r;
          const a = o.target;
          (r = document.querySelector(".header__cta-button")) == null || r.click(), zt({
            eventCategory: a.getAttribute("data-block-title") || "",
            eventAction: "Click",
            eventLabel: a.getAttribute("data-title") || ""
          });
        });
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = kn, document.head.append(t);
    }
    addSmoothScrolling() {
      document.addEventListener("click", (t) => {
        const o = t.target.closest('.crs-apps-nav a[href^="#"]');
        if (o) {
          t.preventDefault(), zt({
            eventCategory: "What do you want to start with today?",
            eventAction: "Click",
            eventLabel: o.getAttribute("data-title") || ""
          });
          const a = o.getAttribute("href");
          if (a && a !== "#") {
            const r = document.querySelector(a);
            r && r.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
      });
    }
    addTooltipByHover() {
      const t = document.querySelectorAll(".crs-block-app");
      if (!t) {
        console.error("Apps blocks container not found");
        return;
      }
      let n;
      const o = new Sn();
      t.forEach((a) => {
        let r = null;
        a.addEventListener("mouseenter", (c) => {
          if (r) {
            r.hide();
            return;
          }
          const s = a.querySelector(".crs-block-app-name");
          if (!s) return;
          const p = An.find(
            (d) => d.title.includes(s.textContent || "")
          );
          if (!p) {
            console.warn(
              "No tooltip variant found for app:",
              s.textContent
            );
            return;
          }
          const u = c.target;
          r = mi(u, {
            content: o.returnHtml(p),
            allowHTML: !0,
            arrow: !1,
            interactive: !0,
            maxWidth: "none",
            theme: "light",
            placement: "right-start",
            boundary: "viewport",
            delay: [1e3, 1e3],
            // Show immediately, hide with delay
            showOnCreate: !0,
            // Show the tooltip immediately when created
            popperOptions: {
              modifiers: [
                {
                  name: "flip",
                  options: {
                    fallbackPlacements: ["left-start", "top", "bottom"]
                  }
                }
              ]
            },
            onShow(d) {
              var y;
              const k = (y = d.popper.querySelector("h3")) == null ? void 0 : y.textContent, x = d.popper.querySelector(".btn-download"), v = d.popper.querySelector(".os-popover-close");
              n = new AbortController(), x == null || x.addEventListener(
                "click",
                () => {
                  d.hide(), setTimeout(() => {
                    var g;
                    (g = document.querySelector(".header__cta-button")) == null || g.click(), zt({
                      eventCategory: k || "",
                      eventAction: "Click",
                      eventLabel: "Try free for 7 days"
                    });
                  }, 200);
                },
                {
                  signal: n.signal
                }
              ), v == null || v.addEventListener(
                "click",
                () => {
                  d.hide();
                },
                {
                  signal: n.signal
                }
              ), zt({
                eventCategory: k || "",
                eventAction: "view",
                eventLabel: "Popup after hover"
              });
            },
            onHide(d) {
              n && n.abort();
            }
          });
        });
      });
    }
  }
  const gi = `.crs-achievs {
  margin-top: 80px;
  width: 100%;
}

.crs-achievs-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.crs-achievs-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 5px;
  width: 100%;
}

.crs-achievs-item {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 6px;
  min-height: 103px;
}

.crs-achievs-item::before,
.crs-achievs-item::after {
  bottom: 0;
  content: '';
  display: block;
  width: 41px;
  height: 100%;
}

.crs-achievs-item::before {
  background-image: url('https://conversionrate-store.github.io/a-b_images/setapp/laurel_left.svg');
}

.crs-achievs-item::after {
  background-image: url('https://conversionrate-store.github.io/a-b_images/setapp/laurel_right.svg');
}

.crs-achievs-item .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  color: #fff;
}

.crs-achievs-item .highlight {
  color: #fff;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  line-height: 20px;
}

.crs-achievs-item .title {
  margin-top: 10px;
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
}

.crs-achievs-item .description {
  margin-top: 2px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}

.crs-achievs-item .apple-logo {
  width: 26px;
  height: 34px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="34" fill="none"><path fill="%23fff" d="M25.172 11.998a7.372 7.372 0 0 0-2.513 2.684 7.667 7.667 0 0 0-.944 3.605 7.449 7.449 0 0 0 1.174 4A7.101 7.101 0 0 0 26 24.96a17.635 17.635 0 0 1-2.194 4.683c-1.367 2.032-2.795 4.064-4.968 4.064-2.174 0-2.733-1.304-5.238-1.304-2.442 0-3.312 1.347-5.3 1.347-1.986 0-3.373-1.882-4.967-4.192A20.733 20.733 0 0 1 0 18.628c0-6.416 4.037-9.816 8.011-9.816 2.112 0 3.871 1.433 5.196 1.433 1.263 0 3.23-1.519 5.63-1.519a7.332 7.332 0 0 1 3.563.82 7.606 7.606 0 0 1 2.772 2.453ZM17.699 6.01a7.518 7.518 0 0 0 1.698-4.597 3.281 3.281 0 0 0-.063-.663 7.08 7.08 0 0 0-4.699 2.502 7.3 7.3 0 0 0-1.76 4.47c.002.202.022.402.063.6.143.027.289.042.435.042a6.052 6.052 0 0 0 2.397-.718A6.248 6.248 0 0 0 17.7 6.01Z"/></svg>');
  background-repeat: no-repeat;
}

.crs-achievs-item .capterra-logo {
  width: 80px;
  height: 21px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="21" fill="none"><g fill="%23fff" clip-path="url(%23a)"><path d="M11.455 15.246c-.082.086-.22.195-.412.325-.192.13-.443.26-.752.39-.31.129-.687.241-1.133.335-.446.094-.958.14-1.534.14-1.112 0-2.073-.187-2.883-.563a5.401 5.401 0 0 1-2.008-1.57c-.528-.67-.916-1.465-1.163-2.381-.247-.916-.37-1.924-.37-3.02 0-1.097.133-2.112.401-3.043.268-.93.67-1.735 1.205-2.414a5.568 5.568 0 0 1 2.008-1.591c.803-.382 1.747-.574 2.831-.574.535 0 1.02.051 1.452.152.432.1.81.22 1.133.357.322.137.59.281.803.432.213.151.374.278.484.38.123.115.23.252.319.41.089.16.134.333.134.52 0 .29-.103.578-.31.867a6.209 6.209 0 0 1-.68.801 8.388 8.388 0 0 0-.555-.53 3.744 3.744 0 0 0-.69-.476 4.44 4.44 0 0 0-.866-.347 3.87 3.87 0 0 0-1.08-.14c-.7 0-1.288.148-1.762.443a3.463 3.463 0 0 0-1.143 1.158 5.043 5.043 0 0 0-.617 1.635 9.95 9.95 0 0 0 0 3.822c.123.621.336 1.17.638 1.646.301.476.696.859 1.184 1.147.487.289 1.095.434 1.822.434.384 0 .738-.05 1.06-.152.323-.1.608-.224.855-.368s.464-.296.65-.455c.184-.158.339-.296.462-.411.083.1.179.224.289.368.11.144.213.296.309.454.096.16.178.318.247.476.068.16.103.304.103.433 0 .188-.035.347-.103.476-.067.131-.177.275-.328.434ZM22.066 13.585c0 1.148.158 1.983.476 2.505a3.37 3.37 0 0 1-1.368.283c-.497 0-.873-.102-1.128-.304-.256-.203-.418-.494-.487-.872-.305.335-.705.618-1.202.85-.497.232-1.105.349-1.823.349-.373 0-.745-.055-1.118-.163a2.887 2.887 0 0 1-1.015-.532 2.744 2.744 0 0 1-.746-.988c-.194-.412-.29-.915-.29-1.509 0-.738.169-1.34.508-1.802a3.657 3.657 0 0 1 1.274-1.096 5.585 5.585 0 0 1 1.657-.554c.593-.1 1.139-.166 1.636-.195.166-.015.328-.022.487-.022h.446v-.396c0-.559-.142-.955-.425-1.19-.284-.235-.743-.353-1.378-.353-.594 0-1.122.102-1.584.305-.463.204-.915.436-1.357.697a3.23 3.23 0 0 1-.466-.816c-.118-.298-.177-.52-.177-.665 0-.203.107-.4.321-.588.214-.189.508-.36.88-.512a6.88 6.88 0 0 1 1.285-.37 7.981 7.981 0 0 1 1.533-.142c.746 0 1.378.08 1.896.24.518.16.94.406 1.264.74.324.334.556.75.693 1.252.138.5.208 1.085.208 1.753v4.095Zm-2.652-2.527h-.29a1.93 1.93 0 0 0-.29.022c-.345.03-.687.073-1.025.13-.339.058-.64.16-.901.306a1.92 1.92 0 0 0-.643.566c-.166.233-.248.53-.248.893 0 .407.11.751.331 1.035.22.283.594.425 1.12.425.261 0 .51-.037.745-.11.234-.071.442-.166.621-.282.18-.117.321-.243.425-.381.104-.138.156-.265.156-.381v-2.223ZM27.225 6.768c.22-.276.564-.556 1.033-.839.468-.283 1.06-.425 1.776-.425.51 0 .994.091 1.456.272.46.182.87.476 1.228.882.358.407.644.944.857 1.613.213.668.32 1.488.32 2.461 0 1.133-.124 2.066-.372 2.799-.248.734-.568 1.315-.96 1.742-.392.429-.83.73-1.311.904a4.223 4.223 0 0 1-1.446.262 3.44 3.44 0 0 1-1.043-.142 4.053 4.053 0 0 1-.754-.315 2.03 2.03 0 0 1-.682-.589v5.355H24.51V5.809a4.383 4.383 0 0 1 .939-.087c.46 0 .849.08 1.169.24.321.16.524.428.607.806Zm3.73 4.03a6.83 6.83 0 0 0-.104-1.22 3.072 3.072 0 0 0-.34-.98 1.695 1.695 0 0 0-.639-.643c-.268-.153-.594-.228-.977-.228-.577 0-.98.116-1.205.348-.227.233-.34.486-.34.763v4.617c.11.117.305.254.587.414.281.16.608.24.978.24.7 0 1.216-.29 1.545-.872.33-.58.494-1.394.494-2.44ZM36.07 14.544a3.959 3.959 0 0 1-.187-.915c-.027-.32-.041-.639-.041-.959V2.563c.096-.014.2-.029.31-.043.097-.015.2-.026.311-.033.11-.007.22-.01.331-.01.221 0 .442.02.664.065.22.043.42.13.6.26.18.131.325.31.436.534.11.226.166.52.166.882v1.547h2.9v2.2h-2.9v4.646c0 1.013.393 1.519 1.18 1.519.194 0 .377-.033.55-.098.173-.066.328-.138.466-.218a2.77 2.77 0 0 0 .58-.447c.207.32.366.596.476.83.11.233.166.453.166.658 0 .19-.072.378-.217.56-.145.184-.35.353-.611.507-.262.154-.58.278-.953.373a4.93 4.93 0 0 1-1.222.144c-.857 0-1.523-.175-2-.523a2.763 2.763 0 0 1-1.005-1.372ZM48.696 14.261c.347 0 .652-.04.915-.12.263-.08.499-.177.707-.294.208-.116.388-.242.54-.38.153-.139.292-.265.417-.382.166.218.34.498.519.839.18.341.27.62.27.838 0 .32-.172.61-.518.871-.29.233-.701.432-1.232.6-.532.166-1.157.25-1.875.25-.65 0-1.288-.087-1.916-.26a4.163 4.163 0 0 1-1.678-.915c-.49-.436-.888-1.02-1.192-1.754-.304-.733-.456-1.658-.456-2.777 0-.915.135-1.702.404-2.363.27-.66.629-1.209 1.078-1.645a4.214 4.214 0 0 1 1.522-.958 5.125 5.125 0 0 1 1.74-.305c.773 0 1.43.127 1.968.38.54.255.978.596 1.316 1.025.338.428.583.918.735 1.47.151.552.227 1.133.227 1.742v.305c0 .116-.003.24-.01.37l-.02.381a2.33 2.33 0 0 1-.032.294h-6.111c.055.799.29 1.463.706 1.993.417.53 1.075.795 1.976.795Zm.944-4.422c0-.697-.128-1.263-.386-1.699-.257-.435-.719-.653-1.385-.653-.57 0-1.024.207-1.364.62-.34.415-.51.992-.51 1.732h3.645ZM57.09 6.823c.084-.13.194-.274.332-.432.138-.159.307-.303.508-.432.2-.13.42-.238.663-.325.241-.086.5-.13.777-.13.165 0 .341.015.528.044.187.029.359.083.518.162.159.08.286.187.383.324a.861.861 0 0 1 .145.508c0 .317-.076.68-.227 1.091-.152.411-.304.762-.456 1.053a3.061 3.061 0 0 0-.705-.469 1.951 1.951 0 0 0-.828-.163c-.428 0-.787.13-1.077.393-.29.262-.435.575-.435.94v7.051h-2.818V5.808a4.4 4.4 0 0 1 .538-.076c.111-.007.242-.01.394-.01.442 0 .825.09 1.15.27.325.18.529.457.61.83ZM65.102 6.823c.083-.13.193-.274.331-.432.138-.159.307-.303.508-.432.2-.13.421-.238.662-.325.242-.086.501-.13.777-.13.166 0 .342.015.529.044.186.029.358.083.518.162.159.08.286.187.383.324a.862.862 0 0 1 .145.508c0 .317-.076.68-.228 1.091-.152.411-.304.762-.455 1.053a3.057 3.057 0 0 0-.705-.469 1.951 1.951 0 0 0-.829-.163c-.428 0-.787.13-1.077.393-.29.262-.435.575-.435.94v7.051h-2.818V5.808a4.533 4.533 0 0 1 .538-.076 6.1 6.1 0 0 1 .394-.01c.442 0 .825.09 1.15.27.325.18.529.457.612.83ZM78.546 13.585c0 1.148.159 1.983.477 2.505a3.367 3.367 0 0 1-1.367.283c-.498 0-.874-.102-1.13-.304-.256-.203-.417-.494-.486-.872-.304.335-.704.618-1.202.85-.497.232-1.105.349-1.823.349-.372 0-.745-.055-1.119-.163a2.887 2.887 0 0 1-1.015-.532 2.744 2.744 0 0 1-.746-.988c-.194-.412-.29-.915-.29-1.509 0-.738.17-1.34.508-1.802a3.657 3.657 0 0 1 1.274-1.096 5.574 5.574 0 0 1 1.657-.554c.593-.1 1.14-.166 1.636-.195.167-.015.328-.022.488-.022h.444v-.396c0-.559-.141-.955-.424-1.19-.284-.235-.743-.353-1.378-.353-.594 0-1.121.102-1.584.305-.462.204-.915.436-1.357.697a3.223 3.223 0 0 1-.466-.816c-.118-.298-.176-.52-.176-.665 0-.203.107-.4.321-.588.214-.189.508-.36.88-.512a6.884 6.884 0 0 1 1.285-.37 7.977 7.977 0 0 1 1.533-.142c.746 0 1.378.08 1.896.24.518.16.939.406 1.263.74.325.334.556.75.695 1.252.137.5.206 1.085.206 1.753v4.095Zm-2.65-2.527h-.29a1.93 1.93 0 0 0-.29.022c-.346.03-.688.073-1.026.13a2.83 2.83 0 0 0-.902.306 1.937 1.937 0 0 0-.642.566c-.166.233-.249.53-.249.893 0 .407.112.751.332 1.035.22.283.594.425 1.119.425.262 0 .51-.037.746-.11a2.47 2.47 0 0 0 .621-.282c.18-.117.321-.243.425-.381.104-.138.156-.265.156-.381v-2.223Z"/></g><defs><clipPath id="a"><path fill="%23fff" d="M.5.75h79v20H.5z"/></clipPath></defs></svg>');
}

.crs-achievs-item .rating-star {
  display: flex;
  align-items: center;
  gap: 6px;
}

.crs-achievs-item .rating-star::before {
  content: '';
  display: inline-block;
  width: 24px;
  height: 23px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" fill="none"><path fill="%23fff" d="M23.363 8.613 15.985 7.58l-3.307-6.467c-.247-.483-1.11-.483-1.357 0L8.015 7.58.637 8.613C.031 8.7-.21 9.375.214 9.775l5.36 5.043-1.267 7.13c-.1.567.558.992 1.103.714L12 19.32l6.59 3.344c.54.275 1.205-.141 1.103-.713l-1.267-7.13 5.36-5.044c.425-.4.182-1.077-.423-1.163Z"/></svg>');
  background-repeat: no-repeat;
}
`;
  class vi {
    constructor({ container: t, position: n = "afterend" }) {
      this.container = t, this.position = n, this.init();
    }
    init() {
      if (!this.container) {
        console.error("Container element is not provided");
        return;
      }
      this.addStyles(), this.render();
    }
    render() {
      this.container.insertAdjacentHTML(
        this.position,
        /* HTML */
        `
      <div class="crs-achievs">
        <div class="crs-achievs-inner">
          <div class="crs-achievs-list">
            <div class="crs-achievs-item">
              <div class="content">
                <div class="highlight apple-logo"></div>
                <div class="title">Notarized</div>
                <div class="description">by Apple</div>
              </div>
            </div>
            <div class="crs-achievs-item">
              <div class="content">
                <div class="highlight">100 000+</div>
                <div class="title">Happy subscribers</div>
                <div class="description">since 2016</div>
              </div>
            </div>
            <div class="crs-achievs-item">
              <div class="content">
                <div class="highlight rating-star">4.7</div>
                <div class="title capterra-logo"></div>
                <div class="description">rating</div>
              </div>
            </div>
            <div class="crs-achievs-item">
              <div class="content">
                <div class="highlight rating-star">4.8</div>
                <div class="title">G2 reviews</div>
                <div class="description">rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
      );
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = gi, document.head.appendChild(t);
    }
  }
  const bi = "https://conversionrate-store.github.io/a-b_images/setapp/", yi = `.site-navigation__bar {
  background: #1a1a1d;
}

section.header {
  padding-top: 0 !important;
}

.eney-promo-banner,
section.header .header__badge,
section.header .header__description {
  display: none;
}

.header__apps-image {
  margin-top: 20px;
  margin-bottom: -60px;
  width: 100%;
  height: max-content;
}

.header__apps-image img {
  width: 100%;
  max-width: 710px;
  filter: drop-shadow(1px 10px 50px #d9d9d92a);
}

.header__logo {
  position: relative;
  filter: drop-shadow(1px 10px 30px #d9d9d934);
}

.header__title.h1_hero {
  max-width: 1022px;
  font-size: 64px;
  font-weight: 700;
  line-height: 67.84px;
  letter-spacing: 1px;
}

.crs-header-comment {
  margin-top: 42px;
  max-width: 566px;
  text-wrap: pretty;
  color: #fff;
}

.crs-header-comment p {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: left;
}

.crs-header-comment-author {
  margin-top: 8px;
}

.crs-header-comment-author .stars {
  --star-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none"><path fill="%23EFD0B5" d="m13.629 4.897-4.304-.612L7.395.464c-.144-.285-.647-.285-.791 0L4.675 4.285l-4.303.612c-.354.05-.495.45-.247.686l3.127 2.98-.74 4.213c-.058.335.326.586.644.422L7 11.222l3.844 1.977c.315.162.703-.084.644-.422l-.74-4.213 3.127-2.98c.248-.237.106-.637-.246-.687Z"/></svg>');
  display: inline-flex;
  gap: 4px;
  width: 86px;
  height: 17px;
}

.crs-header-comment-author .stars span {
  width: 14px;
  height: 13px;
  background-image: var(--star-image);
}
`;
  class wi {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.addAppsImage(), this.changeTitle(), this.addComment(), this.addAchievs();
    }
    addAppsImage() {
      const t = `
      <div class="header__apps-image"><img src="${bi}/apps.webp" alt="Apps Image"></div>`, n = document.querySelector(
        "section.header .header__logo"
      );
      n ? n.insertAdjacentHTML("beforebegin", t) : console.error("Target element not found");
    }
    changeTitle() {
      const t = document.querySelector("section.header h1.h1_hero");
      t && (t.textContent = "Get any task done on your Mac with one subscription");
    }
    addComment() {
      const t = document.querySelector(
        "section.header .header__description"
      );
      if (!t) return;
      t.insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        `<div class="crs-header-comment">
      <p>
        “ Hundreds of the best Mac apps out there. Tens of thousands of dollars
        of software for just a few bucks a month. I pay for it on all of my
        computers. “
      </p>
      <div class="crs-header-comment-author">
        <span class="stars"
          ><span></span><span></span><span></span><span></span><span></span
        ></span>
        — Lory G.
      </div>
    </div>`
      );
    }
    addAchievs() {
      const t = document.querySelector(
        "section.header .header__description"
      );
      t && new vi({
        container: t,
        position: "afterend"
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = yi, document.head.appendChild(t);
    }
  }
  const xi = `.crs-more {
  margin-bottom: 120px;
  max-width: 100%;
  color: #fff;
  background-color: #070707;
  background-image: url('https://conversionrate-store.github.io/a-b_images/setapp/notebook-bg-2.webp');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
}


@media (min-width: 1440px) {
  .crs-more {
    background-size: cover;
  }
}

.crs-more-content {
  margin-inline: auto;
  max-width: 1260px;
  padding-top: 49px;
  padding-bottom: 35%;
}

.crs-more-title {
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-weight: 400;
  line-height: 51.84px;
  letter-spacing: 1px;
}

.crs-more-description {
  margin-top: 12px;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32.04px; /* 178% */
}

.crs-more-blocks {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.crs-more-block {
  flex: 1;
  max-width: 380px;
  min-width: 300px;
  padding: 40px;
  border-radius: 15px;
  background: #26262b;
}

.crs-more-block-title {
  margin-top: 40px;
  margin-bottom: 0;
  color: #fff;
  font-size: 26px;
  font-weight: 600;
  line-height: 36px;
}

.crs-more-block-description {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
}
`;
  class ki {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render(), this.events();
    }
    render() {
      const t = document.querySelector("section.apps");
      if (!t) {
        console.error("Target element not found");
        return;
      }
      t.insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        `
      <section class="crs-more page-content-wrapper ">
        <div class="crs-more-content">
          <h3 class="crs-more-title">More with Setapp</h3>
          <div class="crs-more-description">
            With a Setapp subscription, it's easy to discover, install, and use
            <br />
            quality apps for Mac and iOS.
          </div>
          <div class="crs-more-blocks">
            <div class="crs-more-block">
              <div class="crs-block-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.633 30.3472V18.6702C13.633 16.7062 14.113 14.7722 15.033 13.0252L19.993 3.60524C20.1745 3.26619 20.4452 2.98315 20.7758 2.78665C21.1064 2.59016 21.4844 2.48767 21.869 2.49024C23.032 2.49024 23.976 3.40824 23.976 4.54024V14.8702H32.722C35.998 14.8702 38.3 18.0072 37.236 21.0222L33.409 31.8552C32.746 33.7302 30.932 34.9902 28.894 34.9902H18.406C15.77 34.9902 13.633 32.9122 13.633 30.3472ZM2.5 18.7412C2.5 16.6032 4.28 14.8712 6.478 14.8712C8.675 14.8712 10.455 16.6032 10.455 18.7412V31.1212C10.455 33.2592 8.675 34.9912 6.478 34.9912C4.28 34.9902 2.5 33.2592 2.5 31.1202V18.7412Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="crs-more-block-title">Handpicked Apps</div>
              <div class="crs-more-block-description">
                Each app is carefully selected, with new ones added regularly.
              </div>
            </div>
            <div class="crs-more-block">
              <div class="crs-block-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.7526 4.24023C17.1559 4.24023 16.5836 4.47729 16.1616 4.89924C15.7396 5.3212 15.5026 5.8935 15.5026 6.49023V17.7402H7.4336C5.4296 17.7402 4.4256 20.1632 5.8436 21.5802L18.4096 34.1502C18.6185 34.3592 18.8666 34.5249 19.1396 34.638C19.4125 34.7511 19.7051 34.8093 20.0006 34.8093C20.2961 34.8093 20.5887 34.7511 20.8616 34.638C21.1346 34.5249 21.3827 34.3592 21.5916 34.1502L34.1616 21.5832C35.5786 20.1652 34.5746 17.7422 32.5696 17.7422L24.5026 17.7412V6.49023C24.5026 5.8935 24.2655 5.3212 23.8436 4.89924C23.4216 4.47729 22.8493 4.24023 22.2526 4.24023H17.7526Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="crs-more-block-title">Free Updates, No Ads</div>
              <div class="crs-more-block-description">
                Enjoy automatic updates and zero ads at no extra cost.
              </div>
            </div>
            <div class="crs-more-block">
              <div class="crs-block-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_781_1191)">
                    <mask
                      id="mask0_781_1191"
                      style="mask-type:luminance"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="-1"
                      width="40"
                      height="41"
                    >
                      <path
                        d="M0 -0.00976562H40V39.9902H0V-0.00976562Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_781_1191)">
                      <path
                        d="M35.962 5.97123C33.2834 4.95687 30.372 4.72349 27.566 5.29823C24.7718 5.86635 22.199 7.22323 20.152 9.20823C18.0747 7.13799 15.416 5.7497 12.53 5.22823C9.63284 4.69872 6.64328 5.05669 3.95301 6.25523C3.67177 6.37768 3.43159 6.57829 3.26101 6.83323C3.09249 7.08556 3.00174 7.38181 3.00001 7.68523V31.3962C2.99901 31.6282 3.05501 31.8562 3.16401 32.0622C3.27401 32.2682 3.43201 32.4452 3.62601 32.5772C3.82124 32.711 4.0456 32.7963 4.28041 32.8258C4.51523 32.8554 4.75371 32.8284 4.97601 32.7472C7.12 31.9813 9.41304 31.7259 11.673 32.0012C13.9277 32.274 16.0871 33.0713 17.978 34.3292C18.6333 34.7629 19.4022 34.9929 20.188 34.9902C20.9558 34.9922 21.7077 34.7709 22.352 34.3532C24.211 33.1348 26.3174 32.3444 28.519 32.0392C30.7262 31.7316 32.9741 31.9153 35.102 32.5772C35.3575 32.6543 35.6289 32.6614 35.888 32.5977C36.1471 32.534 36.3844 32.4019 36.575 32.2152C36.848 31.9442 37.001 31.5792 37 31.1992V7.43223C36.998 7.11376 36.8978 6.80366 36.713 6.54423C36.5262 6.28229 36.2639 6.08264 35.962 5.97123ZM17.875 13.3632V30.4952C14.568 28.9612 9.87301 28.4152 6.25001 28.9232V8.49323C7.98501 8.03123 10.814 8.03123 12.549 8.49323C14.2762 8.95045 15.8519 9.85563 17.117 11.1172C17.408 11.4592 17.662 11.8292 17.875 12.2212V13.3632Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_781_1191">
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        transform="translate(0 -0.00976562)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="crs-more-block-title">App Guides</div>
              <div class="crs-more-block-description">
                Learn new apps fast and uncover hidden features easily.
              </div>
            </div>
          </div>
        </div>
      </section>
    `
      );
    }
    events() {
      fi(".crs-more", "More with Setapp", "Benefits", 0);
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = xi, document.head.appendChild(t);
    }
  }
  const Ci = `.home {
  background: #1a1a1d;
}
`;
  wn({ name: "4th EXP on HP", dev: "OS" }), xn("exp_hp");
  class Si {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.init();
    }
    init() {
      this.getAppData(), !(this.device === "mobile" || location.pathname !== "/") && (this.addStyles(), new wi(), new hi(), new ki());
    }
    getAppData() {
      const t = document.querySelectorAll("app-details");
      Array.from(t).map((n) => {
        const o = n.getAttribute("name") || "", a = n.getAttribute("iconsrc") || "", r = n.getAttribute("description") || "", c = n.getAttribute("url") || "", s = n.getAttribute("platforms") || "", p = n.getAttribute("rating") || "";
        return {
          name: o,
          icon: a,
          description: r,
          url: c,
          platforms: s,
          rating: p
        };
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = Ci, document.head.appendChild(t);
    }
  }
  new Si();
})();
