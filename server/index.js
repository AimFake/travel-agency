const express = require("express");
const app = express();
const PORT = 3001;
const pool = require("./db");
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173"
}));

app.get("/api/health", (req, res) => {
  res.json({ message: "Backend is running!" });
});

app.get("/api/db-check", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW() AS current_time");
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.get("/api/tours", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM tours ORDER BY id"
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching tours:", error.message);
    res.status(500).json({ error: "Failed to fetch tours" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
