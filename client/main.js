console.log("Connected...");
const baseURL = "http://localhost:5432";
const plantCardCntr = document.getElementById("plant-card-container");

let plants = [
  {
    _id: 134,
    name: "Pomegranate Habadashery Banana Wombat Toads",
    description:
      "This is some information about the plant that could be very very long and will need handling to not take up the entire card because that wouldn't be good.",
    scientific_names: "Beaniest talliest",
    thumbnail_url: "https://placehold.co/100x100",
  },
  {
    _id: 134,
    name: "Pomegranate Habadashery Banana Wombat Toads",
    description:
      "This is some information about the plant that could be very very long and will need handling to not take up the entire card because that wouldn't be good.",
    scientific_names: "Beaniest talliest",
    thumbnail_url: "https://placehold.co/100x100",
  },
  {
    _id: 134,
    name: "Runner Beans",
    description:
      "This is some information about the plant that could be very very long and will need handling to not take up the entire card because that wouldn't be good.",
    scientific_names: "Beaniest talliest",
    thumbnail_url: "https://placehold.co/100x100",
  },
  {
    _id: 134,
    name: "Runner Beans",
    description:
      "This is some information about the plant that could be very very long and will need handling to not take up the entire card because that wouldn't be good.",
    scientific_names: "Beaniest talliest",
    thumbnail_url: "https://placehold.co/100x100",
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
let currentPlantIndex = 0;

// Create single card with full plant information
function createCard(plant) {
  console.log("Making Card");

  plantCardCntr.innerHTML = "";
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

  // Close modal button functionality
  closeBox.addEventListener("click", plantCardVisibility);

  // Generic function to show and hide plant details overlay card
  function plantCardVisibility() {
    if (plantCardCntr.classList.contains("hide")) {
      plantCardCntr.classList.remove("hide");
      plantCardCntr.classList.add("unhide");
      console.log("unhide");
    } else if (plantCardCntr.classList.contains("unhide")) {
      plantCardCntr.classList.remove("unhide");
      plantCardCntr.classList.add("hide");
      console.log("hide");
    }
  }

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
  plantCardVisibility();
}

function searchResultsDisplay(plants) {
  console.log("Displaying results");
  const searchResultsCntr = document.getElementById("search-results-container");
  searchResultsCntr.innerHTML = "";

  // Main results structure
  plants.forEach((plant) => {
    //Create Card
    const resultCard = document.createElement("div");
    resultCard.classList.add("result-card");

    const plantImg = document.createElement("img");
    plantImg.src = plant.thumbnail_url;
    plantImg.alt = plant.description;

    const plantInfo = document.createElement("div");
    plantInfo.classList.add("plant-info");

    const resultTitle = document.createElement("h2");
    resultTitle.innerText = plant.name;
    const scienceName = document.createElement("p");
    scienceName.innerText = plant.scientific_names;

    plantInfo.append(resultTitle, scienceName);

    resultCard.append(plantImg, plantInfo);
    searchResultsCntr.appendChild(resultCard);

    resultCard.addEventListener("click", () => {
      console.log(`Clicked ${plant.name}`);
      createCard(plant);
    });
  });
}
// searchResultsDisplay(plants);

const form = document.getElementById("search-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = document.getElementById("search").value.trim();
  console.log("Form Submitted...");
  console.log(query);
  searchSpecies(query);
});

// Search Growstuff for whole plant species, ie all potoatoes
async function searchSpecies(query) {
  console.log("Searching...");
  const endpoint = `http://localhost:6060/search-species?term=${query}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    searchResultsDisplay(data);
  } catch (error) {
    console.error("Error fetching plants:", error);
  }
}

// Search Growstuff for individual plant, ie sweet potato
// let currentPlantIndex = 0;
async function searchPlant(queryParam) {
  let response = await fetch(`http://growstuff.org/crops/${queryParam}.json`);
  let data = await response.json();
  plant = data.results;
  createCard(plant);
  // createPlant(plants[currentPlantIndex])
}

// // Get plants from database need to match PLANTCONTAINER with the element ID from index.html
// async function getPlants() {
//   // Main results structure
//   plants.forEach((plant) => {
//     //Create Card
//     const resultCard = document.createElement("div");
//     resultCard.classList.add("result-card");

//     const plantImg = document.createElement("img");
//     plantImg.src = plant.thumbnail_url;
//     plantImg.alt = plant.description;

//     const plantInfo = document.createElement("div");
//     plantInfo.classList.add("plant-info");

//     // Append the container to the main messageContainer
//     messageContainer.appendChild(plantItem);
//     // Event listener for delete, needs to match index.html
//     deleteButton.addEventListener("click", (e) => {
//       e.preventDefault();
//       handleDelete(plant.id);
//     });
//   });
// }

// Search Growstuff, requires paramater search(queryParam)
async function search(queryParam) {
  let response = await fetch(`http://growstuff.org/crops/${queryParam}.json`);
  let data = await response.json();
  plants = data.results;
  searchResultsDisplay(plants);
  // createPlant(plants[currentPlantIndex])
}

// // Get plants from database need to match PLANTCONTAINER with the element ID from index.html
// async function getPlants() {
//   // Clear the plantContainer of previous results
//   plantCardsCntr.innerHTML = "";
//   const response = await fetch(`${baseURL}/plants`);
//   const plants = await response.json();

//   searchResultsDisplay(plants)

//     // Append the container to the main messageContainer
//     messageContainer.appendChild(plantItem);
//     // Event listener for delete, needs to match index.html
//     deleteButton.addEventListener("click", (e) => {
//       e.preventDefault();
//       handleDelete(plant.id);
//     });
//   });

async function handleDelete(id) {
  const result = await fetch(`${baseURL}/plants/${id}`, {
    method: "DELETE",
  });
  console.log(result);
  if (result.ok) {
    getPlants();
  }
}
