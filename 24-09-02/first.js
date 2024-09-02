const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findNumInArray(array, num) {
  return array.indexOf(num);
}
console.log(findNumInArray(array, 3));

function addNums(num1, num2) {
  return num1 + num2;
}
console.log(addNums(1, 2));

const addNumsArrow = (num1, num2) => {
  return num1 + num2;
};
console.log(addNumsArrow(1, 2));

// {} --> pole, siis pole returni vaja.
const addNumsArrowShort = (num1, num2) => num1 + num2;
console.log(addNumsArrowShort(1, 2));

function addNumsNested(num1) {
  return function(num2) {
    return num1 + num2;
  };
}
console.log(addNumsNested(1)(2));

const addNumsNestedArrow = num1 => num2 => num1 + num2;
console.log(addNumsNestedArrow(1)(2));
