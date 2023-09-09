
                                              // chapter 3 \\
                                          // variables and number \\

// Q1.
// var age;
// age = "15 year old"
// alert(age);

// Q2.
                                          // Sir Question ka Answer Saylani Uzair//
// var visitCount = +localStorage.getItem("visitCount");
// console.log(visitCount);
// visitCount++;
// console.log(visitCount);
// localStorage.setItem("visitCount", visitCount);
// alert("You have visited this page" + visitCount + "times");
// alert(`You have visited this page ${visitCount} times`);


// var counterContainer = document.querySelector(".website-counter");
// var resetButton = document.querySelector("#reset");
// var visitCount = localStorage.getItem("page_view");

// // Check if page_view entry is present
// if (visitCount) {
//   visitCount = Number(visitCount) + 1;
//   localStorage.setItem("page_view", visitCount);
// } else {
//   visitCount = 1;
//   localStorage.setItem("page_view", 1);
// }
// counterContainer.innerHTML = visitCount; 

// // Adding onClick event listener
// resetButton.addEventListener("click", () => {
//   visitCount = 1;
//   localStorage.setItem("page_view", 1);
//   counterContainer.innerHTML = visitCount;
// });

const count = document.getElementById("count");

incrementVisitsCount();

function incrementVisitsCount() {
   let visits;
   if (!localStorage.getItem("visits"))  localStorage.setItem("visits", 1);
   else{
   visits = +localStorage.getItem("visits",);
   const incrementedCount = visits + 1;

   localStorage.setItem("visits", incrementedCount);

   }
   count.innerText = localStorage.getItem("visits");
}

// Q3.
// var birthyear = 2002;
// alert("My year is " + birthyear);

// var birthyear;
// document.getElementById("demo").innerHTML = 
// alert("my name is" + 45)

// var birthYear = 1990; // Replace 1990 with your actual birth year
// document.write("My birth year is " + birthYear);

// Q4.