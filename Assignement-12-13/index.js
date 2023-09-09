// logical opeartor

// 1. Lgical && Operator
// 2. Falsy values (false, 0, "", null)
// Truthy values
// if statement//
// 3.Truthy values (true, any, number greater than 0, any stringf that is not empty)

// 3. 
// Q1
// // Get the input character from the user
// const inputChar = prompt("Enter a character:");
// // Check if the input is a single character
// if (inputChar.length === 1) {
//     // Get the ASCII code of the character
//     const asciiCode = inputChar.charCodeAt(0);

//     // Check if the ASCII code corresponds to a number
//     if (asciiCode >= 48 && asciiCode <= 57) {
//         console.log("The input is a number.");
//     }
//     // Check if the ASCII code corresponds to an uppercase letter
//     else if (asciiCode >= 65 && asciiCode <= 90) {
//         console.log("The input is an uppercase letter.");
//     }
//     // Check if the ASCII code corresponds to a lowercase letter
//     else if (asciiCode >= 97 && asciiCode <= 122) {
//         console.log("The input is a lowercase letter.");
//     }
//     else {
//         console.log("The input is not a number, uppercase letter, or lowercase letter.");
//     }
// }
// else {
//     console.log("Please enter a single character.");
// }

// Q2
// const firstInteger = parseInt(prompt("Enter the first integer:"));
// const secondInteger = parseInt(prompt("Enter the second integer:"));

// if (!isNaN(firstInteger) && !isNaN(secondInteger)) {
//   if (firstInteger === secondInteger) {
//     console.log("Both integers are equal.");

//   } else if (firstInteger > secondInteger) {
//     console.log(`The larger integer is: ${firstInteger}`);

//   } else {
//     console.log(`The larger integer is: ${secondInteger}`);

//   }
// } else {
//   console.log("Please enter valid integers.");
// }

// Q3
// const num = parseInt(prompt("Enter the number"));
// if (!isNaN(num)) {
//     if (num > 0) {
//         console.log("The number is positive.");
//     } else if (num < 0) {
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }
// } else {
//     console.log("Please enter a vaild number.");
// }

// const character = prompt("Enter the character (a single letter)")
	
// if (character.length === 1) {
//     const lowerCaseChar = character.toLowerCase();
//     // the character is a vowel (a, e, i, o, or u)
//     if (lowerCaseChar === 'a' || lowerCaseChar === 'e' || lowerCaseChar === 'i' || lowerCaseChar === 'o' || lowerCaseChar === 'u') {
//         console.log("The character is a vowel: true")
//     } else {
//         console.log("The character is avowel: false")
//     }
// } else {
//     console.log("Please enter a single character.")
// }
