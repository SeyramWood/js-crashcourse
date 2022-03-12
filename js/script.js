// strings
let firstName = "John";
let lastName = "Doe";
let age = 21;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(
  "My name is" +
    " " + 
    firstName +
    " " +
    lastName +       
    " " +
    ". I am" +
    " " +
    age +
    "years old"
);
// console.log("I am" + " " + age + "years old");

// string intepolation
console.log(`My name is ${firstName} ${lastName} . I am ${age} years old`);

// Array
let fruits = ["Mango", "Pineapple", "Orange"];
console.log(fruits);
console.log(fruits[2]);
// console.log(fruits.length);
console.log(fruits.push("Banana"));
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift("Guava"));
console.log(fruits);

// includes
console.log(fruits.includes("Orange"));
console.log(fruits.join("-"));
