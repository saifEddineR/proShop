import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/UserController.js';
import { admin, protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', registerUser);
router.get('/', protect, admin, getUsers);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router
  .route('/:id')
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);

export default router;
