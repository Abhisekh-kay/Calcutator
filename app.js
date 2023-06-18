let  previousValue= '';
let operand= '';
let currentValue= '';

document.addEventListener("DOMContentLoaded", function(){
    // Store all components of HTML in JS
    let clear = document.querySelector("#clear-btn");
    let decimal = document.querySelector(".decimal");
    let equal = document.querySelector(".equal");

    let numbers = document.querySelectorAll(".number");
    let operands = document.querySelectorAll(".operand");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operands.forEach((op) => op.addEventListener("click", function(e){
        handleOperand(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operand; 
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operand = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function(){
        if(currentValue != '' && previousValue != ''){
        calculate()
        previousScreen.textContent = '';
        if(previousValue.length <= 5){
            currentScreen.textContent = previousValue;
        }else{
            currentScreen.textContent = previous.slice(0,5) + "...";
        }
        }
        
    })

    decimal.addEventListener("click", function(){
        addDecimal();
    })

})

function handleNumber(num){
    if (currentValue.length <=6){
         currentValue += num;
    }
}


function handleOperand(op){
    operand = op;
    previousValue = currentValue;
    currentValue = '';
}


function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operand === '+'){
        previousValue += currentValue    
    }

    if (operand === '-'){
        previousValue -= currentValue    
    }

    if (operand === '*'){
        previousValue *= currentValue    
    }

    if (operand === '/'){
        previousValue /= currentValue    
    }
    
    previousValue = roundNumber(previousValue);
    console.log(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
        
}

function roundNumber(num){
    return Math.round(num *1000) / 1000;
}

function addDecimal(){
    if(currentValue.includes(".")){
        currentValue += ".";
    }
}