let player_score = 0;
let computer_score =0;
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
            if(player_score != 0){
                player_score --;
            }
            computer_score ++;
            return "You lose! Paper beats Rock!";
        case "scissors":
            if(computer_score != 0){
                computer_score --;
            }
            player_score ++;
            return "You win! Rock beats Scissors!";  
       }
    }
    else if(playerSelection == "paper"){
        switch(computerSelection){
            case "rock":
                
                player_score ++;
                return "You win! Paper beats Rock!";
            case "paper":
                return "You tie!";
            case "scissors":
                
                computer_score ++;
                return "You lose! Scissors beat Paper!";  
           }
        }
    else{
        switch(computerSelection){
            case "rock":
                
                computer_score ++;
                return "You Lose! Rock beats Scissors!";
            case "paper":
                
                player_score ++;
                return "You win! Scissors beats Paper";
            case "scissors":
                return "You tie!";  
           }
    }
    
}
function game(){
        let player_choice;
        const buttons = document.querySelectorAll('img');
        const results = document.querySelector('#results');
        const display_player = document.querySelector('#player-choice');
        const display_computer = document.querySelector('#computer-choice');
        const player_points = document.querySelector('#player-score');
        const computer_points = document.querySelector('#computer-score');
        buttons.forEach((button) => {
            
            button.addEventListener('click', () =>{
                
                let computer_choice = computerPlay();
                player_choice = button.id;
                display_player.textContent = `Your choice: ${player_choice}`;
                display_computer.textContent = `Computer's choice: ${computer_choice}`;
                results.textContent = singleRound(player_choice, 
                    computer_choice);
                player_points.textContent = `Your Score: ${player_score}`;
                computer_points.textContent = `Computer Score: ${computer_score}`;    
                if (computer_score == 5){
                    
                    setTimeout( () => {alert("You've lost!");
                        player_points.textContent = `Your Score: 0`;
                        computer_points.textContent = `Computer Score: 0`;
                        computer_score = 0;
                        player_score = 0;
                        results.textContent = "Results Per Hand Show Here";
                        }, 200);
                    
                    
                }
                if (player_score ==5){
                    
                    setTimeout( () => {alert("You've won!");
                        player_points.textContent = `Your Score: 0`;
                        computer_points.textContent = `Computer Score: 0`;
                        computer_score = 0;
                        player_score = 0;
                        results.textContent = "Results Per Hand Show Here";
                        }, 200);
                    
                    
                }
                
            });
            
        });  
}
        
game();

