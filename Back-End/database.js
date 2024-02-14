const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jhaniraj45:loginsignup31@userlogin-signup.2otafat.mongodb.net/");

// I have made a mistake in not initializing the database Schema with the new Keyword.
const userSchema = new mongoose.Schema({
	fullname: String,
	username: String,
	password: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;