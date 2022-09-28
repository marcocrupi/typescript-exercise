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

## 15 - CUSTOM TYPES: String Enums vs. Numeric Enums

STEP:

* You will now revisit the pet shop example. But this time, you will use string enums instead of numeric enums. Create a string enum named Pet, whose possible values are Pet.Hamster, Pet.Rat, Pet.Chinchilla, and Pet.Tarantula. (List them in this order.) Assign values according to the convention mentioned above, where the values are capitalized forms of the variable name: enum Example { variable = 'VARIABLE'};.
* Create the type-safe variable petOnSaleTS and assign to it the value Pet.Chinchilla. Make sure to explicitly include the correct type annotation for petOnSaleTS.
* As before, ordersArray is a list of orders to process, in the format [<pet name string>, <number ordered>]. This is not type safe. Create the type safe version of this array, naming it ordersArrayTS. Pet names should be replaced by corresponding enum values. The number ordered should stay the same. Include the type annotation for ordersArrayTS as well.
* As discussed above, string enums are very particular about the form their values are written in. Even though you wrote Hamster = 'HAMSTER' in the enum Pet statement, you cannot use 'HAMSTER' as the enum value. You must use Pet.Hamster instead. Demonstrate this fact by adding the code ordersArrayTS.push(['HAMSTER', 1]); and clicking “Run”. Then, run tsc in the terminal to make sure TypeScript does not allow this.

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
  Hamster = "HAMSTER",
  Rat = "RAT",
  Chinchilla = "CHINCHILLA",
  Tarantula = "TARANTULA",
}

const petOnSaleTS: Pet = Pet.Chinchilla;

const ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
];

ordersArrayTS.push(["HAMSTER", 1]);
```
  
## 16 - CUSTOM TYPES: Object Types

STEP:

* When we write functions, we like to give arguments explanatory names, which help the programmer using the function. For example, the arguments in function sayHappyBirthday(name, age) suggest that sayHappyBirthday('Cody', 10) will be valid input. However, sometimes you will encounter code where data is passed into a function by using an object, as with sayHappyBirthdayWithObject() in the code editor. The problem is, sayHappyBirthdayWithObject(personObject) is not very explanatory. Here, TypeScript can help us specify the exact properties that personObject should contain for the function to work. Add a type annotation to the personObject parameter that will ensure that the function will always receive an object with the required properties.
* The code editor defines the variable birthdayBabies without a type annotation. Please add in the correct type annotation yourself.

```ts
// function sayHappyBirthdayWithObject(personObject){
//   let output ='';
//   output += 'Happy Birthday '
//          + personObject.name + '! ';
//   output += 'You are now ' 
//          + personObject.age + ' years old! ';
//   output += 'Your birthday wish was to receive ' 
//          + personObject.giftWish 
//          + '. And guess what? You will ';
//   if (!personObject.success){
//     output += 'not ';
//   }
//   output += 'receive it! \n';
//   console.log(output);
// }

// let birthdayBabies = [
//   {name: 'Liam', age: 0, giftWish: 'karate skills', success: false}, 
//   {name: 'Olivia', age: 0, giftWish: 'a bright future', success:true}, 
//   {name: 'Ava', age: 0, giftWish: '$0.25', success:true}
// ]; 

// birthdayBabies.forEach(sayHappyBirthdayWithObject);

function sayHappyBirthdayWithObject(personObject: {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}) {
  let output = "";
  output += "Happy Birthday " + personObject.name + "! ";
  output += "You are now " + personObject.age + " years old! ";
  output +=
    "Your birthday wish was to receive " +
    personObject.giftWish +
    ". And guess what? You will ";
  if (!personObject.success) {
    output += "not ";
  }
  output += "receive it! \n";
  console.log(output);
}

let birthdayBabies: {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}[] = [
  { name: "Liam", age: 0, giftWish: "karate skills", success: false },
  { name: "Olivia", age: 0, giftWish: "a bright future", success: true },
  { name: "Ava", age: 0, giftWish: "$0.25", success: true },
];

birthdayBabies.forEach(sayHappyBirthdayWithObject);
```
  
## 17 - CUSTOM TYPES: Type Aliases

STEP:

* In the code editor, you should see something familiar. This code was the “improved” version of the navigation example in a previous lesson. Here, we can improve it even more by replacing a long, awkward type annotation with a short, supple type alias. First, create the type alias Coord to stand for the coordinate tuple type. It should be of the same type as codecademyCoordinates and bermudaTCoordinates.
* Now, replace the old, long type annotations for codecademyCoordinates and bermudaTCoordinates with annotations that use your new type alias.

```ts
// Add your type alias below:
type Coord = [number, number, string, number, number, string];

let codecademyCoordinates: Coord = [40, 43.2, "N", 73, 59.8, "W"];
let bermudaTCoordinates: Coord = [25, 0, "N", 71, 0, "W"];
```

## 18 - CUSTOM TYPES: Function Types

STEP:

* First, try to understand what’s been written in the code editor. We have defined several functions representing math operations. The function mathTutor() is meant to take one of these function names as an argument: the functions are used as callbacks. Try it out by adding the code mathTutor(multiply) and clicking the “Run” button. Finally, see if it gives you the expected result by running tsc and then node index.js in the terminal.
* Why do we need to bother with function types at all? Well, you can easily demonstrate that mathTutor() does not work well with some callbacks. What if a co-worker accidentally used the callback wrongAdd(), which returns a string rather than a number? Find out by adding the code mathTutor(wrongAdd), then run the program as before.
* Using wrongAdd() as the callback gave strange results, because mathTutor() attempted to add a string and a number. Luckily, function types can help prevent this kind of problem. Create a type alias called OperatorFunction which has a function type compatible with add() through divide(), but not compatible with wrongAdd(). Then, write a type annotation for mathTutor()‘s argument using OperatorFunction.
* Finally, make sure that TypeScript throws errors when it sees mathTutor(wrongAdd). To do this, transpile and run the program as before.

```ts
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

// Add your function type below:
type OperatorFunction = (arg0: number, arg1: number) => number;

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name, "!");
  let value25 = operationCallback(2, 5);
  console.log(
    "When we",
    operationCallback.name,
    "2 and 5, we get",
    value25,
    "."
  );
  console.log(
    "When we",
    operationCallback.name,
    value25,
    "and 7, we get",
    operationCallback(value25, 7),
    "."
  );
  console.log("Now fill out this worksheet.");
}

// Call your functions below:
mathTutor(wrongAdd);
```

## 19 - CUSTOM TYPES: Generic Types

Please provide type annotations for the variables theFamily, someFamily, aFamily, and anotherFamily in the code editor. Where appropriate, use the predefined type aliases Human, Dog, and the generic type Family<T>.

```ts
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: { name: string; age: number }[];
let coordinateArray: [number, number][];

// Write your code below:
stringArray = getFilledArray<string>("hi", 6);
numberArray = getFilledArray<number>(9, 6);
personArray = getFilledArray<{ name: string; age: number }>(
  { name: "J. Dean", age: 24 },
  6
);
coordinateArray = getFilledArray<[number, number]>([3, 4], 6);
```

## 20 - CUSTOM TYPES: Generic Functions

Use the function getFilledArray<T>() to assign values to the variables stringArray, numberArray, personArray, and coordinateArray.

Write your code so that:

* Each value should be an array of 6 elements.
* All elements in stringArray should equal 'hi'.
* All elements in numberArray should equal 9.
* All elements in personArray should equal {name: 'J. Dean', age: 24}.
* All elements in coordinateArray should equal [3,4].

Don’t forget to specify the value of T!

```ts
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: { name: string; age: number }[];
let coordinateArray: [number, number][];

// Write your code below:
stringArray = getFilledArray<string>("hi", 6);
numberArray = getFilledArray<number>(9, 6);
personArray = getFilledArray<{ name: string; age: number }>(
  { name: "J. Dean", age: 24 },
  6
);
coordinateArray = getFilledArray<[number, number]>([3, 4], 6);
```

## 21 - UNION TYPES: Defining Unions

STEP

* We’ve written a function that creates a custom version of console.log() named printNumsAndStrings(). If you hover over the printNumsAndStrings() function’s statement parameter, you’ll notice that TypeScript infers that statement has an any type. Let’s make this type more specific with a union. Add a union to the statement parameter with two type members: string and number.
* Now call the printNumsAndStrings() function twice, once with a number as its argument and once with a string its argument, then run your code.
* In the command line, run tsc to compile your code.
* Run node index.js to execute your compiled code. You should see the custom log messages from the printNumsAndStrings() function as the output.

```ts
// function printNumsAndStrings(statement) {
//   console.log(`ℹ️ LOG:: ${statement}`);
// }

// printNumsAndStrings("hello!");

function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

printNumsAndStrings("hello!");
printNumsAndStrings(3);
```
  
## 22 - UNION TYPES: Type Narrowing

STEP

* We’ve begun to write a function named formatValue() that should take in strings or numbers, then format them. Write a type guard that checks if the typeof value is a 'string'. If it is, then console.log() the string as a lowercase string with .toLowerCase().
* Inside the body of formatValue(), write another type guard that checks if value is a 'number'. If it is, then console.log() the number with two zeros after the decimal with .toFixed(2).

```ts
// function formatValue(value: string | number) {
// Write your code here
// }

// formatValue("Hiya");
// formatValue(42);

function formatValue(value: string | number) {
  // Write your code here
  if (typeof value === "string") {
    return console.log(value.toLowerCase());
  }
  if (typeof value === "number") {
    return console.log(value.toFixed(2));
  }
}

formatValue("Hiya");
formatValue(42);
```
  
## 23 - UNION TYPES: Inferred Union Return Types

In the editor, we have a User type that describes a user. In addition, there’s a function named createUser() that randomly returns a user or an error message (we’re simulating a call to a server that might fail). We’d like to call the createUser() function, then store its response in a typed variable.

Declare a variable named userData that stores the returned value of createUser(). Then, go back and provide userData with the correct union type.

```ts
// type User = {
//   id: number;
//   username: string;
// };

// function createUser() {
//   const randomChance = Math.random() >= 0.5;

//   if (randomChance) {
//     return { id: 1, username: "nikko" };
//   } else {
//     return "Could not create a user.";
//   }
// }

type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: "nikko" };
  } else {
    return "Could not create a user.";
  }
}

let userData: User | string = createUser();
```

## 24 - UNION TYPES: Unions and Arrays

Inspect the program in the editor. This program has a function that takes home addresses and their respective prices, formats them, then returns them. If you hover over the listings parameter in formatListings(), the type of listings is inferred as any. Let’s type this parameter.

Look at the definition of formatListings(), then define a union array type on the listings parameter.

```ts
// function formatListings(listings) {
//   return listings.map((listing) => {
//     if (typeof listing === "string") {
//       return listing.toUpperCase();
//     }

//     if (typeof listing === "number") {
//       return `$${listing.toLocaleString()}`;
//     }
//   });
// }

// const result = formatListings([
//   "123 Main St",
//   226800,
//   "580 Broadway Apt 4a",
//   337900,
// ]);

// console.log(result);

function formatListings(listings: (string | number)[]) {
  return listings.map((listing) => {
    if (typeof listing === "string") {
      return listing.toUpperCase();
    }

    if (typeof listing === "number") {
      return `$${listing.toLocaleString()}`;
    }
  });
}

const result = formatListings([
  "123 Main St",
  226800,
  "580 Broadway Apt 4a",
  337900,
]);

console.log(result);
```
  
## 25 - UNION TYPES: Common Key Value Pairs

In the editor, we’ve written a program that should display a message about a social media event. The getFriendNameFromEvent() function takes an event, then returns the friend’s displayName or username. Let’s start by adding a type to the getFriendNameFromEvent()’s event parameter. Use a union to allow event to be a Like or a Share, then save your code.

In getFriendNameFromEvent()‘s body, it returns event.displayName || event.username. Hover over event.displayName. You’ll see a pop-up with this error message:

Property 'displayName' does not exist on type 'Like | Share'.
Property 'displayName' does not exist on type 'Share'.(2339)

This message is pointing out that there’s no displayName property on the Share type. In the Share type, add a displayName of type string, just like on the Like type.

```ts
// type Like = {
//   username: string;
//   displayName: string;
// };

// type Share = {
//   username: string;
// };

// function getFriendNameFromEvent(event) {
//   return event.displayName || event.username;
// }

// const newEvent = {
//   username: "vkrauss",
//   displayName: "Veronica Krauss",
// };

// const friendName = getFriendNameFromEvent(newEvent);

// console.log(`You have an update from ${friendName}.`);

type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: "vkrauss",
  displayName: "Veronica Krauss",
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);
```

## 26 - UNION TYPES: Unions with Literal Types

STEP:

* Let’s write a program that will use literal types and unions to display the states of a download button. Start by writing a type named Status. It should be equal to the union of three literal types: 'idle', 'downloading', and 'complete'.
* Next, write a function named downloadStatus(). It should have one parameter named status, which should be typed as the Status type you wrote in the previous step.
* Inside the downloadStatus() function’s body, write three conditionals that output different messages based on status. If status is 'idle', console.log() a 'Download' message. If status is 'downloading', console.log() a 'Downloading...' message. If status is 'complete', console.log() a 'Your download is complete!' message.
* Now that we have a downloadStatus() function with distinct states, let’s call it! Call downloadStatus() with a valid argument.

```ts
type Status = "idle" | "downloading" | "complete";

function downloadStatus(status: Status) {
  if (status === "idle") {
    console.log("Download");
  }
  if (status === "downloading") {
    console.log("Downloading...");
  }
  if (status === "complete") {
    console.log("Your download is complete!");
  }
}

downloadStatus("idle");
```
  
## 27 - TYPE NARROWING: Type guards

STEP:

* In the code editor, there’s a program that should take in sports statistics and format them. The formatStatistic() function should take in values like 'Win' and 0.364, then format them to 'WIN' and 0.36 respectively. Currently, our program is broken. If you run tsc in the terminal, you’ll see an error that we cannot call .toFixed() on stat. Let’s fix that with a type guard. In the body of the formatStatistic() function, write a type guard using typeof that checks if stat is a 'number'. If it is, then move the return stat.toFixed(2) statement inside the type guard to return the result.
* Now let’s handle the case where stat may be a 'string'. Write another type guard using typeof in the body of formatStatistic() that checks if stat is a 'string'. If it is, call .toUpperCase() on it and return the result.

```ts
function formatStatistic(stat: string | number) {
  if (typeof stat === "number") {
    return stat.toFixed(2);
  }
  if (typeof stat === "string") {
    return stat.toUpperCase();
  }
}

console.log(formatStatistic("WIN"));
console.log(formatStatistic(0.36));
```

## 28 - TYPE NARROWING: Using in with Type Guards

STEP:

* In the code editor, there are two types: Cat and Fish. Underneath the types are variables for each: siameseCat and bettaFish. Finally, there’s a move() function that takes a pet as its argument. Ultimately, we want the move() function to call the correct movement method on pet. Currently our code has a TypeScript error because we’re calling .run() on pet inside the move() function. Let’s fix it. Start by writing a type guard using in inside the move() function that checks if 'run' exists on pet. If it does, then return the value of pet.run().
* The previous checkpoint takes care of Cat types. Now let’s handle Fish types. Write another type guard using the in operator inside the body of the move() function. This type guard should check if the property 'swim' exists on pet. If it does, then return pet.swim().
* Run tsc in the terminal to compile your code. There should be no errors, even though methods we called on pet do not exist on both Cat and Fish types, since TypeScript was able to type narrow.
* Run your compiled code with node index.js. You should see pitter pat as the output if you called move() with siameseCat or bubble blub if you called move() with bettaFish.

```ts
type Cat = {
  name: string;
  run: () => string;
};

type Fish = {
  name: string;
  swim: () => string;
};

const siameseCat = {
  name: "Proxie",
  run: () => "pitter pat",
};

const bettaFish = {
  name: "Neptune",
  swim: () => "bubble blub",
};

function move(pet: Cat | Fish) {
  if ("run" in pet) {
    return pet.run();
  }

  if ("swim" in pet) {
    return pet.swim();
  }
}

console.log(move(siameseCat));
```

# 29 - TYPE NARROWING: Narrowing with else

STEP:

* In the code editor, there’s a function named prepareEntree() that takes an argument named entree. This function should provide instructions on how to prepare two kinds of dishes, either Meat or Pasta entrees (for the particularly famished, we could prepare both). Currently our code is calling .boil() on every entree. This method call is an issue because entrees of type Meat do not have a .boil() method and TypeScript will complain. In the body of the prepareEntree() function, write a type guard using the in operator. Check if the 'boil' property exists on the entree variable. If it does, then return the value of entree.boil(), since that entree must be of type Pasta.
* Now we’d like to perform separate logic for an entree of type Meat, like steak. Instead of writing another separate type guard, add an else statement to the if conditional you wrote in the last step. Inside the else block, return the result of entree.panFry().

```ts
type Pasta = {
  menuName: string;
  boil: () => string;
};

type Meat = {
  menuName: string;
  panFry: () => string;
};

const fettuccine = {
  menuName: "Fettuccine",
  boil: () => "Heat water to 212 degrees",
};

const steak = {
  menuName: "New York Strip Steak",
  panFry: () => "Heat oil to 350 degrees",
};

function prepareEntree(entree: Pasta | Meat) {
  if ("boil" in entree) {
    return entree.boil();
  } else {
    return entree.panFry();
  }
}

console.log(prepareEntree(fettuccine));
```
  
# 30 - TYPE NARROWING: Narrowing After a Type Guard

In the editor, we’ve created a program that recycles variables of type Metal and Glass. The goal of the program is to sort out the trash of type Metal before the trash of type Glass.

Right now, the recycle() function calls the .melt() method on each piece of trash. Let’s give the recycle() function the ability to sort out pieces of trash of type Metal.

In the body of the recycle() function, write a type guard that checks if there is a .magnetize() method on the trash parameter. If there is, then return trash.magnetize(). Your type guard should appear above the trash.melt() call.

```ts
type Metal = {
  magnetize: () => string;
};

type Glass = {
  melt: () => string;
};

const iron = {
  magnetize: () => "Electromagnet activated",
};

const bottle = {
  melt: () => "Furnace set to 2,700 degrees",
};

function recycle(trash: Metal | Glass) {
  // Add your code below:
  if ("magnetize" in trash) {
    return trash.magnetize();
  }

  return trash.melt();
}

console.log(recycle(iron));
```
  
# 30 - TYPE NARROWING: Narrowing After a Type Guard

In the editor, we’ve created a program that recycles variables of type Metal and Glass. The goal of the program is to sort out the trash of type Metal before the trash of type Glass.

Right now, the recycle() function calls the .melt() method on each piece of trash. Let’s give the recycle() function the ability to sort out pieces of trash of type Metal.

In the body of the recycle() function, write a type guard that checks if there is a .magnetize() method on the trash parameter. If there is, then return trash.magnetize(). Your type guard should appear above the trash.melt() call.

```ts
type Metal = {
  magnetize: () => string;
};

type Glass = {
  melt: () => string;
};

const iron = {
  magnetize: () => "Electromagnet activated",
};

const bottle = {
  melt: () => "Furnace set to 2,700 degrees",
};

function recycle(trash: Metal | Glass) {
  // Add your code below:
  if ("magnetize" in trash) {
    return trash.magnetize();
  }

  return trash.melt();
}

console.log(recycle(iron));
```
  
# 31 - ADVANCED OBJECT TYPES: Interfaces and Types

STEP: 

* In the code editor, there’s a program that will show progress on a monthly running goal. This month’s running goal is 50 miles (~80km). The updateRunGoal() takes in a run argument and displays stats about this month’s running goal. This program works right now, but we need to add a type to run since run is of type any at the moment. At the top of index.ts, declare an interface named Run with one type member: miles: number;
* Apply the Run interface to the run parameter.
* In the terminal run tsc to compile your code.
* Finally, run node index.js in the terminal to see the output. You should see some stats about a monthly running goal.

```ts
// Write an interface here
interface Run {
  miles: number;
}

function updateRunGoal(run: Run) {
  console.log(`
Miles left:       ${50 - run.miles}
Percent of goal:  ${(run.miles / 50) * 100}% complete
  `);
}

updateRunGoal({
  miles: 5,
});
```
  
# 32 - ADVANCED OBJECT TYPES: Interfaces and Classes

STEP: 

* In the code editor, there’s a program that we’d like to type. The program is the beginning of a computer’s operating system and will allow its users to create directories (aka folders). Every directory on the operating system should be able to add a file. Declare an interface named Directory at the top of index.ts. Give it a method name, addFile, whose type is a function with one parameter, name, of type string and returns void.
* Using the implements keyword, apply Directory to the DesktopDirectory class.
* In the terminal run tsc to compile your code.
* Run node index.js in the terminal to see the output. You should see the output from our operating system program about adding and previewing files.

```ts
// Write an interface here
interface Directory {
  addFile: (name: string) => void;
}

class DesktopDirectory implements Directory {
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile("lesson-notes.txt");
Desktop.showPreview("lesson-notes.txt");
```
