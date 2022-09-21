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
