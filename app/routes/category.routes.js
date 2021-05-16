module.exports = (app) => {
  const category = require("../controllers/category.controllers");
  app.get("/category", category.findAll);
};
