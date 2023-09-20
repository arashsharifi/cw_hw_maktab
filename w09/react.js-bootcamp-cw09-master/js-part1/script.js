// Q1
function myRound(num) {
   const [intPart, floatPart] = String(num).split(".");

   if (num >= 0) {
      if (!floatPart || floatPart[0] < 5) return +intPart;
      return +intPart + 1;
   } else {
      if (!floatPart || floatPart[0] < 5) return +intPart;
      return +intPart - 1;
   }
}

console.log(myRound(-100.8));

// //////////////////////////////////////////////
// 2- Create a Date : Write a Javascript function that creates a Date object for a
// given year, month, and day.

function myDate(year, month, day) {
   return new Date(year, month - 1, day); // month is zero-based in Date object.
}

console.log(myDate(2022, 2, 20));

// 3- Calculate Days Between Two Dates: write a Javascript function that
// calculates the number of days between two given dates

function calcDaysBetween(date1, date2) {
   const day1 = new Date(date1).getTime();
   const day2 = new Date(date2).getTime();
   let between = Math.abs(day2 - day1);
   return between / (1000 * 3600 * 24);
}

console.log(calcDaysBetween("2018-03-12", "2019-03-12"));

// 4-Localized Date and Time Display: Write a Javascript function that takes a
// date , a time, and a locale, and formats them for display using
// internationalization.

function changeToLocalized(date, time, locale, options) {
   const newDate = new Date(date + "T" + time);
   return new Intl.DateTimeFormat(locale, options).format(newDate);
}

const options = {
   year: "numeric",
   month: "numeric",
   day: "numeric",
   hour: "numeric",
   minute: "numeric",
   second: "numeric",
   hour12: false
};

console.log(changeToLocalized("2018-03-12", "07:48:34", "fa-IR", options));

// 5- Delayed Greeting and Repeating Message: Write a Javascript
// program that uses `setTimeOut` and `setInterval` to achieve the
// following :
// 1. Display a greeting message after a 2 second delay.
// 2. Display a message every 3 seconds, repeating indefinitely.

const Greeting = (greetingMessage, anotherMessage) => {
   setTimeout(() => {
      console.log(greetingMessage);
      setInterval(() => console.log(anotherMessage), 3000);
   }, 2000);
};

Greeting("hi", "eli");

// 6-Find Even Numbers: Write a javascript function that takes an array of
// numbers and returns a new array containing only the even numbers.

const findEvenNumbers = arr => arr.filter(number => number % 2 === 0);

// 7-calculate Total and Average: write a javascript program that uses the
// `forEach` method to iterate through an array of numbers,
// calculates the total sum, and then calculates the average of those
// numbers.

const calculateTotalAndAverage = arr => {
   let total = 0;
   arr.forEach(num => (total += num));
   const average = total / arr.length;
   return { total, average };
};

// q8
const numbers = ["10", 25, "30", "43", 50, 78];

const calcSumOfEvens = arrayOfNumbers =>
   arrayOfNumbers
      .map(number => +number)
      .filter(number => number % 2 === 0)
      .reduce((sum, number) => sum + number);

console.log(calcSumOfEvens(numbers));

// q9
const expenses = [
   { cat: "food", amount: 50 },
   { cat: "travel", amount: 500 },
   { cat: "rent", amount: 130 },
   { cat: "education", amount: 560 }
];

const totalOfCategory = (expenses, category) => expenses.filter(ex => ex.cat === category).reduce((sum, ex) => sum + ex.amount);
