# 12 - ARRAYS: Rest Parameters

STEP:

* The code editor includes another function using rest parameters. The function, addPower(p, ...numsToAdd), adds up the pth powers of all the subsequent arguments. So the call addPower(2, 3, 4) returns 25, since 3 squared plus 4 squared is 25. (Here, we are using the exponentiation operator **.) Please add the appropriate type annotations for this function. Include the annotations for all arguments and the return type.
* There is no such thing as a number to the power of 'a string'. Verify that the function results in a type error when you add the code addPower('a string', 4, 5, 6) and run tsc.
