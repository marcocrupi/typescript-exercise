# 21 - UNION TYPES: Defining Unions

STEP

* We’ve written a function that creates a custom version of console.log() named printNumsAndStrings(). If you hover over the printNumsAndStrings() function’s statement parameter, you’ll notice that TypeScript infers that statement has an any type. Let’s make this type more specific with a union. Add a union to the statement parameter with two type members: string and number.
* Now call the printNumsAndStrings() function twice, once with a number as its argument and once with a string its argument, then run your code.
* In the command line, run tsc to compile your code.
* Run node index.js to execute your compiled code. You should see the custom log messages from the printNumsAndStrings() function as the output.