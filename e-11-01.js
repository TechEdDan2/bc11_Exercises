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

// #1 Given this function 
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function (num) {
        return num % 2 === 0
    });
}

//  Refactor it to use the rest operator & an arrow function:
/* Write an ES2015 Version */
const filterOutOddsUpdate = (...nums) => nums.filter(num => num % 2 === 0);

// #2 Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

const findMin = (...nums) => Math.min(...nums);

findMin(1, 4, 12, -3) // -3
findMin(1, -1) // -1
findMin(3, 1) // 1 


// #3 mergeObjects - Write a function called "mergeObjects" that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }) // {a:1, b:2, c:3, d:4}


// #4 doubleAndReturnArgs - Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...nums) => {
    return [...arr, ...nums].map(num => num * 2);
}

doubleAndReturnArgs([1, 2, 3], 4, 4) // [1,2,3,8,8]
doubleAndReturnArgs([2], 10, 4) // [2, 20, 8]

/** #5 Slice and Dice! - For this section, write the following functions using rest, spread and refactor these functions to be arrow functions! 
 
Make sure that you are always returning a new array or object and not modifying the existing inputs. */

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    // const newArr = [...items];
    let ranIndex = Math.floor(Math.random() * newArr.length);
    return [...items.slice(0, ranIndex), ...items.slice(ranIndex + 1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let updatedObj = { ...obj }
    updatedObj[key] = val;
    return updatedObj;
}


/** Return a new object with a key removed. use the delete operator */

const removeKey = (obj, key) => {
    let newObj = { ...obj };
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = {};
    newObj[key] = val;
    //console.log(newObj);
    return { ...obj, ...newObj }
}


//////////////////////////////////////////
//                                      //
// Exercise 04 - Object Enhancements    //
//                                      //
//////////////////////////////////////////

/**In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”. */

// #1
function createInstructor(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

/* Write an ES2015 Version */
function createInstructor2(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//   #2 Computed Property Names
var favoriteNumber = 42;

var instructor = {
    firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

/* Write an ES2015 Version */
var favoriteNumber2 = 42;

var instructorUpdate = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}



// #3 Object Methods
var instructor = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi!";
    },
    sayBye: function () {
        return this.firstName + " says bye!";
    }
}

/* Write an ES2015 Version */
var instructorUpdate = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

// #4 createAnimal function
/** Write a function which generates an animal object. The function should accepts 3 arguments:

- species: the species of animal (‘cat’, ‘dog’)
- verb: a string used to name a function (‘bark’, ‘bleet’)
- noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

Use one or more of the object enhancements we’ve covered. */
/* Write an ES2015 Version */
function createAnimal(species, verb, noise) {
    return {
        species,
        [noise]: verb,
        [verb]() {
            return noise;
        },
        makeNoise() {
            return `I make a ${noise} sound`;
        }
    }
}

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

//////////////////////////////////////////
//                                      //
// Exercise 05 - Destructuring          //
//                                      //
//////////////////////////////////////////

// Object Destructuring 1 - 3
// See HTML

// Array Destructuring 1 - 3
// See HMTL

/** ------------------------------------------------------------------------------- */
// ES2015 Refactoring - In this exercise, you’ll refactor some ES5 code into ES2015.
/** ------------------------------------------------------------------------------- */

// # 1 - ES5 Assigning Variables to Object Properties
// var obj = {
//     numbers: {
//         a: 1,
//         b: 2
//     }
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;

/* Write an ES2015 Version */
var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
let { numbers: { a, b } } = obj;

// # 2 - ES5 Array Swap

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

/* Write an ES2015 Version */
var arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]]

// # 3 - ## **raceResults()**

// Write a function called ***raceResults*** which accepts a single array argument. It should return an object with the keys ***first***, ***second***, ***third***, and ***rest***.

// - first: the first element in the array
// - second: the second element in the array
// - third: the third element in the array
// - rest: all other elements in the array

// **Write a *one line* function to make this work using**

// - An arrow function
// - Destructuring
// - `Enhanced` object assignment (same key/value shortcut)

// Standard Function 
// function raceResults([first, second, third, ...rest]) {
//     return {
//         first,
//         second,
//         third,
//         rest: [...rest]
//     }
// }


const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

//////////////////////////////////////////
//                                      //
// Exercise 06 - Maps and Sets          //
//                                      //
//////////////////////////////////////////

// #1 Has Duplicates Challenge - Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = arr => [...new Set(arr)].length !== arr.length;

hasDuplicate([1, 3, 2, 1]) // true
hasDuplicate([1, 5, -1, 4]) // false

// #2 Vowel Count challenge - Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string. 

const vowelCount = (str) => {
    const vMap = new Map();
    const vowels = 'aeiou';

    for (let ltr of str) {
        let lowerLtr = ltr.toLowerCase();
        if ('aeiou'.includes(lowerLtr)) {
            if (vMap.has(lowerLtr)) {
                vMap.set(lowerLtr, vMap.get(lowerLtr) + 1);
            } else {
                vMap.set(lowerLtr, 1);
            }
        }
    }
    return vMap;
};

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }