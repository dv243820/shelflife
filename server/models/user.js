/**
* @file user.js
* @description Mongoose model for User entity, including schema definition, password hashing, 
* password comparison, and JSON transformation to remove sensitive information.
* 
* @module models/user
* @requires mongoose
* @requires bcrypt
* 
* @typedef {Object} User
* @property {string} username - Unique username for the user (5-20 characters).
* @property {string} email - Unique email address for the user.
* @property {string} password - Hashed password (not selected by default).
* @property {string} profilePicture - Path to user's profile picture.
* @property {Object} preferences - User preferences.
* @property {string[]} preferences.dietaryRestrictions - List of dietary restrictions.
* @property {number} preferences.defaultExpirationDays - Default expiration days for items.
* @property {Date} createdAt - Timestamp of user creation.
* @property {Date} updatedAt - Timestamp of last user update.
* 
* @function comparePassword
* @description Compares a candidate password with the user's hashed password.
* @param {string} candidatePassword - The password to compare.
* @returns {Promise<boolean>} Whether the passwords match.
* 
* @function toJSON
* @description Converts the user document to JSON, removing sensitive information.
* @returns {Object} The user object without sensitive fields.
**/


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// User schema definition
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: [5, 'Username must be at least 5 characters long'],
        maxlength: [20, 'Username cannot exceed 20 characters'],
        match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false,
        match: [/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Password must be at least 8 characters long and contain at least one letter, one number, and one special character']
    },
    profilePicture: {
        type: String,
        default: 'default.jpg'
    },
    preferences: {
        dietaryRestrictions: [String],
        defaultExpirationDays: {
            type: Number,
            default: 7
        }
    }
}, {
    timestamps: true
});

/*
// Section for User schema functions
*/

// Hash encrypted password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Compare candidate password with hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Convert user document to JSON format (REMOVING SENSITIVE INFORMATION)
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    // Remove sensitive information
    delete userObject.password;
    delete userObject.__v;
    return userObject;
}

module.exports = mongoose.model('User', userSchema);
