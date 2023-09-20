const sum = function ([...item]) {
  const a = item.reduce((sum, item) => {
    return sum + item;
  }, 0);
  console.log(a);
};

sum([2, 3, 5, 9, 6, 8, 6, 5, 4]);
