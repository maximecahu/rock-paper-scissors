/*
User inputs choice of rock or paper or scissors
Computer randomly selects an option from rock paper scissors
if userInput == computerInput then no winner
if userInput = rock and computerInput = scissors then user wins
if userInput = paper and computerInput = rock then user wins
if userInput = scissors and computerInput = paper then user wins
else computer wins
*/

userInput = prompt("Choose rock, paper, or scissors");

if (userInput.toLowerCase() !== "rock" && userInput.toLowerCase() !== "paper" && userInput.toLowerCase() !== "scissors") {
    console.log("Invalid input");
} else {

    const computerChoices = ["rock", "paper", "scissors"];

    let computerInput = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log("Your choice: " + userInput)
    console.log("Computer's choice: " + computerInput)

    if (userInput == computerInput) {
        console.log("No winners. Play again.");
    } else if (userInput == "rock" && computerInput == "scissors") {
        console.log("You won!");
    } else if (userInput == "paper" && computerInput == "rock") {
        console.log("You won!");
    } else if (userInput == "scissors" && computerInput == "paper") {
        console.log("You won!");
    } else {
        console.log("You lost!");
    }
}