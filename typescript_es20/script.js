function getFilledArray(value, n) {
    return Array(n).fill(value);
}
var stringArray;
var numberArray;
var personArray;
var coordinateArray;
// Write your code below:
stringArray = getFilledArray("hi", 6);
numberArray = getFilledArray(9, 6);
personArray = getFilledArray({ name: "J. Dean", age: 24 }, 6);
coordinateArray = getFilledArray([3, 4], 6);
