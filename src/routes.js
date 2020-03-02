const { Router } = require('express');
const vagaController = require('./controller/vagaController');
const userController = require('./controller/userController');



const routes = Router();


routes.get('/vagas', vagaController.index);
routes.post('/vagas', vagaController.store);
routes.post('/register', userController.store)



module.exports = routes;
