const apiUrl = "http://localhost:5000";
const urlParams = new URLSearchParams(window.location.search);
const  token = urlParams.get("token");

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
        nav.style.display = "none";
    } else {
        nav.style.display = "initial";
    }
}

fetch(`${apiUrl}/user/verify/${token}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then((res) =>
        (res.json()))
    .then((data) => {
        if (data.error)
            alert(data.error);
    })
    .catch((err) => {
        alert("Error Signing Up");
        console.log(err);
    });

const button = document.querySelector(".button-text");

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("click");
    location.href = "/RegisterLogin/index.html"
});


const closePopup = () =>{
    const btnOk = document.querySelector('.btn-ok');
      document.querySelector('.backdrop').remove();
    }