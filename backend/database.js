const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./students.db", (err) => {
  if (err) console.error("Error opening database", err);
  else {
    db.run(
      `CREATE TABLE IF NOT EXISTS students(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER,
        course TEXT
      )`
    );
  }
});

module.exports = db;
