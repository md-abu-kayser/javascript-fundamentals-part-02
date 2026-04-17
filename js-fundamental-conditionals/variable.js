/**
 * VARIABLE ==> container
 */

// number
var sunglassPrice = 80;

// string
var subject = "EEE";

// boolean
var passed = true;

/**
 * NAMING CONVENTION
 * 1. single word
 * 2. no quote
 * 3. no gap or dash
 * 4. can not start with number
 * 5. can not be a keyword
 * 6. prefer camelCase
 */

var lastExamResult = 89;

/**
 * OPERATION
 * 1. +, -, *, /, %
 * 2. +=, -=, *=, /=
 * 3. isNaN
 * 4. null
 * 5. Number
 */

/**
 * COMPARISON OPERATORS
 * Used to compare variables and return boolean values
 */

// Basic comparisons
let a = 5;
let b = 10;
let c = "5";

console.log("a =", a, "b =", b, "c =", c);
console.log("a > b:", a > b); // false
console.log("a < b:", a < b); // true
console.log("a >= 5:", a >= 5); // true
console.log("b <= 10:", b <= 10); // true

// Equality comparisons
console.log("a == c:", a == c); // true (loose equality)
console.log("a === c:", a === c); // false (strict equality)
console.log("a != c:", a != c); // false
console.log("a !== c:", a !== c); // true

// String comparisons
let str1 = "apple";
let str2 = "banana";
console.log("str1 < str2:", str1 < str2); // true (lexicographical order)

// Boolean comparisons
let bool1 = true;
let bool2 = false;
console.log("bool1 == true:", bool1 == true); // true
console.log("bool2 == false:", bool2 == false); // true
