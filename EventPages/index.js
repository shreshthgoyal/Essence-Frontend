particlesJS.load("particles-js", "particles.json");


var nav = document.getElementById("nav-scroll");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
      nav.style.display = "none";
    } else {
      nav.style.display = "initial";
    }
  }

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
  
  
    this.openEnvelope = function() {
      this.envelopeOpening.classList.toggle("open-envelope");
      this.envelopeMessage.classList.toggle("push-message");
      this.envelopeGlow.classList.toggle("envelope-glow");
      this.envelopeMessageArea.classList.toggle("envelope-msg-area-show");
    };
  
    this.showMessage = function() {
      this.displayMessage.classList.add("view-message");
      this.messageQuote.style.fontSize = "20px";
      this.messageAuthor.style.fontSize = "16px";
    };
  
    this.closeMessage = function() {
      this.displayMessage.classList.remove("view-message");
      this.messageQuote.style.fontSize = "0";
      this.messageAuthor.style.fontSize = "0";
    };

  }
  
  const envelope = new Envelope();


