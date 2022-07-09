//create controllers for /users
const userModel = require("../models/userModel.js")

//controller for create user page
exports.addUser = function (req, res){
    res.render("create.hbs")
}

//controller for list of users
exports.getUsers = function (req, res){
    userModel.find({},function (err, allUsers){
        if(err) {
            console.log(err);
            res.sendStatus(400);
        }
        res.render("users.hbs", {
            users: allUsers
        });
    });
}

//controller for creating user
exports.postUser = function (req, res){
    if(!req.body) return res.sendStatus(400);
    let userName = req.body.name;
    let userAge = req.body.age;
    let user = new userModel({name:userName, age: userAge});
    user.save(function (err){
        if(err) return console.log(err);
        res.redirect("/users")
    })
}
