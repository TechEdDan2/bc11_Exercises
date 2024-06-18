////////////////////////////////////
//                               //
// Exercise 01 - Let and Const   //
//                               //
///////////////////////////////////
// ES Global Constants - In this exercise, you’ll refactor some ES5 code into ES2015.
// var PI = 3.14;
// PI = 42; // stop me from doing this!

//Refactoring - since var is function-scoped, this should protect it. 
function fixOverWrite() {
    var PI = 3.14;
}
//PI = 4;//This will create a ReferenceError. 

/* Write an ES2015 Version */
const PI = 3.14;

// - What is the difference between var and let?
// - What is the difference between var and const?
// - What is the difference between let and const?
// - What is hoisting?


////////////////////////////////////
//                               //
// Exercise 02 - Arrow Functions //
//                               //
///////////////////////////////////

////////////////////////////////////
//                               //
// Exercise 03 - Rest / Spread   //
//                               //
///////////////////////////////////