const express = require("express");
const userRouter = require('./routes/userRouter.js');
const homeRouter = require('./routes/homeRouter.js');
const mongoose = require("mongoose");

//create app
app = express();

//set engine = handlebars
app.set("view engine", "hbs")
//read only utf-8, extended: false can get only key:value
app.use(express.urlencoded({extended: false}));
//add userRouter to /user
app.use('/users', userRouter);
//add homeRouter to /
app.use('/', homeRouter);


//conect to db on 27017 port
//listen app on 3000 port
mongoose.connect("mongodb://localhost:27017/usersdb", {useUnifiedTopology:true}, function (err){
    if(err) return console.log(err);
    app.listen(3000, function (){
        console.log('Server is working and wait to connect')
    });
});
