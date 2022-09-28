# 35 - ADVANCED OBJECT TYPES: Extending Interfaces

STEP: 

* In the editor, there’s code that defines a Developer interface and a me object. If you hover your mouse over the name property inside the me object, you’ll see a TypeScript error that the name property does not exist on Developer, which is true. While me is a Developer, we also want me to be Human, which should have name and hobbies properties. Let’s fix this code. Declare an interface named Human, and give it two type members: name typed as a string and hobbies typed as string[].
* Add the members from Human to the Developer interface using the extends keyword.
* Let’s see if the extends implementation worked. In the terminal run tsc to compile your code.
* Run node index.js in the terminal to see the output. The output should show the result of the code() method.
