const result = document.querySelector("#result");

function callbackRed(element) {
  console.log(element);
  element.style.backgroundColor = "red";
}

const callbackGreen = function (element) {
  console.log(element);
  element.style.backgroundColor = "green";
};

function creatElement(nameElement, callback) {
  const nameE = nameElement;
  const div = document.createElement(nameE);
  div.textContent = "hiii";

  result.appendChild(div);
  callback(div);
}

creatElement("div", callbackRed);
creatElement("div", callbackGreen);

// function elemCreator(elementType, callback) {
//   const element = document.createElement(elementType);
//   result.appendChild(element);
//   callback(element);
// }

// const callback1 = function (elem) {
//   elem.style.backgroundColor = "red";
// };

// elemCreator("div", callback1);
