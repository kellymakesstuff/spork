const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const db = require("./db/connection");
const recipesRoutes = require('./routes/recipes');
const Recipe = require("./models/recipe");

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(logger("dev"));

app.use('/api', recipesRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
