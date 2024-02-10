import User from "../database";

const { Router } = require("express");
const userMiddleware = require("../middlewares/userMiddleware");
const router = Router();
const { userZodSchema } = require("../type");

router.post('/signup', async (req, res) => {
	const fullname = req.headers.fullname;
	const username = req.headers.username;
	const password = req.headers.password;

	try {
		const parsedValue = userZodSchema.safeParse({
			username,
			password
		})
		if(parsedValue.success) {
			await User.create({
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

router.post('/signin', userMiddleware, async (req, res) => {
	const username = req.headers.username;
	const password = req.headers.password;

	
})

export default router;