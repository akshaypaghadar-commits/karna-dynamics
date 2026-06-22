const mongoose = require("mongoose");

async function connectDB() {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/karna_dynamics";
  try {
    await mongoose.connect(uri);
    console.log("\u2713 Connected to MongoDB");
  } catch (err) {
    console.warn("\u26A0 MongoDB not reachable:", err.message);
    console.warn("  The server will still start. Start MongoDB and run `npm run seed`.");
  }
}

module.exports = connectDB;
