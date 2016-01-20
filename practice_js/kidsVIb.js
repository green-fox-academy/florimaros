//male female listakat vesz at es viszaadja a nemekhez tartozo neveket a listaba
"use strict"
var kids = [
  {name: 'Julika', age: 8, sex: 'female'},
  {name: 'Tiborka', age: 7, sex: 'male'},
  {name: 'Zsolti', age: 6, sex: 'male'},
  {name: 'Gerda', age: 9, sex: 'female'},
  {name: 'Zsomborka', age: 8, sex: 'male'}
];

function  countBySex(kids) {
  var output = {female: 0, male: 0};
    kids.forEach(function(kid)  {
      if(kid.sex === "female")  {
        output["female"]++;
      }
      else  {
        output["male"]++;
      }
    });
    return output;

//objektummal ter vissza, vegul female2 male 3 lesz, 0 0-val kezdek,
//v egyiket v asikat talalok benne azt kezdem szamolni

//objektuomt varok a fuggvenytol ami megmondja h m bol es f bol hany db van
//ha egyiket talaltuk egyiket noveljuk ha a masikat akkor a masikat
//vegigmenni az objekteken es kivenni a sex-eket belole
//felbontani kiseb feladatokra, nekialni
console.log(countBySex(kids));
