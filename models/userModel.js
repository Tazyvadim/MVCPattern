//create model for user
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    age: Number,
})

module.exports = mongoose.model("userModel", userSchema);