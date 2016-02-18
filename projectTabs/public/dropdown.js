'use strict';
var dropDownToggle = document.querySelector("#dropdownMenu1")
var dropdownMenu = document.querySelector(".dropdown-menu")
var dropdownMenu1 = document.querySelector("#menu1")
var dropdownMenu2 = document.querySelector("#menu2")
var dropdownMenu3 = document.querySelector("#menu3")
var dropdownMenu4 = document.querySelector("#menu4")

dropDownToggle.addEventListener("click", function () {

  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display="none"
  }
  else {
    dropdownMenu.style.display = "block"
  }
})

function setActiveContent(contentDiv) {
  document.querySelector(".activeContent").classList.remove("activeContent")
  contentDiv.classList.add("activeContent")
}

var menu1=document.getElementById("menu1");
var content1=document.getElementById("content1")
menu1.addEventListener("click", function() {
  setActiveContent(content1)
});
var menu2=document.getElementById("menu2")
var content2=document.getElementById("content2")
  menu2.addEventListener("click", function() {
  setActiveContent(content2)
  //alert("menu2");
});
var menu3=document.getElementById("menu3")
var content3=document.getElementById("content3")
  menu3.addEventListener("click", function() {
  setActiveContent(content3)
  //alert("menu3");
});
var menu4=document.getElementById("menu4")
var content4=document.getElementById("content4")
  menu4.addEventListener("click", function() {
  setActiveContent(content4)
  //alert("menu4");
});
