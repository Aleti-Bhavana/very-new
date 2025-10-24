// backend/routes/students.js
const express = require("express");
const router = express.Router();
const db = require("../database");

// ➕ Create student
router.post("/", (req, res) => {
  const { name, age, course } = req.body;
  db.run(
    "INSERT INTO students (name, age, course) VALUES (?, ?, ?)",
    [name, age, course],
    function (err) {
      if (err) res.status(400).json({ error: err.message });
      else res.json({ id: this.lastID, name, age, course });
    }
  );
});

// 📋 Get all students
router.get("/", (req, res) => {
  db.all("SELECT * FROM students", [], (err, rows) => {
    if (err) res.status(400).json({ error: err.message });
    else res.json(rows);
  });
});

// ✏️ Update student
router.put("/:id", (req, res) => {
  const { name, age, course } = req.body;
  db.run(
    "UPDATE students SET name = ?, age = ?, course = ? WHERE id = ?",
    [name, age, course, req.params.id],
    function (err) {
      if (err) res.status(400).json({ error: err.message });
      else res.json({ updatedID: req.params.id });
    }
  );
});

// ❌ Delete student
router.delete("/:id", (req, res) => {
  db.run("DELETE FROM students WHERE id = ?", req.params.id, function (err) {
    if (err) res.status(400).json({ error: err.message });
    else res.json({ deletedID: req.params.id });
  });
});

module.exports = router;
