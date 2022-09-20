// function triple(value) {
//   return value * 3;
// }
// function greetTripled(greeting, value) {
//   console.log(`${greeting}, ${triple(value)}!`);
// }
// greetTripled(5, "Hiya");
function triple(value) {
    return value * 3;
}
function greetTripled(greeting, value) {
    console.log("".concat(greeting, ", ").concat(triple(value), "!"));
}
greetTripled("Hiya", 5);
