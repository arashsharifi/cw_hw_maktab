function addPropertyToObject(kyeValue, Value) {
  return function () {
    this[kyeValue] = Value;
    return this;
  };
}

let user = {};

const addUserProperty = addPropertyToObject("name", "John");

user = addUserProperty.call(user);

console.log(user); // Output: { name: 'John' }
