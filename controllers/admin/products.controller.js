const Product = require("./../../model/product.model");
module.exports.index = async (req, res) => {
  //search
  const find = {};
  let keyword = "";
  if (req.query.keyword) {
    keyword = req.query.keyword;
    const regex = new RegExp(keyword, "i");
    find.title = regex;
  }
  //end search

  //pagination

  const objectPagination = {
    currentPage: 1,
    limitItem: 7,
  };

  if (req.query.page) {
    objectPagination.currentPage = parseInt(req.query.page);
    objectPagination.skip =
      (objectPagination.currentPage - 1) * objectPagination.limitItem;
  }

  const buttonsPagination = Math.ceil(
    (await Product.find().countDocuments()) / objectPagination.limitItem
  );

  //end pagination

  const product = await Product.find(find)
    .limit(objectPagination.limitItem)
    .skip(objectPagination.skip)
    .sort();
  res.render("../views/admin/pages/products/index.pug", {
    title: "LIST PRODUCTS",
    list: product,
    valueInput: find.title,
    btnList: buttonsPagination,
  });
};

//create
// [get]
module.exports.create = async (req, res) => {
  res.render("../views/admin/pages/products/create.pug", {
    title: "CREATE PRODUCT",
  });
};

// [post]
module.exports.createPost = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.redirect("/admin/products");
};
//end create

// delete
module.exports.delete = async (req, res) => {};
// end delete


























