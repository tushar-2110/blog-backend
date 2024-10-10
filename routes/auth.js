// /backend/routes/auth.js
const express = require('express');
const { loginUser, registerUser } = require('../controllers/authController');
const router = express.Router();

// Login route
router.post('/login', loginUser);

// Optional Signup route
router.post('/signup', registerUser);

module.exports = router;
