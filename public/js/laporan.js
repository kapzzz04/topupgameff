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
  let ganti = "";
  movies.forEach((e) => {
    if (e.id_user > 20) {
      ganti += laporan(e.id_user, e.barang, e.tanggal, e.status, e.total);
    }
  });
  const con = document.querySelector(".tbody");
  con.innerHTML = ganti;
  statusL();
}

function statusL() {
  const stt = document.querySelectorAll(".container table tbody tr td.status");
  stt.forEach(function (a) {
    if (a.innerHTML == "pendding") {
      a.classList.add("bg-warning");
    } else if (a.innerHTML == "fail") {
      a.classList.add("bg-danger");
    }
  });
}

const laporan = function (id, barang, tanggal, status, total) {
  return `<tr>
  <td>${id}</td>
  <td>kadkakda</td>
  <td>${barang}</td>
  <td>${tanggal}</td>
  <td class="status bg-success text-white">${status}</td>
  <td>${total}</td>
</tr>`;
};

// ubah data status
const idF = document.querySelector(".get-id");
const statusF = document.querySelector(".get-var");
const tombolF = document.querySelector(".btn-f");

let user = {};
tombolF.addEventListener("click", function () {
  user = {
    id_user: idF.value,
    status: statusF.value,
  };

  fetch("http://localhost:3000/pubah", {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Data berhasil diubah");
    })
    .catch((error) => {
      console.error("Ada masalah dengan permintaan fetch:", error);
    });
});
