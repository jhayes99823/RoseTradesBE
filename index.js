import express from "express";
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
import { connectDb } from "./lib";
const PORT = process.env.PORT || 5002;

const logger = require('morgan');

app.use(logger('dev'));

app.use(cors());

import router from "./routes";

app.use(bodyParser.json());
app.use("/api/v1", router);

connectDb().then(async () => {
  const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
