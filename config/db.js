const mongoose = require('mongoose');

const connectToMongo = () => {

    try {
        mongoose.connect(process.env.MONGOURI, {
        }).then((data) => console.log(`connected at server:${data.connection.host}`)
        );
    } catch (error) {
        console.log(error(404));
    }
};

module.exports = connectToMongo;
