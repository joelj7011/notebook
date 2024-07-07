require('dotenv').config();
const connectToMongo = require('./config/db');
const express = require('express');
var cookieParser = require('cookie-parser')
const cors = require('cors');


const app = express();



app.use(express.json());

app.use(cookieParser());

const corsOptions = {
    origin: "https://notebok-frontend.onrender.com",
    credentials: true,
}
app.use(cors(corsOptions));

connectToMongo();
//----------------------available-routes---------------------//
app.use('/api/auth', require('./routes/userRoute'));
app.use('/api/notes', require('./routes/usernotes'));
//----------------------available-routes---------------------//