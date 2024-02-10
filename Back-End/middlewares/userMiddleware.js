const { User } = require("../database");

async function userMiddleware(req, res, next) {
	const username = req.headers.username;
	const password = req.headers.password;

	try {
		const user = await User.find({
			username,
			password
		})
		if(user) {
			next();
		} else {
			res.json({
				msg: "User authentication failed!!!"
			})
		}
	} catch(error) {
		console.log("Error occured!!!");
		res.json({
			msg: error
		})
	}
}

export default userMiddleware;