// Q1
const checkIsDate = input => input instanceof Date && !isNaN(+input);

// console.log(checkIsDate("October 13, 2014, 11:13:00"));
// console.log(checkIsDate(new Date(76575634736)));
// console.log(checkIsDate(new Date("2013-04-23T13:45:34")));
// console.log(checkIsDate(new Date(99, 5, 24, 11, 33, 30, 0)));
// console.log(checkIsDate([1, 2, 4, 0]));
// console.log(checkIsDate(new Date("kdjfkldklk")));

// alternative:
const isDate = inputDate => {
   if (Object.prototype.toString.call(inputDate) === "[object Date]") return true;
   return false;
};
// console.log(isDate(2222));
// console.log(isDate("October 13, 2014 11:13:00"));
// console.log(isDate(new Date(86400000)));
// console.log(isDate(new Date(99, 5, 24, 11, 33, 30, 0)));
// console.log(isDate("Fri Aug 25 2023 14:30:06 GMT+0330 (Iran Standard Time)"));

/////////////////////////////////////////////////////////////////////////////

// Q2

const getMonthName = date => {
   const myDate = new Date(date);
   return isNaN(+myDate) ? false : new Intl.DateTimeFormat("en-US", { month: "long" }).format(myDate);
};

const getMonthName2 = date => {
   const month = new Date(date).getMonth();
   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   return isNaN(month) ? false : monthNames[month];
};

// console.log(getMonthName("2009/11/11"));
// console.log(getMonthName(new Date("djkdljkljl")));
// console.log(getMonthName2(new Date("djkdljkljl")));

// /////////////////////////////////////////////////////////////////
// Q3

const getMaxDate = arrayOfDates => {
   const timestameps = arrayOfDates.map(date => +new Date(date));
   if (timestameps.includes(NaN)) return false;
   const maxDate = Math.max(...timestameps);
   const index = timestameps.indexOf(maxDate);
   return arrayOfDates[index];
};

// console.log(getMaxDate(["2059/15/11", "2001/11/11", "2004/11/11", "2009/1/11", "2009/11/12"]));

// assuming we want exclude invalid patterns:

// const getMaxDate = arrayOfDates => {
//    const timestameps = [];
//    arrayOfDates.forEach(date => {
//       if (!isNaN(+new Date(date))) timestameps.push(+new Date(date));
//    });
//    return new Date(Math.max(...timestameps)).toLocaleDateString();
// };
// console.log(getMaxDate(["2059/5/11", "2001/11/11", "2004/51/11", "2009/1/11", "2079/51/12"]));

// const getMaxDate2 = arrayOfDates => {
//    const timestameps = arrayOfDates.map(date => +new Date(date)).filter(timestamep => !isNaN(timestamep));
//    return new Date(Math.max(...timestameps)).toLocaleDateString();
// };

// console.log(getMaxDate2(["2059/5/11", "2001/11/11", "2004/51/11", "2009/1/11", "2079/51/12"]));

// Q4

const formatMinutes = timeInminutes => {
   if (timeInminutes < 60) return `${timeInminutes} minutes.`;
   const hours = Math.floor(timeInminutes / 60);
   const minutes = timeInminutes % 60;
   return `${hours} hour(s)${minutes ? ` and ${minutes} minute(s)` : ""}.`;
};

console.log(formatMinutes(200));
console.log(formatMinutes(180));

// Q5
