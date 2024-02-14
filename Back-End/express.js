const express = require("express");
const userRouter = require("./routes/userRoute");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// The mistake is that I am using '/' after the route which is causing
// conflict like when I try to access the route there is 2 '/' at one place.
app.use('/user', userRouter);

const port = 5001;
app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
})