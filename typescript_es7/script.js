// function makeFruitSalad(fruit1: string, fruit2: string): void {
//   let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
//   console.log(salad);
// }
// function proclaim(status = "not ready...", repeat = 1) {
//   for (let i = 0; i < repeat; i += 1) {
//     console.log(`I'm ${status}`);
//   }
// }
/**
* Prints the provided string parameters in the order:
* first, second, second, first, second, first, first
*
* @param fruit1 - The first string input
* @param fruit2 - The second string input
* @returns No return value
*
*/
function makeFruitSalad(fruit1, fruit2) {
    var salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
    console.log(salad);
}
/**
* Loops the input value number of times logging a
* string in the format: I'm [status]
*
* @param status - A string input
* Default value: 'not ready'
* @param repeat - A number value.
* Default value: 1
* @returns No return value
*
*/
function proclaim(status, repeat) {
    if (status === void 0) { status = 'not ready...'; }
    if (repeat === void 0) { repeat = 1; }
    for (var i = 0; i < repeat; i += 1) {
        console.log("I'm ".concat(status));
    }
}
