const mongoose = require('mongoose');
const uri = process.env.MONGOURI;
const connectToMongo = () => {

    try {
        mongoose.connect(uri, {
        }).then((data) => console.log(`connected at server:${data.connection.host}`)
        );
    } catch (error) {
        console.log(error(404));
    }
};

module.exports = connectToMongo;
