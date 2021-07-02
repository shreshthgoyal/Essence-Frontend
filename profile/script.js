const div = document.querySelector(".div");
const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const token = localStorage.getItem("cookie");

const dashboard = (array) => {
    div.innerHTML = "";
    
    array.forEach((info) => {
      const { name, college, contact } = info;
  
      const profile = document.createElement("section");
      profile.classList.add("profile-info");
 
      const insideHtml = ` <h1 class="first-name"> ${name} </h1> 
      <p>Welcome to Essence, This is your dashboard. Here at Essence our users matters us the most!💜</p>
      <h2>Information</h2>
     <p>
          College : ${college}
          <br>
          Contact : ${contact}
          <br>
      </p>`;
  
      profile.innerHTML = insideHtml;
  
      div.appendChild(profile);
    });
  };

  if(token){
fetch(`${apiUrl}/user/dashboard`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("cookies")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const user = data[0].data;
        dashboard(user);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    else
    {
      location.href = "https://essencefest.netlify.app/";
      alert("Please sign in first");
    }
