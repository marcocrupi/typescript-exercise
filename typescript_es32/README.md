# 32 - ADVANCED OBJECT TYPES: Interfaces and Classes

STEP: 

* In the code editor, there’s a program that we’d like to type. The program is the beginning of a computer’s operating system and will allow its users to create directories (aka folders). Every directory on the operating system should be able to add a file. Declare an interface named Directory at the top of index.ts. Give it a method name, addFile, whose type is a function with one parameter, name, of type string and returns void.
* Using the implements keyword, apply Directory to the DesktopDirectory class.
* In the terminal run tsc to compile your code.
* Run node index.js in the terminal to see the output. You should see the output from our operating system program about adding and previewing files.