const Product = require("../../model/product.model");
module.exports.index = async (req, res) => {
  const products = await Product.find().limit(7);
  res.render("../views/client/pages/products/index.pug", {
    title: "Danh sach san pham",
    list: products,
  });
};
