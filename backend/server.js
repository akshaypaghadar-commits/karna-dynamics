require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ status: "ok", service: "karna-dynamics-api" }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/events", require("./routes/events"));
app.use("/api/products", require("./routes/products"));

app.use((_req, res) => res.status(404).json({ message: "Route not found" }));
app.use((err, _req, res, _next) => {
  console.error(err.message);
  res.status(500).json({ message: "Server error" });
});

const PORT = process.env.PORT || 5000;
connectDB().finally(() => {
  app.listen(PORT, () => console.log(`\uD83D\uDE80 API running on http://localhost:${PORT}/api`));
});
