const project = [
  {
    title: "form validator",
    link: "form_validator/index.html",
  },
  {
    title: "Tic Tac Toe Game",
    link: "tic_tac_toe/index.html",
  },
  {
    title: "To-Do List",
    link: "todo_list/index.html",
  },
  {
    title: "QR Code Generator",
    link: "qr_code_generator/index.html",
  },
  {
    title: "Calculator",
    link: "calculator/index.html",
  },
  {
    title: "Github User Info Fetch",
    link: "github_user_info_fetch/index.html",
  },
];

const cardContainer = document.querySelector(".cardContainer");

project.forEach((e, index) => {
  let div = document.createElement("div");
  div.className = "card";

  let formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

  let p = document.createElement("p");
  p.innerHTML = `${formattedIndex}`;

  let title = document.createElement("h2");
  title.innerHTML = `${e.title}.`;

  let icon = document.createElement("a");
  icon.setAttribute("href", `${e.link}`);
  icon.setAttribute("target", `_blank`);
  icon.innerHTML = '<i id="icon" class="ri-share-forward-2-line"></i>';

  div.appendChild(p);
  div.appendChild(title);
  div.appendChild(icon);

  cardContainer.appendChild(div);
});

console.log("@ kazim ahmad");

//! WordPress Websites

const web_project = [
  {
    title: "Go First Class Charters",
    link: "https://gofirstclasscharter.com/",
  },
  {
    title: "Acadia Sup",
    link: "http://www.acadiasup.com",
  },
  {
    title: "Bricks n Brushes",
    link: "https://www.bricksandbrushestours.com/",
  },
  {
    title: "Clarissa Rankin",
    link: "https://clarissa.ellingtonsupport.com/",
  },
  {
    title: "Little Love Affair",
    link: "https://littleloveaffair.com/",
  },
  {
    title: "Cali's Beach Buggies",
    link: "https://calisbeachbuggies.com/",
  },
  {
    title: "True Tours",
    link: "http://www.truetours.net",
  },
  {
    title: "Beach Life Golf Cart Rentals",
    link: "https://beachlifegolfcartrentals.com/",
  },
  {
    title: "Ocmulgee Outdoor Expeditions",
    link: "https://www.ocmulgeeoutdoorexpeditions.com/",
  },
  {
    title: "Hidden Treasure Charters",
    link: "https://www.hiddentreasurecharters.com/",
  },
  {
    title: "Shoreline Watersports",
    link: "https://www.shorelinewatersports.com/",
  },
  {
    title: "Igg Shipping",
    link: "https://iggshipping.com/",
  },
  // --- Rest of the list ---
  {
    title: "Battlefront Memphis",
    link: "https://www.battlefrontmemphis.com/",
  },
  {
    title: "Ironwood Powersports",
    link: "https://ironwoodpowersports.com/",
  },
  {
    title: "Chelan Parasail & Watersports",
    link: "http://www.chelanparasail.com",
  },
  {
    title: "Pure Aloha Adventures Hawaii",
    link: "https://purealohaadventures.com/",
  },
  {
    title: "Pure Aloha Adventures Alabama",
    link: "https://purealohaadventures.com/",
  },
  {
    title: "Party Tours",
    link: "http://www.partytours.com",
  },
  {
    title: "Private Mexico Tours",
    link: "https://www.privatemexicotours.com/",
  },
  {
    title: "Dark Side of Denver Ghost Tours",
    link: "https://darksideofdenver.com/",
  },
  {
    title: "Letts Go Watersports",
    link: "https://www.lettsgowatersports.com/",
  },
  {
    title: "A1 Red Carpet",
    link: "https://a1redcarpet.com/",
  },
  {
    title: "Reclaimed Elements",
    link: "https://reclaimedelements.ca/",
  },
  {
    title: "Capital Towing",
    link: "https://capitaltowingnc.com/",
  },
];

const web_project_container = document.querySelector("#websiteProjects");

web_project.forEach((e, index) => {
  let div = document.createElement("div");
  div.className = "card";

  let formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

  let p = document.createElement("p");
  p.innerHTML = `${formattedIndex}`;

  let title = document.createElement("h2");
  title.innerHTML = `${e.title}.`;

  let icon = document.createElement("a");
  icon.setAttribute("href", `${e.link}`);
  icon.setAttribute("target", `_blank`);
  icon.innerHTML = '<i id="icon" class="ri-share-forward-2-line"></i>';

  div.appendChild(p);
  div.appendChild(title);
  div.appendChild(icon);

  web_project_container.appendChild(div);
});
