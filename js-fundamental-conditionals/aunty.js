/**
 * COMPARISON OPERATORS
 * 1. bigger: >
 * 2. less: <
 * 3. equal: ==
 * 4. greater than or equal: >=
 * 5. less than or equal: <=
 * 6. not equal: !=
 * 7. strict equal: ===
 * 8. strict not equal: !==
 *
 * -------------------
 * LOGICAL OPERATORS
 * 9. and: &&
 * 10. or: ||
 * 11. not: !
 */

// Comparison examples
let age = 25;
let minAge = 18;
let maxAge = 65;

console.log("Age comparisons:");
console.log("age > minAge:", age > minAge); // true
console.log("age < maxAge:", age < maxAge); // true
console.log("age >= 25:", age >= 25); // true
console.log("age <= 30:", age <= 30); // true

// Logical AND (&&) - both conditions must be true
console.log("\nLogical AND (&&):");
console.log("age >= 18 && age <= 65:", age >= 18 && age <= 65); // true
console.log("age >= 30 && age <= 65:", age >= 30 && age <= 65); // false

// Logical OR (||) - at least one condition must be true
console.log("\nLogical OR (||):");
console.log("age < 18 || age > 65:", age < 18 || age > 65); // false
console.log("age < 30 || age > 65:", age < 30 || age > 65); // true

// Logical NOT (!)
console.log("\nLogical NOT (!):");
let isStudent = false;
console.log("!isStudent:", !isStudent); // true
console.log("!!age:", !!age); // true (double not converts to boolean)

// Complex conditions
let hasLicense = true;
let isSober = true;
let weatherGood = false;

console.log("\nComplex conditions:");
console.log("Can drive:", hasLicense && isSober && weatherGood); // false
console.log("Can walk or drive:", hasLicense || !weatherGood); // true
