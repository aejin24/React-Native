const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String },
    id: { type: String }
});

module.exports = mongoose.model("users", UserSchema);