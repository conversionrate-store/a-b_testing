(function() {
  "use strict";
  const n = ({ name: s, dev: t }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, c = (s) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", s, "variant_1"));
    }, 1e3);
  }, r = `section.apps {
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
  scroll-margin-top: 80px;;
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
`, i = [
    {
      name: "Supercharge",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/742/42581/icon-1747027558-6821866668cc5.png",
      description: "Supercharge your Mac",
      url: "https://setapp.com/apps/supercharge",
      platforms: "Mac",
      rating: "100"
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
      name: "CleanShot",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/321/42718/icon-1748347773-6835ab7ddfd5d.png",
      description: "Take better screenshots and GIFs",
      url: "https://setapp.com/apps/cleanshot",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "TextSniper",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/431/40216/icon-1726504026-66e85c5a39ab4.png",
      description: "Extract text from visuals",
      url: "https://setapp.com/apps/textsniper",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Numi",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/186/7868/icon-1681314493-6436d2bdefebe.png",
      description: "Calculate and convert anything",
      url: "https://setapp.com/apps/numi",
      platforms: "Mac",
      rating: "99"
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
      name: "TablePlus",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/297/43846/icon-1749387295-6845881fbfe73.png",
      description: "Query, edit, and manage databases",
      url: "https://setapp.com/apps/tableplus",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "MindNode Classic",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/320/43815/icon-1749119470-684171ee26b61.png",
      description: "Mind map and brainstorm ideas",
      url: "https://setapp.com/apps/mindnode",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "Yoink",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/330/41335/icon-1734701336-67657118b1691.png",
      description: "Improve drag and drop",
      url: "https://setapp.com/apps/yoink",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "DevUtils",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/445/7963/icon-1682658507-644b54cbceb37.png",
      description: "Offline development toolkit",
      url: "https://setapp.com/apps/devutils.app",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Lungo",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/270/42370/icon-1744999749-68029545752bd.png",
      description: "Keep your Mac awake",
      url: "https://setapp.com/apps/lungo",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "PixelSnap",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/358/41224/icon-1734003597-675acb8d48307.png",
      description: "Measure anything on the screen",
      url: "https://setapp.com/apps/pixelsnap",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Dash",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/152/41998/icon-1741245191-67c94b07a2ef0.png",
      description: "Access API documentation offline",
      url: "https://setapp.com/apps/dash",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Dropzone",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/155/43866/icon-1749628562-68493692cbdc5.png",
      description: "Complete everyday tasks faster",
      url: "https://setapp.com/apps/dropzone",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "HazeOver",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/212/40224/icon-1726555425-66e9252168c8f.png",
      description: "Dim background windows",
      url: "https://setapp.com/apps/hazeover",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Proxyman",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/346/43836/icon-1749304623-6844452f7a6cb.png",
      description: "Debug your web traffic",
      url: "https://setapp.com/apps/proxyman",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "Soulver",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/551/42488/icon-1746240116-6815827493d38.png",
      description: "Convert and calculate in notes",
      url: "https://setapp.com/apps/soulver",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "SnippetsLab",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/125/41422/icon-1735798322-67762e322edcd.png",
      description: "Create a library of code snippets",
      url: "https://setapp.com/apps/snippetslab",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Dato",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/571/42735/icon-1748450972-68373e9c7d7fe.png",
      description: "Stay on top of your schedule",
      url: "https://setapp.com/apps/dato",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "In Your Face",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/591/42540/icon-1746702631-681c9127e40e9.png",
      description: "Get full-screen meeting alerts",
      url: "https://setapp.com/apps/in-your-face",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Image2icon",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/195/5841/icon-1648290647-623eeb57731c9.png",
      description: "Turn images into icons",
      url: "https://setapp.com/apps/image2icon",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "TextSoap",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/284/42084/icon-1742216932-67d81ee49773c.png",
      description: "Make sure your text has no errors",
      url: "https://setapp.com/apps/textsoap",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "IconJar",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/264/39405/icon-1719519131-667dc79b49105.png",
      description: "Organize your icon sets",
      url: "https://setapp.com/apps/iconjar",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "TaskPaper",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/213/40865/icon-1731425370-6733745a98d57.png",
      description: "Plain-text task management",
      url: "https://setapp.com/apps/taskpaper",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "SnapMotion",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/509/41065/icon-1732813283-6748a1e33ce65.png",
      description: "Capture snaps from your videos",
      url: "https://setapp.com/apps/snapmotion",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "Buildwatch",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/467/8800/icon-1695307195-650c55bbf4200.png",
      description: "Track your build time in Xcode",
      url: "https://setapp.com/apps/buildwatch",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Paste",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/98/43831/icon-1749237176-68433db804712.png",
      description: "Never lose anything you copy",
      url: "https://setapp.com/apps/paste",
      platforms: "Mac, iOS",
      rating: "98"
    },
    {
      name: "Downie",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/222/42776/icon-1748848008-683d4d8870860.png",
      description: "Download YouTube videos",
      url: "https://setapp.com/apps/downie",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Permute",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/219/42789/icon-1748930371-683e8f43d99aa.png",
      description: "Convert audio, images, and videos",
      url: "https://setapp.com/apps/permute",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "BetterTouchTool",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/295/42221/icon-1743429358-67ea9eee7ee73.png",
      description: "Save time with custom actions",
      url: "https://setapp.com/apps/bettertouchtool",
      platforms: "Mac",
      rating: "98"
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
      name: "Session",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/428/42692/icon-1747967217-682fdcf1a2474.png",
      description: "Work in short intervals",
      url: "https://setapp.com/apps/session",
      platforms: "Mac, iOS",
      rating: "98"
    },
    {
      name: "Timing",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/184/43855/icon-1749474823-6846de07658d9.png",
      description: "Track time you spend in each app",
      url: "https://setapp.com/apps/timing",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "One Switch",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/349/39552/icon-1720703221-668fd8f5909f4.png",
      description: "Access macOS features fast",
      url: "https://setapp.com/apps/one-switch",
      platforms: "Mac",
      rating: "98"
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
      name: "PDF Squeezer",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/188/41776/icon-1739380114-67acd5926e8ff.png",
      description: "Compress PDFs without quality loss",
      url: "https://setapp.com/apps/pdf-squeezer",
      platforms: "Mac, iOS",
      rating: "98"
    },
    {
      name: "Pulltube",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/371/43863/icon-1749589731-68489ee3bdf17.png",
      description: "Download and trim videos",
      url: "https://setapp.com/apps/pulltube",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Elmedia Player",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/178/41555/icon-1737151476-678ad3f48d49a.png",
      description: "Versatile media player",
      url: "https://setapp.com/apps/elmedia-player",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Default Folder X",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/396/42594/icon-1747113137-6822d4b146299.png",
      description: "Access recent and favorite files",
      url: "https://setapp.com/apps/default-folder-x",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "PopClip",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/159/41304/icon-1734542637-6763052df1bf2.png",
      description: "Use instant text actions",
      url: "https://setapp.com/apps/popclip",
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
      name: "Movist Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/344/41625/icon-1737718534-67937b06a660d.png",
      description: "Play all video formats",
      url: "https://setapp.com/apps/movist-pro",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "HoudahSpot",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/452/40620/icon-1729324375-67136557e86ed.png",
      description: "Find files faster",
      url: "https://setapp.com/apps/houdahspot",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Typeface",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/315/42539/icon-1746695766-681c765661a38.png",
      description: "Find the perfect font",
      url: "https://setapp.com/apps/typeface",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "TouchRetouch",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/298/8541/icon-1691068510-64cba85e8b087.png",
      description: "Remove objects from photos",
      url: "https://setapp.com/apps/touchretouch",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Gifox",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/197/42706/icon-1748180877-68331f8d91fc4.png",
      description: "Capture GIFs from your screen",
      url: "https://setapp.com/apps/gifox",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Hand Mirror",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/564/41679/icon-1738219390-679b1f7e17746.png",
      description: "Check Mac camera in a click",
      url: "https://setapp.com/apps/hand-mirror",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Unclutter",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/242/41940/icon-1740661852-67c0645c93b70.png",
      description: "Manage files, notes, clipboard",
      url: "https://setapp.com/apps/unclutter",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Bike",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/598/41510/icon-1736770872-678505384e5f5.png",
      description: "Outline ideas and projects",
      url: "https://setapp.com/apps/bike-outliner",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Antinote",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/757/42717/icon-1748322683-6835497b1e179.png",
      description: "Take notes and do calculations",
      url: "https://setapp.com/apps/antinote",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Base",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/135/9151/icon-1697967585-6534ede1ef890.png",
      description: "Simplify SQLite file management",
      url: "https://setapp.com/apps/base",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Goldie App",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/345/42291/icon-1744380820-67f92394afe8e.png",
      description: "Measure golden ratio in designs",
      url: "https://setapp.com/apps/goldie-app",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "CleanMyMac X",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/78/42681/icon-1747895078-682ec326c5805.png",
      description: "Tidy up your Mac",
      url: "https://setapp.com/apps/cleanmymac",
      platforms: "Mac",
      rating: "97"
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
      name: "Archiver",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/194/10197/icon-1711963165-660a7c1d7fdbc.png",
      description: "Compress and unarchive files",
      url: "https://setapp.com/apps/archiver",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "SideNotes",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/365/42288/icon-1744039822-67f3ef8e035dd.png",
      description: "Notes on the side of your screen",
      url: "https://setapp.com/apps/sidenotes",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "24 Hour Wallpaper",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/405/41207/icon-1733878798-6758e40ea005c.png",
      description: "100+ dynamic wallpapers",
      url: "https://setapp.com/apps/24-hour-wallpaper",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "NotePlan",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/280/42737/icon-1748462307-68376ae39b791.png",
      description: "One space for all your work",
      url: "https://setapp.com/apps/noteplan",
      platforms: "Mac, iOS",
      rating: "97"
    },
    {
      name: "OpenIn",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/459/41451/icon-1736125870-677b2daede071.png",
      description: "Open links in select browsers",
      url: "https://setapp.com/apps/openin",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Swish",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/403/41992/icon-1741196417-67c88c81798d1.png",
      description: "Set up quick trackpad actions",
      url: "https://setapp.com/apps/swish",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "TripMode",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/244/41564/icon-1737319715-678d6523e2898.png",
      description: "Save internet data",
      url: "https://setapp.com/apps/tripmode",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Pareto Security",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/496/42756/icon-1748647998-683a403ea24fa.png",
      description: "Check your security settings",
      url: "https://setapp.com/apps/pareto-security",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "SQLPro Studio",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/230/41517/icon-1736865184-678675a0afa1f.png",
      description: "Manage multiple DBMS",
      url: "https://setapp.com/apps/sqlpro-studio",
      platforms: "Mac, iOS",
      rating: "97"
    },
    {
      name: "WiFi Explorer",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/74/41442/icon-1735942774-67786276c8ca4.png",
      description: "Fix WiFi problems",
      url: "https://setapp.com/apps/wifi-explorer",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Magic Window Air",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/437/8979/icon-1696301083-651b801b55c0c.png",
      description: "Try aerial screen savers",
      url: "https://setapp.com/apps/magic-window-air",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Step Two",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/378/7227/icon-1671473505-63a0a9610bff6.png",
      description: "Simplify two-step authentication",
      url: "https://setapp.com/apps/step-two",
      platforms: "Mac, iOS",
      rating: "97"
    },
    {
      name: "Paletro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/465/41928/icon-1740573715-67bf0c13e78c0.png",
      description: "Access app menu commands",
      url: "https://setapp.com/apps/paletro",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Due",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/434/43829/icon-1749224796-68430d5cd57f9.png",
      description: "Receive persistent reminders",
      url: "https://setapp.com/apps/due",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "PhotoBulk",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/286/42242/icon-1743778095-67eff12f33d65.png",
      description: "Resize and watermark photos",
      url: "https://setapp.com/apps/photobulk",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Meta",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/389/7448/icon-1675335200-63db9620a3946.png",
      description: "Manage music libraries",
      url: "https://setapp.com/apps/meta",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Be Focused",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/173/42056/icon-1741873453-67d2e12deefa4.png",
      description: "Manage to-do lists with timers",
      url: "https://setapp.com/apps/be-focused",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Diarly",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/347/43860/icon-1749557700-684821c419182.png",
      description: "Create a private personal diary",
      url: "https://setapp.com/apps/diarly",
      platforms: "Mac, iOS",
      rating: "97"
    },
    {
      name: "SSH Config Editor",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/395/43809/icon-1749051292-6840679c82bf3.png",
      description: "Manage SSH client config files",
      url: "https://setapp.com/apps/ssh-config-editor",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Awesome Habits",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/616/42378/icon-1745096293-68040e655a3fe.png",
      description: "Build better habits",
      url: "https://setapp.com/apps/awesome-habits",
      platforms: "Mac, iOS",
      rating: "97"
    },
    {
      name: "Merlin Project Express",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/241/41668/icon-1738139017-6799e5893e6bc.png",
      description: "Manage large projects",
      url: "https://setapp.com/apps/merlin-project-express",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Hype",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/192/41603/icon-1737573990-67914666d5d5f.png",
      description: "Create animated HTML5 content",
      url: "https://setapp.com/apps/hype",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "BetterZip",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/245/7858/icon-1681236553-6435a249c1fd2.png",
      description: "Create and encrypt archives",
      url: "https://setapp.com/apps/betterzip",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "ForkLift",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/253/42746/icon-1748525039-68385fef5c0b1.png",
      description: "Manage files across servers",
      url: "https://setapp.com/apps/forklift",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "BusyCal",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/304/43841/icon-1749392085-68459ad5ecfbf.png",
      description: "Sync your tasks with calendar",
      url: "https://setapp.com/apps/busycal",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "AirBuddy",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/513/40120/icon-1726002236-66e0b43cd7afc.png",
      description: "Monitor your wireless devices",
      url: "https://setapp.com/apps/airbuddy",
      platforms: "Mac",
      rating: "96"
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
      name: "Mate Translate",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/248/9552/icon-1703223793-658521f1d6148.png",
      description: "Translate anything",
      url: "https://setapp.com/apps/mate-translate",
      platforms: "Mac",
      rating: "96"
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
      name: "Xnapper",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/549/9000/icon-1696394577-651ced51d24d2.png",
      description: "Create shareable screenshots",
      url: "https://setapp.com/apps/xnapper",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Hookmark",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/544/42451/icon-1745878864-680fff5052376.png",
      description: "Link files, webpages, PDFs",
      url: "https://setapp.com/apps/hookmark",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "KeyKey Typing Tutor",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/274/39421/icon-1720817328-669196b02ad52.png",
      description: "Boost your typing speed",
      url: "https://setapp.com/apps/keykey-typing-tutor",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "News Explorer",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/249/42312/icon-1744274352-67f783b0c27a5.png",
      description: "Create your perfect RSS feed",
      url: "https://setapp.com/apps/news-explorer",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Expressions",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/243/42471/icon-1746014049-68120f61e101a.png",
      description: "Speed up work with regex",
      url: "https://setapp.com/apps/expressions",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Receipts",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/351/41795/icon-1739276776-67ab41e871a94.png",
      description: "Collect documents digitally",
      url: "https://setapp.com/apps/receipts",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Whisk",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/463/8892/icon-1695310657-650c634147f17.png",
      description: "Code editor with live preview",
      url: "https://setapp.com/apps/whisk",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Usage",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/637/43818/icon-1749136158-6841b31ef3039.png",
      description: "Monitor device performance",
      url: "https://setapp.com/apps/usage",
      platforms: "Mac, iOS",
      rating: "96"
    },
    {
      name: "PhotosRevive",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/508/41064/icon-1732756775-6747c527cfab2.png",
      description: "Colorize your old photos",
      url: "https://setapp.com/apps/photosrevive",
      platforms: "Mac, iOS",
      rating: "96"
    },
    {
      name: "Godspeed",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/714/43822/icon-1749174965-68424ab54b3f5.png",
      description: "Manage tasks faster",
      url: "https://setapp.com/apps/godspeed",
      platforms: "Mac, iOS",
      rating: "96"
    },
    {
      name: "SQLPro for SQLite",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/333/42122/icon-1742478513-67dc1cb168fd3.png",
      description: "Control SQLite databases",
      url: "https://setapp.com/apps/sqlpro-for-sqlite",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Transloader",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/481/10253/icon-1712837431-6617d33756e3b.png",
      description: "Start downloads on Mac remotely",
      url: "https://setapp.com/apps/transloader",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Asset Catalog Creator Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/426/41835/icon-1739661896-67b1224841142.png",
      description: "Prepare icons and app assets",
      url: "https://setapp.com/apps/asset-catalog-creator-pro",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Studies",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/231/39891/icon-1723640492-66bcaaacaa482.png",
      description: "Try smart study notes",
      url: "https://setapp.com/apps/studies",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Flinto",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/419/10164/icon-1711471249-6602fa9155d9b.png",
      description: "Design interactive app prototypes",
      url: "https://setapp.com/apps/flinto",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "ScreenFloat",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/753/42658/icon-1747738138-682c5e1a49712.png",
      description: "Power up your screenshots",
      url: "https://setapp.com/apps/screenfloat",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Craft",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/554/42322/icon-1744394392-67f95898339a9.png",
      description: "Create and structure documents",
      url: "https://setapp.com/apps/craft",
      platforms: "Mac, iOS, Web",
      rating: "95"
    },
    {
      name: "Folx",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/202/42801/icon-1748963323-683f0ffbd0dc0.png",
      description: "Download videos and torrents",
      url: "https://setapp.com/apps/folx",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Forecast Bar",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/234/5651/icon-1678734015-640f72bf93fb1.png",
      description: "Receive weather alerts",
      url: "https://setapp.com/apps/forecast-bar",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Gitfox",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/385/41675/icon-1738172457-679a6829c6cd0.png",
      description: "Commit faster with superior diffs",
      url: "https://setapp.com/apps/gitfox",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "App Tamer",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/466/39811/icon-1722916151-66b19d375746f.png",
      description: "Reduce CPU usage",
      url: "https://setapp.com/apps/app-tamer",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Timemator",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/380/42266/icon-1743772162-67efda0297d7a.png",
      description: "Track productivity per project",
      url: "https://setapp.com/apps/timemator",
      platforms: "Mac, iOS",
      rating: "95"
    },
    {
      name: "Commander One",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/366/42052/icon-1741858073-67d2a5194d1f4.png",
      description: "Two-pane file manager",
      url: "https://setapp.com/apps/commander-one",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Keysmith",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/438/39289/icon-1718665165-6670bfcd18ac5.png",
      description: "Create a shortcut for any action",
      url: "https://setapp.com/apps/keysmith",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "BoltAI",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/626/42745/icon-1748503663-68380c6f619d4.png",
      description: "Write, code, learn with AI",
      url: "https://setapp.com/apps/boltai",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "ChronoSync Express",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/217/40765/icon-1730479186-67250452d2169.png",
      description: "Sync and back up folders",
      url: "https://setapp.com/apps/chronosync-express",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Presentify",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/401/42773/icon-1748820377-683ce1999ef93.png",
      description: "Give better presentations",
      url: "https://setapp.com/apps/presentify",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "NetSpot",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/223/41521/icon-1736870905-67868bf9ce735.png",
      description: "Find the best network connection",
      url: "https://setapp.com/apps/netspot",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Time Out",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/364/10078/icon-1710337184-65f1aca0acf44.png",
      description: "Remind yourself to take a break",
      url: "https://setapp.com/apps/time-out",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "start",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/377/42367/icon-1744970349-6802226d6784a.png",
      description: "Open any app faster",
      url: "https://setapp.com/apps/start",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Trickster",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/357/41461/icon-1736217057-677c91e120abd.png",
      description: "Quickly access recent files",
      url: "https://setapp.com/apps/trickster",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Euclid",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/435/8913/icon-1695837595-65146d9b44aa1.png",
      description: "Calculate with Excel formulas",
      url: "https://setapp.com/apps/euclid",
      platforms: "Mac, iOS",
      rating: "95"
    },
    {
      name: "Glyphs Mini",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/469/4408/icon-1618232817-607445f1711ef.png",
      description: "Edit and manage icon designs",
      url: "https://setapp.com/apps/glyphs-mini",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Paper",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/746/42597/icon-1749398986-6845b5ca795d9.png",
      description: "Write without distractions",
      url: "https://setapp.com/apps/paper",
      platforms: "Mac, iOS",
      rating: "95"
    },
    {
      name: "Novabench",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/605/42189/icon-1743118649-67e5e1394d007.png",
      description: "Evaluate computer performance",
      url: "https://setapp.com/apps/novabench",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Sip",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/232/42197/icon-1743177567-67e6c75f1698c.png",
      description: "Pick colors for your designs",
      url: "https://setapp.com/apps/sip",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "Wallpaper Wizard",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/269/1726/icon-1593690549-5efdc9b5cc2f0.png",
      description: "Choose from 25K wallpapers",
      url: "https://setapp.com/apps/wallpaper-wizard",
      platforms: "Mac",
      rating: "94"
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
      name: "Mockuuups Studio",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/373/10202/icon-1712050881-660bd2c1d13ba.png",
      description: "Generate mockups for all devices",
      url: "https://setapp.com/apps/mockuuups-studio",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "Marked",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/80/42026/icon-1741607738-67ced33aba53e.png",
      description: "Live Markdown preview",
      url: "https://setapp.com/apps/marked",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "Lofi Garden",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/506/7515/icon-1677325365-63f9f435a368b.png",
      description: "Play lofi music in a click",
      url: "https://setapp.com/apps/lofi-garden",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "ToothFairy",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/319/43816/icon-1749136211-6841b3535cf06.png",
      description: "Connect Bluetooth devices faster",
      url: "https://setapp.com/apps/toothfairy",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "MenubarX",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/538/42337/icon-1744644568-67fd29d8898ce.png",
      description: "Browse the web from menu bar",
      url: "https://setapp.com/apps/menubarx",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "iFlicks",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/229/5236/icon-1636875938-6190bea26ea8a.png",
      description: "Upload videos to iTunes",
      url: "https://setapp.com/apps/iflicks",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "Movie Explorer Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/335/10025/icon-1709829117-65e9ebfdd2714.png",
      description: "Curate your movie collection",
      url: "https://setapp.com/apps/movie-explorer-pro",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "GlueMotion",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/324/41063/icon-1732813247-6748a1bf4f1a8.png",
      description: "Turn photos into time lapses",
      url: "https://setapp.com/apps/gluemotion",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "PocketCAS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/355/40804/icon-1730880531-672b2413b44d4.png",
      description: "Solve advanced math equations",
      url: "https://setapp.com/apps/pocketcas",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "Gemini",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/79/9042/icon-1696867211-6524238b4f102.png",
      description: "Find and remove duplicates",
      url: "https://setapp.com/apps/gemini",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "BusyContacts",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/369/43840/icon-1749326776-68449bb851452.png",
      description: "Build your contact database",
      url: "https://setapp.com/apps/busycontacts",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Core Shell",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/339/40002/icon-1724861736-66cf4d28414e0.png",
      description: "Full-featured SSH terminal",
      url: "https://setapp.com/apps/core-shell",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "MarginNote",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/323/8222/icon-1748318556-6835395c4b07b.png",
      description: "Study more productively",
      url: "https://setapp.com/apps/marginnote",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Prizmo",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/160/41752/icon-1738766542-67a378ce29d98.png",
      description: "Scan and OCR any document",
      url: "https://setapp.com/apps/prizmo",
      platforms: "Mac, iOS",
      rating: "93"
    },
    {
      name: "2Do",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/68/42482/icon-1746151123-681426d399e36.png",
      description: "Schedule tasks and reminders",
      url: "https://setapp.com/apps/2do",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "GoodTask",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/206/42251/icon-1743656461-67ee160d23e22.png",
      description: "Sync to-dos with reminders",
      url: "https://setapp.com/apps/goodtask",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "WiFi Signal",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/596/42294/icon-1744164549-67f5d6c522359.png",
      description: "Monitor your Wi-Fi connection",
      url: "https://setapp.com/apps/wifi-signal",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Workspaces",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/268/42258/icon-1743703876-67eecf44145bb.png",
      description: "Set up your work in one click",
      url: "https://setapp.com/apps/workspaces",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Noizio",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/130/3569/icon-1604047179-5f9bd14bc431b.png",
      description: "Turn on ambient sounds to focus",
      url: "https://setapp.com/apps/noizio",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "MetaImage",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/356/41358/icon-1734915652-6768b644d8129.png",
      description: "Edit image metadata",
      url: "https://setapp.com/apps/metaimage",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Swift Publisher",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/95/41473/icon-1736331218-677e4fd2d30c5.png",
      description: "Self-publish books or booklets",
      url: "https://setapp.com/apps/swift-publisher",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Focused",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/134/9293/icon-1699654599-654eabc721744.png",
      description: "Focus on your writing",
      url: "https://setapp.com/apps/focused",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Pagico",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/70/42787/icon-1748923372-683e73ec92068.png",
      description: "Manage teams and projects",
      url: "https://setapp.com/apps/pagico",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "MarsEdit",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/343/42338/icon-1744655073-67fd52e16f243.png",
      description: "Create your text content offline",
      url: "https://setapp.com/apps/marsedit",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Clariti",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/754/43828/icon-1749224551-68430c678d16b.png",
      description: "Boost mental clarity with sound",
      url: "https://setapp.com/apps/clariti",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Cloud Outliner",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/174/42713/icon-1748249451-68342b6baac84.png",
      description: "Create visual outlines",
      url: "https://setapp.com/apps/cloud-outliner",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "XCOrganizer",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/407/8157/icon-1685704795-6479d05b0e326.png",
      description: "Organize Xcode projects",
      url: "https://setapp.com/apps/xcorganizer",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Mosaic",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/247/9106/icon-1698836080-65422e70e6dff.png",
      description: "Automatically organize windows",
      url: "https://setapp.com/apps/mosaic",
      platforms: "Mac",
      rating: "92"
    },
    {
      name: "Path Finder",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/362/42172/icon-1743009756-67e437dcb92b8.png",
      description: "Copy, delete, and sync files",
      url: "https://setapp.com/apps/path-finder",
      platforms: "Mac",
      rating: "92"
    },
    {
      name: "CloudMounter",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/289/42253/icon-1743678842-67ee6d7aeeda6.png",
      description: "Connect cloud storage to Finder",
      url: "https://setapp.com/apps/cloudmounter",
      platforms: "Mac",
      rating: "92"
    },
    {
      name: "Squash",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/209/40929/icon-1731928296-673b20e8a961c.png",
      description: "Compress and resize images",
      url: "https://setapp.com/apps/squash",
      platforms: "Mac",
      rating: "92"
    },
    {
      name: "Slidepad",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/367/42788/icon-1748925454-683e7c0eddcf7.png",
      description: "Keep most used apps at hand",
      url: "https://setapp.com/apps/slidepad",
      platforms: "Mac",
      rating: "92"
    },
    {
      name: "Dropshare",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/250/42493/icon-1746289475-681643438e929.png",
      description: "Save space with file sharing",
      url: "https://setapp.com/apps/dropshare",
      platforms: "Mac, iOS",
      rating: "92"
    },
    {
      name: "VidCap",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/558/42099/icon-1742341967-67da074f05fc7.png",
      description: "Generate captions for video",
      url: "https://setapp.com/apps/vidcap",
      platforms: "Mac, iOS",
      rating: "92"
    },
    {
      name: "Tripsy",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/523/42589/icon-1747072498-682235f2b097c.png",
      description: "Plan trips on Mac and iOS",
      url: "https://setapp.com/apps/tripsy",
      platforms: "Mac, iOS",
      rating: "92"
    },
    {
      name: "PDF Search",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/272/39404/icon-1719522579-667dd513092fa.png",
      description: "Find anything in a PDF with AI",
      url: "https://setapp.com/apps/pdf-search",
      platforms: "Mac, iOS",
      rating: "92"
    },
    {
      name: "Eter",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/627/42268/icon-1743775680-67efe7c02e15f.png",
      description: "Listen to internet radio",
      url: "https://setapp.com/apps/eter",
      platforms: "Mac, iOS",
      rating: "92"
    },
    {
      name: "Teleprompter App",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/609/42100/icon-1742342094-67da07cedaca3.png",
      description: "Record video with teleprompter",
      url: "https://setapp.com/apps/teleprompter-app",
      platforms: "Mac, iOS",
      rating: "92"
    },
    {
      name: "Boom 3D",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/291/43826/icon-1749207472-6842c9b062dd4.png",
      description: "Boost volume and audio quality",
      url: "https://setapp.com/apps/boom-3d",
      platforms: "Mac, iOS",
      rating: "91"
    },
    {
      name: "NotchNook",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/719/42362/icon-1744915474-68014c12efb6a.png",
      description: "Control Mac from the notch",
      url: "https://setapp.com/apps/notchnook",
      platforms: "Mac",
      rating: "91"
    },
    {
      name: "DisplayBuddy",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/489/42766/icon-1748774988-683c304c2ca82.png",
      description: "Control settings across monitors",
      url: "https://setapp.com/apps/displaybuddy",
      platforms: "Mac",
      rating: "91"
    },
    {
      name: "Diagrams",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/408/40176/icon-1726300270-66e5406e6521f.png",
      description: "Visualize with diagrams",
      url: "https://setapp.com/apps/diagrams",
      platforms: "Mac",
      rating: "91"
    },
    {
      name: "Chronicle",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/83/42541/icon-1747068772-6822276422f39.png",
      description: "Track bills and subscriptions",
      url: "https://setapp.com/apps/chronicle",
      platforms: "Mac, iOS",
      rating: "91"
    },
    {
      name: "Clop",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/612/42707/icon-1748187919-68333b0fc8980.png",
      description: "Shrink images, video, PDFs",
      url: "https://setapp.com/apps/clop",
      platforms: "Mac",
      rating: "91"
    },
    {
      name: "Focus 2",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/266/42278/icon-1743893238-67f1b2f666bec.png",
      description: "Block websites and apps",
      url: "https://setapp.com/apps/focus",
      platforms: "Mac",
      rating: "91"
    },
    {
      name: "Almighty",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/487/42639/icon-1747515066-6828f6ba09c10.png",
      description: "Unlock 50+ Mac shortcuts",
      url: "https://setapp.com/apps/almighty",
      platforms: "Mac",
      rating: "91"
    },
    {
      name: "Aquarelo",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/300/5565/icon-1643378565-61f3f785e6af0.png",
      description: "Simplify color management",
      url: "https://setapp.com/apps/aquarelo",
      platforms: "Mac",
      rating: "91"
    },
    {
      name: "Muse",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/628/43865/icon-1749614395-6848ff3bd49e3.png",
      description: "Put ideas on a single canvas",
      url: "https://setapp.com/apps/muse",
      platforms: "Mac, iOS",
      rating: "91"
    },
    {
      name: "TypingMind",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/583/40440/icon-1727938430-66fe3f7ee68ac.png",
      description: "Use new UI to chat with AI",
      url: "https://setapp.com/apps/typingmind",
      platforms: "Mac, Web",
      rating: "90"
    },
    {
      name: "Luminar Neo",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/566/42752/icon-1748605432-683999f81f0e9.png",
      description: "Improve your photos like a pro",
      url: "https://setapp.com/apps/luminar-neo",
      platforms: "Mac",
      rating: "90"
    },
    {
      name: "ChatMate for WhatsApp",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/240/40674/icon-1729783133-671a655d54dbe.png",
      description: "Personalize WhatsApp",
      url: "https://setapp.com/apps/chatmate-for-whatsapp",
      platforms: "Mac",
      rating: "90"
    },
    {
      name: "CameraBag Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/299/42519/icon-1746576494-681aa46e5c360.png",
      description: "Edit photos and videos",
      url: "https://setapp.com/apps/camerabag-pro",
      platforms: "Mac",
      rating: "90"
    },
    {
      name: "Moment",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/424/40407/icon-1727793531-66fc097bc6429.png",
      description: "Create countdown events",
      url: "https://setapp.com/apps/moment",
      platforms: "Mac",
      rating: "90"
    },
    {
      name: "Daily",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/504/42708/icon-1748198319-683363afddb8c.png",
      description: "Track time easily",
      url: "https://setapp.com/apps/daily",
      platforms: "Mac, iOS",
      rating: "90"
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
      name: "Spark Mail",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/575/43810/icon-1749053067-68406e8ba3735.png",
      description: "Manage emails easier",
      url: "https://setapp.com/apps/spark-mail",
      platforms: "Mac, iOS",
      rating: "89"
    },
    {
      name: "World Clock Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/246/41965/icon-1741045317-67c63e4508341.png",
      description: "Work across time zones",
      url: "https://setapp.com/apps/world-clock-pro",
      platforms: "Mac, iOS",
      rating: "89"
    },
    {
      name: "iBoysoft MagicMenu",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/512/42345/icon-1744773554-67ff21b228833.png",
      description: "Expand your Mac’s right click",
      url: "https://setapp.com/apps/iboysoft-magicmenu",
      platforms: "Mac",
      rating: "89"
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
      name: "Tayasui Sketches",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/255/5389/icon-1639474288-61b86470bad86.png",
      description: "Draw and create illustrations",
      url: "https://setapp.com/apps/tayasui-sketches",
      platforms: "Mac",
      rating: "89"
    },
    {
      name: "GetAPI",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/756/42618/icon-1747220736-6824790076491.png",
      description: "Manage API interactions easier",
      url: "https://setapp.com/apps/getapi",
      platforms: "Mac",
      rating: "89"
    },
    {
      name: "ClearVPN",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/433/42622/icon-1747307513-6825cbf994f32.png",
      description: "Use an intuitive VPN",
      url: "https://setapp.com/apps/clearvpn",
      platforms: "Mac, iOS",
      rating: "88"
    },
    {
      name: "Batteries",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/393/42767/icon-1748785895-683c5ae74dbc9.png",
      description: "Track all devices' battery levels",
      url: "https://setapp.com/apps/batteries",
      platforms: "Mac",
      rating: "88"
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
      name: "WallCal",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/541/41930/icon-1740579534-67bf22cec4e8d.png",
      description: "Pin clear calendar to desktop",
      url: "https://setapp.com/apps/wallcal",
      platforms: "Mac",
      rating: "88"
    },
    {
      name: "Capto",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/175/42078/icon-1742193995-67d7c54b2f8f8.png",
      description: "Create screen recordings",
      url: "https://setapp.com/apps/capto",
      platforms: "Mac",
      rating: "87"
    },
    {
      name: "Elephas",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/576/42780/icon-1748860950-683d8016cd020.png",
      description: "Manage knowledge with AI",
      url: "https://setapp.com/apps/elephas",
      platforms: "Mac, iOS",
      rating: "87"
    },
    {
      name: "GetSound",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/586/9717/icon-1706102658-65b10f82b952a.png",
      description: "Focus with AI soundscapes",
      url: "https://setapp.com/apps/getsound",
      platforms: "Mac",
      rating: "87"
    },
    {
      name: "Expenses",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/521/43864/icon-1749612036-6848f60475063.png",
      description: "Track your spending",
      url: "https://setapp.com/apps/expenses",
      platforms: "Mac, iOS",
      rating: "87"
    },
    {
      name: "Focused Work",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/699/42759/icon-1748710157-683b330d4602c.png",
      description: "Work with timers",
      url: "https://setapp.com/apps/focused-work-mac",
      platforms: "Mac, iOS",
      rating: "87"
    },
    {
      name: "iMeetingX",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/337/9518/icon-1702884273-657ff3b16c0a6.png",
      description: "Run meetings effectively",
      url: "https://setapp.com/apps/imeetingx",
      platforms: "Mac",
      rating: "87"
    },
    {
      name: "iBoysoft NTFS for Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/384/40354/icon-1727496466-66f7811273225.png",
      description: "Read/write to NTFS drives",
      url: "https://setapp.com/apps/iboysoft-ntfs-for-mac",
      platforms: "Mac",
      rating: "86"
    },
    {
      name: "Structured",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/555/42768/icon-1748786595-683c5da33211f.png",
      description: "Structure your day",
      url: "https://setapp.com/apps/structured",
      platforms: "Mac, iOS",
      rating: "86"
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
      name: "SheetPlanner",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/453/40067/icon-1725563539-66da0293bf0a3.png",
      description: "Plan and track project progress",
      url: "https://setapp.com/apps/sheetplanner",
      platforms: "Mac",
      rating: "86"
    },
    {
      name: "Focus",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/700/28918/icon-1716573034-6650d36a66766.png",
      description: "Block websites and social media",
      url: "https://setapp.com/apps/focus-mac",
      platforms: "Mac",
      rating: "86"
    },
    {
      name: "Rocket Typist",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/276/41821/icon-1739458538-67ae07eac8620.png",
      description: "Save time typing with text snippets",
      url: "https://setapp.com/apps/rocket-typist",
      platforms: "Mac, iOS",
      rating: "85"
    },
    {
      name: "uBar",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/306/6785/icon-1665525396-6345e6945f33c.png",
      description: "Make the Dock useful",
      url: "https://setapp.com/apps/ubar",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "Vivid",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/546/39922/icon-1724012110-66c2564e2b09f.png",
      description: "Double display brightness",
      url: "https://setapp.com/apps/vivid",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "Plus",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/584/42484/icon-1746174118-681480a6e0e16.png",
      description: "Work with text using AI",
      url: "https://setapp.com/apps/plus",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "AnyDroid",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/336/41846/icon-1739786426-67b308ba38644.png",
      description: "Move files between Mac and Android",
      url: "https://setapp.com/apps/anytrans-for-android",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "PliimPRO",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/406/9104/icon-1697480465-652d7f11a4cad.png",
      description: "Share screen distraction-free",
      url: "https://setapp.com/apps/pliimpro",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "Hustl",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/436/5289/icon-1637696825-619d453928e34.png",
      description: "Create timelapses of your screen",
      url: "https://setapp.com/apps/hustl",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "MonsterWriter",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/502/42757/icon-1748691704-683aeaf8555d7.png",
      description: "Write complex texts easily",
      url: "https://setapp.com/apps/monsterwriter",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "Clobbr",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/593/41323/icon-1734653161-6764b4e997d42.png",
      description: "Load test API endpoints",
      url: "https://setapp.com/apps/clobbr",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "Canary Mail",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/307/42730/icon-1748435453-683701fd4d865.png",
      description: "Write and manage emails",
      url: "https://setapp.com/apps/canary-mail",
      platforms: "Mac, iOS",
      rating: "84"
    },
    {
      name: "Calendars",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/623/42476/icon-1746037434-68126abadb8d9.png",
      description: "Track tasks, events, and plans",
      url: "https://setapp.com/apps/calendars",
      platforms: "Mac, iOS",
      rating: "84"
    },
    {
      name: "Spellar AI",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/635/42593/icon-1747110468-6822ca44591b2.png",
      description: "Smart Meeting Notes with AI",
      url: "https://setapp.com/apps/spellar-ai",
      platforms: "Mac, Web",
      rating: "84"
    },
    {
      name: "WhisperTranscribe",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/691/42434/icon-1745789075-680ea09336dbf.png",
      description: "Turn voice into text content",
      url: "https://setapp.com/apps/whisper-transcribe",
      platforms: "Mac",
      rating: "84"
    },
    {
      name: "GreenBooks",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/505/42101/icon-1742439491-67db844380d13.png",
      description: "Manage money easily",
      url: "https://setapp.com/apps/greenbooks",
      platforms: "Mac, iOS",
      rating: "84"
    },
    {
      name: "Smmall Cloud",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/744/41994/icon-1741202691-67c8a5031d9fd.png",
      description: "Share files and boost your brand",
      url: "https://setapp.com/apps/smmall-cloud",
      platforms: "Mac",
      rating: "84"
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
      name: "Speeko",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/477/42496/icon-1746321274-6816bf7a5ee04.png",
      description: "Get better at public speaking",
      url: "https://setapp.com/apps/speeko",
      platforms: "Mac, iOS",
      rating: "83"
    },
    {
      name: "Mimir",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/451/43827/icon-1749222527-6843047f5921c.png",
      description: "Play and manage podcasts",
      url: "https://setapp.com/apps/mimir",
      platforms: "Mac, iOS",
      rating: "83"
    },
    {
      name: "UpLife",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/530/42483/icon-6814723cd9b41.jpg",
      description: "Your self-care assistant",
      url: "https://setapp.com/apps/uplife-mental-health-therapy-ios",
      platforms: "iOS",
      rating: "83"
    },
    {
      name: "IM+",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/296/3685/icon-1605729873-5fb57e510c414.png",
      description: "Bring all messengers into one",
      url: "https://setapp.com/apps/im+",
      platforms: "Mac",
      rating: "82"
    },
    {
      name: "DCommander",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/311/41384/icon-1735205346-676d21e2e8634.png",
      description: "Manage files in a dual-pane view",
      url: "https://setapp.com/apps/dcommander",
      platforms: "Mac",
      rating: "82"
    },
    {
      name: "Silenz",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/350/8914/icon-1695550446-65100beee3749.png",
      description: "Focus mode sound",
      url: "https://setapp.com/apps/silenz",
      platforms: "Mac",
      rating: "82"
    },
    {
      name: "mSecure",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/732/41618/icon-1737736000-6793bf40b30b3.png",
      description: "Store and sync passwords",
      url: "https://setapp.com/apps/msecure",
      platforms: "Mac, iOS",
      rating: "82"
    },
    {
      name: "Invoice Rex",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/749/42777/icon-1748848699-683d503b31d44.png",
      description: "Edit and track invoices",
      url: "https://setapp.com/apps/invoice-rex",
      platforms: "Mac, iOS",
      rating: "82"
    },
    {
      name: "AppWage",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/711/42286/icon-1744026714-67f3bc5a93dfb.png",
      description: "Track your app earnings",
      url: "https://setapp.com/apps/appwage",
      platforms: "Mac",
      rating: "82"
    },
    {
      name: "MoneyWiz 2025",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/565/42636/icon-1747415862-682773363aa5c.png",
      description: "Budget and manage bills",
      url: "https://setapp.com/apps/moneywiz",
      platforms: "Mac, iOS",
      rating: "81"
    },
    {
      name: "JustStream",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/370/42243/icon-1743592902-67ed1dc64ffe1.png",
      description: "Mirror Mac screen to TV",
      url: "https://setapp.com/apps/juststream",
      platforms: "Mac",
      rating: "81"
    },
    {
      name: "Pie Menu",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/697/40821/icon-1730974322-672c927219414.png",
      description: "Access app actions in a click",
      url: "https://setapp.com/apps/pie-menu",
      platforms: "Mac",
      rating: "80"
    },
    {
      name: "iShowU",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/720/42317/icon-1744317122-67f82ac23fa0b.png",
      description: "Record screen on Mac",
      url: "https://setapp.com/apps/ishowu",
      platforms: "Mac",
      rating: "80"
    },
    {
      name: "FreeYourMusic",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/737/42359/icon-1744872400-6800a3d0e8dc6.png",
      description: "Transfer your playlists",
      url: "https://setapp.com/apps/freeyourmusic",
      platforms: "Mac, iOS",
      rating: "79"
    },
    {
      name: "Boom",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/735/42783/icon-1748875965-683dbabdd428d.png",
      description: "Level-up your video calls",
      url: "https://setapp.com/apps/boom",
      platforms: "Mac",
      rating: "79"
    },
    {
      name: "Remote Mouse",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/193/1970/icon-1558078558-5cde645e2405f.png",
      description: "Control Mac from your phone",
      url: "https://setapp.com/apps/remote-mouse",
      platforms: "Mac",
      rating: "79"
    },
    {
      name: "AnyTrans for iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/328/42580/icon-1747015439-6821570f0d559.png",
      description: "Move files between macOS and iOS",
      url: "https://setapp.com/apps/anytrans",
      platforms: "Mac",
      rating: "78"
    },
    {
      name: "Backtrack",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/381/41528/icon-1736899813-6786fce564982.png",
      description: "Record audio from the past",
      url: "https://setapp.com/apps/backtrack",
      platforms: "Mac",
      rating: "78"
    },
    {
      name: "Taskheat",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/326/41099/icon-1732998743-674b7657aad16.png",
      description: "Learn to prioritize tasks",
      url: "https://setapp.com/apps/taskheat",
      platforms: "Mac, iOS",
      rating: "78"
    },
    {
      name: "Secrets 4",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/587/42673/icon-1747819273-682d9b0983304.png",
      description: "Store and manage passwords",
      url: "https://setapp.com/apps/secrets",
      platforms: "Mac, iOS",
      rating: "77"
    },
    {
      name: "Simon",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/201/7859/icon-1681321139-6436ecb3343c6.png",
      description: "Control and troubleshoot servers",
      url: "https://setapp.com/apps/simon",
      platforms: "Mac",
      rating: "77"
    },
    {
      name: "Chimeful",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/759/43808/icon-1749050058-684062ca28067.png",
      description: "Improve focus and stay mindful",
      url: "https://setapp.com/apps/chimeful",
      platforms: "Mac",
      rating: "77"
    },
    {
      name: "Subjects",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/619/41415/icon-1735670378-67743a6a3647c.png",
      description: "Track class schedule, homework",
      url: "https://setapp.com/apps/subjects",
      platforms: "Mac, iOS",
      rating: "76"
    },
    {
      name: "TeaCode",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/308/40239/icon-1726668573-66eadf1df1cc3.png",
      description: "Speed up coding with expanders",
      url: "https://setapp.com/apps/teacode",
      platforms: "Mac",
      rating: "76"
    },
    {
      name: "Coherence X",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/363/39301/icon-1718731966-6671c4be62880.png",
      description: "Turn websites into apps",
      url: "https://setapp.com/apps/coherence-pro",
      platforms: "Mac",
      rating: "74"
    },
    {
      name: "Keep It Shot",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/688/41516/icon-1736865151-6786757f32e88.png",
      description: "Rename screenshots with AI",
      url: "https://setapp.com/apps/keep-it-shot",
      platforms: "Mac",
      rating: "74"
    },
    {
      name: "Lacona",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/235/7221/icon-1671243506-639d26f20c993.png",
      description: "Tell your Mac what to do",
      url: "https://setapp.com/apps/lacona",
      platforms: "Mac",
      rating: "74"
    },
    {
      name: "Moonitor",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/314/8672/icon-1706610205-65b8ce1de936e.png",
      description: "Receive live updates on crypto",
      url: "https://setapp.com/apps/moonitor",
      platforms: "Mac",
      rating: "74"
    },
    {
      name: "CleanPresenter",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/581/40679/icon-1729846239-671b5bdf41873.png",
      description: "Present a single window",
      url: "https://setapp.com/apps/cleanpresenter",
      platforms: "Mac",
      rating: "73"
    },
    {
      name: "Spotless",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/294/2215/icon-1566995620-5d6674a445de5.png",
      description: "Auto-hide files and clean up",
      url: "https://setapp.com/apps/spotless",
      platforms: "Mac",
      rating: "73"
    },
    {
      name: "Numerics",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/594/42160/icon-1742954658-67e360a2042df.png",
      description: "Monitor your business data",
      url: "https://setapp.com/apps/numerics",
      platforms: "Mac, iOS",
      rating: "73"
    },
    {
      name: "Filmage Editor",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/545/9060/icon-1697012144-652659b0b21ce.png",
      description: "Easily edit videos like a pro",
      url: "https://setapp.com/apps/filmage-editor",
      platforms: "Mac",
      rating: "72"
    },
    {
      name: "AdLock",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/517/41861/icon-1740384397-67bc288ddd017.png",
      description: "Block annoying browser ads",
      url: "https://setapp.com/apps/adlock",
      platforms: "Mac, iOS",
      rating: "70"
    },
    {
      name: "Headway",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/618/43872/icon-684a7fb820d5f.jpg",
      description: "Get summaries for nonfiction",
      url: "https://setapp.com/apps/headway",
      platforms: "iOS, Web",
      rating: "70"
    },
    {
      name: "Unite",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/340/43849/icon-1749485603-6847082326200.png",
      description: "Create an app from a website",
      url: "https://setapp.com/apps/unite",
      platforms: "Mac",
      rating: "67"
    },
    {
      name: "Tab Finder",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/488/9319/icon-1700040755-65549033172ca.png",
      description: "Tabs from all browsers in one spot",
      url: "https://setapp.com/apps/tabfinder",
      platforms: "Mac",
      rating: "67"
    },
    {
      name: "n-Track Studio",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/238/7508/icon-1676044779-63e669eb0b3d9.png",
      description: "Record and edit music on Mac",
      url: "https://setapp.com/apps/n-track-studio",
      platforms: "Mac",
      rating: "67"
    },
    {
      name: "ByDesign",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/760/43851/icon-1749459354-6846a19a331ec.png",
      description: "Organize your work and life",
      url: "https://setapp.com/apps/bydesign",
      platforms: "Mac, iOS, Web",
      rating: "67"
    },
    {
      name: "Mental Walk",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/494/6892/icon-1666616857-63568e19275d5.png",
      description: "Reflect on your life",
      url: "https://setapp.com/apps/mentalwalk",
      platforms: "Mac",
      rating: "67"
    },
    {
      name: "Sidebar",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/729/42661/icon-1747749988-682c8c6458556.png",
      description: "Try a Dock alternative",
      url: "https://setapp.com/apps/sidebar",
      platforms: "Mac",
      rating: "64"
    },
    {
      name: "TaoGit",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/516/40716/icon-1730208153-6720e19925f0f.png",
      description: "Streamline your work with Git",
      url: "https://setapp.com/apps/taogit",
      platforms: "Mac",
      rating: "60"
    },
    {
      name: "SwiftyLaunch",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/738/42635/icon-1747402833-68274051f26a0.png",
      description: "Build iOS apps faster",
      url: "https://setapp.com/apps/swiftylaunch",
      platforms: "Mac",
      rating: "59"
    },
    {
      name: "CleanMy®Phone",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/399/43814/icon-684145403148e.jpg",
      description: "Remove digital clutter",
      url: "https://setapp.com/apps/gemini-photos",
      platforms: "iOS",
      rating: "58"
    },
    {
      name: "Launcher with Multiple Widgets",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/535/41592/icon-67909c33365bc.jpg",
      description: "Customize your home screen",
      url: "https://setapp.com/apps/launcher-with-multiple-widgets-ios",
      platforms: "iOS",
      rating: "57"
    },
    {
      name: "Voice Dream Reader",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/717/41922/icon-1740505258-67be00aa89d1a.png",
      description: "Listen to your texts",
      url: "https://setapp.com/apps/voice-dream-reader",
      platforms: "Mac",
      rating: "48"
    },
    {
      name: "Leave Me Alone",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/709/main/icon-7777ffdacb9dc.png",
      description: "Manage email subscriptions",
      url: "https://setapp.com/apps/leave-me-alone",
      platforms: "Web",
      rating: "0"
    },
    {
      name: "Ready to Send",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/607/main/icon-65719fa98f5e6.png",
      description: "Generate draft email replies",
      url: "https://setapp.com/apps/ready-to-send",
      platforms: "Web",
      rating: "0"
    }
  ];
  class m {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render(), this.addSmoothScrolling(), this.events();
    }
    render() {
      const t = document.querySelector("section.header");
      if (!t) {
        console.error("Target element not found");
        return;
      }
      if (i == null) return;
      const a = (
        /* HTML */
        `<section class="page-content-wrapper crs-apps">
      <div class="crs-apps-content">
        <h3 class="crs-apps-title">What do you want to start with today?</h3>
        <div class="crs-apps-description">
          Big task or small fix — with 260+ trusted apps, Setapp helps you solve
          anything without stress, all with one simple subscription
        </div>
        <ul class="crs-apps-nav">
          <li class="crs-apps-nav-item"><a href="#fix-slow-mac">Fix slow Mac</a></li>
          <li class="crs-apps-nav-item">
            <a href="#customize-workspace">Customise your workspace</a>
          </li>
          <li class="crs-apps-nav-item">
            <a href="#download-convert-media">Download & convert media</a>
          </li>
          <li class="crs-apps-nav-item">
            <a href="#recover-open-files">Recover & open files</a>
          </li>
          <li class="crs-apps-nav-item">
            <a href="#use-tools">All-in-one work tools</a>
          </li>
          <li class="crs-apps-nav-item"><a href="#use-ai">Do more with AI</a></li>
          <li class="crs-apps-nav-item crs-apps-nav-item--more">
            <a href="https://setapp.com/apps">And more...</a>
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
                    " Setapp is like a magic toolbox for my Mac — whatever I need, it’s just there. Makes me way more productive "
                  </div>
                </div>
              </div>
              <div class="crs-block-apps">
                <div class="crs-block-apps-list">
                ${this.renderApps([
          "CleanMyMac X",
          "QuitAll",
          "iStat Menus",
          "Endurance",
          "AlDente Pro",
          "Mission Control"
        ])}</div>
                <div class="crs-block-more">
                  <div>35+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
          <div class="crs-apps-block" data-color="D5D8FE" id="customize-workspace">
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
                <div class="crs-block-apps-list">${this.renderApps([
          "WidgetWall",
          "Bartender",
          "CleanShot"
        ])}</div>
                <div class="crs-block-more">
                  <div>20+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
          <div class="crs-apps-block" data-color="424E81" id="download-convert-media">
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
                <div class="crs-block-apps-list">${this.renderApps([
          "Downie",
          "Pulltube",
          "Permute"
        ])}</div>
                <div class="crs-block-more">
                  <div>17+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
          <div class="crs-apps-block" data-color="CF6F8A" id="recover-open-files">
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
                    ></span></span> — Andy S.
                  </div>
                  <div class="crs-block-comment-text">
                    " One subscription, tons of great Mac and iOS apps. No separate licenses needed! "
                  </div>
                </div>
              </div>
              <div class="crs-block-apps">
                <div class="crs-block-apps-list">${this.renderApps([
          "Nitro PDF Pro",
          "BetterZip",
          "Get Backup Pro",
          "Archiver",
          "Ulysses",
          "Renamer"
        ])}</div>
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
                <div class="crs-block-apps-list">${this.renderApps([
          "Session",
          "CodeRunner",
          "Craft"
        ])}</div>
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
                     <div class="crs-block-apps-list">${this.renderApps([
          "PDF Pals",
          "MurmurType",
          "Ready to Send"
        ])}</div>
                <div class="crs-block-more">
                  <div>9+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="crs-apps-action">
          <a href="https://setapp.com/apps" class="btn btn-link btn_no-spacing btn-link_light btn-link_with-arrow">
            View all superpowers
          </a>
        </div>
        <div class="crs-apps-subtitle">
          Sign up, install Setapp, and find your <br>
perfect app in our suite of 260+ apps.
        </div>
      </div>
    </section>`
      );
      t.insertAdjacentHTML("afterend", a);
    }
    renderApps(t) {
      return t.map((a) => i.find((p) => p.name === a)).filter((a) => a !== void 0).map(
        (a) => (
          /* HTML */
          `<div class="crs-block-app">
          <div class="crs-block-app-icon">
            <img
              src="${a.icon}"
              alt="${a.name}"
              width="80"
              height="80"
              loading="lazy"
            />
          </div>
          <div class="crs-block-app-name">${a.name}</div>
          <div class="crs-block-app-description">${a.description}</div>

          <div class="crs-block-app-meta">
            <div class="crs-block-app-rating">
              <img
                alt=""
                width="16"
                height="16"
                src="https://cdn.setapp.com/master-9f18f44f26fe5f8aa6077a4a8f38ca796e93985f-590/build/main/751ecfba46c61061d678.svg"
              />${a.rating}%
            </div>
            <div class="crs-block-app-platforms">${a.platforms}</div>
          </div>
        </div>`
        )
      ).join("");
    }
    events() {
      const t = document.querySelectorAll(
        ".crs-block-action-button"
      );
      t && t.length > 0 && t.forEach((a) => {
        a.addEventListener("click", (p) => {
          var e;
          (e = document.querySelector(".header__cta-button")) == null || e.click();
        });
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = r, document.head.append(t);
    }
    addSmoothScrolling() {
      document.addEventListener("click", (t) => {
        const p = t.target.closest('.crs-apps-nav a[href^="#"]');
        if (p) {
          t.preventDefault();
          const e = p.getAttribute("href");
          if (e && e !== "#") {
            const o = document.querySelector(e);
            o && o.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
      });
    }
  }
  const l = `.crs-achievs {
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
  class d {
    constructor({ container: t, position: a = "afterend" }) {
      this.container = t, this.position = a, this.init();
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
      t.textContent = l, document.head.appendChild(t);
    }
  }
  const h = "https://conversionrate-store.github.io/a-b_images/setapp/", g = `.site-navigation__bar {
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
  class u {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.addAppsImage(), this.changeTitle(), this.addComment(), this.addAchievs();
    }
    addAppsImage() {
      const t = `
      <div class="header__apps-image"><img src="${h}/apps.webp" alt="Apps Image"></div>`, a = document.querySelector(
        "section.header .header__logo"
      );
      a ? a.insertAdjacentHTML("beforebegin", t) : console.error("Target element not found");
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
      t && new d({
        container: t,
        position: "afterend"
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = g, document.head.appendChild(t);
    }
  }
  const f = `.crs-more {
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
  class y {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render();
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
            With a Setapp subscription, it's easy to discover, install, and use <br>
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
    addStyles() {
      const t = document.createElement("style");
      t.textContent = f, document.head.appendChild(t);
    }
  }
  const b = `.home {
  background: #1a1a1d;
}
`;
  n({ name: "4th EXP on HP", dev: "OS" }), c("exp_hp");
  class w {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.init();
    }
    init() {
      this.getAppData(), !(this.device === "mobile" || location.pathname !== "/") && (console.log("Test init"), this.addStyles(), new u(), new m(), new y());
    }
    getAppData() {
      const t = document.querySelectorAll("app-details");
      console.log("All Apps:", t);
      const a = Array.from(t).map((p) => {
        const e = p.getAttribute("name") || "", o = p.getAttribute("iconsrc") || "", v = p.getAttribute("description") || "", M = p.getAttribute("url") || "", k = p.getAttribute("platforms") || "", x = p.getAttribute("rating") || "";
        return {
          name: e,
          icon: o,
          description: v,
          url: M,
          platforms: k,
          rating: x
        };
      });
      console.log("App Data:", a);
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = b, document.head.appendChild(t);
    }
  }
  new w();
})();
//# sourceMappingURL=index.js.map
