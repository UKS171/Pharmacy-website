const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/products");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/pharmacy")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
