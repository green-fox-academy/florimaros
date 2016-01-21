'use strict';

var pirates = [
  {name: 'Jack', id: 1},
  {name: 'Bob', id: 2},
  {name: 'Omar', id: 3},
  {name: 'Olaf', id: 4},
  {name: 'Boris', id: 5}
];

var stashes = [
  {pirateId: 3, gold:4},
  {pirateId: 4, gold:1},
  {pirateId: 2, gold:5},
  {pirateId: 5, gold:3},
  {pirateId: 1, gold:8},
];


function getGoldByPirateName(name) {
  var id = 0;
  var gold = 0;
  for (var i= 0; i<pirates.length; i++) {
    if (name === pirates[i].name) {
      id = pirates[i].id;
    }}
  for (var i=0; i<stashes.length; i++)  {
    if (id ===  stashes[i].pirateId)  {
      gold = stashes[i].gold;
    }
  }  return gold;
}
console.log(getGoldByPirateName("Jack"));
