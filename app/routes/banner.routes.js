module.exports = (app) => {
  const banner = require("../controllers/banner.controllers");
  app.get("/banner", banner.findAll);
};
