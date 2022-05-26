const express = require("express");

const app =express();

app.use(express.json())

//route import 
const products = require("./root/productRoot");

app.use("api/vi",products);

module.exports = app