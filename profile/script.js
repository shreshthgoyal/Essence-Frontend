const div = document.querySelector(".div");
const apiUrl = "https://gentle-thicket-19334.herokuapp.com";
const list = document.getElementById("myPopup1");
const token = localStorage.getItem("cookie");
const e = document.querySelector(".e");
const p = document.querySelector(".p");
const g = document.querySelector(".g");
const logoutButton = document.querySelector(".logout-button");
let back = document.querySelector(".back");

back.addEventListener("click", () => {
  console.log("Ds");
  location.href = "../";
});

const dashboard = (array) => {
  div.innerHTML = "";

  array.forEach((info) => {
    const { name, college, contact } = info;

    const profile = document.createElement("section");
    profile.classList.add("profile-info");

    const insideHtml = ` <h1 class="first-name"> ${name} </h1> 
      <p>Welcome to Essence, This is your dashboard. Here at Essence our users matters us the most!💙</p>
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
  if (array.length === 0)
    e.innerHTML = `<a href="https://essencefest.netlify.app/#timeline_anchor" class="btn">Register to Events</a>`;

  array.forEach((info) => {
    const { event } = info; //adding all the events the user has registered in to the list

    const insideHtml = `${event}<br>`;
    list.innerHTML += insideHtml;
  });
};

const goodies = (array) => {
  if (array.length === 0)
    g.innerHTML = `<a href="../goodies" class="btn">Buy some Goodies</a>`;
  const list = document.getElementById("myPopup2");
  array.forEach((info) => {
    const { goodie } = info;
    const insideHtml = `${goodie}<br>`; //adding all the goodies the user has bought to the list
    list.innerHTML += insideHtml;
  });
};

const pronite = (array) => {
  if (array.length === 0)
    p.innerHTML = `<a href="https://essencefest.netlify.app/#pronites_anchor" class="btn">Register to Pronites</a>`;
  const list = document.getElementById("myPopup3");
  array.forEach((info) => {
    const { pronite } = info;
    const insideHtml = `${pronite}<br>`; //adding all the pronites the user has registered in to the list
    list.innerHTML += insideHtml;
  });
};

if (token) {
  fetch(
    `${apiUrl}/user/dashboard`, //fetching all the data about the user by making a GET request
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      credentials: "same-origin",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const user = data.data;
      dashboard(user);
    })
    .catch((err) => {
      console.log(err)
      alert("Error Occured");
    });

  fetch(
    `${apiUrl}/user/event`, //fetching the list of events the user is registered in by making a GET request
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      credentials: "same-origin",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      event(data.data);
    })
    .catch((err) => {
      alert("Error Occured");
    });
  fetch(
    `${apiUrl}/user/goodies`, //fetching the list of goodies the user has bought by making a GET request
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      credentials: "same-origin",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      goodies(data.data);
    })
    .catch((err) => {
      alert("Error Occured");
    });
  fetch(
    `${apiUrl}/user/pronite`, //fetching the list of pronite shows the user is registered in by making a GET request
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      credentials: "same-origin",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      pronite(data.data);
    })
    .catch((err) => {
      alert("Error Occured");
    });
}

if (!token) {
  location.href = "/RegisterLogin"; //redirect to login page if there is no token, that is if user is not logged in
}

//functions to display the events, goodies and pronites list when clicked

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

logoutButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("cookie"); //log out by removing cookie from local storage
  location.href = "../";
});
