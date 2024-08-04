const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const router = require("./routers/client/index.router");
const pug = require("pug");
//const path = require("path");
const port = 3000;
const database = require("./config/database");

database.connect();

app.use(express.static("public"));
app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "resources/views"));\
app.set("views", "views");

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

// const fs=require("fs")
// fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price,thumbnail")
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     fs.writeFile("./test.json", JSON.stringify(json), (err) => {
//       if (err) {
//         throw new Error("Something went wrong.");
//       }
//       console.log("JSON written to file. Contents:");
//       console.log(fs.readFileSync("test.json", "utf-8"));
//     });
//   });
