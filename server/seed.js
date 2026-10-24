const pool = require("./db");

const tours = [
  {
    id: 1,
    title: "Iceland Adventure",
    duration: 7,
    price: 899,
    description: "Have you ever wanted to see the beauty of Iceland? Here's your chance."
  },
  {
    id: 2,
    title: "Italian Escape",
    duration: 5,
    price: 649,
    description: "Visit Rome, discover its ancient history and explore the Italian culture."
  },
  {
    id: 3,
    title: "Japan Discovery",
    duration: 10,
    price: 1399,
    description: "Travel through Tokyo, Kyoto and Osaka, experience Japan on an unforgettable journey!"
  },
  {
    id: 4,
    title: "Hungarian Weekend",
    duration: 3,
    price: 399,
    description: "Spend an unforgettable weekend in Budapest, one of Europe's most beautiful capital cities!"
  }
];

async function seed() {
  try {
    for (const tour of tours) {
      await pool.query(
        `INSERT INTO tours (id, title, duration, price, description)
         VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT (id) DO NOTHING`,
        [tour.id, tour.title, tour.duration, tour.price, tour.description]
      );
    }

    console.log("Tours seeded successfully!");
  } catch (error) {
    console.error("Seed error:", error.message);
  } finally {
    await pool.end();
  }
}

seed();