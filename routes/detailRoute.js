const express = require("express");
const router = express.Router();
const detailController = require("../controllers/detailsController");
const { auth } = require("../middlewares/authentication");
const { authorization } = require("../middlewares/authorization");

router.get("/country", detailController.getCountry);
router.get("/city/:id", detailController.getCity);
router.get("/role", detailController.getRole);

module.exports = router;
