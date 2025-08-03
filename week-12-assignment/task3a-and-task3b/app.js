const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const PORT = 5000;

// Serve static assets
app.use(express.static(path.join(__dirname, "public")));

// Session configuration
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Routes
app.get("/", (req, res) => {
  if (!req.session.count) {
    req.session.count = 0;
  }
  req.session.count++;

  res.send(`
    <h1>Express Static Assets & Session Management</h1>
    <p>Visit count: ${req.session.count}</p>
    <p>Session ID: ${req.session.id}</p>
    <p>Static file test: <a href="/test.txt">test.txt</a></p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
