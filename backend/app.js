const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error.js");



//database connection
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true 
})
	.then(() => console.log("DB connected"))
  .catch((error) => console.log(error));

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({
	limit: "5mb",
	extended: true
}));
app.use(cookieParser());
app.use(cors());

//error middleware
app.use(errorHandler);

//port
const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});