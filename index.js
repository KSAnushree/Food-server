const express = require("express");
const app = express();
const port = 3000;

// Hey Anu, I've created this simple endpoints for you and this should work. All you need to do is run the server 
// node index.js
// If you wanna dry run and try. Use POST man. Ask me how to use it, I'll help you out.
// I have added a json file for you to test the endpoints. You can import the file Food Menu app.postman_collection.json
// Import that file in postman and you can see the endpoints. Check with ai on how to import in postman and try to import and check.

app.use(express.json());

// In-memory data
let foodItems = [
  { name: "dosa", price: 60, id: 1, description: "breakfast" },
  { name: "idly", price: 30, id: 2, description: "breakfast" },
];

// GET /foods - Retrieve all food items
app.get("/foods", (req, res) => {
  res.json(foodItems);
});

// POST /foods - Create a new food item
app.post("/foods", (req, res) => {
  const food = req.body;
  foodItems.push(food);
  res.status(201).json(food);
});

// PUT /foods/:id - Update an existing food item
app.put("/foods/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const foodIndex = foodItems.findIndex(f => f.id === id);
  
  if (foodIndex === -1) {
    return res.status(404).json({ error: "Food item not found" });
  }

  const updatedFood = { ...req.body, id };
  foodItems[foodIndex] = updatedFood;
  res.json(updatedFood);
});

// DELETE /foods/:id - Delete a food item
app.delete("/foods/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const foodIndex = foodItems.findIndex(f => f.id === id);
  
  if (foodIndex === -1) {
    return res.status(404).json({ error: "Food item not found" });
  }

  foodItems.splice(foodIndex, 1);
  res.status(200).json({}); // Return empty object for Unit response
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});