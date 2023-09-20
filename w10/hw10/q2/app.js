const form = document.querySelector("#form");
const submitBtn = document.querySelector("#btn");

const inputKg = document.querySelector("#inputKg");
const inputCm = document.querySelector("#inputCm");
const result = document.querySelector("#result");

submitBtn.addEventListener("click", calu);

function calu() {
  const kg = Number(inputKg.value);
  const m = inputCm.value / 100;
  const calculations = Math.floor(kg / (m * m));
  console.log(calculations);
  const div = document.createElement("div");

  if (calculations <= 17) {
    result.innerHTML = "";
    div.innerHTML = `
    <div class="alert alert-dark fs-5" role="alert">
    Your BMI is ${calculations} which means You are Severely underweight
     </div>
     `;
    result.appendChild(div);
  } else if (calculations >= 17 && calculations <= 18.5) {
    result.innerHTML = "";
    div.innerHTML = `
    <div class="alert alert-warning fs-5" role="alert">
    Your BMI is ${calculations} which means You are Underweight
     </div>
     `;
    result.appendChild(div);
  } else if (calculations >= 18.5 && calculations <= 25) {
    result.innerHTML = "";
    div.innerHTML = `
    <div class="alert alert-info fs-5" role="alert">
    Your BMI is ${calculations} which means You are normal
     </div>
     `;
    result.appendChild(div);
  } else if (calculations >= 25 && calculations <= 30) {
    result.innerHTML = "";
    div.innerHTML = `
    <div class="alert alert-warning fs-5" role="alert">
    Your BMI is ${calculations} which means You are Overweight
     </div>
     `;
    result.appendChild(div);
  } else if (calculations >= 30 && calculations <= 35) {
    result.innerHTML = "";
    div.innerHTML = `
    <div class="alert alert-danger fs-5" role="alert">
    Your BMI is ${calculations} which means You are Class 1 obesity
     </div>
     `;
    result.appendChild(div);
  } else if (calculations >= 35 && calculations <= 40) {
    result.innerHTML = "";
    div.innerHTML = `
    <div class="alert alert-danger fs-5" role="alert">
    Your BMI is ${calculations} which means You are Class 2 obesity
     </div>
     `;
    result.appendChild(div);
  } else if (calculations >= 40 && calculations <= 45) {
    result.innerHTML = "";
    div.innerHTML = `
    <div class="alert alert-danger fs-5" role="alert">
    Your BMI is ${calculations} which means You are Class 3 obesity
     </div>
     `;
    result.appendChild(div);
  } else {
    result.innerHTML = "";
    div.innerHTML = `
    <div class="alert alert-danger fs-5" role="alert">
       error!!!!!!
     </div>
     `;
    result.appendChild(div);
  }
}

// Your BMI is 26.7 which means You are Overweight
