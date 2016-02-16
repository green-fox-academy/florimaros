'use strict';
function setActiveMenu(menu) {
  document.querySelector(".active").classList.remove("active")
  //h tudjuk elerni egy html dolog elsogyereket?
  document.querySelector(".btn-danger").classList.remove("btn-danger")
  menu.firstElementChild.classList.add("btn-danger")
  menu.classList.add("active");
}

function setActiveContent(contentDiv) {
  document.querySelector(".activeContent").classList.remove("activeContent")
  contentDiv.classList.add("activeContent")
}

var menu1=document.getElementById("1");
var content1=document.getElementById("content1")
menu1.addEventListener("click", function() {
  setActiveMenu(menu1)
  setActiveContent(content2)
});
var menu2=document.getElementById("2")
var content2=document.getElementById("content2")
  menu2.addEventListener("click", function() {
  setActiveMenu(menu2)
  setActiveContent(content2)
  //alert("menu2");
});
var menu3=document.getElementById("3")
var content3=document.getElementById("content3")
  menu3.addEventListener("click", function() {
  setActiveMenu(menu3)
  setActiveContent(content3)
  //alert("menu3");
});
var menu4=document.getElementById("4")
var content4=document.getElementById("content4")
  menu4.addEventListener("click", function() {
  setActiveMenu(menu4)
  setActiveContent(content4)
  //alert("menu4");
});


//Click on tabsin list Backlog DescriptionEdit add a javascript file with <script> tags

//var element = document.querySelector('.first-tab');
//element.addEventListener('click', function() { .... });

//Please alert the name of the tab

//Tabs sitebuildin list Backlog DescriptionEdit The page should show 4 tabs in a row,
//the first one should be active (it should have a different color) Under the tabs it should show the content
