// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Load environment variables
require('dotenv').config();

// Import routes
const User = require('./models/user');
const authRoutes = require('./routes/auth');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);


// Test route
app.get('/', (req, res) => {
    res.send('Shelflife server is running');
});


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT} and accessible from all interfaces`);
});