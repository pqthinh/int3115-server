const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect((error) => {
  if (error) {
    console.log("error when connecting to db:", error);
    // setTimeout(handleDisconnect, 60000);
  } else console.log("Successfully connected to the database.");
});

connection.on("error", function (err) {
  console.log("db error", err);

  if (err) {
    connection.end(function (err) {
      if (err) {
        return console.log("error:" + err.message);
      }
      console.log("Close the database connection.");
    });
  } else {
    console.log(err);
    throw err;
  }
});

module.exports = connection;
