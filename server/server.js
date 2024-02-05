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
