
// DATABASE CONNECTIONS : 

var express = require('express');
var router = express.Router();


// CONTROLLER CONNECTIONS: 

const employeeController = require('../controllers/employeeController')
const clientsController = require('../controllers/clientsController')
const portfoliosController = require('../controllers/portfoliosController')

// router.get('/', appController.index)


router.get('/api/employee', employeeController.index)
router.get('/api/employee/:emplyeeId', employeeController.show)



router.get('/api/employee/:employeeId/clients', clientsController.index)
router.get('/api/employee/:employeeId/clients/:clientId', clientsController.show)
router.post('/api/employee/:employeeId/clients', clientsController.create)
router.patch('/api/employee/:employeeId/clients/:clientId', clientsController.update)
router.delete('/api/employee/:employeeId/clients/:clientId', clientsController.delete)


// router.get('/api/portfolios/', portfoliosController.index)
// router.get('/api/portfolios/new', portfoliosController.new)
// router.get('/api/portfolios/:portfolioId/portfolios', portfoliosController.show)
// router.post('/api/portfolios/:portfolioId/portfolio', portfoliosController.create)
// router.patch('/api/portfolios/:portfolioId', portfoliosController.update)
// router.post('/api/portfolios/:portfolioId/edit', portfoliosController.edit) // POST will show the create page for new user profile

// router.delete('/api/portfolios/:portfolioId', portfoliosController.delete)



module.exports = router