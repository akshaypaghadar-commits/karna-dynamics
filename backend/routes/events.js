const router = require("express").Router();
const auth = require("../middleware/auth");
const { list, create, update, remove } = require("../controllers/eventController");

router.get("/", list);               // public
router.post("/", auth, create);      // admin
router.put("/:id", auth, update);    // admin
router.delete("/:id", auth, remove); // admin

module.exports = router;
