# 28 - TYPE NARROWING: Using in with Type Guards

STEP:

* In the code editor, there are two types: Cat and Fish. Underneath the types are variables for each: siameseCat and bettaFish. Finally, there’s a move() function that takes a pet as its argument. Ultimately, we want the move() function to call the correct movement method on pet. Currently our code has a TypeScript error because we’re calling .run() on pet inside the move() function. Let’s fix it. Start by writing a type guard using in inside the move() function that checks if 'run' exists on pet. If it does, then return the value of pet.run().
* The previous checkpoint takes care of Cat types. Now let’s handle Fish types. Write another type guard using the in operator inside the body of the move() function. This type guard should check if the property 'swim' exists on pet. If it does, then return pet.swim().
* Run tsc in the terminal to compile your code. There should be no errors, even though methods we called on pet do not exist on both Cat and Fish types, since TypeScript was able to type narrow.
* Run your compiled code with node index.js. You should see pitter pat as the output if you called move() with siameseCat or bubble blub if you called move() with bettaFish.