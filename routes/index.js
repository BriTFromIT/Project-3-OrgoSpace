
// DATABASE CONNECTIONS : 

var express = require('express');
var router = express.Router({mergeParams: true});


// CONTROLLER CONNECTIONS: 

const employeeController = require('../controllers/employeeController')
const clientsController = require('../controllers/clientsController')
const portfoliosController = require('../controllers/portfoliosController')

// router.get('/', appController.index)


router.get('/api/employee', employeeController.index)
router.get('/api/employee/:emplyeeId', employeeController.show)
router.patch('/api/employee/:employeeId', employeeController.update)



router.get('/api/employee/:employeeId/clients', clientsController.index)
router.get('/api/employee/:employeeId/clients/:clientId', clientsController.show)
router.post('/api/employee/:employeeId/clients', clientsController.create)
router.delete('/api/employee/:employeeId/clients/:clientId', clientsController.delete)


// router.get('/api/employee/:employeeId/clients/:clientId/portfolios', portfoliosController.index)
// router.get('/api/employee/:employeeId/clients/:clientId/portfolios/:porfolioId', portfoliosController.show)




module.exports = router