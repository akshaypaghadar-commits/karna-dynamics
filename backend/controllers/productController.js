const Product = require("../models/Product");

exports.list = async (_req, res) => {
  const docs = await Product.find().sort({ createdAt: -1 });
  res.json(docs);
};

exports.getOne = async (req, res) => {
  const doc = await Product.findOne({ slug: req.params.slug });
  if (!doc) return res.status(404).json({ message: "Not found" });
  res.json(doc);
};

exports.create = async (req, res) => {
  try {
    const doc = await Product.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  const doc = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!doc) return res.status(404).json({ message: "Not found" });
  res.json(doc);
};

exports.remove = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
