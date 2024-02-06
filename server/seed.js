import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS plants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    API_ID INTEGER,
    name TEXT,
    en_wikipedia_url TEXT,
    height INTEGER,
    spread INTEGER,
    description TEXT,
    row_spacing INTEGER,
    sowing_method TEXT,
    main_image_path TEXT,
    sun_requirements TEXT,
    scientific_names TEXT,
    patches TEXT
  )
`);
db.exec(`
  INSERT INTO plants (API_ID, name, en_wikipedia_url, height, spread, description, row_spacing, sowing_method, main_image_path, sun_requirements, scientific_names, patches)
  VALUES
    (
      37,
      'Carrot',
      'https://en.wikipedia.org/wiki/Carrot',
      10,
      5,
      'The carrot is a root vegetable. It is usually orange in color, but some cultivars are purple, black, red, white, and yellow. The most commonly eaten part of the plant is the taproot, but the greens are sometimes eaten as well. The leaves appear first, and the taproot grows more slowly beneath the soil. Fast-growing cultivars mature within three months of sowing the seed. Slower-maturing cultivars are harvested four months after sowing.',
      5,
      'Direct Seed, thin to 3cm apart when seedlings are 8cm high',
      'https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/58c312395865650004000000.jpg?1489179191',
      'Full Sun',
      'Daucus carota',
      'one, three'
    ),

    (
      164,
      'Potato',
      'https://en.wikipedia.org/wiki/Potatoes',
      60,
      30,
      'Potatoes are starchy root vegetables in the Solanaceae, or Nightshade, family, which also includes tomatoes, eggplants, and peppers. They originated in South America, and spread to become a worldwide staple. The leaves and fruit are usually poisonous and the stem tuber is the only edible part once it is cooked. The potato can be cooked in many ways, brewed into alcohol, and also used as the basis for creating bioplastics. More growing information is available in individual species entries.',
      90,
      'Direct seed outdoors after last frost. Each piece must have one eye.',
      'https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551dbd5a3732390003600100.jpg?1428012376',
      'Full Sun',
      'Solanum tuberosum',
      'two four'
    ),

    (
      146,
      'Pea',
      'https://en.wikipedia.org/wiki/Pea',
      60,
      3,
      '',
      30,
      'Direct.',
      'https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b8edefe8d75000300043c.jpg?1466666716',
      'Full Sun',
      'Pisum sativum',
      'one two four'
    )`
);
