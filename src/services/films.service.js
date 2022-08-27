const films = require('../database/models/films.js');

const findAllFilmsFilmsService = async () => {
  const allFilms = await films.find();
  return allFilms;
};
const FindByIdFilmsService = async (idParameter) => {
  const IdFilms = await films.findById(idParameter);
  return IdFilms;
};
const findCreateFilmsFilmsService = async (newMovie) => {
  const createMovie = await films.create(newMovie);
  return createMovie;
};
const findEditFilmsFilmsService = async (idParameter, newEdit) => {
  const editMovie = await films.findByIdAndUpdate(idParameter, newEdit);
  return editMovie;
};

const findDeleteFilmsFilmsService = async (idParameter) => {
  return await films.findByIdAndDelete(idParameter);
};

module.exports = {
  findAllFilmsFilmsService,
  FindByIdFilmsService,
  findCreateFilmsFilmsService,
  findEditFilmsFilmsService,
  findDeleteFilmsFilmsService,
};
