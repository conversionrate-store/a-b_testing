(function() {
  "use strict";
  const h = (n) => new Promise((e) => {
    const t = document.querySelector(n);
    t && e(t);
    const i = new MutationObserver(() => {
      const s = document.querySelector(n);
      s && (e(s), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), m = ({ name: n, dev: e }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class a {
    constructor(e) {
      this.elements = e instanceof a ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, t, i) {
      return typeof t == "function" && (i = t, t = ""), this.elements.forEach((s) => {
        s.addEventListener(e, function(g) {
          var f;
          if (t !== "") {
            let u = (f = g.target) == null ? void 0 : f.closest(t);
            u && (i == null || i.call(u, g));
          } else
            i == null || i.call(s, g);
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
    each(e) {
      for (let t of this.elements)
        e(new a(t), this.elements.indexOf(t));
      return this;
    }
    style(e, t) {
      const i = e.split("-").map((s, g) => g === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[i] = t;
      }), this;
    }
    find(e) {
      const t = this.elements.map((i) => Array.from(i.querySelectorAll(e)));
      return new a(t.flat());
    }
    attr(e, t) {
      return t ? (this.elements.forEach(function(i) {
        i.setAttribute(e, t);
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
  }
  const C = (n) => new a(n), b = (n) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", n, "variant_1"));
    }, 1e3);
  }, p = "https://conversionrate-store.github.io/a-b_images/dywm/", o = {
    grief: {
      img: "yoga_grief.webp",
      link: "/content/yoga-for-grief",
      title: "Yoga for Grief",
      description: "Vinyasa  •  Power Yoga  •  Reclining Heart Ppener",
      coach: "Julia Crouch",
      star: "5.0",
      time: "38 min",
      icon: 1
    },
    binds: {
      img: "blissful_binds.webp",
      link: "/content/blissful-binds",
      title: "Blissful Binds",
      description: "Vinyasa  •  Power Yoga  •  Reclining Heart Ppener",
      coach: "Fiji McAlpine",
      star: "5.0",
      time: "35 mins",
      icon: 1
    },
    benefits: {
      img: "benefits.webp",
      link: "/yoga-series/explore-benefits-meditation",
      title: "Explore the Benefits of Meditation",
      description: "This series teaches you how to establish a regular meditation practice, returning to the fundamentals and exposing you to different teachers and styles.",
      coach: "3 Days",
      star: "5.0",
      time: "60 m/day",
      icon: 2,
      list: !0
    },
    soar: {
      img: "soar_intro.webp",
      link: "/yoga-challenges/soar-into-2024",
      title: "Soar Into 2024",
      description: "Lorem ipsum dolor sit amet consectetur. Magna ut a suspendisse eget aenean egestas et tellus.",
      coach: "3 Days",
      star: "5.0",
      time: "60 m/day",
      icon: 2,
      list: !0
    },
    sleep1: {
      img: "music1.webp",
      link: "/content/meditative-rest-sleep-magic",
      title: "Meditative Rest and Sleep Magic",
      coach: "Jennifer Piercy",
      star: "5.0",
      time: "3 Tracks",
      icon: 1,
      tracks: !0
    },
    sleep2: {
      img: "music2.webp",
      link: "/content/find-your-inner-power",
      title: "Find Your Inner Power",
      coach: "JDavid Procyshyn",
      star: "5.0",
      time: "4 Tracks",
      icon: 1,
      tracks: !0
    },
    connection: {
      img: "embrace.webp",
      link: "/content/embrace-the-edge-2026-yoga-retreat",
      title: "Embrace the Edge 2026",
      description: "Chacala, Nayarit, Mexico",
      coach: "Feb 14, 2026 - Feb 21, 2026",
      star: "5.0",
      time: "",
      icon: 2,
      list: !0
    },
    hormonal: {
      img: "elevate.webp",
      link: "/content/elevate-your-teaching-retreat-2026",
      title: "Elevate Your Teaching Retreat",
      description: "Duncan, BC, Canada",
      coach: "Jun 16, 2026 - Jun 19, 2026",
      star: "5.0",
      time: "",
      icon: 2,
      list: !0
    }
  }, l = {
    classes: {
      label: "Сlasses",
      icon: "classes.svg",
      title: "We meet you where you are",
      description: "No matter whether you're a beginner who's stuck in the office or an advanced yogi travelling the world, our veteran instructors are here with over 500 classes to help you further your practice one day at a time. Browse our evergrowing class catalog",
      buttonText: "View all classes",
      buttonLink: "/yoga-classes"
    },
    wellness: {
      label: "Wellness Program",
      icon: "wellness.svg",
      title: "Want to train to become a teacher?",
      description: "Join our exclusive, 250-hour yoga teacher training course. After 180 hours of online training and 70 hours in-person, you'll be ready to begin sharing the joys of yoga with others around you — no matter where you are.",
      buttonText: "Learn more about our training",
      buttonLink: "https://courses.doyogawithme.com/pages/doyogawithme-health-and-wellness-programs",
      bg: !0
    },
    programs: {
      label: "Programs & Challenges",
      icon: "medal.svg",
      title: "Programs & Challenges",
      description: "Daily practice is essential to develop and master any skill, and yoga is no exception! That's why we've handcrafted a variety of programs and challenges to help guide you to specific goals over the course of 7 days, 30 days, and more.",
      buttonText: "View all Programs & Challenges",
      buttonLink: "/yoga-challenges"
    },
    meditation: {
      label: "Meditation",
      icon: "meditation.svg",
      title: "Meditations & Audio Content",
      description: "In addition to our expansive video catalog, we also have a number of audio meditation playlists that help you settle your mind and realign your thoughts. Our community particularly enjoys our Yoga Nidra for Sleep.",
      buttonText: "View all Meditations & Audio Content",
      buttonLink: "/yoga-meditation",
      bg: !0
    },
    retreats: {
      label: "Retreats",
      icon: "retreats.svg",
      title: "Retreats. Escape reality.",
      description: "Need a break from the monotony or stresses of everyday life? Escape to somewhere far, far away (like Mexico, Greece, or Big Sur) with one of our exclusive retreats. Join us to find out how to become a better you.",
      buttonText: "View all Retreats",
      buttonLink: "/retreats"
    }
  }, c = {
    star: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
		<path d="M13.8512 5.55066L10.7834 8.54115L11.5079 12.7649C11.5394 12.9496 11.4636 13.1362 11.3119 13.2465C11.2262 13.3091 11.1242 13.3406 11.0223 13.3406C10.944 13.3406 10.8652 13.3219 10.7933 13.284L7 11.2898L3.20722 13.2835C3.04174 13.3711 2.8403 13.3569 2.68861 13.2461C2.53692 13.1357 2.46107 12.9491 2.49259 12.7644L3.21707 8.54066L0.14876 5.55066C0.0147986 5.41965 -0.0339595 5.22363 0.0241562 5.04584C0.0822718 4.86805 0.236426 4.73753 0.4221 4.71044L4.66208 4.09481L6.55822 0.252286C6.7242 -0.0840953 7.2758 -0.0840953 7.44178 0.252286L9.33792 4.09481L13.5779 4.71044C13.7636 4.73753 13.9177 4.86755 13.9758 5.04584C14.034 5.22413 13.9852 5.41916 13.8512 5.55066Z" fill="#E7937B"/>
		</svg>`,
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
		<g clip-path="url(#clip0_58_254)">
		<path d="M5.42194 9.35009C5.34694 9.46259 5.29694 9.52821 5.26257 9.59696C4.82819 10.5001 4.15944 11.2095 3.42194 11.8657C3.08757 12.1626 2.75944 12.472 2.43132 12.7782C1.95319 13.222 1.33132 13.2126 0.88444 12.7595C0.44694 12.3126 0.44694 11.6907 0.89694 11.2313C1.49382 10.622 2.10944 10.0313 2.69694 9.41884C2.92819 9.17821 3.12819 8.91259 3.30007 8.62822C3.87819 7.65321 4.44069 6.66884 4.99694 5.68134C5.27819 5.18446 5.71882 4.92196 6.25319 4.82196C7.48444 4.59071 8.71882 4.58134 9.94069 4.89384C10.4251 5.01884 10.7907 5.29696 11.0407 5.74696C11.5688 6.69696 12.1407 7.62509 12.6563 8.58134C12.9438 9.11259 13.3813 9.49384 13.7876 9.90946C14.2344 10.3657 14.6938 10.8095 15.1407 11.2657C15.5501 11.6845 15.5376 12.3126 15.1251 12.7438C14.7126 13.1751 14.0782 13.2376 13.6501 12.847C12.9938 12.247 12.3532 11.6282 11.7063 11.0157C11.2813 10.6095 11.0219 10.0876 10.7313 9.58759C10.6938 9.52509 10.6532 9.46571 10.5907 9.36259C10.5688 9.45321 10.5532 9.49384 10.5532 9.53446C10.5094 10.4095 10.4751 11.2813 10.4251 12.1563C10.4157 12.3407 10.4626 12.422 10.6501 12.472C11.4157 12.6751 12.1657 12.9251 12.9344 13.1095C13.8876 13.3376 14.3157 14.7376 13.7469 15.5032C13.3876 15.9845 12.8719 16.0595 12.3282 15.9501C10.9469 15.6751 9.57194 15.3782 8.19694 15.0938C8.06257 15.0688 7.92819 15.0688 7.79382 15.0938C6.42194 15.3751 5.05319 15.6657 3.68444 15.9438C3.49069 15.9813 3.29069 15.9876 3.09382 15.9688C2.36882 15.897 1.91257 15.2813 1.99382 14.5032C2.07507 13.7407 2.45632 13.2876 3.19382 13.0782C3.93132 12.8688 4.65632 12.6595 5.38757 12.4563C5.51882 12.4188 5.57507 12.3626 5.56569 12.2188C5.51882 11.3063 5.48132 10.3938 5.44069 9.48446C5.44382 9.46259 5.43444 9.43759 5.42194 9.35009Z" fill="#A6A6A6"/>
		<path d="M5.77469 2.21253C5.78094 0.984404 6.78406 -0.00622059 8.01219 2.94121e-05C9.24031 0.00627941 10.2309 1.0094 10.2247 2.23753C10.2122 3.48128 9.22469 4.45628 7.97469 4.45003C6.75594 4.4469 5.76844 3.44065 5.77469 2.21253Z" fill="#A6A6A6"/>
		</g>
		<defs>
		<clipPath id="clip0_58_254">
		<rect width="16" height="16" fill="white"/>
		</clipPath>
		</defs>
		</svg>`,
    icon2: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path d="M11.1667 2.37325V1.33325C11.1667 1.05992 10.94 0.833252 10.6667 0.833252C10.3933 0.833252 10.1667 1.05992 10.1667 1.33325V2.33325H5.83332V1.33325C5.83332 1.05992 5.60666 0.833252 5.33332 0.833252C5.05999 0.833252 4.83332 1.05992 4.83332 1.33325V2.37325C3.03332 2.53992 2.15999 3.61325 2.02666 5.20659C2.01332 5.39992 2.17332 5.55992 2.35999 5.55992H13.64C13.8333 5.55992 13.9933 5.39325 13.9733 5.20659C13.84 3.61325 12.9667 2.53992 11.1667 2.37325Z" fill="#A6A6A6"/>
		<path d="M13.3333 6.56006H2.66667C2.3 6.56006 2 6.86006 2 7.22673V11.3334C2 13.3334 3 14.6667 5.33333 14.6667H10.6667C13 14.6667 14 13.3334 14 11.3334V7.22673C14 6.86006 13.7 6.56006 13.3333 6.56006ZM6.14 12.1401C6.07333 12.2001 6 12.2467 5.92 12.2801C5.84 12.3134 5.75333 12.3334 5.66667 12.3334C5.58 12.3334 5.49333 12.3134 5.41333 12.2801C5.33333 12.2467 5.26 12.2001 5.19333 12.1401C5.07333 12.0134 5 11.8401 5 11.6667C5 11.4934 5.07333 11.3201 5.19333 11.1934C5.26 11.1334 5.33333 11.0867 5.41333 11.0534C5.57333 10.9867 5.76 10.9867 5.92 11.0534C6 11.0867 6.07333 11.1334 6.14 11.1934C6.26 11.3201 6.33333 11.4934 6.33333 11.6667C6.33333 11.8401 6.26 12.0134 6.14 12.1401ZM6.28 9.58673C6.24667 9.66673 6.2 9.74006 6.14 9.80673C6.07333 9.86673 6 9.91339 5.92 9.94673C5.84 9.98006 5.75333 10.0001 5.66667 10.0001C5.58 10.0001 5.49333 9.98006 5.41333 9.94673C5.33333 9.91339 5.26 9.86673 5.19333 9.80673C5.13333 9.74006 5.08667 9.66673 5.05333 9.58673C5.02 9.50673 5 9.42006 5 9.33339C5 9.24673 5.02 9.16006 5.05333 9.08006C5.08667 9.00006 5.13333 8.92673 5.19333 8.86006C5.26 8.80006 5.33333 8.75339 5.41333 8.72006C5.57333 8.65339 5.76 8.65339 5.92 8.72006C6 8.75339 6.07333 8.80006 6.14 8.86006C6.2 8.92673 6.24667 9.00006 6.28 9.08006C6.31333 9.16006 6.33333 9.24673 6.33333 9.33339C6.33333 9.42006 6.31333 9.50673 6.28 9.58673ZM8.47333 9.80673C8.40667 9.86673 8.33333 9.91339 8.25333 9.94673C8.17333 9.98006 8.08667 10.0001 8 10.0001C7.91333 10.0001 7.82667 9.98006 7.74667 9.94673C7.66667 9.91339 7.59333 9.86673 7.52667 9.80673C7.40667 9.68006 7.33333 9.50673 7.33333 9.33339C7.33333 9.16006 7.40667 8.98673 7.52667 8.86006C7.59333 8.80006 7.66667 8.75339 7.74667 8.72006C7.90667 8.64673 8.09333 8.64673 8.25333 8.72006C8.33333 8.75339 8.40667 8.80006 8.47333 8.86006C8.59333 8.98673 8.66667 9.16006 8.66667 9.33339C8.66667 9.50673 8.59333 9.68006 8.47333 9.80673Z" fill="#A6A6A6"/>
		</svg>`,
    clock: `<svg data-sfc-id="svg__clock" data-sfc-unique-id="svg__clock692444a96fb44" data-sfc-ids="svg__clock" class="sfc-svgClock" data-sfc-class="sfc-svgClock" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14C3.11719 14 0 10.8828 0 7C0 3.14453 3.11719 0 7 0C10.8555 0 14 3.14453 14 7C14 10.8828 10.8555 14 7 14ZM6.34375 7C6.34375 7.21875 6.45312 7.4375 6.61719 7.54688L9.24219 9.29688C9.54297 9.51562 9.95312 9.43359 10.1445 9.13281C10.3633 8.83203 10.2812 8.42188 9.98047 8.20312L7.65625 6.67188V3.28125C7.65625 2.92578 7.35547 2.625 6.97266 2.625C6.61719 2.625 6.31641 2.92578 6.31641 3.28125L6.34375 7Z" fill="white"></path>
  </svg>`,
    rate: `<svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect y="6" width="2" height="3" fill="white"/>
		<rect x="3" y="3" width="2" height="6" fill="#5B6362"/>
		<rect x="6" width="2" height="9" fill="#5B6362"/>
		</svg>`,
    music: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M13.9727 10.0625C13.9727 11.2656 12.7969 12.25 11.375 12.25C9.92578 12.25 8.75 11.2656 8.75 10.0625C8.75 8.85938 9.92578 7.90234 11.375 7.90234C11.6758 7.90234 11.9492 7.95703 12.25 8.03906V4.07422L5.25 6.125L5.22266 11.8398C5.22266 13.043 4.07422 14 2.59766 14C1.12109 14 0 13.043 0 11.8125C0 10.6094 1.14844 9.65234 2.59766 9.65234C2.89844 9.65234 3.19922 9.70703 3.47266 9.78906V3.47266C3.47266 3.11719 3.74609 2.73438 4.07422 2.625L12.7969 0.0546875C12.9062 0.0273438 13.043 0 13.125 0C13.5898 0 13.9727 0.410156 14 0.875L13.9727 10.0625Z" fill="white"/>
		</svg>`
  }, r = (n) => (
    /* HTML */
    `
    <div class="crs_card_block">
      <div class="crs_img_container ${n.list ? "crs_list_img" : ""}">
        <img src="${p}${n.img}" alt="${n.title}" />
        ${n.tracks ? "" : (
      /* HTML */
      ` <div class="crs_rate">${c.rate} Beginner I</div> `
    )}
        <div class="crs_time">${n.tracks ? c.music : c.clock} ${n.time}</div>
      </div>
      <a href="${n.link}" class="crs_card_title">
        <b>${n.title}</b>
        <span> ${c.star} ${n.star} </span>
      </a>
      ${n.description ? `<p class="crs_card_description">${n.description}</p>` : ""}
      <p class="crs_coach">${n.icon === 1 ? c.icon1 : c.icon2} ${n.coach}</p>
    </div>
  `
  ), d = (n) => (
    /* HTML */
    `
    <div class="crs_content_block ${n.bg ? "crs_bg" : ""}">
      <p class="crs_label">
        <img src="${p}${n.icon}" alt="Icon" />
        ${n.label}
      </p>
      <h2 class="crs_title">${n.title}</h2>
      <p class="crs_description">${n.description}</p>
      <a href="${n.buttonLink}" class="crs_button">${n.buttonText}</a>
    </div>
  `
  ), w = (
    /* HTML */
    `
  <section class="crs_story">
    <div class="crs_classes_block">
      <div class="crs_container">
        ${d(l.classes)}
        <div class="crs_cards_container">${r(o.grief)} ${r(o.binds)}</div>
      </div>
    </div>
    <div class="crs_wellness_block">
      <div class="crs_container">
        <div class="crs_wellness_img">
          <img src="${p}wellness.webp" alt="Wellness Program" />
        </div>
        ${d(l.wellness)}
      </div>
    </div>
    <div class="crs_programs_block">
      <div class="crs_container">
        ${d(l.programs)}
        <div class="crs_cards_container">${r(o.benefits)} ${r(o.soar)}</div>
      </div>
    </div>
    <div class="crs_meditation_block">
      <div class="crs_container">
        <div class="crs_cards_container">${r(o.sleep1)} ${r(o.sleep2)}</div>
        ${d(l.meditation)}
      </div>
    </div>
    <div class="crs_retreats_block">
      <div class="crs_container">
        ${d(l.retreats)}
        <div class="crs_cards_container">${r(o.connection)} ${r(o.hormonal)}</div>
      </div>
    </div>
  </section>
`
  ), _ = `.sfc-frontPageAnon__whatMovesYou.sfc-section {
  display: none;
}

.crs_story .crs_container {
  width: 100% !important;
  padding: 80px 20px;
  max-width: 1360px;
  display: flex;
  gap: 60px;
  margin: 0 auto;
}

.crs_story > div {
  background: #ffffff;
}

.crs_story .crs_wellness_block,
.crs_story .crs_meditation_block {
  background-color: #f5f5f5;
}

.crs_label {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  background-color: #f6f7f7;
  border-radius: 32px;
  color: #007170;
  font-size: 14px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 12px;
}

.crs_content_block.crs_bg .crs_label {
  background: #fff;
}

.crs_container > div {
  flex: 1;
}

.crs_title {
  color: #2b3635;
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 24px !important;
}

.crs_description {
  color: #5b6362;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 24px;
}

.crs_button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 2px solid #007170;
  color: #007170;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-transform: capitalize;
  width: 342px;
  height: 48px;
  cursor: pointer;
  text-decoration: none;
  background: #fff;
}

.crs_button:hover {
  color: #007170;
  text-decoration: none;
}

.crs_cards_container {
  display: flex;
  gap: 22px;
}

.crs_card_block {
  display: flex;
  flex-direction: column;
}

.crs_card_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 10px;
  color: #2b3635;
}

.crs_card_title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.crs_card_description {
  color: #5b6362;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 10px;
}

.crs_coach {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  line-height: 20px;
  color: #5b6362;
  margin: 0;
}

.crs_img_container {
  position: relative;
  width: 100%;
  aspect-ratio: 1.73/1;
  margin-bottom: 12px;
}

.crs_img_container img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
}

.crs_rate {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 4px;
  background: rgba(43, 54, 53, 0.7);
  bottom: 10px;
  left: 10px;
  color: #ffffff;
  font-size: 12px;
}

.crs_time {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 4px;
  background: rgba(43, 54, 53, 0.7);
  bottom: 10px;
  right: 10px;
  color: #ffffff;
  font-size: 12px;
}

@media (max-width: 768px) {
  .crs_story .crs_container {
    flex-direction: column;
    padding: 32px 20px;
    width: unset !important;
    gap: 24px;
  }
  .crs_story .crs_wellness_block .crs_container,
  .crs_story .crs_meditation_block .crs_container {
    flex-direction: column-reverse;
  }
  .crs_cards_container {
    width: 100%;
    overflow-x: auto;
  }
  .crs_card_block {
    width: 90%;
    flex-shrink: 0;
  }
  .crs_button {
    width: 100%;
  }
}
.crs_retreats_block .crs_rate,
.crs_retreats_block .crs_time {
  display: none;
}/*# sourceMappingURL=style.css.map */`;
  m({ name: "Home page story", dev: "YK" }), b("dywm_home_page_block");
  class v {
    constructor() {
      this.init();
    }
    async init() {
      await h("body"), document.body.insertAdjacentHTML("afterbegin", `<style class="crs_style">${_}</style>`), await h(".sfc-frontPageAnon__whatMovesYou.sfc-section"), C(".sfc-frontPageAnon__whatMovesYou.sfc-section").elements[0].insertAdjacentHTML("afterend", w);
    }
  }
  new v();
})();
//# sourceMappingURL=index.js.map
