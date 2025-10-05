const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Helper function to generate a JWT token
const generateToken = (id) => {
    // Uses the JWT_SECRET from the .env file
    // Ensure you have added JWT_SECRET=YOUR_VERY_STRONG_SECRET_KEY_HERE to your .env
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d', // Token expires in 30 days
    });
};

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields (email and password)' });
    }

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            email,
            password // Hashed automatically by pre-save hook in User.js
        });

        await user.save();

        // Generate token upon successful registration
        const token = generateToken(user._id);

        res.status(201).json({
            msg: 'User registered successfully!',
            token, // Send the token back
            user: {
                id: user._id,
                email: user.email,
            }
        });

    } catch (err) {
        console.error(err.message);
        // Handle duplicate key error (if the unique index on email fails)
        if (err.code === 11000) {
             return res.status(400).json({ msg: 'Email already registered' });
        }
        res.status(500).send('Server Error during registration.');
    }
});

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields (email and password)' });
    }

    try {
        // 1. Find user by email. We explicitly SELECT the password field for comparison.
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }

        // 2. Compare the plain text password with the stored hash using the method defined in User.js
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }

        // 3. Generate token upon successful login
        const token = generateToken(user._id);

        // 4. Send back the token and user details (without password)
        res.status(200).json({
            msg: 'Login successful!',
            token, // Send the token back
            user: {
                id: user._id,
                email: user.email,
            }
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error during login.');
    }
});


module.exports = router;
