(function() {
  "use strict";
  const E = ({ name: d, dev: e }) => {
    console.log(
      `%c EXP: ${d} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, _ = (d) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", d, "variant_1"));
    }, 1e3);
  }, f = [
    {
      link: "/how-to/recover-deleted-photos-from-iphone",
      title: "How to recover deleted photos from an iPhone",
      description: "Find out how to recover deleted photos iPhone no longer has in its camera roll using backups, cloud sync, and data recovery apps. Never lose any photos ever again!",
      headerBlock: {
        title: "Recover lost iPhone photos and files",
        description: "All you need is a Mac with Disk Drill installed. Connect and scan your iPhone to restore lost content. Available on Setapp.",
        imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png"
      },
      popupData: {
        initial: {
          title: "Have you figured out how to recover deleted iPhone photos?"
        },
        yesStep: {
          title: (
            /* HTML */
            `<span class="highlight">Fantastic!</span> Keep your
          photos safe from now on`
          ),
          description: "Setapp helps you prevent future photo-loss stress with one simple subscription:",
          subnote: "Enjoy now for FREE, and protect your memories forever"
        },
        noStep: {
          title: (
            /* HTML */
            `<span class="highlight">Don’t worry</span> <br />
          you still have options!`
          ),
          description: (
            /* HTML */
            `Instantly recover your permanently deleted
          photos with <b>Disk Drill</b> on Setapp. Plus, you’ll get full access
          to other essential apps`
          ),
          subnote: "Enjoy now for FREE, and protect your memories forever"
        },
        applist: [
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80,dpr=1/https://store.setapp.com/app/399/42166/icon-67e3aab93a5fb.jpg",
            title: "CleanMy®Phone",
            description: "to clear duplicates and free up storage"
          },
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80,dpr=1/https://store.setapp.com/app/217/40765/icon-1730479186-67250452d2169.png",
            title: "ChronoSync Express",
            description: "for automatic backups"
          },
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/289/42253/icon-1743678842-67ee6d7aeeda6.png",
            title: "CloudMounter",
            description: "for hassle-free cloud storage"
          },
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png",
            title: "Disk Drill",
            description: "ready for emergencies"
          }
        ]
      }
    },
    {
      link: "/how-to/download-youtube-videos",
      title: "How to save YouTube videos on Mac",
      description: "How to download a YouTube video on a Mac using dedicated apps and built-in programs to get the ability to edit and share video files.",
      headerBlock: {
        title: "Download YouTube videos in high quality",
        description: "Get Downie on Setapp to save, share or edit any YouTube video. Need audio, subtitles, or thumbnails separately? Downie has you covered.",
        imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/222/42263/icon-1743756630-67ef9d568e1e3.png"
      },
      popupData: {
        initial: {
          title: "Have you successfully downloaded your YouTube video?"
        },
        yesStep: {
          title: (
            /* HTML */
            `<span class="highlight">Awesome!</span> Want an
          easier way next time? `
          ),
          description: "Setapp makes downloading and managing videos effortless with these powerful tools:",
          subnote: "Enjoy now for FREE, and protect your memories forever"
        },
        noStep: {
          title: (
            /* HTML */
            `<span class="highlight">No worries,</span> <br />
          we’ve got you covered! `
          ),
          description: "Effortlessly download any YouTube video using Setapp’s powerful apps:",
          subnote: "Enjoy now for FREE, and protect your memories forever"
        },
        applist: [
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png",
            title: "Pulltube",
            description: "quick and easy video downloads"
          },
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/222/42263/icon-1743756630-67ef9d568e1e3.png",
            title: "Downie",
            description: "grab videos from any platform"
          },
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/321/42059/icon-1741882724-67d3056489850.png",
            title: "CleanShot X",
            description: "quickly capture and edit your screen"
          }
        ]
      }
    },
    {
      link: "/how-to/how-to-recover-deleted-text-messages-on-iphone",
      title: "How to retrieve deleted text messages on your iPhone",
      description: "How to recover deleted text messages iPhone using Apple functions, phone provider, and dedicated pro apps.",
      headerBlock: {
        title: "The fastest way to recover lost data on iPhone",
        description: "Install Disk Drill on your Mac from Setapp and recover any lost files on iPhone in a few clicks.",
        imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png"
      },
      popupData: {
        initial: { title: "Have you recovered your deleted iPhone messages?" },
        yesStep: {
          title: (
            /* HTML */
            `<span class="highlight">Great!</span> Now keep your
          messages safe`
          ),
          description: "Setapp helps secure your data with these easy-to-use tools:",
          subnote: "Get your messages back immediately—start for FREE now!"
        },
        noStep: {
          title: (
            /* HTML */
            `<span class="highlight">Don’t panic</span>, we have a
          solution!`
          ),
          description: "Instantly retrieve your deleted messages using Setapp’s powerful apps:",
          subnote: "Get your messages back immediately—start for FREE now!"
        },
        applist: [
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png",
            title: "Disk Drill",
            description: "recover deleted messages easily"
          },
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/328/41359/icon-1734924881-6768da51c8c1a.png",
            title: "AnyTrans",
            description: "effortlessly manage and transfer your data"
          }
        ]
      }
    },
    {
      link: "/how-to/how-to-recover-an-unsaved-word-document-on-mac",
      title: "How to recover unsaved Word document on a Mac",
      description: "When you need to recover Word document Mac computers don’t respond well to the retrieval process. Microsoft Word is a third party app, and Apple doesn’t automatically save its documents to icloud as it does with apps like Pages.",
      headerBlock: {
        title: "Recover Word documents on Mac from any device",
        description: "Have your important Word documents been lost or intentionally destroyed? Get DiskDrill on Setapp to recover deleted files.",
        imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png"
      },
      popupData: {
        initial: { title: "Have you recovered your unsaved Word document?" },
        yesStep: {
          title: (
            /* HTML */
            `<span class="highlight">Excellent!</span> Now
          safeguard your documents`
          ),
          description: "Setapp offers powerful solutions to protect your files:",
          subnote: "Restore your documents now—start FREE today!"
        },
        noStep: {
          title: (
            /* HTML */
            `<span class="highlight">Don’t stress,</span> help is
          here!`
          ),
          description: "Quickly recover your unsaved documents with these powerful Setapp apps:",
          subnote: "Restore your documents now—start FREE today!"
        },
        applist: [
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png",
            title: "Disk Drill",
            description: "to recover deleted files easily"
          },
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/217/40765/icon-1730479186-67250452d2169.png",
            title: "ChronoSync Express",
            description: "automated backups to protect future documents"
          },
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png",
            title: "Backup Pro",
            description: "effortlessly backup and restore data"
          }
        ]
      }
    },
    {
      link: "/how-to/convert-youtube-to-mp3",
      title: "Best ways to convert YouTube to MP3",
      description: "Find out the best ways to convert YouTube to MP3 format, download whole playlists in a click, and transfer media to other devices instantly.",
      headerBlock: {
        title: "Easily convert a YouTube video to MP3",
        description: "Install Pulltube or Downie to grab your video in the desired quality, adjust the length, and instantly convert it to the preferred format. Get both apps on Setapp.",
        imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png"
      },
      popupData: {
        initial: {
          title: "Have you successfully converted your YouTube video to MP3?"
        },
        yesStep: {
          title: (
            /* HTML */
            `<span class="highlight">Awesome!</span> Simplify your
          media tasks even more.`
          ),
          description: "Setapp helps you handle media effortlessly with these useful apps:",
          subnote: "Convert videos instantly—start for FREE now!"
        },
        noStep: {
          title: (
            /* HTML */
            `<span class="highlight">Don’t worry,</span> we've got
          your back!`
          ),
          description: "Easily convert YouTube videos to MP3 with these powerful Setapp tools:",
          subnote: "Convert videos instantly—start for FREE now!"
        },
        applist: [
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png",
            title: "Pulltube",
            description: "easily download and convert YouTube videos"
          },
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/222/42263/icon-1743756630-67ef9d568e1e3.png",
            title: "Downie",
            description: "high-quality audio extraction from the video"
          },
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/219/42264/icon-1743758208-67efa380b6636.png",
            title: "Permute",
            description: "effortlessly convert to MP3 and other formats"
          }
        ]
      }
    },
    {
      link: "/how-to/download-facebook-video",
      title: "How to download Facebook videos to Mac",
      description: "Learn how to save from Facebook. Keep your favorite videos close at hand for easy access and enjoyment.",
      headerBlock: {
        title: "Effortlessly download videos from leading sites ",
        description: "Explore Pulltube and Downie, the Mac media downloaders available on Setapp, and easily save all the content you desire.",
        imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png"
      },
      popupData: {
        initial: {
          title: "Have you successfully downloaded your Facebook video?"
        },
        yesStep: {
          title: (
            /* HTML */
            `<span class="highlight">Great!</span> Make video
          downloading even easier next time.`
          ),
          description: "Setapp simplifies video management with these handy tools:",
          subnote: "Enhance your video experience—start your FREE trial today!"
        },
        noStep: {
          title: (
            /* HTML */
            `<span class="highlight">No worries,</span> we can
          help!`
          ),
          description: "Quickly download any Facebook video using these reliable Setapp apps:",
          subnote: "Enjoy now for FREE, and protect your memories forever"
        },
        applist: [
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png",
            title: "Pulltube",
            description: "simple Facebook video downloads"
          },
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/222/42263/icon-1743756630-67ef9d568e1e3.png",
            title: "Downie",
            description: "easily grab videos from various websites"
          },
          {
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/219/42264/icon-1743758208-67efa380b6636.png",
            title: "Permute",
            description: "instantly convert videos for convenient use"
          }
        ]
      }
    },
    {
      link: "/how-to/how-to-recover-sd-card-on-mac",
      title: "How to recover deleted files from an SD card on a Mac: 5 easy ways",
      description: "No matter what caused the data loss, learn how to recover an SD card on Mac with our guide. Quickly recover photos, documents, and more.",
      headerBlock: {
        title: "Recover Word documents on Mac from any device",
        description: "Disk Drill can recover them regardless of the cause of the loss – accidental deletion, data corruption, disk damage, etc. Available on Setapp.",
        imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png"
      },
      popupData: {
        initial: { title: "Have you successfully recovered your SD card data?" },
        yesStep: {
          title: (
            /* HTML */
            `<span class="highlight">Awesome!</span> Secure your
          data from now on`
          ),
          description: "Protect your important files easily with Setapp’s powerful apps:",
          subnote: "Keep your files safe permanently—start for FREE today!"
        },
        noStep: {
          title: (
            /* HTML */
            `<span class="highlight">Don’t worry,</span> we've got
          the solution!`
          ),
          description: "Quickly recover lost SD card data using Setapp’s trusted tools:",
          subnote: "Recover your files now—try Setapp for FREE!"
        },
        applist: [
          {
            title: "Disk Drill",
            description: "powerful SD card data recovery",
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png"
          },
          {
            title: "Backup Pro",
            description: "simple backup solutions to safeguard your data",
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png"
          }
        ]
      }
    },
    {
      link: "/how-to/unblur-an-image",
      title: "How to unblur an image quickly and easily",
      description: "Find out how to sharpen blurry pictures in a variety of ways, from using traditional photo-editing tools to web apps to AI-powered software.",
      headerBlock: {
        title: "Perfect your photo-editing workflow",
        description: "Use the best image-manipulation software from the Setapp collection. Try all the apps for free.",
        imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/566/0/icon-1741357275-67cb00db1ded3.png"
      },
      popupData: {
        initial: { title: "Did you manage to unblur your image?" },
        yesStep: {
          title: (
            /* HTML */
            `<span class="highlight">Fantastic!</span> Enhance
          images easily from now on`
          ),
          description: "Setapp makes image editing effortless with these powerful apps:",
          subnote: "Start enhancing your images today—FREE trial included!"
        },
        noStep: {
          title: (
            /* HTML */
            `<span class="highlight">No worries,</span> we have
          the perfect solution!`
          ),
          description: "Effortlessly fix blurry images using Setapp’s reliable apps:",
          subnote: "Start enhancing your images today—FREE trial included!"
        },
        applist: [
          {
            title: "Luminar ",
            description: "quickly sharpen and enhance your images",
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/566/0/icon-1741357275-67cb00db1ded3.png"
          },
          {
            title: "TouchRetouch",
            description: "easily remove unwanted objects from photos",
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/298/8541/icon-1691068510-64cba85e8b087.png"
          },
          {
            title: "CameraBag Pro",
            description: "powerful filters and photo editing tools",
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/299/42088/icon-1742267911-67d8e607487c0.png"
          }
        ]
      }
    },
    {
      link: "/how-to/tiktok-banned-reasons-and-solutions",
      title: "TikTok banned: Reasons and solutions",
      description: "Find out ways to unblock TikTok or work around its regional content restrictions, keeping your web browsing secure and anonymous.",
      headerBlock: {
        title: "Safely access content anywhere in the world",
        description: "Learn to connect to the web using secure VPN protocols and find other ways to optimize your productivity with 240+ apps on Setapp",
        imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/433/42254/icon-1743694727-67eeab8756821.png"
      },
      popupData: {
        initial: { title: "Did you resolve your TikTok ban issue?" },
        yesStep: {
          title: (
            /* HTML */
            `<span class="highlight">Great!</span> Stay
          trouble-free on TikTok.`
          ),
          description: "Setapp helps keep your online presence smooth and secure with these powerful apps:",
          subnote: "Ensure uninterrupted social media access—start FREE today!"
        },
        noStep: {
          title: (
            /* HTML */
            `<span class="highlight">Don't worry,</span> we can
          help you fix this!`
          ),
          description: "Quickly resolve TikTok bans and avoid future issues with these Setapp apps:",
          subnote: "Get back on TikTok now—try Setapp FREE today!"
        },
        applist: [
          {
            title: "ClearVPN",
            description: "safely browse and unblock restricted content",
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/433/42254/icon-1743694727-67eeab8756821.png"
          },
          {
            title: "AdLock",
            description: "block unwanted ads and trackers",
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/517/41861/icon-1740384397-67bc288ddd017.png"
          },
          {
            title: "Secrets 4",
            description: "securely manage passwords and logins",
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/587/41798/icon-1739292259-67ab7e63760de.png"
          }
        ]
      }
    },
    {
      link: "/how-to/open-rar-files-on-mac",
      title: "How to open RAR files on Mac",
      description: "Learn how to effortlessly open RAR files on Mac and how to extract .rar files using Terminal with step-by-step instructions.",
      headerBlock: {
        title: "Easy drag-and-drop compression for RAR, ZIP, and more on Mac",
        description: "Macs don’t have native support for compressed folders. With Setapp’s Archiver, customize your (de)compression or preview your file without unpacking",
        imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/194/10197/icon-1711963165-660a7c1d7fdbc.png"
      },
      popupData: {
        initial: { title: "Were you able to open your RAR file on Mac?" },
        yesStep: {
          title: (
            /* HTML */
            `<span class="highlight">Awesome!</span> Now make file
          management even easier.`
          ),
          description: "Setapp gives you all the tools you need to handle archives and files like a pro:",
          subnote: "Make file handling a breeze—start your FREE trial now!"
        },
        noStep: {
          title: (
            /* HTML */
            `<span class="highlight">Don’t worry,</span> we’ve got
          the tool for you!`
          ),
          description: "Instantly open RAR files on your Mac with help from Setapp apps:",
          subnote: "Open any file easily—try Setapp FREE today!"
        },
        applist: [
          {
            title: "Archiver",
            description: "open, create, and manage RAR and other archives",
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/194/10197/icon-1711963165-660a7c1d7fdbc.png"
          },
          {
            title: "CleanMyMac X",
            description: "keep your Mac organized and fast",
            imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/399/42535/icon-681c5b30e19c0.jpg"
          }
        ]
      }
    }
  ], m = (d, e, t) => {
    var o;
    const n = {
      event: "crs-setapp",
      eventCategory: d,
      eventAction: e,
      eventLabel: t,
      eventLabel2: "",
      //cd8
      eventValue: "",
      eventNonInteraction: !0,
      intercomLoaded: !0
    };
    (o = window == null ? void 0 : window.dataLayer) == null || o.push(n), console.log(n);
  }, L = `.article header + .article__header-image {
  display: none;
}

.site-navigation__bar {
  background: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.21);
}

.layout__main > header {
  position: relative;
  padding-block: 88px;
  background: #424e81;
}

.layout__main > header::after {
  content: '';
  position: absolute;

  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="210" height="132" fill="none"><path fill="%23FFD0B5" d="M261.435 130.747c-37.247 59.987-112.474 76.157-172.77 37.498C28.37 129.587 8.917 95.342 22.847 85.533c-5.56-9.977 3.644-17.056 3.644-17.056-3.932-3.356-8.399-6.186-13.116-8.242-8.69-4.04-5.004-15.747 10.842-13.162 18.691 3.122 37.233 20.39 41.904 20.687 4.67.296 2.296-13.12 9.812-13.482 7.516-.363 6.356 19.616 32.661 38.061 25.241 17.699 106.039 61.077 113.065 34.916 7.027-26.16 39.776 3.492 39.776 3.492Z"/><mask id="a" width="237" height="136" x="9" y="47" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="%23EED2BB" d="M245.946 119.69c-38.367 59.54-97.792 82.082-157.962 45.317C27.813 128.243 8.71 95.028 22.88 85.143c-5.457-9.68 3.913-16.797 3.913-16.797-3.912-3.216-8.37-5.906-13.091-7.833-8.694-3.796-4.815-15.348 11.106-13.115 18.78 2.705 37.206 19.288 41.905 19.49 4.7.201 2.5-12.91 10.075-13.41 7.575-.499 6.12 19.117 32.349 36.706 25.167 16.877 89.351 52.629 96.801 26.839 7.45-25.79 40.008 2.667 40.008 2.667Z"/></mask><g fill="%23161616" fill-rule="evenodd" clip-rule="evenodd" mask="url(%23a)"><path d="M22.841 70.036c.19.644.847.972 1.47.732 9.176-3.537 19.163-.076 23.952 4.76 2.43 2.453 3.188 4.888 2.52 6.722-.675 1.854-3.096 3.927-8.94 5.012-.646.12-1.11.766-1.037 1.443.073.676.656 1.128 1.303 1.008 6.01-1.116 9.678-3.434 10.866-6.697 1.196-3.282-.408-6.689-3.03-9.338-5.314-5.366-16.186-9.147-26.318-5.242-.623.24-.975.956-.786 1.6Z"/><path d="M17.62 88.23c.236.621.918.89 1.523.602 6.157-2.94 12.684-2.741 17.72-.94 2.517.9 4.617 2.185 6.094 3.627 1.486 1.451 2.25 2.97 2.328 4.339.063 1.955-1.031 3.691-3.063 4.538-2.07.863-5.217.812-9-1.3-.558-.313-1.28-.071-1.61.538-.33.61-.146 1.356.412 1.668 4.18 2.334 8.041 2.601 10.942 1.392 2.935-1.223 4.777-3.942 4.667-7.093v-.025c-.12-2.201-1.3-4.24-3.023-5.923-1.738-1.698-4.12-3.13-6.87-4.114-5.5-1.966-12.652-2.202-19.453 1.045a1.332 1.332 0 0 0-.667 1.646Z"/></g><path fill="%23C8C8F0" d="m143.763 59.015-.625 1.714c-1.11 3.056-2.845 5.814-5.066 7.976l-.902.895c.208.223.416.372.555.596 3.192 3.503 5.135 8.125 5.482 12.97l.556 6.187.555-6.187c.416-4.845 2.359-9.467 5.482-12.97l.555-.596-.902-.895c-2.221-2.236-3.956-4.994-5.066-7.976l-.624-1.714ZM169.581 13.107l-.481 1.46c-.854 2.604-2.188 4.89-3.897 6.795l-.694.762c.161.19.321.318.428.508 2.455 2.984 3.95 6.921 4.217 11.049l.427 5.27.427-5.27c.32-4.128 1.762-8.064 4.217-11.049l.427-.508-.694-.762c-1.708-1.905-3.043-4.254-3.897-6.794l-.48-1.46Z"/></svg>');
  background-repeat: no-repeat;
  background-position: bottom right;
  z-index: 0;
}

.layout__main > header .page-header-wrapper {
  position: relative;
  z-index: 1;
}
@media (max-width: 992px) {
  .layout__main > header {
    padding-block: 0;
  }

  .layout__main > header::after {
    display: none;
  }
}

.layout__main > header .post-header {
  margin: 0;
  padding: 0;
}

.layout__main > header .post-header__search {
  display: none;
}

.layout__main
  > header
  .breadcrumbs
  :is(.breadcrumbs__link, .breadcrumbs__item) {
  color: #fff;
}

.layout__main > header .breadcrumbs {
  margin: 0;
}

@media (max-width: 992px) {
  .layout__main > header .breadcrumbs {
    margin-top: 12px;
  }
}

.crs-hero-inner {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

@media (max-width: 992px) {
  .crs-hero-inner {
    flex-direction: column;
    gap: 32px;
  }
}
.crs-hero-text {
  max-width: 541px;
}

@media (max-width: 992px) {
  .crs-hero-text {
    max-width: 100%;
  }
}
.crs-hero-text h1 {
  margin-top: 18px;
  color: #fff;
  font-size: 46px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 1.3px;
}

@media (max-width: 992px) {
  .crs-hero-text h1 {
    font-size: 38px;
    line-height: 52px;
    letter-spacing: 1px;
  }
}

.crs-hero-description {
  margin-top: 24px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
@media (max-width: 992px) {
  .crs-hero-description {
    margin-top: 16px;
  }
}

.crs-hero-solution {
  max-width: 561px;
}

@media (max-width: 992px) {
  .crs-hero-solution {
    position: relative;
    max-width: 100%;
  }
}

.crs-hero-solution-note {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 172px;
  padding: 8px 24px;
  border-radius: 24px 24px 0px 0px;
  background: #c8c8f0;
  text-align: center;
  color: #26262b;
  font-size: 14px;
  font-weight: 450;
  line-height: 18px;
}

@media (max-width: 992px) {
  .crs-hero-solution-note {
    justify-content: center;
    max-width: 100%;
  }
}

.crs-hero-solution-note::before {
  content: '';
  width: 16px;
  height: 16px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="%2326262B" fill-rule="evenodd" d="M14.009 3.39a1.5 1.5 0 0 1 .1 2.119l-6.363 7a1.5 1.5 0 0 1-2.152.069l-3.137-3a1.5 1.5 0 1 1 2.086-2.156l2.024 1.924 5.323-5.855a1.5 1.5 0 0 1 2.119-.101Z" clip-rule="evenodd"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.crs-solution-inner {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  border-radius: 0px 24px 24px 24px;
  background: #fff;
  padding: 24px;
}

@media (max-width: 992px) {
  .crs-solution-inner {
    padding: 24px 18px 16px;
    border-radius: 0;
  }
  .crs-solution-inner:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="132" height="119" fill="none"><path fill="%23FFD0B5" d="M187.88 93.791c-26.868 43.272-81.133 54.936-124.627 27.05S5.727 68.252 15.775 61.177c-4.01-7.197 2.629-12.304 2.629-12.304-2.837-2.42-6.059-4.462-9.462-5.945-6.268-2.914-3.609-11.36 7.822-9.495 13.482 2.252 26.858 14.709 30.226 14.923 3.37.214 1.657-9.464 7.079-9.726 5.422-.261 4.584 14.15 23.56 27.456 18.207 12.767 76.49 44.058 81.559 25.187 5.068-18.871 28.692 2.519 28.692 2.519Z"/><mask id="a" width="172" height="99" x="5" y="33" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="%23EED2BB" d="M176.702 85.814c-27.676 42.95-70.542 59.21-113.946 32.69-43.404-26.52-57.183-50.48-46.963-57.61-3.936-6.982 2.823-12.116 2.823-12.116a36.984 36.984 0 0 0-9.443-5.65c-6.271-2.74-3.473-11.072 8.012-9.461C30.73 35.618 44.023 47.58 47.413 47.726c3.39.145 1.803-9.313 7.267-9.673 5.464-.36 4.415 13.79 23.335 26.478 18.154 12.173 64.454 37.963 69.827 19.36 5.374-18.604 28.86 1.923 28.86 1.923Z"/></mask><g fill="%23161616" fill-rule="evenodd" clip-rule="evenodd" mask="url(%23a)"><path d="M15.766 49.997c.137.465.611.701 1.06.528 6.62-2.551 13.823-.055 17.279 3.434 1.752 1.77 2.3 3.526 1.817 4.849-.486 1.337-2.233 2.832-6.449 3.615-.466.087-.8.552-.748 1.04.053.489.474.815.94.728 4.335-.805 6.982-2.477 7.839-4.83.862-2.368-.295-4.826-2.186-6.736-3.834-3.871-11.676-6.6-18.985-3.782a.966.966 0 0 0-.567 1.154Z"/><path d="M12 63.121a.79.79 0 0 0 1.098.434 16.78 16.78 0 0 1 12.783-.678c1.814.65 3.33 1.577 4.395 2.617 1.072 1.046 1.623 2.142 1.68 3.13.045 1.41-.745 2.662-2.21 3.273-1.494.622-3.763.586-6.492-.938-.403-.225-.923-.051-1.161.388-.239.44-.106.979.297 1.204 3.015 1.683 5.8 1.876 7.892 1.004 2.118-.883 3.446-2.844 3.367-5.117v-.018c-.086-1.588-.937-3.058-2.18-4.273-1.254-1.224-2.972-2.257-4.957-2.967a18.4 18.4 0 0 0-14.032.754.961.961 0 0 0-.48 1.187Z"/></g><path fill="%23C8C8F0" d="m102.996 42.049-.45 1.237c-.801 2.204-2.053 4.194-3.655 5.753l-.65.645c.15.162.3.27.4.43 2.303 2.528 3.704 5.861 3.955 9.356l.4 4.463.401-4.463c.3-3.495 1.702-6.828 3.954-9.356.151-.16.301-.322.401-.43l-.651-.645c-1.602-1.613-2.853-3.603-3.654-5.753l-.451-1.237ZM121.621 8.934l-.347 1.053a13.683 13.683 0 0 1-2.811 4.901l-.5.55c.115.137.231.229.308.366 1.771 2.153 2.849 4.993 3.042 7.97l.308 3.802.308-3.802c.231-2.977 1.271-5.817 3.042-7.97l.308-.366-.5-.55c-1.233-1.374-2.195-3.069-2.811-4.901l-.347-1.053Z"/></svg>');
    background-repeat: no-repeat;
    background-position: bottom right;
    z-index: 1;
  }
}

.crs-solution-content {
  position: relative;
  z-index: 2;
}
.crs-solution-title {
  color: #26262b;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 1px;
}

@media (max-width: 992px) {
  .crs-solution-title {
    letter-spacing: 1.15px;
  }
}

.crs-solution-description {
  margin-top: 4px;
  color: #26262b;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

@media (max-width: 992px) {
  .crs-solution-description {
    margin-top: 12px;
  }
}

.crs-solution-actions {
  margin-top: 24px;
  display: flex;
  gap: 24px;
}

@media (max-width: 992px) {
  .crs-solution-actions {
    flex-direction: column;
    gap: 12px;
    align-items: center;
    max-width: 259px;
  }

  .crs-solution-actions > * {
    width: 100%;
  }
}

.crs-solution-security {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #26262b;
  font-size: 14px;
  font-weight: 450;
  line-height: 20.02px;
}

.crs-solution-security::before {
  content: '';
  width: 14px;
  height: 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="none"><g clip-path="url(%23a)"><path fill="%2326262B" fill-rule="evenodd" d="M7.564.166a2 2 0 0 0-1.128 0L0 2.053v6.389a7 7 0 0 0 4.362 6.483l1.884.766a2.002 2.002 0 0 0 1.508 0l1.883-.766A7 7 0 0 0 14 8.444v-6.39L7.564.167ZM7 2.085 2 3.552v4.89a5 5 0 0 0 3.116 4.632L7 13.84V2.085Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="%23fff" d="M0 0h14v16H0z"/></clipPath></defs></svg>');
}

.crs-search {
  --active-width: 766px;
  position: relative;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

@media (max-width: 1280px) {
  .crs-search {
    width: 100%;
    margin-inline: 30px;
  }
}

.crs-search[data-status='active'] {
  width: var(--active-width);
  max-width: 80vw;
}
.crs-search form {
  max-width: 0;
  overflow: hidden;
  transition: max-width 0.2s cubic-bezier(0.4, 0, 0.2, 1), padding 0.2s;
  display: none;
  padding: 0;
}

.crs-search .search__input {
  margin: 0 !important;
}
.crs-search-form-animate {
  width: 100%;
  max-width: 100% !important;
  padding: 0 12px;
  display: block !important;
}

.search-close-button {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  padding: 6px;
  background: none;
  border: none;
  color: #424e81;
  font-size: 16px;
  cursor: pointer;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none"><path fill="%2326262B" d="M13.85 5.016c.648-.649 1.646-.697 2.228-.108.583.59.53 1.592-.117 2.24l-3.349 3.35 3.365 3.37c.646.647.69 1.64.095 2.218-.594.577-1.6.52-2.247-.127l-3.333-3.337-3.357 3.362c-.648.649-1.645.697-2.228.108-.582-.59-.53-1.592.117-2.24L8.372 10.5 5.005 7.129c-.647-.648-.69-1.641-.096-2.219.594-.577 1.6-.52 2.247.127l3.336 3.34 3.359-3.361Z"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.search-button {
  width: 32px;
  height: 32px;
  background-color: transparent;
  background-image: url('https://cdn.setapp.com/master-731a4d2d754f61748ef2fc458fef61a7e6cf2144-415/build/main/d0c5d73ccb63c5effda5.svg');
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
}

@media (max-width: 576px) {
  .site-navigation__content.search-active .site-navigation__logo {
    display: none !important;
  }
  .site-navigation__logo {
    display: block !important;
  }
}
`;
  class P {
    constructor() {
      console.info("HeroSection"), this.isMobileHeader = window.innerWidth < 1280, this.init(), window.addEventListener("resize", this.handleResize.bind(this));
    }
    init() {
      this.addStyles(), this.render(), this.changeTitlePosition(), this.renderNewSearch(), this.eventListeners();
    }
    handleResize() {
      const e = this.isMobileHeader;
      this.isMobileHeader = window.innerWidth < 1280, e !== this.isMobileHeader && this.moveSearchElement();
    }
    moveSearchElement() {
      var o;
      const e = document.querySelector(".crs-search");
      if (!e) return;
      (o = e.parentElement) == null || o.removeChild(e);
      const t = document.querySelector(
        ".site-navigation__menu-list .site-navigation__item-divider"
      ), n = document.querySelector(
        ".site-navigation__signup-button"
      );
      !this.isMobileHeader && t && t.insertAdjacentElement("beforebegin", e), this.isMobileHeader && n && n.insertAdjacentElement("beforebegin", e);
    }
    render() {
      var l;
      const e = window.location.pathname, t = f.find(
        (c) => e.includes(c.link)
      );
      if (!t) {
        console.error("No article found for the current path");
        return;
      }
      const {
        description: n,
        headerBlock: {
          description: o,
          title: i,
          imgSrc: r
        }
      } = t, s = (
        /* HTML */
        `<div class="crs-hero">
      <div class="crs-hero-inner">
        <div class="crs-hero-text">
          <div class="crs-title-wrap" id="crs-title-wrap"></div>
          <div class="crs-hero-description">${n}</div>
        </div>
        <div class="crs-hero-solution">
          <div class="crs-hero-solution-note">Fastest solution</div>
          <div class="crs-solution-inner">
            <div class="crs-solution-content">
              <div class="crs-solution-title">${i}</div>
              <div class="crs-solution-description">
                ${o}
              </div>
              <div class="crs-solution-actions">
                <button
                  class="btn btn_md btn_primary accept-button"
                  id="crs-download"
                >
                  Download now
                </button>
                <div class="crs-solution-security">Security-tested</div>
              </div>
            </div>
            <div class="crs-solution-image">
              <img
                src="${r}"
                alt=""
                width="112"
                height="112"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>`
      );
      (l = document.querySelector("header > .page-header-wrapper")) == null || l.insertAdjacentHTML("beforeend", s);
    }
    changeTitlePosition() {
      const e = document.querySelector("h1"), t = document.querySelector("#crs-title-wrap");
      !e || !t || t.appendChild(e);
    }
    renderNewSearch() {
      document.querySelectorAll(".crs-search").forEach((o) => o.remove());
      const e = (
        /* HTML */
        `<div class="crs-search search js-search-block ">
      <button class="search-button"></button>
      <form
        action="https://setapp.com/blog"
        method="GET"
        class=""
        style="display: none"
      >
        <label for="blog-post-header-search" class="sr-only"
          >Search articles</label
        >
        <input
          class="search__input js-search-input"
          type="search"
          minlength="3"
          name="q"
          placeholder="Search"
          id=""
        />
      </form>
      <button
        type="button"
        class="search__close-btn js-close-btn search__close-btn_hidden"
        aria-label="Close search field"
      >
        <img
          src="https://cdn.setapp.com/master-731a4d2d754f61748ef2fc458fef61a7e6cf2144-415/static/main/images/pages/blog/close-icon.svg"
          alt="Close icon"
          width="20"
          height="20"
        />
      </button>
    </div>`
      ), t = document.querySelector(
        ".site-navigation__menu-list .site-navigation__item-divider"
      ), n = document.querySelector(
        ".site-navigation__signup-button"
      );
      !this.isMobileHeader && t && (t.insertAdjacentHTML("beforebegin", e), t.previousElementSibling), this.isMobileHeader && n && (n.insertAdjacentHTML("beforebegin", e), n.previousElementSibling);
    }
    eventListeners() {
      const e = document.querySelector(".site-navigation__menu-list"), t = document.querySelector(".crs-search"), n = t == null ? void 0 : t.querySelector(
        ".search-button"
      ), o = t == null ? void 0 : t.querySelector(
        "form"
      ), i = t == null ? void 0 : t.querySelector(".search__close-btn"), r = t == null ? void 0 : t.querySelector(
        ".js-search-input"
      ), s = document.querySelector(".site-navigation__content");
      if (e && t && n && o && i && r) {
        const c = () => {
          for (const g of Array.from(e.children)) {
            if (g === t)
              break;
            g.tagName === "LI" && (g.style.display = "none");
          }
          t.dataset.status = "active", o.style.display = "block", o.offsetWidth, o.classList.add("crs-search-form-animate"), n.style.display = "none", i.style.display = "";
          const h = o.querySelector("input");
          h && setTimeout(() => h.focus(), 200), window.innerWidth < 576 && s && s.classList.add("search-active"), m("Blog Article", "Click - Search", "Header");
        }, p = () => {
          t.dataset.status = "inactive", o.classList.remove("crs-search-form-animate"), setTimeout(() => {
            o.style.display = "none";
          }, 200), n.style.display = "", i.style.display = "none", r.value = "";
          for (const h of Array.from(e.children)) {
            if (h === t) break;
            h.tagName === "LI" && (h.style.display = "");
          }
          s && s.classList.remove("search-active");
        };
        n.addEventListener("click", c), i == null || i.addEventListener("click", p), r.addEventListener("focus", () => {
          i == null || i.classList.remove("search__close-btn_hidden");
        }), r.addEventListener("blur", p);
      }
      const l = document.querySelector("#crs-download");
      l == null || l.addEventListener("click", async () => {
        document.querySelectorAll(
          'a[href*="signup"].promo-new-banner__cta-btn, a[href*="signup"].promo-banner__cta-btn'
        ).forEach((p) => {
          p == null || p.click();
        }), m("Blog Article", "Click - Download now", "First screen");
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = L, document.head.appendChild(e);
    }
  }
  const M = `/* CRS Popup backdrop */
.crs-popup-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 9998;
}
.crs-popup-backdrop--visible {
  opacity: 1;
}

/* CRS Popup window */
.crs-popup {
  --max-height: 95dvh;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.95);
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  width: 100%;
  max-width: 866px;
  max-height:  95dvh;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  z-index: 99999998;
  display: flex;
  flex-direction: column;
}
.crs-popup--visible {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

body:has(.crs-popup--visible) {
  overflow: hidden;
}

.crs-popup__close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1;
}

.crs-popup__header {
  padding-top: 20px;
  padding-inline: 20px;
}

.crs-popup__content {
  position: relative;
  padding: 24px 20px 32px;
}

/* Mobile styles */
@media (max-width: 600px) {
  .crs-popup {
    left: 50%;
    top: auto;
    bottom: 0;
    transform: translate(-50%, 20px) scale(0.95);
    border-radius: 16px 16px 0 0;
    min-width: unset;
    width: 100vw;
    max-width: 100vw;
    max-height: 95dvh;
  }
  .crs-popup--visible {
    transform: translate(-50%, 0) scale(1);
  }
  .crs-popup__content {
    padding: 24px 12px 16px 12px;
  }
}
`;
  class q {
    constructor() {
      this.popupElement = null, this.backdropElement = null, this.isOpen = !1, this.init();
    }
    init() {
      this.addStyles();
    }
    /**
     * Opens the popup with the provided content
     * @param content HTML string or DOM element
     */
    open(e) {
      this.isOpen || (this.isOpen = !0, this.render(e), setTimeout(() => {
        var t, n;
        (t = this.popupElement) == null || t.classList.add("crs-popup--visible"), (n = this.backdropElement) == null || n.classList.add("crs-popup-backdrop--visible");
      }, 10));
    }
    /**
     * Closes the popup
     */
    close() {
      var e, t;
      this.isOpen && ((e = this.popupElement) == null || e.classList.remove("crs-popup--visible"), (t = this.backdropElement) == null || t.classList.remove("crs-popup-backdrop--visible"), setTimeout(() => {
        var n, o;
        (n = this.popupElement) == null || n.remove(), (o = this.backdropElement) == null || o.remove(), this.popupElement = null, this.backdropElement = null, this.isOpen = !1;
      }, 200));
    }
    render(e) {
      this.backdropElement = document.createElement("div"), this.backdropElement.className = "crs-popup-backdrop", this.backdropElement.addEventListener("click", () => {
        this.close(), m(
          "Blog Article",
          "Click - Close",
          "Popup - Wait! Before you go..."
        );
      }), this.popupElement = document.createElement("div"), this.popupElement.className = "crs-popup";
      const t = document.createElement("div");
      t.className = "crs-popup__header", t.innerHTML = `
      <div class="logo">
        <svg class="logo__symbol" xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 19 30">
          <path fill-rule="evenodd" d="M10.694 9.987l3.372 3.404a.748.748 0 0 0 1.065 0l3.372-3.404a.764.764 0 0 0 0-1.075L15.13 5.508a.748.748 0 0 0-1.065 0l-3.372 3.404a.766.766 0 0 0 0 1.075zM8.829 8.106a.748.748 0 0 0 1.065 0l3.373-3.404a.765.765 0 0 0 0-1.076L9.894.222a.748.748 0 0 0-1.065 0L5.458 3.626a.764.764 0 0 0 0 1.076l3.371 3.404zm0 2.688l-3.371 3.404a.764.764 0 0 0 0 1.076l3.371 3.403a.747.747 0 0 0 1.065 0l3.373-3.403a.765.765 0 0 0 0-1.076l-3.373-3.404a.748.748 0 0 0-1.065 0zm-5.236 2.598a.748.748 0 0 0 1.065 0L8.03 9.988a.767.767 0 0 0 0-1.076L4.658 5.509a.747.747 0 0 0-1.065 0L.221 8.912a.765.765 0 0 0 0 1.076l3.372 3.404zm11.538 2.688a.748.748 0 0 0-1.065 0l-3.373 3.404a.766.766 0 0 0 0 1.075l3.373 3.404a.749.749 0 0 0 1.065 0l3.372-3.404a.764.764 0 0 0 0-1.076L15.13 16.08zm-5.237 5.285a.748.748 0 0 0-1.065 0l-3.372 3.404a.765.765 0 0 0 0 1.076l3.372 3.404a.748.748 0 0 0 1.065 0l3.373-3.404a.764.764 0 0 0 0-1.076l-3.373-3.404zm-1.863-1.881L4.658 16.08a.748.748 0 0 0-1.065 0L.22 19.484a.766.766 0 0 0 0 1.075l3.372 3.404a.75.75 0 0 0 1.066 0L8.03 20.56a.766.766 0 0 0 0-1.075z"></path>
        </svg>
        <svg class="logo__caption" xmlns="http://www.w3.org/2000/svg" width="76" height="16" viewBox="0 0 70 14">
          <path fill-rule="evenodd" d="M7.563 9.83c0-.303-.062-.57-.187-.8a1.878 1.878 0 0 0-.53-.608 3.613 3.613 0 0 0-.814-.461 10.83 10.83 0 0 0-1.029-.363 11.664 11.664 0 0 1-1.47-.543 5.625 5.625 0 0 1-1.292-.793 3.84 3.84 0 0 1-.92-1.093c-.234-.418-.35-.901-.35-1.45 0-.548.116-1.04.35-1.475a3.45 3.45 0 0 1 .942-1.108c.393-.303.85-.536 1.37-.7A5.392 5.392 0 0 1 5.264.191c.607 0 1.175.094 1.705.284.528.19.991.455 1.386.797.397.342.711.75.942 1.226.208.428.325.896.35 1.407a.168.168 0 0 1-.166.173H7.718a.167.167 0 0 1-.163-.148 2.999 2.999 0 0 0-.188-.732 2.033 2.033 0 0 0-.45-.687 1.996 1.996 0 0 0-.708-.447 2.73 2.73 0 0 0-.963-.157c-.312 0-.6.04-.867.122a2.028 2.028 0 0 0-.69.36 1.68 1.68 0 0 0-.455.568c-.11.222-.165.473-.165.753 0 .298.076.556.226.776.15.218.346.41.59.573.242.163.521.305.837.424.314.12.643.23.984.33.526.156 1.03.35 1.509.582.48.23.902.507 1.267.83.364.324.653.7.867 1.126.214.426.321.914.321 1.462 0 .567-.118 1.065-.355 1.498a3.29 3.29 0 0 1-.955 1.085c-.399.292-.861.513-1.387.661a6.035 6.035 0 0 1-2.802.11 5.418 5.418 0 0 1-1.098-.341 4.877 4.877 0 0 1-.975-.566 3.899 3.899 0 0 1-.786-.779 3.608 3.608 0 0 1-.718-2.02.166.166 0 0 1 .166-.173h1.777c.08 0 .147.062.155.143.038.325.117.614.238.863.14.287.324.525.556.714.231.19.502.333.81.43.31.096.652.144 1.028.144.313 0 .605-.038.877-.114.272-.075.508-.188.71-.337.203-.149.363-.333.478-.552.116-.219.174-.468.174-.749zm12.58-2.434h-5.035v4.002h5.918c.09 0 .162.073.162.163v1.39c0 .09-.071.163-.162.163H13.18a.162.162 0 0 1-.162-.162V.528c0-.09.072-.162.162-.162h7.787c.09 0 .161.072.161.162v1.409a.16.16 0 0 1-.16.162h-5.86v3.599h5.036c.088 0 .16.073.16.162v1.375c0 .09-.072.161-.16.161zM33.587 2.1H29.87v10.853c0 .089-.073.162-.161.162h-1.751a.161.161 0 0 1-.16-.162V2.099h-3.691a.161.161 0 0 1-.162-.162V.528c0-.09.072-.162.162-.162h9.48c.088 0 .16.072.16.162v1.409a.16.16 0 0 1-.16.162zm9.24 8.055h-3.945l-.834 2.843a.161.161 0 0 1-.154.117h-1.81a.163.163 0 0 1-.153-.213L39.93.478a.16.16 0 0 1 .153-.112h1.596a.16.16 0 0 1 .153.113l3.922 12.423a.162.162 0 0 1-.153.212h-1.802a.16.16 0 0 1-.153-.118l-.817-2.841zM39.41 8.36h2.898L40.877 3.36l-1.467 5zm11.845-.13v4.723c0 .089-.072.162-.161.162h-1.76a.162.162 0 0 1-.161-.162V.528c0-.09.072-.162.16-.162h4.064c.63.005 1.213.1 1.748.284.535.185.996.447 1.384.788.387.342.689.757.906 1.243.217.488.325 1.038.325 1.651 0 .595-.108 1.132-.325 1.611-.217.48-.519.888-.906 1.226-.388.339-.85.599-1.384.78a5.594 5.594 0 0 1-1.748.28h-2.142zm0-1.699h2.142c.354 0 .668-.054.946-.162.278-.108.514-.258.712-.451.196-.193.346-.423.45-.692.104-.268.156-.56.156-.875 0-.333-.052-.64-.157-.92a2.032 2.032 0 0 0-.45-.723 2.055 2.055 0 0 0-.71-.468 2.678 2.678 0 0 0-.947-.175h-2.142V6.53zm11.486 1.698v4.642a.243.243 0 0 1-.241.244h-1.6a.242.242 0 0 1-.24-.244V.61c0-.135.107-.244.24-.244h3.984c.63.005 1.213.1 1.748.284.535.185.996.447 1.383.788.388.342.69.757.907 1.243.217.488.326 1.038.326 1.651 0 .595-.109 1.132-.326 1.611-.217.48-.52.888-.906 1.226a4.048 4.048 0 0 1-1.384.78 5.603 5.603 0 0 1-1.748.28h-2.142zm0-1.698h2.143c.353 0 .668-.054.945-.162.278-.108.515-.258.711-.451.197-.193.348-.423.452-.692.104-.268.156-.56.156-.875 0-.333-.052-.64-.156-.92a2.037 2.037 0 0 0-.452-.723 2.04 2.04 0 0 0-.711-.468 2.67 2.67 0 0 0-.945-.175h-2.142V6.53z"></path>
        </svg>
        <svg class="logo__by-macpaw " width="71" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 12">
          <path fill-rule="evenodd" d="M7.627 12c-.342 0-.805-.055-1.128-.21v-1.591c.222.155.474.265.786.265.282 0 .584-.133.825-.475L5.966 3.978h1.812L8.986 8h.07l.977-4.022h1.742l-1.862 6.143C9.68 10.873 9.157 12 7.627 12zM3.312 9.856c-.714 0-1.349-.298-1.782-.818-.03.233-.09.509-.14.686H0V1.768h1.752v2.674a2.246 2.246 0 0 1 1.56-.597h.07c1.43 0 2.478 1.216 2.478 2.851v.31c0 1.635-1.047 2.85-2.477 2.85h-.07zM2.85 8.497h.101c.624 0 1.097-.663 1.097-1.558v-.177c0-.895-.463-1.558-1.097-1.558h-.1c-.625 0-1.098.663-1.098 1.558v.177c0 .895.473 1.558 1.097 1.558zm18.029-7.073c-.232.143-.313.37-.198.583.114.212.329.246.557.106.228-.14.372-.45.275-.634-.098-.184-.397-.21-.634-.055zm-.035 1.112c-.2.125-.267.317-.174.5.094.183.283.211.482.089.198-.123.316-.385.236-.544-.08-.158-.346-.17-.544-.045zm-.086-1.344c-.232.143-.448.112-.558-.106-.11-.218-.03-.436.198-.584.229-.148.538-.13.635.056.097.186-.042.486-.275.634zm-.893-.52c-.199.127-.385.094-.482-.087-.096-.18-.024-.376.174-.5.198-.126.463-.113.544.046.081.158-.037.417-.236.542z"></path>
          <path fill-rule="evenodd" d="M20.45 10.74c-1.06 0-2.089-.404-2.909-1.143-.82-.738-1.381-1.766-1.588-2.909a5.467 5.467 0 0 1 .454-3.354c.5-1.027 1.31-1.832 2.29-2.277.27-.123.57-.14.85-.048.28.093.522.288.686.554a1.496 1.496 0 0 1-.146 1.753c-.122.129-.264.234-.418.31-.097.055-.203.106-.296.167-.29.196-.53.467-.701.79a2.434 2.434 0 0 0-.059 2.136c.153.333.378.62.657.834.278.214.6.35.938.392.338.044.68-.006.996-.144a2.07 2.07 0 0 0 .814-.646c.218-.286.368-.627.437-.992.02-.15.035-.303.042-.455a1.76 1.76 0 0 1 .067-.45c.098-.312.293-.575.55-.744.258-.17.562-.232.858-.178.296.054.566.221.76.473.194.251.3.57.3.9 0 1.333-.483 2.612-1.342 3.555-.86.943-2.024 1.474-3.24 1.476zm14.735-8.823c-.04 0-.08.014-.113.04a.212.212 0 0 0-.07.104l-1.557 5.137h-.022L31.866 2.06a.211.211 0 0 0-.07-.104.181.181 0 0 0-.112-.04h-2.408c-.05 0-.1.022-.136.061a.222.222 0 0 0-.056.15v7.409c0 .056.02.11.056.15.036.039.085.061.136.061h1.466c.051 0 .1-.022.136-.062a.222.222 0 0 0 .057-.15V4.828a.107.107 0 0 1 .03-.077.089.089 0 0 1 .071-.029c.02 0 .041.008.059.021.017.014.03.033.037.055l1.464 4.81a.211.211 0 0 0 .07.105c.033.026.072.04.113.04h1.31c.041 0 .08-.014.113-.04a.211.211 0 0 0 .07-.104l1.464-4.811a.113.113 0 0 1 .038-.055.097.097 0 0 1 .059-.02c.025 0 .05.01.068.03a.11.11 0 0 1 .028.075v4.71c0 .056.02.11.056.15.036.039.085.061.136.061h1.464c.051 0 .1-.022.136-.062a.222.222 0 0 0 .057-.15V2.129c0-.056-.02-.11-.056-.15a.184.184 0 0 0-.137-.061h-2.4zm11.452 4.987c0 .877.515 1.414 1.09 1.414.188.003.376-.04.548-.124a1.33 1.33 0 0 0 .452-.365.18.18 0 0 1 .257-.027l.905.74c.022.017.04.039.053.064a.225.225 0 0 1 .017.167.22.22 0 0 1-.038.076c-.536.686-1.282 1.057-2.247 1.057h-.091c-1.535 0-2.779-1.255-2.779-2.917v-.254c0-1.662 1.244-2.917 2.779-2.917h.091c.963 0 1.71.374 2.247 1.057.017.022.03.048.038.075a.23.23 0 0 1-.018.167.205.205 0 0 1-.052.065l-.905.74a.18.18 0 0 1-.257-.027 1.33 1.33 0 0 0-.452-.364 1.217 1.217 0 0 0-.549-.125c-.577 0-1.089.537-1.089 1.413v.085zm4.259-4.81c0-.055.02-.109.056-.149a.184.184 0 0 1 .137-.062h3.12c1.586 0 2.67 1.022 2.67 2.651v.113c0 1.64-1.06 2.685-2.67 2.685h-1.47v2.203c0 .056-.021.11-.057.15a.184.184 0 0 1-.137.062H51.09a.184.184 0 0 1-.137-.062.222.222 0 0 1-.056-.15v-7.44zm3.015 3.567c.635 0 1.12-.423 1.12-1.045V4.58c0-.595-.464-1.016-1.078-1.016h-1.215V5.66h1.173zm-15.18 2.505c0 .983.74 1.746 1.782 1.746.812 0 1.24-.38 1.614-.7.018.128.043.255.078.38a.213.213 0 0 0 .069.11.182.182 0 0 0 .115.042h1.273c.05 0 .1-.022.136-.062a.222.222 0 0 0 .056-.15V6.248c0-1.488-.896-2.456-2.311-2.456H41.4a4.487 4.487 0 0 0-2.266.604.198.198 0 0 0-.06.055.231.231 0 0 0-.013.244l.568 1.002a.196.196 0 0 0 .108.09.177.177 0 0 0 .134-.01c.552-.276.99-.374 1.387-.374.52 0 .825.345.825.927h-.367c-2.06 0-2.985.543-2.985 1.836zm1.563-.076c0-.495.727-.652 1.614-.652h.173v.634c-.144.167-.318.3-.511.391-.194.091-.401.138-.612.137-.343-.004-.668-.168-.668-.51h.004zm17.006.076c0 .983.74 1.746 1.782 1.746.812 0 1.24-.38 1.615-.7.017.128.043.255.077.38a.213.213 0 0 0 .069.11.182.182 0 0 0 .115.042h1.273c.05 0 .1-.023.136-.062a.222.222 0 0 0 .056-.15V6.248c0-1.489-.896-2.456-2.311-2.456h-.144a4.489 4.489 0 0 0-2.264.604.197.197 0 0 0-.06.055.231.231 0 0 0-.013.244l.569 1.002a.195.195 0 0 0 .107.09.177.177 0 0 0 .135-.01c.551-.276.99-.374 1.386-.374.52 0 .825.345.825.927h-.367c-2.058 0-2.986.543-2.986 1.836zm1.563-.076c0-.495.728-.652 1.614-.652h.173v.634a1.541 1.541 0 0 1-.511.392c-.193.09-.401.137-.611.136-.34-.004-.668-.168-.668-.51h.003zm6.506-.556l.784-3.464a.214.214 0 0 1 .068-.116.182.182 0 0 1 .118-.045h1.316c.043 0 .085.016.119.045.033.03.057.07.068.116l.788 3.465a.107.107 0 0 0 .036.059.09.09 0 0 0 .06.021.091.091 0 0 0 .064-.025.11.11 0 0 0 .033-.065l.417-3.432a.218.218 0 0 1 .065-.132.183.183 0 0 1 .128-.052h1.37c.03 0 .058.006.085.02.026.012.05.032.068.057a.232.232 0 0 1 .04.18l-1.06 5.415a.215.215 0 0 1-.068.122.182.182 0 0 1-.124.046h-1.712a.181.181 0 0 1-.115-.042.213.213 0 0 1-.07-.111l-.83-3.17h-.04l-.83 3.17a.213.213 0 0 1-.07.11.182.182 0 0 1-.115.043h-1.715a.182.182 0 0 1-.124-.046.216.216 0 0 1-.069-.122l-1.052-5.417a.232.232 0 0 1 .04-.18.195.195 0 0 1 .069-.057.178.178 0 0 1 .084-.02h1.374c.047 0 .093.019.128.053.036.034.059.08.065.132l.417 3.432a.109.109 0 0 0 .033.065c.017.017.04.026.063.025a.097.097 0 0 0 .059-.023.113.113 0 0 0 .035-.057z"></path>
        </svg>
      </div>
    `;
      const n = document.createElement("button");
      n.className = "btn modal__close crs-popup__close", n.setAttribute("aria-label", "Close"), n.addEventListener("click", () => {
        this.close(), m(
          "Blog Article",
          "Click - Close",
          "Popup - Wait! Before you go..."
        );
      });
      const o = document.createElement("div");
      o.className = "crs-popup__content", typeof e == "string" ? o.innerHTML = e : o.appendChild(e), o.addEventListener("click", (i) => {
        i.target.closest("[data-popup-close]") && this.close();
      }), this.popupElement.appendChild(t), this.popupElement.appendChild(n), this.popupElement.appendChild(o), document.body.appendChild(this.backdropElement), document.body.appendChild(this.popupElement);
    }
    setPopupMaxHeight() {
      const e = () => {
        const t = window.innerHeight * 0.95;
        this.popupElement && (this.popupElement.style.maxHeight = t + "px");
      };
      window.addEventListener("resize", e), e();
    }
    addStyles() {
      const e = document.createElement("style");
      e.innerHTML = M, document.head.appendChild(e);
    }
  }
  const z = `.crs-popup__content {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}

.crs-popup-content-wrap {
  margin-inline: auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}

.crs-popup-content-supnote {
  display: flex;
  justify-content: center;
  color: #26262b;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 1px;
}

@media (max-width: 992px) {
  .crs-popup-content-supnote {
    font-size: 18px;
    line-height: 24px;
  }
}

.crs-popup-content-supnote .highlight {
  color: #e6842e;
}

.crs-popup-content-title {
  margin-top: 8px;
  color: #26262b;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 1px;
}

@media (max-width: 992px) {
  .crs-popup-content-title {
    font-size: 26px;
    line-height: 38px;
  }
}

.crs-popup-content-title .highlight {
  color: #e6842e;
}

.crs-popup-content-description,
.crs-popup-content-description--no {
  margin-top: 12px;
  padding-inline: 30px;
  color: #26262b;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 1px;
}

@media (max-width: 992px) {
  .crs-popup-content-description {
    padding-inline: 0;

    font-size: 16px;
    line-height: 24px;
  }
}

.crs-popup-content-description--no {
  font-weight: 400;
}

.crs-popup-content-description--no b {
  font-weight: 700;
}

.crs-popup-content-apps {
  margin-top: 24px;
}

.crs-popup-content-apps ul {
  margin: 0;
  margin-bottom: 12px;
  display: grid;
  gap: 12px;
  list-style: none;
}

@media (max-width: 992px) {
  .crs-popup-content-apps ul {
    padding: 0;
  }
}

.crs-popup-content-apps ul li {
  display: grid;
  grid-template-columns: 44px 1fr;
  column-gap: 10px;
}

.crs-popup-content-apps ul li img {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  width: 44px;
  height: 44px;
  border-radius: 28%;
}

.crs-popup-content-app-title {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  color: #26262b;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}

.crs-popup-content-app-description {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  color: #77767a;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.crs-popup-content-actions-note {
  margin-top: 12px;
  color: #e6842e;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1px;
}

@media (max-width: 992px) {
  .crs-popup-content-actions-note {
    font-size: 16px;
    line-height: 24px;
  }
}
.crs-popup-content-actions-wrap {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 16px;
}

.crs-popup-content-actions button {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 155px;
  min-height: 52px;
}

@media (max-width: 992px) {
  .crs-popup-content-actions button {
    max-width: 100%;
  }
}
.crs-popup-content-actions .crs-popup-cta {
  width: 100%;
  max-width: 100%;
}

.crs-popup-content-step {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
}

div[data-step] {
  flex-direction: column;
  height: 100%;
  min-height: 0;
}
`;
  class D {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles();
    }
    render(e) {
      if (!e) return;
      const { initial: t, yesStep: n, noStep: o, applist: i } = e;
      return (
        /* HTML */
        `
      <div class="crs-popup-content-wrap">
        <div data-step="1" style="display: block;">
          <div class="crs-popup-content-step">
            <div class="crs-popup-content-supnote">
              🖐 <span class="highlight">Wait!&nbsp; </span> Before you go...
            </div>
            <div class="crs-popup-content-title">${t.title}</div>
          </div>
          <div class="crs-popup-content-actions">
            <div class="crs-popup-content-actions-wrap">
              <button class="btn btn_sm btn_outline-primary">Yes</button>
              <button class="btn btn_sm btn_outline-primary no-button">
                No
              </button>
            </div>
          </div>
        </div>
        <div data-step="2" style="display: none">
          <div class="crs-popup-content-step">
            <div class="crs-popup-content-title">${n.title}</div>
            <div class="crs-popup-content-description">
              ${n.description || ""}
            </div>
            <div class="crs-popup-content-apps">
              <ul>
                ${i == null ? void 0 : i.map(
          (s) => (
            /* HTML */
            `
                      <li>
                        <img src="${s.imgSrc}" alt="${s.title}" />
                        <div class="crs-popup-content-app-title">
                          ${s.title}
                        </div>
                        <div class="crs-popup-content-app-description">
                          ${s.description}
                        </div>
                      </li>
                    `
          )
        ).join("")}
              </ul>
            </div>
          </div>
          <div class="crs-popup-content-actions">
            <div class="crs-popup-content-actions-note">
              ${n.subnote || ""}
            </div>
            <div class="crs-popup-content-actions-wrap">
              <button
                class="btn btn_md btn_primary accept-button crs-popup-cta"
                data-popup-close
              >
                Try Free
              </button>
            </div>
          </div>
        </div>
        <div data-step="3" style="display: none">
          <div class="crs-popup-content-step">
            <div class="crs-popup-content-title">${o.title}</div>
            <div class="crs-popup-content-description--no">
              ${o.description || ""}
            </div>
            <div class="crs-popup-content-apps">
              <ul>
                ${i == null ? void 0 : i.map(
          (s) => (
            /* HTML */
            `
                      <li>
                        <img src="${s.imgSrc}" alt="${s.title}" />
                        <div class="crs-popup-content-app-title">
                          ${s.title}
                        </div>
                        <div class="crs-popup-content-app-description">
                          ${s.description}
                        </div>
                      </li>
                    `
          )
        ).join("")}
              </ul>
            </div>
          </div>
          <div class="crs-popup-content-actions">
            <div class="crs-popup-content-actions-note">
              ${o.subnote || ""}
            </div>
            <div class="crs-popup-content-actions-wrap">
              <button
                class="btn btn_md btn_primary accept-button crs-popup-cta"
                data-popup-close
              >
                Try Free
              </button>
            </div>
          </div>
        </div>
      </div>
    `
      );
    }
    changeStep(e) {
      document.querySelectorAll("[data-step]").forEach((n) => {
        parseInt(n.getAttribute("data-step") || "0") === e ? n.style.display = "flex" : n.style.display = "none";
      });
    }
    initEvents() {
      const e = document.querySelector(
        ".crs-popup-content-actions button:nth-child(1)"
      ), t = document.querySelector(
        ".crs-popup-content-actions .no-button"
      ), n = document.querySelectorAll(
        ".crs-popup-content-actions .crs-popup-cta"
      );
      e && e.addEventListener("click", () => {
        this.changeStep(2), m(
          "Blog Article",
          "Click - Yes",
          "Popup - Wait! Before you go..."
        );
      }), t && t.addEventListener("click", () => {
        this.changeStep(3), m("Blog Article", "Click - No", "Popup - Wait! Before you go...");
      }), n.forEach((o) => {
        o == null || o.addEventListener("click", async () => {
          document.querySelectorAll(
            'a[href*="signup"].promo-new-banner__cta-btn, a[href*="signup"].promo-banner__cta-btn'
          ).forEach((r) => {
            r == null || r.click();
          }), m(
            "Blog Article",
            "Click - Try Free",
            "Popup - Wait! Before you go..."
          );
        });
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.innerHTML = z, document.head.appendChild(e);
    }
  }
  class T {
    constructor() {
      this.popup = new q(), this.popupContent = new D(), this.init();
    }
    init() {
      this.triggerPopup();
    }
    triggerPopup() {
      const e = window.location.pathname, t = f.find(
        (a) => e.includes(a.link)
      );
      if (!t) {
        console.error("No article found for the current path");
        return;
      }
      const n = `popup_shown_${e}`;
      let o = sessionStorage.getItem(n), i = !1, r = !1, s = !1;
      const l = window.innerWidth < 992, c = () => {
        if (o) return;
        sessionStorage.setItem(n, "1");
        const a = this.popupContent.render(t.popupData);
        a && (document.querySelector(".signup-modal.is-open") || (this.popup.open(a), this.popupContent.initEvents(), B(), m("Blog Article", "Load", "Popup - Wait! Before you go...")));
      }, p = [];
      let h;
      const g = () => {
        clearTimeout(h), h = setTimeout(() => {
          console.log("[POPUP TRIGGER] inactivity > 30s"), c();
        }, 3e4);
      };
      ["mousemove", "keydown", "scroll", "touchstart"].forEach((a) => {
        window.addEventListener(a, g), p.push(() => window.removeEventListener(a, g));
      }), g();
      const C = setTimeout(() => {
        console.log("[POPUP TRIGGER] time on page > 90s"), c();
      }, 9e4);
      p.push(() => clearTimeout(C));
      const A = setTimeout(() => {
        i = !0;
      }, 1e4);
      p.push(() => clearTimeout(A));
      const w = (a) => {
        if (!i || o) return;
        const u = a.clientY <= 0, F = a.clientX <= 0, j = a.clientX >= window.innerWidth, I = a.clientY >= window.innerHeight;
        (u || F || j || I) && (console.log("[POPUP TRIGGER] mouse leave"), c());
      };
      l || (document.addEventListener("mouseleave", w), p.push(
        () => document.removeEventListener("mouseleave", w)
      ));
      let v = window.scrollY, y = Date.now();
      const b = () => {
        const a = Date.now(), u = window.scrollY;
        v - u > 100 && a - y < 400 && (console.log("[POPUP TRIGGER] quick scroll up"), c()), v = u, y = a;
      };
      window.addEventListener("scroll", b), p.push(() => window.removeEventListener("scroll", b));
      const x = () => {
        const a = window.scrollY || document.documentElement.scrollTop, u = document.documentElement.scrollHeight - window.innerHeight;
        u > 0 && a / u > 0.9 && (console.log("[POPUP TRIGGER] scroll to 90-100%"), c());
      };
      window.addEventListener("scroll", x), p.push(() => window.removeEventListener("scroll", x));
      const k = () => {
        document.visibilityState === "hidden" && (r = !0), l && document.visibilityState === "visible" && r && !o && (console.log("[POPUP TRIGGER] tab visible again (mobile)"), c());
      };
      document.addEventListener("visibilitychange", k), p.push(
        () => document.removeEventListener("visibilitychange", k)
      );
      const S = (a) => {
        var u;
        l && !o && !s && ((u = a.preventDefault) == null || u.call(a), console.log("[POPUP TRIGGER] back button (mobile)"), c(), s = !0, setTimeout(() => {
          s = !1;
        }, 2e3), history.pushState(null, "", window.location.href));
      };
      l && (window.addEventListener("popstate", S), p.push(() => window.removeEventListener("popstate", S)), history.pushState(null, "", window.location.href));
      function B() {
        p.forEach((a) => a()), clearTimeout(h);
      }
    }
  }
  const R = [
    "/how-to/recover-deleted-photos-from-iphone",
    "/how-to/download-youtube-videos",
    "/how-to/how-to-recover-deleted-text-messages-on-iphone",
    "/how-to/how-to-recover-an-unsaved-word-document-on-mac",
    "/how-to/convert-youtube-to-mp3",
    "/how-to/download-facebook-video",
    "/how-to/how-to-recover-sd-card-on-mac",
    "/how-to/unblur-an-image",
    "/how-to/tiktok-banned-reasons-and-solutions",
    "/how-to/open-rar-files-on-mac"
  ];
  E({ name: "2nd Hero Section + Exit intent popup merge", dev: "OS" }), _("exp_blog_hero");
  class H {
    constructor() {
      this.init();
    }
    init() {
      const e = window.location.pathname;
      if (!R.includes(e)) {
        console.log("Current page is not in blogLinks");
        return;
      }
      new P(), new T();
    }
  }
  new H();
})();
