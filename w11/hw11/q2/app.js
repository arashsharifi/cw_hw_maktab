class Rectangle {
  constructor(width, height) {
    this._width = width;

    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  calculateArea() {
    return this._width * this._height;
  }

  calculatePerimeter() {
    return 2 * (this._width + this._height);
  }
}

class Squer extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
}

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
  }

  calculateArea() {
    const num = Math.PI * this._radius * this._radius;
    return num.toFixed(2);
  }

  calculatePerimeter() {
    const num = Math.PI * this._radius * 2;
    return num.toFixed(2);
  }
}

class Cylinder extends Circle {
  constructor(radius, height) {
    super(radius);
    this.height = height;
  }
  calcArea() {
    const circleArea = super.calculateArea();
    const circlePerimeter = super.calculatePerimeter();
    return 2 * circleArea + circlePerimeter * this._height;
  }

  calcVolume() {
    return super.calculateArea() * this._height;
  }
}

const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const rediusL = document.querySelector("#Radius");
const widthL = document.querySelector("#Width");
const heigthL = document.querySelector("#Heigth");

const rediusBox = document.querySelector("#redius-box");
const widthBox = document.querySelector("#width-box");
const heigthBox = document.querySelector("#heigth-box");
const selectoption = document.querySelector("#select");
const checkSecelted = document.querySelector("#checkSecelted");
const result = document.querySelector("#result");

checkSecelted.addEventListener("click", function () {
  if (selectoption.value === "1") {
    widthBox.classList.add("d-none");
    heigthBox.classList.add("d-none");
  } else if (selectoption.value === "2") {
    rediusBox.classList.add("d-none");
    heigthBox.classList.add("d-none");
  } else if (selectoption.value === "3") {
    rediusBox.classList.add("d-none");
  } else if (selectoption.value === "4") {
    widthBox.classList.add("d-none");
  }
});
form.addEventListener("submit", init);

function init(e) {
  e.preventDefault();
  result.innerHTML = "";
  if (selectoption.value === "3") {
    const regtangl = new Rectangle(widthL.value, heigthL.value);
    const div = document.createElement("div");
    div.innerHTML = `area :${regtangl.calculateArea()} and primiter:${regtangl.calculatePerimeter()}`;
    result.appendChild(div);
  } else if (selectoption.value === "2") {
    const squer = new Squer(widthL.value);
    const div = document.createElement("div");
    div.innerHTML = `area :${squer.calculateArea()} and primiter:${squer.calculatePerimeter()}`;
    result.appendChild(div);
  } else if (selectoption.value === "1") {
    const circle = new Circle(rediusL.value);
    const div = document.createElement("div");
    div.innerHTML = `area :${circle.calculateArea()} and primiter:${circle.calculatePerimeter()}`;
    result.appendChild(div);
  } else if (selectoption.value === "4") {
    const cylinder = new Cylinder();
    const div = document.createElement("div");
    div.innerHTML = `area :${cylinder.calculateArea()} and primiter:${cylinder.calculatePerimeter()}`;
    result.appendChild(div);
  }
}
