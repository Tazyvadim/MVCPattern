//create controllers for default pages
//controller for main page "/"
exports.index = function (req, res){
    res.send('Home page');
}
//controller for /about page
exports.about = function (req, res) {
    res.send('About site');
}

