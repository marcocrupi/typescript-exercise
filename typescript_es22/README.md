# 22 - UNION TYPES: Type Narrowing

STEP

* We’ve begun to write a function named formatValue() that should take in strings or numbers, then format them. Write a type guard that checks if the typeof value is a 'string'. If it is, then console.log() the string as a lowercase string with .toLowerCase().
* Inside the body of formatValue(), write another type guard that checks if value is a 'number'. If it is, then console.log() the number with two zeros after the decimal with .toFixed(2).