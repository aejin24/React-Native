const mongoose = require("mongoose");

const { MONGO_INITDB_DATABASE, MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD } = process.env;
const MONGO_URL = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@mongo:27017/${MONGO_INITDB_DATABASE}?authSource=admin&authMechanism=SCRAM-SHA-1`

module.exports = async () => {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true
    }).then(() => {
        console.log("MongoDB Connected");
    }).catch(err => {
        throw new Error(err);
    });
}