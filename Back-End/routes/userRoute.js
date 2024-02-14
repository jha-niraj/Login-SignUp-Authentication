const { Router } = require("express");
const User = require("../database");
const userMiddleware = require("../middlewares/userMiddleware");
const router = Router();
const { userZodSignUpSchema, userZodSignInSchema } = require("../type");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config");

router.post('/signup', async (req, res) => {
	// This way of sending and getting the data through the headers is actually risky.
	// const fullname = req.headers.fullname;
	// const username = req.headers.username;
	// const password = req.headers.password;
	
	// The best way of sending and receiving the data from the server is really great through body.
	const { fullname, username, password } = req.body;

	try {
		const parsedValue = userZodSignUpSchema.safeParse({
			fullname,
			username,
			password
		})
		if(parsedValue.success) {
			await User.create({
				fullname,
				username,
				password
			})
			res.json("User created successfully!!!")
		} else {
			res.json({
				msg: "Wrong inputs types"
			})
		}
	} catch(error) {
		console.log("Error Occured!!!");
		res.json({
			msg: error
		})
	}
})

router.post('/signin', async (req, res) => {
	const { username, password } = req.body;

	try {
		const parsedValue = userZodSignInSchema.safeParse({
			username,
			password
		})
		if(parsedValue.success) {
			const user = await User.findOne({ username });
			if(user) {
				const token = jwt.sign({username} , jwt_secret);
				res.json({
					token: token
				})
			} else {
				res.json({
					msg: "User doesn't exist!!!"
				})
			}
		} else {
			res.json({
				msg: "Worng inputs!!!"
			})
		}
	} catch(error) {
		res.json({
			msg: "Error Occured!!!"
		})
	}
})

module.exports = router;