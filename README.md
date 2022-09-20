# TYPESCRIPT EXERCISES

Typescript exercises that I solved.

## 01 - Variable Type Annotations

STEP:

* The phoneNumber variable is meant to be able to store non-numeric characters (for compatibility with international phone numbers). Add a type declaration to inform TypeScript that it should be a string.
* Use the tsc command to check the file for type errors.
* Error! It looks like one of the values assigned to phoneNumber isn’t valid. Fix that value per TypeScript’s type complaints. (And notice that the randomness introduced by Math.random() has no impact on whether TypeScript finds the type error.)

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
