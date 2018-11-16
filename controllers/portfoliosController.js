const Client = require('../model/Client')
const Portfolio = require('../model/Portfolio')

const portfoliosController = {
    index: (req, res) => {
        var portfolioId = req.params.portfolioId
        Client.findById(portfolioId).populate('portfolios').then((portfolio) => {
            res.send(client.porfolios)
        })
    },
    new: (req, res) => {
        res.render('portfolios/new')
    },
    show: (req, res) => {
        const portfolioId = req.params.portfolioId
        console.log(portfolioId)
        Portfolio.findById(portfolioId).populate('portfolios').then((portfolios) => {
            res.render('portfolios/show', { portfolio: portfolio })
        })
    },
    create: (req, res) => {
        console.log("Portfolio Created! ")
        console.log(req.body)
        Portfolio.create(req.body).then((newPortfolio) => {
            console.log("NEW CLIENT", newClient)
            newClient.save()
            res.redirect(`/portfolios/${newPortfolio._id}`)
        })
    },
    update: (req, res) => {
        var portfolioId = req.params.portfolioId
        Portfolio.findByIdAndUpdate(portfolioId, req.body, { new: true})
        .then((updatedPortfolio) => {
            updatedPortfolio.save()
            res.send(updatedPortfolio)
        })
    },
    edit: (req, res) => {
        Portfolio.findById(req.body).then((Portfolio) => {
            res.redirect('/portfolios/show')
        })
    },
    delete: (req, res) => {
        Portfolio.findByIdAndRemove(req.params.id).then(() => {
            res.redirect(`/portfolios`)
        })
    }

    }

    module.export = portfoliosController
