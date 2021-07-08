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

fetch(`${apiUrl}/user/verify/${token}`, {                                                           //verify the user by making a PUT request
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then((res) =>
        (res.json()))
    .then((data) => {
        if (data.error){
        Swal.fire({                                                                                     //display error if user not verified
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
            if(result.isConfirmed)                                                                                        
            location.href = "/RegisterLogin"
          })
        }
        
          else{
            Swal.fire({                                                                                                     //display success message if user verified
                icon: 'success',
                title: 'Welcome to Essence!',
                text: `You have been verified!`,
                confirmButtonText: `Your Profile`,
                showCancelButton: true,
                cancelButtonText: `Homepage`,
                cancelButtonColor: '#4169E1',
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
                if(result.isConfirmed)                                                                                        
                location.href = "/RegisterLogin"
    
                else
                location.href = "/"
              })
          }
    })
    .catch((err) => {                                                                                           //error handling
        Swal.fire({
            icon: 'error',
            title: 'Warning!',
            text: `Error Verifying`,
          })
    });

const button = document.querySelector(".button-text");

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("click");
    location.href = "/RegisterLogin/index.html"                                                                     //redirect user to login page
});


const closePopup = () =>{
    const btnOk = document.querySelector('.btn-ok');
      document.querySelector('.backdrop').remove();
    }
