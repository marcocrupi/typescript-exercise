# 29 - TYPE NARROWING: Narrowing with else

STEP:

* In the code editor, there’s a function named prepareEntree() that takes an argument named entree. This function should provide instructions on how to prepare two kinds of dishes, either Meat or Pasta entrees (for the particularly famished, we could prepare both). Currently our code is calling .boil() on every entree. This method call is an issue because entrees of type Meat do not have a .boil() method and TypeScript will complain. In the body of the prepareEntree() function, write a type guard using the in operator. Check if the 'boil' property exists on the entree variable. If it does, then return the value of entree.boil(), since that entree must be of type Pasta.
* Now we’d like to perform separate logic for an entree of type Meat, like steak. Instead of writing another separate type guard, add an else statement to the if conditional you wrote in the last step. Inside the else block, return the result of entree.panFry().