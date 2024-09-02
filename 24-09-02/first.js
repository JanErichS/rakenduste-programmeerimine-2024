// 1.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function findNumInArray(array, num) {
  return array.indexOf(num);
}
console.log(findNumInArray(array, 3));

// 2.
function addNums(num1, num2) {
  return num1 + num2;
}
console.log(addNums(1, 2));

// 3.
const addNumsArrow = (num1, num2) => {
  return num1 + num2;
};
console.log(addNumsArrow(1, 2));

// 4.
// {} --> pole, siis pole returni vaja.
const addNumsArrowShort = (num1, num2) => num1 + num2;
console.log(addNumsArrowShort(1, 2));

// 5.
function addNumsNested(num1) {
  return function(num2) {
    return num1 + num2;
  };
}
console.log(addNumsNested(1)(2));

// 6.
const addNumsNestedArrow = num1 => num2 => num1 + num2;
console.log(addNumsNestedArrow(1)(2));

// 7.
const greet = (name = "World") => `Hello, ${name} !`;
console.log(greet("Mina"));

// 8.
const newArray = [1, 2, 3, 4, 5];

const addedArray = newArray.map(element => element + 5);
console.log(addedArray);

// 9.
const threeParams = newArray.map((element, index, array) => {
  return element + 5; // elemendi asendus
});
console.log({ addedArray });
// console.log({ addedArray }); muudab objektiks.