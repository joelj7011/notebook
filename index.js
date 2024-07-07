require('dotenv').config();
const connectToMongo = require('./config/db');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: ["http://localhost:3000", "https://notebok-frontend.onrender.com"],
     credentials: true,
    optionsSuccessStatus: 200
}
app.options('*', cors(corsOptions));

app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    console.log('Request headers:', req.headers);
    next();
});

connectToMongo();
//----------------------available-routes---------------------//
app.use('/api/auth', require('./routes/userRoute'));
app.use('/api/notes', require('./routes/usernotes'));
//----------------------available-routes---------------------//

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
