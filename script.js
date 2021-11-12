let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

/* Computer chooses rock, paper, or scissors randomly */
function computerPlay() {
	const choices = ['rock', 'paper', 'scissors']
	return choices[Math.floor(Math.random() * 3)]
}

/* Game Over condition */
function gameOver() {
    return playerScore === 5 || computerScore === 5;
}


/* A round of the game */
function playRound(playerSelection, computerSelection) {
    if(!gameOver()) {
        /* Player and Computer choose the same (tied) */
        if (playerSelection === computerSelection) {
            document.getElementById('result').innerText = (`You tie! Player chose ${playerSelection} and computer chose ${computerSelection}`);
            document.getElementById('score').innerText = (`Player: ${playerScore} / Computer: ${computerScore}`)
        
        /* Player chooses rock */
        } else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                computerScore++;
                document.getElementById('result').innerText = (`You lose! Player chose ${playerSelection} and computer chose ${computerSelection}`);
                document.getElementById('score').innerText = (`Player: ${playerScore} / Computer: ${computerScore}`)
            } else if (computerSelection === 'scissors') {
                playerScore++;
                document.getElementById('result').innerText = (`You win! Player chose ${playerSelection} and computer chose ${computerSelection}`);
                document.getElementById('score').innerText = (`Player: ${playerScore} / Computer: ${computerScore}`)
            }

        /* Player chooses paper */
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                computerScore++;
                document.getElementById('result').innerText = (`You lose! Player chose ${playerSelection} and computer chose ${computerSelection}`);
                document.getElementById('score').innerText = (`Player: ${playerScore} / Computer: ${computerScore}`)
            } else if (computerSelection === 'rock') {
                playerScore++;
                document.getElementById('result').innerText = (`You win! Player chose ${playerSelection} and computer chose ${computerSelection}`);
                document.getElementById('score').innerText = (`Player: ${playerScore} / Computer: ${computerScore}`)
            }

        /* Player chooses scissors */
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                computerScore++;
                document.getElementById('result').innerText = (`You lose! Player chose ${playerSelection} and computer chose ${computerSelection}`);
                document.getElementById('score').innerText = (`Player: ${playerScore} / Computer: ${computerScore}`)
            } else if (computerSelection === 'paper') {
                playerScore++;
                document.getElementById('result').innerText = (`You win! Player chose ${playerSelection} and computer chose ${computerSelection}`);
                document.getElementById('score').innerText = (`Player: ${playerScore} / Computer: ${computerScore}`)
            }
        } 

        /* Game over message */
        if (playerScore === 5) {
            result.style.color = 'rgb(28, 193, 28)';
            document.getElementById('result').innerText = ("You win the whole game!");
            return tryAgain();
        } else if (computerScore === 5) {
            result.style.color = 'red';
            document.getElementById('result').innerText = ("You lose the whole game.");
            return tryAgain();
        }

    } 
}

/* Function for when a button is clicked */
buttons.forEach(button => {
    button.addEventListener('click', event => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        let result = playRound(playerSelection,computerSelection);
    });
});

function tryAgain() {
    const btn = document.createElement('button');
    btn.textContent = "Try again?";
    btn.style.margin = '20px 0';
    space.appendChild(btn);
    btn.addEventListener('click', event => {
        location.reload();
    });
}
