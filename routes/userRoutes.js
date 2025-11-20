import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  getUsers,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// Public routes for registration and login
router.post('/', registerUser);
router.post('/login', authUser);

// Protected route to get the logged-in user's profile
router.route('/profile').get(protect, getUserProfile);

// Admin-only route to get all users
router.route('/').get(protect, admin, getUsers);

export default router;
