const tombol = document.querySelector(".bt-b");
const control = document.querySelector(".control-input");
const h5 = document.querySelector(".ts-5");
const size = document.querySelector(".id-ff");
const blok = document.querySelector(".tampil-user");

let vrt = "";
tombol.addEventListener("click", function () {
  fetch(`https://id-game-checker.p.rapidapi.com/free-fire/${control.value}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0923002afdmshc3197034369b330p11fa55jsncae0a1154a1c",
      "X-RapidAPI-Host": "id-game-checker.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((ros) => {
      const user = ros.data;
      console.log(ros.data);
      h5.innerHTML = user.username;
      size.style.height = "220px";
      blok.style.display = "block";
    })
    .catch((err) => {
      alert(`CEK ULANG, ID ANDA SALAH: ${err}`);
    });
});

const conUl = document.querySelector(".container-ul");
const act = document.querySelectorAll("li.con-li");

let nominal = "";
let dm;

conUl.addEventListener("click", function (e) {
  if (e.target.classList.contains("con-li")) {
    act.forEach(function (a) {
      a.className = "con-li";
    });
    e.target.classList.add("active");
    nominal = e.target.querySelector(".s-rupe");
    dm = e.target.querySelector(".dm-nom");
    doSomethingWithNominal();
  }
});

function doSomethingWithNominal() {
  const conModal = document.querySelector(".modal");
  const vrt = h5.innerHTML;
  conModal.innerHTML = modal(nominal.innerHTML, vrt);
  const currentTimeInMillis = Date.now();
  const currentDate = new Date(currentTimeInMillis);
  const status = "pendding";

  let user = {
    barang: dm.innerHTML,
    tanggal: currentDate,
    status: status,
    total: nominal.innerHTML,
    ff: control.value,
    username: vrt,
  };

  fetch("http://localhost:3000/ptambah", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Ada masalah dengan permintaan fetch:", error);
    });
}

const modal = function (nominal, user) {
  return `<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">
        Detail Transaksi
      </h1>
      <button
        type="button"
        class="btn-close bg-white"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body">
      <p>Mohon konfirmasi username anda sudah benar.</p>
      <div class="get-data">
        <table>
          <tbody>
            <tr>
              <td>Username:</td>
              <td>${user}</td>
            </tr>
            <tr>
              <td>ID:</td>
              <td>${control.value}</td>
            </tr>
            <tr>
              <td>Harga:</td>
              <td>${nominal}</td>
            </tr>
            <tr>
              <td>Transfer nomor GoPay berikut</b>:</td>
              <td><b>0895412899255</b></td>
            </tr>
          </tbody>
        </table>
        <hr>
        <div class="t-pembayaran">
          <div><b>Total Pembayaran</b> <span class="t-nominal">${nominal}</span></div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>
    </div>
  </div>
  </div>`;
};

// transaksi menerima data tambah
