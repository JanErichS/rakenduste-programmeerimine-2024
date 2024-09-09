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
console.log({ threeParams });
// console.log({ addedArray }); muudab objektiks.

// 11. .fliter()

const randArray = [1, 2, 3, 4, 5, 6, 7];

const filteredArray = randArray.filter(number => number >= 4);
console.log(filteredArray);

// 12. Ülesanne: Luua nimede massivi põhjal objektide massiv, mis koosneb sellisel kujul objektidest:

// {
//   name: 'Anni',
//   age: 24,
//   email: 'anni@company.com',
//   address: 'Anni Street 55',
//   username: 'innA'
// }

const namesArray = ["Anni", "Maali", "Madis", "Andrus"];

const peopleArray = namesArray.map(name => {
  return {
    name: name,
    age: Math.floor(name.length * 6.5),
    email: `${name.toLowerCase()}@company.com`,
    address: `${name}'s Street ${Math.floor(Math.random() * 100)}`,
    username: name.split("").reverse().join("")
  };
});

console.log(peopleArray);

// 13. Tahame juurde lisada pikkuse ja jätta eelnevad kõik andmed samaks, spread syntax
let student = {
  name: "Special Name",
  school: "TLÜ"
};
console.log(student);

student = { ...student, height: 179 };
console.log(student);

// 14. Tahame muuta eelnevatest andmetest midagi jättes teised samaks
student = { ...student, name: "Super Special Name" };
console.log(student);

// 15. == / ===
// eslint-disable-next-line eqeqeq
console.log(1 == "1");
console.log(1 === "1");

// Async / Await promise
const myPromise = () => {
  return new Promise(resolve => setTimeout(() => resolve("done"), 1000));
};

const runPromise = async () => {
  console.log(await myPromise);
};
runPromise();

setTimeout(() => console.log("timeout"), 1000);
