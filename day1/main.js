
// Task1
console.log("JS is running sucessfuly");

//Task2
// window.alert("ready to practical"); 

// task3 
var productName = "laptop"
var price = 15000;
var isAvailable = true;

console.log(productName);
console.log(typeof productName);

console.log(price);
console.log(typeof price);

console.log(isAvailable);
console.log(typeof isAvailable);

// task4
document.getElementById("mainTitle").innerText = "paracrice time ";

// task5
var city = "cairo";
var countary = "Egypt";

console.log(city + "," + countary);

// task6
console.log(`location ${city} , ${countary}`);

// task7
var itemPrice = 120 ;
var quantity = 3 ;

console.log(400 - itemPrice * quantity );
console.log(itemPrice * quantity );
console.log(itemPrice / quantity );
console.log( itemPrice % quantity );
console.log( quantity ** 2 );

// task8
// var color =  prompt("Please enter your color");
// document.getElementById("fav-color").innerText= "your favourite colour is " + color ;

// Task9
var scoure = 20 ;
var textScoure  = "20" ;
// compare value 
console.log(scoure == textScoure);
// compare value and data type 
console.log(scoure === textScoure);

// task10
// var item = prompt("enter number of items");

// task11
var fruits = ["apple" , "banana" , "mango"] ;
console.log(fruits[1]);
fruits[1]= "orange" ;
console.log(fruits[1]);
fruits.push("grape");
console.log(fruits);

// task12
var course = {title:"amr" , hours:12 , level: 1}
course.title="mohamed"
console.log(course.hours)
console.log(course)

// task13
var hasAccount = true ;
var isVerfied = false ;

console.log(hasAccount && isVerfied);
console.log(hasAccount || isVerfied);
console.log(! isVerfied);

// task14
var balance = 50 ;

console.log(balance += 30);
console.log(balance *= 2);
console.log(balance -= 20);

// task15
// var hotel = prompt("enter hotel ");
// var nights = prompt("enter nights ");
// var confirm = prompt("enter confirm ");

// console.log(`hotel: ${hotel} , Nights: ${nights} , Confirmed: ${confirm}`);
// window.alert(`hotel: ${hotel} , Nights: ${nights} , Confirmed: ${confirm}`);


// task16
console.log(2 + 8 +"0");
// expect 100
console.log("2" + 8 +0);
// expect 280
console.log(2 + "8" +0);
// expect 280


// task17
var city1 = "alex";
var city2 = city1;
city2 = "Giza" ;
console.log(city1 , city2); 

var car1 = {brand:"toyta"}
var car2 = car1 ;
car2.brand="honda";
console.log(car1 , car2);

// task18
var mixedBag = ["mohamed" , 21 , true , null , undefined ,Object , []]
console.log(typeof mixedBag[0]);
console.log(typeof mixedBag[1]);
console.log(typeof mixedBag[2]);
console.log(typeof mixedBag[3]);
console.log(typeof mixedBag[4]);
console.log(typeof mixedBag[5]);
console.log(typeof mixedBag[6]);

// task19

// var name = prompt("enter name ");
// var Price = prompt("enter price ");
// var Confirm = prompt("enter confirm ");

// var result = name + Number(price) + confirm 
// console.log(result);
// window.alert(result);
// document.getElementById("result").innerText = result ;


