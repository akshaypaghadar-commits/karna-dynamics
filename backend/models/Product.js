const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    parent: { type: String, default: null },
    tagline: { type: String },
    image: { type: String },
    summary: { type: String },
    features: [String],
    applications: [String]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
