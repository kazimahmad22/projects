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
    link: "https://icathailand.ellingtonsupport.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "A modern, user-friendly website for ICA Thailand, designed to clearly present services and simplify visitor engagement.",
  },
  {
    title: "Leads Flex",
    link: "https://leadsflex.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "A professional website focused on lead generation and business growth, featuring streamlined navigation and intuitive design.",
  },
  {
    title: "Melissa Washington",
    link: "http://www.melissawashington.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "A personal branding website for Melissa Washington, showcasing her work, achievements, and connecting with her audience effectively.",
  },
  {
    title: "Snow Buddy Sled Dog Adventure",
    link: "https://snowbuddysleddogadventures.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "An adventure-focused website highlighting Snow Buddy Sled Dog experiences, designed to attract visitors and encourage bookings.",
  },

  {
    title: "Go First Class Charters",
    link: "https://gofirstclasscharter.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "A clean and conversion-focused website designed to showcase charter services, streamline inquiries, and highlight premium customer experiences.",
  },
  {
    title: "Acadia Sup",
    link: "http://www.acadiasup.com",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "An outdoor adventure website built to present services clearly, improve usability, and provide quick access to booking information.",
  },
  {
    title: "Bricks n Brushes",
    link: "https://www.bricksandbrushestours.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "A visually engaging platform designed to promote guided tours while keeping content organized and easy to explore.",
  },
  {
    title: "Clarissa Rankin",
    link: "https://clarissa.ellingtonsupport.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "A personal brand website focused on clarity, credibility, and presenting professional information in a structured layout.",
  },
  {
    title: "Little Love Affair",
    link: "https://littleloveaffair.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "A boutique-style website crafted to highlight products and services with a soft visual approach and smooth navigation.",
  },
  {
    title: "Cali's Beach Buggies",
    link: "https://calisbeachbuggies.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "A rental-focused website optimized for showcasing vehicles, sharing pricing details, and encouraging customer inquiries.",
  },
  {
    title: "True Tours",
    link: "http://www.truetours.net",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "A tour service website built to communicate offerings clearly while maintaining a straightforward and accessible layout.",
  },
  {
    title: "Beach Life Golf Cart Rentals",
    link: "https://beachlifegolfcartrentals.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "A service-driven site designed to present rental options, simplify navigation, and support local customer engagement.",
  },
  {
    title: "Ocmulgee Outdoor Expeditions",
    link: "https://www.ocmulgeeoutdoorexpeditions.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "An experience-focused website built to highlight outdoor activities while keeping information clear and accessible.",
  },
  {
    title: "Hidden Treasure Charters",
    link: "https://www.hiddentreasurecharters.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "A charter business website structured to showcase services, promote trust, and guide users toward bookings.",
  },
  {
    title: "Shoreline Watersports",
    link: "https://www.shorelinewatersports.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "A dynamic watersports website designed to balance visual impact with practical service information.",
  },
  {
    title: "Igg Shipping",
    link: "https://iggshipping.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "A corporate-style website focused on presenting logistics services with clarity and a professional structure.",
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
      "A product-driven website designed to showcase inventory while keeping navigation intuitive and user-friendly.",
  },
  {
    title: "Chelan Parasail & Watersports",
    link: "http://www.chelanparasail.com",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "A tourism-focused website created to promote activities and provide clear booking-related information.",
  },
  {
    title: "Pure Aloha Adventures Hawaii",
    link: "https://purealohaadventures.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "An adventure service website built to reflect brand energy while maintaining clarity and usability.",
  },
  {
    title: "Pure Aloha Adventures Alabama",
    link: "https://purealohaadventures.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "A location-specific service site structured to deliver consistent branding and localized information.",
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
      "A travel-focused website built to showcase tour offerings and simplify the inquiry process.",
  },
  {
    title: "Dark Side of Denver Ghost Tours",
    link: "https://darksideofdenver.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "An experience-driven website crafted to support storytelling while keeping tour details easy to find.",
  },
  {
    title: "Letts Go Watersports",
    link: "https://www.lettsgowatersports.com/",
    tools: ["elementor", "acf", "wp", "figma"],
    description:
      "A service-oriented website focused on promoting watersport activities with clean structure and usability.",
  },
  {
    title: "A1 Red Carpet",
    link: "https://a1redcarpet.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "A professional service website designed to highlight offerings while maintaining a polished presentation.",
  },
  {
    title: "Reclaimed Elements",
    link: "https://reclaimedelements.ca/",
    tools: ["elementor", "wp", "figma"],
    description:
      "A brand-focused website created to showcase craftsmanship and present products with clarity.",
  },
  {
    title: "Capital Towing",
    link: "https://capitaltowingnc.com/",
    tools: ["elementor", "wp", "figma"],
    description:
      "A local service website built to deliver essential information quickly and support customer trust.",
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

web_project.forEach((e) => {
  const div = document.createElement("div");
  div.classList.add("newCard");

  div.innerHTML = `
    <div class="coverImage">
    <a href="${e.link}" target="_blank">
      <img src="assets/Portfolio Sites Thumbnails/${e.title}.webp" alt="${
    e.title
  }"></a>
    </div>

    <div class="cardContent">
      <h4>${e.title}</h4>

      <p>
        ${e.description}
      </p>

      <div class="tools">
        <h6>Tools / Plugins</h6>
       <ul class="tools">
  ${e.tools
    .map(
      (tool) => `
          <li>
            <img 
              src="${toolLogos[tool]}" 
              alt="${tool.charAt(0).toUpperCase() + tool.slice(1)} logo"
              title="${tool}"
            />
          </li>
        `,
    )
    .join("")}
</ul>

      </div>

      <div class="buttonContainer">
      
        <a class="btn"
           href="${e.link}"
           target="_blank"
           rel="noopener noreferrer">
           <button>
          Visit Site</button>
        </a>
      
      </div>
    </div>
  `;

  web_project_container.appendChild(div);
});
