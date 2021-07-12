particlesJS.load("particles-js", "particles.json");

const body = document.querySelector("body");
const signInSignUpButton = document.querySelector(".sign-in-sign-up");

window.addEventListener("load", () => {

  const token = localStorage.getItem("jwt");

  if (token) {
    location.href = "/";
  }
});

signInSignUpButton.addEventListener("click", () => {
  event.preventDefault();
  location.href = "/signin-signup/index.html";
});
