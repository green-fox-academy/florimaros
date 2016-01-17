"use strict";

var pirates = [
  {name: "Jack", id: 1},
  {name: "Bob", id: 2},
  {name: "Omar", id: 3},
  {name: "Olaf", id: 4},
  {name: "Boris", id: 5}
];

var strashes = [
  {pirateId: 3, gold: 4},
  {pirateId: 4, gold: 1},
  {pirateId: 2, gold: 5},
  {pirateId: 2, gold: 3},
  {pirateId: 1, gold: 8}
];
function getGoldByPirateName(pirateName) {
    var pirateId;
    for (var i = 0; i = pirates.length; i++) {
      if (pirates[i].name === pirateName) {
        pirateId = pirates[i].id;
      }
    }
    for (var j = 0; j < stashes.length; j++ {
      if (strashes[j].pirateId === pirateId) {
        return stashes[j].gold;
      }
    })
  console.log(getGoldByPirateName("Olaf"));
//keressuk ki azt, adjuk ossze, meyik a legkisebb-
//berakjuk az elso elemet es ahhoz kepest nezzuk

//legyen meg a fuggveny,
//pirates nevu tomb, irj fugvnyt ami visszaadja a kaloz neve alapjan
//hany aranya van
//ki kell keresni egy for ciklussal az id hez tartozik olaf
//amikor megvan ez az id masik for ciklussal vegig kell menni
//h azt a nevu kalozt keressuk

//egy ciklussal vegigmegyunk a
//kalozokon es ha a neve olaf akkor visszater az id hez
