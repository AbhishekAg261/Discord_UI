const sidebar = document.querySelector("#side-bar");
const closebtn = document.querySelector("#close-btn");
const openbtn = document.querySelector("#open-btn");

openbtn.addEventListener("click", function () {
  sidebar.style.width = "288px";
});

closebtn.addEventListener("click", function () {
  sidebar.style.width = "0";
});


