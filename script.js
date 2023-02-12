/*
User inputs choice of rock or paper or scissors
Computer randomly selects an option from rock paper scissors
if userInput == computerInput then no winner
if userInput == rock and computerInput = scissors then user wins
if userInput == paper and computerInput = rock then user wins
if userInput == scissors and computerInput = paper then user wins
else computer wins
*/


let userScore = 4;
let computerScore = 4;
let roundNumber = 1;
let imgElement = document.getElementById("imageVS");

function play(userInput) {

    const div = document.querySelector(".imageVS");

    div.classList.remove("imageVS");
    div.classList.add("shaking-imageVS");

    setTimeout(function () {
        div.classList.remove("shaking-imageVS");
        div.classList.add("imageVS");
    }, 500);

    const computerChoices = ["rock", "paper", "scissors"];

    let computerInput = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log("Your choice: " + userInput);
    console.log("Computer's choice: " + computerInput + "\n");

    document.getElementById('imageYou')
        .src = `images/${userInput}.png`;

    document.getElementById('imagePc')
        .src = `images/${computerInput}2.png`;


    setTimeout(function () {



        if (userInput == computerInput) {
            roundNumber += 1;
            console.log("No winners. Play again.");
            console.log("Your score: " + userScore)
            console.log("Computer's choice: " + computerScore + "\n\n")
        } else if (userInput == "rock" && computerInput == "scissors") {
            console.log("You won this round!\n");
            userScore += 1;
            roundNumber += 1;
            console.log("Your score: " + userScore)
            console.log("Computer's choice: " + computerScore + "\n\n")

        } else if (userInput == "paper" && computerInput == "rock") {
            console.log("You won this round!\n");
            userScore += 1;
            roundNumber += 1;
            console.log("Your score: " + userScore)
            console.log("Computer's choice: " + computerScore + "\n\n")

        } else if (userInput == "scissors" && computerInput == "paper") {
            console.log("You won this round!\n");
            userScore += 1;
            roundNumber += 1;
            console.log("Your score: " + userScore)
            console.log("Computer's choice: " + computerScore + "\n\n")

        } else {
            console.log("You lost this round!\n");
            computerScore += 1;
            roundNumber += 1;
            console.log("Your score: " + userScore)
            console.log("Computer's choice: " + computerScore + "\n\n")

        }
        document.getElementById('scoreYou')
            .innerHTML = `${userScore}`;
        document.getElementById('scorePc')
            .innerHTML = `${computerScore}`;
        document.getElementById('round')
            .innerHTML = `Round ${roundNumber}!`;



    }, 2000);

    if (userScore === 5) {
        imgElement.src = "images/youWin.png";



    } else if (computerScore === 5) {
        imgElement.src = "images/youLose.png";

    }



}


