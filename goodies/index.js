//shrinkable header
const token = localStorage.getItem("cookie");                                                     //acquiring token from local storage

const navigation = document.getElementById("head");
const heading = document.getElementById("heading");

document.body.onscroll = function () {
  
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {                     //the size of heading at the top decreases on scrolling
    navigation.style.height = "50px";
    heading.style.fontSize = "2rem";
  } else {
    navigation.style.height = "80px";
    heading.style.fontSize = "3rem";
  }
};

let back = document.querySelector(".back");

back.addEventListener("click", ()=>{                                                                                   //takes the user to the previous location
    window.history.back();
  })

var i;

if(token) {
function buyAnimate(i) {
  document.querySelector(".buy" + i).addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(".card" + i).classList.toggle("expanded");                                   //toggling the expanded class when user clicks on buy button
    setTimeout(function () {document.querySelector(".card" + i).classList.toggle("expanded");}, 3000);
  });
}

for (i = 1; i <= 6; i++) {
  buyAnimate(i);
}
}

const buyButton = [];
const goodieid = [];

var j;

for (j = 1; j <= 6; j++) {
  buyButton[j] = document.querySelector(".buy" + j);
}

const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const url = window.location.href;

var k;

function goodie_reg(k) {
  const purchaseGoodies = (route, fetch_method) => {
    fetch(`${apiUrl}/goodies/${route}/${k}`, {                                              
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
      const status = res.status;                                                            ////Storing the status sent by the backend
      res.json().then((data) => {
        if (data.error) 
      {
        Swal.fire({
          icon: 'warning',
          title: 'Warning!',
          text: `User not Signed In`,
          confirmButtonText: `OK`,
        })
        .then((result) => {                                                                           //Redirecting to Login page if the user is not logged in
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
          location.href = "../RegisterLogin/";
        }
        
      });
    });
  };

  buyButton[k].addEventListener("click", (event) => {                                            //making a POST request to goodiepurchase route if the user buys a product
    event.preventDefault();
    const route = "goodiepurchase";
    const fetch_method = "POST";

    purchaseGoodies(route, fetch_method);
  });
}

for (k = 1; k <= 6; k++) {
  goodie_reg(k);
}

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
