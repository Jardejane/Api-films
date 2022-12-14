const mongoose = require('mongoose');
const connectToDataBase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro ${error}`),
    );
};

module.exports = connectToDataBase;
