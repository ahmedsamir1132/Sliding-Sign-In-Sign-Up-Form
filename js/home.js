var home = document.getElementById("home");
var logout = document.getElementById("logout-btn");
var info = JSON.parse(localStorage.getItem("clientName"));

logout.onclick = function () {
   open("index.html","_self");
}

home.innerHTML = "Welcome " + info.name;