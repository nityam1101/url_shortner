const mongoose = require('mongoose');

exports.mongoDB = async () => {
    await mongoose.connect(process.env.MONGO)
        .then(() => { return console.log("Connect to Database!"); })
        .catch((error) => { return console.log("error Connecting to Database" + error); })
}