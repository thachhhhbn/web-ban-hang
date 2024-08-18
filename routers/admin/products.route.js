const express = require("express");
const router = express.Router();
const productController = require("../../controllers/admin/products.controller");

router.get("/", productController.index);

router.get("/create", productController.create);
router.post("/create", productController.createPost);

module.exports = router;
