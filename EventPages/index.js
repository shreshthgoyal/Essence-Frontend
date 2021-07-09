var nav = document.getElementById("nav-scroll");
const back = document.querySelector(".back");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 20) {
    nav.style.display = "none";
  } else {
    nav.style.display = "initial";
  }
};

back.addEventListener("click", ()=>{                                                        //takes the user to the previous location
  location.href = "../";
})

function Envelope() {
  this.envelopeBack = document.querySelector(".envelope-back");
  this.envelopeOpening = document.querySelector(".envelope-opening");
  this.envelopeFront = document.querySelector(".envelope-front");
  this.envelopeMessage = document.querySelector(".envelope-message");
  this.envelopeGlow = document.querySelector(".envelope-shadow");
  this.displayMessage = document.querySelector(".display-message");
  this.envelopeMessageArea = document.querySelector(".envelope-message-area");
  this.smallQuote = document.querySelector(".small-quote");
  this.messageQuote = document.querySelector(".quote");
  this.messageAuthor = document.querySelector(".author");

  this.openEnvelope = function () {                                                                           //function to trigger the envelope opening animation
    this.envelopeOpening.classList.toggle("open-envelope");
    this.envelopeMessage.classList.toggle("push-message");
    this.envelopeGlow.classList.toggle("envelope-glow");
    this.envelopeMessageArea.classList.toggle("envelope-msg-area-show");
  };

  this.showMessage = function () {                                                                            //function to trigger the animation when user wants to read the message
    this.displayMessage.classList.add("view-message");
    this.messageQuote.style.fontSize = "20px";
    this.messageAuthor.style.fontSize = "16px";
  };

  this.closeMessage = function () {                                                                           //function to close the message
    this.displayMessage.classList.remove("view-message");
    this.messageQuote.style.fontSize = "0";
    this.messageAuthor.style.fontSize = "0";
  };
}

const envelope = new Envelope();


