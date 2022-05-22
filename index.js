'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const { json } = require('express/lib/response');
const config = require('./config');
const { default: mongoose } = require('mongoose');


const app = express();
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', require('./router/router'));
app.use( express.static("views") );
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));


app.listen(config.port, () => {
    console.log(`Server corriendo en http://localhost:${config.port}`);
})
