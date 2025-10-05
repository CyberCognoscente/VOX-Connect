const jwt = require('jsonwebtoken');
const User = require('../models/User');

// This middleware checks if a request has a valid JWT token
const protect = async (req, res, next) => {
    let token;

    // 1. Check if the token exists in the Authorization header
    // Header format: "Bearer TOKEN_STRING"
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Get token from header (split "Bearer" and get the token string)
            token = req.headers.authorization.split(' ')[1];

            // 2. Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // 3. Attach user data (without password) to the request object
            // This allows us to access req.user in protected routes
            req.user = await User.findById(decoded.id).select('-password');

            // 4. Move to the next middleware or the route handler
            next();
        } catch (error) {
            console.error('Token verification failed:', error);
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    // If no token is found
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};

module.exports = { protect };
