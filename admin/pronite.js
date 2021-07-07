const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const token = localStorage.getItem("admin");
const count = document.querySelector(".count");

const table = document.querySelector(".proniteinfo");


let info = [];

const admintable = (array) => {
  table.innerHTML = "";

  array.forEach((data) => {
    const { user, pronite} = data;

    const row = document.createElement("tr");
  
    const insideHtml = `<td>${user}</td>
    <td>${pronite}</td>`;

    row.innerHTML = insideHtml;

    table.appendChild(row);
  });
};

const pronite = (array) => {                                                                   //Calculating the most popular pronite show
  if (array.length == 0) return null;
  var modeMap = {},
    maxCount = 1,
    modes = [];

  for (var i = 0; i < array.length; i++) {
    const {pronite} = array[i];
    var el = pronite;

    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;

    if (modeMap[el] > maxCount) {
      modes = [el];
      maxCount = modeMap[el];
    } else if (modeMap[el] == maxCount) {
      modes.push(el);
      maxCount = modeMap[el];
    }
  }
  return modes;
}

admintable(info);

if (token) {
    fetch(`${apiUrl}/admin/pronites`,                                                      //fetching all the pronites data by making a GET request
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
       count.innerHTML=`Most popular event is <b>${pronite(data.data)}</b>`;
        admintable(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const logout = document.getElementById("log");

logout.addEventListener("click",                                                                      //log out by removing the admin cookie from local storage
 () => { localStorage.removeItem("admin")}
  )

  if (!token) {
    location.href = "../../index.html";
   }
