//create routes for users pages
const express = require("express");
const userController = require("../controllers/userController.js")
const userRouter = express.Router();

//router for post user
userRouter.use("/postuser", userController.postUser);
//router for /create page user
userRouter.use("/create", userController.addUser);
//router for /user user
userRouter.use("/", userController.getUsers);

module.exports = userRouter;