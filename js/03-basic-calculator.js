// IMPORT THE MODULE
//function calculateExpose
// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let userNum1 = parseInt(prompt("Hello, what is your first number? "));
let userNum2 = parseInt(prompt("What is your second number? "));

// CHECK TO SEE WHAT OPERATION THEY'RE USING
let operator;

while(true) {
    operator = prompt("What kind of operation do you want to perform? (either add, substract, multiply or divide) ");
    if (operator === "add" || operator === "substract" || operator === "multiply" || operator === "divide") {
        break;
    }
}

// CALL THE APPROPRIATE FUNCTION
console.log("Operation Choice: " + operator);
console.log("Number1: " + userNum1);
console.log("Number2: " + userNum2);


let operation = function (operator, number1, number2) {
    if (operator === "add") { 
        
            let result = number1 + number2;
            return result;
        
    }
    else if (operator === "substract") { 
        
            let result = number1 - number2;
            return result;
        
    }
    else if (operator === "multiply") { 
        
            let result = number1 * number2;
            return result;
        
    }
    else if (operator === "divide") { 
        
            let result = number1 / number2;
            return result;
     
    }
}
console.log("The result of your operation is: " + operation(operator, userNum1, userNum2));
