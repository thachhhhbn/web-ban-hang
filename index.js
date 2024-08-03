const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const router = require("./routers/client/index.router");
const pug = require("pug");
const path = require("path");
const port = 3000;
const database=require("./config/database");
database.connect();

app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "resources/views"));\
app.set("views", "views");

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
