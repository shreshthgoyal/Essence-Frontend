const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const admin = document.querySelector(".btn");

admin.addEventListener("click", (event) => {

  event.preventDefault();

  const signInEmail = document.querySelector(".mail");                        
  const signInPassword = document.querySelector(".pass");

  const email = signInEmail.value;                                                      //getting the email and password entered by the user in the corresponding fields
  const password = signInPassword.value;

  fetch(`${apiUrl}/admin/login`, {
    method: "POST",                                                                     //sending a POST request for admin login
    crossDomain: true,
    xhrFields: {
       withCredentials: true
               },
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),                                //sending the email and password in the body of the request
  }) 
    .then((res) => res.json())
    .then((data) => {
      const token = data.token;
  
      if (data.error)
      {Swal.fire({
        icon: 'warning',
        title: 'Warning!',
        text: `${data.error}`,
      })
      }
     
      else if(token)
      {
      localStorage.setItem("admin", token);                                                 //setting the token received as admin cookie in local storage
      Swal.fire({
        icon: 'success',
        title: `${data.message}`,
      })
      location.href = "https://essencefest.netlify.app/admin/dashboard";
      }

    })
    .catch((err) => {                                                                         //error handling
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: `Error Signing In`,
      })
    });
});

