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
 // Get all plants
app.get("/plants", (req, res) => {
  try {
    let plants = db.prepare (`SELECT * FROM plants`).all()
    res.status(200).json(plants);
    } catch (err) {
    res.status(500).json(err)
  }
})

// Delete plant by id
app.delete('/plants/:id', (req, res) => {
  try {
    const id = req.params.id
    const deletedPlant = db.prepare(`DELETE FROM  plants WHERE id = ?`).run(id)
    res.status(200).json ({recordDeleted: deletedMessage})
  } catch(err) {
    res.status(500).json({error: err})
  }
})

// Post new plant
app.post("/plants", function (req, res) {
  console.log(req.body);
  try{
    const name = req.body.name;
    const en_wikipedia_url = req.body.en_wikipedia_url;
    const height = req.body.height
    const spread = req.body.spread
    const description = req.body.description
    const row_spacing = req.body.row_spacing
    const sowing_method = req.body.sowing_method
    const main_image_path = req.body.main_image_path
    const sun_requirements = req.body.sun_requirements
    const scientific_names = req.body.scientific_names
    const newPlant = db
    .prepare(`INSERT INTO plants (name, en_wikipedia_url, height, spread, description, row_spacing, sowing_method, main_image_path, sun_requirements, scientific_names) VALUES (?,?,?,?,?,?,?,?,?,?)`)
    .run(plant);
  response.json(newPlant);
  } catch (err) {
    res.status(500).json({ error: err})
  }
});

