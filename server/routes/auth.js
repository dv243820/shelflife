
/**
 * @file auth.js
 * @module routes/auth
 * @description Express router for user authentication routes including registration and login.
 * Handles user creation, JWT token generation, and login validation.
 * 
 * @requires express
 * @requires bcrypt
 * @requires jsonwebtoken
 * @requires ../models/user
 * 
 * @route POST /api/auth/register Registers a new user account.
 * @route POST /api/auth/login Authenticates a user and returns a JWT token.
 */
// Import necessary modules
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

// POST /api/auth/register - Create new user account
router.post('/register', async (req, res) => {
    try {
        // Get user details from request body
        const { username, email, password, firstName, lastName } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ 
            $or: [{ email }, { username }] 
        });
        
        //If account already exists, notify user
        if (existingUser) {
            return res.status(400).json({ 
                error: 'User with this email or username already exists' 
            });
        }
        
        // Create new user (password will be hashed automatically by the schema)
        const user = new User({
            username,
            email,
            password,
        });
        
        await user.save();
        
        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );
        
        res.status(201).json({
            message: 'User registered successfully',
            user: user.toJSON(), // Excludes the password
            token
        });
        
    } catch (error) {
        console.error('Registration error:', error);
        res.status(400).json({ 
            error: error.message,
            details: error.errors ? Object.keys(error.errors).map(key => error.errors[key].message) : []
        });
    }
});

// POST /api/auth/login - User login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user by email
        const user = await User.findOne({ email }).select('+password');
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        
        // Check password
        const isValidPassword = await user.comparePassword(password);
        
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        
        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );
        
        res.json({
            message: 'Login successful',
            user: user.toJSON(), // This excludes the password
            token
        });
        
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server error during login' });
    }
});

module.exports = router;
