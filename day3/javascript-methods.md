# JavaScript: String and Number Methods Guide

A comprehensive guide to the most essential and commonly used **String Methods** and **Number Methods** in JavaScript, complete with direct, practical code examples.

---

## 1. String Methods

In JavaScript, strings are indexed starting from `0`. Each character can be accessed via its index position.

### **A. Case Conversion**
* **`toUpperCase()`**: Converts the entire string to uppercase letters.
* **`toLowerCase()`**: Converts the entire string to lowercase letters.

```javascript
let text = "Hello World";

console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"
```

---

### **B. Trimming Spaces**
* **`trim()`**: Removes whitespace from both ends of a string (leaves inner spaces untouched).
* **`trimStart()` / `trimEnd()`**: Removes whitespace only from the beginning or only from the end.

```javascript
let name = "   Mohamed   ";

console.log(name.trim()); // "Mohamed"
```

---

### **C. Searching & Checking**
* **`includes(value)`**: Checks if the string contains a specified substring (returns `true` or `false`).
* **`startsWith(value)`**: Checks if the string begins with a specified substring.
* **`endsWith(value)`**: Checks if the string ends with a specified substring.
* **`indexOf(value)`**: Returns the index of the first occurrence of a substring, or `-1` if not found.
* **`lastIndexOf(value)`**: Returns the index of the last occurrence of a substring.

```javascript
let str = "JavaScript is awesome";

console.log(str.includes("Script")); // true
console.log(str.startsWith("Java")); // true
console.log(str.endsWith("cool"));   // false
console.log(str.indexOf("a"));        // 1 (first 'a')
console.log(str.lastIndexOf("a"));    // 3 (last 'a')
```

---

### **D. Extraction & Splitting**
* **`slice(start, end)`**: Extracts a section of a string from `start` index up to (but not including) `end` index. Accepts negative values to count from the end.
* **`substring(start, end)`**: Similar to `slice`, but does not accept negative indices.
* **`split(separator)`**: Splits a string into an array of substrings based on a specified delimiter.

```javascript
let msg = "Frontend Developer";

console.log(msg.slice(0, 8));     // "Frontend"
console.log(msg.slice(-9));       // "Developer" (counts from end)

let tags = "html,css,javascript";
let tagsArray = tags.split(",");  // ["html", "css", "javascript"]
```

---

### **E. Replacing & Repeating**
* **`replace(old, new)`**: Replaces the first match of a pattern with a replacement substring.
* **`replaceAll(old, new)`**: Replaces all matches of a pattern within the string.
* **`repeat(count)`**: Returns a new string with a specified number of copies appended together.

```javascript
let code = "Learn JS, JS is good";

console.log(code.replace("JS", "JavaScript"));    // "Learn JavaScript, JS is good"
console.log(code.replaceAll("JS", "JavaScript")); // "Learn JavaScript, JavaScript is good"

console.log("Hi! ".repeat(3)); // "Hi! Hi! Hi! "
```

---

## 2. Number Methods

JavaScript provides methods attached directly to Number instances, as well as utility functions on the global `Number` and `Math` objects.

### **A. Formatting & Conversion**
* **`toFixed(digits)`**: Formats a number using fixed-point notation (returns a **String** and rounds automatically).
* **`toString()`**: Converts a number into a string representation.

```javascript
let price = 19.8564;
let age = 22;

console.log(price.toFixed(2)); // "19.86" (rounded to 2 decimals)
console.log(age.toString());   // "22"
```

---

### **B. Parsing Strings to Numbers**
* **`Number.parseInt(text)`**: Parses a string argument and returns an integer (reads leading digits and ignores trailing non-digit characters).
* **`Number.parseFloat(text)`**: Parses a string argument and returns a floating-point number.
* **`Number(text)`**: Converts an entire value to a number (returns `NaN` if non-numeric characters exist).

```javascript
let strInt = "100px";
let strFloat = "12.55em";
let strNum = "50";

console.log(Number.parseInt(strInt));     // 100
console.log(Number.parseFloat(strFloat)); // 12.55
console.log(Number(strNum));              // 50
console.log(Number(strInt));             // NaN (Not a Number)
```

---

### **C. Validation Methods**
* **`Number.isNaN(value)`**: Determines whether the passed value is `NaN`.
* **`Number.isInteger(value)`**: Determines whether the passed value is an integer.

```javascript
console.log(Number.isNaN("Hello" * 5)); // true
console.log(Number.isInteger(10));       // true
console.log(Number.isInteger(10.5));     // false
```

---

### **D. Mathematical Utility Methods (`Math` Object)**
Built-in functions for performing common mathematical operations:

* **`Math.round(x)`**: Rounds a number to the nearest integer.
* **`Math.floor(x)`**: Rounds a number downwards to the nearest integer.
* **`Math.ceil(x)`**: Rounds a number upwards to the nearest integer.
* **`Math.abs(x)`**: Returns the absolute value of a number (converts negative to positive).
* **`Math.max(a, b, c...)` / `Math.min(...)`**: Returns the highest or lowest value among provided arguments.

```javascript
console.log(Math.round(4.7));    // 5
console.log(Math.floor(4.9));    // 4
console.log(Math.ceil(4.1));     // 5
console.log(Math.abs(-15));      // 15
console.log(Math.max(5, 12, 8)); // 12
```
