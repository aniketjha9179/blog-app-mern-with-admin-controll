import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: 'General'
  },
  tags: [{
    type: String
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true
  },
  published: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Blog', blogSchema);