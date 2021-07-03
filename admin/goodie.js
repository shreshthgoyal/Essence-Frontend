const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const token = localStorage.getItem("cookie");

const table = document.querySelector(".goodieinfo");

let info = [];

const admintable = (array) => {
  table.innerHTML = "";

  array.forEach((data) => {
    const { user, goodie} = data;

    const row = document.createElement("tr");
  
    const insideHtml = `<td>${user}</td>
    <td>${goodie}</td>`;

    row.innerHTML = insideHtml;

    table.appendChild(row);
  });
};

admintable(info);

if (token) {
    fetch(`${apiUrl}/admin/goodies`,
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
        console.log(data)
        admintable(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  if (!token) {
    location.href = "../../index.html";
   }
