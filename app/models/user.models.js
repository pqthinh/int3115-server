const sql = require("./db.js");

// constructor
const User = function(user) {
  this.id = user.id,
  this.email = user.email;
  this.name = user.name;
  this.mobile = user.mobile;
  this.password = user.password;
  this.status = user.status;
  this.role = user.role;
  this.avatar = user.avatar;
  this.token = "ya29.a0AfH6SMC_6YGJ6nIu3Iwpn4quI1Uxksvzknnr6-IxyToppCNfrl9n58Y2S-mawe9HAvVgIBgZhnSWEju2fkvuatbDNJjbMlFtOE-szefpGNPSlYPOv1U4LUe1eexAGADq12q9OuAmrdLQjBFTiCGBBJ9oIEgG"
};


User.getAll = result => {
  sql.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Users: ", res);
    result(null, res);
  });
};


User.login_ = (email, password, result) => {
    let cm = `select * from user where email = ? and password = ?`;
    sql.query(cm, [email, password], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.length == 1) {
            console.log("Dang nhap thanh cong");
            result(null, new User(res[0]));
        }
        else
        {
            result({ kind: "Email hoac mat khau khong dung" }, null);
        }
    });
};

User.create = (newNews, result) => {
  sql.query("INSERT INTO user SET ?", newNews, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newNews });
    result(null, { id: res.insertId, ...newNews });
  });
};

User.update = (newNews, result) => {
  sql.query("UPDATE user SET ? where id = ?", newNews, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("update user: ", { id: res.insertId, ...newNews });
    result(null, { id: res.insertId, ...newNews });
  });
};

module.exports = User;