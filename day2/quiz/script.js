let year = Number(prompt("please enter the year"));
var age = 2026 - year ;
result = `${"your age is" } ${age}`
document.getElementById("age").innerText=  result ;

if (age >= 18){
    document.getElementById("person").innerText="person is adult"
}
else{
    document.getElementById("person").innerText="person is young"
}

