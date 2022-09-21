// Don't change this part:
let dogTup: [string, string, string, string] = [
  "dog",
  "brown fur",
  "curly tail",
  "sad eyes",
];

// Your code goes here:
let myArr = dogTup.concat(dogTup);
myArr[50] = "not a dog";
