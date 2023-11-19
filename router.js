"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  // app.route("/").get(jsonku.index);

  app.get("/menu-utama", (req, res) => {
    res.render("menu-utama");
  });

  app.get("/registrasi", (req, res) => {
    res.render("registrasi");
  });

  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.get("/transaksi", (req, res) => {
    res.render("transaksi");
  });

  app.get("/laporan", (req, res) => {
    res.render("laporan", {
      title: "Hello World",
    });
  });

  app.get("/admin", (req, res) => {
    res.render("admin");
  });

  app.get("/user", (req, res) => {
    res.render("user");
  });

  app.get("/ubah-data", (req, res) => {
    res.render("ubah-data");
  });

  app.route("/tampil").get(jsonku.tampilsemuauser);

  app.route("/ptransaksi").get(jsonku.tampiltransaksi);

  app.route("/tampil/:id").get(jsonku.tampilberdasarkanid);

  app.route("/tambah").post(jsonku.tambahMahasiswa);
  app.route("/ptambah").post(jsonku.tambahTransaksi);

  app.route("/ubah").put(jsonku.ubahMahasiswa);
  app.route("/pubah").put(jsonku.ubahTransaksi);

  app.route("/hapus").delete(jsonku.hapusMahasiswa);
};
