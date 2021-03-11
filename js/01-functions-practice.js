//STEP 1
//Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and 
//return the result. It should log a string like "Half of 5 is 2.5.".

// function halfNumber(num) { 
//   let result = num / 2;
//   return result;
// }
// let num = 5;
// console.log ("Half of " + num + " is " + halfNumber(num));

//STEP 2
//Write a function called squareNumber() that accepts one argument (a number), square that number, 
//and return the result. It should also log a string like "The result of squaring the number 3 is 9."

// function squareNumber(num) {
//   let result = num * num;
//   return result; 
// }
// let num = 3;
// console.log ("The result of squaring the number " + num + " is " + squareNumber(num));

//STEP 3
//Write a function called percentOf() that accepts two numbers, figure out what percent the first 
//number represents of the second number, and return the result. It should log a string like "2 is 50% 
//of 4."

// function percentOf(num1, num2) {
//     let result = (num1 / num2) * 100;
//     return result;
// }
// let num1 = 2;
// let num2 = 4;
// console.log ( num1 + " is " + percentOf(num1, num2) + "%" + " of " + num2);

//STEP 4
//Write a function called findModulus() that accepts two numbers. Within the function write a 
//statement that returns the modulus of the first and second parameters. It should log a string like "2 
//is the modulus of 4 and 10."

// function findModulus(num1, num2) {
//     let result = num1 % num2;
//     return result;
// }
// let num1 = 10;
// let num2 = 4;
// console.log (findModulus(num1, num2) + " is the modulus of " + num2 + " and " + num1);

//STEP 5
//Create a JavaScript function that accepts a certain amount of numbers as parameters. Those 
//numbers should be collected using a prompt and the numbers should be delimited by commas. Once
//the values are collected, find the sum of all of the numbers combined. You will need to use a 
//function, loop, arguments object, and several type conversion global functions to accomplish 
//this task.

function numbersCombined(numbers) {
    sumnum = 0;
    for (let val of numbers) {
        console.log(val);
        result = parseInt(val);
        sumnum += result;
    }
    return sumnum;
}
let parameters = prompt("Hello, what are your parameters from 2 to 10 (please, separate them by commas) ? ");
numbers = parameters.split(',');
console.log(numbers);
console.log (" The sum of your numbers is " + numbersCombined(numbers));
