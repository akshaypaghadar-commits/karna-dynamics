const Contact = require("../models/Contact");

exports.create = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ message: "Name, email and message are required" });
    const doc = await Contact.create({ name, email, subject, message });
    console.log(`\u2709 New contact from ${name} <${email}>`);
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.list = async (_req, res) => {
  const docs = await Contact.find().sort({ createdAt: -1 });
  res.json(docs);
};

exports.remove = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
