(function() {
  "use strict";
  const ft = (e) => new Promise((t) => {
    const n = document.querySelector(e);
    n && t(n);
    const i = new MutationObserver(() => {
      const a = document.querySelector(e);
      a && (t(a), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), xn = ({ name: e, dev: t }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, kn = (e) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, Te = (e, t = "info") => {
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
  }, Cn = `section.apps {
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
    height: 100%;
    flex-direction: column;
    justify-content: start;
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
    flex: 1;
    max-width: 100%;
    padding: 60px 40px 0;
  }

  .crs-block-apps {
    flex: 1;
    display: flex;
    flex-direction: column;
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
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
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

@container (max-width: 900px) {
  .crs-block-app {
    max-width: 155px;
    min-height: 265px;
  }
}



.crs-block-app-name {
  font-size: 18px;
  font-weight: 600;
  line-height: 32.04px;
  text-align: center;
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
}
`, de = [
    {
      name: "CleanMyMac",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/78/42681/icon-1747895078-682ec326c5805.png",
      description: "Tidy up your Mac",
      url: "https://setapp.com/apps/cleanmymac",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "QuitAll",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/493/10507/icon-1715515857-6640b1d134f36.png",
      description: "Speed up Mac by quitting all apps",
      url: "https://setapp.com/apps/quit-all-mac",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "iStat Menus",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/144/41794/icon-1739274958-67ab3ace7a0bf.png",
      description: "Track CPU, GPU, sensors, etc.",
      url: "https://setapp.com/apps/istat-menus",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Endurance",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/301/42576/icon-1746973828-6820b484ae86f.png",
      description: "Extend your battery life",
      url: "https://setapp.com/apps/endurance",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "AlDente Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/483/42676/icon-1747828119-682dbd97182a6.png",
      description: "Set battery charging limits",
      url: "https://setapp.com/apps/aldente-pro",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Mission Control",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/376/42548/icon-1746731563-681d022b89238.png",
      description: "Close windows from Mission Control",
      url: "https://setapp.com/apps/mission-control-plus",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "WidgetWall",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/528/42687/icon-1747926996-682f3fd48a02b.png",
      description: "Add widgets to Mac desktop",
      url: "https://setapp.com/apps/widget-wall",
      platforms: "Mac",
      rating: "88"
    },
    {
      name: "Bartender",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/153/42799/icon-1748962599-683f0d271f5a8.png",
      description: "Personalize your menu bar",
      url: "https://setapp.com/apps/bartender",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "CleanShot X",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/321/42718/icon-1748347773-6835ab7ddfd5d.png",
      description: "Take better screenshots and GIFs",
      url: "https://setapp.com/apps/cleanshot",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Downie",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/222/42263/icon-1743756630-67ef9d568e1e3.png",
      description: "Download YouTube videos",
      url: "https://setapp.com/apps/downie",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Pulltube",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png",
      description: "Download and trim videos",
      url: "https://setapp.com/apps/pulltube",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Permute",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=128,dpr=1/https://store.setapp.com/app/219/42264/icon-1743758208-67efa380b6636.png",
      description: "Convert video and audio files",
      url: "https://setapp.com/apps/permute",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Nitro PDF Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/518/42755/icon-1749071187-6840b55359ae5.png",
      description: "Work with your PDFs",
      url: "https://setapp.com/apps/nitro-pdf-pro",
      platforms: "Mac, iOS",
      rating: "89"
    },
    {
      name: "BetterZip",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=128,dpr=1/https://store.setapp.com/app/245/7858/icon-1681236553-6435a249c1fd2.png",
      description: "Archive files the easy way",
      url: "https://setapp.com/apps/betterzip",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Get Backup Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png",
      description: "Back up only essential files",
      url: "https://setapp.com/apps/get-backup-pro",
      platforms: "Mac",
      rating: "86"
    },
    {
      name: "Archiver",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=128,dpr=1/https://store.setapp.com/app/194/10197/icon-1711963165-660a7c1d7fdbc.png",
      description: "Compress files easily",
      url: "https://setapp.com/apps/archiver",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Ulysses",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/67/42660/icon-1747749841-682c8bd1e7d9c.png",
      description: "Write and publish from one app",
      url: "https://setapp.com/apps/ulysses",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "Renamer",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/136/40792/icon-1730733142-6728e4563df6a.png",
      description: "Rename a batch of files",
      url: "https://setapp.com/apps/renamer",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Session",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/428/42692/icon-1747967217-682fdcf1a2474.png",
      description: "Work in short intervals",
      url: "https://setapp.com/apps/session",
      platforms: "Mac, iOS",
      rating: "98"
    },
    {
      name: "CodeRunner",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/122/41549/icon-1737112183-678a3a77b43aa.png",
      description: "Edit and run code faster",
      url: "https://setapp.com/apps/coderunner",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Craft",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/554/42201/icon-1743413950-67ea62be54f57.png",
      description: "Create and structure documents",
      url: "https://setapp.com/apps/craft",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "PDF Pals",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/606/42481/icon-1746107539-68137c9375583.png",
      description: "Chat with your PDFs",
      url: "https://setapp.com/apps/pdf-pals",
      platforms: "Mac",
      rating: "89"
    },
    {
      name: "MurmurType",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/592/43811/icon-1749109056-68414940d76a1.png",
      description: "Transcribe your speech",
      url: "https://setapp.com/apps/murmur",
      platforms: "Mac",
      rating: "83"
    },
    {
      name: "Ready to Send",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/607/main/icon-65719fa98f5e6.png",
      description: "Generate draft email replies",
      url: "https://setapp.com/apps/ready-to-send",
      platforms: "Web",
      rating: "0"
    }
  ], Sn = `.tippy-box,
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
  class An {
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
      const i = document.getElementById("os-dialog").querySelector(
        "#os-dialog-content"
      ), a = t === "latest" ? JSON.parse(sessionStorage.getItem("os-tooltip-variant")) : t;
      i.innerHTML = this.returnHtml(a), (r = this.popoverElement) == null || r.showModal(), this.eventListeners();
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
      const i = new AbortController();
      this.aborters.push(i);
      const a = t.querySelector(
        ".btn-download"
      );
      a == null || a.addEventListener(
        "click",
        async () => {
          var s;
          (s = document.querySelector(".header__cta-button")) == null || s.click();
          const r = document.querySelector("#signup-modal");
          if (r) {
            const c = new MutationObserver((p) => {
              p.forEach((u) => {
                u.type === "attributes" && u.attributeName === "aria-hidden" && r.getAttribute("aria-hidden") === "true" && (c.disconnect(), this.showDialog("latest"));
              });
            });
            c.observe(r, { attributes: !0 });
          }
        },
        {
          signal: i.signal
        }
      );
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = Sn, document.head.appendChild(t);
    }
  }
  const En = [
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
  var _ = "top", N = "bottom", U = "right", $ = "left", ue = "auto", Pt = [_, N, U, $], xt = "start", Lt = "end", Mn = "clippingParents", Pe = "viewport", Rt = "popper", On = "reference", Le = /* @__PURE__ */ Pt.reduce(function(e, t) {
    return e.concat([t + "-" + xt, t + "-" + Lt]);
  }, []), Re = /* @__PURE__ */ [].concat(Pt, [ue]).reduce(function(e, t) {
    return e.concat([t, t + "-" + xt, t + "-" + Lt]);
  }, []), Dn = "beforeRead", Tn = "read", Pn = "afterRead", Ln = "beforeMain", Rn = "main", qn = "afterMain", Bn = "beforeWrite", In = "write", jn = "afterWrite", zn = [Dn, Tn, Pn, Ln, Rn, qn, Bn, In, jn];
  function X(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function F(e) {
    if (e == null)
      return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function mt(e) {
    var t = F(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Y(e) {
    var t = F(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function fe(e) {
    if (typeof ShadowRoot > "u")
      return !1;
    var t = F(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Hn(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var i = t.styles[n] || {}, a = t.attributes[n] || {}, r = t.elements[n];
      !Y(r) || !X(r) || (Object.assign(r.style, i), Object.keys(a).forEach(function(s) {
        var c = a[s];
        c === !1 ? r.removeAttribute(s) : r.setAttribute(s, c === !0 ? "" : c);
      }));
    });
  }
  function _n(e) {
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
      Object.keys(t.elements).forEach(function(i) {
        var a = t.elements[i], r = t.attributes[i] || {}, s = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : n[i]), c = s.reduce(function(p, u) {
          return p[u] = "", p;
        }, {});
        !Y(a) || !X(a) || (Object.assign(a.style, c), Object.keys(r).forEach(function(p) {
          a.removeAttribute(p);
        }));
      });
    };
  }
  const qe = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: Hn,
    effect: _n,
    requires: ["computeStyles"]
  };
  function K(e) {
    return e.split("-")[0];
  }
  var ht = Math.max, Nt = Math.min, kt = Math.round;
  function me() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Be() {
    return !/^((?!chrome|android).)*safari/i.test(me());
  }
  function Ct(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var i = e.getBoundingClientRect(), a = 1, r = 1;
    t && Y(e) && (a = e.offsetWidth > 0 && kt(i.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && kt(i.height) / e.offsetHeight || 1);
    var s = mt(e) ? F(e) : window, c = s.visualViewport, p = !Be() && n, u = (i.left + (p && c ? c.offsetLeft : 0)) / a, d = (i.top + (p && c ? c.offsetTop : 0)) / r, C = i.width / a, k = i.height / r;
    return {
      width: C,
      height: k,
      top: d,
      right: u + C,
      bottom: d + k,
      left: u,
      x: u,
      y: d
    };
  }
  function he(e) {
    var t = Ct(e), n = e.offsetWidth, i = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: i
    };
  }
  function Ie(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t))
      return !0;
    if (n && fe(n)) {
      var i = t;
      do {
        if (i && e.isSameNode(i))
          return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function nt(e) {
    return F(e).getComputedStyle(e);
  }
  function $n(e) {
    return ["table", "td", "th"].indexOf(X(e)) >= 0;
  }
  function ct(e) {
    return ((mt(e) ? e.ownerDocument : (
      // $FlowFixMe[prop-missing]
      e.document
    )) || window.document).documentElement;
  }
  function Ut(e) {
    return X(e) === "html" ? e : (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      e.parentNode || // DOM Element detected
      (fe(e) ? e.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      ct(e)
    );
  }
  function je(e) {
    return !Y(e) || // https://github.com/popperjs/popper-core/issues/837
    nt(e).position === "fixed" ? null : e.offsetParent;
  }
  function Fn(e) {
    var t = /firefox/i.test(me()), n = /Trident/i.test(me());
    if (n && Y(e)) {
      var i = nt(e);
      if (i.position === "fixed")
        return null;
    }
    var a = Ut(e);
    for (fe(a) && (a = a.host); Y(a) && ["html", "body"].indexOf(X(a)) < 0; ) {
      var r = nt(a);
      if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
        return a;
      a = a.parentNode;
    }
    return null;
  }
  function qt(e) {
    for (var t = F(e), n = je(e); n && $n(n) && nt(n).position === "static"; )
      n = je(n);
    return n && (X(n) === "html" || X(n) === "body" && nt(n).position === "static") ? t : n || Fn(e) || t;
  }
  function ge(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function Bt(e, t, n) {
    return ht(e, Nt(t, n));
  }
  function Vn(e, t, n) {
    var i = Bt(e, t, n);
    return i > n ? n : i;
  }
  function ze() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function He(e) {
    return Object.assign({}, ze(), e);
  }
  function _e(e, t) {
    return t.reduce(function(n, i) {
      return n[i] = e, n;
    }, {});
  }
  var Wn = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, He(typeof t != "number" ? t : _e(t, Pt));
  };
  function Nn(e) {
    var t, n = e.state, i = e.name, a = e.options, r = n.elements.arrow, s = n.modifiersData.popperOffsets, c = K(n.placement), p = ge(c), u = [$, U].indexOf(c) >= 0, d = u ? "height" : "width";
    if (!(!r || !s)) {
      var C = Wn(a.padding, n), k = he(r), h = p === "y" ? _ : $, y = p === "y" ? N : U, v = n.rects.reference[d] + n.rects.reference[p] - s[p] - n.rects.popper[d], g = s[p] - n.rects.reference[p], f = qt(r), x = f ? p === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, A = v / 2 - g / 2, o = C[h], b = x - k[d] - C[y], m = x / 2 - k[d] / 2 + A, E = Bt(o, m, b), O = p;
      n.modifiersData[i] = (t = {}, t[O] = E, t.centerOffset = E - m, t);
    }
  }
  function Un(e) {
    var t = e.state, n = e.options, i = n.element, a = i === void 0 ? "[data-popper-arrow]" : i;
    a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Ie(t.elements.popper, a) && (t.elements.arrow = a));
  }
  const Yn = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Nn,
    effect: Un,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function St(e) {
    return e.split("-")[1];
  }
  var Gn = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Zn(e, t) {
    var n = e.x, i = e.y, a = t.devicePixelRatio || 1;
    return {
      x: kt(n * a) / a || 0,
      y: kt(i * a) / a || 0
    };
  }
  function $e(e) {
    var t, n = e.popper, i = e.popperRect, a = e.placement, r = e.variation, s = e.offsets, c = e.position, p = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, C = e.isFixed, k = s.x, h = k === void 0 ? 0 : k, y = s.y, v = y === void 0 ? 0 : y, g = typeof d == "function" ? d({
      x: h,
      y: v
    }) : {
      x: h,
      y: v
    };
    h = g.x, v = g.y;
    var f = s.hasOwnProperty("x"), x = s.hasOwnProperty("y"), A = $, o = _, b = window;
    if (u) {
      var m = qt(n), E = "clientHeight", O = "clientWidth";
      if (m === F(n) && (m = ct(n), nt(m).position !== "static" && c === "absolute" && (E = "scrollHeight", O = "scrollWidth")), m = m, a === _ || (a === $ || a === U) && r === Lt) {
        o = N;
        var T = C && m === b && b.visualViewport ? b.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          m[E]
        );
        v -= T - i.height, v *= p ? 1 : -1;
      }
      if (a === $ || (a === _ || a === N) && r === Lt) {
        A = U;
        var P = C && m === b && b.visualViewport ? b.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          m[O]
        );
        h -= P - i.width, h *= p ? 1 : -1;
      }
    }
    var q = Object.assign({
      position: c
    }, u && Gn), R = d === !0 ? Zn({
      x: h,
      y: v
    }, F(n)) : {
      x: h,
      y: v
    };
    if (h = R.x, v = R.y, p) {
      var L;
      return Object.assign({}, q, (L = {}, L[o] = x ? "0" : "", L[A] = f ? "0" : "", L.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + v + "px)" : "translate3d(" + h + "px, " + v + "px, 0)", L));
    }
    return Object.assign({}, q, (t = {}, t[o] = x ? v + "px" : "", t[A] = f ? h + "px" : "", t.transform = "", t));
  }
  function Xn(e) {
    var t = e.state, n = e.options, i = n.gpuAcceleration, a = i === void 0 ? !0 : i, r = n.adaptive, s = r === void 0 ? !0 : r, c = n.roundOffsets, p = c === void 0 ? !0 : c, u = {
      placement: K(t.placement),
      variation: St(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, $e(Object.assign({}, u, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: s,
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
  const Kn = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: Xn,
    data: {}
  };
  var Yt = {
    passive: !0
  };
  function Qn(e) {
    var t = e.state, n = e.instance, i = e.options, a = i.scroll, r = a === void 0 ? !0 : a, s = i.resize, c = s === void 0 ? !0 : s, p = F(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return r && u.forEach(function(d) {
      d.addEventListener("scroll", n.update, Yt);
    }), c && p.addEventListener("resize", n.update, Yt), function() {
      r && u.forEach(function(d) {
        d.removeEventListener("scroll", n.update, Yt);
      }), c && p.removeEventListener("resize", n.update, Yt);
    };
  }
  const Jn = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {
    },
    effect: Qn,
    data: {}
  };
  var ti = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Gt(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return ti[t];
    });
  }
  var ei = {
    start: "end",
    end: "start"
  };
  function Fe(e) {
    return e.replace(/start|end/g, function(t) {
      return ei[t];
    });
  }
  function ve(e) {
    var t = F(e), n = t.pageXOffset, i = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: i
    };
  }
  function be(e) {
    return Ct(ct(e)).left + ve(e).scrollLeft;
  }
  function ni(e, t) {
    var n = F(e), i = ct(e), a = n.visualViewport, r = i.clientWidth, s = i.clientHeight, c = 0, p = 0;
    if (a) {
      r = a.width, s = a.height;
      var u = Be();
      (u || !u && t === "fixed") && (c = a.offsetLeft, p = a.offsetTop);
    }
    return {
      width: r,
      height: s,
      x: c + be(e),
      y: p
    };
  }
  function ii(e) {
    var t, n = ct(e), i = ve(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, r = ht(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = ht(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), c = -i.scrollLeft + be(e), p = -i.scrollTop;
    return nt(a || n).direction === "rtl" && (c += ht(n.clientWidth, a ? a.clientWidth : 0) - r), {
      width: r,
      height: s,
      x: c,
      y: p
    };
  }
  function ye(e) {
    var t = nt(e), n = t.overflow, i = t.overflowX, a = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + a + i);
  }
  function Ve(e) {
    return ["html", "body", "#document"].indexOf(X(e)) >= 0 ? e.ownerDocument.body : Y(e) && ye(e) ? e : Ve(Ut(e));
  }
  function It(e, t) {
    var n;
    t === void 0 && (t = []);
    var i = Ve(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = F(i), s = a ? [r].concat(r.visualViewport || [], ye(i) ? i : []) : i, c = t.concat(s);
    return a ? c : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      c.concat(It(Ut(s)))
    );
  }
  function we(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function oi(e, t) {
    var n = Ct(e, !1, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function We(e, t, n) {
    return t === Pe ? we(ni(e, n)) : mt(t) ? oi(t, n) : we(ii(ct(e)));
  }
  function ai(e) {
    var t = It(Ut(e)), n = ["absolute", "fixed"].indexOf(nt(e).position) >= 0, i = n && Y(e) ? qt(e) : e;
    return mt(i) ? t.filter(function(a) {
      return mt(a) && Ie(a, i) && X(a) !== "body";
    }) : [];
  }
  function ri(e, t, n, i) {
    var a = t === "clippingParents" ? ai(e) : [].concat(t), r = [].concat(a, [n]), s = r[0], c = r.reduce(function(p, u) {
      var d = We(e, u, i);
      return p.top = ht(d.top, p.top), p.right = Nt(d.right, p.right), p.bottom = Nt(d.bottom, p.bottom), p.left = ht(d.left, p.left), p;
    }, We(e, s, i));
    return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
  }
  function Ne(e) {
    var t = e.reference, n = e.element, i = e.placement, a = i ? K(i) : null, r = i ? St(i) : null, s = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, p;
    switch (a) {
      case _:
        p = {
          x: s,
          y: t.y - n.height
        };
        break;
      case N:
        p = {
          x: s,
          y: t.y + t.height
        };
        break;
      case U:
        p = {
          x: t.x + t.width,
          y: c
        };
        break;
      case $:
        p = {
          x: t.x - n.width,
          y: c
        };
        break;
      default:
        p = {
          x: t.x,
          y: t.y
        };
    }
    var u = a ? ge(a) : null;
    if (u != null) {
      var d = u === "y" ? "height" : "width";
      switch (r) {
        case xt:
          p[u] = p[u] - (t[d] / 2 - n[d] / 2);
          break;
        case Lt:
          p[u] = p[u] + (t[d] / 2 - n[d] / 2);
          break;
      }
    }
    return p;
  }
  function jt(e, t) {
    t === void 0 && (t = {});
    var n = t, i = n.placement, a = i === void 0 ? e.placement : i, r = n.strategy, s = r === void 0 ? e.strategy : r, c = n.boundary, p = c === void 0 ? Mn : c, u = n.rootBoundary, d = u === void 0 ? Pe : u, C = n.elementContext, k = C === void 0 ? Rt : C, h = n.altBoundary, y = h === void 0 ? !1 : h, v = n.padding, g = v === void 0 ? 0 : v, f = He(typeof g != "number" ? g : _e(g, Pt)), x = k === Rt ? On : Rt, A = e.rects.popper, o = e.elements[y ? x : k], b = ri(mt(o) ? o : o.contextElement || ct(e.elements.popper), p, d, s), m = Ct(e.elements.reference), E = Ne({
      reference: m,
      element: A,
      placement: a
    }), O = we(Object.assign({}, A, E)), T = k === Rt ? O : m, P = {
      top: b.top - T.top + f.top,
      bottom: T.bottom - b.bottom + f.bottom,
      left: b.left - T.left + f.left,
      right: T.right - b.right + f.right
    }, q = e.modifiersData.offset;
    if (k === Rt && q) {
      var R = q[a];
      Object.keys(P).forEach(function(L) {
        var I = [U, N].indexOf(L) >= 0 ? 1 : -1, W = [_, N].indexOf(L) >= 0 ? "y" : "x";
        P[L] += R[W] * I;
      });
    }
    return P;
  }
  function si(e, t) {
    t === void 0 && (t = {});
    var n = t, i = n.placement, a = n.boundary, r = n.rootBoundary, s = n.padding, c = n.flipVariations, p = n.allowedAutoPlacements, u = p === void 0 ? Re : p, d = St(i), C = d ? c ? Le : Le.filter(function(y) {
      return St(y) === d;
    }) : Pt, k = C.filter(function(y) {
      return u.indexOf(y) >= 0;
    });
    k.length === 0 && (k = C);
    var h = k.reduce(function(y, v) {
      return y[v] = jt(e, {
        placement: v,
        boundary: a,
        rootBoundary: r,
        padding: s
      })[K(v)], y;
    }, {});
    return Object.keys(h).sort(function(y, v) {
      return h[y] - h[v];
    });
  }
  function ci(e) {
    if (K(e) === ue)
      return [];
    var t = Gt(e);
    return [Fe(e), t, Fe(t)];
  }
  function pi(e) {
    var t = e.state, n = e.options, i = e.name;
    if (!t.modifiersData[i]._skip) {
      for (var a = n.mainAxis, r = a === void 0 ? !0 : a, s = n.altAxis, c = s === void 0 ? !0 : s, p = n.fallbackPlacements, u = n.padding, d = n.boundary, C = n.rootBoundary, k = n.altBoundary, h = n.flipVariations, y = h === void 0 ? !0 : h, v = n.allowedAutoPlacements, g = t.options.placement, f = K(g), x = f === g, A = p || (x || !y ? [Gt(g)] : ci(g)), o = [g].concat(A).reduce(function(ot, Z) {
        return ot.concat(K(Z) === ue ? si(t, {
          placement: Z,
          boundary: d,
          rootBoundary: C,
          padding: u,
          flipVariations: y,
          allowedAutoPlacements: v
        }) : Z);
      }, []), b = t.rects.reference, m = t.rects.popper, E = /* @__PURE__ */ new Map(), O = !0, T = o[0], P = 0; P < o.length; P++) {
        var q = o[P], R = K(q), L = St(q) === xt, I = [_, N].indexOf(R) >= 0, W = I ? "width" : "height", j = jt(t, {
          placement: q,
          boundary: d,
          rootBoundary: C,
          altBoundary: k,
          padding: u
        }), z = I ? L ? U : $ : L ? N : _;
        b[W] > m[W] && (z = Gt(z));
        var B = Gt(z), J = [];
        if (r && J.push(j[R] <= 0), c && J.push(j[z] <= 0, j[B] <= 0), J.every(function(ot) {
          return ot;
        })) {
          T = q, O = !1;
          break;
        }
        E.set(q, J);
      }
      if (O)
        for (var tt = y ? 3 : 1, vt = function(Z) {
          var at = o.find(function(Et) {
            var rt = E.get(Et);
            if (rt)
              return rt.slice(0, Z).every(function(Mt) {
                return Mt;
              });
          });
          if (at)
            return T = at, "break";
        }, et = tt; et > 0; et--) {
          var bt = vt(et);
          if (bt === "break") break;
        }
      t.placement !== T && (t.modifiersData[i]._skip = !0, t.placement = T, t.reset = !0);
    }
  }
  const li = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: pi,
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };
  function Ue(e, t, n) {
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
  function Ye(e) {
    return [_, U, N, $].some(function(t) {
      return e[t] >= 0;
    });
  }
  function di(e) {
    var t = e.state, n = e.name, i = t.rects.reference, a = t.rects.popper, r = t.modifiersData.preventOverflow, s = jt(t, {
      elementContext: "reference"
    }), c = jt(t, {
      altBoundary: !0
    }), p = Ue(s, i), u = Ue(c, a, r), d = Ye(p), C = Ye(u);
    t.modifiersData[n] = {
      referenceClippingOffsets: p,
      popperEscapeOffsets: u,
      isReferenceHidden: d,
      hasPopperEscaped: C
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": d,
      "data-popper-escaped": C
    });
  }
  const ui = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: di
  };
  function fi(e, t, n) {
    var i = K(e), a = [$, _].indexOf(i) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, s = r[0], c = r[1];
    return s = s || 0, c = (c || 0) * a, [$, U].indexOf(i) >= 0 ? {
      x: c,
      y: s
    } : {
      x: s,
      y: c
    };
  }
  function mi(e) {
    var t = e.state, n = e.options, i = e.name, a = n.offset, r = a === void 0 ? [0, 0] : a, s = Re.reduce(function(d, C) {
      return d[C] = fi(C, t.rects, r), d;
    }, {}), c = s[t.placement], p = c.x, u = c.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += p, t.modifiersData.popperOffsets.y += u), t.modifiersData[i] = s;
  }
  const hi = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: mi
  };
  function gi(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = Ne({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const vi = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: gi,
    data: {}
  };
  function bi(e) {
    return e === "x" ? "y" : "x";
  }
  function yi(e) {
    var t = e.state, n = e.options, i = e.name, a = n.mainAxis, r = a === void 0 ? !0 : a, s = n.altAxis, c = s === void 0 ? !1 : s, p = n.boundary, u = n.rootBoundary, d = n.altBoundary, C = n.padding, k = n.tether, h = k === void 0 ? !0 : k, y = n.tetherOffset, v = y === void 0 ? 0 : y, g = jt(t, {
      boundary: p,
      rootBoundary: u,
      padding: C,
      altBoundary: d
    }), f = K(t.placement), x = St(t.placement), A = !x, o = ge(f), b = bi(o), m = t.modifiersData.popperOffsets, E = t.rects.reference, O = t.rects.popper, T = typeof v == "function" ? v(Object.assign({}, t.rects, {
      placement: t.placement
    })) : v, P = typeof T == "number" ? {
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
        var L, I = o === "y" ? _ : $, W = o === "y" ? N : U, j = o === "y" ? "height" : "width", z = m[o], B = z + g[I], J = z - g[W], tt = h ? -O[j] / 2 : 0, vt = x === xt ? E[j] : O[j], et = x === xt ? -O[j] : -E[j], bt = t.elements.arrow, ot = h && bt ? he(bt) : {
          width: 0,
          height: 0
        }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ze(), at = Z[I], Et = Z[W], rt = Bt(0, E[j], ot[j]), Mt = A ? E[j] / 2 - tt - rt - at - P.mainAxis : vt - rt - at - P.mainAxis, dt = A ? -E[j] / 2 + tt + rt + Et + P.mainAxis : et + rt + Et + P.mainAxis, Ot = t.elements.arrow && qt(t.elements.arrow), te = Ot ? o === "y" ? Ot.clientTop || 0 : Ot.clientLeft || 0 : 0, _t = (L = q == null ? void 0 : q[o]) != null ? L : 0, ee = z + Mt - _t - te, ne = z + dt - _t, $t = Bt(h ? Nt(B, ee) : B, z, h ? ht(J, ne) : J);
        m[o] = $t, R[o] = $t - z;
      }
      if (c) {
        var Ft, ie = o === "x" ? _ : $, oe = o === "x" ? N : U, st = m[b], ut = b === "y" ? "height" : "width", Vt = st + g[ie], yt = st - g[oe], Wt = [_, $].indexOf(f) !== -1, ae = (Ft = q == null ? void 0 : q[b]) != null ? Ft : 0, re = Wt ? Vt : st - E[ut] - O[ut] - ae + P.altAxis, se = Wt ? st + E[ut] + O[ut] - ae - P.altAxis : yt, ce = h && Wt ? Vn(re, st, se) : Bt(h ? re : Vt, st, h ? se : yt);
        m[b] = ce, R[b] = ce - st;
      }
      t.modifiersData[i] = R;
    }
  }
  const wi = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: yi,
    requiresIfExists: ["offset"]
  };
  function xi(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function ki(e) {
    return e === F(e) || !Y(e) ? ve(e) : xi(e);
  }
  function Ci(e) {
    var t = e.getBoundingClientRect(), n = kt(t.width) / e.offsetWidth || 1, i = kt(t.height) / e.offsetHeight || 1;
    return n !== 1 || i !== 1;
  }
  function Si(e, t, n) {
    n === void 0 && (n = !1);
    var i = Y(t), a = Y(t) && Ci(t), r = ct(t), s = Ct(e, a, n), c = {
      scrollLeft: 0,
      scrollTop: 0
    }, p = {
      x: 0,
      y: 0
    };
    return (i || !i && !n) && ((X(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    ye(r)) && (c = ki(t)), Y(t) ? (p = Ct(t, !0), p.x += t.clientLeft, p.y += t.clientTop) : r && (p.x = be(r))), {
      x: s.left + c.scrollLeft - p.x,
      y: s.top + c.scrollTop - p.y,
      width: s.width,
      height: s.height
    };
  }
  function Ai(e) {
    var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), i = [];
    e.forEach(function(r) {
      t.set(r.name, r);
    });
    function a(r) {
      n.add(r.name);
      var s = [].concat(r.requires || [], r.requiresIfExists || []);
      s.forEach(function(c) {
        if (!n.has(c)) {
          var p = t.get(c);
          p && a(p);
        }
      }), i.push(r);
    }
    return e.forEach(function(r) {
      n.has(r.name) || a(r);
    }), i;
  }
  function Ei(e) {
    var t = Ai(e);
    return zn.reduce(function(n, i) {
      return n.concat(t.filter(function(a) {
        return a.phase === i;
      }));
    }, []);
  }
  function Mi(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function Oi(e) {
    var t = e.reduce(function(n, i) {
      var a = n[i.name];
      return n[i.name] = a ? Object.assign({}, a, i, {
        options: Object.assign({}, a.options, i.options),
        data: Object.assign({}, a.data, i.data)
      }) : i, n;
    }, {});
    return Object.keys(t).map(function(n) {
      return t[n];
    });
  }
  var Ge = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Ze() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function(i) {
      return !(i && typeof i.getBoundingClientRect == "function");
    });
  }
  function Di(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, i = n === void 0 ? [] : n, a = t.defaultOptions, r = a === void 0 ? Ge : a;
    return function(c, p, u) {
      u === void 0 && (u = r);
      var d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Ge, r),
        modifiersData: {},
        elements: {
          reference: c,
          popper: p
        },
        attributes: {},
        styles: {}
      }, C = [], k = !1, h = {
        state: d,
        setOptions: function(f) {
          var x = typeof f == "function" ? f(d.options) : f;
          v(), d.options = Object.assign({}, r, d.options, x), d.scrollParents = {
            reference: mt(c) ? It(c) : c.contextElement ? It(c.contextElement) : [],
            popper: It(p)
          };
          var A = Ei(Oi([].concat(i, d.options.modifiers)));
          return d.orderedModifiers = A.filter(function(o) {
            return o.enabled;
          }), y(), h.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function() {
          if (!k) {
            var f = d.elements, x = f.reference, A = f.popper;
            if (Ze(x, A)) {
              d.rects = {
                reference: Si(x, qt(A), d.options.strategy === "fixed"),
                popper: he(A)
              }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(P) {
                return d.modifiersData[P.name] = Object.assign({}, P.data);
              });
              for (var o = 0; o < d.orderedModifiers.length; o++) {
                if (d.reset === !0) {
                  d.reset = !1, o = -1;
                  continue;
                }
                var b = d.orderedModifiers[o], m = b.fn, E = b.options, O = E === void 0 ? {} : E, T = b.name;
                typeof m == "function" && (d = m({
                  state: d,
                  options: O,
                  name: T,
                  instance: h
                }) || d);
              }
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: Mi(function() {
          return new Promise(function(g) {
            h.forceUpdate(), g(d);
          });
        }),
        destroy: function() {
          v(), k = !0;
        }
      };
      if (!Ze(c, p))
        return h;
      h.setOptions(u).then(function(g) {
        !k && u.onFirstUpdate && u.onFirstUpdate(g);
      });
      function y() {
        d.orderedModifiers.forEach(function(g) {
          var f = g.name, x = g.options, A = x === void 0 ? {} : x, o = g.effect;
          if (typeof o == "function") {
            var b = o({
              state: d,
              name: f,
              instance: h,
              options: A
            }), m = function() {
            };
            C.push(b || m);
          }
        });
      }
      function v() {
        C.forEach(function(g) {
          return g();
        }), C = [];
      }
      return h;
    };
  }
  var Ti = [Jn, vi, Kn, qe, hi, li, wi, Yn, ui], Pi = /* @__PURE__ */ Di({
    defaultModifiers: Ti
  }), Li = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>', Ri = "tippy-box", Xe = "tippy-content", Ke = "tippy-backdrop", Qe = "tippy-arrow", Je = "tippy-svg-arrow", pt = {
    passive: !0,
    capture: !0
  }, tn = function() {
    return document.body;
  };
  function xe(e, t, n) {
    if (Array.isArray(e)) {
      var i = e[t];
      return i ?? (Array.isArray(n) ? n[t] : n);
    }
    return e;
  }
  function ke(e, t) {
    var n = {}.toString.call(e);
    return n.indexOf("[object") === 0 && n.indexOf(t + "]") > -1;
  }
  function en(e, t) {
    return typeof e == "function" ? e.apply(void 0, t) : e;
  }
  function nn(e, t) {
    if (t === 0)
      return e;
    var n;
    return function(i) {
      clearTimeout(n), n = setTimeout(function() {
        e(i);
      }, t);
    };
  }
  function on(e, t) {
    var n = Object.assign({}, e);
    return t.forEach(function(i) {
      delete n[i];
    }), n;
  }
  function qi(e) {
    return e.split(/\s+/).filter(Boolean);
  }
  function lt(e) {
    return [].concat(e);
  }
  function an(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  function Bi(e) {
    return e.filter(function(t, n) {
      return e.indexOf(t) === n;
    });
  }
  function rn(e) {
    return e.split("-")[0];
  }
  function At(e) {
    return [].slice.call(e);
  }
  function sn(e) {
    return Object.keys(e).reduce(function(t, n) {
      return e[n] !== void 0 && (t[n] = e[n]), t;
    }, {});
  }
  function gt() {
    return document.createElement("div");
  }
  function Zt(e) {
    return ["Element", "Fragment"].some(function(t) {
      return ke(e, t);
    });
  }
  function Ii(e) {
    return ke(e, "NodeList");
  }
  function Ce(e) {
    return ke(e, "MouseEvent");
  }
  function cn(e) {
    return !!(e && e._tippy && e._tippy.reference === e);
  }
  function ji(e) {
    return Zt(e) ? [e] : Ii(e) ? At(e) : Array.isArray(e) ? e : At(document.querySelectorAll(e));
  }
  function Se(e, t) {
    e.forEach(function(n) {
      n && (n.style.transitionDuration = t + "ms");
    });
  }
  function zt(e, t) {
    e.forEach(function(n) {
      n && n.setAttribute("data-state", t);
    });
  }
  function pn(e) {
    var t, n = lt(e), i = n[0];
    return i != null && (t = i.ownerDocument) != null && t.body ? i.ownerDocument : document;
  }
  function zi(e, t) {
    var n = t.clientX, i = t.clientY;
    return e.every(function(a) {
      var r = a.popperRect, s = a.popperState, c = a.props, p = c.interactiveBorder, u = rn(s.placement), d = s.modifiersData.offset;
      if (!d)
        return !0;
      var C = u === "bottom" ? d.top.y : 0, k = u === "top" ? d.bottom.y : 0, h = u === "right" ? d.left.x : 0, y = u === "left" ? d.right.x : 0, v = r.top - i + C > p, g = i - r.bottom - k > p, f = r.left - n + h > p, x = n - r.right - y > p;
      return v || g || f || x;
    });
  }
  function Ae(e, t, n) {
    var i = t + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function(a) {
      e[i](a, n);
    });
  }
  function ln(e, t) {
    for (var n = t; n; ) {
      var i;
      if (e.contains(n))
        return !0;
      n = n.getRootNode == null || (i = n.getRootNode()) == null ? void 0 : i.host;
    }
    return !1;
  }
  var Q = {
    isTouch: !1
  }, dn = 0;
  function Hi() {
    Q.isTouch || (Q.isTouch = !0, window.performance && document.addEventListener("mousemove", un));
  }
  function un() {
    var e = performance.now();
    e - dn < 20 && (Q.isTouch = !1, document.removeEventListener("mousemove", un)), dn = e;
  }
  function _i() {
    var e = document.activeElement;
    if (cn(e)) {
      var t = e._tippy;
      e.blur && !t.state.isVisible && e.blur();
    }
  }
  function $i() {
    document.addEventListener("touchstart", Hi, pt), window.addEventListener("blur", _i);
  }
  var Fi = typeof window < "u" && typeof document < "u", Vi = Fi ? (
    // @ts-ignore
    !!window.msCrypto
  ) : !1, Wi = {
    animateFill: !1,
    followCursor: !1,
    inlinePositioning: !1,
    sticky: !1
  }, Ni = {
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
    appendTo: tn,
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
  }, Wi, Ni), Ui = Object.keys(V), Yi = function(t) {
    var n = Object.keys(t);
    n.forEach(function(i) {
      V[i] = t[i];
    });
  };
  function fn(e) {
    var t = e.plugins || [], n = t.reduce(function(i, a) {
      var r = a.name, s = a.defaultValue;
      if (r) {
        var c;
        i[r] = e[r] !== void 0 ? e[r] : (c = V[r]) != null ? c : s;
      }
      return i;
    }, {});
    return Object.assign({}, e, n);
  }
  function Gi(e, t) {
    var n = t ? Object.keys(fn(Object.assign({}, V, {
      plugins: t
    }))) : Ui, i = n.reduce(function(a, r) {
      var s = (e.getAttribute("data-tippy-" + r) || "").trim();
      if (!s)
        return a;
      if (r === "content")
        a[r] = s;
      else
        try {
          a[r] = JSON.parse(s);
        } catch {
          a[r] = s;
        }
      return a;
    }, {});
    return i;
  }
  function mn(e, t) {
    var n = Object.assign({}, t, {
      content: en(t.content, [e])
    }, t.ignoreAttributes ? {} : Gi(e, t.plugins));
    return n.aria = Object.assign({}, V.aria, n.aria), n.aria = {
      expanded: n.aria.expanded === "auto" ? t.interactive : n.aria.expanded,
      content: n.aria.content === "auto" ? t.interactive ? null : "describedby" : n.aria.content
    }, n;
  }
  var Zi = function() {
    return "innerHTML";
  };
  function Ee(e, t) {
    e[Zi()] = t;
  }
  function hn(e) {
    var t = gt();
    return e === !0 ? t.className = Qe : (t.className = Je, Zt(e) ? t.appendChild(e) : Ee(t, e)), t;
  }
  function gn(e, t) {
    Zt(t.content) ? (Ee(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? Ee(e, t.content) : e.textContent = t.content);
  }
  function Xt(e) {
    var t = e.firstElementChild, n = At(t.children);
    return {
      box: t,
      content: n.find(function(i) {
        return i.classList.contains(Xe);
      }),
      arrow: n.find(function(i) {
        return i.classList.contains(Qe) || i.classList.contains(Je);
      }),
      backdrop: n.find(function(i) {
        return i.classList.contains(Ke);
      })
    };
  }
  function vn(e) {
    var t = gt(), n = gt();
    n.className = Ri, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
    var i = gt();
    i.className = Xe, i.setAttribute("data-state", "hidden"), gn(i, e.props), t.appendChild(n), n.appendChild(i), a(e.props, e.props);
    function a(r, s) {
      var c = Xt(t), p = c.box, u = c.content, d = c.arrow;
      s.theme ? p.setAttribute("data-theme", s.theme) : p.removeAttribute("data-theme"), typeof s.animation == "string" ? p.setAttribute("data-animation", s.animation) : p.removeAttribute("data-animation"), s.inertia ? p.setAttribute("data-inertia", "") : p.removeAttribute("data-inertia"), p.style.maxWidth = typeof s.maxWidth == "number" ? s.maxWidth + "px" : s.maxWidth, s.role ? p.setAttribute("role", s.role) : p.removeAttribute("role"), (r.content !== s.content || r.allowHTML !== s.allowHTML) && gn(u, e.props), s.arrow ? d ? r.arrow !== s.arrow && (p.removeChild(d), p.appendChild(hn(s.arrow))) : p.appendChild(hn(s.arrow)) : d && p.removeChild(d);
    }
    return {
      popper: t,
      onUpdate: a
    };
  }
  vn.$$tippy = !0;
  var Xi = 1, Kt = [], Qt = [];
  function Ki(e, t) {
    var n = mn(e, Object.assign({}, V, fn(sn(t)))), i, a, r, s = !1, c = !1, p = !1, u = !1, d, C, k, h = [], y = nn(ee, n.interactiveDebounce), v, g = Xi++, f = null, x = Bi(n.plugins), A = {
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
    }, o = {
      // properties
      id: g,
      reference: e,
      popper: gt(),
      popperInstance: f,
      props: n,
      state: A,
      plugins: x,
      // methods
      clearDelayTimeouts: re,
      setProps: se,
      setContent: ce,
      show: Eo,
      hide: Mo,
      hideWithInteractivity: Oo,
      enable: Wt,
      disable: ae,
      unmount: Do,
      destroy: To
    };
    if (!n.render)
      return o;
    var b = n.render(o), m = b.popper, E = b.onUpdate;
    m.setAttribute("data-tippy-root", ""), m.id = "tippy-" + o.id, o.popper = m, e._tippy = o, m._tippy = o;
    var O = x.map(function(l) {
      return l.fn(o);
    }), T = e.hasAttribute("aria-expanded");
    return Ot(), tt(), z(), B("onCreate", [o]), n.showOnCreate && Vt(), m.addEventListener("mouseenter", function() {
      o.props.interactive && o.state.isVisible && o.clearDelayTimeouts();
    }), m.addEventListener("mouseleave", function() {
      o.props.interactive && o.props.trigger.indexOf("mouseenter") >= 0 && I().addEventListener("mousemove", y);
    }), o;
    function P() {
      var l = o.props.touch;
      return Array.isArray(l) ? l : [l, 0];
    }
    function q() {
      return P()[0] === "hold";
    }
    function R() {
      var l;
      return !!((l = o.props.render) != null && l.$$tippy);
    }
    function L() {
      return v || e;
    }
    function I() {
      var l = L().parentNode;
      return l ? pn(l) : document;
    }
    function W() {
      return Xt(m);
    }
    function j(l) {
      return o.state.isMounted && !o.state.isVisible || Q.isTouch || d && d.type === "focus" ? 0 : xe(o.props.delay, l ? 0 : 1, V.delay);
    }
    function z(l) {
      l === void 0 && (l = !1), m.style.pointerEvents = o.props.interactive && !l ? "" : "none", m.style.zIndex = "" + o.props.zIndex;
    }
    function B(l, w, S) {
      if (S === void 0 && (S = !0), O.forEach(function(M) {
        M[l] && M[l].apply(M, w);
      }), S) {
        var D;
        (D = o.props)[l].apply(D, w);
      }
    }
    function J() {
      var l = o.props.aria;
      if (l.content) {
        var w = "aria-" + l.content, S = m.id, D = lt(o.props.triggerTarget || e);
        D.forEach(function(M) {
          var H = M.getAttribute(w);
          if (o.state.isVisible)
            M.setAttribute(w, H ? H + " " + S : S);
          else {
            var G = H && H.replace(S, "").trim();
            G ? M.setAttribute(w, G) : M.removeAttribute(w);
          }
        });
      }
    }
    function tt() {
      if (!(T || !o.props.aria.expanded)) {
        var l = lt(o.props.triggerTarget || e);
        l.forEach(function(w) {
          o.props.interactive ? w.setAttribute("aria-expanded", o.state.isVisible && w === L() ? "true" : "false") : w.removeAttribute("aria-expanded");
        });
      }
    }
    function vt() {
      I().removeEventListener("mousemove", y), Kt = Kt.filter(function(l) {
        return l !== y;
      });
    }
    function et(l) {
      if (!(Q.isTouch && (p || l.type === "mousedown"))) {
        var w = l.composedPath && l.composedPath()[0] || l.target;
        if (!(o.props.interactive && ln(m, w))) {
          if (lt(o.props.triggerTarget || e).some(function(S) {
            return ln(S, w);
          })) {
            if (Q.isTouch || o.state.isVisible && o.props.trigger.indexOf("click") >= 0)
              return;
          } else
            B("onClickOutside", [o, l]);
          o.props.hideOnClick === !0 && (o.clearDelayTimeouts(), o.hide(), c = !0, setTimeout(function() {
            c = !1;
          }), o.state.isMounted || at());
        }
      }
    }
    function bt() {
      p = !0;
    }
    function ot() {
      p = !1;
    }
    function Z() {
      var l = I();
      l.addEventListener("mousedown", et, !0), l.addEventListener("touchend", et, pt), l.addEventListener("touchstart", ot, pt), l.addEventListener("touchmove", bt, pt);
    }
    function at() {
      var l = I();
      l.removeEventListener("mousedown", et, !0), l.removeEventListener("touchend", et, pt), l.removeEventListener("touchstart", ot, pt), l.removeEventListener("touchmove", bt, pt);
    }
    function Et(l, w) {
      Mt(l, function() {
        !o.state.isVisible && m.parentNode && m.parentNode.contains(m) && w();
      });
    }
    function rt(l, w) {
      Mt(l, w);
    }
    function Mt(l, w) {
      var S = W().box;
      function D(M) {
        M.target === S && (Ae(S, "remove", D), w());
      }
      if (l === 0)
        return w();
      Ae(S, "remove", C), Ae(S, "add", D), C = D;
    }
    function dt(l, w, S) {
      S === void 0 && (S = !1);
      var D = lt(o.props.triggerTarget || e);
      D.forEach(function(M) {
        M.addEventListener(l, w, S), h.push({
          node: M,
          eventType: l,
          handler: w,
          options: S
        });
      });
    }
    function Ot() {
      q() && (dt("touchstart", _t, {
        passive: !0
      }), dt("touchend", ne, {
        passive: !0
      })), qi(o.props.trigger).forEach(function(l) {
        if (l !== "manual")
          switch (dt(l, _t), l) {
            case "mouseenter":
              dt("mouseleave", ne);
              break;
            case "focus":
              dt(Vi ? "focusout" : "blur", $t);
              break;
            case "focusin":
              dt("focusout", $t);
              break;
          }
      });
    }
    function te() {
      h.forEach(function(l) {
        var w = l.node, S = l.eventType, D = l.handler, M = l.options;
        w.removeEventListener(S, D, M);
      }), h = [];
    }
    function _t(l) {
      var w, S = !1;
      if (!(!o.state.isEnabled || Ft(l) || c)) {
        var D = ((w = d) == null ? void 0 : w.type) === "focus";
        d = l, v = l.currentTarget, tt(), !o.state.isVisible && Ce(l) && Kt.forEach(function(M) {
          return M(l);
        }), l.type === "click" && (o.props.trigger.indexOf("mouseenter") < 0 || s) && o.props.hideOnClick !== !1 && o.state.isVisible ? S = !0 : Vt(l), l.type === "click" && (s = !S), S && !D && yt(l);
      }
    }
    function ee(l) {
      var w = l.target, S = L().contains(w) || m.contains(w);
      if (!(l.type === "mousemove" && S)) {
        var D = ut().concat(m).map(function(M) {
          var H, G = M._tippy, Dt = (H = G.popperInstance) == null ? void 0 : H.state;
          return Dt ? {
            popperRect: M.getBoundingClientRect(),
            popperState: Dt,
            props: n
          } : null;
        }).filter(Boolean);
        zi(D, l) && (vt(), yt(l));
      }
    }
    function ne(l) {
      var w = Ft(l) || o.props.trigger.indexOf("click") >= 0 && s;
      if (!w) {
        if (o.props.interactive) {
          o.hideWithInteractivity(l);
          return;
        }
        yt(l);
      }
    }
    function $t(l) {
      o.props.trigger.indexOf("focusin") < 0 && l.target !== L() || o.props.interactive && l.relatedTarget && m.contains(l.relatedTarget) || yt(l);
    }
    function Ft(l) {
      return Q.isTouch ? q() !== l.type.indexOf("touch") >= 0 : !1;
    }
    function ie() {
      oe();
      var l = o.props, w = l.popperOptions, S = l.placement, D = l.offset, M = l.getReferenceClientRect, H = l.moveTransition, G = R() ? Xt(m).arrow : null, Dt = M ? {
        getBoundingClientRect: M,
        contextElement: M.contextElement || L()
      } : e, wn = {
        name: "$$tippy",
        enabled: !0,
        phase: "beforeWrite",
        requires: ["computeStyles"],
        fn: function(pe) {
          var Tt = pe.state;
          if (R()) {
            var Po = W(), De = Po.box;
            ["placement", "reference-hidden", "escaped"].forEach(function(le) {
              le === "placement" ? De.setAttribute("data-placement", Tt.placement) : Tt.attributes.popper["data-popper-" + le] ? De.setAttribute("data-" + le, "") : De.removeAttribute("data-" + le);
            }), Tt.attributes.popper = {};
          }
        }
      }, wt = [{
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
      }, wn];
      R() && G && wt.push({
        name: "arrow",
        options: {
          element: G,
          padding: 3
        }
      }), wt.push.apply(wt, (w == null ? void 0 : w.modifiers) || []), o.popperInstance = Pi(Dt, m, Object.assign({}, w, {
        placement: S,
        onFirstUpdate: k,
        modifiers: wt
      }));
    }
    function oe() {
      o.popperInstance && (o.popperInstance.destroy(), o.popperInstance = null);
    }
    function st() {
      var l = o.props.appendTo, w, S = L();
      o.props.interactive && l === tn || l === "parent" ? w = S.parentNode : w = en(l, [S]), w.contains(m) || w.appendChild(m), o.state.isMounted = !0, ie();
    }
    function ut() {
      return At(m.querySelectorAll("[data-tippy-root]"));
    }
    function Vt(l) {
      o.clearDelayTimeouts(), l && B("onTrigger", [o, l]), Z();
      var w = j(!0), S = P(), D = S[0], M = S[1];
      Q.isTouch && D === "hold" && M && (w = M), w ? i = setTimeout(function() {
        o.show();
      }, w) : o.show();
    }
    function yt(l) {
      if (o.clearDelayTimeouts(), B("onUntrigger", [o, l]), !o.state.isVisible) {
        at();
        return;
      }
      if (!(o.props.trigger.indexOf("mouseenter") >= 0 && o.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(l.type) >= 0 && s)) {
        var w = j(!1);
        w ? a = setTimeout(function() {
          o.state.isVisible && o.hide();
        }, w) : r = requestAnimationFrame(function() {
          o.hide();
        });
      }
    }
    function Wt() {
      o.state.isEnabled = !0;
    }
    function ae() {
      o.hide(), o.state.isEnabled = !1;
    }
    function re() {
      clearTimeout(i), clearTimeout(a), cancelAnimationFrame(r);
    }
    function se(l) {
      if (!o.state.isDestroyed) {
        B("onBeforeUpdate", [o, l]), te();
        var w = o.props, S = mn(e, Object.assign({}, w, sn(l), {
          ignoreAttributes: !0
        }));
        o.props = S, Ot(), w.interactiveDebounce !== S.interactiveDebounce && (vt(), y = nn(ee, S.interactiveDebounce)), w.triggerTarget && !S.triggerTarget ? lt(w.triggerTarget).forEach(function(D) {
          D.removeAttribute("aria-expanded");
        }) : S.triggerTarget && e.removeAttribute("aria-expanded"), tt(), z(), E && E(w, S), o.popperInstance && (ie(), ut().forEach(function(D) {
          requestAnimationFrame(D._tippy.popperInstance.forceUpdate);
        })), B("onAfterUpdate", [o, l]);
      }
    }
    function ce(l) {
      o.setProps({
        content: l
      });
    }
    function Eo() {
      var l = o.state.isVisible, w = o.state.isDestroyed, S = !o.state.isEnabled, D = Q.isTouch && !o.props.touch, M = xe(o.props.duration, 0, V.duration);
      if (!(l || w || S || D) && !L().hasAttribute("disabled") && (B("onShow", [o], !1), o.props.onShow(o) !== !1)) {
        if (o.state.isVisible = !0, R() && (m.style.visibility = "visible"), z(), Z(), o.state.isMounted || (m.style.transition = "none"), R()) {
          var H = W(), G = H.box, Dt = H.content;
          Se([G, Dt], 0);
        }
        k = function() {
          var wt;
          if (!(!o.state.isVisible || u)) {
            if (u = !0, m.offsetHeight, m.style.transition = o.props.moveTransition, R() && o.props.animation) {
              var Oe = W(), pe = Oe.box, Tt = Oe.content;
              Se([pe, Tt], M), zt([pe, Tt], "visible");
            }
            J(), tt(), an(Qt, o), (wt = o.popperInstance) == null || wt.forceUpdate(), B("onMount", [o]), o.props.animation && R() && rt(M, function() {
              o.state.isShown = !0, B("onShown", [o]);
            });
          }
        }, st();
      }
    }
    function Mo() {
      var l = !o.state.isVisible, w = o.state.isDestroyed, S = !o.state.isEnabled, D = xe(o.props.duration, 1, V.duration);
      if (!(l || w || S) && (B("onHide", [o], !1), o.props.onHide(o) !== !1)) {
        if (o.state.isVisible = !1, o.state.isShown = !1, u = !1, s = !1, R() && (m.style.visibility = "hidden"), vt(), at(), z(!0), R()) {
          var M = W(), H = M.box, G = M.content;
          o.props.animation && (Se([H, G], D), zt([H, G], "hidden"));
        }
        J(), tt(), o.props.animation ? R() && Et(D, o.unmount) : o.unmount();
      }
    }
    function Oo(l) {
      I().addEventListener("mousemove", y), an(Kt, y), y(l);
    }
    function Do() {
      o.state.isVisible && o.hide(), o.state.isMounted && (oe(), ut().forEach(function(l) {
        l._tippy.unmount();
      }), m.parentNode && m.parentNode.removeChild(m), Qt = Qt.filter(function(l) {
        return l !== o;
      }), o.state.isMounted = !1, B("onHidden", [o]));
    }
    function To() {
      o.state.isDestroyed || (o.clearDelayTimeouts(), o.unmount(), te(), delete e._tippy, o.state.isDestroyed = !0, B("onDestroy", [o]));
    }
  }
  function it(e, t) {
    t === void 0 && (t = {});
    var n = V.plugins.concat(t.plugins || []);
    $i();
    var i = Object.assign({}, t, {
      plugins: n
    }), a = ji(e), r = a.reduce(function(s, c) {
      var p = c && Ki(c, i);
      return p && s.push(p), s;
    }, []);
    return Zt(e) ? r[0] : r;
  }
  it.defaultProps = V, it.setDefaultProps = Yi, it.currentInput = Q;
  var Qi = function(t) {
    var n = t === void 0 ? {} : t, i = n.exclude, a = n.duration;
    Qt.forEach(function(r) {
      var s = !1;
      if (i && (s = cn(i) ? r.reference === i : r.popper === i.popper), !s) {
        var c = r.props.duration;
        r.setProps({
          duration: a
        }), r.hide(), r.state.isDestroyed || r.setProps({
          duration: c
        });
      }
    });
  }, Ji = Object.assign({}, qe, {
    effect: function(t) {
      var n = t.state, i = {
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
      Object.assign(n.elements.popper.style, i.popper), n.styles = i, n.elements.arrow && Object.assign(n.elements.arrow.style, i.arrow);
    }
  }), to = function(t, n) {
    var i;
    n === void 0 && (n = {});
    var a = t, r = [], s = [], c, p = n.overrides, u = [], d = !1;
    function C() {
      s = a.map(function(o) {
        return lt(o.props.triggerTarget || o.reference);
      }).reduce(function(o, b) {
        return o.concat(b);
      }, []);
    }
    function k() {
      r = a.map(function(o) {
        return o.reference;
      });
    }
    function h(o) {
      a.forEach(function(b) {
        o ? b.enable() : b.disable();
      });
    }
    function y(o) {
      return a.map(function(b) {
        var m = b.setProps;
        return b.setProps = function(E) {
          m(E), b.reference === c && o.setProps(E);
        }, function() {
          b.setProps = m;
        };
      });
    }
    function v(o, b) {
      var m = s.indexOf(b);
      if (b !== c) {
        c = b;
        var E = (p || []).concat("content").reduce(function(O, T) {
          return O[T] = a[m].props[T], O;
        }, {});
        o.setProps(Object.assign({}, E, {
          getReferenceClientRect: typeof E.getReferenceClientRect == "function" ? E.getReferenceClientRect : function() {
            var O;
            return (O = r[m]) == null ? void 0 : O.getBoundingClientRect();
          }
        }));
      }
    }
    h(!1), k(), C();
    var g = {
      fn: function() {
        return {
          onDestroy: function() {
            h(!0);
          },
          onHidden: function() {
            c = null;
          },
          onClickOutside: function(m) {
            m.props.showOnCreate && !d && (d = !0, c = null);
          },
          onShow: function(m) {
            m.props.showOnCreate && !d && (d = !0, v(m, r[0]));
          },
          onTrigger: function(m, E) {
            v(m, E.currentTarget);
          }
        };
      }
    }, f = it(gt(), Object.assign({}, on(n, ["overrides"]), {
      plugins: [g].concat(n.plugins || []),
      triggerTarget: s,
      popperOptions: Object.assign({}, n.popperOptions, {
        modifiers: [].concat(((i = n.popperOptions) == null ? void 0 : i.modifiers) || [], [Ji])
      })
    })), x = f.show;
    f.show = function(o) {
      if (x(), !c && o == null)
        return v(f, r[0]);
      if (!(c && o == null)) {
        if (typeof o == "number")
          return r[o] && v(f, r[o]);
        if (a.indexOf(o) >= 0) {
          var b = o.reference;
          return v(f, b);
        }
        if (r.indexOf(o) >= 0)
          return v(f, o);
      }
    }, f.showNext = function() {
      var o = r[0];
      if (!c)
        return f.show(0);
      var b = r.indexOf(c);
      f.show(r[b + 1] || o);
    }, f.showPrevious = function() {
      var o = r[r.length - 1];
      if (!c)
        return f.show(o);
      var b = r.indexOf(c), m = r[b - 1] || o;
      f.show(m);
    };
    var A = f.setProps;
    return f.setProps = function(o) {
      p = o.overrides || p, A(o);
    }, f.setInstances = function(o) {
      h(!0), u.forEach(function(b) {
        return b();
      }), a = o, h(!1), k(), C(), u = y(f), f.setProps({
        triggerTarget: s
      });
    }, u = y(f), f;
  }, eo = {
    mouseover: "mouseenter",
    focusin: "focus",
    click: "click"
  };
  function no(e, t) {
    var n = [], i = [], a = !1, r = t.target, s = on(t, ["target"]), c = Object.assign({}, s, {
      trigger: "manual",
      touch: !1
    }), p = Object.assign({
      touch: V.touch
    }, s, {
      showOnCreate: !0
    }), u = it(e, c), d = lt(u);
    function C(g) {
      if (!(!g.target || a)) {
        var f = g.target.closest(r);
        if (f) {
          var x = f.getAttribute("data-tippy-trigger") || t.trigger || V.trigger;
          if (!f._tippy && !(g.type === "touchstart" && typeof p.touch == "boolean") && !(g.type !== "touchstart" && x.indexOf(eo[g.type]) < 0)) {
            var A = it(f, p);
            A && (i = i.concat(A));
          }
        }
      }
    }
    function k(g, f, x, A) {
      A === void 0 && (A = !1), g.addEventListener(f, x, A), n.push({
        node: g,
        eventType: f,
        handler: x,
        options: A
      });
    }
    function h(g) {
      var f = g.reference;
      k(f, "touchstart", C, pt), k(f, "mouseover", C), k(f, "focusin", C), k(f, "click", C);
    }
    function y() {
      n.forEach(function(g) {
        var f = g.node, x = g.eventType, A = g.handler, o = g.options;
        f.removeEventListener(x, A, o);
      }), n = [];
    }
    function v(g) {
      var f = g.destroy, x = g.enable, A = g.disable;
      g.destroy = function(o) {
        o === void 0 && (o = !0), o && i.forEach(function(b) {
          b.destroy();
        }), i = [], y(), f();
      }, g.enable = function() {
        x(), i.forEach(function(o) {
          return o.enable();
        }), a = !1;
      }, g.disable = function() {
        A(), i.forEach(function(o) {
          return o.disable();
        }), a = !0;
      }, h(g);
    }
    return d.forEach(v), u;
  }
  var io = {
    name: "animateFill",
    defaultValue: !1,
    fn: function(t) {
      var n;
      if (!((n = t.props.render) != null && n.$$tippy))
        return {};
      var i = Xt(t.popper), a = i.box, r = i.content, s = t.props.animateFill ? oo() : null;
      return {
        onCreate: function() {
          s && (a.insertBefore(s, a.firstElementChild), a.setAttribute("data-animatefill", ""), a.style.overflow = "hidden", t.setProps({
            arrow: !1,
            animation: "shift-away"
          }));
        },
        onMount: function() {
          if (s) {
            var p = a.style.transitionDuration, u = Number(p.replace("ms", ""));
            r.style.transitionDelay = Math.round(u / 10) + "ms", s.style.transitionDuration = p, zt([s], "visible");
          }
        },
        onShow: function() {
          s && (s.style.transitionDuration = "0ms");
        },
        onHide: function() {
          s && zt([s], "hidden");
        }
      };
    }
  };
  function oo() {
    var e = gt();
    return e.className = Ke, zt([e], "hidden"), e;
  }
  var Me = {
    clientX: 0,
    clientY: 0
  }, Jt = [];
  function bn(e) {
    var t = e.clientX, n = e.clientY;
    Me = {
      clientX: t,
      clientY: n
    };
  }
  function ao(e) {
    e.addEventListener("mousemove", bn);
  }
  function ro(e) {
    e.removeEventListener("mousemove", bn);
  }
  var so = {
    name: "followCursor",
    defaultValue: !1,
    fn: function(t) {
      var n = t.reference, i = pn(t.props.triggerTarget || n), a = !1, r = !1, s = !0, c = t.props;
      function p() {
        return t.props.followCursor === "initial" && t.state.isVisible;
      }
      function u() {
        i.addEventListener("mousemove", k);
      }
      function d() {
        i.removeEventListener("mousemove", k);
      }
      function C() {
        a = !0, t.setProps({
          getReferenceClientRect: null
        }), a = !1;
      }
      function k(v) {
        var g = v.target ? n.contains(v.target) : !0, f = t.props.followCursor, x = v.clientX, A = v.clientY, o = n.getBoundingClientRect(), b = x - o.left, m = A - o.top;
        (g || !t.props.interactive) && t.setProps({
          // @ts-ignore - unneeded DOMRect properties
          getReferenceClientRect: function() {
            var O = n.getBoundingClientRect(), T = x, P = A;
            f === "initial" && (T = O.left + b, P = O.top + m);
            var q = f === "horizontal" ? O.top : P, R = f === "vertical" ? O.right : T, L = f === "horizontal" ? O.bottom : P, I = f === "vertical" ? O.left : T;
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
      function h() {
        t.props.followCursor && (Jt.push({
          instance: t,
          doc: i
        }), ao(i));
      }
      function y() {
        Jt = Jt.filter(function(v) {
          return v.instance !== t;
        }), Jt.filter(function(v) {
          return v.doc === i;
        }).length === 0 && ro(i);
      }
      return {
        onCreate: h,
        onDestroy: y,
        onBeforeUpdate: function() {
          c = t.props;
        },
        onAfterUpdate: function(g, f) {
          var x = f.followCursor;
          a || x !== void 0 && c.followCursor !== x && (y(), x ? (h(), t.state.isMounted && !r && !p() && u()) : (d(), C()));
        },
        onMount: function() {
          t.props.followCursor && !r && (s && (k(Me), s = !1), p() || u());
        },
        onTrigger: function(g, f) {
          Ce(f) && (Me = {
            clientX: f.clientX,
            clientY: f.clientY
          }), r = f.type === "focus";
        },
        onHidden: function() {
          t.props.followCursor && (C(), d(), s = !0);
        }
      };
    }
  };
  function co(e, t) {
    var n;
    return {
      popperOptions: Object.assign({}, e.popperOptions, {
        modifiers: [].concat((((n = e.popperOptions) == null ? void 0 : n.modifiers) || []).filter(function(i) {
          var a = i.name;
          return a !== t.name;
        }), [t])
      })
    };
  }
  var po = {
    name: "inlinePositioning",
    defaultValue: !1,
    fn: function(t) {
      var n = t.reference;
      function i() {
        return !!t.props.inlinePositioning;
      }
      var a, r = -1, s = !1, c = [], p = {
        name: "tippyInlinePositioning",
        enabled: !0,
        phase: "afterWrite",
        fn: function(h) {
          var y = h.state;
          i() && (c.indexOf(y.placement) !== -1 && (c = []), a !== y.placement && c.indexOf(y.placement) === -1 && (c.push(y.placement), t.setProps({
            // @ts-ignore - unneeded DOMRect properties
            getReferenceClientRect: function() {
              return u(y.placement);
            }
          })), a = y.placement);
        }
      };
      function u(k) {
        return lo(rn(k), n.getBoundingClientRect(), At(n.getClientRects()), r);
      }
      function d(k) {
        s = !0, t.setProps(k), s = !1;
      }
      function C() {
        s || d(co(t.props, p));
      }
      return {
        onCreate: C,
        onAfterUpdate: C,
        onTrigger: function(h, y) {
          if (Ce(y)) {
            var v = At(t.reference.getClientRects()), g = v.find(function(x) {
              return x.left - 2 <= y.clientX && x.right + 2 >= y.clientX && x.top - 2 <= y.clientY && x.bottom + 2 >= y.clientY;
            }), f = v.indexOf(g);
            r = f > -1 ? f : r;
          }
        },
        onHidden: function() {
          r = -1;
        }
      };
    }
  };
  function lo(e, t, n, i) {
    if (n.length < 2 || e === null)
      return t;
    if (n.length === 2 && i >= 0 && n[0].left > n[1].right)
      return n[i] || t;
    switch (e) {
      case "top":
      case "bottom": {
        var a = n[0], r = n[n.length - 1], s = e === "top", c = a.top, p = r.bottom, u = s ? a.left : r.left, d = s ? a.right : r.right, C = d - u, k = p - c;
        return {
          top: c,
          bottom: p,
          left: u,
          right: d,
          width: C,
          height: k
        };
      }
      case "left":
      case "right": {
        var h = Math.min.apply(Math, n.map(function(m) {
          return m.left;
        })), y = Math.max.apply(Math, n.map(function(m) {
          return m.right;
        })), v = n.filter(function(m) {
          return e === "left" ? m.left === h : m.right === y;
        }), g = v[0].top, f = v[v.length - 1].bottom, x = h, A = y, o = A - x, b = f - g;
        return {
          top: g,
          bottom: f,
          left: x,
          right: A,
          width: o,
          height: b
        };
      }
      default:
        return t;
    }
  }
  var uo = {
    name: "sticky",
    defaultValue: !1,
    fn: function(t) {
      var n = t.reference, i = t.popper;
      function a() {
        return t.popperInstance ? t.popperInstance.state.elements.reference : n;
      }
      function r(u) {
        return t.props.sticky === !0 || t.props.sticky === u;
      }
      var s = null, c = null;
      function p() {
        var u = r("reference") ? a().getBoundingClientRect() : null, d = r("popper") ? i.getBoundingClientRect() : null;
        (u && yn(s, u) || d && yn(c, d)) && t.popperInstance && t.popperInstance.update(), s = u, c = d, t.state.isMounted && requestAnimationFrame(p);
      }
      return {
        onMount: function() {
          t.props.sticky && p();
        }
      };
    }
  };
  function yn(e, t) {
    return e && t ? e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom || e.left !== t.left : !0;
  }
  it.setDefaultProps({
    render: vn
  });
  const fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    animateFill: io,
    createSingleton: to,
    default: it,
    delegate: no,
    followCursor: so,
    hideAll: Qi,
    inlinePositioning: po,
    roundArrow: Li,
    sticky: uo
  }, Symbol.toStringTag, { value: "Module" })), Ht = ({
    eventCategory: e,
    eventAction: t,
    eventLabel: n
  }) => {
    const i = {
      eventCategory: e,
      eventAction: t,
      eventLabel: n
    }, a = {
      event: "crs-setapp",
      ...i,
      eventLabel2: "",
      //cd8
      eventValue: "",
      eventNonInteraction: !0,
      intercomLoaded: !0
    };
    window.dataLayer.push(a), Te("Data pushed to dataLayer", "info"), console.table(i);
  }, mo = (e, t, n, i = 1e3, a = 0.5) => {
    let r, s;
    r = new IntersectionObserver(
      function(c) {
        c[0].isIntersecting === !0 ? s = setTimeout(() => {
          Ht({
            eventCategory: t,
            eventAction: "View",
            eventLabel: n
          }), r.disconnect();
        }, i) : (Te("Element is not fully visible", "warn"), clearTimeout(s));
      },
      { threshold: [a] }
    );
    {
      const c = document.querySelector(e);
      c && r.observe(c);
    }
  }, ho = it || fo;
  class go {
    constructor() {
      this.init();
    }
    init() {
      this.render(), this.addSmoothScrolling(), this.addTooltipByHover(), this.addStyles(), this.events();
    }
    async render() {
      const t = await ft("section.header");
      if (!t)
        throw new Error("Target element not found for Apps Section");
      if (de == null) return;
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
      return t.map((n) => de.find((i) => i.name === n)).filter((n) => n !== void 0).map(
        (n) => (
          /* HTML */
          `<div
          class="crs-block-app"
          data-app-name="${n.name}"
        >
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
        n.addEventListener("click", (i) => {
          var r;
          const a = i.currentTarget;
          (r = document.querySelector(".header__cta-button")) == null || r.click(), Ht({
            eventCategory: a.getAttribute("data-block-title") || "",
            eventAction: "Click",
            eventLabel: a.getAttribute("data-title") || ""
          });
        });
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = Cn, document.head.append(t);
    }
    addSmoothScrolling() {
      document.addEventListener("click", (t) => {
        const i = t.target.closest('.crs-apps-nav a[href^="#"]');
        if (i) {
          t.preventDefault(), Ht({
            eventCategory: "What do you want to start with today?",
            eventAction: "Click",
            eventLabel: i.getAttribute("data-title") || ""
          });
          const a = i.getAttribute("href");
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
    async addTooltipByHover() {
      await ft(".crs-block-app");
      const t = document.querySelectorAll(".crs-block-app");
      if (!t) {
        console.error("Apps blocks container not found");
        return;
      }
      let n;
      const i = new An();
      let a = null;
      t.forEach((r) => {
        let s = null;
        const c = (p, u = 2e3) => {
          const d = r.querySelector(".crs-block-app-name");
          if (!d) return;
          const C = En.find(
            (h) => h.title.includes(d.textContent || "")
          );
          if (!C) {
            console.warn(
              "No tooltip variant found for app:",
              d.textContent
            );
            return;
          }
          const k = p.currentTarget;
          s = ho(k, {
            content: i.returnHtml(C),
            allowHTML: !0,
            arrow: !1,
            interactive: !0,
            maxWidth: "none",
            theme: "light",
            placement: "right-start",
            boundary: "viewport",
            delay: [u, 1e3],
            // No delay to appear, 1 second delay to disappear
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
            onShow(h) {
              var f;
              a && a !== s && (a == null || a.destroy(), a == null || a.hide(), a = null), a = h;
              const y = (f = h.popper.querySelector("h3")) == null ? void 0 : f.textContent, v = h.popper.querySelector(".btn-download"), g = h.popper.querySelector(".os-popover-close");
              n = new AbortController(), v == null || v.addEventListener(
                "click",
                () => {
                  h.hide(), setTimeout(() => {
                    var x;
                    (x = document.querySelector(".header__cta-button")) == null || x.click(), Ht({
                      eventCategory: y || "",
                      eventAction: "Click",
                      eventLabel: "Try free for 7 days"
                    });
                  }, 200);
                },
                {
                  signal: n.signal
                }
              ), g == null || g.addEventListener(
                "click",
                () => {
                  h.hide();
                },
                {
                  signal: n.signal
                }
              ), Ht({
                eventCategory: y || "",
                eventAction: "view",
                eventLabel: "Popup after hover"
              });
            },
            onHide(h) {
              n && n.abort(), a === h && (a = null);
            },
            onDestroy(h) {
              s === h && (s = null), a === h && (a = null);
            }
          });
        };
        r.addEventListener("click", (p) => c(p, 0)), r.addEventListener("mouseenter", (p) => c(p));
      });
    }
  }
  const vo = `.crs-achievs {
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
  class bo {
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
      t.textContent = vo, document.head.appendChild(t);
    }
  }
  const yo = "https://conversionrate-store.github.io/a-b_images/setapp/", wo = `.site-navigation__bar {
  background: #1a1a1d;
}

section.header {
  padding-top: 0 !important;
}

/* .eney-promo-banner, */
section.header .header__badge,
section.header .header__description {
  display: none;
}

.header__apps-image {
  margin-top: 113px;
  margin-bottom: -60px;
  width: 100%;
  height: max-content;
}

@media (max-width: 992px) {
  .header__apps-image {
    margin-top: 90px;
  }
}


@media (max-width: 768px) {
  .header__apps-image {
    margin-top: 165px;
    
  }
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
  class xo {
    constructor() {
      this.init();
    }
    init() {
      this.addAppsImage(), this.changeTitle(), this.addComment(), this.addAchievs(), this.addStyles();
    }
    async addAppsImage() {
      const t = `
      <div class="header__apps-image"><img src="${yo}/apps.webp" alt="Apps Image"></div>`, n = await ft(
        "section.header .header__logo"
      );
      if (n)
        n.insertAdjacentHTML("beforebegin", t);
      else
        throw new Error("Target element not found for Apps Image");
    }
    async changeTitle() {
      const t = await ft("section.header h1.h1_hero");
      t && (t.textContent = "Get any task done on your Mac with one subscription");
    }
    async addComment() {
      const t = await ft(
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
    async addAchievs() {
      const t = await ft(
        "section.header .header__description"
      );
      t && new bo({
        container: t,
        position: "afterend"
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = wo, document.head.appendChild(t);
    }
  }
  const ko = `.crs-more {
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
  class Co {
    constructor() {
      this.init();
    }
    init() {
      this.render(), this.events(), this.addStyles();
    }
    async render() {
      const t = await ft("section.apps");
      if (!t)
        throw new Error("Target element not found for More Section");
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
      mo(".crs-more", "More with Setapp", "Benefits", 0);
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = ko, document.head.appendChild(t);
    }
  }
  const So = `.home {
  background: #1a1a1d;
}
`;
  xn({ name: "4th EXP on HP", dev: "OS" }), kn("exp_hp");
  class Ao {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.init();
    }
    init() {
      if (this.getAppData(), !(this.device === "mobile" || location.pathname !== "/"))
        try {
          new xo(), new go(), new Co(), this.addStyles();
        } catch (t) {
          console.error("Error initializing sections:", t);
        }
    }
    getAppData() {
      const t = document.querySelectorAll("app-details");
      Array.from(t).map((n) => {
        const i = n.getAttribute("name") || "", a = n.getAttribute("iconsrc") || "", r = n.getAttribute("description") || "", s = n.getAttribute("url") || "", c = n.getAttribute("platforms") || "", p = n.getAttribute("rating") || "";
        return {
          name: i,
          icon: a,
          description: r,
          url: s,
          platforms: c,
          rating: p
        };
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = So, document.head.appendChild(t);
    }
  }
  new Ao();
})();
