const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const token = localStorage.getItem("cookie");

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
    fetch(`${apiUrl}/admin/users`,
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

       count.innerHTML=`Users registered to fest is <b>${info.length}</b>`;


      })
      .catch((err) => {
        console.log(err);
      })
  }

  if (!token) {
    location.href = "../../index.html";
   }
