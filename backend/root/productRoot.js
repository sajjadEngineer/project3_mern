const express =require("express")
const { getAllProducts } = require("../controller/controllerProduct")
 const router = express.Router()

 router.route("/products").get(getAllProducts);
 module.exports =router 