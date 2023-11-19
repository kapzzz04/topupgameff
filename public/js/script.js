// $(".bt-b").on("click", function () {
//   $.ajax({
//     url: `https://v1.apigames.id/merchant/M230803RSWQ7558CG/cek-username/freefire?user_id=${$(
//       ".control-input"
//     ).val()}&signature=659fb5760da5dbd21dc6018d112a55d0`,
//     success: (m) => {
//       const movie = m.data;
//       console.log(movie.username);
//       $(".ts-5").html(movie.username);
//       $(".id-ff").css("height", "220px");
//       $(".tampil-user").css("display", "block");
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });

// regstrasi
const email = document.querySelector(".email");
const nama = document.querySelector(".nama");
const password = document.querySelector(".password");
const myBtn = document.querySelector("#myButton");

let user = {};
myBtn.addEventListener("click", function () {
  user = {
    email_user: email.value,
    nama_user: nama.value,
    password_user: password.value,
  };

  fetch("http://localhost:3000/tambah", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Selamat registrasi berhasil");
    })
    .catch((error) => {
      console.error("Ada masalah dengan permintaan fetch:", error);
    });
});
