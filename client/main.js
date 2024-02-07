console.log("Connected...");
const baseURL = "http://localhost:5432";
const plantCardCntr = document.getElementById("plant-card-container");

let returnedPlantData;
let plants;
let plant;
let currentPlantIndex = 0;
let myPatch = [];

// Create single card with full plant information
function createCard(data) {
  console.log("Making Card");
  console.log(data);
  const plantAttribute = data.openfarm_data.attributes;

  plantCardCntr.innerHTML = "";
  console.log("Cleared HTML");
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
  console.log("Created Base Attributes");
  // Adding Header box
  const cardHeaderTitle = document.createElement("h1");
  // console.log(plantAttribute.name);
  cardHeaderTitle.textContent = upperCaseThatTitlePlease(data.name);
  const cardHeaderSubheading = document.createElement("p");
  cardHeaderSubheading.textContent = plantAttribute.binominal_name;
  const cardHeaderImg = document.createElement("img");
  cardHeaderImg.src = plantAttribute.main_image_path;
  cardHeaderImg.alt = plantAttribute.description;
  console.log("Appending Close Button");
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
  cardDescText.textContent = plantAttribute.description;
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
    plantAttribute.height,
    plantAttribute.spread,
    plantAttribute.rowSpacing,
    plantAttribute.sowingMethod,
    plantAttribute.sunRequirements,
  ];

  // A looping the details creation so we dont repeat ourselves too much
  cardDetailsArray.forEach((detail, index) => {
    console.log(`Looping ${index}`);
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
  wikiLinkBtn.innerHTML = `<a href=${data.en_wikipedia_url}><i class="fa-solid fa-square-arrow-up-right"></i>Wiki Page</a>`;
  wikiLinkBtn.classList.add("buttons");

  const addToPatchBtn = document.createElement("button");
  addToPatchBtn.innerHTML = `<i class="fa-solid fa-circle-plus"></i>Add to Patch`;
  addToPatchBtn.classList.add("buttons");

  // Add to myPatch event listener
  addToPatchBtn.addEventListener("click", () => {
    console.log("Commenced adding to patch");

    let newPatchItem = {
      id: data.id,
      name: data.openfarm_data.attributes.name,
      wikiUrl: data.openfarm_data.attributes.en_wikipedia_url,
      height: data.openfarm_data.attributes.height,
      spread: data.openfarm_data.attributes.spread,
      desc: data.openfarm_data.attributes.description,
      rowSpacing: data.openfarm_data.attributes.row_spacing,
      sowingMethod: data.openfarm_data.attributes.sowing_method,
      imagePath: data.openfarm_data.attributes.main_image_path,
      sunRequirements: data.openfarm_data.attributes.sun_requirements,
      scientificName: data.openfarm_data.attributes.scientific_name,
    };

    myPatch.push(newPatchItem);
    console.log(myPatch);
  });

  console.log("buttons made!");

  cardBtnCntr.appendChild(wikiLinkBtn);
  cardBtnCntr.appendChild(addToPatchBtn);

  // Append Everything
  cardCntr.appendChild(cardHeaderCntr);
  cardCntr.appendChild(cardDescCntr);
  cardCntr.appendChild(cardDetailsCntr);
  cardCntr.appendChild(cardBtnCntr);
  plantCardCntr.appendChild(cardCntr);

  // selectedPlant();
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
    resultTitle.innerText = upperCaseThatTitlePlease(plant.name);
    const scienceName = document.createElement("p");
    scienceName.innerText = plant.scientific_names;

    plantInfo.append(resultTitle, scienceName);

    resultCard.append(plantImg, plantInfo);
    searchResultsCntr.appendChild(resultCard);

    resultCard.addEventListener("click", () => {
      console.log(`Clicked ${plant.name}`);
      getSpecificPlant(plant.id);
    });
  });
}

function upperCaseThatTitlePlease(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

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
async function getSpecificPlant(query) {
  console.log("Requested Data..");
  let response = await fetch(`http://localhost:6060/crops/${query}`);
  let data = await response.json();
  console.log("Data fetched successfully:", data);
  createCard(data);
  // createPlant(plants[currentPlantIndex])
}

// Search Growstuff, requires paramater search(queryParam)
async function search(queryParam) {
  let response = await fetch(`http://growstuff.org/crops/${queryParam}.json`);
  let data = await response.json();
  plants = data.results;
  searchResultsDisplay(plants);
  // createPlant(plants[currentPlantIndex])
}

// Useful scripts for later:

// async function handleDelete(id) {
//   const result = await fetch(`${baseURL}/plants/${id}`, {
//     method: "DELETE",
//   });
//   console.log(result);
//   if (result.ok) {
//     getPlants();
//   }
// }

// deleteButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   handleDelete(plant.id);
// });
