// const Client = require('../model/Client')
const Portfolio = require('../model/Portfolio')

const portfoliosController = {
    index: (req, res) => {
        Portfolio.find({}).then((portfolios) => {
            res.send(portfolios)
        })
    },
    show: (req, res) => {
       Portfolio.findById(req.params.portfolioId).populate('portfolios').then((portfolio) => {
           res.send(portfolio)
       })
    },
    }

    module.export = portfoliosController
