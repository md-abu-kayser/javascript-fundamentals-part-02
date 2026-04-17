// Original nested example
const money = -10;
if (money > 300) {
  console.log("bro you are rich!!!");
} else {
  if (money > 100) {
    console.log("tui gorib o na boro lok o na");
  } else {
    if (money > 0) {
      console.log("dosto kola kha.calcium bara");
    } else {
      console.log("tui amar bondhu na. ");
    }
  }
}

console.log("\n--- More Examples ---\n");

// Multi-level if-else if-else
let score = 85;
console.log("Score:", score);
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Nested if-else with proper indentation
let age = 25;
let hasID = true;
let isVIP = false;

console.log("\nAge:", age, "Has ID:", hasID, "VIP:", isVIP);
if (age >= 18) {
  if (hasID) {
    if (isVIP) {
      console.log("VIP access granted");
    } else {
      console.log("Regular access granted");
    }
  } else {
    console.log("ID required for entry");
  }
} else {
  console.log("Must be 18 or older");
}

// Ternary operator examples
console.log("\n--- Ternary Operator Examples ---\n");

let temperature = 75;
let weather = temperature > 80 ? "Hot" : temperature > 60 ? "Warm" : "Cool";
console.log("Temperature:", temperature, "°F - Weather:", weather);

let userRole = "admin";
let accessLevel =
  userRole === "admin" ? "Full" : userRole === "moderator" ? "Partial" : "None";
console.log("User role:", userRole, "- Access level:", accessLevel);

// Logical NOT examples
console.log("\n--- Logical NOT Examples ---\n");

let isLoggedIn = false;
let userName = "";

if (!isLoggedIn) {
  console.log("Please log in to continue");
}

if (!userName) {
  console.log("Username is required");
}

let items = [];
if (!items.length) {
  console.log("Cart is empty");
}

// Double NOT for boolean conversion
console.log("Boolean conversions:");
console.log("!!0:", !!0); // false
console.log("!!1:", !!1); // true
console.log("!!'':", !!""); // false
console.log("!!'hello':", !!"hello"); // true
console.log("!!null:", !!null); // false
console.log("!!undefined:", !!undefined); // false
