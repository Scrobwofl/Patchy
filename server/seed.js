import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS plants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    API_ID INTEGER NOT NULL,
    name TEXT NOT NULL,
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
      'Potatoes are starchy root vegetables in the Solanaceae, or Nightshade, family, which also includes tomatoes, eggplants, and peppers. They originated in South America, and spread to become a worldwide staple. The leaves and fruit are usually poisonous and the stem tuber is the only edible part once it is cooked. The potato can be cooked in many ways, brewed into alcohol, and also used as the basis for creating bioplastics.',
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
      'Peas are easy to grow, but their growing period is limited. It’s essential to plant them early enough in spring so they mature while the weather is still cool! (This means planting in most parts of the United States and Canada in February, March, or April.) However, they can also be grown as a fall or winter crop in warmer regions.',
      30,
      'Direct.',
      'https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b8edefe8d75000300043c.jpg?1466666716',
      'Full Sun',
      'Pisum sativum',
      'one two four'
    ),
    (
      172,
      'Radish',
      'https://en.wikipedia.org/wiki/Radish',
      15,
      8,
      'Radishes are fast-growing cool season root vegetables in the Brassica family. Their taproots come in variety of shapes, sizes, and colors and have a sharp, spicy taste. They are usually eaten raw and added to salads. Radishes need cool weather and moist soil - they do not do well in hot, dry environments.',
      10,
      'Direct seed outdoors',
      'https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/54a9dda633316500020b0000.jpg?1420418467',
      'Full Sun',
      'Raphanus sativus',
      'four'
    ),
    (
      397,
      'Cherry Tomato',
      'http://en.wikipedia.org/wiki/Cherry_tomato',
      60,
      45,
      'Cherry tomatoes range in size from a thumbtip to the size of a golf ball. Their shape ranges from spherical to slightly oblong to pointed at the bottom. They are often red, but can also be yellow, green, striped, and even black. More oblong cherry tomatoes often share characteristics with plum tomatoes, and are known as grape tomatoes. Cherry tomatoes can be quite sweet (such as the Sungold or Sunsweet yellow varieties), more traditionally acidic, or deep in flavor. They are delicious for snacking, in salads, lightly roasted or grilled, or baked. They require little to no pruning unlike larger tomato plants.',
      60,
      'Sow seeds indoors 6-8 weeks before the last expected frost',
      'https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/57073ebd4a3af70003000006.jpg?1460092602',
      'Full sun',
      'Solanum lycopersicum var. cerasiforme',
      'one four'
    ),
    (
      895,
      'Red Onion',
      'http://en.wikipedia.org/wiki/Cherry_tomato',
      60,
      13,
      'Red onions are onion cultivars that have purplish red skin and white flesh tinged with red. They are members of the Allium family along with garlic and leeks. They have a sweet to mild flavor and can be eaten raw (in salads and guacamole), grilled, sautéed, or baked. Make sure to choose a variety suited to your day length.',
      10,
      'Direct seed indoors or plant sets (small bulbs) outside.',
      'https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/54a9dc3633316500020a0000.jpg?1420418099',
      'Full sun',
      'Ficus hispida',
      'Two Three'
    )`
);
