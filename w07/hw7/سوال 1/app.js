const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalary = function (obj) {
  const a = Object.entries(obj);
  const sorting = a.sort((a, b) => b[1] - a[1]);
  const [theBig, ...other] = sorting;
  console.log(theBig);
  console.log(` ${theBig[0]}  has top salary 🎭`);
  console.log(` his salary is : ${theBig[1]} 🎭`);
};

topSalary(salaries);
