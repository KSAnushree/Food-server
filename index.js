const express = require("express");
const app = express();
const port = 3000;

const foodItems = [
  { name: "dosa", price: 60, id: 1, description: "breakfast" },
  { name: "idly", price: 30, id: 2, description: "breakfast" },
];

app.get("/foods", (req, res) => {
  res.json(foodItems);
});
// to run the server command is : node index.js
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
