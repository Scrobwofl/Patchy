console.log("Connected...");
const plantCardsCntr = document.getElementById("plant-cards-container");

// let plant = {
//   name: plant.NAME,
//   wikiUrl: plant.EN_WIKIPEDIA_URL,
//   height: plant.HEIGHT,
//   spread: plant.SPREAD,
//   desc: plants.attributes.DESCRIPTION,
//   rowSpacing: plants.attributes.ROW_SPACING,
//   sowingMethod: plants.attributes.SOWING_METHOD,
//   imagePath: plants.attributes.MAIN_IMAGE_PATH,
//   sunRequirements: plants.attributes.SUN_REQUIREMENTS,
//   scientificNames: plants.attributes.SCIENTIFIC_NAME,
// };
let plants = [
  {
    name: "Potato",
    wikiUrl: "www.wikipedia.com",
    height: 1.3,
    spread: 0.7,
    desc: "This is some information about the plant that could be very very long and will need handling to not take up the entire card because that wouldn't be good.",
    rowSpacing: 0.5,
    sowingMethod: "Finger in the mud",
    imagePath: "https://placehold.co/200x100",
    sunRequirements: "Plant in full sun",
    scientificNames: "Horribilus Plantius",
  },
  {
    name: "Potato",
    wikiUrl: "www.wikipedia.com",
    height: 1.3,
    spread: 0.7,
    desc: "This is some information about the plant that could be very very long and will need handling to not take up the entire card because that wouldn't be good.",
    rowSpacing: 0.5,
    sowingMethod: "Finger in the mud",
    imagePath: "https://placehold.co/200x100",
    sunRequirements: "Plant in full sun",
    scientificNames: "Horribilus Plantius",
  },
  {
    name: "Potato",
    wikiUrl: "www.wikipedia.com",
    height: 1.3,
    spread: 0.7,
    desc: "This is some information about the plant that could be very very long and will need handling to not take up the entire card because that wouldn't be good.",
    rowSpacing: 0.5,
    sowingMethod: "Finger in the mud",
    imagePath: "https://placehold.co/200x100",
    sunRequirements: "Plant in full sun",
    scientificNames: "Horribilus Plantius",
  },
];

plants.forEach((plant) => {
  console.log("Looping");
  // Main card structure
  const cardCntr = document.createElement("div");
  cardCntr.classList.add("plant-card");
  const cardHeaderCntr = document.createElement("div");
  cardHeaderCntr.classList.add("card-header-container");
  const cardDescCntr = document.createElement("div");
  cardDescCntr.classList.add("card-desc-container");
  const cardDetailsCntr = document.createElement("div");
  cardDetailsCntr.classList.add("card-details-container");
  const cardBtnCntr = document.createElement("div");
  cardBtnCntr.classList.add("card-button-container");

  // Adding Header box
  const cardHeaderTitle = document.createElement("h1");
  cardHeaderTitle.textContent = plant.name;
  const cardHeaderSubheading = document.createElement("p");
  cardHeaderSubheading.textContent = plant.scientificNames;
  const cardHeaderImg = document.createElement("img");
  cardHeaderImg.src = plant.imagePath;
  cardHeaderImg.alt = plant.desc;
  cardHeaderCntr.appendChild(cardHeaderTitle);
  cardHeaderCntr.appendChild(cardHeaderSubheading);
  cardHeaderCntr.appendChild(cardHeaderImg);

  // Adding description box
  const cardDescText = document.createElement("p");
  cardDescText.textContent = plant.desc;
  cardDescCntr.appendChild(cardDescText);

  // A labels array because i can't get the key names from the other array
  const detailLabels = [
    "Height",
    "Spread",
    "Row Spacing",
    "Sowing Method",
    "Sun Requirements",
  ];
  // An array of the values for the details box.
  const cardDetailsArray = [
    plant.height,
    plant.spread,
    plant.rowSpacing,
    plant.sowingMethod,
    plant.sunRequirements,
  ];

  // A looping the details creation so we dont repeat ourselves too much
  cardDetailsArray.forEach((detail, index) => {
    const cardDetailRow = document.createElement("div");
    cardDetailRow.classList.add("card-details-row");
    const cardDetailText = document.createElement("p");
    cardDetailText.textContent = detailLabels[index];
    const cardDetailValue = document.createElement("p");
    cardDetailValue.textContent = detail;

    cardDetailRow.appendChild(cardDetailText);
    cardDetailRow.appendChild(cardDetailValue);
    cardDetailsCntr.appendChild(cardDetailRow);
  });

  // Add the buttons
  const wikiLinkBtn = document.createElement("button");
  wikiLinkBtn.innerHTML = `<a href=${plant.wikiUrl}><i class="fa-solid fa-square-arrow-up-right"></i>Wiki Page</a>`;
  const addToGardenBtn = document.createElement("button");
  addToGardenBtn.innerHTML = `<a href=${plant.wikiUrl}><i class="fa-solid fa-circle-plus"></i>Add to Library</a>`;
  cardBtnCntr.appendChild(wikiLinkBtn);
  cardBtnCntr.appendChild(addToGardenBtn);

  // Append Everything
  cardCntr.appendChild(cardHeaderCntr);
  cardCntr.appendChild(cardDescCntr);
  cardCntr.appendChild(cardDetailsCntr);
  cardCntr.appendChild(cardBtnCntr);
  plantCardsCntr.appendChild(cardCntr);
});
