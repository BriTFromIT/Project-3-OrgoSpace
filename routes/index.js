
// DATABASE CONNECTIONS : 

var express = require('express');
var router = express.Router();


// CONTROLLER CONNECTIONS: 

const employeeController = require('../controllers/employeeController')
const clientController = require('../controllers/clientsController')
const portfoliosController = require('../controllers/portfoliosController')

// router.get('/', appController.index)


router.get('/api/employee/', employeeController.index)
// router.post('/api/employee', employeeController.create)
router.get('/api/employee/:id', employeeController.show)
// router.patch('/api/employee', employeeController.update)
// router.delete('/api/employee', employeeController.delete)



router.get('/api/clients/', clientController.index)
router.get('/api/clients/new', clientController.new)
router.get('/api/clients/:clientId/portfolios', clientController.show)
router.post('/api/clients/:clientId/portfolio', clientController.create)
router.patch('/api/clients/:clientId', clientController.update)
router.post('/api/clients/:clientId/edit', clientController.edit)
router.delete('/api/clients/:clientId', clientController.delete)


router.get('/api/portfolios/', portfoliosController.index)
router.get('/api/portfolios/new', portfoliosController.new)
router.get('/api/portfolios/:portfolioId/portfolios', portfoliosController.show)
router.post('/api/portfolios/:portfolioId/portfolio', portfoliosController.create)
router.patch('/api/portfolios/:portfolioId', portfoliosController.update)
router.post('/api/portfolios/:portfolioId/edit', portfoliosController.edit) // POST will show the create page for new user profile

router.delete('/api/portfolios/:portfolioId', portfoliosController.delete)



module.exports = router