var l = ["p","z","t","h","o","n"];
l[1] = "y";
var str = "";
for (var i = 0; i < l.length; i++) {
  str += l[i]
}
//honnan induljon,meddig menjen,menjen vegig a
//listan es adja hozza az str valtozohoz
console.log(str);

var fstr = "";
l.forEach(function(e) {
  fstr += e
})
//for eachet minden iteralhoto dolgon meg lehet hivni
//egy metodust var ait az osszes muveletre egcsinalja
//egesz listat lehet megadni
//for each func zarojelben az elso mindig az elem
//masodik az index, harmadik meg a teljes lista
console.log(fstr);
