function counterMaker() {
  let counter = 0;

  return function (value) {
    if (value) {
      counter += value;
    }

    return counter;
  };
}

const counter = counterMaker();
console.log(counter(1));
console.log(counter());
console.log(counter());
console.log(counter(4));
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
