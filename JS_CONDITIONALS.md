# Fundamental Concepts of Conditionals

## Explore & explain in detail these topics with AI:

### 1. Compare variables and Comparison operator

Comparison operators are used to compare two values and return a boolean result (true or false). They are essential for making decisions in code.

**Comparison Operators:**

- `==` : Equal to (loose equality, type coercion)
- `===` : Strict equal to (no type coercion)
- `!=` : Not equal to (loose inequality)
- `!==` : Strict not equal to
- `>` : Greater than
- `<` : Less than
- `>=` : Greater than or equal to
- `<=` : Less than or equal to

**Examples:**

```javascript
let a = 5;
let b = "5";

console.log(a == b); // true (loose equality)
console.log(a === b); // false (strict equality)
console.log(a != b); // false
console.log(a !== b); // true
console.log(a > 3); // true
console.log(a < 10); // true
```

**Interview Tip:** Always prefer `===` and `!==` over `==` and `!=` to avoid unexpected type coercion issues.

### 2. Introduction to Conditionals

Conditionals allow your program to make decisions and execute different code paths based on certain conditions. They evaluate expressions that result in boolean values.

**Why use conditionals?**

- Control program flow
- Handle different scenarios
- Validate input
- Implement business logic

**Basic Structure:**

```javascript
if (condition) {
  // code to execute if condition is true
}
```

### 3. If_else statement (visualization)

The if-else statement provides two paths: one for when the condition is true, and another for when it's false.

**Syntax:**

```javascript
if (condition) {
  // code if true
} else {
  // code if false
}
```

**Visualization:**

```
Condition?
   ├── True → Execute if block
   └── False → Execute else block
```

**Example:**

```javascript
let age = 18;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}
```

### 4. Conditional branching if Else Condition

Conditional branching refers to the ability to execute different blocks of code based on multiple conditions. The if-else structure allows for branching logic.

**Example:**

```javascript
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

### 5. Multiple condition Logical Operators(&&, ||)

Logical operators combine multiple conditions:

- `&&` (AND): Both conditions must be true
- `||` (OR): At least one condition must be true
- `!` (NOT): Negates the condition

**Truth Tables:**

```
&& (AND):
true && true = true
true && false = false
false && true = false
false && false = false

|| (OR):
true || true = true
true || false = true
false || true = true
false || false = false
```

**Examples:**

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Can drive");
}

if (age < 18 || !hasLicense) {
  console.log("Cannot drive");
}
```

### 6. Multi level If-else if-else condition

Multi-level if-else if-else chains allow checking multiple conditions in sequence. The first true condition's block executes.

**Syntax:**

```javascript
if (condition1) {
  // code
} else if (condition2) {
  // code
} else if (condition3) {
  // code
} else {
  // default code
}
```

**Example:**

```javascript
let temperature = 75;
if (temperature > 90) {
  console.log("Hot");
} else if (temperature > 70) {
  console.log("Warm");
} else if (temperature > 50) {
  console.log("Cool");
} else {
  console.log("Cold");
}
```

### 7. Nested if-else condition

Nested if-else statements are if-else structures inside other if-else blocks. They allow for complex decision trees.

**Example:**

```javascript
let age = 20;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("Welcome!");
  } else {
    console.log("Need ID");
  }
} else {
  console.log("Too young");
}
```

**Interview Tip:** Avoid deep nesting (>3 levels) as it reduces readability. Consider using early returns or switch statements.

### 8. If-else shorthand Ternary Operator

The ternary operator is a shorthand for simple if-else statements. It returns a value based on a condition.

**Syntax:**

```javascript
condition ? valueIfTrue : valueIfFalse;
```

**Examples:**

```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

let max = a > b ? a : b;
```

**Interview Tip:** Use ternary for simple assignments. Avoid complex expressions or side effects in ternary operators.

### 9. Logical Not Operator

The logical NOT operator (`!`) negates a boolean value. It converts truthy values to false and falsy values to true.

**Falsy values:** false, 0, "", null, undefined, NaN
**Truthy values:** Everything else

**Examples:**

```javascript
let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please log in");
}

let name = "";
if (!name) {
  console.log("Name is required");
}
```

**Double NOT (`!!`):** Converts any value to its boolean equivalent.

```javascript
console.log(!!0); // false
console.log(!!"hello"); // true
```
