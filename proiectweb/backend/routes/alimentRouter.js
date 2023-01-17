const alimentController = require("../controllers/alimentController");
const { authenticate } = require("../controllers/authController");
const router = require("express").Router();

router.post("/add", authenticate, alimentController.addAliment);

router.get("/allAlimente", authenticate, alimentController.getAllAlimente);

router.get(
  "/alimenteDisponibile",
  authenticate,
  alimentController.getAlimenteDisponibile
);

router.get("/:id", authenticate, alimentController.getAliment);

router.put("/rezerva/:id", authenticate, alimentController.rezervaAliment);

router.put("/:id", authenticate, alimentController.updateAliment);

router.delete("/:id", authenticate, alimentController.deleteAliment);

module.exports = router;
