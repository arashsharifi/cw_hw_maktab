const URL = "http://localhost:3000/";

let selectedDoctor = null; // to have the selected doctor globally in the code in order to patch times

const doctorsDiv = document.querySelector("#doctorsDiv");
const bookingForm = document.querySelector("#bookingForm");
const doctorName = document.querySelector("#doctor");
const timesOptions = document.querySelector("#select");
const form = document.querySelector("form");

document.addEventListener("DOMContentLoaded", init);
form.addEventListener("submit", reserveTime);

function init() {
  fetch(URL + "doctors")
    .then(res => {
      if (!res.ok) throw new Error("an error occured..."); // expected errors (400..., 500...) handling
      return res.json();
    })
    .then(data => renderDoctors(data))
    .catch(err => alert(err.message));
}

function renderDoctors(doctors) {
  doctors
    .filter(d => d.times.some(t => !t.patient_id))
    .forEach(doctor =>
      doctorsDiv.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
          <h2 class="card__heading">${doctor.name}</h2>
          <p class="card_expertise">${doctor.expertise}</p>
          <span class="card__phone">${doctor.phoneNumber}</span>
          <button class="card__button" data-id="${doctor.id}">MAKE AN APPOINTMENT</button>
        </div>`
      )
    );
}

// >>>> event delegation:
doctorsDiv.addEventListener("click", populateForm);

async function populateForm(e) {
  if (e.target.classList.contains("card__button")) {
    try {
      doctorsDiv.classList.add("hidden");
      bookingForm.classList.remove("hidden");

      const res = await fetch(URL + "doctors/" + e.target.dataset.id);
      if (!res.ok) throw new Error("an error occured..."); // expected errors (400..., 500...) handling
      selectedDoctor = await res.json();

      doctorName.value = selectedDoctor.name;
      selectedDoctor.times
        .filter(t => !t.patient_id) // to show only the available times in the options, not reserved times.
        .forEach(t =>
          timesOptions.insertAdjacentHTML(
            "beforeend",
            //                  👇 using t.date (=timestamp) as the value of option htmlElement.
            `<option value="${t.date}">
            ${new Date(t.date).toString()}
          </option>`
          )
        );
    } catch (err) {
      alert(err.message);
    }
  }
}

async function reserveTime(e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());

  if (data.email && data.fullName && data.time) {
    try {
      p_id = Date.now(); // to be used as patient_id in the below codes at two places:

      let res = await fetch(URL + "patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, id: p_id })
      });
      if (!res.ok) throw new Error("an error occured..."); // expected errors (400..., 500...) handling

      updatedTimesArray = selectedDoctor.times;
      updatedTimesArray.find(t => t.date == data.time).patient_id = p_id;
      //                👆 finding the chosen time object in the times array.

      res = await fetch(`${URL}doctors/${selectedDoctor.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ times: updatedTimesArray })
      });
      if (!res.ok) throw new Error("an error occured..."); // expected errors (400..., 500...) handling
    } catch (err) {
      alert(err.message);
    }
  } else {
    alert("plz fill out the fields.");
  }
}
