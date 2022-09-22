# TYPESCRIPT EXERCISES

Typescript exercises that I solved.

## 01 - Variable Type Annotations

STEP:

* The phoneNumber variable is meant to be able to store non-numeric characters (for compatibility with international phone numbers). Add a type declaration to inform TypeScript that it should be a string.
* Use the tsc command to check the file for type errors.
* Error! It looks like one of the values assigned to phoneNumber isn’t valid. Fix that value per TypeScript’s type complaints (And notice that the randomness introduced by Math.random() has no impact on whether TypeScript finds the type error).

```ts
// let phoneNumber;

// if (Math.random() > 0.5) {
//   phoneNumber = "+61770102062";
// } else {
//   phoneNumber = 7167762323;
// }

let phoneNumber: string;

if (Math.random() > 0.5) {
  phoneNumber = "+61770102062";
} else {
  phoneNumber = "7167762323";
}
```

## 02 - FUNCTIONS: Parameter Type Annotations

STEP:

* The triple() function is meant to multiply a value by three. Add a type annotation to the value parameter to indicate that it’s meant to be a number.
* greetTripled() is meant to take in a string and a number. Add type annotations to its type parameters as well.
* Everything seems to look good. Let’s quickly compile our code and move on to the next exercise. To do this, simply run tsc in the terminal.
* Woah! TypeScript found a bug, thanks to our type annotations. It looks like greetTripled() is being called with the wrong types of arguments. Fix the code to print Hiya, 15!.

```ts
// function triple(value) {
//   return value * 3;
// }

// function greetTripled(greeting, value) {
//   console.log(`${greeting}, ${triple(value)}!`);
// }

// greetTripled(5, "Hiya");

function triple(value: number) {
  return value * 3;
}

function greetTripled(greeting: string, value: number) {
  console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled("Hiya", 5);
```

## 03 - FUNCTIONS: Optional Parameters

Our proclaim() method is meant to default to printing 'I'm not ready...' when called without arguments. Mark its status parameter as optional.

Afterwards, feel free to run tsc in the terminal to verify that there are no errors.

```ts
// function proclaim(status: string) {
//   console.log(`I'm ${status || "not ready..."}`);
// }

// proclaim();
// proclaim("ready?");
// proclaim("ready!");

function proclaim(status?: string) {
  console.log(`I'm ${status || "not ready..."}`);
}

proclaim();
proclaim("ready?");
proclaim("ready!");
```

## 04 - FUNCTIONS: Default Parameters

STEP:

* The function proclaim() would be a little easier to read if it used default parameters, don’t you think? Give status and repeat default parameter values of 'not ready...' and 1, respectively. You should also remove the unnecessary parameter type annotations.
* Now that proclaim() uses default parameters, remove the unnecessary || statements from its code.

```ts
// function proclaim(status?: string, repeat?: number) {
//   for (let i = 0; i < repeat || 0; i += 1) {
//     console.log(`I'm ${status || "not ready..."}`);
//   }
// }

// proclaim();
// proclaim("ready?");
// proclaim("ready!", 3);

function proclaim(status = "not ready...", repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}

proclaim();
proclaim("ready?");
proclaim("ready!", 3);
```

## 05 - FUNCTIONS: Inferring Return Types

Challenge! Using what you’ve learned above, create a variable myVar with the type number. To make this more interesting:

* You must not use the : character.
* You must not type any numbers into your code.
* You may not use functions other than the one provided in index.ts.

```ts
// function getRandomNumber() {
//   return Math.random();
// }

function getRandomNumber() {
  return Math.random();
}

const myVar = getRandomNumber();
```

## 06 - FUNCTIONS: Void Return Type

* Use TypeScript to check this fruit salad code for type errors.
* It looks like the type annotation for the return type of makeFruitSalad() isn’t quite right. Please correct this!

```ts
// function makeFruitSalad(fruit1: string, fruit2: string): string {
//   let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
//   console.log(salad);
// }

// makeFruitSalad("banana", "pineapple");

function makeFruitSalad(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
  console.log(salad);
}

makeFruitSalad("banana", "pineapple");
```

## 07 - FUNCTIONS: Documenting Functions

We grabbed a few functions from earlier exercises. They are sorely missing some documentation comments…

Add a documentation comment makeFruitSalad() function. Your comment should include:

* A brief description of what the function does.
* A first @param tag for the first parameter.
* A second @param tag for the second parameter.
* A @returns tag explaining what the function returns (in this case, nothing).

Add a documentation comment proclaim() function. Your comment should include:

* A brief description of what the function does.
* A first @param tag for the first parameter.
* A second @param tag for the second parameter.
* An @returns tag explaining what the function returns (again, in this case, nothing).

```ts
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
function makeFruitSalad(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
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
function proclaim(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}
```

## 08 - ARRAYS: Array Type Annotations

The code editor contains several array assignments. Add the appropriate type annotations to the array variables in the // Arrays: section.

```ts
// Arrays:
// let bestNumbers = [7, 77, 4];
// let bestLunches = ["chicken soup", "non-chicken soup"];
// let bestBreakfasts = [
//   "scrambled eggs",
//   "oatmeal",
//   "tamago kake gohan",
//   "any kind of soup",
// ];
// let bestBooleans = [true, false];

// Arrays:
let bestNumbers: number[] = [7,77,4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[] = ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];
```

## 09 - ARRAYS: Multi-dimensional Arrays

Please provide type annotations for all the arrays provided in the // Multidimensional arrays: section.

```ts
// Arrays:
// let bestNumbers: number[] = [7, 77, 4];
// let bestLunches: string[] = ["chicken soup", "non-chicken soup"];
// let bestBreakfasts: string[] = [
//   "fasting",
//   "oatmeal",
//   "tamago kake gohan",
//   "any kind of soup",
// ];
// let bestBooleans: boolean[] = [true, false];

// // Multidimensional Arrays:
// let bestMealPlan = [
//   bestLunches,
//   bestBreakfasts,
//   ["baked potato", "mashed potato"],
// ];
// let bestBooleansTwice = [bestBooleans, bestBooleans];
// let numbersMulti = [
//   [[1], [2, 3]],
//   [[7], bestNumbers],
// ];

// Arrays:
let bestNumbers: number[] = [7,77,4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[]= ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];

// Multidimensional Arrays:
let bestMealPlan: string[][] = [
  bestLunches,
  bestBreakfasts,
  ["baked potato", "mashed potato"],
];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [
  [[1], [2, 3]],
  [[7], bestNumbers],
];
```

## 10 - ARRAYS: Tuples

STEP:

* The code editor has defined the variable favoriteCoordinates with the precise location of the Codecademy headquarters. The location is expressed as a tuple encoding the coordinates 40 degrees 43.2 minutes north latitude, 73 degrees 59.8 minutes west longitude. Please provide the correct type annotation for this tuple.
* Actually, our favorite place is not the Codecademy headquarters (wonderful though it may be). Reassign the variable favoriteCoordinates to a tuple that expresses the objectively best coordinates, the center of the Marianas trench at 17 degrees 45 minutes north, 142 degrees 30 minutes east.
* Sadly, the tuple favoriteCoordinates still doesn’t describe the best part of the marianas trench: the bottom. Try to fix this by adding the deepest depth to the end of the tuple: Add the code favoriteCoordinates[6] = -6.825; and then run tsc. That’s 6.825 miles deep!
* OK luckily that didn’t work. The whole point of tuples is that they have fixed lengths, so you cannot access elements of favoriteCoordinates with indices greater than 5. Even when you want to!

```ts
// let favoriteCoordinates = [40, 43.2, "N", 73, 59.8, "W"];

let favoriteCoordinates: [number, number, string, number, number, string] = [
  40,
  43.2,
  "N",
  73,
  59.8,
  "W",
];

favoriteCoordinates = [17, 45, "N", 142, 30, "E"];

favoriteCoordinates[6] = -6.825;
```

## 11 - ARRAYS: Array Type Inference

STEP:

* Let’s do a tricky example. We have defined the tuple dogTup in the code editor. Your challenge is to define a variable myArr of the type string[]. Not so fast! The hard part is that you are not allowed to use the word Array, or the characters [ and ]. Use the .concat() method and your wits to solve the problem.
* You figured it out! Now demonstrate that myArr is an array rather than a tuple by adding the code myArr[50] = 'not a dog' and running tsc. If myArr were a tuple, accessing element 50 would be impossible!

```ts
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
```

## 12 - ARRAYS: Rest Parameters

STEP:

* The code editor includes another function using rest parameters. The function, addPower(p, ...numsToAdd), adds up the pth powers of all the subsequent arguments. So the call addPower(2, 3, 4) returns 25, since 3 squared plus 4 squared is 25. (Here, we are using the exponentiation operator **.) Please add the appropriate type annotations for this function. Include the annotations for all arguments and the return type.
* There is no such thing as a number to the power of 'a string'. Verify that the function results in a type error when you add the code addPower('a string', 4, 5, 6) and run tsc.

```ts
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
```

## 13 - ARRAYS: Spread Syntax

STEP:

* An array of tuples could be a convenient way to store the arguments for many recurring function calls. In the code editor, we have defined the array danceMoves, every element of which is a tuple that contains arguments for the performDanceMove() function. Please provide a type annotation for the danceMoves array that will ensure compatibility with the performDanceMove() function.
* Perform the whole dance from start to finish by looping over the danceMoves array in whatever way you like, but make sure to use JavaScript’s spread syntax within performDanceMove(). It’s time to see the results of the dance! Run tsc to transpile the code to JavaScript and then run it with node index.js.

```ts
// function performDanceMove(
//   moveName: string,
//   moveReps: number,
//   hasFlair: boolean
// ): void {
//   console.log(`I do the ${moveName} ${moveReps} times !`);
//   if (hasFlair) {
//     console.log("I do it with flair!");
//   }
// }

// let danceMoves = [
//   ["chicken beak", 4, false],
//   ["wing flap", 4, false],
//   ["tail feather shake", 4, false],
//   ["clap", 4, false],
//   ["chicken beak", 4, true],
//   ["wing flap", 4, true],
//   ["tail feather shake", 4, true],
//   ["clap", 4, true],
// ];

function performDanceMove(
  moveName: string,
  moveReps: number,
  hasFlair: boolean
): void {
  console.log(`I do the ${moveName} ${moveReps} times !`);
  if (hasFlair) {
    console.log("I do it with flair!");
  }
}

let danceMoves: [string, number, boolean][] = [
  ["chicken beak", 4, false],
  ["wing flap", 4, false],
  ["tail feather shake", 4, false],
  ["clap", 4, false],
  ["chicken beak", 4, true],
  ["wing flap", 4, true],
  ["tail feather shake", 4, true],
  ["clap", 4, true],
];

danceMoves.forEach((move) => performDanceMove(...move));
```

## 14 - CUSTOM TYPES: Enums

STEP:

* Potent Rodent is a pet shop with a very limited supply. The entire stock of animals consists of hamsters, rats, chinchillas, and tarantulas. Your job is to improve their order-processing code by making it type safe. Create an enum named Pet, whose possible values are Pet.Hamster, Pet.Rat, Pet.Chinchilla, and Pet.Tarantula. Please list them in the order given here, and don’t bother assigning their numeric values yourself—let TypeScript do it automatically.
* You may have noticed that the variable petOnSale is not type safe: a wayward coder could assign to it an unacceptable value like petOnSale = 'Ox'! Create a better, type safe variable petOnSaleTS and assign to it the value Pet.Chinchilla. Make sure to explicitly include the correct type annotation for petOnSaleTS on the same line.
* The array ordersArray is a list of orders to process, in the format [<pet name string>, <number ordered>]. (Why did someone order 50 chinchillas?) This is clearly not type safe by any stretch of the imagination. Create the type safe version of this array, naming it ordersArrayTS. Pet names should be replaced by corresponding enum values. The number ordered should stay the same. Don’t do the type annotation just yet, we’ll get to that in a moment.
* Now that you have created ordersArrayTS and assigned its value, go back and add the appropriate type annotation. Note that ordersArrayTS is an array of tuples, so the type annotation should reflect that fact.
* Now that we have a type safe orders array, let’s see what happens when someone tries to order a pet that the shop does not carry. Attempt to add an order for 3 jerboas by adding the code ordersArrayTS.push([Pet.Jerboa, 3]); and clicking the “Run” button. Then, run tsc in the terminal to make sure TypeScript does not allow this push.

```ts
let petOnSale = "chinchilla";
let ordersArray = [
  ["rat", 2],
  ["chinchilla", 1],
  ["hamster", 2],
  ["chinchilla", 50],
];

// Write your code below:

enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula,
}

const petOnSaleTS: Pet = Pet.Chinchilla;

const ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
];

ordersArrayTS.push([Pet.Jerboa, 3]);
```
