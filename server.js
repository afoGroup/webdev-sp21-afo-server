const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();
let bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
    MONGODB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .catch((error) => {console.log(error)});

app.use(session({
    secret: 'webdevsp21afosecret',
    proxy: true,
    store: MongoStore.create({
        mongoUrl: MONGODB_URI,
        autoRemove: 'native'
    }),
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 3600000 * 24, secure: true, sameSite:'none'}
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://anifansonly.herokuapp.com');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require("./controllers/users-controller")(app);
require("./controllers/clubs-controller")(app);
require('./controllers/posts-controller')(app);

require('dotenv').config();
app.listen(process.env.PORT || 4000);