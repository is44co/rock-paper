// For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of
//  three print Fizz instead of the number and for the multiples
//   of five print Buzz. For numbers which are multiples of both 
//   three and five print FizzBuzz.
// function computer(){
// let computerChoice=Math.floor(Math.random()*3);
// let userChoice=prompt("Choose, Rock,Paper,Scissors"," ")


let userPoints=0;
let compPoint=0;


function computerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let computer = computerChoice(); 
computerChoice();
function playRound() {


 
    let userChoice = prompt("choose rock or paper or scissors", "");
  if (
    (userChoice === "rock" && computerChoice() === "scissors") ||
    (userChoice === "paper" && computerChoice() === "rock") ||
    (userChoice === "scissors" && computerChoice() === "paper")
  ) {
    userPoints++;
  console.log (
      "you choose " +
      userChoice +
      " and the computer choice  is " +
      computerChoice() +
      " so you win"
    );


  } else if (userChoice === computerChoice()) {
  console.log( "its A draw");
  } else {
    compPoint++;
   console.log (
      "you choose " +
      userChoice +
      " and the computer choice  is " +
      computerChoice() +
      " so you lost"
    );
 
  
}
}
while (compPoint < 5 && userPoints < 5) {
  playRound();
}
if (userPoints === 5) {
  console.log("Congratulations! You won the game!");
} else if (compPoint === 5) {
  console.log("Sorry, you lost the game.");
}








