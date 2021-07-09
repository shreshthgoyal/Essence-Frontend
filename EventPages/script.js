const regnButton = document.querySelector(".eventregn");

const body = document.querySelector("body");

const eventid = body.id;                                                             //storing the id of the event

const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const eventName = document.querySelector(".event_name").innerHTML;                  //getting the name of the event

const token = localStorage.getItem("cookie");                                       //acquiring token from local storage

const url = window.location.href;

if(token){
    fetch(`${apiUrl}/user/event`,                                                   //fetching the list of all events the user is registered in by making a GET request
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
        for(var i = 0; i < data.data.length; i++) {
            if(data.data[i].event === eventName){                                   //Checking if the user is already registered in the current event
                regnButton.innerHTML = "Unregister";                                //Changing the Register button to Unregister if the user has already registered
            }
        };
      })
      .catch((err) => {                                                             //Error handling
        console.log(err);
      });
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
        const status = res.status;                                                  //Storing the status sent by the backend
        res.json()
        .then((data) => {
        
        
        if (data.error){
            Swal.fire({
          icon: 'warning',
          title: 'Warning!',
          text: `${data.error}`,
          confirmButtonText: `OK`,
        })
        .then((result) => {
          location.href = "/RegisterLogin"                                          //Redirecting to Login page if the user is not logged in
        })
        }
        else{
            Swal.fire({
               icon: 'success',
               text: `${data.message}`,
             })
             
             if(route === "eventregn"){
                regnButton.innerHTML = "Unregister";                               //Changing the Register button to Unregister once the user is registered.
             }
             else{
                regnButton.innerHTML = "Register";                                 //And vice-versa
             }
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
        const route = "eventregn";
        const fetch_method = "POST";                                                //Registering the user to the event by making a POST request
        register_unregister(route, fetch_method);
    }

    else if (regnButton.innerHTML === "Unregister"){
        const route = "eventunregister";
        const fetch_method = "DELETE";                                              //Unregistering the user from the event by making a DELETE request
        register_unregister(route, fetch_method);
    }
    
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
