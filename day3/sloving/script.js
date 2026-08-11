// task 1
// function formatFullName(inputName) {

//     let trimmedName = inputName.trim();


//     let formattedName = trimmedName
//         .split(/\s+/) 
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//         .join(' ');


//     let charCount = formattedName.replaceAll(' ', '').length;


//     console.log("Formatted Name:", formattedName);
//     console.log("Character Count (without spaces):", charCount);
// }


// formatFullName("   ahMed   eLsayed   ");




// task2

// var email = prompt("enter your email :");

// if (email.includes("@") && email.endsWith(".com") && !email.startsWith("@") && !email.includes(" ")) {
//     console.log(" vaild Email");
// }
// else {
//     console.log(" Invalid Email");
// }



// task 3

// let text = prompt("enter the text:");
// let char = prompt("enter the charcter:");

// let lowerText = text.toLowerCase();
// let lowerChar = char.toLowerCase();

// let count = 0 ;

// for ( i=0 ; i <= lowerText.length ; i++){
//     if (lowerText[i] == lowerChar){
//         count++
//     }
// }

// // console.log("the charcter"+ char + "appers" + count + "times");
// console.log(`The character '${char}' appears ${count} times.`);



// task4

// var sentence = prompt("enter your sentence :"); 
// var targetWord = prompt("enter your targeted Word :");


// var replaceWord = sentence.replace(targetWord,"***");

// console.log(replaceWord);



//task 5 

// let firstName = prompt("enter your first name ");
// let lastName = prompt("enter your last name ");

// var username = (firstName + "." + lastName).toLowerCase().replaceAll(" ", "");

// if (username.length > 15 ){
//     console.log(username.slice(0,15));
// }
// else{
//     console.log(username);
// }


// task6

// var sentence = prompt("enter the sentence :");
// var word = prompt("enter the word :");

// if (sentence.includes(word)){
//     console.log(true);
//     console.log(sentence.indexOf(word));
//     console.log(sentence.lastIndexOf(word));

//     var count = sentence.split(word).length - 1;
//     console.log(count);
// }
// else{
//     console.log(false);
// }


// task7

// var sentence = prompt("Enter a sentence:");
// var words = sentence.split(" ");
// var result = [];


// for (var word of words) {
//     var reversedWord = "";
    
//     for (var char of word) {
//         reversedWord = char + reversedWord; 
//     }
    
//     result.push(reversedWord);
// }


// console.log(result.join(" "));



// task 8 with ai help (تقيلة اوي دي يا هندسة)
// var text = prompt("Enter a text:");


// var words = text.split(" ").filter(function(word) {
//     return word !== "";
// });


// var charsNoSpaces = text.replaceAll(" ", "").length;


// var vowels = "aeiouAEIOU";
// var vowelsCount = 0;
// var digitsCount = 0;
// var upperCount = 0;
// var lowerCount = 0;


// for (var i = 0; i < text.length; i++) {
//     var char = text[i];


//     if (vowels.includes(char)) {
//         vowelsCount++;
//     }

//     if (char >= '0' && char <= '9') {
//         digitsCount++;
//     }

//     if (char >= 'A' && char <= 'Z') {
//         upperCount++;
//     }

//     if (char >= 'a' && char <= 'z') {
//         lowerCount++;
//     }
// }


// var longestWord = words[0] || "";
// var shortestWord = words[0] || "";

// for (var j = 0; j < words.length; j++) {
//     if (words[j].length > longestWord.length) {
//         longestWord = words[j];
//     }
//     if (words[j].length < shortestWord.length) {
//         shortestWord = words[j];
//     }
// }


// console.log("Words count: " + words.length);
// console.log("Characters (no spaces): " + charsNoSpaces);
// console.log("Vowels: " + vowelsCount);
// console.log("Digits: " + digitsCount);
// console.log("Uppercase letters: " + upperCount);
// console.log("Lowercase letters: " + lowerCount);
// console.log("Longest word: " + longestWord);
// console.log("Shortest word: " + shortestWord);




// task9

// var phoneNumber = prompt("enter your phone number");

// if (phoneNumber.length >= 7) {
//     var firstPart = phoneNumber.slice(0, 4);  
//     var lastPart = phoneNumber.slice(-3); 
//     // console.log(phoneNumber.length);  
//     var hiddenCount = phoneNumber.length - 7; //  hidden numbers = stars 
    
    
//     var stars = "*".repeat(hiddenCount);
    
    
//     console.log(firstPart + stars + lastPart);
// } else {
//     console.log("Phone number is too short!");
// }

