const mongoose = require('mongoose');
const url = process.env.MONGOURI;
const connectToMongo = () => {

    try {
        mongoose.connect(url, {
        }).then((data) => console.log(`connected at server:${data.connection.host}`)
        );
    } catch (error) {
        console.log(error(404));
    }
};

module.exports = connectToMongo;
