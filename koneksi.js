var mysql = require("mysql");

// membuat koneksi database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbregistrasi",
});

conn.connect((err) => {
  if (err) throw err;

  console.log("Mysql terkoneksii");
});

module.exports = conn;
