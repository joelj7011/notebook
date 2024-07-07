require('dotenv').config();
const connectToMongo = require('./config/db');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

console.log(__dirname)

console.log(__filename)

const app = express();
const port = 5000;

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: "https://notebok-frontend.onrender.com",
    credentials: true,
};

app.use(cors(corsOptions));

connectToMongo();

//----------------------available-routes---------------------//
app.use('/api/auth', require('./routes/userRoute'));
app.use('/api/notes', require('./routes/usernotes'));
//----------------------available-routes---------------------//


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
