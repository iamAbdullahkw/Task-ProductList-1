const express = require("express");
const products = require("./data");

const PORT = 8000;
const app = express();
app.get("/api/products", (req, res) => {
  return res.json(products);
});

app.listen(PORT, () => {
  console.log("Server is Successfully Running," + PORT);
});
