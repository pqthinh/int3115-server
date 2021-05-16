const Follow = require("../models/follow.models");

exports.getAll = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const follow = new Follow({
    id_parrent: req.body.parrent,
    id_ref: req.body.ref,
    type: req.body.type,
  });
  Follow.getAll(follow, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving follow list.",
      });
    else res.send(data);
  });
};

exports.addFollow = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const follow = new Follow({
    id_parrent: req.body.parrent,
    id_ref: req.body.ref,
    type: req.body.type,
  });
  Follow.addFollow(follow, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Mark.",
      });
    else res.send(data);
  });
};

exports.unFollow = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const follow = new Follow({
    id_parrent: req.body.parrent,
    id_ref: req.body.ref,
    type: req.body.type,
  });
  Follow.unFollow(follow, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Mark.",
      });
    else res.send(data);
  });
};
