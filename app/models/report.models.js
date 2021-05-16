const sql = require("./db.js");
const Report = function (report) {
  this.id = report.id;
  this.id_nguoibaocao = report.id_nguoibaocao;
  this.id_tindang = report.id_tindang;
  this.content = report.content;
};

Report.getAll = (report, res) => {
  const { id_nguoibaocao, id_tindang } = report;

  sql.query(
    `SELECT * FROM report where id_nguoibaocao='${id_nguoibaocao}'`,
    (error, result) => {
      if (error) {
        console.log("error: ", error);
        res(null, error);
        return;
      }
      console.log("List Report: ", result);
      res(null, result);
    }
  );
};

Report.addReport = (report, res) => {
  console.log(report);
  const { content, id_nguoibaocao, id_tindang } = report;

  sql.query(
    `insert into report(id_nguoibaocao, id_tindang, content) VALUES('${id_nguoibaocao}', '${id_tindang}','${content}')`,
    (error, result) => {
      if (error) {
        console.log("error: ", error);
        res(null, error);
        return;
      }
      console.log("insert : ", result);
      res(null, `${id_tindang} has been user ${id_nguoibaocao} reportedd`);
    }
  );
};

Report.unReport = (report, res) => {
  const { id_nguoibaocao, id_tindang } = report;

  sql.query(
    `delete from report where id_nguoibaocao='${id_nguoibaocao}' and id_tindang='${id_tindang}'`,
    (error, result) => {
      if (error) {
        console.log("error: ", error);
        res(null, error);
        return;
      }
      console.log("insert : ", result);
      res(null,`${id_tindang} has been user ${id_nguoibaocao} unreported`);
    }
  );
};

module.exports = Report;
