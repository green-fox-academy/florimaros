'use strict';

var fs = require("fs");
//a read file-t meg kell hivni, az meghivja a call back-jet, ott mar nem csak string-e valtoztatnank, hanem megszaolnank benne a p betuket
function countLetterP(callback) {
  fs.readFile("alma.txt", function(err, content) {
    var count = 0;
    var stringContent = String(content);
    for (var i = 0; i < stringContent.length; i++) {
      if (stringContent [i] === "p") {
        count ++;
      }
    }
    callback(count);
//egy stringen for ciklussal megyunk vegig amig i kisebb mint a string content nek a lenght je addig noveljuk az i-t
//kell vmi aiben szamoljuk var count egyenlo 0 ha a string content i edike leme egyenlo t akkor a count novelodjon meg
  });
}

countLetterP( function (count) {
  console.log(count);
});
// in alma.txt
