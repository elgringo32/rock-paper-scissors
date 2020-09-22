var arr = ["rock", "paper", "scissors"];
var gamesPlayed = 0;
var gameStart = "";
var playerPick = "";
var playerScore = 0;
var computerScore = 0;
var playerMessage = document.querySelector('#player-message-section')

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
    if(gameStart === false) {playerMessage.innerHTML = 'Game Restarted';}
    if(gameStart === "") {playerMessage.innerHTML = 'Let\'s Go';}
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

var startButton = document.querySelector('#start-game-btn');
startButton.addEventListener('click', startGame);


const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', selectItem));
        
    function selectItem() {
            var playerPick = this.value;
            var computerPick = computerPlay();
            
            if (gameStart && gamesPlayed < 5) {
                playerMessage.innerHTML = (chooseWinner(playerPick, computerPick));
                console.log({
                    computerScore: computerScore,
                    playerScore: playerScore
                });
                if (playerScore === 3) {
                    document.querySelector('#player-message-section').innerHTML = 'Player Wins';
                    endGame();
                    restartGamesPlayed();
                    restartPlayerScore();
                    restartComputerScore();
                }
                else if (computerScore === 3) {
                    document.querySelector('#player-message-section').innerHTML = 'Computer Wins';
                    endGame();
                    restartGamesPlayed();
                    restartPlayerScore();
                    restartComputerScore();
                }
            }


            
    }

    

