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
