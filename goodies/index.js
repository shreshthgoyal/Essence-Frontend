//shrinkable header

let navigation = document.getElementById("head");
let heading = document.getElementById("heading");

document.body.onscroll = function () {
  console.log(document.documentElement.scrollTop);
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navigation.style.height = "50px";
    heading.style.fontSize = "2rem";
  } else {
    navigation.style.height = "80px";
    heading.style.fontSize = "3rem";
  }
};

let back = document.querySelector(".back");

back.addEventListener("click", ()=>{
  console.log("Ds")
    window.history.back();
  })

var i;

function buyAnimate(i) {
  document.querySelector(".buy" + i).addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(".card" + i).classList.toggle("expanded");
  });
}

for (i = 1; i <= 6; i++) {
  buyAnimate(i);
}

const buyButton = [];
const goodieid = [];

var j;

for (j = 1; j <= 6; j++) {
  buyButton[j] = document.querySelector(".buy" + j);
}

const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const unique =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN5bGF0cG1jOHhAYnV5LWJsb2cuY29tIiwiaWF0IjoxNjI1Mzg2MTI2fQ.1e8AujLUg4-IrliEq7Jr1Z88bioaYVVfQ8y95fkzIb8";

localStorage.setItem("cookie", unique);

const token = localStorage.getItem("cookie");

const url = window.location.href;

var k;

function goodie_reg(k) {
  const purchaseGoodies = (route, fetch_method) => {
    console.log(k);
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
      const status = res.status;
      res.json().then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.message);
        }

        if (status === 401) {
          location.href = "../RegisterLogin/";
        } else {
          location.href = url;
        }
      });
    });
  };

  buyButton[k].addEventListener("click", (event) => {
    event.preventDefault();
    const route = "goodiepurchase";
    const fetch_method = "POST";

    purchaseGoodies(route, fetch_method);
  });
}

for (k = 1; k <= 6; k++) {
  goodie_reg(k);
}
