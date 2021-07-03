const apiUrl = "https://gentle-thicket-19334.herokuapp.com";

const token = localStorage.getItem("cookie");

const count = document.querySelector(".count");
const table = document.querySelector(".eventinfo");


let info = [];

const admintable = (array) => {
  table.innerHTML = "";

  array.forEach((data) => {
    const { user, event} = data;

    const row = document.createElement("tr");
  
    const insideHtml = `<td>${user}</td>
    <td>${event}</td>`;

    row.innerHTML = insideHtml;

    table.appendChild(row);
  });
};

const event = (array) => {
  if (array.length == 0) return null;
  var modeMap = {},
    maxCount = 1,
    modes = [];

  for (var i = 0; i < array.length; i++) {
    const {event} = array[i];
    var el = event;

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
    fetch(`${apiUrl}/admin/events`,
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
       count.innerHTML=`Most popular event is <b>${event(data.data)}</b>`;
       admintable(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  if (!token) {
    location.href = "../../index.html";
   }
