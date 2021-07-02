const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const unique = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpmdW40NDg3QGdtYWlsLmNvbSIsImlhdCI6MTYyNTE4MjcxM30.zA8yOZAwYUd5BeyG7kivaZCY4PaMwKvxJ1Vup-DYOMQ";

localStorage.setItem("cookie", unique);

const token = localStorage.getItem("cookie");

const table = document.querySelector(".userinfo");


let info = [];

const admintable = (array) => {
  table.innerHTML = "";

  array.forEach((data) => {
    const { name,  email, contact} = data;

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

      })
      .catch((err) => {
        console.log(err);
      })
  }

  if (!token) {
    location.href = "../../index.html";
   }
