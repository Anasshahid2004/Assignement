// Q1
// function performOperations() {
//    var number = parseFloat(document.getElementById('numberInput').value);

//    var additionResult = number + 10;
//    var subtractionResult = number - 5;
//    var multiplicationResult = number * 2;
//    var divisionResult = number / 3;

//    document.getElementById('additionResult').textContent = 'Addition Result: ' + additionResult;
//    document.getElementById('subtractionResult').textContent = 'Subtraction Result: ' + subtractionResult;
//    document.getElementById('multiplicationResult').textContent = 'Multiplication Result: ' + multiplicationResult;
//    document.getElementById('divisionResult').textContent = 'Division Result: ' + divisionResult;
// }

// Q1
// var counter = 9;
// counter = counter + 1;
// document.write("The value of a is : " + counter + "<br>" + "<br>");

// var counter = 10;
// counter++;
// console.log(counter);
// document.write("The value of ++a is : " + counter + "<br>") // 11
// document.write("Now the value of a is : " + counter + "<br>" + "<br>") //11

// var counter = 10;
// var returnValue = 11;
// var returnValue = counter++; // 10 + 1 = 11
// document.write("The value of a++ is : " + counter + "<br>");
// document.write("Now the value of a is : " + returnValue + "<br>" + "<br>");

// var a = 11;
// document.write("The value of a++ is : " + a + "<br>"); // 11
// var b = a++;
// document.write("Now the value of a is : " + a + "<br>" + "<br>"); // 12

// var a = 11;
// document.write("The value of --a is : " + a + "<br>"); // 11
// var b = a--;
// document.write("Now the value of a is : " + b + "<br>" + "<br>"); // 11

// var a = 11;
// document.write("The value of a++ is : " + a + "<br>"); // 11
// var b = --a;
// document.write("Now the value of a is : " + a + "<br>" + "<br>"); // 11

// Question 2 is not solve 
// Question 2 is not solve 
// Question 2 is not solve 
// Question 2 is not solve 

// Q3
// Prompt the user for their name
// var userName = prompt("Please enter your name:");

// // Check if the user entered a name
// if (userName !== null) {
//   // Greet the user
//   alert("Hello, " + userName + "! Welcome to our website.");
// } else {
//   // Handle the case where the user cancels the input
//   alert("You did not enter a name. Hello, guest!");
// }


// Q5
// var num = prompt("Enter Number", "0") //prompt user to enter the number
// var num = parseInt(num); //parse the num to number
// var i = 0;
// document.write('<table border="5" cellspacing="0">');

// //For Loops //

// for (i = 1; i < 10; i++) {
//   document.write("<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>");
// }

var userValue = prompt('table prompt')

if (userValue === null) {
  userValue = 5;
}

console.log(`
${userValue} X 1 = ${userValue * 1}
${userValue} X 2 = ${userValue * 2}
${userValue} X 3 = ${userValue * 3}
${userValue} X 4 = ${userValue * 4}
${userValue} X 5 = ${userValue * 5}
${userValue} X 6 = ${userValue * 6}
${userValue} X 7 = ${userValue * 7}
${userValue} X 8 = ${userValue * 8}
${userValue} X 9 = ${userValue * 9}
${userValue} X 10 = ${userValue * 10}
`)

// Q6

// // Prompt the user for a number
// var userInput = prompt("Enter a number for multiplication table:");

// // Convert the user input to a number
// var number = parseFloat(userInput);

// // If the user input is not a valid number or is not provided, use 5 as default
// if (isNaN(number)) {
//   number = 5;
// }

// // Display the multiplication table
// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//   document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// // Prompt the user for subject names
// var subject1 = prompt("Enter the name of subject 1:");
// var subject2 = prompt("Enter the name of subject 2:");
// var subject3 = prompt("Enter the name of subject 3:");

// // Total marks for each subject
// var totalMarks = 100;

// // Prompt the user for obtained marks in each subject
// var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
// var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

// // Calculate total marks and percentage for each subject
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// // Display the results in a table
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("</table>");
// document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
// document.write("<p>Total Percentage: " + totalPercentage.toFixed(2) + "%</p>");







