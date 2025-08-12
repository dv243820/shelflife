// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Load environment variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Test route
app.get('/', (req, res) => {
    res.send('Shelflife server is running');
});


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});