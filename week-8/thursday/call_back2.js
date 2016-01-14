'use strict';

function runIn5Seconds(callback) {
  setTimeout(callback, 5000);
}
//van egy f def h ruunn in sec ide visszater ha eljon
//legyen benne a function elobb, utanna talaljuk ki a lelki vilagat
//hany parameteru a f - gy, mivel 1 dolgot vesz be
//var egy fuggvenyt es egy szamot
//
//ez a f most csak egy ertek, visszater es a call back helyere behelyettesiti
runIn5Seconds(function() {
  console.log("jee");
});
