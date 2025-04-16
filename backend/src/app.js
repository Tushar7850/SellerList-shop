const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productsRoutes");
const cartRoutes = require("./routes/cartRoutes.js");
dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

app.use("/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;
