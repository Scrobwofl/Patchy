import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS plants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    en_wikipedia_url TEXT,
    height INTEGER,
    spread INTEGER,
    description TEXT,
    row_spacing INTEGER,
    sun_requirements TEXT,
    scientific_names TEXT
  )
`);
db.exec(`
INSERT INTO plants (name, en_wikipedia_url, height, spread, description, row_spacing, sun_requirements, scientific_names)
VALUES
('carrot', 'https://en.wikipedia.org/wiki/Carrot', 10, 5, 'The carrot is a root vegetable. It is usually orange in color, but some cultivars are purple, black, red, white, and yellow. The most commonly eaten part of the plant is the taproot, but the greens are sometimes eaten as well. The leaves appear first, and the taproot grows more slowly beneath the soil. Fast-growing cultivars mature within three months of sowing the seed. Slower-maturing cultivars are harvested four months after sowing.', 5, 'Full Sun', 'Daucus carota')
`);
