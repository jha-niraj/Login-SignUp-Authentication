const mongoose = require("mongoose");

mongoose.connect("url");

const userSchema = mongoose.Schema({
	fullname: String,
	username: String,
	password: String
})

const User = mongoose.model('User', userSchema);

export default User;