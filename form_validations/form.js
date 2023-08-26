const submitBtn = document.getElementById("submit");

function fullName() {
  const name = document.getElementById("fullName");
  const error = document.getElementById("fullNameError");
  const errorImg = document.querySelector("#fNameErrorImg");
  const rightImg = document.querySelector("#fRightImg");

  error.innerText = "";
  if (name.value == "") {
    error.innerText = "*Enter valid name";
    errorImg.style.display = "block";
  } else {
    rightImg.style.display = "block";
  }
}

function email() {
  const email = document.querySelector("#email");
  const emailError = document.getElementById("emailError");
  const errorImg = document.getElementById("errorImg3");
  const rightImg = document.querySelector("#rightImg3");

  emailError.innerText = "";
  if (email.value == "") {
    emailError.innerText = "*Enter valid Email Id";
    errorImg.style.display = "block";
  } else {
    rightImg.style.display = "block";
  }
}

const password = document.querySelector("#password");
function passwordFun() {
  const passwordError = document.getElementById("passwordError");
  const errorImg4 = document.getElementById("errorImg4");
  const rightImg4 = document.querySelector("#rightImg4");

  passwordError.innerText = "";
  if (password.value == "") {
    passwordError.innerText = "*Enter valid Password";
    errorImg4.style.display = "block";
  } else rightImg4.style.display = "block";
}

const conformPassword = document.querySelector("#conformPassword");
function conformPasswordFun() {
  const conformPasswordError = document.getElementById("conformPasswordError");
  const errorImg5 = document.getElementById("errorImg5");
  const rightImg5 = document.querySelector("#rightImg5");

  conformPasswordError.innerText = "";
  if (conformPassword.value == "") {
    conformPasswordError.innerText = "*Enter Valid password";
    errorImg5.style.display = "block";
  } else if (password.value == conformPassword.value) {
    rightImg5.style.display = "block";
    conformPasswordError.innerText = "8";
  } else errorImg5.style.display = "block";
  conformPasswordError.innerText = "Conform Password Not Match";
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  fullName();
  email();
  passwordFun();
  conformPasswordFun();
});
