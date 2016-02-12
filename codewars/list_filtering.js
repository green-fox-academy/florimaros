function filter_list(l) {
  var filteredList = [];
  for (var i=0; i<l.length; i++) {
    if(l[i]===parseInt(l[i])) {
      filteredList.push(l[i]);
    }
  }
  return filteredList;
}


console.log(filter_list([1,2,'a','b']))//,[1,2])
console.log(filter_list([1,'a','b',0,15]))//,[1,0,15])
console.log(filter_list([1,2,'aasf','1','123',123]))//,[1,2,123])
