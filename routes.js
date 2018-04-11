const routes = require("next-routes")();
// use this file for dynamic routing

routes
  .add("/campaigns/new", "/campaigns/new") // need to add this before to prevent 'new' from being considered an 'address'
  .add("/campaigns/:address", "/campaigns/show"); // route, component directory

module.exports = routes;
