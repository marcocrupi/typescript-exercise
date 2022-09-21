// function addPower(p, ...numsToAdd) {
//   let answer = 0;
//   for (let i = 0; i < numsToAdd.length; i++) {
//     answer += numsToAdd[i] ** p;
//   }
//   return answer;
// }
function addPower(p) {
    var numsToAdd = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numsToAdd[_i - 1] = arguments[_i];
    }
    var answer = 0;
    for (var i = 0; i < numsToAdd.length; i++) {
        answer += Math.pow(numsToAdd[i], p);
    }
    return answer;
}
addPower("a string", 4, 5, 6);
