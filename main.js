// const project = [
//   {
//     title: "form validator",
//     link: "form_validator/index.html",
//   },
//   {
//     title: "Tic Tac Toe Game",
//     link: "tic_tac_toe/index.html",
//   },
//   {
//     title: "To-Do List",
//     link: "todo_list/index.html",
//   },
//   {
//     title: "QR Code Generator",
//     link: "qr_code_generator/index.html",
//   },
//   {
//     title: "Calculator",
//     link: "calculator/index.html",
//   },
//   {
//     title: "Github User Info Fetch",
//     link: "github_user_info_fetch/index.html",
//   },
// ];

// const cardContainer = document.querySelector(".cardContainer");

// project.forEach((e, index) => {
//   let div = document.createElement("div");
//   div.className = "card";

//   let formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

//   let p = document.createElement("p");
//   p.innerHTML = `${formattedIndex}`;

//   let title = document.createElement("h2");
//   title.innerHTML = `${e.title}.`;

//   let icon = document.createElement("a");
//   icon.setAttribute("href", `${e.link}`);
//   icon.setAttribute("target", `_blank`);
//   icon.innerHTML = '<i id="icon" class="ri-share-forward-2-line"></i>';

//   div.appendChild(p);
//   div.appendChild(title);
//   div.appendChild(icon);

//   cardContainer.appendChild(div);
// });

// console.log("@ kazim ahmad");

//! WordPress Websites
const toolLogos = {
  elementor: "assets/elementor.svg",
  wp: "assets/wordpress.svg",
  figma: "assets/figma.svg",
  acf: "assets/acf.webp",
};

const web_project = [
  {
    title: "ICA Thailand",
    link: "https://icathailand.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "Streamlining visitor engagement for a leading organization with a clear, service-focused design.",
  },
  {
    title: "Leads Flex",
    link: "https://leadsflex.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "A high-performance lead generation engine designed to capture inquiries and drive business growth.",
  },
  {
    title: "Melissa Washington",
    link: "http://www.melissawashington.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "Building a powerful personal brand that connects with audiences and showcases authority.",
  },
  {
    title: "Snow Buddy Sled Dog Adventure",
    link: "https://snowbuddysleddogadventures.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "Driving bookings through an immersive, adventure-driven digital experience.",
  },

  {
    title: "Go First Class Charters",
    link: "https://gofirstclasscharter.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "Turning luxury travel inquiries into confirmed bookings with a seamless high-end experience.",
  },
  {
    title: "Acadia Sup",
    link: "http://www.acadiasup.com",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "Simplifying the path to adventure—clear service presentation for instant bookings.",
  },
  {
    title: "Bricks n Brushes",
    link: "https://www.bricksandbrushestours.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "Showcasing creativity with a visually rich platform that invites exploration.",
  },
  {
    title: "Clarissa Rankin",
    link: "https://clarissa.ellingtonsupport.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "Establishing professional credibility with a structured, impact-focused personal brand site.",
  },
  {
    title: "Little Love Affair",
    link: "https://littleloveaffair.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "A boutique e-commerce experience designed to highlight product quality and drive sales.",
  },
  {
    title: "Cali's Beach Buggies",
    link: "https://calisbeachbuggies.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "Accelerating rental inquiries with transparent pricing and an excitement-driven layout.",
  },
  {
    title: "True Tours",
    link: "http://www.truetours.net",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "Making tour discovery effortless—straightforward navigation for higher customer conversion.",
  },
  {
    title: "Beach Life Golf Cart Rentals",
    link: "https://beachlifegolfcartrentals.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "Connecting local customers to rental options quickly and effectively.",
  },
  {
    title: "Ocmulgee Outdoor Expeditions",
    link: "https://www.ocmulgeeoutdoorexpeditions.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "Highlighting the outdoor experience while making information accessible for every adventurer.",
  },
  {
    title: "Hidden Treasure Charters",
    link: "https://www.hiddentreasurecharters.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "Building trust and guiding potential charters toward a booking decision.",
  },
  {
    title: "Shoreline Watersports",
    link: "https://www.shorelinewatersports.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "Balancing visual impact with practical information to maximize watersport bookings.",
  },
  {
    title: "Igg Shipping",
    link: "https://iggshipping.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "Professional logistics presentation that communicates reliability and scale.",
  },
  // {
  //   title: "Battlefront Memphis",
  //   link: "https://www.battlefrontmemphis.com/",
  //   tools: ["elementor", "acf", "wp", "figma"],
  //   description:
  //     "An entertainment venue website built to highlight activities, schedules, and essential visitor information.",
  // },
  {
    title: "Ironwood Powersports",
    link: "https://ironwoodpowersports.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "Showcasing inventory effectively to drive foot traffic and inquiries.",
  },
  {
    title: "Chelan Parasail & Watersports",
    link: "http://www.chelanparasail.com",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "Promoting thrill-seeking activities with clear, action-oriented booking information.",
  },
  {
    title: "Pure Aloha Adventures Hawaii",
    link: "https://purealohaadventures.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "Capturing the 'Aloha' spirit while delivering a seamless user experience.",
  },
  {
    title: "Pure Aloha Adventures Alabama",
    link: "https://purealohaadventures.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "Localized service branding that builds trust within the specific community.",
  },
  // {
  //   title: "Party Tours",
  //   link: "http://www.partytours.com",
  //   tools: ["elementor", "acf", "wp", "figma"],
  //   description:
  //     "A promotional website designed to present tour experiences in a clear and engaging format.",
  // },
  {
    title: "Private Mexico Tours",
    link: "https://www.privatemexicotours.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "Simplifying luxury travel planning with an elegant, inquiry-driven design.",
  },
  {
    title: "Dark Side of Denver Ghost Tours",
    link: "https://darksideofdenver.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "Immersive storytelling design that converts curiosity into ticket sales.",
  },
  {
    title: "Letts Go Watersports",
    link: "https://www.lettsgowatersports.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "Clean, usable design that puts activity promotion front and center.",
  },
  {
    title: "A1 Red Carpet",
    link: "https://a1redcarpet.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "Polished service presentation that underscores professionalism and quality.",
  },
  {
    title: "Reclaimed Elements",
    link: "https://reclaimedelements.ca/",
    tools: ["elementor", "wp", "figma"],
    description:
      "Highlighting craftsmanship with a gallery-focused design that speaks to quality.",
  },
  {
    title: "Capital Towing",
    link: "https://capitaltowingnc.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "Instant access to essential services—built for speed when customers need it most.",
  },
];

const web_project_container = document.querySelector("#websiteProjects");

//! old cards rendering
// web_project.forEach((e, index) => {
//   let div = document.createElement("div");
//   div.className = "card";

//   let formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

//   let p = document.createElement("p");
//   p.innerHTML = `${formattedIndex}`;

//   let title = document.createElement("h2");
//   title.innerHTML = `${e.title}.`;

//   let icon = document.createElement("a");
//   icon.setAttribute("href", `${e.link}`);
//   icon.setAttribute("target", `_blank`);
//   icon.innerHTML = '<i id="icon" class="ri-share-forward-2-line"></i>';

//   div.appendChild(p);
//   div.appendChild(title);
//   div.appendChild(icon);

//   web_project_container.appendChild(div);
// });

//! new cards rendering

const toolLabels = {
  elementor: "Elementor",
  wp: "WordPress",
  figma: "Figma",
  acf: "ACF",
};

web_project.forEach((e) => {
  const div = document.createElement("div");
  div.classList.add("project-card");

  const tagsHTML = e.tools
    .map(
      (tool) => `
      <span class="tag">
        <img src="${toolLogos[tool]}" alt="${toolLabels[tool] || tool}" title="${toolLabels[tool] || tool}" />
        ${toolLabels[tool] || tool}
      </span>`,
    )
    .join("");

  div.innerHTML = `
    <div class="project-image-wrapper">
      <a href="${e.link}" target="_blank" rel="noopener noreferrer" tabindex="-1">
        <img class="project-thumb"
             src="assets/Portfolio Sites Thumbnails/${e.title}.webp"
             alt="${e.title}" />
      </a>
    </div>
    <div class="project-content">
      <div class="project-header">
        <h3>${e.title}</h3>
      </div>
      <p>${e.description}</p>
      <div class="project-tags">${tagsHTML}</div>
      <a class="btn-project"
         href="${e.link}"
         target="_blank"
         rel="noopener noreferrer">
        Visit Site
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </a>
    </div>
  `;

  web_project_container.appendChild(div);
});
