import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

// @desc    Register Admin
// @route   POST /api/auth/register
export const registerAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if admin exists
    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Create admin
    const admin = await Admin.create({
      username,
      email,
      password
    });

    if (admin) {
      res.status(201).json({
        _id: admin._id,
        username: admin.username,
        email: admin.email,
        token: generateToken(admin._id)
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Login Admin
// @route   POST /api/auth/login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for admin
    const admin = await Admin.findOne({ email });

    if (admin && (await admin.comparePassword(password))) {
      res.json({
        _id: admin._id,
        username: admin.username,
        email: admin.email,
        token: generateToken(admin._id)
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get Admin Profile
// @route   GET /api/auth/profile
export const getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select('-password');
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};