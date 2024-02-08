import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const app = express();
const db = new Database("database.db");

const PORT = 6060;

app.use(cors());
app.use(express.json());

// Root route
app.listen(PORT, () => {
  console.log(`The server is online on port ${PORT}.`);
});

// Initial Get
app.get("/", (req, res) => {
  try {
    console.log(req);
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json(error);
  }
});

// Search Endpoint
app.get("/search-species", async (req, res) => {
  const query = req.query.term;
  const endpoint = `https://www.growstuff.org/crops/search.json?term=${query}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching plants:", error);
    res.status(500).json({ error: "Error fetching plants" });
  }
});

app.get("/crops/:id", async (req, res) => {
  console.log("received request");
  const query = req.params.id;
  const endpoint = `https://www.growstuff.org/crops/${query}.json`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching plants:", error);
    res.status(500).json({ error: "Error fetching plants" });
  }
});

// Get all plants from our own database
app.get("/plants", (req, res) => {
  try {
    let plants = db.prepare(`SELECT * FROM plants`).all();
    res.status(200).json(plants);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete plant by id from our database
app.delete("/plants/:id", (req, res) => {
  try {
    const id = req.params.id;
    const deletedPlant = db.prepare(`DELETE FROM  plants WHERE id = ?`).run(id);
    res.status(200).json({ recordDeleted: deletedPlant });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// TESTING Post new plant
// app.post("/plants", (req, res) =>{
//   console.log(req.body)
//   try {
//     const API_ID = req.body.API_ID;
//     const name = req.body.name;
//     const newPlant = db.prepare(`INSERT INTO plants (API_ID, name) VALUES (?,?)`).run(API_ID, name);
//     response.json(newPlant);
//   } catch (err) {
//     res.status(500).json({ error: err})
//   }
// })

app.post("/plants", function (req, res) {
  console.log(req.body);
  try {
    const API_ID = req.body.API_ID;
    const name = req.body.name;
    const en_wikipedia_url = req.body.en_wikipedia_url;
    const height = req.body.height;
    const spread = req.body.spread;
    const description = req.body.description;
    const row_spacing = req.body.row_spacing;
    const sowing_method = req.body.sowing_method;
    const main_image_path = req.body.main_image_path;
    const sun_requirements = req.body.sun_requirements;
    const scientific_names = req.body.scientific_names;
    const svg_icon = req.body.svg_icon;
    const newPlant = db
      .prepare(
        `INSERT INTO plants (API_ID, name, en_wikipedia_url, height, spread, description, row_spacing, sowing_method, main_image_path, sun_requirements, scientific_names, svg_icon) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`
      )
      .run(
        API_ID,
        name,
        en_wikipedia_url,
        height,
        spread,
        description,
        row_spacing,
        sowing_method,
        main_image_path,
        sun_requirements,
        scientific_names,
        svg_icon
      );
    res.json({ success: "success" });
  } catch (err) {
    res.status(500).json({ error: `${err}` });
  }
});

//TESTING PUT to update a plant
// app.put(`/plants/:id`, (req, res) => {
//   console.log(req.params, req.body)
//   try {
//     const id = req.params.id
//     const API_ID = req.body.API_ID
//     const name = req.body.name

//     const updatePlant = db.prepare(`UPDATE plants SET API_ID=?,name=?, WHERE id = ?`).run(API_ID, name, id)
//     res.status(204).json({plant: updatePlant})
//   } catch (err) {
//     res.status(500).json({error: err})
//   }
// }
// )

app.put(`/plants/:id`, (req, res) => {
  console.log(req.params, req.body);
  try {
    const id = req.params.id;
    const API_ID = req.body.API_ID;
    const name = req.body.name;
    const en_wikipedia_url = req.body.en_wikipedia_url;
    const height = req.body.height;
    const spread = req.body.spread;
    const description = req.body.description;
    const row_spacing = req.body.row_spacing;
    const sowing_method = req.body.sowing_method;
    const main_image_path = req.body.main_image_path;
    const sun_requirements = req.body.sun_requirements;
    const scientific_names = req.body.scientific_names;
    const patches = req.body.patches;
    const updatePlant = db
      .prepare(
        `UPDATE plants SET API_ID=?,name=?, en_wikipedia_url=?, height=?, spread=?,description=?, row_spacing=?, sowing_method=?, main_image_path=?, sun_requirements=?, scientific_names=?, patches=?  WHERE id = ?`
      )
      .run(
        API_ID,
        name,
        en_wikipedia_url,
        height,
        spread,
        description,
        row_spacing,
        sowing_method,
        main_image_path,
        sun_requirements,
        scientific_names,
        patches,
        id
      );
    res.status(204).json({ plant: updatePlant });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
