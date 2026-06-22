const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String },
    type: { type: String, default: "Event" },
    image: { type: String },
    description: { type: String },
    past: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
