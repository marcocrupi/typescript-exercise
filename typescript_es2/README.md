# 02 - FUNCTIONS: Parameter Type Annotations

STEP:

* The triple() function is meant to multiply a value by three. Add a type annotation to the value parameter to indicate that it’s meant to be a number.
* greetTripled() is meant to take in a string and a number. Add type annotations to its type parameters as well.
* Everything seems to look good. Let’s quickly compile our code and move on to the next exercise. To do this, simply run tsc in the terminal.
* Woah! TypeScript found a bug, thanks to our type annotations. It looks like greetTripled() is being called with the wrong types of arguments. Fix the code to print Hiya, 15!.