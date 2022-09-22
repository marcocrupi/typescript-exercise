// function sayHappyBirthdayWithObject(personObject){
//   let output ='';
//   output += 'Happy Birthday '
//          + personObject.name + '! ';
//   output += 'You are now ' 
//          + personObject.age + ' years old! ';
//   output += 'Your birthday wish was to receive ' 
//          + personObject.giftWish 
//          + '. And guess what? You will ';
//   if (!personObject.success){
//     output += 'not ';
//   }
//   output += 'receive it! \n';
//   console.log(output);
// }
// let birthdayBabies = [
//   {name: 'Liam', age: 0, giftWish: 'karate skills', success: false}, 
//   {name: 'Olivia', age: 0, giftWish: 'a bright future', success:true}, 
//   {name: 'Ava', age: 0, giftWish: '$0.25', success:true}
// ]; 
// birthdayBabies.forEach(sayHappyBirthdayWithObject);
function sayHappyBirthdayWithObject(personObject) {
    var output = "";
    output += "Happy Birthday " + personObject.name + "! ";
    output += "You are now " + personObject.age + " years old! ";
    output +=
        "Your birthday wish was to receive " +
            personObject.giftWish +
            ". And guess what? You will ";
    if (!personObject.success) {
        output += "not ";
    }
    output += "receive it! \n";
    console.log(output);
}
var birthdayBabies = [
    { name: "Liam", age: 0, giftWish: "karate skills", success: false },
    { name: "Olivia", age: 0, giftWish: "a bright future", success: true },
    { name: "Ava", age: 0, giftWish: "$0.25", success: true },
];
birthdayBabies.forEach(sayHappyBirthdayWithObject);
