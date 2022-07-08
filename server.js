const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const mysqlConnection = require('./connection.js');
const peopleRoute = require('./routes/people.routes');
const filesRoute = require('./routes/files.routes');


var app = express();

app.use(bodyParser.json());

app.use('/people', peopleRoute);

app.use('/files', filesRoute);


app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

module.exports = mysqlConnection;