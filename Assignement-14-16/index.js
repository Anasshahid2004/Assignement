// Q1

// let studentNames = [];

// Q2

// var studentnames=new Array()

// Q3
// let fruit = ["Apple" , "mango" , "Lemon"];

//Q4
// let number = [1, 2, 3, 4, 5, 6];

//Q5
// let boolean = [true, false, true, false];

// Q6
// let array = ["taha", 22 , true, null, { names: "Anas"}];

// Q7
// let qualifications = ["SSC", "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL" , "PhD"];
// console.log(qualifications);

// Q8

// let studentNames = ["taha", "Ali", "Arooba"];
// let studentScore = [320, 230, 480];
// let totalMarks = 500;
// let studentPercentages = studentScore.map(score => (score / totalMarks) * 1)
// studentNames.forEach((name, index) => {
//     console.log(`${name}'s score: ${studentScore[index]}`);
//     console.log(`${name}'s percentage: ${studentPercentages[index]}%`);
//     console.log(); // Empty line for separation
//   });

// Q9

// var colorNames = [];

// // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// var input = prompt("What color you wants to add to the beginning?");
// colorNames.push(input);

// document.write("Updated array: " + colorNames + "<br/>");

// // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
// input = prompt("What color you wants to add to the end?");
// colorNames.push(input);

// document.write("Updated array: " + colorNames + "<br/>");

// // c. Add two more color to the beginning of the array.
// input = prompt("Add two more color to the beginning/nEnter first color: ");
// colorNames.unshift(input);
// input = prompt("Add two more color to the beginning/nEnter second color: ");
// colorNames.unshift(input);

// document.write("Updated array: " + colorNames + "<br/>");

// // d. Delete the first color in the array.
// colorNames.shift();

// document.write("Updated array: " + colorNames + "<br/>");

// // e. Delete the last color in the array
// colorNames.pop();

// document.write("Updated array: " + colorNames + "<br/>");

// // f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.
// var indexNo = +prompt("Which index you wants to add a color: ");
// input = prompt("Please enter your color name: ");
// colorNames.splice(indexNo, 0, input);

// document.write("Updated array: " + colorNames + "<br/>");

// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete
// indexNo = +prompt("At which index you wants to delete a color: ");
// var deleteCount = +prompt("how many colors you want to delete ");
// colorNames.splice(indexNo, deleteCount);

// document.write("Updated array: " + colorNames + "<br/>");

// Q10

// let studentScore = [320, 230, 480, 120];
// studentScore.sort();
// console.log(studentScore);

//Q11

// let cities = ["karachi", "Lahore", "Islamabad", "Quetta" , "Peshawar"];
// let selectedCities = cities.slice(2, 4);
// console.log(selectedCities);

// Q12
// var arr = ["This" , "is", "a", "cat"];
// var string = arr.join(" ");
// console.log(string);

// Q13
// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// var out;
// console.log(devices);

// Q14
// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// var out;
// console.log(devices);

// Q15
// var phoneManufacturers = [
//   "Apple",
//   "Samsung",
//   "Motorola",
//   "Nokia",
//   "Sony",
//   "Haier",
// ];
// var index = 0;
// document.write("<select>");
// document.write("<option>" + phoneManufacturers[index++] + "<option>");
// document.write("<option>" + phoneManufacturers[index++] + "<option>");
// document.write("<option>" + phoneManufacturers[index++] + "<option>");
// document.write("<option>" + phoneManufacturers[index++] + "<option>");
// document.write("<option>" + phoneManufacturers[index++] + "<option>");
// document.write("<option>" + phoneManufacturers[index++] + "<option>");
// document.write("</select>");
