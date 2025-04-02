const arr = [10, 10, 20, 30];

const uniqueElements = function (arr) {
  const set = new Set(arr);
  return set;
};

const res = uniqueElements(arr);
console.log(res);
