# 23 - UNION TYPES: Inferred Union Return Types

In the editor, we have a User type that describes a user. In addition, there’s a function named createUser() that randomly returns a user or an error message (we’re simulating a call to a server that might fail). We’d like to call the createUser() function, then store its response in a typed variable.

Declare a variable named userData that stores the returned value of createUser(). Then, go back and provide userData with the correct union type.