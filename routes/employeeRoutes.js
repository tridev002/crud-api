const express = require('express');

const Router= express.Router();

const EmployeeController= require('../controllers/employeeController')



//get,post,put/patch,delete

Router.post('/add-emp',EmployeeController.createEmployee)
Router.get('/emp',EmployeeController.getEmployess)
Router.get('/emp/:id',EmployeeController.singleEmployee)
Router.put('/emp/:id',EmployeeController.updateEmployee)
Router.delete('/emp/:id',EmployeeController.deleteEmployee)
module.exports=Router