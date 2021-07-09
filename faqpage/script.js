const back = document.querySelector(".back");

back.addEventListener("click", () => {
  window.history.back();
});

// Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

//User panel

const navin = document.querySelector(".in");
const token = localStorage.getItem("cookie");  

if (token) {
  navin.innerHTML = `<i class="fas fa-user"></i>
  <span>Profile</span>`;
}

if (!token) {
  navin.innerHTML = `<i class="fas fa-user"></i>
  <span>Sign-in</span>`;
}
