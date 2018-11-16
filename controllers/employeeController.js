const Employee = require('../models/Employee')
// const Client = require('../model/Client')
// const Portfolio = require('../model/Portfolio')

const employeeController = {
    index: (req, res) => {
        Employee.find({}).then((employees) => {
            res.send(employees)
        })
    },
    show: (req, res) => {
        Employee.findById(req.params.employeeId).populate('clients').then((employee) => {
            res.send(employee)
        })
    }
    }

    module.exports = employeeController











