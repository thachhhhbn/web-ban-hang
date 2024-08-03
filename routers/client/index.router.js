const homeRouter=require("./home.router");
const productsRouter=require("./products.router");

module.exports = (app) => {
  app.use("/", homeRouter);
  app.use("/products", productsRouter);
};
