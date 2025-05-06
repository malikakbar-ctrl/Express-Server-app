const express = require("express");
const { doSomeHeavyTask } = require("./util");

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello from the Express server!");
});

app.get("/slow", async (req, res) => {
  const result = await doSomeHeavyTask();
  res.send(`Heavy task completed: ${result}`);
});

app.listen(PORT, () => {
  console.log(`Express Server Started at http://localhost:${PORT}`);
});

