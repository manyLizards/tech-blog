//Dependencies

const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

//set up Express App
const app = express();
const PORT = process.env.PORT || 3001;