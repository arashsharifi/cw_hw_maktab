const boxRed = document.querySelector("#box-red");
const boxForm = document.querySelector("#box-form");

const btnSign = document.querySelector("#sign-up");

btnSign.addEventListener("click", function () {
  boxRed.classList.add("swap-left");
  boxForm.classList.add("swap-right");
});
