const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();

app.use(bodyParser.json({ limit: "64mb" }));
app.use(bodyParser.urlencoded({ limit: "64mb", extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());
app.use("/data", express.static("data"));

require("./app/routes/news.routes")(app);
require("./app/routes/banner.routes")(app);
require("./app/routes/category.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/images.route")(app);
require("./app/routes/mark.routes")(app);
require("./app/routes/follow.routes")(app);
require("./app/routes/report.routes")(app);
app.get("/", (req, res) => {
  res.json({ send: "Welcome to my app" });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
