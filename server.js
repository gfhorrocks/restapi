'use strict';
var express = require('express');
var employeeRoutes = require('./routes/employee');
var app = express();
var port = parseInt(process.env.PORT || '3000');
var mongoose = require('mongoose');
var db = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use('/api/employees', employeeRoutes);

mongoose.connect("mongodb://localhost/employees", { useNewUrlParser: true, useUnifiedTopology: true});


// Start the server
app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;
