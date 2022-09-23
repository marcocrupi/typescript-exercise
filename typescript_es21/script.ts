// function printNumsAndStrings(statement) {
//   console.log(`ℹ️ LOG:: ${statement}`);
// }

// printNumsAndStrings("hello!");

function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

printNumsAndStrings("hello!");
printNumsAndStrings(3);