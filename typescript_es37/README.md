# 37 - ADVANCED OBJECT TYPES: Optional Type Members

When creating an app or website, it’s typical that some users might have a first name and last name set, while other users might only have a username. In the code editor, there’s a getUserName() function that checks if a user has both a first and last name. If they do, it returns their full name. If not, it will return their user’s username.

Currently the options parameter on getUserName() is of type any. Let’s give it a type.

Declare an interface at the top of the file named UserNameOptions. It should have three type members:

* firstName: an optional string.
* lastName: an optional string.
* username: a required string.

Apply the UserNameOptions type you created in the last step to the getUserName() function’s options parameter.

In the terminal run tsc to compile your code.

Run node index.js. You should see two formatted names appear.