
// ========== 1. Why do we use loops? ==========
// Loops repeat code without writing it many times.

// for (var i= 0 ; i < 10 ; i++ ){
//     console.log( i+1);
// }


// Without a loop (hard to maintain):
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);



// ========== 2. for loop ==========
// Use when you know how many times to repeat.
// Syntax: for (start; condition; update) { ... }

// Example 1: count from 1 to 5
// console.log("=== for: count 1 to 5 ===");
// for (var i = 1; i <= 500; i++) {
//   console.log(i);
// }


// Example 2: print even numbers from 2 to 10
// console.log("=== for: even numbers ===");

// Example 3: sum numbers from 1 to 10
// console.log("=== for: sum 1 to 10 ===");
// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//   sum += i; // same as: sum = sum + i
// }
// console.log("Sum =", sum);


// ========== 3. while loop ==========
// Use when you repeat while a condition is true.
// Remember to update the variable inside, or it loops forever.

// Example 1: count from 1 to 5 with while
// console.log("=== while: count 1 to 5 ===");
// var j = 1;
// while (j <= 5) {
//   console.log(j);
//   j++;
// }

// Example 2: countdown from 5 to 1
// console.log("=== while: countdown ===");
// var count = 5;
// while (count >= 1) {
//   console.log(count);
//   count--;
// }


// ========== 4. do...while loop ==========
// Runs the code at least once, then checks the condition.
// Difference: while may run 0 times; do...while always runs once.
// Example 1: count from 1 to 5
// console.log("=== do...while: count 1 to 5 ===");
// var k = 1;
// do {
//   console.log(k);
//   k++;
// } while (k <= 5);

// Example 2: condition is false from the start
// while does nothing; do...while still runs once
// console.log("=== do...while vs while when condition is false ===");
// var x = 10;
// while (x < 5) {
//   console.log("while runs:", x); // does not run
// }


// do {
//   console.log("do...while runs at least once:", x); // runs once
//   x++;
// } while (x < 5);


// ========== 5. break and continue ==========
// break    → stop the loop completely
// continue → skip this turn and go to the next one

// Example 1: break — stop when i is 3
// console.log("=== break ===");
// for (var i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break; // exit the loop completely
//   }
//   console.log(i); // 1, 2
// }
// console.log("complete loop");

// Example 2: continue — skip number 3
// console.log("=== continue: skip 3 ===");
// for (var i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i); // 1, 2, 4, 5
// }

// Example 3: continue — print only odd numbers
// console.log("=== continue: odds only ===");
// for (var i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }


// ========== 6. for...of loop (for arrays) ==========
// Use to get each value in an array easily.
// Gives you the value directly (not the index).
// for (var i = 0; i < nums.length; i++) {
//     console.log("nums[",i,"] = ",nums[i]);
    
// }

// var nums = [10, 20, 30, 40, 50];
// for (var item of nums){
//     console.log("item = ",item);
    
// }
// Example 1: list of fruits
// console.log("=== for...of: fruits ===");
// var fruits = ["apple", "banana", "cherry"];
// for (var fruit of fruits) {
//   console.log(fruit);
// }

// Example 2: grades and average
// console.log("=== for...of: grades average ===");
// var grades = [85, 90, 78, 92];
// var total = 0;
// for (var grade of grades) {
//   total += grade;
//   console.log("Grade:", grade);
// }
// console.log("Average:", total / grades.length);


// ========== 7. for...in loop (for objects) ==========
// Use to loop over the keys in an object.
// Tip: for arrays, prefer for or for...of.

// Example 1: student object
// console.log("=== for...in: student object ===");
// var student = { name: "Ahmed", age: 25, grade: "A" };
// for (var key in student) {
//   console.log(key);
//   console.log( student[key]);
// }

// Example 2: count object properties
// console.log("=== for...in: count properties ===");
// var car = { brand: "Toyota", model: "Corolla", year: 2020 };
// var propCount ;
// for (var key in car) {
//   propCount++;
// }
// console.log("Number of properties:", propCount);

// console.log(typeof NaN); // Output: "number"    



// ========== 8. Nested loops ==========
// A loop inside another loop (tables, grids, patterns).

// Example 1: multiplication table 1 to 5
// console.log("=== nested for: multiplication table ===");
// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 12; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     // console.log(i + " * " + j  + " = " + i*j);
    
//   }
//   console.log("---");
// }

// Example 2: simple stars pattern
// console.log("=== nested for: stars pattern ===");
// for (var row = 1; row <= 5; row++) {
//   var line = "";
//   for (var col = 1; col <= row; col++) {
//     line += "* ";
//   }
//   console.log(line);
// }


// ========== 9. Practice challenges ==========
// Use what you learned: for / while / break / arrays / strings

// Challenge 1: factorial — 5! = 5*4*3*2*1
// console.log("=== challenge: factorial ===");
// var n = 5;
// var factorial = 1;
// for (var i = 1; i <= n; i++) {
//   factorial *= i;
// }
// console.log(n + "! =", factorial);

// Challenge 2: search for a name in an array
// console.log("=== challenge: search in array ===");
// var names = ["Sara", "Omar", "Laila", "Hassan"];
// var target = "Laila";
// var found = false;
// for (var name of names) {
//   if (name === target) {
//     found = true;
//     break;
//   }
// }
// console.log(target, found ? "was found" : "was NOT found");

// Challenge 3: count vowels (a, e, i, o, u) in a word
// console.log("=== challenge: count vowels ===");
// var word = "JavaScript";
// var vowels = "aeiou";
// var vowelCount = 0;
// for (var letter of word.toLowerCase()) {
//   if (vowels.includes(letter)) {
//     vowelCount++;
//   }
// }
// console.log('Vowels in "' + word + '":', vowelCount);
