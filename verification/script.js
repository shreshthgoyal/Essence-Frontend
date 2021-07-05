const apiUrl = "https://gentle-thicket-19334.herokuapp.com";
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
        if (data.error){
        Swal.fire({
            icon: 'warning',
            title: 'Warning!',
            text: `${data.error}`,
            confirmButtonText: `OK`,
            width: 600,
            padding: '3em',
            background: '#fff',
            backdrop: `
              rgba(0,0,123,0.4)
              url('https://media.tenor.com/images/69e6ff048ba5b05514ee8ce2e73c653d/tenor.gif')
              right
              no-repeat
            `
          })
          .then((result) => {
            location.href = "/RegisterLogin"
          })
        }
        
          else{
            Swal.fire({
                icon: 'success',
                title: 'Welcome to Essence!',
                text: `You have been verified!`,
                width: 600,
                padding: '3em',
                background: '#fff',
                backdrop: `
                rgba(0,0,123,0.4)
                url('https://media.tenor.com/images/69e6ff048ba5b05514ee8ce2e73c653d/tenor.gif')
                right
                no-repeat
              `
              })
          }
    })
    .catch((err) => {
        Swal.fire({
            icon: 'error',
            title: 'Warning!',
            text: `Error Verifying`,
          })
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
