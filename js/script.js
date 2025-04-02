//Two Sum
const nums = [2, 7, 11, 15];
const target = 9;
let sum = 0;
nums.forEach(function (num, index, arr) {
  sum = sum + num;
  if (sum === target) {
    const res = [nums.indexOf(num) - 1, nums.indexOf(num)];
    console.log(res);
  }
});

//Max in Array
const arr = [10, 20, 30, 40, 50, 60];
let max = arr[0];
arr.forEach(function (num, i, array) {
  if (array[i] > max) {
    max = array[i];
  }
});
console.log(max);

//Unique elements in Array
const arr = [10, 10, 20, 30];
const uniqueElements = function (arr) {
  const set = new Set(arr);
  return set;
};
const res = uniqueElements(arr);
console.log(res);

//Palindrome
let res = [];
const str = "malayalam";
const split = str.split("");
while (split.length) {
  res.push(split.pop(""));
}
const palindrome = res.join("");
if (str === palindrome) {
  console.log("The string is Palindrome");
} else {
  console.log("The string is not a Palindrome");
}
