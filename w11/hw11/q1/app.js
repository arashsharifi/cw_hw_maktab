class Shape {
  constructor(shapeName) {
    this._shapeName = shapeName;
  }

  get shapeName() {
    return this._shapeName;
  }

  set shapeName(shapeName) {
    this._shapeName = shapeName;
  }

  calcArea() {
    // To be implemented by subclasses
  }

  calcPerimeter() {
    // To be implemented by subclasses
  }
}

class Polygon extends Shape {
  constructor(shapeName, width, height) {
    super(shapeName);
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(width) {
    this._width = width;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    this._height = height;
  }

  calcArea() {
    return this._width * this._height;
  }

  calcPerimeter() {
    return 2 * (this._width + this._height);
  }
}

class NonPolygon extends Shape {
  constructor(shapeName, radius) {
    super(shapeName);
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  calcArea() {
    // To be implemented by subclasses
  }

  calcPerimeter() {
    // To be implemented by subclasses
  }
}

class Rectangle extends Polygon {
  constructor(width, height) {
    super("Rectangle", width, height);
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super("Square", sideLength, sideLength);
  }
}

class Circle extends NonPolygon {
  constructor(radius) {
    super("Circle", radius);
  }

  calcArea() {
    return Math.PI * this._radius * this._radius;
  }

  calcPerimeter() {
    return Math.PI * this._radius * 2;
  }
}

class Cylinder extends Circle {
  constructor(radius, height) {
    super(radius);
    this._height = height;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    this._height = height;
  }

  calcArea() {
    const circleArea = super.calcArea();
    const circlePerimeter = super.calcPerimeter();
    return 2 * circleArea + circlePerimeter * this._height;
  }

  calcVolume() {
    return super.calcArea() * this._height;
  }
}
const rectangle = new Rectangle(3, 9);
console.log(`regtanle area is :${rectangle.calcArea()}`);
console.log(`regtanle primeter is  :${rectangle.calcPerimeter()}`);
console.log(`regtanle shapNmae:  :${rectangle.shapeName}`);

console.log("+++++++++++++++");

const squer = new Square(5);
console.log(`squer area is :${squer.calcArea()}`);
console.log(`squer primeter is  :${squer.calcPerimeter()}`);
console.log(`squer shapNmae:  :${squer.shapeName}`);

console.log("+++++++++++++++");

const circle = new Circle(5);
console.log(`circle area is :${circle.calcArea()}`);
console.log(`circle primeter is  :${circle.calcPerimeter()}`);
console.log(`circle shapNmae:  :${circle.shapeName}`);
console.log("+++++++++++++++");
const lozi = new Cylinder(5, 7);
console.log(`lozi area is :${lozi.calcArea()}`);
console.log(`lozi primeter is  :${lozi.calcPerimeter()}`);
console.log(`lozi shapNmae:  :${lozi.shapeName}`);
