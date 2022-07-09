//create routes for default pages
const express = require("express");
const homeController = require("../controllers/homeController.js");

const homeRouter = express.Router();

//router for main page "/"
homeRouter.get('/', homeController.index);
//router for /about page
homeRouter.get('/about', homeController.about);

module.exports = homeRouter;