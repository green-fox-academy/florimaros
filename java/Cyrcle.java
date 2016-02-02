class Cyrcle {
  public static void main(String[] args) {

    //make it biiger by 10
    int []numbers = new int[]{4, 5, 6, 7, 8, 9, 10};


   System.out.println (summa(numbers));


  }

  public static int summa(int[] num_list) {
    int s = 0;
    for(int i = 0; i<num_list.length; i++) {
      s += num_list[i];
    }
    return s;
  }
}

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getCircumference = function() {
  return this.radius * Math.PI * 2;
};

Circle.prototype.getArea = function() {
  return this.radius * this.radius * Math.PI;
}

Circle.prototype.toString = function() {
  return 'Radius: ' + this.radius +
    ', Circumference: ' + this.getCircumference() +
    ', Area: ' + this.getArea();
}

var circle = new Circle(4);
console.log(circle.getCircumference());
console.log(circle.getArea());
console.log(circle.toString());
