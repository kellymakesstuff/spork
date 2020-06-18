const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;
const db = require("./db/connection");
const Item = require("./models/item");
const app = express();

app.use(bodyParser.json());
app.use(logger("dev"));
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
