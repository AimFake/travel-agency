const express = require("express");
const app = express();
const PORT = 3001;
const pool = require("./db");

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

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
