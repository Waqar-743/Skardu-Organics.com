import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  getMyOrders,
  getOrders,
  updateOrderStatus,
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// --- User Routes ---
// Place a new order
router.route('/').post(protect, addOrderItems);
// Get all orders for the logged-in user
router.route('/myorders').get(protect, getMyOrders);
// Get a specific order by its ID
router.route('/:id').get(protect, getOrderById);


// --- Admin Routes ---
// Get all orders in the system
router.route('/').get(protect, admin, getOrders);
// Update the status of an order (e.g., to 'Shipped' or 'Delivered')
router.route('/:id/status').put(protect, admin, updateOrderStatus);


export default router;
