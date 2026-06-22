const router = require("express").Router();
const auth = require("../middleware/auth");
const { list, getOne, create, update, remove } = require("../controllers/productController");

router.get("/", list);                 // public
router.get("/:slug", getOne);          // public
router.post("/", auth, create);        // admin
router.put("/:id", auth, update);      // admin
router.delete("/:id", auth, remove);   // admin

module.exports = router;
