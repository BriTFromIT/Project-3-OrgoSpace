const Employee = require('../model/Employee')
// const Client = require('../model/Client')
// const Portfolio = require('../model/Portfolio')

const employeeController = {
    index: (req, res) => {
        Employee.find({}).then((employee) => {
            res.send(employee)
        })
    },
    show: (req, res) => {
        Employee.findById(req.params.employeeId).populate('clients').then((employee) => {
            res.send(employee)
        })
    },
    update: (req, res) => {
        Employee.findByIdAndUpdate(req.params.employeeId, req.body, { new: true })
            .then((updatedEmployee) => {
                updatedEmployee.save()
                res.send(updatedEmployee)
            })
    }
}

module.exports = employeeController
