import express from 'express';
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getAdminBlogs
} from '../controllers/blogControllers.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);

// Protected routes (Admin only)
router.post('/', protect, createBlog);
router.put('/:id', protect, updateBlog);
router.delete('/:id', protect, deleteBlog);
router.get('/admin/my-blogs', protect, getAdminBlogs);

export default router;