alert("Welcome to my calculator app!");


const firstNumber = prompt("What's your first number?");
const firstNumberInt = parseInt(firstNumber);
const secondNumber = prompt("What's your second number?");
const secondNumberInt = parseInt(secondNumber);
const operator = prompt("What ooperation would you like to use, addition (+), subtraction (-), multiplication (*) or division (/)? Input the correct character to choose.");

switch (operator) {
    case '+':
        const additionResult = firstNumberInt + secondNumberInt;
        alert("The result of the addition is: " + additionResult);
        break;
    case '-':
        const subtractionResult = firstNumberInt - secondNumberInt;
        alert("The result of the subtraction is: " + subtractionResult);
        break;
    case '*':
        const multiplicationResult = firstNumberInt * secondNumberInt;
        alert("The result of the multiplication is: " + multiplicationResult);
        break;
    case '/':
        const divisionResult = firstNumberInt / secondNumberInt;
        alert("The result of the division is: " + divisionResult);
        break;
    default:
        alert("Error: No valid operator");
        break;
}

alert("Thank you for using my calculator app!");
