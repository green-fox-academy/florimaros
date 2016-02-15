'use strict';
var content = document.getElementById("content");
content.innerHTML = "<p>az elso menut valasztotta</p>";
document.getElementById("1").addEventListener("click", function() {
  document.querySelector(".active").classList.remove("active")
  document.getElementById("1").classList.add("active");
  content.innerHTML = "<p>az elso menut valasztotta</p>";
  //alert("menu1");
});
document.getElementById("2").addEventListener("click", function() {
  document.querySelector(".active").classList.remove("active")
  document.getElementById("2").classList.add("active");
  content.innerHTML = "<p>a masodik menut valasztotta</p>";
  //alert("menu2");
});
document.getElementById("3").addEventListener("click", function() {
  document.querySelector(".active").classList.remove("active")
  document.getElementById("3").classList.add("active");
  content.innerHTML = "<p>a harmadik menut valasztotta</p>";
  //alert("menu3");
});
document.getElementById("4").addEventListener("click", function() {
  document.querySelector(".active").classList.remove("active")
  document.getElementById("4").classList.add("active");
  content.innerHTML = "<p>a negyedik menut valasztotta</p>";
  //alert("menu4");
});


//Click on tabsin list Backlog DescriptionEdit add a javascript file with <script> tags

//var element = document.querySelector('.first-tab');
//element.addEventListener('click', function() { .... });

//Please alert the name of the tab

//Tabs sitebuildin list Backlog DescriptionEdit The page should show 4 tabs in a row,
//the first one should be active (it should have a different color) Under the tabs it should show the content
