const route = require('express').Router();
const controllerFilms = require('../controllers/films.controller.js');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const {
  idValid,
  validandObjetoBody,
} = require('../middleware/films.middleware.js');


route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/all-movies', controllerFilms.findAllFilmsController);
route.get('/movie/:id', idValid, controllerFilms.findByIdFilmsController);
route.post(
  '/create',
  validandObjetoBody,
  controllerFilms.findCreateFilmsController,
);
route.put(
  '/edit/:id',
  idValid,
  validandObjetoBody,
  controllerFilms.findEditFilmsController,
);
route.delete('/delete/:id', idValid, controllerFilms.findDeletFilmsController);

module.exports = route;
