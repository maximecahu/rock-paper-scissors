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
let roundNumber = 1;





function play(userInput) {

    const buttonRock = document.getElementById("rock");
    const buttonPaper = document.getElementById("paper");
    const buttonScissors = document.getElementById("scissors");


    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
    setTimeout(() => {
        buttonRock.disabled = false;
        buttonPaper.disabled = false;
        buttonScissors.disabled = false;
    }, 2500);




    const div = document.querySelector(".imageVS");
    function imageShake() {
        div.classList.remove("imageVS");
        div.classList.add("shaking-imageVS");

        setTimeout(() => {
            div.classList.remove("shaking-imageVS");
            div.classList.add("imageVS");
            div.src = `images/VS.png`;
        }, 2500);
    }


    const computerChoices = ["rock", "paper", "scissors"];
    let computerInput = computerChoices[Math.floor(Math.random() * computerChoices.length)];




    console.log("Your choice: " + userInput);
    console.log("Computer's choice: " + computerInput + "\n");




    document.getElementById('imageYou')
        .src = `images/${userInput}.png`;

    document.getElementById('imagePc')
        .src = `images/${computerInput}2.png`;

    setTimeout(function () {
        document.getElementById('imageYou')
            .src = `images/summon.png`;

        document.getElementById('imagePc')
            .src = `images/summon2.png`;
    }, 2500);

    /*function photoChangeYou() {

    }*/
    const photoPc = document.querySelector("#photoPc");
    const photoYou = document.querySelector("#photoYou");

    function photoChangePcWin() {
        computerGIF = ["https://media.giphy.com/media/oRjN0GvwP6iM7qU35f/giphy.gif",
            "https://media.giphy.com/media/IrQcyTog3X8VW/giphy.gif",
            "https://media.giphy.com/media/NoGhgVB9ybIJ2/giphy.gif"]
        let randomGIF = computerGIF[Math.floor(Math.random() * computerChoices.length)];
        photoPc.src = randomGIF;
        setTimeout(() => {
            photoPc.src = "https://media.giphy.com/media/H4zeDO4ocDYqY/giphy.gif";
        }, 3000);
    }

    function photoChangePcLose() {
        computerGIF = ["https://media.giphy.com/media/l3vRhaxVcQ1i0CZlC/giphy.gif",
            "https://media.giphy.com/media/9CVVIhIUfCExy/giphy.gif",
            "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif",
            "https://media.giphy.com/media/KiXiO1iR3fFhC/giphy-downsized-large.gif",
            "https://media.giphy.com/media/ySpxjJmsq9gsw/giphy.gif"]
        let randomGIF = computerGIF[Math.floor(Math.random() * computerChoices.length)];
        photoPc.src = randomGIF;
        setTimeout(() => {
            photoPc.src = "https://media.giphy.com/media/H4zeDO4ocDYqY/giphy.gif";
        }, 2500);
    }

    function photoChangeTie() {
        photoYou.style.height = "5rem";
        photoYou.style.marginBottom = "0";
        photoYou.src = "https://media.giphy.com/media/F3BeiZNq6VbDwyxzxF/giphy.gif";
        photoPc.src = "https://media.giphy.com/media/7xa9Sj7EjoByes1LMa/giphy.gif";
        setTimeout(() => {
            photoYou.style.height = "3rem";
            photoYou.style.marginBottom = "2rem";
            photoYou.src = "images/you.png"
            photoPc.src = "https://media.giphy.com/media/H4zeDO4ocDYqY/giphy.gif";
        }, 2000);
    }




    if (userInput == computerInput) {
        roundNumber += 1;
        imageShake();
        photoChangeTie()
        console.log("No winners. Play again.");
        console.log("Your score: " + userScore)
        console.log("Computer's choice: " + computerScore + "\n\n")


    } else if (userInput == "rock" && computerInput == "scissors") {

        userScore += 1;
        roundNumber += 1;
        imageShake();
        photoChangePcLose()
        div.src = `images/youWin.png`;

        console.log("You won this round!\n");
        console.log("Your score: " + userScore)
        console.log("Computer's choice: " + computerScore + "\n\n")


    } else if (userInput == "paper" && computerInput == "rock") {

        userScore += 1;
        roundNumber += 1;
        imageShake();
        photoChangePcLose()
        div.src = `images/youWin.png`;

        console.log("You won this round!\n");
        console.log("Your score: " + userScore)
        console.log("Computer's choice: " + computerScore + "\n\n")

    } else if (userInput == "scissors" && computerInput == "paper") {

        userScore += 1;
        roundNumber += 1;
        imageShake();
        photoChangePcLose()
        div.src = `images/youWin.png`;

        console.log("You won this round!\n");
        console.log("Your score: " + userScore)
        console.log("Computer's choice: " + computerScore + "\n\n")

    } else {


        computerScore += 1;
        roundNumber += 1;
        imageShake();
        photoChangePcWin();
        div.src = `images/youLose.png`;

        console.log("You lost this round!\n");
        console.log("Your score: " + userScore)
        console.log("Computer's choice: " + computerScore + "\n\n")

    }

    setTimeout(() => {
        document.getElementById('scoreYou')
            .innerHTML = `${userScore}`;
        document.getElementById('scorePc')
            .innerHTML = `${computerScore}`;
        document.getElementById('round')
            .innerHTML = `Round ${roundNumber}!`;

    }, 2500);


    function gameEnd() {
        buttonRock.disabled = true;
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;
    }


    if (userScore == 10) {
        setTimeout(() => {
            div.src = "images/gameWon.png";
            gameEnd();
        }, 2500);
    } else if (computerScore == 10) {
        setTimeout(() => {
            div.src = "images/gameOver.png"
            gameEnd();
        }, 2500);
    }



}


