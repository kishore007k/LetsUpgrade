// Calculator

var num1 = Number(window.prompt("Enter the first number: "));
var num2 = Number(window.prompt("Enter the second number: "));
var condition = window.prompt(`Enter any one of the following operations
1.for addition  
2.for subtraction  
3.for multiplication  
4.for division  
5.for squareroot 
6.for percentage `);



if (condition == '1') {
    let result = num1 + num2;
    console.log(`The number you entered is ${num1} & ${num2}. And the result is ${result}`);
} else if (condition == '2') {
    let result = num1 - num2;
    console.log(`The number you entered is ${num1} & ${num2}. And the result is ${result}`);
} else if (condition == '3') {
    let result = num1 * num2;
    console.log(`The number you entered is ${num1} & ${num2}. And the result is ${result}`);
} else if (condition == '4') {
    let result = num1 / num2;
    console.log(`The number you entered is ${num1} & ${num2}. And the result is ${result}`);
} else if (condition == '5') {
    let square_root1 = Math.sqrt(num1);
    let square_root2 = Math.sqrt(num2);
    console.log(`The number you entered is ${num1} & ${num2}. And the result is ${square_root1}, ${square_root2}`);
} else if (condition == '6') {
    let result = (num1 / num2) * 100;
    console.log(`The number you entered is ${num1} & ${num2}. And the result is ${result}`);
} else {
    console.log("Invalid input");
}