
const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
      nav.style.display = "none";
    } else {
      nav.style.display = "initial";
    }
  }

const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const signInForm = document.querySelector(".btn-in");

const token = localStorage.getItem("cookie");

if(token) {
  location.href = "/profile"
}

signInForm.addEventListener("click", (event) => {

  event.preventDefault();

  const signInEmail = document.querySelector(".mail");
  const signInPassword = document.querySelector(".pass");

  const email = signInEmail.value;
  const password = signInPassword.value;

  fetch(`${apiUrl}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }) 
    .then((res) => res.json())
    .then((data) => {
      const token = data.token;
  
      if (data.error)
      {Swal.fire({
        icon: 'warning',
        title: 'Warning!',
        text: `${data.error}`,
      })
    }
      else if(token)
      {
      localStorage.setItem("cookie", token);
      location.href = "../profile";
      }

    })
    .catch((err) => {
       Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Error Signing In! Try again.',
      })
    });
});

const signUpForm = document.querySelector(".btn-up");

signUpForm.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.querySelector(".mailin").value;
  const name = document.querySelector(".name").value;
  const college = document.querySelector(".college").value;
  const phonenumber = document.querySelector("#phone").value;
  const password = document.querySelector(".passin").value;
  const retypedPassword = document.querySelector(".repassin").value;

  if (password !== retypedPassword) {
    Swal.fire({
      icon: 'warning',
      title: 'Warning!',
      text: 'Passwords do not match. Try again.',
    })
    return;
  }

  fetch(`${apiUrl}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, college, phonenumber, password }),
  })
    .then((res) =>
      (res.json()))
    .then((data) => {
      if (data.error)
        {Swal.fire({
          icon: 'warning',
          title: 'Warning!',
          text: `${data.error}`,
        })}

      else {
        Swal.fire({
          icon: 'success',
          title: 'Verification mail sent. Verify yourself before signing in.',
        })
        location.href = "/waiting/index.html"
      }
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Warning!',
        text: 'Error Signing up, Try again.',
      })
    });
});

//User panel

const navin = document.querySelector(".in");

if (token) {
  navin.innerHTML = `<i class="fas fa-user"></i>
  <span>Profile</span>`;
}

if (!token) {
  navin.innerHTML = `<i class="fas fa-user"></i>
  <span>Sign-in</span>`;
}
