const mongooose = require('mongoose');
const filmsSchema = new mongooose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  genre: { type: String, required: true },
  place: { type: String, required: true },
  year: { type: Number, required: true },
  protagonist: { type: String, required: true },
  summary: { type: String, required: true },
  image: { type: String, required: true },
});

const Films = mongooose.model('films', filmsSchema);

module.exports = Films;
