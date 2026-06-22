require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const connectDB = require("./config/db");
const User = require("./models/User");
const Event = require("./models/Event");

const events = [
  { title: "Karna Robotics & Automation Expo", date: "2026-08-14", location: "Surat, Gujarat", type: "Exhibition", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80", description: "Our flagship showcase of intelligent ground vehicles, swarm robots, ROVs and live automation demos.", past: false },
  { title: "Hands-on VR & AR Workshop", date: "2026-09-05", location: "Karna Dynamics Lab, Surat", type: "Workshop", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=1200&q=80", description: "Build and operate a VR-controlled robot and explore AR maintenance guidance.", past: false },
  { title: "Industry 4.0 & Smart Energy Webinar", date: "2026-10-02", location: "Online", type: "Webinar", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80", description: "How connected machines and the Smart Three Phase Energy Meter cut energy cost and downtime.", past: false },
  { title: "Campus Robotics Lab Setup Drive", date: "2026-07-20", location: "Engineering Colleges, Gujarat", type: "Program", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80", description: "Setting up robotics and automation labs with curriculum, kits and mentoring.", past: true }
];

(async () => {
  await connectDB();
  try {
    const email = (process.env.ADMIN_EMAIL || "admin@karnadynamics.com").toLowerCase();
    const password = process.env.ADMIN_PASSWORD || "admin123";
    const hash = await bcrypt.hash(password, 10);
    await User.findOneAndUpdate(
      { email },
      { name: "Administrator", email, password: hash, role: "admin" },
      { upsert: true, new: true }
    );
    console.log(`\u2713 Admin ready -> ${email} / ${password}`);

    await Event.deleteMany({});
    await Event.insertMany(events);
    console.log(`\u2713 Seeded ${events.length} events`);
  } catch (err) {
    console.error("Seed failed:", err.message);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
})();
