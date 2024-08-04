const dashboard = require("./dashboard.router");
const products = require("./products.route");

const system = require("../../config/system");

module.exports = (app) => {
  const PATH_ADMIN = system.prefixAdmin;
  app.use(PATH_ADMIN + "/dashboard", dashboard);
  app.use(PATH_ADMIN + "/products", products);

};
