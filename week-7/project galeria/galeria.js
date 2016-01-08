"use strict";
var list=[
  "galery1.jpg",
  "galery2.jpg",
  "galery3.jpg",
  "galery4.jpg",
  "galery5.jpg",
  "galery6.jpg",
  "galery7.jpg"
];
var prevbutton = document.querySelector(".prev")
var nextbutton = document.querySelector(".next")
var picture = document.querySelector(".picture");
var i = 0
prevbutton.addEventListener("click", function() {
  i = i - 1;
  if (i > 0 && i < list.length-1) {
    picture.setAttribute("src", list[i])
  }
  else {
    i = list.length - 1
    picture.setAttribute("src", list[i])
  }


});

nextbutton.addEventListener("click", function() {
  i = i + 1;
  if (i > 0 && i < list.length) {
    picture.setAttribute("src", list[i])
  }

  else {
    i = 0
    picture.setAttribute("src", list[i])
  }

});
