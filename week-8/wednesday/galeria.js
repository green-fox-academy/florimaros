"use strict";

//bepakoljuk vmi objektumba, szeretnem h bevegyen egy tombot es legyenek metodusai, egy currentimageindex valtozoja amit beallitok0-ra
//this images ala felveszem az images-t, szeretnek etodusokat amivel tovabb tudom leptetni, a thiscurrent image indexet szet++olja
//
function ImageStorage(images) {
  this.images = images;
  this.currentImageIndex = 0;

  this.next = function() {
    this.currentImageIndex =
    (this.currentImage + 1) % this.images.length:
  }

}

  this.getCurrentSrc = function () {
    return this.images(this.currentImageIndex)
  }
