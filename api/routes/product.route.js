const express = require("express");
const {CreateProduct, FindProduct}=require ("../controllers/product.controllrs");
const productRout =express.Router();
productRout .post("/creatrProduct",CreateProduct)
productRout .post("/findProduct",FindProduct)
module.exports =productRout;