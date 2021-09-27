const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 4200;

//Parsing mddlwr
//Parsing app/urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Parsing Application/json
app.use(bodyParser.json());
//Static Files
app.use(express.static("public"));

app.listen(port, () => console.log(`Listening on port ${port}`));
