

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoDBURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB database!");
    }
    catch(error) {
        console.error("Error connecting to MongoDB database: ", error);
        process.exit(1);
    }
};

module.exports = connectDB;