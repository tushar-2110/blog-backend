// /backend/routes/blog.js
const express = require('express');
const router = express.Router();

// Sample blog data (stored in an array)
const blogs = [
    { id: 1, title: 'First Blog Post', content: 'This is the first blog post content.' },
    { id: 2, title: 'Second Blog Post', content: 'This is the second blog post content.' },
    { id: 3, title: 'Third Blog Post', content: 'This is the third blog post content.' }
];

// GET blogs (protected route)
router.get('/', (req, res) => {
    res.json(blogs);
});

module.exports = router;
