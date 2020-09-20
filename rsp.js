
var arr = ["Rock", "paper", "scissors"]; 

function computerPlay () {
    return arr[Math.floor(Math.random() * arr.length)]; 
}
let playerSelection = "";

function playerPlay () {
    // return arr[Math.floor(Math.random() * arr.length)]; 
    
    while (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors") {
        let playerSelection = prompt("Choose rock, paper or scissors");
        playerSelction = playerSelection.toLowerCase()
        console.log(playerSelection)
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
            alert ("Oops please choose rock, paper or scissors")
            console.log(playerSelection)
            }
        else {
            return playerSelection
            }
        }
        
    }
    

function playOne (player, computer) {

    if (player === "rock") {
        if (computer === "rock") {
            return player + " ties " + computer; 
        }
        else if (computer === "scissors") {
            return "player wins. rock beats scissors"
        }
        else if (computer === "paper") {
            return "computer wins. paper beats rock"
        }
    }
    else if (player === "paper") {
        if (computer === "paper") {
            return player + " ties " + computer;
        }
        else if (computer === "rock") {
            return "player wins. paper beats rock"
        }
        else if (computer === "scissors") {
            return "computer wins. scissors beat paper"
        }
    }
    else if (player === "scissors") {
        if (computer === "scissors") {
            return player + " ties " + computer;
        }
        else if (computer === "paper") {
            return "player wins. paper beats rock"
        }
        else if (computer === "rock") {
            return "computer wins. rock beats scissors"
        }
    }
}

for ( i=0; i<5; i++) {
console.log(playOne(playerPlay(), computerPlay()));
}