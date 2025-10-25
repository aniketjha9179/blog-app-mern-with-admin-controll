import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import path from 'path'

dotenv.config();
const app = express();
const __dirname= path.resolve()

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")));
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist",'index.html'))
})

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected ✅'))
  .catch(err => console.log(err));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});