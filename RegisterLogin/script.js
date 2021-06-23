
const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
      nav.style.display = "none";
    } else {
      nav.style.display = "initial";
    }
  }