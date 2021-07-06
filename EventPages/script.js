const registerButton = document.querySelector(".register-button");
const unregisterButton = document.querySelector(".unregister-button");
const body = document.querySelector("body");

const eventid = body.id;

const apiUrl = "https://gentle-thicket-19334.herokuapp.com";



const token = localStorage.getItem("cookie");

const url = window.location.href;


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
        else{
            location.href = url;
        }
        })
    });
};

registerButton.addEventListener("click",(event) => {
    event.preventDefault();
    const route = "eventregn";
    const fetch_method = "POST";

    register_unregister(route, fetch_method);
    

    
});

unregisterButton.addEventListener("click",(event) => {
    event.preventDefault();

    const route = "eventunregister";
    const fetch_method = "DELETE";

    register_unregister(route, fetch_method);

});
