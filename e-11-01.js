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
// ES5 Mapp Callback
function double(arr) {
    return arr.map(function (val) {
        return val * 2;
    });
}

/* Write an ES2015 Version */
//  Refactor the above code to use two arrow functions. Turn it into a one-liner.
function newDouble(arr) {
    return arr.map(val => val * 2);
}




// ES5 Version
function squareAndFindEvens(numbers) {
    var squares = numbers.map(function (num) {
        return num ** 2;
    });
    var evens = squares.filter(function (square) {
        return square % 2 === 0;
    });
    return evens;
}

// Replace ALL functions with arrow functions:
const newSquareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);

////////////////////////////////////
//                               //
// Exercise 03 - Rest / Spread   //
//                               //
///////////////////////////////////