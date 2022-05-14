const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const Schema = mongoose.Schema;
const app = express();
const port = 8080;

const userScheme = new Schema({
    _id: String,
    login: String,
    name: String,
    password: String,
    favourite: [String],
    score:Number,
    quizCount: Number,
    message: [String]},
    {versionKey: false});
const Users = mongoose.model("Users", userScheme);

app.use(bodyParser.json());
app.use(cookieParser());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/register', (req, res) => {

    Users.findOne({'login': req.body.login},function(err, user){
        if (user === null) {
            Users.insertMany([{
                'login': req.body.login,
                'password': req.body.password,
                'name': req.body.name,
                'score': 0,
                'quizCount': 0,
            }], function() {console.log(`Добавлен пользователь ${req.body.login}`)});
        }
    });

})

app.post('/login', (req, res) => {
    Users.findOne({
        'login': req.body.login}, function(err, user){
            if (user.password === req.body.password) {
                res.send('login success');
            }
            else {
                res.status(400);
                res.send('invalid password');
            }
    });
})

app.get('/users', (req, res) => {
    Users.findOne({'login': req.query.login}, function(error, user) {
        // console.log(user);
        res.send(user);
    });
})

app.post('/statistic', (req, res) => {
    Users.updateOne(
        {'login': req.body.login},
        {'$inc': {'score': req.body.score, 'quizCount': 1}},
        function(error, result) {
            res.send('');
        });
})

app.get('/usersRating', (req, res) => {
    Users.find({}, function(err, users){
        if(err) return console.log(err);
        res.send(users);
    });
})

app.post('/favourite', (req, res) => {
    Users.updateOne(
        {'login': req.body.login},
        {'$push': {'favourite': req.body.favourite}},
        function(error, result) {
            res.send('');
    });

})

app.post('/delete', (req, res) => {
    Users.updateOne(
        {'login': req.body.login},
        {'$pull': {'favourite': req.body.favourite}},
        function(error, result) {
            res.send('');
        });

})

app.post('/message', (req, res) => {
    Users.updateOne(
        {'login': req.body.login},
        {'$push': {'message': req.body.message}},
        function(error, result) {
            res.send('');
        });

})

mongoose.connect("mongodb+srv://lera:$bY6EQ5NN_i6YEE@cluster0.na0kd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true},
    function(err){
    if(err) return console.log(err);
    app.listen(port, function(){
        console.log("Сервер ожидает подключения...");
    });
});

