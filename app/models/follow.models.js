const sql = require("./db.js");
const Follow = function (follow) {
  this.id = follow.id;
  this.id_parrent = follow.id_parrent;
  this.id_ref = follow.id_ref;
  this.type = follow.type;
};

Follow.getAll = (follow, res) => {
  const { type, id_parrent } = follow;

  sql.query(
    `SELECT * FROM followers where type='${type}' and id_parrent='${id_parrent}'`,
    (error, result) => {
      if (error) {
        console.log("error: ", error);
        res(null, error);
        return;
      }
      console.log("List follow: ", result);
      res(null, result);
    }
  );
};

Follow.addFollow = (follow, res) => {
  const { type, id_parrent, id_ref } = follow;

  sql.query(
    `insert into followers(id_parrent, id_ref, type) VALUES('${id_parrent}', '${id_ref}','${type}')`,
    (error, result) => {
      if (error) {
        console.log("error: ", error);
        res(null, error);
        return;
      }
      console.log("insert : ", result);
      res(null, `${id_ref} start following ${id_parrent}`);
    }
  );
};

Follow.unFollow = (follow, res) => {
  const { id_parrent, id_ref } = follow;

  sql.query(
    `delete from followers where id_parrent='${id_parrent}' and id_ref='${id_ref}'`,
    (error, result) => {
      if (error) {
        console.log("error: ", error);
        res(null, error);
        return;
      }
      console.log("insert : ", result);
      res(null, `${id_ref} unfollowing ${id_parrent}`);
    }
  );
};

module.exports = Follow;
