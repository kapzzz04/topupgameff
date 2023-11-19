fetch("http://localhost:3000/ptransaksi")
  .then((response) => response.json())
  .then((res) => {
    const data = res.values;
    updateUI(data);
  })
  .catch((error) => {
    alert(
      `ada yang salah pada penginputan anda, silahkan cek lebih teliti : ${error}`
    );
  });

function updateUI(movies) {
  let cards = "";
  movies.forEach((e) => {
    if (e.id_user > 20) {
      cards += transaksi(
        e.id_user,
        e.barang,
        e.tanggal,
        e.username,
        e.ff,
        e.status,
        e.total
      );
    }
  });
  const con = document.querySelector(".con-transaksi");
  con.innerHTML = cards;
  statusL();
}

function statusL() {
  const stt = document.querySelectorAll(
    ".container .get-data table tbody tr td.status"
  );

  stt.forEach((e) => {
    if (e.innerHTML == "pendding") {
      e.classList.add("bg-warning");
    } else if (e.innerHTML == "fail") {
      e.classList.add("bg-danger");
    }
  });
}

const transaksi = function (id, barang, tanggal, username, ff, status, total) {
  return `  <div class="card border-primary mt-3 mb-3">
  <div class="card-header">Free Fire Top Up</div>
  <div class="card-body text-primary">
    <div class="get-data">
      <table>
        <tbody>
          <tr>
            <td>ID Transaksi</td>
            <td>:</td>
            <td>${id}</td>
          </tr>
          <tr>
            <td>Barang yang dibeli</td>
            <td>:</td>

            <td>${barang}</td>
          </tr>
          <tr>
            <td>Tanggal Pemesanan</td>
            <td>:</td>

            <td>${tanggal}</td>
          </tr>
          <tr>
            <td>Username</b></td>
            <td>:</td>

            <td><b>${username}</b></td>
          </tr>
          <tr>
            <td>ID Game</b></td>
            <td>:</td>

            <td>${ff}</td>
          </tr>
          <tr>
            <td>Pembayaran</b></td>
            <td>:</td>

            <td class="text-black"><b>GoPay</b></td>
          </tr>
          <tr>
            <td>Status Pembayaran</td>
            <td>:</td>

            <td class="status bg-success text-white">${status}</td>
          </tr>
        </tbody>
      </table>
      <hr>
      <div class="t-pembayaran">
        <div><b>Total Pembayaran</b> <span class="t-nominal">${total}</span></div>
      </div>
    </div>
  </div>
</div>`;
};
