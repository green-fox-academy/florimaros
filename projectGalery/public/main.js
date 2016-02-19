"use strict";
var picturesList = [
  "img/red.jpg",
  "img/blue.jpg",
  "img/yellow.jpg",
  "img/orange.jpg",
  "img/kiwi.jpg",
];

var photoRoll = document.getElementById("photoRoll");
var currentImage = 0;
var mainPicture = document.getElementById("mainPicture");
var mainImg = document.createElement("img");
var buttonLeft = document.getElementById("leftButton");
var buttonRight = document.getElementById("rightButton");

for (var i = 0; i < picturesList.length; i++) {
  var img = document.createElement("img");
  img.classList.add("thumbnail");
  img.setAttribute("src", picturesList[i]);
  photoRoll.appendChild(img);
}
mainImg.setAttribute("src", picturesList[0]);
mainPicture.appendChild(mainImg);

rightButton.addEventListener("click", setNextImage);
leftButton.addEventListener("click", setPrevImage);
function setNextImage() {
  //megvizsgalja h az utolso elemen allunk-e, ha igen akkor visszaugrik a lista elejere
  if (currentImage!==picturesList.length-1) {
  //ha meg nem vagy a vegen menjel tovabb amugy menj vissza a lista elejere
    currentImage+=1;
  }
  else {
    currentImage=0;
  }
  mainImg.setAttribute("src", picturesList[currentImage]);
  //beallitja  a fo kepet
}

function setPrevImage() {
  if (currentImage!==0) {
    currentImage-=1;
  }
  else {
    currentImage=picturesList.length-1
  }
  mainImg.setAttribute("src", picturesList[currentImage]);
}

setInterval(setNextImage, 2000);
