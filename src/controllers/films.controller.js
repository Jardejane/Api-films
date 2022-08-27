const { default: mongoose } = require('mongoose');
const filmsService = require('../services/films.service.js');

const findAllFilmsController = async (req, res) => {
  const films = await filmsService.findAllFilmsFilmsService();
  if (films.length == 0) {
    return res.status(404).send({ Message: 'No to registered movies ' });
  }
  res.send(films);
};
const findByIdFilmsController = async (req, res) => {
  const idParameter = req.params.id;
  const seachMovies = await filmsService.FindByIdFilmsService(idParameter);
  res.send(seachMovies);
  console.log(seachMovies);
};
const findCreateFilmsController = async (req, res) => {
  const movie = req.body;
  const movieNew = await filmsService.findCreateFilmsFilmsService(movie);
  res.status(201).send(movieNew);
};
const findEditFilmsController = async (req, res) => {
  const idParameter = await req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParameter)) {
    return res.status(400).send({ message: 'Id invalid!' });
  }
  const newEdit = req.body;
  const upgrad = await filmsService.findEditFilmsFilmsService(
    idParameter,
    newEdit,
  );
  return res.send(upgrad);
};

const findDeletFilmsController = async (req, res) => {
  const idParameter = await req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParameter)) {
    return res.status(400).send({ message: 'Id invalid!' });
  }

  await filmsService.findDeleteFilmsFilmsService(idParameter);
  res.send({ aviso: 'serie apagada' });
};

module.exports = {
  findAllFilmsController,
  findByIdFilmsController,
  findCreateFilmsController,
  findEditFilmsController,
  findDeletFilmsController,
};
