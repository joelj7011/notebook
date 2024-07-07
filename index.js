require('dotenv').config();
const connectToMongo = require('./config/db');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port if available

// Middleware to parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
    origin: ["http://localhost:3000", "https://notebok-frontend.onrender.com"],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

// Log each request to help debug CORS issues
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    console.log('Request headers:', req.headers);
    next();
});

// Connect to MongoDB
connectToMongo();

// Routes
app.use('/api/auth', require('./routes/userRoute'));
app.use('/api/notes', require('./routes/usernotes'));

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
