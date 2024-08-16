


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








