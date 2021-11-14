let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('img');
const computerBox = document.getElementById('computerbox');
let computer = document.getElementById('computer');
let computerPic = document.createElement('img');


/* Computer chooses rock, paper, or scissors randomly */


/* Game Over condition */
function gameOver() {
    return playerScore === 5 || computerScore === 5;
}



/* A round of the game */
function playRound(playerSelection, computerSelection) {
    if(!gameOver()) {
        personPlay();
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
        instructionsGone();
    });
});

function tryAgain() {
    const result = document.getElementById('result');
    const tryBtn = document.createElement('button');
    var br = document.createElement("br");
    result.appendChild(br);
    tryBtn.textContent = "Try again?";
    tryBtn.style.margin = '20px 0';
    tryBtn.classList.add('try-again');
    result.appendChild(tryBtn);
    tryBtn.addEventListener('click', event => {
        location.reload();
    });
}

function computerPlay() {
    const weapons = ['rock', 'paper', 'scissors'];
    const computerSelection = weapons[Math.floor(Math.random() * weapons.length)];
    const computerIcon = document.querySelector('.computer-icon');

    computerIcon.classList.remove('fa-robot', 'fa-hand-rock', 'fa-hand-paper', 'fa-hand-peace');
    if (computerSelection === 'rock') {
      computerIcon.classList.add('fa-hand-rock');
      computerIcon.style.color = "#f7c49c";
    } else if (computerSelection === 'paper') {
      computerIcon.classList.add('fa-hand-paper');
      computerIcon.style.color = "#f7c49c";
    } else if (computerSelection === 'scissors') {
      computerIcon.classList.add('fa-hand-peace');
      computerIcon.style.color = "#f7c49c";
    }
    return computerSelection;
  }
  
  function personPlay() {
      const personIcon = document.querySelector('.person-icon');
      personIcon.classList.remove('fa-user', 'fa-hand-rock', 'fa-hand-paper', 'fa-hand-peace');
      if (playerSelection === 'rock') {
          personIcon.classList.add('fa-hand-rock');
          personIcon.style.color = "#f7c49c";
      } else if (playerSelection === 'paper') {
          personIcon.classList.add('fa-hand-paper');
          personIcon.style.color = "#f7c49c";
      } else if (playerSelection === 'scissors') {
          personIcon.classList.add('fa-hand-peace');
          personIcon.style.color = "#f7c49c";
      }
  } 

  function instructionsGone() {
      const instrP = document.getElementById('instructions');
      instrP.textContent = "";
  }
