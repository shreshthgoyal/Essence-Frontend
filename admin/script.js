const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const admin = document.querySelector(".btn");

admin.addEventListener("click", (event) => {

  event.preventDefault();

  const signInEmail = document.querySelector(".mail");
  const signInPassword = document.querySelector(".pass");

  const email = signInEmail.value;
  const password = signInPassword.value;

  fetch(`${apiUrl}/admin/login`, {
    method: "POST",
    crossDomain: true,
    xhrFields: {
       withCredentials: true
               },
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }) 
    .then((res) => res.json())
    .then((data) => {
      console.log(data)

      const token = data.token;
  
      if (data.error)
      alert(data.error);
     
      else if(token)
      {
      localStorage.setItem("cookie", token);
      alert(data.message);
      location.href = "https://essencefest.netlify.app/admin/dashboard";
      }

    })
    .catch((err) => {
      alert("Error Signing In");
      console.log(err);
    });
});

