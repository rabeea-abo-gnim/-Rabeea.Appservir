const express = require("express");
const mongoose = require("mongoose");
const Raouter = require("./api/routes/routes");

const app = express();
app.use(express.json());
app.use("/",Raouter)
// app.use(cors());
// app.use('/' , Routes)

const mongooseURL =
 "mongodb+srv://rabeea0607:Rr0987655@cluster0.9ebps8r.mongodb.net/"
mongoose.connect(mongooseURL);

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

app.get('/rabea3',(req,res)=>{
  res.status(200).json({test:"test"})
  // 200
  //404 not found
  //403
  //401
  //500
})

app.post("/WhatsmyName",(req,res) => {
  const{name,LastName}=req.body
  if(!name&&!LastName){
    res.status(400).json({
      message:"Please Enter Your Name and LastName"
    })
  }else{
    res.status(200).json({
      message:"done"
    })
  }
})



module.exports = app;