const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// MongoDB Local Connection (Compass)
const mongoURI = "mongodb://localhost:27017/SIT725";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Connected to MongoDB via Compass'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
