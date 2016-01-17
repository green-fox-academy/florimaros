function Pirate() {
  this.drunkness = 0;
  this.drink_rum = function() {
    this.drunkness ++;
  }
  this.hows_goin_mate = function () {
    if (this.drunkness >= 5)
      {return "arrr"}
    else {
      return "nothin"
    }
  }
}
var peti = new Pirate ()
peti.drink_rum ()
console.log (peti.hows_goin_mate());
