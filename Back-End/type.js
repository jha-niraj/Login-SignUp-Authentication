const zod = require("zod");

const userZodSchema = zod.object({
  	username: zod.string().email(),
  	password: zod.string(),
});

export default userZodSchema;
