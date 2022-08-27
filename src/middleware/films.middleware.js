const mongoose = require('mongoose');

const idValid = (req, res, next) => {
  const idParameter = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParameter)) {
    return res.status(400).send({ mensagem: 'Id invalid' });
  }
  next();
};
const validandObjetoBody = (req, res, next) => {
  const films = req.body;
  if (
    !films ||
    !films.title ||
    !films.director ||
    !films.genre ||
    !films.place ||
    !films.year ||
    !films.protagonist ||
    !films.summary ||
    !films.image
  ) {
    return res.status(400).send({ message: 'Some fields were not filled' });
  }
  next();
};

module.exports = {
  idValid,
  validandObjetoBody,
};
