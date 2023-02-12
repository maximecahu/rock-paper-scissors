/*
User inputs choice of rock or paper or scissors
Computer randomly selects an option from rock paper scissors
if userInput == computerInput then no winner
if userInput == rock and computerInput = scissors then user wins
if userInput == paper and computerInput = rock then user wins
if userInput == scissors and computerInput = paper then user wins
else computer wins
*/
let userScore = 0;
let computerScore = 0;


if (userInput.toLowerCase() !== "rock" && userInput.toLowerCase() !== "paper"
    && userInput.toLowerCase() !== "scissors") {
    console.log("Invalid input\n\n");
    i--;
} else {

    const computerChoices = ["rock", "paper", "scissors"];

    let computerInput = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log("Your choice: " + userInput);
    console.log("Computer's choice: " + computerInput + "\n");

    if (userInput == computerInput) {
        console.log("No winners. Play again.");
        console.log("Your score: " + userScore)
        console.log("Computer's choice: " + computerScore + "\n\n")
    } else if (userInput == "rock" && computerInput == "scissors") {
        console.log("You won this round!\n");
        userScore += 1;
        console.log("Your score: " + userScore)
        console.log("Computer's choice: " + computerScore + "\n\n")
    } else if (userInput == "paper" && computerInput == "rock") {
        console.log("You won this round!\n");
        userScore += 1;
        console.log("Your score: " + userScore)
        console.log("Computer's choice: " + computerScore + "\n\n")
    } else if (userInput == "scissors" && computerInput == "paper") {
        console.log("You won this round!\n");
        userScore += 1;
        console.log("Your score: " + userScore)
        console.log("Computer's choice: " + computerScore + "\n\n")
    } else {
        console.log("You lost this round!\n");
        computerScore += 1;
        console.log("Your score: " + userScore)
        console.log("Computer's choice: " + computerScore + "\n\n")
    }
}


if (userScore > computerScore) {
    console.log("You won the game!")
} else if (userScore < computerScore) {
    console.log("The machines will rule over the world!")
} else {
    console.log("The computer hacked the game and added 1 point to its score. The computer won the game. The machines will rules over the world!")
}