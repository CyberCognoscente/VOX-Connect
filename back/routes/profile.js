const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// @route   GET /api/profile
// @desc    Get logged-in user's profile data
// @access  Private (Requires JWT)
router.get('/', protect, (req, res) => {
    // If the 'protect' middleware passes, the user data is available in req.user
    res.status(200).json({
        message: "You have accessed a protected route successfully!",
        user: req.user
    });
});

module.exports = router;
