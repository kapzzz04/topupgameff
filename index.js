const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// Middleware untuk mengurai data JSON dari tubuh permintaan
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("public"));

// panggil routes
var routes = require("./router");
routes(app);

// Mulai server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
