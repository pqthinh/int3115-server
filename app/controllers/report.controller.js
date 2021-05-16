const Report = require("../models/report.models");

exports.getAll = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const report = new Report({
    id_nguoibaocao: req.body.id_nguoibaocao,
    id_tindang: req.body.id_tindang,
    content: req.body.content,
  });
  Report.getAll(report, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving report list.",
      });
    else res.send(data);
  });
};

exports.addReport = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const report = new Report({
    id_nguoibaocao: req.body.id_nguoibaocao,
    id_tindang: req.body.id_tindang,
    content: req.body.content,
  });
  Report.addReport(report, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Mark.",
      });
    else res.send(data);
  });
};

exports.unReport = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const report = new Report({
    id_nguoibaocao: req.body.id_nguoibaocao,
    id_tindang: req.body.id_tindang,
    content: req.body.content,
  });
  Report.unReport(report, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Mark.",
      });
    else res.send(data);
  });
};
