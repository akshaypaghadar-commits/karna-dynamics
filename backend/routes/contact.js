const router = require("express").Router();
const auth = require("../middleware/auth");
const { create, list, remove } = require("../controllers/contactController");

router.post("/", create);            // public: contact form
router.get("/", auth, list);         // admin
router.delete("/:id", auth, remove); // admin

module.exports = router;
