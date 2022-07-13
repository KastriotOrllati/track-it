const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { auth } = require("../middlewares/authentication");

router.get("/:id", auth, userController.getUserById);
router.post("/signup", userController.register);
router.put("/:id", auth, userController.editUser);
router.put("/:id/editPassword", auth, userController.changePassword);
router.delete("/:id", auth, userController.deleteUser);

module.exports = router;
