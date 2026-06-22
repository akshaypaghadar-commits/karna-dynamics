const Event = require("../models/Event");

exports.list = async (_req, res) => {
  const docs = await Event.find().sort({ date: 1 });
  res.json(docs);
};

exports.create = async (req, res) => {
  try {
    const doc = await Event.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  const doc = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!doc) return res.status(404).json({ message: "Not found" });
  res.json(doc);
};

exports.remove = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
