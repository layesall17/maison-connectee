require("dotenv").config();

const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

require("./Database");

const port = process.env.PORT;

app.use(cors());

const authRoute = require("./routes/auth");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send({ message: "Hello World !"});
});

app.listen(port || 3000, (re, res) => {
  console.log(`App listen at port ${port}`);
});
