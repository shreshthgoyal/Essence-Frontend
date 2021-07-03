const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const token = localStorage.getItem("cookie");
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

const pronite = (array) => {
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
    fetch(`${apiUrl}/admin/pronites`,
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

logout.addEventListener("click", 
 () => { localStorage.removeItem("cookie")}
  )

  if (!token) {
    location.href = "../../index.html";
   }
