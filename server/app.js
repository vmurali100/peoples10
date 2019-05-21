const express = require("express");
var mongoose = require("mongoose");
const User = require("./api/models/user");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World I am from MERN Test");
});

app.post("/login", (req, res) => {
  User.find({ email: req.body.email, password: req.body.password })
    .exec()
    .then(doc => {
      console.log(doc);
      if (doc.length == 0) {
        res.status(201).json({ message: "User Not Found", user: doc[0] });
      } else {
        res.status(200).json({ message: "User Login Success", user: doc[0] });
      }
    })
    .catch(error => {
      console.log(error);
      res.send(500);
    });
});

mongoose.connect(
  "mongodb+srv://vmurali100:Pavani!23@cluster0-zxfcr.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true }
);

mongoose.connection.on("connected", () => {
  console.log("connected to database");
});
mongoose.connection.on("error", err => {
  if (err) {
    console.log("Error in Connecting DB" + err);
  }
});
module.exports = app;
