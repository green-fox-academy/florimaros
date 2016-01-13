"use strict";

//bepakoljuk vmi objektumba, szeretnem h bevegyen egy tombot es legyenek metodusai, egy currentimageindex valtozoja amit beallitok0-ra
//this images ala felveszem az images-t, szeretnek etodusokat amivel tovabb tudom leptetni, a thiscurrent image indexet szet++olja
//
var ImageStorage = new ImageStorage(images);

var mainImage, nextButton, prevButton;

function Gallery(images) {
  this.ImageStorage = new ImageStorage
}

function initDom() {
  mainImage = document.querySelector(".main-image");


}
