const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Todo API is running!",
  });
});

// Get all todos
app.get("/todos", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Learn Git",
      completed: false,
    },
  ]);
});

// Get a single todo
app.get("/todos/:id", (req, res) => {
  res.json({
    id: req.params.id,
    title: "Learn Git",
    completed: false,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});