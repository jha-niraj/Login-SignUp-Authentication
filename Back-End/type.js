const zod = require("zod");

const userZodSignUpSchema = zod.object({
	fullname: zod.string(),
	username: zod.string().email(),
	password: zod.string(),
});

const userZodSignInSchema = zod.object({
	username: zod.string().email(),
	password: zod.string()
})

module.exports = {
	userZodSignUpSchema,
	userZodSignInSchema
};
