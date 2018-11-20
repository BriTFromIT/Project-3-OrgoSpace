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
        const client = req.params.client.clientId
        console.log(client)
        Client.findById(client).populate('portfolios').then((portfolios) => {
            res.render('portfolios/show', { client: client })
        })
    },
    create: (req, res) => {
        console.log("jjjj", res.data)
        Client.create(req.body).then((client) => {
            res.send(client)
        })
        // console.log("Client Created! ")
        // console.log(req.body)
        // Client.create(req.body).then((newClient) => {
        //     console.log("NEW CLIENT", newClient)
        //     newClient.save()
        //     res.redirect(`/clients/${newClient._Id}`)
        // })
    },
    // update: (req, res) => {
    //     var clientId = req.params.clientId
    //     Client.findByIdAndUpdate(clientId, req,body, { new: true})
    //     .then((updatedClient) => {
    //         updatedClient.save()
    //         res.send(updatedClient)
    //     })
    // },
    
    delete: (req, res) => {
        Client.findByIdAndRemove(req.params.id).then(() => {
            res.redirect(`/clients`)
        })
    }

}


module.exports = clientsController