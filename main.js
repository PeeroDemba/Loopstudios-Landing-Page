"use strict";

const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const dropdown = document.getElementById("dropdown");
const main = document.getElementsByTagName("main")[0];
const section = document.getElementsByTagName("section")[0];
const footer = document.getElementsByTagName("footer")[0];
const att = document.getElementsByClassName("attribution")[0];

function opener() {
  dropdown.className = "show";
  main.style.display = "none";
  section.style.display = "none";
  footer.style.display = "none";
  att.style.display = "none";
}

function closer() {
  dropdown.className = "hide";
  main.style.display = "block";
  section.style.display = "block";
  footer.style.display = "grid";
  att.style.display = "block";
}

hamburger.addEventListener("click", opener);
close.addEventListener("click", closer);

let mq = window.matchMedia("(max-width: 767px)");

window.addEventListener("resize", function () {
  if (!mq.matches && dropdown.className == "show") {
    main.style.display = "block";
    section.style.display = "block";
    footer.style.display = "grid";
    dropdown.className = "hide";
  }
});
