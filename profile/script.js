const div = document.querySelector(".div");
const apiUrl = "https://gentle-thicket-19334.herokuapp.com";


const list = document.getElementById("myPopup1")
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

const event = (array) => {

  array.forEach((info) => {
    const { event } = info;

    const insideHtml = `${event}<br>`;

    list.innerHTML += insideHtml;
  });
};


const goodies = (array) => {
  const list = document.getElementById("myPopup2")
  array.forEach((info) => {
    const { goodie } = info;
    const insideHtml = `${goodie}<br>`;
    list.innerHTML += insideHtml;
  });
};

const pronite = (array) => {
  const list = document.getElementById("myPopup3")
  array.forEach((info) => {
    const { pronite } = info;
    const insideHtml = `${pronite}<br>`;
    list.innerHTML += insideHtml;
  });
};


if (token) {
  fetch(`${apiUrl}/user/dashboard`,
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
      const user = data.data;
      dashboard(user);
    })
    .catch((err) => {
      console.log(err)
    })

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
      event(data.data);
    })
    .catch((err) => {
      console.log(err)
    })
  fetch(`${apiUrl}/user/goodies`,
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
      goodies(data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  fetch(`${apiUrl}/user/pronite`,
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
      pronite(data.data)
    })
    .catch((err) => {
      console.log(err)
    })


}

if (!token) {
  location.href = "https://essencefest.netlify.app/";
  alert("Please sign in first");
}

function myFunction1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}
function myFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}
function myFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}
