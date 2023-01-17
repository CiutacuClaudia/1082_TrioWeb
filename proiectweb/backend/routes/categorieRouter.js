const categorieController = require("../controllers/categorieController.js");
const { authenticate } = require("../controllers/authController");

const router = require("express").Router();

router.post("/addCategorie", authenticate, categorieController.addCategorie);
router.get("/all", authenticate, categorieController.getAllCategories);
router.get("/:id", authenticate, categorieController.getCategorie);

module.exports = router;
