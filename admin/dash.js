const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const token = localStorage.getItem("admin");                                //Acquiring token from local storage

const table = document.querySelector(".userinfo");
const count = document.querySelector(".count");


let info = [];

const admintable = (array) => {
  table.innerHTML = "";

  array.forEach((data) => {
    const { name,  email, contact, college} = data;

    const row = document.createElement("tr");
  
    const insideHtml = `<td>${name}</td>
    <td>${email}</td>
    <td>${contact}</td>`;

    row.innerHTML = insideHtml;

    table.appendChild(row);
  });
};

admintable(info);

if (token) {
    fetch(`${apiUrl}/admin/users`,                                                          //fetching all the user data by making a GET request
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        info = data.data;
        admintable(data.data);

       count.innerHTML=`Users registered to fest are <b>${info.length}</b>`;                //calculating the total number of users registered


      })
      .catch((err) => {
        alert("Error Occured")                                                                 //error handling
      })
  }

  const logout = document.getElementById("log");

logout.addEventListener("click",                                                            //log out by removing the admin cookie from local storage
 () => { localStorage.removeItem("admin")}
  )

  if (!token) {
    location.href = "../../index.html";                                                    
   }
