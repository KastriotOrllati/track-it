const express = require("express");
const router = express.Router();
const locationController = require("../controllers/locationController");
const { auth } = require("../middlewares/authentication");

router.post("/", locationController.saveLocation);
router.get("/allLocations", locationController.getAllLocations);
router.get("/:id", locationController.getLocationByPostman);

module.exports = router;