"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan", res);
  // res.render("menu-utama");
};

// menampilkan semua data userBiasa
exports.tampilsemuauser = function (req, res) {
  connection.query("SELECT * FROM userbiasa", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// menampilkan semua data transaksi
exports.tampiltransaksi = function (req, res) {
  connection.query("SELECT * FROM transaksi", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//menampilkan semua data userbias berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
  let id = req.params.id;
  console.log(id);
  connection.query(
    "SELECT * FROM userbiasa WHERE id_user = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//menambahkan data userbiasa
exports.tambahMahasiswa = function (req, res) {
  var email = req.body.email_user;
  var nama = req.body.nama_user;
  var password = req.body.password_user;

  const hay = connection.query(
    "INSERT INTO userbiasa (email_user, nama_user, password_user) VALUES (?, ?, ?)",
    [email, nama, password],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
  console.log(hay);
};

// menambahkan data transaksi
exports.tambahTransaksi = function (req, res) {
  var email = req.body.barang;
  var nama = req.body.tanggal;
  var password = req.body.status;
  var total = req.body.total;
  var ff = req.body.ff;
  var username = req.body.username;

  const hay = connection.query(
    "INSERT INTO transaksi (barang, tanggal, status, total, ff, username) VALUES (?, ?, ?, ?, ?, ?)",
    [email, nama, password, total, ff, username],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
  console.log(hay);
};

//mengubah data berdasarkan id
exports.ubahMahasiswa = function (req, res) {
  var id = req.body.id_user;
  var email = req.body.email_user;
  var nama = req.body.nama_user;
  var password = req.body.password_user;

  connection.query(
    "UPDATE userbiasa SET email_user=?, nama_user=?, password_user=? WHERE id_user=?",
    [email, nama, password, id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Ubah Data", res);
      }
    }
  );
};

// mengubah data transaksi berdasarkan id
exports.ubahTransaksi = function (req, res) {
  var id = req.body.id_user;
  var email = req.body.status;

  connection.query(
    "UPDATE transaksi SET status=? WHERE id_user=?",
    [email, id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Ubah Data", res);
      }
    }
  );
};

//Menghapus data berdasarkan id
exports.hapusMahasiswa = function (req, res) {
  var id = req.body.id_user;
  connection.query(
    "DELETE FROM userbiasa WHERE id_user=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Hapus Data", res);
      }
    }
  );
};
