const express = require("express");
const userRouter = express.Router();
const {createUser, login} = require("../controllers/user.controller")


userRouter.post("/createUser", createUser);
userRouter.post("logIn", login);


module.exports = userRouter;