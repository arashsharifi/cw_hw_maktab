const sortFromHightoLow = (...array) => {
  let a = array;
  const b = a.map((item) => {
    return item;
  });
  const string = a.join().split(",");

  //   string.sort(function (a, b) {
  //     return b - a;
  //   });

  const my = string.sort((a, b) => b - a);

  const arrOfNum = my.map((str) => {
    return parseInt(str);
  });
  console.log(arrOfNum);
};

sortFromHightoLow([1.5, 1.7, 5, 6, 2], [3, 7, 1], [4, 5, 6, 8, 9]);

// sortFromHightoLow([5, 6, 2], [3, 7, 1]); //===> 7,6,5,3,2,1
// sortFromHightoLow([5, 6, 2], [3, 7, 1], [2, 4, 8]); // ===> 8,7,6,5,4,3,2,2,1
// const arrOfStr = ["1", "2", "3"];

// const arrOfNum = arrOfStr.map((str) => {
//   return parseInt(str, 10);
// });

// // 👇️ [1, 2, 3]
// console.log(arrOfNum);
