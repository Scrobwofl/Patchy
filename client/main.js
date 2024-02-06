console.log("Connected...");
const baseURL = "http://localhost:5432";
const form = document.getElementById("form");

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

let plant = {
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
};

let searchResults = plants;
let selectedPlant = plant;

// Create x number of display items based on array
function createCard(plant) {
  console.log("Making Card");

  const plantCardCntr = document.getElementById("plant-card-container");

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
  const closeBox = document.createElement("div");
  closeBox.innerHTML = `<i class="fa-solid fa-circle-xmark fa-2xl"></i>`;
  closeBox.classList.add("close-box");
  plantCardCntr.classList.add("unhide");
  cardHeaderCntr.appendChild(cardHeaderTitle);
  cardHeaderCntr.appendChild(cardHeaderSubheading);
  cardHeaderCntr.appendChild(closeBox);
  cardHeaderCntr.appendChild(cardHeaderImg);

  closeBox.addEventListener("click", () => {
    if (plantCardCntr.classList.contains("unhide")) {
      plantCardCntr.classList.remove("unhide");
      plantCardCntr.classList.add("hide");
      console.log("hide");
    } else if (plantCardCntr.classList.contains("hide")) {
      plantCardCntr.classList.remove("hide");
      plantCardCntr.classList.add("unhide");
      console.log("unhide");
    }
  });

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
  wikiLinkBtn.classList.add("buttons");

  const addToGardenBtn = document.createElement("button");
  addToGardenBtn.innerHTML = `<a href=${plant.wikiUrl}><i class="fa-solid fa-circle-plus"></i>Add to Library</a>`;
  addToGardenBtn.classList.add("buttons");

  cardBtnCntr.appendChild(wikiLinkBtn);
  cardBtnCntr.appendChild(addToGardenBtn);

  // Append Everything
  cardCntr.appendChild(cardHeaderCntr);
  cardCntr.appendChild(cardDescCntr);
  cardCntr.appendChild(cardDetailsCntr);
  cardCntr.appendChild(cardBtnCntr);
  plantCardCntr.appendChild(cardCntr);
}

createCard(selectedPlant);

// const searchResultsDisplay(plants) {
//   console.log("Displaying results");
//   const plantCardsCntr = document.getElementById("plant-cards-container");
//   // Main card structure
//   const cardCntr = document.createElement("div");
//   cardCntr.classList.add("plant-card");
//   const cardHeaderCntr = document.createElement("div");
//   cardHeaderCntr.classList.add("card-header-container");
//   const cardDescCntr = document.createElement("div");
//   cardDescCntr.classList.add("card-desc-container");
//   const cardDetailsCntr = document.createElement("div");
//   cardDetailsCntr.classList.add("card-details-container");
//   const cardBtnCntr = document.createElement("div");
//   cardBtnCntr.classList.add("card-button-container");
// }

// // Search Growstuff, requires paramater search(queryParam)
// let currentPlantIndex = 0;
// async function search (queryParam) {
//   let response = await fetch (
//     `http://growstuff.org/crops/${queryParam}.json`
//   )
//   let data = await response.json();
//   plants = data.results;
//   createCards(plants)
//   // createPlant(plants[currentPlantIndex])
// }

// function createPlant(plant) {
//   plantContainer.innerHTML=""
//     let API_ID = plant.id;
//     let name = plant.name;
//     let en_wikipedia_url = plant.en_wikipedia_url;
//     let height = plant.openfarm_data.attributes.height;
//     let spread = plant.openfarm_data.attributes.spread;
//     let description = plant.openfarm_data.attributes.description;
//     let row_spacing = plant.openfarm_data.attributes.row_spacing;
//     let sowing_method = plant.openfarm_data.attributes.sowing_method;
//     let main_image_path = plant.openfarm_data.attributes.main_image_path;
//     let sun_requirements = plant.openfarm_data.attributes.sun_requirements;
//     let scientific_names = plant.scientific_names;
//     let patches = "";
// }

// // Get plants from database need to match PLANTCONTAINER with the element ID from index.html
// async function getPlants() {

//   // Clear the plantContainer of previous results
//   plantCardsCntr.innerHTML = "";
//   const response = await fetch(`${baseURL}/plants`);
//   const plants = await response.json();

//   // Loop through the plants if more than one returned
//   createPlants()

//     // Append the container to the main messageContainer
//     messageContainer.appendChild(plantItem);
//     // Event listener for delete, needs to match index.html
//     deleteButton.addEventListener("click", (e) => {
//       e.preventDefault();
//       handleDelete(plant.id);
//     });
//   });

// async function handleDelete(id) {
//   const result = await fetch(`${baseURL}/plants/${id}`, {
//     method: 'DELETE'
//   })
//   console.log(result);
//   if (result.ok) {
//     getPlants();
//   }
// }
