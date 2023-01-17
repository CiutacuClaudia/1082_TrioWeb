const utilizatorController = require("../controllers/utilizatorController.js");
const { authenticate } = require("../controllers/authController");
const router = require("express").Router();

router.get(
  "/AllUtilizator",
  authenticate,
  utilizatorController.getAllUtilizatorii
);

router.get("/", authenticate, utilizatorController.getUtilizator);

router.put("/", authenticate, utilizatorController.updateUtilizator);

router.delete("/", authenticate, utilizatorController.deleteUtilizator);

module.exports = router;
