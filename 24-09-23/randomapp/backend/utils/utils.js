export function filterDeleted(arr) {
  const newArr = [];
  arr.forEach((element) => {
    !element.deleted ? newArr.push(element) : null;
  });
  return newArr;
}
