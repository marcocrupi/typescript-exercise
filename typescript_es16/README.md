# 16 - CUSTOM TYPES: Object Types

STEP:

* When we write functions, we like to give arguments explanatory names, which help the programmer using the function. For example, the arguments in function sayHappyBirthday(name, age) suggest that sayHappyBirthday('Cody', 10) will be valid input. However, sometimes you will encounter code where data is passed into a function by using an object, as with sayHappyBirthdayWithObject() in the code editor. The problem is, sayHappyBirthdayWithObject(personObject) is not very explanatory. Here, TypeScript can help us specify the exact properties that personObject should contain for the function to work. Add a type annotation to the personObject parameter that will ensure that the function will always receive an object with the required properties.
* The code editor defines the variable birthdayBabies without a type annotation. Please add in the correct type annotation yourself.