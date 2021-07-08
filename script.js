// preloader

window.onload = function () {
  var preloader = document.querySelector('.loader-bg');
  setTimeout(function () {
    preloader.style.display = 'none';
  }, 2500);
};

// // Countdown Timer

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let festDay = "July 27, 2021 11:00:00",
    countDown = new Date(festDay).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").textContent = Math.floor(
        distance / day
      )),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //seconds
    }, 0);
})();

//   Slides Carousel

var index = 0;
var locations = [
  "<h1>ANUV JAIN</h1><p>27th June 2021</p><p>9:00PM-10:30PM</p>",
  "<h1>ANUBHAV SINGH BASSI</h1><p>28th June 2021</p><p>9:30PM-10:30PM</p>",
  "<h1>ABHISHEK UPMANYU</h1><p>29th June 2021</p><p>9:45PM-10:30PM</p>",
  "<h1>ODESZA</h1><p>30th June 2021</p><p>10:00PM-12:00AM</p> ",
];
var backgrounds = [
  "./assets/anuvjain_bg.webp",
  "./assets/bassi_bg.webp",
  "./assets/upmanyu_bg.webp",
  "./assets/odesza_bg.webp",
];

var slides = document.getElementsByClassName("pro-content");
var nextArrow = document.getElementById("next");
var previousArrow = document.getElementById("previous");
var pronites_page = document.querySelector(".pronites");
var pro_name = document.getElementById("pro-name");

showSlides(index);

function showSlides(x) {
  pronites_page.style.backgroundImage = "none";
  if (x > slides.length - 1) {
    index = 0;
  }
  if (x < 0) {
    index = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index].style.display = "block";

  pro_name.innerHTML = locations[index];

  pronites_page.style.backgroundImage = ` url(${backgrounds[index]})`;
}

nextArrow.onclick = function () {
  index += 1;
  showSlides(index);
};

previousArrow.onclick = function () {
  index -= 1;
  showSlides(index);
};


//User profile

var element = document.querySelector(".profile");
const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const token = localStorage.getItem("cookie");

var admin = document.querySelector(".admin");
var flag = 0;

const proniteRegister = [];
const button = [];

const proniteid = [];

var j;

for (j = 1; j <= 4; j++) {
  proniteRegister[j] = document.querySelector(".pro" + j);
  button[j] = document.querySelector(".pro" + j);
}

if (token) {
  fetch(`${apiUrl}/user/dashboard`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      credentials: 'same-origin'
    })
    .then((res) => res.json())
    .then((data) => {
      element.innerHTML = `<i class="fas fa-user-astronaut"></i> ${data.data[0].name}`;
      element.classList.add("show");
      if (data.data[0].email === "essence21webkriti@gmail.com")
        admin.addEventListener("click", () => {
          location.href = "https://essencefest.netlify.app/admin/dashboard.html";
        })
      else {
        admin.addEventListener("click", () => { location.href = "https://essencefest.netlify.app/admin/login.html"; })
      }
    })
    .catch((err) => {
      alert("Error Occured")
    })

fetch(`${apiUrl}/user/pronite`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      credentials: 'same-origin'
    })
    .then((res) => res.json())
    .then((data) => {
      for(var i = 0; i < data.data.length;i++)
      {
        button[data.data[i].id].innerHTML = "Unregister";
      }
    })
    .catch((err) => {
      alert("Error Occured")
    })
  
}

const url = window.location.href;
var k;

function pro_reg(k) {
if(token){
  const pronite = (route, fetch_method) => {
    fetch(`${apiUrl}/pronites/${route}/${k}`, {
      method: `${fetch_method}`,
      crossDomain: true,
      xhrFields: {
        withCredentials: true,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then((res) => {
      const status = res.status;
      res.json().then((data) => {
        if (data.error) {
          Swal.fire({
            icon: 'warning',
            title: 'Warning!',
            text: `${data.error}`,
            confirmButtonText: `OK`,
          })
          .then((result) => {
            location.href = "/RegisterLogin"
          })
        }
        else {
          Swal.fire({
            icon: 'success',
            text: `${data.message}`,
          })
        }

        if (status === 401) {
          location.href = "./RegisterLogin/";
        }

      });
    });
  };
  proniteRegister[k].addEventListener("click", (event) => {
    event.preventDefault();
    if (button[k].innerText === "Register") {
      const route = "proniteRegn";
      const fetch_method = "POST";
      button[k].innerHTML = "Unregister";
      pronite(route, fetch_method);
    }

    else {
      const route = "proniteUnregister";
      const fetch_method = "DELETE";
      button[k].innerHTML = "Register";
      pronite(route, fetch_method);
    }
  })
}

else
{
  proniteRegister[k].addEventListener("click", (event) => {
    event.preventDefault();
    Swal.fire({
      icon: 'warning',
      title: 'Warning!',
      text: `User not Signed In`,
      confirmButtonText: `OK`,
    })
    .then((result) => {
      location.href = "/RegisterLogin"
    })
  })
}
}

for (k = 1; k <= 4; k++) {
  pro_reg(k);
}

// backtoTop

const backToTopButton = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", scrollFunction);
document.body.addEventListener("touchmove", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 300) {

    if (!backToTopButton.classList.contains("btnEntrance")) {

      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";

    }
  }
  else {
    if (backToTopButton.classList.contains("btnEntrance")) {

      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}


const regButton = document.querySelector(".register-button");
const logoutButton = document.querySelector(".logout-button");

if(token){
  regButton.style.visibility= "hidden";
  logoutButton.style.visibility = "visible";

  logoutButton.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("cookie");
    location.href="./"
  })
}
