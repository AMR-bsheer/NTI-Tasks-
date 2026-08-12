// task1

function multiply (x,y){
    return x*y ;
}

function calculate (num1 , num2 , operation ){
    return operation(num1 , num2);
    
}



function displayResult (result){
    console.log(result);
}

var result = calculate(7,9,multiply)

displayResult(result);


// task2

function greet (){
    console.log("hello user !")
}

setTimeout(greet, 3000)


var count = 10 ;

var timer = setInterval( function(){
    console.log(count);
    count-- ;

    if (count == 0 ){
        console.log("times up")
        clearInterval(timer) // stop repeating 
    }

},1000) // each reapeat after 1 secnd

// clear after 5 seconds 
var myTimeout = setTimeout(function() {
    console.log("This will be cleared after 5 seconds");
}, 5000);


clearTimeout(myTimeout);