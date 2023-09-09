// Chapter 9-11 //

// Q1
// var ans = prompt("Please enter your name");
// alert("Hi," + ans);
// var city = prompt('Enter your city')
// if (city === 'karachi') {
//     alert('Welcome to city of light')
// }


// Q2

// var gender = prompt("Enter your Gender please?");
// // toUpperCase word first word Capital using ///
// if (gender.toUpperCase() == "male".toUpperCase()) {
//   alert("Good Morning Sir");
// } else if (gender.toUpperCase() == "female".toUpperCase()) {
//   alert("Good Morning Ma’am");
// } else if (gender.toLocaleUpperCase() == "shemale".toLocaleUpperCase())
// alert("Is not Define")

// Q3
// var color = prompt("Enter any color of traffic signal");
// if (color.toUpperCase() == "red".toUpperCase()) {
//   alert("MESAGE :" + "Vehicles must stop.");
// } else if (color.toUpperCase() == "yellow".toUpperCase()) {
//   alert("MESSAGE IS :" + " Vehicles should get ready to move.");
// } else if (color.toUpperCase() == "green".toUpperCase()) {
//   alert("MESSAGE IS :" + " Vehicles can move now.");
// }

// Q4
// Get the remaining fuel in the car from the user
// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in liters:"));

// // Check if the remaining fuel is less than 0.25 liters and display a message if so
// if (remainingFuel < 5) {
//     alert("Please refill the fuel in your car");
// }

// Q5
//  Question is not Solve

// Q6
//  Question is not Solve

// Q7
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//     console.log("Bingo! Correct answer.");
// } else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
//     console.log("Close enough to the correct answer.");
// } else {
//     console.log("Sorry, incorrect guess. The correct answer was " + secretNumber + ".");
// }

// Q8
// var number = parseInt(prompt("Enter a number:"));
// if (number % 3 === 0) {
//     console.log(number + " is divisible by 3.");
// } else {
//     console.log(number + " is not divisible by 3.");
// }

// Q9
// single value even hn 
// point Value odd hn
// var number = parseInt(prompt("Enter a number:"));
// if (number % 2 === 0) {
//     console.log(number + " is an even number.");
// } else {
//     console.log(number + " is an odd number.");
// }

// Q10
// var temperature = parseFloat(prompt("Enter the temperature in degrees Celsius:"));
// if (temperature > 40) {
//     console.log("It is too hot outside.");
// } else if (temperature > 30) {
//     console.log("The Weather today is Normal.");
// } else if (temperature > 20) {
//     console.log("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     console.log("OMG! Today’s weather is so Cool.");
// } else {
//     console.log("It's freezing cold outside!");
// }

// // Q11
// var firstNumber = parseFloat(prompt("Enter the first number:"));

// var secondNumber = parseFloat(prompt("Enter the second number:"));

// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;

// if (operation === "+") {
//     result = firstNumber + secondNumber;
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
// } else if (operation === "/") {
//     if (secondNumber === 0) {
//         result = "Division by zero is not allowed.";
//     } else {
//         result = firstNumber / secondNumber;
//     }
// } else if (operation === "%") {
//     if (secondNumber === 0) {
//         result = "Modulus by zero is not allowed.";
//     } else {
//         result = firstNumber % secondNumber;
//     }
// } else {
//     result = "Invalid operation.";
// }
// console.log("Result: " + result);


