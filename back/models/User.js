const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Library for secure password hashing

// Define the User Schema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // Ensures no two users can sign up with the same email
        lowercase: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        // We will never expose the password, even when sending back the user object
        select: false 
    },
    // Optional: You can add other fields like username, name, or role later
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, {
    // Adds `createdAt` and `updatedAt` timestamps automatically
    timestamps: true
});

// --- Pre-Save Hook (Middleware) for Password Hashing ---
// This runs BEFORE a User document is saved to the MongoDB database.
UserSchema.pre('save', async function (next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) {
        return next();
    }

    try {
        // 1. Generate a salt (a random string to make the hash unique)
        const salt = await bcrypt.genSalt(10); // 10 is the recommended cost factor

        // 2. Hash the password using the generated salt
        this.password = await bcrypt.hash(this.password, salt);
        
        // 3. Continue to the save operation
        next();
    } catch (err) {
        // If hashing fails, pass the error to the next middleware/error handler
        next(err);
    }
});

// --- Instance Method for Password Comparison (for Login) ---
// This adds a method to every user object retrieved from the database
UserSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        // Compares the plain text password (candidatePassword) with the stored hash (this.password)
        // Note: 'select: false' on the password field means we must explicitly fetch it 
        // if we intend to use this method on a user object from a query that didn't select it.
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

// Create and export the Mongoose Model
const User = mongoose.model('User', UserSchema);
module.exports = User;
