const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getAdminBlogs
} = require('../controllers/blogControllers.js');
const { protect } = require('../middlewares/authMiddleware.js');

// Public routes
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);

// Protected routes (Admin only)
router.post('/', protect, createBlog);
router.put('/:id', protect, updateBlog);
router.delete('/:id', protect, deleteBlog);
router.get('/admin/my-blogs', protect, getAdminBlogs);

module.exports = router;