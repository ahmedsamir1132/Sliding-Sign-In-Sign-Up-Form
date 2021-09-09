var signUpName = document.getElementById('signup-name');
var signUpEmail = document.getElementById('signup-email');
var signUpPass = document.getElementById('signup-pass');
var signUpBtn = document.getElementById("signup-btn");
var info = [];

/* sgin up section */

signUpBtn.onclick = function () {
	container.classList.remove("right-panel-active");
	addClient();
	signUpClearForm();
}

function addClient() {
	var client =
	{
		name: signUpName.value,
		email: signUpEmail.value,
		password: signUpPass.value
	}
	info.push(client);
	localStorage.setItem("clientInfo", JSON.stringify(info));
}

function signUpClearForm() {
	signUpName.value = signUpEmail.value = signUpPass.value = "";
}

/* End of sign up section */


/*  sign in section */

var loginEmail = document.getElementById("signin-email");
var loginPass = document.getElementById("signin-pass");
var loginBtn = document.getElementById("signin-btn");
var info_2 = JSON.parse(localStorage.getItem("clientInfo"));

loginBtn.onclick = function () {
	loginCheck();
}

function loginCheck() {

	for (var i = 0; i < info_2.length; i++) {
		if (loginEmail.value == info_2[i].email && loginPass.value == info_2[i].password) {
			localStorage.setItem("clientName", JSON.stringify(info_2[i]));
			open("home.html","_self");
			signInClearForm();
		}
	}
}

function signInClearForm() {
	loginEmail.value = loginPass.value = "";
}

/* End of sign in section */


/* animation section */

var signUpButton = document.getElementById('signUp');
var signInButton = document.getElementById('signIn');
var container = document.getElementById('container');

signUpButton.addEventListener('click', function () {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', function () {
	container.classList.remove("right-panel-active");
});

/* End of animation section */