console.log("log test");


function getComputerChoice(){
    let options=['Rock','Paper','Scissors']
    return options[Math.floor(Math.random()*3)]
}

let computerSelection=getComputerChoice()
let playerSelection = prompt("Rock, Paper, Scissors! Choose!")
let score=0



function playRound(playerSelection,computerSelection){
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return "It's a tie!"
    }
    else if(playerSelection.toLowerCase() == 'rock'){
        if(computerSelection =='Paper'){
            score--
            return "You lose! Paper beats rock"
        }
        if(computerSelection=='Scissors'){
            score++
            return "You win! Rock beats scissors"
        }
    }
    else if(playerSelection.toLowerCase() == 'scissors'){
        if(computerSelection =='Rock'){
            score--
            return "You lose! Rock beats scissors"
        }
        if(computerSelection=='Paper'){
            score++
            return "You win! Scissors beats paper"
        }
    }
    else if(playerSelection.toLowerCase() == 'paper'){
        if(computerSelection =='Rock'){
            score++
            return "You win! Paper beats rock"
        }
        if(computerSelection=='Scissors'){
            score--
            return "You lose! Scissors beats paper"
        }
    }
}

function game(){
    for(let i=0; i<5; i++){
        console.log(`computer: ${computerSelection}`)
        console.log(`player: ${playerSelection}`)
        console.log(playRound(playerSelection,computerSelection))
        console.log(score)
        computerSelection=getComputerChoice()
        playerSelection = prompt("One more time - Rock, Paper, Scissors!")
    }
    return score
}

 console.log(game())