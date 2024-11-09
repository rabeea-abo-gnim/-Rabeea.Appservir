const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
// app.use(cors());
// app.use('/' , Routes)

const mongooseURL =
 "mongodb+srv://rabeea0607:Rr0987655@cluster0.9ebps8r.mongodb.net/"
mongoose.connect(mongooseURL);

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});



module.exports = app;