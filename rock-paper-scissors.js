
function computerPlay(){
    let choice = Math.floor(Math.random() * 4);
    if (choice == 1){
        return "Rock";

    }
    else if(choice == 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
function singleRound(playerSelection, computerSelection){
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection == "rock"){
       switch(computerSelection){
        case "rock":
            return "You tie!";
        case "paper":
            return "You lose! Paper beats Rock!";
        case "scissors":
            return "You win! Rock beats Scissors!";  
       }
    }
    else if(playerSelection == "paper"){
        switch(computerSelection){
            case "rock":
                return "You win! Paper beats Rock!";
            case "paper":
                return "You tie!";
            case "scissors":
                return "You lose! Scissors beat Paper!";  
           }
        }
    else{
        return "not a valid input";
    }
    
}
function game(){
    for(let i = 0; i< 5;i++){
        let player_choice = window.prompt("Please enter a hand").toLowerCase();
        let computer_choice = computerPlay();
        
        if (player_choice == "rock" || 
        player_choice == "paper" ||
        player_choice == "scissors"){
            console.log("Your hand is " + player_choice);
            console.log("The computer's hand is " + computer_choice);
            console.log(singleRound(player_choice,computer_choice));
        }
        else{
            console.log("Not a valid input");
        }
        
    }
}
game();

