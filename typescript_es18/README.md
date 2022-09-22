# 18 - CUSTOM TYPES: Function Types

STEP:

* First, try to understand what’s been written in the code editor. We have defined several functions representing math operations. The function mathTutor() is meant to take one of these function names as an argument: the functions are used as callbacks. Try it out by adding the code mathTutor(multiply) and clicking the “Run” button. Finally, see if it gives you the expected result by running tsc and then node index.js in the terminal.
* Why do we need to bother with function types at all? Well, you can easily demonstrate that mathTutor() does not work well with some callbacks. What if a co-worker accidentally used the callback wrongAdd(), which returns a string rather than a number? Find out by adding the code mathTutor(wrongAdd), then run the program as before.
* Using wrongAdd() as the callback gave strange results, because mathTutor() attempted to add a string and a number. Luckily, function types can help prevent this kind of problem. Create a type alias called OperatorFunction which has a function type compatible with add() through divide(), but not compatible with wrongAdd(). Then, write a type annotation for mathTutor()‘s argument using OperatorFunction.
* Finally, make sure that TypeScript throws errors when it sees mathTutor(wrongAdd). To do this, transpile and run the program as before.