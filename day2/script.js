// NTI – Day 2 | JavaScript Practice Tasks
// task1
// for (let i = 0; i<=10 ; i++){
//     console.log(i);
// }

// task2
// for (let i =1  ; i<=20 ; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// task3
// var total = 0;
// for(i=1 ; i<=15 ; i++){
//     total += i;
// }
// console.log("total sales =" + total);
// document.getElementById("total-sales").innerHTML = "Total Sales: " + total;

// task4
// i = 1;
// while (i<=7) {
//     console.log(i);
//     i++;
// }


// task5
// i = 10 ;
// while (i>=0){
//     console.log(i);
//     i--;
// }
//     console.log(" time ended");

// task6

// let i = 1;  
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// task7
// var itemsInCart = 10;

// while (itemsInCart < 5) {
//     console.log("start shopping)");
// }

// do {
//     console.log("start shopping"); 
// } while (itemsInCart < 5);

// // task8
// var userName = "Ali";
// var userAge = 22;
// var isStudent = true;

// console.log(userName + " " + typeof(userName));
// console.log(userAge + " " + typeof(userAge));
// console.log(isStudent + " " + typeof(isStudent));

// // task9
// var dbPrice = 10;
// var inputPrice = "10";
// // compare value only 
// console.log(dbPrice == inputPrice); // true 
// // compare value and data type
// console.log(dbPrice === inputPrice); // false

// task10
// var name = prompt("Enter your name");
// console.log(`Welcome, ${name}!`);
// window.alert("hello"+ " " +name);

// task11
// items = Number(prompt("Enter the number of items in your cart:"));
// console.log(items + " " + typeof(items) );
// console.log(parseInt(items)+ " " + typeof(parseInt(items)));
// console.log(  +items + " " + typeof(+items)  );

// task12
// var a = 10 ;
// var b = 3 ;

// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a % b); // 1
// console.log(a ** b); // 1000

// task13
// age = Number(prompt("Enter your age:"));

// if (age >= 18) {
//     console.log("you can enter ");
// } 
// else {
//     console.log("sorry , underage");
// }

// task14
// grade = Number(prompt("Enter your grade:"));

// if (grade >= 90) {
//     console.log("A");
// }
// else if (grade >= 80) {
//     console.log("B");
// }
// else if (grade >= 70) {
//     console.log("C");
// }
// else if (grade >= 60) {
//     console.log("D");
// }
// else  {
//     console.log("F");
// }

// task15
// age = Number(prompt("Enter your age:"));
// var message = (age >= 18) ? "adult" :  "minor" ;
// console.log(message);

// task16
// today = prompt("Enter the day of the week:").toLowerCase();

// switch (today.toLowerCase()) {
//     case "friday":
//         console.log("It's the weekend!");
//         break;
//     case "saturday":
//         console.log("default");
//         break;
//     case "sunday":
//         console.log("default");
//         break;
//     case "monday":
//         console.log("default");
//         break;
// }   

// task17

// item = Number(prompt("Enter a number:"));

// for (let i = 1; i <= 10; i++) {
//     let result = item * i;
//     console.log(`${item} x ${i} = ${result}`);
// }   

// task18
// let fileSize = Number(prompt("Enter the file size:"));

// if (fileSize > 0) {

//     for (let i = 1; i <= fileSize; i++) {
//         console.log(i);
//     }
// } else {

//     console.log("Invalid file size");
// }

// task19
// startNumber = Number(prompt("Enter the starting number:"));
// endNumber = Number(prompt("Enter the ending number:"));

// for (let i = startNumber; i <= endNumber; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " express");
//     }
//     else {
//         console.log(i + " normal");
//     }
// }

// task20
// studentName = ["amr", "aser", "abd-allah", "hazem", "marwan"];

// for (let i = 0; i < studentName.length; i++) {
//     console.log(`student ${i+1} : ${studentName[i]}`);
// }

// task21
// let totalSales = 0;

// for (let i = 1; i <= 5; i++) {
//     day = Number(prompt("Enter the sales for day " + i + ":"));
//     totalSales += day;
// }
// let averageSales = totalSales / 5;
// console.log("Total Sales: " + totalSales);
// console.log("Average Sales: " + averageSales);

// task22
// let correctPin = "1234";

// for (let i = 1; i <= 3; i++) {
//     let userPin = prompt("Enter your PIN:");
//     if (userPin === correctPin) {
//         console.log("login successfully");
//         break;
//     }
//     else {
//         console.log("Incorrect PIN. Try again.");
//     }
// }

// task23
// let hasAccount = true;
// let isVerified = false;

// console.log(hasAccount && isVerified); // false
// console.log(hasAccount || isVerified); // true
// console.log(!hasAccount); // false

// if (hasAccount && isVerified) {
//     console.log("welcome to your account");
// }   
// else if (hasAccount && !isVerified) {
//     console.log("please verify your account");
// }   
// else if (!hasAccount) {
//     console.log("please sign up");
// }

// task24
// var a = 40; 
// var b = 50; 
// var c = "60"; 
// var d = 30; 
// var e = 30; 
// console.log(a + b + Number(c) + d + e);

// result = a + b + Number(c) + d + e;
// if (result >= 20) {
//     for (let i = 1; i <= result; i++) {
//         console.log(i);
//     }
// }
// else {
//         console.log("Too big to print line by line");
//     }

// task25
// n= Number(prompt("Enter a number:"));

// if (n < 0) {
//     console.log("invalid input");
// }
// else{
//     let fact = 1; 
    
//     for (let i = 1; i <= n; i++) {
//         fact *= i; // fact = fact * i
//     }
//     console.log(`5! = ${fact}`); 
//     window.alert(`5! = ${fact}`);
// }
