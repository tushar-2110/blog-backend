// /backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Import routes and middleware
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blog');
const authMiddleware = require('./middleware/auth');

// Initialize app and load environment variables
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/blogs', authMiddleware, blogRoutes); // Protected blog route

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
