// Q1

// var  num1 = 3;
// var num2 = 5;

// // add 2 numbers
// var sum = num1 + num2;

// // display the sum
// document.write("Sum of " + num1 + " and " + num2 + " is : " + sum);

// Q2
// var anas1 = 100;
// var anas2 = 5;

// // Subtraction
// var SubtractionResult = anas1 - anas2;
// document.write("Subtraction Result: " + SubtractionResult + "<br>");
// // Multiplication
// var multiplicationResult = anas1 * anas2;
// document.write("Multiplication Result: " + multiplicationResult + "<br>");
// // Division
// var divisionResult = anas1 / anas2;
// document.write("Division Result: " + divisionResult + "<br>");
// // modulus
// var additionResult = anas1 + anas2;
// document.write("Addition Result: " + additionResult + "<br>");

// Q3a
//   var taha;

// Q3b
  // Declare a variable and assign a value
  // var myVariable;
  // Display the value in the browser
  // var anasElement = document.getElementById("anas");
  // anasElement.textContent = "Value after variable declaration is: " + myVariable;
  
// Q3c
//   Initialize the variable with a number
  var myVariable = 5;
//   Display the value in the browser
  var InitialElement = document.getElementById("Initial");
  InitialElement.textContent = "Initial value : " + myVariable;

// Q3d
   var myVariable = 4;

   var initialElement = document.getElementById("initial");
   initialElement.textContent = "inital value : " + myVariable;

// // Q3e / f
   var myVariable = 5;

   myVariable = myVariable + 1;

   var IncrementElement = document.getElementById("Increment");
   IncrementElement.textContent = "Value after increment is : " + myVariable
// // Q3h
   var myVariable = 5;
   var valueToAdd = 8;

   myVariable = myVariable + valueToAdd;

   var AddValueElement = document.getElementById("AddValue");
   AddValueElement.textContent = "Value after addition is : " + myVariable;
// // Q3i / j
    // Initialize the variable with a number
   var myVariable = 13
   
   // Decrement the variable
   myVariable = myVariable - 1; // You can also use the shorthand: myVariable--;
   
   // Display the updated value in the browser
   var minusValueElement = document.getElementById("minusValue");
   minusValueElement.textContent = "Value after decrement is :" + myVariable;

// // Q3k / l
    // Initialize the variable with a number
    var myVariable = 9
   
    // Decrement the variable
    myVariable = myVariable % 1; 
    
    // Display the updated value in the browser
    var remainderElement = document.getElementById("remainder");
    remainderElement.textContent = "The remainder is : " + myVariable;

// // Q4
    // Ticket price in PKR
   var ticketPrice = 600;

   // Number of tickets to buy
   var numberOfTickets = 5; 

   // Calculate the total cost
   var totalCost = ticketPrice * numberOfTickets;

   // Display the cost in the browser
   var outputElement = document.getElementById("output");
   outputElement.textContent = "The cost of buying " + numberOfTickets + " tickets is " + totalCost + " PKR.";

// // Q5
   // Get the number for which to generate the multiplication table
   var number = 7; // You can change this to any number

   // Generate and display the multiplication table
   var table = "<h2>Q5 :Multiplication Table of " + number + "</h2>";
   //   using for loop
   for (var i = 1; i <= 10; i++) {
     var result = number * i;
     table += number + " × " + i + " = " + result + "<br>";
   }

   var outputElement = document.getElementById("output");
   outputElement.innerHTML = table;

// // Q6
    // Celsius to Fahrenheit Conversion
    var celsiusTemp = 25 ;
    var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
    var outputElement = document.getElementById("output1");
    outputElement.innerHTML += celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>";

    // Fahrenheit to Celsius Conversion
    var fahrenheitTemp2 = 77;
    var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
    outputElement.innerHTML += fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C";

// //Q7
    // Store the prices and quantities of items
    var priceItem1 = 25.99;
    var priceItem2 = 15.49;
    var quantityItem1 = 3;
    var quantityItem2 = 2;

    // Shipping charges
    var shippingCharges = 5.99;

    // Calculate the total cost of items
    var totalCostItems = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2);

    // Calculate the total cost including shipping charges
    var totalCostWithShipping = totalCostItems + shippingCharges;

    // Display the receipt in the browser
    var outputElement = document.getElementById("output2");
    outputElement.innerHTML = `
        Price of Item 1: $${priceItem1}<br>
        Quantity of Item 1: ${quantityItem1}<br>
        Price of Item 2: $${priceItem2}<br>
        Quantity of Item 2: ${quantityItem2}<br>
        Shipping Charges: $${shippingCharges}<br>
        <hr>
        Total Cost of Items: $${totalCostItems}<br>
        Total Cost with Shipping: $${totalCostWithShipping}`;

// // Q8
   // Store total marks and marks obtained by the student
   var totalMarks = 980;
   var marksObtained = 804;

   // Calculate the percentage
   var percentage = (marksObtained / totalMarks) * 100;

   // Display the result in the browser
   var outputElement = document.getElementById("output3");
   outputElement.textContent = "Percentage obtained: " + percentage.toFixed(2) + "%";


// // Q9
    // Given exchange rates
    var usdToPkrRate = 295;
    var sarToPkrRate = 78.66;

    // Initial amounts
    var usdAmount = 100;
    var sarAmount = 250;

    // Convert amounts to Pakistani Rupees
    var totalPkr = (usdAmount * usdToPkrRate) + (sarAmount * sarToPkrRate);

    // Display the result in the browser
    var outputElement = document.getElementById("output4");
    outputElement.textContent = "Total currency in Pakistani Rupees: " + totalPkr.toFixed(1) + " PKR";
// // Q10
    // Initialize the variable with a number
    var initialNumber = 7;

    // Perform arithmetic operations in a single expression
    var result = ((initialNumber + 5) * 10) / 2;

    // Display the result in the browser
    var outputElement = document.getElementById("output5");
    outputElement.textContent = "Result of arithmetic operations: " + result;

// //  Q11
     // Store the current year and birth year
     var currentYear = 2023; // You can update this to the current year
     var birthYear = 1990;   // You can update this to the birth year

     // Calculate possible ages
     var age1 = currentYear - birthYear;
     var age2 = age1 - 1;

     // Display the ages in the browser
     var outputElement = document.getElementById("output6");
     outputElement.textContent = "They are either " + age1 + " or " + age2 + " years old.";
// //Q12a
     // Store the radius of the circle
     var radius = 5; // You can update this to the desired radius

     // Calculate properties of the circle
     var circumference = 2 * Math.PI * radius;
     var area = Math.PI * radius * radius;

     // Display the properties in the browser
     var outputElement = document.getElementById("output7");
     outputElement.innerHTML = `
         Radius of the circle: ${radius}<br>
         Circumference of the circle: ${circumference.toFixed(2)}<br>
         Area of the circle: ${area.toFixed(2)}`;

// // Q12b
        // Store the radius of the circle
        var radius = 7; // You can update this to the desired radius

        // Calculate the circumference of the circle
        var circumference = 2 * 3.142 * radius;

        // Calculate the area of the circle
        var area = 3.142 * radius * radius;

        // Display the results in the browser
        var outputElement = document.getElementById("output8");
        outputElement.innerHTML = `
            The circumference is ${circumference.toFixed(2)}<br>
            The area is ${area.toFixed(2)}
        `; 

    // Question no: 13 is not solve 
    var favourite_snack = "pringles"
    var current_age = 15;
    var Quantity = 3;
    var total_snacks = (max_age_current);
    document.write("Favourite Snacks ");
