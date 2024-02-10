const express = require("express");
const userSignUpRouter = require("./routes/userRoute");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/signup', userSignUpRouter);
app,use('/login', userLogInRouter);

const port = 5000;
app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
})