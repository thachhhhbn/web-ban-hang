const Product = require("./../../model/product.model");
module.exports.index = async (req, res) => {
  const find = {
  };

  if (req.query.keyword) {
    find.title = req.query.keyword;
  }

  const product = await Product.find(find);

  res.render("../views/admin/pages/products/index.pug", {
    
    title: "LIST PRODUCTS",
    list: product,
  });
};
