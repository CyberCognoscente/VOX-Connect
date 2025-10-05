// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// MONGO_URI will be loaded from your .env file
const MONGO_URI = process.env.MONGO_URI;

// --- Middleware ---
// Built-in middleware for parsing JSON bodies from incoming requests
app.use(express.json());

// --- MongoDB Connection Setup ---
if (!MONGO_URI) {
    // If the URI is missing, log a critical error but allow the server to start for front-end testing.
    console.error("FATAL ERROR: MONGO_URI is not defined in the .env file.");
} else {
    // Connect to MongoDB using the URI from environment variables
    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log('MongoDB connection successful.');
        })
        .catch(err => {
            // Log the connection error
            console.error('MongoDB connection error:', err.message);
        });
}

// --- Import Routes ---
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const vapiRoutes = require('./routes/vapi'); // <-- NEW: Import Vapi Routes

// --- Define Routes ---
// Basic Route (API Health Check)
app.get('/', (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
    res.status(200).json({
        message: 'Welcome to the Express Backend!',
        database: `MongoDB Status: ${dbStatus}`
    });
});

// Authentication Routes (Public: signup/login)
app.use('/api/auth', authRoutes);

// Protected Routes (Uses the middleware defined in profileRoutes)
app.use('/api/profile', profileRoutes);

// VAPI Routes (Webhook Listener and Call Initiation)
app.use('/api/vapi', vapiRoutes); // <-- NEW: Register Vapi Routes

// --- Server Start ---
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Access the server at http://localhost:${PORT}`);
});
