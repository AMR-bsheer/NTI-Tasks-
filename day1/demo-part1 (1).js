/* introduction 
    == UI Developer vs Frontend Developer 
    ui > html , css , js  x
    front end > html , css , js , (react , vue , angular ) 2x
    == why Java Script
       - detect user event  
       - validation ( sql injection )
       - database connections 
    ==  fields JS 
        -
        -
        -
    == Where write code java script
        -
        -
        - 
    == I P O ( )    
    


*/


// ========== OUTPUT METHODS ==========

// 1. Alert

// window.alert("Welcome to JavaScript!");

// 2. Modify HTML content
// console.log("h1 >> ",document.getElementById("mainTitle"));
// document.getElementById("mainTitle").innerText = "Ali "

// console.log(document.getElementById("mainTitle"));

// document.getElementById("mainTitle").innerText = "Hello from JavaScript file";

// 3. Console log
// console.log("hello");


// 4. Write to document (not recommended in real apps)
// document.write("<h3>JS wrote this directly in the document.</h3>");
// document.write("<p>JS wrote this directly in the document.</p>");

// ========== VARIABLES AND DATA TYPES ==========

// Primitive Types

  /** naming conventions
   * 
   * camelCase  >>  lastName
   * snak_case >> last_name
   * PascalCase >> LastName >> oop (classes)
   * 
   */
  // strongly typed language >> need to define data type 
  // loosely typed language >> no need to define data type
//   var  firstName = "Ali";
//   console.log(typeof firstName);
  



// var name = "ahmed";   
// console.log(typeof name);

// var age = 25.555 ;
// console.log(age);
// console.log(typeof age); // number

// var first_name ="mohamed"
// var age2 ='22'
// console.log( first_name); // 


// var isStudent = true;   // false 
// console.log(typeof isStudent);

// var score = null; 
// console.log(typeof score);  // object

// var score2 ;      
// console.log(typeof score2);
// score2 = 55;

// document.getElementById("mainTitle").innerText = score2;
// var x= 5;
// var y= "5";
// console.log(typeof x);
// console.log(typeof y);

// console.log(x == y);  
// console.log(x === y);  

// var col1 ="red";
// col1 = "green" //  immutable 
// col1 = "blue"


// Non-Primitive Types  mutable  


// var colors = ["red", "green",true , 25 ,undefined , null , {fName : "AHMED"} , [1,2,3,4]];  // array

// colors[0]="blue";
// console.log(colors);

// var arr1 = [1,"ss",{name:"wsdf"},[22,44],true];
// console.log(typeof undefined);



// var person = { name: "Sara", age: 25};
// person.name ="Ali";
// console.log(person);

// // console.log(name, age, isStudent, score, grade);
// console.log(colors[2]); // red

// console.log(person.age); // 25
// function displayInfo( name ){
//   console.log(name);
// }

// displayInfo("Ahmed");
// var age = window.prompt("please enter your age");
// console.log(typeof parseInt(age));
// console.log(typeof Number(age));
// console.log(typeof +age);

// console.log("your age = ",age);
// document.getElementById("mainTitle").innerText ="your age = "+  age ;
// var name=window.prompt("Please enter Name");
// console.log("welcome : "+ name);

// console.log(`Welcome : ${name}`);

// var fName = "ahmd";
// fName = "ahmed";
// console.log(fName[2]);
// fName.push("d")  // ERROR 
// console.log(fName);

// var numbers = [1,2,3,4];
// numbers.push(5)
// console.log(numbers);

// var name1 ="youssif";
// var name2 =name1 ;
// name2 = "samy"
// console.log(name1);
// console.log(name2);
// var user1 ={name:"ahmed"};
// var user2 = user1 ;
// user2.name = "samy"
// console.log("user1 = ",user1);
// console.log("user2 = ",user2);


// var user2 =Object.assign({},user1) ;
// user2.name ="samy";
// console.log(user2);
// console.log(user1);




// ========== CONCATENATION (+) ==========


// var firstName = "Ali";
// var lastName = "Hassan";
// var fname = firstName + " " + lastName; // Old way
// console.log(fname);
// var welcomeMessage ="hello" +" "+ firstName + " " + lastName; // Old way
// console.log( welcomeMessage);

// var modernFullName = `${firstName} ${lastName}`; // Template literals
// console.log(modernFullName);

// console.log(`Full Name (template): ${modernFullName}`);
// var x = "5";
// var y = 4;
// var result = x + y;
// console.log(result);

// var result2 = y + x;
// console.log(result);
// console.log(result2);
// console.log( Number(x) + y);  
// console.log( parseInt(x)  +y);
// console.log(+x + y);



// = Number(x) + y
// = +x + y
// parseInt(x)

// var w =10 ;
// var q = 20 ;
// var r = "30";
// var y = 40 ;
// var z =50 ;
// console.log(w + q + r + y + z);  // 30304050

// var result = (w + q) + r + (y +z ); // 303090 
// console.log(result);  // 303090



// ========== OPERATORS ==========

// Arithmetic

var a = 10, b = 3;
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b); // Modulus 
// console.log("a ** b =", a ** b); // Power

// Comparison
// console.log(5 == "5");  
// console.log(5 === "5"); 
// console.log(5 != 6);     
// console.log(5 > 3);     

// Logical
// var isAdult = true;
// var hasTicket = false;
// console.log(isAdult && hasTicket); 
// console.log(isAdult || hasTicket); 
// console.log(!isAdult);

// Assignment
// var num = 20;
//  num -= 10; // num = num - 10
// console.log(num);


// num =  num + 10
// num += 10;
// num *= 2;
// console.log("Final num:", num);


// ========== IPO EXAMPLE ==========

// function sayWelcome(){
//     var inputElm = document.getElementById("username");
//     var message = `Welcome, ${inputElm.value}!`;
//     document.getElementById("result").innerText = message;
    
// }

// var isGraduated=confirm("graduated ?");
// console.log("isGraduated : ",isGraduated);


// ========== PRACTICE ACTIVITY ==========
// Ask user for input, then summarize
//Name: (yourName), Age: $(yourAge)


// var fname = "Ali";
// var lname = "hassan";
// var fullName = fname + " " +lname  // old way 
// var fullName = `hello  ${fname} ${lname}`
// console.log(fullName);




// var yourName = prompt("What is your name?");
// var yourAge = prompt("How old are you?");

// var isStudentPrompt = confirm("Are you a student?");
// console.log(isStudentPrompt);

// var summary = `Name: ${yourName}, Age: ${yourAge}, Student: ${isStudentPrompt}`;
// alert(summary);
// console.log(summary);

