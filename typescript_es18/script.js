// Math Operations
// function add(a, b) {
//   return a + b;
// }
// function subtract(a, b) {
//   return a - b;
// }
// function multiply(a, b) {
//   return a * b;
// }
// function divide(a, b) {
//   return a / b;
// }
// function wrongAdd(a, b) {
//   return a + b + "";
// }
// Add your function type below:
// Math Tutor Function That Accepts a Callback
// function mathTutor(operationCallback) {
//   console.log("Let's learn how to", operationCallback.name, "!");
//   let value25 = operationCallback(2, 5);
//   console.log(
//     "When we",
//     operationCallback.name,
//     "2 and 5, we get",
//     value25,
//     "."
//   );
//   console.log(
//     "When we",
//     operationCallback.name,
//     value25,
//     "and 7, we get",
//     operationCallback(value25, 7),
//     "."
//   );
//   console.log("Now fill out this worksheet.");
// }
// Call your functions below:
// ---
// Math Operations
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function wrongAdd(a, b) {
    return a + b + "";
}
// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback) {
    console.log("Let's learn how to", operationCallback.name, "!");
    var value25 = operationCallback(2, 5);
    console.log("When we", operationCallback.name, "2 and 5, we get", value25, ".");
    console.log("When we", operationCallback.name, value25, "and 7, we get", operationCallback(value25, 7), ".");
    console.log("Now fill out this worksheet.");
}
// Call your functions below:
mathTutor(wrongAdd);
