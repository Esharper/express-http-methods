const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});


app.get("/about", (req, res) => {
  res.json({ message: "This is the about page." });
});


app.post("/contact", (req, res) => {
  const data = req.body; // Access submitted data
  res.json({ message: "Contact data received.", data });
});


app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ID received: ${userId}` });
});


app.get("/search", (req, res) => {
  const query = req.query; // Access query parameters
  res.json({ message: "Search query received.", query });
});

app.all("*", (req, res) => {
  res.status(404).json({ error: "Route not found." });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});