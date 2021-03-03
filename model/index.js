const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const williesSchema = new Schema({
    'username': String,
    'password': String,
    'email': String,
    'age': Number
});


var User = mongoose.model('user', williesSchema);

module.exports = User;