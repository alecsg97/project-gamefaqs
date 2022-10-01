const express = require("express");
const app = express();

const session = require('express-session');
const MongoForum = require('connect-mongo');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var flash = require('connect-flash');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.set("views", __dirname + "/views");

app.set("view engine", "hbs");


app.listen(3000);