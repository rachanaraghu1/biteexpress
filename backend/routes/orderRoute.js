import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  listOrders,
  placeOrder,
  updateStatus,
  userOrders,
  verifyOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

/**
 * @route   POST /api/order/place
 * @desc    Place a new order (auth required)
 */
orderRouter.post("/place", authMiddleware, placeOrder);

/**
 * @route   POST /api/order/verify
 * @desc    Verify an order (e.g. payment confirmation)
 */
orderRouter.post("/verify", verifyOrder);

/**
 * @route   POST /api/order/userorders
 * @desc    Get all orders of a logged-in user (auth required)
 */
orderRouter.post("/userorders", authMiddleware, userOrders);

/**
 * @route   GET /api/order/list
 * @desc    Admin: get all orders
 */
orderRouter.get("/list", listOrders);

/**
 * @route   POST /api/order/status
 * @desc    Admin: update status of an order
 */
orderRouter.post("/status", updateStatus);

export default orderRouter;
