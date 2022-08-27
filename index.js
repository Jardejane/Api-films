require('dotenv').config()
const express = require('express');
const routes = require('./src/routes/films.routes.js');
const connectToDataBase = require('./src/database/mongoDb/database.js');
const cors = require('cors');


const port = process.env.PORT || 108;
const app = express();

connectToDataBase();

app.use(cors());
app.use(express.json());
app.use('/films', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
