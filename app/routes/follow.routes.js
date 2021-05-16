module.exports = (app) => {
  const follow = require("../controllers/follow.controllers");
  app.get("/follow", follow.getAll);
  app.post("/follow/addfollow", follow.addFollow);
  app.post("/follow/unfollow", follow.unFollow);
};
