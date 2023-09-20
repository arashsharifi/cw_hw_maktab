const form = document.querySelector("#from");
const email = document.querySelector("#email");
const submit_for = document.querySelector("#submit-for");
const email_aside = document.querySelector("#email-aside");

form.addEventListener("submit", controller);
submit_for.addEventListener("click", wellcome);

function generateTost(text, color) {
  Toastify({
    text: text,
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: color,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

function controller(e) {
  e.preventDefault();
  if (email.value.includes("@")) {
    generateTost(
      "Your email has been successfully registered",
      "linear-gradient(#2ecc71 , yellow)"
    );
  } else {
    generateTost("Your information was not sent", "linear-gradient(red , red)");
  }
}

function wellcome(e) {
  e.preventDefault();
  console.log(e.target.classList);
  if (e.target.classList.contains("bi")) {
    generateTost(
      "Your email: has been successfully registered",
      "linear-gradient(#2ecc71 , yellow)"
    );
    email_aside.value = "";
  }
}
