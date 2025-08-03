const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));

// Set Pug as the view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Set up SQLite database
const db = new sqlite3.Database(
  path.join(__dirname, "data", "database.sqlite")
);

// Route to render dynamic content
app.get("/", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      return res.status(500).send("Database error");
    }
    res.render("index", { users: rows });
  });
});

// Add a user (for testing)
app.get("/add", (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.redirect("/");
  }
  db.run("INSERT INTO users (name) VALUES (?)", [name], function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send("Database error");
    }
    res.redirect("/");
  });
});

app.post("/update/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  if (!name) {
    return res.redirect("/");
  }
  db.run("UPDATE users SET name = ? WHERE id = ?", [name, id], function (err) {
    if (err) {
      return res.status(500).send("Database error");
    }
    res.redirect("/");
  });
});

app.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.run("DELETE FROM users WHERE id = ?", [id], function (err) {
    if (err) {
      return res.status(500).send("Database error");
    }
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
