// const Employee = require('../model/Employee')
const Client = require('../model/Client')
const Portfolio = require('../model/Portfolio')

let clientsController = {
    index: ((req, res) => {
        Client.find().then(clients => {
            res.render('/clientPage', {clients: clients });
        })
    }),
    new: (req, res) => {
        res.render('clients/new')
    },
    show: (req, res) => {
        const clientId = req.params.clientId
        console.log(clientId)
        Client.findById(clientId).populate('portfolios').then((portfolios) => {
            res.render('portfolios/show', { client: client })
        })
    },
    create: (req, res) => {
        console.log("Client Created! ")
        console.log(req.body)
        Client.create(req.body).then((newClient) => {
            console.log("NEW CLIENT", newClient)
            newClient.save()
            res.redirect(`/clients/${newClient._Id}`)
        })
    },
    update: (req, res) => {
        var clientId = req.params.clientId
        Client.findByIdAndUpdate(clientId, req,body, { new: true})
        .then((updatedClient) => {
            updatedClient.save()
            res.send(updatedClient)
        })
    },
    edit: (req, res) => {
        Client.findById(req.body).then((Client) => {
        res.redirect('/clients/show')
        })
    },
    delete: (req, res) => {
        Client.findByIdAndRemove(req.params.id).then(() => {
            res.redirect(`/clients`)
        })
    }

}


module.exports = clientsController