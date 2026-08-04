// Gather Employee Data

let name = prompt("enter your name : ");
let age = Number(prompt("enter your age :"));
let yearsExp = Number(prompt("enter your years of experience :"));

// Determine Job Category
let jobCategory = "";

if (yearsExp<2){
    jobCategory = "junior";
}
else if (yearsExp<5 && yearsExp>=2 ){
    jobCategory = "Mid-level";
}
else if (yearsExp<=10 && yearsExp>=5){
    jobCategory = "Senior";
}
else if (yearsExp > 10){
    jobCategory = "Expert";
}
console.log("Job Category: " + jobCategory);

// Check Performance Level
let performanceLevel = "";

switch (true) {
    case yearsExp >= 9 :
        performanceLevel = "excellent";
        break;
    case yearsExp === 7 || yearsExp === 8:
        performanceLevel = "good";
        break;
    case yearsExp === 5 || yearsExp === 6:
        performanceLevel = "average";
        break;
    case yearsExp < 5 :
        performanceLevel = "need improvement";
        break;
    default:
        performanceLevel = "invalid input";
        break;
}
console.log("Performance Level: " + performanceLevel);

// Salary Calculation

let baseSalary = 20000;
let bonus = 0;
let finalSalary = 0;

if (yearsExp >=0 && yearsExp <= 2){
    bonus = 0.1 * baseSalary;
    finalSalary = baseSalary + bonus
    console.log("final salary is : " + finalSalary)
}
else if (yearsExp >= 3 && yearsExp <= 5){
    bonus = 0.15 * baseSalary;
    finalSalary = baseSalary + bonus
    console.log("final salary is : " + finalSalary)
}
else if (yearsExp > 5){
    bonus = 0.2 * baseSalary;
    finalSalary = baseSalary + bonus
    console.log("final salary is : " + finalSalary)
}
else{
    console.log("invalid input")
}


// Work Shift Time Calculation

let workShift = "";

let currentHour = new Date().getHours();

if (currentHour >= 9 && currentHour < 18) {
    workShift = "Day shift";
} else {
    workShift = "Night shift";
}
console.log("Work Shift: " + workShift);

// Summary Output Report
window.alert("Final Salary: " + " " +finalSalary);
document.getElementById("total-salary").innerHTML = "Final Salary: " + finalSalary;
document.getElementById("name").innerHTML = "Name: " + name;
document.getElementById("age").innerHTML = "Age: " + age;
document.getElementById("yearsExp").innerHTML = "Years of Experience: " + yearsExp;
document.getElementById("performance").innerHTML = "Performance Level: " + performanceLevel;
document.getElementById("jobCategory").innerHTML = "Job Category: " + jobCategory;
document.getElementById("workShift").innerHTML = "Work Shift: " + workShift;
