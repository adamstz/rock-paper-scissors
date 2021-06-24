
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
        switch(computerSelection){
            case "rock":
                return "You Lose! Rock beats Scissors!";
            case "paper":
                return "You win! Scissors beats Paper";
            case "scissors":
                return "You tie!";  
           }
    }
    
}
function game(){
        let player_choice;
        const buttons = document.querySelectorAll('button');
        const results = document.querySelector('#results');
        const display_player = document.querySelector('#player-choice');
        const display_computer = document.querySelector('#computer-choice');
        buttons.forEach((button) => {
            
            button.addEventListener('click', () =>{
                let computer_choice = computerPlay();
                player_choice = button.id;
                display_player.textContent = `Your choice: ${player_choice}`;
                display_computer.textContent = `Computer choice: ${computer_choice}`;
                results.textContent = singleRound(player_choice, 
                    computer_choice);

            });
            
        });  
}
        
game();

