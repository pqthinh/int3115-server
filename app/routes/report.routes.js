module.exports = (app) => {
  const report = require("../controllers/report.controller");
  app.get("/report", report.getAll);
  app.post("/report", report.addReport);
  app.post("/report/unreport", report.unReport);
};
