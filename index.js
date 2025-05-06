const express = require("express");
const { doSomeHeavyTask } = require("./util");

const app = express();
const PORT = process.env.PORT || 8000;

// Root route
app.get("/", (req, res) => {
  res.send("Hello from the Express server!");
});

// Route that performs a heavy task
app.get("/slow", async (req, res) => {
  try {
    // Perform the heavy task
    const result = await doSomeHeavyTask();
    res.send(`Heavy task completed: ${result}`);
  } catch (error) {
    // Handle errors from the heavy task
    console.error("Error in heavy task:", error.message);
    res.status(500).send(`Error: ${error.message}`);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Express Server Started at http://localhost:${PORT}`);
});
