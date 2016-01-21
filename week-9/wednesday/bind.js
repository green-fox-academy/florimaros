

var animal = {
saying "wuff";
  say: functiom (other) {
    console.log(this.saying + "" + other)
  }
  sayMultiple: functiom(others) {
    others.forEach(function(other) {
      this.say(other);
    }).bind(this))
  }
}
animal.sayMultiple(["Tibi", "Kati"]);
