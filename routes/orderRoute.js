const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { auth } = require("../middlewares/authentication");

// router.get("/order-list", orderController.getOrder);
router.post("/", auth, orderController.registerOrder);
router.get("/allOrders", orderController.getAllOrders);
router.get("/postman/:id", orderController.getOrderByPostman);
router.get("/:id", orderController.getOrderById);
router.get("/:statusi/:id", orderController.getOrderByStatus);
router.get("/", auth, orderController.getOrdersByUser);
router.put("/:id", orderController.editOrderStatus);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;