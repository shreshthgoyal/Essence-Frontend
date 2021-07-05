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

const unique =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN5bGF0cG1jOHhAYnV5LWJsb2cuY29tIiwiaWF0IjoxNjI1Mzg2MTI2fQ.1e8AujLUg4-IrliEq7Jr1Z88bioaYVVfQ8y95fkzIb8";

localStorage.setItem("cookie", unique);

const token = localStorage.getItem("cookie");

var admin = document.querySelector(".admin");
var flag = 0;

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
      console.log(err)
    })
}

const proniteRegister = [];
const proniteid = [];

var j;

for (j = 1; j <= 4; j++) {
  proniteRegister[j] = document.querySelector(".pro" + j);
}

// const apixUrl = "http://localhost:5000";

// const tokenx = localStorage.getItem("cookie");

const url = window.location.href;

var k;

function pro_reg(k) {
  const registerPronite = (route, fetch_method) => {
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
          alert(data.error);
        } else {
          alert(data.message);
        }

        if (status === 401) {
          location.href = "./RegisterLogin/";
        } else {
          location.href = url;
        }
      });
    });
  };

  proniteRegister[k].addEventListener("click", (event) => {
    event.preventDefault();
    const route = "proniteRegn";
    const fetch_method = "POST";

    registerPronite(route, fetch_method);
  });
}

for (k = 1; k <= 4; k++) {
  pro_reg(k);
}


// if (!token) {
//   element.innerHTML = "";
//   button.classList.remove("show");
// }

// backtoTop

const backToTopButton = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", scrollFunction);
document.body.addEventListener("touchmove", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 300) { 
    
    if(!backToTopButton.classList.contains("btnEntrance")) {
     
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
      
    }
  }
  else {
    if(backToTopButton.classList.contains("btnEntrance")) {
      
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}
