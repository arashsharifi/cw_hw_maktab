class User {
  constructor({
    homePhoneNumber,
    dateOfBirth,
    phoneNumber,
    lastName,
    firstName,
  }) {
    if (firstName) this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    if (homePhoneNumber) this.homePhoneNumber = homePhoneNumber;
    this.dateOfBirth = dateOfBirth;
  }
}

class SpecialUser extends User {
  constructor({
    homePhoneNumber,
    dateOfBirth,
    phoneNumber,
    lastName,
    firstName,
    email,
    address,
  }) {
    super(homePhoneNumber, dateOfBirth, phoneNumber, lastName, firstName);
    this.email = email;
    this.address = address;
  }
}

const users = [];
const form = document.querySelector("#form");
const specialUser = document.querySelector("#specialUser");
const extraFields = document.querySelector("#extraFields");

form.addEventListener("submit", saveUser);

specialUser.addEventListener("change" , ()=>{console.log("hi")})

function saveUser(e) {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(form).entries());
  if (formData.lastName && formData.phoneNumber && formData.dateOfBirth) {
    users.push(new User(formData));
  }
}
