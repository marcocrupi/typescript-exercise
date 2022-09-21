// function addPower(p, ...numsToAdd) {
//   let answer = 0;
//   for (let i = 0; i < numsToAdd.length; i++) {
//     answer += numsToAdd[i] ** p;
//   }
//   return answer;
// }

function addPower(p: number, ...numsToAdd: number[]): number {
  let answer = 0;
  for (let i = 0; i < numsToAdd.length; i++) {
    answer += numsToAdd[i] ** p;
  }
  return answer;
}

addPower("a string", 4, 5, 6);