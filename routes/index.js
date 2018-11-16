
// DATABASE CONNECTIONS : 

var express = require('express');
var router = express.Router();


// CONTROLLER CONNECTIONS: 

const Employee = require('../controllers/employeeController')
const Client = require('../controllers/clientsController')
const Portfolio = require('../controllers/portfoliosController')



router.get('/api/employee', employeeController.index)
router.post('/api/employee', employeeController.create)
router.get('/api/employee', employeeController.show)
router.patch('/api/employee', employeeController.update)
router.delete('/api/employee', employeeController.delete)

// router.post('/api/users/', userController.create)
// router.get('/api/users/:userId', userController.show)
// router.patch('/api/users/:userId', userController.update)
// router.delete('/api/users/:userId', userController.delete)


router.get('/api/users/:userId/films', filmsController.index)
// router.get('/api/users/:userId/films', filmsController.index)
// router.get('/api/films/:filmId', filmsController.show)
// router.delete('/api/films/:filmId', filmsController.delete)
// router.patch('/api/films/:filmId', filmsController.update)
// router.post('/api/users/:userId/films', filmsController.create)

// module.exports = router