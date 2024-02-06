const baseURL = "http://localhost:5432";

// These need to be the IDs from the frontend
const form = document.getElementById("form");
const plantContainer = document.getElementById("plantContainer");

// Search Growstuff, requires paramater search(queryParam)
let plants =[];
let currentPlantIndex = 0;
async function search (queryParam) {
  let response = await fetch (
    `http://growstuff.org/crops/${queryParam}.json`
  )
  let data = await response.json();
  plants = data.results;
  createPlant(plants[currentPlantIndex])
}

function createPlant(plant) {
  plantContainer.innerHTML=""
    let API_ID = plant.id;
    let name = plant.name;
    let en_wikipedia_url = plant.en_wikipedia_url;
    let height = plant.openfarm_data.attributes.height;
    let spread = plant.openfarm_data.attributes.spread;
    let description = plant.openfarm_data.attributes.description;
    let row_spacing = plant.openfarm_data.attributes.row_spacing;
    let sowing_method = plant.openfarm_data.attributes.sowing_method;
    let main_image_path = plant.openfarm_data.attributes.main_image_path;
    let sun_requirements = plant.openfarm_data.attributes.sun_requirements;
    let scientific_names = plant.scientific_names;
    let patches = "";
}


// Get plants from database need to match PLANTCONTAINER with the element ID from index.html
async function getPlants() {
  const plantContainer = document.getElementById("PLANTCONTAINER");

  // Clear the plantContainer of previous results
  PLANTCONTAINER.innerHTML = "";
  const response = await fetch(`${baseURL}/plants`);
  const plants = await response.json();

  // Loop through the plants if more than one returned
  plants.forEach(function (plant) {
    const plantItem = document.createElement("div");
    plantItem.classList.add("plant-item");

    const p = document.createElement("p");
    p.textContent = plant.plant;

    // Add a delete button to each plant
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("type", "submit");

    // Append the plant and delete button to the container
    plantItem.appendChild(p);
    plantItem.appendChild(deleteButton);

    // Append the container to the main messageContainer
    messageContainer.appendChild(plantItem);
    // Event listener for delete, needs to match index.html
    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      handleDelete(plant.id);
    });
  });
}


async function handleDelete(id) {
  const result = await fetch(`${baseURL}/plants/${id}`, {
    method: 'DELETE'
  })
  console.log(result);
  if (result.ok) {
    getPlants();
  }
}
