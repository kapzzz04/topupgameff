const myBtnLogin = document.querySelector(".btnlogin");
const email = document.querySelector(".email");
const nama = document.querySelector(".nama");
const password = document.querySelector(".password");
const token = document.querySelector(".token");
const apakek = document.querySelector(".form");

myBtnLogin.addEventListener("click", async function (event) {
  try {
    event.preventDefault();
    const movies = await sett();
    console.log(movies);
    settData(movies);
  } catch (err) {
    alert(err);
  }
});

function sett() {
  return fetch("http://localhost:3000/tampil")
    .then((response) => response.json())
    .then((res) => {
      return res.values;
    });
}

function settData(movies) {
  movies.forEach((e) => {
    if (e.email_user == email.value && e.password_user == password.value) {
      if (e.id_user == 1) {
        apakek.setAttribute("action", "admin");
        redirectToPage("admin");
      } else if (e.id_user == 24 && e.email_user == "operator@gmail.com") {
        apakek.setAttribute("action", "menu-utama");
        redirectToPage("menu-utama");
      } else {
        apakek.setAttribute("action", "user");
        redirectToPage("user");
      }
    }
  });
}

function redirectToPage(page) {
  // Mengganti lokasi halaman dengan URL sesuai nilai "page"
  window.location.href = page; // Ubah .html sesuai ekstensi file halaman Anda
}
