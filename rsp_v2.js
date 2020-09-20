var arr = ["rock", "paper", "scissors"];
let gamesPlayed = 0;
let gameStart = false;
let playerPick = "";
let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    return arr[Math.floor(Math.random() * arr.length)]; 
}

function chooseWinner (player, computer) {

    if (player === "rock") {
        if (computer === "rock") {
            return player + " ties " + computer; 
        }
        else if (computer === "scissors") {
            playerScore += 1;
            gamesPlayed += 1;
            return "player wins. rock beats scissors"
        }
        else if (computer === "paper") {
            computerScore += 1;
            gamesPlayed += 1;
            return "computer wins. paper beats rock"
        }
    }
    else if (player === "paper") {
        if (computer === "paper") {
            return player + " ties " + computer;
        }
        else if (computer === "rock") {
            playerScore += 1;
            gamesPlayed += 1;
            return "player wins. paper beats rock"
        }
        else if (computer === "scissors") {
            computerScore += 1;
            gamesPlayed += 1;
            return "computer wins. scissors beat paper"
        }
    }
    else if (player === "scissors") {
        if (computer === "scissors") {
            return player + " ties " + computer;
        }
        else if (computer === "paper") {
            playerScore += 1;
            gamesPlayed += 1;
            return "player wins. scissors beats paper"
        }
        else if (computer === "rock") {
            computerScore += 1;
            gamesPlayed += 1;
            return "computer wins. rock beats scissors"
        }
    }

}

function startGame () {
    return gameStart = true;
}

function endGame () {
    return gameStart = false;   
}

function restartGamesPlayed () {
    return gamesPlayed = 0;  
}

function restartPlayerScore () {
    return playerScore = 0; 
}
function restartComputerScore () {
    return computerScore = 0;  
}

let startButton = document.querySelector('#start-game-btn');
startButton.addEventListener('click', startGame);


const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', selectItem));
        
    function selectItem() {
        if (gameStart && gamesPlayed < 5) {
            console.log(gameStart)
            let playerPick = this.value;
            console.log(playerPick);
            let computerPick = computerPlay()
            console.log(computerPick);
            console.log(chooseWinner(playerPick, computerPick));
            console.log(playerScore);
            console.log(computerScore);
            console.log(gamesPlayed);
        }
        else {
            endGame();
            restartGamesPlayed();
            restartPlayerScore();
            restartComputerScore();
        }

    }

