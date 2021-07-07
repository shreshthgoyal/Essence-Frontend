const regnButton = document.querySelector(".eventregn");

const body = document.querySelector("body");

const eventid = body.id;

const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const eventName = document.querySelector(".event_name").innerHTML;

const token = localStorage.getItem("cookie");

const url = window.location.href;

if (token) {
    fetch(`${apiUrl}/user/event`,
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
        
        (data.data).forEach(element => {
            if(element.event === eventName){
                regnButton.innerHTML = "Unregister";
            }
        });
      })
      .catch((err) => {
        console.log(err)
      })
  }

const register_unregister = (route, fetch_method) => {
    fetch(`${apiUrl}/events/${route}/${eventid}`, {
        method: `${fetch_method}`,
        crossDomain: true,
        xhrFields: {
            withCredentials: true
               },
        headers: {
            "Content-Type": "application/json",
            "Authorization" : token
        },
    })
    .then((res) => {
        const status = res.status;
        res.json()
        .then((data) => {
        
        
        if (data.error){
            Swal.fire({
                icon: 'warning',
                title: 'Warning!',
                text: `${data.error}`,
              })
        }
        else{
            Swal.fire({
               icon: 'success',
               text: `${data.message}`,
             })    
        }
        
        if(status === 401){
            location.href = "../RegisterLogin/";
        }
        })
    });
};

regnButton.addEventListener("click",(event) => {
    event.preventDefault();

    if(regnButton.innerHTML === "Register"){
        console.log("Registering");
        const route = "eventregn";
        const fetch_method = "POST";
        regnButton.innerHTML = "Unregister";
        register_unregister(route, fetch_method);
    }

    else if (regnButton.innerHTML === "Unregister"){
        console.log("Unregistering");
        const route = "eventunregister";
        const fetch_method = "DELETE";
        regnButton.innerHTML = "Register";
        register_unregister(route, fetch_method);
    }
    
});


