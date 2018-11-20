const Employee = require('../model/Employee')
const Client = require('../model/Client')
const Portfolio = require('../model/Portfolio')

let clientsController = {
    index: (req, res) => {
        Employee.findById(req.params.employeeId).populate('clientProfiles').then((employee) => {
            res.send(employee.clientProfiles)
        })
    },

 
    show: (req, res) => {
        console.log('PARAMS', req.params)
        var clientId = req.params.clientId
        Client.findById(clientId)
        .then((client) => {
            res.send(client)
        })
    },
    create: (req, res) => {
        console.log("jjjj", res.data)
        Client.create(req.body).then((client) => {
            res.send(client)
        })
    },
    delete: (req, res) => {
        Client.findByIdAndRemove(req.params.id).then(() => {
            res.redirect(`/clients`)
        })
    }

}
module.exports = clientsController