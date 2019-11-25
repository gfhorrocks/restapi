'use strict';

var Employee = require("../models/Employee");
var express = require('express');
var app = express.Router();
var mongoose = require('mongoose');


// Routes
// =============================================================

  // Retrieves all employees
  app.get("/", function(req, res) {
    Employee.find({})
      .then(function(dbEmp) {
        console.log(dbEmp);
        res.json(dbEmp);
      });
  });

  // Retrieves one post
  app.get("/:id", function(req, res) {
    var id = req.params.id;
    
    Employee.findOne({ _id: id })
      .then(function(dbEmp) {
        res.json(dbEmp);
      });
  });

  // Post for new employee
  app.post("/", function(req, res) {
    console.log(req.body);

    var employee = new Employee({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      age: req.body.age,
      primaryLanguage: req.body.primaryLanguage,
      secondaryLanguage: req.body.secondaryLanguage,
      startDate: req.body.startDate,
      department: req.body.department,
      jobTitle: req.body.jobTitle
    })
    employee.save()
      .then(function(dbEmp) {
        res.json(dbEmp);
      });
  });

  // Delete an employee
  app.delete("/:id", function(req, res) {
    Employee.findByIdAndRemove({
      where: {
        _id: req.params.id
      }
    })
      .then(function(dbEmp) {
        res.json(dbEmp);
      });
  });

  // Updating employees
  app.put("/:id", function(req, res) {
    Employee.findByIdAndUpdate(req.body,
      {
        where: {
          _id: req.body.id
        }
      })
      .then(function(dbEmp) {
        res.json(dbEmp);
      });
  });

module.exports = app;