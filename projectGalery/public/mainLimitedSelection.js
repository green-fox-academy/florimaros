"use strict";
var picturesList = [
  "img/kengyelfutoGyalogkakukk1.jpg",
  "img/kengyelfutoGyalogkakukk2.jpg",
  "img/kengyelfutoGyalogkakukk3.jpg",
  "img/kengyelfutoGyalogkakukk4.jpg",
  "img/kengyelfutoGyalogkakukk5.jpg",
  "img/kengyelfutoGyalogkakukk6.jpg",
  "img/kengyelfutoGyalogkakukk7.jpg"
];
//eltaroljuk egy listaban a kepek eleresi utvonalat
var photoRoll = document.getElementById("photoRoll");
//photoroll azonositoju dom elemet erjuk el
var currentImage = 0;
//indexelesre hasznaljuk h szamontartsuk melyik a jelenleg megjelenitendo kep
var mainPicture = document.getElementById("mainPicture");
//mainpicture azonositoju dom elemet erjuk el ez a valtozo alatt
var mainImg = document.createElement("img");
//letrohozzuk a fo kepet
var buttonLeft = document.getElementById("leftButton");
//kivalasztja a left button azonositoju dom elemet
var buttonRight = document.getElementById("rightButton");
//kivalasztja a right button azonositoju dom elemet
for (var i = 0; i < picturesList.length; i++) {
//kirajzolja a kis kepeket az egesz ciklus
  var img = document.createElement("img");
  //letrehoz egy kepet
  img.classList.add("thumbnail");
  //erre a kepre rarakja a thumbnail osztalyt
  img.setAttribute("src", picturesList[i]);
  //beallitja a kepnek az src attributumat a pictures ist iedik elemere,
  //ez hatarozza meg melyik kepet jelenitse meg
  photoRoll.appendChild(img);
  //a photoRoll vegere fuzi az img elemet
}
mainImg.setAttribute("src", picturesList[0]);
//beallitja a fo kepnek az eleresi utvonalat a picturesList elso elemere
mainPicture.appendChild(mainImg);
//a main picturehoz fuzi hozza a main image elemet
rightButton.addEventListener("click", function () {
  //a right buttonra egy esemenyfigyelot teszunk ami a kattintast figyeli
  if (currentImage!==picturesList.length -1) {
//megvizsgalja h meg nem vagyunk a lista vegen, ha nem vagyunk a lista vegen akkor megtortenik:
    currentImage += 1;
//megnoveli a mi altalunk indexkent nevezett dolgot 1-el, tovabblepteti a kov kep indexere
    mainImg.setAttribute("src", picturesList[currentImage]);
//beallitja a current image indexu kepet a fo kepre
  }
})
leftButton.addEventListener("click", function () {
//esemenyfigyelo a bal gombra, kattintast figyel
  if (currentImage!==0) {
//ha nem vagyunk meg a lista legelejen akkor megtortennek az alabbi dolgok
    currentImage -= 1;
//egyel balrabb leptetjuk a kepeinket
    mainImg.setAttribute("src", picturesList[currentImage]);
//bealitja a current indexediku elemet fo kepkent
  }
})
